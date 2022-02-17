/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 77224:
/***/ ((module) => {

(function() {
	// The random number is a js implementation of the Xorshift PRNG
	var randseed = new Array(4); // Xorshift: [x, y, z, w] 32 bit values

	function seedrand(seed) {
		for (var i = 0; i < randseed.length; i++) {
			randseed[i] = 0;
		}
		for (var i = 0; i < seed.length; i++) {
			randseed[i%4] = ((randseed[i%4] << 5) - randseed[i%4]) + seed.charCodeAt(i);
		}
	}

	function rand() {
		// based on Java's String.hashCode(), expanded to 4 32bit values
		var t = randseed[0] ^ (randseed[0] << 11);

		randseed[0] = randseed[1];
		randseed[1] = randseed[2];
		randseed[2] = randseed[3];
		randseed[3] = (randseed[3] ^ (randseed[3] >> 19) ^ t ^ (t >> 8));

		return (randseed[3]>>>0) / ((1 << 31)>>>0);
	}

	function createColor() {
		//saturation is the whole color spectrum
		var h = Math.floor(rand() * 360);
		//saturation goes from 40 to 100, it avoids greyish colors
		var s = ((rand() * 60) + 40) + '%';
		//lightness can be anything from 0 to 100, but probabilities are a bell curve around 50%
		var l = ((rand()+rand()+rand()+rand()) * 25) + '%';

		var color = 'hsl(' + h + ',' + s + ',' + l + ')';
		return color;
	}

	function createImageData(size) {
		var width = size; // Only support square icons for now
		var height = size;

		var dataWidth = Math.ceil(width / 2);
		var mirrorWidth = width - dataWidth;

		var data = [];
		for(var y = 0; y < height; y++) {
			var row = [];
			for(var x = 0; x < dataWidth; x++) {
				// this makes foreground and background color to have a 43% (1/2.3) probability
				// spot color has 13% chance
				row[x] = Math.floor(rand()*2.3);
			}
			var r = row.slice(0, mirrorWidth);
			r.reverse();
			row = row.concat(r);

			for(var i = 0; i < row.length; i++) {
				data.push(row[i]);
			}
		}

		return data;
	}

  function buildOpts(opts) {
    var newOpts = {};

		newOpts.size = opts.size || 8;
		newOpts.scale = opts.scale || 4;
		newOpts.seed = opts.seed || Math.floor((Math.random()*Math.pow(10,16))).toString(16);
		newOpts.color = opts.color || createColor();
		newOpts.bgcolor = opts.bgcolor || createColor();
		newOpts.spotcolor = opts.spotcolor || createColor();

		seedrand(newOpts.seed);

    return newOpts;
  }

  function renderIcon(opts, canvas) {
    var opts = buildOpts(opts || {});

		var imageData = createImageData(opts.size);
		var width = Math.sqrt(imageData.length);

		canvas.width = canvas.height = opts.size * opts.scale;

		var cc = canvas.getContext('2d');
		cc.fillStyle = opts.bgcolor;
		cc.fillRect(0, 0, canvas.width, canvas.height);
		cc.fillStyle = opts.color;

		for(var i = 0; i < imageData.length; i++) {

			// if data is 0, leave the background
			if(imageData[i]) {
				var row = Math.floor(i / width);
				var col = i % width;

				// if data is 2, choose spot color, if 1 choose foreground
			  cc.fillStyle = (imageData[i] == 1) ? opts.color : opts.spotcolor;

				cc.fillRect(col * opts.scale, row * opts.scale, opts.scale, opts.scale);
			}
		}
    return canvas;
  }

	function createIcon(opts) {
    var opts = buildOpts(opts || {});
		var canvas = document.createElement('canvas');

    renderIcon(opts, canvas);

		return canvas;
	}

	var api = {
    create: createIcon,
    render: renderIcon
  };

  if (true) {
    module.exports = api;
  }
  if (typeof window !== "undefined") {
    window.blockies = api;
  }

})();


/***/ }),

/***/ 67431:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React vundefined
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(52458);var f=__webpack_require__(34539),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:n.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 24827:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React vundefined
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(52458),m=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;exports.SuspenseList=60120;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;m=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");exports.SuspenseList=w("react.suspense_list");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G=Array.isArray,H=Object.prototype.hasOwnProperty,I={current:null},J={key:!0,ref:!0,__self:!0,__source:!0};
function K(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!J.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),n=0;n<g;n++)f[n]=arguments[n+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:m,type:a,key:k,ref:h,props:d,_owner:I.current}}
function L(a,b){return{$$typeof:m,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function M(a){return"object"===typeof a&&null!==a&&a.$$typeof===m}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var N=/\/+/g;function O(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function P(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case m:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+O(h,0):e,G(d)?(c="",null!=a&&(c=a.replace(N,"$&/")+"/"),P(d,b,c,"",function(a){return a})):null!=d&&(M(d)&&(d=L(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(N,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(G(a))for(var g=0;g<a.length;g++){k=
a[g];var f=e+O(k,g);h+=P(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+O(k,g++),h+=P(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function Q(a,b,c){if(null==a)return a;var e=[],d=0;P(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function R(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}var S={current:null},T={transition:0},U={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:T,ReactCurrentOwner:I,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:Q,forEach:function(a,b,c){Q(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;Q(a,function(){b++});return b},toArray:function(a){return Q(a,function(a){return a})||[]},only:function(a){if(!M(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=I.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!J.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var n=0;n<f;n++)g[n]=arguments[n+2];e.children=g}return{$$typeof:m,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a){a={$$typeof:r,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=K;exports.createFactory=function(a){var b=K.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=M;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:R}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=T.transition;T.transition=1;try{a()}finally{T.transition=b}};exports.unstable_createMutableSource=function(a,b){return{_getVersion:b,_source:a,_workInProgressVersionPrimary:null,_workInProgressVersionSecondary:null}};
exports.unstable_useMutableSource=function(a,b,c){return S.current.useMutableSource(a,b,c)};exports.unstable_useOpaqueIdentifier=function(){return S.current.useOpaqueIdentifier()};exports.useCallback=function(a,b){return S.current.useCallback(a,b)};exports.useContext=function(a){return S.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return S.current.useDeferredValue(a)};exports.useEffect=function(a,b){return S.current.useEffect(a,b)};
exports.useImperativeHandle=function(a,b,c){return S.current.useImperativeHandle(a,b,c)};exports.useLayoutEffect=function(a,b){return S.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S.current.useMemo(a,b)};exports.useReducer=function(a,b,c){return S.current.useReducer(a,b,c)};exports.useRef=function(a){return S.current.useRef(a)};exports.useState=function(a){return S.current.useState(a)};exports.useTransition=function(){return S.current.useTransition()};exports.version="18.0.0-aecb3b6d1";


/***/ }),

/***/ 29886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K9": () => (/* binding */ Services),
/* harmony export */   "Vm": () => (/* binding */ Messages),
/* harmony export */   "NG": () => (/* binding */ PluginServices),
/* harmony export */   "yC": () => (/* binding */ PluginMessages),
/* harmony export */   "Bo": () => (/* binding */ setService),
/* harmony export */   "Z": () => (/* binding */ setMessages),
/* harmony export */   "cr": () => (/* binding */ setPluginServices),
/* harmony export */   "jg": () => (/* binding */ setPluginMessages)
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

/***/ 27527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "sP": () => (/* reexport */ IntergratedDashboard),
  "Gp": () => (/* reexport */ locales/* addDashboardI18N */.Gp),
  "Z": () => (/* reexport */ API/* setMessages */.Z),
  "jg": () => (/* reexport */ API/* setPluginMessages */.jg),
  "cr": () => (/* reexport */ API/* setPluginServices */.cr),
  "Bo": () => (/* reexport */ API/* setService */.Bo)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../dashboard/src/Dashboard.tsx


const Dashboard = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(2698), __webpack_require__.e(7696), __webpack_require__.e(3322), __webpack_require__.e(9037)]).then(__webpack_require__.bind(__webpack_require__, 44033))
);
function IntergratedDashboard() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
        fallback: "",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {
        })
    }));
}

// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(29886);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(28951);
;// CONCATENATED MODULE: ../dashboard/src/entry.tsx
// This entry is for dashboard used as a package (required by the main extension).
// Should only expose necessary API for setup the Dashboard API correctly.





/***/ }),

/***/ 28951:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kd": () => (/* reexport safe */ _i18n_generated__WEBPACK_IMPORTED_MODULE_12__.K),
/* harmony export */   "xF": () => (/* reexport safe */ _i18n_generated__WEBPACK_IMPORTED_MODULE_12__.x),
/* harmony export */   "Gp": () => (/* binding */ addDashboardI18N)
/* harmony export */ });
/* unused harmony export languages */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62012);
/* harmony import */ var _es_ES_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76353);
/* harmony import */ var _fa_IR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10282);
/* harmony import */ var _fr_FR_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2861);
/* harmony import */ var _it_IT_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72232);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97979);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75743);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59641);
/* harmony import */ var _ru_RU_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98028);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32284);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39675);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63371);
/* harmony import */ var _i18n_generated__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28074);
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback langauge in a family of langauges are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts













const languages = {
    en: _en_US_json__WEBPACK_IMPORTED_MODULE_0__,
    es: _es_ES_json__WEBPACK_IMPORTED_MODULE_1__,
    fa: _fa_IR_json__WEBPACK_IMPORTED_MODULE_2__,
    fr: _fr_FR_json__WEBPACK_IMPORTED_MODULE_3__,
    it: _it_IT_json__WEBPACK_IMPORTED_MODULE_4__,
    ja: _ja_JP_json__WEBPACK_IMPORTED_MODULE_5__,
    ko: _ko_KR_json__WEBPACK_IMPORTED_MODULE_6__,
    qy: _qya_AA_json__WEBPACK_IMPORTED_MODULE_7__,
    ru: _ru_RU_json__WEBPACK_IMPORTED_MODULE_8__,
    'zh-CN': _zh_CN_json__WEBPACK_IMPORTED_MODULE_9__,
    zh: _zh_TW_json__WEBPACK_IMPORTED_MODULE_10__
};
const addDashboardI18N = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_11__.createI18NBundle)('dashboard', languages);


/***/ }),

/***/ 92787:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27527);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76898);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49269);
/* harmony import */ var _plugins_Transak_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75474);
/* harmony import */ var _plugins_Trader_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59965);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13017);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47713);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(22920);
/* harmony import */ var _utils_createNormalReactRoot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(37904);

// @ts-ignore in case circle dependency make typescript complains









const msg = {
    Wallet: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletMessages */ .R,
    Swap: _plugins_Trader_messages__WEBPACK_IMPORTED_MODULE_5__/* .PluginTraderMessages */ .A,
    Transak: _plugins_Transak_messages__WEBPACK_IMPORTED_MODULE_4__/* .PluginTransakMessages */ .l
};
const rpc = {
    Wallet: _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC */ .V,
    Swap: _plugins_Trader_messages__WEBPACK_IMPORTED_MODULE_5__/* .PluginTraderRPC */ .V
};
// @ts-ignore To avoid build failure due to the circular project reference
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setService */ .Bo)(_service__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP);
// @ts-ignore
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setMessages */ .Z)(_utils_messages__WEBPACK_IMPORTED_MODULE_6__/* .MaskMessage */ .y);
// @ts-ignore
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setPluginServices */ .cr)(rpc);
// @ts-ignore
(0,_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .setPluginMessages */ .jg)(msg);
(0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_7__/* .startPluginDashboard */ .CB)((0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_8__/* .createPluginHost */ .R)());
(0,_utils_createNormalReactRoot__WEBPACK_IMPORTED_MODULE_9__/* .createNormalReactRoot */ .j)(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_dashboard__WEBPACK_IMPORTED_MODULE_1__/* .IntergratedDashboard */ .sP, {
}));


/***/ }),

/***/ 43148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gn": () => (/* binding */ USDC),
/* harmony export */   "AA": () => (/* binding */ USDT),
/* harmony export */   "lz": () => (/* binding */ BUSD),
/* harmony export */   "TP": () => (/* binding */ COMP),
/* harmony export */   "Ti": () => (/* binding */ MKR),
/* harmony export */   "uz": () => (/* binding */ MSKA),
/* harmony export */   "mW": () => (/* binding */ MSKB),
/* harmony export */   "Xw": () => (/* binding */ MSKC),
/* harmony export */   "h1": () => (/* binding */ DAI),
/* harmony export */   "s5": () => (/* binding */ AMPL),
/* harmony export */   "bi": () => (/* binding */ UST),
/* harmony export */   "c0": () => (/* binding */ ETHER),
/* harmony export */   "xZ": () => (/* binding */ QUICK),
/* harmony export */   "ML": () => (/* binding */ WBTC),
/* harmony export */   "uj": () => (/* binding */ RUNE),
/* harmony export */   "nB": () => (/* binding */ BTCB),
/* harmony export */   "J6": () => (/* binding */ maUSDC),
/* harmony export */   "lK": () => (/* binding */ NFTX),
/* harmony export */   "_S": () => (/* binding */ STETH),
/* harmony export */   "DX": () => (/* binding */ WETH),
/* harmony export */   "Nu": () => (/* binding */ WETH_ONLY),
/* harmony export */   "PM": () => (/* binding */ BIPS_BASE),
/* harmony export */   "IS": () => (/* binding */ ONE_BIPS),
/* harmony export */   "Bq": () => (/* binding */ SLIPPAGE_MIN),
/* harmony export */   "Nd": () => (/* binding */ SLIPPAGE_DEFAULT),
/* harmony export */   "Q9": () => (/* binding */ SLIPPAGE_MAX),
/* harmony export */   "ag": () => (/* binding */ DEFAULT_TRANSACTION_DEADLINE),
/* harmony export */   "rV": () => (/* binding */ L2_TRANSACTION_DEADLINE),
/* harmony export */   "J2": () => (/* binding */ PRICE_IMPACT_LOW),
/* harmony export */   "wh": () => (/* binding */ PRICE_IMPACT_MEDIUM),
/* harmony export */   "Wg": () => (/* binding */ PRICE_IMPACT_HIGH),
/* harmony export */   "EV": () => (/* binding */ PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN),
/* harmony export */   "lA": () => (/* binding */ PRICE_IMPACT_NON_EXPERT_BLOCKED),
/* harmony export */   "rI": () => (/* binding */ MINIMUM_AMOUNT)
/* harmony export */ });
/* unused harmony exports HUSD, MSKD, MSKE, OKB, EASY, eUSDC, eUSDT, eDAI, sUSD, UNITOKEN, TT01, TT02, IGG, OM, SUSHI, YAM, YFI, CAKE */
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);


const USDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDC_ADDRESS', 'USD Coin', 'USDC', 6);
const USDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('USDT_ADDRESS', 'Tether USD', 'USDT', 6);
const HUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('HUSD_ADDRESS', 'Huobi USD', 'HUSD', 6);
const BUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BUSD_ADDRESS', 'Huobi USD', 'BUSD', 6);
const COMP = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('COMP_ADDRESS', 'Compound', 'COMP', 18);
const MKR = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MKR_ADDRESS', 'Maker', 'MKR', 18);
const MSKA = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKA_ADDRESS', 'Mask A', 'MSKA', 18);
const MSKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKB_ADDRESS', 'Mask B', 'MSKB', 18);
const MSKC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKC_ADDRESS', 'Mask C', 'MSKC', 18);
const MSKD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKD_ADDRESS', 'Mask D', 'MSKD', 18);
const MSKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('MSKE_ADDRESS', 'Mask E', 'MSKE', 18);
const DAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('DAI_ADDRESS', 'Dai Stablecoin', 'DAI', 18);
const AMPL = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('AMPL_ADDRESS', 'Ampleforth', 'AMPL', 18);
const OKB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OKB_ADDRESS', 'Ampleforth', 'OKB', 18);
const UST = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UST_ADDRESS', 'Wrapped UST Token', 'UST', 18);
const EASY = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('EASY_ADDRESS', 'EASY', 'EASY', 18);
const eUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDC_ADDRESS', 'Easy USDC', 'eUSDC', 18);
const eUSDT = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eUSDT_ADDRESS', 'Easy USDT', 'eUSDT', 18);
const eDAI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('eDAI_ADDRESS', 'Easy DAI', 'eDAI', 18);
const sUSD = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('sUSD_ADDRESS', 'Synth sUSD', 'sUSD', 18);
const UNITOKEN = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('UNITOKEN_ADDRESS', 'Uniswap', 'UNI', 18);
const TT01 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT01_ADDRESS', 'Test Token 01', 'TT01', 18);
const TT02 = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('TT02_ADDRESS', 'Test Token 02', 'TT02', 18);
const ETHER = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('ETHER_ADDRESS', 'Ether', 'ETH', 18);
const QUICK = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('QUICK_ADDRESS', 'Quickswap', 'QUICK', 18);
const WBTC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WBTC_ADDRESS', 'Wrapped Bitcoin', 'WBTC', 18);
const IGG = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('IGG_ADDRESS', 'IG Gold', 'IGG', 18);
const OM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('OM_ADDRESS', 'OM Token', 'OM', 18);
const SUSHI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('SUSHI_ADDRESS', 'SushiToken', 'SUSHI', 18);
const YAM = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YAM_ADDRESS', 'YAM', 'YAM', 18);
const RUNE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('RUNE_ADDRESS', 'RUNE.ETH', 'RUNE', 18);
const YFI = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('YFI_ADDRESS', 'Yearn', 'YFI', 18);
const BTCB = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('BTCB_ADDRESS', 'Binance BTC', 'BTCB', 18);
const CAKE = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('CAKE_ADDRESS', 'PancakeSwap Token', 'CAKE', 18);
const maUSDC = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('maUSDC_ADDRESS', 'Matic Aave interest bearing USDC', 'maUSDC', 6);
const NFTX = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('NFTX_ADDRESS', 'NFTX', 'NFTX', 18);
const STETH = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('stETH_ADDRESS', 'stakedETH', 'stETH', 18);
var _name, _symbol;
const WETH = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .createERC20Tokens */ .vsu)('WETH_ADDRESS', (chainId)=>{
    var ref;
    return `Wrapped ${(_name = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.name) !== null && _name !== void 0 ? _name : 'Ether'}`;
}, (chainId)=>{
    var ref;
    return `W${(_symbol = (ref = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .getChainDetailed */ .$Gt)(chainId)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.symbol) !== null && _symbol !== void 0 ? _symbol : 'ETH'}`;
}, 18);
const WETH_ONLY = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Ropsten */ .a_e.Ropsten]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Kovan */ .a_e.Kovan]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Gorli */ .a_e.Gorli]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSCT */ .a_e.BSCT]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]: [
        WETH[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mumbai */ .a_e.Mumbai]
    ],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum */ .a_e.Arbitrum]: [],
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Arbitrum_Rinkeby */ .a_e.Arbitrum_Rinkeby]: []
};
const BIPS_BASE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000);
const ONE_BIPS = _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ONE.dividedBy */ .ryP.dividedBy(BIPS_BASE);
const SLIPPAGE_MIN = 10 // bips
;
const SLIPPAGE_DEFAULT = 50 // bips
;
const SLIPPAGE_MAX = 1000 // bips
;
const DEFAULT_TRANSACTION_DEADLINE = 30 /* minutes */  * 60 /* seconds */ ;
const L2_TRANSACTION_DEADLINE = 60 /* minutes */  * 5 /* seconds */ ;
const PRICE_IMPACT_LOW = 100 // 1%
;
const PRICE_IMPACT_MEDIUM = 300 // 3%
;
const PRICE_IMPACT_HIGH = 500 // 5%
;
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN = 1000 // 10%
;
// for non expert mode disable swaps above this
const PRICE_IMPACT_NON_EXPERT_BLOCKED = 1500 // 15%
;
const MINIMUM_AMOUNT = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())('1e-6');


/***/ }),

/***/ 59965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PluginTraderMessages),
/* harmony export */   "V": () => (/* binding */ PluginTraderRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47713);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86705);


if (false) {}
const PluginTraderMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);
const PluginTraderRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3, ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(211), __webpack_require__.e(1626), __webpack_require__.e(3375), __webpack_require__.e(4216)]).then(__webpack_require__.bind(__webpack_require__, 33036))
, PluginTraderMessages.rpc);


/***/ }),

/***/ 75474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47713);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62262);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);


/***/ }),

/***/ 12139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ DecryptFailedReason),
/* harmony export */   "Y": () => (/* binding */ WALLET_OR_PERSONA_NAME_MAX_LEN)
/* harmony export */ });
var DecryptFailedReason;
(function(DecryptFailedReason1) {
    DecryptFailedReason1["MyCryptoKeyNotFound"] = "MyCryptoKeyNotFound";
})(DecryptFailedReason || (DecryptFailedReason = {
}));
const WALLET_OR_PERSONA_NAME_MAX_LEN = 24;


/***/ }),

/***/ 37904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ createNormalReactRoot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24204);
/* harmony import */ var _components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31491);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5726);




function createNormalReactRoot(jsx, container) {
    var ref;
    if (!container) container = (ref = document.getElementById('root')) !== null && ref !== void 0 ? ref : void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot(container).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .NoEffectUsePortalShadowRootContext.Provider */ .XR.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .S, {
            children: jsx
        })
    }));
}


/***/ }),

/***/ 13017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ MaskMessage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type_transform_Serialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53066);


// This file should be free of side effects
if (false) {}
// This file is designed as HMR-safe.
/* unsupported import.meta.webpackHot */ undefined && 0;
const MaskMessage = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.WebExtensionMessage({
    domain: 'mask'
});
Object.assign(globalThis, {
    MaskMessage
});
MaskMessage.serialization = _type_transform_Serialization__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z;


/***/ }),

/***/ 21920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jw": () => (/* binding */ sideEffect),
/* harmony export */   "CU": () => (/* binding */ startEffect),
/* harmony export */   "Wu": () => (/* binding */ startEffects)
/* harmony export */ });
/**
 * There are some side effects in a module import.
 * Those side effects sometimes cause an error in the test(jest) env.
 *
 * To chain the sideEffect after this Promise,
 * the sideEffect will only be invoked in the non-test env.
 */ let invokeSideEffect;
const sideEffect = new Promise((resolve)=>invokeSideEffect = resolve
);
try {
    var ref, ref1;
    if (false) {} else if (false) {} else if ((ref1 = globalThis === null || globalThis === void 0 ? void 0 : (ref = globalThis.process) === null || ref === void 0 ? void 0 : ref.argv[1]) === null || ref1 === void 0 ? void 0 : ref1.includes('ssr')) {
    } else {
        throw new Error();
    }
} catch  {
    if (typeof invokeSideEffect === 'undefined') {
        const i = setInterval(()=>{
            if (typeof invokeSideEffect === 'undefined') return;
            clearInterval(i);
            invokeSideEffect();
        }, 10);
    } else {
        invokeSideEffect();
    }
}
function startEffect(hot, f) {
    const ac = new AbortController();
    if (!hot) {
        f(ac);
        return;
    }
    hot.dispose(f(ac));
    hot.dispose(()=>ac.abort()
    );
}
function startEffects(hot) {
    return startEffect.bind(null, hot);
}


/***/ }),

/***/ 87509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ useActivatedPluginsDashboard),
/* harmony export */   "C": () => (/* binding */ startPluginDashboard)
/* harmony export */ });
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9284);



const { activated , startDaemon , events  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)({
    getLoader: (plugin)=>plugin.Dashboard
});
const subscription = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on(_servie_events__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, f)
};
function useActivatedPluginsDashboard() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function startPluginDashboard(host) {
    startDaemon(host);
}


/***/ }),

/***/ 11555:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony export useActivatedPluginSNSAdaptorWithOperatingChainSupportedMet */
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9284);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63046);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22209);





const { events , activated , startDaemon  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)({
    getLoader: (plugin)=>plugin.SNSAdaptor
});
const subscription = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on(_servie_events__WEBPACK_IMPORTED_MODULE_4__/* .ALL_EVENTS */ .Ko, f)
};
function useActivatedPluginsSNSAdaptor() {
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useActivatedPluginSNSAdaptorWithOperatingChainSupportedMet() {
    const chainId = useChainId();
    const plugins = useActivatedPluginsSNSAdaptor();
    return plugins.reduce((acc, cur)=>{
        var ref;
        const operatingSupportedChains = (ref = cur.enableRequirement.web3) === null || ref === void 0 ? void 0 : ref.operatingSupportedChains;
        acc[cur.ID] = !Boolean(operatingSupportedChains) || Boolean(operatingSupportedChains === null || operatingSupportedChains === void 0 ? void 0 : operatingSupportedChains.includes(chainId));
        return acc;
    }, {
    });
}
function startPluginSNSAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(id);
        if (!def) return false;
        // boolean | undefined
        const status = def.enableRequirement.networks.networks[currentNetwork];
        if (def.enableRequirement.networks.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.networks.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 61182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ CurrentSNSNetwork)
/* harmony export */ });
var CurrentSNSNetwork;
(function(CurrentSNSNetwork1) {
    CurrentSNSNetwork1[CurrentSNSNetwork1["Unknown"] = 0] = "Unknown";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Facebook"] = 1] = "Facebook";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Twitter"] = 2] = "Twitter";
    CurrentSNSNetwork1[CurrentSNSNetwork1["Instagram"] = 3] = "Instagram";
})(CurrentSNSNetwork || (CurrentSNSNetwork = {
}));


/***/ }),

/***/ 35930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ IdentifierMap),
/* harmony export */   "d": () => (/* binding */ ReadonlyIdentifierMap)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20786);
/* harmony import */ var _serializer_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76117);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53408);



var _key;
var tmp = (_key = immer__WEBPACK_IMPORTED_MODULE_2__/* .immerable */ .sc, Symbol.iterator);
/**
 * The IdentifierMap is like a built-in Map<Identifier, T>.
 *
 * Because Identifier is not a value-type record so to make it behave like a value-type,
 * please use this class instead of Map<Identifier, T>.
 */ class IdentifierMap {
    get(key) {
        return this.__raw_map__.get(key.toText());
    }
    set(key, data) {
        if (!key) return this;
        if (this.constructorName.length) {
            if (!this.constructorName.includes(key.constructor.name)) {
                console.warn(`IdentifierMap found a invalid write try which violates the constraint ${this.constructorName}`, key);
                return this;
            }
        }
        this.__raw_map__.set(key.toText(), data);
        return this;
    }
    clear() {
        this.__raw_map__.clear();
    }
    delete(data) {
        return this.__raw_map__.delete(data.toText());
    }
    _identifierFromString(key) {
        const identifier = _type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(key);
        if (identifier.err) {
            console.warn('IdentifierMap found a key which cannot be converted into Identifier: ', identifier.val.message);
        } else {
            if (this.constructorName.length === 0) return identifier.val;
            if (this.constructorName.includes(identifier.val.constructor.name)) return identifier.val;
            console.warn(`IdentifierMap found a key which is not compatible with it constraint(${this.constructorName}), ${key}`);
        }
        return null;
    }
    *entries() {
        const iter = this.__raw_map__.entries();
        for (const [key, data] of iter){
            const identifier = this._identifierFromString(key);
            if (!identifier) continue;
            yield [
                identifier,
                data
            ];
        }
    }
    forEach(callbackfn, thisArg) {
        this.__raw_map__.forEach((value, key)=>{
            const i = this._identifierFromString(key);
            if (!i) return;
            callbackfn.call(thisArg, value, i, this);
        });
    }
    has(key) {
        return this.__raw_map__.has(key.toText());
    }
    *keys() {
        const iter = this.__raw_map__.keys();
        for (const key of iter){
            const i = this._identifierFromString(key);
            if (i) yield i;
            else continue;
        }
    }
    get size() {
        return [
            ...this.keys()
        ].length;
    }
    *values() {
        for (const [k, v] of this.entries())yield v;
    }
    [tmp]() {
        return this.entries();
    }
    /**
     *
     * @param __raw_map__ The origin data.
     * @param constructor The Identifier constructor. If provided, IdentifierMap will try to do a runtime check to make sure the identifier type is correct.
     */ constructor(__raw_map__, ...constructor){
        this.__raw_map__ = __raw_map__;
        this[_key] = true;
        this.constructorName = [];
        if (constructor) {
            this.constructorName = constructor.map((x)=>x.name
            );
        }
    }
}
(0,_serializer_index__WEBPACK_IMPORTED_MODULE_1__/* .serialize */ .q)('IdentifierMap')(IdentifierMap);
IdentifierMap.prototype[Symbol.toStringTag] = 'IdentifierMap';
// eslint-disable-next-line no-redeclare
const ReadonlyIdentifierMap = IdentifierMap;


/***/ }),

/***/ 20786:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xb": () => (/* binding */ Identifier),
/* harmony export */   "WO": () => (/* binding */ ProfileIdentifier),
/* harmony export */   "xI": () => (/* binding */ GroupIdentifier),
/* harmony export */   "_P": () => (/* binding */ PostIdentifier),
/* harmony export */   "bb": () => (/* binding */ PostIVIdentifier),
/* harmony export */   "ob": () => (/* binding */ ECKeyIdentifier),
/* harmony export */   "Np": () => (/* binding */ PersonaIdentifier)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76117);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);


/**
 * @internal symbol that used to construct this type from the Identifier
 */ const $fromString = Symbol();
