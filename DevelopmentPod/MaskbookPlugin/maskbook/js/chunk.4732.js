(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4732],{

/***/ 58406:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QRCode = void 0;
var isEqual = __webpack_require__(17361);
var qrGenerator = __webpack_require__(78198);
var React = __webpack_require__(58757);
var ReactDOM = __webpack_require__(26736);
var QRCode = /** @class */ (function (_super) {
    __extends(QRCode, _super);
    function QRCode(props) {
        var _this = _super.call(this, props) || this;
        _this.canvas = React.createRef();
        return _this;
    }
    QRCode.utf16to8 = function (str) {
        var out = '', i, c;
        var len = str.length;
        for (i = 0; i < len; i++) {
            c = str.charCodeAt(i);
            if ((c >= 0x0001) && (c <= 0x007F)) {
                out += str.charAt(i);
            }
            else if (c > 0x07FF) {
                out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
            else {
                out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
            }
        }
        return out;
    };
    /**
     * Draw a rounded square in the canvas
     */
    QRCode.prototype.drawRoundedSquare = function (lineWidth, x, y, size, radii, fill, ctx) {
        ctx.lineWidth = lineWidth;
        // Adjust coordinates so that the outside of the stroke is aligned to the edges
        y += lineWidth / 2;
        x += lineWidth / 2;
        size -= lineWidth;
        if (!Array.isArray(radii)) {
            radii = [radii, radii, radii, radii];
        }
        // Radius should not be greater than half the size or less than zero
        radii = radii.map(function (r) {
            r = Math.min(r, size / 2);
            return (r < 0) ? 0 : r;
        });
        var rTopLeft = radii[0] || 0;
        var rTopRight = radii[1] || 0;
        var rBottomRight = radii[2] || 0;
        var rBottomLeft = radii[3] || 0;
        ctx.beginPath();
        ctx.moveTo(x + rTopLeft, y);
        ctx.lineTo(x + size - rTopRight, y);
        if (rTopRight)
            ctx.quadraticCurveTo(x + size, y, x + size, y + rTopRight);
        ctx.lineTo(x + size, y + size - rBottomRight);
        if (rBottomRight)
            ctx.quadraticCurveTo(x + size, y + size, x + size - rBottomRight, y + size);
        ctx.lineTo(x + rBottomLeft, y + size);
        if (rBottomLeft)
            ctx.quadraticCurveTo(x, y + size, x, y + size - rBottomLeft);
        ctx.lineTo(x, y + rTopLeft);
        if (rTopLeft)
            ctx.quadraticCurveTo(x, y, x + rTopLeft, y);
        ctx.closePath();
        ctx.stroke();
        if (fill) {
            ctx.fill();
        }
    };
    /**
     * Draw a single positional pattern eye.
     */
    QRCode.prototype.drawPositioningPattern = function (ctx, cellSize, offset, row, col, radii) {
        if (radii === void 0) { radii = [0, 0, 0, 0]; }
        var lineWidth = Math.ceil(cellSize);
        var radiiOuter;
        var radiiInner;
        if (typeof radii !== 'number' && !Array.isArray(radii)) {
            radiiOuter = radii.outer || 0;
            radiiInner = radii.inner || 0;
        }
        else {
            radiiOuter = radii;
            radiiInner = radiiOuter;
        }
        var y = (row * cellSize) + offset;
        var x = (col * cellSize) + offset;
        var size = cellSize * 7;
        // Outer box
        this.drawRoundedSquare(lineWidth, x, y, size, radiiOuter, false, ctx);
        // Inner box
        size = cellSize * 3;
        y += cellSize * 2;
        x += cellSize * 2;
        this.drawRoundedSquare(lineWidth, x, y, size, radiiInner, true, ctx);
    };
    ;
    /**
     * Is this dot inside a positional pattern zone.
     */
    QRCode.prototype.isInPositioninZone = function (col, row, zones) {
        return zones.some(function (zone) { return (row >= zone.row && row <= zone.row + 7 &&
            col >= zone.col && col <= zone.col + 7); });
    };
    QRCode.prototype.transformPixelLengthIntoNumberOfCells = function (pixelLength, cellSize) {
        return pixelLength / cellSize;
    };
    QRCode.prototype.isCoordinateInImage = function (col, row, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, logoImage) {
        if (logoImage) {
            var numberOfCellsMargin = 2;
            var firstRowOfLogo = this.transformPixelLengthIntoNumberOfCells(dxLogo, cellSize);
            var firstColumnOfLogo = this.transformPixelLengthIntoNumberOfCells(dyLogo, cellSize);
            var logoWidthInCells = this.transformPixelLengthIntoNumberOfCells(dWidthLogo, cellSize) - 1;
            var logoHeightInCells = this.transformPixelLengthIntoNumberOfCells(dHeightLogo, cellSize) - 1;
            return row >= firstRowOfLogo - numberOfCellsMargin && row <= firstRowOfLogo + logoWidthInCells + numberOfCellsMargin // check rows
                && col >= firstColumnOfLogo - numberOfCellsMargin && col <= firstColumnOfLogo + logoHeightInCells + numberOfCellsMargin; // check cols
        }
        else {
            return false;
        }
    };
    QRCode.prototype.shouldComponentUpdate = function (nextProps) {
        return !isEqual(this.props, nextProps);
    };
    QRCode.prototype.componentDidMount = function () {
        this.update();
    };
    QRCode.prototype.componentDidUpdate = function () {
        this.update();
    };
    QRCode.prototype.update = function () {
        var _a = this.props, value = _a.value, ecLevel = _a.ecLevel, enableCORS = _a.enableCORS, size = _a.size, quietZone = _a.quietZone, bgColor = _a.bgColor, fgColor = _a.fgColor, logoImage = _a.logoImage, logoWidth = _a.logoWidth, logoHeight = _a.logoHeight, logoOpacity = _a.logoOpacity, removeQrCodeBehindLogo = _a.removeQrCodeBehindLogo, qrStyle = _a.qrStyle, eyeRadius = _a.eyeRadius;
        var qrCode = qrGenerator(0, ecLevel);
        qrCode.addData(QRCode.utf16to8(value));
        qrCode.make();
        var canvas = ReactDOM.findDOMNode(this.canvas.current);
        var ctx = canvas.getContext('2d');
        var canvasSize = +size + (2 * +quietZone);
        var length = qrCode.getModuleCount();
        var cellSize = size / length;
        var scale = (window.devicePixelRatio || 1);
        canvas.height = canvas.width = canvasSize * scale;
        ctx.scale(scale, scale);
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        var offset = +quietZone;
        var dWidthLogo = logoWidth || size * 0.2;
        var dHeightLogo = logoHeight || dWidthLogo;
        var dxLogo = ((size - dWidthLogo) / 2);
        var dyLogo = ((size - dHeightLogo) / 2);
        var positioningZones = [
            { row: 0, col: 0 },
            { row: 0, col: length - 7 },
            { row: length - 7, col: 0 },
        ];
        ctx.strokeStyle = fgColor;
        if (qrStyle === 'dots') {
            ctx.fillStyle = fgColor;
            var radius = cellSize / 2;
            for (var row = 0; row < length; row++) {
                for (var col = 0; col < length; col++) {
                    if (qrCode.isDark(row, col) && !this.isInPositioninZone(row, col, positioningZones) && !(removeQrCodeBehindLogo && this.isCoordinateInImage(row, col, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, logoImage))) {
                        ctx.beginPath();
                        ctx.arc(Math.round(col * cellSize) + radius + offset, Math.round(row * cellSize) + radius + offset, (radius / 100) * 75, 0, 2 * Math.PI, false);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            }
        }
        else {
            for (var row = 0; row < length; row++) {
                for (var col = 0; col < length; col++) {
                    if (qrCode.isDark(row, col) && !this.isInPositioninZone(row, col, positioningZones) && !(removeQrCodeBehindLogo && this.isCoordinateInImage(row, col, dWidthLogo, dHeightLogo, dxLogo, dyLogo, cellSize, logoImage))) {
                        ctx.fillStyle = fgColor;
                        var w = (Math.ceil((col + 1) * cellSize) - Math.floor(col * cellSize));
                        var h = (Math.ceil((row + 1) * cellSize) - Math.floor(row * cellSize));
                        ctx.fillRect(Math.round(col * cellSize) + offset, Math.round(row * cellSize) + offset, w, h);
                    }
                }
            }
        }
        // Draw positioning patterns
        for (var i = 0; i < 3; i++) {
            var _b = positioningZones[i], row = _b.row, col = _b.col;
            var radii = eyeRadius;
            if (Array.isArray(radii)) {
                radii = radii[i];
            }
            if (typeof radii == 'number') {
                radii = [radii, radii, radii, radii];
            }
            this.drawPositioningPattern(ctx, cellSize, offset, row, col, radii);
        }
        if (logoImage) {
            var image_1 = new Image();
            if (enableCORS) {
                image_1.crossOrigin = 'Anonymous';
            }
            image_1.onload = function () {
                ctx.save();
                ctx.globalAlpha = logoOpacity;
                ctx.drawImage(image_1, dxLogo + offset, dyLogo + offset, dWidthLogo, dHeightLogo);
                ctx.restore();
            };
            image_1.src = logoImage;
        }
    };
    QRCode.prototype.render = function () {
        var _a;
        var size = +this.props.size + (2 * +this.props.quietZone);
        return React.createElement('canvas', {
            id: (_a = this.props.id) !== null && _a !== void 0 ? _a : 'react-qrcode-logo',
            height: size,
            width: size,
            style: { height: size + 'px', width: size + 'px' },
            ref: this.canvas
        });
    };
    QRCode.defaultProps = {
        value: 'https://reactjs.org/',
        ecLevel: 'M',
        enableCORS: false,
        size: 150,
        quietZone: 10,
        bgColor: '#FFFFFF',
        fgColor: '#000000',
        logoOpacity: 1,
        removeQrCodeBehindLogo: false,
        qrStyle: 'squares',
        eyeRadius: [],
    };
    return QRCode;
}(React.Component));
exports.QRCode = QRCode;


/***/ }),

/***/ 15239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! For license information please see index.js.LICENSE.txt */
!function(e,t){ true?module.exports=t(__webpack_require__(58757),__webpack_require__(26736)):0}("undefined"!=typeof self?self:this,(function(e,t){return function(){"use strict";var n={655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return l},__param:function(){return c},__metadata:function(){return u},__awaiter:function(){return s},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return h},__read:function(){return y},__spread:function(){return b},__spreadArrays:function(){return v},__spreadArray:function(){return g},__await:function(){return m},__asyncGenerator:function(){return w},__asyncDelegator:function(){return _},__asyncValues:function(){return P},__makeTemplateObject:function(){return O},__importStar:function(){return x},__importDefault:function(){return A},__classPrivateFieldGet:function(){return T},__classPrivateFieldSet:function(){return j}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function l(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r}function g(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(c,u):s(i[0][2],n)}catch(e){s(i[0][3],e)}var n}function c(e){l("next",e)}function u(e){l("throw",e)}function s(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function O(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var S=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return S(t,e),t}function A(e){return e&&e.__esModule?e:{default:e}}function T(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function j(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},156:function(t){t.exports=e},111:function(e){e.exports=t}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=o(655),n=o(156),r=o(111),a=Object.prototype.hasOwnProperty.call(n,"createContext"),l=Object.prototype.hasOwnProperty.call(n,"useMemo")&&Object.prototype.hasOwnProperty.call(n,"useCallback"),c=a?n.createContext({}):null;e.PrintContextConsumer=c?c.Consumer:function(){return null};var u={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},s=function(e){function o(){var n=null!==e&&e.apply(this,arguments)||this;return n.startPrint=function(e){var t=n.props,r=t.onAfterPrint,o=t.onPrintError,i=t.print,a=t.documentTitle;setTimeout((function(){var t,l;if(e.contentWindow){if(e.contentWindow.focus(),i)i(e).then(n.handleRemoveIframe).catch((function(e){o?o("print",e):n.logMessages(["An error was thrown by the specified `print` function"])}));else if(e.contentWindow.print){var c=null!==(l=null===(t=e.contentDocument)||void 0===t?void 0:t.title)&&void 0!==l?l:"",u=e.ownerDocument.title;a&&(e.ownerDocument.title=a,e.contentDocument&&(e.contentDocument.title=a)),e.contentWindow.print(),a&&(e.ownerDocument.title=u,e.contentDocument&&(e.contentDocument.title=c))}else n.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);r&&r(),n.handleRemoveIframe()}else n.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])}),500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,o=t.onPrintError;if(r){var i=r();i&&"function"==typeof i.then?i.then((function(){n.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):n.startPrint(e)}else n.startPrint(e)},n.handleClick=function(){var e=n.props,t=e.onBeforeGetContent,r=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(n.handlePrint).catch((function(e){r&&r("onBeforeGetContent",e)})):n.handlePrint()}else n.handlePrint()},n.handlePrint=function(){var e=n.props,o=e.bodyClass,i=e.content,a=e.copyStyles,l=e.fonts,c=e.pageStyle,u=e.nonce,s=i();if(void 0!==s)if(null!==s){var f=document.createElement("iframe");f.style.position="absolute",f.style.top="-1000px",f.style.left="-1000px",f.id="printWindow",f.srcdoc="<!DOCTYPE html>";var d=(0,r.findDOMNode)(s);if(d){var p=d.cloneNode(!0),h=p instanceof Text,y=document.querySelectorAll("link[rel='stylesheet']"),b=h?[]:p.querySelectorAll("img"),v=h?[]:p.querySelectorAll("video");n.linkTotal=y.length+b.length+v.length,n.linksLoaded=[],n.linksErrored=[],n.fontsLoaded=[],n.fontsErrored=[];var g=function(e,t){t?n.linksLoaded.push(e):(n.logMessages(['"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e]),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length+n.fontsLoaded.length+n.fontsErrored.length===n.linkTotal&&n.triggerPrint(f)};f.onload=function(){var e,r,i,s;f.onload=null;var y=f.contentDocument||(null===(r=f.contentWindow)||void 0===r?void 0:r.document);if(y){y.body.appendChild(p),l&&((null===(i=f.contentDocument)||void 0===i?void 0:i.fonts)&&(null===(s=f.contentWindow)||void 0===s?void 0:s.FontFace)?l.forEach((function(e){var t=new FontFace(e.family,e.source);f.contentDocument.fonts.add(t),t.loaded.then((function(e){n.fontsLoaded.push(e)})).catch((function(e){n.fontsErrored.push(t),n.logMessages(['"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e])}))})):n.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API']));var m="function"==typeof c?c():c;if("string"!=typeof m)n.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof m,'". Styles from `pageStyle` will not be applied.')]);else{var w=y.createElement("style");u&&(w.setAttribute("nonce",u),y.head.setAttribute("nonce",u)),w.appendChild(y.createTextNode(m)),y.head.appendChild(w)}if(o&&(e=y.body.classList).add.apply(e,(0,t.__spreadArray)([],(0,t.__read)(o.split(" ")),!1)),!h){for(var _=h?[]:d.querySelectorAll("canvas"),P=y.querySelectorAll("canvas"),O=0;O<_.length;++O){var S=_[O],x=P[O].getContext("2d");x&&x.drawImage(S,0,0)}for(O=0;O<b.length;O++){var A=b[O],T=A.getAttribute("src");T?((k=new Image).onload=g.bind(null,A,!0),k.onerror=g.bind(null,A,!1),k.src=T):(n.logMessages(['"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',A],"warning"),g(A,!1))}for(O=0;O<v.length;O++){var j=v[O];j.preload="auto";var k,E=j.getAttribute("poster");E?((k=new Image).onload=g.bind(null,j,!0),k.onerror=g.bind(null,j,!1),k.src=E):j.readyState>=2?g(j,!0):(j.onloadeddata=g.bind(null,j,!0),j.onerror=g.bind(null,j,!1),j.onstalled=g.bind(null,j,!1))}var C="input",M=d.querySelectorAll(C),R=y.querySelectorAll(C);for(O=0;O<M.length;O++)R[O].value=M[O].value;var I="input[type=checkbox],input[type=radio]",q=d.querySelectorAll(I),D=y.querySelectorAll(I);for(O=0;O<q.length;O++)D[O].checked=q[O].checked;var L="select",W=d.querySelectorAll(L),F=y.querySelectorAll(L);for(O=0;O<W.length;O++)F[O].value=W[O].value}if(a)for(var N=document.querySelectorAll("style, link[rel='stylesheet']"),B=(O=0,N.length);O<B;++O){var G=N[O];if("style"===G.tagName.toLowerCase()){var V=y.createElement(G.tagName),Y=G.sheet;if(Y){var z="";try{for(var H=Y.cssRules.length,J=0;J<H;++J)"string"==typeof Y.cssRules[J].cssText&&(z+="".concat(Y.cssRules[J].cssText,"\r\n"))}catch(e){n.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",G],"warning")}V.setAttribute("id","react-to-print-".concat(O)),u&&V.setAttribute("nonce",u),V.appendChild(y.createTextNode(z)),y.head.appendChild(V)}}else if(G.getAttribute("href")){V=y.createElement(G.tagName),J=0;for(var K=G.attributes.length;J<K;++J){var Q=G.attributes[J];Q&&V.setAttribute(Q.nodeName,Q.nodeValue||"")}V.onload=g.bind(null,V,!0),V.onerror=g.bind(null,V,!1),u&&V.setAttribute("nonce",u),y.head.appendChild(V)}else n.logMessages(['"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',G],"warning"),g(G,!0)}}0!==n.linkTotal&&a||n.triggerPrint(f)},n.handleRemoveIframe(!0),document.body.appendChild(f)}else n.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else n.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else n.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},n.handleRemoveIframe=function(e){var t=n.props.removeAfterPrint;if(e||t){var r=document.getElementById("printWindow");r&&document.body.removeChild(r)}},n.logMessages=function(e,t){void 0===t&&(t="error"),n.props.suppressErrors||("error"===t?console.error(e):"warning"===t&&console.warn(e))},n}return(0,t.__extends)(o,e),o.prototype.render=function(){var e=this.props,t=e.children,r=e.trigger;if(r)return n.cloneElement(r(),{onClick:this.handleClick});if(!c)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var o={handlePrint:this.handleClick};return n.createElement(c.Provider,{value:o},t)},o.defaultProps=u,o}(n.Component);e.default=s,e.useReactToPrint=function(e){if(!l)return e.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var r=n.useMemo((function(){return new s((0,t.__assign)((0,t.__assign)({},u),e))}),[e]);return n.useCallback((function(){return r.handleClick()}),[r])}}(),i}()}));

