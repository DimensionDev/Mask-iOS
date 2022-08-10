(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2357],{

/***/ 35886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var deselectCurrent = __webpack_require__(80480);

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;


/***/ }),

/***/ 96277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84026);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85792);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35878);



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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
    });
};


/***/ }),

/***/ 85277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ButtonContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73932);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14820);



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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ButtonContainerUI, {
        my: 7,
        direction: "row",
        spacing: 2,
        justifyContent: "center",
        alignItems: "center",
        children: children
    });
};


/***/ }),

/***/ 95644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35878);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85792);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);





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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HeaderContainer, {
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
    });
});


/***/ }),

/***/ 36361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
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
var SignUpAccount = __webpack_require__(62812);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(51502);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(LogoBoxStyled, {
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "h3",
                textAlign: "center",
                children: t.persona()
            })
        ]
    });
});


/***/ }),

/***/ 94562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ RowLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48154);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35878);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77935);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);






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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LayoutContainer, {
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
    });
});


/***/ }),

/***/ 23634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useMnemonicWordsPuzzle)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17299);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58500);
/* harmony import */ var _mask_src_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91788);
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
        for(let i = 0; i < indexes.length; i += 1)words_[indexes[i]] = answerWords[i] ?? '';
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

/***/ 66194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUp)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/RowLayout.tsx
var RowLayout = __webpack_require__(94562);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(81117);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(23230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(48941);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Refresh.js
var Refresh = __webpack_require__(3857);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentHeader.tsx
var ColumnContentHeader = __webpack_require__(95644);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx + 1 modules
var ColumnContentLayout = __webpack_require__(36361);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(51502);
// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(88540);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/routePath.ts
var routePath = __webpack_require__(23930);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ButtonContainer.tsx
var ButtonContainer = __webpack_require__(85277);
// EXTERNAL MODULE: ../dashboard/src/hooks/useMnemonicWordsPuzzle.ts
var useMnemonicWordsPuzzle = __webpack_require__(23634);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(81267);
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

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 3 modules
var usePersonaContext = __webpack_require__(16386);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Print.js
var Print = __webpack_require__(58715);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/steps/PreviewDialog.tsx
var PreviewDialog = __webpack_require__(84732);
// EXTERNAL MODULE: ../icons/general/Download.tsx
var Download = __webpack_require__(25736);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/MnemonicRevealForm.tsx





















const MnemonicRevealForm = /*#__PURE__*/ (0,react.memo)(()=>{
    const createPersona = useCreatePersonaV2();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { state  } = (0,react_router/* useLocation */.TH)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
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
            const privateKey = await API/* Services.Backup.backupPersonaPrivateKey */.K9.Backup.backupPersonaPrivateKey(identifier);
            setPrivateKey(privateKey || '');
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
        navigate(`${src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia}`);
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
        const personas = await API/* Services.Identity.queryOwnedPersonaInformation */.K9.Identity.queryOwnedPersonaInformation(true);
        const persona = personas.find((p)=>p.nickname === state.personaName
        );
        if (!persona) return;
        await API/* Services.Identity.deletePersona */.K9.Identity.deletePersona(persona.identifier, 'delete even with private');
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                        title: t.create_account_identity_title(),
                        action: {
                            name: t.create_account_sign_in_button(),
                            callback: ()=>navigate(src/* DashboardRoutes.SignIn */.vq.SignIn)
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
                                            color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary
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
                                                        stroke: entry/* MaskColorVar.textLink */.ZN.textLink,
                                                        fill: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                onClick: ()=>onPreview('download')
                                                ,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Download/* DownloadIcon */._, {
                                                    color: "primary",
                                                    style: {
                                                        stroke: entry/* MaskColorVar.textLink */.ZN.textLink,
                                                        fill: entry/* MaskColorVar.primaryBackground */.ZN.primaryBackground
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
                id: id?.toText(),
                words: words,
                privateKey: privateKey1
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_persona_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(src/* DashboardRoutes.SignIn */.vq.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
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
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaCreate.tsx








const PersonaCreate = ()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [error, setError] = (0,react.useState)('');
    const onNext = async (personaName)=>{
        setError('');
        const personas = await API/* Services.Identity.queryOwnedPersonaInformation */.K9.Identity.queryOwnedPersonaInformation(true);
        const existing = personas.some((x)=>x.nickname === personaName
        );
        if (existing) {
            return setError(t.create_account_persona_exists());
        }
        navigate(`${src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.MnemonicReveal */.X.MnemonicReveal}`, {
            replace: true,
            state: {
                personaName
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaNameUI, {
        onNext: onNext,
        error: error
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/upperFirst.js + 1 modules
var upperFirst = __webpack_require__(75272);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(96277);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/ConnectSocialMedia.tsx












const ConnectSocialMedia = ()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { currentPersona , connectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,react.useEffect)(()=>{
        if (currentPersona && currentPersona?.linkedProfiles.length > 0) {
            navigate(src/* DashboardRoutes.Personas */.vq.Personas, {
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
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_connect_social_media_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(src/* DashboardRoutes.SignIn */.vq.SignIn)
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
                                    onClick: ()=>navigate(src/* DashboardRoutes.Setup */.vq.Setup)
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
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaRecovery.tsx













const PersonaRecovery = ()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const createPersona = useCreatePersonaV2();
    const createPersonaByPrivateKey = useCreatePersonaByPrivateKey();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const state = (0,react_router/* useLocation */.TH)().state;
    const [error1, setError] = (0,react.useState)('');
    (0,useAsync/* default */.Z)(async ()=>{
        if (state.mnemonic && await API/* Services.Identity.validateMnemonic */.K9.Identity.validateMnemonic(state.mnemonic.join(' '))) return;
        if (state.privateKey) return;
        navigate(src/* DashboardRoutes.SignUp */.vq.SignUp, {
            replace: true
        });
    }, [
        state.mnemonic,
        state.privateKey
    ]);
    const onNext = (0,react.useCallback)(async (personaName)=>{
        setError('');
        try {
            let identifier;
            if (state.mnemonic) {
                identifier = await createPersona(state?.mnemonic.join(' '), personaName);
            } else if (state.privateKey) {
                identifier = await createPersonaByPrivateKey(state.privateKey, personaName);
            } else {
                setError('no available identifier');
                return;
            }
            await changeCurrentPersona(identifier);
            showSnackbar(t.create_account_persona_successfully(), {
                variant: 'success'
            });
            await (0,esm/* delay */.gw)(300);
            navigate(`${src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia}`);
        } catch (error) {
            setError(error.message);
        }
    }, [
        state?.mnemonic,
        state?.privateKey
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaNameUI, {
        onNext: onNext,
        error: error1
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/index.ts





;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/routes.tsx




const Actions = ()=>{
    const { action  } = (0,react_router/* useParams */.UO)();
    switch(action){
        case routePath/* SignUpRoutePath.MnemonicReveal */.X.MnemonicReveal:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {});
        case routePath/* SignUpRoutePath.PersonaCreate */.X.PersonaCreate:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCreate, {});
        case routePath/* SignUpRoutePath.PersonaRecovery */.X.PersonaRecovery:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRecovery, {});
        case routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectSocialMedia, {});
        default:
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {});
    }
};
const SignUpRoutes = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
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
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/index.tsx



function SignUp() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RowLayout/* RowLayout */.V, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpRoutes, {})
    });
};


/***/ }),

/***/ 23930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 14628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MiniMaskIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const MiniMaskIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('MiniMask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            opacity: "0.5",
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "rgba(0,0,0,0.2)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "rgba(0,0,0,0.2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), undefined, '0 0 48 48');


/***/ }),

/***/ 25736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ DownloadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


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

/***/ 62812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ SignUpAccountIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


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


/***/ }),

/***/ 80480:
/***/ ((module) => {


module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};


/***/ })

}]);