const fromStringCache = new Map();
const fromString = (id, constructor)=>{
    let result = null;
    // the third overload
    if (id instanceof Identifier) result = id;
    else {
        const [type, ...rest] = id.split(':');
        // the second overload
        if (fromStringCache.has(id)) result = fromStringCache.get(id);
        else if (type === 'person') result = ProfileIdentifier[$fromString](rest.join(':'));
        else if (type === 'group') result = GroupIdentifier[$fromString](rest.join(':'));
        else if (type === 'post') result = PostIdentifier[$fromString](rest.join(':'));
        else if (type === 'post_iv') result = PostIVIdentifier[$fromString](rest.join(':'));
        else if (type === 'ec_key') result = ECKeyIdentifier[$fromString](rest.join(':'));
        else return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError('Unreachable case:' + type));
        fromStringCache.set(id, result);
    }
    const err = (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(`Can't cast to Identifier. Expected: ${(constructor === null || constructor === void 0 ? void 0 : constructor.name) || 'Any Identifier'}, Try to convert from string: ${id}`));
    if (!constructor) return result ? (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(result) : err;
    else if (result instanceof constructor) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(result);
    else return err;
};
class Identifier {
    static equals(a, b) {
        return !!(a === null || a === void 0 ? void 0 : a.equals(b));
    }
    equals(other) {
        if (!other) return false;
        return this === other || this.toText() === other.toText();
    }
    static IdentifiersToString(a, isOrderImportant = false) {
        const ax = a.map((x)=>x.toText()
        );
        if (!isOrderImportant) {
            ax.sort();
        }
        return ax.join(',');
    }
}
Identifier.fromString = fromString;
var tmp = $fromString;
class ProfileIdentifier extends Identifier {
    static getUserName(x) {
        if (typeof x === 'string') {
            if ([
                '',
                '$unknown'
            ].includes(x)) return null;
            return x;
        } else {
            if (x.isUnknown) return null;
            return x.userId;
        }
    }
    get isUnknown() {
        return this.equals(ProfileIdentifier.unknown);
    }
    toText() {
        return `person:${this.network}/${this.userId}`;
    }
    friendlyToText() {
        return `${this.userId}@${this.network}`;
    }
    static [tmp](str) {
        const [network, userId] = str.split('/');
        if (!network || !userId) return null;
        return new ProfileIdentifier(network, userId);
    }
    /**
     * @param network - Network belongs to
     * @param userId - User ID
     */ constructor(network, userId){
        super();
        this.network = network;
        this.userId = userId;
        noSlash(network);
        noSlash(userId);
    }
}
ProfileIdentifier.unknown = new ProfileIdentifier('localhost', '$unknown');
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('ProfileIdentifier')(ProfileIdentifier);
var tmp1 = $fromString;
class GroupIdentifier extends Identifier {
    static getFriendsGroupIdentifier(who, groupId) {
        return new GroupIdentifier(who.network, who.userId, groupId);
    }
    get ownerIdentifier() {
        if (this.virtualGroupOwner === null) return null;
        return new ProfileIdentifier(this.network, this.virtualGroupOwner);
    }
    toText() {
        return 'group:' + [
            this.network,
            this.virtualGroupOwner,
            this.groupID
        ].join('/');
    }
    get isReal() {
        return !this.virtualGroupOwner;
    }
    get isVirtual() {
        return !!this.virtualGroupOwner;
    }
    static [tmp1](str) {
        const [network1, belongs, groupID] = str.split('/');
        if (!network1 || !groupID) return null;
        return new GroupIdentifier(network1, belongs, groupID);
    }
    constructor(network1, virtualGroupOwner, groupID){
        super();
        this.network = network1;
        this.virtualGroupOwner = virtualGroupOwner;
        this.groupID = groupID;
        noSlash(network1);
        noSlash(groupID);
        if (virtualGroupOwner === '') this.virtualGroupOwner = null;
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('GroupIdentifier')(GroupIdentifier);
var tmp2 = $fromString;
class PostIdentifier extends Identifier {
    get isUnknown() {
        return this.equals(PostIdentifier.unknown);
    }
    toText() {
        return `post:${this.postId}/${this.identifier.toText()}`;
    }
    static [tmp2](str) {
        const [postId, ...identifier] = str.split('/');
        const id = Identifier.fromString(identifier.join('/'));
        if (id.err || !postId) return null;
        return new PostIdentifier(id.val, postId);
    }
    /**
     * If identifier is a PostIdentifier, that means this post is binded with other post in some kind
     * e.g. a comment.
     */ constructor(identifier, postId){
        super();
        this.identifier = identifier;
        this.postId = postId;
        noSlash(postId);
    }
}
PostIdentifier.unknown = new PostIdentifier(ProfileIdentifier.unknown, '$unknown');
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('PostIdentifier')(PostIdentifier);
var tmp3 = $fromString;
class PostIVIdentifier extends Identifier {
    toText() {
        return `post_iv:${this.network}/${this.postIV.replace(/\//g, '|')}`;
    }
    static [tmp3](str) {
        const [network2, iv] = str.split('/');
        if (!network2 || !iv) return null;
        return new PostIVIdentifier(network2, iv);
    }
    constructor(network2, postIV){
        super();
        this.network = network2;
        this.postIV = postIV;
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('PostIVIdentifier')(PostIVIdentifier);
var tmp4 = $fromString;
/**
 * This class identify the point on an EC curve.
 * ec_key:secp256k1/CompressedPoint
 */ class ECKeyIdentifier extends Identifier {
    toText() {
        var _encodedCompressedKey;
        const normalized = (_encodedCompressedKey = this.encodedCompressedKey) !== null && _encodedCompressedKey !== void 0 ? _encodedCompressedKey : this.compressedPoint.replace(/\//g, '|');
        return `ec_key:${this.curve}/${normalized}`;
    }
    static [tmp4](str) {
        const [curve, point] = str.split('/');
        if (curve !== 'secp256k1') return null;
        return new ECKeyIdentifier(curve, point);
    }
    constructor(curve, compressedPoint){
        super();
        this.curve = curve;
        this.compressedPoint = compressedPoint;
        this.type = 'ec_key';
    }
}
(0,_serializer__WEBPACK_IMPORTED_MODULE_0__/* .serialize */ .q)('ECKeyIdentifier')(ECKeyIdentifier);
// eslint-disable-next-line no-redeclare
const PersonaIdentifier = [
    ECKeyIdentifier
];
/**
 * Because "/" is used to split parts in identifier
 * we should reject the "/"
 *
 * If you want to use it, you must first convert to something other
 */ function noSlash(str) {
    if (!str) return;
    if (str.includes('/')) throw new TypeError('Cannot contain / in a part of identifier');
}


/***/ }),

/***/ 76117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ serialize),
/* harmony export */   "G": () => (/* binding */ serializer)
/* harmony export */ });
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72421);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64614);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12080);
/* harmony import */ var typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76374);
/* harmony import */ var typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4357);
/* harmony import */ var typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19004);
/* harmony import */ var typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71967);
/* harmony import */ var typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(82689);
/* harmony import */ var typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8__);
/// <reference path="./typeson.d.ts" />



// @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore

/** @internal */ function serialize(name, ser, des) {
    return (constructor)=>{
        Object.defineProperty(constructor, 'name', {
            configurable: true,
            enumerable: false,
            writable: false,
            value: name
        });
        typeson.register({
            [name]: ser && des ? [
                (x)=>x instanceof constructor
                ,
                ser,
                des
            ] : [
                (x)=>x instanceof constructor
                ,
                (x)=>{
                    const y = Object.assign({
                    }, x);
                    Object.getOwnPropertySymbols(y).forEach((x1)=>Reflect.deleteProperty(y, x1)
                    );
                    return typeson.encapsulate(y);
                },
                (x)=>{
                    const y = typeson.revive(x);
                    Object.setPrototypeOf(y, constructor.prototype);
                    return y;
                }, 
            ]
        });
        return constructor;
    };
}
const typeson = new (typeson__WEBPACK_IMPORTED_MODULE_0___default())({
});
typeson.register((typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3___default()));
typeson.register((typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default()));
typeson.register([
    (typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4___default()),
    (typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5___default()),
    (typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6___default()),
    (typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7___default()),
    (typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default())
]);
serialize('Ok')(ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok);
serialize('Err')(ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG);
serialize('BigNumber')(bignumber_js__WEBPACK_IMPORTED_MODULE_2__.BigNumber);
const serializer = {
    serialization (from) {
        return typeson.encapsulate(from);
    },
    deserialization (to) {
        try {
            return typeson.revive(to);
        } catch (error) {
            console.error(error);
        }
        return {
        };
    }
};


/***/ }),

/***/ 85942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "OZ": () => (/* reexport */ CrashUI/* CrashUI */.O),
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N),
  "LC": () => (/* reexport */ ProviderIcon/* ProviderIcon */.L),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "vT": () => (/* reexport */ TokenIcon/* TokenIconUI */.v),
  "no": () => (/* reexport */ TokenList/* TokenList */.n),
  "Pf": () => (/* reexport */ withErrorBoundary)
});

// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(72972);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenList/index.tsx + 1 modules
var TokenList = __webpack_require__(51041);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(56752);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var CrashUI = __webpack_require__(67899);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(62558);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ErrorBoundary, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        }));
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        }));
    }
    get normalizedError() {
        let stack = '<stack not available>';
        let type = 'UnknownError';
        let message = 'unknown error';
        try {
            stack = String(this.state.error.stack) || '<stack not available>';
            stack = stack.replace(/webpack-internal:.+node_modules\//g, 'npm:');
            // remove webpack-internal:///
            stack = stack.replace(/webpack-internal:\/{3}/g, '');
        } catch  {
        }
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {
        }
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {
        }
        return {
            stack,
            type,
            message
        };
    }
    constructor(...args){
        super(...args);
        this.state = {
            error: null
        };
    }
}

;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/index.ts




// EXTERNAL MODULE: ../shared/src/UI/components/ProviderIcon/index.tsx
var ProviderIcon = __webpack_require__(97331);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts







/***/ }),

/***/ 3078:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y_": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Y_),
/* harmony export */   "Jf": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.Jf),
/* harmony export */   "$P": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "UK": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.UK),
/* harmony export */   "pv": () => (/* reexport safe */ _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "_X": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__._X),
/* harmony export */   "Xh": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.Xh),
/* harmony export */   "F$": () => (/* reexport safe */ _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__.F),
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__.i),
/* harmony export */   "S8": () => (/* reexport safe */ _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "r8": () => (/* reexport safe */ _createGlobalState__WEBPACK_IMPORTED_MODULE_6__.r)
/* harmony export */ });
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22466);
/* harmony import */ var _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56753);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7082);
/* harmony import */ var _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30246);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54957);
/* harmony import */ var _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99058);
/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39326);









/***/ }),

/***/ 22466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useValueRef),
/* harmony export */   "UK": () => (/* binding */ useValueRefDelayed),
/* harmony export */   "Jf": () => (/* binding */ SubscriptionFromValueRef),
/* harmony export */   "Y_": () => (/* binding */ SubscriptionDebug),
/* harmony export */   "$P": () => (/* binding */ ValueRefFromSubscription)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88085);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);



function useValueRef(ref) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>ref.addListener(callback)
        })
    , [
        ref
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function useValueRefDelayed(ref, latency = 500) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>{
                return ref.addListener((newVal, oldVal)=>{
                    setTimeout(()=>callback(newVal, oldVal)
                    , latency);
                });
            }
        })
    , [
        ref,
        latency
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}
function SubscriptionFromValueRef(ref) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value
        ,
        subscribe: (sub)=>ref.addListener(sub)
    });
}
function SubscriptionDebug(x) {
    Object.defineProperty(x, '_value', {
        configurable: true,
        get: ()=>x.getCurrentValue()
    });
    return x;
}
function ValueRefFromSubscription(sub, eq) {
    const ref = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.ValueRef(sub.getCurrentValue(), eq);
    sub.subscribe(()=>ref.value = sub.getCurrentValue()
    );
    return ref;
}


/***/ }),

/***/ 63371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionDebug": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.Y_),
/* harmony export */   "SubscriptionFromValueRef": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.Jf),
/* harmony export */   "ValueRefFromSubscription": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.$P),
/* harmony export */   "createGlobalState": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.r8),
/* harmony export */   "useMenu": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.H9),
/* harmony export */   "useMenuConfig": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__._X),
/* harmony export */   "useMenuContext": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.Xh),
/* harmony export */   "useObservableValues": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.pv),
/* harmony export */   "useRemoteControlledDialog": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.F$),
/* harmony export */   "useScrollBottomEvent": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.S8),
/* harmony export */   "useSnackbarCallback": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.iD),
/* harmony export */   "useValueRef": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "useValueRefDelayed": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.UK),
/* harmony export */   "FormattedAddress": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.Kv),
/* harmony export */   "FormattedBalance": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.BV),
/* harmony export */   "FormattedCurrency": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_1__.bO),
/* harmony export */   "CrashUI": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.OZ),
/* harmony export */   "ErrorBoundary": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.SV),
/* harmony export */   "ErrorBoundaryBuildInfoContext": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.N3),
/* harmony export */   "ProviderIcon": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.LC),
/* harmony export */   "QRCode": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.s_),
/* harmony export */   "TokenIcon": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.T1),
/* harmony export */   "TokenIconUI": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.vT),
/* harmony export */   "TokenList": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.no),
/* harmony export */   "mergeClasses": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.ze),
/* harmony export */   "or": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.or),
/* harmony export */   "useImageFailOver": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.jt),
/* harmony export */   "useStylesExtends": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.Bc),
/* harmony export */   "withErrorBoundary": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_2__.Pf),
/* harmony export */   "SharedTrans": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.$M),
/* harmony export */   "addSharedI18N": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.zr),
/* harmony export */   "languages": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.Mj),
/* harmony export */   "useSharedI18N": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_3__.B_),
/* harmony export */   "getLocalImplementation": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.B),
/* harmony export */   "getLocalImplementationExotic": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.k),
/* harmony export */   "ALL_EVENTS": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Ko),
/* harmony export */   "ECKeyIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.ob),
/* harmony export */   "GroupIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.xI),
/* harmony export */   "Identifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.xb),
/* harmony export */   "IdentifierMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.qD),
/* harmony export */   "ObservableMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.vP),
/* harmony export */   "ObservableSet": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.n7),
/* harmony export */   "ObservableWeakMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.$f),
/* harmony export */   "PayloadVersions": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.eL),
/* harmony export */   "PersonaIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Np),
/* harmony export */   "PostIVIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bb),
/* harmony export */   "PostIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__._P),
/* harmony export */   "ProfileIdentifier": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.WO),
/* harmony export */   "ReadonlyIdentifierMap": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.dM),
/* harmony export */   "SessionStorageCache": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Hd),
/* harmony export */   "addI18NBundle": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.N_),
/* harmony export */   "createI18NBundle": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.C9),
/* harmony export */   "delay": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.gw),
/* harmony export */   "extractTextFromTypedMessage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Vc),
/* harmony export */   "fallbackLng": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.A9),
/* harmony export */   "getEnumAsObject": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Y0),
/* harmony export */   "isSerializableTypedMessage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.fV),
/* harmony export */   "isTypedMessageAnchor": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bj),
/* harmony export */   "isTypedMessageEmpty": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.YN),
/* harmony export */   "isTypedMessageEqual": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Hz),
/* harmony export */   "isTypedMessageImage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.c0),
/* harmony export */   "isTypedMessageImageV1": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.No),
/* harmony export */   "isTypedMessagePromise": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.KV),
/* harmony export */   "isTypedMessageText": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Rz),
/* harmony export */   "isTypedMessageTextV1": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Po),
/* harmony export */   "isTypedMessageTuple": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bZ),
/* harmony export */   "isTypedMessageTupleSerializable": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.qT),
/* harmony export */   "isTypedMessageUnknown": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.bt),
/* harmony export */   "isWellKnownCoreTypedMessages": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.q$),
/* harmony export */   "isWellKnownExtensionTypedMessages": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.SY),
/* harmony export */   "isWellKnownTypedMessages": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.rK),
/* harmony export */   "makeTypedMessageAnchor": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Jv),
/* harmony export */   "makeTypedMessageEmpty": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.WM),
/* harmony export */   "makeTypedMessageImage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.as),
/* harmony export */   "makeTypedMessagePromise": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Ng),
/* harmony export */   "makeTypedMessageSerializableTupleFromList": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.h6),
/* harmony export */   "makeTypedMessageText": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.P),
/* harmony export */   "makeTypedMessageTuple": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Zw),
/* harmony export */   "makeTypedMessageTupleFromList": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.n_),
/* harmony export */   "makeTypedMessageTupleSerializable": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.kT),
/* harmony export */   "makeTypedMessageUnknown": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.mv),
/* harmony export */   "normalizeTypedMessage": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.r6),
/* harmony export */   "parseURL": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Lk),
/* harmony export */   "pollingTask": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.s_),
/* harmony export */   "serializer": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.GM),
/* harmony export */   "timeout": () => (/* reexport safe */ _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__.Vs)
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3078);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34462);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43267);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80310);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72654);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58515);








/***/ }),

/***/ 72654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B": () => (/* reexport */ getLocalImplementation),
  "k": () => (/* reexport */ getLocalImplementationExotic)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
;// CONCATENATED MODULE: ../shared/src/utils/getLocalImplementation.tsx

// key = channel; value = local implementation
const RPCCache = new WeakMap();
/**
 * This function provides a localImplementation that is HMR ready.
 * To update, call this function with the SAME CHANNEL object.
 * It will "clone" all methods that impl returns.
 * @param name The name of the local implementation, used for logging
 * @param impl The implementation. Can be an async function.
 * @param ref The reference object that must be the same if you're updating.
 */ async function getLocalImplementation(name, impl, ref) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    if (!isBackground) return {
    };
    const isUpdate = RPCCache.has(ref);
    const localImpl = RPCCache.get(ref) || {
    };
    RPCCache.set(ref, localImpl);
    const result = await impl();
    for(const key in localImpl){
        if (!Reflect.has(result, key)) {
            delete localImpl[key];
            isUpdate && console.log(`[HMR] ${name}.${key} removed.`);
        } else if (result[key] !== localImpl[key]) {
            isUpdate && console.log(`[HMR] ${name}.${key} updated.`);
        }
    }
    for(const key1 in result){
        if (key1 === 'then') console.error('!!! Do not use "then" as your method name !!!');
        if (!Reflect.has(localImpl, key1)) isUpdate && console.log(`[HMR] ${name}.${key1} added.`);
        Object.defineProperty(localImpl, key1, {
            configurable: true,
            enumerable: true,
            value: result[key1]
        });
    }
    return localImpl;
}
async function getLocalImplementationExotic(name, impl, ref) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    if (!isBackground) return {
    };
    RPCCache.set(ref, await impl());
    return new Proxy({
    }, {
        get (_, key) {
            var ref1;
            if (key === 'then') return;
            // @ts-ignore
            return (ref1 = RPCCache.get(ref)) === null || ref1 === void 0 ? void 0 : ref1[key];
        }
    });
}

;// CONCATENATED MODULE: ../shared/src/utils/index.ts



/***/ }),

/***/ 12502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ ButtonGroupTabList)
});

// UNUSED EXPORTS: ButtonTab

// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTab.tsx
var ButtonGroupTab = __webpack_require__(31529);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(41362);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ButtonGroup/ButtonGroup.js + 1 modules
var ButtonGroup = __webpack_require__(33362);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+lab@5.0.0-alpha.43_42191b42baffe32ee67f0fa043aa9cd2/node_modules/@material-ui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(72717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTabList.tsx





/**
 * This component is like TabList + Tabs in the @material-ui.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @material-ui <Tab> component will work.
 *
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <ButtonGroupTabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </ButtonGroupTabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ const ButtonGroupTabList = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    const context = (0,TabContext/* useTabContext */._i)();
    if (context === null) throw new TypeError('No TabContext provided');
    const children = react.Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ (0,react.isValidElement)(child)) return child;
        const extra = {
            'aria-controls': (0,TabContext/* getPanelId */.uU)(context, child.props.value),
            id: (0,TabContext/* getTabId */.pQ)(context, child.props.value),
            selected: child.props.value === context.value,
            onChange: props.onChange
        };
        if (child.type === Tab/* default */.Z) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroupTab/* ButtonTab */.p, {
                value: child.props.value,
                ...extra,
                children: child.props.label
            }));
        }
        return(/*#__PURE__*/ (0,react.cloneElement)(child, extra));
    });
    const { onChange , ...rest } = props;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonGroup/* default */.Z, {
        ...rest,
        ref: ref,
        role: "tablist",
        children: children
    }));
});

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/index.ts




/***/ }),

/***/ 35557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CountdownButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27768);



function CountdownButton(props) {
    const { duration =60 , children , onClick , disabled , ...others } = props;
    const [countdown, setCountdown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const handleClick = (event)=>{
        setCountdown(duration);
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>clearTimeout(countdown)
    );
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (countdown) {
            const timer = setTimeout(()=>{
                setCountdown(countdown - 1);
            }, 1000);
            return ()=>{
                clearTimeout(timer);
            };
        }
        return ()=>{
        };
    }, [
        countdown
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        ...others,
        onClick: handleClick,
        disabled: !!countdown || disabled,
        children: [
            children,
            countdown ? ` (${countdown})` : ''
        ]
    }));
}


/***/ }),

/***/ 45242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ MaskDialog)
/* harmony export */ });
/* unused harmony export useMaskDialog */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6370);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83710);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49343);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91271);






/**
 * This component is used to provide a most common dialog practice in Mask design.
 *
 * But all the primitives are tweaked to fit the design
 * Therefore it also OK to not use this component if you need a special one.
 */ const MaskDialog = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { title , onBack , onClose , open , children , DialogProps , ...inferredDialogProps } = props;
    const dialogProps = {
        onBackdropClick: onClose,
        onClose,
        open,
        ...inferredDialogProps,
        ...DialogProps
    };
    const { extraProps , shouldReplaceExitWithBack  } = (0,_DialogStack__WEBPACK_IMPORTED_MODULE_4__/* .useDialogStackConsumer */ .N)(open);
    return (0,_ShadowRoot__WEBPACK_IMPORTED_MODULE_2__/* .usePortalShadowRoot */ .ad)((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            container: container,
            ...dialogProps,
            ...extraProps,
            children: [
                shouldReplaceExitWithBack ? // replace onClose with onBack when and only when there is no onBack
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DialogTitle__WEBPACK_IMPORTED_MODULE_3__/* .MaskDialogTitle */ .K, {
                    onBack: onBack || onClose,
                    onClose: onBack ? onClose : undefined,
                    children: title
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DialogTitle__WEBPACK_IMPORTED_MODULE_3__/* .MaskDialogTitle */ .K, {
                    onBack: onBack,
                    onClose: onClose,
                    children: title
                }),
                children
            ]
        })
    );
});
function useMaskDialog(title, content, actions) {
    const [isOpen, open] = useState(false);
    const onClose = useCallback(()=>open(false)
    , []);
    return(/*#__PURE__*/ _jsxs(MaskDialog, {
        onClose: onClose,
        open: isOpen,
        title: title,
        children: [
            /*#__PURE__*/ _jsx(DialogContent, {
                children: content
            }),
            /*#__PURE__*/ _jsx(DialogActions, {
                children: actions
            })
        ]
    }));
}


/***/ }),

/***/ 91271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useDialogStackConsumer)
/* harmony export */ });
/* unused harmony export DialogStackingProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29730);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7683);

/* eslint-disable no-bitwise */ /* eslint-disable @typescript-eslint/prefer-literal-enum-member */ 


/**
 * If you're using <Dialog> solely and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support `style` attribute and `disable`
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const {shouldReplaceExitWithBack, extraProps} = useDialogStackConsumer(open)
 *     return <>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </>
 * }
 */ function useDialogStackConsumer(open) {
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Type.None);
    const { enabled , openDialog , closeDialog  } = useDialogStackingContext();
    const { current: id  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Math.random());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        open ? openDialog(id, setStatus) : closeDialog(id);
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>closeDialog(id)
    , []);
    const shouldReplaceExitWithBack = !!(status & Type.shouldReplaceExitWithBack);
    const isTop = !!(status & Type.TopMostDialog);
    if (!enabled || !open) return {
        shouldReplaceExitWithBack: false,
        extraProps: {
            open
        }
    };
    if (isTop) return {
        shouldReplaceExitWithBack,
        extraProps: {
            open,
            transitionDuration: shouldReplaceExitWithBack ? 0 : undefined
        }
    };
    return {
        shouldReplaceExitWithBack,
        extraProps: {
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true,
            open,
            transitionDuration: shouldReplaceExitWithBack ? 0 : undefined
        }
    };
}
/**
 * This Provider can turn any `MaskDialog` or `InjectedDialog` in the subtree into a unified dialog.
 *
 * For example:
 *
 * ```tsx
 * <DialogStackingProvider>
 *    <Dialog1>
 *        <Dialog2></Dialog2>
 *    </Dialog1>
 * </DialogStackingProvider>
 * ```
 *
 * When Dialog1 and Dialog2 both opened, only Dialog2 will be visible and the left top button
 * becomes "BackArrow".
 */ function DialogStackingProvider(props) {
    return(/*#__PURE__*/ _jsx(Provider, {
        initialState: !props.disabled,
        children: props.children
    }));
}
function useDialogStackingContext() {
    try {
        return useContainer();
    } catch  {
        return {
            enabled: false,
            closeDialog: ()=>[]
            ,
            openDialog: ()=>[]
        };
    }
}
var Type;
(function(Type1) {
    Type1[Type1["None"] = 0] = "None";
    Type1[Type1["TopMostDialog"] = 1] = "TopMostDialog";
    Type1[Type1["shouldReplaceExitWithBack"] = 2] = "shouldReplaceExitWithBack";
})(Type || (Type = {
}));
function useStack(enabled = true) {
    const functions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Map());
    const stack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    function update() {
        for (const [id, update1] of functions.current){
            let result = Type.None;
            if (stack.current.length > 1 && (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(stack.current) !== id) result |= Type.shouldReplaceExitWithBack;
            if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(stack.current) === id) result |= Type.TopMostDialog;
            update1(result);
        }
    }
    return {
        enabled,
        openDialog: (id, onUpdate)=>{
            (functions.current = new Map(functions.current)).set(id, onUpdate);
            stack.current = [
                ...stack.current,
                id
            ];
            update();
        },
        closeDialog: (id)=>{
            (functions.current = new Map(functions.current)).delete(id);
            stack.current = stack.current.filter((x)=>x !== id
            );
            update();
        }
    };
}
const { Provider , useContainer  } = (0,unstated_next__WEBPACK_IMPORTED_MODULE_4__/* .createContainer */ .f)(useStack);


/***/ }),

/***/ 43115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "N8": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.N)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45242);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49343);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91271);





/***/ }),

/***/ 6378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ PhoneNumberField)
/* harmony export */ });
/* unused harmony export phoneRegexp */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8236);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15497);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68362);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34539);





const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    country: {
        width: '120px',
        marginRight: '10px'
    },
    phone: {
        width: '100%'
    }
});
// todo: remove regex, 123123d
const phoneRegexp = /(\+?([ .-])?\d{1,2}([ .-])?)?(\(?\d{3}\)?|\d{3})([ .-])?(\d{3}([ .-])?\d{4})/;
const PhoneNumberField = ({ label , value , error , onBlur , countryPlaceholder ='+1' , phoneErrorMessage ='The phone number is incorrect.' , onChange  })=>{
    const { classes  } = useStyles();
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.phone);
    const [countryCode, setCountryCode] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(value.country);
    const [invalidPhone, setInvalidPhone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const handleCountryCodeChange = (event)=>{
        const inputValue = event.target.value;
        const prefix = inputValue.startsWith('+') ? '' : '+';
        setCountryCode(prefix + inputValue);
        onChange === null || onChange === void 0 ? void 0 : onChange({
            country: inputValue,
            phone: phone
        });
    };
    const handlePhoneChange = (event)=>{
        const inputValue = event.target.value;
        setPhone(inputValue);
        onChange === null || onChange === void 0 ? void 0 : onChange({
            country: countryCode,
            phone: inputValue
        });
    };
    const validCheck = ()=>{
        if (!phone) return;
        const isValid = phoneRegexp.test(countryCode + phone);
        if (isValid) {
            onBlur === null || onBlur === void 0 ? void 0 : onBlur({
                country: countryCode,
                phone: phone
            });
        }
        setInvalidPhone(!isValid);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.country,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                            value: countryCode,
                            onChange: handleCountryCodeChange,
                            placeholder: countryPlaceholder
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
                        className: classes.phone,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                            fullWidth: true,
                            value: phone,
                            onChange: handlePhoneChange,
                            onBlur: validCheck,
                            type: "text",
                            error: invalidPhone || error,
                            helperText: invalidPhone || error ? phoneErrorMessage : ''
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 37783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ SendingCodeField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8236);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88808);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68362);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35557);





const SendingCodeField = ({ onSend , sendButtonText ='Send' , label , errorMessage , onBlur , disabled =false , onChange  })=>{
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(code);
    }, [
        code
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                    alignItems: "flex-start",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                            flex: 1,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField__WEBPACK_IMPORTED_MODULE_2__/* .MaskTextField */ .F, {
                                size: "small",
                                value: code,
                                onChange: (event)=>setCode(event.target.value)
                                ,
                                error: !!errorMessage,
                                helperText: errorMessage,
                                onBlur: ()=>{
                                    return onBlur === null || onBlur === void 0 ? void 0 : onBlur(code);
                                },
                                disabled: disabled
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_CountdownButton__WEBPACK_IMPORTED_MODULE_3__/* .CountdownButton */ .q, {
                            size: "medium",
                            sx: {
                                height: '40px',
                                width: '100px'
                            },
                            onClick: onSend,
                            disabled: disabled,
                            children: sendButtonText
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 68362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ MaskTextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1528);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8236);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76814);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(30255);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15497);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10525);





const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        root: {
            width: '100%'
        },
        label: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder'
        },
        field: {
            width: '100%',
            [`& > .${_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default.root */ .Z.root}`]: {
                paddingLeft: theme.spacing(0.5),
                borderLeft: 'solid 2px',
                borderRadius: '2px',
                fontSize: 12,
                lineHeight: '16px'
            }
        },
        input: {
            padding: theme.spacing(1),
            background: theme.palette.mode === 'dark' ? (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).lightBackground : (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).normalBackground,
            fontSize: 12,
            lineHeight: '16px'
        }
    })
);
const MaskTextField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
    const { label , sx , ...rest } = props;
    var ref1;
    const inputProps = (ref1 = props.inputProps) !== null && ref1 !== void 0 ? ref1 : {
    };
    const { classes  } = useStyles();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        sx: sx,
        children: [
            label && typeof label === 'string' && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                sx: {
                    mb: 1
                },
                variant: "body2",
                className: classes.label,
                children: label
            }),
            label && typeof label !== 'string' && label,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                ref: ref,
                ...rest,
                classes: {
                    root: classes.field
                },
                variant: "standard",
                InputProps: {
                    ...inputProps,
                    disableUnderline: true,
                    className: classes.input
                }
            })
        ]
    }));
});


/***/ }),

/***/ 83710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I3": () => (/* reexport safe */ _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   "zV": () => (/* reexport safe */ _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_1__.z),
/* harmony export */   "ad": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.d_),
/* harmony export */   "lr": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.lr),
/* harmony export */   "vg": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.vg),
/* harmony export */   "XR": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_2__.XR)
/* harmony export */ });
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95660);
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26493);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17067);





/***/ }),

/***/ 90341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* reexport */ useTabs)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../theme/src/hooks/useTabs.tsx


/**
 * @example
 *  const [currentTab, onChange, tabs, setTab] = useTab('tab1', 'tab2', 'tab3')
 *  return (
 *      <TabContext value={currentTab}>
 *          <TabList onChange={onChange}>
 *              <Tab label="Item One" value={tabs.tab1} />
 *              <Tab label="Item Two" value={tabs.tab2} />
 *              <Tab label="Item Three" value={tabs.tab3} />
 *          </TabList>
 *          <TabPanel value={tabs.tab1}>Item One</TabPanel>
 *          <TabPanel value={tabs.tab2}>Item Two</TabPanel>
 *          <TabPanel value={tabs.tab3}>Item Three</TabPanel>
 *      </TabContext>
 *  )
 */ function useTabs(defaultTab, ...possibleTabs) {
    const [currentTab, setTab] = (0,react.useState)(defaultTab);
    const enum_ = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>enum_[t] = t
    );
    const onChange = (0,react.useCallback)((event, value)=>{
        setTab(value);
    }, []);
    return [
        currentTab,
        onChange,
        enum_,
        setTab
    ];
}

;// CONCATENATED MODULE: ../theme/src/hooks/index.ts



/***/ }),

/***/ 60614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xw": () => (/* reexport safe */ _useERC20TokenContract__WEBPACK_IMPORTED_MODULE_0__.x)
/* harmony export */ });
/* harmony import */ var _useERC20TokenContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60657);
/* harmony import */ var _useERC721TokenContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20913);




/***/ }),

/***/ 63170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q": () => (/* binding */ useERC20TokenBytes32Contract),
  "E": () => (/* binding */ useERC20TokenBytes32Contracts)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/ERC20Bytes32.json
const ERC20Bytes32_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(14777);
;// CONCATENATED MODULE: ../web3-shared/src/contracts/useERC20TokenBytes32Contract.ts


function useERC20TokenBytes32Contract(address) {
    return (0,useContract/* useContract */.cq)(address, ERC20Bytes32_namespaceObject);
}
function useERC20TokenBytes32Contracts(listOfAddress, readonly = false) {
    return (0,useContract/* useContracts */.GP)(listOfAddress, ERC20Bytes32_namespaceObject, readonly);
}


/***/ }),

/***/ 47765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ useMulticallContract)
});

;// CONCATENATED MODULE: ../web3-contracts/abis/Multicall.json
const Multicall_namespaceObject = JSON.parse('[{"inputs":[],"name":"getCurrentBlockTimestamp","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"getEthBalance","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"gasLimit","type":"uint256"},{"internalType":"bytes","name":"callData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Call[]","name":"calls","type":"tuple[]"}],"name":"multicall","outputs":[{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"components":[{"internalType":"bool","name":"success","type":"bool"},{"internalType":"uint256","name":"gasUsed","type":"uint256"},{"internalType":"bytes","name":"returnData","type":"bytes"}],"internalType":"struct UniswapInterfaceMulticall.Result[]","name":"returnData","type":"tuple[]"}],"stateMutability":"nonpayable","type":"function"}]');
// EXTERNAL MODULE: ../web3-shared/src/constants/index.ts
var constants = __webpack_require__(14967);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(14777);
;// CONCATENATED MODULE: ../web3-shared/src/contracts/useMulticallContract.ts



function useMulticallContract() {
    const { MULTICALL_ADDRESS  } = (0,constants/* useEthereumConstants */.HV)();
    return (0,useContract/* useContract */.cq)(MULTICALL_ADDRESS, Multicall_namespaceObject);
}


/***/ }),

/***/ 29953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useAllowTestnet)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);

function useAllowTestnet() {
    return (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)().allowTestnet;
}


/***/ }),

/***/ 28953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useAssets)
/* harmony export */ });
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5143);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38614);
/* harmony import */ var _useAssetsFromChain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9505);
/* harmony import */ var _useAssetsFromProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30882);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34539);
/* harmony import */ var _useAssetsMerged__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68338);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98564);







