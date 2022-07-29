(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1169],{

/***/ 38419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(96719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(54455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(15853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52062);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
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

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

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

/***/ 38521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 51147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MaskWalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const MaskWalletIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Wallet', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M38 27.006v-.363h.819a.181.181 0 110 .363H38z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 19.81c0-2.104 1.606-3.81 3.586-3.81h18.828C36.394 16 38 17.706 38 19.81v12.38c0 2.104-1.606 3.81-3.586 3.81H15.586C13.606 36 12 34.294 12 32.19V19.81z",
                fill: "#1C68F3",
                fillOpacity: ".4"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M28.87 25.142a8 8 0 11-8-13.856 8 8 0 018 13.856z",
            fill: "url(#mask_wallet_paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M19.878 18.982l1.307 2.264 6.792-3.921.292-.17a3.557 3.557 0 01-5.375 4.01l-1.317.76 1.098 1.902c.26.45.835.604 1.286.345l6.52-3.765a.941.941 0 00.345-1.286l-2.797-4.845-8.151 4.706zm3.797 1.732a2.769 2.769 0 002.587-.098 2.768 2.768 0 001.378-2.191l-3.965 2.289zm2.335-4.548a1.465 1.465 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.465 1.465 0 01.627-1.811zm-3.487 2.013a1.464 1.464 0 011.883.362l-.695.401a.68.68 0 00-1.12.647l-.695.401a1.464 1.464 0 01.627-1.811zm-3.268-2.158a.941.941 0 00-.345 1.285l.575.997 8.151-4.706-.575-.996a.941.941 0 00-1.285-.345l-6.521 3.765z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                d: "M12 23.79c0-2.093 1.606-3.79 3.586-3.79h18.828C36.394 20 38 21.697 38 23.79v10.42c0 2.093-1.606 3.79-3.586 3.79H15.586C13.606 38 12 36.303 12 34.21V23.79z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".8",
            d: "M39 26.824V30.5a.5.5 0 01-.5.5H35a2 2 0 010-4h3.5c.5 0 .5-.176.5-.176z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "35",
            cy: "29",
            r: "1",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8",
                    y: "12",
                    width: "34",
                    height: "28",
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
                    x: "8",
                    y: "16",
                    width: "34",
                    height: "26",
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
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "mask_wallet_paint0_linear",
                    x1: "31.433",
                    y1: "13.777",
                    x2: "16.29",
                    y2: "20.004",
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

/***/ 79656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 78849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ArrowRightIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const ArrowRightIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowRightIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M7.708 4.792l5.209 5.416-5.209 5.417",
        strokeMiterlimit: "10"
    })
}), '0 0 20 20');


/***/ }),

/***/ 98830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ InteractionCircleIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const InteractionCircleIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('InteractionIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.833 18.667a8.333 8.333 0 100-16.667 8.333 8.333 0 000 16.667z",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.75 6l1.5 1.5-1.5 1.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M7.5 9.75V9A1.5 1.5 0 019 7.5h5.25M9 14.25l-1.5-1.5 1.5-1.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.25 10.5v.75a1.5 1.5 0 01-1.5 1.5H7.5",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');


/***/ }),

/***/ 14834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ PopupLinkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const PopupLinkIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('PopupLinkIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.6 2.1a.5.5 0 0 1 .5-.5h3.529v.8H2.4v7.2h7.2V6.235h.8V9.9a.5.5 0 0 1-.5.5H2.1a.5.5 0 0 1-.5-.5V2.1ZM6.832 2c0-.22.18-.4.4-.4H10c.22 0 .4.18.4.4v2.747a.4.4 0 0 1-.8 0v-1.77l-4.935 5.02a.4.4 0 0 1-.57-.56L9.045 2.4H7.233a.4.4 0 0 1-.4-.4Z",
        fill: "#767F8D"
    })
}), '0 0 12 12');


/***/ }),

/***/ 40615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const SuccessIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Success', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M32 58.667c14.727 0 26.667-11.94 26.667-26.667 0-14.728-11.94-26.667-26.667-26.667C17.272 5.333 5.333 17.273 5.333 32c0 14.728 11.94 26.667 26.667 26.667z",
            fill: "#77E0B5"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M44.46 22.027c1.09.99 1.17 2.677.18 3.767L31.306 40.46a2.667 2.667 0 01-3.708.23l-9.333-8a2.667 2.667 0 113.47-4.049l7.367 6.314 11.591-12.75a2.667 2.667 0 013.767-.18z",
            fill: "#77E0B5"
        })
    ]
}), '0 0 64 64');


/***/ }),

/***/ 66406:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ UploadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const UploadIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('UploadIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5",
            stroke: "#FFB915",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1676 6.66797L10.0009 2.5013L5.83424 6.66797",
            stroke: "#FFB915",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10.0014 2.5L10.0014 12.5",
            stroke: "#FFB915",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), '0 0 20 20');


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

/***/ 72667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ Navigator)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/BottomNavigation/BottomNavigation.js
var BottomNavigation = __webpack_require__(84647);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/BottomNavigationAction/BottomNavigationAction.js + 1 modules
var BottomNavigationAction = __webpack_require__(50406);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Personas.tsx


const PersonasIcon = (0,utils/* createIcon */.I)('PersonasIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M17.6273 7.29105C17.6273 10.2281 15.2724 12.5831 12.3333 12.5831C9.39524 12.5831 7.03936 10.2281 7.03936 7.29105C7.03936 4.35402 9.39524 2 12.3333 2C15.2724 2 17.6273 4.35402 17.6273 7.29105ZM12.3333 21.9999C7.99572 21.9999 4.33334 21.2949 4.33334 18.5749C4.33334 15.8538 8.01873 15.1738 12.3333 15.1738C16.672 15.1738 20.3333 15.8788 20.3333 18.5989C20.3333 21.3199 16.648 21.9999 12.3333 21.9999Z"
    })
}), '0 0 25 24');

;// CONCATENATED MODULE: ../icons/general/WalletNav.tsx


