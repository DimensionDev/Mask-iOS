"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9867],{

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
/* harmony export */   "Fl": () => (/* binding */ sn),
/* harmony export */   "MD": () => (/* binding */ C),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sc": () => (/* binding */ L)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enablePatches, finishDraft, freeze, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setUseProxies */
function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[Q]}function t(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?(n.delete(r),n.add(t)):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return true||0,U}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.O=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.g||b("ES5").S(e,r,o),o?(i[Q].P&&(O(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(r,i){return A(n,e,o,r,i,t)})),x(n,o,!1),t&&n.u&&b("Patches").R(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,r(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!r(v))return;e.m=!1}if(t(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),n.h.F&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,r,t){var e=s(r)?b("MapSet").N(r,t):v(r)?b("MapSet").T(r,t):n.g?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return(t?t.A:_()).p.push(e),e}function D(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(r,c),u.I=!1}else e=F(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function F(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return false&&0,en.get(r,n)},set:function(r){var t=this[Q]; false&&0,en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.O&&n(3,JSON.stringify(p(r)))}var s={};m("ES5",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,""+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,D:{},l:r,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&"object"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.D,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return"-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},R:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=R(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.O&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.D.set(n,!0),t.o.set(n,r),t.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.D.set(n,!1):r.D.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(r){n.D.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=R(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m("MapSet",{N:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=R(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.D[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&"number"!=typeof t&&(void 0!==t||r in n.o)||(n.o[r]=t,n.D[r]=!0,!0)},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.D[r]=!1,E(n),k(n)):delete n.D[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return false&&0,on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return false&&0,en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.g=B,this.F=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=R(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.F&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; false&&(0);var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(r){r&&!B&&n(20),this.g=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 52222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EK": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.EK),
/* harmony export */   "FW": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.FW),
/* harmony export */   "Ft": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.Ft),
/* harmony export */   "G6": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.G6),
/* harmony export */   "Gq": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.Gq),
/* harmony export */   "HI": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.HI),
/* harmony export */   "Mk": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.Mk),
/* harmony export */   "OF": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.OF),
/* harmony export */   "Pj": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.Pj),
/* harmony export */   "VC": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.VC),
/* harmony export */   "WZ": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.WZ),
/* harmony export */   "Ym": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.Ym),
/* harmony export */   "cV": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.cV),
/* harmony export */   "gO": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.gO),
/* harmony export */   "oX": () => (/* reexport safe */ _image_steganography__WEBPACK_IMPORTED_MODULE_3__.oX),
/* harmony export */   "pe": () => (/* reexport safe */ _encryption__WEBPACK_IMPORTED_MODULE_1__.pe),
/* harmony export */   "qx": () => (/* reexport safe */ _payload__WEBPACK_IMPORTED_MODULE_0__.qx),
/* harmony export */   "zl": () => (/* reexport safe */ _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__.zl)
/* harmony export */ });
/* harmony import */ var _payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79807);
/* harmony import */ var _encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31420);
/* harmony import */ var _social_network_encode_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19586);
/* harmony import */ var _image_steganography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95203);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62435);






// TODO: remove them in the future



/***/ }),

/***/ 56045:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* reexport */ saveFileFromBuffer),
  "r": () => (/* reexport */ saveFileFromUrl)
});

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

/***/ 95095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ NFT_AVATAR_DB_NAME),
/* harmony export */   "EA": () => (/* binding */ NFT_AVATAR_DB_NAME_STORAGE),
/* harmony export */   "Uu": () => (/* binding */ PLUGIN_ID),
/* harmony export */   "kW": () => (/* binding */ NFT_AVATAR_JSON_SERVER),
/* harmony export */   "vu": () => (/* binding */ RSS3_KEY_SNS)
/* harmony export */ });
/* unused harmony exports NFT_CONTRACT_JSON_VERIFIED_SERVER, PLUGIN_NAME, PLUGIN_DESCRIPTION */
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
/* harmony export */   "Ct": () => (/* binding */ userGuideStatus),
/* harmony export */   "FX": () => (/* binding */ userPinExtension),
/* harmony export */   "JE": () => (/* binding */ bioDescription),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "Pg": () => (/* binding */ sayHelloShowed),
/* harmony export */   "VO": () => (/* binding */ currentPluginMinimalModeNOTEnabled),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier),
/* harmony export */   "gG": () => (/* binding */ dismissVerifyNextID),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "tR": () => (/* binding */ pluginIDSettings),
/* harmony export */   "yO": () => (/* binding */ personalHomepage)
/* harmony export */ });
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

