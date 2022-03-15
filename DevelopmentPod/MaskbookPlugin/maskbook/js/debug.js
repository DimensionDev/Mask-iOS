/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 25789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MD": () => (/* binding */ C),
/* harmony export */   "sc": () => (/* binding */ L)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enablePatches, finishDraft, freeze, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return true||0,U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return false&&0,en.get(r,n)},set:function(r){var t=this[Q]; false&&0,en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return false&&0,on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return false&&0,en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; false&&(0);var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (fn)));
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 92304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(81758);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),

/***/ 80629:
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
__webpack_require__(52458);var f=__webpack_require__(76342),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:n.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 76342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(58880);
} else {}


/***/ }),

/***/ 69366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   "i1": () => (/* reexport safe */ _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   "j3": () => (/* reexport safe */ _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__.j)
/* harmony export */ });
/* unused harmony exports pasteText, pasteImage, pasteInstagram, inputText, hookInputUploadOnce */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29850);
/* harmony import */ var _bridgedEthereum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58157);
/* harmony import */ var _bridgedCoin98__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74301);
/* harmony import */ var _bridgedSolana__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68292);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71793);








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

/***/ 17913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    isolated_dashboard_bridge_enabled: false,
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
    post_actions_enabled: false,
    next_id_tip_enabled: false,
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

/***/ 17703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 70609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__._H),
/* harmony export */   "dH": () => (/* reexport safe */ _helpers_download__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   "ql": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   "uU": () => (/* reexport safe */ _kv_storage__WEBPACK_IMPORTED_MODULE_2__.uU),
/* harmony export */   "vU": () => (/* reexport safe */ _flags__WEBPACK_IMPORTED_MODULE_1__.vU)
/* harmony export */ });
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12814);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17913);
/* harmony import */ var _kv_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55577);
/* harmony import */ var _helpers_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17703);






/***/ }),

/***/ 55577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_H": () => (/* binding */ PersistentStorages),
/* harmony export */   "uU": () => (/* binding */ InMemoryStorages)
/* harmony export */ });
/* unused harmony export setupMaskKVStorageBackend */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12814);


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
    }),
    InstagramNFTEvent: createInMemoryKVStorage('InstagramNFTEvent', {
        userId: '',
        address: '',
        tokenId: ''
    })
};
const PersistentStorages = {
    Plugin: createPersistentKVStorage('plugin', {})
};


/***/ }),

/***/ 12814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ MaskMessages)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);


const MaskMessages = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.WebExtensionMessage({
    domain: 'mask'
});
MaskMessages.serialization = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .serializer */ .GM;
Object.assign(globalThis, {
    MaskMessages
});


/***/ }),

/***/ 20199:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

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
Version: ${"v1.29.12-2096-g2617e1b04"}
Tag Name: ${"v2.5.0"}
Build Date: ${"2022-03-10T06:24:06.162Z"}
Commit Hash: ${"2617e1b04"}
Commit Date: ${"2022-03-10T06:18:26.000Z"}
Remote URL: ${"git@github.com:DimensionDev/Maskbook.git"}
Branch Name: ${"feat/sendRedpacketToNative"}

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
var utils = __webpack_require__(13573);
;// CONCATENATED MODULE: ./src/extension/debug-page/DebugInfo.tsx




const DEBUG_INFO = {
    'User Agent': navigator.userAgent,
    'Mask Version': "v1.29.12-2096-g2617e1b04",
    'Build Date': process.env.channel_DATE,
    'Tag Name': "v2.5.0",
    'Commit Hash': "2617e1b04",
    'Commit Date': "2022-03-10T06:18:26.000Z",
    'Remote URL': "git@github.com:DimensionDev/Maskbook.git",
    'Branch Name': "feat/sendRedpacketToNative",
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
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./src/extension/debug-page/DatabaseOps.tsx




(0,src/* __DEBUG__ONLY__enableCryptoKeySerialization */.ZI)();
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
        const parsed = await src/* serializer.deserialization */.GM.deserialization(await file.text());
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
            version: "v1.29.12-2096-g2617e1b04",
            'build-date': "2022-03-10T06:24:06.162Z",
            'tag-name': "v2.5.0",
            'commit-hash': "2617e1b04",
            'commit-date': "2022-03-10T06:18:26.000Z",
            'remote-url': "git@github.com:DimensionDev/Maskbook.git",
            'branch-name': "feat/sendRedpacketToNative",
            dirty: false,
            'tag-dirty': true
        },
        instances
    };
    return JSON.stringify(src/* serializer.serialization */.GM.serialization(payload), undefined, 2);
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

/***/ 45925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Services, ServicesWithProgress */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
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
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(4477), __webpack_require__.e(9492), __webpack_require__.e(6663), __webpack_require__.e(4429), __webpack_require__.e(8707)]).then(__webpack_require__.bind(__webpack_require__, 78707))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(4088)]).then(__webpack_require__.bind(__webpack_require__, 64426))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(4088)]).then(__webpack_require__.bind(__webpack_require__, 19470))
    , 'Welcome'),
    Helper: add(()=>__webpack_require__.e(/* import() */ 841).then(__webpack_require__.bind(__webpack_require__, 90841))
    , 'Helper'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(6478)]).then(__webpack_require__.bind(__webpack_require__, 9338))
    , 'Ethereum'),
    SocialNetwork: add(()=>__webpack_require__.e(/* import() */ 2516).then(__webpack_require__.bind(__webpack_require__, 62516))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(4088)]).then(__webpack_require__.bind(__webpack_require__, 27689))
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 1400).then(__webpack_require__.bind(__webpack_require__, 61400))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(4477), __webpack_require__.e(9492), __webpack_require__.e(6663), __webpack_require__.e(4429), __webpack_require__.e(2548)]).then(__webpack_require__.bind(__webpack_require__, 2548))
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

/***/ 73336:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ createPluginHost)
/* harmony export */ });
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80426);
/* harmony import */ var _servie_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69260);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2214);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6900);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45925);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79226);
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
        minimalMode,
        addI18NResource (plugin, resource) {
            (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .createI18NBundle */ .C9)(plugin, resource)(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
        },
        createContext
    };
}


/***/ }),

/***/ 17692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ NFT_AVATAR_DB_NAME),
/* harmony export */   "EA": () => (/* binding */ NFT_AVATAR_DB_NAME_STORAGE),
/* harmony export */   "Uu": () => (/* binding */ PLUGIN_ID),
/* harmony export */   "kW": () => (/* binding */ NFT_AVATAR_JSON_SERVER)
/* harmony export */ });
/* unused harmony exports NFT_CONTRACT_JSON_VERIFIED_SERVER, PLUGIN_NAME, PLUGIN_DESCRIPTION, RSS3_KEY_SNS */
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27194);

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

/***/ 21202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings),
/* harmony export */   "vv": () => (/* binding */ debugModeSetting)
/* harmony export */ });
/* unused harmony exports currentImagePayloadStatus, currentSelectedIdentity, getCurrentSelectedIdentity, userGuideStatus, sayHelloShowed, dismissPinExtensionTip, dismissVerifyNextID, bioDescription, personalHomepage, newDashboardConnection */
/* harmony import */ var _createSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91296);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6900);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13758);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92597);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48476);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79226);
/* harmony import */ var _plugins_EVM_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(89664);







/**
 * Does the debug mode on
 */ const debugModeSetting = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('debugMode', false, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug_desc')
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
const dismissVerifyNextID =  true ? (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('useless', false) : 0;
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

/***/ 40543:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DF": () => (/* binding */ isFacebook),
/* harmony export */   "Iz": () => (/* binding */ FACEBOOK_ID),
/* harmony export */   "qv": () => (/* binding */ facebookBase)
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

/***/ 94869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    }
};
const instagramWorkerBase = {
    ...instagramBase,
    gunNetworkHint: id
};


/***/ }),

/***/ 74926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L3": () => (/* binding */ isTwitter),
/* harmony export */   "oQ": () => (/* binding */ twitterBase)
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

/***/ 23003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork)
/* harmony export */ });
/* unused harmony export getCurrentIdentifier */
/* harmony import */ var _twitter_com_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74926);
/* harmony import */ var _facebook_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40543);
/* harmony import */ var _instagram_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94869);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27194);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61751);





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

/***/ 86911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    return Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3787)).then((x)=>x.activateSocialNetworkUIInner(ui_deferred)
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

/***/ 61751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C8": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.C8),
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LB": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.LB),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "gE": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUI)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32665);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3787);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86911);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44840);







/***/ }),

