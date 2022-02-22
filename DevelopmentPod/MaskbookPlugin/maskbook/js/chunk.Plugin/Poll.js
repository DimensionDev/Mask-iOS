/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 62508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheProvider": () => (/* reexport safe */ _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "ThemeContext": () => (/* reexport safe */ _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T),
/* harmony export */   "ThemeProvider": () => (/* reexport safe */ _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.a),
/* harmony export */   "__unsafe_useEmotionCache": () => (/* reexport safe */ _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__._),
/* harmony export */   "useTheme": () => (/* reexport safe */ _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.u),
/* harmony export */   "withEmotionCache": () => (/* reexport safe */ _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w),
/* harmony export */   "withTheme": () => (/* reexport safe */ _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "ClassNames": () => (/* binding */ ClassNames),
/* harmony export */   "Global": () => (/* binding */ Global),
/* harmony export */   "createElement": () => (/* binding */ jsx),
/* harmony export */   "css": () => (/* binding */ css),
/* harmony export */   "jsx": () => (/* binding */ jsx),
/* harmony export */   "keyframes": () => (/* binding */ keyframes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16917);
/* harmony import */ var _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47767);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10063);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57911);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62565);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72707);












var pkg = {
	name: "@emotion/react",
	version: "11.7.1",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	browser: {
		"./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
		"./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
	},
	types: "types/index.d.ts",
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/*.d.ts",
		"macro.js",
		"macro.d.ts",
		"macro.js.flow"
	],
	sideEffects: false,
	author: "mitchellhamilton <mitchell@mitchellhamilton.me>",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.13.10",
		"@emotion/cache": "^11.7.1",
		"@emotion/serialize": "^1.0.2",
		"@emotion/sheet": "^1.1.0",
		"@emotion/utils": "^1.0.0",
		"@emotion/weak-memoize": "^0.2.5",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		"@babel/core": "^7.0.0",
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@babel/core": {
			optional: true
		},
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@babel/core": "^7.13.10",
		"@emotion/css": "11.7.1",
		"@emotion/css-prettifier": "1.0.1",
		"@emotion/server": "11.4.0",
		"@emotion/styled": "11.6.0",
		"@types/react": "^16.9.11",
		dtslint: "^0.3.0",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.js",
			"./jsx-runtime.js",
			"./jsx-dev-runtime.js",
			"./_isolated-hnrs.js"
		],
		umdName: "emotionReact"
	}
};

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.h.call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.E;
  createElementArgArray[1] = (0,_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  if (false) {}

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)([styles], undefined, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var key = cache.key + "-global";
    var sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_5__/* .StyleSheet */ .m({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (false) {}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(args);
}

var keyframes = function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (false) {}

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Noop = function Noop() {
  return null;
};

var ClassNames = /* #__PURE__ */(0,_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.w)(function (props, cache) {
  var hasRendered = false;

  var css = function css() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(args, cache.registered);

    {
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_6__.insertStyles)(cache, serialized, false);
    }

    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && "production" !== 'production') {}

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_emotion_element_699e6908_browser_esm_js__WEBPACK_IMPORTED_MODULE_2__.T)
  };
  var ele = props.children(content);
  hasRendered = true;
  var possiblyStyleElement = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Noop, null);


  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, possiblyStyleElement, ele);
});

if (false) {}

if (false) { var globalKey, globalContext, isJest, isBrowser; }




/***/ }),

/***/ 25789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}


/***/ }),

/***/ 37313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const event_iterator_1 = __webpack_require__(1091);
__webpack_unused_export__ = event_iterator_1.EventIterator;
function subscribe(event, options, evOptions) {
    return new event_iterator_1.EventIterator(({ push }) => {
        this.addEventListener(event, push, options);
        return () => this.removeEventListener(event, push, options);
    }, evOptions);
}
__webpack_unused_export__ = subscribe;
__webpack_unused_export__ = event_iterator_1.EventIterator;


/***/ }),

/***/ 4507:
/***/ ((__unused_webpack_module, exports) => {

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 99415:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(4507);
} else {}


/***/ }),

/***/ 80629:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React vundefined
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(52458);var f=__webpack_require__(76342),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:n.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 58880:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React vundefined
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(52458),m=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;m=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A={};function B(a,b,e){this.props=a;this.context=b;this.refs=A;this.updater=e||z}B.prototype.isReactComponent={};
B.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};B.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function C(){}C.prototype=B.prototype;function D(a,b,e){this.props=a;this.context=b;this.refs=A;this.updater=e||z}var E=D.prototype=new C;
E.constructor=D;l(E,B.prototype);E.isPureReactComponent=!0;var F=Array.isArray,G=Object.prototype.hasOwnProperty,H={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)G.call(b,d)&&!I.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),n=0;n<g;n++)f[n]=arguments[n+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:m,type:a,key:k,ref:h,props:c,_owner:H.current}}
function K(a,b){return{$$typeof:m,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===m}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case m:case p:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+N(h,0):d,F(c)?(e="",null!=a&&(e=a.replace(M,"$&/")+"/"),O(c,b,e,"",function(a){return a})):null!=c&&(L(c)&&(c=K(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(M,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(F(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+N(k,g);h+=O(k,b,e,f,c)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+N(k,g++),h+=O(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function P(a,b,e){if(null==a)return a;var d=[],c=0;O(a,d,"","",function(a){return b.call(e,a,c++)});return d}function Q(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var R={current:null},S={transition:0},T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:S,ReactCurrentOwner:H,assign:l};exports.Children={map:P,forEach:function(a,b,e){P(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=B;exports.PureComponent=D;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=l({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=H.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)G.call(b,f)&&!I.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var n=0;n<f;n++)g[n]=arguments[n+2];d.children=g}return{$$typeof:m,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:r,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};
exports.isValidElement=L;exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=S.transition;S.transition=1;try{a()}finally{S.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.unstable_createMutableSource=function(a,b){return{_getVersion:b,_source:a,_workInProgressVersionPrimary:null,_workInProgressVersionSecondary:null}};exports.useCallback=function(a,b){return R.current.useCallback(a,b)};exports.useContext=function(a){return R.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return R.current.useDeferredValue(a)};exports.useEffect=function(a,b){return R.current.useEffect(a,b)};exports.useId=function(){return R.current.useId()};
exports.useImperativeHandle=function(a,b,e){return R.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return R.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return R.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return R.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return R.current.useReducer(a,b,e)};exports.useRef=function(a){return R.current.useRef(a)};exports.useState=function(a){return R.current.useState(a)};
exports.useSyncExternalStore=function(a,b,e){return R.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return R.current.useTransition()};exports.version="18.0.0-rc.0-f2a59df48-20211208";


/***/ }),

/***/ 76342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(58880);
} else {}


/***/ }),

/***/ 74750:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(80629);
} else {}


/***/ }),

/***/ 44438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ createIcon)
/* harmony export */ });
/* unused harmony export createPaletteAwareIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30282);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32824);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);




/**
 * Create an icon from svg fragment
 * @param name Name of the Icon
 * @param svg SVG content. Do not include <svg> tag
 * @param viewBox The viewbox
 * @param defaultSize Only use this when the icon is not square. Unit: px
 * @returns A component that same type as icons from @mui/icons-material
 */ function createIcon(name, svg, viewBox, defaultSize) {
    const [width, height] = defaultSize || [];
    if (width === height && typeof width === 'number') throw new Error('Only define this when the icon is not a square');
    const Icon = typeof svg === 'function' ? ({ sx , ...props }, ref)=>{
        const style = defaultSize ? {
            width,
            height,
            ...sx
        } : sx;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            viewBox: viewBox,
            ...props,
            ref: ref,
            children: svg((0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)()),
            sx: style
        }));
    } : ({ sx , ...props }, ref)=>{
        const style = defaultSize ? {
            width,
            height,
            ...sx
        } : sx;
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            viewBox: viewBox,
            ...props,
            ref: ref,
            children: svg,
            sx: style
        }));
    };
    Icon.displayName = `Icon (${name})`;
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(Icon)));
}
/**
 * Create an icon from svg fragment
 * @internal
 * @param name Name of the Icon
 * @param light SVG content when the theme is light theme. Do not include <svg> tag
 * @param dark SVG content when the theme is light theme. Do not include <svg> tag
 * @param dim SVG content when the theme is dark, and the MaskIconPaletteContext is "dim". Do not include <svg> tag
 * @param viewBox The viewbox
 * @param defaultSize Only use this when the icon is not square. Unit: px
 * @returns A component that same type as icons from @mui/icons-material
 */ function createPaletteAwareIcon(name, light, dark, dim, viewBox, defaultSize) {
    return createIcon(name, (theme)=>{
        const palette = useContext(MaskIconPaletteContext);
        const isDim = palette === 'dim';
        if (theme.palette.mode === 'dark') {
            if (isDim && dim) return dim;
            return dark;
        }
        return light;
    }, viewBox, defaultSize);
}


/***/ }),

/***/ 87652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createNewPoll": () => (/* binding */ createNewPoll),
  "getAllExistingPolls": () => (/* binding */ getAllExistingPolls),
  "getPollByKey": () => (/* binding */ getPollByKey),
  "vote": () => (/* binding */ vote)
});

// NAMESPACE OBJECT: ./src/plugins/Polls/Services.ts
var Services_namespaceObject = {};
__webpack_require__.r(Services_namespaceObject);
__webpack_require__.d(Services_namespaceObject, {
  "createNewPoll": () => (createNewPoll),
  "getAllExistingPolls": () => (getAllExistingPolls),
  "getPollByKey": () => (getPollByKey),
  "vote": () => (vote)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/network/gun/gun-worker.patch.ts + 1 modules
var gun_worker_patch = __webpack_require__(46224);
// EXTERNAL MODULE: ./src/network/gun/version.2/gun.patch.ts
var gun_patch = __webpack_require__(77429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/sea.js
var sea = __webpack_require__(23646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/radix.js
var radix = __webpack_require__(43945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/radisk.js
var radisk = __webpack_require__(97062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/store.js
var store = __webpack_require__(47322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/rindexed.js
var rindexed = __webpack_require__(76721);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/gun.js
var gun = __webpack_require__(79979);
var gun_default = /*#__PURE__*/__webpack_require__.n(gun);
// EXTERNAL MODULE: ./src/network/gun-servers.ts
var gun_servers = __webpack_require__(71757);
;// CONCATENATED MODULE: ./src/network/gun/version.2/gun2.ts


const gun2_gun2 = new (gun_default())({
    peers: gun_servers/* gunServers */.O,
    localStorage: false,
    radisk: true
});
gun2_gun2.opt({
    retry: Number.POSITIVE_INFINITY
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/browser.js
var browser = __webpack_require__(32246);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ./utils-pure/index.ts + 3 modules
var utils_pure = __webpack_require__(99990);
;// CONCATENATED MODULE: ./src/network/gun/version.2/hash.ts



/**
 * @param version current payload version
 * @param postIV Post iv
 * @param partitionByCryptoKey Public key of the current user (receiver)
 * @param networkHint The network specific string
 */ async function hash_calculatePostKeyPartition(version, postIV, partitionByCryptoKey, networkHint) {
    const postHash = await hash_hashPostSalt(postIV, networkHint);
    // In version > -39, we will use stable hash to prevent unstable result for key hashing
    const keyHash = await (version <= -39 ? hash_hashCryptoKeyUnstable : hash_hashCryptoKey)(partitionByCryptoKey);
    return {
        postHash,
        keyHash
    };
}
const hash_hashPostSalt = (0,utils_pure/* memoizePromise */.J3)(async function(postSalt, networkHint) {
    const hashPair = '9283464d-ee4e-4e8d-a7f3-cf392a88133f';
    const N = 2;
    const hash = await browser_default().SEA.work(postSalt, hashPair);
    return networkHint + hash.substring(0, N);
}, (x, y)=>x + y
);
/**
 * @param key - The key need to be hashed
 */ const hash_hashCryptoKeyUnstable = (0,utils_pure/* memoizePromise */.J3)(async function(key) {
    const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
    const N = 2;
    const jwk = JSON.stringify(key);
    const hash = await browser_default().SEA.work(jwk, hashPair);
    return hash.substring(0, N);
}, undefined);
/**
 * @param key - The key need to be hashed
 */ const hash_hashCryptoKey = (0,utils_pure/* memoizePromise */.J3)(async function(key) {
    const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
    const N = 2;
    const jwk = key;
    if (!jwk.x || !jwk.y) throw new Error('Invalid key');
    const hash = await browser_default().SEA.work(jwk.x + jwk.y, hashPair);
    return hash.substring(0, N);
}, undefined);

// EXTERNAL MODULE: ../../node_modules/.pnpm/event-iterator@2.0.0/node_modules/event-iterator/lib/dom.js
var dom = __webpack_require__(37313);
;// CONCATENATED MODULE: ./src/network/gun/version.2/post.ts



/**
 * Query all possible keys stored on the gun
 * @param version current payload version
 * @param postIV Post iv
 * @param partitionByCryptoKey Public key of the current user (receiver)
 */ async function queryPostKeysOnGun2(version, postIV, partitionByCryptoKey, networkHint) {
    const { postHash , keyHash  } = await calculatePostKeyPartition(version, postIV, partitionByCryptoKey, networkHint);
    // ? here we get the internal node names of gun2[postHash][keyHash]
    // ? where gun2[postHash][keyHash] is a list
    const internalNodes = await gun2.get(postHash)// @ts-ignore
    .get(keyHash).then() || {};
    /* cspell:disable-next-line */ // ? In this step we get something like ["jzarhbyjtexiE7aB1DvQ", "jzarhuse6xlTAtblKRx9"]
    const internalKeys = Object.keys(internalNodes).filter((x)=>x !== '_'
    );
    // ? In this step we get all keys in this category (gun2[postHash][keyHash])
    const resultPromise = internalKeys.map((key)=>gun2// @ts-expect-error
        .get(key).then()
    );
    const result = await Promise.all(resultPromise);
    console.info(`await gun2[${postHash}][${keyHash}]\n`, result);
    return result;
}
/**
 * Listen on the changes of all possible keys on the gun
 * @param version current payload version
 * @param postSalt Post iv
 * @param partitionByCryptoKey Public key of the current user (receiver)
 */ async function* subscribePostKeysOnGun2(version, postSalt, partitionByCryptoKey, networkHint) {
    const iter = new EventIterator(({ push: callback  })=>{
        hashPostSalt(postSalt, networkHint).then((postHash)=>{
            (version <= -39 ? hashCryptoKeyUnstable : hashCryptoKey)(partitionByCryptoKey).then((keyHash)=>{
                gun2.get(postHash)// @ts-ignore
                .get(keyHash).map()// @ts-ignore
                .on((data)=>{
                    // @ts-ignore
                    const { _ , ...data2 } = Object.assign({}, data);
                    callback(data2);
                });
            });
        });
    });
    yield* iter;
}
/**
 * Publish post keys on the gun
 * @param version current payload
 * @param postSalt Post iv
 * @param receiversKeys Keys needs to publish
 */ async function publishPostAESKeyOnGun2(version, postSalt, networkHint, receiversKeys) {
    const postHash = await hashPostSalt(postSalt, networkHint);
    // Store AES key to gun
    receiversKeys.forEach(async ({ aesKey , receiverKey  })=>{
        const keyHash = await (version <= -39 ? hashCryptoKeyUnstable : hashCryptoKey)(receiverKey);
        console.log(`gun[${postHash}][${keyHash}].push(`, aesKey, ')');
        gun2.get(postHash)// @ts-ignore
        .get(keyHash)// @ts-ignore
        .set(aesKey);
    });
}

;// CONCATENATED MODULE: ./src/network/gun/version.2/index.ts









// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(89729);
;// CONCATENATED MODULE: ./src/plugins/Polls/constants.ts

const PollGunServer = 'com.maskbook.plugin.polls';
const PLUGIN_META_KEY = `${src/* PluginId.Poll */.je.Poll}:1`;
const PLUGIN_ID = src/* PluginId.Poll */.je.Poll;
const PLUGIN_NAME = 'Poll';
const PLUGIN_ICON = '\u{1F5F3}\uFE0F';
const PLUGIN_DESCRIPTION = 'Easily create a Poll for receiving public votes.';

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/utils/web/worker.js
var worker = __webpack_require__(22741);
// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.js
var full = __webpack_require__(918);
;// CONCATENATED MODULE: ./src/plugins/Polls/Services.ts







setTimeout(()=>{
    (0,full.AsyncCall)(Services_namespaceObject, {
        channel: new worker/* WorkerChannel */.i()
    });
}, 0);
const PollGun = gun2_gun2.get(PollGunServer);
const defaultPoll = {
    key: '',
    sender: '',
    question: '',
    start_time: Date.now(),
    end_time: Date.now(),
    options: [
        '',
        ''
    ],
    results: [
        0,
        0
    ]
};
async function createNewPoll(poll) {
    const { id , options , start_time , end_time  } = poll;
    const results = Array.from({
        length: options.length
    }).fill(0);
    const resultsObj = {
        ...results
    };
    const optionsObj = {
        ...options
    };
    const poll_item = {
        ...poll,
        results: resultsObj,
        options: optionsObj,
        start_time: start_time.getTime(),
        end_time: end_time.getTime()
    };
    // @ts-ignore
    const key = `${id}_${Gun.time.is()}_${Gun.text.random(4)}`;
    await PollGun// @ts-ignore
    .get(key)// @ts-ignore
    .put(poll_item).then();
    return poll;
}
async function vote(props) {
    const { poll , index  } = props;
    let results = [
        0,
        0
    ];
    PollGun// @ts-ignore
    .get(poll.key)// @ts-ignore
    .get('results').on((item)=>{
        // @ts-ignore
        delete item._;
        results = Object.values(item);
    });
    const count = results[index] + 1;
    const newResults = {
        ...results,
        [index]: count
    };
    PollGun// @ts-ignore
    .get(poll.key)// @ts-ignore
    .get('results')// @ts-ignore
    .put(newResults);
    return {
        ...poll,
        results: Object.values(newResults)
    };
}
async function getPollByKey(props) {
    const keys = props.key.split('_');
    let poll = {
        ...defaultPoll,
        key: props.key,
        id: (0,head/* default */.Z)(keys)
    };
    PollGun// @ts-ignore
    .get(props.key)// @ts-ignore
    .on((data)=>{
        poll = {
            ...poll,
            sender: data.sender,
            question: data.question,
            start_time: data.start_time,
            end_time: data.end_time
        };
        if (data.options) {
            PollGun// @ts-ignore
            .get(props.key)// @ts-ignore
            .get('options').on((options)=>{
                // @ts-ignore
                delete options._;
                poll.options = Object.values(options);
            });
        }
        if (data.results) {
            PollGun// @ts-ignore
            .get(props.key)// @ts-ignore
            .get('results').on((results)=>{
                // @ts-ignore
                delete results._;
                poll.results = Object.values(results);
            });
        }
    });
    return poll;
}
async function getAllExistingPolls() {
    const polls = [];
    PollGun.map().on(async (data, key)=>{
        const poll = await getPollByKey({
            key
        });
        polls.push(poll);
    });
    return polls;
}


/***/ }),

/***/ 79093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports CompositionContext, useCompositionContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {},
    dropMetadata () {}
});
const useCompositionContext = ()=>useContext(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 65800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports PostInfoProvider, usePostInfo, usePostInfoDetails, usePostInfoSharedPublic */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78037);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86716);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47175);





const Context = (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const PostInfoProvider = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)((props)=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    });
});
function usePostInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);
}
const usePostInfoDetails = new Proxy({
    __proto__: null
}, {
    get (_, key) {
        if (typeof key === 'symbol') throw new Error();
        if (_[key]) return _[key];
        _[key] = function usePostInfoDetails() {
            const postInfo = usePostInfo();
            if (!postInfo) throw new TypeError('No post context');
            if (!(key in postInfo)) throw new TypeError();
            const k = postInfo[key];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.ValueRef) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useValueRef */ .E)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ObservableMap */ .vP) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ObservableSet */ .n7) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .useObservableValues */ .pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription__WEBPACK_IMPORTED_MODULE_3__.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}
function usePostInfoSharedPublic() {
    const info = usePostInfoDetails.containingMaskPayload();
    if (info.err) return false;
    const payload = info.val;
    if (payload.version !== -38) return false;
    return !!payload.sharedPublic;
}


/***/ }),

/***/ 73400:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: PluginI18NFieldRender, useActivatedPlugin, useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAllPluginsWeb3State, useLookupAddress, usePluginI18NField, usePluginWrapper, useReverseAddress

// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(93554);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3UI.ts
var useActivatedPluginWeb3UI = __webpack_require__(44877);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3State.ts
var useActivatedPluginWeb3State = __webpack_require__(61779);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAllPluginsWeb3State.ts
var useAllPluginsWeb3State = __webpack_require__(63332);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useLookupDomain.ts
var useLookupDomain = __webpack_require__(19564);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useReverseAddress.ts
var useReverseAddress = __webpack_require__(24255);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/useI18N.tsx


function PluginI18NFieldRender({ pluginID , field  }) {
    const [t] = useTranslation();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        if (field.i18nKey) {
            const translate = t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            });
            return(/*#__PURE__*/ _jsx(_Fragment, {
                children: translate
            }));
        }
        return(/*#__PURE__*/ _jsx(_Fragment, {
            children: field.fallback
        }));
    }
    return(/*#__PURE__*/ _jsx(_Fragment, {
        children: field
    }));
}
function usePluginI18NField() {
    const [t] = useTranslation();
    return function(pluginID, field) {
        if (!field.i18nKey) return field.fallback;
        if (!field.i18nKey.startsWith('__')) {
            /**
             * This field is used in the definition of a plugin in form of
             * { fallback: "Text", i18nKey: "name" }
             *
             * Which is highly not likely to be analyzed by the type system.
             * Enforce those key to starts with __, we can exclude those keys
             * from the unused key result to keep the functionality of the analyzer.
             */ console.warn(`[@masknet/plugin-infra] Plugin ${pluginID} uses i18n key ${field.i18nKey}. Please change it to __${field.i18nKey}.`);
            return field.fallback;
        }
        return t(field.i18nKey, {
            ns: pluginID,
            nsSeparator: '%%%',
            defaultValue: field.fallback
        });
    };
}

// EXTERNAL MODULE: ../plugin-infra/src/hooks/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(17515);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/index.ts










/***/ }),

/***/ 93554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useActivatedPlugin */
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51797);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);


function useActivatedPlugin(pluginID, minimalModeEqualsTo) {
    const pluginSNSAdaptor = useActivatedPluginSNSAdaptor(pluginID, minimalModeEqualsTo);
    const pluginDashboard = useActivatedPluginDashboard(pluginID);
    var ref;
    return (ref = pluginSNSAdaptor !== null && pluginSNSAdaptor !== void 0 ? pluginSNSAdaptor : pluginDashboard) !== null && ref !== void 0 ? ref : null;
}


/***/ }),

/***/ 61779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useActivatedPluginWeb3State */
/* harmony import */ var _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93554);

function useActivatedPluginWeb3State(pluginID) {
    const activatedPlugin = useActivatedPlugin(pluginID, 'any');
    var ref;
    return (ref = activatedPlugin === null || activatedPlugin === void 0 ? void 0 : activatedPlugin.Web3State) !== null && ref !== void 0 ? ref : null;
}


/***/ }),

/***/ 44877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useActivatedPluginWeb3UI */
/* harmony import */ var _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93554);

function useActivatedPluginWeb3UI(pluginID) {
    const activatedPlugin = useActivatedPlugin(pluginID, 'any');
    var ref;
    return (ref = activatedPlugin === null || activatedPlugin === void 0 ? void 0 : activatedPlugin.Web3UI) !== null && ref !== void 0 ? ref : null;
}


/***/ }),

/***/ 63332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useAllPluginsWeb3State */
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51797);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9026);


