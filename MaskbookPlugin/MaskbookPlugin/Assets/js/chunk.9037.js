"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7120],{

/***/ 13063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ThemeProvider_ThemeProvider)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/useTheme/ThemeContext.js
var ThemeContext = __webpack_require__(57109);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/useTheme/useTheme.js
var useTheme = __webpack_require__(19214);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/ThemeProvider/nested.js
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ const nested = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+private-theming@5.0.0-beta.4_cd7dab644597bdb0d3ed75d904e84134/node_modules/@material-ui/private-theming/ThemeProvider/ThemeProvider.js






 // To support composition of theme.



function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  return (0,esm_extends/* default */.Z)({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = (0,useTheme/* default */.Z)();

  if (false) {}

  const theme = react.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ThemeContext/* default.Provider */.Z.Provider, {
    value: theme,
    children: children
  });
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ const ThemeProvider_ThemeProvider = (ThemeProvider);

/***/ }),

/***/ 79484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ StyledEngineProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10007);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47346);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73102);



 // Cache with option to prepend emotion's style tag


const cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_2__.default)({
  key: 'css',
  prepend: true
});
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.C, {
    value: cache,
    children: children
  }) : children;
}
 false ? 0 : void 0;

/***/ }),

/***/ 11922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "Vm": () => (/* binding */ Messages),
/* harmony export */   "NG": () => (/* binding */ PluginServices),
/* harmony export */   "yC": () => (/* binding */ PluginMessages),
/* harmony export */   "Bo": () => (/* binding */ setService),
/* harmony export */   "Z": () => (/* binding */ setMessages),
/* harmony export */   "cr": () => (/* binding */ setPluginServices),
/* harmony export */   "jg": () => (/* binding */ setPluginMessages)
/* harmony export */ });
let Services = null;
let Messages = null;
let PluginServices = null;
let PluginMessages = null;
function setService(rpc) {
    Services = rpc;
    Object.assign(globalThis, {
        Services: rpc
    });
}
function setMessages(MaskMessage) {
    Messages = MaskMessage;
    Object.assign(globalThis, {
        Messages: MaskMessage
    });
}
function setPluginServices(rpc) {
    PluginServices = rpc;
    Object.assign(globalThis, {
        PluginServices: rpc
    });
}
function setPluginMessages(message) {
    PluginMessages = message;
    Object.assign(globalThis, {
        PluginMessages: message
    });
}


/***/ }),

