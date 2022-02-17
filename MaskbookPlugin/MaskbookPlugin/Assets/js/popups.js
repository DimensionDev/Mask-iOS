/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 82785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitlessKeys);


/***/ }),

/***/ 35234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UT": () => (/* binding */ HashRouter),
/* harmony export */   "rU": () => (/* binding */ Link),
/* harmony export */   "OL": () => (/* binding */ NavLink)
/* harmony export */ });
/* unused harmony export BrowserRouter */
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1868);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55794);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41901);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69480);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40531);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81987);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32054);











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createBrowserHistory */ .lX)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createHashHistory */ .q_)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .Router */ .F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,history__WEBPACK_IMPORTED_MODULE_3__/* .createLocation */ .ob)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_ref2, ["component", "replace", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__.default)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__/* .__RouterContext.Consumer */ .s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant__WEBPACK_IMPORTED_MODULE_7__.default)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router__WEBPACK_IMPORTED_MODULE_4__/* .matchPath */ .LX)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({}, styleProp, {}, activeStyle) : styleProp;

    var props = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map


/***/ }),

/***/ 24827:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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

/***/ 95772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ MaskWalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


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

/***/ 31061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MiniMaskIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


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
}), '0 0 48 48');


/***/ }),

/***/ 75741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MasksIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12162);


const MasksIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('MasksIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
            x: "3.594",
            y: "13.04",
            width: "1.5",
            height: "7.5",
            rx: ".75",
            transform: "rotate(-30 3.594 13.04)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M13.635 12.944c-.97.31-2.018.146-2.97-.445a.434.434 0 00-.37-.045.446.446 0 00-.282.263c-.427 1.021-1.196 1.765-2.166 2.075-1.55.495-3.312-.245-4.392-1.843a5.502 5.502 0 01-.684-1.409 6.763 6.763 0 01-.187-.744l-.165-.934.774.546a.574.574 0 00.505.084c.046-.015.09-.04.132-.063l.196-.215.013-.025.025-.048a4.253 4.253 0 012.259-1.718 4.244 4.244 0 012.687.037 4.244 4.244 0 012.168-1.587 4.274 4.274 0 012.837.091l.049.025c.036.02.082.035.128.051l.012.006c.1.03.211.024.322-.011a.56.56 0 00.363-.36l.305-.89.406.856c.117.238.203.475.28.715.161.507.246 1.03.258 1.544.065 1.923-.952 3.55-2.503 4.044zm-5.973-.585c-.129.042-.264.065-.402.078-.758.049-1.462-.47-1.786-.752.233-.258.698-.711 1.28-.897.138-.044.264-.064.402-.078.758-.048 1.462.47 1.786.752-.242.261-.707.715-1.28.897zm3.164-1.498c.34.075.991.172 1.563-.01.139-.045.262-.104.373-.17.637-.397.92-1.23 1.02-1.648-.339-.075-.99-.172-1.563.01a1.802 1.802 0 00-.373.17c-.636.397-.92 1.23-1.02 1.648z",
            fill: "url(#paint0_linear)"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
            filter: "url(#filter0_b)",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M14.03 8.621l.162-.27 7.659 2.527-.033.314a9.007 9.007 0 01-.434 2.04c-.531 1.594-1.443 2.96-2.56 3.85-.835.662-1.736 1.01-2.593 1.01-.336 0-.661-.044-.976-.153-1.128-.38-1.963-1.377-2.343-2.82-.369-1.378-.282-3.016.25-4.61.217-.673.51-1.302.867-1.888zm.976 4.48c.163.076.336.109.532.109.173 0 .368-.033.575-.087.221-.074.4-.166.477-.207.026-.013.04-.02.043-.02l.217-.13-.12-.229c-.01-.032-.357-.694-1.04-.998-.684-.303-1.41-.108-1.443-.097l-.25.065.055.25c.003.002.01.025.02.063.028.093.082.278.175.479.195.39.455.672.759.803zm3.374 1.15c.086.022.173.033.27.033.261 0 .543-.076.814-.217.282-.141.467-.304.478-.315l.195-.173-.152-.206c-.022-.033-.488-.63-1.215-.792-.673-.15-1.299.117-1.414.166-.01.004-.015.007-.018.007l-.228.109.098.239c0 .01.098.249.282.498.26.348.564.575.89.651z",
                fill: "#1C68F3",
                fillOpacity: ".1"
            })
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                    id: "paint0_linear",
                    x1: "2.598",
                    y1: "10.871",
                    x2: "15.806",
                    y2: "6.618",
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
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
                    id: "filter0_b",
                    x: "8.688",
                    y: "4.35",
                    width: "17.163",
                    height: "17.741",
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
                })
            ]
        })
    ]
}), '0 0 24 24');


/***/ }),

/***/ 50809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ useMyPersonas)
/* harmony export */ });
/* unused harmony export useMyUninitializedPersonas */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76898);
/* harmony import */ var _utils_comparer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62042);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13017);
/* harmony import */ var _utils_side_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21920);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_4__);







const independentRef = {
    myPersonasRef: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef([], _utils_comparer__WEBPACK_IMPORTED_MODULE_6__/* .PersonaArrayComparer */ .y$),
    myUninitializedPersonasRef: new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_5__.ValueRef([], _utils_comparer__WEBPACK_IMPORTED_MODULE_6__/* .PersonaArrayComparer */ .y$)
};
{
    const query = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.debounce)(()=>{
        _extension_service__WEBPACK_IMPORTED_MODULE_1__/* .default.Identity.queryMyPersonas */ .ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            independentRef.myUninitializedPersonasRef.value = p.filter((x)=>x.uninitialized
            );
            _extension_service__WEBPACK_IMPORTED_MODULE_1__/* .default.Helper.setStorage */ .ZP.Helper.setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    }, 500, {
        trailing: true
    });
    _utils_side_effects__WEBPACK_IMPORTED_MODULE_3__/* .sideEffect.then */ .jw.then(query);
    _utils_messages__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessage.events.personaChanged.on */ .y.events.personaChanged.on((x)=>x.some((x1)=>x1.owned
        ) && query()
    );
}function useMyPersonas() {
    return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(independentRef.myPersonasRef);
}
function useMyUninitializedPersonas() {
    return useValueRef(independentRef.myUninitializedPersonasRef);
}


/***/ }),

/***/ 26940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ ActionButton),
/* harmony export */   "Zc": () => (/* binding */ ActionButtonPromise)
/* harmony export */ });
/* unused harmony export DebounceButton */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81021);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27768);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86041);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14177);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60455);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47480);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8325);










const circle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    color: "inherit",
    size: 18
});
function useDebounceAsync(asyncFn) {
    // useAsyncFn use T | [] as it's parameter where is conflict with our usage.
    // We should ensure always call startAsyncFn with parameters.
    const [state, startAsyncFn] = useAsyncFn(asyncFn, [
        asyncFn
    ], {
        loading: false,
        value: undefined
    });
    // Sync the debounce state after 500ms
    const [debounceLoading, setDebounceLoading] = useState(false);
    useDebounce(()=>setDebounceLoading(state.loading)
    , 500, [
        state
    ]);
    const f = useCallback((...args)=>{
        if (!state.loading) {
            setDebounceLoading(false);
            startAsyncFn(...args);
        }
    }, [
        startAsyncFn,
        state.loading
    ]);
    // loading 0ms to 500ms: disabled, !loading
    // loading 500ms+: disabled, loading
    if (state.loading) return {
        f,
        disabled: true,
        loading: debounceLoading
    };
    // The debounceLoading is invalidated, refresh it now (instead of waiting for 500ms)
    if (debounceLoading) setDebounceLoading(false);
    // If the task is not running, ignore the throttledLoading
    return {
        disabled: false,
        loading: false,
        f
    };
}
function DebounceButton(_props) {
    const { onClick , color , ...props } = _props;
    const classes = useErrorStyles();
    const { f , loading  } = useDebounceAsync(onClick);
    return(/*#__PURE__*/ _jsx(Button, {
        startIcon: loading ? circle : undefined,
        disabled: loading,
        onClick: f,
        classes: color === 'danger' ? classes : undefined,
        color: color === 'danger' ? 'primary' : color,
        ...props
    }));
}
function ActionButton(props) {
    const { width , loading , children , className , style , ...rest } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        disableElevation: true,
        disabled: loading,
        startIcon: loading && circle,
        className: 'actionButton ' + className,
        style: {
            width,
            ...style
        },
        children: children,
        ...rest
    }));
};
function ActionButtonPromise(props) {
    const { classes  } = useStyles();
    const { executor , complete , failed , waiting , init , completeOnClick , waitingOnClick , failedOnClick , completeIcon =/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    }) , failIcon =/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    }) , ...b } = props;
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('init');
    const completeClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.success, b.className);
    const failClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.failed, b.className);
    const run = ()=>{
        setState('wait');
        executor().then(()=>setState('complete')
        , ()=>setState('fail')
        );
    };
    const cancel = ()=>{
        const p = waitingOnClick === null || waitingOnClick === void 0 ? void 0 : waitingOnClick();
        p && setState(p);
    };
    const completeClick = completeOnClick === 'use executor' ? run : completeOnClick;
    const failClick = failedOnClick === 'use executor' ? run : failedOnClick;
    if (state === 'wait') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        startIcon: circle,
        disabled: !waitingOnClick,
        children: waiting,
        onClick: cancel
    }));
    if (state === 'complete') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        disabled: !completeClick,
        startIcon: completeIcon,
        children: complete,
        className: completeClass,
        onClick: completeClick
    }));
    if (state === 'fail') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        disabled: !failClick,
        startIcon: failIcon,
        children: failed,
        className: failClass,
        onClick: failClick
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        children: init,
        onClick: run
    }));
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    success: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[500] */ .Z[500],
        '&:hover': {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[700] */ .Z[700]
        }
    },
    failed: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__/* .default[500] */ .Z[500],
        '&:hover': {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__/* .default[700] */ .Z[700]
        }
    }
});


/***/ }),

/***/ 67099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ DashboardRoute)
/* harmony export */ });
/* unused harmony export DashboardWalletRoute */
var DashboardRoute;
(function(DashboardRoute1) {
    DashboardRoute1["Nav"] = '/nav';
    DashboardRoute1["Personas"] = '/personas';
    DashboardRoute1["Wallets"] = '/wallets';
    DashboardRoute1["Contacts"] = '/contacts';
    DashboardRoute1["Settings"] = '/settings';
    DashboardRoute1["Plugins"] = '/plugins';
    DashboardRoute1["Setup"] = '/setup';
})(DashboardRoute || (DashboardRoute = {
}));
var DashboardWalletRoute;
(function(DashboardWalletRoute1) {
    DashboardWalletRoute1["Tokens"] = '0';
    DashboardWalletRoute1["Collectibles"] = '1';
    DashboardWalletRoute1["Transactions"] = '2';
})(DashboardWalletRoute || (DashboardWalletRoute = {
}));


/***/ }),

/***/ 86941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SetupStep */
var SetupStep;
(function(SetupStep1) {
    SetupStep1["ConsentDataCollection"] = 'consent-data-collection';
    SetupStep1["CreatePersona"] = 'create-persona';
    SetupStep1["ConnectNetwork"] = 'connect-network';
    SetupStep1["RestoreDatabase"] = 'restore-database';
    SetupStep1["RestoreDatabaseAdvance"] = 'restore-database-advance';
    SetupStep1["RestoreDatabaseConfirmation"] = 'restore-database-confirmation';
})(SetupStep || (SetupStep = {
}));


/***/ }),

/***/ 8328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useEnterDashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);

const useEnterDashboard = ()=>{
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event)=>{
        if (event.shiftKey) {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/debug.html')
            });
        } else if (false) {} else {
            browser.runtime.openOptionsPage();
        }
    }, []);
};


/***/ }),

/***/ 9950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "uE": () => (/* binding */ PermissionAwareRedirectOf),
  "mZ": () => (/* binding */ PopupRoutes),
  "km": () => (/* reexport */ constructRequestPermissionURL),
  "qy": () => (/* reexport */ constructSignRequestURL),
  "WQ": () => (/* binding */ getRouteURLWithNoParam)
});

;// CONCATENATED MODULE: ./src/extension/popups/RequestPermission/utils.ts

function constructRequestPermissionURL(permission) {
    const { origins =[] , permissions =[]  } = permission;
    const params = new URLSearchParams();
    for (const each of origins)params.append('origins', each);
    for (const each1 of permissions)params.append('permissions', each1);
    return `${getRouteURLWithNoParam(PopupRoutes.RequestPermission)}?${params.toString()}`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/popups/SignRequest/utils.ts


function constructSignRequestURL(request) {
    return dist_default()(getRouteURLWithNoParam(PopupRoutes.SignRequest), {
        message: request.message,
        id: request.requestID
    });
}

;// CONCATENATED MODULE: ./src/extension/popups/index.tsx
var PopupRoutes;
(function(PopupRoutes1) {
    PopupRoutes1["Root"] = '/';
    PopupRoutes1["Wallet"] = '/wallet';
    PopupRoutes1["ImportWallet"] = '/wallet/import';
    PopupRoutes1["AddDeriveWallet"] = '/wallet/addDerive';
    PopupRoutes1["WalletSettings"] = '/wallet/settings';
    PopupRoutes1["WalletRename"] = '/wallet/rename';
    PopupRoutes1["DeleteWallet"] = '/wallet/delete';
    PopupRoutes1["CreateWallet"] = '/wallet/create';
    PopupRoutes1["SelectWallet"] = '/wallet/select';
    PopupRoutes1["BackupWallet"] = '/wallet/backup';
    PopupRoutes1["AddToken"] = '/wallet/addToken';
    PopupRoutes1["WalletSignRequest"] = '/wallet/sign';
    PopupRoutes1["GasSetting"] = '/wallet/gas';
    PopupRoutes1["TokenDetail"] = '/wallet/tokenDetail';
    PopupRoutes1["Personas"] = '/personas';
    PopupRoutes1["PermissionAwareRedirect"] = '/redirect';
    PopupRoutes1["RequestPermission"] = '/request-permission';
    PopupRoutes1["ThirdPartyRequestPermission"] = '/3rd-request-permission';
    PopupRoutes1["SignRequest"] = '/sign-request';
})(PopupRoutes || (PopupRoutes = {
}));
function getRouteURLWithNoParam(kind) {
    return browser.runtime.getURL(`/popups.html#${kind}`);
}
function PermissionAwareRedirectOf(url, context) {
    return getRouteURLWithNoParam(PopupRoutes.PermissionAwareRedirect) + `?url=${encodeURIComponent(url)}&context=${context}`;
}




/***/ }),

/***/ 82967:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1868);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(35234);
// EXTERNAL MODULE: ./src/UIRoot.tsx
var UIRoot = __webpack_require__(13820);
// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(9950);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(43670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/database/IdentifierMap.ts
var IdentifierMap = __webpack_require__(55346);
;// CONCATENATED MODULE: ./src/social-network-adaptor/browser-action/index.ts