/***/ 3787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activateSocialNetworkUIInner": () => (/* binding */ activateSocialNetworkUIInner),
/* harmony export */   "activatedSocialNetworkUI": () => (/* binding */ activatedSocialNetworkUI),
/* harmony export */   "globalUIState": () => (/* binding */ globalUIState),
/* harmony export */   "loadSocialNetworkUI": () => (/* binding */ loadSocialNetworkUI),
/* harmony export */   "loadSocialNetworkUISync": () => (/* binding */ loadSocialNetworkUISync)
/* harmony export */ });
/* harmony import */ var _utils_debug_general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _utils_debug_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73624);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45925);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70609);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6900);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32665);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21202);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(79226);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27194);
/* harmony import */ var _social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23003);
/* harmony import */ var _plugin_infra_host__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73336);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86911);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(13573);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66559);















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
    networkIdentifier: 'localhost',
    name: '',
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
    var ref19, ref1, ref2, _injection15, ref3, _injection1, ref4, _injection2, ref5, ref6, ref7, _injection3, ref8, _injection4, ref9, _injection5, ref10, _injection6, ref11, _injection7, ref12, _injection8, ref13, _injection9, ref14, _injection10, ref15, _injection11, ref16, _injection12, ref17;
    (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14__.assertNotEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_14__.Environment.ManifestBackground);
    console.log('Activating provider', ui_deferred.networkIdentifier);
    const ui = activatedSocialNetworkUI = await loadSocialNetworkUI(ui_deferred.networkIdentifier);
    console.log('Provider activated. You can access it by globalThis.ui', ui);
    Object.assign(globalThis, {
        ui
    });
    const abort1 = new AbortController();
    const { signal: signal1  } = abort1;
    if (false) { var ref18; }
    await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_13__/* .waitDocumentReadyState */ .uL)('interactive');
    i18nOverwrite();
    const state = await ui.init(signal1);
    globalUIState = {
        ...state,
        ...(0,_utils__WEBPACK_IMPORTED_MODULE_5__/* .managedStateCreator */ .MJ)()
    };
    (ref19 = ui.customization.paletteMode) === null || ref19 === void 0 ? void 0 : ref19.start(signal1);
    startIntermediateSetupGuide();
    $unknownIdentityResolution();
    (ref1 = ui.collecting.postsProvider) === null || ref1 === void 0 ? void 0 : ref1.start(signal1);
    startPostListener();
    (ref2 = ui.collecting.currentVisitingIdentityProvider) === null || ref2 === void 0 ? void 0 : ref2.start(signal1);
    (ref3 = (_injection15 = ui.injection).pageInspector) === null || ref3 === void 0 ? void 0 : ref3.call(_injection15, signal1);
    if (_shared__WEBPACK_IMPORTED_MODULE_3__/* .Flags.toolbox_enabled */ .vU.toolbox_enabled) (ref4 = (_injection1 = ui.injection).toolbox) === null || ref4 === void 0 ? void 0 : ref4.call(_injection1, signal1);
    (ref5 = (_injection2 = ui.injection).setupPrompt) === null || ref5 === void 0 ? void 0 : ref5.call(_injection2, signal1);
    (ref6 = ui.injection.newPostComposition) === null || ref6 === void 0 ? void 0 : (ref7 = ref6.start) === null || ref7 === void 0 ? void 0 : ref7.call(ref6, signal1);
    (ref8 = (_injection3 = ui.injection).searchResult) === null || ref8 === void 0 ? void 0 : ref8.call(_injection3, signal1);
    (ref9 = (_injection4 = ui.injection).userBadge) === null || ref9 === void 0 ? void 0 : ref9.call(_injection4, signal1);
    (ref10 = (_injection5 = ui.injection).profileTab) === null || ref10 === void 0 ? void 0 : ref10.call(_injection5, signal1);
    (ref11 = (_injection6 = ui.injection).profileTabContent) === null || ref11 === void 0 ? void 0 : ref11.call(_injection6, signal1);
    (ref12 = (_injection7 = ui.injection).userAvatar) === null || ref12 === void 0 ? void 0 : ref12.call(_injection7, signal1);
    (ref13 = (_injection8 = ui.injection).profileAvatar) === null || ref13 === void 0 ? void 0 : ref13.call(_injection8, signal1);
    (ref14 = (_injection9 = ui.injection).enhancedProfileNFTAvatar) === null || ref14 === void 0 ? void 0 : ref14.call(_injection9, signal1);
    (ref15 = (_injection10 = ui.injection).openNFTAvatar) === null || ref15 === void 0 ? void 0 : ref15.call(_injection10, signal1);
    (ref16 = (_injection11 = ui.injection).postAndReplyNFTAvatar) === null || ref16 === void 0 ? void 0 : ref16.call(_injection11, signal1);
    (ref17 = (_injection12 = ui.injection).avatarClipNFT) === null || ref17 === void 0 ? void 0 : ref17.call(_injection12, signal1);
    (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_8__/* .startPluginSNSAdaptor */ .D4)((0,_social_network_adaptor_utils__WEBPACK_IMPORTED_MODULE_9__/* .getCurrentSNSNetwork */ .G)(ui.networkIdentifier), (0,_plugin_infra_host__WEBPACK_IMPORTED_MODULE_10__/* .createPluginHost */ .R)(signal1, (pluginID, signal)=>{
        return {
            createKVStorage (type, defaultValues) {
                if (type === 'memory') return _shared__WEBPACK_IMPORTED_MODULE_3__/* .InMemoryStorages.Plugin.createSubScope */ .uU.Plugin.createSubScope(pluginID, defaultValues, signal);
                else return _shared__WEBPACK_IMPORTED_MODULE_3__/* .PersistentStorages.Plugin.createSubScope */ ._H.Plugin.createSubScope(pluginID, defaultValues, signal);
            },
            personaSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Identity.signWithPersona */ .ZP.Identity.signWithPersona,
            walletSign: _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.personalSign */ .ZP.Ethereum.personalSign,
            currentPersona: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .createSubscriptionFromAsync */ .Fd)(_extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Settings.getCurrentPersonaIdentifier */ .ZP.Settings.getCurrentPersonaIdentifier, undefined, _utils__WEBPACK_IMPORTED_MODULE_12__/* .MaskMessages.events.currentPersonaIdentifier.on */ .ql.events.currentPersonaIdentifier.on)
        };
    }));
    (0,_utils__WEBPACK_IMPORTED_MODULE_12__/* .setupShadowRootPortal */ .Vc)();
    function i18nOverwrite() {
        const i18n = ui.customization.i18nOverwrite || {};
        for(const namespace in i18n){
            const ns = i18n[namespace];
            for(const i18nKey in ns){
                const pair = i18n[namespace][i18nKey];
                for(const language in pair){
                    const value = pair[language];
                    _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_4__/* ["default"].addResource */ .Z.addResource(language, namespace, i18nKey, value);
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
            _utils__WEBPACK_IMPORTED_MODULE_12__/* .MaskMessages.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage */ .ql.events.Native_visibleSNS_currentDetectedProfileUpdated.sendToBackgroundPage(newValue.identifier.toText());
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
        var ref24;
        const posts = (ref24 = ui.collecting.postsProvider) === null || ref24 === void 0 ? void 0 : ref24.posts;
        if (!posts) return;
        const abortSignals = new WeakMap();
        posts.event.on('set', async (key, value)=>{
            var _injection, ref, _injection13, ref20, _injection14, ref21, ref22, ref23;
            await unmount(key);
            const abort = new AbortController();
            signal1.addEventListener('abort', ()=>abort.abort()
            );
            abortSignals.set(key, abort);
            const { signal: postSignal  } = abort;
            (ref = (_injection = ui.injection).enhancedPostRenderer) === null || ref === void 0 ? void 0 : ref.call(_injection, postSignal, value);
            (ref20 = (_injection13 = ui.injection).postInspector) === null || ref20 === void 0 ? void 0 : ref20.call(_injection13, postSignal, value);
            (ref21 = (_injection14 = ui.injection).postActions) === null || ref21 === void 0 ? void 0 : ref21.call(_injection14, postSignal, value);
            (ref22 = ui.injection.commentComposition) === null || ref22 === void 0 ? void 0 : ref22.compositionBox(postSignal, value);
            (ref23 = ui.injection.commentComposition) === null || ref23 === void 0 ? void 0 : ref23.commentInspector(postSignal, value);
        });
        posts.event.on('delete', unmount);
        function unmount(key) {
            if (!abortSignals.has(key)) return;
            abortSignals.get(key).abort();
            // AbortSignal need an event loop
            // unmount a React root need another one.
            // let's guess a number that the React root will unmount.
            return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_13__/* .delay */ .gw)(16 * 3);
        }
    }
    function startIntermediateSetupGuide() {
        const network = ui.networkIdentifier;
        const id1 = _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].value;
        let started = false;
        const onStatusUpdate = (id)=>{
            const { persona , status  } = JSON.parse(id || '{}');
            if (persona && status && !started) {
                var _injection, ref;
                started = true;
                (ref = (_injection = ui.injection).setupWizard) === null || ref === void 0 ? void 0 : ref.call(_injection, signal1, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .Identifier.fromString */ .xb.fromString(persona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_7__/* .ECKeyIdentifier */ .ob).unwrap());
            }
        };
        _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].addListener(onStatusUpdate);
        _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .currentSetupGuideStatus */ .AI[network].readyPromise.then(onStatusUpdate);
        onStatusUpdate(id1);
    }
}
async function loadSocialNetworkUI(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    const define = _define__WEBPACK_IMPORTED_MODULE_11__/* .definedSocialNetworkUIs.get */ .LB.get(identifier);
    if (!define) throw new Error('SNS adaptor not found');
    const ui1 = (await define.load()).default;
    definedSocialNetworkUIsResolved.set(identifier, ui1);
    if (false) { var ref; }
    return ui1;
}
function loadSocialNetworkUISync(identifier) {
    if (definedSocialNetworkUIsResolved.has(identifier)) return definedSocialNetworkUIsResolved.get(identifier);
    return null;
}


/***/ }),

/***/ 32665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MJ": () => (/* binding */ managedStateCreator)
/* harmony export */ });
/* unused harmony exports stateCreator, creator */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);


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

/***/ 20593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X2": () => (/* binding */ decodeTextPayloadUI),
/* harmony export */   "XF": () => (/* binding */ encodeTextPayloadUI)
/* harmony export */ });
/* unused harmony exports encodePublicKeyUI, decodePublicKeyUI */
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3787);

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

/***/ 44840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bu": () => (/* binding */ getNetworkWorkerUninitialized),
/* harmony export */   "C8": () => (/* binding */ getNetworkWorker)
/* harmony export */ });
/* unused harmony export definedSocialNetworkWorkersResolved */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86911);


const definedSocialNetworkWorkersResolved = new Set();
async function activateNetworkWorker(id) {
    if (!(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.isEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground)) {
        throw new TypeError();
    }
    for (const each of definedSocialNetworkWorkersResolved){
        if (each.networkIdentifier === id) return each;
    }
    for (const each1 of _define__WEBPACK_IMPORTED_MODULE_0__/* .definedSocialNetworkWorkers */ .zq){
        if (each1.networkIdentifier === id) {
            const worker = (await each1.load()).default;
            definedSocialNetworkWorkersResolved.add(worker);
            return worker;
        }
    }
    throw new Error('Worker not found');
}
async function getNetworkWorker(network) {
    if (typeof network === 'string') return activateNetworkWorker(network);
    return getNetworkWorker(network.network);
}
function getNetworkWorkerUninitialized(network) {
    if (typeof network === 'string') return [
        ..._define__WEBPACK_IMPORTED_MODULE_0__/* .definedSocialNetworkWorkers */ .zq
    ].find((x)=>x.networkIdentifier === network
    );
    return getNetworkWorkerUninitialized(network.network);
}


/***/ }),

/***/ 23032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 13573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ql": () => (/* reexport */ messages/* MaskMessages */.q),
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
  "MN": () => (/* reexport */ useSettingSwitcher/* useSettingsSwitcher */.M),
  "Ei": () => (/* reexport */ useSettingSwitcher/* useSwitcher */.E)
});

// UNUSED EXPORTS: Avatar, CryptoKeyToJsonWebKey, DecryptFailedReason, JWKToKey, JsonWebKeyToCryptoKey, PersonaArrayComparer, asyncIteratorWithResult, clamp, collectNodeText, collectTwitterEmoji, constructAlpha38, createNormalReactRoot, createReactRootShadowed, createShadowRootForwardedComponent, createShadowRootForwardedPopperComponent, deconstructPayload, downloadUrl, fromRGB, getBackupPreviewInfo, getForegroundColor, getKeyParameter, isDark, isDarkTheme, keyToAddr, keyToJWK, mapContactAvatarColor, memorizeAsyncGenerator, nthChild, pasteImageToActiveElements, regexMatch, selectElementContents, shade, startWatch, toRGB, untilElementAvailable, useClassicMaskSNSTheme, useColorStyles, useErrorStyles, usePopupsMaskFullPageTheme, useQueryNavigatorPermission, useSuspense

// EXTERNAL MODULE: ./src/utils/components/Avatar.tsx
var Avatar = __webpack_require__(23032);
;// CONCATENATED MODULE: ./src/utils/components/index.ts


// EXTERNAL MODULE: ./src/utils/debug/index.ts
var debug = __webpack_require__(31829);
// EXTERNAL MODULE: ./src/utils/hooks/useControlledDialog.ts
var useControlledDialog = __webpack_require__(91557);
// EXTERNAL MODULE: ./src/utils/hooks/useMatchXS.ts
var useMatchXS = __webpack_require__(50530);
// EXTERNAL MODULE: ./src/utils/hooks/useMenu.tsx
var useMenu = __webpack_require__(63098);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
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
var useSettingSwitcher = __webpack_require__(54327);
;// CONCATENATED MODULE: ./src/utils/hooks/index.ts







