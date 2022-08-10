(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8519],{

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

/***/ 75611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ MaskNotSquareIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


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

/***/ 67512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ ArrowDropIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const ArrowDropIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowDropIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M9.52861 12.8619L5.30475 8.63807C4.88478 8.21809 5.18222 7.5 5.77616 7.5H14.2239C14.8178 7.5 15.1153 8.21809 14.6953 8.63807L10.4714 12.8619C10.2111 13.1223 9.78896 13.1223 9.52861 12.8619Z",
        fill: "#767F8D"
    })
}), '0 0 20 20');


/***/ }),

/***/ 87169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MasksIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const MasksIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('MasksIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
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
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
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
                    id: "paint0_linear",
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
                    id: "filter0_b",
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

/***/ 22825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ CopyIconButton)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tooltip/Tooltip.js + 1 modules
var Tooltip = __webpack_require__(13231);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/PopupCopy.tsx


const PopupCopyIcon = (0,icons_utils/* createIcon */.I)('PopupCopyIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.802 9.272c-.674 0-1.26-.2-1.683-.595-.425-.397-.644-.954-.644-1.588V3.53c0-.63.218-1.185.64-1.582.418-.394 1-.596 1.669-.6H9.073c.674 0 1.261.2 1.683.594.425.397.644.955.644 1.588v3.56c0 .63-.217 1.184-.639 1.58-.419.395-1.001.597-1.67.6H9.09l-3.287.002v-.4.4Zm0-.8c-.517 0-.893-.152-1.137-.38-.24-.225-.39-.559-.39-1.003V3.53c0-.441.148-.774.387-.999.242-.227.614-.38 1.125-.383h3.286c.517 0 .893.151 1.137.379.24.225.39.56.39 1.003v3.56c0 .44-.148.773-.387.998-.241.227-.614.38-1.125.383l-3.286.001Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.058 10.83c-.674 0-1.26-.2-1.683-.595-.425-.397-.644-.955-.644-1.588v-3.56c0-.812.363-1.489 1.026-1.866a.4.4 0 0 1 .395.696c-.385.219-.621.612-.621 1.17v3.56c0 .444.15.778.39 1.003.244.228.62.38 1.137.38l3.286-.002c.572-.003.971-.193 1.209-.47a.4.4 0 1 1 .607.521c-.421.49-1.063.745-1.813.75H4.058v-.4.4Z"
        })
    ]
}), '0 0 12 12');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(39969);
;// CONCATENATED MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx






const CopyIconButton = /*#__PURE__*/ (0,react.memo)(({ text , ...props })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const [open, setOpen] = (0,react.useState)(false);
    const onCopy = (0,react.useCallback)((e)=>{
        e.preventDefault();
        e.stopPropagation();
        copyToClipboard(text);
        setOpen(true);
        // Close tooltip after five seconds of copying
        setTimeout(()=>{
            setOpen(false);
        }, 5000);
    }, [
        text,
        copyToClipboard
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Tooltip/* default */.Z, {
        title: t('copied'),
        open: open,
        onMouseLeave: ()=>setOpen(false)
        ,
        disableFocusListener: true,
        disableTouchListener: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupCopyIcon, {
            onClick: onCopy,
            className: props.className
        })
    });
});


/***/ }),

/***/ 21978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ LoadingPlaceholder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78258);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21784);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93455);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31939);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            flex: 1,
            gap: 12
        }
    })
);
const LoadingPlaceholder = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .LoadingIcon */ .H, {
                style: {
                    color: props.iconColor ?? '#1C68F3'
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                variant: "caption",
                color: props.titleColor ?? '#A6A9B6',
                children: props.title ?? t('loading')
            })
        ]
    });
});


/***/ }),

/***/ 57940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n": () => (/* binding */ NormalHeader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/PopupClose.tsx


