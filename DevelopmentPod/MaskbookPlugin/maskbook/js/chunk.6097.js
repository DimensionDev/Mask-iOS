"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6097],{

/***/ 93145:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UT": () => (/* binding */ x),
/* harmony export */   "lr": () => (/* binding */ useSearchParams)
/* harmony export */ });
/* unused harmony exports BrowserRouter, Link, NavLink, Prompt, createSearchParams, usePrompt */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63552);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
function n(){n=Object.assign||function(a){for(var d=1;d<arguments.length;d++){var b=arguments[d],c;for(c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])}return a};return n.apply(this,arguments)}function p(a,d){if(null==a)return{};var b={},c=Object.keys(a),e;for(e=0;e<c.length;e++){var f=c[e];0<=d.indexOf(f)||(b[f]=a[f])}return b}
function q(a,d){if(a){if("string"===typeof a)return r(a,d);var b=Object.prototype.toString.call(a).slice(8,-1);"Object"===b&&a.constructor&&(b=a.constructor.name);if("Map"===b||"Set"===b)return Array.from(b);if("Arguments"===b||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(b))return r(a,d)}}function r(a,d){if(null==d||d>a.length)d=a.length;for(var b=0,c=Array(d);b<d;b++)c[b]=a[b];return c}
function t(a){var d=0;if("undefined"===typeof Symbol||null==a[Symbol.iterator]){if(Array.isArray(a)||(a=q(a)))return function(){return d>=a.length?{done:!0}:{done:!1,value:a[d++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}d=a[Symbol.iterator]();return d.next.bind(d)}function v(a,d){if(!a){"undefined"!==typeof console&&console.warn(d);try{throw Error(d);}catch(b){}}}
function w(a){var d=a.children;a=a.window;var b=useRef();null==b.current&&(b.current=createBrowserHistory({window:a}));var c=b.current;a=useReducer(function(a,b){return b},{action:c.action,location:c.location});b=a[0];var e=a[1];useLayoutEffect(function(){return c.listen(e)},[c]);return createElement(Router,{children:d,action:b.action,location:b.location,navigator:c})} false&&(0);
function x(a){var d=a.children;a=a.window;var b=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();null==b.current&&(b.current=(0,history__WEBPACK_IMPORTED_MODULE_1__/* .createHashHistory */ .q_)({window:a}));var c=b.current;a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(function(a,b){return b},{action:c.action,location:c.location});b=a[0];var e=a[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function(){return c.listen(e)},[c]);return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_router__WEBPACK_IMPORTED_MODULE_2__/* .Router */ .F0,{children:d,action:b.action,location:b.location,navigator:c})} false&&(0);
var y=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(a,d){var b=a.onClick,c=a.replace,e=void 0===c?!1:c,f=a.state,g=a.target,m=a.to;a=p(a,["onClick","replace","state","target","to"]);c=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useHref */ .oQ)(m);var k=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)(),u=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)(),h=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPath */ .WU)(m);return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a",Object.assign({},a,{href:c,onClick:function(a){b&&b(a);a.defaultPrevented||0!==a.button||g&&"_self"!==g||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||(a.preventDefault(),a=!!e||(0,history__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(u)===(0,history__WEBPACK_IMPORTED_MODULE_1__/* .createPath */ .Ep)(h),k(m,{replace:a,state:f}))},ref:d,target:g}))});
 false&&(0);
var z=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function(a,d){var b=a["aria-current"],c=void 0===b?"page":b;b=a.activeClassName;var e=void 0===b?"active":b;b=a.activeStyle;var f=a.caseSensitive,g=void 0===f?!1:f;f=a.className;var m=void 0===f?"":f;f=a.end;var k=void 0===f?!1:f,u=a.style;f=a.to;a=p(a,"aria-current activeClassName activeStyle caseSensitive className end style to".split(" "));var h=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)(),l=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useResolvedPath */ .WU)(f);h=h.pathname;l=l.pathname;g||(h=h.toLowerCase(),l=l.toLowerCase());c=(g=k?h===l:h.startsWith(l))?c:
void 0;e=[m,g?e:null].filter(Boolean).join(" ");b=n({},u,{},g?b:null);return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(y,Object.assign({},a,{"aria-current":c,className:e,ref:d,style:b,to:f}))});
 false&&(0);function A(a){B(a.message,a.when);return null}
 false&&(0);function B(a,d){void 0===d&&(d=!0);var b=useCallback(function(b){window.confirm(a)&&b.retry()},[a]);useBlocker(b,d)}function C(a){void 0===a&&(a="");return new URLSearchParams("string"===typeof a||Array.isArray(a)||a instanceof URLSearchParams?a:Object.keys(a).reduce(function(d,b){var c=a[b];return d.concat(Array.isArray(c)?c.map(function(a){return[b,a]}):[[b,c]])},[]))}