/***/ 47574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ DashboardFrame),
  "C": () => (/* binding */ PageFrame)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(46754);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(34421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(77504);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(22593);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(8459);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Paper/paperClasses.js
var paperClasses = __webpack_require__(57476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(49283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/AppBar/AppBar.js + 1 modules
var AppBar = __webpack_require__(48884);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Toolbar/Toolbar.js + 1 modules
var Toolbar = __webpack_require__(48333);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(76900);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/Close.js
var Close = __webpack_require__(91158);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/Menu.js
var Menu = __webpack_require__(85113);
// EXTERNAL MODULE: ../../node_modules/.pnpm/color@4.0.1/node_modules/color/index.js
var color = __webpack_require__(48625);
var color_default = /*#__PURE__*/__webpack_require__.n(color);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../dashboard/src/components/DashboardFrame/context.ts

const DashboardContextDefault = {
    expanded: true,
    drawerOpen: false,
    toggleDrawer: ()=>{
    },
    toggleNavigationExpand: ()=>{
    }
};
const DashboardContext = /*#__PURE__*/ (0,react.createContext)(DashboardContextDefault);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(74540);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItem/listItemClasses.js
var listItemClasses = __webpack_require__(5984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/listItemIconClasses.js
var listItemIconClasses = __webpack_require__(37586);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(44465);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(54819);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(44668);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(3982);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/ExpandLess.js
var ExpandLess = __webpack_require__(14424);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_612af7c2ecbdd39a5f1aec7bf409e0b5/node_modules/@material-ui/icons/esm/ExpandMore.js
var ExpandMore = __webpack_require__(3637);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
// EXTERNAL MODULE: ../icons/brands/Mask.tsx
var Mask = __webpack_require__(36669);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(92131);
;// CONCATENATED MODULE: ../icons/menus/MenuPersonasActive.tsx


const MenuPersonasActiveIcon = (0,utils/* createIcon */.I)('MenuPersonasActiveIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "3.594",
            y: "13.04",
            width: "1.5",
            height: "7.5",
            rx: ".75",
            transform: "rotate(-30 3.594 13.04)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.635 12.944c-.97.31-2.018.146-2.97-.445a.434.434 0 00-.37-.045.446.446 0 00-.282.263c-.427 1.021-1.196 1.765-2.166 2.075-1.55.495-3.312-.245-4.392-1.843a5.502 5.502 0 01-.684-1.409 6.763 6.763 0 01-.187-.744l-.165-.934.774.546a.574.574 0 00.505.084c.046-.015.09-.04.132-.063l.196-.215.013-.025.025-.048a4.253 4.253 0 012.259-1.718 4.244 4.244 0 012.687.037 4.244 4.244 0 012.168-1.587 4.274 4.274 0 012.837.091l.049.025c.036.02.082.035.128.051l.012.006c.1.03.211.024.322-.011a.56.56 0 00.363-.36l.305-.89.406.856c.117.238.203.475.28.715.161.507.246 1.03.258 1.544.065 1.923-.952 3.55-2.503 4.044zm-5.973-.585c-.129.042-.264.065-.402.078-.758.049-1.462-.47-1.786-.752.233-.258.698-.711 1.28-.897.138-.044.264-.064.402-.078.758-.048 1.462.47 1.786.752-.242.261-.707.715-1.28.897zm3.164-1.498c.34.075.991.172 1.563-.01.139-.045.262-.104.373-.17.637-.397.92-1.23 1.02-1.648-.339-.075-.99-.172-1.563.01a1.802 1.802 0 00-.373.17c-.636.397-.92 1.23-1.02 1.648z",
            fill: "url(#personas_active_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#personas_active_0)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.03 8.621l.162-.27 7.659 2.527-.033.314a9.007 9.007 0 01-.434 2.04c-.531 1.594-1.443 2.96-2.56 3.85-.835.662-1.736 1.01-2.593 1.01-.336 0-.661-.044-.976-.153-1.128-.38-1.963-1.377-2.343-2.82-.369-1.378-.282-3.016.25-4.61.217-.673.51-1.302.867-1.888zm.976 4.48c.163.076.336.109.532.109.173 0 .368-.033.575-.087.221-.074.4-.166.477-.207.026-.013.04-.02.043-.02l.217-.13-.12-.229c-.01-.032-.357-.694-1.04-.998-.684-.303-1.41-.108-1.443-.097l-.25.065.055.25c.003.002.01.025.02.063.028.093.082.278.175.479.195.39.455.672.759.803zm3.374 1.15c.086.022.173.033.27.033.261 0 .543-.076.814-.217.282-.141.467-.304.478-.315l.195-.173-.152-.206c-.022-.033-.488-.63-1.215-.792-.673-.15-1.299.117-1.414.166-.01.004-.015.007-.018.007l-.228.109.098.239c0 .01.098.249.282.498.26.348.564.575.89.651z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "personas_active_linear",
                    x1: "2.598",
                    y1: "10.871",
                    x2: "15.806",
                    y2: "6.618",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "personas_active_0",
                    x: "8.688",
                    y: "4.35",
                    width: "17.163",
                    height: "17.741",
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
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/menus/MenuPersonas.tsx


const MenuPersonasIcon = (0,utils/* createIcon */.I)('MenuPersonasIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "3.641",
            y: "13.087",
            width: "1.5",
            height: "7.5",
            rx: ".75",
            transform: "rotate(-30 3.64 13.087)",
            fill: "url(#personas_linear_0)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.635 12.944c-.97.31-2.018.146-2.97-.445a.434.434 0 00-.37-.045.446.446 0 00-.282.263c-.427 1.021-1.196 1.765-2.166 2.075-1.55.495-3.312-.245-4.392-1.843a5.502 5.502 0 01-.684-1.409 6.763 6.763 0 01-.187-.744l-.165-.934.774.546a.574.574 0 00.505.084c.046-.015.09-.04.132-.063l.196-.215.013-.025.025-.048a4.253 4.253 0 012.259-1.718 4.244 4.244 0 012.687.037 4.244 4.244 0 012.168-1.587 4.274 4.274 0 012.837.091l.049.025c.036.02.082.035.128.051l.012.006c.1.03.211.024.322-.011a.56.56 0 00.363-.36l.305-.89.406.856c.117.238.203.475.28.715.161.507.246 1.03.258 1.544.065 1.923-.952 3.55-2.503 4.044zm-5.973-.585c-.129.042-.264.065-.402.078-.758.049-1.462-.47-1.786-.752.233-.258.698-.711 1.28-.897.138-.044.264-.064.402-.078.758-.048 1.462.47 1.786.752-.242.261-.707.715-1.28.897zm3.164-1.498c.34.075.991.172 1.563-.01.139-.045.262-.104.373-.17.637-.397.92-1.23 1.02-1.648-.339-.075-.99-.172-1.563.01a1.802 1.802 0 00-.373.17c-.636.397-.92 1.23-1.02 1.648z",
            fill: "url(#personas_linear_1)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#personas_0)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.03 8.621l.162-.27 7.659 2.527-.033.314a9.007 9.007 0 01-.434 2.04c-.531 1.594-1.443 2.96-2.56 3.85-.835.662-1.736 1.01-2.593 1.01-.336 0-.661-.044-.976-.153-1.128-.38-1.963-1.377-2.343-2.82-.369-1.378-.282-3.016.25-4.61.217-.673.51-1.302.867-1.888zm.976 4.48c.163.076.336.109.532.109.173 0 .368-.033.575-.087.221-.074.4-.166.477-.207.026-.013.04-.02.043-.02l.217-.13-.12-.229c-.01-.032-.357-.694-1.04-.998-.684-.303-1.41-.108-1.443-.097l-.25.065.055.25c.003.002.01.025.02.063.028.093.082.278.175.479.195.39.455.672.759.803zm3.374 1.15c.086.022.173.033.27.033.261 0 .543-.076.814-.217.282-.141.467-.304.478-.315l.195-.173-.152-.206c-.022-.033-.488-.63-1.215-.792-.673-.15-1.299.117-1.414.166-.01.004-.015.007-.018.007l-.228.109.098.239c0 .01.098.249.282.498.26.348.564.575.89.651z",
                fill: "url(#personas_linear_2)",
                fillOpacity: ".3"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "personas_linear_0",
                    x1: "3.641",
                    y1: "20.587",
                    x2: "5.141",
                    y2: "20.587",
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
                    id: "personas_linear_1",
                    x1: "2.933",
                    y1: "15.329",
                    x2: "16.636",
                    y2: "14.039",
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
                    id: "personas_linear_2",
                    x1: "12.688",
                    y1: "18.091",
                    x2: "21.851",
                    y2: "18.091",
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
                    id: "personas_0",
                    x: "8.688",
                    y: "4.35",
                    width: "17.163",
                    height: "17.741",
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
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/menus/MenuWalletsActive.tsx


const MenuWalletsActiveIcon = (0,utils/* createIcon */.I)('MenuWalletsActiveIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19 13.503v-.182h.41a.09.09 0 110 .182H19z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#wallet_active_0)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6 9.905C6 8.853 6.803 8 7.793 8h9.414C18.197 8 19 8.853 19 9.905v6.19C19 17.147 18.197 18 17.207 18H7.793C6.803 18 6 17.147 6 16.095v-6.19z",
                fill: "#1C68F3",
                fillOpacity: ".4"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.434 12.571a4 4 0 11-4-6.928 4 4 0 014 6.928z",
            fill: "url(#wallet_active_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.938 9.491l.654 1.132 3.396-1.96.146-.085a1.778 1.778 0 01-2.688 2.005l-.658.38.55.95a.47.47 0 00.642.173l3.26-1.883a.47.47 0 00.173-.642l-1.4-2.423-4.075 2.353zm1.9.866a1.384 1.384 0 001.982-1.144l-1.983 1.144zm1.167-2.274c.32-.184.72-.1.941.181l-.347.2a.34.34 0 00-.56.324l-.348.2a.732.732 0 01.314-.905zM11.26 9.09c.32-.185.72-.101.942.18l-.348.201a.34.34 0 00-.56.324l-.348.2a.732.732 0 01.314-.905zM9.627 8.01a.47.47 0 00-.172.643l.287.498 4.076-2.353-.288-.498a.47.47 0 00-.643-.172L9.627 8.01z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#wallet_active_1)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6 11.895C6 10.848 6.803 10 7.793 10h9.414c.99 0 1.793.848 1.793 1.895v5.21C19 18.152 18.197 19 17.207 19H7.793C6.803 19 6 18.152 6 17.105v-5.21z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".8",
            d: "M19.5 13.412V15a.5.5 0 01-.5.5h-1.5a1 1 0 010-2h1.75c.25 0 .25-.088.25-.088z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "17.5",
            cy: "14.5",
            r: ".5",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "wallet_active_0",
                    x: "2",
                    y: "4",
                    width: "21",
                    height: "18",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "wallet_active_1",
                    x: "2",
                    y: "6",
                    width: "21",
                    height: "17",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "wallet_active_linear",
                    x1: "15.716",
                    y1: "6.889",
                    x2: "8.144",
                    y2: "10.002",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/menus/MenuWallets.tsx


const MenuWalletsIcon = (0,utils/* createIcon */.I)('MenuWalletsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".8",
            d: "M19 13.504v-.184h.408a.092.092 0 110 .184H19z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#wallet_0)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6 9.905C6 8.853 6.803 8 7.793 8h9.414C18.197 8 19 8.853 19 9.905v6.19C19 17.147 18.197 18 17.207 18H7.793C6.803 18 6 17.147 6 16.095v-6.19z",
                fill: "url(#wallet_linear)",
                fillOpacity: ".3"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.434 12.571a4 4 0 11-4-6.928 4 4 0 014 6.928z",
            fill: "url(#paint1_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.938 9.491l.654 1.132 3.396-1.96.146-.085a1.778 1.778 0 01-2.688 2.005l-.658.38.55.95a.47.47 0 00.642.173l3.26-1.883a.47.47 0 00.173-.642l-1.4-2.423-4.075 2.353zm1.9.866a1.384 1.384 0 001.982-1.144l-1.983 1.144zm1.167-2.274c.32-.184.72-.1.941.181l-.347.2a.34.34 0 00-.56.324l-.348.2a.732.732 0 01.314-.905zM11.26 9.09c.32-.185.72-.101.942.18l-.348.201a.34.34 0 00-.56.324l-.348.2a.732.732 0 01.314-.905zM9.627 8.01a.47.47 0 00-.172.643l.287.498 4.076-2.353-.288-.498a.47.47 0 00-.643-.172L9.627 8.01z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#wallet_1)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6 11.895C6 10.848 6.803 10 7.793 10h9.414c.99 0 1.793.848 1.793 1.895v5.21C19 18.152 18.197 19 17.207 19H7.793C6.803 19 6 18.152 6 17.105v-5.21z",
                fill: "url(#paint2_linear)",
                fillOpacity: ".3"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: ".5",
            d: "M19.5 13.438V15a.5.5 0 01-.5.5h-1.5a1 1 0 010-2h1.91c.066 0 .09-.063.09-.063z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "17.5",
            cy: "14.5",
            r: ".5",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "wallet_linear",
                    x1: "6",
                    y1: "18",
                    x2: "19",
                    y2: "18",
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
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "paint1_linear",
                    x1: "17.898",
                    y1: "10.571",
                    x2: "10.97",
                    y2: "14.571",
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
                    id: "paint2_linear",
                    x1: "6",
                    y1: "19",
                    x2: "19",
                    y2: "19",
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
                    id: "wallet_0",
                    x: "2",
                    y: "4",
                    width: "21",
                    height: "18",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "wallet_1",
                    x: "2",
                    y: "6",
                    width: "21",
                    height: "17",
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
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/menus/MenuLabsActive.tsx


const MenuLabsActiveIcon = (0,utils/* createIcon */.I)('MenuLabsActiveIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "11",
            cy: "12",
            r: "6",
            fill: "url(#labs_active_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#labs_active)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.143 14.676c-.091-.4-.567-.61-.873-.335-.937.838-1.408 1.66-1.234 2.333.425 1.648 4.56 1.778 9.235.29 4.675-1.489 8.12-4.031 7.693-5.68-.142-.55-.697-.93-1.548-1.138-.404-.1-.723.31-.617.714a.644.644 0 00.459.454c.137.036.258.077.363.121a.326.326 0 01.143.496l-.01.017c-.237.346-.666.78-1.311 1.255-1.279.945-3.202 1.908-5.464 2.629-2.263.72-4.354 1.034-5.889.986-.774-.024-1.345-.14-1.71-.294a.326.326 0 01-.133-.513c.154-.226.39-.489.714-.776a.575.575 0 00.182-.559zm13.795-3.11v0z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "17.309",
            cy: "6.656",
            fill: "#1C68F3",
            r: "1.156"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "labs_active_linear",
                    x1: "5.073",
                    y1: "11.579",
                    x2: "17.244",
                    y2: "9.945",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "labs_active",
                    x: "-1",
                    y: "6.131",
                    width: "25",
                    height: "15.869",
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
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/menus/MenuLabs.tsx


const MenuLabsIcon = (0,utils/* createIcon */.I)('MenuLabsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "11",
            cy: "12",
            r: "6",
            fill: "url(#labs_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#labs)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.143 14.676c-.091-.4-.567-.61-.873-.335-.937.838-1.408 1.66-1.234 2.333.425 1.648 4.56 1.778 9.235.29 4.675-1.489 8.12-4.031 7.693-5.68-.142-.55-.697-.93-1.548-1.138-.404-.1-.723.31-.617.714a.644.644 0 00.459.454c.137.036.258.077.363.121a.326.326 0 01.143.496l-.01.017c-.237.346-.666.78-1.311 1.255-1.279.945-3.202 1.908-5.464 2.629-2.263.72-4.354 1.034-5.889.986-.774-.024-1.345-.14-1.71-.294a.326.326 0 01-.133-.513c.154-.226.39-.489.714-.776a.575.575 0 00.182-.559zm13.795-3.11v0z",
                fill: "url(#paint1_linear)",
                fillOpacity: ".3"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
            cx: "17.309",
            cy: "6.656",
            fill: "#B0CFEB",
            fillOpacity: ".8",
            r: "1.156"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "labs_linear",
                    x1: "5",
                    y1: "18",
                    x2: "17",
                    y2: "18",
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
                    id: "paint1_linear",
                    x1: "3",
                    y1: "18",
                    x2: "20",
                    y2: "18",
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
                    id: "labs",
                    x: "-1",
                    y: "6.131",
                    width: "25",
                    height: "15.869",
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
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/menus/MenuSettingsActive.tsx


const MenuSettingsActiveIcon = (0,utils/* createIcon */.I)('MenuSettingsActiveIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm9.5 1.5H10a.5.5 0 000 1h5.5a.5.5 0 000-1zm-1.5 4H8.5a.5.5 0 000 1H14a.5.5 0 000-1z",
            fill: "url(#settings_active_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#settings_active_circle_0)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                cx: "9.5",
                cy: "10",
                r: "1.5",
                fill: "#fff",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#settings_active_circle_1)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                cx: "14.5",
                cy: "14",
                r: "1.5",
                fill: "#fff",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "settings_active_circle_0",
                    x: "4",
                    y: "4.5",
                    width: "11",
                    height: "11",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "settings_active_circle_1",
                    x: "9",
                    y: "8.5",
                    width: "11",
                    height: "11",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "settings_active_linear",
                    x1: "6.073",
                    y1: "11.579",
                    x2: "18.244",
                    y2: "9.945",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            stopColor: "#1C68F3"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                            offset: "1",
                            stopColor: "#6CB8FF"
                        })
                    ]
                })
            ]
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/menus/MenuSettings.tsx


const MenuSettingsIcon = (0,utils/* createIcon */.I)('MenuSettingsIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8zm9.5 1.5H10a.5.5 0 000 1h5.5a.5.5 0 000-1zm-1.5 4H8.5a.5.5 0 000 1H14a.5.5 0 000-1z",
            fill: "url(#settings_linear)"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#settings_circle_0)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                cx: "9.5",
                cy: "10",
                r: "1.5",
                fill: "#fff",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#settings_circle_1)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("circle", {
                cx: "14.5",
                cy: "14",
                r: "1.5",
                fill: "#fff",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "settings_circle_0",
                    x: "4",
                    y: "4.5",
                    width: "11",
                    height: "11",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "settings_circle_1",
                    x: "9",
                    y: "8.5",
                    width: "11",
                    height: "11",
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
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                    id: "settings_linear",
                    x1: "6",
                    y1: "18",
                    x2: "18",
                    y2: "18",
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
                })
            ]
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(76591);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(51987);
;// CONCATENATED MODULE: ../dashboard/src/components/DashboardFrame/Navigation.tsx










const ListItemLinkUnStyled = ({ to , ...props })=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        ...props,
        selected: !!(0,react_router/* useMatch */.bS)(to),
        onClick: (event)=>{
            var ref;
            navigate(to);
            (ref = props.onClick) === null || ref === void 0 ? void 0 : ref.call(props, event);
        }
    }));
};
const ListItemLink = (0,styled/* default */.ZP)(ListItemLinkUnStyled)(({ theme  })=>{
    return {
        [`&.${listItemClasses/* default.root */.Z.root}`]: {
            color: theme.palette.mode === 'light' ? '' : 'rgba(255,255,255,.8)',
            paddingLeft: theme.spacing(2),
            cursor: 'pointer'
        },
        [`&.${listItemClasses/* default.selected */.Z.selected}`]: {
            color: src/* MaskColorVar.textLink */.ZN.textLink,
            backgroundColor: 'transparent',
            position: 'relative',
            [`${listItemIconClasses/* default.root */.Z.root}`]: {
                color: src/* MaskColorVar.textLink */.ZN.textLink
            },
            '&:after': {
                content: '""',
                display: 'inline-block',
                width: 5,
                height: 40,
                boxShadow: '-2px 0px 10px 2px rgba(0, 56, 255, 0.15)',
                borderRadius: 50,
                background: src/* MaskColorVar.textLink */.ZN.textLink,
                position: 'absolute',
                right: 0
            }
        }
    };
});
const LogoItem = (0,styled/* default */.ZP)(ListItem/* default */.ZP)(({ theme  })=>({
        [`&.${listItemClasses/* default.root */.Z.root}`]: {
            justifyContent: 'center',
            paddingLeft: theme.spacing(7),
            marginBottom: theme.spacing(3.5)
        }
    })
);
const Navigation_ListItem = (0,styled/* default */.ZP)(ListItem/* default */.ZP)(({ theme  })=>({
        [`&.${listItemClasses/* default.selected */.Z.selected}`]: {
            backgroundColor: 'transparent',
            borderRight: '4px solid ' + (theme.palette.mode === 'light' ? theme.palette.action.selected : 'white')
        }
    })
);
function Navigation({}) {
    const { expanded , toggleNavigationExpand  } = (0,react.useContext)(DashboardContext);
    const isLargeScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.up('lg')
    );
    const t = (0,locales/* useDashboardI18N */.xF)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
        children: [
            isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsx)(LogoItem, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Mask/* MaskNotSquareIcon */.h, {
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: type/* RoutePaths.Personas */.s2.Personas,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                        children: (0,react_router/* useMatch */.bS)(type/* RoutePaths.Personas */.s2.Personas) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPersonasActiveIcon, {
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPersonasIcon, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: t.personas()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: type/* RoutePaths.Wallets */.s2.Wallets,
                selected: !!(0,react_router/* useMatch */.bS)(type/* RoutePaths.Wallets */.s2.Wallets),
                onClick: toggleNavigationExpand,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                        children: (0,react_router/* useMatch */.bS)(type/* RoutePaths.Wallets */.s2.Wallets) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuWalletsActiveIcon, {
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuWalletsIcon, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        children: t.wallets()
                    }),
                    expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.Z, {
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
                in: expanded,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                    disablePadding: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemLink, {
                            to: type/* RoutePaths.WalletsTransfer */.s2.WalletsTransfer,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                inset: true,
                                primary: t.wallets_transfer()
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemLink, {
                            to: type/* RoutePaths.WalletsHistory */.s2.WalletsHistory,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                inset: true,
                                primary: t.wallets_history()
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: type/* RoutePaths.Labs */.s2.Labs,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                        children: (0,react_router/* useMatch */.bS)(type/* RoutePaths.Labs */.s2.Labs) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuLabsActiveIcon, {
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuLabsIcon, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: t.labs()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: type/* RoutePaths.Settings */.s2.Settings,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                        children: (0,react_router/* useMatch */.bS)(type/* RoutePaths.Settings */.s2.Settings) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuSettingsActiveIcon, {
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuSettingsIcon, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: t.settings()
                    })
                ]
            })
        ]
    }));
}

// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
// EXTERNAL MODULE: ../dashboard/src/pages/Labs/constants.ts
var constants = __webpack_require__(17037);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(87049);
;// CONCATENATED MODULE: ../dashboard/src/components/DashboardFrame/FeaturePromotions/index.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            padding: theme.spacing(3.125),
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                marginBottom: theme.spacing(2)
            }
        },
        img: {
            fill: 'none',
            width: 250,
            height: 140,
            cursor: 'pointer'
        }
    })
);
const TWITTER_NETWORK = 'twitter.com';
const TWITTER_ADDRESS = 'https://www.twitter.com';
const FeaturePromotions = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { currentPersona , connectPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { openDialog: openSwapDialog  } = (0,shared_src.useRemoteControlledDialog)(API/* PluginMessages.Swap.swapDialogUpdated */.yC.Swap.swapDialogUpdated);
    const isConnectedTwitter = (0,react.useMemo)(()=>{
        if (!currentPersona) return false;
        const { linkedProfiles  } = currentPersona;
        if (linkedProfiles.length === 0) return false;
        return !!linkedProfiles.find((profile)=>profile.identifier.network === TWITTER_NETWORK
        );
    }, [
        currentPersona
    ]);
    const openTwitter = (pluginId)=>async ()=>{
            if (!currentPersona) {
                navigate(type/* RoutePaths.SignUp */.s2.SignUp);
                return;
            }
            if (isConnectedTwitter) {
                await API/* Services.Settings.openSNSAndActivatePlugin */.K9.Settings.openSNSAndActivatePlugin(`${TWITTER_ADDRESS}/home`, pluginId);
                return;
            }
            connectPersona(currentPersona.identifier, TWITTER_NETWORK);
        }
    ;
    const openMaskNetwork = ()=>API/* Services.Settings.openSNSAndActivatePlugin */.K9.Settings.openSNSAndActivatePlugin(`${TWITTER_ADDRESS}/realmaskbook`, '')
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openTwitter(constants/* PLUGIN_IDS.RED_PACKET */.N.RED_PACKET),
                src: new URL(/* asset import */ __webpack_require__(30886), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openTwitter(constants/* PLUGIN_IDS.MARKETS */.N.MARKETS),
                src: new URL(/* asset import */ __webpack_require__(17134), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                onClick: openSwapDialog,
                src: new URL(/* asset import */ __webpack_require__(98481), __webpack_require__.b).toString()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                onClick: openMaskNetwork,
                className: classes.img,
                src: new URL(/* asset import */ __webpack_require__(60623), __webpack_require__.b).toString(),
                style: {
                    height: 80
                }
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/components/DashboardFrame/index.tsx














const featurePromotionsEnabled = [
    type/* RoutePaths.Wallets */.s2.Wallets,
    type/* RoutePaths.WalletsTransfer */.s2.WalletsTransfer,
    type/* RoutePaths.WalletsHistory */.s2.WalletsHistory
];
const Root = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        backgroundColor: theme.palette.background.paper
    })
);
const LeftContainer = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        height: '100vh',
        [theme.breakpoints.up('lg')]: {
            // Just meet the design size
            minWidth: 232
        }
    })
);
const DashboardFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const isLargeScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.up('lg')
    );
    const [navigationExpanded, setNavigationExpanded] = (0,react.useState)(true);
    const [drawerOpen, setDrawerOpen] = (0,react.useState)(false);
    const context = (0,react.useMemo)(()=>({
            drawerOpen,
            expanded: navigationExpanded,
            toggleNavigationExpand: ()=>setNavigationExpanded((e)=>!e
                )
            ,
            toggleDrawer: ()=>setDrawerOpen((e)=>!e
                )
        })
    , [
        drawerOpen,
        navigationExpanded
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardContext.Provider, {
        value: context,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Root, {
            container: true,
            children: [
                isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsx)(LeftContainer, {
                    item: true,
                    xs: 2,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigation, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    container: true,
                    direction: "column",
                    item: true,
                    xs: isLargeScreen ? 10 : 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                        fallback: null,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.ErrorBoundary, {
                            children: props.children
                        })
                    })
                })
            ]
        })
    }));
});
const MaskLogo = (0,styled/* default */.ZP)(Grid/* default */.ZP)`
    flex-basis: 212px;
    max-width: 212px;
    & > svg {
        flex: 1;
    }
`;
const MenuButton = (0,styled/* default */.ZP)(IconButton/* default */.Z)(({ theme  })=>({
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(1.5)
    })
);
const PageTitle = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        minHeight: 40,
        alignItems: 'center',
        paddingLeft: theme.spacing(4.25),
        [theme.breakpoints.down('lg')]: {
            flex: 1
        }
    })
);
const Containment = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        contain: 'strict',
        display: 'flex',
        [theme.breakpoints.down('lg')]: {
            minHeight: `calc(100vh - 64px)`
        }
    })
);
const NavigationDrawer = (0,styled/* default */.ZP)(Drawer/* default */.ZP)(({ theme  })=>({
        top: `${theme.mixins.toolbar.minHeight}px !important`,
        // https://github.com/mui-org/material-ui/issues/20012#issuecomment-770654893
        [`& > .${paperClasses/* default.root */.Z.root}`]: {
            width: 232,
            top: theme.mixins.toolbar.minHeight,
            paddingTop: theme.spacing(7.5),
            background: new (color_default())(theme.palette.background.paper).alpha(0.8).toString(),
            backdropFilter: 'blur(4px)'
        }
    })
);
const ShapeHelper = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        height: '100%',
        padding: theme.spacing(3),
        borderTopLeftRadius: Number(theme.shape.borderRadius) * 5,
        borderTopRightRadius: Number(theme.shape.borderRadius) * 5,
        backgroundColor: theme.palette.background.default,
        overflow: 'auto',
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
    })
);
const ContentContainer = (0,styled/* default */.ZP)('div')(({ theme  })=>({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderTopLeftRadius: Number(theme.shape.borderRadius) * 5,
        borderTopRightRadius: Number(theme.shape.borderRadius) * 5
    })
);
const useStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        toolbarGutters: {
            [theme.breakpoints.up('lg')]: {
                paddingLeft: theme.spacing(0)
            },
            [theme.breakpoints.down('lg')]: {
                paddingLeft: theme.spacing(1)
            }
        },
        shapeContainerWithBackground: {
            backgroundColor: theme.palette.background.paper
        }
    })
);
const PageFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const location = (0,react_router/* useLocation */.TH)();
    const left = typeof props.title === 'string' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "h6",
        children: props.title
    }) : props.title;
    const right = props.primaryAction;
    const isLargeScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.up('lg')
    );
    const { drawerOpen , toggleDrawer  } = (0,react.useContext)(DashboardContext);
    const showFeaturePromotions = featurePromotionsEnabled.some((path)=>path === location.pathname
    );
    const { classes  } = useStyle();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AppBar/* default */.Z, {
                position: "relative",
                color: "inherit",
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toolbar/* default */.Z, {
                    classes: {
                        gutters: classes.toolbarGutters
                    },
                    children: [
                        !isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(MaskLogo, {
                            item: true,
                            container: true,
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuButton, {
                                    size: "large",
                                    onClick: toggleDrawer,
                                    children: drawerOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Menu/* default */.Z, {
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Mask/* MaskNotSquareIcon */.h, {
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(PageTitle, {
                            item: true,
                            xs: isLargeScreen ? 12 : 10,
                            container: true,
                            children: [
                                left,
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    sx: {
                                        flex: 1
                                    }
                                }),
                                right
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containment, {
                item: true,
                xs: true,
                children: [
                    !isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationDrawer, {
                        open: drawerOpen,
                        onClose: toggleDrawer,
                        hideBackdrop: true,
                        variant: "temporary",
                        elevation: 0,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigation, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ShapeHelper, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer, {
                            className: props.noBackgroundFill ? undefined : classes.shapeContainerWithBackground,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.ErrorBoundary, {
                                children: props.children
                            })
                        })
                    }),
                    showFeaturePromotions ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FeaturePromotions, {
                    }) : null
                ]
            })
        ]
    }));
});


