"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1694],{

/***/ 62758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(88448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/useThemeProps.js
var useThemeProps = __webpack_require__(43285);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(59891);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(26110);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(98224);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(72717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = styleProps => {
  const {
    classes
  } = styleProps;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const styleProps = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(styleProps);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m/* default */.Z)(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    styleProps: styleProps
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 97379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ detectScrollType),
/* harmony export */   "T": () => (/* binding */ getNormalizedScrollLeft)
/* harmony export */ });
// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

/***/ }),

/***/ 40666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


const ArrowDownRound = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowDown', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M10 11.6l4 4 4-4",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 28 28');


/***/ }),

/***/ 65665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


const CopyIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('copy', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M16.115 8h-6.23C9.12 8 8.5 8.62 8.5 9.385v6.23C8.5 16.38 9.12 17 9.885 17h6.23c.765 0 1.385-.62 1.385-1.385v-6.23C17.5 8.62 16.88 8 16.115 8z",
            fill: "none",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M5.577 12h-.692A1.385 1.385 0 013.5 10.615v-6.23A1.385 1.385 0 014.885 3h6.23A1.385 1.385 0 0112.5 4.385v.692",
            fill: "none",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');


/***/ }),

/***/ 45305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ImportWalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


const ImportWalletIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Index', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M8 22.19C8 19.877 9.976 18 12.414 18h23.172C38.024 18 40 19.876 40 22.19v13.62c0 2.314-1.976 4.19-4.414 4.19H12.414C9.976 40 8 38.124 8 35.81V22.19z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.129 20.012a1.5 1.5 0 01-.141 2.117l-8 7a1.5 1.5 0 01-1.976 0l-8-7a1.5 1.5 0 011.976-2.258l5.512 4.823V8a1.5 1.5 0 013 0v16.694l5.512-4.823a1.5 1.5 0 012.117.141z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M8 25.79C8 23.697 9.976 22 12.414 22h23.172C38.024 22 40 23.697 40 25.79v10.42c0 2.093-1.976 3.79-4.414 3.79H12.414C9.976 40 8 38.303 8 36.21V25.79z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "4",
                    y: "14",
                    width: "40",
                    height: "30",
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter1_b",
                    x: "5",
                    y: "19",
                    width: "38",
                    height: "24",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
                            in: "BackgroundImage",
                            stdDeviation: "1.5"
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
}), '0 0 48 48');


/***/ }),

/***/ 22681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43402);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76898);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13661);





const Image1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Image2(props, outgoingRef) {
    const { src , loading: propsLoading , canvasProps , imgProps , style , className , SkeletonProps , onClick , onURL  } = props;
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#Maximum_canvas_size
    const [height, width] = [
        Math.min(32767, props.height || 500),
        Math.min(32767, props.width || 500)
    ];
    const [hasCSPBan, setHasCSPBan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [origin, component] = resolveMode(props, hasCSPBan);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [blobURL, setBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!(src instanceof Blob)) return;
        const blob = URL.createObjectURL(src);
        setBlob(blob);
        return ()=>URL.revokeObjectURL(blob)
        ;
    }, [
        src
    ]);
    const url = blobURL || (typeof src === 'string' ? src : undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (url && (onURL === null || onURL === void 0 ? void 0 : onURL(url)));
    }, [
        onURL,
        url
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
    // TODO: handle image loading error
    const { loading , error , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(async function() {
        if (propsLoading) return;
        if (component === 'img') return;
        if (typeof src !== 'string') return;
        if (origin === 'current') return fetch(src).then((x)=>x.blob()
        );
        return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Helper.fetch */ .ZP.Helper.fetch(src);
    }, [
        component,
        src,
        origin
    ]);
    if (error) console.error(error);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const e = canvasRef.current;
        if (!e) return;
        if (!(e instanceof HTMLCanvasElement)) return;
        if (propsLoading || loading) return;
        if (component !== 'canvas') return;
        const source = src instanceof Blob ? src : value;
        if (!source) return;
        toImage(source).then((data)=>{
            const ctx = e.getContext('2d');
            ctx.drawImage(data, 0, 0, width * window.devicePixelRatio, height * window.devicePixelRatio);
        });
    }, [
        propsLoading,
        loading,
        value,
        component,
        width,
        height,
        src
    ]);
    if (propsLoading || loading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        }));
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : undefined,
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ref: canvasRef,
        width: width * window.devicePixelRatio,
        height: height * window.devicePixelRatio,
        style: {
            width,
            height,
            ...style
        },
        className: className,
        onClick: onClick,
        ...canvasProps
    }));
});
// TODO support concurrent mode
/**
 * This React Component is used to render images in the content script to bypass the CSP restriction.
 */ 