function useSearchParams(a){ false?0:void 0;
var d=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(C(a)),b=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useLocation */ .TH)();a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){function a(){var a=k.value;c.has(a)||d.current.getAll(a).forEach(function(b){c.append(a,b)})}for(var c=C(b.search),e=t(d.current.keys()),k;!(k=e()).done;)a();return c},[b.search]);var c=(0,react_router__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .s0)(),e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(a,b){c("?"+C(a),b)},[c]);return[a,e]};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 85971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bo": () => (/* binding */ setService),
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "NG": () => (/* binding */ PluginServices),
/* harmony export */   "Vm": () => (/* binding */ Messages),
/* harmony export */   "Z": () => (/* binding */ setMessages),
/* harmony export */   "cr": () => (/* binding */ setPluginServices),
/* harmony export */   "jg": () => (/* binding */ setPluginMessages),
/* harmony export */   "yC": () => (/* binding */ PluginMessages)
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

/***/ 2050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(73268);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(8571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItem/listItemClasses.js
var listItemClasses = __webpack_require__(90468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemIcon/listItemIconClasses.js
var listItemIconClasses = __webpack_require__(80417);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(13970);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(10);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/ListItemText/listItemTextClasses.js
var listItemTextClasses = __webpack_require__(19440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(19063);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(73322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(59216);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Collapse/Collapse.js + 1 modules
var Collapse = __webpack_require__(16296);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/esm/ExpandLess.js
var ExpandLess = __webpack_require__(86018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/esm/ExpandMore.js
var ExpandMore = __webpack_require__(59915);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/context.ts
var context = __webpack_require__(14967);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(46098);
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

// EXTERNAL MODULE: ../icons/brands/MaskBanner.tsx
var MaskBanner = __webpack_require__(39556);
// EXTERNAL MODULE: ../icons/brands/Mask.tsx
var Mask = __webpack_require__(51192);
// EXTERNAL MODULE: ../icons/menus/MenuPersonasActive.tsx
var MenuPersonasActive = __webpack_require__(38696);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(21692);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
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
            cursor: 'pointer',
            '&:hover': {
                background: theme.palette.background.default
            }
        },
        [`&.${listItemClasses/* default.selected */.Z.selected}`]: {
            color: src/* MaskColorVar.textLink */.ZN.textLink,
            backgroundColor: theme.palette.background.default,
            position: 'relative',
            [listItemIconClasses/* default.root */.Z.root]: {
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
            justifyContent: 'start',
            marginBottom: theme.spacing(3.5)
        }
    })
);
const ItemIcon = (0,styled/* default */.ZP)(ListItemIcon/* default */.Z)(({ theme  })=>({
        '& svg': {
            fontSize: 36
        }
    })
);
const ListSubTextItem = (0,styled/* default */.ZP)(ListItemText/* default */.Z)(({ theme  })=>({
        [`&.${listItemTextClasses/* default.inset */.Z.inset}`]: {
            marginLeft: theme.spacing(2),
            '&:before': {
                content: '""',
                display: 'inline-block',
                width: 4,
                height: 4,
                borderRadius: 2,
                background: 'currentColor',
                position: 'absolute',
                left: theme.spacing(9),
                top: 22
            }
        }
    })
);
function Navigation({ onClose  }) {
    const { expanded , toggleNavigationExpand  } = (0,react.useContext)(context/* DashboardContext */.G);
    const isWalletPath = (0,react_router/* useMatch */.bS)(shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets);
    const isWalletTransferPath = (0,react_router/* useMatch */.bS)(shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer);
    const isWalletHistoryPath = (0,react_router/* useMatch */.bS)(shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory);
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const isLargeScreen = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.up('lg')
    );
    const t = (0,locales/* useDashboardI18N */.x)();
    const mode = (0,useTheme/* default */.Z)().palette.mode;
    const currentPluginId = (0,plugin_infra_src/* usePluginIDContext */.Zn)();
    const onExpand = (e)=>{
        e.stopPropagation();
        toggleNavigationExpand();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
        onClick: ()=>{
            return onClose === null || onClose === void 0 ? void 0 : onClose();
        },
        children: [
            isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsx)(LogoItem, {
                children: mode === 'dark' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBanner/* MaskBannerIcon */.i, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mask/* MaskNotSquareIcon */.h, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: shared_base_src/* DashboardRoutes.Personas */.vq.Personas,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ItemIcon, {
                        children: (0,react_router/* useMatch */.bS)(shared_base_src/* DashboardRoutes.Personas */.vq.Personas) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPersonasActive/* MenuPersonasActiveIcon */.G, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPersonasIcon, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: t.personas()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: "",
                selected: !!(0,react_router/* useMatch */.bS)(shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets),
                onClick: onExpand,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ItemIcon, {
                        children: isWalletPath || isWalletHistoryPath || isWalletTransferPath ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuWalletsActiveIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuWalletsIcon, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        children: t.wallets()
                    }),
                    expanded ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Collapse/* default */.Z, {
                in: expanded,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                    disablePadding: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemLink, {
                            to: shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubTextItem, {
                                inset: true,
                                primary: t.wallets_assets()
                            })
                        }),
                        currentPluginId === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemLink, {
                            to: shared_base_src/* DashboardRoutes.WalletsTransfer */.vq.WalletsTransfer,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubTextItem, {
                                inset: true,
                                primary: t.wallets_transfer()
                            })
                        }),
                        currentPluginId === plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM && /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemLink, {
                            to: shared_base_src/* DashboardRoutes.WalletsHistory */.vq.WalletsHistory,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListSubTextItem, {
                                inset: true,
                                primary: t.wallets_history()
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: shared_base_src/* DashboardRoutes.Labs */.vq.Labs,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ItemIcon, {
                        children: (0,react_router/* useMatch */.bS)(shared_base_src/* DashboardRoutes.Labs */.vq.Labs) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuLabsActiveIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuLabsIcon, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: t.labs()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemLink, {
                to: shared_base_src/* DashboardRoutes.Settings */.vq.Settings,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ItemIcon, {
                        sx: {
                            fontSize: 36
                        },
                        children: (0,react_router/* useMatch */.bS)(shared_base_src/* DashboardRoutes.Settings */.vq.Settings) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuSettingsActiveIcon, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuSettingsIcon, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        primary: t.settings()
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 14967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ DashboardContext)
/* harmony export */ });
/* unused harmony export DashboardContextDefault */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

const DashboardContextDefault = {
    expanded: true,
    drawerOpen: false,
    toggleDrawer: ()=>{},
    toggleNavigationExpand: ()=>{}
};
const DashboardContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(DashboardContextDefault);


/***/ }),

/***/ 20301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ NavigationVersionFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92597);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21692);





