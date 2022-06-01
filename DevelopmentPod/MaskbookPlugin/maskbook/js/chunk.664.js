"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[664],{

/***/ 44309:
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

/***/ 26597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ NFTRedPacketIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const NFTRedPacketIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('NFTRedPacketIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M4.51712 6.19485C4.51712 6.19485 3.72407 3.91086 12.638 3.91086C21.5519 3.91086 20.7588 6.19485 20.7588 6.19485V7.17823H4.51712V6.19485Z",
            fill: "#DB1919"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 15.0001H17.1377V16.5001H18.6377V15.0001Z",
            fill: "#291E20"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 15.0001H15.6377V16.5001H17.1377V15.0001Z",
            fill: "#1A1115"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 15.0001H14.1377V16.5001H15.6377V15.0001Z",
            fill: "#1B1417"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 15.0001H12.6377V16.5001H14.1377V15.0001Z",
            fill: "#1D1018"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 15.0001H11.1377V16.5001H12.6377V15.0001Z",
            fill: "#131117"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 15.0001H9.6377V16.5001H11.1377V15.0001Z",
            fill: "#1B1419"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 15.0001H8.1377V16.5001H9.6377V15.0001Z",
            fill: "#2D2529"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 13.5001H17.1377V15.0001H18.6377V13.5001Z",
            fill: "#1F1114"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 13.5001H15.6377V15.0001H17.1377V13.5001Z",
            fill: "#0F0407"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 13.5001H14.1377V15.0001H15.6377V13.5001Z",
            fill: "#130408"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 13.5001H12.6377V15.0001H14.1377V13.5001Z",
            fill: "#12060B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 13.5001H11.1377V15.0001H12.6377V13.5001Z",
            fill: "#562311"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 13.5001H9.6377V15.0001H11.1377V13.5001Z",
            fill: "#512111"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 13.5001H8.1377V15.0001H9.6377V13.5001Z",
            fill: "#211618"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 12.0001H17.1377V13.5001H18.6377V12.0001Z",
            fill: "#171112"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 12.0001H15.6377V13.5001H17.1377V12.0001Z",
            fill: "#1A0A0B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 12.0001H14.1377V13.5001H15.6377V12.0001Z",
            fill: "#270D04"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 12.0001H12.6377V13.5001H14.1377V12.0001Z",
            fill: "#E97800"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 12.0001H11.1377V13.5001H12.6377V12.0001Z",
            fill: "#ED8900"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 12.0001H9.6377V13.5001H11.1377V12.0001Z",
            fill: "#5B3311"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 12.0001H8.1377V13.5001H9.6377V12.0001Z",
            fill: "#21171D"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 10.5001H17.1377V12.0001H18.6377V10.5001Z",
            fill: "#1D1614"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 10.5001H15.6377V12.0001H17.1377V10.5001Z",
            fill: "#150706"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 10.5001H14.1377V12.0001H15.6377V10.5001Z",
            fill: "#030106"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 10.5001H12.6377V12.0001H14.1377V10.5001Z",
            fill: "#0D0808"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 10.5001H11.1377V12.0001H12.6377V10.5001Z",
            fill: "#462B10"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 10.5001H9.6377V12.0001H11.1377V10.5001Z",
            fill: "#5C310C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 10.5001H8.1377V12.0001H9.6377V10.5001Z",
            fill: "#1C1118"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.00009H17.1377V10.5001H18.6377V9.00009Z",
            fill: "#2C1B19"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 9.00009H15.6377V10.5001H17.1377V9.00009Z",
            fill: "#1A0908"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 9.00009H14.1377V10.5001H15.6377V9.00009Z",
            fill: "#0E0503"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 9.00009H12.6377V10.5001H14.1377V9.00009Z",
            fill: "#0A060A"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 9.00009H11.1377V10.5001H12.6377V9.00009Z",
            fill: "#000105"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 9.00009H9.6377V10.5001H11.1377V9.00009Z",
            fill: "#10070C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 9.00009H8.1377V10.5001H9.6377V9.00009Z",
            fill: "#4F361D"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 7.50009H17.1377V9.00009H18.6377V7.50009Z",
            fill: "#592613"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 7.50009H15.6377V9.00009H17.1377V7.50009Z",
            fill: "#190C0B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 7.50009H14.1377V9.00009H15.6377V7.50009Z",
            fill: "#7E4B08"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 7.50009H12.6377V9.00009H14.1377V7.50009Z",
            fill: "#E39B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 7.50009H11.1377V9.00009H12.6377V7.50009Z",
            fill: "#5D320C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 7.50009H9.6377V9.00009H11.1377V7.50009Z",
            fill: "#22110E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 7.50009H8.1377V9.00009H9.6377V7.50009Z",
            fill: "#6A2C1E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 6.00009H17.1377V7.50009H18.6377V6.00009Z",
            fill: "#4F3A11"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 6.00009H15.6377V7.50009H17.1377V6.00009Z",
            fill: "#2F270E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 6.00009H14.1377V7.50009H15.6377V6.00009Z",
            fill: "#904400"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 6.00009H12.6377V7.50009H14.1377V6.00009Z",
            fill: "#341206"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 6.00009H11.1377V7.50009H12.6377V6.00009Z",
            fill: "#140E0F"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 6.00009H9.6377V7.50009H11.1377V6.00009Z",
            fill: "#4D401E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 6.00009H8.1377V7.50009H9.6377V6.00009Z",
            fill: "#3B3524"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 4.50009H17.1377V6.00009H18.6377V4.50009Z",
            fill: "#625617"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 4.50009H15.6377V6.00009H17.1377V4.50009Z",
            fill: "#333417"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 4.50009H14.1377V6.00009H15.6377V4.50009Z",
            fill: "#41160C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 4.50009H12.6377V6.00009H14.1377V4.50009Z",
            fill: "#D47100"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 4.50009H11.1377V6.00009H12.6377V4.50009Z",
            fill: "#33190B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 4.50009H9.6377V6.00009H11.1377V4.50009Z",
            fill: "#21200E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 4.50009H8.1377V6.00009H9.6377V4.50009Z",
            fill: "#3B3B23"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 3.00009H17.1377V4.50009H18.6377V3.00009Z",
            fill: "#C29F09"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 3.00009H15.6377V4.50009H17.1377V3.00009Z",
            fill: "#83711D"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 3.00009H14.1377V4.50009H15.6377V3.00009Z",
            fill: "#461400"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 3.00009H12.6377V4.50009H14.1377V3.00009Z",
            fill: "#D17C00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 3.00009H11.1377V4.50009H12.6377V3.00009Z",
            fill: "#8A5D1B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 3.00009H9.6377V4.50009H11.1377V3.00009Z",
            fill: "#B6972C"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 3.00009H8.1377V4.50009H9.6377V3.00009Z",
            fill: "#7C6729"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 1.50009H17.1377V3.00009H18.6377V1.50009Z",
            fill: "#BD980B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 1.50009H15.6377V3.00009H17.1377V1.50009Z",
            fill: "#E2B92B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 1.50009H14.1377V3.00009H15.6377V1.50009Z",
            fill: "#020000"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 1.50009H12.6377V3.00009H14.1377V1.50009Z",
            fill: "#D68900"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 1.50009H11.1377V3.00009H12.6377V1.50009Z",
            fill: "#B38825"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 1.50009H9.6377V3.00009H11.1377V1.50009Z",
            fill: "#F4C32E"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 1.50009H8.1377V3.00009H9.6377V1.50009Z",
            fill: "#C29F36"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.15527e-05H17.1377V1.50009H18.6377V9.15527e-05Z",
            fill: "#8D8239"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 9.15527e-05H15.6377V1.50009H17.1377V9.15527e-05Z",
            fill: "#8F732B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 9.15527e-05H14.1377V1.50009H15.6377V9.15527e-05Z",
            fill: "#AA9530"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 9.15527e-05H12.6377V1.50009H14.1377V9.15527e-05Z",
            fill: "#8F8533"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 9.15527e-05H11.1377V1.50009H12.6377V9.15527e-05Z",
            fill: "#887527"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 9.15527e-05H9.6377V1.50009H11.1377V9.15527e-05Z",
            fill: "#8F792B"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 9.15527e-05H8.1377V1.50009H9.6377V9.15527e-05Z",
            fill: "#93813A"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 9.15527e-05H6.6377V1.50009H8.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 1.50009H6.6377V3.00009H8.1377V1.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 3.00009H6.6377V4.50009H8.1377V3.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 4.50009H6.6377V6.00009H8.1377V4.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 6.00009H6.6377V7.50009H8.1377V6.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 7.50009H6.6377V9.00009H8.1377V7.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 9.00009H6.6377V10.5001H8.1377V9.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 10.5001H6.6377V12.0001H8.1377V10.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 12.0001H6.6377V13.5001H8.1377V12.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 13.5001H6.6377V15.0001H8.1377V13.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M8.1377 15.0001H6.6377V16.5001H8.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 15.0001H8.1377V16.5001H9.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 15.0001H9.6377V16.5001H11.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 15.0001H11.1377V16.5001H12.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 15.0001H12.6377V16.5001H14.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 15.0001H14.1377V16.5001H15.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 15.0001H15.6377V16.5001H17.1377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 15.0001H17.1377V16.5001H18.6377V15.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 13.5001H17.1377V15.0001H18.6377V13.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 12.0001H17.1377V13.5001H18.6377V12.0001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 10.5001H17.1377V12.0001H18.6377V10.5001Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.00009H17.1377V10.5001H18.6377V9.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 7.50009H17.1377V9.00009H18.6377V7.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 6.00009H17.1377V7.50009H18.6377V6.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 4.50009H17.1377V6.00009H18.6377V4.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 3.00009H17.1377V4.50009H18.6377V3.00009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 1.50009H17.1377V3.00009H18.6377V1.50009Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M18.6377 9.15527e-05H17.1377V1.50009H18.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M17.1377 9.15527e-05H15.6377V1.50009H17.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M15.6377 9.15527e-05H14.1377V1.50009H15.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M14.1377 9.15527e-05H12.6377V1.50009H14.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M12.6377 9.15527e-05H11.1377V1.50009H12.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M11.1377 9.15527e-05H9.6377V1.50009H11.1377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.6377 9.15527e-05H8.1377V1.50009H9.6377V9.15527e-05Z",
            fill: "#CA9B00"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M4.51758 6.2583C4.51758 6.2583 7.53117 7.16238 12.6226 7.16238C17.714 7.16238 20.7593 6.2583 20.7593 6.2583V21.5C20.7593 22.0523 20.3116 22.5 19.7593 22.5H5.51758C4.96529 22.5 4.51758 22.0523 4.51758 21.5V6.2583Z",
            fill: "#F93737"
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 85309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ RedPacketIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15679);


const RedPacketIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('RedPacketIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M3.765 5.161s-.661-1.903 6.767-1.903c7.428 0 6.767 1.903 6.767 1.903v.82H3.765v-.82z",
            fill: "#DB1919"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
            cx: "13.389",
            cy: "4.498",
            r: "1.96",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.515 4.062v.621h-1.96a.85.85 0 00.83.658.853.853 0 00.766-.472h.364v.522a.225.225 0 01-.226.224h-1.804a.225.225 0 01-.226-.224V4.062h2.256zm-.58.807a.665.665 0 01-1.098 0h1.097zm-1.03-.658a.35.35 0 00-.348.298h.193a.163.163 0 01.31 0h.192a.35.35 0 00-.347-.298zm.965 0a.35.35 0 00-.348.298h.193a.163.163 0 01.31 0h.192a.35.35 0 00-.347-.298zm.42-.832c.124 0 .225.1.225.223v.274H12.26v-.274c0-.123.101-.223.226-.223h1.805z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M9.484 4.498a1.96 1.96 0 11-3.92 0 1.96 1.96 0 013.92 0z",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8.65 4.062v.621H6.69a.85.85 0 00.83.658.853.853 0 00.766-.472h.364v.522a.225.225 0 01-.226.224H6.62a.225.225 0 01-.226-.224V4.062H8.65zm-.58.807a.665.665 0 01-1.098 0h1.097zm-1.03-.658a.35.35 0 00-.348.298h.192a.163.163 0 01.31 0h.193a.35.35 0 00-.348-.298zm.964 0a.35.35 0 00-.347.298h.192a.163.163 0 01.31 0h.193a.35.35 0 00-.348-.298zm.42-.832c.125 0 .226.1.226.223v.274H6.394v-.274c0-.123.101-.223.226-.223h1.804z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13.168 3.986a2.636 2.636 0 11-5.272 0 2.636 2.636 0 015.272 0z",
            fill: "#FFBC5A",
            stroke: "#F5B250",
            strokeWidth: ".2"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.03 3.407v.825H9.426c.113.5.565.874 1.104.874.446 0 .831-.255 1.016-.627h.484v.693a.298.298 0 01-.3.297H9.333a.298.298 0 01-.3-.297V3.407h2.997zm-.771 1.072a.883.883 0 01-.73.382.883.883 0 01-.728-.382h1.457zM9.89 3.605a.465.465 0 00-.461.396h.255a.216.216 0 01.412 0h.255a.465.465 0 00-.461-.396zm1.282 0a.465.465 0 00-.462.396h.256a.216.216 0 01.206-.148c.096 0 .177.062.206.148h.255a.465.465 0 00-.461-.396zM11.73 2.5c.166 0 .3.133.3.297v.363H9.034v-.363c0-.164.134-.297.3-.297h2.396z",
            fill: "#fff"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M3.765 5.215s2.511.753 6.754.753c4.243 0 6.78-.753 6.78-.753V17.75a1 1 0 01-1 1H4.765a1 1 0 01-1-1V5.215z",
            fill: "#F93737"
        })
    ]
}), '0 0 20 20');


/***/ }),

/***/ 30246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.2/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(19245);
;// CONCATENATED MODULE: ./shared/native-rpc/iOS.channel.ts
// cspell:disable-next-line
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {}
            }
        });
    }
}

