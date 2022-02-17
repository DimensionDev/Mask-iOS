"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6609],{

/***/ 25789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "MD": () => (/* binding */ C),
/* harmony export */   "sc": () => (/* binding */ L),
/* harmony export */   "Fl": () => (/* binding */ sn)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enablePatches, finishDraft, freeze, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setUseProxies */
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return true||0,U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return false&&0,en.get(r,n)},set:function(r){var t=this[Q]; false&&0,en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return false&&0,on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return false&&0,en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; false&&(0);var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 76342:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(58880);
} else {}


/***/ }),

/***/ 73195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ saveFileFromUrl),
/* harmony export */   "d": () => (/* binding */ saveFileFromBuffer)
/* harmony export */ });
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
/* harmony export */   "zs": () => (/* binding */ allPostReplacementSettings),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings),
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "Ct": () => (/* binding */ userGuideStatus),
/* harmony export */   "Pg": () => (/* binding */ sayHelloShowed),
/* harmony export */   "g4": () => (/* binding */ dismissPinExtensionTip),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   "T0": () => (/* binding */ currentPopupWindowId)
/* harmony export */ });
/* unused harmony exports currentImagePayloadStatus, currentSelectedIdentity, getCurrentSelectedIdentity, newDashboardConnection */
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
/* harmony export */   "DF": () => (/* binding */ isFacebook),
/* harmony export */   "XO": () => (/* binding */ facebookWorkerBase)
/* harmony export */ });
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

/***/ 15267:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(29980);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(81223);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...base/* facebookBase */.qv,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(2486), __webpack_require__.e(6316), __webpack_require__.e(2752), __webpack_require__.e(2908), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(1638), __webpack_require__.e(3723), __webpack_require__.e(6164), __webpack_require__.e(232), __webpack_require__.e(6542)]).then(__webpack_require__.bind(__webpack_require__, 16542))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...base/* facebookWorkerBase */.XO,
    load: ()=>__webpack_require__.e(/* import() */ 7649).then(__webpack_require__.bind(__webpack_require__, 27649))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(13138);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...twitter_com_base/* twitterBase */.oQ,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(5132), __webpack_require__.e(2486), __webpack_require__.e(6316), __webpack_require__.e(2752), __webpack_require__.e(2908), __webpack_require__.e(7696), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(2189), __webpack_require__.e(1638), __webpack_require__.e(3723), __webpack_require__.e(1102), __webpack_require__.e(6164), __webpack_require__.e(232), __webpack_require__.e(6744)]).then(__webpack_require__.bind(__webpack_require__, 56744))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...twitter_com_base/* twitterWorkerBase */.x,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(3723), __webpack_require__.e(629)]).then(__webpack_require__.bind(__webpack_require__, 30629))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var instagram_com_base = __webpack_require__(27947);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...instagram_com_base/* instagramBase */.j,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(2486), __webpack_require__.e(6316), __webpack_require__.e(2752), __webpack_require__.e(2908), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(1638), __webpack_require__.e(3723), __webpack_require__.e(6164), __webpack_require__.e(7429)]).then(__webpack_require__.bind(__webpack_require__, 37429))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...instagram_com_base/* instagramWorkerBase */.x,
    load: ()=>__webpack_require__.e(/* import() */ 1790).then(__webpack_require__.bind(__webpack_require__, 1790))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(67908);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...minds_com_base/* mindsBase */.NE,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(2486), __webpack_require__.e(6316), __webpack_require__.e(2752), __webpack_require__.e(2908), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(1638), __webpack_require__.e(3723), __webpack_require__.e(6164), __webpack_require__.e(232), __webpack_require__.e(3786)]).then(__webpack_require__.bind(__webpack_require__, 13786))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...minds_com_base/* mindsWorkerBase */.fy,
    load: ()=>__webpack_require__.e(/* import() */ 5019).then(__webpack_require__.bind(__webpack_require__, 25019))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

;// CONCATENATED MODULE: ./src/social-network-adaptor/index.ts






/***/ }),

/***/ 27947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ instagramBase),
/* harmony export */   "x": () => (/* binding */ instagramWorkerBase)
/* harmony export */ });
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

/***/ 67908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
const MINDS_ID = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: MINDS_ID,
    name: 'minds',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    }
};
function isMinds(ui) {
    return ui.networkIdentifier === MINDS_ID;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ }),