const VersionContainer = (0,_mui_system__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)('div')(()=>({
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        textAlign: 'center',
        fontSize: '12px'
    })
);
const NavigationVersionFooter = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    var ref, ref1;
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_3__/* .useDashboardI18N */ .x)();
    var ref2;
    const version = (ref2 = (ref1 = (ref = globalThis.browser) === null || ref === void 0 ? void 0 : ref.runtime.getManifest()) === null || ref1 === void 0 ? void 0 : ref1.version) !== null && ref2 !== void 0 ? ref2 : "v2.5.0".slice(1);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VersionContainer, {
        children: version && t.version_of_stable({
            version
        })
    }));
});


/***/ }),

/***/ 12474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DashboardRoot)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@6.0.0-beta.0_154c53788755629e2430b224cbac559e/node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(93145);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+styled-engine@5.4.4_b7ca890c39441a8a46b068921fe95e44/node_modules/@mui/styled-engine/StyledEngineProvider/StyledEngineProvider.js
var StyledEngineProvider = __webpack_require__(33274);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.4.4_d1c81cb414c255fa45866714477ddb5d/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(79468);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(51319);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(39850);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ../web3-shared/evm/context/index.tsx
var context = __webpack_require__(67937);
// EXTERNAL MODULE: ../../node_modules/.pnpm/i18next@21.6.13/node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(28676);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(85971);
;// CONCATENATED MODULE: ../dashboard/src/utils/kv-storage.ts


const memory = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return API/* Services.Settings.__kv_storage_read__ */.K9.Settings.__kv_storage_read__('memory', ...args);
    },
    async setValue (...args) {
        await API/* Services.Settings.__kv_storage_write__ */.K9.Settings.__kv_storage_write__('memory', ...args);
    }
};
const indexedDB = {
    beforeAutoSync: Promise.resolve(),
    getValue (...args) {
        return API/* Services.Settings.__kv_storage_read__ */.K9.Settings.__kv_storage_read__('indexedDB', ...args);
    },
    async setValue (...args) {
        await API/* Services.Settings.__kv_storage_write__ */.K9.Settings.__kv_storage_write__('indexedDB', ...args);
    }
};
const createPersistentKVStorage = (0,shared_base_src/* createKVStorageHost */.rc)(indexedDB, API/* Messages.events.__kv_backend_persistent__ */.Vm.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,shared_base_src/* createKVStorageHost */.rc)(memory, API/* Messages.events.__kv_backend_in_memory__ */.Vm.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {})
};
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {})
};