;// CONCATENATED MODULE: ./shared/native-rpc/index.ts



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,full/* AsyncCall */.LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 8699).then(__webpack_require__.bind(__webpack_require__, 98699)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new iOSWebkitChannel()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 77522:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2921);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6823);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27536);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85139);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(1)
        },
        disabledTab: {
            opacity: 0.5
        },
        flexContainer: {}
    })
);
function AbstractTab(props) {
    const { tabs , state , index: index1 , height =200 , hasOnlyOneChild =false , scrollable =false  } = props;
    const classes = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .useStylesExtends */ .Bc)(useStyles(), props);
    const [value, setValue] = state ?? [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length && !scrollable ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                square: true,
                elevation: 0,
                className: classes.tabPaper,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator,
                        flexContainer: classes.flexContainer
                    },
                    value: index1 ? index1 : value ? value : 0,
                    indicatorColor: "primary",
                    textColor: "primary",
                    variant: scrollable ? 'scrollable' : 'fullWidth',
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    scrollButtons: scrollable,
                    allowScrollButtonsMobile: scrollable,
                    onChange: (_, newValue)=>setValue?.(newValue)
                    ,
                    children: tabs.map((tab, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            disabled: tab.disabled,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.tab, [
                                index1,
                                value
                            ].includes(i) ? classes.focusTab : '', tab.disabled ? classes.disabledTab : ''),
                            disableFocusRipple: tab.disableFocusRipple,
                            disableRipple: tab.disableRipple,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${tab.id?.toLowerCase()}_tab`
                        }, i)
                    )
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index)=>index === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    });
};


/***/ }),

/***/ 55298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Qc": () => (/* binding */ RedPacketMetadataReader),
  "st": () => (/* binding */ RedPacketNftMetadataReader),
  "vP": () => (/* binding */ renderWithRedPacketMetadata),
  "Ay": () => (/* binding */ renderWithRedPacketNftMetadata)
});

// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(80149);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"contract_address":{"type":"string","title":"contract_address"},"rpid":{"type":"string","title":"rpid"},"txid":{"type":"string","title":"txid"},"password":{"type":"string","title":"password"},"shares":{"type":"number","title":"shares"},"sender":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"},"message":{"type":"string","title":"message"}},"required":["address","message","name"],"title":"sender"},"is_random":{"type":"boolean","title":"is_random"},"total":{"type":"string","title":"total"},"creation_time":{"type":"number","title":"creation_time"},"duration":{"type":"number","title":"duration"},"network":{"type":"string","title":"network"},"token":{"type":"object","additionalProperties":true,"properties":{"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"decimals":{"description":"token decimal","type":"number","title":"decimals"},"symbol":{"description":"token symbol","type":"string","title":"symbol"}},"required":["address","decimals","name","symbol"],"title":"token"}},"required":["contract_address","creation_time","duration","is_random","password","rpid","sender","shares","total"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/schema-nft.json
const schema_nft_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"id":{"type":"string","title":"id"},"txid":{"type":"string","title":"txid"},"duration":{"type":"number","title":"duration"},"message":{"type":"string","title":"message"},"senderName":{"type":"string","title":"senderName"},"contractName":{"type":"string","title":"contractName"},"contractAddress":{"type":"string","title":"contractAddress"},"privateKey":{"type":"string","title":"privateKey"},"chainId":{"type":"number","title":"chainId"},"contractTokenURI":{"type":"string","title":"contractTokenURI"}},"required":["id","duration","message","senderName","contractName","contractAddress","privateKey","chainId","contractTokenURI"]}');
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts




const RedPacketMetadataReader = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketMetaKey */.Vr, schema_namespaceObject);
const renderWithRedPacketMetadata = (0,base/* createRenderWithMetadata */.mC)(RedPacketMetadataReader);
const RedPacketNftMetadataReader = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* RedPacketNftMetaKey */.HA, schema_nft_namespaceObject);
const renderWithRedPacketNftMetadata = (0,base/* createRenderWithMetadata */.mC)(RedPacketNftMetadataReader);


/***/ }),

/***/ 10075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts + 1 modules
var entry_content_script = __webpack_require__(98541);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC20TokenDetailed.ts + 5 modules
var useERC20TokenDetailed = __webpack_require__(29782);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var utils_chainDetailed = __webpack_require__(80526);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(66394);
// EXTERNAL MODULE: ./src/plugins/RedPacket/base.ts
var base = __webpack_require__(84078);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var constants = __webpack_require__(80149);
// EXTERNAL MODULE: ./src/plugins/RedPacket/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(55298);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(77522);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/types.ts
var RedPacketStatus;
(function(RedPacketStatus) {
    RedPacketStatus["claimed"] = "claimed";
    RedPacketStatus["expired"] = "expired";
    RedPacketStatus["empty"] = "empty";
    RedPacketStatus["refunded"] = "refunded";
})(RedPacketStatus || (RedPacketStatus = {}));
var NFTSelectOption;
(function(NFTSelectOption) {
    NFTSelectOption["All"] = "All";
    NFTSelectOption["Partial"] = "Partial";
})(NFTSelectOption || (NFTSelectOption = {}));
var DialogTabs;
(function(DialogTabs) {
    DialogTabs[DialogTabs["create"] = 0] = "create";
    DialogTabs[DialogTabs["past"] = 1] = "past";
})(DialogTabs || (DialogTabs = {}));
var RpTypeTabs;
(function(RpTypeTabs) {
    RpTypeTabs[RpTypeTabs["ERC20"] = 0] = "ERC20";
    RpTypeTabs[RpTypeTabs["ERC721"] = 1] = "ERC721";
})(RpTypeTabs || (RpTypeTabs = {}));

// EXTERNAL MODULE: ./src/plugins/RedPacket/messages.ts
var messages = __webpack_require__(71777);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(31174);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 7 modules
var base_src = __webpack_require__(89260);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useAccount.ts
var useAccount = __webpack_require__(10372);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants_constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38443);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenBalance.ts
var useFungibleTokenBalance = __webpack_require__(52813);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(3379);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputLabel/InputLabel.js + 1 modules
var InputLabel = __webpack_require__(27700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Select/Select.js + 3 modules
var Select = __webpack_require__(75879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(24294);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(7284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ./src/components/DataSource/useActivatedUI.ts
var useActivatedUI = __webpack_require__(68043);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(83463);
// EXTERNAL MODULE: ./src/web3/UI/EthereumERC20TokenApprovedBoundary.tsx + 1 modules
var EthereumERC20TokenApprovedBoundary = __webpack_require__(44632);
// EXTERNAL MODULE: ./src/web3/UI/EthereumWalletConnectedBoundary.tsx + 1 modules
var EthereumWalletConnectedBoundary = __webpack_require__(52599);
// EXTERNAL MODULE: ./src/web3/UI/TokenAmountPanel.tsx + 1 modules
var TokenAmountPanel = __webpack_require__(79154);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketERC20Form.tsx
















// seconds of 1 day
const duration = 60 * 60 * 24;
const useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        field: {
            display: 'flex',
            margin: theme.spacing(1, 0)
        },
        line: {
            display: 'flex',
            margin: theme.spacing(1)
        },
        input: {
            flex: 1,
            padding: theme.spacing(0.5)
        },
        tip: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        button: {
            marginTop: theme.spacing(1.5)
        },
        selectShrinkLabel: {
            top: 6,
            backgroundColor: theme.palette.background.paper,
            paddingLeft: 2,
            paddingRight: 7,
            transform: 'translate(17px, -10px) scale(0.75) !important'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        },
        label: {
            textAlign: 'left',
            color: theme.palette.text.secondary
        },
        gasEstimation: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            cursor: 'pointer',
            '& > p': {
                marginRight: 5,
                color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
            }
        }
    })
);
function RedPacketERC20Form(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(useStyles(), props);
    const { onChange , onNext , origin  } = props;
    // context
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,constants_constants/* useRedPacketConstants */.AA)();
    // #region select token
    const { value: nativeTokenDetailed  } = (0,useNativeTokenDetailed/* useNativeTokenDetailed */.J)();
    const [token = nativeTokenDetailed, setToken] = (0,react.useState)(origin?.token);
    const pickToken = (0,shared_src/* usePickToken */.yQ)();
    const onSelectTokenChipClick = (0,react.useCallback)(async ()=>{
        const picked = await pickToken({
            disableNativeToken: false,
            selectedTokens: token ? [
                token.address
            ] : []
        });
        if (picked) setToken(picked);
    }, [
        pickToken,
        token?.address
    ]);
    // #endregion
    // #region packet settings
    const [isRandom, setRandom] = (0,react.useState)(origin?.isRandom ? 1 : 0);
    const [message, setMessage] = (0,react.useState)(origin?.message || t('plugin_red_packet_best_wishes'));
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const senderName = (currentIdentity?.identifier.userId ?? currentIdentity?.linkedPersona?.nickname) ?? 'Unknown User';
    // shares
    const [shares, setShares] = (0,react.useState)(origin?.shares || constants/* RED_PACKET_DEFAULT_SHARES */.sX);
    const onShareChange = (0,react.useCallback)((ev)=>{
        const shares_ = ev.currentTarget.value.replace(/[,.]/g, '');
        if (shares_ === '') setShares('');
        else if (/^[1-9]+\d*$/.test(shares_)) {
            const parsed = Number.parseInt(shares_, 10);
            if (parsed >= constants/* RED_PACKET_MIN_SHARES */.Ih && parsed <= constants/* RED_PACKET_MAX_SHARES */.DY) setShares(Number.parseInt(shares_, 10));
        }
    }, [
        constants/* RED_PACKET_MIN_SHARES */.Ih,
        constants/* RED_PACKET_MAX_SHARES */.DY
    ]);
    // amount
    const [rawAmount, setRawAmount] = (0,react.useState)(origin?.isRandom ? (0,formatter/* formatBalance */.az)(origin?.total, origin.token?.decimals ?? 0) : (0,formatter/* formatBalance */.az)(new (bignumber_default())(origin?.total ?? '0').div(origin?.shares ?? 1), origin?.token?.decimals ?? 0));
    const amount = (0,base_src/* rightShift */.pu)(rawAmount ?? '0', token?.decimals);
    const totalAmount = (0,react.useMemo)(()=>(0,base_src/* multipliedBy */.$q)(amount, isRandom ? 1 : shares ?? '0')
    , [
        amount,
        shares
    ]);
    const isDivisible = !totalAmount.dividedBy(shares).isLessThan(1);
    (0,react.useEffect)(()=>{
        setToken(nativeTokenDetailed);
    }, [
        chainId,
        nativeTokenDetailed
    ]);
    (0,react.useEffect)(()=>{
        setRawAmount('0');
    }, [
        token
    ]);
    // balance
    const { value: tokenBalance = '0' , loading: loadingTokenBalance  } = (0,useFungibleTokenBalance/* useFungibleTokenBalance */.V)(token?.type ?? types/* EthereumTokenType.Native */.Dr.Native, token?.address ?? '');
    // #endregion
    const validationMessage = (0,react.useMemo)(()=>{
        if (!token) return t('plugin_wallet_select_a_token');
        if (!account) return t('plugin_wallet_connect_a_wallet');
        if ((0,base_src/* isZero */.Fr)(shares || '0')) return 'Enter shares';
        if ((0,base_src/* isGreaterThan */.T1)(shares || '0', 255)) return 'At most 255 recipients';
        if ((0,base_src/* isZero */.Fr)(amount)) return t('plugin_dhedge_enter_an_amount');
        if ((0,base_src/* isGreaterThan */.T1)(totalAmount, tokenBalance)) return t('plugin_gitcoin_insufficient_balance', {
            symbol: token.symbol
        });
        if (!isDivisible) return t('plugin_red_packet_indivisible', {
            symbol: token.symbol,
            amount: (0,formatter/* formatBalance */.az)(1, token.decimals)
        });
        return '';
    }, [
        account,
        amount,
        totalAmount,
        shares,
        token,
        tokenBalance
    ]);
    const creatingParams = (0,react.useMemo)(()=>({
            duration,
            isRandom: Boolean(isRandom),
            name: senderName,
            message: message || t('plugin_red_packet_best_wishes'),
            shares: shares || 0,
            token: token ? (0,omit/* default */.Z)(token, [
                'logoURI'
            ]) : undefined,
            total: totalAmount.toFixed()
        })
    , [
        isRandom,
        senderName,
        message,
        t('plugin_red_packet_best_wishes'),
        shares,
        token,
        totalAmount
    ]);
    const onClick = (0,react.useCallback)(()=>{
        onChange(creatingParams);
        onNext();
    }, [
        creatingParams,
        onChange,
        onNext
    ]);
    if (!token) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.field,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(FormControl/* default */.Z, {
                        className: classes.input,
                        variant: "outlined",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(InputLabel/* default */.Z, {
                                className: classes.selectShrinkLabel,
                                children: t('plugin_red_packet_split_mode')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Select/* default */.Z, {
                                value: isRandom ? 1 : 0,
                                onChange: (e)=>{
                                    // foolproof, reset amount since the meaning of amount changed:
                                    // 'total amount' <=> 'amount per share'
                                    setRawAmount('0');
                                    setRandom(e.target.value);
                                },
                                MenuProps: {
                                    anchorOrigin: {
                                        vertical: 'top',
                                        horizontal: 'left'
                                    },
                                    ...props.SelectMenuProps
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: 0,
                                        children: t('plugin_red_packet_average')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                                        value: 1,
                                        children: t('plugin_red_packet_random')
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        className: classes.input,
                        InputProps: {
                            inputProps: {
                                autoComplete: 'off',
                                autoCorrect: 'off',
                                inputMode: 'decimal',
                                placeholder: '0',
                                pattern: '^[0-9]$',
                                spellCheck: false
                            }
                        },
                        InputLabelProps: {
                            shrink: true,
                            classes: {
                                shrink: classes.inputShrinkLabel
                            }
                        },
                        label: t('plugin_red_packet_shares'),
                        value: shares,
                        onChange: onShareChange
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.field,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TokenAmountPanel/* TokenAmountPanel */.x, {
                    classes: {
                        root: classes.input
                    },
                    label: isRandom ? 'Total Amount' : t('plugin_red_packet_amount_per_share'),
                    amount: rawAmount,
                    balance: tokenBalance,
                    token: token,
                    maxAmountShares: isRandom || shares === '' ? 1 : shares,
                    onAmountChange: setRawAmount,
                    SelectTokenChip: {
                        loading: loadingTokenBalance,
                        ChipProps: {
                            onClick: onSelectTokenChipClick
                        }
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.field,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    className: classes.input,
                    onChange: (e)=>setMessage(e.target.value)
                    ,
                    InputLabelProps: {
                        shrink: true,
                        classes: {
                            shrink: classes.inputShrinkLabel
                        }
                    },
                    inputProps: {
                        placeholder: t('plugin_red_packet_best_wishes')
                    },
                    label: t('plugin_red_packet_attached_message'),
                    value: message
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC20TokenApprovedBoundary/* EthereumERC20TokenApprovedBoundary */.L, {
                    amount: totalAmount.toFixed(),
                    token: token?.type === types/* EthereumTokenType.ERC20 */.Dr.ERC20 ? token : undefined,
                    spender: HAPPY_RED_PACKET_ADDRESS_V4,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        variant: "contained",
                        size: "large",
                        className: classes.button,
                        fullWidth: true,
                        disabled: !!validationMessage,
                        onClick: onClick,
                        children: validationMessage || t('plugin_red_packet_next')
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(85139);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(98354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/List/List.js + 1 modules
var List = __webpack_require__(20476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/ListItem/ListItem.js + 2 modules
var ListItem = __webpack_require__(16451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(64452);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(85010);
// EXTERNAL MODULE: ../web3-shared/evm/utils/call.ts
var call = __webpack_require__(75000);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721ContractBalance.ts





function useERC721ContractBalance(address, account) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const erc721TokenContract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(address);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!address || !dist.EthereumAddress.isValid(account) || !dist.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        return (0,call/* safeNonPayableTransactionCall */.Y)(erc721TokenContract.methods.balanceOf(account));
    }, [
        address,
        chainId,
        erc721TokenContract,
        account
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(90014);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useSocket.ts
var useSocket = __webpack_require__(37037);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/ExpandMore.js
var ExpandMore = __webpack_require__(29579);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(84797);
;// CONCATENATED MODULE: ./src/web3/UI/ERC721ContractSelectPanel.tsx












const ERC721ContractSelectPanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>{
    return {
        root: {
            height: 52,
            border: `1px solid ${theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336'}`,
            borderRadius: 12,
            padding: theme.spacing(0.8, 1.2, 1),
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column'
        },
        balance: {},
        title: {},
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
        icon: {
            height: 24,
            width: 24,
            borderRadius: 500
        },
        tokenWrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        nftName: {
            marginLeft: theme.spacing(props.hasIcon ? 1 : 0),
            fontWeight: 300,
            pointerEvents: 'none',
            fontSize: 16,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        expandIcon: {
            color: theme.palette.text.primary
        },
        pointer: {
            cursor: 'pointer'
        }
    };
});
function ERC721ContractSelectPanel(props) {
    const { onContractChange , onBalanceChange , contract , label , chainId =types/* ChainId.Mainnet */.a_.Mainnet  } = props;
    const account = (0,useAccount/* useAccount */.m)();
    const { classes  } = ERC721ContractSelectPanel_useStyles({
        hasIcon: Boolean(contract?.iconURL)
    });
    const { value: balanceFromChain , loading: loadingFromChain  } = useERC721ContractBalance(contract?.address, account);
    const { data: assets , state: loadingBalanceFromRemoteState  } = (0,useCollectibles/* useCollections */.b)(account, chainId, !!contract);
    const convertedAssets = assets.map((x)=>({
            contractDetailed: {
                type: types/* EthereumTokenType.ERC721 */.Dr.ERC721,
                address: x.address,
                chainId,
                name: x.name,
                symbol: x.symbol,
                baseURI: x.iconURL,
                iconURL: x.iconURL
            },
            balance: x.balance
        })
    );
    const { t  } = (0,utils/* useI18N */.M1)();
    const balanceFromRemote = convertedAssets ? convertedAssets.find((asset)=>(0,address/* isSameAddress */.Wr)(asset.contractDetailed.address, contract?.address)
    )?.balance : undefined;
    const balance = balanceFromChain ? Number(balanceFromChain) : balanceFromRemote ?? 0;
    (0,react.useEffect)(()=>{
        onBalanceChange?.(balance);
    }, [
        onBalanceChange,
        balance
    ]);
    const loading = (loadingFromChain || loadingBalanceFromRemoteState !== useSocket/* SocketState.done */.d.done) && !balance;
    // #region select contract
    const [id] = (0,react.useState)(v4/* default */.Z);
    const { setDialog: setNftContractDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.selectNftContractDialogUpdated */.R.events.selectNftContractDialogUpdated, (0,react.useCallback)((ev)=>{
        if (ev.open || !ev.contract || ev.uuid !== id) return;
        onContractChange(ev.contract);
    }, [
        id,
        onContractChange
    ]));
    const openDialog = (0,react.useCallback)(()=>{
        setNftContractDialog({
            open: true,
            chainId,
            uuid: id
        });
    }, [
        setNftContractDialog,
        v4/* default */.Z,
        chainId
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: label ?? t('dashboard_tab_collectibles')
                    }),
                    !contract?.address || !dist.EthereumAddress.isValid(contract.address) ? null : loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        size: 16
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.title,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t('wallet_balance'),
                            ": ",
                            balance ? balance : '0'
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classnames_default()(classes.wrapper, classes.pointer),
                onClick: openDialog,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.tokenWrapper,
                        children: [
                            contract?.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                className: classes.icon,
                                src: contract?.iconURL
                            }) : null,
                            contract?.name ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.nftName,
                                color: "textPrimary",
                                children: contract?.name
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                        className: classes.expandIcon
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721ContractIsApproveForAll.ts



/**
 * @param contractAddress NFT contract address.
 * @param owner The address that owns the NFTs.
 * @param operator The address that acts on behalf of the owner.
 * @return True if `operator` is an approved operator for `owner`, false otherwise.
 */ function useERC721ContractIsApproveForAll(contractAddress, owner, operator) {
    const erc721TokenContract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(contractAddress);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!erc721TokenContract || !owner || !operator) return;
        return (0,call/* safeNonPayableTransactionCall */.Y)(erc721TokenContract.methods.isApprovedForAll(owner, operator));
    }, [
        erc721TokenContract,
        owner,
        operator
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(29812);
;// CONCATENATED MODULE: ../web3-shared/evm/hooks/useERC721ContractSetApproveForAllCallback.ts






/**
 * @param contractAddress NFT contract Address.
 * @param operator Address to add to the set of authorized operators.
 * @param approved True if the operator is approved, false to revoke approval.
 */ function useERC721ContractSetApproveForAllCallback(contractAddress, operator, approved) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const erc721TokenContract = (0,useERC721TokenContract/* useERC721TokenContract */.n)(contractAddress);
    const [approveState, setApproveState] = (0,useTransactionState/* useTransactionState */.p)();
    const approveCallback = (0,react.useCallback)(async ()=>{
        if (!erc721TokenContract || !contractAddress || !operator) {
            setApproveState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        setApproveState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const config = {
            from: account,
            gas: await erc721TokenContract.methods.setApprovalForAll(operator, approved).estimateGas({
                from: account
            }).catch((error)=>{
                setApproveState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        return new Promise(async (resolve, reject)=>{
            erc721TokenContract.methods.setApprovalForAll(operator, approved).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setApproveState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setApproveState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setApproveState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        chainId,
        erc721TokenContract,
        approved,
        contractAddress,
        operator,
        setApproveState
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setApproveState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        approveState,
        approveCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../web3-shared/evm/pipes/index.ts
var pipes = __webpack_require__(55678);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/OpenInNew.js
var OpenInNew = __webpack_require__(33429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(93775);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumERC721TokenApprovedBoundary.tsx









const EthereumERC721TokenApprovedBoundary_useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        snackBarText: {
            fontSize: 14
        },
        snackBarLink: {
            color: 'white'
        },
        openIcon: {
            display: 'flex',
            width: 18,
            height: 18,
            marginLeft: 2
        },
        snackBar: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateY(1px)'
        }
    })
);
function EthereumERC721TokenApprovedBoundary(props) {
    const { owner , contractDetailed , operator , children , validationMessage: _validationMessage  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,entry/* useStylesExtends */.Bc)(EthereumERC721TokenApprovedBoundary_useStyles(), props);
    const { value , loading , retry  } = useERC721ContractIsApproveForAll(contractDetailed?.address, owner, operator);
    const [approveState, approveCallback, resetCallback] = useERC721ContractSetApproveForAllCallback(contractDetailed?.address, operator, true);
    const { showSnackbar  } = (0,entry/* useCustomSnackbar */.Ii)();
    (0,react.useEffect)(()=>{
        if (approveState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && approveState.no === 0) {
            showSnackbar(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.snackBar,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.snackBarText,
                        children: t('plugin_wallet_approve_all_nft_successfully', {
                            symbol: contractDetailed?.symbol
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                        href: (0,pipes/* resolveTransactionLinkOnExplorer */.z4)(contractDetailed.chainId, approveState.receipt.transactionHash),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: classes.snackBarLink,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                            className: classes.openIcon
                        })
                    })
                ]
            }), {
                variant: 'success',
                anchorOrigin: {
                    horizontal: 'right',
                    vertical: 'top'
                }
            });
            resetCallback();
            retry();
        } else if (approveState.type === types/* TransactionStateType.FAILED */.n$.FAILED) {
            showSnackbar(approveState.error.message, {
                variant: 'error'
            });
            resetCallback();
        }
    }, [
        approveState,
        contractDetailed
    ]);
    const validationMessage = (0,react.useMemo)(()=>{
        if (!contractDetailed?.address || !dist.EthereumAddress.isValid(contractDetailed?.address)) return t('plugin_wallet_select_a_nft_contract');
        if (!owner || !dist.EthereumAddress.isValid(owner)) return t('plugin_wallet_select_a_nft_owner');
        if (!operator || !dist.EthereumAddress.isValid(operator)) return t('plugin_wallet_select_a_nft_operator');
        if (_validationMessage) return _validationMessage;
        return '';
    }, [
        contractDetailed,
        owner,
        operator,
        _validationMessage
    ]);
    if ([
        types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING,
        types/* TransactionStateType.HASH */.n$.HASH
    ].includes(approveState.type)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.approveButton,
            variant: "contained",
            size: "large",
            fullWidth: true,
            loading: true,
            disabled: true,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_nft_approving_all', {
                symbol: contractDetailed?.symbol ? contractDetailed.symbol.toLowerCase() === 'unknown' ? 'All' : contractDetailed.symbol : 'All'
            })
        });
    } else if (validationMessage) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.approveButton,
            variant: "contained",
            size: "large",
            fullWidth: true,
            disabled: true,
            ...props.ActionButtonProps,
            children: validationMessage
        });
    } else if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.approveButton,
            variant: "contained",
            size: "large",
            fullWidth: true,
            loading: true,
            disabled: true,
            ...props.ActionButtonProps
        });
    } else if (value === false) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.approveButton,
            variant: "contained",
            size: "large",
            fullWidth: true,
            onClick: approveCallback,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_approve_all_nft', {
                symbol: contractDetailed?.symbol ? contractDetailed.symbol.toLowerCase() === 'unknown' ? 'All' : contractDetailed.symbol : 'All'
            })
        });
    } else if (value === undefined) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classes.approveButton,
            variant: "contained",
            size: "large",
            fullWidth: true,
            onClick: retry,
            ...props.ActionButtonProps,
            children: t('plugin_wallet_fail_to_load_nft_contract')
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: children
    });
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var web3_providers_src = __webpack_require__(92820);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Check.js
var Check = __webpack_require__(69315);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/AddCircleOutline.js
var AddCircleOutline = __webpack_require__(36924);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/InputBase/InputBase.js
var InputBase = __webpack_require__(85974);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedpacketMessagePanel.tsx





