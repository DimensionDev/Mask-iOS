(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2990],{

/***/ 82726:
/***/ (() => {

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function u(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))}function e(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}(function(){(console.warn||console.log).apply(console,arguments)}).bind("[clipboard-polyfill]");var n,r,i,o,a="undefined"==typeof navigator?void 0:navigator,u=null==a?void 0:a.clipboard,c=null===(n=null==u?void 0:u.read)||void 0===n?void 0:n.bind(u),l=null===(r=null==u?void 0:u.readText)||void 0===r?void 0:r.bind(u),s=null===(i=null==u?void 0:u.write)||void 0===i?void 0:i.bind(u),d=null===(o=null==u?void 0:u.writeText)||void 0===o?void 0:o.bind(u),f="undefined"==typeof window?void 0:window,v=null==f?void 0:f.ClipboardItem,p=f;function h(){return"undefined"==typeof ClipboardEvent&&void 0!==p.clipboardData&&void 0!==p.clipboardData.setData}function b(){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){if(""===(t=p.clipboardData.getData("Text")))throw new Error("Empty clipboard or could not read plain text from clipboard");return[2,t]}))}))}var y=function(){this.success=!1};function w(t,e,n){for(var r in t.success=!0,e){var i=e[r],o=n.clipboardData;o.setData(r,i),"text/plain"===r&&o.getData(r)!==i&&(t.success=!1)}n.preventDefault()}function m(t){var e=new y,n=w.bind(this,e,t);document.addEventListener("copy",n);try{document.execCommand("copy")}finally{document.removeEventListener("copy",n)}return e.success}function g(t,e){x(t);var n=m(e);return E(),n}function x(t){var e=document.getSelection();if(e){var n=document.createRange();n.selectNodeContents(t),e.removeAllRanges(),e.addRange(n)}}function E(){var t=document.getSelection();t&&t.removeAllRanges()}function C(n){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){if(t="text/plain"in n,h()){if(!t)throw new Error("No `text/plain` value was specified.");if(r=n["text/plain"],p.clipboardData.setData("Text",r))return[2,!0];throw new Error("Copying failed, possibly because the user rejected it.")}var r;return m(n)||navigator.userAgent.indexOf("Edge")>-1||g(document.body,n)||function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important"),e.textContent="temporary element",document.body.appendChild(e);var n=g(e,t);return document.body.removeChild(e),n}(n)||function(t){var e=document.createElement("div");e.setAttribute("style","-webkit-user-select: text !important");var n=e;e.attachShadow&&(n=e.attachShadow({mode:"open"}));var r=document.createElement("span");r.innerText=t,n.appendChild(r),document.body.appendChild(e),x(r);var i=document.execCommand("copy");return E(),document.body.removeChild(e),i}(n["text/plain"])?[2,!0]:[2,!1]}))}))}function T(){return t(this,void 0,void 0,(function(){return e(this,(function(t){if(l)return[2,l()];if(h())return[2,b()];throw new Error("Read is not supported in your browser.")}))}))}function D(t,e){for(var n=0,r=t;n<r.length;n++){if(-1!==r[n].types.indexOf(e))return!0}return!1}var S=function(){function n(t,e){var n;for(var r in void 0===e&&(e={}),this.types=Object.keys(t),this._items={},t){var i=t[r];this._items[r]="string"==typeof i?k(r,i):i}this.presentationStyle=null!==(n=null==e?void 0:e.presentationStyle)&&void 0!==n?n:"unspecified"}return n.prototype.getType=function(n){return t(this,void 0,void 0,(function(){return e(this,(function(t){return[2,this._items[n]]}))}))},n}();function k(t,e){return new Blob([e],{type:t})}function A(n){return t(this,void 0,void 0,(function(){return e(this,(function(t){return[2,new Promise((function(t,e){var r=new FileReader;r.addEventListener("load",(function(){var n=r.result;"string"==typeof n?t(n):e("could not convert blob to string")})),r.readAsText(n)}))]}))}))}function R(n){return t(this,void 0,void 0,(function(){var t,r,i,o,a,u,c;return e(this,(function(e){switch(e.label){case 0:t={},r=0,i=n.types,e.label=1;case 1:return r<i.length?(o=i[r],a=t,u=o,[4,n.getType(o)]):[3,4];case 2:a[u]=e.sent(),e.label=3;case 3:return r++,[3,1];case 4:return c={},n.presentationStyle&&(c.presentationStyle=n.presentationStyle),[2,new v(t,c)]}}))}))}function L(t){var e={};return e["text/plain"]=k(t,"text/plain"),new S(e)}function O(n,r){return t(this,void 0,void 0,(function(){return e(this,(function(t){switch(t.label){case 0:return[4,n.getType(r)];case 1:return[4,A(t.sent())];case 2:return[2,t.sent()]}}))}))}function P(n){return t(this,void 0,void 0,(function(){var t,r,i,o,a,u;return e(this,(function(e){switch(e.label){case 0:t={},r=0,i=n.types,e.label=1;case 1:return r<i.length?(o=i[r],a=t,u=o,[4,O(n,o)]):[3,4];case 2:a[u]=e.sent(),e.label=3;case 3:return r++,[3,1];case 4:return[2,t]}}))}))}navigator.clipboard||(navigator.clipboard={}),navigator.clipboard.read=function(){return t(this,void 0,void 0,(function(){var t;return e(this,(function(e){switch(e.label){case 0:return c?[2,c()]:(t=L,[4,T()]);case 1:return[2,[t.apply(void 0,[e.sent()])]]}}))}))},navigator.clipboard.readText=T,navigator.clipboard.write=function(n){return t(this,void 0,void 0,(function(){var t,r,i;return e(this,(function(e){switch(e.label){case 0:return s&&v?[4,Promise.all(n.map(R))]:[3,5];case 1:t=e.sent(),e.label=2;case 2:return e.trys.push([2,4,,5]),[4,s(t)];case 3:return[2,e.sent()];case 4:if(r=e.sent(),!D(n,"text/plain")&&!D(n,"text/html"))throw r;return[3,5];case 5:return D(n,"text/plain"),i=C,[4,P(n[0])];case 6:if(!i.apply(void 0,[e.sent()]))throw new Error("write() failed");return[2]}}))}))},navigator.clipboard.writeText=function(n){return t(this,void 0,void 0,(function(){return e(this,(function(t){if(d)return[2,d(n)];if(!C(function(t){var e={};return e["text/plain"]=t,e}(n)))throw new Error("writeText() failed");return[2]}))}))},window.ClipboardItem=S;
//# sourceMappingURL=clipboard-polyfill.overwrite-globals.esm.js.map


/***/ }),