function useAllPluginsWeb3State() {
    const pluginsSNSAdaptor = useActivatedPluginsSNSAdaptor('any');
    const pluginsDashboard = useActivatedPluginsDashboard();
    return [
        ...pluginsSNSAdaptor,
        ...pluginsDashboard
    ].reduce((accumulator, current)=>{
        if (current.Web3State) {
            accumulator[current.ID] = current.Web3State;
        }
        return accumulator;
    }, {});
}


/***/ }),

/***/ 19564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useLookupAddress */
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65418);


function useLookupAddress(domain, pluginId) {
    const { NameService , Utils  } = useWeb3State(pluginId);
    const chainId = useChainId(pluginId);
    return useAsync(async ()=>{
        var ref;
        if ((NameService === null || NameService === void 0 ? void 0 : NameService.lookup) && (Utils === null || Utils === void 0 ? void 0 : (ref = Utils.isValidDomain) === null || ref === void 0 ? void 0 : ref.call(Utils, domain))) {
            return NameService.lookup(domain);
        }
        return '';
    }, [
        NameService,
        Utils,
        domain,
        chainId
    ]);
}


/***/ }),

/***/ 17515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports emptyPluginWrapperMethods, PluginWrapperMethodsContext, usePluginWrapper */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);


/** @internal */ const emptyPluginWrapperMethods = {
    setWrap: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(emptyPluginWrapperMethods)));
function usePluginWrapper(open, options) {
    const { setWidth , setWrap , setWrapperName  } = useContext(PluginWrapperMethodsContext);
    const { width , name  } = options || {};
    useEffect(()=>setWrap(open)
    , [
        open,
        setWrap
    ]);
    useEffect(()=>setWidth(width)
    , [
        width,
        setWidth
    ]);
    useEffect(()=>setWrapperName(name)
    , [
        name,
        setWrapperName
    ]);
    // unwrap when the component is unmounted
    const setWrapRef = useRef(setWrap);
    setWrapRef.current = setWrap;
    useEffect(()=>()=>setWrapRef.current(false)
    , []);
}


/***/ }),

/***/ 24255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useReverseAddress */
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65418);


function useReverseAddress(address, pluginId) {
    const { NameService  } = useWeb3State(pluginId);
    const chainId = useChainId(pluginId);
    return useAsync(async ()=>{
        var ref;
        if (!address) return undefined;
        return NameService === null || NameService === void 0 ? void 0 : (ref = NameService.reverse) === null || ref === void 0 ? void 0 : ref.call(NameService, address);
    }, [
        NameService,
        address,
        chainId
    ]);
}


/***/ }),

/***/ 89729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.j)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65418);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8971);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58073);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73400);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51797);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9026);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78488);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13338);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(65800);
/* harmony import */ var _CompositionContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79093);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79594);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64753);















/***/ }),

/***/ 51797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useActivatedPluginsDashboard, useActivatedPluginDashboard, startPluginDashboard */
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69260);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22083);



const { activated , startDaemon , events  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)((def)=>def.Dashboard
);
const subscription = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on(_servie_events__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, f)
};
function useActivatedPluginsDashboard() {
    return useSubscription(subscription);
}
function useActivatedPluginDashboard(pluginID) {
    const plugins = useSubscription(subscription);
    return plugins.find((x)=>x.ID === pluginID
    );
}
function startPluginDashboard(host) {
    startDaemon(host);
}


/***/ }),

/***/ 9026:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useActivatedPluginsSNSAdaptor, useIsMinimalMode, useActivatedPluginSNSAdaptor, useActivatedPluginSNSAdaptor_Web3Supported, startPluginSNSAdaptor */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22083);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84176);




const { events , activated , startDaemon , minimalMode  } = (0,_manage__WEBPACK_IMPORTED_MODULE_1__/* .createManager */ .m)((def)=>def.SNSAdaptor
);
const activatedSub = {
    getCurrentValue: ()=>[
            ...activated.plugins
        ]
    ,
    subscribe: (f)=>events.on('activateChanged', f)
};
const minimalModeSub = {
    getCurrentValue: ()=>[
            ...minimalMode
        ]
    ,
    subscribe: (f)=>events.on('minimalModeChanged', f)
};
function useActivatedPluginsSNSAdaptor(minimalModeEqualsTo) {
    const minimalMode1 = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(minimalModeSub);
    const result = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(activatedSub);
    if (minimalModeEqualsTo === 'any') return result;
    else if (minimalModeEqualsTo === true) return result.filter((x)=>minimalMode1.includes(x.ID)
    );
    else if (minimalModeEqualsTo === false) return result.filter((x)=>!minimalMode1.includes(x.ID)
    );
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .unreachable */ .t1)(minimalModeEqualsTo);
}
useActivatedPluginsSNSAdaptor.visibility = {
    useMinimalMode: useActivatedPluginsSNSAdaptor.bind(null, true),
    useNotMinimalMode: useActivatedPluginsSNSAdaptor.bind(null, false),
    useAnyMode: useActivatedPluginsSNSAdaptor.bind(null, 'any')
};
function useIsMinimalMode(pluginID) {
    return useSubscription(minimalModeSub).includes(pluginID);
}
/**
 *
 * @param pluginID Get the plugin ID
 * @param visibility Should invisible plugin included?
 * @returns
 */ function useActivatedPluginSNSAdaptor(pluginID, minimalModeEqualsTo) {
    const plugins = useActivatedPluginsSNSAdaptor(minimalModeEqualsTo);
    const minimalMode2 = useSubscription(minimalModeSub);
    const result = plugins.find((x)=>x.ID === pluginID
    );
    if (!result) return result;
    if (minimalModeEqualsTo === 'any') return result;
    else if (minimalModeEqualsTo === true) {
        if (minimalMode2.includes(result.ID)) return result;
        return undefined;
    } else if (minimalModeEqualsTo === false) {
        if (minimalMode2.includes(result.ID)) return undefined;
        return result;
    }
    unreachable(minimalModeEqualsTo);
}
function useActivatedPluginSNSAdaptor_Web3Supported(chainId, pluginID) {
    const plugins = useActivatedPluginsSNSAdaptor('any');
    return plugins.reduce((acc, cur)=>{
        var ref, ref1;
        if (!cur.enableRequirement.web3) {
            acc[cur.ID] = true;
            return acc;
        }
        const supportedChainIds = (ref = cur.enableRequirement.web3) === null || ref === void 0 ? void 0 : (ref1 = ref[pluginID]) === null || ref1 === void 0 ? void 0 : ref1.supportedChainIds;
        var ref2;
        acc[cur.ID] = (ref2 = supportedChainIds === null || supportedChainIds === void 0 ? void 0 : supportedChainIds.includes(chainId)) !== null && ref2 !== void 0 ? ref2 : false;
        return acc;
    }, {});
}
function startPluginSNSAdaptor(currentNetwork, host) {
    startDaemon(host, (id)=>{
        const def = getPluginDefine(id);
        if (!def) return false;
        // boolean | undefined
        const status = def.enableRequirement.networks.networks[currentNetwork];
        if (def.enableRequirement.networks.type === 'opt-in' && status !== true) return false;
        if (def.enableRequirement.networks.type === 'opt-out' && status === true) return false;
        return true;
    });
}


/***/ }),

/***/ 64753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i1": () => (/* binding */ registeredPlugins),
/* harmony export */   "fg": () => (/* binding */ registeredPluginIDs),
/* harmony export */   "_W": () => (/* binding */ getPluginDefine)
/* harmony export */ });
/* unused harmony exports registerPlugin, getRegisteredWeb3Networks, getRegisteredWeb3Providers */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77184);

const __registered = new Map();
const registeredPlugins = {
    [Symbol.iterator]: ()=>__registered.values()
};
const registeredPluginIDs = {
    [Symbol.iterator]: ()=>__registered.keys()
};
function getPluginDefine(id) {
    return __registered.get(id);
}
function registerPlugin(def) {
    var _cache, ref, _cache1, ref1;
    if (__registered.has(def.ID)) return;
    if (!__meetRegisterRequirement(def)) return;
    __registered.set(def.ID, def);
    (ref = (_cache = getRegisteredWeb3Networks_memo.cache).clear) === null || ref === void 0 ? void 0 : ref.call(_cache);
    (ref1 = (_cache1 = getRegisteredWeb3Providers_memo.cache).clear) === null || ref1 === void 0 ? void 0 : ref1.call(_cache1);
}
function getRegisteredPluginsSort_EVM_Ahead() {
    return [
        ...__registered.values()
    ].sort(sort_EVM_ahead);
}
function sort_EVM_ahead(a, b) {
    if (a.ID.includes('evm')) return -1;
    if (b.ID.includes('evm')) return 1;
    return 0;
}
const getRegisteredWeb3Networks_memo = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(()=>{
    return getRegisteredPluginsSort_EVM_Ahead().flatMap((x)=>x.declareWeb3Networks || []
    );
});
const getRegisteredWeb3Providers_memo = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(()=>{
    return getRegisteredPluginsSort_EVM_Ahead().flatMap((x)=>x.declareWeb3Providers || []
    );
});
function getRegisteredWeb3Networks() {
    return getRegisteredWeb3Networks_memo();
}
function getRegisteredWeb3Providers() {
    return getRegisteredWeb3Providers_memo();
}
function __meetRegisterRequirement(def) {
    // arch check
    if ( true && !def.enableRequirement.architecture.app) return false;
    if (false) {}
    // build variant check
    if (true) {
        try {
            if ( true && def.enableRequirement.target !== 'stable') {
                return false;
            } else if (false) {}
        } catch  {
            // process.env.channel might not be possible in each build environment.
            if (def.enableRequirement.target !== 'stable') return false;
        }
    }
    return true;
}


/***/ }),

/***/ 78488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports startPluginWorker, activatedPluginsWorker */
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22083);

const { startDaemon , activated  } = (0,_manage__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


/***/ }),

/***/ 8971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PluginId)
/* harmony export */ });
/* unused harmony export CurrentSNSNetwork */
var CurrentSNSNetwork;
(function(CurrentSNSNetwork) {
    CurrentSNSNetwork[CurrentSNSNetwork["Unknown"] = 0] = "Unknown";
    CurrentSNSNetwork[CurrentSNSNetwork["Facebook"] = 1] = "Facebook";
    CurrentSNSNetwork[CurrentSNSNetwork["Twitter"] = 2] = "Twitter";
    CurrentSNSNetwork[CurrentSNSNetwork["Instagram"] = 3] = "Instagram";
    CurrentSNSNetwork[CurrentSNSNetwork["Minds"] = 4] = "Minds";
})(CurrentSNSNetwork || (CurrentSNSNetwork = {}));
var PluginId;
(function(PluginId) {
    PluginId["Avatar"] = 'com.maskbook.avatar';
    PluginId["Collectible"] = 'com.maskbook.collectibles';
    PluginId["CryptoArtAI"] = 'com.maskbook.cryptoartai';
    PluginId["dHEDGE"] = 'org.dhedge';
    PluginId["EVM"] = 'com.mask.evm';
    PluginId["NextID"] = 'com.mask.next_id';
    PluginId["External"] = 'io.mask.external';
    PluginId["Furucombo"] = 'app.furucombo';
    PluginId["Gitcoin"] = 'co.gitcoin';
    PluginId["GoodGhosting"] = 'co.good_ghosting';
    PluginId["MaskBox"] = 'com.maskbook.box';
    PluginId["Poll"] = 'com.maskbook.poll';
    PluginId["Profile"] = 'com.mask.profile';
    PluginId["Trader"] = 'com.maskbook.trader';
    PluginId["Transak"] = 'com.maskbook.transak';
    PluginId["Valuables"] = 'com.maskbook.tweet';
    PluginId["DAO"] = 'money.juicebox';
    PluginId["Debugger"] = 'io.mask.debugger';
    PluginId["Example"] = 'io.mask.example';
    PluginId["Flow"] = 'com.mask.flow';
    PluginId["RSS3"] = 'bio.rss3';
    PluginId["RedPacket"] = 'com.maskbook.red_packet';
    PluginId["Pets"] = 'com.maskbook.pets';
    PluginId["Snapshot"] = 'org.snapshot';
    PluginId["ITO"] = 'com.maskbook.ito';
    PluginId["Wallet"] = 'com.maskbook.wallet';
    PluginId["PoolTogether"] = 'com.pooltogether';
    PluginId["UnlockProtocol"] = 'com.maskbook.unlockprotocol';
    PluginId["FileService"] = 'com.maskbook.fileservice';
})(PluginId || (PluginId = {}));


/***/ }),

/***/ 40998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createInjectHooksRenderer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78037);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73400);
/* harmony import */ var _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17515);





const PropsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const ref = useRef(emptyPluginWrapperMethods);
        if (PluginWrapperComponent) {
            return(/*#__PURE__*/ _jsx(PluginWrapperComponent, {
                definition: plugin,
                ref: ref,
                children: /*#__PURE__*/ _jsx(PluginWrapperMethodsContext.Provider, {
                    value: ref.current || emptyPluginWrapperMethods,
                    children: element
                })
            }));
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin  }) {
        const t = usePluginI18NField();
        const props = useContext(PropsContext);
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ _jsx(ErrorBoundary, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ _jsx(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const all = usePlugins().filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ _jsx(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ _jsx(SinglePluginWithinErrorBoundary, {
                    plugin: plugin
                }, plugin.ID)
            }, plugin.ID)
        );
        return(/*#__PURE__*/ _jsx(_Fragment, {
            children: all
        }));
    }
    return(/*#__PURE__*/ memo(function PluginsInjectionHookRenderErrorBoundary(props) {
        return(/*#__PURE__*/ _jsx(ErrorBoundary, {
            children: /*#__PURE__*/ _jsx(PluginsInjectionHookRender, {
                ...props
            })
        }));
    }));
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return(/*#__PURE__*/ _jsx(RawHookRender, {
        UI: UI,
        data: data
    }));
    return(/*#__PURE__*/ _jsx(UI, {
        ...data
    }));
}
function RawHookRender({ UI , data  }) {
    const [ref, setRef] = useState();
    const [f, setF] = useState();
    const cancel = useRef();
    useEffect(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort()
        ;
    }, [
        ref,
        UI.init
    ]);
    useEffect(()=>{
        return void (f === null || f === void 0 ? void 0 : f(data));
    }, [
        f,
        data
    ]);
    return(/*#__PURE__*/ _jsx("div", {
        ref: (r)=>ref === r || setRef(r)
    }));
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}


/***/ }),

/***/ 13338:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: createInjectHooksRenderer, createPluginMessage, createPluginRPC, createPluginRPCGenerator

// EXTERNAL MODULE: ../plugin-infra/src/utils/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(40998);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/message.ts

/**
 * Create a plugin message emitter
 * @param pluginID The plugin ID
 *
 * @example
 * export const MyPluginMessage = createPluginMessage(PLUGIN_ID)
 */ function createPluginMessage(pluginID, serializer) {
    const domain = '@plugin/' + pluginID;
    if (cache.has(domain)) return cache.get(domain);
    const messageCenter = new WebExtensionMessage({
        domain
    });
    const events = messageCenter.events;
    if (serializer) messageCenter.serialization = serializer;
    cache.set(domain, events);
    return events;
}
const cache = new Map();

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(73302);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(86716);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/rpc.ts



const log = {
    beCalled: true,
    localError: true,
    remoteError: true,
    requestReplay: true,
    sendLocalStack: true,
    type: 'pretty'
};
function createPluginRPC(key, impl, message, /** Please set this to true if your implementation is a Proxy. */ exoticImplementation) {
    const isBackground = isEnvironment(Environment.ManifestBackground);
    return AsyncCall((exoticImplementation ? getLocalImplementationExotic : getLocalImplementation)(isBackground, `Plugin(${key})`, impl, message), {
        key,
        channel: message.bind(MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}
function createPluginRPCGenerator(key, impl, message) {
    const isBackground = isEnvironment(Environment.ManifestBackground);
    return AsyncGeneratorCall(getLocalImplementation(isBackground, `Plugin(${key})`, impl, message), {
        channel: message.bind(MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}

;// CONCATENATED MODULE: ../plugin-infra/src/utils/index.ts





/***/ }),

/***/ 58073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FF": () => (/* binding */ NetworkPluginID),
/* harmony export */   "V2": () => (/* binding */ CurrencyType)
/* harmony export */ });
/* unused harmony export TokenType */
var NetworkPluginID;
(function(NetworkPluginID) {
    NetworkPluginID["PLUGIN_EVM"] = 'com.mask.evm';
    NetworkPluginID["PLUGIN_FLOW"] = 'com.mask.flow';
    NetworkPluginID["PLUGIN_SOLANA"] = 'com.mask.solana';
})(NetworkPluginID || (NetworkPluginID = {}));
var CurrencyType;
(function(CurrencyType) {
    CurrencyType["NATIVE"] = 'native';
    CurrencyType["BTC"] = 'btc';
    CurrencyType["USD"] = 'usd';
})(CurrencyType || (CurrencyType = {}));
var TokenType;
(function(TokenType) {
    TokenType["Fungible"] = "Fungible";
    TokenType["NonFungible"] = "NonFungible";
})(TokenType || (TokenType = {}));


/***/ }),

/***/ 63019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports usePluginIDContext, usePluginsWeb3StateContext, usePluginWeb3StateContext, PluginsWeb3ContextProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44737);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47175);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58073);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86716);






// constant subscriptions
const ZERO = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)(0);
const ZERO_STRING = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)('0');
const USD_CURRENCY = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)(_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .CurrencyType.USD */ .V2.USD);
const EMPTY_STRING = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)('');
const EMPTY_ARRAY = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)([]);
const EMPTY_OBJECT = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)({});
const FALSE = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)(false);
const NULL = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createConstantSubscription */ .qY)(null);
const PluginIDContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM);
const PluginsWeb3Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function usePluginsWeb3Context() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PluginsWeb3Context);
    if (!context) throw new Error('This hook should be used in a provider.');
    return context;
}
function usePluginWeb3State(pluginID, context) {
    const pluginContext = context[pluginID];
    const { Shared , Utils  } = pluginContext !== null && pluginContext !== void 0 ? pluginContext : {};
    var ref;
    const allowTestnet = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref = Shared === null || Shared === void 0 ? void 0 : Shared.allowTestnet) !== null && ref !== void 0 ? ref : FALSE);
    var ref1;
    const chainId = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref1 = Shared === null || Shared === void 0 ? void 0 : Shared.chainId) !== null && ref1 !== void 0 ? ref1 : ZERO);
    var ref2;
    const account = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref2 = Shared === null || Shared === void 0 ? void 0 : Shared.account) !== null && ref2 !== void 0 ? ref2 : EMPTY_STRING);
    var ref3;
    const networkType = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref3 = Shared === null || Shared === void 0 ? void 0 : Shared.networkType) !== null && ref3 !== void 0 ? ref3 : EMPTY_STRING);
    var ref4;
    const providerType = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref4 = Shared === null || Shared === void 0 ? void 0 : Shared.providerType) !== null && ref4 !== void 0 ? ref4 : EMPTY_STRING);
    var ref5;
    const assetType = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref5 = Shared === null || Shared === void 0 ? void 0 : Shared.assetType) !== null && ref5 !== void 0 ? ref5 : EMPTY_STRING);
    var ref6;
    const nameType = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref6 = Shared === null || Shared === void 0 ? void 0 : Shared.nameType) !== null && ref6 !== void 0 ? ref6 : EMPTY_STRING);
    var ref7;
    const collectibleType = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref7 = Shared === null || Shared === void 0 ? void 0 : Shared.collectibleType) !== null && ref7 !== void 0 ? ref7 : EMPTY_STRING);
    var ref8;
    const transactionType = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref8 = Shared === null || Shared === void 0 ? void 0 : Shared.transactionType) !== null && ref8 !== void 0 ? ref8 : EMPTY_STRING);
    var ref9;
    const currencyType = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref9 = Shared === null || Shared === void 0 ? void 0 : Shared.currencyType) !== null && ref9 !== void 0 ? ref9 : USD_CURRENCY);
    var ref10;
    const prices = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref10 = Shared === null || Shared === void 0 ? void 0 : Shared.prices) !== null && ref10 !== void 0 ? ref10 : NULL);
    var ref11;
    const walletPrimary = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref11 = Shared === null || Shared === void 0 ? void 0 : Shared.walletPrimary) !== null && ref11 !== void 0 ? ref11 : NULL);
    var ref12;
    const wallets = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref12 = Shared === null || Shared === void 0 ? void 0 : Shared.wallets) !== null && ref12 !== void 0 ? ref12 : EMPTY_ARRAY);
    var ref13;
    const fungibleTokens = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref13 = Shared === null || Shared === void 0 ? void 0 : Shared.fungibleTokens) !== null && ref13 !== void 0 ? ref13 : EMPTY_ARRAY);
    var ref14;
    const nonFungibleTokens = (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)((ref14 = Shared === null || Shared === void 0 ? void 0 : Shared.nonFungibleTokens) !== null && ref14 !== void 0 ? ref14 : EMPTY_ARRAY);
    return {
        allowTestnet,
        chainId,
        account,
        networkType,
        providerType,
        assetType,
        nameType,
        collectibleType,
        transactionType,
        currencyType,
        prices,
        walletPrimary,
        wallets,
        fungibleTokens,
        nonFungibleTokens
    };
}
function usePluginsWeb3State() {
    const context = usePluginsWeb3Context();
    const pluginStateEVM = usePluginWeb3State(_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM, context);
    const pluginStateFlow = usePluginWeb3State(_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_FLOW */ .FF.PLUGIN_FLOW, context);
    const pluginStateSolana = usePluginWeb3State(_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_SOLANA */ .FF.PLUGIN_SOLANA, context);
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            [_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_EVM */ .FF.PLUGIN_EVM]: pluginStateEVM,
            [_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_FLOW */ .FF.PLUGIN_FLOW]: pluginStateFlow,
            [_web3_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkPluginID.PLUGIN_SOLANA */ .FF.PLUGIN_SOLANA]: pluginStateSolana
        })
    , [
        pluginStateEVM,
        pluginStateFlow,
        pluginStateSolana
    ]);
}
function usePluginIDContext() {
    return useContext(PluginIDContext);
}
const PluginsWeb3StateContext = (0,unstated_next__WEBPACK_IMPORTED_MODULE_5__/* .createContainer */ .f)(usePluginsWeb3State);
const usePluginsWeb3StateContext = PluginsWeb3StateContext.useContainer;
function usePluginWeb3StateContext(expectedPluginID) {
    const pluginID = usePluginIDContext();
    const pluginsWeb3State = usePluginsWeb3StateContext();
    var ref;
    return (ref = pluginsWeb3State[expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID]) !== null && ref !== void 0 ? ref : {};
}
function PluginsWeb3ContextProvider({ pluginID , value , children  }) {
    return(/*#__PURE__*/ _jsx(PluginIDContext.Provider, {
        value: pluginID,
        children: /*#__PURE__*/ _jsx(PluginsWeb3Context.Provider, {
            value: value,
            children: /*#__PURE__*/ _jsx(PluginsWeb3StateContext.Provider, {
                children: children
            })
        })
    }));
}


/***/ }),

/***/ 65418:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42079);
/* harmony import */ var _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97702);
/* harmony import */ var _useAssetType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73598);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99505);
/* harmony import */ var _useBeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89001);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92878);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(68445);
/* harmony import */ var _useChainColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79182);
/* harmony import */ var _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99842);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38640);
/* harmony import */ var _useCollectibleType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38824);
/* harmony import */ var _useNameType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4058);
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13248);
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(22368);
/* harmony import */ var _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(49581);
/* harmony import */ var _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(68437);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(70767);
/* harmony import */ var _useProviderDescriptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(3358);
/* harmony import */ var _useTokenPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(61069);
/* harmony import */ var _useTransactionType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21901);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(22836);
/* harmony import */ var _useWalletPrimary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(28622);
/* harmony import */ var _useWallets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(4914);
/* harmony import */ var _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(20528);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(24633);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(63019);




