/***/ }),

/***/ 94046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dr": () => (/* binding */ ABOUT_DIALOG_BACKGROUND),
/* harmony export */   "wL": () => (/* binding */ WatermarkURL)
/* harmony export */ });
/* unused harmony exports PoolTogetherURL, SetupTutorialURL, MaskBlueURL */
/**
 * Manage local static resource
 */ const ABOUT_DIALOG_BACKGROUND = new URL(/* asset import */ __webpack_require__(48737), __webpack_require__.b);
const PoolTogetherURL = (/* unused pure expression or super */ null && (/* unused asset import */ undefined));
const SetupTutorialURL = (/* unused pure expression or super */ null && (/* unused asset import */ undefined));
const WatermarkURL = new URL(/* asset import */ __webpack_require__(33885), __webpack_require__.b);
const MaskBlueURL = (/* unused pure expression or super */ null && (/* unused asset import */ undefined));


/***/ }),

/***/ 88540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q": () => (/* reexport */ DesktopMnemonicConfirm),
  "i": () => (/* reexport */ MnemonicReveal)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Grid/Grid.js + 2 modules
var Grid = __webpack_require__(69427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useDrop.js
var useDrop = __webpack_require__(69980);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/DesktopMnemonicConfirm.tsx





const parserPastingAllMnemonic = (text)=>{
    const result = [
        ...text.matchAll(/([a-z])+/g)
    ];
    return result.length === 12 ? result : null;
};
const DesktopMnemonicConfirm = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { puzzleWords , indexes , onChange , setAll  } = props;
    (0,useDrop/* default */.Z)({
        onText: (text)=>handlePaster(text)
    });
    const handlePaster = (0,react.useCallback)((text)=>{
        if (!setAll) return;
        const words = parserPastingAllMnemonic(text);
        if (!words) return;
        setAll(words.map((x)=>x[0]
        ));
    }, [
        setAll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: puzzleWords.map((word, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(entry/* MaskTextField */.FU, {
                    sx: {
                        width: '100%',
                        userSelect: 'none'
                    },
                    placeholder: i + 1 + '.',
                    value: word,
                    InputProps: {
                        disableUnderline: true
                    },
                    disabled: indexes && !indexes.includes(i),
                    onChange: (e)=>{
                        const text = e.target.value;
                        if (e.nativeEvent.inputType === 'insertFromPaste' && parserPastingAllMnemonic(text)) {
                            return;
                        }
                        onChange(text, indexes ? indexes.indexOf(i) : i);
                    }
                })
            }, i)
        )
    });
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/MnemonicReveal.tsx