const WalletNavIcon = (0,utils/* createIcon */.I)('WalletNavIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.7691 9.87305H21.2536C21.6659 9.87305 22.0002 10.199 22.0002 10.601V13.1316C21.9954 13.5317 21.6639 13.8549 21.2536 13.8596H17.8491C16.855 13.8726 15.9857 13.209 15.7602 12.265C15.6473 11.6789 15.8058 11.0742 16.1933 10.6129C16.5808 10.1515 17.1576 9.88071 17.7691 9.87305ZM17.9207 12.5336H18.2496C18.6718 12.5336 19.014 12.1999 19.014 11.7883C19.014 11.3767 18.6718 11.043 18.2496 11.043H17.9207C17.7188 11.0407 17.5243 11.1173 17.3807 11.2557C17.2371 11.3941 17.1562 11.5828 17.1562 11.7797C17.1562 12.1927 17.4971 12.5289 17.9207 12.5336Z"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22 8.3818H17.7689V8.41647C15.8052 8.41647 14.2133 9.96849 14.2133 11.883C14.2133 13.7975 15.8052 15.3495 17.7689 15.3495H22V15.6615C22 19.0154 19.9644 21 16.5156 21H7.48444C4.03556 21 2 19.0154 2 15.6615V8.33847C2 4.98459 4.03556 3 7.48444 3H16.5156C19.9644 3 22 4.98459 22 8.3818ZM6.73808 8.38124H12.3825C12.8047 8.38124 13.147 8.04755 13.147 7.63593C13.147 7.22431 12.8047 6.89062 12.3825 6.89062H6.73808C6.31933 6.8906 5.9785 7.21903 5.97363 7.62726C5.9736 8.04031 6.31445 8.37649 6.73808 8.38124Z"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/Dashboard.tsx


const DashboardIcon = (0,utils/* createIcon */.I)('Dashboard', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M3.66666 13H11.6667V3H3.66666V13ZM3.66666 21H11.6667V15H3.66666V21ZM13.6667 21H21.6667V11H13.6667V21ZM13.6667 3V9H21.6667V3H13.6667Z"
    })
}), '0 0 25 24');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
;// CONCATENATED MODULE: ./src/extension/popups/hook/useEnterDashboard.ts
// ! We're going to SSR this UI, so DO NOT import anything new!

const useEnterDashboard = ()=>{
    return (0,react.useCallback)((event)=>{
        if (event.shiftKey) {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/debug.html')
            });
        } else {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/dashboard.html')
            });
        }
    }, []);
};

// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
;// CONCATENATED MODULE: ./src/extension/popups/components/Navigator/index.tsx









var NavRouter;
(function(NavRouter) {
    NavRouter["Personas"] = "Personas";
    NavRouter["Wallet"] = 'Wallets';
})(NavRouter || (NavRouter = {}));
const useStyle = (0,entry/* makeStyles */.ZL)()(()=>({
        label: {
            fontSize: '12px !important',
            color: '#ACB4C1'
        },
        selected: {
            color: '#1C68F3'
        },
        container: {
            backgroundColor: '#ffffff',
            width: '100%',
            position: 'fixed',
            bottom: 0
        }
    })
);
const Navigator = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { classes  } = useStyle();
    const matchPersona = (0,react_router/* useMatch */.bS)(`${src/* PopupRoutes.Personas */.mZ.Personas}/*`);
    const matchWallet = (0,react_router/* useMatch */.bS)(`${src/* PopupRoutes.Wallet */.mZ.Wallet}/*`);
    const onEnter = useEnterDashboard();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(BottomNavigation/* default */.Z, {
            showLabels: true,
            value: matchPersona ? NavRouter.Personas : matchWallet ? NavRouter.Wallet : null,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavigationAction/* default */.Z, {
                    label: t('personas'),
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonasIcon, {}),
                    value: NavRouter.Personas,
                    onClick: ()=>navigate(src/* PopupRoutes.Personas */.mZ.Personas, {
                            replace: true
                        })
                    ,
                    classes: {
                        label: classes.label,
                        selected: classes.selected
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavigationAction/* default */.Z, {
                    label: t('wallet'),
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletNavIcon, {}),
                    value: NavRouter.Wallet,
                    onClick: ()=>navigate(src/* PopupRoutes.Wallet */.mZ.Wallet, {
                            replace: true
                        })
                    ,
                    classes: {
                        label: classes.label,
                        selected: classes.selected
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomNavigationAction/* default */.Z, {
                    label: t('dashboard'),
                    icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardIcon, {}),
                    onClick: onEnter,
                    classes: {
                        label: classes.label,
                        selected: classes.selected
                    }
                })
            ]
        })
    });
});


/***/ }),

/***/ 60534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ NetworkSelector)
/* harmony export */ });
/* unused harmony export NetworkSelectorUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11087);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21784);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96436);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94670);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72499);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50719);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7197);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77818);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79656);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(91788);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67938);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
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
            lineHeight: '16px',
            marginLeft: 4
        },
        arrow: {
            stroke: '#ffffff',
            fontSize: 16
        },
        networkName: {
            marginLeft: 10
        },
        menu: {
            maxHeight: 466,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        }
    })
);
const NetworkSelector = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const networks = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)().filter((x)=>x.networkSupporterPluginID === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    );
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useAccount */ .mA)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const chainId1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const providerType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_4__/* .useProviderType */ ._o)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const onChainChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (chainId)=>{
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .ProviderType.MaskWallet */ .lP.MaskWallet) {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateMaskAccount */ .V.updateMaskAccount({
                chainId
            });
        }
        return _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_7__/* .WalletRPC.updateMaskAccount */ .V.updateMaskAccount({
            chainId,
            account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentMaskWalletAccountSettings.value */ .T_.value
        });
    }, [
        providerType,
        account
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NetworkSelectorUI, {
        currentNetwork: networks.find((x)=>x.chainId === chainId1
        ) ?? networks[0],
        onChainChange: onChainChange,
        networks: networks
    });
});
const NetworkSelectorUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ currentNetwork , onChainChange , networks  })=>{
    const { classes  } = useStyles();
    const [menu, openMenu] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useMenuConfig */ ._X)(networks?.filter((x)=>x.networkSupporterPluginID === _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_8__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    ).filter((x)=>_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? true : x.isMainnet
    ).map((network)=>{
        const chainId = network.chainId;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            selected: chainId === currentNetwork.chainId,
            children: [
                network.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                    size: 20,
                    mainIcon: network.icon
                }) : _shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                    color: network.iconColor
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: network.name
                })
            ]
        }, chainId);
    }) ?? [], {
        classes: {
            paper: classes.menu
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                className: classes.root,
                onClick: openMenu,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            currentNetwork.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                                size: 20,
                                mainIcon: currentNetwork.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: classes.iconWrapper,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                                    color: currentNetwork.iconColor
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.title,
                                children: currentNetwork.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_13__/* .ArrowDownRound */ .l, {
                        className: classes.arrow
                    })
                ]
            }),
            menu
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

/***/ 39652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useHasPassword)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58500);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91788);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10503);




function useHasPassword() {
    const { value: hasPassword , loading , retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.hasPassword */ .V.hasPassword, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.walletLockStatusUpdated.on */ .R$.events.walletLockStatusUpdated.on(retry);
    }, [
        retry
    ]);
    return {
        hasPassword,
        loading
    };
}


/***/ }),

/***/ 43240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 11259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ ActivityList)
});

// UNUSED EXPORTS: ActivityListUI

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var src = __webpack_require__(67938);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(55921);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/type.ts
var type = __webpack_require__(16562);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/Loader.tsx


