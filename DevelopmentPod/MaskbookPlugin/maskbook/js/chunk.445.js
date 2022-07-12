(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[445],{

/***/ 98648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ MinInt256),
/* harmony export */   "Bz": () => (/* binding */ MaxUint256),
/* harmony export */   "Ce": () => (/* binding */ WeiPerEther),
/* harmony export */   "PS": () => (/* binding */ MaxInt256),
/* harmony export */   "Py": () => (/* binding */ Two),
/* harmony export */   "_Y": () => (/* binding */ Zero),
/* harmony export */   "fh": () => (/* binding */ One),
/* harmony export */   "tL": () => (/* binding */ NegativeOne)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6619);

const NegativeOne = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(-1));
const Zero = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(0));
const One = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(1));
const Two = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(2));
const WeiPerEther = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("1000000000000000000"));
const MaxUint256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
const MinInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("-0x8000000000000000000000000000000000000000000000000000000000000000"));
const MaxInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));

//# sourceMappingURL=bignumbers.js.map

/***/ }),

/***/ 9114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ HashZero)
/* harmony export */ });
const HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000";
//# sourceMappingURL=hashes.js.map

/***/ }),

/***/ 27930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dk": () => (/* binding */ Description),
  "uj": () => (/* binding */ checkProperties),
  "p$": () => (/* binding */ deepCopy),
  "zG": () => (/* binding */ defineReadOnly),
  "tu": () => (/* binding */ getStatic),
  "mE": () => (/* binding */ resolveProperties),
  "DC": () => (/* binding */ shallowCopy)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/_version.js
const version = "properties/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const logger = new lib_esm/* Logger */.Yd(version);
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false,
    });
}
// Crawl up the constructor chain to find a static method
function getStatic(ctor, key) {
    for (let i = 0; i < 32; i++) {
        if (ctor[key]) {
            return ctor[key];
        }
        if (!ctor.prototype || typeof (ctor.prototype) !== "object") {
            break;
        }
        ctor = Object.getPrototypeOf(ctor.prototype).constructor;
    }
    return null;
}
function resolveProperties(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = Object.keys(object).map((key) => {
            const value = object[key];
            return Promise.resolve(value).then((v) => ({ key: key, value: v }));
        });
        const results = yield Promise.all(promises);
        return results.reduce((accum, result) => {
            accum[(result.key)] = result.value;
            return accum;
        }, {});
    });
}
function checkProperties(object, properties) {
    if (!object || typeof (object) !== "object") {
        logger.throwArgumentError("invalid object", "object", object);
    }
    Object.keys(object).forEach((key) => {
        if (!properties[key]) {
            logger.throwArgumentError("invalid object key - " + key, "transaction:" + key, object);
        }
    });
}
function shallowCopy(object) {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
    }
    return result;
}
const opaque = { bigint: true, boolean: true, "function": true, number: true, string: true };
function _isFrozen(object) {
    // Opaque objects are not mutable, so safe to copy by assignment
    if (object === undefined || object === null || opaque[typeof (object)]) {
        return true;
    }
    if (Array.isArray(object) || typeof (object) === "object") {
        if (!Object.isFrozen(object)) {
            return false;
        }
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            if (!_isFrozen(object[keys[i]])) {
                return false;
            }
        }
        return true;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
// Returns a new copy of object, such that no properties may be replaced.
// New properties may be added only to objects.
function _deepCopy(object) {
    if (_isFrozen(object)) {
        return object;
    }
    // Arrays are mutable, so we need to create a copy
    if (Array.isArray(object)) {
        return Object.freeze(object.map((item) => deepCopy(item)));
    }
    if (typeof (object) === "object") {
        const result = {};
        for (const key in object) {
            const value = object[key];
            if (value === undefined) {
                continue;
            }
            defineReadOnly(result, key, deepCopy(value));
        }
        return result;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
function deepCopy(object) {
    return _deepCopy(object);
}
class Description {
    constructor(info) {
        for (const key in info) {
            this[key] = deepCopy(info[key]);
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bM": () => (/* binding */ formatUnits),
  "vz": () => (/* binding */ parseUnits)
});

// UNUSED EXPORTS: commify, formatEther, parseEther

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.6.0/node_modules/@ethersproject/bignumber/lib.esm/fixednumber.js
var fixednumber = __webpack_require__(24790);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/_version.js
const version = "units/5.6.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/index.js




const logger = new lib_esm/* Logger */.Yd(version);
const names = [
    "wei",
    "kwei",
    "mwei",
    "gwei",
    "szabo",
    "finney",
    "ether",
];
// Some environments have issues with RegEx that contain back-tracking, so we cannot
// use them.
function commify(value) {
    const comps = String(value).split(".");
    if (comps.length > 2 || !comps[0].match(/^-?[0-9]*$/) || (comps[1] && !comps[1].match(/^[0-9]*$/)) || value === "." || value === "-.") {
        logger.throwArgumentError("invalid value", "value", value);
    }
    // Make sure we have at least one whole digit (0 if none)
    let whole = comps[0];
    let negative = "";
    if (whole.substring(0, 1) === "-") {
        negative = "-";
        whole = whole.substring(1);
    }
    // Make sure we have at least 1 whole digit with no leading zeros
    while (whole.substring(0, 1) === "0") {
        whole = whole.substring(1);
    }
    if (whole === "") {
        whole = "0";
    }
    let suffix = "";
    if (comps.length === 2) {
        suffix = "." + (comps[1] || "0");
    }
    while (suffix.length > 2 && suffix[suffix.length - 1] === "0") {
        suffix = suffix.substring(0, suffix.length - 1);
    }
    const formatted = [];
    while (whole.length) {
        if (whole.length <= 3) {
            formatted.unshift(whole);
            break;
        }
        else {
            const index = whole.length - 3;
            formatted.unshift(whole.substring(index));
            whole = whole.substring(0, index);
        }
    }
    return negative + formatted.join(",") + suffix;
}
function formatUnits(value, unitName) {
    if (typeof (unitName) === "string") {
        const index = names.indexOf(unitName);
        if (index !== -1) {
            unitName = 3 * index;
        }
    }
    return (0,fixednumber/* formatFixed */.S5)(value, (unitName != null) ? unitName : 18);
}
function parseUnits(value, unitName) {
    if (typeof (value) !== "string") {
        logger.throwArgumentError("value must be a string", "value", value);
    }
    if (typeof (unitName) === "string") {
        const index = names.indexOf(unitName);
        if (index !== -1) {
            unitName = 3 * index;
        }
    }
    return (0,fixednumber/* parseFixed */.Ox)(value, (unitName != null) ? unitName : 18);
}
function formatEther(wei) {
    return formatUnits(wei, 18);
}
function parseEther(ether) {
    return parseUnits(ether, 18);
}
//# sourceMappingURL=index.js.map

/***/ }),

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

/***/ 58277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(43147);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 69480:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(58277)();
}


/***/ }),

/***/ 43147:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 47061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ PluginWalletConnectIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const PluginWalletConnectIcon = (0,_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('PluginWalletConnectIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.15015 7.36221C4.15015 7.03084 4.41878 6.76221 4.75015 6.76221H9.25015C9.58152 6.76221 9.85015 7.03084 9.85015 7.36221C9.85015 7.69358 9.58152 7.96221 9.25015 7.96221H4.75015C4.41878 7.96221 4.15015 7.69358 4.15015 7.36221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.76765 1.7293C2.56902 1.7293 1.60015 2.69817 1.60015 3.8968V7.36179C1.60015 7.69317 1.33152 7.96179 1.00015 7.96179C0.668776 7.96179 0.400146 7.69317 0.400146 7.36179V3.8968C0.400146 2.03543 1.90628 0.529297 3.76765 0.529297H7.98264C8.86881 0.529297 9.70567 0.805241 10.3308 1.34136C10.9644 1.8848 11.3501 2.67182 11.3501 3.61179C11.3501 3.94317 11.0815 4.2118 10.7501 4.2118C10.4188 4.2118 10.1501 3.94317 10.1501 3.61179C10.1501 3.02177 9.91716 2.56754 9.54953 2.25223C9.17337 1.9296 8.62648 1.7293 7.98264 1.7293H3.76765Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M4.00015 4.21221C2.67402 4.21221 1.60015 5.28608 1.60015 6.61221V11.8622C1.60015 13.1883 2.67402 14.2622 4.00015 14.2622H11.5001C12.8263 14.2622 13.9001 13.1883 13.9001 11.8622V11.3747H13.8027C12.8621 11.3747 11.896 10.7961 11.6257 9.79044L11.6249 9.78738L11.6249 9.78738C11.4193 9.00591 11.6636 8.23162 12.1873 7.72391C12.5779 7.32659 13.1128 7.09967 13.6901 7.09967H13.9001V6.61221C13.9001 5.29358 12.8188 4.21221 11.5001 4.21221H4.00015ZM0.400146 6.61221C0.400146 4.62334 2.01128 3.01221 4.00015 3.01221H11.5001C13.4815 3.01221 15.1001 4.63084 15.1001 6.61221V7.69967C15.1001 8.03104 14.8315 8.29967 14.5001 8.29967H13.6901C13.4309 8.29967 13.2038 8.40006 13.04 8.56827C13.0353 8.5731 13.0305 8.57786 13.0257 8.58253C12.8047 8.79464 12.6923 9.12611 12.785 9.48043C12.8903 9.86908 13.3039 10.1747 13.8027 10.1747H14.5001C14.8315 10.1747 15.1001 10.4433 15.1001 10.7747V11.8622C15.1001 13.8511 13.489 15.4622 11.5001 15.4622H4.00015C2.01128 15.4622 0.400146 13.8511 0.400146 11.8622V6.61221Z",
            fill: "white"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.6903 8.29912C13.4311 8.29912 13.204 8.39951 13.0402 8.56772L13.0294 8.57849C12.8376 8.76576 12.7307 9.03208 12.7576 9.31477L12.7583 9.32182L12.7583 9.32183C12.7961 9.77582 13.235 10.1741 13.7803 10.1741H15.2278C15.3278 10.1741 15.4003 10.094 15.4003 10.0091V8.46414C15.4003 8.37932 15.3278 8.29912 15.2278 8.29912H13.6903ZM12.1858 7.72513C12.5765 7.32671 13.1122 7.09912 13.6903 7.09912H15.2278C15.9829 7.09912 16.6003 7.70895 16.6003 8.46414V10.0091C16.6003 10.7643 15.9829 11.3741 15.2278 11.3741H13.7803C12.7067 11.3741 11.6617 10.5891 11.5627 9.42502C11.5011 8.76677 11.7517 8.1519 12.1858 7.72513Z",
            fill: "white"
        })
    ]
}), '0 0 17 16');


/***/ }),

/***/ 23397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FB": () => (/* binding */ useLastRecognizedIdentity),
/* harmony export */   "Ol": () => (/* binding */ useCurrentLinkedPersona),
/* harmony export */   "Ud": () => (/* binding */ useCurrentIdentity),
/* harmony export */   "fb": () => (/* binding */ useCurrentVisitingIdentity)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88967);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80226);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82192);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14257);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23587);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70981);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78778);







const default_ = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef({}, lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z);
function useLastRecognizedIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_);
}
function useCurrentVisitingIdentity() {
    return (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.currentVisitingIdentityProvider */ .LM.collecting.currentVisitingIdentityProvider?.recognized || default_);
}
function useCurrentIdentity() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(CurrentIdentitySubscription);
}
function useCurrentLinkedPersona() {
    const currentIdentity = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(CurrentIdentitySubscription);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(async ()=>{
        if (!currentIdentity?.linkedPersona) return;
        return _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Identity.queryPersona */ .ZP.Identity.queryPersona(currentIdentity.linkedPersona);
    }, [
        currentIdentity?.linkedPersona
    ]);
}
const CurrentIdentitySubscription = {
    getCurrentValue () {
        const all = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .globalUIState.profiles.value */ .EJ.profiles.value;
        const current = (_social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized || default_).value.identifier;
        return all.find((i)=>i.identifier === current
        ) || all[0];
    },
    subscribe (sub) {
        const a = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .globalUIState.profiles.addListener */ .EJ.profiles.addListener(sub);
        const b = _social_network__WEBPACK_IMPORTED_MODULE_1__/* .activatedSocialNetworkUI.collecting.identityProvider */ .LM.collecting.identityProvider?.recognized.addListener(sub);
        return ()=>[
                a(),
                b?.()
            ]
        ;
    }
};


/***/ }),

/***/ 75892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../shared/src/index.ts + 2 modules
var src = __webpack_require__(77818);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ./src/plugins/Referral/base.ts + 7 modules
var base = __webpack_require__(6681);
// EXTERNAL MODULE: ./src/plugins/Referral/helpers/index.tsx + 2 modules
var helpers = __webpack_require__(60184);
// EXTERNAL MODULE: ./src/plugins/Referral/constants.ts
var constants = __webpack_require__(97300);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(44451);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(80226);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(84026);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(85792);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(62266);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.9_nlaekqjbpikw4agfyzvj2iejnm/node_modules/react-i18next/dist/es/useTranslation.js
var useTranslation = __webpack_require__(43133);
;// CONCATENATED MODULE: ./src/plugins/Referral/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "com.maskbook.referral", ...props })
function useI18N() {
    const { t } = (0,useTranslation/* useTranslation */.$)("com.maskbook.referral")
    return (0,react.useMemo)(
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
const Translate = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ./src/plugins/Referral/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts


// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(23397);
// EXTERNAL MODULE: ./src/plugins/Trader/messages.ts
var messages = __webpack_require__(38329);
// EXTERNAL MODULE: ./src/plugins/Referral/messages.ts
var Referral_messages = __webpack_require__(72132);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+strings@5.6.0/node_modules/@ethersproject/strings/lib.esm/bytes32.js
var bytes32 = __webpack_require__(3845);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/utils/proofOfRecommendation.ts



function parseError(error) {
    switch(error.message){
        case constants/* errors.rpc */.R0.rpc:
            return {
                ...error,
                message: 'Oracle is not responding at the moment. Please try in a few minutes.'
            };
        case constants/* errors.referrerInvalid */.R0.referrerInvalid:
            return {
                ...error,
                message: 'Referrer cannot be the same as Buyer.'
            };
        default:
            return error;
    }
}
function makePreEip721ProofOfRecommendationOrigin(signer, token, time, router) {
    return [
        'Sign this message to register for rewards.',
        '',
        "This won't cost you any Ether.",
        '',
        `Signer: ${signer.toLowerCase()}`,
        `Token: ${token.toLowerCase()}`,
        `Time: ${time}`,
        '',
        `Context: ${router.toLowerCase()}`, 
    ].join('\n');
}
function makePreEip721ProofOfRecommendation(signer, token, time, dapp, referrer, router) {
    return [
        'Sign this message to register for rewards.',
        '',
        "This won't cost you any Ether.",
        '',
        `Signer: ${signer.toLowerCase()}`,
        `Token: ${token.toLowerCase()}`,
        `Time: ${time}`,
        '',
        `Context: ${dapp},${referrer.toLowerCase()},${router.toLowerCase()}`, 
    ].join('\n');
}
const singAndPostProofOfRecommendationOrigin = async (web3, account, tokenAddress)=>{
    const router = constants/* MASK_REFERRER */.wZ;
    try {
        const { time , timePromise  } = await Referral_messages/* ReferralRPC.getTimeSignature */.f.getTimeSignature({
            account,
            tokenAddress,
            referrer: constants/* ZERO_ADDR */.W6,
            dapp: constants/* ZERO_HASH */.VX,
            router
        });
        const signature = await web3.eth.personal.sign(makePreEip721ProofOfRecommendationOrigin(account, tokenAddress, time, router), account, '');
        await Referral_messages/* ReferralRPC.postProofOfRecommendationOrigin */.f.postProofOfRecommendationOrigin(account, tokenAddress, router, time, timePromise, signature);
    } catch (error) {
        throw parseError(error);
    }
};
const singAndPostProofOfRecommendationWithReferrer = async (web3, account, tokenAddress, referrer)=>{
    const router = constants/* MASK_REFERRER */.wZ;
    const dapp = (0,bytes32/* formatBytes32String */.s)(constants/* MASK_SWAP_V1 */.X5);
    try {
        const { time , timePromise  } = await Referral_messages/* ReferralRPC.getTimeSignature */.f.getTimeSignature({
            account,
            tokenAddress,
            referrer,
            dapp,
            router
        });
        const signature = await web3.eth.personal.sign(makePreEip721ProofOfRecommendation(account, tokenAddress, time, dapp, referrer, router), account, '');
        await Referral_messages/* ReferralRPC.postProofOfRecommendationWithReferrer */.f.postProofOfRecommendationWithReferrer(account, tokenAddress, referrer, dapp, router, time, timePromise, signature);
    } catch (error) {
        throw parseError(error);
    }
};

// EXTERNAL MODULE: ./src/web3/UI/WalletConnectedBoundary.tsx
var WalletConnectedBoundary = __webpack_require__(59345);
// EXTERNAL MODULE: ./src/web3/UI/ChainBoundary.tsx
var ChainBoundary = __webpack_require__(73495);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/RewardFarmPostWidget.tsx




const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        dataContainer: {
            flexFlow: 'wrap'
        }
    })
);
function RewardFarmPostWidget({ title , icon , rewardData , tokenSymbol  }) {
    const t = useI18N();
    const { classes  } = useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        item: true,
        xs: 12,
        marginTop: "24px",
        children: [
            title && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                container: true,
                marginBottom: "12px",
                alignItems: "center",
                children: [
                    icon && icon,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        paddingX: 1,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontWeight: 600,
                            children: title
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                display: "flex",
                flexDirection: "column",
                className: classes.dataContainer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 12,
                        display: "flex",
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            fontWeight: 600,
                            children: [
                                t.daily_reward(),
                                ":",
                                ' ',
                                rewardData ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        Number.parseFloat(rewardData.dailyReward.toFixed(4)),
                                        " ",
                                        tokenSymbol ?? '-'
                                    ]
                                }) : '-'
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 12,
                        display: "flex",
                        alignItems: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            fontWeight: 600,
                            children: [
                                t.total_rewards(),
                                ":",
                                ' ',
                                rewardData ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        Number.parseFloat(rewardData.totalReward.toFixed(4)),
                                        " ",
                                        tokenSymbol ?? '-'
                                    ]
                                }) : '-'
                            ]
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/SponsoredFarm.tsx


