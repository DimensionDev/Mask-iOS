(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1110],{

/***/ 43221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(97538);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.2/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(93086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(68435);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(65379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.71_6236d03f59cecef7ce06debc7d75b196/node_modules/@mui/base/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(48301);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.71_6236d03f59cecef7ce06debc7d75b196/node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(53038);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+base@5.0.0-alpha.71_6236d03f59cecef7ce06debc7d75b196/node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(6038);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.72_154258abcf19999eeddd92026c0a2f6c/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.72_154258abcf19999eeddd92026c0a2f6c/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(10018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.72_154258abcf19999eeddd92026c0a2f6c/node_modules/@mui/lab/TabPanel/TabPanel.js


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

/***/ 88233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 60312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 86368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ ArrowRightIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const ArrowRightIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowRightIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M7.708 4.792l5.209 5.416-5.209 5.417",
        strokeMiterlimit: "10"
    })
}), '0 0 20 20');


/***/ }),

/***/ 45007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 17514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ EditIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


const EditIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('EditIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M10 17.596h7.5M13.75 3.846a1.768 1.768 0 012.5 2.5L5.833 16.763l-3.333.833.833-3.333L13.75 3.846z",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 20 20');


/***/ }),

/***/ 69976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ InteractionCircleIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 57214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SuccessIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 25415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ UploadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46098);


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

/***/ 82666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ CopyIconButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72753);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93573);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45007);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35750);






const CopyIconButton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ text , ...props })=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useI18N */ .M1)();
    const [, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const onCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: t('copied'),
        open: open,
        onMouseLeave: ()=>setOpen(false)
        ,
        disableFocusListener: true,
        disableTouchListener: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .CopyIcon */ .T, {
            onClick: onCopy,
            className: props.className
        })
    }));
});


/***/ }),

/***/ 30395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ EnterDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var _hook_useEnterDashboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63434);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93573);





const EnterDashboard = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .useI18N */ .M1)();
    const onEnter = (0,_hook_useEnterDashboard__WEBPACK_IMPORTED_MODULE_2__/* .useEnterDashboard */ .i)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        style: {
            padding: '12px 16px',
            cursor: 'pointer',
            backgroundColor: '#ffffff',
            width: '100%',
            position: 'fixed',
            bottom: 0
        },
        onClick: onEnter,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            style: {
                fontSize: 12,
                lineHeight: '16px',
                fontWeight: 600
            },
            color: "primary",
            children: t('browser_action_enter_dashboard')
        })
    }));
});


/***/ }),

/***/ 75677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ LoadingPlaceholder)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16787);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74491);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93573);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43021);






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
const LoadingPlaceholder = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useI18N */ .M1)();
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .LoadingIcon */ .H, {
                style: {
                    color: '#1C68F3'
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                variant: "caption",
                color: "#A6A9B6",
                children: t('loading')
            })
        ]
    }));
});


/***/ }),

/***/ 1968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ NetworkSelector)
/* harmony export */ });
/* unused harmony export NetworkSelectorUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56561);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74491);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18287);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70609);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98086);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63541);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95130);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63151);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63361);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(95367);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98193);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60312);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63081);












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
    const networks = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)();
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_9__/* .useAccount */ .m)();
    const chainId1 = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_10__/* .useChainId */ .xx)();
    const providerType = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_7__/* .useValueRef */ .E)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentProviderSettings */ .t1);
    const onChainChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async (chainId)=>{
        if (providerType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_11__/* .ProviderType.MaskWallet */ .lP.MaskWallet) {
            await _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.updateAccount */ .V.updateAccount({
                chainId
            });
        }
        return _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletRPC.updateMaskAccount */ .V.updateMaskAccount({
            chainId,
            account: _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentMaskWalletAccountSettings.value */ .T_.value
        });
    }, [
        providerType,
        account
    ]);
    var ref;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NetworkSelectorUI, {
        currentNetwork: (ref = networks.find((x)=>x.chainId === chainId1
        )) !== null && ref !== void 0 ? ref : networks[0],
        onChainChange: onChainChange,
        networks: networks
    }));
});
const NetworkSelectorUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ currentNetwork , onChainChange  })=>{
    const { classes  } = useStyles();
    const networks = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__/* .getRegisteredWeb3Networks */ .Rm)();
    var ref;
    const [menu, openMenu] = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .useMenuConfig */ ._X)((ref = networks === null || networks === void 0 ? void 0 : networks.filter((x)=>x.networkSupporterPluginID === _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_4__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM
    ).filter((x)=>_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? true : x.isMainnet
    ).map((network)=>{
        const chainId = network.chainId;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
            onClick: ()=>onChainChange(chainId)
            ,
            selected: chainId === currentNetwork.chainId,
            children: [
                network.isMainnet ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .WalletIcon */ .o, {
                    size: 20,
                    networkIcon: network.icon
                }) : _shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.support_testnet_switch */ .vU.support_testnet_switch ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                    color: network.iconColor
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    sx: {
                        marginLeft: 1
                    },
                    children: network.name
                })
            ]
        }, chainId));
    })) !== null && ref !== void 0 ? ref : [], {
        classes: {
            paper: classes.menu
        }
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
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
                                networkIcon: currentNetwork.icon
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                                className: classes.iconWrapper,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_6__/* .ChainIcon */ .fq, {
                                    color: currentNetwork.iconColor
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                className: classes.title,
                                children: currentNetwork.name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .ArrowDownRound */ .l, {
                        className: classes.arrow
                    })
                ]
            }),
            menu
        ]
    }));
});


/***/ }),

/***/ 4034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useHasPassword)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28577);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63081);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89987);




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

/***/ 97161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ ActivityList)
});

