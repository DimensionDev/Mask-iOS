(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1673],{

/***/ 21496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (visuallyHidden);

/***/ }),

/***/ 97812:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(73219);

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
    bigint: shim,
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

/***/ 52607:
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
  module.exports = __webpack_require__(97812)();
}


/***/ }),

/***/ 73219:
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

/***/ 36875:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(52607),__webpack_require__(76342)):0}(this,function(e,t){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=o(e),i=o(t);function r(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function a(t,e){var o,n=Object.keys(t);return Object.getOwnPropertySymbols&&(o=Object.getOwnPropertySymbols(t),e&&(o=o.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,o)),n}function y(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach(function(e){s(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if(null==e)return{};var o,n=function(e,t){if(null==e)return{};for(var o,n={},a=Object.keys(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols)for(var a=Object.getOwnPropertySymbols(e),r=0;r<a.length;r++)o=a[r],0<=t.indexOf(o)||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o]);return n}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(r){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,o,n,a=h(r);return t=i?(e=h(this).constructor,Reflect.construct(a,arguments,e)):a.apply(this,arguments),o=this,!(n=t)||"object"!=typeof n&&"function"!=typeof n?d(o):n}}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var o=[],n=!0,a=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(o.push(i.value),!t||o.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return o}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function v(a,r){return new Promise(function(e,t){var o,n=new Image;n.onload=function(){return e(n)},n.onerror=t,!1==(null!==(o=a)&&!!o.match(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i))&&r&&(n.crossOrigin=r),n.src=a})}var b,w=!("undefined"==typeof window||"undefined"==typeof navigator||!("ontouchstart"in window||0<navigator.msMaxTouchPoints)),M="undefined"!=typeof File,O={touch:{react:{down:"onTouchStart",mouseDown:"onMouseDown",drag:"onTouchMove",move:"onTouchMove",mouseMove:"onMouseMove",up:"onTouchEnd",mouseUp:"onMouseUp"},native:{down:"touchstart",mouseDown:"mousedown",drag:"touchmove",move:"touchmove",mouseMove:"mousemove",up:"touchend",mouseUp:"mouseup"}},desktop:{react:{down:"onMouseDown",drag:"onDragOver",move:"onMouseMove",up:"onMouseUp"},native:{down:"mousedown",drag:"dragStart",move:"mousemove",up:"mouseup"}}},I=w?O.touch:O.desktop,P="undefined"!=typeof window&&window.devicePixelRatio?window.devicePixelRatio:1,C={x:.5,y:.5},x=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,i["default"].Component);var e,t,o,n=p(a);function a(e){var v;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),s(d(v=n.call(this,e)),"state",{drag:!1,my:null,mx:null,image:C}),s(d(v),"handleImageReady",function(e){var t=v.getInitialSize(e.width,e.height);t.resource=e,t.x=.5,t.y=.5,t.backgroundColor=v.props.backgroundColor,v.setState({drag:!1,image:t},v.props.onImageReady),v.props.onLoadSuccess(t)}),s(d(v),"clearImage",function(){v.canvas.getContext("2d").clearRect(0,0,v.canvas.width,v.canvas.height),v.setState({image:C})}),s(d(v),"handleMouseDown",function(e){(e=e||window.event).preventDefault(),v.setState({drag:!0,mx:null,my:null})}),s(d(v),"handleMouseUp",function(){v.state.drag&&(v.setState({drag:!1}),v.props.onMouseUp())}),s(d(v),"handleMouseMove",function(e){var t,o,n,a,r,i,s,u,h,c,l,d,p,g,f,m;e=e||window.event,!1!==v.state.drag&&(e.preventDefault(),n={mx:t=e.targetTouches?e.targetTouches[0].pageX:e.clientX,my:o=e.targetTouches?e.targetTouches[0].pageY:e.clientY},m=v.props.rotate,m=(m%=360)<0?m+360:m,v.state.mx&&v.state.my&&(a=v.state.mx-t,r=v.state.my-o,i=v.state.image.width*v.props.scale,s=v.state.image.height*v.props.scale,h=(u=v.getCroppingRect()).x,c=u.y,h*=i,c*=s,l=function(e){return e*(Math.PI/180)},d=Math.cos(l(m)),g=c+-a*(p=Math.sin(l(m)))+r*d,f={x:(h+a*d+r*p)/i+1/v.props.scale*v.getXScale()/2,y:g/s+1/v.props.scale*v.getYScale()/2},v.props.onPositionChange(f),n.image=y(y({},v.state.image),f)),v.setState(n),v.props.onMouseMove(e))}),s(d(v),"setCanvas",function(e){v.canvas=e}),v.canvas=null,v}return e=a,(t=[{key:"componentDidMount",value:function(){this.props.disableHiDPIScaling&&(P=1);var e,t,o=this.canvas.getContext("2d");this.props.image&&this.loadImage(this.props.image),this.paint(o),document&&(e=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){t=!1}return t}()&&{passive:!1},t=I.native,document.addEventListener(t.move,this.handleMouseMove,e),document.addEventListener(t.up,this.handleMouseUp,e),w&&(document.addEventListener(t.mouseMove,this.handleMouseMove,e),document.addEventListener(t.mouseUp,this.handleMouseUp,e)))}},{key:"componentDidUpdate",value:function(e,t){this.props.image&&this.props.image!==e.image||this.props.width!==e.width||this.props.height!==e.height||this.props.backgroundColor!==e.backgroundColor?this.loadImage(this.props.image):this.props.image||t.image===C||this.clearImage();var o=this.canvas.getContext("2d");o.clearRect(0,0,this.canvas.width,this.canvas.height),this.paint(o),this.paintImage(o,this.state.image,this.props.border),e.image===this.props.image&&e.width===this.props.width&&e.height===this.props.height&&e.position===this.props.position&&e.scale===this.props.scale&&e.rotate===this.props.rotate&&t.my===this.state.my&&t.mx===this.state.mx&&t.image.x===this.state.image.x&&t.image.y===this.state.image.y&&t.backgroundColor===this.state.backgroundColor||this.props.onImageChange()}},{key:"componentWillUnmount",value:function(){var e;document&&(e=I.native,document.removeEventListener(e.move,this.handleMouseMove,!1),document.removeEventListener(e.up,this.handleMouseUp,!1),w&&(document.removeEventListener(e.mouseMove,this.handleMouseMove,!1),document.removeEventListener(e.mouseUp,this.handleMouseUp,!1)))}},{key:"isVertical",value:function(){return!this.props.disableCanvasRotation&&this.props.rotate%180!=0}},{key:"getBorders",value:function(e){var t=0<arguments.length&&void 0!==e?e:this.props.border;return Array.isArray(t)?t:[t,t]}},{key:"getDimensions",value:function(){var e=this.props,t=e.width,o=e.height,n=e.rotate,a=e.border,r={},i=m(this.getBorders(a),2),s=i[0],u=i[1],h=t,c=o;return this.isVertical()?(r.width=c,r.height=h):(r.width=h,r.height=c),r.width+=2*s,r.height+=2*u,{canvas:r,rotate:n,width:t,height:o,border:a}}},{key:"getImage",value:function(){var e=this.getCroppingRect(),t=this.state.image;e.x*=t.resource.width,e.y*=t.resource.height,e.width*=t.resource.width,e.height*=t.resource.height;var o=document.createElement("canvas");this.isVertical()?(o.width=e.height,o.height=e.width):(o.width=e.width,o.height=e.height);var n=o.getContext("2d");return n.translate(o.width/2,o.height/2),n.rotate(this.props.rotate*Math.PI/180),n.translate(-o.width/2,-o.height/2),this.isVertical()&&n.translate((o.width-o.height)/2,(o.height-o.width)/2),t.backgroundColor&&(n.fillStyle=t.backgroundColor,n.fillRect(-e.x,-e.y,t.resource.width,t.resource.height)),n.drawImage(t.resource,-e.x,-e.y),o}},{key:"getImageScaledToCanvas",value:function(){var e=this.getDimensions(),t=e.width,o=e.height,n=document.createElement("canvas");return this.isVertical()?(n.width=o,n.height=t):(n.width=t,n.height=o),this.paintImage(n.getContext("2d"),this.state.image,0,1),n}},{key:"getXScale",value:function(){var e=this.props.width/this.props.height,t=this.state.image.width/this.state.image.height;return Math.min(1,e/t)}},{key:"getYScale",value:function(){var e=this.props.height/this.props.width,t=this.state.image.height/this.state.image.width;return Math.min(1,e/t)}},{key:"getCroppingRect",value:function(){var e=this.props.position||{x:this.state.image.x,y:this.state.image.y},t=1/this.props.scale*this.getXScale(),o=1/this.props.scale*this.getYScale(),n={x:e.x-t/2,y:e.y-o/2,width:t,height:o},a=0,r=1-n.width,i=0,s=1-n.height;return(this.props.disableBoundaryChecks||1<t||1<o)&&(a=-n.width,i=-n.height,s=r=1),y(y({},n),{},{x:Math.max(a,Math.min(n.x,r)),y:Math.max(i,Math.min(n.y,s))})}},{key:"loadImage",value:function(e){var t;M&&e instanceof File?this.loadingImage=(t=e,new Promise(function(o,n){var e=new FileReader;e.onload=function(e){try{var t=v(e.target.result);o(t)}catch(e){n(e)}},e.readAsDataURL(t)}).then(this.handleImageReady).catch(this.props.onLoadFailure)):"string"==typeof e&&(this.loadingImage=v(e,this.props.crossOrigin).then(this.handleImageReady).catch(this.props.onLoadFailure))}},{key:"getInitialSize",value:function(e,t){var o,n,a=this.getDimensions();return t/e<a.height/a.width?n=e*((o=this.getDimensions().height)/t):o=t*((n=this.getDimensions().width)/e),{height:o,width:n}}},{key:"paintImage",value:function(e,t,o,n){var a,r=3<arguments.length&&void 0!==n?n:P;t.resource&&(a=this.calculatePosition(t,o),e.save(),e.translate(e.canvas.width/2,e.canvas.height/2),e.rotate(this.props.rotate*Math.PI/180),e.translate(-e.canvas.width/2,-e.canvas.height/2),this.isVertical()&&e.translate((e.canvas.width-e.canvas.height)/2,(e.canvas.height-e.canvas.width)/2),e.scale(r,r),e.globalCompositeOperation="destination-over",e.drawImage(t.resource,a.x,a.y,a.width,a.height),t.backgroundColor&&(e.fillStyle=t.backgroundColor,e.fillRect(a.x,a.y,a.width,a.height)),e.restore())}},{key:"calculatePosition",value:function(e,t){e=e||this.state.image;var o=m(this.getBorders(t),2),n=o[0],a=o[1],r=this.getCroppingRect(),i=e.width*this.props.scale,s=e.height*this.props.scale,u=-r.x*i,h=-r.y*s;return this.isVertical()?(u+=a,h+=n):(u+=n,h+=a),{x:u,y:h,height:s,width:i}}},{key:"paint",value:function(e){e.save(),e.scale(P,P),e.translate(0,0),e.fillStyle="rgba("+this.props.color.slice(0,4).join(",")+")";var t,o,n,a,r,i,s,u,h=this.props.borderRadius,c=this.getDimensions(),l=m(this.getBorders(c.border),2),d=l[0],p=l[1],g=c.canvas.height,f=c.canvas.width,h=Math.max(h,0);h=Math.min(h,f/2-d,g/2-p),e.beginPath(),t=e,a=f-2*(o=d),r=g-2*(n=p),0===(i=h)?t.rect(o,n,a,r):(s=a-i,u=r-i,t.translate(o,n),t.arc(i,i,i,Math.PI,1.5*Math.PI),t.lineTo(s,0),t.arc(s,i,i,1.5*Math.PI,2*Math.PI),t.lineTo(a,u),t.arc(s,u,i,2*Math.PI,.5*Math.PI),t.lineTo(i,r),t.arc(i,u,i,.5*Math.PI,Math.PI),t.translate(-o,-n)),e.rect(f,0,-f,g),e.fill("evenodd"),e.restore()}},{key:"render",value:function(){var e=this.props,t=(e.scale,e.rotate,e.image,e.border,e.borderRadius,e.width,e.height,e.position,e.color,e.backgroundColor,e.style),o=(e.crossOrigin,e.onLoadFailure,e.onLoadSuccess,e.onImageReady,e.onImageChange,e.onMouseUp,e.onMouseMove,e.onPositionChange,e.disableBoundaryChecks,e.disableHiDPIScaling,e.disableCanvasRotation,l(e,["scale","rotate","image","border","borderRadius","width","height","position","color","backgroundColor","style","crossOrigin","onLoadFailure","onLoadSuccess","onImageReady","onImageChange","onMouseUp","onMouseMove","onPositionChange","disableBoundaryChecks","disableHiDPIScaling","disableCanvasRotation"])),n=this.getDimensions(),a={width:n.canvas.width,height:n.canvas.height,cursor:this.state.drag?"grabbing":"grab",touchAction:"none"},r={width:n.canvas.width*P,height:n.canvas.height*P,style:y(y({},a),t)};return r[I.react.down]=this.handleMouseDown,w&&(r[I.react.mouseDown]=this.handleMouseDown),i.default.createElement("canvas",u({ref:this.setCanvas},r,o))}}])&&r(e.prototype,t),o&&r(e,o),a}();return s(x,"propTypes",{scale:n.default.number,rotate:n.default.number,image:n.default.oneOfType([n.default.string].concat(function(e){if(Array.isArray(e))return f(e)}(b=M?[n.default.instanceOf(File)]:[])||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(b)||g(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())),border:n.default.oneOfType([n.default.number,n.default.arrayOf(n.default.number)]),borderRadius:n.default.number,width:n.default.number,height:n.default.number,position:n.default.shape({x:n.default.number,y:n.default.number}),color:n.default.arrayOf(n.default.number),backgroundColor:n.default.string,crossOrigin:n.default.oneOf(["","anonymous","use-credentials"]),onLoadFailure:n.default.func,onLoadSuccess:n.default.func,onImageReady:n.default.func,onImageChange:n.default.func,onMouseUp:n.default.func,onMouseMove:n.default.func,onPositionChange:n.default.func,disableBoundaryChecks:n.default.bool,disableHiDPIScaling:n.default.bool,disableCanvasRotation:n.default.bool}),s(x,"defaultProps",{scale:1,rotate:0,border:25,borderRadius:0,width:200,height:200,color:[0,0,0,.5],onLoadFailure:function(){},onLoadSuccess:function(){},onImageReady:function(){},onImageChange:function(){},onMouseUp:function(){},onMouseMove:function(){},onPositionChange:function(){},disableBoundaryChecks:!1,disableHiDPIScaling:!1,disableCanvasRotation:!0}),x});