const SponsoredFarmIcon = (0,utils/* createIcon */.I)('SponsoredFarm', /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            width: "16",
            height: "16",
            rx: "8",
            fill: "#60DFAB"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M9.99219 4.99219C9.75781 4.99219 9.57813 5.00781 9.45312 5.03906C9.09375 4.41406 8.60938 3.91797 8 3.55078C7.39062 3.18359 6.72656 3 6.00781 3C4.89844 3 3.95312 3.39063 3.17188 4.17188C2.39063 4.95312 2 5.89062 2 6.98438C2 8.09375 2.39063 9.03906 3.17188 9.82031C3.95312 10.6016 4.89844 10.9922 6.00781 10.9922C6.24219 10.9922 6.42187 10.9766 6.54688 10.9453C6.90625 11.5703 7.39062 12.0664 8 12.4336C8.60938 12.8008 9.27344 12.9844 9.99219 12.9844C11.1016 12.9844 12.0469 12.5937 12.8281 11.8125C13.6094 11.0313 14 10.0938 14 9C14 7.89063 13.6094 6.94531 12.8281 6.16406C12.0469 5.38281 11.1016 4.99219 9.99219 4.99219ZM6.64062 9.89062C6.39062 9.95313 6.17969 9.98438 6.00781 9.98438C5.17969 9.98438 4.47266 9.69141 3.88672 9.10547C3.30078 8.51953 3.00781 7.8125 3.00781 6.98438C3.00781 6.15625 3.28125 5.44922 3.82812 4.86328C4.375 4.27734 5.0625 3.98438 5.89062 3.98438C6.51562 3.98438 7.10547 4.15625 7.66016 4.5C8.21484 4.84375 8.49219 5.27344 8.49219 5.78906C8.61719 5.86719 8.71094 5.95703 8.77344 6.05859C8.83594 6.16016 8.86719 6.25781 8.86719 6.35156C8.86719 6.44531 8.87109 6.54688 8.87891 6.65625C8.88672 6.76562 8.89062 6.875 8.89062 6.98438L8.96094 7.03125C8.96094 7.98438 8.57031 8.75781 7.78906 9.35156C7.47656 9.61719 7.09375 9.79688 6.64062 9.89062ZM9.94531 7.5C10.3672 7.5 10.7305 7.64453 11.0352 7.93359C11.3398 8.22266 11.4922 8.57812 11.4922 9C11.4922 9.42188 11.3516 9.77734 11.0703 10.0664C10.7891 10.3555 10.4297 10.5 9.99219 10.5C9.47656 10.5 9.07812 10.2812 8.79688 9.84375C9.46875 9.21875 9.85156 8.4375 9.94531 7.5ZM9.99219 12C8.96094 12 8.14844 11.5625 7.55469 10.6875C7.60156 10.6719 7.67578 10.6406 7.77734 10.5938C7.87891 10.5469 7.95312 10.5156 8 10.5C8.48437 11.1875 9.14844 11.5312 9.99219 11.5312C10.6953 11.5312 11.2891 11.293 11.7734 10.8164C12.2578 10.3398 12.5 9.75 12.5 9.04688C12.5 8.34375 12.25 7.75 11.75 7.26562C11.25 6.78125 10.6484 6.53906 9.94531 6.53906C9.94531 6.39844 9.91406 6.23438 9.85156 6.04688H9.99219C10.8203 6.04688 11.5273 6.33984 12.1133 6.92578C12.6992 7.51172 12.9922 8.21875 12.9922 9.04688C12.9922 9.85938 12.6992 10.5547 12.1133 11.1328C11.5273 11.7109 10.8203 12 9.99219 12ZM8.49219 6.09375H8.35156C8.14844 5.59375 7.83594 5.20312 7.41406 4.92188C6.99219 4.64062 6.52344 4.5 6.00781 4.5C5.30469 4.5 4.71094 4.74219 4.22656 5.22656C3.74219 5.71094 3.5 6.29687 3.5 6.98438C3.5 7.6875 3.74219 8.28125 4.22656 8.76562C4.71094 9.25 5.30469 9.49219 6.00781 9.49219C6.27344 9.49219 6.46875 9.47656 6.59375 9.44531V9.49219C7.89062 8.91406 8.53906 8.09375 8.53906 7.03125C8.57031 6.96875 8.57031 6.8125 8.53906 6.5625C8.50781 6.3125 8.49219 6.15625 8.49219 6.09375ZM6.40625 8.4375C6.32813 8.46875 6.19531 8.48438 6.00781 8.48438C5.57031 8.48438 5.21094 8.34375 4.92969 8.0625C4.64844 7.78125 4.50781 7.42187 4.50781 6.98438C4.50781 6.5625 4.64844 6.20703 4.92969 5.91797C5.21094 5.62891 5.57031 5.48438 6.00781 5.48438C6.30469 5.48438 6.58984 5.57031 6.86328 5.74219C7.13672 5.91406 7.33594 6.14844 7.46094 6.44531H7.50781C7.50781 6.50781 7.51562 6.59766 7.53125 6.71484C7.54688 6.83203 7.55469 6.92187 7.55469 6.98438C7.55469 7.32813 7.44531 7.63672 7.22656 7.91016C7.00781 8.18359 6.73438 8.35938 6.40625 8.4375Z",
            fill: "white"
        })
    ]
}), '0 0 16 16', [
    16,
    17
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/assets/index.ts
/**
 * Manage local static resource
 */ const IconURLs = {
    sadGhost: new URL(/* asset import */ __webpack_require__(59981), __webpack_require__.b).toString(),
    tweetAttraceBg: new URL(/* asset import */ __webpack_require__(43072), __webpack_require__.b).toString()
};

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/FarmPost.tsx























const FarmPost_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        farmPost: {
            padding: '0 15px 15px'
        },
        content: {
            background: 'linear-gradient(194.37deg, #0081F9 2.19%, #746AFD 61.94%, #A261FF 95.94%)',
            color: '#FFFFFF',
            position: 'relative',
            padding: '16px 20px'
        },
        tweetAttraceBg: {
            position: 'absolute',
            right: 0,
            top: 0
        },
        actions: {
            paddingTop: '16px',
            '& button': {
                width: 'calc( 100% - 8px)'
            }
        },
        switchButtonBox: {
            width: '100%'
        }
    })
);
function FarmPost(props) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    const { payload  } = props;
    const farmChainId = payload.referral_token_chain_id;
    const { classes  } = FarmPost_useStyles();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const t = useI18N();
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const { value: linkedPersona  } = (0,useActivatedUI/* useCurrentLinkedPersona */.Ol)();
    const { setDialog: openSwapDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { value: rewards = shared_base_src/* EMPTY_LIST */.rP , error: error1  } = (0,useAsync/* default */.Z)(async ()=>farmChainId ? Referral_messages/* ReferralRPC.getRewardsForReferredToken */.f.getRewardsForReferredToken(farmChainId, payload.referral_token) : shared_base_src/* EMPTY_LIST */.rP
    , [
        farmChainId
    ]);
    const openComposeBox = (0,react.useCallback)((selectedReferralData, id)=>shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: true,
            content: (0,typed_message_base/* makeTypedMessageText */.P)('', selectedReferralData)
        })
    , []);
    const onError = (0,react.useCallback)((error)=>{
        showSnackbar(error || t.go_wrong(), {
            variant: 'error'
        });
    }, []);
    const onClickReferToFarm = (0,react.useCallback)(async ()=>{
        try {
            await singAndPostProofOfRecommendationOrigin(web3, account, payload.referral_token);
            const senderName = (currentIdentity?.identifier.userId ?? linkedPersona?.nickname) ?? '';
            const metadata = new Map();
            metadata.set(constants/* META_KEY */.U6, {
                referral_token: payload.referral_token,
                referral_token_name: payload.referral_token_name,
                referral_token_symbol: payload.referral_token_symbol,
                referral_token_icon: payload.referral_token_icon,
                referral_token_chain_id: farmChainId,
                promoter_address: account,
                sender: senderName
            });
            openComposeBox(metadata);
        } catch (error) {
            onError(error?.message);
        }
    }, [
        currentIdentity,
        payload,
        farmChainId,
        account,
        web3
    ]);
    const swapToken = (0,react.useCallback)(()=>{
        if (!payload.referral_token) {
            onError(t.error_token_not_select());
            return;
        }
        openSwapDialog({
            open: true,
            traderProps: {
                chainId: constants/* SWAP_CHAIN_ID */.lz,
                coin: {
                    id: payload.referral_token,
                    name: payload.referral_token_name,
                    symbol: payload.referral_token_symbol,
                    contract_address: payload.referral_token
                }
            }
        });
    }, [
        payload,
        openSwapDialog
    ]);
    const onClickBuyToFarm = (0,react.useCallback)(async ()=>{
        try {
            const tokenAddress = payload.referral_token;
            const referrer = payload?.promoter_address ?? constants/* MASK_REFERRER */.wZ;
            await singAndPostProofOfRecommendationWithReferrer(web3, account, tokenAddress, referrer);
            swapToken();
        } catch (error) {
            onError(error?.message);
        }
    }, [
        payload,
        account,
        web3
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.farmPost,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                variant: "outlined",
                className: classes.content,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.tweetAttraceBg,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: IconURLs.tweetAttraceBg
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                                address: payload.referral_token ?? '',
                                name: payload.referral_token_name,
                                logoURL: payload.referral_token_icon
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "h6",
                                fontWeight: 600,
                                marginLeft: "10px",
                                children: [
                                    "$",
                                    payload.referral_token_symbol,
                                    " ",
                                    t.buy_and_hold_referral()
                                ]
                            })
                        ]
                    }),
                    error1 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        display: "flex",
                        marginTop: "32px",
                        marginBottom: "20px",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                src: IconURLs.sadGhost
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                display: "flex",
                                flexDirection: "column",
                                marginLeft: "20px",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        fontWeight: 600,
                                        variant: "subtitle1",
                                        children: t.oops()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        marginTop: "12px",
                                        children: t.blockchain_error_referral_farm()
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        marginTop: "4px",
                                        children: t.try_in_few_minutes()
                                    })
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                marginTop: "8px",
                                children: t.join_receive_rewards()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                container: true,
                                children: rewards?.map((reward)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RewardFarmPostWidget, {
                                        title: t.sponsored_referral_farm(),
                                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SponsoredFarmIcon, {}),
                                        rewardData: reward,
                                        tokenSymbol: reward.rewardToken?.symbol
                                    }, reward.rewardToken?.address)
                                )
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                container: true,
                className: classes.actions,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedChainId: constants/* SWAP_CHAIN_ID */.lz,
                    expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    renderInTimeline: true,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        offChain: true,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                display: "flex",
                                textAlign: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "contained",
                                    size: "medium",
                                    onClick: onClickBuyToFarm,
                                    children: t.buy_to_farm()
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 6,
                                display: "flex",
                                justifyContent: "end",
                                textAlign: "center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "contained",
                                    size: "medium",
                                    onClick: onClickReferToFarm,
                                    children: t.refer_to_farm()
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(46715);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
;// CONCATENATED MODULE: ./src/plugins/Referral/types.ts
var TokenType;
(function(TokenType) {
    TokenType[TokenType["REFER"] = 0] = "REFER";
    TokenType[TokenType["REWARD"] = 1] = "REWARD";
})(TokenType || (TokenType = {}));
var PagesType;
(function(PagesType) {
    PagesType["LANDING"] = 'landing';
    PagesType["REFERRAL_FARMS"] = 'Referral Farms';
    PagesType["CREATE_FARM"] = 'Create Farm';
    PagesType["REFER_TO_FARM"] = 'Refer to Farm';
    PagesType["BUY_TO_FARM"] = 'Buy to Farm';
    PagesType["SELECT_TOKEN"] = 'Select a Token to Refer';
    PagesType["ADJUST_REWARDS"] = 'Adjust Rewards';
    PagesType["DEPOSIT"] = 'Deposit';
    PagesType["TRANSACTION"] = 'Transaction';
})(PagesType || (PagesType = {}));
var TabsReferralFarms;
(function(TabsReferralFarms) {
    TabsReferralFarms["TOKENS"] = 'Crypto Tokens';
    TabsReferralFarms["NFTs"] = "NFTs";
})(TabsReferralFarms || (TabsReferralFarms = {}));
var TabsCreateFarm;
(function(TabsCreateFarm) {
    TabsCreateFarm["NEW"] = 'New';
    TabsCreateFarm["CREATED"] = 'Created';
})(TabsCreateFarm || (TabsCreateFarm = {}));
var TabsReferAndBuy;
(function(TabsReferAndBuy) {
    TabsReferAndBuy["NEW"] = 'New';
    TabsReferAndBuy["MY_REWARDS"] = 'My Rewards';
})(TabsReferAndBuy || (TabsReferAndBuy = {}));
var TransactionStatus;
(function(TransactionStatus) {
    TransactionStatus["CONFIRMATION"] = "CONFIRMATION";
    TransactionStatus["CONFIRMED"] = "CONFIRMED";
    TransactionStatus["FAILED"] = "FAILED";
})(TransactionStatus || (TransactionStatus = {}));

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/AttraceLogoDarkTheme.tsx


