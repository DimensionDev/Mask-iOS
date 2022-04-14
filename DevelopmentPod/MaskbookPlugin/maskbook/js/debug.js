/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ 60232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MD": () => (/* binding */ C),
/* harmony export */   "sc": () => (/* binding */ L)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enablePatches, finishDraft, freeze, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return true||0,U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return false&&0,en.get(r,n)},set:function(r){var t=this[Q]; false&&0,en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return false&&0,on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return false&&0,en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; false&&(0);var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (fn)));
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 22445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(86248),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 31420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G6": () => (/* reexport */ DecryptionTypes/* DecryptError */.G6),
  "OF": () => (/* reexport */ DecryptionTypes/* DecryptErrorReasons */.OF),
  "Pj": () => (/* reexport */ DecryptionTypes/* DecryptProgressKind */.Pj),
  "cV": () => (/* reexport */ AppendEncryption/* appendEncryptionTarget */.c),
  "pe": () => (/* reexport */ decrypt),
  "HI": () => (/* reexport */ Encryption/* encrypt */.HI)
});

// UNUSED EXPORTS: DecryptIntermediateProgressKind, EncryptError, EncryptErrorReasons, encodePostKey

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js + 1 modules
var esm = __webpack_require__(28807);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var base = __webpack_require__(81148);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var ts_results_esm = __webpack_require__(48160);
// EXTERNAL MODULE: ../encryption/src/payload/index.ts + 3 modules
var payload = __webpack_require__(79807);
// EXTERNAL MODULE: ../encryption/src/utils/index.ts + 1 modules
var utils = __webpack_require__(62435);
// EXTERNAL MODULE: ../encryption/src/encryption/DecryptionTypes.ts
var DecryptionTypes = __webpack_require__(24663);
// EXTERNAL MODULE: ../encryption/src/encryption/v38-ecdh.ts
var v38_ecdh = __webpack_require__(65096);
;// CONCATENATED MODULE: ../encryption/src/encryption/Decryption.ts









const ErrorReasons = DecryptionTypes/* DecryptError.Reasons */.G6.Reasons;
async function* decrypt(options, io) {
    const { author: _author , encrypted: _encrypted , encryption: _encryption , version  } = options.message;
    const { authorPublicKey: _authorPublicKey  } = options.message;
    if (_encryption.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _encryption.val);
    if (_encrypted.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _encrypted.val);
    const encryption = _encryption.val;
    const encrypted = _encrypted.val;
    // ! try decrypt by cache
    {
        const cacheKey = await io.getPostKeyCache().catch(()=>null
        );
        const iv = encryption.iv.unwrapOr(null);
        if (cacheKey && iv) return yield* decryptWithPostAESKey(version, cacheKey, iv, encrypted, options.onDecrypted);
    }
    if (encryption.type === 'public') {
        const { AESKey , iv  } = encryption;
        if (AESKey.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, AESKey.val);
        if (iv.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, iv.val);
        // Not calling setPostCache here. It's public post and saving key is wasting storage space.
        return yield* decryptWithPostAESKey(version, AESKey.val.key, iv.val, encrypted, options.onDecrypted);
    } else if (encryption.type === 'E2E') {
        const { iv: _iv , ownersAESKeyEncrypted  } = encryption;
        if (_iv.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadBroken, _iv.val);
        const iv = _iv.val;
        const author = _author.unwrapOr(ts_results_esm/* None */.Hq);
        // #region // ! decrypt by local key. This only happens in v38 or older.
        if (options.message.version <= -38) {
            const hasAuthorLocalKey = author.some ? io.hasLocalKeyOf(author.val).catch(()=>false
            ) : Promise.resolve(false);
            if (ownersAESKeyEncrypted.ok) {
                try {
                    const aes_raw = await io.decryptByLocalKey(author.unwrapOr(null), ownersAESKeyEncrypted.val, iv);
                    const aes = await importAESKeyFromJWKFromTextEncoder(aes_raw);
                    io.setPostKeyCache(aes.unwrap()).catch(()=>{});
                    return yield* decryptWithPostAESKey(version, aes.unwrap(), iv, encrypted, options.onDecrypted);
                } catch (err) {
                    if (await hasAuthorLocalKey) {
                        // If we fall into this branch, it means we failed to decrypt as author.
                        // Since we will not ECDHE to myself when encrypting,
                        // it does not make sense to try the following steps (because it will never have a result).
                        return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.CannotDecryptAsAuthor, err);
                    }
                // fall through
                }
            } else {
                if (await hasAuthorLocalKey) {
                    // If the ownersAESKeyEncrypted is corrupted and we're the author, we cannot do anything to continue.
                    return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.CannotDecryptAsAuthor, ownersAESKeyEncrypted.val);
                }
            // fall through
            }
        }
        // #endregion
        // #region // ! decrypt by ECDH
        const authorPublicKey = _authorPublicKey.unwrapOr(ts_results_esm/* None */.Hq);
        yield progress(DecryptionTypes/* DecryptProgressKind.Progress */.Pj.Progress, {
            event: DecryptionTypes/* DecryptIntermediateProgressKind.TryDecryptByE2E */.gO.TryDecryptByE2E
        });
        if (version === -37) {
            return yield* v37ECDHE(io, encryption, encrypted, options.signal, options.onDecrypted);
        } else {
            // Static ECDH
            // to do static ECDH, we need to have the authors public key first. bail if not found.
            const authorECPub = await ts_results_esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
                if (authorPublicKey.some) return authorPublicKey.val.key;
                return io.queryAuthorPublicKey(author.unwrapOr(null), options.signal);
            });
            if (authorECPub.err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.AuthorPublicKeyNotFound, authorECPub.val);
            if (!authorECPub.val) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.AuthorPublicKeyNotFound, undefined);
            return yield* v38To40StaticECDH(version, io, authorECPub.val, iv, encrypted, options.signal, options.onDecrypted);
        }
    // #endregion
    }
    (0,esm/* unreachable */.t1)(encryption);
}
async function* v37ECDHE(io, encryption, encrypted, signal, report) {
    // checked before
    const iv = encryption.iv.unwrap();
    // for each inlinedECDHE pub, derive a set of AES key.
    const inlinedECDHE_derived = Promise.all(Object.values(encryption.ephemeralPublicKey).map((x)=>x.unwrapOr(null)
    ).filter(Boolean).map((x)=>io.deriveAESKey(x.key)
    )).then((x)=>x.flat()
    );
    async function* postKey() {
        if (encryption.ownersAESKeyEncrypted.ok) {
            const key = {
                encryptedPostKey: encryption.ownersAESKeyEncrypted.val,
                postKeyIV: iv
            };
            yield key;
        }
        yield* io.queryPostKey_version37(iv, signal);
    }
    const ecdh = {
        type: 'ephemeral',
        derive: (key)=>key ? io.deriveAESKey(key) : inlinedECDHE_derived
    };
    return yield* decryptByECDH(-37, io, postKey(), ecdh, importAESKeyFromRaw, iv, encrypted, report);
}
async function* v38To40StaticECDH(version, io, authorECPub, iv1, encrypted, signal, report) {
    const postKey = ({
        '-40': async function*(iv) {
            const val = await io.queryPostKey_version40(iv);
            if (val) yield val;
        },
        '-39': io.queryPostKey_version39,
        '-38': io.queryPostKey_version38
    })[version](iv1, signal);
    const ecdh = {
        type: 'static-v38-or-older',
        derive: (postKeyIV)=>(0,v38_ecdh/* deriveAESByECDH_version38OrOlderExtraSteps */.D)(io.deriveAESKey, authorECPub, postKeyIV)
    };
    return yield* decryptByECDH(version, io, postKey, ecdh, importAESKeyFromJWKFromTextEncoder, iv1, encrypted, report);
}
async function* decryptByECDH(version, io, possiblePostKeyIterator, ecdhProvider, postKeyDecoder, iv, encrypted, report) {
    const { derive , type  } = ecdhProvider;
    for await (const _ of possiblePostKeyIterator){
        const { encryptedPostKey , postKeyIV , ephemeralPublicKey  } = _;
        // TODO: how to deal with signature?
        // TODO: what to do if provider throws?
        const derivedKeys = type === 'static-v38-or-older' ? await derive(postKeyIV || iv) : await derive(ephemeralPublicKey).then((aesArr)=>aesArr.map((aes)=>[
                    aes,
                    iv
                ]
            )
        );
        for (const [derivedKey, derivedKeyNewIV] of derivedKeys){
            const possiblePostKey = await (0,src/* andThenAsync */.ps)((0,utils/* decryptWithAES */.PB)(payload/* AESAlgorithmEnum.A256GCM */.$y.A256GCM, derivedKey, derivedKeyNewIV, encryptedPostKey), postKeyDecoder);
            if (possiblePostKey.err) continue;
            const decrypted = await (0,utils/* decryptWithAES */.PB)(payload/* AESAlgorithmEnum.A256GCM */.$y.A256GCM, possiblePostKey.val, iv, encrypted);
            if (decrypted.err) continue;
            io.setPostKeyCache(possiblePostKey.val).catch(()=>{});
            // If we'd able to decrypt the raw message, we will stop here.
            // because try further key cannot resolve the problem of parseTypedMessage failed.
            return yield* parseTypedMessage(version, decrypted.val, report);
        }
    }
    return void (yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.NotShareTarget, undefined));
}
async function* decryptWithPostAESKey(version, postAESKey, iv, encrypted, report) {
    const { err , val  } = await (0,utils/* decryptWithAES */.PB)(payload/* AESAlgorithmEnum.A256GCM */.$y.A256GCM, postAESKey, iv, encrypted);
    if (err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.DecryptFailed, val);
    return yield* parseTypedMessage(version, val, report);
}
async function* parseTypedMessage(version, raw, report) {
    const { err , val  } = version === -37 ? (0,base/* decodeTypedMessageFromDocument */.Ab)(raw) : (0,base/* decodeTypedMessageV38ToV40Format */.WR)(raw, version);
    if (err) return yield new DecryptionTypes/* DecryptError */.G6(ErrorReasons.PayloadDecryptedButTypedMessageBroken, val);
    try {
        report?.(val);
    } catch  {}
    return yield progress(DecryptionTypes/* DecryptProgressKind.Success */.Pj.Success, {
        content: val
    });
}
// uint8 |> TextDecoder |> JSON.parse |> importAESKeyFromJWK
function importAESKeyFromJWKFromTextEncoder(aes_raw) {
    return ts_results_esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
        const aes_text = new TextDecoder().decode(aes_raw);
        const aes_jwk = JSON.parse(aes_text);
        if (!aes_jwk.key_ops.includes('decrypt')) aes_jwk.key_ops.push('decrypt');
        return (await utils/* importAESFromJWK.AES_GCM_256 */.Bs.AES_GCM_256(aes_jwk)).unwrap();
    });
}
function importAESKeyFromRaw(aes_raw) {
    return ts_results_esm/* Result.wrapAsync */.x4.wrapAsync(async ()=>{
        return crypto.subtle.importKey('raw', aes_raw, {
            name: 'AES-GCM',
            length: 256
        }, false, [
            'decrypt', 
        ]);
    });
}
function progress(kind, rest) {
    return {
        type: kind,
        ...rest
    };
}

// EXTERNAL MODULE: ../encryption/src/encryption/Encryption.ts
var Encryption = __webpack_require__(20789);
// EXTERNAL MODULE: ../encryption/src/encryption/AppendEncryption.ts
var AppendEncryption = __webpack_require__(12122);
;// CONCATENATED MODULE: ../encryption/src/encryption/index.ts





/***/ }),

/***/ 95203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mk": () => (/* binding */ steganographyEncodeImage),
/* harmony export */   "oX": () => (/* binding */ steganographyDecodeImage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_grayscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34523);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84140);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50710);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96596);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15773);






const dimensionPreset = [
    {
        deprecated: 'legacy post',
        width: 1024,
        height: 1240,
        mask: new URL(/* asset import */ __webpack_require__(93855), __webpack_require__.b).toString()
    },
    {
        width: 1200,
        height: 681,
        template: 'v2',
        mask: new URL(/* asset import */ __webpack_require__(23689), __webpack_require__.b).toString()
    },
    {
        width: 1200,
        height: 680,
        template: 'eth',
        mask: new URL(/* asset import */ __webpack_require__(80183), __webpack_require__.b).toString(),
        options: {
            cropEdgePixels: true
        }
    },
    {
        deprecated: 'event election 2020',
        width: 1000,
        height: 558,
        mask: new URL(/* asset import */ __webpack_require__(80183), __webpack_require__.b).toString()
    },
    {
        deprecated: 'old NFT',
        width: 1000,
        height: 560,
        mask: new URL(/* asset import */ __webpack_require__(84037), __webpack_require__.b).toString()
    }, 
];
const defaultOptions = {
    size: 8,
    narrow: 0,
    copies: 3,
    tolerance: 128,
    exhaustPixels: true,
    cropEdgePixels: false,
    fakeMaskPixels: false,
    grayscaleAlgorithm: _dimensiondev_stego_js_cjs_grayscale_js__WEBPACK_IMPORTED_MODULE_0__.GrayscaleAlgorithm.NONE,
    transformAlgorithm: _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__.TransformAlgorithm.FFT1D
};
const isSameDimension = (dimension, otherDimension)=>dimension.width === otherDimension.width && dimension.height === otherDimension.height
;
async function steganographyEncodeImage(buf, options) {
    const { template , downloadImage  } = options;
    const preset = dimensionPreset.find((d)=>d.template && d.template === template
    );
    if (!preset) throw new Error('Failed to find preset.');
    return new Uint8Array(await (0,_dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__.encode)(buf, await downloadImage(preset.mask), {
        ...defaultOptions,
        ...preset?.options,
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(options, 'template')
    }));
}
async function inner(buf, options) {
    const dimension = (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getDimension */ .F)(buf);
    const preset = dimensionPreset.find((d)=>isSameDimension(d, dimension)
    );
    if (!preset) return '';
    return (0,_dimensiondev_stego_js_cjs_dom_js__WEBPACK_IMPORTED_MODULE_2__.decode)(buf, await options.downloadImage(preset.mask), {
        ...defaultOptions,
        transformAlgorithm: _dimensiondev_stego_js_cjs_transform_js__WEBPACK_IMPORTED_MODULE_1__.TransformAlgorithm.FFT1D,
        ...options
    });
}
async function steganographyDecodeImage(image, options) {
    return inner(typeof image === 'string' ? await options.downloadImage(image) : await image.arrayBuffer(), options);
}


/***/ }),

/***/ 52222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.FW),
/* harmony export */   "G6": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.G6),
/* harmony export */   "Gq": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.Gq),
/* harmony export */   "HI": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.HI),
/* harmony export */   "Mk": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.Mk),
/* harmony export */   "OF": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.OF),
/* harmony export */   "Pj": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.Pj),
/* harmony export */   "VC": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.VC),
/* harmony export */   "WZ": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.WZ),
/* harmony export */   "cV": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.cV),
/* harmony export */   "oX": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.oX),
/* harmony export */   "pe": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.pe),
/* harmony export */   "qx": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.qx)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79807);
/* harmony import */ var _encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31420);
/* harmony import */ var _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19586);
/* harmony import */ var _image_steganography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95203);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62435);






// TODO: remove them in the future



/***/ }),

/***/ 19586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "FW": () => (/* binding */ socialNetworkDecoder)
});

// UNUSED EXPORTS: TwitterDecoder, __TwitterEncoder, socialNetworkEncoder

// EXTERNAL MODULE: ../encryption/src/payload/types.ts
var types = __webpack_require__(12628);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
;// CONCATENATED MODULE: ../encryption/src/social-network-encode-decode/twitter.ts


/**
 * @link https://github.com/DimensionDev/Maskbook/issues/198
 */ function twitter_TwitterEncoder(text) {
    return `https://mask.io/?PostData_v1=${batchReplace(text, [
        [
            '\u{1F3BC}',
            '%20'
        ],
        [
            ':||',
            '%40'
        ],
        [
            '+',
            '-'
        ],
        [
            '=',
            '_'
        ],
        [
            /\|/g,
            '.'
        ], 
    ])}`;
}
function TwitterDecoder(raw) {
    if (!raw) return esm/* None */.Hq;
    if (!raw.includes('%20') || !raw.includes('%40')) return esm/* None */.Hq;
    const payloadLink = (0,src/* parseURL */.Lk)(raw).map((x)=>x.replace(/\u2026$/, '')
    ).filter((x)=>x.endsWith('%40')
    )[0];
    try {
        const { search , pathname  } = new URL(payloadLink);
        const payload = search ? search.slice(1) : pathname.slice(1);
        if (!payload) return esm/* None */.Hq;
        return (0,esm/* Some */.bD)(`\u{1F3BC}${batchReplace(payload// https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1476
        // eslint-disable-next-line unicorn/better-regex
        .replace(/^PostData_v\d=/i, '').replace(/^%20/, '').replace(/%40$/, ''), [
            [
                '-',
                '+'
            ],
            [
                '_',
                '='
            ],
            [
                /\./g,
                '|'
            ], 
        ])}:||`);
    } catch  {
        return esm/* None */.Hq;
    }
}
function batchReplace(source, group) {
    let storage = source;
    for (const v of group){
        storage = storage.replace(v[0], v[1]);
    }
    return storage;
}

;// CONCATENATED MODULE: ../encryption/src/social-network-encode-decode/index.ts


function socialNetworkDecoder(network, content) {
    if (network === types/* SocialNetworkEnum.Twitter */.Gq.Twitter) return TwitterDecoder(content).map((x)=>[
            x
        ]
    ).unwrapOr([]);
    const all = content.match(/(\u{1F3BC}[\w+/=|]+:\|\|)/giu);
    if (all) return all;
    return [];
}
function socialNetworkEncoder(network, content) {
    if (network === SocialNetworkEnum.Twitter) return __TwitterEncoder(content);
    return content;
}



/***/ }),

/***/ 39230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   "i1": () => (/* reexport safe */ _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   "j3": () => (/* reexport safe */ _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__.j)
/* harmony export */ });
/* unused harmony exports pasteText, pasteImage, pasteInstagram, inputText, hookInputUploadOnce */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55574);
/* harmony import */ var _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22469);
/* harmony import */ var _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88520);
/* harmony import */ var _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63050);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7474);








function pasteText(text) {
    sendEvent('paste', text);
}
function pasteImage(image) {
    sendEvent('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    sendEvent('instagramUpload', url);
}
function inputText(text) {
    sendEvent('input', text);
}
function hookInputUploadOnce(format, fileName, image, triggerOnActiveElementNow = false) {
    sendEvent('hookInputUploadOnce', format, fileName, Array.from(image), triggerOnActiveElementNow);
}
document.addEventListener(_shared__WEBPACK_IMPORTED_MODULE_0__/* .CustomEventId */ .OV, (e)=>{
    const r = (0,_shared__WEBPACK_IMPORTED_MODULE_0__/* .decodeEvent */ .Vu)(e.detail);
    if (r[1].length < 1) return;
    switch(r[0]){
        case 'resolvePromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .resolvePromise */ .LD)(...r[1]);
        case 'rejectPromise':
            return (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .rejectPromise */ .Eu)(...r[1]);
        case 'ethBridgeOnEvent':
            return (0,_bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__/* .onEthEvent */ .t)(...r[1]);
        case 'coin98BridgeOnEvent':
            return (0,_bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__/* .onCoin98Event */ .$)(...r[1]);
        case 'solanaBridgeOnEvent':
            return (0,_bridgedSolana__WEBPACK_IMPORTED_MODULE_3__/* .onSolanaEvent */ .C)(...r[1]);
        case 'ethBridgeSendRequest':
        case 'ethBridgePrimitiveAccess':
        case 'ethBridgeRequestListen':
        case 'coin98BridgeSendRequest':
        case 'coin98BridgePrimitiveAccess':
        case 'coin98BridgeRequestListen':
        case 'solanaBridgeSendRequest':
        case 'solanaBridgePrimitiveAccess':
        case 'solanaBridgeRequestListen':
        case 'solanaBridgeExecute':
        case 'input':
        case 'paste':
        case 'pasteImage':
        case 'instagramUpload':
        case 'untilEthBridgeOnline':
        case 'untilCoin98BridgeOnline':
        case 'untilSolanaBridgeOnline':
        case 'hookInputUploadOnce':
            break;
        default:
            const neverEvent = r[0];
            console.log('[@masknet/injected-script]', neverEvent, 'not handled');
    }
});


/***/ }),

/***/ 56045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ saveFileFromBuffer)
});

// UNUSED EXPORTS: saveFileFromUrl

;// CONCATENATED MODULE: ./shared/helpers/download.ts
// TODO: maybe fallback to normal HTML save file?
async function saveFileFromUrl(url, fileName) {
    await browser.downloads.download({
        url,
        filename: fileName,
        saveAs: true
    });
}
async function saveFileFromBuffer(file, mimeType, fileName) {
    const blob = new Blob([
        file
    ], {
        type: mimeType
    });
    const url = URL.createObjectURL(blob);
    await saveFileFromUrl(url, fileName);
}

;// CONCATENATED MODULE: ./shared/helpers/index.ts



/***/ }),

/***/ 62481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S_": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.S_),
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "dH": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94299);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14209);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53340);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56045);






/***/ }),

/***/ 53340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* binding */ PersistentStorages),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* unused harmony export setupMaskKVStorageBackend */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94299);


const indexedDBProxy = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
const inMemoryBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(indexedDBProxy, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_persistent__ */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(inMemoryBackend, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_in_memory__ */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {}),
    FacebookNFTEventOnMobile: createInMemoryKVStorage('FacebookNFTEventOnMobile', {
        userId: '',
        avatarId: '',
        address: '',
        tokenId: ''
    })
};
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {}),
    Settings: createPersistentKVStorage('settings', {
        debugging: false
    })
};


/***/ }),

