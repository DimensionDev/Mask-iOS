"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4023],{

/***/ 99195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_private_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36028);
/* harmony import */ var _material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2633);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8361);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73102);








function InnerThemeProvider(props) {
  const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_4__.T.Provider, {
    value: typeof theme === 'object' ? theme : {},
    children: props.children
  });
}

 false ? 0 : void 0;
/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 */

function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_material_ui_private_theming__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    theme: localTheme,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(InnerThemeProvider, {
      children: children
    })
  });
}

 false ? 0 : void 0;

if (false) {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeProvider);

/***/ }),

/***/ 84441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k9": () => (/* binding */ handleBreakpoints),
/* harmony export */   "W8": () => (/* binding */ createEmptyBreakpointObject),
/* harmony export */   "L7": () => (/* binding */ removeUnusedBreakpoints)
/* harmony export */ });
/* unused harmony export mergeBreakpointsInOrder */
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);



 // The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.

const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablets
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screens

};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};

  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }

      return acc;
    }, {});
  }

  const output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  const newStyleFunction = props => {
    const theme = props.theme || {};
    const base = styleFunction(props);
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(_extends({
          theme
        }, props[key]));
      }

      return acc;
    }, null);
    return merge(base, extended);
  };

  newStyleFunction.propTypes =  false ? 0 : {};
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl', ...styleFunction.filterProps];
  return newStyleFunction;
}

function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;

  const breakpointsInOrder = breakpointsInput == null ? void 0 : (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = Object.keys(breakpointOutput).length === 0;

    if (isBreakpointUnused) {
      delete acc[key];
    }

    return acc;
  }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (breakpoints)));

/***/ }),

/***/ 67811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vq": () => (/* binding */ rgbToHex),
/* harmony export */   "mi": () => (/* binding */ getContrastRatio),
/* harmony export */   "_4": () => (/* binding */ emphasize),
/* harmony export */   "Fq": () => (/* binding */ alpha),
/* harmony export */   "_j": () => (/* binding */ darken),
/* harmony export */   "$n": () => (/* binding */ lighten)
/* harmony export */ });
/* unused harmony exports hexToRgb, hslToRgb, decomposeColor, recomposeColor, getLuminance */
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54698);


/* eslint-disable @typescript-eslint/no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min = 0, max = 1) {
  if (false) {}

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }

  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}

function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}
/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);

  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error( false ? 0 : (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(9, color));
  }

  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;

  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();

    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1);
    }

    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error( false ? 0 : (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }

  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}
/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }

  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }

  return `${type}(${values})`;
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }

    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function alpha(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }

  return recomposeColor(color);
}
/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ 7765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createBox)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40531);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81987);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25789);
/* harmony import */ var _material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82334);
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98612);
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46426);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8361);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73102);


const _excluded = ["className", "component"];







function createBox(options = {}) {
  const {
    defaultTheme
  } = options;
  const BoxRoot = (0,_material_ui_styled_engine__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)('div')(_styleFunctionSx__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z);
  const Box = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function Box(inProps, ref) {
    const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(defaultTheme);

    const _extendSxProp = (0,_styleFunctionSx__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(inProps),
          {
      className,
      component = 'div'
    } = _extendSxProp,
          other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(_extendSxProp, _excluded);

    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BoxRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)({
      as: component,
      ref: ref,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(className, 'MuiBox-root'),
      theme: theme
    }, other));
  });
   false ? 0 : void 0;
  return Box;
}

/***/ }),

/***/ 94595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ createStyled),
  "x9": () => (/* binding */ shouldForwardProp)
});