const PopupCloseIcon = (0,utils/* createIcon */.I)('PopupClose', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "m6 6 12 12M6 18 18 6",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/SquareBack.tsx


const SquareBack = (0,utils/* createIcon */.I)('SquareBack', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "m14.4 6-6 6 6 6",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/brands/Mask.tsx
var Mask = __webpack_require__(75611);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ./src/extension/popups/context.ts
var context = __webpack_require__(75068);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
;// CONCATENATED MODULE: ./src/extension/popups/components/NormalHeader/index.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        container: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(98, 126, 234, 0.2) 0%, rgba(59, 153, 252, 0.2) 100%)',
            padding: 17,
            lineHeight: 0,
            display: 'flex',
            alignItems: 'center',
            position: 'relative'
        },
        back: {
            fill: 'none',
            position: 'absolute',
            left: 16,
            top: 16,
            fontSize: 24,
            cursor: 'pointer'
        },
        close: {
            position: 'absolute',
            left: 16,
            top: 16,
            fontSize: 24,
            cursor: 'pointer'
        },
        title: {
            fontSize: 14,
            lineHeight: '24px',
            color: '#15181B',
            fontWeight: 700,
            minHeight: 24
        },
        logo: {
            width: 96,
            height: 30
        }
    })
);
const NormalHeader = /*#__PURE__*/ (0,react.memo)(({ onlyTitle  })=>{
    const { classes  } = useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const location = (0,react_router/* useLocation */.TH)();
    const { title  } = (0,react.useContext)(context/* PageTitleContext */.I);
    const goBack = new URLSearchParams(location.search).get('goBack');
    const showTitle = history.length !== 1 && title || !!goBack;
    const showClose = location.pathname === src/* PopupRoutes.ConnectWallet */.mZ.ConnectWallet && !goBack;
    if (onlyTitle) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        style: {
            justifyContent: 'center'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.title,
            children: title
        })
    });
    if (showClose) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.container,
            style: {
                justifyContent: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupCloseIcon, {
                    className: classes.close,
                    onClick: ()=>service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: title
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        style: {
            justifyContent: showTitle ? 'center' : 'flex-start'
        },
        children: showTitle ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SquareBack, {
                    className: classes.back,
                    onClick: ()=>navigate(-1)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    children: title
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Mask/* MaskNotSquareIcon */.h, {
            className: classes.logo
        })
    });
});


/***/ }),

/***/ 78066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ PersonaContext)
/* harmony export */ });
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44737);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80226);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44451);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5903);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58500);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70981);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78778);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29730);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58757);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19769);










function usePersonaContext() {
    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const [selectedPersona, setSelectedPersona] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    const currentIdentifier = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier */ .cn);
    const { value: personas , retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.queryOwnedPersonaInformation */ .ZP.Identity.queryOwnedPersonaInformation(false)
    , [
        _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier */ .cn
    ]);
    const { value: avatar  } = (0,react_use__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z)(async ()=>{
        return _service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.getPersonaAvatar */ .ZP.Identity.getPersonaAvatar(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier.from */ .ob.from(currentIdentifier).unwrap());
    }, [
        currentIdentifier
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        return _utils__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages.events.ownPersonaChanged.on */ .ql.events.ownPersonaChanged.on(retry);
    }, [
        retry
    ]);
    const currentPersona = personas?.find((x)=>x.identifier === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier.from */ .ob.from(currentIdentifier).unwrapOr((0,lodash_unified__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(personas)?.identifier)
    );
    const { value: proofs , retry: refreshProofs , loading: fetchProofsLoading ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(async ()=>{
        try {
            if (!currentPersona?.identifier.publicKeyAsHex) return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
            const binding = await _masknet_web3_providers__WEBPACK_IMPORTED_MODULE_6__/* .NextIDProof.queryExistedBindingByPersona */ .q7.queryExistedBindingByPersona(currentPersona.identifier.publicKeyAsHex);
            return binding?.proofs ?? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
        } catch  {
            return _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EMPTY_LIST */ .rP;
        }
    }, [
        currentPersona
    ]);
    return {
        selectedAccount,
        setSelectedAccount,
        avatar,
        personas,
        currentPersona,
        selectedPersona,
        setSelectedPersona,
        proofs,
        refreshProofs,
        fetchProofsLoading
    };
}
const PersonaContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_10__/* .createContainer */ .f)(usePersonaContext);


/***/ }),

/***/ 17184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Personas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ./src/extension/popups/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(21978);
// EXTERNAL MODULE: ./src/extension/popups/pages/Personas/hooks/usePersonaContext.ts
var usePersonaContext = __webpack_require__(78066);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx + 1 modules
var CopyIconButton = __webpack_require__(22825);
// EXTERNAL MODULE: ../icons/brands/Mask.tsx
var Mask = __webpack_require__(75611);
// EXTERNAL MODULE: ../icons/general/Masks.tsx
var Masks = __webpack_require__(87169);
// EXTERNAL MODULE: ../icons/general/ArrowDrop.tsx
var ArrowDrop = __webpack_require__(67512);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/components/PersonaHeader/UI.tsx