/***/ }),

/***/ 42079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useAccount */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);


/**
 * Get the address of the default wallet
 */ function useAccount(pluginID) {
    var ref;
    const { account , wallets  } = usePluginWeb3StateContext(pluginID);
    var ref1;
    return  true ? (ref1 = (ref = first(wallets)) === null || ref === void 0 ? void 0 : ref.address) !== null && ref1 !== void 0 ? ref1 : '' : 0;
}


/***/ }),

/***/ 99505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useBalance */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65418);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);



function useBalance(expectedChainId, expectedAccount, pluginID) {
    const { Utils  } = useWeb3State();
    const defaultChainId = useChainId(pluginID);
    const defaultAccount = useAccount(pluginID);
    const chainId = expectedChainId !== null && expectedChainId !== void 0 ? expectedChainId : defaultChainId;
    const account = expectedAccount !== null && expectedAccount !== void 0 ? expectedAccount : defaultAccount;
    return useAsyncRetry(async ()=>{
        var ref;
        var ref1;
        return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getLatestBalance) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, account)) !== null && ref1 !== void 0 ? ref1 : '0';
    }, [
        account,
        chainId,
        Utils
    ]);
}


/***/ }),

/***/ 89001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useSingleBlockBeatRetry, useDoubleBlockBeatRetry */
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52522);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68445);



const DEFAULT_SINGLE_BLOCK_DELAY = 15 * 1000;
const DEFAULT_DOUBLE_BLOCK_DELAY = DEFAULT_SINGLE_BLOCK_DELAY * 2;
function useSingleBlockBeatRetry(fn, deps = []) {
    var ref;
    const chainId = useChainId();
    const { Utils  } = useWeb3State();
    var ref1;
    return useBeatRetry(fn, (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getAverageBlockDelay) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : DEFAULT_SINGLE_BLOCK_DELAY, deps);
}
function useDoubleBlockBeatRetry(fn, deps = []) {
    var ref;
    const chainId = useChainId();
    const { Utils  } = useWeb3State();
    var ref2;
    return useBeatRetry(fn, (ref2 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getAverageBlockDelay) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, 2)) !== null && ref2 !== void 0 ? ref2 : DEFAULT_DOUBLE_BLOCK_DELAY, deps);
}


/***/ }),

/***/ 92878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useBlockNumber */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65418);


function useBlockNumber(expectedChainId, pluginID) {
    const { Utils  } = useWeb3State();
    const defaultChainId = useChainId(pluginID);
    const chainId = expectedChainId !== null && expectedChainId !== void 0 ? expectedChainId : defaultChainId;
    return useAsyncRetry(async ()=>{
        var ref;
        return Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getLatestBlockNumber) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId);
    }, [
        Utils,
        chainId
    ]);
}


/***/ }),

/***/ 79182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainColor */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68445);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24633);


function useChainColor(pluginID) {
    var ref;
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.resolveChainColor) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : 'transparent';
}


/***/ }),

/***/ 38640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainDetailed */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68445);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24633);


function useChainDetailed(pluginID) {
    var ref;
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getChainDetailed) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : null;
}


/***/ }),

/***/ 68445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainId */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);

function useChainId(pluginID) {
    return usePluginWeb3StateContext(pluginID).chainId;
}


/***/ }),

/***/ 99842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainIdValid */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68445);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24633);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42079);



function useChainIdValid(pluginID) {
    var ref;
    const account = useAccount(pluginID);
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return !account || ((ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.isChainIdValid) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, "production" === 'development')) !== null && ref1 !== void 0 ? ref1 : false);
}


/***/ }),

/***/ 49581:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useNetworkDescriptor */
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13248);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63019);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);



function useNetworkDescriptor(expectedChainIdOrNetworkTypeOrID, expectedPluginID) {
    var ref, ref1;
    const pluginID = usePluginIDContext();
    const pid = expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID;
    const networkType = useNetworkType(pid);
    var ref2;
    return (ref = getPluginDefine(pid)) === null || ref === void 0 ? void 0 : (ref1 = ref.declareWeb3Networks) === null || ref1 === void 0 ? void 0 : ref1.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((ref2 = expectedChainIdOrNetworkTypeOrID !== null && expectedChainIdOrNetworkTypeOrID !== void 0 ? expectedChainIdOrNetworkTypeOrID : networkType) !== null && ref2 !== void 0 ? ref2 : '')
    );
}


/***/ }),

/***/ 70767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useNetworkDescriptors */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65418);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89729);


function useNetworkDescriptors(expectedPluginID) {
    var ref;
    const pluginID = usePluginIDContext();
    var ref1;
    return (ref1 = (ref = getPluginDefine(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) === null || ref === void 0 ? void 0 : ref.declareWeb3Networks) !== null && ref1 !== void 0 ? ref1 : [];
}


/***/ }),

/***/ 13248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useNetworkType */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);

function useNetworkType(pluginID) {
    return usePluginWeb3StateContext(pluginID).networkType;
}


/***/ }),

/***/ 68437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useProviderDescriptor */
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22368);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63019);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64753);



function useProviderDescriptor(expectedProviderTypeOrID, expectedPluginID) {
    var ref, ref1;
    const pluginID = usePluginIDContext();
    const providerType = useProviderType(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID);
    var ref2;
    return (ref = getPluginDefine(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) === null || ref === void 0 ? void 0 : (ref1 = ref.declareWeb3Providers) === null || ref1 === void 0 ? void 0 : ref1.find((x)=>[
            x.type,
            x.ID
        ].includes((ref2 = expectedProviderTypeOrID !== null && expectedProviderTypeOrID !== void 0 ? expectedProviderTypeOrID : providerType) !== null && ref2 !== void 0 ? ref2 : '')
    );
}


/***/ }),

/***/ 22368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useProviderType */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);

function useProviderType(pluginID) {
    return usePluginWeb3StateContext(pluginID).providerType;
}


/***/ }),

/***/ 22836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useWallet */
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42079);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63019);


function useWallet(pluginID) {
    const account = useAccount(pluginID);
    const { wallets  } = usePluginWeb3StateContext(pluginID);
    return account ? wallets.find((x)=>x.address.toLowerCase() === account.toLowerCase()
    ) : undefined;
}


/***/ }),

/***/ 4914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useWallets */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);

function useWallets(type, pluginID) {
    return usePluginWeb3StateContext(pluginID).wallets;
}


/***/ }),

/***/ 24633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useWeb3State */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);
/* harmony import */ var _hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61779);


function useWeb3State(expectedPluginID) {
    const pluginID = usePluginIDContext();
    var ref;
    return (ref = useActivatedPluginWeb3State(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) !== null && ref !== void 0 ? ref : {};
}


/***/ }),

/***/ 20528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useWeb3UI */
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63019);
/* harmony import */ var _hooks_useActivatedPluginWeb3UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44877);


function useWeb3UI(expectedPluginID) {
    const pluginID = usePluginIDContext();
    var ref;
    return (ref = useActivatedPluginWeb3UI(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) !== null && ref !== void 0 ? ref : {};
}


/***/ }),

/***/ 85287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ko": () => (/* reexport safe */ _servie_events__WEBPACK_IMPORTED_MODULE_0__.Ko),
/* harmony export */   "vP": () => (/* binding */ ObservableMap),
/* harmony export */   "n7": () => (/* binding */ ObservableSet)
/* harmony export */ });
/* unused harmony export ObservableWeakMap */
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69260);


function tick(callback) {
    Promise.resolve().then(callback);
}
class ObservableWeakMap extends WeakMap {
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value)
        );
        return _;
    }
    constructor(...args){
        super(...args);
        this.event = new Emitter();
    }
}
class ObservableMap extends Map {
    clear() {
        super.clear();
        this.size && tick(()=>this.event.emit('clear')
        );
    }
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    set(key, value) {
        const _ = super.set(key, value);
        tick(()=>this.event.emit('set', key, value)
        );
        this.event.emit('set', key, value);
        return _;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}
class ObservableSet extends Set {
    clear() {
        super.clear();
        this.size && tick(()=>this.event.emit('clear')
        );
    }
    delete(key) {
        const _ = super.delete(key);
        tick(()=>this.event.emit('delete', key)
        );
        return _;
    }
    add(...value) {
        value.forEach((x)=>super.add(x)
        );
        this.event.emit('add', value);
        tick(()=>this.event.emit('add', value)
        );
        return this;
    }
    constructor(...args){
        super(...args);
        this.event = new _servie_events__WEBPACK_IMPORTED_MODULE_0__/* .Emitter */ .Q5();
    }
}


/***/ }),

/***/ 94805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87092);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13094);




/***/ }),

/***/ 86716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ko": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.Ko),
/* harmony export */   "vP": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.vP),
/* harmony export */   "n7": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.n7),
/* harmony export */   "C9": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.C9),
/* harmony export */   "qY": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.qY)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87202);
/* harmony import */ var _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55518);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85287);
/* harmony import */ var _MaskPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40764);
/* harmony import */ var _Identifier_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24366);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94805);
/* harmony import */ var _TypedMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73535);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58373);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26899);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64339);
/* harmony import */ var _Persona_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53365);
/* harmony import */ var _Routes_PopupRoutes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74393);
/* harmony import */ var _Routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(66092);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(17018);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(70954);




















/***/ }),

/***/ 87202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export serializer */
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72421);
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79594);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42263);
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
/* harmony import */ var _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55518);
/* harmony import */ var _Identifier_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(24366);
/// <reference path="./typeson.d.ts" />



// @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore
 // @ts-ignore



let typeson;
function setup() {
    const { default: BigNumber  } = bignumber_js__WEBPACK_IMPORTED_MODULE_2__;
    const all = [];
    function addClass(name, constructor) {
        all.push([
            name,
            undefined,
            undefined,
            constructor
        ]);
    }
    typeson = new (typeson__WEBPACK_IMPORTED_MODULE_0___default())({});
    typeson.register((typeson_registry_dist_presets_builtin__WEBPACK_IMPORTED_MODULE_3___default()));
    typeson.register((typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default()));
    typeson.register([
        (typeson_registry_dist_types_blob__WEBPACK_IMPORTED_MODULE_4___default()),
        (typeson_registry_dist_types_file__WEBPACK_IMPORTED_MODULE_5___default()),
        (typeson_registry_dist_types_filelist__WEBPACK_IMPORTED_MODULE_6___default()),
        (typeson_registry_dist_types_imagebitmap__WEBPACK_IMPORTED_MODULE_7___default()),
        (typeson_registry_dist_presets_special_numbers__WEBPACK_IMPORTED_MODULE_8___default())
    ]);
    typeson.register({
        None: [
            (x)=>x === ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
            ,
            ()=>'None'
            ,
            ()=>ts_results__WEBPACK_IMPORTED_MODULE_1__/* .None */ .Hq
        ]
    });
    addClass('Ok', ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok);
    addClass('Err', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG);
    addClass('Some', ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Some */ .bD);
    addClass('BigNumber', BigNumber);
    addClass('ProfileIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_10__/* .ProfileIdentifier */ .WO);
    addClass('ECKeyIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_10__/* .ECKeyIdentifier */ .ob);
    addClass('GroupIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_10__/* .GroupIdentifier */ .xI);
    addClass('PostIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_10__/* .PostIdentifier */ ._P);
    addClass('PostIVIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_10__/* .PostIVIdentifier */ .bb);
    addClass('IdentifierMap', _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_9__/* .IdentifierMap */ .q);
    for (const [name1, ser, des, constructor1] of all){
        Object.defineProperty(constructor1, 'name', {
            configurable: true,
            enumerable: false,
            writable: false,
            value: name1
        });
        typeson.register({
            [name1]: ser && des ? [
                (x)=>x instanceof constructor1
                ,
                ser,
                des
            ] : [
                (x)=>x instanceof constructor1
                ,
                // eslint-disable-next-line @typescript-eslint/no-loop-func
                (x1)=>{
                    const y = Object.assign({}, x1);
                    Object.getOwnPropertySymbols(y).forEach((x)=>Reflect.deleteProperty(y, x)
                    );
                    return typeson.encapsulate(y);
                },
                // eslint-disable-next-line @typescript-eslint/no-loop-func
                (x)=>{
                    const y = typeson.revive(x);
                    Object.setPrototypeOf(y, constructor1.prototype);
                    return y;
                }, 
            ]
        });
    }
}
const serializer = {
    serialization (from) {
        if (!typeson) setup();
        return typeson.encapsulate(from);
    },
    // cspell:disable-next-line
    deserialization (to) {
        if (!typeson) setup();
        try {
            return typeson.revive(to);
        } catch (error) {
            console.error(error);
        }
        return {};
    }
};


/***/ }),

/***/ 58373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qY": () => (/* reexport safe */ _subscription__WEBPACK_IMPORTED_MODULE_8__.qY)
/* harmony export */ });
/* harmony import */ var _getLocalImplementation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3602);
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40068);
/* harmony import */ var _sessionStorageCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73864);
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84477);













/***/ }),

/***/ 84477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qY": () => (/* binding */ createConstantSubscription)
/* harmony export */ });
/* unused harmony exports createSubscriptionFromAsync, mapSubscription, SubscriptionFromValueRef, SubscriptionDebug, ValueRefFromSubscription */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21122);


function createConstantSubscription(value) {
    return {
        getCurrentValue: ()=>value
        ,
        subscribe: ()=>lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z
    };
}
function createSubscriptionFromAsync(f, defaultValue, onChange) {
    // 0 - idle, 1 - updating state, > 1 - waiting state
    let beats = 0;
    let state = defaultValue;
    const { subscribe , trigger  } = getEventTarget();
    f().then((v)=>state = v
    ).finally(trigger);
    const flush = async ()=>{
        state = await f();
        beats -= 1;
        if (beats > 0) {
            beats = 1;
            setTimeout(flush, 0);
        } else if (beats < 0) {
            beats = 0;
        }
        trigger();
    };
    return {
        getCurrentValue: ()=>state
        ,
        subscribe: (sub)=>{
            const a = subscribe(sub);
            const b = onChange(async ()=>{
                beats += 1;
                if (beats === 1) flush();
            });
            return ()=>void [
                    a(),
                    b()
                ]
            ;
        }
    };
}
function getEventTarget() {
    const event = new EventTarget();
    const EVENT = 'event';
    let timer;
    function trigger() {
        clearTimeout(timer);
        // delay to update state to ensure that all settings to be synced globally
        timer = setTimeout(()=>event.dispatchEvent(new Event(EVENT))
        , 600);
    }
    function subscribe(f) {
        event.addEventListener(EVENT, f);
        return ()=>event.removeEventListener(EVENT, f)
        ;
    }
    return {
        trigger,
        subscribe
    };
}
function mapSubscription(sub, mapper) {
    return {
        getCurrentValue () {
            return mapper(sub.getCurrentValue());
        },
        subscribe: sub.subscribe
    };
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
    const ref = new ValueRef(sub.getCurrentValue(), eq);
    sub.subscribe(()=>ref.value = sub.getCurrentValue()
    );
    return ref;
}


/***/ }),

/***/ 97529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export AddressViewer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78037);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            padding: `0 ${theme.spacing(1)}`,
            textAlign: 'right'
        },
        text: {
            paddingTop: 36,
            paddingBottom: 36,
            '& > p': {
                color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).textPrimary
            }
        },
        icon: {
            color: (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .getMaskColor */ .nb)(theme).textPrimary
        },
        iconContainer: {
            display: 'inherit'
        },
        tipList: {
            listStyleType: 'decimal',
            paddingLeft: 16
        }
    })
);
function AddressViewer({ addressName  }) {
    const t = useSharedI18N();
    const { classes  } = useStyles();
    const { type , label , resolvedAddress  } = addressName;
    const typeMap = {
        [AddressNameType.ADDRESS]: t.address_viewer_address_name_address(),
        [AddressNameType.ENS]: t.address_viewer_address_name_ens(),
        [AddressNameType.UNS]: t.address_viewer_address_name_uns(),
        [AddressNameType.DNS]: t.address_viewer_address_name_dns(),
        [AddressNameType.RSS3]: t.address_viewer_address_name_rns(),
        [AddressNameType.GUN]: t.address_viewer_address_name_address(),
        [AddressNameType.THE_GRAPH]: t.address_viewer_address_name_address()
    };
    const rulesTipMap = [
        t.address_viewer_binding_rule1(),
        t.address_viewer_binding_rule2(),
        t.address_viewer_binding_rule3(),
        t.address_viewer_binding_rule4(), 
    ];
    const tooltipRender = /*#__PURE__*/ _jsxs("div", {
        style: {
            textAlign: 'left'
        },
        children: [
            /*#__PURE__*/ _jsx(Typography, {
                variant: "body2",
                children: t.address_viewer_binding_rules_title()
            }),
            /*#__PURE__*/ _jsx("ul", {
                className: classes.tipList,
                children: rulesTipMap.map((item, index)=>/*#__PURE__*/ _jsx("li", {
                        children: item
                    }, index)
                )
            })
        ]
    });
    if (!resolvedAddress) return null;
    return(/*#__PURE__*/ _jsx(Box, {
        className: classes.root,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        flexWrap: "wrap",
        children: /*#__PURE__*/ _jsxs(Box, {
            display: "flex",
            alignItems: "center",
            children: [
                /*#__PURE__*/ _jsxs(Typography, {
                    color: "textPrimary",
                    component: "span",
                    children: [
                        t.address_viewer_current_display_of({
                            type: typeMap[type]
                        }),
                        /*#__PURE__*/ _jsx(Link, {
                            href: resolveAddressLinkOnExplorer(ChainId.Mainnet, resolvedAddress),
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: formatEthereumAddress(label, 4)
                        })
                    ]
                }),
                /*#__PURE__*/ _jsx("div", {
                    className: classes.iconContainer,
                    children: /*#__PURE__*/ _jsx(Tooltip, {
                        title: tooltipRender,
                        arrow: true,
                        placement: "top",
                        PopperProps: {
                            disablePortal: true
                        },
                        children: /*#__PURE__*/ _jsx(InfoOutlinedIcon, {
                            fontSize: "small",
                            className: classes.icon,
                            sx: {
                                lineHeight: 1,
                                marginLeft: 0.5,
                                cursor: 'pointer'
                            }
                        })
                    })
                })
            ]
        })
    }));
}


/***/ }),

/***/ 96838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export AssetPlayer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var iframe_resizer_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58440);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33086);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42421);










const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .makeStyles */ .ZL)()({
    hidden: {
        position: 'absolute',
        visibility: 'hidden'
    }
});
var AssetPlayerState;
(function(AssetPlayerState) {
    AssetPlayerState[AssetPlayerState["LOADING"] = 0] = "LOADING";
    AssetPlayerState[AssetPlayerState["INIT"] = 1] = "INIT";
    AssetPlayerState[AssetPlayerState["NORMAL"] = 2] = "NORMAL";
    AssetPlayerState[AssetPlayerState["ERROR"] = 3] = "ERROR";
})(AssetPlayerState || (AssetPlayerState = {}));
const AssetPlayer = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    var ref7;
    const ref1 = useRef(null);
    const { url , type: type1 , options , iconProps , isFixedIframeSize =true , fallbackResourceLoader  } = props;
    const classes = useStylesExtends(useStyles(), props);
    const [hidden, setHidden] = useState(Boolean(props.renderTimeout));
    const { RPC: RPC_Entries  } = getRPCConstants((ref7 = props.erc721Token) === null || ref7 === void 0 ? void 0 : ref7.chainId);
    const rpc = first(RPC_Entries);
    const erc721Token = rpc ? {
        ...props.erc721Token,
        rpc
    } : undefined;
    const [playerState, setPlayerState] = useState(url || erc721Token ? AssetPlayerState.LOADING : AssetPlayerState.ERROR);
    useEffect(()=>{
        if (!props.renderTimeout || !hidden) return;
        const timer = setTimeout(()=>{
            setHidden(false);
        }, props.renderTimeout);
        return ()=>clearTimeout(timer)
        ;
    }, [
        props.renderTimeout,
        hidden
    ]);
    // #region setup iframe when url and options be changed
    const setIframe = useCallback(()=>{
        // if iframe isn't be init or the load error has been existed
        if (!ref1.current || playerState === AssetPlayerState.ERROR || playerState === AssetPlayerState.NORMAL) return;
        if (!url && !erc721Token) {
            setPlayerState(AssetPlayerState.ERROR);
            return;
        }
        if (playerState === AssetPlayerState.INIT) {
            ref1.current.iFrameResizer.sendMessage({
                url,
                erc721Token,
                type: type1,
                ...options
            });
            return;
        }
    }, [
        url,
        JSON.stringify(erc721Token),
        type1,
        JSON.stringify(options),
        playerState
    ]);
    // #region resource loaded error
    const onMessage = useCallback(({ message  })=>{
        var ref, ref2, ref3, ref4;
        if (((ref = message) === null || ref === void 0 ? void 0 : ref.name) === 'Error') {
            setPlayerState(AssetPlayerState.ERROR);
        }
        if (((ref2 = message) === null || ref2 === void 0 ? void 0 : ref2.type) === 'webglContextLost') {
            setHidden(true);
            setPlayerState(AssetPlayerState.LOADING);
            setTimeout(()=>setHidden(false)
            , 1000);
        }
        if (((ref3 = message.message) === null || ref3 === void 0 ? void 0 : ref3.type) === 'name') {
            var ref5;
            (ref5 = props.setERC721TokenName) === null || ref5 === void 0 ? void 0 : ref5.call(props, message.message.name);
        }
        if (((ref4 = message.message) === null || ref4 === void 0 ? void 0 : ref4.type) === 'sourceType') {
            var ref6;
            (ref6 = props.setSourceType) === null || ref6 === void 0 ? void 0 : ref6.call(props, message.message.name);
        }
    }, []);
    // #endregion
    useUpdateEffect(()=>{
        setIframe();
    }, [
        setIframe
    ]);
    // Workaround for a bug of `iframe-resizer-react`:
    // When the content of iframe loaded, `IframeResizer` triggers a `size` event,
    // but the `height` and `width` value of that `size` event isn't equal to the content.
    // (Sometimes it doesn't matter, if the size of iframe has been set fixed already)
    // Meanwhile `IframeResizer` triggers a `resize` event when the size of
    // parent of iframe changed, this time the returned `height` and `width` is right.
    // So resize the parent manually.
    useEffect(()=>{
        if (playerState !== AssetPlayerState.NORMAL && isFixedIframeSize) return;
        const resize = (height)=>{
            return ()=>{
                var ref;
                if (!((ref = ref1.current) === null || ref === void 0 ? void 0 : ref.parentElement)) return;
                ref1.current.parentElement.style.height = height;
            };
        };
        const noSenseHeight = '100px';
        const timerOne = setTimeout(resize(noSenseHeight), 100);
        const timerTwo = setTimeout(resize(''), 150);
        return ()=>{
            clearTimeout(timerOne);
            clearTimeout(timerTwo);
        };
    }, [
        playerState,
        ref1.current
    ]);
    const IframeResizerMemo = useMemo(()=>hidden ? null : /*#__PURE__*/ _jsx(IframeResizer, {
            src: mediaViewerUrl,
            onInit: (iframe)=>{
                ref1.current = iframe;
                setPlayerState(AssetPlayerState.INIT);
                setIframe();
            },
            className: ![
                AssetPlayerState.NORMAL,
                ...props.showIframeFromInit ? [
                    AssetPlayerState.INIT
                ] : [], 
            ].includes(playerState) ? classes.hidden : classes.iframe,
            onResized: ({ type  })=>{
                if (type === 'init' || playerState === AssetPlayerState.NORMAL) return;
                setPlayerState(AssetPlayerState.NORMAL);
            },
            style: {
                width: playerState !== AssetPlayerState.NORMAL ? 0 : undefined,
                height: playerState !== AssetPlayerState.NORMAL ? 0 : undefined
            },
            checkOrigin: false,
            onMessage: onMessage,
            frameBorder: "0",
            resizeFrom: "child",
            allow: "autoplay",
            allowFullScreen: true
        })
    , [
        hidden,
        playerState,
        classes,
        mediaViewerUrl
    ]);
    var _fallbackResourceLoader, _loadingIcon;
    return(/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                className: playerState === AssetPlayerState.ERROR ? classes.errorPlaceholder : classes.loadingPlaceholder,
                style: {
                    display: playerState === AssetPlayerState.NORMAL ? 'none' : undefined
                },
                children: playerState === AssetPlayerState.ERROR ? (_fallbackResourceLoader = props.fallbackResourceLoader) !== null && _fallbackResourceLoader !== void 0 ? _fallbackResourceLoader : props.fallbackImage ? /*#__PURE__*/ _jsx("img", {
                    className: classes.loadingFailImage,
                    src: props.fallbackImage.toString()
                }) : /*#__PURE__*/ _jsx(MaskPlaceholder, {
                    className: classes.errorIcon,
                    ...iconProps
                }) : (_loadingIcon = props.loadingIcon) !== null && _loadingIcon !== void 0 ? _loadingIcon : /*#__PURE__*/ _jsx(AssetLoadingIcon, {
                    className: classes.loadingIcon
                })
            }),
            IframeResizerMemo
        ]
    }));
})));


