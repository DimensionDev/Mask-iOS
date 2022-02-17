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

/***/ 76342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(58880);
} else {}


/***/ }),

/***/ 35520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j3": () => (/* reexport safe */ _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "A9": () => (/* reexport safe */ _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   "i1": () => (/* reexport safe */ _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__.i)
/* harmony export */ });
/* unused harmony exports pasteText, pasteImage, pasteInstagram, inputText, hookInputUploadOnce */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67811);
/* harmony import */ var _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65442);
/* harmony import */ var _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43173);
/* harmony import */ var _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13939);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91771);








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
function hookInputUploadOnce(format, fileName, image) {
    sendEvent('hookInputUploadOnce', format, fileName, Array.from(image));
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

/***/ 54993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vU": () => (/* binding */ Flags)
/* harmony export */ });
/* unused harmony exports is_iOSApp, isAndroidApp */
var ref, ref1;
const is_iOSApp =  true && "app" === 'app';
const isAndroidApp = (/* unused pure expression or super */ null && ( true && "safari" === 'firefox'));
const appOnly = "app" === 'app';
const devOnly = "production" === 'development';
const webOnly =  false || devOnly;
const insiderOnly =  false || devOnly;
const betaOrInsiderOnly = insiderOnly || "stable" === 'beta';
// TODO: In future, we can turn this object into a Proxy to receive flags from remote
const Flags = {
    __raw__: {
        target: "safari",
        architecture: "app"
    },
    mask_SDK_ready: betaOrInsiderOnly,
    /** There is no "tabs" to navigate to. We must be careful with this. */ has_no_browser_tab_ui: appOnly,
    has_no_connected_user_link: appOnly,
    has_native_nav_bar: appOnly,
    using_ShadowDOM_attach_mode: 'closed',
    /** Don't inject injected script in this mode. Native side will do the job. */ support_declarative_user_script: is_iOSApp,
    /** Don't show welcome page in this mode. Native side will do the job. */ has_native_welcome_ui: appOnly,
    /** Firefox has a special API that can inject to the document with a higher permission. */ has_firefox_xray_vision: "safari" === 'firefox',
    support_testnet_switch: betaOrInsiderOnly,
    // #region Experimental features
    image_payload_marked_as_beta: appOnly,
    transak_enabled: webOnly,
    trader_zrx_enabled: webOnly,
    trader_all_api_cached_enabled: devOnly,
    metamask_enabled: webOnly,
    injected_web3_enabled: webOnly,
    toolbox_enabled: webOnly,
    /** Prohibit the use of test networks in production */ wallet_allow_testnet: betaOrInsiderOnly || "production" !== 'production',
    wallet_mnemonic_words_backup_enabled: false,
    wallet_private_key_backup_enabled: true,
    wallet_gas_price_dialog_enable: true,
    /* construct LBP for all ERC20 tokens */ LBP_enabled: false,
    LBP_whitelist_enabled: "production" === 'production',
    plugin_switch_enabled: betaOrInsiderOnly,
    // #endregion
    EIP1559_enabled: true,
    bsc_enabled: true,
    polygon_enabled: true,
    arbitrum_enabled: true,
    xdai_enabled: true,
    avalanche_enabled: true,
    fantom_enabled: true,
    flow_enabled: true,
    celo_enabled: true,
    aurora_enabled: true,
    nft_airdrop_enabled: false,
    // #region Functionality missing / broken
    /**
     * - iOS: WebExtension polyfill didn't implemented the dynamic permission API
     */ no_web_extension_dynamic_permission_request: is_iOSApp,
    has_no_WebRTC:  true || 0,
    // #endregion
    using_emoji_flag: true
};
if (false) {}


/***/ }),

/***/ 73195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ saveFileFromBuffer)
/* harmony export */ });
/* unused harmony export saveFileFromUrl */
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


/***/ }),

/***/ 89650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "vU": () => (/* reexport */ flags/* Flags */.vU),
  "uU": () => (/* reexport */ kv_storage/* InMemoryStorages */.uU),
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "_H": () => (/* reexport */ kv_storage/* PersistentStorages */._H),
  "FM": () => (/* reexport */ resolveTCOLink),
  "dH": () => (/* reexport */ download/* saveFileFromBuffer */.d)
});

// UNUSED EXPORTS: isAndroidApp, is_iOSApp, saveFileFromUrl

// EXTERNAL MODULE: ./shared/messages.ts
var messages = __webpack_require__(71054);
// EXTERNAL MODULE: ./shared/flags.ts
var flags = __webpack_require__(54993);
// EXTERNAL MODULE: ./shared/kv-storage.ts
var kv_storage = __webpack_require__(30377);
// EXTERNAL MODULE: ./shared/helpers/download.ts
var download = __webpack_require__(73195);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
;// CONCATENATED MODULE: ./shared/helpers/resolve-t.co.ts

const cache = new Map();
async function resolver(u) {
    var ref;
    if (!u.startsWith('https://t.co/')) return null;
    if (cache.has(u)) return cache.get(u);
    const res = await globalThis.fetch(u, {
        redirect: 'error',
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
    });
    const text = await res.text();
    const url = (ref = text.match(/URL=(.+).><\/noscript/)) === null || ref === void 0 ? void 0 : ref[1];
    if (url) cache.set(u, url);
    return url !== null && url !== void 0 ? url : null;
}
/** Resolve a https://t.co/ link to it's real address. */ const resolveTCOLink = (0,esm/* memoizePromise */.J3)(resolver, (x)=>x
);

;// CONCATENATED MODULE: ./shared/index.ts







/***/ }),

/***/ 30377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages),
/* harmony export */   "_H": () => (/* binding */ PersistentStorages)
/* harmony export */ });
/* unused harmony export setupMaskKVStorageBackend */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71054);


const indexedDBProxy = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
const inMemoryBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createProxyKVStorageBackend */ .X2)();
function setupMaskKVStorageBackend(indexedDB, inMemory) {
    indexedDBProxy.replaceBackend(indexedDB);
    inMemoryBackend.replaceBackend(inMemory);
}
const createPersistentKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(indexedDBProxy, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_persistent__ */ .q.events.__kv_backend_persistent__);
const createInMemoryKVStorage = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createKVStorageHost */ .rc)(inMemoryBackend, _messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_in_memory__ */ .q.events.__kv_backend_in_memory__);
const InMemoryStorages = {
    Plugin: createInMemoryKVStorage('plugin', {})
};
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {})
};


/***/ }),