const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        container: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(98, 126, 234, 0.2) 0%, rgba(59, 153, 252, 0.2) 100%)',
            padding: '11px 16px',
            lineHeight: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        logo: {
            width: 96,
            height: 30
        },
        action: {
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 99,
            padding: '5px 8px 5px 4px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        avatar: {
            marginRight: 4,
            width: 30,
            height: 30
        },
        nickname: {
            color: '#07101B',
            fontSize: 14,
            lineHeight: '18px',
            fontWeight: 700
        },
        identifier: {
            fontSize: 10,
            color: '#767F8D',
            lineHeight: 1,
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            fontSize: 12,
            fill: '#767F8D',
            cursor: 'pointer',
            marginLeft: 4
        },
        arrow: {
            fontSize: 20,
            transition: 'all 300ms'
        }
    })
);
const PersonaHeaderUI = /*#__PURE__*/ (0,react.memo)(({ avatar , onActionClick , fingerprint , nickname , isSelectPersonaPage  })=>{
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Mask/* MaskNotSquareIcon */.h, {
                className: classes.logo
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.action,
                onClick: onActionClick,
                children: [
                    avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                        src: avatar,
                        className: classes.avatar
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {
                        className: classes.avatar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.nickname,
                                children: (0,src/* formatPersonaName */.rY)(nickname)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.identifier,
                                children: [
                                    (0,src/* formatPersonaFingerprint */.Nb)(fingerprint ?? '', 4),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton/* CopyIconButton */.m, {
                                        text: fingerprint,
                                        className: classes.icon
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDrop/* ArrowDropIcon */.r, {
                        className: classes.arrow,
                        style: {
                            transform: isSelectPersonaPage ? 'rotate(-180deg)' : undefined
                        }
                    })
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./src/extension/popups/components/NormalHeader/index.tsx + 2 modules
var NormalHeader = __webpack_require__(57940);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/components/PersonaHeader/index.tsx







const PersonaHeader = /*#__PURE__*/ (0,react.memo)(()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const matchSelectPersona = (0,react_router/* useMatch */.bS)(src/* PopupRoutes.SelectPersona */.mZ.SelectPersona);
    const matchPersona = (0,react_router/* useMatch */.bS)(src/* PopupRoutes.Personas */.mZ.Personas);
    const { currentPersona , avatar  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return (matchPersona || matchSelectPersona) && currentPersona ? /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaHeaderUI, {
        onActionClick: ()=>navigate(matchSelectPersona ? src/* PopupRoutes.Personas */.mZ.Personas : src/* PopupRoutes.SelectPersona */.mZ.SelectPersona)
        ,
        fingerprint: currentPersona.identifier.rawPublicKey,
        isSelectPersonaPage: !!matchSelectPersona,
        avatar: avatar,
        nickname: currentPersona.nickname
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {});
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Personas/index.tsx







const Home = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(9759), __webpack_require__.e(859)]).then(__webpack_require__.bind(__webpack_require__, 50859))
);
const Logout = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(9384)]).then(__webpack_require__.bind(__webpack_require__, 89384))
);
const PersonaRename = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(7682)]).then(__webpack_require__.bind(__webpack_require__, 68777))
);
const PersonaSignRequest = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(5544)]).then(__webpack_require__.bind(__webpack_require__, 65544))
);
const VerifyWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(405), __webpack_require__.e(6240)]).then(__webpack_require__.bind(__webpack_require__, 53181))
);
const SelectPersona = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(9759), __webpack_require__.e(405), __webpack_require__.e(121)]).then(__webpack_require__.bind(__webpack_require__, 55486))
);
const Accounts = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(8298)]).then(__webpack_require__.bind(__webpack_require__, 18298))
);
const AccountDetail = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(3100)]).then(__webpack_require__.bind(__webpack_require__, 3100))
);
const ConnectedWallets = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(2359)]).then(__webpack_require__.bind(__webpack_require__, 62359))
);
const r = (0,src/* relativeRouteOf */.zD)(src/* PopupRoutes.Personas */.mZ.Personas);
const Persona = /*#__PURE__*/ (0,react.memo)(()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(usePersonaContext/* PersonaContext.Provider */.m.Provider, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaHeader, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.Logout */.mZ.Logout),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Logout, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.PersonaRename */.mZ.PersonaRename),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRename, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.PersonaSignRequest */.mZ.PersonaSignRequest),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSignRequest, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.SelectPersona */.mZ.SelectPersona),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectPersona, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.SocialAccounts */.mZ.SocialAccounts),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Accounts, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.AccountDetail */.mZ.AccountDetail),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountDetail, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.ConnectedWallets */.mZ.ConnectedWallets),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedWallets, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.VerifyWallet */.mZ.VerifyWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(VerifyWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: "*",
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Home, {})
                        })
                    ]
                })
            ]
        })
    });
});
/* harmony default export */ const Personas = (Persona);


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