// UNUSED EXPORTS: ActivityListUI

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.2.2_react@18.0.0-rc.2/node_modules/react-router/index.js
var react_router = __webpack_require__(92186);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(86377);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(83468);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(1130);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/type.ts
var type = __webpack_require__(74275);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(66552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(81396);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(46098);
;// CONCATENATED MODULE: ../icons/general/Loader.tsx


const LoaderIcon = (0,icons_utils/* createIcon */.I)('LoaderIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10 1.042c.345 0 .625.28.625.625V5a.625.625 0 11-1.25 0V1.667c0-.346.28-.625.625-.625zM10 14.375c.345 0 .625.28.625.625v3.333a.625.625 0 11-1.25 0V15c0-.345.28-.625.625-.625zM3.666 3.666a.625.625 0 01.884 0L6.91 6.025a.625.625 0 11-.884.884L3.666 4.55a.625.625 0 010-.884zM13.091 13.091a.625.625 0 01.884 0l2.359 2.359a.625.625 0 11-.884.884l-2.358-2.359a.625.625 0 010-.884zM1.042 10c0-.345.28-.625.625-.625H5a.625.625 0 110 1.25H1.667A.625.625 0 011.042 10zM14.375 10c0-.345.28-.625.625-.625h3.333a.625.625 0 110 1.25H15a.625.625 0 01-.625-.625zM6.909 13.091a.625.625 0 010 .884L4.55 16.334a.625.625 0 11-.884-.884l2.359-2.359a.625.625 0 01.884 0zM16.334 3.666a.625.625 0 010 .884L13.975 6.91a.625.625 0 01-.883-.884l2.358-2.359a.625.625 0 01.884 0z"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/general/Upload.tsx
var Upload = __webpack_require__(25415);
// EXTERNAL MODULE: ../icons/general/InteractionCircle.tsx
var InteractionCircle = __webpack_require__(69976);
;// CONCATENATED MODULE: ../icons/general/CircleClose.tsx


const CircleCloseIcon = (0,icons_utils/* createIcon */.I)('CircleCloseIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M9.473 10.356l.36-.356-.36-.355-1.765-1.746a.15.15 0 01-.04-.106c0-.032.006-.053.04-.086.033-.034.054-.04.085-.04a.15.15 0 01.107.04l1.745 1.765.356.36.355-.36 1.75-1.768a.17.17 0 01.066-.042c.008-.002.025-.006.064.006.044.012.06.026.065.031.005.005.019.02.031.065.012.04.008.057.006.064a.167.167 0 01-.041.066l-1.77 1.75-.359.355.36.356 1.768 1.749a.17.17 0 01.042.067c.002.007.006.025-.006.064-.012.044-.026.06-.031.064-.005.006-.02.02-.065.032-.04.012-.057.008-.064.006a.168.168 0 01-.066-.042l-1.75-1.768-.355-.36-.356.36L7.9 12.29a.15.15 0 01-.107.04c-.031 0-.052-.005-.086-.039-.033-.034-.039-.054-.039-.086a.15.15 0 01.04-.106l1.765-1.744zM9.988 18h.024c2.242-.055 4.135-.834 5.644-2.344 1.51-1.51 2.288-3.402 2.344-5.644v-.024c-.055-2.242-.834-4.135-2.344-5.644-1.51-1.51-3.402-2.288-5.644-2.344h-.024c-2.242.055-4.135.834-5.644 2.344C2.834 5.854 2.056 7.746 2 9.988v.024c.055 2.242.834 4.135 2.344 5.644 1.51 1.51 3.402 2.288 5.644 2.344zm5.84-2.172C14.281 17.376 12.35 18.185 10 18.25c-2.349-.065-4.28-.874-5.828-2.422C2.624 14.281 1.815 12.35 1.75 10c.065-2.349.874-4.28 2.422-5.828C5.719 2.624 7.65 1.815 10 1.75c2.349.065 4.28.874 5.828 2.422C17.376 5.719 18.185 7.65 18.25 10c-.065 2.349-.874 4.28-2.422 5.828z",
        fill: "#FF4E59",
        stroke: "#FF008A"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../icons/general/ArrowRight.tsx
var ArrowRight = __webpack_require__(86368);
// EXTERNAL MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/TransactionDescription.tsx + 4 modules
var TransactionDescription = __webpack_require__(85066);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/ActivityListItem.tsx










const useStyles = (0,src/* makeStyles */.ZL)()({
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
const ActivityListItem = /*#__PURE__*/ (0,react.memo)(({ transaction , toAddress , onSpeedUpClick , onCancelClick  })=>{
    var ref2, ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    const { value: domain  } = (0,plugin_infra_src/* useReverseAddress */.$q)(toAddress, plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const transactionIcon = (0,react.useMemo)(()=>{
        switch(transaction.status){
            case types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(LoaderIcon, {
                    className: classes.loader
                }));
            case types/* TransactionStatusType.CANCELLED */.g8.CANCELLED:
            case types/* TransactionStatusType.SUCCEED */.g8.SUCCEED:
                var ref;
                if (((ref = transaction.computedPayload) === null || ref === void 0 ? void 0 : ref.name) === 'transfer') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Upload/* UploadIcon */.r, {
                    className: classes.send
                }));
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(InteractionCircle/* InteractionCircleIcon */.w, {
                    className: classes.interaction
                }));
            case types/* TransactionStatusType.FAILED */.g8.FAILED:
            default:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CircleCloseIcon, {
                    style: {
                        fill: 'none'
                    }
                }));
        }
    }, [
        transaction.status,
        (ref2 = transaction.computedPayload) === null || ref2 === void 0 ? void 0 : ref2.name
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionDescription/* RecentTransactionDescription */.q, {
                            ...transaction
                        })
                    }),
                    transaction.status === types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontSize: 12,
                        color: "#FFB915",
                        fontWeight: 600,
                        lineHeight: "16px",
                        children: t('pending')
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.secondaryDesc,
                        children: [
                            transaction.at ? `${(0,format/* default */.Z)(transaction.at, 'MMM dd')}.  ` : null,
                            toAddress ? t('popups_wallet_activity_to_address', {
                                address: (Utils === null || Utils === void 0 ? void 0 : (ref1 = Utils.formatDomainName) === null || ref1 === void 0 ? void 0 : ref1.call(Utils, domain)) || (0,formatter/* formatEthereumAddress */.j8)(toAddress, 4)
                            }) : null
                        ]
                    }),
                    transaction.status === types/* TransactionStatusType.NOT_DEPEND */.g8.NOT_DEPEND ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        mt: 1,
                        children: [
                            !transaction.payloadReplacement ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
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
                    transaction.status === types/* TransactionStatusType.FAILED */.g8.FAILED ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
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
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/index.tsx













const ActivityList_useStyles = (0,src/* makeStyles */.ZL)()({
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
    var ref6;
    const dataSource = (ref6 = transactions === null || transactions === void 0 ? void 0 : transactions.filter((transaction)=>{
        var ref, ref1, ref2, ref3;
        if (!tokenAddress) return true;
        else if ((0,address/* isNativeTokenAddress */.qw)(tokenAddress)) return ((ref = transaction.computedPayload) === null || ref === void 0 ? void 0 : ref.type) === types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER;
        else if (((ref1 = transaction.computedPayload) === null || ref1 === void 0 ? void 0 : ref1.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION && (((ref2 = transaction.computedPayload) === null || ref2 === void 0 ? void 0 : ref2.name) === 'transfer' || ((ref3 = transaction.computedPayload) === null || ref3 === void 0 ? void 0 : ref3.name) === 'transferFrom')) {
            var ref4, ref5;
            return (0,address/* isSameAddress */.Wr)((ref4 = transaction.computedPayload) === null || ref4 === void 0 ? void 0 : (ref5 = ref4._tx) === null || ref5 === void 0 ? void 0 : ref5.to, tokenAddress);
        }
        return false;
    })) !== null && ref6 !== void 0 ? ref6 : [];
    const chainId = (0,useChainId/* useChainId */.xx)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityListUI, {
        dataSource: dataSource,
        chainId: chainId
    }));
});
const ActivityListUI = /*#__PURE__*/ (0,react.memo)(({ dataSource , chainId  })=>{
    const { classes  } = ActivityList_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const [isExpand, setExpand] = (0,react.useState)(!(dataSource.length > 3));
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { setTransaction  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    if (dataSource.length === 0) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.empty,
        children: t('popups_wallet_no_transactions')
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                dense: true,
                className: classes.list,
                children: dataSource.slice(0, !isExpand ? 3 : undefined).map((transaction, index)=>{
                    var ref;
                    const toAddress = getToAddress(transaction.receipt, transaction.computedPayload);
                    var ref7;
                    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: (0,pipes/* resolveTransactionLinkOnExplorer */.z4)(chainId, (ref7 = (ref = transaction.receipt) === null || ref === void 0 ? void 0 : ref.transactionHash) !== null && ref7 !== void 0 ? ref7 : transaction.hash),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        style: {
                            textDecoration: 'none'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityListItem, {
                            transaction: transaction,
                            toAddress: toAddress,
                            onSpeedUpClick: (e)=>{
                                e.preventDefault();
                                setTransaction(transaction);
                                navigate(dist_default()(shared_base_src/* PopupRoutes.ReplaceTransaction */.mZ.ReplaceTransaction, {
                                    type: type/* ReplaceType.SPEED_UP */.u.SPEED_UP
                                }));
                            },
                            onCancelClick: (e)=>{
                                e.preventDefault();
                                setTransaction(transaction);
                                navigate(dist_default()(shared_base_src/* PopupRoutes.ReplaceTransaction */.mZ.ReplaceTransaction, {
                                    type: type/* ReplaceType.CANCEL */.u.CANCEL
                                }));
                            }
                        })
                    }, index));
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
    }));
});
function getToAddress(receipt, computedPayload) {
    if (!computedPayload) return undefined;
    const type = computedPayload.type;
    switch(type){
        case types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER:
            return receipt === null || receipt === void 0 ? void 0 : receipt.to;
        case types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION:
            switch(computedPayload.name){
                case 'transfer':
                case 'transferFrom':
                    var ref;
                    return (ref = computedPayload.parameters) === null || ref === void 0 ? void 0 : ref.to;
                case 'approve':
                default:
                    return receipt === null || receipt === void 0 ? void 0 : receipt.to;
            }
        case types/* EthereumRpcType.CONTRACT_DEPLOYMENT */.Wv.CONTRACT_DEPLOYMENT:
            return receipt === null || receipt === void 0 ? void 0 : receipt.to;
        case types/* EthereumRpcType.CANCEL */.Wv.CANCEL:
        case types/* EthereumRpcType.RETRY */.Wv.RETRY:
        default:
            return undefined;
    }
}