function useAssets(tokens) {
    const wallet = (0,_useWallet__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)();
    const { value: nativeTokenDetailed , loading: nativeTokenDetailedLoading , error: nativeTokenDetailedError , retry: retryNativeTokenDetailed ,  } = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useNativeTokenDetailed */ .J)();
    const { value: assetsDetailedChain = [] , loading: assetsDetailedChainLoading , error: assetsDetailedChainError , retry: retryAssetsDetailedChain ,  } = (0,_useAssetsFromChain__WEBPACK_IMPORTED_MODULE_2__/* .useAssetsFromChain */ .R)(nativeTokenDetailed ? [
        nativeTokenDetailed,
        ...tokens
    ] : tokens);
    const { value: assetsDetailedProvider = [] , loading: assetsDetailedProviderLoading , error: assetsDetailedProviderError , retry: retryAssetsDetailedDebank ,  } = (0,_useAssetsFromProvider__WEBPACK_IMPORTED_MODULE_3__/* .useAssetsFromProvider */ .u)();
    const detailedTokensRetry = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(()=>{
        retryNativeTokenDetailed();
        retryAssetsDetailedChain();
        retryAssetsDetailedDebank();
    }, [
        retryNativeTokenDetailed,
        retryAssetsDetailedChain,
        retryAssetsDetailedDebank
    ]);
    const assetsDetailed = (0,_useAssetsMerged__WEBPACK_IMPORTED_MODULE_5__/* .useAssetsMerged */ .n)(assetsDetailedProvider, assetsDetailedChain);
    return {
        value: assetsDetailed.filter((x)=>{
            return !(wallet === null || wallet === void 0 ? void 0 : wallet.erc20_token_blacklist.has((0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .formatEthereumAddress */ .j8)(x.token.address)));
        }),
        error: nativeTokenDetailedError || assetsDetailedChainError || assetsDetailedProviderError,
        loading: nativeTokenDetailedLoading || assetsDetailedChainLoading || assetsDetailedProviderLoading,
        retry: detailedTokensRetry
    };
}


/***/ }),

/***/ 95197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ useBlockie)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77224);
/* harmony import */ var ethereum_blockies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__);


function useBlockie(address, options) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        const defaultOptions = {
            seed: address,
            color: '#dfe',
            bgcolor: '#aaa'
        };
        try {
            return (0,ethereum_blockies__WEBPACK_IMPORTED_MODULE_1__.create)({
                ...defaultOptions,
                ...options
            }).toDataURL();
        } catch  {
            return '';
        }
    }, [
        address
    ]);
}


/***/ }),

/***/ 78944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useChainColor)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17283);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60345);


function useChainColor() {
    const chainId = (0,_index__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xx)();
    return (0,_pipes__WEBPACK_IMPORTED_MODULE_1__/* .resolveChainColor */ ._E)(chainId);
}


/***/ }),

/***/ 75107:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useCollectibles)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6986);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98564);




function useCollectibles(address, chainId, provider, page, size) {
    const { getAssetsListNFT , getERC721TokensPaged  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Context */ .Z_)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        if (!address) {
            return {
                collectibles: [],
                hasNextPage: false
            };
        }
        // a list of mock data address:
        // 0x3c6137504c38215fea30605b3e364a23c1d3e14f
        // 0x65c1b9ae4e4d8dcccfd3dc41b940840fe8570f2a
        // 0xa357a589a37cf7b6edb31b707e8ed3219c8249ac
        const result = await getAssetsListNFT(address.toLowerCase(), chainId, provider, page, size);
        const erc721Tokens = await getERC721TokensPaged(page, size);
        return {
            collectibles: (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)([
                ...result.assets,
                ...erc721Tokens
            ], (a, b)=>(0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .isSameAddress */ .Wr)(a.contractDetailed.address, b.contractDetailed.address) && a.tokenId === b.tokenId
            ),
            hasNextPage: result.hasNextPage
        };
    }, [
        address,
        provider,
        page
    ]);
}


/***/ }),

/***/ 26974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useCurrentBlockTimestamp)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17952);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47765);


function useCurrentBlockTimestamp() {
    const multicallContract = (0,_contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_0__/* .useMulticallContract */ .g)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(async ()=>{
        return multicallContract === null || multicallContract === void 0 ? void 0 : multicallContract.methods.getCurrentBlockTimestamp().call();
    }, [
        multicallContract
    ]);
}


/***/ }),

/***/ 25518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useERC165)
/* harmony export */ });
/* unused harmony export ERC165_INTERFACE_ID */
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17952);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9429);


const ERC165_INTERFACE_ID = '0x01ffc9a7';
function useERC165(contract, address, interfaceId) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)(async ()=>{
        if (!contract) return false;
        try {
            const isERC165 = await contract.methods.supportsInterface(ERC165_INTERFACE_ID).call({
                from: account
            });
            const isVerify = await contract.methods.supportsInterface(interfaceId).call({
                from: account
            });
            return isERC165 && isVerify;
        } catch  {
            return false;
        }
    }, [
        account,
        address,
        interfaceId
    ]);
}


/***/ }),

/***/ 60402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ApproveStateType),
/* harmony export */   "S": () => (/* binding */ useERC20TokenApproveCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(97177);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70626);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60657);
/* harmony import */ var _useNonce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99224);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9429);
/* harmony import */ var _useGasPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56800);
/* harmony import */ var _useERC20TokenAllowance__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40464);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13988);
/* harmony import */ var _useTransactionState__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59710);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98564);












const MaxUint256 = new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff').toFixed();
var ApproveStateType;
(function(ApproveStateType1) {
    ApproveStateType1[ApproveStateType1["UNKNOWN"] = 0] = "UNKNOWN";
    ApproveStateType1[ApproveStateType1["NOT_APPROVED"] = 1] = "NOT_APPROVED";
    ApproveStateType1[ApproveStateType1["UPDATING"] = 2] = "UPDATING";
    ApproveStateType1[ApproveStateType1["PENDING"] = 3] = "PENDING";
    ApproveStateType1[ApproveStateType1["APPROVED"] = 4] = "APPROVED";
    ApproveStateType1[ApproveStateType1["FAILED"] = 5] = "FAILED";
})(ApproveStateType || (ApproveStateType = {
}));
function useERC20TokenApproveCallback(address, amount, spender) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_5__/* .useAccount */ .m)();
    const nonce = (0,_useNonce__WEBPACK_IMPORTED_MODULE_4__/* .useNonce */ .X)();
    const gasPrice = (0,_useGasPrice__WEBPACK_IMPORTED_MODULE_6__/* .useGasPrice */ .F)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenContract */ .x)(address);
    const [transactionState, setTransactionState] = (0,_useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .useTransactionState */ .p)();
    // read the approved information from the chain
    const { value: balance = '0' , loading: loadingBalance , error: errorBalance , retry: revalidateBalance ,  } = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_8__/* .useERC20TokenBalance */ .y)(address);
    const { value: allowance = '0' , loading: loadingAllowance , error: errorAllowance , retry: revalidateAllowance ,  } = (0,_useERC20TokenAllowance__WEBPACK_IMPORTED_MODULE_7__/* .useERC20TokenAllowance */ .n)(address, spender);
    // the computed approve state
    const approveStateType = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!amount || !spender) return ApproveStateType.UNKNOWN;
        if (loadingBalance || loadingAllowance) return ApproveStateType.UPDATING;
        if (errorBalance || errorAllowance) return ApproveStateType.FAILED;
        if (transactionState.type === _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n.WAIT_FOR_CONFIRMING) return ApproveStateType.PENDING;
        return (0,_utils__WEBPACK_IMPORTED_MODULE_10__/* .isLessThan */ .FI)(allowance, amount) ? ApproveStateType.NOT_APPROVED : ApproveStateType.APPROVED;
    }, [
        amount,
        spender,
        balance,
        allowance,
        errorBalance,
        errorAllowance,
        loadingAllowance,
        loadingBalance,
        transactionState.type, 
    ]);
    const approveCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (useExact = false)=>{
        if (approveStateType === ApproveStateType.UNKNOWN || !amount || !spender || !erc20Contract) {
            setTransactionState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
            });
            return;
        }
        // error: failed to approve token
        if (approveStateType !== ApproveStateType.NOT_APPROVED) {
            setTransactionState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Failed to approve token.')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).estimateGas({
                from: account
            }).catch((error)=>{
                useExact = !useExact;
                return erc20Contract.methods.approve(spender, amount).estimateGas({
                    from: account
                });
            }).catch((error)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            const promiEvent = erc20Contract.methods.approve(spender, useExact ? amount : MaxUint256).send(config);
            const revalidate = (0,lodash_es__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(()=>{
                revalidateBalance();
                revalidateAllowance();
            });
            promiEvent.on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.RECEIPT */ .iE.RECEIPT, (receipt)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n.CONFIRMED,
                    no: 0,
                    receipt
                });
                revalidate();
            }).on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.CONFIRMATION */ .iE.CONFIRMATION, (no, receipt)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.CONFIRMED */ .n.CONFIRMED,
                    no,
                    receipt
                });
                revalidate();
                resolve();
            }).on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.ERROR */ .iE.ERROR, (error)=>{
                setTransactionState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.FAILED */ .n.FAILED,
                    error
                });
                revalidate();
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        amount,
        balance,
        spender,
        loadingAllowance,
        loadingBalance,
        erc20Contract,
        approveStateType, 
    ]);
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        revalidateBalance();
        revalidateAllowance();
        setTransactionState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_9__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
        });
    }, [
        revalidateBalance,
        revalidateAllowance
    ]);
    return [
        {
            type: approveStateType,
            allowance,
            amount,
            spender,
            balance
        },
        transactionState,
        approveCallback,
        resetCallback, 
    ];
}


/***/ }),

/***/ 13988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useERC20TokenBalance)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17952);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9429);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60657);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69509);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1200);





/**
 * Fetch token balance from chain
 * @param token
 */ function useERC20TokenBalance(address) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_2__/* .useChainId */ .xx)();
    const blockNumber = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_3__/* .useBlockNumber */ .O)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_1__/* .useERC20TokenContract */ .x)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>{
        if (!account || !address || !erc20Contract) return undefined;
        return erc20Contract.methods.balanceOf(account).call({
            from: account
        });
    }, [
        account,
        blockNumber,
        chainId,
        address,
        erc20Contract
    ]);
}


/***/ }),

/***/ 24746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useERC20TokenDetailed),
/* harmony export */   "b": () => (/* binding */ useFungibleTokensDetailed)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17952);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70626);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69509);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60657);
/* harmony import */ var _contracts_useERC20TokenBytes32Contract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63170);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98564);








function useERC20TokenDetailed(address, token) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const erc20TokenContract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContract */ .x)(address);
    const erc20TokenBytes32Contract = (0,_contracts_useERC20TokenBytes32Contract__WEBPACK_IMPORTED_MODULE_5__/* .useERC20TokenBytes32Contract */ .Q)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(async ()=>{
        if (!address) return;
        if (!wallet_ts__WEBPACK_IMPORTED_MODULE_1__.EthereumAddress.isValid(address)) return;
        return getERC20TokenDetailed(address, chainId, erc20TokenContract, erc20TokenBytes32Contract, token);
    }, [
        chainId,
        token,
        erc20TokenContract,
        erc20TokenBytes32Contract,
        address
    ]);
}
function useFungibleTokensDetailed(listOfToken, _chainId) {
    const currentChainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xx)();
    const chainId = _chainId ? _chainId : currentChainId;
    const listOfAddress = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>listOfToken.map((t)=>t.address
        )
    , [
        JSON.stringify(listOfToken)
    ]);
    const erc20TokenContracts = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_4__/* .useERC20TokenContracts */ .S)(listOfAddress, true);
    const erc20TokenBytes32Contracts = (0,_contracts_useERC20TokenBytes32Contract__WEBPACK_IMPORTED_MODULE_5__/* .useERC20TokenBytes32Contracts */ .E)(listOfAddress, true);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(async ()=>Promise.all(listOfToken.map(async (token, i)=>{
            if (token.type === _types__WEBPACK_IMPORTED_MODULE_2__/* .EthereumTokenType.Native */ .Dr.Native) return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createNativeToken */ .$c)(chainId);
            const erc20TokenContract = erc20TokenContracts[i];
            const erc20TokenBytes32Contract = erc20TokenBytes32Contracts[i];
            return getERC20TokenDetailed(token.address, chainId, erc20TokenContract, erc20TokenBytes32Contract, token);
        }))
    , [
        chainId,
        JSON.stringify(listOfToken),
        JSON.stringify(erc20TokenContracts),
        JSON.stringify(erc20TokenBytes32Contracts), 
    ]);
}
const lazyBlank = Promise.resolve('');
const lazyZero = Promise.resolve('0');
async function getERC20TokenDetailed(address, chainId, erc20TokenContract, erc20TokenBytes32Contract, token) {
    var ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
    const results = await Promise.allSettled([
        (ref1 = (ref = token === null || token === void 0 ? void 0 : token.name) !== null && ref !== void 0 ? ref : erc20TokenContract === null || erc20TokenContract === void 0 ? void 0 : erc20TokenContract.methods.name().call()) !== null && ref1 !== void 0 ? ref1 : lazyBlank,
        (token === null || token === void 0 ? void 0 : token.name) ? lazyBlank : (ref2 = erc20TokenBytes32Contract === null || erc20TokenBytes32Contract === void 0 ? void 0 : erc20TokenBytes32Contract.methods.name().call()) !== null && ref2 !== void 0 ? ref2 : lazyBlank,
        (ref4 = (ref3 = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref3 !== void 0 ? ref3 : erc20TokenContract === null || erc20TokenContract === void 0 ? void 0 : erc20TokenContract.methods.symbol().call()) !== null && ref4 !== void 0 ? ref4 : lazyBlank,
        (token === null || token === void 0 ? void 0 : token.symbol) ? lazyBlank : (ref5 = erc20TokenBytes32Contract === null || erc20TokenBytes32Contract === void 0 ? void 0 : erc20TokenBytes32Contract.methods.symbol().call()) !== null && ref5 !== void 0 ? ref5 : lazyBlank,
        (ref7 = (ref6 = token === null || token === void 0 ? void 0 : token.decimals) !== null && ref6 !== void 0 ? ref6 : erc20TokenContract === null || erc20TokenContract === void 0 ? void 0 : erc20TokenContract.methods.decimals().call()) !== null && ref7 !== void 0 ? ref7 : lazyZero, 
    ]);
    const [name, nameBytes32, symbol, symbolBytes32, decimals] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .createERC20Token */ .wY)(chainId, address, typeof decimals === 'string' ? Number.parseInt(decimals, 10) : decimals, (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseStringOrBytes32 */ .UZ)(name, nameBytes32, 'Unknown Token'), (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .parseStringOrBytes32 */ .UZ)(symbol, symbolBytes32, 'Unknown'));
}


/***/ }),

/***/ 54897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ useERC20TokenDetailedFromTokenLists)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43402);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69509);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14967);





function useERC20TokenDetailedFromTokenLists(address) {
    const { ERC20_TOKEN_LISTS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .useEthereumConstants */ .HV)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const { fetchERC20TokensFromTokenLists  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Context */ .Z_)();
    const { value: allTokens = [] , loading: loadingAllTokens  } = (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>!ERC20_TOKEN_LISTS || ERC20_TOKEN_LISTS.length === 0 ? [] : fetchERC20TokensFromTokenLists(ERC20_TOKEN_LISTS, chainId)
    , [
        chainId,
        ERC20_TOKEN_LISTS === null || ERC20_TOKEN_LISTS === void 0 ? void 0 : ERC20_TOKEN_LISTS.sort().join()
    ]);
    return {
        loading: loadingAllTokens,
        tokensDetailed: allTokens.find((token)=>(0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr)(address, token.address)
        )
    };
}


/***/ }),

/***/ 55136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ useERC20TokensPaged)
/* harmony export */ });
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5143);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35324);



function useERC20TokensPaged(index, count) {
    const wallet = (0,_useWallet__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)();
    const { getERC20TokensPaged  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const { erc20TokensCount  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3State */ .dM)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        if (!wallet) return {
            tokens: [],
            count: 0
        };
        const erc20Tokens = await getERC20TokensPaged(index, count);
        return {
            tokens: erc20Tokens.filter((x)=>wallet.erc20_token_whitelist.has(x.address) && !wallet.erc20_token_blacklist.has(x.address)
            ),
            count: erc20TokensCount
        };
    }, [
        index,
        count
    ]);
}


/***/ }),

/***/ 15728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useEtherPrice)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);

function useEtherPrice() {
    return (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)().etherPrice;
}


/***/ }),

/***/ 90675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useFungibleTokenDetailed)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24746);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38614);




function useFungibleTokenDetailed(type, address, token) {
    const r1 = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .useNativeTokenDetailed */ .J)();
    const r2 = (0,_useERC20TokenDetailed__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenDetailed */ .k)(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : '', token);
    switch(type){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type);
    }
}


