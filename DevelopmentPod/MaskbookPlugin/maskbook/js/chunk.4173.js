(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4173],{

/***/ 2863:
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
var React = __webpack_require__(76342);
var ReactDOM = __webpack_require__(15621);
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
        var _a = this.props, value = _a.value, ecLevel = _a.ecLevel, enableCORS = _a.enableCORS, size = _a.size, quietZone = _a.quietZone, bgColor = _a.bgColor, fgColor = _a.fgColor, logoImage = _a.logoImage, logoWidth = _a.logoWidth, logoHeight = _a.logoHeight, logoOpacity = _a.logoOpacity, qrStyle = _a.qrStyle, eyeRadius = _a.eyeRadius;
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
                    if (qrCode.isDark(row, col) && !this.isInPositioninZone(row, col, positioningZones)) {
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
                    if (qrCode.isDark(row, col) && !this.isInPositioninZone(row, col, positioningZones)) {
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
                var dwidth = logoWidth || size * 0.2;
                var dheight = logoHeight || dwidth;
                var dx = (size - dwidth) / 2;
                var dy = (size - dheight) / 2;
                image_1.width = dwidth;
                image_1.height = dheight;
                ctx.save();
                ctx.globalAlpha = logoOpacity;
                ctx.drawImage(image_1, dx + offset, dy + offset, dwidth, dheight);
                ctx.restore();
            };
            image_1.src = logoImage;
        }
    };
    QRCode.prototype.render = function () {
        var size = +this.props.size + (2 * +this.props.quietZone);
        return React.createElement('canvas', {
            id: 'react-qrcode-logo',
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
        qrStyle: 'squares',
        eyeRadius: [],
    };
    return QRCode;
}(React.Component));
exports.QRCode = QRCode;


/***/ }),