/***/ }),

/***/ 19651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ WalletHeader)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(46098);
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

// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(1968);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.2.2_react@18.0.0-rc.2/node_modules/react-router/index.js
var react_router = __webpack_require__(92186);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/WalletHeader/index.tsx







const useStyles = (0,src/* makeStyles */.ZL)()({
    container: {
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffff'
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
    const navigate = (0,react_router/* useNavigate */.s0)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(NetworkSelector/* NetworkSelector */.k, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingIcon, {
                    className: classes.setting,
                    onClick: ()=>navigate(shared_base_src/* PopupRoutes.SwitchWallet */.mZ.SwitchWallet)
                })
            ]
        })
    }));
});


/***/ }),

/***/ 3359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ WalletInfo)
/* harmony export */ });
/* unused harmony export WalletInfoUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18287);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74491);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43021);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90586);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(12605);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17514);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95367);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92186);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79226);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51596);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22283);
/* harmony import */ var _components_CopyIconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82666);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63151);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    container: {
        padding: '12px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EFF5FF'
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        flex: 1
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
    },
    tick: {
        fontSize: 12,
        stroke: '#77E0B5',
        marginLeft: 4
    }
});
const WalletInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const wallet = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_7__/* .useWallet */ .O)();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .s0)();
    const address = new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .TH)().search).get('address');
    const { value: domain  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_6__/* .useReverseAddress */ .$q)(address !== null && address !== void 0 ? address : wallet === null || wallet === void 0 ? void 0 : wallet.address, _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_6__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
    const { Utils  } = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3State */ .dM)();
    const excludePath = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useMatch */ .bS)(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.WalletSettings */ .mZ.WalletSettings);
    if (!wallet) return null;
    var _name;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WalletInfoUI, {
        name: (_name = wallet.name) !== null && _name !== void 0 ? _name : '',
        address: wallet.address,
        onEditClick: ()=>navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.WalletRename */ .mZ.WalletRename)
        ,
        onSettingClick: ()=>navigate(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .PopupRoutes.WalletSettings */ .mZ.WalletSettings)
        ,
        hideSettings: !!excludePath,
        domain: domain,
        formatDomainName: Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName
    }));
});
const WalletInfoUI = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ name , address , onSettingClick , onEditClick , hideSettings , domain , formatDomainName  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.left,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.walletBackground,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__/* .MaskWalletIcon */ .j, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        className: classes.name,
                                        children: [
                                            name,
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_12__/* .EditIcon */ .d, {
                                                onClick: onEditClick,
                                                className: classes.edit
                                            })
                                        ]
                                    }),
                                    domain && formatDomainName ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                        className: classes.name,
                                        children: formatDomainName(domain)
                                    }) : null
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                className: classes.address,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_3__/* .FormattedAddress */ .Kv, {
                                        address: address,
                                        size: 16,
                                        formatter: _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .formatEthereumAddress */ .j8
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CopyIconButton__WEBPACK_IMPORTED_MODULE_5__/* .CopyIconButton */ .m, {
                                        text: address !== null && address !== void 0 ? address : '',
                                        className: classes.copy
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            !hideSettings ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                color: "primary",
                style: {
                    cursor: 'pointer'
                },
                onClick: onSettingClick
            }) : null
        ]
    }));
});