/***/ 25789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 98723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "MD": () => (/* binding */ C),
/* harmony export */   "sc": () => (/* binding */ L),
/* harmony export */   "Fl": () => (/* binding */ sn)
/* harmony export */ });
/* unused harmony exports Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enablePatches, finishDraft, freeze, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setUseProxies */
function n(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];if(false){ var i, o; }throw Error("[Immer] minified error nr: "+n+(r.length?" "+r.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function t(n){return!!n&&!!n[Q]}function r(n){return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;var r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===Z}(n)||Array.isArray(n)||!!n[L]||!!n.constructor[L]||s(n)||v(n))}function e(r){return t(r)||n(23,r),r[Q].t}function i(n,t,r){void 0===r&&(r=!1),0===o(n)?(r?Object.keys:nn)(n).forEach((function(e){r&&"symbol"==typeof e||t(e,n[e],n)})):n.forEach((function(r,e){return t(e,r,n)}))}function o(n){var t=n[Q];return t?t.i>3?t.i-4:t.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,t){return 2===o(n)?n.has(t):Object.prototype.hasOwnProperty.call(n,t)}function a(n,t){return 2===o(n)?n.get(t):n[t]}function f(n,t,r){var e=o(n);2===e?n.set(t,r):3===e?(n.delete(t),n.add(r)):n[t]=r}function c(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var t=tn(n);delete t[Q];for(var r=nn(t),e=0;e<r.length;e++){var i=r[e],o=t[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(t[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),t)}function d(n,e){return void 0===e&&(e=!1),y(n)||t(n)||!r(n)?n:(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,t){return d(t,!0)}),!0),n)}function h(){n(2)}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(t){var r=rn[t];return r||n(18,t),r}function m(n,t){rn[n]||(rn[n]=t)}function _(){return true||0,U}function j(n,t){t&&(b("Patches"),n.u=[],n.s=[],n.v=t)}function O(n){g(n),n.p.forEach(S),n.p=null}function g(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var t=n[Q];0===t.i||1===t.i?t.j():t.O=!0}function P(t,e){e._=e.p.length;var i=e.p[0],o=void 0!==t&&t!==i;return e.h.g||b("ES5").S(e,t,o),o?(i[Q].P&&(O(e),n(4)),r(t)&&(t=M(e,t),e.l||x(e,t)),e.u&&b("Patches").M(i[Q],t,e.u,e.s)):t=M(e,i,[]),O(e),e.u&&e.v(e.u,e.s),t!==H?t:void 0}function M(n,t,r){if(y(t))return t;var e=t[Q];if(!e)return i(t,(function(i,o){return A(n,e,t,i,o,r)}),!0),t;if(e.A!==n)return t;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o;i(3===e.i?new Set(o):o,(function(t,i){return A(n,e,o,t,i,r)})),x(n,o,!1),r&&n.u&&b("Patches").R(e,r,n.u,n.s)}return e.o}function A(e,i,o,a,c,s){if( false&&0,t(c)){var v=M(e,c,s&&i&&3!==i.i&&!u(i.D,a)?s.concat(a):void 0);if(f(o,a,v),!t(v))return;e.m=!1}if(r(c)&&!y(c)){if(!e.h.F&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,t,r){void 0===r&&(r=!1),n.h.F&&n.m&&d(t,r)}function z(n,t){var r=n[Q];return(r?p(r):n)[t]}function I(n,t){if(t in n)for(var r=Object.getPrototypeOf(n);r;){var e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=Object.getPrototypeOf(r)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function R(n,t,r){var e=s(t)?b("MapSet").N(t,r):v(t)?b("MapSet").T(t,r):n.g?function(n,t){var r=Array.isArray(n),e={i:r?1:0,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;r&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(t,r):b("ES5").J(t,r);return(r?r.A:_()).p.push(e),e}function D(e){return t(e)||n(22,e),function n(t){if(!r(t))return t;var e,u=t[Q],c=o(t);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=F(t,c),u.I=!1}else e=F(t,c);return i(e,(function(t,r){u&&a(u.t,t)===r||f(e,t,n(r))})),3===c?new Set(e):e}(e)}function F(n,t){switch(t){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function N(){function r(n,t){var r=s[n];return r?r.enumerable=t:s[n]=r={configurable:!0,enumerable:t,get:function(){var t=this[Q];return false&&0,en.get(t,n)},set:function(t){var r=this[Q]; false&&0,en.set(r,n,t)}},r}function e(n){for(var t=n.length-1;t>=0;t--){var r=n[t][Q];if(!r.P)switch(r.i){case 5:a(r)&&k(r);break;case 4:o(r)&&k(r)}}}function o(n){for(var t=n.t,r=n.k,e=nn(r),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=t[o];if(void 0===a&&!u(t,o))return!0;var f=r[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!t[Q];return e.length!==nn(t).length+(v?0:1)}function a(n){var t=n.k;if(t.length!==n.t.length)return!0;var r=Object.getOwnPropertyDescriptor(t,t.length-1);return!(!r||r.get)}function f(t){t.O&&n(3,JSON.stringify(p(t)))}var s={};m("ES5",{J:function(n,t){var e=Array.isArray(n),i=function(n,t){if(n){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,r(i,!0));return e}var o=tn(t);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=r(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(t),o)}(e,n),o={i:e?5:4,A:t?t.A:_(),P:!1,I:!1,D:{},l:t,t:n,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,r,o){o?t(r)&&r[Q].A===n&&e(n.p):(n.u&&function n(t){if(t&&"object"==typeof t){var r=t[Q];if(r){var e=r.t,o=r.k,f=r.D,c=r.i;if(4===c)i(o,(function(t){t!==Q&&(void 0!==e[t]||u(e,t)?f[t]||n(o[t]):(f[t]=!0,k(r)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(r))}));else if(5===c){if(a(r)&&(k(r),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!r(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var t=Object.create(Object.getPrototypeOf(n));for(var i in n)t[i]=e(n[i]);return u(n,L)&&(t[L]=n[L]),t}function f(n){return t(n)?e(n):n}var c="add";m("Patches",{$:function(t,r){return r.forEach((function(r){for(var i=r.path,u=r.op,f=t,s=0;s<i.length-1;s++){var v=o(f),p=""+i[s];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"))}var l=o(f),d=e(r.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(r.value);default:return delete f[h]}default:n(17,u)}})),t},R:function(n,t,r,e){switch(n.i){case 0:case 4:case 2:return function(n,t,r,e){var o=n.t,s=n.o;i(n.D,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=t.concat(n);r.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)})}}))}(n,t,r,e);case 5:case 1:return function(n,t,r,e){var i=n.t,o=n.D,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,r];r=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=t.concat([v]);r.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=t.concat([l]);r.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:"replace",path:t.concat(["length"]),value:i.length})}(n,t,r,e);case 3:return function(n,t,r,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=t.concat([u]);r.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=t.concat([u]);r.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n})}u++}))}(n,t,r,e)}},M:function(n,t,r,e){r.push({op:"replace",path:[],value:t===H?void 0:t}),e.push({op:"replace",path:[],value:n.t})}})}function C(){function t(n,t){function r(){this.constructor=n}a(n,t),n.prototype=(r.prototype=t.prototype,new r)}function e(n){n.o||(n.D=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(t){if(r(t)){var e=R(n.A.h,t,n);n.p.set(t,e),n.o.add(e)}else n.o.add(t)})))}function u(t){t.O&&n(3,JSON.stringify(p(t)))}var a=function(n,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var r in t)t.hasOwnProperty(r)&&(n[r]=t[r])})(n,t)},f=function(){function n(n,t){return this[Q]={i:2,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,D:void 0,t:n,k:this,C:!1,O:!1},this}t(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,t){var r=this[Q];return u(r),p(r).has(n)&&p(r).get(n)===t||(e(r),k(r),r.D.set(n,!0),r.o.set(n,t),r.D.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),e(t),k(t),t.D.set(n,!1),t.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.D=new Map,i(n.t,(function(t){n.D.set(t,!1)})),n.o.clear())},o.forEach=function(n,t){var r=this;p(this[Q]).forEach((function(e,i){n.call(t,r.get(i),i,r)}))},o.get=function(n){var t=this[Q];u(t);var i=p(t).get(n);if(t.I||!r(i))return i;if(i!==t.t.get(n))return i;var o=R(t.A.h,i,t);return e(t),t.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.values()},n.next=function(){var n=r.next();return n.done?n:{done:!1,value:t.get(n.value)}},n},o.entries=function(){var n,t=this,r=this.keys();return(n={})[V]=function(){return t.entries()},n.next=function(){var n=r.next();if(n.done)return n;var e=t.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,t){return this[Q]={i:3,l:t,A:t?t.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,O:!1,C:!1},this}t(n,Set);var r=n.prototype;return Object.defineProperty(r,"size",{get:function(){return p(this[Q]).size}}),r.has=function(n){var t=this[Q];return u(t),t.o?!!t.o.has(n)||!(!t.p.has(n)||!t.o.has(t.p.get(n))):t.t.has(n)},r.add=function(n){var t=this[Q];return u(t),this.has(n)||(o(t),k(t),t.o.add(n)),this},r.delete=function(n){if(!this.has(n))return!1;var t=this[Q];return u(t),o(t),k(t),t.o.delete(n)||!!t.p.has(n)&&t.o.delete(t.p.get(n))},r.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},r.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},r.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},r.keys=function(){return this.values()},r[V]=function(){return this.values()},r.forEach=function(n,t){for(var r=this.values(),e=r.next();!e.done;)n.call(t,e.value,e.value,this),e=r.next()},n}();m("MapSet",{N:function(n,t){return new f(n,t)},T:function(n,t){return new c(n,t)}})}function J(){N(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X="undefined"!=typeof Map,q="undefined"!=typeof Set,B="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W?Symbol.for("immer-nothing"):((G={})["immer-nothing"]=!0,G),L=W?Symbol.for("immer-draftable"):"__$immer_draftable",Q=W?Symbol.for("immer-state"):"__$immer_state",V="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return"Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return"Unsupported patch operation: "+n},18:function(n){return"The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return"'current' expects a draft, got: "+n},23:function(n){return"'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,tn=Object.getOwnPropertyDescriptors||function(n){var t={};return nn(n).forEach((function(r){t[r]=Object.getOwnPropertyDescriptor(n,r)})),t},rn={},en={get:function(n,t){if(t===Q)return n;var e=p(n);if(!u(e,t))return function(n,t,r){var e,i=I(t,r);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,t);var i=e[t];return n.I||!r(i)?i:i===z(n.t,t)?(E(n),n.o[t]=R(n.A.h,i,n)):i},has:function(n,t){return t in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,t,r){var e=I(p(n),t);if(null==e?void 0:e.set)return e.set.call(n.k,r),!0;if(!n.P){var i=z(p(n),t),o=null==i?void 0:i[Q];if(o&&o.t===r)return n.o[t]=r,n.D[t]=!1,!0;if(c(r,i)&&(void 0!==r||u(n.t,t)))return!0;E(n),k(n)}return n.o[t]===r&&"number"!=typeof r&&(void 0!==r||t in n.o)||(n.o[t]=r,n.D[t]=!0,!0)},deleteProperty:function(n,t){return void 0!==z(n.t,t)||t in n.t?(n.D[t]=!1,E(n),k(n)):delete n.D[t],n.o&&delete n.o[t],!0},getOwnPropertyDescriptor:function(n,t){var r=p(n),e=Reflect.getOwnPropertyDescriptor(r,t);return e?{writable:!0,configurable:1!==n.i||"length"!==t,enumerable:e.enumerable,value:r[t]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,t){on[n]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),on.deleteProperty=function(t,r){return false&&0,en.deleteProperty.call(this,t[0],r)},on.set=function(t,r,e){return false&&0,en.set.call(this,t[0],r,e,t[0])};var un=function(){function e(t){var e=this;this.g=B,this.F=!0,this.produce=function(t,i,o){if("function"==typeof t&&"function"!=typeof i){var u=i;i=t;var a=e;return function(n){var t=this;void 0===n&&(n=u);for(var r=arguments.length,e=Array(r>1?r-1:0),o=1;o<r;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var r;return(r=i).call.apply(r,[t,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),r(t)){var c=w(e),s=R(e,t,void 0),v=!0;try{f=i(s),v=!1}finally{v?O(c):g(c)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw O(c),n})):(j(c,o),P(f,c))}if(!t||"object"!=typeof t){if((f=i(t))===H)return;return void 0===f&&(f=t),e.F&&d(f,!0),f}n(21,t)},this.produceWithPatches=function(n,t){return"function"==typeof n?function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return e.produceWithPatches(t,(function(t){return n.apply(void 0,[t].concat(i))}))}:[e.produce(n,t,(function(n,t){r=n,i=t})),r,i];var r,i},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){r(e)||n(8),t(e)&&(e=D(e));var i=w(this),o=R(this,e,void 0);return o[Q].C=!0,g(i),o},i.finishDraft=function(t,r){var e=t&&t[Q]; false&&(0);var i=e.A;return j(i,r),P(void 0,i)},i.setAutoFreeze=function(n){this.F=n},i.setUseProxies=function(t){t&&!B&&n(20),this.g=t},i.applyPatches=function(n,r){var e;for(e=r.length-1;e>=0;e--){var i=r[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}var o=b("Patches").$;return t(n)?o(n,r):this.produce(n,(function(n){return o(n,r.slice(e+1))}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
//# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 34539:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(24827);
} else {}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
/***/ 83156:
=======
/***/ 83554:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iJ": () => (/* binding */ inputText),
  "Mx": () => (/* binding */ pasteImage),
  "X2": () => (/* binding */ pasteInstagram),
  "M1": () => (/* binding */ pasteText)
});

;// CONCATENATED MODULE: ../injected-script/shared/index.ts
const CustomEventId = 'c8a6c18e-f6a3-472a-adf3-5335deb80db6';

;// CONCATENATED MODULE: ../injected-script/sdk/index.ts

function raw_send(name, ...params) {
    document.dispatchEvent(new CustomEvent(CustomEventId, {
        cancelable: true,
        bubbles: true,
        detail: JSON.stringify([
            name,
            params
        ])
    }));
}
function pasteText(text) {
    raw_send('paste', text);
}
function pasteImage(image) {
    raw_send('pasteImage', Array.from(image));
}
function pasteInstagram(url) {
    raw_send('instagramUpload', url);
}
function inputText(text) {
    raw_send('input', text);
}


/***/ }),

<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
/***/ 26940:
=======
/***/ 83071:
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D0": () => (/* binding */ DebounceButton),
/* harmony export */   "ZP": () => (/* binding */ ActionButton),
/* harmony export */   "Zc": () => (/* binding */ ActionButtonPromise)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81021);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27768);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5726);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86041);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(14177);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(60455);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47480);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36198);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(16145);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8325);
=======
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89730);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91377);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98181);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(98010);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40870);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8239);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83849);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(83693);
/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59603);
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44713);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js










const circle = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    color: "inherit",
    size: 18
});
function useDebounceAsync(asyncFn) {
    // useAsyncFn use T | [] as it's parameter where is conflict with our usage.
    // We should ensure always call startAsyncFn with parameters.
    const [state, startAsyncFn] = (0,react_use__WEBPACK_IMPORTED_MODULE_11__/* .default */ .Z)(asyncFn, [
        asyncFn
    ], {
        loading: false,
        value: undefined
    });
    // Sync the debounce state after 500ms
    const [debounceLoading, setDebounceLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react_use__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)(()=>setDebounceLoading(state.loading)
    , 500, [
        state
    ]);
    const f = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((...args)=>{
        if (!state.loading) {
            setDebounceLoading(false);
            startAsyncFn(...args);
        }
    }, [
        startAsyncFn,
        state.loading
    ]);
    // loading 0ms to 500ms: disabled, !loading
    // loading 500ms+: disabled, loading
    if (state.loading) return {
        f,
        disabled: true,
        loading: debounceLoading
    };
    // The debounceLoading is invalidated, refresh it now (instead of waiting for 500ms)
    if (debounceLoading) setDebounceLoading(false);
    // If the task is not running, ignore the throttledLoading
    return {
        disabled: false,
        loading: false,
        f
    };
}
function DebounceButton(_props) {
    const { onClick , color , ...props } = _props;
    const classes = (0,_utils_theme__WEBPACK_IMPORTED_MODULE_4__/* .useErrorStyles */ .B6)();
    const { f , loading  } = useDebounceAsync(onClick);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        startIcon: loading ? circle : undefined,
        disabled: loading,
        onClick: f,
        classes: color === 'danger' ? classes : undefined,
        color: color === 'danger' ? 'primary' : color,
        ...props
    }));
}
function ActionButton(props) {
    const { width , loading , children , className , style , ...rest } = props;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        disableElevation: true,
        disabled: loading,
        startIcon: loading && circle,
        className: 'actionButton ' + className,
        style: {
            width,
            ...style
        },
        children: children,
        ...rest
    }));
};
function ActionButtonPromise(props) {
    const { classes  } = useStyles();
    const { executor , complete , failed , waiting , init , completeOnClick , waitingOnClick , failedOnClick , completeIcon =/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Check__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
    }) , failIcon =/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    }) , ...b } = props;
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('init');
    const completeClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.success, b.className);
    const failClass = classnames__WEBPACK_IMPORTED_MODULE_3___default()(classes.failed, b.className);
    const run = ()=>{
        setState('wait');
        executor().then(()=>setState('complete')
        , ()=>setState('fail')
        );
    };
    const cancel = ()=>{
        const p = waitingOnClick === null || waitingOnClick === void 0 ? void 0 : waitingOnClick();
        p && setState(p);
    };
    const completeClick = completeOnClick === 'use executor' ? run : completeOnClick;
    const failClick = failedOnClick === 'use executor' ? run : failedOnClick;
    if (state === 'wait') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        startIcon: circle,
        disabled: !waitingOnClick,
        children: waiting,
        onClick: cancel
    }));
    if (state === 'complete') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        disabled: !completeClick,
        startIcon: completeIcon,
        children: complete,
        className: completeClass,
        onClick: completeClick
    }));
    if (state === 'fail') return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        disabled: !failClick,
        startIcon: failIcon,
        children: failed,
        className: failClass,
        onClick: failClick
    }));
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        ...b,
        children: init,
        onClick: run
    }));
}
const useStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()({
    success: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[500] */ .Z[500],
        '&:hover': {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[700] */ .Z[700]
        }
    },
    failed: {
        backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__/* .default[500] */ .Z[500],
        '&:hover': {
            backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_10__/* .default[700] */ .Z[700]
        }
    }
});


