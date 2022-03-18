"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9071],{

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

/***/ 63423:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(83445);
} else {}


/***/ }),

/***/ 17703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ saveFileFromBuffer),
/* harmony export */   "r": () => (/* binding */ saveFileFromUrl)
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

/***/ 17692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$s": () => (/* binding */ NFT_AVATAR_DB_NAME),
/* harmony export */   "EA": () => (/* binding */ NFT_AVATAR_DB_NAME_STORAGE),
/* harmony export */   "Uu": () => (/* binding */ PLUGIN_ID),
/* harmony export */   "kW": () => (/* binding */ NFT_AVATAR_JSON_SERVER),
/* harmony export */   "vu": () => (/* binding */ RSS3_KEY_SNS)
/* harmony export */ });
/* unused harmony exports NFT_CONTRACT_JSON_VERIFIED_SERVER, PLUGIN_NAME, PLUGIN_DESCRIPTION */
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63151);

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

/***/ 92050:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(61751);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(40543);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...base/* facebookBase */.qv,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2486), __webpack_require__.e(8136), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(9492), __webpack_require__.e(491), __webpack_require__.e(7543), __webpack_require__.e(3553), __webpack_require__.e(5402), __webpack_require__.e(9813)]).then(__webpack_require__.bind(__webpack_require__, 89813))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...base/* facebookWorkerBase */.XO,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9492), __webpack_require__.e(4695)]).then(__webpack_require__.bind(__webpack_require__, 74695))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(74926);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...twitter_com_base/* twitterBase */.oQ,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2486), __webpack_require__.e(8136), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(6912), __webpack_require__.e(7696), __webpack_require__.e(2245), __webpack_require__.e(9492), __webpack_require__.e(491), __webpack_require__.e(7543), __webpack_require__.e(9557), __webpack_require__.e(3553), __webpack_require__.e(5402), __webpack_require__.e(7443)]).then(__webpack_require__.bind(__webpack_require__, 47443))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...twitter_com_base/* twitterWorkerBase */.x,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(9492), __webpack_require__.e(491), __webpack_require__.e(5777)]).then(__webpack_require__.bind(__webpack_require__, 85777))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var instagram_com_base = __webpack_require__(94869);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...instagram_com_base/* instagramBase */.j,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(9492), __webpack_require__.e(7543), __webpack_require__.e(5402), __webpack_require__.e(5648)]).then(__webpack_require__.bind(__webpack_require__, 74164))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...instagram_com_base/* instagramWorkerBase */.x,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9492), __webpack_require__.e(7749)]).then(__webpack_require__.bind(__webpack_require__, 27749))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(65375);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...minds_com_base/* mindsBase */.NE,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(2698), __webpack_require__.e(7871), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(2486), __webpack_require__.e(8136), __webpack_require__.e(6316), __webpack_require__.e(2908), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(9492), __webpack_require__.e(491), __webpack_require__.e(7543), __webpack_require__.e(3553), __webpack_require__.e(6618)]).then(__webpack_require__.bind(__webpack_require__, 6618))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...minds_com_base/* mindsWorkerBase */.fy,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9492), __webpack_require__.e(1089)]).then(__webpack_require__.bind(__webpack_require__, 11089))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/opensea.io/base.ts
var opensea_io_base = __webpack_require__(27870);
;// CONCATENATED MODULE: ./src/social-network-adaptor/opensea.io/index.ts


(0,social_network/* defineSocialNetworkUI */.BE)({
    ...opensea_io_base/* openseaBase */.W,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(5638), __webpack_require__.e(7871), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9759), __webpack_require__.e(3294), __webpack_require__.e(8136), __webpack_require__.e(6912), __webpack_require__.e(9492), __webpack_require__.e(7543), __webpack_require__.e(6016)]).then(__webpack_require__.bind(__webpack_require__, 66016))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network/* defineSocialNetworkWorker */.tr)({
    ...opensea_io_base/* openseaWorkerBase */.G,
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(9492), __webpack_require__.e(2798)]).then(__webpack_require__.bind(__webpack_require__, 52798))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