const RedpacketMessagePanel_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            height: 52,
            border: `1px solid ${theme.palette.mode === 'light' ? '#EBEEF0' : '#2F3336'}`,
            borderRadius: 12,
            padding: theme.spacing(0.8, 1.2, 1),
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            width: '100%'
        },
        title: {},
        wrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
        input: {
            flex: 1,
            padding: theme.spacing(0.5)
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        }
    };
});
function RedpacketMessagePanel(props) {
    const { onChange , message  } = props;
    const { classes  } = RedpacketMessagePanel_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.wrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    color: "textSecondary",
                    variant: "body2",
                    component: "span",
                    children: t('plugin_red_packet_message_label')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()(classes.wrapper),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    className: classes.input,
                    onChange: (e)=>onChange(e.target.value)
                    ,
                    inputProps: {
                        placeholder: t('plugin_red_packet_best_wishes')
                    },
                    value: message
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721TokenDetailedCallback.ts
var useERC721TokenDetailedCallback = __webpack_require__(98477);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(2921);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(37731);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/QuestionMark.js
var QuestionMark = __webpack_require__(89579);
// EXTERNAL MODULE: ../icons/general/Search.tsx
var Search = __webpack_require__(38524);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.16.5_react-dom@18.0.0+react@18.0.0/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(31008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_react-dom@18.0.0+react@18.0.0/node_modules/react-use/esm/useUpdate.js
var useUpdate = __webpack_require__(52648);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/findLastIndex.js
var findLastIndex = __webpack_require__(86049);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/SelectNftTokenDialog.tsx















const SelectNftTokenDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme, props)=>({
        dialogContent: {
            minHeight: 380
        },
        dialogContentFixedHeight: {
            height: 610
        },
        tokenBox: {
            background: theme.palette.background.default,
            width: 530,
            minHeight: 270,
            borderRadius: 12,
            margin: '16px auto',
            padding: 10
        },
        ownerTokenBox: {
            background: theme.palette.background.default,
            width: '96%',
            height: 480,
            borderRadius: 12,
            margin: '14px auto',
            padding: 10
        },
        ownerList: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px 0',
            width: 528,
            height: 188,
            overflowY: 'auto',
            borderRadius: 12,
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5),
            padding: theme.spacing(1, 1.5, 1, 1)
        },
        noResultBox: {
            width: 540,
            height: 180,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 16
        },
        search: {
            width: 405,
            padding: 5,
            border: '1px solid #EBEEF0',
            borderRadius: 6,
            display: 'flex',
            alignItems: 'center'
        },
        iconButton: {
            color: '#7B8192',
            padding: theme.spacing(0.5)
        },
        searchButton: {
            borderRadius: 6,
            width: 100
        },
        searchWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0'
        },
        searchWrapperSingle: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: 0
        },
        textField: {
            width: 394
        },
        wrapper: {
            display: 'flex',
            overflow: 'hidden',
            flexDirection: 'column',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2.5),
            background: theme.palette.mode === 'light' ? '#fff' : '#2F3336',
            width: 120,
            minHeight: 153,
            borderRadius: 8
        },
        iframe: {
            minHeight: 153
        },
        nftNameWrapper: {
            width: '100%',
            background: theme.palette.mode === 'light' ? 'none' : '#2F3336',
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8
        },
        nftImg: {
            margin: '0 auto',
            height: 160,
            width: 'auto',
            minWidth: 120
        },
        nftName: {
            marginLeft: 8,
            minHeight: 30
        },
        nftWrapper: {
            justifyContent: 'center'
        },
        confirmButton: {
            width: '100%',
            backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
            color: theme.palette.mode === 'dark' ? '#000' : '#fff'
        },
        tokenSelector: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            width: '100%',
            height: 388,
            overflowY: 'auto',
            borderRadius: 12,
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5),
            padding: theme.spacing(1, 1.5, 1, 1),
            boxSizing: 'border-box',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        selectWrapper: {
            background: theme.palette.mode === 'light' ? '#fff' : '#2F3336',
            display: 'flex',
            overflow: 'hidden',
            padding: 0,
            flexDirection: 'column',
            borderRadius: 8,
            height: 180,
            userSelect: 'none',
            width: 120
        },
        hide: {
            display: 'none !important'
        },
        loadingWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent'
        },
        selectWrapperNftNameWrapper: {
            width: '100%',
            background: theme.palette.background.paper,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            overflow: 'hidden'
        },
        selectWrapperNftName: {
            marginLeft: 8,
            minHeight: 35,
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        },
        checkbox: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            top: 8,
            right: 6,
            width: 17,
            height: 17,
            borderRadius: 6,
            border: '2px solid #6E748E',
            backgroundColor: 'white'
        },
        checked: {
            borderColor: '#1C68F3 !important'
        },
        checkIcon: {
            width: 15,
            height: 15,
            color: '#1C68F3'
        },
        loadingFailImage: {
            minHeight: '0px !important',
            maxWidth: 'none',
            transform: 'translateY(10px)',
            width: 64,
            height: 64
        },
        selectedTokenAmount: {
            color: props.isSelectSharesExceed ? '#FF5F5F' : '#1C68F3'
        },
        totalAmount: {
            paddingLeft: 1
        },
        selectAmountBox: {
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center'
        },
        questionMarkIcon: {
            padding: 2,
            width: 12,
            border: `1px solid ${theme.palette.mode === 'light' ? '#0F1419' : '#D9D9D9'}`,
            borderRadius: 999,
            transform: 'translateY(-1px)',
            height: 12,
            marginLeft: 5,
            cursor: 'pointer'
        },
        selectBar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 12,
            padding: '0 8px'
        },
        selectAll: {
            display: 'flex',
            alignItems: 'center',
            fontSize: 14
        },
        selectAllCheckBox: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            width: 17,
            height: 17,
            borderRadius: 6,
            marginRight: 5,
            border: '2px solid #6E748E',
            backgroundColor: 'white'
        },
        selectAllCheckBoxText: {
            pointerEvents: 'none'
        },
        selectSharesExceed: {
            color: '#FF5F5F'
        },
        selectSharesExceedBox: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '14px 4px'
        },
        arrow: {
            color: theme.palette.mode === 'dark' ? '#fff' : '#111418',
            transform: 'translateX(260px) !important'
        },
        tooltip: {
            transform: 'translateX(20px) !important',
            padding: '10px 20px',
            width: 256,
            backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#111418'
        },
        tooltipText: {
            color: theme.palette.mode === 'dark' ? '#000' : '#fff'
        },
        tokenId: {
            color: '#1D9BF0'
        },
        nonExistedTokenBox: {
            height: 388,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        assetImgWrapper: {
            maxHeight: 155
        }
    })
);
function SelectNftTokenDialog(props) {
    const { open , contract , existTokenDetailedList , tokenDetailedOwnerList , setExistTokenDetailedList , onClose , loadingOwnerList ,  } = props;
    const { t: t1  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    const [tokenDetailed, setTokenDetailed] = (0,react.useState)();
    const [searched, setSearched] = (0,react.useState)(false);
    const [tokenDetailedSelectedList, setTokenDetailedSelectedList] = (0,react.useState)(existTokenDetailedList);
    const [loadingToken, setLoadingToken] = (0,react.useState)(false);
    const [tokenId, setTokenId, erc721TokenDetailedCallback] = (0,useERC721TokenDetailedCallback/* useERC721TokenDetailedCallback */._)(contract);
    const [tokenIdListInput, setTokenIdListInput] = (0,react.useState)('');
    const [tokenIdFilterList, setTokenIdFilterList] = (0,react.useState)([]);
    const [nonExistedTokenIdList, setNonExistedTokenIdList] = (0,react.useState)([]);
    const isSelectSharesExceed = (tokenDetailedOwnerList.length === 0 ? constants/* NFT_RED_PACKET_MAX_SHARES */.I0 - 1 : constants/* NFT_RED_PACKET_MAX_SHARES */.I0) < tokenDetailedSelectedList.length;
    const { classes  } = SelectNftTokenDialog_useStyles({
        isSelectSharesExceed
    });
    const [selectAll, setSelectAll] = (0,react.useState)(false);
    const selectAllHandler = (0,react.useCallback)(()=>{
        setTokenDetailedSelectedList(selectAll ? [] : tokenDetailedOwnerList);
        setSelectAll(!selectAll);
    }, [
        selectAll,
        tokenDetailedOwnerList
    ]);
    (0,react.useEffect)(()=>{
        setTokenDetailed(undefined);
        setTokenId('');
        setTokenDetailedSelectedList(existTokenDetailedList);
        setSearched(false);
    }, [
        contract
    ]);
    (0,react.useEffect)(()=>{
        setTokenIdFilterList([]);
        setNonExistedTokenIdList([]);
    }, [
        tokenIdListInput
    ]);
    const update = (0,useUpdate/* default */.Z)();
    (0,react.useEffect)(update, [
        tokenDetailedOwnerList
    ]);
    const selectToken = (0,react.useCallback)((token, findToken, shiftKey, index)=>{
        if (!shiftKey || tokenIdFilterList.length > 0) {
            if (findToken) {
                setTokenDetailedSelectedList(tokenDetailedSelectedList.filter((v)=>v.tokenId !== findToken.tokenId
                ));
            } else {
                setTokenDetailedSelectedList(tokenDetailedSelectedList.concat({
                    ...token,
                    index
                }));
            }
        } else {
            const tokenDetailedSelectedListSorted = tokenDetailedSelectedList.sort((a, b)=>(b.index ?? 0) - (a.index ?? 0)
            );
            if (findToken) {
                const unselectedTokenIdList = [];
                let nextToken = findToken;
                while(nextToken){
                    unselectedTokenIdList.push(nextToken.tokenId);
                    const nextTokenIndex = (nextToken?.index ?? 0) + 1;
                    nextToken = tokenDetailedSelectedListSorted.find((v)=>(v.index ?? 0) === nextTokenIndex
                    );
                }
                setTokenDetailedSelectedList(tokenDetailedSelectedList.filter((v)=>!unselectedTokenIdList.includes(v.tokenId)
                ));
            } else {
                const lastSelectedToken = tokenDetailedSelectedListSorted.filter((v)=>(v?.index ?? 0) < index
                )[0];
                const lastSelectedTokenIndex = (0,findLastIndex/* default */.Z)(tokenDetailedOwnerList, (v, i)=>v.tokenId === lastSelectedToken?.tokenId && i < index
                );
                setTokenDetailedSelectedList(tokenDetailedSelectedList.concat(tokenDetailedOwnerList.slice(lastSelectedTokenIndex + 1, index + 1)));
            }
        }
    }, [
        tokenDetailedSelectedList,
        setTokenDetailedSelectedList,
        tokenIdFilterList
    ]);
    // #region fetch token detail
    const onSearch = (0,react.useCallback)(async ()=>{
        setLoadingToken(true);
        const _tokenDetailed = await erc721TokenDetailedCallback();
        setTokenDetailed(_tokenDetailed?.info.owner ? {
            ..._tokenDetailed,
            index: 0
        } : undefined);
        setSearched(true);
        setLoadingToken(false);
    }, [
        erc721TokenDetailedCallback
    ]);
    (0,react.useEffect)(()=>{
        setTokenDetailed(undefined);
        setSearched(false);
    }, [
        tokenId
    ]);
    (0,react.useEffect)(()=>{
        if (tokenDetailedOwnerList.length > 0) setTokenDetailed(undefined);
    }, [
        tokenDetailedOwnerList.length
    ]);
    const isOwner = (0,address/* isSameAddress */.Wr)(account, tokenDetailed?.info.owner) || tokenDetailedSelectedList.length > 0;
    const isAdded = existTokenDetailedList.map((t)=>t.tokenId
    ).includes(tokenDetailed?.tokenId ?? '');
    // #endregion
    const onFilter = (0,react.useCallback)(()=>{
        if (!/^(\s?(\d+)?\s?,?)+$/.test(tokenIdListInput)) return;
        const list = tokenIdListInput.split(',').map((v)=>Number(v).toString()
        );
        setTokenIdFilterList(list);
        setNonExistedTokenIdList(list.filter((v)=>!tokenDetailedOwnerList.map((t)=>t.tokenId
            ).includes(v)
        ));
    }, [
        tokenIdListInput
    ]);
    const onSubmit = (0,react.useCallback)(()=>{
        setExistTokenDetailedList(tokenDetailed ? [
            tokenDetailed,
            ...existTokenDetailedList
        ] : tokenDetailedSelectedList);
        onClose();
    }, [
        tokenDetailed,
        tokenDetailedSelectedList,
        setExistTokenDetailedList,
        onClose
    ]);
    const NonExistedTokenList = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
            i18nKey: "plugin_red_packet_nft_non_existed_tip",
            components: {
                tokenIdList: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                    children: nonExistedTokenIdList.map((id, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: classes.tokenId,
                                    children: [
                                        " #",
                                        id
                                    ]
                                }),
                                i < nonExistedTokenIdList.length - 1 ? ', ' : ' '
                            ]
                        }, i)
                    )
                })
            }
        })
    ;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onClose,
        title: t1('plugin_red_packet_nft_select_collection'),
        maxWidth: "xs",
        children: tokenDetailedOwnerList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.tokenBox,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.searchWrapperSingle,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                                    className: classes.search,
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* SearchIcon */.W, {
                                            className: classes.iconButton
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                                            value: tokenId,
                                            placeholder: "Input Token ID",
                                            className: classes.textField,
                                            onChange: (e)=>setTokenId(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    disabled: !tokenId,
                                    className: classes.searchButton,
                                    variant: "contained",
                                    onClick: onSearch,
                                    children: t1('search')
                                })
                            ]
                        }),
                        loadingToken || !tokenDetailed || !contract ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.noResultBox,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: loadingToken ? t1('wallet_loading_token') : searched ? t1('wallet_search_no_result') : null
                            })
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classnames_default()(classes.wrapper, classes.nftWrapper),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                                    contractAddress: contract.address,
                                    chainId: contract.chainId,
                                    url: tokenDetailed.info.mediaUrl,
                                    tokenId: tokenId,
                                    classes: {
                                        loadingFailImage: classes.loadingFailImage,
                                        iframe: classes.iframe,
                                        imgWrapper: classes.assetImgWrapper
                                    }
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.selectWrapperNftNameWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.selectWrapperNftName,
                                        color: "textSecondary",
                                        children: tokenDetailed.info.name
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.selectSharesExceedBox,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.selectSharesExceed,
                            children: isSelectSharesExceed ? t1('plugin_red_packet_nft_max_shares_tip', {
                                amount: constants/* NFT_RED_PACKET_MAX_SHARES */.I0
                            }) : null
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.selectAmountBox,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootTooltip */.p_, {
                                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.tooltipText,
                                        children: tokenDetailedSelectedList.length > constants/* NFT_RED_PACKET_MAX_SHARES */.I0 ? t1('plugin_red_packet_nft_max_shares_tip', {
                                            amount: constants/* NFT_RED_PACKET_MAX_SHARES */.I0
                                        }) : t1('plugin_red_packet_nft_max_shares', {
                                            amount: constants/* NFT_RED_PACKET_MAX_SHARES */.I0
                                        })
                                    }),
                                    placement: "top-end",
                                    classes: {
                                        tooltip: classes.tooltip,
                                        arrow: classes.arrow
                                    },
                                    arrow: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark/* default */.Z, {
                                        className: classes.questionMarkIcon
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.selectedTokenAmount,
                                            children: tokenDetailedSelectedList.length
                                        }),
                                        ' ',
                                        "NFTs"
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    disabled: loadingToken || !tokenDetailed || !isOwner || isAdded || isSelectSharesExceed,
                    className: classes.confirmButton,
                    variant: "contained",
                    onClick: onSubmit,
                    children: tokenDetailed && !isOwner ? t1('wallet_add_nft_invalid_owner') : isAdded ? t1('wallet_add_nft_already_added') : t1('confirm')
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classnames_default()(classes.dialogContent, classes.dialogContentFixedHeight),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.ownerTokenBox,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: classes.searchWrapper,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                                    className: classes.search,
                                    elevation: 0,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* SearchIcon */.W, {
                                            className: classes.iconButton
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                                            value: tokenDetailedOwnerList.length === 0 ? tokenId : tokenIdListInput,
                                            placeholder: "Token ID separated by comma, e.g. 1224, 7873, 8948",
                                            className: classes.textField,
                                            onChange: (e)=>tokenDetailedOwnerList.length === 0 ? setTokenId(e.target.value) : setTokenIdListInput(e.target.value)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    disabled: tokenDetailedOwnerList.length === 0 ? !tokenId : !tokenIdListInput,
                                    className: classes.searchButton,
                                    variant: "contained",
                                    onClick: tokenDetailedOwnerList.length === 0 ? onSearch : onFilter,
                                    children: t1('search')
                                })
                            ]
                        }),
                        (loadingToken || !tokenDetailed) && searched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.noResultBox,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                children: loadingToken ? t1('wallet_loading_token') : t1('wallet_search_no_result')
                            })
                        }) : tokenDetailed?.info.name ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classnames_default()(classes.wrapper, classes.nftWrapper),
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    className: classes.nftImg,
                                    src: tokenDetailed?.info.mediaUrl
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.nftNameWrapper,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.nftName,
                                        color: "textSecondary",
                                        children: tokenDetailed?.info.name
                                    })
                                })
                            ]
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                tokenIdFilterList.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.selectBar,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: classes.selectAll,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: classnames_default()(classes.selectAllCheckBox, selectAll ? classes.checked : ''),
                                                    onClick: selectAllHandler,
                                                    children: selectAll ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                                        className: classes.checkIcon
                                                    }) : null
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classnames_default()(classes.selectAllCheckBoxText),
                                                    children: t1('select_all')
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                                i18nKey: "plugin_red_packet_nft_shift_select_tip",
                                                components: {
                                                    text: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        style: {
                                                            color: '#1C68F3'
                                                        }
                                                    })
                                                },
                                                values: {
                                                    text: 'Shift'
                                                }
                                            })
                                        })
                                    ]
                                }) : null,
                                nonExistedTokenIdList.length > 0 && nonExistedTokenIdList.length === tokenIdFilterList.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.nonExistedTokenBox,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NonExistedTokenList, {})
                                    })
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.tokenSelector,
                                    children: [
                                        tokenDetailedOwnerList.map((token, i)=>{
                                            const findToken = tokenDetailedSelectedList.find((t)=>t.tokenId === token.tokenId
                                            );
                                            return tokenIdFilterList.length > 0 && !tokenIdFilterList.includes(token.tokenId) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTCard, {
                                                    findToken: findToken,
                                                    renderOrder: i,
                                                    token: token,
                                                    tokenIdFilterList: tokenIdFilterList,
                                                    selectToken: selectToken,
                                                    isSelectSharesExceed: isSelectSharesExceed
                                                })
                                            }, i);
                                        }),
                                        loadingOwnerList ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                            className: classnames_default()(classes.selectWrapper, classes.loadingWrapper),
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                                                size: 25
                                            })
                                        }) : null
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.selectSharesExceedBox,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textPrimary",
                                    children: nonExistedTokenIdList.length > 0 && nonExistedTokenIdList.length !== tokenIdFilterList.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NonExistedTokenList, {}) : null
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.selectSharesExceed,
                                    children: isSelectSharesExceed ? t1('plugin_red_packet_nft_max_shares_tip', {
                                        amount: constants/* NFT_RED_PACKET_MAX_SHARES */.I0
                                    }) : null
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.selectAmountBox,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* ShadowRootTooltip */.p_, {
                                    title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.tooltipText,
                                        children: tokenDetailedSelectedList.length > constants/* NFT_RED_PACKET_MAX_SHARES */.I0 ? t1('plugin_red_packet_nft_max_shares_tip', {
                                            amount: constants/* NFT_RED_PACKET_MAX_SHARES */.I0
                                        }) : t1('plugin_red_packet_nft_max_shares', {
                                            amount: constants/* NFT_RED_PACKET_MAX_SHARES */.I0
                                        })
                                    }),
                                    placement: "top-end",
                                    classes: {
                                        tooltip: classes.tooltip,
                                        arrow: classes.arrow
                                    },
                                    arrow: true,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(QuestionMark/* default */.Z, {
                                        className: classes.questionMarkIcon
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.selectedTokenAmount,
                                            children: tokenDetailedSelectedList.length + ' '
                                        }),
                                        "/",
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                            className: classes.totalAmount,
                                            children: tokenDetailedOwnerList.length
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    disabled: loadingToken || !tokenDetailed && tokenDetailedSelectedList.length === 0 || !isOwner || isAdded || isSelectSharesExceed,
                    className: classes.confirmButton,
                    variant: "contained",
                    onClick: onSubmit,
                    children: tokenDetailed && !isOwner ? t1('wallet_add_nft_invalid_owner') : isAdded ? t1('wallet_add_nft_already_added') : t1('confirm')
                })
            ]
        })
    });
}
function NFTCard(props) {
    const { findToken , token , tokenIdFilterList , isSelectSharesExceed , renderOrder , selectToken  } = props;
    const { classes  } = SelectNftTokenDialog_useStyles({
        isSelectSharesExceed
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classes.selectWrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                url: token.info.mediaUrl,
                contractAddress: token.contractDetailed.address,
                tokenId: token.tokenId,
                renderOrder: renderOrder,
                chainId: token.contractDetailed.chainId,
                classes: {
                    loadingFailImage: classes.loadingFailImage,
                    iframe: classes.iframe,
                    imgWrapper: classes.assetImgWrapper
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.selectWrapperNftNameWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.selectWrapperNftName,
                    color: "textSecondary",
                    children: (0,formatter/* formatNFT_TokenId */.uu)(token.tokenId, 2)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()(classes.checkbox, findToken ? classes.checked : ''),
                onClick: (event)=>selectToken(token, findToken, event.shiftKey, token.index)
                ,
                children: findToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                    className: classes.checkIcon
                }) : null
            })
        ]
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWallet.ts
var useWallet = __webpack_require__(67376);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useWeb3.ts + 1 modules
var useWeb3 = __webpack_require__(46140);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(15771);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Launch.js
var Launch = __webpack_require__(47514);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
;// CONCATENATED MODULE: ../web3-contracts/abis/NftRedPacket.json
const NftRedPacket_namespaceObject = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_token_id","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total_tokens","type":"uint256"},{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":true,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"packet_number","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"uint256[]","name":"token_ids","type":"uint256[]"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint16","name":"remaining_balance","type":"uint16"},{"indexed":false,"internalType":"uint256[]","name":"remaining_token_ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256","name":"bit_status","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"pkt_id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint16","name":"balance","type":"uint16"},{"internalType":"uint256","name":"total_pkts","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_id","type":"uint256"},{"internalType":"uint256","name":"bit_status","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_claimed_id","outputs":[{"internalType":"uint256","name":"claimed_token_id","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_erc721_remain_ids","outputs":[{"internalType":"uint256","name":"bit_status","type":"uint256"},{"internalType":"uint256[]","name":"erc721_token_ids","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"erc721_token_id_list","type":"uint256[]"},{"internalType":"address","name":"token_addr","type":"address"}],"name":"check_ownership","outputs":[{"internalType":"bool","name":"is_your_token","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"pkt_id","type":"bytes32"},{"internalType":"bytes","name":"signedMsg","type":"bytes"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_public_key","type":"address"},{"internalType":"uint64","name":"_duration","type":"uint64"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256[]","name":"_erc721_token_ids","type":"uint256[]"}],"name":"create_red_packet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useContract.ts
var useContract = __webpack_require__(3858);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useNftRedPacketContract.ts


function useNftRedPacketContract() {
    const { RED_PACKET_NFT_ADDRESS  } = (0,constants_constants/* useNftRedPacketConstants */.uq)();
    const contract = (0,useContract/* useContract */.cq)(RED_PACKET_NFT_ADDRESS, NftRedPacket_namespaceObject);
    return contract;
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useCreateNftRedpacketCallback.ts





function useCreateNftRedpacketCallback(duration, message, name, contractAddress, tokenIdList) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [createState, setCreateState] = (0,useTransactionState/* useTransactionState */.p)();
    const nftRedPacketContract = useNftRedPacketContract();
    const createCallback = (0,react.useCallback)(async (publicKey)=>{
        if (!nftRedPacketContract) {
            setCreateState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        if (!contractAddress || !dist.EthereumAddress.isValid(contractAddress)) {
            setCreateState?.({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('NFT contract is invalid')
            });
            return;
        }
        if (tokenIdList.length === 0) {
            setCreateState?.({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Require to send one nft token at least')
            });
            return;
        }
        setCreateState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        const checkParams = [
            tokenIdList,
            contractAddress
        ];
        const isOwner = await nftRedPacketContract.methods.check_ownership(...checkParams).call({
            from: account
        });
        if (!isOwner) {
            setCreateState?.({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: new Error('Invalid ownership')
            });
            return;
        }
        const params = [
            publicKey,
            duration,
            lib_default().sha3(Math.random().toString()),
            message,
            name,
            contractAddress,
            tokenIdList, 
        ];
        const config = {
            from: account,
            gas: await nftRedPacketContract.methods.create_red_packet(...params).estimateGas({
                from: account
            }).catch((error)=>{
                setCreateState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }),
            chainId
        };
        return new Promise(async (resolve, reject)=>{
            nftRedPacketContract.methods.create_red_packet(...params).send(config)// Note: DO NOT remove this event listener since it relates to password saving.
            .on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setCreateState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
            }).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setCreateState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setCreateState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setCreateState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        duration,
        message,
        name,
        contractAddress,
        tokenIdList,
        nftRedPacketContract,
        setCreateState,
        account,
        chainId
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setCreateState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        createState,
        createCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedpacketNftConfirmDialog.tsx


















const RedpacketNftConfirmDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            fontSize: 16
        },
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        },
        account: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        message: {
            borderLeft: '2px solid red',
            paddingLeft: theme.spacing(0.5)
        },
        text: {
            fontSize: 16
        },
        bold: {
            fontWeight: 500
        },
        tokenWrapper: {
            float: 'right',
            display: 'flex',
            alignItems: 'center'
        },
        icon: {
            marginRight: 8,
            height: 24,
            width: 24
        },
        tokenSelector: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            width: '100%',
            height: 420,
            overflowY: 'auto',
            background: theme.palette.background.default,
            borderRadius: 12,
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5),
            padding: theme.spacing(1.5, 1.5, 1, 1.5),
            boxSizing: 'border-box'
        },
        tokenSelectorWrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 6,
            padding: 0,
            marginBottom: theme.spacing(2.5),
            background: theme.palette.mode === 'light' ? '#fff' : '#2F3336',
            width: 120,
            height: 180,
            overflow: 'hidden'
        },
        nftImg: {
            maxWidth: '100%'
        },
        nftNameWrapper: {
            width: '100%',
            background: theme.palette.background.paper,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            paddingTop: 2,
            paddingBottom: 1
        },
        nftName: {
            minHeight: 30,
            marginLeft: 8,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        buttonWrapper: {
            marginTop: 16
        },
        button: {
            minHeight: 36,
            height: 36
        },
        cancelButton: {},
        sendButton: {},
        snackBarText: {
            fontSize: 14
        },
        snackBarLink: {
            color: 'white'
        },
        openIcon: {
            display: 'flex',
            width: 18,
            height: 18,
            marginLeft: 2
        },
        snackBar: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateY(1px)'
        },
        loadingFailImage: {
            minHeight: '0px !important',
            maxWidth: 'none',
            transform: 'translateY(10px)',
            width: 64,
            height: 64
        },
        iframe: {
            minHeight: 147
        },
        ellipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        }
    })
);
function RedpacketNftConfirmDialog(props) {
    const { classes  } = RedpacketNftConfirmDialog_useStyles();
    const { open , onBack , onClose , message , contract , tokenList  } = props;
    const wallet = (0,useWallet/* useWallet */.O)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const { attachMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    const { t  } = (0,utils/* useI18N */.M1)();
    const { address: publicKey , privateKey  } = (0,react.useMemo)(()=>web3.eth.accounts.create()
    , []);
    const duration = 60 * 60 * 24;
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const senderName = (currentIdentity?.identifier.userId ?? currentIdentity?.linkedPersona?.nickname) ?? 'Unknown User';
    const tokenIdList = tokenList.map((value)=>value.tokenId
    );
    const [createState, createCallback, resetCallback] = useCreateNftRedpacketCallback(duration, message, senderName, contract.address, tokenIdList);
    const { closeDialog: closeWalletStatusDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    const isSending = [
        types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING,
        types/* TransactionStateType.HASH */.n$.HASH
    ].includes(createState.type);
    const onSendTx = (0,react.useCallback)(()=>createCallback(publicKey)
    , [
        publicKey
    ]);
    const [txid, setTxid] = (0,react.useState)('');
    const onSendPost = (0,react.useCallback)((id)=>{
        attachMetadata(constants/* RedPacketNftMetaKey */.HA, {
            id,
            txid,
            duration,
            message,
            senderName,
            contractName: contract.name,
            contractAddress: contract.address,
            contractTokenURI: contract.iconURL ?? '',
            contractVersion: 1,
            privateKey,
            chainId: contract.chainId
        });
        closeWalletStatusDialog();
    }, [
        duration,
        message,
        senderName,
        contract,
        privateKey,
        txid
    ]);
    (0,react.useEffect)(()=>{
        if (createState.type === types/* TransactionStateType.HASH */.n$.HASH && createState.hash) {
            setTxid(createState.hash);
            messages/* RedPacketRPC.addRedPacketNft */.T.addRedPacketNft({
                id: createState.hash,
                password: privateKey,
                contract_version: 1
            });
        }
        if (![
            types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
            types/* TransactionStateType.FAILED */.n$.FAILED
        ].includes(createState.type)) {
            return;
        }
        if (createState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && createState.no === 0) {
            const { receipt  } = createState;
            const { id  } = receipt.events?.CreationSuccess.returnValues ?? {};
            onSendPost(id);
            onClose();
        }
        resetCallback();
    }, [
        createState,
        onSendPost
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: open,
        onClose: onBack,
        title: t('confirm'),
        maxWidth: "xs",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textPrimary",
                                variant: "body1",
                                className: classes.text,
                                children: t('plugin_red_packet_nft_account_name')
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                color: "textPrimary",
                                variant: "body1",
                                align: "right",
                                className: classnames_default()(classes.account, classes.bold, classes.text),
                                children: [
                                    "(",
                                    wallet?.name,
                                    ") ",
                                    (0,formatter/* formatEthereumAddress */.j8)(account, 4),
                                    (0,address/* isNativeTokenAddress */.qw)(wallet) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        color: "textPrimary",
                                        className: classes.link,
                                        href: (0,pipes/* resolveAddressLinkOnExplorer */.V3)(chainId, account),
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        onClick: stop,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                            fontSize: "small"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                className: classnames_default()(classes.text),
                                children: t('plugin_red_packet_nft_attached_message')
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                align: "right",
                                className: (classes.text, classes.bold, classes.ellipsis),
                                children: message
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                color: "textPrimary",
                                className: classnames_default()(classes.text),
                                children: t('plugin_wallet_collections')
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.tokenWrapper,
                                children: [
                                    contract.iconURL ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                        className: classes.icon,
                                        src: contract.iconURL
                                    }) : null,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body1",
                                        color: "textPrimary",
                                        align: "right",
                                        className: classnames_default()(classes.text, classes.bold),
                                        children: contract.name
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 12,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                                className: classes.tokenSelector,
                                children: tokenList.map((value, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedpacketNftConfirmDialog_NFTCard, {
                                            token: value,
                                            renderOrder: i
                                        })
                                    }, i)
                                )
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textPrimary",
                                variant: "body1",
                                className: classnames_default()(classes.text),
                                children: t('plugin_red_packet_nft_total_amount')
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                color: "textPrimary",
                                align: "right",
                                className: classnames_default()(classes.text, classes.bold),
                                children: tokenList.length
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                    container: true,
                    spacing: 2,
                    className: classes.buttonWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classnames_default()(classes.button, classes.cancelButton),
                                fullWidth: true,
                                onClick: onBack,
                                size: "large",
                                variant: "contained",
                                children: t('cancel')
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                            item: true,
                            xs: 6,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                                classes: {
                                    connectWallet: classnames_default()(classes.button, classes.sendButton),
                                    unlockMetaMask: classnames_default()(classes.button, classes.sendButton)
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    variant: "contained",
                                    size: "large",
                                    loading: isSending,
                                    disabled: isSending,
                                    onClick: onSendTx,
                                    className: classnames_default()(classes.button, classes.sendButton),
                                    fullWidth: true,
                                    children: t('plugin_red_packet_send_symbol', {
                                        amount: tokenList.length,
                                        symbol: tokenList.length > 1 ? 'NFTs' : 'NFT'
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
function RedpacketNftConfirmDialog_NFTCard(props) {
    const { token , renderOrder  } = props;
    const { classes  } = RedpacketNftConfirmDialog_useStyles();
    const [name, setName] = (0,react.useState)((0,formatter/* formatNFT_TokenId */.uu)(token.tokenId, 2));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classnames_default()(classes.tokenSelectorWrapper),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                contractAddress: token.contractDetailed.address,
                chainId: token.contractDetailed.chainId,
                tokenId: token.tokenId,
                renderOrder: renderOrder,
                setERC721TokenName: setName,
                classes: {
                    loadingFailImage: classes.loadingFailImage,
                    iframe: classes.iframe
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.nftNameWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.nftName,
                    color: "textSecondary",
                    children: name
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketERC721Form.tsx





















const RedPacketERC721Form_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column'
        },
        line: {
            display: 'flex',
            margin: theme.spacing(1, 0, 2, 0)
        },
        nftNameWrapper: {
            width: '100%',
            background: theme.palette.background.paper,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
            paddingTop: 2,
            paddingBottom: 1
        },
        nftName: {
            minHeight: 30,
            marginLeft: 8,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        },
        input: {
            flex: 1,
            padding: theme.spacing(0.5)
        },
        tip: {
            fontSize: 17,
            marginBottom: theme.spacing(2)
        },
        nftImg: {
            maxWidth: '100%'
        },
        tokenSelector: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            width: '100%',
            height: 200,
            overflowY: 'auto',
            background: theme.palette.background.default,
            borderRadius: 12,
            padding: theme.spacing(1.5, 1.5, 1, 1),
            boxSizing: 'border-box'
        },
        tokenSelectorWrapper: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 8,
            padding: 0,
            marginBottom: theme.spacing(2.5),
            background: theme.palette.background.paper,
            width: 120,
            height: 180,
            overflow: 'hidden'
        },
        tokenSelectorParent: {
            background: theme.palette.background.default,
            borderRadius: 12,
            paddingBottom: 5,
            marginTop: theme.spacing(1.5),
            marginBottom: theme.spacing(1.5)
        },
        addWrapper: {
            cursor: 'pointer',
            alignItems: 'center',
            background: `${theme.palette.background.default} !important`,
            justifyContent: 'center',
            border: `1px solid ${theme.palette.divider}`
        },
        addIcon: {
            color: '#AFC3E1'
        },
        closeIconWrapperBack: {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            top: 5,
            right: 5,
            width: 18,
            height: 18,
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: 500,
            overflow: 'hidden'
        },
        closeIconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 18,
            height: 18,
            background: 'rgba(255, 95, 95, 0.3)'
        },
        closeIcon: {
            width: 14,
            height: 14,
            cursor: 'pointer',
            color: 'rgba(255, 95, 95, 1)'
        },
        loadingFailImage: {
            minHeight: '0px !important',
            maxWidth: 'none',
            transform: 'translateY(10px)',
            width: 64,
            height: 64
        },
        selectWrapper: {
            display: 'flex',
            alignItems: 'center',
            margin: '16px 0 8px 0'
        },
        option: {
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer'
        },
        optionLeft: {
            marginRight: '16px'
        },
        checkIcon: {
            width: 15,
            height: 15,
            color: '#fff'
        },
        checkIconWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            width: 17,
            height: 17,
            borderRadius: 999,
            marginRight: 5,
            border: '1px solid #6E748E',
            backgroundColor: 'white'
        },
        checked: {
            borderColor: '#1D9BF0 !important',
            background: '#1D9BF0 !important'
        },
        approveAllTip: {
            color: '#FF5F5F',
            margin: '16px 4px 24px 4px'
        },
        unapprovedTip: {
            color: theme.palette.grey[500]
        },
        disabledSelector: {
            opacity: 0.5,
            pointerEvents: 'none'
        },
        loadingOwnerList: {
            margin: '24px auto 16px'
        },
        iframe: {
            minHeight: 147
        },
        assetImgWrapper: {
            maxHeight: 155
        }
    };
});
function RedPacketERC721Form(props) {
    const { t: t1  } = (0,utils/* useI18N */.M1)();
    const { onClose  } = props;
    const { classes  } = RedPacketERC721Form_useStyles();
    const [open, setOpen] = (0,react.useState)(false);
    const [balance, setBalance] = (0,react.useState)(0);
    const [selectOption, setSelectOption] = (0,react.useState)(undefined);
    const [openConfirmDialog, setOpenConfirmDialog] = (0,react.useState)(false);
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [contract, setContract] = (0,react.useState)();
    const [manualSelectedTokenDetailedList, setExistTokenDetailedList] = (0,react.useState)([]);
    const [onceAllSelectedTokenDetailedList, setAllTokenDetailedList] = (0,react.useState)([]);
    const tokenDetailedList = selectOption === NFTSelectOption.Partial ? manualSelectedTokenDetailedList : onceAllSelectedTokenDetailedList;
    const [message, setMessage] = (0,react.useState)('Best Wishes!');
    const { asyncRetry: { loading: loadingOwnerList  } , tokenDetailedOwnerList: _tokenDetailedOwnerList = [] , clearTokenDetailedOwnerList ,  } = (0,web3_providers_src/* useERC721TokenDetailedOwnerList */.t9)(contract, account);
    const tokenDetailedOwnerList = _tokenDetailedOwnerList.map((v, index)=>({
            ...v,
            index
        })
    );
    const removeToken = (0,react.useCallback)((token)=>{
        setExistTokenDetailedList((list)=>list.filter((t)=>t.tokenId !== token.tokenId
            )
        );
    }, []);
    const maxSelectShares = Math.min(constants/* NFT_RED_PACKET_MAX_SHARES */.I0, tokenDetailedOwnerList.length);
    const clearToken = (0,react.useCallback)(()=>{
        setExistTokenDetailedList([]);
        clearTokenDetailedOwnerList();
        setOpenConfirmDialog(false);
    }, [
        clearTokenDetailedOwnerList
    ]);
    const clearContract = (0,react.useCallback)(()=>{
        setContract(undefined);
    }, []);
    (0,react.useEffect)(()=>{
        if (loadingOwnerList) {
            setSelectOption(undefined);
        } else if (!selectOption) {
            setSelectOption(NFTSelectOption.Partial);
        }
    }, [
        tokenDetailedOwnerList,
        selectOption,
        loadingOwnerList
    ]);
    (0,react.useEffect)(()=>{
        clearToken();
        setOpen(false);
    }, [
        contract,
        account
    ]);
    (0,react.useEffect)(()=>{
        setOpen(false);
        clearContract();
    }, [
        chainId
    ]);
    const { RED_PACKET_NFT_ADDRESS  } = (0,constants_constants/* useNftRedPacketConstants */.uq)();
    const validationMessage = (0,react.useMemo)(()=>{
        if (!balance) return t1('plugin_red_packet_erc721_insufficient_balance');
        if (tokenDetailedList.length === 0) return t1('plugin_wallet_select_a_token');
        return '';
    }, [
        tokenDetailedList.length,
        balance
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.root,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ERC721ContractSelectPanel, {
                        contract: contract,
                        onContractChange: setContract,
                        onBalanceChange: setBalance
                    }),
                    contract && balance ? loadingOwnerList ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                        size: 24,
                        className: classes.loadingOwnerList
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.selectWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classnames_default()(classes.optionLeft, classes.option, tokenDetailedOwnerList.length === 0 ? classes.disabledSelector : null),
                                onClick: ()=>{
                                    setSelectOption(NFTSelectOption.All);
                                    setAllTokenDetailedList(tokenDetailedOwnerList.slice(0, maxSelectShares));
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classnames_default()(classes.checkIconWrapper, selectOption === NFTSelectOption.All ? classes.checked : ''),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                            className: classes.checkIcon
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        children: tokenDetailedOwnerList.length === 0 ? 'All' : t1('plugin_red_packet_nft_select_all_option', {
                                            total: Math.min(constants/* NFT_RED_PACKET_MAX_SHARES */.I0, tokenDetailedOwnerList.length)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.option,
                                onClick: ()=>setSelectOption(NFTSelectOption.Partial)
                                ,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classnames_default()(classes.checkIconWrapper, selectOption === NFTSelectOption.Partial ? classes.checked : ''),
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                                            className: classes.checkIcon
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        color: "textPrimary",
                                        children: t1('plugin_red_packet_nft_select_partially_option')
                                    })
                                ]
                            })
                        ]
                    }) : null,
                    contract && balance && !loadingOwnerList ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.tokenSelectorParent,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                            className: classes.tokenSelector,
                            children: [
                                tokenDetailedList.map((value, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketERC721Form_NFTCard, {
                                            token: value,
                                            removeToken: removeToken,
                                            renderOrder: i
                                        })
                                    }, i)
                                ),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                                    onClick: ()=>setOpen(true)
                                    ,
                                    className: classnames_default()(classes.tokenSelectorWrapper, classes.addWrapper),
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCircleOutline/* default */.Z, {
                                        className: classes.addIcon,
                                        onClick: ()=>void 0
                                    })
                                })
                            ]
                        })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.line,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedpacketMessagePanel, {
                            onChange: (val)=>setMessage(val)
                            ,
                            message: message
                        })
                    }),
                    contract && balance && !loadingOwnerList ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.unapprovedTip,
                                children: t1('plugin_red_packet_nft_unapproved_tip')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.approveAllTip,
                                children: t1('plugin_red_packet_nft_approve_all_tip')
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumERC721TokenApprovedBoundary, {
                            validationMessage: validationMessage,
                            owner: account,
                            contractDetailed: contract,
                            operator: RED_PACKET_NFT_ADDRESS,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                variant: "contained",
                                size: "large",
                                disabled: !!validationMessage,
                                fullWidth: true,
                                onClick: ()=>setOpenConfirmDialog(true)
                                ,
                                children: t1('plugin_red_packet_next')
                            })
                        })
                    })
                ]
            }),
            open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SelectNftTokenDialog, {
                open: open,
                onClose: ()=>setOpen(false)
                ,
                contract: contract,
                existTokenDetailedList: tokenDetailedList,
                setExistTokenDetailedList: setExistTokenDetailedList,
                tokenDetailedOwnerList: tokenDetailedOwnerList,
                loadingOwnerList: loadingOwnerList
            }) : null,
            openConfirmDialog && contract ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RedpacketNftConfirmDialog, {
                message: message,
                contract: contract,
                open: openConfirmDialog,
                tokenList: tokenDetailedList,
                onBack: ()=>setOpenConfirmDialog(false)
                ,
                onClose: onClose
            }) : null
        ]
    });
}
function RedPacketERC721Form_NFTCard(props) {
    const { token , removeToken , renderOrder  } = props;
    const { classes  } = RedPacketERC721Form_useStyles();
    const [name, setName] = (0,react.useState)((0,formatter/* formatNFT_TokenId */.uu)(token.tokenId, 2));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        className: classnames_default()(classes.tokenSelectorWrapper),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                contractAddress: token.contractDetailed.address,
                chainId: token.contractDetailed.chainId,
                url: token.info.mediaUrl || token.info.imageURL,
                tokenId: token.tokenId,
                renderOrder: renderOrder,
                setERC721TokenName: setName,
                classes: {
                    loadingFailImage: classes.loadingFailImage,
                    iframe: classes.iframe,
                    imgWrapper: classes.assetImgWrapper
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.nftNameWrapper,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.nftName,
                    color: "textSecondary",
                    children: name
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.closeIconWrapperBack,
                onClick: ()=>removeToken(token)
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.closeIconWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
                        className: classes.closeIcon
                    })
                })
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/IconURL.ts
const IconURLs = {
    presentDai: new URL(/* asset import */ __webpack_require__(58794), __webpack_require__.b).toString(),
    presentDefault: new URL(/* asset import */ __webpack_require__(74094), __webpack_require__.b).toString(),
    presentOkb: new URL(/* asset import */ __webpack_require__(72251), __webpack_require__.b).toString(),
    erc20Token: new URL(/* asset import */ __webpack_require__(39590), __webpack_require__.b).toString(),
    erc721Token: new URL(/* asset import */ __webpack_require__(91984), __webpack_require__.b).toString()
};

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketCreateNew.tsx