/***/ }),

/***/ 3244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardRoot)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@6.0.0-beta.2_80412ece85bcda79fd9e9d6e33117ae2/node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(84388);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+styled-engine@5.0.0-beta.4_8e4d0aed8246b9fd310aa179f0a5a6d8/node_modules/@material-ui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
var StyledEngineProvider = __webpack_require__(79484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_e14a48fe2ee716b1cf0056a0ce2d3119/node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(71629);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_8d055209aaffb5d3088bac910150ce83/node_modules/@material-ui/core/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(14938);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(53688);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@20.5.0/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(58836);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.11.4_6270a9eba2c2d5b9e14d97f76e4f3a45/node_modules/react-i18next/dist/es/I18nextProvider.js
var I18nextProvider = __webpack_require__(42878);
// EXTERNAL MODULE: ../plugins/example/src/index.ts
var example_src = __webpack_require__(92376);
;// CONCATENATED MODULE: ../dashboard/src/initialization/plugins.ts
// Please make sure it is also added in
// packages/maskbook/src/plugin-infra/register.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var dist = __webpack_require__(69260);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(66751);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
;// CONCATENATED MODULE: ../dashboard/src/initialization/PluginHost.ts






const PluginHost = {
    enabled: {
        events: new dist/* Emitter */.Q5(),
        isEnabled: (id)=>{
            return API/* Services.Settings.isPluginEnabled */.K9.Settings.isPluginEnabled(id);
        }
    },
    addI18NResource (plugin, resource) {
        (0,shared_src.createI18NBundle)(plugin, resource)(i18next/* default */.Z);
    }
};
setTimeout(()=>{
    API/* Messages.events.pluginEnabled.on */.Vm.events.pluginEnabled.on((id)=>PluginHost.enabled.events.emit('enabled', id)
    );
    API/* Messages.events.pluginDisabled.on */.Vm.events.pluginDisabled.on((id)=>PluginHost.enabled.events.emit('disabled', id)
    );
    (0,plugin_infra_src/* startPluginDashboard */.CB)(PluginHost);
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.2_2dbba68b7ac16965ba4a12f4e1c41a15/node_modules/react-router/index.js
var react_router = __webpack_require__(18875);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/index.tsx + 11 modules
var DashboardFrame = __webpack_require__(47574);
// EXTERNAL MODULE: ../dashboard/src/type.ts
var type = __webpack_require__(51987);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(87049);
;// CONCATENATED MODULE: ../dashboard/src/GuardRoute.tsx



function NoPersonaGuardRoute(props) {
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { redirectTo , ...rest } = props;
    return currentPersona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, {
        to: redirectTo !== null && redirectTo !== void 0 ? redirectTo : '/',
        replace: true
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        ...rest
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/routes.tsx






<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9037.js
const Wallets = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2698), __webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(9371), __webpack_require__.e(3360)]).then(__webpack_require__.bind(__webpack_require__, 83360))
);
const Setup = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(4281), __webpack_require__.e(8251)]).then(__webpack_require__.bind(__webpack_require__, 68251))
);
const SignUp = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(2698), __webpack_require__.e(5088), __webpack_require__.e(8539)]).then(__webpack_require__.bind(__webpack_require__, 48539))
);
const SignIn = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(5088), __webpack_require__.e(305)]).then(__webpack_require__.bind(__webpack_require__, 90305))
);
const PrivacyPolicy = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(4281), __webpack_require__.e(2534)]).then(__webpack_require__.bind(__webpack_require__, 52534))
);
const Welcome = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(4281), __webpack_require__.e(1192)]).then(__webpack_require__.bind(__webpack_require__, 11192))
);
const Personas = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(9759), __webpack_require__.e(2698), __webpack_require__.e(9371), __webpack_require__.e(4424)]).then(__webpack_require__.bind(__webpack_require__, 14424))
=======
const Wallets = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2698), __webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(9389), __webpack_require__.e(1321)]).then(__webpack_require__.bind(__webpack_require__, 1321))
);
const Setup = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(8416), __webpack_require__.e(9000)]).then(__webpack_require__.bind(__webpack_require__, 99000))
);
const SignUp = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(2698), __webpack_require__.e(5855), __webpack_require__.e(2738)]).then(__webpack_require__.bind(__webpack_require__, 22738))
);
const SignIn = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(5855), __webpack_require__.e(5645)]).then(__webpack_require__.bind(__webpack_require__, 5645))
);
const PrivacyPolicy = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(8416), __webpack_require__.e(2345)]).then(__webpack_require__.bind(__webpack_require__, 42345))
);
const Welcome = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(8416), __webpack_require__.e(5276)]).then(__webpack_require__.bind(__webpack_require__, 65276))
);
const Personas = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(9759), __webpack_require__.e(6357), __webpack_require__.e(2698), __webpack_require__.e(9389), __webpack_require__.e(7982)]).then(__webpack_require__.bind(__webpack_require__, 61479))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.7120.js
);
const Settings = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(5178), __webpack_require__.e(3294), __webpack_require__.e(7535)]).then(__webpack_require__.bind(__webpack_require__, 67535))
);
const CreateWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5493).then(__webpack_require__.bind(__webpack_require__, 15493))
);
const Labs = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(7602)]).then(__webpack_require__.bind(__webpack_require__, 57602))
);
function Pages() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NoPersonaGuardRoute, {
                    path: type/* RoutePaths.Welcome */.s2.Welcome,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Welcome, {
                    }),
                    redirectTo: type/* RoutePaths.Personas */.s2.Personas
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: type/* RoutePaths.Setup */.s2.Setup,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Setup, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: `${type/* RoutePaths.SignUp */.s2.SignUp}/*`,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUp, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: type/* RoutePaths.SignIn */.s2.SignIn,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignIn, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: type/* RoutePaths.PrivacyPolicy */.s2.PrivacyPolicy,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacyPolicy, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: type/* RoutePaths.Personas */.s2.Personas,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Personas, {
                    }))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: `${type/* RoutePaths.Wallets */.s2.Wallets}/*`,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Wallets, {
                    }))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: type/* RoutePaths.Settings */.s2.Settings,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Settings, {
                    }))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: type/* RoutePaths.Labs */.s2.Labs,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Labs, {
                    }))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: `${type/* RoutePaths.CreateMaskWallet */.s2.CreateMaskWallet}/*`,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWallet, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, {
                        to: type/* RoutePaths.Personas */.s2.Personas
                    })
                })
            ]
        })
    }));
}
function routes_frame(x) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardFrame/* DashboardFrame */.Q, {
        children: x
    }));
}

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var api = __webpack_require__(20620);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(6615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 5 modules
var pick = __webpack_require__(43019);
;// CONCATENATED MODULE: ../dashboard/src/web3/context.ts




const Web3Provider = createExternalProvider();
const Web3Context = {
    provider: {
        getCurrentValue: ()=>Web3Provider
        ,
        subscribe: ()=>noop/* default */.Z
    },
    allowTestnet: createSubscriptionFromAsync(API/* Services.Settings.getWalletAllowTestChain */.K9.Settings.getWalletAllowTestChain, false, ()=>{
        return ()=>{
        };
    }),
    account: createSubscriptionFromAsync(API/* Services.Settings.getSelectedWalletAddress */.K9.Settings.getSelectedWalletAddress, '', API/* Messages.events.currentAccountSettings.on */.Vm.events.currentAccountSettings.on),
    nonce: createSubscriptionFromAsync(API/* Services.Settings.getBlockNumber */.K9.Settings.getBlockNumber, 0, API/* Messages.events.currentBlockNumberSettings.on */.Vm.events.currentBlockNumberSettings.on),
    gasPrice: createSubscriptionFromAsync(API/* Services.Settings.getBlockNumber */.K9.Settings.getBlockNumber, 0, API/* Messages.events.currentBlockNumberSettings.on */.Vm.events.currentBlockNumberSettings.on),
    etherPrice: createSubscriptionFromAsync(API/* Services.Settings.getEtherPrice */.K9.Settings.getEtherPrice, 0, API/* Messages.events.currentEtherPriceSettings.on */.Vm.events.currentEtherPriceSettings.on),
    balance: createSubscriptionFromAsync(API/* Services.Settings.getBalance */.K9.Settings.getBalance, '0', API/* Messages.events.currentBalanceSettings.on */.Vm.events.currentBalanceSettings.on),
    blockNumber: createSubscriptionFromAsync(API/* Services.Settings.getBlockNumber */.K9.Settings.getBlockNumber, 0, API/* Messages.events.currentBlockNumberSettings.on */.Vm.events.currentBlockNumberSettings.on),
    chainId: createSubscriptionFromAsync(API/* Services.Settings.getChainId */.K9.Settings.getChainId, web3_shared_src/* ChainId.Mainnet */.a_e.Mainnet, API/* Messages.events.currentChainIdSettings.on */.Vm.events.currentChainIdSettings.on),
    providerType: createSubscriptionFromAsync(API/* Services.Settings.getCurrentSelectedWalletProvider */.K9.Settings.getCurrentSelectedWalletProvider, web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook, API/* Messages.events.currentProviderSettings.on */.Vm.events.currentProviderSettings.on),
    networkType: createSubscriptionFromAsync(API/* Services.Settings.getCurrentSelectedWalletNetwork */.K9.Settings.getCurrentSelectedWalletNetwork, web3_shared_src/* NetworkType.Ethereum */.tds.Ethereum, API/* Messages.events.currentNetworkSettings.on */.Vm.events.currentNetworkSettings.on),
    wallets: createSubscriptionFromAsync(getWallets, [], API/* PluginMessages.Wallet.events.walletsUpdated.on */.yC.Wallet.events.walletsUpdated.on),
    erc20Tokens: createSubscriptionFromAsync(getERC20Tokens, [], API/* PluginMessages.Wallet.events.erc20TokensUpdated.on */.yC.Wallet.events.erc20TokensUpdated.on),
    erc20TokensCount: createSubscriptionFromAsync(API/* PluginServices.Wallet.getERC20TokensCount */.NG.Wallet.getERC20TokensCount, 0, API/* PluginMessages.Wallet.events.erc20TokensUpdated.on */.yC.Wallet.events.erc20TokensUpdated.on),
    getERC20TokensPaged,
    portfolioProvider: createSubscriptionFromAsync(API/* Services.Settings.getCurrentPortfolioDataProvider */.K9.Settings.getCurrentPortfolioDataProvider, web3_shared_src/* PortfolioProvider.DEBANK */.g38.DEBANK, API/* Messages.events.currentPortfolioDataProviderSettings.on */.Vm.events.currentPortfolioDataProviderSettings.on),
    getAssetsList: API/* PluginServices.Wallet.getAssetsList */.NG.Wallet.getAssetsList,
    getAssetsListNFT: API/* PluginServices.Wallet.getAssetsListNFT */.NG.Wallet.getAssetsListNFT,
    getERC721TokensPaged,
    getTransactionList: API/* PluginServices.Wallet.getTransactionList */.NG.Wallet.getTransactionList,
    fetchERC20TokensFromTokenLists: API/* Services.Ethereum.fetchERC20TokensFromTokenLists */.K9.Ethereum.fetchERC20TokensFromTokenLists,
    createMnemonicWords: API/* PluginServices.Wallet.createMnemonicWords */.NG.Wallet.createMnemonicWords
};
function createExternalProvider() {
    return {
        isMetaMask: false,
        isStatus: true,
        host: '',
        path: '',
        request: API/* Services.Ethereum.request */.K9.Ethereum.request,
        send: API/* Services.Ethereum.requestSend */.K9.Ethereum.requestSend,
        sendAsync: API/* Services.Ethereum.requestSend */.K9.Ethereum.requestSend
    };
}
async function getWallets() {
    const raw = await API/* PluginServices.Wallet.getWallets */.NG.Wallet.getWallets();
    return raw.map((record)=>({
            ...(0,pick/* default */.Z)(record, [
                'address',
                'name',
                'erc1155_token_whitelist',
                'erc1155_token_blacklist',
                'erc20_token_whitelist',
                'erc20_token_blacklist',
                'erc721_token_whitelist',
                'erc721_token_blacklist', 
            ]),
            hasPrivateKey: Boolean(record._private_key_ || record.mnemonic.length)
        })
    );
}
async function getERC20Tokens() {
    const raw = await API/* PluginServices.Wallet.getERC20Tokens */.NG.Wallet.getERC20Tokens();
    return raw.map((x)=>({
            type: web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20,
            ...x
        })
    );
}
async function getERC20TokensPaged(index, count, query) {
    const raw = await API/* PluginServices.Wallet.getERC20TokensPaged */.NG.Wallet.getERC20TokensPaged(index, count, query);
    return raw.map((x)=>({
            type: web3_shared_src/* EthereumTokenType.ERC20 */.Drc.ERC20,
            ...x
        })
    );
}
async function getERC721TokensPaged(index, count, query) {
    return API/* PluginServices.Wallet.getERC721TokensPaged */.NG.Wallet.getERC721TokensPaged(index, count, query);
}
function createSubscriptionFromAsync(f, defaultValue, onChange) {
    let state = defaultValue;
    const { subscribe , trigger  } = getEventTarget();
    f().then((v)=>state = v
    ).finally(trigger);
    return {
        getCurrentValue: ()=>state
        ,
        subscribe: (sub)=>{
            const a = subscribe(sub);
            const b = onChange(async ()=>{
                state = await f();
                sub();
            });
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all settings to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT))
        , 600);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f)
        ;
    }
    return {
        trigger,
        subscribe
    };
}

