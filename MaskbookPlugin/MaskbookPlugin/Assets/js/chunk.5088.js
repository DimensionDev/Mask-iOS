"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5855],{

/***/ 99304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ MaskAlert)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(32027);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Alert/alertClasses.js
var alertClasses = __webpack_require__(66494);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(3982);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/Close.js
var Close = __webpack_require__(91158);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
;// CONCATENATED MODULE: ../icons/general/Info.tsx


const InfoIcon = (0,utils/* createIcon */.I)('Info', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: "0.2",
            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z",
            fill: "currentColor"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../dashboard/src/components/MaskAlert/index.tsx






const InfoAlert = (0,styled/* default */.ZP)(Alert/* default */.Z)(({ theme  })=>({
        [`&  > .${alertClasses/* default.message */.Z.message}`]: {
            display: 'flex',
            alignItems: 'center',
            lineHeight: '16px',
            color: `${src/* MaskColorVar.secondaryInfoText */.ZN.secondaryInfoText}`,
            fontSize: `${theme.typography.caption.fontSize}`
        },
        [`&  > .${alertClasses/* default.icon */.Z.icon}`]: {
            alignItems: 'center'
        },
        [`&  > .${alertClasses/* default.action */.Z.action}`]: {
            alignItems: 'center'
        },
        // standard
        [`&.${alertClasses/* default.standardInfo */.Z.standardInfo}`]: {
            backgroundColor: `${(0,src/* getMaskColor */.nb)(theme).infoBackground}`
        },
        [`&.${alertClasses/* default.standardInfo */.Z.standardInfo} .${alertClasses/* default.icon */.Z.icon}`]: {
            color: `${(0,src/* getMaskColor */.nb)(theme).secondaryInfoText}`
        },
        [`&.${alertClasses/* default.standardInfo */.Z.standardInfo} .${alertClasses/* default.action */.Z.action}`]: {
            color: `${(0,src/* getMaskColor */.nb)(theme).secondaryInfoText}`
        },
        // error
        [`&.${alertClasses/* default.standardError */.Z.standardError}`]: {
            backgroundColor: `${src/* MaskColorVar.redMain.alpha */.ZN.redMain.alpha(0.15)}`
        },
        [`&.${alertClasses/* default.standardError */.Z.standardError} .${alertClasses/* default.icon */.Z.icon}`]: {
            color: `${(0,src/* getMaskColor */.nb)(theme).redMain}`
        },
        [`&.${alertClasses/* default.standardError */.Z.standardError} .${alertClasses/* default.action */.Z.action}`]: {
            color: `${(0,src/* getMaskColor */.nb)(theme).redMain}`
        },
        [`&.${alertClasses/* default.standardError */.Z.standardError} .${alertClasses/* default.message */.Z.message}`]: {
            color: `${(0,src/* getMaskColor */.nb)(theme).redMain}`
        }
    })
);
const MaskAlert = /*#__PURE__*/ (0,react.memo)(({ description , type ='info'  })=>{
    const [openAlert, setOpenAlert] = (0,react.useState)(true);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
        in: openAlert,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoAlert, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoIcon, {
            }),
            severity: type,
            action: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                "aria-label": "close",
                color: "inherit",
                size: "small",
                onClick: (0,react.useCallback)(()=>setOpenAlert(false)
                , []),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                    fontSize: "inherit"
                })
            }),
            children: description
        })
    }));
});


/***/ }),

/***/ 64110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ DesktopMnemonicConfirm),
  "i": () => (/* reexport */ MnemonicReveal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(97448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/DesktopMnemonicConfirm.tsx



const DesktopMnemonicConfirm = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { puzzleWords , indexes , onChange  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: puzzleWords.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    sx: {
                        width: '100%',
                        userSelect: 'none'
                    },
                    label: i + 1 + '.',
                    variant: "filled",
                    size: "small",
                    value: word,
                    InputProps: {
                        disableUnderline: true
                    },
                    disabled: indexes && !indexes.includes(i),
                    onChange: (e)=>onChange(e.target.value, indexes ? indexes.indexOf(i) : i)
                })
            }, i)
        )
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/MnemonicReveal.tsx



const WordCard = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
    padding: ${theme.spacing(1)};
    border-radius: 6px;
    color: ${theme.palette.mode === 'dark' ? src/* MaskColorVar.textPrimary */.ZN.textPrimary : src/* MaskColorVar.textLink */.ZN.textLink};
    font-size: 14;
    background-color: ${src/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)};
    display: flex;
    justify-content: center;
    align-items: center;
`
);
function MnemonicReveal(props) {
    const { words  } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: words.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WordCard, {
                    children: item
                })
            }, index + item)
        )
    }));
}

;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/index.tsx




/***/ }),

/***/ 20317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ButtonContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46754);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65111);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70745);



const ButtonContainerUI = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__/* .default */ .ZP)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(({ theme  })=>({
        margin: `${theme.spacing(7)} auto`,
        width: '75%',
        [`& > .${_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default.root */ .Z.root}`]: {
            width: '100%',
            fontSize: 16
        }
    })
);
const ButtonContainer = ({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonContainerUI, {
        my: 7,
        direction: "row",
        spacing: 2,
        justifyContent: "center",
        children: children
    }));
};


/***/ }),

/***/ 74331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46754);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49283);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);





const HeaderContainer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)('header')(({ theme  })=>`
    flex: 1;
    width: 78%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 30%;
    min-height: 25%;`
);
const TitleContainer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)('div')(({ theme  })=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
);
const Subtitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(({ theme  })=>`
    padding-top: 30px;