const RedPacketCreateNew_useStyles = (0,entry/* makeStyles */.ZL)()((theme, { snsId  })=>({
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            height: 36,
            minHeight: 36,
            margin: `0 ${snsId === shared_src/* MINDS_ID */.fN ? '12px' : 'auto'}`,
            borderRadius: 4,
            backgroundColor: theme.palette.background.default,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        img: {
            width: 20,
            marginRight: 4
        },
        labelWrapper: {
            display: 'flex'
        },
        tabWrapper: {
            padding: theme.spacing(0, 2, 2, 2)
        }
    })
);
function RedPacketCreateNew(props) {
    const { origin , onNext , onChange , onClose , SelectMenuProps , state  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RedPacketCreateNew_useStyles({
        snsId: social_network/* activatedSocialNetworkUI.networkIdentifier */.LM.networkIdentifier
    });
    const chainId = (0,useChainId/* useChainId */.xx)();
    const tabProps = {
        tabs: [
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.labelWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.img,
                            src: IconURLs.erc20Token
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('plugin_red_packet_erc20_tab_title')
                        })
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketERC20Form, {
                    origin: origin,
                    onClose: onClose,
                    onNext: onNext,
                    onChange: onChange,
                    SelectMenuProps: SelectMenuProps
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.labelWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.img,
                            src: IconURLs.erc721Token
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('plugin_red_packet_erc721_tab_title')
                        })
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketERC721Form, {
                    onClose: onClose
                }),
                sx: {
                    p: 0
                },
                disabled: ![
                    types/* ChainId.Mainnet */.a_.Mainnet,
                    types/* ChainId.Matic */.a_.Matic,
                    types/* ChainId.BSC */.a_.BSC,
                    types/* ChainId.Conflux */.a_.Conflux
                ].includes(chainId)
            }, 
        ],
        state,
        classes
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.tabWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
            ...tabProps
        })
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(93854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Popper/Popper.js
var Popper = __webpack_require__(47205);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useFungibleTokenDetailed.ts
var useFungibleTokenDetailed = __webpack_require__(12777);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
;// CONCATENATED MODULE: ./src/plugins/ITO/assets/formatDate.ts

const dateTimeFormat = (date, includeTime = true)=>new Intl.DateTimeFormat(shared_base_src/* i18NextInstance.language */.BV.language, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        ...includeTime && {
            hour: 'numeric',
            minute: 'numeric'
        },
        hour12: false
    }).format(date)
;

// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/StyledLinearProgress.tsx
var StyledLinearProgress = __webpack_require__(21339);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/compact.js
var compact = __webpack_require__(27862);
;// CONCATENATED MODULE: ../web3-contracts/abis/HappyRedPacketV1.json
const HappyRedPacketV1_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"ifclaimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_claimed_list","outputs":[{"internalType":"address[]","name":"claimer_addrs","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint8","name":"_number","type":"uint8"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"a","type":"address"}],"name":"toBytes","outputs":[{"internalType":"bytes","name":"b","type":"bytes"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"token_type","type":"uint256"},{"internalType":"address","name":"token_address","type":"address"},{"internalType":"address","name":"sender_address","type":"address"},{"internalType":"address","name":"recipient_address","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer_token","outputs":[],"stateMutability":"payable","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/HappyRedPacketV2.json
const HappyRedPacketV2_namespaceObject = JSON.parse('[{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"CreationSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]');
;// CONCATENATED MODULE: ../web3-contracts/abis/HappyRedPacketV3.json
const HappyRedPacketV3_namespaceObject = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"},{"indexed":false,"internalType":"bool","name":"ifrandom","type":"bool"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"string","name":"password","type":"string"},{"internalType":"address payable","name":"recipient","type":"address"},{"internalType":"bytes32","name":"validation","type":"bytes32"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-contracts/abis/HappyRedPacketV4.json
var HappyRedPacketV4 = __webpack_require__(5261);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useRedPacketContract.ts





function useRedPacketContract(version) {
    const { HAPPY_RED_PACKET_ADDRESS_V1: addressV1 , HAPPY_RED_PACKET_ADDRESS_V2: addressV2 , HAPPY_RED_PACKET_ADDRESS_V3: addressV3 , HAPPY_RED_PACKET_ADDRESS_V4: addressV4 ,  } = (0,constants_constants/* useRedPacketConstants */.AA)();
    const v1 = (0,useContract/* useContract */.cq)(addressV1, HappyRedPacketV1_namespaceObject);
    const v2 = (0,useContract/* useContract */.cq)(addressV2, HappyRedPacketV2_namespaceObject);
    const v3 = (0,useContract/* useContract */.cq)(addressV3, HappyRedPacketV3_namespaceObject);
    const v4 = (0,useContract/* useContract */.cq)(addressV4, HappyRedPacketV4);
    const versions = [
        v1,
        v2,
        v3,
        v4
    ];
    return versions[version - 1];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useAvailability.ts



function useAvailability(version, from, id, redpacketChainId) {
    const redPacketContract = useRedPacketContract(version);
    const currentChainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id || redpacketChainId !== currentChainId) return null;
        if (!redPacketContract) return null;
        return redPacketContract.methods.check_availability(id).call({
            // check availability is ok w/o account
            from
        });
    }, [
        id,
        from,
        redpacketChainId,
        currentChainId,
        redPacketContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useAvailabilityComputed.ts




/**
 * Fetch the red packet info from the chain
 * @param payload
 */ function useAvailabilityComputed(account, payload) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const parsedChainId = (0,utils_chainDetailed/* getChainIdFromName */.np)(payload.network ?? '') ?? types/* ChainId.Mainnet */.a_.Mainnet;
    const asyncResult = useAvailability(payload.contract_version, account, payload.rpid, parsedChainId);
    const result = asyncResult;
    const availability = result.value;
    if (!availability) return {
        ...asyncResult,
        payload,
        computed: {
            canClaim: false,
            canRefund: false,
            listOfStatus: []
        }
    };
    const isEmpty = availability.balance === '0';
    const isExpired = availability.expired;
    const isClaimed = availability.claimed_amount ? availability.claimed_amount !== '0' : availability.ifclaimed;
    const isRefunded = isEmpty && Number.parseInt(availability.claimed, 10) < Number.parseInt(availability.total, 10);
    const isCreator = (0,address/* isSameAddress */.Wr)(payload?.sender.address ?? '', account);
    const isPasswordValid = Boolean(payload.password && payload.password !== 'PASSWORD INVALID');
    return {
        ...asyncResult,
        computed: {
            canFetch: parsedChainId === chainId,
            canClaim: !isExpired && !isEmpty && !isClaimed && parsedChainId === chainId && isPasswordValid,
            canRefund: isExpired && !isEmpty && isCreator && parsedChainId === chainId,
            canSend: !isEmpty && !isExpired && !isRefunded && isCreator && parsedChainId === chainId,
            isPasswordValid,
            listOfStatus: (0,compact/* default */.Z)([
                isClaimed ? RedPacketStatus.claimed : undefined,
                isEmpty ? RedPacketStatus.empty : undefined,
                isRefunded ? RedPacketStatus.refunded : undefined,
                isExpired ? RedPacketStatus.expired : undefined, 
            ])
        }
    };
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useRefundCallback.ts



function useRefundCallback(version, from, id) {
    const [refundState, setRefundState] = (0,useTransactionState/* useTransactionState */.p)();
    const redPacketContract = useRedPacketContract(version);
    const refundCallback = (0,react.useCallback)(async ()=>{
        if (!redPacketContract || !id) {
            setRefundState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setRefundState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from,
            gas: await redPacketContract.methods.refund(id).estimateGas({
                from
            }).catch((error)=>{
                setRefundState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // step 2: blocking
        return new Promise((resolve, reject)=>{
            redPacketContract.methods.refund(id).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setRefundState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setRefundState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setRefundState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        id,
        redPacketContract,
        from
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setRefundState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        refundState,
        refundCallback,
        resetCallback
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/intervalToDuration/index.js + 7 modules
var intervalToDuration = __webpack_require__(64893);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/nextDay/index.js + 1 modules
var nextDay = __webpack_require__(16162);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketInHistoryList.tsx





















const RedPacketInHistoryList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        primary: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        secondary: {
            fontSize: 12
        },
        message: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            [smallQuery]: {
                whiteSpace: 'normal'
            }
        },
        strong: {
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        span: {
            maxWidth: 350,
            display: 'inline-flex'
        },
        time: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        root: {
            borderRadius: 10,
            border: `solid 1px ${theme.palette.divider}`,
            marginBottom: theme.spacing(1.5),
            position: 'static !important',
            height: 'auto !important',
            padding: theme.spacing(2),
            [smallQuery]: {
                padding: theme.spacing(2, 1.5)
            }
        },
        box: {
            display: 'flex',
            width: '100%'
        },
        content: {
            transform: 'translateY(-4px)',
            width: '100%',
            paddingLeft: theme.spacing(2),
            [smallQuery]: {
                paddingLeft: theme.spacing(1.5),
                width: 'auto'
            }
        },
        section: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: theme.spacing(2),
            [smallQuery]: {
                flexWrap: 'wrap'
            }
        },
        div: {
            maxWidth: 350
        },
        icon: {
            width: 27,
            height: 27
        },
        title: {
            fontWeight: 500,
            fontSize: 16
        },
        info: {
            fontSize: 14,
            color: theme.palette.mode === 'light' ? '#5B7083' : '#c3cbd2',
            [smallQuery]: {
                fontSize: 13
            }
        },
        actionButton: {
            height: 26,
            background: theme.palette.mode === 'light' ? '#000' : '#fff',
            color: theme.palette.mode === 'light' ? '#fff' : '#000',
            minHeight: 'auto',
            [smallQuery]: {
                marginTop: theme.spacing(1)
            },
            '&:hover': {
                background: theme.palette.mode === 'light' ? '#000' : '#fff',
                color: theme.palette.mode === 'light' ? '#fff' : '#000',
                opacity: 0.8
            }
        },
        footer: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: theme.spacing(2)
        },
        footerInfo: {
            fontSize: 15,
            color: theme.palette.mode === 'light' ? '#5B7083' : '#c3cbd2',
            '& strong': {
                color: theme.palette.text.primary
            }
        },
        popper: {
            overflow: 'visible',
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(15, 20, 25, 1)' : '#fff',
            transform: 'translate(134px, 66px)',
            borderRadius: 8,
            width: 328,
            padding: 10
        },
        arrow: {
            position: 'absolute',
            top: -12,
            right: 40,
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: `6px solid ${theme.palette.mode === 'light' ? 'rgba(15, 20, 25, 1)' : '#fff'}`,
            transform: 'translateY(6px)'
        },
        popperText: {
            cursor: 'default',
            color: theme.palette.mode === 'light' ? '#fff' : 'rgba(15, 20, 25, 1)',
            fontSize: 12
        },
        disabledButton: {
            color: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
            boxShadow: 'none',
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
            cursor: 'default',
            '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
                color: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)'
            }
        },
        fullWidthBox: {
            width: '100%'
        }
    };
});
function RedPacketInHistoryList(props) {
    const account = (0,useAccount/* useAccount */.m)();
    const { history , onSelect  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RedPacketInHistoryList_useStyles();
    const isSmall = (0,useMediaQuery/* default */.Z)((theme)=>theme.breakpoints.down('sm')
    );
    const { value: availability , computed: { canRefund , canSend , listOfStatus , isPasswordValid  } , retry: revalidateAvailability ,  } = useAvailabilityComputed(account, history);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
    const [refundState, refundCallback, resetRefundCallback] = useRefundCallback(history.contract_version, account, history.rpid);
    const tokenAddress = history.token?.address ?? history.token_address;
    const { value: tokenDetailed  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)((0,address/* isSameAddress */.Wr)(NATIVE_TOKEN_ADDRESS, tokenAddress) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20, tokenAddress ?? '');
    const historyToken = history.token ?? tokenDetailed;
    // #region remote controlled transaction dialog
    const { setDialog: setTransactionDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated);
    (0,react.useEffect)(()=>{
        if (refundState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN || !availability) return;
        if (refundState.type === types/* TransactionStateType.HASH */.n$.HASH) {
            setTransactionDialog({
                open: true,
                state: refundState,
                summary: availability ? `Refunding lucky drop for ${(0,formatter/* formatBalance */.az)(new (bignumber_default())(availability.balance), historyToken?.decimals ?? 0, historyToken?.decimals ?? 0)} ${historyToken?.symbol}` : ''
            });
        } else if (refundState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) {
            resetRefundCallback();
            revalidateAvailability();
        }
    }, [
        refundState /* update tx dialog only if state changed */ 
    ]);
    // #endregion
    const onSendOrRefund = (0,react.useCallback)(async ()=>{
        if (canRefund) await refundCallback();
        if (canSend) onSelect(removeUselessSendParams({
            ...history,
            token: historyToken
        }));
    }, [
        onSelect,
        refundCallback,
        canRefund,
        canSend,
        history
    ]);
    // #region password lost tips
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    const openPopper = Boolean(anchorEl);
    // #endregion
    // #region refund time
    const refundDuration = canSend && !isPasswordValid ? (0,intervalToDuration/* default */.Z)({
        start: Date.now(),
        end: (0,nextDay/* default */.Z)(history.creation_time, 1)
    }) : null;
    const formatRefundDuration = `${refundDuration?.hours}h ${refundDuration?.minutes}m`;
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.box,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                    classes: {
                        icon: classes.icon
                    },
                    address: historyToken?.address ?? '',
                    name: historyToken?.name,
                    logoURI: historyToken?.logoURI
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: classes.div,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                            className: classes.fullWidthBox,
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                variant: "body1",
                                                className: classnames_default()(classes.title, classes.message),
                                                children: history.sender.message === '' ? t('plugin_red_packet_best_wishes') : history.sender.message
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.info, classes.message),
                                            children: t('plugin_red_packet_history_duration', {
                                                startTime: dateTimeFormat(new Date(history.creation_time)),
                                                endTime: dateTimeFormat(new Date(history.creation_time + history.duration), false)
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.info, classes.message),
                                            children: t('plugin_red_packet_history_total_amount', {
                                                amount: (0,formatter/* formatBalance */.az)(history.total, historyToken?.decimals, 6),
                                                symbol: historyToken?.symbol
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.info, classes.message),
                                            children: t('plugin_red_packet_history_split_mode', {
                                                mode: history.is_random ? t('plugin_red_packet_random') : t('plugin_red_packet_average')
                                            })
                                        })
                                    ]
                                }),
                                canRefund || canSend || listOfStatus.includes(RedPacketStatus.empty) || refundState.type === types/* TransactionStateType.HASH */.n$.HASH ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                            fullWidth: isSmall,
                                            onClick: canSend && !isPasswordValid ? ()=>undefined
                                             : onSendOrRefund,
                                            onMouseEnter: (event)=>{
                                                canSend && !isPasswordValid ? setAnchorEl(event.currentTarget) : undefined;
                                            },
                                            onMouseLeave: (_event)=>{
                                                canSend && !isPasswordValid ? setAnchorEl(null) : undefined;
                                            },
                                            disabled: listOfStatus.includes(RedPacketStatus.empty) || refundState.type === types/* TransactionStateType.HASH */.n$.HASH,
                                            className: classnames_default()(classes.actionButton, canSend && !isPasswordValid ? classes.disabledButton : ''),
                                            variant: "contained",
                                            size: "large",
                                            children: canSend ? t('plugin_red_packet_history_send') : refundState.type === types/* TransactionStateType.HASH */.n$.HASH ? t('plugin_red_packet_refunding') : listOfStatus.includes(RedPacketStatus.empty) ? t('plugin_red_packet_empty') : t('plugin_red_packet_refund')
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Popper/* default */.Z, {
                                            className: classes.popper,
                                            id: "popper",
                                            open: openPopper,
                                            anchorEl: anchorEl,
                                            transition: true,
                                            disablePortal: true,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                                    className: classes.popperText,
                                                    children: t('plugin_red_packet_data_broken', {
                                                        duration: formatRefundDuration
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                    className: classes.arrow
                                                })
                                            ]
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLinearProgress/* StyledLinearProgress */.B, {
                            variant: "determinate",
                            value: 100 * (1 - Number(history.total_remaining) / Number(history.total))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.footer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    className: classes.footerInfo,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_red_packet_history_claimed",
                                        components: {
                                            strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {})
                                        },
                                        values: {
                                            claimedShares: history.claimers?.length ?? 0,
                                            shares: history.shares
                                        }
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    className: classes.footerInfo,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                        i18nKey: "plugin_red_packet_history_total_claimed_amount",
                                        components: {
                                            strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {
                                                className: classes.strong
                                            }),
                                            span: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: classes.span
                                            })
                                        },
                                        values: {
                                            amount: (0,formatter/* formatBalance */.az)(history.total, historyToken?.decimals, 6),
                                            claimedAmount: (0,formatter/* formatBalance */.az)(new (bignumber_default())(history.total).minus(history?.total_remaining ?? 0), historyToken?.decimals, 6),
                                            symbol: historyToken?.symbol
                                        }
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
function removeUselessSendParams(payload) {
    return {
        ...(0,omit/* default */.Z)(payload, [
            'block_number',
            'claimers'
        ]),
        token: (0,omit/* default */.Z)(payload.token, [
            'logoURI'
        ])
    };
}

// EXTERNAL MODULE: ../web3-shared/evm/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(93328);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useRedPacketHistory.ts



function useRedPacketHistory(address, chainId) {
    const { value: blockNumber = 0  } = (0,useBlockNumber/* useBlockNumber */.O)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!blockNumber) return [];
        return messages/* RedPacketRPC.getRedPacketHistory */.T.getRedPacketHistory(address, chainId, blockNumber);
    }, [
        address,
        chainId,
        blockNumber
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketHistoryList.tsx








const RedPacketHistoryList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            padding: '0 12px',
            boxSizing: 'border-box',
            height: '100%',
            flexDirection: 'column',
            margin: '0 auto',
            overflow: 'auto',
            [smallQuery]: {
                padding: 0
            },
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        placeholder: {
            textAlign: 'center'
        }
    };
});
function RedPacketHistoryList(props) {
    const { onSelect  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RedPacketHistoryList_useStyles();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { value: histories , loading , retry  } = useRedPacketHistory(account, chainId);
    (0,react.useEffect)(()=>{
        retry();
    }, [
        chainId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: t('loading')
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: !histories || histories.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: t('no_data')
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
            children: histories.map((history)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketInHistoryList, {
                        history: history,
                        onSelect: onSelect
                    })
                }, history.rpid)
            )
        })
    });
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useNftRedPacketHistory.ts


function useNftRedPacketHistory(address, chainId) {
    const [allHistories, setAllHistories] = (0,react.useState)([]);
    const pageRef = (0,react.useRef)(1);
    const [loading, setLoading] = (0,react.useState)(false);
    const getHistories = (0,react.useCallback)(async ()=>{
        const histories = await messages/* RedPacketRPC.getNftRedPacketHistory */.T.getNftRedPacketHistory(address, chainId, pageRef.current);
        setLoading(false);
        if (histories.length) {
            pageRef.current += 1;
        }
        setAllHistories((oldList)=>[
                ...oldList,
                ...histories
            ]
        );
    }, [
        address,
        chainId
    ]);
    (0,react.useEffect)(()=>{
        setLoading(true);
        pageRef.current = 1;
        setAllHistories([]);
        getHistories();
    }, [
        address,
        chainId
    ]);
    return {
        histories: allHistories,
        fetchMore: getHistories,
        loading
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/fill.js + 2 modules
var fill = __webpack_require__(76457);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts + 1 modules
var Wallet_src = __webpack_require__(19841);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(75569);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useAvailabilityNftRedPacket.ts



function useAvailabilityNftRedPacket(id, from) {
    const nftRedPacketContract = useNftRedPacketContract();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!id || !nftRedPacketContract) return null;
        const availability = await nftRedPacketContract.methods.check_availability(id).call({
            // check availability is ok w/o account
            from
        });
        const result = await nftRedPacketContract.methods.check_erc721_remain_ids(id).call({
            // check availability is ok w/o account
            from
        });
        const isClaimed = availability.claimed_id !== '0';
        const totalAmount = result.erc721_token_ids.length;
        const bits = new (bignumber_default())(result.bit_status).toString(2).split('');
        const claimedAmount = bits.reduce((acc, cur)=>{
            if (cur === '1') return acc + 1;
            return acc;
        }, 0);
        const isClaimedAll = totalAmount === claimedAmount;
        const isCompleted = isClaimedAll && !isClaimed;
        const isEnd = isCompleted || availability.expired;
        const bitStatusList = bits.reverse().map((bit)=>bit === '1'
        );
        return {
            isClaimed,
            totalAmount,
            claimedAmount,
            remaining: totalAmount - claimedAmount,
            isClaimedAll,
            isCompleted,
            isEnd,
            bitStatusList,
            ...availability
        };
    }, [
        id,
        from,
        nftRedPacketContract
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useNftAvailabilityComputed.ts





/**
 * Fetch the red packet info from the chain
 * @param payload
 */ function useNftAvailabilityComputed(account, payload) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    const asyncResult = useAvailabilityNftRedPacket(payload?.rpid, account);
    const result = asyncResult;
    const availability = result.value;
    return (0,react.useMemo)(()=>{
        if (!availability) {
            return {
                ...asyncResult,
                payload,
                computed: {
                    canClaim: false,
                    listOfStatus: []
                }
            };
        }
        const isEmpty = availability.remaining === 0;
        const isExpired = availability.expired;
        const isClaimed = availability.isClaimed;
        const isCreator = (0,address/* isSameAddress */.Wr)(payload?.sender.address ?? '', account);
        const parsedChainId = (0,utils_chainDetailed/* getChainIdFromName */.np)(payload.network ?? '') ?? types/* ChainId.Mainnet */.a_.Mainnet;
        const isSameChain = parsedChainId === chainId;
        const isPasswordValid = !!payload.password && payload.password !== 'PASSWORD INVALID';
        const isClaimable = !isExpired && !isEmpty && !isClaimed && isSameChain;
        const isSendable = !isEmpty && !isExpired && isCreator && isSameChain;
        return {
            ...asyncResult,
            computed: {
                canFetch: isSameChain,
                canClaim: isClaimable && isPasswordValid,
                canSend: isSendable,
                isPasswordValid: isPasswordValid,
                listOfStatus: (0,compact/* default */.Z)([
                    isClaimed ? RedPacketStatus.claimed : undefined,
                    isEmpty ? RedPacketStatus.empty : undefined,
                    isExpired ? RedPacketStatus.expired : undefined, 
                ])
            }
        };
    }, [
        asyncResult,
        availability,
        chainId
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/NftList.tsx








const NftList_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        list: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridGap: theme.spacing(1),
            [smallQuery]: {
                gridTemplateColumns: '1fr 1fr',
                gridGap: 0,
                padding: 0
            }
        },
        listItem: {
            padding: theme.spacing(1)
        },
        nft: {
            position: 'relative',
            display: 'flex',
            width: 120,
            height: 185,
            flexDirection: 'column',
            backgroundColor: theme.palette.background.paper,
            margin: '0 auto',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.04)',
            [smallQuery]: {
                width: 90,
                height: 140
            }
        },
        loading: {
            boxShadow: 'none'
        },
        claimedBadge: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 36,
            margin: 'auto',
            height: 70,
            width: 70,
            borderRadius: '100%',
            backgroundColor: 'rgba(255, 95, 95, 0.4)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 12,
            pointerEvents: 'none',
            [smallQuery]: {
                height: 60,
                width: 60
            }
        },
        media: {
            width: 120,
            height: 160,
            objectFit: 'cover',
            [smallQuery]: {
                width: 90,
                height: 120
            }
        },
        name: {
            fontSize: 12,
            height: 18,
            textOverflow: 'ellipsis',
            textAlign: 'center',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            padding: '2px 2px 6px',
            color: entry/* MaskColorVar.textSecondary */.ZN.textSecondary
        },
        loadingFailImage: {
            minHeight: '0px !important',
            maxWidth: 'none',
            transform: 'translateY(-10px)',
            width: 64,
            height: 64
        }
    };
});
const NftItem = ({ contract , tokenId , className , claimed , renderOrder , ...rest })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = NftList_useStyles();
    const [name, setName] = (0,react.useState)((0,formatter/* formatNFT_TokenId */.uu)(tokenId, 2));
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classnames_default()(className, classes.nft),
        ...rest,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                classes: {
                    loadingFailImage: classes.loadingFailImage
                },
                tokenId: tokenId,
                renderOrder: renderOrder,
                contractAddress: contract.address,
                chainId: contract.chainId,
                setERC721TokenName: setName
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.name,
                children: name
            }),
            claimed && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.claimedBadge,
                children: t('plugin_red_packet_claimed')
            })
        ]
    });
};
const NftList = ({ contract , statusList , tokenIds , className , ...rest })=>{
    const { classes  } = NftList_useStyles();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
        className: classnames_default()(className, classes.list),
        ...rest,
        children: tokenIds.map((tokenId, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
                className: classes.listItem,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NftItem, {
                    contract: contract,
                    claimed: statusList[index],
                    tokenId: tokenId,
                    renderOrder: index
                })
            }, tokenId)
        )
    });
};

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/NftRedPacketHistoryItem.tsx

















