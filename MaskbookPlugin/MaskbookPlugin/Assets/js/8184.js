"use strict";
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/8184.js
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8184],{
=======
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[102],{
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/102.js

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

/***/ 98723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MD": () => (/* binding */ C),
/* harmony export */   "sc": () => (/* binding */ L)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enablePatches, finishDraft, freeze, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function m(n,t){rn[n]||(rn[n]=t)}function _(){return true||0,U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1}else e=F(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return false&&0,en.get(t,n)},set:function(t){var r=this[Q]; false&&0,en.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r)}}}function o(n){for(var t=n.t,r=n.k,e=nn(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==nn(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.O&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tn(t);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,k(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(r))}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return u(n,L)&&(t[L]=n[L]),t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t===H?void 0:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.O&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),k(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),k(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),k(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),k(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{N:function(n,t){return new f(n,t)},T:function(n,t){return new c(n,t)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;E(n),k(n)}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),on.deleteProperty=function(t,r){return false&&0,en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return false&&0,en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return(r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t)},this.produceWithPatches=function(n,t){return"function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t})),r,i];var r,i},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; false&&(0);var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (fn)));
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 34539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(24827);
} else {}


/***/ }),

/***/ 33450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);



/***/ }),

/***/ 25830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Services, ServicesWithProgress */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62942);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80050);
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
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/8184.js
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(3693), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(4039), __webpack_require__.e(8405), __webpack_require__.e(1945)]).then(__webpack_require__.bind(__webpack_require__, 47710))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(3850), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(4039), __webpack_require__.e(8405), __webpack_require__.e(9257)]).then(__webpack_require__.bind(__webpack_require__, 39804))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(4039), __webpack_require__.e(8405), __webpack_require__.e(6180)]).then(__webpack_require__.bind(__webpack_require__, 26180))
=======
    Crypto: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(3693), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1981), __webpack_require__.e(6076), __webpack_require__.e(8537)]).then(__webpack_require__.bind(__webpack_require__, 6237))
    , 'Crypto'),
    Identity: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(3850), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1981), __webpack_require__.e(6076), __webpack_require__.e(8733)]).then(__webpack_require__.bind(__webpack_require__, 10688))
    , 'Identity'),
    Welcome: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1981), __webpack_require__.e(6076), __webpack_require__.e(4769)]).then(__webpack_require__.bind(__webpack_require__, 94769))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/102.js
    , 'Welcome'),
    Steganography: add(()=>Promise.all(/* import() */[__webpack_require__.e(2908), __webpack_require__.e(1404)]).then(__webpack_require__.bind(__webpack_require__, 51404))
    , 'Steganography'),
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/8184.js
    Helper: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(3679)]).then(__webpack_require__.bind(__webpack_require__, 43679))
    , 'Helper'),
    Provider: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(4039), __webpack_require__.e(8405), __webpack_require__.e(7479)]).then(__webpack_require__.bind(__webpack_require__, 47479))
    , 'Provider'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(4039)]).then(__webpack_require__.bind(__webpack_require__, 22584))
    , 'Ethereum'),
    SocialNetwork: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(405), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(23), __webpack_require__.e(1112)]).then(__webpack_require__.bind(__webpack_require__, 71112))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(3850), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(4039), __webpack_require__.e(8405), __webpack_require__.e(9257)]).then(__webpack_require__.bind(__webpack_require__, 99155))
=======
    Helper: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1951)]).then(__webpack_require__.bind(__webpack_require__, 81951))
    , 'Helper'),
    Provider: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1981), __webpack_require__.e(6076), __webpack_require__.e(8989)]).then(__webpack_require__.bind(__webpack_require__, 88989))
    , 'Provider'),
    Ethereum: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1981)]).then(__webpack_require__.bind(__webpack_require__, 51968))
    , 'Ethereum'),
    SocialNetwork: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(405), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1330), __webpack_require__.e(2269)]).then(__webpack_require__.bind(__webpack_require__, 82269))
    , 'SocialNetwork'),
    Settings: add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(8019), __webpack_require__.e(6160), __webpack_require__.e(3981), __webpack_require__.e(2088), __webpack_require__.e(6067), __webpack_require__.e(79), __webpack_require__.e(4029), __webpack_require__.e(8056), __webpack_require__.e(6739), __webpack_require__.e(6833), __webpack_require__.e(7170), __webpack_require__.e(772), __webpack_require__.e(4227), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2943), __webpack_require__.e(6316), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(3850), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(1981), __webpack_require__.e(6076), __webpack_require__.e(8733)]).then(__webpack_require__.bind(__webpack_require__, 21106))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/102.js
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 3813).then(__webpack_require__.bind(__webpack_require__, 33813))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/8184.js
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6739), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(8405), __webpack_require__.e(1407)]).then(__webpack_require__.bind(__webpack_require__, 61483))
=======
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6739), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(6076), __webpack_require__.e(256)]).then(__webpack_require__.bind(__webpack_require__, 50256))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/102.js
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
    const load = ()=>(0,_masknet_shared__WEBPACK_IMPORTED_MODULE_1__.getLocalImplementation)(`Services.${key}`, impl, channel)
    ;
    const localImplementation = load();
    isBackground && /* unsupported import.meta.webpackHot */ undefined && document.addEventListener(SERVICE_HMR_EVENT, load);
    const service = RPC(localImplementation, {
        key,
        serializer: _masknet_shared__WEBPACK_IMPORTED_MODULE_1__.serializer,
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

/***/ 71299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vv": () => (/* binding */ debugModeSetting),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "G": () => (/* binding */ currentSelectedIdentity),
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "uZ": () => (/* binding */ currentPluginEnabledStatus),
/* harmony export */   "pL": () => (/* binding */ currentImportingBackup),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier)
/* harmony export */ });
/* unused harmony exports allPostReplacementSettings, currentImagePayloadStatus, newDashboardConnection */
/* harmony import */ var _createSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45154);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93002);
/* harmony import */ var _utils_side_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36712);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47536);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53688);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(95142);