const AttraceLogoDarkTheme = (0,utils/* createIcon */.I)('AttraceLogoDarkTheme', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "51",
        height: "12",
        viewBox: "0 0 51 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                clipPath: "url(#clip0_23898_46332)",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.97084 3.82262L3.57692 7.36441H6.35599L4.97084 3.82262ZM3.98019 1.08738H5.95272L9.91531 11.3796H7.88141L7.07487 9.25803H2.85804L2.03396 11.3796H6.10352e-05L3.98019 1.08738ZM20.9264 3.31414H22.6272V4.31356C22.8113 3.91905 23.048 3.62975 23.3548 3.41934C23.6617 3.21771 23.986 3.11251 24.3455 3.11251C24.5997 3.11251 24.8715 3.18264 25.1432 3.31414L24.5296 5.02367C24.3016 4.9097 24.1088 4.84833 23.9597 4.84833C23.6617 4.84833 23.3987 5.03244 23.1883 5.40941C22.9778 5.78638 22.8726 6.52279 22.8726 7.61864L22.8814 8.00438V11.1867H20.9089V3.31414H20.9264ZM29.1672 4.936C28.5535 4.936 28.0451 5.1464 27.6418 5.58474C27.2385 6.01432 27.0369 6.56663 27.0369 7.24167C27.0369 7.92548 27.2385 8.47779 27.6593 8.9249C28.0714 9.36324 28.5798 9.58241 29.1847 9.58241C29.8072 9.58241 30.3244 9.36324 30.7277 8.93366C31.1397 8.50409 31.3414 7.93425 31.3414 7.2329C31.3414 6.54909 31.1397 5.99678 30.7277 5.56721C30.3157 5.1464 29.7984 4.936 29.1672 4.936ZM31.2537 3.31414H33.2262V11.1955H31.2537V10.3539C30.868 10.7221 30.4822 10.9851 30.0877 11.1429C29.702 11.3007 29.2724 11.3884 28.8253 11.3884C27.7996 11.3884 26.9229 10.9939 26.1777 10.2048C25.4326 9.41584 25.0643 8.44272 25.0643 7.26797C25.0643 6.05815 25.4238 5.05874 26.1427 4.28726C26.8615 3.51578 27.7382 3.12127 28.7639 3.12127C29.2373 3.12127 29.6845 3.20894 30.0965 3.38428C30.5085 3.55961 30.8943 3.83138 31.2537 4.18206V3.31414ZM42.2648 4.91847L40.6167 5.82145C40.3098 5.49708 40.003 5.27791 39.7049 5.1464C39.4068 5.02367 39.0474 4.9623 38.6441 4.9623C37.9077 4.9623 37.3028 5.18147 36.8469 5.61981C36.3911 6.05815 36.1631 6.61923 36.1631 7.31181C36.1631 7.97808 36.3823 8.52162 36.8206 8.9512C37.259 9.372 37.8376 9.58241 38.5565 9.58241C39.4419 9.58241 40.1257 9.28433 40.6167 8.67943L42.1771 9.74898C41.3355 10.8448 40.1432 11.3971 38.6003 11.3971C37.2151 11.3971 36.128 10.9851 35.339 10.1698C34.5588 9.35447 34.1643 8.39012 34.1643 7.29427C34.1643 6.53156 34.3572 5.83021 34.7341 5.19024C35.1199 4.55026 35.6459 4.04179 36.3385 3.68235C37.0223 3.31414 37.785 3.13004 38.6266 3.13004C39.4068 3.13004 40.1169 3.28784 40.7394 3.59468C41.3618 3.90152 41.8703 4.34863 42.2648 4.91847ZM48.8925 6.26856C48.761 5.83898 48.5068 5.48831 48.121 5.21654C47.7353 4.94477 47.2882 4.81327 46.7797 4.81327C46.2274 4.81327 45.7452 4.9623 45.3244 5.26914C45.0614 5.45324 44.8247 5.79515 44.5968 6.26856H48.8925ZM50.8563 7.81151H44.5091C44.5968 8.37259 44.8422 8.8197 45.2368 9.15283C45.6313 9.48597 46.1397 9.65254 46.7534 9.65254C47.4898 9.65254 48.121 9.3983 48.647 8.87229L50.304 9.65254C49.8919 10.2399 49.3922 10.6783 48.8136 10.9588C48.235 11.2393 47.5512 11.3796 46.7534 11.3796C45.5261 11.3796 44.5179 10.9939 43.7464 10.2136C42.9749 9.43337 42.5804 8.46026 42.5804 7.29427C42.5804 6.09322 42.9662 5.0938 43.7464 4.30479C44.5179 3.50701 45.491 3.11251 46.657 3.11251C47.8931 3.11251 48.9013 3.50701 49.6815 4.29602C50.4618 5.08504 50.8475 6.12829 50.8475 7.42577L50.8563 7.81151ZM19.515 4.7256H18.0421V8.16218C18.0421 8.43396 18.0246 9.109 18.086 9.36324C18.121 9.51227 18.2087 9.62624 18.3314 9.71391C18.4629 9.81034 18.612 9.84541 18.7698 9.84541C19.0065 9.84541 19.287 9.76651 19.5237 9.68761L19.6728 11.0991C19.1818 11.2919 18.647 11.3708 18.121 11.3708C17.7791 11.3708 17.446 11.3182 17.1304 11.1867C16.8937 11.0903 16.657 10.9413 16.5079 10.7221C16.3501 10.4942 16.2712 10.1961 16.2274 9.93308C16.1485 9.48597 16.166 8.88983 16.166 8.43395V4.73436H15.1754V3.28784H16.166V1.61338L18.0509 0.5V3.28784H19.5237V4.7256H19.515ZM14.2636 4.7256H12.7908V8.16218C12.7908 8.43396 12.7733 9.109 12.8347 9.36324C12.8697 9.51227 12.9574 9.62624 13.0801 9.71391C13.2116 9.81034 13.3607 9.84541 13.5185 9.84541C13.7552 9.84541 14.0357 9.76651 14.2724 9.68761L14.4215 11.0991C13.9305 11.2919 13.3957 11.3708 12.8697 11.3708C12.5278 11.3708 12.1947 11.3182 11.8703 11.1867C11.6336 11.0903 11.3969 10.9413 11.2479 10.7221C11.0901 10.4942 11.0112 10.1961 10.9673 9.93308C10.8884 9.48597 10.8972 8.88983 10.8972 8.43395V4.73436H9.91531V3.28784H10.906V1.61338L12.7908 0.5V3.28784H14.2636V4.7256V4.7256Z",
                    fill: "url(#paint0_linear_23898_46332)"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: "paint0_linear_23898_46332",
                        x1: "6.08457e-05",
                        y1: "11.3971",
                        x2: "49.4649",
                        y2: "-3.97678",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "0.0001",
                                stopColor: "#C766FF"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FF7F89"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                        id: "clip0_23898_46332",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            width: "51",
                            height: "11",
                            fill: "white",
                            transform: "translate(0 0.5)"
                        })
                    })
                ]
            })
        ]
    })
}), '0 0 51 12', [
    51,
    12
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/AttraceLogoLightTheme.tsx


const AttraceLogoLightTheme = (0,utils/* createIcon */.I)('AttraceLogoLightTheme', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "51",
        height: "12",
        viewBox: "0 0 51 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                clipPath: "url(#clip0_23898_38698)",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.97084 3.82262L3.57692 7.36441H6.35599L4.97084 3.82262ZM3.98019 1.08738H5.95272L9.91531 11.3796H7.88141L7.07487 9.25803H2.85804L2.03396 11.3796H6.10352e-05L3.98019 1.08738ZM20.9264 3.31414H22.6272V4.31356C22.8113 3.91905 23.048 3.62975 23.3548 3.41934C23.6617 3.21771 23.986 3.11251 24.3455 3.11251C24.5997 3.11251 24.8715 3.18264 25.1432 3.31414L24.5296 5.02367C24.3016 4.9097 24.1088 4.84833 23.9597 4.84833C23.6617 4.84833 23.3987 5.03244 23.1883 5.40941C22.9778 5.78638 22.8726 6.52279 22.8726 7.61864L22.8814 8.00438V11.1867H20.9089V3.31414H20.9264ZM29.1672 4.936C28.5535 4.936 28.0451 5.1464 27.6418 5.58474C27.2385 6.01432 27.0369 6.56663 27.0369 7.24167C27.0369 7.92548 27.2385 8.47779 27.6593 8.9249C28.0714 9.36324 28.5798 9.58241 29.1847 9.58241C29.8072 9.58241 30.3244 9.36324 30.7277 8.93366C31.1397 8.50409 31.3414 7.93425 31.3414 7.2329C31.3414 6.54909 31.1397 5.99678 30.7277 5.56721C30.3157 5.1464 29.7984 4.936 29.1672 4.936ZM31.2537 3.31414H33.2262V11.1955H31.2537V10.3539C30.868 10.7221 30.4822 10.9851 30.0877 11.1429C29.702 11.3007 29.2724 11.3884 28.8253 11.3884C27.7996 11.3884 26.9229 10.9939 26.1777 10.2049C25.4326 9.41584 25.0643 8.44272 25.0643 7.26797C25.0643 6.05815 25.4238 5.05874 26.1427 4.28726C26.8615 3.51578 27.7382 3.12127 28.7639 3.12127C29.2373 3.12127 29.6845 3.20894 30.0965 3.38428C30.5085 3.55961 30.8943 3.83138 31.2537 4.18206V3.31414ZM42.2648 4.91847L40.6166 5.82145C40.3098 5.49708 40.003 5.27791 39.7049 5.1464C39.4068 5.02367 39.0474 4.9623 38.6441 4.9623C37.9077 4.9623 37.3028 5.18147 36.8469 5.61981C36.3911 6.05815 36.1631 6.61923 36.1631 7.31181C36.1631 7.97808 36.3823 8.52162 36.8206 8.9512C37.259 9.372 37.8376 9.58241 38.5565 9.58241C39.4419 9.58241 40.1257 9.28434 40.6166 8.67943L42.1771 9.74897C41.3355 10.8448 40.1432 11.3971 38.6003 11.3971C37.2151 11.3971 36.128 10.9851 35.339 10.1698C34.5588 9.35447 34.1643 8.39012 34.1643 7.29427C34.1643 6.53156 34.3572 5.83021 34.7341 5.19024C35.1199 4.55026 35.6459 4.04179 36.3385 3.68235C37.0223 3.31414 37.785 3.13004 38.6266 3.13004C39.4068 3.13004 40.1169 3.28784 40.7394 3.59468C41.3618 3.90152 41.8703 4.34863 42.2648 4.91847ZM48.8925 6.26856C48.761 5.83898 48.5068 5.48831 48.121 5.21654C47.7353 4.94477 47.2882 4.81327 46.7797 4.81327C46.2274 4.81327 45.7452 4.9623 45.3244 5.26914C45.0614 5.45324 44.8247 5.79515 44.5968 6.26856H48.8925ZM50.8563 7.81151H44.5091C44.5968 8.37259 44.8422 8.8197 45.2368 9.15283C45.6313 9.48597 46.1397 9.65254 46.7534 9.65254C47.4898 9.65254 48.121 9.3983 48.647 8.8723L50.304 9.65254C49.8919 10.2399 49.3922 10.6783 48.8136 10.9588C48.235 11.2393 47.5512 11.3796 46.7534 11.3796C45.5261 11.3796 44.5179 10.9939 43.7464 10.2136C42.9749 9.43337 42.5804 8.46026 42.5804 7.29427C42.5804 6.09322 42.9662 5.0938 43.7464 4.30479C44.5179 3.50701 45.491 3.11251 46.657 3.11251C47.8931 3.11251 48.9013 3.50701 49.6815 4.29602C50.4618 5.08504 50.8475 6.12829 50.8475 7.42577L50.8563 7.81151ZM19.515 4.7256H18.0421V8.16218C18.0421 8.43396 18.0246 9.109 18.086 9.36324C18.121 9.51227 18.2087 9.62624 18.3314 9.71391C18.4629 9.81034 18.612 9.84541 18.7698 9.84541C19.0065 9.84541 19.287 9.76651 19.5237 9.68761L19.6728 11.0991C19.1818 11.2919 18.647 11.3708 18.121 11.3708C17.7791 11.3708 17.446 11.3182 17.1304 11.1867C16.8937 11.0903 16.657 10.9413 16.5079 10.7221C16.3501 10.4942 16.2712 10.1961 16.2274 9.93308C16.1485 9.48597 16.166 8.88983 16.166 8.43395V4.73436H15.1754V3.28784H16.166V1.61338L18.0509 0.5V3.28784H19.5237V4.7256H19.515ZM14.2636 4.7256H12.7908V8.16218C12.7908 8.43396 12.7733 9.109 12.8347 9.36324C12.8697 9.51227 12.9574 9.62624 13.0801 9.71391C13.2116 9.81034 13.3607 9.84541 13.5185 9.84541C13.7552 9.84541 14.0357 9.76651 14.2724 9.68761L14.4215 11.0991C13.9305 11.2919 13.3957 11.3708 12.8697 11.3708C12.5278 11.3708 12.1947 11.3182 11.8703 11.1867C11.6336 11.0903 11.3969 10.9413 11.2479 10.7221C11.0901 10.4942 11.0112 10.1961 10.9673 9.93308C10.8884 9.48597 10.8972 8.88983 10.8972 8.43395V4.73436H9.91531V3.28784H10.906V1.61338L12.7908 0.5V3.28784H14.2636V4.7256Z",
                    fill: "url(#paint0_linear_23898_38698)"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("linearGradient", {
                        id: "paint0_linear_23898_38698",
                        x1: "6.08457e-05",
                        y1: "11.3971",
                        x2: "49.4649",
                        y2: "-3.97678",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "0.0001",
                                stopColor: "#B129FF"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("stop", {
                                offset: "1",
                                stopColor: "#FF5C69"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                        id: "clip0_23898_38698",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                            width: "51",
                            height: "11",
                            fill: "white",
                            transform: "translate(0 0.5)"
                        })
                    })
                ]
            })
        ]
    })
}), '0 0 51 12', [
    51,
    12
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/BuyToFarm.tsx


const BuyToFarmIcon = (0,utils/* createIcon */.I)('BuyToFarm', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "30",
        height: "36",
        viewBox: "0 0 30 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.9523 11.2199C23.8223 12.1799 29.1323 18.0599 29.1323 25.1999C29.1323 32.9999 22.8023 35.0399 15.0323 35.0399C7.26234 35.0399 0.902344 32.9699 0.902344 25.1999C0.902344 18.0599 6.18234 12.1799 13.0823 11.2199V9.5099C10.4723 6.6899 10.0823 5.3099 9.87234 3.1799C9.75234 2.0699 10.9523 1.3199 11.9123 1.8899C12.3623 2.1599 12.9623 2.1599 13.3823 1.8299L14.2523 1.1999C14.7023 0.8999 15.3323 0.8999 15.7823 1.2299L16.6523 1.8599C17.1023 2.1599 17.7023 2.1899 18.1523 1.8899L18.2423 1.8299C19.1723 1.2299 20.4023 2.0099 20.2823 3.0899C19.8923 6.7199 18.7523 7.5299 16.9523 9.4799C16.9523 9.5099 16.9523 11.2199 16.9523 11.2199Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M4.17234 27.3C4.32234 29.19 1.56234 29.61 1.17234 27.75C0.992344 26.97 0.902344 26.13 0.902344 25.2C0.902344 18.15 6.06234 12.3 12.8123 11.25H15.7823C16.0523 11.25 16.2923 11.49 16.2923 11.76C16.2923 12 16.1123 12.21 15.8723 12.27C8.61234 13.47 3.54234 20.13 4.17234 27.3Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M20.8197 9.4499C20.8197 10.4399 20.0097 11.2499 19.0197 11.2499H10.9797C9.98969 11.2499 9.17969 10.4399 9.17969 9.4499C9.17969 8.4599 9.98969 7.6499 10.9797 7.6499H19.0197C20.0097 7.6499 20.8197 8.4599 20.8197 9.4499Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M19.1093 7.6499C19.7393 7.6799 19.7093 8.6099 19.0793 8.6099C17.9393 8.6099 15.9593 8.6099 12.4793 8.6099C11.6393 8.6099 10.9793 9.1799 10.7693 9.8699C10.5293 10.6499 9.38931 10.5899 9.23931 9.8099C8.99931 8.6699 9.86931 7.6499 10.9793 7.6499C10.9793 7.6499 19.0793 7.6499 19.1093 7.6499Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.1116 1.43992C16.9816 2.09992 16.1116 3.50992 15.1216 2.87992C14.1916 2.27992 12.9616 3.05992 13.0816 4.16992C13.2316 5.45992 13.4116 6.44992 14.1316 7.67992H11.5516C10.3216 5.96992 10.0516 4.79992 9.87162 3.20992C9.75162 2.09992 10.9516 1.34992 11.9116 1.91992C12.3616 2.18992 12.9616 2.18992 13.3816 1.85992L14.2516 1.22992C14.7016 0.899922 15.3316 0.899922 15.7816 1.22992C15.9016 1.28992 15.9916 1.34992 16.1116 1.43992Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M19.3789 33.2998V24.5398H21.6289V33.2998C21.6289 33.9298 21.1189 34.4398 20.4889 34.4398C19.8589 34.4098 19.3789 33.9298 19.3789 33.2998Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M29.7011 25.2C29.7011 29.04 28.2011 31.86 25.2611 33.57C22.8611 34.98 19.5011 35.64 14.9711 35.64C14.6411 35.64 14.3711 35.37 14.3711 35.04C14.3711 34.71 14.6411 34.44 14.9711 34.44C24.1811 34.44 28.4711 31.5 28.4711 25.2C28.4711 19.44 24.9311 14.46 19.7111 12.54L20.3111 11.49C25.8611 13.62 29.7011 18.96 29.7011 25.2Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.4208 9.44989C21.4208 10.2899 21.0008 11.0399 20.3108 11.4599L19.7108 12.5099C18.8408 12.1799 18.0608 11.9699 17.1308 11.8199H12.8708C6.27078 12.8999 1.50078 18.5099 1.50078 25.1999C1.50078 31.4999 5.79078 34.4399 15.0008 34.4399C15.3308 34.4399 15.6008 34.7099 15.6008 35.0399C15.6008 35.3699 15.3308 35.6399 15.0008 35.6399C10.5008 35.6399 7.11078 34.9499 4.71078 33.5699C1.80078 31.8299 0.300781 29.0399 0.300781 25.1999C0.300781 17.9099 5.64078 11.7599 12.7208 10.6799C12.7808 10.6799 12.4208 10.6799 19.0208 10.6799C19.3508 10.6799 19.6508 10.5599 19.8608 10.3199C20.6108 9.56989 20.0708 8.27989 19.0208 8.27989H11.0108C10.3508 8.27989 9.81078 8.81989 9.81078 9.47989C9.81078 9.80989 9.54078 10.0799 9.21078 10.0799C8.88078 10.0799 8.61078 9.80989 8.61078 9.47989C8.61078 8.15989 9.69078 7.07989 11.0108 7.07989H18.3608C19.0208 6.17989 19.5008 5.12989 19.7108 3.05989C19.7708 2.45989 19.1108 2.03989 18.6008 2.36989L18.5108 2.42989C17.8508 2.84989 17.0108 2.81989 16.3508 2.36989L15.4808 1.73989C15.2408 1.55989 14.8808 1.55989 14.6108 1.73989L13.7408 2.36989C13.1108 2.81989 12.2708 2.84989 11.5808 2.42989C11.0708 2.09989 10.4108 2.51989 10.4708 3.11989C10.5308 3.68989 10.5908 4.10989 10.6808 4.46989C10.7408 4.79989 10.5608 5.09989 10.2308 5.18989C9.90078 5.24989 9.57078 5.06989 9.51078 4.73989C9.42078 4.31989 9.36078 3.86989 9.27078 3.26989C9.09078 1.67989 10.8608 0.569893 12.2108 1.40989C12.4508 1.55989 12.7808 1.55989 13.0208 1.37989L13.8908 0.749893C14.5808 0.269893 15.4808 0.269893 16.1408 0.749893L17.0108 1.37989C17.2508 1.55989 17.5808 1.55989 17.8208 1.40989L17.9108 1.34989C19.2908 0.509893 21.0308 1.58989 20.8508 3.20989C20.6408 5.09989 20.2508 6.26989 19.6808 7.19989C20.7008 7.43989 21.4208 8.36989 21.4208 9.44989Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M5.97164 20.2198C6.24164 20.3998 6.63164 20.3398 6.81164 20.0698C7.62164 18.8398 8.76164 17.8498 10.0516 17.1298C10.3516 16.9798 10.4416 16.6198 10.2916 16.3198C10.1416 16.0198 9.78164 15.9298 9.48164 16.0798C8.01164 16.8598 6.75164 18.0298 5.82164 19.3798C5.64164 19.6498 5.70164 20.0398 5.97164 20.2198Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M5.40114 21.4199C5.10114 21.2999 4.74114 21.4799 4.65114 21.7799C4.62114 21.8399 4.62113 21.8999 4.59113 21.9899C4.47113 22.3799 4.74114 22.7699 5.16114 22.7699C5.40114 22.7699 5.64114 22.6199 5.73114 22.3499C5.76114 22.2899 5.76113 22.2299 5.79113 22.1699C5.85113 21.8699 5.70114 21.5099 5.40114 21.4199Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.4313 18.3299C14.7013 17.9099 15.3013 17.9099 15.5713 18.3299L19.3813 23.9399C19.3813 23.9399 19.4713 23.9099 15.2113 25.3199C15.0613 25.3799 14.9113 25.3799 14.7913 25.3199L10.6213 23.9399C10.6213 23.9399 10.5313 24.0599 14.4313 18.3299Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M19.3827 23.9399C19.3827 23.9399 19.5627 23.6699 15.5727 29.5799C15.3027 29.9999 14.7027 29.9999 14.4327 29.5799L10.6227 23.9399C10.6227 23.9399 10.4127 23.8799 14.7927 25.2899C14.9427 25.3499 15.0927 25.3499 15.2127 25.2899L19.3827 23.9399Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M19.9826 23.5499L15.5726 17.0999C15.3026 16.6799 14.7026 16.6799 14.4326 17.0999L10.0526 23.5499C9.78264 23.9399 9.96264 24.4499 10.4126 24.5999C15.2126 26.1599 14.8526 26.0699 15.0026 26.0699C15.3026 26.0699 15.5726 25.8899 15.6626 25.5899C15.7826 25.2299 15.5726 24.8399 15.2126 24.7199L11.7026 23.5799L15.0026 18.7199L18.5426 23.9399L15.0026 29.1899L13.5626 27.0899C13.3526 26.7599 12.9026 26.6999 12.6026 26.9099C12.2726 27.1199 12.2126 27.5699 12.4226 27.8699L14.4326 30.8099C14.7026 31.2299 15.3026 31.2299 15.5726 30.8099L19.9526 24.3299C20.1326 24.1199 20.1326 23.7899 19.9826 23.5499Z",
                fill: "#2E58FF"
            })
        ]
    })
}), '0 0 30 36', [
    30,
    36
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/CreateFarm.tsx


const CreateFarmIcon = (0,utils/* createIcon */.I)('CreateFarm', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "36",
        height: "35",
        viewBox: "0 0 36 35",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M34.8319 24.5001C35.0419 24.3801 32.1619 25.9101 18.5419 33.1701C18.1819 33.3501 17.7919 33.3501 17.4619 33.1701L1.17188 24.5001C0.421875 24.1101 0.421875 22.8801 1.17188 22.4901L17.4619 13.8201C17.8219 13.6401 18.2119 13.6401 18.5419 13.8201C35.8219 23.0301 23.2219 16.3101 34.8319 22.4901C35.5819 22.8801 35.5819 24.1101 34.8319 24.5001Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M18.5719 31.85C19.0519 32.1201 19.0819 32.9001 18.5719 33.1701C18.2119 33.35 17.8219 33.35 17.4919 33.1701C17.4319 33.1701 1.20188 24.5301 1.17188 24.5C0.421875 24.1101 0.421875 22.9101 1.17188 22.4901C1.17188 22.4901 16.2019 14.48 17.4619 13.82C17.7919 13.64 18.1819 13.61 18.5719 13.82C19.4419 14.3 19.4419 15.71 18.5719 16.19L14.9419 18.11C10.5619 20.45 10.5619 27.5601 14.9419 29.9001L18.5719 31.85Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M25.9484 8.96014C25.7984 4.61014 22.1984 1.16014 17.8484 1.19014C13.4684 1.22014 9.89844 4.79014 9.89844 9.20014C9.89844 13.0101 12.5384 16.1901 16.0784 17.0001C16.1984 17.0301 16.2884 17.0901 16.3784 17.1501L17.5184 18.2901C17.7584 18.5301 18.1184 18.5301 18.3584 18.2901L19.4984 17.1501C19.5884 17.0601 19.6784 17.0301 19.7984 17.0001C23.3984 16.1601 26.0684 12.8601 25.9484 8.96014Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12.2399 11.8402C12.3899 12.8902 10.9499 13.2802 10.5299 12.3202C8.30988 7.07019 12.1799 1.19019 17.9099 1.19019C18.9599 1.19019 19.1399 2.69019 18.1199 2.96019C14.2799 3.98019 11.6399 7.70019 12.2399 11.8402Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M9.3 9.20009C9.3 4.46009 13.17 0.590088 17.94 0.590088C22.71 0.590088 26.55 4.46009 26.55 9.20009C26.55 11.6301 25.53 13.9401 23.76 15.5601L23.58 15.7401L22.26 16.5201C21.75 16.0401 21.99 15.4401 22.29 15.2301C24.21 13.8201 25.35 11.6001 25.35 9.23009C25.35 5.12009 22.02 1.79009 17.91 1.79009C13.8 1.79009 10.5 5.12009 10.5 9.20009C10.5 12.6801 12.96 15.7401 16.38 16.4601C16.5 16.4901 16.59 16.5501 16.68 16.6101L17.94 17.8701L19.2 16.6101C19.44 16.3701 19.8 16.3701 20.04 16.6101C20.28 16.8501 20.28 17.2101 20.04 17.4501L18.36 19.1301C18.12 19.3701 17.76 19.3701 17.52 19.1301L15.96 17.6001C12.09 16.7001 9.3 13.2501 9.3 9.20009ZM35.1 21.8601L23.58 15.7401L22.26 16.5201C22.47 16.6701 21.54 16.1601 34.62 23.1201C34.89 23.2701 34.92 23.7201 34.62 23.8701L27.42 27.7101L19.44 23.4501L24.9 20.5401C25.2 20.3901 25.32 19.9701 25.2 19.6401C25.05 19.2801 24.69 19.1601 24.39 19.3101L18 22.7001L12.6 19.8201C12.3 19.6701 11.94 19.8201 11.79 20.1501C11.64 20.5101 11.79 20.9001 12.09 21.0501L25.98 28.4601L18.3 32.5701C18.12 32.6601 17.91 32.6601 17.73 32.5701L10.02 28.4601L15.18 25.7301C15.48 25.5801 15.6 25.1601 15.48 24.8301C15.33 24.5001 15 24.3501 14.7 24.5001L8.58 27.7101L1.41 23.8701C1.14 23.7201 1.11 23.2701 1.41 23.1201L10.8 18.1101C11.1 17.9601 11.22 17.5401 11.1 17.2101C10.95 16.8501 10.59 16.7001 10.29 16.8801L0.9 21.8601C-0.3 22.4901 -0.3 24.4701 0.9 25.1001L17.22 33.8001C17.73 34.0701 18.3 34.0701 18.81 33.8001L35.1 25.1301C36.3 24.4701 36.3 22.5201 35.1 21.8601Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M26.7918 23.63C26.8218 23.99 27.0618 24.26 27.3918 24.26C27.7218 24.26 27.9918 23.99 27.9918 23.63C27.9918 23.03 28.3518 22.61 28.8618 22.43C29.1618 22.31 29.3418 21.95 29.2518 21.59C29.1618 21.23 28.8018 21.08 28.5018 21.17C28.2318 21.26 27.6318 21.56 27.2118 22.19C27.0318 22.1 26.8518 22.04 26.7618 22.04C26.4318 21.98 26.1318 22.22 26.0718 22.58C26.0118 22.94 26.2518 23.27 26.5518 23.33C26.6718 23.36 26.7618 23.45 26.7918 23.63Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M9.1785 21.1701C8.9085 21.2601 8.3085 21.5601 7.8885 22.1901C7.7085 22.1001 7.5285 22.0401 7.4385 22.0401C7.1085 21.9801 6.8085 22.2201 6.7485 22.5801C6.6885 22.9401 6.8985 23.2701 7.2285 23.3301C7.3785 23.3601 7.4685 23.4501 7.4685 23.6301C7.4985 23.9901 7.7685 24.2601 8.0685 24.2601C8.3985 24.2601 8.6385 23.9601 8.6685 23.6301C8.6685 23.0301 9.0285 22.6101 9.5385 22.4301C9.8385 22.3101 10.0185 21.9501 9.9285 21.5901C9.8385 21.2301 9.5085 21.0501 9.1785 21.1701Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M17.1912 29.7201C17.2212 30.0801 17.4612 30.3801 17.7912 30.3801C18.1212 30.3801 18.3912 30.0801 18.3912 29.7201C18.3912 29.0901 18.7512 28.6701 19.2612 28.4601C19.5612 28.3401 19.7412 27.9501 19.6512 27.5901C19.5312 27.2301 19.2012 27.0501 18.9012 27.1701C18.6312 27.2601 18.0312 27.5601 17.6112 28.2501C17.4312 28.1301 17.2512 28.1001 17.1612 28.0701C16.8312 28.0101 16.5312 28.2501 16.4712 28.6401C16.4112 29.0001 16.6212 29.3601 16.9512 29.4201C17.0712 29.4501 17.1612 29.5401 17.1912 29.7201Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M17.4885 4.82001C17.6985 4.49001 18.1785 4.49001 18.3885 4.82001L21.3285 9.20001C21.3285 9.20001 21.3885 9.17001 18.0885 10.25C17.9685 10.28 17.8485 10.28 17.7585 10.25L14.5185 9.20001C14.4885 9.20001 14.4285 9.29001 17.4885 4.82001Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.3305 9.19996C21.3305 9.19996 21.4805 8.98996 18.3605 13.58C18.1505 13.91 17.6705 13.91 17.4605 13.58L14.5205 9.19996C14.5205 9.19996 14.3705 9.13996 17.7605 10.25C17.8805 10.28 18.0005 10.28 18.0905 10.25L21.3305 9.19996Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.7796 8.90005L18.3596 3.86005C18.1496 3.53005 17.6696 3.53005 17.4596 3.86005L14.0696 8.90005C13.8596 9.20005 14.0096 9.62005 14.3396 9.71005C18.0596 10.94 17.7896 10.85 17.9096 10.85C18.1496 10.85 18.3596 10.7 18.4196 10.49C18.5096 10.22 18.3596 9.89005 18.0596 9.80005L15.3296 8.90005L17.8796 5.12005L20.6996 9.20005L17.9396 13.28L16.7996 11.63C16.6196 11.39 16.2896 11.33 16.0496 11.48C15.8096 11.66 15.7496 11.99 15.8996 12.23L17.4596 14.54C17.6696 14.87 18.1496 14.87 18.3596 14.54L21.7796 9.50005C21.8996 9.32005 21.8996 9.08005 21.7796 8.90005Z",
                fill: "#2E58FF"
            })
        ]
    })
}), '0 0 36 35', [
    36,
    35
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/ReferralFarms.tsx


const ReferralFarmsIcon = (0,utils/* createIcon */.I)('ReferralFarms', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "60",
        height: "60",
        viewBox: "0 0 60 60",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M55 28.5625H34.19L30 9.0625H31C32.105 9.0625 33 8.1675 33 7.0625V5.6875C33 4.5825 32.105 3.6875 31 3.6875H8.875C7.77 3.6875 6.875 4.5825 6.875 5.6875V7.0625C6.875 8.1675 7.77 9.0625 8.875 9.0625H10.4362V25.0025C22.0425 22.411 32.75 31.3976 32.75 43.0588V46.4375C32.75 47.5425 33.645 48.4375 34.75 48.4375H55C57.2088 48.4375 59 46.6463 59 44.4375V32.5625C59 30.3538 57.2088 28.5625 55 28.5625Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M30.0012 9.0625L34.1912 28.5625C25.2245 28.5625 25.8796 28.5445 25.8387 28.595C21.4976 25.0926 15.8635 23.7909 10.4375 25.0025V9.0625H30.0012Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M34.1912 28.5624C25.2245 28.5624 25.8796 28.5444 25.8387 28.5949C21.4976 25.0925 15.8635 23.7909 10.4375 25.0024V20.8679C10.4375 20.3263 10.869 19.887 11.4103 19.8691C17.439 19.6702 22.5957 15.729 23.9957 9.832C24.1027 9.38112 24.5045 9.0625 24.9679 9.0625H30.0012L34.1912 28.5624Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M58.4739 30.5789C59.0499 31.5856 58.304 32.8182 57.1443 32.8127C57.1378 32.8127 29.6721 32.8127 29.6721 32.8127C28.6171 31.2152 27.3209 29.7914 25.8371 28.5952C25.878 28.5447 24.4759 28.5627 54.9996 28.5627C56.4869 28.5626 57.7846 29.3743 58.4739 30.5789Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M45.5625 56.3125C49.8772 56.3125 53.375 52.8147 53.375 48.5C53.375 44.1853 49.8772 40.6875 45.5625 40.6875C41.2478 40.6875 37.75 44.1853 37.75 48.5C37.75 52.8147 41.2478 56.3125 45.5625 56.3125Z",
                fill: "#A2D0FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.4412 29.4287C7.0175 29.4287 1 35.4475 1 42.8712C1 50.295 7.0175 56.3125 14.4412 56.3125C21.865 56.3125 27.8838 50.295 27.8838 42.8712C27.8838 35.4475 21.865 29.4287 14.4412 29.4287Z",
                fill: "#A2D0FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.5 50.6875C18.8492 50.6875 22.375 47.1617 22.375 42.8125C22.375 38.4633 18.8492 34.9375 14.5 34.9375C10.1508 34.9375 6.625 38.4633 6.625 42.8125C6.625 47.1617 10.1508 50.6875 14.5 50.6875Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.7182 34.9406C16.4385 34.9874 16.8833 37.3617 15.2903 38.0131C12.463 39.1692 10.3746 41.9369 10.3746 45.3126C10.3746 47.1774 8.01502 47.5924 7.31765 46.0469C4.93665 40.7696 8.92878 34.7828 14.7182 34.9406Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M45.5 51.4375C47.1569 51.4375 48.5 50.0944 48.5 48.4375C48.5 46.7806 47.1569 45.4375 45.5 45.4375C43.8431 45.4375 42.5 46.7806 42.5 48.4375C42.5 50.0944 43.8431 51.4375 45.5 51.4375Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M45.9076 47.1359C45.1336 47.629 44.6157 48.4707 44.5148 49.382C44.4112 50.3179 43.1308 50.5052 42.7517 49.6434C41.9022 47.7124 43.2752 45.5601 45.3227 45.4426C46.3321 45.3846 46.6842 46.641 45.9076 47.1359Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M40.6611 52.2576C40.9706 53.1715 39.7395 53.7966 39.1819 53.0092C38.2884 51.7471 37.7598 50.2083 37.7501 48.5465C37.7258 44.3535 41.084 40.81 45.3385 40.6908C46.3095 40.6636 46.5371 42.0222 45.6154 42.3287C41.454 43.7122 39.281 48.1821 40.6611 52.2576Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M3.49996 44.1213C3.49996 46.3295 4.03234 48.4134 4.97584 50.2514C5.37846 51.0359 4.29171 51.7274 3.75609 51.0269C2.00584 48.7377 0.974962 45.8692 1.00046 42.7589C1.06059 35.3963 7.12434 29.3885 14.5162 29.4289C15.4005 29.4338 15.511 30.7153 14.6401 30.8693C8.52934 31.9495 3.49996 37.2455 3.49996 44.1213Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M31.0449 5.4375H11.3756C10.2706 5.4375 9.375 6.3335 9.375 7.4385C9.375 8.69963 7.84725 9.1165 7.21537 8.17887C7.00037 7.86 6.875 7.47587 6.875 7.0625V5.6875C6.875 4.58288 7.77038 3.6875 8.875 3.6875C8.875 3.6875 31.0847 3.68887 31.1265 3.6915C32.2377 3.76087 32.1582 5.4375 31.0449 5.4375Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.4416 28.4294C11.1604 28.4294 7.94812 29.5598 5.39625 31.6124C4.96587 31.9586 4.89762 32.5881 5.24375 33.0183C5.59 33.4489 6.2195 33.5172 6.64975 33.1708C8.87938 31.3774 11.5737 30.4294 14.4415 30.4294C21.3019 30.4294 26.8831 36.0107 26.8831 42.8709C26.8831 49.7313 21.3019 55.3126 14.4415 55.3126C5.39637 55.3126 -0.5955 45.9359 3.09512 37.7584C3.32238 37.2551 3.0985 36.6628 2.59512 36.4356C2.09175 36.2087 1.4995 36.4324 1.27225 36.9357C0.428125 38.8063 0 40.8032 0 42.8709C0 50.8341 6.4785 57.3126 14.4416 57.3126C22.4048 57.3126 28.8832 50.8341 28.8832 42.8709C28.8832 34.9078 22.4048 28.4294 14.4416 28.4294Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M55 27.5625H34.9975L31.2355 10.0524C32.7799 9.93175 34 8.63737 34 7.0625V5.6875C34 4.03338 32.6541 2.6875 31 2.6875H8.875C7.22088 2.6875 5.875 4.03338 5.875 5.6875V7.0625C5.875 8.71663 7.22088 10.0625 8.875 10.0625H9.43675V18.8125C9.43675 19.3647 9.8845 19.8125 10.4368 19.8125C10.989 19.8125 11.4368 19.3647 11.4368 18.8125V10.0625H24.7056C25.2579 10.0625 25.7056 9.61475 25.7056 9.0625C25.7056 8.51025 25.2579 8.0625 24.7056 8.0625H8.875C8.32363 8.0625 7.875 7.61387 7.875 7.0625V5.6875C7.875 5.13613 8.32363 4.6875 8.875 4.6875H31C31.5514 4.6875 32 5.13613 32 5.6875V7.0625C32 7.61387 31.5514 8.062 31 8.0625C29.8844 8.0635 29.8755 8.0525 29.6944 8.1105C29.249 8.254 28.9559 8.69088 29.0056 9.16788C29.0141 9.2475 28.9689 9.02325 32.9519 27.5625H26.1464C20.3726 23.089 12.7952 22.4328 6.52413 25.2555C6.0205 25.4821 5.796 26.0742 6.02275 26.5777C6.24937 27.0815 6.84138 27.3056 7.34513 27.0793C9.57975 26.0735 11.9669 25.5625 14.4417 25.5625C24.0759 25.5625 31.75 33.5046 31.75 43.0588V46.4375C31.75 46.9897 32.1978 47.4375 32.75 47.4375C33.3022 47.4375 33.75 46.9897 33.75 46.4375V43.0588C33.75 37.9966 31.8376 33.2188 28.3587 29.5625H55C56.6541 29.5625 58 30.9084 58 32.5625V34.4375H53.375C52.8228 34.4375 52.375 34.8853 52.375 35.4375C52.375 35.9897 52.8228 36.4375 53.375 36.4375H58V39.4375H56C55.4478 39.4375 55 39.8853 55 40.4375C55 40.9897 55.4478 41.4375 56 41.4375H58V44.4375C58 46.0916 56.6541 47.4375 55 47.4375H54.3086C53.782 43.0778 50.0619 39.6875 45.5625 39.6875C40.7033 39.6875 36.75 43.6408 36.75 48.5C36.75 53.3592 40.7033 57.3125 45.5625 57.3125C48.3797 57.3125 51.0495 55.9486 52.704 53.664C53.028 53.2168 52.928 52.5915 52.4806 52.2675C52.0332 51.9435 51.4081 52.0436 51.0843 52.4909C49.8046 54.2576 47.7405 55.3124 45.5625 55.3124C41.8061 55.3124 38.75 52.2564 38.75 48.4999C38.75 44.7434 41.8061 41.6874 45.5625 41.6874C49.3189 41.6874 52.375 44.7435 52.375 48.5C52.375 49.1944 53.0658 49.6785 53.7202 49.4375H55C57.757 49.4375 60 47.1945 60 44.4375V32.5625C60 29.8055 57.757 27.5625 55 27.5625Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M45.5 50.4375C44.3973 50.4375 43.5 49.5402 43.5 48.4375C43.5 47.8853 43.0523 47.4375 42.5 47.4375C41.9477 47.4375 41.5 47.8853 41.5 48.4375C41.5 50.6431 43.2944 52.4375 45.5 52.4375C47.7056 52.4375 49.5 50.6431 49.5 48.4375C49.5 46.2319 47.7056 44.4375 45.5 44.4375C44.9478 44.4375 44.5 44.8852 44.5 45.4375C44.5 45.9898 44.9478 46.4375 45.5 46.4375C46.6027 46.4375 47.5 47.3348 47.5 48.4375C47.5 49.5402 46.6027 50.4375 45.5 50.4375Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.9159 36.3737C17.4331 36.5683 18.0095 36.3058 18.2035 35.7888C18.3976 35.2717 18.1358 34.6952 17.6186 34.501C11.8391 32.3325 5.625 36.6154 5.625 42.8125C5.625 47.7062 9.60638 51.6875 14.5 51.6875C19.3936 51.6875 23.375 47.7062 23.375 42.8125C23.375 41.2433 22.9596 39.7007 22.1739 38.3515C21.896 37.8744 21.2837 37.7132 20.8065 37.9907C20.3292 38.2687 20.1678 38.8808 20.4456 39.358C23.0926 43.9028 19.8096 49.6875 14.5 49.6875C10.7091 49.6875 7.625 46.6034 7.625 42.8125C7.625 38.0144 12.4394 34.6933 16.9159 36.3737Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M41 35.5625C41.5522 35.5625 42 35.1148 42 34.5625C42 34.0102 41.5522 33.5625 41 33.5625H39C38.4477 33.5625 38 34.0102 38 34.5625C38 35.1148 38.4477 35.5625 39 35.5625H41Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M47.5165 20.1465C48.3995 20.1465 48.8553 19.0713 48.2236 18.4394C46.6496 16.8654 44.1016 16.8651 42.5273 18.4394C42.1367 18.83 42.1367 19.463 42.5273 19.8536C42.9178 20.244 43.551 20.244 43.9415 19.8536C44.7321 19.0629 46.0187 19.0629 46.8093 19.8536C47.0047 20.0489 47.2606 20.1465 47.5165 20.1465Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M40.4258 16.3374C43.1555 13.6079 47.5967 13.6079 50.3263 16.3374C50.5216 16.5327 50.7775 16.6303 51.0335 16.6303C51.9165 16.6303 52.3723 15.5548 51.7406 14.9232C48.2312 11.4139 42.5211 11.4139 39.0117 14.9232C38.6211 15.3137 38.6211 15.9468 39.0117 16.3374C39.4021 16.7278 40.0353 16.7279 40.4258 16.3374Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M46.206 22.0075C45.8644 21.4899 45.1166 21.4056 44.6673 21.855C44.104 22.4183 44.3981 23.3884 45.1798 23.5425C46.0366 23.728 46.7044 22.7459 46.206 22.0075Z",
                fill: "#2E58FF"
            })
        ]
    })
}), '0 0 60 59', [
    60,
    59
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/ReferToFarm.tsx


const ReferToFarmIcon = (0,utils/* createIcon */.I)('ReferToFarm', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "34",
        height: "34",
        viewBox: "0 0 34 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M28.2803 5.72013C22.0403 -0.519866 12.0203 -0.519866 5.78032 5.69013C0.200319 11.2401 -0.729681 19.5501 3.62032 25.7901L1.85032 30.7401C1.70032 31.5801 2.45032 32.3301 3.29032 32.1801L8.24032 30.4101C14.4503 34.7301 22.7603 33.8301 28.3103 28.2801C34.4903 22.0401 34.4903 11.9601 28.2803 5.72013Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.9686 29.6901C23.9605 29.6901 29.6286 24.022 29.6286 17.0301C29.6286 10.0382 23.9605 4.37012 16.9686 4.37012C9.97667 4.37012 4.30859 10.0382 4.30859 17.0301C4.30859 24.022 9.97667 29.6901 16.9686 29.6901Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8.54158 10.7C7.82158 11.42 7.19158 12.23 6.68158 13.07C6.14158 13.94 4.82158 13.28 5.21158 12.32C5.84158 10.76 6.77158 9.29 8.03158 8.03C13.0116 3.05 21.1416 3.08001 26.0616 8.15C26.7516 8.87 25.7916 9.98 24.9816 9.41C20.2116 5.99 13.2516 6.02 8.54158 10.7Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6.31916 8.32997C4.75916 9.88997 3.55916 11.69 2.77916 13.64C2.47916 14.39 1.33916 14.03 1.51916 13.22C2.17916 10.46 3.61916 7.81997 5.77916 5.68997C12.7392 -1.21003 24.1092 -0.280027 29.8692 7.57997C30.3492 8.23997 29.4492 9.01997 28.8792 8.44997C22.6692 2.17997 12.5892 2.08997 6.31916 8.32997Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M33.5597 17C33.5597 7.85004 26.1497 0.470041 17.0597 0.440041C8.35972 0.410041 1.27972 7.13004 0.559723 15.56C0.199723 19.34 0.889723 22.82 2.95972 25.91L1.21972 30.62C0.979723 31.88 2.08972 32.99 3.34972 32.75L8.29972 30.98C8.62972 30.92 8.83972 30.62 8.77972 30.29C8.71972 29.96 8.41972 29.75 8.08972 29.81L3.13972 31.58C2.71972 31.67 2.32972 31.28 2.38972 30.83L4.15972 25.88C4.18972 25.73 4.15972 25.55 4.06972 25.43C-0.160277 19.34 0.889723 11.36 6.19972 6.11004C12.1697 0.170042 21.8897 0.200041 27.8597 6.14004C33.8297 12.11 33.8297 21.86 27.8597 27.83C23.8397 31.85 17.9897 33.32 12.5597 31.67C12.2297 31.58 11.8997 31.76 11.8097 32.06C11.7197 32.39 11.8997 32.72 12.1997 32.81C22.9097 36.08 33.5597 28.01 33.5597 17Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8.45125 8.47997C8.69125 8.23997 8.69125 7.87997 8.45125 7.63997C8.21125 7.39997 7.85125 7.39997 7.61125 7.63997C2.42125 12.83 2.42125 21.23 7.61125 26.42C12.8012 31.61 21.2013 31.61 26.3913 26.42C31.5812 21.23 31.5812 12.83 26.3913 7.63997C22.3713 3.64996 16.4012 2.68997 11.4512 4.96997C11.1512 5.11997 11.0312 5.44997 11.1512 5.77997C11.3012 6.07997 11.6312 6.19997 11.9612 6.07997C16.5212 3.97997 21.9812 4.96997 25.5512 8.50997C30.2612 13.22 30.2612 20.87 25.5512 25.58C20.8412 30.29 13.1912 30.29 8.48125 25.58C3.77125 20.87 3.74125 13.19 8.45125 8.47997Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M16.4274 11.39C16.6974 10.97 17.2974 10.97 17.5674 11.39L21.3774 17C21.3774 17 21.4674 16.97 17.2074 18.38C17.0574 18.44 16.9074 18.44 16.7874 18.38L12.6174 17C12.6174 17 12.5274 17.12 16.4274 11.39Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.3788 16.9999C21.3788 16.9999 21.5588 16.7299 17.5688 22.6399C17.2988 23.0599 16.6988 23.0599 16.4288 22.6399L12.6188 16.9999C12.6188 16.9999 12.4088 16.9399 16.7888 18.3499C16.9388 18.4099 17.0888 18.4099 17.2088 18.3499L21.3788 16.9999Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.9487 16.6099L17.5687 10.1299C17.2987 9.70994 16.6987 9.70994 16.4287 10.1299L12.0487 16.6099C11.7787 16.9999 11.9587 17.5099 12.4087 17.6599C17.2087 19.2199 16.8487 19.1299 16.9987 19.1299C17.2987 19.1299 17.5687 18.9499 17.6587 18.6499C17.7787 18.2899 17.5687 17.8999 17.2087 17.7799L13.6987 16.6099L16.9987 11.7499L20.5387 16.9999L16.9987 22.2199L15.5587 20.1199C15.3487 19.7899 14.8987 19.7299 14.5987 19.9399C14.2987 20.1499 14.2087 20.5999 14.4187 20.8999L16.4287 23.8399C16.6987 24.2599 17.2987 24.2599 17.5687 23.8399L21.9487 17.3599C22.1287 17.1499 22.1287 16.8499 21.9487 16.6099Z",
                fill: "#2E58FF"
            })
        ]
    })
}), '0 0 34 33', [
    34,
    33
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/Rewards.tsx


const RewardsIcon = (0,utils/* createIcon */.I)('Rewards', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "36",
        height: "34",
        viewBox: "0 0 36 34",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M35.1326 19.8801C33.7826 27.2001 27.2726 32.9901 19.2626 32.9001C8.43258 32.9001 0.392581 21.4701 4.74258 11.0001C7.14258 5.18007 12.8726 1.07007 19.4726 1.07007C29.6726 1.07007 37.1126 10.7301 35.1326 19.8801Z",
                fill: "#B9DCFF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M27.2422 3.11007C28.9522 4.07007 28.0822 6.71007 26.1022 6.47007C16.5922 5.18007 8.25215 12.6201 8.04215 21.8901C8.01215 23.8701 5.25215 24.3501 4.56215 22.4901C0.662151 12.0801 8.55215 1.07007 19.4722 1.07007C22.3222 1.07007 24.9622 1.82007 27.2422 3.11007Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M19.5028 6.2002C12.8728 6.2002 7.77279 12.2302 8.8828 18.7702C9.4828 22.2202 11.7328 25.1302 14.7928 26.6302C17.7328 28.0702 21.1828 28.1002 24.1828 26.6302C27.2428 25.1302 29.5228 22.2202 30.0928 18.7702C31.2328 12.2602 26.1328 6.2002 19.5028 6.2002Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M21.7817 6.47001C15.7217 7.31001 10.5917 11.66 8.76171 17.6C8.34171 10.64 14.7617 4.91001 21.7817 6.47001Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M14.8216 26.6602C14.4016 30.1702 11.3716 32.9302 7.74156 32.9302C3.84156 32.9302 0.601562 29.7202 0.601562 25.7902C0.601562 21.4402 4.56156 18.0202 8.88156 18.7702C12.5716 19.4002 15.2716 22.8502 14.8216 26.6602Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M11.2822 19.6401C12.2422 20.1801 11.8522 21.6801 10.7422 21.6801C6.99215 21.6801 3.60215 24.7701 3.60215 28.8501C3.60215 29.9601 2.13215 30.3801 1.59215 29.4201C-0.207846 26.3301 0.452154 22.1001 3.84215 19.8801C6.18215 18.3201 9.06215 18.3501 11.2822 19.6401Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M31.1416 5.33008C24.7516 -1.05992 14.7916 -1.08992 8.34162 4.85008C5.28162 7.64008 3.42162 11.4201 3.03162 15.5001C3.00162 15.8001 3.24162 16.1001 3.57162 16.1301C3.90162 16.1601 4.20162 15.9201 4.23162 15.5901C4.95162 7.79008 11.6416 1.67008 19.5016 1.67008C27.9616 1.67008 34.8316 8.54008 34.8316 17.0001C34.8316 28.0401 23.4316 35.4201 13.4416 31.0401C17.5516 26.5701 15.0916 19.5501 9.45162 18.2901C8.64162 12.2001 13.3816 6.80008 19.5016 6.80008C25.1116 6.80008 29.6716 11.3601 29.6716 16.9701C29.6716 22.5801 25.1116 27.1401 19.5016 27.1401C19.1716 27.1401 18.9016 27.4101 18.9016 27.7401C18.9016 28.0701 19.1716 28.3401 19.5016 28.3401C25.7416 28.3401 30.8716 23.2101 30.8716 16.9701C30.8716 10.7301 25.7416 5.60008 19.5016 5.60008C12.8416 5.60008 7.53162 11.3901 8.19162 18.0801C5.97162 17.9601 3.84162 18.7701 2.28162 20.3301C-2.66838 25.2801 1.02162 33.5001 7.74162 33.5001C8.07162 33.5001 8.34162 33.2301 8.34162 32.9001C8.34162 32.5701 8.07162 32.3001 7.74162 32.3001C4.14162 32.3001 1.20162 29.3601 1.20162 25.7601C1.20162 21.8001 4.80162 18.7401 8.76162 19.3701C8.79162 19.3701 8.82162 19.3701 8.85162 19.3701C11.9416 19.8801 14.2816 22.5801 14.2816 25.8201C14.2816 28.8801 12.2416 30.4701 11.9416 30.8001C11.6716 31.1001 11.7616 31.5501 12.1216 31.7301C22.7416 37.3101 36.0016 29.3001 36.0016 16.9701C36.0016 12.5901 34.2616 8.45008 31.1416 5.33008Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8.40328 23.3602H7.17328L7.65328 22.8802C7.89328 22.6402 7.86328 22.2502 7.62328 22.0402C7.38328 21.8302 6.99328 21.8302 6.78328 22.0702L5.34328 23.5702C5.13328 23.8102 5.13328 24.1702 5.34328 24.4102L6.78328 25.9102C7.02328 26.1502 7.38328 26.1502 7.62328 25.9402C7.86328 25.7002 7.86328 25.3402 7.65328 25.1002L7.20328 24.5602H8.40328C9.36328 24.5602 10.1133 25.3402 10.1133 26.2702C10.1133 27.2002 9.33328 27.9802 8.40328 27.9802H5.46328C5.13328 27.9802 4.86328 28.2502 4.86328 28.5802C4.86328 28.9102 5.13328 29.1802 5.46328 29.1802H8.40328C10.0233 29.1802 11.3133 27.8602 11.3133 26.2702C11.3133 24.6802 10.0233 23.3602 8.40328 23.3602Z",
                fill: "#2E58FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M18.9313 11.3602C19.2013 10.9402 19.8013 10.9402 20.0713 11.3602L23.8813 17.0002C23.8813 17.0002 23.9713 16.9702 19.7113 18.3802C19.5613 18.4402 19.4113 18.4402 19.2913 18.3802L15.1213 17.0002C15.1213 17.0002 15.0313 17.1202 18.9313 11.3602Z",
                fill: "#E8F3FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M23.8827 17.0002C23.8827 17.0002 24.0627 16.7302 20.0727 22.6402C19.8027 23.0602 19.2027 23.0602 18.9327 22.6402L15.1227 17.0002C15.1227 17.0002 14.9127 16.9402 19.2927 18.3502C19.4427 18.4102 19.5927 18.4102 19.7127 18.3502L23.8827 17.0002Z",
                fill: "#D1E7FF"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M24.4826 16.6102L20.0726 10.1302C19.8026 9.71019 19.2026 9.71019 18.9326 10.1302L14.5526 16.6102C14.2826 17.0002 14.4626 17.5102 14.9126 17.6602C19.7126 19.2202 19.3526 19.1302 19.5026 19.1302C19.8026 19.1302 20.0726 18.9502 20.1626 18.6502C20.2826 18.2902 20.0726 17.9002 19.7126 17.7802L16.2026 16.6102L19.5026 11.7502L23.0426 17.0002L19.5026 22.2202L18.0626 20.1202C17.8526 19.7902 17.4026 19.7302 17.1026 19.9402C16.8026 20.1502 16.7126 20.6002 16.9226 20.9002L18.9326 23.8402C19.2026 24.2602 19.8026 24.2602 20.0726 23.8402L24.4526 17.3602C24.6326 17.1502 24.6326 16.8502 24.4826 16.6102Z",
                fill: "#2E58FF"
            })
        ]
    })
}), '0 0 36 34', [
    36,
    34
]);

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/icons/index.ts