/***/ }),

/***/ 10828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ useFungibleTokenWatched)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _useTokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46449);
/* harmony import */ var _useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90675);
/* harmony import */ var _useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38614);





function useFungibleTokenWatched(initialToken) {
    const nativeToken = (0,_useNativeTokenDetailed__WEBPACK_IMPORTED_MODULE_4__/* .useNativeTokenDetailed */ .J)();
    const [token = nativeToken.value, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialToken);
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    var ref, ref1;
    const balance = (0,_useTokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useTokenBalance */ .m)((ref = token === null || token === void 0 ? void 0 : token.type) !== null && ref !== void 0 ? ref : _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native, (ref1 = token === null || token === void 0 ? void 0 : token.address) !== null && ref1 !== void 0 ? ref1 : '');
    var ref2, ref3;
    const detailed = (0,_useFungibleTokenDetailed__WEBPACK_IMPORTED_MODULE_3__/* .useFungibleTokenDetailed */ .j)((ref2 = token === null || token === void 0 ? void 0 : token.type) !== null && ref2 !== void 0 ? ref2 : _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native, (ref3 = token === null || token === void 0 ? void 0 : token.address) !== null && ref3 !== void 0 ? ref3 : '');
    return {
        amount,
        token: detailed,
        balance,
        setAmount,
        setToken
    };
}


/***/ }),

/***/ 47444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useMnemonicWordsPuzzle)
/* harmony export */ });
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38768);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35324);




// How many fields should be filled by the user?
const PUZZLE_SIZE = 5;
// The total count of mnemonic words.
const TOTAL_SIZE = 12;
function useMnemonicWordsPuzzle() {
    const [answerWords, setAnswerWords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const { createMnemonicWords  } = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .useWeb3Context */ .Z_)();
    const { value: words = [] , loading: wordsLoading , retry: wordsRetry ,  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(()=>createMnemonicWords()
    , []);
    //#region generate some mask indexes randomly which should be filled by the user
    const [seed, setSeed] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    const indexes = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(Array.from({
            length: TOTAL_SIZE
        }).fill(seed).map((_, i)=>i
        )).slice(0, PUZZLE_SIZE)
    , [
        seed,
        words
    ]);
    //#endregion
    //#region a serial of words and the user gonna complete those empty ones
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
    //#endregion
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
    return [
        words,
        puzzleWords,
        indexes,
        answerCallback,
        resetCallback,
        refreshCallback
    ];
}


/***/ }),

/***/ 47530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uC": () => (/* binding */ MulticalStateType),
/* harmony export */   "es": () => (/* binding */ useSingleContractMultipleData),
/* harmony export */   "w0": () => (/* binding */ useMutlipleContractSingleData)
/* harmony export */ });
/* unused harmony exports useMulticallCallback, useMutlicallStateDecoded, useMultipleContractMultipleData */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47765);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32311);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1200);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69509);






// conservative, hard-coded estimate of the current block gas limit
const CONSERVATIVE_BLOCK_GAS_LIMIT = 10000000;
// the default value for calls that don't specify gasRequired
const DEFAULT_GAS_REQUIRED = 200000;
const DEFAULT_GAS_LIMIT = 1000000;
//#endregion
//#region cached results
const cachedResults = {
};
function toCallKey(call) {
    return call.join('-');
}
function getCallResult(call, chainId, blockNumber) {
    const cache = cachedResults[chainId];
    var ref;
    const blockNumber_ = (ref = cache === null || cache === void 0 ? void 0 : cache.blockNumber) !== null && ref !== void 0 ? ref : 0;
    if (blockNumber_ < blockNumber) return;
    return cache.results[toCallKey(call)];
}
function setCallResult(call, result, chainId, blockNumber) {
    var _chainId;
    const cache = (_chainId = cachedResults[chainId]) !== null && _chainId !== void 0 ? _chainId : {
        results: [],
        blockNumber: 0
    };
    const blockNumber_ = cache.blockNumber;
    if (blockNumber_ > blockNumber) return;
    if (blockNumber_ < blockNumber) cache.blockNumber = blockNumber;
    cache.results[toCallKey(call)] = result;
    cachedResults[chainId] = cache;
}
// evenly distributes items among the chunks
function chunkArray(items, gasLimit = CONSERVATIVE_BLOCK_GAS_LIMIT * 10) {
    const chunks = [];
    let currentChunk = [];
    let currentChunkCumulativeGas = 0;
    for (const item of items){
        var ref;
        // calculate the gas required by the current item
        const gasRequired = (ref = item[1]) !== null && ref !== void 0 ? ref : DEFAULT_GAS_REQUIRED;
        // if the current chunk is empty, or the current item wouldn't push it over the gas limit,
        // append the current item and increment the cumulative gas
        if (currentChunk.length === 0 || currentChunkCumulativeGas + gasRequired < gasLimit) {
            currentChunk.push(item);
            currentChunkCumulativeGas += gasRequired;
        } else {
            // otherwise, push the current chunk and create a new chunk
            chunks.push(currentChunk);
            currentChunk = [
                item
            ];
            currentChunkCumulativeGas = gasRequired;
        }
    }
    if (currentChunk.length > 0) chunks.push(currentChunk);
    return chunks;
}
var MulticalStateType;
(function(MulticalStateType1) {
    MulticalStateType1[MulticalStateType1["UNKNOWN"] = 0] = "UNKNOWN";
    MulticalStateType1[MulticalStateType1[/** Wait for tx call */ "PENDING"] = 1] = "PENDING";
    MulticalStateType1[MulticalStateType1[/** Tx call resolved */ "SUCCEED"] = 2] = "SUCCEED";
    MulticalStateType1[MulticalStateType1[/** Tx call rejected */ "FAILED"] = 3] = "FAILED";
})(MulticalStateType || (MulticalStateType = {
}));
/**
 * The basic hook for fetching data from the Multicall contract
 * @param calls
 */ function useMulticallCallback() {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_5__/* .useChainId */ .xx)();
    const blockNumber = (0,_useBlockNumber__WEBPACK_IMPORTED_MODULE_4__/* .useBlockNumber */ .O)();
    const multicallContract = (0,_contracts_useMulticallContract__WEBPACK_IMPORTED_MODULE_1__/* .useMulticallContract */ .g)();
    const [multicallState, setMulticallState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        type: MulticalStateType.UNKNOWN
    });
    const multicallCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (calls, overrides)=>{
        if (calls.length === 0 || !multicallContract) {
            setMulticallState({
                type: MulticalStateType.UNKNOWN
            });
            return;
        }
        try {
            setMulticallState({
                type: MulticalStateType.PENDING
            });
            // filter out cached calls
            const unresolvedCalls = calls.filter((call_)=>!getCallResult(call_, chainId, blockNumber)
            );
            // resolve the calls by chunks
            if (unresolvedCalls.length) {
                await Promise.all(chunkArray(unresolvedCalls).map(async (chunk)=>{
                    // we don't mind the actual block number of the current call
                    const { returnData  } = await multicallContract.methods.multicall(chunk).call(overrides);
                    returnData.forEach((result, index)=>setCallResult(chunk[index], result, chainId, blockNumber)
                    );
                }));
            }
            var ref;
            setMulticallState({
                type: MulticalStateType.SUCCEED,
                results: calls.map((call)=>(ref = getCallResult(call, chainId, blockNumber)) !== null && ref !== void 0 ? ref : [
                        false,
                        '0x0',
                        '0x0'
                    ]
                )
            });
        } catch (error) {
            if (error instanceof Error) {
                setMulticallState({
                    type: MulticalStateType.FAILED,
                    error
                });
            }
            throw error;
        }
    }, [
        chainId,
        blockNumber,
        multicallContract
    ]);
    return [
        multicallState,
        multicallCallback
    ];
}
//#endregion
//#region useMutlicallStateDecoded
function useMutlicallStateDecoded(contracts, names, state) {
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_3__/* .useWeb3 */ .$)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (state.type !== MulticalStateType.SUCCEED) return [];
        if (contracts.length !== state.results.length) return [];
        return state.results.map(([succeed, gasUsed, result], index)=>{
            var ref;
            var ref1;
            // the ignore formatter for better reading
            // prettier-ignore
            const outputs = (ref1 = (ref = contracts[index].options.jsonInterface.find(({ type , name  })=>type === 'function' && name === names[index]
            )) === null || ref === void 0 ? void 0 : ref.outputs) !== null && ref1 !== void 0 ? ref1 : [];
            try {
                const value = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .decodeOutputString */ .mO)(web3, outputs, result);
                return {
                    succeed,
                    gasUsed,
                    value,
                    error: null
                };
            } catch (error) {
                return {
                    succeed: false,
                    gasUsed,
                    value: null,
                    error
                };
            }
        });
    }, [
        web3,
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        state
    ]);
}
//#endregion
function useSingleContractMultipleData(contract, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (!contract) return [];
        return callDatas.map((data, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...data).encodeABI(), 
            ]
        );
    }, [
        contract === null || contract === void 0 ? void 0 : contract.options.address,
        names.join(),
        callDatas.flatMap((x)=>x
        ).join()
    ]);
    const [state, callback] = useMulticallCallback();
    const results = useMutlicallStateDecoded(Array.from({
        length: calls.length
    }).fill(contract), names, state);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMutlipleContractSingleData(contracts, names, callData, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](...callData).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callData.join()
    ]);
    const [state, callback] = useMulticallCallback();
    const results = useMutlicallStateDecoded(contracts, names, state);
    return [
        results,
        calls,
        state,
        callback
    ];
}
function useMultipleContractMultipleData(contracts, names, callDatas, gasLimit = DEFAULT_GAS_LIMIT) {
    const calls = useMemo(()=>contracts.map((contract, i)=>[
                contract.options.address,
                gasLimit,
                contract.methods[names[i]](callDatas[i]).encodeABI(), 
            ]
        )
    , [
        contracts.map((x)=>x.options.address
        ).join(),
        names.join(),
        callDatas.flatMap((x)=>x
        ).join(),
        gasLimit
    ]);
    const [state, callback] = useMulticallCallback();
    const results = useMutlicallStateDecoded(contracts, names, state);
    return [
        results,
        calls,
        state,
        callback
    ];
}


/***/ }),

/***/ 2039:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ useNativeTokenBalance)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9429);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97673);



/**
 * Fetch native token balance from chain
 * @param address
 */ function useNativeTokenBalance() {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)();
    const balance = (0,_useBalance__WEBPACK_IMPORTED_MODULE_1__/* .useBalance */ .K)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        if (!account) return undefined;
        return balance;
    }, [
        account,
        balance
    ]);
}


/***/ }),

/***/ 38614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ useNativeTokenDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17952);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98564);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69509);



function useNativeTokenDetailed() {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>(0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .createNativeToken */ .$c)(chainId)
    , [
        chainId
    ]);
}


/***/ }),

/***/ 72854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* binding */ useNativeTokenWrapperCallback)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ../web3-contracts/abis/WETH.json
const WETH_namespaceObject = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]');
// EXTERNAL MODULE: ../web3-shared/src/constants/index.ts
var constants = __webpack_require__(14967);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(14777);
;// CONCATENATED MODULE: ../web3-shared/src/contracts/useWrappedEtherContract.ts



function useNativeTokenWrapperContract() {
    const { WETH_ADDRESS  } = (0,constants/* useTokenConstants */.kd)();
    return (0,useContract/* useContract */.cq)(WETH_ADDRESS, WETH_namespaceObject);
}

// EXTERNAL MODULE: ../web3-shared/src/hooks/useAccount.ts
var useAccount = __webpack_require__(9429);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(59710);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNonce.ts
var useNonce = __webpack_require__(99224);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useGasPrice.ts
var useGasPrice = __webpack_require__(56800);
// EXTERNAL MODULE: ../web3-shared/src/types/index.ts
var types = __webpack_require__(70626);
// EXTERNAL MODULE: ../web3-shared/src/utils/index.ts
var utils = __webpack_require__(98564);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useNativeTokenWrapperCallback.ts








function useNativeTokenWrapperCallback() {
    const nonce = (0,useNonce/* useNonce */.X)();
    const gasPrice = (0,useGasPrice/* useGasPrice */.F)();
    const account = (0,useAccount/* useAccount */.m)();
    const wrapperContract = useNativeTokenWrapperContract();
    const [transactionState, setTransactionState] = (0,useTransactionState/* useTransactionState */.p)();
    const wrapCallback = (0,react.useCallback)(async (amount)=>{
        if (!wrapperContract || !amount) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.UNKNOWN */.n.UNKNOWN
            });
            return;
        }
        // error: invalid deposit amount
        if ((0,utils/* isZero */.Fr)(amount)) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                error: new Error('Invalid deposit amount')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: useTransactionState/* TransactionStateType.WAIT_FOR_CONFIRMING */.n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            value: amount,
            gas: await wrapperContract.methods.deposit().estimateGas({
                from: account,
                value: amount
            }).catch((error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.deposit().send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.HASH */.n.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        wrapperContract
    ]);
    const unwrapCallback = (0,react.useCallback)(async (all = true, amount = '0')=>{
        if (!wrapperContract || !amount) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.UNKNOWN */.n.UNKNOWN
            });
            return;
        }
        // read balance
        const wethBalance = await wrapperContract.methods.balanceOf(account).call();
        // error: invalid withdraw amount
        if (all === false && (0,utils/* isZero */.Fr)(amount)) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                error: new Error('Invalid withdraw amount')
            });
            return;
        }
        // error: insufficent weth balance
        if (all === false && (0,utils/* isLessThan */.FI)(wethBalance, amount)) {
            setTransactionState({
                type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                error: new Error('Insufficent WETH balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransactionState({
            type: useTransactionState/* TransactionStateType.WAIT_FOR_CONFIRMING */.n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const withdrawAmount = all ? wethBalance : amount;
        const config = {
            from: account,
            gas: await wrapperContract.methods.withdraw(withdrawAmount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            wrapperContract.methods.withdraw(withdrawAmount).send(config).on(types/* TransactionEventType.TRANSACTION_HASH */.iE.TRANSACTION_HASH, (hash)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.HASH */.n.HASH,
                    hash
                });
                resolve(hash);
            }).on(types/* TransactionEventType.ERROR */.iE.ERROR, (error)=>{
                setTransactionState({
                    type: useTransactionState/* TransactionStateType.FAILED */.n.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        wrapperContract
    ]);
    const resetCallback = (0,react.useCallback)(()=>{
        setTransactionState({
            type: useTransactionState/* TransactionStateType.UNKNOWN */.n.UNKNOWN
        });
    }, []);
    return [
        transactionState,
        wrapCallback,
        unwrapCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 46449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useTokenBalance)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13988);
/* harmony import */ var _useERC721TokenBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29499);
/* harmony import */ var _useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2039);





function useTokenBalance(type, address) {
    const r1 = (0,_useNativeTokenBalance__WEBPACK_IMPORTED_MODULE_4__/* .useNativeTokenBalance */ .h)();
    const r2 = (0,_useERC20TokenBalance__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenBalance */ .y)(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? address : undefined);
    const r3 = (0,_useERC721TokenBalance__WEBPACK_IMPORTED_MODULE_3__/* .useERC721TokenBalance */ .l)(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC721 */ .Dr.ERC721 ? address : undefined);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC721 */ .Dr.ERC721:
            return r3;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155:
            throw new Error('To be implemented');
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ }),

/***/ 97825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useTransactions)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17952);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24982);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98564);





function useTransactions(address, page, size) {
    const { getTransactionList  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3Context */ .Z_)();
    const { portfolioProvider , chainId  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3State */ .dM)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>{
        const network = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getNetworkTypeFromChainId */ ._T)(chainId);
        if (!address || !network) {
            return {
                transactions: [],
                hasNextPage: false
            };
        }
        switch(portfolioProvider){
            case _types__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.DEBANK */ .g3.DEBANK:
            case _types__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.ZERION */ .g3.ZERION:
                return getTransactionList(address.toLowerCase(), network, portfolioProvider, page, size);
            default:
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(portfolioProvider);
        }
    }, [
        address,
        chainId,
        portfolioProvider,
        page,
        size
    ]);
}


/***/ }),

/***/ 36547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useTrustedERC20Tokens)
/* harmony export */ });
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5143);
/* harmony import */ var _useERC20Tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41477);