// EXTERNAL MODULE: ./src/utils/shadow-root/renderInShadowRoot.tsx
var renderInShadowRoot = __webpack_require__(78632);
// EXTERNAL MODULE: ../theme/src/index.ts + 3 modules
var src = __webpack_require__(92597);
;// CONCATENATED MODULE: ./src/utils/shadow-root/index.ts



// EXTERNAL MODULE: ./src/utils/suspends/index.ts + 1 modules
var suspends = __webpack_require__(78591);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(3266);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(51098);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/index.ts
var BackupFormat = __webpack_require__(13426);
// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(47974);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(9712);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-ETH.ts
var SECP256k1_ETH = __webpack_require__(37790);
;// CONCATENATED MODULE: ./src/utils/type-transform/index.ts







// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(29941);
// EXTERNAL MODULE: ./src/utils/getTextUILength.ts
var getTextUILength = __webpack_require__(68220);
// EXTERNAL MODULE: ./src/utils/i18n-next-ui.ts
var i18n_next_ui = __webpack_require__(47930);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ./src/utils/permissions.ts
var permissions = __webpack_require__(56291);
// EXTERNAL MODULE: ./src/utils/createNormalReactRoot.tsx
var createNormalReactRoot = __webpack_require__(72234);
// EXTERNAL MODULE: ./src/utils/theme-tools.ts
var theme_tools = __webpack_require__(11062);
// EXTERNAL MODULE: ./src/utils/theme.ts
var theme = __webpack_require__(45606);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(79304);
// EXTERNAL MODULE: ./src/utils/watcher.ts
var watcher = __webpack_require__(84749);
;// CONCATENATED MODULE: ./src/utils/index.ts





















/***/ }),

/***/ 2214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70609);



/***/ }),

/***/ 78632:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ setupShadowRootPortal)
/* harmony export */ });
/* unused harmony export createReactRootShadowed */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92597);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70609);
/* harmony import */ var _UIRoot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93747);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45606);
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

/***/ 11062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ isDarkTheme),
/* harmony export */   "dF": () => (/* binding */ getBackgroundColor)
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


/***/ }),

/***/ 96636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ getBackupPreviewInfo),
/* harmony export */   "a": () => (/* binding */ UpgradeBackupJSONFile)
/* harmony export */ });
/* harmony import */ var _version_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61290);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27194);
/* harmony import */ var _version_0__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24213);
/* harmony import */ var _version_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49884);
/* eslint-disable import/no-deprecated */ 



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
    var ref, ref1;
    return {
        personas: json.personas.length,
        accounts: json.personas.reduce((a, b)=>a + b.linkedProfiles.length
        , 0),
        posts: json.posts.length,
        contacts: json.profiles.length,
        relations: json.relations.length,
        files: ((ref = json.plugin) === null || ref === void 0 ? void 0 : (ref1 = ref[_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .PluginId.FileService */ .je.FileService]) === null || ref1 === void 0 ? void 0 : ref1.length) || 0,
        wallets: json.wallets.length,
        createdAt: json._meta_.createdAt
    };
}


/***/ }),

/***/ 13426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* reexport safe */ _JSON_latest__WEBPACK_IMPORTED_MODULE_0__.a)
/* harmony export */ });
/* harmony import */ var _JSON_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96636);



/***/ }),

/***/ 9712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ deconstructPayload),
/* harmony export */   "R": () => (/* binding */ constructAlpha38)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6900);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79594);
/* harmony import */ var _social_network_utils_text_payload_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20593);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79226);





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

/***/ 79304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* binding */ downloadUrl)
/* harmony export */ });
/* unused harmony exports pasteImageToActiveElements, selectElementContents, regexMatch */
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69366);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45925);
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

/***/ 84749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export startWatch */
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70609);

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

/***/ 57466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 27900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails)
/* harmony export */ });
/* unused harmony exports PostInfoProvider, usePostInfo, usePostInfoSharedPublic */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39850);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
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

/***/ 99283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Rc": () => (/* reexport */ useActivatedPlugin/* useActivatedPlugin */.R),
  "Ne": () => (/* reexport */ useAllPluginsWeb3State/* useAllPluginsWeb3State */.N),
  "hn": () => (/* reexport */ useLookupDomain/* useLookupAddress */.h),
  "eS": () => (/* reexport */ usePluginI18NField),
  "fI": () => (/* reexport */ usePluginWrapper/* usePluginWrapper */.fI),
  "$q": () => (/* reexport */ useReverseAddress)
});

// UNUSED EXPORTS: PluginI18NFieldRender, useActivatedPluginWeb3State, useActivatedPluginWeb3UI

// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPlugin.ts
var useActivatedPlugin = __webpack_require__(48831);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3UI.ts
var useActivatedPluginWeb3UI = __webpack_require__(61270);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useActivatedPluginWeb3State.ts
var useActivatedPluginWeb3State = __webpack_require__(91583);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useAllPluginsWeb3State.ts
var useAllPluginsWeb3State = __webpack_require__(92248);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/useLookupDomain.ts
var useLookupDomain = __webpack_require__(99297);
// EXTERNAL MODULE: ../plugin-infra/src/web3/index.ts
var web3 = __webpack_require__(27361);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_757a802188413a36d4f24237d13b8e90/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(59302);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/useReverseAddress.ts


function useReverseAddress(address, pluginId) {
    const { NameService  } = (0,web3/* useWeb3State */.dM)(pluginId);
    const chainId = (0,web3/* useChainId */.xx)(pluginId);
    return (0,useAsync/* default */.Z)(async ()=>{
        var ref;
        if (!address) return undefined;
        return NameService === null || NameService === void 0 ? void 0 : (ref = NameService.reverse) === null || ref === void 0 ? void 0 : ref.call(NameService, address);
    }, [
        NameService,
        address,
        chainId
    ]);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-i18next@11.15.5_07b14a436152a0046ed0bd90fadfd5f7/node_modules/react-i18next/dist/es/useTranslation.js
var es_useTranslation = __webpack_require__(39465);
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
    const [t] = (0,es_useTranslation/* useTranslation */.$)();
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
var usePluginWrapper = __webpack_require__(93828);
;// CONCATENATED MODULE: ../plugin-infra/src/hooks/index.ts










/***/ }),

/***/ 27194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V2": () => (/* reexport */ web3_types/* CurrencyType */.V2),
  "mv": () => (/* reexport */ types/* CurrentSNSNetwork */.m),
  "FF": () => (/* reexport */ web3_types/* NetworkPluginID */.FF),
  "Hq": () => (/* reexport */ esm/* None */.Hq),
  "je": () => (/* reexport */ types/* PluginId */.j),
  "$8": () => (/* reexport */ web3/* PluginsWeb3ContextProvider */.$8),
  "x4": () => (/* reexport */ esm/* Result */.x4),
  "bD": () => (/* reexport */ esm/* Some */.bD),
  "iv": () => (/* reexport */ web3_types/* TokenType */.iv),
  "Je": () => (/* reexport */ activatedPluginsWorker),
  "EK": () => (/* reexport */ utils/* createInjectHooksRenderer */.EK),
  "I4": () => (/* reexport */ utils/* createPluginMessage */.I4),
  "V8": () => (/* reexport */ utils/* createPluginRPC */.V8),
  "Sc": () => (/* reexport */ utils/* createPluginRPCGenerator */.Sc),
  "_W": () => (/* reexport */ store/* getPluginDefine */._W),
  "Rm": () => (/* reexport */ store/* getRegisteredWeb3Networks */.Rm),
  "i8": () => (/* reexport */ store/* getRegisteredWeb3Providers */.i8),
  "fo": () => (/* reexport */ store/* registerPlugin */.fo),
  "fg": () => (/* reexport */ store/* registeredPluginIDs */.fg),
  "CB": () => (/* reexport */ dashboard/* startPluginDashboard */.CB),
  "D4": () => (/* reexport */ sns_adaptor/* startPluginSNSAdaptor */.D4),
  "mA": () => (/* reexport */ web3/* useAccount */.mA),
  "Rc": () => (/* reexport */ hooks/* useActivatedPlugin */.Rc),
  "eE": () => (/* reexport */ dashboard/* useActivatedPluginsDashboard */.eE),
  "Pz": () => (/* reexport */ sns_adaptor/* useActivatedPluginsSNSAdaptor */.Pz),
  "Ne": () => (/* reexport */ hooks/* useAllPluginsWeb3State */.Ne),
  "KQ": () => (/* reexport */ web3/* useBalance */.KQ),
  "Ov": () => (/* reexport */ web3/* useBlockNumber */.Ov),
  "xx": () => (/* reexport */ web3/* useChainId */.xx),
  "Cp": () => (/* reexport */ CompositionContext/* useCompositionContext */.C),
  "Yn": () => (/* reexport */ web3/* useDoubleBlockBeatRetry */.Yn),
  "hn": () => (/* reexport */ hooks/* useLookupAddress */.hn),
  "Vw": () => (/* reexport */ web3/* useNetworkDescriptor */.Vw),
  "px": () => (/* reexport */ web3/* useNetworkDescriptors */.px),
  "bL": () => (/* reexport */ web3/* useNetworkType */.bL),
  "Zn": () => (/* reexport */ web3/* usePluginIDContext */.Zn),
  "fI": () => (/* reexport */ hooks/* usePluginWrapper */.fI),
  "H9": () => (/* reexport */ PostContext/* usePostInfoDetails */.H9),
  "fY": () => (/* reexport */ web3/* useProviderDescriptor */.fY),
  "_o": () => (/* reexport */ web3/* useProviderType */._o),
  "$q": () => (/* reexport */ hooks/* useReverseAddress */.$q),
  "Os": () => (/* reexport */ web3/* useWallet */.Os),
  "rB": () => (/* reexport */ web3/* useWallets */.rB),
  "dM": () => (/* reexport */ web3/* useWeb3State */.dM),
  "$d": () => (/* reexport */ web3/* useWeb3UI */.$d)
});

// UNUSED EXPORTS: CompositionContext, Err, ErrImpl, Ok, OkImpl, Option, PluginI18NFieldRender, PostInfoProvider, registeredPlugins, startPluginWorker, useActivatedPluginDashboard, useActivatedPluginSNSAdaptor, useActivatedPluginSNSAdaptor_Web3Supported, useActivatedPluginWeb3State, useActivatedPluginWeb3UI, useAllowTestnet, useAssetType, useChainColor, useChainDetailed, useChainIdValid, useCollectibleType, useIsMinimalMode, useNameType, usePluginI18NField, usePluginWeb3StateContext, usePluginsWeb3StateContext, usePostInfo, usePostInfoSharedPublic, useProviderDescriptors, useSingleBlockBeatRetry, useTokenPrice, useTransactionType, useWalletPrimary