const LoaderIcon = (0,icons_utils/* createIcon */.I)('LoaderIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 1.042c.345 0 .625.28.625.625V5a.625.625 0 11-1.25 0V1.667c0-.346.28-.625.625-.625zM10 14.375c.345 0 .625.28.625.625v3.333a.625.625 0 11-1.25 0V15c0-.345.28-.625.625-.625zM3.666 3.666a.625.625 0 01.884 0L6.91 6.025a.625.625 0 11-.884.884L3.666 4.55a.625.625 0 010-.884zM13.091 13.091a.625.625 0 01.884 0l2.359 2.359a.625.625 0 11-.884.884l-2.358-2.359a.625.625 0 010-.884zM1.042 10c0-.345.28-.625.625-.625H5a.625.625 0 110 1.25H1.667A.625.625 0 011.042 10zM14.375 10c0-.345.28-.625.625-.625h3.333a.625.625 0 110 1.25H15a.625.625 0 01-.625-.625zM6.909 13.091a.625.625 0 010 .884L4.55 16.334a.625.625 0 11-.884-.884l2.359-2.359a.625.625 0 01.884 0zM16.334 3.666a.625.625 0 010 .884L13.975 6.91a.625.625 0 01-.883-.884l2.358-2.359a.625.625 0 01.884 0z"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/general/Upload.tsx
var Upload = __webpack_require__(66406);
// EXTERNAL MODULE: ../icons/general/InteractionCircle.tsx
var InteractionCircle = __webpack_require__(98830);
;// CONCATENATED MODULE: ../icons/general/CircleClose.tsx


const CircleCloseIcon = (0,icons_utils/* createIcon */.I)('CircleCloseIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M9.473 10.356l.36-.356-.36-.355-1.765-1.746a.15.15 0 01-.04-.106c0-.032.006-.053.04-.086.033-.034.054-.04.085-.04a.15.15 0 01.107.04l1.745 1.765.356.36.355-.36 1.75-1.768a.17.17 0 01.066-.042c.008-.002.025-.006.064.006.044.012.06.026.065.031.005.005.019.02.031.065.012.04.008.057.006.064a.167.167 0 01-.041.066l-1.77 1.75-.359.355.36.356 1.768 1.749a.17.17 0 01.042.067c.002.007.006.025-.006.064-.012.044-.026.06-.031.064-.005.006-.02.02-.065.032-.04.012-.057.008-.064.006a.168.168 0 01-.066-.042l-1.75-1.768-.355-.36-.356.36L7.9 12.29a.15.15 0 01-.107.04c-.031 0-.052-.005-.086-.039-.033-.034-.039-.054-.039-.086a.15.15 0 01.04-.106l1.765-1.744zM9.988 18h.024c2.242-.055 4.135-.834 5.644-2.344 1.51-1.51 2.288-3.402 2.344-5.644v-.024c-.055-2.242-.834-4.135-2.344-5.644-1.51-1.51-3.402-2.288-5.644-2.344h-.024c-2.242.055-4.135.834-5.644 2.344C2.834 5.854 2.056 7.746 2 9.988v.024c.055 2.242.834 4.135 2.344 5.644 1.51 1.51 3.402 2.288 5.644 2.344zm5.84-2.172C14.281 17.376 12.35 18.185 10 18.25c-2.349-.065-4.28-.874-5.828-2.422C2.624 14.281 1.815 12.35 1.75 10c.065-2.349.874-4.28 2.422-5.828C5.719 2.624 7.65 1.815 10 1.75c2.349.065 4.28.874 5.828 2.422C17.376 5.719 18.185 7.65 18.25 10c-.065 2.349-.874 4.28-2.422 5.828z",
        fill: "#FF4E59",
        stroke: "#FF008A"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/general/ArrowRight.tsx
var ArrowRight = __webpack_require__(78849);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/ActivityListItem.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()({
    item: {
        padding: 14,
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
    },
    loader: {
        fill: '#FFB915'
    },
    interaction: {
        stroke: '#1C68F3',
        fill: 'none'
    },
    send: {
        stroke: '#FFB915',
        fill: 'none'
    },
    description: {
        color: '#000000',
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 600
    },
    secondaryDesc: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 600,
        marginTop: 2
    },
    button: {
        fontWeight: 600,
        fontSize: 14,
        color: '#ffffff',
        lineHeight: '20px',
        padding: '3px 0',
        borderRadius: 15,
        backgroundColor: '#1C68F3'
    }
});
const ActivityListItem = /*#__PURE__*/ (0,react.memo)(({ transaction , toAddress , onSpeedUpClick , onCancelClick , formatterTransaction  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, toAddress);
    const transactionIcon = (0,react.useMemo)(()=>{
        switch(transaction.status){
            case src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(LoaderIcon, {
                    className: classes.loader
                });
            case src/* TransactionStatusType.SUCCEED */.g8.SUCCEED:
                if (formatterTransaction?.type === src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER || formatterTransaction.title === 'Transfer Token') return /*#__PURE__*/ (0,jsx_runtime.jsx)(Upload/* UploadIcon */.r, {
                    className: classes.send
                });
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(InteractionCircle/* InteractionCircleIcon */.w, {
                    className: classes.interaction
                });
            case src/* TransactionStatusType.FAILED */.g8.FAILED:
            default:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CircleCloseIcon, {
                    style: {
                        fill: 'none'
                    }
                });
        }
    }, [
        formatterTransaction
    ]);
    if (!formatterTransaction) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        children: [
            transactionIcon,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                style: {
                    marginLeft: 15
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.description,
                        children: formatterTransaction.description
                    }),
                    transaction.status === src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        color: "#FFB915",
                        fontWeight: 600,
                        lineHeight: "16px",
                        children: t('pending')
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.secondaryDesc,
                        children: [
                            transaction.createdAt ? `${(0,format/* default */.Z)(transaction.createdAt, 'MMM dd')}.  ` : null,
                            toAddress ? t('popups_wallet_activity_to_address', {
                                address: Others?.formatDomainName?.(domain) || Others?.formatAddress(toAddress, 4)
                            }) : null
                        ]
                    }),
                    transaction.status === src/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        mt: 1,
                        children: [
                            Object.keys(transaction.candidates).length === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classes.button,
                                variant: "contained",
                                onClick: onSpeedUpClick,
                                children: t('speed_up')
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classes.button,
                                style: {
                                    color: '#1C68F3',
                                    backgroundColor: '#F7F9FA',
                                    marginLeft: 2
                                },
                                onClick: onCancelClick,
                                children: t('cancel')
                            })
                        ]
                    }) : null,
                    transaction.status === src/* TransactionStatusType.FAILED */.g8.FAILED ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        color: "#FF5F5F",
                        fontWeight: 600,
                        lineHeight: "16px",
                        children: t('failed')
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRight/* ArrowRightIcon */.L, {
                className: classes.arrow,
                style: {
                    fill: 'none'
                }
            })
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2596);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/index.tsx
