/***/ }),

/***/ 25830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "Ql": () => (/* binding */ ServicesWithProgress)
/* harmony export */ });
/* unused harmony export Services */
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
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
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
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
    , 'Welcome'),
    Steganography: add(()=>Promise.all(/* import() */[__webpack_require__.e(2908), __webpack_require__.e(1404)]).then(__webpack_require__.bind(__webpack_require__, 51404))
    , 'Steganography'),
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
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
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
    , 'Settings'),
    ThirdPartyPlugin: add(()=>__webpack_require__.e(/* import() */ 3813).then(__webpack_require__.bind(__webpack_require__, 33813))
    , 'ThirdPartyPlugin')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6739), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(9632), __webpack_require__.e(3906), __webpack_require__.e(9711), __webpack_require__.e(8405), __webpack_require__.e(1407)]).then(__webpack_require__.bind(__webpack_require__, 61483))
=======
const ServicesWithProgress = add(()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(4023), __webpack_require__.e(4586), __webpack_require__.e(5178), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6739), __webpack_require__.e(3693), __webpack_require__.e(2943), __webpack_require__.e(826), __webpack_require__.e(1325), __webpack_require__.e(398), __webpack_require__.e(6076), __webpack_require__.e(256)]).then(__webpack_require__.bind(__webpack_require__, 50256))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
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