// EXTERNAL MODULE: ../plugin-infra/src/web3/index.ts
var web3 = __webpack_require__(27361);
// EXTERNAL MODULE: ../plugin-infra/src/types.ts
var types = __webpack_require__(22106);
// EXTERNAL MODULE: ../plugin-infra/src/web3-types.ts
var web3_types = __webpack_require__(38513);
// EXTERNAL MODULE: ../plugin-infra/src/hooks/index.ts + 2 modules
var hooks = __webpack_require__(99283);
// EXTERNAL MODULE: ../plugin-infra/src/manager/dashboard.ts
var dashboard = __webpack_require__(91921);
// EXTERNAL MODULE: ../plugin-infra/src/manager/sns-adaptor.ts
var sns_adaptor = __webpack_require__(74724);
// EXTERNAL MODULE: ../plugin-infra/src/manager/manage.ts
var manage = __webpack_require__(35783);
;// CONCATENATED MODULE: ../plugin-infra/src/manager/worker.ts

const { startDaemon , activated  } = (0,manage/* createManager */.m)((def)=>def.Worker
);
function startPluginWorker(host) {
    startDaemon(host);
}
const activatedPluginsWorker = activated.plugins;

// EXTERNAL MODULE: ../plugin-infra/src/utils/index.ts + 2 modules
var utils = __webpack_require__(45337);
// EXTERNAL MODULE: ../plugin-infra/src/PostContext.ts
var PostContext = __webpack_require__(27900);
// EXTERNAL MODULE: ../plugin-infra/src/CompositionContext.tsx
var CompositionContext = __webpack_require__(57466);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ../plugin-infra/src/manager/store.ts
var store = __webpack_require__(24799);
;// CONCATENATED MODULE: ../plugin-infra/src/index.ts















/***/ }),

/***/ 74724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor),
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony exports useIsMinimalMode, useActivatedPluginSNSAdaptor_Web3Supported */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var _manage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35783);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24799);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66559);




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

/***/ 51714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ createInjectHooksRenderer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39850);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99283);
/* harmony import */ var _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93828);





const PropsContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
        if (PluginWrapperComponent) {
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginWrapperComponent, {
                definition: plugin,
                ref: setRef,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__/* .PluginWrapperMethodsContext.Provider */ .yd.Provider, {
                    value: ref || _hooks_usePluginWrapper__WEBPACK_IMPORTED_MODULE_4__/* .emptyPluginWrapperMethods */ .Nt,
                    children: element
                })
            }));
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin  }) {
        const t = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__/* .usePluginI18NField */ .eS)();
        const props = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(PropsContext);
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .SV, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const all = usePlugins().filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SinglePluginWithinErrorBoundary, {
                    plugin: plugin
                }, plugin.ID)
            }, plugin.ID)
        );
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: all
        }));
    }
    return(/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(function PluginsInjectionHookRenderErrorBoundary(props) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_masknet_shared__WEBPACK_IMPORTED_MODULE_2__/* .ErrorBoundary */ .SV, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PluginsInjectionHookRender, {
                ...props
            })
        }));
    }));
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RawHookRender, {
        UI: UI,
        data: data
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UI, {
        ...data
    }));
}
function RawHookRender({ UI , data  }) {
    const [ref, setRef] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [f, setF] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const cancel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort()
        ;
    }, [
        ref,
        UI.init
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return void (f === null || f === void 0 ? void 0 : f(data));
    }, [
        f,
        data
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        ref: (r)=>ref === r || setRef(r)
    }));
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}


/***/ }),

/***/ 45337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EK": () => (/* reexport */ createInjectHooksRenderer/* createInjectHooksRenderer */.E),
  "I4": () => (/* reexport */ createPluginMessage),
  "V8": () => (/* reexport */ createPluginRPC),
  "Sc": () => (/* reexport */ createPluginRPCGenerator)
});

// EXTERNAL MODULE: ../plugin-infra/src/utils/createInjectHooksRenderer.tsx
var createInjectHooksRenderer = __webpack_require__(51714);
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
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
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

/***/ 27361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__.$),
/* harmony export */   "KQ": () => (/* reexport safe */ _useBalance__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "Os": () => (/* reexport safe */ _useWallet__WEBPACK_IMPORTED_MODULE_20__.O),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__.O),
/* harmony export */   "Vw": () => (/* reexport safe */ _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__.V),
/* harmony export */   "Yn": () => (/* reexport safe */ _useBeat__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "Zn": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.Zn),
/* harmony export */   "_o": () => (/* reexport safe */ _useProviderType__WEBPACK_IMPORTED_MODULE_13__._),
/* harmony export */   "bL": () => (/* reexport safe */ _useNetworkType__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   "dM": () => (/* reexport safe */ _useWeb3State__WEBPACK_IMPORTED_MODULE_24__.d),
/* harmony export */   "fY": () => (/* reexport safe */ _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__.f),
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "px": () => (/* reexport safe */ _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__.p),
/* harmony export */   "rB": () => (/* reexport safe */ _useWallets__WEBPACK_IMPORTED_MODULE_22__.r),
/* harmony export */   "xx": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_6__.x)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25474);
/* harmony import */ var _useAllowTestnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78062);
/* harmony import */ var _useAssetType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56040);
/* harmony import */ var _useBalance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17732);
/* harmony import */ var _useBeat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20962);
/* harmony import */ var _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1951);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41368);
/* harmony import */ var _useChainColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98845);
/* harmony import */ var _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67156);
/* harmony import */ var _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81810);
/* harmony import */ var _useCollectibleType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(58306);
/* harmony import */ var _useNameType__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85158);
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63449);
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(26302);
/* harmony import */ var _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35775);
/* harmony import */ var _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(22358);
/* harmony import */ var _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(46021);
/* harmony import */ var _useProviderDescriptors__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(56565);
/* harmony import */ var _useTokenPrice__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(48405);
/* harmony import */ var _useTransactionType__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7684);
/* harmony import */ var _useWallet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(76189);
/* harmony import */ var _useWalletPrimary__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(39539);
/* harmony import */ var _useWallets__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(23248);
/* harmony import */ var _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(88387);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(36725);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8791);




























/***/ }),

/***/ 25474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useAccount)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29730);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8791);


/**
 * Get the address of the default wallet
 */ function useAccount(pluginID) {
    var ref;
    const { account , wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    var ref1;
    return  true ? (ref1 = (ref = (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallets)) === null || ref === void 0 ? void 0 : ref.address) !== null && ref1 !== void 0 ? ref1 : '' : 0;
}


/***/ }),

/***/ 98845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export useChainColor */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41368);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36725);


function useChainColor(pluginID) {
    var ref;
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.resolveChainColor) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : 'transparent';
}


/***/ }),

/***/ 81810:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export useChainDetailed */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41368);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36725);


function useChainDetailed(pluginID) {
    var ref;
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return (ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.getChainDetailed) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId)) !== null && ref1 !== void 0 ? ref1 : null;
}


/***/ }),

/***/ 67156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony export useChainIdValid */
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41368);
/* harmony import */ var _useWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36725);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25474);



function useChainIdValid(pluginID) {
    var ref;
    const account = useAccount(pluginID);
    const chainId = useChainId(pluginID);
    const { Utils  } = useWeb3State(pluginID);
    var ref1;
    return !account || ((ref1 = Utils === null || Utils === void 0 ? void 0 : (ref = Utils.isChainIdValid) === null || ref === void 0 ? void 0 : ref.call(Utils, chainId, "production" === 'development')) !== null && ref1 !== void 0 ? ref1 : false);
}


/***/ }),

/***/ 35775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ useNetworkDescriptor)
/* harmony export */ });
/* harmony import */ var _useNetworkType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63449);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8791);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24799);



function useNetworkDescriptor(expectedChainIdOrNetworkTypeOrID, expectedPluginID) {
    var ref, ref1;
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginIDContext */ .Zn)();
    const pid = expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID;
    const networkType = (0,_useNetworkType__WEBPACK_IMPORTED_MODULE_0__/* .useNetworkType */ .b)(pid);
    var ref2;
    return (ref = (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(pid)) === null || ref === void 0 ? void 0 : (ref1 = ref.declareWeb3Networks) === null || ref1 === void 0 ? void 0 : ref1.find((x)=>[
            x.chainId,
            x.type,
            x.ID
        ].includes((ref2 = expectedChainIdOrNetworkTypeOrID !== null && expectedChainIdOrNetworkTypeOrID !== void 0 ? expectedChainIdOrNetworkTypeOrID : networkType) !== null && ref2 !== void 0 ? ref2 : '')
    );
}


/***/ }),

/***/ 22358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ useProviderDescriptor)
/* harmony export */ });
/* harmony import */ var _useProviderType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26302);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8791);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24799);



function useProviderDescriptor(expectedProviderTypeOrID, expectedPluginID) {
    var ref, ref1;
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginIDContext */ .Zn)();
    const providerType = (0,_useProviderType__WEBPACK_IMPORTED_MODULE_0__/* .useProviderType */ ._)(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID);
    var ref2;
    return (ref = (0,_manager_store__WEBPACK_IMPORTED_MODULE_2__/* .getPluginDefine */ ._W)(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) === null || ref === void 0 ? void 0 : (ref1 = ref.declareWeb3Providers) === null || ref1 === void 0 ? void 0 : ref1.find((x)=>[
            x.type,
            x.ID
        ].includes((ref2 = expectedProviderTypeOrID !== null && expectedProviderTypeOrID !== void 0 ? expectedProviderTypeOrID : providerType) !== null && ref2 !== void 0 ? ref2 : '')
    );
}


/***/ }),

/***/ 76189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ useWallet)
/* harmony export */ });
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25474);
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8791);


function useWallet(pluginID) {
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_0__/* .useAccount */ .m)(pluginID);
    const { wallets  } = (0,_Context__WEBPACK_IMPORTED_MODULE_1__/* .usePluginWeb3StateContext */ ._$)(pluginID);
    return account ? wallets.find((x)=>x.address.toLowerCase() === account.toLowerCase()
    ) : undefined;
}


/***/ }),

/***/ 36725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useWeb3State)
/* harmony export */ });
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8791);
/* harmony import */ var _hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91583);


function useWeb3State(expectedPluginID) {
    const pluginID = (0,_Context__WEBPACK_IMPORTED_MODULE_0__/* .usePluginIDContext */ .Zn)();
    var ref;
    return (ref = (0,_hooks_useActivatedPluginWeb3State__WEBPACK_IMPORTED_MODULE_1__/* .useActivatedPluginWeb3State */ .G)(expectedPluginID !== null && expectedPluginID !== void 0 ? expectedPluginID : pluginID)) !== null && ref !== void 0 ? ref : {};
}


/***/ }),

/***/ 88667:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ base)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27039);
/* harmony import */ var _locales_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52918);


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

/***/ 9797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports NextIDAction, NextIDPlatform */
var NextIDAction;
(function(NextIDAction) {
    NextIDAction["Create"] = 'create';
    NextIDAction["Delete"] = 'delete';
})(NextIDAction || (NextIDAction = {}));
var NextIDPlatform;
(function(NextIDPlatform) {
    NextIDPlatform["NextId"] = 'nextid';
    NextIDPlatform["Twitter"] = 'twitter';
    NextIDPlatform["Keybase"] = 'keybase';
    NextIDPlatform["Ethereum"] = 'ethereum';
    NextIDPlatform["GitHub"] = 'github';
})(NextIDPlatform || (NextIDPlatform = {}));


/***/ }),

/***/ 88970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53482);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42278);




/***/ }),