/***/ }),

/***/ 30010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ChainIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);



const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        point: {
            width: 12.5,
            height: 12.5,
            borderRadius: 6.25,
            margin: 3.75
        },
        border: {
            border: `1px solid ${theme.palette.background.paper}`
        }
    })
);
const ChainIcon = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ color , size =12.5  })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ _jsx("div", {
        className: classes.point,
        style: {
            width: size,
            height: size,
            backgroundColor: color
        }
    }));
})));


/***/ }),

/***/ 91201:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ERC20TokenList

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var components_TokenIcon = __webpack_require__(40547);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(73360);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var components_LoadingAnimation = __webpack_require__(15148);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
;// CONCATENATED MODULE: ../shared/src/UI/components/ERC20TokenList/ERC20TokenListItem.tsx












const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
        }
    })
);
const ERC20TokenListItem_getERC20TokenListItem = (addedTokens, externalTokens, info, selectedTokens, loadingAsset, account)=>({ data , onSelect  })=>{
        const t1 = useSharedI18N();
        const { classes  } = useStyles();
        const [, addERC20Token] = useAddERC20TokenCallback();
        const [, trustERC20Token] = useTrustERC20TokenCallback();
        const token = data.token;
        if (!token) return null;
        const { address , name , symbol , logoURI  } = token;
        const isNotAdded = some(externalTokens, (t)=>isSameAddress(address, t.address)
        );
        const isAdded = some(addedTokens, (t)=>isSameAddress(address, t.address)
        );
        const onImport = useCallback(async (event)=>{
            event.stopPropagation();
            if (!token || !account) return;
            await addERC20Token(token);
            await trustERC20Token(account, token);
        }, [
            token,
            account
        ]);
        const handleTokenSelect = (e)=>{
            e.stopPropagation();
            onSelect(data);
        };
        const action = useMemo(()=>{
            var _balance;
            return !isNotAdded || isAdded || info.inList && info.from === 'search' ? data.balance === null ? null : /*#__PURE__*/ _jsx("span", {
                children: loadingAsset ? /*#__PURE__*/ _jsx(LoadingAnimation, {}) : Number.parseFloat(new BigNumber(formatBalance((_balance = data.balance) !== null && _balance !== void 0 ? _balance : 0, token.decimals, 6)).toFixed(6))
            }) : /*#__PURE__*/ _jsx(MaskLoadingButton, {
                variant: "contained",
                color: "primary",
                onClick: onImport,
                size: "small",
                className: classes.importButton,
                soloLoading: true,
                loadingIndicator: /*#__PURE__*/ _jsx(LoadingIcon, {
                    sx: {
                        fontSize: 14
                    }
                }),
                children: t1.import()
            });
        }, [
            info,
            isNotAdded,
            isAdded,
            data.balance
        ]);
        return(/*#__PURE__*/ _jsxs(ListItem, {
            button: true,
            className: `${classes.list} dashboard token-list`,
            onClick: handleTokenSelect,
            disabled: selectedTokens.some(currySameAddress(address)),
            children: [
                /*#__PURE__*/ _jsx(ListItemIcon, {
                    children: /*#__PURE__*/ _jsx(TokenIcon, {
                        classes: {
                            icon: classes.icon
                        },
                        address: address,
                        name: name,
                        logoURI: logoURI
                    })
                }),
                /*#__PURE__*/ _jsxs(ListItemText, {
                    classes: {
                        primary: classes.text
                    },
                    children: [
                        /*#__PURE__*/ _jsxs(Typography, {
                            className: classNames(classes.primary, isNotAdded ? classes.import : ''),
                            color: "textPrimary",
                            component: "span",
                            children: [
                                /*#__PURE__*/ _jsx("span", {
                                    className: classes.symbol,
                                    children: symbol
                                }),
                                /*#__PURE__*/ _jsxs("span", {
                                    className: `${classes.name} dashboard token-list-symbol`,
                                    children: [
                                        name,
                                        isAdded && /*#__PURE__*/ _jsx("span", {
                                            children: " • Added By User"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx(Typography, {
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
        }));
    }
;

;// CONCATENATED MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx








const DEFAULT_LIST_HEIGHT = 300;
const Placeholder = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ message , height  })=>/*#__PURE__*/ _jsx(Stack, {
        minHeight: height !== null && height !== void 0 ? height : DEFAULT_LIST_HEIGHT,
        justifyContent: "center",
        alignContent: "center",
        marginTop: "12px",
        children: /*#__PURE__*/ _jsx(Typography, {
            color: "textSecondary",
            textAlign: "center",
            children: message
        })
    })
)));
const ERC20TokenList = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    const t = useSharedI18N();
    const account = useAccount();
    const currentChainId = useChainId();
    var _targetChainId;
    const chainId = (_targetChainId = props.targetChainId) !== null && _targetChainId !== void 0 ? _targetChainId : currentChainId;
    const trustedERC20Tokens = useTrustedERC20Tokens();
    const { value: nativeToken  } = useNativeTokenDetailed(chainId);
    const [keyword, setKeyword] = useState('');
    const { whitelist: includeTokens , blacklist: excludeTokens = [] , tokens =[] , onSelect , FixedSizeListProps , selectedTokens =[] ,  } = props;
    const { ERC20  } = useTokenListConstants(chainId);
    const { value: erc20TokensDetailed = [] , loading: erc20TokensDetailedLoading  } = useERC20TokensDetailedFromTokenLists(ERC20, keyword, nativeToken ? [
        ...trustedERC20Tokens,
        nativeToken
    ] : trustedERC20Tokens, chainId);
    // #region add token by address
    const matchedTokenAddress = useMemo(()=>{
        if (!keyword || !isValidAddress(keyword) || erc20TokensDetailedLoading) return;
        return keyword;
    }, [
        keyword,
        erc20TokensDetailedLoading
    ]);
    const { value: searchedToken , loading: searchedTokenLoading  } = useERC20TokenDetailed(matchedTokenAddress !== null && matchedTokenAddress !== void 0 ? matchedTokenAddress : '');
    // #endregion
    const filteredTokens = erc20TokensDetailed.filter((token)=>(!includeTokens || includeTokens.some(currySameAddress(token.address))) && (!excludeTokens.length || !excludeTokens.some(currySameAddress(token.address)))
    );
    const renderTokens = uniqBy([
        ...tokens,
        ...filteredTokens,
        ...searchedToken ? [
            searchedToken
        ] : []
    ], (x)=>x.address.toLowerCase()
    );
    const { value: assets , loading: assetsLoading , error: assetsError , retry: retryLoadAsset ,  } = useAssetsByTokenList(renderTokens.filter((x)=>isValidAddress(x.address)
    ), chainId);
    const renderAssets = !account || !!assetsError || assetsLoading || searchedTokenLoading ? [
        ...renderTokens
    ].sort(makeSortTokenFn(chainId, {
        isMaskBoost: true
    })).map((token)=>({
            token: token,
            balance: null
        })
    ) : keyword ? assets : [
        ...assets
    ].sort(makeSortAssertFn(chainId, {
        isMaskBoost: true
    }));
    const getPlaceHolder = ()=>{
        if (erc20TokensDetailedLoading) return(/*#__PURE__*/ _jsx(Placeholder, {
            height: FixedSizeListProps === null || FixedSizeListProps === void 0 ? void 0 : FixedSizeListProps.height,
            message: t.erc20_token_list_loading()
        }));
        if (searchedTokenLoading) return(/*#__PURE__*/ _jsx(Placeholder, {
            height: FixedSizeListProps === null || FixedSizeListProps === void 0 ? void 0 : FixedSizeListProps.height,
            message: t.erc20_search_token_loading()
        }));
        if (!renderAssets.length) return(/*#__PURE__*/ _jsx(Placeholder, {
            height: FixedSizeListProps === null || FixedSizeListProps === void 0 ? void 0 : FixedSizeListProps.height,
            message: t.erc20_search_not_token_found()
        }));
        return null;
    };
    return(/*#__PURE__*/ _jsx(SearchableList, {
        SearchFieldProps: {
            placeholder: t.erc20_token_list_placeholder(),
            ...props.SearchTextFieldProps
        },
        onSelect: (asset)=>{
            return onSelect === null || onSelect === void 0 ? void 0 : onSelect(asset.token);
        },
        disableSearch: !!props.disableSearch,
        onSearch: setKeyword,
        data: renderAssets,
        searchKey: [
            'token.address',
            'token.symbol',
            'token.name'
        ],
        itemRender: getERC20TokenListItem(trustedERC20Tokens, searchedToken ? [
            searchedToken
        ] : [], searchedToken ? [
            ...tokens,
            ...erc20TokensDetailed
        ].find((x)=>isSameAddress(x.address, searchedToken.address)
        ) ? {
            from: 'search',
            inList: true
        } : {
            from: 'search',
            inList: false
        } : {
            from: 'defaultList',
            inList: true
        }, selectedTokens, assetsLoading, account),
        placeholder: getPlaceHolder(),
        FixedSizeListProps: FixedSizeListProps
    }));
})));


/***/ }),

/***/ 70345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CrashUI */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84879);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34061);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73360);








function CrashUI({ onRetry , subject , ...error }) {
    const context = useContext(ErrorBoundaryBuildInfoContext);
    const t = useSharedI18N();
    const [showStack, setShowStack] = useState(false);
    // This is a rarely reported crash. It is likely a race condition.
    // https://github.com/DimensionDev/Maskbook/issues?q=Failed+to+execute+%27insertBefore%27+on+%27Node%27+
    // It seems like DOM mutation from out of our application might conflict with React reconciliation.
    // As a temporary fix, try to recover this React tree after 200ms.
    useTimeoutFn(()=>{
        if (error.message.includes("Failed to execute 'insertBefore' on 'Node'")) {
            onRetry();
        }
    }, 200);
    // crash report, will send to GitHub
    const reportTitle = `[Crash] ${error.type}: ${error.message}`;
    const reportBody = `<!--Thanks for the crash report!
Please write down what you're doing when the crash happened, that will help us to fix it easier!-->

I was *doing something...*, then Mask reports an error.

> ${error.message}

Error stack:

<pre>${error.stack}</pre>\n\n${context || ''}`;
    const githubLink = useMemo(()=>{
        const url = new URLSearchParams();
        url.set('title', reportTitle);
        url.set('body', reportBody);
        return 'https://github.com/DimensionDev/Maskbook/issues/new?' + url.toString();
    }, [
        reportBody,
        reportTitle
    ]);
    return(/*#__PURE__*/ _jsx(Root, {
        children: /*#__PURE__*/ _jsxs(Alert, {
            severity: "error",
            variant: "outlined",
            children: [
                /*#__PURE__*/ _jsx(AlertTitle, {
                    children: t.error_boundary_crash_title({
                        subject
                    })
                }),
                /*#__PURE__*/ _jsxs(ErrorTitle, {
                    children: [
                        error.type,
                        ": ",
                        error.message
                    ]
                }),
                /*#__PURE__*/ _jsxs(ActionArea, {
                    children: [
                        /*#__PURE__*/ _jsx(Button, {
                            variant: "contained",
                            color: "primary",
                            onClick: onRetry,
                            children: t.error_boundary_try_to_recover()
                        }),
                        /*#__PURE__*/ _jsx(Button, {
                            href: githubLink,
                            color: "primary",
                            target: "_blank",
                            children: t.error_boundary_report_github()
                        }),
                        /*#__PURE__*/ _jsx(Box, {
                            sx: {
                                flex: 1
                            }
                        }),
                        /*#__PURE__*/ _jsx(IconButton, {
                            color: "inherit",
                            size: "small",
                            onClick: ()=>setShowStack((x)=>!x
                                )
                            ,
                            children: showStack ? /*#__PURE__*/ _jsx(ExpandMore, {}) : /*#__PURE__*/ _jsx(ExpandLess, {})
                        })
                    ]
                }),
                showStack ? /*#__PURE__*/ _jsx(ErrorStack, {
                    children: /*#__PURE__*/ _jsx(Typography, {
                        component: "pre",
                        children: /*#__PURE__*/ _jsx("code", {
                            children: error.stack
                        })
                    })
                }) : null
            ]
        })
    }));
}
const Root = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('div')`
    overflow-x: auto;
    flex: 1;
    width: 100%;
    contain: paint;
    margin-top: 16px;
`;
const ErrorTitle = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('div')`
    user-select: text;
    margin-bottom: 8px;
`;
const ErrorStack = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('div')`
    user-select: text;
    overflow-x: auto;
    contain: strict;
    height: 300px;
`;
const ActionArea = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .ZP)('div')`
    display: flex;
    gap: 8px;
`;


/***/ }),

/***/ 34061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ErrorBoundaryBuildInfoContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

/**
 * Please provide the build info text
 */ const ErrorBoundaryBuildInfoContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)('');


/***/ }),

/***/ 5036:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: CrashUI, ErrorBoundary, ErrorBoundaryBuildInfoContext, withErrorBoundary

// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var ErrorBoundary_CrashUI = __webpack_require__(70345);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(34061);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../shared/src/UI/components/ErrorBoundary/ErrorBoundary.tsx



const map = new WeakMap();
/**
 * Return the ErrorBoundary wrapped version of given Component
 * @param Component The component that need to be wrapped with ErrorBoundary
 */ function withErrorBoundary(Component1) {
    if (map.has(Component1)) return map.get(Component1);
    const C = /*#__PURE__*/ forwardRef((props, ref)=>/*#__PURE__*/ _jsx(ErrorBoundary, {
            children: /*#__PURE__*/ _jsx(Component1, {
                ...props,
                ref: ref
            })
        })
    );
    map.set(Component1, C);
    return C;
}
class ErrorBoundary extends (/* unused pure expression or super */ null && (Component)) {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return(/*#__PURE__*/ _jsx(_Fragment, {
            children: this.props.children
        }));
        return(/*#__PURE__*/ _jsx(CrashUI, {
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
        } catch  {}
        try {
            type = String(this.state.error.name) || '<type not available>';
        } catch  {}
        try {
            message = String(this.state.error.message) || '<message not available>';
        } catch  {}
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





/***/ }),

/***/ 52347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export I18NextProviderHMR */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);


const I18NextProviderHMR = (/* unused pure expression or super */ null && ( false ? 0 : I18nextProvider));


/***/ }),

/***/ 54781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ImageIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);


const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        icon: {}
    };
});
function ImageIcon(props) {
    const { size =48 , icon  } = props;
    const classes = useStylesExtends(useStyles(), props);
    return(/*#__PURE__*/ _jsx("img", {
        height: size,
        width: size,
        src: icon === null || icon === void 0 ? void 0 : icon.toString(),
        className: classes.icon
    }));
}


/***/ }),

/***/ 15148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export LoadingAnimation */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    animated: {
        '@keyframes loadingAnimation': {
            '0%': {
                transform: 'rotate(0deg)'
            },
            '100%': {
                transform: 'rotate(360deg)'
            }
        },
        animation: 'loadingAnimation 1.6s linear infinite'
    }
});
const LoadingAnimation = (props)=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ _jsx(LoadingIcon, {
        ...props,
        className: classNames(classes.animated, props.className)
    }));
};


/***/ }),

/***/ 63282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MiniNetworkSelector */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84879);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73774);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _ChainIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30010);
/* harmony import */ var _WalletIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3194);






const AllNetworkButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(({ theme  })=>({
        display: 'inline-block',
        marginRight: theme.spacing(1),
        padding: 0,
        borderRadius: '50%',
        fontSize: 12,
        '&:hover': {
            boxShadow: 'none'
        },
        opacity: 0.5
    })
);
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>({
        networkSelected: {
            opacity: 1,
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                right: (props.size - 4) / 2,
                display: 'inline-block',
                width: 4,
                height: 4,
                background: _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .MaskColorVar.primary */ .ZN.primary,
                borderRadius: '50%'
            }
        },
        networkDisabled: {
            cursor: 'not-allowed',
            '&:hover': {
                opacity: 0.6
            }
        }
    })
);
const MiniNetworkSelector = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(({ hideAllNetworkButton =false , onSelect , networks =[] , selectedNetwork , disabledNonCurrentNetwork =false , size =30 ,  })=>{
    const { classes  } = useStyles({
        size: size
    });
    return(/*#__PURE__*/ _jsxs(Stack, {
        direction: "row",
        children: [
            !hideAllNetworkButton && /*#__PURE__*/ _jsx(AllNetworkButton, {
                className: !selectedNetwork ? classes.networkSelected : '',
                sx: {
                    width: size,
                    height: size,
                    minWidth: size,
                    lineHeight: `${size}px`
                },
                onClick: ()=>onSelect(null)
                ,
                children: "ALL"
            }),
            networks.filter((x)=>x.isMainnet
            ).map((network)=>{
                return(/*#__PURE__*/ _jsx(Box, {
                    position: "relative",
                    mr: 1,
                    height: size,
                    onClick: ()=>!disabledNonCurrentNetwork && onSelect(network)
                    ,
                    sx: {
                        cursor: 'pointer',
                        opacity: '0.6',
                        ':hover': {
                            opacity: 1
                        },
                        userSelect: 'none',
                        lineHeight: `${size}px`
                    },
                    className: (selectedNetwork === null || selectedNetwork === void 0 ? void 0 : selectedNetwork.ID) === network.ID ? classes.networkSelected : disabledNonCurrentNetwork ? classes.networkDisabled : '',
                    children: network.isMainnet ? /*#__PURE__*/ _jsx(WalletIcon, {
                        networkIcon: network.icon,
                        size: size
                    }) : /*#__PURE__*/ _jsx(ChainIcon, {
                        color: network.iconColor,
                        size: size
                    })
                }, network.ID));
            })
        ]
    }));
})));


/***/ }),

/***/ 40672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export NFTCardStyledAssetPlayer */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _AssetPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96838);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>({
        wrapper: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 160,
            width: 120,
            overflow: 'hidden'
        },
        loadingNftImg: {
            marginTop: 20
        },
        loadingPlaceholder: {
            height: 160,
            width: 120
        },
        loadingIcon: {
            width: 36,
            height: 52
        }
    })
);
function NFTCardStyledAssetPlayer(props) {
    const { chainId , contractAddress , tokenId , fallbackImage , fallbackResourceLoader , url , setERC721TokenName , renderOrder , setSourceType ,  } = props;
    const classes = useStylesExtends(useStyles(), props);
    const theme = useTheme();
    const fallbackImageURL = theme.palette.mode === 'dark' ? /* unused asset import */ undefined : /* unused asset import */ undefined;
    return(/*#__PURE__*/ _jsx(AssetPlayer, {
        erc721Token: {
            chainId,
            contractAddress,
            tokenId: tokenId
        },
        url: url,
        options: {
            autoPlay: true,
            controls: false,
            playsInline: true
        },
        setERC721TokenName: setERC721TokenName,
        setSourceType: setSourceType,
        // It would fail to render as loading too many(>200) iframe at once.
        renderTimeout: renderOrder ? 20000 * Math.floor(renderOrder / 100) : undefined,
        fallbackImage: fallbackImage !== null && fallbackImage !== void 0 ? fallbackImage : fallbackImageURL,
        loadingIcon: /*#__PURE__*/ _jsx(CircularProgress, {
            size: 20,
            className: classes.loadingNftImg
        }),
        classes: {
            iframe: classNames(classes.wrapper, classes.iframe),
            errorPlaceholder: classes.wrapper,
            loadingPlaceholder: classes.wrapper,
            loadingFailImage: classes.loadingFailImage,
            loadingIcon: classes.loadingIcon
        },
        fallbackResourceLoader: fallbackResourceLoader
    }));
}


/***/ }),

/***/ 63973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export QRCode */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86099);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76342);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91732);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86716);








const CACHE_SCOPE = 'qrcode';
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        text: {
            paddingTop: 50
        },
        info: {
            color: theme.palette.mode === 'dark' ? _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"][500] */ .Z[500] : _mui_material_colors__WEBPACK_IMPORTED_MODULE_5__/* ["default"][800] */ .Z[800],
            extDecoration: 'underline',
            cursor: 'pointer'
        }
    })
);
function QRCode({ text , options ={} , canvasProps  }) {
    const ref1 = useRef(null);
    const [error, setError] = useState(false);
    const image = SessionStorageCache.get(CACHE_SCOPE, text);
    const { classes  } = useStyles();
    useEffect(()=>{
        if (!ref1.current || error) return;
        qr.toCanvas(ref1.current, text, options, (err)=>{
            var ref;
            if (err) {
                setError(true);
                SessionStorageCache.remove(CACHE_SCOPE, text);
                throw err;
            }
            const dataURL = (ref = ref1.current) === null || ref === void 0 ? void 0 : ref.toDataURL();
            if (dataURL) {
                SessionStorageCache.set(CACHE_SCOPE, text, dataURL);
            }
        });
    }, [
        options,
        text,
        error
    ]);
    return error ? /*#__PURE__*/ _jsx(_Fragment, {
        children: /*#__PURE__*/ _jsx(Typography, {
            color: "textPrimary",
            variant: "body1",
            className: classes.text,
            children: /*#__PURE__*/ _jsx(Trans, {
                i18nKey: "backup_qrcode_error",
                components: {
                    again: /*#__PURE__*/ _jsx("span", {
                        onClick: ()=>{
                            setError(false);
                        },
                        className: classes.info
                    })
                }
            })
        })
    }) : image ? /*#__PURE__*/ _jsx("img", {
        src: image,
        ...canvasProps
    }) : /*#__PURE__*/ _jsx("canvas", {
        ...canvasProps,
        ref: ref1
    });
}


/***/ }),

/***/ 72197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SelectTokenChip */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73360);
/* harmony import */ var _TokenIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40547);