/***/ }),

/***/ 65439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ConfirmDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84879);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73774);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86043);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78535);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47673);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61382);




const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(()=>({
        [`&.${_mui_material__WEBPACK_IMPORTED_MODULE_5__/* ["default"].root */ .Z.root}`]: {
            minWidth: 100
        }
    })
);
function ConfirmDialog(props) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_2__/* .useDashboardI18N */ .x)();
    const { title , open , onClose , onConfirm , children , maxWidth ='sm' , cancelText =t.settings_button_cancel() , confirmText =t.settings_button_confirm() , confirmDisabled =false ,  } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskDialog */ .Df, {
        title: title,
        fullWidth: true,
        maxWidth: maxWidth,
        open: open,
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: children
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, {
                        onClick: onClose,
                        color: "secondary",
                        children: cancelText
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledButton, {
                        onClick: onConfirm,
                        disabled: confirmDisabled,
                        children: confirmText
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 44875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FileUpload)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93230);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67020);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82314);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85143);






const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .makeStyles */ .ZL)()({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: '100%',
        borderRadius: 8
    },
    container: {
        textAlign: 'center'
    },
    file: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: 0,
        cursor: 'pointer'
    },
    text: {
        color: _masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskColorVar.textSecondary */ .ZN.textSecondary,
        fontSize: 13
    }
});
function FileUpload({ width , height , readAsText , onChange , accept , icon  }) {
    const { classes  } = useStyles();
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const handleChange = ({ target  })=>{
        if (target.files) {
            setFile(target.files[0]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (file) {
            if (readAsText) {
                (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .blobToText */ .Gx)(file).then((result)=>onChange(file, result)
                );
            } else {
                onChange(file);
            }
        }
    }, [
        file,
        readAsText,
        onChange
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        variant: "background",
        className: classes.root,
        style: {
            width,
            height
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classes.container,
                children: [
                    icon !== null && icon !== void 0 ? icon : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .File */ .$, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        className: classes.text,
                        children: "Please click or drag the file to here"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
                type: "file",
                className: classes.file,
                accept: accept,
                onChange: handleChange
            })
        ]
    }));
};


/***/ }),

/***/ 33602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42421);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72123);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82591);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23178);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51452);





const PasswordField = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((props, ref)=>{
    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .MaskTextField */ .FU, {
        ...props,
        ref: ref,
        type: showPassword ? 'text' : 'password',
        InputProps: {
            ...props.InputProps,
            endAdornment: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                position: "end",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    "aria-label": "toggle password visibility",
                    onClick: ()=>setShowPassword(!showPassword)
                    ,
                    onMouseDown: (event)=>event.preventDefault()
                    ,
                    edge: "end",
                    size: "small",
                    children: showPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .EyeOffIcon */ .X, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_6__/* .EyeIcon */ .t, {})
                })
            })
        }
    }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordField);


/***/ }),

/***/ 88823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Personas)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Paper/Paper.js
var Paper = __webpack_require__(54933);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tabs/Tabs.js + 4 modules
var Tabs = __webpack_require__(56789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(88785);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Stack/Stack.js
var Stack = __webpack_require__(66709);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../dashboard/src/components/PageFrame/index.tsx + 1 modules
var PageFrame = __webpack_require__(91501);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/capitalize.js
var capitalize = __webpack_require__(22353);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(20895);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(13943);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(44438);
;// CONCATENATED MODULE: ../icons/general/Link.tsx


const LinkIcon = (0,utils/* createIcon */.I)('Link', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M16 19.25C16.5368 19.9676 17.2217 20.5614 18.0082 20.9911C18.7947 21.4208 19.6644 21.6764 20.5583 21.7404C21.4522 21.8044 22.3495 21.6754 23.1892 21.3622C24.0289 21.049 24.7914 20.5588 25.425 19.925L29.175 16.175C30.3135 14.9962 30.9435 13.4174 30.9292 11.7787C30.915 10.14 30.2577 8.57239 29.0989 7.41359C27.9401 6.25479 26.3725 5.59748 24.7338 5.58324C23.095 5.569 21.5163 6.19897 20.3375 7.33746L18.1875 9.47496",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "currentColor"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M20.9988 16.7498C20.462 16.0321 19.7771 15.4383 18.9906 15.0086C18.2041 14.5789 17.3344 14.3234 16.4405 14.2594C15.5465 14.1954 14.6493 14.3243 13.8096 14.6376C12.9699 14.9508 12.2074 15.441 11.5738 16.0748L7.82379 19.8248C6.6853 21.0036 6.05533 22.5823 6.06957 24.2211C6.08381 25.8598 6.74112 27.4274 7.89992 28.5862C9.05872 29.745 10.6263 30.4023 12.265 30.4165C13.9038 30.4307 15.4825 29.8008 16.6613 28.6623L18.7988 26.5248",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            stroke: "currentColor"
        })
    ]
}), '0 0 20 20');

// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(61382);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaSetup/index.tsx






const useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        iconContainer: {
            width: 90,
            height: 90,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 36,
            backgroundColor: src/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground
        },
        button: {
            borderRadius: Number(theme.shape.borderRadius) * 4.5,
            padding: theme.spacing(0.75, 4)
        }
    })
);
const PersonaSetup = /*#__PURE__*/ (0,react.memo)(({ networkIdentifier , onConnect  })=>{
    const { classes  } = useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.iconContainer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(LinkIcon, {
                    color: "primary",
                    fontSize: "inherit",
                    style: {
                        fill: 'none'
                    },
                    viewBox: "0 0 36 36"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                variant: "body2",
                sx: {
                    marginTop: 2.5,
                    marginBottom: 2.5
                },
                children: t.personas_setup_connect_tips({
                    type: networkIdentifier.replace('.com', '')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                className: classes.button,
                onClick: onConnect,
                children: t.personas_setup_connect()
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Drawer/Drawer.js + 1 modules
var Drawer = __webpack_require__(11982);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(39541);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/hooks/usePersonaContext.ts + 2 modules
var usePersonaContext = __webpack_require__(21526);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Link/Link.js + 1 modules
var Link = __webpack_require__(4467);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(78037);
// EXTERNAL MODULE: ../icons/general/Warning.tsx
var Warning = __webpack_require__(41945);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/DisconnectProfileDialog/index.tsx







const DisconnectProfileDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        svg: {
            '& path': {
                fill: (0,src/* getMaskColor */.nb)(theme).orangeMain
            }
        }
    })
);
var steps;
(function(steps) {
    steps[steps["selection"] = 1] = "selection";
    steps[steps["action"] = 2] = "action";
})(steps || (steps = {}));
const DisconnectProfileDialog = ({ open , onClose , networkIdentifier , profileIdentifiers , onDisconnect  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = DisconnectProfileDialog_useStyles();
    const [currentStep, setCurrentStep] = (0,react.useState)(steps.selection);
    const [profileIdentifier, setProfileIdentifier] = (0,react.useState)();
    var ref;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_disconnect(),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                width: 440
            },
            children: [
                currentStep === steps.selection && /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                    minHeight: "100px",
                    justifyContent: "center",
                    children: profileIdentifiers.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            direction: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            mb: 1,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                                    direction: "row",
                                    alignItems: "center",
                                    gap: 1,
                                    children: [
                                        shared_src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                            variant: "caption",
                                            sx: {
                                                color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                                fontSize: 13,
                                                mr: 1
                                            },
                                            children: [
                                                "@",
                                                x.userId
                                            ]
                                        }, x.userId)
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                        sx: {
                                            color: (theme)=>(0,src/* getMaskColor */.nb)(theme).redMain
                                        },
                                        component: "button",
                                        variant: "caption",
                                        onClick: ()=>{
                                            setProfileIdentifier(x);
                                            setCurrentStep(steps.action);
                                        },
                                        children: t.personas_disconnect()
                                    })
                                })
                            ]
                        }, x.userId)
                    )
                }),
                currentStep === steps.action && profileIdentifier && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            textAlign: "center",
                            py: 2,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning/* WarningIcon */.a, {
                                className: classes.svg,
                                sx: {
                                    fontSize: 64
                                },
                                color: "warning"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "caption",
                            sx: {
                                color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                fontSize: 13,
                                mr: 1
                            },
                            children: t.personas_disconnect_warning({
                                userId: (ref = profileIdentifier === null || profileIdentifier === void 0 ? void 0 : profileIdentifier.userId) !== null && ref !== void 0 ? ref : '',
                                network: networkIdentifier
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                            mt: 3,
                            mb: 1,
                            direction: "row",
                            justifyContent: "space-around",
                            gap: 4,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    sx: {
                                        flex: 1
                                    },
                                    onClick: onClose,
                                    color: "secondary",
                                    children: t.cancel()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    sx: {
                                        flex: 1
                                    },
                                    variant: "contained",
                                    onClick: ()=>{
                                        onDisconnect(profileIdentifier);
                                        onClose();
                                    },
                                    children: t.confirm()
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaLine/index.tsx








const PersonaLine_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        connect: {
            '& svg': {
                fontSize: '18px',
                marginRight: theme.spacing(1.5)
            }
        },
        link: {
            height: 28
        }
    })
);
const UnconnectedPersonaLine = /*#__PURE__*/ (0,react.memo)(({ onConnect , networkIdentifier  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = PersonaLine_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.connect,
        sx: {
            display: 'flex',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
            underline: "none",
            classes: {
                button: classes.link
            },
            onClick: (e)=>{
                e.stopPropagation();
                onConnect();
            },
            sx: {
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer'
            },
            children: [
                shared_src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "caption",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        variant: "text",
                        size: "small",
                        sx: {
                            fontSize: 13,
                            p: 0
                        },
                        children: t.personas_connect_to({
                            internalName: networkIdentifier
                        })
                    })
                })
            ]
        })
    }));
});
const ConnectedPersonaLine = /*#__PURE__*/ (0,react.memo)(({ profileIdentifiers , onConnect , onDisconnect , networkIdentifier , isHideOperations  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { openProfilePage  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const { classes  } = PersonaLine_useStyles();
    const [openDisconnectDialog, setOpenDisconnectDialog] = (0,react.useState)(false);
    const handleUserIdClick = async (network, userId)=>{
        await openProfilePage(network, userId);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.connect,
        sx: {
            display: 'flex',
            alignItems: 'center'
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Link/* default */.Z, {
                underline: "none",
                sx: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        sx: {
                            display: 'inline-flex',
                            alignItems: 'center'
                        },
                        children: [
                            shared_src/* SOCIAL_MEDIA_ICON_MAPPING */.I4[networkIdentifier],
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                flexWrap: "wrap",
                                flexDirection: "row",
                                children: profileIdentifiers.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                        variant: "caption",
                                        onClick: ()=>handleUserIdClick(networkIdentifier, x.userId)
                                        ,
                                        sx: {
                                            color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
                                            fontSize: 13,
                                            mr: 1,
                                            cursor: 'pointer'
                                        },
                                        children: [
                                            "@",
                                            x.userId
                                        ]
                                    }, x.userId)
                                )
                            })
                        ]
                    }),
                    !isHideOperations && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                component: "button",
                                classes: {
                                    button: classes.link
                                },
                                variant: "caption",
                                sx: {
                                    mr: 1
                                },
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    onConnect();
                                },
                                children: t.personas_add()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                                sx: {
                                    color: (theme)=>(0,src/* getMaskColor */.nb)(theme).redMain
                                },
                                component: "button",
                                classes: {
                                    button: classes.link
                                },
                                variant: "caption",
                                onClick: ()=>setOpenDisconnectDialog(true)
                                ,
                                children: t.personas_disconnect()
                            })
                        ]
                    })
                ]
            }),
            openDisconnectDialog && /*#__PURE__*/ (0,jsx_runtime.jsx)(DisconnectProfileDialog, {
                networkIdentifier: networkIdentifier,
                onDisconnect: onDisconnect,
                profileIdentifiers: profileIdentifiers,
                open: openDisconnectDialog,
                onClose: ()=>setOpenDisconnectDialog(false)
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../icons/general/Settings.tsx
var Settings = __webpack_require__(50191);
;// CONCATENATED MODULE: ../icons/general/PublicKey.tsx


const PublicKeyIcon = (0,utils/* createPaletteAwareIcon */.t)('PublicKeyIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M12.9159 6.25008L15.8326 3.33341M17.4993 1.66675L15.8326 3.33341L17.4993 1.66675ZM9.49092 9.67508C9.9212 10.0996 10.2633 10.6051 10.4974 11.1624C10.7315 11.7197 10.8531 12.3178 10.8551 12.9223C10.8571 13.5267 10.7396 14.1256 10.5092 14.6845C10.2788 15.2433 9.94014 15.7511 9.51271 16.1785C9.08528 16.606 8.57752 16.9446 8.01867 17.175C7.45982 17.4054 6.86092 17.523 6.25645 17.5209C5.65197 17.5189 5.05387 17.3973 4.49658 17.1632C3.93928 16.9291 3.43381 16.587 3.00925 16.1567C2.17436 15.2923 1.71239 14.1346 1.72283 12.9328C1.73327 11.7311 2.2153 10.5815 3.06508 9.73175C3.91487 8.88196 5.06443 8.39993 6.26616 8.38949C7.4679 8.37905 8.62566 8.84102 9.49008 9.67591L9.49092 9.67508ZM9.49092 9.67508L12.9159 6.25008L9.49092 9.67508ZM12.9159 6.25008L15.4159 8.75008L18.3326 5.83341L15.8326 3.33341L12.9159 6.25008Z",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M12.9159 6.25008L15.8326 3.33341M17.4993 1.66675L15.8326 3.33341L17.4993 1.66675ZM9.49092 9.67508C9.9212 10.0996 10.2633 10.6051 10.4974 11.1624C10.7315 11.7197 10.8531 12.3178 10.8551 12.9223C10.8571 13.5267 10.7396 14.1256 10.5092 14.6845C10.2788 15.2433 9.94014 15.7511 9.51271 16.1785C9.08528 16.606 8.57752 16.9446 8.01867 17.175C7.45982 17.4054 6.86092 17.523 6.25645 17.5209C5.65197 17.5189 5.05387 17.3973 4.49658 17.1632C3.93928 16.9291 3.43381 16.587 3.00925 16.1567C2.17436 15.2923 1.71239 14.1346 1.72283 12.9328C1.73327 11.7311 2.2153 10.5815 3.06508 9.73175C3.91487 8.88196 5.06443 8.39993 6.26616 8.38949C7.4679 8.37905 8.62566 8.84102 9.49008 9.67591L9.49092 9.67508ZM9.49092 9.67508L12.9159 6.25008L9.49092 9.67508ZM12.9159 6.25008L15.4159 8.75008L18.3326 5.83341L15.8326 3.33341L12.9159 6.25008Z",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/MenuItem/MenuItem.js + 1 modules
var MenuItem = __webpack_require__(21156);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(82591);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/zod@3.11.6/node_modules/zod/lib/index.mjs
var lib = __webpack_require__(34181);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-hook-form@7.27.0_react@18.0.0-rc.0/node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(67947);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@hookform+resolvers@2.8.8_react-hook-form@7.27.0/node_modules/@hookform/resolvers/zod/dist/zod.module.js + 1 modules
var zod_module = __webpack_require__(16365);
;// CONCATENATED MODULE: ../dashboard/src/utils/checkLengthExceed.ts
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ const PERSONA_NAME_MAX_LENGTH = 24;
function isPersonaNameLengthValid(value) {
    // Array.from(string).length is not equal to string.length.
    // you can take 👩‍👩‍👦‍👦 as an example
    return Array.from(value).length < PERSONA_NAME_MAX_LENGTH;
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/RenameDialog/index.tsx









const RenameDialog = /*#__PURE__*/ (0,react.memo)(({ open , nickname , onClose , onConfirm  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const schema = lib.z.object({
        nickname: lib.z.string().max(PERSONA_NAME_MAX_LENGTH, t.personas_name_maximum_tips({
            length: String(PERSONA_NAME_MAX_LENGTH)
        }))
    });
    const { control , handleSubmit , setError , formState: { errors , isDirty , isValid , isSubmitting  } ,  } = (0,index_esm/* useForm */.cI)({
        resolver: (0,zod_module/* zodResolver */.F)(schema),
        defaultValues: {
            nickname: nickname
        }
    });
    const handleFormSubmit = (0,react.useCallback)((event)=>{
        handleSubmit((data)=>onConfirm(data.nickname.trim())
        )(event).catch(()=>{
            setError('nickname', {
                type: 'value',
                message: t.personas_name_existed()
            });
        });
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_rename(),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
            name: "persona-rename-form",
            onSubmit: handleFormSubmit,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* Controller */.Qr, {
                        control: control,
                        render: ({ field  })=>{
                            var ref, ref1;
                            /*#__PURE__*/ return (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                                ...field,
                                placeholder: t.personas_rename_placeholder(),
                                style: {
                                    width: '100%'
                                },
                                error: !!((ref = errors.nickname) === null || ref === void 0 ? void 0 : ref.message),
                                helperText: (ref1 = errors.nickname) === null || ref1 === void 0 ? void 0 : ref1.message,
                                InputProps: {
                                    disableUnderline: true
                                }
                            });
                        },
                        name: "nickname"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            color: "secondary",
                            onClick: onClose,
                            children: t.personas_cancel()
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            disabled: !isDirty || !isValid || isSubmitting,
                            type: "submit",
                            children: t.personas_confirm()
                        })
                    ]
                })
            ]
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useToggle.js
var useToggle = __webpack_require__(80490);
;// CONCATENATED MODULE: ../icons/general/Document.tsx


const DocumentIcon = (0,utils/* createIcon */.I)('DocumentIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: "0.5",
            d: "M8.08789 12.9375C8.08789 9.62379 10.4003 6.9375 13.2528 6.9375H28.7477C31.6002 6.9375 33.9126 9.62379 33.9126 12.9375V36.9375C33.9126 40.2512 31.6002 42.9375 28.7477 42.9375H13.2528C10.4003 42.9375 8.08789 40.2512 8.08789 36.9375V12.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            opacity: "0.1",
            d: "M33.9123 20.3906V12.9375C33.9123 9.62379 31.5999 6.9375 28.7474 6.9375H22.3315L33.9123 20.3906Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M22.3318 6.9375L22.3318 14.3906C22.3318 17.7043 24.6442 20.3906 27.4968 20.3906L33.9126 20.3906L22.3318 6.9375Z",
            fill: "#AFC3E1"
        })
    ]
}), '0 0 42 48', [
    42,
    48
]);

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Slider/Slider.js
var Slider = __webpack_require__(85877);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-avatar-editor@12.0.0_e75c573827c843e95c6501bc100ebbfa/node_modules/react-avatar-editor/dist/index.js
var dist = __webpack_require__(36875);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useStateList.js
var useStateList = __webpack_require__(49934);
// EXTERNAL MODULE: ../dashboard/src/components/FileUpload/index.tsx
var FileUpload = __webpack_require__(44875);
// EXTERNAL MODULE: ../dashboard/src/pages/Personas/api.ts
var api = __webpack_require__(73793);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/UploadAvatarDialog/index.tsx










const uploadSteps = [
    'upload',
    'pick'
];
const UploadAvatarDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { state: step , next  } = (0,useStateList/* default */.Z)(uploadSteps);
    const [file1, setFile] = (0,react.useState)();
    const [scale, setScale] = (0,react.useState)(1);
    const [editor, setEditor] = (0,react.useState)(null);
    const onSave = (0,react.useCallback)(()=>{
        if (!editor || !file1) return;
        editor.getImage().toBlob((blob)=>{
            if (blob) {
                (0,api/* updatePersonaAvatar */.pk)(blob);
            }
        }, file1.type);
        onClose();
    }, [
        editor,
        file1
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_upload_avatar(),
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
            sx: {
                width: 440
            },
            children: [
                step === 'upload' && /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    sx: {
                        mb: 2
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileUpload/* default */.Z, {
                        height: 300,
                        onChange: (file)=>{
                            setFile(file);
                            next();
                        },
                        accept: "image/png, image/jpeg",
                        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(DocumentIcon, {})
                    })
                }),
                step === 'pick' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)((dist_default()), {
                            ref: (e)=>setEditor(e)
                            ,
                            image: file1,
                            border: 50,
                            style: {
                                width: '100%',
                                height: '100%'
                            },
                            scale: scale !== null && scale !== void 0 ? scale : 1,
                            rotate: 0,
                            borderRadius: 300
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* default */.ZP, {
                            max: 2,
                            min: 0.5,
                            step: 0.1,
                            defaultValue: 1,
                            onChange: (_, value)=>setScale(value)
                            ,
                            "aria-label": "Scale"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            fullWidth: true,
                            sx: {
                                mb: 2
                            },
                            variant: "contained",
                            onClick: onSave,
                            children: t.save()
                        })
                    ]
                })
            ]
        })
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Avatar/Avatar.js + 2 modules
var Avatar = __webpack_require__(21065);
// EXTERNAL MODULE: ../icons/menus/MenuPersonasActive.tsx
var MenuPersonasActive = __webpack_require__(78868);
;// CONCATENATED MODULE: ../dashboard/src/components/MaskAvatar/index.tsx