/***/ 66305:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*! For license information please see index.js.LICENSE.txt */
!function(e,t){ true?module.exports=t(__webpack_require__(76342),__webpack_require__(15621)):0}("undefined"!=typeof self?self:this,(function(e,t){return function(){"use strict";var n={655:function(e,t,n){n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return a},__decorate:function(){return l},__param:function(){return c},__metadata:function(){return u},__awaiter:function(){return s},__generator:function(){return f},__createBinding:function(){return d},__exportStar:function(){return p},__values:function(){return h},__read:function(){return y},__spread:function(){return b},__spreadArrays:function(){return v},__spreadArray:function(){return g},__await:function(){return m},__asyncGenerator:function(){return w},__asyncDelegator:function(){return _},__asyncValues:function(){return P},__makeTemplateObject:function(){return S},__importStar:function(){return x},__importDefault:function(){return T},__classPrivateFieldGet:function(){return A},__classPrivateFieldSet:function(){return j}});var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function l(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function c(e,t){return function(n,r){t(n,r,e)}}function u(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function l(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}c((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function y(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(y(arguments[t]));return e}function v(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,o++)r[o]=i[a];return r}function g(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function m(e){return this instanceof m?(this.v=e,this):new m(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||l(e,t)}))})}function l(e,t){try{(n=o[e](t)).value instanceof m?Promise.resolve(n.value.v).then(c,u):s(i[0][2],n)}catch(e){s(i[0][3],e)}var n}function c(e){l("next",e)}function u(e){l("throw",e)}function s(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1])}}function _(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:m(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function P(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){!function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)}(r,o,(t=e[n](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var O=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return O(t,e),t}function T(e){return e&&e.__esModule?e:{default:e}}function A(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function j(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}},156:function(t){t.exports=e},111:function(e){e.exports=t}},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){var e=i;Object.defineProperty(e,"__esModule",{value:!0}),e.useReactToPrint=e.PrintContextConsumer=void 0;var t=o(655),n=o(156),r=o(111),a=Object.prototype.hasOwnProperty.call(n,"createContext"),l=Object.prototype.hasOwnProperty.call(n,"useMemo")&&Object.prototype.hasOwnProperty.call(n,"useCallback"),c=a?n.createContext({}):null;e.PrintContextConsumer=c?c.Consumer:function(){return null};var u={copyStyles:!0,pageStyle:"@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }",removeAfterPrint:!1,suppressErrors:!1},s=function(e){function o(){var n=null!==e&&e.apply(this,arguments)||this;return n.startPrint=function(e){var t=n.props,r=t.onAfterPrint,o=t.onPrintError,i=t.print,a=t.documentTitle;setTimeout((function(){var t,l;if(e.contentWindow){if(e.contentWindow.focus(),i)i(e).then(n.handleRemoveIframe).catch((function(e){o?o("print",e):n.logMessages(["An error was thrown by the specified `print` function"])}));else if(e.contentWindow.print){var c=null!==(l=null===(t=e.contentDocument)||void 0===t?void 0:t.title)&&void 0!==l?l:"",u=e.ownerDocument.title;a&&(e.ownerDocument.title=a,e.contentDocument&&(e.contentDocument.title=a)),e.contentWindow.print(),a&&(e.ownerDocument.title=u,e.contentDocument&&(e.contentDocument.title=c)),r&&r()}else n.logMessages(["Printing for this browser is not currently possible: the browser does not have a `print` method available for iframes."]);n.handleRemoveIframe()}else n.logMessages(["Printing failed because the `contentWindow` of the print iframe did not load. This is possibly an error with `react-to-print`. Please file an issue: https://github.com/gregnb/react-to-print/issues/"])}),500)},n.triggerPrint=function(e){var t=n.props,r=t.onBeforePrint,o=t.onPrintError;if(r){var i=r();i&&"function"==typeof i.then?i.then((function(){n.startPrint(e)})).catch((function(e){o&&o("onBeforePrint",e)})):n.startPrint(e)}else n.startPrint(e)},n.handleClick=function(){var e=n.props,t=e.onBeforeGetContent,r=e.onPrintError;if(t){var o=t();o&&"function"==typeof o.then?o.then(n.handlePrint).catch((function(e){r&&r("onBeforeGetContent",e)})):n.handlePrint()}else n.handlePrint()},n.handlePrint=function(){var e=n.props,o=e.bodyClass,i=e.content,a=e.copyStyles,l=e.fonts,c=e.pageStyle,u=e.nonce,s=i();if(void 0!==s)if(null!==s){var f=document.createElement("iframe");f.style.position="absolute",f.style.top="-1000px",f.style.left="-1000px",f.id="printWindow",f.srcdoc="<!DOCTYPE html>";var d=(0,r.findDOMNode)(s);if(d){var p=d.cloneNode(!0),h=p instanceof Text,y=document.querySelectorAll("link[rel='stylesheet']"),b=h?[]:p.querySelectorAll("img"),v=h?[]:p.querySelectorAll("video");n.linkTotal=y.length+b.length+v.length,n.linksLoaded=[],n.linksErrored=[],n.fontsLoaded=[],n.fontsErrored=[];var g=function(e,t){t?n.linksLoaded.push(e):(n.logMessages(['"react-to-print" was unable to load a linked node. It may be invalid. "react-to-print" will continue attempting to print the page. The linked node that errored was:',e]),n.linksErrored.push(e)),n.linksLoaded.length+n.linksErrored.length+n.fontsLoaded.length+n.fontsErrored.length===n.linkTotal&&n.triggerPrint(f)};f.onload=function(){var e,r,i,s;f.onload=null;var y=f.contentDocument||(null===(r=f.contentWindow)||void 0===r?void 0:r.document);if(y){y.body.appendChild(p),l&&((null===(i=f.contentDocument)||void 0===i?void 0:i.fonts)&&(null===(s=f.contentWindow)||void 0===s?void 0:s.FontFace)?l.forEach((function(e){var t=new FontFace(e.family,e.source);f.contentDocument.fonts.add(t),t.loaded.then((function(e){n.fontsLoaded.push(e)})).catch((function(e){n.fontsErrored.push(t),n.logMessages(['"react-to-print" was unable to load a font. "react-to-print" will continue attempting to print the page. The font that failed to load is:',t,"The error from loading the font is:",e])}))})):n.logMessages(['"react-to-print" is not able to load custom fonts because the browser does not support the FontFace API']));var m="function"==typeof c?c():c;if("string"!=typeof m)n.logMessages(['"react-to-print" expected a "string" from `pageStyle` but received "'.concat(typeof m,'". Styles from `pageStyle` will not be applied.')]);else{var w=y.createElement("style");u&&(w.setAttribute("nonce",u),y.head.setAttribute("nonce",u)),w.appendChild(y.createTextNode(m)),y.head.appendChild(w)}if(o&&(e=y.body.classList).add.apply(e,(0,t.__spreadArray)([],(0,t.__read)(o.split(" ")),!1)),!h){for(var _=h?[]:d.querySelectorAll("canvas"),P=y.querySelectorAll("canvas"),S=0;S<_.length;++S){var O=_[S],x=P[S].getContext("2d");x&&x.drawImage(O,0,0)}for(S=0;S<b.length;S++){var T=b[S],A=T.getAttribute("src");A?((E=new Image).onload=g.bind(null,T,!0),E.onerror=g.bind(null,T,!1),E.src=A):(n.logMessages(['"react-to-print" encountered an <img> tag with an empty "src" attribute. It will not attempt to pre-load it. The <img> is:',T],"warning"),g(T,!1))}for(S=0;S<v.length;S++){var j=v[S];j.preload="auto";var E,k=j.getAttribute("poster");k?((E=new Image).onload=g.bind(null,j,!0),E.onerror=g.bind(null,j,!1),E.src=k):j.readyState>=2?g(j,!0):(j.onloadeddata=g.bind(null,j,!0),j.onerror=g.bind(null,j,!1),j.onstalled=g.bind(null,j,!1))}var C="input",M=d.querySelectorAll(C),R=y.querySelectorAll(C);for(S=0;S<M.length;S++)R[S].value=M[S].value;var I="input[type=checkbox],input[type=radio]",q=d.querySelectorAll(I),D=y.querySelectorAll(I);for(S=0;S<q.length;S++)D[S].checked=q[S].checked;var L="select",W=d.querySelectorAll(L),F=y.querySelectorAll(L);for(S=0;S<W.length;S++)F[S].value=W[S].value}if(a)for(var N=document.querySelectorAll("style, link[rel='stylesheet']"),B=(S=0,N.length);S<B;++S){var G=N[S];if("STYLE"===G.tagName){var Y=y.createElement(G.tagName),V=G.sheet;if(V){var z="";try{for(var H=V.cssRules.length,J=0;J<H;++J)"string"==typeof V.cssRules[J].cssText&&(z+="".concat(V.cssRules[J].cssText,"\r\n"))}catch(e){n.logMessages(["A stylesheet could not be accessed. This is likely due to the stylesheet having cross-origin imports, and many browsers block script access to cross-origin stylesheets. See https://github.com/gregnb/react-to-print/issues/429 for details. You may be able to load the sheet by both marking the stylesheet with the cross `crossorigin` attribute, and setting the `Access-Control-Allow-Origin` header on the server serving the stylesheet. Alternatively, host the stylesheet on your domain to avoid this issue entirely.",G],"warning")}Y.setAttribute("id","react-to-print-".concat(S)),u&&Y.setAttribute("nonce",u),Y.appendChild(y.createTextNode(z)),y.head.appendChild(Y)}}else if(G.getAttribute("href")){Y=y.createElement(G.tagName),J=0;for(var K=G.attributes.length;J<K;++J){var Q=G.attributes[J];Q&&Y.setAttribute(Q.nodeName,Q.nodeValue||"")}Y.onload=g.bind(null,Y,!0),Y.onerror=g.bind(null,Y,!1),u&&Y.setAttribute("nonce",u),y.head.appendChild(Y)}else n.logMessages(['"react-to-print" encountered a <link> tag with an empty "href" attribute. In addition to being invalid HTML, this can cause problems in many browsers, and so the <link> was not loaded. The <link> is:',G],"warning"),g(G,!0)}}0!==n.linkTotal&&a||n.triggerPrint(f)},n.handleRemoveIframe(!0),document.body.appendChild(f)}else n.logMessages(['"react-to-print" could not locate the DOM node corresponding with the `content` prop'])}else n.logMessages(['There is nothing to print because the "content" prop returned "null". Please ensure "content" is renderable before allowing "react-to-print" to be called.']);else n.logMessages(["To print a functional component ensure it is wrapped with `React.forwardRef`, and ensure the forwarded ref is used. See the README for an example: https://github.com/gregnb/react-to-print#examples"])},n.handleRemoveIframe=function(e){var t=n.props.removeAfterPrint;if(e||t){var r=document.getElementById("printWindow");r&&document.body.removeChild(r)}},n.logMessages=function(e,t){void 0===t&&(t="error"),n.props.suppressErrors||("error"===t?console.error(e):"warning"===t&&console.warn(e))},n}return(0,t.__extends)(o,e),o.prototype.render=function(){var e=this.props,t=e.children,r=e.trigger;if(r)return n.cloneElement(r(),{onClick:this.handleClick});if(!c)return this.logMessages(['"react-to-print" requires React ^16.3.0 to be able to use "PrintContext"']),null;var o={handlePrint:this.handleClick};return n.createElement(c.Provider,{value:o},t)},o.defaultProps=u,o}(n.Component);e.default=s,e.useReactToPrint=function(e){if(!l)return e.suppressErrors||console.error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"'),function(){throw new Error('"react-to-print" requires React ^16.8.0 to be able to use "useReactToPrint"')};var r=n.useMemo((function(){return new s((0,t.__assign)((0,t.__assign)({},u),e))}),[e]);return n.useCallback((function(){return r.handleClick()}),[r])}}(),i}()}));

/***/ }),

/***/ 25126:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dr": () => (/* binding */ ABOUT_DIALOG_BACKGROUND),
/* harmony export */   "am": () => (/* binding */ PoolTogetherURL),
/* harmony export */   "SV": () => (/* binding */ SetupTutorialURL),
/* harmony export */   "wL": () => (/* binding */ WatermarkURL)
/* harmony export */ });
/* unused harmony export MaskBlueURL */
/**
 * Manage local static resource
 */ const ABOUT_DIALOG_BACKGROUND = new URL(/* asset import */ __webpack_require__(48737), __webpack_require__.b);