/***/ 42804:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// NAMESPACE OBJECT: ./src/extension/debug-page/typeson-custom-types.ts
var typeson_custom_types_namespaceObject = {};
__webpack_require__.r(typeson_custom_types_namespaceObject);
__webpack_require__.d(typeson_custom_types_namespaceObject, {
  "CryptoKeyRegistry": () => (CryptoKeyRegistry)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.0.0-rc.0_react@18.0.0-rc.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(15621);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/map.js
var map = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/extension/debug-page/issue.ts
const body = `\
# Bug Report

## Environment

User Agent: ${navigator.userAgent}
Version: ${"v1.29.12-1931-g638baffa2"}
Tag Name: ${"v2.1.0"}
Build Date: ${"2022-02-14T06:00:58.719Z"}
Commit Hash: ${"638baffa2"}
Commit Date: ${"2022-02-14T05:55:46.000Z"}
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

// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
;// CONCATENATED MODULE: ./src/extension/debug-page/DebugInfo.tsx




const DEBUG_INFO = {
    'User Agent': navigator.userAgent,
    'Mask Version': "v1.29.12-1931-g638baffa2",
    'Build Date': process.env.channel_DATE,
    'Tag Name': "v2.1.0",
    'Commit Hash': "638baffa2",
    'Commit Date': "2022-02-14T05:55:46.000Z",
    'Remote URL': "https://github.com/DimensionDev/Maskbook",
    'Branch Name': "HEAD",
    Dirty: false,
    'Tag Dirty': true
};
const DebugInfo = ()=>{
    const { t  } = (0,utils/* useI18N */.M1)();
    const onNewBugIssue = ()=>{
        open(makeNewBugIssueURL());
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
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
    }));
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.0/node_modules/idb/with-async-ittr.js
var with_async_ittr = __webpack_require__(20326);
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

const typeson_typeson = new (typeson_default())({});
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
            if (!name) return;
            await timeout((0,with_async_ittr/* wrap */.re)(indexedDB.deleteDatabase(name)), 500);
        }));
    };
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
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
    var ref;
    const databases = await ((ref = indexedDB.databases) === null || ref === void 0 ? void 0 : ref.call(indexedDB));
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
            version: "v1.29.12-1931-g638baffa2",
            'build-date': "2022-02-14T06:00:58.719Z",
            'tag-name': "v2.1.0",
            'commit-hash': "638baffa2",
            'commit-date': "2022-02-14T05:55:46.000Z",
            'remote-url': "https://github.com/DimensionDev/Maskbook",
            'branch-name': "HEAD",
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
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DebugInfo, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DatabaseOps, {})
        ]
    })
;

;// CONCATENATED MODULE: ./src/extension/debug-page/index.tsx



const container = document.createElement('main');
react_dom.render(/*#__PURE__*/ (0,jsx_runtime.jsx)(Entry, {}), container, ()=>{
    document.body.appendChild(container);
});


/***/ }),

/***/ 8267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Services, ServicesWithProgress */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
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
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6316), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(2908), __webpack_require__.e(3723), __webpack_require__.e(7926), __webpack_require__.e(1372), __webpack_require__.e(3211)]).then(__webpack_require__.bind(__webpack_require__, 53211))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6316), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(7926), __webpack_require__.e(1264), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 49639))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6316), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(7926), __webpack_require__.e(1264), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 64157))
    , 'Welcome'),
    Helper: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(3611)]).then(__webpack_require__.bind(__webpack_require__, 71259))
    , 'Helper'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(3611)]).then(__webpack_require__.bind(__webpack_require__, 70427))
    , 'Ethereum'),
    SocialNetwork: add(()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(1638), __webpack_require__.e(7810)]).then(__webpack_require__.bind(__webpack_require__, 67810))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6316), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(7926), __webpack_require__.e(1264), __webpack_require__.e(606)]).then(__webpack_require__.bind(__webpack_require__, 31270))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 396).then(__webpack_require__.bind(__webpack_require__, 396))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6316), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(2908), __webpack_require__.e(3723), __webpack_require__.e(7926), __webpack_require__.e(1372), __webpack_require__.e(4245)]).then(__webpack_require__.bind(__webpack_require__, 74245))
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

/***/ 96687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ createPluginHost)
/* harmony export */ });
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23369);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69260);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86865);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6057);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8267);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87470);
// All plugin manager need to call createPluginHost so let's register plugins implicitly.


// Do not export from '../utils/' to prevent initialization failure




function createPluginHost(signal, createContext) {
    const minimalMode = {
        isEnabled: _extension_service__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Settings.getPluginMinimalModeEnabled */ .ZP.Settings.getPluginMinimalModeEnabled,
        events: new _servie_events__WEBPACK_IMPORTED_MODULE_5__/* .Emitter */ .Q5()
    };
    const removeListener = _utils_messages__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.pluginMinimalModeChanged.on */ .q.events.pluginMinimalModeChanged.on(([id, val])=>minimalMode.events.emit(val ? 'enabled' : 'disabled', id)
    );
    signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', removeListener);
    return {
        signal,
        // Due to MASK-391, we don't have a user configurable "disabled" plugin.
        // All plugins are always loaded but it might be displayed in the summary mode.
        enabled: {
            events: new _servie_events__WEBPACK_IMPORTED_MODULE_5__/* .Emitter */ .Q5(),
            isEnabled: ()=>true
        },
        minimalMode,
        addI18NResource (plugin, resource) {
            (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createI18NBundle */ .C9)(plugin, resource)(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
        },
        createContext
    };
}


/***/ }),

/***/ 87050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vv": () => (/* binding */ debugModeSetting),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings),
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   "T0": () => (/* binding */ currentPopupWindowId)
/* harmony export */ });
/* unused harmony exports allPostReplacementSettings, currentImagePayloadStatus, currentSelectedIdentity, getCurrentSelectedIdentity, userGuideStatus, sayHelloShowed, dismissPinExtensionTip, newDashboardConnection */
/* harmony import */ var _createSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6174);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6057);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9667);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14767);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85123);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87470);
/* harmony import */ var _plugins_EVM_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44365);







/**
 * Does the debug mode on
 */ const debugModeSetting = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('debugMode', false, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug_desc')
});
/**
 * Whether if create substitute post for all posts
 */ const allPostReplacementSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('post replacement all', false, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_post_replacement')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_post_replacement_desc')
});
// #region appearance
const appearanceSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('appearance', _masknet_theme__WEBPACK_IMPORTED_MODULE_3__/* .Appearance["default"] */ .um["default"], {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_appearance')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_appearance_secondary')
});
// #endregion
// #region language
const languageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.__auto__ */ .P7.__auto__, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_language')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_language_secondary')
});
// #endregion
// #region web3 plugin ID
const pluginIDSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('pluginID', _plugins_EVM_constants__WEBPACK_IMPORTED_MODULE_6__/* .PLUGIN_ID */ .Uu, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
// #endregion
// #region network setting
/**
 * Expected Usage: export const currentImagePayloadStatus = createNetworkSettings('currentImagePayloadStatus')
 *
 * Work around the issue:
 *      https://github.com/microsoft/TypeScript/issues/42873
 *      https://github.com/microsoft/TypeScript/issues/30858
 *
 * References:
 *      PluginGitcoinMessages: packages/mask/src/plugins/Gitcoin/messages.ts
 *      PluginTraderMessages: packages/mask/src/plugins/Trader/messages.ts
 *      PluginTransakMessages: packages/mask/src/plugins/Transak/messages.ts
 */ const currentImagePayloadStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentImagePayloadStatus', '');
const currentSelectedIdentity = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentSelectedIdentity', '');
function getCurrentSelectedIdentity(network) {
    return Identifier.fromString(currentSelectedIdentity[network].value, ProfileIdentifier).unwrapOr(ProfileIdentifier.unknown);
}
const currentSetupGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentSetupGuideStatus', '');
const userGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('userGuideStatus', '');
const sayHelloShowed = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('sayHelloShowed', false);
const dismissPinExtensionTip = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('dismissPinExtensionTip', false, {
    primary: ()=>''
});
// This is a misuse of concept "NetworkSettings" as "namespaced settings"
// The refactor is tracked in https://github.com/DimensionDev/Maskbook/issues/1884
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSNSAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsDashboard().find((x) => x.ID === PLUGIN_ID)` instead
 */ // This was "currentPluginEnabled" before, but we used it to represent minimal mode now to make the settings be able to migrate.
const currentPluginMinimalModeNOTEnabled = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('pluginsEnabled', true);
// #endregion
const launchPageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('launchPage', _types__WEBPACK_IMPORTED_MODULE_2__/* .LaunchPage.dashboard */ .z.dashboard, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_launch_page')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_launch_page_secondary')
});
const newDashboardConnection = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('beta-dashboard', false, {
    primary: ()=>'Experimental: Allow isolated dashboard to connect'
    ,
    secondary: ()=>"WARNING: DON'T OPEN THIS UNLESS YOU KNOW WHAT YOU ARE DOING."
});
const currentPersonaIdentifier = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '', {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
const currentPopupWindowId = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPopupWindowId', 0, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
try {
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.enUS */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.zhCN */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.jaJP */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.koKR */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .LanguageOptions.__auto__ */ .P7.__auto__;
} catch  {}


/***/ }),

/***/ 81223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Iz": () => (/* binding */ FACEBOOK_ID),
/* harmony export */   "qv": () => (/* binding */ facebookBase),
/* harmony export */   "DF": () => (/* binding */ isFacebook)
/* harmony export */ });
/* unused harmony export facebookWorkerBase */
const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const FACEBOOK_ID = 'facebook.com';
const facebookBase = {
    networkIdentifier: FACEBOOK_ID,
    name: 'facebook',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith(FACEBOOK_ID);
    }
};
function isFacebook(ui) {
    return ui.networkIdentifier === FACEBOOK_ID;
}
const facebookWorkerBase = {
    ...facebookBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 27947:
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
    name: 'instagram',
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

/***/ 13138:
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
    name: 'twitter',
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

/***/ 6:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork)
/* harmony export */ });
/* unused harmony export getCurrentIdentifier */
/* harmony import */ var _twitter_com_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13138);
/* harmony import */ var _facebook_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81223);
/* harmony import */ var _instagram_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27947);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94531);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29980);





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
    var ref;
    const current = (ref = activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.value;
    return globalUIState.profiles.value.find((i)=>{
        return i.identifier.equals(current === null || current === void 0 ? void 0 : current.identifier);
    }) || globalUIState.profiles.value[0];
};


/***/ }),

/***/ 29980:
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55334);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94922);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9758);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32338);







/***/ }),

/***/ 94506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XF": () => (/* binding */ encodeTextPayloadUI),
/* harmony export */   "X2": () => (/* binding */ decodeTextPayloadUI)
/* harmony export */ });
/* unused harmony exports encodePublicKeyUI, decodePublicKeyUI */
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94922);

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

/***/ 76569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports mapContactAvatarColor, Avatar */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);



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

/***/ 28302:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: createNormalReactRoot

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.0.0-rc.0_react@18.0.0-rc.0/node_modules/react-dom/index.js
var react_dom = __webpack_require__(15621);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(21949);
;// CONCATENATED MODULE: ./src/components/shared/ErrorBoundary.tsx


// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var theme_src = __webpack_require__(14767);
;// CONCATENATED MODULE: ./src/utils/createNormalReactRoot.tsx




function createNormalReactRoot(jsx, container) {
    var ref;
    if (!container) container = (ref = document.getElementById('root')) !== null && ref !== void 0 ? ref : void 0;
    if (!container) {
        container = document.createElement('div');
        document.body.appendChild(container);
    }
    if (false) {}
    return ReactDOM.createRoot(container).render(/*#__PURE__*/ _jsx(NoEffectUsePortalShadowRootContext.Provider, {
        value: true,
        children: /*#__PURE__*/ _jsx(ErrorBoundary, {
            children: jsx
        })
    }));
}


/***/ }),