// UNUSED EXPORTS: systemDefaultTheme

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+styled-engine@5.0.0-beta.4_8e4d0aed8246b9fd310aa179f0a5a6d8/node_modules/@material-ui/styled-engine/index.js + 3 modules
var styled_engine = __webpack_require__(82334);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/createTheme/createTheme.js + 3 modules
var createTheme = __webpack_require__(39911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(98612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+utils@5.0.0-beta.4_react@18.0.0-alpha-aecb3b6d1/node_modules/@material-ui/utils/esm/capitalize.js
var capitalize = __webpack_require__(76008);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/propsToClassKey.js

const _excluded = ["variant"];


function isEmpty(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created.
 */


function propsToClassKey(props) {
  const {
    variant
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  let classKey = variant || '';
  Object.keys(other).sort().forEach(key => {
    if (key === 'color') {
      classKey += isEmpty(classKey) ? props[key] : (0,capitalize/* default */.Z)(props[key]);
    } else {
      classKey += `${isEmpty(classKey) ? key : (0,capitalize/* default */.Z)(key)}${(0,capitalize/* default */.Z)(props[key].toString())}`;
    }
  });
  return classKey;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/createStyled.js


const createStyled_excluded = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"],
      _excluded2 = ["theme"],
      _excluded3 = ["theme"];






function createStyled_isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const getStyleOverrides = (name, theme) => {
  if (theme.components && theme.components[name] && theme.components[name].styleOverrides) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

const getVariantStyles = (name, theme) => {
  let variants = [];

  if (theme && theme.components && theme.components[name] && theme.components[name].variants) {
    variants = theme.components[name].variants;
  }

  const variantsStyles = {};
  variants.forEach(definition => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};

const variantsResolver = (props, styles, theme, name) => {
  var _theme$components, _theme$components$nam;

  const {
    styleProps = {}
  } = props;
  let variantsStyles = {};
  const themeVariants = theme == null ? void 0 : (_theme$components = theme.components) == null ? void 0 : (_theme$components$nam = _theme$components[name]) == null ? void 0 : _theme$components$nam.variants;

  if (themeVariants) {
    themeVariants.forEach(themeVariant => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach(key => {
        if (styleProps[key] !== themeVariant.props[key] && props[key] !== themeVariant.props[key]) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsStyles = (0,esm_extends/* default */.Z)({}, variantsStyles, styles[propsToClassKey(themeVariant.props)]);
      }
    });
  }

  return variantsStyles;
};

function shouldForwardProp(prop) {
  return prop !== 'styleProps' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = (0,createTheme/* default */.Z)();

const lowercaseFirstLetter = string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
};

function createStyled(input = {}) {
  const {
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  return (tag, inputOptions = {}) => {
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      overridesResolver
    } = inputOptions,
          options = (0,objectWithoutPropertiesLoose/* default */.Z)(inputOptions, createStyled_excluded); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.


    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver : componentSlot && componentSlot !== 'Root' || false;
    const skipSx = inputSkipSx || false;
    let className;

    if (componentName) {
      className = `${componentName}-${lowercaseFirstLetter(componentSlot || 'Root')}`;
    }

    const defaultStyledResolver = (0,styled_engine/* default */.ZP)(tag, (0,esm_extends/* default */.Z)({}, !componentSlot || componentSlot === 'Root' ? {
      shouldForwardProp: rootShouldForwardProp
    } : {
      shouldForwardProp: slotShouldForwardProp
    }, {
      label: className || componentName || ''
    }, options));

    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map(stylesArg => {
        return typeof stylesArg === 'function' ? _ref => {
          let {
            theme: themeInput
          } = _ref,
              other = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, _excluded2);

          return stylesArg((0,esm_extends/* default */.Z)({
            theme: createStyled_isEmpty(themeInput) ? defaultTheme : themeInput
          }, other));
        } : stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;

      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = createStyled_isEmpty(props.theme) ? defaultTheme : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);

          if (styleOverrides) {
            return overridesResolver(props, styleOverrides);
          }

          return null;
        });
      }

      if (componentName && overridesResolver && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = createStyled_isEmpty(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(props, getVariantStyles(componentName, theme), theme, componentName);
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push(props => {
          const theme = createStyled_isEmpty(props.theme) ? defaultTheme : props.theme;
          return (0,styleFunctionSx/* default */.Z)((0,esm_extends/* default */.Z)({}, props, {
            theme
          }));
        });
      }

      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (typeof styleArg === 'function') {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = _ref2 => {
          let {
            theme: themeInput
          } = _ref2,
              other = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref2, _excluded3);

          return styleArg((0,esm_extends/* default */.Z)({
            theme: createStyled_isEmpty(themeInput) ? defaultTheme : themeInput
          }, other));
        };
      }

      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);

      if (false) {}

      return Component;
    };

    return muiStyledResolver;
  };
}

/***/ }),

