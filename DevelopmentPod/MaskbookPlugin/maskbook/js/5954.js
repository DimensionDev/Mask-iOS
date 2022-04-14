"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5954],{

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
/* harmony export */   "Fl": () => (/* binding */ cr),
/* harmony export */   "MD": () => (/* binding */ T),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "sc": () => (/* binding */ L)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enablePatches, finishDraft, freeze, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setUseProxies */
function r(r){for(var e=arguments.length,n=Array(e>1?e-1:0),t=1;t<e;t++)n[t-1]=arguments[t];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+r+(n.length?" "+n.map((function(r){return"'"+r+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function e(r){return!!r&&!!r[Q]}function n(r){return!!r&&(function(r){if(!r||"object"!=typeof r)return!1;var e=Object.getPrototypeOf(r);if(null===e)return!0;var n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Z}(r)||Array.isArray(r)||!!r[L]||!!r.constructor[L]||l(r)||s(r))}function t(n){return e(n)||r(23,n),n[Q].t}function i(r,e,n){void 0===n&&(n=!1),0===o(r)?(n?Object.keys:rr)(r).forEach((function(t){n&&"symbol"==typeof t||e(t,r[t],r)})):r.forEach((function(n,t){return e(t,n,r)}))}function o(r){var e=r[Q];return e?e.i>3?e.i-4:e.i:Array.isArray(r)?1:l(r)?2:s(r)?3:0}function a(r,e){return 2===o(r)?r.has(e):Object.prototype.hasOwnProperty.call(r,e)}function u(r,e){return 2===o(r)?r.get(e):r[e]}function f(r,e,n){var t=o(r);2===t?r.set(e,n):3===t?(r.delete(e),r.add(n)):r[e]=n}function c(r,e){return r===e?0!==r||1/r==1/e:r!=r&&e!=e}function l(r){return X&&r instanceof Map}function s(r){return q&&r instanceof Set}function v(r){return r.o||r.t}function p(r){if(Array.isArray(r))return Array.prototype.slice.call(r);var e=er(r);delete e[Q];for(var n=rr(e),t=0;t<n.length;t++){var i=n[t],o=e[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:r[i]})}return Object.create(Object.getPrototypeOf(r),e)}function d(r,t){if(void 0===t&&(t=!1),h(r)||e(r)||!n(r))return r;if(o(r)>1){var a={configurable:!0,writable:!0,value:b};Object.defineProperties(r,{set:a,add:a,clear:a,delete:a})}return Object.freeze(r),t&&i(r,(function(r,e){return d(e,!0)}),!0),r}function b(){r(2)}function h(r){return null==r||"object"!=typeof r||Object.isFrozen(r)}function y(e){var n=nr[e];return n||r(18,e),n}function m(r,e){nr[r]||(nr[r]=e)}function _(){return true||0,U}function g(r,e){e&&(y("Patches"),r.u=[],r.l=[],r.s=e)}function w(r){j(r),r.v.forEach(S),r.v=null}function j(r){r===U&&(U=r.p)}function O(r){return U={v:[],p:U,h:r,m:!0,_:0}}function S(r){var e=r[Q];0===e.i||1===e.i?e.g():e.j=!0}function P(e,t){t._=t.v.length;var i=t.v[0],o=void 0!==e&&e!==i;return t.h.O||y("ES5").S(t,e,o),o?(i[Q].P&&(w(t),r(4)),n(e)&&(e=M(t,e),t.p||x(t,e)),t.u&&y("Patches").M(i[Q].t,e,t.u,t.l)):e=M(t,i,[]),w(t),t.u&&t.s(t.u,t.l),e!==H?e:void 0}function M(r,e,n){if(h(e))return e;var t=e[Q];if(!t)return i(e,(function(i,o){return A(r,t,e,i,o,n)}),!0),e;if(t.A!==r)return e;if(!t.P)return x(r,t.t,!0),t.t;if(!t.k){t.k=!0,t.A._--;var o=4===t.i||5===t.i?t.o=p(t.I):t.o;i(3===t.i?new Set(o):o,(function(e,i){return A(r,t,o,e,i,n)})),x(r,o,!1),n&&r.u&&y("Patches").R(t,n,r.u,r.l)}return t.o}function A(t,i,o,u,c,l){if( false&&0,e(c)){var s=M(t,c,l&&i&&3!==i.i&&!a(i.D,u)?l.concat(u):void 0);if(f(o,u,s),!e(s))return;t.m=!1}if(n(c)&&!h(c)){if(!t.h.F&&t._<1)return;M(t,c),i&&i.A.p||x(t,c)}}function x(r,e,n){void 0===n&&(n=!1),r.h.F&&r.m&&d(e,n)}function k(r,e){var n=r[Q];return(n?v(n):r)[e]}function z(r,e){if(e in r)for(var n=Object.getPrototypeOf(r);n;){var t=Object.getOwnPropertyDescriptor(n,e);if(t)return t;n=Object.getPrototypeOf(n)}}function I(r){r.P||(r.P=!0,r.p&&I(r.p))}function E(r){r.o||(r.o=p(r.t))}function R(r,e,n){var t=l(e)?y("MapSet").N(e,n):s(e)?y("MapSet").T(e,n):r.O?function(r,e){var n=Array.isArray(r),t={i:n?1:0,A:e?e.A:_(),P:!1,k:!1,D:{},p:e,t:r,I:null,o:null,g:null,C:!1},i=t,o=tr;n&&(i=[t],o=ir);var a=Proxy.revocable(i,o),u=a.revoke,f=a.proxy;return t.I=f,t.g=u,f}(e,n):y("ES5").J(e,n);return(n?n.A:_()).v.push(t),t}function D(t){return e(t)||r(22,t),function r(e){if(!n(e))return e;var t,a=e[Q],c=o(e);if(a){if(!a.P&&(a.i<4||!y("ES5").K(a)))return a.t;a.k=!0,t=F(e,c),a.k=!1}else t=F(e,c);return i(t,(function(e,n){a&&u(a.t,e)===n||f(t,e,r(n))})),3===c?new Set(t):t}(t)}function F(r,e){switch(e){case 2:return new Map(r);case 3:return Array.from(r)}return p(r)}function N(){function n(r,e){var n=l[r];return n?n.enumerable=e:l[r]=n={configurable:!0,enumerable:e,get:function(){var e=this[Q];return false&&0,tr.get(e,r)},set:function(e){var n=this[Q]; false&&0,tr.set(n,r,e)}},n}function t(r){for(var e=r.length-1;e>=0;e--){var n=r[e][Q];if(!n.P)switch(n.i){case 5:u(n)&&I(n);break;case 4:o(n)&&I(n)}}}function o(r){for(var e=r.t,n=r.I,t=rr(n),i=t.length-1;i>=0;i--){var o=t[i];if(o!==Q){var u=e[o];if(void 0===u&&!a(e,o))return!0;var f=n[o],l=f&&f[Q];if(l?l.t!==u:!c(f,u))return!0}}var s=!!e[Q];return t.length!==rr(e).length+(s?0:1)}function u(r){var e=r.I;if(e.length!==r.t.length)return!0;var n=Object.getOwnPropertyDescriptor(e,e.length-1);if(n&&!n.get)return!0;for(var t=0;t<e.length;t++)if(!e.hasOwnProperty(t))return!0;return!1}function f(e){e.j&&r(3,JSON.stringify(v(e)))}var l={};m("ES5",{J:function(r,e){var t=Array.isArray(r),i=function(r,e){if(r){for(var t=Array(e.length),i=0;i<e.length;i++)Object.defineProperty(t,""+i,n(i,!0));return t}var o=er(e);delete o[Q];for(var a=rr(o),u=0;u<a.length;u++){var f=a[u];o[f]=n(f,r||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(e),o)}(t,r),o={i:t?5:4,A:e?e.A:_(),P:!1,k:!1,D:{},p:e,t:r,I:i,o:null,j:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(r,n,o){o?e(n)&&n[Q].A===r&&t(r.v):(r.u&&function r(e){if(e&&"object"==typeof e){var n=e[Q];if(n){var t=n.t,o=n.I,f=n.D,c=n.i;if(4===c)i(o,(function(e){e!==Q&&(void 0!==t[e]||a(t,e)?f[e]||r(o[e]):(f[e]=!0,I(n)))})),i(t,(function(r){void 0!==o[r]||a(o,r)||(f[r]=!1,I(n))}));else if(5===c){if(u(n)&&(I(n),f.length=!0),o.length<t.length)for(var l=o.length;l<t.length;l++)f[l]=!1;else for(var s=t.length;s<o.length;s++)f[s]=!0;for(var v=Math.min(o.length,t.length),p=0;p<v;p++)o.hasOwnProperty(p)||(f[p]=!0),void 0===f[p]&&r(o[p])}}}}(r.v[0]),t(r.v))},K:function(r){return 4===r.i?o(r):u(r)}})}function T(){function e(r,e){function n(){Object.defineProperty(this,"constructor",{value:r})}u(r,e),r.prototype=(n.prototype=e.prototype,new n)}function t(r){r.o||(r.D=new Map,r.o=new Map(r.t))}function o(r){r.o||(r.o=new Set,r.t.forEach((function(e){if(n(e)){var t=R(r.A.h,e,r);r.v.set(e,t),r.o.add(t)}else r.o.add(e)})))}function a(e){e.j&&r(3,JSON.stringify(v(e)))}var u=function(r,e){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var n in e)e.hasOwnProperty(n)&&(r[n]=e[n])})(r,e)},f=function(){function r(r,e){return this[Q]={i:2,p:e,A:e?e.A:_(),P:!1,k:!1,o:void 0,D:void 0,t:r,I:this,C:!1,j:!1},this}var o;return e(r,Map),Object.defineProperties(r.prototype,((o={size:{get:function(){return v(this[Q]).size},configurable:!0},has:{configurable:!0,writable:!0,value:function(r){return v(this[Q]).has(r)}},set:{configurable:!0,writable:!0,value:function(r,e){var n=this[Q];return a(n),v(n).has(r)&&v(n).get(r)===e||(t(n),I(n),n.D.set(r,!0),n.o.set(r,e),n.D.set(r,!0)),this}},delete:{configurable:!0,writable:!0,value:function(r){if(!this.has(r))return!1;var e=this[Q];return a(e),t(e),I(e),e.t.has(r)?e.D.set(r,!1):e.D.delete(r),e.o.delete(r),!0}},clear:{configurable:!0,writable:!0,value:function(){var r=this[Q];a(r),v(r).size&&(t(r),I(r),r.D=new Map,i(r.t,(function(e){r.D.set(e,!1)})),r.o.clear())}},forEach:{configurable:!0,writable:!0,value:function(r,e){var n=this;v(this[Q]).forEach((function(t,i){r.call(e,n.get(i),i,n)}))}},get:{configurable:!0,writable:!0,value:function(r){var e=this[Q];a(e);var i=v(e).get(r);if(e.k||!n(i))return i;if(i!==e.t.get(r))return i;var o=R(e.A.h,i,e);return t(e),e.o.set(r,o),o}},keys:{configurable:!0,writable:!0,value:function(){return v(this[Q]).keys()}},values:{configurable:!0,writable:!0,value:function(){var r,e=this,n=this.keys();return(r={})[V]=function(){return e.values()},r.next=function(){var r=n.next();return r.done?r:{done:!1,value:e.get(r.value)}},r}},entries:{configurable:!0,writable:!0,value:function(){var r,e=this,n=this.keys();return(r={})[V]=function(){return e.entries()},r.next=function(){var r=n.next();if(r.done)return r;var t=e.get(r.value);return{done:!1,value:[r.value,t]}},r}}})[V]={configurable:!0,writable:!0,value:function(){return this.entries()}},o)),r}(),c=function(){function r(r,e){return this[Q]={i:3,p:e,A:e?e.A:_(),P:!1,k:!1,o:void 0,t:r,I:this,v:new Map,j:!1,C:!1},this}var n;return e(r,Set),Object.defineProperties(r.prototype,((n={size:{get:function(){return v(this[Q]).size},configurable:!0},has:{configurable:!0,writable:!0,value:function(r){var e=this[Q];return a(e),e.o?!!e.o.has(r)||!(!e.v.has(r)||!e.o.has(e.v.get(r))):e.t.has(r)}},add:{configurable:!0,writable:!0,value:function(r){var e=this[Q];return a(e),this.has(r)||(o(e),I(e),e.o.add(r)),this}},delete:{configurable:!0,writable:!0,value:function(r){if(!this.has(r))return!1;var e=this[Q];return a(e),o(e),I(e),e.o.delete(r)||!!e.v.has(r)&&e.o.delete(e.v.get(r))}},clear:{configurable:!0,writable:!0,value:function(){var r=this[Q];a(r),v(r).size&&(o(r),I(r),r.o.clear())}},values:{configurable:!0,writable:!0,value:function(){var r=this[Q];return a(r),o(r),r.o.values()}},entries:{configurable:!0,writable:!0,value:function(){var r=this[Q];return a(r),o(r),r.o.entries()}},keys:{configurable:!0,writable:!0,value:function(){return this.values()}}})[V]={configurable:!0,writable:!0,value:function(){return this.values()}},n.forEach={configurable:!0,writable:!0,value:function(r,e){for(var n=this.values(),t=n.next();!t.done;)r.call(e,t.value,t.value,this),t=n.next()}},n)),r}();m("MapSet",{N:function(r,e){return new f(r,e)},T:function(r,e){return new c(r,e)}})}function C(){N(),T(),J()}function J(){function t(r){if(!n(r))return r;if(Array.isArray(r))return r.map(t);if(l(r))return new Map(Array.from(r.entries()).map((function(r){return[r[0],t(r[1])]})));if(s(r))return new Set(Array.from(r).map(t));var e=Object.create(Object.getPrototypeOf(r));for(var i in r)e[i]=t(r[i]);return a(r,L)&&(e[L]=r[L]),e}function f(r){return e(r)?t(r):r}var c="add";m("Patches",{$:function(e,n){return n.forEach((function(n){for(var i=n.path,a=n.op,f=e,l=0;l<i.length-1;l++){var s=o(f),v=""+i[l];0!==s&&1!==s||"__proto__"!==v&&"constructor"!==v||r(24),"function"==typeof f&&"prototype"===v&&r(24),"object"!=typeof(f=u(f,v))&&r(15,i.join("/"))}var p=o(f),d=t(n.value),b=i[i.length-1];switch(a){case"replace":switch(p){case 2:return f.set(b,d);case 3:r(16);default:return f[b]=d}case c:switch(p){case 1:return"-"===b?f.push(d):f.splice(b,0,d);case 2:return f.set(b,d);case 3:return f.add(d);default:return f[b]=d}case"remove":switch(p){case 1:return f.splice(b,1);case 2:return f.delete(b);case 3:return f.delete(n.value);default:return delete f[b]}default:r(17,a)}})),e},R:function(r,e,n,t){switch(r.i){case 0:case 4:case 2:return function(r,e,n,t){var o=r.t,l=r.o;i(r.D,(function(r,i){var s=u(o,r),v=u(l,r),p=i?a(o,r)?"replace":c:"remove";if(s!==v||"replace"!==p){var d=e.concat(r);n.push("remove"===p?{op:p,path:d}:{op:p,path:d,value:v}),t.push(p===c?{op:"remove",path:d}:"remove"===p?{op:c,path:d,value:f(s)}:{op:"replace",path:d,value:f(s)})}}))}(r,e,n,t);case 5:case 1:return function(r,e,n,t){var i=r.t,o=r.D,a=r.o;if(a.length<i.length){var u=[a,i];i=u[0],a=u[1];var l=[t,n];n=l[0],t=l[1]}for(var s=0;s<i.length;s++)if(o[s]&&a[s]!==i[s]){var v=e.concat([s]);n.push({op:"replace",path:v,value:f(a[s])}),t.push({op:"replace",path:v,value:f(i[s])})}for(var p=i.length;p<a.length;p++){var d=e.concat([p]);n.push({op:c,path:d,value:f(a[p])})}i.length<a.length&&t.push({op:"replace",path:e.concat(["length"]),value:i.length})}(r,e,n,t);case 3:return function(r,e,n,t){var i=r.t,o=r.o,a=0;i.forEach((function(r){if(!o.has(r)){var i=e.concat([a]);n.push({op:"remove",path:i,value:r}),t.unshift({op:c,path:i,value:r})}a++})),a=0,o.forEach((function(r){if(!i.has(r)){var o=e.concat([a]);n.push({op:c,path:o,value:r}),t.unshift({op:"remove",path:o,value:r})}a++}))}(r,e,n,t)}},M:function(r,e,n,t){n.push({op:"replace",path:[],value:e===H?void 0:e}),t.push({op:"replace",path:[],value:r})}})}function K(r){return r}function $(r){return r}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(r){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+r},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(r){return"Cannot apply patch, path doesn't resolve: "+r},16:'Sets cannot have "replace" patches.',17:function(r){return"Unsupported patch operation: "+r},18:function(r){return"The plugin for '"+r+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+r+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(r){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+r+"'"},22:function(r){return"'current' expects a draft, got: "+r},23:function(r){return"'original' expects a draft, got: "+r},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,rr="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(r){return Object.getOwnPropertyNames(r).concat(Object.getOwnPropertySymbols(r))}:Object.getOwnPropertyNames,er=Object.getOwnPropertyDescriptors||function(r){var e={};return rr(r).forEach((function(n){e[n]=Object.getOwnPropertyDescriptor(r,n)})),e},nr={},tr={get:function(r,e){if(e===Q)return r;var t=v(r);if(!a(t,e))return function(r,e,n){var t,i=z(e,n);return i?"value"in i?i.value:null===(t=i.get)||void 0===t?void 0:t.call(r.I):void 0}(r,t,e);var i=t[e];return r.k||!n(i)?i:i===k(r.t,e)?(E(r),r.o[e]=R(r.A.h,i,r)):i},has:function(r,e){return e in v(r)},ownKeys:function(r){return Reflect.ownKeys(v(r))},set:function(r,e,n){var t=z(v(r),e);if(null==t?void 0:t.set)return t.set.call(r.I,n),!0;if(!r.P){var i=k(v(r),e),o=null==i?void 0:i[Q];if(o&&o.t===n)return r.o[e]=n,r.D[e]=!1,!0;if(c(n,i)&&(void 0!==n||a(r.t,e)))return!0;E(r),I(r)}return r.o[e]===n&&"number"!=typeof n&&(void 0!==n||e in r.o)||(r.o[e]=n,r.D[e]=!0,!0)},deleteProperty:function(r,e){return void 0!==k(r.t,e)||e in r.t?(r.D[e]=!1,E(r),I(r)):delete r.D[e],r.o&&delete r.o[e],!0},getOwnPropertyDescriptor:function(r,e){var n=v(r),t=Reflect.getOwnPropertyDescriptor(n,e);return t?{writable:!0,configurable:1!==r.i||"length"!==e,enumerable:t.enumerable,value:n[e]}:t},defineProperty:function(){r(11)},getPrototypeOf:function(r){return Object.getPrototypeOf(r.t)},setPrototypeOf:function(){r(12)}},ir={};i(tr,(function(r,e){ir[r]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),ir.deleteProperty=function(e,n){return false&&0,ir.set.call(this,e,n,void 0)},ir.set=function(e,n,t){return false&&0,tr.set.call(this,e[0],n,t,e[0])};var or=function(){function t(e){var t=this;this.O=B,this.F=!0,this.produce=function(e,i,o){if("function"==typeof e&&"function"!=typeof i){var a=i;i=e;var u=t;return function(r){var e=this;void 0===r&&(r=a);for(var n=arguments.length,t=Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return u.produce(r,(function(r){var n;return(n=i).call.apply(n,[e,r].concat(t))}))}}var f;if("function"!=typeof i&&r(6),void 0!==o&&"function"!=typeof o&&r(7),n(e)){var c=O(t),l=R(t,e,void 0),s=!0;try{f=i(l),s=!1}finally{s?w(c):j(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(r){return g(c,o),P(r,c)}),(function(r){throw w(c),r})):(g(c,o),P(f,c))}if(!e||"object"!=typeof e){if(void 0===(f=i(e))&&(f=e),f===H&&(f=void 0),t.F&&d(f,!0),o){var v=[],p=[];y("Patches").M(e,f,v,p),o(v,p)}return f}r(21,e)},this.produceWithPatches=function(r,e){if("function"==typeof r)return function(e){for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return t.produceWithPatches(e,(function(e){return r.apply(void 0,[e].concat(i))}))};var n,i,o=t.produce(r,e,(function(r,e){n=r,i=e}));return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(r){return[r,n,i]})):[o,n,i]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var i=t.prototype;return i.createDraft=function(t){n(t)||r(8),e(t)&&(t=D(t));var i=O(this),o=R(this,t,void 0);return o[Q].C=!0,j(i),o},i.finishDraft=function(e,n){var t=e&&e[Q]; false&&(0);var i=t.A;return g(i,n),P(void 0,i)},i.setAutoFreeze=function(r){this.F=r},i.setUseProxies=function(e){e&&!B&&r(20),this.O=e},i.applyPatches=function(r,n){var t;for(t=n.length-1;t>=0;t--){var i=n[t];if(0===i.path.length&&"replace"===i.op){r=i.value;break}}t>-1&&(n=n.slice(t+1));var o=y("Patches").$;return e(r)?o(r,n):this.produce(r,(function(r){return o(r,n)}))},t}(),ar=new or,ur=ar.produce,fr=ar.produceWithPatches.bind(ar),cr=ar.setAutoFreeze.bind(ar),lr=ar.setUseProxies.bind(ar),sr=ar.applyPatches.bind(ar),vr=ar.createDraft.bind(ar),pr=ar.finishDraft.bind(ar);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ur);
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
const postEditorContentInPopupSelector = ()=>querySelector('#react-root div')
;
const postEditorInPopupSelector = ()=>querySelector('div[data-testid="toolBar"] div[data-testid="geoButton"]')
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

/***/ 32196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_0__.ql)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62481);



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
function createSubscriptionFromAsync(f, defaultValue, onChange, signal) {
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
            if (signal?.aborted) return ()=>{};
            const a = subscribe(sub);
            const b = onChange(async ()=>{
                beats += 1;
                if (beats === 1) flush();
            });
            signal?.addEventListener('abort', ()=>[
                    a(),
                    b()
                ]
            , {
                once: true
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
function SubscriptionFromValueRef(ref, signal) {
    return SubscriptionDebug({
        getCurrentValue: ()=>ref.value
        ,
        subscribe: (sub)=>{
            if (signal?.aborted) return lodash_unified__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
            const f = ref.addListener(sub);
            signal?.addEventListener('abort', f, {
                once: true
            });
            return f;
        }
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