/***/ }),

/***/ 1130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ WalletContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44737);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5364);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81174);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23491);
/* harmony import */ var _plugins_Wallet_hooks_useRecentTransactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14417);




function useWalletContext() {
    const chainDetailed = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .useChainDetailed */ .K)();
    const erc20Tokens = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useTrustedERC20Tokens */ .d)();
    const { value: assets , loading  } = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useAssets */ .L)(erc20Tokens);
    const { value: transactions  } = (0,_plugins_Wallet_hooks_useRecentTransactions__WEBPACK_IMPORTED_MODULE_1__/* .useRecentTransactions */ .S)({
        receipt: true,
        computedPayload: true
    });
    const [currentToken, setCurrentToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [transaction, setTransaction] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    return {
        currentToken,
        setCurrentToken,
        assets: assets.filter((asset)=>{
            return asset.token.chainId === (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chainId);
        }),
        transactions,
        assetsLoading: loading,
        transaction,
        setTransaction
    };
}
const WalletContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_5__/* .createContainer */ .f)(useWalletContext);


/***/ }),

/***/ 45821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useWalletLockStatus)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28577);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63081);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63423);




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

/***/ 27523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Wallet)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(18287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(39402);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/AlertTitle/AlertTitle.js + 1 modules
var AlertTitle = __webpack_require__(54421);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(74491);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(43021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@6.2.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(24336);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.2.2_react@18.0.0-rc.2/node_modules/react-router/index.js
var react_router = __webpack_require__(92186);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(12605);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(46098);
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

// EXTERNAL MODULE: ./src/extension/popups/components/EnterDashboard/index.tsx
var EnterDashboard = __webpack_require__(30395);
// EXTERNAL MODULE: ./src/extension/popups/components/NetworkSelector/index.tsx
var NetworkSelector = __webpack_require__(1968);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var src_utils = __webpack_require__(93573);
// EXTERNAL MODULE: ./src/extension/popups/hook/useHasPassword.ts
var useHasPassword = __webpack_require__(4034);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/StartUp/index.tsx













const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
                        to: !hasPassword ? shared_base_src/* PopupRoutes.SetPaymentPassword */.mZ.SetPaymentPassword : shared_base_src/* PopupRoutes.ImportWallet */.mZ.ImportWallet,
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EnterDashboard/* EnterDashboard */.P, {})
        ]
    }));
});

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(51596);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(68435);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(40158);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tabs/tabsClasses.js
var tabsClasses = __webpack_require__(85101);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(50585);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Tab/tabClasses.js
var tabClasses = __webpack_require__(21711);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(12463);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/WalletHeader/index.tsx + 1 modules
var WalletHeader = __webpack_require__(19651);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/WalletInfo/index.tsx
var WalletInfo = __webpack_require__(3359);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.72_154258abcf19999eeddd92026c0a2f6c/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(10018);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.72_154258abcf19999eeddd92026c0a2f6c/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(43221);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(66407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(66552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.5.0_daa021359a87c07543264c0518ec626c/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(81396);
// EXTERNAL MODULE: ../icons/general/ArrowRight.tsx
var ArrowRight = __webpack_require__(86368);
// EXTERNAL MODULE: ../shared/src/index.ts + 4 modules
var shared_src = __webpack_require__(95367);
// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/hooks/useWalletContext.ts
var useWalletContext = __webpack_require__(1130);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNaN.js
var lodash_es_isNaN = __webpack_require__(29560);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/components/AssetsList/index.tsx












const AssetsList_useStyles = (0,src/* makeStyles */.ZL)()({
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
        navigate(shared_base_src/* PopupRoutes.TokenDetail */.mZ.TokenDetail);
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
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
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
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                            classes: {
                                symbol: classes.symbol,
                                balance: classes.balance
                            },
                            value: (0,lodash_es_isNaN/* default */.Z)(asset.balance) ? 0 : asset.balance,
                            decimals: (0,lodash_es_isNaN/* default */.Z)(asset.token.decimals) ? 0 : asset.token.decimals,
                            symbol: asset.token.symbol,
                            significant: 6,
                            formatter: formatter/* formatBalance */.az
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowRight/* ArrowRightIcon */.L, {
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

// EXTERNAL MODULE: ./src/extension/popups/pages/Wallet/components/ActivityList/index.tsx + 3 modules
var ActivityList = __webpack_require__(97161);
// EXTERNAL MODULE: ./src/extension/popups/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(75677);
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
        border-radius: 4px 4px 0px 0px;
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssetsUI, {
        onAddTokenClick: ()=>navigate(shared_base_src/* PopupRoutes.AddToken */.mZ.AddToken)
    }));
});
const WalletAssetsUI = /*#__PURE__*/ (0,react.memo)(({ onAddTokenClick  })=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = WalletAssets_useStyles();
    const { assetsLoading  } = (0,unstated_next/* useContainer */.u)(useWalletContext/* WalletContext */.z);
    const [currentTab, setCurrentTab] = (0,react.useState)(WalletTabs.Assets);
    return assetsLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletHeader/* WalletHeader */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletInfo/* WalletInfo */.M, {}),
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
                                height: currentTab === WalletTabs.Assets ? 362 : 0
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
                                height: currentTab === WalletTabs.Activity ? 362 : 0
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActivityList/* ActivityList */.b, {})
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EnterDashboard/* EnterDashboard */.P, {})
        ]
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(63081);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(98086);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallets.ts
var useWallets = __webpack_require__(95219);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(63361);
// EXTERNAL MODULE: ../icons/general/Success.tsx
var Success = __webpack_require__(57214);
// EXTERNAL MODULE: ./src/extension/popups/components/CopyIconButton/index.tsx
var CopyIconButton = __webpack_require__(82666);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(63151);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SelectWallet/WalletItem.tsx