const MaskAvatar_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        author: {
            fill: src/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
            cursor: 'pointer'
        }
    })
);
const MaskAvatar = /*#__PURE__*/ (0,react.memo)(({ size =36 , onClick  })=>{
    const { classes  } = MaskAvatar_useStyles();
    const avatar = (0,api/* usePersonaAvatar */.wp)();
    const commonProps = {
        sx: {
            width: size,
            height: size,
            display: 'inline-block',
            background: src/* MaskColorVar.lightBackground */.ZN.lightBackground,
            borderRadius: '50%'
        },
        onClick: onClick,
        className: classes.author
    };
    if (!avatar) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
            justifyContent: "center",
            width: "100%",
            height: size,
            flexDirection: "row",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuPersonasActive/* MenuPersonasActiveIcon */.G, {
                ...commonProps
            })
        }));
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Avatar/* default */.Z, {
        src: avatar,
        ...commonProps
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
// EXTERNAL MODULE: ../dashboard/src/API.tsx
var API = __webpack_require__(77964);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useExportPrivateKey.ts


function useExportPrivateKey(identifier) {
    return (0,useAsync/* default */.Z)(async ()=>{
        return API/* Services.Identity.exportPersonaPrivateKey */.K9.Identity.exportPersonaPrivateKey(identifier);
    }, [
        identifier
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useCopyToClipboard.js + 1 modules
var useCopyToClipboard = __webpack_require__(17734);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ExportPrivateKeyDialog/index.tsx









const ExportPrivateKeyDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , identifier  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const [state, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const { value: privateKey  } = useExportPrivateKey(identifier);
    const getCopyButtonText = ()=>{
        var ref;
        if (state.value) {
            return t.personas_export_persona_copy_success();
        }
        if ((ref = state.error) === null || ref === void 0 ? void 0 : ref.message) {
            return t.personas_export_persona_copy_failed();
        }
        return t.personas_export_persona_copy();
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_export_persona(),
        onClose: onClose,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* MaskTextField */.FU, {
                        value: privateKey,
                        InputProps: {
                            disableUnderline: true
                        },
                        fullWidth: true
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        sx: {
                            mt: 3
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            variant: "caption",
                            children: [
                                t.personas_export_private_key_tip(),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    variant: "text",
                                    sx: {
                                        fontSize: 12,
                                        py: 0
                                    },
                                    onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Settings */.vq.Settings)
                                    ,
                                    children: t.settings_global_backup_title()
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onClose,
                        children: t.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        onClick: ()=>copyToClipboard(privateKey !== null && privateKey !== void 0 ? privateKey : '')
                        ,
                        children: getCopyButtonText()
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.69_23308786108cc798013b43ce7f4478a4/node_modules/@mui/lab/LoadingButton/LoadingButton.js + 1 modules
var LoadingButton = __webpack_require__(67943);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/LogoutPersonaDialog/index.tsx











const LogoutPersonaDialog_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        svg: {
            '& path': {
                fill: (0,src/* getMaskColor */.nb)(theme).redMain
            }
        }
    })
);
const LogoutPersonaDialog = /*#__PURE__*/ (0,react.memo)(({ open , onClose , identifier  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { classes  } = LogoutPersonaDialog_useStyles();
    const { changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const handleLogout = (0,react.useCallback)(async ()=>{
        await API/* Services.Identity.logoutPersona */.K9.Identity.logoutPersona(identifier);
        const lastCreatedPersona = await API/* Services.Identity.queryLastPersonaCreated */.K9.Identity.queryLastPersonaCreated();
        if (lastCreatedPersona) {
            await changeCurrentPersona(lastCreatedPersona.identifier);
            onClose();
        } else {
            onClose();
            navigate(shared_base_src/* DashboardRoutes.Setup */.vq.Setup);
        }
    }, [
        identifier,
        onClose
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        open: open,
        title: t.personas_logout(),
        onClose: onClose,
        maxWidth: "xs",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogContent/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            textAlign: "center",
                            py: 2,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning/* WarningIcon */.a, {
                                className: classes.svg,
                                sx: {
                                    fontSize: 64
                                },
                                color: "warning"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        color: "error",
                        variant: "body2",
                        fontSize: 13,
                        children: t.personas_logout_warning()
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        color: "secondary",
                        onClick: onClose,
                        sx: {
                            minWidth: 150
                        },
                        children: t.personas_cancel()
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                        color: "error",
                        onClick: handleLogout,
                        sx: {
                            minWidth: 150
                        },
                        variant: "contained",
                        children: t.personas_logout()
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx + 1 modules
var UserContext = __webpack_require__(61199);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(84879);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaCard/Row.tsx



















const Row_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        setting: {
            fontSize: 18,
            padding: 0,
            position: 'absolute',
            right: '-1rem',
            top: '-1rem',
            [theme.breakpoints.down('md')]: {
                right: 0,
                top: 0
            }
        },
        icon: {
            cursor: 'pointer',
            '&>svg': {
                fontSize: '96px'
            }
        },
        accountIcon: {
            '&>svg': {
                fontSize: '18px'
            }
        },
        avatar: {
            marginRight: theme.spacing(6),
            [theme.breakpoints.down('md')]: {
                marginRight: theme.spacing(3)
            }
        }
    })
);
const MenuText = (0,styled/* default */.ZP)('span')(`
    font-size: 14px;
`);
const PersonaRowCard = /*#__PURE__*/ (0,react.memo)(()=>{
    const { currentPersona , connectPersona , disconnectPersona , renamePersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    if (!currentPersona) return null;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRowCardUI, {
        nickname: currentPersona.nickname,
        identifier: currentPersona.identifier,
        profiles: currentPersona.linkedProfiles,
        onConnect: connectPersona,
        onDisconnect: disconnectPersona,
        onRename: renamePersona,
        definedSocialNetworks: definedSocialNetworks
    }));
});
const PersonaRowCardUI = /*#__PURE__*/ (0,react.memo)((props)=>{
    const navigate = (0,react_router/* useNavigate */.s0)();
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = Row_useStyles();
    const { confirmPassword  } = (0,react.useContext)(UserContext/* UserContext */.S);
    const { nickname , definedSocialNetworks , identifier , profiles  } = props;
    const { onConnect , onDisconnect , onRename  } = props;
    const [avatarOn, toggleAvatar] = (0,useToggle/* default */.Z)(false);
    const [renameDialogOpen, setRenameDialogOpen] = (0,react.useState)(false);
    const [logoutDialogOpen, setLogoutDialogOpen] = (0,react.useState)(false);
    const [exportPrivateKeyDialogOpen, setExportPrivateKeyDialogOpen] = (0,react.useState)(false);
    const logoutConfirmedPasswordCallback = ()=>confirmPassword(()=>setLogoutDialogOpen(true)
        , {
            tipTitle: t.personas_logout(),
            tipContent: t.personas_logout_confirm_password_tip(),
            confirmTitle: t.personas_logout(),
            force: false
        })
    ;
    const exportPrivateKeyConfirmedPasswordCallback = ()=>confirmPassword(()=>setExportPrivateKeyDialogOpen(true)
        , {
            tipTitle: t.personas_export_persona(),
            tipContent: t.personas_export_persona_confirm_password_tip(),
            confirmTitle: t.personas_export_persona()
        })
    ;
    const [menu, openMenu] = (0,shared_src/* useMenu */.H9)(/*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: ()=>setRenameDialogOpen(true)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.personas_rename()
        })
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: exportPrivateKeyConfirmedPasswordCallback,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.personas_export_private()
        })
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Settings */.vq.Settings, {
                state: {
                    open: 'setting'
                }
            })
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.settings_global_backup_title()
        })
    }), /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuItem/* default */.Z, {
        onClick: logoutConfirmedPasswordCallback,
        style: {
            color: src/* MaskColorVar.redMain */.ZN.redMain
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MenuText, {
            children: t.personas_logout()
        })
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "relative",
        children: [
            avatarOn && /*#__PURE__*/ (0,jsx_runtime.jsx)(UploadAvatarDialog, {
                open: avatarOn,
                onClose: ()=>toggleAvatar(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: (e)=>{
                    e.stopPropagation();
                    openMenu(e);
                },
                className: classes.setting,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Settings/* SettingsIcon */.e, {
                    fontSize: "inherit",
                    style: {
                        fill: src/* MaskColorVar.textPrimary */.ZN.textPrimary
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                direction: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "240px",
                className: classes.avatar,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    textAlign: "center",
                    className: classes.icon,
                    onClick: ()=>toggleAvatar(true)
                    ,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAvatar, {
                            size: 96
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body1",
                            sx: {
                                cursor: 'pointer'
                            },
                            children: nickname
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                sx: {
                    flex: 3
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                        height: 22,
                        sx: {
                            display: 'inline-flex',
                            alignItems: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                sx: {
                                    mr: 1.5,
                                    py: '2px',
                                    height: '100%'
                                },
                                className: classes.accountIcon,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PublicKeyIcon, {})
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "body1",
                                sx: {
                                    fontSize: 13
                                },
                                component: "span",
                                children: identifier.compressedPoint
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        children: definedSocialNetworks.map(({ networkIdentifier  })=>{
                            const currentNetworkProfiles = profiles.filter((x)=>x.identifier.network === networkIdentifier
                            );
                            currentNetworkProfiles.map(()=>{});
                            if (!currentNetworkProfiles.length) {
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnconnectedPersonaLine, {
                                    onConnect: ()=>onConnect(identifier, networkIdentifier)
                                    ,
                                    networkIdentifier: networkIdentifier
                                }, networkIdentifier));
                            } else {
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedPersonaLine, {
                                    isHideOperations: false,
                                    onConnect: ()=>onConnect(identifier, networkIdentifier)
                                    ,
                                    onDisconnect: onDisconnect,
                                    profileIdentifiers: currentNetworkProfiles.map((x)=>x.identifier
                                    ),
                                    networkIdentifier: networkIdentifier
                                }, networkIdentifier));
                            }
                        })
                    })
                ]
            }),
            menu,
            renameDialogOpen && /*#__PURE__*/ (0,jsx_runtime.jsx)(RenameDialog, {
                open: renameDialogOpen,
                nickname: nickname,
                onClose: ()=>setRenameDialogOpen(false)
                ,
                onConfirm: async (name)=>{
                    await onRename(identifier, name);
                    setRenameDialogOpen(false);
                }
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(LogoutPersonaDialog, {
                open: logoutDialogOpen,
                identifier: identifier,
                onClose: ()=>setLogoutDialogOpen(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ExportPrivateKeyDialog, {
                open: exportPrivateKeyDialogOpen,
                identifier: identifier,
                onClose: ()=>setExportPrivateKeyDialogOpen(false)
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaCard/index.tsx









const PersonaCard_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        card: {
            borderRadius: Number(theme.shape.borderRadius) * 3,
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            display: 'flex',
            padding: theme.spacing(1.25),
            minWidth: 320
        },
        status: {
            width: 10,
            height: 10,
            borderRadius: '50%',
            marginRight: theme.spacing(1.25),
            marginTop: theme.spacing(0.625)
        },
        statusInactivated: {
            backgroundColor: src/* MaskColorVar.iconLight */.ZN.iconLight
        },
        statusActivated: {
            backgroundColor: src/* MaskColorVar.greenMain */.ZN.greenMain
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: theme.typography.caption.fontSize
        },
        content: {
            marginTop: theme.spacing(1.25),
            paddingRight: theme.spacing(1.25)
        },
        line: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: theme.typography.caption.fontSize
        },
        setting: {
            fontSize: theme.typography.caption.fontSize,
            padding: 0
        }
    })
);
const PersonaCard = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { connectPersona , disconnectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCardUI, {
        ...props,
        onConnect: connectPersona,
        onDisconnect: disconnectPersona,
        definedSocialNetworks: definedSocialNetworks
    }));
});
const PersonaCardUI = /*#__PURE__*/ (0,react.memo)((props)=>{
    const { nickname , active =false , definedSocialNetworks , identifier , profiles  } = props;
    const { onConnect , onDisconnect , onClick  } = props;
    const { classes  } = PersonaCard_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classnames_default()(classes.status, active ? classes.statusActivated : classes.statusInactivated)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                style: {
                    flex: 1
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: classes.header,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "subtitle2",
                                sx: {
                                    cursor: 'pointer'
                                },
                                onClick: onClick,
                                children: nickname
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                variant: "caption",
                                sx: {
                                    cursor: 'pointer'
                                },
                                onClick: onClick,
                                children: (0,shared_src/* formatFingerprint */.R)(identifier.compressedPoint, 4)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: classes.content,
                        children: definedSocialNetworks.map(({ networkIdentifier  })=>{
                            const currentNetworkProfiles = profiles.filter((x)=>x.identifier.network === networkIdentifier
                            );
                            if (!currentNetworkProfiles.length) {
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UnconnectedPersonaLine, {
                                    onConnect: ()=>onConnect(identifier, networkIdentifier)
                                    ,
                                    networkIdentifier: networkIdentifier
                                }, networkIdentifier));
                            } else {
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectedPersonaLine, {
                                    isHideOperations: true,
                                    onConnect: ()=>onConnect(identifier, networkIdentifier)
                                    ,
                                    onDisconnect: onDisconnect,
                                    profileIdentifiers: currentNetworkProfiles.map((x)=>x.identifier
                                    ),
                                    networkIdentifier: networkIdentifier
                                }, networkIdentifier));
                            }
                        })
                    })
                ]
            })
        ]
    }));
});


;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaDrawer/index.tsx










const PersonaDrawer_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        paper: {
            // material-ui toolbar height
            top: '64px',
            padding: theme.spacing(3, 3.75, 11.25, 3.75),
            background: src/* MaskColorVar.suspensionBackground */.ZN.suspensionBackground
        },
        backdrop: {
            background: 'none',
            top: 64
        },
        buttons: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridColumnGap: theme.spacing(3.5)
        },
        backup: {
            backgroundColor: src/* MaskColorVar.warning */.ZN.warning,
            '&:hover': {
                backgroundColor: src/* MaskColorVar.warning */.ZN.warning,
                boxShadow: `0 0 5px ${src/* MaskColorVar.warning */.ZN.warning}`
            }
        }
    })
);
const PersonaDrawer = /*#__PURE__*/ (0,react.memo)(({ personas  })=>{
    const { drawerOpen , toggleDrawer , currentPersona , createPersona , changeCurrentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaDrawerUI, {
        personas: personas,
        currentPersonaIdentifier: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier,
        open: drawerOpen,
        toggleDrawer: toggleDrawer,
        onChangeCurrentPersona: changeCurrentPersona,
        onCreatePersona: createPersona
    }));
});
const PersonaDrawerUI = /*#__PURE__*/ (0,react.memo)(({ open , currentPersonaIdentifier , toggleDrawer , personas , onChangeCurrentPersona , onCreatePersona  })=>{
    const { classes  } = PersonaDrawer_useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Drawer/* default */.ZP, {
        anchor: "right",
        open: open,
        onClose: toggleDrawer,
        variant: "temporary",
        ModalProps: {
            BackdropProps: {
                className: classes.backdrop
            }
        },
        elevation: 0,
        classes: {
            paper: classes.paper
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
            justifyContent: "space-between",
            gap: 2,
            height: "100%",
            maxHeight: "100%",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    overflow: "auto",
                    children: [
                        personas.map((item)=>{
                            const { identifier , nickname , linkedProfiles  } = item;
                            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                                mb: 2.5,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaCard, {
                                    identifier: identifier,
                                    active: identifier.equals(currentPersonaIdentifier),
                                    nickname: nickname,
                                    profiles: [
                                        ...linkedProfiles.values()
                                    ],
                                    onClick: ()=>onChangeCurrentPersona(identifier)
                                }, identifier.toText())
                            }, identifier.toText()));
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.buttons,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    onClick: ()=>navigate(shared_base_src/* DashboardRoutes.SignUp */.vq.SignUp)
                                    ,
                                    disabled: personas.length >= shared_src/* MAX_PERSONA_LIMIT */.LM,
                                    children: t.personas_add_persona()
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                    color: "warning",
                                    onClick: ()=>navigate(shared_base_src/* DashboardRoutes.SignIn */.vq.SignIn, {
                                            state: {
                                                from: shared_base_src/* DashboardRoutes.Personas */.vq.Personas
                                            }
                                        })
                                    ,
                                    children: t.recovery()
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        fullWidth: true,
                        sx: {
                            mb: 2
                        },
                        color: "warning",
                        onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Settings */.vq.Settings, {
                                state: {
                                    open: 'setting'
                                }
                            })
                        ,
                        children: t.settings_global_backup_title()
                    })
                })
            ]
        })
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/ContentContainer/index.tsx
var ContentContainer = __webpack_require__(27843);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useUpdateEffect.js + 1 modules
var useUpdateEffect = __webpack_require__(19669);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(22572);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/last.js
var last = __webpack_require__(7683);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useContacts.ts