/***/ 18526:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

;// CONCATENATED MODULE: ./src/polyfill/ecmascript/Intl/ListFormat.ts
// A simple polyfill. Enough for us.
if (!Intl.ListFormat) {
    Intl.ListFormat = class _class {
        format(string) {
            const locale = typeof this.locales === 'string' ? this.locales : navigator.language;
            if (locale.startsWith('zh')) return string.join('、');
            if (locale.startsWith('ja')) return string.join('、');
            return string.join(', ');
        }
        constructor(locales, options){
            this.locales = locales;
        }
    };
}


;// CONCATENATED MODULE: ./src/polyfill/ecmascript/Intl/index.ts


;// CONCATENATED MODULE: ./src/polyfill/ecmascript/index.ts


// EXTERNAL MODULE: ../../node_modules/.pnpm/clipboard-polyfill@3.0.3/node_modules/clipboard-polyfill/dist/overwrite-globals/clipboard-polyfill.overwrite-globals.esm.js
var clipboard_polyfill_overwrite_globals_esm = __webpack_require__(82726);
;// CONCATENATED MODULE: ./src/polyfill/web-apis/implementation/EventTarget.constructor.ts
var ref;
// This file make EventTarget newable & extendable
// Remove this file after iOS 14- is dropped.
if (typeof ((ref = globalThis.EventTarget) === null || ref === void 0 ? void 0 : ref.call) === 'function') {
    try {
        new EventTarget();
    } catch  {
        shim();
    }
}
function shim() {
    globalThis.EventTarget = new Proxy(EventTarget, {
        construct () {
            return new AbortController().signal;
        }
    });
}


;// CONCATENATED MODULE: ./src/polyfill/web-apis/worker.ts


;// CONCATENATED MODULE: ./src/polyfill/web-apis/index.ts
// DOM polyfills

// WorkerGlobalScope polyfills


;// CONCATENATED MODULE: ./src/polyfill/index.ts
/// <reference path="./global.d.ts" />
// See ./README.md


if (false) {}


/***/ }),

/***/ 71299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vv": () => (/* binding */ debugModeSetting),
/* harmony export */   "zs": () => (/* binding */ allPostReplacementSettings),
/* harmony export */   "OF": () => (/* binding */ appearanceSettings),
/* harmony export */   "pQ": () => (/* binding */ languageSettings),
/* harmony export */   "G": () => (/* binding */ currentSelectedIdentity),
/* harmony export */   "AI": () => (/* binding */ currentSetupGuideStatus),
/* harmony export */   "uZ": () => (/* binding */ currentPluginEnabledStatus),
/* harmony export */   "pL": () => (/* binding */ currentImportingBackup),
/* harmony export */   "i4": () => (/* binding */ launchPageSettings),
/* harmony export */   "cn": () => (/* binding */ currentPersonaIdentifier)
/* harmony export */ });
/* unused harmony exports currentImagePayloadStatus, newDashboardConnection */
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

/***/ 54061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ facebookBase),
/* harmony export */   "X": () => (/* binding */ facebookWorkerBase)
/* harmony export */ });
const origins = [
    'https://www.facebook.com/*',
    'https://m.facebook.com/*',
    'https://facebook.com/*'
];
const facebookBase = {
    networkIdentifier: 'facebook.com',
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('facebook.com');
    }
};
const facebookWorkerBase = {
    ...facebookBase,
    gunNetworkHint: ''
};


/***/ }),

/***/ 61056:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./src/social-network/index.ts
var social_network = __webpack_require__(45513);
// EXTERNAL MODULE: ./src/social-network-adaptor/facebook.com/base.ts
var base = __webpack_require__(54061);
;// CONCATENATED MODULE: ./src/social-network-adaptor/facebook.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...base/* facebookBase */.q,
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(6357), __webpack_require__.e(405), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(23), __webpack_require__.e(1256), __webpack_require__.e(9134)]).then(__webpack_require__.bind(__webpack_require__, 86669))
=======
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6357), __webpack_require__.e(3294), __webpack_require__.e(405), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(1330), __webpack_require__.e(1207), __webpack_require__.e(3840)]).then(__webpack_require__.bind(__webpack_require__, 31143))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...base/* facebookWorkerBase */.X,
    load: ()=>__webpack_require__.e(/* import() */ 8617).then(__webpack_require__.bind(__webpack_require__, 98617))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/twitter.com/base.ts
var twitter_com_base = __webpack_require__(14840);
;// CONCATENATED MODULE: ./src/social-network-adaptor/twitter.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...twitter_com_base/* twitterBase */.oQ,
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(3294), __webpack_require__.e(6357), __webpack_require__.e(405), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(7696), __webpack_require__.e(3322), __webpack_require__.e(5848), __webpack_require__.e(23), __webpack_require__.e(1256), __webpack_require__.e(3375), __webpack_require__.e(2650), __webpack_require__.e(7469), __webpack_require__.e(3148), __webpack_require__.e(4795)]).then(__webpack_require__.bind(__webpack_require__, 44239))
=======
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(3617), __webpack_require__.e(4162), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(6357), __webpack_require__.e(3294), __webpack_require__.e(405), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(7696), __webpack_require__.e(9658), __webpack_require__.e(1330), __webpack_require__.e(1207), __webpack_require__.e(3375), __webpack_require__.e(8412), __webpack_require__.e(5428), __webpack_require__.e(6346), __webpack_require__.e(9210), __webpack_require__.e(4583)]).then(__webpack_require__.bind(__webpack_require__, 16331))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...twitter_com_base/* twitterWorkerBase */.x,
    load: ()=>__webpack_require__.e(/* import() */ 3377).then(__webpack_require__.bind(__webpack_require__, 73377))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/instagram.com/base.ts