;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/Landing.tsx







const Landing_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            padding: theme.spacing(3, 0, 3),
            fontSize: '16px'
        },
        heading: {
            background: theme.palette.background.default,
            height: '174px',
            padding: theme.spacing(3, 4, 3),
            borderRadius: '8px',
            marginBottom: '24px'
        },
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        img: {
            height: 60,
            width: 60,
            justifyContent: 'center',
            display: 'flex',
            marginBottom: '16px'
        },
        smallText: {
            fontSize: '15px'
        },
        icon: {
            width: '36px',
            height: '36px',
            marginRight: '12px'
        },
        dataItem: {
            '& b': {
                fontWeight: 600
            }
        }
    })
);
function Landing(props) {
    const t = useI18N();
    const { classes  } = Landing_useStyles();
    const onClickContinue = (0,react.useCallback)(async ()=>{
        props.continue(PagesType.LANDING, PagesType.REFERRAL_FARMS);
    }, [
        props
    ]);
    const data = [
        {
            name: t.refer_to_farm(),
            desc: t.refer_to_farm_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferToFarmIcon, {})
        },
        {
            name: t.buy_to_farm(),
            desc: t.buy_to_farm_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(BuyToFarmIcon, {})
        },
        {
            name: t.create_farms(),
            desc: t.create_farms_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateFarmIcon, {})
        },
        {
            desc: /*#__PURE__*/ (0,jsx_runtime.jsx)(Translate.create_farms_rewards_desc, {
                components: {
                    strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                        children: t.rewards()
                    })
                }
            }),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RewardsIcon, {})
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                className: classes.heading,
                display: "flex",
                justifyContent: "center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 12,
                        display: "flex",
                        justifyContent: "center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferralFarmsIcon, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        variant: "h6",
                        textAlign: "center",
                        fontWeight: 400,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                children: t.referral_farming()
                            }),
                            t.referral_farms_short_desc()
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                fontWeight: 600,
                variant: "h6",
                marginBottom: "16px",
                children: t.how_it_works()
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                direction: "row",
                className: classes.smallText,
                rowSpacing: "12px",
                textAlign: "left",
                children: [
                    data.map((e, i)=>{
                        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            item: true,
                            xs: 12,
                            display: "flex",
                            alignContent: "center",
                            justifyItems: "flex-start",
                            className: classes.dataItem,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    className: classes.icon,
                                    children: e.icon
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("b", {
                                            children: e.name
                                        }),
                                        " ",
                                        e.name && '-',
                                        " ",
                                        e.desc
                                    ]
                                })
                            ]
                        }, i);
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 12,
                        textAlign: "right",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: onClickContinue,
                            variant: "contained",
                            children: t.continue()
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(80231);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/styles.ts

const useTabStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            fontSize: '1rem'
        }
    })
);
const useSharedStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        maxChip: {
            border: '1px solid #1D9BF0',
            background: 'transparent',
            borderRadius: '8px',
            height: '24px',
            marginLeft: '8px',
            color: '#1D9BF0',
            '&:hover': {
                color: theme.palette.mode === 'dark' ? '#000000' : '#ffffff'
            }
        },
        msg: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '12px',
            background: theme.palette.background.default,
            padding: '12px 0',
            color: theme.palette.text.strong,
            fontWeight: 500,
            textAlign: 'center'
        }
    })
);
const useMyFarmsStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            lineHeight: '22px',
            fontWeight: 300,
            '& > div::-webkit-scrollbar': {
                width: '7px'
            },
            '& > div::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '& > div::-webkit-scrollbar-thumb': {
                borderRadius: '4px',
                backgroundColor: theme.palette.background.default
            }
        },
        col: {
            color: theme.palette.text.secondary,
            fontWeight: 500
        },
        content: {
            height: 320,
            overflowY: 'scroll',
            marginTop: 20,
            color: theme.palette.text.strong,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        heading: {
            paddingRight: '27px'
        }
    })
);
const useStylesAccordion = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const isDarkMode = theme.palette.mode === 'dark';
    return {
        accordion: {
            marginBottom: '20px',
            width: '100%',
            background: 'transparent',
            ':first-of-type': {
                borderRadius: 0
            },
            ':before': {
                height: 0,
                opacity: 0
            }
        },
        accordionSummary: {
            margin: 0,
            padding: 0
        },
        accordionSummaryContent: {
            margin: '0px!important'
        },
        accordionDetails: {
            marginTop: '8px',
            padding: '8px',
            background: isDarkMode ? '#15171A' : theme.palette.background.default,
            borderRadius: '4px'
        },
        container: {
            fontWeight: 400
        }
    };
});

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/ReferralFarms.tsx