const useContacts = (network, page, size = 20)=>{
    const cache = (0,react.useRef)(new Map([]));
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    // If the network type be changed, clean cache
    (0,useUpdateEffect/* default */.Z)(()=>{
        cache.current = new Map();
    }, [
        network,
        currentPersona
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const lastValue = cache.current.get(page - 1);
        const values = await API/* Services.Identity.queryRelationPaged */.K9.Identity.queryRelationPaged({
            network,
            after: lastValue,
            pageOffset: page * size
        }, size);
        // Cache the last record of  each page
        cache.current.set(page, (0,last/* default */.Z)(values));
        const profiles = await API/* Services.Identity.queryProfilesWithIdentifiers */.K9.Identity.queryProfilesWithIdentifiers(values.map((x)=>x.profile
        ));
        return profiles.map((profile)=>{
            var ref;
            const favor = (ref = values.find((x)=>x.profile.equals(profile.identifier)
            )) === null || ref === void 0 ? void 0 : ref.favor;
            return {
                favor,
                ...profile
            };
        });
    }, [
        page,
        size,
        network,
        currentPersona
    ]);
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableContainer/TableContainer.js + 1 modules
var TableContainer = __webpack_require__(66299);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Table/Table.js + 1 modules
var Table = __webpack_require__(70884);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableBody/TableBody.js + 1 modules
var TableBody = __webpack_require__(53361);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TablePagination/TablePagination.js + 3 modules
var TablePagination = __webpack_require__(26655);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/FilledInput/FilledInput.js
var FilledInput = __webpack_require__(26040);
// EXTERNAL MODULE: ../icons/general/Empty.tsx
var Empty = __webpack_require__(32049);
// EXTERNAL MODULE: ../dashboard/src/locales/i18n_generated.js
var i18n_generated = __webpack_require__(28074);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/EmptyContactPlaceholder/index.tsx








const EmptyContactPlaceholder_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        prompt: {
            color: src/* MaskColorVar.textLight */.ZN.textLight,
            fontSize: theme.typography.pxToRem(12),
            lineHeight: theme.typography.pxToRem(16),
            marginTop: theme.spacing(2.5)
        },
        icon: {
            width: 96,
            height: 96,
            fill: 'none'
        },
        download: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20
        },
        input: {
            fontSize: 12,
            paddingTop: 8,
            width: 280
        },
        button: {
            marginLeft: 20
        }
    })
);
const downloadUrl = 'https://mask.io/download-links/';
const EmptyContactPlaceholder = /*#__PURE__*/ (0,react.memo)(()=>{
    const [, copyToClipboard] = (0,useCopyToClipboard/* default */.Z)();
    const copyDownloadLink = (0,shared_src/* useSnackbarCallback */.iD)({
        executor: async ()=>copyToClipboard(downloadUrl)
        ,
        deps: []
    });
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyContactPlaceholderUI, {
        onCopy: copyDownloadLink
    }));
});
const EmptyContactPlaceholderUI = /*#__PURE__*/ (0,react.memo)(({ onCopy  })=>{
    const { classes  } = EmptyContactPlaceholder_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        className: classes.container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                className: classes.icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.prompt,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(i18n_generated/* DashboardTrans.personas_empty_contact_tips */.K.personas_empty_contact_tips, {
                    components: {
                        i: /*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
                            href: downloadUrl
                        })
                    },
                    values: {
                        name: 'Mask Network'
                    }
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                className: classes.download,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FilledInput/* default */.Z, {
                        value: downloadUrl,
                        disabled: true,
                        classes: {
                            input: classes.input
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                        className: classes.button,
                        onClick: onCopy,
                        children: "Copy"
                    })
                ]
            })
        ]
    }));
});

// EXTERNAL MODULE: ../dashboard/src/components/LoadingPlaceholder/index.tsx
var LoadingPlaceholder = __webpack_require__(95625);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sortBy.js
var sortBy = __webpack_require__(5043);
// EXTERNAL MODULE: ../../node_modules/.pnpm/unstated-next@1.1.0/node_modules/unstated-next/dist/unstated-next.mjs
var unstated_next = __webpack_require__(44737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(32824);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableRow/TableRow.js + 1 modules
var TableRow = __webpack_require__(50440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/TableCell/TableCell.js + 1 modules
var TableCell = __webpack_require__(80689);
;// CONCATENATED MODULE: ../icons/general/Star.tsx


const StarIcon = (0,utils/* createIcon */.I)('StartIcon', /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M11.742 17.426a.5.5 0 01.516 0l4.908 2.962a.5.5 0 00.745-.542l-1.302-5.582a.5.5 0 01.16-.492l4.337-3.758a.5.5 0 00-.284-.876l-5.712-.492a.5.5 0 01-.418-.303L12.46 3.084a.5.5 0 00-.92 0l-2.232 5.26a.5.5 0 01-.418.302l-5.713.493a.5.5 0 00-.285.875l4.33 3.759a.5.5 0 01.16.49l-1.295 5.585a.5.5 0 00.746.54l4.909-2.962z"
    })
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/brands/MaskBlue.tsx
var MaskBlue = __webpack_require__(2805);
;// CONCATENATED MODULE: ../dashboard/src/utils/generateContactAvatarColor.ts
function generateContactAvatarColor(string, theme) {
    const hash = [
        ...string
    ].reduce((prev, current)=>{
        // eslint-disable-next-line no-bitwise
        const next = current.charCodeAt(0) + (prev << 5) - prev;
        // eslint-disable-next-line no-bitwise
        return next & next;
    }, 0);
    return `hsl(${hash % 360}, ${theme === 'dark' ? '78%' : '98%'}, ${theme === 'dark' ? '50%' : '70%'})`;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsyncFn.js
var useAsyncFn = __webpack_require__(56838);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/useFavoriteContact.ts



function useAddContactToFavorite() {
    return (0,useAsyncFn/* default */.Z)(async (identifier, currentPersona)=>{
        await API/* Services.Identity.updateRelation */.K9.Identity.updateRelation(identifier, currentPersona.identifier, shared_base_src/* RelationFavor.COLLECTED */.Kn.COLLECTED);
    }, []);
}
function useRemoveContactFromFavorite() {
    return (0,useAsyncFn/* default */.Z)(async (identifier, currentPersona)=>{
        await API/* Services.Identity.updateRelation */.K9.Identity.updateRelation(identifier, currentPersona.identifier, shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED);
    });
}

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ContactTableRow/index.tsx












const ContactTableRow_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        favorite: {
            marginLeft: 16,
            marginRight: 26,
            width: 24,
            height: 24
        },
        avatarContainer: {
            position: 'relative'
        },
        maskIcon: {
            position: 'absolute',
            width: 16,
            height: 16,
            right: 0,
            bottom: 0
        },
        button: {
            padding: '3px 24px',
            borderRadius: 14
        },
        info: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 17,
            justifyContent: 'space-between'
        },
        userId: {
            fontSize: 12,
            color: src/* MaskColorVar.normalText */.ZN.normalText
        },
        tableRow: {
            '&:hover': {
                backgroundColor: theme.palette.background.default
            }
        }
    })
);
const ContactTableRow = /*#__PURE__*/ (0,react.memo)(({ network , contact , index , onReset  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const [, addContactToFavorite] = useAddContactToFavorite();
    const [, removeContactFromFavorite] = useRemoveContactFromFavorite();
    const theme = (0,useTheme/* default */.Z)().palette.mode;
    const handleClickStar = (0,react.useCallback)(async ()=>{
        if (!currentPersona) return;
        contact.favorite ? await removeContactFromFavorite(contact.identifier, currentPersona) : await addContactToFavorite(contact.identifier, currentPersona);
        onReset();
    }, [
        contact,
        currentPersona,
        onReset
    ]);
    const [{ loading  }, handleClickInvite] = (0,useAsyncFn/* default */.Z)(async ()=>{
        return API/* Services.SocialNetwork.openShareLink */.K9.SocialNetwork.openShareLink(network, t.personas_invite_post({
            identifier: contact.identifier.userId
        }));
    }, []);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactTableRowUI, {
        handleClickInvite: handleClickInvite,
        handleClickStar: handleClickStar,
        theme: theme,
        loading: loading,
        contact: contact,
        index: index
    }));
});
const SPACE_POINT = ' '.codePointAt(0);
const ContactTableRowUI = /*#__PURE__*/ (0,react.memo)(({ contact , index , handleClickStar , handleClickInvite , theme , loading  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = ContactTableRow_useStyles();
    const [first, last] = contact.name.split(' ');
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(TableRow/* default */.Z, {
        className: classes.tableRow,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                align: "left",
                variant: "body",
                sx: {
                    border: 'none',
                    p: 1.5
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                    display: "flex",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            children: index
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                            className: classes.favorite,
                            children: contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(StarIcon, {
                                sx: {
                                    fill: contact.favorite ? src/* MaskColorVar.warning */.ZN.warning : src/* MaskColorVar.iconLight */.ZN.iconLight,
                                    cursor: 'pointer'
                                },
                                onClick: handleClickStar
                            }) : null
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.avatarContainer,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Avatar/* default */.Z, {
                                    "aria-label": contact.name,
                                    src: contact.avatar,
                                    sx: {
                                        backgroundColor: generateContactAvatarColor(contact.identifier.toText(), theme),
                                        width: 48,
                                        height: 48
                                    },
                                    children: [
                                        String.fromCodePoint(first.codePointAt(0) || SPACE_POINT),
                                        String.fromCodePoint((last || '').codePointAt(0) || SPACE_POINT)
                                    ]
                                }),
                                contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskBlue/* MaskBlueIcon */.I, {
                                    className: classes.maskIcon
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
                            className: classes.info,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    children: contact.name
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                                    className: classes.userId,
                                    children: [
                                        "@",
                                        contact.identifier.userId
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TableCell/* default */.Z, {
                align: "center",
                sx: {
                    border: 'none'
                },
                children: !contact.fingerprint ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingButton/* default */.Z, {
                    loading: loading,
                    color: "secondary",
                    size: "small",
                    variant: "contained",
                    className: classes.button,
                    onClick: handleClickInvite,
                    children: t.personas_contacts_invite()
                }) : null
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/ContactsTable/index.tsx















const ContactsTable_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        container: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        },
        header: {
            color: src/* MaskColorVar.normalText */.ZN.normalText,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '24px 28px',
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground
        },
        footer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        paginationItem: {
            borderRadius: 4,
            border: `1px solid ${src/* MaskColorVar.lineLight */.ZN.lineLight}`,
            color: src/* MaskColorVar.textPrimary */.ZN.textPrimary,
            '&.Mui-selected': {
                backgroundColor: src/* MaskColorVar.blue */.ZN.blue,
                color: '#ffffff',
                border: 'none',
                '&:hover': {
                    backgroundColor: src/* MaskColorVar.blue */.ZN.blue
                }
            }
        }
    })
);
const PageSize = 20;
const ContactsTable = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const [page, setPage] = (0,react.useState)(0);
    const { currentPersona  } = (0,unstated_next/* useContainer */.u)(usePersonaContext/* PersonaContext */.m);
    const { value , error , loading , retry  } = useContacts(network, page, PageSize);
    const dataSource = (0,react.useMemo)(()=>{
        if (!value) return [];
        return (0,sortBy/* default */.Z)(value.map((profile)=>{
            var ref;
            return {
                favorite: profile.favor === shared_base_src/* RelationFavor.COLLECTED */.Kn.COLLECTED,
                name: profile.nickname || profile.identifier.userId || '',
                fingerprint: (ref = profile.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint,
                identifier: profile.identifier,
                avatar: profile.avatar
            };
        }), (item)=>!item.favorite
        );
    }, [
        value,
        page
    ]);
    (0,react.useEffect)(()=>{
        setPage(0);
    }, [
        network
    ]);
    (0,react.useEffect)(()=>{
        return API/* Messages.events.relationsChanged.on */.Vm.events.relationsChanged.on(retry);
    }, [
        retry
    ]);
    (0,useUpdateEffect/* default */.Z)(()=>{
        setPage(0);
    }, [
        currentPersona
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactsTableUI, {
        isEmpty: !!error || !dataSource.length,
        isLoading: loading,
        network: network,
        dataSource: dataSource,
        page: page,
        onPageChange: setPage,
        showPagination: !loading && !error && !!(value === null || value === void 0 ? void 0 : value.length),
        onReset: ()=>setPage(0)
    }));
});
const ContactsTableUI = /*#__PURE__*/ (0,react.memo)(({ showPagination , page , onPageChange , network , dataSource , isEmpty , isLoading , onReset  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { classes  } = ContactsTable_useStyles();
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "space-between",
        height: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                flex: 1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TableContainer/* default */.Z, {
                    className: classes.container,
                    children: isEmpty || isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                        flex: 1,
                        children: isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingPlaceholder/* LoadingPlaceholder */.u, {}) : isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(EmptyContactPlaceholder, {}) : null
                    }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Table/* default */.Z, {
                        stickyHeader: true,
                        children: dataSource.length ? /*#__PURE__*/ (0,jsx_runtime.jsx)(TableBody/* default */.Z, {
                            children: dataSource.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ContactTableRow, {
                                    contact: item,
                                    index: page * PageSize + index + 1,
                                    network: network,
                                    onReset: onReset
                                }, index)
                            )
                        }) : null
                    })
                })
            }),
            showPagination && !isEmpty ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                className: classes.footer,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    count: -1,
                    component: "div",
                    onPageChange: ()=>{},
                    page: page,
                    rowsPerPage: PageSize,
                    rowsPerPageOptions: [
                        PageSize
                    ],
                    labelDisplayedRows: ()=>null
                    ,
                    backIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev - 1
                            )
                        ,
                        size: 'small',
                        disabled: page === 0
                    },
                    nextIconButtonProps: {
                        onClick: ()=>onPageChange((prev)=>prev + 1
                            )
                        ,
                        disabled: dataSource.length < PageSize,
                        size: 'small'
                    }
                })
            }) : null
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/hooks/usePostHistory.ts





