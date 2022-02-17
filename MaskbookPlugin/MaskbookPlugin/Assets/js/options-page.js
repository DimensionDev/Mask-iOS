/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 53921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "po": () => (/* binding */ loadImage)
/* harmony export */ });
/* unused harmony exports getDimensionAsPNG, getDimensionAsJPEG */
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31216);

/* eslint-disable no-bitwise */
function getDimensionAsPNG(buf) {
    const view = new DataView(buf, 0, 28);
    return { width: view.getInt32(16), height: view.getInt32(20) };
}
/**
 * Get dimension of a JPEG image
 * @see http://vip.sugovica.hu/Sardi/kepnezo/JPEG%20File%20Layout%20and%20Format.htm
 */
function getDimensionAsJPEG(buf) {
    const MAGIC_1 = Uint8Array.of(0xff, 0xd8, 0xff, 0xe0);
    const MAGIC_2 = Uint8Array.of(0x4a, 0x46, 0x49, 0x46, 0x00);
    const view = new DataView(buf);
    let index = 0;
    if (!isEuqals(buf.slice(index, index + 4), MAGIC_1)) {
        return;
    }
    index += 4;
    if (!isEuqals(buf.slice(index + 2, index + 6), MAGIC_2)) {
        return;
    }
    let blockLength = view.getUint8(index) * 256 + view.getUint8(index + 1);
    while (index < view.byteLength) {
        index += blockLength;
        if (index >= view.byteLength)
            return;
        if (view.getUint8(index) !== 0xff)
            return;
        const marker = view.getUint8(index + 1); // SOF0 / SOF2 marker
        if (!(marker === 0xc0 || marker === 0xc2)) {
            index += 2;
            blockLength = view.getUint8(index) * 256 + view.getUint8(index + 1);
            continue;
        }
        return {
            height: view.getUint8(index + 5) * 256 + view.getUint8(index + 6),
            width: view.getUint8(index + 7) * 256 + view.getUint8(index + 8),
        };
    }
}
function loadImage(src) {
    return new Promise((resolve, reject) => {
        const source = new Image();
        source.addEventListener('error', reject);
        source.addEventListener('load', () => {
            resolve(source);
        });
        source.src = src;
    });
}
//# sourceMappingURL=image.js.map

/***/ }),

/***/ 24982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xe": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.xe),
/* harmony export */   "rj": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.rj),
/* harmony export */   "ll": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.ll),
/* harmony export */   "YT": () => (/* reexport safe */ _buffer__WEBPACK_IMPORTED_MODULE_0__.YT),
/* harmony export */   "vZ": () => (/* reexport safe */ _blob__WEBPACK_IMPORTED_MODULE_1__.vZ),
/* harmony export */   "n5": () => (/* reexport safe */ _blob__WEBPACK_IMPORTED_MODULE_1__.n5),
/* harmony export */   "Gx": () => (/* reexport safe */ _blob__WEBPACK_IMPORTED_MODULE_1__.Gx),
/* harmony export */   "ky": () => (/* reexport safe */ _detect__WEBPACK_IMPORTED_MODULE_3__.ky),
/* harmony export */   "sS": () => (/* reexport safe */ _file__WEBPACK_IMPORTED_MODULE_4__.sS),
/* harmony export */   "po": () => (/* reexport safe */ _image__WEBPACK_IMPORTED_MODULE_6__.po),
/* harmony export */   "J3": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_7__.J),
/* harmony export */   "P": () => (/* reexport safe */ _control_flow__WEBPACK_IMPORTED_MODULE_8__.P),
/* harmony export */   "t1": () => (/* reexport safe */ _control_flow__WEBPACK_IMPORTED_MODULE_8__.t),
/* harmony export */   "Yl": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_9__.Y)
/* harmony export */ });
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31216);
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26204);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57244);
/* harmony import */ var _detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78742);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87519);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85038);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53921);
/* harmony import */ var _memoize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34834);
/* harmony import */ var _control_flow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39065);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71898);












//# sourceMappingURL=index.js.map

/***/ }),

/***/ 97379:
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

/***/ 59027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AbstractTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5726);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40623);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72052);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41362);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8236);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63371);




const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()((theme)=>({
        tab: {
            minWidth: 'unset'
        },
        tabPanel: {
            marginTop: theme.spacing(3)
        }
    })
);
function AbstractTab(props) {
    const { tabs , state , index , height =200 , hasOnlyOneChild =false  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useStylesExtends)(useStyles(), props);
    const [value, setValue] = state !== null && state !== void 0 ? state : [
        undefined,
        undefined
    ];
    const tabIndicatorStyle = tabs.length ? {
        width: 100 / tabs.length + '%'
    } : undefined;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                square: true,
                elevation: 0,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                    className: classes.tabs,
                    classes: {
                        indicator: classes.indicator
                    },
                    value: index ? index : value ? value : 0,
                    TabIndicatorProps: {
                        style: tabIndicatorStyle
                    },
                    variant: "fullWidth",
                    indicatorColor: "primary",
                    textColor: "primary",
                    onChange: (_, newValue)=>{
                        return setValue === null || setValue === void 0 ? void 0 : setValue(newValue);
                    },
                    children: tabs.map((tab, i)=>{
                        var ref;
                        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                            className: classes.tab,
                            onClick: tab.cb,
                            label: tab.label,
                            "data-testid": `${(ref = tab.id) === null || ref === void 0 ? void 0 : ref.toLowerCase()}_tab`
                        }, i));
                    })
                })
            }),
            !hasOnlyOneChild ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.tabPanel,
                role: "tabpanel",
                ...tabs.find((_, index1)=>index1 === value
                ),
                sx: {
                    height: height,
                    minHeight: height
                }
            }) : null
        ]
    }));
};


/***/ }),

/***/ 31491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary),
/* harmony export */   "P": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.withErrorBoundary)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);



/***/ }),

/***/ 22681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Image1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43402);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76898);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13661);





const Image1 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Image2(props, outgoingRef) {
    const { src , loading: propsLoading , canvasProps , imgProps , style , className , SkeletonProps , onClick , onURL  } = props;
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas#Maximum_canvas_size
    const [height, width] = [
        Math.min(32767, props.height || 500),
        Math.min(32767, props.width || 500)
    ];
    const [hasCSPBan, setHasCSPBan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [origin, component] = resolveMode(props, hasCSPBan);
    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const imgRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const [blobURL, setBlob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!(src instanceof Blob)) return;
        const blob = URL.createObjectURL(src);
        setBlob(blob);
        return ()=>URL.revokeObjectURL(blob)
        ;
    }, [
        src
    ]);
    const url = blobURL || (typeof src === 'string' ? src : undefined);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (url && (onURL === null || onURL === void 0 ? void 0 : onURL(url)));
    }, [
        onURL,
        url
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(outgoingRef, ()=>({
            canvas: canvasRef.current,
            img: imgRef.current
        })
    , []);
    // TODO: handle image loading error
    const { loading , error , value  } = (0,react_use__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(async function() {
        if (propsLoading) return;
        if (component === 'img') return;
        if (typeof src !== 'string') return;
        if (origin === 'current') return fetch(src).then((x)=>x.blob()
        );
        return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Helper.fetch */ .ZP.Helper.fetch(src);
    }, [
        component,
        src,
        origin
    ]);
    if (error) console.error(error);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const e = canvasRef.current;
        if (!e) return;
        if (!(e instanceof HTMLCanvasElement)) return;
        if (propsLoading || loading) return;
        if (component !== 'canvas') return;
        const source = src instanceof Blob ? src : value;
        if (!source) return;
        toImage(source).then((data)=>{
            const ctx = e.getContext('2d');
            ctx.drawImage(data, 0, 0, width * window.devicePixelRatio, height * window.devicePixelRatio);
        });
    }, [
        propsLoading,
        loading,
        value,
        component,
        width,
        height,
        src
    ]);
    if (propsLoading || loading) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            variant: "rectangular",
            width: width,
            height: height,
            className: className,
            style: style,
            onClick: onClick,
            ...SkeletonProps
        }));
    }
    if (component === 'img' && (typeof src === 'string' || blobURL)) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: url,
            onError: blobURL ? ()=>setHasCSPBan(true)
             : undefined,
            width: width,
            height: height,
            className: className,
            style: style,
            ref: imgRef,
            onClick: onClick,
            ...imgProps
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("canvas", {
        ref: canvasRef,
        width: width * window.devicePixelRatio,
        height: height * window.devicePixelRatio,
        style: {
            width,
            height,
            ...style
        },
        className: className,
        onClick: onClick,
        ...canvasProps
    }));
});
// TODO support concurrent mode
/**
 * This React Component is used to render images in the content script to bypass the CSP restriction.
 */ 
function resolveMode(props, hasCSPBan) {
    const { src , component ='img' , origin ='auto'  } = props;
    if (!hasCSPBan) return [
        'current',
        component
    ];
    if (typeof src !== 'string') return [
        'current',
        'canvas'
    ];
    if (origin === 'extension') return [
        'extension',
        'canvas'
    ];
    if (origin === 'auto') {
        if (isSameOrigin(src)) return [
            'current',
            component
        ];
        return [
            'extension',
            'canvas'
        ];
    }
    return [
        origin,
        component
    ];
}
function isSameOrigin(x) {
    if (typeof x !== 'string') return false;
    try {
        if (new URL(location.href).origin === new URL(x).origin) return true;
    } catch  {
    }
    return false;
}
async function toImage(arr) {
    try {
        return await createImageBitmap(arr);
    } catch  {
        // Safari route
        return new Promise((resolve, reject)=>{
            const img = document.createElement('img');
            img.addEventListener('load', ()=>{
                resolve(img);
                URL.revokeObjectURL(img.src);
            });
            img.addEventListener('error', ({ error  })=>{
                reject(error);
                URL.revokeObjectURL(img.src);
            });
            // TODO: this might be blocked by CSP
            img.src = URL.createObjectURL(arr);
        });
    }
}


/***/ }),

/***/ 87099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ NetworkIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22681);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22209);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63371);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    icon: {
        borderRadius: '50%',
        backgroundColor: '#F7F9FA'
    }
});
const icons = {
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .tds.Ethereum]: new URL(/* asset import */ __webpack_require__(9227), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .tds.Binance]: new URL(/* asset import */ __webpack_require__(3391), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .tds.Polygon]: new URL(/* asset import */ __webpack_require__(44319), __webpack_require__.b).toString(),
    [_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .tds.Arbitrum]: new URL(/* asset import */ __webpack_require__(95781), __webpack_require__.b).toString()
};
function NetworkIcon(props) {
    const { size =48 , networkType  } = props;
    const classes = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_4__.useStylesExtends)(useStyles(), props);
    if (!networkType) return null;
    return icons[networkType] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
        height: size,
        width: size,
        src: icons[networkType],
        className: classes.icon
    }) : null;
}


/***/ }),

/***/ 46173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ WalletIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63371);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6621);
/* harmony import */ var _NetworkIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87099);





const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    root: {
        position: 'relative',
        display: 'flex'
    },
    mainIcon: {
        width: '100%',
        height: '100%'
    },
    badgeIcon: {
        position: 'absolute',
        right: -2,
        bottom: -2,
        backgroundColor: '#ffffff',
        borderRadius: '50%'
    }
});
const WalletIcon = ({ size =24 , badgeSize =14  })=>{
    const { classes  } = useStyles();
    const selectedNetwork = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentNetworkSettings */ .fX);
    const selectedWalletProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.useValueRef)(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentProviderSettings */ .t1);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classes.root,
        style: {
            height: size,
            width: size
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_NetworkIcon__WEBPACK_IMPORTED_MODULE_4__/* .NetworkIcon */ .d, {
                classes: {
                    icon: classes.mainIcon
                },
                size: size,
                networkType: selectedNetwork
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.ProviderIcon, {
                classes: {
                    icon: classes.badgeIcon
                },
                size: badgeSize,
                providerType: selectedWalletProvider
            })
        ]
    }));
};


/***/ }),

/***/ 19018:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ FixedTokenList)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(22209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-window/dist/index.esm.js
var index_esm = __webpack_require__(90882);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(30392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(39052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link = __webpack_require__(46440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(11949);
// EXTERNAL MODULE: ../theme/src/index.ts
var theme_src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/OpenInNew.js
var OpenInNew = __webpack_require__(74902);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/TokenInList.tsx








const useStyles = (0,theme_src/* makeStyles */.ZL)()((theme)=>({
        icon: {
            width: 36,
            height: 36
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
            display: 'block'
        },
        secondary: {
            lineHeight: 1,
            paddingRight: theme.spacing(3),
            position: 'relative'
        },
        link: {
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 'auto',
            margin: 'auto'
        },
        openIcon: {
            fontSize: 16,
            width: 16,
            height: 16,
            marginLeft: theme.spacing(0.5)
        },
        symbol: {
        }
    })
);
function TokenInList({ data , index , style  }) {
    const { classes  } = useStyles();
    const { NATIVE_TOKEN_ADDRESS  } = (0,src/* useTokenConstants */.kdE)();
    const stop = (0,react.useCallback)((ev)=>ev.stopPropagation()
    , []);
    const currentAsset = data.assets[index];
    const { token , balance  } = currentAsset;
    if (!token) return null;
    const { address , name , symbol , logoURI  } = token;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
        style: style,
        disabled: data.selected.some((0,src/* currySameAddress */.DC3)(address)),
        onClick: ()=>data.onSelect(token)
        ,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                    classes: {
                        icon: classes.icon
                    },
                    address: address,
                    name: name,
                    logoURI: logoURI
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.text
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.primary,
                        color: "textPrimary",
                        component: "span",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: classes.symbol,
                                children: symbol
                            }),
                            !(0,src/* isSameAddress */.Wr$)(token.address, NATIVE_TOKEN_ADDRESS) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                className: classes.link,
                                href: (0,src/* resolveTokenLinkOnExplorer */.yWL)(token),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: stop,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenInNew/* default */.Z, {
                                    className: classes.openIcon
                                })
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.name,
                                color: "textSecondary",
                                children: name
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.secondary,
                        color: "textPrimary",
                        component: "span",
                        children: balance !== null && (0,src/* formatBalance */.azF)(balance, token.decimals, 4)
                    })
                ]
            })
        ]
    }, token.address));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/FixedTokenList.tsx









function FixedTokenList(props) {
    const classes = (0,shared_src.useStylesExtends)({
    }, props);
    const account = (0,src/* useAccount */.mAM)();
    const chainId = (0,src/* useChainId */.xxU)();
    const trustedERC20Tokens = (0,src/* useTrustedERC20Tokens */.du_)();
    const { keyword , whitelist: includeTokens = [] , blacklist: excludeTokens = [] , selectedTokens =[] , tokens =[] , onSelect , FixedSizeListProps ,  } = props;
    const [address, setAddress] = (0,react.useState)('');
    const { ERC20_TOKEN_LISTS  } = (0,src/* useEthereumConstants */.HVQ)();
    const { value: erc20TokensDetailed = [] , loading: erc20TokensDetailedLoading  } = (0,src/* useERC20TokensDetailedFromTokenLists */.mrA)(ERC20_TOKEN_LISTS, keyword, trustedERC20Tokens);
    //#region add token by address
    const matchedTokenAddress = (0,react.useMemo)(()=>{
        if (!keyword || !dist.EthereumAddress.isValid(keyword) || erc20TokensDetailed.length) return;
        return keyword;
    }, [
        keyword,
        erc20TokensDetailed.length
    ]);
    const { value: searchedToken , loading: searchedTokenLoading  } = (0,src/* useERC20TokenDetailed */.kIC)(matchedTokenAddress !== null && matchedTokenAddress !== void 0 ? matchedTokenAddress : '');
    //#endregion
    const filteredTokens = erc20TokensDetailed.filter((token)=>(!includeTokens.length || includeTokens.some((0,src/* currySameAddress */.DC3)(token.address))) && (!excludeTokens.length || !excludeTokens.some((0,src/* currySameAddress */.DC3)(token.address)))
    );
    const renderTokens = (0,lodash.uniqBy)([
        ...tokens,
        ...filteredTokens,
        ...searchedToken && searchedToken.name !== 'Unknown Token' && searchedToken.symbol !== 'Unknown' ? [
            searchedToken
        ] : [], 
    ], (x)=>x.address.toLowerCase()
    );
    const { value: assets , loading: assetsLoading , error: assetsError ,  } = (0,src/* useAssetsByTokenList */.l81)(renderTokens.filter((x)=>dist.EthereumAddress.isValid(x.address)
    ));
    const renderAssets = !account || assetsError || assetsLoading ? [
        ...renderTokens
    ].sort((0,src/* makeSortTokenFn */.I30)(chainId, {
        isMaskBoost: true
    })).map((token)=>({
            token: token,
            balance: null
        })
    ) : !!keyword ? assets : [
        ...assets
    ].sort((0,src/* makeSortAssertFn */.Siq)(chainId, {
        isMaskBoost: true
    }));
    //#region UI helpers
    const renderPlaceholder = (message)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            className: classes.placeholder,
            color: "textSecondary",
            children: message
        })
    ;
    //#endregion
    if (erc20TokensDetailedLoading) return renderPlaceholder('Loading token lists...');
    if (assetsLoading) return renderPlaceholder('Loading token assets...');
    if (searchedTokenLoading) return renderPlaceholder('Loading token...');
    if (!renderAssets.length) return renderPlaceholder('No results or contract address does not meet the query criteria.');
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* FixedSizeList */.t7, {
        className: classes.list,
        width: "100%",
        height: 100,
        overscanCount: 8,
        itemSize: 50,
        itemData: {
            assets: renderAssets,
            selected: [
                address,
                ...selectedTokens
            ],
            onSelect (token) {
                setAddress(token.address);
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(token);
            }
        },
        itemCount: renderAssets.length,
        ...FixedSizeListProps,
        children: TokenInList
    }));
}


/***/ }),

/***/ 20338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "M": () => (/* binding */ SearchInput)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(12162);
;// CONCATENATED MODULE: ../icons/general/Search.tsx


const SearchIcon = (0,utils/* createIcon */.I)('Search', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.271 9.41a4.93 4.93 0 118.478 3.424.617.617 0 00-.122.123A4.93 4.93 0 014.272 9.41zm8.837 4.79a6.18 6.18 0 11.884-.884l2.596 2.596a.625.625 0 11-.884.884L13.108 14.2z",
        fill: "currentColor"
    })
}), '0 0 20 20');

// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(40623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(13325);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(87503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/SearchInput.tsx





const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        searchbox: {
            display: 'block',
            width: '100%',
            border: `1px solid ${(0,src/* getMaskColor */.nb)(theme).border}`,
            alignItems: 'center',
            padding: theme.spacing(1)
        },
        search: {
            display: 'flex',
            alignItems: 'center'
        },
        input: {
            width: '100%'
        },
        iconButton: {
            padding: theme.spacing(0.5)
        },
        label: {
            width: '100%',
            paddingLeft: theme.spacing(1)
        }
    })
);
function SearchInput({ label , onChange  }) {
    const { classes  } = useStyles();
    const [visible, setVisible] = (0,react.useState)(false);
    const [keyword, setKeyword] = (0,react.useState)('');
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
        className: classes.searchbox,
        elevation: 0,
        children: [
            visible ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                className: classes.label,
                children: label
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                component: "form",
                className: classes.search,
                elevation: 0,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        size: "large",
                        className: classes.iconButton,
                        "aria-label": "label",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchIcon, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                        className: classes.input,
                        inputProps: {
                            'aria-label': 'select a token'
                        },
                        placeholder: label,
                        value: keyword,
                        onChange: (e)=>{
                            setKeyword(e.target.value);
                            setVisible(e.target.value.length !== 0);
                            onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
                        }
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 91564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ef": () => (/* binding */ DashboardDialogCore),
/* harmony export */   "dd": () => (/* binding */ useModal),
/* harmony export */   "ge": () => (/* binding */ DashboardDialogWrapper),
/* harmony export */   "iD": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_11__.useSnackbarCallback)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6370);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13325);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69739);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76814);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5726);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99195);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52923);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77287);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(63371);








const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme)=>({
        root: {
            userSelect: 'none',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        close: {
            color: theme.palette.text.primary,
            position: 'absolute',
            right: 10,
            top: 10
        }
    })
);
function DashboardDialogCore(props) {
    const { fullScreen , children , CloseIconProps , CloseButtonProps , ...dialogProps } = props;
    const { classes  } = useStyles();
    const xsMatched = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useMatchXS */ .IN)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
        className: classes.root,
        fullScreen: fullScreen !== null && fullScreen !== void 0 ? fullScreen : xsMatched,
        hideBackdrop: true,
        ...dialogProps,
        children: [
            children,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                className: classes.close,
                onClick: (e)=>{
                    var ref;
                    return (ref = dialogProps.onClose) === null || ref === void 0 ? void 0 : ref.call(dialogProps, e, 'backdropClick');
                },
                size: "small",
                ...CloseButtonProps,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
                    ...CloseIconProps
                })
            })
        ]
    }));
}
var DialogState;
(function(DialogState1) {
    DialogState1[DialogState1["Opened"] = 1] = "Opened";
    DialogState1[DialogState1["Closing"] = 2] = "Closing";
    DialogState1[DialogState1["Destroyed"] = 3] = "Destroyed";
})(DialogState || (DialogState = {
}));
function reducer(state, action) {
    if (action.type === 'open') return {
        state: DialogState.Opened,
        props: action.props
    };
    if (action.type === 'close') return {
        state: DialogState.Closing,
        props: state.props
    };
    return {
        state: DialogState.Destroyed
    };
}
function useModal(Modal, ComponentProps) {
    const [status, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, {
        state: DialogState.Destroyed
    });
    const showModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'open'
        })
    , []);
    const showStatefulModal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((props)=>dispatch({
            type: 'open',
            props
        })
    , []);
    // TODO: prevent onClose on some cases (e.g, click away while loading)
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'close'
        })
    , []);
    const onExited = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>dispatch({
            type: 'destroy'
        })
    , []);
    const { state , props  } = status;
    const compositeProps = ComponentProps || props ? {
        ComponentProps: {
            ...ComponentProps,
            ...props
        }
    } : {
    };
    const modalProps = {
        TransitionProps: {
            onExited
        },
        ...compositeProps,
        open: state === DialogState.Opened,
        onClose
    };
    const theme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskTheme */ .Uk)();
    const renderedComponent = state === DialogState.Destroyed ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: theme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Modal, {
            ...modalProps
        })
    });
    return [
        renderedComponent,
        showModal,
        showStatefulModal
    ];
}
const useDashboardDialogWrapperStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .ZL)()((theme, props)=>({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: props.size === 'small' ? 280 : 440,
            padding: props.size === 'small' ? '40px 24px !important' : '40px 36px !important',
            margin: '0 auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        header: {
            textAlign: 'center',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        content: {
            flex: 1,
            textAlign: 'center'
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: theme.spacing(3)
        },
        primary: {
            margin: theme.spacing(2, 0, 1),
            fontWeight: 500,
            fontSize: 20,
            lineHeight: '30px'
        },
        secondary: {
            lineHeight: 1.75,
            fontSize: 14,
            textAlign: 'center',
            wordBreak: 'break-word',
            marginBottom: 18
        },
        confineSecondary: {
            paddingLeft: props.size === 'small' ? 24 : 46,
            paddingRight: props.size === 'small' ? 24 : 46
        }
    })
);
const dialogTheme = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .extendsTheme */ .Ql)((theme)=>({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    },
                    multiline: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    }
                }
            },
            MuiAutocomplete: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2)
                    },
                    inputRoot: {
                        paddingTop: '5px !important',
                        paddingBottom: '5px !important'
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2),
                        marginBottom: 0,
                        '&:first-child': {
                            marginTop: 0
                        }
                    }
                },
                defaultProps: {
                    fullWidth: true,
                    variant: 'outlined',
                    margin: 'normal'
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&[hidden]': {
                            visibility: 'hidden'
                        }
                    }
                },
                defaultProps: {
                    size: 'medium'
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        minHeight: 38
                    },
                    indicator: {
                        height: 1
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        minHeight: 38,
                        borderBottom: `solid 1px ${theme.palette.divider}`
                    }
                }
            }
        }
    })
);
function DashboardDialogWrapper(props) {
    const { size , icon , iconColor , primary , secondary , constraintSecondary =true , content , footer  } = props;
    const { classes  } = useDashboardDialogWrapperStyles(props);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
        theme: dialogTheme,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: classes.header,
                    children: [
                        icon && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.cloneElement)(icon, {
                            width: 64,
                            height: 64,
                            stroke: iconColor
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classes.primary,
                            variant: "h5",
                            children: primary
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.secondary, size !== 'small' && constraintSecondary ? classes.confineSecondary : ''),
                            color: "textSecondary",
                            variant: "body2",
                            dangerouslySetInnerHTML: {
                                __html: secondary !== null && secondary !== void 0 ? secondary : ''
                            }
                        })
                    ]
                }),
                content ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.content,
                    children: content
                }) : null,
                footer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", {
                    className: classes.footer,
                    children: footer
                }) : null
            ]
        })
    }));
}



/***/ }),

/***/ 31599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ DashboardWalletAddERC20TokenDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58713);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77287);
/* harmony import */ var _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49269);
/* harmony import */ var _DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26940);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91564);
/* harmony import */ var _ERC20PredefinedTokenSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90137);








function DashboardWalletAddERC20TokenDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .useI18N */ .M1)();
    const { wallet  } = props.ComponentProps;
    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onSubmit = (0,_Base__WEBPACK_IMPORTED_MODULE_5__/* .useSnackbarCallback */ .iD)(async ()=>{
        if (!token) return;
        await Promise.all([
            _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.addERC20Token */ .V.addERC20Token(token),
            _plugins_Wallet_messages__WEBPACK_IMPORTED_MODULE_3__/* .WalletRPC.trustERC20Token */ .V.trustERC20Token(wallet.address, token)
        ]);
    }, [
        token
    ], props.onClose);
    var ref;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_5__/* .DashboardDialogCore */ .ef, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_5__/* .DashboardDialogWrapper */ .ge, {
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
            }),
            iconColor: "#699CF7",
            primary: t('add_token'),
            content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ERC20PredefinedTokenSelector__WEBPACK_IMPORTED_MODULE_6__/* .ERC20PredefinedTokenSelector */ .o, {
                excludeTokens: Array.from(wallet.erc20_token_whitelist),
                onTokenChange: setToken
            }),
            footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_DashboardComponents_ActionButton__WEBPACK_IMPORTED_MODULE_4__/* .DebounceButton */ .D0, {
                disabled: !token,
                variant: "contained",
                onClick: onSubmit,
                children: t('add_token_symbol', {
                    symbol: (ref = token === null || token === void 0 ? void 0 : token.symbol) !== null && ref !== void 0 ? ref : 'Token'
                })
            })
        })
    }));
}


/***/ }),

/***/ 38189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ DashboardWalletErrorDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27768);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36156);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1868);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77287);
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67099);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91564);







function DashboardWalletErrorDialog(props) {
    const { t  } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .useI18N */ .M1)();
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__/* .useHistory */ .k6)();
    const { error  } = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .useQueryParams */ .Kx)([
        'error'
    ]);
    let message = '';
    switch(error){
        case 'nowallet':
            message = t('error_no_wallet');
            break;
        case 'Returned error: gas required exceeds allowance (10000000) or always failing transaction':
            message = t('error_gas_feed_exceeds');
            break;
        case 'Returned error: insufficient funds for gas * price value':
            message = t('error_insufficient_balance');
            break;
        default:
            message = t('error_unknown');
            break;
    }
    const onClose = async ()=>{
        props.onClose();
        // prevent UI updating before dialog disappearing
        await (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .delay */ .gw)(300);
        history.replace(_Route__WEBPACK_IMPORTED_MODULE_2__/* .DashboardRoute.Wallets */ .q.Wallets);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardDialogCore */ .ef, {
        ...props,
        onClose: onClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Base__WEBPACK_IMPORTED_MODULE_3__/* .DashboardDialogWrapper */ .ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_feather__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
            }),
            iconColor: "#F4637D",
            primary: t('error_wallet'),
            secondary: message,
            footer: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
                variant: "contained",
                onClick: onClose,
                children: t('ok')
            })
        })
    }));
}


/***/ }),

/***/ 58411:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ DashboardWalletImportDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/credit-card.js
var credit_card = __webpack_require__(72659);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(46105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(7542);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(30255);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/InfoOutlined.js
var InfoOutlined = __webpack_require__(40548);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ../plugins/Wallet/src/index.ts
var Wallet_src = __webpack_require__(32326);
// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var messages = __webpack_require__(49269);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(59027);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(26940);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(91564);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(43402);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
;// CONCATENATED MODULE: ./src/plugins/Wallet/hooks/useWalletHD.ts




/** Return the wallet with mnemonic words */ function useWalletHD() {
    var ref;
    const selectedWallet = (ref = (0,web3_shared_src/* useWallet */.Osb)()) === null || ref === void 0 ? void 0 : ref.address;
    return (0,useAsync/* default */.Z)(async ()=>{
        const selected = await messages/* WalletRPC.getWallet */.V.getWallet(selectedWallet);
        if (selected === null || selected === void 0 ? void 0 : selected.mnemonic.length) return selected;
        const all = await messages/* WalletRPC.getWallets */.V.getWallets();
        return (0,lodash.first)(all.filter((x)=>x.mnemonic.length
        ).sort((a, z)=>a.createdAt.getTime() - z.createdAt.getTime()
        ));
    }, [
        selectedWallet
    ]).value;
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/Import.tsx
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];














const useWalletImportDialogStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            width: 550
        },
        confirmation: {
            fontSize: 16,
            lineHeight: 1.75,
            [theme.breakpoints.down('sm')]: {
                fontSize: 14
            }
        },
        notification: {
            fontSize: 12,
            fontWeight: 500,
            textAlign: 'center',
            backgroundColor: theme.palette.mode === 'dark' ? '#17191D' : '#EFF5FF',
            padding: '8px 22px',
            margin: theme.spacing(1, 0, 0),
            borderRadius: '4px'
        },
        notificationIcon: {
            width: 16,
            height: 16,
            color: theme.palette.primary.main
        }
    })
);
function DashboardWalletImportDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const state = (0,react.useState)(0);
    const { classes  } = useWalletImportDialogStyle();
    const hdWallet = useWalletHD();
    // wallet name
    const [walletName, setWalletName] = (0,react.useState)('');
    // mnemonic
    const [mnemonic, setMnemonic] = (0,react.useState)('');
    // private key
    const [privateKey, setPrivateKey] = (0,react.useState)('');
    // new wallet
    const [confirmed, setConfirmed] = (0,react.useState)(false);
    const [showNotification, setShowNotification] = (0,react.useState)(false);
    // keystore
    const [keystoreContent, setKeystoreContent] = (0,react.useState)('');
    const [keystorePassword, setKeystorePassword] = (0,react.useState)('');
    const tabProps = {
        tabs: [
            {
                label: t('wallet_new'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("br", {
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            sx: {
                                display: 'flex',
                                alignItems: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                                        color: "primary",
                                        checked: confirmed,
                                        onChange: ()=>setConfirmed((confirmed1)=>!confirmed1
                                            )
                                    }),
                                    label: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                        sx: {
                                            display: 'inline-flex',
                                            alignItems: 'center'
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                            className: classes.confirmation,
                                            variant: "body2",
                                            children: t('wallet_confirmation_hint')
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoOutlined/* default */.Z, {
                                    className: classes.notificationIcon,
                                    cursor: "pointer",
                                    onClick: (ev)=>{
                                        ev.stopPropagation();
                                        setShowNotification((t1)=>!t1
                                        );
                                    }
                                })
                            ]
                        }),
                        showNotification ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.notification,
                            children: t('wallet_notification')
                        }) : null
                    ]
                })
            },
            {
                label: t('wallet_import_keystore_label'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            required: true,
                            multiline: true,
                            rows: 6,
                            variant: "outlined",
                            label: t('wallet_import_keystore_content_label'),
                            placeholder: t('wallet_import_keystore_content_placeholder'),
                            value: keystoreContent,
                            onChange: (e)=>setKeystoreContent(e.target.value)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            required: true,
                            type: "password",
                            variant: "outlined",
                            label: t('wallet_import_keystore_password_label'),
                            placeholder: t('wallet_import_keystore_password_placeholder'),
                            value: keystorePassword,
                            onChange: (e)=>setKeystorePassword(e.target.value)
                        })
                    ]
                })
            },
            {
                label: t('mnemonic_words'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            required: true,
                            label: t('mnemonic_words'),
                            value: mnemonic,
                            onChange: (e)=>setMnemonic(e.target.value)
                            ,
                            variant: "outlined"
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: t('private_key'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletName, {
                            name: walletName,
                            onChange: setWalletName
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            type: "password",
                            required: true,
                            label: t('private_key'),
                            value: privateKey,
                            onChange: (e)=>setPrivateKey(e.target.value)
                            ,
                            variant: "outlined"
                        })
                    ]
                }),
                sx: {
                    display: 'flex',
                    p: 0
                }
            }, 
        ],
        state,
        height: 'auto'
    };
    const { setDialog: setCreateWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(messages/* WalletMessages.events.createWalletDialogUpdated */.R.events.createWalletDialogUpdated);
    const onCreate = (0,react.useCallback)((name)=>{
        if (hdWallet) return;
        setCreateWalletDialog({
            open: true,
            name
        });
    }, [
        hdWallet === null || hdWallet === void 0 ? void 0 : hdWallet.address,
        setCreateWalletDialog
    ]);
    const onDeriveOrImport = (0,Base/* useSnackbarCallback */.iD)(async ()=>{
        switch(state[0]){
            case 0:
                {
                    if (!hdWallet) return;
                    await messages/* WalletRPC.deriveWalletFromPhrase */.V.deriveWalletFromPhrase(walletName, hdWallet.mnemonic, hdWallet.passphrase);
                    break;
                }
            case 1:
                {
                    const { address , privateKey: _private_key_  } = await messages/* WalletRPC.fromKeyStore */.V.fromKeyStore(keystoreContent, Buffer.from(keystorePassword, 'utf-8'));
                    await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                        name: walletName,
                        address,
                        _private_key_
                    });
                    break;
                }
            case 2:
                {
                    const words = mnemonic.split(' ');
                    if (words.length !== 12) {
                        throw new Error(t('import_failed'));
                    }
                    await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                        name: walletName,
                        path: `${Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB}/0`,
                        mnemonic: words,
                        passphrase: ''
                    });
                    await messages/* WalletRPC.addPhrase */.V.addPhrase({
                        path: Wallet_src/* HD_PATH_WITHOUT_INDEX_ETHEREUM */.UB,
                        mnemonic: words,
                        passphrase: ''
                    });
                    break;
                }
            case 3:
                {
                    const { address , privateKeyValid  } = await messages/* WalletRPC.recoverWalletFromPrivateKey */.V.recoverWalletFromPrivateKey(privateKey);
                    if (!privateKeyValid) throw new Error(t('import_failed'));
                    await messages/* WalletRPC.importNewWallet */.V.importNewWallet({
                        name: walletName,
                        address,
                        _private_key_: privateKey
                    });
                    break;
                }
            default:
                break;
        }
    }, [
        state[0],
        walletName,
        mnemonic,
        privateKey,
        hdWallet === null || hdWallet === void 0 ? void 0 : hdWallet.address
    ], props.onClose);
    const onSubmit = (0,react.useCallback)(async ()=>{
        if (state[0] !== 0 || hdWallet) {
            await onDeriveOrImport();
            return;
        }
        props.onClose();
        onCreate(walletName);
    }, [
        state[0],
        walletName,
        hdWallet === null || hdWallet === void 0 ? void 0 : hdWallet.address,
        onCreate,
        onDeriveOrImport
    ]);
    const formInvalid = (()=>{
        if (walletName.length === 0 || (0,utils/* checkInputLengthExceed */.Se)(walletName)) {
            return true;
        }
        const isFilled = state[0] === 0 && confirmed || state[0] === 1 && keystoreContent && keystorePassword || state[0] === 2 && mnemonic || state[0] === 3 && privateKey;
        return !isFilled;
    })();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            classes: classes,
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(credit_card/* default */.Z, {
            }),
            iconColor: "#4EE0BC",
            primary: t(state[0] === 0 ? 'plugin_wallet_on_create' : 'import_wallet'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                ...tabProps
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                variant: "contained",
                onClick: onSubmit,
                disabled: formInvalid,
                children: t(state[0] === 0 ? 'create' : 'import')
            })
        })
    }));
}
const WalletName = ({ name , onChange  })=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const text = (0,utils/* checkInputLengthExceed */.Se)(name) ? t('input_length_exceed_prompt', {
        name: t('wallet_name').toLowerCase(),
        length: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
    }) : undefined;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
        helperText: text,
        required: true,
        autoFocus: true,
        label: t('wallet_name'),
        value: name,
        onChange: (e)=>onChange(e.target.value)
        ,
        variant: "outlined"
    }));
};


/***/ }),

/***/ 67099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ DashboardRoute),
/* harmony export */   "p": () => (/* binding */ DashboardWalletRoute)
/* harmony export */ });
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SetupStep)
/* harmony export */ });
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

/***/ 47858:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: Dashboard, default

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(43670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/database/IdentifierMap.ts
var IdentifierMap = __webpack_require__(55346);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(76898);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(13017);
// EXTERNAL MODULE: ./src/settings/settings.ts
var settings = __webpack_require__(81949);
;// CONCATENATED MODULE: ./src/social-network-adaptor/options-page/index.ts






const base = {
    networkIdentifier: 'localhost',
    declarativePermissions: {
        origins: []
    },
    shouldActivate () {
        return (0,umd.isEnvironment)(umd.Environment.ManifestOptions);
    }
};
const options_page_define = {
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
            return false;
        },
        async request () {
            return false;
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
        async function load() {
            if (settings/* currentImportingBackup.value */.pL.value) return;
            const x = await service/* default.Identity.queryMyProfiles */.ZP.Identity.queryMyProfiles();
            if (signal.aborted) return;
            state.profiles.value = x;
        }
        signal.addEventListener('abort', messages/* MaskMessage.events.profilesChanged.on */.y.events.profilesChanged.on(load));
        await load();
        return state;
    }
};
(0,social_network.defineSocialNetworkUI)({
    ...base,
    async load () {
        return {
            default: options_page_define
        };
    }
});

// EXTERNAL MODULE: ./src/polyfill/index.ts + 6 modules
var polyfill = __webpack_require__(2735);
// EXTERNAL MODULE: ./src/social-network-adaptor/index.ts + 4 modules
var social_network_adaptor = __webpack_require__(58451);
// EXTERNAL MODULE: ./src/social-network/define.ts
var social_network_define = __webpack_require__(89327);
;// CONCATENATED MODULE: ./src/setup.ui.ts

// Start SNS adaptor