const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        chip: {
            border: 'none',
            borderRadius: 8,
            paddingLeft: theme.spacing(0.5),
            fontSize: 12
        },
        loadingChip: {
            marginRight: theme.spacing(-0.5),
            fontSize: 12
        },
        icon: {
            color: theme.palette.text.primary,
            pointerEvents: 'none'
        },
        tokenIcon: {
            width: 16,
            height: 16
        },
        noToken: {}
    };
});
// todo: merge into one with SelectTokenChip
function SelectTokenChip(props) {
    const t = useSharedI18N();
    const { token , error , loading =false , readonly =false , ChipProps  } = props;
    const classes = useStylesExtends(useStyles(), props);
    if (loading) return(/*#__PURE__*/ _jsx(Chip, {
        className: classNames(classes.chip, classes.loadingChip),
        icon: /*#__PURE__*/ _jsx(CircularProgress, {
            size: 16
        }),
        size: "small",
        clickable: false,
        variant: "outlined"
    }));
    if (!token) return(/*#__PURE__*/ _jsx(Chip, {
        className: classNames(classes.chip, classes.noToken),
        label: t.select_token(),
        size: "small",
        clickable: !readonly,
        ...ChipProps
    }));
    if (token && error) return(/*#__PURE__*/ _jsx(Chip, {
        className: classes.chip,
        icon: /*#__PURE__*/ _jsx(TokenIcon, {
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: /*#__PURE__*/ _jsx(ErrorIcon, {
            className: classes.icon
        }),
        label: token.symbol,
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        // the delete icon only visible when this callback provided
        onDelete: noop,
        ...ChipProps
    }));
    return(/*#__PURE__*/ _jsx(Chip, {
        className: classes.chip,
        icon: /*#__PURE__*/ _jsx(TokenIcon, {
            classes: {
                icon: classes.tokenIcon
            },
            address: token.address,
            name: token.name,
            logoURI: token.logoURI
        }),
        deleteIcon: readonly ? undefined : /*#__PURE__*/ _jsx(ExpandMoreIcon, {
            className: classes.icon
        }),
        color: "default",
        size: "small",
        variant: "outlined",
        clickable: !readonly,
        label: token.symbol,
        // the delete icon only visible when this callback provided
        onDelete: readonly ? undefined : noop,
        ...ChipProps
    }));
}


/***/ }),

/***/ 50777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export TokenAmountPanel */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _SelectTokenChip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72197);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73360);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9580);










const MIN_AMOUNT_LENGTH = 1;
const MAX_AMOUNT_LENGTH = 79;
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    return {
        root: {},
        input: {
            '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0
            },
            '-moz-appearance': 'textfield'
        },
        max: {
            marginRight: theme.spacing(0.2),
            borderRadius: 8,
            fontSize: 12,
            height: 18
        },
        token: {
            whiteSpace: 'pre',
            maxWidth: 300,
            paddingLeft: theme.spacing(1),
            fontSize: 12
        },
        balance: {
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            maxWidth: '80%',
            fontSize: 12,
            top: theme.spacing(0.5),
            position: 'absolute'
        },
        inputShrinkLabel: {
            transform: 'translate(17px, -3px) scale(0.75) !important'
        }
    };
});
// todo: merge into one with TokenAmountPanel
function TokenAmountPanel(props) {
    var ref;
    const { amount , maxAmount , balance , token , onAmountChange , maxAmountShares =1 , label , disableToken =false , disableBalance =false , MaxChipProps ,  } = props;
    const t = useSharedI18N();
    const classes = useStylesExtends(useStyles(), props);
    // #region update amount by self
    const { RE_MATCH_WHOLE_AMOUNT , RE_MATCH_FRACTION_AMOUNT  } = useMemo(()=>{
        return {
            RE_MATCH_FRACTION_AMOUNT: new RegExp(`^\\.\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`),
            RE_MATCH_WHOLE_AMOUNT: new RegExp(`^\\d*\\.?\\d{0,${token === null || token === void 0 ? void 0 : token.decimals}}$`)
        };
    }, [
        token === null || token === void 0 ? void 0 : token.decimals
    ]);
    const onChange = useCallback((ev)=>{
        const amount_ = ev.currentTarget.value.replace(/,/g, '.');
        if (RE_MATCH_FRACTION_AMOUNT.test(amount_)) onAmountChange(`0${amount_}`);
        else if (amount_ === '' || RE_MATCH_WHOLE_AMOUNT.test(amount_)) onAmountChange(amount_);
    }, [
        onAmountChange,
        RE_MATCH_WHOLE_AMOUNT,
        RE_MATCH_FRACTION_AMOUNT
    ]);
    // #endregion
    return(/*#__PURE__*/ _jsx(MaskTextField, {
        className: classes.root,
        label: label,
        fullWidth: true,
        required: true,
        type: "text",
        value: amount,
        onChange: onChange,
        placeholder: "0.0",
        InputProps: {
            inputProps: {
                autoComplete: 'off',
                autoCorrect: 'off',
                title: 'Token Amount',
                inputMode: 'decimal',
                min: 0,
                minLength: MIN_AMOUNT_LENGTH,
                maxLength: MAX_AMOUNT_LENGTH,
                pattern: '^[0-9]*[.,]?[0-9]*$',
                spellCheck: false,
                className: classes.input
            },
            endAdornment: disableToken ? null : token ? /*#__PURE__*/ _jsxs(Box, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ _jsxs(Typography, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: [
                            t.balance(),
                            ":",
                            /*#__PURE__*/ _jsx(FormattedBalance, {
                                value: balance,
                                decimals: token.decimals,
                                significant: 6,
                                formatter: formatBalance
                            })
                        ]
                    }) : null,
                    /*#__PURE__*/ _jsxs(Box, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: 2
                        },
                        children: [
                            balance !== '0' && !disableBalance ? /*#__PURE__*/ _jsx(Chip, {
                                classes: {
                                    root: classNames(classes.max, MaxChipProps === null || MaxChipProps === void 0 ? void 0 : (ref = MaxChipProps.classes) === null || ref === void 0 ? void 0 : ref.root),
                                    ...MaxChipProps === null || MaxChipProps === void 0 ? void 0 : MaxChipProps.classes
                                },
                                size: "small",
                                label: "MAX",
                                clickable: true,
                                color: "primary",
                                variant: "outlined",
                                onClick: ()=>{
                                    onAmountChange(formatBalance(new BigNumber(maxAmount !== null && maxAmount !== void 0 ? maxAmount : balance).dividedBy(maxAmountShares).decimalPlaces(0, 1), token.decimals));
                                },
                                ...MaxChipProps
                            }) : null,
                            /*#__PURE__*/ _jsx(SelectTokenChip, {
                                token: token,
                                ...props.SelectTokenChip
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ _jsxs(Box, {
                className: classes.token,
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: 2
                },
                children: [
                    !disableBalance ? /*#__PURE__*/ _jsx(Typography, {
                        className: classes.balance,
                        color: "textSecondary",
                        variant: "body2",
                        component: "span",
                        children: "-"
                    }) : null,
                    /*#__PURE__*/ _jsx(SelectTokenChip, {
                        token: token,
                        ...props.SelectTokenChip
                    })
                ]
            }),
            ...props.InputProps
        },
        InputLabelProps: {
            shrink: true,
            classes: {
                shrink: classes.inputShrinkLabel
            }
        },
        ...props.TextFieldProps
    }));
}


/***/ }),

/***/ 40547:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: TokenIcon, TokenIconUI

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(84127);
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenIcon/TokenIconSpecialIconList.json
const TokenIconSpecialIconList_namespaceObject = [];
;// CONCATENATED MODULE: ../shared/src/UI/components/TokenIcon/index.tsx








function getFallbackIcons(address, baseURIs) {
    const checkSummedAddress = formatEthereumAddress(address);
    if (isSameAddress(getTokenConstants().NATIVE_TOKEN_ADDRESS, checkSummedAddress)) {
        return baseURIs.map((x)=>`${x}/info/logo.png`
        );
    }
    const specialIcon = SPECIAL_ICON_LIST.find(currySameAddress(address));
    if (specialIcon) return [
        specialIcon.logo_url
    ];
    // load from remote
    return baseURIs.map((x)=>`${x}/assets/${checkSummedAddress}/logo.png`
    );
}
const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            backgroundColor: theme.palette.common.white,
            margin: 0
        }
    })
);
function TokenIcon(props) {
    const currentChainId = useChainId();
    const { address , logoURI , name , chainId =currentChainId , AvatarProps , classes  } = props;
    let _logoURI = logoURI;
    if (!logoURI && isSameAddress(getTokenConstants().NATIVE_TOKEN_ADDRESS, formatEthereumAddress(address))) {
        const nativeToken = getChainDetailed(chainId);
        _logoURI = nativeToken === null || nativeToken === void 0 ? void 0 : nativeToken.nativeCurrency.logoURI;
    }
    const { TOKEN_ASSET_BASE_URI  } = useTokenAssetBaseURLConstants(chainId);
    const fallbackLogos = getFallbackIcons(address, TOKEN_ASSET_BASE_URI !== null && TOKEN_ASSET_BASE_URI !== void 0 ? TOKEN_ASSET_BASE_URI : []);
    const images = _logoURI ? Array.isArray(_logoURI) ? [
        ..._logoURI,
        ...fallbackLogos
    ] : [
        _logoURI,
        ...fallbackLogos
    ] : fallbackLogos;
    const { value: trustedLogoURI , loading  } = useImageFailOver(images, '');
    return(/*#__PURE__*/ _jsx(TokenIconUI, {
        logoURL: loading ? undefined : trustedLogoURI,
        AvatarProps: AvatarProps,
        classes: classes,
        name: name
    }));
}
const TokenIconUI = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    var ref;
    const { logoURL , AvatarProps , name  } = props;
    // add background color to no-img token icon
    const defaultBackgroundColorNumber = (ref = name === null || name === void 0 ? void 0 : name.split('')) === null || ref === void 0 ? void 0 : ref.reduce((total, cur)=>{
        return total + Number(cur === null || cur === void 0 ? void 0 : cur.charCodeAt(0));
    }, 0);
    const defaultBackgroundColor = defaultBackgroundColorNumber ? NO_IMAGE_COLOR === null || NO_IMAGE_COLOR === void 0 ? void 0 : NO_IMAGE_COLOR[defaultBackgroundColorNumber % 5] : undefined;
    const classes = useStylesExtends(useStyles(), props);
    return(/*#__PURE__*/ _jsx(Avatar, {
        className: classes.icon,
        src: logoURL,
        style: {
            backgroundColor: logoURL ? undefined : defaultBackgroundColor
        },
        ...AvatarProps,
        children: name === null || name === void 0 ? void 0 : name.substr(0, 1).toUpperCase()
    }));
})));


/***/ }),

/***/ 3194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export WalletIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42421);
/* harmony import */ var _ImageIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54781);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme, props)=>{
    return {
        root: {
            position: 'relative',
            display: 'flex',
            height: props.size,
            width: props.size
        },
        mainIcon: {
            display: 'block',
            width: '100%',
            height: '100%'
        },
        badgeIcon: {
            position: 'absolute',
            right: -2,
            bottom: -2
        },
        networkIcon: {},
        providerIcon: {
            border: (props === null || props === void 0 ? void 0 : props.isBorderColorNotDefault) ? `1px solid ${theme.palette.background.paper}` : `1px solid ${theme.palette.background.default}`,
            borderRadius: '50%'
        }
    };
});
const WalletIcon = (props)=>{
    const { size =24 , badgeSize =14 , inverse =false , networkIcon , providerIcon  } = props;
    const classes = useStylesExtends(useStyles({
        size: badgeSize > size ? badgeSize : size,
        isBorderColorNotDefault: props.isBorderColorNotDefault
    }), props);
    // #region icon names
    const names = [
        classNames(classes.mainIcon, classes.networkIcon),
        classNames(classes.badgeIcon, classes.providerIcon), 
    ];
    if (inverse) names.reverse();
    // #endregion
    return(/*#__PURE__*/ _jsxs("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            networkIcon ? /*#__PURE__*/ _jsx(ImageIcon, {
                classes: {
                    icon: names[0]
                },
                size: size,
                icon: networkIcon
            }) : null,
            providerIcon ? /*#__PURE__*/ _jsx(ImageIcon, {
                classes: {
                    icon: names[1]
                },
                size: badgeSize,
                icon: providerIcon
            }) : null
        ]
    }));
};


/***/ }),

/***/ 84127:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: useImageFailOver

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(84176);
;// CONCATENATED MODULE: ../shared/src/UI/hooks/useImageFailOver.ts


const cache = new Map();
/**
 * Request images from different sources and get the image's url of the loaded
 * @param urls the url of different image sources
 * @param suffix the image file path suffix
 */ function useImageFailOver(urls, suffix) {
    return useAsync(async ()=>{
        const cacheKey = `${urls.join()}_${suffix}`;
        if (cache.has(cacheKey)) return cache.get(cacheKey);
        try {
            const imgs = urls.map((v)=>v + suffix
            );
            const img = await findAvailableImageURL(imgs);
            const url = urls[imgs.indexOf(img)];
            cache.set(cacheKey, url);
            return url;
        } catch  {
            return '';
        }
    }, [
        urls.join(),
        suffix
    ]);
}

;// CONCATENATED MODULE: ../shared/src/UI/hooks/index.ts



/***/ }),

/***/ 10291:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: AddressViewer, AssetPlayer, ChainIcon, CrashUI, ERC20TokenList, ErrorBoundary, ErrorBoundaryBuildInfoContext, I18NextProviderHMR, ImageIcon, LoadingAnimation, MiniNetworkSelector, NFTCardStyledAssetPlayer, QRCode, SelectTokenChip, TokenAmountPanel, TokenIcon, TokenIconUI, WalletIcon, useImageFailOver, withErrorBoundary

// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(84127);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(40547);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(30010);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(54781);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(3194);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 1 modules
var ERC20TokenList = __webpack_require__(91201);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(63973);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/index.ts + 1 modules
var ErrorBoundary = __webpack_require__(5036);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(72197);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(50777);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(15148);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(63282);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(97529);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(52347);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx
var AssetPlayer = __webpack_require__(96838);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(40672);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts
















;// CONCATENATED MODULE: ../shared/src/UI/index.ts




/***/ }),

/***/ 33086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports SOCIAL_MEDIA_ICON_MAPPING, mediaViewerUrl */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9815);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83730);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85453);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65325);


const SOCIAL_MEDIA_ICON_MAPPING = {
    'twitter.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .TwitterColoredIcon */ .g, {}),
    'facebook.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .FacebookColoredIcon */ .W, {}),
    'minds.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .MindsIcon */ .G, {}),
    'instagram.com': /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .InstagramColoredIcon */ .$, {})
};
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';


/***/ }),

/***/ 17222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createGlobalState */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79594);


/**
 * Create a new global state.
 *
 * @param f The async function that return the data needed.
 * @param subscribe
 * The subscribe function that call the callback when the data changed.
 * It will call the f again to revalidate the data.
 *
 * @returns
 * It returns a tuple.
 *
 * The first item is the react hooks for this resource.
 * The hooks receive a argument "checked".
 * If checked is true, it will return a status object so you can handle the error by yourself.
 *
 * The second item is the revalidation function. It can be called anywhere and returns a Promise.
 * It will resolves regardless the f itself fullfilled or rejected.
 */ function createGlobalState(f1, subscribe) {
    const listeners = new Set();
    let currentValue = None;
    let pending;
    const sub = {
        getCurrentValue () {
            if (currentValue.none) {
                subscribe(revalidate);
                throw pending || (pending = revalidate());
            }
            if (currentValue.val.err) throw currentValue.val.val;
            return currentValue.val.val;
        },
        subscribe (f) {
            listeners.add(f);
            return ()=>listeners.delete(f)
            ;
        }
    };
    function useData() {
        return useSubscription(sub);
    }
    function revalidate() {
        return f1().then((val)=>currentValue = Some(Ok(val))
        , (err)=>currentValue = Some(Err(err))
        ).then(()=>undefined
        ).finally(()=>listeners.forEach((f)=>f()
            )
        );
    }
    return [
        useData,
        revalidate
    ];
}


/***/ }),

/***/ 24073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "pv": () => (/* reexport safe */ _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__.p)
/* harmony export */ });
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84081);
/* harmony import */ var _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9790);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63798);
/* harmony import */ var _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12293);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95182);
/* harmony import */ var _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36013);
/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17222);









/***/ }),

/***/ 63798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useMenuContext, useMenu, useMenuConfig */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);




/** Provide ShadowRootMenu for useMenu in content script. */ const useMenuContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(Menu)));
/**
 * A util hooks for easier to use `<Menu>`s.
 *
 * If you need configuration, please use useMenuConfig
 */ // ! Do not change signature of this. Change useMenuConfig instead.
function useMenu(...elements) {
    return useMenuConfig(elements, {});
}
function useMenuConfig(elements, config) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [status, setOpen] = useState(false);
    const open = useCallback((anchorElOrEvent)=>{
        let element;
        if (anchorElOrEvent instanceof HTMLElement) {
            element = anchorElOrEvent;
        } else {
            element = anchorElOrEvent.currentTarget;
        }
        setAnchorEl(element);
        setOpen(true);
        // HACK: it seems like anchor doesn't work correctly
        // but a force repaint can solve the problem.
        window.requestAnimationFrame(update);
    }, []);
    const update = useUpdate();
    const close = useCallback(()=>setOpen(false)
    , []);
    const Menu1 = useContext(useMenuContext);
    return [
        /*#__PURE__*/ _jsx(Menu1, {
            open: status,
            onClose: close,
            onClick: close,
            anchorEl: anchorEl,
            ...config,
            children: elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ isValidElement(element) ? /*#__PURE__*/ cloneElement(element, {
                    ...element.props,
                    key
                }) : element
            )
        }, "menu"),
        open,
        close, 
    ];
}


/***/ }),

/***/ 9790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86716);



function useObservableValues(map) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>({
            getCurrentValue: ()=>[
                    ...map.values()
                ]
            ,
            subscribe: (callback)=>{
                return map.event.on(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__/* .ALL_EVENTS */ .Ko, callback);
            }
        })
    , [
        map
    ]);
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(subscription);
}


/***/ }),

/***/ 12293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useRemoteControlledDialog */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = useState(uuid()) // create an uuid for every hook
    ;
    const [open, setOpen] = useState(false);
    useEffect(()=>{
        return event1.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote === null || onUpdateByRemote === void 0 ? void 0 : onUpdateByRemote(_ev);
        });
    }, [
        onUpdateByRemote,
        event1,
        HOOK_ID
    ]);
    const timer = useRef(null);
    const onUpdateByLocal = useCallback((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event1.sendToLocal(payload) : event1.sendToVisiblePages(payload);
        }, 100);
    }, [
        event1,
        tabType,
        HOOK_ID
    ]);
    const openDialog = useCallback(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = useCallback(()=>{
        onUpdateByLocal({
            open: false
        });
    }, []);
    return {
        open,
        openDialog,
        closeDialog,
        setDialog: onUpdateByLocal
    };
}


/***/ }),

/***/ 36013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useScrollBottomEvent */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);


function useScrollBottomEvent(ref, cb) {
    const onScroll = useCallback(debounce(function(_ev) {
        // ev.currentTarget is always null when applies debounce().
        const ev = _ev;
        const element = ev.path[0];
        // On some device, there's a slight deviation between `scrollHeight` and `offsetHeight + scrollTop`
        const isBottomArrived = Math.abs(element.scrollHeight - element.offsetHeight - element.scrollTop) < 5;
        if (isBottomArrived) cb();
    }, 300), [
        cb
    ]);
    useLayoutEffect(()=>{
        if (!ref.current) return;
        ref.current.addEventListener('scroll', onScroll);
        // useLayoutEffect() to remove the listener before changes painted on screen.
        return ()=>{
            if (!ref.current) return;
            ref.current.removeEventListener('scroll', onScroll);
        };
    }, [
        onScroll,
        ref.current
    ]);
}


/***/ }),

/***/ 95182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useSnackbarCallback */
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42421);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73360);



function useSnackbarCallback(opts, deps, onSuccess, onError, key, successText) {
    const t = useSharedI18N();
    const { showSnackbar  } = useCustomSnackbar();
    const executor = typeof opts === 'function' ? opts : opts.executor;
    if (typeof opts === 'object') {
        [deps, onSuccess, onError, key, successText] = [
            opts.deps,
            opts.onSuccess,
            opts.onError,
            opts.key,
            opts.successText, 
        ];
    }
    return useCallback((...args)=>{
        return executor(...args).then((res)=>{
            showSnackbar(successText !== null && successText !== void 0 ? successText : t.snackbar_done(), {
                key,
                variant: 'success',
                preventDuplicate: true
            });
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(res);
            return res;
        }, (error)=>{
            showSnackbar(`Error: ${error.message || error}`, {
                key,
                preventDuplicate: true,
                variant: 'error'
            });
            onError === null || onError === void 0 ? void 0 : onError(error);
            throw error;
        });
    }, [
        ...deps,
        showSnackbar,
        executor,
        onError,
        onSuccess,
        key,
        successText
    ]);
}


/***/ }),

/***/ 84081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useValueRef)
/* harmony export */ });
/* unused harmony export useValueRefDelayed */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);


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
    const subscription = useMemo(()=>({
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
    return useSubscription(subscription);
}


/***/ }),

/***/ 78037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.pv),
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_0__.E)
/* harmony export */ });
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24073);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9580);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10291);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73360);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97174);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33086);









/***/ }),

/***/ 73360:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: SharedTrans, useSharedI18N

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.4_881b2a51613eca9a23c14f7ecef9122a/node_modules/react-i18next/dist/es/Trans.js
var Trans = __webpack_require__(61460);
;// CONCATENATED MODULE: ../shared/src/locales/i18n_generated.js
/* eslint-disable */


const bind = (i18nKey) => (props) => (0,react.createElement)(Trans/* Trans */.c, { i18nKey, ns: "shared", ...props })
function useSharedI18N() {
    const { t } = useTranslation("shared")
    return useMemo(
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
const SharedTrans = function proxyBasedTrans() {
    return new Proxy({ __proto__: null }, {
        get(target, key) {
            if (target[key])
                return target[key];
            return (target[key] = bind(key));
        },
    });
}()
;// CONCATENATED MODULE: ../shared/src/locales/index.ts
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts



/***/ }),

/***/ 97174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports languages, addSharedI18N */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75961);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45558);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93495);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88807);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83055);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47359);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86716);
// This file is auto generated. DO NOT EDIT
// Run `npx gulp sync-languages` to regenerate.
// Default fallback language in a family of languages are chosen by the alphabet order
// To overwrite this, please overwrite packages/scripts/src/locale-kit-next/index.ts







const languages = {
    en: _en_US_json__WEBPACK_IMPORTED_MODULE_0__,
    ja: _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__,
    ko: _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__,
    qy: _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__,
    'zh-CN': _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__,
    zh: _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__
};
const addSharedI18N = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createI18NBundle */ .C9)('shared', languages);
// @ts-ignore
if (false) {}


/***/ }),

/***/ 9580:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: FormattedAddress, FormattedBalance, FormattedCurrency

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var src = __webpack_require__(52522);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(42421);
;// CONCATENATED MODULE: ../shared/src/wallet/FormattedBalance.tsx




const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        balance: {
            marginRight: theme.spacing(0.5)
        }
    })
);
const FormattedBalance = (props)=>{
    const { value: value1 , decimals , significant , symbol , minimumBalance , formatter =(value)=>value
      } = props;
    let formatted = formatter(value1 !== null && value1 !== void 0 ? value1 : '0', decimals, significant);
    if (minimumBalance && value1 && !isZero(formatted) && isLessThan(value1, minimumBalance)) {
        formatted = '<' + formatter(minimumBalance, decimals, significant);
    }
    const classes = useStylesExtends(useStyles(), props);
    if (symbol) return(/*#__PURE__*/ _jsxs(Fragment, {
        children: [
            /*#__PURE__*/ _jsx("span", {
                className: classes.balance,
                children: formatted
            }),
            /*#__PURE__*/ _jsx("span", {
                className: classes === null || classes === void 0 ? void 0 : classes.symbol,
                children: symbol
            })
        ]
    }));
    return(/*#__PURE__*/ _jsx(Fragment, {
        children: formatted
    }));
};

;// CONCATENATED MODULE: ../shared/src/wallet/FormattedAddress.tsx



const FormattedAddress = ({ address , size , formatter =identity  })=>{
    if (!address) return null;
    return(/*#__PURE__*/ _jsx(Fragment, {
        children: formatter(address, size)
    }));
};

;// CONCATENATED MODULE: ../shared/src/wallet/FormattedCurrency.tsx