/**
 * Does the debug mode on
 */ const debugModeSetting = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('debugMode', false, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_enable_debug_desc')
});
/**
 * Whether if create substitute post for all posts
 */ const allPostReplacementSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('post replacement all', false, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_post_replacement')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_post_replacement_desc')
});
//#region appearance
const appearanceSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('appearance', _masknet_theme__WEBPACK_IMPORTED_MODULE_4__/* .Appearance.default */ .um.default, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_appearance')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_appearance_secondary')
});
//#endregion
//#region language
const languageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('language', _masknet_public_api__WEBPACK_IMPORTED_MODULE_5__/* .LanguageOptions.__auto__ */ .P7.__auto__, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_language')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_language_secondary')
});
//#endregion
//#region network setting
/**
 * Expected Usage：export const currentImagePayloadStatus = createNetworkSettings('currentImagePayloadStatus')
 *
 * Work around the issue:
 *      https://github.com/microsoft/TypeScript/issues/42873
 *      https://github.com/microsoft/TypeScript/issues/30858
 *
 * References:
 *      PluginGitcoinMessages: packages/maskbook/src/plugins/Gitcoin/messages.ts
 *      PluginTraderMessages: packages/maskbook/src/plugins/Trader/messages.ts
 *      PluginTransakMessages: packages/maskbook/src/plugins/Transak/messages.ts
 */ const currentImagePayloadStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentImagePayloadStatus', '');
const currentSelectedIdentity = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentSelectedIdentity', '');
const currentSetupGuideStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('currentSetupGuideStatus', '');
// This is a misuse of concept "NetworkSettings" as "namespaced settings"
// The refactor is tracked in https://github.com/DimensionDev/Maskbook/issues/1884
/**
 * ! DO NOT use this directly to query the plugin status !
 *
 * use `useActivatedPluginsSNSAdaptor().find((x) => x.ID === PLUGIN_ID)` or
 * `useActivatedPluginsDashboard().find((x) => x.ID === PLUGIN_ID)` instead
 */ const currentPluginEnabledStatus = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createNetworkSettings */ .Lk)('pluginsEnabled', true);
const currentImportingBackup = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('importingBackup', false, {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
//#endregion
const launchPageSettings = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('launchPage', _types__WEBPACK_IMPORTED_MODULE_3__/* .LaunchPage.dashboard */ .z.dashboard, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_launch_page')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_1__/* .i18n.t */ .a.t('settings_launch_page_secondary')
});
const newDashboardConnection = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('beta-dashboard', false, {
    primary: ()=>'Experimental: Allow isolated dashboard to connect'
    ,
    secondary: ()=>"WARNING: DON'T OPEN THIS UNLESS YOU KNOW WHAT YOU ARE DOING."
});
const currentPersonaIdentifier = (0,_createSettings__WEBPACK_IMPORTED_MODULE_0__/* .createGlobalSettings */ .TI)('currentPersonaIdentifier', '', {
    primary: ()=>'DO NOT DISPLAY IT IN UI'
});
_utils_side_effects__WEBPACK_IMPORTED_MODULE_2__/* .sideEffect.then */ .jw.then(()=>{
    // reset it to false after Mask startup
    currentImportingBackup.value = false;
    // Migrate language settings
    const lng = languageSettings.value;
    if (lng === 'en') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_5__/* .LanguageOptions.enUS */ .P7.enUS;
    else if (lng === 'zh') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_5__/* .LanguageOptions.zhCN */ .P7.zhCN;
    else if (lng === 'ja') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_5__/* .LanguageOptions.jaJP */ .P7.jaJP;
    else if (lng === 'ko') languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_5__/* .LanguageOptions.koKR */ .P7.koKR;
    else languageSettings.value = _masknet_public_api__WEBPACK_IMPORTED_MODULE_5__/* .LanguageOptions.__auto__ */ .P7.__auto__;
});


/***/ }),