/***/ 39911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createTheme_createTheme)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+utils@5.0.0-beta.4_react@18.0.0-alpha-aecb3b6d1/node_modules/@material-ui/utils/esm/deepmerge.js
var deepmerge = __webpack_require__(23123);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/createTheme/createBreakpoints.js


const _excluded = ["values", "unit", "step"];
// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const breakpointKeys = (/* unused pure expression or super */ null && (['xs', 'sm', 'md', 'lg', 'xl'])); // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values = {
      xs: 0,
      // phone
      sm: 600,
      // tablets
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536 // large screens

    },
    unit = 'px',
    step = 5
  } = breakpoints,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(breakpoints, _excluded);

  const keys = Object.keys(values);

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }

  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }

    return up(key);
  }

  return (0,esm_extends/* default */.Z)({
    keys,
    values,
    up,
    down,
    between,
    only,
    unit
  }, other);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/createTheme/shape.js
const shape = {
  borderRadius: 4
};
/* harmony default export */ const createTheme_shape = (shape);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/spacing.js + 1 modules
var esm_spacing = __webpack_require__(33837);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/createTheme/createSpacing.js


/* tslint:enable:unified-signatures */
function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  const transform = (0,esm_spacing/* createUnarySpacing */.hB)({
    spacing: spacingInput
  });

  const spacing = (...argsInput) => {
    if (false) {}

    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };

  spacing.mui = true;
  return spacing;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/createTheme/createTheme.js


const createTheme_excluded = ["breakpoints", "palette", "spacing", "shape"];





function createTheme(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(options, createTheme_excluded);

  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = (0,deepmerge/* default */.Z)({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: (0,esm_extends/* default */.Z)({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: (0,esm_extends/* default */.Z)({}, createTheme_shape, shapeInput)
  }, other);
  muiTheme = args.reduce((acc, argument) => (0,deepmerge/* default */.Z)(acc, argument), muiTheme);
  return muiTheme;
}

/* harmony default export */ const createTheme_createTheme = (createTheme);

/***/ }),

/***/ 27619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ esm_getThemeValue),
  "G": () => (/* binding */ propToStyleFunction)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/style.js
var style = __webpack_require__(95723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__(34254);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/compose.js


function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return (0,merge/* default */.Z)(acc, handlers[prop](props));
      }

      return acc;
    }, {});
  };

  fn.propTypes =  false ? 0 : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}

/* harmony default export */ const esm_compose = (compose);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(33837);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(84441);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/borders.js