const ReferralFarms_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            height: '100%',
            borderRadius: 8
        },
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        container: {
            flex: 1,
            height: '100%'
        },
        tab: {
            maxHeight: '100%',
            height: '100%',
            overflow: 'auto',
            padding: `${theme.spacing(3)} 0`
        },
        tabs: {
            width: '288px'
        }
    })
);
const useStylesType = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100px',
            borderRadius: '8px',
            background: theme.palette.background.default
        },
        img: {
            width: 40,
            marginRight: 4,
            justifyContent: 'center'
        },
        name: {
            fontSize: '0.938rem',
            color: theme.palette.text.primary
        }
    })
);
function Type({ name , onClick , icon  }) {
    const { classes  } = useStylesType();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        item: true,
        xs: 4,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            variant: "rounded",
            onClick: ()=>{
                onClick?.();
            },
            className: classes.root,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                children: [
                    icon,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontWeight: 400,
                        className: classes.name,
                        children: name
                    })
                ]
            })
        })
    }, name);
}
function ReferralFarms(props) {
    const t = useI18N();
    const { classes  } = ReferralFarms_useStyles();
    const { classes: tabClasses  } = useTabStyles();
    const [tab, setTab] = (0,react.useState)(TabsReferralFarms.TOKENS);
    const types = [
        {
            name: t.refer_to_farm(),
            onClick: ()=>{
                props.continue(PagesType.REFERRAL_FARMS, PagesType.REFER_TO_FARM, PagesType.REFER_TO_FARM);
            },
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferToFarmIcon, {})
        },
        {
            name: t.buy_to_farm(),
            onClick: ()=>{
                props.continue(PagesType.REFERRAL_FARMS, PagesType.BUY_TO_FARM, PagesType.BUY_TO_FARM);
            },
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(BuyToFarmIcon, {})
        },
        {
            name: t.create_farms(),
            onClick: ()=>{
                props.continue(PagesType.REFERRAL_FARMS, PagesType.CREATE_FARM, PagesType.CREATE_FARM);
            },
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateFarmIcon, {})
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
            className: classes.container,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                value: String(tab),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                        value: tab,
                        centered: true,
                        variant: "fullWidth",
                        onChange: (e, v)=>setTab(v)
                        ,
                        "aria-label": "persona-post-contacts-button-group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                value: TabsReferralFarms.TOKENS,
                                label: "Crypto Tokens",
                                classes: tabClasses
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                value: TabsReferralFarms.NFTs,
                                label: "NFTs",
                                classes: tabClasses,
                                disabled: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: TabsReferralFarms.TOKENS,
                        className: classes.tab,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            container: true,
                            spacing: "20px",
                            children: types.map((type)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Type, {
                                    name: type.name,
                                    onClick: type.onClick,
                                    icon: type.icon
                                }, type.name)
                            )
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                        value: TabsReferralFarms.NFTs,
                        className: classes.tab,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            container: true,
                            spacing: "20px",
                            children: types.map((type)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Type, {
                                    name: type.name,
                                    onClick: type.onClick,
                                    icon: type.icon
                                }, type.name)
                            )
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(10503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Divider/Divider.js
var Divider = __webpack_require__(65129);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(48591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/InputAdornment/InputAdornment.js + 1 modules
var InputAdornment = __webpack_require__(29324);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Chip/Chip.js + 1 modules
var Chip = __webpack_require__(11142);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/abi-coder.js + 10 modules
var abi_coder = __webpack_require__(78223);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(4068);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../web3-shared/evm/utils/contract.ts
var contract = __webpack_require__(28114);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../web3-contracts/abis/ReferralFarmsV1.json
var ReferralFarmsV1 = __webpack_require__(42853);
// EXTERNAL MODULE: ../web3-contracts/abis/ERC20.json
var ERC20 = __webpack_require__(4350);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/utils/referralFarm.ts









async function resolveReferralFarmsV1Address() {
    try {
        return await Referral_messages/* ReferralRPC.getReferralFarmsV1Address */.f.getReferralFarmsV1Address();
    } catch (error) {
        throw new Error('Referral farms address cannot be retrieved at the moment. Please try later.');
    }
}
async function runCreateERC20PairFarm(onStart, onConfirmed, web3, connection, account, chainId, rewardToken, referredToken, totalFarmReward, dailyFarmReward) {
    onStart();
    const farmsAddr = await resolveReferralFarmsV1Address();
    if (!farmsAddr) return;
    const farms = (0,contract/* createContract */.OP)(web3, farmsAddr, ReferralFarmsV1);
    const referredTokenDefn = (0,helpers/* toChainAddressEthers */.Gw)(chainId, referredToken.address);
    const rewardTokenDefn = (0,helpers/* toChainAddressEthers */.Gw)(chainId, rewardToken.address);
    const rewardTokenDecimals = rewardToken.decimals;
    const totalFarmRewardStr = (0,helpers/* roundValue */.dt)(totalFarmReward, rewardTokenDecimals).toString();
    const dailyFarmRewardStr = (0,helpers/* roundValue */.dt)(dailyFarmReward, rewardTokenDecimals).toString();
    const totalFarmRewardUint128 = (0,lib_esm/* parseUnits */.vz)(totalFarmRewardStr, rewardTokenDecimals);
    const config = {
        from: account
    };
    // Grant permission
    const rewardTokenContract = (0,contract/* createContract */.OP)(web3, rewardToken.address, ERC20);
    const allowance = await rewardTokenContract?.methods.allowance(account, farmsAddr).call();
    const isNeededGrantPermission = new (bignumber_default())(allowance).isLessThan(totalFarmReward);
    if (isNeededGrantPermission && rewardTokenContract) {
        const maxAllowance = new (bignumber_default())((0,lib.toWei)('10000000000000', 'ether'));
        const approveTx = await (0,contract/* encodeContractTransaction */.Wp)(rewardTokenContract, rewardTokenContract.methods.approve(farmsAddr, maxAllowance), config);
        await connection.sendTransaction(approveTx);
    }
    // Create farm
    const metaState = dailyFarmReward > 0 ? [
        // Metastate keys ideally are ascii and up to length 31 (ascii, utf8 might be less)
        {
            key: (0,lib.padRight)((0,lib.asciiToHex)('confirmationReward'), 64),
            value: abi_coder/* defaultAbiCoder.encode */.$.encode([
                'uint128',
                'uint128'
            ], [
                (0,lib_esm/* parseUnits */.vz)(dailyFarmRewardStr, rewardTokenDecimals),
                '0'
            ])
        }, 
    ] : [];
    if (!farms) return;
    const tx = await (0,contract/* encodeContractTransaction */.Wp)(farms, farms.methods.increaseReferralFarm(rewardTokenDefn, referredTokenDefn, totalFarmRewardUint128, metaState), config);
    const hash = await connection.sendTransaction(tx);
    onConfirmed(hash);
    return hash;
}
async function adjustFarmRewards(onStart, onConfirmed, web3, connection, account, chainId, rewardToken, referredToken, totalFarmReward, dailyFarmReward) {
    // Increase/decrease the Daily Farm Reward and deposit Additional Farm Rewards
    if (totalFarmReward > 0) {
        return runCreateERC20PairFarm(onStart, onConfirmed, web3, connection, account, chainId, rewardToken, referredToken, totalFarmReward, dailyFarmReward);
    }
    // Increase/decrease the Daily Farm Reward
    if (dailyFarmReward > 0) {
        onStart();
        const config = {
            from: account
        };
        const farmsAddr = await resolveReferralFarmsV1Address();
        if (!farmsAddr) return;
        const farms = (0,contract/* createContract */.OP)(web3, farmsAddr, ReferralFarmsV1);
        const rewardTokenDefn = (0,helpers/* toChainAddressEthers */.Gw)(chainId, rewardToken.address);
        const referredTokenDefn = (0,helpers/* toChainAddressEthers */.Gw)(chainId, referredToken.address);
        const rewardTokenDecimals = rewardToken.decimals;
        const dailyFarmRewardStr = (0,helpers/* roundValue */.dt)(dailyFarmReward, rewardTokenDecimals).toString();
        const metaState = [
            {
                key: (0,lib.padRight)((0,lib.asciiToHex)('confirmationReward'), 64),
                value: abi_coder/* defaultAbiCoder.encode */.$.encode([
                    'uint128',
                    'uint128'
                ], [
                    (0,lib_esm/* parseUnits */.vz)(dailyFarmRewardStr, rewardTokenDecimals),
                    '0'
                ])
            }, 
        ];
        if (!farms) return;
        const tx = await (0,contract/* encodeContractTransaction */.Wp)(farms, farms.methods.configureMetastate(rewardTokenDefn, referredTokenDefn, metaState), config);
        const hash = await connection.sendTransaction(tx);
        onConfirmed(hash);
        return hash;
    }
    return;
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(72288);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Accordion/Accordion.js + 1 modules
var Accordion = __webpack_require__(22775);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/AccordionSummary/AccordionSummary.js + 1 modules
var AccordionSummary = __webpack_require__(93802);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/AccordionDetails/AccordionDetails.js + 1 modules
var AccordionDetails = __webpack_require__(75536);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(96209);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/FarmTokenDetailed.tsx






const FarmTokenDetailed_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        tokenDetails: {
            marginLeft: '16px',
            fontWeight: 500
        },
        icon: {
            marginLeft: '7px',
            height: '16px',
            width: '16px'
        },
        farmName: {
            '& svg': {
                marginLeft: 7
            }
        },
        tokenName: {
            color: theme.palette.text.secondary,
            fontWeight: 400
        },
        tokenIcon: {
            width: '40px',
            height: '40px',
            backgroundColor: theme.palette.background.default,
            borderRadius: '50%'
        }
    })
);
function FarmTokenDetailed({ token , hideFarmTypeIcon =false  }) {
    const t = useI18N();
    const { classes  } = FarmTokenDetailed_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        display: "flex",
        alignItems: "center",
        children: token && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                token ? /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                    ...token
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.tokenIcon
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    flexDirection: "column",
                    className: classes.tokenDetails,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            display: "flex",
                            alignItems: "center",
                            className: classes.farmName,
                            fontWeight: "500",
                            children: [
                                token.symbol,
                                " ",
                                t.referral_farm(),
                                " ",
                                !hideFarmTypeIcon && /*#__PURE__*/ (0,jsx_runtime.jsx)(SponsoredFarmIcon, {})
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.tokenName,
                            children: token.name
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/AccordionFarm.tsx





function AccordionFarm({ rewardToken , referredToken , totalValue , children  }) {
    const { classes  } = useStylesAccordion();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
        className: classes.accordion,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                classes: {
                    root: classes.accordionSummary,
                    content: classes.accordionSummaryContent
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 8,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FarmTokenDetailed, {
                                token: referredToken
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            item: true,
                            xs: 4,
                            display: "flex",
                            alignItems: "center",
                            children: [
                                Number.parseFloat(totalValue.toFixed(5)),
                                " ",
                                rewardToken?.symbol || '-'
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                className: classes.accordionDetails,
                children: children
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/CreatedFarms.tsx















const CreatedFarms_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        buttonWithdraw: {
            background: (0,entry/* getMaskColor */.nb)(theme).redMain,
            marginRight: '12px',
            ':hover': {
                background: (0,entry/* getMaskColor */.nb)(theme).redMain
            }
        },
        viewStatsDisabled: {
            marginRight: '8px'
        }
    })
);
function FarmList({ loading , error , farms , onAdjustRewardButtonClick  }) {
    const t = useI18N();
    const { classes  } = CreatedFarms_useStyles();
    const { classes: sharedClasses  } = useSharedStyles();
    if (loading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        size: 50
    });
    if (error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: sharedClasses.msg,
        children: t.blockchain_error_referral_farms()
    });
    if (!farms.length) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        className: sharedClasses.msg,
        children: t.no_created_farm()
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: farms.map((farm)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionFarm, {
                rewardToken: farm.rewardToken,
                referredToken: farm.referredToken,
                totalValue: Number.parseFloat(farm?.totalFarmRewards?.toFixed(5) ?? '0'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    justifyContent: "flex-end",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "text",
                            disabled: true,
                            classes: {
                                disabled: classes.viewStatsDisabled
                            },
                            children: t.view_stats()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            disabled: true,
                            variant: "contained",
                            size: "medium",
                            className: classes.buttonWithdraw,
                            onClick: ()=>console.log('request to withdraw')
                            ,
                            children: t.request_to_withdraw()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            variant: "contained",
                            size: "medium",
                            onClick: ()=>{
                                onAdjustRewardButtonClick(farm);
                            },
                            children: t.adjust_rewards()
                        })
                    ]
                })
            }, farm.farmHash);
        })
    });
}
function CreatedFarms(props) {
    const t = useI18N();
    const { classes: myFarmsClasses  } = useMyFarmsStyles();
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const requiredChainId = (0,helpers/* getRequiredChainId */.qL)(currentChainId);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: farms = shared_base_src/* EMPTY_LIST */.rP , loading , error ,  } = (0,useAsync/* default */.Z)(async ()=>account ? Referral_messages/* ReferralRPC.getAccountFarms */.f.getAccountFarms(account, currentChainId) : []
    , [
        currentChainId,
        account
    ]);
    const onAdjustRewardButtonClick = (farm)=>{
        props.continue(PagesType.CREATE_FARM, PagesType.ADJUST_REWARDS, t.adjust_rewards(), {
            adjustFarmDialog: {
                farm,
                rewardToken: farm.rewardToken,
                referredToken: farm.referredToken,
                continue: ()=>{}
            }
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
        expectedChainId: requiredChainId,
        expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
            offChain: true,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: myFarmsClasses.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        justifyContent: "space-between",
                        rowSpacing: "20px",
                        className: myFarmsClasses.heading,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 8,
                                className: myFarmsClasses.col,
                                children: t.referral_farm()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 4,
                                className: myFarmsClasses.col,
                                children: t.total_rewards()
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: myFarmsClasses.content,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FarmList, {
                            loading: loading,
                            error: error,
                            farms: farms,
                            onAdjustRewardButtonClick: onAdjustRewardButtonClick
                        })
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9/node_modules/react-feather/dist/icons/chevron-down.js
var chevron_down = __webpack_require__(42213);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/TokenSelectField.tsx







const TokenSelectField_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        button: {
            width: '100%',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            padding: 0,
            border: 0
        },
        textField: {
            width: '100%'
        },
        icon: {
            width: '20px',
            height: '20px'
        }
    })
);
function TokenSelectField({ label , token , disabled , style , onClick  }) {
    const t = useI18N();
    const { classes  } = TokenSelectField_useStyles();
    const handleClick = (0,react.useCallback)(()=>{
        if (!disabled) {
            return onClick();
        }
    }, [
        disabled
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
        onClick: handleClick,
        className: classes.button,
        style: style,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
            label: label,
            value: token?.symbol ?? '',
            variant: "standard",
            placeholder: t.select_a_token(),
            className: classes.textField,
            disabled: disabled,
            InputProps: {
                readOnly: true,
                disableUnderline: true,
                startAdornment: token && /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                    position: "start",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                        ...token,
                        classes: classes
                    })
                }),
                endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                    position: "start",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_down/* default */.Z, {})
                })
            },
            InputLabelProps: {
                shrink: true
            }
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/CreateFarm.tsx


























const CreateFarm_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            flex: 1,
            height: '100%'
        },
        tab: {
            maxHeight: '100%',
            height: '100%',
            overflow: 'auto',
            padding: `${theme.spacing(3)} 0`
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '80%',
            fontSize: 12
        },
        textField: {
            width: '50%',
            '&:first-of-type': {
                marginRight: 16
            },
            '& input[type=number]': {
                height: 30,
                '-moz-appearance': 'textfield'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            }
        }
    })
);
function CreateFarm(props) {
    const t = useI18N();
    const { classes  } = CreateFarm_useStyles();
    const { classes: tabClasses  } = useTabStyles();
    const { classes: sharedClasses  } = useSharedStyles();
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const requiredChainId = (0,helpers/* getRequiredChainId */.qL)(currentChainId);
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { attachMetadata , dropMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const { value: linkedPersona  } = (0,useActivatedUI/* useCurrentLinkedPersona */.Ol)();
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { closeDialog: closeApplicationBoardDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.ApplicationDialogUpdated */.R$.events.ApplicationDialogUpdated);
    const [tab, setTab] = (0,react.useState)(TabsCreateFarm.NEW);
    const [tokenRefer, setTokenRefer] = (0,react.useState)();
    const [tokenReward, setTokenReward] = (0,react.useState)();
    const [focusedTokenType, setFocusedTokenType] = (0,react.useState)(TokenType.REFER);
    const { value: rewardBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, tokenReward?.address ?? '');
    const [dailyFarmReward, setDailyFarmReward] = (0,react.useState)('');
    const [totalFarmReward1, setTotalFarmReward] = (0,react.useState)('');
    const [attraceFee1, setAttraceFee] = (0,react.useState)(0);
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const onUpdateByRemote = (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        if (focusedTokenType === TokenType.REFER) {
            setTokenRefer(ev.token);
        }
        if (focusedTokenType === TokenType.REWARD) {
            setTokenReward(ev.token);
        }
    }, [
        id,
        focusedTokenType
    ]);
    const { setDialog: setSelectTokenDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Referral_messages/* PluginReferralMessages.selectTokenUpdated */.R.selectTokenUpdated, onUpdateByRemote);
    const onTokenSelectClick = (0,react.useCallback)((type, title)=>{
        setFocusedTokenType(type);
        setSelectTokenDialog({
            open: true,
            uuid: id,
            title
        });
    }, [
        id
    ]);
    const onChangeTotalFarmReward = (0,react.useCallback)((e)=>{
        const totalFarmReward = e.currentTarget.value;
        const totalFarmRewardNum = Number.parseFloat(e.currentTarget.value);
        const attraceFee = totalFarmRewardNum * (constants/* ATTRACE_FEE_PERCENT */.ll / 100);
        setTotalFarmReward(totalFarmReward);
        setAttraceFee(attraceFee);
    }, []);
    const onConfirmDeposit = (0,react.useCallback)(()=>{
        props?.onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideAttrLogo: true,
            hideBackBtn: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMATION,
                    title: t.transaction_confirm_permission_deposit(),
                    subtitle: t.create_farm_transaction_confirm_desc({
                        reward: (0,helpers/* roundValue */.dt)(Number.parseFloat(totalFarmReward1) + attraceFee1, tokenReward?.decimals).toString(),
                        token: tokenReward?.symbol ?? ''
                    })
                }
            }
        });
    }, [
        props?.onChangePage,
        totalFarmReward1,
        attraceFee1,
        tokenReward
    ]);
    const openComposeBox = (0,react.useCallback)((selectedReferralData)=>shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: true,
            content: (0,typed_message_base/* makeTypedMessageText */.P)('', selectedReferralData)
        })
    , []);
    const onPublishFarm = (0,react.useCallback)(()=>{
        if (!tokenRefer?.address) {
            showSnackbar(t.error_token_not_select(), {
                variant: 'error'
            });
            return;
        }
        const { address , name ='' , symbol ='' , logoURL =''  } = tokenRefer;
        const metadata = new Map();
        metadata.set(constants/* META_KEY */.U6, {
            referral_token: address,
            referral_token_name: name,
            referral_token_symbol: symbol,
            referral_token_icon: logoURL,
            referral_token_chain_id: currentChainId,
            sender: (currentIdentity?.identifier.userId ?? linkedPersona?.nickname) ?? ''
        });
        closeApplicationBoardDialog();
        props.onClose?.();
        openComposeBox(metadata);
    }, [
        tokenRefer,
        showSnackbar,
        currentChainId,
        props.onClose,
        currentIdentity,
        linkedPersona
    ]);
    const onConfirmedDeposit = (0,react.useCallback)((txHash)=>{
        props?.onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideAttrLogo: true,
            hideBackBtn: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMED,
                    actionButton: {
                        label: t.publish_farm(),
                        onClick: onPublishFarm
                    },
                    transactionHash: txHash
                }
            }
        });
    }, [
        props?.onChangePage,
        onPublishFarm
    ]);
    const onErrorDeposit = (0,react.useCallback)((message)=>{
        if (message) {
            showSnackbar(message, {
                variant: 'error'
            });
        }
        props?.onChangePage?.(PagesType.CREATE_FARM, PagesType.CREATE_FARM);
    }, [
        props?.onChangePage
    ]);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)();
    const onDeposit = (0,react.useCallback)(async ()=>{
        if (!tokenRefer?.address || !tokenReward?.address) {
            showSnackbar(t.error_token_not_select(), {
                variant: 'error'
            });
            return;
        }
        if (tokenRefer.address !== constants/* NATIVE_TOKEN */.LH) {
            const totalFarmRewardNum = Number.parseFloat(totalFarmReward1) + attraceFee1;
            try {
                await runCreateERC20PairFarm(onConfirmDeposit, onConfirmedDeposit, web3, connection, account, currentChainId, tokenReward, tokenRefer, totalFarmRewardNum, Number.parseFloat(dailyFarmReward));
            } catch (err) {
                onErrorDeposit(err.message);
            }
        } else {
            showSnackbar(t.error_native_token_farm(), {
                variant: 'error'
            });
        }
    }, [
        web3,
        account,
        connection,
        currentChainId,
        tokenRefer,
        tokenReward,
        totalFarmReward1,
        dailyFarmReward,
        attraceFee1, 
    ]);
    const onClickCreateFarm = (0,react.useCallback)(()=>{
        props.continue(PagesType.CREATE_FARM, PagesType.DEPOSIT, PagesType.CREATE_FARM, {
            hideAttrLogo: true,
            depositDialog: {
                deposit: {
                    totalFarmReward: totalFarmReward1,
                    token: tokenReward,
                    attraceFee: attraceFee1,
                    requiredChainId,
                    onDeposit
                }
            }
        });
    }, [
        props.continue,
        attraceFee1,
        totalFarmReward1,
        tokenReward,
        requiredChainId,
        onDeposit
    ]);
    const balance = (0,base_src/* formatBalance */.az)(rewardBalance ?? '', tokenReward?.decimals, 6);
    const totalFarmRewardNum1 = Number.parseFloat(totalFarmReward1);
    const dailyFarmRewardNum = Number.parseFloat(dailyFarmReward);
    const insufficientFunds = totalFarmRewardNum1 > Number.parseFloat(balance);
    const totalFarmRewardLessThanDailyFarmReward = totalFarmRewardNum1 < dailyFarmRewardNum;
    const createFarmBtnDisabled = !tokenRefer?.address || !tokenReward?.address || !totalFarmRewardNum1 || !dailyFarmRewardNum || insufficientFunds || totalFarmRewardLessThanDailyFarmReward;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: String(tab),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                    value: tab,
                    centered: true,
                    variant: "fullWidth",
                    onChange: (e, v)=>setTab(v)
                    ,
                    "aria-label": "persona-post-contacts-button-group",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: TabsCreateFarm.NEW,
                            label: t.tab_new(),
                            classes: tabClasses
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: TabsCreateFarm.CREATED,
                            label: t.tab_created(),
                            classes: tabClasses
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                    value: TabsCreateFarm.NEW,
                    className: classes.tab,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontWeight: 600,
                            variant: "h6",
                            marginBottom: "12px",
                            children: t.create_referral_farm_desc()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            marginBottom: "24px",
                            children: t.select_a_token_desc()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            container: true,
                            rowSpacing: "24px",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSelectField, {
                                        label: t.token_to_refer(),
                                        token: tokenRefer,
                                        disabled: currentChainId !== requiredChainId,
                                        style: {
                                            paddingRight: 8
                                        },
                                        onClick: ()=>onTokenSelectClick(TokenType.REFER, t.select_a_token_to_refer())
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSelectField, {
                                        label: t.reward_token(),
                                        token: tokenReward,
                                        disabled: currentChainId !== requiredChainId,
                                        onClick: ()=>onTokenSelectClick(TokenType.REWARD, t.select_a_reward_token())
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 12,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 12,
                                    display: "flex",
                                    marginBottom: "24px",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            label: t.daily_farm_reward(),
                                            value: dailyFarmReward,
                                            placeholder: "0",
                                            onChange: (e)=>setDailyFarmReward(e.currentTarget.value)
                                            ,
                                            inputMode: "numeric",
                                            type: "number",
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "standard",
                                            className: classes.textField,
                                            InputProps: {
                                                disableUnderline: true,
                                                endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                                                    position: "end",
                                                    children: tokenReward?.symbol
                                                })
                                            }
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                                            label: t.total_farm_rewards(),
                                            value: totalFarmReward1,
                                            inputMode: "numeric",
                                            type: "number",
                                            placeholder: "0",
                                            onChange: onChangeTotalFarmReward,
                                            InputLabelProps: {
                                                shrink: true
                                            },
                                            variant: "standard",
                                            className: classes.textField,
                                            InputProps: {
                                                disableUnderline: true,
                                                endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                                                    position: "start",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                                                className: classes.balance,
                                                                color: "textSecondary",
                                                                variant: "body2",
                                                                component: "span",
                                                                children: [
                                                                    t.wallet_balance(),
                                                                    ": ",
                                                                    tokenReward ? balance : '-'
                                                                ]
                                                            }),
                                                            tokenReward && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                children: [
                                                                    tokenReward?.symbol,
                                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                                        size: "small",
                                                                        label: "MAX",
                                                                        clickable: true,
                                                                        color: "primary",
                                                                        variant: "outlined",
                                                                        className: sharedClasses.maxChip,
                                                                        onClick: ()=>setTotalFarmReward(balance)
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedChainId: requiredChainId,
                            expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    fullWidth: true,
                                    variant: "contained",
                                    size: "medium",
                                    disabled: createFarmBtnDisabled,
                                    onClick: onClickCreateFarm,
                                    children: insufficientFunds || totalFarmRewardLessThanDailyFarmReward ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                        children: insufficientFunds ? t.error_insufficient_balance({
                                            symbol: tokenReward?.symbol ?? ''
                                        }) : t.error_daily_rewards()
                                    }) : t.create_referral_farm()
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: TabsCreateFarm.CREATED,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CreatedFarms, {
                        continue: props.continue
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/colors/blue.js
var blue = __webpack_require__(94362);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(72499);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/utils/rewards.ts





function validateRewardPeriods(rewards) {
    let isValid = true;
    const arrLength = rewards.length;
    rewards.forEach((reward, i)=>{
        if (!(i < arrLength - 1)) return;
        const current = (0,helpers/* valueToNumber */.xe)(reward.confirmation);
        const next = (0,helpers/* valueToNumber */.xe)(rewards[i + 1].confirmation);
        if (next - current > 1) {
            isValid = false;
        }
    });
    return isValid;
}
async function getAccountTokenConfirmationOffset(web3, account, rewardTokenDefn, farmsAddr) {
    const referralFarmsV1Contract = (0,contract/* createContract */.OP)(web3, farmsAddr, ReferralFarmsV1);
    const tokenAddress = (0,helpers/* parseChainAddress */.FZ)(rewardTokenDefn).address;
    const offset = await referralFarmsV1Contract?.methods.getAccountTokenConfirmationOffset(account, tokenAddress).call() || 0;
    return Number.parseInt(offset, 10);
}
async function filterRewardsByAccountTokenPeriodOffset(web3, account, rewardTokenDefn, rewards, farmsAddr) {
    const rewardsFiltered = (await Promise.allSettled(rewards.map(async (reward)=>{
        const offset = await getAccountTokenConfirmationOffset(web3, account, rewardTokenDefn, farmsAddr);
        if (offset < (0,helpers/* valueToNumber */.xe)(reward.confirmation)) {
            return reward;
        }
        return null;
    }))).map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter(esm/* isNonNull */.GT);
    return rewardsFiltered;
}
async function rewards_resolveReferralFarmsV1Address(onError) {
    try {
        return await Referral_messages/* ReferralRPC.getReferralFarmsV1Address */.f.getReferralFarmsV1Address();
    } catch (error) {
        onError('Referral farms address cannot be retrieved at the moment. Please try later.');
        return undefined;
    }
}
async function harvestRewards(onConfirm, onStart, onError, web3, account, rewards, rewardTokenDefn) {
    try {
        onStart();
        const config = {
            from: account
        };
        const farmsAddr = await rewards_resolveReferralFarmsV1Address(onError);
        if (!farmsAddr) return;
        // filter out the periods that oracle might still need to pick up
        const rewardsFiltered = await filterRewardsByAccountTokenPeriodOffset(web3, account, rewardTokenDefn, rewards, farmsAddr);
        const rewardsSorted = rewardsFiltered.sort((rewardA, rewardB)=>(0,helpers/* valueToNumber */.xe)(rewardA.confirmation) - (0,helpers/* valueToNumber */.xe)(rewardB.confirmation)
        );
        // Check periods to ensure no periods are skipped (because skipped periods == lost funds)
        if (!validateRewardPeriods(rewardsSorted)) {
            return onError('You cannot harvest rewards because there is a missed confirmation period.');
        }
        const requests = [
            {
                rewardTokenDefn,
                entitlements: rewardsSorted.map(({ farmHash , rewardValue: value , confirmation  })=>{
                    return {
                        farmHash,
                        value,
                        confirmation
                    };
                })
            }, 
        ];
        const proofs = [
            rewardsSorted.map((reward)=>reward.proof
            )
        ];
        const farms = (0,contract/* createContract */.OP)(web3, farmsAddr, ReferralFarmsV1);
        const estimatedGas = await farms?.methods.harvestRewardsNoGapcheck(requests, proofs).estimateGas(config);
        return new Promise(async (resolve, reject)=>{
            farms?.methods.harvestRewardsNoGapcheck(requests, proofs).send({
                ...config,
                gas: estimatedGas
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                resolve(receipt.transactionHash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                reject(error);
            });
        });
    } catch (error) {
        onError(error?.message);
    }
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/TokenDetailed.tsx




const TokenDetailed_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            alignItems: 'center'
        },
        logo: {
            display: 'flex',
            justifyContent: 'center',
            width: '44px',
            height: '44px',
            marginRight: '16px'
        },
        details: {
            marginLeft: '16px',
            fontWeight: 500
        },
        name: {
            color: theme.palette.text.secondary,
            fontWeight: 400
        }
    })
);
function TokenDetailed({ token  }) {
    const { classes  } = TokenDetailed_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.container,
        children: token && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                    ...token
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.details,
                    display: "flex",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: token.symbol
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: classes.name,
                            children: token.name
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/MyRewards/AccordionReward.tsx





function AccordionReward({ rewardToken , totalValue , children  }) {
    const { classes  } = useStylesAccordion();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Accordion/* default */.Z, {
        className: classes.accordion,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionSummary/* default */.Z, {
                expandIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {}),
                "aria-controls": "panel1a-content",
                id: "panel1a-header",
                classes: {
                    root: classes.accordionSummary,
                    content: classes.accordionSummaryContent
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    className: classes.container,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 8,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenDetailed, {
                                token: rewardToken
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            item: true,
                            xs: 4,
                            display: "flex",
                            alignItems: "center",
                            children: [
                                Number.parseFloat(totalValue.toFixed(5)),
                                " ",
                                rewardToken?.symbol || '-'
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionDetails/* default */.Z, {
                className: classes.accordionDetails,
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/groupBy.js
var groupBy = __webpack_require__(87937);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/MyRewards/ReferredTokenRewards.tsx









function ReferredTokenRewards({ rewards: rewards1  }) {
    const t = useI18N();
    const referredTokenRewards = (0,react.useMemo)(()=>{
        return Object.entries((0,groupBy/* default */.Z)(rewards1, (reward)=>reward.referredTokenDefn
        ));
    }, [
        rewards1
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                justifyContent: "space-between",
                marginBottom: "12px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 8,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontWeight: 600,
                            children: t.referral_farm()
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 4,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontWeight: 600,
                            children: t.rewards_earned()
                        })
                    })
                ]
            }),
            referredTokenRewards.map(([referredTokenDefn, rewards])=>{
                let totalRewards = new (bignumber_default())(0);
                for (const reward of rewards){
                    totalRewards = totalRewards.plus(new (bignumber_default())((0,lib_esm/* formatUnits */.bM)(reward.rewardValue, reward.rewardToken?.decimals)));
                }
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 8,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FarmTokenDetailed, {
                                token: rewards[0].referredToken,
                                hideFarmTypeIcon: true
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 4,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                children: [
                                    (0,helpers/* roundValue */.dt)(totalRewards.toNumber(), rewards[0].rewardToken?.decimals),
                                    ' ',
                                    rewards[0].rewardToken?.symbol
                                ]
                            })
                        })
                    ]
                }, referredTokenDefn);
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/MyRewards/Rewards.tsx