;// CONCATENATED MODULE: ../dashboard/src/initialization/Dashboard.tsx














const PluginRender = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsDashboard */.eE, (x)=>x.GlobalInjection
);
function DashboardRoot() {
    const settings = (0,api/* useAppearance */.MU)();
    const mode = (0,src/* useSystemPreferencePalatte */.KL)();
    const themes = {
        dark: src/* MaskDarkTheme */.Hr,
        light: src/* MaskLightTheme */.Cp,
        default: mode === 'dark' ? src/* MaskDarkTheme */.Hr : src/* MaskLightTheme */.Cp
    };
    const theme = themes[settings];
    (0,src/* applyMaskColorVars */.Dc)(document.body, settings === 'default' ? mode : settings);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* NoEffectUsePortalShadowRootContext.Provider */.XR.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(web3_shared_src/* Web3Provider */.Qgv, {
            value: Web3Context,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(I18nextProvider/* I18nextProvider */.a, {
                i18n: i18next/* default */.Z,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledEngineProvider/* default */.Z, {
                    injectFirst: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                        theme: theme,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(usePersonaContext/* PersonaContext.Provider */.m.Provider, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src.ErrorBoundary, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CssBaseline/* default */.ZP, {
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* CustomSnackbarProvider */.YO, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.UT, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Pages, {
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        })
    }));
};


/***/ }),

/***/ 17037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ PLUGIN_IDS)
/* harmony export */ });
const PLUGIN_IDS = {
    FILE_SERVICE: 'com.maskbook.fileservice',
    GITCOIN: 'co.gitcoin',
    DHEDGE: 'co.dhedge',
    RED_PACKET: 'com.maskbook.red_packet',
    TRANSAK: 'com.maskbook.transak',
    COLLECTIBLES: 'com.maskbook.collectibles',
    SWAP: '',
    SNAPSHOT: 'org.snapshot',
    MARKETS: 'com.maskbook.ito',
    VALUABLES: 'com.maskbook.tweet',
    MARKET_TREND: 'com.maskbook.trader'
};