const WordCard = (0,styled/* default */.ZP)(Typography/* default */.Z)(({ theme  })=>`
    padding: ${theme.spacing(1)};
    border-radius: 6px;
    color: ${theme.palette.mode === 'dark' ? entry/* MaskColorVar.textPrimary */.ZN.textPrimary : entry/* MaskColorVar.textLink */.ZN.textLink};
    font-size: 14;
    background-color: ${entry/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)};
    display: flex;
    justify-content: center;
    align-items: center;
`
);
function MnemonicReveal(props) {
    const { words , indexed , wordClass  } = props;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
        container: true,
        spacing: 2,
        children: words.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Grid/* default */.ZP, {
                item: true,
                xs: 3,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(WordCard, {
                    className: wordClass,
                    children: [
                        indexed ? `${index + 1}. ` : '',
                        item
                    ]
                })
            }, index)
        )
    });
}

;// CONCATENATED MODULE: ../dashboard/src/components/Mnemonic/index.tsx




/***/ }),

/***/ 84732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ PreviewDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58406);
/* harmony import */ var react_qrcode_logo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31939);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93122);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46715);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96436);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(85792);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(21784);
/* harmony import */ var _components_Mnemonic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88540);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14628);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28839);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9397);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(58757);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15239);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93537);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94046);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51502);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(39969);