/***/ 6277:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(3747);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(1650);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...base/* facebookBase */.qv,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2486), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(3102), __webpack_require__.e(2092), __webpack_require__.e(8595), __webpack_require__.e(1314), __webpack_require__.e(1151), __webpack_require__.e(4894)]).then(__webpack_require__.bind(__webpack_require__, 64894))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...base/* facebookWorkerBase */.XO,
    load: ()=>__webpack_require__.e(/* import() */ 329).then(__webpack_require__.bind(__webpack_require__, 27288))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(37732);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...twitter_com_base/* twitterBase */.oQ,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2486), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(7696), __webpack_require__.e(2245), __webpack_require__.e(3102), __webpack_require__.e(2092), __webpack_require__.e(8595), __webpack_require__.e(8106), __webpack_require__.e(1314), __webpack_require__.e(1151), __webpack_require__.e(3169)]).then(__webpack_require__.bind(__webpack_require__, 5756))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...twitter_com_base/* twitterWorkerBase */.x,
    load: ()=>__webpack_require__.e(/* import() */ 7807).then(__webpack_require__.bind(__webpack_require__, 47807))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var instagram_com_base = __webpack_require__(93505);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...instagram_com_base/* instagramBase */.j,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(3102), __webpack_require__.e(2092), __webpack_require__.e(8595), __webpack_require__.e(1151), __webpack_require__.e(6839)]).then(__webpack_require__.bind(__webpack_require__, 77876))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...instagram_com_base/* instagramWorkerBase */.x,
    load: ()=>__webpack_require__.e(/* import() */ 5458).then(__webpack_require__.bind(__webpack_require__, 75458))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(8727);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...minds_com_base/* mindsBase */.NE,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2486), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(3102), __webpack_require__.e(2092), __webpack_require__.e(8595), __webpack_require__.e(1314), __webpack_require__.e(510)]).then(__webpack_require__.bind(__webpack_require__, 80510))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...minds_com_base/* mindsWorkerBase */.fy,
    load: ()=>__webpack_require__.e(/* import() */ 5605).then(__webpack_require__.bind(__webpack_require__, 75605))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/opensea.io/base.ts
var opensea_io_base = __webpack_require__(69118);
;// CONCATENATED MODULE: ./src/social-network-adaptor/opensea.io/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...opensea_io_base/* openseaBase */.W,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(3102), __webpack_require__.e(2092), __webpack_require__.e(8595), __webpack_require__.e(6388)]).then(__webpack_require__.bind(__webpack_require__, 16388))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...opensea_io_base/* openseaWorkerBase */.G,
    load: ()=>__webpack_require__.e(/* import() */ 3787).then(__webpack_require__.bind(__webpack_require__, 33787))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

;// CONCATENATED MODULE: ./src/social-network-adaptor/index.ts







/***/ }),

/***/ 8727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
/* unused harmony export isMinds */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*',
    'https://cdn.minds.com/*'
];
const mindsBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .MINDS_ID */ .fN,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Minds */ .Gq.Minds,
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

/***/ 69118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ openseaWorkerBase),
/* harmony export */   "W": () => (/* binding */ openseaBase)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2666);
/* harmony import */ var _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52222);


const origins = [
    'https://opensea.io/*'
];
const openseaBase = {
    networkIdentifier: _masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .OPENSEA_ID */ .Df,
    encryptionNetwork: _masknet_encryption__WEBPACK_IMPORTED_MODULE_1__/* .SocialNetworkEnum.Unknown */ .Gq.Unknown,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(_masknet_shared__WEBPACK_IMPORTED_MODULE_0__/* .OPENSEA_ID */ .Df);
    },
    notReadyForProduction: true
};
const openseaWorkerBase = {
    ...openseaBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 97216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ isMobileTwitter)
/* harmony export */ });
/* unused harmony export twitterDomain */
const isMobileTwitter = !!navigator.userAgent.match(/Mobile|mobile/);
const twitterDomain = (/* unused pure expression or super */ null && (isMobileTwitter ? 'https://mobile.twitter.com/' : 'https://twitter.com/'));


/***/ }),

/***/ 74372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Wu": () => (/* binding */ hasEditor),
/* harmony export */   "iv": () => (/* binding */ isCompose),
/* harmony export */   "kt": () => (/* binding */ getEditorContent),
/* harmony export */   "uf": () => (/* binding */ hasFocus)
/* harmony export */ });
/* unused harmony export isMobile */
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43399);