/***/ 79226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ko": () => (/* reexport */ collections/* ALL_EVENTS */.Ko),
  "iD": () => (/* reexport */ Results/* CheckedError */.iD),
  "vq": () => (/* reexport */ DashboardRoutes/* DashboardRoutes */.v),
  "ob": () => (/* reexport */ type/* ECKeyIdentifier */.ob),
  "CH": () => (/* reexport */ src_crypto/* ECKeyIdentifierFromJsonWebKey */.CH),
  "xI": () => (/* reexport */ type/* GroupIdentifier */.xI),
  "xb": () => (/* reexport */ type/* Identifier */.xb),
  "qD": () => (/* reexport */ IdentifierMap/* IdentifierMap */.q),
  "vP": () => (/* reexport */ collections/* ObservableMap */.vP),
  "n7": () => (/* reexport */ collections/* ObservableSet */.n7),
  "$f": () => (/* reexport */ collections/* ObservableWeakMap */.$f),
  "E": () => (/* reexport */ Results/* OptionalResult */.E),
  "mZ": () => (/* reexport */ PopupRoutes/* PopupRoutes */.m),
  "bb": () => (/* reexport */ type/* PostIVIdentifier */.bb),
  "_P": () => (/* reexport */ type/* PostIdentifier */._P),
  "WO": () => (/* reexport */ type/* ProfileIdentifier */.WO),
  "Kn": () => (/* reexport */ Persona_type/* RelationFavor */.K),
  "Hd": () => (/* reexport */ sessionStorageCache/* SessionStorageCache */.H),
  "Jf": () => (/* reexport */ SubscriptionFromValueRef),
  "ZI": () => (/* reexport */ __DEBUG__ONLY__enableCryptoKeySerialization),
  "N5": () => (/* reexport */ src_crypto/* compressSecp256k1Key */.N5),
  "SH": () => (/* reexport */ src_crypto/* compressSecp256k1Point */.SH),
  "qY": () => (/* reexport */ createConstantSubscription),
  "C9": () => (/* reexport */ i18n/* createI18NBundle */.C9),
  "q0": () => (/* reexport */ kv_storage/* createInMemoryKVStorageBackend */.q0),
  "Ic": () => (/* reexport */ kv_storage/* createIndexedDB_KVStorageBackend */.Ic),
  "rc": () => (/* reexport */ kv_storage/* createKVStorageHost */.rc),
  "X2": () => (/* reexport */ kv_storage/* createProxyKVStorageBackend */.X2),
  "Fd": () => (/* reexport */ createSubscriptionFromAsync),
  "qX": () => (/* reexport */ src_crypto/* decompressSecp256k1Key */.qX),
  "A9": () => (/* reexport */ i18n/* fallbackLng */.A9),
  "mz": () => (/* reexport */ convert/* fromBase64URL */.mz),
  "H_": () => (/* reexport */ convert/* fromHex */.H_),
  "$I": () => (/* reexport */ getAssetAsBlobURL/* getAssetAsBlobURL */.$),
  "Bb": () => (/* reexport */ getLocalImplementation),
  "kO": () => (/* reexport */ getLocalImplementationExotic),
  "K2": () => (/* reexport */ detect/* isDashboardPage */.K),
  "N6": () => (/* reexport */ detect/* isPopupPage */.N),
  "dK": () => (/* reexport */ src_crypto/* isSecp256k1Point */.dK),
  "Rx": () => (/* reexport */ src_crypto/* isSecp256k1PrivateKey */.Rx),
  "S3": () => (/* reexport */ mapSubscription),
  "Lk": () => (/* reexport */ parseURL/* parseURL */.L),
  "s_": () => (/* reexport */ pollingTask/* pollingTask */.s),
  "GM": () => (/* reexport */ serializer),
  "s3": () => (/* reexport */ convert/* toBase64 */.s3),
  "wi": () => (/* reexport */ convert/* toBase64URL */.wi),
  "NC": () => (/* reexport */ convert/* toHex */.NC)
});

// UNUSED EXPORTS: ECKeyIdentifierFromCryptoKey, NextIDAction, NextIDPlatform, PayloadVersions, PersonaIdentifier, ReadonlyIdentifierMap, SubscriptionDebug, ValueRefFromSubscription, addI18NBundle, andThenAsync, decompressSecp256k1Point, removed

// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson@7.0.1/node_modules/typeson/dist/typeson.esm.min.js
var typeson_esm_min = __webpack_require__(44284);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(79594);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
// EXTERNAL MODULE: ../../node_modules/.pnpm/typeson-registry@2.0.0/node_modules/typeson-registry/dist/index.min.js
var index_min = __webpack_require__(4926);
// EXTERNAL MODULE: ../shared-base/src/Identifier/IdentifierMap.ts
var IdentifierMap = __webpack_require__(21116);
// EXTERNAL MODULE: ../shared-base/src/Identifier/type.ts
var type = __webpack_require__(8785);
;// CONCATENATED MODULE: ../shared-base/src/serializer/index.ts
/// <reference path="./typeson.d.ts" />



// @ts-ignore



let typeson;
function setup() {
    const { default: BigNumber  } = bignumber;
    const all = [];
    function addClass(name, constructor) {
        all.push([
            name,
            undefined,
            undefined,
            constructor
        ]);
    }
    typeson = new typeson_esm_min/* Typeson */.oy({});
    typeson.register(index_min/* builtin */.j0);
    typeson.register(index_min/* specialNumbers */.so);
    typeson.register([
        index_min/* blob */.Ik,
        index_min/* file */.tP,
        index_min/* filelist */.Jj,
        index_min/* imagebitmap */.xA
    ]);
    typeson.register({
        None: [
            (x)=>x === esm/* None */.Hq
            ,
            ()=>'None'
            ,
            ()=>esm/* None */.Hq
        ]
    });
    addClass('Ok', esm.Ok);
    addClass('Err', esm/* Err */.UG);
    addClass('Some', esm/* Some */.bD);
    addClass('BigNumber', BigNumber);
    addClass('ProfileIdentifier', type/* ProfileIdentifier */.WO);
    addClass('ECKeyIdentifier', type/* ECKeyIdentifier */.ob);
    addClass('GroupIdentifier', type/* GroupIdentifier */.xI);
    addClass('PostIdentifier', type/* PostIdentifier */._P);
    addClass('PostIVIdentifier', type/* PostIVIdentifier */.bb);
    addClass('IdentifierMap', IdentifierMap/* IdentifierMap */.q);
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
        return typeson.revive(to);
    }
};
/** THIS MUST NOT BE USED OUTSIDE OF A DEBUGGER CONTEXT */ function __DEBUG__ONLY__enableCryptoKeySerialization() {
    if (!typeson) setup();
    typeson.register(index_min/* cryptokey */.W2);
}

// EXTERNAL MODULE: ../shared-base/src/collections/index.ts
var collections = __webpack_require__(50685);
// EXTERNAL MODULE: ../shared-base/src/MaskPayload/index.ts
var MaskPayload = __webpack_require__(53786);
// EXTERNAL MODULE: ../shared-base/src/i18n/index.ts
var i18n = __webpack_require__(88970);
// EXTERNAL MODULE: ../shared-base/src/utils/detect.ts
var detect = __webpack_require__(25126);
;// CONCATENATED MODULE: ../shared-base/src/utils/getLocalImplementation.tsx
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
async function getLocalImplementationExotic(isBackground, name, impl, ref1) {
    if (!isBackground) return {};
    RPCCache.set(ref1, await impl());
    return new Proxy({}, {
        get (_, key) {
            var ref;
            if (key === 'then') return;
            // @ts-ignore
            return (ref = RPCCache.get(ref1)) === null || ref === void 0 ? void 0 : ref[key];
        }
    });
}

// EXTERNAL MODULE: ../shared-base/src/utils/parseURL.ts
var parseURL = __webpack_require__(72664);
// EXTERNAL MODULE: ../shared-base/src/utils/pollingTask.ts
var pollingTask = __webpack_require__(22529);
// EXTERNAL MODULE: ../shared-base/src/utils/sessionStorageCache.ts
var sessionStorageCache = __webpack_require__(36871);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
var noop = __webpack_require__(21122);
;// CONCATENATED MODULE: ../shared-base/src/utils/subscription.ts


function createConstantSubscription(value) {
    return {
        getCurrentValue: ()=>value
        ,
        subscribe: ()=>noop/* default */.Z
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

// EXTERNAL MODULE: ../shared-base/src/utils/getAssetAsBlobURL.ts
var getAssetAsBlobURL = __webpack_require__(40435);
;// CONCATENATED MODULE: ../shared-base/src/utils/index.ts








// EXTERNAL MODULE: ../shared-base/src/kv-storage/index.ts + 1 modules
var kv_storage = __webpack_require__(97977);
// EXTERNAL MODULE: ../shared-base/src/crypto/index.ts + 1 modules
var src_crypto = __webpack_require__(13880);
// EXTERNAL MODULE: ../shared-base/src/Persona/type.ts
var Persona_type = __webpack_require__(25298);
// EXTERNAL MODULE: ../shared-base/src/Routes/PopupRoutes.ts
var PopupRoutes = __webpack_require__(80847);
// EXTERNAL MODULE: ../shared-base/src/Routes/DashboardRoutes.ts
var DashboardRoutes = __webpack_require__(26637);
// EXTERNAL MODULE: ../shared-base/src/Results/index.ts + 2 modules
var Results = __webpack_require__(66960);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(27013);
// EXTERNAL MODULE: ../shared-base/src/NextID/type.ts
var NextID_type = __webpack_require__(9797);
;// CONCATENATED MODULE: ../shared-base/src/index.ts




















/***/ }),

/***/ 97977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q0": () => (/* reexport */ in_memory/* createInMemoryKVStorageBackend */.q),
  "Ic": () => (/* reexport */ idb/* createIndexedDB_KVStorageBackend */.I),
  "rc": () => (/* binding */ createKVStorageHost),
  "X2": () => (/* reexport */ createProxyKVStorageBackend)
});

// UNUSED EXPORTS: removed

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/in-memory.ts
var in_memory = __webpack_require__(91041);
// EXTERNAL MODULE: ../shared-base/src/kv-storage/idb.ts
var idb = __webpack_require__(42557);
;// CONCATENATED MODULE: ../shared-base/src/kv-storage/proxy.ts

function createProxyKVStorageBackend() {
    let target;
    let [promise, resolve, reject] = (0,esm/* defer */.PQ)();
    return {
        get beforeAutoSync () {
            return promise;
        },
        async getValue (...args) {
            return target.getValue(...args);
        },
        async setValue (...args) {
            return target.setValue(...args);
        },
        replaceBackend (backend) {
            target = backend;
            // resolve old one
            backend.beforeAutoSync.then(resolve, reject);
            [promise, resolve, reject] = (0,esm/* defer */.PQ)();
            backend.beforeAutoSync.then(resolve, reject);
        }
    };
}

;// CONCATENATED MODULE: ../shared-base/src/kv-storage/index.ts




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
            const aggregatedSignal = (0,esm/* combineAbortSignal */.dq)(scopeSignal, signal);
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

/***/ 37024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "SV": () => (/* reexport */ ErrorBoundary),
  "N3": () => (/* reexport */ context/* ErrorBoundaryBuildInfoContext */.N)
});