/***/ 96578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vs": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_4__.timeout),
/* harmony export */   "gw": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_4__.delay),
/* harmony export */   "GR": () => (/* binding */ downloadUrl),
/* harmony export */   "iu": () => (/* binding */ addUint8Array),
/* harmony export */   "Lk": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_4__.parseURL),
/* harmony export */   "PQ": () => (/* binding */ defer),
/* harmony export */   "Cw": () => (/* binding */ buf2hex),
/* harmony export */   "Yu": () => (/* binding */ hex2buf),
/* harmony export */   "hu": () => (/* binding */ assert),
/* harmony export */   "Se": () => (/* binding */ checkInputLengthExceed)
/* harmony export */ });
/* unused harmony exports pasteImageToActiveElements, selectElementContents, nopWithUnmount, regexMatch, regexMatchAll, batchReplace, nonNullable */
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/8184.js
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12139);
=======
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92697);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/102.js
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25830);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11494);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80050);
/**
 * Prefer function declaration than const f = () => ...
 * in this file please.
 */ 





/**
 * Download given url return as Blob
 */ async function downloadUrl(url) {
    try {
        if (url.startsWith(browser.runtime.getURL(''))) {
            return _extension_service__WEBPACK_IMPORTED_MODULE_2__/* .default.Helper.fetch */ .ZP.Helper.fetch(url);
        }
    } catch  {
    }
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
function nopWithUnmount(..._args) {
    return noop;
}
function regexMatch(str, regexp, index = 1) {
    const r = str.match(regexp);
    if (isNull(r)) return null;
    if (index === null) {
        return r;
    }
    return r[index];
}
/**
 * enables you to use match group with flag g
 *
 * @return
 *  if no matches, return null;
 *  return target match group in each matches;
 *
 * @example
 *  regexMatchAll(">target<whatever>target2<", />(.+)</)
 *  >>> ["target", "target2"]
 */ function regexMatchAll(str, regexp, index = 1) {
    const gPos = regexp.flags.indexOf('g');
    const withoutG = gPos >= 0 ? `${regexp.flags.slice(0, gPos)}${regexp.flags.slice(gPos + 1)}` : regexp.flags;
    const o = new RegExp(regexp.source, withoutG);
    const g = new RegExp(regexp.source, `${withoutG}g`);
    const r = str.match(g);
    if (isNull(r)) {
        return null;
    }
    const sto = [];
    for (const v of r){
        const retV = v.match(o);
        if (isNull(retV)) {
            continue;
        }
        sto.push(retV[index]);
    }
    if (sto.length === 0) {
        return null;
    }
    return sto;
}
/**
 * batch run string.replace
 * @param source    the source string to replace
 * @param group     Array of find-replace pair,
 *                  each pair same as the param of
 *                  string.replace
 * @return          result string
 */ function batchReplace(source, group) {
    let storage = source;
    for (const v of group){
        storage = storage.replace(v[0], v[1]);
    }
    return storage;
}
function addUint8Array(a, b) {
    const x = new Uint8Array(a);
    const y = new Uint8Array(b);
    const c = new Uint8Array(x.length + y.length);
    c.set(x);
    c.set(y, x.length);
    return c;
}

/**
 * !!!! Please use the Promise constructor if possible
 * If you don't understand https://groups.google.com/forum/#!topic/bluebird-js/mUiX2-vXW2s
 */ function defer() {
    let a, b;
    const p = new Promise((x, y)=>{
        a = x;
        b = y;
    });
    return [
        p,
        a,
        b
    ];
}
function buf2hex(buffer) {
    return Array.prototype.map.call(new Uint8Array(buffer), (x)=>('00' + x.toString(16)).slice(-2)
    ).join('');
}
function hex2buf(hex) {
    let hex_ = hex;
    hex_ = hex.replace(/^0x/, '') // strip 0x
    ;
    if (hex_.length % 2) hex_ = `0${hex_}` // pad even zero
    ;
    const buf = [];
    for(let i = 0; i < hex_.length; i += 2)buf.push(Number.parseInt(hex_.substr(i, 2), 16));
    return new Uint8Array(buf);
}
function assert(x, ...args) {
    console.assert(x, ...args);
    if (!x) throw new Error('Assert failed!');
}
function checkInputLengthExceed(name) {
    return name.length >= _constants__WEBPACK_IMPORTED_MODULE_0__/* .WALLET_OR_PERSONA_NAME_MAX_LEN */ .Y;
}
function nonNullable(x) {
    return x !== undefined && x !== null;
}


/***/ }),

/***/ 13284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H9": () => (/* binding */ usePostInfoDetails)
/* harmony export */ });
/* unused harmony exports PostInfoProvider, usePostInfo, usePostInfoSharedPublic */
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var use_subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88085);