const base = {
    networkIdentifier: 'localhost',
    declarativePermissions: {
        origins: []
    },
    shouldActivate (location) {
        //TODO: replace this line to Env assert
        if (location.pathname === '/popups.html') return true;
        return (0,umd.isEnvironment)(umd.Environment.ManifestAction);
    }
};
const browser_action_define = {
    ...base,
    automation: {
    },
    collecting: {
    },
    configuration: {
    },
    customization: {
    },
    injection: {
    },
    permission: {
        async has () {
            return true;
        },
        async request () {
            return true;
        }
    },
    utils: {
        createPostContext: null
    },
    async init (signal) {
        const state = {
            profiles: new umd.ValueRef([]),
            friends: new umd.ValueRef(new IdentifierMap/* IdentifierMap */.q(new Map()))
        };
        const activeTab = (await browser.tabs.query({
            active: true,
            currentWindow: true
        }) || [])[0];
        if (activeTab === undefined) return state;
        const location = new URL(activeTab.url || globalThis.location.href);
        for (const ui of social_network.definedSocialNetworkUIs.values()){
            if (ui.shouldActivate(location) && ui.networkIdentifier !== 'localhost') {
                const _ = (await ui.load()).default;
                if (signal.aborted) return state;
                // TODO: heck, this is not what we expected.
                this.networkIdentifier = ui.networkIdentifier;
                this.permission = _.permission;
                this.declarativePermissions = _.declarativePermissions;
                this.utils = _.utils;
                return _.init(signal);
            }
        }
        return state;
    }
};
(0,social_network.defineSocialNetworkUI)({
    ...base,
    async load () {
        return {
            default: browser_action_define
        };
    }
});

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(22209);
// EXTERNAL MODULE: ./src/web3/context.ts
var context = __webpack_require__(60549);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/GlobalStyles/GlobalStyles.js
var GlobalStyles = __webpack_require__(75868);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(40623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(5726);
// EXTERNAL MODULE: ../icons/brands/MiniMask.tsx
var MiniMask = __webpack_require__(31061);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var icons_utils = __webpack_require__(12162);
;// CONCATENATED MODULE: ../icons/general/ArrowBack.tsx


const ArrowBackIcon = (0,icons_utils/* createIcon */.I)('ArrowBackIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M10.442 4.609a.625.625 0 10-.884-.884L3.731 9.552a.629.629 0 00-.154.654c.03.086.079.167.148.236l5.833 5.833a.625.625 0 10.884-.884l-4.767-4.766h10.158a.625.625 0 100-1.25H5.676l4.766-4.766z"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ./src/components/DataSource/useMyPersonas.ts
var useMyPersonas = __webpack_require__(50809);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ./src/extension/popups/hook/useEnterDashboard.ts
var useEnterDashboard = __webpack_require__(8328);
// EXTERNAL MODULE: ../icons/brands/MaskWallet.tsx
var MaskWallet = __webpack_require__(95772);
// EXTERNAL MODULE: ../icons/general/Masks.tsx
var Masks = __webpack_require__(75741);
;// CONCATENATED MODULE: ./src/extension/popups/components/InitialPlaceholder/index.tsx









const useStyles = (0,theme_src/* makeStyles */.ZL)()({
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: 16
    },
    placeholder: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 10px'
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14,
        lineHeight: 1.5,
        borderRadius: 20
    }
});
const InitialPlaceholder = /*#__PURE__*/ (0,react.memo)(()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    const matchWallet = (0,react_router/* useRouteMatch */.$B)(popups/* PopupRoutes.Wallet */.mZ.Wallet);
    const onEnter = (0,useEnterDashboard/* useEnterDashboard */.i)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.placeholder,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        style: {
                            width: 48,
                            height: 48,
                            borderRadius: 24,
                            marginBottom: 10,
                            backgroundColor: '#F7F9FA',
                            fontSize: 48
                        },
                        children: matchWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskWallet/* MaskWalletIcon */.j, {
                            fontSize: "inherit"
                        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Masks/* MasksIcon */.s, {
                            fontSize: "inherit"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        style: {
                            fontSize: 14
                        },
                        children: t('popups_initial_tips', {
                            type: matchWallet ? 'wallet' : 'personas'
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "contained",
                color: "primary",
                className: classes.button,
                onClick: onEnter,
                children: t('browser_action_enter_dashboard')
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/components/PopupFrame/index.tsx










function GlobalCss() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalStyles/* default */.Z, {
        styles: {
            body: {
                overflowX: 'hidden',
                margin: '0 auto',
                width: 310,
                maxWidth: '100%',
                backgroundColor: 'transparent',
                '&::-webkit-scrollbar': {
                    display: 'none'
                }
            }
        }
    }));
}
const PopupFrame_useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        container: {
            height: 474,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            padding: '0px 10px',
            backgroundColor: theme.palette.primary.main,
            height: 40,
            display: 'flex',
            justifyContent: 'space-between'
        },
        left: {
            display: 'flex',
            alignItems: 'center'
        },
        right: {
            display: 'flex',
            paddingTop: 6
        },
        nav: {
            width: 86,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'transparent',
            borderRadius: '4px 4px 0px 0px',
            fontSize: 14,
            fontWeight: 500,
            color: theme.palette.primary.contrastText,
            textDecoration: 'none'
        },
        active: {
            color: theme.palette.primary.main,
            cursor: 'inherit',
            backgroundColor: '#ffffff'
        }
    })
);
const PopupFrame = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = PopupFrame_useStyles();
    const personas = (0,useMyPersonas/* useMyPersonas */.n)();
    const excludePath = (0,react_router/* useRouteMatch */.$B)({
        path: [
            popups/* PopupRoutes.Wallet */.mZ.Wallet,
            popups/* PopupRoutes.Personas */.mZ.Personas,
            popups/* PopupRoutes.GasSetting */.mZ.GasSetting,
            popups/* PopupRoutes.WalletSignRequest */.mZ.WalletSignRequest
        ],
        exact: true
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(GlobalCss, {
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                className: classes.left,
                                children: excludePath || history.length > 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MiniMask/* MiniMaskIcon */.q, {
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackIcon, {
                                    onClick: history.goBack,
                                    style: {
                                        fill: '#ffffff',
                                        cursor: 'pointer'
                                    }
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                className: classes.right,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
                                        style: {
                                            marginRight: 5
                                        },
                                        to: popups/* PopupRoutes.Wallet */.mZ.Wallet,
                                        className: classes.nav,
                                        activeClassName: classes.active,
                                        children: t('wallets')
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, {
                                        to: popups/* PopupRoutes.Personas */.mZ.Personas,
                                        className: classes.nav,
                                        activeClassName: classes.active,
                                        children: t('personas')
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        className: classes.container,
                        children: personas.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(InitialPlaceholder, {
                        }) : props.children
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ./src/extension/popups/render.tsx











const Wallet = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(405), __webpack_require__.e(1694)]).then(__webpack_require__.bind(__webpack_require__, 50301))
);
const Personas = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 9051).then(__webpack_require__.bind(__webpack_require__, 69051))
);
const RequestPermissionPage = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(5533)]).then(__webpack_require__.bind(__webpack_require__, 35533))
);
const PermissionAwareRedirect = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2076)]).then(__webpack_require__.bind(__webpack_require__, 72076))
);
const ThirdPartyRequestPermission = /*#__PURE__*/ (0,react.lazy)(()=>__webpack_require__.e(/* import() */ 4013).then(__webpack_require__.bind(__webpack_require__, 24013))
);
const SignRequest = /*#__PURE__*/ (0,react.lazy)(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(3147), __webpack_require__.e(4544), __webpack_require__.e(8712), __webpack_require__.e(8331), __webpack_require__.e(2261), __webpack_require__.e(1491), __webpack_require__.e(9714), __webpack_require__.e(125), __webpack_require__.e(5578), __webpack_require__.e(7680), __webpack_require__.e(6690)]).then(__webpack_require__.bind(__webpack_require__, 74877))
);
function Dialogs() {
    return (0,UIRoot/* MaskUIRoot */.Y)(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* Web3Provider */.Qgv, {
        value: context/* Web3Context */.S,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router_dom/* HashRouter */.UT, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                fallback: "",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: popups/* PopupRoutes.Wallet */.mZ.Wallet,
                            children: render_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Wallet, {
                            }))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: popups/* PopupRoutes.Personas */.mZ.Personas,
                            children: render_frame(/*#__PURE__*/ (0,jsx_runtime.jsx)(Personas, {
                            })),
                            exact: true
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: popups/* PopupRoutes.RequestPermission */.mZ.RequestPermission,
                            exact: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RequestPermissionPage, {
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: popups/* PopupRoutes.PermissionAwareRedirect */.mZ.PermissionAwareRedirect,
                            exact: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PermissionAwareRedirect, {
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: popups/* PopupRoutes.ThirdPartyRequestPermission */.mZ.ThirdPartyRequestPermission,
                            exact: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThirdPartyRequestPermission, {
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            path: popups/* PopupRoutes.SignRequest */.mZ.SignRequest,
                            exact: true,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SignRequest, {
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
                                to: popups/* PopupRoutes.Wallet */.mZ.Wallet
                            })
                        })
                    ]
                })
            })
        })
    }));
}
(0,utils/* createNormalReactRoot */.jv)(/*#__PURE__*/ (0,jsx_runtime.jsx)(Dialogs, {
}));
function render_frame(x) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PopupFrame, {
        children: x
    }));
}


/***/ }),

/***/ 87591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hM": () => (/* binding */ FileServicePluginID),
/* harmony export */   "ki": () => (/* binding */ META_KEY_1),
/* harmony export */   "lw": () => (/* binding */ META_KEY_2),
/* harmony export */   "Tb": () => (/* binding */ MAX_FILE_SIZE),
/* harmony export */   "_$": () => (/* binding */ landing),
/* harmony export */   "Gm": () => (/* binding */ signing),
/* harmony export */   "oC": () => (/* binding */ mesonPrefix),
/* harmony export */   "er": () => (/* binding */ FileRouter)
/* harmony export */ });
const FileServicePluginID = 'com.maskbook.fileservice';
const META_KEY_1 = 'com.maskbook.fileservice:1';
const META_KEY_2 = 'com.maskbook.fileservice:2';
const MAX_FILE_SIZE = 10485760 // = 10 MiB
;
const landing = 'https://files.r2d2.to/partner/arweave/landing-page.html';
const signing = 'https://service.r2d2.to/arweave-remote-signing';
const mesonPrefix = 'https://coldcdn.com/api/cdn/9m5pde';
var FileRouter;
(function(FileRouter1) {
    FileRouter1["upload"] = '/upload';
    FileRouter1["uploading"] = '/uploading';
    FileRouter1["uploaded"] = '/uploaded';
})(FileRouter || (FileRouter = {
}));


/***/ }),

/***/ 35238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ZRX_BASE_URL),
/* harmony export */   "k": () => (/* binding */ ZRX_AFFILIATE_ADDRESS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);

const ZRX_BASE_URL = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Ethereum */ .tds.Ethereum]: 'https://api.0x.org',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Binance */ .tds.Binance]: 'https://bsc.api.0x.org/',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Polygon */ .tds.Polygon]: 'https://polygon.api.0x.org/',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: ''
};
const ZRX_AFFILIATE_ADDRESS = '0x934B510D4C9103E6a87AEf13b816fb080286D649';


/***/ }),

/***/ 70287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L4": () => (/* binding */ BALANCER_SOR_GAS_PRICE),
/* harmony export */   "r2": () => (/* binding */ BALANCER_MAX_NO_POOLS),
/* harmony export */   "qT": () => (/* binding */ BALANCER_SWAP_TYPE)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42895);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);

// gasPrice is used by SOR as a factor to determine how many pools to swap against.
// i.e. higher cost means more costly to trade against lots of different pools.
// Can be changed in future using SOR.gasPrice = newPrice
const BALANCER_SOR_GAS_PRICE = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())('1e11');
// This determines the max no of pools the SOR will use to swap.
const BALANCER_MAX_NO_POOLS = 4;
var BALANCER_SWAP_TYPE;
(function(BALANCER_SWAP_TYPE1) {
    BALANCER_SWAP_TYPE1["EXACT_IN"] = 'swapExactIn';
    BALANCER_SWAP_TYPE1["EXACT_OUT"] = 'swapExactOut';
})(BALANCER_SWAP_TYPE || (BALANCER_SWAP_TYPE = {
}));


/***/ }),

/***/ 45088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ DODO_BASE_URL),
/* harmony export */   "b": () => (/* binding */ networkNames)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);

const DODO_BASE_URL = 'https://dodo-route.dodoex.io';
const networkNames = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Ethereum */ .tds.Ethereum]: 'mainnet',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Binance */ .tds.Binance]: 'bsc-mainnet',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Polygon */ .tds.Polygon]: 'matic',
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: 'arbitrum'
};


/***/ }),

/***/ 87138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ PANCAKESWAP_CUSTOM_BASES),
/* harmony export */   "D": () => (/* binding */ PANCAKESWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const PANCAKESWAP_CUSTOM_BASES = {
};
const PANCAKESWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BUSD */ .lz,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BTCB */ .nB,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .UST */ .bi,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .ETHER */ .c0
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    )
};


/***/ }),

/***/ 10775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ QUICKSWAP_CUSTOM_BASES),
/* harmony export */   "P": () => (/* binding */ QUICKSWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const QUICKSWAP_CUSTOM_BASES = {
};
const QUICKSWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .QUICK */ .xZ,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .ETHER */ .c0,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .maUSDC */ .J6
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    )
};


/***/ }),

/***/ 40325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ SASHIMISWAP_CUSTOM_BASES),
/* harmony export */   "y": () => (/* binding */ SASHIMISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SASHIMISWAP_CUSTOM_BASES = {
};
const SASHIMISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .COMP */ .TP,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MKR */ .Ti
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    )
};


/***/ }),

/***/ 55870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ SUSHISWAP_CUSTOM_BASES),
/* harmony export */   "S": () => (/* binding */ SUSHISWAP_BASE_AGAINST_TOKENS)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43148);


/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const SUSHISWAP_CUSTOM_BASES = {
};
const SUSHISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .RUNE */ .uj,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .NFTX */ .lK,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .STETH */ ._S
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MSKA */ .uz,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MSKB */ .mW,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WBTC */ .ML,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Matic */ .a_e.Matic]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]: [
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BUSD */ .lz,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_1__/* .BTCB */ .nB
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.BSC */ .a_e.BSC]
    )
};


/***/ }),

/***/ 42848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QQ": () => (/* binding */ UNISWAP_CUSTOM_BASES),
/* harmony export */   "u7": () => (/* binding */ UNISWAP_BASE_AGAINST_TOKENS),
/* harmony export */   "s9": () => (/* binding */ MAX_HOP),
/* harmony export */   "jg": () => (/* binding */ DEFAULT_MULTICALL_GAS_LIMIT),
/* harmony export */   "Ru": () => (/* binding */ BETTER_TRADE_LESS_HOPS_THRESHOLD),
/* harmony export */   "fI": () => (/* binding */ ZERO_PERCENT),
/* harmony export */   "yC": () => (/* binding */ ONE_HUNDRED_PERCENT)
/* harmony export */ });
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59800);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24994);
/* harmony import */ var jsbi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsbi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43148);




/**
 * Some tokens can only be swapped via certain pairs,
 * so we override the list of bases that are considered for these tokens.
 */ const UNISWAP_CUSTOM_BASES = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: {
        [_trader__WEBPACK_IMPORTED_MODULE_3__/* .AMPL */ .s5[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet].address]: [
            _trader__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
            _trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH */ .DX
        ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
        )
    }
};
const UNISWAP_BASE_AGAINST_TOKENS = {
    ..._trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH_ONLY */ .Nu,
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]: [
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .DAI */ .h1,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .USDC */ .gn,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .USDT */ .AA,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .WBTC */ .ML
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Mainnet */ .a_e.Mainnet]
    ),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]: [
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .WETH */ .DX,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .MSKA */ .uz,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .MSKB */ .mW,
        _trader__WEBPACK_IMPORTED_MODULE_3__/* .MSKC */ .Xw
    ].map((x)=>x[_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .ChainId.Rinkeby */ .a_e.Rinkeby]
    )
};
const MAX_HOP = 3;
const DEFAULT_MULTICALL_GAS_LIMIT = 2000000;
// used to ensure the user doesn't send so much ETH so they end up with <.01
const BETTER_TRADE_LESS_HOPS_THRESHOLD = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__.Percent(jsbi__WEBPACK_IMPORTED_MODULE_2___default().BigInt(50), jsbi__WEBPACK_IMPORTED_MODULE_2___default().BigInt(10000));
const ZERO_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__.Percent('0');
const ONE_HUNDRED_PERCENT = new _uniswap_sdk_core__WEBPACK_IMPORTED_MODULE_1__.Percent('1');


/***/ }),

/***/ 10528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ facebookBase)
/* harmony export */ });
/* unused harmony export facebookWorkerBase */
const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const facebookBase = {
    networkIdentifier: 'facebook.com',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('facebook.com');
    }
};
const facebookWorkerBase = {
    ...facebookBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 76745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ instagramBase)
/* harmony export */ });
/* unused harmony export instagramWorkerBase */
const id = 'instagram.com';
const origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const instagramBase = {
    networkIdentifier: id,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(id);
    },
    notReadyForProduction: true
};
const instagramWorkerBase = {
    ...instagramBase,
    gunNetworkHint: id
};


/***/ }),