const NftRedPacketHistoryItem_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            borderRadius: 10,
            border: `solid 1px ${theme.palette.divider}`,
            marginBottom: theme.spacing(1.5),
            position: 'static !important',
            height: 'auto !important',
            padding: theme.spacing(2),
            backgroundColor: theme.palette.background.default,
            [smallQuery]: {
                padding: theme.spacing(2, 1.5)
            }
        },
        primary: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        secondary: {
            fontSize: 12
        },
        message: {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            [smallQuery]: {
                whiteSpace: 'normal'
            }
        },
        strong: {
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        span: {
            maxWidth: 350,
            display: 'inline-flex'
        },
        time: {
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        box: {
            display: 'flex',
            width: '100%'
        },
        content: {
            transform: 'translateY(-4px)',
            width: '100%',
            paddingLeft: theme.spacing(1)
        },
        section: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: theme.spacing(2),
            [smallQuery]: {
                marginBottom: 0
            }
        },
        icon: {
            width: 27,
            height: 27
        },
        title: {
            whiteSpace: 'break-spaces',
            fontWeight: 500,
            fontSize: 16
        },
        info: {
            fontSize: 14,
            color: theme.palette.mode === 'light' ? '#5B7083' : '#c3cbd2',
            [smallQuery]: {
                fontSize: 13
            }
        },
        nftList: {
            width: 390,
            [smallQuery]: {
                width: '100%'
            }
        },
        actionButton: {
            height: 26,
            minHeight: 'auto',
            position: 'relative'
        },
        footer: {
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginTop: theme.spacing(2),
            [smallQuery]: {
                marginTop: theme.spacing(1)
            }
        },
        footerInfo: {
            fontSize: 15,
            color: theme.palette.mode === 'light' ? '#5B7083' : '#c3cbd2',
            '& strong': {
                color: theme.palette.text.primary
            }
        },
        disabledButton: {
            color: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
            boxShadow: 'none',
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
            cursor: 'default',
            '&:hover': {
                backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
                color: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)'
            }
        },
        ellipsis: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: 360
        }
    };
});
const NftRedPacketHistoryItem = /*#__PURE__*/ (0,react.memo)(({ history , onSend , onShowPopover , onHidePopover  })=>{
    const account = (0,useAccount/* useAccount */.m)();
    const { t  } = (0,i18n_next_ui/* useI18N */.M)();
    const { classes  } = NftRedPacketHistoryItem_useStyles();
    const { computed: { canSend , isPasswordValid  } ,  } = useNftAvailabilityComputed(account, history.payload);
    const { value: contractDetailed  } = (0,useERC721ContractDetailed/* useERC721ContractDetailed */.P)(history.token_contract.address);
    const { closeDialog: closeWalletStatusDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.walletStatusDialogUpdated */.R$.events.walletStatusDialogUpdated);
    const handleSend = (0,react.useCallback)(()=>{
        if (!(canSend && contractDetailed && isPasswordValid)) return;
        onSend(history, contractDetailed);
        closeWalletStatusDialog();
    }, [
        onSend,
        closeWalletStatusDialog,
        canSend,
        history,
        contractDetailed,
        isPasswordValid
    ]);
    const { value: redpacketStatus  } = useAvailabilityNftRedPacket(history.rpid, account);
    const bitStatusList = redpacketStatus ? redpacketStatus.bitStatusList : (0,fill/* default */.Z)(Array(history.token_ids.length), false);
    const handleMouseEnter = (event)=>{
        if (canSend && !isPasswordValid) {
            handleShowPopover(event.currentTarget);
        }
    };
    const handleShowPopover = (anchor)=>{
        onShowPopover(anchor, t('plugin_nft_red_packet_data_broken'));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItem/* default */.ZP, {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.box,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* TokenIcon */.T1, {
                    classes: {
                        icon: classes.icon
                    },
                    address: contractDetailed?.address ?? '',
                    name: contractDetailed?.name ?? '-',
                    logoURI: contractDetailed?.iconURL ?? new URL(/* asset import */ __webpack_require__(33265), __webpack_require__.b).toString()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.content,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.section,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.title, classes.message, classes.ellipsis),
                                            children: history.message === '' ? t('plugin_red_packet_best_wishes') : history.message
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            variant: "body1",
                                            className: classnames_default()(classes.info, classes.message),
                                            children: t('plugin_red_packet_history_duration', {
                                                startTime: dateTimeFormat(new Date(history.creation_time)),
                                                endTime: dateTimeFormat(new Date(history.creation_time + history.duration), false)
                                            })
                                        })
                                    ]
                                }),
                                canSend ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                    onMouseEnter: handleMouseEnter,
                                    onMouseLeave: onHidePopover,
                                    onClick: handleSend,
                                    className: classnames_default()(classes.actionButton, isPasswordValid ? '' : classes.disabledButton),
                                    variant: "contained",
                                    size: "large",
                                    children: t('plugin_red_packet_history_send')
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                            className: classes.nftList,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NftList, {
                                contract: {
                                    address: history.token_contract.address,
                                    chainId: history.token_contract.chain_id
                                },
                                statusList: bitStatusList,
                                tokenIds: history.token_ids
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                            className: classes.footer,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                className: classes.footerInfo,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Trans/* Trans */.c, {
                                    i18nKey: "plugin_red_packet_history_claimed",
                                    components: {
                                        strong: /*#__PURE__*/ (0,jsx_runtime.jsx)("strong", {})
                                    },
                                    values: {
                                        claimedShares: history.claimers.length,
                                        shares: history.shares
                                    }
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/NftRedPacketHistoryList.tsx










const NftRedPacketHistoryList_useStyles = (0,entry/* makeStyles */.ZL)()((theme, _, refs)=>{
    const smallQuery = `@media (max-width: ${theme.breakpoints.values.sm}px)`;
    return {
        root: {
            display: 'flex',
            width: 568,
            padding: '0 12px',
            boxSizing: 'border-box',
            height: '100%',
            flexDirection: 'column',
            margin: '0 auto',
            overflow: 'auto',
            [smallQuery]: {
                width: '100%',
                padding: 0
            },
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        placeholder: {
            height: '100%',
            display: 'flex',
            width: 360,
            margin: '0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
        },
        popper: {
            overflow: 'visible',
            padding: 6
        },
        popperContent: {
            position: 'relative',
            overflow: 'visible',
            backgroundColor: theme.palette.mode === 'light' ? 'rgba(15, 20, 25, 1)' : '#fff',
            borderRadius: 8,
            padding: 10
        },
        arrow: {
            position: 'absolute',
            bottom: 0,
            right: 74,
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: `6px solid ${theme.palette.mode === 'light' ? 'rgba(15, 20, 25, 1)' : '#fff'}`,
            transform: 'translate(-50%, 6px)',
            [`&.${refs.atBottom}`]: {
                bottom: 'auto',
                top: 0,
                transform: 'translate(-50%, -6px) rotate(180deg)'
            }
        },
        atBottom: {},
        popperText: {
            cursor: 'default',
            color: theme.palette.mode === 'light' ? '#fff' : 'rgba(15, 20, 25, 1)',
            fontSize: 12
        }
    };
});
function NftRedPacketHistoryList({ onSend  }) {
    const { classes  } = NftRedPacketHistoryList_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const { histories , fetchMore , loading  } = useNftRedPacketHistory(account, chainId);
    const containerRef = (0,react.useRef)(null);
    const [popperText, setPopperText] = (0,react.useState)('');
    const [anchorEl, setAnchorEl] = (0,react.useState)(null);
    (0,src/* useScrollBottomEvent */.S8)(containerRef, fetchMore);
    const handleShowPopover = (anchor, text)=>{
        setAnchorEl(anchor);
        setPopperText(text);
    };
    const handleHidePopover = ()=>{
        setAnchorEl(null);
    };
    if (chainId === types/* ChainId.BSC */.a_.BSC) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: t('plugin_chain_not_supported', {
                chain: 'Binance Smart Chain'
            })
        });
    }
    if (loading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: t('loading')
        });
    }
    if (!histories?.length) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: t('plugin_red_packet_nft_no_history')
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                ref: containerRef,
                className: classes.root,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                    children: histories.map((history)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(NftRedPacketHistoryItem, {
                            history: history,
                            onSend: onSend,
                            onShowPopover: handleShowPopover,
                            onHidePopover: handleHidePopover
                        }, history.rpid)
                    )
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Popper/* default */.Z, {
                className: classes.popper,
                id: "data-damaged",
                open: !!anchorEl,
                placement: "top",
                anchorEl: anchorEl,
                disablePortal: true,
                children: ({ placement  })=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.popperContent,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.popperText,
                                children: popperText
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classnames_default()(classes.arrow, placement === 'bottom' ? classes.atBottom : '')
                            })
                        ]
                    });
                }
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketPast.tsx












var RedPacketPast_RpTypeTabs;
(function(RpTypeTabs) {
    RpTypeTabs[RpTypeTabs["ERC20"] = 0] = "ERC20";
    RpTypeTabs[RpTypeTabs["ERC721"] = 1] = "ERC721";
})(RedPacketPast_RpTypeTabs || (RedPacketPast_RpTypeTabs = {}));
const RedPacketPast_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        tab: {
            height: 36,
            minHeight: 36,
            fontWeight: 300
        },
        tabs: {
            height: 36,
            minHeight: 36,
            margin: '0 auto',
            borderRadius: 4,
            backgroundColor: theme.palette.background.default,
            '& .Mui-selected': {
                color: theme.palette.primary.contrastText,
                backgroundColor: theme.palette.primary.main
            }
        },
        indicator: {
            display: 'none'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        },
        img: {
            width: 20,
            marginRight: 4
        },
        labelWrapper: {
            display: 'flex'
        },
        tabWrapper: {
            padding: theme.spacing(0, 2, 0, 2)
        }
    })
);
function RedPacketPast({ onSelect , onClose  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RedPacketPast_useStyles();
    const state = (0,react.useState)(RedPacketPast_RpTypeTabs.ERC20);
    const chainId = (0,useChainId/* useChainId */.xx)();
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const senderName = (currentIdentity?.identifier.userId ?? currentIdentity?.linkedPersona?.nickname) ?? 'Unknown User';
    const { attachMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    const handleSendNftRedpacket = (0,react.useCallback)((history, contractDetailed)=>{
        const { rpid , txid , duration , message , payload  } = history;
        attachMetadata(constants/* RedPacketNftMetaKey */.HA, {
            id: rpid,
            txid,
            duration: duration,
            message: message,
            senderName,
            contractName: contractDetailed.name,
            contractAddress: contractDetailed.address,
            contractTokenURI: contractDetailed.iconURL ?? '',
            privateKey: payload.password,
            chainId: history.chain_id
        });
        onClose?.();
    }, [
        senderName,
        onClose
    ]);
    const tabProps = {
        tabs: [
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.labelWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.img,
                            src: IconURLs.erc20Token
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('plugin_red_packet_erc20_tab_title')
                        })
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketHistoryList, {
                    onSelect: onSelect
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.labelWrapper,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            className: classes.img,
                            src: IconURLs.erc721Token
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t('plugin_red_packet_erc721_tab_title')
                        })
                    ]
                }),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NftRedPacketHistoryList, {
                    onSend: handleSendNftRedpacket
                }),
                sx: {
                    p: 0
                },
                disabled: ![
                    types/* ChainId.Mainnet */.a_.Mainnet,
                    types/* ChainId.Matic */.a_.Matic
                ].includes(chainId)
            }, 
        ],
        state,
        classes
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.tabWrapper,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
            height: 512,
            ...tabProps
        })
    });
}

// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(5027);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useNetworkType.ts
var useNetworkType = __webpack_require__(96151);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useCreateCallback.tsx






function checkParams(paramsObj, setCreateState) {
    if ((0,base_src/* isLessThan */.FI)(paramsObj.total, paramsObj.shares)) {
        setCreateState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('At least [number of lucky drops] tokens to your lucky drop.')
        });
        return false;
    }
    if (paramsObj.shares <= 0) {
        setCreateState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('At least 1 person should be able to claim the lucky drop.')
        });
        return false;
    }
    if (paramsObj.tokenType !== types/* EthereumTokenType.Native */.Dr.Native && paramsObj.tokenType !== types/* EthereumTokenType.ERC20 */.Dr.ERC20) {
        setCreateState?.({
            type: types/* TransactionStateType.FAILED */.n$.FAILED,
            error: new Error('Token not supported')
        });
        return false;
    }
    return true;
}
function useCreateParams(redPacketSettings, version, publicKey) {
    const redPacketContract = useRedPacketContract(version);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
    const account = (0,useAccount/* useAccount */.m)();
    return (0,react.useCallback)(async ()=>{
        if (!redPacketSettings || !redPacketContract) return null;
        const { duration , isRandom , message , name , shares , total , token  } = redPacketSettings;
        const seed = Math.random().toString();
        const tokenType = token.type === types/* EthereumTokenType.Native */.Dr.Native ? 0 : 1;
        const tokenAddress = token.type === types/* EthereumTokenType.Native */.Dr.Native ? NATIVE_TOKEN_ADDRESS : token.address;
        if (!tokenAddress) {
            return null;
        }
        const paramsObj = {
            publicKey,
            shares,
            isRandom,
            duration,
            seed: lib_default().sha3(seed),
            message,
            name,
            tokenType,
            tokenAddress,
            total,
            token
        };
        if (!checkParams(paramsObj)) {
            return null;
        }
        const params = Object.values((0,omit/* default */.Z)(paramsObj, [
            'token'
        ]));
        let gasError = null;
        const value = (0,base_src/* toFixed */.FH)(paramsObj.token?.type === types/* EthereumTokenType.Native */.Dr.Native ? total : 0);
        const gas = await redPacketContract.methods.create_red_packet(...params).estimateGas({
            from: account,
            value
        }).catch((error)=>{
            gasError = error;
        });
        return {
            gas: gas,
            params,
            paramsObj,
            gasError
        };
    }, [
        redPacketSettings,
        account,
        redPacketContract
    ]);
}
function useCreateCallback(redPacketSettings, version, publicKey) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const [createState, setCreateState] = (0,useTransactionState/* useTransactionState */.p)();
    const redPacketContract = useRedPacketContract(version);
    const [createSettings, setCreateSettings] = (0,react.useState)(null);
    const getCreateParams = useCreateParams(redPacketSettings, version, publicKey);
    const transactionHashRef = (0,react.useRef)();
    const createCallback = (0,react.useCallback)(async ()=>{
        const { token  } = redPacketSettings;
        const createParams = await getCreateParams();
        if (!token || !redPacketContract || !createParams) {
            setCreateState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        const { gas , params , paramsObj , gasError  } = createParams;
        if (gasError) {
            setCreateState({
                type: types/* TransactionStateType.FAILED */.n$.FAILED,
                error: gasError
            });
            return;
        }
        if (!checkParams(paramsObj, setCreateState)) return;
        setCreateSettings(redPacketSettings);
        // pre-step: start waiting for provider to confirm tx
        setCreateState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const value = (0,base_src/* toFixed */.FH)(token.type === types/* EthereumTokenType.Native */.Dr.Native ? paramsObj.total : 0);
        const config = {
            from: account,
            value,
            gas
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            redPacketContract.methods.create_red_packet(...params).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setCreateState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
                transactionHashRef.current = hash;
            }).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setCreateState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                transactionHashRef.current = receipt.transactionHash;
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setCreateState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                transactionHashRef.current = receipt.transactionHash;
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setCreateState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        account,
        redPacketContract,
        redPacketSettings,
        chainId,
        getCreateParams
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setCreateState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        createSettings,
        createState,
        createCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketConfirmDialog.tsx











const RedPacketConfirmDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        },
        grid: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(2)
        },
        gridWrapper: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
        },
        hit: {
            fontSize: 14,
            fontWeight: 300,
            borderRadius: 8,
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            padding: theme.spacing(1.2),
            marginBottom: theme.spacing(1)
        },
        token: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        data: {
            textAlign: 'right',
            color: theme.palette.text.primary
        },
        label: {
            textAlign: 'left',
            color: theme.palette.text.secondary
        },
        button: {
            padding: theme.spacing(2)
        },
        gasEstimation: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            cursor: 'pointer',
            '& > p': {
                marginRight: 5,
                color: theme.palette.mode === 'light' ? '#7B8192' : '#6F767C'
            }
        },
        ellipsis: {
            textOverflow: 'ellipsis',
            overflow: 'hidden'
        }
    })
);
function RedPacketConfirmDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { onBack , settings , onCreate , onClose  } = props;
    const { classes  } = RedPacketConfirmDialog_useStyles();
    const chainId = (0,useChainId/* useChainId */.xx)();
    (0,react.useEffect)(()=>{
        if (settings?.token?.chainId !== chainId) onClose();
    }, [
        chainId,
        onClose
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        className: classnames_default()(classes.grid, classes.gridWrapper),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "h4",
                    color: "textPrimary",
                    align: "center",
                    className: classes.ellipsis,
                    children: settings?.message
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_token')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    className: classes.token,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: settings?.token?.symbol
                        }),
                        (0,address/* isNativeTokenAddress */.qw)(settings?.token) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            color: "textPrimary",
                            className: classes.link,
                            href: (0,pipes/* resolveTokenLinkOnExplorer */.yW)(settings?.token),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: stop,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                fontSize: "small"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_split_mode')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    children: settings?.isRandom ? t('plugin_red_packet_random') : t('plugin_red_packet_average')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_shares')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    children: settings?.shares
                })
            }),
            settings?.isRandom ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textSecondary",
                            children: t('plugin_red_packet_amount_per_share')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            color: "textPrimary",
                            align: "right",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                                value: new (bignumber_default())(settings?.total ?? 0).div(settings?.shares ?? 1),
                                decimals: settings?.token?.decimals,
                                symbol: settings?.token?.symbol,
                                formatter: formatter/* formatBalance */.az
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textSecondary",
                    children: t('plugin_red_packet_amount_total')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body1",
                    color: "textPrimary",
                    align: "right",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* FormattedBalance */.BV, {
                        value: settings?.total,
                        decimals: settings?.token?.decimals,
                        symbol: settings?.token?.symbol,
                        formatter: formatter/* formatBalance */.az
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 12,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                    className: classes.hit,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        align: "center",
                        style: {
                            fontSize: 14,
                            lineHeight: '20px'
                        },
                        children: t('plugin_red_packet_hint')
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    size: "large",
                    fullWidth: true,
                    onClick: onBack,
                    children: t('plugin_red_packet_back')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 6,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    size: "large",
                    fullWidth: true,
                    onClick: onCreate,
                    children: t('plugin_red_packet_send_symbol', {
                        amount: (0,formatter/* formatBalance */.az)(settings?.total, settings?.token?.decimals ?? 0),
                        symbol: settings?.token?.symbol
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketDialog.tsx





















const RedPacketDialog_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        content: {
            position: 'relative',
            paddingTop: 50
        },
        tabs: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            padding: 0
        },
        tabPaper: {
            position: 'sticky',
            top: 0,
            zIndex: 5000
        },
        indicator: {
            display: 'none'
        },
        tab: {
            maxWidth: 120
        },
        focusTab: {
            borderBottom: `2px solid ${theme.palette.primary.main}`
        },
        flexContainer: {
            justifyContent: 'space-around'
        }
    })
);
var CreateRedPacketPageStep;
(function(CreateRedPacketPageStep) {
    CreateRedPacketPageStep["NewRedPacketPage"] = 'new';
    CreateRedPacketPageStep["ConfirmPage"] = 'confirm';
})(CreateRedPacketPageStep || (CreateRedPacketPageStep = {}));
function RedPacketDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const account = (0,useAccount/* useAccount */.m)();
    const { classes  } = RedPacketDialog_useStyles();
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,constants_constants/* useRedPacketConstants */.AA)();
    const { attachMetadata , dropMetadata  } = (0,entry_content_script/* useCompositionContext */.Cp)();
    const state = (0,react.useState)(DialogTabs.create);
    const networkType = (0,useNetworkType/* useNetworkType */.b)();
    const contract_version = 4;
    const [settings, setSettings] = (0,react.useState)();
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const onClose = (0,react.useCallback)(()=>{
        setStep(CreateRedPacketPageStep.NewRedPacketPage);
        setSettings(undefined);
        const [, setValue] = state;
        setValue(DialogTabs.create);
        props.onClose();
    }, [
        props,
        state
    ]);
    const { address: publicKey , privateKey  } = (0,react.useMemo)(()=>web3.eth.accounts.create()
    , []);
    const currentIdentity = (0,useActivatedUI/* useCurrentIdentity */.Ud)();
    const senderName = currentIdentity?.identifier.userId ?? currentIdentity?.linkedPersona?.nickname;
    const { closeDialog: closeWalletStatusDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    const onCreateOrSelect = (0,react.useCallback)(async (payload)=>{
        if (payload.password === '') {
            if (payload.contract_version === 1) {
                alert('Unable to share a lucky drop without a password. But you can still withdraw the lucky drop.');
                payload.password = prompt('Please enter the password of the lucky drop:', '') ?? '';
            } else if (payload.contract_version > 1 && payload.contract_version < 4) {
                // just sign out the password if it is lost.
                payload.password = await service/* default.Ethereum.personalSign */.ZP.Ethereum.personalSign(lib_default().sha3(payload.sender.message) ?? '', account);
                payload.password = payload.password.slice(2);
            }
        }
        if (payload) {
            senderName && (payload.sender.name = senderName);
            attachMetadata(constants/* RedPacketMetaKey */.Vr, payload);
        } else dropMetadata(constants/* RedPacketMetaKey */.Vr);
        onClose();
        closeWalletStatusDialog();
    }, [
        onClose,
        chainId,
        senderName
    ]);
    // #region blocking
    // password should remain the same rather than change each time when createState change,
    //  otherwise password in database would be different from creating red-packet.
    const [createSettings, createState, createCallback, resetCreateCallback] = useCreateCallback(settings, contract_version, publicKey);
    // #endregion
    // assemble JSON payload
    const payload1 = (0,react.useRef)({
        network: (0,utils_chainDetailed/* getChainName */.qz)(chainId)
    });
    (0,react.useEffect)(()=>{
        if (createState.type !== types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        const contractAddress = HAPPY_RED_PACKET_ADDRESS_V4;
        if (!contractAddress) {
            onClose();
            return;
        }
        payload1.current.contract_address = contractAddress;
        payload1.current.contract_version = contract_version;
        payload1.current.network = (0,utils_chainDetailed/* getChainName */.qz)(chainId);
    }, [
        chainId,
        networkType,
        contract_version,
        createState
    ]);
    // #region remote controlled transaction dialog
    const { setDialog: setTransactionDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated, (ev)=>{
        if (ev.open) return;
        // reset state
        resetCreateCallback();
        // the settings is not available
        if (!createSettings?.token) return;
        // TODO:
        // early return happened
        // we should guide user to select the red packet in the existing list
        if (createState.type !== types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
        const { receipt  } = createState;
        const CreationSuccess = receipt.events?.CreationSuccess.returnValues ?? {};
        payload1.current.sender = {
            address: account,
            name: createSettings.name,
            message: createSettings.message
        };
        payload1.current.is_random = createSettings.isRandom;
        payload1.current.shares = createSettings.shares;
        payload1.current.password = privateKey;
        payload1.current.rpid = CreationSuccess.id;
        payload1.current.total = CreationSuccess.total;
        payload1.current.duration = createSettings.duration;
        payload1.current.creation_time = Number.parseInt(CreationSuccess.creation_time, 10) * 1000;
        payload1.current.token = createSettings.token;
        setSettings(undefined);
        // output the redpacket as JSON payload
        onCreateOrSelect(payload1.current);
    });
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        if (!createSettings?.token || createState.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        // storing the created red packet in DB, it helps retrieve red packet password later
        // save to the database early, otherwise red-packet would lose when close the tx dialog or
        //  web page before create successfully.
        if (createState.type === types/* TransactionStateType.HASH */.n$.HASH && createState.hash) {
            payload1.current.txid = createState.hash;
            const record = {
                id: createState.hash,
                from: '',
                password: privateKey,
                contract_version
            };
            messages/* RedPacketRPC.discoverRedPacket */.T.discoverRedPacket(record);
        }
        setTransactionDialog({
            open: true,
            state: createState,
            summary: t('plugin_red_packet_create_with_token', {
                amount: (0,formatter/* formatBalance */.az)(createSettings?.total, createSettings?.token?.decimals),
                symbol: createSettings?.token.symbol
            })
        });
    }, [
        createState /* update tx dialog only if state changed */ 
    ]);
    // #endregion
    const [step, setStep] = (0,react.useState)(CreateRedPacketPageStep.NewRedPacketPage);
    const onBack = (0,react.useCallback)(()=>{
        if (step === CreateRedPacketPageStep.ConfirmPage) setStep(CreateRedPacketPageStep.NewRedPacketPage);
    }, [
        step
    ]);
    const onNext = (0,react.useCallback)(()=>{
        if (step === CreateRedPacketPageStep.NewRedPacketPage) setStep(CreateRedPacketPageStep.ConfirmPage);
    }, [
        step
    ]);
    const onChange = (0,react.useCallback)((val)=>{
        setSettings(val);
    }, []);
    const tokenState = (0,react.useState)(RpTypeTabs.ERC20);
    const dialogContentHeight = state[0] === DialogTabs.past ? 600 : tokenState[0] === RpTypeTabs.ERC20 ? 350 : 670;
    const tabProps = {
        tabs: [
            {
                label: t('plugin_red_packet_create_new'),
                children: (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketCreateNew, {
                        origin: settings,
                        onNext: onNext,
                        state: tokenState,
                        onClose: onClose,
                        onChange: onChange,
                        SelectMenuProps: {
                            container
                        }
                    })
                ),
                sx: {
                    p: 0
                }
            },
            {
                label: t('plugin_red_packet_select_existing'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketPast, {
                    onSelect: onCreateOrSelect,
                    onClose: onClose
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state,
        classes: {
            focusTab: classes.focusTab,
            tabPaper: classes.tabPaper,
            tab: classes.tab,
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
            tabs: classes.tabs
        }
    };
    const isCreating = step === CreateRedPacketPageStep.NewRedPacketPage;
    const title = isCreating ? t('plugin_red_packet_display_name') : t('plugin_red_packet_details');
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* InjectedDialog */.Fl, {
        open: props.open,
        title: title,
        onClose: onClose,
        disableTitleBorder: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            className: classes.dialogContent,
            children: [
                step === CreateRedPacketPageStep.NewRedPacketPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                    height: dialogContentHeight,
                    ...tabProps
                }) : null,
                step === CreateRedPacketPageStep.ConfirmPage ? /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketConfirmDialog, {
                    onClose: onClose,
                    onBack: onBack,
                    onCreate: createCallback,
                    settings: settings
                }) : null
            ]
        })
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Card/Card.js + 1 modules
var Card = __webpack_require__(34372);
// EXTERNAL MODULE: ./src/components/DataSource/usePostInfo.ts
var usePostInfo = __webpack_require__(69958);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(37732);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var facebook_com_base = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/web3/UI/EthereumChainBoundary.tsx + 1 modules
var EthereumChainBoundary = __webpack_require__(38587);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useClaimCallback.ts




function useClaimCallback(version, from, id, password) {
    const [claimState, setClaimState] = (0,useTransactionState/* useTransactionState */.p)();
    const redPacketContract = useRedPacketContract(version);
    const claimCallback = (0,react.useCallback)(async ()=>{
        if (!redPacketContract || !id || !password) {
            setClaimState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        // start waiting for provider to confirm tx
        setClaimState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        // note: despite the method params type of V1 and V2 is the same,
        //  but it is more understandable to declare respectively
        const claim = version === 4 ? ()=>redPacketContract.methods.claim(id, password, from)
         : ()=>redPacketContract.methods.claim(id, password, from, lib_default().sha3(from))
        ;
        // estimate gas and compose transaction
        const config = {
            from,
            gas: await claim().estimateGas({
                from
            }).catch((error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            })
        };
        // step 2-1: blocking
        return new Promise((resolve, reject)=>{
            claim().send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setClaimState({
                    type: types/* TransactionStateType.HASH */.n$.HASH,
                    hash
                });
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        id,
        password,
        from,
        redPacketContract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setClaimState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, []);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacket/useStyles.ts


const useStyles_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>{
    const spinningAnimationKeyFrames = entry/* keyframes */.F4`
to {
  transform: rotate(360deg)
}`;
    return {
        root: {
            borderRadius: theme.spacing(1),
            padding: theme.spacing(3),
            background: '#DB0632',
            position: 'relative',
            display: 'flex',
            color: theme.palette.common.white,
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: 335,
            boxSizing: 'border-box',
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(10737), __webpack_require__.b)})`,
            backgroundSize: 'cover',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                padding: theme.spacing(1, 1.5),
                height: 202
            }
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        },
        content: {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
        },
        bottomContent: {
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap'
        },
        footer: {
            paddingTop: theme.spacing(2),
            width: '100%',
            display: 'flex',
            gap: theme.spacing(2),
            justifyContent: 'center',
            '& button': {
                flexBasis: 'auto'
            },
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                flexDirection: 'column',
                gap: theme.spacing(1)
            }
        },
        myStatus: {
            fontSize: 14,
            color: '#FAD85A',
            fontWeight: 'bold',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14,
                left: 12,
                bottom: 8
            }
        },
        from: {
            fontSize: '14px',
            color: '#FFFFFF',
            fontWeight: 'bold',
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14,
                right: 12,
                bottom: 8
            }
        },
        label: {
            borderRadius: theme.spacing(1),
            padding: theme.spacing(0.2, 1),
            background: 'rgba(0, 0, 0, 0.2)',
            textTransform: 'capitalize',
            position: 'absolute',
            right: 12,
            top: 8
        },
        words: {
            color: '#FAD85A',
            fontSize: 20,
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '85%',
            minWidth: 300,
            [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
                fontSize: 14
            }
        },
        button: {
            color: theme.palette.common.white
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        packet: {
            top: 40,
            right: -10,
            width: 90,
            height: 90,
            position: 'absolute',
            backgroundAttachment: 'local',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${IconURLs.presentDefault})`
        },
        dai: {
            backgroundImage: `url(${IconURLs.presentDai})`
        },
        okb: {
            backgroundImage: `url(${IconURLs.presentOkb})`
        },
        text: {
            padding: theme.spacing(0.5, 2),
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box'
        },
        dimmer: {
            backgroundColor: 'rgba(0, 0, 0, 0.6)'
        },
        cursor: {
            cursor: 'pointer'
        },
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        },
        icon: {
            fontSize: 45
        },
        metamaskContent: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        connectWallet: {
            marginTop: 16
        },
        fullWidthBox: {
            width: '100%'
        },
        loadingText: {
            textAlign: 'center',
            fontSize: 24,
            marginTop: 210
        }
    };
});

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacket/OperationFooter.tsx









function OperationFooter({ canClaim , canRefund , claimState , refundState , onShare , onClaimOrRefund  }) {
    const { classes  } = useStyles_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,useAccount/* useAccount */.m)();
    const chainIdValid = (0,useChainId/* useChainIdValid */.as)();
    // #region remote controlled select provider dialog
    const { openDialog: openSelectProviderDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_src/* WalletMessages.events.selectProviderDialogUpdated */.R$.events.selectProviderDialogUpdated);
    // #endregion
    const ObtainButton = ()=>{
        if (!canClaim && !canRefund) return null;
        if (!account) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "contained",
                fullWidth: true,
                size: "large",
                onClick: openSelectProviderDialog,
                children: t('plugin_wallet_connect_a_wallet')
            });
        }
        if (!chainIdValid) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                disabled: true,
                variant: "contained",
                fullWidth: true,
                size: "large",
                children: t('plugin_wallet_invalid_network')
            });
        }
        const isLoading = [
            types/* TransactionStateType.HASH */.n$.HASH,
            types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        ].includes(claimState.type) || [
            types/* TransactionStateType.HASH */.n$.HASH,
            types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        ].includes(refundState.type);
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            fullWidth: true,
            disabled: isLoading,
            loading: isLoading,
            variant: "contained",
            size: "large",
            onClick: onClaimOrRefund,
            children: canClaim ? claimState.type === types/* TransactionStateType.HASH */.n$.HASH ? t('plugin_red_packet_claiming') : t('plugin_red_packet_claim') : refundState.type === types/* TransactionStateType.HASH */.n$.HASH ? t('plugin_red_packet_refunding') : t('plugin_red_packet_refund')
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
        classes: {
            connectWallet: classes.connectWallet
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.footer,
            children: [
                canRefund ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    fullWidth: true,
                    size: "large",
                    onClick: onShare,
                    children: t('share')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ObtainButton, {})
            ]
        })
    });
}