var instagram_com_base = __webpack_require__(95415);
;// CONCATENATED MODULE: ./src/social-network-adaptor/instagram.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...instagram_com_base/* instagramBase */.j,
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(3294), __webpack_require__.e(6357), __webpack_require__.e(6739), __webpack_require__.e(405), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(23), __webpack_require__.e(1256), __webpack_require__.e(8531)]).then(__webpack_require__.bind(__webpack_require__, 8547))
=======
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(6357), __webpack_require__.e(3294), __webpack_require__.e(6739), __webpack_require__.e(405), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(1330), __webpack_require__.e(1207), __webpack_require__.e(210)]).then(__webpack_require__.bind(__webpack_require__, 58392))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...instagram_com_base/* instagramWorkerBase */.x,
    load: ()=>__webpack_require__.e(/* import() */ 2102).then(__webpack_require__.bind(__webpack_require__, 22102))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

// EXTERNAL MODULE: ./src/social-network-adaptor/minds.com/base.ts
var minds_com_base = __webpack_require__(87595);
;// CONCATENATED MODULE: ./src/social-network-adaptor/minds.com/index.ts


(0,social_network.defineSocialNetworkUI)({
    ...minds_com_base/* mindsBase */.NE,
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(3294), __webpack_require__.e(6357), __webpack_require__.e(405), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(5848), __webpack_require__.e(23), __webpack_require__.e(1256), __webpack_require__.e(3375), __webpack_require__.e(7469), __webpack_require__.e(8426)]).then(__webpack_require__.bind(__webpack_require__, 50283))
=======
    load: ()=>Promise.all(/* import() */[__webpack_require__.e(2876), __webpack_require__.e(2701), __webpack_require__.e(9759), __webpack_require__.e(2908), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8000), __webpack_require__.e(8393), __webpack_require__.e(4570), __webpack_require__.e(6357), __webpack_require__.e(3294), __webpack_require__.e(405), __webpack_require__.e(3758), __webpack_require__.e(7604), __webpack_require__.e(6912), __webpack_require__.e(2245), __webpack_require__.e(9658), __webpack_require__.e(1330), __webpack_require__.e(1207), __webpack_require__.e(3375), __webpack_require__.e(5428), __webpack_require__.e(4520)]).then(__webpack_require__.bind(__webpack_require__, 4441))
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});
(0,social_network.defineSocialNetworkWorker)({
    ...minds_com_base/* mindsWorkerBase */.fy,
    load: ()=>__webpack_require__.e(/* import() */ 4746).then(__webpack_require__.bind(__webpack_require__, 64746))
    ,
    hotModuleReload (callback) {
        if (false) {}
    }
});

;// CONCATENATED MODULE: ./src/social-network-adaptor/index.ts






/***/ }),

/***/ 95415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 87595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NE": () => (/* binding */ mindsBase),
/* harmony export */   "Sf": () => (/* binding */ isMinds),
/* harmony export */   "fy": () => (/* binding */ mindsWorkerBase)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37186);

const id = 'minds.com';
const origins = [
    'https://www.minds.com/*',
    'https://minds.com/*'
];
const mindsBase = {
    networkIdentifier: id,
    declarativePermissions: {
        origins
    },
    shouldActivate (location) {
        return location.hostname.endsWith('minds.com');
    },
    notReadyForProduction: !_utils__WEBPACK_IMPORTED_MODULE_0__/* .Flags.v2_enabled */ .vU.v2_enabled
};
function isMinds(ui) {
    return ui.networkIdentifier === id;
}
const mindsWorkerBase = {
    ...mindsBase,
    gunNetworkHint: 'minds-'
};


/***/ }),

/***/ 14840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 54003:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ notNullable)
/* harmony export */ });
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57579);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);

const notInclude = (val, things, message)=>{
    things.forEach((value)=>{
        (0,assert__WEBPACK_IMPORTED_MODULE_0__.notStrictEqual)(val, value, message);
    });
};
/**
 * Ensure a value not null or undefined.
 */ const notNullable = (val, message = 'Unexpected nil value detected')=>{
    notInclude(val, [
        null,
        undefined
    ], message);
    return val;
};


/***/ }),

/***/ 29711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ collectNodeText)
/* harmony export */ });
function collectNodeText(node, options = {
}) {
    if (!node) return '';
    if (!node.querySelector('a,img')) return node.innerText;
    return [
        ...node.childNodes
    ].map((each)=>{
        if (each.nodeType === document.TEXT_NODE) return each.nodeValue || '';
        if (each instanceof HTMLAnchorElement) {
            var ref;
            const result = (ref = options.onHTMLAnchorElement) === null || ref === void 0 ? void 0 : ref.call(options, each);
            if (result === null || result === void 0 ? void 0 : result.some) return result.val;
            const href = each.getAttribute('href');
            return href || each.innerText;
        }
        if (each instanceof HTMLImageElement) return each.alt;
        if (each instanceof HTMLElement) return collectNodeText(each, options);
        return '';
    }).join('');
}


/***/ }),

/***/ 37094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useMatchXS)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77504);

function useMatchXS() {
    return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)((theme)=>theme.breakpoints.down('sm')
    , {
        defaultMatches:  true ? true : 0
    });
}


/***/ }),

/***/ 17972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ useMenu)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42515);
/* harmony import */ var _shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33465);



/**
 * A util hooks for easier to use `<Menu>`s.
 * @param menus Material UI `<MenuItem />` elements
 */ function useMenu(elements, anchorSibling = false, props, useShadowRoot = true) {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const anchorElRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const close = ()=>setOpen(false)
    ;
    return [
        /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(useShadowRoot ? _shadow_root_ShadowRootComponents__WEBPACK_IMPORTED_MODULE_1__/* .ShadowRootMenu */ .dy : _material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
            PaperProps: props === null || props === void 0 ? void 0 : props.paperProps,
            MenuListProps: props === null || props === void 0 ? void 0 : props.menuListProps,
            open: open,
            anchorEl: anchorElRef.current,
            onClose: close,
            onClick: close
        }, elements === null || elements === void 0 ? void 0 : elements.map((element, key)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element) ? /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element, {
                ...element.props,
                key
            }) : element
        )),
        (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((anchorElOrEvent)=>{
            let element;
            if (anchorElOrEvent instanceof HTMLElement) {
                element = anchorElOrEvent;
            } else {
                element = anchorElOrEvent.currentTarget;
            }
            var ref;
            // when the essential content of currentTarget would be closed over,
            //  we can set the anchorEl with currentTarget's bottom sibling to avoid it.
            anchorElRef.current = anchorSibling ? (ref = element.nextElementSibling) !== null && ref !== void 0 ? ref : undefined : element;
            setOpen(true);
        }, []), 
    ];
}


/***/ }),

/***/ 41550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ useQueryNavigatorPermission)
/* harmony export */ });
/* unused harmony export checkPermissionApiUsability */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34539);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55);
/** This file is published under MIT License */ 


const q = [
    'query',
    'request',
    'revoke'
];
function checkPermissionApiUsability(type) {
    const r = {
    };
    for (const v of q){
        r[v] = (0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.hasIn)(navigator, `permissions.${v}`);
    }
    if (type) {
        return r[type];
    }
    return r;
}
function useQueryNavigatorPermission(needRequest, name) {
    const [permission, updatePermission] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('prompt');
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // TODO: Only camera related APi need to check Flags.has_no_WebRTC
        if (!needRequest || permission !== 'prompt' || _flags__WEBPACK_IMPORTED_MODULE_2__/* .Flags.has_no_WebRTC */ .vU.has_no_WebRTC) return;
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


/***/ }),

/***/ 33465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p_": () => (/* binding */ ShadowRootTooltip),
/* harmony export */   "dy": () => (/* binding */ ShadowRootMenu),
/* harmony export */   "sV": () => (/* binding */ ShadowRootPopper)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47307);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42515);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91371);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53688);


const ShadowRootTooltip = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedPopperComponent */ .vg)(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z);
const ShadowRootMenu = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z);
const ShadowRootPopper = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_0__/* .createShadowRootForwardedComponent */ .lr)(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z);


/***/ }),