const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const PostInfoProvider = /*#__PURE__*/ (/* unused pure expression or super */ null && (memo((props)=>{
    return(/*#__PURE__*/ createElement(Context.Provider, {
        value: props.post,
        children: props.children
    }));
})));
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

/***/ 66751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mv": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   "CB": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.C),
/* harmony export */   "eE": () => (/* reexport safe */ _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   "D4": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.D4),
/* harmony export */   "Pz": () => (/* reexport safe */ _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__.Pz),
/* harmony export */   "EK": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.EK),
/* harmony export */   "I4": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.I4),
/* harmony export */   "V8": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.V8),
/* harmony export */   "Sc": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.Sc),
/* harmony export */   "H9": () => (/* reexport safe */ _PostContext__WEBPACK_IMPORTED_MODULE_5__.H9),
/* harmony export */   "Hq": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.Hq),
/* harmony export */   "x4": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.x4),
/* harmony export */   "bD": () => (/* reexport safe */ ts_results__WEBPACK_IMPORTED_MODULE_6__.bD),
/* harmony export */   "fo": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fo),
/* harmony export */   "fg": () => (/* reexport safe */ _manager_store__WEBPACK_IMPORTED_MODULE_7__.fg),
/* harmony export */   "Je": () => (/* reexport safe */ _manager_worker__WEBPACK_IMPORTED_MODULE_3__.J)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48357);
/* harmony import */ var _manager_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96458);
/* harmony import */ var _manager_sns_adaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88472);
/* harmony import */ var _manager_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14666);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16451);
/* harmony import */ var _PostContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13284);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64614);
/* harmony import */ var _manager_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67380);











/***/ }),

/***/ 67380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i1": () => (/* binding */ registeredPlugins),
/* harmony export */   "fg": () => (/* binding */ registeredPluginIDs),
/* harmony export */   "_W": () => (/* binding */ getPluginDefine),
/* harmony export */   "fo": () => (/* binding */ registerPlugin)
/* harmony export */ });
/* unused harmony export useRegisteredPlugins */
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

/***/ 16451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "EK": () => (/* reexport */ createInjectHooksRenderer),
  "I4": () => (/* reexport */ message/* createPluginMessage */.I),
  "V8": () => (/* reexport */ rpc/* createPluginRPC */.V),
  "Sc": () => (/* reexport */ rpc/* createPluginRPCGenerator */.S)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(73102);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-alpha-aecb3b6d1/node_modules/react/index.js
var react = __webpack_require__(34539);
// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/createInjectHooksRenderer.tsx



function createInjectHooksRenderer(usePlugins, pickInjector) {
    const picker = (plugin)=>({
            key: plugin.ID,
            name: plugin.name,
            ui: pickInjector(plugin)
        })
    ;
    function InjectHooksRenderer(props) {
        const all = usePlugins().map(picker).filter((x)=>x.ui
        ).map(({ key , name , ui  })=>// TODO: i18n
            /*#__PURE__*/ (0,jsx_runtime.jsx)(src.ErrorBoundary, {
                subject: `Plugin ` + name.fallback,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Main, {
                    UI: ui,
                    data: props
                })
            }, key)
        );
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: all
        }));
    }
    return function(props) {
        return(/*#__PURE__*/ (0,jsx_runtime.jsx)(src.ErrorBoundary, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(InjectHooksRenderer, {
                ...props
            })
        }));
    };
}
function Main(props) {
    const { data , UI  } = props;
    if (isRawInjectHook(UI)) return(/*#__PURE__*/ (0,jsx_runtime.jsx)(RawHookRender, {
        UI: UI,
        data: data
    }));
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)(UI, {
        ...data
    }));
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
    (0,react.useEffect)(()=>{
        return void (f === null || f === void 0 ? void 0 : f(data));
    }, [
        f,
        data
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: (r)=>ref === r || setRef(r)
    }));
}
function isRawInjectHook(x) {
    return 'type' in x && x.type === 'raw';
}

// EXTERNAL MODULE: ../plugin-infra/src/utils/message.ts
var message = __webpack_require__(29685);
// EXTERNAL MODULE: ../plugin-infra/src/utils/rpc.ts
var rpc = __webpack_require__(79268);
;// CONCATENATED MODULE: ../plugin-infra/src/utils/index.ts





/***/ }),

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ue": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "R$": () => (/* reexport safe */ _messages__WEBPACK_IMPORTED_MODULE_1__.R),
/* harmony export */   "UB": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.UB),
/* harmony export */   "Ag": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.Ag),
/* harmony export */   "J3": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.J3),
/* harmony export */   "js": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.js)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89198);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32809);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74890);
// Do not export JSX from this file. It might break some runtime that does not have DOM.





/***/ }),

/***/ 50061:
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

/***/ 61289:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A9": () => (/* reexport safe */ _fallbackRule__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "N_": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.N),
/* harmony export */   "C9": () => (/* reexport safe */ _register_ns__WEBPACK_IMPORTED_MODULE_1__.C)
/* harmony export */ });
/* harmony import */ var _fallbackRule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50061);
/* harmony import */ var _register_ns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7636);