/***/ 83826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* binding */ twitterBase),
/* harmony export */   "L3": () => (/* binding */ isTwitter)
/* harmony export */ });
/* unused harmony export twitterWorkerBase */
const id = 'twitter.com';
const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const twitterBase = {
    networkIdentifier: id,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('twitter.com');
    }
};
function isTwitter(ui) {
    return ui.networkIdentifier === id;
}
const twitterWorkerBase = {
    ...twitterBase,
    gunNetworkHint: 'twitter-'
};


/***/ }),

/***/ 43670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "creator": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Du),
/* harmony export */   "managedStateCreator": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.MJ),
/* harmony export */   "stateCreator": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.ZZ),
/* harmony export */   "activateSocialNetworkUIInner": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUISync),
/* harmony export */   "activateSocialNetworkUI": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.Ps),
/* harmony export */   "defineSocialNetworkUI": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.BE),
/* harmony export */   "defineSocialNetworkWorker": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.tr),
/* harmony export */   "definedSocialNetworkUIs": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.LB),
/* harmony export */   "definedSocialNetworkWorkers": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.zq),
/* harmony export */   "definedSocialNetworkWorkersResolved": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.Ot),
/* harmony export */   "getNetworkWorker": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.C8),
/* harmony export */   "getNetworkWorkerUninitialized": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.Bu)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75730);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23294);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89327);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98433);







/***/ }),

/***/ 1076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XF": () => (/* binding */ encodeTextPayloadUI),
/* harmony export */   "X2": () => (/* binding */ decodeTextPayloadUI)
/* harmony export */ });
/* unused harmony exports encodePublicKeyUI, decodePublicKeyUI */
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23294);

function encodePublicKeyUI(x) {
    var ref;
    const f = (ref = activatedSocialNetworkUI.utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.encoder;
    if (f) return f(x) || x;
    return x;
}
function decodePublicKeyUI(x) {
    var ref;
    const f = (ref = activatedSocialNetworkUI.utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return f(x).concat(x);
    return [
        x
    ];
}
function encodeTextPayloadUI(x) {
    var ref;
    const f = (ref = _ui__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.encoder;
    if (f) return f(x) || x;
    return x;
}
function decodeTextPayloadUI(x) {
    var ref;
    const f = (ref = _ui__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return f(x).concat(x);
    return [
        x
    ];
}


/***/ }),

/***/ 84934:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export notNullable */
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57579);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);

const notInclude = (val, things, message)=>{
    things.forEach((value)=>{
        notEqual(val, value, message);
    });
};
/**
 * Ensure a value not null or undefined.
 */ const notNullable = (val, message = 'Unexpected nil value detected')=>{
    notInclude(val, [
        null,
        undefined
    ], message);
    return val;
};


/***/ }),

/***/ 73405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports mapContactAvatarColor, Avatar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);



const mapContactAvatarColor = (string, theme)=>{
    const hash = [
        ...string
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return `hsl(${hash % 360}, ${theme === 'dark' ? `78%` : '98%'}, ${theme === 'dark' ? `50%` : '70%'})`;
};
function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = nickname || identifier.userId || '';
    const [first, last] = name.split(' ');
    const theme = useTheme().palette.mode;
    return(/*#__PURE__*/ _jsxs(MuiAvatar, {
        "aria-label": name,
        src: avatar,
        style: {
            backgroundColor: mapContactAvatarColor(identifier.toText(), theme)
        },
        ...props,
        children: [
            first[0],
            (last || '')[0]
        ]
    }));
}


/***/ }),

/***/ 5638:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73405);



/***/ }),

/***/ 61893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Up": () => (/* binding */ untilDomLoaded)
/* harmony export */ });
/* unused harmony exports isDocument, untilElementAvailable, untilDocumentReady, nthChild */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);


const isDocument = (node)=>node.nodeType === Node.DOCUMENT_NODE
;
const untilElementAvailable = async (ls, timeout = 5000)=>{
    const w = new IntervalWatcher(ls);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>reject()
        , timeout);
        w.useForeach(()=>{
            w.stopWatch();
            resolve();
        }).startWatch(500);
    });
};
function untilDomLoaded() {
    if (document.readyState !== 'loading') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState !== 'loading') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
function untilDocumentReady() {
    if (document.readyState === 'complete') return Promise.resolve();
    return new Promise((resolve)=>{
        const callback = ()=>{
            if (document.readyState === 'complete') {
                resolve();
                document.removeEventListener('readystatechange', callback);
            }
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
const nthChild = (n, ...childrenIndex)=>{
    let r = n;
    for (const v of childrenIndex){
        if (isUndefined(r)) break;
        r = r.children[v];
    }
    return r;
};


/***/ }),

/***/ 33059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MN": () => (/* reexport safe */ _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__.M),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_8__.E)
/* harmony export */ });
/* harmony import */ var _useControlledDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15677);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2492);
/* harmony import */ var _useQRCodeImageScan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14830);
/* harmony import */ var _useQRCodeVideoScan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21069);
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48711);
/* harmony import */ var _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8146);
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62628);
/* harmony import */ var _useVideoDevices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73774);













/***/ }),

/***/ 2492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useMenu */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76935);



/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = useState(false);
    const anchorElRef = useRef();
    const close = ()=>setOpen(false)
    ;
    return [
        /*#__PURE__*/ createElement(useShadowRoot ? ShadowRootMenu : Menu, {
            PaperProps: props === null || props === void 0 ? void 0 : props.paperProps,
            MenuListProps: props === null || props === void 0 ? void 0 : props.menuListProps,
            open: open,
            anchorEl: anchorElRef.current,
            onClose: close,
            onClick: close
        }, elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ isValidElement(element) ? /*#__PURE__*/ cloneElement(element, {
                ...element.props,
                key
            }) : element
        )),
        useCallback((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            var ref;
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            anchorElRef.current = anchorSibling ? (ref = element.nextElementSibling) !== null && ref !== void 0 ? ref : undefined : element;
            setOpen(true);
        }, []), 
    ];
}


/***/ }),

/***/ 14830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useQRCodeImageScan */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);



function useQRCodeImageScan(image) {
    const scanner = useRef(new BarcodeDetector({
        formats: [
            'qr_code'
        ]
    }));
    const [source, setSource] = useState('');
    useEffect(()=>{
        const node = image.current;
        if (node) {
            var ref;
            node.addEventListener('load', ()=>{
                return setSource((ref = node === null || node === void 0 ? void 0 : node.getAttribute('src')) !== null && ref !== void 0 ? ref : '');
            });
            node.addEventListener('error', ()=>setSource('')
            );
        } else {
            setSource('');
        }
    }, [
        image
    ]);
    return useAsync(async ()=>{
        const image1 = await loadImage(source);
        const [{ rawValue  }] = await scanner.current.detect(image1);
        return rawValue;
    }, [
        source,
        scanner.current
    ]);
}


/***/ }),

/***/ 21069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports getBackVideoDeviceId, useQRCodeVideoScan */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48711);
/* harmony import */ var _components_QRScanner_ShapeDetectionPolyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60279);
/// <reference path="../../components/QRScanner/ShapeDetectionSpec.d.ts" />
/** This file is published under MIT License */ 




async function getBackVideoDeviceId() {
    var ref;
    const devices = filter(await navigator.mediaDevices.enumerateDevices(), ({ kind  })=>kind === 'videoinput'
    );
    const back = find(devices, ({ label  })=>!/front/i.test(label) && /back|rear/i.test(label)
    );
    var ref1;
    return (ref1 = (ref = back !== null && back !== void 0 ? back : first(devices)) === null || ref === void 0 ? void 0 : ref.deviceId) !== null && ref1 !== void 0 ? ref1 : null;
}
function useQRCodeVideoScan(video, isScanning, deviceId, onResult, onError) {
    // TODO!: ? not work See https://github.com/DimensionDev/Maskbook/issues/810
    // ? Get video stream
    {
        const permission = useQueryNavigatorPermission(isScanning, 'camera');
        const [mediaStream, setMediaStream] = useState(null);
        useEffect(()=>{
            function stop() {
                if (mediaStream) {
                    mediaStream.getTracks().forEach((x)=>x.stop()
                    );
                }
                video.current.pause();
            }
            async function start() {
                if (permission !== 'granted' || !video.current) return;
                try {
                    let media = mediaStream;
                    if (!media) {
                        const device = deviceId !== null && deviceId !== void 0 ? deviceId : await getBackVideoDeviceId();
                        media = await navigator.mediaDevices.getUserMedia({
                            audio: false,
                            video: device === null ? {
                                facingMode: 'environment'
                            } : {
                                deviceId: device
                            }
                        });
                        return setMediaStream(media);
                    }
                    video.current.srcObject = media;
                    video.current.play();
                } catch (error) {
                    console.error(error);
                    stop();
                }
            }
            if (!video.current) return;
            if (!isScanning) return stop();
            start();
            return ()=>{
                stop();
            };
        }, [
            deviceId,
            isScanning,
            mediaStream,
            permission,
            video
        ]);
    }
    // ? Do scan
    {
        const scanner = useRef(new BarcodeDetector({
            formats: [
                'qr_code'
            ]
        }));
        const lastScanning = useRef(false);
        const errorTimes = useRef(0);
        useInterval(async ()=>{
            if (errorTimes.current >= 10) if (errorTimes.current === 10) {
                errorTimes.current += 1;
                return onError === null || onError === void 0 ? void 0 : onError();
            } else return;
            if (lastScanning.current) return;
            if (!video.current || !isScanning) return;
            lastScanning.current = true;
            try {
                const [result] = await scanner.current.detect(video.current);
                if (result) onResult === null || onResult === void 0 ? void 0 : onResult(result.rawValue);
            } catch  {
                errorTimes.current += 1;
            } finally{
                lastScanning.current = false;
            }
        }, 100);
    }
}


/***/ }),

/***/ 48711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports checkPermissionApiUsability, useQueryNavigatorPermission */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80773);
/** This file is published under MIT License */ 


const q = (/* unused pure expression or super */ null && ([
    'query',
    'request',
    'revoke'
]));
function checkPermissionApiUsability(type) {
    const r = {
    };
    for (const v of q){
        r[v] = hasIn(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = useState('prompt');
    useEffect(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || Flags.has_no_WebRTC) return;
        let permissionStatus;
        const handleChange = function() {
            updatePermission(this.state);
        };
        if (checkPermissionApiUsability('query')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .query({
                name
            }).then((p)=>{
                permissionStatus = p;
                permissionStatus.addEventListener('change', handleChange);
                updatePermission(permissionStatus.state);
            }).catch(()=>{
                // for some user agents which implemented `query` method
                // but rise an error if specific permission name dose not supported
                updatePermission('granted');
            });
        } else if (checkPermissionApiUsability('request')) {
            navigator.permissions// @ts-expect-error https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-898868275
            .request({
                name
            }).then((p)=>{
                updatePermission(p.state);
            }).catch(()=>{
                updatePermission('granted');
            });
        } else {
            updatePermission('granted');
        }
        return ()=>{
            return permissionStatus === null || permissionStatus === void 0 ? void 0 : permissionStatus.removeEventListener('change', handleChange);
        };
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}


/***/ }),

/***/ 73774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useVideoDevices */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


function useVideoDevices() {
    const permissionState = usePermission({
        name: 'camera'
    });
    const { devices =[]  } = useMediaDevices();
    // we dispatch a fake event if permission changed
    // in order to fix the bug described in this issues
    // https://github.com/streamich/react-use/issues/1318
    useEffect(()=>{
        navigator.mediaDevices.dispatchEvent(new Event('devicechange'));
    }, [
        permissionState
    ]);
    return devices.filter((d)=>d.kind === 'videoinput'
    );
}


/***/ }),

/***/ 77287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.MN),
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "p_": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.p_),
/* harmony export */   "ad": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "$I": () => (/* reexport safe */ _suspends__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "PN": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.PN),
/* harmony export */   "qX": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.qX),
/* harmony export */   "ll": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.ll),
/* harmony export */   "YT": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.YT),
/* harmony export */   "YU": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.Y),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_11__.vU),
/* harmony export */   "c_": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   "cc": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.L),
/* harmony export */   "M1": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.M),
/* harmony export */   "ZK": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "J3": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_16__.J),
/* harmony export */   "yV": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_17__.y),
/* harmony export */   "uM": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.u),
/* harmony export */   "b5": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.b),
/* harmony export */   "CU": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.CU),
/* harmony export */   "Wu": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.Wu),
/* harmony export */   "jv": () => (/* reexport safe */ _createNormalReactRoot__WEBPACK_IMPORTED_MODULE_21__.j),
/* harmony export */   "Ql": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Ql),
/* harmony export */   "Cw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Cw),
/* harmony export */   "Se": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Se),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.gw),
/* harmony export */   "Yu": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Yu),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Vs)
/* harmony export */ });
/* harmony import */ var _components___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5638);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7879);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33059);
/* harmony import */ var _native_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16994);
/* harmony import */ var _shadow_root__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99515);
/* harmony import */ var _suspends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20148);
/* harmony import */ var _type_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88066);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(84934);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12139);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61893);
/* harmony import */ var _equality__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50970);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80773);
/* harmony import */ var _getTextUILength__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(67552);
/* harmony import */ var _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(35071);
/* harmony import */ var _i18n_next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(95001);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61298);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(61046);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13017);
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50023);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27411);
/* harmony import */ var _side_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(21920);
/* harmony import */ var _createNormalReactRoot__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(37904);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8325);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(98621);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(59851);































/***/ }),

/***/ 76935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu)
/* harmony export */ });
/* unused harmony export ShadowRootPopper */
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95710);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58610);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25831);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5726);


const ShadowRootTooltip = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
const ShadowRootMenu = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
const ShadowRootPopper = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);


/***/ }),

/***/ 99515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p_": () => (/* reexport safe */ _ShadowRootComponents__WEBPACK_IMPORTED_MODULE_2__.p_),
/* harmony export */   "ad": () => (/* reexport safe */ _masknet_theme__WEBPACK_IMPORTED_MODULE_3__.ad)
/* harmony export */ });
/* harmony import */ var _MaskInShadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4473);
/* harmony import */ var _renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39999);
/* harmony import */ var _ShadowRootComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76935);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5726);






/***/ }),

/***/ 39999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export createReactRootShadowed */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31491);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81949);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8325);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61893);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80773);
/* harmony import */ var _MaskInShadow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4473);









const captureEvents = [
    'paste',
    'keydown',
    'keypress',
    'keyup',
    'drag',
    'dragend',
    'dragenter',
    'dragleave',
    'dragover',
    'dragstart',
    'change', 
];
(0,_dom__WEBPACK_IMPORTED_MODULE_5__/* .untilDomLoaded */ .Up)().then(()=>{
    (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .setupPortalShadowRoot */ .d_)({
        mode: _flags__WEBPACK_IMPORTED_MODULE_6__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
    }, captureEvents);
});
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    onHeadCreate (head) {
        const themeCSSVars = head.appendChild(document.createElement('style'));
        function updateThemeVars() {
            (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .applyMaskColorVars */ .Dc)(themeCSSVars, (0,_theme__WEBPACK_IMPORTED_MODULE_4__/* .getMaskbookTheme */ .hz)().palette.mode);
        }
        updateThemeVars();
        _settings_settings__WEBPACK_IMPORTED_MODULE_3__/* .appearanceSettings.addListener */ .OF.addListener(updateThemeVars);
        matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeVars);
    },
    wrapJSX (jsx) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_shared_ErrorBoundary__WEBPACK_IMPORTED_MODULE_1__/* .ErrorBoundary */ .S, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MaskInShadow__WEBPACK_IMPORTED_MODULE_7__/* .MaskInShadow */ .v, {
                children: jsx
            })
        }));
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 8325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hz": () => (/* binding */ getMaskbookTheme),
/* harmony export */   "Uk": () => (/* binding */ useClassicMaskTheme),
/* harmony export */   "Nh": () => (/* binding */ useColorStyles),
/* harmony export */   "Ql": () => (/* binding */ extendsTheme)
/* harmony export */ });
/* unused harmony export useErrorStyles */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24982);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34513);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87277);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7838);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53590);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63417);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47480);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(60455);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(68573);
/* harmony import */ var _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(73260);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34539);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81949);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43670);