const setup_ui_status = (0,social_network_define/* activateSocialNetworkUI */.Ps)();

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(43402);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Box/Box.js
var Box = __webpack_require__(8236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(81021);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(76814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Card/Card.js + 1 modules
var Card = __webpack_require__(36487);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+unstyled@5.0.0-alpha.43_873b6ee332b32a0534335ea366866a4e/node_modules/@material-ui/unstyled/NoSsr/NoSsr.js
var NoSsr = __webpack_require__(5495);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(94776);
// EXTERNAL MODULE: ../theme/src/index.ts
var src = __webpack_require__(5726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/PeopleOutlined.js
var PeopleOutlined = __webpack_require__(96992);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/CreditCard.js
var CreditCard = __webpack_require__(55524);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/BookmarkBorderOutlined.js
var BookmarkBorderOutlined = __webpack_require__(14198);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/SettingsOutlined.js
var SettingsOutlined = __webpack_require__(96204);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Power.js
var Power = __webpack_require__(97726);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router/esm/react-router.js
var react_router = __webpack_require__(1868);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__(55794);
// EXTERNAL MODULE: ../../node_modules/.pnpm/history@4.10.1/node_modules/history/esm/history.js
var esm_history = __webpack_require__(41901);
// EXTERNAL MODULE: ../../node_modules/.pnpm/prop-types@15.7.2/node_modules/prop-types/index.js
var prop_types = __webpack_require__(69480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(40531);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.14.8/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(81987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tiny-invariant@1.1.0/node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var tiny_invariant_esm = __webpack_require__(32054);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.0.0-alpha-aecb3b6d1/node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,esm_history/* createBrowserHistory */.lX)(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react.createElement(react_router/* Router */.F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  (0,inheritsLoose/* default */.Z)(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = (0,esm_history/* createHashHistory */.q_)(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react.createElement(react_router/* Router */.F0, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? (0,esm_history/* createLocation */.ob)(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var react_router_dom_forwardRef = react.forwardRef;

if (typeof react_router_dom_forwardRef === "undefined") {
  react_router_dom_forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = react_router_dom_forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,esm_extends/* default */.Z)({}, rest, {
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


  if (forwardRefShim !== react_router_dom_forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = react_router_dom_forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref2, ["component", "replace", "to", "innerRef"]);

  return react.createElement(react_router/* __RouterContext.Consumer */.s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant_esm.default)(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,esm_extends/* default */.Z)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== react_router_dom_forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react.forwardRef;

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
      rest = (0,objectWithoutPropertiesLoose/* default */.Z)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react.createElement(react_router/* __RouterContext.Consumer */.s6.Consumer, null, function (context) {
    !context ?  false ? 0 : (0,tiny_invariant_esm.default)(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? (0,react_router/* matchPath */.LX)(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,esm_extends/* default */.Z)({}, styleProp, {}, activeStyle) : styleProp;

    var props = (0,esm_extends/* default */.Z)({
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

    return react.createElement(Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(77287);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Link/Link.js + 1 modules
var Link_Link = __webpack_require__(46440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Breadcrumbs/Breadcrumbs.js + 3 modules
var Breadcrumbs = __webpack_require__(61099);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/SvgIcon/SvgIcon.js + 1 modules
var SvgIcon = __webpack_require__(25283);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(19392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(13325);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Facebook.js
var Facebook = __webpack_require__(85958);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/GitHub.js
var GitHub = __webpack_require__(88809);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Telegram.js
var Telegram = __webpack_require__(63380);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Twitter.js
var Twitter = __webpack_require__(90224);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Base.tsx
var Base = __webpack_require__(91564);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/About.tsx









const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            width: 580,
            height: 660,
            lineHeight: 1.75
        },
        header: {
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: `url(${new URL(/* asset import */ __webpack_require__(61010), __webpack_require__.b)}) no-repeat center / cover`
        },
        maskface: {
            width: 120,
            height: 120,
            marginTop: 75
        },
        masktext: {
            height: 22,
            marginTop: 20,
            marginBottom: 20
        },
        masknightly: {
            height: 48,
            marginTop: 20,
            marginBottom: 12
        },
        version: {
            color: '#FFF',
            fontSize: 12,
            marginBottom: 20
        },
        main: {
            fontSize: 16,
            textAlign: 'center',
            margin: '24px 68px'
        },
        getInTouch: {
            fontSize: 16,
            fontWeight: 'bold',
            marginTop: 20,
            marginBottom: 28
        },
        icon: {
            color: theme.palette.text.primary
        },
        close: {
            color: '#FFF'
        },
        brands: {
            marginTop: theme.spacing(1),
            '& > *': {
                margin: theme.spacing(0, 1),
                cursor: 'pointer'
            }
        },
        footer: {
            borderTop: `1px solid ${theme.palette.divider}`,
            color: theme.palette.text.secondary,
            fontSize: '0.77rem',
            margin: theme.spacing(0, 2),
            padding: theme.spacing(2, 2, 3, 6)
        }
    })
);
const DiscordIcon = (props)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SvgIcon/* default */.Z, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M395 151s-40-31-88-35l-4 8c43 11 63 26 83 44-35-18-70-35-131-35s-96 17-131 35c20-18 44-35 83-44l-5-8c-49 5-87 35-87 35s-45 65-53 193c46 52 114 52 114 52l15-19c-25-8-52-24-76-51 28 21 71 44 140 44s112-22 140-44c-23 27-51 43-75 51l14 19s69 0 114-52c-8-128-53-193-53-193zM198 309c-17 0-31-16-31-35s14-36 31-36 31 16 31 36-14 35-31 35zm114 0c-17 0-31-16-31-35s14-36 31-36 31 16 31 36-14 35-31 35z"
            })
        })
    })
;
const brands = {
    'https://www.facebook.com/masknetwork': /*#__PURE__*/ (0,jsx_runtime.jsx)(Facebook/* default */.Z, {
    }),
    'https://twitter.com/realmaskbook': /*#__PURE__*/ (0,jsx_runtime.jsx)(Twitter/* default */.Z, {
    }),
    'https://github.com/DimensionDev/Maskbook': /*#__PURE__*/ (0,jsx_runtime.jsx)(GitHub/* default */.Z, {
    }),
    'https://t.me/maskbook_group': /*#__PURE__*/ (0,jsx_runtime.jsx)(Telegram/* default */.Z, {
    }),
    'https://discord.gg/4SVXvj7': /*#__PURE__*/ (0,jsx_runtime.jsx)(DiscordIcon, {
    })
};
function DashboardAboutDialog(props) {
    var ref, ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useStyles();
    var ref2;
    const version = (ref2 = (ref1 = (ref = globalThis.browser) === null || ref === void 0 ? void 0 : ref.runtime.getManifest()) === null || ref1 === void 0 ? void 0 : ref1.version) !== null && ref2 !== void 0 ? ref2 : "v1.36.0".slice(1);
    const makeTitle = ()=>{
        if (true) {
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.masktext,
                src: new URL(/* asset import */ __webpack_require__(25866), __webpack_require__.b).toString()
            }));
        }
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
            className: classes.masknightly,
            src: new URL(/* asset import */ __webpack_require__(27485), __webpack_require__.b).toString()
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        CloseIconProps: {
            className: classes.close
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
                    className: classes.header,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
                            className: classes.maskface,
                            src: ( true ? new URL(/* asset import */ __webpack_require__(66969), __webpack_require__.b) : 0).toString()
                        }),
                        makeTitle(),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.version,
                            variant: "body2",
                            color: "inherit",
                            children: t( true ? 'version_of_stable' : 0, {
                                version,
                                build: "stable",
                                hash: "c5a5cecec"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                    className: classes.main,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            component: "p",
                            variant: "inherit",
                            children: t('about_dialog_description')
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                            className: classes.getInTouch,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    variant: "inherit",
                                    children: t('about_dialog_touch')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: classes.brands,
                                    children: Object.keys(brands).map((href, key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                            className: classes.icon,
                                            target: "_blank",
                                            size: "small",
                                            href: href,
                                            children: brands[href]
                                        }, key)
                                    )
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("footer", {
                    className: classes.footer,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            component: "p",
                            variant: "inherit",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('about_dialog_feedback')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
                                    href: `mailto:${t('dashboard_email_address')}`,
                                    children: t('dashboard_email_address')
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            component: "p",
                            variant: "inherit",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                    children: t('about_dialog_source_code')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
                                    href: t('dashboard_source_code_link'),
                                    children: t('dashboard_source_code_link')
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            component: "p",
                            variant: "inherit",
                            children: [
                                t('about_dialog_license'),
                                " ",
                                t('dashboard_license')
                            ]
                        })
                    ]
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/FooterLine.tsx







const FooterLine_useStyles = (0,src/* makeStyles */.ZL)()({
    footerButtons: {
        '& ol': {
            justifyContent: 'center'
        }
    },
    footerLink: {
        borderRadius: '0',
        whiteSpace: 'nowrap',
        '& > p': {
            fontSize: 12
        }
    }
});
const FooterLink = function(props) {
    const { classes  } = FooterLine_useStyles();
    const children = /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
        variant: "body2",
        children: props.children
    });
    if ('href' in props) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
        underline: "none",
        ...props,
        target: "_blank",
        rel: "noopener noreferrer",
        color: "textPrimary",
        className: classes.footerLink,
        children: children
    }));
    if ('to' in props) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
        underline: "none",
        ...props,
        component: Link,
        color: "textPrimary",
        className: classes.footerLink,
        children: children
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
        underline: "none",
        ...props,
        component: "a",
        style: {
            cursor: 'pointer'
        },
        color: "textPrimary",
        className: classes.footerLink,
        children: children
    }));
};
function FooterLine() {
    var ref, ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = FooterLine_useStyles();
    const [aboutDialog, openAboutDialog] = (0,Base/* useModal */.dd)(DashboardAboutDialog);
    var ref2;
    const version = (ref2 = (ref1 = (ref = globalThis.browser) === null || ref === void 0 ? void 0 : ref.runtime.getManifest()) === null || ref1 === void 0 ? void 0 : ref1.version) !== null && ref2 !== void 0 ? ref2 : "v1.36.0".slice(1);
    const openVersionLink = (event)=>{
        // `MouseEvent.prototype.metaKey` on macOS (`Command` key), Windows (`Windows` key), Linux (`Super` key)
        if ( true && !event.metaKey) {
            open(t('version_of_release', {
                tag: `v${version}`
            }));
        } else {
            open(t('version_of_hash', {
                hash: "c5a5cecec"
            }));
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Breadcrumbs/* default */.Z, {
                className: classes.footerButtons,
                separator: "-",
                "aria-label": "breadcrumb",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                        href: "https://mask.io",
                        children: "Mask.io"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                        onClick: openAboutDialog,
                        children: t('about')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                        onClick: openVersionLink,
                        title: "v1.29.12-905-gc5a5cecec",
                        children: t( true ? 'version_of_stable' : 0, {
                            version,
                            build: "stable",
                            hash: "c5a5cecec"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                        href: t('dashboard_mobile_test_link'),
                        children: t('dashboard_mobile_test')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                        href: t('dashboard_source_code_link'),
                        children: t('dashboard_source_code')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                        href: t('dashboard_bounty_list_link'),
                        children: t('dashboard_bounty_list')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLink, {
                        href: t('privacy_policy_link'),
                        children: t('privacy_policy')
                    })
                ]
            }),
            aboutDialog
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/linkedin.js
var linkedin = __webpack_require__(80792);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/smile.js
var smile = __webpack_require__(37322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/List/List.js + 1 modules
var List = __webpack_require__(55432);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemIcon/ListItemIcon.js
var ListItemIcon = __webpack_require__(30392);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemText/ListItemText.js
var ListItemText = __webpack_require__(39052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Divider/Divider.js
var Divider = __webpack_require__(6298);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemButton/ListItemButton.js
var ListItemButton = __webpack_require__(11949);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+system@5.0.0-beta.4_52b7a28b11cb7ee67f7b723078b5c407/node_modules/@material-ui/system/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__(99195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ChevronRight.js
var ChevronRight = __webpack_require__(66412);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/MaskbookLogo.tsx

function Logo() {
    return  true ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskbookLogo, {
    }) : /*#__PURE__*/ 0;
};
function MaskbookLogo() {
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 136 42",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                stroke: "#fff",
                strokeWidth: "3",
                d: "M39.55 21a18.55 18.55 0 11-37.1 0 18.55 18.55 0 0137.1 0z"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                fill: "#fff",
                d: "M104.25 15.72c3.47 0 7.41 1.35 7.64 5.67h-4.84c-.1-1.25-1.25-1.83-2.76-1.83-1.42 0-2.05.54-2.05 1.19 0 .54.4 1.04 1.68 1.28l3.06.5c3.06.58 5.08 2.06 5.08 4.96 0 3.78-3.4 5.54-7.64 5.54-4.27 0-7.74-1.8-8.07-6.14l4.84.03c.24 1.42 1.42 2.06 3.13 2.06 1.45 0 2.33-.44 2.33-1.15 0-.54-.51-.98-1.59-1.15l-3.3-.57c-2.82-.47-4.78-2.06-4.78-4.93 0-3.44 2.93-5.46 7.27-5.46zm-20.43.06c1.79 0 3.26.47 4.47 1.25v-.88h5.45V32.5h-5.45v-.91a8.12 8.12 0 01-4.47 1.25c-4.4 0-8.1-3.68-8.1-8.53 0-4.89 3.7-8.53 8.1-8.53zM51.94 9.55L60.1 21.8l8.13-12.26h4.25v22.97h-5.7V21l-5.09 7.87v.03h-3.17v-.03l-5.13-7.94.04 11.59h-5.7V9.55h4.21zm68.58-.96v13.72l5.69-6.14h6.5l-6.2 6.68 6.74 9.67h-6.53l-3.91-5.66-2.3 2.46v3.2h-5.45V8.59h5.45zM84.9 20.23c-2.22 0-3.83 1.82-3.83 4.08s1.61 4.04 3.83 4.04c1.2 0 2.39-.33 3.4-1.51v-5.06a4.21 4.21 0 00-3.4-1.55z"
            })
        ]
    }));
}
function MaskbookNightlyLogo() {
    return(/*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 136 42",
        children: [
            /*#__PURE__*/ _jsx("path", {
                stroke: "#fff",
                strokeWidth: "3",
                d: "M40.5 21a19.5 19.5 0 11-39 0 19.5 19.5 0 0139 0z"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#fff",
                fillRule: "evenodd",
                d: "M32.45 16.55v6.36H12.54a8.66 8.66 0 0016.21 1.9h3.7v5.35a2.3 2.3 0 01-2.29 2.3H11.84a2.3 2.3 0 01-2.3-2.3V16.55h22.91zm-5.9 8.27a6.74 6.74 0 01-11.14 0h11.15zM16.1 18.07a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm9.8 0a3.56 3.56 0 00-3.53 3.06h1.96a1.66 1.66 0 013.14 0h1.96a3.56 3.56 0 00-3.53-3.06zm4.26-8.52a2.3 2.3 0 012.3 2.29v2.8H9.54v-2.8a2.3 2.3 0 012.29-2.3h18.32z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ _jsx("path", {
                fill: "#fff",
                d: "M104.25 9.04c3.47 0 7.41 1.35 7.64 5.66h-4.84c-.1-1.24-1.25-1.82-2.76-1.82-1.42 0-2.05.54-2.05 1.18 0 .54.4 1.05 1.68 1.29l3.06.5c3.06.58 5.08 2.06 5.08 4.96 0 3.78-3.4 5.54-7.64 5.54-4.27 0-7.74-1.8-8.07-6.15l4.84.04c.24 1.42 1.42 2.06 3.13 2.06 1.45 0 2.33-.44 2.33-1.15 0-.54-.51-.98-1.59-1.15l-3.3-.57c-2.82-.47-4.78-2.06-4.78-4.93 0-3.44 2.93-5.46 7.27-5.46zm-20.43.06c1.79 0 3.26.47 4.47 1.25v-.88h5.45v16.35h-5.45v-.91a8.12 8.12 0 01-4.47 1.24c-4.4 0-8.1-3.67-8.1-8.52 0-4.89 3.7-8.53 8.1-8.53zM51.94 2.86l8.16 12.27 8.13-12.27h4.25v22.98h-5.7V14.32l-5.09 7.87v.03h-3.17v-.03l-5.13-7.94.04 11.59h-5.7V2.86h4.21zm68.58-.95v13.72l5.69-6.14h6.5l-6.2 6.67 6.74 9.68h-6.53l-3.91-5.67-2.3 2.46v3.2h-5.45V1.92h5.45zM84.9 13.55c-2.22 0-3.83 1.82-3.83 4.08s1.61 4.04 3.83 4.04c1.2 0 2.39-.34 3.4-1.51V15.1a4.21 4.21 0 00-3.4-1.55zM55.41 30.4v5.36l-5.51-5.35h-2.17v9.5h2.84V34.7l5.48 5.2h2.19v-9.5H55.4zM60.26 30.4v9.5h2.84v-9.5h-2.84zM70.67 34.57v1.86l3.28.03a3.26 3.26 0 01-2.91 1.48c-2.02 0-3.31-1.24-3.31-2.74 0-1.68 1.33-2.84 3.3-2.84 1.02 0 2.16.33 2.65 1.43h3c-.5-2.26-2.92-3.56-5.72-3.56-3.49 0-6.1 2.07-6.1 5.03 0 2.72 2.5 4.83 6.08 4.83 1.6 0 2.79-.5 3.61-1.34l.12 1.16h2.12v-5.34h-6.12zM86.53 30.4v3.82h-4.66v-3.81h-2.84v9.5h2.84v-3.56h4.66v3.56h2.83v-9.5h-2.83zM100.77 30.4H90.64v2.12h3.65v7.39h2.83v-7.4h3.65v-2.1zM104.9 37.8v-7.4h-2.84v9.5h8.49v-2.1h-5.65zM117.38 30.4l-2.8 4.14-2.8-4.13h-3.14l4.52 6.64v2.86h2.86v-2.86l4.5-6.64h-3.14z"
            })
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useInterval.js
var useInterval = __webpack_require__(89008);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Fade/Fade.js
var Fade = __webpack_require__(59957);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/Carousel.tsx




function Carousel({ items , delay =10000  }) {
    const [current, setCurrent] = (0,react.useState)(0);
    (0,useInterval/* default */.Z)(()=>setCurrent((c)=>c + 1
        )
    , delay);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: items.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
                in: current % items.length === i,
                children: item
            }, i)
        )
    }));
}

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

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/Drawer.tsx














const Drawer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        drawer: {
            height: '100%',
            display: 'grid',
            gridTemplateRows: '[drawerHeader] 0fr [drawerList] auto [drawerFooter] 0fr',
            width: 250,
            color: 'white',
            overflow: 'visible',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                color: theme.palette.text.primary,
                width: '100%'
            }
        },
        drawerHeader: {
            color: 'white',
            padding: theme.spacing(5.5, 10, 4, 4),
            backgroundColor: 'var(--drawerHeader)'
        },
        drawerBody: {
            backgroundColor: 'var(--drawerBody)'
        },
        drawerList: {
            padding: 0
        },
        drawerItem: {
            borderLeft: 'solid 5px var(--drawerBody)',
            paddingTop: 16,
            paddingBottom: 16,
            [theme.breakpoints.down('sm')]: {
                borderLeft: 'none',
                padding: theme.spacing(3, 0)
            }
        },
        drawerItemIcon: {
            [theme.breakpoints.down('sm')]: {
                color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.text.primary
            }
        },
        drawerItemText: {
            margin: 0,
            fontWeight: 500
        },
        drawerItemTextPrimary: {
            [theme.breakpoints.down('sm')]: {
                fontSize: 16
            }
        },
        drawerFeedback: {
            borderLeft: 'none'
        },
        slogan: {
            color: theme.palette.mode === 'light' ? '#A1C1FA' : '#3B3B3B',
            opacity: 0.5,
            width: 316,
            height: 260,
            left: 48,
            bottom: 30,
            fontWeight: 'bold',
            fontSize: 40,
            lineHeight: 1.2,
            letterSpacing: -0.4,
            position: 'absolute',
            transitionDuration: '2s'
        }
    })
);
const drawerTheme = (0,utils/* extendsTheme */.Ql)((theme)=>({
        components: {
            MuiListItem: {
                styleOverrides: {
                    root: {
                        '&$selected$selected': {
                            borderLeftColor: theme.palette.mode === 'dark' ? theme.palette.primary.light : 'var(--drawerBody)',
                            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light
                        }
                    }
                }
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        justifyContent: 'center',
                        color: 'unset'
                    }
                }
            },
            MuiListItemText: {
                styleOverrides: {
                    primary: {
                        fontSize: 14,
                        lineHeight: '24px',
                        fontWeight: 500
                    }
                }
            }
        }
    })
);
function Drawer(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Drawer_useStyles();
    const match = (0,react_router/* useRouteMatch */.$B)('/:param/');
    const forSetupPurpose = match === null || match === void 0 ? void 0 : match.url.includes('/setup');
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    const { routers  } = props;
    const onFeedback = ()=>{
        // see #3384
        open('https://forms.gle/Tb26MEcE3kLar6CFA');
    };
    const onJoin = ()=>{
        open('https://www.linkedin.com/company/masknetwork/jobs/');
    };
    const onDebugPage = (event)=>{
        if (event.shiftKey) {
            browser.tabs.create({
                active: true,
                url: browser.runtime.getURL('/debug.html')
            });
        } else if (event.altKey) {
            browser.tabs.create({
                active: true,
                url: makeNewBugIssueURL()
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: drawerTheme,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
            className: classes.drawer,
            children: [
                xsMatched ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    onClick: onDebugPage,
                    className: classes.drawerHeader,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo, {
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    className: classes.drawerBody,
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    },
                    children: forSetupPurpose ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                                className: classes.drawerList,
                                children: routers.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                                                className: classes.drawerItem,
                                                selected: match ? item[1].startsWith(match.url) : false,
                                                component: Link,
                                                to: item[1],
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                                        className: classes.drawerItemIcon,
                                                        children: item[2]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                                        className: classes.drawerItemText,
                                                        primary: item[0],
                                                        primaryTypographyProps: {
                                                            className: classes.drawerItemTextPrimary
                                                        }
                                                    }),
                                                    xsMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRight/* default */.Z, {
                                                            color: "action"
                                                        })
                                                    }) : null
                                                ]
                                            }),
                                            xsMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                                            }) : null
                                        ]
                                    }, index)
                                )
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                                className: classes.drawerList,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                                        className: classnames_default()(classes.drawerItem, classes.drawerFeedback),
                                        onClick: onJoin,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                                className: classes.drawerItemIcon,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(linkedin/* default */.Z, {
                                                    width: 22,
                                                    height: 22
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                                className: classes.drawerItemText,
                                                primary: t('join_us'),
                                                primaryTypographyProps: {
                                                    className: classes.drawerItemTextPrimary
                                                }
                                            }),
                                            xsMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRight/* default */.Z, {
                                                    color: "action"
                                                })
                                            }) : null
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                                        className: classnames_default()(classes.drawerItem, classes.drawerFeedback),
                                        onClick: onFeedback,
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                                className: classes.drawerItemIcon,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(smile/* default */.Z, {
                                                    width: 22,
                                                    height: 22
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                                className: classes.drawerItemText,
                                                primary: t('feedback'),
                                                primaryTypographyProps: {
                                                    className: classes.drawerItemTextPrimary
                                                }
                                            }),
                                            xsMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ChevronRight/* default */.Z, {
                                                    color: "action"
                                                })
                                            }) : null
                                        ]
                                    }),
                                    xsMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                                    }) : null
                                ]
                            })
                        ]
                    })
                }),
                forSetupPurpose ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Carousel, {
                    items: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.slogan,
                            children: "Post on social networks without allowing the corporations to stalk you."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.slogan,
                            children: "Take back our online privacy."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.slogan,
                            children: "Neutralize the surveillance from tech giants."
                        }), 
                    ]
                }) : null
            ]
        })
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Fab/Fab.js + 1 modules
var Fab = __webpack_require__(13241);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(86993);
// EXTERNAL MODULE: ./src/utils/flags.ts
var flags = __webpack_require__(80773);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Container.tsx







const FAB_COLORS = [
    'primary',
    'secondary',
    'default'
];
const Container_useStyles = (0,src/* makeStyles */.ZL)()((theme, props)=>({
        wrapper: {
            flex: 1,
            width: '100%',
            height: '100%',
            [theme.breakpoints.up('sm')]: {
                display: flags/* Flags.has_native_nav_bar */.vU.has_native_nav_bar ? 'inline' : 'grid',
                gridTemplateRows: props.isSetup ? '1fr' : '[titleAction] 0fr [divider] 0fr [content] auto'
            }
        },
        placeholder: {
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            backgroundSize: '185px 128px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundImage: `url(${theme.palette.mode === 'light' ? new URL(/* asset import */ __webpack_require__(65334), __webpack_require__.b) : new URL(/* asset import */ __webpack_require__(63349), __webpack_require__.b)})`,
            [theme.breakpoints.down('sm')]: {
                backgroundSize: '100px 70px'
            }
        },
        scroller: {
            height: '100%',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        scrollerCompact: {
            paddingLeft: '0 !important',
            paddingRight: '0 !important'
        },
        title: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 110,
            padding: theme.spacing(4, 3)
        },
        titleContent: {
            color: theme.palette.text.primary,
            fontWeight: 500,
            fontSize: 32,
            lineHeight: 1.2,
            [theme.breakpoints.down('sm')]: {
                color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.text.primary,
                left: 0,
                right: 0,
                pointerEvents: 'none',
                position: 'absolute',
                fontSize: 20,
                fontWeight: 500,
                lineHeight: 1.2,
                textAlign: 'center',
                marginBottom: 0
            }
        },
        FloatingIcon: {
            color: theme.palette.mode === 'light' ? theme.palette.common.white : theme.palette.text.primary,
            padding: theme.spacing(1),
            fontSize: '2.5rem'
        },
        titlePlaceholder: {
            flex: 1
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            position: 'relative',
            [theme.breakpoints.down('sm')]: {
                height: '100vh'
            }
        },
        contentPadded: {
            '& > *': {
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                padding: theme.spacing(0, 3),
                scrollbarWidth: 'none',
                '&::-webkit-scrollbar': {
                    display: 'none'
                },
                [theme.breakpoints.down('sm')]: {
                    paddingLeft: theme.spacing(2),
                    paddingRight: theme.spacing(2)
                }
            }
        },
        divider: {
            borderColor: theme.palette.divider,
            [theme.breakpoints.down('sm')]: {
                display: theme.palette.mode === 'light' ? 'none' : 'block'
            }
        },
        dividerPadded: {
            padding: theme.spacing(0, 3),
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(0, 2)
            }
        },
        dividerCompact: {
            padding: '0 !important'
        },
        buttons: {
            display: 'flex',
            '& > *': {
                marginLeft: theme.spacing(1) + '!important'
            }
        },
        floatButtonContainer: {
            position: 'fixed',
            bottom: theme.spacing(1),
            right: theme.spacing(2)
        },
        floatingButton: {
            display: 'flex',
            justifyItems: 'center',
            alignItems: 'center',
            marginBottom: theme.spacing(2)
        }
    })
);
function DashboardRouterContainer(props) {
    const { title , actions , children , padded , empty , compact =false , floatingButtons =[]  } = props;
    const isSetup = location.hash.includes('/setup');
    const { classes  } = Container_useStyles({
        isSetup
    });
    const xsMatched = (0,useMatchXS/* useMatchXS */.I)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
        in: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
            className: classes.wrapper,
            children: [
                isSetup ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: flags/* Flags.has_native_nav_bar */.vU.has_native_nav_bar ? null : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
                                className: classes.title,
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                        className: classes.titleContent,
                                        color: "textPrimary",
                                        variant: "h6",
                                        children: title
                                    }),
                                    flags/* Flags.has_native_nav_bar */.vU.has_native_nav_bar ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: classes.buttons,
                                        children: actions === null || actions === void 0 ? void 0 : actions.map((action, index)=>/*#__PURE__*/ (0,react.cloneElement)(action, {
                                                key: index
                                            })
                                        )
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: classnames_default()({
                                    [classes.dividerPadded]: padded !== false,
                                    [classes.dividerCompact]: xsMatched
                                }),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Divider/* default */.Z, {
                                    className: classes.divider
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                    className: classnames_default()(classes.content, {
                        [classes.contentPadded]: padded !== false
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classnames_default()(classes.scroller, {
                                [classes.scrollerCompact]: compact !== false
                            }),
                            children: children
                        }),
                        empty ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.placeholder
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.floatButtonContainer,
                    children: flags/* Flags.has_native_nav_bar */.vU.has_native_nav_bar ? floatingButtons === null || floatingButtons === void 0 ? void 0 : floatingButtons.map((floatingButton, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Fab/* default */.Z, {
                            color: FAB_COLORS[index],
                            className: classes.floatingButton,
                            onClick: floatingButton.handler,
                            children: /*#__PURE__*/ (0,react.cloneElement)(floatingButton.icon, {
                                key: index,
                                className: classes.FloatingIcon
                            })
                        })
                    ) : null
                })
            ]
        })
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Button/Button.js
var Button = __webpack_require__(27768);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Add.js
var Add = __webpack_require__(41784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/AddCircle.js
var AddCircle = __webpack_require__(64480);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Restore.js
var Restore = __webpack_require__(13171);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(54587);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/MoreVert.js
var MoreVert = __webpack_require__(36857);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__(39378);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/LinkOff.js
var LinkOff = __webpack_require__(58034);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ArrowForward.js
var ArrowForward = __webpack_require__(97455);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(63371);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/utils/isMobile.ts
var isMobile = __webpack_require__(38719);
// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/utils/isMobile.ts
var utils_isMobile = __webpack_require__(38846);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/ProviderLine.tsx











const ProviderLine_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        title: {
            fontWeight: 500,
            fontSize: 12,
            lineHeight: 1.75
        },
        text: {
            fontSize: 14,
            lineHeight: '24px',
            borderBottom: `solid 1px ${theme.palette.divider}`,
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(1, 2),
            '& > :first-child': {
                flex: '1 1 auto',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            },
            '& > :last-child': {
                flex: '0 0 auto'
            }
        },
        cursor: {
            cursor: 'pointer'
        },
        control: {
            marginBottom: theme.spacing(2)
        }
    })
);
function ProviderLine(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    // TODO: internal name should not be used to display
    const { internalName , network , connected , userId , onAction  } = props;
    const classes = (0,shared_src.useStylesExtends)(ProviderLine_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.control,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                variant: "body2",
                color: "textSecondary",
                children: (0,lodash.capitalize)(internalName)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                className: classnames_default()(classes.text, {
                    [classes.cursor]: !connected
                }),
                color: connected ? 'textPrimary' : 'primary',
                variant: "body1",
                component: "div",
                onClick: connected ? undefined : onAction,
                "data-testid": `connect_button_${network.toLowerCase()}`,
                children: [
                    connected ? utils/* Flags.has_no_connected_user_link */.vU.has_no_connected_user_link ? /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: userId
                    }) : Goto(network, userId) : /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: `${t('connect_to')} ${network}`
                    }),
                    connected ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        size: "small",
                        onClick: onAction,
                        className: classes.cursor,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkOff/* default */.Z, {
                        })
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        size: "small",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowForward/* default */.Z, {
                            color: "primary"
                        })
                    })
                ]
            })
        ]
    }));
};
function Goto(network, userID) {
    const title = '@' + userID;
    const props = {
        title,
        children: title,
        color: 'textPrimary',
        style: {
            textDecoration: 'underline'
        }
    };
    // TODO: should use getHomePage URL I guess?
    if (network === 'facebook.com') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
        href: isMobile/* facebookDomain */.x,
        ...props
    }));
    if (network === 'twitter.com') return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
        href: utils_isMobile/* twitterDomain */.M,
        ...props
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
        title: title,
        children: title
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/user.js
var user = __webpack_require__(42369);
// EXTERNAL MODULE: ./src/components/shared/AbstractTab.tsx
var AbstractTab = __webpack_require__(59027);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ShowcaseBox.tsx
var ShowcaseBox = __webpack_require__(53223);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Persona/Backup.tsx