const ActivityList_useStyles = (0,entry/* makeStyles */.ZL)()({
    list: {
        backgroundColor: '#ffffff',
        padding: 0
    },
    item: {
        padding: 14,
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
    },
    loader: {
        fill: '#FFB915'
    },
    interaction: {
        stroke: '#1C68F3',
        fill: 'none'
    },
    description: {
        color: '#000000',
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 600
    },
    secondaryDesc: {
        color: '#7B8192',
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 600,
        marginTop: 2
    },
    buttonContainer: {
        padding: 16
    },
    moreButton: {
        fontWeight: 600,
        fontSize: 14,
        color: '#1C68F3',
        lineHeight: '20px',
        padding: '10px 0',
        borderRadius: 20,
        backgroundColor: '#ffffff'
    },
    button: {
        fontWeight: 600,
        fontSize: 14,
        color: '#ffffff',
        lineHeight: '20px',
        padding: '3px 0',
        borderRadius: 15,
        backgroundColor: '#1C68F3'
    },
    empty: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        fontSize: 12,
        lineHeight: '16px',
        fontWeight: 600,
        color: '#7B8192',
        background: '#F7F9FA'
    }
});
const ActivityList = /*#__PURE__*/ (0,react.memo)(({ tokenAddress  })=>{
    const { transactions  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const { Others , TransactionFormatter  } = (0,entry_web3/* useWeb3State */.dM)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: dataSource  } = (0,useAsync/* default */.Z)(async ()=>{
        if (!TransactionFormatter) return [];
        const formattedTransactions = await Promise.all(transactions.map(async (transaction)=>{
            const formatterTransaction = await TransactionFormatter.formatTransaction(chainId, transaction._tx);
            return {
                formatterTransaction,
                transaction
            };
        }));
        return formattedTransactions.filter(({ transaction , formatterTransaction  })=>{
            if (!tokenAddress) return true;
            else if ((0,address/* isNativeTokenAddress */.qw)(tokenAddress)) return formatterTransaction.type === src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER;
            else if (formatterTransaction.type === src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION) {
                return (0,src/* isSameAddress */.Wr)(transaction._tx.to, tokenAddress);
            }
            return false;
        });
    }, [
        tokenAddress,
        transactions,
        chainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityListUI, {
        dataSource: dataSource ?? [],
        chainId: chainId,
        formatterTransactionLink: Others?.explorerResolver.transactionLink
    });
});
const ActivityListUI = /*#__PURE__*/ (0,react.memo)(({ dataSource , chainId , formatterTransactionLink  })=>{
    const { classes  } = ActivityList_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [isExpand, setExpand] = (0,react.useState)(!(dataSource.length > 3));
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { setTransaction  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    if (dataSource.length === 0) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.empty,
        children: t('popups_wallet_no_transactions')
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                children: dataSource.slice(0, !isExpand ? 3 : undefined).map(({ transaction , formatterTransaction  }, index)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: formatterTransactionLink?.(chainId, transaction.indexId),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            textDecoration: 'none'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityListItem, {
                            transaction: transaction,
                            formatterTransaction: formatterTransaction,
                            toAddress: transaction._tx.to,
                            onSpeedUpClick: (e)=>{
                                e.preventDefault();
                                setTransaction(transaction);
                                navigate(dist_default()(shared_base_src/* PopupRoutes.ReplaceTransaction */.mZ.ReplaceTransaction, {
                                    type: type/* ReplaceType.SPEED_UP */.uM.SPEED_UP
                                }));
                            },
                            onCancelClick: (e)=>{
                                e.preventDefault();
                                setTransaction(transaction);
                                navigate(dist_default()(shared_base_src/* PopupRoutes.ReplaceTransaction */.mZ.ReplaceTransaction, {
                                    type: type/* ReplaceType.CANCEL */.uM.CANCEL
                                }));
                            }
                        })
                    }, index);
                })
            }),
            !isExpand ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.buttonContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    fullWidth: true,
                    className: classes.moreButton,
                    onClick: ()=>setExpand(true)
                    ,
                    children: t('more')
                })
            }) : null
        ]
    });
});


/***/ }),

/***/ 55921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ WalletContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44737);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67938);




function useWalletContext() {
    const chainId = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { value: assets , loading  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__/* .useFungibleAssets */ .$U)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, undefined, {
        chainId
    });
    const transactions = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_1__/* .useRecentTransactions */ .Sp)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const [currentToken, setCurrentToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [transaction, setTransaction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [selectedWallet, setSelectedWallet] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    return {
        currentToken,
        setCurrentToken,
        assets: assets?.filter((asset)=>asset.chainId === chainId
        ) ?? [],
        transactions,
        assetsLoading: loading,
        transaction,
        setTransaction,
        selectedWallet,
        setSelectedWallet
    };
}
const WalletContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_3__/* .createContainer */ .f)(useWalletContext);


/***/ }),

/***/ 60723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useWalletLockStatus)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58500);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91788);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10503);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58757);




function useWalletLockStatus() {
    const { value: isLocked , loading , error , retry ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        return _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__/* .WalletRPC.isLocked */ .V.isLocked();
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__/* .WalletMessages.events.walletLockStatusUpdated.on */ .R$.events.walletLockStatusUpdated.on(retry);
    }, [
        retry
    ]);
    return {
        error,
        loading,
        isLocked
    };
}


/***/ }),

/***/ 86941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.3.0/node_modules/react-router/index.js
var react_router = __webpack_require__(18271);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(60904);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(61865);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@6.3.0/node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(60417);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(51147);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/general/ImportWallet.tsx