function resolveMode(props, hasCSPBan) {
    const { src , component ='img' , origin ='auto'  } = props;
    if (!hasCSPBan) return [
        'current',
        component
    ];
    if (typeof src !== 'string') return [
        'current',
        'canvas'
    ];
    if (origin === 'extension') return [
        'extension',
        'canvas'
    ];
    if (origin === 'auto') {
        if (isSameOrigin(src)) return [
            'current',
            component
        ];
        return [
            'extension',
            'canvas'
        ];
    }
    return [
        origin,
        component
    ];
}
function isSameOrigin(x) {
    if (typeof x !== 'string') return false;
    try {
        if (new URL(location.href).origin === new URL(x).origin) return true;
    } catch  {
    }
    return false;
}
async function toImage(arr) {
    try {
        return await createImageBitmap(arr);
    } catch  {
        // Safari route
        return new Promise((resolve, reject)=>{
            const img = document.createElement('img');
            img.addEventListener('load', ()=>{
                resolve(img);
                URL.revokeObjectURL(img.src);
            });
            img.addEventListener('error', ({ error  })=>{
                reject(error);
                URL.revokeObjectURL(img.src);
            });
            // TODO: this might be blocked by CSP
            img.src = URL.createObjectURL(arr);
        });
    }
}


/***/ }),

/***/ 87099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22681);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22209);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63371);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    icon: {
        borderRadius: '50%',
        backgroundColor: '#F7F9FA'
    }
});
const icons = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .tds.Ethereum]: new URL(/* asset import */ __webpack_require__(9227), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .tds.Binance]: new URL(/* asset import */ __webpack_require__(3391), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .tds.Polygon]: new URL(/* asset import */ __webpack_require__(44319), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: new URL(/* asset import */ __webpack_require__(95781), __webpack_require__.b).toString()
};
function NetworkIcon(props) {
    const { size =48 , networkType  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__.useStylesExtends)(useStyles(), props);
    if (!networkType) return null;
    return icons[networkType] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
        height: size,
        width: size,
        src: icons[networkType],
        className: classes.icon
    }) : null;
}


/***/ }),

/***/ 33858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ EnterDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8236);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76814);
/* harmony import */ var _hook_useEnterDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8328);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77287);





const EnterDashboard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const onEnter = (0,_hook_useEnterDashboard__WEBPACK_IMPORTED_MODULE_2__/* .useEnterDashboard */ .i)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        style: {
            padding: '12px 16px',
            cursor: 'pointer'
        },
        onClick: onEnter,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            style: {
                fontSize: 12,
                lineHeight: '16px'
            },
            color: "primary",
            children: t('browser_action_enter_dashboard')
        })
    }));
});


/***/ }),

/***/ 31190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ NetworkSelector)
});

// UNUSED EXPORTS: NetworkSelectorUI

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(54587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var settings = __webpack_require__(6621);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../icons/general/ArrowDownRound.tsx
var ArrowDownRound = __webpack_require__(40666);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210630045432-e05621c/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(24982);
// EXTERNAL MODULE: ./src/components/shared/NetworkIcon.tsx
var NetworkIcon = __webpack_require__(87099);
;// CONCATENATED MODULE: ./src/extension/popups/components/ChainIcon/index.tsx





const useStyles = (0,src/* makeStyles */.ZL)()({
    point: {
        width: 12.5,
        height: 12.5,
        borderRadius: 6.25,
        margin: 3.75
    }
});
const ChainIcon = /*#__PURE__*/ (0,react.memo)(({ chainId  })=>{
    const { classes  } = useStyles();
    const chainDetail = (0,web3_shared_src/* getChainDetailed */.$Gt)(chainId);
    return (chainDetail === null || chainDetail === void 0 ? void 0 : chainDetail.network) === 'mainnet' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkIcon/* NetworkIcon */.d, {
        size: 20,
        networkType: (0,web3_shared_src/* getNetworkTypeFromChainId */._Te)(chainId)
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            backgroundColor: (0,web3_shared_src/* resolveChainColor */._EJ)(chainId)
        },
        className: classes.point
    });
});