function DashboardPersonaBackupDialog(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { persona  } = props.ComponentProps;
    var ref1;
    const mnemonicWordsValue = (ref1 = (ref = persona.mnemonic) === null || ref === void 0 ? void 0 : ref.words) !== null && ref1 !== void 0 ? ref1 : t('not_available');
    const [base64Value, setBase64Value] = (0,react.useState)(t('not_available'));
    const [compressedQRString, setCompressedQRString] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        service/* default.Welcome.generateBackupJSON */.ZP.Welcome.generateBackupJSON({
            noPosts: true,
            filter: {
                type: 'persona',
                wanted: [
                    persona.identifier
                ]
            }
        }).then((file)=>{
            setBase64Value((0,utils/* encodeArrayBuffer */.ll)((0,utils/* encodeText */.YT)(JSON.stringify(file))));
            setCompressedQRString((0,utils/* compressBackupFile */.bH)(file, {
                personaIdentifier: persona.identifier
            }));
        });
    }, [
        persona.identifier
    ]);
    const state = (0,react.useState)(0);
    const tabProps = {
        tabs: [
            {
                id: 'mnemonic',
                label: t('mnemonic_words'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowcaseBox/* default */.Z, {
                    children: mnemonicWordsValue
                })
            },
            {
                id: 'base64',
                label: 'Base64',
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowcaseBox/* default */.Z, {
                    children: base64Value
                })
            },
            {
                id: 'qr',
                label: t('qr_code'),
                children: compressedQRString ? /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.QRCode, {
                    text: compressedQRString,
                    options: {
                        width: 200
                    },
                    canvasProps: {
                        style: {
                            display: 'block',
                            margin: 'auto'
                        }
                    }
                }) : null
            }, 
        ],
        state,
        height: 200
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user/* default */.Z, {
            }),
            iconColor: "#5FDD97",
            primary: t('backup_persona'),
            secondary: t('dashboard_backup_persona_hint'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                ...tabProps
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TextField/TextField.js + 2 modules
var TextField = __webpack_require__(30255);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/user-plus.js
var user_plus = __webpack_require__(55519);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/ActionButton.tsx
var ActionButton = __webpack_require__(26940);
// EXTERNAL MODULE: ./src/extension/options-page/Route.ts
var Route = __webpack_require__(67099);
// EXTERNAL MODULE: ./src/extension/options-page/SetupStep.ts
var SetupStep = __webpack_require__(86941);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Persona/Create.tsx











function DashboardPersonaCreateDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const [name, setName] = (0,react.useState)('');
    const history = (0,react_router/* useHistory */.k6)();
    const createPersonaAndNext = async ()=>{
        const persona = await service/* default.Identity.createPersonaByMnemonic */.ZP.Identity.createPersonaByMnemonic(name, '');
        history.push(`${Route/* DashboardRoute.Setup */.q.Setup}/${SetupStep/* SetupStep.ConnectNetwork */.d.ConnectNetwork}?identifier=${encodeURIComponent(persona.toText())}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user_plus/* default */.Z, {
            }),
            iconColor: "#5FDD97",
            primary: t('create_a_persona'),
            secondary: " ",
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            helperText: (0,utils/* checkInputLengthExceed */.Se)(name) ? t('input_length_exceed_prompt', {
                                name: t('persona_name').toLowerCase(),
                                length: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
                            }) : undefined,
                            style: {
                                marginBottom: 20
                            },
                            autoFocus: true,
                            required: true,
                            label: t('name'),
                            value: name,
                            onChange: (e)=>setName(e.target.value)
                            ,
                            onKeyDown: (e)=>{
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    if (!(0,utils/* checkInputLengthExceed */.Se)(name) && name.length > 0) {
                                        createPersonaAndNext();
                                    }
                                }
                            },
                            inputProps: {
                                maxLength: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
                            },
                            variant: "outlined"
                        })
                    })
                ]
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                type: "submit",
                variant: "contained",
                onClick: createPersonaAndNext,
                disabled: name.length === 0 || (0,utils/* checkInputLengthExceed */.Se)(name),
                children: t('create')
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/user-minus.js
var user_minus = __webpack_require__(88267);
// EXTERNAL MODULE: ./src/utils/comparer.ts
var comparer = __webpack_require__(62042);
// EXTERNAL MODULE: ./src/utils/side-effects.ts
var side_effects = __webpack_require__(21920);
;// CONCATENATED MODULE: ./src/components/DataSource/useMyPersonas.ts







const independentRef = {
    myPersonasRef: new umd.ValueRef([], comparer/* PersonaArrayComparer */.y$),
    myUninitializedPersonasRef: new umd.ValueRef([], comparer/* PersonaArrayComparer */.y$)
};
{
    const query = (0,lodash.debounce)(()=>{
        service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas().then((p)=>{
            independentRef.myPersonasRef.value = p.filter((x)=>!x.uninitialized
            );
            independentRef.myUninitializedPersonasRef.value = p.filter((x)=>x.uninitialized
            );
            service/* default.Helper.setStorage */.ZP.Helper.setStorage('mobileIsMyPersonasInitialized', independentRef.myPersonasRef.value.length > 0);
        });
    }, 500, {
        trailing: true
    });
    side_effects/* sideEffect.then */.jw.then(query);
    messages/* MaskMessage.events.personaChanged.on */.y.events.personaChanged.on((x)=>x.some((x1)=>x1.owned
        ) && query()
    );
}function useMyPersonas() {
    return (0,shared_src.useValueRef)(independentRef.myPersonasRef);
}
function useMyUninitializedPersonas() {
    return (0,shared_src.useValueRef)(independentRef.myUninitializedPersonasRef);
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/SpacedButtonGroup.tsx
var SpacedButtonGroup = __webpack_require__(46864);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Persona/DeleteConfirm.tsx









function DashboardPersonaDeleteConfirmDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { persona  } = props.ComponentProps;
    const personas = useMyPersonas();
    const deletePersona = (0,Base/* useSnackbarCallback */.iD)(()=>service/* default.Identity.deletePersona */.ZP.Identity.deletePersona(persona.identifier, 'delete even with private')
    , [], ()=>personas.length === 1 ? location.reload() : props.onClose()
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user_minus/* default */.Z, {
            }),
            iconColor: "#F4637D",
            primary: t('delete_persona'),
            secondary: t('dashboard_delete_persona_confirm_hint', {
                name: persona.nickname
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SpacedButtonGroup/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        color: "danger",
                        onClick: deletePersona,
                        "data-testid": "confirm_button",
                        children: t('confirm')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/user-check.js
var user_check = __webpack_require__(50728);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/FormControl/FormControl.js + 1 modules
var FormControl = __webpack_require__(66476);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Select/Select.js + 3 modules
var Select = __webpack_require__(94088);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/CropFree.js
var CropFree = __webpack_require__(86969);
// EXTERNAL MODULE: ./src/utils/native-rpc/index.ts + 2 modules
var native_rpc = __webpack_require__(16994);
;// CONCATENATED MODULE: ./src/components/shared/qrcode.tsx


function NativeQRScanner(props) {
    (0,useAsync/* default */.Z)(async ()=>{
        try {
            if ((native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.type */.Nz.type) === 'iOS') {
                var ref;
                (ref = props.onScan) === null || ref === void 0 ? void 0 : ref.call(props, await native_rpc/* nativeAPI.api.scanQRCode */.Nz.api.scanQRCode());
            } else {
                // TODO:
                throw new Error('Not supported on Android');
            }
        } catch  {
            var ref;
            (ref = props.onQuit) === null || ref === void 0 ? void 0 : ref.call(props);
        }
    });
    return null;
}

// EXTERNAL MODULE: ./src/utils/hooks/useQRCodeVideoScan.tsx
var useQRCodeVideoScan = __webpack_require__(21069);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/QRCodeVideoScanner.tsx





function QRCodeVideoScanner({ scanning , deviceId , onScan , onError , onQuit , ...props }) {
    const videoRef = (0,react.useRef)(null);
    (0,useQRCodeVideoScan/* useQRCodeVideoScan */.A)(videoRef, scanning, deviceId, onScan, onError);
    return (native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.type */.Nz.type) === 'iOS' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(NativeQRScanner, {
        onScan: onScan,
        onQuit: onQuit
    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        style: {
            position: 'relative'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("video", {
            style: {
                minWidth: 404
            },
            "aria-label": "QR Code scanner",
            ref: videoRef,
            ...props
        })
    });
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Setup.tsx






const Setup_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            position: 'relative'
        },
        wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            overflow: 'hidden'
        },
        title: {
            fontSize: 20,
            fontWeight: 500,
            textAlign: 'center',
            top: 32,
            left: 0,
            right: 0,
            margin: 'auto',
            position: 'absolute'
        },
        closeButton: {
            margin: 'auto',
            width: 28 * 1.2,
            height: 28 * 1.2,
            left: 0,
            right: 0,
            bottom: 42,
            position: 'absolute'
        },
        closeIcon: {
            color: theme.palette.common.white,
            width: 28,
            height: 28
        }
    })
);
function QRCodeVideoScannerDialog(props) {
    const { open , onClose  } = props;
    const { deviceId , onScan , onError  } = props.ComponentProps;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Setup_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        CloseIconProps: {
            className: classes.closeIcon
        },
        CloseButtonProps: {
            className: classes.closeButton
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.wrapper,
            children: [
                open ? /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeVideoScanner, {
                    scanning: open,
                    onScan: async (data)=>{
                        onClose();
                        // ensure blur mask closed
                        await (0,utils/* delay */.gw)(300);
                        onScan === null || onScan === void 0 ? void 0 : onScan(data);
                    },
                    deviceId: deviceId,
                    onError: onError,
                    onQuit: onClose
                }) : null,
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.title,
                    variant: "h1",
                    children: t('set_up_qr_scanner_title')
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ./src/utils/hooks/useVideoDevices.ts
var useVideoDevices = __webpack_require__(73774);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/RestoreFromQRCodeCameraBox.tsx











const RestoreFromQRCodeCameraBox_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            marginTop: theme.spacing(2)
        },
        formControl: {
            flex: 1
        },
        menuPaper: {
            backgroundColor: theme.palette.background.paper
        },
        button: {
            width: 64,
            minWidth: 'unset',
            padding: 0,
            marginLeft: 16
        }
    })
);
const RestoreFromQRCodeCameraBox = (native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.type */.Nz.type) === 'iOS' ? NativeQRScanner : (props)=>{
    const { onScan , onError  } = props;
    const classes = (0,shared_src.useStylesExtends)(RestoreFromQRCodeCameraBox_useStyles(), props);
    const [qrCodeVideoScannerDialog, , openQRCodeVideoScannerDialog] = (0,Base/* useModal */.dd)(QRCodeVideoScannerDialog);
    const devices = (0,useVideoDevices/* useVideoDevices */.k)();
    const filteredDevices = devices.filter((d)=>!!d.deviceId
    );
    const [selectedDeviceId, setSelectedDeviceId] = (0,react.useState)('');
    // set default device id
    (0,react.useEffect)(()=>{
        var ref, ref1;
        if (!selectedDeviceId && ((ref = filteredDevices[0]) === null || ref === void 0 ? void 0 : ref.deviceId)) setSelectedDeviceId((ref1 = filteredDevices[0]) === null || ref1 === void 0 ? void 0 : ref1.deviceId);
    }, [
        filteredDevices,
        selectedDeviceId
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.root,
        sx: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControl/* default */.Z, {
                className: classes.formControl,
                variant: "filled",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.Z, {
                    value: selectedDeviceId,
                    variant: "outlined",
                    MenuProps: {
                        classes: {
                            paper: classes.menuPaper
                        }
                    },
                    onChange: (e)=>setSelectedDeviceId(e.target.value)
                    ,
                    children: filteredDevices.map(({ deviceId , label  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                            value: deviceId,
                            children: label
                        }, deviceId)
                    )
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                variant: "outlined",
                disabled: !selectedDeviceId,
                onClick: ()=>openQRCodeVideoScannerDialog({
                        deviceId: selectedDeviceId,
                        onScan,
                        onError
                    })
                ,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CropFree/* default */.Z, {
                })
            }),
            qrCodeVideoScannerDialog
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useDropArea.js
var useDropArea = __webpack_require__(79932);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/styles/useTheme.js
var styles_useTheme = __webpack_require__(4527);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/AddBoxOutlined.js
var AddBoxOutlined = __webpack_require__(33467);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/RestoreBox.tsx






const useStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            color: theme.palette.text.hint,
            whiteSpace: 'pre-line',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            cursor: 'pointer',
            transition: '0.4s',
            overflow: 'hidden',
            '&[data-active=true]': {
                color: 'black'
            }
        },
        icon: {
            top: 0,
            bottom: 0,
            left: 4,
            right: 'auto',
            margin: 'auto',
            position: 'absolute'
        },
        button: {
            maxWidth: '90%',
            position: 'relative',
            '& > span:first-child': {
                display: 'inline-block',
                maxWidth: '100%',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                lineHeight: 1.2
            }
        },
        buttonText: {
            height: 28,
            lineHeight: 1,
            paddingTop: 0,
            paddingBottom: 0
        },
        placeholder: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            width: 64,
            height: 64,
            margin: '20px auto',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '64px 64px'
        },
        placeholderImage: {
            width: 64,
            height: 64
        }
    })
);
function RestoreBox(props) {
    const { entered , file , enterText , leaveText , children , onClick  } = props;
    const { darkPlaceholderImageURL , lightPlaceholderImageURL  } = props;
    const classes = (0,shared_src.useStylesExtends)(useStyle(), props);
    const theme = (0,styles_useTheme/* default */.Z)();
    const src = theme.palette.mode === 'dark' ? darkPlaceholderImageURL : lightPlaceholderImageURL;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        "data-active": entered,
        onClick: onClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.placeholder,
                children: children ? children : /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    className: classes.placeholderImage,
                    src: src
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                className: classes.button,
                classes: {
                    text: classes.buttonText
                },
                variant: "text",
                style: {
                    paddingLeft: entered || file ? 8 : 28
                },
                startIcon: entered || file ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(AddBoxOutlined/* default */.Z, {
                    className: classes.icon
                }),
                onClick: (e)=>e.preventDefault()
                ,
                children: entered ? enterText : file ? file.name : leaveText
            })
        ]
    }));
}

// EXTERNAL MODULE: ./src/utils/hooks/useQRCodeImageScan.tsx
var useQRCodeImageScan = __webpack_require__(14830);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/QRCodeImageScanner.tsx





const QRCodeImageScanner_useStyles = (0,src/* makeStyles */.ZL)()({
    progress: {
        maxWidth: 64,
        maxHeight: 64,
        position: 'absolute'
    },
    img: {
        maxWidth: 64,
        maxHeight: 64
    }
});
function QRCodeImageScanner({ src , onScan , onError  }) {
    const { classes  } = QRCodeImageScanner_useStyles();
    const imageRef = (0,react.useRef)(null);
    const { value , loading , error  } = (0,useQRCodeImageScan/* useQRCodeImageScan */.K)(imageRef);
    // invoke scan result callbacks
    (0,react.useEffect)(()=>{
        if (!src || loading) return;
        if (error) onError === null || onError === void 0 ? void 0 : onError();
        else onScan === null || onScan === void 0 ? void 0 : onScan(value !== null && value !== void 0 ? value : '');
    }, [
        src,
        loading,
        value,
        error,
        onError,
        onScan
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                className: classes.img,
                ref: imageRef,
                src: src
            }),
            loading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                className: classes.progress,
                color: "primary"
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210630045432-e05621c/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(24982);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/RestoreFromQRCodeImageBox.tsx









const RestoreFromQRCodeImageBox_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            height: 112
        },
        file: {
            display: 'none'
        },
        qr: {
            maxWidth: 64,
            maxHeight: 64,
            display: 'block'
        },
        restoreBoxRoot: {
            boxSizing: 'border-box',
            border: `solid 1px ${theme.palette.divider}`,
            display: 'flex',
            justifyContent: 'center',
            height: 112,
            marginBottom: 16,
            borderRadius: 4
        },
        restoreBoxPlaceholder: {
            marginTop: 0,
            marginBottom: 6
        }
    })
);
function RestoreFromQRCodeImageBox(props) {
    const { file , onScan , onError , onChange  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(RestoreFromQRCodeImageBox_useStyles(), props);
    const [dataURL, setDataURL] = (0,react.useState)('');
    const inputRef = (0,react.useRef)(null);
    const [bound, { over  }] = (0,useDropArea/* default */.Z)({
        onFiles (files) {
            onChange === null || onChange === void 0 ? void 0 : onChange(files[0]);
        }
    });
    // read file as data URL
    (0,react.useEffect)(()=>{
        if (file) {
            (0,esm/* blobToDataURL */.n5)(file).then(setDataURL, ()=>setDataURL('')
            );
        } else {
            setDataURL('');
        }
    }, [
        file
    ]);
    // invoke onChange callback
    (0,react.useEffect)(()=>{
        return onChange === null || onChange === void 0 ? void 0 : onChange(file);
    }, [
        file,
        onChange
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ...bound,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                className: classes.file,
                type: "file",
                accept: "image/*",
                ref: inputRef,
                onChange: ({ currentTarget  })=>{
                    if (currentTarget.files) onChange === null || onChange === void 0 ? void 0 : onChange(currentTarget.files.item(0));
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreBox, {
                classes: {
                    root: classes.restoreBoxRoot,
                    placeholder: classes.restoreBoxPlaceholder
                },
                file: file,
                entered: over,
                enterText: t('restore_database_advance_dragging'),
                leaveText: t('restore_database_advance_dragged'),
                darkPlaceholderImageURL: new URL(/* asset import */ __webpack_require__(63271), __webpack_require__.b).toString(),
                lightPlaceholderImageURL: new URL(/* asset import */ __webpack_require__(91026), __webpack_require__.b).toString(),
                "data-active": over,
                onClick: ()=>{
                    var ref;
                    return (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.click();
                },
                children: file ? /*#__PURE__*/ (0,jsx_runtime.jsx)(QRCodeImageScanner, {
                    src: dataURL,
                    onScan: onScan,
                    onError: onError
                }) : null
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Persona/Import.tsx















function DashboardImportPersonaDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const history = (0,react_router/* useHistory */.k6)();
    const [nickname, setNickname] = (0,react.useState)('');
    const [mnemonicWordsValue, setMnemonicWordsValue] = (0,react.useState)('');
    const [password, setPassword] = (0,react.useState)('');
    const [base64Value, setBase64Value] = (0,react.useState)('');
    const [file, setFile] = (0,react.useState)(null);
    const [scannedValue, setScannedValue] = (0,react.useState)('');
    const importPersona = (persona)=>{
        const failToRestore = ()=>enqueueSnackbar(t('set_up_advance_restore_fail'), {
                variant: 'error'
            })
        ;
        try {
            if (persona) {
                history.push(`${Route/* DashboardRoute.Setup */.q.Setup}/${SetupStep/* SetupStep.ConnectNetwork */.d.ConnectNetwork}?identifier=${encodeURIComponent(persona.identifier.toText())}`);
            } else {
                failToRestore();
            }
        } catch  {
            failToRestore();
        }
    };
    const state = (0,react.useState)(0);
    const tabProps = {
        tabs: [
            {
                id: 'mnemonic',
                label: t('mnemonic_words'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            onChange: (e)=>setNickname(e.target.value)
                            ,
                            value: nickname,
                            autoFocus: true,
                            required: true,
                            label: t('name'),
                            inputProps: {
                                'data-testid': 'username_input'
                            },
                            variant: "outlined"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            value: mnemonicWordsValue,
                            onChange: (e)=>setMnemonicWordsValue(e.target.value)
                            ,
                            required: true,
                            label: t('mnemonic_words'),
                            inputProps: {
                                'data-testid': 'mnemonic_input'
                            },
                            variant: "outlined"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            onChange: (e)=>setPassword(e.target.value)
                            ,
                            value: password,
                            label: t('password'),
                            inputProps: {
                                'data-testid': 'password_input'
                            },
                            variant: "outlined"
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            },
            {
                id: 'text',
                label: 'Base64',
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    multiline: true,
                    minRows: 5,
                    maxRows: 5,
                    autoFocus: true,
                    placeholder: t('dashboard_paste_database_base64_hint'),
                    onChange: (e)=>setBase64Value(e.target.value)
                    ,
                    value: base64Value,
                    variant: "outlined"
                }),
                sx: {
                    p: 0,
                    display: 'flex'
                }
            },
            {
                id: 'qr',
                label: t('qr_code'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromQRCodeImageBox, {
                            file: file,
                            onChange: setFile,
                            onScan: setScannedValue,
                            onError: ()=>{
                                enqueueSnackbar(t('set_up_qr_scanner_fail'), {
                                    variant: 'error'
                                });
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromQRCodeCameraBox, {
                            onScan: (scannedValue1)=>{
                                setFile(null);
                                setScannedValue(scannedValue1);
                            },
                            onError: ()=>{
                                enqueueSnackbar(t('set_up_qr_scanner_fail'), {
                                    variant: 'error'
                                });
                            }
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state,
        height: 176
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user_check/* default */.Z, {
            }),
            iconColor: "#5FDD97",
            primary: t('import_your_persona'),
            secondary: t('dashboard_persona_import_dialog_hint'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                ...tabProps
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                variant: "contained",
                disabled: !(state[0] === 0 && nickname && mnemonicWordsValue) && !(state[0] === 1 && base64Value) && !(state[0] === 2 && scannedValue),
                onClick: async ()=>{
                    try {
                        const persona = await (state[0] === 0 ? service/* default.Identity.restoreFromMnemonicWords */.ZP.Identity.restoreFromMnemonicWords(mnemonicWordsValue, nickname, password) : state[0] === 1 ? service/* default.Identity.restoreFromBase64 */.ZP.Identity.restoreFromBase64(base64Value) : service/* default.Identity.restoreFromBackup */.ZP.Identity.restoreFromBackup(scannedValue));
                        importPersona(persona);
                    } catch  {
                        enqueueSnackbar(t('set_up_restore_fail'), {
                            variant: 'error'
                        });
                    }
                },
                "data-testid": "import_button",
                children: t('import')
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Persona/Rename.tsx








function DashboardPersonaRenameDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { persona  } = props.ComponentProps;
    var _nickname;
    const [name, setName] = (0,react.useState)((_nickname = persona.nickname) !== null && _nickname !== void 0 ? _nickname : '');
    const renamePersona = (0,Base/* useSnackbarCallback */.iD)(()=>service/* default.Identity.renamePersona */.ZP.Identity.renamePersona(persona.identifier, name)
    , [
        persona.nickname
    ], props.onClose);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "small",
            primary: t('persona_rename'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                helperText: (0,utils/* checkInputLengthExceed */.Se)(name) ? t('input_length_exceed_prompt', {
                    name: t('persona_name').toLowerCase(),
                    length: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
                }) : undefined,
                required: true,
                label: t('persona_name'),
                value: name,
                autoFocus: true,
                onChange: (e)=>setName(e.target.value)
                ,
                inputProps: {
                    onKeyPress: (e)=>e.key === 'Enter' && renamePersona()
                }
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SpacedButtonGroup/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        onClick: renamePersona,
                        disabled: name.length === 0 || (0,utils/* checkInputLengthExceed */.Se)(name),
                        children: t('ok')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Persona/UnlinkConfirm.tsx







const LinkOffIcon = ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
        width: "58",
        height: "58",
        viewBox: "0 0 58 58",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M43.7853 35.3366L50.1249 29C52.9203 26.1956 54.49 22.3973 54.49 18.4376C54.49 14.4778 52.9203 10.6796 50.1249 7.87514C47.3212 5.07823 43.5226 3.50751 39.5624 3.50751C35.6022 3.50751 31.8037 5.07823 29 7.87514L26.8878 9.98733L31.1122 14.2117L33.2244 12.0995C34.9079 10.4235 37.1868 9.48252 39.5624 9.48252C41.938 9.48252 44.2169 10.4235 45.9005 12.0995C47.578 13.7823 48.5199 16.0615 48.5199 18.4376C48.5199 20.8137 47.578 23.0928 45.9005 24.7756L39.5609 31.1122C38.835 31.8333 37.9796 32.4111 37.0395 32.8151L33.2244 29L37.4487 24.7756L35.3366 22.6634C33.9532 21.2716 32.3075 20.1681 30.4947 19.4168C28.6818 18.6655 26.738 18.2814 24.7756 18.2867C24.0736 18.2867 23.3894 18.3823 22.7112 18.4839L4.22437 0L0 4.22437L53.7756 58L58 53.7756L41.461 37.2366C42.2885 36.6869 43.0683 36.0536 43.7853 35.3366ZM24.7756 45.9005C23.0921 47.5765 20.8132 48.5175 18.4376 48.5175C16.062 48.5175 13.7831 47.5765 12.0995 45.9005C10.422 44.2177 9.48006 41.9385 9.48006 39.5624C9.48006 37.1863 10.422 34.9072 12.0995 33.2244L16.5091 28.8178L12.2847 24.5934L7.87514 29C5.07969 31.8044 3.50997 35.6027 3.50997 39.5624C3.50997 43.5222 5.07969 47.3204 7.87514 50.1249C9.26098 51.5127 10.9074 52.613 12.7198 53.3625C14.5322 54.1121 16.4748 54.4962 18.4361 54.4926C20.3979 54.4967 22.3411 54.1129 24.1541 53.3633C25.967 52.6138 27.6139 51.5132 29 50.1249L31.1122 48.0127L26.8878 43.7883L24.7756 45.9005Z",
            fill: "#F4637D"
        })
    })
;
function DashboardPersonaUnlinkConfirmDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { nickname , identifier  } = props.ComponentProps;
    const onClick = (0,Base/* useSnackbarCallback */.iD)(()=>service/* default.Identity.detachProfile */.ZP.Identity.detachProfile(identifier)
    , [
        identifier
    ], props.onClose);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkOffIcon, {
            }),
            iconColor: "#699CF7",
            primary: t('disconnect_profile'),
            secondary: t('dashboard_disconnect_profile_hint', {
                persona: nickname,
                network: identifier.network,
                profile: identifier.userId
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SpacedButtonGroup/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        color: "danger",
                        onClick: onClick,
                        children: t('confirm')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Persona/index.tsx







// EXTERNAL MODULE: ./src/utils/utils.ts
var utils_utils = __webpack_require__(98621);
// EXTERNAL MODULE: ./src/components/InjectedComponents/SetupGuide.tsx
var SetupGuide = __webpack_require__(29346);
// EXTERNAL MODULE: ./src/social-network/utils/permissions.ts
var permissions = __webpack_require__(98602);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/ProfileBox.tsx












function ProfileBox({ persona , ProviderLineProps  }) {
    const profiles = persona ? [
        ...persona.linkedProfiles
    ] : [];
    const providers = [
        ...social_network.definedSocialNetworkUIs.values()
    ].map((i)=>{
        const profile = profiles.find(([key, value])=>key.network === i.networkIdentifier
        );
        if (i.networkIdentifier === 'localhost') return null;
        return {
            internalName: i.networkIdentifier,
            network: i.networkIdentifier,
            connected: !!profile,
            userId: profile === null || profile === void 0 ? void 0 : profile[0].userId,
            identifier: profile === null || profile === void 0 ? void 0 : profile[0]
        };
    }).filter((x)=>x
    );
    const [detachProfile, , setDetachProfile] = (0,Base/* useModal */.dd)(DashboardPersonaUnlinkConfirmDialog);
    (0,react.useEffect)(()=>{
        providers.forEach((provider)=>(0,social_network.loadSocialNetworkUI)(provider.internalName)
        );
    }, [
        providers
    ]);
    const onConnect = async (provider)=>{
        var _utils, ref;
        const ui = (0,social_network.loadSocialNetworkUISync)(provider.internalName);
        if (!ui) throw new Error('This process must be sync');
        // TODO: what if it does not have a (single?) home page? (e.g. mastdon)
        // TODO: maybe add a new action "onConnect"?
        const home = (ref = (_utils = ui.utils).getHomePage) === null || ref === void 0 ? void 0 : ref.call(_utils);
        if (!persona) return;
        if (!flags/* Flags.no_web_extension_dynamic_permission_request */.vU.no_web_extension_dynamic_permission_request) {
            if (!await (0,permissions/* requestSNSAdaptorPermission */.S)(ui)) return;
        }
        // FIXME:
        // setting storage race condition here
        settings/* currentSetupGuideStatus */.AI[provider.network].value = json_stable_stringify_default()({
            status: SetupGuide/* SetupGuideStep.FindUsername */.s.FindUsername,
            persona: persona.identifier.toText()
        });
        await (0,utils_utils/* delay */.gw)(100);
        home && browser.tabs.create({
            active: true,
            url: home
        });
    };
    const onDisconnect = (provider)=>{
        setDetachProfile({
            nickname: persona === null || persona === void 0 ? void 0 : persona.nickname,
            identifier: provider.identifier
        });
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            providers.map((provider, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ProviderLine, {
                    onAction: ()=>provider.connected ? onDisconnect(provider) : onConnect(provider)
                    ,
                    ...provider,
                    ...ProviderLineProps
                }, index)
            ),
            detachProfile
        ]
    }));
};

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/PersonaCard.tsx











const PersonaCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        card: {
            padding: theme.spacing(4, 3, 5, 3),
            boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 2px 4px rgba(96, 97, 112, 0.16), 0px 0px 1px rgba(40, 41, 61, 0.04)'
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(3)
        },
        title: {
            flex: '1 1 auto',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            wordBreak: 'break-all',
            whiteSpace: 'nowrap',
            fontWeight: 500
        },
        menu: {
            flex: '0 0 auto',
            marginLeft: theme.spacing(1),
            cursor: 'pointer'
        }
    })
);
function PersonaCard({ persona  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PersonaCard_useStyles();
    const { classes: color  } = (0,utils/* useColorStyles */.Nh)();
    const [deletePersona, openDeletePersona] = (0,Base/* useModal */.dd)(DashboardPersonaDeleteConfirmDialog, {
        persona
    });
    const [backupPersona, openBackupPersona] = (0,Base/* useModal */.dd)(DashboardPersonaBackupDialog, {
        persona
    });
    const [renamePersona, openRenamePersona] = (0,Base/* useModal */.dd)(DashboardPersonaRenameDialog, {
        persona
    });
    const [menu, openMenu] = (0,utils/* useMenu */.H9)([
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: openRenamePersona,
            children: t('rename')
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: openBackupPersona,
            children: t('backup')
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: openDeletePersona,
            className: color.error,
            "data-testid": "delete_button",
            children: t('delete')
        }), 
    ]);
    const id = persona.linkedProfiles.keys().next().value;
    (0,react.useEffect)(()=>{
        if (persona.nickname) return;
        const profile = id;
        if (!profile) service/* default.Identity.renamePersona */.ZP.Identity.renamePersona(persona.identifier, persona.identifier.compressedPoint);
        else service/* default.Identity.queryProfile */.ZP.Identity.queryProfile(profile).then((profile1)=>profile1.nickname || profile1.identifier.userId
        ).then((newName)=>service/* default.Identity.renamePersona */.ZP.Identity.renamePersona(persona.identifier, newName)
        );
    }, [
        persona.identifier,
        id,
        persona.nickname
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.card,
        elevation: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.header,
                variant: "h5",
                component: "h2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            title: persona.nickname,
                            className: classes.title,
                            "data-testid": "persona_title",
                            children: persona.nickname
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                            size: "small",
                            className: classes.menu,
                            onClick: openMenu,
                            "data-testid": "setting_icon",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreVert/* default */.Z, {
                            })
                        }),
                        menu
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileBox, {
                persona: persona
            }),
            deletePersona,
            backupPersona,
            renamePersona
        ]
    }));
};

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Personas.tsx













const Personas_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            alignItems: 'baseline',
            padding: theme.spacing(3, 0),
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        personaList: {
            margin: 0,
            padding: 0,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: theme.spacing(3),
            [theme.breakpoints.down('sm')]: {
                display: 'block'
            }
        },
        personaItem: {
            listStyle: 'none',
            [theme.breakpoints.down('sm')]: {
                marginBottom: theme.spacing(2)
            }
        },
        databaseButton: {
            paddingTop: 0,
            paddingBottom: 0,
            lineHeight: '24px'
        },
        placeholder: {
            flex: 1
        }
    })
);
const personasTheme = (0,utils/* extendsTheme */.Ql)((theme)=>({
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: theme.palette.text.primary
                    }
                }
            }
        }
    })
);
function DashboardPersonasRouter() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Personas_useStyles();
    const personas = useMyPersonas();
    const [createPersona, openCreatePersona] = (0,Base/* useModal */.dd)(DashboardPersonaCreateDialog);
    const [importPersona, openImportPersona] = (0,Base/* useModal */.dd)(DashboardImportPersonaDialog);
    const actions = (0,react.useMemo)(()=>[
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    marginRight: 1
                },
                variant: "outlined",
                onClick: openImportPersona,
                children: t('import')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "contained",
                onClick: openCreatePersona,
                endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCircle/* default */.Z, {
                }),
                "data-testid": "create_button",
                children: t('create_persona')
            }), 
        ]
    , [
        t,
        openCreatePersona,
        openImportPersona
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardRouterContainer, {
        title: t('my_personas'),
        empty: !personas.length,
        actions: actions,
        floatingButtons: [
            {
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                }),
                handler: openCreatePersona
            },
            {
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Restore/* default */.Z, {
                }),
                handler: openImportPersona
            }, 
        ],
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                theme: personasTheme,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                    className: classes.container,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
                        className: classes.personaList,
                        children: personas.sort((a, b)=>{
                            if (a.updatedAt > b.updatedAt) return -1;
                            if (a.updatedAt < b.updatedAt) return 1;
                            return 0;
                        }).map((persona)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                className: classes.personaItem,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCard, {
                                    persona: persona
                                })
                            }, persona.identifier.toText())
                        )
                    })
                })
            }),
            createPersona,
            importPersona
        ]
    }));
};

// EXTERNAL MODULE: ../web3-shared/src/index.ts
var web3_shared_src = __webpack_require__(22209);
// EXTERNAL MODULE: ./src/extension/options-page/DashboardDialogs/Wallet/index.tsx + 9 modules
var Wallet = __webpack_require__(60020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Alert/Alert.js + 4 modules
var Alert = __webpack_require__(78103);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(72052);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Tab/Tab.js
var Tab = __webpack_require__(41362);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/MonetizationOnOutlined.js
var MonetizationOnOutlined = __webpack_require__(67923);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/MoreVertOutlined.js
var MoreVertOutlined = __webpack_require__(22354);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ExpandMore.js
var ExpandMore = __webpack_require__(80234);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Check.js
var Check = __webpack_require__(86041);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(38749);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Chip/Chip.js + 2 modules
var Chip = __webpack_require__(16633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(82870);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(92197);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Table/Table.js + 1 modules
var Table = __webpack_require__(63706);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableHead/TableHead.js + 1 modules
var TableHead = __webpack_require__(82497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(58314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(13661);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.1/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42895);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ExpandLess.js
var ExpandLess = __webpack_require__(21282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/MoreHoriz.js
var MoreHoriz = __webpack_require__(31107);
// EXTERNAL MODULE: ./src/plugins/Transak/messages.ts
var Transak_messages = __webpack_require__(75474);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/ActionsBarFT.tsx










const ActionsBarFT_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        more: {
            color: theme.palette.text.primary
        }
    })
);
function ActionsBarFT(props) {
    const { wallet , chain , token  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const classes = (0,shared_src.useStylesExtends)(ActionsBarFT_useStyles(), props);
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const chainIdMatched = (0,web3_shared_src/* useChainIdMatched */.iN)((0,web3_shared_src/* getChainIdFromName */.npC)(chain));
    //#region remote controlled buy dialog
    const { setDialog: setBuyDialog  } = (0,shared_src.useRemoteControlledDialog)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated);
    //#endregion
    //#region items
    const items = [
        chainIdMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>{
                var _symbol;
                setBuyDialog({
                    open: true,
                    code: (_symbol = token.symbol) !== null && _symbol !== void 0 ? _symbol : token.name,
                    address: account
                });
            },
            children: t('buy')
        }) : null,
        chainIdMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            disabled: !chainIdValid,
            onClick: ()=>openTransferDialogOpen({
                    wallet,
                    token
                })
            ,
            children: t('transfer')
        }) : null,
        !(0,web3_shared_src/* isNative */.tYA)(token.address) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>openHideTokenConfirmDialog({
                    wallet,
                    token
                })
            ,
            children: t('hide')
        }) : null, 
    ].filter(Boolean);
    //#endregion
    const [transeferDialog, , openTransferDialogOpen] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletTransferDialogFT */.Pi);
    const [hideTokenConfirmDialog, , openHideTokenConfirmDialog] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletHideTokenConfirmDialog */.u1);
    const [menu, openMenu] = (0,utils/* useMenu */.H9)(items);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                className: classes.more,
                size: "small",
                disabled: !items.length,
                onClick: openMenu,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreHoriz/* default */.Z, {
                })
            }),
            menu,
            hideTokenConfirmDialog,
            transeferDialog
        ]
    }));
}

;// CONCATENATED MODULE: ./src/plugins/Wallet/helpers.ts


function serializeWalletRecord(record) {
    return stringify({
        ...record,
        erc20_token_whitelist: Array.from(record.erc20_token_whitelist.values()),
        erc20_token_blacklist: Array.from(record.erc20_token_blacklist.values()),
        erc721_token_whitelist: Array.from(record.erc721_token_whitelist.values()),
        erc721_token_blacklist: Array.from(record.erc721_token_blacklist.values()),
        erc1155_token_whitelist: Array.from(record.erc1155_token_whitelist.values()),
        erc1155_token_blacklist: Array.from(record.erc1155_token_blacklist.values())
    });
}
function WalletComparer(a, b) {
    if (!a || !b) return false;
    return serializeWalletRecord(a) === serializeWalletRecord(b);
}
function WalletArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((wallet, index)=>WalletComparer(wallet, b[index])
    );
}
function PhraseComparer(a, b) {
    if (!a || !b) return false;
    return a.id === b.id && a.index === b.index;
}
function PhrasesComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((phrase, index)=>PhraseComparer(phrase, b[index])
    );
}
function ERC20TokenComparer(a, b) {
    if (!a || !b) return false;
    return isSameAddress(a.address, b.address);
}
function ERC20TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC20TokenComparer(token, b[index])
    );
}
function ERC721TokenComparer(a, b) {
    if (!a || !b) return false;
    return a.tokenId === b.tokenId;
}
function ERC721TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC721TokenComparer(token, b[index])
    );
}
function ERC1155TokenComparer(a, b) {
    if (!a || !b) return false;
    return a.tokenId === b.tokenId;
}
function ERC1155TokenArrayComparer(a, b) {
    if (a.length !== b.length) return false;
    return a.every((token, index)=>ERC1155TokenComparer(token, b[index])
    );
}
const getTokenUSDValue = (token)=>token.value ? Number.parseFloat(token.value[web3_shared_src/* CurrencyType.USD */.V2A.USD]) : 0
;

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/WalletAssetsTable.tsx














const WalletAssetsTable_useStyles = (0,src/* makeStyles */.ZL)()((theme, { isMobile  })=>({
        container: {
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            padding: theme.spacing(0)
        },
        head: {
            backgroundColor: theme.palette.mode === 'light' ? theme.palette.common.white : 'var(--drawerBody)'
        },
        cell: {
            paddingLeft: isMobile ? theme.spacing(0.5) : theme.spacing(2),
            paddingRight: isMobile ? theme.spacing(0.5) : theme.spacing(1.5),
            fontSize: isMobile ? '0.8rem' : '0.875rem',
            whiteSpace: 'nowrap'
        },
        record: {
            display: 'flex'
        },
        coin: {
            width: isMobile ? 20 : 24,
            height: isMobile ? 20 : 24
        },
        name: {
            marginLeft: theme.spacing(1),
            fontSize: isMobile ? '0.9rem' : '1rem'
        },
        chain: {
            marginLeft: theme.spacing(1)
        },
        price: {
            fontSize: isMobile ? '0.9rem' : '1rem'
        },
        more: {
            color: theme.palette.text.primary,
            fontSize: isMobile ? '0.9rem' : '1rem'
        },
        lessButton: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    })
);
function ViewDetailed(props) {
    var ref;
    const { wallet , asset  } = props;
    const isMobile = (0,utils/* useMatchXS */.IN)();
    const classes = (0,shared_src.useStylesExtends)(WalletAssetsTable_useStyles({
        isMobile
    }), props);
    const stableTokens = (0,web3_shared_src/* useStableTokensDebank */.PBv)();
    const chainDetailed = (0,web3_shared_src/* useChainDetailed */.K1)();
    if (!chainDetailed) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
        className: classes.cell,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                        classes: {
                            icon: classes.coin
                        },
                        name: asset.token.name,
                        address: asset.token.address,
                        logoURI: asset.token.logoURI,
                        chainId: (0,web3_shared_src/* getChainIdFromName */.npC)(asset.chain)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.name,
                        children: asset.token.symbol
                    }),
                    asset.chain.toLowerCase() !== chainDetailed.chain.toLowerCase() ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Chip/* default */.Z, {
                        className: classes.chain,
                        label: asset.chain,
                        size: "small"
                    }) : null
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.price,
                    color: "textPrimary",
                    component: "span",
                    children: ((ref = asset.price) === null || ref === void 0 ? void 0 : ref[web3_shared_src/* CurrencyType.USD */.V2A.USD]) ? (0,web3_shared_src/* formatCurrency */.xGv)(Number.parseFloat(asset.price[web3_shared_src/* CurrencyType.USD */.V2A.USD]), '$') : '-'
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.name,
                    color: "textPrimary",
                    component: "span",
                    children: new (bignumber_default())((0,web3_shared_src/* formatBalance */.azF)(asset.balance, asset.token.decimals)).toFixed(stableTokens.some((0,web3_shared_src/* currySameAddress */.DC3)(asset.token.address)) ? 2 : 6)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    justifyContent: 'flex-end'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.price,
                    color: "textPrimary",
                    component: "span",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedCurrency, {
                        value: getTokenUSDValue(asset).toFixed(2),
                        sign: "$"
                    })
                })
            }),
            ...isMobile ? [] : [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        justifyContent: 'flex-end'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionsBarFT, {
                        chain: asset.chain,
                        wallet: wallet,
                        token: asset.token
                    })
                }), 
            ], 
        ].filter(Boolean).map((y, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                className: classes.cell,
                children: y
            }, i)
        )
    }, asset.token.address));
}
//#endregion
//#region wallet asset table
const MIN_VALUE = 5;
function WalletAssetsTable(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { wallet  } = props;
    const isMobile = (0,utils/* useMatchXS */.IN)();
    const classes = (0,shared_src.useStylesExtends)(WalletAssetsTable_useStyles({
        isMobile
    }), props);
    const LABELS = [
        t('wallet_assets'),
        t('wallet_price'),
        t('wallet_balance'),
        t('wallet_value'),
        ...isMobile ? [] : [
            ''
        ], 
    ];
    const erc20Tokens = (0,web3_shared_src/* useTrustedERC20Tokens */.du_)();
    const { value: detailedTokens , error: detailedTokensError , loading: detailedTokensLoading , retry: detailedTokensRetry ,  } = (0,web3_shared_src/* useAssets */.LiV)(erc20Tokens);
    const [more, setMore] = (0,react.useState)(false);
    if (detailedTokensError) return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        sx: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                color: "textSecondary",
                children: "No token found."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                sx: {
                    marginTop: 1
                },
                variant: "text",
                onClick: ()=>detailedTokensRetry()
                ,
                children: "Retry"
            })
        ]
    }));
    if (!detailedTokens.length) return null;
    const viewDetailedTokens = detailedTokens.filter((x)=>{
        var ref;
        return (0,web3_shared_src/* isGreaterThan */.T1o)(((ref = x.value) === null || ref === void 0 ? void 0 : ref[web3_shared_src/* CurrencyType.USD */.V2A.USD]) || '0', MIN_VALUE) || x.token.type === web3_shared_src/* EthereumTokenType.Native */.Drc.Native;
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                className: classes.container,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Table/* default */.Z, {
                    component: "table",
                    size: "medium",
                    stickyHeader: true,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableHead/* default */.Z, {
                            className: classes.head,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                                children: LABELS.map((x, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                        className: classnames_default()(classes.head, classes.cell),
                                        align: i === 0 ? 'left' : 'right',
                                        children: x
                                    }, i)
                                )
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: detailedTokensLoading ? Array.from({
                                length: 3
                            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                                    className: classes.cell,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                                animation: "wave",
                                                variant: "rectangular",
                                                width: "100%",
                                                height: 30
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                                animation: "wave",
                                                variant: "rectangular",
                                                width: "100%",
                                                height: 30
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                                animation: "wave",
                                                variant: "rectangular",
                                                width: "100%",
                                                height: 30
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                                animation: "wave",
                                                variant: "rectangular",
                                                width: "100%",
                                                height: 30
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                                                animation: "wave",
                                                variant: "rectangular",
                                                width: "100%",
                                                height: 30
                                            })
                                        })
                                    ]
                                }, i)
                            ) : (more ? detailedTokens : viewDetailedTokens).map((y, idx)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ViewDetailed, {
                                    asset: y,
                                    wallet: wallet
                                }, idx)
                            )
                        })
                    ]
                })
            }),
            viewDetailedTokens.length < detailedTokens.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.lessButton,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "small",
                    onClick: ()=>{
                        setMore(!more);
                    },
                    children: more ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandLess/* default */.Z, {
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                    })
                })
            }) : null
        ]
    }));
} //#endregion

// EXTERNAL MODULE: ./src/plugins/Wallet/messages.ts
var Wallet_messages = __webpack_require__(49269);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/TablePagination/TablePagination.js + 2 modules
var TablePagination = __webpack_require__(78816);
// EXTERNAL MODULE: ./src/plugins/Wallet/types/index.ts + 3 modules
var types = __webpack_require__(80850);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/TransactionList/Record.tsx






const Record_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center'
        },
        direction: {
            marginLeft: theme.spacing(0.5),
            marginRight: theme.spacing(0.5)
        },
        amount: {
            marginRight: theme.spacing(0.5)
        },
        symbol: {
            marginRight: theme.spacing(0.5)
        },
        receive: {
            color: '#00c087'
        }
    })
);
const Record = ({ pair  })=>{
    const { classes: styles  } = Record_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
        component: "section",
        variant: "body2",
        className: classnames_default()(styles.root, {
            [styles.receive]: pair.direction === 'receive'
        }),
        title: pair.name,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.TokenIcon, {
                address: pair.address,
                logoURI: pair.logoURI
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: styles.direction,
                children: pair.direction === types/* DebankTransactionDirection.SEND */.Ej.SEND || pair.direction === types/* ZerionTransactionDirection.OUT */.so.OUT ? '-' : '+'
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: styles.amount,
                children: pair.amount.toFixed(4)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: styles.symbol,
                children: pair.symbol
            })
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/TransactionList/Row.tsx









const Row_useStyles = (0,src/* makeStyles */.ZL)()({
    failed: {
        opacity: 0.3
    },
    hidden: {
        visibility: 'hidden'
    },
    overflow: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    row: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)'
    }
});
const Row = ({ transaction , chainId  })=>{
    var ref, ref1;
    const { classes: styles  } = Row_useStyles();
    const { t  } = (0,utils/* useI18N */.M1)();
    const chainDetailed = (0,web3_shared_src/* useChainDetailed */.K1)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        component: "div",
        className: classnames_default()({
            [styles.failed]: transaction.failed
        }),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                component: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "textSecondary",
                        variant: "body2",
                        children: transaction.timeAt.toLocaleString()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Address, {
                        chainId: chainId,
                        mode: "tx",
                        id: transaction.id
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                component: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: styles.overflow,
                        color: "textSecondary",
                        children: transaction.type
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Address, {
                        chainId: chainId,
                        mode: "address",
                        id: transaction.toAddress
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                component: "div",
                children: transaction.pairs.map((pair, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Record, {
                        pair: pair
                    }, index)
                )
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                align: "right",
                component: "div",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classnames_default()({
                            [styles.hidden]: (0,lodash.isNil)(transaction.gasFee)
                        }),
                        color: "textSecondary",
                        children: t('gas_fee')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classnames_default()({
                            [styles.hidden]: (0,lodash.isNil)(transaction.gasFee)
                        }),
                        variant: "body2",
                        children: [
                            (ref = transaction.gasFee) === null || ref === void 0 ? void 0 : ref.eth.toFixed(4),
                            " ",
                            chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.nativeCurrency.symbol
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classnames_default()({
                            [styles.hidden]: (0,lodash.isNil)(transaction.gasFee)
                        }),
                        color: "textSecondary",
                        variant: "body2",
                        children: [
                            (ref1 = transaction.gasFee) === null || ref1 === void 0 ? void 0 : ref1.usd.toFixed(2),
                            " USD"
                        ]
                    })
                ]
            })
        ]
    }));
};
const Address = ({ id , mode , chainId  })=>{
    const href = dist_default()((0,web3_shared_src/* resolveLinkOnExplorer */.CSY)(chainId), '/:mode/:id', {
        mode,
        id
    });
    return id ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link_Link/* default */.Z, {
        target: id,
        href: href,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: id === null || id === void 0 ? void 0 : id.slice(0, 5)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: "..."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: id === null || id === void 0 ? void 0 : id.slice(id.length - 5)
            })
        ]
    }) : null;
};

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/TransactionList/index.tsx







const TransactionList_useStyles = (0,src/* makeStyles */.ZL)()({
    fixed: {
        height: 'calc(100% - 52px)'
    }
});
function TransactionList({ transactionType  }) {
    const { classes: styles  } = TransactionList_useStyles();
    const chainId = (0,web3_shared_src/* useChainId */.xxU)();
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const [page, setPage] = (0,react.useState)(0);
    const { value ={
        transactions: [],
        hasNextPage: false
    } , loading: transactionsLoading , error: transactionsError , retry: transactionsRetry ,  } = (0,web3_shared_src/* useTransactions */.nCS)(account, page);
    const { transactions =[] , hasNextPage  } = value;
    const dataSource = (0,react.useMemo)(()=>{
        return transactions.filter(({ transactionType: type  })=>transactionType === web3_shared_src/* FilterTransactionType.ALL */.slS.ALL ? true : type === transactionType
        );
    }, [
        transactions,
        transactions.length,
        transactionType
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPage(0);
    }, [
        transactionType,
        account,
        chainId
    ]);
    if (transactionsLoading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            children: Array.from({
                length: 3
            }).fill(0).map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(TableRow/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                            animation: "wave",
                            variant: "rectangular",
                            width: "100%",
                            height: 30
                        })
                    })
                }, i)
            )
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                className: styles.fixed,
                children: transactionsError || dataSource.length === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    sx: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            color: "textSecondary",
                            children: "No transaction found."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            sx: {
                                marginTop: 1
                            },
                            variant: "text",
                            onClick: ()=>transactionsRetry()
                            ,
                            children: "Retry"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                        children: dataSource.map((transaction)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Row, {
                                chainId: chainId,
                                transaction: transaction
                            }, transaction.id)
                        )
                    })
                })
            }),
            !(page === 0 && dataSource.length === 0) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                count: -1,
                component: "div",
                onPageChange: ()=>{
                },
                page: page,
                rowsPerPage: 30,
                rowsPerPageOptions: [
                    30
                ],
                labelDisplayedRows: ()=>null
                ,
                backIconButtonProps: {
                    onClick: ()=>setPage((prev)=>prev - 1
                        )
                    ,
                    size: 'small',
                    disabled: page === 0
                },
                nextIconButtonProps: {
                    onClick: ()=>setPage((prev)=>prev + 1
                        )
                    ,
                    disabled: !hasNextPage,
                    size: 'small'
                }
            }) : null
        ]
    }));
}

// EXTERNAL MODULE: ./src/extension/options-page/DashboardComponents/CollectibleList/index.tsx + 2 modules
var CollectibleList = __webpack_require__(659);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/WalletContent.tsx





















const WalletContent_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            '&> *': {
                flex: '0 0 auto',
                overflow: 'auto'
            }
        },
        alert: {
            marginTop: theme.spacing(2)
        },
        caption: {
            padding: theme.spacing(1.5, 0)
        },
        header: {
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        content: {
            flex: 1
        },
        footer: {
            margin: theme.spacing(1)
        },
        title: {
            flex: 1,
            paddingLeft: theme.spacing(1)
        },
        addButton: {
            color: theme.palette.primary.main
        },
        moreButton: {
            color: theme.palette.text.primary
        },
        assetsTable: {
            flex: 1
        },
        checkIcon: {
            marginLeft: theme.spacing(1)
        }
    })
);
const WalletContent = /*#__PURE__*/ (0,react.forwardRef)(({ wallet  }, ref)=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = WalletContent_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const location = (0,react_router/* useLocation */.TH)();
    const { classes: color  } = (0,utils/* useColorStyles */.Nh)();
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const chainDetailed = (0,web3_shared_src/* useChainDetailed */.K1)();
    const [transactionType, setTransactionType] = (0,react.useState)(web3_shared_src/* FilterTransactionType.ALL */.slS.ALL);
    const [addToken, , openAddToken] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletAddERC20TokenDialog */.$X);
    const [walletBackup, , openWalletBackup] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletBackupDialog */.hN);
    const [walletDelete, , openWalletDelete] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletDeleteConfirmDialog */.tR);
    const [addAsset, , openAddAsset] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletAddERC721TokenDialog */.ll);
    const { setDialog: setWalletRenameDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.walletRenameDialogUpdated */.R.events.walletRenameDialogUpdated);
    const [menu, openMenu] = (0,utils/* useMenu */.H9)([
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>{
                setWalletRenameDialog({
                    open: true,
                    wallet
                });
            },
            children: t('rename')
        }, "rename"),
        wallet.hasPrivateKey ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>openWalletBackup({
                    wallet
                })
            ,
            children: t('backup')
        }, "backup") : null,
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: ()=>openWalletDelete({
                    wallet
                })
            ,
            className: color.error,
            "data-testid": "delete_button",
            children: t('delete')
        }, "delete"), 
    ]);
    const [transactionTypeMenu, openTransactionTypeMenu] = (0,utils/* useMenu */.H9)([
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>setTransactionType(web3_shared_src/* FilterTransactionType.ALL */.slS.ALL)
            ,
            children: [
                t('all_transactions'),
                transactionType === web3_shared_src/* FilterTransactionType.ALL */.slS.ALL ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                    className: classes.checkIcon,
                    fontSize: "small"
                }) : null
            ]
        }, "all"),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>setTransactionType(web3_shared_src/* FilterTransactionType.SEND */.slS.SEND)
            ,
            children: [
                t('sent_transactions'),
                transactionType === web3_shared_src/* FilterTransactionType.SEND */.slS.SEND ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                    className: classes.checkIcon,
                    fontSize: "small"
                }) : null
            ]
        }, "send"),
        /*#__PURE__*/ (0,jsx_runtime.jsxs)(MenuItem/* default */.Z, {
            onClick: ()=>setTransactionType(web3_shared_src/* FilterTransactionType.RECEIVE */.slS.RECEIVE)
            ,
            children: [
                t('received_transactions'),
                transactionType === web3_shared_src/* FilterTransactionType.RECEIVE */.slS.RECEIVE ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Check/* default */.Z, {
                    className: classes.checkIcon,
                    fontSize: "small"
                }) : null
            ]
        }, "receive"), 
    ]);
    //#region remote controlled buy dialog
    const { setDialog: setBuyDialog  } = (0,shared_src.useRemoteControlledDialog)(Transak_messages/* PluginTransakMessages.buyTokenDialogUpdated */.l.buyTokenDialogUpdated);
    //#endregion
    //#region tab
    const tab = new URLSearchParams(location.search).get('tab');
    const [tabIndex, setTabIndex] = (0,react.useState)(tab && [
        Route/* DashboardWalletRoute.Tokens */.p.Tokens,
        Route/* DashboardWalletRoute.Collectibles */.p.Collectibles,
        Route/* DashboardWalletRoute.Transactions */.p.Transactions, 
    ].includes(tab) ? Number(tab) : 0);
    const onTabChange = (0,react.useCallback)((_, newTabIndex)=>{
        setTabIndex(newTabIndex);
        const params = new URLSearchParams();
        params.append('tab', newTabIndex.toString());
        history.push({
            search: params.toString()
        });
    }, [
        history
    ]);
    //#endregion
    const content = (0,react.useMemo)(()=>{
        switch(tabIndex){
            case 0:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(WalletAssetsTable, {
                    classes: {
                        container: classes.assetsTable
                    },
                    wallet: wallet
                }));
            case 1:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CollectibleList/* CollectibleList */.OO, {
                    wallet: wallet
                }));
            case 2:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TransactionList, {
                    transactionType: transactionType
                }));
            default:
                return null;
        }
    }, [
        tabIndex,
        classes,
        wallet,
        transactionType
    ]);
    if (!chainIdValid) return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: classes.root,
        ref: ref,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Alert/* default */.Z, {
            className: classes.alert,
            severity: "warning",
            children: t('plugin_wallet_wrong_network_tip')
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ref: ref,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.caption,
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Tabs/* default */.Z, {
                            value: tabIndex,
                            indicatorColor: "primary",
                            textColor: "primary",
                            onChange: onTabChange,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    label: t('dashboard_tab_assets')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    label: t('dashboard_tab_collectibles')
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                    label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                                        sx: {
                                            display: 'flex',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            t('dashboard_tab_transactions'),
                                            tabIndex === 2 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                                sx: {
                                                    color: 'inherit',
                                                    marginLeft: 0.5
                                                },
                                                size: "small",
                                                onClick: openTransactionTypeMenu,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ExpandMore/* default */.Z, {
                                                })
                                            }) : null
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end'
                        },
                        children: [
                            !xsMatched && tabIndex === 0 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classes.addButton,
                                variant: "text",
                                onClick: ()=>openAddToken({
                                        wallet
                                    })
                                ,
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                                }),
                                children: t('add_token')
                            }) : null,
                            !xsMatched && tabIndex === 1 ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                className: classes.addButton,
                                variant: "text",
                                onClick: ()=>openAddAsset({
                                        wallet
                                    })
                                ,
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
                                }),
                                children: t('add_asset')
                            }) : null,
                            !xsMatched && utils/* Flags.transak_enabled */.vU.transak_enabled ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: ()=>{
                                    setBuyDialog({
                                        open: true,
                                        address: wallet.address,
                                        code: chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.nativeCurrency.symbol
                                    });
                                },
                                startIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MonetizationOnOutlined/* default */.Z, {
                                }),
                                children: t('buy_now')
                            }) : null,
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                className: classes.moreButton,
                                size: "small",
                                onClick: openMenu,
                                "data-testid": "setting_icon",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreVertOutlined/* default */.Z, {
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.content,
                children: content
            }),
            menu,
            transactionTypeMenu,
            addToken,
            addAsset,
            walletBackup,
            walletDelete
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/InfoOutlined.js
var InfoOutlined = __webpack_require__(40548);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/AccountBalanceWallet.js
var AccountBalanceWallet = __webpack_require__(54165);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/FiberManualRecord.js
var FiberManualRecord = __webpack_require__(39402);
// EXTERNAL MODULE: ./src/components/shared/WalletIcon.tsx
var WalletIcon = __webpack_require__(46173);
;// CONCATENATED MODULE: ./src/web3/UI/EthereumAccountButton.tsx













const EthereumAccountButton_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        root: {
            display: 'inline-flex',
            alignItems: 'center',
            borderRadius: 16,
            paddingLeft: theme.spacing(2),
            backgroundColor: theme.palette.background.default
        },
        balance: {
            marginRight: theme.spacing(1)
        },
        button: {
            borderRadius: 16,
            backgroundColor: theme.palette.background.paper
        },
        buttonTransparent: {
            backgroundColor: 'transparent'
        },
        chainIcon: {
            fontSize: 18,
            width: 18,
            height: 18,
            marginLeft: theme.spacing(0.5)
        }
    };
});
function EthereumAccountButton(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(EthereumAccountButton_useStyles(), props);
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const chainColor = (0,web3_shared_src/* useChainColor */.x56)();
    const chainIdValid = (0,web3_shared_src/* useChainIdValid */.asy)();
    const chainDetailed = (0,web3_shared_src/* useChainDetailed */.K1)();
    const { value: balance = '0'  } = (0,web3_shared_src/* useNativeTokenBalance */.hjz)();
    const selectedWallet = (0,web3_shared_src/* useWallet */.Osb)();
    const { openDialog: openSelectWalletDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.walletStatusDialogUpdated */.R.events.walletStatusDialogUpdated);
    const { openDialog: openSelectProviderDialog  } = (0,shared_src.useRemoteControlledDialog)(Wallet_messages/* WalletMessages.events.selectProviderDialogUpdated */.R.events.selectProviderDialogUpdated);
    const onOpen = (0,react.useCallback)(()=>{
        if (account && selectedWallet) openSelectWalletDialog();
        else openSelectProviderDialog();
    }, [
        account,
        openSelectWalletDialog,
        openSelectProviderDialog
    ]);
    if (utils/* Flags.has_native_nav_bar */.vU.has_native_nav_bar) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(AccountBalanceWallet/* default */.Z, {
        onClick: onOpen
    }));
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: props.disableNativeToken ? '' : classes.root,
        children: [
            !props.disableNativeToken ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.balance,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(shared_src.FormattedBalance, {
                    value: balance,
                    decimals: 18,
                    significant: 4,
                    symbol: "ETH"
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                className: classnames_default()(classes.button, props.disableNativeToken ? classes.buttonTransparent : ''),
                variant: "outlined",
                startIcon: account && chainIdValid ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletIcon/* WalletIcon */.o, {
                    size: 18,
                    badgeSize: 9
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(InfoOutlined/* default */.Z, {
                    fontSize: "medium"
                }),
                color: "primary",
                onClick: onOpen,
                ...props.ButtonProps,
                children: [
                    account ? chainIdValid ? `${(ref = selectedWallet === null || selectedWallet === void 0 ? void 0 : selectedWallet.name) !== null && ref !== void 0 ? ref : ''} (${(0,web3_shared_src/* formatEthereumAddress */.j8w)(account, 4)})` : t('plugin_wallet_wrong_network') : t('plugin_wallet_on_connect'),
                    account && chainIdValid && (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.network) !== 'mainnet' ? /*#__PURE__*/ (0,jsx_runtime.jsx)(FiberManualRecord/* default */.Z, {
                        className: classes.chainIcon,
                        style: {
                            color: chainColor
                        }
                    }) : null
                ]
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/web3/UI/EthereumStatusBar.tsx





const EthereumStatusBar_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        chainChip: {
            margin: theme.spacing(0, 1)
        },
        accountChip: {
        }
    })
);
function EthereumStatusBar(props) {
    const { disableNativeToken =false , BoxProps , AccountButtonProps  } = props;
    const classes = (0,shared_src.useStylesExtends)(EthereumStatusBar_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.root,
        ...BoxProps,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumAccountButton, {
            classes: {
                root: classes.accountChip
            },
            disableNativeToken: disableNativeToken,
            ButtonProps: props.AccountButtonProps
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Wallets.tsx














//#region theme
const walletsTheme = (0,utils/* extendsTheme */.Ql)((theme)=>({
        components: {
            MuiIconButton: {
                styleOverrides: {
                    root: {
                        color: theme.palette.text.primary
                    }
                }
            },
            MuiListItemIcon: {
                styleOverrides: {
                    root: {
                        justifyContent: 'center',
                        minWidth: 'unset',
                        marginRight: theme.spacing(2)
                    }
                }
            },
            MuiListItemSecondaryAction: {
                styleOverrides: {
                    root: theme.typography.body1
                }
            }
        }
    })
);
//#endregion
const Wallets_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            flexDirection: 'column',
            flex: '0 0 100%',
            height: '100%'
        },
        content: {
            width: '100%',
            overflow: 'auto',
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column'
        },
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        caption: {
            display: 'flex',
            alignItems: 'center'
        },
        title: {
            marginLeft: theme.spacing(1)
        }
    })
);
function DashboardWalletsRouter() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Wallets_useStyles();
    const { create , error  } = (0,utils/* useQueryParams */.Kx)([
        'create',
        'error',
        'rpid'
    ]);
    const [walletImport, openWalletImport] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletImportDialog */.NN);
    const [walletError, openWalletError] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletErrorDialog */.zt);
    const [addToken, , openAddToken] = (0,Base/* useModal */.dd)(Wallet/* DashboardWalletAddERC20TokenDialog */.$X);
    const selectedWallet = (0,web3_shared_src/* useWallet */.Osb)();
    //#region import wallet
    const onImport = (0,react.useCallback)(()=>openWalletImport()
    , []);
    //#endregion
    //#region open dialogs externally
    // show error dialog
    (0,react.useEffect)(()=>{
        if (error) openWalletError();
    }, [
        error,
        openWalletError
    ]);
    // show create dialog
    (0,react.useEffect)(()=>{
        if (create) onImport();
    }, [
        create,
        onImport
    ]);
    //#endregion
    //#region right icons from mobile devices
    const floatingButtons = [
        {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Add/* default */.Z, {
            }),
            handler: ()=>{
                if (selectedWallet) openAddToken({
                    wallet: selectedWallet
                });
                else openWalletImport();
            }
        }, 
    ];
    if (utils/* Flags.has_native_nav_bar */.vU.has_native_nav_bar) floatingButtons.unshift({
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumStatusBar, {
        }),
        handler: ()=>undefined
    });
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardRouterContainer, {
        empty: !selectedWallet,
        title: t('my_wallets'),
        actions: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(EthereumStatusBar, {
                disableNativeToken: true,
                BoxProps: {
                    sx: {
                        justifyContent: 'flex-end'
                    }
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                variant: "contained",
                onClick: onImport,
                endIcon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AddCircle/* default */.Z, {
                }),
                "data-testid": "create_button",
                children: t('plugin_wallet_on_create')
            }), 
        ],
        floatingButtons: floatingButtons,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
                theme: walletsTheme,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.root,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.content,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: classes.wrapper,
                            children: selectedWallet ? /*#__PURE__*/ (0,jsx_runtime.jsx)(WalletContent, {
                                wallet: selectedWallet
                            }) : null
                        })
                    })
                })
            }),
            addToken,
            walletImport,
            walletError
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Clear.js
var Clear = __webpack_require__(78874);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(92617);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-virtualized-auto-sizer@1.0.5_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-virtualized-auto-sizer/dist/index.esm.js


/**
 * Detect Element Resize.
 * https://github.com/sdecima/javascript-detect-element-resize
 * Sebastian Decima
 *
 * Forked from version 0.5.3; includes the following modifications:
 * 1) Guard against unsafe 'window' and 'document' references (to support SSR).
 * 2) Defer initialization code via a top-level function wrapper (to support SSR).
 * 3) Avoid unnecessary reflows by not measuring size for scroll events bubbling from children.
 * 4) Add nonce for style element.
 **/

function createDetectElementResize(nonce) {
  // Check `document` and `window` in case of server-side rendering
  var _window;
  if (typeof window !== 'undefined') {
    _window = window;
  } else if (typeof self !== 'undefined') {
    _window = self;
  } else {
    _window = __webpack_require__.g;
  }

  var attachEvent = typeof document !== 'undefined' && document.attachEvent;

  if (!attachEvent) {
    var requestFrame = function () {
      var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
        return _window.setTimeout(fn, 20);
      };
      return function (fn) {
        return raf(fn);
      };
    }();

    var cancelFrame = function () {
      var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
      return function (id) {
        return cancel(id);
      };
    }();

    var resetTriggers = function resetTriggers(element) {
      var triggers = element.__resizeTriggers__,
          expand = triggers.firstElementChild,
          contract = triggers.lastElementChild,
          expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + 'px';
      expandChild.style.height = expand.offsetHeight + 1 + 'px';
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };

    var checkTriggers = function checkTriggers(element) {
      return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
    };

    var scrollListener = function scrollListener(e) {
      // Don't measure (which forces) reflow for scrolls that happen inside of children!
      if (e.target.className && typeof e.target.className.indexOf === 'function' && e.target.className.indexOf('contract-trigger') < 0 && e.target.className.indexOf('expand-trigger') < 0) {
        return;
      }

      var element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function () {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function (fn) {
            fn.call(element, e);
          });
        }
      });
    };

    /* Detect CSS Animations support to detect element display/re-attach */
    var animation = false,
        keyframeprefix = '',
        animationstartevent = 'animationstart',
        domPrefixes = 'Webkit Moz O ms'.split(' '),
        startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
        pfx = '';
    {
      var elm = document.createElement('fakeelement');
      if (elm.style.animationName !== undefined) {
        animation = true;
      }

      if (animation === false) {
        for (var i = 0; i < domPrefixes.length; i++) {
          if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
            pfx = domPrefixes[i];
            keyframeprefix = '-' + pfx.toLowerCase() + '-';
            animationstartevent = startEvents[i];
            animation = true;
            break;
          }
        }
      }
    }

    var animationName = 'resizeanim';
    var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
    var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
  }

  var createStyles = function createStyles(doc) {
    if (!doc.getElementById('detectElementResize')) {
      //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
      var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
          head = doc.head || doc.getElementsByTagName('head')[0],
          style = doc.createElement('style');

      style.id = 'detectElementResize';
      style.type = 'text/css';

      if (nonce != null) {
        style.setAttribute('nonce', nonce);
      }

      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }
  };

  var addResizeListener = function addResizeListener(element, fn) {
    if (attachEvent) {
      element.attachEvent('onresize', fn);
    } else {
      if (!element.__resizeTriggers__) {
        var doc = element.ownerDocument;
        var elementStyle = _window.getComputedStyle(element);
        if (elementStyle && elementStyle.position == 'static') {
          element.style.position = 'relative';
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement('div')).className = 'resize-triggers';
        var expandTrigger = doc.createElement('div');
        expandTrigger.className = 'expand-trigger';
        expandTrigger.appendChild(doc.createElement('div'));
        var contractTrigger = doc.createElement('div');
        contractTrigger.className = 'contract-trigger';
        element.__resizeTriggers__.appendChild(expandTrigger);
        element.__resizeTriggers__.appendChild(contractTrigger);
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener('scroll', scrollListener, true);

        /* Listen for a css animation to detect element display/re-attach */
        if (animationstartevent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e) {
            if (e.animationName == animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };

  var removeResizeListener = function removeResizeListener(element, fn) {
    if (attachEvent) {
      element.detachEvent('onresize', fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener('scroll', scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationstartevent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e) {
          // Preact compat; see developit/preact-compat/issues/228
        }
      }
    }
  };

  return {
    addResizeListener: addResizeListener,
    removeResizeListener: removeResizeListener
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AutoSizer = function (_React$PureComponent) {
  inherits(AutoSizer, _React$PureComponent);

  function AutoSizer() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, AutoSizer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AutoSizer.__proto__ || Object.getPrototypeOf(AutoSizer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      height: _this.props.defaultHeight || 0,
      width: _this.props.defaultWidth || 0
    }, _this._onResize = function () {
      var _this$props = _this.props,
          disableHeight = _this$props.disableHeight,
          disableWidth = _this$props.disableWidth,
          onResize = _this$props.onResize;


      if (_this._parentNode) {
        // Guard against AutoSizer component being removed from the DOM immediately after being added.
        // This can result in invalid style values which can result in NaN values if we don't handle them.
        // See issue #150 for more context.

        var _height = _this._parentNode.offsetHeight || 0;
        var _width = _this._parentNode.offsetWidth || 0;

        var _style = window.getComputedStyle(_this._parentNode) || {};
        var paddingLeft = parseInt(_style.paddingLeft, 10) || 0;
        var paddingRight = parseInt(_style.paddingRight, 10) || 0;
        var paddingTop = parseInt(_style.paddingTop, 10) || 0;
        var paddingBottom = parseInt(_style.paddingBottom, 10) || 0;

        var newHeight = _height - paddingTop - paddingBottom;
        var newWidth = _width - paddingLeft - paddingRight;

        if (!disableHeight && _this.state.height !== newHeight || !disableWidth && _this.state.width !== newWidth) {
          _this.setState({
            height: _height - paddingTop - paddingBottom,
            width: _width - paddingLeft - paddingRight
          });

          onResize({ height: _height, width: _width });
        }
      }
    }, _this._setRef = function (autoSizer) {
      _this._autoSizer = autoSizer;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(AutoSizer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var nonce = this.props.nonce;

      if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
        // Delay access of parentNode until mount.
        // This handles edge-cases where the component has already been unmounted before its ref has been set,
        // As well as libraries like react-lite which have a slightly different lifecycle.
        this._parentNode = this._autoSizer.parentNode;

        // Defer requiring resize handler in order to support server-side rendering.
        // See issue #41
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

        this._onResize();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._detectElementResize && this._parentNode) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          disableHeight = _props.disableHeight,
          disableWidth = _props.disableWidth,
          style = _props.style;
      var _state = this.state,
          height = _state.height,
          width = _state.width;

      // Outer div should not force width/height since that may prevent containers from shrinking.
      // Inner component should overflow and use calculated width/height.
      // See issue #68 for more information.

      var outerStyle = { overflow: 'visible' };
      var childParams = {};

      // Avoid rendering children before the initial measurements have been collected.
      // At best this would just be wasting cycles.
      var bailoutOnChildren = false;

      if (!disableHeight) {
        if (height === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.height = 0;
        childParams.height = height;
      }

      if (!disableWidth) {
        if (width === 0) {
          bailoutOnChildren = true;
        }
        outerStyle.width = 0;
        childParams.width = width;
      }

      return (0,react.createElement)(
        'div',
        {
          className: className,
          ref: this._setRef,
          style: _extends({}, outerStyle, style) },
        !bailoutOnChildren && children(childParams)
      );
    }
  }]);
  return AutoSizer;
}(react.PureComponent);

AutoSizer.defaultProps = {
  onResize: function onResize() {},
  disableHeight: false,
  disableWidth: false,
  style: {}
};

/* harmony default export */ const index_esm = (AutoSizer);

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Contact/Contact.tsx









const Contact_useStyles = (0,src/* makeStyles */.ZL)()({
    avatar: {
        width: '64px',
        height: '64px'
    }
});
function DashboardContactDialog(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Contact_useStyles();
    const { contact , onUpdated  } = props.ComponentProps;
    const [nickname, setNickname] = (0,react.useState)(contact.nickname);
    const [avatarURL, setAvatarURL] = (0,react.useState)(contact.avatar);
    const onSubmit = (0,Base/* useSnackbarCallback */.iD)(()=>service/* default.Identity.updateProfileInfo */.ZP.Identity.updateProfileInfo(contact.identifier, {
            nickname,
            avatarURL,
            forceUpdateAvatar: true
        })
    , [
        nickname,
        avatarURL
    ], ()=>{
        props.onClose();
        onUpdated();
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* Avatar */.qE, {
                className: classes.avatar,
                person: contact
            }),
            primary: contact.nickname || contact.identifier.userId,
            content: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: t('internal_id'),
                        value: contact.identifier.toText(),
                        disabled: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: t('nickname'),
                        value: nickname,
                        onChange: (e)=>setNickname(e.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: t('new_avatar_url'),
                        placeholder: t('new_avatar_url_placeholder'),
                        value: avatarURL,
                        onChange: (e)=>setAvatarURL(e.target.value)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                        label: t('fingerprint'),
                        defaultValue: (ref = contact.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint,
                        disabled: true
                    })
                ]
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SpacedButtonGroup/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        onClick: onSubmit,
                        children: t('save')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Contact/DeleteConfirm.tsx








function DashboardContactDeleteConfirmDialog(props) {
    const { contact , onDeleted  } = props.ComponentProps;
    const { t  } = (0,utils/* useI18N */.M1)();
    // TODO!: delete profile breaks database
    const onDelete = (0,Base/* useSnackbarCallback */.iD)(// ! directly destroy parent dialog is NG so close self first
    ()=>service/* default.Identity.removeProfile */.ZP.Identity.removeProfile(contact.identifier).then(props.onClose)
    , [
        contact
    ], ()=>{
        props.onClose();
        setTimeout(()=>onDeleted()
        , 0);
    });
    var _nickname;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(user_minus/* default */.Z, {
            }),
            iconColor: "#F4637D",
            primary: t('delete_contact'),
            secondary: t('delete_contact_confirmation', {
                contact: (_nickname = contact.nickname) !== null && _nickname !== void 0 ? _nickname : contact.identifier.userId
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SpacedButtonGroup/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                        variant: "contained",
                        color: "danger",
                        onClick: onDelete,
                        children: t('ok')
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        color: "inherit",
                        onClick: props.onClose,
                        children: t('cancel')
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/search.js
var search = __webpack_require__(58814);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Contact/Search.tsx








function DashboardContactSearchDialog(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { onSearch  } = props.ComponentProps;
    const [text, setText] = (0,react.useState)('');
    const searchText = ()=>{
        if (!text) return;
        props.onClose();
        onSearch(text);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "small",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(search/* default */.Z, {
            }),
            iconColor: "#5FDD97",
            primary: t('search_contact'),
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    autoFocus: true,
                    required: true,
                    label: t('keywords'),
                    value: text,
                    onChange: (e)=>setText(e.target.value)
                    ,
                    onKeyDown: (e)=>{
                        if (e.key === 'Enter') {
                            e.preventDefault();
                            searchText();
                        }
                    },
                    variant: "outlined"
                })
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(SpacedButtonGroup/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    disabled: !text,
                    onClick: searchText,
                    children: t('search')
                })
            })
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Contact/index.tsx




;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/ContactLine.tsx








const ContactLine_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        line: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            padding: theme.spacing(2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        avatar: {
            width: '32px',
            height: '32px'
        },
        user: {
            color: theme.palette.text.primary,
            fontWeight: 500,
            margin: theme.spacing(0, 2),
            flex: '0 1 auto',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
        },
        provider: {
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                flex: 1
            }
        },
        fingerprint: {
            color: theme.palette.text.secondary,
            marginLeft: 'auto',
            marginRight: 0,
            fontFamily: 'var(--monospace)'
        },
        more: {
            marginLeft: theme.spacing(1),
            color: theme.palette.text.primary
        }
    })
);
function ContactLine(props) {
    var ref;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = ContactLine_useStyles();
    const { contact , onUpdated , onDeleted , ...rest } = props;
    const [contactDialog, openContactDialog] = (0,Base/* useModal */.dd)(DashboardContactDialog, {
        contact,
        onUpdated
    });
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    const [deleteContactConfirmDialog, openDeleteContactConfirmDialog] = (0,Base/* useModal */.dd)(DashboardContactDeleteConfirmDialog, {
        contact,
        onDeleted
    });
    const [menu, openMenu] = (0,utils/* useMenu */.H9)([
        /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
            onClick: openDeleteContactConfirmDialog,
            children: t('delete')
        })
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                selected: false,
                onClick: openContactDialog,
                className: classes.line,
                ...rest,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(utils/* Avatar */.qE, {
                        className: classes.avatar,
                        person: contact
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.user,
                        children: contact.nickname || contact.identifier.userId
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                        className: classes.provider,
                        children: [
                            "@",
                            contact.identifier.network
                        ]
                    }),
                    xsMatched ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.fingerprint,
                        component: "code",
                        children: (ref = contact.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                        className: classes.more,
                        size: "small",
                        onClick: (e)=>{
                            e.stopPropagation();
                            openMenu(e);
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MoreHoriz/* default */.Z, {
                        })
                    })
                ]
            }),
            menu,
            contactDialog,
            deleteContactConfirmDialog
        ]
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-window@1.8.6_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-window/dist/index.esm.js
var dist_index_esm = __webpack_require__(90882);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useMap.js
var useMap = __webpack_require__(28826);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(36198);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Contacts.tsx

















const Contacts_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        title: {
            margin: theme.spacing(3, 0),
            color: theme.palette.text.secondary,
            [theme.breakpoints.down('sm')]: {
                margin: theme.spacing(2, 0)
            }
        },
        progress: {
            width: '1.5em',
            height: '1.5em',
            marginRight: '0.75em'
        },
        list: {
            flex: 1,
            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(-2),
                marginRight: theme.spacing(-2)
            }
        }
    })
);
async function* queryProfilePaged(query, size = 20) {
    if (query === '') query = undefined;
    const values = [];
    while(true){
        var ref;
        const current = await service/* default.Identity.queryProfilePaged */.ZP.Identity.queryProfilePaged({
            query,
            after: (ref = (0,lodash.last)(values)) === null || ref === void 0 ? void 0 : ref.identifier
        }, size);
        values.push(...current);
        if (current.length < size) break;
        yield values;
    }
    return values;
}
// TODO: support concurrent mode
function createPaged(fetcher, hashArgs) {
    return function usePaged(...InitArgs) {
        const [[query], setQuery] = (0,react.useState)([
            InitArgs
        ]);
        const key = hashArgs(...query);
        const [rec, { get , set , remove  }] = (0,useMap/* default */.Z)({
        });
        const [generator, done, value = [], abort] = get(key) || (()=>{
            const rec1 = [
                fetcher(...query),
                false,
                [],
                new AbortController()
            ];
            set(key, rec1);
            return rec1;
        })();
        const [{ loading  }, nextPage] = (0,useAsyncFn/* default */.Z)(async ()=>{
            if (done) return;
            const result = await generator.next();
            if (abort.signal.aborted) return;
            set(key, [
                generator,
                !!result.done,
                result.value,
                abort
            ]);
        }, [
            generator,
            done,
            abort
        ]);
        (0,react.useEffect)(()=>void nextPage()
        , [
            nextPage
        ]);
        return {
            done,
            value,
            loading,
            nextPage,
            revalidate: (0,react.useCallback)(()=>{
                remove(key);
                abort.abort();
            }, [
                abort,
                key,
                remove
            ]),
            query,
            setQuery: (0,react.useCallback)((...args)=>setQuery([
                    args
                ])
            , [])
        };
    };
}
const usePagedProfile = createPaged(queryProfilePaged, (x)=>x || ''
);
function DashboardContactsRouter() {
    const { value: items , revalidate: mutate , loading: isPagePending , done: isReachingEnd , nextPage , query: [search] , setQuery: setSearch ,  } = usePagedProfile('');
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Contacts_useStyles();
    const isEmpty = !isPagePending && items.length === 0;
    const [searchUI, setSearchUI] = (0,react.useState)('');
    const [searchContactDialog, , openSearchContactDialog] = (0,Base/* useModal */.dd)(DashboardContactSearchDialog);
    const actions = [
        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
            placeholder: t('search'),
            size: "small",
            value: searchUI,
            onChange: (e)=>{
                setSearchUI(e.target.value);
                setSearch(e.target.value);
            },
            InputProps: {
                endAdornment: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                    size: "small",
                    onClick: ()=>setSearch('')
                    ,
                    children: search ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Clear/* default */.Z, {
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* default */.Z, {
                        htmlColor: src/* MaskColorVar.textPrimary */.ZN.textPrimary
                    })
                })
            }
        }), 
    ];
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(DashboardRouterContainer, {
        title: t('contacts'),
        empty: items.length === 0,
        actions: actions,
        floatingButtons: [
            {
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search/* default */.Z, {
                }),
                handler: ()=>openSearchContactDialog({
                        onSearch: setSearch
                    })
            }, 
        ],
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.title,
                variant: "body2",
                children: t('people_in_database')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
                className: classes.list,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm, {
                    children: (sizeProps)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(dist_index_esm/* FixedSizeList */.t7, {
                            overscanCount: 5,
                            onItemsRendered: (data)=>{
                                if (isEmpty || isReachingEnd) return;
                                if (isPagePending) return;
                                if (data.visibleStopIndex === data.overscanStopIndex) nextPage();
                            },
                            itemSize: 64,
                            itemCount: items.length,
                            ...sizeProps,
                            children: ({ index , style  })=>items[index] ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactLine, {
                                    style: style,
                                    contact: items[index],
                                    onUpdated: mutate,
                                    onDeleted: mutate
                                }, index) : null
                        })
                })
            }),
            searchContactDialog
        ]
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Switch/Switch.js
var Switch = __webpack_require__(59236);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Paper/Paper.js
var Paper = __webpack_require__(40623);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItem/ListItem.js
var ListItem = __webpack_require__(30581);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Description.js
var Description = __webpack_require__(78332);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Fingerprint.js
var Fingerprint = __webpack_require__(90898);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Plugin.tsx









const Plugin_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        logo: {
            fontSize: 30
        },
        section: {
            padding: '26px 0',
            margin: theme.spacing(3, 0),
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(2, 0)
            }
        },
        list: {
            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(-2),
                marginRight: theme.spacing(-2)
            }
        },
        listItemRoot: {
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        listItemText: {
            fontWeight: 500
        }
    })
);
//#region persona create dialog
function DashboardPluginDetailDialog({ ComponentProps , ...rest }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Plugin_useStyles();
    const metaFields = (0,react.useMemo)(()=>{
        if (!(ComponentProps === null || ComponentProps === void 0 ? void 0 : ComponentProps.id) || !(ComponentProps === null || ComponentProps === void 0 ? void 0 : ComponentProps.name)) {
            return [];
        }
        return [
            {
                field: 'id',
                value: ComponentProps.id,
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Fingerprint/* default */.Z, {
                })
            },
            {
                field: 'description',
                value: ComponentProps.description,
                icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Description/* default */.Z, {
                })
            }, 
        ];
    }, [
        ComponentProps === null || ComponentProps === void 0 ? void 0 : ComponentProps.id,
        ComponentProps === null || ComponentProps === void 0 ? void 0 : ComponentProps.description,
        ComponentProps === null || ComponentProps === void 0 ? void 0 : ComponentProps.name
    ]);
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        fullScreen: false,
        ...rest,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: classes.logo,
                children: ComponentProps === null || ComponentProps === void 0 ? void 0 : ComponentProps.icon
            }),
            primary: (ref = ComponentProps === null || ComponentProps === void 0 ? void 0 : ComponentProps.name) !== null && ref !== void 0 ? ref : '-',
            secondary: " ",
            content: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                className: classes.section,
                component: "section",
                elevation: 0,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                    elevation: 0,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(List/* default */.Z, {
                        className: classes.list,
                        disablePadding: true,
                        children: metaFields.map((meta)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
                                classes: {
                                    root: classes.listItemRoot
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                        children: meta.icon
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                        classes: {
                                            primary: classes.listItemText
                                        },
                                        primary: meta.value
                                    })
                                ]
                            }, meta.field)
                        )
                    })
                })
            }),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* DebounceButton */.D0, {
                type: "submit",
                variant: "contained",
                onClick: rest.onClose,
                children: t('ok')
            })
        })
    }));
} //#endregion

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/PluginCard.tsx









const PluginCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        card: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: theme.spacing(2, 3),
            boxShadow: theme.palette.mode === 'dark' ? 'none' : '0px 2px 4px rgba(96, 97, 112, 0.16), 0px 0px 1px rgba(40, 41, 61, 0.04)',
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                marginRight: 0,
                marginBottom: theme.spacing(1)
            }
        },
        info: {
            flexGrow: 1,
            display: 'flex'
        },
        actions: {
            display: 'flex',
            marginTop: theme.spacing(2)
        },
        logoWraper: {
            alignSelf: 'flex-start',
            flexShrink: 0
        },
        logo: {
            width: 36,
            height: 36,
            fontSize: 30
        },
        metas: {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: theme.spacing(3)
        },
        meta: {
            margin: 0,
            marginBottom: theme.spacing(1),
            fontSize: 12,
            color: theme.palette.text.secondary
        },
        header: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme.spacing(3)
        },
        title: {
            flex: '1 1 auto',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            wordBreak: 'break-all',
            whiteSpace: 'nowrap',
            fontWeight: 500
        },
        switch: {
            marginLeft: 'auto'
        }
    })
);
function PluginCard({ id , name , icon , description , enabled , onSwitch , canDisable  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = PluginCard_useStyles();
    const [pluginDetail, openPluginDetail] = (0,Base/* useModal */.dd)(DashboardPluginDetailDialog, {
        id,
        name,
        icon,
        description
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Card/* default */.Z, {
        className: classes.card,
        elevation: 2,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.info,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.logoWraper,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            className: classes.logo,
                            children: icon
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("dl", {
                        className: classes.metas,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dt", {
                                className: classes.meta,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.title,
                                    variant: "h5",
                                    component: "h3",
                                    color: "textPrimary",
                                    children: name
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                className: classes.meta,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: description
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("dd", {
                                className: classes.meta,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    color: "textSecondary",
                                    variant: "body2",
                                    children: [
                                        "ID: ",
                                        id
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.actions,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "outlined",
                        size: "small",
                        onClick: openPluginDetail,
                        children: t('details')
                    }),
                    utils/* Flags.plugin_switch_enabled */.vU.plugin_switch_enabled && canDisable ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
                        className: classes.switch,
                        color: "primary",
                        size: "small",
                        inputProps: {
                            'aria-label': t('enable_or_disable_plugin')
                        },
                        checked: enabled,
                        onChange: ()=>onSwitch()
                    }) : null
                ]
            }),
            pluginDetail
        ]
    }));
};

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(47713);
// EXTERNAL MODULE: ./src/plugin-infra/I18NFieldRender.tsx
var I18NFieldRender = __webpack_require__(29489);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Plugins.tsx








const Plugins_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper
        },
        pluginList: {
            padding: theme.spacing(3, 0),
            margin: 0,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: theme.spacing(3),
            [theme.breakpoints.down('sm')]: {
                display: 'block'
            }
        },
        pluginItem: {
            listStyle: 'none'
        }
    })
);
function DashboardSettingsRouter() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = Plugins_useStyles();
    const plugins = (0,plugin_infra_src/* useRegisteredPlugins */.eu)();
    const field = (0,I18NFieldRender/* usePluginI18NField */.e)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardRouterContainer, {
        title: t('plugins'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("ul", {
            className: classes.pluginList,
            children: plugins.filter((x)=>{
                var ref;
                return !((ref = x.management) === null || ref === void 0 ? void 0 : ref.internal);
            }).map((plugin)=>{
                var ref;
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                    className: classes.pluginItem,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCardContainer, {
                        name: field(plugin.ID, plugin.name),
                        id: plugin.ID,
                        icon: plugin.icon,
                        description: plugin.description ? field(plugin.ID, plugin.description) : '',
                        canDisable: !((ref = plugin.management) === null || ref === void 0 ? void 0 : ref.alwaysOn)
                    }, plugin.ID)
                }, plugin.ID));
            })
        })
    }));
};
function PluginCardContainer(props) {
    const ref = settings/* currentPluginEnabledStatus */.uZ['plugin:' + props.id];
    const status = (0,utils/* useValueRef */.E)(ref);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PluginCard, {
        ...props,
        enabled: status,
        onSwitch: ()=>ref.value = !status
    }));
}

// EXTERNAL MODULE: ../public-api/src/index.ts + 1 modules
var public_api_src = __webpack_require__(34513);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction.js + 1 modules
var ListItemSecondaryAction = __webpack_require__(90169);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ArrowForwardIos.js
var ArrowForwardIos = __webpack_require__(98074);
// EXTERNAL MODULE: ./src/settings/createSettings.ts
var createSettings = __webpack_require__(37131);
;// CONCATENATED MODULE: ./src/components/shared-settings/useSettingsUI.tsx









const useSettingsUI_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            listStyleType: 'none',
            width: '100%'
        },
        secondaryAction: {
            paddingLeft: theme.spacing(2)
        },
        listItemText: {
            fontWeight: 500
        },
        listItemIcon: {
            marginLeft: 0
        },
        listItemActionMobile: {
            maxWidth: '60%'
        },
        arrowIcon: {
            color: theme.palette.text.primary
        }
    })
);
function withDefaultText(props) {
    var ref, ref1;
    const { value , primary , secondary  } = props;
    const text = createSettings/* texts.get */.uq.get(value);
    var ref2;
    return {
        value,
        primary: (ref2 = primary !== null && primary !== void 0 ? primary : text === null || text === void 0 ? void 0 : (ref = text.primary) === null || ref === void 0 ? void 0 : ref.call(text)) !== null && ref2 !== void 0 ? ref2 : '_unknown_setting_',
        secondary: secondary !== null && secondary !== void 0 ? secondary : text === null || text === void 0 ? void 0 : (ref1 = text.secondary) === null || ref1 === void 0 ? void 0 : ref1.call(text)
    };
}
function SharedListItem(props) {
    const { onClick , icon , action , primary , secondary , button  } = props;
    const classes = (0,shared_src.useStylesExtends)(useSettingsUI_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItem/* default */.ZP, {
        classes: {
            root: classes.listItemRoot,
            container: classes.container,
            secondaryAction: classes.secondaryAction
        },
        onClick: onClick,
        ...button ? {
            button: true
        } : {
            component: 'div'
        },
        children: [
            icon ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                classes: {
                    root: classes.listItemIcon
                },
                children: icon
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                classes: {
                    primary: classes.listItemText
                },
                primary: primary,
                secondary: secondary
            }),
            action
        ]
    }));
}
function SettingsUI(props) {
    const { value  } = withDefaultText(props);
    const currentValue = (0,shared_src.useValueRef)(value);
    switch(typeof currentValue){
        case 'boolean':
            {
                const ref = value;
                const change = ()=>void (ref.value = !ref.value)
                ;
                const ui = /*#__PURE__*/ (0,jsx_runtime.jsx)(Switch/* default */.Z, {
                    color: "primary",
                    edge: "end",
                    checked: currentValue,
                    onClick: change
                });
                const { primary , secondary  } = withDefaultText(props);
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SharedListItem, {
                    ...props,
                    button: true,
                    primary: primary,
                    secondary: secondary,
                    onClick: change,
                    action: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemSecondaryAction/* default */.Z, {
                        children: ui
                    })
                }));
            }
        case 'number':
        case 'string':
        default:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SharedListItem, {
                ...props,
                primary: 'Unknown settings type ' + typeof currentValue
            }));
    }
}
function SettingsUIDummy(props) {
    const classes = (0,shared_src.useStylesExtends)(useSettingsUI_useStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SharedListItem, {
        ...props,
        button: true,
        action: /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemSecondaryAction/* default */.Z, {
            onClick: props.onClick,
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowForwardIos/* default */.Z, {
                classes: {
                    root: classes.arrowIcon
                }
            })
        })
    }));
}
function SettingsUIEnum(props) {
    const { primary , secondary  } = withDefaultText(props);
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    const { classes  } = useSettingsUI_useStyles();
    const { value , enumObject , getText , SelectProps , ignoredItems  } = props;
    const ui = useEnumSettings(value, enumObject, getText, SelectProps, ignoredItems);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SharedListItem, {
        ...props,
        primary: primary,
        secondary: secondary,
        action: xsMatched ? /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: classes.listItemActionMobile,
            children: ui
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemSecondaryAction/* default */.Z, {
            children: ui
        })
    }));
}
/**
 * Convert a ValueRef<Enum> into a Select element.
 * @param ref - The value ref
 * @param enumObject - The enum object
 * @param getText - Convert enum value into string.
 *
 * ? because the limit on the type system, I can't type it as an object which key is enum and value is string
 */ function useEnumSettings(...[ref, enumObject, getText, selectProps, ignoredItems]) {
    const enum_ = (0,esm/* getEnumAsArray */.Yl)(enumObject);
    const change = (value)=>{
        if (!Number.isNaN(Number.parseInt(value, 10))) {
            value = Number.parseInt(value, 10);
        }
        if (!enum_.some((x)=>x.value === value
        )) {
            throw new Error('Invalid state');
        }
        ref.value = value;
    };
    var ref1;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Select/* default */.Z, {
        fullWidth: true,
        variant: "outlined",
        value: (0,shared_src.useValueRef)(ref),
        onChange: (event)=>change(event.target.value)
        ,
        ...selectProps,
        children: enum_.filter((x)=>{
            return !(ignoredItems === null || ignoredItems === void 0 ? void 0 : ignoredItems.includes(x.value));
        }).map(({ key , value  })=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
                value: String(value),
                children: (ref1 = getText === null || getText === void 0 ? void 0 : getText(value)) !== null && ref1 !== void 0 ? ref1 : String(key)
            }, String(key)));
        })
    }));
}

// EXTERNAL MODULE: ./src/settings/types.ts
var settings_types = __webpack_require__(61721);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/TrendingUp.js
var TrendingUp = __webpack_require__(99402);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/SwapHoriz.js
var SwapHoriz = __webpack_require__(16007);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/MemoryOutlined.js
var MemoryOutlined = __webpack_require__(62342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/ArchiveOutlined.js
var ArchiveOutlined = __webpack_require__(29050);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/UnarchiveOutlined.js
var UnarchiveOutlined = __webpack_require__(66080);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/FlipToFront.js
var FlipToFront = __webpack_require__(29099);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Palette.js
var Palette = __webpack_require__(23369);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Language.js
var Language = __webpack_require__(26697);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Wifi.js
var Wifi = __webpack_require__(26407);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/Launch.js
var Launch = __webpack_require__(63284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/NewReleases.js
var NewReleases = __webpack_require__(98810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-feather@2.0.9_react@18.0.0-alpha-aecb3b6d1/node_modules/react-feather/dist/icons/database.js
var database = __webpack_require__(20020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/CheckCircleOutline.js
var CheckCircleOutline = __webpack_require__(63315);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+icons@5.0.0-beta.4_bca0a67e4fb44c9cc904a1f98158ba31/node_modules/@material-ui/icons/RadioButtonUnchecked.js
var RadioButtonUnchecked = __webpack_require__(54019);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/DatabasePreviewCard.tsx









const useDatabasePreviewCardStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        table: {
            borderCollapse: 'unset'
        },
        cell: {
            border: 'none',
            padding: '9px 0 !important'
        },
        label: {
            verticalAlign: 'middle',
            fontSize: 16,
            fontWeight: 500,
            lineHeight: 1.75
        },
        icon: {
            color: theme.palette.divider,
            width: 20,
            height: 20,
            verticalAlign: 'middle',
            marginLeft: 18
        },
        iconChecked: {
            color: theme.palette.success.main
        }
    })
);
var DatabaseRecordType;
(function(DatabaseRecordType1) {
    DatabaseRecordType1[DatabaseRecordType1["Persona"] = 0] = "Persona";
    DatabaseRecordType1[DatabaseRecordType1["Profile"] = 1] = "Profile";
    DatabaseRecordType1[DatabaseRecordType1["Post"] = 2] = "Post";
    DatabaseRecordType1[DatabaseRecordType1["Wallet"] = 3] = "Wallet";
})(DatabaseRecordType || (DatabaseRecordType = {
}));
function DatabasePreviewCard(props) {
    const { dense =false , records  } = props;
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(useDatabasePreviewCardStyles(), props);
    const resolveRecordName = (type)=>{
        switch(type){
            case DatabaseRecordType.Persona:
                return t('personas');
            case DatabaseRecordType.Profile:
                return t('profiles');
            case DatabaseRecordType.Post:
                return t('posts');
            case DatabaseRecordType.Wallet:
                return t('wallets');
            default:
                return (0,esm/* unreachable */.t1)(type);
        }
    };
    const resolvedRecords = records.map((record)=>({
            ...record,
            name: resolveRecordName(record.type)
        })
    );
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
        className: classes.table,
        size: "small",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
            children: resolvedRecords.map((record)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                            className: classes.cell,
                            component: "th",
                            align: "left",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.label,
                                variant: "body2",
                                component: "span",
                                children: record.name
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(TableCell/* default */.Z, {
                            className: classes.cell,
                            align: "right",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: classes.label,
                                    variant: "body2",
                                    component: "span",
                                    children: record.length
                                }),
                                !dense ? record.checked ? /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckCircleOutline/* default */.Z, {
                                    className: classnames_default()(classes.icon, classes.iconChecked)
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButtonUnchecked/* default */.Z, {
                                    className: classes.icon
                                }) : null
                            ]
                        })
                    ]
                }, record.name)
            )
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Backup/Backup.tsx











const useDatabaseStyles = (0,src/* makeStyles */.ZL)()({
    dashboardPreviewCardTable: {
        paddingLeft: 28,
        paddingRight: 28,
        marginTop: 2,
        marginBottom: 28
    },
    buttonText: {
        color: '#fff'
    }
});
function DashboardBackupDialog(props) {
    var ref, ref1;
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useDatabaseStyles();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const { value , loading  } = (0,useAsync/* default */.Z)(()=>service/* default.Welcome.generateBackupJSON */.ZP.Welcome.generateBackupJSON()
    );
    // since Android doesn't support `browser.download.downloads`,
    //  we should create download url before click button.
    const backupInfo = (0,useAsync/* default */.Z)(()=>service/* default.Welcome.createBackupUrl */.ZP.Welcome.createBackupUrl({
            download: false,
            onlyBackupWhoAmI: false
        })
    );
    var _length, _length1, _length2, _length3;
    const records = [
        {
            type: DatabaseRecordType.Persona,
            length: (_length = value === null || value === void 0 ? void 0 : value.personas.length) !== null && _length !== void 0 ? _length : 0,
            checked: false
        },
        {
            type: DatabaseRecordType.Profile,
            length: (_length1 = value === null || value === void 0 ? void 0 : value.profiles.length) !== null && _length1 !== void 0 ? _length1 : 0,
            checked: false
        },
        {
            type: DatabaseRecordType.Post,
            length: (_length2 = value === null || value === void 0 ? void 0 : value.posts.length) !== null && _length2 !== void 0 ? _length2 : 0,
            checked: false
        },
        {
            type: DatabaseRecordType.Wallet,
            length: (_length3 = value === null || value === void 0 ? void 0 : value.wallets.length) !== null && _length3 !== void 0 ? _length3 : 0,
            checked: false
        }, 
    ];
    const onConfirm = async ()=>{
        try {
            await service/* default.Welcome.createBackupFile */.ZP.Welcome.createBackupFile({
                download: true,
                onlyBackupWhoAmI: false
            });
            props.onClose();
        } catch  {
            enqueueSnackbar(t('set_up_backup_fail'), {
                variant: 'error'
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
            size: "medium",
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(database/* default */.Z, {
            }),
            iconColor: "#699CF7",
            primary: t('backup_database'),
            secondary: t('dashboard_backup_database_hint'),
            footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabasePreviewCard, {
                        classes: {
                            table: classes.dashboardPreviewCardTable
                        },
                        dense: true,
                        records: records
                    }),
                     false ? 0 : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                        loading: loading,
                        disabled: loading || records.every((r)=>!r.length
                        ),
                        variant: "contained",
                        onClick: onConfirm,
                        children: t('dashboard_backup_database_confirmation')
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(8325);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/colors/green.js
var green = __webpack_require__(60455);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Backup/ConfirmBackup.tsx












const useConfirmBackupStyles = (0,src/* makeStyles */.ZL)()((_theme, props)=>({
        root: {
            width: '100%'
        },
        dashboardPreviewCardTable: {
            paddingLeft: 28,
            paddingRight: 28,
            marginBottom: 28,
            // keep dialogs vertical align when switching between them
            marginTop: props.imported ? 2 : 26
        },
        doneButton: {
            color: '#fff',
            backgroundColor: green/* default.500 */.Z[500],
            '&:hover': {
                backgroundColor: green/* default.700 */.Z[700]
            }
        }
    })
);
function ConfirmBackup({ restoreId , date , backup , onDone  }) {
    const [imported, setImported] = (0,react.useState)(false);
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useConfirmBackupStyles({
        imported: imported === true
    });
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const time = new Date(date ? Number(date) : 0);
    var _length, _length1, _length2, _length3;
    const records = [
        {
            type: DatabaseRecordType.Persona,
            length: (_length = backup === null || backup === void 0 ? void 0 : backup.personas.length) !== null && _length !== void 0 ? _length : 0,
            checked: imported === true
        },
        {
            type: DatabaseRecordType.Profile,
            length: (_length1 = backup === null || backup === void 0 ? void 0 : backup.profiles.length) !== null && _length1 !== void 0 ? _length1 : 0,
            checked: imported === true
        },
        {
            type: DatabaseRecordType.Post,
            length: (_length2 = backup === null || backup === void 0 ? void 0 : backup.posts.length) !== null && _length2 !== void 0 ? _length2 : 0,
            checked: imported === true
        },
        {
            type: DatabaseRecordType.Wallet,
            length: (_length3 = backup === null || backup === void 0 ? void 0 : backup.wallets.length) !== null && _length3 !== void 0 ? _length3 : 0,
            checked: imported === true
        }, 
    ];
    const onConfirm = async ()=>{
        const failToRestore = ()=>enqueueSnackbar(t('set_up_restore_fail'), {
                variant: 'error'
            })
        ;
        if (restoreId) {
            try {
                setImported('loading');
                await service/* default.Welcome.confirmBackup */.ZP.Welcome.confirmBackup(restoreId);
                setImported(true);
            } catch  {
                failToRestore();
                setImported(false);
            }
        } else {
            failToRestore();
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
        size: "medium",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(database/* default */.Z, {
        }),
        iconColor: "#699CF7",
        primary: t('restore_database'),
        secondary: imported === true ? time.getTime() === 0 ? t('unknown_time') : t('dashboard_restoration_successful_hint', {
            time: time.toLocaleString()
        }) : t('set_up_restore_confirmation_hint'),
        footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.root,
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabasePreviewCard, {
                    classes: {
                        table: classes.dashboardPreviewCardTable
                    },
                    records: records
                }),
                imported === true ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.doneButton,
                    variant: "contained",
                    onClick: onDone,
                    children: t('set_up_button_done')
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "contained",
                    loading: imported === 'loading',
                    disabled: imported === 'loading',
                    onClick: onConfirm,
                    children: t('set_up_button_confirm')
                })
            ]
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/InputBase/InputBase.js + 2 modules
var InputBase = __webpack_require__(87503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(90335);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/RestoreFromBackupBox.tsx








const RestoreFromBackupBox_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            border: `solid 1px ${theme.palette.divider}`,
            height: 176,
            borderRadius: 4
        },
        file: {
            display: 'none'
        }
    })
);
function RestoreFromBackupBox(props) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const classes = (0,shared_src.useStylesExtends)(RestoreFromBackupBox_useStyles(), props);
    const inputRef = (0,react.useRef)(null);
    const [file, setFile] = (0,react.useState)(props.file);
    const [bound, { over  }] = (0,useDropArea/* default */.Z)({
        onFiles (files) {
            setFile(files[0]);
        }
    });
    // invoke callback
    (0,react.useEffect)(()=>{
        if (file) {
            (0,esm/* blobToText */.Gx)(file).then((result)=>{
                var ref;
                return (ref = props.onChange) === null || ref === void 0 ? void 0 : ref.call(props, file, result);
            });
        }
    }, [
        file,
        props.onChange
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        ...bound,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                className: classes.file,
                type: "file",
                accept: "application/json",
                ref: inputRef,
                onChange: ({ currentTarget  })=>{
                    if (currentTarget.files) setFile(currentTarget.files.item(0));
                },
                "data-testid": "file_input"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreBox, {
                file: file,
                entered: over,
                enterText: t('restore_database_dragging'),
                leaveText: t('restore_database_dragged'),
                darkPlaceholderImageURL: new URL(/* asset import */ __webpack_require__(48180), __webpack_require__.b).toString(),
                lightPlaceholderImageURL: new URL(/* asset import */ __webpack_require__(62906), __webpack_require__.b).toString(),
                "data-active": over,
                onClick: ()=>{
                    var ref;
                    return (ref = inputRef.current) === null || ref === void 0 ? void 0 : ref.click();
                }
            })
        ]
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Backup/SelectBackup.tsx














const useSelectBackupStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            marginTop: theme.spacing(-3),
            width: '100%'
        },
        input: {
            width: '100%',
            boxSizing: 'border-box',
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: 4,
            height: 176,
            padding: theme.spacing(2, 3),
            '& > textarea': {
                overflow: 'auto !important',
                height: '100% !important'
            }
        },
        button: {
            marginTop: theme.spacing(3)
        }
    })
);
function SelectBackup({ onConfirm  }) {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useSelectBackupStyles();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const [file, setFile] = (0,react.useState)(null);
    const [json, setJSON] = (0,react.useState)(null);
    const [backupValue, setBackupValue] = (0,react.useState)('');
    const [textValue, setTextValue] = (0,react.useState)('');
    const state = (0,react.useState)(0);
    const tabProps = {
        tabs: [
            {
                id: 'file',
                label: t('restore_database_file'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromBackupBox, {
                    file: file,
                    onChange: (file1, content)=>{
                        setFile(file1);
                        setBackupValue(content);
                    }
                }),
                sx: {
                    p: 0
                }
            },
            {
                id: 'text',
                label: t('restore_database_text'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    className: classes.input,
                    placeholder: t('dashboard_paste_database_backup_hint'),
                    inputRef: (input)=>{
                        return input === null || input === void 0 ? void 0 : input.focus();
                    },
                    multiline: true,
                    value: textValue,
                    onChange: (e)=>setTextValue(e.target.value)
                    ,
                    inputProps: {
                        'data-testid': 'upload_textarea'
                    }
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state,
        height: 176
    };
    const permissionState = (0,useAsync/* default */.Z)(async ()=>{
        const json1 = (0,utils/* UpgradeBackupJSONFile */.a_)((0,utils/* decompressBackupFile */.PN)(state[0] === 0 ? backupValue : textValue));
        setJSON(json1);
        if (!json1) throw new Error('UpgradeBackupJSONFile failed');
        return (0,utils/* extraPermissions */.uM)(json1.grantedHostPermissions);
    }, [
        state[0],
        backupValue,
        textValue
    ]);
    const restoreDB = async ()=>{
        try {
            if (!json) return;
            var _value;
            const permissions = (_value = permissionState.value) !== null && _value !== void 0 ? _value : [];
            if (permissions.length) {
                const granted = await browser.permissions.request({
                    origins: permissions !== null && permissions !== void 0 ? permissions : []
                });
                if (!granted) return;
            }
            const restoreId = (0,v4/* default */.Z)();
            await service/* default.Welcome.setUnconfirmedBackup */.ZP.Welcome.setUnconfirmedBackup(restoreId, json);
            onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(restoreId, json);
        } catch  {
            enqueueSnackbar(t('set_up_restore_fail'), {
                variant: 'error'
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogWrapper */.ge, {
        size: "medium",
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(database/* default */.Z, {
        }),
        iconColor: "#699CF7",
        primary: t('set_up_restore'),
        secondary: t('set_up_restore_hint'),
        footer: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            className: classes.root,
            sx: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    style: {
                        width: '100%'
                    },
                    sx: {
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
                        ...tabProps
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    variant: "contained",
                    disabled: !(state[0] === 0 && backupValue) && !(state[0] === 1 && textValue) || !json || permissionState.loading || !!permissionState.error,
                    onClick: restoreDB,
                    "data-testid": "restore_button",
                    children: t('set_up_button_restore')
                })
            ]
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Backup/Restore.tsx







const backupTheme = (0,theme/* extendsTheme */.Ql)((theme)=>({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&[hidden]': {
                            visibility: 'hidden'
                        }
                    }
                }
            }
        }
    })
);
var RestoreStep;
(function(RestoreStep1) {
    RestoreStep1["SelectBackup"] = 'select-backup';
    RestoreStep1["ConfirmBackup"] = 'confirm-backup';
})(RestoreStep || (RestoreStep = {
}));
function DashboardRestoreDialog(props) {
    const [step, setStep] = (0,react.useState)(RestoreStep.SelectBackup);
    const [backup, setBackup] = (0,react.useState)(null);
    const [restoreId, setRestoreId] = (0,react.useState)('');
    function getCurrentStep(step1) {
        switch(step1){
            case RestoreStep.SelectBackup:
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SelectBackup, {
                    onConfirm: (restoreId1, backup1)=>{
                        setBackup(backup1);
                        setRestoreId(restoreId1);
                        setStep(RestoreStep.ConfirmBackup);
                    }
                }));
            case RestoreStep.ConfirmBackup:
                var _createdAt;
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConfirmBackup, {
                    backup: backup,
                    restoreId: restoreId,
                    date: (_createdAt = backup === null || backup === void 0 ? void 0 : backup._meta_.createdAt) !== null && _createdAt !== void 0 ? _createdAt : 0,
                    onDone: props.onClose
                }));
            default:
                return null;
        }
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
        theme: backupTheme,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Base/* DashboardDialogCore */.ef, {
            ...props,
            children: getCurrentStep(step)
        })
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardDialogs/Backup/index.tsx



// EXTERNAL MODULE: ./src/plugins/Trader/settings.ts
var Trader_settings = __webpack_require__(5692);
// EXTERNAL MODULE: ./src/plugins/Trader/pipes.ts
var pipes = __webpack_require__(56669);
// EXTERNAL MODULE: ./src/plugins/Wallet/pipes/index.ts
var Wallet_pipes = __webpack_require__(34616);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts + 2 modules
var Wallet_settings = __webpack_require__(6621);
// EXTERNAL MODULE: ./src/plugins/Trader/trending/useAvailableTraderProviders.ts
var useAvailableTraderProviders = __webpack_require__(12543);
// EXTERNAL MODULE: ./src/plugins/Trader/trending/useAvailableDataProviders.ts
var useAvailableDataProviders = __webpack_require__(56914);
// EXTERNAL MODULE: ./src/plugins/Trader/trending/useCurrentTradeProvider.ts
var useCurrentTradeProvider = __webpack_require__(76060);
// EXTERNAL MODULE: ./src/plugins/Trader/trending/useCurrentDataProvider.ts
var useCurrentDataProvider = __webpack_require__(23982);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Settings.tsx







































const Settings_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper
        },
        title: {
            fontWeight: 'normal',
            lineHeight: '30px',
            marginBottom: theme.spacing(1.5),
            [theme.breakpoints.down('sm')]: {
                marginBottom: 0
            }
        },
        section: {
            padding: '26px 40px',
            margin: theme.spacing(3, 0),
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(2)
            }
        },
        secondaryAction: {
            paddingRight: 90
        },
        list: {
            [theme.breakpoints.down('sm')]: {
                marginLeft: theme.spacing(-2),
                marginRight: theme.spacing(-2)
            }
        },
        listItemRoot: {
            paddingTop: theme.spacing(1.5),
            paddingBottom: theme.spacing(1.5),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        listItemIcon: {
            color: theme.palette.text.primary,
            justifyContent: 'flex-start',
            minWidth: 'unset',
            marginLeft: 0,
            marginRight: theme.spacing(3),
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        }
    })
);
const settingsTheme = (0,utils/* extendsTheme */.Ql)((theme)=>({
        wrapper: {
            padding: theme.spacing(0, 3)
        },
        typography: {
            body1: {
                lineHeight: 1.75
            }
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    rounded: {
                        borderRadius: 12
                    }
                }
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        overflow: 'visible'
                    }
                }
            },
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        paddingTop: theme.spacing(1),
                        paddingBottom: theme.spacing(1)
                    }
                }
            }
        }
    })
);
function Settings_DashboardSettingsRouter() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const isMobile = (0,utils/* useMatchXS */.IN)();
    const notReadyLanguages = [
        public_api_src/* LanguageOptions.esES */.P7.esES,
        public_api_src/* LanguageOptions.zhCN */.P7.zhCN,
        public_api_src/* LanguageOptions.faIR */.P7.faIR,
        public_api_src/* LanguageOptions.ruRU */.P7.ruRU,
        public_api_src/* LanguageOptions.itIT */.P7.itIT,
        public_api_src/* LanguageOptions.frFR */.P7.frFR, 
    ];
    const langMapper = (0,react.useRef)((x)=>{
        if (x === public_api_src/* LanguageOptions.enUS */.P7.enUS) return 'English';
        if (x === public_api_src/* LanguageOptions.zhTW */.P7.zhTW) return '正體中文';
        if (x === public_api_src/* LanguageOptions.zhCN */.P7.zhCN) return '简体中文';
        if (x === public_api_src/* LanguageOptions.koKR */.P7.koKR) return '한국인';
        if (x === public_api_src/* LanguageOptions.jaJP */.P7.jaJP) return '日本語';
        if (x === public_api_src/* LanguageOptions.itIT */.P7.itIT) return 'lingua italiana';
        if (x === public_api_src/* LanguageOptions.esES */.P7.esES) return 'lengua española';
        if (x === public_api_src/* LanguageOptions.ruRU */.P7.ruRU) return 'русский язык';
        if (x === public_api_src/* LanguageOptions.frFR */.P7.frFR) return 'langue française';
        if (x === public_api_src/* LanguageOptions.faIR */.P7.faIR) return 'زبان فارسی';
        if (x === public_api_src/* LanguageOptions.__auto__ */.P7.__auto__) return t('language_auto');
        (0,esm/* safeUnreachable */.P)(x);
        return x;
    }).current;
    const appearanceMapper = (0,react.useRef)((x)=>{
        if (x === src/* Appearance.dark */.um.dark) return t('settings_appearance_dark');
        if (x === src/* Appearance.light */.um.light) return t('settings_appearance_light');
        return t('settings_appearance_default');
    }).current;
    const launchPageMapper = (0,react.useRef)((x)=>{
        if (x === settings_types/* LaunchPage.facebook */.z.facebook) return 'Facebook';
        if (x === settings_types/* LaunchPage.twitter */.z.twitter) return 'Twitter';
        return t('dashboard');
    }).current;
    const { classes  } = Settings_useStyles();
    const theme = (0,styles_useTheme/* default */.Z)();
    const elevation = theme.palette.mode === 'dark' ? 1 : 0;
    const account = (0,web3_shared_src/* useAccount */.mAM)();
    const providerType = (0,utils/* useValueRef */.E)(Wallet_settings/* currentProviderSettings */.t1);
    const [backupDialog, openBackupDialog] = (0,Base/* useModal */.dd)(DashboardBackupDialog);
    const [restoreDialog, openRestoreDialog] = (0,Base/* useModal */.dd)(DashboardRestoreDialog);
    const listStyle = {
        secondaryAction: classes.secondaryAction,
        listItemRoot: classes.listItemRoot,
        listItemIcon: classes.listItemIcon
    };
    //#region the trader plugin
    const { value: dataProviders = []  } = (0,useAvailableDataProviders/* useAvailableDataProviders */.Q)();
    const { value: tradeProviders = []  } = (0,useAvailableTraderProviders/* useAvailableTraderProviders */.Z)();
    const dataProvider = (0,useCurrentDataProvider/* useCurrentDataProvider */.$)(dataProviders);
    const tradeProvider = (0,useCurrentTradeProvider/* useCurrentTradeProvider */.Q)();
    //#endregion
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardRouterContainer, {
        title: t('settings'),
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: settingsTheme,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "wrapper",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        component: "section",
                        className: classes.section,
                        elevation: elevation,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                variant: "h6",
                                color: "textPrimary",
                                children: t('settings_title_general')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                                elevation: 0,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                                    className: classes.list,
                                    disablePadding: true,
                                    children: [
                                        utils/* Flags.v2_enabled */.vU.v2_enabled && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ListItemButton/* default */.Z, {
                                            onClick: ()=>location.href = '/next.html'
                                            ,
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemIcon/* default */.Z, {
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NewReleases/* default */.Z, {
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ListItemText/* default */.Z, {
                                                    primary: "Open new dashboard (integrated) (dev-only)",
                                                    secondary: "/packages/dashboard/"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIEnum, {
                                            classes: listStyle,
                                            enumObject: public_api_src/* LanguageOptions */.P7,
                                            ignoredItems:  false ? 0 : notReadyLanguages,
                                            getText: langMapper,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Language/* default */.Z, {
                                            }),
                                            value: settings/* languageSettings */.pQ
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIEnum, {
                                            classes: listStyle,
                                            enumObject: src/* Appearance */.um,
                                            getText: appearanceMapper,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Palette/* default */.Z, {
                                            }),
                                            value: settings/* appearanceSettings */.OF
                                        }),
                                        utils/* Flags.support_eth_network_switch */.vU.support_eth_network_switch && account && providerType === web3_shared_src/* ProviderType.Maskbook */.lP_.Maskbook ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIEnum, {
                                            classes: listStyle,
                                            enumObject: web3_shared_src/* ChainId */.a_e,
                                            getText: web3_shared_src/* getChainName */.qzE,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Wifi/* default */.Z, {
                                            }),
                                            value: Wallet_settings/* currentChainIdSettings */.wU
                                        }) : null,
                                        tradeProviders.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIEnum, {
                                            classes: listStyle,
                                            enumObject: (0,shared_src.getEnumAsObject)(tradeProviders, (v)=>public_api_src/* TradeProvider */.z4[v]
                                            ),
                                            getText: pipes/* resolveTradeProviderName */.uM,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(TrendingUp/* default */.Z, {
                                            }),
                                            value: Trader_settings/* currentTradeProviderSettings */.de,
                                            SelectProps: {
                                                value: tradeProvider
                                            }
                                        }) : null,
                                        dataProviders.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIEnum, {
                                            classes: listStyle,
                                            enumObject: (0,shared_src.getEnumAsObject)(dataProviders, (v)=>public_api_src/* DataProvider */.FW[v]
                                            ),
                                            getText: pipes/* resolveDataProviderName */.K7,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(SwapHoriz/* default */.Z, {
                                            }),
                                            value: Trader_settings/* currentDataProviderSettings */.gG,
                                            SelectProps: {
                                                value: dataProvider
                                            }
                                        }) : null,
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIEnum, {
                                            classes: listStyle,
                                            enumObject: web3_shared_src/* PortfolioProvider */.g38,
                                            getText: Wallet_pipes/* resolvePortfolioDataProviderName */.hF,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(AccountBalanceWallet/* default */.Z, {
                                            }),
                                            value: Wallet_settings/* currentPortfolioDataProviderSettings */.a4
                                        }),
                                        isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIEnum, {
                                            classes: listStyle,
                                            enumObject: settings_types/* LaunchPage */.z,
                                            getText: launchPageMapper,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(Launch/* default */.Z, {
                                            }),
                                            value: settings/* launchPageSettings */.i4
                                        }) : null
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        component: "section",
                        className: classes.section,
                        elevation: elevation,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                variant: "h6",
                                color: "textPrimary",
                                children: t('settings_title_advanced_options')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                                elevation: 0,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                                    className: classes.list,
                                    disablePadding: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUI, {
                                            classes: listStyle,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MemoryOutlined/* default */.Z, {
                                            }),
                                            value: settings/* debugModeSetting */.vv
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUI, {
                                            classes: listStyle,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FlipToFront/* default */.Z, {
                                            }),
                                            value: settings/* allPostReplacementSettings */.zs
                                        }),
                                         false ? /*#__PURE__*/ 0 : null
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paper/* default */.Z, {
                        component: "section",
                        className: classes.section,
                        elevation: elevation,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                className: classes.title,
                                variant: "h6",
                                color: "textPrimary",
                                children: t('settings_title_database_management')
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                                elevation: 0,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(List/* default */.Z, {
                                    className: classes.list,
                                    disablePadding: true,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIDummy, {
                                            classes: listStyle,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(UnarchiveOutlined/* default */.Z, {
                                            }),
                                            primary: t('backup_database'),
                                            secondary: t('dashboard_backup_database_hint'),
                                            onClick: openBackupDialog
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsUIDummy, {
                                            classes: listStyle,
                                            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ArchiveOutlined/* default */.Z, {
                                            }),
                                            primary: t('restore_database'),
                                            secondary: t('dashboard_import_database_hint'),
                                            onClick: openRestoreDialog
                                        })
                                    ]
                                })
                            }),
                            backupDialog,
                            restoreDialog
                        ]
                    })
                ]
            })
        })
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(46105);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/Checkbox/Checkbox.js + 4 modules
var Checkbox = __webpack_require__(7542);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(80594);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Setup.tsx

























//#region setup form
const useSetupFormStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        wrapper: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        primary: {
            textAlign: 'center',
            fontWeight: 500,
            fontSize: 39,
            lineHeight: 1,
            marginBottom: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                fontSize: 18,
                margin: theme.spacing(3, 0, 1)
            }
        },
        secondary: {
            textAlign: 'center',
            fontSize: 20,
            lineHeight: 1.5,
            marginBottom: theme.spacing(5),
            [theme.breakpoints.down('sm')]: {
                fontSize: 14,
                marginBottom: theme.spacing(2)
            }
        },
        form: {
            width: 368,
            minHeight: 200,
            [theme.breakpoints.down('sm')]: {
                width: '100%'
            }
        },
        input: {
            width: '100%'
        },
        or: {
            marginTop: 28,
            marginBottom: 10,
            [theme.breakpoints.down('sm')]: {
                margin: 0
            }
        },
        button: {
            width: 220,
            height: 40,
            marginBottom: 20
        },
        restoreButton: {
            marginTop: 44
        },
        importButton: {
            marginTop: 44
        },
        doneButton: {
            color: '#fff',
            backgroundColor: green/* default.500 */.Z[500],
            // extra 36 pixel eliminates the visual shaking when switch between pages
            marginBottom: 20 + 36,
            '&:hover': {
                backgroundColor: green/* default.700 */.Z[700]
            }
        }
    })
);
function SetupForm(props) {
    const classes = (0,shared_src.useStylesExtends)(useSetupFormStyles(), props);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Fade/* default */.Z, {
        in: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.section,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.primary,
                            variant: "h5",
                            color: "textPrimary",
                            children: props.primary
                        }),
                        props.secondary ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.secondary,
                            variant: "body1",
                            color: "textPrimary",
                            children: props.secondary
                        }) : null
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.section,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("form", {
                        className: classes.form,
                        children: props.content
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.section,
                    children: props.actions
                })
            ]
        })
    }));
}
//#endregion
//#region consent data collection
const useConsentDataCollectionStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        form: {
            color: theme.palette.text.primary,
            fontSize: 16,
            lineHeight: 1.75,
            maxWidth: 660,
            width: '100%',
            minHeight: 256,
            marginTop: 78
        },
        label: {
            color: theme.palette.text.primary,
            marginBottom: 32
        },
        button: {
            minWidth: 220
        }
    })
);
function ConsentDataCollection() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes: consentDataCollection  } = useConsentDataCollectionStyles();
    const [checked, setChecked] = (0,react.useState)(false);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetupForm, {
        classes: {
            form: consentDataCollection.form
        },
        primary: t('set_up_consent_data_collection'),
        content: t('set_up_consent_data_collection_hint'),
        actions: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(FormControlLabel/* default */.Z, {
                    className: consentDataCollection.label,
                    control: /*#__PURE__*/ (0,jsx_runtime.jsx)(Checkbox/* default */.Z, {
                        color: "primary",
                        checked: checked,
                        onChange: (ev)=>setChecked(ev.target.checked)
                    }),
                    label: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            t('set_up_consent_data_collection_privacy_policy_1'),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link_Link/* default */.Z, {
                                href: "https://mask.io/privacy-policy/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: t('set_up_consent_data_collection_privacy_policy_2')
                            }),
                            t('set_up_consent_data_collection_privacy_policy_3')
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: consentDataCollection.button,
                    variant: "contained",
                    component: Link,
                    disabled: !checked,
                    to: SetupStep/* SetupStep.CreatePersona */.d.CreatePersona,
                    children: t('set_up_button_get_started')
                })
            ]
        })
    }));
}
//#endregion
//#region create persona
const userCreatePersonaStyles = (0,src/* makeStyles */.ZL)()({
    form: {
        minHeight: 130
    }
});
function CreatePersona() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes: setupFormClasses  } = useSetupFormStyles();
    const { classes: createPersonaClasses  } = userCreatePersonaStyles();
    const [name, setName] = (0,react.useState)('');
    const history = (0,react_router/* useHistory */.k6)();
    const createPersonaAndNext = async ()=>{
        const persona = await service/* default.Identity.createPersonaByMnemonic */.ZP.Identity.createPersonaByMnemonic(name, '');
        history.push(`${SetupStep/* SetupStep.ConnectNetwork */.d.ConnectNetwork}?identifier=${encodeURIComponent(persona.toText())}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetupForm, {
        classes: {
            form: createPersonaClasses.form
        },
        primary: t('set_up_create_persona'),
        secondary: t('set_up_create_persona_hint'),
        content: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
            required: true,
            autoFocus: true,
            className: setupFormClasses.input,
            value: name,
            onChange: (e)=>setName(e.target.value)
            ,
            onKeyDown: (e)=>{
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (!(0,utils/* checkInputLengthExceed */.Se)(name) && name.length > 0) {
                        createPersonaAndNext();
                    }
                }
            },
            label: t('name'),
            helperText: (0,utils/* checkInputLengthExceed */.Se)(name) ? t('input_length_exceed_prompt', {
                name: t('persona_name').toLowerCase(),
                length: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
            }) : undefined,
            inputProps: {
                'data-testid': 'username_input',
                maxLength: utils/* WALLET_OR_PERSONA_NAME_MAX_LEN */.YU
            },
            variant: "outlined"
        }),
        actions: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: setupFormClasses.button,
                    variant: "contained",
                    onClick: createPersonaAndNext,
                    disabled: !name || (0,utils/* checkInputLengthExceed */.Se)(name),
                    "data-testid": "next_button",
                    children: t('set_up_button_next')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: setupFormClasses.or,
                    variant: "body1",
                    children: t('set_up_tip_or')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "text",
                    component: Link,
                    to: SetupStep/* SetupStep.RestoreDatabase */.d.RestoreDatabase,
                    "data-testid": "backup_button",
                    children: t('set_up_button_from_backup')
                })
            ]
        })
    }));
}
//#endregion
//#region connect network
const useProviderLineStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        text: {
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: 3
        }
    })
);
function ConnectNetwork() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useSetupFormStyles();
    const { classes: providerLineClasses  } = useProviderLineStyle();
    const history = (0,react_router/* useHistory */.k6)();
    const [persona, setPersona] = (0,react.useState)(null);
    // a restored persona threat as initialized persona
    const initializedPersonas = useMyPersonas();
    const uninitializedPersonas = useMyUninitializedPersonas();
    const { identifier  } = (0,utils/* useQueryParams */.Kx)([
        'identifier'
    ]);
    const { value =null , loading , error ,  } = (0,useAsync/* default */.Z)(async ()=>{
        const persona1 = initializedPersonas.find((x)=>x.identifier.toText() === identifier
        );
        // auto-finished by setup guide
        if (persona1 === null || persona1 === void 0 ? void 0 : persona1.linkedProfiles.size) {
            history.replace(utils/* Flags.has_no_browser_tab_ui */.vU.has_no_browser_tab_ui ? Route/* DashboardRoute.Nav */.q.Nav : Route/* DashboardRoute.Personas */.q.Personas);
            return null;
        }
        return identifier ? service/* default.Identity.queryPersona */.ZP.Identity.queryPersona(type/* Identifier.fromString */.xb.fromString(identifier, type/* ECKeyIdentifier */.ob).unwrap()) : null;
    }, [
        identifier,
        initializedPersonas,
        uninitializedPersonas
    ]);
    // update persona when link/unlink really happen
    if (!loading && (value === null || value === void 0 ? void 0 : value.linkedProfiles.size) !== (persona === null || persona === void 0 ? void 0 : persona.linkedProfiles.size)) setPersona(value);
    // prevent from displaying persona's nickname as 'undefined'
    if (!(persona === null || persona === void 0 ? void 0 : persona.nickname)) return null;
    // TODO:
    // show error message
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetupForm, {
        primary: t('set_up_connect', {
            name: persona.nickname
        }),
        secondary: t('set_up_connect_hint'),
        content: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ProfileBox, {
                    persona: persona,
                    ProviderLineProps: {
                        classes: providerLineClasses
                    }
                })
            ]
        }),
        actions: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    variant: "contained",
                    disabled: (persona === null || persona === void 0 ? void 0 : persona.linkedProfiles.size) === 0,
                    onClick: async ()=>{
                        await service/* default.Identity.setupPersona */.ZP.Identity.setupPersona(persona.identifier);
                        await (0,utils/* delay */.gw)(300);
                        history.replace(utils/* Flags.has_no_browser_tab_ui */.vU.has_no_browser_tab_ui ? Route/* DashboardRoute.Nav */.q.Nav : Route/* DashboardRoute.Personas */.q.Personas);
                    },
                    children: t('set_up_button_finish')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    color: "inherit",
                    variant: "text",
                    onClick: ()=>history.goBack()
                    ,
                    children: t('set_up_button_cancel')
                })
            ]
        })
    }));
}
//#endregion
//#region restore
const useRestoreDatabaseStyle = (0,src/* makeStyles */.ZL)()((theme)=>({
        file: {
            display: 'none'
        },
        input: {
            width: '100%',
            boxSizing: 'border-box',
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: 4,
            height: 176,
            padding: theme.spacing(2, 3),
            '& > textarea': {
                overflow: 'auto !important',
                height: '100% !important'
            },
            [theme.breakpoints.down('sm')]: {
                padding: theme.spacing(2)
            }
        },
        restoreTextWrapper: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        restoreActionButton: {
            alignSelf: 'flex-end',
            marginTop: theme.spacing(1)
        }
    })
);
function RestoreDatabase() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = useSetupFormStyles();
    const { classes: restoreDatabaseClasses  } = useRestoreDatabaseStyle();
    const { enqueueSnackbar , closeSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const [file, setFile] = (0,react.useState)(null);
    const [json, setJSON] = (0,react.useState)(null);
    const [backupValue, setBackupValue] = (0,react.useState)('');
    const [textValue, setTextValue] = (0,react.useState)('');
    const state = (0,react.useState)(0);
    const tabProps = {
        tabs: [
            {
                id: 'file',
                label: t('restore_database_file'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromBackupBox, {
                    file: file,
                    onChange: (file1, content)=>{
                        setFile(file1);
                        setBackupValue(content);
                    }
                }),
                sx: {
                    p: 0
                }
            },
            {
                id: 'text',
                label: t('restore_database_text'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InputBase/* default */.ZP, {
                    className: restoreDatabaseClasses.input,
                    placeholder: t('dashboard_paste_database_backup_hint'),
                    inputRef: (input)=>{
                        return input === null || input === void 0 ? void 0 : input.focus();
                    },
                    multiline: true,
                    value: textValue,
                    onChange: (e)=>setTextValue(e.target.value)
                    ,
                    inputProps: {
                        'data-testid': 'text_textarea'
                    }
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state,
        height: 176
    };
    const permissionState = (0,useAsync/* default */.Z)(async ()=>{
        const json1 = (0,utils/* UpgradeBackupJSONFile */.a_)((0,utils/* decompressBackupFile */.PN)(state[0] === 0 ? backupValue : textValue));
        setJSON(json1);
        if (!json1) throw new Error('UpgradeBackupJSONFile failed');
        return (0,utils/* extraPermissions */.uM)(json1.grantedHostPermissions);
    }, [
        state[0],
        backupValue,
        textValue
    ]);
    const restoreDB = async ()=>{
        try {
            if (!json) return;
            var _value;
            const permissions = (_value = permissionState.value) !== null && _value !== void 0 ? _value : [];
            if (permissions.length) {
                const granted = await browser.permissions.request({
                    origins: permissions !== null && permissions !== void 0 ? permissions : []
                });
                if (!granted) return;
            }
            const restoreParams = new URLSearchParams();
            const restoreId = (0,v4/* default */.Z)();
            restoreParams.append('uuid', restoreId);
            await service/* default.Welcome.setUnconfirmedBackup */.ZP.Welcome.setUnconfirmedBackup(restoreId, json);
            history.push(`${SetupStep/* SetupStep.RestoreDatabaseConfirmation */.d.RestoreDatabaseConfirmation}?${restoreParams.toString()}`);
        } catch  {
            enqueueSnackbar(t('set_up_restore_fail'), {
                variant: 'error'
            });
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetupForm, {
        primary: t('set_up_restore'),
        secondary: t('set_up_restore_hint'),
        content: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
            ...tabProps
        }),
        actions: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classnames_default()(classes.button, classes.restoreButton),
                    variant: "contained",
                    disabled: !(state[0] === 0 && backupValue) && !(state[0] === 1 && textValue) || !json || permissionState.loading || !!permissionState.error,
                    onClick: restoreDB,
                    "data-testid": "restore_button",
                    children: t('set_up_button_restore')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    variant: "outlined",
                    component: Link,
                    to: SetupStep/* SetupStep.RestoreDatabaseAdvance */.d.RestoreDatabaseAdvance,
                    "data-testid": "advance_button",
                    children: t('set_up_button_advance')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    className: classes.or,
                    variant: "body1",
                    children: t('set_up_tip_or')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    variant: "text",
                    onClick: ()=>history.goBack()
                    ,
                    "data-testid": "restart_button",
                    children: t('set_up_button_from_scratch')
                })
            ]
        })
    }));
}
//#endregion
//#region advance restore
function RestoreDatabaseAdvance() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const history = (0,react_router/* useHistory */.k6)();
    const { classes  } = useSetupFormStyles();
    const [nickname, setNickname] = (0,react.useState)('');
    const [mnemonicWordsValue, setMnemonicWordsValue] = (0,react.useState)('');
    const [password, setPassword] = (0,react.useState)('');
    const [base64Value, setBase64Value] = (0,react.useState)('');
    const [file, setFile] = (0,react.useState)(null);
    const [scannedValue, setScannedValue] = (0,react.useState)('');
    const state = (0,react.useState)(0);
    const [tabState] = state;
    const importPersona = (persona)=>{
        const failToRestore = ()=>enqueueSnackbar(t('set_up_advance_restore_fail'), {
                variant: 'error'
            })
        ;
        try {
            if (persona) {
                history.push(persona.linkedProfiles.size ? utils/* Flags.has_no_browser_tab_ui */.vU.has_no_browser_tab_ui ? Route/* DashboardRoute.Nav */.q.Nav : Route/* DashboardRoute.Personas */.q.Personas : `${SetupStep/* SetupStep.ConnectNetwork */.d.ConnectNetwork}?identifier=${encodeURIComponent(persona.identifier.toText())}`);
            } else {
                failToRestore();
            }
        } catch  {
            failToRestore();
        }
    };
    const tabProps = {
        tabs: [
            {
                label: t('mnemonic_words'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            onChange: (e)=>setNickname(e.target.value)
                            ,
                            value: nickname,
                            required: true,
                            autoFocus: true,
                            label: t('name'),
                            inputProps: {
                                'data-testid': 'username_input'
                            },
                            variant: "outlined"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            value: mnemonicWordsValue,
                            onChange: (e)=>setMnemonicWordsValue(e.target.value)
                            ,
                            required: true,
                            label: t('mnemonic_words'),
                            inputProps: {
                                'data-testid': 'mnemonic_input'
                            },
                            variant: "outlined"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                            onChange: (e)=>setPassword(e.target.value)
                            ,
                            value: password,
                            label: t('password'),
                            inputProps: {
                                'data-testid': 'password_input'
                            },
                            variant: "outlined"
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            },
            {
                label: 'Base64',
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TextField/* default */.Z, {
                    multiline: true,
                    minRows: 1,
                    autoFocus: true,
                    placeholder: t('dashboard_paste_database_base64_hint'),
                    onChange: (e)=>setBase64Value(e.target.value)
                    ,
                    value: base64Value,
                    inputProps: {
                        style: {
                            height: 147
                        },
                        'data-testid': 'base64_input'
                    },
                    variant: "outlined"
                }),
                sx: {
                    display: 'flex',
                    p: 0
                }
            },
            {
                label: t('qr_code'),
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromQRCodeImageBox, {
                            file: file,
                            onChange: setFile,
                            onScan: setScannedValue,
                            onError: ()=>{
                                enqueueSnackbar(t('set_up_qr_scanner_fail'), {
                                    variant: 'error'
                                });
                            }
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreFromQRCodeCameraBox, {
                            onScan: (scannedValue1)=>{
                                setFile(null);
                                setScannedValue(scannedValue1);
                            },
                            onError: ()=>{
                                enqueueSnackbar(t('set_up_qr_scanner_fail'), {
                                    variant: 'error'
                                });
                            }
                        })
                    ]
                }),
                sx: {
                    p: 0
                }
            }, 
        ],
        state,
        height: 176
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetupForm, {
        primary: t('set_up_advance_restore'),
        secondary: t('set_up_advance_restore_hint'),
        content: /*#__PURE__*/ (0,jsx_runtime.jsx)(AbstractTab/* default */.Z, {
            ...tabProps
        }),
        actions: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classnames_default()(classes.button, classes.importButton),
                    variant: "contained",
                    disabled: !(tabState === 0 && nickname && mnemonicWordsValue) && !(tabState === 1 && base64Value) && !(tabState === 2 && scannedValue),
                    onClick: async ()=>{
                        try {
                            const persona = await (tabState === 0 ? service/* default.Identity.restoreFromMnemonicWords */.ZP.Identity.restoreFromMnemonicWords(mnemonicWordsValue, nickname, password) : tabState === 1 ? service/* default.Identity.restoreFromBase64 */.ZP.Identity.restoreFromBase64(base64Value) : service/* default.Identity.restoreFromBackup */.ZP.Identity.restoreFromBackup(scannedValue));
                            importPersona(persona);
                        } catch  {
                            enqueueSnackbar(t('set_up_advance_restore_fail'), {
                                variant: 'error'
                            });
                        }
                    },
                    "data-testid": "import_button",
                    children: t('set_up_button_import')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    color: "inherit",
                    variant: "text",
                    onClick: ()=>history.goBack()
                    ,
                    "data-testid": "cancel_button",
                    children: t('set_up_button_cancel')
                })
            ]
        })
    }));
}
//#endregion
//#region restore database confirmation
const useRestoreDatabaseConfirmationStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        databasePreviewCardTable: {
            width: 432,
            border: `solid 1px ${theme.palette.divider}`,
            borderRadius: 4,
            padding: 32,
            marginTop: 0,
            marginLeft: -32,
            marginBottom: 38,
            [theme.breakpoints.down('sm')]: {
                width: '100%',
                marginLeft: 0
            }
        },
        databasePreviewCardLabel: {
            fontSize: 18
        },
        databasePreviewCardIcon: {
            width: 18,
            height: 18
        }
    })
);
function RestoreDatabaseConfirmation() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = useSetupFormStyles();
    const { classes: restoreDatabaseConfirmationClasses  } = useRestoreDatabaseConfirmationStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const { enqueueSnackbar  } = (0,src/* useSnackbar */.Ds)();
    const { uuid: uuid1  } = (0,utils/* useQueryParams */.Kx)([
        'uuid'
    ]);
    const [imported, setImported] = (0,react.useState)(false);
    const { value: backup  } = (0,useAsync/* default */.Z)(()=>service/* default.Welcome.getUnconfirmedBackup */.ZP.Welcome.getUnconfirmedBackup(uuid1 !== null && uuid1 !== void 0 ? uuid1 : '')
    );
    var _createdAt;
    const time = new Date((_createdAt = backup === null || backup === void 0 ? void 0 : backup._meta_.createdAt) !== null && _createdAt !== void 0 ? _createdAt : 0);
    var _length;
    const personas = (_length = backup === null || backup === void 0 ? void 0 : backup.personas.length) !== null && _length !== void 0 ? _length : 0;
    var _length1;
    const profiles = (_length1 = backup === null || backup === void 0 ? void 0 : backup.profiles.length) !== null && _length1 !== void 0 ? _length1 : 0;
    var _length2;
    const posts = (_length2 = backup === null || backup === void 0 ? void 0 : backup.posts.length) !== null && _length2 !== void 0 ? _length2 : 0;
    var _length3;
    const wallets = (_length3 = backup === null || backup === void 0 ? void 0 : backup.wallets.length) !== null && _length3 !== void 0 ? _length3 : 0;
    const records = [
        {
            type: DatabaseRecordType.Persona,
            length: personas,
            checked: imported === true
        },
        {
            type: DatabaseRecordType.Profile,
            length: profiles,
            checked: imported === true
        },
        {
            type: DatabaseRecordType.Post,
            length: posts,
            checked: imported === true
        },
        {
            type: DatabaseRecordType.Wallet,
            length: wallets,
            checked: imported === true
        }, 
    ];
    const restoreFinish = async ()=>{
        if ((backup === null || backup === void 0 ? void 0 : backup.personas.length) && personas === 1 && profiles === 0) {
            history.push(`${SetupStep/* SetupStep.ConnectNetwork */.d.ConnectNetwork}?identifier=${encodeURIComponent(backup.personas[0].identifier)}`);
        } else if (personas === 0 && profiles === 0) {
            history.replace(SetupStep/* SetupStep.CreatePersona */.d.CreatePersona);
        } else {
            history.replace('/');
        }
    };
    const restoreConfirmation = async ()=>{
        const failToRestore = ()=>enqueueSnackbar(t('set_up_restore_fail'), {
                variant: 'error'
            })
        ;
        if (uuid1) {
            try {
                setImported('loading');
                await service/* default.Welcome.confirmBackup */.ZP.Welcome.confirmBackup(uuid1);
                setImported(true);
            } catch  {
                failToRestore();
                setImported(false);
            }
        } else {
            failToRestore();
        }
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(SetupForm, {
        primary: t('set_up_restore_confirmation'),
        secondary: imported === true ? time.getTime() === 0 ? t('unknown_time') : t('dashboard_restoration_successful_hint', {
            time: time.toLocaleString()
        }) : t('set_up_restore_confirmation_hint'),
        content: /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabasePreviewCard, {
            classes: {
                table: restoreDatabaseConfirmationClasses.databasePreviewCardTable,
                label: restoreDatabaseConfirmationClasses.databasePreviewCardLabel,
                icon: restoreDatabaseConfirmationClasses.databasePreviewCardIcon
            },
            records: records
        }),
        actions: imported === true ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
            className: classnames_default()(classes.button, classes.doneButton),
            variant: "contained",
            onClick: restoreFinish,
            "data-testid": "finish_button",
            children: t('set_up_button_done')
        }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    className: classes.button,
                    variant: "contained",
                    disabled: imported === 'loading',
                    onClick: restoreConfirmation,
                    "data-testid": "confirm_button",
                    children: t('set_up_button_confirm')
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                    color: "inherit",
                    variant: "text",
                    onClick: ()=>history.goBack()
                    ,
                    children: t('set_up_button_cancel')
                })
            ]
        })
    }));
}
//#endregion
const setupTheme = (0,utils/* extendsTheme */.Ql)((theme)=>({
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    input: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    },
                    multiline: {
                        paddingTop: 14.5,
                        paddingBottom: 14.5
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: {
                        marginTop: theme.spacing(2),
                        marginBottom: 0,
                        '&:first-child': {
                            marginTop: 0
                        }
                    }
                },
                defaultProps: {
                    fullWidth: true,
                    variant: 'outlined',
                    margin: 'normal'
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        '&[hidden]': {
                            visibility: 'hidden'
                        }
                    }
                },
                defaultProps: {
                    size: 'medium'
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'transparent'
                    }
                }
            },
            MuiTabs: {
                styleOverrides: {
                    root: {
                        minHeight: 38
                    },
                    indicator: {
                        height: 1
                    }
                }
            },
            MuiTab: {
                styleOverrides: {
                    root: {
                        minHeight: 38,
                        borderBottom: `solid 1px ${theme.palette.divider}`
                    }
                }
            }
        }
    })
);
const CurrentStep = ()=>{
    const { step  } = (0,react_router/* useParams */.UO)();
    switch(step){
        case SetupStep/* SetupStep.ConsentDataCollection */.d.ConsentDataCollection:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConsentDataCollection, {
            }));
        case SetupStep/* SetupStep.CreatePersona */.d.CreatePersona:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CreatePersona, {
            }));
        case SetupStep/* SetupStep.ConnectNetwork */.d.ConnectNetwork:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectNetwork, {
            }));
        case SetupStep/* SetupStep.RestoreDatabase */.d.RestoreDatabase:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreDatabase, {
            }));
        case SetupStep/* SetupStep.RestoreDatabaseAdvance */.d.RestoreDatabaseAdvance:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreDatabaseAdvance, {
            }));
        case SetupStep/* SetupStep.RestoreDatabaseConfirmation */.d.RestoreDatabaseConfirmation:
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RestoreDatabaseConfirmation, {
            }));
        default:
            return null;
    }
};
function DashboardSetupRouter(props) {
    const { path  } = (0,react_router/* useRouteMatch */.$B)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardRouterContainer, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: setupTheme,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: `${path}/:step`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CurrentStep, {
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: "*",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
                            path: "*",
                            to: `${Route/* DashboardRoute.Setup */.q.Setup}/${SetupStep/* SetupStep.CreatePersona */.d.CreatePersona}`
                        })
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@material-ui+core@5.0.0-beta.4_9573e673e44e76d42dfd8ee27e505b8d/node_modules/@material-ui/core/colors/grey.js
var grey = __webpack_require__(63417);
;// CONCATENATED MODULE: ./src/extension/options-page/DashboardComponents/DashboardSnackbar.tsx