function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = (0,style/* default */.Z)({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
const borderTop = (0,style/* default */.Z)({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
const borderRight = (0,style/* default */.Z)({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
const borderBottom = (0,style/* default */.Z)({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
const borderLeft = (0,style/* default */.Z)({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
const borderColor = (0,style/* default */.Z)({
  prop: 'borderColor',
  themeKey: 'palette'
});
const borderTopColor = (0,style/* default */.Z)({
  prop: 'borderTopColor',
  themeKey: 'palette'
});
const borderRightColor = (0,style/* default */.Z)({
  prop: 'borderRightColor',
  themeKey: 'palette'
});
const borderBottomColor = (0,style/* default */.Z)({
  prop: 'borderBottomColor',
  themeKey: 'palette'
});
const borderLeftColor = (0,style/* default */.Z)({
  prop: 'borderLeftColor',
  themeKey: 'palette'
});
const borderRadius = props => {
  if (props.borderRadius) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'shape.borderRadius', 4, 'borderRadius');

    const styleFromPropValue = propValue => ({
      borderRadius: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};
borderRadius.propTypes =  false ? 0 : {};
borderRadius.filterProps = ['borderRadius'];
const borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius);
/* harmony default export */ const esm_borders = (borders);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/display.js


const displayPrint = (0,style/* default */.Z)({
  prop: 'displayPrint',
  cssProperty: false,
  transform: value => ({
    '@media print': {
      display: value
    }
  })
});
const displayRaw = (0,style/* default */.Z)({
  prop: 'display'
});
const overflow = (0,style/* default */.Z)({
  prop: 'overflow'
});
const textOverflow = (0,style/* default */.Z)({
  prop: 'textOverflow'
});
const visibility = (0,style/* default */.Z)({
  prop: 'visibility'
});
const whiteSpace = (0,style/* default */.Z)({
  prop: 'whiteSpace'
});
/* harmony default export */ const display = (esm_compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/flexbox.js


const flexBasis = (0,style/* default */.Z)({
  prop: 'flexBasis'
});
const flexDirection = (0,style/* default */.Z)({
  prop: 'flexDirection'
});
const flexWrap = (0,style/* default */.Z)({
  prop: 'flexWrap'
});
const justifyContent = (0,style/* default */.Z)({
  prop: 'justifyContent'
});
const alignItems = (0,style/* default */.Z)({
  prop: 'alignItems'
});
const alignContent = (0,style/* default */.Z)({
  prop: 'alignContent'
});
const order = (0,style/* default */.Z)({
  prop: 'order'
});
const flex = (0,style/* default */.Z)({
  prop: 'flex'
});
const flexGrow = (0,style/* default */.Z)({
  prop: 'flexGrow'
});
const flexShrink = (0,style/* default */.Z)({
  prop: 'flexShrink'
});
const alignSelf = (0,style/* default */.Z)({
  prop: 'alignSelf'
});
const justifyItems = (0,style/* default */.Z)({
  prop: 'justifyItems'
});
const justifySelf = (0,style/* default */.Z)({
  prop: 'justifySelf'
});
const flexbox = esm_compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ const esm_flexbox = (flexbox);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/grid.js





const gap = props => {
  if (props.gap) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'spacing', 8, 'gap');

    const styleFromPropValue = propValue => ({
      gap: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.gap, styleFromPropValue);
  }

  return null;
};
gap.propTypes =  false ? 0 : {};
gap.filterProps = ['gap'];
const columnGap = props => {
  if (props.columnGap) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'spacing', 8, 'columnGap');

    const styleFromPropValue = propValue => ({
      columnGap: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.columnGap, styleFromPropValue);
  }

  return null;
};
columnGap.propTypes =  false ? 0 : {};
columnGap.filterProps = ['columnGap'];
const rowGap = props => {
  if (props.rowGap) {
    const transformer = (0,spacing/* createUnaryUnit */.eI)(props.theme, 'spacing', 8, 'rowGap');

    const styleFromPropValue = propValue => ({
      rowGap: (0,spacing/* getValue */.NA)(transformer, propValue)
    });

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.rowGap, styleFromPropValue);
  }

  return null;
};
rowGap.propTypes =  false ? 0 : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = (0,style/* default */.Z)({
  prop: 'gridColumn'
});
const gridRow = (0,style/* default */.Z)({
  prop: 'gridRow'
});
const gridAutoFlow = (0,style/* default */.Z)({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = (0,style/* default */.Z)({
  prop: 'gridAutoColumns'
});
const gridAutoRows = (0,style/* default */.Z)({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = (0,style/* default */.Z)({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = (0,style/* default */.Z)({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = (0,style/* default */.Z)({
  prop: 'gridTemplateAreas'
});
const gridArea = (0,style/* default */.Z)({
  prop: 'gridArea'
});
const grid = esm_compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ const esm_grid = (grid);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/positions.js


const position = (0,style/* default */.Z)({
  prop: 'position'
});
const zIndex = (0,style/* default */.Z)({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
const positions_top = (0,style/* default */.Z)({
  prop: 'top'
});
const right = (0,style/* default */.Z)({
  prop: 'right'
});
const bottom = (0,style/* default */.Z)({
  prop: 'bottom'
});
const left = (0,style/* default */.Z)({
  prop: 'left'
});
/* harmony default export */ const positions = (esm_compose(position, zIndex, positions_top, right, bottom, left));
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/palette.js


const color = (0,style/* default */.Z)({
  prop: 'color',
  themeKey: 'palette'
});
const bgcolor = (0,style/* default */.Z)({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
const backgroundColor = (0,style/* default */.Z)({
  prop: 'backgroundColor',
  themeKey: 'palette'
});
const palette = esm_compose(color, bgcolor, backgroundColor);
/* harmony default export */ const esm_palette = (palette);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/shadows.js

const boxShadow = (0,style/* default */.Z)({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ const shadows = (boxShadow);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/sizing.js




function transform(value) {
  return value <= 1 ? `${value * 100}%` : value;
}

const width = (0,style/* default */.Z)({
  prop: 'width',
  transform
});
const maxWidth = props => {
  if (props.maxWidth) {
    const styleFromPropValue = propValue => {
      const breakpoint = props.theme.breakpoints.values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue)
      };
    };

    return (0,breakpoints/* handleBreakpoints */.k9)(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = (0,style/* default */.Z)({
  prop: 'minWidth',
  transform
});
const height = (0,style/* default */.Z)({
  prop: 'height',
  transform
});
const maxHeight = (0,style/* default */.Z)({
  prop: 'maxHeight',
  transform
});
const minHeight = (0,style/* default */.Z)({
  prop: 'minHeight',
  transform
});
const sizeWidth = (0,style/* default */.Z)({
  prop: 'size',
  cssProperty: 'width',
  transform
});
const sizeHeight = (0,style/* default */.Z)({
  prop: 'size',
  cssProperty: 'height',
  transform
});
const boxSizing = (0,style/* default */.Z)({
  prop: 'boxSizing'
});
const sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ const esm_sizing = (sizing);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/typography.js


const fontFamily = (0,style/* default */.Z)({
  prop: 'fontFamily',
  themeKey: 'typography'
});
const fontSize = (0,style/* default */.Z)({
  prop: 'fontSize',
  themeKey: 'typography'
});
const fontStyle = (0,style/* default */.Z)({
  prop: 'fontStyle',
  themeKey: 'typography'
});
const fontWeight = (0,style/* default */.Z)({
  prop: 'fontWeight',
  themeKey: 'typography'
});
const letterSpacing = (0,style/* default */.Z)({
  prop: 'letterSpacing'
});
const lineHeight = (0,style/* default */.Z)({
  prop: 'lineHeight'
});
const textAlign = (0,style/* default */.Z)({
  prop: 'textAlign'
});
const typographyVariant = (0,style/* default */.Z)({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography'
});
const typography = esm_compose(typographyVariant, fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ const esm_typography = (typography);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/getThemeValue.js










const filterPropsMapping = {
  borders: esm_borders.filterProps,
  display: display.filterProps,
  flexbox: esm_flexbox.filterProps,
  grid: esm_grid.filterProps,
  positions: positions.filterProps,
  palette: esm_palette.filterProps,
  shadows: shadows.filterProps,
  sizing: esm_sizing.filterProps,
  spacing: spacing/* default.filterProps */.ZP.filterProps,
  typography: esm_typography.filterProps
};
const styleFunctionMapping = {
  borders: esm_borders,
  display: display,
  flexbox: esm_flexbox,
  grid: esm_grid,
  positions: positions,
  palette: esm_palette,
  shadows: shadows,
  sizing: esm_sizing,
  spacing: spacing/* default */.ZP,
  typography: esm_typography
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce((acc, styleFnName) => {
  filterPropsMapping[styleFnName].forEach(propName => {
    acc[propName] = styleFunctionMapping[styleFnName];
  });
  return acc;
}, {});

function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction ? styleFunction(inputProps) : {
    [prop]: value
  };
}

/* harmony default export */ const esm_getThemeValue = (getThemeValue);

/***/ }),

/***/ 34254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23123);


function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);

/***/ }),

/***/ 33837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "hB": () => (/* binding */ createUnarySpacing),
  "eI": () => (/* binding */ createUnaryUnit),
  "ZP": () => (/* binding */ esm_spacing),
  "NA": () => (/* binding */ getValue)
});

// UNUSED EXPORTS: getStyleFromPropValue, margin, padding

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(84441);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/style.js
var style = __webpack_require__(95723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__(34254);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/memoize.js
function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/spacing.js





const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  const themeSpacing = (0,style/* getPath */.D)(theme, themeKey) || defaultValue;

  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      if (false) {}

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }

      if (false) {}

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (false) {}

  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }

  const abs = Math.abs(propValue);
  const transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}

function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }

  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return (0,breakpoints/* handleBreakpoints */.k9)(props, propValue, styleFromPropValue);
}

function spacing_style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge/* default */.Z, {});
}

function margin(props) {
  return spacing_style(props, marginKeys);
}
margin.propTypes =  false ? 0 : {};
margin.filterProps = marginKeys;
function padding(props) {
  return spacing_style(props, paddingKeys);
}
padding.propTypes =  false ? 0 : {};
padding.filterProps = paddingKeys;

function spacing(props) {
  return spacing_style(props, spacingKeys);
}

spacing.propTypes =  false ? 0 : {};
spacing.filterProps = spacingKeys;
/* harmony default export */ const esm_spacing = (spacing);

/***/ }),

/***/ 95723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ getPath),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76008);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84441);



function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
}

function getValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;

  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }

  if (transform) {
    value = transform(value);
  }

  return value;
}

function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  const fn = props => {
    if (props[prop] == null) {
      return null;
    }

    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};

    const styleFromPropValue = propValueFinal => {
      let value = getValue(themeMapping, transform, propValueFinal);

      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(propValueFinal)}`, propValueFinal);
      }

      if (cssProperty === false) {
        return value;
      }

      return {
        [cssProperty]: value
      };
    };

    return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .handleBreakpoints */ .k9)(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  false ? 0 : {};
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);

/***/ }),

/***/ 46426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ extendSxProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40531);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81987);
/* harmony import */ var _getThemeValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27619);


const _excluded = ["sx"];


const splitProps = props => {
  const result = {
    systemProps: {},
    otherProps: {}
  };
  Object.keys(props).forEach(prop => {
    if (_getThemeValue__WEBPACK_IMPORTED_MODULE_0__/* .propToStyleFunction */ .G[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const {
    sx: inSx
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(props, _excluded);

  const {
    systemProps,
    otherProps
  } = splitProps(other);
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({}, otherProps, {
    sx: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)({}, systemProps, inSx)
  });
}

/***/ }),

/***/ 98612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34254);
/* harmony import */ var _getThemeValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27619);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84441);




function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

function styleFunctionSx(props) {
  const {
    sx: styles,
    theme = {}
  } = props || {};
  if (!styles) return null;

  if (typeof styles === 'function') {
    return styles(theme);
  }

  if (typeof styles !== 'object') {
    // value
    return styles;
  }

  const emptyBreakpoints = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_0__/* .createEmptyBreakpointObject */ .W8)(theme.breakpoints);
  const breakpointsKeys = Object.keys(emptyBreakpoints);
  let css = emptyBreakpoints;
  Object.keys(styles).forEach(styleKey => {
    const value = callIfFn(styles[styleKey], theme);

    if (typeof value === 'object') {
      if (_getThemeValue__WEBPACK_IMPORTED_MODULE_1__/* .propToStyleFunction */ .G[styleKey]) {
        css = (0,_merge__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(css, (0,_getThemeValue__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(styleKey, value, theme));
      } else {
        const breakpointsValues = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_0__/* .handleBreakpoints */ .k9)({
          theme
        }, value, x => ({
          [styleKey]: x
        }));

        if (objectsHaveSameKeys(breakpointsValues, value)) {
          css[styleKey] = styleFunctionSx({
            sx: value,
            theme
          });
        } else {
          css = (0,_merge__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(css, breakpointsValues);
        }
      }
    } else {
      css = (0,_merge__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(css, (0,_getThemeValue__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(styleKey, value, theme));
    }
  });
  return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_0__/* .removeUnusedBreakpoints */ .L7)(breakpointsKeys, css);
}

styleFunctionSx.filterProps = ['sx'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleFunctionSx);

/***/ }),

/***/ 8361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export systemDefaultTheme */
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39911);
/* harmony import */ var _useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85261);


const systemDefaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();

function useTheme(defaultTheme = systemDefaultTheme) {
  return (0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(defaultTheme);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ }),

/***/ 73784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getThemeProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40531);


/* eslint-disable no-restricted-syntax */
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;

  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }

  const output = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)({}, props); // Resolve default props, code borrow from React source.
  // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221


  const defaultProps = theme.components[name].defaultProps;
  let propName;

  for (propName in defaultProps) {
    if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  }

  return output;
}

/***/ }),

/***/ 86417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useThemeProps)
/* harmony export */ });
/* harmony import */ var _getThemeProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73784);
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8361);


function useThemeProps({
  props,
  name,
  defaultTheme
}) {
  const theme = (0,_useTheme__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(defaultTheme);
  const mergedProps = (0,_getThemeProps__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
    theme,
    name,
    props
  });
  return mergedProps;
}

/***/ }),

/***/ 85261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_private_theming__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77612);


function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function useTheme(defaultTheme = null) {
  const contextTheme = (0,_material_ui_private_theming__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)();
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ })

}]);