// EXTERNAL MODULE: ../plugins/example/src/index.ts
var example_src = __webpack_require__(48770);
;// CONCATENATED MODULE: ../dashboard/src/initialization/plugins.js
// Please make sure it is also added in
// packages/mask/src/plugin-infra/register.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/@servie+events@3.0.0/node_modules/@servie/events/dist/index.js
var dist = __webpack_require__(69260);
;// CONCATENATED MODULE: ../dashboard/src/initialization/PluginHost.ts







const PluginHost = {
    minimalMode: {
        events: new dist/* Emitter */.Q5(),
        isEnabled: (id)=>{
            return API/* Services.Settings.getPluginMinimalModeEnabled */.K9.Settings.getPluginMinimalModeEnabled(id);
        }
    },
    addI18NResource (plugin, resource) {
        (0,shared_base_src/* createI18NBundle */.C9)(plugin, resource)(i18next/* default */.ZP);
    },
    createContext: (pluginID, signal)=>{
        return {
            createKVStorage (type, defaultValues) {
                if (type === 'memory') return InMemoryStorages.Plugin.createSubScope(pluginID, defaultValues, signal);
                else return PersistentStorages.Plugin.createSubScope(pluginID, defaultValues, signal);
            },
            personaSign: API/* Services.Identity.signWithPersona */.K9.Identity.signWithPersona,
            walletSign: API/* Services.Ethereum.personalSign */.K9.Ethereum.personalSign
        };
    }
};
setTimeout(()=>{
    API/* Messages.events.pluginMinimalModeChanged.on */.Vm.events.pluginMinimalModeChanged.on(([id, status])=>{
        PluginHost.minimalMode.events.emit(status ? 'enabled' : 'disabled', id);
    });
    (0,plugin_infra_src/* startPluginDashboard */.CB)(PluginHost);
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(8571);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(11061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(19063);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/context.ts
var DashboardFrame_context = __webpack_require__(14967);
// EXTERNAL MODULE: ../dashboard/src/components/DashboardFrame/Navigation.tsx + 7 modules
var Navigation = __webpack_require__(2050);
// EXTERNAL MODULE: ../dashboard/src/components/NavigationVersionFooter/index.tsx
var NavigationVersionFooter = __webpack_require__(20301);
;// CONCATENATED MODULE: ../dashboard/src/components/DashboardFrame/index.tsx


// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated






const Root = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
    })
);
const LeftContainer = (0,styled/* default */.ZP)(Grid/* default */.ZP)(({ theme  })=>({
        height: '100vh',
        [theme.breakpoints.up('lg')]: {
            // Just meet the design size
            minWidth: 232
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '22px'
    })
);
const DashboardFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardFrame_context/* DashboardContext.Provider */.G.Provider, {
        value: context,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Root, {
            container: true,
            children: [
                isLargeScreen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(LeftContainer, {
                    item: true,
                    xs: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigation/* Navigation */.W, {}),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(NavigationVersionFooter/* NavigationVersionFooter */.h, {})
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    container: true,
                    direction: "column",
                    item: true,
                    xs: isLargeScreen ? 10 : 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                        fallback: null,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ErrorBoundary */.SV, {
                            children: props.children
                        })
                    })
                })
            ]
        })
    }));
});

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(2138);
;// CONCATENATED MODULE: ../dashboard/src/GuardRoute.tsx



function NoPersonaGuardRoute(props) {
    const { redirectTo , ...rest } = props;
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return currentPersona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, {
        to: redirectTo !== null && redirectTo !== void 0 ? redirectTo : '/',
        replace: true
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
        ...rest
    });
};

;// CONCATENATED MODULE: ../dashboard/src/pages/routes.tsx