function useTrustedERC20Tokens() {
    const wallet = (0,_useWallet__WEBPACK_IMPORTED_MODULE_0__/* .useWallet */ .O)();
    const tokens = (0,_useERC20Tokens__WEBPACK_IMPORTED_MODULE_1__/* .useERC20Tokens */ .m)();
    if (!wallet) return [];
    return tokens.filter((x)=>wallet.erc20_token_whitelist.has(x.address) && !wallet.erc20_token_blacklist.has(x.address)
    );
}


/***/ }),

/***/ 84324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useWallets)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);



function useWallets(type) {
    const { providerType , wallets  } = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)();
    if (type === _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.Maskbook */ .lP.Maskbook) return wallets.filter((x)=>x.hasPrivateKey
    );
    if (type === providerType) return wallets.filter((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .currySameAddress */ .DC)(providerType));
    if (type) return [];
    return wallets;
}


/***/ }),

/***/ 22209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a_e": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.a_),
/* harmony export */   "wgL": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.wg),
/* harmony export */   "V2A": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.V2),
/* harmony export */   "Ej6": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Ej),
/* harmony export */   "W8g": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.W8),
/* harmony export */   "Wvq": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Wv),
/* harmony export */   "Drc": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.Dr),
/* harmony export */   "slS": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.sl),
/* harmony export */   "tds": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.td),
/* harmony export */   "g38": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.g3),
/* harmony export */   "lP_": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.lP),
/* harmony export */   "iED": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.iE),
/* harmony export */   "g8n": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.g8),
/* harmony export */   "sox": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.so),
/* harmony export */   "iWP": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.iW),
/* harmony export */   "uC5": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.uC),
/* harmony export */   "n$V": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.n$),
/* harmony export */   "OPC": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.OP),
/* harmony export */   "mAM": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mA),
/* harmony export */   "QEY": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.QE),
/* harmony export */   "LiV": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Li),
/* harmony export */   "l81": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.l8),
/* harmony export */   "OvB": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Ov),
/* harmony export */   "YTs": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.YT),
/* harmony export */   "x56": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.x5),
/* harmony export */   "K1": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.K1),
/* harmony export */   "xxU": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.xx),
/* harmony export */   "asy": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.as),
/* harmony export */   "dX_": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.dX),
/* harmony export */   "cqn": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.cq),
/* harmony export */   "GP$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.GP),
/* harmony export */   "PC_": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.PC),
/* harmony export */   "i1y": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.i1),
/* harmony export */   "Sj0": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Sj),
/* harmony export */   "yps": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.yp),
/* harmony export */   "kIC": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.kI),
/* harmony export */   "u85": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.u8),
/* harmony export */   "mP2": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mP),
/* harmony export */   "mrA": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mr),
/* harmony export */   "GTU": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.GT),
/* harmony export */   "ifX": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.if),
/* harmony export */   "jv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.jv),
/* harmony export */   "g3P": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.g3),
/* harmony export */   "bs0": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bs),
/* harmony export */   "Fh$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Fh),
/* harmony export */   "hx3": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.hx),
/* harmony export */   "w0B": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.w0),
/* harmony export */   "hjz": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.hj),
/* harmony export */   "JS1": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.JS),
/* harmony export */   "Hve": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Hv),
/* harmony export */   "bLq": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bL),
/* harmony export */   "XEd": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.XE),
/* harmony export */   "esU": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.es),
/* harmony export */   "mMq": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mM),
/* harmony export */   "pld": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.pl),
/* harmony export */   "nCS": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.nC),
/* harmony export */   "du_": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.du),
/* harmony export */   "Osb": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Os),
/* harmony export */   "rBi": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.rB),
/* harmony export */   "$6B": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.$6),
/* harmony export */   "ryP": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.ry),
/* harmony export */   "xEJ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.xE),
/* harmony export */   "buq": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.bu),
/* harmony export */   "wY6": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.wY),
/* harmony export */   "vsu": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.vs),
/* harmony export */   "OfD": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Of),
/* harmony export */   "$ch": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.$c),
/* harmony export */   "DC3": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.DC),
/* harmony export */   "dNj": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.dN),
/* harmony export */   "E$5": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.E$),
/* harmony export */   "azF": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.az),
/* harmony export */   "xGv": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.xG),
/* harmony export */   "j8w": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.j8),
/* harmony export */   "mHs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.mH),
/* harmony export */   "rlw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.rl),
/* harmony export */   "f1r": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.f1),
/* harmony export */   "$Gt": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.$G),
/* harmony export */   "EXI": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.EX),
/* harmony export */   "npC": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.np),
/* harmony export */   "EP9": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.EP),
/* harmony export */   "qzE": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.qz),
/* harmony export */   "NXR": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.NX),
/* harmony export */   "_Te": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__._T),
/* harmony export */   "pLw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.pL),
/* harmony export */   "yXb": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.yX),
/* harmony export */   "JiD": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Ji),
/* harmony export */   "d5_": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.d5),
/* harmony export */   "lQR": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.lQ),
/* harmony export */   "T1o": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.T1),
/* harmony export */   "FIT": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.FI),
/* harmony export */   "tYA": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.tY),
/* harmony export */   "JVY": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.JV),
/* harmony export */   "Wr$": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Wr),
/* harmony export */   "Fr9": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Fr),
/* harmony export */   "Siq": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Si),
/* harmony export */   "I30": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.I3),
/* harmony export */   "wAG": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.wA),
/* harmony export */   "V3": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.V3),
/* harmony export */   "vyt": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.vy),
/* harmony export */   "Q_Z": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.Q_),
/* harmony export */   "r5m": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.r5),
/* harmony export */   "CSY": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.CS),
/* harmony export */   "wg4": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.wg),
/* harmony export */   "nWu": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.nW),
/* harmony export */   "HwK": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.Hw),
/* harmony export */   "yWL": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.yW),
/* harmony export */   "z4": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__.z4),
/* harmony export */   "Qgv": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_4__.Qg),
/* harmony export */   "N9M": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_4__.N9),
/* harmony export */   "DJp": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.DJ),
/* harmony export */   "afC": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.af),
/* harmony export */   "Hkb": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.Hk),
/* harmony export */   "t06": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.t0),
/* harmony export */   "GVo": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.GV),
/* harmony export */   "aV4": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.aV),
/* harmony export */   "Grw": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.Gr),
/* harmony export */   "$on": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.$o),
/* harmony export */   "HVQ": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.HV),
/* harmony export */   "N_d": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.N_),
/* harmony export */   "JHm": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.JH),
/* harmony export */   "mgD": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.mg),
/* harmony export */   "tL1": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.tL),
/* harmony export */   "j8Y": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.j8),
/* harmony export */   "AAz": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.AA),
/* harmony export */   "hyB": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.hy),
/* harmony export */   "kdE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.kd),
/* harmony export */   "L7X": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_5__.L7),
/* harmony export */   "xwH": () => (/* reexport safe */ _contracts__WEBPACK_IMPORTED_MODULE_6__.xw)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70626);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17283);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60345);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35324);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14967);
/* harmony import */ var _contracts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60614);









/***/ }),

/***/ 60345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "wg": () => (/* binding */ resolveNetworkAddress),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink)
/* harmony export */ });
/* unused harmony exports resolveChainName, resolveChainFullName, resolveCollectibleProviderLink */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70626);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98564);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_3__);




function resolveProviderName(providerType) {
    switch(providerType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.Maskbook */ .lP.Maskbook:
            return 'Mask';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.MetaMask */ .lP.MetaMask:
            return 'MetaMask';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.WalletConnect */ .lP.WalletConnect:
            return 'WalletConnect';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork:
            return 'CustomNetwork';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(providerType);
            return 'Unknown Network';
    }
}
function resolveNetworkAddress(networkType, address) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance:
            return `binance:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon:
            return `polygon:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum:
            return `ethereum:${address}`;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return `arbitrum:${address}`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return address;
    }
}
function resolveNetworkName(networkType) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .td.Binance:
            return 'Binance Smart Chain';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .td.Polygon:
            return 'Polygon';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .td.Ethereum:
            return 'Ethereum';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return 'Arbitrum';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return 'Unknown';
    }
}
function resolveChainName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown';
}
function resolveChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown';
}
function resolveChainColor(chainId) {
    switch(chainId){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_.Mainnet:
            return 'rgb(41, 182, 175)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Ropsten */ .a_.Ropsten:
            return 'rgb(255, 74, 141)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Kovan */ .a_.Kovan:
            return 'rgb(112, 87, 255)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby:
            return 'rgb(246, 195, 67)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Gorli */ .a_.Gorli:
            return 'rgb(48, 153, 242)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSCT */ .a_.BSCT:
            return 'rgb(240, 185, 10)';
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mumbai */ .a_.Mumbai:
            return 'rgb(130, 71, 229)';
        default:
            return 'rgb(214, 217, 220)';
    }
}
function resolveLinkOnExplorer(chainId) {
    var ref, ref1;
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) return '';
    var ref2;
    return (ref2 = (ref = chainDetailed.explorers) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.url) !== null && ref2 !== void 0 ? ref2 : chainDetailed.infoURL;
}
function resolveTransactionLinkOnExplorer(chainId, tx) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/tx/:tx', {
        tx
    });
}
function resolveTokenLinkOnExplorer({ chainId , address  }) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/token/:address', {
        address
    });
}
function resolveAddressLinkOnExplorer(chainId, address) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/address/:address', {
        address
    });
}
function resolveBlockLinkOnExplorer(chainId, block) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveLinkOnExplorer(chainId), '/block/:block', {
        block
    });
}
function resolveIPFSLink(ipfs) {
    return urlcat__WEBPACK_IMPORTED_MODULE_3___default()('https://ipfs.fleek.co/ipfs/:ipfs', {
        ipfs
    });
}
function resolveCollectibleProviderLink(chainId, provider) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .CollectibleProvider.OPENSEAN */ .wg.OPENSEAN:
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Rinkeby */ .a_.Rinkeby) return `https://testnets.opensea.io`;
            return `https://opensea.io`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}
function resolveCollectibleLink(chainId, provider, { contractDetailed: { address  } , tokenId  }) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .CollectibleProvider.OPENSEAN */ .wg.OPENSEAN:
            return urlcat__WEBPACK_IMPORTED_MODULE_3___default()(resolveCollectibleProviderLink(chainId, provider), '/assets/:address/:tokenId', {
                address,
                tokenId
            });
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}


/***/ }),

/***/ 26267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ji": () => (/* binding */ isChainIdValid),
/* harmony export */   "yX": () => (/* binding */ isChainIdMainnet),
/* harmony export */   "lQ": () => (/* binding */ isEIP1159Supported),
/* harmony export */   "$G": () => (/* binding */ getChainDetailed),
/* harmony export */   "EX": () => (/* binding */ getChainDetailedCAIP),
/* harmony export */   "NX": () => (/* binding */ getChainRPC),
/* harmony export */   "qz": () => (/* binding */ getChainName),
/* harmony export */   "np": () => (/* binding */ getChainIdFromName),
/* harmony export */   "EP": () => (/* binding */ getChainIdFromNetworkType),
/* harmony export */   "_T": () => (/* binding */ getNetworkTypeFromChainId)
/* harmony export */ });
/* unused harmony exports getChainShortName, getChainFullName */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _assets_chains_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13790);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14967);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70626);




function isChainIdValid(chainId, allowTestnet = false) {
    const chainDetailed = getChainDetailed(chainId);
    return !!getNetworkTypeFromChainId(chainId) && ((chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet' || allowTestnet);
}
function isChainIdMainnet(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    return (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) === 'mainnet';
}
function isEIP1159Supported(chainId) {
    var ref;
    var ref1;
    const features = (ref1 = (ref = getChainDetailed(chainId)) === null || ref === void 0 ? void 0 : ref.features) !== null && ref1 !== void 0 ? ref1 : [];
    return features.includes('EIP1159');
}
function getChainDetailed(chainId = _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet) {
    return _assets_chains_json__WEBPACK_IMPORTED_MODULE_1__.find((x)=>x.chainId === chainId
    );
}
// Learn more: https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
function getChainDetailedCAIP(chainId = _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet) {
    const chainDetailed = getChainDetailed(chainId);
    const { RPC =[]  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .getRPCConstants */ .t0)(chainId);
    if (!chainDetailed) return;
    return {
        chainId: `0x${chainDetailed.chainId.toString(16)}`,
        chainName: chainDetailed.name,
        nativeCurrency: chainDetailed.nativeCurrency,
        rpcUrls: RPC,
        blockExplorerUrls: [
            chainDetailed.explorers && chainDetailed.explorers.length > 0 && chainDetailed.explorers[0].url ? chainDetailed.explorers[0].url : chainDetailed.infoURL, 
        ]
    };
}
function getChainRPC(chainId, seed) {
    const { RPC , RPC_WEIGHTS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .getRPCConstants */ .t0)(chainId);
    if (!RPC || !RPC_WEIGHTS) throw new Error('Unknown chain id.');
    return RPC[RPC_WEIGHTS[seed]];
}
function getChainName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainShortName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.shortName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainFullName(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown Network';
}
function getChainIdFromName(name) {
    if (!name) return;
    var _fullName;
    const chainDetailed = _assets_chains_json__WEBPACK_IMPORTED_MODULE_1__.find((x)=>[
            x.chain,
            x.network,
            x.name,
            x.shortName,
            (_fullName = x.fullName) !== null && _fullName !== void 0 ? _fullName : ''
        ].filter(Boolean).map((y)=>y.toLowerCase()
        ).includes(name.toLowerCase())
    );
    return chainDetailed && getNetworkTypeFromChainId(chainDetailed.chainId) ? chainDetailed.chainId : undefined;
}
function getChainIdFromNetworkType(networkType) {
    switch(networkType){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSC */ .a_.BSC;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic;
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum:
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum */ .a_.Arbitrum;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(networkType);
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet;
    }
}
function getNetworkTypeFromChainId(chainId) {
    const chainDetailed = getChainDetailed(chainId);
    switch(chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chain){
        case 'ETH':
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum;
        case 'BSC':
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance;
        case 'Matic':
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon;
        case 'Arbitrum':
            return _types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum;
        default:
            return;
    }
}


/***/ }),

/***/ 98564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DC": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.DC),
/* harmony export */   "d5": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.d5),
/* harmony export */   "tY": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.tY),
/* harmony export */   "JV": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.JV),
/* harmony export */   "Wr": () => (/* reexport safe */ _address__WEBPACK_IMPORTED_MODULE_0__.Wr),
/* harmony export */   "bu": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.bu),
/* harmony export */   "wY": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.wY),
/* harmony export */   "vs": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.vs),
/* harmony export */   "Of": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.Of),
/* harmony export */   "$c": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.$c),
/* harmony export */   "mO": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.mO),
/* harmony export */   "pL": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.pL),
/* harmony export */   "Si": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.Si),
/* harmony export */   "I3": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.I3),
/* harmony export */   "UZ": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.UZ),
/* harmony export */   "dN": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.dN),
/* harmony export */   "E$": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.E$),
/* harmony export */   "az": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.az),
/* harmony export */   "xG": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.xG),
/* harmony export */   "j8": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.j8),
/* harmony export */   "mH": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.mH),
/* harmony export */   "rl": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.rl),
/* harmony export */   "f1": () => (/* reexport safe */ _formatter__WEBPACK_IMPORTED_MODULE_3__.f1),
/* harmony export */   "ry": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.ry),
/* harmony export */   "xE": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.xE),
/* harmony export */   "T1": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.T1),
/* harmony export */   "FI": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.FI),
/* harmony export */   "Fr": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.Fr),
/* harmony export */   "wA": () => (/* reexport safe */ _number__WEBPACK_IMPORTED_MODULE_4__.wA),
/* harmony export */   "$G": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.$G),
/* harmony export */   "EX": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.EX),
/* harmony export */   "np": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.np),
/* harmony export */   "EP": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.EP),
/* harmony export */   "qz": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.qz),
/* harmony export */   "NX": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.NX),
/* harmony export */   "_T": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__._T),
/* harmony export */   "yX": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.yX),
/* harmony export */   "Ji": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.Ji),
/* harmony export */   "lQ": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.lQ)
/* harmony export */ });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60022);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79506);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37841);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5051);
/* harmony import */ var _chainDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26267);









/***/ }),

/***/ 5051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xE": () => (/* binding */ ZERO),
/* harmony export */   "ry": () => (/* binding */ ONE),
/* harmony export */   "Fr": () => (/* binding */ isZero),
/* harmony export */   "T1": () => (/* binding */ isGreaterThan),
/* harmony export */   "FI": () => (/* binding */ isLessThan),
/* harmony export */   "wA": () => (/* binding */ pow10)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