/***/ }),

/***/ 30796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lk": () => (/* reexport safe */ _parseURL__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "gw": () => (/* reexport safe */ _delay__WEBPACK_IMPORTED_MODULE_1__.g),
/* harmony export */   "Vs": () => (/* reexport safe */ _timeout__WEBPACK_IMPORTED_MODULE_2__.V),
/* harmony export */   "Y0": () => (/* reexport safe */ _enum__WEBPACK_IMPORTED_MODULE_3__.Y),
/* harmony export */   "s_": () => (/* reexport safe */ _pollingTask__WEBPACK_IMPORTED_MODULE_4__.s),
/* harmony export */   "Hd": () => (/* reexport safe */ _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__.H)
/* harmony export */ });
/* harmony import */ var _parseURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53387);
/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15330);
/* harmony import */ var _timeout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8445);
/* harmony import */ var _enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(75599);
/* harmony import */ var _pollingTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61592);
/* harmony import */ var _sessionStorageCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27931);








/***/ }),

/***/ 79252:
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

/***/ 72706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
/* harmony import */ var _Dialogs_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94480);
/* harmony import */ var _ButtonGroupTab_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22401);
/* harmony import */ var _Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39247);
/* harmony import */ var _SearchableList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49116);
/* harmony import */ var _TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76728);
/* harmony import */ var _CountdownButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70742);
/* harmony import */ var _SendingCodeField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42869);
/* harmony import */ var _PhoneNumberField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89577);










/***/ }),

/***/ 29168:
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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86753);



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

/***/ 44849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ createReactRootShadowedPartial)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24204);
/* harmony import */ var _ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89787);



/**
 * @returns
 * A function that render the JSX in the ShadowRoot with emotion support.
 *
 * This function should be only call once for each config.key.
 */ function createReactRootShadowedPartial(_config) {
    return function createReactRootShadowed(shadowRoot, config = {
    }) {
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
function mount(jsx, shadow, instanceConfig, globalConfig) {
    var ref;
    const tag = instanceConfig.tag || 'main';
    const key = instanceConfig.key || 'main';
    if (shadow.querySelector(`${tag}.${key}`)) {
        console.error('Tried to create root in', shadow, 'with key', key, ' which is already used. Skip rendering.');
        return {
            destory: ()=>{
            },
            render: ()=>{
            }
        };
    }
    const wrap = globalConfig.wrapJSX;
    jsx = getJSX(jsx);
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
    root.render(jsx);
    undoActions.push(()=>root.unmount()
    );
    undoActions.push(()=>container.remove()
    );
    function undo() {
        for (const f of undoActions){
            try {
                f();
            } catch  {
            }
        }
        undoActions.length = 0;
    }
    (ref = instanceConfig.signal) === null || ref === void 0 ? void 0 : ref.addEventListener('abort', undo);
    return {
        destory: undo,
        render: (jsx1)=>{
            root.render(getJSX(jsx1));
        }
    };
    function getJSX(jsx1) {
        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ShadowRootStyleProvider__WEBPACK_IMPORTED_MODULE_2__/* .ShadowRootStyleProvider */ .q, {
            shadow: shadow,
            onHeadCreate: globalConfig.onHeadCreate,
            children: wrap ? wrap(jsx1) : jsx1
        }));
    }
}


/***/ }),

/***/ 53688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ MaskLightTheme),
/* harmony export */   "Hr": () => (/* binding */ MaskDarkTheme),
/* harmony export */   "ZL": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "E1": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.E1),
/* harmony export */   "qA": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.qA),
/* harmony export */   "YO": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.YO),
/* harmony export */   "Df": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.Df),
/* harmony export */   "FU": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.FU),
/* harmony export */   "g8": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.g8),
/* harmony export */   "xV": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.xV),
/* harmony export */   "oe": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.oe),
/* harmony export */   "wT": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.wT),
/* harmony export */   "N8": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.N8),
/* harmony export */   "Ds": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.Ds),
/* harmony export */   "YE": () => (/* reexport safe */ _hooks_index__WEBPACK_IMPORTED_MODULE_7__.Y),
/* harmony export */   "XR": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__.XR),
/* harmony export */   "zV": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__.zV),
/* harmony export */   "lr": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__.lr),
/* harmony export */   "vg": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__.vg),
/* harmony export */   "d_": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__.d_),
/* harmony export */   "ad": () => (/* reexport safe */ _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__.ad),
/* harmony export */   "nb": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.nb),
/* harmony export */   "ZN": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.ZN),
/* harmony export */   "Dc": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_2__.Dc),
/* harmony export */   "KL": () => (/* binding */ useSystemPreferencePalatte),
/* harmony export */   "um": () => (/* binding */ Appearance)
/* harmony export */ });
/* unused harmony export currentSystemPreferencePalatte */
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/8184.js
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57981);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7838);
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83573);
/* harmony import */ var _component_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59242);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94235);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10525);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15497);
/* harmony import */ var _Components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44977);
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90341);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83710);
=======
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73749);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77504);
/* harmony import */ var _changes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37359);
/* harmony import */ var _component_changes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15405);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16979);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42118);
/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71591);
/* harmony import */ var _Components_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72706);
/* harmony import */ var _hooks_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(89158);
/* harmony import */ var _ShadowRoot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86753);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/102.js
/// <reference path="./extended.d.ts" />





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
    const colors = mode === 'dark' ? _constants__WEBPACK_IMPORTED_MODULE_2__/* .DarkColor */ .I3 : _constants__WEBPACK_IMPORTED_MODULE_2__/* .LightColor */ .Ci;
    const theme = (0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)({
        palette: color(mode, colors)
    }, ...Object.values(_changes__WEBPACK_IMPORTED_MODULE_0__).map(applyColors), ...Object.values(_component_changes__WEBPACK_IMPORTED_MODULE_1__).map(applyColors));
    return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(theme);
    function applyColors(x) {
        if (typeof x === 'function') return x(mode, colors);
        return x;
    }
}
const MaskLightTheme = MaskTheme('light');
const MaskDarkTheme = MaskTheme('dark');