const ImportWalletIcon = (0,utils/* createIcon */.I)('Index', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8 22.19C8 19.877 9.976 18 12.414 18h23.172C38.024 18 40 19.876 40 22.19v13.62c0 2.314-1.976 4.19-4.414 4.19H12.414C9.976 40 8 38.124 8 35.81V22.19z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M33.129 20.012a1.5 1.5 0 01-.141 2.117l-8 7a1.5 1.5 0 01-1.976 0l-8-7a1.5 1.5 0 011.976-2.258l5.512 4.823V8a1.5 1.5 0 013 0v16.694l5.512-4.823a1.5 1.5 0 012.117.141z",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
            filter: "url(#filter1_b)",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8 25.79C8 23.697 9.976 22 12.414 22h23.172C38.024 22 40 23.697 40 25.79v10.42c0 2.093-1.976 3.79-4.414 3.79H12.414C9.976 40 8 38.303 8 36.21V25.79z",
                fill: "#1C68F3",
                fillOpacity: ".05"
            })
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("filter", {
                    id: "filter0_b",
                    x: "4",
                    y: "14",
                    width: "40",
                    height: "30",
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
                    id: "filter1_b",
                    x: "5",
                    y: "19",
                    width: "38",
                    height: "24",
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

// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(60534);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ./src/utils/index.ts + 4 modules
var src_utils = __webpack_require__(93455);
// EXTERNAL MODULE: ./src/extension/popups/hook/useHasPassword.ts
var useHasPassword = __webpack_require__(39652);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(78778);
// EXTERNAL MODULE: ./src/extension/popups/components/Navigator/index.tsx + 4 modules
var Navigator = __webpack_require__(72667);
// EXTERNAL MODULE: ./src/extension/popups/hook/useTitle.ts
var useTitle = __webpack_require__(43240);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/StartUp/index.tsx














const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column'
        },
        alert: {
            padding: '2px 10px',
            backgroundColor: '#EFF5FF'
        },
        alertTitle: {
            fontWeight: 600,
            fontSize: 14,
            color: '#1C68F3',
            marginBottom: 3,
            lineHeight: '20px'
        },
        alertContent: {
            fontSize: 12,
            lineHeight: '16px',
            color: '#1C68F3'
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
            backgroundColor: '#f7f9fa',
            paddingBottom: 40
        },
        item: {
            padding: '12px 16px',
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
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const location = (0,react_router/* useLocation */.TH)();
    const onEnterCreateWallet = (0,react.useCallback)(async ()=>{
        const params = new URLSearchParams(location.search);
        await browser.tabs.create({
            active: true,
            url: browser.runtime.getURL(dist_default()('/dashboard.html#/create-mask-wallet', {
                chainId: params.get('chainId')
            }))
        });
        await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
    }, [
        location.search
    ]);
    const { hasPassword , loading  } = (0,useHasPassword/* useHasPassword */.T)();
    (0,useTitle/* useTitle */.Z)('');
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
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
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {})
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.item,
                        onClick: onEnterCreateWallet,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                                sx: {
                                    fontSize: 24
                                }
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.itemTitle,
                                children: t('wallet_new')
                            })
                        ]
                    }),
                    !loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, {
                        to: !hasPassword ? src/* PopupRoutes.SetPaymentPassword */.mZ.SetPaymentPassword : src/* PopupRoutes.ImportWallet */.mZ.ImportWallet,
                        style: {
                            textDecoration: 'none'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.item,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ImportWalletIcon, {
                                    sx: {
                                        fontSize: 24
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.itemTitle,
                                    children: t('plugin_wallet_import_wallet')
                                })
                            ]
                        })
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigator/* Navigator */.C, {})
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/tabsClasses.js
var tabsClasses = __webpack_require__(43030);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/tabClasses.js
var tabClasses = __webpack_require__(86984);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(73518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../icons/general/ArrowRight.tsx
var ArrowRight = __webpack_require__(78849);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var shared_src = __webpack_require__(77818);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(55921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNaN.js
var lodash_es_isNaN = __webpack_require__(29560);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/AssetsList/index.tsx












const AssetsList_useStyles = (0,entry/* makeStyles */.ZL)()({
    list: {
        backgroundColor: '#ffffff',
        padding: 0
    },
    item: {
        padding: 14,
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
        color: '#1C68F3',
        fontSize: 14
    },
    balance: {
        fontSize: 14
    }
});
const AssetsList = /*#__PURE__*/ (0,react.memo)(()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { assets , setCurrentToken  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const onItemClick = (0,react.useCallback)((asset)=>{
        setCurrentToken(asset);
        navigate(src/* PopupRoutes.TokenDetail */.mZ.TokenDetail);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsListUI, {
        dataSource: assets,
        onItemClick: onItemClick
    });
});
const AssetsListUI = /*#__PURE__*/ (0,react.memo)(({ dataSource , onItemClick  })=>{
    const { classes  } = AssetsList_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        dense: true,
        className: classes.list,
        children: dataSource.map((asset, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                className: classes.item,
                onClick: ()=>onItemClick(asset)
                ,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                        classes: {
                            icon: classes.tokenIcon
                        },
                        address: asset.address,
                        name: asset.name,
                        chainId: asset.chainId,
                        logoURL: asset.logoURL,
                        AvatarProps: {
                            sx: {
                                width: 20,
                                height: 20
                            }
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                        className: classes.text,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                            classes: {
                                symbol: classes.symbol,
                                balance: classes.balance
                            },
                            value: (0,lodash_es_isNaN/* default */.Z)(asset.balance) ? 0 : asset.balance,
                            decimals: (0,lodash_es_isNaN/* default */.Z)(asset.decimals) ? 0 : asset.decimals,
                            symbol: asset.symbol,
                            significant: 6,
                            formatter: base_src/* formatBalance */.az
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRight/* ArrowRightIcon */.L, {
                        className: classes.arrow,
                        style: {
                            fill: 'none'
                        }
                    })
                ]
            }, index);
        })
    });
});

// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/index.tsx + 3 modules
var ActivityList = __webpack_require__(11259);
// EXTERNAL MODULE: ./src/extension/popups/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(21978);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/WalletAssets/index.tsx
