const getEditorContent = ()=>{
    const editorNode = (0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate();
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
const hasEditor = ()=>!!(0,_selector__WEBPACK_IMPORTED_MODULE_0__/* .postEditorDraftContentSelector */ .Y5)().evaluate()
;


/***/ }),

/***/ 43399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$3": () => (/* binding */ searchProfileSaveSelector),
/* harmony export */   "$P": () => (/* binding */ searchProfessionalButtonSelector),
/* harmony export */   "$_": () => (/* binding */ postEditorContentInPopupSelector),
/* harmony export */   "Ab": () => (/* binding */ searchTweetAvatarSelector),
/* harmony export */   "Dc": () => (/* binding */ searchTwitterAvatarNFTSelector),
/* harmony export */   "Du": () => (/* binding */ rootSelector),
/* harmony export */   "FK": () => (/* binding */ searchProfileSetAvatarSelector),
/* harmony export */   "Fe": () => (/* binding */ searchProfileTabSelector),
/* harmony export */   "Fv": () => (/* binding */ searchTwitterAvatarNFTLinkSelector),
/* harmony export */   "Hk": () => (/* binding */ searchAppBarBackSelector),
/* harmony export */   "IQ": () => (/* binding */ personalHomepageSelector),
/* harmony export */   "JN": () => (/* binding */ searchProfileTabListSelector),
/* harmony export */   "Kq": () => (/* binding */ searchSelfAvatarSelector),
/* harmony export */   "L2": () => (/* binding */ searchProfileTabListLastChildSelector),
/* harmony export */   "Ls": () => (/* binding */ searchAvatarSelector),
/* harmony export */   "N7": () => (/* binding */ searchTwitterAvatarLinkSelector),
/* harmony export */   "NN": () => (/* binding */ searchReplyToolbarSelector),
/* harmony export */   "Ps": () => (/* binding */ postEditorInTimelineSelector),
/* harmony export */   "QG": () => (/* binding */ composeAnchorSelector),
/* harmony export */   "QK": () => (/* binding */ bioPageUserIDSelector),
/* harmony export */   "R9": () => (/* binding */ searchResultHeadingSelector),
/* harmony export */   "Rd": () => (/* binding */ postEditorInPopupSelector),
/* harmony export */   "Rj": () => (/* binding */ profileBioSelector),
/* harmony export */   "S": () => (/* binding */ searchAllProfileTabSelector),
/* harmony export */   "Sn": () => (/* binding */ searchSelfNicknameSelector),
/* harmony export */   "WU": () => (/* binding */ sideBarProfileSelector),
/* harmony export */   "XD": () => (/* binding */ postsContentSelector),
/* harmony export */   "XL": () => (/* binding */ searchTwitterAvatarOpenFilesSelector),
/* harmony export */   "Y5": () => (/* binding */ postEditorDraftContentSelector),
/* harmony export */   "YG": () => (/* binding */ floatingBioCardSelector),
/* harmony export */   "YX": () => (/* binding */ searchProfileEmptySelector),
/* harmony export */   "ag": () => (/* binding */ headingTextSelector),
/* harmony export */   "at": () => (/* binding */ profileFollowButtonSelector),
/* harmony export */   "b2": () => (/* binding */ profileMenuButtonSelector),
/* harmony export */   "bQ": () => (/* binding */ searchRetweetAvatarSelector),
/* harmony export */   "ch": () => (/* binding */ toolBoxInSideBarSelector),
/* harmony export */   "dA": () => (/* binding */ searchNFTAvatarSelector),
/* harmony export */   "nS": () => (/* binding */ newPostButtonSelector),
/* harmony export */   "p$": () => (/* binding */ searchTwitterAvatarSelector),
/* harmony export */   "pz": () => (/* binding */ searchAvatarMetaSelector),
/* harmony export */   "r$": () => (/* binding */ searchNewTweetButtonSelector),
/* harmony export */   "rf": () => (/* binding */ searchNickNameSelector),
/* harmony export */   "rk": () => (/* binding */ postsImageSelector),
/* harmony export */   "s8": () => (/* binding */ searchSelfHandleSelector),
/* harmony export */   "tk": () => (/* binding */ isReplyPageSelector),
/* harmony export */   "uy": () => (/* binding */ bioPageUserNickNameSelector),
/* harmony export */   "vL": () => (/* binding */ postAvatarsContentSelector),
/* harmony export */   "wP": () => (/* binding */ searchEditProfileSelector),
/* harmony export */   "xH": () => (/* binding */ composeAnchorTextSelector),
/* harmony export */   "xx": () => (/* binding */ searchProfileTabPageSelector),
/* harmony export */   "yR": () => (/* binding */ timelinePostContentSelector),
/* harmony export */   "zA": () => (/* binding */ searchProfileTabLoseConnectionPageSelector)
/* harmony export */ });
/* unused harmony exports querySelector, searchProfileSelector, searchProfileActiveTabSelector, searchProfileActiveTabStatusLineSelector, searchProfileActiveTabLabelSelector, searchForegroundColorSelector, bioCardSelector, postEditorToolbarSelector, twitterMainAvatarSelector, searchProfileAvatarSelector, searchProfileAvatarParentSelector, searchAvatarSelectorInput, searchAvatarSelectorImage, searchUseCellSelector, searchRejectReplyTextSelector */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97216);
/* harmony import */ var _postBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74372);