const WalletItem_useStyles = (0,src/* makeStyles */.ZL)()({
    item: {
        padding: 10,
        borderBottom: '1px solid #F7F9FA',
        cursor: 'pointer'
    },
    address: {
        fontSize: 12,
        color: '#1C68F3',
        display: 'flex',
        alignItems: 'center'
    },
    copy: {
        fontSize: 12,
        stroke: '#1C68F3',
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
    const { Utils  } = (0,plugin_infra_src/* useWeb3State */.dM)();
    const { value: domain  } = (0,plugin_infra_src/* useReverseAddress */.$q)(wallet.address, plugin_infra_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
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
                                        domain && (Utils === null || Utils === void 0 ? void 0 : Utils.formatDomainName) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            component: "span",
                                            children: Utils.formatDomainName(domain)
                                        }) : null
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.address,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedAddress */.Kv, {
                                            address: wallet.address,
                                            size: 12,
                                            formatter: formatter/* formatEthereumAddress */.j8
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
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/SelectWallet/index.tsx












const SelectWallet_useStyles = (0,src/* makeStyles */.ZL)()({
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
        marginRight: 10
    },
    list: {
        backgroundColor: '#ffffff',
        padding: 0,
        height: 'calc(100vh - 168px)',
        overflow: 'auto'
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
    }
});
const SelectWallet = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,src_utils/* useI18N */.M1)();
    const { classes  } = SelectWallet_useStyles();
    const location = (0,react_router/* useLocation */.TH)();
    const wallet = (0,useAccount/* useAccount */.m)();
    const wallets = (0,useWallets/* useWallets */.r)(types/* ProviderType.MaskWallet */.lP.MaskWallet);
    const [selected, setSelected] = (0,react.useState)(wallet);
    const search = new URLSearchParams(location.search);
    const chainIdSearched = search.get('chainId');
    const chainId = chainIdSearched ? Number.parseInt(chainIdSearched, 10) : undefined;
    // Swap page also uses SelectWallet, but changing wallet in Swap page
    // should not affect other pages, for example, dashboard.
    // So we make Swap page 'internal' for popups
    const isInternal = search.get('internal');
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    const handleCancel = (0,react.useCallback)(async ()=>{
        await messages/* WalletRPC.selectAccount */.V.selectAccount([], types/* ChainId.Mainnet */.a_.Mainnet);
        await service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
    }, []);
    const handleConfirm = (0,react.useCallback)(async ()=>{
        await messages/* WalletRPC.updateMaskAccount */.V.updateMaskAccount({
            chainId,
            account: selected
        });
        if (settings/* currentProviderSettings.value */.t1.value === types/* ProviderType.MaskWallet */.lP.MaskWallet || !isInternal) {
            await messages/* WalletRPC.updateAccount */.V.updateAccount({
                chainId,
                account: selected,
                providerType: types/* ProviderType.MaskWallet */.lP.MaskWallet
            });
        }
        if (chainId) {
            await messages/* WalletRPC.selectAccount */.V.selectAccount([
                selected
            ], chainId);
        }
        return service/* default.Helper.removePopupWindow */.ZP.Helper.removePopupWindow();
    }, [
        chainId,
        selected,
        isInternal
    ]);
    (0,react.useEffect)(()=>{
        var ref;
        var ref1;
        if (!selected && wallets.length) setSelected((ref1 = (ref = (0,head/* default */.Z)(wallets)) === null || ref === void 0 ? void 0 : ref.address) !== null && ref1 !== void 0 ? ref1 : '');
    }, [
        selected,
        wallets
    ]);
    return chainId && chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.header,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.network,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.iconWrapper
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    children: (0,chainDetailed/* getNetworkName */.pp)(chainId)
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        dense: true,
                        className: classes.list,
                        children: wallets.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletItem, {
                                wallet: item,
                                onClick: ()=>setSelected(item.address)
                                ,
                                isSelected: (0,address/* isSameAddress */.Wr)(item.address, selected)
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
var useWalletLockStatus = __webpack_require__(45821);
;// CONCATENATED MODULE: ./src/extension/popups/pages/Wallet/index.tsx















const ImportWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(9759), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(5682)]).then(__webpack_require__.bind(__webpack_require__, 76607))
);
const AddDeriveWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2495)]).then(__webpack_require__.bind(__webpack_require__, 92495))
);
const WalletSettings = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9839).then(__webpack_require__.bind(__webpack_require__, 19839))
);
const WalletRename = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(3896)]).then(__webpack_require__.bind(__webpack_require__, 23896))
);
const DeleteWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9113).then(__webpack_require__.bind(__webpack_require__, 9113))
);
const CreateWallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(4776)]).then(__webpack_require__.bind(__webpack_require__, 74776))
);
const SwitchWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 8489).then(__webpack_require__.bind(__webpack_require__, 68489))
);
const BackupWallet = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 834).then(__webpack_require__.bind(__webpack_require__, 834))
);
const AddToken = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5595).then(__webpack_require__.bind(__webpack_require__, 15595))
);
const TokenDetail = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(405), __webpack_require__.e(212)]).then(__webpack_require__.bind(__webpack_require__, 20212))
);
const SignRequest = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 7881).then(__webpack_require__.bind(__webpack_require__, 87881))
);
const GasSetting = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(3030)]).then(__webpack_require__.bind(__webpack_require__, 43030))
);
const Transfer = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(7871), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(405), __webpack_require__.e(8788)]).then(__webpack_require__.bind(__webpack_require__, 88788))
);
const ContractInteraction = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 5798).then(__webpack_require__.bind(__webpack_require__, 5798))
);
const Unlock = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4325).then(__webpack_require__.bind(__webpack_require__, 64325))
);
const SetPaymentPassword = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(7668)]).then(__webpack_require__.bind(__webpack_require__, 37668))
);
const WalletRecovery = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(6655)]).then(__webpack_require__.bind(__webpack_require__, 26655))
);
const LegacyWalletRecovery = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(1102)]).then(__webpack_require__.bind(__webpack_require__, 81102))
);
const ReplaceTransaction = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6230), __webpack_require__.e(2598), __webpack_require__.e(1754)]).then(__webpack_require__.bind(__webpack_require__, 47905))
);
const r = (0,shared_base_src/* relativeRouteOf */.zD)(shared_base_src/* PopupRoutes.Wallet */.mZ.Wallet);
function Wallet() {
    const wallet = (0,useWallet/* useWallet */.O)();
    const location = (0,react_router/* useLocation */.TH)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { isLocked , loading: getLockStatusLoading  } = (0,useWalletLockStatus/* useWalletLockStatus */.f)();
    const { loading , retry  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if ([
            shared_base_src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction,
            shared_base_src/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest,
            shared_base_src/* PopupRoutes.GasSetting */.mZ.GasSetting,
            shared_base_src/* PopupRoutes.Unlock */.mZ.Unlock, 
        ].some((item)=>item === location.pathname
        )) return;
        const payload = await messages/* WalletRPC.topUnconfirmedRequest */.V.topUnconfirmedRequest();
        if (!payload) return;
        const computedPayload = await service/* default.Ethereum.getComputedPayload */.ZP.Ethereum.getComputedPayload(payload);
        const value = {
            payload,
            computedPayload
        };
        if (value === null || value === void 0 ? void 0 : value.computedPayload) {
            switch(value.computedPayload.type){
                case types/* EthereumRpcType.SIGN */.Wv.SIGN:
                case types/* EthereumRpcType.SIGN_TYPED_DATA */.Wv.SIGN_TYPED_DATA:
                    navigate(shared_base_src/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest, {
                        replace: true
                    });
                    break;
                case types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION:
                case types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER:
                    navigate(shared_base_src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction, {
                        replace: true
                    });
                    break;
                default:
                    break;
            }
        }
    }, [
        location.search,
        location.pathname
    ]);
    (0,react.useEffect)(()=>{
        if (!(isLocked && !getLockStatusLoading && location.pathname !== shared_base_src/* PopupRoutes.Unlock */.mZ.Unlock)) return;
        navigate(dist_default()(shared_base_src/* PopupRoutes.Unlock */.mZ.Unlock, {
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(useWalletContext/* WalletContext.Provider */.z.Provider, {
            children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: "*",
                        element: !wallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletStartUp, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssets, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRecovery, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.LegacyWalletRecovered */.mZ.LegacyWalletRecovered),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(LegacyWalletRecovery, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.ImportWallet */.mZ.ImportWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ImportWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.AddDeriveWallet */.mZ.AddDeriveWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddDeriveWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.WalletSettings */.mZ.WalletSettings),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletSettings, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.WalletRename */.mZ.WalletRename),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletRename, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.DeleteWallet */.mZ.DeleteWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(DeleteWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.CreateWallet */.mZ.CreateWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.SwitchWallet */.mZ.SwitchWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwitchWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.BackupWallet */.mZ.BackupWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.AddToken */.mZ.AddToken),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddToken, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignRequest, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.GasSetting */.mZ.GasSetting),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(GasSetting, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.TokenDetail */.mZ.TokenDetail),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenDetail, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.Transfer */.mZ.Transfer),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Transfer, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.ContractInteraction */.mZ.ContractInteraction),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContractInteraction, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.SelectWallet */.mZ.SelectWallet),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet_SelectWallet, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.Unlock */.mZ.Unlock),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Unlock, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.SetPaymentPassword */.mZ.SetPaymentPassword),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(SetPaymentPassword, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: r(shared_base_src/* PopupRoutes.ReplaceTransaction */.mZ.ReplaceTransaction),
                        element: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReplaceTransaction, {})
                    })
                ]
            })
        })
    }));
};