/***/ 84136:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.0.0_react@18.0.0/node_modules/react-dom/client.js
var client = __webpack_require__(83230);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/extension/debug-page/issue.ts
const body = `\
# Bug Report

## Environment

User Agent: ${navigator.userAgent}
Version: ${"v1.29.12-2332-g80695da1a"}
Tag Name: ${"v2.5.0"}
Build Date: ${"2022-04-14T07:11:10.724Z"}
Commit Hash: ${"80695da1a"}
Commit Date: ${"2022-04-14T07:04:47.000Z"}
Remote URL: ${"https://github.com/DimensionDev/Maskbook"}
Branch Name: ${"HEAD"}

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

// EXTERNAL MODULE: ./src/utils/index.ts + 7 modules
var utils = __webpack_require__(6955);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
;// CONCATENATED MODULE: ./src/extension/debug-page/DebugInfo.tsx





const DEBUG_INFO = {
    'User Agent': navigator.userAgent,
    'Mask Version': "v1.29.12-2332-g80695da1a",
    'Build Date': process.env.channel_DATE,
    'Tag Name': "v2.5.0",
    'Commit Hash': "80695da1a",
    'Commit Date': "2022-04-14T07:04:47.000Z",
    'Remote URL': "https://github.com/DimensionDev/Maskbook",
    'Branch Name': "HEAD",
    Dirty: false,
    'Tag Dirty': true
};
const DebugInfo = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const onNewBugIssue = ()=>(0,src/* openWindow */.xw)(makeNewBugIssueURL())
    ;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                children: (0,map/* default */.Z)(DEBUG_INFO, (value, key)=>`${key}: ${value}`
                ).join('\n')
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                onClick: onNewBugIssue,
                children: t('debug_new_bug_issue')
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.1/node_modules/idb/with-async-ittr.js + 1 modules
var with_async_ittr = __webpack_require__(63338);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var shared_base_src = __webpack_require__(78144);
;// CONCATENATED MODULE: ./src/extension/debug-page/DatabaseOps.tsx




(0,shared_base_src/* __DEBUG__ONLY__enableCryptoKeySerialization */.ZI)();
const DatabaseOps = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const onBackup = async ()=>{
        const payload = await backupAll();
        if (payload === undefined) {
            return;
        }
        const timestamp = ((value1)=>{
            const values = [
                value1.getUTCFullYear(),
                value1.getUTCMonth() + 1,
                value1.getUTCDate(),
                value1.getUTCHours(),
                value1.getUTCMinutes(),
                value1.getUTCSeconds(), 
            ];
            return values.map((value)=>value.toString().padStart(2, '0')
            ).join('');
        })(new Date());
        download(`masknetwork-dump-${timestamp}.json`, payload);
    };
    const onRestore = async ()=>{
        const file = await DatabaseOps_select();
        if (file === undefined) {
            return;
        }
        // cspell:disable-next-line
        const parsed = await shared_base_src/* serializer.deserialization */.GM.deserialization(await file.text());
        await restoreAll(parsed);
    };
    const onClear = async ()=>{
        const databases = await indexedDB.databases?.();
        if (databases === undefined) {
            return;
        }
        await Promise.all(databases.map(async ({ name  })=>{
            if (!name) return;
            await timeout((0,with_async_ittr/* wrap */.re)(indexedDB.deleteDatabase(name)), 500);
        }));
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onBackup,
                    children: t('database_backup')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onRestore,
                    children: t('database_overwrite')
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                    onClick: onClear,
                    children: t('database_clear')
                })
            })
        ]
    });
};
function DatabaseOps_select() {
    return new Promise((resolve)=>{
        const element = document.createElement('input');
        element.type = 'file';
        element.addEventListener('change', ()=>{
            resolve(element.files?.[0]);
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
    for (const { name: name1 , version , stores  } of parsed.instances){
        const db1 = await (0,with_async_ittr/* openDB */.X3)(name1, version, {
            upgrade (db) {
                for (const name of db.objectStoreNames){
                    db.deleteObjectStore(name);
                }
                for (const [storeName, { autoIncrement , keyPath , indexes  }] of Object.entries(stores)){
                    const store = db.createObjectStore(storeName, {
                        autoIncrement,
                        keyPath
                    });
                    for (const { name , keyPath: keyPath3 , multiEntry , unique  } of indexes){
                        store.createIndex(name, keyPath3, {
                            multiEntry,
                            unique
                        });
                    }
                }
            }
        });
        for (const [storeName1, { records , keyPath: keyPath1  }] of stores.entries()){
            await db1.clear(storeName1);
            for (const [key, value] of records){
                try {
                    if (keyPath1) {
                        await db1.add(storeName1, value);
                    } else {
                        await db1.add(storeName1, value, key);
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
    const databases = await indexedDB.databases?.();
    if (databases === undefined) {
        return;
    }
    const instances = [];
    for (const { name , version  } of databases){
        if (!name || !version) continue;
        const db = await timeout((0,with_async_ittr/* openDB */.X3)(name, version), 500);
        if (db === undefined) {
            continue;
        }
        const stores = new Map();
        for (const name2 of db.objectStoreNames){
            const store = db.transaction(name2).store;
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
            stores.set(name2, {
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
            version: "v1.29.12-2332-g80695da1a",
            'build-date': "2022-04-14T07:11:10.724Z",
            'tag-name': "v2.5.0",
            'commit-hash': "80695da1a",
            'commit-date': "2022-04-14T07:04:47.000Z",
            'remote-url': "https://github.com/DimensionDev/Maskbook",
            'branch-name': "HEAD",
            dirty: false,
            'tag-dirty': true
        },
        instances
    };
    return JSON.stringify(shared_base_src/* serializer.serialization */.GM.serialization(payload), undefined, 2);
}

;// CONCATENATED MODULE: ./src/extension/debug-page/Entry.tsx



const Entry = ()=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DebugInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabaseOps, {})
        ]
    })
;

;// CONCATENATED MODULE: ./src/extension/debug-page/index.tsx



const container = document.createElement('main');
document.body.appendChild(container);
(0,client/* createRoot */.s)(container).render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {}));


/***/ }),

/***/ 5027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Services, ServicesWithProgress */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19245);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);
// Notice, this module itself is not HMR ready.
// If you change this file to add a new service, you need to reload.
// This file should not rely on any other in-project files unless it is HMR ready.



const SERVICE_HMR_EVENT = 'service-hmr';
const message = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.WebExtensionMessage({
    domain: 'services'
});
const log = {
    beCalled: true,
    localError: true,
    remoteError: true,
    sendLocalStack: true,
    type: 'pretty',
    requestReplay: "production" === 'development'
};
const Services = {
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(6739), __webpack_require__.e(2943), __webpack_require__.e(7691), __webpack_require__.e(7075)]).then(__webpack_require__.bind(__webpack_require__, 67075))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(1064), __webpack_require__.e(7025)]).then(__webpack_require__.bind(__webpack_require__, 17865))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(1064), __webpack_require__.e(7025)]).then(__webpack_require__.bind(__webpack_require__, 2275))
    , 'Welcome'),
    Helper: add(()=>__webpack_require__.e(/* import() */ 6631).then(__webpack_require__.bind(__webpack_require__, 86631))
    , 'Helper'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(3615)]).then(__webpack_require__.bind(__webpack_require__, 59471))
    , 'Ethereum'),
    SocialNetwork: add(()=>__webpack_require__.e(/* import() */ 3996).then(__webpack_require__.bind(__webpack_require__, 3996))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(1064), __webpack_require__.e(7025)]).then(__webpack_require__.bind(__webpack_require__, 16862))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 7256).then(__webpack_require__.bind(__webpack_require__, 7256))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(7691), __webpack_require__.e(5114)]).then(__webpack_require__.bind(__webpack_require__, 45114))
, 'ServicesWithProgress', true);
if (false) {}
/**
 * Helper to add a new service to Services.* / ServicesWithProgress.* namespace.
 * @param impl Implementation of the service. Should be things like () => import("./background-script/CryptoService")
 * @param key Name of the service. Used for better debugging.
 * @param generator Is the service is a generator?
 */ function add(impl, key, generator = false) {
    const channel = message.events[key].bind(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.MessageTarget.Broadcast);
    const isBackground = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.Environment.ManifestBackground);
    const RPC = generator ? async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc : async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE;
    const load = ()=>(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .getLocalImplementation */ .Bb)(isBackground, `Services.${key}`, impl, channel)
    ;
    const localImplementation = load();
    // No HMR support in MV3
     true && isBackground && /* unsupported import.meta.webpackHot */ undefined && 0;
    const service = RPC(localImplementation, {
        key,
        serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM,
        log,
        channel,
        preferLocalImplementation: isBackground,
        strict: isBackground,
        thenable: false
    });
    if (isBackground) {
        localImplementation.then((val)=>{
            Reflect.set(globalThis, key + 'Service', val);
            if (isBackground) Reflect.set(Services, key, val);
        });
    } else {
        Reflect.set(globalThis, key + 'Service', service);
        if (isBackground) Reflect.set(Services, key, service);
    }
    return service;
}


/***/ }),

/***/ 95095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ NFT_AVATAR_DB_NAME),
/* harmony export */   "EA": () => (/* binding */ NFT_AVATAR_DB_NAME_STORAGE),
/* harmony export */   "Uu": () => (/* binding */ PLUGIN_ID),
/* harmony export */   "kW": () => (/* binding */ NFT_AVATAR_JSON_SERVER)
/* harmony export */ });
/* unused harmony exports NFT_CONTRACT_JSON_VERIFIED_SERVER, PLUGIN_NAME, PLUGIN_DESCRIPTION, RSS3_KEY_SNS */
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);

const NFT_AVATAR_JSON_SERVER = 'https://configuration.r2d2.to/com.maskbook.avatar.json';
const NFT_AVATAR_DB_NAME = 'com.maskbook.user';
const NFT_AVATAR_DB_NAME_STORAGE = 'com.maskbook.user.storage';
const NFT_CONTRACT_JSON_VERIFIED_SERVER = 'https://configuration.r2d2.to/com.maskbook.verified_nft.json';
const PLUGIN_ID = _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.Avatar */ .je.Avatar;
const PLUGIN_NAME = 'Avatar';
const PLUGIN_DESCRIPTION = 'NFT Avatar';
var RSS3_KEY_SNS;
(function(RSS3_KEY_SNS) {
    RSS3_KEY_SNS["TWITTER"] = '_nfts';
    RSS3_KEY_SNS["FACEBOOK"] = '_facebook_nfts';
    RSS3_KEY_SNS["INSTAGRAM"] = '_instagram_nfts';
})(RSS3_KEY_SNS || (RSS3_KEY_SNS = {}));


/***/ }),

/***/ 80917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   "gG": () => (/* binding */ dismissVerifyNextID),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings)
/* harmony export */ });
/* unused harmony exports userGuideStatus, sayHelloShowed, userPinExtension, bioDescription, personalHomepage */
/* harmony import */ var _createSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24646);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84717);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30232);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(97096);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78144);
/* harmony import */ var _plugins_EVM_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29729);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23587);







const appearanceSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('appearance', _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance["default"] */ .um["default"]);
const languageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__);
languageSettings.addListener(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .updateLanguage */ .BF);
const pluginIDSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('pluginID', _plugins_EVM_constants__WEBPACK_IMPORTED_MODULE_5__/* .PLUGIN_ID */ .Uu);
const currentSetupGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentSetupGuideStatus', '');
const userGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('userGuideStatus', '');
const sayHelloShowed = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('sayHelloShowed', false);
const userPinExtension = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('userPinExtension', false);
const dismissVerifyNextID = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createComplexNetworkSettings */ .v7)('dismissVerifyNextID', {}, lodash_unified__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
const bioDescription = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('bioDescription', '');
const personalHomepage = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('personalHomepage', '');
// This is a misuse of concept "NetworkSettings" as "namespaced settings"
// The refactor is tracked in https://github.com/DimensionDev/Maskbook/issues/1884
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSNSAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsDashboard().find((x) => x.ID === PLUGIN_ID)` instead
 */ // This was "currentPluginEnabled" before, but we used it to represent minimal mode now to make the settings be able to migrate.
const currentPluginMinimalModeNOTEnabled = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('pluginsEnabled', true);
const launchPageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('launchPage', _types__WEBPACK_IMPORTED_MODULE_1__/* .LaunchPage.dashboard */ .z.dashboard);
const currentPersonaIdentifier = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '');
try {
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.enUS */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.zhCN */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.jaJP */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.koKR */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__;
} catch  {}


/***/ }),

/***/ 1650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ isFacebook),
/* harmony export */   "qv": () => (/* binding */ facebookBase)
/* harmony export */ });
/* unused harmony export facebookWorkerBase */
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52222);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);


const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const facebookBase = {
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_0__/* .SocialNetworkEnum.Facebook */ .Gq.Facebook,
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('facebook.com');
    }
};
function isFacebook(ui) {
    return ui.networkIdentifier === _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .EnhanceableSite.Facebook */ .Jk.Facebook;
}
const facebookWorkerBase = {
    ...facebookBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 93505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ instagramBase)
/* harmony export */ });
/* unused harmony export instagramWorkerBase */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://www.instagram.com/*',
    'https://m.instagram.com/*',
    'https://instagram.com/*'
];
const instagramBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Instagram */ .Gq.Instagram,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9);
    }
};
const instagramWorkerBase = {
    ...instagramBase,
    gunNetworkHint: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .INSTAGRAM_ID */ .l9
};


/***/ }),

/***/ 37732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3": () => (/* binding */ isTwitter),
/* harmony export */   "oQ": () => (/* binding */ twitterBase)
/* harmony export */ });
/* unused harmony export twitterWorkerBase */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://mobile.twitter.com/*',
    'https://twitter.com/*'
];
const twitterBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .TWITTER_ID */ .QE,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Twitter */ .Gq.Twitter,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('twitter.com');
    }
};
function isTwitter(ui) {
    return ui.networkIdentifier === _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .TWITTER_ID */ .QE;
}
const twitterWorkerBase = {
    ...twitterBase,
    gunNetworkHint: 'twitter-'
};


/***/ }),

/***/ 97216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports isMobileTwitter, twitterDomain */
const isMobileTwitter = !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* unused pure expression or super */ null && (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/'));


/***/ }),

/***/ 74372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports getEditorContent, isMobile, isCompose, hasFocus, hasEditor */
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43399);

const getEditorContent = ()=>{
    const editorNode = postEditorDraftContentSelector().evaluate();
    if (!editorNode) return '';
    if (editorNode.tagName.toLowerCase() === 'div') return editorNode.innerText;
    return editorNode.value;
};
const isMobile = ()=>globalThis.location.host.includes('mobile')
;
const isCompose = ()=>globalThis.location.pathname.includes('compose')
;
const hasFocus = (x)=>x.evaluate() === document.activeElement
;
const hasEditor = ()=>!!postEditorDraftContentSelector().evaluate()
;


/***/ }),

/***/ 43399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ searchAllProfileTabSelector)
/* harmony export */ });
/* unused harmony exports querySelector, searchProfileSelector, searchProfileTabListLastChildSelector, searchProfileTabPageSelector, searchProfileTabLoseConnectionPageSelector, searchProfileEmptySelector, searchProfileActiveTabSelector, searchProfileTabSelector, searchAppBarBackSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, searchProfileTabListSelector, searchForegroundColorSelector, searchNewTweetButtonSelector, searchNickNameSelector, searchAvatarSelector, searchNFTAvatarSelector, searchAvatarMetaSelector, profileFollowButtonSelector, profileMenuButtonSelector, searchEditProfileSelector, bioCardSelector, rootSelector, composeAnchorSelector, composeAnchorTextSelector, headingTextSelector, postEditorContentInPopupSelector, postEditorInPopupSelector, toolBoxInSideBarSelector, sideBarProfileSelector, postEditorInTimelineSelector, isReplyPageSelector, postEditorDraftContentSelector, searchResultHeadingSelector, postEditorToolbarSelector, twitterMainAvatarSelector, newPostButtonSelector, profileBioSelector, personalHomepageSelector, bioPageUserNickNameSelector, bioPageUserIDSelector, floatingBioCardSelector, postsImageSelector, timelinePostContentSelector, postsContentSelector, postAvatarsContentSelector, searchSelfHandleSelector, searchSelfNicknameSelector, searchSelfAvatarSelector, searchProfileAvatarSelector, searchProfileAvatarParentSelector, searchAvatarSelectorInput, searchAvatarSelectorImage, searchTwitterAvatarOpenFilesSelector, searchProfileSaveSelector, searchProfessionalButtonSelector, searchProfileSetAvatarSelector, searchTwitterAvatarLinkSelector, searchTwitterAvatarSelector, searchUseCellSelector, searchTweetAvatarSelector, searchRetweetAvatarSelector, searchTwitterAvatarNFTSelector, searchTwitterAvatarNFTLinkSelector, searchReplyToolbarSelector, searchRejectReplyTextSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97216);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74372);



const querySelector = (selector, singleMode = true)=>{
    const ls = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new LiveSelector().querySelectorAll(selector);
};
// #region "Enhanced Profile"
const searchProfileSelector = ()=>querySelector('[aria-label][role="navigation"]')
;
const searchProfileTabListLastChildSelector = ()=>querySelector('[data-testid="primaryColumn"] div + [role="navigation"][aria-label] [data-testid="ScrollSnap-nextButtonWrapper"]')
;
const searchProfileTabPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[aria-label]:not([role="progressbar"])')
;
const searchProfileTabLoseConnectionPageSelector = ()=>querySelector('[data-testid="primaryColumn"] [role="navigation"] + * > div[dir="auto"]:not([role="progressbar"])')
;
const searchProfileEmptySelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="emptyState"]')
;
const searchProfileActiveTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"]')
;
const searchProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="false"]')
;
const searchAllProfileTabSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"]')
;
const searchAppBarBackSelector = ()=>querySelector('[data-testid="app-bar-back"] > div')
;
const searchProfileActiveTabStatusLineSelector = ()=>querySelector('[aria-label][role="navigation"]  [role="tablist"] [role="tab"][aria-selected="true"] > div > div')
;
const searchProfileActiveTabLabelSelector = ()=>querySelector('[aria-label][role="navigation"] [role="tablist"] [role="tab"][aria-selected="true"] > div')
;
const searchProfileTabListSelector = ()=>querySelectorAll('[aria-label][role="navigation"]  [role="tablist"][data-testid="ScrollSnap-List"] a')
;
const searchForegroundColorSelector = ()=>querySelector('[data-testid="primaryColumn"] > div > div > div > div > div > div > div > div > div > div')
;
const searchNewTweetButtonSelector = ()=>{
    const q = querySelector('[data-testid="FloatingActionButtons_Tweet_Button"]');
    if (q.evaluate()) return q;
    return querySelector('[data-testid="SideNav_NewTweet_Button"]');
};
const searchNickNameSelector = ()=>querySelector('[data-testid="primaryColumn"] [data-testid="UserName"] div[dir="auto"] > span > span')
;
const searchAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/photo"] img[src*="profile_images"]')
;
const searchNFTAvatarSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href$="/nft"] img[src*="profile_images"]')
;
const searchAvatarMetaSelector = ()=>querySelector('head > meta[property="og:image"]:last-child')
;
const profileFollowButtonSelector = ()=>querySelector('[data-testid="primaryColumn"] [aria-haspopup="menu"][data-testid="userActions"] ~ [data-testid="placementTracking"]')
;
// To get margin bottom of menu button, and apply it to tip button to align it.
const profileMenuButtonSelector = ()=>querySelector('[data-testid="primaryColumn"] [aria-haspopup="menu"][data-testid="userActions"]')
;
const searchEditProfileSelector = ()=>querySelector('[data-testid="primaryColumn"] a[href="/settings/profile"]')
;
const bioCardSelector = (singleMode = true)=>querySelector([
        '.profile',
        'a[href*="header_photo"] ~ div',
        'div[data-testid="primaryColumn"] > div > div:last-child > div > div > div > div ~ div'
    ].join(), singleMode)
;
// #endregion
const rootSelector = ()=>querySelector('#react-root')
;
// `aside *` selectors are for mobile mode
const composeAnchorSelector = ()=>querySelector([
        'header[role=banner] a[href="/compose/tweet"]',
        'aside a[href="/compose/tweet"]',
        // can't see the compose button on share popup, use the tweetButton instead
        '[role=main] [role=button][data-testid=tweetButton]', 
    ].join())
;
const composeAnchorTextSelector = ()=>querySelector('header[role=banner] a[href="/compose/tweet"] div[dir],aside a[href="/compose/tweet"] div[dir]')
;
const headingTextSelector = ()=>querySelector('[role="banner"] [role="heading"]')
;
const postEditorContentInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"] > div:first-child > div:first-child > div:first-child > div:nth-child(3)')
;
const postEditorInPopupSelector = ()=>querySelector('[aria-labelledby="modal-header"]  div[data-testid="toolBar"] div[data-testid="geoButton"]')
;
const toolBoxInSideBarSelector = ()=>querySelector('[role="banner"] [role="navigation"] > div')
;
const sideBarProfileSelector = ()=>querySelector('[role="banner"] [role="navigation"] [aria-label="Lists"] > div')
;
const postEditorInTimelineSelector = ()=>querySelector('[role="main"] :not(aside) > [role="progressbar"] ~ div [role="button"][aria-label]:nth-child(6)')
;
const isReplyPageSelector = ()=>!!location.pathname.match(/^\/\w+\/status\/\d+$/)
;
const postEditorDraftContentSelector = ()=>{
    if (location.pathname === '/compose/tweet') {
        return querySelector('[contenteditable][aria-label][spellcheck],textarea[aria-label][spellcheck]');
    }
    if (isReplyPageSelector()) {
        return querySelector('div[data-testid="tweetTextarea_0"]');
    }
    return (isCompose() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
};
const searchResultHeadingSelector = ()=>querySelector('[role="main"] [data-testid="primaryColumn"] [role="region"] > [role="heading"]')
;
const postEditorToolbarSelector = ()=>querySelector('[data-testid="toolBar"] > div > *:last-child')
;
const twitterMainAvatarSelector = ()=>querySelector('[data-testid="toolBar"]').closest(4).querySelector('div > a > div > :nth-child(2) > div')
;
const newPostButtonSelector = ()=>querySelector('[data-testid="SideNav_NewTweet_Button"]')
;
const profileBioSelector = ()=>querySelector('[data-testid="UserDescription"]')
;
const personalHomepageSelector = ()=>querySelector('[data-testid="UserUrl"]')
;
const bioPageUserNickNameSelector = ()=>querySelector('[data-testid="UserDescription"]').map((x)=>x.parentElement?.parentElement?.previousElementSibling
    ).querySelector('div[dir]')
;
const bioPageUserIDSelector = (selector)=>selector().map((x)=>x.parentElement?.nextElementSibling?.innerText?.replace('@', '')
    )
;
const floatingBioCardSelector = ()=>querySelector('[style~="left:"] a[role=link] > div:first-child > div:first-child > div:first-child[dir="auto"]')
;
const postsImageSelector = (node)=>new LiveSelector([
        node
    ]).querySelectorAll([
        '[data-testid="tweet"] > div > div img[src*="media"]',
        '[data-testid="tweet"] ~ div img[src*="media"]'
    ].join())
;
const timelinePostContentSelector = ()=>querySelectorAll([
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]'
    ].join())
;
const postsContentSelector = ()=>querySelectorAll([
        // tweets on timeline page
        '[data-testid="tweet"] div + div div[lang]',
        '[data-testid="tweet"] div + div div[data-testid="card.wrapper"]',
        // tweets on detailed page
        '[data-testid="tweet"] + div > div:first-child div[lang]',
        '[data-testid="tweet"] + div > div div[data-testid="card.wrapper"]',
        // quoted tweets
        '[data-testid="tweet"] + div div[role="link"] div[lang]',
        '[data-testid="tweet"] > div:last-child div[role="link"] div[lang]',
        // reply-tweets
        '[data-testid="tweet"] + div div div[lang][dir]', 
    ].join()).concat(querySelectorAll('[data-testid="tweet"] > div:last-child').map((x)=>{
        const textElement = x.querySelector('[role="group"]')?.parentElement?.querySelector('div[lang]');
        if (textElement) return textElement;
        // There's no textElement as there's only a twitter summary card parsed by a single url.
        const summaryCardElement = x.querySelector('[role="group"]')?.parentElement?.querySelector('[data-testid="card.wrapper"]')?.previousElementSibling;
        return summaryCardElement;
    }))
;
const postAvatarsContentSelector = ()=>querySelectorAll('[data-testid="tweet"] > div > div > div > :nth-child(2)')
;
// #region self info
const searchSelfHandleSelector = ()=>{
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] [dir="ltr"] span',
        '#layers [role="group"] [role="dialog"] [role="link"] [dir="ltr"] span'
    ].join());
};
const searchSelfNicknameSelector = ()=>{
    return querySelector([
        '[data-testid="SideNav_AccountSwitcher_Button"] [dir="auto"] span span',
        '#layers [role="group"] [role="dialog"] [role="link"] span span'
    ].join());
};
const searchSelfAvatarSelector = ()=>{
    return querySelector([
        '#layers ~ div [role="banner"] [role="button"] img',
        '[data-testid="DashButton_ProfileIcon_Link"] [role="presentation"] img',
        '#layers [role="group"] [role="dialog"] [role="link"] img'
    ].join());
};
// #endregion
// #region twitter nft avatar
const searchProfileAvatarSelector = ()=>{
    return querySelectorAll('[data-testid="fileInput"]').at(1).closest(4);
};
const searchProfileAvatarParentSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).evaluate()[0].firstChild?.firstChild?.lastChild?.firstChild
;
const searchAvatarSelectorInput = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > :first-child')
;
const searchAvatarSelectorImage = ()=>querySelectorAll('[data-testid="fileInput"]').at(1).closest(2).querySelector('div > div > :nth-child(2) > div > img')
;
const searchTwitterAvatarOpenFilesSelector = ()=>querySelectorAll('[data-testid="fileInput"]').at(1)
;
const searchProfileSaveSelector = ()=>querySelector('[data-testid="Profile_Save_Button"]')
;
const searchProfessionalButtonSelector = ()=>querySelector('[data-testid*="ProfessionalButton"]')
;
const searchProfileSetAvatarSelector = ()=>isMobileTwitter ? searchProfessionalButtonSelector().closest(4).querySelector('div > div:nth-child(2) >div > div:nth-child(2)') : querySelector('[data-testid^="ProfileBirthdate"]').closest(5).querySelector('div > div:nth-child(2) > div:nth-child(2)')
;
// #endregion
// #region avatar selector
const searchTwitterAvatarLinkSelector = ()=>querySelector('[data-testid="UserProfileHeader_Items"]').closest(2).querySelector('div  a')
;
const searchTwitterAvatarSelector = ()=>querySelector('a[href$="/photo"]').querySelector('img').closest(1)
;
// #endregion
// #region twitter avatar
const searchUseCellSelector = ()=>querySelector('[data-testid="UserCell"]')
;
// #endregion
const searchTweetAvatarSelector = ()=>querySelector('[data-testid="tweetButtonInline"]').closest(7)
;
const searchRetweetAvatarSelector = ()=>querySelector('[data-testid="tweetButton"]').closest(6)
;
const searchTwitterAvatarNFTSelector = ()=>querySelector('a[href$="/nft"]').closest(1).querySelector('a div:nth-child(3) > div')
;
const searchTwitterAvatarNFTLinkSelector = ()=>querySelector('a[href$="/nft"]')
;
const searchReplyToolbarSelector = ()=>querySelector('div[data-testid="primaryColumn"] div[data-testid="toolBar"]').querySelector('div[data-testid="geoButton"]')
;
const searchRejectReplyTextSelector = ()=>querySelector('div[data-testid="tweetTextarea_0"] > div > div > div > span')
;


/***/ }),