const FormattedCurrency = ({ value: value1 , sign: sign1 , symbol: symbol1 , formatter =(value, sign, symbol)=>{
    return `${sign} ${value} ${symbol === null || symbol === void 0 ? void 0 : symbol.toUpperCase()}`.trim();
} ,  })=>{
    return(/*#__PURE__*/ _jsx(Fragment, {
        children: formatter(value1, sign1, symbol1)
    }));
};

;// CONCATENATED MODULE: ../shared/src/wallet/index.ts





/***/ }),

/***/ 26865:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ButtonGroupTabList, ButtonTab

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(84879);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTab.tsx



const TabButtonWrap = (0,styled/* default */.ZP)(Button/* default */.Z)(({ theme  })=>({
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        flex: 1
    })
);
/**
 * This is an alternative implementation of Tab component, to use with <ButtonGroupTabList>.
 */ const ButtonGroupTab_ButtonTab = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const activated = !!props.selected;
    const { onChange , onClick , value  } = props;
    const handleClick = (event)=>{
        if (!activated && onChange) onChange(event, String(value));
        if (onClick) onClick(event);
    };
    // TODO: replace secondary to correct theme color
    return(/*#__PURE__*/ _jsx(TabButtonWrap, {
        ref: ref,
        role: "tab",
        ...props,
        disableElevation: true,
        variant: "contained",
        color: activated ? 'primary' : 'secondary',
        "aria-selected": activated,
        onClick: handleClick,
        onChange: undefined
    }));
})));

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/ButtonGroupTabList.tsx





/**
 * This component is like TabList + Tabs in the @mui/material.
 * It should be used with <ButtonGroupTab>.
 *
 * Warning: Only a few "value" and "label" props on the @mui/material <Tab> component will work.
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
 */ const ButtonGroupTabList = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const context = useTabContext();
    if (context === null) throw new TypeError('No TabContext provided');
    const children = Children.map(props.children, (child)=>{
        if (!/*#__PURE__*/ isValidElement(child)) return child;
        const extra = {
            'aria-controls': getPanelId(context, child.props.value),
            id: getTabId(context, child.props.value),
            selected: child.props.value === context.value,
            onChange: props.onChange
        };
        if (child.type === Tab) {
            return(/*#__PURE__*/ _jsx(ButtonTab, {
                value: child.props.value,
                ...extra,
                children: child.props.label
            }));
        }
        return(/*#__PURE__*/ cloneElement(child, extra));
    });
    const { onChange , ...rest } = props;
    return(/*#__PURE__*/ _jsx(ButtonGroup, {
        ...rest,
        ref: ref,
        role: "tablist",
        children: children
    }));
})));

;// CONCATENATED MODULE: ../theme/src/Components/ButtonGroupTab/index.ts




/***/ }),

/***/ 85274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CountdownButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);



const CountdownButton = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const { duration =60 , children , repeatContent ='Resend' , onClick , disabled , ...others } = props;
    const [countdown, setCountdown] = useState(undefined);
    const handleClick = (event)=>{
        setCountdown(duration);
        onClick === null || onClick === void 0 ? void 0 : onClick(event);
    };
    const content = useMemo(()=>{
        if (countdown) {
            return `${children} (${countdown})`;
        } else if (countdown === 0) {
            return repeatContent;
        } else {
            return children;
        }
    }, [
        countdown
    ]);
    useEffect(()=>{
        if (countdown) {
            const timer = setTimeout(()=>{
                setCountdown(countdown - 1);
            }, 1000);
            return ()=>{
                clearTimeout(timer);
            };
        }
        return ()=>{};
    }, [
        countdown
    ]);
    return(/*#__PURE__*/ _jsx(Button, {
        ref: ref,
        ...others,
        onClick: handleClick,
        disabled: !!countdown || disabled,
        children: content
    }));
})));


/***/ }),

/***/ 43175:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports MaskDialog, useMaskDialog */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6859);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55190);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18527);






/**
 * This component is used to provide a most common dialog practice in Mask design.
 *
 * But all the primitives are tweaked to fit the design
 * Therefore it also OK to not use this component if you need a special one.
 */ const MaskDialog = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    const { title , onBack , onClose , open , children , DialogProps , ...inferredDialogProps } = props;
    const dialogProps = {
        onBackdropClick: onClose,
        onClose,
        open,
        ...inferredDialogProps,
        ...DialogProps
    };
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = useDialogStackActor(open);
    return usePortalShadowRoot((container)=>/*#__PURE__*/ _jsx(IncreaseStack, {
            children: /*#__PURE__*/ _jsxs(Dialog, {
                container: container,
                ...dialogProps,
                ...extraProps,
                children: [
                    shouldReplaceExitWithBack ? // replace onClose with onBack when and only when there is no onBack
                    /*#__PURE__*/ _jsx(MaskDialogTitle, {
                        onBack: onBack || onClose,
                        onClose: onBack ? onClose : undefined,
                        children: title
                    }) : /*#__PURE__*/ _jsx(MaskDialogTitle, {
                        onBack: onBack,
                        onClose: onClose,
                        children: title
                    }),
                    children
                ]
            })
        })
    );
})));
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

/***/ 18527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useDialogStackActor, DialogStackingProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);


const StackingScopeEnabled = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(false)));
const Stack = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    level: -1,
    onHideChange (shouldHide) {}
});
/**
 * If you're using <Dialog> on its own and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support the following attributes with the same semantics with MUI Dialog component.
 *
 * - disableEscapeKeyDown
 * - disableScrollLock
 * - hideBackdrop
 * - style
 * - aria-hidden
 * - open
 * - transitionDuration
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const { shouldReplaceExitWithBack, extraProps } = useDialogStackConsumer(open)
 *     return <IncreaseStack>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </IncreaseStack>
 * }
 */ function useDialogStackActor(open) {
    const selfID = useRef(Math.random());
    const featureEnabled = useContext(StackingScopeEnabled);
    const { level: upperLevel , onHideChange  } = useContext(Stack);
    // this is an object that stores all request hiding state of it's decedents.
    // e.g for component tree:
    // <Dialog1> (selfID=0)
    // ---- <Dialog2> (selfID=1)
    // ---- <Dialog3> (selfID=2)
    //
    // When dialog2 opened, it will set hide of Dialog1 to { 1: true }
    // If any value in hide is true, it means one of it decedents requested to hide this parent.
    const [hide1, setHide] = useState({});
    const LatestOnHideChange = useRef(onHideChange);
    LatestOnHideChange.current = onHideChange;
    // Here we rely on the assumption that level is impossible to change.
    // because it requires a reorder in the component tree, which is not possible to happen
    // in React's reconciliation algorithm
    const Increase = useRef(null);
    if (!Increase.current) {
        Increase.current = function IncreaseStackLevel(props) {
            return(/*#__PURE__*/ _jsx(Stack.Provider, {
                children: props.children,
                value: {
                    level: upperLevel + 1,
                    onHideChange: (hide)=>{
                        setHide((val)=>({
                                ...val,
                                [selfID.current]: hide
                            })
                        );
                    }
                }
            }));
        };
    }
    useEffect(()=>{
        if (!featureEnabled) return LatestOnHideChange.current(false);
        LatestOnHideChange.current(open);
    }, [
        featureEnabled,
        open
    ]);
    useEffect(()=>{
        return ()=>LatestOnHideChange.current(false)
        ;
    }, []);
    const returnVal = {
        shouldReplaceExitWithBack: upperLevel !== -1,
        extraProps: {
            open
        },
        IncreaseStack: Increase.current
    };
    if (!featureEnabled || !open) return returnVal;
    if (returnVal.shouldReplaceExitWithBack) {
        returnVal.extraProps.transitionDuration = 0;
    }
    if (Object.values(hide1).some(Boolean)) {
        returnVal.extraProps = {
            ...returnVal.extraProps,
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true
        };
    }
    return returnVal;
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
    return(/*#__PURE__*/ _jsx(StackingScopeEnabled.Provider, {
        children: props.children,
        value: !props.disabled
    }));
}


/***/ }),

/***/ 55190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MaskDialogTitle */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84879);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94513);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);




const Title = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(({ theme  })=>({
        display: 'flex',
        alignItems: 'center',
        padding: `${theme.spacing(1)} ${theme.spacing(3)}`
    })
);
const MaskDialogTitle = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    const { children , onBack , onClose  } = props;
    const backButton = onBack ? /*#__PURE__*/ _jsx(IconButton, {
        size: "large",
        onClick: onBack,
        edge: "start",
        color: "inherit",
        sx: {
            marginRight: '8px'
        },
        children: /*#__PURE__*/ _jsx(ArrowBack, {})
    }) : null;
    const closeButton = onClose ? /*#__PURE__*/ _jsx(IconButton, {
        size: "large",
        onClick: onClose,
        edge: "end",
        color: "inherit",
        children: /*#__PURE__*/ _jsx(Close, {})
    }) : null;
    return(/*#__PURE__*/ _jsxs(Title, {
        children: [
            backButton,
            /*#__PURE__*/ _jsx(Typography, {
                component: "span",
                variant: "h6",
                children: children
            }),
            /*#__PURE__*/ _jsx(Box, {
                sx: {
                    flex: 1
                }
            }),
            closeButton
        ]
    }));
})));


/***/ }),

/***/ 47998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports FolderTabPanel, FolderTabs */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99821);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50397);





const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()((theme, _, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const inactiveColor = isDark ? theme.palette.grey['50'] : _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBg */ .ZN.twitterBg;
    const selected = {};
    return {
        folderTabs: {},
        selected,
        tabList: {
            display: 'flex',
            gap: 8
        },
        tab: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            height: 40,
            borderRadius: '8px 8px 0 0',
            cursor: 'pointer',
            backgroundColor: inactiveColor,
            border: `1px solid ${inactiveColor}`,
            borderBottomColor: 'transparent',
            color: theme.palette.text.secondary,
            position: 'relative',
            boxSizing: 'border-box',
            [`&.${refs.selected}`]: {
                backgroundColor: theme.palette.background.paper,
                borderColor: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine,
                color: theme.palette.primary.main
            },
            // cover bottom border of the active tab
            [`&.${refs.selected}::after`]: {
                position: 'absolute',
                content: '""',
                height: 2,
                borderLeft: `1px solid ${_constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine}`,
                borderRight: `1px solid ${_constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine}`,
                backgroundColor: theme.palette.background.paper,
                bottom: '-2px',
                left: -1,
                right: -1
            }
        },
        tabPanel: {
            backgroundColor: theme.palette.background.paper
        },
        tabContent: {
            border: `1px solid ${_constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.twitterBorderLine */ .ZN.twitterBorderLine}`,
            padding: 12,
            borderRadius: '0 0 8px 8px'
        }
    };
});
const FolderTabPanel = ({ className , ...rest })=>{
    const { classes  } = useStyles();
    return(/*#__PURE__*/ _jsx("div", {
        className: classnames(classes.tabPanel, className),
        role: "tabpanel",
        ...rest
    }));
};
const FolderTabs = ({ children: childNodes , defaultValue =0 , ...rest })=>{
    const { classes  } = useStyles();
    const [value, setValue] = useState(defaultValue);
    const tabs = Children.map(childNodes, (child, index)=>{
        const label = child.props.label;
        var _value;
        const childValue = (_value = child.props.value) !== null && _value !== void 0 ? _value : index;
        const selected = value === childValue;
        return(/*#__PURE__*/ _jsx("button", {
            tabIndex: index === 0 ? 0 : -1,
            role: "tab",
            className: classnames(classes.tab, selected ? classes.selected : null),
            onClick: ()=>setValue(childValue)
            ,
            children: label
        }, label));
    });
    const children = Children.map(childNodes, (child, index)=>{
        var _value;
        const childValue = (_value = child.props.value) !== null && _value !== void 0 ? _value : index;
        const selected = value === childValue;
        return selected ? child : null;
    });
    if (!tabs.length) return null;
    return(/*#__PURE__*/ _jsxs("div", {
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: classes.tabList,
                role: "tablist",
                children: tabs
            }),
            /*#__PURE__*/ _jsx("div", {
                className: classes.tabContent,
                children: children
            })
        ]
    }));
};


/***/ }),

/***/ 56834:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MaskLoadingButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);




const MaskLoadingButton = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo(/*#__PURE__*/ forwardRef((props, ref)=>{
    const { onClick , children , soloLoading , variant , ...rest } = props;
    // Solo loading doesn't apply when there is a left/right icon.
    const isSoloLoading = soloLoading && !props.startIcon && !props.endIcon && !props.loadingPosition;
    const [loading, setLoading] = useState(false);
    const handleClick = useCallback(async (event)=>{
        setLoading(true);
        try {
            await onClick(event);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            if (typeof error === 'string') {
                throw new Error(error);
            }
        }
    }, [
        onClick
    ]);
    return(/*#__PURE__*/ _jsx(LoadingButton, {
        loadingPosition: rest.startIcon ? 'start' : rest.endIcon ? 'end' : undefined,
        loading: loading,
        loadingIndicator: isSoloLoading ? /*#__PURE__*/ _jsx(CircularProgress, {
            color: "primary",
            size: 16
        }) : undefined,
        ...rest,
        onClick: handleClick,
        variant: isSoloLoading && loading ? 'text' : variant,
        component: "button",
        ref: ref,
        children: children
    }));
}))));


/***/ }),

/***/ 93957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export PhoneNumberField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99821);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23678);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76342);