;// CONCATENATED MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx











const networks = [
    web3_shared_src/* NetworkType.Ethereum */.tds.Ethereum,
    utils/* Flags.bsc_enabled */.vU.bsc_enabled ? web3_shared_src/* NetworkType.Binance */.tds.Binance : undefined,
    utils/* Flags.polygon_enabled */.vU.polygon_enabled ? web3_shared_src/* NetworkType.Polygon */.tds.Polygon : undefined, 
].filter(Boolean);
const NetworkSelector_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            minWidth: 140,
            backgroundColor: theme.palette.primary.main,
            padding: '4px 12px 4px 4px',
            minHeight: 28,
            borderRadius: 18,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        iconWrapper: {
            width: 20,
            height: 20,
            borderRadius: 20,
            marginRight: 10
        },
        title: {
            color: '#ffffff',
            fontSize: 12,
            lineHeight: '16px'
        },
        arrow: {
            stroke: '#ffffff',
            fontSize: 16
        },
        networkName: {
            marginLeft: 10
        }
    })
);
const NetworkSelector = /*#__PURE__*/ (0,react.memo)(()=>{
    const currentChainId = (0,shared_src.useValueRef)(settings/* currentChainIdSettings */.wU);
    const onChainChange = (0,react.useCallback)((chainId)=>{
        settings/* currentChainIdSettings.value */.wU.value = chainId;
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelectorUI, {
        currentChainId: currentChainId,
        onChainChange: onChainChange
    }));
});
const NetworkSelectorUI = /*#__PURE__*/ (0,react.memo)(({ currentChainId , onChainChange  })=>{
    const { classes  } = NetworkSelector_useStyles();
    const [menu, openMenu] = (0,shared_src.useMenu)(...utils/* Flags.support_eth_network_switch */.vU.support_eth_network_switch ? (0,esm/* getEnumAsArray */.Yl)(web3_shared_src/* ChainId */.a_e).map(({ value: chainId  })=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainIcon, {
                    chainId: chainId
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.networkName,
                    children: (0,web3_shared_src/* getChainName */.qzE)(chainId)
                })
            ]
        }, chainId));
    }) : networks.map((network)=>{
        const chainId = (0,web3_shared_src/* getChainIdFromNetworkType */.EP9)(network);
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainIcon, {
                    chainId: chainId
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    children: (0,web3_shared_src/* resolveNetworkName */.nWu)(network)
                })
            ]
        }, network));
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classes.iconWrapper,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainIcon, {
                                    chainId: currentChainId
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: (0,web3_shared_src/* getChainShortName */.F3R)(currentChainId)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownRound/* ArrowDownRound */.l, {
                        className: classes.arrow
                    })
                ]
            }),
            menu
        ]
    }));
});


/***/ }),

/***/ 70726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WalletHeader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(12162);
;// CONCATENATED MODULE: ../icons/general/Setting.tsx