const querySelector = (selector, singleMode = true)=>{
    const ls = new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector().querySelector(selector);
    return singleMode ? ls.enableSingleMode() : ls;
};
const querySelectorAll = (selector)=>{
    return new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector().querySelectorAll(selector);
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
    return ((0,_postBox__WEBPACK_IMPORTED_MODULE_1__/* .isCompose */ .iv)() ? postEditorInPopupSelector() : postEditorInTimelineSelector()).querySelector('.public-DraftEditor-content, [contenteditable][aria-label][spellcheck]');
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
const postsImageSelector = (node)=>new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__.LiveSelector([
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
const searchProfileSetAvatarSelector = ()=>_isMobile__WEBPACK_IMPORTED_MODULE_0__/* .isMobileTwitter */ .b ? searchProfessionalButtonSelector().closest(4).querySelector('div > div:nth-child(2) >div > div:nth-child(2)') : querySelector('[data-testid^="ProfileBirthdate"]').closest(5).querySelector('div > div:nth-child(2) > div:nth-child(2)')
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

/***/ 3747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.BE),
/* harmony export */   "C8": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.C),
/* harmony export */   "Du": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Du),
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LB": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.LB),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "ZZ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.ZZ),
/* harmony export */   "gE": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUI),
/* harmony export */   "tr": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.tr)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30821);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10888);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57601);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9805);







/***/ }),

/***/ 30821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Du": () => (/* binding */ creator),
/* harmony export */   "MJ": () => (/* binding */ managedStateCreator),
/* harmony export */   "ZZ": () => (/* binding */ stateCreator)
/* harmony export */ });
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

/***/ 86742:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ collectTwitterEmoji),
/* harmony export */   "a": () => (/* binding */ collectNodeText)
/* harmony export */ });
function collectTwitterEmoji(points) {
    if (points.length === 0) return '';
    if (points[0] >= 0x23 && points[0] <= 0x39) return String.fromCodePoint(points[0], ...points.includes(0xfe0f) ? [] : [
        0xfe0f
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
            const result = options.onHTMLAnchorElement?.(each);
            if (result?.some) return result.val;
            const href = each.getAttribute('href');
            return [
                href,
                each.innerText
            ].join(' ');
        }
        if (each instanceof HTMLImageElement) {
            const src = each.getAttribute('src');
            const alt = each.getAttribute('alt') ?? '';
            const matched = src?.match(/emoji\/v2\/svg\/([\w\-]+)\.svg/)?.[1];
            if (matched) return collectTwitterEmoji(matched.split('-').map((x)=>Number.parseInt(x, 16)
            )) || alt;
            return alt;
        }
        if (each instanceof HTMLElement) return collectNodeText(each, options);
        return '';
    }).join('');
}


/***/ }),

/***/ 99665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ untilElementAvailable)
/* harmony export */ });
/* unused harmony export nthChild */
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);


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
function nthChild(n, ...childrenIndex) {
    let r = n;
    for (const v of childrenIndex){
        if (isUndefined(r)) break;
        r = r.children[v];
    }
    return r;
}


/***/ }),