/***/ 33060:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork)
/* harmony export */ });
/* unused harmony export getCurrentIdentifier */
/* harmony import */ var _twitter_com_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37732);
/* harmony import */ var _facebook_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1650);
/* harmony import */ var _instagram_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93505);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79936);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3747);





function getCurrentSNSNetwork(current) {
    const table = {
        [_twitter_com_base__WEBPACK_IMPORTED_MODULE_0__/* .twitterBase.networkIdentifier */ .oQ.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Twitter */ .mv.Twitter,
        [_facebook_com_base__WEBPACK_IMPORTED_MODULE_1__/* .facebookBase.networkIdentifier */ .qv.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Facebook */ .mv.Facebook,
        [_instagram_com_base__WEBPACK_IMPORTED_MODULE_2__/* .instagramBase.networkIdentifier */ .j.networkIdentifier]: _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Instagram */ .mv.Instagram
    };
    if (current in table) return table[current];
    return _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__/* .CurrentSNSNetwork.Unknown */ .mv.Unknown;
}
const getCurrentIdentifier = ()=>{
    const current = activatedSocialNetworkUI.collecting.identityProvider?.recognized.value;
    return globalUIState.profiles.value.find((i)=>i.identifier.equals(current?.identifier)
    ) || globalUIState.profiles.value[0];
};


/***/ }),

/***/ 57601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LB": () => (/* binding */ definedSocialNetworkUIs),
/* harmony export */   "zq": () => (/* binding */ definedSocialNetworkWorkers)
/* harmony export */ });
/* unused harmony exports activateSocialNetworkUI, defineSocialNetworkUI, defineSocialNetworkWorker */
const definedSocialNetworkUIsLocal = new Map();
const definedSocialNetworkUIs = definedSocialNetworkUIsLocal;
function activateSocialNetworkUI() {
    const ui_deferred = [
        ...definedSocialNetworkUIs.values()
    ].find((x)=>x.shouldActivate(location)
    );
    if (!ui_deferred) return Promise.resolve(false);
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 10888)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
    ).then(()=>true
    );
}
function defineSocialNetworkUI(UI) {
    if (UI.notReadyForProduction) {
        if (true) return UI;
    }
    definedSocialNetworkUIsLocal.set(UI.networkIdentifier, UI);
    return UI;
}
const definedSocialNetworkWorkers = new Set();
function defineSocialNetworkWorker(worker) {
    if (worker.notReadyForProduction) {
        if (true) return;
    }
    definedSocialNetworkWorkers.add(worker);
}


/***/ }),

/***/ 3747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C8": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.C),
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LB": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.LB),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "gE": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUI)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30821);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10888);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57601);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9805);







/***/ }),

/***/ 10888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86574);
/* harmony import */ var _utils_debug_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68903);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5027);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62481);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30821);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80917);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78144);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98541);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33060);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81064);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57601);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6955);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28807);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52222);
















const definedSocialNetworkUIsResolved = new Map();
let activatedSocialNetworkUI = {
    automation: {},
    collecting: {},
    customization: {},
    configuration: {},
    permission: {
        has: async ()=>false
        ,
        request: async ()=>false
    },
    init: ()=>{
        throw new Error();
    },
    injection: {},
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_14__/* .SocialNetworkEnum.Unknown */ .Gq.Unknown,
    networkIdentifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .EnhanceableSite.Localhost */ .Jk.Localhost,
    shouldActivate: ()=>false
    ,
    utils: {
        createPostContext: null
    },
    notReadyForProduction: true,
    declarativePermissions: {
        origins: []
    }
};
let globalUIState = {};
async function activateSocialNetworkUIInner(ui_deferred) {
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_15__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    _masknet_shared__WEBPACK_IMPORTED_MODULE_13__/* .sharedUINetworkIdentifier.value */ .Xr.value = ui_deferred.networkIdentifier;
    if (ui.customization.sharedComponentOverwrite) {
        _masknet_shared__WEBPACK_IMPORTED_MODULE_13__/* .sharedUIComponentOverwrite.value */ .vU.value = ui.customization.sharedComponentOverwrite;
    }
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort1 = new AbortController();
    const { signal: signal1  } = abort1;
    if (false) {}
    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_12__/* .waitDocumentReadyState */ .uL)('interactive');
    i18nOverwrite();
    const state = await ui.init(signal1);
    globalUIState = {
        ...state,
        ...(0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .managedStateCreator */ .MJ)()
    };
    ui.customization.paletteMode?.start(signal1);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    ui.collecting.postsProvider?.start(signal1);
    startPostListener();
    ui.collecting.currentVisitingIdentityProvider?.start(signal1);
    ui.injection.pageInspector?.(signal1);
    if (_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) ui.injection.toolbox?.(signal1);
    ui.injection.setupPrompt?.(signal1);
    ui.injection.newPostComposition?.start?.(signal1);
    ui.injection.searchResult?.(signal1);
    ui.injection.userBadge?.(signal1);
    ui.injection.profileTab?.(signal1);
    ui.injection.profileTabContent?.(signal1);
    ui.injection.userAvatar?.(signal1);
    ui.injection.profileAvatar?.(signal1);
    ui.injection.profileTip?.(signal1);
    ui.injection.enhancedProfileNFTAvatar?.(signal1);
    ui.injection.openNFTAvatar?.(signal1);
    ui.injection.postAndReplyNFTAvatar?.(signal1);
    ui.injection.avatarClipNFT?.(signal1);
    (0,_masknet_plugin_infra_content_script__WEBPACK_IMPORTED_MODULE_7__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_8__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_9__/* .createPluginHost */ .R)(signal1, (pluginID, signal)=>{
        return {
            createKVStorage (type, defaultValues) {
                if (type === 'memory') return _shared__WEBPACK_IMPORTED_MODULE_3__/* .InMemoryStorages.Plugin.createSubScope */ .uU.Plugin.createSubScope(pluginID, defaultValues, signal);
                else return _shared__WEBPACK_IMPORTED_MODULE_3__/* .PersistentStorages.Plugin.createSubScope */ ._H.Plugin.createSubScope(pluginID, defaultValues, signal);
            },
            personaSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.signWithPersona */ .ZP.Identity.signWithPersona,
            walletSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign,
            currentPersona: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .createSubscriptionFromAsync */ .Fd)(_extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier, undefined, _utils__WEBPACK_IMPORTED_MODULE_11__/* .MaskMessages.events.currentPersonaIdentifier.on */ .ql.events.currentPersonaIdentifier.on)
        };
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_11__/* .setupShadowRootPortal */ .Vc)();
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for(const namespace in i18n){
            const ns = i18n[namespace];
            for(const i18nKey in ns){
                const pair = i18n[namespace][i18nKey];
                for(const language in pair){
                    const value = pair[language];
                    _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .i18NextInstance.addResource */ .BV.addResource(language, namespace, i18nKey, value);
                }
            }
        }
    }
    function $unknownIdentityResolution() {
        const provider = ui.collecting.identityProvider;
        if (!provider) return;
        provider.start(signal1);
        provider.recognized.addListener((newValue, oldValue)=>{
            if (document.visibilityState === 'hidden') return;
            if (newValue.identifier.equals(oldValue.identifier)) return;
            if (newValue.identifier.isUnknown) return;
            _utils__WEBPACK_IMPORTED_MODULE_11__/* .MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage */ .ql.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage(newValue.identifier.toText());
        });
        if (provider.hasDeprecatedPlaceholderName) {
            provider.recognized.addListener((id)=>{
                if (signal1.aborted) return;
                if (id.identifier.isUnknown) return;
                _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.resolveIdentity */ .ZP.Identity.resolveIdentity(id.identifier);
            });
        }
    }
    function startPostListener() {
        const posts = ui.collecting.postsProvider?.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            await unmount(key);
            const abort = new AbortController();
            signal1.addEventListener('abort', ()=>abort.abort()
            );
            abortSignals.set(key, abort);
            const { signal: postSignal  } = abort;
            ui.injection.enhancedPostRenderer?.(postSignal, value);
            ui.injection.postInspector?.(postSignal, value);
            ui.injection.postActions?.(postSignal, value);
            ui.injection.commentComposition?.compositionBox(postSignal, value);
            ui.injection.commentComposition?.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_12__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id1 = _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona , status  } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                started = true;
                ui.injection.setupWizard?.(signal1, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .Identifier.fromString */ .xb.fromString(persona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__/* .ECKeyIdentifier */ .ob).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id1);
    }
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_10__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui1 = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui1);
    if (false) {}
    return ui1;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


/***/ }),

/***/ 30821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MJ": () => (/* binding */ managedStateCreator)
/* harmony export */ });
/* unused harmony exports stateCreator, creator */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);


// By this pattern, I hope we can enforce all providers to use this pattern to init.
// const friendsRef = stateCreator.friendsRef()
// return { friendsRef }
// Therefore they may aware they have the ability to fill in the ref.
// If I design it like this:
// const state = stateCreator()
// return state
// People might not aware they need to fill the new state.
const stateCreator = {
    friends: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef(new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map(), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO))
    ,
    profiles: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef([])
};
function managedStateCreator() {
    return {};
}
const creator = {
    EmptyIdentityResolveProviderState: ()=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.ValueRef({
            identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.unknown */ .WO.unknown
        })
    ,
    EmptyPostProviderState: ()=>new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ObservableWeakMap */ .$f()
};


/***/ }),

/***/ 52993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports mapContactAvatarColor, Avatar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);



function mapContactAvatarColor(string, theme) {
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
function Avatar({ person , ...props }) {
    const { avatar , nickname , identifier  } = person;
    const name = nickname || identifier.userId || '';
    const [first, last] = name.split(' ');
    const theme = useTheme().palette.mode;
    return /*#__PURE__*/ _jsxs(MuiAvatar, {
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
    });
}


/***/ }),

/***/ 51082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useLocationChange */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);

function useLocationChange(handler) {
    useEffect(()=>{
        window.addEventListener('locationchange', handler);
        return ()=>window.removeEventListener('locationchange', handler)
        ;
    }, [
        handler
    ]);
}


/***/ }),

/***/ 6955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "a_": () => (/* reexport */ BackupFormat/* UpgradeBackupJSONFile */.a),
  "SR": () => (/* reexport */ asyncIteratorHelpers/* asyncIteratorToArray */.S),
  "lR": () => (/* reexport */ BackupFile/* convertBackupFileToObject */.l),
  "uM": () => (/* reexport */ permissions/* extraPermissions */.u),
  "jK": () => (/* reexport */ BackupFile/* fixBackupFilePermission */.j),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "MN": () => (/* reexport */ useSettingSwitcher/* useSettingsSwitcher */.M),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: Avatar, JWKToKey, MaskDarkTheme, MaskLightTheme, PersonaArrayComparer, collectNodeText, collectTwitterEmoji, createNormalReactRoot, createReactRootShadowed, deconstructPayload, downloadUrl, fromRGB, getBackupPreviewInfo, getForegroundColor, isDark, isDarkTheme, keyToAddr, keyToJWK, mapContactAvatarColor, nthChild, pasteImageToActiveElements, regexMatch, selectElementContents, shade, startWatch, toRGB, untilElementAvailable, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, useLocationChange, useQueryNavigatorPermission, useSuspense, useThemeLanguage

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(52993);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(14005);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(48668);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(77733);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(93313);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(62481);
;// CONCATENATED MODULE: ./src/utils/hooks/useQueryNavigatorPermission.ts
/** This file is published under MIT License */ 


const q = (/* unused pure expression or super */ null && ([
    'query',
    'request',
    'revoke'
]));
function checkPermissionApiUsability(type) {
    const r = {};
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
        return ()=>permissionStatus?.removeEventListener('change', handleChange)
        ;
    }, [
        name,
        needRequest,
        permission
    ]);
    return permission;
}

// EXTERNAL MODULE: ./src/utils/hooks/useSettingSwitcher.tsx
var useSettingSwitcher = __webpack_require__(25089);
// EXTERNAL MODULE: ./src/utils/hooks/useLocationChange.ts
var useLocationChange = __webpack_require__(51082);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts








// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(55423);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts


// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(64026);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(39615);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(92972);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/index.ts
var BackupFormat = __webpack_require__(68558);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts
var locales_legacy = __webpack_require__(47481);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
// EXTERNAL MODULE: ./src/social-network/ui.ts
var ui = __webpack_require__(10888);
;// CONCATENATED MODULE: ./src/social-network/utils/text-payload-ui.ts

function text_payload_ui_decodeTextPayloadUI(x) {
    const f = activatedSocialNetworkUI.utils.textPayloadPostProcessor?.decoder;
    if (f) return f(x).concat(x);
    return [
        x
    ];
}

// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
;// CONCATENATED MODULE: ./src/utils/type-transform/Payload.ts





/**
 * Detect if there is version -40, -39 or -38 payload
 */ function deconstructAlpha40_Or_Alpha39_Or_Alpha38(str, throws = false) {
    // ? payload is 🎼2/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼3/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    // ? payload is 🎼4/4|AESKeyEncrypted|iv|encryptedText|signature|authorPublicKey?|publicShared?|authorIdentifier:||
    // ? if publicShared is true, that means AESKeyEncrypted is shared with public
    // ? "1" treated as true, "0" or not defined treated as false
    // ? authorIdentifier is encoded as `${network}/${id}`
    const isVersion40 = str.includes('\u{1F3BC}2/4');
    const isVersion39 = str.includes('\u{1F3BC}3/4');
    const isVersion38 = str.includes('\u{1F3BC}4/4');
    str = str.replace('\u{1F3BC}2/4', '\u{1F3BC}3/4');
    str = str.replace('\u{1F3BC}3/4', '\u{1F3BC}4/4');
    const [_, payloadStart] = str.split('\u{1F3BC}4/4|');
    if (!payloadStart) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_not_found'));
    else return null;
    const [payload, rest] = payloadStart.split(':||');
    if (rest === undefined) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_incomplete'));
    else return null;
    const [AESKeyEncrypted, iv, encryptedText, signature, ...optional] = payload.split('|');
    const [authorPublicKey, publicShared, authorID, ...extra] = optional;
    if (!(AESKeyEncrypted && iv && encryptedText)) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_bad'));
    else return null;
    if (extra.length) console.warn('Found extra payload', extra);
    if (isVersion38) {
        if (!signature) throw new Error(locales_legacy/* i18n.t */.a.t('payload_bad'));
        return {
            version: -38,
            AESKeyEncrypted,
            iv,
            encryptedText,
            signature,
            authorPublicKey,
            sharedPublic: publicShared === '1',
            authorUserID: esm/* Result.wrap */.x4.wrap(()=>src/* Identifier.fromString */.xb.fromString('person:' + atob(authorID), src/* ProfileIdentifier */.WO).unwrap()
            ).unwrapOr(undefined)
        };
    }
    return {
        ownersAESKeyEncrypted: AESKeyEncrypted,
        iv,
        encryptedText,
        signature,
        version: isVersion39 ? -39 : -40
    };
}
function deconstructAlpha41(str, throws = false) {
    // 🎼1/4|ownersAESKeyEncrypted|iv|encryptedText|signature:||
    if (str.includes('\u{1F3BC}1/4') && str.includes(':||')) if (throws) throw new Error(locales_legacy/* i18n.t */.a.t('payload_throw_in_alpha41'));
    else return null;
    return null;
}
const versions = new Set([
    deconstructAlpha40_Or_Alpha39_Or_Alpha38,
    deconstructAlpha41
]);
function deconstructPayload(str, networkDecoder) {
    if (!networkDecoder) {
        networkDecoder = isEnvironment(Environment.ContentScript) ? decodeTextPayloadUI : (x)=>[
                x
            ]
        ;
    }
    for (const versionDecoder of versions){
        const results = networkDecoder(str);
        for (const result of results){
            if (!result) continue;
            const payload = versionDecoder(result, false);
            if (payload) return Ok(payload);
        }
    }
    if (str.includes('\u{1F3BC}') && str.includes(':||')) return Err(new TypeError(i18n.t('service_unknown_payload')));
    return Err(new TypeError(i18n.t('payload_not_found')));
}

// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-ETH.ts
var SECP256k1_ETH = __webpack_require__(54921);
;// CONCATENATED MODULE: ./src/utils/type-transform/index.ts






// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(81270);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(99192);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(32196);
// EXTERNAL MODULE: ./src/utils/permissions.ts
var permissions = __webpack_require__(97093);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(59389);
// EXTERNAL MODULE: ./src/utils/theme/index.ts + 1 modules
var theme = __webpack_require__(92121);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(27028);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(69900);
;// CONCATENATED MODULE: ./src/utils/index.ts



















/***/ }),

/***/ 32196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62481);



/***/ }),

/***/ 55423:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal)
/* harmony export */ });
/* unused harmony export createReactRootShadowed */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30232);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62481);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81514);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92121);





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
const setupShadowRootPortal = ()=>{
    const shadow = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .setupPortalShadowRoot */ .d_)({
        mode: _shared__WEBPACK_IMPORTED_MODULE_2__/* .Flags.using_ShadowDOM_attach_mode */ .vU.using_ShadowDOM_attach_mode
    });
    createReactRootShadowed(shadow, {
        key: 'css-vars'
    }).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}));
};
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    wrapJSX (jsx) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIRoot__WEBPACK_IMPORTED_MODULE_3__/* .MaskUIRoot */ .Y, {
            useTheme: _theme__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskSNSTheme */ .VJ,
            kind: "sns",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}),
                jsx
            ]
        });
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 92121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dF": () => (/* reexport */ getBackgroundColor),
  "$o": () => (/* reexport */ isDarkTheme),
  "VJ": () => (/* reexport */ useClassicMaskSNSTheme/* useClassicMaskSNSTheme */.V),
  "Nh": () => (/* reexport */ useColorStyles/* useColorStyles */.N),
  "B6": () => (/* reexport */ useErrorStyles/* useErrorStyles */.B)
});

// UNUSED EXPORTS: MaskDarkTheme, MaskLightTheme, fromRGB, getForegroundColor, isDark, shade, toRGB, useThemeLanguage

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clamp.js
var clamp = __webpack_require__(8218);
;// CONCATENATED MODULE: ./src/utils/theme/color-tools.ts

function isDark([r, g, b]) {
    return r < 68 && g < 68 && b < 68;
}
function toRGB(channels) {
    if (!channels) return '';
    return `rgb(${channels.join()})`;
}
function fromRGB(rgb) {
    const matched = rgb.match(/rgb\(\s*(\d+?)\s*,\s*(\d+?)\s*,\s*(\d+?)\s*\)/);
    if (matched) {
        const [_, r, g, b] = matched;
        return [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10)
        ];
    }
    return;
}
function shade(channels, percentage) {
    return channels.map((c)=>(0,clamp/* default */.Z)(Math.floor(c * (100 + percentage) / 100), 0, 255)
    );
}
function fromRGBAtoRGB(color) {
    const matched = color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
    if (matched) {
        const [_, r, g, b, a] = matched;
        const rgba = [
            Number.parseInt(r, 10),
            Number.parseInt(g, 10),
            Number.parseInt(b, 10),
            Number.parseInt(a, 10), 
        ];
        return toRGB(shade(rgba.slice(0, 3), rgba[3] * 100));
    }
    return '';
}
function isRGBA(color) {
    return color.match(/^rgba\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d*(?:\.\d+)?)\)$/);
}
function getBackgroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function getForegroundColor(element) {
    if (!element) return '';
    const color = getComputedStyle(element).color;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function isDarkTheme(element = document.body) {
    const color = getComputedStyle(element).backgroundColor;
    let rgb;
    if (isRGBA(color)) {
        rgb = fromRGB(fromRGBAtoRGB(color));
    } else {
        rgb = fromRGB(color);
    }
    if (!rgb) return true;
    return isDark(rgb);
}

// EXTERNAL MODULE: ./src/utils/theme/MaskTheme.ts
var MaskTheme = __webpack_require__(33092);
// EXTERNAL MODULE: ./src/utils/theme/useColorStyles.ts
var useColorStyles = __webpack_require__(13922);
// EXTERNAL MODULE: ./src/utils/theme/useErrorStyles.ts
var useErrorStyles = __webpack_require__(59203);
// EXTERNAL MODULE: ./src/utils/theme/useThemeLanguage.ts
var useThemeLanguage = __webpack_require__(44614);
// EXTERNAL MODULE: ./src/utils/theme/useClassicMaskSNSTheme.ts
var useClassicMaskSNSTheme = __webpack_require__(42932);
;// CONCATENATED MODULE: ./src/utils/theme/index.ts

// Do not export more files. Those files are deprecated.








/***/ }),

/***/ 71954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getBackupPreviewInfo),
/* harmony export */   "a": () => (/* binding */ UpgradeBackupJSONFile)
/* harmony export */ });
/* harmony import */ var _version_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70001);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79936);
/* harmony import */ var _version_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74439);
/* harmony import */ var _version_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60073);




function UpgradeBackupJSONFile(json, identity) {
    if ((0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .isBackupJSONFileVersion2 */ .GI)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .patchNonBreakingUpgradeForBackupJSONFileVersion2 */ .a6)(json);
    if ((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .isBackupJSONFileVersion1 */ .RV)(json)) return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)((0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .patchNonBreakingUpgradeForBackupJSONFileVersion1 */ .z2)(json));
    if ((0,_version_0__WEBPACK_IMPORTED_MODULE_3__/* .isBackupJSONFileVersion0 */ .m)(json) && identity) {
        const upgraded = (0,_version_1__WEBPACK_IMPORTED_MODULE_2__/* .upgradeFromBackupJSONFileVersion0 */ .Bd)(json, identity);
        if (upgraded === null) return null;
        return (0,_version_2__WEBPACK_IMPORTED_MODULE_1__/* .upgradeFromBackupJSONFileVersion1 */ .nl)(upgraded);
    }
    return null;
}
function getBackupPreviewInfo(json) {
    return {
        personas: json.personas.length,
        accounts: json.personas.reduce((a, b)=>a + b.linkedProfiles.length
        , 0),
        posts: json.posts.length,
        contacts: json.profiles.length,
        relations: json.relations.length,
        files: json.plugin?.[_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService]?.length || 0,
        wallets: json.wallets.length,
        createdAt: json._meta_.createdAt
    };
}


/***/ }),

/***/ 68558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _JSON_latest__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _JSON_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71954);



/***/ }),

/***/ 27028:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports downloadUrl, pasteImageToActiveElements, selectElementContents, regexMatch */
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39230);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5027);
/**
 * Prefer function declaration than const f = () => ...
 * in this file please.
 */ 


/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return Services.Helper.fetch(url);
        }
    } catch  {}
    const res = await fetch(url);
    if (!res.ok) throw new Error('Fetch failed.');
    return res.blob();
}
/**
 * paste image to activeElements
 * @param image
 */ async function pasteImageToActiveElements(image) {
    pasteImage(new Uint8Array(await image.arrayBuffer()));
}
/**
 * Select all text in a node
 * @param el Element
 */ function selectElementContents(el) {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = globalThis.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
}
function regexMatch(str, regexp, index = 1) {
    const r = str.match(regexp);
    if (isNull(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}


/***/ }),

/***/ 69900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export startWatch */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62481);

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

/***/ 26537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useCompositionContext)
/* harmony export */ });
/* unused harmony export CompositionContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);

const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {},
    dropMetadata () {}
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 98541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D4": () => (/* reexport */ sns_adaptor/* startPluginSNSAdaptor */.D4),
  "Pz": () => (/* reexport */ sns_adaptor/* useActivatedPluginsSNSAdaptor */.Pz),
  "Cp": () => (/* reexport */ CompositionContext/* useCompositionContext */.C),
  "fI": () => (/* reexport */ entry_dom/* usePluginWrapper */.fI),
  "H9": () => (/* reexport */ usePostInfoDetails)
});

// UNUSED EXPORTS: CompositionContext, CurrentSNSNetwork, PluginI18NFieldRender, PluginId, PostInfoProvider, createInjectHooksRenderer, createPluginMessage, createPluginRPC, createPluginRPCGenerator, getPluginDefine, registerPlugin, registeredPluginIDs, registeredPlugins, useActivatedPlugin, useActivatedPluginSNSAdaptor, useActivatedPluginSNSAdaptor_Web3Supported, useIsMinimalMode, usePluginI18NField, usePostInfo

// EXTERNAL MODULE: ../plugin-infra/src/entry-dom.ts + 1 modules
var entry_dom = __webpack_require__(3267);
// EXTERNAL MODULE: ../plugin-infra/src/manager/sns-adaptor.ts
var sns_adaptor = __webpack_require__(56400);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.9.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(85646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0_react@18.0.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(66040);
;// CONCATENATED MODULE: ../plugin-infra/src/PostContext.ts





const Context = (0,react.createContext)(null);
const PostInfoProvider = (0,react.memo)((props)=>{
    return (0,react.createElement)(Context.Provider, {
        value: props.post,
        children: props.children
    });
});
function usePostInfo() {
    return (0,react.useContext)(Context);
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
            if (k instanceof umd.ValueRef) return (0,shared_base_ui_src/* useValueRef */.E)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof src/* ObservableMap */.vP) return (0,shared_base_ui_src/* useObservableValues */.pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (k instanceof src/* ObservableSet */.n7) return (0,shared_base_ui_src/* useObservableValues */.pv)(k);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            if (isSubscription(k)) return (0,use_subscription.useSubscription)(k);
            return k;
        };
        return _[key];
    }
});
function isSubscription(x) {
    return typeof x === 'object' && x !== null && Boolean(x.getCurrentValue && x.subscribe);
}

// EXTERNAL MODULE: ../plugin-infra/src/CompositionContext.tsx
var CompositionContext = __webpack_require__(26537);
;// CONCATENATED MODULE: ../plugin-infra/src/entry-content-script.ts






/***/ }),

/***/ 3267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "je": () => (/* reexport */ entry/* PluginId */.je),
  "Rc": () => (/* reexport */ hooks/* useActivatedPlugin */.Rc),
  "fI": () => (/* reexport */ hooks/* usePluginWrapper */.fI)
});

// UNUSED EXPORTS: CurrentSNSNetwork, PluginI18NFieldRender, createInjectHooksRenderer, createPluginMessage, createPluginRPC, createPluginRPCGenerator, getPluginDefine, registerPlugin, registeredPluginIDs, registeredPlugins, usePluginI18NField

// EXTERNAL MODULE: ../plugin-infra/src/entry.ts
var entry = __webpack_require__(79936);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var src = __webpack_require__(53242);
// EXTERNAL MODULE: ../theme/src/entry.ts
var src_entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/index.ts
var hooks = __webpack_require__(17750);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/usePluginWrapper.tsx
var usePluginWrapper = __webpack_require__(48463);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/createInjectHooksRenderer.tsx






const PropsContext = /*#__PURE__*/ (/* unused pure expression or super */ null && (createContext(null)));
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const [ref, setRef] = useState(null);
        if (PluginWrapperComponent) {
            return /*#__PURE__*/ _jsx(PluginWrapperComponent, {
                definition: plugin,
                ref: (methods)=>{
                    if (methods) setRef(methods);
                },
                children: ref ? /*#__PURE__*/ _jsx(PluginWrapperMethodsContext.Provider, {
                    value: ref,
                    children: element
                }) : null
            });
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
        const allPlugins = usePlugins();
        const availablePlugins = useAvailablePlugins(allPlugins);
        const all = availablePlugins.filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ _jsx(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ _jsx(ShadowRootIsolation, {
                    "data-plugin": plugin.ID,
                    children: /*#__PURE__*/ _jsx(SinglePluginWithinErrorBoundary, {
                        plugin: plugin
                    })
                })
            }, plugin.ID)
        );
        return /*#__PURE__*/ _jsx(_Fragment, {
            children: all
        });
    }
    return /*#__PURE__*/ memo(function PluginsInjectionHookRenderErrorBoundary(props) {
        return /*#__PURE__*/ _jsx("span", {
            "data-plugin-render": "",
            children: /*#__PURE__*/ _jsx(ErrorBoundary, {
                children: /*#__PURE__*/ _jsx(PluginsInjectionHookRender, {
                    ...props
                })
            })
        });
    });
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return /*#__PURE__*/ _jsx(RawHookRender, {
        UI: UI,
        data: data
    });
    return /*#__PURE__*/ _jsx(UI, {
        ...data
    });
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
    useEffect(()=>void f?.(data)
    , [
        f,
        data
    ]);
    return /*#__PURE__*/ _jsx("div", {
        ref: setRef
    });
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}

;// CONCATENATED MODULE: ../plugin-infra/src/entry-dom.ts





/***/ }),

/***/ 67071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$d),
/* harmony export */   "$f": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$f),
/* harmony export */   "$q": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.$q),
/* harmony export */   "FF": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.FF),
/* harmony export */   "KQ": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.KQ),
/* harmony export */   "Ne": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_2__.Ne),
/* harmony export */   "Os": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Os),
/* harmony export */   "Ov": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Ov),
/* harmony export */   "Rm": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.Rm),
/* harmony export */   "V2": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.V2),
/* harmony export */   "Vw": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Vw),
/* harmony export */   "Yn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Yn),
/* harmony export */   "_o": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__._o),
/* harmony export */   "bL": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.bL),
/* harmony export */   "dM": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.dM),
/* harmony export */   "fY": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.fY),
/* harmony export */   "i8": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.i8),
/* harmony export */   "iv": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_1__.iv),
/* harmony export */   "mA": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.mA),
/* harmony export */   "px": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.px),
/* harmony export */   "xx": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.xx)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28102);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71354);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17750);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72938);






/***/ }),

/***/ 79936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I4": () => (/* reexport safe */ _utils_message__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils_rpc__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   "V8": () => (/* reexport safe */ _utils_rpc__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "_W": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__._W),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.fg),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.fo),
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62559);
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85705);
/* harmony import */ var _utils_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47923);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72938);






/***/ }),

/***/ 17750:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$q": () => (/* reexport safe */ _useReverseAddress__WEBPACK_IMPORTED_MODULE_6__.$),
/* harmony export */   "Ne": () => (/* reexport safe */ _useAllPluginsWeb3State__WEBPACK_IMPORTED_MODULE_3__.N),
/* harmony export */   "Rc": () => (/* reexport safe */ _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   "fI": () => (/* reexport safe */ _usePluginWrapper__WEBPACK_IMPORTED_MODULE_8__.fI)
/* harmony export */ });
/* harmony import */ var _useActivatedPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9881);
/* harmony import */ var _useActivatedPluginWeb3UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82139);
/* harmony import */ var _useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54605);
/* harmony import */ var _useAllPluginsWeb3State__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23774);
/* harmony import */ var _useAvailablePlugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15428);
/* harmony import */ var _useLookupDomain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59282);
/* harmony import */ var _useReverseAddress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58700);
/* harmony import */ var _useI18N__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5989);
/* harmony import */ var _usePluginWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48463);











/***/ }),

/***/ 23774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useAllPluginsWeb3State)
/* harmony export */ });
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37271);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56400);


function useAllPluginsWeb3State() {
    const pluginsSNSAdaptor = (0,_manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginsSNSAdaptor */ .Pz)('any');
    const pluginsDashboard = (0,_manager_dashboard__WEBPACK_IMPORTED_MODULE_0__/* .useActivatedPluginsDashboard */ .eE)();
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

/***/ 15428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useAvailablePlugins */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28102);


function checkPluginAvailable(plugin, pluginId, chainId) {
    const supportedChainIds = plugin.enableRequirement.web3?.[pluginId]?.supportedChainIds;
    if (!supportedChainIds) return true;
    return supportedChainIds.includes(chainId);
}
function useAvailablePlugins(plugins) {
    const networkPluginId = useCurrentWeb3NetworkPluginID();
    const chainId = useChainId(networkPluginId);
    return useMemo(()=>plugins.filter((plugin)=>checkPluginAvailable(plugin, networkPluginId, chainId)
        )
    , [
        plugins,
        networkPluginId,
        chainId
    ]);
}


/***/ }),

/***/ 5989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports PluginI18NFieldRender, usePluginI18NField */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);


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
            return /*#__PURE__*/ _jsx(_Fragment, {
                children: translate
            });
        }
        return /*#__PURE__*/ _jsx(_Fragment, {
            children: field.fallback
        });
    }
    return /*#__PURE__*/ _jsx(_Fragment, {
        children: field
    });
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


/***/ }),

/***/ 48463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fI": () => (/* binding */ usePluginWrapper)
/* harmony export */ });
/* unused harmony exports emptyPluginWrapperMethods, PluginWrapperMethodsContext */
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21122);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);


/** @internal */ const emptyPluginWrapperMethods = {
    setWrap: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWrapperName: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
    setWidth: lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
};
/** @internal */ const PluginWrapperMethodsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(emptyPluginWrapperMethods);
function usePluginWrapper(open, options) {
    const { setWidth , setWrap , setWrapperName  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PluginWrapperMethodsContext);
    const { width , name  } = options || {};
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWrap(open);
        return ()=>setWrap(open)
        ;
    }, [
        open,
        setWrap
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWidth(width)
    , [
        width,
        setWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setWrapperName(name)
    , [
        name,
        setWrapperName
    ]);
}


/***/ }),

/***/ 56400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor),
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony exports useIsMinimalMode, useActivatedPluginSNSAdaptor_Web3Supported */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66040);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71264);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72938);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28807);




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
    const minimalMode2 = (0,use_subscription__WEBPACK_IMPORTED_MODULE_0__.useSubscription)(minimalModeSub);
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
    (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .unreachable */ .t1)(minimalModeEqualsTo);
}
function useActivatedPluginSNSAdaptor_Web3Supported(chainId, pluginID) {
    const plugins = useActivatedPluginsSNSAdaptor('any');
    return plugins.reduce((acc, cur)=>{
        if (!cur.enableRequirement.web3) {
            acc[cur.ID] = true;
            return acc;
        }
        const supportedChainIds = cur.enableRequirement.web3?.[pluginID]?.supportedChainIds;
        acc[cur.ID] = supportedChainIds?.includes(chainId) ?? false;
        return acc;
    }, {});
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

/***/ 28102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__.$),
/* harmony export */   "$f": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$f),
/* harmony export */   "KQ": () => (/* reexport safe */ _useBalance__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "Os": () => (/* reexport safe */ _useWallet__WEBPACK_IMPORTED_MODULE_20__.O),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__.O),
/* harmony export */   "Vw": () => (/* reexport safe */ _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__.V),
/* harmony export */   "Yn": () => (/* reexport safe */ _useBeat__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "_o": () => (/* reexport safe */ _useProviderType__WEBPACK_IMPORTED_MODULE_13__._),
/* harmony export */   "bL": () => (/* reexport safe */ _useNetworkType__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   "dM": () => (/* reexport safe */ _useWeb3State__WEBPACK_IMPORTED_MODULE_24__.d),
/* harmony export */   "fY": () => (/* reexport safe */ _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__.f),
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "px": () => (/* reexport safe */ _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__.p),
/* harmony export */   "xx": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_6__.x)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32393);
/* harmony import */ var _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49031);
/* harmony import */ var _useAssetType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32754);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35807);
/* harmony import */ var _useBeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39157);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62414);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32668);
/* harmony import */ var _useChainColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38296);
/* harmony import */ var _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89274);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38527);
/* harmony import */ var _useCollectibleType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50359);
/* harmony import */ var _useNameType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2953);
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50657);
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(40989);
/* harmony import */ var _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93413);
/* harmony import */ var _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4315);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(65845);
/* harmony import */ var _useProviderDescriptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98102);
/* harmony import */ var _useTokenPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(16103);
/* harmony import */ var _useTransactionType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(40425);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(11103);
/* harmony import */ var _useWalletPrimary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(69938);
/* harmony import */ var _useWallets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(65043);
/* harmony import */ var _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88241);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(18618);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15358);




























/***/ }),

/***/ 32393:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29730);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15358);


/**
 * Get the address of the default wallet
 */ function useAccount(pluginID) {
    const { account , wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    return  true ? (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallets)?.address ?? '' : 0;
}


/***/ }),

/***/ 38296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainColor */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32668);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18618);


function useChainColor(pluginID) {
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    return Utils?.resolveChainColor?.(chainId) ?? 'transparent';
}


/***/ }),

/***/ 38527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainDetailed */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32668);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18618);


function useChainDetailed(pluginID) {
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    return Utils?.getChainDetailed?.(chainId) ?? null;
}


/***/ }),

/***/ 89274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainIdValid */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32668);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18618);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32393);



function useChainIdValid(pluginID) {
    const account = useAccount(pluginID);
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    return !account || (Utils?.isChainIdValid?.(chainId, "production" === 'development') ?? false);
}


/***/ }),

/***/ 93413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50657);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15358);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72938);



function useNetworkDescriptor(expectedChainIdOrNetworkTypeOrID, expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const pid = expectedPluginID ?? pluginID;
    const networkType = (0,_useNetworkType__WEBPACK_IMPORTED_MODULE_0__/* .useNetworkType */ .b)(pid);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pid)?.declareWeb3Networks?.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((expectedChainIdOrNetworkTypeOrID ?? networkType) ?? '')
    );
}


/***/ }),

/***/ 4315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40989);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15358);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72938);



function useProviderDescriptor(expectedProviderTypeOrID, expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const providerType = (0,_useProviderType__WEBPACK_IMPORTED_MODULE_0__/* .useProviderType */ ._)(expectedPluginID ?? pluginID);
    return (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(expectedPluginID ?? pluginID)?.declareWeb3Providers?.find((x)=>[
            x.type,
            x.ID
        ].includes((expectedProviderTypeOrID ?? providerType) ?? '')
    );
}


/***/ }),

/***/ 11103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32393);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15358);


function useWallet(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)(pluginID);
    const { wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    return account ? wallets.find((x)=>x.address.toLowerCase() === account.toLowerCase()
    ) : undefined;
}