const SettingIcon = (0,utils/* createIcon */.I)('SettingIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M14.55 11.25a1.238 1.238 0 00.247 1.365l.045.045a1.5 1.5 0 01-1.06 2.562 1.5 1.5 0 01-1.062-.44l-.045-.044a1.238 1.238 0 00-1.365-.248 1.238 1.238 0 00-.75 1.133v.127a1.5 1.5 0 11-3 0v-.068a1.238 1.238 0 00-.81-1.132 1.238 1.238 0 00-1.365.247l-.045.045a1.5 1.5 0 11-2.123-2.122l.046-.045a1.238 1.238 0 00.247-1.365 1.238 1.238 0 00-1.132-.75H2.25a1.5 1.5 0 110-3h.067a1.237 1.237 0 001.133-.81 1.237 1.237 0 00-.248-1.365l-.044-.045A1.5 1.5 0 115.28 3.217l.045.046a1.237 1.237 0 001.365.247h.06a1.237 1.237 0 00.75-1.132V2.25a1.5 1.5 0 013 0v.067a1.238 1.238 0 00.75 1.133 1.237 1.237 0 001.365-.248l.045-.044a1.5 1.5 0 112.123 2.122l-.045.045a1.237 1.237 0 00-.248 1.365v.06a1.237 1.237 0 001.133.75h.127a1.5 1.5 0 010 3h-.068a1.238 1.238 0 00-1.132.75v0z",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 18 18');

// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx + 1 modules
var NetworkSelector = __webpack_require__(31190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1868);
// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(9950);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/WalletHeader/index.tsx







const useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    setting: {
        stroke: '#1C68F3',
        fill: 'none',
        cursor: 'pointer',
        fontSize: 18
    }
});
const WalletHeader = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingIcon, {
                    className: classes.setting,
                    onClick: ()=>history.push(popups/* PopupRoutes.SelectWallet */.mZ.SelectWallet)
                })
            ]
        })
    }));
});


/***/ }),

/***/ 45541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ WalletInfo)
});

// UNUSED EXPORTS: WalletInfoUI

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/esm/MoreHoriz.js
var MoreHoriz = __webpack_require__(65010);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(12162);
;// CONCATENATED MODULE: ../icons/general/Edit.tsx


const EditIcon = (0,utils/* createIcon */.I)('EditIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M10 17.596h7.5M13.75 3.846a1.768 1.768 0 012.5 2.5L5.833 16.763l-3.333.833.833-3.333L13.75 3.846z",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(95772);
// EXTERNAL MODULE: ../icons/general/Copy.tsx
var Copy = __webpack_require__(65665);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1868);
// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(9950);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/WalletInfo/index.tsx











const useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        padding: '12px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EFF5FF'
    },
    left: {
        display: 'flex',
        alignItems: 'center'
    },
    name: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500
    },
    address: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center'
    },
    edit: {
        fontSize: 16,
        stroke: '#1C68F3',
        fill: 'none',
        marginLeft: 10,
        cursor: 'pointer'
    },
    copy: {
        fontSize: 12,
        stroke: '#1C68F3',
        marginLeft: 4,
        cursor: 'pointer'
    },
    walletBackground: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        width: 24,
        height: 24,
        marginRight: 4
    }
});
const WalletInfo = /*#__PURE__*/ (0,react.memo)(()=>{
    const wallet = (0,web3_shared_src/* useWallet */.Osb)();
    const history = (0,react_router/* useHistory */.k6)();
    if (!wallet) return null;
    var _name;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletInfoUI, {
        name: (_name = wallet.name) !== null && _name !== void 0 ? _name : '',
        address: wallet.address,
        onEditClick: ()=>history.push(popups/* PopupRoutes.WalletRename */.mZ.WalletRename)
        ,
        onSettingClick: ()=>history.push(popups/* PopupRoutes.WalletSettings */.mZ.WalletSettings)
    }));
});
const WalletInfoUI = /*#__PURE__*/ (0,react.memo)(({ name , address , onSettingClick , onEditClick  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.left,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.walletBackground,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            name && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.name,
                                children: [
                                    name,
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EditIcon, {
                                        onClick: onEditClick,
                                        className: classes.edit
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.address,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedAddress, {
                                        address: address,
                                        size: 12
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Copy/* CopyIcon */.T, {
                                        className: classes.copy
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreHoriz/* default */.Z, {
                color: "primary",
                style: {
                    cursor: 'pointer'
                },
                onClick: onSettingClick
            })
        ]
    }));
});


/***/ }),

/***/ 40871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useUnconfirmedRequest)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49269);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76898);