/***/ 79918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Up": () => (/* binding */ untilDomLoaded)
/* harmony export */ });
/* unused harmony exports untilElementAvailable, untilDocumentReady, nthChild */


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
            if (document.readyState === 'loading') return;
            resolve();
            document.removeEventListener('readystatechange', callback);
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
            if (document.readyState !== 'complete') return;
            resolve();
            document.removeEventListener('readystatechange', callback);
        };
        document.addEventListener('readystatechange', callback, {
            passive: true
        });
    });
}
function nthChild(n, ...childrenIndex) {
    let r = n;
    for (const v of childrenIndex){
        if (isUndefined(r)) break;
        r = r.children[v];
    }
    return r;
}


/***/ }),

/***/ 76108:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
  "p_": () => (/* reexport */ ShadowRootComponents/* ShadowRootTooltip */.p_),
  "a_": () => (/* reexport */ BackupFormat/* UpgradeBackupJSONFile */.a),
  "SR": () => (/* reexport */ asyncIteratorHelpers/* asyncIteratorToArray */.SR),
  "lR": () => (/* reexport */ BackupFile/* convertBackupFileToObject */.l),
  "Ql": () => (/* reexport */ theme/* extendsTheme */.Ql),
  "uM": () => (/* reexport */ permissions/* extraPermissions */.u),
  "jK": () => (/* reexport */ BackupFile/* fixBackupFilePermission */.j),
  "$I": () => (/* reexport */ suspends/* getAssetAsBlobURL */.$),
  "dF": () => (/* reexport */ theme_tools/* getBackgroundColor */.dF),
  "c_": () => (/* reexport */ getTextUILength/* getTextUILength */.c),
  "Vc": () => (/* reexport */ renderInShadowRoot/* setupShadowRootPortal */.V),
  "cc": () => (/* reexport */ getTextUILength/* sliceTextByUILength */.L),
  "Kx": () => (/* reexport */ theme/* useClassicMaskFullPageTheme */.Kx),
  "D2": () => (/* reexport */ useControlledDialog/* useControlledDialog */.D),
  "M1": () => (/* reexport */ i18n_next_ui/* useI18N */.M),
  "ZK": () => (/* reexport */ i18n_next_ui/* useLanguage */.Z),
  "IN": () => (/* reexport */ useMatchXS/* useMatchXS */.I),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H),
  "ad": () => (/* reexport */ src/* usePortalShadowRoot */.ad),
  "MN": () => (/* reexport */ useSettingSwitcher/* useSettingsSwitcher */.M)
});

// UNUSED EXPORTS: Avatar, CryptoKeyToJsonWebKey, DecryptFailedReason, JWKToKey, JsonWebKeyToCryptoKey, PersonaArrayComparer, ShadowRootMenu, ShadowRootPopper, asyncIteratorWithResult, clamp, collectNodeText, collectTwitterEmoji, constructAlpha38, createNormalReactRoot, createReactRootShadowed, createShadowRootForwardedComponent, createShadowRootForwardedPopperComponent, deconstructPayload, downloadUrl, fromRGB, getBackupPreviewInfo, getForegroundColor, getKeyParameter, isDark, isDarkTheme, keyToAddr, keyToJWK, mapContactAvatarColor, memorizeAsyncGenerator, nthChild, pasteImageToActiveElements, regexMatch, selectElementContents, shade, startWatch, toRGB, untilDocumentReady, untilDomLoaded, untilElementAvailable, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, usePopupsMaskFullPageTheme, useQueryNavigatorPermission, useSuspense

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(76569);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(45634);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(67429);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(2032);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(16220);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(89650);
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

// EXTERNAL MODULE: ./src/utils/hooks/useSettingSwitcher.tsx
var useSettingSwitcher = __webpack_require__(11);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts







// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(74936);
// EXTERNAL MODULE: ./src/utils/shadow-root/ShadowRootComponents.tsx
var ShadowRootComponents = __webpack_require__(18119);
// EXTERNAL MODULE: ../theme/src/index.ts + 2 modules
var src = __webpack_require__(14767);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts




// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(42894);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(52679);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(99799);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/index.ts
var BackupFormat = __webpack_require__(10519);
// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(85385);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(39903);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-ETH.ts
var SECP256k1_ETH = __webpack_require__(87701);
;// CONCATENATED MODULE: ./src/utils/type-transform/index.ts







// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(27330);
// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(49115);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(48520);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(86865);
// EXTERNAL MODULE: ./src/utils/permissions.ts
var permissions = __webpack_require__(29961);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx + 1 modules
var createNormalReactRoot = __webpack_require__(28302);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(57288);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(57112);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(92610);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(82125);
;// CONCATENATED MODULE: ./src/utils/index.ts





















/***/ }),

/***/ 86865:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89650);



/***/ }),

/***/ 74936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal)
/* harmony export */ });
/* unused harmony export createReactRootShadowed */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89650);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85833);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57112);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15621);






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
    }, captureEvents);
    (0,react_dom__WEBPACK_IMPORTED_MODULE_5__.createRoot)(shadow.appendChild(document.createElement('head'))).render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("head", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {
                useTheme: _theme__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskSNSTheme */ .VJ
            })
        ]
    }));
};
// https://github.com/DimensionDev/Maskbook/issues/3265 with fast refresh or import order?
const createReactRootShadowed_raw = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .createReactRootShadowedPartial */ .zV)({
    preventEventPropagationList: captureEvents,
    wrapJSX (jsx) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_UIRoot__WEBPACK_IMPORTED_MODULE_3__/* .MaskUIRoot */ .Y, {
            useTheme: _theme__WEBPACK_IMPORTED_MODULE_4__/* .useClassicMaskSNSTheme */ .VJ,
            kind: "sns",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_theme__WEBPACK_IMPORTED_MODULE_1__/* .CSSVariableInjector */ .US, {}),
                jsx
            ]
        }));
    }
});
function createReactRootShadowed(...args) {
    return createReactRootShadowed_raw(...args);
}


/***/ }),

/***/ 57288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dF": () => (/* binding */ getBackgroundColor),
/* harmony export */   "$o": () => (/* binding */ isDarkTheme)
/* harmony export */ });
/* unused harmony exports isDark, toRGB, fromRGB, clamp, shade, getForegroundColor */
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
function clamp(num, min, max) {
    if (num < min) return min;
    if (num > max) return max;
    return num;
}
function shade(channels, percentage) {
    return channels.map((c)=>clamp(Math.floor(c * (100 + percentage) / 100), 0, 255)
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
    const color = getComputedStyle(element).backgroundColor;
    if (isRGBA(color)) {
        return fromRGBAtoRGB(color);
    }
    return color ? toRGB(fromRGB(color)) : '';
}
function getForegroundColor(element) {
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


/***/ }),

/***/ 39903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ deconstructPayload),
/* harmony export */   "R": () => (/* binding */ constructAlpha38)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6057);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79594);
/* harmony import */ var _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94506);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87470);





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
    if (!payloadStart) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_not_found'));
    else return null;
    const [payload, rest] = payloadStart.split(':||');
    if (rest === undefined) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_incomplete'));
    else return null;
    const [AESKeyEncrypted, iv, encryptedText, signature, ...optional] = payload.split('|');
    const [authorPublicKey, publicShared, authorID, ...extra] = optional;
    if (!(AESKeyEncrypted && iv && encryptedText)) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_bad'));
    else return null;
    if (extra.length) console.warn('Found extra payload', extra);
    if (isVersion38) {
        if (!signature) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_bad'));
        return {
            version: -38,
            AESKeyEncrypted,
            iv,
            encryptedText,
            signature,
            authorPublicKey,
            sharedPublic: publicShared === '1',
            authorUserID: ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Result.wrap */ .x4.wrap(()=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .Identifier.fromString */ .xb.fromString('person:' + atob(authorID), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .ProfileIdentifier */ .WO).unwrap()
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
    if (str.includes('\u{1F3BC}1/4') && str.includes(':||')) if (throws) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_throw_in_alpha41'));
    else return null;
    return null;
}
const versions = new Set([
    deconstructAlpha40_Or_Alpha39_Or_Alpha38,
    deconstructAlpha41
]);
function deconstructPayload(str, networkDecoder) {
    if (!networkDecoder) {
        networkDecoder = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.Environment.ContentScript) ? _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_2__/* .decodeTextPayloadUI */ .X2 : (x)=>[
                x
            ]
        ;
    }
    for (const versionDecoder of versions){
        const results = networkDecoder(str);
        for (const result of results){
            if (!result) continue;
            const payload = versionDecoder(result, false);
            if (payload) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__.Ok)(payload);
        }
    }
    if (str.includes('\u{1F3BC}') && str.includes(':||')) return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('service_unknown_payload')));
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_1__/* .Err */ .UG)(new TypeError(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__/* .i18n.t */ .a.t('payload_not_found')));
}
function constructAlpha38(data, encoder) {
    var ref;
    if (!encoder) {
        encoder = (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__.Environment.ContentScript) ? _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_2__/* .encodeTextPayloadUI */ .XF : (x)=>x
        ;
    }
    const userID = ((ref = data.authorUserID) === null || ref === void 0 ? void 0 : ref.toText().replace('person:', '')) || '';
    const fields = [
        data.AESKeyEncrypted,
        data.iv,
        data.encryptedText,
        data.signature,
        data.authorPublicKey,
        data.sharedPublic ? '1' : '0',
        userID.includes('|') ? undefined : btoa(userID), 
    ];
    return encoder(`\u{1F3BC}4/4|${fields.join('|')}:||`);
}