function Rewards({ currentChainId , account , rewards: rewards1 , pageType =PagesType.REFERRAL_FARMS , onChangePage  }) {
    const t = useI18N();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const onStartHarvestRewards = (0,react.useCallback)((totalRewards, rewardTokenSymbol)=>{
        onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideBackBtn: true,
            hideAttrLogo: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMATION,
                    title: t.confirm_transaction(),
                    subtitle: t.confirm_transaction_harvesting({
                        reward: totalRewards.toFixed(4),
                        symbol: rewardTokenSymbol ?? ''
                    })
                }
            }
        });
    }, [
        onChangePage
    ]);
    const onConfirmHarvestRewards = (0,react.useCallback)((txHash)=>{
        onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideBackBtn: true,
            hideAttrLogo: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMED,
                    actionButton: {
                        label: t.dismiss(),
                        onClick: ()=>onChangePage?.(pageType, pageType)
                    },
                    transactionHash: txHash
                }
            }
        });
    }, [
        onChangePage,
        t
    ]);
    const onErrorHarvestRewards = (0,react.useCallback)((error)=>{
        showSnackbar(error || t.go_wrong(), {
            variant: 'error'
        });
        onChangePage?.(pageType, pageType);
    }, [
        onChangePage,
        t,
        showSnackbar
    ]);
    const onHarvestRewards = (0,react.useCallback)(async (rewards, totalRewards, rewardTokenDefn, rewardTokenSymbol)=>{
        const rewardsClaimable = rewards.filter((reward)=>!reward.claimed
        );
        harvestRewards(onConfirmHarvestRewards, ()=>onStartHarvestRewards(totalRewards, rewardTokenSymbol)
        , onErrorHarvestRewards, web3, account, rewardsClaimable, rewardTokenDefn);
    }, [
        web3,
        account,
        currentChainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: Object.entries(rewards1).map(([rewardTokenDefn, rewardTokenRewards])=>{
            let totalRewards = new (bignumber_default())(0);
            let claimed = new (bignumber_default())(0);
            for (const reward of rewardTokenRewards){
                totalRewards = totalRewards.plus(new (bignumber_default())((0,lib_esm/* formatUnits */.bM)(reward.rewardValue, reward.rewardToken?.decimals)));
                claimed = claimed.plus(new (bignumber_default())(reward.claimed ? (0,lib_esm/* formatUnits */.bM)(reward.rewardValue, reward.rewardToken?.decimals) : 0));
            }
            const claimable = totalRewards.minus(claimed).toNumber();
            const rewardToken = rewardTokenRewards[0].rewardToken;
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(AccordionReward, {
                rewardToken: rewardToken,
                totalValue: totalRewards.toNumber(),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    flexDirection: "column",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferredTokenRewards, {
                            rewards: rewardTokenRewards
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "4px",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "20px",
                                    fontWeight: 600,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                            style: {
                                                marginRight: '4px'
                                            },
                                            children: [
                                                t.claimable(),
                                                ":"
                                            ]
                                        }),
                                        ' ',
                                        (0,helpers/* roundValue */.dt)(claimable, rewardToken?.decimals),
                                        " ",
                                        rewardToken?.symbol
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    disabled: claimable <= 0,
                                    variant: "contained",
                                    size: "medium",
                                    onClick: ()=>onHarvestRewards(rewardTokenRewards, totalRewards.toNumber(), rewardTokenDefn, rewardToken?.symbol)
                                    ,
                                    children: t.harvest_rewards()
                                })
                            ]
                        })
                    ]
                })
            }, rewardTokenDefn);
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/MyRewards/index.tsx












function MyRewards(props) {
    const t = useI18N();
    const { classes: sharedClasses  } = useSharedStyles();
    const { classes: myFarmsClasses  } = useMyFarmsStyles();
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const requiredChainId = (0,helpers/* getRequiredChainId */.qL)(currentChainId);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { value: accountRewards , loading , error ,  } = (0,useAsync/* default */.Z)(async ()=>account && currentChainId ? Referral_messages/* ReferralRPC.getAccountRewards */.f.getAccountRewards(account, currentChainId) : undefined
    , [
        account,
        currentChainId
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
        expectedChainId: requiredChainId,
        expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: myFarmsClasses.container,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                        container: true,
                        justifyContent: "space-between",
                        rowSpacing: "20px",
                        className: myFarmsClasses.heading,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 8,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontWeight: 500,
                                    className: myFarmsClasses.col,
                                    children: t.reward_tokens()
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                item: true,
                                xs: 4,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    fontWeight: 500,
                                    className: myFarmsClasses.col,
                                    children: t.rewards_earned()
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: myFarmsClasses.content,
                        children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                            size: 50
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                            children: !accountRewards || !Object.keys(accountRewards).length || error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: sharedClasses.msg,
                                children: error ? t.oracle_error_your_rewards() : t.you_have_not_joined_farm()
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Rewards, {
                                currentChainId: currentChainId,
                                account: account,
                                rewards: accountRewards,
                                pageType: props.pageType,
                                onChangePage: props.onChangePage
                            })
                        })
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/RewardDataWidget.tsx



function RewardDataWidget({ title , icon , rewardData , tokenSymbol  }) {
    const t = useI18N();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        marginTop: "24px",
        children: [
            title && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                container: true,
                marginBottom: "12px",
                alignItems: "center",
                children: [
                    icon && icon,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        paddingX: 1,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontWeight: 600,
                            children: title
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                display: "flex",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t.daily_farm_reward()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontWeight: 600,
                        marginTop: "4px",
                        children: rewardData ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                Number.parseFloat(rewardData.dailyReward.toFixed(4)),
                                " ",
                                tokenSymbol ?? '-'
                            ]
                        }) : '-'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                display: "flex",
                flexDirection: "column",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        children: t.total_farm_rewards()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontWeight: 600,
                        marginTop: "4px",
                        children: rewardData ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                Number.parseFloat(rewardData.totalReward.toFixed(4)),
                                " ",
                                tokenSymbol ?? '-'
                            ]
                        }) : '-'
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/ReferToFarm.tsx





























const ReferToFarm_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        container: {
            flex: 1,
            height: '100%'
        },
        tab: {
            maxHeight: '100%',
            height: '100%',
            overflow: 'auto',
            padding: `${theme.spacing(3)} 0`
        },
        tabs: {
            width: '288px'
        },
        chip: {
            width: '150px',
            height: '40px',
            flexDirection: 'row'
        },
        linkText: {
            color: blue/* default.50 */.Z[50]
        },
        heading: {
            fontSize: '20px',
            fontWeight: 'bold'
        },
        icon: {
            maxWidth: '20px',
            maxHeight: '20px'
        }
    })
);
function ReferToFarm(props) {
    const t = useI18N();
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const requiredChainId = (0,helpers/* getRequiredChainId */.qL)(currentChainId);
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const { closeDialog: closeApplicationBoardDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.ApplicationDialogUpdated */.R$.events.ApplicationDialogUpdated);
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const { value: linkedPersona  } = (0,useActivatedUI/* useCurrentLinkedPersona */.Ol)();
    const { classes  } = ReferToFarm_useStyles();
    const { classes: tabClasses  } = useTabStyles();
    const [tab, setTab] = (0,react.useState)(TabsReferAndBuy.NEW);
    const [token, setToken] = (0,react.useState)();
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const { setDialog: setSelectTokenDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Referral_messages/* PluginReferralMessages.selectTokenUpdated */.R.selectTokenUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        setToken(ev.token);
    }, [
        id,
        setToken
    ]));
    const openComposeBox = (0,react.useCallback)((selectedReferralData, id)=>shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
            reason: 'timeline',
            open: true,
            content: (0,typed_message_base/* makeTypedMessageText */.P)('', selectedReferralData)
        })
    , []);
    const { value: tokenRewards = shared_base_src/* EMPTY_LIST */.rP , loading  } = (0,useAsync/* default */.Z)(async ()=>token?.address ? Referral_messages/* ReferralRPC.getRewardsForReferredToken */.f.getRewardsForReferredToken(currentChainId, token.address) : shared_base_src/* EMPTY_LIST */.rP
    , [
        token?.address,
        currentChainId
    ]);
    const onClickTokenSelect = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            title: t.select_a_token_to_refer(),
            onlyFarmTokens: true
        });
    }, [
        id,
        setToken
    ]);
    const onConfirmReferFarm = (0,react.useCallback)(()=>{
        props?.onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideAttrLogo: true,
            hideBackBtn: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMATION,
                    title: t.transaction_complete_signature_request(),
                    subtitle: t.transaction_sign_the_message_to_register_address_for_rewards()
                }
            }
        });
    }, [
        props?.onChangePage,
        t
    ]);
    const onError = (0,react.useCallback)((error)=>{
        showSnackbar(error || t.go_wrong(), {
            variant: 'error'
        });
        props?.onChangePage?.(PagesType.REFER_TO_FARM, PagesType.REFER_TO_FARM);
    }, [
        props?.onChangePage,
        t,
        showSnackbar
    ]);
    const onClickReferFarm = (0,react.useCallback)(async ()=>{
        if (!token?.address) {
            return onError(t.error_token_not_select());
        }
        try {
            onConfirmReferFarm();
            await singAndPostProofOfRecommendationOrigin(web3, account, token.address);
            const metadata = new Map();
            metadata.set(constants/* META_KEY */.U6, {
                referral_token: token?.address ?? '',
                referral_token_name: token?.name ?? '',
                referral_token_symbol: token?.symbol ?? '',
                referral_token_icon: token?.logoURL ?? '',
                referral_token_chain_id: currentChainId,
                promoter_address: account,
                sender: (currentIdentity?.identifier.userId ?? linkedPersona?.nickname) ?? ''
            });
            closeApplicationBoardDialog();
            props.onClose?.();
            openComposeBox(metadata);
        } catch (error) {
            onError(error?.message);
        }
    }, [
        token,
        currentChainId,
        account,
        currentIdentity,
        linkedPersona,
        props.onClose
    ]);
    const farm_category_types = [
        {
            title: t.sponsored_referral_farm(),
            desc: t.sponsored_referral_farm_desc(),
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SponsoredFarmIcon, {})
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: String(tab),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                    value: tab,
                    centered: true,
                    variant: "fullWidth",
                    onChange: (e, v)=>setTab(v)
                    ,
                    "aria-label": "persona-post-contacts-button-group",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: TabsReferAndBuy.NEW,
                            label: t.tab_new(),
                            classes: tabClasses
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: TabsReferAndBuy.MY_REWARDS,
                            label: t.tab_my_rewards(),
                            classes: tabClasses
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                    value: TabsReferAndBuy.NEW,
                    className: classes.tab,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontWeight: 600,
                            variant: "h6",
                            marginBottom: "12px",
                            children: t.select_token_refer()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            marginBottom: "24px",
                            children: t.select_token_refer_desc()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            container: true,
                            rowSpacing: "24px",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSelectField, {
                                        label: t.token_to_refer(),
                                        token: token,
                                        disabled: currentChainId !== requiredChainId,
                                        onClick: onClickTokenSelect
                                    })
                                }),
                                !token || loading || !tokenRewards.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RewardDataWidget, {}) : tokenRewards.map((reward)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RewardDataWidget, {
                                        title: t.sponsored_referral_farm(),
                                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SponsoredFarmIcon, {}),
                                        rewardData: reward,
                                        tokenSymbol: reward.rewardToken?.symbol
                                    }, reward.rewardToken?.address)
                                )
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            container: true,
                            marginBottom: "24px",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 12,
                                    margin: "24px 0 20px 0",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {})
                                }),
                                farm_category_types.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                        item: true,
                                        xs: 12,
                                        display: "flex",
                                        alignItems: "center",
                                        children: [
                                            category.icon,
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                fontWeight: 600,
                                                margin: "0 4px 0 8px",
                                                children: category.title
                                            }),
                                            "-",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                marginLeft: "4px",
                                                children: category.desc
                                            })
                                        ]
                                    }, category.title)
                                )
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedChainId: requiredChainId,
                            expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                offChain: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    fullWidth: true,
                                    variant: "contained",
                                    size: "medium",
                                    disabled: !token,
                                    onClick: onClickReferFarm,
                                    children: t.refer_to_farm()
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: TabsReferAndBuy.MY_REWARDS,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MyRewards, {
                        pageType: PagesType.REFER_TO_FARM,
                        ...props
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(73932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(82138);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(23228);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(63153);
// EXTERNAL MODULE: ../icons/general/Loading.tsx
var Loading = __webpack_require__(78258);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.8.0_2f7y4c3dlygqpuszd3d43oslwi/node_modules/@mui/system/esm/Box/Box.js
var Box_Box = __webpack_require__(92483);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/FungibleTokenList/FungibleTokenItem.tsx










const FungibleTokenItem_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 36,
            height: 36
        },
        list: {
            maxHeight: '100%',
            padding: theme.spacing(1.5),
            borderRadius: theme.spacing(1)
        },
        text: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        primary: {
            flex: 1,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            paddingRight: theme.spacing(1)
        },
        name: {
            display: 'block',
            lineHeight: '20px',
            fontSize: 16,
            // TODO: Should align dashboard and twitter theme in common component, depend twitter theme
            color: theme.palette.mode === 'dark' ? '#6E767D' : '#536471'
        },
        symbol: {
            lineHeight: '20px',
            fontSize: 16
        },
        import: {
            '&:before': {
                content: '""',
                display: 'inline-block',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'transparent'
            }
        },
        importButton: {
            padding: '3px 0',
            borderRadius: 15,
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '20px'
        },
        metaInfo: {
            display: 'flex',
            alignItems: 'center'
        },
        typeIcon: {
            marginLeft: '5px'
        }
    })
);
const getFungibleTokenItem = (account, getSource, getBalance, isSelected, isLoading, importToken, referredTokensDefn)=>({ data: token , onSelect  })=>{
        const t = (0,src/* useSharedI18N */.B_)();
        const { classes  } = FungibleTokenItem_useStyles();
        if (!token) return null;
        const { address , name , symbol , decimals , logoURL , chainId  } = token;
        const { source , balance , selected , loading  } = (0,react.useMemo)(()=>{
            return {
                source: getSource(address),
                balance: getBalance(address),
                selected: isSelected(address),
                loading: isLoading(address)
            };
        }, [
            address,
            getSource,
            getBalance,
            isSelected,
            isLoading
        ]);
        const tokenChainAddr = (0,helpers/* toChainAddressEthers */.Gw)(chainId, address);
        const tokenHasFarm = referredTokensDefn.includes(tokenChainAddr);
        const onImport = (0,react.useCallback)(async (event)=>{
            event.stopPropagation();
            if (token) importToken(token);
        }, [
            token,
            importToken
        ]);
        const handleTokenSelect = (e)=>{
            e.stopPropagation();
            onSelect(token);
        };
        const action = (0,react.useMemo)(()=>{
            return source !== 'external' ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* LoadingAnimation */.p6, {}) : null
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskLoadingButton */.b4, {
                variant: "contained",
                color: "primary",
                onClick: onImport,
                size: "small",
                className: classes.importButton,
                soloLoading: true,
                loadingIndicator: /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading/* LoadingIcon */.H, {
                    sx: {
                        fontSize: 14
                    }
                }),
                children: t.import()
            });
        }, [
            balance,
            decimals,
            loading
        ]);
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
            button: true,
            className: `${classes.list} dashboard token-list`,
            onClick: handleTokenSelect,
            disabled: selected,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* TokenIcon */.T1, {
                        classes: {
                            icon: classes.icon
                        },
                        address: address,
                        name: name,
                        logoURL: logoURL
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                    classes: {
                        primary: classes.text
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classnames_default()(classes.primary, source === 'external' ? classes.import : ''),
                            color: "textPrimary",
                            component: "span",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.metaInfo,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.symbol,
                                            children: symbol
                                        }),
                                        ' ',
                                        tokenHasFarm && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
                                            className: classes.typeIcon,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SponsoredFarmIcon, {})
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: `${classes.name} dashboard token-list-symbol`,
                                    children: [
                                        name,
                                        source === 'personal' && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            children: " \u2022 Added By User"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            sx: {
                                fontSize: 16
                            },
                            color: "textSecondary",
                            component: "span",
                            children: action
                        })
                    ]
                })
            ]
        }, address);
    }
;

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/shared-ui/FungibleTokenList/index.tsx