// EXTERNAL MODULE: ./shared/native-rpc/index.ts + 1 modules
var native_rpc = __webpack_require__(30246);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacket/index.tsx




















function RedPacket(props) {
    const { payload  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles_useStyles();
    // context
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const networkType = (0,useNetworkType/* useNetworkType */.b)();
    // #region token detailed
    const { value: availability , computed: availabilityComputed , retry: revalidateAvailability ,  } = useAvailabilityComputed(account, payload);
    const { NATIVE_TOKEN_ADDRESS  } = (0,constants_constants/* useTokenConstants */.kd)();
    const { value: tokenDetailed  } = (0,useFungibleTokenDetailed/* useFungibleTokenDetailed */.j)((payload.token?.type ?? payload.token_type) ?? ((0,address/* isSameAddress */.Wr)(NATIVE_TOKEN_ADDRESS, payload.token_address) ? types/* EthereumTokenType.Native */.Dr.Native : types/* EthereumTokenType.ERC20 */.Dr.ERC20), (payload.token?.address ?? payload.token_address) ?? '');
    const token = payload.token ?? tokenDetailed;
    // #endregion
    const { canFetch , canClaim , canRefund , listOfStatus  } = availabilityComputed;
    // #region remote controlled transaction dialog
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const shareTextOption = {
        sender: payload.sender.name,
        payload: postLink,
        network: (0,pipes/* resolveNetworkName */.nW)(networkType),
        account: (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    };
    const [claimState, claimCallback, resetClaimCallback] = useClaimCallback(payload.contract_version, account, payload.rpid, payload.contract_version > 3 ? web3.eth.accounts.sign(account, payload.password).signature : payload.password);
    const shareText = (listOfStatus.includes(RedPacketStatus.claimed) || claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED ? (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('plugin_red_packet_share_message_official_account', shareTextOption) : t('plugin_red_packet_share_message_not_twitter', shareTextOption) : (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? t('plugin_red_packet_share_unclaimed_message_official_account', shareTextOption) : t('plugin_red_packet_share_unclaimed_message_not_twitter', shareTextOption)).trim();
    const [refundState, refundCallback, resetRefundCallback] = useRefundCallback(payload.contract_version, account, payload.rpid);
    // close the transaction dialog
    const { setDialog: setTransactionDialog  } = (0,src/* useRemoteControlledDialog */.F$)(Wallet_messages/* WalletMessages.events.transactionDialogUpdated */.R.events.transactionDialogUpdated);
    // open the transaction dialog
    (0,react.useEffect)(()=>{
        const state = canClaim ? claimState : refundState;
        if (state.type === types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN) return;
        if (!availability || !token) return;
        if (state.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) {
            canClaim && setTransactionDialog({
                open: true,
                shareText,
                state,
                summary: t('plugin_red_packet_claiming_from', {
                    name: payload.sender.name
                })
            });
            resetClaimCallback();
            resetRefundCallback();
            revalidateAvailability();
        }
    }, [
        claimState,
        refundState /* update tx dialog only if state changed */ 
    ]);
    // #endregion
    const onClaimOrRefund = (0,react.useCallback)(async ()=>{
        resetClaimCallback();
        resetRefundCallback();
        if (canClaim) await claimCallback();
        else if (canRefund) await refundCallback();
    }, [
        canClaim,
        canRefund,
        claimCallback,
        refundCallback
    ]);
    const onClaimOrRefundOnNative = (0,react.useCallback)(async ()=>{
        if (!availability) return;
        await native_rpc/* nativeAPI */.Nz?.api.claimOrRefundRedpacket({
            redpacketPayload: payload,
            availability: {
                token_address: availability.token_address,
                balance: availability.balance,
                total: availability.total,
                claimed: availability.claimed,
                expired: availability.expired,
                claimed_amount: availability.claimed_amount
            },
            postLink: postLink.toString()
        });
    }, [
        availability,
        JSON.stringify(payload),
        postLink
    ]);
    const myStatus = (0,react.useMemo)(()=>{
        if (token && listOfStatus.includes(RedPacketStatus.claimed)) return t('plugin_red_packet_description_claimed', availability.claimed_amount ? {
            amount: (0,formatter/* formatBalance */.az)(availability.claimed_amount, token.decimals, 8),
            symbol: token.symbol
        } : {
            amount: '',
            symbol: ''
        });
        return '';
    }, [
        listOfStatus,
        t,
        token
    ]);
    const subtitle = (0,react.useMemo)(()=>{
        if (!availability || !token) return;
        if (listOfStatus.includes(RedPacketStatus.expired) && canRefund) return t('plugin_red_packet_description_refund', {
            balance: (0,formatter/* formatBalance */.az)(availability.balance, token.decimals),
            symbol: token.symbol
        });
        if (listOfStatus.includes(RedPacketStatus.refunded)) return t('plugin_red_packet_description_refunded');
        if (listOfStatus.includes(RedPacketStatus.expired)) return t('plugin_red_packet_description_expired');
        if (listOfStatus.includes(RedPacketStatus.empty)) return t('plugin_red_packet_description_empty');
        if (!payload.password) return t('plugin_red_packet_description_broken');
        return t('plugin_red_packet_description_failover', {
            total: (0,formatter/* formatBalance */.az)(payload.total, token.decimals),
            symbol: token.symbol,
            shares: payload.shares ?? '-'
        });
    }, [
        availability,
        canRefund,
        token,
        t,
        payload,
        listOfStatus
    ]);
    const handleShare = (0,react.useCallback)(()=>{
        if (!shareText || !social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share) return;
        social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share(shareText);
    }, [
        shareText
    ]);
    // the red packet can fetch without account
    if (!availability || !token) return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: (0,utils_chainDetailed/* getChainIdFromName */.np)(payload.network ?? '') ?? types/* ChainId.Mainnet */.a_.Mainnet,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
            className: classes.root,
            component: "article",
            elevation: 0,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.loadingText,
                variant: "body2",
                children: t('loading')
            })
        })
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: (0,utils_chainDetailed/* getChainIdFromName */.np)(payload.network ?? '') ?? types/* ChainId.Mainnet */.a_.Mainnet,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classnames_default()(classes.root),
                component: "article",
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.header,
                        children: canFetch && listOfStatus.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.label,
                            variant: "body2",
                            children: resolveRedPacketStatus(listOfStatus)
                        }) : null
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classnames_default()(classes.content),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.fullWidthBox,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.words,
                                        variant: "h6",
                                        children: payload.sender.message
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        variant: "body2",
                                        children: subtitle
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: classes.bottomContent,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.myStatus,
                                        variant: "body1",
                                        children: myStatus
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.from,
                                        variant: "body1",
                                        children: t('plugin_red_packet_from', {
                                            name: payload.sender.name ?? '-'
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            listOfStatus.includes(RedPacketStatus.empty) ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(OperationFooter, {
                canClaim: canClaim,
                canRefund: canRefund,
                claimState: claimState,
                refundState: refundState,
                onShare: handleShare,
                onClaimOrRefund: native_rpc/* hasNativeAPI */._ ? onClaimOrRefundOnNative : onClaimOrRefund
            })
        ]
    });
}
function resolveRedPacketStatus(listOfStatus) {
    if (listOfStatus.includes(RedPacketStatus.claimed)) return 'Claimed';
    if (listOfStatus.includes(RedPacketStatus.refunded)) return 'Refunded';
    if (listOfStatus.includes(RedPacketStatus.expired)) return 'Expired';
    if (listOfStatus.includes(RedPacketStatus.empty)) return 'Empty';
    return '';
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketInPost.tsx






function RedPacketInPost(props) {
    const { payload  } = props;
    // #region discover red packet
    const postIdentifier = entry_content_script/* usePostInfoDetails.identifier */.H9.identifier();
    const fromUrl = postIdentifier && !postIdentifier.isUnknown ? social_network/* activatedSocialNetworkUI.utils.getPostURL */.LM.utils.getPostURL?.(postIdentifier)?.toString() : undefined;
    (0,react.useEffect)(()=>{
        if (!fromUrl) return;
        if (!payload.txid && payload.contract_version !== 1) return;
        const record = {
            id: payload.contract_version === 1 ? payload.rpid : payload.txid,
            from: fromUrl,
            password: payload.password,
            contract_version: payload.contract_version
        };
        messages/* RedPacketRPC.discoverRedPacket */.T.discoverRedPacket(record);
    }, [
        fromUrl
    ]);
    // #endregion
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket, {
        payload: payload
    });
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(35555);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardHeader/CardHeader.js + 1 modules
var CardHeader = __webpack_require__(48672);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardMedia/CardMedia.js + 1 modules
var CardMedia = __webpack_require__(13723);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/CardContent/CardContent.js + 1 modules
var CardContent = __webpack_require__(3543);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/hooks/useClaimNftRedpacketCallback.ts



const EXTRA_GAS_PER_NFT = 335;
function useClaimNftRedpacketCallback(id, totalAmount, signedMsg) {
    const account = (0,useAccount/* useAccount */.m)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    const nftRedPacketContract = useNftRedPacketContract();
    const [claimState, setClaimState] = (0,useTransactionState/* useTransactionState */.p)();
    const claimCallback = (0,react.useCallback)(async ()=>{
        if (!nftRedPacketContract || !id || !signedMsg || !account || !totalAmount) {
            setClaimState({
                type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
            });
            return;
        }
        const params = [
            id,
            signedMsg,
            account
        ];
        const config = {
            from: account,
            gas: await nftRedPacketContract.methods.claim(...params).estimateGas({
                from: account
            }).catch((error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                throw error;
            }) + EXTRA_GAS_PER_NFT * totalAmount,
            chainId
        };
        setClaimState({
            type: types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING
        });
        return new Promise(async (resolve, reject)=>{
            nftRedPacketContract.methods.claim(...params).send(config).on(types/* TransactionEventType.RECEIPT */.iE.RECEIPT, (receipt)=>{
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.CONFIRMATION */.iE.CONFIRMATION, (no, receipt)=>{
                if (claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED) return;
                setClaimState({
                    type: types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
                    no: 0,
                    receipt
                });
                resolve();
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setClaimState({
                    type: types/* TransactionStateType.FAILED */.n$.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        id,
        signedMsg,
        account,
        chainId,
        totalAmount,
        claimState
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setClaimState({
            type: types/* TransactionStateType.UNKNOWN */.n$.UNKNOWN
        });
    }, [
        account
    ]);
    return [
        claimState,
        claimCallback,
        resetCallback
    ];
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketNft.tsx


















const RedPacketNft_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative'
        },
        actions: {
            paddingTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center'
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: theme.spacing(1),
            padding: theme.spacing(1),
            background: '#DB0632',
            position: 'relative',
            color: theme.palette.common.white,
            boxSizing: 'border-box',
            backgroundImage: `url(${new URL(/* asset import */ __webpack_require__(20317), __webpack_require__.b)})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        },
        loadingCard: {
            width: '100%',
            height: 360,
            justifyContent: 'center',
            alignItems: 'center'
        },
        loadingCardImg: {
            width: 200
        },
        title: {
            textAlign: 'left'
        },
        image: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: 160,
            backgroundSize: 'contain',
            textAlign: 'center',
            justifyContent: 'center'
        },
        remain: {
            marginLeft: 28,
            paddingTop: 40,
            color: '#FAD85A',
            width: '100%'
        },
        claim: {
            textAlign: 'center',
            marginTop: theme.spacing(1)
        },
        button: {
            marginTop: '0px !important',
            minHeight: 38,
            height: 38
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between !important',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(1)
        },
        link: {
            display: 'flex',
            width: 120,
            cursor: 'pointer',
            '&>:first-child': {
                marginRight: theme.spacing(1)
            }
        },
        buttonWrapper: {
            marginTop: 4
        },
        loadingBox: {
            borderRadius: theme.spacing(1),
            padding: theme.spacing(2),
            background: '#DB0632',
            position: 'relative',
            display: 'flex',
            color: theme.palette.common.white,
            flexDirection: 'column',
            height: 360,
            boxSizing: 'border-box'
        },
        tokenWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        tokenImg: {
            width: '100%',
            borderRadius: 6
        },
        claimedText: {
            fontSize: 18,
            fontWeight: 500
        },
        coverCard: {
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            top: 0,
            borderRadius: 6,
            width: '100%',
            height: '100%'
        },
        hide: {
            opacity: 0
        },
        dim: {
            opacity: 0.5
        },
        whiteText: {
            color: 'white'
        },
        dimWhiteText: {
            color: '#e3e3e3'
        },
        badge: {
            width: 76,
            height: 27,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: 'rgba(21, 24, 27, 0.5)',
            borderRadius: 6
        },
        badgeText: {
            fontSize: 12
        },
        snackBarText: {
            fontSize: 14
        },
        snackBarLink: {
            color: 'white'
        },
        openIcon: {
            display: 'flex',
            width: 18,
            height: 18,
            marginLeft: 2
        },
        snackBar: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'translateY(1px)'
        },
        loadingTokenImg: {
            opacity: 0.4
        },
        tokenImgSpinner: {
            position: 'absolute',
            opacity: 0.4,
            top: 65,
            left: 40,
            width: 30,
            height: 30
        },
        loadingText: {
            textAlign: 'center',
            fontSize: 24
        },
        loadingWrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        errorCard: {
            height: 360,
            justifyContent: 'center',
            alignItems: 'center'
        },
        errImage: {
            width: 220
        },
        errorButton: {
            borderColor: 'white',
            minHeight: 30,
            width: 100,
            marginTop: 16,
            '&:hover': {
                borderColor: 'white'
            }
        },
        ellipsis: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: 400,
            fontSize: '1.5rem'
        },
        assetPlayerIframe: {
            marginBottom: 16,
            height: '160px !important'
        },
        imgWrapper: {
            maxWidth: 180,
            marginBottom: 10
        },
        assetPlayerVideoIframe: {
            minWidth: 'fit-content'
        },
        loadingFailImage: {
            height: 160,
            width: 120
        }
    })
);
function RedPacketNft({ payload  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = RedPacketNft_useStyles();
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const account = (0,useAccount/* useAccount */.m)();
    const { value: availability , loading , retry: retryAvailability , error: availabilityError ,  } = useAvailabilityNftRedPacket(payload.id, account);
    const [claimState, claimCallback, resetCallback] = useClaimNftRedpacketCallback(payload.id, availability?.totalAmount, web3.eth.accounts.sign(account, payload.privateKey).signature);
    const isClaiming = claimState.type === types/* TransactionStateType.WAIT_FOR_CONFIRMING */.n$.WAIT_FOR_CONFIRMING;
    const openAddressLinkOnExplorer = (0,react.useCallback)(()=>{
        (0,src/* openWindow */.xw)((0,pipes/* resolveAddressLinkOnExplorer */.V3)(payload.chainId, payload.contractAddress));
    }, [
        payload
    ]);
    const [sourceType, setSourceType] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        if (![
            types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED,
            types/* TransactionStateType.FAILED */.n$.FAILED
        ].includes(claimState.type)) {
            return;
        }
        if (claimState.type === types/* TransactionStateType.CONFIRMED */.n$.CONFIRMED && claimState.no === 0) {
            retryAvailability();
        }
        resetCallback();
    }, [
        claimState.type,
        retryAvailability
    ]);
    (0,react.useEffect)(()=>{
        retryAvailability();
        resetCallback();
    }, [
        account
    ]);
    const rpNftImg = new URL(/* asset import */ __webpack_require__(84183), __webpack_require__.b).toString();
    // #region on share
    const postLink = (0,usePostInfo/* usePostLink */.V)();
    const networkType = (0,useNetworkType/* useNetworkType */.b)();
    const shareText = availability?.isClaimed ? t((0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_red_packet_nft_share_claimed_message' : 'plugin_red_packet_nft_share_claimed_message_not_twitter', {
        sender: payload.senderName,
        payload: postLink,
        network: (0,pipes/* resolveNetworkName */.nW)(networkType),
        account: (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    }).trim() : t((0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) || (0,facebook_com_base/* isFacebook */.DF)(social_network/* activatedSocialNetworkUI */.LM) ? 'plugin_red_packet_nft_share_foreshow_message' : 'plugin_red_packet_nft_share_foreshow_message_not_twitter', {
        sender: payload.senderName,
        payload: postLink,
        network: (0,pipes/* resolveNetworkName */.nW)(networkType),
        account: (0,twitter_com_base/* isTwitter */.L3)(social_network/* activatedSocialNetworkUI */.LM) ? t('twitter_account') : t('facebook_account')
    }).trim();
    const onShare = (0,react.useCallback)(()=>{
        if (shareText) social_network/* activatedSocialNetworkUI.utils.share */.LM.utils.share?.(shareText);
    }, [
        shareText
    ]);
    // #endregion
    if (availabilityError) return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
            className: classnames_default()(classes.card, classes.errorCard),
            component: "article",
            elevation: 0,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.errImage,
                    src: rpNftImg
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.whiteText,
                    variant: "h5",
                    children: t('loading_failed')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: retryAvailability,
                    className: classnames_default()(classes.errorButton, classes.whiteText),
                    variant: "outlined",
                    children: t('try_again')
                })
            ]
        })
    });
    if (!availability || loading) return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.loadingBox,
        component: "article",
        elevation: 0,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                width: "30%",
                height: 18,
                style: {
                    marginTop: 16
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                width: "40%",
                height: 18,
                style: {
                    marginTop: 24
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                animation: "wave",
                variant: "rectangular",
                width: "70%",
                height: 18,
                style: {
                    marginTop: 24
                }
            })
        ]
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.card,
                component: "article",
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        className: classnames_default()(classes.title, availability.isEnd ? classes.hide : '', classes.whiteText),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.ellipsis,
                            children: payload.message
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: classnames_default()(classes.link, classes.whiteText),
                            onClick: openAddressLinkOnExplorer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: payload.contractName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                    fontSize: "small",
                                    className: classes.dimWhiteText
                                })
                            ]
                        })
                    }),
                    availability.isClaimed ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.tokenWrapper,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* NFTCardStyledAssetPlayer */.yC, {
                                chainId: payload.chainId,
                                contractAddress: payload.contractAddress,
                                tokenId: availability.claimed_id,
                                setSourceType: setSourceType,
                                classes: {
                                    iframe: classnames_default()(classes.assetPlayerIframe, sourceType === 'video' ? classes.assetPlayerVideoIframe : ''),
                                    imgWrapper: classes.imgWrapper,
                                    loadingFailImage: classes.loadingFailImage
                                },
                                fallbackImage: new URL(/* asset import */ __webpack_require__(59068), __webpack_require__.b)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                className: classes.claimedText,
                                children: [
                                    "You got 1 ",
                                    payload.contractName
                                ]
                            })
                        ]
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CardMedia/* default */.Z, {
                        className: classes.image,
                        component: "div",
                        image: rpNftImg,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.remain,
                            children: [
                                availability.claimedAmount,
                                "/",
                                availability.totalAmount,
                                " ",
                                t('dashboard_tab_collectibles')
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            className: classes.whiteText,
                            children: t('plugin_red_packet_nft_tip')
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.footer,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                href: "https://mask.io/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: classes.whiteText,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body1",
                                    children: "Mask.io"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                variant: "body1",
                                children: [
                                    "From: @",
                                    payload.senderName
                                ]
                            })
                        ]
                    })
                ]
            }),
            availability.isEnd ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
                className: classes.coverCard,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CardHeader/* default */.Z, {
                        className: classnames_default()(classes.title, classes.dim, classes.dimWhiteText),
                        title: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.ellipsis,
                            children: payload.message
                        }),
                        subheader: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                            className: classnames_default()(classes.link, classes.dimWhiteText),
                            onClick: openAddressLinkOnExplorer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "body2",
                                    children: payload.contractName
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                    fontSize: "small",
                                    className: classes.dimWhiteText
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classnames_default()(classes.badge, classes.whiteText),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            className: classes.badgeText,
                            children: availability.expired ? t('plugin_red_packet_expired') : t('plugin_red_packet_completed')
                        })
                    })
                ]
            }) : availability.isClaimedAll || availability.isCompleted ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(Grid/* default */.ZP, {
                container: true,
                spacing: 2,
                className: classes.buttonWrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: availability.isClaimed ? 12 : 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            className: classes.button,
                            fullWidth: true,
                            onClick: onShare,
                            size: "large",
                            variant: "contained",
                            children: t('share')
                        })
                    }),
                    availability.isClaimed ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                        item: true,
                        xs: 6,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumWalletConnectedBoundary/* EthereumWalletConnectedBoundary */.Y, {
                            classes: {
                                connectWallet: classes.button,
                                unlockMetaMask: classes.button,
                                gasFeeButton: classes.button
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                                variant: "contained",
                                size: "large",
                                loading: isClaiming,
                                disabled: isClaiming,
                                onClick: claimCallback,
                                className: classes.button,
                                fullWidth: true,
                                children: isClaiming ? t('plugin_red_packet_claiming') : t('plugin_red_packet_claim')
                            })
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/RedPacketNftInPost.tsx





function RedPacketNftInPost({ payload  }) {
    (0,react.useEffect)(()=>{
        messages/* RedPacketRPC.updateRedPacketNft */.T.updateRedPacketNft({
            id: payload.txid,
            type: 'red-packet-nft',
            password: payload.privateKey,
            contract_version: payload.contractVersion
        });
    }, [
        payload
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumChainBoundary/* EthereumChainBoundary */.T, {
        chainId: payload.chainId,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketNft, {
            payload: payload
        })
    });
}

// EXTERNAL MODULE: ../icons/general/NFTRedPacket.tsx
var NFTRedPacket = __webpack_require__(26597);
// EXTERNAL MODULE: ../icons/general/RedPacket.tsx
var general_RedPacket = __webpack_require__(85309);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/SNSAdaptor/index.tsx












function Render(props) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true, {
        name: props.name
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: props.children
    });
}
const containerStyle = {
    display: 'flex',
    alignItems: 'center'
};
const badgeSvgIconSize = {
    width: 16,
    height: 16
};
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector (props) {
        if ((0,helpers/* RedPacketMetadataReader */.Qc)(props.message.meta).ok) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
            name: "Lucky Drop",
            children: (0,helpers/* renderWithRedPacketMetadata */.vP)(props.message.meta, (r)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketInPost, {
                    payload: r
                })
            )
        });
        if ((0,helpers/* RedPacketNftMetadataReader */.st)(props.message.meta).ok) return /*#__PURE__*/ (0,jsx_runtime.jsx)(Render, {
            name: "NFT Lucky Drop",
            children: (0,helpers/* renderWithRedPacketNftMetadata */.Ay)(props.message.meta, (r)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacketNftInPost, {
                    payload: r
                })
            )
        });
        return null;
    },
    CompositionDialogMetadataBadgeRender: new Map([
        [
            constants/* RedPacketMetaKey */.Vr,
            (_payload)=>{
                return {
                    text: /*#__PURE__*/ (0,jsx_runtime.jsx)(ERC20RedpacketBadge, {
                        payload: _payload
                    })
                };
            }, 
        ],
        [
            constants/* RedPacketNftMetaKey */.HA,
            (_payload)=>{
                const payload = _payload;
                return {
                    text: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        style: containerStyle,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(NFTRedPacket/* NFTRedPacketIcon */.G, {
                                style: badgeSvgIconSize
                            }),
                            payload.message ? payload.message : 'An NFT Lucky Drop'
                        ]
                    })
                };
            }, 
        ], 
    ]),
    CompositionDialogEntry: {
        dialog: RedPacketDialog,
        label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(general_RedPacket/* RedPacketIcon */.t, {
                    style: badgeSvgIconSize
                }),
                "Luck drop"
            ]
        })
    },
    ApplicationEntries: [
        {
            RenderEntryComponent ({ disabled  }) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src/* ApplicationEntry */.Tv, {
                    title: "Lucky Drop",
                    disabled: disabled,
                    icon: new URL(/* asset import */ __webpack_require__(77984), __webpack_require__.b).toString(),
                    onClick: ()=>shared_base_src/* CrossIsolationMessages.events.requestComposition.sendToLocal */.WF.events.requestComposition.sendToLocal({
                            reason: 'timeline',
                            open: true,
                            options: {
                                startupPlugin: base/* base.ID */.u.ID
                            }
                        })
                });
            },
            defaultSortingPriority: 1
        }, 
    ]
};
function ERC20RedpacketBadge(props) {
    const { payload  } = props;
    const { value: fetchedToken  } = (0,useERC20TokenDetailed/* useERC20TokenDetailed */.k)(payload.token?.address ?? payload.token_address);
    const chainId = (0,utils_chainDetailed/* getChainIdFromName */.np)(payload.network ?? '') ?? types/* ChainId.Mainnet */.a_.Mainnet;
    const chainDetailed = (0,utils_chainDetailed/* getChainDetailed */.$G)(chainId);
    const tokenDetailed = payload.token?.type === types/* EthereumTokenType.Native */.Dr.Native ? chainDetailed?.nativeCurrency : payload.token ?? fetchedToken;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(general_RedPacket/* RedPacketIcon */.t, {
                style: badgeSvgIconSize
            }),
            " A Lucky Drop with",
            ' ',
            (0,formatter/* formatBalance */.az)(payload.total, tokenDetailed?.decimals ?? 0),
            " $",
            (tokenDetailed?.symbol ?? tokenDetailed?.name) ?? 'Token',
            " from ",
            payload.sender.name
        ]
    });
}
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 71777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ RedPacketRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80149);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79936);


if (false) {}
const RedPacketMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .RedPacketPluginID */ .jY);
const RedPacketRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .RedPacketPluginID */ .jY, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(3758), __webpack_require__.e(187), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(5614), __webpack_require__.e(3903)]).then(__webpack_require__.bind(__webpack_require__, 82131))
, RedPacketMessage.rpc);


/***/ }),

/***/ 90014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useCollections),
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24790);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2239);
/* harmony import */ var _useSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37037);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);





function useCollections(address, chainId, dependReady) {
    const id = `mask.fetchNonFungibleCollectionAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectionAsset',
        params: {
            address: address,
            pageSize: 200,
            chainId
        }
    };
    const collections = (0,_useSocket__WEBPACK_IMPORTED_MODULE_1__/* .useSocket */ .s)(message);
    // TODO Pass chainId to websocket, and filter from data side.
    const filtered = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        return chainId ? {
            ...collections,
            data: collections.data.filter((x)=>x.chainId === chainId
            )
        } : collections;
    }, [
        collections,
        chainId
    ]);
    return filtered;
}
function useCollectibles(address, chainId, dependReady) {
    const { erc721Tokens  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3Context */ .Z_)();
    const id = `mask.fetchNonFungibleCollectibleAsset_${address}_${chainId}`;
    const message = {
        id: dependReady === undefined ? id : dependReady ? id : '',
        method: 'mask.fetchNonFungibleCollectibleAssetV2',
        params: {
            address: address,
            pageSize: 30
        }
    };
    const { data , state , error , retry  } = (0,_useSocket__WEBPACK_IMPORTED_MODULE_1__/* .useSocket */ .s)(message);
    const all = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)([
        ...data ?? [],
        ...erc721Tokens.getCurrentValue().filter((x)=>(!chainId || x.contractDetailed.chainId === chainId) && (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(x.info.owner, address)
        ), 
    ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
    );
    return {
        data: all,
        state,
        error,
        retry
    };
}


/***/ }),

/***/ 75569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useERC721ContractDetailed),
/* harmony export */   "q": () => (/* binding */ getERC721ContractDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64452);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31174);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85010);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75000);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33690);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26223);