const DashboardSnackbar_useStyles = (0,src/* makeStyles */.ZL)()({
    root: {
        width: 795,
        height: 48
    }
});
const DashboardSnackbar = /*#__PURE__*/ (/* unused pure expression or super */ null && (forwardRef((props, ref)=>{
    const { key , message  } = props;
    const { classes  } = DashboardSnackbar_useStyles();
    const { closeSnackbar  } = useSnackbar();
    const theme = useTheme();
    return(/*#__PURE__*/ _jsxs("div", {
        id: String(key),
        className: classes.root,
        ref: ref,
        children: [
            key,
            theme.palette.primary.main,
            message
        ]
    }));
})));
function DashboardSnackbarProvider({ children  }) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* SnackbarProvider */.wT, {
        maxSnack: 3,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        children: children
    }));
}

;// CONCATENATED MODULE: ./src/extension/options-page/DashboardRouters/Nav.tsx



const navTheme = (theme)=>theme
;
function DashboardNavRouter(props) {
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardRouterContainer, {
        title: "Mask",
        compact: true,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ThemeProvider/* default */.Z, {
            theme: navTheme,
            children: props.children
        })
    }));
};

// EXTERNAL MODULE: ./src/components/shared/ErrorBoundary.tsx
var ErrorBoundary = __webpack_require__(31491);
// EXTERNAL MODULE: ./src/UIRoot.tsx
var UIRoot = __webpack_require__(13820);
// EXTERNAL MODULE: ./src/plugin-infra/host.ts + 16 modules
var host = __webpack_require__(22920);
;// CONCATENATED MODULE: ./src/extension/options-page/index.tsx


