const useUnconfirmedRequest = ()=>{
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        const payload = await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.topUnconfirmedRequest */ .V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = await _service__WEBPACK_IMPORTED_MODULE_1__/* .default.Ethereum.getJsonRpcComputed */ .ZP.Ethereum.getJsonRpcComputed(payload);
        return {
            payload,
            computedPayload
        };
    });
};


/***/ }),

/***/ 41153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ WalletContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44737);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22209);
/* harmony import */ var _plugins_Wallet_hooks_useRecentTransactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16641);




function useWalletContext() {
    const erc20Tokens = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useTrustedERC20Tokens */ .du_)();
    const { value: assets , error , loading  } = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useAssets */ .LiV)(erc20Tokens);
    const { value: transactions  } = (0,_plugins_Wallet_hooks_useRecentTransactions__WEBPACK_IMPORTED_MODULE_2__/* .useRecentTransactions */ .S)();
    const [currentToken, setCurrentToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    return {
        currentToken,
        setCurrentToken,
        assets,
        transactions
    };
}
const WalletContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_3__/* .createContainer */ .f)(useWalletContext);


/***/ }),

/***/ 50301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(78103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(5484);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(35234);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(95772);
// EXTERNAL MODULE: ../icons/general/ImportWallet.tsx
var ImportWallet = __webpack_require__(45305);
// EXTERNAL MODULE: ./src/extension/popups/components/EnterDashboard/index.tsx
var EnterDashboard = __webpack_require__(33858);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx + 1 modules
var NetworkSelector = __webpack_require__(31190);
// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/StartUp/index.tsx










const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        alert: {
            padding: '0px 10px'
        },
        alertTitle: {
            fontWeight: 600,
            fontSize: 12,
            color: theme.palette.primary.main,
            marginBottom: 3
        },
        alertContent: {
            fontSize: 12,
            lineHeight: '16px',
            color: theme.palette.primary.main
        },
        header: {
            padding: 10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 1,
            backgroundColor: '#ffffff'
        },
        title: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 500
        },
        content: {
            flex: 1,
            backgroundColor: '#f7f9fa'
        },
        item: {
            padding: '8px 16px',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            marginBottom: 1,
            cursor: 'pointer'
        },
        itemTitle: {
            fontSize: 16,
            lineHeight: 1.5,
            color: theme.palette.primary.main,
            fontWeight: 600,
            marginLeft: 15
        }
    })
);
const WalletStartUp = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const onEnterCreateWallet = (0,react.useCallback)(()=>{
        browser.tabs.create({
            active: true,
            url: browser.runtime.getURL('/next.html#/create-mask-wallet')
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Alert/* default */.Z, {
                icon: false,
                severity: "info",
                className: classes.alert,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AlertTitle/* default */.Z, {
                        className: classes.alertTitle,
                        children: t('popups_welcome')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.alertContent,
                        children: t('popups_wallet_start_up_tip')
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                children: t('wallet_new')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.item,
                        onClick: onEnterCreateWallet,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                                sx: {
                                    fontSize: 20
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.itemTitle,
                                children: t('wallet_new')
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
                        to: popups/* PopupRoutes.ImportWallet */.mZ.ImportWallet,
                        style: {
                            textDecoration: 'none'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.item,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ImportWallet/* ImportWalletIcon */.B, {
                                    sx: {
                                        fontSize: 20
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.itemTitle,
                                    children: t('plugin_wallet_import_wallet')
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EnterDashboard/* EnterDashboard */.P, {
            })
        ]
    }));
});

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/styled.js
var styled = __webpack_require__(88448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(72052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tabs/tabsClasses.js
var tabsClasses = __webpack_require__(32304);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(41362);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/tabClasses.js
var tabClasses = __webpack_require__(74267);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/WalletHeader/index.tsx + 1 modules
var WalletHeader = __webpack_require__(70726);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/WalletInfo/index.tsx + 1 modules
var WalletInfo = __webpack_require__(45541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(72717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(62758);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(55432);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(30581);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(39052);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(12162);
;// CONCATENATED MODULE: ../icons/general/ArrowRight.tsx


const ArrowRightIcon = (0,icons_utils/* createIcon */.I)('ArrowRightIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M7.708 4.792l5.209 5.416-5.209 5.417",
        strokeMiterlimit: "10"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(41153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1868);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/AssetsList/index.tsx










const AssetsList_useStyles = (0,src/* makeStyles */.ZL)()({
    list: {
        backgroundColor: '#ffffff',
        padding: 0
    },
    item: {
        padding: 12,
        borderBottom: '1px solid #F7F9FA',
        cursor: 'pointer'
    },
    tokenIcon: {
        width: 20,
        height: 20
    },
    arrow: {
        stroke: '#15181B',
        fill: 'none',
        fontSize: 20
    },
    text: {
        margin: '0 0 0 15px'
    },
    symbol: {
        color: '#1C68F3'
    }
});
const AssetsList = /*#__PURE__*/ (0,react.memo)(()=>{
    const history = (0,react_router/* useHistory */.k6)();
    const { assets , setCurrentToken  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const onItemClick = (0,react.useCallback)((asset)=>{
        setCurrentToken(asset);
        history.push(popups/* PopupRoutes.TokenDetail */.mZ.TokenDetail);
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsListUI, {
        dataSource: assets,
        onItemClick: onItemClick
    }));
});
const AssetsListUI = /*#__PURE__*/ (0,react.memo)(({ dataSource , onItemClick  })=>{
    const { classes  } = AssetsList_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        dense: true,
        className: classes.list,
        children: dataSource.map((asset, index)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                className: classes.item,
                onClick: ()=>onItemClick(asset)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                        classes: {
                            icon: classes.tokenIcon
                        },
                        address: asset.token.address,
                        name: asset.token.name,
                        chainId: asset.token.chainId,
                        logoURI: asset.token.logoURI,
                        AvatarProps: {
                            sx: {
                                width: 20,
                                height: 20
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        className: classes.text,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                            value: asset.balance,
                            decimals: asset.token.decimals,
                            symbol: asset.token.symbol,
                            classes: {
                                symbol: classes.symbol
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon, {
                        className: classes.arrow,
                        style: {
                            fill: 'none'
                        }
                    })
                ]
            }, index));
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(46440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(81021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/check.js
var check = __webpack_require__(97393);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/x-circle.js
var x_circle = __webpack_require__(11324);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/index.tsx









const ActivityList_useStyles = (0,src/* makeStyles */.ZL)()({
    list: {
        backgroundColor: '#ffffff',
        padding: 0
    },
    item: {
        padding: 12,
        borderBottom: '1px solid #F7F9FA',
        cursor: 'pointer'
    },
    arrow: {
        stroke: '#15181B',
        fill: 'none',
        fontSize: 20
    },
    icon: {
        width: 20,
        height: 20
    }
});
const ActivityList = /*#__PURE__*/ (0,react.memo)(()=>{
    const { transactions  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityListUI, {
        dataSource: transactions !== null && transactions !== void 0 ? transactions : [],
        chainId: chainId
    }));
});
const ActivityListUI = /*#__PURE__*/ (0,react.memo)(({ dataSource , chainId  })=>{
    const { classes  } = ActivityList_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        dense: true,
        className: classes.list,
        children: dataSource.map((transaction, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                href: (0,web3_shared_src/* resolveTransactionLinkOnExplorer */.z4)(chainId, transaction.hash),
                target: "_blank",
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                    className: classes.item,
                    children: [
                        transaction.status === web3_shared_src/* TransactionStatusType.NOT_DEPEND */.g8n.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                            size: 20,
                            color: "primary"
                        }) : transaction.status === web3_shared_src/* TransactionStatusType.SUCCEED */.g8n.SUCCEED ? /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* default */.Z, {
                            size: 20,
                            color: "#77E0B5"
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(x_circle/* default */.Z, {
                            size: 20,
                            color: "#FF5555"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                            style: {
                                marginLeft: 15
                            },
                            children: (0,web3_shared_src/* formatKeccakHash */.mHs)(transaction.hash, 6)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRightIcon, {
                            className: classes.arrow,
                            style: {
                                fill: 'none'
                            }
                        })
                    ]
                }, index)
            })
        )
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/WalletAssets/index.tsx













const WalletAssets_useStyles = (0,src/* makeStyles */.ZL)()({
    content: {
        flex: 1,
        backgroundColor: '#F7F9FA',
        display: 'flex',
        flexDirection: 'column'
    },
    tabPanel: {
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    addToken: {
        padding: 16
    },
    button: {
        backgroundColor: '#ffffff',
        padding: '9px 0',
        borderRadius: 20
    }
});
const StyledTabs = (0,styled/* default */.ZP)(Tabs/* default */.Z)`
    &.${tabsClasses/* default.root */.Z.root} {
        min-height: unset;
        background-color: #f7f9fa;
        padding-top: 6px;
    }
    &.${tabsClasses/* default.indicator */.Z.indicator} {
        display: none;
    }
    &.${tabsClasses/* default.flexContainer */.Z.flexContainer} {
        justify-content: center;
    }
`;
const StyledTab = (0,styled/* default */.ZP)(Tab/* default */.Z)`
    &.${tabClasses/* default.root */.Z.root} {
        font-size: 12px;
        line-height: 16px;
        min-height: unset;
        min-width: 145px;
        padding: 7px 0;
        background-color: #f7f9fa;
        border-radius: 4px 4px 0px 0px;
        color: #15181b;
    }
    &.${tabClasses/* default.selected */.Z.selected} {
        background-color: white;
        font-weight: 500;
    }
`;
var WalletTabs;
(function(WalletTabs1) {
    WalletTabs1["Assets"] = "Assets";
    WalletTabs1["Activity"] = "Activity";
})(WalletTabs || (WalletTabs = {
}));
const WalletAssets = /*#__PURE__*/ (0,react.memo)(()=>{
    const history = (0,react_router/* useHistory */.k6)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssetsUI, {
        onAddTokenClick: ()=>history.push(popups/* PopupRoutes.AddToken */.mZ.AddToken)
    }));
});
const WalletAssetsUI = /*#__PURE__*/ (0,react.memo)(({ onAddTokenClick  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = WalletAssets_useStyles();
    const [currentTab, setCurrentTab] = (0,react.useState)(WalletTabs.Assets);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeader/* WalletHeader */.Z, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletInfo/* WalletInfo */.M, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.content,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                    value: currentTab,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(StyledTabs, {
                            value: currentTab,
                            onChange: (event, tab)=>setCurrentTab(tab)
                            ,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledTab, {
                                    label: t('popups_wallet_tab_assets'),
                                    value: WalletTabs.Assets
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledTab, {
                                    label: t('popups_wallet_tab_activity'),
                                    value: WalletTabs.Activity
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                            value: WalletTabs.Assets,
                            className: classes.tabPanel,
                            style: {
                                flex: currentTab === WalletTabs.Assets ? '1' : '0'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsList, {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    style: {
                                        padding: 16
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                        className: classes.button,
                                        fullWidth: true,
                                        onClick: onAddTokenClick,
                                        children: t('add_token')
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                            value: WalletTabs.Activity,
                            className: classes.tabPanel,
                            style: {
                                flex: currentTab === WalletTabs.Activity ? '1' : '0'
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityList, {
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EnterDashboard/* EnterDashboard */.P, {
            })
        ]
    }));
});

// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useUnConfirmedRequest.ts
var useUnConfirmedRequest = __webpack_require__(40871);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/index.tsx









const Wallet_ImportWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(5421)]).then(__webpack_require__.bind(__webpack_require__, 51256))
);
const AddDeriveWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(8990)]).then(__webpack_require__.bind(__webpack_require__, 28990))
);
const WalletSettings = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7743).then(__webpack_require__.bind(__webpack_require__, 47743))
);
const WalletRename = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9946).then(__webpack_require__.bind(__webpack_require__, 79946))
);
const DeleteWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7776).then(__webpack_require__.bind(__webpack_require__, 47776))
);
const CreateWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5296).then(__webpack_require__.bind(__webpack_require__, 35296))
);
const SelectWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 657).then(__webpack_require__.bind(__webpack_require__, 70657))
);
const BackupWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4359).then(__webpack_require__.bind(__webpack_require__, 94359))
);
const AddToken = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7273).then(__webpack_require__.bind(__webpack_require__, 87273))
);
const TokenDetail = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(405), __webpack_require__.e(40)]).then(__webpack_require__.bind(__webpack_require__, 40040))
);
const SignRequest = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8284).then(__webpack_require__.bind(__webpack_require__, 68284))
);
const GasSetting = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2598), __webpack_require__.e(6230), __webpack_require__.e(7275)]).then(__webpack_require__.bind(__webpack_require__, 67275))
);
function Wallet() {
    const wallet = (0,web3_shared_src/* useWallet */.Osb)();
    const wallets = (0,web3_shared_src/* useWallets */.rBi)();
    const history = (0,react_router/* useHistory */.k6)();
    const { value  } = (0,useUnConfirmedRequest/* useUnconfirmedRequest */.d)();
    (0,react.useEffect)(()=>{
        if (value === null || value === void 0 ? void 0 : value.computedPayload) {
            switch(value.computedPayload.type){
                case web3_shared_src/* EthereumRpcType.SIGN */.Wvq.SIGN:
                    history.push(popups/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest);
                    break;
                default:
                    break;
            }
        }
    }, [
        value
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(useWalletContext/* WalletContext.Provider */.z.Provider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.Wallet */.mZ.Wallet,
                    exact: true,
                    children: wallets.length === 0 || !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStartUp, {
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssets, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.ImportWallet */.mZ.ImportWallet,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet_ImportWallet, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.AddDeriveWallet */.mZ.AddDeriveWallet,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddDeriveWallet, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.WalletSettings */.mZ.WalletSettings,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettings, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.WalletRename */.mZ.WalletRename,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRename, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.DeleteWallet */.mZ.DeleteWallet,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteWallet, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.CreateWallet */.mZ.CreateWallet,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWallet, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.SelectWallet */.mZ.SelectWallet,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectWallet, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.BackupWallet */.mZ.BackupWallet,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupWallet, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.AddToken */.mZ.AddToken,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddToken, {
                    }),
                    exact: true
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignRequest, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.GasSetting */.mZ.GasSetting,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                    path: popups/* PopupRoutes.TokenDetail */.mZ.TokenDetail,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenDetail, {
                    }),
                    exact: true
                })
            ]
        })
    }));
};