function getFontFamily(monospace) {
    // We want to look native.
    // Windows has no CJK sans monospace. Accommodate that.
    // We only use it for fingerprints anyway so CJK coverage ain't a problem... yet.
    const monofont = navigator.platform.startsWith('Win') ? 'Consolas, monospace' : 'monospace';
    // https://caniuse.com/font-family-system-ui
    // Firefox does NOT support yet it in any form on Windows, but tests indicate that it agrees with Edge in using the UI font for sans-serif:
    // Microsoft YaHei on zh-Hans-CN.
    return !monospace ? '-apple-system, system-ui, sans-serif' : monofont;
}
const base = {
    palette: {
        primary: {
            main: '#1c68f3'
        },
        secondary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z,
        text: {
            hint: 'rgba(0, 0, 0, 0.38)'
        }
    },
    typography: {
        fontFamily: getFontFamily()
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1112,
            lg: 1280,
            xl: 1920
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    minWidth: '100px'
                }
            },
            defaultProps: {
                size: 'small',
                disableElevation: true
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    padding: '0',
                    // up-sm
                    '@media screen and (min-width: 600px)': {
                        minWidth: 160
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '12px'
                }
            }
        }
    }
};
const lightThemePatch = {
    palette: {
        mode: 'light'
    }
};
const darkThemePatch = {
    palette: {
        mode: 'dark',
        background: {
            paper: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[900] */ .Z[900]
        }
    },
    components: {
        MuiPaper: {
            // https://github.com/mui-org/material-ui/pull/25522
            styleOverrides: {
                root: {
                    backgroundImage: 'unset'
                }
            }
        }
    }
};
const baseTheme = (theme)=>{
    if (theme === 'light') return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(base), lightThemePatch);
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(base), darkThemePatch);
};
// Theme
const MaskbookLightTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme('light'));
const MaskbookDarkTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme('dark'));
function getMaskbookTheme(opt) {
    var ref;
    let language = opt === null || opt === void 0 ? void 0 : opt.language;
    if (!language) {
        const settings = _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .languageSettings.value */ .pQ.value;
        // TODO:
        if (settings === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
        else language = settings;
    }
    if (!language) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
    var ref1;
    const preference = (ref1 = opt === null || opt === void 0 ? void 0 : opt.appearance) !== null && ref1 !== void 0 ? ref1 : _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .appearanceSettings.value */ .OF.value;
    // Priority:
    // PaletteModeProvider (in SNS adaptor) > User preference > OS preference
    const isDarkBrowser = matchMedia('(prefers-color-scheme: dark)').matches;
    const detectedPalette = (ref = _social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.current.value;
    let isDark = isDarkBrowser && preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.default */ .um.default || preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.dark */ .um.dark;
    if (detectedPalette) {
        isDark = detectedPalette === 'dark';
    } else if (preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.default */ .um.default) {
        isDark = isDarkBrowser;
    } else {
        isDark = preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.dark */ .um.dark;
    }
    const baseTheme1 = isDark ? MaskbookDarkTheme : MaskbookLightTheme;
    switch(language){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS:
            return baseTheme1;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.jaJP */ .iu.jaJP:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .jaJP */ .jz);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.koKR */ .iu.koKR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .koKR */ .uG);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhTW */ .iu.zhTW:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .zhTW */ .cj);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhCN */ .iu.zhCN:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .zhCN */ .U1);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.ruRU */ .iu.ruRU:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .ruRU */ .nx);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.itIT */ .iu.itIT:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .itIT */ .KL);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.esES */ .iu.esES:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .esES */ ._Y);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.frFR */ .iu.frFR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .frFR */ .gQ);
        // TODO: it should be a RTL theme.
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.faIR */ .iu.faIR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .faIR */ .Tj);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .safeUnreachable */ .P)(language);
            return baseTheme1;
    }
}
// We're developing a new theme in the theme/ package
function useClassicMaskTheme(opt) {
    var ref;
    const langSettingsValue = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .languageSettings */ .pQ);
    let language = opt === null || opt === void 0 ? void 0 : opt.language;
    if (!language) {
        // TODO:
        if (langSettingsValue === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
        else language = langSettingsValue;
    }
    const appearance = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.or)(opt === null || opt === void 0 ? void 0 : opt.appearance, (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .appearanceSettings */ .OF));
    const systemPreference = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)('(prefers-color-scheme: dark)');
    const paletteProvider = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.current) || new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.ValueRef('light')).current;
    const palette = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(paletteProvider);
    return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>getMaskbookTheme({
            appearance,
            language
        })
    , [
        language,
        appearance,
        systemPreference,
        palette
    ]);
}
const useColorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        error: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900]
        },
        success: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__/* .default[800] */ .Z[800]
        },
        info: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__/* .default[800] */ .Z[800]
        }
    };
});
const useErrorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        containedPrimary: {
            backgroundColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            '&:hover': {
                backgroundColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[700] */ .Z[700]
            }
        },
        outlinedPrimary: {
            borderColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            '&:hover': {
                borderColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[700] */ .Z[700]
            }
        }
    };
});
function extendsTheme(extend) {
    return (theme)=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(theme), extend(theme))
    ;
}


/***/ }),

/***/ 24910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PN": () => (/* binding */ decompressBackupFile)
/* harmony export */ });
/* unused harmony exports sanitizeBackupFile, compressBackupFile */
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80594);
/* harmony import */ var _SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26793);


function sanitizeBackupFile(backup) {
    return {
        ...backup,
        grantedHostPermissions: backup.grantedHostPermissions.filter((url)=>/^(http|<all_urls>)/.test(url)
        )
    };
}
function compressBackupFile(file, { profileIdentifier , personaIdentifier  } = {
}) {
    var ref, ref1, ref2, ref3;
    const { grantedHostPermissions , profiles , personas  } = file;
    var ref4;
    const personaIdentifier_ = (ref4 = personaIdentifier === null || personaIdentifier === void 0 ? void 0 : personaIdentifier.toText()) !== null && ref4 !== void 0 ? ref4 : (ref = profiles.find((x)=>{
        return x.identifier === (profileIdentifier === null || profileIdentifier === void 0 ? void 0 : profileIdentifier.toText());
    })) === null || ref === void 0 ? void 0 : ref.linkedPersona;
    const persona = personas.find((x)=>x.identifier === personaIdentifier_
    );
    if (!persona || !persona.privateKey) throw new Error('Target persona not found');
    const linkedProfile = (ref1 = persona.linkedProfiles[0]) === null || ref1 === void 0 ? void 0 : ref1[0];
    const profileIdentifier_ = (profileIdentifier !== null && profileIdentifier !== void 0 ? profileIdentifier : linkedProfile) ? Identifier.fromString(linkedProfile, ProfileIdentifier).unwrap() : undefined;
    const { localKey , nickname , privateKey  } = persona;
    return [
        '1',
        profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.network,
        profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.userId,
        nickname,
        (localKey === null || localKey === void 0 ? void 0 : localKey.k) || ((ref2 = profiles.filter((x)=>{
            return x.identifier === (profileIdentifier_ === null || profileIdentifier_ === void 0 ? void 0 : profileIdentifier_.toText());
        }).filter((x)=>x.localKey
        )[0]) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.localKey) === null || ref3 === void 0 ? void 0 : ref3.k) || '',
        compressSecp256k1Key(privateKey, 'private'),
        grantedHostPermissions.join(';'), 
    ].join('🤔');
}
function decompressBackupFile(short) {
    let compressed;
    try {
        compressed = JSON.parse(short);
        if (typeof compressed === 'object') return sanitizeBackupFile(compressed);
    } catch  {
        if (!short.includes('🤔')) throw new Error('This backup is not a compressed string');
        compressed = short;
    }
    const [version, network, userID, nickname, localKey, privateKey, grantedHostPermissions] = compressed.split('🤔');
    if (version !== '1') throw new Error(`QR Code cannot be shared between different version of Mask`);
    const localKeyJWK = {
        alg: 'A256GCM',
        ext: true,
        k: localKey,
        key_ops: [
            'encrypt',
            'decrypt'
        ],
        kty: 'oct'
    };
    const publicJWK = (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1Key */ .q)(privateKey, 'public');
    const privateJWK = (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .decompressSecp256k1Key */ .q)(privateKey, 'private');
    const profileID = network && userID ? new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(network, userID) : undefined;
    const ECID = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(publicJWK);
    return sanitizeBackupFile({
        _meta_: {
            createdAt: 0,
            maskbookVersion: browser.runtime.getManifest().version,
            version: 2,
            type: 'maskbook-backup'
        },
        grantedHostPermissions: grantedHostPermissions.split(';').filter(Boolean),
        posts: [],
        wallets: [],
        userGroups: [],
        personas: [
            {
                createdAt: 0,
                updatedAt: 0,
                privateKey: privateJWK,
                publicKey: publicJWK,
                identifier: ECID.toText(),
                linkedProfiles: profileID ? [
                    [
                        profileID.toText(),
                        {
                            connectionConfirmState: 'confirmed'
                        }
                    ]
                ] : [],
                nickname,
                localKey: localKeyJWK
            }, 
        ],
        profiles: profileID ? [
            {
                createdAt: 0,
                identifier: profileID.toText(),
                updatedAt: 0,
                linkedPersona: ECID.toText(),
                nickname: nickname,
                localKey: localKeyJWK
            }, 
        ] : []
    });
}


/***/ }),

/***/ 29536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ isBackupJSONFileVersion2),
/* harmony export */   "nl": () => (/* binding */ upgradeFromBackupJSONFileVersion1),
/* harmony export */   "a6": () => (/* binding */ patchNonBreakingUpgradeForBackupJSONFileVersion2)
/* harmony export */ });
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80594);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83826);
/* harmony import */ var _social_network_adaptor_facebook_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10528);



function isBackupJSONFileVersion2(obj) {
    var ref, ref1, ref2, ref3;
    return ((ref = obj) === null || ref === void 0 ? void 0 : (ref1 = ref._meta_) === null || ref1 === void 0 ? void 0 : ref1.version) === 2 && ((ref2 = obj) === null || ref2 === void 0 ? void 0 : (ref3 = ref2._meta_) === null || ref3 === void 0 ? void 0 : ref3.type) === 'maskbook-backup';
}
function upgradeFromBackupJSONFileVersion1(json) {
    const personas = [];
    const profiles = [];
    function addPersona(record) {
        const prev = personas.find((x)=>x.identifier === record.identifier
        );
        if (prev) {
            Object.assign(prev, record);
            prev.linkedProfiles.push(...record.linkedProfiles);
        } else personas.push({
            ...record,
            updatedAt: 0,
            createdAt: 0
        });
    }
    function addProfile(record) {
        const prev = profiles.find((x)=>x.identifier === record.identifier
        );
        if (prev) {
            Object.assign(prev, record);
        } else profiles.push({
            ...record,
            updatedAt: 0,
            createdAt: 0
        });
    }
    for (const x of json.whoami){
        const profile = new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(x.network, x.userId).toText();
        const persona = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(x.publicKey).toText();
        addProfile({
            identifier: profile,
            linkedPersona: persona,
            localKey: x.localKey,
            nickname: x.nickname
        });
        addPersona({
            identifier: persona,
            linkedProfiles: [
                [
                    profile,
                    {
                        connectionConfirmState: 'confirmed'
                    }
                ]
            ],
            publicKey: x.publicKey,
            privateKey: x.privateKey,
            localKey: x.localKey,
            nickname: x.nickname
        });
    }
    for (const x1 of json.people || []){
        const profile = new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(x1.network, x1.userId);
        const persona = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(x1.publicKey).toText();
        addProfile({
            identifier: profile.toText(),
            linkedPersona: persona,
            nickname: x1.nickname
        });
        addPersona({
            identifier: persona,
            linkedProfiles: [
                [
                    profile.toText(),
                    {
                        connectionConfirmState: 'confirmed'
                    }
                ]
            ],
            publicKey: x1.publicKey,
            nickname: x1.nickname
        });
    }
    return {
        _meta_: {
            version: 2,
            type: 'maskbook-backup',
            maskbookVersion: json.maskbookVersion,
            createdAt: 0
        },
        posts: [],
        wallets: [],
        personas,
        profiles,
        userGroups: [],
        grantedHostPermissions: json.grantedHostPermissions
    };
}
function patchNonBreakingUpgradeForBackupJSONFileVersion2(json) {
    var _wallets;
    json.wallets = (_wallets = json.wallets) !== null && _wallets !== void 0 ? _wallets : [];
    const permissions = new Set(json.grantedHostPermissions);
    if (json.grantedHostPermissions.some((x)=>x.includes('twitter.com')
    )) {
        const a = _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_1__/* .twitterBase.declarativePermissions.origins */ .oQ.declarativePermissions.origins;
        a.forEach((x)=>permissions.add(x)
        );
    }
    if (json.grantedHostPermissions.some((x)=>x.includes('facebook.com')
    )) {
        const a = _social_network_adaptor_facebook_com_base__WEBPACK_IMPORTED_MODULE_2__/* .facebookBase.declarativePermissions.origins */ .q.declarativePermissions.origins;
        a.forEach((x)=>permissions.add(x)
        );
    }
    return json;
}


/***/ }),

/***/ 88066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "PN": () => (/* reexport */ BackupFileShortRepresentation/* decompressBackupFile */.PN),
  "qX": () => (/* reexport */ SECP256k1_Compression/* decompressSecp256k1Key */.q),
  "ll": () => (/* reexport */ String_ArrayBuffer/* encodeArrayBuffer */.ll),
  "YT": () => (/* reexport */ String_ArrayBuffer/* encodeText */.YT)
});

// UNUSED EXPORTS: CryptoKeyToJsonWebKey, JWKToKey, JsonWebKeyToCryptoKey, UpgradeBackupJSONFile, asyncIteratorToArray, asyncIteratorToAsyncFunction, asyncIteratorWithResult, compressBackupFile, compressSecp256k1Key, constructAlpha38, decodeArrayBuffer, decodeText, deconstructPayload, getBackupPreviewInfo, getKeyParameter, keyToAddr, keyToJWK, memorizeAsyncGenerator, sanitizeBackupFile, serialization

// EXTERNAL MODULE: ./src/utils/type-transform/BackupFileShortRepresentation.ts
var BackupFileShortRepresentation = __webpack_require__(24910);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts + 2 modules
var latest = __webpack_require__(61626);
;// CONCATENATED MODULE: ./src/utils/type-transform/BackupFormat/index.ts


// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(64770);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(57850);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-Compression.ts
var SECP256k1_Compression = __webpack_require__(26793);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-ETH.ts
var SECP256k1_ETH = __webpack_require__(52383);
// EXTERNAL MODULE: ./src/utils/type-transform/Serialization.ts
var Serialization = __webpack_require__(53066);
// EXTERNAL MODULE: ./src/utils/type-transform/String-ArrayBuffer.ts
var String_ArrayBuffer = __webpack_require__(79178);
;// CONCATENATED MODULE: ./src/utils/type-transform/index.ts











/***/ }),

/***/ 59851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export startWatch */
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80773);

function startWatch(watcher, signal) {
    watcher.setDOMProxyOption({
        afterShadowRootInit: {
            mode: Flags.using_ShadowDOM_attach_mode
        },
        beforeShadowRootInit: {
            mode: Flags.using_ShadowDOM_attach_mode
        }
    }).startWatch({
        subtree: true,
        childList: true
    });
    signal.addEventListener('abort', ()=>watcher.stopWatch()
    );
    return watcher;
}


/***/ }),

/***/ 87509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 76117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 63371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 91271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "N8": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.N)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45242);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49343);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91271);





/***/ }),

/***/ 22209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony export */   "F3R": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.F3),
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
/* harmony export */   "_EJ": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_3__._E),
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