/***/ }),

/***/ 74275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ TransferAddressError),
/* harmony export */   "u": () => (/* binding */ ReplaceType)
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


/***/ }),

/***/ 85066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* binding */ RecentTransactionDescription)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(80955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 2 modules
var useERC20TokenDetailed = __webpack_require__(14754);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var src = __webpack_require__(26618);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(66580);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(93573);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getRedpacketDescription.tsx



function getRedpacketDescription({ name , address , chainId  }, computedPayload) {
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,constants/* getRedPacketConstants */.GV)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, HAPPY_RED_PACKET_ADDRESS_V4)) return undefined;
    switch(name){
        case 'create_red_packet':
            var ref, ref1;
            var ref2;
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CreateRedpacketDescription, {
                tokenAddress: (ref2 = computedPayload === null || computedPayload === void 0 ? void 0 : (ref = computedPayload.parameters) === null || ref === void 0 ? void 0 : ref._token_addr) !== null && ref2 !== void 0 ? ref2 : '',
                tokenAmount: computedPayload === null || computedPayload === void 0 ? void 0 : (ref1 = computedPayload.parameters) === null || ref1 === void 0 ? void 0 : ref1._total_tokens
            }));
        default:
            return undefined;
    }
}
function CreateRedpacketDescription(props) {
    const { tokenAddress , tokenAmount  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { value: nativeToken  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const { value: tokenDetailed  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokenAddress);
    const token = (0,utils_address/* isNativeTokenAddress */.qw)(tokenAddress) ? nativeToken : tokenDetailed;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: token && tokenAddress ? t('plugin_red_packet_create_with_token', {
            amount: (0,formatter/* formatBalance */.az)(tokenAmount, token.decimals),
            symbol: token.symbol
        }) : t('plugin_red_packet_create')
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getITO_Description.tsx



function getITO_Description({ name , address , chainId  }, computedPayload) {
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* getITOConstants */.af)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, ITO2_CONTRACT_ADDRESS)) return undefined;
    switch(name){
        case 'fill_pool':
            var ref, ref1;
            var ref2;
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(FillPoolDescription, {
                tokenAddress: (ref2 = computedPayload === null || computedPayload === void 0 ? void 0 : (ref = computedPayload.parameters) === null || ref === void 0 ? void 0 : ref._token_addr) !== null && ref2 !== void 0 ? ref2 : '',
                tokenAmount: computedPayload === null || computedPayload === void 0 ? void 0 : (ref1 = computedPayload.parameters) === null || ref1 === void 0 ? void 0 : ref1._total_tokens
            }));
        default:
            return undefined;
    }
}
function FillPoolDescription(props) {
    const { tokenAddress , tokenAmount  } = props;
    const { value: token  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokenAddress);
    const { t  } = (0,utils/* useI18N */.M1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: token && tokenAddress ? t('plugin_ito_transaction_dialog_summary', {
            amount: (0,formatter/* formatBalance */.az)(tokenAmount, token.decimals),
            symbol: token.symbol
        }) : t('plugin_ito_transaction_dialog_summary_with_no_token')
    }));
}

// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(28331);
;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/getNFTRedpacketDescription.tsx


function getNFTRedpacketDescription({ name , address , chainId  }, computedPayload) {
    const { RED_PACKET_NFT_ADDRESS  } = (0,constants/* getNftRedPacketConstants */.pS)(chainId);
    if (!(0,utils_address/* isSameAddress */.Wr)(address, RED_PACKET_NFT_ADDRESS)) return undefined;
    switch(name){
        case 'create_red_packet':
            return locales_legacy/* i18n.t */.a.t('plugin_nft_red_packet_create');
        default:
            return undefined;
    }
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/contractMethodDescription/index.ts



function getContractMethodDescription(contractMethodInfo, computedPayload) {
    var ref, ref1;
    return (ref1 = (ref = getRedpacketDescription(contractMethodInfo, computedPayload)) !== null && ref !== void 0 ? ref : getITO_Description(contractMethodInfo, computedPayload)) !== null && ref1 !== void 0 ? ref1 : getNFTRedpacketDescription(contractMethodInfo, computedPayload);
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/SNSAdaptor/WalletStatusDialog/TransactionDescription.tsx





function getTokenAmountDescription(amount = '0', tokenDetailed, negative) {
    var ref;
    const symbol = negative ? '- ' : '';
    var ref1, ref2;
    const value = (0,src/* pow10 */.wA)(9 + ((ref1 = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals) !== null && ref1 !== void 0 ? ref1 : 18)).isGreaterThanOrEqualTo(amount) ? (0,formatter/* formatBalance */.az)(amount, (ref2 = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals) !== null && ref2 !== void 0 ? ref2 : 0, 4) : 'infinite';
    const token = tokenDetailed === null || tokenDetailed === void 0 ? void 0 : (ref = tokenDetailed.symbol) === null || ref === void 0 ? void 0 : ref.trim();
    return `${symbol}${value} ${token}`;
}
function getTransactionDescription(chainId, nativeTokenDetailed, tokenDetailed, computedPayload) {
    if (!computedPayload) return;
    const type = computedPayload.type;
    switch(type){
        case types/* EthereumRpcType.SEND_ETHER */.Wv.SEND_ETHER:
            return `Send token -${getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed)}`;
        case types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION:
            switch(computedPayload.name){
                case 'approve':
                    var ref;
                    return `Approve spend ${getTokenAmountDescription((ref = computedPayload.parameters) === null || ref === void 0 ? void 0 : ref.value, tokenDetailed)}`;
                case 'transfer':
                case 'transferFrom':
                    var ref3;
                    return `Transfer token ${getTokenAmountDescription((ref3 = computedPayload.parameters) === null || ref3 === void 0 ? void 0 : ref3.value, tokenDetailed, true)}`;
                case 'swapExactETHForTokens':
                    const inputAmount = (0,formatter/* formatBalance */.az)(computedPayload._tx.value, nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.decimals, 2);
                    const outputAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals, 2);
                    return `Swap ${inputAmount} ${nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.symbol} for ${outputAmount} ${tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol}`;
                case 'swapExactTokensForETH':
                    const inAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountIn, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals, 2);
                    const outAmount = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.decimals, 2);
                    return `Swap ${inAmount} ${tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol} for ${outAmount} ${nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.symbol}`;
                case 'swapExactTokensForTokens':
                    const amountIn = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountIn, nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.decimals, 2);
                    const amountOut = (0,formatter/* formatBalance */.az)(computedPayload.parameters.amountOutMin, tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.decimals, 2);
                    return `Swap ${amountIn} ${nativeTokenDetailed === null || nativeTokenDetailed === void 0 ? void 0 : nativeTokenDetailed.symbol} for ${amountOut} ${tokenDetailed === null || tokenDetailed === void 0 ? void 0 : tokenDetailed.symbol}`;
                default:
                    var _name, _to;
                    const description = getContractMethodDescription({
                        name: (_name = computedPayload.name) !== null && _name !== void 0 ? _name : '',
                        chainId,
                        address: (_to = computedPayload._tx.to) !== null && _to !== void 0 ? _to : ''
                    }, computedPayload);
                    var _name1;
                    return description !== null && description !== void 0 ? description : `${(_name1 = computedPayload.name) !== null && _name1 !== void 0 ? _name1 : 'Contract Interaction'} ${computedPayload._tx.value ? getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed, true) : ''}`;
            }
        case types/* EthereumRpcType.CONTRACT_DEPLOYMENT */.Wv.CONTRACT_DEPLOYMENT:
            return `Contract Deployment ${getTokenAmountDescription(computedPayload._tx.value, nativeTokenDetailed, true)}`;
        case types/* EthereumRpcType.CANCEL */.Wv.CANCEL:
            return 'Cancel Transaction';
        case types/* EthereumRpcType.RETRY */.Wv.RETRY:
            return 'Retry Transaction';
        default:
            return;
    }
}
function RecentTransactionDescription(props) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { hash , computedPayload  } = props;
    const { loading: getNativeTokenLoading , value: nativeTokenDetailed  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    let inputTokenAddress = '';
    let tokenAddress = '';
    if ((computedPayload === null || computedPayload === void 0 ? void 0 : computedPayload.type) === types/* EthereumRpcType.CONTRACT_INTERACTION */.Wv.CONTRACT_INTERACTION) {
        switch(computedPayload.name){
            case 'approve':
            case 'transfer':
            case 'transferFrom':
                tokenAddress = computedPayload._tx.to;
                break;
            case 'swapExactETHForTokens':
                tokenAddress = (0,last/* default */.Z)(computedPayload.parameters.path);
                break;
            case 'swapExactTokensForETH':
                tokenAddress = (0,head/* default */.Z)(computedPayload.parameters.path);
                break;
            case 'swapExactTokensForTokens':
                inputTokenAddress = (0,head/* default */.Z)(computedPayload.parameters.path);
                tokenAddress = (0,last/* default */.Z)(computedPayload.parameters.path);
                break;
            case 'create_red_packet':
                tokenAddress = computedPayload.parameters._token_addr;
                break;
            default:
                tokenAddress = '';
        }
    }
    const { loading: getInputERC20TokenLoading , value: inputTokenDetailed  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(inputTokenAddress);
    const { loading: getERC20TokenLoading , value: tokenDetailed  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(tokenAddress);
    var ref;
    return !getNativeTokenLoading && !getERC20TokenLoading && !getInputERC20TokenLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        children: (ref = getTransactionDescription(chainId, inputTokenAddress ? inputTokenDetailed : nativeTokenDetailed, tokenDetailed, computedPayload)) !== null && ref !== void 0 ? ref : hash
    }) : null;
}