/***/ }),

/***/ 18618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15358);
/* harmony import */ var _hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54605);


function useWeb3State(expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    return (0,_hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginWeb3State */ .G)(expectedPluginID ?? pluginID) ?? {};
}


/***/ }),

/***/ 75151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FW": () => (/* binding */ DataProvider),
/* harmony export */   "P7": () => (/* binding */ LanguageOptions),
/* harmony export */   "iu": () => (/* binding */ SupportedLanguages),
/* harmony export */   "z4": () => (/* binding */ TradeProvider)
/* harmony export */ });
/* unused harmony exports Appearance, LaunchPage, NetworkType, ProviderType, FungibleAssetProvider, NonFungibleAssetProvider */
var Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));
var LaunchPage;
(function(LaunchPage) {
    LaunchPage["facebook"] = "facebook";
    LaunchPage["twitter"] = "twitter";
    LaunchPage["dashboard"] = "dashboard";
})(LaunchPage || (LaunchPage = {}));
var DataProvider;
(function(DataProvider) {
    DataProvider[DataProvider["COIN_GECKO"] = 0] = "COIN_GECKO";
    DataProvider[DataProvider["COIN_MARKET_CAP"] = 1] = "COIN_MARKET_CAP";
    DataProvider[DataProvider["UNISWAP_INFO"] = 2] = "UNISWAP_INFO";
})(DataProvider || (DataProvider = {}));
var TradeProvider;
(function(TradeProvider) {
    TradeProvider[TradeProvider["UNISWAP_V2"] = 0] = "UNISWAP_V2";
    TradeProvider[TradeProvider["ZRX"] = 1] = "ZRX";
    TradeProvider[TradeProvider["SUSHISWAP"] = 2] = "SUSHISWAP";
    TradeProvider[TradeProvider["SASHIMISWAP"] = 3] = "SASHIMISWAP";
    TradeProvider[TradeProvider["BALANCER"] = 4] = "BALANCER";
    TradeProvider[TradeProvider["QUICKSWAP"] = 5] = "QUICKSWAP";
    TradeProvider[TradeProvider["PANCAKESWAP"] = 6] = "PANCAKESWAP";
    TradeProvider[TradeProvider["DODO"] = 7] = "DODO";
    TradeProvider[TradeProvider["UNISWAP_V3"] = 8] = "UNISWAP_V3";
    TradeProvider[TradeProvider["BANCOR"] = 9] = "BANCOR";
    TradeProvider[TradeProvider["OPENOCEAN"] = 10] = "OPENOCEAN";
    TradeProvider[TradeProvider["WANNASWAP"] = 11] = "WANNASWAP";
    TradeProvider[TradeProvider["TRISOLARIS"] = 12] = "TRISOLARIS";
    TradeProvider[TradeProvider["TRADERJOE"] = 13] = "TRADERJOE";
    TradeProvider[TradeProvider["PANGOLIN"] = 14] = "PANGOLIN";
    TradeProvider[TradeProvider["MDEX"] = 15] = "MDEX";
})(TradeProvider || (TradeProvider = {}));
var LanguageOptions;
(function(LanguageOptions) {
    LanguageOptions["__auto__"] = 'auto';
    LanguageOptions["enUS"] = 'en-US';
    LanguageOptions["zhCN"] = 'zh-CN';
    LanguageOptions["zhTW"] = 'zh-TW';
    LanguageOptions["koKR"] = 'ko-KR';
    LanguageOptions["jaJP"] = 'ja-JP';
})(LanguageOptions || (LanguageOptions = {}));
var SupportedLanguages;
(function(SupportedLanguages) {
    SupportedLanguages["enUS"] = 'en-US';
    SupportedLanguages["zhCN"] = 'zh-CN';
    SupportedLanguages["zhTW"] = 'zh-TW';
    SupportedLanguages["koKR"] = 'ko-KR';
    SupportedLanguages["jaJP"] = 'ja-JP';
})(SupportedLanguages || (SupportedLanguages = {}));
var NetworkType;
(function(NetworkType) {
    NetworkType["Ethereum"] = "Ethereum";
    NetworkType["Binance"] = "Binance";
    NetworkType["Polygon"] = "Polygon";
    NetworkType["Arbitrum"] = "Arbitrum";
    NetworkType["xDai"] = "xDai";
    NetworkType["Celo"] = "Celo";
    NetworkType["Fantom"] = "Fantom";
    NetworkType["Aurora"] = "Aurora";
    NetworkType["Avalanche"] = "Avalanche";
    NetworkType["Boba"] = "Boba";
    NetworkType["Fuse"] = "Fuse";
    NetworkType["Metis"] = "Metis";
    NetworkType["Optimistic"] = "Optimistic";
    NetworkType["Conflux"] = "Conflux";
})(NetworkType || (NetworkType = {}));
var ProviderType;
(function(ProviderType) {
    ProviderType["MaskWallet"] = 'Maskbook';
    ProviderType["MetaMask"] = "MetaMask";
    ProviderType["WalletConnect"] = "WalletConnect";
    ProviderType["Fortmatic"] = "Fortmatic";
    ProviderType["Coin98"] = "Coin98";
    ProviderType["MathWallet"] = "MathWallet";
    ProviderType["WalletLink"] = "WalletLink";
    ProviderType["CustomNetwork"] = "CustomNetwork";
})(ProviderType || (ProviderType = {}));
var FungibleAssetProvider;
(function(FungibleAssetProvider) {
    FungibleAssetProvider["ZERION"] = 'Zerion';
    FungibleAssetProvider["DEBANK"] = 'Debank';
})(FungibleAssetProvider || (FungibleAssetProvider = {}));
var NonFungibleAssetProvider;
(function(NonFungibleAssetProvider) {
    NonFungibleAssetProvider["OPENSEA"] = 'OpenSea';
    NonFungibleAssetProvider["RARIBLE"] = 'Rarible';
    NonFungibleAssetProvider["NFTSCAN"] = 'NFTScan';
    NonFungibleAssetProvider["ZORA"] = 'Zora';
})(NonFungibleAssetProvider || (NonFungibleAssetProvider = {}));


/***/ }),

/***/ 87557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N)
});

// UNUSED EXPORTS: CrashUI, withErrorBoundary

// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/CrashUI.tsx + 2 modules
var CrashUI = __webpack_require__(84432);
// EXTERNAL MODULE: ../shared-base-ui/src/components/ErrorBoundary/context.ts
var context = __webpack_require__(74189);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/ErrorBoundary.tsx



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
class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (!this.state.error) return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: this.props.children
        });
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(CrashUI/* CrashUI */.O, {
            subject: "Mask",
            onRetry: ()=>this.setState({
                    error: null
                })
            ,
            ...this.props,
            ...this.normalizedError
        });
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

;// CONCATENATED MODULE: ../shared-base-ui/src/components/ErrorBoundary/index.ts




;// CONCATENATED MODULE: ../shared-base-ui/src/components/index.ts



/***/ }),

/***/ 21902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pv": () => (/* reexport */ useObservableMapSet/* useObservableValues */.p),
  "F$": () => (/* reexport */ useRemoteControlledDialog/* useRemoteControlledDialog */.F),
  "S8": () => (/* reexport */ useScrollBottomEvent/* useScrollBottomEvent */.S),
  "E": () => (/* reexport */ useValueRef)
});

// UNUSED EXPORTS: createGlobalState, useValueRefDelayed

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.6.0_react@18.0.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(66040);
;// CONCATENATED MODULE: ../shared-base-ui/src/hooks/useValueRef.ts


function useValueRef(ref) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>ref.value
            ,
            subscribe: (callback)=>ref.addListener(callback)
        })
    , [
        ref
    ]);
    return (0,use_subscription.useSubscription)(subscription);
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

// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useObservableMapSet.ts
var useObservableMapSet = __webpack_require__(44619);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(18441);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/useScrollBottomEvent.ts
var useScrollBottomEvent = __webpack_require__(20955);
// EXTERNAL MODULE: ../shared-base-ui/src/hooks/createGlobalState.ts
var createGlobalState = __webpack_require__(20871);
;// CONCATENATED MODULE: ../shared-base-ui/src/hooks/index.ts







/***/ }),

/***/ 44619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66040);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78144);



function useObservableValues(map) {
    const subscription = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
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
    return (0,use_subscription__WEBPACK_IMPORTED_MODULE_1__.useSubscription)(subscription);
}


/***/ }),

/***/ 18441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32513);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z) // create an uuid for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>event1.on((_ev)=>{
            const event = _ev;
            // ignore the event from the same hook
            if (event.hookId === HOOK_ID) return;
            setOpen(event.open);
            onUpdateByRemote?.(_ev);
        })
    , [
        onUpdateByRemote,
        event1,
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
            tabType === 'self' ? event1.sendToLocal(payload) : event1.sendToVisiblePages(payload);
        }, 100);
    }, [
        event1,
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

/***/ 78144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ko": () => (/* reexport */ collections/* ALL_EVENTS */.Ko),
  "iD": () => (/* reexport */ Results/* CheckedError */.iD),
  "WF": () => (/* reexport */ Shared/* CrossIsolationMessages */.W),
  "vq": () => (/* reexport */ Routes/* DashboardRoutes */.vq),
  "ob": () => (/* reexport */ type/* ECKeyIdentifier */.ob),
  "CH": () => (/* reexport */ src_crypto/* ECKeyIdentifierFromJsonWebKey */.CH),
  "rP": () => (/* reexport */ Pure/* EMPTY_LIST */.r),
  "Jk": () => (/* reexport */ Site_type/* EnhanceableSite */.J),
  "xI": () => (/* reexport */ type/* GroupIdentifier */.xI),
  "xb": () => (/* reexport */ type/* Identifier */.xb),
  "qD": () => (/* reexport */ IdentifierMap/* IdentifierMap */.q),
  "BU": () => (/* reexport */ NextID_type/* NextIDAction */.B),
  "Vd": () => (/* reexport */ NextID_type/* NextIDPlatform */.V),
  "vP": () => (/* reexport */ collections/* ObservableMap */.vP),
  "n7": () => (/* reexport */ collections/* ObservableSet */.n7),
  "$f": () => (/* reexport */ collections/* ObservableWeakMap */.$f),
  "E": () => (/* reexport */ Results/* OptionalResult */.E),
  "mZ": () => (/* reexport */ Routes/* PopupRoutes */.mZ),
  "bb": () => (/* reexport */ type/* PostIVIdentifier */.bb),
  "_P": () => (/* reexport */ type/* PostIdentifier */._P),
  "WO": () => (/* reexport */ type/* ProfileIdentifier */.WO),
  "Kn": () => (/* reexport */ Persona_type/* RelationFavor */.K),
  "Hd": () => (/* reexport */ sessionStorageCache/* SessionStorageCache */.H),
  "Jf": () => (/* reexport */ subscription/* SubscriptionFromValueRef */.Jf),
  "ZI": () => (/* reexport */ serializer/* __DEBUG__ONLY__enableCryptoKeySerialization */.ZI),
  "ps": () => (/* reexport */ Results/* andThenAsync */.ps),
  "SH": () => (/* reexport */ src_crypto/* compressSecp256k1Point */.SH),
  "qY": () => (/* reexport */ subscription/* createConstantSubscription */.qY),
  "C9": () => (/* reexport */ i18n/* createI18NBundle */.C9),
  "q0": () => (/* reexport */ kv_storage/* createInMemoryKVStorageBackend */.q0),
  "Ic": () => (/* reexport */ kv_storage/* createIndexedDB_KVStorageBackend */.Ic),
  "rc": () => (/* reexport */ kv_storage/* createKVStorageHost */.rc),
  "X2": () => (/* reexport */ kv_storage/* createProxyKVStorageBackend */.X2),
  "Fd": () => (/* reexport */ subscription/* createSubscriptionFromAsync */.Fd),
  "qX": () => (/* reexport */ src_crypto/* decompressSecp256k1Key */.qX),
  "pf": () => (/* reexport */ src_crypto/* decompressSecp256k1Point */.pf),
  "Nb": () => (/* reexport */ personas/* formatPersonaFingerprint */.N),
  "mz": () => (/* reexport */ convert/* fromBase64URL */.mz),
  "H_": () => (/* reexport */ convert/* fromHex */.H_),
  "$I": () => (/* reexport */ getAssetAsBlobURL/* getAssetAsBlobURL */.$),
  "Bb": () => (/* reexport */ getLocalImplementation/* getLocalImplementation */.B),
  "kO": () => (/* reexport */ getLocalImplementation/* getLocalImplementationExotic */.k),
  "BV": () => (/* reexport */ i18n/* i18NextInstance */.BV),
  "K2": () => (/* reexport */ detect/* isDashboardPage */.K),
  "N6": () => (/* reexport */ detect/* isPopupPage */.N),
  "dK": () => (/* reexport */ src_crypto/* isSecp256k1Point */.dK),
  "Rx": () => (/* reexport */ src_crypto/* isSecp256k1PrivateKey */.Rx),
  "S3": () => (/* reexport */ subscription/* mapSubscription */.S3),
  "Lk": () => (/* reexport */ parseURL/* parseURL */.L),
  "s_": () => (/* reexport */ pollingTask/* pollingTask */.s),
  "tr": () => (/* reexport */ serializer/* registerSerializableClass */.tr),
  "GM": () => (/* reexport */ serializer/* serializer */.GM),
  "s3": () => (/* reexport */ convert/* toBase64 */.s3),
  "wi": () => (/* reexport */ convert/* toBase64URL */.wi),
  "NC": () => (/* reexport */ convert/* toHex */.NC),
  "BF": () => (/* reexport */ i18n/* updateLanguage */.BF)
});

// UNUSED EXPORTS: ECKeyIdentifierFromCryptoKey, EMPTY_OBJECT, ExtensionSite, MAX_PERSONA_LIMIT, PayloadVersions, PersonaIdentifier, ReadonlyIdentifierMap, SubscriptionDebug, ValueRefFromSubscription, compressSecp256k1Key, relativeRouteOf, removed

// EXTERNAL MODULE: ../shared-base/src/serializer/index.ts
var serializer = __webpack_require__(91131);
// EXTERNAL MODULE: ../shared-base/src/Identifier/IdentifierMap.ts
var IdentifierMap = __webpack_require__(93731);
// EXTERNAL MODULE: ../shared-base/src/collections/index.ts
var collections = __webpack_require__(33821);
// EXTERNAL MODULE: ../shared-base/src/MaskPayload/index.ts
var MaskPayload = __webpack_require__(43550);
// EXTERNAL MODULE: ../shared-base/src/Identifier/type.ts
var type = __webpack_require__(57589);
// EXTERNAL MODULE: ../shared-base/src/i18n/index.ts + 1 modules
var i18n = __webpack_require__(37820);
// EXTERNAL MODULE: ../shared-base/src/utils/detect.ts
var detect = __webpack_require__(75990);
// EXTERNAL MODULE: ../shared-base/src/utils/getLocalImplementation.tsx
var getLocalImplementation = __webpack_require__(97825);
// EXTERNAL MODULE: ../shared-base/src/utils/parseURL.ts
var parseURL = __webpack_require__(72610);
// EXTERNAL MODULE: ../shared-base/src/utils/pollingTask.ts
var pollingTask = __webpack_require__(16746);
// EXTERNAL MODULE: ../shared-base/src/utils/sessionStorageCache.ts
var sessionStorageCache = __webpack_require__(16280);
// EXTERNAL MODULE: ../shared-base/src/utils/subscription.ts
var subscription = __webpack_require__(40613);
// EXTERNAL MODULE: ../shared-base/src/utils/getAssetAsBlobURL.ts
var getAssetAsBlobURL = __webpack_require__(20449);
// EXTERNAL MODULE: ../shared-base/src/utils/personas.ts
var personas = __webpack_require__(68433);
;// CONCATENATED MODULE: ../shared-base/src/utils/index.ts









// EXTERNAL MODULE: ../shared-base/src/kv-storage/index.ts + 1 modules
var kv_storage = __webpack_require__(66052);
// EXTERNAL MODULE: ../shared-base/src/crypto/index.ts + 1 modules
var src_crypto = __webpack_require__(68149);
// EXTERNAL MODULE: ../shared-base/src/Pure/index.ts
var Pure = __webpack_require__(3494);
// EXTERNAL MODULE: ../shared-base/src/Persona/type.ts
var Persona_type = __webpack_require__(42703);
// EXTERNAL MODULE: ../shared-base/src/Site/type.ts
var Site_type = __webpack_require__(77907);
// EXTERNAL MODULE: ../shared-base/src/Routes/index.ts
var Routes = __webpack_require__(1174);
// EXTERNAL MODULE: ../shared-base/src/Messages/Shared.ts
var Shared = __webpack_require__(85562);
// EXTERNAL MODULE: ../shared-base/src/Results/index.ts + 2 modules
var Results = __webpack_require__(33067);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(59041);
// EXTERNAL MODULE: ../shared-base/src/NextID/type.ts
var NextID_type = __webpack_require__(27897);
;// CONCATENATED MODULE: ../shared-base/src/index.ts






















/***/ }),

/***/ 91131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ serializer),
/* harmony export */   "ZI": () => (/* binding */ __DEBUG__ONLY__enableCryptoKeySerialization),
/* harmony export */   "tr": () => (/* binding */ registerSerializableClass)
/* harmony export */ });
/* harmony import */ var typeson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44284);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48160);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var typeson_registry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4926);
/* harmony import */ var _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93731);
/* harmony import */ var _Identifier_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57589);
/// <reference path="./typeson.d.ts" />



// @ts-ignore



const pendingRegister = new Set();
let typeson;
function setup() {
    const { default: BigNumber  } = bignumber_js__WEBPACK_IMPORTED_MODULE_2__;
    typeson = new typeson__WEBPACK_IMPORTED_MODULE_0__/* .Typeson */ .oy({});
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .builtin */ .j0);
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .specialNumbers */ .so);
    typeson.register([
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .blob */ .Ik,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .file */ .tP,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .filelist */ .Jj,
        typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .imagebitmap */ .xA
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
    addClass('ProfileIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_5__/* .ProfileIdentifier */ .WO);
    addClass('ECKeyIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_5__/* .ECKeyIdentifier */ .ob);
    addClass('GroupIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_5__/* .GroupIdentifier */ .xI);
    addClass('PostIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_5__/* .PostIdentifier */ ._P);
    addClass('PostIVIdentifier', _Identifier_type__WEBPACK_IMPORTED_MODULE_5__/* .PostIVIdentifier */ .bb);
    addClass('IdentifierMap', _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_4__/* .IdentifierMap */ .q);
    for (const a of pendingRegister)a();
}
const serializer = {
    serialization (from) {
        if (!typeson) setup();
        return typeson.encapsulate(from);
    },
    // cspell:disable-next-line
    deserialization (to) {
        if (!typeson) setup();
        return typeson.revive(to);
    }
};
/** THIS MUST NOT BE USED OUTSIDE OF A DEBUGGER CONTEXT */ function __DEBUG__ONLY__enableCryptoKeySerialization() {
    if (!typeson) setup();
    typeson.register(typeson_registry__WEBPACK_IMPORTED_MODULE_3__/* .cryptokey */ .W2);
}
function registerSerializableClass(name, a, b, c) {
    if (typeson) {
        if (b) typeson.register({
            [name]: [
                a,
                b,
                c
            ]
        });
        else addClass(name, a);
    } else {
        if (b) pendingRegister.add(()=>typeson.register({
                [name]: [
                    a,
                    b,
                    c
                ]
            })
        );
        else pendingRegister.add(()=>addClass(name, a)
        );
    }
}
function addClass(name, constructor) {
    Object.defineProperty(constructor, 'name', {
        configurable: true,
        enumerable: false,
        writable: false,
        value: name
    });
    typeson.register({
        [name]: [
            (x)=>x instanceof constructor
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
                Object.setPrototypeOf(y, constructor.prototype);
                return y;
            }, 
        ]
    });
}


/***/ }),

/***/ 97825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getLocalImplementation),
/* harmony export */   "k": () => (/* binding */ getLocalImplementationExotic)
/* harmony export */ });
// key = channel; value = local implementation
const RPCCache = new WeakMap();
/**
 * This function provides a localImplementation that is HMR ready.
 * To update, call this function with the SAME CHANNEL object.
 * It will "clone" all methods that impl returns.
 * @param isBackground If the current environment is background.
 * @param name The name of the local implementation, used for logging
 * @param impl The implementation. Can be an async function.
 * @param ref The reference object that must be the same if you're updating.
 */ async function getLocalImplementation(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    const isUpdate = RPCCache.has(ref);
    const localImpl = RPCCache.get(ref) || {};
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
        if (!Reflect.has(localImpl, key1)) isUpdate && console.log(`[HMR] ${name}.${key1} added.`);
        Object.defineProperty(localImpl, key1, {
            configurable: true,
            enumerable: true,
            value: result[key1]
        });
    }
    return localImpl;
}
async function getLocalImplementationExotic(isBackground, name, impl, ref) {
    if (!isBackground) return {};
    RPCCache.set(ref, await impl());
    return new Proxy({}, {
        get (_, key) {
            if (key === 'then') return;
            // @ts-ignore
            return RPCCache.get(ref)?.[key];
        }
    });
}


/***/ }),

/***/ 40613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fd": () => (/* binding */ createSubscriptionFromAsync),
/* harmony export */   "Jf": () => (/* binding */ SubscriptionFromValueRef),
/* harmony export */   "S3": () => (/* binding */ mapSubscription),
/* harmony export */   "qY": () => (/* binding */ createConstantSubscription)
/* harmony export */ });
/* unused harmony exports SubscriptionDebug, ValueRefFromSubscription */
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

/***/ 40547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60147);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95878);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78144);



react_i18next__WEBPACK_IMPORTED_MODULE_2__/* .initReactI18next.init */ .Db.init(_masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .i18NextInstance */ .BV);
const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .I18nextProvider */ .a;


/***/ }),