`
);
const Action = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(({ theme  })=>`
    color: ${theme.palette.mode === 'dark' ? _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.textPrimary */ .ZN.textPrimary : _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary};
    font-weight: bold;
`
);
const Header = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ title , subtitle , action  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TitleContainer, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
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

/***/ 66549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uT": () => (/* binding */ Body),
  "pz": () => (/* binding */ ColumnContentLayout),
  "$_": () => (/* binding */ Footer),
  "ud": () => (/* binding */ RestoreBlueLogo),
  "g2": () => (/* binding */ SignUpAccountLogo)
});

// UNUSED EXPORTS: RestoreLogo

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
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
var SignUpAccount = __webpack_require__(71619);
// EXTERNAL MODULE: ../icons/general/Restore.tsx
var Restore = __webpack_require__(47470);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
;// CONCATENATED MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx


const ColumnContentLayout = (0,styled/* default */.ZP)('div')(({ theme  })=>`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`
);
const Body = (0,styled/* default */.ZP)('main')(({ theme  })=>`
    flex: 2;
    width: 78%;
`
);
const Footer = (0,styled/* default */.ZP)('footer')(({ theme  })=>`
    flex: 1;
    width: 78%;
`
);
const SignUpAccountLogo = (0,styled/* default */.ZP)(SignUpAccount/* SignUpAccountIcon */.B)(({ theme  })=>`
    width: 100%;
    height: 96px;
    margin-bottom: ${theme.spacing(10)};
`
);
const RestoreBlueLogo = (0,styled/* default */.ZP)(RestoreBlueIcon)(({ theme  })=>`
    width: 100%;
    height: 96px;
    margin-bottom: ${theme.spacing(10)};
`
);
const RestoreLogo = (0,styled/* default */.ZP)(Restore/* RestoreIcon */.v)(({ theme  })=>`
    width: 100%;
    height: 96px;
    margin-bottom: ${theme.spacing(10)};
`
);


/***/ }),

/***/ 30248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ RowLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36719);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46754);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _masknet_theme_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42118);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78144);






const LayoutContainer = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)('div')(({ theme  })=>`
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
`
);
const LeftSide = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)('div')(({ theme  })=>`
    padding: ${theme.spacing(5)};
    width: 30%;
    max-width: 500px;
    background: ${theme.palette.primary.main};
`
);
const RightContent = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)('div')(({ theme  })=>`
    flex: 1;
    display: flex;
    justify-content: center;
    background: ${theme.palette.mode === 'dark' ? _masknet_theme_constants__WEBPACK_IMPORTED_MODULE_2__/* .LightColor.textPrimary */ .Ci.textPrimary : theme.palette.common};