/***/ }),

/***/ 92610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ downloadUrl)
/* harmony export */ });
/* unused harmony exports pasteImageToActiveElements, selectElementContents, regexMatch */
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35520);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8267);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14381);
/**
 * Prefer function declaration than const f = () => ...
 * in this file please.
 */ 



/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return _extension_service__WEBPACK_IMPORTED_MODULE_1__/* ["default"].Helper.fetch */ .ZP.Helper.fetch(url);
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
    pasteImage(new Uint8Array(await blobToArrayBuffer(image)));
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

/***/ 82125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export startWatch */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89650);

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

/***/ 86503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useCompositionContext)
/* harmony export */ });
/* unused harmony export CompositionContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);

const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {},
    dropMetadata () {}
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 56843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails)
/* harmony export */ });
/* unused harmony exports PostInfoProvider, usePostInfo, usePostInfoSharedPublic */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21949);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
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

/***/ 94531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$8),
/* harmony export */   "mA": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.mA),
/* harmony export */   "KQ": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.KQ),
/* harmony export */   "Ov": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Ov),
/* harmony export */   "xx": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.xx),
/* harmony export */   "Yn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Yn),
/* harmony export */   "Vw": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Vw),
/* harmony export */   "px": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.px),
/* harmony export */   "bL": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.bL),
/* harmony export */   "Zn": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Zn),
/* harmony export */   "fY": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.fY),
/* harmony export */   "_o": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__._o),
/* harmony export */   "Os": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.Os),
/* harmony export */   "rB": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.rB),
/* harmony export */   "dM": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.dM),
/* harmony export */   "$d": () => (/* reexport safe */ _web3__WEBPACK_IMPORTED_MODULE_0__.$d),
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.m),
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_1__.j),
/* harmony export */   "V2": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.V2),
/* harmony export */   "FF": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.FF),
/* harmony export */   "iv": () => (/* reexport safe */ _web3_types__WEBPACK_IMPORTED_MODULE_2__.iv),
/* harmony export */   "Rc": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.Rc),
/* harmony export */   "Ne": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.Ne),
/* harmony export */   "hn": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.hn),
/* harmony export */   "$q": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_3__.$q),
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__.CB),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__.eE),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.D4),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__.Pz),
/* harmony export */   "EK": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.EK),
/* harmony export */   "I4": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.I4),
/* harmony export */   "V8": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.V8),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Sc),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_8__.H9),
/* harmony export */   "Cp": () => (/* reexport safe */ _CompositionContext__WEBPACK_IMPORTED_MODULE_9__.C),
/* harmony export */   "Hq": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.Hq),
/* harmony export */   "x4": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.x4),
/* harmony export */   "bD": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_10__.bD),
/* harmony export */   "_W": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__._W),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.fo),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.fg),
/* harmony export */   "Rm": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.Rm),
/* harmony export */   "i8": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_11__.i8),
/* harmony export */   "Je": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_6__.J)
/* harmony export */ });
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85574);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35665);
/* harmony import */ var _web3_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19835);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60367);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75253);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41898);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89684);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23155);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56843);
/* harmony import */ var _CompositionContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86503);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79594);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59310);















/***/ }),

/***/ 41898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony exports useIsMinimalMode, useActivatedPluginSNSAdaptor_Web3Supported */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37327);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59310);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14381);




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

/***/ 35665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ CurrentSNSNetwork),
/* harmony export */   "j": () => (/* binding */ PluginId)
/* harmony export */ });
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

/***/ 23155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EK": () => (/* reexport */ createInjectHooksRenderer/* createInjectHooksRenderer */.E),
  "I4": () => (/* reexport */ createPluginMessage),
  "V8": () => (/* reexport */ createPluginRPC),
  "Sc": () => (/* reexport */ createPluginRPCGenerator)
});

// EXTERNAL MODULE: ../plugin-infra/src/utils/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(38482);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
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
    const messageCenter = new umd.WebExtensionMessage({
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
var src = __webpack_require__(87470);
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
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    return (0,full/* AsyncCall */.LE)((exoticImplementation ? src/* getLocalImplementationExotic */.kO : src/* getLocalImplementation */.Bb)(isBackground, `Plugin(${key})`, impl, message), {
        key,
        channel: message.bind(umd.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: src/* serializer */.GM,
        strict: {
            methodNotFound: isBackground,
            unknownMessage: true
        },
        log,
        thenable: false
    });
}
function createPluginRPCGenerator(key, impl, message) {
    const isBackground = (0,umd.isEnvironment)(umd.Environment.ManifestBackground);
    return (0,full/* AsyncGeneratorCall */.rc)((0,src/* getLocalImplementation */.Bb)(isBackground, `Plugin(${key})`, impl, message), {
        channel: message.bind(umd.MessageTarget.Broadcast),
        preferLocalImplementation: isBackground,
        serializer: src/* serializer */.GM,
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

/***/ 85574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "KQ": () => (/* reexport safe */ _useBalance__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "Yn": () => (/* reexport safe */ _useBeat__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__.O),
/* harmony export */   "xx": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_6__.x),
/* harmony export */   "bL": () => (/* reexport safe */ _useNetworkType__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   "_o": () => (/* reexport safe */ _useProviderType__WEBPACK_IMPORTED_MODULE_13__._),
/* harmony export */   "Vw": () => (/* reexport safe */ _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__.V),
/* harmony export */   "fY": () => (/* reexport safe */ _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__.f),
/* harmony export */   "px": () => (/* reexport safe */ _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__.p),
/* harmony export */   "Os": () => (/* reexport safe */ _useWallet__WEBPACK_IMPORTED_MODULE_20__.O),
/* harmony export */   "rB": () => (/* reexport safe */ _useWallets__WEBPACK_IMPORTED_MODULE_22__.r),
/* harmony export */   "$d": () => (/* reexport safe */ _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__.$),
/* harmony export */   "dM": () => (/* reexport safe */ _useWeb3State__WEBPACK_IMPORTED_MODULE_24__.d),
/* harmony export */   "$8": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$8),
/* harmony export */   "Zn": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.Zn)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99599);
/* harmony import */ var _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23502);
/* harmony import */ var _useAssetType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72034);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57900);
/* harmony import */ var _useBeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5862);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51051);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73327);
/* harmony import */ var _useChainColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61260);
/* harmony import */ var _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24434);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59270);
/* harmony import */ var _useCollectibleType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84224);
/* harmony import */ var _useNameType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72803);
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23345);
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82076);
/* harmony import */ var _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90994);
/* harmony import */ var _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90071);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(94212);
/* harmony import */ var _useProviderDescriptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(77012);
/* harmony import */ var _useTokenPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(10456);
/* harmony import */ var _useTransactionType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(61370);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(54479);
/* harmony import */ var _useWalletPrimary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(74336);
/* harmony import */ var _useWallets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(96133);
/* harmony import */ var _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(54445);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(56964);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(70422);




























/***/ }),

/***/ 61260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainColor */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73327);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56964);


function useChainColor(pluginID) {
    var ref;
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.resolveChainColor) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : 'transparent';
}


/***/ }),

/***/ 59270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainDetailed */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73327);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56964);


function useChainDetailed(pluginID) {
    var ref;
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getChainDetailed) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : null;
}


/***/ }),

/***/ 24434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useChainIdValid */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73327);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56964);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99599);



function useChainIdValid(pluginID) {
    var ref;
    const account = useAccount(pluginID);
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return !account || ((ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.isChainIdValid) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, "production" === 'development')) !== null && ref1 !== void 0 ? ref1 : false);
}


/***/ }),

/***/ 39151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57577);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12009);


const base = {
    ID: _constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu,
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
            networks: {}
        },
        target: 'stable'
    },
    i18n: _locales_languages__WEBPACK_IMPORTED_MODULE_1__/* .languages */ .M
};


/***/ }),

/***/ 30130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rz": () => (/* binding */ isTypedMessageText),
/* harmony export */   "P": () => (/* binding */ makeTypedMessageText),
/* harmony export */   "c0": () => (/* binding */ isTypedMessageImage),
/* harmony export */   "bZ": () => (/* binding */ isTypedMessageTuple),
/* harmony export */   "q$": () => (/* binding */ isWellKnownCoreTypedMessages)
/* harmony export */ });
/* unused harmony exports isTypedMessageTextV1, isTypedMessageImageV1, makeTypedMessageImage, isTypedMessageTupleSerializable, makeTypedMessageTuple, makeTypedMessageTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageSerializableTupleFromList, isTypedMessageUnknown, makeTypedMessageUnknown, isTypedMessageEmpty, makeTypedMessageEmpty, isTypedMessagePromise, makeTypedMessagePromise */
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58500);
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45002);