const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .Z)()({
    country: {
        width: '120px',
        marginRight: '10px'
    },
    phone: {
        width: '100%'
    }
});
const PhoneNumberField = ({ label , value , error , onBlur , countryPlaceholder ='+1' , onChange  })=>{
    const { classes  } = useStyles();
    const [phone, setPhone] = useState(value.phone);
    const [countryCode, setCountryCode] = useState(value.country);
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
    return(/*#__PURE__*/ _jsxs("div", {
        children: [
            label,
            /*#__PURE__*/ _jsxs(Box, {
                sx: {
                    display: 'flex',
                    alignItems: 'flex-start'
                },
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: classes.country,
                        children: /*#__PURE__*/ _jsx(MaskTextField, {
                            value: countryCode,
                            onChange: handleCountryCodeChange,
                            placeholder: countryPlaceholder
                        })
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: classes.phone,
                        children: /*#__PURE__*/ _jsx(MaskTextField, {
                            fullWidth: true,
                            value: phone,
                            onChange: handlePhoneChange,
                            onBlur: onBlur,
                            type: "text",
                            error: !!error,
                            helperText: error
                        })
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 83591:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: MaskSearchableItemInList, SearchableList

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../theme/src/makeStyles.ts
var makeStyles = __webpack_require__(99821);
;// CONCATENATED MODULE: ../theme/src/Components/SearchableList/MaskSearchableItemInList.tsx


const MaskSearchableItemInList_MaskSearchableItemInList = ({ children , data , index , style  })=>/*#__PURE__*/ _jsx("div", {
        style: style,
        children: /*#__PURE__*/ React.createElement(children, {
            data: data.dataSet[index],
            index: index,
            onSelect: data.onSelect
        })
    })
;

// EXTERNAL MODULE: ../theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23678);
;// CONCATENATED MODULE: ../theme/src/Components/SearchableList/SearchableList.tsx










/**
 * This component is used to provide a searchable list in Mask design.
 *
 * @example
 * interface IListDate { name: string }
 * const ListItem = ({ name }: IListDate) => <div>{ name }</div>
 * const onSelect = () => {}
 *
 * return (
 *      <SearchableList<IListDate>
 *           onSelect={onSelect}
 *           data={ListData}
 *           searchKey={['name']}
 *           itemRender={ListItem}
 *      />
 * )
 */ function SearchableList({ itemKey , data , placeholder , onSelect , onSearch , disableSearch , searchKey , itemRender , FixedSizeListProps ={} , SearchFieldProps  }) {
    const [keyword, setKeyword] = useState('');
    const { classes  } = useStyles();
    const { height , itemSize , ...rest } = FixedSizeListProps;
    const { InputProps , ...textFieldPropsRest } = SearchFieldProps !== null && SearchFieldProps !== void 0 ? SearchFieldProps : {};
    // #region fuse
    const fuse = useMemo(()=>new Fuse(data, {
            shouldSort: true,
            threshold: 0.45,
            minMatchCharLength: 1,
            keys: searchKey !== null && searchKey !== void 0 ? searchKey : Object.keys(data.length > 0 ? data[0] : [])
        })
    , [
        data,
        searchKey
    ]);
    // #endregion
    // #region create searched data
    const readyToRenderData = useMemo(()=>{
        if (!keyword || onSearch) return data;
        const filtered = [
            ...fuse.search(keyword).map((x)=>x.item
            )
        ];
        return itemKey ? uniqBy(filtered, (x)=>x[itemKey]
        ) : filtered;
    }, [
        keyword,
        fuse,
        data
    ]);
    // #endregion
    const handleSearch = (word)=>{
        setKeyword(word);
        onSearch === null || onSearch === void 0 ? void 0 : onSearch(word);
    };
    return(/*#__PURE__*/ _jsxs("div", {
        className: classes.container,
        children: [
            !disableSearch && /*#__PURE__*/ _jsx(Box, {
                pt: 0.5,
                children: /*#__PURE__*/ _jsx(MaskTextField, {
                    placeholder: "Search",
                    autoFocus: true,
                    fullWidth: true,
                    InputProps: {
                        startAdornment: /*#__PURE__*/ _jsx(InputAdornment, {
                            position: "start",
                            children: /*#__PURE__*/ _jsx(SearchIcon, {})
                        }),
                        ...InputProps
                    },
                    onChange: (e)=>handleSearch(e.currentTarget.value)
                    ,
                    ...textFieldPropsRest
                })
            }),
            placeholder,
            !placeholder && /*#__PURE__*/ _jsx("div", {
                className: classes.list,
                children: /*#__PURE__*/ _jsx(FixedSizeList, {
                    width: "100%",
                    height: height !== null && height !== void 0 ? height : 300,
                    overscanCount: 25,
                    itemSize: itemSize !== null && itemSize !== void 0 ? itemSize : 100,
                    itemData: {
                        dataSet: readyToRenderData,
                        onSelect: onSelect
                    },
                    itemCount: readyToRenderData.length,
                    ...rest,
                    children: (props)=>/*#__PURE__*/ _jsx(MaskSearchableItemInList, {
                            ...props,
                            children: itemRender
                        })
                })
            })
        ]
    }));
}
const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme)=>({
        container: {},
        list: {
            marginTop: theme.spacing(1.5),
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
        }
    })
);

;// CONCATENATED MODULE: ../theme/src/Components/SearchableList/index.ts




/***/ }),

/***/ 98171:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SendingCodeField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23678);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85274);





const SendingCodeField = ({ onSend , sendButtonText ='Send' , label , errorMessage , onBlur , disabled =false , autoSend =false , onChange  })=>{
    const [code, setCode] = useState('');
    const sendButton = useRef(null);
    useEffect(()=>{
        onChange === null || onChange === void 0 ? void 0 : onChange(code);
    }, [
        code
    ]);
    useEffect(()=>{
        var ref;
        if (autoSend) (ref = sendButton.current) === null || ref === void 0 ? void 0 : ref.click();
    }, [
        autoSend
    ]);
    return(/*#__PURE__*/ _jsxs(Box, {
        children: [
            /*#__PURE__*/ _jsx(Box, {
                children: label
            }),
            /*#__PURE__*/ _jsx(Box, {
                children: /*#__PURE__*/ _jsxs(Stack, {
                    alignItems: "flex-start",
                    direction: "row",
                    spacing: 1,
                    children: [
                        /*#__PURE__*/ _jsx(Box, {
                            flex: 1,
                            children: /*#__PURE__*/ _jsx(MaskTextField, {
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
                        /*#__PURE__*/ _jsx(CountdownButton, {
                            ref: sendButton,
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

/***/ 56346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports CustomSnackbarContent, CustomSnackbarProvider, useCustomSnackbar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99638);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34850);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44542);
/* harmony import */ var _mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(69301);
/* harmony import */ var _mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70751);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(55611);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99821);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50397);















const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_5__/* .makeStyles */ .Z)()((theme, { isFacebook  }, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const spinningAnimationKeyFrames = tss_react__WEBPACK_IMPORTED_MODULE_2__/* .keyframes */ .F4`
to {
  transform: rotate(360deg)
}`;
    const title = {
        color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textPrimary */ .ZN.textPrimary,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px'
    };
    const message = {
        color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontWeight: 400,
        display: 'flex',
        alignItems: 'center',
        fontSize: 12
    };
    const defaultVariant = {
        background: isDark ? '#17191D' : '#F7F9FA',
        color: isDark ? '#D9D9D9' : '#0F1419',
        [`& .${refs.title}`]: {
            color: isDark ? '#D9D9D9' : palette.grey['800']
        }
    };
    const success = {
        backgroundColor: '#60DFAB',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const error = {
        background: '#FF5F5F',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const info = {
        background: '#8CA3C7',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    const warning = {
        backgroundColor: '#FFB915',
        color: '#ffffff',
        [`& .${refs.title}`]: {
            color: 'inherit'
        },
        [`& .${refs.message}`]: {
            color: 'inherit'
        }
    };
    return {
        root: {
            zIndex: 9999,
            transform: isFacebook ? 'translateY(80px)' : 'none',
            color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.textLight */ .ZN.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(1.5, 2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important',
            [`&.${success.ref}`]: {
                background: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.greenMain */ .ZN.greenMain,
                color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${error.ref}`]: {
                background: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.redMain */ .ZN.redMain,
                color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground,
                title: {
                    color: 'inherit'
                }
            },
            [`&.${info.ref}`]: {
                color: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
            },
            [`&.${warning.ref}`]: {
                color: '#ffffff'
            }
        },
        default: defaultVariant,
        success,
        error,
        info,
        warning,
        icon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        spinning: {
            display: 'flex',
            animation: `${spinningAnimationKeyFrames} 2s infinite linear`
        },
        action: {
            marginLeft: 'auto'
        },
        closeButton: {
            color: 'inherit'
        },
        texts: {
            marginLeft: theme.spacing(2)
        },
        title,
        message,
        link: {
            display: 'flex',
            marginLeft: theme.spacing(0.5)
        }
    };
});
const IconMap = {
    default: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Done__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    error: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_9__/* .RiskIcon */ .w, {}),
    warning: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Info__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    var _isFacebook;
    const classes = useStylesExtends(useStyles({
        isFacebook: (_isFacebook = props.isFacebook) !== null && _isFacebook !== void 0 ? _isFacebook : false
    }), props);
    const snackbar = useSnackbar();
    const loadingIcon = /*#__PURE__*/ _jsx(LoadingIcon, {
        color: "inherit",
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ _jsx(IconButton, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id)
        ,
        children: /*#__PURE__*/ _jsx(CloseIcon, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return(/*#__PURE__*/ _jsxs(SnackbarContent, {
        ref: ref,
        className: classnames(classes.content, classes[props.variant]),
        children: [
            variantIcon && /*#__PURE__*/ _jsx("div", {
                className: classes.icon,
                children: variantIcon
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ _jsx(Typography, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message && /*#__PURE__*/ _jsx(Typography, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    }));
})));
const CustomSnackbarProvider = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    const ref1 = useRef(null);
    var _isFacebook;
    const { classes  } = useStyles({
        isFacebook: (_isFacebook = props.isFacebook) !== null && _isFacebook !== void 0 ? _isFacebook : false
    });
    const onDismiss = (key)=>{
        return ()=>{
            var ref;
            (ref = ref1.current) === null || ref === void 0 ? void 0 : ref.closeSnackbar(key);
        };
    };
    var _variant;
    return(/*#__PURE__*/ _jsx(SnackbarProvider, {
        ref: ref1,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        hideIconVariant: true,
        content: (key, title)=>/*#__PURE__*/ _jsx(CustomSnackbarContent, {
                id: key,
                variant: (_variant = props.variant) !== null && _variant !== void 0 ? _variant : 'default',
                title: title,
                isFacebook: props.isFacebook
            })
        ,
        action: (key)=>/*#__PURE__*/ _jsx(IconButton, {
                size: "large",
                onClick: onDismiss(key),
                sx: {
                    color: 'inherit'
                },
                children: /*#__PURE__*/ _jsx(CloseIcon, {
                    color: "inherit"
                })
            })
        ,
        classes: {
            containerRoot: classes.root,
            variantSuccess: classes.success,
            variantError: classes.error,
            variantInfo: classes.info,
            variantWarning: classes.warning
        },
        ...props
    }));
})));
function useCustomSnackbar() {
    const { enqueueSnackbar , closeSnackbar  } = useSnackbar();
    const showSnackbar = useCallback((text, options = {
        variant: 'default'
    })=>{
        const { processing , message , variant , ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return(/*#__PURE__*/ _jsx(CustomSnackbarContent, {
                    variant: variant !== null && variant !== void 0 ? variant : 'default',
                    id: key,
                    title: title,
                    message: message,
                    processing: processing,
                    action: rest.action,
                    classes: rest.classes
                }));
            },
            ...rest
        });
    }, [
        enqueueSnackbar
    ]);
    return {
        showSnackbar,
        closeSnackbar
    };
}


/***/ }),

/***/ 23678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export MaskTextField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99234);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99821);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50397);





const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .Z)()((theme)=>({
        label: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder'
        },
        required: {
            fontSize: 12,
            lineHeight: '16px',
            fontWeight: 'bolder',
            color: (0,_constants__WEBPACK_IMPORTED_MODULE_3__/* .getMaskColor */ .nb)(theme).redMain,
            paddingLeft: theme.spacing(0.5)
        },
        field: {
            width: '100%',
            [`& > .${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"].root */ .Z.root}`]: {
                marginTop: theme.spacing(0.8),
                paddingLeft: theme.spacing(0.5),
                borderLeft: 'solid 2px',
                borderRadius: '2px',
                fontSize: 12,
                lineHeight: '16px'
            }
        },
        input: {
            padding: theme.spacing(1),
            background: theme.palette.mode === 'dark' ? '#2B2E4C' : '#F6F6F8',
            fontSize: 13,
            lineHeight: '16px',
            borderRadius: 6,
            [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"].error */ .Z.error}`]: {
                boxShadow: `0 0 0 ${theme.spacing(0.5)} ${_constants__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar.redMain.alpha */ .ZN.redMain.alpha(0.2)}`,
                border: `1px solid ${_constants__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar.redMain.alpha */ .ZN.redMain.alpha(0.8)}`
            }
        },
        inputDisabled: {
            opacity: 0.5,
            color: 'rgba(255, 255, 255, 0.4)'
        },
        inputFocused: {
            background: _constants__WEBPACK_IMPORTED_MODULE_3__/* .MaskColorVar.primaryBackground */ .ZN.primaryBackground,
            boxShadow: `0 0 0 2px ${theme.palette.mode === 'dark' ? '#4F5378' : 'rgba(28, 104, 243, 0.2)'}`
        }
    })
);
const MaskTextField = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const { label , sx , required =false , ...rest } = props;
    var ref1;
    const inputProps = (ref1 = props.InputProps) !== null && ref1 !== void 0 ? ref1 : {};
    const { classes  } = useStyles();
    return(/*#__PURE__*/ _jsxs(Box, {
        sx: sx,
        children: [
            label && typeof label === 'string' && /*#__PURE__*/ _jsxs(Typography, {
                sx: {
                    mb: 1
                },
                variant: "body2",
                className: classes.label,
                children: [
                    label,
                    required && /*#__PURE__*/ _jsx(Typography, {
                        className: classes.required,
                        component: "span",
                        children: "*"
                    })
                ]
            }),
            label && typeof label !== 'string' && label,
            /*#__PURE__*/ _jsx(TextField, {
                ref: ref,
                ...rest,
                classes: {
                    root: classes.field
                },
                variant: "standard",
                required: required,
                InputProps: {
                    disableUnderline: true,
                    className: classes.input,
                    classes: {
                        disabled: classes.inputDisabled,
                        focused: classes.inputFocused,
                        ...inputProps.classes
                    },
                    ...inputProps
                }
            })
        ]
    }));
})));


/***/ }),

/***/ 37580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export CSSVariableInjector */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);




function CSSVariableInjector(props) {
    const ref = useRef(null);
    const { current: useConsistentTheme  } = useRef(props.useTheme || useTheme);
    const colorScheme = useConsistentTheme().palette.mode;
    useLayoutEffect(()=>{
        const host = ref.current.closest('main').parentNode.querySelector('head');
        let style = host.querySelector('style[data-css-var]');
        if (!style) {
            host.insertBefore(style = document.createElement('style'), host.firstChild);
            style.dataset.cssVar = '';
        }
        applyMaskColorVars(style, colorScheme);
    }, [
        colorScheme
    ]);
    return(/*#__PURE__*/ _jsx("span", {
        ref: ref,
        children: props.children
    }));
}


/***/ }),

/***/ 18146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports setupPortalShadowRoot, NoEffectUsePortalShadowRootContext, usePortalShadowRoot, createShadowRootForwardedComponent, createShadowRootForwardedPopperComponent */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63151);



/**
 * ! Do not export !
 *
 * You SHOULD NOT use this in React directly
 */ let mountingPoint;
let mountingShadowRoot;
function setupPortalShadowRoot(init, preventEventPropagationList) {
    if (mountingPoint) return mountingShadowRoot;
    mountingShadowRoot = document.body.appendChild(document.createElement('div')).attachShadow(init);
    for (const each of preventEventPropagationList){
        mountingShadowRoot.addEventListener(each, (e)=>e.stopPropagation()
        );
    }
    mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'));
    return mountingShadowRoot;
}
/** usePortalShadowRoot under this context does not do anything. (And it will return an empty container). */ const NoEffectUsePortalShadowRootContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(false)));
/**
 * Render to a React Portal in to the page needs this hook. It will provide a wrapped container that provides ShadowRoot isolation and CSS support for it.
 *
 * The return value can only be used once!
 * @param renderer A function that want to use PortalShadowRoot
 * @example
 * const picker = usePortalShadowRoot((container) => (
 *      <DatePicker
 *          DialogProps={{ container }}
 *          PopperProps={{ container }}
 *          value={new Date()}
 *          onChange={() => {}}
 *          renderInput={(props) => <TextField {...props} />}
 *      />
 * ))
 */ function usePortalShadowRoot(renderer) {
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    const disabled = useRef(useContext(NoEffectUsePortalShadowRootContext)).current;
    if (disabled) return renderer(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [findMountingShadowRef, setRef] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const doms = useSideEffectRef(()=>{
        const root = document.createElement('div');
        const container = root.appendChild(document.createElement('div'));
        const style = root.appendChild(document.createElement('style'));
        return {
            root,
            container,
            style
        };
    });
    const { container: container1  } = doms;
    return(/*#__PURE__*/ _jsxs(IsolatedRender, {
        ...doms,
        findMountingShadowRef: findMountingShadowRef,
        children: [
            /*#__PURE__*/ _jsx("span", {
                style: {
                    display: 'none'
                },
                ref: (ref)=>findMountingShadowRef !== ref && setRef(ref)
            }),
            renderer(container1)
        ]
    }));
}
const IsolatedRender = ({ container , root , style , children , findMountingShadowRef  })=>{
    const update = useUpdate();
    const css = useCurrentShadowRootStyles(findMountingShadowRef);
    const containerInUse = container.children.length !== 0;
    useEffect(()=>{
        container.appendChild = bind(container.appendChild, container, update);
        container.removeChild = bind(container.removeChild, container, update);
    }, []);
    useEffect(()=>{
        if (!containerInUse) return root.remove();
        const shadow = PortalShadowRoot();
        if (root.parentElement === shadow) return;
        shadow.appendChild(root);
    }, [
        containerInUse,
        root
    ]);
    useEffect(()=>{
        if (findMountingShadowRef && style.textContent !== css) style.textContent = css;
    }, [
        style,
        css,
        findMountingShadowRef
    ]);
    return children;
};
function createShadowRootForwardedComponent(Component) {
    return(/*#__PURE__*/ forwardRef((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ _jsx(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    }));
}
function createShadowRootForwardedPopperComponent(Component) {
    return(/*#__PURE__*/ forwardRef((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return(/*#__PURE__*/ _jsx(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            }));
        });
    }));
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function bind(f, thisArg, hook) {
    return (...args)=>{
        try {
            return f.apply(thisArg, args);
        } finally{
            hook();
        }
    };
}
function useUpdate() {
    const [, _update] = useState(0);
    return ()=>_update((i)=>i + 1
        )
    ;
}
function useSideEffectRef(f) {
    const ref = useRef(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 63151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports useCurrentShadowRootStyles, ShadowRootStyleProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16917);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47175);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99638);






class Informative {
    addListener(cb) {
        this.callback.add(cb);
        return ()=>void this.callback.delete(cb)
        ;
    }
    inform() {
        if (this.pendingInform) return;
        requestAnimationFrame(()=>{
            this.pendingInform = false;
            this.callback.forEach((x)=>x()
            );
        });
    }
    constructor(){
        this.callback = new Set();
        this.pendingInform = false;
    }
}
class EmotionInformativeSheetsRegistry {
    toString() {
        return this.cache.sheet.tags.map((x)=>x.innerHTML
        ).join('\n');
    }
    constructor(cache){
        this.cache = cache;
        this.reg = new Informative();
        const orig = cache.sheet.insert;
        cache.sheet.insert = (...args)=>{
            const r = orig.call(cache.sheet, ...args);
            this.reg.inform();
            return r;
        };
    }
}
const emotionRegistryMap = new WeakMap();
const emotion2RegistryMap = new WeakMap();
function createSubscription(registry) {
    var ref;
    return {
        getCurrentValue: ()=>{
            return registry === null || registry === void 0 ? void 0 : registry.toString();
        },
        subscribe: (callback)=>{
            return (ref = registry === null || registry === void 0 ? void 0 : registry.reg.addListener(callback)) !== null && ref !== void 0 ? ref : ()=>0
            ;
        }
    };
}
/**
 * Return all CSS created by the emotion instance in the current ShadowRoot.
 *
 * This is used to keep the CSS correct when the rendering is crossing multiple ShadowRoot (e.g. a Modal, Dialog or other things need rendered by React Portal)
 *
 * @param ref DOM reference
 * @returns CSS string
 */ function useCurrentShadowRootStyles(ref) {
    const emotionSubscription = useMemo(()=>{
        const root = ref === null || ref === void 0 ? void 0 : ref.getRootNode();
        const registry = emotionRegistryMap.get(root);
        return createSubscription(registry);
    }, [
        ref
    ]);
    const emotion2Subscription = useMemo(()=>{
        const root = ref === null || ref === void 0 ? void 0 : ref.getRootNode();
        const registry = emotion2RegistryMap.get(root);
        return createSubscription(registry);
    }, [
        ref
    ]);
    return [
        useSubscription(emotionSubscription),
        useSubscription(emotion2Subscription)
    ].filter(Boolean).join('\n');
}
const initOnceMap = new WeakMap();
function initOnce(keyBy, init1) {
    if (initOnceMap.has(keyBy)) return initOnceMap.get(keyBy);
    const val = init1();
    initOnceMap.set(keyBy, val);
    return val;
}
function createElement(key, kind) {
    const e = document.createElement(key);
    e.setAttribute('data-' + kind, 'true');
    return e;
}
/** @internal */ function ShadowRootStyleProvider(props) {
    const { shadow , children  } = props;
    const { muiEmotionCache , tssEmotionCache  } = initOnce(shadow, ()=>init(props)
    );
    return(/*#__PURE__*/ _jsx(EmotionCacheProvider, {
        value: muiEmotionCache,
        children: /*#__PURE__*/ _jsx(TssCacheProvider, {
            value: tssEmotionCache,
            children: children
        })
    }));
}
function init({ shadow  }) {
    const head = shadow.appendChild(createElement('head', 'css-container'));
    // #region Emotion
    const MuiInsertionPoint = head.appendChild(createElement('div', 'mui-area'));
    const TSSInsertionPoint = head.appendChild(createElement('div', 'tss-area'));
    // emotion doesn't allow numbers appears in the key
    const instanceID = Math.random().toString(36).slice(2).replace(/\d/g, 'x');
    const muiEmotionCache = createEmotionCache({
        container: MuiInsertionPoint,
        key: 'mui-' + instanceID,
        speedy: false
    });
    const tssEmotionCache = createEmotionCache({
        container: TSSInsertionPoint,
        key: 'tss-' + instanceID,
        speedy: false
    });
    emotionRegistryMap.set(shadow, new EmotionInformativeSheetsRegistry(muiEmotionCache));
    emotion2RegistryMap.set(shadow, new EmotionInformativeSheetsRegistry(tssEmotionCache));
    // #endregion
    return {
        muiEmotionCache,
        tssEmotionCache
    };
}


/***/ }),

/***/ 19157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createReactRootShadowedPartial */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15621);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63151);



/**
 * @returns
 * A function that render the JSX in the ShadowRoot with emotion support.
 *
 * This function should be only call once for each config.key.
 */ function createReactRootShadowedPartial(_config) {
    return function createReactRootShadowed(shadowRoot, config = {}) {
        let jsx = '';
        let root = null;
        function tryRender() {
            var ref, ref1;
            if ((ref = config.signal) === null || ref === void 0 ? void 0 : ref.aborted) return;
            if (((ref1 = shadowRoot.host) === null || ref1 === void 0 ? void 0 : ref1.parentNode) === null) return void setTimeout(tryRender, 20);
            root = mount(jsx, shadowRoot, config, _config);
        }
        tryRender();
        return {
            render: (_jsx1)=>{
                if (!root) jsx = _jsx1;
                else root.render(_jsx1);
            },
            destory: ()=>{
                return root === null || root === void 0 ? void 0 : root.destory();
            }
        };
    };
}
function mount(jsx1, shadow, instanceConfig, globalConfig) {
    var ref;
    const tag = instanceConfig.tag || 'main';
    const key = instanceConfig.key || 'main';
    if (shadow.querySelector(`${tag}.${key}`)) {
        console.error('Tried to create root in', shadow, 'with key', key, ' which is already used. Skip rendering.');
        return {
            destory: ()=>{},
            render: ()=>{}
        };
    }
    const wrap = globalConfig.wrapJSX;
    jsx1 = getJSX(jsx1);
    const container = shadow.appendChild(document.createElement(tag));
    container.className = key;
    const undoActions = [];
    // prevent event popup
    {
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of globalConfig.preventEventPropagationList){
            container.addEventListener(each, stop);
            undoActions.push(()=>container.removeEventListener(each, stop)
            );
        }
    }
    const root = createRoot(container);
    root.render(jsx1);
    undoActions.push(()=>root.unmount()
    );
    undoActions.push(()=>container.remove()
    );
    function undo() {
        for (const f of undoActions){
            try {
                f();
            } catch  {}
        }
        undoActions.length = 0;
    }
    (ref = instanceConfig.signal) === null || ref === void 0 ? void 0 : ref.addEventListener('abort', undo);
    return {
        destory: undo,
        render: (jsx)=>{
            root.render(getJSX(jsx));
        }
    };
    function getJSX(jsx) {
        return(/*#__PURE__*/ _jsx(ShadowRootStyleProvider, {
            shadow: shadow,
            children: wrap ? wrap(jsx) : jsx
        }));
    }
}


/***/ }),

/***/ 6859:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19157);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18146);
/* harmony import */ var _CSSVariableInjector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37580);






/***/ }),

/***/ 50397:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ci": () => (/* binding */ LightColor),
/* harmony export */   "I3": () => (/* binding */ DarkColor),
/* harmony export */   "nb": () => (/* binding */ getMaskColor),
/* harmony export */   "ZN": () => (/* binding */ MaskColorVar)
/* harmony export */ });
/* unused harmony exports useMaskColor, applyMaskColorVars */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34936);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32086);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_0__);