/***/ 13111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ ReversedAddress)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67071);



const ReversedAddress = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ address , pluginId , domainSize , size =5  })=>{
    const { value: domain  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useReverseAddress */ .$q)(address, pluginId);
    const { Utils  } = (0,_masknet_plugin_infra_web3__WEBPACK_IMPORTED_MODULE_2__/* .useWeb3State */ .dM)(pluginId);
    if (!domain || !Utils?.formatDomainName) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Utils?.formatAddress?.(address, size) ?? address
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: Utils.formatDomainName(domain, domainSize)
    });
});


/***/ }),

/***/ 44459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QE": () => (/* binding */ TWITTER_ID),
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "l9": () => (/* binding */ INSTAGRAM_ID),
/* harmony export */   "n2": () => (/* binding */ mediaViewerUrl)
/* harmony export */ });
/* unused harmony exports FACEBOOK_ID, OPENSEA_ID, SOCIAL_MEDIA_ICON_MAPPING, MAX_WALLET_LIMIT */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17946);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(63997);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45227);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5795);
/* harmony import */ var _masknet_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65651);


const MINDS_ID = 'minds.com';
const FACEBOOK_ID = 'facebook.com';
const TWITTER_ID = 'twitter.com';
const INSTAGRAM_ID = 'instagram.com';
const OPENSEA_ID = 'opensea.io';
const SOCIAL_MEDIA_ICON_MAPPING = {
    [TWITTER_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_1__/* .TwitterColoredIcon */ .g, {}),
    [FACEBOOK_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_2__/* .FacebookColoredIcon */ .W, {}),
    [MINDS_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_3__/* .MindsIcon */ .G, {}),
    [INSTAGRAM_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_4__/* .InstagramColoredIcon */ .$, {}),
    [OPENSEA_ID]: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_icons__WEBPACK_IMPORTED_MODULE_5__/* .OpenSeaColoredIcon */ .w, {})
};
const mediaViewerUrl = 'https://media-viewer.r2d2.to/index.html';
const MAX_WALLET_LIMIT = 100;


/***/ }),

/***/ 74517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ SharedContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40915);
/* harmony import */ var _evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70070);



const SharedContextProvider = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_base__WEBPACK_IMPORTED_MODULE_1__/* .BaseSharedUIProvider */ .bP, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_evm__WEBPACK_IMPORTED_MODULE_2__/* .EvmSharedUIProvider */ .QQ, {
            children: children
        })
    });
};


/***/ }),

/***/ 7849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "F": () => (/* binding */ InjectedDialog)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(71999);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 1 modules
var src = __webpack_require__(78144);
// EXTERNAL MODULE: ../shared-base-ui/src/index.ts
var shared_base_ui_src = __webpack_require__(53242);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(30232);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(93854);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(927);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogActions/DialogActions.js + 1 modules
var DialogActions = __webpack_require__(38175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogContent/DialogContent.js + 1 modules
var DialogContent = __webpack_require__(33347);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Dialog/Dialog.js + 1 modules
var Dialog = __webpack_require__(30397);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(17282);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(589);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.6.1_1376d0c029fe63cac75d7e36fe4212f4/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(37253);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0/node_modules/react/index.js
var react = __webpack_require__(86248);
// EXTERNAL MODULE: ../shared/src/locales/index.ts + 1 modules
var locales = __webpack_require__(29889);
// EXTERNAL MODULE: ../shared/src/contexts/base/index.ts + 1 modules
var base = __webpack_require__(40915);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(37214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.6.1_15f9e73798f83ff073fea11061a4a4f7/node_modules/@mui/icons-material/ArrowBackRounded.js
var ArrowBackRounded = __webpack_require__(23485);
;// CONCATENATED MODULE: ../shared/src/contexts/components/DialogDismissIcon.tsx

// see https://github.com/import-js/eslint-plugin-import/issues/2288
// eslint-disable-next-line import/no-deprecated



function DialogDismissIcon(props) {
    const close = /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
        color: "inherit"
    });
    const back = /*#__PURE__*/ (0,jsx_runtime.jsx)(ArrowBackRounded/* default */.Z, {});
    // see https://github.com/import-js/eslint-plugin-import/issues/2288
    // eslint-disable-next-line import/no-deprecated
    const auto = (0,useMediaQuery/* default */.Z)(`(min-width: ${(0,useTheme/* default */.Z)().breakpoints.values.sm}px)`);
    if (!props.style || props.style === 'auto') return auto ? close : back;
    if (props.style === 'back') return back;
    return close;
}

;// CONCATENATED MODULE: ../shared/src/contexts/components/InjectedDialog.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()((theme, { clean  })=>({
        dialogTitle: {
            padding: theme.spacing(1, 2),
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        dialogContent: {
            overscrollBehavior: 'contain'
        },
        dialogTitleTypography: {
            marginLeft: 6,
            verticalAlign: 'middle'
        },
        dialogCloseButton: {
            color: theme.palette.text.primary
        },
        paper: clean ? {
            width: 'auto',
            backgroundImage: 'none'
        } : {}
    })
);
function InjectedDialog(props) {
    const snsId = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUINetworkIdentifier */.Xr);
    const overwrite = (0,shared_base_ui_src/* useValueRef */.E)(base/* sharedUIComponentOverwrite */.vU);
    props = overwrite.InjectedDialog?.props?.(props) ?? props;
    const clean = snsId === src/* EnhanceableSite.Minds */.Jk.Minds || snsId === src/* EnhanceableSite.Facebook */.Jk.Facebook;
    const { dialogActions , dialogCloseButton , dialogContent , dialogTitle , dialogTitleTypography , dialogBackdropRoot , container: container1 , ...dialogClasses } = (0,entry/* useStylesExtends */.Bc)(useStyles({
        clean
    }), props, overwrite.InjectedDialog?.classes);
    const t = (0,locales/* useSharedI18N */.B)();
    const fullScreen = (0,useMediaQuery/* default */.Z)((0,useTheme/* default */.Z)().breakpoints.down('xs'));
    const isDashboard = (0,src/* isDashboardPage */.K2)();
    const { children , open , disableBackdropClick , titleBarIconStyle , onClose , title , titleTail =null , disableTitleBorder , ...rest } = props;
    const actions = CopyElementWithNewProps(children, DialogActions/* default */.Z, {
        root: dialogActions
    });
    const content = CopyElementWithNewProps(children, DialogContent/* default */.Z, {
        root: dialogContent
    });
    const { extraProps , shouldReplaceExitWithBack , IncreaseStack  } = (0,entry/* useDialogStackActor */.tE)(open);
    return (0,entry/* usePortalShadowRoot */.ad)((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IncreaseStack, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Dialog/* default */.Z, {
                container: container,
                fullScreen: fullScreen,
                classes: dialogClasses,
                scroll: "paper",
                fullWidth: true,
                maxWidth: "sm",
                disableAutoFocus: true,
                disableEnforceFocus: true,
                onClose: (event, reason)=>{
                    if (reason === 'backdropClick' && disableBackdropClick) return;
                    onClose?.();
                },
                onBackdropClick: disableBackdropClick ? void 0 : onClose,
                BackdropProps: {
                    classes: {
                        root: dialogBackdropRoot
                    }
                },
                ...rest,
                ...extraProps,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(shared_base_ui_src/* ErrorBoundary */.SV, {
                    children: [
                        title ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(DialogTitle/* default */.Z, {
                            className: "dashboard-dialog-title-hook",
                            classes: {
                                root: dialogTitle
                            },
                            style: {
                                border: isDashboard || disableTitleBorder ? 'none' : undefined,
                                fontSize: isDashboard ? 24 : undefined
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                                    size: "large",
                                    classes: {
                                        root: dialogCloseButton
                                    },
                                    "aria-label": t.dialog_dismiss(),
                                    onClick: onClose,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(DialogDismissIcon, {
                                        style: shouldReplaceExitWithBack && !isDashboard ? 'back' : titleBarIconStyle
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                                    className: dialogTitleTypography,
                                    display: "inline",
                                    variant: "inherit",
                                    children: title
                                }),
                                titleTail
                            ]
                        }) : null,
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {}),
                        content,
                        actions
                    ]
                })
            })
        })
    );
}
function CopyElementWithNewProps(children, Target, // @ts-ignore
extraClasses) {
    return (react.Children.map(children, (child)=>child?.type === Target ? /*#__PURE__*/ (0,react.cloneElement)(child, {
            classes: (0,entry/* mergeClasses */.ze)(extraClasses, child.props.classes)
        }) : null
    ) || []).filter(Boolean);
}


/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BV": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_2__.BV),
/* harmony export */   "B_": () => (/* reexport safe */ _locales__WEBPACK_IMPORTED_MODULE_4__.B),
/* harmony export */   "Fl": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.Fl),
/* harmony export */   "IR": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.IR),
/* harmony export */   "Kv": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_2__.Kv),
/* harmony export */   "QE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.QE),
/* harmony export */   "QL": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.QL),
/* harmony export */   "T1": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.T1),
/* harmony export */   "T3": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.T3),
/* harmony export */   "Tv": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.Tv),
/* harmony export */   "XB": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.XB),
/* harmony export */   "Xr": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.Xr),
/* harmony export */   "bO": () => (/* reexport safe */ _wallet__WEBPACK_IMPORTED_MODULE_2__.bO),
/* harmony export */   "fN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.fN),
/* harmony export */   "iD": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_1__.iD),
/* harmony export */   "il": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.il),
/* harmony export */   "l9": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.l9),
/* harmony export */   "n2": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_6__.n2),
/* harmony export */   "o": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.o),
/* harmony export */   "p6": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.p6),
/* harmony export */   "qy": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.qy),
/* harmony export */   "s_": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.s_),
/* harmony export */   "u0": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.u0),
/* harmony export */   "vU": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.vU),
/* harmony export */   "xR": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.xR),
/* harmony export */   "xl": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.xl),
/* harmony export */   "yC": () => (/* reexport safe */ _UI__WEBPACK_IMPORTED_MODULE_3__.yC),
/* harmony export */   "yQ": () => (/* reexport safe */ _contexts__WEBPACK_IMPORTED_MODULE_0__.yQ)
/* harmony export */ });
/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24723);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47745);
/* harmony import */ var _wallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35070);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16961);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29889);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9555);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44459);









/***/ }),

/***/ 19937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(927);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93770);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _applyToDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52558);




function CSSVariableInjector(props) {
    const { current: useConsistentTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.useTheme || _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const colorScheme = useConsistentTheme().palette.mode;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        styles: (0,_applyToDOM__WEBPACK_IMPORTED_MODULE_2__/* .CSSVariableInjectorCSS */ .P)(colorScheme)
    });
}


/***/ }),

/***/ 6009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MaskColorVar),
/* harmony export */   "n": () => (/* binding */ getMaskColor)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34936);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94919);


function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return _constants__WEBPACK_IMPORTED_MODULE_0__/* .DarkColor */ .I;
    return _constants__WEBPACK_IMPORTED_MODULE_0__/* .LightColor */ .C;
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

/***/ 57208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useDialogStackActor)
/* harmony export */ });
/* unused harmony export DialogStackingProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);


const StackingScopeEnabled = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
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
    const selfID = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Math.random());
    const featureEnabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(StackingScopeEnabled);
    const { level: upperLevel , onHideChange  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Stack);
    // this is an object that stores all request hiding state of it's decedents.
    // e.g for component tree:
    // <Dialog1> (selfID=0)
    // ---- <Dialog2> (selfID=1)
    // ---- <Dialog3> (selfID=2)
    //
    // When dialog2 opened, it will set hide of Dialog1 to { 1: true }
    // If any value in hide is true, it means one of it decedents requested to hide this parent.
    const [hide1, setHide] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const LatestOnHideChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(onHideChange);
    LatestOnHideChange.current = onHideChange;
    // Here we rely on the assumption that level is impossible to change.
    // because it requires a reorder in the component tree, which is not possible to happen
    // in React's reconciliation algorithm
    const Increase = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    if (!Increase.current) {
        Increase.current = function IncreaseStackLevel(props) {
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Stack.Provider, {
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
            });
        };
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!featureEnabled) return LatestOnHideChange.current(false);
        LatestOnHideChange.current(open);
    }, [
        featureEnabled,
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
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
    return /*#__PURE__*/ _jsx(StackingScopeEnabled.Provider, {
        children: props.children,
        value: !props.disabled
    });
}


/***/ }),

/***/ 44352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pL": () => (/* reexport */ FolderTabs/* FolderTabPanel */.p),
  "Jc": () => (/* reexport */ FolderTabs/* FolderTabs */.J),
  "Df": () => (/* reexport */ Dialog/* MaskDialog */.D),
  "b4": () => (/* reexport */ LoadingButton/* MaskLoadingButton */.b),
  "FU": () => (/* reexport */ TextField/* MaskTextField */.F),
  "xV": () => (/* reexport */ SearchableList/* SearchableList */.x),
  "wT": () => (/* reexport */ Snackbar/* SnackbarProvider */.wT),
  "Ii": () => (/* reexport */ Snackbar/* useCustomSnackbar */.Ii),
  "tE": () => (/* reexport */ DialogStack/* useDialogStackActor */.t)
});

// UNUSED EXPORTS: ButtonGroupTabList, ButtonTab, CountdownButton, CustomSnackbarContent, CustomSnackbarProvider, DialogStackingProvider, MaskDialogTitle, MaskSearchableItemInList, PhoneNumberField, SendingCodeField, useMaskDialog, useSnackbar

// EXTERNAL MODULE: ../theme/src/Components/Dialogs/Dialog.tsx
var Dialog = __webpack_require__(53637);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogTitle.tsx
var DialogTitle = __webpack_require__(22581);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(57208);
;// CONCATENATED MODULE: ../theme/src/Components/Dialogs/index.ts




// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/index.ts + 2 modules
var ButtonGroupTab = __webpack_require__(9183);
// EXTERNAL MODULE: ../theme/src/Components/FolderTabs/index.tsx
var FolderTabs = __webpack_require__(33058);
// EXTERNAL MODULE: ../theme/src/Components/Snackbar/index.tsx
var Snackbar = __webpack_require__(99685);
// EXTERNAL MODULE: ../theme/src/Components/SearchableList/index.ts + 2 modules
var SearchableList = __webpack_require__(68897);
// EXTERNAL MODULE: ../theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(27381);
// EXTERNAL MODULE: ../theme/src/Components/CountdownButton/index.tsx
var CountdownButton = __webpack_require__(98408);
// EXTERNAL MODULE: ../theme/src/Components/SendingCodeField/index.tsx
var SendingCodeField = __webpack_require__(68393);
// EXTERNAL MODULE: ../theme/src/Components/PhoneNumberField/index.tsx
var PhoneNumberField = __webpack_require__(68381);
// EXTERNAL MODULE: ../theme/src/Components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(4744);
;// CONCATENATED MODULE: ../theme/src/Components/index.ts












/***/ }),

/***/ 13888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39688);

/* eslint-disable react-hooks/rules-of-hooks */ 

let mountingPoint;
let mountingShadowRoot;
function setupPortalShadowRoot(init) {
    if (mountingShadowRoot) return mountingShadowRoot;
    mountingShadowRoot = document.body.appendChild(document.createElement('div')).attachShadow(init);
    mountingPoint = mountingShadowRoot.appendChild(document.createElement('div'));
    return mountingShadowRoot;
}
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
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .DisableShadowRootContext */ .AZ)).current;
    // we ignore the changes on this property during multiple render
    // so we can violates the React hooks rule and still be safe.
    if (disabled) return renderer(undefined);
    const sheets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .StyleSheetsContext */ .EP);
    const signal = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const preventEventPropagationList = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_2__/* .PreventEventPropagationListContext */ .gt);
    const { container: container1  } = useRefInit(()=>{
        signal.current = new AbortController();
        const portal = PortalShadowRoot();
        const root = document.createElement('div');
        root.dataset.portalShadowRoot = '';
        const shadow = root.attachShadow({
            mode: 'open'
        });
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of preventEventPropagationList){
            shadow.addEventListener(each, stop, {
                signal: signal.current.signal
            });
        }
        const container = shadow.appendChild(document.createElement('main'));
        sheets.map((x)=>x.addContainer(shadow)
        );
        // This is proved to be important to the correct portal orders...
        Object.defineProperty(container, 'appendChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                if (!root.parentElement) portal.appendChild(root);
                Node.prototype.appendChild.call(container, child);
                return child;
            }
        });
        Object.defineProperty(container, 'removeChild', {
            configurable: true,
            writable: true,
            value: (child)=>{
                Node.prototype.removeChild.call(container, child);
                if (container.childElementCount === 0) portal.removeChild(root);
                return child;
            }
        });
        return {
            container
        };
    });
    return renderer(container1);
}
function createShadowRootForwardedComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    });
}
function createShadowRootForwardedPopperComponent(Component) {
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
                ...props,
                PopperProps: {
                    container,
                    ...props.PopperProps
                },
                ref: ref
            });
        });
    });
}
/**
 * ! Do not export !
 */ function PortalShadowRoot() {
    if (location.protocol.includes('extension')) return document.body;
    if (globalThis.location.hostname === 'localhost') return document.body;
    if (!mountingPoint) throw new TypeError('Please call setupPortalShadowRoot first');
    return mountingPoint;
}
function useRefInit(f) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}


/***/ }),

/***/ 11432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export ShadowRootIsolation */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93463);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39688);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10481);

/* eslint-disable react-hooks/rules-of-hooks */ 



/**
 * Render it's children inside a ShadowRoot to provide style isolation.
 */ function ShadowRootIsolation({ children , ...props }) {
    const disabled = useRef(useContext(DisableShadowRootContext)).current;
    if (disabled) return /*#__PURE__*/ _jsx("span", {
        ...props,
        children: children
    });
    const [dom, setDOM] = useState();
    const container = useRef();
    if (!container.current) {
        container.current = document.createElement('div');
    }
    useLayoutEffect(()=>{
        if (!dom) return;
        if (dom.shadowRoot) return;
        const shadow = dom.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(container.current);
    }, [
        dom
    ]);
    if (!dom?.shadowRoot) return /*#__PURE__*/ _jsx("span", {
        ...props,
        ref: (x)=>x !== dom ? setDOM(x) : undefined
    });
    return /*#__PURE__*/ _jsx("span", {
        ...props,
        children: /*#__PURE__*/ _jsx(ShadowRootStyleProvider, {
            shadow: dom.shadowRoot,
            children: /*#__PURE__*/ createPortal(children, container.current)
        })
    });
}


/***/ }),

/***/ 60549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ StyleSheet)
/* harmony export */ });
const shadowHeadMap = new WeakMap();
const constructableStyleSheetEnabled = true;
// There are 2 rendering mode of this ShadowRootStyleSheet.
// 1. If the host supports ConstructableStyleSheet proposal:
//      It is the fastest but only Chrome supports it.
// 2. style tags that being synchronize between all ShadowRoot.
//      See https://github.com/emotion-js/emotion/blob/main/packages/sheet/src/index.js
//      Note: We cannot use .sheet.insertRule (so called "speedy mode") because in our app,
//            the host of a ShadowRoot might be detached from the DOM and reattach to another place,
//            when a <style> tag is disconnected from the DOM, it's CSSStyleSheet object will be dropped.
class StyleSheet {
    addContainer(container) {
        this.implementation.addContainer(container, this.key);
    }
    hydrate() {
        throw new Error('Does not support SSR.');
    }
    insert(rule) {
        if (false) {}
        this.implementation.insert(rule);
    }
    flush() {
        this.implementation.flush();
        this._alreadyInsertedOrderInsensitiveRule = false;
    }
    constructor(options){
        // Unlucky, emotion will create it's own StyleSheet and use isSpeedy, tags, keys and container for Global components.
        this.tags = [];
        this.container = document.createElement('div');
        this.isSpeedy = false;
        this._alreadyInsertedOrderInsensitiveRule = false;
        this.key = options.key;
        if (options.container instanceof ShadowRoot) {
            this.implementation = constructableStyleSheetEnabled && 'adoptedStyleSheets' in Document.prototype ? new ConstructableStyleSheet() : new SynchronizeStyleSheet();
            this.addContainer(options.container);
            Reflect.set(this.container, 'sheet', this);
        } else {
            // global style
            const un_global = Reflect.get(options.container, 'sheet');
            if (!(un_global instanceof StyleSheet)) throw new TypeError();
            return {
                tags: [],
                key: options.key,
                insert: un_global.implementation.insertGlobal.bind(un_global.implementation),
                flush: un_global.implementation.flushGlobal.bind(un_global.implementation)
            };
        }
    }
}
class ConstructableStyleSheet {
    addContainer(container) {
        if (this.added.has(container)) return;
        this.added.add(container);
        container.adoptedStyleSheets = [
            this.globalSheet,
            ...container.adoptedStyleSheets || [],
            this.sheet
        ];
    }
    insert(rule) {
        insertRuleSpeedy(this.sheet, rule);
    }
    insertGlobal(rule) {
        insertRuleSpeedy(this.globalSheet, rule);
    }
    flush() {
        this.sheet.replaceSync('');
    }
    flushGlobal() {
        this.globalSheet.replaceSync('');
    }
    constructor(){
        this.sheet = new CSSStyleSheet();
        this.globalSheet = new CSSStyleSheet();
        this.added = new WeakSet();
    }
}
class SynchronizeStyleSheet {
    addContainer(container, tag) {
        if (this.containers.has(container)) return;
        // setup tags
        const head = getShadowRootHead(container);
        const localContainer = document.createElement('div');
        localContainer.dataset.styleContainer = tag;
        head.appendChild(localContainer);
        this.containers.set(container, localContainer);
        {
            const style = createStyleElement();
            style.dataset.globalStyleOf = tag;
            head.insertBefore(style, head.firstChild);
            this.globalStyles.set(container, style);
        }
        // copy styles
        const first = this.containers.entries().next();
        if (first.done) return; // there is no previous styles. we are done.
        const frag = document.createDocumentFragment();
        for (const x of first.value[1].children){
            frag.appendChild(x.cloneNode(true));
        }
        localContainer.appendChild(frag);
    }
    insert(rule) {
        if (this.ctr % 25 === 0) {
            this._insertTag();
        }
        for (const container of this.containers.values()){
            const tag = container.lastElementChild;
            tag.appendChild(document.createTextNode(rule));
        }
        this.ctr += 1;
    }
    insertGlobal(rule) {
        for (const style of this.globalStyles.values()){
            style.appendChild(document.createTextNode(rule));
        }
    }
    flush() {
        for (const container of this.containers.values()){
            for (const tag of container.children){
                tag.remove();
            }
        }
        this.ctr = 0;
    }
    flushGlobal() {
        this.globalStyles.forEach((x)=>x.innerText = ''
        );
    }
    constructor(){
        this.ctr = 0;
        this.containers = new Map();
        this._insertTag = ()=>{
            for (const container of this.containers.values()){
                container.appendChild(createStyleElement());
            }
        };
        this.globalStyles = new Map();
    }
}
function getShadowRootHead(shadow) {
    if (!shadowHeadMap.has(shadow)) {
        const head = document.createElement('head');
        shadowHeadMap.set(shadow, head);
        shadow.insertBefore(head, shadow.firstChild);
    }
    return shadowHeadMap.get(shadow);
}
function createStyleElement() {
    const tag = document.createElement('style');
    tag.appendChild(document.createTextNode(''));
    return tag;
}
function insertRuleSpeedy(sheet, rule) {
    try {
        sheet.insertRule(rule, sheet.cssRules.length);
    } catch (error) {
        if (false) {}
    }
}