const isTypedMessageTextV1 = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('text', 1);
const isTypedMessageText = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageTextV1);
function makeTypedMessageText(text, meta) {
    return {
        type: 'text',
        version: 1,
        serializable: true,
        content: text,
        meta
    };
}
const isTypedMessageImageV1 = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('image');
const isTypedMessageImage = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageImageV1);
function makeTypedMessageImage(image, size, meta) {
    return {
        type: 'image',
        serializable: false,
        image,
        width: size === null || size === void 0 ? void 0 : size.width,
        height: size === null || size === void 0 ? void 0 : size.height,
        meta
    };
}
const isTypedMessageTuple = (x)=>x.type === 'tuple'
;
const isTypedMessageTupleSerializable = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeEvery */ .mo)(isTypedMessageTuple, _utils__WEBPACK_IMPORTED_MODULE_0__/* .isSerializableTypedMessage */ .fV);
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
const isTypedMessageUnknown = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('unknown');
function makeTypedMessageUnknown(raw, meta) {
    return {
        type: 'unknown',
        serializable: false,
        meta,
        raw
    };
}
const isTypedMessageEmpty = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('empty');
function makeTypedMessageEmpty(meta) {
    return {
        type: 'empty',
        serializable: true,
        version: 1,
        meta
    };
}
const isTypedMessagePromise = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('promise');
function makeTypedMessagePromise(promise) {
    const x = {
        type: 'promise',
        serializable: false,
        promise
    };
    promise.then((y)=>x.value = y
    );
    return x;
}
// #endregion
const isWellKnownCoreTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageText, isTypedMessageImage, isTypedMessageTuple, isTypedMessageUnknown, isTypedMessagePromise);


/***/ }),

/***/ 5418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bj": () => (/* binding */ isTypedMessageAnchor),
/* harmony export */   "SY": () => (/* binding */ isWellKnownExtensionTypedMessages)
/* harmony export */ });
/* unused harmony export makeTypedMessageAnchor */
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45002);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30130);


const isTypedMessageAnchor = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .createIsType */ .uO)('x-anchor');
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
//
const isWellKnownExtensionTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_1__/* .composeSome */ .Vm)(isTypedMessageAnchor);


/***/ }),

/***/ 94150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bj": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.bj),
/* harmony export */   "Vc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Vc),
/* harmony export */   "c0": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.c0),
/* harmony export */   "Rz": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Rz),
/* harmony export */   "bZ": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bZ),
/* harmony export */   "P": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   "mC": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.mC),
/* harmony export */   "Bi": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.Bi)
/* harmony export */ });
/* unused harmony export isWellKnownTypedMessages */
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5418);
/* harmony import */ var _utils_internal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45002);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30130);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58500);
/* harmony import */ var _metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12530);
/* harmony import */ var _binary_encode_encode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85958);
/* harmony import */ var _binary_encode_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93863);
/* harmony import */ var _deprecated_encode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(27821);








const isWellKnownTypedMessages = (0,_utils_internal__WEBPACK_IMPORTED_MODULE_4__/* .composeSome */ .Vm)(_core__WEBPACK_IMPORTED_MODULE_1__/* .isWellKnownCoreTypedMessages */ .q$, _extension__WEBPACK_IMPORTED_MODULE_0__/* .isWellKnownExtensionTypedMessages */ .SY);





/***/ }),

/***/ 12530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata)
/* harmony export */ });
/* unused harmony exports getKnownMetadataKeys, getMetadataSchema, registerMetadataSchema, readTypedMessageMetadataUntyped, isDataMatchJSONSchema, editMetadata, editTypedMessageMeta, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79594);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32002);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60232);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
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
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
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
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({});
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
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


/***/ }),

/***/ 58500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fV": () => (/* binding */ isSerializableTypedMessage),
/* harmony export */   "Vc": () => (/* binding */ extractTextFromTypedMessage)
/* harmony export */ });
/* unused harmony exports isTypedMessageEqual, extractImageFromTypedMessage */
/* harmony import */ var _extension__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5418);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30130);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79594);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94150);
/* harmony import */ var _transforms_flatten__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55021);
/* harmony import */ var _transforms_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78658);





function isSerializableTypedMessage(x) {
    if (x.serializable) return true;
    const y = x;
    if (y.serializable === false && y.alt) return true;
    return false;
}
/**
 * This is a tree compare algorithm, may need to find a more efficient one from NPM
 */ function isTypedMessageEqual(message1, message2) {
    if (message1.type !== message2.type) return false;
    if (message1.meta !== message2.meta) return false;
    if (isTypedMessageTuple(message1)) {
        const msg1 = message1;
        const msg2 = message2;
        if (msg1.items.length !== msg2.items.length) return false;
        return msg1.items.every((item, index)=>isTypedMessageEqual(item, msg2.items[index])
        );
    }
    return eq(message1, message2);
}
/**
 * Get inner text from a TypedMessage
 * @param message message
 */ function extractTextFromTypedMessage(message) {
    if (!message) return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
    if ((0,_core__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageText */ .Rz)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(message.content);
    if ((0,_extension__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageAnchor */ .bj)(message)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(message.content);
    if ((0,_core__WEBPACK_IMPORTED_MODULE_1__/* .isTypedMessageTuple */ .bZ)(message)) {
        const str = [];
        for (const item of message.items){
            const text = extractTextFromTypedMessage(item);
            if (text.some) str.push(text.val);
        }
        if (str.length) return (0,ts_results__WEBPACK_IMPORTED_MODULE_2__/* .Some */ .bD)(str.join(' '));
        return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
    }
    return ts_results__WEBPACK_IMPORTED_MODULE_2__/* .None */ .Hq;
}
function extractImageFromTypedMessage(message, result = []) {
    if (!message) return result;
    if (isTypedMessageImage(message)) return result.concat(message.image);
    if (isTypedMessageTuple(message)) return result.concat(message.items.flatMap((x)=>extractImageFromTypedMessage(x)
    ));
    return result;
}




/***/ }),

/***/ 87470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* reexport safe */ _serializer__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   "qD": () => (/* reexport safe */ _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "Ko": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.Ko),
/* harmony export */   "vP": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.vP),
/* harmony export */   "n7": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.n7),
/* harmony export */   "$f": () => (/* reexport safe */ _collections__WEBPACK_IMPORTED_MODULE_2__.$f),
/* harmony export */   "ob": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.ob),
/* harmony export */   "xI": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.xI),
/* harmony export */   "xb": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.xb),
/* harmony export */   "bb": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.bb),
/* harmony export */   "_P": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__._P),
/* harmony export */   "WO": () => (/* reexport safe */ _Identifier_type__WEBPACK_IMPORTED_MODULE_4__.WO),
/* harmony export */   "C9": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.C9),
/* harmony export */   "A9": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_5__.A9),
/* harmony export */   "mC": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.mC),
/* harmony export */   "Bi": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Bi),
/* harmony export */   "Vc": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Vc),
/* harmony export */   "bj": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bj),
/* harmony export */   "c0": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.c0),
/* harmony export */   "Rz": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Rz),
/* harmony export */   "bZ": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bZ),
/* harmony export */   "P": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.P),
/* harmony export */   "Hd": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Hd),
/* harmony export */   "Jf": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Jf),
/* harmony export */   "qY": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.qY),
/* harmony export */   "Fd": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Fd),
/* harmony export */   "PQ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.PQ),
/* harmony export */   "gw": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.gw),
/* harmony export */   "Bb": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Bb),
/* harmony export */   "kO": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.kO),
/* harmony export */   "K2": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.K2),
/* harmony export */   "N6": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.N6),
/* harmony export */   "S3": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.S3),
/* harmony export */   "Lk": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Lk),
/* harmony export */   "s_": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.s_),
/* harmony export */   "Vs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Vs),
/* harmony export */   "q0": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_8__.q0),
/* harmony export */   "Ic": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_8__.Ic),
/* harmony export */   "rc": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_8__.rc),
/* harmony export */   "X2": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_8__.X2),
/* harmony export */   "CH": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_9__.CH),
/* harmony export */   "N5": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_9__.N5),
/* harmony export */   "SH": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_9__.SH),
/* harmony export */   "qX": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_9__.qX),
/* harmony export */   "dK": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_9__.dK),
/* harmony export */   "Rx": () => (/* reexport safe */ _crypto__WEBPACK_IMPORTED_MODULE_9__.Rx),
/* harmony export */   "Kn": () => (/* reexport safe */ _Persona_type__WEBPACK_IMPORTED_MODULE_10__.K),
/* harmony export */   "mZ": () => (/* reexport safe */ _Routes_PopupRoutes__WEBPACK_IMPORTED_MODULE_11__.m),
/* harmony export */   "vq": () => (/* reexport safe */ _Routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_12__.v),
/* harmony export */   "iD": () => (/* reexport safe */ _Results__WEBPACK_IMPORTED_MODULE_13__.iD),
/* harmony export */   "E": () => (/* reexport safe */ _Results__WEBPACK_IMPORTED_MODULE_13__.E),
/* harmony export */   "mz": () => (/* reexport safe */ _convert__WEBPACK_IMPORTED_MODULE_14__.mz),
/* harmony export */   "H_": () => (/* reexport safe */ _convert__WEBPACK_IMPORTED_MODULE_14__.H_),
/* harmony export */   "s3": () => (/* reexport safe */ _convert__WEBPACK_IMPORTED_MODULE_14__.s3),
/* harmony export */   "wi": () => (/* reexport safe */ _convert__WEBPACK_IMPORTED_MODULE_14__.wi),
/* harmony export */   "NC": () => (/* reexport safe */ _convert__WEBPACK_IMPORTED_MODULE_14__.NC)
/* harmony export */ });
/* harmony import */ var _serializer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23120);
/* harmony import */ var _Identifier_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47164);
/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10798);
/* harmony import */ var _MaskPayload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42774);
/* harmony import */ var _Identifier_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11924);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71785);
/* harmony import */ var _TypedMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(94150);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42895);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95391);
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17335);
/* harmony import */ var _Persona_type__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(98297);
/* harmony import */ var _Routes_PopupRoutes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(69906);
/* harmony import */ var _Routes_DashboardRoutes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36978);
/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(27752);
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(32704);




