const PoolTogetherURL = new URL(/* asset import */ __webpack_require__(56997), __webpack_require__.b);
const SetupTutorialURL = new URL(/* asset import */ __webpack_require__(65564), __webpack_require__.b);
const WatermarkURL = new URL(/* asset import */ __webpack_require__(33885), __webpack_require__.b);
const MaskBlueURL = (/* unused pure expression or super */ null && (/* unused asset import */ undefined));


/***/ }),

/***/ 70470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ActionCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93230);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66709);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39541);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67020);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73774);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84879);



const ActionCardIcon = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    width: 36px;
    height: 36px;

    & > svg {
        width: 100%;
        height: 100%;
    }
`
);
const ActionCardButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP)('div')(({ theme  })=>`
    font-size: 14px;

    & > button {
        width: 164px;
        border-radius: ${theme.spacing(3)};
    }
`
);
const ActionCard = ({ icon , title , subtitle , action  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        variant: "outlined",
        sx: {
            padding: (theme)=>theme.spacing(2.5)
            ,
            marginBottom: (theme)=>theme.spacing(2.5)
            ,
            boxShadow: 'none'
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            spacing: 2,
            direction: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardIcon, {
                    children: icon
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    flex: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "body1",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: title
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            variant: "body2",
                            paragraph: true,
                            sx: {
                                marginBottom: 0
                            },
                            children: subtitle
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ActionCardButton, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        size: "medium",
                        variant: "contained",
                        color: action.type,
                        onClick: action.handler,
                        children: action.text
                    })
                })
            ]
        })
    }));
};


/***/ }),

/***/ 37427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useMnemonicWordsPuzzle)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65535);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22572);
/* harmony import */ var _mask_src_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70202);
/**
 * TODO: use @packages/plugin-wallet instead
 */ 



// How many fields should be filled by the user?
const PUZZLE_SIZE = 5;
// The total count of mnemonic words.
const TOTAL_SIZE = 12;
function useMnemonicWordsPuzzle() {
    const [answerWords, setAnswerWords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { value: words = [] , loading: wordsLoading , retry: wordsRetry ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>_mask_src_plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_1__/* .WalletRPC.createMnemonicWords */ .V.createMnemonicWords()
    , []);
    // #region generate some mask indexes randomly which should be filled by the user
    const [seed, setSeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const indexes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,lodash_unified__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(Array.from({
            length: TOTAL_SIZE
        }).fill(seed).map((_, i)=>i
        )).slice(0, PUZZLE_SIZE)
    , [
        seed,
        words
    ]);
    // #endregion
    // #region a serial of words and the user gonna complete those empty ones
    const puzzleWords = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const words_ = words.slice(0);
        var _i;
        for(let i = 0; i < indexes.length; i += 1)words_[indexes[i]] = (_i = answerWords[i]) !== null && _i !== void 0 ? _i : '';
        return words_;
    }, [
        answerWords,
        indexes,
        words
    ]);
    // #endregion
    const answerCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((word, index)=>{
        setAnswerWords((x)=>{
            const words_ = x.slice(0);
            words_[index] = word;
            return words_;
        });
    }, [
        answerWords
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setAnswerWords([]);
        setSeed((x)=>(x + 1) % 3
        );
    }, []);
    const refreshCallback = wordsRetry;
    return {
        words,
        puzzleWords,
        indexes,
        answerCallback,
        resetCallback,
        refreshCallback
    };
}


/***/ }),

/***/ 4173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SignUp)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/RowLayout.tsx
var RowLayout = __webpack_require__(98086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(66709);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(32035);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(36122);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Refresh.js
var Refresh = __webpack_require__(75976);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentHeader.tsx
var ColumnContentHeader = __webpack_require__(81634);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ColumnContentLayout.tsx + 1 modules
var ColumnContentLayout = __webpack_require__(66248);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(61382);
// EXTERNAL MODULE: ../dashboard/src/components/Mnemonic/index.tsx + 2 modules
var Mnemonic = __webpack_require__(5565);
// EXTERNAL MODULE: ../dashboard/src/pages/SignUp/routePath.ts
var routePath = __webpack_require__(56641);
// EXTERNAL MODULE: ../dashboard/src/components/RegisterFrame/ButtonContainer.tsx
var ButtonContainer = __webpack_require__(12638);
// EXTERNAL MODULE: ../dashboard/src/hooks/useMnemonicWordsPuzzle.ts
var useMnemonicWordsPuzzle = __webpack_require__(37427);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(85143);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(77964);
;// CONCATENATED MODULE: ../dashboard/src/hooks/useCreatePersonaV2.ts


function useCreatePersonaV2() {
    return async (mnemonicWord, nickName)=>{
        const identifier = await API/* Services.Identity.createPersonaByMnemonicV2 */.K9.Identity.createPersonaByMnemonicV2(mnemonicWord, nickName, '');
        await (0,esm/* delay */.gw)(300);
        API/* Messages.events.ownPersonaChanged.sendToAll */.Vm.events.ownPersonaChanged.sendToAll(undefined);
        return identifier;
    };
}
function useCreatePersonaByPrivateKey() {
    return async (privateKey, nickName)=>{
        const identifier = await API/* Services.Identity.createPersonaByPrivateKey */.K9.Identity.createPersonaByPrivateKey(privateKey, nickName);
        await (0,esm/* delay */.gw)(300);
        API/* Messages.events.ownPersonaChanged.sendToAll */.Vm.events.ownPersonaChanged.sendToAll(undefined);
        return identifier;
    };
}

// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(21526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.2_c6f532f0ffa0f9bea763747ab672d46f/node_modules/@mui/icons-material/Print.js
var Print = __webpack_require__(47553);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-qrcode-logo@2.5.0_757a802188413a36d4f24237d13b8e90/node_modules/react-qrcode-logo/dist/index.js
var dist = __webpack_require__(2863);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+system@5.4.2_03eb9a7115720fddaa34be5f9d89cc8e/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(25234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../icons/brands/MiniMask.tsx
var MiniMask = __webpack_require__(47146);
// EXTERNAL MODULE: ../icons/general/Info.tsx
var Info = __webpack_require__(40490);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-to-print@2.14.4_757a802188413a36d4f24237d13b8e90/node_modules/react-to-print/lib/index.js
var lib = __webpack_require__(66305);
// EXTERNAL MODULE: ../../node_modules/.pnpm/html-to-image@1.9.0/node_modules/html-to-image/es/index.js + 8 modules
var es = __webpack_require__(93537);
// EXTERNAL MODULE: ../dashboard/src/assets/index.ts
var assets = __webpack_require__(25126);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PreviewDialog.tsx











const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        preview: {
            position: 'relative',
            background: `url(${assets/* WatermarkURL */.wL}) repeat`,
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
            color: src/* MaskColorVar.secondaryInfoText */.ZN.secondaryInfoText,
            fontSize: 24,
            marginRight: 12
        }
    })
);
function PreviewDialog(props) {
    const { personaName , open , type , onClose  } = props;
    const t = (0,locales/* useDashboardI18N */.x)();
    const ref = (0,react.useRef)(null);
    const onPrint = (0,lib.useReactToPrint)({
        content: ()=>ref.current
    });
    const onDownload = async ()=>{
        if (!ref.current) return;
        const dataUrl = await (0,es/* toJpeg */.hi)(ref.current, {
            quality: 0.95
        });
        const link = document.createElement('a');
        link.download = `mask-persona-${personaName}.jpeg`;
        link.href = dataUrl;
        link.click();
    };
    const onClick = async ()=>{
        type === 'print' ? onPrint() : await onDownload();
        onClose();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: src/* MaskLightTheme */.Cp,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
            title: type === 'print' ? t.print_preview() : t.download_preview(),
            open: open,
            onClose: onClose,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                sx: {
                    marginTop: '-24px',
                    padding: '0'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ComponentToPrint, {
                        ...props,
                        ref: ref
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        padding: "0 24px 24px",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            size: "large",
                            fullWidth: true,
                            onClick: onClick,
                            children: type === 'print' ? t.print() : t.download()
                        })
                    })
                ]
            })
        })
    }));
}
const ComponentToPrint = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const { personaName , id , privateKey , words  } = props;
    const { classes  } = useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        display: "flex",
        justifyContent: "center",
        height: "100%",
        padding: "24px 24px 0",
        ref: ref,
        color: "#111432",
        sx: {
            background: '#fff'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            maxWidth: 746,
            className: classes.preview,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    className: classes.card,
                    display: "flex",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            flex: 1,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    paddingBottom: "8px",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MiniMask/* MiniMaskIcon */.q, {}),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
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
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    display: "flex",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            fontSize: 14,
                                            fontWeight: 600,
                                            width: 88,
                                            children: t.create_account_mask_id()
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            fontSize: 10,
                                            fontWeight: 600,
                                            sx: {
                                                wordBreak: 'break-all',
                                                flex: 1
                                            },
                                            children: id === null || id === void 0 ? void 0 : id.replace('ec_key:secp256k1/', '')
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                    display: "flex",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            fontSize: 14,
                                            fontWeight: 600,
                                            width: 88,
                                            children: t.create_account_private_key()
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
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
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(dist.QRCode, {
                            value: `mask://persona/privatekey/${privateKey}`,
                            ecLevel: "L",
                            size: 120,
                            quietZone: 6,
                            qrStyle: "dots"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    margin: "24px 0",
                    fontWeight: 600,
                    children: t.create_account_identity_id()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* MnemonicReveal */.i, {
                    words: words,
                    indexed: true,
                    wordClass: classes.wordClass
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    margin: "24px 0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* InfoIcon */.s, {
                            className: classes.infoIcon
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            fontSize: 12,
                            fontWeight: 700,
                            children: t.create_account_preview_tip()
                        })
                    ]
                })
            ]
        })
    }));
});