;// CONCATENATED MODULE: ./src/social-network-adaptor/index.ts







/***/ }),

/***/ 65375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fN": () => (/* binding */ MINDS_ID),
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

/***/ 27870:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ openseaWorkerBase),
/* harmony export */   "W": () => (/* binding */ openseaBase)
/* harmony export */ });
const OPENSEA_ID = 'opensea.io';
const origins = [
    'https://opensea.io/*'
];
const openseaBase = {
    networkIdentifier: OPENSEA_ID,
    name: 'opensea',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.host.endsWith(OPENSEA_ID);
    },
    notReadyForProduction: true
};
const openseaWorkerBase = {
    ...openseaBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 61751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BE": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.BE),
/* harmony export */   "C8": () => (/* reexport safe */ _worker__WEBPACK_IMPORTED_MODULE_3__.C8),
/* harmony export */   "Du": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.Du),
/* harmony export */   "EJ": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.globalUIState),
/* harmony export */   "LB": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.LB),
/* harmony export */   "LM": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.activatedSocialNetworkUI),
/* harmony export */   "ZZ": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_0__.ZZ),
/* harmony export */   "gE": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.loadSocialNetworkUI),
/* harmony export */   "tr": () => (/* reexport safe */ _define__WEBPACK_IMPORTED_MODULE_2__.tr)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32665);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3787);
/* harmony import */ var _define__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86911);
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44840);







/***/ }),

/***/ 32665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Du": () => (/* binding */ creator),
/* harmony export */   "MJ": () => (/* binding */ managedStateCreator),
/* harmony export */   "ZZ": () => (/* binding */ stateCreator)
/* harmony export */ });
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ decodeTextPayloadUI),
/* harmony export */   "Y": () => (/* binding */ encodeTextPayloadUI)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3787);

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

/***/ 66205:
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

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ untilElementAvailable),
/* harmony export */   "v": () => (/* binding */ nthChild)
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
function nthChild(n, ...childrenIndex) {
    let r = n;
    for (const v of childrenIndex){
        if ((0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(r)) break;
        r = r.children[v];
    }
    return r;
}


/***/ }),

/***/ 11062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$o": () => (/* binding */ isDarkTheme),
/* harmony export */   "_T": () => (/* binding */ isDark),
/* harmony export */   "aF": () => (/* binding */ getForegroundColor),
/* harmony export */   "dF": () => (/* binding */ getBackgroundColor),
/* harmony export */   "f2": () => (/* binding */ fromRGB),
/* harmony export */   "wj": () => (/* binding */ shade),
/* harmony export */   "xr": () => (/* binding */ toRGB)
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

/***/ 74724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ar": () => (/* binding */ useActivatedPluginSNSAdaptor_Web3Supported),
/* harmony export */   "D4": () => (/* binding */ startPluginSNSAdaptor),
/* harmony export */   "Pz": () => (/* binding */ useActivatedPluginsSNSAdaptor),
/* harmony export */   "tn": () => (/* binding */ useActivatedPluginSNSAdaptor)
/* harmony export */ });
/* unused harmony export useIsMinimalMode */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85848);
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