/***/ }),

/***/ 95391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q0": () => (/* reexport safe */ _in_memory__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "Ic": () => (/* reexport safe */ _idb__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "X2": () => (/* reexport safe */ _proxy__WEBPACK_IMPORTED_MODULE_2__.X),
/* harmony export */   "rc": () => (/* binding */ createKVStorageHost)
/* harmony export */ });
/* unused harmony export removed */
/* harmony import */ var _utils_abortSignal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11611);
/* harmony import */ var _in_memory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84443);
/* harmony import */ var _idb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88471);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40611);




const removed = Symbol.for('removed');

/**
 * Create a root scope of simple K/V storage.
 * @param backend The storage provider
 * @param message The message channel to sync the latest value
 * @param signal The abort signal
 */ function createKVStorageHost(backend, message, signal = new AbortController().signal) {
    return (name, defaultValues)=>{
        return createScope(signal, backend, message, null, name, defaultValues);
    };
}
const alwaysThrowHandler = ()=>{
    throw new TypeError('Invalid operation');
};
function createScope(signal, backend, message, parentScope, scope, defaultValues1) {
    if (scope.includes('/')) throw new TypeError('scope name cannot contains "/"');
    if (scope.includes(':')) throw new TypeError('scope name cannot contains ":"');
    const currentScope = parentScope === null ? scope : `${parentScope}/${scope}`;
    const storage = new Proxy({
        __proto__: null
    }, {
        defineProperty: alwaysThrowHandler,
        deleteProperty: alwaysThrowHandler,
        set: alwaysThrowHandler,
        preventExtensions: alwaysThrowHandler,
        setPrototypeOf: alwaysThrowHandler,
        get (target, prop, receiver) {
            if (typeof prop === 'symbol') return undefined;
            if (target[prop]) return target[prop];
            target[prop] = createState(signal, backend, message, currentScope, prop, defaultValues1[prop]);
            return target[prop];
        }
    });
    backend.beforeAutoSync.then(()=>{
        for (const [key, value] of Object.entries(defaultValues1)){
            if (value === removed) continue;
            // trigger the auto sync
            storage[key].initialized;
        }
    });
    return {
        createSubScope (subScope, defaultValues, scopeSignal) {
            const aggregatedSignal = (0,_utils_abortSignal__WEBPACK_IMPORTED_MODULE_3__/* .combineAbortSignal */ .d)(scopeSignal, signal);
            return createScope(aggregatedSignal, backend, message, currentScope, subScope, defaultValues);
        },
        storage
    };
}
function createState(signal, backend, message, scope, prop, defaultValue) {
    const propKey = `${scope}:${prop}`;
    let initialized = false;
    let usingDefaultValue = true;
    const initializedPromise = backend.beforeAutoSync.then(()=>backend.getValue(propKey)
    ).then((val)=>{
        if (val.some) usingDefaultValue = false;
        return val.unwrapOr(defaultValue);
    }).then((val)=>{
        state = val;
        initialized = true;
    });
    let state = defaultValue;
    const listeners = new Set();
    function subscribe(f) {
        listeners.add(f);
        return ()=>listeners.delete(f)
        ;
    }
    const subscription = {
        getCurrentValue: ()=>{
            if (!initialized) throw initializedPromise;
            return state;
        },
        subscribe
    };
    function setter(val) {
        if (isEqual(state, val)) return;
        usingDefaultValue = false;
        state = val;
        for (const f of listeners)f();
    }
    message.on(([eventKey, newValue])=>eventKey === propKey && setter(newValue)
    , {
        signal
    });
    return {
        get initialized () {
            return initialized;
        },
        get initializedPromise () {
            return initializedPromise;
        },
        get value () {
            if (!initialized) throw new Error('Try to access K/V state before initialization finished.');
            return state;
        },
        async setValue (value) {
            if (signal.aborted) throw new TypeError('Aborted storage.');
            // force trigger store when set state with default value to make it persistent.
            if (usingDefaultValue || !isEqual(state, value)) await backend.setValue(propKey, value);
            setter(value);
        },
        subscription
    };
}
function isEqual(a, b) {
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (typeof a === 'object') {
        // Note: JSON stringify is not stable.
        return JSON.stringify(a) === JSON.stringify(b);
    }
    return false;
}


/***/ }),

/***/ 42895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PQ": () => (/* reexport safe */ _defer__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "gw": () => (/* reexport safe */ _delay__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "K2": () => (/* reexport safe */ _detect__WEBPACK_IMPORTED_MODULE_2__.K),
/* harmony export */   "N6": () => (/* reexport safe */ _detect__WEBPACK_IMPORTED_MODULE_2__.N),
/* harmony export */   "Vs": () => (/* reexport safe */ _timeout__WEBPACK_IMPORTED_MODULE_3__.V),
/* harmony export */   "Bb": () => (/* reexport safe */ _getLocalImplementation__WEBPACK_IMPORTED_MODULE_4__.B),
/* harmony export */   "kO": () => (/* reexport safe */ _getLocalImplementation__WEBPACK_IMPORTED_MODULE_4__.k),
/* harmony export */   "Lk": () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_5__.L),
/* harmony export */   "s_": () => (/* reexport safe */ _pollingTask__WEBPACK_IMPORTED_MODULE_6__.s),
/* harmony export */   "Hd": () => (/* reexport safe */ _sessionStorageCache__WEBPACK_IMPORTED_MODULE_7__.H),
/* harmony export */   "Jf": () => (/* reexport safe */ _subscription__WEBPACK_IMPORTED_MODULE_8__.Jf),
/* harmony export */   "qY": () => (/* reexport safe */ _subscription__WEBPACK_IMPORTED_MODULE_8__.qY),
/* harmony export */   "Fd": () => (/* reexport safe */ _subscription__WEBPACK_IMPORTED_MODULE_8__.Fd),
/* harmony export */   "S3": () => (/* reexport safe */ _subscription__WEBPACK_IMPORTED_MODULE_8__.S3)
/* harmony export */ });
/* harmony import */ var _defer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66109);
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76903);
/* harmony import */ var _detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33368);
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58009);
/* harmony import */ var _getLocalImplementation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(47835);
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18911);
/* harmony import */ var _pollingTask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91953);
/* harmony import */ var _sessionStorageCache__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20727);
/* harmony import */ var _subscription__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69471);













/***/ }),

/***/ 69471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qY": () => (/* binding */ createConstantSubscription),
/* harmony export */   "Fd": () => (/* binding */ createSubscriptionFromAsync),
/* harmony export */   "S3": () => (/* binding */ mapSubscription),
/* harmony export */   "Jf": () => (/* binding */ SubscriptionFromValueRef)
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

/***/ 70395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ I18NextProviderHMR)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85468);


const I18NextProviderHMR =  false ? 0 : react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .I18nextProvider */ .a;


/***/ }),

/***/ 54430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "T3": () => (/* reexport */ ERC20TokenList/* ERC20TokenList */.T),
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N),
  "qy": () => (/* reexport */ I18NextProviderHMR/* I18NextProviderHMR */.q),
  "XB": () => (/* reexport */ ImageIcon/* ImageIcon */.X),
  "p6": () => (/* reexport */ LoadingAnimation/* LoadingAnimation */.p),
  "jq": () => (/* reexport */ MiniNetworkSelector/* MiniNetworkSelector */.j),
  "yC": () => (/* reexport */ NFTCardStyledAssetPlayer/* NFTCardStyledAssetPlayer */.y),
  "s_": () => (/* reexport */ QRCode/* QRCode */.s),
  "xR": () => (/* reexport */ SelectTokenChip/* SelectTokenChip */.x),
  "xl": () => (/* reexport */ TokenAmountPanel/* TokenAmountPanel */.x),
  "T1": () => (/* reexport */ TokenIcon/* TokenIcon */.T),
  "o": () => (/* reexport */ WalletIcon/* WalletIcon */.o)
});

// UNUSED EXPORTS: ChainIcon, CrashUI, TokenIconUI, useImageFailOver, withErrorBoundary

// EXTERNAL MODULE: ../shared/src/UI/hooks/index.ts + 1 modules
var hooks = __webpack_require__(91525);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 1 modules
var TokenIcon = __webpack_require__(4348);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(77362);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(80260);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(15606);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 1 modules
var ERC20TokenList = __webpack_require__(26055);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(94038);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var CrashUI = __webpack_require__(7068);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(96555);
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




// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(32245);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(35479);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(62228);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(10257);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(44407);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(70395);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx
var AssetPlayer = __webpack_require__(30427);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(22391);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts
















;// CONCATENATED MODULE: ../shared/src/UI/index.ts




/***/ }),

/***/ 56462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r8": () => (/* reexport */ createGlobalState/* createGlobalState */.r),
  "H9": () => (/* reexport */ useMenu/* useMenu */.H9),
  "pv": () => (/* reexport */ useObservableValues),
  "F$": () => (/* reexport */ useRemoteControlledDialog/* useRemoteControlledDialog */.F),
  "S8": () => (/* reexport */ useScrollBottomEvent/* useScrollBottomEvent */.S),
  "iD": () => (/* reexport */ useSnackbarCallback/* useSnackbarCallback */.i),
  "E": () => (/* reexport */ useValueRef)
});