/***/ }),

/***/ 20620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kz": () => (/* binding */ useDefinedSocialNetworkUIs),
/* harmony export */   "BY": () => (/* binding */ useOwnedPersonas),
/* harmony export */   "MU": () => (/* binding */ useAppearance),
/* harmony export */   "Wf": () => (/* binding */ useCurrentPersonaIdentifier),
/* harmony export */   "wp": () => (/* binding */ usePersonaAvatar),
/* harmony export */   "pk": () => (/* binding */ updatePersonaAvatar)
/* harmony export */ });
/* unused harmony exports revalidateSocialNetworkUIs, definedSocialNetworkUIs, currentPersonas */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11922);


const [useDefinedSocialNetworkUIs, revalidateSocialNetworkUIs, definedSocialNetworkUIs] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.SocialNetwork.getDefinedSocialNetworkUIs */ .K9.SocialNetwork.getDefinedSocialNetworkUIs, ()=>()=>{
    }
);
const [useOwnedPersonas, , currentPersonas] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Identity.queryOwnedPersonaInformation */ .K9.Identity.queryOwnedPersonaInformation, (x)=>{
    const a = _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.personaChanged.on */ .Vm.events.personaChanged.on(x);
    const b = _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.profilesChanged.on */ .Vm.events.profilesChanged.on(x);
    return ()=>void [
            a(),
            b()
        ]
    ;
});
const [useAppearance] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getTheme */ .K9.Settings.getTheme, (x)=>_API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.appearanceSettings.on */ .Vm.events.appearanceSettings.on(x)
);
const [useCurrentPersonaIdentifier] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getCurrentPersonaIdentifier */ .K9.Settings.getCurrentPersonaIdentifier, (x)=>_API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentPersonaIdentifier.on */ .Vm.events.currentPersonaIdentifier.on(x)
);
const [usePersonaAvatar] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.createGlobalState)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Identity.getCurrentPersonaAvatar */ .K9.Identity.getCurrentPersonaAvatar, (x)=>{
    const a = _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentPersonaIdentifier.on */ .Vm.events.currentPersonaIdentifier.on(x);
    const b = _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.personaAvatarChanged.on */ .Vm.events.personaAvatarChanged.on(x);
    return ()=>void [
            a(),
            b()
        ]
    ;
});
const updatePersonaAvatar = _API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Identity.updateCurrentPersonaAvatar */ .K9.Identity.updateCurrentPersonaAvatar;