const options_page_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        root: {
            '--monospace': 'SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace',
            '--drawerHeader': dark ? '#121212' : theme.palette.primary.main,
            '--drawerBody': dark ? '#121212' : theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                '--drawerBody': 'transparent'
            },
            backgroundColor: dark ? grey/* default.900 */.Z[900] : grey/* default.50 */.Z[50],
            userSelect: 'none',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            [theme.breakpoints.up('md')]: {
                display: 'grid',
                gridTemplateColumns: '1fr [content-start] 1110px [content-end] 1fr',
                gridTemplateRows: '32px [content-start] auto [content-end] 50px',
                placeItems: 'center'
            },
            transition: 'filter 0.3s linear',
            willChange: 'filter',
            '& *::-webkit-scrollbar': {
                display: 'none'
            }
        },
        container: {
            width: '100%',
            height: '100%',
            overflow: 'auto',
            borderRadius: 12,
            backgroundColor: dark ? '#121212' : '#FFFFFF',
            gridRow: 'content-start / content-end',
            gridColumn: 'content-start / content-end',
            display: 'flex',
            [theme.breakpoints.down('sm')]: {
                borderRadius: 0
            }
        },
        suspend: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        footer: {
            gridRow: 'content-end / span 1',
            gridColumn: 'content-start / content-end'
        },
        blur: {
            filter: 'blur(3px)'
        },
        errorTitle: {
            marginBottom: theme.spacing(3)
        },
        errorMessage: {
            maxWidth: '50%',
            maxHeight: 300,
            whiteSpace: 'pre-wrap',
            marginBottom: theme.spacing(3)
        }
    };
});
function DashboardUI() {
    const { t  } = (0,utils/* useI18N */.M1)();
    const { classes  } = options_page_useStyles();
    const history = (0,react_router/* useHistory */.k6)();
    const xsMatched = (0,utils/* useMatchXS */.IN)();
    const routers = [
        [
            t('personas'),
            Route/* DashboardRoute.Personas */.q.Personas,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(PeopleOutlined/* default */.Z, {
            })
        ],
        [
            t('wallets'),
            Route/* DashboardRoute.Wallets */.q.Wallets,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CreditCard/* default */.Z, {
            })
        ],
        [
            t('contacts'),
            Route/* DashboardRoute.Contacts */.q.Contacts,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BookmarkBorderOutlined/* default */.Z, {
            })
        ],
        [
            t('plugins'),
            Route/* DashboardRoute.Plugins */.q.Plugins,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Power/* default */.Z, {
            })
        ],
        [
            t('settings'),
            Route/* DashboardRoute.Settings */.q.Settings,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingsOutlined/* default */.Z, {
            })
        ], 
    ].filter((x)=>x
    );
    // jump to persona if needed
    const [reloadSpy, setReloadSpy] = (0,react.useState)(false);
    const { loading , error  } = (0,useAsync/* default */.Z)(async ()=>{
        if (false) {}
        if (location.hash.includes(SetupStep/* SetupStep.ConsentDataCollection */.d.ConsentDataCollection)) return;
        const personas = (await service/* default.Identity.queryMyPersonas */.ZP.Identity.queryMyPersonas()).filter((x)=>!x.uninitialized
        );
        // the user need setup at least one persona
        if (!personas.length) {
            history.replace(`${Route/* DashboardRoute.Setup */.q.Setup}/${SetupStep/* SetupStep.CreatePersona */.d.CreatePersona}`);
            return;
        }
        // the user has got more than one personas, so we cannot make decision for user.
        if (personas.length !== 1) return;
        // the user has linked the only persona with some profiles
        if (personas.some((x)=>x.linkedProfiles.size
        )) return;
        history.replace(`${Route/* DashboardRoute.Setup */.q.Setup}/${SetupStep/* SetupStep.ConnectNetwork */.d.ConnectNetwork}?identifier=${encodeURIComponent(personas[0].identifier.toText())}`);
    }, [
        reloadSpy
    ]);
    const renderDashboard = (children)=>{
        return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.root,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.container,
                    children: children
                }),
                xsMatched ? null : /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
                    className: classes.footer,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FooterLine, {
                    })
                })
            ]
        }));
    };
    if (loading) return renderDashboard(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.suspend,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
        })
    }));
    if (error) return renderDashboard(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.suspend,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.errorTitle,
                variant: "h5",
                children: t('dashboard_load_failed_title')
            }),
            error.message ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Card/* default */.Z, {
                className: classes.errorMessage,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ShowcaseBox/* default */.Z, {
                    children: error.message
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ActionButton/* default */.ZP, {
                variant: "text",
                onClick: ()=>setReloadSpy((x)=>!x
                    )
                ,
                children: t('reload')
            })
        ]
    }));
    const drawer = /*#__PURE__*/ (0,jsx_runtime.jsx)(Drawer, {
        routers: routers,
        exitDashboard: null
    });
    return renderDashboard(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            xsMatched ? null : drawer,
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_router/* Switch */.rs, {
                children: [
                    utils/* Flags.has_no_browser_tab_ui */.vU.has_no_browser_tab_ui ? /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: Route/* DashboardRoute.Nav */.q.Nav,
                        component: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardNavRouter, {
                                children: drawer
                            })
                    }) : null,
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: Route/* DashboardRoute.Personas */.q.Personas,
                        component: (0,ErrorBoundary/* withErrorBoundary */.P)(DashboardPersonasRouter)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: Route/* DashboardRoute.Wallets */.q.Wallets,
                        component: (0,ErrorBoundary/* withErrorBoundary */.P)(DashboardWalletsRouter)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: Route/* DashboardRoute.Contacts */.q.Contacts,
                        component: (0,ErrorBoundary/* withErrorBoundary */.P)(DashboardContactsRouter)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: Route/* DashboardRoute.Plugins */.q.Plugins,
                        component: (0,ErrorBoundary/* withErrorBoundary */.P)(DashboardSettingsRouter)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: Route/* DashboardRoute.Settings */.q.Settings,
                        component: (0,ErrorBoundary/* withErrorBoundary */.P)(Settings_DashboardSettingsRouter)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Route */.AW, {
                        path: Route/* DashboardRoute.Setup */.q.Setup,
                        component: (0,ErrorBoundary/* withErrorBoundary */.P)(DashboardSetupRouter)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(react_router/* Redirect */.l_, {
                        path: "*",
                        to: utils/* Flags.has_no_browser_tab_ui */.vU.has_no_browser_tab_ui && xsMatched ? Route/* DashboardRoute.Nav */.q.Nav : Route/* DashboardRoute.Personas */.q.Personas
                    })
                ]
            })
        ]
    }));
}
const PluginRender = (0,plugin_infra_src/* createInjectHooksRenderer */.EK)(plugin_infra_src/* useActivatedPluginsDashboard */.eE, (x)=>x.GlobalInjection
);
function Dashboard() {
    return (0,UIRoot/* MaskUIRoot */.Y)(/*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardSnackbarProvider, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NoSsr/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(HashRouter, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(CssBaseline/* default */.ZP, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DashboardUI, {
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginRender, {
                    })
                ]
            })
        })
    }));
}
/* harmony default export */ const options_page = ((0,utils/* createNormalReactRoot */.jv)(/*#__PURE__*/ (0,jsx_runtime.jsx)(Dashboard, {
})));
(0,plugin_infra_src/* startPluginDashboard */.CB)((0,host/* createPluginHost */.R)());