const usePostHistory = (network, page, size = 20)=>{
    const cache = (0,react.useRef)(new Map([]));
    const { currentPersona  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,useUpdateEffect/* default */.Z)(()=>{
        cache.current = new Map();
    }, [
        network,
        currentPersona
    ]);
    return (0,useAsyncRetry/* default */.Z)(async ()=>{
        const lastValue = cache.current.get(page - 1);
        var ref;
        const values = await API/* Services.Identity.queryPagedPostHistory */.K9.Identity.queryPagedPostHistory({
            network,
            userIds: (ref = currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.linkedProfiles.map((profile)=>profile.identifier.userId
            )) !== null && ref !== void 0 ? ref : [],
            after: lastValue === null || lastValue === void 0 ? void 0 : lastValue.identifier,
            pageOffset: page
        }, size);
        cache.current.set(page, (0,last/* default */.Z)(values));
        return values;
    }, [
        page,
        size,
        network,
        currentPersona
    ]);
};

;// CONCATENATED MODULE: ../icons/general/Message.tsx


const MessageIcon = (0,utils/* createIcon */.I)('MessageIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M4.5 6.46875C4.5 4.8119 5.84315 3.46875 7.5 3.46875H16.5C18.1569 3.46875 19.5 4.8119 19.5 6.46875V18.4688C19.5 20.1256 18.1569 21.4688 16.5 21.4688H7.5C5.84315 21.4688 4.5 20.1256 4.5 18.4688V6.46875Z",
            fill: "#FBB03B"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M19.5 10.1953V6.46875C19.5 4.8119 18.1569 3.46875 16.5 3.46875H12.7734L19.5 10.1953Z",
            fill: "#FCDA21"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M12.7734 3.46875L12.7734 7.19531C12.7734 8.85217 14.1166 10.1953 15.7734 10.1953L19.5 10.1953L12.7734 3.46875Z",
            fill: "#F7931E"
        })
    ]
}), '0 0 24 24');

;// CONCATENATED MODULE: ../icons/general/FileMessage.tsx


const FileMessageIcon = (0,utils/* createIcon */.I)('FileMessageIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            d: "M3 7C3 6.44772 3.44772 6 4 6H10C10.3148 6 10.6111 6.14819 10.8 6.4L13.8 10.4C14.2944 11.0592 13.824 12 13 12H4C3.44772 12 3 11.5523 3 11V7Z",
            fill: "#F7931E"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            opacity: "0.8",
            x: "4.5",
            y: "7.33594",
            width: "15",
            height: "10.5",
            rx: "1",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            opacity: "0.8",
            x: "4.5",
            y: "8.08594",
            width: "15",
            height: "10.5",
            rx: "1",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "3",
            y: "9",
            width: "18",
            height: "10.5",
            rx: "1",
            fill: "#FFB915"
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../icons/general/RedPacket.tsx
var RedPacket = __webpack_require__(66502);
// EXTERNAL MODULE: ../icons/general/ITO.tsx
var ITO = __webpack_require__(17185);
;// CONCATENATED MODULE: ../icons/general/Poll.tsx


const PollIcon = (0,utils/* createIcon */.I)('PollIcon', /*#__PURE__*/ (0,jsx_runtime.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "21",
            y: "11.25",
            width: "9.5625",
            height: "17.2031",
            rx: "1",
            transform: "rotate(90 21 11.25)",
            fill: "#1C68F3"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "8.39062",
            y: "13.6323",
            width: "8.01562",
            height: "1.40625",
            rx: "0.703125",
            fill: "white"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
            x: "17.1689",
            y: "2.88165",
            width: "7.31515",
            height: "10.8654",
            rx: "1",
            transform: "rotate(55.808 17.1689 2.88165)",
            fill: "#63EF92"
        }),
        /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M16.5036 5.76682C16.7876 5.90741 16.9038 6.25159 16.7632 6.53555L14.5759 10.9592C14.554 11.0036 14.503 11.0252 14.4558 11.0102L12.1338 10.2674C11.8352 10.1613 11.6791 9.83332 11.7852 9.53473C11.8912 9.23613 12.2193 9.08005 12.5179 9.18611L13.9233 9.68531L15.7349 6.02641C15.8755 5.74245 16.2197 5.62622 16.5036 5.76682Z",
            fill: "white"
        })
    ]
}), '0 0 24 24');

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(89729);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PostHistory/PostHistoryRow.tsx









const MSG_DELIMITER = '2c1aca02';
const PostHistoryRow_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>{
    return {
        hover: {
            '&:hover': {
                backgroundColor: theme.palette.background.default
            },
            alignItems: 'center',
            padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
            borderRadius: '8px'
        }
    };
});
const parseFileServiceMessage = (body)=>{
    const link = `https://arweave.net/${body.landingTxID}/#${body.key}`;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Link/* default */.Z, {
        underline: "none",
        target: "_blank",
        rel: "noopener noreferrer",
        href: link,
        children: body.name
    }));
};
const SUPPORT_PLUGIN = {
    text: {
        pluginId: null,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageIcon, {}),
        messageParse: ()=>null
    },
    'com.maskbook.fileservice:1': {
        pluginId: null,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileMessageIcon, {}),
        messageParse: parseFileServiceMessage
    },
    'com.maskbook.fileservice:2': {
        pluginId: null,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(FileMessageIcon, {}),
        messageParse: parseFileServiceMessage
    },
    'com.maskbook.red_packet:1': {
        pluginId: plugin_infra_src/* PluginId.RedPacket */.je.RedPacket,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(RedPacket/* RedPacketIcon */.t, {}),
        messageParse: (body)=>body.sender.message
    },
    'com.maskbook.ito:1': {
        pluginId: plugin_infra_src/* PluginId.ITO */.je.ITO,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO/* ITOIcon */.J, {}),
        messageParse: (body)=>body.message.split(MSG_DELIMITER)[1]
    },
    'com.maskbook.ito:2': {
        pluginId: plugin_infra_src/* PluginId.ITO */.je.ITO,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(ITO/* ITOIcon */.J, {}),
        messageParse: (body)=>body.message.split(MSG_DELIMITER)[1]
    },
    'com.maskbook.poll:1': {
        pluginId: plugin_infra_src/* PluginId.Poll */.je.Poll,
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(PollIcon, {}),
        messageParse: (body)=>body.question
    }
};
const PostHistoryRow = /*#__PURE__*/ (0,react.memo)(({ post , network  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const { openProfilePage  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    const recipientClickHandler = (0,react.useCallback)(async (event, userId)=>{
        event.stopPropagation();
        await openProfilePage(network, userId);
    }, []);
    const rowClickHandler = (0,react.useCallback)((event)=>{
        if (event.target.tagName !== 'A') {
            post.url && API/* Services.Settings.openTab */.K9.Settings.openTab(post.url);
        }
    }, []);
    const postIcon = (0,react.useMemo)(()=>{
        var ref;
        const { interestedMeta  } = post;
        var _value;
        const plugin = (_value = interestedMeta === null || interestedMeta === void 0 ? void 0 : interestedMeta.keys().next().value) !== null && _value !== void 0 ? _value : 'text';
        var ref1;
        return (ref1 = (ref = SUPPORT_PLUGIN[plugin]) === null || ref === void 0 ? void 0 : ref.icon) !== null && ref1 !== void 0 ? ref1 : /*#__PURE__*/ (0,jsx_runtime.jsx)(MessageIcon, {});
    }, [
        post.interestedMeta
    ]);
    const postMessage = (0,react.useMemo)(()=>{
        var ref;
        const { interestedMeta  } = post;
        const meta = Array.from(interestedMeta !== null && interestedMeta !== void 0 ? interestedMeta : []);
        if (!meta.length) return null;
        const [pluginName, pluginInfo] = meta[0];
        var ref2;
        return (ref2 = (ref = SUPPORT_PLUGIN[pluginName]) === null || ref === void 0 ? void 0 : ref.messageParse(pluginInfo)) !== null && ref2 !== void 0 ? ref2 : '';
    }, [
        post.interestedMeta
    ]);
    const postOperation = (0,react.useMemo)(()=>{
        var ref;
        const { identifier , interestedMeta  } = post;
        const meta = Array.from(interestedMeta !== null && interestedMeta !== void 0 ? interestedMeta : []);
        if (!meta.length) return null;
        const pluginName = meta[0][0];
        const pluginId = (ref = SUPPORT_PLUGIN[pluginName]) === null || ref === void 0 ? void 0 : ref.pluginId;
        if (!pluginId) return null;
        const handler = ()=>API/* Services.SocialNetwork.openSNSAndActivatePlugin */.K9.SocialNetwork.openSNSAndActivatePlugin(`https://${identifier.network}`, pluginId)
        ;
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
            color: "secondary",
            variant: "rounded",
            onClick: handler,
            sx: {
                fontSize: 12
            },
            children: t.manage()
        }));
    }, [
        post.identifier
    ]);
    const allRecipients = (0,react.useMemo)(()=>{
        const { recipients , postBy  } = post;
        if (recipients === 'everyone') return [
            'Everyone'
        ];
        const userIds = Array.from(recipients.keys()).map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                onClick: (e)=>recipientClickHandler(e, x.userId)
                ,
                children: [
                    "@",
                    x.userId
                ]
            }, x.userId)
        );
        return userIds.length ? userIds : [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                onClick: (e)=>recipientClickHandler(e, postBy.userId)
                ,
                children: "Myself"
            }, postBy.userId), 
        ];
    }, [
        post.recipients,
        post.postBy
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(PostHistoryRowUI, {
        operation: postOperation,
        message: postMessage,
        icon: postIcon,
        recipients: allRecipients,
        post: post,
        onClick: rowClickHandler
    }));
});
const PostHistoryRowUI = /*#__PURE__*/ (0,react.memo)(({ post , message , icon , operation , onClick , recipients  })=>{
    var ref;
    const { classes  } = PostHistoryRow_useStyles();
    var ref3, _summary;
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        direction: "row",
        gap: 1.5,
        className: classes.hover,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                width: 48,
                height: 48,
                sx: {
                    background: ()=>src/* MaskColorVar.primary.alpha */.ZN.primary.alpha(0.1)
                },
                children: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                flex: 1,
                justifyContent: "space-around",
                sx: {
                    cursor: 'pointer'
                },
                gap: 0.3,
                onClick: onClick,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body2",
                        children: ((ref3 = (ref = post.summary) === null || ref === void 0 ? void 0 : ref.length) !== null && ref3 !== void 0 ? ref3 : 0) > 40 ? post.summary.slice(0, 40) + '...' : (_summary = post.summary) !== null && _summary !== void 0 ? _summary : ''
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body2",
                        children: message
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        component: "p",
                        variant: "body2",
                        sx: {
                            color: (theme)=>(0,src/* getMaskColor */.nb)(theme).textSecondary
                        },
                        children: recipients.map((recipient, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                component: "span",
                                variant: "body2",
                                sx: {
                                    mr: 1
                                },
                                children: recipient
                            }, index)
                        )
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                children: operation
            })
        ]
    }));
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var urlcat_dist = __webpack_require__(19802);
var urlcat_dist_default = /*#__PURE__*/__webpack_require__.n(urlcat_dist);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PostHistory/Placeholder.tsx