const Wallets = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(4570), __webpack_require__.e(7696), __webpack_require__.e(9557), __webpack_require__.e(3075), __webpack_require__.e(5085)]).then(__webpack_require__.bind(__webpack_require__, 30722))
);
const Setup = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(1557), __webpack_require__.e(3348)]).then(__webpack_require__.bind(__webpack_require__, 23348))
);
const SignUp = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(8000), __webpack_require__.e(9759), __webpack_require__.e(4049), __webpack_require__.e(9259), __webpack_require__.e(9617), __webpack_require__.e(6694)]).then(__webpack_require__.bind(__webpack_require__, 36694))
);
const SignIn = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(6316), __webpack_require__.e(8693), __webpack_require__.e(936)]).then(__webpack_require__.bind(__webpack_require__, 40936))
);
const PrivacyPolicy = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(1557), __webpack_require__.e(2302)]).then(__webpack_require__.bind(__webpack_require__, 22302))
);
const Welcome = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(1557), __webpack_require__.e(9682)]).then(__webpack_require__.bind(__webpack_require__, 59682))
);
const Personas = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(8000), __webpack_require__.e(9759), __webpack_require__.e(2486), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(7696), __webpack_require__.e(4049), __webpack_require__.e(9259), __webpack_require__.e(9557), __webpack_require__.e(9617), __webpack_require__.e(3075), __webpack_require__.e(8100)]).then(__webpack_require__.bind(__webpack_require__, 89317))
);
const Settings = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(3294), __webpack_require__.e(6316), __webpack_require__.e(7696), __webpack_require__.e(9557), __webpack_require__.e(8693), __webpack_require__.e(7829)]).then(__webpack_require__.bind(__webpack_require__, 97829))
);
const CreateWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 1336).then(__webpack_require__.bind(__webpack_require__, 41336))
);
const Labs = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(7696), __webpack_require__.e(9557), __webpack_require__.e(3510)]).then(__webpack_require__.bind(__webpack_require__, 53510))
);
function Pages() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NoPersonaGuardRoute, {
                    path: shared_base_src/* DashboardRoutes.Welcome */.vq.Welcome,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Welcome, {}),
                    redirectTo: shared_base_src/* DashboardRoutes.Personas */.vq.Personas
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: shared_base_src/* DashboardRoutes.Setup */.vq.Setup,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Setup, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: `${shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp}/*`,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUp, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignIn, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: shared_base_src/* DashboardRoutes.PrivacyPolicy */.vq.PrivacyPolicy,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PrivacyPolicy, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: shared_base_src/* DashboardRoutes.Personas */.vq.Personas,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Personas, {}))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: `${shared_base_src/* DashboardRoutes.Wallets */.vq.Wallets}/*`,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Wallets, {}))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: shared_base_src/* DashboardRoutes.Settings */.vq.Settings,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Settings, {}))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: shared_base_src/* DashboardRoutes.Labs */.vq.Labs,
                    element: routes_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Labs, {}))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: `${shared_base_src/* DashboardRoutes.CreateMaskWallet */.vq.CreateMaskWallet}/*`,
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWallet, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    element: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, {
                        to: shared_base_src/* DashboardRoutes.Personas */.vq.Personas
                    })
                })
            ]
        })
    }));
}
function routes_frame(x) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardFrame, {
        children: x
    }));
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(15091);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(24524);
;// CONCATENATED MODULE: ../dashboard/src/web3/context.ts