/***/ }),

/***/ 14417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useRecentTransactions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63423);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28577);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98086);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63541);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63081);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89987);





function useRecentTransactions(options) {
    const account = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)();
    const chainId = (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)();
    const result = (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(async ()=>{
        if (!account) return [];
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.getRecentTransactions */ .V.getRecentTransactions(chainId, account, options);
    }, [
        chainId,
        account,
        JSON.stringify(options)
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionStateUpdated.on */ .R$.events.transactionStateUpdated.on(result.retry)
    , [
        result.retry
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_2__/* .WalletMessages.events.transactionsUpdated.on */ .R$.events.transactionsUpdated.on(result.retry)
    , [
        result.retry
    ]);
    return result;
}


/***/ }),

/***/ 23491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* binding */ useAssets)
});

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(51596);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(80955);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssetsFromChain.ts + 2 modules
var useAssetsFromChain = __webpack_require__(25632);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAssetsFromProvider.ts
var useAssetsFromProvider = __webpack_require__(44167);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../web3-shared/evm/utils/misc.ts
var misc = __webpack_require__(7454);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(22283);
// EXTERNAL MODULE: ../web3-shared/evm/utils/token.ts
var token = __webpack_require__(11315);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAssetsMerged.ts





/**
 * Merge multiple token lists into one which sorted by balance.
 * The order of result values is determined by the order they occur in the array.
 * @param listOfTokens
 */ function useAssetsMerged(...listOfTokens) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    const mergedAssets = (0,react.useMemo)(()=>{
        if (!NATIVE_TOKEN_ADDRESS) return misc/* EMPTY_LIST */.r;
        return (0,uniqBy/* default */.Z)(listOfTokens.flatMap((x)=>x
        ), (x)=>`${x.token.chainId}_${(0,formatter/* formatEthereumAddress */.j8)(x.token.address)}`
        ).sort((0,token/* makeSortAssertFn */.Si)(chainId));
    }, [
        NATIVE_TOKEN_ADDRESS,
        ...listOfTokens,
        chainId
    ]);
    return mergedAssets;
}

;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useAssets.ts







function useAssets(tokens, chainId) {
    const wallet = (0,useWallet/* useWallet */.O)();
    const { value: nativeTokenDetailed , loading: nativeTokenDetailedLoading , error: nativeTokenDetailedError , retry: retryNativeTokenDetailed ,  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)(chainId === 'all' ? undefined : chainId);
    const { value: assetsFromChain = misc/* EMPTY_LIST */.r , loading: assetsDetailedChainLoading , error: assetsDetailedChainError , retry: retryAssetsDetailedChain ,  } = (0,useAssetsFromChain/* useAssetsFromChain */.R)(nativeTokenDetailed ? [
        nativeTokenDetailed,
        ...tokens
    ] : tokens);
    const { value: assetsFromProvider = misc/* EMPTY_LIST */.r , loading: assetsDetailedProviderLoading , error: assetsDetailedProviderError , retry: retryAssetsDetailedDebank ,  } = (0,useAssetsFromProvider/* useAssetsFromProvider */.u)(chainId);
    const detailedTokensRetry = (0,react.useCallback)(()=>{
        retryNativeTokenDetailed();
        retryAssetsDetailedChain();
        retryAssetsDetailedDebank();
    }, [
        retryNativeTokenDetailed,
        retryAssetsDetailedChain,
        retryAssetsDetailedDebank
    ]);
    const matchedAssetsFromChain = (0,react.useMemo)(()=>assetsFromChain.filter((x)=>!chainId || chainId === 'all' || x.token.chainId === chainId
        )
    , [
        assetsFromChain,
        chainId
    ]);
    const assetsDetailed = useAssetsMerged(assetsFromProvider, matchedAssetsFromChain);
    const assets = (0,react.useMemo)(()=>{
        return assetsDetailed.filter((x)=>{
            return !(wallet === null || wallet === void 0 ? void 0 : wallet.erc20_token_blacklist.has((0,formatter/* formatEthereumAddress */.j8)(x.token.address)));
        });
    }, [
        assetsDetailed,
        wallet === null || wallet === void 0 ? void 0 : wallet.erc20_token_blacklist
    ]);
    return {
        value: assets,
        error: nativeTokenDetailedError || assetsDetailedChainError || assetsDetailedProviderError,
        loading: nativeTokenDetailedLoading || assetsDetailedChainLoading || assetsDetailedProviderLoading,
        retry: detailedTokensRetry
    };
}


/***/ }),

/***/ 95219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98086);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67937);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95130);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66580);




function useWallets(type) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const { providerType , wallets  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3StateContext */ .N9)();
    if (type === _types__WEBPACK_IMPORTED_MODULE_2__/* .ProviderType.MaskWallet */ .lP.MaskWallet) return wallets.filter((x)=>x.hasStoredKeyInfo
    );
    if (type === providerType) return wallets.filter((0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .currySameAddress */ .DC)(account));
    if (type) return [];
    return wallets;
}


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