`
);
const RowLayout = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutContainer, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LeftSide, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .MaskBannerIcon */ .i, {
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RightContent, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    maxWidth: "md",
                    children: children
                })
            })
        ]
    }));
});


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.5088.js
/***/ 75843:
=======
/***/ 36719:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5855.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ MaskBannerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.5088.js
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);
=======
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5855.js


const MaskBannerIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('MaskBanner', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M194.803 26.9428C201.401 26.9428 208.897 29.4783 209.345 37.5919H200.12C199.928 35.2466 197.75 34.169 194.867 34.169C192.176 34.169 190.959 35.1832 190.959 36.3876C190.959 37.4018 191.728 38.3526 194.162 38.7963L199.992 39.7471C205.822 40.8247 209.665 43.6138 209.665 49.0652C209.665 56.1646 203.195 59.4608 195.123 59.4608C186.987 59.4608 180.388 56.1012 179.748 47.9242L188.973 47.9876C189.421 50.6499 191.664 51.8543 194.931 51.8543C197.686 51.8543 199.351 51.0302 199.351 49.6991C199.351 48.6849 198.39 47.8608 196.34 47.5439L190.062 46.4663C184.681 45.5788 180.965 42.5996 180.965 37.2116C180.965 30.746 186.538 26.9428 194.803 26.9428ZM155.916 27.0623C159.305 27.0623 162.119 27.9488 164.421 29.4051V27.7588H174.782V58.469H164.421V56.7593C162.119 58.2157 159.305 59.1022 155.916 59.1022C147.538 59.1022 140.504 52.2003 140.504 43.0822C140.504 33.9009 147.538 27.0623 155.916 27.0623ZM95.233 15.3463L110.768 38.3851L126.238 15.3463H134.326V58.5044H123.478V36.8619L113.785 51.6499V51.7133H107.751V51.6499L97.9933 36.7349L98.0575 58.5044H87.209V15.3463H95.233ZM225.751 13.553V39.3209L236.592 27.7981H248.973L237.169 40.3339L250 58.5044H237.554L230.113 47.868L225.751 52.4898V58.5044H215.358V13.553H225.751ZM157.962 35.4205C153.742 35.4205 150.672 38.8398 150.672 43.0822C150.672 47.3247 153.742 50.6806 157.962 50.6806C160.265 50.6806 162.503 50.0474 164.421 47.8312V38.3332C162.503 36.1171 160.265 35.4205 157.962 35.4205Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M36 70C54.7777 70 70 54.7777 70 36C70 17.2223 54.7777 2 36 2C17.2223 2 2 17.2223 2 36C2 54.7777 17.2223 70 36 70ZM72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M57.7288 27.1507V39.1059H21.2881L19.7203 39.106C21.3797 46.3599 27.9653 51.7783 35.8368 51.7783C42.3444 51.7783 47.9731 48.0749 50.666 42.6926L57.7288 42.6925V52.7347C57.7288 55.1117 55.771 57.0386 53.3559 57.0386H18.3729C15.9578 57.0386 14 55.1117 14 52.7347V27.1507H57.7288ZM46.4719 42.6926C44.1528 46.0296 40.2546 48.2195 35.8368 48.2195C31.4189 48.2195 27.5207 46.0296 25.2017 42.6926H46.4719ZM26.5113 30.0199C23.0844 30.0199 20.2494 32.514 19.7779 35.7584L23.5054 35.7585C23.9152 34.5097 25.1061 33.6065 26.5113 33.6065C27.9165 33.6065 29.1073 34.5097 29.5172 35.7585L33.2447 35.7584C32.7732 32.514 29.9382 30.0199 26.5113 30.0199ZM45.2175 30.0199C41.7906 30.0199 38.9556 32.514 38.4841 35.7584L42.2116 35.7585C42.6215 34.5097 43.8123 33.6065 45.2175 33.6065C46.6227 33.6065 47.8136 34.5097 48.2234 35.7585L51.9509 35.7584C51.4794 32.514 48.6444 30.0199 45.2175 30.0199ZM53.3559 14C55.771 14 57.7288 15.9269 57.7288 18.3039V23.5641H14V18.3039C14 15.9269 15.9578 14 18.3729 14H53.3559Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "250",
                    height: "72",
                    fill: "white"
                })
            })
        })
    ]
}), '0 0 250 72', [
    128,
    36
]);


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.5088.js
/***/ 18456:
=======
/***/ 47470:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.5855.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ RestoreIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const RestoreIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Restore', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M7 25C7 23.8954 7.89543 23 9 23H39C40.1046 23 41 23.8954 41 25V35C41 35.5523 40.5523 36 40 36H8C7.44772 36 7 35.5523 7 35V25Z",
                fill: "#FFD149",
                fillOpacity: "0.1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M25.6245 36.13C25.2138 36.1818 25.0988 36.1714 24.8031 36.1714C24.1491 36.1714 23.5219 35.9094 23.0594 35.4431C22.5969 34.9767 22.3371 34.3442 22.3371 33.6847C22.3371 33.0252 22.5969 32.3927 23.0594 31.9264C23.5219 31.46 24.1491 31.198 24.8031 31.198C25.0988 31.198 25.2261 31.2105 25.6245 31.1214C30.2198 30.6928 33.8419 26.8355 33.8419 22.0836C33.8422 20.8867 33.6085 19.7015 33.1544 18.5957C32.7002 17.4899 32.0344 16.4851 31.195 15.6389C30.3556 14.7927 29.359 14.1215 28.2623 13.6638C27.1655 13.2061 25.9901 12.9708 24.8031 12.9713C20.0907 12.9713 16.2654 16.6216 15.8547 21.2554H20.6944L13.2983 29.5437L5.9043 21.2554H10.8734C11.0788 17.6706 12.636 14.3008 15.2259 11.8363C17.8157 9.3718 21.2422 7.9993 24.8031 8C26.6374 7.99973 28.4538 8.36381 30.1486 9.07146C31.8434 9.77911 33.3833 10.8165 34.6804 12.1243C35.9776 13.4321 37.0066 14.9847 37.7086 16.6936C38.4106 18.4024 38.7719 20.234 38.7719 22.0836C38.7662 25.6728 37.4026 29.1246 34.9595 31.7348C32.5163 34.345 29.1776 35.917 25.6245 36.13Z",
            fill: "#FFC524"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M6 29C6 27.8954 6.89543 27 8 27H40C41.1046 27 42 27.8954 42 29V39C42 39.5523 41.5523 40 41 40H7C6.44772 40 6 39.5523 6 39V29Z",
                fill: "#FFD149",
                fillOpacity: "0.2"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "3",
                    y: "19",
                    width: "42",
                    height: "21",
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter1_b",
                    x: "2",
                    y: "23",
                    width: "44",
                    height: "21",
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
                    x1: "5.9043",
                    y1: "36.1723",
                    x2: "38.7719",
                    y2: "36.1723",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            stopColor: "#FFB110"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
                            offset: "1",
                            stopColor: "#FFC524"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 48 48');


/***/ }),

/***/ 71619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ SignUpAccountIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


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