/***/ }),

/***/ 87049:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ PersonaContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.1_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(83693);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(11922);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useConnectSocialNetwork.ts


function useConnectSocialNetwork() {
    return (0,useAsyncFn/* default */.Z)(API/* Services.SocialNetwork.connectSocialNetwork */.K9.SocialNetwork.connectSocialNetwork);
}
function useDisconnectSocialNetwork() {
    return (0,useAsyncFn/* default */.Z)((identifier)=>API/* Services.Identity.detachProfile */.K9.Identity.detachProfile(identifier)
    );
}

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var api = __webpack_require__(20620);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useCreatePersona.ts



function useCreatePersona() {
    return (0,useAsyncFn/* default */.Z)(async (nickName)=>{
        // TODO: should second parameter be the password?
        const identifier = await API/* Services.Identity.createPersonaByMnemonic */.K9.Identity.createPersonaByMnemonic(nickName, '');
        await (0,src.delay)(300);
        API/* Messages.events.personaChanged.sendToAll */.Vm.events.personaChanged.sendToAll([
            {
                of: identifier,
                owned: true,
                reason: 'new'
            }
        ]);
    });
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts






function usePersonaContext() {
    const currentPersonaIdentifier = (0,api/* useCurrentPersonaIdentifier */.Wf)();
    const definedSocialNetworks = (0,api/* useDefinedSocialNetworkUIs */.Kz)();
    const personas = (0,api/* useOwnedPersonas */.BY)();
    const currentPersona = personas.find((x)=>x.identifier.equals(currentPersonaIdentifier)
    );
    const [open, setOpen] = (0,react.useState)(false);
    const [, connectPersona] = useConnectSocialNetwork();
    const [, disconnectPersona] = useDisconnectSocialNetwork();
    const [, createPersona] = useCreatePersona();
    const renamePersona = API/* Services.Identity.renamePersona */.K9.Identity.renamePersona;
    const changeCurrentPersona = (0,react.useCallback)(API/* Services.Settings.setCurrentPersonaIdentifier */.K9.Settings.setCurrentPersonaIdentifier, []);
    return {
        connectPersona,
        disconnectPersona,
        createPersona,
        renamePersona,
        changeCurrentPersona,
        currentPersona,
        definedSocialNetworks,
        personas,
        drawerOpen: open,
        toggleDrawer: ()=>setOpen((e)=>!e
            )
    };
}
const PersonaContext = (0,unstated_next/* createContainer */.f)(usePersonaContext);


/***/ }),