const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        preview: {
            position: 'relative',
            background: `url(${_assets__WEBPACK_IMPORTED_MODULE_7__/* .WatermarkURL */ .wL}) repeat`,
            backgroundSize: '141px'
        },
        wordClass: {
            background: 'rgba(28, 104, 243, 0.1)',
            color: '#1C68F3'
        },
        card: {
            background: 'linear-gradient(180deg, #003EAF 0%, #1C68F3 100%)',
            borderRadius: theme.spacing(1),
            padding: theme.spacing(2),
            color: '#fff'
        },
        name: {
            maxWidth: 350,
            paddingLeft: 10,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        },
        infoIcon: {
            color: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.secondaryInfoText */ .ZN.secondaryInfoText,
            fontSize: 24,
            marginRight: 12
        },
        copyIcon: {
            stroke: '#F6F6F8',
            fontSize: '14px',
            cursor: 'pointer',
            verticalAlign: 'middle'
        }
    })
);
function PreviewDialog(props) {
    const { personaName , open , type , onClose  } = props;
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_8__/* .useDashboardI18N */ .x)();
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const [height, setHeight] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
    const onPrint = (0,react_to_print__WEBPACK_IMPORTED_MODULE_5__.useReactToPrint)({
        content: ()=>ref.current
    });
    const onDownload = async ()=>{
        if (!ref.current) return;
        const dataUrl = await (0,html_to_image__WEBPACK_IMPORTED_MODULE_6__/* .toJpeg */ .hi)(ref.current, {
            quality: 0.95
        });
        const link = document.createElement('a');
        link.download = `mask-persona-${personaName}.jpeg`;
        link.href = dataUrl;
        link.click();
    };
    const onClick = async ()=>{
        if (type === 'print') {
            setHeight('100vh');
            setTimeout(()=>{
                onPrint();
                setHeight('');
            });
        } else {
            await onDownload();
        }
        onClose();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        theme: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskLightTheme */ .Cp,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskDialog */ .Df, {
            title: type === 'print' ? t.print_preview() : t.download_preview(),
            open: open,
            onClose: onClose,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                sx: {
                    marginTop: '-24px',
                    padding: 0
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ComponentToPrint, {
                        ...props,
                        ref: ref,
                        height: height
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        padding: "0 24px 24px",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            size: "large",
                            fullWidth: true,
                            onClick: onClick,
                            children: type === 'print' ? t.print() : t.download()
                        })
                    })
                ]
            })
        })
    });
}
const ComponentToPrint = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)((props, ref)=>{
    const { personaName , id , privateKey , words , height  } = props;
    const { classes  } = useStyles();
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_8__/* .useDashboardI18N */ .x)();
    const [state, copyToClipboard] = (0,react_use__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .useCustomSnackbar */ .Ii)();
    const qrValue = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>{
        const main = words?.length ? `mnemonic/${btoa(words.join(' '))}` : `privatekey/${privateKey}`;
        return `mask://persona/${main}?nickname=${personaName}`;
    }, [
        words?.join(),
        privateKey,
        personaName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (state.value) {
            showSnackbar(t.personas_export_persona_copy_success(), {
                variant: 'success'
            });
        }
        if (state.error?.message) {
            showSnackbar(t.personas_export_persona_copy_failed(), {
                variant: 'error'
            });
        }
    }, [
        state
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
        display: "flex",
        justifyContent: "center",
        height: height,
        padding: "24px 24px 0",
        ref: ref,
        color: "#111432",
        sx: {
            background: '#fff'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            maxWidth: 746,
            className: classes.preview,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    className: classes.card,
                    display: "flex",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                            flex: 1,
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    paddingBottom: "8px",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_14__/* .MiniMaskIcon */ .q, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            fontSize: 24,
                                            fontWeight: 600,
                                            className: classes.name,
                                            children: [
                                                t.persona(),
                                                ": ",
                                                personaName
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            fontSize: 14,
                                            fontWeight: 600,
                                            width: 102,
                                            children: t.create_account_mask_id()
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            fontSize: 10,
                                            fontWeight: 600,
                                            sx: {
                                                wordBreak: 'break-all',
                                                flex: 1
                                            },
                                            children: id?.replace('ec_key:secp256k1/', '')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                    display: "flex",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            fontSize: 14,
                                            fontWeight: 600,
                                            width: 102,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    style: {
                                                        verticalAlign: 'middle'
                                                    },
                                                    children: [
                                                        t.create_account_private_key(),
                                                        " "
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_16__/* .CopyIcon */ .T, {
                                                    className: classes.copyIcon,
                                                    onClick: ()=>copyToClipboard(privateKey)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                            fontSize: 10,
                                            fontWeight: 600,
                                            sx: {
                                                wordBreak: 'break-all',
                                                flex: 1,
                                                paddingRight: '8px'
                                            },
                                            children: privateKey
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_qrcode_logo__WEBPACK_IMPORTED_MODULE_1__.QRCode, {
                            value: qrValue,
                            ecLevel: "L",
                            size: 120,
                            quietZone: 6,
                            qrStyle: "dots"
                        })
                    ]
                }),
                words?.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            margin: "24px 0",
                            fontWeight: 600,
                            children: t.create_account_identity_id()
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Mnemonic__WEBPACK_IMPORTED_MODULE_3__/* .MnemonicReveal */ .i, {
                            words: words,
                            indexed: true,
                            wordClass: classes.wordClass
                        })
                    ]
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                    display: "flex",
                    alignItems: "center",
                    margin: "24px 0",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_17__/* .InfoIcon */ .s, {
                            className: classes.infoIcon
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                            fontSize: 12,
                            fontWeight: 700,
                            children: t.create_account_preview_tip()
                        })
                    ]
                })
            ]
        })
    });
});