/***/ 92121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f2": () => (/* reexport */ fromRGB),
  "dF": () => (/* reexport */ getBackgroundColor),
  "aF": () => (/* reexport */ getForegroundColor),
  "_T": () => (/* reexport */ isDark),
  "$o": () => (/* reexport */ isDarkTheme),
  "wj": () => (/* reexport */ shade),
  "xr": () => (/* reexport */ toRGB),
  "VJ": () => (/* reexport */ useClassicMaskSNSTheme/* useClassicMaskSNSTheme */.V),
  "Nh": () => (/* reexport */ useColorStyles/* useColorStyles */.N),
  "B6": () => (/* reexport */ useErrorStyles/* useErrorStyles */.B)
});

// UNUSED EXPORTS: MaskDarkTheme, MaskLightTheme, useThemeLanguage

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

/***/ 26537:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useCompositionContext),
/* harmony export */   "N": () => (/* binding */ CompositionContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);

const CompositionContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    attachMetadata () {},
    dropMetadata () {}
});
const useCompositionContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CompositionContext)
;
/* unsupported import.meta.webpackHot */ undefined && 0;


/***/ }),

/***/ 3267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "KP": () => (/* reexport */ hooks/* PluginI18NFieldRender */.KP),
  "je": () => (/* reexport */ entry/* PluginId */.je),
  "EK": () => (/* reexport */ createInjectHooksRenderer),
  "i1": () => (/* reexport */ entry/* registeredPlugins */.i1),
  "Rc": () => (/* reexport */ hooks/* useActivatedPlugin */.Rc),
  "eS": () => (/* reexport */ hooks/* usePluginI18NField */.eS),
  "fI": () => (/* reexport */ hooks/* usePluginWrapper */.fI)
});

// UNUSED EXPORTS: CurrentSNSNetwork, createPluginMessage, createPluginRPC, createPluginRPCGenerator, getPluginDefine, registerPlugin, registeredPluginIDs

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






const PropsContext = /*#__PURE__*/ (0,react.createContext)(null);
function createInjectHooksRenderer(usePlugins, pickInjectorHook, PluginWrapperComponent) {
    function usePluginWrapperProvider(element, plugin) {
        const [ref, setRef] = (0,react.useState)(null);
        if (PluginWrapperComponent) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginWrapperComponent, {
                definition: plugin,
                ref: (methods)=>{
                    if (methods) setRef(methods);
                },
                children: ref ? /*#__PURE__*/ (0,jsx_runtime.jsx)(usePluginWrapper/* PluginWrapperMethodsContext.Provider */.yd.Provider, {
                    value: ref,
                    children: element
                }) : null
            });
        }
        return element;
    }
    function SinglePluginWithinErrorBoundary({ plugin  }) {
        const t = (0,hooks/* usePluginI18NField */.eS)();
        const props = (0,react.useContext)(PropsContext);
        const ui = pickInjectorHook(plugin);
        return usePluginWrapperProvider(ui ? /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ErrorBoundary */.SV, {
            subject: 'Plugin ' + t(plugin.ID, plugin.name),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Main, {
                UI: ui,
                data: props
            })
        }) : null, plugin);
    }
    function PluginsInjectionHookRender(props) {
        const allPlugins = usePlugins();
        const availablePlugins = (0,hooks/* useAvailablePlugins */.yH)(allPlugins);
        const all = availablePlugins.filter(pickInjectorHook).map((plugin)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(PropsContext.Provider, {
                value: props,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src_entry/* ShadowRootIsolation */.Q, {
                    "data-plugin": plugin.ID,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SinglePluginWithinErrorBoundary, {
                        plugin: plugin
                    })
                })
            }, plugin.ID)
        );
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: all
        });
    }
    return /*#__PURE__*/ (0,react.memo)(function PluginsInjectionHookRenderErrorBoundary(props) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            "data-plugin-render": "",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(src/* ErrorBoundary */.SV, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(PluginsInjectionHookRender, {
                    ...props
                })
            })
        });
    });
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return /*#__PURE__*/ (0,jsx_runtime.jsx)(RawHookRender, {
        UI: UI,
        data: data
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(UI, {
        ...data
    });
}
function RawHookRender({ UI , data  }) {
    const [ref, setRef] = (0,react.useState)();
    const [f, setF] = (0,react.useState)();
    const cancel = (0,react.useRef)();
    (0,react.useEffect)(()=>{
        if (!ref) return;
        const sig = cancel.current = new AbortController();
        setF(UI.init(sig.signal, ref));
        return ()=>sig.abort()
        ;
    }, [
        ref,
        UI.init
    ]);
    (0,react.useEffect)(()=>void f?.(data)
    , [
        f,
        data
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: setRef
    });
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}

;// CONCATENATED MODULE: ../plugin-infra/src/entry-dom.ts





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
/* harmony export */   "i1": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_3__.i1),
/* harmony export */   "je": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62559);
/* harmony import */ var _utils_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85705);
/* harmony import */ var _utils_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47923);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72938);






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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ useAvailablePlugins)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86248);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28102);