/***/ 27361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$8": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.$8),
/* harmony export */   "$d": () => (/* reexport safe */ _useWeb3UI__WEBPACK_IMPORTED_MODULE_23__.$),
/* harmony export */   "K1": () => (/* reexport safe */ _useChainDetailed__WEBPACK_IMPORTED_MODULE_9__.K),
/* harmony export */   "KQ": () => (/* reexport safe */ _useBalance__WEBPACK_IMPORTED_MODULE_3__.K),
/* harmony export */   "Os": () => (/* reexport safe */ _useWallet__WEBPACK_IMPORTED_MODULE_20__.O),
/* harmony export */   "Ov": () => (/* reexport safe */ _useBlockNumber__WEBPACK_IMPORTED_MODULE_5__.O),
/* harmony export */   "Vw": () => (/* reexport safe */ _useNetworkDescriptor__WEBPACK_IMPORTED_MODULE_14__.V),
/* harmony export */   "Yn": () => (/* reexport safe */ _useBeat__WEBPACK_IMPORTED_MODULE_4__.Y),
/* harmony export */   "Zn": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_25__.Zn),
/* harmony export */   "_o": () => (/* reexport safe */ _useProviderType__WEBPACK_IMPORTED_MODULE_13__._),
/* harmony export */   "as": () => (/* reexport safe */ _useChainIdValid__WEBPACK_IMPORTED_MODULE_8__.a),
/* harmony export */   "bL": () => (/* reexport safe */ _useNetworkType__WEBPACK_IMPORTED_MODULE_12__.b),
/* harmony export */   "dM": () => (/* reexport safe */ _useWeb3State__WEBPACK_IMPORTED_MODULE_24__.d),
/* harmony export */   "fY": () => (/* reexport safe */ _useProviderDescriptor__WEBPACK_IMPORTED_MODULE_15__.f),
/* harmony export */   "mA": () => (/* reexport safe */ _useAccount__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "px": () => (/* reexport safe */ _useNetworkDescriptors__WEBPACK_IMPORTED_MODULE_16__.p),
/* harmony export */   "rB": () => (/* reexport safe */ _useWallets__WEBPACK_IMPORTED_MODULE_22__.r),
/* harmony export */   "x5": () => (/* reexport safe */ _useChainColor__WEBPACK_IMPORTED_MODULE_7__.x),
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

/***/ 79226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Ko": () => (/* reexport */ collections/* ALL_EVENTS */.Ko),
  "iD": () => (/* reexport */ Results/* CheckedError */.iD),
  "vq": () => (/* reexport */ Routes/* DashboardRoutes */.vq),
  "ob": () => (/* reexport */ type/* ECKeyIdentifier */.ob),
  "CH": () => (/* reexport */ src_crypto/* ECKeyIdentifierFromJsonWebKey */.CH),
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
  "Y_": () => (/* reexport */ SubscriptionDebug),
  "Jf": () => (/* reexport */ SubscriptionFromValueRef),
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
  "tr": () => (/* reexport */ registerSerializableClass),
  "zD": () => (/* reexport */ Routes/* relativeRouteOf */.Y_),
  "GM": () => (/* reexport */ serializer),
  "s3": () => (/* reexport */ convert/* toBase64 */.s3),
  "wi": () => (/* reexport */ convert/* toBase64URL */.wi),
  "NC": () => (/* reexport */ convert/* toHex */.NC)
});

// UNUSED EXPORTS: ECKeyIdentifierFromCryptoKey, PayloadVersions, PersonaIdentifier, ReadonlyIdentifierMap, ValueRefFromSubscription, __DEBUG__ONLY__enableCryptoKeySerialization, addI18NBundle, andThenAsync, decompressSecp256k1Point, removed

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



const pendingRegister = new Set();
let typeson;
function setup() {
    const { default: BigNumber  } = bignumber;
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
// EXTERNAL MODULE: ../shared-base/src/Routes/index.ts
var Routes = __webpack_require__(88672);
// EXTERNAL MODULE: ../shared-base/src/Results/index.ts + 2 modules
var Results = __webpack_require__(66960);
// EXTERNAL MODULE: ../shared-base/src/convert/index.ts
var convert = __webpack_require__(27013);
// EXTERNAL MODULE: ../shared-base/src/NextID/type.ts
var NextID_type = __webpack_require__(9797);
;// CONCATENATED MODULE: ../shared-base/src/index.ts



















/***/ }),

/***/ 37024:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(82798);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
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