/***/ 51987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s2": () => (/* binding */ RoutePaths),
/* harmony export */   "hS": () => (/* binding */ MarketTrendProvider)
/* harmony export */ });
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95142);
var RoutePaths;
(function(RoutePaths1) {
    RoutePaths1["Welcome"] = '/welcome';
    RoutePaths1["Setup"] = '/setup';
    RoutePaths1["SignUp"] = '/sign-up';
    RoutePaths1["SignIn"] = '/sign-in';
    RoutePaths1["PrivacyPolicy"] = '/privacy-policy';
    RoutePaths1["Personas"] = '/personas';
    RoutePaths1["Wallets"] = '/wallets';
    RoutePaths1["WalletsTransfer"] = '/wallets/transfer';
    RoutePaths1["WalletsSwap"] = '/wallets/swap';
    RoutePaths1["WalletsRedPacket"] = '/wallets/red-packet';
    RoutePaths1["WalletsSell"] = '/wallets/sell';
    RoutePaths1["WalletsHistory"] = '/wallets/history';
    RoutePaths1["CreateMaskWallet"] = '/create-mask-wallet';
    RoutePaths1["CreateMaskWalletForm"] = '/create-mask-wallet/form';
    RoutePaths1["CreateMaskWalletMnemonic"] = '/create-mask-wallet/mnemonic';
    RoutePaths1["Settings"] = '/settings';
    RoutePaths1["Labs"] = '/labs';
})(RoutePaths || (RoutePaths = {
}));
var MarketTrendProvider;
(function(MarketTrendProvider1) {
    MarketTrendProvider1[MarketTrendProvider1["COIN_GECKO"] = 0] = "COIN_GECKO";
    MarketTrendProvider1[MarketTrendProvider1["COIN_MARKET_CAP"] = 1] = "COIN_MARKET_CAP";
    MarketTrendProvider1[MarketTrendProvider1["UNISWAP_INFO"] = 2] = "UNISWAP_INFO";
})(MarketTrendProvider || (MarketTrendProvider = {
}));



/***/ }),

/***/ 36669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ MaskNotSquareIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92131);


const MaskNotSquareIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Mask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
        transform: "translate(30.000000, 30.000000)",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
                        fill: "#1C68F3",
                        cx: "300",
                        cy: "300",
                        r: "300"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M480,230 L480,330 L180,330 L180,330.001 L167.092637,330.001293 C180.753837,390.677229 234.970343,436 299.772548,436 C353.346739,436 399.685718,405.022375 421.854746,360.001864 L421.854746,360.001864 L480,360.001 L480,444 C480,463.882251 463.882251,480 444,480 L156,480 C136.117749,480 120,463.882251 120,444 L120,230 L480,230 Z M387.326493,360.00167 C368.234736,387.914297 336.14276,406.231603 299.772548,406.231603 C263.402336,406.231603 231.31036,387.914297 212.218603,360.00167 L212.218603,360.00167 Z M223,254 C194.788109,254 171.448756,274.861818 167.567063,302.000334 L167.567063,302.000334 L198.253822,302.000543 C201.627886,291.555206 211.431636,284 223,284 C234.568364,284 244.372114,291.555206 247.746178,302.000543 L247.746178,302.000543 L278.432937,302.000334 C274.551244,274.861818 251.211891,254 223,254 Z M377,254 C348.788109,254 325.448756,274.861818 321.567063,302.000334 L321.567063,302.000334 L352.253822,302.000543 C355.627886,291.555206 365.431636,284 377,284 C388.568364,284 398.372114,291.555206 401.746178,302.000543 L401.746178,302.000543 L432.432937,302.000334 C428.551244,274.861818 405.211891,254 377,254 Z M444,120 C463.882251,120 480,136.117749 480,156 L480,200 L120,200 L120,156 C120,136.117749 136.117749,120 156,120 L444,120 Z",
                        fill: "#FFFFFF"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M1608.29336,217 C1662.77088,217 1724.6531,238.208577 1728.35546,306.076023 L1652.19272,306.076023 C1650.606,286.45809 1632.62313,277.444444 1608.82227,277.444444 C1586.60814,277.444444 1576.55889,285.927875 1576.55889,296.001949 C1576.55889,304.48538 1582.90578,312.438596 1603.00428,316.150097 L1651.1349,324.103314 C1699.26552,333.116959 1731,356.446394 1731,402.044834 C1731,461.42885 1677.5803,489 1610.9379,489 C1543.7666,489 1489.28908,460.898635 1484,392.500975 L1560.16274,393.031189 C1563.8651,415.300195 1582.37687,425.374269 1609.35118,425.374269 C1632.09422,425.374269 1645.84582,418.481481 1645.84582,407.346979 C1645.84582,398.863548 1637.91221,391.97076 1620.98715,389.319688 L1569.15418,380.306043 C1524.72591,372.883041 1494.04925,347.962963 1494.04925,302.894737 C1494.04925,248.812865 1540.06424,217 1608.29336,217 Z M1287.2444,218 C1315.22761,218 1338.45896,225.41502 1357.46642,237.596838 L1357.46642,223.826087 L1443,223.826087 L1443,480.703557 L1357.46642,480.703557 L1357.46642,466.403162 C1338.45896,478.58498 1315.22761,486 1287.2444,486 C1218.07836,486 1160,428.268775 1160,352 C1160,275.201581 1218.07836,218 1287.2444,218 Z M786.246594,120 L914.5,312.710294 L1042.22343,120 L1109,120 L1109,481 L1019.4346,481 L1019.4346,299.969118 L939.408719,423.664706 L939.408719,424.195588 L889.591281,424.195588 L889.591281,423.664706 L809.035422,298.907353 L809.565395,481 L720,481 L720,120 L786.246594,120 Z M1863.8,105 L1863.8,320.538028 L1953.30741,224.15493 L2055.52593,224.15493 L1958.07407,329.011268 L2064,481 L1961.25185,481 L1899.81481,392.030986 L1863.8,430.690141 L1863.8,481 L1778,481 L1778,105 L1863.8,105 Z M1304.13993,287.913043 C1269.29291,287.913043 1243.94963,316.513834 1243.94963,352 C1243.94963,387.486166 1269.29291,415.557312 1304.13993,415.557312 C1323.14739,415.557312 1341.62687,410.26087 1357.46642,391.72332 L1357.46642,312.27668 C1341.62687,293.73913 1323.14739,287.913043 1304.13993,287.913043 Z",
                fill: "#1C68F3",
                fillRule: "nonzero"
            })
        ]
    })
}), '0 0 2124 660', [
    130,
    40
]);


/***/ }),

/***/ 98481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "113cffe822f49e239c50.png";

/***/ }),

/***/ 60623:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22461b76dd69c61cc73b.png";

/***/ }),

/***/ 17134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca1805e29a156eb1a710.png";

/***/ }),

/***/ 30886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c4a2d4ee436ccca93d2.png";

/***/ })

}]);