/***/ 13138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oQ": () => (/* binding */ twitterBase),
/* harmony export */   "L3": () => (/* binding */ isTwitter),
/* harmony export */   "x": () => (/* binding */ twitterWorkerBase)
/* harmony export */ });
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
/* harmony export */   "G": () => (/* binding */ getCurrentSNSNetwork),
/* harmony export */   "T": () => (/* binding */ getCurrentIdentifier)
/* harmony export */ });
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
    const current = (ref = _social_network__WEBPACK_IMPORTED_MODULE_4__.activatedSocialNetworkUI.collecting.identityProvider) === null || ref === void 0 ? void 0 : ref.recognized.value;
    return _social_network__WEBPACK_IMPORTED_MODULE_4__.globalUIState.profiles.value.find((i)=>{
        return i.identifier.equals(current === null || current === void 0 ? void 0 : current.identifier);
    }) || _social_network__WEBPACK_IMPORTED_MODULE_4__.globalUIState.profiles.value[0];
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
/* harmony export */   "$2": () => (/* binding */ decodePublicKeyUI),
/* harmony export */   "XF": () => (/* binding */ encodeTextPayloadUI),
/* harmony export */   "X2": () => (/* binding */ decodeTextPayloadUI)
/* harmony export */ });
/* unused harmony export encodePublicKeyUI */
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94922);

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

/***/ 51467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ collectTwitterEmoji),
/* harmony export */   "a": () => (/* binding */ collectNodeText)
/* harmony export */ });
function collectTwitterEmoji(points) {
    if (points.length === 0) return '';
    if (points[0] >= 35 && points[0] <= 57) return String.fromCodePoint(points[0], ...points.includes(65039) ? [] : [
        65039
    ], ...points.slice(1));
    return String.fromCodePoint(...points);
}
function collectNodeText(node, options = {}) {
    if (!node) return '';
    if (!node.querySelector('a, img')) return node.innerText;
    return [
        ...node.childNodes
    ].map((each)=>{
        if (each.nodeType === document.TEXT_NODE) return each.nodeValue || '';
        if (each instanceof HTMLAnchorElement) {
            var ref;
            const result = (ref = options.onHTMLAnchorElement) === null || ref === void 0 ? void 0 : ref.call(options, each);
            if (result === null || result === void 0 ? void 0 : result.some) return result.val;
            const href = each.getAttribute('href');
            return [
                href,
                each.innerText
            ].join(' ');
        }
        if (each instanceof HTMLImageElement) {
            var ref1;
            const src = each.getAttribute('src');
            var ref2;
            const alt = (ref2 = each.getAttribute('alt')) !== null && ref2 !== void 0 ? ref2 : '';
            const matched = (ref1 = src === null || src === void 0 ? void 0 : src.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/)) === null || ref1 === void 0 ? void 0 : ref1[1];
            if (matched) return collectTwitterEmoji(matched.split('-').map((x)=>Number.parseInt(x, 16)
            )) || alt;
            return alt;
        }
        if (each instanceof HTMLElement) return collectNodeText(each, options);
        return '';
    }).join('');
}


/***/ }),

/***/ 79918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ft": () => (/* binding */ untilElementAvailable),
/* harmony export */   "Up": () => (/* binding */ untilDomLoaded),
/* harmony export */   "Hx": () => (/* binding */ untilDocumentReady),
/* harmony export */   "vv": () => (/* binding */ nthChild)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80155);


const untilElementAvailable = async (ls, timeout = 5000)=>{
    const w = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.IntervalWatcher(ls);
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
        if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(r)) break;
        r = r.children[v];
    }
    return r;
}


/***/ }),

/***/ 57288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_T": () => (/* binding */ isDark),
/* harmony export */   "xr": () => (/* binding */ toRGB),
/* harmony export */   "f2": () => (/* binding */ fromRGB),
/* harmony export */   "wj": () => (/* binding */ shade),
/* harmony export */   "dF": () => (/* binding */ getBackgroundColor),
/* harmony export */   "aF": () => (/* binding */ getForegroundColor),
/* harmony export */   "$o": () => (/* binding */ isDarkTheme)
/* harmony export */ });
/* unused harmony export clamp */
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

/***/ 41898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor),
/* harmony export */   "Ar": () => (/* binding */ useActivatedPluginSNSAdaptor_Web3Supported),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony export useIsMinimalMode */
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