function checkPluginAvailable(plugin, pluginId, chainId) {
    const supportedChainIds = plugin.enableRequirement.web3?.[pluginId]?.supportedChainIds;
    if (!supportedChainIds) return true;
    return supportedChainIds.includes(chainId);
}
function useAvailablePlugins(plugins) {
    const networkPluginId = (0,_web3__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentWeb3NetworkPluginID */ .$f)();
    const chainId = (0,_web3__WEBPACK_IMPORTED_MODULE_1__/* .useChainId */ .xx)(networkPluginId);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>plugins.filter((plugin)=>checkPluginAvailable(plugin, networkPluginId, chainId)
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ PluginI18NFieldRender),
/* harmony export */   "e": () => (/* binding */ usePluginI18NField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43966);


function PluginI18NFieldRender({ pluginID , field  }) {
    const [t] = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__/* .useTranslation */ .$)();
    if (!field) return null;
    if (typeof field === 'object' && 'fallback' in field) {
        if (field.i18nKey) {
            const translate = t(field.i18nKey, {
                ns: pluginID,
                nsSeparator: '%%%',
                defaultValue: field.fallback
            });
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: translate
            });
        }
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: field.fallback
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: field
    });
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

/***/ 48463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fI": () => (/* binding */ usePluginWrapper),
/* harmony export */   "yd": () => (/* binding */ PluginWrapperMethodsContext)
/* harmony export */ });
/* unused harmony export emptyPluginWrapperMethods */
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
/* harmony export */   "Ar": () => (/* binding */ useActivatedPluginSNSAdaptor_Web3Supported),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor),
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony export useIsMinimalMode */
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

/***/ 91131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GM": () => (/* binding */ serializer),
/* harmony export */   "tr": () => (/* binding */ registerSerializableClass)
/* harmony export */ });
/* unused harmony export __DEBUG__ONLY__enableCryptoKeySerialization */
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
    typeson.register(cryptokey);
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
/* harmony export */   "Y_": () => (/* binding */ SubscriptionDebug),
/* harmony export */   "qY": () => (/* binding */ createConstantSubscription)
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

/***/ 11432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ShadowRootIsolation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71999);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86248);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93463);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39688);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10481);

/* eslint-disable react-hooks/rules-of-hooks */ 



/**
 * Render it's children inside a ShadowRoot to provide style isolation.
 */ function ShadowRootIsolation({ children , ...props }) {
    const disabled = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)((0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Contexts__WEBPACK_IMPORTED_MODULE_3__/* .DisableShadowRootContext */ .AZ)).current;
    if (disabled) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: children
    });
    const [dom, setDOM] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const container = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    if (!container.current) {
        container.current = document.createElement('div');
    }
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (!dom) return;
        if (dom.shadowRoot) return;
        const shadow = dom.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(container.current);
    }, [
        dom
    ]);
    if (!dom?.shadowRoot) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        ref: (x)=>x !== dom ? setDOM(x) : undefined
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_4__/* .ShadowRootStyleProvider */ .q, {
            shadow: dom.shadowRoot,
            children: /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_2__.createPortal)(children, container.current)
        })
    });
}


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
  "as": () => (/* reexport */ makeTypedMessageImage),
  "Ng": () => (/* reexport */ promise/* makeTypedMessagePromise */.N),
  "P": () => (/* reexport */ core_text/* makeTypedMessageText */.P),
  "Zw": () => (/* reexport */ makeTypedMessageTuple),
  "n_": () => (/* reexport */ makeTypedMessageTupleFromList),
  "kT": () => (/* reexport */ makeTypedMessageTupleSerializable),
  "mv": () => (/* reexport */ unknown/* makeTypedMessageUnknown */.m)
});