/***/ }),

/***/ 29489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ PluginI18NFieldRender),
/* harmony export */   "e": () => (/* binding */ usePluginI18NField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77268);


function PluginI18NFieldRender({ pluginID , field  }) {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: field.i18nKey ? t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            }) : field.fallback
        }));
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: field
    }));
}
function usePluginI18NField() {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
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


/***/ }),

/***/ 86705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ku": () => (/* reexport safe */ _0x__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "qN": () => (/* reexport safe */ _0x__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "Ru": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.Ru),
/* harmony export */   "jg": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.jg),
/* harmony export */   "s9": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.s9),
/* harmony export */   "yC": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.yC),
/* harmony export */   "u7": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.u7),
/* harmony export */   "QQ": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.QQ),
/* harmony export */   "fI": () => (/* reexport safe */ _uniswap__WEBPACK_IMPORTED_MODULE_1__.fI),
/* harmony export */   "r2": () => (/* reexport safe */ _balancer__WEBPACK_IMPORTED_MODULE_2__.r2),
/* harmony export */   "L4": () => (/* reexport safe */ _balancer__WEBPACK_IMPORTED_MODULE_2__.L4),
/* harmony export */   "qT": () => (/* reexport safe */ _balancer__WEBPACK_IMPORTED_MODULE_2__.qT),
/* harmony export */   "PM": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.PM),
/* harmony export */   "ag": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.ag),
/* harmony export */   "rV": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.rV),
/* harmony export */   "rI": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.rI),
/* harmony export */   "IS": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.IS),
/* harmony export */   "Wg": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Wg),
/* harmony export */   "J2": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.J2),
/* harmony export */   "wh": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.wh),
/* harmony export */   "lA": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.lA),
/* harmony export */   "EV": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.EV),
/* harmony export */   "Nd": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Nd),
/* harmony export */   "Q9": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Q9),
/* harmony export */   "Bq": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.Bq),
/* harmony export */   "bi": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.bi),
/* harmony export */   "DX": () => (/* reexport safe */ _trader__WEBPACK_IMPORTED_MODULE_3__.DX),
/* harmony export */   "xh": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.xh),
/* harmony export */   "zl": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.zl),
/* harmony export */   "V1": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.V1),
/* harmony export */   "hb": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.hb),
/* harmony export */   "Ey": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.Ey),
/* harmony export */   "J3": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.J3),
/* harmony export */   "NU": () => (/* reexport safe */ _trending__WEBPACK_IMPORTED_MODULE_4__.NU),
/* harmony export */   "S5": () => (/* reexport safe */ _sushiswap__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "vZ": () => (/* reexport safe */ _sushiswap__WEBPACK_IMPORTED_MODULE_5__.v),
/* harmony export */   "yo": () => (/* reexport safe */ _sashimiswap__WEBPACK_IMPORTED_MODULE_6__.y),
/* harmony export */   "D9": () => (/* reexport safe */ _sashimiswap__WEBPACK_IMPORTED_MODULE_6__.D),
/* harmony export */   "PE": () => (/* reexport safe */ _quickswap__WEBPACK_IMPORTED_MODULE_7__.P),
/* harmony export */   "jM": () => (/* reexport safe */ _quickswap__WEBPACK_IMPORTED_MODULE_7__.j),
/* harmony export */   "Dh": () => (/* reexport safe */ _pancakeswap__WEBPACK_IMPORTED_MODULE_8__.D),
/* harmony export */   "tm": () => (/* reexport safe */ _pancakeswap__WEBPACK_IMPORTED_MODULE_8__.t),
/* harmony export */   "bC": () => (/* reexport safe */ _dodo__WEBPACK_IMPORTED_MODULE_9__.b)
/* harmony export */ });
/* harmony import */ var _0x__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35238);
/* harmony import */ var _uniswap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42848);
/* harmony import */ var _balancer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70287);
/* harmony import */ var _trader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43148);
/* harmony import */ var _trending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67531);
/* harmony import */ var _sushiswap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55870);
/* harmony import */ var _sashimiswap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40325);
/* harmony import */ var _quickswap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10775);
/* harmony import */ var _pancakeswap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87138);
/* harmony import */ var _dodo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(45088);












/***/ }),

/***/ 56669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K7": () => (/* binding */ resolveDataProviderName),
/* harmony export */   "tA": () => (/* binding */ resolveDataProviderLink),
/* harmony export */   "uM": () => (/* binding */ resolveTradeProviderName),
/* harmony export */   "dx": () => (/* binding */ resolveTradePairLink),
/* harmony export */   "xo": () => (/* binding */ resolveDaysName),
/* harmony export */   "Ly": () => (/* binding */ resolveUniswapWarningLevel),
/* harmony export */   "zN": () => (/* binding */ resolveUniswapWarningLevelColor),
/* harmony export */   "RH": () => (/* binding */ resolveZrxTradePoolName)
/* harmony export */ });
/* unused harmony exports resolveCurrencyName, resolveTradeProviderLink */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26428);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34513);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24982);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22209);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_5__);