/***/ }),

/***/ 16641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89008);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17952);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22209);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49269);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32326);





const UPDATE_TRANSACTION_LATENCY = 30 /* seconds */  * 1000 /* milliseconds  */ ;
async function getTransactions(account, status) {
    if (!account) return [];
    const transactions = await _messages__WEBPACK_IMPORTED_MODULE_2__/* .WalletRPC.getRecentTransactionsFromChain */ .V.getRecentTransactionsFromChain(account);
    return transactions.filter((x)=>typeof status !== 'undefined' ? x.status === status : true
    );
}
function useRecentTransactions(status) {
    const account = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useAccount */ .mAM)();
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xxU)();
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    // update transactions status intervally
    const [delay, setDelay] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(()=>setFlag((x)=>!x
        )
    , delay);
    // update transactions by message center
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(()=>setFlag((x)=>!x
            )
        )
    , [
        setFlag
    ]);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(async ()=>{
        try {
            setDelay(null);
            return getTransactions(account, status);
        } catch (error) {
            throw error;
        } finally{
            setDelay(UPDATE_TRANSACTION_LATENCY);
        }
    }, [
        account,
        status,
        flag,
        chainId
    ]);
}


/***/ }),

/***/ 95781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62539d64c6df15dea819.png";

/***/ }),

/***/ 3391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "052863bc15f84754566f.png";

/***/ }),

/***/ 9227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "381446c71c051917c70c.png";

/***/ }),

/***/ 44319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e806a6ce9e82d18c640d.png";

/***/ })

}]);