/***/ }),

/***/ 28839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CopyIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const CopyIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('copy', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.736 12.538c-.898 0-1.68-.267-2.244-.793-.566-.53-.858-1.273-.858-2.117V4.882c0-.84.29-1.58.852-2.109.558-.525 1.335-.795 2.226-.8h.003l4.383-.001c.898 0 1.68.267 2.244.793.566.53.858 1.273.858 2.117v4.746c0 .84-.29 1.58-.852 2.109-.558.525-1.335.794-2.226.8h-.003l-4.383.001v-.533.533Zm0-1.066c-.689 0-1.19-.203-1.516-.507-.32-.3-.52-.745-.52-1.337V4.882c0-.588.198-1.032.516-1.332.322-.303.82-.506 1.5-.51h.002l4.38-.002c.689 0 1.19.203 1.515.507.321.3.52.745.52 1.337v4.746c0 .588-.197 1.032-.516 1.332-.321.302-.818.506-1.5.51l-4.381.002Z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.41 14.615c-.898 0-1.68-.267-2.243-.793-.567-.53-.86-1.273-.86-2.117V6.959c0-1.084.484-1.986 1.37-2.489a.533.533 0 1 1 .526.928c-.514.292-.828.816-.828 1.561v4.746c0 .592.199 1.037.52 1.337.325.304.826.507 1.515.507l4.382-.002c.763-.005 1.295-.259 1.612-.628a.533.533 0 1 1 .81.695c-.563.654-1.418.994-2.418 1h-.003l-4.383.001v-.533.533Z"
        })
    ]
}), '0 0 16 17');


/***/ }),

/***/ 9397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35667);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50498);


const InfoIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Info', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.2",
            d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 11C13 10.4477 12.5523 10 12 10C11.4477 10 11 10.4477 11 11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V11Z",
            fill: "currentColor"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8Z",
            fill: "currentColor"
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 48737:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c7c85948fa6af5df0e51.png";

/***/ }),

/***/ 33885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5d68edad1fba2deaeb8f.png";

/***/ })

}]);