// UNUSED EXPORTS: CrashUI, withErrorBoundary

// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/CrashUI.tsx
var CrashUI = __webpack_require__(60177);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/context.ts
var context = __webpack_require__(57345);
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





/***/ }),

/***/ 30243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u0": () => (/* reexport */ AddressViewer/* AddressViewer */.u),
  "IR": () => (/* reexport */ AssetPlayer/* AssetPlayer */.I),
  "T3": () => (/* reexport */ ERC20TokenList/* ERC20TokenList */.T),
  "SV": () => (/* reexport */ ErrorBoundary/* ErrorBoundary */.SV),
  "N3": () => (/* reexport */ ErrorBoundary/* ErrorBoundaryBuildInfoContext */.N3),
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
var hooks = __webpack_require__(35046);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenIcon/index.tsx + 2 modules
var TokenIcon = __webpack_require__(93116);
// EXTERNAL MODULE: ../shared/src/UI/components/ChainIcon/index.tsx
var ChainIcon = __webpack_require__(5979);
// EXTERNAL MODULE: ../shared/src/UI/components/ImageIcon/index.tsx
var ImageIcon = __webpack_require__(91750);
// EXTERNAL MODULE: ../shared/src/UI/components/WalletIcon/index.tsx
var WalletIcon = __webpack_require__(29125);
// EXTERNAL MODULE: ../shared/src/UI/components/ERC20TokenList/index.tsx + 5 modules
var ERC20TokenList = __webpack_require__(50484);
// EXTERNAL MODULE: ../shared/src/UI/components/QRCode/index.tsx
var QRCode = __webpack_require__(77188);
// EXTERNAL MODULE: ../shared/src/UI/components/ErrorBoundary/index.ts + 1 modules
var ErrorBoundary = __webpack_require__(37024);
// EXTERNAL MODULE: ../shared/src/UI/components/SelectTokenChip/index.tsx
var SelectTokenChip = __webpack_require__(16006);
// EXTERNAL MODULE: ../shared/src/UI/components/TokenAmountPanel/index.tsx
var TokenAmountPanel = __webpack_require__(30180);
// EXTERNAL MODULE: ../shared/src/UI/components/LoadingAnimation/index.tsx
var LoadingAnimation = __webpack_require__(15350);
// EXTERNAL MODULE: ../shared/src/UI/components/MiniNetworkSelector/index.tsx
var MiniNetworkSelector = __webpack_require__(44917);
// EXTERNAL MODULE: ../shared/src/UI/components/AddressViewer/index.tsx
var AddressViewer = __webpack_require__(5011);
// EXTERNAL MODULE: ../shared/src/UI/components/I18NextProviderHMR.tsx
var I18NextProviderHMR = __webpack_require__(58299);
// EXTERNAL MODULE: ../shared/src/UI/components/AssetPlayer/index.tsx + 2 modules
var AssetPlayer = __webpack_require__(85796);
// EXTERNAL MODULE: ../shared/src/UI/components/NFTCardStyledAssetPlayer/index.tsx
var NFTCardStyledAssetPlayer = __webpack_require__(58398);
;// CONCATENATED MODULE: ../shared/src/UI/components/index.ts
















;// CONCATENATED MODULE: ../shared/src/UI/index.ts




/***/ }),

/***/ 74073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _useValueRef__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   "F$": () => (/* reexport safe */ _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__.F),
/* harmony export */   "H9": () => (/* reexport safe */ _useMenu__WEBPACK_IMPORTED_MODULE_2__.H9),
/* harmony export */   "S8": () => (/* reexport safe */ _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__.S),
/* harmony export */   "iD": () => (/* reexport safe */ _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__.i),
/* harmony export */   "pv": () => (/* reexport safe */ _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__.p),
/* harmony export */   "r8": () => (/* reexport safe */ _createGlobalState__WEBPACK_IMPORTED_MODULE_6__.r)
/* harmony export */ });
/* harmony import */ var _useValueRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50994);
/* harmony import */ var _useObservableMapSet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89079);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34841);
/* harmony import */ var _useRemoteControlledDialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59918);
/* harmony import */ var _useSnackbarCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43931);
/* harmony import */ var _useScrollBottomEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12289);
/* harmony import */ var _createGlobalState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80896);









/***/ }),

/***/ 89079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47175);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79226);



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

/***/ 59918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useRemoteControlledDialog)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76342);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32513);


/**
 * Use a dialog state controlled by remote
 */ function useRemoteControlledDialog(event1, onUpdateByRemote, tabType = 'self') {
    const [HOOK_ID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()) // create an uuid for every hook
    ;
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
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

/***/ 50994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 77302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(79226);
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

/***/ 45739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 7259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92597);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73322);
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

/***/ 7901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* binding */ usePortalShadowRoot),
/* harmony export */   "d_": () => (/* binding */ setupPortalShadowRoot),
/* harmony export */   "lr": () => (/* binding */ createShadowRootForwardedComponent),
/* harmony export */   "vg": () => (/* binding */ createShadowRootForwardedPopperComponent)
/* harmony export */ });
/* unused harmony export NoEffectUsePortalShadowRootContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76342);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51079);



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
    const { container: container1  } = doms;
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
            renderer(container1)
        ]
    }));
}
const IsolatedRender = ({ container , root , style , children , findMountingShadowRef  })=>{
    const update = useUpdate();
    const css = (0,_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__/* .useCurrentShadowRootStyles */ .I)(findMountingShadowRef);
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
        if (findMountingShadowRef && style.textContent !== css) style.textContent = css;
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
        return usePortalShadowRoot((container)=>{
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {
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

/***/ 20851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8309);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12571);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90153);
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7901);


const ShadowRootTooltip = (0,_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_mui_material__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
const ShadowRootMenu = (0,_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
const ShadowRootPopper = (0,_Portal__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);


/***/ }),

/***/ 94887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createReactRootShadowedPartial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74750);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15621);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51079);



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

/***/ 92597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "um": () => (/* binding */ Appearance),
  "E1": () => (/* reexport */ ButtonGroupTab/* ButtonGroupTabList */.E),
  "US": () => (/* reexport */ ShadowRoot/* CSSVariableInjector */.US),
  "qA": () => (/* reexport */ CountdownButton/* CountdownButton */.q),
  "YO": () => (/* reexport */ CustomSnackbarProvider),
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
  "dy": () => (/* reexport */ ShadowRoot/* ShadowRootMenu */.dy),
  "sV": () => (/* reexport */ ShadowRoot/* ShadowRootPopper */.sV),
  "p_": () => (/* reexport */ ShadowRoot/* ShadowRootTooltip */.p_),
  "wT": () => (/* reexport */ notistack_esm/* SnackbarProvider */.wT),
  "Dc": () => (/* reexport */ constants/* applyMaskColorVars */.Dc),
  "zV": () => (/* reexport */ ShadowRoot/* createReactRootShadowedPartial */.zV),
  "nb": () => (/* reexport */ constants/* getMaskColor */.nb),
  "F4": () => (/* reexport */ makeStyles/* keyframes */.F),
  "ZL": () => (/* reexport */ makeStyles/* makeStyles */.Z),
  "ze": () => (/* reexport */ custom_ui_helper/* mergeClasses */.z),
  "or": () => (/* reexport */ custom_ui_helper.or),
  "d_": () => (/* reexport */ ShadowRoot/* setupPortalShadowRoot */.d_),
  "Ii": () => (/* reexport */ useCustomSnackbar),
  "tE": () => (/* reexport */ DialogStack/* useDialogStackActor */.t),
  "ad": () => (/* reexport */ ShadowRoot/* usePortalShadowRoot */.ad),
  "Bc": () => (/* reexport */ custom_ui_helper/* useStylesExtends */.B),
  "QO": () => (/* binding */ useSystemPreferencePalette),
  "YE": () => (/* reexport */ hooks/* useTabs */.Y)
});

// UNUSED EXPORTS: ButtonTab, CustomSnackbarContent, DialogStackingProvider, MaskDialogTitle, MaskSearchableItemInList, NoEffectUsePortalShadowRootContext, createShadowRootForwardedComponent, createShadowRootForwardedPopperComponent, currentSystemPreferencePalette, parseColor, useCurrentShadowRootStyles, useMaskColor, useMaskDialog, useSnackbar

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/styles/createTheme.js + 8 modules
var createTheme = __webpack_require__(65185);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/useMediaQuery/useMediaQuery.js
var useMediaQuery = __webpack_require__(19063);
// EXTERNAL MODULE: ../theme/src/changes.ts
var changes = __webpack_require__(23344);
// EXTERNAL MODULE: ../theme/src/component-changes.ts
var component_changes = __webpack_require__(25146);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/merge.js + 6 modules
var merge = __webpack_require__(9084);
// EXTERNAL MODULE: ../theme/src/constants.ts
var constants = __webpack_require__(5400);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tinycolor2@1.4.2/node_modules/tinycolor2/tinycolor.js
var tinycolor = __webpack_require__(32086);
// EXTERNAL MODULE: ../theme/src/makeStyles.ts
var makeStyles = __webpack_require__(61928);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/Dialog.tsx
var Dialog = __webpack_require__(28365);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogTitle.tsx
var DialogTitle = __webpack_require__(74626);
// EXTERNAL MODULE: ../theme/src/Components/Dialogs/DialogStack.tsx
var DialogStack = __webpack_require__(45739);
;// CONCATENATED MODULE: ../theme/src/Components/Dialogs/index.ts