// EXTERNAL MODULE: ../icons/general/Download.tsx
var Download = __webpack_require__(85622);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/MnemonicRevealForm.tsx





















const MnemonicRevealForm = /*#__PURE__*/ (0,react.memo)(()=>{
    const createPersona = useCreatePersonaV2();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { state  } = (0,react_router/* useLocation */.TH)();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const { words , refreshCallback  } = (0,useMnemonicWordsPuzzle/* useMnemonicWordsPuzzle */.h)();
    const [preview, setPreview] = (0,react.useState)({
        open: false,
        type: 'print'
    });
    const [id, setId] = (0,react.useState)(null);
    const [privateKey1, setPrivateKey] = (0,react.useState)('');
    const [checked, setChecked] = (0,react.useState)(false);
    const create = async ()=>{
        try {
            const identifier = await createPersona(words.join(' '), state.personaName);
            setId(identifier);
            const privateKey = await API/* Services.Identity.exportPersonaPrivateKey */.K9.Identity.exportPersonaPrivateKey(identifier);
            setPrivateKey(privateKey);
            await changeCurrentPersona(identifier);
        } catch (error) {
            showSnackbar(error.message, {
                variant: 'error'
            });
        }
    };
    const onConfirm = async ()=>{
        if (!id) {
            await create();
        }
        navigate(`${shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia}`);
    };
    const onPreview = async (type)=>{
        if (!id) {
            await create();
        }
        setPreview({
            open: true,
            type
        });
    };
    (0,react.useEffect)(()=>{
        // handle refresh words
        if (!id) return;
        setId(null);
        API/* Services.Identity.deletePersona */.K9.Identity.deletePersona(id, 'delete even with private');
    }, [
        words
    ]);
    (0,useAsync/* default */.Z)(async ()=>{
        // handle refresh page after create
        const personas = await API/* Services.Identity.queryMyPersonas */.K9.Identity.queryMyPersonas();
        const persona = personas.find((p)=>p.nickname === state.personaName
        );
        if (!persona) return;
        API/* Services.Identity.deletePersona */.K9.Identity.deletePersona(persona.identifier, 'delete even with private');
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                        title: t.create_account_identity_title(),
                        action: {
                            name: t.create_account_sign_in_button(),
                            callback: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn)
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                        direction: "row",
                                        justifyContent: "flex-end",
                                        sx: {
                                            marginBottom: (theme)=>theme.spacing(2)
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                            variant: "text",
                                            startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Refresh/* default */.Z, {}),
                                            onClick: refreshCallback,
                                            children: t.refresh()
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Mnemonic/* MnemonicReveal */.i, {
                                        words: words
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                        control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                            checked: checked,
                                            onChange: (e)=>setChecked(e.target.checked)
                                        }),
                                        label: t.create_account_mnemonic_download_or_print(),
                                        sx: {
                                            marginTop: '8px'
                                        }
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonContainer/* ButtonContainer */.q, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                                size: "large",
                                                variant: "rounded",
                                                color: "primary",
                                                onClick: onConfirm,
                                                disabled: !checked,
                                                children: t.next()
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                onClick: ()=>onPreview('print')
                                                ,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Print/* default */.Z, {
                                                    style: {
                                                        stroke: src/* MaskColorVar.textLink */.ZN.textLink,
                                                        fill: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
                                                    }
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                onClick: ()=>onPreview('download')
                                                ,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Download/* DownloadIcon */._, {
                                                    color: "primary",
                                                    style: {
                                                        stroke: src/* MaskColorVar.textLink */.ZN.textLink,
                                                        fill: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
                                                    }
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PreviewDialog, {
                type: preview.type,
                open: preview.open,
                onClose: ()=>setPreview({
                        ...preview,
                        open: false
                    })
                ,
                personaName: state.personaName,
                id: id === null || id === void 0 ? void 0 : id.toText(),
                words: words,
                privateKey: privateKey1
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaNameUI.tsx










const Label = ({ value  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "body2",
        sx: {
            marginBottom: '8px',
            fontWeight: 'bolder',
            color: (theme)=>theme.palette.primary.main
        },
        children: value
    })
;
const PersonaNameUI = ({ onNext , error  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [personaName, setPersonaName] = (0,react.useState)('');
    const [helper, setHelper] = (0,react.useState)('');
    (0,react.useEffect)(()=>{
        setHelper('');
    }, [
        personaName
    ]);
    (0,react.useEffect)(()=>{
        if (error) setHelper(error);
    }, [
        error
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_persona_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                                required: true,
                                label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Label, {
                                    value: t.persona()
                                }),
                                InputProps: {
                                    disableUnderline: true
                                },
                                onChange: (e)=>setPersonaName(e.currentTarget.value)
                                ,
                                inputProps: {
                                    maxLength: 24
                                },
                                error: !!helper,
                                helperText: helper
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonContainer/* ButtonContainer */.q, {
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    size: "large",
                                    variant: "rounded",
                                    color: "primary",
                                    onClick: ()=>onNext(personaName)
                                    ,
                                    disabled: !personaName,
                                    children: t.next()
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {})
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaCreate.tsx








const PersonaCreate = ()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [error, setError] = (0,react.useState)('');
    const onNext = async (personaName)=>{
        setError('');
        const personas = await API/* Services.Identity.queryMyPersonas */.K9.Identity.queryMyPersonas();
        const existing = personas.some((x)=>x.nickname === personaName
        );
        if (existing) {
            return setError(t.create_account_persona_exists());
        }
        navigate(`${shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.MnemonicReveal */.X.MnemonicReveal}`, {
            replace: true,
            state: {
                personaName
            }
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaNameUI, {
        onNext: onNext,
        error: error
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/upperFirst.js + 1 modules
var upperFirst = __webpack_require__(75272);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../dashboard/src/components/ActionCard/index.tsx
var ActionCard = __webpack_require__(70470);
;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/ConnectSocialMedia.tsx












const ConnectSocialMedia = ()=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { currentPersona , connectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,react.useEffect)(()=>{
        if (currentPersona && (currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.linkedProfiles.length) > 0) {
            navigate(shared_base_src/* DashboardRoutes.Personas */.vq.Personas, {
                replace: true
            });
        }
    }, [
        currentPersona
    ]);
    const handleConnect = async (networkIdentifier)=>{
        if (currentPersona) {
            await connectPersona(currentPersona.identifier, networkIdentifier);
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* ColumnContentLayout */.pz, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentHeader/* Header */.h, {
                title: t.create_account_connect_social_media_title(),
                subtitle: t.create_account_persona_subtitle(),
                action: {
                    name: t.create_account_sign_in_button(),
                    callback: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn)
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ColumnContentLayout/* Body */.uT, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* PersonaLogoBox */.xK, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* SignUpAccountLogo */.g2, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                direction: "row",
                                justifyContent: "flex-end",
                                sx: {
                                    marginBottom: (theme)=>theme.spacing(4)
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Setup */.vq.Setup)
                                    ,
                                    children: t.go_back()
                                })
                            }),
                            definedSocialNetworks.map(({ networkIdentifier  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ActionCard/* ActionCard */.f, {
                                    title: t.create_account_connect_social_media({
                                        type: (0,upperFirst/* default */.Z)(networkIdentifier)
                                    }),
                                    icon: shared_src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                                    action: {
                                        type: 'primary',
                                        text: t.connect(),
                                        handler: ()=>handleConnect(networkIdentifier)
                                    }
                                }, networkIdentifier)
                            )
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ColumnContentLayout/* Footer */.$_, {})
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/PersonaRecovery.tsx













const PersonaRecovery = ()=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const createPersona = useCreatePersonaV2();
    const createPersonaByPrivateKey = useCreatePersonaByPrivateKey();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { state  } = (0,react_router/* useLocation */.TH)();
    const [error1, setError] = (0,react.useState)('');
    (0,useAsync/* default */.Z)(async ()=>{
        if (// eslint-disable-next-line @typescript-eslint/await-thenable
        (!(state === null || state === void 0 ? void 0 : state.mnemonic) || await (!API/* Services.Identity.validateMnemonic */.K9.Identity.validateMnemonic(state === null || state === void 0 ? void 0 : state.mnemonic.join(' ')))) && !(state === null || state === void 0 ? void 0 : state.privateKey)) {
            navigate(shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp, {
                replace: true
            });
        }
    }, [
        state === null || state === void 0 ? void 0 : state.mnemonic,
        state === null || state === void 0 ? void 0 : state.privateKey
    ]);
    const onNext = (0,react.useCallback)(async (personaName)=>{
        setError('');
        try {
            const identifier = (state === null || state === void 0 ? void 0 : state.mnemonic) ? await createPersona(state === null || state === void 0 ? void 0 : state.mnemonic.join(' '), personaName) : await createPersonaByPrivateKey(state === null || state === void 0 ? void 0 : state.privateKey, personaName);
            await changeCurrentPersona(identifier);
            showSnackbar(t.create_account_persona_successfully(), {
                variant: 'success'
            });
            await (0,esm/* delay */.gw)(300);
            navigate(`${shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp}/${routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia}`);
        } catch (error) {
            setError(error.message);
        }
    }, [
        state === null || state === void 0 ? void 0 : state.mnemonic,
        state === null || state === void 0 ? void 0 : state.privateKey
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaNameUI, {
        onNext: onNext,
        error: error1
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/steps/index.ts





;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/routes.tsx




const Actions = ()=>{
    const { action  } = (0,react_router/* useParams */.UO)();
    switch(action){
        case routePath/* SignUpRoutePath.MnemonicReveal */.X.MnemonicReveal:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {}));
        case routePath/* SignUpRoutePath.PersonaCreate */.X.PersonaCreate:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCreate, {}));
        case routePath/* SignUpRoutePath.PersonaRecovery */.X.PersonaRecovery:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRecovery, {}));
        case routePath/* SignUpRoutePath.ConnectSocialMedia */.X.ConnectSocialMedia:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectSocialMedia, {}));
        default:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MnemonicRevealForm, {}));
    }
};
const SignUpRoutes = ()=>{
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Routes */.Z5, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: ":action",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(Actions, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                path: "*",
                element: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCreate, {})
            })
        ]
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/SignUp/index.tsx



function SignUp() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RowLayout/* RowLayout */.V, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignUpRoutes, {})
    }));
};