const WalletAssets_useStyles = (0,entry/* makeStyles */.ZL)()({
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
        overflow: 'auto'
    },
    addToken: {
        padding: 16
    },
    button: {
        fontWeight: 600,
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
    & .${tabsClasses/* default.indicator */.Z.indicator} {
        display: none;
    }
    & .${tabsClasses/* default.flexContainer */.Z.flexContainer} {
        justify-content: center;
    }
`;
const StyledTab = (0,styled/* default */.ZP)(Tab/* default */.Z)`
    &.${tabClasses/* default.root */.Z.root} {
        font-size: 12px;
        line-height: 16px;
        min-height: unset;
        min-width: 165px;
        padding: 7px 0;
        background-color: #f7f9fa;
        border-radius: 4px 4px 0 0;
        color: #15181b;
    }
    &.${tabClasses/* default.selected */.Z.selected} {
        background-color: white;
        font-weight: 500;
    }
`;
var WalletTabs;
(function(WalletTabs) {
    WalletTabs["Assets"] = "Assets";
    WalletTabs["Activity"] = "Activity";
})(WalletTabs || (WalletTabs = {}));
const WalletAssets = /*#__PURE__*/ (0,react.memo)(()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const wallet = (0,entry_web3/* useWallet */.Os)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssetsUI, {
        onAddTokenClick: ()=>navigate(src/* PopupRoutes.AddToken */.mZ.AddToken)
    }) : null;
});
const WalletAssetsUI = /*#__PURE__*/ (0,react.memo)(({ onAddTokenClick  })=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = WalletAssets_useStyles();
    const { assetsLoading  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const [currentTab, setCurrentTab] = (0,react.useState)(WalletTabs.Assets);
    return assetsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
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
                                height: currentTab === WalletTabs.Assets ? 396 : 0
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(AssetsList, {}),
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
                                height: currentTab === WalletTabs.Activity ? 396 : 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityList/* ActivityList */.b, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Navigator/* Navigator */.C, {})
        ]
    });
});

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(91788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(40615);
// EXTERNAL MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx + 1 modules
var CopyIconButton = __webpack_require__(22825);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SelectWallet/WalletItem.tsx









const WalletItem_useStyles = (0,entry/* makeStyles */.ZL)()({
    item: {
        padding: 10,
        borderBottom: '1px solid #F7F9FA',
        cursor: 'pointer',
        backgroundColor: '#ffffff'
    },
    address: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center'
    },
    copy: {
        fontSize: 12,
        fill: '#1C68F3',
        marginLeft: 4,
        cursor: 'pointer'
    },
    name: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 14,
        color: '#1C68F3',
        fontWeight: 500
    },
    text: {
        marginLeft: 4
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
const WalletItem = /*#__PURE__*/ (0,react.memo)(({ wallet , onClick , isSelected  })=>{
    const { classes  } = WalletItem_useStyles();
    const { Others  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: domain  } = (0,entry_web3/* useReverseAddress */.$q)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, wallet.address);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.item,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                className: classes.text,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.listItem,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.name,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            component: "span",
                                            children: [
                                                " ",
                                                wallet.name
                                            ]
                                        }),
                                        domain && Others?.formatDomainName ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "span",
                                            children: Others.formatDomainName(domain)
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.address,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: wallet.address,
                                            size: 12,
                                            formatter: Others?.formatAddress
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton/* CopyIconButton */.m, {
                                            className: classes.copy,
                                            text: wallet.address
                                        })
                                    ]
                                })
                            ]
                        }),
                        isSelected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Success/* SuccessIcon */.t, {}) : null
                    ]
                })
            })
        ]
    });
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SelectWallet/index.tsx















const SelectWallet_useStyles = (0,entry/* makeStyles */.ZL)()({
    content: {
        backgroundColor: '#F7F9FA',
        display: 'flex',
        flexDirection: 'column'
    },
    placeholder: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        padding: 10,
        display: 'flex',
        marginBottom: 1,
        backgroundColor: '#ffffff'
    },
    network: {
        minWidth: 114,
        padding: '4px 12px 4px 4px',
        minHeight: 28,
        borderRadius: 18,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#1c68f3'
    },
    title: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: '16px'
    },
    iconWrapper: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 6
    },
    list: {
        backgroundColor: '#F7F9FA',
        padding: 0,
        height: 'calc(100vh - 132px)',
        overflow: 'auto',
        paddingBottom: 70
    },
    controller: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        padding: 16,
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    button: {
        fontWeight: 600,
        padding: '9px 0',
        borderRadius: 20,
        fontSize: 14,
        lineHeight: '20px'
    },
    colorChainIcon: {
        borderRadius: '999px!important',
        margin: '0 !important'
    }
});
const SelectWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = SelectWallet_useStyles();
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const networks = (0,entry_web3/* getRegisteredWeb3Networks */.Rm)().filter((x)=>x.networkSupporterPluginID === base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
    );
    const search = new URLSearchParams(location.search);
    // The previous page is popup page
    const isPopup = search.get('popup');
    // The opener need to switch to specific chain
    const chainIdSearched = search.get('chainId');
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, chainIdSearched ? Number.parseInt(chainIdSearched, 10) : undefined);
    const chainIdValid = (0,entry_web3/* useChainIdValid */.as)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, chainId);
    const wallets = (0,entry_web3/* useWallets */.rB)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [selected, setSelected] = (0,react.useState)(account);
    const currentNetwork = networks.find((x)=>x.chainId === chainId
    );
    const handleCancel = (0,react.useCallback)(async ()=>{
        if (isPopup) {
            navigate(-1);
        } else {
            await messages/* WalletRPC.resolveMaskAccount */.V.resolveMaskAccount([]);
            await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
        }
    }, [
        isPopup
    ]);
    const handleConfirm = (0,react.useCallback)(async ()=>{
        if (isPopup) {
            navigate(src/* PopupRoutes.VerifyWallet */.mZ.VerifyWallet, {
                state: {
                    chainId,
                    account: selected,
                    providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
                }
            });
            return;
        }
        await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
            chainId,
            account: selected
        });
        if (chainId) {
            await messages/* WalletRPC.resolveMaskAccount */.V.resolveMaskAccount([
                selected
            ]);
        }
        return service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
    }, [
        chainId,
        selected,
        isPopup
    ]);
    (0,react.useEffect)(()=>{
        if (!selected && wallets.length) setSelected((0,head/* default */.Z)(wallets)?.address ?? '');
    }, [
        selected,
        wallets,
        location.state
    ]);
    return chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    currentNetwork ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.header,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.network,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.iconWrapper,
                                    children: currentNetwork.icon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                                        mainIcon: currentNetwork.icon,
                                        size: 20
                                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ChainIcon */.fq, {
                                        color: currentNetwork.iconColor,
                                        size: 20,
                                        classes: {
                                            point: classes.colorChainIcon
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: currentNetwork.name
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        className: classes.list,
                        children: wallets.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                                wallet: item,
                                onClick: ()=>setSelected(item.address)
                                ,
                                isSelected: (0,base_src/* isSameAddress */.Wr)(item.address, selected)
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.controller,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        className: classes.button,
                        style: {
                            backgroundColor: '#F7F9FA',
                            color: '#1C68F3'
                        },
                        onClick: handleCancel,
                        children: t('cancel')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "contained",
                        disabled: !selected,
                        className: classes.button,
                        onClick: handleConfirm,
                        children: t('confirm')
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.placeholder,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            children: t('popups_wallet_unsupported_network')
        })
    });
});
/* harmony default export */ const Wallet_SelectWallet = (SelectWallet);

// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletLockStatus.ts
var useWalletLockStatus = __webpack_require__(60723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../icons/general/ArrowDrop.tsx
var ArrowDrop = __webpack_require__(67512);
// EXTERNAL MODULE: ../icons/brands/MaskBlue.tsx
var MaskBlue = __webpack_require__(38521);
// EXTERNAL MODULE: ../icons/general/PopupLink.tsx
var PopupLink = __webpack_require__(14834);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/WalletHeader/UI.tsx








const UI_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        container: {
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(98, 126, 234, 0.2) 0%, rgba(59, 153, 252, 0.2) 100%)',
            padding: '11px 16px',
            lineHeight: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        menu: {
            maxHeight: 466,
            '&::-webkit-scrollbar': {
                display: 'none'
            }
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
        },
        colorChainICon: {
            borderRadius: '999px!important',
            margin: '0 !important'
        },
        networkSelector: {
            display: 'flex',
            cursor: 'pointer'
        },
        chainName: {
            fontSize: 14,
            lineHeight: '18px',
            color: '#15181B',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center'
        }
    })
);
const WalletHeaderUI = /*#__PURE__*/ (0,react.memo)(({ currentNetwork , chainId , onOpenNetworkSelector , onActionClick , wallet , isSwitchWallet , disabled  })=>{
    const { classes  } = UI_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.networkSelector,
                onClick: (event)=>{
                    if (!disabled) onOpenNetworkSelector(event);
                },
                children: [
                    currentNetwork.isMainnet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                        mainIcon: currentNetwork.icon,
                        size: 30
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ChainIcon */.fq, {
                        color: currentNetwork.iconColor,
                        size: 30,
                        classes: {
                            point: classes.colorChainICon
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        style: {
                            marginLeft: 4
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.chainName,
                            children: [
                                currentNetwork.name,
                                !disabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDrop/* ArrowDropIcon */.r, {
                                    className: classes.arrow,
                                    style: {
                                        transform: status ? 'rotate(-180deg)' : undefined
                                    }
                                }) : null
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.action,
                onClick: ()=>{
                    if (!disabled) onActionClick();
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBlue/* MaskBlueIcon */.I, {
                        className: classes.avatar
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.nickname,
                                children: wallet.name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.identifier,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                        address: wallet.address,
                                        formatter: formatter/* formatEthereumAddress */.j8,
                                        size: 4
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CopyIconButton/* CopyIconButton */.m, {
                                        text: wallet.address ?? '',
                                        className: classes.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        onClick: (event)=>event.stopPropagation()
                                        ,
                                        style: {
                                            width: 12,
                                            height: 12
                                        },
                                        href: resolver/* explorerResolver.addressLink */.Nb.addressLink(chainId, wallet.address ?? ''),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PopupLink/* PopupLinkIcon */.I, {
                                            className: classes.icon
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !disabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDrop/* ArrowDropIcon */.r, {
                        className: classes.arrow,
                        style: {
                            transform: isSwitchWallet ? 'rotate(-180deg)' : undefined
                        }
                    }) : null
                ]
            })
        ]
    });
});

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(11087);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(7197);
// EXTERNAL MODULE: ./src/extension/popups/components/NormalHeader/index.tsx + 2 modules
var NormalHeader = __webpack_require__(57940);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/WalletHeader/index.tsx














const WalletHeader_useStyles = (0,entry/* makeStyles */.ZL)()({
    menu: {
        maxHeight: 466,
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    }
});
const WalletHeader = /*#__PURE__*/ (0,react.memo)(()=>{
    const { classes  } = WalletHeader_useStyles();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const chainId1 = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const wallet = (0,entry_web3/* useWallet */.Os)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const providerType = (0,entry_web3/* useProviderType */._o)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const networks = (0,entry_web3/* getRegisteredWeb3Networks */.Rm)().filter((x)=>x.networkSupporterPluginID === base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
    );
    const currentNetwork = (0,react.useMemo)(()=>networks.find((x)=>x.chainId === chainId1
        ) ?? networks[0]
    , [
        networks,
        chainId1
    ]);
    const matchWallet = (0,react_router/* useMatch */.bS)(src/* PopupRoutes.Wallet */.mZ.Wallet);
    const matchSwitchWallet = (0,react_router/* useMatch */.bS)(src/* PopupRoutes.SwitchWallet */.mZ.SwitchWallet);
    const matchContractInteraction = (0,react_router/* useMatch */.bS)(src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction);
    const matchWalletRecovered = (0,react_router/* useMatch */.bS)(src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered);
    const onChainChange = (0,react.useCallback)(async (chainId)=>{
        return messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
            chainId,
            account: settings/* currentMaskWalletAccountSettings.value */.T_.value
        });
    }, [
        providerType,
        account
    ]);
    const [menu, openMenu] = (0,shared_src/* useMenuConfig */._X)(networks?.filter((x)=>x.networkSupporterPluginID === base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM
    ).filter((x)=>shared/* Flags.support_testnet_switch */.vU.support_testnet_switch ? true : x.isMainnet
    ).map((network)=>{
        const chainId = network.chainId;
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            selected: chainId === currentNetwork.chainId,
            children: [
                network.isMainnet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* WalletIcon */.o, {
                    size: 20,
                    mainIcon: network.icon
                }) : shared/* Flags.support_testnet_switch */.vU.support_testnet_switch ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ChainIcon */.fq, {
                    color: network.iconColor
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: network.name
                })
            ]
        }, chainId);
    }) ?? [], {
        classes: {
            paper: classes.menu
        }
    });
    if (!wallet) return /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {
        onlyTitle: !!matchWalletRecovered
    });
    if (matchContractInteraction && wallet) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeaderUI, {
                    currentNetwork: currentNetwork,
                    chainId: chainId1,
                    onOpenNetworkSelector: openMenu,
                    onActionClick: ()=>navigate(matchSwitchWallet ? src/* PopupRoutes.Wallet */.mZ.Wallet : src/* PopupRoutes.SwitchWallet */.mZ.SwitchWallet)
                    ,
                    wallet: wallet,
                    isSwitchWallet: !!matchSwitchWallet,
                    disabled: true
                }),
                menu
            ]
        });
    }
    return (matchSwitchWallet || matchWallet) && wallet ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeaderUI, {
                currentNetwork: currentNetwork,
                chainId: chainId1,
                onOpenNetworkSelector: openMenu,
                onActionClick: ()=>navigate(matchSwitchWallet ? src/* PopupRoutes.Wallet */.mZ.Wallet : src/* PopupRoutes.SwitchWallet */.mZ.SwitchWallet)
                ,
                wallet: wallet,
                isSwitchWallet: !!matchSwitchWallet
            }),
            menu
        ]
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(NormalHeader/* NormalHeader */.n, {});
});

// EXTERNAL MODULE: ../web3-shared/evm/utils/payload.ts
var utils_payload = __webpack_require__(2046);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/index.tsx

















const ImportWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(6739), __webpack_require__.e(4544), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(6045), __webpack_require__.e(6265), __webpack_require__.e(4859), __webpack_require__.e(30), __webpack_require__.e(8026)]).then(__webpack_require__.bind(__webpack_require__, 91527))
);
const AddDeriveWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(5496)]).then(__webpack_require__.bind(__webpack_require__, 5496))
);
const WalletSettings = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 2909).then(__webpack_require__.bind(__webpack_require__, 12909))
);
const WalletRename = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(8432)]).then(__webpack_require__.bind(__webpack_require__, 18432))
);
const DeleteWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 3275).then(__webpack_require__.bind(__webpack_require__, 43275))
);
const CreateWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(8916)]).then(__webpack_require__.bind(__webpack_require__, 98916))
);
const SwitchWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(9759), __webpack_require__.e(6917)]).then(__webpack_require__.bind(__webpack_require__, 36917))
);
const BackupWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 601).then(__webpack_require__.bind(__webpack_require__, 70601))
);
const AddToken = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 6090).then(__webpack_require__.bind(__webpack_require__, 6090))
);
const TokenDetail = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(405), __webpack_require__.e(4821)]).then(__webpack_require__.bind(__webpack_require__, 88313))
);
const SignRequest = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4434).then(__webpack_require__.bind(__webpack_require__, 64434))
);
const GasSetting = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(8443)]).then(__webpack_require__.bind(__webpack_require__, 75464))
);
const Transfer = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(405), __webpack_require__.e(4806), __webpack_require__.e(452)]).then(__webpack_require__.bind(__webpack_require__, 73902))
);
const ContractInteraction = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7482).then(__webpack_require__.bind(__webpack_require__, 92735))
);
const Unlock = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8220).then(__webpack_require__.bind(__webpack_require__, 48220))
);
const SetPaymentPassword = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(4488)]).then(__webpack_require__.bind(__webpack_require__, 64488))
);
const WalletRecovery = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(9034)]).then(__webpack_require__.bind(__webpack_require__, 99034))
);
const LegacyWalletRecovery = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(5672)]).then(__webpack_require__.bind(__webpack_require__, 25672))
);
const ReplaceTransaction = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(6607)]).then(__webpack_require__.bind(__webpack_require__, 76607))
);
const ConnectWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8319).then(__webpack_require__.bind(__webpack_require__, 28319))
);
const exclusionDetectLocked = [
    src/* PopupRoutes.Unlock */.mZ.Unlock,
    src/* PopupRoutes.ConnectWallet */.mZ.ConnectWallet
];
const r = (0,src/* relativeRouteOf */.zD)(src/* PopupRoutes.Wallet */.mZ.Wallet);
function Wallet() {
    const wallet = (0,entry_web3/* useWallet */.Os)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { TransactionFormatter  } = (0,entry_web3/* useWeb3State */.dM)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { isLocked , loading: getLockStatusLoading  } = (0,useWalletLockStatus/* useWalletLockStatus */.f)();
    const { loading , retry  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if ([
            src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction,
            src/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest,
            src/* PopupRoutes.GasSetting */.mZ.GasSetting,
            src/* PopupRoutes.Unlock */.mZ.Unlock, 
        ].some((item)=>item === location.pathname
        )) return;
        const payload = await messages/* WalletRPC.topUnconfirmedRequest */.V.topUnconfirmedRequest();
        if (!payload) return;
        if (payload) {
            switch(payload.method){
                case types/* EthereumMethodType.ETH_SIGN */.W8.ETH_SIGN:
                case types/* EthereumMethodType.ETH_SIGN_TYPED_DATA */.W8.ETH_SIGN_TYPED_DATA:
                case types/* EthereumMethodType.PERSONAL_SIGN */.W8.PERSONAL_SIGN:
                    navigate(src/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest, {
                        replace: true
                    });
                    break;
                default:
                    break;
            }
        }
        const computedPayload = (0,utils_payload/* getPayloadConfig */.is)(payload);
        if (!computedPayload) return;
        const formatterTransaction = await TransactionFormatter?.formatTransaction(chainId, computedPayload);
        if (formatterTransaction && [
            base_src/* TransactionDescriptorType.INTERACTION */.vt.INTERACTION,
            base_src/* TransactionDescriptorType.TRANSFER */.vt.TRANSFER
        ].includes(formatterTransaction.type)) {
            navigate(src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction, {
                replace: true
            });
        }
    }, [
        location.search,
        location.pathname,
        chainId
    ]);
    (0,react.useEffect)(()=>{
        if (!(isLocked && !getLockStatusLoading && !exclusionDetectLocked.some((x)=>x === location.pathname
        ))) return;
        navigate(dist_default()(src/* PopupRoutes.Unlock */.mZ.Unlock, {
            from: location.pathname
        }), {
            replace: true
        });
    }, [
        isLocked,
        location.pathname,
        getLockStatusLoading
    ]);
    (0,react.useEffect)(()=>{
        return messages/* WalletMessages.events.requestsUpdated.on */.R.events.requestsUpdated.on(({ hasRequest  })=>{
            if (hasRequest) retry();
        });
    }, [
        retry
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(useWalletContext/* WalletContext.Provider */.z.Provider, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeader, {}),
                loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: "*",
                            element: !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStartUp, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssets, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRecovery, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.LegacyWalletRecovered */.mZ.LegacyWalletRecovered),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(LegacyWalletRecovery, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.ImportWallet */.mZ.ImportWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImportWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.AddDeriveWallet */.mZ.AddDeriveWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddDeriveWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.WalletSettings */.mZ.WalletSettings),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettings, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.WalletRename */.mZ.WalletRename),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRename, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.DeleteWallet */.mZ.DeleteWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.CreateWallet */.mZ.CreateWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.SwitchWallet */.mZ.SwitchWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.BackupWallet */.mZ.BackupWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.AddToken */.mZ.AddToken),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddToken, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignRequest, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.GasSetting */.mZ.GasSetting),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.TokenDetail */.mZ.TokenDetail),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenDetail, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.Transfer */.mZ.Transfer),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContractInteraction, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.SelectWallet */.mZ.SelectWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet_SelectWallet, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.Unlock */.mZ.Unlock),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Unlock, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.SetPaymentPassword */.mZ.SetPaymentPassword),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SetPaymentPassword, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.ReplaceTransaction */.mZ.ReplaceTransaction),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReplaceTransaction, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: r(src/* PopupRoutes.ConnectWallet */.mZ.ConnectWallet),
                            element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectWallet, {})
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 16562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VM": () => (/* binding */ TransferAddressError),
/* harmony export */   "uM": () => (/* binding */ ReplaceType),
/* harmony export */   "ug": () => (/* binding */ MethodAfterPersonaSign)
/* harmony export */ });
var ReplaceType;
(function(ReplaceType) {
    ReplaceType["CANCEL"] = "CANCEL";
    ReplaceType["SPEED_UP"] = "SPEED_UP";
})(ReplaceType || (ReplaceType = {}));
var TransferAddressError;
(function(TransferAddressError) {
    TransferAddressError["SAME_ACCOUNT"] = "SAME_ACCOUNT";
    TransferAddressError["CONTRACT_ADDRESS"] = "CONTRACT_ADDRESS";
    TransferAddressError["RESOLVE_FAILED"] = "RESOLVE_FAILED";
    TransferAddressError["NETWORK_NOT_SUPPORT"] = "NETWORK_NOT_SUPPORT";
})(TransferAddressError || (TransferAddressError = {}));
var MethodAfterPersonaSign;
(function(MethodAfterPersonaSign) {
    MethodAfterPersonaSign["DISCONNECT_NEXT_ID"] = "DISCONNECT_NEXT_ID";
})(MethodAfterPersonaSign || (MethodAfterPersonaSign = {}));


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