/***/ }),

/***/ 69378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createReactRootShadowedPartial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83230);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21122);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10481);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39688);






/**
 * @returns
 * A function that render the JSX in the ShadowRoot with emotion support.
 *
 * This function should be only call once for each config.key.
 */ function createReactRootShadowedPartial(hostConfig) {
    return function createReactRootShadowed(shadowRoot, options = {}) {
        let jsx = '';
        let root = null;
        function tryRender() {
            if (options.signal?.aborted) return;
            if (shadowRoot.host?.parentNode === null) return void setTimeout(tryRender, 20);
            root = mount(jsx, shadowRoot, options, hostConfig);
        }
        tryRender();
        return {
            render: (_jsx1)=>{
                if (!root) jsx = _jsx1;
                else root.render(_jsx1);
            },
            destroy: ()=>root?.destroy()
        };
    };
}
function mount(jsx1, shadow, options, { preventEventPropagationList , wrapJSX  }) {
    const tag = options.tag || 'main';
    const key = options.key || 'main';
    if (shadow.querySelector(`${tag}.${key}`)) {
        console.error('Tried to create root in', shadow, 'with key', key, ' which is already used. Skip rendering.');
        return {
            destroy: lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            render: lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
        };
    }
    jsx1 = getJSX(jsx1);
    const container = shadow.appendChild(document.createElement(tag));
    container.className = key;
    const controller = new AbortController();
    const signal = controller.signal;
    // prevent event popup
    {
        const stop = (e)=>e.stopPropagation()
        ;
        for (const each of preventEventPropagationList){
            container.addEventListener(each, stop, {
                signal
            });
        }
    }
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__/* .createRoot */ .s)(container);
    root.render(jsx1);
    signal.addEventListener('abort', ()=>[
            root.unmount(),
            container.remove()
        ]
    , {
        signal
    });
    options.signal?.addEventListener('abort', ()=>controller.abort()
    , {
        signal
    });
    return {
        destroy: ()=>controller.abort()
        ,
        render: (jsx)=>{
            root.render(getJSX(jsx));
        }
    };
    function getJSX(jsx) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts__WEBPACK_IMPORTED_MODULE_4__/* .PreventEventPropagationListContext.Provider */ .gt.Provider, {
                value: preventEventPropagationList,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootStyleProvider */ .q, {
                    shadow: shadow,
                    children: wrapJSX ? wrapJSX(jsx) : jsx
                })
            })
        });
    }
}


/***/ }),

/***/ 82502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _Portal__WEBPACK_IMPORTED_MODULE_1__.d_),
/* harmony export */   "zV": () => (/* reexport safe */ _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _createReactRootShadowed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69378);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13888);
/* harmony import */ var _ShadowRootIsolation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11432);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39688);






/***/ }),

/***/ 68350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "um": () => (/* reexport */ Appearance),
  "R_": () => (/* reexport */ Provider/* MaskThemeProvider */.R)
});

// UNUSED EXPORTS: MaskDarkTheme, MaskLightTheme

;// CONCATENATED MODULE: ../theme/src/Theme/types.ts
var Appearance;
(function(Appearance) {
    Appearance["default"] = "default";
    Appearance["light"] = "light";
    Appearance["dark"] = "dark";
})(Appearance || (Appearance = {}));

// EXTERNAL MODULE: ../theme/src/Theme/Provider.tsx
var Provider = __webpack_require__(76584);
// EXTERNAL MODULE: ../theme/src/Theme/theme.ts
var theme = __webpack_require__(3482);
;// CONCATENATED MODULE: ../theme/src/Theme/index.ts





/***/ }),

/***/ 81242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.Bc),
/* harmony export */   "F4": () => (/* reexport safe */ tss_react__WEBPACK_IMPORTED_MODULE_1__.F4),
/* harmony export */   "I3": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.I3),
/* harmony export */   "R_": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "US": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.US),
/* harmony export */   "ZL": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.ad),
/* harmony export */   "d_": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.d_),
/* harmony export */   "nb": () => (/* reexport safe */ _CSSVariables__WEBPACK_IMPORTED_MODULE_3__.nb),
/* harmony export */   "um": () => (/* reexport safe */ _Theme__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "zV": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__.zV),
/* harmony export */   "ze": () => (/* reexport safe */ _UIHelper__WEBPACK_IMPORTED_MODULE_2__.ze)
/* harmony export */ });
/* unused harmony export parseColor */
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32086);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13442);
/* harmony import */ var _UIHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89567);
/* harmony import */ var _CSSVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36972);
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68350);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82502);
/// <reference path="./extended.d.ts" />
// Some re-exports

const parseColor = (/* unused pure expression or super */ null && (tinyColor));

//






/***/ }),

/***/ 30232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bc": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.Bc),
/* harmony export */   "Df": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Df),
/* harmony export */   "F4": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.F4),
/* harmony export */   "FU": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.FU),
/* harmony export */   "Ii": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Ii),
/* harmony export */   "Jc": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.Jc),
/* harmony export */   "R_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "US": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.US),
/* harmony export */   "YE": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_6__.Y),
/* harmony export */   "ZL": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZL),
/* harmony export */   "ZN": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ZN),
/* harmony export */   "ad": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ad),
/* harmony export */   "b4": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.b4),
/* harmony export */   "d_": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.d_),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "nb": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.nb),
/* harmony export */   "pL": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.pL),
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper),
/* harmony export */   "tE": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.tE),
/* harmony export */   "um": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.um),
/* harmony export */   "wT": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.wT),
/* harmony export */   "xV": () => (/* reexport safe */ _Components__WEBPACK_IMPORTED_MODULE_5__.xV),
/* harmony export */   "zV": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.zV),
/* harmony export */   "ze": () => (/* reexport safe */ _entry_base__WEBPACK_IMPORTED_MODULE_4__.ze)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26405);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38090);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47205);
/* harmony import */ var _ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13888);
/* harmony import */ var _entry_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81242);
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44352);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45548);
/// <reference path="./extended.d.ts" />


const ShadowRootTooltip = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const ShadowRootMenu = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
const ShadowRootPopper = (0,_ShadowRoot_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);





/***/ }),

/***/ 90323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ez": () => (/* binding */ isCoreTypedMessages),
  "YN": () => (/* reexport */ empty/* isTypedMessageEmpty */.Y),
  "KV": () => (/* reexport */ promise/* isTypedMessagePromise */.K),
  "Rz": () => (/* reexport */ core_text/* isTypedMessageText */.Rz),
  "bZ": () => (/* reexport */ isTypedMessageTuple),
  "qT": () => (/* reexport */ isTypedMessageTupleSerializable),
  "WM": () => (/* reexport */ empty/* makeTypedMessageEmpty */.W),
  "Ng": () => (/* reexport */ promise/* makeTypedMessagePromise */.N),
  "P": () => (/* reexport */ core_text/* makeTypedMessageText */.P),
  "Zw": () => (/* reexport */ makeTypedMessageTuple),
  "kT": () => (/* reexport */ makeTypedMessageTupleSerializable),
  "mv": () => (/* reexport */ unknown/* makeTypedMessageUnknown */.m)
});

// UNUSED EXPORTS: isTypedMessageImage, isTypedMessageTextV1, isTypedMessageUnknown, makeTypedMessageImage, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleFromList

// EXTERNAL MODULE: ../typed-message/base/core/empty.ts
var empty = __webpack_require__(54552);
// EXTERNAL MODULE: ../typed-message/base/core/text.ts
var core_text = __webpack_require__(13821);
// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(76395);
;// CONCATENATED MODULE: ../typed-message/base/core/image.ts

const isTypedMessageImage = (0,internal/* createIsType */.uO)('image');
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size?.width,
        height: size?.height,
        meta
    };
}

// EXTERNAL MODULE: ../typed-message/base/utils/index.ts + 2 modules
var utils = __webpack_require__(72542);
;// CONCATENATED MODULE: ../typed-message/base/core/tuple.ts


const isTypedMessageTuple = (x)=>x.type === 'tuple'
;
const isTypedMessageTupleSerializable = (0,internal/* composeEvery */.mo)(isTypedMessageTuple, utils/* isSerializableTypedMessage */.fV);
function makeTypedMessageTuple(items, meta) {
    return {
        type: 'tuple',
        items,
        meta
    };
}
function makeTypedMessageTupleFromList(...args) {
    return {
        type: 'tuple',
        items: args
    };
}
function makeTypedMessageTupleSerializable(items, meta) {
    return {
        type: 'tuple',
        version: 1,
        serializable: true,
        items,
        meta
    };
}
function makeTypedMessageSerializableTupleFromList(...args) {
    return {
        type: 'tuple',
        version: 1,
        items: args,
        serializable: true
    };
}

// EXTERNAL MODULE: ../typed-message/base/core/unknown.ts
var unknown = __webpack_require__(76628);
// EXTERNAL MODULE: ../typed-message/base/core/promise.ts
var promise = __webpack_require__(88083);
;// CONCATENATED MODULE: ../typed-message/base/core/index.ts













const isCoreTypedMessages = (0,internal/* composeSome */.Vm)(empty/* isTypedMessageEmpty */.Y, core_text/* isTypedMessageText */.Rz, isTypedMessageImage, isTypedMessageTuple, unknown/* isTypedMessageUnknown */.q, promise/* isTypedMessagePromise */.K);


/***/ }),

/***/ 25114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bj": () => (/* reexport */ isTypedMessageAnchor),
  "$6": () => (/* reexport */ MaskPayload/* isTypedMessageMaskPayload */.$),
  "SY": () => (/* binding */ isWellKnownExtensionTypedMessages),
  "Jq": () => (/* reexport */ MaskPayload/* makeTypedMessageMaskPayload */.J)
});

// UNUSED EXPORTS: makeTypedMessageAnchor

// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(76395);
// EXTERNAL MODULE: ../typed-message/base/core/index.ts + 2 modules
var core = __webpack_require__(90323);
;// CONCATENATED MODULE: ../typed-message/base/extension/anchor.ts


const isTypedMessageAnchor = (0,internal/* createIsType */.uO)('x-anchor');
function makeTypedMessageAnchor(category, href, content) {
    return {
        type: 'x-anchor',
        serializable: false,
        category,
        href,
        content,
        alt: makeTypedMessageText(`[${content}](${href})`)
    };
}

// EXTERNAL MODULE: ../typed-message/base/extension/MaskPayload.ts
var MaskPayload = __webpack_require__(25376);
;// CONCATENATED MODULE: ../typed-message/base/extension/index.ts





const isWellKnownExtensionTypedMessages = (0,internal/* composeSome */.Vm)(isTypedMessageAnchor, MaskPayload/* isTypedMessageMaskPayload */.$);


/***/ }),

/***/ 81148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ utils/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ utils/* createTypedMessageMetadataReader */.Bi),
  "Ab": () => (/* reexport */ binary_encode/* decodeTypedMessageFromDocument */.A),
  "WR": () => (/* reexport */ deprecated_encode/* decodeTypedMessageV38ToV40Format */.W),
  "F9": () => (/* reexport */ binary_encode/* encodeTypedMessageToDocument */.F),
  "Hu": () => (/* reexport */ deprecated_encode/* encodeTypedMessageV38Format */.H),
  "Vc": () => (/* reexport */ utils/* extractTextFromTypedMessage */.Vc),
  "Rz": () => (/* reexport */ core/* isTypedMessageText */.Rz),
  "P": () => (/* reexport */ core/* makeTypedMessageText */.P)
});

// UNUSED EXPORTS: FlattenTypedMessage, ParseLinkTransformer, composeTransformers, createMaskPayloadTransform, createTransformationContext, editMetadata, editTypedMessageMeta, emptyTransformationContext, extractImageFromTypedMessage, forEachTypedMessageChild, getKnownMetadataKeys, getMetadataSchema, isCoreTypedMessages, isDataMatchJSONSchema, isNonSerializableTypedMessageWithAlt, isSerializableTypedMessage, isTypedMessageAnchor, isTypedMessageEmpty, isTypedMessageEqual, isTypedMessageImage, isTypedMessageMaskPayload, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownExtensionTypedMessages, isWellKnownTypedMessages, makeTypedMessageAnchor, makeTypedMessageEmpty, makeTypedMessageImage, makeTypedMessageMaskPayload, makeTypedMessagePromise, makeTypedMessageSerializableTupleFromList, makeTypedMessageTuple, makeTypedMessageTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped, visitEachTypedMessageChild

// EXTERNAL MODULE: ../typed-message/base/core/index.ts + 2 modules
var core = __webpack_require__(90323);
// EXTERNAL MODULE: ../typed-message/base/extension/index.ts + 1 modules
var extension = __webpack_require__(25114);
// EXTERNAL MODULE: ../typed-message/base/binary-encode/index.ts + 3 modules
var binary_encode = __webpack_require__(88904);
// EXTERNAL MODULE: ../typed-message/base/deprecated-encode/index.ts
var deprecated_encode = __webpack_require__(68496);
// EXTERNAL MODULE: ../typed-message/base/utils/index.ts + 2 modules
var utils = __webpack_require__(72542);
// EXTERNAL MODULE: ../typed-message/base/visitor/index.ts + 1 modules
var visitor = __webpack_require__(37725);
// EXTERNAL MODULE: ../typed-message/base/transformer/context.ts
var context = __webpack_require__(6596);
// EXTERNAL MODULE: ../typed-message/base/transformer/Flatten.ts
var Flatten = __webpack_require__(28722);
// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var utils_parseLink = __webpack_require__(81790);
;// CONCATENATED MODULE: ../typed-message/base/transformer/ParseLink.ts




function ParseLinkTransformer(message, context) {
    if (isTypedMessageText(message)) {
        const parsed = parseLink(message.content);
        if (parsed.length === 1 && parsed[0].type === 'text') return message;
        return makeTypedMessageTupleSerializable(parsed.map((i)=>{
            if (i.type === 'text') return makeTypedMessageText(i.content);
            return makeTypedMessageAnchor(i.category, i.content, i.content);
        }), message.meta);
    }
    return visitEachTypedMessageChild(message, ParseLinkTransformer, context);
}

// EXTERNAL MODULE: ../typed-message/base/transformer/MaskPayload/index.ts
var MaskPayload = __webpack_require__(78727);
;// CONCATENATED MODULE: ../typed-message/base/transformer/index.ts






// EXTERNAL MODULE: ../typed-message/base/utils/internal.ts
var internal = __webpack_require__(76395);
;// CONCATENATED MODULE: ../typed-message/base/index.ts











const isWellKnownTypedMessages = (0,internal/* composeSome */.Vm)(core/* isCoreTypedMessages */.ez, extension/* isWellKnownExtensionTypedMessages */.SY);


/***/ }),

/***/ 28722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export FlattenTypedMessage */
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90323);
/* harmony import */ var _visitor_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37725);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72542);
/* harmony import */ var _context_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6596);




function FlattenTypedMessage(message, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .KV)(message) && message.promise.value) return message.promise.value;
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(message)) {
        const next = message.items.map((x)=>FlattenTypedMessage(x, context)
        ).flatMap((x)=>(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(x) ? x.meta ? x : x.items : x
        ).filter((x)=>!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageEmpty */ .YN)(x)
        ).reduce((result, current)=>{
            const lastItem = result.at(-1);
            if (!lastItem || lastItem.meta || current.meta) return result.concat(current);
            if (!(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(current) || !(0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(lastItem)) return result.concat(current);
            // Only concat when last one and current one are both text and have no meta.
            result.pop();
            result.push((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(`${lastItem.content} ${current.content}`));
            return result;
        }, []);
        if (!message.meta) {
            if (next.length === 0) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageEmpty */ .WM)();
            if (next.length === 1) return next[0];
        }
        if (next.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isSerializableTypedMessage */ .fV)) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTupleSerializable */ .kT)(next, message.meta);
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(next, message.meta);
    }
    return (0,_visitor_index_js__WEBPACK_IMPORTED_MODULE_1__/* .visitEachTypedMessageChild */ .I)(message, FlattenTypedMessage, context);
}
FlattenTypedMessage.NoContext = (message)=>FlattenTypedMessage(message, _context_js__WEBPACK_IMPORTED_MODULE_3__/* .emptyTransformationContext */ .v)
;


/***/ }),

/***/ 72542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ createRenderWithMetadata),
  "Bi": () => (/* reexport */ createTypedMessageMetadataReader),
  "Vc": () => (/* reexport */ extractTextFromTypedMessage),
  "c3": () => (/* binding */ isNonSerializableTypedMessageWithAlt),
  "fV": () => (/* binding */ isSerializableTypedMessage)
});

// UNUSED EXPORTS: editMetadata, editTypedMessageMeta, extractImageFromTypedMessage, getKnownMetadataKeys, getMetadataSchema, isDataMatchJSONSchema, isTypedMessageEqual, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var esm = __webpack_require__(48160);
// EXTERNAL MODULE: ../../node_modules/.pnpm/z-schema@5.0.3/node_modules/z-schema/src/ZSchema.js
var ZSchema = __webpack_require__(63740);
var ZSchema_default = /*#__PURE__*/__webpack_require__.n(ZSchema);
// EXTERNAL MODULE: ../../node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js
var immer_esm = __webpack_require__(60232);
;// CONCATENATED MODULE: ../typed-message/base/utils/metadata.ts



(0,immer_esm/* enableMapSet */.MD)();
const metadataSchemaStore = new Map();
function getKnownMetadataKeys() {
    return [
        ...metadataSchemaStore.keys()
    ];
}
function getMetadataSchema(key) {
    return metadataSchemaStore.has(key) ? Some(metadataSchemaStore.get(key)) : None;
}
/**
 * Register your metadata with a JSON Schema so we can validate the schema for you.
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function registerMetadataSchema(key, jsonSchema) {
    metadataSchemaStore.set(key, jsonSchema);
}
/**
 * Create a TypedMessage metadata reader for your plugin
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 * @example
 * export const getFilePluginMetadata = createTypedMessageMetadataReader('plugin.meta.key', schema)
 * getFilePluginMetadata(meta)
 */ function createTypedMessageMetadataReader(key, jsonSchema) {
    if (jsonSchema) registerMetadataSchema(key, jsonSchema);
    return (meta)=>readTypedMessageMetadataUntyped(meta, key)
    ;
}
/**
 * The raw parser of metadata reader
 * @param meta Metadata object
 * @param key Metadata key
 * @param jsonSchema JSON Schema to validate the metadata
 */ function readTypedMessageMetadataUntyped(meta, key, jsonSchema) {
    if (!meta) return esm/* Err.EMPTY */.UG.EMPTY;
    if (!meta.has(key)) return esm/* Err.EMPTY */.UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return esm/* Err.EMPTY */.UG.EMPTY;
        }
    }
    return (0,esm.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (ZSchema_default())({});
    if (!validator.validate(data, jsonSchema)) return (0,esm/* Err */.UG)(validator.getLastErrors());
    return esm.Ok.EMPTY;
}
/**
 * Create a render of Metadata.
 * @param metadataReader A metadata reader (can be return value of createTypedMessageMetadataReader)
 */ function createRenderWithMetadata(metadataReader) {
    return (metadata, render)=>{
        const message = metadataReader(metadata);
        if (message.ok) return render(message.val);
        return null;
    };
}
function editMetadata(metadata, edit) {
    return draft(metadata || new Map(), (e)=>void edit(e)
    );
}
function editTypedMessageMeta(typedMessage, edit) {
    const meta = editMetadata(typedMessage.meta, edit);
    return {
        ...typedMessage,
        meta: meta.size === 0 ? undefined : meta
    };
}
/**
 * Render with metadata
 * @param metadata Metadata
 * @param key Metadata key
 * @param render The render
 * @param jsonSchema JSON Schema to validate the metadata
 */ function renderWithMetadataUntyped(metadata, key, render, jsonSchema) {
    const message = readTypedMessageMetadataUntyped(metadata, key, jsonSchema);
    if (message.ok) return render(message.val);
    return null;
}

// EXTERNAL MODULE: ../typed-message/base/core/index.ts + 2 modules
var core = __webpack_require__(90323);
// EXTERNAL MODULE: ../typed-message/base/extension/index.ts + 1 modules
var extension = __webpack_require__(25114);
// EXTERNAL MODULE: ../typed-message/base/visitor/index.ts + 1 modules
var base_visitor = __webpack_require__(37725);
;// CONCATENATED MODULE: ../typed-message/base/utils/extract.ts