const DEFAULT_LIST_HEIGHT = 300;
const SEARCH_KEYS = [
    'address',
    'symbol',
    'name'
];
const Placeholder = /*#__PURE__*/ (0,react.memo)(({ message , height  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        minHeight: height ?? DEFAULT_LIST_HEIGHT,
        justifyContent: "center",
        alignContent: "center",
        marginTop: "12px",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            color: "textSecondary",
            textAlign: "center",
            children: message
        })
    })
);
function FungibleTokenList(props) {
    const { tokens =[] , whitelist: includeTokens , blacklist: excludeTokens = [] , onSelect , FixedSizeListProps , selectedTokens =[] , referredTokensDefn =[] ,  } = props;
    const t = (0,src/* useSharedI18N */.B_)();
    const tReferral = useI18N();
    const pluginID = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)(props.pluginID);
    const account = (0,entry_web3/* useAccount */.mA)();
    const chainId = (0,entry_web3/* useChainId */.xx)(pluginID, props.chainId);
    const { Token , Others  } = (0,entry_web3/* useWeb3State */.dM)();
    const { value: fungibleTokens = shared_base_src/* EMPTY_LIST */.rP  } = (0,entry_web3/* useFungibleTokensFromTokenList */.B8)();
    const trustedFungibleTokens = (0,entry_web3/* useTrustedFungibleTokens */.Yg)();
    const nativeToken = Others?.chainResolver.nativeCurrency(chainId);
    const allFungibleTokens = (0,uniqBy/* default */.Z)([
        ...nativeToken ? [
            nativeToken
        ] : [],
        ...tokens,
        ...fungibleTokens,
        ...trustedFungibleTokens
    ], (x)=>x.address.toLowerCase()
    );
    const filteredFungibleTokens = allFungibleTokens.filter((token)=>(!includeTokens || includeTokens.some((0,base_src/* currySameAddress */.DC)(token.address))) && (!excludeTokens.length || !excludeTokens.some((0,base_src/* currySameAddress */.DC)(token.address)))
    );
    const { value: fungibleAssets = [] , loading: fungibleAssetsLoading  } = (0,entry_web3/* useFungibleAssets */.$U)(pluginID);
    const fungibleAssetsTable = Object.fromEntries(fungibleAssets.map((x)=>[
            x.address,
            x
        ]
    ));
    const sortedFungibleTokens = filteredFungibleTokens.sort((a, b)=>{
        // tokens belong to the current chain
        if (a.chainId !== b.chainId) {
            if (a.chainId === chainId) return -1;
            if (b.chainId === chainId) return 1;
        }
        // native token
        if ((0,base_src/* isSameAddress */.Wr)(a.address, Others?.getNativeTokenAddress(a.chainId))) return -1;
        if ((0,base_src/* isSameAddress */.Wr)(b.address, Others?.getNativeTokenAddress(b.chainId))) return 1;
        // usd value
        const aValueInUSD = Number.parseFloat(fungibleAssetsTable[a.address]?.value?.[base_src/* CurrencyType.USD */.V2.USD] ?? '0');
        const bValueInUSD = Number.parseFloat(fungibleAssetsTable[b.address]?.value?.[base_src/* CurrencyType.USD */.V2.USD] ?? '0');
        if (aValueInUSD > bValueInUSD) return -1;
        if (aValueInUSD < bValueInUSD) return 1;
        // TODO: add daily reward
        // balance
        // const aBalance = Number.parseFloat(formatBalance(fungibleTokensBalance[a.address] ?? '0', a.decimals))
        // const bBalance = Number.parseFloat(formatBalance(fungibleTokensBalance[b.address] ?? '0', b.decimals))
        // if (aBalance > bBalance) return -1
        // if (aBalance < bBalance) return 1
        // mask token
        if ((0,base_src/* isSameAddress */.Wr)(a.address, Others?.getMaskTokenAddress(a.chainId))) return -1;
        if ((0,base_src/* isSameAddress */.Wr)(b.address, Others?.getMaskTokenAddress(b.chainId))) return 1;
        // alphabet
        if ((a.name ?? '') < (b.name ?? '')) return -1;
        if ((a.name ?? '') > (b.name ?? '')) return 1;
        return 0;
    });
    // #region add token by address
    const [keyword, setKeyword] = (0,react.useState)('');
    const searchedTokenAddress = Others?.isValidAddress(keyword) && !sortedFungibleTokens.some((x)=>(0,base_src/* isSameAddress */.Wr)(x.address, keyword)
    ) ? keyword : '';
    const { value: searchedToken , loading: searchedTokenLoading  } = (0,entry_web3/* useFungibleToken */.cf)(pluginID, searchedTokenAddress);
    // #endregion
    const getPlaceholder = ()=>{
        if (!filteredFungibleTokens.length) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Placeholder, {
                height: FixedSizeListProps?.height,
                message: tReferral.placeholder_no_farms()
            });
        }
        if (searchedTokenLoading) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Placeholder, {
            height: FixedSizeListProps?.height,
            message: t.erc20_search_token_loading()
        });
        if (searchedTokenAddress && !searchedToken) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Placeholder, {
            height: FixedSizeListProps?.height,
            message: t.erc20_search_not_token_found()
        });
        return null;
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* SearchableList */.xV, {
        onSelect: (token)=>onSelect?.(token)
        ,
        data: searchedToken && (0,base_src/* isSameAddress */.Wr)(searchedToken.address, searchedTokenAddress) && !sortedFungibleTokens.find((x)=>(0,base_src/* isSameAddress */.Wr)(x.address, searchedTokenAddress)
        ) ? [
            searchedToken
        ] : sortedFungibleTokens,
        searchKey: SEARCH_KEYS,
        disableSearch: !!props.disableSearch,
        itemRender: getFungibleTokenItem(account, (address)=>{
            if ((0,base_src/* isSameAddress */.Wr)(nativeToken?.address, address)) return 'official';
            const inOfficialList = fungibleTokens.some((x)=>(0,base_src/* isSameAddress */.Wr)(x.address, address)
            );
            if (inOfficialList) return 'official';
            const inPersonaList = trustedFungibleTokens.some((x)=>(0,base_src/* isSameAddress */.Wr)(x.address, address)
            );
            if (inPersonaList) return 'personal';
            return 'external';
        }, (address)=>'0'
        , (address)=>selectedTokens.some((x)=>(0,base_src/* isSameAddress */.Wr)(x, address)
            )
        , (address)=>fungibleAssetsLoading
        , async (token)=>{
            await Token?.addToken?.(token);
            await Token?.trustToken?.(account, token);
        }, referredTokensDefn),
        placeholder: getPlaceholder(),
        FixedSizeListProps: FixedSizeListProps,
        SearchFieldProps: {
            placeholder: t.erc20_token_list_placeholder(),
            ...props.SearchTextFieldProps
        }
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/SelectToken.tsx

















const DISABLED_NATIVE_TOKEN = true;
const SelectToken_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        dialog: {
            maxWidth: 600,
            boxShadow: 'none',
            backgroundImage: 'none'
        },
        dialogTitle: {
            '& > p': {
                overflow: 'inherit!important'
            }
        }
    })
);
function SelectToken() {
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const t = useI18N();
    const { classes: sharedClasses  } = useSharedStyles();
    const { classes  } = SelectToken_useStyles();
    const [title, setTitle] = (0,react.useState)('');
    const [id, setId] = (0,react.useState)('');
    const [onlyFarmTokens, setOnlyFarmTokens] = (0,react.useState)(false);
    const { open , setDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Referral_messages/* PluginReferralMessages.selectTokenUpdated */.R.selectTokenUpdated, (ev)=>{
        if (!ev.open) return;
        setId(ev.uuid);
        setTitle(ev.title);
        setOnlyFarmTokens(!!ev.onlyFarmTokens);
    });
    const { value: referredTokensDefn = shared_base_src/* EMPTY_LIST */.rP , loading , error ,  } = (0,useAsync/* default */.Z)(async ()=>currentChainId ? Referral_messages/* ReferralRPC.getReferredTokensDefn */.f.getReferredTokensDefn(currentChainId) : []
    , [
        currentChainId
    ]);
    const referredTokens = (0,react.useMemo)(()=>{
        return referredTokensDefn.length ? referredTokensDefn.map((referredTokenDefn)=>(0,helpers/* parseChainAddress */.FZ)(referredTokenDefn).address
        ) : [];
    }, [
        referredTokensDefn
    ]);
    const onClose = (0,react.useCallback)(async ()=>{
        setDialog({
            open: false,
            uuid: id
        });
        await (0,esm/* delay */.gw)(300);
    }, [
        id,
        setDialog
    ]);
    const onSubmit = (0,react.useCallback)(async (token)=>{
        setDialog({
            open: false,
            uuid: id,
            token
        });
        await (0,esm/* delay */.gw)(300);
    }, [
        id,
        setDialog
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
        titleBarIconStyle: "back",
        open: open,
        onClose: onClose,
        title: title,
        maxWidth: "xs",
        classes: {
            paper: classes.dialog,
            dialogTitle: classes.dialogTitle
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            children: onlyFarmTokens && error ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: sharedClasses.msg,
                children: t.blockchain_error_your_referral_farms()
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FungibleTokenList, {
                whitelist: onlyFarmTokens ? referredTokens : undefined,
                loading: loading,
                referredTokensDefn: referredTokensDefn,
                FixedSizeListProps: {
                    height: 340,
                    itemSize: 54
                },
                onSelect: onSubmit,
                blacklist: DISABLED_NATIVE_TOKEN ? [
                    constants/* NATIVE_TOKEN */.LH
                ] : []
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/BuyToFarm.tsx


























const BuyToFarm_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            flex: 1,
            height: '100%'
        },
        tab: {
            maxHeight: '100%',
            height: '100%',
            overflow: 'auto',
            padding: theme.spacing(3, 0)
        },
        tabs: {
            width: '288px'
        },
        subtitle: {
            margin: '12px 0 24px'
        },
        typeNote: {
            marginBottom: '24px',
            '& b': {
                margin: '0 4px 0 8px',
                fontWeight: 600
            }
        }
    })
);
function BuyToFarm(props) {
    const t = useI18N();
    const { classes  } = BuyToFarm_useStyles();
    const { classes: tabClasses  } = useTabStyles();
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const requiredChainId = (0,helpers/* getRequiredChainId */.qL)(currentChainId);
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const [tab, setTab] = (0,react.useState)(TabsReferAndBuy.NEW);
    const [id] = (0,react.useState)((0,v4/* default */.Z)());
    const [token, setToken] = (0,react.useState)();
    const { setDialog: setSelectTokenDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(Referral_messages/* PluginReferralMessages.selectTokenUpdated */.R.selectTokenUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.token || ev.uuid !== id) return;
        setToken(ev.token);
    }, [
        id,
        setToken
    ]));
    const { setDialog: openSwapDialog  } = (0,shared_base_ui_src/* useRemoteControlledDialog */.F$)(messages/* PluginTraderMessages.swapDialogUpdated */.A.swapDialogUpdated);
    const { value: tokenRewards = shared_base_src/* EMPTY_LIST */.rP , loading  } = (0,useAsync/* default */.Z)(async ()=>token?.address ? Referral_messages/* ReferralRPC.getRewardsForReferredToken */.f.getRewardsForReferredToken(currentChainId, token.address) : shared_base_src/* EMPTY_LIST */.rP
    , [
        token?.address,
        currentChainId
    ]);
    const onClickTokenSelect = (0,react.useCallback)(()=>{
        setSelectTokenDialog({
            open: true,
            uuid: id,
            title: t.select_a_token_to_buy_and_hold(),
            onlyFarmTokens: true
        });
    }, [
        id
    ]);
    const swapToken = (0,react.useCallback)(()=>{
        if (!token) {
            showSnackbar(t.error_token_not_select(), {
                variant: 'error'
            });
            return;
        }
        openSwapDialog({
            open: true,
            traderProps: {
                chainId: constants/* SWAP_CHAIN_ID */.lz,
                coin: {
                    id: token?.address,
                    name: token?.name ?? '',
                    symbol: token?.symbol ?? '',
                    contract_address: token?.address,
                    decimals: token?.decimals
                }
            }
        });
    }, [
        token,
        openSwapDialog
    ]);
    const onConfirmReferFarm = (0,react.useCallback)(()=>{
        props?.onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideAttrLogo: true,
            hideBackBtn: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMATION,
                    title: t.transaction_complete_signature_request(),
                    subtitle: t.transaction_sign_the_message_to_register_address_for_rewards()
                }
            }
        });
    }, [
        props?.onChangePage,
        t
    ]);
    const onError = (0,react.useCallback)((error)=>{
        showSnackbar(error || t.go_wrong(), {
            variant: 'error'
        });
        props?.onChangePage?.(PagesType.BUY_TO_FARM, PagesType.BUY_TO_FARM);
    }, [
        props?.onChangePage,
        t,
        showSnackbar
    ]);
    const onClickBuyToFarm = (0,react.useCallback)(async ()=>{
        if (!token?.address) {
            return onError(t.error_token_not_select());
        }
        try {
            onConfirmReferFarm();
            await singAndPostProofOfRecommendationWithReferrer(web3, account, token.address, constants/* MASK_REFERRER */.wZ);
            props?.onChangePage?.(PagesType.BUY_TO_FARM, PagesType.BUY_TO_FARM);
            swapToken();
        } catch (error) {
            onError(error?.message);
        }
    }, [
        props?.onChangePage,
        web3,
        account,
        token
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: String(tab),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                    value: tab,
                    centered: true,
                    variant: "fullWidth",
                    onChange: (e, v)=>setTab(v)
                    ,
                    "aria-label": "persona-post-contacts-button-group",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: TabsReferAndBuy.NEW,
                            label: t.tab_new(),
                            classes: tabClasses
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: TabsReferAndBuy.MY_REWARDS,
                            label: t.tab_my_rewards(),
                            classes: tabClasses
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabPanel/* default */.Z, {
                    value: TabsReferAndBuy.NEW,
                    className: classes.tab,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontWeight: 600,
                            variant: "h6",
                            marginBottom: "12px",
                            children: t.select_a_token_to_buy_and_hold_and_earn_rewards()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            marginBottom: "24px",
                            children: t.join_the_farm()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            container: true,
                            rowSpacing: "24px",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 6,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenSelectField, {
                                        label: t.token_to_buy_and_hold(),
                                        token: token,
                                        disabled: currentChainId !== requiredChainId,
                                        onClick: onClickTokenSelect
                                    })
                                }),
                                !token || loading || !tokenRewards?.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RewardDataWidget, {}) : tokenRewards.map((reward)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RewardDataWidget, {
                                        title: t.sponsored_referral_farm(),
                                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SponsoredFarmIcon, {}),
                                        rewardData: reward,
                                        tokenSymbol: reward.rewardToken?.symbol
                                    }, reward.rewardToken?.address)
                                ),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                                    item: true,
                                    xs: 12,
                                    display: "flex-col",
                                    alignItems: "center",
                                    className: classes.typeNote,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                            marginTop: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(SponsoredFarmIcon, {}),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    fontWeight: 600,
                                                    margin: "0 4px 0 8px",
                                                    children: t.sponsored_farm()
                                                }),
                                                t.sponsored_farm_detail()
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                            expectedChainId: requiredChainId,
                            expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                                offChain: true,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    fullWidth: true,
                                    variant: "contained",
                                    size: "medium",
                                    disabled: !token,
                                    onClick: onClickBuyToFarm,
                                    children: t.buy_to_farm()
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: TabsReferAndBuy.MY_REWARDS,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MyRewards, {
                        pageType: PagesType.BUY_TO_FARM,
                        ...props
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/AdjustFarmRewards.tsx



















const AdjustFarmRewards_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        valueCol: {
            display: 'flex',
            flexDirection: 'column',
            '& span': {
                fontWeight: 600,
                marginTop: '4px'
            }
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '80%',
            fontSize: 12,
            top: theme.spacing(0.5)
        },
        textField: {
            '& input[type=number]': {
                height: 30,
                '-moz-appearance': 'textfield'
            },
            '& input[type=number]::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '& input[type=number]::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            }
        }
    })
);
function AdjustFarmRewards(props) {
    const { farm , rewardToken: rewardToken1 , referredToken  } = props;
    const t = useI18N();
    const { classes  } = AdjustFarmRewards_useStyles();
    const { classes: sharedClasses  } = useSharedStyles();
    const chainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const account = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    const requiredChainId = (0,helpers/* getRequiredChainId */.qL)(chainId);
    const { value: rewardBalance = '0'  } = (0,entry_web3/* useFungibleTokenBalance */.V4)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, rewardToken1?.address ?? '');
    const [attraceFee1, setAttraceFee] = (0,react.useState)(0);
    const [dailyFarmReward1, setDailyFarmReward] = (0,react.useState)('');
    const [totalFarmReward1, setTotalFarmReward] = (0,react.useState)('');
    const { value: farmDetailed  } = (0,useAsync/* default */.Z)(async ()=>farm?.farmHash && rewardToken1 ? Referral_messages/* ReferralRPC.getDailyAndTotalRewardsFarm */.f.getDailyAndTotalRewardsFarm(chainId, farm.farmHash, rewardToken1.decimals) : undefined
    , [
        farm,
        chainId,
        rewardToken1
    ]);
    const onChangeTotalFarmReward = (0,react.useCallback)((e)=>{
        const totalFarmReward = e.currentTarget.value;
        const attraceFee = Number.parseFloat(totalFarmReward) * (constants/* ATTRACE_FEE_PERCENT */.ll / 100);
        setTotalFarmReward(totalFarmReward);
        setAttraceFee(attraceFee);
    }, []);
    const onChangePageToAdjustRewards = (0,react.useCallback)(()=>{
        props?.onChangePage?.(PagesType.ADJUST_REWARDS, PagesType.ADJUST_REWARDS, {
            adjustFarmDialog: {
                farm,
                rewardToken: rewardToken1,
                referredToken,
                continue: ()=>{}
            }
        });
    }, [
        props?.onChangePage,
        farm,
        rewardToken1,
        referredToken
    ]);
    const onErrorDeposit = (0,react.useCallback)((message)=>{
        message && showSnackbar(message, {
            variant: 'error'
        });
        onChangePageToAdjustRewards();
    }, [
        props?.onChangePage,
        showSnackbar,
        onChangePageToAdjustRewards
    ]);
    const onConfirmedAdjustFarm = (0,react.useCallback)((txHash)=>{
        props?.onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideAttrLogo: true,
            hideBackBtn: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMED,
                    actionButton: {
                        label: t.dismiss(),
                        onClick: onChangePageToAdjustRewards
                    },
                    transactionHash: txHash
                }
            }
        });
    }, [
        props?.onChangePage,
        t,
        onChangePageToAdjustRewards
    ]);
    const onConfirmAdjustFarm = (0,react.useCallback)(()=>{
        const { title , subtitle  } = getTransactionTitles(Number.parseFloat(totalFarmReward1), Number.parseFloat(dailyFarmReward1), attraceFee1, props.rewardToken);
        props?.onChangePage?.(PagesType.TRANSACTION, t.transaction(), {
            hideAttrLogo: true,
            hideBackBtn: true,
            transactionDialog: {
                transaction: {
                    status: TransactionStatus.CONFIRMATION,
                    title,
                    subtitle
                }
            }
        });
    }, [
        props,
        totalFarmReward1,
        dailyFarmReward1,
        attraceFee1
    ]);
    const connection = (0,entry_web3/* useWeb3Connection */.Tv)();
    const onAdjustFarmReward = (0,react.useCallback)(async ()=>{
        if (!referredToken || !rewardToken1) {
            return onErrorDeposit(t.go_wrong());
        }
        const depositValue = Number.parseFloat(totalFarmReward1) + attraceFee1;
        try {
            await adjustFarmRewards(onConfirmAdjustFarm, onConfirmedAdjustFarm, web3, connection, account, chainId, rewardToken1, referredToken, depositValue, Number.parseFloat(dailyFarmReward1));
        } catch (err) {
            onErrorDeposit(err.message);
        }
    }, [
        web3,
        connection,
        account,
        chainId,
        referredToken,
        rewardToken1,
        totalFarmReward1,
        dailyFarmReward1,
        onErrorDeposit,
        onConfirmedAdjustFarm,
        onConfirmAdjustFarm, 
    ]);
    const onOpenDepositDialog = (0,react.useCallback)(()=>{
        props.continue(PagesType.ADJUST_REWARDS, PagesType.DEPOSIT, PagesType.ADJUST_REWARDS, {
            hideAttrLogo: true,
            depositDialog: {
                deposit: {
                    totalFarmReward: totalFarmReward1,
                    token: rewardToken1,
                    attraceFee: attraceFee1,
                    requiredChainId,
                    onDeposit: onAdjustFarmReward
                },
                adjustFarmData: {
                    farm,
                    referredToken,
                    rewardToken: rewardToken1
                }
            }
        });
    }, [
        props,
        attraceFee1,
        totalFarmReward1,
        referredToken,
        rewardToken1,
        requiredChainId,
        farm,
        onAdjustFarmReward
    ]);
    const onClickAdjustRewards = (0,react.useCallback)(()=>{
        if (totalFarmReward1 && Number.parseFloat(totalFarmReward1) > 0) {
            onOpenDepositDialog();
        } else {
            onAdjustFarmReward();
        }
    }, [
        totalFarmReward1,
        onOpenDepositDialog,
        onAdjustFarmReward
    ]);
    const getTransactionTitles = (0,react.useCallback)((totalFarmReward, dailyFarmReward, attraceFee, rewardToken)=>{
        totalFarmReward = (0,helpers/* roundValue */.dt)(totalFarmReward + attraceFee, rewardToken?.decimals);
        dailyFarmReward = (0,helpers/* roundValue */.dt)(dailyFarmReward, rewardToken?.decimals);
        if (totalFarmReward && dailyFarmReward) {
            return {
                title: t.confirm_transaction(),
                subtitle: t.adjust_daily_and_total_reward_desc({
                    totalReward: totalFarmReward.toString(),
                    dailyReward: dailyFarmReward.toString(),
                    symbol: rewardToken?.symbol ?? ''
                })
            };
        }
        if (totalFarmReward) {
            return {
                title: t.confirm_deposit(),
                subtitle: t.adjust_total_reward_desc({
                    reward: totalFarmReward.toString(),
                    symbol: rewardToken?.symbol ?? ''
                })
            };
        }
        return {
            title: t.confirm_transaction(),
            subtitle: t.adjust_daily_reward_desc({
                reward: dailyFarmReward.toString(),
                symbol: rewardToken?.symbol ?? ''
            })
        };
    }, [
        t
    ]);
    const rewardData = {
        dailyReward: (0,helpers/* roundValue */.dt)(farmDetailed?.dailyFarmReward ?? '0'),
        totalReward: (0,helpers/* roundValue */.dt)(farmDetailed?.totalFarmRewards ?? '0')
    };
    const balance = (0,base_src/* formatBalance */.az)(rewardBalance ?? '', rewardToken1?.decimals, 6);
    const totalFarmRewardNum = Number.parseFloat(totalFarmReward1);
    const dailyFarmRewardNum = Number.parseFloat(dailyFarmReward1);
    const insufficientFunds = totalFarmRewardNum > Number.parseFloat(balance);
    const totalFarmRewardLessThanDailyFarmReward = totalFarmRewardNum < dailyFarmRewardNum;
    const adjustRewardsBtnDisabled = !dailyFarmRewardNum && !totalFarmRewardNum || insufficientFunds || totalFarmRewardLessThanDailyFarmReward;
    return rewardToken1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box_Box/* default */.Z, {
        display: "flex",
        flexDirection: "column",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            marginY: 3,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    marginBottom: "24px",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        fontWeight: 600,
                        variant: "h6",
                        children: t.adjust_rewards_desc()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    marginBottom: "24px",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FarmTokenDetailed, {
                        token: referredToken
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "24px",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            item: true,
                            xs: 4,
                            className: classes.valueCol,
                            children: [
                                t.daily_farm_reward(),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: rewardData ? `${rewardData.dailyReward} ${rewardToken1?.symbol ?? '-'}` : '-'
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                            item: true,
                            xs: 4,
                            className: classes.valueCol,
                            children: [
                                t.total_farm_rewards(),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    children: [
                                        " ",
                                        rewardData ? `${rewardData.totalReward} ${rewardToken1?.symbol ?? '-'}` : '-'
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    display: "flex",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: t.daily_farm_reward(),
                        value: dailyFarmReward1,
                        placeholder: rewardData.dailyReward.toString(),
                        onChange: (e)=>setDailyFarmReward(e.currentTarget.value)
                        ,
                        inputMode: "numeric",
                        type: "number",
                        InputLabelProps: {
                            shrink: true
                        },
                        variant: "standard",
                        className: classes.textField,
                        InputProps: {
                            disableUnderline: true,
                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                                position: "end",
                                children: rewardToken1?.symbol
                            })
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 6,
                    display: "flex",
                    alignItems: "end",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: t.additional_farm_rewards(),
                        value: totalFarmReward1,
                        inputMode: "numeric",
                        type: "number",
                        placeholder: "0",
                        onChange: onChangeTotalFarmReward,
                        InputLabelProps: {
                            shrink: true
                        },
                        variant: "standard",
                        className: classes.textField,
                        InputProps: {
                            disableUnderline: true,
                            endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputAdornment/* default */.Z, {
                                position: "start",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            className: classes.balance,
                                            color: "textSecondary",
                                            variant: "body2",
                                            component: "span",
                                            children: [
                                                t.wallet_balance(),
                                                ": ",
                                                balance
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box_Box/* default */.Z, {
                                            display: "flex",
                                            alignItems: "center",
                                            children: [
                                                rewardToken1?.symbol,
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                                                    size: "small",
                                                    label: "MAX",
                                                    clickable: true,
                                                    color: "primary",
                                                    className: sharedClasses.maxChip,
                                                    variant: "outlined",
                                                    onClick: ()=>setTotalFarmReward(balance)
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    marginTop: "24px",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                        expectedChainId: requiredChainId,
                        expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                fullWidth: true,
                                variant: "contained",
                                size: "medium",
                                disabled: adjustRewardsBtnDisabled,
                                onClick: onClickAdjustRewards,
                                children: insufficientFunds || totalFarmRewardLessThanDailyFarmReward ? /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                    children: insufficientFunds ? t.error_insufficient_balance({
                                        symbol: rewardToken1?.symbol ?? ''
                                    }) : t.error_daily_rewards()
                                }) : t.adjust_rewards()
                            })
                        })
                    })
                })
            ]
        })
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        fontWeight: 500,
        variant: "h6",
        textAlign: "center",
        padding: 8,
        children: t.adjust_rewards_error()
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/resolver.ts
var resolver = __webpack_require__(94861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(28257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.8.0_ar3vczqpton7uep5462l6mtgi4/node_modules/@mui/icons-material/Done.js
var Done = __webpack_require__(31363);
;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/Transaction.tsx










const Transaction_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        confirmation: {
            padding: '45px 36px 40px'
        },
        heading: {
            fontSize: '20px',
            fontWeight: 600
        },
        title: {
            margin: '12px 0 8px',
            fontSize: '18px',
            lineHeight: '25px',
            color: theme.palette.text.strong,
            fontWeight: 600
        },
        subtitle: {
            fontSize: '16px',
            lineHeight: '22px',
            color: theme.palette.text.secondary,
            textAlign: 'center'
        }
    })
);
function Transaction(props) {
    const t = useI18N();
    const currentChainId = (0,entry_web3/* useChainId */.xx)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const { classes  } = Transaction_useStyles();
    if (!props?.transaction) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: null
    });
    const { transaction  } = props;
    if (transaction.status === TransactionStatus.CONFIRMATION) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            className: classes.confirmation,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                    size: 72
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    variant: "h6",
                    children: transaction.title
                }),
                transaction.subtitle && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.subtitle,
                    children: transaction.subtitle
                })
            ]
        });
    }
    if (transaction.status === TransactionStatus.CONFIRMED) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
            container: true,
            textAlign: "center",
            sx: {
                pt: 6,
                pb: 3
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    marginBottom: "10px",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
                        sx: {
                            fontSize: 60
                        }
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    className: classes.title,
                    children: t.transaction_confirmed()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: resolver/* explorerResolver.transactionLink */.Nb.transactionLink?.(currentChainId, transaction.transactionHash),
                        fontSize: "16px",
                        lineHeight: "22px",
                        target: "_blank",
                        children: t.view_on_explorer()
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                    item: true,
                    xs: 12,
                    marginTop: "40px",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        fullWidth: true,
                        variant: "contained",
                        size: "medium",
                        onClick: ()=>transaction.actionButton.onClick()
                        ,
                        children: transaction.actionButton.label
                    })
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: null
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/Deposit.tsx