// UNUSED EXPORTS: useMenuConfig, useMenuContext, useValueRefDelayed

// EXTERNAL MODULE: ../../node_modules/.pnpm/use-subscription@1.5.1_react@18.0.0-rc.0/node_modules/use-subscription/index.js
var use_subscription = __webpack_require__(47175);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../shared/src/hooks/useValueRef.ts


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

// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
;// CONCATENATED MODULE: ../shared/src/hooks/useObservableMapSet.ts



function useObservableValues(map) {
    const subscription = (0,react.useMemo)(()=>({
            getCurrentValue: ()=>[
                    ...map.values()
                ]
            ,
            subscribe: (callback)=>{
                return map.event.on(src/* ALL_EVENTS */.Ko, callback);
            }
        })
    , [
        map
    ]);
    return (0,use_subscription.useSubscription)(subscription);
}

// EXTERNAL MODULE: ../shared/src/hooks/useMenu.tsx
var useMenu = __webpack_require__(90949);
// EXTERNAL MODULE: ../shared/src/hooks/useRemoteControlledDialog.ts
var useRemoteControlledDialog = __webpack_require__(47153);
// EXTERNAL MODULE: ../shared/src/hooks/useSnackbarCallback.tsx
var useSnackbarCallback = __webpack_require__(28387);
// EXTERNAL MODULE: ../shared/src/hooks/useScrollBottomEvent.ts
var useScrollBottomEvent = __webpack_require__(52095);
// EXTERNAL MODULE: ../shared/src/hooks/createGlobalState.ts
var createGlobalState = __webpack_require__(48241);
;// CONCATENATED MODULE: ../shared/src/hooks/index.ts









/***/ }),

/***/ 98419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ addSharedI18N)
/* harmony export */ });
/* unused harmony export languages */
/* harmony import */ var _en_US_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75961);
/* harmony import */ var _ja_JP_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45558);
/* harmony import */ var _ko_KR_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93495);
/* harmony import */ var _qya_AA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88807);
/* harmony import */ var _zh_CN_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83055);
/* harmony import */ var _zh_TW_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47359);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87470);
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

/***/ 34010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useDialogStackActor)
/* harmony export */ });
/* unused harmony export DialogStackingProvider */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);


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
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Stack.Provider, {
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
    return(/*#__PURE__*/ _jsx(StackingScopeEnabled.Provider, {
        children: props.children,
        value: !props.disabled
    }));
}


/***/ }),

/***/ 6985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14767);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28527);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76342);




function CSSVariableInjector(props) {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { current: useConsistentTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(props.useTheme || _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const colorScheme = useConsistentTheme().palette.mode;
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{
        const host = ref.current.closest('main').parentNode.querySelector('head');
        let style = host.querySelector('style[data-css-var]');
        if (!style) {
            host.insertBefore(style = document.createElement('style'), host.firstChild);
            style.dataset.cssVar = '';
        }
        (0,___WEBPACK_IMPORTED_MODULE_1__/* .applyMaskColorVars */ .Dc)(style, colorScheme);
    }, [
        colorScheme
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ref: ref,
        children: props.children
    }));
}


/***/ }),

/***/ 79036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createReactRootShadowedPartial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15621);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39225);



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
    const root = (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
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
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootStyleProvider */ .q, {
            shadow: shadow,
            children: wrap ? wrap(jsx) : jsx
        }));
    }
}


/***/ }),

/***/ 75666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "US": () => (/* reexport */ CSSVariableInjector/* CSSVariableInjector */.U),
  "zV": () => (/* reexport */ createReactRootShadowed/* createReactRootShadowedPartial */.z),
  "lr": () => (/* reexport */ createShadowRootForwardedComponent),
  "vg": () => (/* reexport */ createShadowRootForwardedPopperComponent),
  "d_": () => (/* reexport */ setupPortalShadowRoot),
  "ad": () => (/* reexport */ usePortalShadowRoot)
});

// UNUSED EXPORTS: NoEffectUsePortalShadowRootContext, useCurrentShadowRootStyles

// EXTERNAL MODULE: ../theme/src/ShadowRoot/ShadowRootStyleProvider.tsx
var ShadowRootStyleProvider = __webpack_require__(39225);
// EXTERNAL MODULE: ../theme/src/ShadowRoot/createReactRootShadowed.tsx
var createReactRootShadowed = __webpack_require__(79036);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../theme/src/ShadowRoot/Portal.tsx



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
/** usePortalShadowRoot under this context does not do anything. (And it will return an empty container). */ const NoEffectUsePortalShadowRootContext = /*#__PURE__*/ (0,react.createContext)(false);
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
    const disabled = (0,react.useRef)((0,react.useContext)(NoEffectUsePortalShadowRootContext)).current;
    if (disabled) return renderer(undefined);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [findMountingShadowRef, setRef] = (0,react.useState)(null);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(IsolatedRender, {
        ...doms,
        findMountingShadowRef: findMountingShadowRef,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
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
    const css = (0,ShadowRootStyleProvider/* useCurrentShadowRootStyles */.I)(findMountingShadowRef);
    const containerInUse = container.children.length !== 0;
    (0,react.useEffect)(()=>{
        container.appendChild = bind(container.appendChild, container, update);
        container.removeChild = bind(container.removeChild, container, update);
    }, []);
    (0,react.useEffect)(()=>{
        if (!containerInUse) return root.remove();
        const shadow = PortalShadowRoot();
        if (root.parentElement === shadow) return;
        shadow.appendChild(root);
    }, [
        containerInUse,
        root
    ]);
    (0,react.useEffect)(()=>{
        if (findMountingShadowRef && style.textContent !== css) style.textContent = css;
    }, [
        style,
        css,
        findMountingShadowRef
    ]);
    return children;
};
function createShadowRootForwardedComponent(Component) {
    return(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
                container: container,
                ...props,
                ref: ref
            })
        );
    }));
}
function createShadowRootForwardedPopperComponent(Component) {
    return(/*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
        return usePortalShadowRoot((container)=>{
            return(/*#__PURE__*/ (0,jsx_runtime.jsx)(Component, {
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
    const [, _update] = (0,react.useState)(0);
    return ()=>_update((i)=>i + 1
        )
    ;
}
function useSideEffectRef(f) {
    const ref = (0,react.useRef)(undefined);
    if (!ref.current) ref.current = f();
    return ref.current;
}

// EXTERNAL MODULE: ../theme/src/ShadowRoot/CSSVariableInjector.tsx
var CSSVariableInjector = __webpack_require__(6985);
;// CONCATENATED MODULE: ../theme/src/ShadowRoot/index.ts






/***/ }),

/***/ 14767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "um": () => (/* binding */ Appearance),
  "E1": () => (/* reexport */ ButtonGroupTab/* ButtonGroupTabList */.E),
  "US": () => (/* reexport */ ShadowRoot/* CSSVariableInjector */.US),
  "qA": () => (/* reexport */ CountdownButton/* CountdownButton */.q),
  "YO": () => (/* reexport */ Snackbar/* CustomSnackbarProvider */.YO),
  "pL": () => (/* reexport */ FolderTabs/* FolderTabPanel */.p),
  "Jc": () => (/* reexport */ FolderTabs/* FolderTabs */.J),
  "ZN": () => (/* reexport */ constants/* MaskColorVar */.ZN),
  "Hr": () => (/* binding */ MaskDarkTheme),
  "Df": () => (/* reexport */ Dialog/* MaskDialog */.D),
  "Cp": () => (/* binding */ MaskLightTheme),
  "b4": () => (/* reexport */ LoadingButton/* MaskLoadingButton */.b),
  "FU": () => (/* reexport */ TextField/* MaskTextField */.F),
  "g8": () => (/* reexport */ PhoneNumberField/* PhoneNumberField */.g),
  "xV": () => (/* reexport */ SearchableList/* SearchableList */.x),
  "oe": () => (/* reexport */ SendingCodeField/* SendingCodeField */.o),
  "wT": () => (/* reexport */ Snackbar/* SnackbarProvider */.wT),
  "Dc": () => (/* reexport */ constants/* applyMaskColorVars */.Dc),
  "zV": () => (/* reexport */ ShadowRoot/* createReactRootShadowedPartial */.zV),
  "lr": () => (/* reexport */ ShadowRoot/* createShadowRootForwardedComponent */.lr),
  "vg": () => (/* reexport */ ShadowRoot/* createShadowRootForwardedPopperComponent */.vg),
  "nb": () => (/* reexport */ constants/* getMaskColor */.nb),
  "F4": () => (/* reexport */ makeStyles/* keyframes */.F),
  "ZL": () => (/* reexport */ makeStyles/* makeStyles */.Z),
  "ze": () => (/* reexport */ custom_ui_helper/* mergeClasses */.z),
  "or": () => (/* reexport */ custom_ui_helper.or),
  "d_": () => (/* reexport */ ShadowRoot/* setupPortalShadowRoot */.d_),
  "Ii": () => (/* reexport */ Snackbar/* useCustomSnackbar */.Ii),
  "tE": () => (/* reexport */ DialogStack/* useDialogStackActor */.t),
  "ad": () => (/* reexport */ ShadowRoot/* usePortalShadowRoot */.ad),
  "Bc": () => (/* reexport */ custom_ui_helper/* useStylesExtends */.B),
  "QO": () => (/* binding */ useSystemPreferencePalette),
  "YE": () => (/* reexport */ hooks/* useTabs */.Y)
});