const query = '(prefers-color-scheme: dark)';
function useSystemPreferencePalatte() {
    return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(query) ? 'dark' : 'light';
}
function currentSystemPreferencePalatte() {
    return matchMedia(query).matches ? 'dark' : 'light';
}
var Appearance;
(function(Appearance1) {
    Appearance1["default"] = "default";
    Appearance1["light"] = "light";
    Appearance1["dark"] = "dark";
})(Appearance || (Appearance = {
}));


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/8184.js
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
  "xx": () => (/* reexport */ hooks_useChainId/* useChainId */.xx),
  "as": () => (/* reexport */ hooks_useChainId/* useChainIdValid */.as),
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
  "if": () => (/* reexport */ useEtherPrice/* useEtherPrice */.i),
  "jv": () => (/* reexport */ useFungibleTokenDetailed/* useFungibleTokenDetailed */.j),
  "g3": () => (/* reexport */ useFungibleTokenWatched/* useFungibleTokenWatched */.g),
  "bs": () => (/* reexport */ useERC20TokenDetailed/* useFungibleTokensDetailed */.b),
  "Fh": () => (/* reexport */ useGasPrice/* useGasPrice */.F),
  "hx": () => (/* reexport */ useMnemonicWordsPuzzle/* useMnemonicWordsPuzzle */.h),
  "w0": () => (/* reexport */ useMulticall/* useMutlipleContractSingleData */.w0),
  "hj": () => (/* reexport */ useNativeTokenBalance/* useNativeTokenBalance */.h),
  "JS": () => (/* reexport */ useNativeTokenDetailed/* useNativeTokenDetailed */.J),
  "Hv": () => (/* reexport */ useNativeTokenWrapperCallback/* useNativeTokenWrapperCallback */.H),
  "bL": () => (/* reexport */ useNetworkType/* useNetworkType */.b),
  "XE": () => (/* reexport */ useNonce/* useNonce */.X),
  "es": () => (/* reexport */ useMulticall/* useSingleContractMultipleData */.es),
  "mM": () => (/* reexport */ useTokenBalance/* useTokenBalance */.m),
  "pl": () => (/* reexport */ useTransactionState/* useTransactionState */.p),
  "nC": () => (/* reexport */ useTransactions/* useTransactions */.n),
  "du": () => (/* reexport */ useTrustedERC20Tokens/* useTrustedERC20Tokens */.d),
  "Os": () => (/* reexport */ useWallet/* useWallet */.O),
  "rB": () => (/* reexport */ useWallets/* useWallets */.r),
  "$6": () => (/* reexport */ hooks_useWeb3/* useWeb3 */.$)
});

// UNUSED EXPORTS: ERC165_INTERFACE_ID, ERC721_ENUMERABLE_INTERFACE_ID, getERC721TokenDetailedFromChain, getERC721TokenDetailedFromOpensea, useAssetsFromChain, useAssetsFromProvider, useAssetsMerged, useBlockNumberOnce, useChainIDAvailable, useChainIdMatched, useERC1155TokenAssetDetailed, useERC20TokenAllowance, useERC20TokenTransferCallback, useERC721ContractDetailed, useERC721ContractIsApproveForAll, useERC721ContractSetApproveForAllCallback, useERC721TokenBalance, useERC721TokenByIndex, useERC721TokenDetailed, useERC721TokenDetailedCallback, useERC721TokenDetailedOwnerList, useERC721TokenTransferCallback, useGetPastLogsParams, useMulticallCallback, useMultipleContractMultipleData, useMutlicallStateDecoded, useNativeTransferCallback, useResolveENS, useResolveUNS, useStableTokensDebank, useTokenTransferCallback, useTokensBalance, useTransaction, useTransactionReceipt