/***/ 26267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ji": () => (/* binding */ isChainIdValid),
/* harmony export */   "yX": () => (/* binding */ isChainIdMainnet),
/* harmony export */   "lQ": () => (/* binding */ isEIP1159Supported),
/* harmony export */   "$G": () => (/* binding */ getChainDetailed),
/* harmony export */   "EX": () => (/* binding */ getChainDetailedCAIP),
/* harmony export */   "NX": () => (/* binding */ getChainRPC),
/* harmony export */   "qz": () => (/* binding */ getChainName),
/* harmony export */   "F3": () => (/* binding */ getChainShortName),
/* harmony export */   "np": () => (/* binding */ getChainIdFromName),
/* harmony export */   "EP": () => (/* binding */ getChainIdFromNetworkType),
/* harmony export */   "_T": () => (/* binding */ getNetworkTypeFromChainId)
/* harmony export */ });
/* unused harmony export getChainFullName */
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
/* harmony export */   "F3": () => (/* reexport safe */ _chainDetailed__WEBPACK_IMPORTED_MODULE_5__.F3),
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

/***/ 79506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 44737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ createContainer),
/* harmony export */   "u": () => (/* binding */ useContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


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


/***/ }),

/***/ 13790:
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Ethereum Mainnet","chainId":1,"fullName":"Ethereum","shortName":"eth","chain":"ETH","network":"mainnet","networkId":1,"nativeCurrency":{"name":"Ether","symbol":"ETH","decimals":18,"logoURI":"https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png"},"faucets":[],"features":["EIP1159"],"explorers":[{"name":"etherscan","url":"https://etherscan.io","standard":"EIP3091"}],"infoURL":"https://ethereum.org"},{"name":"Ethereum Testnet Ropsten","chainId":3,"fullName":"Ethereum","shortName":"rop","chain":"ETH","network":"ropsten","networkId":3,"nativeCurrency":{"name":"Ropsten Ether","symbol":"ROP","decimals":18},"faucets":["https://faucet.ropsten.be?${ADDRESS}"],"features":["EIP1159"],"explorers":[{"name":"etherscan","url":"https://ropsten.etherscan.io","standard":"EIP3091"}],"infoURL":"https://github.com/ethereum/ropsten"},{"name":"Ethereum Testnet Rinkeby","chainId":4,"fullName":"Ethereum","shortName":"rin","chain":"ETH","network":"rinkeby","networkId":4,"nativeCurrency":{"name":"Rinkeby Ether","symbol":"RIN","decimals":18},"faucets":["https://faucet.rinkeby.io"],"features":[],"explorers":[{"name":"etherscan","url":"https://rinkeby.etherscan.io","standard":"EIP3091"}],"infoURL":"https://www.rinkeby.io"},{"name":"Ethereum Testnet Kovan","chainId":42,"fullName":"Ethereum","shortName":"kov","chain":"ETH","network":"kovan","networkId":42,"nativeCurrency":{"name":"Kovan Ether","symbol":"KOV","decimals":18},"faucets":["https://faucet.kovan.network","https://gitter.im/kovan-testnet/faucet"],"features":[],"explorers":[{"name":"etherscan","url":"https://kovan.etherscan.io","standard":"EIP3091"}],"infoURL":"https://kovan-testnet.github.io/website"},{"name":"Ethereum Testnet Görli","chainId":5,"fullName":"Ethereum","shortName":"gor","chain":"ETH","network":"goerli","networkId":5,"nativeCurrency":{"name":"Görli Ether","symbol":"GOR","decimals":18},"faucets":["https://goerli-faucet.slock.it/?address=${ADDRESS}","https://faucet.goerli.mudit.blog"],"features":[],"explorers":[{"name":"etherscan","url":"https://goerli.etherscan.io","standard":"EIP3091"}],"infoURL":"https://goerli.net/#about"},{"name":"Binance Smart Chain Mainnet","chainId":56,"fullName":"Binance","shortName":"bnb","chain":"BSC","network":"mainnet","networkId":56,"nativeCurrency":{"name":"Binance Chain Native Token","symbol":"BNB","decimals":18,"logoURI":"https://static.debank.com/image/bsc_token/logo_url/bsc/8bfdeaa46fe9be8f5cd43a53b8d1eea1.png"},"faucets":[],"features":[],"explorers":[{"name":"bscscan","url":"https://bscscan.com","standard":"EIP3091"}],"infoURL":"https://www.binance.org"},{"name":"Binance Smart Chain Testnet","chainId":97,"fullName":"Binance","shortName":"bnbt","chain":"BSC","network":"chapel","networkId":97,"nativeCurrency":{"name":"Binance Chain Native Token","symbol":"tBNB","decimals":18},"faucets":["https://testnet.binance.org/faucet-smart"],"features":[],"explorers":[{"name":"bscscan-testnet","url":"https://testnet.bscscan.com","standard":"EIP3091"}],"infoURL":"https://testnet.binance.org/"},{"name":"Matic Mainnet","chainId":137,"fullName":"Polygon","shortName":"matic","chain":"Matic","network":"mainnet","networkId":137,"nativeCurrency":{"name":"Matic","symbol":"MATIC","decimals":18,"logoURI":"https://static.debank.com/image/matic_token/logo_url/matic/e5a8a2860ba5cf740a474dcab796dc63.png"},"faucets":[],"features":[],"explorers":[{"name":"matic","url":"https://polygonscan.com","standard":"EIP3091"}],"infoURL":"https://matic.network/"},{"name":"Matic Testnet Mumbai","chainId":80001,"fullName":"Polygon","shortName":"maticmum","chain":"Matic","network":"testnet","networkId":80001,"nativeCurrency":{"name":"Matic","symbol":"tMATIC","decimals":18},"faucets":["https://faucet.matic.network/"],"features":[],"explorers":[{"name":"matic","url":"https://explorer-mumbai.maticvigil.com","standard":"EIP3091"}],"infoURL":"https://matic.network/"},{"name":"Arbitrum One","chainId":42161,"fullName":"Arbitrum","shortName":"arb","chain":"Arbitrum","network":"mainnet","networkId":42161,"nativeCurrency":{"name":"Arbitrum Ether","symbol":"ARETH","decimals":18,"logoURI":"https://static.debank.com/image/token/logo_url/eth/935ae4e4d1d12d59a99717a24f2540b5.png"},"faucets":[],"features":[],"explorers":[{"name":"arbitrum","url":"https://explorer.arbitrum.io","standard":"EIP3091"}],"infoURL":"https://arbitrum.io"},{"name":"Arbitrum Testnet Rinkeby","chainId":421611,"fullName":"Arbitrum","shortName":"arb-rinkeby","chain":"Arbitrum","network":"rinkeby","networkId":421611,"nativeCurrency":{"name":"Arbitrum Rinkeby Ether","symbol":"ARETH","decimals":18},"faucets":[],"features":[],"explorers":[{"name":"arbitrum-rinkeby","url":"https://rinkeby-explorer.arbitrum.io","standard":"EIP3091"}],"infoURL":"https://arbitrum.io"},{"name":"Expanse Network","chain":"EXP","network":"mainnet","rpc":["https://node.expanse.tech"],"faucets":[],"features":[],"nativeCurrency":{"name":"Expanse Network Ether","symbol":"EXP","decimals":18},"infoURL":"https://expanse.tech","shortName":"exp","chainId":2,"networkId":1,"slip44":40},{"name":"ThaiChain","chain":"TCH","network":"mainnet","rpc":["https://rpc.dome.cloud"],"faucets":[],"features":[],"nativeCurrency":{"name":"ThaiChain Ether","symbol":"TCH","decimals":18},"infoURL":"https://thaichain.io","shortName":"tch","chainId":7,"networkId":7},{"name":"Ubiq Network Mainnet","chain":"UBQ","network":"mainnet","rpc":["https://rpc.octano.dev","https://pyrus2.ubiqscan.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ubiq Ether","symbol":"UBQ","decimals":18},"infoURL":"https://ubiqsmart.com","shortName":"ubq","chainId":8,"networkId":88,"slip44":108},{"name":"Ubiq Network Testnet","chain":"UBQ","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Ubiq Testnet Ether","symbol":"TUBQ","decimals":18},"infoURL":"https://ethersocial.org","shortName":"tubq","chainId":9,"networkId":2},{"name":"Optimistic Ethereum","chain":"OPT","network":"mainnet","rpc":["https://mainnet.optimism.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"OETH","decimals":18},"infoURL":"https://optimism.io","shortName":"oeth","chainId":10,"networkId":10},{"name":"Metadium Mainnet","chain":"META","network":"mainnet","rpc":["https://api.metadium.com/prod"],"faucets":[],"features":[],"nativeCurrency":{"name":"Metadium Mainnet Ether","symbol":"META","decimals":18},"infoURL":"https://metadium.com","shortName":"meta","chainId":11,"networkId":11,"slip44":916},{"name":"Metadium Testnet","chain":"META","network":"testnet","rpc":["https://api.metadium.com/dev"],"faucets":[],"features":[],"nativeCurrency":{"name":"Metadium Testnet Ether","symbol":"KAL","decimals":18},"infoURL":"https://metadium.com","shortName":"kal","chainId":12,"networkId":12},{"name":"Diode Testnet Staging","chain":"DIODE","network":"testnet","rpc":["https://staging.diode.io:8443/","wss://staging.diode.io:8443/ws"],"faucets":[],"features":[],"nativeCurrency":{"name":"Staging Diodes","symbol":"sDIODE","decimals":18},"infoURL":"https://diode.io/staging","shortName":"dstg","chainId":13,"networkId":13},{"name":"Flare Mainnet","chain":"FLR","network":"flare","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Spark","symbol":"FLR","decimals":18},"infoURL":"https://flare.xyz","shortName":"flr","chainId":14,"networkId":14},{"name":"Diode Prenet","chain":"DIODE","network":"mainnet","rpc":["https://prenet.diode.io:8443/","wss://prenet.diode.io:8443/ws"],"faucets":[],"features":[],"nativeCurrency":{"name":"Diodes","symbol":"DIODE","decimals":18},"infoURL":"https://diode.io/prenet","shortName":"diode","chainId":15,"networkId":15},{"name":"Flare Testnet Coston","chain":"FLR","network":"coston","rpc":[],"faucets":["https://faucet.towolabs.com"],"features":[],"nativeCurrency":{"name":"Coston Spark","symbol":"CFLR","decimals":18},"infoURL":"https://github.com/flare-eng/coston","shortName":"cflr","chainId":16,"networkId":16},{"name":"ThaiChain 2.0 ThaiFi","chain":"TCH","network":"thaifi","rpc":["https://rpc.thaifi.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Thaifi Ether","symbol":"TFI","decimals":18},"infoURL":"https://exp.thaifi.com","shortName":"tfi","chainId":17,"networkId":17},{"name":"ThunderCore Testnet","chain":"TST","network":"testnet","rpc":["https://testnet-rpc.thundercore.com"],"faucets":["https://faucet-testnet.thundercore.com"],"features":[],"nativeCurrency":{"name":"ThunderCore Testnet Ether","symbol":"TST","decimals":18},"infoURL":"https://thundercore.com","shortName":"TST","chainId":18,"networkId":18},{"name":"ELA-ETH-Sidechain Mainnet","chain":"ELA-ETH","network":"mainnet","rpc":["https://mainrpc.elaeth.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"ELA","decimals":18},"infoURL":"https://www.elastos.org/","shortName":"elaeth","chainId":20,"networkId":20},{"name":"ELA-ETH-Sidechain Testnet","chain":"ELA-ETH","network":"testnet","rpc":["https://rpc.elaeth.io"],"faucets":["https://faucet.elaeth.io/"],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"tELA","decimals":18},"infoURL":"https://elaeth.io/","shortName":"elaetht","chainId":21,"networkId":21},{"name":"ELA-DID-Sidechain Mainnet","chain":"ELA-ETH","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"ELA","decimals":18},"infoURL":"https://www.elastos.org/","shortName":"eladid","chainId":22,"networkId":22},{"name":"ELA-DID-Sidechain Testnet","chain":"ELA-ETH","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Elastos","symbol":"tELA","decimals":18},"infoURL":"https://elaeth.io/","shortName":"eladidt","chainId":23,"networkId":23},{"name":"RSK Mainnet","chain":"RSK","network":"mainnet","rpc":["https://public-node.rsk.co","https://mycrypto.rsk.co"],"faucets":[],"features":[],"nativeCurrency":{"name":"RSK Mainnet Ether","symbol":"RBTC","decimals":18},"infoURL":"https://rsk.co","shortName":"rsk","chainId":30,"networkId":30,"slip44":137},{"name":"RSK Testnet","chain":"RSK","network":"testnet","rpc":["https://public-node.testnet.rsk.co","https://mycrypto.testnet.rsk.co"],"faucets":["https://faucet.testnet.rsk.co"],"features":[],"nativeCurrency":{"name":"RSK Testnet Ether","symbol":"tRBTC","decimals":18},"infoURL":"https://rsk.co","shortName":"trsk","chainId":31,"networkId":31},{"name":"GoodData Testnet","chain":"GooD","network":"testnet","rpc":["https://test2.goodata.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"GoodData Testnet Ether","symbol":"GooD","decimals":18},"infoURL":"https://www.goodata.org","shortName":"GooDT","chainId":32,"networkId":32},{"name":"GoodData Mainnet","chain":"GooD","network":"mainnet","rpc":["https://rpc.goodata.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"GoodData Mainnet Ether","symbol":"GooD","decimals":18},"infoURL":"https://www.goodata.org","shortName":"GooD","chainId":33,"networkId":33},{"name":"TBWG Chain","chain":"TBWG","network":"mainnet","rpc":["https://rpc.tbwg.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"TBWG Ether","symbol":"TBG","decimals":18},"infoURL":"https://tbwg.io","shortName":"tbwg","chainId":35,"networkId":35},{"name":"Valorbit","chain":"VAL","network":"mainnet","rpc":["https://rpc.valorbit.com/v2"],"faucets":[],"features":[],"nativeCurrency":{"name":"Valorbit","symbol":"VAL","decimals":18},"infoURL":"https://valorbit.com","shortName":"val","chainId":38,"networkId":38,"slip44":538},{"name":"Telos EVM Mainnet","chain":"TLOS","network":"mainnet","rpc":["https://mainnet.telos.net/evm"],"faucets":[],"features":[],"nativeCurrency":{"name":"Telos","symbol":"TLOS","decimals":18},"infoURL":"https://telos.net","shortName":"Telos EVM","chainId":40,"networkId":40},{"name":"Telos EVM Testnet","chain":"TLOS","network":"testnet","rpc":["https://testnet.telos.net/evm"],"faucets":["https://app.telos.net/testnet/developers"],"features":[],"nativeCurrency":{"name":"Telos","symbol":"TLOS","decimals":18},"infoURL":"https://telos.net","shortName":"Telos EVM Testnet","chainId":41,"networkId":41},{"name":"Darwinia Pangolin Testnet","chain":"pangolin","network":"free testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Pangolin RING","symbol":"PRING","decimals":9},"infoURL":"https://darwinia.network/","shortName":"darwinia","chainId":43,"networkId":43},{"name":"Darwinia Crab Network","chain":"crab","network":"Crab network","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Crab Token","symbol":"CRING","decimals":9},"infoURL":"https://crab.network/","shortName":"crab","chainId":44,"networkId":44},{"name":"XinFin Network Mainnet","chain":"XDC","network":"mainnet","rpc":["https://rpc.xinfin.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"XinFin","symbol":"XDC","decimals":18},"infoURL":"https://xinfin.org","shortName":"xdc","chainId":50,"networkId":50},{"name":"XinFin Apothem Testnet","chain":"TXDC","network":"testnet","rpc":["https://rpc.apothem.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"XinFinTest","symbol":"TXDC","decimals":18},"infoURL":"https://xinfin.org","shortName":"TXDC","chainId":51,"networkId":51},{"name":"CoinEx Smart Chain Mainnet","chain":"CSC","network":"mainnet","rpc":["https://rpc-mainnet.coinex.net"],"faucets":[],"features":[],"nativeCurrency":{"name":"CoinEx Chain Native Token","symbol":"cet","decimals":18},"infoURL":"http://www.coinex.org/","shortName":"cet","chainId":52,"networkId":52},{"name":"CoinEx Smart Chain Testnet","chain":"CSC","network":"testnet","rpc":["https://rpc-testnet.coinex.net"],"faucets":[],"features":[],"nativeCurrency":{"name":"CoinEx Chain Test Native Token","symbol":"cett","decimals":18},"infoURL":"http://www.coinex.org/","shortName":"tcet","chainId":53,"networkId":53},{"name":"Ontology Mainnet","chain":"Ontology","network":"mainnet","rpc":["https://dappnode1.ont.io:20339","https://dappnode2.ont.io:20339","https://dappnode3.ont.io:20339","https://dappnode4.ont.io:20339"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONG","symbol":"ONG","decimals":9},"infoURL":"https://ont.io/","shortName":"Ontology Mainnet","chainId":58,"networkId":58,"explorers":[{"name":"explorer","url":"https://explorer.ont.io/","standard":"EIP3091"}]},{"name":"EOS Mainnet","chain":"EOS","network":"mainnet","rpc":["https://api.eosargentina.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"EOS","symbol":"EOS","decimals":18},"infoURL":"https://eoscommunity.org/","shortName":"EOS Mainnet","chainId":59,"networkId":59,"explorers":[{"name":"bloks","url":"https://api.eosargentina.io","standard":"EIP3091"}]},{"name":"GoChain","chain":"GO","network":"mainnet","rpc":["https://rpc.gochain.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"GoChain Ether","symbol":"GO","decimals":18},"infoURL":"https://gochain.io","shortName":"go","chainId":60,"networkId":60,"slip44":6060},{"name":"Ethereum Classic Mainnet","chain":"ETC","network":"mainnet","rpc":["https://ethereumclassic.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ethereum Classic Ether","symbol":"ETC","decimals":18},"infoURL":"https://ethereumclassic.org","shortName":"etc","chainId":61,"networkId":1,"slip44":61},{"name":"Ethereum Classic Testnet Morden","chain":"ETC","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Ethereum Classic Testnet Ether","symbol":"TETC","decimals":18},"infoURL":"https://ethereumclassic.org","shortName":"tetc","chainId":62,"networkId":2},{"name":"Ethereum Classic Testnet Mordor","chain":"ETC","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Mordor Classic Testnet Ether","symbol":"METC","decimals":18},"infoURL":"https://github.com/eth-classic/mordor/","shortName":"metc","chainId":63,"networkId":7},{"name":"Ellaism","chain":"ELLA","network":"mainnet","rpc":["https://jsonrpc.ellaism.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ellaism Ether","symbol":"ELLA","decimals":18},"infoURL":"https://ellaism.org","shortName":"ella","chainId":64,"networkId":64,"slip44":163},{"name":"OKExChain Testnet","chain":"okexchain","network":"testnet","rpc":["https://exchaintestrpc.okex.org"],"faucets":["https://www.okex.com/drawdex"],"features":[],"nativeCurrency":{"name":"OKExChain Global Utility Token in testnet","symbol":"OKT","decimals":18},"infoURL":"https://www.okex.com/okexchain","shortName":"tokt","chainId":65,"networkId":65,"explorers":[{"name":"OKLink","url":"https://www.oklink.com/okexchain-test","standard":"EIP3091"}]},{"name":"OKExChain Mainnet","chain":"okexchain","network":"mainnet","rpc":["https://exchainrpc.okex.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"OKExChain Global Utility Token","symbol":"OKT","decimals":18},"infoURL":"https://www.okex.com/okexchain","shortName":"okt","chainId":66,"networkId":66,"explorers":[{"name":"OKLink","url":"https://www.oklink.com/okexchain","standard":"EIP3091"}]},{"name":"DBChain Testnet","chain":"DBM","network":"testnet","rpc":["http://test-rpc.dbmbp.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"DBChain Testnet","symbol":"DBM","decimals":18},"infoURL":"http://test.dbmbp.com","shortName":"dbm","chainId":67,"networkId":67},{"name":"SoterOne Mainnet","chain":"SOTER","network":"mainnet","rpc":["https://rpc.soter.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"SoterOne Mainnet Ether","symbol":"SOTER","decimals":18},"infoURL":"https://www.soterone.com","shortName":"SO1","chainId":68,"networkId":68},{"name":"Optimistic Ethereum Testnet Kovan","chain":"OPT","network":"kovan","rpc":["https://kovan.optimism.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Kovan Ether","symbol":"KOR","decimals":18},"infoURL":"https://optimism.io","shortName":"okov","chainId":69,"networkId":69},{"name":"Mix","chain":"MIX","network":"mainnet","rpc":["https://rpc2.mix-blockchain.org:8647"],"faucets":[],"features":[],"nativeCurrency":{"name":"Mix Ether","symbol":"MIX","decimals":18},"infoURL":"https://mix-blockchain.org","shortName":"mix","chainId":76,"networkId":76,"slip44":76},{"name":"POA Network Sokol","chain":"POA","network":"sokol","rpc":["https://sokol.poa.network","wss://sokol.poa.network/wss","ws://sokol.poa.network:8546"],"faucets":["https://faucet-sokol.herokuapp.com"],"features":[],"nativeCurrency":{"name":"POA Sokol Ether","symbol":"POA","decimals":18},"infoURL":"https://poa.network","shortName":"poa","chainId":77,"networkId":77},{"name":"PrimusChain mainnet","chain":"PC","network":"mainnet","rpc":["https://ethnode.primusmoney.com/mainnet"],"faucets":[],"features":[],"nativeCurrency":{"name":"Primus Ether","symbol":"PETH","decimals":18},"infoURL":"https://primusmoney.com","shortName":"primuschain","chainId":78,"networkId":78},{"name":"GeneChain","chain":"GeneChain","network":"mainnet","rpc":["https://rpc.genechain.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"RNA","symbol":"RNA","decimals":18},"infoURL":"https://scan.genechain.io/","shortName":"GeneChain","chainId":80,"networkId":80,"explorers":[{"name":"GeneChain Scan","url":"https://scan.genechain.io","standard":"EIP3091"}]},{"name":"Meter Mainnet","chain":"METER","network":"mainnet","rpc":["https://rpc.meter.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Meter","symbol":"MTR","decimals":18},"infoURL":"https://www.meter.io","shortName":"Meter","chainId":82,"networkId":82},{"name":"GateChain Testnet","chainId":85,"shortName":"gttest","chain":"GTTEST","network":"testnet","networkId":85,"nativeCurrency":{"name":"GateToken","symbol":"GT","decimals":18},"rpc":["https://testnet.gatenode.cc"],"faucets":["https://www.gatescan.org/testnet/faucet"],"features":[],"explorers":[{"name":"GateScan","url":"https://www.gatescan.org/testnet","standard":"EIP3091"}],"infoURL":"https://www.gatechain.io"},{"name":"GateChain Mainnet","chainId":86,"shortName":"gt","chain":"GT","network":"mainnet","networkId":86,"nativeCurrency":{"name":"GateToken","symbol":"GT","decimals":18},"rpc":["https://evm.gatenode.cc"],"faucets":["https://www.gatescan.org/faucet"],"features":[],"explorers":[{"name":"GateScan","url":"https://www.gatescan.org","standard":"EIP3091"}],"infoURL":"https://www.gatechain.io"},{"name":"TomoChain","chain":"TOMO","network":"mainnet","rpc":["https://rpc.tomochain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"TomoChain Ether","symbol":"TOMO","decimals":18},"infoURL":"https://tomocoin.io","shortName":"tomo","chainId":88,"networkId":88},{"name":"CryptoKylin Testnet","chain":"EOS","network":"testnet","rpc":["https://kylin.eosargentina.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"EOS","symbol":"EOS","decimals":18},"infoURL":"https://www.cryptokylin.io/","shortName":"Kylin Testnet","chainId":95,"networkId":95,"explorers":[{"name":"eosq","url":"https://kylin.eosargentina.io","standard":"EIP3091"}]},{"name":"POA Network Core","chain":"POA","network":"core","rpc":["https://core.poanetwork.dev","http://core.poanetwork.dev:8545","https://core.poa.network","ws://core.poanetwork.dev:8546"],"faucets":[],"features":[],"nativeCurrency":{"name":"POA Network Core Ether","symbol":"SKL","decimals":18},"infoURL":"https://poa.network","shortName":"skl","chainId":99,"networkId":99},{"name":"xDAI Chain","chain":"XDAI","network":"mainnet","rpc":["https://rpc.xdaichain.com","https://xdai.poanetwork.dev","wss://rpc.xdaichain.com/wss","wss://xdai.poanetwork.dev/wss","http://xdai.poanetwork.dev","https://dai.poa.network","ws://xdai.poanetwork.dev:8546"],"faucets":[],"features":[],"nativeCurrency":{"name":"xDAI","symbol":"xDAI","decimals":18},"infoURL":"https://forum.poa.network/c/xdai-chain","shortName":"xdai","chainId":100,"networkId":100,"slip44":700},{"name":"EtherInc","chain":"ETI","network":"mainnet","rpc":["https://api.einc.io/jsonrpc/mainnet"],"faucets":[],"features":[],"nativeCurrency":{"name":"EtherInc Ether","symbol":"ETI","decimals":18},"infoURL":"https://einc.io","shortName":"eti","chainId":101,"networkId":1,"slip44":464},{"name":"Web3Games Testnet","chain":"Web3Games","network":"testnet","rpc":["https://substrate.org.cn"],"faucets":[],"features":[],"nativeCurrency":{"name":"Web3Games","symbol":"W3G","decimals":18},"infoURL":"https://web3games.org/","shortName":"w3g","chainId":102,"networkId":102},{"name":"ThunderCore Mainnet","chain":"TT","network":"mainnet","rpc":["https://mainnet-rpc.thundercore.com"],"faucets":["https://faucet.thundercore.com"],"features":[],"nativeCurrency":{"name":"ThunderCore Mainnet Ether","symbol":"TT","decimals":18},"infoURL":"https://thundercore.com","shortName":"TT","chainId":108,"networkId":108},{"name":"Proton Testnet","chain":"XPR","network":"testnet","rpc":["https://protontestnet.greymass.com/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Proton","symbol":"XPR","decimals":4},"infoURL":"https://protonchain.com","shortName":"xpr","chainId":110,"networkId":110},{"name":"EtherLite Chain","chain":"ETL","network":"mainnet","rpc":["https://rpc.etherlite.org"],"faucets":["https://etherlite.org/faucets"],"features":[],"nativeCurrency":{"name":"EtherLite","symbol":"ETL","decimals":18},"infoURL":"https://etherlite.org","shortName":"ETL","chainId":111,"networkId":111,"icon":"etherlite"},{"name":"Fuse Mainnet","chain":"FUSE","network":"mainnet","rpc":["https://rpc.fuse.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Fuse","symbol":"FUSE","decimals":18},"infoURL":"https://fuse.io/","shortName":"fuse","chainId":122,"networkId":122},{"name":"Decentralized Web Mainnet","shortName":"dwu","chain":"DWU","network":"mainnet","chainId":124,"networkId":124,"rpc":["https://decentralized-web.tech/dw_rpc.php"],"faucets":[],"features":[],"infoURL":"https://decentralized-web.tech/dw_chain.php","nativeCurrency":{"name":"Decentralized Web Utility","symbol":"DWU","decimals":18}},{"name":"Factory 127 Mainnet","chain":"FETH","network":"factory127 mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Factory 127 Token","symbol":"FETH","decimals":18},"infoURL":"https://www.factory127.com","shortName":"feth","chainId":127,"networkId":127,"slip44":127},{"name":"Huobi ECO Chain Mainnet","chain":"Heco","network":"mainnet","rpc":["https://http-mainnet.hecochain.com","wss://ws-mainnet.hecochain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Huobi ECO Chain Native Token","symbol":"HT","decimals":18},"infoURL":"https://www.hecochain.com","shortName":"heco","chainId":128,"networkId":128,"explorers":[{"name":"hecoinfo","url":"https://hecoinfo.com","standard":"EIP3091"}]},{"name":"Lightstreams Testnet","chain":"PHT","network":"sirius","rpc":["https://node.sirius.lightstreams.io"],"faucets":["https://discuss.lightstreams.network/t/request-test-tokens"],"features":[],"nativeCurrency":{"name":"Lightstreams PHT","symbol":"PHT","decimals":18},"infoURL":"https://explorer.sirius.lightstreams.io","shortName":"tpht","chainId":162,"networkId":162},{"name":"Lightstreams Mainnet","chain":"PHT","network":"mainnet","rpc":["https://node.mainnet.lightstreams.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Lightstreams PHT","symbol":"PHT","decimals":18},"infoURL":"https://explorer.lightstreams.io","shortName":"pht","chainId":163,"networkId":163},{"name":"HOO Smart Chain Testnet","chain":"HOO","network":"testnet","rpc":["https://http-testnet.hoosmartchain.com"],"faucets":["https://faucet-testnet.hscscan.com/"],"features":[],"nativeCurrency":{"name":"HOO","symbol":"HOO","decimals":18},"infoURL":"https://www.hoosmartchain.com","shortName":"hoosmartchain","chainId":170,"networkId":170},{"name":"Freight Trust Network","chain":"EDI","network":"freight & trade network","rpc":["http://13.57.207.168:3435","https://app.freighttrust.net/ftn/${API_KEY}"],"faucets":["http://faucet.freight.sh"],"features":[],"nativeCurrency":{"name":"Freight Trust Native","symbol":"0xF","decimals":18},"infoURL":"https://freighttrust.com","shortName":"EDI","chainId":211,"networkId":0},{"name":"Energy Web Chain","chain":"Energy Web Chain","network":"mainnet","rpc":["https://rpc.energyweb.org","wss://rpc.energyweb.org/ws"],"faucets":["https://faucet.carbonswap.exchange"],"features":[],"nativeCurrency":{"name":"Energy Web Token","symbol":"EWT","decimals":18},"infoURL":"https://energyweb.org","shortName":"ewt","chainId":246,"networkId":246,"slip44":246},{"name":"Fantom Opera","chain":"FTM","network":"mainnet","rpc":["https://rpcapi.fantom.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Fantom","symbol":"FTM","decimals":18},"infoURL":"https://fantom.foundation","shortName":"ftm","chainId":250,"networkId":250,"icon":"fantom","explorers":[{"name":"ftmscan","url":"https://ftmscan.com","icon":"ftmscan","standard":"EIP3091"}]},{"name":"Huobi ECO Chain Testnet","chain":"Heco","network":"testnet","rpc":["https://http-testnet.hecochain.com","wss://ws-testnet.hecochain.com"],"faucets":["https://scan-testnet.hecochain.com/faucet"],"features":[],"nativeCurrency":{"name":"Huobi ECO Chain Test Native Token","symbol":"htt","decimals":18},"infoURL":"https://testnet.hecoinfo.com","shortName":"hecot","chainId":256,"networkId":256},{"name":"High Performance Blockchain","chain":"HPB","network":"mainnet","rpc":["https://hpb.app"],"faucets":[],"features":[],"nativeCurrency":{"name":"High Performance Blockchain Ether","symbol":"HPB","decimals":18},"infoURL":"https://hpbscan.org/","shortName":"hpb","chainId":269,"networkId":100,"slip44":269},{"name":"KuCoin Community Chain Mainnet","chain":"KCC","network":"mainnet","rpc":["https://rpc-mainnet.kcc.network","wss://rpc-ws-mainnet.kcc.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"KuCoin Token","symbol":"KCS","decimals":18},"infoURL":"https://kcc.io","shortName":"kcs","chainId":321,"networkId":321,"explorers":[{"name":"KCC Explorer","url":"https://explorer.kcc.io/en","standard":"EIP3091"}]},{"name":"KuCoin Community Chain Testnet","chain":"KCC","network":"testnet","rpc":["https://rpc-testnet.kcc.network"],"faucets":["https://faucet-testnet.kcc.network"],"features":[],"nativeCurrency":{"name":"KuCoin Testnet Token","symbol":"tKCS","decimals":18},"infoURL":"https://scan-testnet.kcc.network","shortName":"kcst","chainId":322,"networkId":322,"explorers":[{"name":"kcc-scan","url":"https://scan-testnet.kcc.network","standard":"EIP3091"}]},{"name":"Lisinski","chain":"CRO","network":"mainnet","rpc":["https://rpc-bitfalls1.lisinski.online"],"faucets":["https://pipa.lisinski.online"],"features":[],"nativeCurrency":{"name":"Lisinski Ether","symbol":"LISINSKI","decimals":18},"infoURL":"https://lisinski.online","shortName":"lisinski","chainId":385,"networkId":385},{"name":"Optimistic Ethereum Testnet Goerli","chain":"OPT","network":"goerli","rpc":["https://goerli.optimism.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Görli Ether","symbol":"GOR","decimals":18},"infoURL":"https://optimism.io","shortName":"ogor","chainId":420,"networkId":420},{"name":"Rupaya","chain":"RUPX","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Rupaya","symbol":"RUPX","decimals":18},"infoURL":"https://www.rupx.io","shortName":"rupx","chainId":499,"networkId":499,"slip44":499},{"name":"Tao Network","chain":"TAO","network":"core","rpc":["https://rpc.testnet.tao.network","http://rpc.testnet.tao.network:8545","https://rpc.tao.network","wss://rpc.tao.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Tao","symbol":"TAO","decimals":18},"infoURL":"https://tao.network","shortName":"tao","chainId":558,"networkId":558},{"name":"Acala Mandala Testnet","chain":"mACA","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Acala Mandala Token","symbol":"mACA","decimals":18},"infoURL":"https://acala.network","shortName":"maca","chainId":595,"networkId":595},{"name":"Karura Network","chain":"KAR","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Karura Token","symbol":"KAR","decimals":18},"infoURL":"https://karura.network","shortName":"kar","chainId":686,"networkId":686,"slip44":686},{"name":"Factory 127 Testnet","chain":"FETH","network":"factory127 testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Factory 127 Token","symbol":"FETH","decimals":18},"infoURL":"https://www.factory127.com","shortName":"tfeth","chainId":721,"networkId":721,"slip44":721},{"name":"Ethermint Testnet","chain":"ETHERMINT","network":"testnet","rpc":["http://54.210.246.165:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Photon","symbol":"Photon","decimals":18},"infoURL":"https://docs.ethermint.zone","shortName":"emint","chainId":777,"networkId":777},{"name":"Acala Network","chain":"ACA","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Acala Token","symbol":"ACA","decimals":18},"infoURL":"https://acala.network","shortName":"aca","chainId":787,"networkId":787,"slip44":787},{"name":"Haic","chain":"Haic","network":"mainnet","rpc":["https://orig.haichain.io/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Haicoin","symbol":"HAIC","decimals":18},"infoURL":"https://www.haichain.io/","shortName":"haic","chainId":803,"networkId":803},{"name":"Callisto Mainnet","chain":"CLO","network":"mainnet","rpc":["https://clo-geth.0xinfra.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Callisto Mainnet Ether","symbol":"CLO","decimals":18},"infoURL":"https://callisto.network","shortName":"clo","chainId":820,"networkId":1,"slip44":820},{"name":"Callisto Testnet","chain":"CLO","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Callisto Testnet Ether","symbol":"TCLO","decimals":18},"infoURL":"https://callisto.network","shortName":"tclo","chainId":821,"networkId":2},{"name":"Wanchain","chain":"WAN","network":"mainnet","rpc":["https://gwan-ssl.wandevs.org:56891/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Wancoin","symbol":"WAN","decimals":18},"infoURL":"https://www.wanscan.org","shortName":"wan","chainId":888,"networkId":888},{"name":"Nepal Blockchain Network","chain":"YETI","network":"mainnet","rpc":["https://api.nepalblockchain.dev","https://api.nepalblockchain.network"],"faucets":["https://faucet.nepalblockchain.network"],"features":[],"nativeCurrency":{"name":"Nepal Blockchain Network Ether","symbol":"YETI","decimals":18},"infoURL":"https://nepalblockchain.network","shortName":"yeti","chainId":977,"networkId":977},{"name":"Wanchain Testnet","chain":"WAN","network":"testnet","rpc":["https://gwan-ssl.wandevs.org:46891/"],"faucets":[],"features":[],"nativeCurrency":{"name":"Wancoin","symbol":"WAN","decimals":18},"infoURL":"https://testnet.wanscan.org","shortName":"twan","chainId":999,"networkId":999},{"name":"Klaytn Testnet Baobab","chain":"KLAY","network":"baobab","rpc":["https://node-api.klaytnapi.com/v1/klaytn"],"faucets":["https://baobab.wallet.klaytn.com/access?next=faucet"],"features":[],"nativeCurrency":{"name":"KLAY","symbol":"KLAY","decimals":18},"infoURL":"https://www.klaytn.com/","shortName":"Baobab","chainId":1001,"networkId":1001},{"name":"Newton Testnet","chain":"NEW","network":"testnet","rpc":["https://rpc1.newchain.newtonproject.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Newton","symbol":"NEW","decimals":18},"infoURL":"https://www.newtonproject.org/","shortName":"tnew","chainId":1007,"networkId":1007},{"name":"Evrice Network","chain":"EVC","network":"Evrice","rpc":["https://meta.evrice.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Evrice","symbol":"EVC","decimals":18},"infoURL":"https://evrice.com","shortName":"EVC","chainId":1010,"networkId":1010},{"name":"Newton","chain":"NEW","network":"mainnet","rpc":["https://global.rpc.mainnet.newtonproject.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Newton","symbol":"NEW","decimals":18},"infoURL":"https://www.newtonproject.org/","shortName":"new","chainId":1012,"networkId":1012},{"name":"Sakura","chain":"Sakura","network":"sakura","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Sakura","symbol":"SKU","decimals":18},"infoURL":"https://clover.finance/sakura","shortName":"sku","chainId":1022,"networkId":1022},{"name":"Clover Testnet","chain":"Clover","network":"clover testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Clover","symbol":"CLV","decimals":18},"infoURL":"https://clover.finance","shortName":"tclv","chainId":1023,"networkId":1023},{"name":"Clover Mainnet","chain":"Clover","network":"clover mainnet","rpc":["https://rpc-ivy.clover.finance","https://rpc-ivy-2.clover.finance","https://rpc-ivy-3.clover.finance"],"faucets":[],"features":[],"nativeCurrency":{"name":"Clover","symbol":"CLV","decimals":18},"infoURL":"https://clover.finance","shortName":"clv","chainId":1024,"networkId":1024},{"name":"MathChain","chain":"MATH","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"MathChain","symbol":"MATH","decimals":18},"infoURL":"https://mathchain.org","shortName":"MATH","chainId":1139,"networkId":1139},{"name":"MathChain Testnet","chain":"MATH","network":"testnet","rpc":["https://galois-hk.maiziqianbao.net/rpc"],"faucets":["https://scan.boka.network/#/Galois/faucet"],"features":[],"nativeCurrency":{"name":"MathChain","symbol":"MATH","decimals":18},"infoURL":"https://mathchain.org","shortName":"tMATH","chainId":1140,"networkId":1140},{"name":"Moonbeam Polkadot","chain":"MOON","network":"moonbeam","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Glimmer","symbol":"GLMR","decimals":18},"infoURL":"https://moonbeam.network/networks/moonbeam/","shortName":"mbeam","chainId":1284,"networkId":1284},{"name":"Moonriver Kusama","chain":"MOON","network":"moonriver","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"River","symbol":"RIVER","decimals":18},"infoURL":"https://moonbeam.network/networks/moonriver/","shortName":"mriver","chainId":1285,"networkId":1285},{"name":"Moonrock Rococo","chain":"MOON","network":"moonrock","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Rocs","symbol":"ROC","decimals":18},"infoURL":"","shortName":"mrock","chainId":1286,"networkId":1286},{"name":"Moonbeam Testnet Moonbase Alpha","chain":"MOON","network":"moonbase","rpc":["https://rpc.testnet.moonbeam.network","wss://wss.testnet.moonbeam.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Dev","symbol":"DEV","decimals":18},"infoURL":"https://docs.moonbeam.network/networks/testnet/","shortName":"mbase","chainId":1287,"networkId":1287},{"name":"Catecoin Chain Mainnet","chain":"Catechain","network":"mainnet","rpc":["https://send.catechain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Catecoin","symbol":"CATE","decimals":18},"infoURL":"https://catechain.com","shortName":"cate","chainId":1618,"networkId":1618},{"name":"Atheios","chain":"ATH","network":"mainnet","rpc":["https://wallet.atheios.com:8797"],"faucets":[],"features":[],"nativeCurrency":{"name":"Atheios Ether","symbol":"ATH","decimals":18},"infoURL":"https://atheios.com","shortName":"ath","chainId":1620,"networkId":11235813,"slip44":1620},{"name":"Teslafunds","chain":"TSF","network":"mainnet","rpc":["https://tsfapi.europool.me"],"faucets":[],"features":[],"nativeCurrency":{"name":"Teslafunds Ether","symbol":"TSF","decimals":18},"infoURL":"https://teslafunds.io","shortName":"tsf","chainId":1856,"networkId":1},{"name":"EtherGem","chain":"EGEM","network":"mainnet","rpc":["https://jsonrpc.egem.io/custom"],"faucets":[],"features":[],"nativeCurrency":{"name":"EtherGem Ether","symbol":"EGEM","decimals":18},"infoURL":"https://egem.io","shortName":"egem","chainId":1987,"networkId":1987,"slip44":1987},{"name":"420coin","chain":"420","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"Fourtwenty","symbol":"420","decimals":18},"infoURL":"https://420integrated.com","shortName":"420","chainId":2020,"networkId":2020},{"name":"Edgeware Mainnet","chain":"EDG","network":"mainnet","rpc":["https://mainnet1.edgewa.re"],"faucets":[],"features":[],"nativeCurrency":{"name":"Edge","symbol":"EDG","decimals":18},"infoURL":"http://edgewa.re","shortName":"edg","chainId":2021,"networkId":2021},{"name":"Beresheet Testnet","chain":"EDG","network":"beresheet","rpc":["https://beresheet1.edgewa.re"],"faucets":[],"features":[],"nativeCurrency":{"name":"Testnet Edge","symbol":"tEDG","decimals":18},"infoURL":"http://edgewa.re","shortName":"edgt","chainId":2022,"networkId":2022},{"name":"Kortho Mainnet","chain":"Kortho Chain","network":"mainnet","rpc":["https://www.kortho-chain.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"KorthoChain","symbol":"KTO","decimals":11},"infoURL":"https://www.kortho.io/","shortName":"ktoc","chainId":2559,"networkId":2559},{"name":"IoTeX Network Mainnet","chain":"iotex.io","network":"mainnet","rpc":["https://babel-api.mainnet.iotex.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"IoTeX","symbol":"IOTX","decimals":18},"infoURL":"https://iotex.io","shortName":"iotex-mainnet","chainId":4689,"networkId":4689},{"name":"IoTeX Network Testnet","chain":"iotex.io","network":"testnet","rpc":["https://babel-api.testnet.iotex.io"],"faucets":["https://faucet.iotex.io/"],"features":[],"nativeCurrency":{"name":"IoTeX","symbol":"IOTX","decimals":18},"infoURL":"https://iotex.io","shortName":"iotex-testnet","chainId":4690,"networkId":4690},{"name":"EraSwap Mainnet","chain":"ESN","network":"mainnet","icon":"eraswap","rpc":["https://mainnet.eraswap.network","https://rpc-mumbai.mainnet.eraswap.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"EraSwap","symbol":"ES","decimals":18},"infoURL":"https://eraswap.info/","shortName":"es","chainId":5197,"networkId":5197},{"name":"Ontology Testnet","chain":"Ontology","network":"testnet","rpc":["https://polaris1.ont.io:20339","https://polaris2.ont.io:20339","https://polaris3.ont.io:20339","https://polaris4.ont.io:20339"],"faucets":["https://developer.ont.io/"],"features":[],"nativeCurrency":{"name":"ONG","symbol":"ONG","decimals":9},"infoURL":"https://ont.io/","shortName":"Ontology Testnet","chainId":5851,"networkId":5851,"explorers":[{"name":"explorer","url":"https://explorer.ont.io/testnet","standard":"EIP3091"}]},{"name":"Wegochain Rubidium Mainnet","chain":"RBD","network":"mainnet","rpc":["https://proxy.wegochain.io","http://wallet.wegochain.io:7764"],"faucets":[],"features":[],"nativeCurrency":{"name":"Rubid","symbol":"RBD","decimals":18},"infoURL":"http://wegochain.io","shortName":"rbd","chainId":5869,"networkId":5869},{"name":"MDGL Testnet","chain":"MDGL","network":"testnet","rpc":["https://testnet.mdgl.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"MDGL Token","symbol":"MDGLT","decimals":18},"infoURL":"https://mdgl.io","shortName":"mdgl","chainId":8029,"networkId":8029},{"name":"GeneChain Adenine Testnet","chain":"GeneChain","network":"adenine","rpc":["https://rpc-testnet.genechain.io"],"faucets":["https://faucet.genechain.io"],"features":[],"nativeCurrency":{"name":"Testnet RNA","symbol":"tRNA","decimals":18},"infoURL":"https://scan-testnet.genechain.io/","shortName":"GeneChainAdn","chainId":8080,"networkId":8080,"explorers":[{"name":"GeneChain Adenine Testnet Scan","url":"https://scan-testnet.genechain.io","standard":"EIP3091"}]},{"name":"Klaytn Mainnet Cypress","chain":"KLAY","network":"cypress","rpc":["https://node-api.klaytnapi.com/v1/klaytn"],"faucets":[],"features":[],"nativeCurrency":{"name":"KLAY","symbol":"KLAY","decimals":18},"infoURL":"https://www.klaytn.com/","shortName":"Cypress","chainId":8217,"networkId":8217,"slip44":8217},{"name":"KorthoTest","chain":"Kortho","network":"Test","rpc":["https://www.krotho-test.net"],"faucets":[],"features":[],"nativeCurrency":{"name":"Kortho Test","symbol":"KTO","decimals":11},"infoURL":"https://www.kortho.io/","shortName":"Kortho","chainId":8285,"networkId":8285},{"name":"TOOL Global Testnet","chain":"OLO","network":"testnet","rpc":["https://testnet-web3.wolot.io"],"faucets":["https://testnet-explorer.wolot.io"],"features":[],"nativeCurrency":{"name":"TOOL Global","symbol":"OLO","decimals":18},"infoURL":"https://testnet-explorer.wolot.io","shortName":"olo","chainId":8724,"networkId":8724,"slip44":479},{"name":"bloxberg","chain":"bloxberg","network":"mainnet","rpc":["https://core.bloxberg.org"],"faucets":["https://faucet.bloxberg.org/"],"features":[],"nativeCurrency":{"name":"BERG","symbol":"U+25B3","decimals":18},"infoURL":"https://bloxberg.org","shortName":"berg","chainId":8995,"networkId":8995},{"name":"Smart Bitcoin Cash","chain":"smartBCH","network":"mainnet","rpc":["https://rpc-mainnet.smartbch.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Bitcoin Cash","symbol":"BCH","decimals":18},"infoURL":"http://smartbch.org/","shortName":"smartbch","chainId":10000,"networkId":10000},{"name":"Smart Bitcoin Cash Testnet","chain":"smartBCHTest","network":"testnet","rpc":["https://rpc-testnet.smartbch.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Bitcoin Cash Test Token","symbol":"BCHT","decimals":18},"infoURL":"http://smartbch.org/","shortName":"smartbchtest","chainId":10001,"networkId":10001},{"name":"Blockchain Genesis Mainnet","chain":"GEN","network":"mainnet","rpc":["https://eu.mainnet.xixoio.com","https://us.mainnet.xixoio.com","https://asia.mainnet.xixoio.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"GEN","symbol":"GEN","decimals":18},"infoURL":"https://www.xixoio.com/","shortName":"GEN","chainId":10101,"networkId":10101},{"name":"Webchain","chain":"WEB","network":"mainnet","rpc":["https://node1.webchain.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Webchain Ether","symbol":"WEB","decimals":18},"infoURL":"https://webchain.network","shortName":"web","chainId":24484,"networkId":37129},{"name":"MintMe.com Coin","chain":"MINTME","network":"mainnet","rpc":["https://node1.mintme.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"MintMe.com Coin","symbol":"MINTME","decimals":18},"infoURL":"https://www.mintme.com","shortName":"mintme","chainId":24734,"networkId":37480},{"name":"Ethersocial Network","chain":"ESN","network":"mainnet","rpc":["https://api.esn.gonspool.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ethersocial Network Ether","symbol":"ESN","decimals":18},"infoURL":"https://ethersocial.org","shortName":"esn","chainId":31102,"networkId":1,"slip44":31102},{"name":"Fusion Mainnet","chain":"FSN","network":"mainnet","rpc":["https://mainnet.anyswap.exchange","https://fsn.dev/api"],"faucets":[],"features":[],"nativeCurrency":{"name":"Fusion","symbol":"FSN","decimals":18},"infoURL":"https://www.fusion.org/","shortName":"fsn","chainId":32659,"networkId":32659},{"name":"Energi Mainnet","chain":"NRG","network":"mainnet","rpc":["https://nodeapi.gen3.energi.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Energi","symbol":"NRG","decimals":18},"infoURL":"https://www.energi.world/","shortName":"nrg","chainId":39797,"networkId":39797,"slip44":39797},{"name":"pegglecoin","chain":"42069","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"pegglecoin","symbol":"peggle","decimals":18},"infoURL":"https://teampeggle.com","shortName":"PC","chainId":42069,"networkId":42069},{"name":"Celo Mainnet","chainId":42220,"shortName":"CELO","chain":"CELO","network":"Mainnet","networkId":42220,"nativeCurrency":{"name":"CELO","symbol":"CELO","decimals":18},"rpc":["https://forno.celo.org","wss://forno.celo.org/ws"],"faucets":[],"features":[],"infoURL":"https://docs.celo.org/"},{"name":"Athereum","chain":"ATH","network":"athereum","rpc":["https://ava.network:21015/ext/evm/rpc"],"faucets":["http://athfaucet.ava.network//?address=${ADDRESS}"],"features":[],"nativeCurrency":{"name":"Athereum Ether","symbol":"ATH","decimals":18},"infoURL":"https://athereum.ava.network","shortName":"avaeth","chainId":43110,"networkId":43110},{"name":"Avalanche Fuji Testnet","chain":"AVAX","network":"testnet","rpc":["https://api.avax-test.network/ext/bc/C/rpc"],"faucets":["https://faucet.avax-test.network/"],"features":[],"nativeCurrency":{"name":"Avalanche","symbol":"AVAX","decimals":18},"infoURL":"https://cchain.explorer.avax-test.network","shortName":"Fuji","chainId":43113,"networkId":1},{"name":"Avalanche Mainnet","chain":"AVAX","network":"mainnet","rpc":["https://api.avax.network/ext/bc/C/rpc"],"faucets":[],"features":[],"nativeCurrency":{"name":"Avalanche","symbol":"AVAX","decimals":18},"infoURL":"https://cchain.explorer.avax.network/","shortName":"Avalanche","chainId":43114,"networkId":1},{"name":"Celo Alfajores Testnet","chainId":44787,"shortName":"ALFA","chain":"CELO","network":"Alfajores","networkId":44787,"nativeCurrency":{"name":"CELO","symbol":"CELO","decimals":18},"rpc":["https://alfajores-forno.celo-testnet.org","wss://alfajores-forno.celo-testnet.org/ws"],"faucets":["https://celo.org/developers/faucet","https://cauldron.pretoriaresearchlab.io/alfajores-faucet"],"features":[],"infoURL":"https://docs.celo.org/"},{"name":"Energi Testnet","chain":"NRG","network":"testnet","rpc":["https://nodeapi.test3.energi.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"Energi","symbol":"tNRG","decimals":18},"infoURL":"https://www.energi.world/","shortName":"tnrg","chainId":49797,"networkId":49797,"slip44":49797},{"name":"Celo Baklava Testnet","chainId":62320,"shortName":"BKLV","chain":"CELO","network":"Baklava","networkId":62320,"nativeCurrency":{"name":"CELO","symbol":"CELO","decimals":18},"rpc":["https://baklava-forno.celo-testnet.org"],"faucets":["https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform","https://cauldron.pretoriaresearchlab.io/baklava-faucet"],"features":[],"infoURL":"https://docs.celo.org/"},{"name":"Energy Web Volta Testnet","chain":"Volta","network":"testnet","rpc":["https://volta-rpc.energyweb.org","wss://volta-rpc.energyweb.org/ws"],"faucets":["https://voltafaucet.energyweb.org"],"features":[],"nativeCurrency":{"name":"Volta Token","symbol":"VT","decimals":18},"infoURL":"https://energyweb.org","shortName":"vt","chainId":73799,"networkId":73799},{"name":"Firenze test network","chain":"FIR","network":"testnet","rpc":["https://ethnode.primusmoney.com/firenze"],"faucets":[],"features":[],"nativeCurrency":{"name":"Firenze Ether","symbol":"FIN","decimals":18},"infoURL":"https://primusmoney.com","shortName":"firenze","chainId":78110,"networkId":78110},{"name":"QuarkChain Mainnet Root","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:38391/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-r","chainId":100000,"networkId":100000},{"name":"QuarkChain Mainnet Shard 0","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39000/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s0","chainId":100001,"networkId":100001,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 1","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39001/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s1","chainId":100002,"networkId":100002,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 2","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39002/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s2","chainId":100003,"networkId":100003,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 3","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39003/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s3","chainId":100004,"networkId":100004,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 4","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39004/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s4","chainId":100005,"networkId":100005,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 5","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39005/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s5","chainId":100006,"networkId":100006,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 6","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39006/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s6","chainId":100007,"networkId":100007,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Mainnet Shard 7","chain":"QuarkChain","network":"mainnet","rpc":["http://jrpc.mainnet.quarkchain.io:39007/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-s7","chainId":100008,"networkId":100008,"parent":{"chain":"eip155-100000","type":"shard"}},{"name":"QuarkChain Devnet Root","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:38391/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-r","chainId":110000,"networkId":110000},{"name":"QuarkChain Devnet Shard 0","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39000/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s0","chainId":110001,"networkId":110001,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 1","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39001/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s1","chainId":110002,"networkId":110002,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 2","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39002/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s2","chainId":110003,"networkId":110003,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 3","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39003/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s3","chainId":110004,"networkId":110004,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 4","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39004/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s4","chainId":110005,"networkId":110005,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 5","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39005/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s5","chainId":110006,"networkId":110006,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 6","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39006/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s6","chainId":110007,"networkId":110007,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"QuarkChain Devnet Shard 7","chain":"QuarkChain","network":"devnet","rpc":["http://jrpc.devnet.quarkchain.io:39007/"],"faucets":[],"features":[],"nativeCurrency":{"name":"QKC","symbol":"QKC","decimals":18},"infoURL":"https://www.quarkchain.io/","shortName":"qkc-d-s7","chainId":110008,"networkId":110008,"parent":{"chain":"eip155-110000","type":"shard"}},{"name":"Akroma","chain":"AKA","network":"mainnet","rpc":["https://remote.akroma.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Akroma Ether","symbol":"AKA","decimals":18},"infoURL":"https://akroma.io","shortName":"aka","chainId":200625,"networkId":200625,"slip44":200625},{"name":"ARTIS sigma1","chain":"ARTIS","network":"sigma1","rpc":["https://rpc.sigma1.artis.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"ARTIS sigma1 Ether","symbol":"ATS","decimals":18},"infoURL":"https://artis.eco","shortName":"ats","chainId":246529,"networkId":246529,"slip44":246529},{"name":"ARTIS Testnet tau1","chain":"ARTIS","network":"tau1","rpc":["https://rpc.tau1.artis.network"],"faucets":[],"features":[],"nativeCurrency":{"name":"ARTIS tau1 Ether","symbol":"tATS","decimals":18},"infoURL":"https://artis.network","shortName":"atstau","chainId":246785,"networkId":246785},{"name":"Ether-1","chain":"ETHO","network":"mainnet","rpc":["https://rpc.ether1.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether-1 Ether","symbol":"ETHO","decimals":18},"infoURL":"https://ether1.org","shortName":"etho","chainId":1313114,"networkId":1313114,"slip44":1313114},{"name":"Xerom","chain":"XERO","network":"mainnet","rpc":["https://rpc.xerom.org"],"faucets":[],"features":[],"nativeCurrency":{"name":"Xerom Ether","symbol":"XERO","decimals":18},"infoURL":"https://xerom.org","shortName":"xero","chainId":1313500,"networkId":1313500},{"name":"Musicoin","chain":"MUSIC","network":"mainnet","rpc":["https://mewapi.musicoin.tw"],"faucets":[],"features":[],"nativeCurrency":{"name":"Musicoin","symbol":"MUSIC","decimals":18},"infoURL":"https://musicoin.tw","shortName":"music","chainId":7762959,"networkId":7762959,"slip44":184},{"name":"PepChain Churchill","chain":"PEP","network":"testnet","rpc":["https://churchill-rpc.pepchain.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"PepChain Churchill Ether","symbol":"TPEP","decimals":18},"infoURL":"https://pepchain.io","shortName":"tpep","chainId":13371337,"networkId":13371337},{"name":"IOLite","chain":"ILT","network":"mainnet","rpc":["https://net.iolite.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"IOLite Ether","symbol":"ILT","decimals":18},"infoURL":"https://iolite.io","shortName":"ilt","chainId":18289463,"networkId":18289463},{"name":"quarkblockchain","chain":"QKI","network":"mainnet","rpc":["https://hz.rpc.qkiscan.cn","https://jp.rpc.qkiscan.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"quarkblockchain Native Token","symbol":"QKI","decimals":18},"infoURL":"https://quarkblockchain.org/","shortName":"qki","chainId":20181205,"networkId":20181205},{"name":"Auxilium Network Mainnet","chain":"AUX","network":"mainnet","rpc":["https://rpc.auxilium.global"],"faucets":[],"features":[],"nativeCurrency":{"name":"Auxilium coin","symbol":"AUX","decimals":18},"infoURL":"https://auxilium.global","shortName":"auxi","chainId":28945486,"networkId":28945486,"slip44":344},{"name":"Joys Digital Mainnet","chain":"JOYS","network":"mainnet","rpc":["https://node.joys.digital"],"faucets":[],"features":[],"nativeCurrency":{"name":"JOYS","symbol":"JOYS","decimals":18},"infoURL":"https://joys.digital","shortName":"JOYS","chainId":35855456,"networkId":35855456},{"name":"Aquachain","chain":"AQUA","network":"mainnet","rpc":["https://c.onical.org","https://tx.aquacha.in/api"],"faucets":["https://aquacha.in/faucet"],"features":[],"nativeCurrency":{"name":"Aquachain Ether","symbol":"AQUA","decimals":18},"infoURL":"https://aquachain.github.io","shortName":"aqua","chainId":61717561,"networkId":61717561,"slip44":61717561},{"name":"Joys Digital TestNet","chain":"TOYS","network":"testnet","rpc":["https://toys.joys.cash/"],"faucets":["https://faucet.joys.digital/"],"features":[],"nativeCurrency":{"name":"TOYS","symbol":"TOYS","decimals":18},"infoURL":"https://joys.digital","shortName":"TOYS","chainId":99415706,"networkId":99415706},{"name":"IPOS Network","chain":"IPOS","network":"mainnet","rpc":["https://rpc.iposlab.com","https://rpc2.iposlab.com"],"faucets":[],"features":[],"nativeCurrency":{"name":"IPOS Network Ether","symbol":"IPOS","decimals":18},"infoURL":"https://iposlab.com","shortName":"ipos","chainId":1122334455,"networkId":1122334455},{"name":"Aurora MainNet","chain":"NEAR","network":"mainnet","rpc":["https://rpc.mainnet.aurora.dev:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"aETH","decimals":18},"infoURL":"https://aurora.dev","shortName":"aurora","chainId":1313161554,"networkId":1313161554},{"name":"Aurora TestNet","chain":"NEAR","network":"testnet","rpc":["https://rpc.testnet.aurora.dev:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"aETH","decimals":18},"infoURL":"https://aurora.dev","shortName":"aurora-testnet","chainId":1313161555,"networkId":1313161555},{"name":"Aurora BetaNet","chain":"NEAR","network":"betanet","rpc":["https://rpc.betanet.aurora.dev:8545"],"faucets":[],"features":[],"nativeCurrency":{"name":"Ether","symbol":"aETH","decimals":18},"infoURL":"https://aurora.dev","shortName":"aurora-betanet","chainId":1313161556,"networkId":1313161556},{"name":"Harmony Mainnet Shard 0","chain":"Harmony","network":"mainnet","rpc":["https://api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s0","chainId":1666600000,"networkId":1666600000},{"name":"Harmony Mainnet Shard 1","chain":"Harmony","network":"mainnet","rpc":["https://s1.api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s1","chainId":1666600001,"networkId":1666600001},{"name":"Harmony Mainnet Shard 2","chain":"Harmony","network":"mainnet","rpc":["https://s2.api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s2","chainId":1666600002,"networkId":1666600002},{"name":"Harmony Mainnet Shard 3","chain":"Harmony","network":"mainnet","rpc":["https://s3.api.harmony.one"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-s3","chainId":1666600003,"networkId":1666600003},{"name":"Harmony Testnet Shard 0","chain":"Harmony","network":"testnet","rpc":["https://api.s0.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s0","chainId":1666700000,"networkId":1666700000},{"name":"Harmony Testnet Shard 1","chain":"Harmony","network":"testnet","rpc":["https://api.s1.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s1","chainId":1666700001,"networkId":1666700001},{"name":"Harmony Testnet Shard 2","chain":"Harmony","network":"testnet","rpc":["https://api.s2.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s2","chainId":1666700002,"networkId":1666700002},{"name":"Harmony Testnet Shard 3","chain":"Harmony","network":"testnet","rpc":["https://api.s3.b.hmny.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"ONE","symbol":"ONE","decimals":18},"infoURL":"https://www.harmony.one/","shortName":"hmy-b-s3","chainId":1666700003,"networkId":1666700003},{"name":"Pirl","chain":"PIRL","network":"mainnet","rpc":["https://wallrpc.pirl.io"],"faucets":[],"features":[],"nativeCurrency":{"name":"Pirl Ether","symbol":"PIRL","decimals":18},"infoURL":"https://pirl.io","shortName":"pirl","chainId":3125659152,"networkId":3125659152,"slip44":164},{"name":"Palm Testnet","chain":"Palm","network":"testnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"PALM","symbol":"PALM","decimals":18},"infoURL":"https://palm.io","shortName":"tpalm","chainId":11297108099,"networkId":11297108099},{"name":"Palm Mainnet","chain":"Palm","network":"mainnet","rpc":[],"faucets":[],"features":[],"nativeCurrency":{"name":"PALM","symbol":"PALM","decimals":18},"infoURL":"https://palm.io","shortName":"palm","chainId":11297108109,"networkId":11297108109}]');

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
/******/ 			if (chunkId === 1440) return "js/npm.validator.js";
/******/ 			if (chunkId === 2162) return "js/npm.z-schema.js";
/******/ 			if (chunkId === 8000) return "js/npm.lodash.isequal.js";
/******/ 			if (chunkId === 8393) return "js/npm.lodash.get.js";
/******/ 			if (chunkId === 6739) return "js/npm.idb.js";
/******/ 			if (chunkId === 2943) return "js/npm.bip39.js";
/******/ 			if (chunkId === 8405) return "js/8405.js";
/******/ 			if (chunkId === 405) return "js/npm.react-feather.js";
/******/ 			if (chunkId === 23) return "js/23.js";
/******/ 			if (chunkId === 404) return "js/404.js";
/******/ 			if (chunkId === 5732) return "js/npm.webcrypto-liner.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","313":"npm.ef-core","855":"npm.json2csv","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1902":"npm-ns.dimensiondev.snapshot.js","2261":"npm.wyvern-js","2598":"npm.react-hook-form","2939":"npm-ns.uniswap.v3-sdk","3294":"npm.date-fns","3322":"npm.color","3850":"npm.arweave","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4462":"npm.text-encoding","4477":"npm.gun","4554":"Plugin/Poll","5049":"Gun","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","6230":"npm.zod","6316":"npm-ns.msgpack.msgpack","6948":"ShapeDetection","7015":"npm.d3-transition","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","9278":"npm.axios","9714":"npm.wyvern-schemas"}[chunkId] || chunkId) + ".js";
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
/******/ 		__webpack_require__.j = 964;
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
/******/ 			964: 0,
/******/ 			7367: 0
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
/******/ 	__webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,3617,4162,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,9632,3906,8883,7988,5519,3193,8184,3911], () => (__webpack_require__(82967)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,3617,4162,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,9632,3906,8883,7988,5519,3193,8184,3911], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;