const Web3Context = {
    allowTestnet: createSubscriptionFromAsync(API/* Services.Settings.getWalletAllowTestChain */.K9.Settings.getWalletAllowTestChain, false, ()=>{
        return ()=>{};
    }),
    account: createSubscriptionFromAsync(async ()=>{
        const providerType = await API/* Services.Settings.getCurrentSelectedWalletProvider */.K9.Settings.getCurrentSelectedWalletProvider();
        if ((0,chainDetailed/* isInjectedProvider */.sR)(providerType) || providerType === types/* ProviderType.Fortmatic */.lP.Fortmatic) return '';
        return API/* Services.Settings.getSelectedWalletAddress */.K9.Settings.getSelectedWalletAddress();
    }, '', (callback)=>{
        const a = API/* Messages.events.currentAccountSettings.on */.Vm.events.currentAccountSettings.on(callback);
        const b = API/* Messages.events.currentProviderSettings.on */.Vm.events.currentProviderSettings.on(callback);
        return ()=>void [
                a(),
                b()
            ]
        ;
    }),
    tokenPrices: createSubscriptionFromAsync(API/* Services.Settings.getTokenPrices */.K9.Settings.getTokenPrices, {}, API/* Messages.events.currentTokenPricesSettings.on */.Vm.events.currentTokenPricesSettings.on),
    chainId: createSubscriptionFromAsync(API/* Services.Settings.getChainId */.K9.Settings.getChainId, types/* ChainId.Mainnet */.a_.Mainnet, API/* Messages.events.currentChainIdSettings.on */.Vm.events.currentChainIdSettings.on),
    providerType: createSubscriptionFromAsync(API/* Services.Settings.getCurrentSelectedWalletProvider */.K9.Settings.getCurrentSelectedWalletProvider, types/* ProviderType.MaskWallet */.lP.MaskWallet, API/* Messages.events.currentProviderSettings.on */.Vm.events.currentProviderSettings.on),
    networkType: createSubscriptionFromAsync(API/* Services.Settings.getCurrentSelectedWalletNetwork */.K9.Settings.getCurrentSelectedWalletNetwork, types/* NetworkType.Ethereum */.td.Ethereum, API/* Messages.events.currentNetworkSettings.on */.Vm.events.currentNetworkSettings.on),
    walletPrimary: createSubscriptionFromAsync(API/* PluginServices.Wallet.getWalletPrimary */.NG.Wallet.getWalletPrimary, null, API/* PluginMessages.Wallet.events.walletsUpdated.on */.yC.Wallet.events.walletsUpdated.on),
    wallets: createSubscriptionFromAsync(API/* PluginServices.Wallet.getWallets */.NG.Wallet.getWallets, [], API/* PluginMessages.Wallet.events.walletsUpdated.on */.yC.Wallet.events.walletsUpdated.on),
    erc20Tokens: createSubscriptionFromAsync(()=>API/* PluginServices.Wallet.getTokens */.NG.Wallet.getTokens(types/* EthereumTokenType.ERC20 */.Dr.ERC20)
    , [], API/* PluginMessages.Wallet.events.erc20TokensUpdated.on */.yC.Wallet.events.erc20TokensUpdated.on),
    erc721Tokens: createSubscriptionFromAsync(()=>API/* PluginServices.Wallet.getTokens */.NG.Wallet.getTokens(types/* EthereumTokenType.ERC721 */.Dr.ERC721)
    , [], API/* PluginMessages.Wallet.events.erc721TokensUpdated.on */.yC.Wallet.events.erc721TokensUpdated.on),
    erc1155Tokens: createSubscriptionFromAsync(()=>API/* PluginServices.Wallet.getTokens */.NG.Wallet.getTokens(types/* EthereumTokenType.ERC1155 */.Dr.ERC1155)
    , [], API/* PluginMessages.Wallet.events.erc1155TokensUpdated.on */.yC.Wallet.events.erc1155TokensUpdated.on),
    portfolioProvider: createSubscriptionFromAsync(API/* Services.Settings.getCurrentPortfolioDataProvider */.K9.Settings.getCurrentPortfolioDataProvider, types/* FungibleAssetProvider.DEBANK */.Am.DEBANK, API/* Messages.events.currentFungibleAssetDataProviderSettings.on */.Vm.events.currentFungibleAssetDataProviderSettings.on),
    addToken: API/* PluginServices.Wallet.addToken */.NG.Wallet.addToken,
    removeToken: API/* PluginServices.Wallet.removeToken */.NG.Wallet.removeToken,
    trustToken: API/* PluginServices.Wallet.trustToken */.NG.Wallet.trustToken,
    blockToken: API/* PluginServices.Wallet.blockToken */.NG.Wallet.blockToken,
    request: API/* Services.Ethereum.request */.K9.Ethereum.request,
    getAssetsList: API/* PluginServices.Wallet.getAssetsList */.NG.Wallet.getAssetsList,
    getAssetsListNFT: API/* PluginServices.Wallet.getAssetsListNFT */.NG.Wallet.getAssetsListNFT,
    getCollectionsNFT: API/* PluginServices.Wallet.getCollectionsNFT */.NG.Wallet.getCollectionsNFT,
    getAddressNamesList: API/* PluginServices.Wallet.getAddressNames */.NG.Wallet.getAddressNames,
    getTransactionList: API/* PluginServices.Wallet.getTransactionList */.NG.Wallet.getTransactionList,
    fetchERC20TokensFromTokenLists: web3_providers_src/* TokenList.fetchERC20TokensFromTokenLists */.no.fetchERC20TokensFromTokenLists,
    providerSocket: (0,base_src/* getProxyWebsocketInstance */.bu)((info)=>API/* PluginMessages.Wallet.events.socketMessageUpdated.sendToAll */.yC.Wallet.events.socketMessageUpdated.sendToAll(info)
    )
};
// double check
function createSubscriptionFromAsync(f, defaultValue, onChange) {
    // 0 - idle, 1 - updating state, > 1 - waiting state
    let beats = 0;
    let state = defaultValue;
    const { subscribe , trigger  } = getEventTarget();
    f().then((v)=>state = v
    ).finally(trigger);
    const flush = async ()=>{
        state = await f();
        beats -= 1;
        if (beats > 0) {
            beats = 1;
            setTimeout(flush, 0);
        } else if (beats < 0) {
            beats = 0;
        }
        trigger();
    };
    return {
        getCurrentValue: ()=>state
        ,
        subscribe: (sub)=>{
            const a = subscribe(sub);
            const b = onChange(async ()=>{
                beats += 1;
                if (beats === 1) flush();
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

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var api = __webpack_require__(49437);
// EXTERNAL MODULE: ./src/plugins/EVM/UI/Web3State/index.ts + 2 modules
var Web3State = __webpack_require__(36581);
;// CONCATENATED MODULE: ../dashboard/src/initialization/Dashboard.tsx















const PluginRender = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsDashboard */.eE, (x)=>x.GlobalInjection
);
function DashboardRoot() {
    const pluginID = (0,api/* usePluginID */.bO)();
    const PluginsWeb3State = (0,plugin_infra_src/* useAllPluginsWeb3State */.Ne)();
    // TODO:
    // migrate EVM plugin
    (0,Web3State/* fixWeb3State */.v)(PluginsWeb3State[plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM], Web3Context);
    // #region theme
    const appearance = (0,api/* useAppearance */.MU)();
    const mode = (0,src/* useSystemPreferencePalette */.QO)();
    const themes = {
        dark: src/* MaskDarkTheme */.Hr,
        light: src/* MaskLightTheme */.Cp,
        default: mode === 'dark' ? src/* MaskDarkTheme */.Hr : src/* MaskLightTheme */.Cp
    };
    const theme = themes[appearance];
    (0,src/* applyMaskColorVars */.Dc)(document.body, appearance === 'default' ? mode : appearance);
    // #endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(context/* Web3Provider */.Qg, {
        value: Web3Context,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(plugin_infra_src/* PluginsWeb3ContextProvider */.$8, {
            pluginID: pluginID,
            value: PluginsWeb3State,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* I18NextProviderHMR */.qy, {
                i18n: i18next/* default */.ZP,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledEngineProvider/* default */.Z, {
                    injectFirst: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                        theme: theme,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(usePersonaContext/* PersonaContext.Provider */.m.Provider, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_src/* ErrorBoundary */.SV, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CssBaseline/* default */.ZP, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* CustomSnackbarProvider */.YO, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.UT, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Pages, {})
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {})
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

/***/ 21692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* reexport safe */ _i18n_generated__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _i18n_generated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28074);
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts



/***/ }),

/***/ 49437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BY": () => (/* binding */ useOwnedPersonas),
/* harmony export */   "Kz": () => (/* binding */ useDefinedSocialNetworkUIs),
/* harmony export */   "MU": () => (/* binding */ useAppearance),
/* harmony export */   "Wf": () => (/* binding */ useCurrentPersonaIdentifier),
/* harmony export */   "bO": () => (/* binding */ usePluginID),
/* harmony export */   "pk": () => (/* binding */ updatePersonaAvatar),
/* harmony export */   "wp": () => (/* binding */ usePersonaAvatar)
/* harmony export */ });
/* unused harmony export revalidateSocialNetworkUIs */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39850);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85971);


const [useDefinedSocialNetworkUIs, revalidateSocialNetworkUIs] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.SocialNetwork.getDefinedSocialNetworkUIs */ .K9.SocialNetwork.getDefinedSocialNetworkUIs, ()=>()=>{}
);
const [useOwnedPersonas] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Identity.queryOwnedPersonaInformation */ .K9.Identity.queryOwnedPersonaInformation, (x)=>_API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.ownPersonaChanged.on */ .Vm.events.ownPersonaChanged.on(x)
);
const [useAppearance] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getTheme */ .K9.Settings.getTheme, (x)=>_API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.appearanceSettings.on */ .Vm.events.appearanceSettings.on(x)
);
const [usePluginID] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getPluginID */ .K9.Settings.getPluginID, (x)=>_API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.pluginIDSettings.on */ .Vm.events.pluginIDSettings.on(x)
);
const [useCurrentPersonaIdentifier] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Settings.getCurrentPersonaIdentifier */ .K9.Settings.getCurrentPersonaIdentifier, (x)=>_API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentPersonaIdentifier.on */ .Vm.events.currentPersonaIdentifier.on(x)
);
const [usePersonaAvatar] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalState */ .r8)(_API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Identity.getCurrentPersonaAvatar */ .K9.Identity.getCurrentPersonaAvatar, (x)=>{
    const a = _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.currentPersonaIdentifier.on */ .Vm.events.currentPersonaIdentifier.on(x);
    const b = _API__WEBPACK_IMPORTED_MODULE_1__/* .Messages.events.ownPersonaChanged.on */ .Vm.events.ownPersonaChanged.on(x);
    return ()=>void [
            a(),
            b()
        ]
    ;
});
const updatePersonaAvatar = _API__WEBPACK_IMPORTED_MODULE_1__/* .Services.Identity.updateCurrentPersonaAvatar */ .K9.Identity.updateCurrentPersonaAvatar;