function resolveCurrencyName(currency) {
    return [
        currency.name,
        currency.symbol ? `"${currency.symbol}"` : '',
        currency.description ? `(${currency.description})` : '', 
    ].join(' ');
}
function resolveDataProviderName(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return 'CoinGecko';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return 'CoinMarketCap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return 'Uniswap Info';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(dataProvider);
    }
}
function resolveDataProviderLink(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return 'https://www.coingecko.com/';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return 'https://coinmarketcap.com/';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return 'https://info.uniswap.org/';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(dataProvider);
    }
}
function resolveTradeProviderName(tradeProvider) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return 'Uniswap V2';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return 'Uniswap V3';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
            return '0x';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            return 'SushiSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return 'SashimiSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return 'Balancer';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return 'QuickSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return 'PancakeSwap';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
            return 'DODO';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(tradeProvider);
    }
}
function resolveTradeProviderLink(tradeProvider, networkType) {
    switch(tradeProvider){
        case TradeProvider.UNISWAP_V2:
            return 'https://uniswap.org/';
        case TradeProvider.UNISWAP_V3:
            return 'https://uniswap.org/';
        case TradeProvider.ZRX:
            switch(networkType){
                case NetworkType.Ethereum:
                    return 'https://api.0x.org/';
                case NetworkType.Binance:
                    return 'https://bsc.api.0x.org/';
                case NetworkType.Polygon:
                    return 'https://polygon.api.0x.org/';
                case NetworkType.Arbitrum:
                    return '';
                default:
                    safeUnreachable(networkType);
                    return '';
            }
        case TradeProvider.SUSHISWAP:
            return 'https://sushiswapclassic.org/';
        case TradeProvider.SASHIMISWAP:
            return 'https://sashimi.cool/';
        case TradeProvider.BALANCER:
            return 'https://balancer.exchange/';
        case TradeProvider.QUICKSWAP:
            return 'https://quickswap.exchange/';
        case TradeProvider.PANCAKESWAP:
            return 'https://exchange.pancakeswap.finance/#/swap';
        case TradeProvider.DODO:
            return 'https://app.dodoex.io';
        default:
            unreachable(tradeProvider);
    }
}
function resolveTradePairLink(tradeProvider, address, networkType) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return `https://v2.info.uniswap.org/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return `https://info.uniswap.org/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.ZRX */ .z4.ZRX:
            return '';
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.DODO */ .z4.DODO:
            {
                if (!_constants__WEBPACK_IMPORTED_MODULE_3__/* .networkNames */ .bC[networkType]) {
                    console.error('Unsupported network: ', networkType);
                    return '';
                }
                return urlcat__WEBPACK_IMPORTED_MODULE_5___default()('https://app.dodoex.io/exchange/:address', {
                    address,
                    network: _constants__WEBPACK_IMPORTED_MODULE_3__/* .networkNames */ .bC[networkType],
                    forced: true
                });
            }
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            switch(networkType){
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Ethereum */ .tds.Ethereum:
                    return `https://analytics.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Binance */ .tds.Binance:
                    return `https://analytics-bsc.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Polygon */ .tds.Polygon:
                    return `https://analytics-polygon.sushi.com/pairs/${address}`;
                case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_4__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
                    return '';
                default:
                    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .safeUnreachable */ .P)(networkType);
                    return '';
            }
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return `https://info.sashimi.cool/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return `https://pools.balancer.exchange/#/pool/${address}/`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return `https://info.quickswap.exchange/pair/${address}`;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return `https://pancakeswap.info/pool/${address}`;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(tradeProvider);
    }
}
function resolveDaysName(days) {
    if (days === 0) return 'MAX';
    if (days >= 365) return `${Math.floor(days / 365)}y`;
    if (days >= 30) return `${Math.floor(days / 30)}m`;
    if (days >= 7) return `${Math.floor(days / 7)}w`;
    return `${days}d`;
}
function resolveUniswapWarningLevel(priceImpact) {
    const priceImpact_ = priceImpact.multipliedBy(_constants__WEBPACK_IMPORTED_MODULE_3__/* .BIPS_BASE */ .PM);
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_NON_EXPERT_BLOCKED */ .lA)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN */ .EV)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_HIGH */ .Wg)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_MEDIUM */ .wh)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM;
    if (priceImpact_.isGreaterThan(_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRICE_IMPACT_LOW */ .J2)) return _types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW;
    return;
}
function resolveUniswapWarningLevelColor(warningLevel) {
    const COLOR_MAP = {
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.LOW */ .Os.LOW]: 'inherit',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.MEDIUM */ .Os.MEDIUM]: '#f3841e',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.HIGH */ .Os.HIGH]: '#f3841e',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.CONFIRMATION_REQUIRED */ .Os.CONFIRMATION_REQUIRED]: '#ff6871',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .WarningLevel.BLOCKED */ .Os.BLOCKED]: '#ff6871'
    };
    return warningLevel ? COLOR_MAP[warningLevel] : '#27ae60';
}
function resolveZrxTradePoolName(swapSource) {
    const SWAP_SOURCE_NAME_MAP = {
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ZRX */ .Zy.ZRX]: '0x',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ACryptoS */ .Zy.ACryptoS]: 'ACryptoS',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ApeSwap */ .Zy.ApeSwap]: 'ApeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BakerySwap */ .Zy.BakerySwap]: 'BakerySwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Balancer */ .Zy.Balancer]: 'Balancer',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.BalancerV2 */ .Zy.BalancerV2]: 'Balancer V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Bancor */ .Zy.Bancor]: 'Bancor',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Belt */ .Zy.Belt]: 'Belt',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CafeSwap */ .Zy.CafeSwap]: 'CafeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CheeseSwap */ .Zy.CheeseSwap]: 'CheeseSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.ComethSwap */ .Zy.ComethSwap]: 'ComethSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Component */ .Zy.Component]: 'Component',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Cream */ .Zy.Cream]: 'CREAM',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CryptoCom */ .Zy.CryptoCom]: 'CryptoCom',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Curve */ .Zy.Curve]: 'Curve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.CurveV2 */ .Zy.CurveV2]: 'Curve V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dfyn */ .Zy.Dfyn]: 'Dfyn',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Dodo */ .Zy.Dodo]: 'DODO',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.DodoV2 */ .Zy.DodoV2]: 'DODO V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Ellipsis */ .Zy.Ellipsis]: 'Ellipsis',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Eth2Dai */ .Zy.Eth2Dai]: 'Eth2Dai',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.FirebirdOneSwap */ .Zy.FirebirdOneSwap]: 'FirebirdOneSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.IronSwap */ .Zy.IronSwap]: 'IronSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JetSwap */ .Zy.JetSwap]: 'JetSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.JulSwap */ .Zy.JulSwap]: 'JulSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Kyber */ .Zy.Kyber]: 'Kyber',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.KyberDMM */ .Zy.KyberDMM]: 'KyberDMM',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Lido */ .Zy.Lido]: 'Lido',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Linkswap */ .Zy.Linkswap]: 'Linkswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.LiquidityProvider */ .Zy.LiquidityProvider]: 'LiquidityProvider',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MStable */ .Zy.MStable]: 'mStable',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MakerPsm */ .Zy.MakerPsm]: 'MakerPsm',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mesh */ .Zy.Mesh]: 'Mesh',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Mooniswap */ .Zy.Mooniswap]: 'Mooniswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiBridge */ .Zy.MultiBridge]: 'MultiBridge',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.MultiHop */ .Zy.MultiHop]: 'MultiHop',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Native */ .Zy.Native]: 'Native',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Nerve */ .Zy.Nerve]: 'Nerve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Oasis */ .Zy.Oasis]: 'Oasis',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwap */ .Zy.PancakeSwap]: 'PancakeSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.PancakeSwapV2 */ .Zy.PancakeSwapV2]: 'PancakeSwap V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.QuickSwap */ .Zy.QuickSwap]: 'QuickSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Saddle */ .Zy.Saddle]: 'Saddle',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Shell */ .Zy.Shell]: 'Shell',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Smoothy */ .Zy.Smoothy]: 'Smoothy',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SnowSwap */ .Zy.SnowSwap]: 'SnowSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.SushiSwap */ .Zy.SushiSwap]: 'SushiSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Swerve */ .Zy.Swerve]: 'Swerve',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.Uniswap */ .Zy.Uniswap]: 'Uniswap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV2 */ .Zy.UniswapV2]: 'Uniswap V2',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.UniswapV3 */ .Zy.UniswapV3]: 'Uniswap V3',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.WaultSwap */ .Zy.WaultSwap]: 'WaultSwap',
        [_types__WEBPACK_IMPORTED_MODULE_0__/* .ZrxTradePool.xSigma */ .Zy.xSigma]: 'xSigma'
    };
    var _swapSource;
    return (_swapSource = SWAP_SOURCE_NAME_MAP[swapSource]) !== null && _swapSource !== void 0 ? _swapSource : 'Unknown';
}


/***/ }),

/***/ 56914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ useAvailableDataProviders)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43402);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22209);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59965);



function useAvailableDataProviders(type, keyword) {
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_0__/* .useChainId */ .xxU)();
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        return _messages__WEBPACK_IMPORTED_MODULE_1__/* .PluginTraderRPC.getAvailableDataProviders */ .V.getAvailableDataProviders(type, keyword);
    }, [
        chainId,
        type,
        keyword
    ]);
}


/***/ }),

/***/ 23982:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useCurrentDataProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34513);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63371);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);




function useCurrentDataProvider(availableDataProviders) {
    const [dataProvider, setDataProvider] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(availableDataProviders.length ? availableDataProviders[0] : _masknet_public_api__WEBPACK_IMPORTED_MODULE_1__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO);
    const currentDataProvider = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_2__.useValueRef)(_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentDataProviderSettings */ .gG);
    // sync data provider
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!availableDataProviders.length) return;
        setDataProvider(availableDataProviders.includes(currentDataProvider) ? currentDataProvider : availableDataProviders[0]);
    }, [
        availableDataProviders.sort().join(),
        currentDataProvider
    ]);
    return dataProvider;
}


/***/ }),

/***/ 75474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ PluginTransakMessages)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47713);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62262);


if (false) {}
const PluginTransakMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PLUGIN_IDENTIFIER */ .J3);


/***/ }),

/***/ 34616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hF": () => (/* binding */ resolvePortfolioDataProviderName),
/* harmony export */   "xe": () => (/* binding */ resolveDebankTransactionType),
/* harmony export */   "dW": () => (/* binding */ resolveDebankChainName),
/* harmony export */   "mJ": () => (/* binding */ resolveZerionAssetsScopeName),
/* harmony export */   "Rw": () => (/* binding */ resolveZerionTransactionsScopeName),
/* harmony export */   "uA": () => (/* binding */ resolveChainByScope)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22209);


function resolvePortfolioDataProviderName(provider) {
    switch(provider){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.ZERION */ .g38.ZERION:
            return 'Zerion';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .PortfolioProvider.DEBANK */ .g38.DEBANK:
            return 'Debank';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(provider);
    }
}
function resolveDebankTransactionType(category) {
    switch(category){
        case 'send':
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .FilterTransactionType.SEND */ .slS.SEND;
        case 'receive':
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .FilterTransactionType.RECEIVE */ .slS.RECEIVE;
        default:
            return _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .FilterTransactionType.ALL */ .slS.ALL;
    }
}
function resolveDebankChainName(network) {
    switch(network){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .tds.Ethereum:
            return 'eth';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .tds.Binance:
            return 'bsc';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .tds.Polygon:
            return 'matic';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
            return 'arbitrum';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(network);
            return '';
    }
}
function resolveZerionAssetsScopeName(network) {
    switch(network){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .tds.Ethereum:
            return 'assets';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .tds.Binance:
            return 'bsc-assets';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .tds.Polygon:
            return 'polygon-assets';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(network);
            return '';
    }
}
function resolveZerionTransactionsScopeName(network) {
    switch(network){
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Ethereum */ .tds.Ethereum:
            return 'transactions';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Binance */ .tds.Binance:
            return '';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Polygon */ .tds.Polygon:
            return '';
        case _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType.Arbitrum */ .tds.Arbitrum:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(network);
            return '';
    }
}
function resolveChainByScope(scope) {
    switch(scope){
        case 'assets':
            return {
                chain: 'eth',
                chainId: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Mainnet */ .a_e.Mainnet
            };
        case 'bsc-assets':
            return {
                chain: 'bsc',
                chainId: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.BSC */ .a_e.BSC
            };
        case 'polygon-assets':
            return {
                chain: 'matic',
                chainId: _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .ChainId.Matic */ .a_e.Matic
            };
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .safeUnreachable */ .P)(scope);
            return {
                chain: 'unknown'
            };
    }
}


/***/ }),

/***/ 80850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ej": () => (/* reexport */ DebankTransactionDirection),
  "Q$": () => (/* reexport */ ZerionRBDTransactionType),
  "so": () => (/* reexport */ ZerionTransactionDirection),
  "JH": () => (/* reexport */ ZerionTransactionStatus)
});

// UNUSED EXPORTS: FilterTransactionType

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/zerion.ts
var ZerionRBDTransactionType;
(function(ZerionRBDTransactionType1) {
    ZerionRBDTransactionType1["SEND"] = 'send';
    ZerionRBDTransactionType1["RECEIVE"] = 'receive';
    ZerionRBDTransactionType1["TRADE"] = 'trade';
    ZerionRBDTransactionType1["AUTHORIZE"] = 'authorize';
    ZerionRBDTransactionType1["EXECUTION"] = 'execution';
    ZerionRBDTransactionType1["DEPLOYMENT"] = 'deployment';
    ZerionRBDTransactionType1["CANCEL"] = 'cancel';
    ZerionRBDTransactionType1["DEPOSIT"] = 'deposit';
    ZerionRBDTransactionType1["WITHDRAW"] = 'withdraw';
    ZerionRBDTransactionType1["BORROW"] = 'borrow';
    ZerionRBDTransactionType1["REPAY"] = 'repay';
    ZerionRBDTransactionType1["STAKE"] = 'stake';
    ZerionRBDTransactionType1["UNSTAKE"] = 'unstake';
    ZerionRBDTransactionType1["CLAIM"] = 'claim';
})(ZerionRBDTransactionType || (ZerionRBDTransactionType = {
}));
var ZerionTransactionStatus;
(function(ZerionTransactionStatus1) {
    ZerionTransactionStatus1["CONFIRMED"] = 'confirmed';
    ZerionTransactionStatus1["FAILED"] = 'failed';
    ZerionTransactionStatus1["PENDING"] = 'pending';
})(ZerionTransactionStatus || (ZerionTransactionStatus = {
}));
var ZerionTransactionDirection;
(function(ZerionTransactionDirection1) {
    ZerionTransactionDirection1["IN"] = 'in';
    ZerionTransactionDirection1["OUT"] = 'out';
    ZerionTransactionDirection1["SELF"] = 'self';
})(ZerionTransactionDirection || (ZerionTransactionDirection = {
}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/debank.ts
var DebankTransactionDirection;
(function(DebankTransactionDirection1) {
    DebankTransactionDirection1["SEND"] = 'send';
    DebankTransactionDirection1["RECEIVE"] = 'receive';
})(DebankTransactionDirection || (DebankTransactionDirection = {
}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/portfolio.ts
var FilterTransactionType;
(function(FilterTransactionType1) {
    FilterTransactionType1["ALL"] = 'all';
    FilterTransactionType1["SEND"] = 'send';
    FilterTransactionType1["RECEIVE"] = 'receive';
})(FilterTransactionType || (FilterTransactionType = {
}));

;// CONCATENATED MODULE: ./src/plugins/Wallet/types/index.ts





/***/ }),

/***/ 37131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uq": () => (/* binding */ texts),
/* harmony export */   "PS": () => (/* binding */ createInternalSettings),
/* harmony export */   "TI": () => (/* binding */ createGlobalSettings),
/* harmony export */   "Lk": () => (/* binding */ createNetworkSettings)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76898);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13017);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98621);




const texts = new WeakMap();
const cached = new Map();
const lastEventId = new Map();
if ((0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.Environment.ManifestBackground)) {
    _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsChanged.on */ .y.events.createInternalSettingsChanged.on(async (payload)=>{
        const { id , key , value , initial  } = payload;
        const stored = await _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Helper.getStorage */ .ZP.Helper.getStorage(key);
        if (!initial || initial && typeof stored === 'undefined') await _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Helper.setStorage */ .ZP.Helper.setStorage(key, value);
        const updated = await _extension_service__WEBPACK_IMPORTED_MODULE_0__/* .default.Helper.getStorage */ .ZP.Helper.getStorage(key);
        if (typeof updated === 'undefined') return;
        _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsUpdated.sendToAll */ .y.events.createInternalSettingsUpdated.sendToAll({
            id,
            key,
            value: updated,
            initial
        });
    });
}
_utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsUpdated.on */ .y.events.createInternalSettingsUpdated.on(async (payload)=>{
    const { id , key , value  } = payload;
    const settings = cached.get(key);
    if (!settings) return;
    var ref;
    if (((ref = lastEventId.get(key)) !== null && ref !== void 0 ? ref : 0) > id) return;
    settings.value = value;
    settings.resolve(settings.value);
});
function createInternalSettings(key, value, comparer = (a, b)=>a === b
) {
    const settings = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.ValueRef(value, comparer);
    const [readyPromise, resolve, reject] = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .defer */ .PQ)();
    Object.assign(settings, {
        key,
        ready: false,
        readyPromise,
        resolve,
        reject
    });
    const id = Date.now();
    cached.set(key, settings);
    lastEventId.set(key, id);
    _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsChanged.sendToAll */ .y.events.createInternalSettingsChanged.sendToAll({
        id,
        key,
        value,
        initial: true
    });
    settings.addListener((newVal)=>{
        const id1 = Date.now();
        lastEventId.set(key, id1);
        _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createInternalSettingsChanged.sendToAll */ .y.events.createInternalSettingsChanged.sendToAll({
            id: id1,
            key,
            value: newVal,
            initial: false
        });
    });
    return settings;
}
function createGlobalSettings(key, value, UITexts, comparer = (a, b)=>a === b
) {
    const settings = createInternalSettings(`settings+${key}`, value, comparer);
    texts.set(settings, UITexts);
    return settings;
}
function createNetworkSettings(settingsKey, defaultValue) {
    const cached1 = {
    };
    _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createNetworkSettingsReady.on */ .y.events.createNetworkSettingsReady.on((networkKey)=>{
        if (networkKey.startsWith('plugin:') || settingsKey === 'pluginsEnabled') return;
        if (!(networkKey in cached1)) cached1[networkKey] = createInternalSettings(`${networkKey}+${settingsKey}`, defaultValue);
    });
    return new Proxy(cached1, {
        get (target, networkKey) {
            if (!(networkKey in target)) {
                const settings = createInternalSettings(`${networkKey}+${settingsKey}`, defaultValue);
                target[networkKey] = settings;
                settings.readyPromise.then(()=>_utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessage.events.createNetworkSettingsReady.sendToAll */ .y.events.createNetworkSettingsReady.sendToAll(networkKey)
                );
            }
            return target[networkKey];
        },
        set (target, settingKey, value) {
            const settings = target[settingKey];
            settings.value = value;
            return true;
        }
    });
}


/***/ }),

/***/ 38719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ isMobileFacebook),
/* harmony export */   "x": () => (/* binding */ facebookDomain)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

const isMobileFacebook = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ContentScript) ? location.hostname === 'm.facebook.com' : navigator.userAgent.match(/Mobile|mobile/);
const facebookDomain = isMobileFacebook ? 'https://m.facebook.com/' : 'https://facebook.com/';


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

/***/ 98602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ requestSNSAdaptorPermission)
/* harmony export */ });
/* unused harmony export hasSNSAdaptorPermission */
function requestSNSAdaptorPermission(ui) {
    var ref;
    var ref1;
    return (ref1 = (ref = ui.permission) === null || ref === void 0 ? void 0 : ref.request()) !== null && ref1 !== void 0 ? ref1 : browser.permissions.request({
        origins: [
            ...ui.declarativePermissions.origins
        ]
    });
}
function hasSNSAdaptorPermission(ui) {
    var ref;
    var ref1;
    return (ref1 = (ref = ui.permission) === null || ref === void 0 ? void 0 : ref.has()) !== null && ref1 !== void 0 ? ref1 : browser.permissions.contains({
        origins: [
            ...ui.declarativePermissions.origins
        ]
    });
}


/***/ }),

/***/ 1076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$2": () => (/* binding */ decodePublicKeyUI),
/* harmony export */   "XF": () => (/* binding */ encodeTextPayloadUI),
/* harmony export */   "X2": () => (/* binding */ decodeTextPayloadUI)
/* harmony export */ });
/* unused harmony export encodePublicKeyUI */
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23294);

function encodePublicKeyUI(x) {
    var ref;
    const f = (ref = activatedSocialNetworkUI.utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.encoder;
    if (f) return f(x) || x;
    return x;
}
function decodePublicKeyUI(x) {
    var ref;
    const f = (ref = _ui__WEBPACK_IMPORTED_MODULE_0__.activatedSocialNetworkUI.utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.decoder;
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

/***/ 73405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* unused harmony export mapContactAvatarColor */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var _material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19392);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4527);



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
    const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)().palette.mode;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _Avatar__WEBPACK_IMPORTED_MODULE_0__.q)
/* harmony export */ });
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73405);



/***/ }),

/***/ 61893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ft": () => (/* binding */ untilElementAvailable),
/* harmony export */   "Up": () => (/* binding */ untilDomLoaded),
/* harmony export */   "Hx": () => (/* binding */ untilDocumentReady),
/* harmony export */   "vv": () => (/* binding */ nthChild)
/* harmony export */ });
/* unused harmony export isDocument */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);


const isDocument = (node)=>node.nodeType === Node.DOCUMENT_NODE
;
const untilElementAvailable = async (ls, timeout = 5000)=>{
    const w = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.IntervalWatcher(ls);
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
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(r)) break;
        r = r.children[v];
    }
    return r;
};


/***/ }),

/***/ 33059:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IN": () => (/* reexport safe */ _useMatchXS__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H),
/* harmony export */   "eD": () => (/* reexport safe */ _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_5__.D),
/* harmony export */   "Kx": () => (/* reexport safe */ _useQueryParams__WEBPACK_IMPORTED_MODULE_6__.K),
/* harmony export */   "MN": () => (/* reexport safe */ _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__.M),
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_8__.E)
/* harmony export */ });
/* harmony import */ var _useControlledDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15677);
/* harmony import */ var _useMatchXS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86993);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2492);
/* harmony import */ var _useQRCodeImageScan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14830);
/* harmony import */ var _useQRCodeVideoScan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21069);
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48711);
/* harmony import */ var _useQueryParams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19728);
/* harmony import */ var _useSettingSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8146);
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62628);
/* harmony import */ var _useVideoDevices__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73774);













/***/ }),

/***/ 14830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useQRCodeImageScan)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43402);



function useQRCodeImageScan(image) {
    const scanner = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new BarcodeDetector({
        formats: [
            'qr_code'
        ]
    }));
    const [source, setSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    return (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(async ()=>{
        const image1 = await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .loadImage */ .po)(source);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useQRCodeVideoScan)
/* harmony export */ });
/* unused harmony export getBackVideoDeviceId */
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89008);
/* harmony import */ var _useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48711);
/* harmony import */ var _components_QRScanner_ShapeDetectionPolyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60279);
/// <reference path="../../components/QRScanner/ShapeDetectionSpec.d.ts" />
/** This file is published under MIT License */ 




async function getBackVideoDeviceId() {
    var ref;
    const devices = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.filter)(await navigator.mediaDevices.enumerateDevices(), ({ kind  })=>kind === 'videoinput'
    );
    const back = (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.find)(devices, ({ label  })=>!/front/i.test(label) && /back|rear/i.test(label)
    );
    var ref1;
    return (ref1 = (ref = back !== null && back !== void 0 ? back : (0,lodash_es__WEBPACK_IMPORTED_MODULE_0__.first)(devices)) === null || ref === void 0 ? void 0 : ref.deviceId) !== null && ref1 !== void 0 ? ref1 : null;
}
function useQRCodeVideoScan(video, isScanning, deviceId, onResult, onError) {
    // TODO!: ? not work See https://github.com/DimensionDev/Maskbook/issues/810
    // ? Get video stream
    {
        const permission = (0,_useQueryNavigatorPermission__WEBPACK_IMPORTED_MODULE_2__/* .useQueryNavigatorPermission */ .D)(isScanning, 'camera');
        const [mediaStream, setMediaStream] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
        const scanner = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new BarcodeDetector({
            formats: [
                'qr_code'
            ]
        }));
        const lastScanning = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
        const errorTimes = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);
        (0,react_use__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(async ()=>{
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

/***/ 19728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useQueryParams)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1868);

function useQueryParams(query) {
    const history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_0__/* .useHistory */ .k6)();
    const result = {
    };
    const search = new URLSearchParams(history.location.search);
    query.forEach((q)=>result[q] = search.get(q)
    );
    return result;
}


/***/ }),

/***/ 73774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ useVideoDevices)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80663);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56119);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);


function useVideoDevices() {
    const permissionState = (0,react_use__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
        name: 'camera'
    });
    const { devices =[]  } = (0,react_use__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)();
    // we dispatch a fake event if permission changed
    // in order to fix the bug described in this issues
    // https://github.com/streamich/react-use/issues/1318
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
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
/* harmony export */   "qE": () => (/* reexport safe */ _components___WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "IN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.IN),
/* harmony export */   "H9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "eD": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.eD),
/* harmony export */   "Kx": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Kx),
/* harmony export */   "MN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.MN),
/* harmony export */   "E": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.E),
/* harmony export */   "p_": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.p_),
/* harmony export */   "ou": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ou),
/* harmony export */   "ad": () => (/* reexport safe */ _shadow_root__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "$I": () => (/* reexport safe */ _suspends__WEBPACK_IMPORTED_MODULE_5__.$),
/* harmony export */   "a_": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.a_),
/* harmony export */   "bH": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.bH),
/* harmony export */   "PN": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.PN),
/* harmony export */   "qX": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.qX),
/* harmony export */   "Qn": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.Qn),
/* harmony export */   "ll": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.ll),
/* harmony export */   "YT": () => (/* reexport safe */ _type_transform__WEBPACK_IMPORTED_MODULE_6__.YT),
/* harmony export */   "YU": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_8__.Y),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_11__.vU),
/* harmony export */   "c_": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.c),
/* harmony export */   "cc": () => (/* reexport safe */ _getTextUILength__WEBPACK_IMPORTED_MODULE_12__.L),
/* harmony export */   "M1": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.M),
/* harmony export */   "ZK": () => (/* reexport safe */ _i18n_next_ui__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "ag": () => (/* reexport safe */ _i18n_next__WEBPACK_IMPORTED_MODULE_14__.a),
/* harmony export */   "J3": () => (/* reexport safe */ _memoize__WEBPACK_IMPORTED_MODULE_16__.J),
/* harmony export */   "yV": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_17__.y),
/* harmony export */   "uM": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.u),
/* harmony export */   "b5": () => (/* reexport safe */ _permissions__WEBPACK_IMPORTED_MODULE_19__.b),
/* harmony export */   "CU": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.CU),
/* harmony export */   "Wu": () => (/* reexport safe */ _side_effects__WEBPACK_IMPORTED_MODULE_20__.Wu),
/* harmony export */   "jv": () => (/* reexport safe */ _createNormalReactRoot__WEBPACK_IMPORTED_MODULE_21__.j),
/* harmony export */   "Ql": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Ql),
/* harmony export */   "Uk": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Uk),
/* harmony export */   "Nh": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_22__.Nh),
/* harmony export */   "Cw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Cw),
/* harmony export */   "Se": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Se),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.gw),
/* harmony export */   "Yu": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Yu),
/* harmony export */   "Ms": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Ms),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_23__.Vs),
/* harmony export */   "fy": () => (/* reexport safe */ _watcher__WEBPACK_IMPORTED_MODULE_24__.f),
/* harmony export */   "aW": () => (/* reexport safe */ _collectNodeText__WEBPACK_IMPORTED_MODULE_25__.a)
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
/* harmony import */ var _collectNodeText__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(84497);































/***/ }),

/***/ 99515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ou": () => (/* reexport safe */ _renderInShadowRoot__WEBPACK_IMPORTED_MODULE_1__.o),
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ createReactRootShadowed)
/* harmony export */ });
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

/***/ 24910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bH": () => (/* binding */ compressBackupFile),
/* harmony export */   "PN": () => (/* binding */ decompressBackupFile)
/* harmony export */ });
/* unused harmony export sanitizeBackupFile */
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
    const profileIdentifier_ = (profileIdentifier !== null && profileIdentifier !== void 0 ? profileIdentifier : linkedProfile) ? _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(linkedProfile, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap() : undefined;
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
        (0,_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_1__/* .compressSecp256k1Key */ .N)(privateKey, 'private'),
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

/***/ 88066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a_": () => (/* reexport */ latest/* UpgradeBackupJSONFile */.a),
  "bH": () => (/* reexport */ BackupFileShortRepresentation/* compressBackupFile */.bH),
  "PN": () => (/* reexport */ BackupFileShortRepresentation/* decompressBackupFile */.PN),
  "qX": () => (/* reexport */ SECP256k1_Compression/* decompressSecp256k1Key */.q),
  "Qn": () => (/* reexport */ Payload/* deconstructPayload */.Q),
  "ll": () => (/* reexport */ String_ArrayBuffer/* encodeArrayBuffer */.ll),
  "YT": () => (/* reexport */ String_ArrayBuffer/* encodeText */.YT)
});

// UNUSED EXPORTS: CryptoKeyToJsonWebKey, JWKToKey, JsonWebKeyToCryptoKey, asyncIteratorToArray, asyncIteratorToAsyncFunction, asyncIteratorWithResult, compressSecp256k1Key, constructAlpha38, decodeArrayBuffer, decodeText, getBackupPreviewInfo, getKeyParameter, keyToAddr, keyToJWK, memorizeAsyncGenerator, sanitizeBackupFile, serialization

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ startWatch)
/* harmony export */ });
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80773);

function startWatch(watcher, signal) {
    watcher.setDOMProxyOption({
        afterShadowRootInit: {
            mode: _flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
        },
        beforeShadowRootInit: {
            mode: _flags__WEBPACK_IMPORTED_MODULE_0__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
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

/***/ 76575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eT": () => (/* binding */ PostInfoProvider),
/* harmony export */   "oQ": () => (/* binding */ usePostInfo),
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails),
/* harmony export */   "FT": () => (/* binding */ usePostInfoSharedPublic)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63371);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88085);




const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const PostInfoProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    }));
});
function usePostInfo() {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
}
const usePostInfoDetails = new Proxy({
    __proto__: null
}, {
    get (_, key) {
        if (typeof key === 'symbol') throw new Error();
        if (_[key]) return _[key];
        _[key] = function usePostInfoDetails1() {
            const postInfo = usePostInfo();
            if (!postInfo) throw new TypeError('No post context');
            if (!(key in postInfo)) throw new TypeError();
            const k = postInfo[key];
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__.ValueRef) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableMap) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useObservableValues)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ObservableSet) return (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useObservableValues)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription__WEBPACK_IMPORTED_MODULE_2__.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}
function usePostInfoSharedPublic() {
    const info = usePostInfoDetails.postPayload();
    if (info.err) return false;
    const payload = info.val;
    if (payload.version !== -38) return false;
    return !!payload.sharedPublic;
}


/***/ }),

/***/ 47713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.D4),
/* harmony export */   "mF": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.mF),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.Pz),
/* harmony export */   "EK": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.EK),
/* harmony export */   "I4": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.I4),
/* harmony export */   "V8": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.V8),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.Sc),
/* harmony export */   "eT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.eT),
/* harmony export */   "oQ": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.oQ),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.H9),
/* harmony export */   "FT": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.FT),
/* harmony export */   "Hq": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.Hq),
/* harmony export */   "x4": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.x4),
/* harmony export */   "bD": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.bD),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fo),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fg),
/* harmony export */   "eu": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.eu),
/* harmony export */   "Je": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_3__.J)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61182);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87509);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11555);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50586);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93363);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76575);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64614);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63046);











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
/* harmony export */   "mF": () => (/* binding */ useActivatedPluginSNSAdaptorWithOperatingChainSupportedMet),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor)
/* harmony export */ });
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
    const chainId = (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_3__/* .useChainId */ .xxU)();
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

/***/ 63046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i1": () => (/* binding */ registeredPlugins),
/* harmony export */   "fg": () => (/* binding */ registeredPluginIDs),
/* harmony export */   "_W": () => (/* binding */ getPluginDefine),
/* harmony export */   "fo": () => (/* binding */ registerPlugin),
/* harmony export */   "eu": () => (/* binding */ useRegisteredPlugins)
/* harmony export */ });
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
    if (__registered.has(def.ID)) return;
    if (!__meetRegisterRequirement(def)) return;
    __registered.set(def.ID, def);
}
function useRegisteredPlugins() {
    return [
        ...__registered.values()
    ];
}
function __meetRegisterRequirement(def) {
    // arch check
    if ( true && !def.enableRequirement.architecture.app) return false;
    if (false) {}
    // build variant check
    if (true) {
        if ( true && def.enableRequirement.target !== 'stable') {
            return false;
        } else if (false) {}
    }
    return true;
}


/***/ }),

/***/ 50586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ activatedPluginsWorker)
/* harmony export */ });
/* unused harmony export startPluginWorker */
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9284);

const { startDaemon , activated  } = (0,_manage__WEBPACK_IMPORTED_MODULE_0__/* .createManager */ .m)({
    getLoader: (plugin)=>plugin.Worker
});
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;


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

/***/ 93621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42788);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45367);


const base = {
    ID: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_IDENTIFIER */ .J3,
    icon: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ICON */ .E0,
    name: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_NAME */ .EW
    },
    description: {
        fallback: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_DESCRIPTION */ .PP
    },
    publisher: {
        name: {
            fallback: 'Mask Network'
        },
        link: 'https://mask.io/'
    },
    enableRequirement: {
        architecture: {
            app: true,
            web: true
        },
        networks: {
            type: 'opt-out',
            networks: {
            }
        },
        target: 'stable'
    },
    management: {
        alwaysOn: true
    },
    i18n: _locales__WEBPACK_IMPORTED_MODULE_1__/* .languages */ .Mj
};


/***/ }),

/***/ 32326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ue": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "R$": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "UB": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.UB),
/* harmony export */   "Ag": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.Ag),
/* harmony export */   "J3": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.J3),
/* harmony export */   "js": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.js)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93621);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79933);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42788);
// Do not export JSX from this file. It might break some runtime that does not have DOM.





/***/ }),

/***/ 55465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ fallbackLng)
/* harmony export */ });
const fallbackLng = {
    'zh-CN': [
        'zh-TW',
        'en'
    ],
    'zh-TW': [
        'zh-CN',
        'en'
    ],
    default: [
        'en'
    ]
};


/***/ }),

/***/ 47290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "N_": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55465);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39271);




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

/***/ 39874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lk": () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "gw": () => (/* reexport safe */ _delay__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "Vs": () => (/* reexport safe */ _timeout__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "Y0": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_3__.Y),
/* harmony export */   "s_": () => (/* reexport safe */ _pollingTask__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "Hd": () => (/* reexport safe */ _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__.H)
/* harmony export */ });
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38075);
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69460);
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58442);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6884);
/* harmony import */ var _pollingTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48967);
/* harmony import */ var _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61440);








/***/ }),

/***/ 30246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90335);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)()) // create a id for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return event.on((_ev)=>{
            const event1 = _ev;
            // ignore the event from the same hook
            if (event1.hookId === HOOK_ID) return;
            setOpen(event1.open);
            onUpdateByRemote === null || onUpdateByRemote === void 0 ? void 0 : onUpdateByRemote(_ev);
        });
    }, [
        onUpdateByRemote,
        event,
        HOOK_ID
    ]);
    const timer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onUpdateByLocal = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((ev)=>{
        setOpen(ev.open);
        const timer_ = timer.current;
        if (timer_ !== null) clearTimeout(timer_);
        timer.current = setTimeout(()=>{
            const payload = {
                hookId: HOOK_ID,
                ...ev
            };
            tabType === 'self' ? event.sendToLocal(payload) : event.sendToVisiblePages(payload);
        }, 100);
    }, [
        event,
        tabType,
        HOOK_ID
    ]);
    const openDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onUpdateByLocal({
            open: true
        });
    }, []);
    const closeDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
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

/***/ 43115:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Df": () => (/* reexport safe */ _Dialog__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   "yu": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.y),
/* harmony export */   "N8": () => (/* reexport safe */ _DialogStack__WEBPACK_IMPORTED_MODULE_2__.N)
/* harmony export */ });
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45242);
/* harmony import */ var _DialogTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49343);
/* harmony import */ var _DialogStack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91271);





/***/ }),

/***/ 30646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wT": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_2__.wT),
/* harmony export */   "Ds": () => (/* reexport safe */ notistack__WEBPACK_IMPORTED_MODULE_2__.Ds),
/* harmony export */   "YO": () => (/* binding */ CustomSnackbarProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7714);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13325);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15497);
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24513);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10525);








const useStyles = (0,_makeStyles__WEBPACK_IMPORTED_MODULE_3__/* .makeStyles */ .Z)()({
    root: {
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.textLight */ .ZN.textLight,
        pointerEvents: 'inherit'
    },
    success: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.greenMain */ .ZN.greenMain,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    },
    error: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.redMain */ .ZN.redMain,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    },
    info: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.secondaryInfoText */ .ZN.secondaryInfoText,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    },
    warning: {
        background: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.warning */ .ZN.warning,
        color: _constants__WEBPACK_IMPORTED_MODULE_4__/* .MaskColorVar.lightestBackground */ .ZN.lightestBackground
    }
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ children  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { classes  } = useStyles();
    const onDismiss = (key)=>{
        return ()=>{
            var ref1;
            (ref1 = ref.current) === null || ref1 === void 0 ? void 0 : ref1.closeSnackbar(key);
        };
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(notistack__WEBPACK_IMPORTED_MODULE_2__/* .SnackbarProvider */ .wT, {
        ref: ref,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'center'
        },
        hideIconVariant: true,
        action: (key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
                size: "large",
                onClick: onDismiss(key),
                sx: {
                    color: 'inherit'
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
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
        children: children
    }));
});


/***/ }),

/***/ 44977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yu": () => (/* reexport safe */ _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__.yu),
/* harmony export */   "Df": () => (/* reexport safe */ _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__.Df),
/* harmony export */   "N8": () => (/* reexport safe */ _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__.N8),
/* harmony export */   "E1": () => (/* reexport safe */ _ButtonGroupTab_index__WEBPACK_IMPORTED_MODULE_1__.E),
/* harmony export */   "YO": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_2__.YO),
/* harmony export */   "wT": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_2__.wT),
/* harmony export */   "Ds": () => (/* reexport safe */ _Snackbar__WEBPACK_IMPORTED_MODULE_2__.Ds),
/* harmony export */   "xV": () => (/* reexport safe */ _SearchableList__WEBPACK_IMPORTED_MODULE_3__.x),
/* harmony export */   "FU": () => (/* reexport safe */ _TextField__WEBPACK_IMPORTED_MODULE_4__.F),
/* harmony export */   "qA": () => (/* reexport safe */ _CountdownButton__WEBPACK_IMPORTED_MODULE_5__.q),
/* harmony export */   "oe": () => (/* reexport safe */ _SendingCodeField__WEBPACK_IMPORTED_MODULE_6__.o),
/* harmony export */   "g8": () => (/* reexport safe */ _PhoneNumberField__WEBPACK_IMPORTED_MODULE_7__.g)
/* harmony export */ });
/* harmony import */ var _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43115);
/* harmony import */ var _ButtonGroupTab_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12502);
/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30646);
/* harmony import */ var _SearchableList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53377);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68362);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35557);
/* harmony import */ var _SendingCodeField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37783);
/* harmony import */ var _PhoneNumberField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6378);










/***/ }),

/***/ 17067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "XR": () => (/* binding */ NoEffectUsePortalShadowRootContext),
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83710);



/**
 * ! Do not export !
 *
 * You SHOULD NOT use this in React directly
 */ let mountingPoint = null;
function setupPortalShadowRoot(init, preventEventPropagationList) {
    if (mountingPoint) return;
    const shadow = document.body.appendChild(document.createElement('div')).attachShadow(init);
    for (const each of preventEventPropagationList){
        shadow.addEventListener(each, (e)=>e.stopPropagation()
        );
    }
    mountingPoint = shadow.appendChild(document.createElement('div'));
}
/** usePortalShadowRoot under this context does not do anything. (And it will return an empty container). */ const NoEffectUsePortalShadowRootContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
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
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NoEffectUsePortalShadowRootContext)).current;
    if (disabled) return renderer(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [findMountingShadowRef, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
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
    const { container  } = doms;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(IsolatedRender, {
        ...doms,
        findMountingShadowRef: findMountingShadowRef,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                style: {
                    display: 'none'
                },
                ref: (ref)=>findMountingShadowRef !== ref && setRef(ref)
            }),
            renderer(container)
        ]
    }));
}
const IsolatedRender = ({ container , root , style , children , findMountingShadowRef  })=>{
    const update = useUpdate();
    const css = (0,_index__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentShadowRootStyles */ .I3)(findMountingShadowRef);
    const containerInUse = container.children.length !== 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        container.appendChild = bind(container.appendChild, container, update);
        container.removeChild = bind(container.removeChild, container, update);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!containerInUse) return root.remove();
        const shadow = PortalShadowRoot();
        if (root.parentElement === shadow) return;
        shadow.appendChild(root);
    }, [
        containerInUse,
        root
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (findMountingShadowRef && style.innerHTML !== css) style.innerHTML = css;
    }, [
        style,
        css,
        findMountingShadowRef
    ]);
    return children;
};
function createShadowRootForwardedComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    }));
}
function createShadowRootForwardedPopperComponent(Component) {
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                PopperProps: {
                    container
                },
                ...props,
                ref: ref
            })
        );
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
    const [, _update] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return ()=>_update((i)=>i + 1
        )
    ;
}
function useSideEffectRef(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 14967:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HV": () => (/* binding */ useEthereumConstants),
/* harmony export */   "N_": () => (/* binding */ useGitcoinConstants),
/* harmony export */   "af": () => (/* binding */ getITOConstants),
/* harmony export */   "mg": () => (/* binding */ useITOConstants),
/* harmony export */   "Hk": () => (/* binding */ getLBPConstants),
/* harmony export */   "GV": () => (/* binding */ getRedPacketConstants),
/* harmony export */   "AA": () => (/* binding */ useRedPacketConstants),
/* harmony export */   "aV": () => (/* binding */ getTokenConstants),
/* harmony export */   "kd": () => (/* binding */ useTokenConstants),
/* harmony export */   "Gr": () => (/* binding */ getTraderConstants),
/* harmony export */   "L7": () => (/* binding */ useTraderConstants),
/* harmony export */   "$o": () => (/* binding */ getTrendingConstants),
/* harmony export */   "t0": () => (/* binding */ getRPCConstants),
/* harmony export */   "j8": () => (/* binding */ useRPCConstants),
/* harmony export */   "hy": () => (/* binding */ useTokenAssetBaseURLConstants),
/* harmony export */   "tL": () => (/* binding */ usePoolTogetherConstants),
/* harmony export */   "JH": () => (/* binding */ useGoodGhostingConstants),
/* harmony export */   "$Y": () => (/* binding */ useOpenseaAPIConstants),
/* harmony export */   "DJ": () => (/* binding */ FAKE_SIGN_PASSWORD)
/* harmony export */ });
/* unused harmony exports getAirdropConstants, useAirdropConstants, getEthereumConstants, getGitcoinConstants, useLBPConstants, useTrendingConstants, getTokenAssetBaseURLConstants, getPoolTogetherConstants, getGoodGhostingConstants, getOpenseaAPIConstants */
/* harmony import */ var _masknet_web3_constants_data_airdrop_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51104);
/* harmony import */ var _masknet_web3_constants_data_ethereum_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43973);
/* harmony import */ var _masknet_web3_constants_data_gitcoin_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57906);
/* harmony import */ var _masknet_web3_constants_data_ito_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54212);
/* harmony import */ var _masknet_web3_constants_data_lbp_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47068);
/* harmony import */ var _masknet_web3_constants_data_red_packet_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(50781);
/* harmony import */ var _masknet_web3_constants_data_token_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32914);
/* harmony import */ var _masknet_web3_constants_data_trader_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90697);
/* harmony import */ var _masknet_web3_constants_data_trending_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12124);
/* harmony import */ var _masknet_web3_constants_data_rpc_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62424);
/* harmony import */ var _masknet_web3_constants_data_pooltogether_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(44563);
/* harmony import */ var _masknet_web3_constants_data_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23815);
/* harmony import */ var _masknet_web3_constants_data_good_ghosting_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72108);
/* harmony import */ var _masknet_web3_constants_data_opensea_api_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(38150);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22599);















const getAirdropConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_airdrop_json__WEBPACK_IMPORTED_MODULE_0__);
const useAirdropConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getAirdropConstants);
const getEthereumConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_ethereum_json__WEBPACK_IMPORTED_MODULE_1__);
const useEthereumConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getEthereumConstants);
const getGitcoinConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_gitcoin_json__WEBPACK_IMPORTED_MODULE_2__);
const useGitcoinConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getGitcoinConstants);
const getITOConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_ito_json__WEBPACK_IMPORTED_MODULE_3__);
const useITOConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getITOConstants);
const getLBPConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_lbp_json__WEBPACK_IMPORTED_MODULE_4__);
const useLBPConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getLBPConstants);
const getRedPacketConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_red_packet_json__WEBPACK_IMPORTED_MODULE_5__);
const useRedPacketConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getRedPacketConstants);
const getTokenConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_token_json__WEBPACK_IMPORTED_MODULE_6__);
const useTokenConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTokenConstants);
const getTraderConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_trader_json__WEBPACK_IMPORTED_MODULE_7__);
const useTraderConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTraderConstants);
const getTrendingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_trending_json__WEBPACK_IMPORTED_MODULE_8__);
const useTrendingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTrendingConstants);
var _WEB3_CONSTANTS_RPC;
const getRPCConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transformFromJSON */ .rm)((_WEB3_CONSTANTS_RPC = "{\"RPC\":{\"Mainnet\":[\"https://damp-holy-water.quiknode.pro/d5bcb6c5e265afd11fecb0d52275afa961487a29/\",\"https://mainnet.infura.io/v3/50676f4e9b9d4780a34fc8a503ff7f4f\",\"https://throbbing-blue-bird.quiknode.io/73e66978-1a45-4f91-97f3-25d59b51a00e/YScEAjYfzZqNphokjzn-Zt3sZsOd0Nav5sauA3j03se0LOseR8PQFyBfINzhYStWrg44VfLLfCFE34FR2CA_kQ==/\"],\"Ropsten\":[\"https://ropsten.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"Rinkeby\":[\"https://rinkeby.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"Kovan\":[\"https://kovan.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"Gorli\":[\"https://goerli.infura.io/v3/11f8b6b36f4a408e85d8a4e52d31edc5\"],\"BSC\":[\"https://bsc-dataseed.binance.org/\"],\"BSCT\":[\"https://data-seed-prebsc-1-s1.binance.org:8545/\"],\"Matic\":[\"https://polygon-mainnet.infura.io/v3/50676f4e9b9d4780a34fc8a503ff7f4f\"],\"Mumbai\":[\"https://polygon-mumbai.infura.io/v3/50676f4e9b9d4780a34fc8a503ff7f4f\"],\"Arbitrum\":[\"https://arb1.arbitrum.io/rpc\"],\"Arbitrum_Rinkeby\":[\"https://rinkeby.arbitrum.io/rpc\"]},\"RPC_WEIGHTS\":{\"Mainnet\":[0,1,1,2],\"Ropsten\":[0,0,0,0],\"Rinkeby\":[0,0,0,0],\"Kovan\":[0,0,0,0],\"Gorli\":[0,0,0,0],\"BSC\":[0,0,0,0],\"BSCT\":[0,0,0,0],\"Matic\":[0,0,0,0],\"Mumbai\":[0,0,0,0],\"Arbitrum\":[0,0,0,0],\"Arbitrum_Rinkeby\":[0,0,0,0]}}") !== null && _WEB3_CONSTANTS_RPC !== void 0 ? _WEB3_CONSTANTS_RPC : '', _masknet_web3_constants_data_rpc_json__WEBPACK_IMPORTED_MODULE_9__);
const useRPCConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getRPCConstants);
const getTokenAssetBaseURLConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_token_asset_base_url_json__WEBPACK_IMPORTED_MODULE_11__);
const useTokenAssetBaseURLConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getTokenAssetBaseURLConstants);
const getPoolTogetherConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_pooltogether_json__WEBPACK_IMPORTED_MODULE_10__);
const usePoolTogetherConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getPoolTogetherConstants);
const getGoodGhostingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_good_ghosting_json__WEBPACK_IMPORTED_MODULE_12__);
const useGoodGhostingConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getGoodGhostingConstants);
const getOpenseaAPIConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .transform */ .vs)(_masknet_web3_constants_data_opensea_api_json__WEBPACK_IMPORTED_MODULE_13__);
const useOpenseaAPIConstants = (0,_utils__WEBPACK_IMPORTED_MODULE_14__/* .hookTransform */ .SL)(getOpenseaAPIConstants);
// for estimate gas
const FAKE_SIGN_PASSWORD = '0x75466cc969717b172b14253aaeebdc958f2b5037a852c1337650ed4978242dd9';


/***/ }),

/***/ 17283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iW": () => (/* reexport */ useERC20TokenApproveCallback/* ApproveStateType */.i),
  "uC": () => (/* reexport */ useMulticall/* MulticalStateType */.uC),
  "n$": () => (/* reexport */ useTransactionState/* TransactionStateType */.n),
  "OP": () => (/* reexport */ useContract/* createContract */.OP),
  "mA": () => (/* reexport */ useAccount/* useAccount */.m),
  "QE": () => (/* reexport */ useAllowTestnet/* useAllowTestnet */.Q),
  "Li": () => (/* reexport */ useAssets/* useAssets */.L),
  "l8": () => (/* reexport */ useAssetsByTokenList/* useAssetsByTokenList */.l),
  "Ov": () => (/* reexport */ useBlockNumber/* useBlockNumber */.O),
  "YT": () => (/* reexport */ useBlockie/* useBlockie */.Y),
  "x5": () => (/* reexport */ useChainColor/* useChainColor */.x),
  "K1": () => (/* reexport */ useChainDetailed/* useChainDetailed */.K),
  "xx": () => (/* reexport */ useChainId/* useChainId */.xx),
  "iN": () => (/* reexport */ useChainId/* useChainIdMatched */.iN),
  "as": () => (/* reexport */ useChainId/* useChainIdValid */.as),
  "dX": () => (/* reexport */ useCollectibles/* useCollectibles */.d),
  "cq": () => (/* reexport */ useContract/* useContract */.cq),
  "GP": () => (/* reexport */ useContract/* useContracts */.GP),
  "PC": () => (/* reexport */ useCurrentBlockTimestamp/* useCurrentBlockTimestamp */.P),
  "i1": () => (/* reexport */ useERC165/* useERC165 */.i),
  "Sj": () => (/* reexport */ useERC20TokenApproveCallback/* useERC20TokenApproveCallback */.S),
  "yp": () => (/* reexport */ useERC20TokenBalance/* useERC20TokenBalance */.y),
  "kI": () => (/* reexport */ useERC20TokenDetailed/* useERC20TokenDetailed */.k),
  "u8": () => (/* reexport */ useERC20TokenDetailedFromTokenLists/* useERC20TokenDetailedFromTokenLists */.u),
  "mP": () => (/* reexport */ useERC20Tokens/* useERC20Tokens */.m),
  "mr": () => (/* reexport */ useERC20TokensDetailedFromTokenLists/* useERC20TokensDetailedFromTokenLists */.m),
  "GT": () => (/* reexport */ useERC20TokensPaged/* useERC20TokensPaged */.G),
  "P1": () => (/* reexport */ useERC721ContractDetailed/* useERC721ContractDetailed */.P),
  "_g": () => (/* reexport */ useERC721TokenDetailedCallback/* useERC721TokenDetailedCallback */._),
  "if": () => (/* reexport */ useEtherPrice/* useEtherPrice */.i),
  "jv": () => (/* reexport */ useFungibleTokenDetailed/* useFungibleTokenDetailed */.j),
  "g3": () => (/* reexport */ useFungibleTokenWatched/* useFungibleTokenWatched */.g),
  "bs": () => (/* reexport */ useERC20TokenDetailed/* useFungibleTokensDetailed */.b),
  "Fh": () => (/* reexport */ useGasPrice/* useGasPrice */.F),
  "bD": () => (/* reexport */ useGetPastLogsParams),
  "hx": () => (/* reexport */ useMnemonicWordsPuzzle/* useMnemonicWordsPuzzle */.h),
  "w0": () => (/* reexport */ useMulticall/* useMutlipleContractSingleData */.w0),
  "hj": () => (/* reexport */ useNativeTokenBalance/* useNativeTokenBalance */.h),
  "JS": () => (/* reexport */ useNativeTokenDetailed/* useNativeTokenDetailed */.J),
  "Hv": () => (/* reexport */ useNativeTokenWrapperCallback/* useNativeTokenWrapperCallback */.H),
  "bL": () => (/* reexport */ useNetworkType/* useNetworkType */.b),
  "XE": () => (/* reexport */ useNonce/* useNonce */.X),
  "Fq": () => (/* reexport */ useResolveENS),
  "gG": () => (/* reexport */ useResolveUNS),
  "es": () => (/* reexport */ useMulticall/* useSingleContractMultipleData */.es),
  "PB": () => (/* reexport */ useStableTokensDebank/* useStableTokensDebank */.P),
  "mM": () => (/* reexport */ useTokenBalance/* useTokenBalance */.m),
  "z7": () => (/* reexport */ useTokenTransferCallback/* useTokenTransferCallback */.z),
  "pl": () => (/* reexport */ useTransactionState/* useTransactionState */.p),
  "nC": () => (/* reexport */ useTransactions/* useTransactions */.n),
  "du": () => (/* reexport */ useTrustedERC20Tokens/* useTrustedERC20Tokens */.d),
  "Os": () => (/* reexport */ useWallet/* useWallet */.O),
  "rB": () => (/* reexport */ useWallets/* useWallets */.r),
  "$6": () => (/* reexport */ useWeb3/* useWeb3 */.$)
});

// UNUSED EXPORTS: ERC165_INTERFACE_ID, ERC721_ENUMERABLE_INTERFACE_ID, getERC721TokenDetailedFromChain, getERC721TokenDetailedFromOpensea, useAssetsFromChain, useAssetsFromProvider, useAssetsMerged, useBlockNumberOnce, useChainIDAvailable, useERC1155TokenAssetDetailed, useERC20TokenAllowance, useERC20TokenTransferCallback, useERC721ContractIsApproveForAll, useERC721ContractSetApproveForAllCallback, useERC721TokenBalance, useERC721TokenByIndex, useERC721TokenDetailed, useERC721TokenDetailedOwnerList, useERC721TokenTransferCallback, useMulticallCallback, useMultipleContractMultipleData, useMutlicallStateDecoded, useNativeTransferCallback, useTokensBalance, useTransaction, useTransactionReceipt

// EXTERNAL MODULE: ../web3-shared/src/hooks/useAccount.ts
var useAccount = __webpack_require__(9429);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAllowTestnet.ts
var useAllowTestnet = __webpack_require__(29953);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useBlockie.ts
var useBlockie = __webpack_require__(95197);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(1200);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainId.ts
var useChainId = __webpack_require__(69509);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainDetailed.ts
var useChainDetailed = __webpack_require__(59793);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useContract.ts
var useContract = __webpack_require__(14777);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useCurrentBlockTimestamp.ts
var useCurrentBlockTimestamp = __webpack_require__(26974);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNonce.ts
var useNonce = __webpack_require__(99224);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useGasPrice.ts
var useGasPrice = __webpack_require__(56800);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useEtherPrice.ts
var useEtherPrice = __webpack_require__(15728);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC165.ts
var useERC165 = __webpack_require__(25518);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenAllowance.ts
var useERC20TokenAllowance = __webpack_require__(40464);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenApproveCallback.ts
var useERC20TokenApproveCallback = __webpack_require__(60402);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenBalance.ts
var useERC20TokenBalance = __webpack_require__(13988);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenDetailed.ts
var useERC20TokenDetailed = __webpack_require__(24746);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenDetailedCallback.ts
var useERC721TokenDetailedCallback = __webpack_require__(12706);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenTransferCallback.ts
var useERC20TokenTransferCallback = __webpack_require__(16931);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokenDetailedFromTokenLists.ts
var useERC20TokenDetailedFromTokenLists = __webpack_require__(54897);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokensDetailedFromTokenLists.ts
var useERC20TokensDetailedFromTokenLists = __webpack_require__(27429);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenBalance.ts
var useERC721TokenBalance = __webpack_require__(29499);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenByIndex.ts
var useERC721TokenByIndex = __webpack_require__(81912);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721ContractDetailed.ts
var useERC721ContractDetailed = __webpack_require__(6484);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721ContractIsApproveForAll.ts
var useERC721ContractIsApproveForAll = __webpack_require__(25125);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721ContractSetApproveForAllCallback.ts
var useERC721ContractSetApproveForAllCallback = __webpack_require__(47996);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenDetailed.ts
var useERC721TokenDetailed = __webpack_require__(64507);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenDetailedOwnerList.ts
var useERC721TokenDetailedOwnerList = __webpack_require__(71831);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC721TokenTransferCallback.ts
var useERC721TokenTransferCallback = __webpack_require__(60193);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useMulticall.ts
var useMulticall = __webpack_require__(47530);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenBalance.ts
var useNativeTokenBalance = __webpack_require__(2039);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenDetailed.ts
var useNativeTokenDetailed = __webpack_require__(38614);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenTransferCallback.ts
var useNativeTokenTransferCallback = __webpack_require__(60856);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNativeTokenWrapperCallback.ts + 2 modules
var useNativeTokenWrapperCallback = __webpack_require__(72854);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useStableTokensDebank.ts + 1 modules
var useStableTokensDebank = __webpack_require__(22194);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTokenBalance.ts
var useTokenBalance = __webpack_require__(46449);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useFungibleTokenDetailed.ts
var useFungibleTokenDetailed = __webpack_require__(90675);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTokenTransferCallback.ts
var useTokenTransferCallback = __webpack_require__(84755);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useFungibleTokenWatched.tsx
var useFungibleTokenWatched = __webpack_require__(10828);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTokensBalance.ts + 2 modules
var useTokensBalance = __webpack_require__(1293);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransaction.ts
var useTransaction = __webpack_require__(85043);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransactionState.ts
var useTransactionState = __webpack_require__(59710);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useWeb3.ts
var useWeb3 = __webpack_require__(32311);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useNetworkType.ts
var useNetworkType = __webpack_require__(18826);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsFromChain.ts
var useAssetsFromChain = __webpack_require__(9505);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsMerged.ts
var useAssetsMerged = __webpack_require__(68338);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsFromProvider.ts
var useAssetsFromProvider = __webpack_require__(30882);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssets.ts
var useAssets = __webpack_require__(28953);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAssetsByTokenList.ts
var useAssetsByTokenList = __webpack_require__(79591);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useCollectibles.ts
var useCollectibles = __webpack_require__(75107);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTransactions.ts
var useTransactions = __webpack_require__(97825);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useMnemonicWordsPuzzle.ts
var useMnemonicWordsPuzzle = __webpack_require__(47444);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.4.0/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(74950);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useGetPastLogsParams.ts

// There's a getPastLogs block range limitation which differ from RPCs.
//  So we need to split one large range request to multiple small ones.
function useGetPastLogsParams(fromBlock, currentBlock, maxBlockRange, params) {
    if (!fromBlock || fromBlock > currentBlock) return [];
    let count = 1;
    const queryParams = [];
    while(fromBlock + count * maxBlockRange < currentBlock){
        queryParams.push({
            fromBlock: (0,lib.toHex)(fromBlock + (count - 1) * maxBlockRange),
            toBlock: (0,lib.toHex)(fromBlock + count * maxBlockRange),
            ...params
        });
        count += 1;
    }
    queryParams.push({
        fromBlock: (0,lib.toHex)(fromBlock + (count - 1) * maxBlockRange),
        toBlock: (0,lib.toHex)(currentBlock),
        ...params
    });
    return queryParams;
}

// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainColor.ts
var useChainColor = __webpack_require__(78944);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.2.4_f991c289939c8299bed5e4a6a5a79a62/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(17952);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useResolveENS.ts



function useResolveENS(name) {
    const web3 = (0,useWeb3/* useWeb3 */.$)();
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const result = await web3.eth.ens.getAddress(name);
        return result;
    }, [
        web3,
        name,
        chainId
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@unstoppabledomains+resolution@5.0.1/node_modules/@unstoppabledomains/resolution/build/index.js
var build = __webpack_require__(33989);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useResolveUNS.ts



function useResolveUNS(uns) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!uns) return '';
        return resolve(uns);
    }, [
        uns,
        chainId
    ]);
}
async function resolve(uns) {
    const resolution = new build.Resolution();
    const result = await resolution.records(uns, [
        'crypto.ETH.address'
    ]);
    return result['crypto.ETH.address'];
}

// EXTERNAL MODULE: ../web3-shared/src/hooks/useWallet.ts
var useWallet = __webpack_require__(5143);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useWallets.ts
var useWallets = __webpack_require__(84324);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20Tokens.ts
var useERC20Tokens = __webpack_require__(41477);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useERC20TokensPaged.ts
var useERC20TokensPaged = __webpack_require__(55136);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useTrustedERC20Tokens.ts
var useTrustedERC20Tokens = __webpack_require__(36547);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/index.ts
























































// wallet plugin related







/***/ }),

/***/ 69509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xx": () => (/* binding */ useChainId),
/* harmony export */   "as": () => (/* binding */ useChainIdValid),
/* harmony export */   "iN": () => (/* binding */ useChainIdMatched)
/* harmony export */ });
/* unused harmony export useChainIDAvailable */
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35324);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59793);


/**
 * Get the chain id which is using by the given (or default) wallet
 * It will always yield Mainnet in production mode
 */ function useChainId() {
    return (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)().chainId;
}
/**
 * Returns true if chain id is available
 */ function useChainIdValid() {
    return (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .useWeb3StateContext */ .N9)().chainIdValid;
}
/**
 * Returns true if the currenct chain id is matched with the given one
 * @param chainId
 * @returns
 */ function useChainIdMatched(chainId) {
    const chainDetailed = (0,_useChainDetailed__WEBPACK_IMPORTED_MODULE_1__/* .useChainDetailed */ .K)();
    if (!chainId) return false;
    return (chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.chainId) === chainId;
}
const useChainIDAvailable = (/* unused pure expression or super */ null && (useChainId));


/***/ }),

/***/ 6484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useERC721ContractDetailed)
/* harmony export */ });
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17952);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69509);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20913);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98564);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14967);






function useERC721ContractDetailed(address) {
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)();
    const { GET_CONTRACT_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_4__/* .useOpenseaAPIConstants */ .$Y)();
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_2__/* .useERC721TokenContract */ .n)(address);
    return (0,react_use__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(async ()=>{
        if (!wallet_ts__WEBPACK_IMPORTED_MODULE_0__.EthereumAddress.isValid(address) || !erc721TokenContract) return;
        if (!GET_CONTRACT_URL) return getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
        const contractDetailedFromOpensea = await getERC721ContractDetailedFromOpensea(address, chainId, GET_CONTRACT_URL);
        return contractDetailedFromOpensea !== null && contractDetailedFromOpensea !== void 0 ? contractDetailedFromOpensea : getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract);
    }, [
        chainId,
        erc721TokenContract,
        address
    ]);
}
const lazyBlank = Promise.resolve('');
async function getERC721ContractDetailedFromChain(address, chainId, erc721TokenContract) {
    var ref, ref1, ref2;
    const results = await Promise.allSettled([
        (ref = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.name())) !== null && ref !== void 0 ? ref : lazyBlank,
        (ref1 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.symbol())) !== null && ref1 !== void 0 ? ref1 : lazyBlank,
        (ref2 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.baseURI())) !== null && ref2 !== void 0 ? ref2 : lazyBlank, 
    ]);
    const [name, symbol, baseURI] = results.map((result)=>result.status === 'fulfilled' ? result.value : ''
    );
    return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createERC721ContractDetailed */ .ek)(chainId, address, name, symbol, baseURI);
}
async function getERC721ContractDetailedFromOpensea(address, chainId, apiUrl) {
    const response = await fetch(`${apiUrl}/${address}`);
    if (response.ok) {
        const data = await response.json();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .createERC721ContractDetailed */ .ek)(chainId, address, data.name, data.symbol, undefined, data.image_url);
    }
    return null;
}


/***/ }),

/***/ 64507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L0": () => (/* binding */ getERC721TokenDetailedFromOpensea),
/* harmony export */   "qY": () => (/* binding */ getERC721TokenDetailedFromChain)
/* harmony export */ });
/* unused harmony export useERC721TokenDetailed */
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20913);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98564);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14967);




function useERC721TokenDetailed(contractDetailed, tokenId) {
    const { GET_SINGLE_ASSET_URL  } = useOpenseaAPIConstants();
    var ref;
    const erc721TokenContract = useERC721TokenContract((ref = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref !== void 0 ? ref : '');
    return useAsyncRetry(async ()=>{
        if (!erc721TokenContract || !contractDetailed || !tokenId) return;
        if (!GET_SINGLE_ASSET_URL) return getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId);
        const tokenDetailedFromOpensea = await getERC721TokenDetailedFromOpensea(contractDetailed, tokenId, GET_SINGLE_ASSET_URL);
        return tokenDetailedFromOpensea !== null && tokenDetailedFromOpensea !== void 0 ? tokenDetailedFromOpensea : getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId);
    }, [
        erc721TokenContract,
        tokenId
    ]);
}
async function getERC721TokenDetailedFromOpensea(contractDetailed, tokenId, apiUrl) {
    const response = await fetch(`${apiUrl}/${contractDetailed.address}/${tokenId}`);
    if (response.ok) {
        const data = await response.json();
        return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createERC721Token */ .Of)(contractDetailed, {
            name: data.name,
            description: data.description,
            image: data.image_url,
            owner: data.top_ownerships[0].owner.address
        }, tokenId);
    }
    return null;
}
async function getERC721TokenDetailedFromChain(contractDetailed, erc721TokenContract, tokenId) {
    if (!contractDetailed) return;
    const tokenURI = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.tokenURI(tokenId));
    const owner = await (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .safeNonPayableTransactionCall */ .Y4)(erc721TokenContract.methods.ownerOf(tokenId));
    const asset = await getERC721TokenAssetFromChain(tokenURI);
    const tokenInfo = {
        owner,
        ...asset
    };
    return (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createERC721Token */ .Of)(contractDetailed, tokenInfo, tokenId);
}
const BASE64_PREFIX = 'data:application/json;base64,';
// Todo: replace this temporary proxy.
const CORS_PROXY = 'https://whispering-harbor-49523.herokuapp.com';
async function getERC721TokenAssetFromChain(tokenURI) {
    if (!tokenURI) return;
    // for some NFT tokens retrun JSON in base64 encoded
    if (tokenURI.startsWith(BASE64_PREFIX)) try {
        return JSON.parse(atob(tokenURI.replace(BASE64_PREFIX, '')));
    } catch (error) {
        void 0;
    }
    // for some NFT tokens return JSON
    try {
        return JSON.parse(tokenURI);
    } catch (error) {
        void 0;
    }
    // for some NFT tokens return an URL refers to a JSON file
    try {
        const response = await fetch(`${CORS_PROXY}/${tokenURI}`);
        const r = await response.json();
        return r;
    } catch (error) {
        void 0;
    }
    return;
}


/***/ }),

/***/ 12706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useERC721TokenDetailedCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64507);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14967);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20913);




function useERC721TokenDetailedCallback(contractDetailed) {
    const [tokenId, setTokenId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
    const { GET_SINGLE_ASSET_URL  } = (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .useOpenseaAPIConstants */ .$Y)();
    var ref;
    const erc721TokenContract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC721TokenContract */ .n)((ref = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref !== void 0 ? ref : '');
    const erc721TokenDetailedCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!erc721TokenContract || !contractDetailed || !tokenId) return;
        if (!GET_SINGLE_ASSET_URL) return (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromChain */ .qY)(contractDetailed, erc721TokenContract, tokenId);
        const tokenDetailedFromOpensea = await (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromOpensea */ .L0)(contractDetailed, tokenId, GET_SINGLE_ASSET_URL);
        return tokenDetailedFromOpensea !== null && tokenDetailedFromOpensea !== void 0 ? tokenDetailedFromOpensea : (0,_useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromChain */ .qY)(contractDetailed, erc721TokenContract, tokenId);
    }, [
        _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromOpensea */ .L0,
        _useERC721TokenDetailed__WEBPACK_IMPORTED_MODULE_1__/* .getERC721TokenDetailedFromChain */ .qY,
        tokenId,
        contractDetailed,
        erc721TokenContract,
        GET_SINGLE_ASSET_URL, 
    ]);
    return [
        tokenId,
        setTokenId,
        erc721TokenDetailedCallback
    ];
}


/***/ }),

/***/ 22194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* binding */ useStableTokensDebank)
});

// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainId.ts
var useChainId = __webpack_require__(69509);
;// CONCATENATED MODULE: ../web3-shared/src/assets/stable_coins.json
const stable_coins_namespaceObject = JSON.parse('[{"chain":"eth","decimals":6,"display_symbol":null,"id":"0xdac17f958d2ee523a2206206994597c13d831ec7","logo_url":"https://static.debank.com/image/token/logo_url/0xdac17f958d2ee523a2206206994597c13d831ec7/3c1a718331e468abe1fc2ebe319f6c77.png","name":"Tether USD","optimized_symbol":"USDT","symbol":"USDT"},{"chain":"eth","decimals":6,"display_symbol":null,"id":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","logo_url":"https://static.debank.com/image/token/logo_url/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/43cebbf7a996ebbb31c6b1513e282f0b.png","name":"USD Coin","optimized_symbol":"USDC","symbol":"USDC"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x4fabb145d64652a948d72533023f6e7a623c7c53","logo_url":"https://static.debank.com/image/token/logo_url/0x4fabb145d64652a948d72533023f6e7a623c7c53/da52e8d8feb0b594f4df1ff600e104aa.png","name":"Binance USD","optimized_symbol":"BUSD","symbol":"BUSD"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x6b175474e89094c44da98b954eedeac495271d0f","logo_url":"https://static.debank.com/image/token/logo_url/0x6b175474e89094c44da98b954eedeac495271d0f/61b18dee6896c6dab0684a78d0eee10a.png","name":"Dai Stablecoin","optimized_symbol":"DAI","symbol":"DAI"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x8e870d67f660d95d5be530380d0ec0bd388289e1","logo_url":"https://static.debank.com/image/token/logo_url/0x8e870d67f660d95d5be530380d0ec0bd388289e1/d1455d0f8e98efd9c4ad326bfef11377.png","name":"Paxos Standard","optimized_symbol":"PAX","symbol":"PAX"},{"chain":"eth","decimals":8,"display_symbol":null,"id":"0xdf574c24545e5ffecb9a659c229253d4111d87e1","logo_url":"https://static.debank.com/image/token/logo_url/0xdf574c24545e5ffecb9a659c229253d4111d87e1/f73c90453617e7ce980fdaccaeda5984.png","name":"HUSD","optimized_symbol":"HUSD","symbol":"HUSD"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x0000000000085d4780b73119b644ae5ecd22b376","logo_url":"https://static.debank.com/image/token/logo_url/0x0000000000085d4780b73119b644ae5ecd22b376/bae50f8a386635bb12090e5b277b50da.png","name":"TrueUSD","optimized_symbol":"TUSD","symbol":"TUSD"},{"active_user_count_24h":247,"chain":"eth","decimals":18,"display_symbol":null,"id":"0xa47c8bf37f92abed4a126bda807a7b7498661acd","logo_url":"https://static.debank.com/image/token/logo_url/0xa47c8bf37f92abed4a126bda807a7b7498661acd/e97f13acc857e4a3dd5e7e8570c2f0f7.png","name":"Wrapped UST Token","optimized_symbol":"UST","symbol":"UST","total_supply":256641280.4474314,"transfer_amount_24h":33711706.22617381,"transfer_count_24h":792},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x57ab1ec28d129707052df4df418d58a2d46d5f51","logo_url":"https://static.debank.com/image/token/logo_url/0x57ab1ec28d129707052df4df418d58a2d46d5f51/bd901b52520d4c9a9593b69e5a116b5f.png","name":"Synth sUSD","optimized_symbol":"sUSD","symbol":"sUSD"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x674c6ad92fd080e4004b2312b45f796a192d27a0","logo_url":"https://static.debank.com/image/token/logo_url/0x674c6ad92fd080e4004b2312b45f796a192d27a0/9a69ee8419e648dde6c6f9d8b4d72726.png","name":"Neutrino USD","optimized_symbol":"USDN","symbol":"USDN"},{"chain":"eth","decimals":2,"display_symbol":null,"id":"0x056fd409e1d7a124bd7017459dfea2f387b6d5cd","logo_url":"https://static.debank.com/image/token/logo_url/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd/7b93bc77be84a870a182f2678e8ca09d.png","name":"Gemini dollar","optimized_symbol":"GUSD","symbol":"GUSD"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0xe2f2a5c287993345a840db3b0845fbc70f5935a5","logo_url":"https://static.debank.com/image/token/logo_url/0xe2f2a5c287993345a840db3b0845fbc70f5935a5/b2e513dd31fd482860fb95720d5045bb.png","name":"mStable USD","optimized_symbol":"mUSD","symbol":"mUSD"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x1c48f86ae57291f7686349f12601910bd8d470bb","logo_url":"https://static.debank.com/image/token/logo_url/0x1c48f86ae57291f7686349f12601910bd8d470bb/77f813b8a26660659308d6a65967f210.png","name":"USDK","optimized_symbol":"USDK","symbol":"USDK"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x5bc25f649fc4e26069ddf4cf4010f9f706c23831","logo_url":"https://static.debank.com/image/token/logo_url/0x5bc25f649fc4e26069ddf4cf4010f9f706c23831/3f737ac4e601be79ab0972882ceb632d.png","name":"DefiDollar","optimized_symbol":"DUSD","symbol":"DUSD"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0xeb269732ab75a6fd61ea60b06fe994cd32a83549","logo_url":"https://static.debank.com/image/token/logo_url/0xeb269732ab75a6fd61ea60b06fe994cd32a83549/9a24b528b2df88b1ca32a470bc77c512.png","name":"dForce","optimized_symbol":"USDx","symbol":"USDx"},{"chain":"eth","decimals":18,"display_symbol":null,"id":"0x196f4727526ea7fb1e17b2071b3d8eaa38486988","logo_url":null,"name":"Reserve","optimized_symbol":"RSV","symbol":"RSV"},{"chain":"eth","decimals":18,"display_symbol":"QUSD","id":"0x59d4ccc94a9c4c3d3b4ba2aa343a9bdf95145dd1","logo_url":"https://static.debank.com/image/token/logo_url/0x59d4ccc94a9c4c3d3b4ba2aa343a9bdf95145dd1/11cd07b3f288b3984f82670c6e9af8fc.png","name":"QUSD Stablecoin","optimized_symbol":"QUSD","symbol":"QUSD"}]');
// EXTERNAL MODULE: ../web3-shared/src/types/index.ts
var types = __webpack_require__(70626);
// EXTERNAL MODULE: ../web3-shared/src/utils/index.ts
var utils = __webpack_require__(98564);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useStableTokensDebank.ts




function useStableTokensDebank() {
    const chainId = (0,useChainId/* useChainId */.xx)();
    if (chainId !== types/* ChainId.Mainnet */.a_.Mainnet) return [];
    return stable_coins_namespaceObject.map((x)=>(0,utils/* createERC20Token */.wY)(chainId, (0,utils/* formatEthereumAddress */.j8)(x.id), x.decimals, x.name, x.symbol)
    );
}


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
/* harmony export */   "iN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.iN),
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
/* harmony export */   "P1e": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.P1),
/* harmony export */   "_gN": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__._g),
/* harmony export */   "ifX": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.if),
/* harmony export */   "jv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.jv),
/* harmony export */   "g3P": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.g3),
/* harmony export */   "bs0": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bs),
/* harmony export */   "Fh$": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Fh),
/* harmony export */   "bDE": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bD),
/* harmony export */   "hx3": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.hx),
/* harmony export */   "w0B": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.w0),
/* harmony export */   "hjz": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.hj),
/* harmony export */   "JS1": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.JS),
/* harmony export */   "Hve": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Hv),
/* harmony export */   "bLq": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.bL),
/* harmony export */   "XEd": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.XE),
/* harmony export */   "Fqh": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.Fq),
/* harmony export */   "gG2": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.gG),
/* harmony export */   "esU": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.es),
/* harmony export */   "PBv": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.PB),
/* harmony export */   "mMq": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.mM),
/* harmony export */   "z7R": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.z7),
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

/***/ 61983:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ safeNonPayableTransactionCall)
/* harmony export */ });
function safeNonPayableTransactionCall(tx, overrides) {
    try {
        if (!tx) return;
        return tx.call(overrides);
    } catch (error) {
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
/* harmony export */   "Y4": () => (/* reexport safe */ _call__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   "bu": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.bu),
/* harmony export */   "wY": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.wY),
/* harmony export */   "vs": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.vs),
/* harmony export */   "ek": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_2__.ek),
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
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61983);
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
/* harmony export */   "ek": () => (/* binding */ createERC721ContractDetailed),
/* harmony export */   "Of": () => (/* binding */ createERC721Token),
/* harmony export */   "vs": () => (/* binding */ createERC20Tokens),
/* harmony export */   "bu": () => (/* binding */ addGasMargin),
/* harmony export */   "mO": () => (/* binding */ decodeOutputString),
/* harmony export */   "UZ": () => (/* binding */ parseStringOrBytes32),
/* harmony export */   "pL": () => (/* binding */ getTokenUSDValue),
/* harmony export */   "I3": () => (/* binding */ makeSortTokenFn),
/* harmony export */   "Si": () => (/* binding */ makeSortAssertFn)
/* harmony export */ });
/* unused harmony exports createERC1155Token, getBalanceValue */
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
        type: _types__WEBPACK_IMPORTED_MODULE_4__/* .EthereumTokenType.ERC721 */ .Dr.ERC721,
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

/***/ 49749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hq": () => (/* binding */ None),
/* harmony export */   "bD": () => (/* binding */ Some)
/* harmony export */ });
/* unused harmony export Option */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13267);
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76110);


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
        return (0,_result__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(error);
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
        return (0,_result__WEBPACK_IMPORTED_MODULE_0__.Ok)(this.val);
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
        return "Some(" + (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .toString */ .B)(this.val) + ")";
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

/***/ 48180:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7b29d31e01947e44886c.png";

/***/ }),

/***/ 62906:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c54f16624666ccd6558b.png";

/***/ }),

/***/ 63271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6131b12b97713c9fda40.png";

/***/ }),

/***/ 91026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e50b5b89a6eea0d2faf.png";

/***/ }),

/***/ 66969:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66f5705907771791060d.svg";

/***/ }),

/***/ 61010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7c85948fa6af5df0e51.png";

/***/ }),

/***/ 27485:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fb7232aa8f0e5195838.svg";

/***/ }),

/***/ 25866:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3902f68dbc9a0a99777.svg";

/***/ }),

/***/ 63349:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca7dc49fa9d0f929ef06.png";

/***/ }),

/***/ 65334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db4c5309e97c7d57cb79.png";

/***/ }),

/***/ 95781:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62539d64c6df15dea819.png";

/***/ }),

/***/ 3391:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "052863bc15f84754566f.png";

/***/ }),

/***/ 9227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "381446c71c051917c70c.png";

/***/ }),

/***/ 44319:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e806a6ce9e82d18c640d.png";

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
/******/ 			if (chunkId === 6739) return "js/npm.idb.js";
/******/ 			if (chunkId === 2943) return "js/npm.bip39.js";
/******/ 			if (chunkId === 8405) return "js/8405.js";
/******/ 			if (chunkId === 5732) return "js/npm.webcrypto-liner.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","313":"npm.ef-core","855":"npm.json2csv","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1902":"npm-ns.dimensiondev.snapshot.js","2245":"npm.react-highlight-words","2261":"npm.wyvern-js","2598":"npm.react-hook-form","2939":"npm-ns.uniswap.v3-sdk","3294":"npm.date-fns","3322":"npm.color","3850":"npm.arweave","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4462":"npm.text-encoding","4477":"npm.gun","4554":"Plugin/Poll","5049":"Gun","5678":"npm.d3-voronoi","6230":"npm.zod","6316":"npm-ns.msgpack.msgpack","6912":"npm.react-draggable","6948":"ShapeDetection","7015":"npm.d3-transition","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","9278":"npm.axios","9714":"npm.wyvern-schemas"}[chunkId] || chunkId) + ".js";
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
/******/ 		__webpack_require__.j = 462;
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
/******/ 			462: 0,
/******/ 			3193: 0
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
/******/ 	__webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,3617,4162,1440,2162,8000,8393,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,405,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,9632,3906,8883,23,7367,7988,5519,5629,404,3148,3911], () => (__webpack_require__(47858)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [2876,2701,9759,2908,4023,4586,5178,3617,4162,1440,2162,8000,8393,4570,8019,6160,6357,3981,2088,6067,79,4029,8056,6833,7170,772,3693,405,4227,5737,3883,3147,2698,3758,7913,4544,8712,9227,3832,71,5105,3638,9019,12,2619,5838,187,3846,5951,6565,8266,2752,7849,8129,7512,9744,444,2222,9197,4960,253,8547,8145,5313,1696,1555,516,7822,572,159,7856,234,4590,2891,5784,9697,3619,9632,3906,8883,23,7367,7988,5519,5629,404,3148,3911], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;