/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message1, options) {
    if (!message1) return esm/* None */.Hq;
    const text = [];
    function visitor(message) {
        if ((0,core/* isTypedMessageText */.Rz)(message)) text.push(message.content);
        else if ((0,extension/* isTypedMessageAnchor */.bj)(message)) {
            text.push(message.content);
            if (options?.linkAsText) text.push(`(${message.href})`);
        } else (0,base_visitor/* forEachTypedMessageChild */.s)(message, visitor);
    }
    visitor(message1);
    (0,base_visitor/* forEachTypedMessageChild */.s)(message1, visitor);
    if (text.length) return (0,esm/* Some */.bD)(text.join(' '));
    return esm/* None */.Hq;
}
function extractImageFromTypedMessage(message2) {
    if (!message2) return [];
    const image = [];
    function visitor(message) {
        if (isTypedMessageImage(message)) return void image.push(message.image);
        return forEachTypedMessageChild(message, visitor);
    }
    visitor(message2);
    forEachTypedMessageChild(message2, visitor);
    return image;
}

;// CONCATENATED MODULE: ../typed-message/base/utils/index.ts



function isNonSerializableTypedMessageWithAlt(x) {
    const y = x;
    if (y.serializable !== false) return false;
    if (!y.alt) return false;
    return isSerializableTypedMessage(y.alt);
}
function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    return isNonSerializableTypedMessageWithAlt(x);
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    // perform a deep equal
    return isEqual(message1, message2);
}


/***/ }),

/***/ 81790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export parseLink */
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseLink(text) {
    // ESM-CJS cooperation
    const parsed = anchorme.list(text);
    const result = [];
    let start = 0;
    for (const x1 of parsed){
        if (x1.isURL) {
            result.push({
                type: 'text',
                content: text.slice(start, x1.start)
            });
            result.push({
                type: 'link',
                content: x1.string,
                category: 'normal'
            });
        } else {
            result.push({
                type: 'text',
                content: text.slice(start, x1.end)
            });
        }
        start = x1.end;
    }
    result.push({
        type: 'text',
        content: text.slice(start, text.length)
    });
    return result.filter((x)=>x.content
    ).flatMap((x)=>x.type === 'text' ? parseTag(x.content) : x
    );
}
const TagLike = /([#$@][\w\-]+)/g;
const map = {
    '@': 'user',
    '#': 'hash',
    $: 'cash'
};
function parseTag(x2) {
    return x2.split(TagLike).map((x)=>TagLike.test(x) ? {
            type: 'link',
            content: x,
            category: map[x[0]] || 'normal'
        } : {
            type: 'text',
            content: x
        }
    );
}


/***/ }),

/***/ 80246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ visitEachTypedMessageChild)
/* harmony export */ });
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90323);
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72542);
/* harmony import */ var _extension_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25114);



function visitEachTypedMessageChild(node, visitor, context) {
    if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(node)) {
        const after = node.items.flatMap((x)=>{
            const next = visitor(x, context);
            if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageTuple */ .bZ)(next)) return next.items;
            return next;
        });
        if (after.every(_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)) {
            return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTupleSerializable */ .kT)(after, node.meta);
        }
        return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageTuple */ .Zw)(after, node.meta);
    } else if ((0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessagePromise */ .KV)(node)) {
        // we ignore alt if promise is resolved.
        if (node.promise.value) return visitor(node.promise.value, context);
        else if (node.alt) return (0,_core_index_js__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessagePromise */ .Ng)(node.promise, visitor(node.alt, context));
        return node;
    } else if ((0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .isTypedMessageMaskPayload */ .$6)(node)) {
        const next = visitor(node.message, context);
        return (0,_extension_index_js__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageMaskPayload */ .Jq)(next, node.meta);
    } else if ((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isNonSerializableTypedMessageWithAlt */ .c3)(node)) {
        const alt = visitor(node.alt, context);
        if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializableTypedMessage */ .fV)(alt)) {
            console.warn('[@masknet/typed-message] You must return a serializable message in this position. Original:', node, 'Transformed child "alt":', alt);
            // ignore the transform result
            return node;
        }
        return {
            ...node,
            alt
        };
    } else {
        // return node with no child
        return node;
    }
}


/***/ }),

/***/ 92820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ TokenPrice),
/* harmony export */   "Nn": () => (/* binding */ OpenSea),
/* harmony export */   "S5": () => (/* binding */ RSS3),
/* harmony export */   "bC": () => (/* binding */ Explorer),
/* harmony export */   "bb": () => (/* reexport safe */ _opensea_utils__WEBPACK_IMPORTED_MODULE_13__.bb),
/* harmony export */   "cl": () => (/* binding */ KeyValue),
/* harmony export */   "e": () => (/* binding */ GoPlusLabs),
/* harmony export */   "e8": () => (/* binding */ Rarible),
/* harmony export */   "eE": () => (/* binding */ Zora),
/* harmony export */   "jo": () => (/* binding */ NFTScan),
/* harmony export */   "no": () => (/* binding */ TokenList),
/* harmony export */   "oD": () => (/* binding */ CoinGecko),
/* harmony export */   "q7": () => (/* binding */ NextIDProof),
/* harmony export */   "t9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_12__.t),
/* harmony export */   "tL": () => (/* binding */ Twitter),
/* harmony export */   "x4": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_11__.x)
/* harmony export */ });
/* unused harmony exports Instagram, NextIDStorage */
/* harmony import */ var _coingecko__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(50443);
/* harmony import */ var _opensea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89703);
/* harmony import */ var _rarible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35825);
/* harmony import */ var _NFTScan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71607);
/* harmony import */ var _zora__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34049);
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89958);
/* harmony import */ var _rss3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43568);
/* harmony import */ var _kv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58106);
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79863);
/* harmony import */ var _token_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70809);
/* harmony import */ var _token_price__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95624);
/* harmony import */ var _instagram__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59654);
/* harmony import */ var _gopluslabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(56525);
/* harmony import */ var _NextID__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(64242);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(41054);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9030);
/* harmony import */ var _opensea_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(80529);
/* harmony import */ var _debank__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(97051);


















const OpenSea = new _opensea__WEBPACK_IMPORTED_MODULE_0__/* .OpenSeaAPI */ .rQ();
const Rarible = new _rarible__WEBPACK_IMPORTED_MODULE_1__/* .RaribleAPI */ .I();
const NFTScan = new _NFTScan__WEBPACK_IMPORTED_MODULE_2__/* .NFTScanAPI */ .Ur();
const Zora = new _zora__WEBPACK_IMPORTED_MODULE_3__/* .ZoraAPI */ .c();
const CoinGecko = new _coingecko__WEBPACK_IMPORTED_MODULE_14__/* .CoinGeckoAPI */ .J();
const Explorer = new _explorer__WEBPACK_IMPORTED_MODULE_4__/* .NativeExplorerAPI */ .b();
const RSS3 = new _rss3__WEBPACK_IMPORTED_MODULE_5__/* .RSS3API */ .M();
const KeyValue = new _kv__WEBPACK_IMPORTED_MODULE_6__/* .KeyValueAPI */ .Z();
const Twitter = new _twitter__WEBPACK_IMPORTED_MODULE_7__/* .TwitterAPI */ .I();
const Instagram = new _instagram__WEBPACK_IMPORTED_MODULE_15__/* .InstagramAPI */ .l();
const GoPlusLabs = new _gopluslabs__WEBPACK_IMPORTED_MODULE_9__/* .GoPlusLabsAPI */ .g();
const TokenList = new _token_list__WEBPACK_IMPORTED_MODULE_8__/* .TokenListAPI */ .U();
const TokenPrice = new _token_price__WEBPACK_IMPORTED_MODULE_16__/* .TokenPriceAPI */ .J();
const NextIDStorage = new _NextID__WEBPACK_IMPORTED_MODULE_10__/* .NextIDStorageAPI */ .I();
const NextIDProof = new _NextID__WEBPACK_IMPORTED_MODULE_10__/* .NextIDProofAPI */ .N();
// Method for provider proxy






/***/ }),

/***/ 55678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "IH": () => (/* binding */ resolveProviderHomeLink),
/* harmony export */   "Po": () => (/* binding */ resolveChainName),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "YU": () => (/* binding */ resolveProviderInjectedKey),
/* harmony export */   "Yx": () => (/* binding */ resolveIPFSLinkFromURL),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "dC": () => (/* binding */ resolveProviderShortenLink),
/* harmony export */   "hX": () => (/* binding */ resolveProviderDownloadLink),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "r_": () => (/* binding */ resolveChainFullName),
/* harmony export */   "sJ": () => (/* binding */ resolveDomainLink),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer)
/* harmony export */ });
/* unused harmony exports resolveNetworkAddressPrefix, resolveCollectibleProviderLink, resolveCollectibleAssetLink, resolveOpenSeaLink */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28807);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65506);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36803);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80526);




const resolveProviderName = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'Mask Network',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'MetaMask',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'WalletConnect',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: 'CustomNetwork',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'Coin98',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'Coinbase',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'MathWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'Fortmatic'
}, 'Unknown Network');
const resolveProviderShortenLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'Mask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'Metamask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'Walletconnect.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: 'Website',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'Coin98.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'Walletlink.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'Mathwallet.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'Fortmatic.com'
}, 'website');
const resolveProviderHomeLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'https://mask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'https://metamask.io',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: 'https://walletconnect.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'https://coin98.com',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'https://walletlink.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'https://mathwallet.org',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: 'https://fortmatic.com'
}, '');
const resolveProviderDownloadLink = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'https://mask.io/download-links',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'https://metamask.io/download.html',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'https://coin98insights.com/introduction-to-coin98-wallet-extension',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'https://wallet.coinbase.com/',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'https://mathwallet.org/en-us/#extension',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: ''
}, '');
const resolveProviderInjectedKey = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MaskWallet */ .lP.MaskWallet]: 'isMaskWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MetaMask */ .lP.MetaMask]: 'isMetaMask',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletConnect */ .lP.WalletConnect]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.MathWallet */ .lP.MathWallet]: 'isMathWallet',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Coin98 */ .lP.Coin98]: 'isCoin98',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.WalletLink */ .lP.WalletLink]: 'isWalletLink',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.Fortmatic */ .lP.Fortmatic]: '',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ProviderType.CustomNetwork */ .lP.CustomNetwork]: ''
}, '');
const resolveNetworkAddressPrefix = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum]: 'ethereum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance]: 'binance',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon]: 'polygon',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai]: 'xdai',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Avalanche */ .td.Avalanche]: 'avalanche',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Celo */ .td.Celo]: 'celo',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Fantom */ .td.Fantom]: 'fantom',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Conflux */ .td.Conflux]: 'conflux'
}, 'ethereum');
const resolveNetworkName = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Ethereum */ .td.Ethereum]: 'Ethereum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Binance */ .td.Binance]: 'Binance Smart Chain',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Polygon */ .td.Polygon]: 'Polygon',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Arbitrum */ .td.Arbitrum]: 'Arbitrum',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.xDai */ .td.xDai]: 'xDai',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Avalanche */ .td.Avalanche]: 'Avalanche',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Celo */ .td.Celo]: 'Celo',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Fantom */ .td.Fantom]: 'Fantom',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Conflux */ .td.Conflux]: 'Conflux'
}, 'Unknown');
function resolveChainName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    return chainDetailed?.name ?? 'Unknown';
}
function resolveChainFullName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    return chainDetailed?.fullName ?? 'Unknown';
}
const resolveChainColor = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .createLookupTableResolver */ .F)({
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mainnet */ .a_.Mainnet]: 'rgb(28, 104, 243)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Ropsten */ .a_.Ropsten]: 'rgb(255, 65, 130)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Kovan */ .a_.Kovan]: 'rgb(133, 89,255)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby]: 'rgb(133, 89, 255)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Gorli */ .a_.Gorli]: 'rgb(48, 153, 242)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSC */ .a_.BSC]: 'rgb(240, 185, 10)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.BSCT */ .a_.BSCT]: 'rgb(240, 185, 10)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic]: 'rgb(119, 62, 225)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Mumbai */ .a_.Mumbai]: 'rgb(130, 71, 229)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum */ .a_.Arbitrum]: 'rgb(36, 150, 238)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Arbitrum_Rinkeby */ .a_.Arbitrum_Rinkeby]: 'rgb(36, 150, 238)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.xDai */ .a_.xDai]: 'rgb(73, 169, 166)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Avalanche */ .a_.Avalanche]: 'rgb(232, 65, 66)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Avalanche_Fuji */ .a_.Avalanche_Fuji]: 'rgb(232, 65, 66)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Celo */ .a_.Celo]: 'rgb(53, 208, 127)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Fantom */ .a_.Fantom]: 'rgb(19, 181, 236)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Aurora */ .a_.Aurora]: 'rgb(112, 212, 74)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Conflux */ .a_.Conflux]: 'rgb(24, 163, 138)',
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]: 'rgb(112, 212, 74)'
}, 'rgb(214, 217, 220)');
function resolveLinkOnExplorer(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) return '';
    return chainDetailed.explorers?.[0]?.url ?? chainDetailed.infoURL;
}
function resolveTransactionLinkOnExplorer(chainId, tx) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/tx/:tx', {
        tx
    });
}
function resolveTokenLinkOnExplorer({ chainId , address  }) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/token/:address', {
        address
    });
}
function resolveAddressLinkOnExplorer(chainId, address) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/address/:address', {
        address
    });
}
function resolveBlockLinkOnExplorer(chainId, block) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveLinkOnExplorer(chainId), '/block/:block', {
        block
    });
}
// TODO check ipfs inside before resolving
function resolveIPFSLink(ipfs) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://coldcdn.com/api/cdn/mipfsygtms/ipfs/:ipfs', {
        ipfs
    });
}
function resolveIPFSLinkFromURL(url) {
    if (!url.startsWith('ipfs://')) return url;
    return resolveIPFSLink(url.replace(/^ipfs:\/\/(ipfs\/)?/, ''));
}
function resolveDomainLink(domain) {
    if (!domain) return '';
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://app.ens.domains/name/:domain/details', {
        domain
    });
}
function resolveCollectibleProviderLink(chainId, provider) {
    switch(provider){
        case NonFungibleAssetProvider.OPENSEA:
            if (chainId === ChainId.Rinkeby) return 'https://testnets.opensea.io';
            return 'https://opensea.io';
        case NonFungibleAssetProvider.RARIBLE:
            return 'https://rarible.com';
        case NonFungibleAssetProvider.NFTSCAN:
            return 'https://nftscan.com';
        case NonFungibleAssetProvider.ZORA:
            return 'https://zora.co';
        default:
            unreachable(provider);
    }
}
function resolveCollectibleAssetLink(chainId, provider) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Rinkeby */ .a_.Rinkeby) return 'https://testnets.opensea.io/assets';
            if (chainId === _types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Matic */ .a_.Matic) return 'https://opensea.io/assets/matic';
            return 'https://opensea.io/assets';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.ZORA */ .pI.ZORA:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(provider);
    }
}
function resolveCollectibleLink(chainId, provider, { contractDetailed: { address  } , tokenId  }) {
    switch(provider){
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.OPENSEA */ .pI.OPENSEA:
            return urlcat__WEBPACK_IMPORTED_MODULE_0___default()(resolveCollectibleAssetLink(chainId, provider), '/:address/:tokenId', {
                address,
                tokenId
            });
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.RARIBLE */ .pI.RARIBLE:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.NFTSCAN */ .pI.NFTSCAN:
            return '';
        case _types__WEBPACK_IMPORTED_MODULE_3__/* .NonFungibleAssetProvider.ZORA */ .pI.ZORA:
            return '';
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .unreachable */ .t1)(provider);
    }
}
function resolveOpenSeaLink(address, tokenId) {
    return urlcat('https://opensea.io/assets/:address/:tokenId', {
        address,
        tokenId
    });
}


/***/ }),

/***/ 28807:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n5": () => (/* reexport */ blob/* blobToDataURL */.n),
  "dq": () => (/* reexport */ combineAbortSignal/* combineAbortSignal */.d),
  "v_": () => (/* reexport */ ecmascript/* concatArrayBuffer */.v_),
  "xe": () => (/* reexport */ encode_text_arraybuffer/* decodeArrayBuffer */.xe),
  "rj": () => (/* reexport */ encode_text_arraybuffer/* decodeText */.rj),
  "PQ": () => (/* reexport */ ecmascript/* defer */.PQ),
  "gw": () => (/* reexport */ delay/* delay */.g),
  "ll": () => (/* reexport */ encode_text_arraybuffer/* encodeArrayBuffer */.ll),
  "YT": () => (/* reexport */ encode_text_arraybuffer/* encodeText */.YT),
  "ky": () => (/* reexport */ media/* findAvailableImageURL */.ky),
  "sS": () => (/* reexport */ media/* formatFileSize */.sS),
  "Yl": () => (/* reexport */ typescript/* getEnumAsArray */.Yl),
  "J3": () => (/* reexport */ ecmascript/* memoizePromise */.J3),
  "P": () => (/* reexport */ typescript/* safeUnreachable */.P),
  "Vs": () => (/* reexport */ timeout/* timeout */.V),
  "t1": () => (/* reexport */ typescript/* unreachable */.t1),
  "uL": () => (/* reexport */ document_readyState/* waitDocumentReadyState */.u)
});

// UNUSED EXPORTS: abortSignalTimeout, assertNonNull, blobToText, detectAudioSupport, detectImageSupport, detectVideoSupport, getDimensionAsJPEG, getDimensionAsPNG, isArrayBufferEqual, isNonNull

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/ecmascript/index.js + 3 modules
var ecmascript = __webpack_require__(20785);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/media/index.js + 3 modules
var media = __webpack_require__(78183);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/typescript/index.js
var typescript = __webpack_require__(47855);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/blob.js
var blob = __webpack_require__(89810);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/combineAbortSignal.js
var combineAbortSignal = __webpack_require__(26998);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/delay.js
var delay = __webpack_require__(89086);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/document.readyState.js
var document_readyState = __webpack_require__(78827);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/encode-text-arraybuffer.js
var encode_text_arraybuffer = __webpack_require__(32291);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/timeout.js
var timeout = __webpack_require__(50579);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/web/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220228054820-f2378be/node_modules/@dimensiondev/kit/esm/index.js




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 47855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _control_flow_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "Yl": () => (/* reexport safe */ _enum_js__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   "t1": () => (/* reexport safe */ _control_flow_js__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _control_flow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74221);
/* harmony import */ var _enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75961);



//# sourceMappingURL=index.js.map

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
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 3617) return "js/npm.react-router.js";
/******/ 			if (chunkId === 4162) return "js/npm.history.js";
/******/ 			// return url for filenames based on template
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1240":"npm-ns.ethersphere.bee-js","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1528":"npm-ns.stablelib.ed25519","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","1822":"npm.key-did-provider-ed25519","2116":"npm.web-streams-polyfill","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4520":"npm-ns.metaplex-foundation.mpl-core","5148":"npm-ns.ceramicstudio.idx","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5756":"npm.debug","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6813":"npm-ns.portto.sdk","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7121":"npm-ns.solana.spl-name-service","7141":"npm.json-rpc-engine","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7765":"npm.engine.io-client","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9271":"npm.rxjs","9278":"npm.axios","9447":"npm.engine.io-parser","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9831":"npm-ns.bonfida.spl-name-service","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
/******/ 		var __send__ = (msg) => {
/******/ 			if (isBrowser) return runtime.runtime.sendMessage(msg)
/******/ 			return new Promise(r => runtime.runtime.sendMessage(msg, r))
/******/ 		}
/******/ 		var classicLoader = (url, done, chunkId) => {
/******/ 			__send__({ type: 'WTW_INJECT', file: url }).then(done, (e) => done(Object.assign(e, { type: 'missing' })))
/******/ 		}
/******/ 		var scriptLoader = (url, done, chunkId) => {
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
/******/ 		if (location.protocol.includes('-extension:')) __webpack_require__.l = isWorker ? workerLoader : scriptLoader
/******/ 		else if (!isWorker) __webpack_require__.l = classicLoader
/******/ 		else { throw new TypeError('Unable to determinate the chunk loader: content script + Worker') }
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
/******/ 		__webpack_require__.j = 1711;
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
/******/ 		var isBrowser = !!(() => { try { return browser.runtime.getURL("/") } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { return chrome.runtime.getURL("/") } catch(e) {} })()
/******/ 		var runtime = isBrowser ? browser : isChrome ? chrome : { get runtime() { throw new Error("No chrome or browser runtime found") } }
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
/******/ 			1711: 0,
/******/ 			7358: 0
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
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
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,6739,4227,4544,2486,5737,3883,3758,187,8136,3147,8019,8712,2735,5687,5229,5464,444,6316,3693,1851,7822,7856,2118,400,3453,7849,5132,1440,12,2619,9227,5838,3142,5105,3846,2162,8129,5951,7512,2752,5178,6565,9744,2299,6160,4278,9197,8000,4960,102,253,572,9737,8547,8145,5313,4570,3981,9855,2088,551,2908,1696,3638,1555,9141,516,2974,3832,6067,159,79,4557,234,7070,4590,4586,2891,8393,5784,9566,4029,433,9697,1947,3619,2222,7088,9808,8100,6645], () => (__webpack_require__(84136)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,6739,4227,4544,2486,5737,3883,3758,187,8136,3147,8019,8712,2735,5687,5229,5464,444,6316,3693,1851,7822,7856,2118,400,3453,7849,5132,1440,12,2619,9227,5838,3142,5105,3846,2162,8129,5951,7512,2752,5178,6565,9744,2299,6160,4278,9197,8000,4960,102,253,572,9737,8547,8145,5313,4570,3981,9855,2088,551,2908,1696,3638,1555,9141,516,2974,3832,6067,159,79,4557,234,7070,4590,4586,2891,8393,5784,9566,4029,433,9697,1947,3619,2222,7088,9808,8100,6645], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;