// EXTERNAL MODULE: ../web3-shared/src/hooks/useAccount.ts
var useAccount = __webpack_require__(9429);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useAllowTestnet.ts
var useAllowTestnet = __webpack_require__(29953);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useBlockie.ts
var useBlockie = __webpack_require__(95197);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useBlockNumber.ts
var useBlockNumber = __webpack_require__(1200);
// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainId.ts
var hooks_useChainId = __webpack_require__(69509);
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
var hooks_useWeb3 = __webpack_require__(32311);
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
            fromBlock: toHex(fromBlock + (count - 1) * maxBlockRange),
            toBlock: toHex(fromBlock + count * maxBlockRange),
            ...params
        });
        count += 1;
    }
    queryParams.push({
        fromBlock: toHex(fromBlock + (count - 1) * maxBlockRange),
        toBlock: toHex(currentBlock),
        ...params
    });
    return queryParams;
}

// EXTERNAL MODULE: ../web3-shared/src/hooks/useChainColor.ts
var useChainColor = __webpack_require__(78944);
;// CONCATENATED MODULE: ../web3-shared/src/hooks/useResolveENS.ts



function useResolveENS(name) {
    const web3 = useWeb3();
    const chainId = useChainId();
    return useAsyncRetry(async ()=>{
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
    const chainId = useChainId();
    return useAsyncRetry(async ()=>{
        if (!uns) return '';
        return resolve(uns);
    }, [
        uns,
        chainId
    ]);
}
async function resolve(uns) {
    const resolution = new Resolution();
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

/***/ 16931:
=======
/***/ 10666:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/102.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useERC20TokenTransferCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51362);
/* harmony import */ var _contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85380);
/* harmony import */ var _useTransactionState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91840);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24402);
/* harmony import */ var _useNonce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58435);
/* harmony import */ var _useGasPrice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56475);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4285);









function useERC20TokenTransferCallback(address, amount, recipient) {
    const nonce = useNonce();
    const gasPrice = useGasPrice();
    const account = useAccount();
    const erc20Contract = useERC20TokenContract(address);
    const [transferState, setTransferState] = useTransactionState();
    const transferCallback = useCallback(async ()=>{
        if (!account || !recipient || !amount || isZero(amount) || !erc20Contract) {
            setTransferState({
                type: TransactionStateType.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: TransactionStateType.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficent balance
        const balance = await erc20Contract.methods.balanceOf(account).call();
        if (isGreaterThan(amount, balance)) {
            setTransferState({
                type: TransactionStateType.FAILED,
                error: new Error('Insufficent balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: TransactionStateType.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.transfer(recipient, amount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: TransactionStateType.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc20Contract.methods.transfer(recipient, amount).send(config).on(TransactionEventType.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: TransactionStateType.HASH,
                    hash
                });
                resolve(hash);
            }).on(TransactionEventType.ERROR, (error)=>{
                setTransferState({
                    type: TransactionStateType.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        nonce,
        gasPrice,
        account,
        address,
        amount,
        recipient,
        erc20Contract
    ]);
    const resetCallback = useCallback(()=>{
        setTransferState({
            type: TransactionStateType.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 94341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useERC721TokenTransferCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24402);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4285);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51362);
/* harmony import */ var _useTransactionState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91840);
/* harmony import */ var _contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58000);
/* harmony import */ var _useNonce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58435);
/* harmony import */ var _useGasPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56475);









function useERC721TokenTransferCallback(address, tokenId, recipient) {
    const account = useAccount();
    const nonce = useNonce();
    const gasPrice = useGasPrice();
    const erc721Contract = useERC721TokenContract(address);
    const [transferState, setTransferState] = useTransactionState();
    const transferCallback = useCallback(async ()=>{
        if (!account || !recipient || !tokenId || !erc721Contract) {
            setTransferState({
                type: TransactionStateType.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: TransactionStateType.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: invalid ownership
        const ownerOf = await erc721Contract.methods.ownerOf(tokenId).call();
        if (!ownerOf || !isSameAddress(ownerOf, account) || isSameAddress(ownerOf, recipient)) {
            setTransferState({
                type: TransactionStateType.FAILED,
                error: new Error('Invalid ownership')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: TransactionStateType.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc721Contract.methods.transferFrom(account, recipient, tokenId).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: TransactionStateType.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc721Contract.methods.transferFrom(account, recipient, tokenId).send(config).on(TransactionEventType.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: TransactionStateType.HASH,
                    hash
                });
                resolve(hash);
            }).on(TransactionEventType.ERROR, (error)=>{
                setTransferState({
                    type: TransactionStateType.FAILED,
                    error
                });
                reject(error);
            });
        });
    }, [
        gasPrice,
        nonce,
        account,
        tokenId,
        recipient,
        erc721Contract
    ]);
    const resetCallback = useCallback(()=>{
        setTransferState({
            type: TransactionStateType.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 59956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useGetPastLogsParams */
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74950);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_0__);

// There's a getPastLogs block range limitation which differ from RPCs.
//  So we need to split one large range request to multiple small ones.
function useGetPastLogsParams(fromBlock, currentBlock, maxBlockRange, params) {
    if (!fromBlock || fromBlock > currentBlock) return [];
    let count = 1;
    const queryParams = [];
    while(fromBlock + count * maxBlockRange < currentBlock){
        queryParams.push({
            fromBlock: toHex(fromBlock + (count - 1) * maxBlockRange),
            toBlock: toHex(fromBlock + count * maxBlockRange),
            ...params
        });
        count += 1;
    }
    queryParams.push({
        fromBlock: toHex(fromBlock + (count - 1) * maxBlockRange),
        toBlock: toHex(currentBlock),
        ...params
    });
    return queryParams;
}


/***/ }),

/***/ 28557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useNativeTransferCallback */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74950);
/* harmony import */ var web3_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _useAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51362);
/* harmony import */ var _useChainId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34324);
/* harmony import */ var _useTransactionState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91840);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1366);
/* harmony import */ var _useNonce__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58435);
/* harmony import */ var _useGasPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56475);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4285);