/***/ 44713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hz": () => (/* binding */ getMaskbookTheme),
/* harmony export */   "Uk": () => (/* binding */ useClassicMaskTheme),
/* harmony export */   "Nh": () => (/* binding */ useColorStyles),
/* harmony export */   "B6": () => (/* binding */ useErrorStyles),
/* harmony export */   "Ql": () => (/* binding */ extendsTheme)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11494);
/* harmony import */ var _masknet_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53688);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95142);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87872);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(77504);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56019);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87271);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8239);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(40870);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5101);
/* harmony import */ var _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26197);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34539);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71299);
/* harmony import */ var _social_network__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45513);














function getFontFamily(monospace) {
    // We want to look native.
    // Windows has no CJK sans monospace. Accommodate that.
    // We only use it for fingerprints anyway so CJK coverage ain't a problem... yet.
    const monofont = navigator.platform.startsWith('Win') ? 'Consolas, monospace' : 'monospace';
    // https://caniuse.com/font-family-system-ui
    // Firefox does NOT support yet it in any form on Windows, but tests indicate that it agrees with Edge in using the UI font for sans-serif:
    // Microsoft YaHei on zh-Hans-CN.
    return !monospace ? '-apple-system, system-ui, sans-serif' : monofont;
}
const base = {
    palette: {
        primary: {
            main: '#1c68f3'
        },
        secondary: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z,
        text: {
            hint: 'rgba(0, 0, 0, 0.38)'
        }
    },
    typography: {
        fontFamily: getFontFamily()
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1112,
            lg: 1280,
            xl: 1920
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'hover'
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    minWidth: '100px'
                }
            },
            defaultProps: {
                size: 'small',
                disableElevation: true
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    padding: '0',
                    // up-sm
                    '@media screen and (min-width: 600px)': {
                        minWidth: 160
                    }
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: '12px'
                }
            }
        }
    }
};
const lightThemePatch = {
    palette: {
        mode: 'light'
    }
};
const darkThemePatch = {
    palette: {
        mode: 'dark',
        background: {
            paper: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_9__/* .default[900] */ .Z[900]
        }
    },
    components: {
        MuiPaper: {
            // https://github.com/mui-org/material-ui/pull/25522
            styleOverrides: {
                root: {
                    backgroundImage: 'unset'
                }
            }
        }
    }
};
const baseTheme = (theme)=>{
    if (theme === 'light') return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(base), lightThemePatch);
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(base), darkThemePatch);
};
// Theme
const MaskbookLightTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme('light'));
const MaskbookDarkTheme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme('dark'));
function getMaskbookTheme(opt) {
    var ref;
    let language = opt === null || opt === void 0 ? void 0 : opt.language;
    if (!language) {
        const settings = _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .languageSettings.value */ .pQ.value;
        // TODO:
        if (settings === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
        else language = settings;
    }
    if (!language) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
    var ref1;
    const preference = (ref1 = opt === null || opt === void 0 ? void 0 : opt.appearance) !== null && ref1 !== void 0 ? ref1 : _settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .appearanceSettings.value */ .OF.value;
    // Priority:
    // PaletteModeProvider (in SNS adaptor) > User preference > OS preference
    const isDarkBrowser = matchMedia('(prefers-color-scheme: dark)').matches;
    const detectedPalette = (ref = _social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.current.value;
    let isDark = isDarkBrowser && preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.default */ .um.default || preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.dark */ .um.dark;
    if (detectedPalette) {
        isDark = detectedPalette === 'dark';
    } else if (preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.default */ .um.default) {
        isDark = isDarkBrowser;
    } else {
        isDark = preference === _masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .Appearance.dark */ .um.dark;
    }
    const baseTheme1 = isDark ? MaskbookDarkTheme : MaskbookLightTheme;
    switch(language){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS:
            return baseTheme1;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.jaJP */ .iu.jaJP:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .jaJP */ .jz);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.koKR */ .iu.koKR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .koKR */ .uG);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhTW */ .iu.zhTW:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .zhTW */ .cj);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.zhCN */ .iu.zhCN:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .zhCN */ .U1);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.ruRU */ .iu.ruRU:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .ruRU */ .nx);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.itIT */ .iu.itIT:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .itIT */ .KL);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.esES */ .iu.esES:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .esES */ ._Y);
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.frFR */ .iu.frFR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .frFR */ .gQ);
        // TODO: it should be a RTL theme.
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.faIR */ .iu.faIR:
            return (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)(baseTheme1, _material_ui_core_locale_index__WEBPACK_IMPORTED_MODULE_11__/* .faIR */ .Tj);
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_1__/* .safeUnreachable */ .P)(language);
            return baseTheme1;
    }
}
// We're developing a new theme in the theme/ package
function useClassicMaskTheme(opt) {
    var ref;
    const langSettingsValue = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .languageSettings */ .pQ);
    let language = opt === null || opt === void 0 ? void 0 : opt.language;
    if (!language) {
        // TODO:
        if (langSettingsValue === _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .LanguageOptions.__auto__ */ .P7.__auto__) language = _masknet_public_api__WEBPACK_IMPORTED_MODULE_3__/* .SupportedLanguages.enUS */ .iu.enUS;
        else language = langSettingsValue;
    }
    const appearance = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.or)(opt === null || opt === void 0 ? void 0 : opt.appearance, (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(_settings_settings__WEBPACK_IMPORTED_MODULE_6__/* .appearanceSettings */ .OF));
    const systemPreference = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z)('(prefers-color-scheme: dark)');
    const paletteProvider = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(((ref = _social_network__WEBPACK_IMPORTED_MODULE_7__.activatedSocialNetworkUI.customization.paletteMode) === null || ref === void 0 ? void 0 : ref.current) || new _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_13__.ValueRef('light')).current;
    const palette = (0,_masknet_shared__WEBPACK_IMPORTED_MODULE_0__.useValueRef)(paletteProvider);
    return (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>getMaskbookTheme({
            appearance,
            language
        })
    , [
        language,
        appearance,
        systemPreference,
        palette
    ]);
}
const useColorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        error: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900]
        },
        success: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_15__/* .default[800] */ .Z[800]
        },
        info: {
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_16__/* .default[800] */ .Z[800]
        }
    };
});
const useErrorStyles = (0,_masknet_theme__WEBPACK_IMPORTED_MODULE_2__/* .makeStyles */ .ZL)()((theme)=>{
    const dark = theme.palette.mode === 'dark';
    return {
        containedPrimary: {
            backgroundColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            '&:hover': {
                backgroundColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[700] */ .Z[700]
            }
        },
        outlinedPrimary: {
            borderColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            color: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[500] */ .Z[500] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900],
            '&:hover': {
                borderColor: dark ? _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[900] */ .Z[900] : _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_14__/* .default[700] */ .Z[700]
            }
        }
    };
});
function extendsTheme(extend) {
    return (theme)=>(0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.merge)((0,lodash_es__WEBPACK_IMPORTED_MODULE_4__.cloneDeep)(theme), extend(theme))
    ;
}


/***/ }),

/***/ 28563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GI": () => (/* binding */ isBackupJSONFileVersion2),
/* harmony export */   "nl": () => (/* binding */ upgradeFromBackupJSONFileVersion1),
/* harmony export */   "a6": () => (/* binding */ patchNonBreakingUpgradeForBackupJSONFileVersion2)
/* harmony export */ });
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14840);
/* harmony import */ var _social_network_adaptor_facebook_com_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(54061);