/***/ }),

/***/ 2138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ PersonaContext)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(56838);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(85971);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useConnectSocialNetwork.ts


function useConnectSocialNetwork() {
    return (0,useAsyncFn/* default */.Z)(API/* Services.SocialNetwork.connectSocialNetwork */.K9.SocialNetwork.connectSocialNetwork);
}
function useOpenProfilePage() {
    return (0,useAsyncFn/* default */.Z)(API/* Services.SocialNetwork.openProfilePage */.K9.SocialNetwork.openProfilePage);
}
function useDisconnectSocialNetwork() {
    return (0,useAsyncFn/* default */.Z)((identifier)=>API/* Services.Identity.detachProfile */.K9.Identity.detachProfile(identifier)
    );
}

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var api = __webpack_require__(49437);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useCreatePersona.ts



function useCreatePersona() {
    return (0,useAsyncFn/* default */.Z)(async (nickName)=>{
        // TODO: should second parameter be the password?
        await API/* Services.Identity.createPersonaByMnemonic */.K9.Identity.createPersonaByMnemonic(nickName, '');
        await (0,esm/* delay */.gw)(300);
        API/* Messages.events.ownPersonaChanged.sendToAll */.Vm.events.ownPersonaChanged.sendToAll(undefined);
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
    const [, openProfilePage] = useOpenProfilePage();
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
        openProfilePage,
        drawerOpen: open,
        toggleDrawer: ()=>setOpen((e)=>!e
            )
    };
}
const PersonaContext = (0,unstated_next/* createContainer */.f)(usePersonaContext);


/***/ }),