function useNativeTransferCallback(amount, recipient, memo) {
    const web3 = useWeb3();
    const nonce = useNonce();
    const gasPrice = useGasPrice();
    const account = useAccount();
    const chainId = useChainId();
    const [transferState, setTransferState] = useTransactionState();
    const transferCallback = useCallback(async ()=>{
        if (!account || !recipient || !amount || isZero(amount)) {
            setTransferState({
                type: TransactionStateType.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: TransactionStateType.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficent balance
        const balance = await web3.eth.getBalance(account);
        if (isGreaterThan(amount, balance)) {
            setTransferState({
                type: TransactionStateType.FAILED,
                error: new Error('Insufficent balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: TransactionStateType.WAIT_FOR_CONFIRMING
        });
        // send transaction and wait for hash
        const config = {
            from: account,
            to: recipient,
            gas: await web3.eth.estimateGas({
                from: account,
                to: recipient,
                value: amount,
                data: memo ? toHex(memo) : undefined
            }).catch((error)=>{
                setTransferState({
                    type: TransactionStateType.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            value: amount,
            data: memo ? toHex(memo) : undefined,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config, (error, hash)=>{
                if (error) {
                    setTransferState({
                        type: TransactionStateType.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTransferState({
                        type: TransactionStateType.HASH,
                        hash
                    });
                    resolve(hash);
                }
            });
        });
    }, [
        web3,
        nonce,
        gasPrice,
        account,
        amount,
        chainId,
        recipient,
        memo
    ]);
    const resetCallback = useCallback(()=>{
        setTransferState({
            type: TransactionStateType.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 20103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useResolveENS */
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33385);
/* harmony import */ var _useWeb3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1366);



function useResolveENS(name) {
    const web3 = useWeb3();
    const chainId = useChainId();
    return useAsyncRetry(async ()=>{
        const result = await web3.eth.ens.getAddress(name);
        return result;
    }, [
        web3,
        name,
        chainId
    ]);
}


/***/ }),

/***/ 77375:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useResolveUNS */
/* harmony import */ var _unstoppabledomains_resolution__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33989);
/* harmony import */ var _unstoppabledomains_resolution__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_unstoppabledomains_resolution__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33385);



function useResolveUNS(uns) {
    const chainId = useChainId();
    return useAsyncRetry(async ()=>{
        if (!uns) return '';
        return resolve(uns);
    }, [
        uns,
        chainId
    ]);
}
async function resolve(uns) {
    const resolution = new Resolution();
    const result = await resolution.records(uns, [
        'crypto.ETH.address'
    ]);
    return result['crypto.ETH.address'];
}


/***/ }),

/***/ 40892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export useTokenTransferCallback */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _useERC20TokenTransferCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10666);
/* harmony import */ var _useERC721TokenTransferCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94341);
/* harmony import */ var _useNativeTokenTransferCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28557);





function useTokenTransferCallback(type, address, amountOrTokenId, recipient, memo) {
    const r1 = useNativeTransferCallback(type === EthereumTokenType.Native ? amountOrTokenId : '', recipient, memo);
    const r2 = useERC20TokenTransferCallback(address, type === EthereumTokenType.ERC20 ? amountOrTokenId : '', recipient);
    const r3 = useERC721TokenTransferCallback(address, type === EthereumTokenType.ERC721 ? amountOrTokenId : '', recipient);
    const type_ = type;
    switch(type_){
        case EthereumTokenType.Native:
            return r1;
        case EthereumTokenType.ERC20:
            return r2;
        case EthereumTokenType.ERC721:
            return r3;
        case EthereumTokenType.ERC1155:
            throw new Error('To be implemented.');
        default:
            unreachable(type_);
    }
}


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

/***/ })

}]);