function isBackupJSONFileVersion2(obj) {
    var ref, ref1, ref2, ref3;
    return ((ref = obj) === null || ref === void 0 ? void 0 : (ref1 = ref._meta_) === null || ref1 === void 0 ? void 0 : ref1.version) === 2 && ((ref2 = obj) === null || ref2 === void 0 ? void 0 : (ref3 = ref2._meta_) === null || ref3 === void 0 ? void 0 : ref3.type) === 'maskbook-backup';
}
function upgradeFromBackupJSONFileVersion1(json) {
    const personas = [];
    const profiles = [];
    function addPersona(record) {
        const prev = personas.find((x)=>x.identifier === record.identifier
        );
        if (prev) {
            Object.assign(prev, record);
            prev.linkedProfiles.push(...record.linkedProfiles);
        } else personas.push({
            ...record,
            updatedAt: 0,
            createdAt: 0
        });
    }
    function addProfile(record) {
        const prev = profiles.find((x)=>x.identifier === record.identifier
        );
        if (prev) {
            Object.assign(prev, record);
        } else profiles.push({
            ...record,
            updatedAt: 0,
            createdAt: 0
        });
    }
    for (const x of json.whoami){
        const profile = new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(x.network, x.userId).toText();
        const persona = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(x.publicKey).toText();
        addProfile({
            identifier: profile,
            linkedPersona: persona,
            localKey: x.localKey,
            nickname: x.nickname
        });
        addPersona({
            identifier: persona,
            linkedProfiles: [
                [
                    profile,
                    {
                        connectionConfirmState: 'confirmed'
                    }
                ]
            ],
            publicKey: x.publicKey,
            privateKey: x.privateKey,
            localKey: x.localKey,
            nickname: x.nickname
        });
    }
    for (const x1 of json.people || []){
        const profile = new _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO(x1.network, x1.userId);
        const persona = (0,_database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(x1.publicKey).toText();
        addProfile({
            identifier: profile.toText(),
            linkedPersona: persona,
            nickname: x1.nickname
        });
        addPersona({
            identifier: persona,
            linkedProfiles: [
                [
                    profile.toText(),
                    {
                        connectionConfirmState: 'confirmed'
                    }
                ]
            ],
            publicKey: x1.publicKey,
            nickname: x1.nickname
        });
    }
    return {
        _meta_: {
            version: 2,
            type: 'maskbook-backup',
            maskbookVersion: json.maskbookVersion,
            createdAt: 0
        },
        posts: [],
        wallets: [],
        personas,
        profiles,
        userGroups: [],
        grantedHostPermissions: json.grantedHostPermissions
    };
}
function patchNonBreakingUpgradeForBackupJSONFileVersion2(json) {
    var _wallets;
    json.wallets = (_wallets = json.wallets) !== null && _wallets !== void 0 ? _wallets : [];
    const permissions = new Set(json.grantedHostPermissions);
    if (json.grantedHostPermissions.some((x)=>x.includes('twitter.com')
    )) {
        const a = _social_network_adaptor_twitter_com_base__WEBPACK_IMPORTED_MODULE_1__/* .twitterBase.declarativePermissions.origins */ .oQ.declarativePermissions.origins;
        a.forEach((x)=>permissions.add(x)
        );
    }
    if (json.grantedHostPermissions.some((x)=>x.includes('facebook.com')
    )) {
        const a = _social_network_adaptor_facebook_com_base__WEBPACK_IMPORTED_MODULE_2__/* .facebookBase.declarativePermissions.origins */ .q.declarativePermissions.origins;
        a.forEach((x)=>permissions.add(x)
        );
    }
    return json;
}


/***/ }),

/***/ 96578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Vs": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_4__.timeout),
/* harmony export */   "gw": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_4__.delay),
/* harmony export */   "GR": () => (/* binding */ downloadUrl),
/* harmony export */   "bF": () => (/* binding */ pasteImageToActiveElements),
/* harmony export */   "Ms": () => (/* binding */ selectElementContents),
/* harmony export */   "ZB": () => (/* binding */ regexMatch),
/* harmony export */   "zA": () => (/* binding */ regexMatchAll),
/* harmony export */   "aP": () => (/* binding */ batchReplace),
/* harmony export */   "iu": () => (/* binding */ addUint8Array),
/* harmony export */   "Lk": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_4__.parseURL),
/* harmony export */   "PQ": () => (/* binding */ defer),
/* harmony export */   "Cw": () => (/* binding */ buf2hex),
/* harmony export */   "Yu": () => (/* binding */ hex2buf),
/* harmony export */   "hu": () => (/* binding */ assert),
/* harmony export */   "Se": () => (/* binding */ checkInputLengthExceed)
/* harmony export */ });
/* unused harmony exports nopWithUnmount, nonNullable */
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12139);
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83156);
=======
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92697);
/* harmony import */ var _masknet_injected_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83554);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
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
    (0,_masknet_injected_script__WEBPACK_IMPORTED_MODULE_5__/* .pasteImage */ .Mx)(new Uint8Array(await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_3__/* .blobToArrayBuffer */ .vZ)(image)));
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
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNull)(r)) return null;
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
    if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNull)(r)) {
        return null;
    }
    const sto = [];
    for (const v of r){
        const retV = v.match(o);
        if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.isNull)(retV)) {
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

/***/ 16451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ 23316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useDialogStackConsumer),
/* harmony export */   "y": () => (/* binding */ DialogStackingProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73102);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44737);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34539);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29730);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7683);

/* eslint-disable no-bitwise */ /* eslint-disable @typescript-eslint/prefer-literal-enum-member */ 


/**
 * If you're using <Dialog> solely and you want to support DialogStack, please use this hook.
 *
 * Your dialog component MUST support `style` attribute and `disable`
 * @example
 * function SomeComponent() {
 *     const [open, setOpen] = useState(false)
 *     const {shouldReplaceExitWithBack, extraProps} = useDialogStackConsumer(open)
 *     return <>
 *         <button onClick={() => setOpen(true)}></button>
 *         <Dialog open={open} {...extraProps}>
 *             You MUST hide Close button and and BackButton based on the value of `shouldReplaceExitWithBack`
 *         </Dialog>
 *     </>
 * }
 */ function useDialogStackConsumer(open) {
    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Type.None);
    const { enabled , openDialog , closeDialog  } = useDialogStackingContext();
    const { current: id  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(Math.random());
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        open ? openDialog(id, setStatus) : closeDialog(id);
    }, [
        open
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>()=>closeDialog(id)
    , []);
    const shouldReplaceExitWithBack = !!(status & Type.shouldReplaceExitWithBack);
    const isTop = !!(status & Type.TopMostDialog);
    if (!enabled || !open) return {
        shouldReplaceExitWithBack: false,
        extraProps: {
            open
        }
    };
    if (isTop) return {
        shouldReplaceExitWithBack,
        extraProps: {
            open,
            transitionDuration: shouldReplaceExitWithBack ? 0 : undefined
        }
    };
    return {
        shouldReplaceExitWithBack,
        extraProps: {
            disableEscapeKeyDown: true,
            disableScrollLock: true,
            hideBackdrop: true,
            style: {
                visibility: 'hidden'
            },
            'aria-hidden': true,
            open,
            transitionDuration: shouldReplaceExitWithBack ? 0 : undefined
        }
    };
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
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Provider, {
        initialState: !props.disabled,
        children: props.children
    }));
}
function useDialogStackingContext() {
    try {
        return useContainer();
    } catch  {
        return {
            enabled: false,
            closeDialog: ()=>[]
            ,
            openDialog: ()=>[]
        };
    }
}
var Type;
(function(Type1) {
    Type1[Type1["None"] = 0] = "None";
    Type1[Type1["TopMostDialog"] = 1] = "TopMostDialog";
    Type1[Type1["shouldReplaceExitWithBack"] = 2] = "shouldReplaceExitWithBack";
})(Type || (Type = {
}));
function useStack(enabled = true) {
    const functions = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Map());
    const stack = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);
    function update() {
        for (const [id, update1] of functions.current){
            let result = Type.None;
            if (stack.current.length > 1 && (0,lodash_es__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(stack.current) !== id) result |= Type.shouldReplaceExitWithBack;
            if ((0,lodash_es__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(stack.current) === id) result |= Type.TopMostDialog;
            update1(result);
        }
    }
    return {
        enabled,
        openDialog: (id, onUpdate)=>{
            (functions.current = new Map(functions.current)).set(id, onUpdate);
            stack.current = [
                ...stack.current,
                id
            ];
            update();
        },
        closeDialog: (id)=>{
            (functions.current = new Map(functions.current)).delete(id);
            stack.current = stack.current.filter((x)=>x !== id
            );
            update();
        }
    };
}
const { Provider , useContainer  } = (0,unstated_next__WEBPACK_IMPORTED_MODULE_4__/* .createContainer */ .f)(useStack);


/***/ }),