/***/ 85574:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "KQ": () => (/* reexport safe */ _useBalance__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "Yn": () => (/* reexport safe */ _useBeat__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__.O),
/* harmony export */   "xx": () => (/* reexport safe */ _useChainId__WEBPACK_IMPORTED_MODULE_6__.x),
/* harmony export */   "x5": () => (/* reexport safe */ _useChainColor__WEBPACK_IMPORTED_MODULE_7__.x),
/* harmony export */   "as": () => (/* reexport safe */ _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__.a),
/* harmony export */   "K1": () => (/* reexport safe */ _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__.K),
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

/***/ 30130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rz": () => (/* binding */ isTypedMessageText),
/* harmony export */   "P": () => (/* binding */ makeTypedMessageText),
/* harmony export */   "c0": () => (/* binding */ isTypedMessageImage),
/* harmony export */   "as": () => (/* binding */ makeTypedMessageImage),
/* harmony export */   "bZ": () => (/* binding */ isTypedMessageTuple),
/* harmony export */   "Zw": () => (/* binding */ makeTypedMessageTuple),
/* harmony export */   "n_": () => (/* binding */ makeTypedMessageTupleFromList),
/* harmony export */   "YN": () => (/* binding */ isTypedMessageEmpty),
/* harmony export */   "WM": () => (/* binding */ makeTypedMessageEmpty),
/* harmony export */   "KV": () => (/* binding */ isTypedMessagePromise),
/* harmony export */   "Ng": () => (/* binding */ makeTypedMessagePromise),
/* harmony export */   "q$": () => (/* binding */ isWellKnownCoreTypedMessages)
/* harmony export */ });
/* unused harmony exports isTypedMessageTextV1, isTypedMessageImageV1, isTypedMessageTupleSerializable, makeTypedMessageTupleSerializable, makeTypedMessageSerializableTupleFromList, isTypedMessageUnknown, makeTypedMessageUnknown */
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

/***/ 94150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bj": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.bj),
/* harmony export */   "Jv": () => (/* reexport safe */ _extension__WEBPACK_IMPORTED_MODULE_0__.Jv),
/* harmony export */   "Vc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Vc),
/* harmony export */   "Hz": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_2__.Hz),
/* harmony export */   "YN": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.YN),
/* harmony export */   "c0": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.c0),
/* harmony export */   "KV": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.KV),
/* harmony export */   "Rz": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Rz),
/* harmony export */   "bZ": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.bZ),
/* harmony export */   "WM": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.WM),
/* harmony export */   "as": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.as),
/* harmony export */   "Ng": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Ng),
/* harmony export */   "P": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.P),
/* harmony export */   "Zw": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.Zw),
/* harmony export */   "n_": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.n_),
/* harmony export */   "mC": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.mC),
/* harmony export */   "Bi": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.Bi),
/* harmony export */   "r1": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.r1),
/* harmony export */   "b5": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.b5),
/* harmony export */   "SJ": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.SJ),
/* harmony export */   "Jp": () => (/* reexport safe */ _metadata__WEBPACK_IMPORTED_MODULE_3__.Jp),
/* harmony export */   "rK": () => (/* binding */ isWellKnownTypedMessages)
/* harmony export */ });
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
/* harmony export */   "r1": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.r1),
/* harmony export */   "Vc": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Vc),
/* harmony export */   "b5": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.b5),
/* harmony export */   "SJ": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.SJ),
/* harmony export */   "Jp": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Jp),
/* harmony export */   "bj": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bj),
/* harmony export */   "YN": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.YN),
/* harmony export */   "Hz": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Hz),
/* harmony export */   "c0": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.c0),
/* harmony export */   "KV": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.KV),
/* harmony export */   "Rz": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Rz),
/* harmony export */   "bZ": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.bZ),
/* harmony export */   "rK": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.rK),
/* harmony export */   "Jv": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Jv),
/* harmony export */   "WM": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.WM),
/* harmony export */   "as": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.as),
/* harmony export */   "Ng": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Ng),
/* harmony export */   "P": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.P),
/* harmony export */   "Zw": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.Zw),
/* harmony export */   "n_": () => (/* reexport safe */ _TypedMessage__WEBPACK_IMPORTED_MODULE_6__.n_),
/* harmony export */   "Hd": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Hd),
/* harmony export */   "Y_": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_7__.Y_),
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
/* harmony export */   "Y_": () => (/* reexport safe */ _subscription__WEBPACK_IMPORTED_MODULE_8__.Y_),
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
/* harmony export */   "Jf": () => (/* binding */ SubscriptionFromValueRef),
/* harmony export */   "Y_": () => (/* binding */ SubscriptionDebug)
/* harmony export */ });
/* unused harmony export ValueRefFromSubscription */
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

/***/ 34010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useDialogStackActor),
/* harmony export */   "y": () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StackingScopeEnabled.Provider, {
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
/* harmony export */   "Q_": () => (/* binding */ resolveCollectibleLink),
/* harmony export */   "QN": () => (/* binding */ resolveOpenSeaLink)
/* harmony export */ });
/* unused harmony exports resolveCollectibleProviderLink, resolveCollectibleAssetLink */
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
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://opensea.io/assets/:address/:tokenId', {
        address,
        tokenId
    });
}


/***/ })

}]);