// UNUSED EXPORTS: isTypedMessageImage, isTypedMessageTextV1, isTypedMessageUnknown, makeTypedMessageSerializableTupleFromList

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
  "Jv": () => (/* reexport */ makeTypedMessageAnchor),
  "Jq": () => (/* reexport */ MaskPayload/* makeTypedMessageMaskPayload */.J)
});

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
        alt: (0,core/* makeTypedMessageText */.P)(`[${content}](${href})`)
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
  "po": () => (/* reexport */ Flatten/* FlattenTypedMessage */.p),
  "al": () => (/* reexport */ ParseLinkTransformer),
  "gO": () => (/* reexport */ composed/* composeTransformers */.g),
  "mC": () => (/* reexport */ utils/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ utils/* createTypedMessageMetadataReader */.Bi),
  "Ab": () => (/* reexport */ binary_encode/* decodeTypedMessageFromDocument */.A),
  "WR": () => (/* reexport */ deprecated_encode/* decodeTypedMessageV38ToV40Format */.W),
  "r1": () => (/* reexport */ utils/* editTypedMessageMeta */.r1),
  "vg": () => (/* reexport */ context/* emptyTransformationContext */.v),
  "F9": () => (/* reexport */ binary_encode/* encodeTypedMessageToDocument */.F),
  "Hu": () => (/* reexport */ deprecated_encode/* encodeTypedMessageV38Format */.H),
  "Vc": () => (/* reexport */ utils/* extractTextFromTypedMessage */.Vc),
  "ss": () => (/* reexport */ visitor/* forEachTypedMessageChild */.s),
  "b5": () => (/* reexport */ utils/* getKnownMetadataKeys */.b5),
  "SJ": () => (/* reexport */ utils/* getMetadataSchema */.SJ),
  "Jp": () => (/* reexport */ utils/* isDataMatchJSONSchema */.Jp),
  "bj": () => (/* reexport */ extension/* isTypedMessageAnchor */.bj),
  "YN": () => (/* reexport */ core/* isTypedMessageEmpty */.YN),
  "Hz": () => (/* reexport */ utils/* isTypedMessageEqual */.Hz),
  "Rz": () => (/* reexport */ core/* isTypedMessageText */.Rz),
  "Jv": () => (/* reexport */ extension/* makeTypedMessageAnchor */.Jv),
  "WM": () => (/* reexport */ core/* makeTypedMessageEmpty */.WM),
  "as": () => (/* reexport */ core/* makeTypedMessageImage */.as),
  "Ng": () => (/* reexport */ core/* makeTypedMessagePromise */.Ng),
  "P": () => (/* reexport */ core/* makeTypedMessageText */.P),
  "Zw": () => (/* reexport */ core/* makeTypedMessageTuple */.Zw),
  "n_": () => (/* reexport */ core/* makeTypedMessageTupleFromList */.n_),
  "IJ": () => (/* reexport */ visitor/* visitEachTypedMessageChild */.I)
});

// UNUSED EXPORTS: createMaskPayloadTransform, createTransformationContext, editMetadata, extractImageFromTypedMessage, isCoreTypedMessages, isNonSerializableTypedMessageWithAlt, isSerializableTypedMessage, isTypedMessageImage, isTypedMessageMaskPayload, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownExtensionTypedMessages, isWellKnownTypedMessages, makeTypedMessageMaskPayload, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

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
// EXTERNAL MODULE: ../typed-message/base/transformer/composed.ts
var composed = __webpack_require__(43457);
// EXTERNAL MODULE: ../typed-message/base/transformer/context.ts
var context = __webpack_require__(6596);
// EXTERNAL MODULE: ../typed-message/base/transformer/Flatten.ts
var Flatten = __webpack_require__(28722);
// EXTERNAL MODULE: ../typed-message/base/utils/parseLink.ts
var parseLink = __webpack_require__(81790);
;// CONCATENATED MODULE: ../typed-message/base/transformer/ParseLink.ts




function ParseLinkTransformer(message, context) {
    if ((0,core/* isTypedMessageText */.Rz)(message)) {
        const parsed = (0,parseLink/* parseLink */.V)(message.content);
        if (parsed.length === 1 && parsed[0].type === 'text') return message;
        return (0,core/* makeTypedMessageTupleSerializable */.kT)(parsed.map((i)=>{
            if (i.type === 'text') return (0,core/* makeTypedMessageText */.P)(i.content);
            return (0,extension/* makeTypedMessageAnchor */.Jv)(i.category, i.content, i.content);
        }), message.meta);
    }
    return (0,visitor/* visitEachTypedMessageChild */.I)(message, ParseLinkTransformer, context);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ FlattenTypedMessage)
/* harmony export */ });
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