const LightColor = {
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#FFFFFF',
    secondary: '#e8f0fe',
    secondaryContrastText: '#1c68f3',
    input: '#F6F6F8',
    primaryBackground: '#ffffff',
    primaryBackground2: '#FBFBFC',
    secondaryBackground: '#f9fafa',
    lightBackground: '#F9FAFA',
    mainBackground: '#ffffff',
    suspensionBackground: 'rgba(249, 250, 250, 0.8)',
    normalBackground: '#F3F3F4',
    twitterBackground: '#F7F9FA',
    twitterBackgroundHover: '#EFF1F2',
    twitterInputBackground: '#F6F8F8',
    twitterButton: '#111418',
    twitterButtonText: '#ffffff',
    twitterBlue: '#1C68F3',
    twitterBorderLine: '#EDF1F2',
    twitterSecond: '#7B8192',
    twitterMain: '#0F1419',
    twitterBottom: '#ffffff',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterBg: '#F6F8F8',
    twitterTooltipBg: 'rgba(0,0,0,.6)',
    twitterInput: '#EDF1F2',
    twitterLine: '#EBEEF0',
    redMain: '#ff5f5f',
    redLight: '#ffafaf',
    redContrastText: '#ffffff',
    greenMain: '#77e0b5',
    greenLight: '#e6f6f0',
    orangeMain: '#ffb915',
    orangeLight: '#faf0d8',
    iconLight: '#a6a9b6',
    divider: '#eff3f4',
    border: '#F3F3F4',
    borderSecondary: '#536471',
    textPrimary: '#111432',
    textSecondary: '#7b8192',
    secondaryInfoText: '#AFC3E1',
    normalText: '#7B8192',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#1C68F3',
    lineLight: '#E4E8F1',
    lineLighter: '#E9E9EA',
    textLight: '#A6A9B6',
    lightestBackground: '#FFFFFF',
    linkText: '#1C68F3',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#F9FAFA',
    main: '#1C68F3',
    errorBackground: 'rgba(255, 95, 95, 0.15)',
    tooltipBackground: '#ffffff',
    warningBackground: 'rgba(255, 185, 21, 0.1)'
};
const DarkColor = {
    primary: '#1c68f3',
    primaryContrastText: '#ffffff',
    background: '#15171A',
    secondary: '#242e57',
    secondaryContrastText: '#ffffff',
    input: '#282B49',
    primaryBackground: '#212442',
    primaryBackground2: '#212442',
    secondaryBackground: '#252846',
    lightBackground: '#2E314F',
    mainBackground: '#111432',
    suspensionBackground: 'rgba(27, 30, 60, 0.8)',
    normalBackground: '#262947',
    twitterInputBackground: '#17191D',
    twitterBackground: '#17191D',
    twitterBackgroundHover: '#17191D',
    twitterButton: '#EFF3F4',
    twitterButtonText: '#0F1419',
    twitterBlue: '#4989FF',
    twitterBorderLine: '#2F3336',
    twitterInput: '#1D2023',
    twitterSecond: '#636B72',
    twitterMain: '#D9D9D9',
    twitterBottom: '#000000',
    twitterInfoBackground: '#AFC3E1',
    twitterInfo: '#8CA3C7',
    twitterLine: '#2F3336',
    twitterBg: '#15171A',
    twitterTooltipBg: 'rgba(91,112,131,.6)',
    redMain: '#ff5f5f',
    redLight: '#46304a',
    redContrastText: '#ffffff',
    greenMain: '#77e0b5',
    greenLight: '#314457',
    orangeMain: '#ffb915',
    orangeLight: '#463e3f',
    iconLight: '#a6a9b6',
    divider: '#3e455e',
    border: '#3E455E',
    borderSecondary: '#6e767d',
    // TODO: ?
    textPrimary: '#ffffff',
    // TODO: ?
    textSecondary: 'ghostwhite',
    secondaryInfoText: '#AFC3E1',
    normalText: 'rgba(255, 255, 255, 0.8)',
    infoBackground: 'rgba(175, 195, 225, 0.15)',
    success: '#60DFAB',
    warning: '#FFB915',
    blue: '#1C68F3',
    textLink: '#ffffff',
    lineLight: '#32365B',
    lineLighter: '#32365B',
    textLight: '#A6A9B6',
    lightestBackground: '#212422',
    linkText: '#ffffff',
    twitter: '#2CA4EF',
    facebook: '#4267B2',
    white: '#ffffff',
    bottom: '#000000',
    main: '#D4D4D4',
    errorBackground: 'rgba(255, 95, 95, 0.1)',
    tooltipBackground: '#1A1D20',
    warningBackground: 'rgba(255, 185, 21, 0.1)'
};
function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return DarkColor;
    return LightColor;
}
function useMaskColor() {
    return getMaskColor(useTheme());
}
function applyMaskColorVars(node, scheme) {
    const ns = scheme === 'light' ? LightColor : DarkColor;
    if (node === document.body) {
        const id = '#mask-style-var';
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            document.head.appendChild(style);
        }
        applyMaskColorVars(document.getElementById(id), scheme);
        return;
    } else if (node instanceof HTMLStyleElement) {
        let rule = ':root, :host {\n';
        for(const key in ns){
            // --mask-name: val;
            rule += `    --mask-${kebabCase(key)}: ${ns[key]};\n`;
            rule += `    --mask-${kebabCase(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for(const key in ns){
            node.style.setProperty('--mask-' + kebabCase(key), ns[key]);
            node.style.setProperty('--mask-' + kebabCase(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
}
// Fragment are in the form of "1, 2, 3"
// which is used for rgba(var(--x), alpha)
function getRGBFragment(x, key) {
    const { r , g , b  } = parseColor(x[key]).toRgb();
    return [
        r,
        g,
        b
    ].join(', ');
}
const MaskColorVar = new Proxy({
    __proto__: null
}, {
    get (target, key) {
        if (target[key]) return target[key];
        if (typeof key !== 'string') throw new TypeError();
        const cssVar = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key);
        target[key] = (defaultValue)=>{
            // it might be an object when used in styled components.
            if (typeof defaultValue !== 'string') defaultValue = undefined;
            const x = `var(--mask-${cssVar}${defaultValue ? ', ' + defaultValue : ''})`;
            return x;
        };
        target[key][Symbol.toPrimitive] = ()=>`var(--mask-${cssVar})`
        ;
        target[key].alpha = (alpha)=>`rgba(var(--mask-${cssVar}-fragment), ${alpha})`
        ;
        return target[key];
    }
});


/***/ }),

/***/ 94306:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: useTabs

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
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
    const [currentTab, setTab] = useState(defaultTab);
    const enum_ = {
        [defaultTab]: defaultTab
    };
    possibleTabs.forEach((t)=>enum_[t] = t
    );
    const onChange = useCallback((event, value)=>{
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

/***/ 42421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZN": () => (/* reexport */ constants/* MaskColorVar */.ZN),
  "nb": () => (/* reexport */ constants/* getMaskColor */.nb),
  "ZL": () => (/* reexport */ makeStyles/* makeStyles */.Z)
});

// UNUSED EXPORTS: Appearance, ButtonGroupTabList, ButtonTab, CSSVariableInjector, CountdownButton, CustomSnackbarContent, CustomSnackbarProvider, DialogStackingProvider, FolderTabPanel, FolderTabs, MaskDarkTheme, MaskDialog, MaskDialogTitle, MaskLightTheme, MaskLoadingButton, MaskSearchableItemInList, MaskTextField, NoEffectUsePortalShadowRootContext, PhoneNumberField, SearchableList, SendingCodeField, SnackbarProvider, applyMaskColorVars, createReactRootShadowedPartial, createShadowRootForwardedComponent, createShadowRootForwardedPopperComponent, currentSystemPreferencePalette, keyframes, mergeClasses, or, parseColor, setupPortalShadowRoot, useCurrentShadowRootStyles, useCustomSnackbar, useDialogStackActor, useMaskColor, useMaskDialog, usePortalShadowRoot, useSnackbar, useStylesExtends, useSystemPreferencePalette, useTabs

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/createTheme.js + 8 modules
var createTheme = __webpack_require__(50728);
// EXTERNAL MODULE: ../theme/src/changes.ts
var changes = __webpack_require__(97925);
// EXTERNAL MODULE: ../theme/src/component-changes.ts
var component_changes = __webpack_require__(74448);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js + 2 modules
var merge = __webpack_require__(97173);
// EXTERNAL MODULE: ../theme/src/constants.ts
var constants = __webpack_require__(50397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tinycolor2@1.4.2/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(32086);
// EXTERNAL MODULE: ../theme/src/makeStyles.ts
var makeStyles = __webpack_require__(99821);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/Dialog.tsx
var Dialog = __webpack_require__(43175);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogTitle.tsx
var DialogTitle = __webpack_require__(55190);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(18527);
;// CONCATENATED MODULE: ../theme/src/Components/Dialogs/index.ts




// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/index.ts + 2 modules
var ButtonGroupTab = __webpack_require__(26865);
// EXTERNAL MODULE: ../theme/src/Components/FolderTabs/index.tsx
var FolderTabs = __webpack_require__(47998);
// EXTERNAL MODULE: ../theme/src/Components/Snackbar/index.tsx
var Snackbar = __webpack_require__(56346);
// EXTERNAL MODULE: ../theme/src/Components/SearchableList/index.ts + 2 modules
var SearchableList = __webpack_require__(83591);
// EXTERNAL MODULE: ../theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(23678);
// EXTERNAL MODULE: ../theme/src/Components/CountdownButton/index.tsx
var CountdownButton = __webpack_require__(85274);
// EXTERNAL MODULE: ../theme/src/Components/SendingCodeField/index.tsx
var SendingCodeField = __webpack_require__(98171);
// EXTERNAL MODULE: ../theme/src/Components/PhoneNumberField/index.tsx
var PhoneNumberField = __webpack_require__(93957);
// EXTERNAL MODULE: ../theme/src/Components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(56834);
;// CONCATENATED MODULE: ../theme/src/Components/index.ts











// EXTERNAL MODULE: ../theme/src/hooks/index.ts + 1 modules
var hooks = __webpack_require__(94306);
// EXTERNAL MODULE: ../theme/src/ShadowRoot/index.ts
var ShadowRoot = __webpack_require__(6859);
;// CONCATENATED MODULE: ../theme/src/index.ts
/// <reference path="./extended.d.ts" />
// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated






const parseColor = (/* unused pure expression or super */ null && (tinyColor));
const color = (mode, color1)=>({
        mode,
        primary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        secondary: {
            main: color1.primary,
            contrastText: color1.primaryContrastText
        },
        background: {
            paper: color1.primaryBackground,
            default: color1.secondaryBackground
        },
        error: {
            main: color1.redMain,
            contrastText: color1.redContrastText
        },
        success: {
            main: color1.greenMain
        },
        warning: {
            main: color1.orangeMain
        },
        divider: color1.divider,
        text: {
            primary: color1.textPrimary,
            secondary: color1.textSecondary
        }
    })
;
function MaskTheme(mode) {
    const colors = mode === 'dark' ? constants/* DarkColor */.I3 : constants/* LightColor */.Ci;
    const theme = (0,merge/* default */.Z)({
        palette: color(mode, colors)
    }, ...Object.values(changes).map(applyColors), ...Object.values(component_changes).map(applyColors));
    return (0,createTheme/* default */.Z)(theme);
    function applyColors(x) {
        if (typeof x === 'function') return x(mode, colors);
        return x;
    }
}
const MaskLightTheme = MaskTheme('light');
const MaskDarkTheme = MaskTheme('dark');






const query = '(prefers-color-scheme: dark)';
function useSystemPreferencePalette() {
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    return useMediaQuery(query) ? 'dark' : 'light';
}
function currentSystemPreferencePalette() {
    return matchMedia(query).matches ? 'dark' : 'light';
}
var Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));


/***/ }),

/***/ 99821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeStyles)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99638);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32824);


const { makeStyles  } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});



/***/ }),

/***/ 52522:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ONE, ProviderProxy, ZERO, dividedBy, getProxyWebsocketInstance, getWebSocketInstance, isGreaterThan, isGreaterThanOrEqualTo, isLessThan, isLessThanOrEqualTo, isOne, isPositive, isZero, leftShift, multipliedBy, pow10, rightShift, sendMessageToProxy, toFixed, useBeat, useBeatRetry

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../web3-shared/base/src/hooks/useBeat.ts


function useBeat(delay = 1000) {
    const [beat, setBeat] = useState(0);
    const [, , reset] = useTimeoutFn(()=>{
        setBeat((x)=>(x + 1) % Number.MAX_SAFE_INTEGER
        );
        reset();
    }, delay);
    return beat;
}
function useBeatRetry(fn, delay = 1000, deps = []) {
    const beat = useBeat(delay);
    return useAsyncRetry(fn, [
        beat
    ].concat(deps));
}

;// CONCATENATED MODULE: ../web3-shared/base/src/hooks/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
;// CONCATENATED MODULE: ../web3-shared/base/src/utils/number.ts

const ZERO = new (bignumber_default())('0');
const ONE = new (bignumber_default())('1');
/** n === 0 */ function isZero(n) {
    return n === 0 || n === '0' || new BigNumber(n).isZero();
}
/** n === 1 */ function isOne(n) {
    return n === 1 || n === '1' || new BigNumber(n).isEqualTo(ONE);
}
/** a > b */ function isGreaterThan(a, b) {
    return new BigNumber(a).isGreaterThan(b);
}
/** a >= b */ function isGreaterThanOrEqualTo(a, b) {
    return new BigNumber(a).isGreaterThanOrEqualTo(b);
}
/** a < b */ function isLessThan(a, b) {
    return new BigNumber(a).isLessThan(b);
}
/** a <= b */ function isLessThanOrEqualTo(a, b) {
    return new BigNumber(a).isLessThanOrEqualTo(b);
}
/** a > 0 */ function isPositive(n) {
    return new BigNumber(n).isPositive();
}
/** a * b */ function multipliedBy(a, b) {
    return new BigNumber(a).multipliedBy(b);
}
/** 10 ** n */ function pow10(n) {
    return new BigNumber(10).pow(n);
}
/** n * (10 ** m) */ function rightShift(n, m) {
    return new BigNumber(n).shiftedBy(+(m !== null && m !== void 0 ? m : 0));
}
/** n / (10 ** m) */ function leftShift(n, m) {
    return new BigNumber(n).shiftedBy(-(m !== null && m !== void 0 ? m : 0));
}
/** a / b */ function dividedBy(a, b) {
    return new BigNumber(a).dividedBy(b);
}
function toFixed(value = 0, decimalPlaces) {
    const n = new BigNumber(value);
    return decimalPlaces ? n.toFixed(decimalPlaces) : n.toFixed();
}

;// CONCATENATED MODULE: ../web3-shared/base/src/utils/index.ts


// EXTERNAL MODULE: ../web3-shared/base/src/proxy/index.ts
var proxy = __webpack_require__(47989);
;// CONCATENATED MODULE: ../web3-shared/base/src/index.ts





/***/ }),

/***/ 47989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports ProviderProxy, getProxyWebsocketInstance, getWebSocketInstance, sendMessageToProxy */
/* harmony import */ var date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23131);
/* harmony import */ var date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10671);
/* harmony import */ var reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10568);



const POOL_CACHE_EXPIRE_TIME = 30;
const POOL_CACHE_MAX_CAPACITY = 10;
class ProviderProxy {
    /**
     * Send request to proxy websocket
     * @param message
     */ send(message) {
        this.clearPool();
        const cache = this._pool.get(message.id);
        if (cache && !cache.done) return;
        if (cache && !this.isExpired(cache)) {
            const notify = message.notify || this._globalNotify;
            notify({
                id: message.id,
                done: true,
                from: 'cache'
            });
            return;
        }
        this._socket.send(JSON.stringify({
            id: message.id,
            method: message.method,
            params: message.params
        }));
        this._pool.set(message.id, {
            data: [],
            createdAt: new Date(),
            notify: message.notify || this._globalNotify
        });
    }
    /**
     * Send async request to proxy websocket, Avoid use this method
     * @param message
     */ async sendAsync(message) {
        this.clearPool();
        const cache = this._pool.get(message.id);
        var ref;
        if (cache && !this.isExpired(cache)) return (ref = this.getResult(message.id)) !== null && ref !== void 0 ? ref : [];
        const innerMessagePromise = ()=>new Promise((resolve, reject)=>{
                message.notify = (info)=>{
                    if (info.done) resolve(info);
                    if (info.error) reject(info);
                };
                this.send(message);
            })
        ;
        await innerMessagePromise();
        var ref1;
        return (ref1 = this.getResult(message.id)) !== null && ref1 !== void 0 ? ref1 : [];
    }
    get socket() {
        return this._socket;
    }
    getResult(id) {
        const item = this._pool.get(id);
        if (!item) return [];
        const newItem = {
            ...item,
            pickedAt: new Date()
        };
        this._pool.set(id, newItem);
        return item.data;
    }
    /**
     * Cache is expired
     * @param item cache item
     * @returns boolean
     */ isExpired(item) {
        const now = new Date();
        return !!item.updatedAt && (0,date_fns_differenceInSeconds__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(now, item.updatedAt) > POOL_CACHE_EXPIRE_TIME;
    }
    clearPool() {
        let beCleaned = [];
        const entities = Array.from(this._pool.entries());
        // clear expired
        beCleaned = entities.filter((x)=>this.isExpired(x[1])
        );
        // clear overed size
        if (entities.length > POOL_CACHE_MAX_CAPACITY) {
            const picks = entities.sort((a, b)=>(0,date_fns_compareAsc__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(a[1].pickedAt || a[1].createdAt, b[1].pickedAt || b[1].createdAt)
            ).slice(0, entities.length - POOL_CACHE_MAX_CAPACITY);
            beCleaned = [
                ...beCleaned,
                ...picks
            ];
        }
        beCleaned.forEach((x)=>this._pool.delete(x[0])
        );
    }
    constructor(point, notifyFn){
        this.waitingOpen = ()=>{
            return new Promise((resolve, reject)=>{
                this._socket.addEventListener('open', ()=>resolve()
                );
                this._socket.addEventListener('error', ()=>reject()
                );
            });
        };
        this.onMessage = (event)=>{
            const { id , results , error  } = JSON.parse(event.data);
            const itemInPoll = this._pool.get(id);
            if (!itemInPoll) return;
            if (error || !id) {
                itemInPoll.notify({
                    id,
                    done: true,
                    error: error,
                    from: 'remote'
                });
            }
            const updatedAt = new Date();
            if (!results || results.length === 0) {
                this._pool.set(id, {
                    ...itemInPoll,
                    done: true
                });
                itemInPoll.notify({
                    id,
                    done: true,
                    from: 'remote'
                });
                return;
            }
            var ref;
            const dataInPool = (ref = itemInPoll === null || itemInPoll === void 0 ? void 0 : itemInPoll.data) !== null && ref !== void 0 ? ref : [];
            const patchData = [
                ...dataInPool,
                ...results !== null && results !== void 0 ? results : []
            ];
            this._pool.set(id, {
                ...itemInPoll,
                updatedAt,
                data: patchData
            });
            itemInPoll.notify({
                id,
                done: false,
                from: 'remote'
            });
        };
        this.registerMessage = ()=>{
            this._socket.removeEventListener('message', this.onMessage);
            this._socket.addEventListener('message', this.onMessage);
        };
        this._socket = new reconnecting_websocket__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(point, undefined, {
            minUptime: 20000
        });
        this._pool = new Map();
        this._globalNotify = notifyFn;
    }
}
const SOCKET_POINT = // workaround, should create a stage env for QA testing
 true ? 'wss://hyper-proxy.r2d2.to' : 0;
var SocketState;
(function(SocketState) {
    SocketState[SocketState["CONNECTING"] = 0] = "CONNECTING";
    SocketState[SocketState["OPEN"] = 1] = "OPEN";
    SocketState[SocketState["CLOSING"] = 2] = "CLOSING";
    SocketState[SocketState["CLOSED"] = 3] = "CLOSED";
})(SocketState || (SocketState = {}));
/**
 * Provider a ProxySocket instance
 * @returns a function to operate socket instance
 */ function getProxyWebsocketInstanceWrapper() {
    let cachedInstance;
    const createNewInstance = async (notify)=>{
        cachedInstance = new ProviderProxy(SOCKET_POINT, notify);
        await cachedInstance.waitingOpen();
        cachedInstance.registerMessage();
    };
    return async (notify)=>{
        if (cachedInstance) return cachedInstance;
        await createNewInstance(notify);
        return cachedInstance;
    };
}
const getProxyWebsocketInstance = getProxyWebsocketInstanceWrapper();
/**
 * Provide a websocket instance for once, avoid use it.
 * @param endPoint websocket endpoint
 * @returns websocket instance
 */ const getWebSocketInstance = async (endPoint)=>{
    const socket = new WebSocket(endPoint !== null && endPoint !== void 0 ? endPoint : SOCKET_POINT);
    const waitingOpen = ()=>{
        return new Promise((resolve, reject)=>{
            socket.addEventListener('open', ()=>resolve()
            );
            socket.addEventListener('error', ()=>reject()
            );
        });
    };
    await waitingOpen();
    return socket;
};
/**
 * Provide a websocket instance for once, avoid use it.
 * @param message endPoint
 * @param [endPoint = SOCKET_POINT] endPoint
 * @returns promise of request
 */ const sendMessageToProxy = async (message, endPoint)=>{
    let data = [];
    const socket = await getWebSocketInstance(SOCKET_POINT !== null && SOCKET_POINT !== void 0 ? SOCKET_POINT : endPoint);
    const sendPromise = ()=>new Promise((resolve, reject)=>{
            socket.addEventListener('message', (event)=>{
                const { results =[] , error  } = JSON.parse(event.data);
                if (error) {
                    socket.close();
                    reject(error);
                }
                if (results.length === 0) {
                    socket.close();
                    resolve(data);
                }
                data = [
                    ...data,
                    ...results
                ];
            });
            socket.send(JSON.stringify(message));
        })
    ;
    return sendPromise();
};


/***/ }),

/***/ 86711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React vundefined
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(52458),g=__webpack_require__(76342);
exports.useSubscription=function(a){var c=a.getCurrentValue,d=a.subscribe,b=g.useState(function(){return{getCurrentValue:c,subscribe:d,value:c()}});a=b[0];var f=b[1];b=a.value;if(a.getCurrentValue!==c||a.subscribe!==d)b=c(),f({getCurrentValue:c,subscribe:d,value:b});g.useDebugValue(b);g.useEffect(function(){function b(){if(!a){var b=c();f(function(a){return a.getCurrentValue!==c||a.subscribe!==d||a.value===b?a:e({},a,{value:b})})}}var a=!1,h=d(b);b();return function(){a=!0;h()}},[c,d]);return b};


/***/ }),

/***/ 33769:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ unreachable)
/* harmony export */ });
/* unused harmony export safeUnreachable */
function unreachable(value) {
    console.error('Unhandled value: ', value);
    throw new Error('Unreachable case:' + value);
}
function safeUnreachable(value) {
    console.error('Unhandled value: ', value);
}
//# sourceMappingURL=control-flow.js.map

/***/ }),

/***/ 84176:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t1": () => (/* reexport safe */ _control_flow_js__WEBPACK_IMPORTED_MODULE_1__.t)
/* harmony export */ });
/* harmony import */ var _blob_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44311);
/* harmony import */ var _control_flow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33769);











//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hq": () => (/* binding */ None),
/* harmony export */   "bD": () => (/* binding */ Some)
/* harmony export */ });
/* unused harmony export Option */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99734);
/* harmony import */ var _result_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7185);


/**
 * Contains the None value
 */
var NoneImpl = /** @class */ (function () {
    function NoneImpl() {
        this.some = false;
        this.none = true;
    }
    NoneImpl.prototype[Symbol.iterator] = function () {
        return {
            next: function () {
                return { done: true, value: undefined };
            },
        };
    };
    NoneImpl.prototype.unwrapOr = function (val) {
        return val;
    };
    NoneImpl.prototype.expect = function (msg) {
        throw new Error("" + msg);
    };
    NoneImpl.prototype.unwrap = function () {
        throw new Error("Tried to unwrap None");
    };
    NoneImpl.prototype.map = function (_mapper) {
        return this;
    };
    NoneImpl.prototype.andThen = function (op) {
        return this;
    };
    NoneImpl.prototype.toResult = function (error) {
        return (0,_result_js__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(error);
    };
    NoneImpl.prototype.toString = function () {
        return 'None';
    };
    return NoneImpl;
}());
// Export None as a singleton, then freeze it so it can't be modified
var None = new NoneImpl();
Object.freeze(None);
/**
 * Contains the success value
 */
var SomeImpl = /** @class */ (function () {
    function SomeImpl(val) {
        if (!(this instanceof SomeImpl)) {
            return new SomeImpl(val);
        }
        this.some = true;
        this.none = false;
        this.val = val;
    }
    /**
     * Helper function if you know you have an Some<T> and T is iterable
     */
    SomeImpl.prototype[Symbol.iterator] = function () {
        var obj = Object(this.val);
        return Symbol.iterator in obj
            ? obj[Symbol.iterator]()
            : {
                next: function () {
                    return { done: true, value: undefined };
                },
            };
    };
    SomeImpl.prototype.unwrapOr = function (_val) {
        return this.val;
    };
    SomeImpl.prototype.expect = function (_msg) {
        return this.val;
    };
    SomeImpl.prototype.unwrap = function () {
        return this.val;
    };
    SomeImpl.prototype.map = function (mapper) {
        return Some(mapper(this.val));
    };
    SomeImpl.prototype.andThen = function (mapper) {
        return mapper(this.val);
    };
    SomeImpl.prototype.toResult = function (error) {
        return (0,_result_js__WEBPACK_IMPORTED_MODULE_0__.Ok)(this.val);
    };
    /**
     * Returns the contained `Some` value, but never throws.
     * Unlike `unwrap()`, this method doesn't throw and is only callable on an Some<T>
     *
     * Therefore, it can be used instead of `unwrap()` as a maintainability safeguard
     * that will fail to compile if the type of the Option is later changed to a None that can actually occur.
     *
     * (this is the `into_Some()` in rust)
     */
    SomeImpl.prototype.safeUnwrap = function () {
        return this.val;
    };
    SomeImpl.prototype.toString = function () {
        return "Some(" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
    };
    SomeImpl.EMPTY = new SomeImpl(undefined);
    return SomeImpl;
}());
// This allows Some to be callable - possible because of the es5 compilation target
var Some = SomeImpl;
var Option;
(function (Option) {
    /**
     * Parse a set of `Option`s, returning an array of all `Some` values.
     * Short circuits with the first `None` found, if any
     */
    function all() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var someOption = [];
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (option.some) {
                someOption.push(option.val);
            }
            else {
                return option;
            }
        }
        return Some(someOption);
    }
    Option.all = all;
    /**
     * Parse a set of `Option`s, short-circuits when an input value is `Some`.
     * If no `Some` is found, returns `None`.
     */
    function any() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        // short-circuits
        for (var _a = 0, options_2 = options; _a < options_2.length; _a++) {
            var option = options_2[_a];
            if (option.some) {
                return option;
            }
            else {
                return option;
            }
        }
        // it must be None
        return None;
    }
    Option.any = any;
    function isOption(value) {
        return value instanceof Some || value === None;
    }
    Option.isOption = isOption;
})(Option || (Option = {}));
//# sourceMappingURL=option.js.map

/***/ }),

/***/ 7185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UG": () => (/* binding */ Err),
/* harmony export */   "Ok": () => (/* binding */ Ok)
/* harmony export */ });
/* unused harmony exports ErrImpl, OkImpl, Result */
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99734);
/* harmony import */ var _option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2081);


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
        throw new Error(msg + " - Error: " + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
    };
    ErrImpl.prototype.unwrap = function () {
        throw new Error("Tried to unwrap Error: " + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + "\n" + this._stack);
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
        return _option_js__WEBPACK_IMPORTED_MODULE_0__/* .None */ .Hq;
    };
    ErrImpl.prototype.toString = function () {
        return "Err(" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
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
        return (0,_option_js__WEBPACK_IMPORTED_MODULE_0__/* .Some */ .bD)(this.val);
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
        return "Ok(" + (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
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

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer)
/* harmony export */ });
/* unused harmony export useContainer */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);


function createContainer(useHook) {
  var Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

  function Provider(props) {
    var value = useHook(props.initialState);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider, {
      value: value
    }, props.children);
  }

  function useContainer() {
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);

    if (value === null) {
      throw new Error("Component must be wrapped with <Container.Provider>");
    }

    return value;
  }

  return {
    Provider: Provider,
    useContainer: useContainer
  };
}
function useContainer(container) {
  return container.useContainer();
}


//# sourceMappingURL=unstated-next.mjs.map


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
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,3294,2486,3147,8136,3693,9227,1440,2162,3832,71,8000,3638,8393,12,5105,6565,102,8145,5313,1555,9141,4586,433,9697,4477,665,5400,9224], () => (__webpack_require__(87652)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => (err && reject(promise[webpackError] = err), outerResolve()));
/******/ 			isEvaluating = false;
/******/ 		};
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
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 3143) return "js/chunk.3143.js";
/******/ 			if (chunkId === 4477) return "js/chunk.npm.gun.js";
/******/ 			if (chunkId === 9224) return "js/chunk.9224.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + ({"12":"npm-ns.dimensiondev.holoflows-kit","71":"npm.typeson","102":"npm.iframe-resizer-react","433":"npm.reconnecting-websocket","1440":"npm.validator","1555":"npm.react-transition-group","2162":"npm.z-schema","2486":"npm-ns.mui.base","2698":"npm.lodash-es","3147":"npm.bignumber.js","3294":"npm.date-fns","3638":"npm.anchorme","3693":"npm.async-call-rpc","3832":"npm.typeson-registry","4586":"npm.react-i18next","5105":"npm.react-dom","5313":"npm.tinycolor2","5638":"npm-ns.mui.material","6565":"npm.qrcode","7871":"npm-ns.mui.icons-material","8000":"npm.lodash.isequal","8136":"npm-ns.mui.system","8145":"npm.notistack","8393":"npm.lodash.get","9141":"npm.tss-react","9227":"npm.buffer","9697":"npm.stylis"}[chunkId] || chunkId) + ".js";
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
/******/ 	/* webpack/runtime/runtimeId */
/******/ 	(() => {
/******/ 		__webpack_require__.j = 4554;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScriptURL: (url) => (url)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("webpack", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script url */
/******/ 	(() => {
/******/ 		__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm loading */
/******/ 	(() => {
/******/ 		__webpack_require__.v = (exports, wasmModuleId, wasmModuleHash, importsObj) => {
/******/ 			var req = fetch(__webpack_require__.p + "" + wasmModuleHash + ".module.wasm");
/******/ 			if (typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 				return WebAssembly.instantiateStreaming(req, importsObj)
/******/ 					.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 			}
/******/ 			return req
/******/ 				.then((x) => (x.arrayBuffer()))
/******/ 				.then((bytes) => (WebAssembly.instantiate(bytes, importsObj)))
/******/ 				.then((res) => (Object.assign(exports, res.instance.exports)));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var path = "/"
/******/ 		__webpack_require__.p = typeof importScripts === 'function' ? path : runtime.runtime.getURL(path);
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			4554: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.tu(__webpack_require__.p + __webpack_require__.u(chunkId)));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([5638,2698,7871,3294,2486,3147,8136,3693,9227,1440,2162,3832,71,8000,3638,8393,12,5105,6565,102,8145,5313,1555,9141,4586,433,9697,4477,665,5400,9224].map(__webpack_require__.e, __webpack_require__)).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;