// UNUSED EXPORTS: ButtonTab, CustomSnackbarContent, DialogStackingProvider, MaskDialogTitle, MaskSearchableItemInList, NoEffectUsePortalShadowRootContext, currentSystemPreferencePalette, parseColor, useCurrentShadowRootStyles, useMaskColor, useMaskDialog, useSnackbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/styles/createTheme.js + 8 modules
var createTheme = __webpack_require__(54247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.2.5_811d2bc6069f340521b4a59905442643/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(95501);
// EXTERNAL MODULE: ../theme/src/changes.ts
var changes = __webpack_require__(43903);
// EXTERNAL MODULE: ../theme/src/component-changes.ts
var component_changes = __webpack_require__(89419);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js + 2 modules
var merge = __webpack_require__(97173);
// EXTERNAL MODULE: ../theme/src/constants.ts
var constants = __webpack_require__(24969);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tinycolor2@1.4.2/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(32086);
// EXTERNAL MODULE: ../theme/src/makeStyles.ts
var makeStyles = __webpack_require__(62554);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/Dialog.tsx
var Dialog = __webpack_require__(98737);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogTitle.tsx
var DialogTitle = __webpack_require__(82085);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(34010);
;// CONCATENATED MODULE: ../theme/src/Components/Dialogs/index.ts




// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/index.ts + 2 modules
var ButtonGroupTab = __webpack_require__(9729);
// EXTERNAL MODULE: ../theme/src/Components/FolderTabs/index.tsx
var FolderTabs = __webpack_require__(8041);
// EXTERNAL MODULE: ../theme/src/Components/Snackbar/index.tsx
var Snackbar = __webpack_require__(88569);
// EXTERNAL MODULE: ../theme/src/Components/SearchableList/index.ts + 2 modules
var SearchableList = __webpack_require__(28631);
// EXTERNAL MODULE: ../theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(81964);
// EXTERNAL MODULE: ../theme/src/Components/CountdownButton/index.tsx
var CountdownButton = __webpack_require__(3221);
// EXTERNAL MODULE: ../theme/src/Components/SendingCodeField/index.tsx
var SendingCodeField = __webpack_require__(93693);
// EXTERNAL MODULE: ../theme/src/Components/PhoneNumberField/index.tsx
var PhoneNumberField = __webpack_require__(61478);
// EXTERNAL MODULE: ../theme/src/Components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(15480);
;// CONCATENATED MODULE: ../theme/src/Components/index.ts











// EXTERNAL MODULE: ../theme/src/hooks/index.ts + 1 modules
var hooks = __webpack_require__(25815);
// EXTERNAL MODULE: ../theme/src/ShadowRoot/index.ts + 1 modules
var ShadowRoot = __webpack_require__(75666);
// EXTERNAL MODULE: ../theme/src/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(35);
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
    return (0,useMediaQuery/* default */.Z)(query) ? 'dark' : 'light';
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

/***/ 62554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ makeStyles),
/* harmony export */   "F": () => (/* reexport safe */ tss_react__WEBPACK_IMPORTED_MODULE_0__.F4)
/* harmony export */ });
/* harmony import */ var tss_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28527);


const { makeStyles  } = (0,tss_react__WEBPACK_IMPORTED_MODULE_0__/* .createMakeStyles */ .a0)({
    useTheme: _mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
});



/***/ }),

/***/ 54575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "dC": () => (/* binding */ resolveProviderShortenLink),
/* harmony export */   "IH": () => (/* binding */ resolveProviderHomeLink),
/* harmony export */   "hX": () => (/* binding */ resolveProviderDownloadLink),
/* harmony export */   "YU": () => (/* binding */ resolveProviderInjectedKey),
/* harmony export */   "OC": () => (/* binding */ resolveNetworkAddressPrefix),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "Po": () => (/* binding */ resolveChainName),
/* harmony export */   "r_": () => (/* binding */ resolveChainFullName),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "sJ": () => (/* binding */ resolveDomainLink),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink)
/* harmony export */ });
/* unused harmony exports resolveCollectibleProviderLink, resolveCollectibleAssetLink, resolveOpenSeaLink */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14381);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25071);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11585);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9094);




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
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora'
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
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .NetworkType.Aurora */ .td.Aurora]: 'Aurora'
}, 'Unknown');
function resolveChainName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.name) !== null && ref !== void 0 ? ref : 'Unknown';
}
function resolveChainFullName(chainId) {
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    var ref;
    return (ref = chainDetailed === null || chainDetailed === void 0 ? void 0 : chainDetailed.fullName) !== null && ref !== void 0 ? ref : 'Unknown';
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
    [_types__WEBPACK_IMPORTED_MODULE_3__/* .ChainId.Aurora_Testnet */ .a_.Aurora_Testnet]: 'rgb(112, 212, 74)'
}, 'rgb(214, 217, 220)');
function resolveLinkOnExplorer(chainId) {
    var ref, ref1;
    const chainDetailed = (0,_utils__WEBPACK_IMPORTED_MODULE_4__/* .getChainDetailed */ .$G)(chainId);
    if (!chainDetailed) return '';
    var ref2;
    return (ref2 = (ref = chainDetailed.explorers) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.url) !== null && ref2 !== void 0 ? ref2 : chainDetailed.infoURL;
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
function resolveIPFSLink(ipfs) {
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://ipfs.fleek.co/ipfs/:ipfs', {
        ipfs
    });
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

/***/ 46517:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85621);


const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get(target, prop) {
        if (!advanceMethodProps.includes(prop))
            return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function (...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    },
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
        return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.a.set(proxiedCursor, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u)(cursor));
    while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return ((prop === Symbol.asyncIterator &&
        (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
        (prop === 'iterate' && (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore])));
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
        if (isIteratorProp(target, prop))
            return iterate;
        return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    },
}));


/***/ }),

/***/ 31637:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "re": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "X3": () => (/* binding */ openDB)
/* harmony export */ });
/* unused harmony export deleteDB */
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85621);



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking)
            db.addEventListener('versionchange', () => blocking());
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return wrap(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.X3),
/* harmony export */   "re": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.re)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ }),

/***/ 7185:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UG": () => (/* binding */ Err),
/* harmony export */   "Ok": () => (/* binding */ Ok),
/* harmony export */   "x4": () => (/* binding */ Result)
/* harmony export */ });
/* unused harmony exports ErrImpl, OkImpl */
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

/***/ 88674:
/***/ ((module) => {

module.exports = {};

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
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
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
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
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
/******/ 			return "js/chunk." + ({"125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","2261":"npm.wyvern-js","2299":"npm.tweetnacl","2598":"npm.react-hook-form","2735":"npm-ns.solana.web3.js","2908":"npm-ns.dimensiondev.stego-js","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3850":"npm.arweave","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4428":"npm-ns.uniswap.v2-sdk","4477":"npm.gun","4520":"npm-ns.metaplex-foundation.mpl-core","4554":"Plugin/Poll","4557":"npm.superstruct","5049":"Gun","5132":"npm.rss3-next","5229":"npm.cross-fetch","5258":"MaskWallet","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5687":"npm-ns.solana.buffer-layout","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6230":"npm.zod","6316":"npm-ns.msgpack.msgpack","6813":"npm-ns.portto.sdk","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7070":"npm.regenerator-runtime","7141":"npm.json-rpc-engine","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","7913":"npm.lodash","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8492":"npm.aes-js","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9259":"npm.html-to-image","9278":"npm.axios","9447":"npm.engine.io-parser","9566":"npm.rpc-websockets","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
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
/******/ 		var isBrowser = !!(() => { try { if (typeof browser.runtime.getURL === "function") return true } catch(e) {} })()
/******/ 		var isChrome = !!(() => { try { if (typeof chrome.runtime.getURL === "function") return true } catch(e) {} })()
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
/******/ 			9306: 0
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
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,8136,2486,3147,187,5737,3883,3693,4544,8019,8712,9227,2752,1440,2162,3832,71,8000,3638,8393,12,5105,6565,4570,102,8145,5313,1555,9141,4586,433,9697,3758,2619,5838,3142,3846,8129,5951,7849,7512,5178,9744,444,6160,2222,9197,4960,253,572,8547,2088,3981,1696,516,2974,7822,159,7856,6067,234,9737,79,4590,2891,5784,9855,4029,3619,8091,6671,7944,6526,6503,4028,2108], () => (__webpack_require__(42804)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,8136,2486,3147,187,5737,3883,3693,4544,8019,8712,9227,2752,1440,2162,3832,71,8000,3638,8393,12,5105,6565,4570,102,8145,5313,1555,9141,4586,433,9697,3758,2619,5838,3142,3846,8129,5951,7849,7512,5178,9744,444,6160,2222,9197,4960,253,572,8547,2088,3981,1696,516,2974,7822,159,7856,6067,234,9737,79,4590,2891,5784,9855,4029,3619,8091,6671,7944,6526,6503,4028,2108], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;