/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 52458:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


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

/***/ 34539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(24827);
} else {}


/***/ }),

/***/ 73102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(67431);
} else {}


/***/ }),

/***/ 4223:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React vundefined
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=0;
function M(){return exports.unstable_now()>=Q}function R(){if(null!==O){var a=exports.unstable_now();Q=a+P;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 76375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(4223);
} else {}


/***/ }),

/***/ 635:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/extension/debug-page/typeson-custom-types.ts
var typeson_custom_types_namespaceObject = {};
__webpack_require__.r(typeson_custom_types_namespaceObject);
__webpack_require__.d(typeson_custom_types_namespaceObject, {
  "CryptoKeyRegistry": () => (CryptoKeyRegistry)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.0.0-alpha-aecb3b6d1_react@18.0.0-alpha-aecb3b6d1/node_modules/react-dom/index.js
var react_dom = __webpack_require__(24204);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
;// CONCATENATED MODULE: ./src/extension/debug-page/issue.ts
const body = `\
# Bug Report

## Environment

User Agent: ${navigator.userAgent}
Version: ${"v1.29.12-905-gc5a5cecec"}
Tag Name: ${"v1.36.0"}
Build Date: ${"2021-08-31T02:52:53.915Z"}
Commit Hash: ${"c5a5cecec"}
Commit Date: ${"2021-08-31T02:49:35.000Z"}
Remote URL: ${"https://github.com/DimensionDev/Maskbook"}
Branch Name: ${"develop"}

## Bug Info

### Actual Behavior

/* What happened? */\
`;
const makeNewBugIssueURL = ()=>{
    const url = new URL('https://github.com/DimensionDev/Maskbook/issues/new');
    url.searchParams.append('title', '[Bug] ');
    url.searchParams.append('labels', 'Type: Bug');
    url.searchParams.append('assignees', 'Jack-Works, jk234ert');
    url.searchParams.append('body', body);
    return url.toString();
};

;// CONCATENATED MODULE: ./src/extension/debug-page/DebugInfo.tsx



const DEBUG_INFO = {
    'User Agent': navigator.userAgent,
    'Maskbook Version': "v1.29.12-905-gc5a5cecec",
    'Build Date': "2021-08-31T02:52:53.915Z",
    'Tag Name': "v1.36.0",
    'Commit Hash': "c5a5cecec",
    'Commit Date': "2021-08-31T02:49:35.000Z",
    'Remote URL': "https://github.com/DimensionDev/Maskbook",
    'Branch Name': "develop",
    Dirty: false,
    'Tag Dirty': true
};
const DebugInfo = ()=>{
    const onNewBugIssue = ()=>{
        open(makeNewBugIssueURL());
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                children: (0,lodash.map)(DEBUG_INFO, (value, key)=>`${key}: ${value}`
                ).join('\n')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: onNewBugIssue,
                children: "New bug issue"
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@5.0.8/node_modules/idb/with-async-ittr.js + 1 modules
var with_async_ittr = __webpack_require__(3440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson@6.1.0/node_modules/typeson/dist/typeson.js
var typeson = __webpack_require__(72421);
var typeson_default = /*#__PURE__*/__webpack_require__.n(typeson);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson-registry@1.0.0-alpha.39/node_modules/typeson-registry/dist/presets/builtin.js
var builtin = __webpack_require__(12080);
var builtin_default = /*#__PURE__*/__webpack_require__.n(builtin);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson-registry@1.0.0-alpha.39/node_modules/typeson-registry/dist/presets/special-numbers.js
var special_numbers = __webpack_require__(82689);
var special_numbers_default = /*#__PURE__*/__webpack_require__.n(special_numbers);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson-registry@1.0.0-alpha.39/node_modules/typeson-registry/dist/types/blob.js
var blob = __webpack_require__(76374);
var blob_default = /*#__PURE__*/__webpack_require__.n(blob);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson-registry@1.0.0-alpha.39/node_modules/typeson-registry/dist/types/file.js
var file = __webpack_require__(4357);
var file_default = /*#__PURE__*/__webpack_require__.n(file);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson-registry@1.0.0-alpha.39/node_modules/typeson-registry/dist/types/filelist.js
var filelist = __webpack_require__(19004);
var filelist_default = /*#__PURE__*/__webpack_require__.n(filelist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson-registry@1.0.0-alpha.39/node_modules/typeson-registry/dist/types/imagebitmap.js
var imagebitmap = __webpack_require__(71967);
var imagebitmap_default = /*#__PURE__*/__webpack_require__.n(imagebitmap);
;// CONCATENATED MODULE: ./src/extension/debug-page/typeson-custom-types.ts
const CryptoKeyRegistry = {
    test (x) {
        return x instanceof CryptoKey && x.extractable;
    },
    async replaceAsync (key) {
        return {
            raw: await crypto.subtle.exportKey('raw', key),
            algorithm: key.algorithm,
            usages: key.usages
        };
    },
    reviveAsync ({ raw , algorithm , usages  }) {
        return crypto.subtle.importKey('raw', raw, algorithm, true, usages);
    }
};

;// CONCATENATED MODULE: ./src/extension/debug-page/typeson.ts

// @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore

const typeson_typeson = new (typeson_default())({
});
typeson_typeson.register((builtin_default()));
typeson_typeson.register((special_numbers_default()));
typeson_typeson.register([
    (blob_default()),
    (file_default()),
    (filelist_default()),
    (imagebitmap_default()),
    (special_numbers_default())
]);
typeson_typeson.register([
    typeson_custom_types_namespaceObject
]);
/* harmony default export */ const debug_page_typeson = (typeson_typeson);

;// CONCATENATED MODULE: ./src/extension/debug-page/DatabaseOps.tsx



const DatabaseOps = ()=>{
    const onBackup = async ()=>{
        const payload = await backupAll();
        if (payload === undefined) {
            return;
        }
        const timestamp = ((value)=>{
            const values = [
                value.getUTCFullYear(),
                value.getUTCMonth() + 1,
                value.getUTCDate(),
                value.getUTCHours(),
                value.getUTCMinutes(),
                value.getUTCSeconds(), 
            ];
            return values.map((value1)=>value1.toString().padStart(2, '0')
            ).join('');
        })(new Date());
        download(`maskbook-dump-${timestamp}.json`, payload);
    };
    const onRestore = async ()=>{
        const file = await DatabaseOps_select();
        if (file === undefined) {
            return;
        }
        const parsed = await debug_page_typeson.parse(await file.text());
        await restoreAll(parsed);
    };
    const onClear = async ()=>{
        var ref;
        const databases = await ((ref = indexedDB.databases) === null || ref === void 0 ? void 0 : ref.call(indexedDB));
        if (databases === undefined) {
            return;
        }
        await Promise.all(databases.map(async ({ name  })=>{
            await timeout((0,with_async_ittr/* wrap */.re)(indexedDB.deleteDatabase(name)), 500);
            console.log(`clear ${name}`);
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onBackup,
                    children: "Backup Database"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onRestore,
                    children: "Overwrite Database with backup"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onClear,
                    children: "Clear Database"
                })
            })
        ]
    }));
};
function DatabaseOps_select() {
    return new Promise((resolve)=>{
        const element = document.createElement('input');
        element.type = 'file';
        element.addEventListener('change', ()=>{
            var ref;
            resolve((ref = element.files) === null || ref === void 0 ? void 0 : ref[0]);
        });
        element.click();
    });
}
function download(name, part) {
    const element = document.createElement('a');
    element.href = URL.createObjectURL(new Blob([
        part
    ]));
    element.download = name;
    element.click();
}
function timeout(promise, time) {
    return Promise.race([
        promise,
        new Promise((resolve)=>setTimeout(()=>resolve(undefined)
            , time)
        )
    ]);
}
async function restoreAll(parsed) {
    console.log('restoring with', parsed);
    for (const { name , version , stores  } of parsed.instances){
        const db1 = await (0,with_async_ittr/* openDB */.X3)(name, version, {
            upgrade (db) {
                for (const name1 of db.objectStoreNames){
                    db.deleteObjectStore(name1);
                }
                for (const [storeName, { autoIncrement , keyPath , indexes  }] of Object.entries(stores)){
                    const store = db.createObjectStore(storeName, {
                        autoIncrement,
                        keyPath
                    });
                    for (const { name: name2 , keyPath: keyPath1 , multiEntry , unique  } of indexes){
                        store.createIndex(name2, keyPath1, {
                            multiEntry,
                            unique
                        });
                    }
                }
            }
        });
        for (const [storeName, { records , keyPath  }] of stores.entries()){
            await db1.clear(storeName);
            for (const [key, value] of records){
                try {
                    if (keyPath) {
                        await db1.add(storeName, value);
                    } else {
                        await db1.add(storeName, value, key);
                    }
                } catch (error) {
                    console.error('Recover error when ', key, value, parsed);
                    // Error from IndexedDB transaction is not recoverable
                    throw error;
                }
            }
        }
    }
}
async function backupAll() {
    var ref;
    const databases = await ((ref = indexedDB.databases) === null || ref === void 0 ? void 0 : ref.call(indexedDB));
    if (databases === undefined) {
        return;
    }
    const instances = [];
    for (const { name , version  } of databases){
        const db = await timeout((0,with_async_ittr/* openDB */.X3)(name, version), 500);
        if (db === undefined) {
            continue;
        }
        const stores = new Map();
        for (const name1 of db.objectStoreNames){
            const store = db.transaction(name1).store;
            const indexes = [];
            for (const indexName of store.indexNames){
                const index = store.index(indexName);
                indexes.push({
                    name: index.name,
                    unique: index.unique,
                    multiEntry: index.multiEntry,
                    keyPath: index.keyPath
                });
            }
            const records = new Map();
            for await (const cursor of store){
                records.set(cursor.key, cursor.value);
            }
            stores.set(name1, {
                keyPath: store.keyPath,
                autoIncrement: store.autoIncrement,
                indexes,
                records
            });
        }
        instances.push({
            name: name,
            version: version,
            stores
        });
    }
    const payload = {
        buildInfo: {
            'user-agent': navigator.userAgent,
            version: "v1.29.12-905-gc5a5cecec",
            'build-date': "2021-08-31T02:52:53.915Z",
            'tag-name': "v1.36.0",
            'commit-hash': "c5a5cecec",
            'commit-date': "2021-08-31T02:49:35.000Z",
            'remote-url': "https://github.com/DimensionDev/Maskbook",
            'branch-name': "develop",
            dirty: false,
            'tag-dirty': true
        },
        instances
    };
    return debug_page_typeson.stringify(payload, undefined, 2);
}

;// CONCATENATED MODULE: ./src/extension/debug-page/Entry.tsx



const Entry = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DebugInfo, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabaseOps, {
            })
        ]
    })