/***/ }),

/***/ 47146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MiniMaskIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const MiniMaskIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('MiniMask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "white"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "white"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
            opacity: "0.5",
            clipPath: "url(#miniMask_clip0)",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M24.0002 47.1862C36.4744 47.1862 46.5867 37.038 46.5867 24.5195C46.5867 12.0011 36.4744 1.85286 24.0002 1.85286C11.5259 1.85286 1.41358 12.0011 1.41358 24.5195C1.41358 37.038 11.5259 47.1862 24.0002 47.1862ZM47.9154 24.5195C47.9154 37.7744 37.2082 48.5195 24.0002 48.5195C10.7922 48.5195 0.0849609 37.7744 0.0849609 24.5195C0.0849609 11.2647 10.7922 0.519531 24.0002 0.519531C37.2082 0.519531 47.9154 11.2647 47.9154 24.5195Z",
                    fill: "rgba(0,0,0,0.2)"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M38.4348 18.6197V26.5898H14.2268L13.1853 26.5899C14.2877 31.4258 18.6626 35.0381 23.8917 35.0381C28.2147 35.0381 31.954 32.5691 33.7429 28.981L38.4348 28.9809V35.6757C38.4348 37.2603 37.1342 38.5449 35.5298 38.5449H12.2902C10.6858 38.5449 9.38525 37.2603 9.38525 35.6757V18.6197H38.4348ZM30.9567 28.9809C29.4161 31.2056 26.8265 32.6655 23.8917 32.6655C20.9568 32.6655 18.3672 31.2056 16.8267 28.9809H30.9567ZM17.6966 20.5325C15.4201 20.5325 13.5368 22.1952 13.2236 24.3582L15.6998 24.3582C15.9721 23.5257 16.7632 22.9235 17.6966 22.9235C18.6301 22.9235 19.4212 23.5257 19.6935 24.3582L22.1697 24.3582C21.8565 22.1952 19.9732 20.5325 17.6966 20.5325ZM30.1234 20.5325C27.8469 20.5325 25.9636 22.1952 25.6503 24.3582L28.1265 24.3582C28.3988 23.5257 29.1899 22.9235 30.1234 22.9235C31.0569 22.9235 31.848 23.5257 32.1202 24.3582L34.5964 24.3582C34.2832 22.1952 32.3999 20.5325 30.1234 20.5325ZM35.5298 9.85254C37.1342 9.85254 38.4348 11.1371 38.4348 12.7218V16.2286H9.38525V12.7218C9.38525 11.1371 10.6858 9.85254 12.2902 9.85254H35.5298Z",
                    fill: "rgba(0,0,0,0.2)"
                })
            ]
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
                id: "miniMask_clip0",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
                    width: "47.8304",
                    height: "48",
                    fill: "white",
                    transform: "translate(0.0849609 0.519531)"
                })
            })
        })
    ]
}), undefined, '0 0 48 48');


/***/ }),

/***/ 85622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ DownloadIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const DownloadIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('DownloadIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M14 10v2.667A1.334 1.334 0 0112.667 14H3.333A1.334 1.334 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 40490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ InfoIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


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

/***/ }),

/***/ 56997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cccd7f512da1eb0b76b8.png";

/***/ }),

/***/ 65564:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b9761e20187cf2f5dd54.svg";

/***/ })

}]);