const Deposit_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        container: {
            fontFamily: theme.typography.fontFamily,
            padding: `${theme.spacing(3)} 0`
        },
        row: {
            display: 'flex',
            justifyContent: 'space-between',
            color: theme.palette.text.secondary,
            marginBottom: '12px',
            fontSize: '1rem'
        },
        total: {
            fontWeight: 600
        }
    })
);
function Deposit(props) {
    const t = useI18N();
    const { classes  } = Deposit_useStyles();
    const onClickDeposit = (0,react.useCallback)(async ()=>{
        props?.deposit && await props.deposit.onDeposit();
    }, [
        props
    ]);
    if (!props?.deposit) return null;
    const { deposit  } = props;
    const totalDeposit = (0,helpers/* roundValue */.dt)(Number.parseFloat(deposit.totalFarmReward) + deposit.attraceFee, deposit.token?.decimals);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        display: "flex",
        flexDirection: "column",
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    fontWeight: 600,
                    variant: "h6",
                    marginBottom: "24px",
                    children: t.deposit_total_rewards()
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                className: classes.row,
                children: [
                    t.total_farm_rewards(),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            (0,helpers/* roundValue */.dt)(deposit.totalFarmReward),
                            " ",
                            deposit.token?.symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                className: classes.row,
                children: [
                    t.attrace_fees(),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            (0,helpers/* roundValue */.dt)(deposit.attraceFee),
                            " ",
                            deposit.token?.symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                className: `${classes.row} ${classes.total}`,
                children: [
                    t.deposit_total(),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            totalDeposit,
                            " ",
                            deposit.token?.symbol
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                marginTop: "24px",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChainBoundary/* ChainBoundary */.s, {
                    expectedChainId: deposit.requiredChainId,
                    expectedPluginID: base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletConnectedBoundary/* WalletConnectedBoundary */.T, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ActionButton/* default */.ZP, {
                            fullWidth: true,
                            variant: "contained",
                            size: "medium",
                            onClick: onClickDeposit,
                            children: [
                                t.deposit(),
                                " ",
                                totalDeposit,
                                " ",
                                deposit.token?.symbol
                            ]
                        })
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/ReferralDialog.tsx


















const ReferralDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { hideBackBtn =false  })=>({
        walletStatusBox: {
            width: 535,
            margin: '24px auto'
        },
        content: {
            fontFamily: theme.typography.fontFamily,
            fontWeight: 400,
            padding: theme.spacing(0, 3, 0),
            margin: 0
        },
        title: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        powered: {
            display: 'flex',
            alignItems: 'center',
            fontWeight: 400,
            fontSize: '12px',
            color: theme.palette.text.secondary,
            '& svg': {
                marginLeft: 5
            }
        },
        dialogTitleTypography: {
            flex: '1',
            marginLeft: 0
        },
        dialogTitle: {
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: '60px',
            padding: theme.spacing(0, 3),
            fontSize: '19px',
            lineHeight: '27px',
            fontWeight: 600,
            margin: 0
        },
        dialog: {
            maxWidth: 600,
            boxShadow: 'none',
            backgroundImage: 'none'
        },
        dialogCloseButton: {
            display: hideBackBtn ? 'none' : 'inline-flex',
            color: theme.palette.text.strong,
            padding: 0,
            marginRight: '16px'
        }
    })
);
function ReferralDialog({ open , onClose  }) {
    const [propsData, setPropsData] = (0,react.useState)();
    const t = useI18N();
    const { classes  } = ReferralDialog_useStyles({
        hideBackBtn: propsData?.hideBackBtn
    });
    const [currentPage1, setCurrentPage] = (0,react.useState)({
        page: PagesType.LANDING,
        title: t.__plugin_name()
    });
    const mode = (0,useTheme/* default */.Z)().palette.mode;
    const [previousPages, setPreviousPages] = (0,react.useState)([]);
    const [currentTitle, setCurrentTitle] = (0,react.useState)(t.__plugin_name());
    const onContinue = (currentPage, nextPage, title = t.__plugin_name(), props)=>{
        setPreviousPages([
            ...previousPages,
            {
                page: currentPage,
                title: currentTitle
            }
        ]);
        setCurrentPage({
            page: nextPage,
            title
        });
        setCurrentTitle(title);
        setPropsData(props);
    };
    const onChangePage = (page, title = t.__plugin_name(), props)=>{
        setCurrentPage({
            page,
            title
        });
        setCurrentTitle(title);
        setPropsData(props);
    };
    const renderViews = ()=>{
        const { page  } = currentPage1;
        switch(page){
            case PagesType.LANDING:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Landing, {
                    continue: onContinue
                });
            case PagesType.REFERRAL_FARMS:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferralFarms, {
                    continue: onContinue
                });
            case PagesType.CREATE_FARM:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(CreateFarm, {
                    continue: onContinue,
                    onClose: onClose,
                    onChangePage: onChangePage
                });
            case PagesType.REFER_TO_FARM:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferToFarm, {
                    continue: onContinue,
                    onClose: onClose,
                    onChangePage: onChangePage
                });
            case PagesType.BUY_TO_FARM:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(BuyToFarm, {
                    continue: onContinue,
                    onClose: onClose,
                    onChangePage: onChangePage
                });
            case PagesType.ADJUST_REWARDS:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(AdjustFarmRewards, {
                    ...propsData?.adjustFarmDialog,
                    continue: onContinue,
                    onClose: onClose,
                    onChangePage: onChangePage
                });
            case PagesType.DEPOSIT:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Deposit, {
                    ...propsData?.depositDialog
                });
            case PagesType.SELECT_TOKEN:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectToken, {});
            case PagesType.TRANSACTION:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Transaction, {
                    onClose: onClose,
                    ...propsData?.transactionDialog
                });
            default:
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Landing, {
                    continue: onContinue
                });
        }
    };
    const onBackToAdjustRewardsDialog = (0,react.useCallback)(async ()=>{
        const props = {
            adjustFarmDialog: {
                ...propsData?.depositDialog?.adjustFarmData,
                continue: ()=>{}
            }
        };
        setPropsData(props);
    }, [
        propsData
    ]);
    const onHandleClose = (0,react.useCallback)(()=>{
        onClose?.();
        setCurrentPage({
            page: PagesType.LANDING,
            title: t.__plugin_name()
        });
        setCurrentTitle(t.__plugin_name());
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* InjectedDialog */.Fl, {
        open: open,
        isOnBack: currentPage1.page !== PagesType.LANDING,
        onClose: onHandleClose,
        titleBarIconStyle: "close",
        title: propsData?.hideAttrLogo ? currentTitle : /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
            className: classes.title,
            children: [
                currentTitle,
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    className: classes.powered,
                    children: [
                        t.powered_by(),
                        mode === 'dark' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AttraceLogoDarkTheme, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(AttraceLogoLightTheme, {})
                    ]
                })
            ]
        }),
        disableBackdropClick: true,
        classes: {
            paper: classes.dialog,
            dialogCloseButton: classes.dialogCloseButton,
            dialogTitle: classes.dialogTitle,
            dialogTitleTypography: classes.dialogTitleTypography
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
            className: classes.content,
            children: renderViews()
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/Referral/SNSAdaptor/index.tsx











const sns = {
    ...base/* base */.u,
    init () {},
    DecryptedInspector (props) {
        const metadata = (0,helpers/* referralMetadataReader */.HT)(props.message.meta);
        if (!metadata.ok) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(FarmPost, {
            payload: metadata.val
        });
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* META_KEY */.U6,
            (payload)=>{
                return {
                    text: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferralFarmsIcon, {
                                style: {
                                    width: 20,
                                    height: 19,
                                    marginRight: 4
                                }
                            }),
                            "Buy or refer ",
                            payload.referral_token_symbol,
                            " to Earn Referral Farming rewards!"
                        ]
                    })
                };
            }, 
        ], 
    ]),
    GlobalInjection: function Component() {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectToken, {});
    },
    ApplicationEntries: [
        (()=>{
            const icon = /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferralFarmsIcon, {});
            const name = {
                i18nKey: '__plugin_name',
                fallback: 'Referral Farms'
            };
            return {
                ApplicationEntryID: base/* base.ID */.u.ID,
                RenderEntryComponent (EntryComponentProps) {
                    const [open, setOpen] = (0,react.useState)(false);
                    const clickHandler = ()=>setOpen(true)
                    ;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ApplicationEntry */.Tv, {
                                ...EntryComponentProps,
                                icon: icon,
                                title: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry_content_script/* PluginI18NFieldRender */.KP, {
                                    field: name,
                                    pluginID: base/* base.ID */.u.ID
                                }),
                                onClick: EntryComponentProps.onClick ? ()=>EntryComponentProps.onClick?.(clickHandler)
                                 : clickHandler
                            }),
                            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferralDialog, {
                                open: open,
                                onClose: ()=>setOpen(false)
                            }) : null
                        ]
                    });
                },
                appBoardSortingDefaultPriority: 13,
                marketListSortingPriority: 18,
                icon,
                description: {
                    i18nKey: '__plugin_description',
                    fallback: 'Referral Farming distributes yield farming alike returns for successful referrals.'
                },
                name,
                category: 'dapp'
            };
        })(), 
    ],
    wrapperProps: {
        backgroundGradient: 'linear-gradient(235.14deg, #E8F4FF 0%, #E5E3FF 100%)',
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ReferralFarmsIcon, {
            style: {
                width: 24,
                height: 23
            }
        })
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 60184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_2": () => (/* binding */ expandBytes24ToBytes32),
  "aE": () => (/* binding */ expandEvmAddressToBytes32),
  "qL": () => (/* binding */ getRequiredChainId),
  "FZ": () => (/* binding */ parseChainAddress),
  "HT": () => (/* binding */ referralMetadataReader),
  "dt": () => (/* binding */ roundValue),
  "Gw": () => (/* binding */ toChainAddressEthers),
  "xe": () => (/* binding */ valueToNumber)
});

// UNUSED EXPORTS: toChainId, toEvmAddress, toNativeRewardTokenDefn

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 14 modules
var dom = __webpack_require__(30003);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(4068);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2596);
// EXTERNAL MODULE: ./src/plugins/Referral/constants.ts
var constants = __webpack_require__(97300);
;// CONCATENATED MODULE: ./src/plugins/Referral/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"referral_token":{"type":"string","title":"referral_token"},"sender":{"type":"string","title":"sender"}},"required":["referral_token","sender"]}');
;// CONCATENATED MODULE: ./src/plugins/Referral/helpers/buffer.ts

// Never used class to force ts compiler to hide the underlying alias type.
class TypeStub {
    constructor(){}
}
function toEvenLength(str) {
    if (str.length % 2 !== 0) {
        return '0' + str;
    }
    return str;
}
function isHexString(value) {
    return !!value.match(/^0x[\dA-Fa-f]*$/);
}
function hexToArrayBuffer(input) {
    if (input.length % 2 !== 0) {
        throw new RangeError('Expected string to be an even number of characters');
    }
    const view = new Uint8Array(input.length / 2);
    for(let i = 0; i < input.length; i += 2){
        view[i / 2] = Number.parseInt(input.slice(i, i + 2), 16);
    }
    return view;
}
function writeUInt32BE(buf1, value, offset) {
    if (value < 0 || value >= Number.MAX_SAFE_INTEGER) {
        throw new RangeError(`value must be >= 0 and <= ${Number.MAX_SAFE_INTEGER - 1}. Received ${value}`);
    }
    // eslint-disable-next-line no-bitwise
    buf1.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
    return buf1;
}
function buf(b) {
    if (b === null || b instanceof Uint8Array) return b;
    if (typeof b === 'number') {
        return hexToArrayBuffer(new (bignumber_default())(b).toString(16).slice(2));
    }
    if (typeof b === 'bigint') return hexToArrayBuffer(toEvenLength(b.toString(16)));
    if (typeof b === 'string') {
        if (!b.startsWith('0x')) throw new Error('unsupported');
        const hex = b.slice(2);
        if (hex.length % 2 !== 0 || !isHexString(b)) {
            throw new Error('invalid hex string');
        }
        return hexToArrayBuffer(hex);
    }
    // This should return the most compact buffer version without leading zeros, so safe for RLP encodings.
    if (b instanceof (bignumber_default()) || b?._isBigNumber === true) return hexToArrayBuffer(b.toHexString().slice(2));
    throw new Error('unsupported: ');
}
function toBigInt(b) {
    if (typeof b === 'bigint') return b;
    if (typeof b === 'number') return BigInt(b);
    if (b instanceof Uint8Array) return toBigInt(buf(b));
    if (typeof b === 'string' && b.startsWith('0x')) return BigInt(b);
    if (b instanceof (bignumber_default()) || b?._isBigNumber === true) return BigInt(b.toString());
    throw new Error('unsupported');
}

;// CONCATENATED MODULE: ./src/plugins/Referral/helpers/index.tsx









function toChainAddress(chainId, address) {
    if ((0,utils_address/* isValidAddress */.At)(`0x${(0,lib.bytesToHex)([
        ...address
    ])}`)) throw new Error('invalid address');
    const b = new Uint8Array(24);
    // Only numeric network id's are supported in the chain address, with max of uint32.
    // TODO throw on this if wrong
    writeUInt32BE(b, Number(toBigInt(chainId)), 0);
    b.set(address, 4);
    return b;
}
function toChainAddressEthers(chainId, address) {
    return (0,lib.bytesToHex)([
        ...toChainAddress(new (bignumber_default())(chainId), hexToArrayBuffer(address.slice(2)))
    ]);
}
function parseChainAddress(chainAddress) {
    const chainId = toChainId(chainAddress);
    const address = toEvmAddress(chainAddress);
    const isNative = chainId === Number.parseInt(address.slice(Math.max(0, 2 + 16 * 2)), 16);
    return {
        chainId,
        address,
        isNative
    };
}
function toNativeRewardTokenDefn(chainId) {
    const nativeTokenAddr = '0x' + padStart(Number(chainId).toString(16), 40, '0');
    return toChainAddressEthers(chainId, nativeTokenAddr);
}
function expandEvmAddressToBytes32(addr) {
    return `0x000000000000000000000000${addr.slice(2)}`.toLowerCase();
}
function expandBytes24ToBytes32(b24) {
    return `0x${b24.slice(2)}0000000000000000`.toLowerCase();
}
function toEvmAddress(addr) {
    return `0x${addr.slice(Math.max(0, 2 + 4 * 2))}`;
}
function toChainId(addr) {
    return Number.parseInt(addr.slice(2, 2 + 4 * 2), 16);
}
function roundValue(value, tokenDecimals) {
    const valueStr = tokenDecimals === 0 ? Math.ceil(Number(value)).toString() : Number(value).toFixed(5);
    return Number.parseFloat(valueStr);
}
function getRequiredChainId(currentChainId) {
    return constants/* supportedChainId */.w === currentChainId ? currentChainId : constants/* supportedChainId */.w;
}
const referralMetadataReader = (0,dom/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY */.U6, schema_namespaceObject);
function valueToNumber(value) {
    return Number.parseInt((0,lib_esm/* formatUnits */.bM)(value, 0), 10);
}


/***/ }),

/***/ 72132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ PluginReferralMessages),
/* harmony export */   "f": () => (/* binding */ ReferralRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97300);


if (false) {}
const PluginReferralMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .META_KEY */ .U6);
const ReferralRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(187), __webpack_require__.e(2788), __webpack_require__.e(1818)]).then(__webpack_require__.bind(__webpack_require__, 82969))
, PluginReferralMessages.rpc);


/***/ }),

/***/ 38329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45374);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(187), __webpack_require__.e(3758), __webpack_require__.e(444), __webpack_require__.e(1851), __webpack_require__.e(211), __webpack_require__.e(7604), __webpack_require__.e(3375), __webpack_require__.e(1626), __webpack_require__.e(6943)]).then(__webpack_require__.bind(__webpack_require__, 20145))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 73495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ ChainBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(76618);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(21784);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50719);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72499);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80226);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46123);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72288);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93455);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(91788);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77818);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(47061);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(89239);















const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        action: {
            textAlign: 'center',
            margin: theme.spacing(1),
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 48
        },
        tooltip: {
            borderRadius: 4,
            padding: 10
        }
    })
);
function ChainBoundary(props) {
    const { noSwitchNetworkTip =true , expectedPluginID , expectedChainId , predicate =(actualPluginID, actualChainId)=>actualPluginID === expectedPluginID && actualChainId === expectedChainId
     ,  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useI18N */ .M1)();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const actualPluginID1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const plugin = (0,_masknet_plugin_infra_dom__WEBPACK_IMPORTED_MODULE_11__/* .useActivatedPlugin */ .Rc)(actualPluginID1, 'any');
    const { Others: actualOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(actualPluginID1);
    const actualChainId1 = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)(actualPluginID1);
    const actualProviderType = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useProviderType */ ._o)(actualPluginID1);
    const actualChainName = actualOthers?.chainResolver.chainName(actualChainId1);
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .mA)(actualPluginID1);
    const { Others: expectedOthers  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3State */ .dM)(expectedPluginID);
    const expectedConnection = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3Connection */ .Tv)(expectedPluginID);
    const expectedAllowTestnet = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useAllowTestnet */ .QE)(expectedPluginID);
    const expectedChainName = expectedOthers?.chainResolver.chainName(expectedChainId);
    const expectedNetworkDescriptor = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_3__/* .useNetworkDescriptor */ .Vw)(_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_10__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, expectedChainId);
    const expectedChainAllowed = expectedOthers?.chainResolver.isValid(expectedChainId, expectedAllowTestnet);
    const isPluginIDMatched = actualPluginID1 === expectedPluginID;
    const isMatched = predicate(actualPluginID1, actualChainId1);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_4__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_8__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    const onSwitchChain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ()=>{
        // a short time loading makes the user fells better
        await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .delay */ .gw)(1000);
        if (!expectedChainAllowed) return;
        if (!isPluginIDMatched || actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect) {
            openSelectProviderDialog();
            return;
        }
        if (!isMatched) {
            await expectedConnection?.connect({
                chainId: expectedChainId
            });
        }
    }, [
        expectedChainAllowed,
        isMatched,
        isPluginIDMatched,
        actualProviderType,
        expectedChainId,
        expectedConnection,
        openSelectProviderDialog, 
    ]);
    // TODO: will remove this and extract new boundary for timeline
    const buttonProps = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return {
            ...props.renderInTimeline ? {
                variant: 'contained',
                fullWidth: true,
                sx: {
                    backgroundColor: theme.palette.maskColor?.dark,
                    color: theme.palette.maskColor?.white,
                    '&:hover': {
                        backgroundColor: theme.palette.maskColor?.dark
                    }
                }
            } : {},
            ...props.ActionButtonPromiseProps
        };
    }, [
        props.ActionButtonPromiseProps,
        props.renderInTimeline
    ]);
    const renderBox = (children, tips)=>{
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootTooltip */ .p_, {
            title: tips ?? '',
            classes: {
                tooltip: classes.tooltip
            },
            arrow: true,
            placement: "top",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                className: props.className,
                sx: {
                    flex: 1
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: children
            })
        });
    };
    if (!account) return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: !props.hiddenConnectButton ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {
            fullWidth: true,
            startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_15__/* .PluginWalletConnectIcon */ .Q, {}),
            variant: "contained",
            size: props.ActionButtonPromiseProps?.size,
            sx: {
                marginTop: 1.5
            },
            onClick: openSelectProviderDialog,
            ...buttonProps,
            children: t('plugin_wallet_connect_wallet')
        }) : null
    }));
    if (isMatched) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    });
    if (actualPluginID1 !== expectedPluginID) {
        return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                    color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_not_available_on', {
                            network: plugin?.name?.fallback ?? 'Unknown Plugin'
                        })
                    })
                }) : null,
                expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                    fullWidth: true,
                    className: classes.switchButton,
                    startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                        mainIcon: expectedNetworkDescriptor?.icon,
                        size: 18
                    }),
                    sx: props.ActionButtonPromiseProps?.sx,
                    style: {
                        borderRadius: 10
                    },
                    init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                        children: t('plugin_wallet_connect_network', {
                            network: 'EVM'
                        })
                    }),
                    waiting: t('plugin_wallet_connect_network_under_going', {
                        network: 'EVM'
                    }),
                    complete: t('plugin_wallet_connect_network', {
                        network: 'EVM'
                    }),
                    failed: t('retry'),
                    executor: onSwitchChain,
                    completeOnClick: onSwitchChain,
                    failedOnClick: "use executor",
                    ...buttonProps
                }) : null
            ]
        }));
    }
    return renderBox(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            !noSwitchNetworkTip ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.errorPlugin */ .ZN.errorPlugin,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_not_available_on', {
                        network: actualChainName
                    })
                })
            }) : null,
            expectedChainAllowed ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_6__/* .ActionButtonPromise */ .Zc, {
                startIcon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_9__/* .WalletIcon */ .o, {
                    mainIcon: expectedNetworkDescriptor?.icon,
                    size: 18
                }),
                sx: props.ActionButtonPromiseProps?.sx,
                style: {
                    borderRadius: 10,
                    paddingTop: 11,
                    paddingBottom: 11
                },
                init: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                    children: t('plugin_wallet_switch_network', {
                        network: expectedChainName
                    })
                }),
                waiting: t('plugin_wallet_switch_network_under_going', {
                    network: expectedChainName
                }),
                complete: t('plugin_wallet_switch_network', {
                    network: expectedChainName
                }),
                failed: t('retry'),
                executor: onSwitchChain,
                completeOnClick: onSwitchChain,
                failedOnClick: "use executor",
                ...buttonProps
            }) : null
        ]
    }), actualProviderType === _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_13__/* .ProviderType.WalletConnect */ .lP.WalletConnect ? t('plugin_wallet_connect_tips') : '');
}


/***/ }),

/***/ 59345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ WalletConnectedBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31939);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80226);
/* harmony import */ var _extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72288);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91788);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93455);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67938);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(50719);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        button: {
            margin: 0
        },
        timeline: {
            backgroundColor: theme.palette.maskColor?.dark,
            color: 'white',
            fontSize: 14,
            fontWeight: 700,
            width: '100%',
            '&:hover': {
                backgroundColor: theme.palette.maskColor?.dark
            }
        }
    })
);
function WalletConnectedBoundary(props) {
    const { children =null , offChain =false , hideRiskWarningConfirmed =false , renderInTimeline =false  } = props;
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .useI18N */ .M1)();
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const pluginID = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const account = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useAccount */ .mA)();
    const chainIdValid = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useChainId */ .xx)();
    const nativeTokenBalance = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useNativeTokenBalance */ .hj)();
    const approved = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_8__/* .useRiskWarningApproved */ ._W)();
    const { setDialog: setRiskWarningDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.walletRiskWarningDialogUpdated */ .R.events.walletRiskWarningDialogUpdated);
    const { openDialog: openSelectProviderDialog  } = (0,_masknet_shared_base_ui__WEBPACK_IMPORTED_MODULE_3__/* .useRemoteControlledDialog */ .F$)(_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_5__/* .WalletMessages.events.selectProviderDialogUpdated */ .R.events.selectProviderDialogUpdated);
    // TODO: will remove  this and extract new boundary for timeline
    const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.button, classes.connectWallet, renderInTimeline ? classes.timeline : null));
    if (!account) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        startIcon: props.startIcon,
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: openSelectProviderDialog,
        ...props.ActionButtonProps,
        children: t('plugin_wallet_connect_a_wallet')
    });
    if (!approved && !hideRiskWarningConfirmed) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        fullWidth: true,
        variant: "contained",
        onClick: ()=>{
            setRiskWarningDialog({
                open: true,
                account,
                pluginID
            });
        },
        ...props.ActionButtonProps,
        children: t('plugin_wallet_confirm_risk_warning')
    });
    if ((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .isZero */ .Fr)(nativeTokenBalance.value ?? '0') && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: !nativeTokenBalance.error,
        fullWidth: true,
        variant: "contained",
        onClick: nativeTokenBalance.retry,
        ...props.ActionButtonProps,
        children: t(nativeTokenBalance.loading ? 'plugin_wallet_update_gas_fee' : 'plugin_wallet_no_gas_fee')
    });
    if (!chainIdValid && !offChain) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_extension_options_page_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP, {
        className: buttonClass,
        disabled: true,
        fullWidth: true,
        variant: "contained",
        ...props.ActionButtonProps,
        children: t('plugin_wallet_invalid_network')
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 59981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3cfe0781e88eef42f1a4.png";

/***/ }),

/***/ 43072:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5836ffcf26e1d5d811a8.png";

/***/ }),

/***/ 42853:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"delta","type":"uint128"}],"name":"FarmDepositDecreaseClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"value","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"confirmation","type":"uint128"}],"name":"FarmDepositDecreaseRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"delta","type":"uint128"}],"name":"FarmDepositIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"indexed":true,"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"indexed":false,"internalType":"bytes32","name":"farmHash","type":"bytes32"}],"name":"FarmExists","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"value","type":"bytes"}],"name":"FarmMetastate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"value","type":"uint128"},{"indexed":false,"internalType":"bytes32","name":"leafHash","type":"bytes32"}],"name":"RewardsHarvested","type":"event"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"internalType":"uint128","name":"confirmation","type":"uint128"},{"internalType":"uint128","name":"value","type":"uint128"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claimReferralFarmDecrease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"confirmationsAddr_","type":"address"}],"name":"configure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"components":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes","name":"value","type":"bytes"}],"internalType":"struct KeyVal[]","name":"metastate","type":"tuple[]"}],"name":"configureMetastate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"devRescueErc20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"devRescueNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getAccountTokenConfirmationOffset","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"internalType":"int256","name":"idx","type":"int256"}],"name":"getFarmConfirmationReward","outputs":[{"components":[{"internalType":"uint128","name":"reward","type":"uint128"},{"internalType":"uint128","name":"activationConfirmation","type":"uint128"}],"internalType":"struct FarmConfirmationReward","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"farmHash","type":"bytes32"}],"name":"getFarmDepositRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"components":[{"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"internalType":"uint128","name":"value","type":"uint128"},{"internalType":"uint128","name":"confirmation","type":"uint128"}],"internalType":"struct TokenEntitlement[]","name":"entitlements","type":"tuple[]"}],"internalType":"struct HarvestTokenRequest[]","name":"reqs","type":"tuple[]"},{"internalType":"bytes32[][][]","name":"proofs","type":"bytes32[][][]"}],"name":"harvestRewardsNoGapcheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"internalType":"uint128","name":"rewardDeposit","type":"uint128"},{"components":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes","name":"value","type":"bytes"}],"internalType":"struct KeyVal[]","name":"metastate","type":"tuple[]"}],"name":"increaseReferralFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"internalType":"uint128","name":"value","type":"uint128"}],"name":"requestDecreaseReferralFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);