/***/ 89079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ useObservableValues)
/* harmony export */ });
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
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

/***/ 50994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ useValueRef)
/* harmony export */ });
/* unused harmony export useValueRefDelayed */
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);


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

/***/ 92824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ CSSVariableInjector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99537);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26645);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5400);




function CSSVariableInjector(props) {
    const { current: useConsistentTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(props.useTheme || _mui_material__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
    const colorScheme = useConsistentTheme().palette.mode;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        styles: (0,_constants__WEBPACK_IMPORTED_MODULE_2__/* .CSSVariableInjectorCSS */ .PW)(colorScheme)
    }));
}


/***/ }),

/***/ 45739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ useDialogStackActor),
/* harmony export */   "y": () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);


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

/***/ 16320:
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

/***/ 94887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createReactRootShadowedPartial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82798);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63423);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67296);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51079);
/* harmony import */ var _Contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87586);





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
            var ref, ref1;
            if ((ref = options.signal) === null || ref === void 0 ? void 0 : ref.aborted) return;
            if (((ref1 = shadowRoot.host) === null || ref1 === void 0 ? void 0 : ref1.parentNode) === null) return void setTimeout(tryRender, 20);
            root = mount(jsx, shadowRoot, options, hostConfig);
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
function mount(jsx1, shadow, options, { preventEventPropagationList , wrapJSX  }) {
    var ref;
    const tag = options.tag || 'main';
    const key = options.key || 'main';
    if (shadow.querySelector(`${tag}.${key}`)) {
        console.error('Tried to create root in', shadow, 'with key', key, ' which is already used. Skip rendering.');
        return {
            destory: ()=>{},
            render: ()=>{}
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
    (ref = options.signal) === null || ref === void 0 ? void 0 : ref.addEventListener('abort', ()=>controller.abort()
    , {
        signal
    });
    return {
        destory: ()=>controller.abort()
        ,
        render: (jsx)=>{
            root.render(getJSX(jsx));
        }
    };
    function getJSX(jsx) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Contexts__WEBPACK_IMPORTED_MODULE_4__/* .PreventEventPropagationListContext.Provider */ .gt.Provider, {
                value: preventEventPropagationList,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_3__/* .ShadowRootStyleProvider */ .q, {
                    shadow: shadow,
                    children: wrapJSX ? wrapJSX(jsx) : jsx
                })
            })
        }));
    }
}


/***/ }),