// EXTERNAL MODULE: ../theme/src/Components/ButtonGroupTab/index.ts + 2 modules
var ButtonGroupTab = __webpack_require__(13726);
// EXTERNAL MODULE: ../theme/src/Components/FolderTabs/index.tsx
var FolderTabs = __webpack_require__(94615);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74750);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
// EXTERNAL MODULE: ../../node_modules/.pnpm/tss-react@3.4.2_@emotion+react@11.8.1/node_modules/tss-react/index.js
var tss_react = __webpack_require__(4642);
// EXTERNAL MODULE: ../../node_modules/.pnpm/notistack@2.0.3_d496b18b49bddf812c1fc8e029edd966/node_modules/notistack/dist/notistack.esm.js
var notistack_esm = __webpack_require__(65762);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/IconButton/IconButton.js + 1 modules
var IconButton = __webpack_require__(91497);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.4.4_04cbc9cecf451fb80119a7777a08edb2/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(7280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.1/node_modules/classnames/index.js
var classnames = __webpack_require__(83849);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/esm/Close.js
var Close = __webpack_require__(74060);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Warning.js
var Warning = __webpack_require__(66110);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Info.js
var Info = __webpack_require__(15043);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+icons-material@5.4.4_d06e3de907ce734e888a65f5db1d962e/node_modules/@mui/icons-material/Done.js
var Done = __webpack_require__(26108);
// EXTERNAL MODULE: ../icons/general/Risk.tsx
var Risk = __webpack_require__(26224);
// EXTERNAL MODULE: ../icons/general/Loading.tsx
var Loading = __webpack_require__(16787);
// EXTERNAL MODULE: ../theme/src/UIHelper/custom-ui-helper.tsx
var custom_ui_helper = __webpack_require__(29025);
;// CONCATENATED MODULE: ../theme/src/Components/Snackbar/index.tsx















const useStyles = (0,makeStyles/* makeStyles */.Z)()((theme, { isFacebook  }, refs)=>{
    const { palette  } = theme;
    const isDark = palette.mode === 'dark';
    const spinningAnimationKeyFrames = tss_react/* keyframes */.F4`
to {
  transform: rotate(360deg)
}`;
    const title = {
        color: constants/* MaskColorVar.textPrimary */.ZN.textPrimary,
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '20px'
    };
    const message = {
        color: constants/* MaskColorVar.textSecondary */.ZN.textSecondary,
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
            color: constants/* MaskColorVar.textLight */.ZN.textLight,
            pointerEvents: 'inherit'
        },
        content: {
            alignItems: 'center',
            padding: theme.spacing(1.5, 2),
            borderRadius: 12,
            width: 380,
            flexWrap: 'nowrap !important',
            [`&.${success.ref}`]: {
                background: constants/* MaskColorVar.greenMain */.ZN.greenMain,
                color: constants/* MaskColorVar.lightestBackground */.ZN.lightestBackground
            },
            [`&.${error.ref}`]: {
                background: constants/* MaskColorVar.redMain */.ZN.redMain,
                color: constants/* MaskColorVar.lightestBackground */.ZN.lightestBackground,
                title: {
                    color: 'inherit'
                }
            },
            [`&.${info.ref}`]: {
                color: constants/* MaskColorVar.lightestBackground */.ZN.lightestBackground
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
    default: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* default */.Z, {
        color: "inherit"
    }),
    success: /*#__PURE__*/ (0,jsx_runtime.jsx)(Done/* default */.Z, {
        color: "inherit"
    }),
    error: /*#__PURE__*/ (0,jsx_runtime.jsx)(Risk/* RiskIcon */.w, {}),
    warning: /*#__PURE__*/ (0,jsx_runtime.jsx)(Warning/* default */.Z, {
        color: "inherit"
    }),
    info: /*#__PURE__*/ (0,jsx_runtime.jsx)(Info/* default */.Z, {
        color: "inherit"
    })
};
const CustomSnackbarContent = /*#__PURE__*/ (0,react.forwardRef)((props, ref)=>{
    var _isFacebook;
    const classes = (0,custom_ui_helper/* useStylesExtends */.B)(useStyles({
        isFacebook: (_isFacebook = props.isFacebook) !== null && _isFacebook !== void 0 ? _isFacebook : false
    }), props);
    const snackbar = (0,notistack_esm/* useSnackbar */.Ds)();
    const loadingIcon = /*#__PURE__*/ (0,jsx_runtime.jsx)(Loading/* LoadingIcon */.H, {
        color: "inherit",
        className: classes.spinning
    });
    const variantIcon = props.processing ? loadingIcon : props.variant ? IconMap[props.variant] : null;
    let renderedAction = /*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
        className: classes.closeButton,
        onClick: ()=>snackbar.closeSnackbar(props.id)
        ,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {})
    });
    if (props.action) {
        renderedAction = typeof props.action === 'function' ? props.action(props.id) : props.action;
    }
    return(/*#__PURE__*/ (0,jsx_runtime.jsxs)(notistack_esm/* SnackbarContent */.No, {
        ref: ref,
        className: classnames_default()(classes.content, classes[props.variant]),
        children: [
            variantIcon && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.icon,
                children: variantIcon
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: classes.texts,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.title,
                        variant: "h2",
                        children: props.title
                    }),
                    props.message && /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        className: classes.message,
                        variant: "body1",
                        children: props.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.action,
                children: renderedAction
            })
        ]
    }));
});
const CustomSnackbarProvider = /*#__PURE__*/ (0,react.memo)((props)=>{
    const ref1 = (0,react.useRef)(null);
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
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(notistack_esm/* SnackbarProvider */.wT, {
        ref: ref1,
        maxSnack: 30,
        disableWindowBlurListener: true,
        anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
        },
        hideIconVariant: true,
        content: (key, title)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
                id: key,
                variant: (_variant = props.variant) !== null && _variant !== void 0 ? _variant : 'default',
                title: title,
                isFacebook: props.isFacebook
            })
        ,
        action: (key)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(IconButton/* default */.Z, {
                size: "large",
                onClick: onDismiss(key),
                sx: {
                    color: 'inherit'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Close/* default */.Z, {
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
});
function useCustomSnackbar() {
    const { enqueueSnackbar , closeSnackbar  } = (0,notistack_esm/* useSnackbar */.Ds)();
    const showSnackbar = (0,react.useCallback)((text, options = {
        variant: 'default'
    })=>{
        const { processing , message , variant , ...rest } = options;
        return enqueueSnackbar(text, {
            variant: options.variant,
            content: (key, title)=>{
                return(/*#__PURE__*/ (0,jsx_runtime.jsx)(CustomSnackbarContent, {
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

// EXTERNAL MODULE: ../theme/src/Components/SearchableList/index.ts + 2 modules
var SearchableList = __webpack_require__(8546);
// EXTERNAL MODULE: ../theme/src/Components/TextField/index.tsx
var TextField = __webpack_require__(6136);
// EXTERNAL MODULE: ../theme/src/Components/CountdownButton/index.tsx
var CountdownButton = __webpack_require__(98015);
// EXTERNAL MODULE: ../theme/src/Components/SendingCodeField/index.tsx
var SendingCodeField = __webpack_require__(43162);
// EXTERNAL MODULE: ../theme/src/Components/PhoneNumberField/index.tsx
var PhoneNumberField = __webpack_require__(35739);
// EXTERNAL MODULE: ../theme/src/Components/LoadingButton/index.tsx
var LoadingButton = __webpack_require__(55456);
;// CONCATENATED MODULE: ../theme/src/Components/index.ts











// EXTERNAL MODULE: ../theme/src/hooks/index.ts + 1 modules
var hooks = __webpack_require__(76760);
// EXTERNAL MODULE: ../theme/src/ShadowRoot/index.ts
var ShadowRoot = __webpack_require__(62840);
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

/***/ 45596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* unused harmony exports bindProof, queryExistedBindingByPersona, queryExistedBindingByPlatform, queryExistedBinding, queryIsBound, createPersonaPayload */
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_1__);



const BASE_URL = (/* unused pure expression or super */ null && ( true ? 'https://proof-service.next.id/' : 0));
async function bindProof(personaPublicKey, action, platform, identity, walletSignature, signature, proofLocation) {
    const requestBody = {
        action,
        platform,
        identity,
        public_key: personaPublicKey,
        ...proofLocation ? {
            proof_location: proofLocation
        } : {},
        extra: {
            ...walletSignature ? {
                wallet_signature: toBase64(fromHex(walletSignature))
            } : {},
            ...signature ? {
                signature: toBase64(fromHex(signature))
            } : {}
        }
    };
    const response = await fetch(urlcat(BASE_URL, '/v1/proof'), {
        body: JSON.stringify(requestBody),
        method: 'POST',
        mode: 'cors'
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message);
    return response;
}
async function queryExistedBindingByPersona(personaPublicKey) {
    const response = await fetch(urlcat(BASE_URL, '/v1/proof', {
        platform: 'nextid',
        identity: personaPublicKey
    }), {
        mode: 'cors'
    });
    const result = await response.json();
    // Will have only one item when query by personaPublicKey
    return first(result.ids);
}
async function queryExistedBindingByPlatform(platform, identity) {
    if (!platform && !identity) return [];
    const response = await fetch(urlcat(BASE_URL, '/v1/proof', {
        platform: platform,
        identity: identity
    }), {
        mode: 'cors'
    });
    const result = await response.json();
    return result.ids;
}
async function queryExistedBinding(platform, identity) {
    throw new Error('To be implemented.');
}
async function queryIsBound(personaPublicKey, platform, identity) {
    if (!platform && !identity) return false;
    const ids = await queryExistedBindingByPlatform(platform, identity);
    return ids.some((x)=>x.persona.toLowerCase() === personaPublicKey.toLowerCase()
    );
}
async function createPersonaPayload(personaPublicKey, action, identity, platform) {
    const requestBody = {
        action,
        platform,
        identity,
        public_key: personaPublicKey
    };
    const response = await fetch(urlcat(BASE_URL, '/v1/proof/payload'), {
        body: JSON.stringify(requestBody),
        method: 'POST',
        mode: 'cors'
    });
    const result = await response.json();
    return {
        postContent: result.post_content,
        signPayload: JSON.stringify(JSON.parse(result.sign_payload))
    };
}


/***/ }),

/***/ 24524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ TokenPrice),
/* harmony export */   "Nn": () => (/* binding */ OpenSea),
/* harmony export */   "S5": () => (/* binding */ RSS3),
/* harmony export */   "bC": () => (/* binding */ Explorer),
/* harmony export */   "bb": () => (/* reexport safe */ _opensea_utils__WEBPACK_IMPORTED_MODULE_9__.bb),
/* harmony export */   "cl": () => (/* binding */ KeyValue),
/* harmony export */   "e8": () => (/* binding */ Rarible),
/* harmony export */   "jo": () => (/* binding */ NFTScan),
/* harmony export */   "no": () => (/* binding */ TokenList),
/* harmony export */   "oD": () => (/* binding */ CoinGecko),
/* harmony export */   "tL": () => (/* binding */ Twitter),
/* harmony export */   "x4": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_8__.x)
/* harmony export */ });
/* harmony import */ var _coingecko__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(28323);
/* harmony import */ var _opensea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72481);
/* harmony import */ var _rarible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76275);
/* harmony import */ var _NFTScan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73868);
/* harmony import */ var _explorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21259);
/* harmony import */ var _rss3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76249);
/* harmony import */ var _kv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25203);
/* harmony import */ var _twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59427);
/* harmony import */ var _token_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63293);
/* harmony import */ var _token_price__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50184);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41876);
/* harmony import */ var _opensea_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(72757);
/* harmony import */ var _NextID__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45596);
/* harmony import */ var _debank__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(99620);













const OpenSea = new _opensea__WEBPACK_IMPORTED_MODULE_0__/* .OpenSeaAPI */ .rQ();
const Rarible = new _rarible__WEBPACK_IMPORTED_MODULE_1__/* .RaribleAPI */ .I();
const NFTScan = new _NFTScan__WEBPACK_IMPORTED_MODULE_2__/* .NFTScanAPI */ .Ur();
const CoinGecko = new _coingecko__WEBPACK_IMPORTED_MODULE_11__/* .CoinGeckoAPI */ .J();
const Explorer = new _explorer__WEBPACK_IMPORTED_MODULE_3__/* .NativeExplorerAPI */ .b();
const RSS3 = new _rss3__WEBPACK_IMPORTED_MODULE_4__/* .RSS3API */ .M();
const KeyValue = new _kv__WEBPACK_IMPORTED_MODULE_5__/* .KeyValueAPI */ .Z();
const Twitter = new _twitter__WEBPACK_IMPORTED_MODULE_6__/* .TwitterAPI */ .I();
const TokenList = new _token_list__WEBPACK_IMPORTED_MODULE_7__/* .TokenListAPI */ .U();
const TokenPrice = new _token_price__WEBPACK_IMPORTED_MODULE_12__/* .TokenPriceAPI */ .J();
// Method for provider proxy