const ZERO = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber('0');
const ONE = new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber('1');
/** value == 0 */ function isZero(value) {
    return value === 0 || value === '0' || new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(value).isZero();
}
/** a > b */ function isGreaterThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(a).isGreaterThan(b);
}
/** a < b */ function isLessThan(a, b) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(a).isLessThan(b);
}
/** 10 ** n */ function pow10(n, m) {
    return new bignumber_js__WEBPACK_IMPORTED_MODULE_0__.BigNumber(10).pow(n, m);
}


/***/ }),

/***/ 79506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$c": () => (/* binding */ createNativeToken),
/* harmony export */   "wY": () => (/* binding */ createERC20Token),
/* harmony export */   "Of": () => (/* binding */ createERC721Token),
/* harmony export */   "vs": () => (/* binding */ createERC20Tokens),
/* harmony export */   "bu": () => (/* binding */ addGasMargin),
/* harmony export */   "mO": () => (/* binding */ decodeOutputString),
/* harmony export */   "UZ": () => (/* binding */ parseStringOrBytes32),
/* harmony export */   "pL": () => (/* binding */ getTokenUSDValue),
/* harmony export */   "I3": () => (/* binding */ makeSortTokenFn),
/* harmony export */   "Si": () => (/* binding */ makeSortAssertFn)
/* harmony export */ });
/* unused harmony exports createERC721ContractDetailed, createERC1155Token, getBalanceValue */
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74950);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24982);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14967);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70626);
/* harmony import */ var _chainDetailed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26267);
/* harmony import */ var _formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37841);
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60022);








function createNativeToken(chainId) {
    const chainDetailed = (0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) throw new Error('Unknown chain id.');
    const { NATIVE_TOKEN_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)();
    if (!NATIVE_TOKEN_ADDRESS) throw new Error('Failed to create token.');
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native,
        chainId,
        address: NATIVE_TOKEN_ADDRESS,
        ...chainDetailed.nativeCurrency
    };
}
function createERC20Token(chainId, address, decimals, name, symbol) {
    return {
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC20 */ .Dr.ERC20,
        chainId,
        address,
        decimals,
        name,
        symbol
    };
}
function createERC721ContractDetailed(chainId, address, name, symbol, baseURI, iconURL) {
    return {
        type: EthereumTokenType.ERC721,
        chainId,
        address,
        name,
        symbol,
        baseURI,
        iconURL
    };
}
function createERC721Token(contractDetailed, info, tokenId) {
    return {
        contractDetailed,
        info,
        tokenId
    };
}
function createERC1155Token(chainId, tokenId, address, name, uri, asset) {
    return {
        type: EthereumTokenType.ERC1155,
        chainId,
        tokenId,
        address,
        name,
        uri,
        asset
    };
}
function createERC20Tokens(key, name, symbol, decimals) {
    const base = {
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .getEnumAsArray */ .Yl)(_types__WEBPACK_IMPORTED_MODULE_4__/* .ChainId */ .a_).reduce((accumulator, { value: chainId  })=>{
        const evaludator = (f)=>typeof f === 'function' ? f(chainId) : f
        ;
        var _key;
        accumulator[chainId] = {
            type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC20 */ .Dr.ERC20,
            chainId,
            address: (_key = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId)[key]) !== null && _key !== void 0 ? _key : '',
            name: evaludator(name),
            symbol: evaludator(symbol),
            decimals: evaludator(decimals)
        };
        return accumulator;
    }, base);
}
//#endregion
function addGasMargin(value, scale = 3000) {
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(value).multipliedBy(new (bignumber_js__WEBPACK_IMPORTED_MODULE_1___default())(10000).plus(scale)).dividedToIntegerBy(10000);
}
function decodeOutputString(web3, abis, output) {
    if (abis.length === 1) return web3.eth.abi.decodeParameter(abis[0], output);
    if (abis.length > 1) return web3.eth.abi.decodeParameters(abis, output);
    return;
}
// parse a name or symbol from a token response
const BYTES32_REGEX = /^0x[\dA-Fa-f]{64}$/;
function parseStringOrBytes32(str, bytes32, defaultValue) {
    return str && str.length > 0 ? str : bytes32 && BYTES32_REGEX.test(bytes32) && (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.hexToBytes)(bytes32)[31] === 0 ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_0__.toAscii)(bytes32) : defaultValue;
}
//#region asset sort
const getTokenUSDValue = (token)=>token.value ? Number.parseFloat(token.value[_types__WEBPACK_IMPORTED_MODULE_4__/* .CurrencyType.USD */ .V2.USD]) : 0
;
const getBalanceValue = (asset)=>parseFloat((0,_formatter__WEBPACK_IMPORTED_MODULE_6__/* .formatBalance */ .az)(asset.balance, asset.token.decimals))
;
const makeSortTokenFn = (chainId, options = {
})=>{
    const { isMaskBoost =false  } = options;
    const { MASK_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId);
    return (a, b)=>{
        // The native token goes first
        if (a.type === _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native) return -1;
        if (b.type === _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.Native */ .Dr.Native) return 1;
        // The mask token second
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.address, MASK_ADDRESS !== null && MASK_ADDRESS !== void 0 ? MASK_ADDRESS : '')) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.address, MASK_ADDRESS !== null && MASK_ADDRESS !== void 0 ? MASK_ADDRESS : '')) return 1;
        }
        return 0;
    };
};
const makeSortAssertFn = (chainId, options = {
})=>{
    const { isMaskBoost =false  } = options;
    const { MASK_ADDRESS  } = (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getTokenConstants */ .aV)(chainId);
    return (a, b)=>{
        // The tokens with the current chain id goes first
        if (a.chain !== b.chain) {
            if ((0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainIdFromName */ .np)(a.chain) === chainId) return -1;
            if ((0,_chainDetailed__WEBPACK_IMPORTED_MODULE_5__/* .getChainIdFromName */ .np)(b.chain) === chainId) return 1;
        }
        // native token sort
        const nativeTokenDifference = makeSortTokenFn(chainId, {
            isMaskBoost: false
        })(a.token, b.token);
        if (nativeTokenDifference !== 0) return nativeTokenDifference;
        // Mask token at second if value > 0
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.token.address, MASK_ADDRESS) && getBalanceValue(a) > 0) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.token.address, MASK_ADDRESS) && getBalanceValue(b) > 0) return 1;
        }
        // Token with high usd value estimation has priority
        const valueDifference = getTokenUSDValue(b) - getTokenUSDValue(a);
        if (valueDifference !== 0) return valueDifference;
        // Token with big balance has priority
        if (getBalanceValue(a) > getBalanceValue(b)) return -1;
        if (getBalanceValue(a) < getBalanceValue(b)) return 1;
        // mask token behind all valuable tokens if value = 0 and balance = 0
        if (isMaskBoost) {
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(a.token.address, MASK_ADDRESS)) return -1;
            if ((0,_address__WEBPACK_IMPORTED_MODULE_7__/* .isSameAddress */ .Wr)(b.token.address, MASK_ADDRESS)) return 1;
        }
        var _name, _name1;
        // Sorted by alphabet
        if (((_name = a.token.name) !== null && _name !== void 0 ? _name : '') > ((_name1 = b.token.name) !== null && _name1 !== void 0 ? _name1 : '')) return 1;
        var _name5, _name6;
        if (((_name5 = a.token.name) !== null && _name5 !== void 0 ? _name5 : '') < ((_name6 = b.token.name) !== null && _name6 !== void 0 ? _name6 : '')) return -1;
        return 0;
    };
} //#endregion
;


/***/ }),

/***/ 76110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UG": () => (/* binding */ Err),
/* harmony export */   "Ok": () => (/* binding */ Ok),
/* harmony export */   "x4": () => (/* binding */ Result)
/* harmony export */ });
/* unused harmony exports ErrImpl, OkImpl */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13267);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49749);


/**
 * Contains the error value
 */
var ErrImpl = /** @class */ (function () {
    function ErrImpl(val) {
        if (!(this instanceof ErrImpl)) {
            return new ErrImpl(val);
        }
        this.ok = false;
        this.err = true;
        this.val = val;
        var stackLines = new Error().stack.split('\n').slice(2);
        if (stackLines && stackLines.length > 0 && stackLines[0].includes('ErrImpl')) {
            stackLines.shift();
        }
        this._stack = stackLines.join('\n');
    }
    ErrImpl.prototype[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true, value: undefined };
            },
        };
    };
    /**
     * @deprecated in favor of unwrapOr
     * @see unwrapOr
     */
    ErrImpl.prototype.else = function (val) {
        return val;
    };
    ErrImpl.prototype.unwrapOr = function (val) {
        return val;
    };
    ErrImpl.prototype.expect = function (msg) {
        throw new Error(msg + " - Error: " + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
    };
    ErrImpl.prototype.unwrap = function () {
        throw new Error("Tried to unwrap Error: " + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
    };
    ErrImpl.prototype.map = function (_mapper) {
        return this;
    };
    ErrImpl.prototype.andThen = function (op) {
        return this;
    };
    ErrImpl.prototype.mapErr = function (mapper) {
        return new Err(mapper(this.val));
    };
    ErrImpl.prototype.toOption = function () {
        return _option__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
    };
    ErrImpl.prototype.toString = function () {
        return "Err(" + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    Object.defineProperty(ErrImpl.prototype, "stack", {
        get: function () {
            return this + "\n" + this._stack;
        },
        enumerable: false,
        configurable: true
    });
    /** An empty Err */
    ErrImpl.EMPTY = new ErrImpl(undefined);
    return ErrImpl;
}());

// This allows Err to be callable - possible because of the es5 compilation target
var Err = ErrImpl;
/**
 * Contains the success value
 */
var OkImpl = /** @class */ (function () {
    function OkImpl(val) {
        if (!(this instanceof OkImpl)) {
            return new OkImpl(val);
        }
        this.ok = true;
        this.err = false;
        this.val = val;
    }
    /**
     * Helper function if you know you have an Ok<T> and T is iterable
     */
    OkImpl.prototype[Symbol.iterator] = function () {
        var obj = Object(this.val);
        return Symbol.iterator in obj
            ? obj[Symbol.iterator]()
            : {
                next: function () {
                    return { done: true, value: undefined };
                },
            };
    };
    /**
     * @see unwrapOr
     * @deprecated in favor of unwrapOr
     */
    OkImpl.prototype.else = function (_val) {
        return this.val;
    };
    OkImpl.prototype.unwrapOr = function (_val) {
        return this.val;
    };
    OkImpl.prototype.expect = function (_msg) {
        return this.val;
    };
    OkImpl.prototype.unwrap = function () {
        return this.val;
    };
    OkImpl.prototype.map = function (mapper) {
        return new Ok(mapper(this.val));
    };
    OkImpl.prototype.andThen = function (mapper) {
        return mapper(this.val);
    };
    OkImpl.prototype.mapErr = function (_mapper) {
        return this;
    };
    OkImpl.prototype.toOption = function () {
        return (0,_option__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(this.val);
    };
    /**
     * Returns the contained `Ok` value, but never throws.
     * Unlike `unwrap()`, this method doesn't throw and is only callable on an Ok<T>
     *
     * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
     * that will fail to compile if the error type of the Result is later changed to an error that can actually occur.
     *
     * (this is the `into_ok()` in rust)
     */
    OkImpl.prototype.safeUnwrap = function () {
        return this.val;
    };
    OkImpl.prototype.toString = function () {
        return "Ok(" + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    OkImpl.EMPTY = new OkImpl(undefined);
    return OkImpl;
}());

// This allows Ok to be callable - possible because of the es5 compilation target
var Ok = OkImpl;
var Result;
(function (Result) {
    /**
     * Parse a set of `Result`s, returning an array of all `Ok` values.
     * Short circuits with the first `Err` found, if any
     */
    function all() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var okResult = [];
        for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
            var result = results_1[_a];
            if (result.ok) {
                okResult.push(result.val);
            }
            else {
                return result;
            }
        }
        return new Ok(okResult);
    }
    Result.all = all;
    /**
     * Parse a set of `Result`s, short-circuits when an input value is `Ok`.
     * If no `Ok` is found, returns an `Err` containing the collected error values
     */
    function any() {
        var results = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            results[_i] = arguments[_i];
        }
        var errResult = [];
        // short-circuits
        for (var _a = 0, results_2 = results; _a < results_2.length; _a++) {
            var result = results_2[_a];
            if (result.ok) {
                return result;
            }
            else {
                errResult.push(result.val);
            }
        }
        // it must be a Err
        return new Err(errResult);
    }
    Result.any = any;
    /**
     * Wrap an operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrap(op) {
        try {
            return new Ok(op());
        }
        catch (e) {
            return new Err(e);
        }
    }
    Result.wrap = wrap;
    /**
     * Wrap an async operation that may throw an Error (`try-catch` style) into checked exception style
     * @param op The operation function
     */
    function wrapAsync(op) {
        try {
            return op()
                .then(function (val) { return new Ok(val); })
                .catch(function (e) { return new Err(e); });
        }
        catch (e) {
            return Promise.resolve(new Err(e));
        }
    }
    Result.wrapAsync = wrapAsync;
    function isResult(val) {
        return val instanceof Err || val instanceof Ok;
    }
    Result.isResult = isResult;
})(Result || (Result = {}));
//# sourceMappingURL=result.js.map

/***/ }),

/***/ 4350:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 2908) return "js/npm-ns.dimensiondev.stego-js.js";
/******/ 			if (chunkId === 5178) return "js/npm-ns.popperjs.core.js";
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			if (chunkId === 1440) return "js/npm.validator.js";
/******/ 			if (chunkId === 2162) return "js/npm.z-schema.js";
/******/ 			if (chunkId === 8000) return "js/npm.lodash.isequal.js";
/******/ 			if (chunkId === 8393) return "js/npm.lodash.get.js";
/******/ 			if (chunkId === 6739) return "js/npm.idb.js";
/******/ 			if (chunkId === 2943) return "js/npm.bip39.js";
/******/ 			if (chunkId === 9632) return "js/9632.js";
/******/ 			if (chunkId === 3906) return "js/3906.js";
/******/ 			if (chunkId === 8405) return "js/8405.js";
/******/ 			if (chunkId === 405) return "js/npm.react-feather.js";
/******/ 			if (chunkId === 23) return "js/23.js";
/******/ 			if (chunkId === 404) return "js/404.js";
/******/ 			if (chunkId === 5732) return "js/npm.webcrypto-liner.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","313":"npm.ef-core","855":"npm.json2csv","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1902":"npm-ns.dimensiondev.snapshot.js","2261":"npm.wyvern-js","2598":"npm.react-hook-form","2939":"npm-ns.uniswap.v3-sdk","3294":"npm.date-fns","3322":"npm.color","3850":"npm.arweave","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4462":"npm.text-encoding","4477":"npm.gun","4554":"Plugin/Poll","5049":"Gun","5678":"npm.d3-voronoi","6230":"npm.zod","6316":"npm-ns.msgpack.msgpack","6948":"ShapeDetection","7015":"npm.d3-transition","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","9278":"npm.axios","9714":"npm.wyvern-schemas"}[chunkId] || chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = typeof browser === 'object'
/******/ 		var runtime = isBrowser ? browser : typeof chrome === 'object' ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var send = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		
/******/ 		var contentScriptLoader = (url, done, chunkId) => {
/******/ 			send({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var normalLoader = (url, done, chunkId) => {
/******/ 			var script = document.createElement('script')
/******/ 			script.src = url
/******/ 			script.onload = done
/******/ 			script.onerror = done
/******/ 			document.body.appendChild(script)
/******/ 		}
/******/ 		var workerLoader = (url, done, chunkId) => {
/******/ 			try { importScripts(url); done() } catch (e) { done(e) }
/******/ 		}
/******/ 		var isWorker = typeof importScripts === 'function'
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : normalLoader
/******/ 		else if (!isWorker) __webpack_require__.l = contentScriptLoader
/******/ 		else { throw new TypeError('Unreachable loader: content script + Worker') }
/******/ 		
/******/ 	
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 1680;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = typeof browser === 'object'
/******/ 		var runtime = isBrowser ? browser : typeof chrome === 'object' ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			1680: 0,
/******/ 			7988: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [2876,2701,9759,4023,4586,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,8883,7367,5519,3193,8184], () => (__webpack_require__(92787)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2876,2701,9759,4023,4586,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,8883,7367,5519,3193,8184], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;