function useERC721ContractDetailed(address) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__/* .useERC721TokenContract */ .n)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!address || !wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        return getERC721ContractDetailed(erc721TokenContract, address, chainId);
    }, [
        address,
        chainId,
        erc721TokenContract
    ]);
}
const lazyBlank = Promise.resolve('');
async function getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract) {
    const results = await Promise.allSettled([
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.name()) ?? lazyBlank,
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.symbol()) ?? lazyBlank,
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .safeNonPayableTransactionCall */ .Y)(erc721TokenContract.methods.baseURI()) ?? lazyBlank, 
    ]);
    const [name, symbol, baseURI] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .createERC721ContractDetailed */ .ek)(chainId, address, name, symbol, baseURI);
}
async function getERC721ContractDetailedFromOpensea(address, chainId, apiUrl) {
    const response = await fetch(`${apiUrl}/${address}`);
    if (response.ok) {
        const data = await response.json();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .createERC721ContractDetailed */ .ek)(chainId, address, data.name, data.symbol, undefined, data.image_url);
    }
    return null;
}
async function getERC721ContractDetailed(contract, address, chainId) {
    const erc721ContractDetailedFromChain = await getERC721ContractDetailedFromChain(address, chainId, contract);
    const { GET_CONTRACT_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_6__/* .getOpenseaAPIConstants */ .jk)(chainId);
    if (!GET_CONTRACT_URL) return erc721ContractDetailedFromChain;
    const contractDetailedFromOpensea = await getERC721ContractDetailedFromOpensea(address, chainId, GET_CONTRACT_URL);
    // We prefer to use `name` and `symbol` from chain rather than opensea since,
    //  these two data on opensea is sometimes incorrect. Meanwhile there's often
    //   a lack of `iconURL` from chain, which exists on opensea.
    return contractDetailedFromOpensea ? {
        ...contractDetailedFromOpensea,
        name: erc721ContractDetailedFromChain.name,
        symbol: erc721ContractDetailedFromChain.symbol
    } : erc721ContractDetailedFromChain;
}


/***/ }),

/***/ 98477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useERC721TokenDetailedCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53465);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26223);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85010);




function useERC721TokenDetailedCallback(contractDetailed) {
    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { GET_SINGLE_ASSET_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_1__/* .useOpenseaAPIConstants */ .$Y)();
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__/* .useERC721TokenContract */ .n)(contractDetailed?.address ?? '');
    const erc721TokenDetailedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!erc721TokenContract || !contractDetailed || !tokenId) return;
        if (!GET_SINGLE_ASSET_URL) {
            const tokenDetailedFromChain = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .getERC721TokenDetailedFromChain */ .qY)(contractDetailed, erc721TokenContract, tokenId);
            const info = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .getERC721TokenAssetFromChain */ .qU)(tokenDetailedFromChain?.info.tokenURI);
            if (info && tokenDetailedFromChain) {
                tokenDetailedFromChain.info = {
                    ...info,
                    ...tokenDetailedFromChain.info,
                    hasTokenDetailed: true,
                    name: (info?.name ?? tokenDetailedFromChain?.info.name) ?? ''
                };
            }
            return tokenDetailedFromChain;
        } else {
            const tokenDetailedFromOpensea = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .getERC721TokenDetailedFromOpensea */ .L0)(contractDetailed, tokenId, GET_SINGLE_ASSET_URL);
            if (tokenDetailedFromOpensea) tokenDetailedFromOpensea.info.hasTokenDetailed = true;
            return tokenDetailedFromOpensea;
        }
    }, [
        tokenId,
        contractDetailed,
        erc721TokenContract,
        GET_SINGLE_ASSET_URL
    ]);
    return [
        tokenId,
        setTokenId,
        erc721TokenDetailedCallback
    ];
}


/***/ }),

/***/ 52813:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useFungibleTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58498);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43369);




function useFungibleTokenBalance(type, address, chainId) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenBalance */ .h)(chainId);
    const r2 = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenBalance */ .y)(type === _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : undefined, chainId);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ }),

/***/ 37037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SocketState),
/* harmony export */   "s": () => (/* binding */ useSocket)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24790);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64452);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);




var SocketState;
(function(SocketState) {
    SocketState["init"] = "init";
    SocketState["sent"] = "sent";
    SocketState["receiving"] = "receiving";
    SocketState["done"] = "done";
})(SocketState || (SocketState = {}));
const useSocket = (message)=>{
    const { providerSocket  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(SocketState.init);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const { value: socket , loading  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(()=>providerSocket
    , []);
    const requestId = `${message.id}_${id}`;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setState(SocketState.init);
        setData([]);
        setError(undefined);
    }, [
        message.id
    ]);
    const { retry  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(async ()=>{
        if (!socket || !message.id || loading) return;
        const notifyUpdatedHook = (info)=>{
            if (requestId !== info.id) return;
            if (!info.done) {
                setState(SocketState.receiving);
            } else {
                // workaround for get data from cache
                setTimeout(()=>setState(SocketState.done)
                , 0);
            }
            setError(info.error);
            if (!socket) return;
            setData(socket.getResult(requestId));
        };
        socket.send({
            ...message,
            notify: notifyUpdatedHook,
            id: requestId
        });
        // Get data from cache
        setData(socket.getResult(requestId));
        setState(SocketState.sent);
    }, [
        requestId,
        socket,
        loading
    ]);
    const handleRetry = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setId((0,uuid__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)());
        setState(SocketState.sent);
        setData([]);
        retry();
    }, [
        retry
    ]);
    return {
        data: data ?? [],
        state,
        error,
        retry: handleRetry
    };
};


/***/ }),

/***/ 10737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/7f380c93e442babc12dc.png";

/***/ }),

/***/ 20317:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/deb30db7dbae8361bbaa.png";

/***/ }),

/***/ 39590:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/6852c4bfca203f76f5b5.png";

/***/ }),

/***/ 91984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d2d363c3ee56c9636fd7.png";

/***/ }),

/***/ 77984:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/c2e4f93f6cacfaf0e58f.png";

/***/ }),

/***/ 59068:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5fe616ea9a76e241efbc.png";

/***/ }),

/***/ 58794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/bee70e3f0a13f13d3bec.png";

/***/ }),

/***/ 74094:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/583131766579a5f647eb.png";

/***/ }),

/***/ 72251:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/aac3b75eedbc4c4fd187.png";

/***/ }),

/***/ 84183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5edbd804428d4d29d64f.png";

/***/ }),

/***/ 33265:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/b68c952c4aa8ca96564a.png";

/***/ }),

/***/ 5261:
/***/ ((module) => {

module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"claimed_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"string","name":"message","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"},{"indexed":false,"internalType":"bool","name":"ifrandom","type":"bool"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"}],"name":"CreationSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"}],"name":"RefundSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address","name":"token_address","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"claimed","type":"uint256"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"uint256","name":"claimed_amount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes","name":"signedMsg","type":"bytes"},{"internalType":"address payable","name":"recipient","type":"address"}],"name":"claim","outputs":[{"internalType":"uint256","name":"claimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_public_key","type":"address"},{"internalType":"uint256","name":"_number","type":"uint256"},{"internalType":"bool","name":"_ifrandom","type":"bool"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"bytes32","name":"_seed","type":"bytes32"},{"internalType":"string","name":"_message","type":"string"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_token_type","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"}],"name":"create_red_packet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"refund","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);