/***/ 44849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ MaskLightTheme),
/* harmony export */   "Hr": () => (/* binding */ MaskDarkTheme),
/* harmony export */   "ZL": () => (/* reexport safe */ _makeStyles__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "E1": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.E1),
/* harmony export */   "qA": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.qA),
/* harmony export */   "YO": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.YO),
/* harmony export */   "yu": () => (/* reexport safe */ _Components_index__WEBPACK_IMPORTED_MODULE_6__.yu),
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
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/5629.js
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
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/2990.js
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

/***/ 10666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ useERC20TokenTransferCallback)
/* harmony export */ });
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
    const nonce = (0,_useNonce__WEBPACK_IMPORTED_MODULE_6__/* .useNonce */ .X)();
    const gasPrice = (0,_useGasPrice__WEBPACK_IMPORTED_MODULE_7__/* .useGasPrice */ .F)();
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_2__/* .useAccount */ .m)();
    const erc20Contract = (0,_contracts_useERC20TokenContract__WEBPACK_IMPORTED_MODULE_3__/* .useERC20TokenContract */ .x)(address);
    const [transferState, setTransferState] = (0,_useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .useTransactionState */ .p)();
    const transferCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!account || !recipient || !amount || (0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .isZero */ .Fr)(amount) || !erc20Contract) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!wallet_ts__WEBPACK_IMPORTED_MODULE_1__.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficent balance
        const balance = await erc20Contract.methods.balanceOf(account).call();
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_8__/* .isGreaterThan */ .T1)(amount, balance)) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Insufficent balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc20Contract.methods.transfer(recipient, amount).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.FAILED */ .n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc20Contract.methods.transfer(recipient, amount).send(config).on(_types__WEBPACK_IMPORTED_MODULE_5__/* .TransactionEventType.TRANSACTION_HASH */ .iE.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.HASH */ .n.HASH,
                    hash
                });
                resolve(hash);
            }).on(_types__WEBPACK_IMPORTED_MODULE_5__/* .TransactionEventType.ERROR */ .iE.ERROR, (error)=>{
                setTransferState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.FAILED */ .n.FAILED,
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
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setTransferState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
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

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ useERC721TokenTransferCallback)
/* harmony export */ });
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
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_4__/* .useAccount */ .m)();
    const nonce = (0,_useNonce__WEBPACK_IMPORTED_MODULE_7__/* .useNonce */ .X)();
    const gasPrice = (0,_useGasPrice__WEBPACK_IMPORTED_MODULE_8__/* .useGasPrice */ .F)();
    const erc721Contract = (0,_contracts_useERC721TokenContract__WEBPACK_IMPORTED_MODULE_6__/* .useERC721TokenContract */ .n)(address);
    const [transferState, setTransferState] = (0,_useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .useTransactionState */ .p)();
    const transferCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!account || !recipient || !tokenId || !erc721Contract) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!wallet_ts__WEBPACK_IMPORTED_MODULE_1__.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: invalid ownership
        const ownerOf = await erc721Contract.methods.ownerOf(tokenId).call();
        if (!ownerOf || !(0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(ownerOf, account) || (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .isSameAddress */ .Wr)(ownerOf, recipient)) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Invalid ownership')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n.WAIT_FOR_CONFIRMING
        });
        // estimate gas and compose transaction
        const config = {
            from: account,
            gas: await erc721Contract.methods.transferFrom(account, recipient, tokenId).estimateGas({
                from: account
            }).catch((error)=>{
                setTransferState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            nonce
        };
        // send transaction and wait for hash
        return new Promise(async (resolve, reject)=>{
            erc721Contract.methods.transferFrom(account, recipient, tokenId).send(config).on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.TRANSACTION_HASH */ .iE.TRANSACTION_HASH, (hash)=>{
                setTransferState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.HASH */ .n.HASH,
                    hash
                });
                resolve(hash);
            }).on(_types__WEBPACK_IMPORTED_MODULE_2__/* .TransactionEventType.ERROR */ .iE.ERROR, (error)=>{
                setTransferState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
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
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setTransferState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 28557:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useNativeTransferCallback)
/* harmony export */ });
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
    const web3 = (0,_useWeb3__WEBPACK_IMPORTED_MODULE_6__/* .useWeb3 */ .$)();
    const nonce = (0,_useNonce__WEBPACK_IMPORTED_MODULE_7__/* .useNonce */ .X)();
    const gasPrice = (0,_useGasPrice__WEBPACK_IMPORTED_MODULE_8__/* .useGasPrice */ .F)();
    const account = (0,_useAccount__WEBPACK_IMPORTED_MODULE_3__/* .useAccount */ .m)();
    const chainId = (0,_useChainId__WEBPACK_IMPORTED_MODULE_4__/* .useChainId */ .xx)();
    const [transferState, setTransferState] = (0,_useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .useTransactionState */ .p)();
    const transferCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        if (!account || !recipient || !amount || (0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isZero */ .Fr)(amount)) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
            });
            return;
        }
        // error: invalid recipient address
        if (!wallet_ts__WEBPACK_IMPORTED_MODULE_2__.EthereumAddress.isValid(recipient)) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Invalid recipient address')
            });
            return;
        }
        // error: insufficent balance
        const balance = await web3.eth.getBalance(account);
        if ((0,_utils__WEBPACK_IMPORTED_MODULE_9__/* .isGreaterThan */ .T1)(amount, balance)) {
            setTransferState({
                type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
                error: new Error('Insufficent balance')
            });
            return;
        }
        // start waiting for provider to confirm tx
        setTransferState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.WAIT_FOR_CONFIRMING */ .n.WAIT_FOR_CONFIRMING
        });
        // send transaction and wait for hash
        const config = {
            from: account,
            to: recipient,
            gas: await web3.eth.estimateGas({
                from: account,
                to: recipient,
                value: amount,
                data: memo ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_1__.toHex)(memo) : undefined
            }).catch((error)=>{
                setTransferState({
                    type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
                    error
                });
                throw error;
            }),
            gasPrice,
            value: amount,
            data: memo ? (0,web3_utils__WEBPACK_IMPORTED_MODULE_1__.toHex)(memo) : undefined,
            nonce
        };
        // send transaction and wait for hash
        return new Promise((resolve, reject)=>{
            web3.eth.sendTransaction(config, (error, hash)=>{
                if (error) {
                    setTransferState({
                        type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.FAILED */ .n.FAILED,
                        error
                    });
                    reject(error);
                } else {
                    setTransferState({
                        type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.HASH */ .n.HASH,
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
    const resetCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setTransferState({
            type: _useTransactionState__WEBPACK_IMPORTED_MODULE_5__/* .TransactionStateType.UNKNOWN */ .n.UNKNOWN
        });
    }, []);
    return [
        transferState,
        transferCallback,
        resetCallback
    ];
}


/***/ }),

/***/ 40892:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ useTokenTransferCallback)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24402);
/* harmony import */ var _useERC20TokenTransferCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10666);
/* harmony import */ var _useERC721TokenTransferCallback__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94341);
/* harmony import */ var _useNativeTokenTransferCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28557);





function useTokenTransferCallback(type, address, amountOrTokenId, recipient, memo) {
    const r1 = (0,_useNativeTokenTransferCallback__WEBPACK_IMPORTED_MODULE_4__/* .useNativeTransferCallback */ .S)(type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native ? amountOrTokenId : '', recipient, memo);
    const r2 = (0,_useERC20TokenTransferCallback__WEBPACK_IMPORTED_MODULE_2__/* .useERC20TokenTransferCallback */ .b)(address, type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20 ? amountOrTokenId : '', recipient);
    const r3 = (0,_useERC721TokenTransferCallback__WEBPACK_IMPORTED_MODULE_3__/* .useERC721TokenTransferCallback */ .w)(address, type === _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC721 */ .Dr.ERC721 ? amountOrTokenId : '', recipient);
    const type_ = type;
    switch(type_){
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.Native */ .Dr.Native:
            return r1;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC20 */ .Dr.ERC20:
            return r2;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC721 */ .Dr.ERC721:
            return r3;
        case _types__WEBPACK_IMPORTED_MODULE_1__/* .EthereumTokenType.ERC1155 */ .Dr.ERC1155:
            throw new Error('To be implemented.');
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(type_);
    }
}


/***/ })

}]);