const Placeholder = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const url = urlcat_dist_default()('https://www.:network', {
        network: network
    });
    const handleClick = ()=>window.open(url)
    ;
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        mt: -3.5,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
            textAlign: "center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Empty/* EmptyIcon */.t, {
                    sx: {
                        fontSize: 100
                    }
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                    variant: "body2",
                    mb: 3,
                    sx: {
                        color: src/* MaskColorVar.textSecondary */.ZN.textSecondary
                    },
                    children: t.personas_post_is_empty()
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: handleClick,
                    children: t.personas_post_create()
                })
            ]
        })
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PostHistory/index.tsx






const DEFAULT_PAGE_SIZE = 20;
const PostHistory = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const [page, setPage] = (0,react.useState)(0);
    const { value , error , loading  } = usePostHistory(network, page, DEFAULT_PAGE_SIZE);
    if (!(value === null || value === void 0 ? void 0 : value.length) && !loading) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Placeholder, {
        network: network
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
        justifyContent: "space-between",
        height: "100%",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                flex: 1,
                mt: 1,
                children: value === null || value === void 0 ? void 0 : value.map((x)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PostHistoryRow, {
                        network: network,
                        post: x
                    }, x.url)
                )
            }),
            !loading && !error && !!(value === null || value === void 0 ? void 0 : value.length) ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                justifyContent: "center",
                direction: "row",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(TablePagination/* default */.Z, {
                    sx: {
                        display: 'inline-block'
                    },
                    count: -1,
                    component: "div",
                    onPageChange: ()=>{},
                    page: page,
                    rowsPerPage: DEFAULT_PAGE_SIZE,
                    rowsPerPageOptions: [
                        DEFAULT_PAGE_SIZE
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
                        disabled: value.length < DEFAULT_PAGE_SIZE,
                        size: 'small'
                    }
                })
            }) : null
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaContent/index.tsx







const PersonaContent_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
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
var PersonaContentTab;
(function(PersonaContentTab) {
    PersonaContentTab["Posts"] = 'POST';
    PersonaContentTab["Contacts"] = 'Contacts';
})(PersonaContentTab || (PersonaContentTab = {}));
const PersonaContent = /*#__PURE__*/ (0,react.memo)(({ network  })=>{
    const { classes  } = PersonaContent_useStyles();
    const [tab, setTab] = (0,react.useState)(PersonaContentTab.Posts);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
        className: classes.container,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
            value: String(tab),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* ButtonGroupTabList */.E1, {
                    classes: {
                        root: classes.tabs
                    },
                    onChange: (e, v)=>setTab(v)
                    ,
                    "aria-label": "persona-post-contacts-button-group",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: PersonaContentTab.Posts,
                            label: "Posts"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            value: PersonaContentTab.Contacts,
                            label: "Contacts"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: PersonaContentTab.Posts,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PostHistory, {
                        network: network
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                    value: PersonaContentTab.Contacts,
                    className: classes.tab,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactsTable, {
                        network: network
                    })
                })
            ]
        })
    }));
});

;// CONCATENATED MODULE: ../icons/general/ArrowUpRound.tsx


const ArrowUpRound = (0,utils/* createIcon */.I)('ArrowUp', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        d: "M18 15.6l-4-4-4 4",
        stroke: "#1C68F3",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 28 28');

// EXTERNAL MODULE: ../icons/general/ArrowDownRound.tsx
var ArrowDownRound = __webpack_require__(11290);
;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/components/PersonaStateBar/index.tsx







const PersonaStateBar_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        iconButton: {
            padding: 0,
            fontSize: 24,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: `1px solid ${src/* MaskColorVar.blue.alpha */.ZN.blue.alpha(0.1)}`
        },
        arrow: {
            fill: 'none',
            stroke: src/* MaskColorVar.primary */.ZN.primary
        },
        nickname: {
            margin: theme.spacing(0, 1.5),
            lineHeight: 1.375
        }
    })
);
const PersonaStateBar = /*#__PURE__*/ (0,react.memo)(({ nickname , toggleDrawer , drawerOpen , fingerprint  })=>{
    const { classes  } = PersonaStateBar_useStyles();
    return(// magic number of z-index: https://next.material-ui.com/customization/z-index/#main-content
    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Box/* default */.Z, {
        display: "flex",
        alignItems: "center",
        sx: {
            zIndex: 1201
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MaskAvatar, {
                onClick: toggleDrawer
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Stack/* default */.Z, {
                sx: {
                    px: 2
                },
                justifyContent: "space-around",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "body1",
                        lineHeight: 1.2,
                        children: nickname
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "caption",
                        lineHeight: 1.2,
                        children: (0,shared_src/* formatFingerprint */.R)(fingerprint !== null && fingerprint !== void 0 ? fingerprint : '', 6)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                onClick: toggleDrawer,
                size: "small",
                className: classes.iconButton,
                children: drawerOpen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowUpRound, {
                    className: classes.arrow,
                    sx: {
                        fontSize: 28
                    }
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowDownRound/* ArrowDownRound */.l, {
                    className: classes.arrow,
                    sx: {
                        fontSize: 16
                    }
                })
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Personas/index.tsx


















const Personas_useStyles = (0,src/* makeStyles */.ZL)()((theme)=>({
        tabPanel: {
            padding: 0,
            flex: 1
        },
        label: {
            width: 'auto'
        },
        tab: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
        },
        personaCard: {
            padding: theme.spacing(4),
            marginBottom: theme.spacing(3),
            backgroundColor: src/* MaskColorVar.primaryBackground */.ZN.primaryBackground,
            [theme.breakpoints.down('md')]: {
                padding: theme.spacing(2)
            }
        }
    })
);
function firstProfileNetwork(x) {
    var ref, ref1;
    return (ref = x === null || x === void 0 ? void 0 : x.linkedProfiles[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.identifier) === null || ref1 === void 0 ? void 0 : ref1.network;
}
function Personas() {
    const { classes  } = Personas_useStyles();
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { showSnackbar  } = (0,src/* useCustomSnackbar */.Ii)();
    const { drawerOpen , toggleDrawer , personas , currentPersona , connectPersona , definedSocialNetworks  } = usePersonaContext/* PersonaContext.useContainer */.m.useContainer();
    (0,react.useEffect)(()=>{
        if ((personas === null || personas === void 0 ? void 0 : personas.length) !== 0) return;
        showSnackbar(t.personas_setup_tip(), {
            variant: 'warning'
        });
        navigate(shared_base_src/* DashboardRoutes.Setup */.vq.Setup);
    }, [
        personas
    ]);
    var ref2;
    const [activeTab, setActiveTab] = (0,react.useState)((ref2 = firstProfileNetwork(currentPersona)) !== null && ref2 !== void 0 ? ref2 : definedSocialNetworks[0].networkIdentifier);
    (0,react.useEffect)(()=>{
        var ref;
        setActiveTab((ref = firstProfileNetwork(currentPersona)) !== null && ref !== void 0 ? ref : definedSocialNetworks[0].networkIdentifier);
    }, [
        currentPersona,
        definedSocialNetworks
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UserContext/* UserProvider */.d, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(PageFrame/* PageFrame */.C, {
            title: t.personas(),
            noBackgroundFill: true,
            primaryAction: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaStateBar, {
                nickname: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.nickname,
                fingerprint: currentPersona === null || currentPersona === void 0 ? void 0 : currentPersona.identifier.compressedPoint,
                drawerOpen: drawerOpen,
                toggleDrawer: toggleDrawer
            }),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Paper/* default */.Z, {
                    variant: "rounded",
                    className: classes.personaCard,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaRowCard, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentContainer/* ContentContainer */.O, {
                    style: {
                        display: 'flex',
                        flexDirection: 'column'
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
                        value: activeTab,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Tabs/* default */.Z, {
                                value: activeTab ? activeTab : false,
                                onChange: (event, tab)=>setActiveTab(tab)
                                ,
                                children: definedSocialNetworks.map(({ networkIdentifier  })=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                                        value: networkIdentifier,
                                        // They should be localized
                                        label: (0,capitalize/* default */.Z)(networkIdentifier.replace('.com', ''))
                                    }, networkIdentifier)
                                )
                            }),
                            definedSocialNetworks.map(({ networkIdentifier  })=>{
                                if (!currentPersona) return null;
                                const profile = currentPersona.linkedProfiles.find((x)=>x.identifier.network === networkIdentifier
                                );
                                if (profile) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                    value: networkIdentifier,
                                    className: activeTab === networkIdentifier ? classes.tab : undefined,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaContent, {
                                        network: networkIdentifier
                                    })
                                }, networkIdentifier));
                                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                                    value: networkIdentifier,
                                    className: activeTab === networkIdentifier ? classes.tab : undefined,
                                    sx: {
                                        flex: 1,
                                        height: 'calc(100% - 48px)'
                                    },
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Stack/* default */.Z, {
                                        alignItems: "center",
                                        height: "100%",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaSetup, {
                                            networkIdentifier: networkIdentifier,
                                            onConnect: ()=>connectPersona(currentPersona.identifier, networkIdentifier)
                                        })
                                    })
                                }, networkIdentifier));
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PersonaDrawer, {
                    personas: personas
                })
            ]
        })
    }));
}
/* harmony default export */ const pages_Personas = (Personas);


/***/ }),

/***/ 40419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SettingPasswordDialog)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39541);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67020);
/* harmony import */ var _hooks_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61199);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61382);
/* harmony import */ var _regexp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32130);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42421);
/* harmony import */ var _components_PasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33602);









function SettingPasswordDialog({ open , onClose , onSet  }) {
    const t = (0,_locales__WEBPACK_IMPORTED_MODULE_4__/* .useDashboardI18N */ .x)();
    const { showSnackbar  } = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_5__/* .useCustomSnackbar */ .Ii)();
    const { user , updateUser  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_hooks_UserContext__WEBPACK_IMPORTED_MODULE_3__/* .UserContext */ .S);
    const [incorrectPassword, setIncorrectPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [passwordValid, setValidState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [passwordMatched, setMatchState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const [repeatPassword, setRepeatPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
    const passwordRule = t.settings_password_rule();
    const handleClose = ()=>{
        setPassword('');
        onClose();
    };
    const handleConfirm = ()=>{
        if (user.backupPassword) {
            if (user.backupPassword !== password) {
                setIncorrectPassword(true);
                return;
            }
        }
        if (!newPassword) return setValidState(false);
        const matched = newPassword === repeatPassword;
        setMatchState(matched);
        if (passwordValid && matched) {
            const msg = user.backupPassword ? t.settings_alert_password_updated() : t.settings_alert_password_set();
            showSnackbar(msg, {
                variant: 'success'
            });
            updateUser({
                backupPassword: newPassword
            });
            onSet === null || onSet === void 0 ? void 0 : onSet();
            onClose();
        }
    };
    const validCheck = ()=>{
        const isValid = _regexp__WEBPACK_IMPORTED_MODULE_7__/* .passwordRegexp.test */ .qH.test(newPassword);
        setValidState(isValid);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!newPassword || !repeatPassword) {
            setMatchState(true);
        }
        if (!newPassword) {
            setValidState(true);
        }
    }, [
        newPassword,
        repeatPassword
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ConfirmDialog__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        title: user.backupPassword ? t.settings_dialogs_change_backup_password() : t.settings_dialogs_setting_backup_password(),
        maxWidth: "xs",
        open: open,
        onClose: handleClose,
        onConfirm: handleConfirm,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
            sx: {
                minHeight: '160px'
            },
            py: 1,
            children: [
                user.backupPassword ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: password,
                    onChange: (event)=>setPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: incorrectPassword,
                    helperText: incorrectPassword ? t.settings_dialogs_incorrect_password() : ''
                }) : null,
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: newPassword,
                    onChange: (event)=>setNewPassword(event.target.value)
                    ,
                    onBlur: validCheck,
                    placeholder: user.backupPassword ? t.settings_label_new_backup_password() : t.settings_label_backup_password(),
                    sx: {
                        marginBottom: '16px'
                    },
                    error: !passwordValid,
                    helperText: passwordValid ? '' : passwordRule
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_PasswordField__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                    fullWidth: true,
                    value: repeatPassword,
                    onChange: (event)=>setRepeatPassword(event.target.value)
                    ,
                    placeholder: t.settings_label_re_enter(),
                    error: !passwordMatched,
                    helperText: !passwordMatched ? t.settings_dialogs_inconsistency_password() : ''
                }),
                passwordValid && passwordMatched ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    sx: {
                        fontSize: '12px',
                        padding: '8px 0'
                    },
                    children: passwordRule
                }) : null
            ]
        })
    }));
};


/***/ }),