/***/ 51192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ MaskNotSquareIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 39556:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ MaskBannerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 38696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ MenuPersonasActiveIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const MenuPersonasActiveIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('MenuPersonasActiveIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "3.594",
            y: "13.04",
            width: "1.5",
            height: "7.5",
            rx: ".75",
            transform: "rotate(-30 3.594 13.04)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.635 12.944c-.97.31-2.018.146-2.97-.445a.434.434 0 00-.37-.045.446.446 0 00-.282.263c-.427 1.021-1.196 1.765-2.166 2.075-1.55.495-3.312-.245-4.392-1.843a5.502 5.502 0 01-.684-1.409 6.763 6.763 0 01-.187-.744l-.165-.934.774.546a.574.574 0 00.505.084c.046-.015.09-.04.132-.063l.196-.215.013-.025.025-.048a4.253 4.253 0 012.259-1.718 4.244 4.244 0 012.687.037 4.244 4.244 0 012.168-1.587 4.274 4.274 0 012.837.091l.049.025c.036.02.082.035.128.051l.012.006c.1.03.211.024.322-.011a.56.56 0 00.363-.36l.305-.89.406.856c.117.238.203.475.28.715.161.507.246 1.03.258 1.544.065 1.923-.952 3.55-2.503 4.044zm-5.973-.585c-.129.042-.264.065-.402.078-.758.049-1.462-.47-1.786-.752.233-.258.698-.711 1.28-.897.138-.044.264-.064.402-.078.758-.048 1.462.47 1.786.752-.242.261-.707.715-1.28.897zm3.164-1.498c.34.075.991.172 1.563-.01.139-.045.262-.104.373-.17.637-.397.92-1.23 1.02-1.648-.339-.075-.99-.172-1.563.01a1.802 1.802 0 00-.373.17c-.636.397-.92 1.23-1.02 1.648z",
            fill: "url(#personas_active_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#personas_active_0)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.03 8.621l.162-.27 7.659 2.527-.033.314a9.007 9.007 0 01-.434 2.04c-.531 1.594-1.443 2.96-2.56 3.85-.835.662-1.736 1.01-2.593 1.01-.336 0-.661-.044-.976-.153-1.128-.38-1.963-1.377-2.343-2.82-.369-1.378-.282-3.016.25-4.61.217-.673.51-1.302.867-1.888zm.976 4.48c.163.076.336.109.532.109.173 0 .368-.033.575-.087.221-.074.4-.166.477-.207.026-.013.04-.02.043-.02l.217-.13-.12-.229c-.01-.032-.357-.694-1.04-.998-.684-.303-1.41-.108-1.443-.097l-.25.065.055.25c.003.002.01.025.02.063.028.093.082.278.175.479.195.39.455.672.759.803zm3.374 1.15c.086.022.173.033.27.033.261 0 .543-.076.814-.217.282-.141.467-.304.478-.315l.195-.173-.152-.206c-.022-.033-.488-.63-1.215-.792-.673-.15-1.299.117-1.414.166-.01.004-.015.007-.018.007l-.228.109.098.239c0 .01.098.249.282.498.26.348.564.575.89.651z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "personas_active_linear",
                    x1: "2.598",
                    y1: "10.871",
                    x2: "15.806",
                    y2: "6.618",
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "personas_active_0",
                    x: "8.688",
                    y: "4.35",
                    width: "17.163",
                    height: "17.741",
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


/***/ }),

/***/ 28074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ DashboardTrans),
/* harmony export */   "x": () => (/* binding */ useDashboardI18N)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76529);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39465);
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .Trans */ .c, { i18nKey, ns: "dashboard", ...props })
function useDashboardI18N() {
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .useTranslation */ .$)("dashboard")
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(
        function proxyBasedHooks() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = t.bind(null, key));
        },
    });
},
        [t],
    )
}
const DashboardTrans = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()

/***/ }),

/***/ 37879:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

}]);