/***/ }),

/***/ 72757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Np": () => (/* binding */ toImage),
/* harmony export */   "bb": () => (/* binding */ getOrderUnitPrice),
/* harmony export */   "t6": () => (/* binding */ getOrderUSDPrice)
/* harmony export */ });
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42263);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15091);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83468);



function getOrderUnitPrice(currentPrice, decimals, quantity) {
    if (!currentPrice || !decimals || !quantity) return;
    const _currentPrice = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(currentPrice).div((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pow10 */ .wA)(decimals));
    const _quantity = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(quantity).div((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pow10 */ .wA)((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .isOne */ .P$)(quantity) ? 0 : 8));
    return _currentPrice.dividedBy(_quantity).decimalPlaces(4, 2);
}
function getOrderUSDPrice(currentPrice, usdPrice, decimals) {
    if (!currentPrice || !decimals) return;
    const quantity = new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(currentPrice).div((0,_masknet_web3_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .pow10 */ .wA)(decimals));
    return new (bignumber_js__WEBPACK_IMPORTED_MODULE_0___default())(usdPrice !== null && usdPrice !== void 0 ? usdPrice : 0).multipliedBy(quantity).decimalPlaces(2, 2);
}
function toImage(url) {
    if (!url) return '';
    if (url.startsWith('ipfs://')) {
        const cid = url.replace(/^ipfs:\/\//, '');
        return (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .resolveIPFSLink */ .r5)(cid);
    }
    return url;
}


/***/ }),

/***/ 83468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "IH": () => (/* binding */ resolveProviderHomeLink),
/* harmony export */   "OC": () => (/* binding */ resolveNetworkAddressPrefix),
/* harmony export */   "Po": () => (/* binding */ resolveChainName),
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink),
/* harmony export */   "V3": () => (/* binding */ resolveAddressLinkOnExplorer),
/* harmony export */   "YU": () => (/* binding */ resolveProviderInjectedKey),
/* harmony export */   "_E": () => (/* binding */ resolveChainColor),
/* harmony export */   "dC": () => (/* binding */ resolveProviderShortenLink),
/* harmony export */   "hX": () => (/* binding */ resolveProviderDownloadLink),
/* harmony export */   "nW": () => (/* binding */ resolveNetworkName),
/* harmony export */   "r5": () => (/* binding */ resolveIPFSLink),
/* harmony export */   "r_": () => (/* binding */ resolveChainFullName),
/* harmony export */   "sJ": () => (/* binding */ resolveDomainLink),
/* harmony export */   "vy": () => (/* binding */ resolveBlockLinkOnExplorer),
/* harmony export */   "yW": () => (/* binding */ resolveTokenLinkOnExplorer),
/* harmony export */   "yl": () => (/* binding */ resolveResourceLink),
/* harmony export */   "z4": () => (/* binding */ resolveTransactionLinkOnExplorer)
/* harmony export */ });
/* unused harmony exports resolveCollectibleProviderLink, resolveCollectibleAssetLink, resolveOpenSeaLink */
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19802);
/* harmony import */ var urlcat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(urlcat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66559);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95130);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88486);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22229);




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
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://coldcdn.com/api/cdn/mipfsygtms/ipfs/:ipfs', {
        ipfs
    });
}
function resolveResourceLink(originLink) {
    if (!originLink) return '';
    if (originLink.startsWith('http') || originLink.startsWith('data')) return originLink;
    if (originLink.startsWith('ipfs://ipfs/')) return resolveIPFSLink(originLink.replace(/^ipfs:\/\/ipfs\//, ''));
    if (originLink.startsWith('ipfs://')) return resolveIPFSLink(decodeURIComponent(originLink).replace('ipfs://', ''));
    return resolveIPFSLink(originLink);
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

/***/ 86711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

/***/ 66559:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VJ": () => (/* reexport */ abortSignalTimeout/* abortSignalTimeout */.V),
  "n5": () => (/* reexport */ blob/* blobToDataURL */.n),
  "Gx": () => (/* reexport */ blob/* blobToText */.G),
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
  "Yl": () => (/* reexport */ typescript_enum/* getEnumAsArray */.Y),
  "J3": () => (/* reexport */ ecmascript/* memoizePromise */.J3),
  "P": () => (/* reexport */ control_flow/* safeUnreachable */.P),
  "Vs": () => (/* reexport */ timeout/* timeout */.V),
  "t1": () => (/* reexport */ control_flow/* unreachable */.t),
  "uL": () => (/* reexport */ document_readyState/* waitDocumentReadyState */.u)
});

// UNUSED EXPORTS: assertNonNull, detectAudioSupport, detectImageSupport, detectVideoSupport, getDimensionAsJPEG, getDimensionAsPNG, isArrayBufferEqual, isNonNull

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/ecmascript/index.js + 3 modules
var ecmascript = __webpack_require__(51143);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/media/index.js + 3 modules
var media = __webpack_require__(28662);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/typescript/control-flow.js
var control_flow = __webpack_require__(70452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/typescript/enum.js
var typescript_enum = __webpack_require__(77380);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/typescript/index.js



//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/abortSignalTimeout.js
var abortSignalTimeout = __webpack_require__(91620);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/blob.js
var blob = __webpack_require__(58406);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/combineAbortSignal.js
var combineAbortSignal = __webpack_require__(13193);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/delay.js
var delay = __webpack_require__(11679);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/document.readyState.js
var document_readyState = __webpack_require__(79958);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/encode-text-arraybuffer.js
var encode_text_arraybuffer = __webpack_require__(16429);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/timeout.js
var timeout = __webpack_require__(270);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/web/index.js







//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 46517:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteDB": () => (/* binding */ deleteDB),
/* harmony export */   "openDB": () => (/* binding */ openDB),
/* harmony export */   "unwrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "wrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
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
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.openDB),
/* harmony export */   "re": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.wrap)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ }),

/***/ 88674:
/***/ ((module) => {

"use strict";
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
/******/ 			return "js/chunk." + ({"97":"npm.lodash.clonedeep","125":"npm.jsonschema","211":"npm-ns.balancer-labs.sor","237":"npm-ns.metaplex-foundation.mpl-metaplex","313":"npm.ef-core","405":"npm.react-feather","551":"npm.graphql","686":"npm-ns.metaplex-foundation.mpl-token-metadata","708":"npm.socket.io-client","855":"npm.json2csv","1077":"npm-ns.dimensiondev.mask-wallet-core","1183":"npm-ns.solana.spl-token-registry","1240":"npm-ns.ethersphere.bee-js","1246":"npm.eth-rpc-errors","1305":"npm-ns.metamask.inpage-provider","1432":"npm-ns.metaplex.js","1440":"npm.validator","1491":"npm.crypto-js","1546":"npm-ns.uniswap.v3-periphery","1626":"npm-ns.ethersproject.contracts","2116":"npm.web-streams-polyfill","2162":"npm.z-schema","2253":"npm.near-api-js","2261":"npm.wyvern-js","2297":"npm.3id-did-provider","2299":"npm.tweetnacl","2514":"npm.blob-polyfill","2598":"npm.react-hook-form","2735":"npm-ns.solana.web3.js","2908":"npm-ns.dimensiondev.stego-js","2917":"npm.did-jwt","2939":"npm-ns.uniswap.v3-sdk","2943":"npm.bip39","3375":"npm-ns.ethersproject.abstract-signer","3708":"npm.multiaddr","3742":"npm.multiformats","3850":"npm.arweave","4038":"npm.cborg","4049":"npm.qrcode-generator","4072":"npm.d3-scale","4270":"npm.rpc-utils","4428":"npm-ns.uniswap.v2-sdk","4477":"npm.gun","4520":"npm-ns.metaplex-foundation.mpl-core","4557":"npm.superstruct","5148":"npm-ns.ceramicstudio.idx","5229":"npm.cross-fetch","5255":"npm-ns.ceramicnetwork.common","5258":"MaskWallet","5334":"npm.store","5393":"npm-ns.ceramicnetwork.blockchain-utils-linking","5553":"npm.fortmatic","5578":"npm-ns.0xproject.utils","5678":"npm.d3-voronoi","5687":"npm-ns.solana.buffer-layout","5756":"npm.debug","5815":"npm-ns.blocto.protobuf","5891":"npm-ns.walletconnect.core","6045":"npm.ethereumjs-abi","6124":"npm.fast-json-patch","6191":"npm.mustache","6230":"npm.zod","6265":"npm-ns.metamask.eth-sig-util","6316":"npm-ns.msgpack.msgpack","6813":"npm-ns.portto.sdk","6982":"npm-ns.improbable-eng.grpc-web","7015":"npm.d3-transition","7070":"npm.regenerator-runtime","7141":"npm.json-rpc-engine","7318":"npm-ns.cyberlab.cyberconnect","7372":"npm.ipfs-http-client","7425":"npm-ns.solana.spl-token","7531":"npm.d3-selection","7604":"npm-ns.ethersproject.providers","7696":"npm.color-convert","7765":"npm.engine.io-client","7913":"npm.lodash","8000":"npm.lodash.isequal","8117":"npm.protobufjs","8331":"npm.opensea-js","8364":"npm.remarkable","8370":"npm.dompurify","8393":"npm.lodash.get","8492":"npm.aes-js","8828":"npm-ns.ethersproject.wordlists","8857":"npm.borc","8936":"npm-ns.pedrouid.iso-crypto","9223":"npm-ns.metaplex-foundation.mpl-auction","9239":"npm-ns.blocto.fcl","9259":"npm.html-to-image","9271":"npm.rxjs","9278":"npm.axios","9447":"npm.engine.io-parser","9566":"npm.rpc-websockets","9706":"npm-ns.ceramicnetwork.streamid","9714":"npm.wyvern-schemas","9796":"npm-ns.snapshot-labs.snapshot.js","9834":"npm-ns.metaplex-foundation.mpl-token-vault"}[chunkId] || chunkId) + ".js";
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
/******/ 			8469: 0,
/******/ 			9331: 0
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
/******/ 	__webpack_require__.O(undefined, [5638,2698,7871,9759,3294,2486,4227,4544,5737,187,3883,8136,3147,8019,8712,9227,3693,3758,4570,7822,7856,400,3453,5132,12,2619,5838,3142,5105,3846,8129,5951,2752,7849,7512,5178,6565,9744,444,6160,4278,9197,4960,102,253,572,8547,8145,5313,2088,3981,1696,3638,1555,516,2974,3832,159,9141,6067,234,9737,79,4590,2891,5784,4586,9855,4029,433,9697,3619,2222,9275,9075,8780,4198], () => (__webpack_require__(20199)))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [5638,2698,7871,9759,3294,2486,4227,4544,5737,187,3883,8136,3147,8019,8712,9227,3693,3758,4570,7822,7856,400,3453,5132,12,2619,5838,3142,5105,3846,8129,5951,2752,7849,7512,5178,6565,9744,444,6160,4278,9197,4960,102,253,572,8547,8145,5313,2088,3981,1696,3638,1555,516,2974,3832,159,9141,6067,234,9737,79,4590,2891,5784,4586,9855,4029,433,9697,3619,2222,9275,9075,8780,4198], () => (__webpack_require__(42038)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;