/***/ 43457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ composeTransformers)
/* harmony export */ });
function composeTransformers() {
    const event = new EventTarget();
    const onUpdate = ()=>event.dispatchEvent(new Event('update'))
    ;
    const transformers = new Set();
    function composed(message, context) {
        return [
            ...transformers
        ].sort((a, b)=>b[1] - a[1]
        ).reduce((p, [c])=>c(p, context)
        , message);
    }
    const subscription = {
        getCurrentValue: ()=>(message, context)=>composed(message, context)
        ,
        subscribe (f) {
            event.addEventListener('update', f);
            return ()=>{
                event.removeEventListener('update', f);
            };
        }
    };
    return {
        subscription,
        addTransformer (t, priority, signal) {
            const f_priority = [
                typeof t === 'function' ? t : (message, context)=>t.getCurrentValue()(message, context)
                ,
                priority, 
            ];
            transformers.add(f_priority);
            onUpdate();
            const cancelSubscription = typeof t === 'function' ? ()=>{} : t.subscribe(onUpdate);
            const remove = ()=>{
                transformers.delete(f_priority);
                cancelSubscription();
                onUpdate();
            };
            signal?.addEventListener('abort', remove);
            return remove;
        }
    };
}


/***/ }),

/***/ 72542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ createRenderWithMetadata),
  "Bi": () => (/* reexport */ createTypedMessageMetadataReader),
  "r1": () => (/* reexport */ editTypedMessageMeta),
  "Vc": () => (/* reexport */ extractTextFromTypedMessage),
  "b5": () => (/* reexport */ getKnownMetadataKeys),
  "SJ": () => (/* reexport */ getMetadataSchema),
  "Jp": () => (/* reexport */ isDataMatchJSONSchema),
  "c3": () => (/* binding */ isNonSerializableTypedMessageWithAlt),
  "fV": () => (/* binding */ isSerializableTypedMessage),
  "Hz": () => (/* binding */ isTypedMessageEqual)
});

// UNUSED EXPORTS: editMetadata, extractImageFromTypedMessage, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

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
    return metadataSchemaStore.has(key) ? (0,esm/* Some */.bD)(metadataSchemaStore.get(key)) : esm/* None */.Hq;
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
    return (0,immer_esm/* default */.ZP)(metadata || new Map(), (e)=>void edit(e)
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js
var isEqual = __webpack_require__(23587);
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
    return (0,isEqual/* default */.Z)(message1, message2);
}


/***/ }),

/***/ 81790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ parseLink)
/* harmony export */ });
/* harmony import */ var anchorme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5670);

function parseLink(text) {
    // ESM-CJS cooperation
    const parsed = anchorme__WEBPACK_IMPORTED_MODULE_0__/* ["default"].list */ .Z.list(text);
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
/* harmony export */   "mr": () => (/* binding */ Instagram),
/* harmony export */   "no": () => (/* binding */ TokenList),
/* harmony export */   "oD": () => (/* binding */ CoinGecko),
/* harmony export */   "q7": () => (/* binding */ NextIDProof),
/* harmony export */   "t9": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_12__.t),
/* harmony export */   "tL": () => (/* binding */ Twitter),
/* harmony export */   "x4": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_11__.x)
/* harmony export */ });
/* unused harmony export NextIDStorage */
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

/***/ 47855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cq": () => (/* reexport safe */ _nonNull_js__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "P": () => (/* reexport safe */ _control_flow_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "Yl": () => (/* reexport safe */ _enum_js__WEBPACK_IMPORTED_MODULE_1__.Y),
/* harmony export */   "t1": () => (/* reexport safe */ _control_flow_js__WEBPACK_IMPORTED_MODULE_0__.t)
/* harmony export */ });
/* harmony import */ var _control_flow_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74221);
/* harmony import */ var _enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75961);
/* harmony import */ var _nonNull_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75869);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 75869:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ assertNonNull)
/* harmony export */ });
/* unused harmony export isNonNull */
function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined)
        throw new Error(message);
    return val;
}
function isNonNull(x) {
    return x !== undefined && x !== null;
}
//# sourceMappingURL=nonNull.js.map

/***/ }),

/***/ 47162:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ abortSignalTimeout)
/* harmony export */ });
function abortSignalTimeout(ms) {
    const x = new AbortController();
    setTimeout(() => x.abort(), ms);
    return x.signal;
}
//# sourceMappingURL=abortSignalTimeout.js.map

/***/ })

}]);