/***/ 5400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ci": () => (/* binding */ LightColor),
/* harmony export */   "Dc": () => (/* binding */ applyMaskColorVars),
/* harmony export */   "I3": () => (/* binding */ DarkColor),
/* harmony export */   "PW": () => (/* binding */ CSSVariableInjectorCSS),
/* harmony export */   "ZN": () => (/* binding */ MaskColorVar),
/* harmony export */   "nb": () => (/* binding */ getMaskColor)
/* harmony export */ });
/* unused harmony export useMaskColor */
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
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#000000'
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
    warningBackground: 'rgba(255, 185, 21, 0.1)',
    cyberconnectPrimary: '#ffffff'
};
function getMaskColor(theme) {
    if (theme.palette.mode === 'dark') return DarkColor;
    return LightColor;
}
function useMaskColor() {
    return getMaskColor(useTheme());
}
function CSSVariableInjectorCSS(scheme) {
    const ns = scheme === 'light' ? LightColor : DarkColor;
    const result = {};
    for(const key in ns){
        // --mask-name: val;
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key)}`] = ns[key];
        result[`--mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key)}-fragment`] = getRGBFragment(ns, key);
    }
    return {
        ':root, :host': result
    };
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
            rule += `    --mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key)}: ${ns[key]};\n`;
            rule += `    --mask-${(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key)}-fragment: ${getRGBFragment(ns, key)};\n`;
        }
        node.textContent = rule + '}';
    } else {
        for(const key in ns){
            node.style.setProperty('--mask-' + (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key), ns[key]);
            node.style.setProperty('--mask-' + (0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key) + '-fragment', getRGBFragment(ns, key));
        }
    }
}
// Fragment are in the form of "1, 2, 3"
// which is used for rgba(var(--x), alpha)
function getRGBFragment(x, key) {
    const { r , g , b  } = tinycolor2__WEBPACK_IMPORTED_MODULE_0___default()(x[key]).toRgb();
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

/***/ 54492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "oD": () => (/* binding */ CoinGecko),
  "bC": () => (/* binding */ Explorer),
  "cl": () => (/* binding */ KeyValue),
  "jo": () => (/* binding */ src_NFTScan),
  "x4": () => (/* reexport */ types/* NonFungibleTokenAPI */.x),
  "Nn": () => (/* binding */ OpenSea),
  "S5": () => (/* binding */ RSS3),
  "e8": () => (/* binding */ Rarible),
  "no": () => (/* binding */ TokenList),
  "GI": () => (/* binding */ TokenPrice),
  "tL": () => (/* binding */ Twitter),
  "ry": () => (/* reexport */ NextID/* bindProof */.ry),
  "CV": () => (/* reexport */ NextID/* createPersonaPayload */.CV),
  "bb": () => (/* reexport */ utils/* getOrderUnitPrice */.bb),
  "_9": () => (/* reexport */ NextID/* queryIsBound */._9),
  "t9": () => (/* reexport */ useERC721TokenDetailedOwnerList)
});

// UNUSED EXPORTS: ERC721_ENUMERABLE_INTERFACE_ID, RSS3BaseAPI, getAssetListFromDebank, getNFTScanNFTList, getNFTScanNFTs, getOpenSeaCollectionList, getOpenSeaNFTList, getOrderUSDPrice, getRaribleNFTList, queryExistedBinding, queryExistedBindingByPersona, queryExistedBindingByPlatform, toImage

// EXTERNAL MODULE: ../web3-providers/src/coingecko/index.ts + 1 modules
var coingecko = __webpack_require__(28323);
// EXTERNAL MODULE: ../web3-providers/src/opensea/index.ts + 1 modules
var opensea = __webpack_require__(72481);
// EXTERNAL MODULE: ../web3-providers/src/rarible/index.ts + 2 modules
var rarible = __webpack_require__(76275);
// EXTERNAL MODULE: ../web3-providers/src/NFTScan/index.ts + 1 modules
var NFTScan = __webpack_require__(73868);
// EXTERNAL MODULE: ../web3-providers/src/explorer/index.ts + 1 modules
var explorer = __webpack_require__(21259);
// EXTERNAL MODULE: ../web3-providers/src/rss3/index.ts + 1 modules
var rss3 = __webpack_require__(76249);
// EXTERNAL MODULE: ../web3-providers/src/kv/index.ts + 1 modules
var kv = __webpack_require__(25203);
// EXTERNAL MODULE: ../web3-providers/src/twitter/index.ts
var twitter = __webpack_require__(59427);
// EXTERNAL MODULE: ../web3-providers/src/token-list/index.ts
var token_list = __webpack_require__(63293);
// EXTERNAL MODULE: ../web3-providers/src/token-price/index.ts
var token_price = __webpack_require__(50184);
// EXTERNAL MODULE: ../web3-providers/src/types.ts
var types = __webpack_require__(41876);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.3.2_bc22c48adf1a4e34a005159413cd72b5/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(28577);
// EXTERNAL MODULE: ../../node_modules/.pnpm/wallet.ts@1.0.1/node_modules/wallet.ts/dist/index.js
var dist = __webpack_require__(99674);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.2/node_modules/react/index.js
var react = __webpack_require__(63423);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/uniqBy.js
var uniqBy = __webpack_require__(18443);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useChainId.ts
var useChainId = __webpack_require__(63541);
// EXTERNAL MODULE: ../web3-shared/evm/contracts/useERC721TokenContract.ts
var useERC721TokenContract = __webpack_require__(21532);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var evm_types = __webpack_require__(95130);
// EXTERNAL MODULE: ../web3-shared/evm/utils/call.ts
var call = __webpack_require__(78842);
// EXTERNAL MODULE: ../web3-shared/evm/hooks/useERC721TokenDetailed.ts
var useERC721TokenDetailed = __webpack_require__(29129);
;// CONCATENATED MODULE: ../web3-providers/src/hooks/useERC721TokenDetailedOwnerList.ts






const ERC721_ENUMERABLE_INTERFACE_ID = '0x780e9d63';
function useERC721TokenDetailedOwnerList(contractDetailed, owner) {
    const chainId = (0,useChainId/* useChainId */.xx)();
    var ref;
    const erc721TokenContract = (0,useERC721TokenContract/* useERC721TokenContract */.n)((ref = contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) !== null && ref !== void 0 ? ref : '');
    const allListRef = (0,react.useRef)([]);
    const [refreshing, setRefreshing] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        setRefreshing(true);
        clearTokenDetailedOwnerList();
    }, [
        owner,
        contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address
    ]);
    const asyncRetry = (0,useAsyncRetry/* default */.Z)(async ()=>{
        if (!erc721TokenContract || !(contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) || !dist.EthereumAddress.isValid(contractDetailed === null || contractDetailed === void 0 ? void 0 : contractDetailed.address) || !owner) {
            setRefreshing(false);
            return;
        }
        const listsFromNFTScan = chainId === evm_types/* ChainId.Mainnet */.a_.Mainnet ? await getERC721TokenDetailedOwnerListFromNFTScan(contractDetailed, owner) : [];
        const lists = listsFromNFTScan.length > 0 ? listsFromNFTScan : await getERC721TokenDetailedOwnerListFromChain(erc721TokenContract, contractDetailed, owner);
        allListRef.current = (0,uniqBy/* default */.Z)([
            ...allListRef.current,
            ...lists
        ], 'tokenId');
        setRefreshing(false);
    }, [
        contractDetailed,
        owner,
        chainId
    ]);
    const clearTokenDetailedOwnerList = ()=>allListRef.current = []
    ;
    return {
        asyncRetry,
        tokenDetailedOwnerList: allListRef.current,
        clearTokenDetailedOwnerList,
        refreshing
    };
}
async function getERC721TokenDetailedOwnerListFromChain(erc721TokenContract, contractDetailed, owner) {
    const isEnumerable = await (0,call/* safeNonPayableTransactionCall */.Y)(erc721TokenContract.methods.supportsInterface(ERC721_ENUMERABLE_INTERFACE_ID));
    const balance = await (0,call/* safeNonPayableTransactionCall */.Y)(erc721TokenContract.methods.balanceOf(owner));
    if (!isEnumerable || !balance) return [];
    const allRequest = Array.from({
        length: Number.parseInt(balance, 10)
    }, async (_v, i)=>{
        const tokenId = await (0,call/* safeNonPayableTransactionCall */.Y)(erc721TokenContract.methods.tokenOfOwnerByIndex(owner, i));
        if (!tokenId) return;
        return (0,useERC721TokenDetailed/* getERC721TokenDetailedFromChain */.qY)(contractDetailed, erc721TokenContract, tokenId, owner, false);
    });
    return (await Promise.allSettled(allRequest)).map((x)=>x.status === 'fulfilled' ? x.value : undefined
    ).filter((value)=>value
    );
}
async function getERC721TokenDetailedOwnerListFromNFTScan(contractDetailed, owner) {
    let allTokenList = [];
    let _hasNextPage = true;
    let page = 0;
    while(_hasNextPage){
        const { data , hasNextPage  } = await src_NFTScan.getTokenDetailedOwnerList(owner, contractDetailed, 100, page);
        page += 1;
        _hasNextPage = hasNextPage;
        allTokenList = allTokenList.concat(data);
    }
    return (0,uniqBy/* default */.Z)(allTokenList, 'tokenId');
}

;// CONCATENATED MODULE: ../web3-providers/src/hooks/index.ts


// EXTERNAL MODULE: ../web3-providers/src/opensea/utils.ts
var utils = __webpack_require__(72757);
// EXTERNAL MODULE: ../web3-providers/src/NextID/index.ts
var NextID = __webpack_require__(45596);
// EXTERNAL MODULE: ../web3-providers/src/debank/index.ts + 1 modules
var debank = __webpack_require__(99620);
;// CONCATENATED MODULE: ../web3-providers/src/index.ts














const OpenSea = new opensea/* OpenSeaAPI */.rQ();
const Rarible = new rarible/* RaribleAPI */.I();
const src_NFTScan = new NFTScan/* NFTScanAPI */.Ur();
const CoinGecko = new coingecko/* CoinGeckoAPI */.J();
const Explorer = new explorer/* NativeExplorerAPI */.b();
const RSS3 = new rss3/* RSS3API */.M();
const KeyValue = new kv/* KeyValueAPI */.Z();
const Twitter = new twitter/* TwitterAPI */.I();
const TokenList = new token_list/* TokenListAPI */.U();
const TokenPrice = new token_price/* TokenPriceAPI */.J();
// Method for provider proxy






/***/ }),

/***/ 72757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": () => (/* binding */ resolveLinkOnExplorer),
/* harmony export */   "Hw": () => (/* binding */ resolveProviderName),
/* harmony export */   "IH": () => (/* binding */ resolveProviderHomeLink),
/* harmony export */   "OC": () => (/* binding */ resolveNetworkAddressPrefix),
/* harmony export */   "Po": () => (/* binding */ resolveChainName),
/* harmony export */   "QN": () => (/* binding */ resolveOpenSeaLink),
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
/* unused harmony exports resolveCollectibleProviderLink, resolveCollectibleAssetLink */
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
    return urlcat__WEBPACK_IMPORTED_MODULE_0___default()('https://opensea.io/assets/:address/:tokenId', {
        address,
        tokenId
    });
}


/***/ }),

/***/ 9507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React vundefined
 * use-subscription.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(52458),g=__webpack_require__(63423);
exports.useSubscription=function(a){var c=a.getCurrentValue,d=a.subscribe,b=g.useState(function(){return{getCurrentValue:c,subscribe:d,value:c()}});a=b[0];var f=b[1];b=a.value;if(a.getCurrentValue!==c||a.subscribe!==d)b=c(),f({getCurrentValue:c,subscribe:d,value:b});g.useDebugValue(b);g.useEffect(function(){function b(){if(!a){var b=c();f(function(a){return a.getCurrentValue!==c||a.subscribe!==d||a.value===b?a:e({},a,{value:b})})}}var a=!1,h=d(b);b();return function(){a=!0;h()}},[c,d]);return b};


/***/ }),

/***/ 66559:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "VJ": () => (/* reexport */ abortSignalTimeout/* abortSignalTimeout */.V),
  "Cq": () => (/* reexport */ nonNull/* assertNonNull */.C),
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

// UNUSED EXPORTS: detectAudioSupport, detectImageSupport, detectVideoSupport, getDimensionAsJPEG, getDimensionAsPNG, isArrayBufferEqual, isNonNull

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/ecmascript/index.js + 3 modules
var ecmascript = __webpack_require__(51143);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/media/index.js + 3 modules
var media = __webpack_require__(28662);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/typescript/control-flow.js
var control_flow = __webpack_require__(70452);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/typescript/enum.js
var typescript_enum = __webpack_require__(77380);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/typescript/nonNull.js
var nonNull = __webpack_require__(415);
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

/***/ 415:
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

/***/ })

}]);