/***/ 61199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ UserContext),
  "d": () => (/* binding */ UserProvider)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../dashboard/src/pages/Settings/components/dialogs/SettingPasswordDialog.tsx
var SettingPasswordDialog = __webpack_require__(40419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(78535);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(67020);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(47673);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.2_859545d82eec4e4ab7d574641ee2c82e/node_modules/@mui/material/Button/Button.js
var Button = __webpack_require__(73774);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(42421);
// EXTERNAL MODULE: ../dashboard/src/locales/index.ts
var locales = __webpack_require__(61382);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-router@6.0.0-beta.0_history@5.2.0+react@18.0.0-rc.0/node_modules/react-router/index.js
var react_router = __webpack_require__(63552);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var shared_base_src = __webpack_require__(43576);
// EXTERNAL MODULE: ../dashboard/src/components/PasswordField/index.tsx
var PasswordField = __webpack_require__(33602);
;// CONCATENATED MODULE: ../dashboard/src/components/BackupPasswordConfirmDialog/index.tsx









const BackupPasswordConfirmDialog = /*#__PURE__*/ (0,react.memo)(({ onConfirmed , onClose , open , option  })=>{
    const t = (0,locales/* useDashboardI18N */.x)();
    const navigate = (0,react_router/* useNavigate */.s0)();
    const { user  } = (0,react.useContext)(UserContext);
    const [password, setPassword] = (0,react.useState)('');
    const [error, setError] = (0,react.useState)('');
    const onSubmitPassword = ()=>{
        if (user.backupPassword === password) {
            onConfirmed();
        } else {
            setError(t.settings_dialogs_incorrect_password());
        }
    };
    const title = (0,react.useMemo)(()=>{
        var ref;
        return (ref = user.backupPassword ? option === null || option === void 0 ? void 0 : option.confirmTitle : option === null || option === void 0 ? void 0 : option.tipTitle) !== null && ref !== void 0 ? ref : t.confirm_password();
    }, [
        option === null || option === void 0 ? void 0 : option.tipTitle,
        option === null || option === void 0 ? void 0 : option.confirmTitle
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(src/* MaskDialog */.Df, {
        open: open,
        title: title,
        onClose: onClose,
        maxWidth: "xs",
        children: [
            !user.backupPassword && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                        sx: {
                            py: 0,
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            variant: "body2",
                            fontSize: 13,
                            children: option === null || option === void 0 ? void 0 : option.tipContent
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "secondary",
                                onClick: onClose,
                                children: t.personas_cancel()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                onClick: ()=>navigate(shared_base_src/* DashboardRoutes.Settings */.vq.Settings, {
                                        state: {
                                            open: 'password'
                                        }
                                    })
                                ,
                                children: t.settings()
                            })
                        ]
                    })
                ]
            }),
            user.backupPassword && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogContent/* default */.Z, {
                        sx: {
                            py: 0,
                            display: 'flex',
                            alignItems: 'center'
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PasswordField/* default */.Z, {
                            sx: {
                                flex: 1
                            },
                            onChange: (e)=>{
                                setPassword(e.currentTarget.value);
                                setError('');
                            },
                            placeholder: t.settings_label_backup_password(),
                            error: !!error,
                            helperText: error
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogActions/* default */.Z, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                color: "secondary",
                                onClick: onClose,
                                children: t.personas_cancel()
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                disabled: !!error,
                                onClick: onSubmitPassword,
                                children: t.personas_confirm()
                            })
                        ]
                    })
                ]
            })
        ]
    }));
});

;// CONCATENATED MODULE: ../dashboard/src/pages/Settings/hooks/UserContext.tsx




const UserContext = /*#__PURE__*/ (0,react.createContext)({
    user: {
        backupPassword: '',
        email: '',
        phone: '',
        backupMethod: '',
        backupAt: ''
    },
    updateUser: ()=>{
        throw new Error('Context not provided.');
    },
    ensurePasswordSet: ()=>{
        throw new Error('Context not provided.');
    },
    confirmPassword: ()=>{
        throw new Error('Context not provided.');
    }
});
function UserProvider({ children  }) {
    const backupPassword = localStorage.getItem('backupPassword');
    const [user, setUser] = (0,react.useState)({
        backupPassword: backupPassword && atob(backupPassword),
        email: localStorage.getItem('email'),
        phone: localStorage.getItem('phone'),
        backupMethod: localStorage.getItem('backupMethod'),
        backupAt: localStorage.getItem('backupAt')
    });
    const [callback, setCallback] = (0,react.useState)(null);
    const [confirmCallback, setConfirmCallback] = (0,react.useState)(null);
    const [confirmOption, setConfirmOption] = (0,react.useState)();
    const updateUser = (obj)=>{
        const updated = {
            ...user,
            ...obj
        };
        setUser(updated);
        var _backupPassword;
        localStorage.setItem('backupPassword', btoa((_backupPassword = updated.backupPassword) !== null && _backupPassword !== void 0 ? _backupPassword : ''));
        localStorage.setItem('email', updated.email || '');
        localStorage.setItem('phone', updated.phone || '');
        localStorage.setItem('backupMethod', updated.backupMethod || '');
        localStorage.setItem('backupAt', updated.backupAt || '');
    };
    const ensurePasswordSet = (f)=>{
        if (user.backupPassword) f();
        else setCallback([
            f
        ]);
    };
    const confirmPassword = (f, option)=>{
        const { force =true  } = option !== null && option !== void 0 ? option : {};
        if (!force && !user.backupPassword) {
            f();
        } else {
            setConfirmCallback([
                f
            ]);
            setConfirmOption(option);
        }
    };
    const onSet = ()=>{
        var ref;
        callback === null || callback === void 0 ? void 0 : (ref = callback[0]) === null || ref === void 0 ? void 0 : ref.call(callback);
    };
    const onConfirmed = ()=>{
        var ref;
        confirmCallback === null || confirmCallback === void 0 ? void 0 : (ref = confirmCallback[0]) === null || ref === void 0 ? void 0 : ref.call(confirmCallback);
        setConfirmCallback(null);
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(UserContext.Provider, {
        value: {
            user,
            updateUser,
            ensurePasswordSet,
            confirmPassword
        },
        children: [
            children,
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SettingPasswordDialog/* default */.Z, {
                open: !!callback,
                onSet: onSet,
                onClose: ()=>setCallback(null)
            }),
            !!confirmCallback && /*#__PURE__*/ (0,jsx_runtime.jsx)(BackupPasswordConfirmDialog, {
                option: confirmOption,
                open: !!confirmCallback,
                onConfirmed: onConfirmed,
                onClose: ()=>setConfirmCallback(null)
            })
        ]
    }));
}


/***/ }),

/***/ 32130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qH": () => (/* binding */ passwordRegexp),
/* harmony export */   "LX": () => (/* binding */ emailRegexp),
/* harmony export */   "wZ": () => (/* binding */ phoneRegexp)
/* harmony export */ });
const passwordRegexp = /^(?=.{8,20}$)(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\dA-Za-z]).*/;
const emailRegexp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneRegexp = /^(\+?([ .-])?\d{1,2}([ .-])?)?(\(?\d{3}\)?|\d{3})([ .-])?(\d{3}([ .-])?\d{4})/;


/***/ }),

/***/ 2805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ MaskBlueIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const MaskBlueIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Mask', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#1C68F3",
            d: "M60 120A60 60 0 1060 0a60 60 0 000 120z"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fill: "#fff",
            fillRule: "evenodd",
            d: "M96 46v20H33.42a27.21 27.21 0 0050.95 6H96v16.8a7.2 7.2 0 01-7.2 7.2H31.2a7.2 7.2 0 01-7.2-7.2V46h72zM77.47 72a21.18 21.18 0 01-35.03 0h35.03zM44.6 50.8a11.2 11.2 0 00-11.09 9.6h6.14a5.2 5.2 0 019.9 0h6.14a11.2 11.2 0 00-11.09-9.6zm30.8 0a11.2 11.2 0 00-11.09 9.6h6.14a5.2 5.2 0 019.9 0h6.14a11.2 11.2 0 00-11.09-9.6zM88.8 24a7.2 7.2 0 017.2 7.2V40H24v-8.8a7.2 7.2 0 017.2-7.2h57.6z",
            clipRule: "evenodd"
        })
    ]
}), '0 0 120 120');


/***/ }),

/***/ 11290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ArrowDownRound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const ArrowDownRound = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('ArrowDown', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m4 5.6 4 4 4-4",
        stroke: "inherit",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), '0 0 16 16');


/***/ }),

/***/ 51452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ EyeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const EyeIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#111432",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    fill: "none",
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M2 10s2.91-5.818 8-5.818S18 10 18 10s-2.91 5.818-8 5.818S2 10 2 10Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M10 12.182a2.182 2.182 0 1 0 0-4.364 2.182 2.182 0 0 0 0 4.364Z",
            stroke: "#ffffff",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    ]
}), undefined, '0 0 20 20');


/***/ }),

/***/ 23178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ EyeOffIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const EyeOffIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createPaletteAwareIcon */ .t)('EyeOffIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#111432",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    fill: "none",
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M8.473 4.356A6.632 6.632 0 0 1 10 4.182c5.09 0 8 5.818 8 5.818a13.46 13.46 0 0 1-1.57 2.32m-4.888-.778a2.18 2.18 0 0 1-3.62-.67 2.181 2.181 0 0 1 .536-2.414m5.862 5.862A7.324 7.324 0 0 1 10 15.818C4.91 15.818 2 10 2 10a13.418 13.418 0 0 1 3.68-4.32l8.64 8.64ZM2 2l16 16",
        stroke: "#ffffff",
        strokeWidth: "1.25",
        strokeLinecap: "round",
        strokeLinejoin: "round"
    })
}), undefined, '0 0 20 20');


/***/ }),

/***/ 82314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const File = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('File', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.5",
            d: "M8.08752 12.9375C8.08752 9.62379 10.4 6.9375 13.2525 6.9375H28.7473C31.5998 6.9375 33.9123 9.62379 33.9123 12.9375V36.9375C33.9123 40.2512 31.5998 42.9375 28.7473 42.9375H13.2525C10.4 42.9375 8.08752 40.2512 8.08752 36.9375V12.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: "0.1",
            d: "M33.9122 20.3906V12.9375C33.9122 9.62379 31.5998 6.9375 28.7473 6.9375H22.3314L33.9122 20.3906Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M22.3314 6.9375L22.3314 14.3906C22.3314 17.7043 24.6439 20.3906 27.4964 20.3906L33.9122 20.3906L22.3314 6.9375Z",
            fill: "#AFC3E1"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M22.7565 22.8277C22.2814 22.2145 21.649 21.8834 21.0023 21.8834C20.3556 21.8834 19.7233 22.2145 19.2482 22.8277C18.7715 23.443 18.4959 24.2895 18.4959 25.1833V27.7068H23.5088V25.1833C23.5088 24.2895 23.2332 23.443 22.7565 22.8277ZM24.5113 27.7068V25.1833C24.5113 24.0179 24.1531 22.8894 23.5017 22.0486C22.8487 21.2057 21.951 20.7188 21.0023 20.7188C20.0536 20.7188 19.1559 21.2057 18.503 22.0486C17.8515 22.8894 17.4933 24.0179 17.4933 25.1833V27.7068H17.1007C16.2174 27.7068 15.4855 28.5263 15.4855 29.5597V34.0066C15.4855 35.0399 16.2174 35.8594 17.1007 35.8594H24.8985C25.7819 35.8594 26.5138 35.0399 26.5138 34.0066V29.5597C26.5138 28.5263 25.7819 27.7068 24.8985 27.7068H24.5113ZM25.5112 29.5597C25.5112 29.1896 25.2456 28.8715 24.8985 28.8715H17.1007C16.7536 28.8715 16.488 29.1896 16.488 29.5597V34.0066C16.488 34.3766 16.7536 34.6948 17.1007 34.6948H24.8985C25.2456 34.6948 25.5112 34.3766 25.5112 34.0066V29.5597Z",
            fill: "white"
        })
    ]
}), '0 0 42 48', [
    42,
    48
]);


/***/ }),

/***/ 50191:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ SettingsIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const SettingsIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('Settings', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M12 23l-9.5-5.5v-11L12 1l9.5 5.5v11L12 23zm0-19.688L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311v.001zM12 16a4 4 0 112.828-1.172A4.027 4.027 0 0112 16zm0-6a2 2 0 10-.001 4A2 2 0 0012 10z"
    })
}), '0 0 24 24');


/***/ }),

/***/ 41945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ WarningIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44438);


const WarningIcon = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .I)('WarningIcon', /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    children: [
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            opacity: ".2",
            d: "M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z",
            fill: "#FF5F5F"
        }),
        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
            d: "M22 26a2 2 0 104 0V16a2 2 0 10-4 0v10zM22 32a2 2 0 104 0 2 2 0 00-4 0z",
            fill: "#FF5F5F"
        })
    ]
}), '0 0 48 48');


/***/ })

}]);