;

;// CONCATENATED MODULE: ./src/extension/debug-page/index.tsx



const container = document.createElement('main');
react_dom.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {
}), container, ()=>{
    document.body.appendChild(container);
});


/***/ }),

/***/ 42038:
/***/ (() => {

;(() => {
    if (typeof browser === 'undefined' || !browser) return
    const _permissions = browser.permissions || {}
    browser.permissions = new Proxy(_permissions, {
        get(target, prop, receiver) {
            if (prop === 'request') {
                return ({ origins }) => {
                    const item = localStorage.getItem('requestedUrls')
                    const requestedUrls = JSON.parse(item) || []
                    for (const i of origins) {
                        if (!requestedUrls.includes(i)) requestedUrls.push(i)
                    }
                    localStorage.setItem('requestedUrls', JSON.stringify(requestedUrls))
                    return Promise.resolve(true)
                }
            } else if (prop === 'getAll') {
                return () => {
                    const item = localStorage.getItem('requestedUrls')
                    return Promise.resolve({ origins: JSON.parse(item) || [] })
                }
            } else if (prop === 'contains') {
                return () => Promise.resolve(true)
            } else {
                return Reflect.get(target, prop, receiver)
            }
        },
        set() {
            return false
        },
    })
})()


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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			1711: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 	__webpack_require__.O(undefined, [6739,7913,3832,71,5105], () => (__webpack_require__(635)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [6739,7913,3832,71,5105], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;