(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1651],{

/***/ 21128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var t=__webpack_require__(24686),e=__webpack_require__(49834),r=__webpack_require__(78682);function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}function i(t,e){return t(e={exports:{}},e.exports),e.exports}var a=i((function(t){var e=function(t){var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=Object.create((e&&e.prototype instanceof h?e:h).prototype),i=new E(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function h(){}function l(){}function p(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=h.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return l.prototype=p,c(m,"constructor",p),c(p,"constructor",l),l.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})),c="position: fixed; width:0; height:0; border:0; border:none !important",u=function(){function e(e){void 0===e&&(e=window.parent),this.client=t.createClient("3id-connect-iframedisplay",e)}var r=e.prototype;return r.hide=function(){var t=o(a.mark((function t(){return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.client.request("hide");case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),r.display=function(){var t=o(a.mark((function t(e,r,n){return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.client.request("display",{mobile:e,height:r,width:n});case 2:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}(),e}(),s=function(){function e(e){void 0===e&&(e=window.parent),this.client=t.createClient("3id-connect-managedisplay",e)}return e.prototype.display=function(){var t=o(a.mark((function t(e){return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.client.request("display",{accountId:e});case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),e}(),f=function(t){var e=document.createElement("iframe");return e.name="threeid-connect-manage",e.className="threeid-connect-manage",e.src=t,e.allowtransparency=!1,e.style="border:none; border:0; z-index: 99998; position: fixed; width: 100%; height: 100%; top: 0; left: 0;",e};exports.DisplayConnectClientRPC=u,exports.DisplayManageClientRPC=s,exports.createConnectIframe=function(t){var e=document.createElement("iframe");return e.name="threeid-connect",e.className="threeid-connect",e.src=t,e.style=c,e.allowTransparency=!0,e.frameBorder=0,e},exports.createDisplayConnectServerRPC=function(e){var r=function(t){return function(e,r,n){void 0===e&&(e=!1),void 0===r&&(r="245px"),void 0===n&&(n="440px"),t.style="border:none; border:0; z-index: 99997; position: fixed; max-width: 100%; width: "+n+"; height: "+r+"; "+(e?"bottom: 0px; left: 0px;":"top: 10px; right: 10px")}}(e),n=function(t){return function(){return t.style=c}}(e);return t.createServer("3id-connect-iframedisplay",{hide:function(){n()},display:function(t,e){r(e.mobile,e.height,e.width)}})},exports.createDisplayManageServerRPC=function(n){var i,c;return t.createServer("3id-connect-managedisplay",{display:(c=o(a.mark((function t(o,c){var u,s;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=f(n+"?accountId="+c.accountId),document.body.appendChild(i),t.next=5,new Promise((function(t){i.onload=t}));case 5:return u=e.createMessageObservable(window),s=function(t){return"3id-connect-management"===t.data.ns},t.next=9,u.pipe(r.first(s)).toPromise();case 9:i.remove();case 10:case"end":return t.stop()}}),t)}))),function(t,e){return c.apply(this,arguments)})})},exports.createManageIframe=f;
//# sourceMappingURL=connect-display.cjs.production.min.js.map


/***/ }),

/***/ 29459:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(21128)
} else {}


/***/ }),

/***/ 17030:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var t=__webpack_require__(68640),e=__webpack_require__(29459),r=__webpack_require__(97411),n=__webpack_require__(12487),o=__webpack_require__(51518);function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),t}function s(t,e){return t(e={exports:{}},e.exports),e.exports}var h=s((function(t){var e=function(t){var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=Object.create((e&&e.prototype instanceof f?e:f).prototype),i=new L(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function f(){}function l(){}function p(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(_([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){h.value=t,a(h)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return l.prototype=p,c(m,"constructor",p),c(p,"constructor",l),l.displayName=c(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),c(m,a,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}})),f=function(){function t(t,e){this.provider=t,this.accountId=e}return t.prototype.send=function(){var t=a(h.mark((function t(e,r){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.params=Object.assign({},e.params,{accountId:this.accountId}),t.next=3,this.provider.send(e,r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)})));return function(e,r){return t.apply(this,arguments)}}(),u(t,[{key:"isDidProvider",get:function(){return!0}}]),t}(),l="https://app-clay.3idconnect.org",p=l,d=l+"/management/index.html";"undefined"!=typeof process&&(p=process.env.CONNECT_IFRAME_URL||l),"undefined"!=typeof process&&(d=process.env.CONNECT_MANAGE_URL||l+"/management/index.html");var v=function(t){return{connect_iframe:t,manage_iframe:t+"/management/index.html"}},y={"dev-unstable":v("https://app-dev.3idconnect.org"),"testnet-clay":v(l),mainnet:v("https://app.3idconnect.org"),local:v("http://localhost:30001")},m=function(t){var e,r=n.caller("send",{postMessage:t});return{send:(e=a(h.mark((function t(e){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=JSON,t.next=3,r(e);case 3:return t.t1=t.sent,t.abrupt("return",t.t0.parse.call(t.t0,t.t1));case 5:case"end":return t.stop()}}),t)}))),function(t){return e.apply(this,arguments)})}},g=function(){function t(t,r){var n,o=this;this._authProviderSubscription=null,this._connected=!1,function(){if("undefined"==typeof window||"undefined"==typeof document)throw new Error("ThreeIdConnect not supported in this enviroment")}(),t&&Object.keys(y).includes(t)?(n=y[t].connect_iframe,r=y[t].manage_iframe):n=t,this.iframe=e.createConnectIframe(n||p),this.manageUrl=r||d,this.iframeLoadedPromise=new Promise((function(t){o.iframe.onload=function(){t()}})),document.body.appendChild(this.iframe)}var n=t.prototype;return n.connect=function(){var t=a(h.mark((function t(n){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this._authProviderSubscription&&this._authProviderSubscription.unsubscribe(),!n){t.next=4;break}return t.next=4,this.setAuthProvider(n);case 4:return t.next=6,this.iframeLoadedPromise;case 6:this.postMessage=this.iframe.contentWindow.postMessage.bind(this.iframe.contentWindow),this._authProviderSubscription=r.createAuthProviderServer(n).subscribe(),e.createDisplayConnectServerRPC(this.iframe).subscribe(),e.createDisplayManageServerRPC(this.manageUrl).subscribe(),this.RPCProvider=m(this.postMessage),this.RPCClient=new o.RPCClient(this.RPCProvider),this._connected=!0;case 13:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n.setAuthProvider=function(){var t=a(h.mark((function t(e){return h.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.authProvider=e,t.next=3,this.authProvider.accountId();case 3:this.accountId=t.sent.toString();case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}(),n.getDidProvider=function(){if(!this.authProvider)throw new Error("setAuthProvider required");return new f(this.RPCProvider,this.accountId)},u(t,[{key:"connected",get:function(){return this._connected}}]),t}();Object.defineProperty(exports, "EthereumAuthProvider", ({enumerable:!0,get:function(){return t.EthereumAuthProvider}})),exports.DidProviderProxy=f,exports.ThreeIdConnect=g;
//# sourceMappingURL=connect.cjs.production.min.js.map


/***/ }),

/***/ 3392:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(17030)
} else {}


/***/ }),

/***/ 97411:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(93348)
} else {}


/***/ }),

/***/ 93348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var t=__webpack_require__(24686),r=__webpack_require__(5937);function e(t,r,e,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function c(t){e(a,o,i,c,u,"next",t)}function u(t){e(a,o,i,c,u,"throw",t)}c(void 0)}))}}function o(t,r){return t(r={exports:{}},r.exports),r.exports}var i=o((function(t){var r=function(t){var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function u(t,r,e,n){var o=Object.create((r&&r.prototype instanceof f?r:f).prototype),i=new E(n||[]);return o._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=x(a,e);if(c){if(c===h)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}(t,e,i),o}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function f(){}function p(){}function l(){}var v={};c(v,o,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(k([])));y&&y!==r&&e.call(y,o)&&(v=y);var g=l.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function m(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var h=u.arg,f=h.value;return f&&"object"==typeof f&&e.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):r.resolve(f).then((function(t){h.value=t,a(h)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,h;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function b(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=l,c(g,"constructor",l),c(l,"constructor",p),p.displayName=c(l,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,c(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(m.prototype),c(m.prototype,i,(function(){return this})),t.AsyncIterator=m,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new m(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),c(g,a,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),b(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;b(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:k(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),a="3id-connect-authprovider";"undefined"!=typeof process&&(a=process.env.NAMESPACE||"3id-connect-authprovider"),exports.AuthProviderClient=function(){function e(r,e){void 0===r&&(r=window.parent),void 0===e&&(e=a),this.isAuthProvider=!0,this.client=t.createClient(e,r)}var o=e.prototype;return o.accountId=function(){var t=n(i.mark((function t(){return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.client.request("accountId");case 2:return t.abrupt("return",new r.AccountID(t.sent));case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),o.authenticate=function(){var t=n(i.mark((function t(r){return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.client.request("authenticate",{message:r}));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}(),o.createLink=function(){var t=n(i.mark((function t(r){return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.client.request("createLink",{did:r}));case 1:case"end":return t.stop()}}),t,this)})));return function(r){return t.apply(this,arguments)}}(),o.withAddress=function(){throw new Error("not implemented")},e}(),exports.createAuthProviderServer=function(r,e){return void 0===e&&(e=a),t.createServer(e,{accountId:(u=n(i.mark((function t(){return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.accountId();case 2:return t.abrupt("return",t.sent.toString());case 3:case"end":return t.stop()}}),t)}))),function(){return u.apply(this,arguments)}),authenticate:(c=n(i.mark((function t(e,n){var o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.message,t.next=3,r.authenticate(o);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,r){return c.apply(this,arguments)}),createLink:(o=n(i.mark((function t(e,n){var o;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=n.did,t.next=3,r.createLink(o);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(t,r){return o.apply(this,arguments)})});var o,c,u};
//# sourceMappingURL=window-auth-provider.cjs.production.min.js.map


/***/ }),

/***/ 84844:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withResolutionError = exports.errorRepresentation = void 0;
const errorRepresentation = (metadata) => {
    return {
        didResolutionMetadata: metadata,
        didDocument: null,
        didDocumentMetadata: {},
    };
};
exports.errorRepresentation = errorRepresentation;
const withResolutionError = (f) => {
    return f().catch((e) => exports.errorRepresentation({
        error: 'invalidDid',
        message: e.toString(),
    }));
};
exports.withResolutionError = withResolutionError;
//# sourceMappingURL=error-representation.js.map

/***/ }),

/***/ 24080:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getResolver = exports.wrapDocument = void 0;
const stream_tile_1 = __webpack_require__(52248);
const legacyResolver_1 = __importDefault(__webpack_require__(35011));
const u8a = __importStar(__webpack_require__(31605));
const streamid_1 = __webpack_require__(99609);
const cids_1 = __importDefault(__webpack_require__(55271));
const error_representation_1 = __webpack_require__(84844);
const common_1 = __webpack_require__(14509);
const DID_LD_JSON = 'application/did+ld+json';
const DID_JSON = 'application/did+json';
const isLegacyDid = (didId) => {
    try {
        new cids_1.default(didId);
        return true;
    }
    catch (e) {
        return false;
    }
};
const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toISOString().split('.')[0] + 'Z';
};
function wrapDocument(content, did) {
    if (!(content && content.publicKeys))
        return null;
    const startDoc = {
        id: did,
        verificationMethod: [],
        authentication: [],
        keyAgreement: [],
    };
    return Object.entries(content.publicKeys).reduce((diddoc, [keyName, keyValue]) => {
        const keyBuf = u8a.fromString(keyValue.slice(1), 'base58btc');
        const entry = {
            id: `${did}#${keyName}`,
            type: '',
            controller: did,
            publicKeyBase58: u8a.toString(keyBuf.slice(2), 'base58btc'),
        };
        if (keyBuf[0] === 0xe7) {
            entry.type = 'EcdsaSecp256k1Signature2019';
            diddoc.verificationMethod.push(entry);
            diddoc.authentication.push(entry);
        }
        else if (keyBuf[0] === 0xec) {
            entry.type = 'X25519KeyAgreementKey2019';
            diddoc.verificationMethod.push(entry);
            diddoc.keyAgreement.push(entry);
        }
        return diddoc;
    }, startDoc);
}
exports.wrapDocument = wrapDocument;
function lastAnchorOrGenesisEntry(log) {
    for (let index = log.length - 1; index >= 0; index--) {
        const entry = log[index];
        if (entry.type === common_1.CommitType.ANCHOR) {
            return entry;
        }
    }
    return log[0];
}
function extractMetadata(requestedVersionState, latestVersionState) {
    const metadata = {};
    const { timestamp: updated, cid: versionId } = lastAnchorOrGenesisEntry(requestedVersionState.log);
    const { timestamp: nextUpdate, cid: nextVersionId } = latestVersionState.log.find(({ timestamp }) => timestamp > updated || (!updated && timestamp)) || {};
    if (updated) {
        metadata.updated = formatTime(updated);
    }
    if (nextUpdate) {
        metadata.nextUpdate = formatTime(nextUpdate);
    }
    if (versionId) {
        metadata.versionId = requestedVersionState.log.length === 1 ? '0' : versionId === null || versionId === void 0 ? void 0 : versionId.toString();
    }
    if (nextVersionId) {
        metadata.nextVersionId = nextVersionId.toString();
    }
    return metadata;
}
function getVersionInfo(query = '') {
    const versionId = query
        .split('&')
        .find((e) => e.includes('versionId') || e.includes('version-id'));
    const versionTime = query.split('&').find((e) => e.includes('versionTime'));
    return {
        commit: versionId ? versionId.split('=')[1] : undefined,
        timestamp: versionTime
            ? Math.floor(new Date(versionTime.split('=')[1]).getTime() / 1000)
            : undefined,
    };
}
const legacyResolve = async (ceramic, didId, verNfo) => {
    const legacyPublicKeys = await legacyResolver_1.default(didId);
    const metadata = { controllers: [legacyPublicKeys.keyDid], family: '3id', deterministic: true };
    const streamid = (await stream_tile_1.TileDocument.create(ceramic, null, metadata, { anchor: false, publish: false })).id;
    const didResult = await resolve(ceramic, streamid.toString(), verNfo, didId);
    if (didResult.didDocument === null) {
        didResult.didDocument = wrapDocument(legacyPublicKeys, `did:3:${didId}`);
    }
    return didResult;
};
const resolve = async (ceramic, didId, verNfo, v03ID) => {
    var _a;
    const streamId = streamid_1.StreamID.fromString(didId);
    let commitId;
    const query = [{ streamId }];
    if (verNfo.commit) {
        commitId = streamId.atCommit(verNfo.commit);
        query.push({ streamId: commitId });
    }
    else if (verNfo.timestamp) {
        query.push({
            streamId,
            atTime: verNfo.timestamp,
        });
    }
    const resp = await ceramic.multiQuery(query);
    const latestVersionState = resp[didId].state;
    const commitIdStr = (commitId === null || commitId === void 0 ? void 0 : commitId.toString()) || Object.keys(resp).find((k) => k !== didId);
    const requestedVersionState = ((_a = resp[commitIdStr]) === null || _a === void 0 ? void 0 : _a.state) || latestVersionState;
    const metadata = extractMetadata(requestedVersionState, latestVersionState);
    const tile = resp[commitIdStr || didId];
    if (commitIdStr && !tile) {
        throw new Error(`No resolution for commit ${commitIdStr}`);
    }
    const content = tile.state.content;
    const document = wrapDocument(content, `did:3:${v03ID || didId}`);
    return {
        didResolutionMetadata: { contentType: DID_JSON },
        didDocument: document,
        didDocumentMetadata: metadata,
    };
};
function getResolver(ceramic) {
    return {
        '3': (did, parsed, resolver, options) => {
            return error_representation_1.withResolutionError(async () => {
                const contentType = options.accept || DID_JSON;
                const verNfo = getVersionInfo(parsed.query);
                const id = parsed.id;
                const didResult = () => {
                    if (isLegacyDid(id)) {
                        return legacyResolve(ceramic, id, verNfo);
                    }
                    else {
                        return resolve(ceramic, id, verNfo);
                    }
                };
                switch (contentType) {
                    case DID_JSON:
                        return didResult();
                    case DID_LD_JSON: {
                        const result = await didResult();
                        result.didDocument['@context'] = 'https://www.w3.org/ns/did/v1';
                        result.didResolutionMetadata.contentType = DID_LD_JSON;
                        return result;
                    }
                    default:
                        return error_representation_1.errorRepresentation({ error: 'representationNotSupported' });
                }
            });
        },
    };
}
exports.getResolver = getResolver;
exports["default"] = { getResolver };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 35011:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cross_fetch_1 = __importDefault(__webpack_require__(92317));
const u8a = __importStar(__webpack_require__(31605));
const lru_map_1 = __webpack_require__(354);
const THREEBOX_API_URL = 'https://ipfs.3box.io';
const LIMIT = 100;
const fetchCache = new lru_map_1.LRUMap(LIMIT);
const fetchJson = async (url) => {
    const cached = fetchCache.get(url);
    if (cached)
        return cached;
    const r = await cross_fetch_1.default(url);
    if (r.ok) {
        const json = await r.json();
        fetchCache.set(url, json);
        return json;
    }
    else {
        throw new Error('Not a valid 3ID');
    }
};
const didDocReq = (cid) => `${THREEBOX_API_URL}/did-doc?cid=${encodeURIComponent(cid)}`;
const ipfsMock = {
    dag: {
        get: async (cid) => fetchJson(didDocReq(cid)),
    },
};
const encodeKey = (key, encryption) => {
    const bytes = new Uint8Array(key.length + 2);
    if (encryption) {
        bytes[0] = 0xec;
    }
    else {
        bytes[0] = 0xe7;
    }
    bytes[1] = 0x01;
    bytes.set(key, 2);
    return `z${u8a.toString(bytes, 'base58btc')}`;
};
const compressKey = (key) => {
    const xpoint = key.slice(2, 66);
    const ypoint = key.slice(66, 130);
    const prefix = (ypoint & 1) === 0 ? '02' : '03';
    return `${prefix}${xpoint}`;
};
const LegacyResolver = async (didId, ipfs = ipfsMock) => {
    const doc = (await ipfs.dag.get(didId)).value;
    let signingKey, encryptionKey;
    try {
        const keyEntrySigning = doc.publicKey.findIndex((e) => e.id.endsWith('signingKey'));
        const keyEntryEncryption = doc.publicKey.findIndex((e) => e.id.endsWith('encryptionKey'));
        signingKey = doc.publicKey[keyEntrySigning].publicKeyHex;
        encryptionKey = doc.publicKey[keyEntryEncryption].publicKeyBase64;
    }
    catch (e) {
        throw new Error('Not a valid 3ID');
    }
    const signingKeyCompressed = compressKey(signingKey);
    const signing = encodeKey(u8a.fromString(signingKeyCompressed, 'base16'));
    const encryption = encodeKey(u8a.fromString(encryptionKey, 'base64pad'), true);
    return {
        keyDid: `did:key:${signing}`,
        publicKeys: {
            [signing.slice(-15)]: signing,
            [encryption.slice(-15)]: encryption,
        },
    };
};
exports["default"] = LegacyResolver;
//# sourceMappingURL=legacyResolver.js.map

/***/ }),

/***/ 47237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CeramicClient = exports.DEFAULT_CLIENT_CONFIG = void 0;
const utils_1 = __webpack_require__(42227);
const document_1 = __webpack_require__(88097);
const common_1 = __webpack_require__(14509);
const stream_tile_1 = __webpack_require__(52248);
const stream_caip10_link_1 = __webpack_require__(89421);
const streamid_1 = __webpack_require__(99609);
const remote_pin_api_1 = __webpack_require__(12796);
const API_PATH = '/api/v0';
const CERAMIC_HOST = 'http://localhost:7007';
exports.DEFAULT_CLIENT_CONFIG = {
    syncInterval: 5000,
};
const DEFAULT_APPLY_COMMIT_OPTS = { anchor: true, publish: true, sync: common_1.SyncOptions.PREFER_CACHE };
const DEFAULT_CREATE_FROM_GENESIS_OPTS = {
    anchor: true,
    publish: true,
    sync: common_1.SyncOptions.PREFER_CACHE,
};
const DEFAULT_LOAD_OPTS = { sync: common_1.SyncOptions.PREFER_CACHE };
class CeramicClient {
    constructor(apiHost = CERAMIC_HOST, config = {}) {
        this._config = { ...exports.DEFAULT_CLIENT_CONFIG, ...config };
        this._apiUrl = utils_1.combineURLs(apiHost, API_PATH);
        this._streamCache = new Map();
        this.context = { api: this };
        this.pin = new remote_pin_api_1.RemotePinApi(this._apiUrl);
        this._streamConstructors = {
            [stream_tile_1.TileDocument.STREAM_TYPE_ID]: stream_tile_1.TileDocument,
            [stream_caip10_link_1.Caip10Link.STREAM_TYPE_ID]: stream_caip10_link_1.Caip10Link,
        };
    }
    get did() {
        return this.context.did;
    }
    set did(did) {
        this.context.did = did;
    }
    async createStreamFromGenesis(type, genesis, opts = {}) {
        opts = { ...DEFAULT_CREATE_FROM_GENESIS_OPTS, ...opts };
        const stream = await document_1.Document.createFromGenesis(this._apiUrl, type, genesis, opts, this._config.syncInterval);
        const found = this._streamCache.get(stream.id.toString());
        if (found) {
            if (!common_1.StreamUtils.statesEqual(stream.state, found.state))
                found.next(stream.state);
            return this.buildStream(found);
        }
        else {
            this._streamCache.set(stream.id.toString(), stream);
            return this.buildStream(stream);
        }
    }
    async loadStream(streamId, opts = {}) {
        opts = { ...DEFAULT_LOAD_OPTS, ...opts };
        const streamRef = streamid_1.StreamRef.from(streamId);
        let stream = this._streamCache.get(streamRef.baseID.toString());
        if (stream) {
            await stream._syncState(streamRef, opts);
        }
        else {
            stream = await document_1.Document.load(streamRef, this._apiUrl, this._config.syncInterval, opts);
            this._streamCache.set(stream.id.toString(), stream);
        }
        return this.buildStream(stream);
    }
    async multiQuery(queries, timeout) {
        const queriesJSON = queries.map((q) => {
            return {
                ...q,
                streamId: typeof q.streamId === 'string' ? q.streamId : q.streamId.toString(),
            };
        });
        const results = await common_1.fetchJson(this._apiUrl + '/multiqueries', {
            method: 'post',
            body: {
                queries: queriesJSON,
                ...{ timeout },
            },
        });
        return Object.entries(results).reduce((acc, e) => {
            const [k, v] = e;
            const state = common_1.StreamUtils.deserializeState(v);
            const stream = new document_1.Document(state, this._apiUrl, this._config.syncInterval);
            acc[k] = this.buildStream(stream);
            return acc;
        }, {});
    }
    loadStreamCommits(streamId) {
        const effectiveStreamId = utils_1.typeStreamID(streamId);
        return document_1.Document.loadStreamCommits(effectiveStreamId, this._apiUrl);
    }
    async applyCommit(streamId, commit, opts = {}) {
        opts = { ...DEFAULT_APPLY_COMMIT_OPTS, ...opts };
        const effectiveStreamId = utils_1.typeStreamID(streamId);
        const document = await document_1.Document.applyCommit(this._apiUrl, effectiveStreamId, commit, opts, this._config.syncInterval);
        const fromCache = this._streamCache.get(effectiveStreamId.toString());
        if (fromCache) {
            fromCache.next(document.state);
            return this.buildStream(document);
        }
        else {
            this._streamCache.set(effectiveStreamId.toString(), document);
            return this.buildStream(document);
        }
    }
    async requestAnchor(streamId, opts = {}) {
        opts = { ...DEFAULT_LOAD_OPTS, ...opts };
        const { anchorStatus } = await common_1.fetchJson(`${this._apiUrl}/streams/${streamId.toString()}/anchor`, {
            method: 'post',
            body: {
                opts,
            },
        });
        return anchorStatus;
    }
    addStreamHandler(streamHandler) {
        this._streamConstructors[streamHandler.name] = streamHandler.stream_constructor;
    }
    findStreamConstructor(type) {
        const constructor = this._streamConstructors[type];
        if (constructor) {
            return constructor;
        }
        else {
            throw new Error(`Failed to find constructor for stream ${type}`);
        }
    }
    buildStream(stream) {
        const streamConstructor = this.findStreamConstructor(stream.state.type);
        return new streamConstructor(stream, this.context);
    }
    async setDID(did) {
        this.context.did = did;
    }
    async getSupportedChains() {
        if (this._supportedChains) {
            return this._supportedChains;
        }
        const { supportedChains } = await common_1.fetchJson(this._apiUrl + '/node/chains');
        this._supportedChains = supportedChains;
        return supportedChains;
    }
    async close() {
        Array.from(this._streamCache).map(([, stream]) => {
            stream.complete();
        });
        this._streamCache.clear();
    }
}
exports.CeramicClient = CeramicClient;
exports["default"] = CeramicClient;
//# sourceMappingURL=ceramic-http-client.js.map

/***/ }),

/***/ 88097:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Document = void 0;
const rxjs_1 = __webpack_require__(43790);
const operators_1 = __webpack_require__(37857);
const common_1 = __webpack_require__(14509);
const streamid_1 = __webpack_require__(99609);
const query_string_1 = __importDefault(__webpack_require__(50249));
class Document extends rxjs_1.Observable {
    constructor(initial, _apiUrl, syncInterval) {
        super((subscriber) => {
            const isFirstObserver = this.state$.observers.length === 0;
            if (isFirstObserver) {
                this.periodicSubscription = rxjs_1.timer(0, syncInterval)
                    .pipe(operators_1.throttle(() => this._syncState(this.id, { sync: common_1.SyncOptions.PREFER_CACHE })))
                    .subscribe();
            }
            this.state$.subscribe(subscriber).add(() => {
                var _a;
                const isNoObserversLeft = this.state$.observers.length === 0;
                if (isNoObserversLeft) {
                    (_a = this.periodicSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
                }
            });
        });
        this._apiUrl = _apiUrl;
        this.state$ = new common_1.StreamStateSubject(initial);
    }
    get value() {
        return this.state$.value;
    }
    get state() {
        return this.state$.value;
    }
    next(state) {
        this.state$.next(state);
    }
    async _syncState(streamId, opts) {
        const state = await Document._load(streamId, this._apiUrl, opts);
        this.state$.next(common_1.StreamUtils.deserializeState(state));
    }
    get id() {
        return new streamid_1.StreamID(this.state$.value.type, this.state$.value.log[0].cid);
    }
    static async createFromGenesis(apiUrl, type, genesis, opts, syncInterval) {
        const { state } = await common_1.fetchJson(apiUrl + '/streams', {
            method: 'post',
            body: {
                type,
                genesis: common_1.StreamUtils.serializeCommit(genesis),
                opts,
            },
        });
        return new Document(common_1.StreamUtils.deserializeState(state), apiUrl, syncInterval);
    }
    static async applyCommit(apiUrl, streamId, commit, opts, syncInterval) {
        const { state } = await common_1.fetchJson(apiUrl + '/commits', {
            method: 'post',
            body: {
                streamId: streamId.toString(),
                commit: common_1.StreamUtils.serializeCommit(commit),
                opts,
            },
        });
        return new Document(common_1.StreamUtils.deserializeState(state), apiUrl, syncInterval);
    }
    static async _load(streamId, apiUrl, opts) {
        const url = apiUrl + '/streams/' + streamId.toString() + '?' + query_string_1.default.stringify(opts);
        const { state } = await common_1.fetchJson(url);
        return state;
    }
    static async load(streamId, apiUrl, syncInterval, opts) {
        const state = await Document._load(streamId, apiUrl, opts);
        return new Document(common_1.StreamUtils.deserializeState(state), apiUrl, syncInterval);
    }
    static async loadStreamCommits(streamId, apiUrl) {
        const { commits } = await common_1.fetchJson(`${apiUrl}/commits/${streamId}`);
        return commits.map((r) => {
            return {
                cid: r.cid,
                value: common_1.StreamUtils.deserializeCommit(r.value),
            };
        });
    }
    complete() {
        this.state$.complete();
    }
}
exports.Document = Document;
//# sourceMappingURL=document.js.map

/***/ }),

/***/ 12796:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemotePinApi = void 0;
const common_1 = __webpack_require__(14509);
class RemotePinApi {
    constructor(_apiUrl) {
        this._apiUrl = _apiUrl;
    }
    async add(streamId, force) {
        const args = {};
        if (force) {
            args.force = true;
        }
        await common_1.fetchJson(this._apiUrl + '/pins' + `/${streamId.toString()}`, {
            method: 'post',
            body: args,
        });
    }
    async rm(streamId, opts) {
        await common_1.fetchJson(this._apiUrl + '/pins' + `/${streamId.toString()}`, {
            method: 'delete',
            body: { opts },
        });
    }
    async ls(streamId) {
        let url = this._apiUrl + '/pins';
        if (streamId) {
            url += `/${streamId.toString()}`;
        }
        const result = await common_1.fetchJson(url);
        const { pinnedStreamIds } = result;
        return {
            [Symbol.asyncIterator]() {
                let index = 0;
                return {
                    next() {
                        if (index === pinnedStreamIds.length) {
                            return Promise.resolve({ value: null, done: true });
                        }
                        return Promise.resolve({ value: pinnedStreamIds[index++], done: false });
                    },
                };
            },
        };
    }
}
exports.RemotePinApi = RemotePinApi;
//# sourceMappingURL=remote-pin-api.js.map

/***/ }),

/***/ 42227:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.delay = exports.combineURLs = exports.typeStreamID = void 0;
const streamid_1 = __importDefault(__webpack_require__(99609));
function typeStreamID(streamId) {
    return typeof streamId === 'string' ? streamid_1.default.fromString(streamId) : streamId;
}
exports.typeStreamID = typeStreamID;
function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
}
exports.combineURLs = combineURLs;
async function delay(mills) {
    await new Promise((resolve) => setTimeout(() => resolve(), mills));
}
exports.delay = delay;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 32944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(95352)
} else {}


/***/ }),

/***/ 95352:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var t=__webpack_require__(49097),e=__webpack_require__(31740),r=__webpack_require__(49834),n=__webpack_require__(51518),o=__webpack_require__(28552),i=__webpack_require__(78682);function a(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function u(t){a(i,n,o,u,c,"next",t)}function c(t){a(i,n,o,u,c,"throw",t)}u(void 0)}))}}function c(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)e.indexOf(r=i[n])>=0||(o[r]=t[r]);return o}var s,f=(function(t){var e=function(t){var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o=Object.create((e&&e.prototype instanceof l?e:l).prototype),i=new E(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=x(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function l(){}function p(){}function h(){}var v={};u(v,o,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(O([])));y&&y!==e&&r.call(y,o)&&(v=y);var m=h.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return p.prototype=h,u(m,"constructor",h),u(h,"constructor",p),p.displayName=u(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(c(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(m),u(m,a,"Generator"),u(m,o,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}(s={exports:{}}),s.exports),l=["target","methods"],p=["filter","methods","namespace","target"];function h(t,r,a){void 0===a&&(a={});var c=n.createHandler(t,a),s=e.createUnwrap(r);return o.pipe(i.map((function(t){try{var e=s(t.data);return e.method?{type:"request",message:t,request:e}:null}catch(t){return null}})),i.filter((function(t){return null!==t})),i.mergeMap(function(){var t=u(f.mark((function t(e){return f.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=e.message,t.t1=e.request,t.next=4,c(e.message,e.request);case 4:return t.t2=t.sent,t.abrupt("return",{type:"handled",message:t.t0,request:t.t1,response:t.t2});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))}function v(t,r,n){var o=e.createWrapper(r),a=e.createWrapObserver(t,o.wrap),c=e.createUnwrapOperator(o.unwrap,n);return function(){var e=u(f.mark((function e(r){var n;return f.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.pipe(i.map((function(t){return t.data})),c,i.first((function(t){return null!=t&&t.id===r.id&&("error"in t||"result"in t)}))).toPromise(),a.next(r),e.next=4,n;case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}exports.createNamespaceClient=function(t,e,r){var o=v(t,e,r);return new n.RPCClient({send:o})},exports.createNamespaceRequestHandlerOperator=h,exports.createNamespaceSendRequest=v,exports.createNamespaceServer=function(t){var n=t.filter,o=t.methods,a=t.namespace,u=t.target,s=c(t,p),f=e.createWrap(a);return r.createMessageObservable(u,n).pipe(h(o,a,s),i.tap((function(t){var e;null!=t.response&&(null!=(e=t.message.source)?e:window).postMessage(f(t.response),t.message.origin||"*")})))},exports.serve=function(e){var n=e.target,o=e.methods,a=c(e,l),u=r.createPostMessageTransport(n);return u.pipe(i.map((function(t){return t.data})),t.createHandlerOperator(null,o,a),i.filter((function(t){return null!=t}))).subscribe(u)};
//# sourceMappingURL=rpc-postmessage.cjs.production.min.js.map


/***/ }),

/***/ 49097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(20781)
} else {}


/***/ }),

/***/ 20781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var t=__webpack_require__(51518),r=__webpack_require__(28552),e=__webpack_require__(78682);function n(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var r=this,e=arguments;return new Promise((function(o,i){var a=t.apply(r,e);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}function i(t,r){return t(r={exports:{}},r.exports),r.exports}var a=i((function(t){var r=function(t){var r=Object.prototype,e=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o=Object.create((r&&r.prototype instanceof h?r:h).prototype),i=new E(n||[]);return o._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=x(a,e);if(u){if(u===f)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=s(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}(t,e,i),o}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f={};function h(){}function l(){}function p(){}var v={};v[o]=function(){return this};var d=Object.getPrototypeOf,y=d&&d(d(_([])));y&&y!==r&&e.call(y,o)&&(v=y);var g=p.prototype=h.prototype=Object.create(v);function m(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function w(t,r){var n;this._invoke=function(o,i){function a(){return new r((function(n,a){!function n(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,h=f.value;return h&&"object"==typeof h&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(h).then((function(t){f.value=t,a(f)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function x(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,x(t,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function b(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:void 0,done:!0}}return l.prototype=g.constructor=p,p.constructor=l,l.displayName=u(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===l||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,a,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new w(c(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(g),u(g,a,"Generator"),g[o]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),f},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),b(e),f}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;b(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:_(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function u(t){return function(){var r=o(a.mark((function r(n){var o;return a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.pipe(e.first((function(t){return t.id===n.id}))).toPromise(),t.next(n),r.next=4,o;case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}function c(n,i,u){var c=t.createHandler(i,u);return r.pipe(e.mergeMap(function(){var t=o(a.mark((function t(r){return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(n,r);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()))}exports.createClient=function(r){var e=u(r);return new t.RPCClient({send:e})},exports.createHandlerOperator=c,exports.createSendRequest=u,exports.serve=function(t,r,n,o){return t.pipe(c(r,n,o),e.filter((function(t){return null!=t}))).subscribe(t)};
//# sourceMappingURL=rpc-transport.cjs.production.min.js.map


/***/ }),

/***/ 24686:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(66290)
} else {}


/***/ }),

/***/ 66290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var e=__webpack_require__(32944),r=__webpack_require__(49834),t={onInvalidInput:function(e,r){},postMessageArguments:["*"]};exports.createClient=function(s,a,o){void 0===a&&(a=window),void 0===o&&(o=t);var n=r.createPostMessageTransport(window,a,o);return e.createNamespaceClient(n,s,o)},exports.createServer=function(r,t,s){return void 0===s&&(s=window),e.createNamespaceServer({methods:t,namespace:r,target:s})};
//# sourceMappingURL=rpc-window.cjs.production.min.js.map


/***/ }),

/***/ 1525:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Caip10Link_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Caip10Link = void 0;
const common_1 = __webpack_require__(14509);
const streamid_1 = __webpack_require__(99609);
const caip_1 = __webpack_require__(5937);
const did_resolver_1 = __webpack_require__(82615);
const throwReadOnlyError = () => {
    throw new Error('Historical stream commits cannot be modified. Load the stream without specifying a commit to make updates.');
};
const DEFAULT_CREATE_OPTS = { anchor: false, publish: true, sync: common_1.SyncOptions.PREFER_CACHE };
const DEFAULT_UPDATE_OPTS = { anchor: true, publish: true, throwOnInvalidCommit: true };
const DEFAULT_LOAD_OPTS = { sync: common_1.SyncOptions.PREFER_CACHE };
let Caip10Link = Caip10Link_1 = class Caip10Link extends common_1.Stream {
    constructor() {
        super(...arguments);
        this._isReadOnly = false;
    }
    get did() {
        return this.content;
    }
    static async fromAccount(ceramic, accountId, opts = {}) {
        opts = { ...DEFAULT_CREATE_OPTS, ...opts };
        const normalizedAccountId = new caip_1.AccountID(accountId);
        const genesisCommit = Caip10Link_1.makeGenesis(normalizedAccountId);
        return Caip10Link_1.fromGenesis(ceramic, genesisCommit, opts);
    }
    static async fromGenesis(ceramic, genesisCommit, opts = {}) {
        opts = { ...DEFAULT_CREATE_OPTS, ...opts };
        return ceramic.createStreamFromGenesis(Caip10Link_1.STREAM_TYPE_ID, genesisCommit, opts);
    }
    async setDid(did, authProvider, opts = {}) {
        opts = { ...DEFAULT_UPDATE_OPTS, ...opts };
        const didStr = typeof did == 'string' ? did.trim() : did.id;
        const parsedDid = did_resolver_1.parse(didStr);
        if ((parsedDid === null || parsedDid === void 0 ? void 0 : parsedDid.did) !== didStr) {
            throw new Error(`DID is not valid: '${didStr}'`);
        }
        const linkProof = await authProvider.createLink(didStr);
        return this.setDidProof(linkProof, opts);
    }
    async setDidProof(proof, opts = {}) {
        opts = { ...DEFAULT_UPDATE_OPTS, ...opts };
        const commit = this.makeCommit(proof);
        const updated = await this.api.applyCommit(this.id, commit, opts);
        this.state$.next(updated.state);
    }
    async clearDid(authProvider, opts = {}) {
        opts = { ...DEFAULT_UPDATE_OPTS, ...opts };
        const linkProof = await authProvider.createLink('');
        return this.setDidProof(linkProof, opts);
    }
    static async load(ceramic, streamId, opts = {}) {
        opts = { ...DEFAULT_LOAD_OPTS, ...opts };
        const streamRef = streamid_1.StreamRef.from(streamId);
        if (streamRef.type != Caip10Link_1.STREAM_TYPE_ID) {
            throw new Error(`StreamID ${streamRef.toString()} does not refer to a '${Caip10Link_1.STREAM_TYPE_NAME}' stream, but to a ${streamRef.typeName}`);
        }
        return ceramic.loadStream(streamRef, opts);
    }
    static makeGenesis(accountId) {
        if (accountId.chainId.namespace === 'eip155') {
            accountId.address = accountId.address.toLowerCase();
        }
        return {
            header: {
                controllers: [accountId.toString()],
                family: `caip10-${accountId.chainId.toString()}`,
            },
        };
    }
    makeCommit(proof) {
        return { data: proof, prev: this.tip, id: this.state$.id.cid };
    }
    makeReadOnly() {
        this.setDidProof = throwReadOnlyError;
        this.setDid = throwReadOnlyError;
        this.sync = throwReadOnlyError;
        this._isReadOnly = true;
    }
    get isReadOnly() {
        return this._isReadOnly;
    }
};
Caip10Link.STREAM_TYPE_NAME = 'caip10-link';
Caip10Link.STREAM_TYPE_ID = 1;
Caip10Link = Caip10Link_1 = __decorate([
    common_1.StreamStatic()
], Caip10Link);
exports.Caip10Link = Caip10Link;
//# sourceMappingURL=caip10-link.js.map

/***/ }),

/***/ 89421:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(1525), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 52248:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(37764), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 37764:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var TileDocument_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TileDocument = void 0;
const fast_json_patch_1 = __importDefault(__webpack_require__(96041));
const uint8arrays = __importStar(__webpack_require__(31605));
const random_1 = __webpack_require__(1651);
const common_1 = __webpack_require__(14509);
const streamid_1 = __webpack_require__(99609);
const DEFAULT_CREATE_OPTS = { anchor: true, publish: true, sync: common_1.SyncOptions.PREFER_CACHE };
const DEFAULT_LOAD_OPTS = { sync: common_1.SyncOptions.PREFER_CACHE };
const DEFAULT_UPDATE_OPTS = { anchor: true, publish: true, throwOnInvalidCommit: true };
function headerFromMetadata(metadata, genesis) {
    var _a, _b;
    if (typeof (metadata === null || metadata === void 0 ? void 0 : metadata.schema) === 'string') {
        try {
            streamid_1.CommitID.fromString(metadata.schema);
        }
        catch (_c) {
            throw new Error('Schema must be a CommitID');
        }
    }
    const header = {
        controllers: metadata === null || metadata === void 0 ? void 0 : metadata.controllers,
        family: metadata === null || metadata === void 0 ? void 0 : metadata.family,
        schema: (_a = metadata === null || metadata === void 0 ? void 0 : metadata.schema) === null || _a === void 0 ? void 0 : _a.toString(),
        tags: metadata === null || metadata === void 0 ? void 0 : metadata.tags,
    };
    if (genesis) {
        if (!(metadata === null || metadata === void 0 ? void 0 : metadata.deterministic)) {
            header.unique = uint8arrays.toString(random_1.randomBytes(12), 'base64');
        }
        if (metadata === null || metadata === void 0 ? void 0 : metadata.forbidControllerChange) {
            header.forbidControllerChange = true;
        }
    }
    else {
        if ((metadata === null || metadata === void 0 ? void 0 : metadata.deterministic) !== undefined || ((_b = metadata) === null || _b === void 0 ? void 0 : _b.unique) !== undefined) {
            throw new Error("Cannot change 'deterministic' or 'unique' properties on existing Streams");
        }
        if ((metadata === null || metadata === void 0 ? void 0 : metadata.forbidControllerChange) !== undefined) {
            throw new Error("Cannot change 'forbidControllerChange' property on existing Streams");
        }
    }
    Object.keys(header).forEach((key) => header[key] === undefined && delete header[key]);
    return header;
}
async function _ensureAuthenticated(signer) {
    if (signer.did == null) {
        throw new Error('No DID provided');
    }
    if (!signer.did.authenticated) {
        await signer.did.authenticate();
        if (signer.loggerProvider) {
            signer.loggerProvider.getDiagnosticsLogger().imp(`Now authenticated as DID ${signer.did.id}`);
        }
    }
}
async function _signDagJWS(signer, commit) {
    await _ensureAuthenticated(signer);
    return signer.did.createDagJWS(commit);
}
async function throwReadOnlyError() {
    throw new Error('Historical stream commits cannot be modified. Load the stream without specifying a commit to make updates.');
}
let TileDocument = TileDocument_1 = class TileDocument extends common_1.Stream {
    constructor() {
        super(...arguments);
        this._isReadOnly = false;
    }
    get content() {
        return super.content;
    }
    static async create(ceramic, content, metadata, opts = {}) {
        opts = { ...DEFAULT_CREATE_OPTS, ...opts };
        if (!(metadata === null || metadata === void 0 ? void 0 : metadata.deterministic) && opts.syncTimeoutSeconds == undefined) {
            opts.syncTimeoutSeconds = 0;
        }
        const commit = await TileDocument_1.makeGenesis(ceramic, content, metadata);
        return ceramic.createStreamFromGenesis(TileDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async createFromGenesis(ceramic, genesisCommit, opts = {}) {
        var _a;
        opts = { ...DEFAULT_CREATE_OPTS, ...opts };
        if (((_a = genesisCommit.header) === null || _a === void 0 ? void 0 : _a.unique) && opts.syncTimeoutSeconds == undefined) {
            opts.syncTimeoutSeconds = 0;
        }
        const commit = genesisCommit.data ? await _signDagJWS(ceramic, genesisCommit) : genesisCommit;
        return ceramic.createStreamFromGenesis(TileDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async deterministic(ceramic, metadata, opts = {}) {
        opts = { ...DEFAULT_CREATE_OPTS, ...opts };
        metadata = { ...metadata, deterministic: true };
        if (metadata.family == null && metadata.tags == null) {
            throw new Error('Family and/or tags are required when creating a deterministic tile document');
        }
        const commit = await TileDocument_1.makeGenesis(ceramic, null, metadata);
        return ceramic.createStreamFromGenesis(TileDocument_1.STREAM_TYPE_ID, commit, opts);
    }
    static async load(ceramic, streamId, opts = {}) {
        opts = { ...DEFAULT_LOAD_OPTS, ...opts };
        const streamRef = streamid_1.StreamRef.from(streamId);
        if (streamRef.type != TileDocument_1.STREAM_TYPE_ID) {
            throw new Error(`StreamID ${streamRef.toString()} does not refer to a '${TileDocument_1.STREAM_TYPE_NAME}' stream, but to a ${streamRef.typeName}`);
        }
        return ceramic.loadStream(streamRef, opts);
    }
    async update(content, metadata, opts = {}) {
        opts = { ...DEFAULT_UPDATE_OPTS, ...opts };
        const signer = opts.asDID ? { did: opts.asDID } : this.api;
        const updateCommit = await this.makeCommit(signer, content, metadata);
        const updated = await this.api.applyCommit(this.id, updateCommit, opts);
        this.state$.next(updated.state);
    }
    async patch(jsonPatch, opts = {}) {
        opts = { ...DEFAULT_UPDATE_OPTS, ...opts };
        const header = headerFromMetadata(this.metadata, false);
        const rawCommit = {
            header,
            data: jsonPatch,
            prev: this.tip,
            id: this.state$.id.cid,
        };
        const commit = await _signDagJWS(this.api, rawCommit);
        const updated = await this.api.applyCommit(this.id, commit, opts);
        this.state$.next(updated.state);
    }
    makeReadOnly() {
        this.update = throwReadOnlyError;
        this.patch = throwReadOnlyError;
        this.sync = throwReadOnlyError;
        this._isReadOnly = true;
    }
    get isReadOnly() {
        return this._isReadOnly;
    }
    async makeCommit(signer, newContent, newMetadata) {
        var _a;
        const header = headerFromMetadata(newMetadata, false);
        if (newContent == null) {
            newContent = this.content;
        }
        if (header.controllers && ((_a = header.controllers) === null || _a === void 0 ? void 0 : _a.length) !== 1) {
            throw new Error('Exactly one controller must be specified');
        }
        const patch = fast_json_patch_1.default.compare(this.content, newContent);
        const commit = {
            header,
            data: patch,
            prev: this.tip,
            id: this.state.log[0].cid,
        };
        return _signDagJWS(signer, commit);
    }
    static async makeGenesis(signer, content, metadata) {
        var _a;
        if (!metadata) {
            metadata = {};
        }
        if (!metadata.controllers || metadata.controllers.length === 0) {
            if (signer.did) {
                await _ensureAuthenticated(signer);
                metadata.controllers = [signer.did.id];
            }
            else {
                throw new Error('No controllers specified');
            }
        }
        if (((_a = metadata.controllers) === null || _a === void 0 ? void 0 : _a.length) !== 1) {
            throw new Error('Exactly one controller must be specified');
        }
        const header = headerFromMetadata(metadata, true);
        if ((metadata === null || metadata === void 0 ? void 0 : metadata.deterministic) && content) {
            throw new Error('Initial content must be null when creating a deterministic Tile document');
        }
        if (content == null) {
            return { header };
        }
        const commit = { data: content, header };
        return await _signDagJWS(signer, commit);
    }
};
TileDocument.STREAM_TYPE_NAME = 'tile';
TileDocument.STREAM_TYPE_ID = 0;
TileDocument = TileDocument_1 = __decorate([
    common_1.StreamStatic()
], TileDocument);
exports.TileDocument = TileDocument;
//# sourceMappingURL=tile-document.js.map

/***/ }),

/***/ 49834:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(87014)
} else {}


/***/ }),

/***/ 87014:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var e=__webpack_require__(31740),r=__webpack_require__(28552),t=__webpack_require__(78682);function n(e){return Array.isArray(e)||(e=[e]),function(r){return e.includes(r.origin)}}function s(e,s){var o=r.fromEvent(e,"message");if(null==s)return o;var a="function"==typeof s?s:n(s);return o.pipe(t.filter(a))}function o(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return r.Subscriber.create((function(r){null!=r&&e.postMessage.apply(e,[r].concat(n))}))}exports.createMessageObservable=s,exports.createOriginFilter=n,exports.createPostMessageObserver=o,exports.createPostMessageTransport=function(r,t,n){void 0===t&&(t=r);var a=void 0===n?{}:n,i=a.postMessageArguments,u=void 0===i?[]:i,c=s(r,a.filter),p=o.apply(void 0,[t].concat(u));return new e.TransportSubject(c,p)};
//# sourceMappingURL=transport-postmessage.cjs.production.min.js.map


/***/ }),

/***/ 31740:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(69591)
} else {}


/***/ }),

/***/ 69591:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:!0}));var r=__webpack_require__(28552),t=__webpack_require__(78682);function e(r,t){return(e=Object.setPrototypeOf||function(r,t){return r.__proto__=t,r})(r,t)}var n=function(t){var n,o;function p(r,e){var n;return(n=t.call(this)||this)._source=r,n._sink=e,n}o=t,(n=p).prototype=Object.create(o.prototype),n.prototype.constructor=n,e(n,o);var u=p.prototype;return u.next=function(r){var t,e;null==(t=(e=this._sink).next)||t.call(e,r)},u.error=function(r){var t,e;null==(t=(e=this._sink).error)||t.call(e,r)},u.complete=function(){var r,t;null==(r=(t=this._sink).complete)||r.call(t)},u._subscribe=function(t){var e;return null!=(e=this._source.subscribe(t))?e:r.Subscription.EMPTY},p}(r.Subject);function o(r){return function(t){return{__tw:!0,ns:r,msg:t}}}function p(r){return function(t){if(!0!==t.__tw)throw new Error("Input is not a wrapped message");if("string"!=typeof t.ns)throw new Error("Invalid namespace type for wrapped message: expected a string, got "+typeof t.ns);if(t.ns!==r)throw new Error("Invalid namespace for wrapped message: expected "+r+", got "+t.ns);return t.msg}}function u(r){return{wrap:o(r),unwrap:p(r)}}function a(e,n){if(void 0===n&&(n={}),n.throwWhenInvalid)return r.pipe(t.map(e));var o="function"==typeof n.onInvalidInput?n.onInvalidInput:function(r,t){console.warn("Invalid transport input",r,t)};return r.pipe(t.map((function(r){try{return e(r)}catch(t){return o(r,t),null}})),t.filter((function(r){return null!==r})))}function i(t,e){return new r.Subscriber((function(r){null!=r&&t.next(e(r))}))}function s(r,t,e){var o=t.wrap;void 0===e&&(e={});var p=r.pipe(a(t.unwrap,e)),u=i(r,o);return new n(p,u)}exports.TransportSubject=n,exports.createNamespacedTransport=function(r,t,e){return s(r,u(t),e)},exports.createUnwrap=p,exports.createUnwrapOperator=a,exports.createWrap=o,exports.createWrapObserver=i,exports.createWrappedTransport=s,exports.createWrapper=u;
//# sourceMappingURL=transport-subject.cjs.production.min.js.map


/***/ }),

/***/ 84665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "definitions": () => (/* binding */ definitions),
/* harmony export */   "schemas": () => (/* binding */ schemas)
/* harmony export */ });
var schemas = {
  AlsoKnownAs: 'ceramic://k3y52l7qbv1fryojt8n8cw2k04p9wp67ly59iwqs65dejso566fij5wsdrb871yio',
  BasicProfile: 'ceramic://k3y52l7qbv1frxt706gqfzmq6cbqdkptzk8uudaryhlkf6ly9vx21hqu4r6k1jqio',
  CryptoAccounts: 'ceramic://k3y52l7qbv1frypussjburqg4fykyyycfu0p9znc75lv2t5cg4xaslhagkd7h7mkg',
  Definition: 'ceramic://k3y52l7qbv1fry1fp4s0nwdarh0vahusarpposgevy0pemiykymd2ord6swtharcw',
  IdentityIndex: 'ceramic://k3y52l7qbv1fryjn62sggjh1lpn11c56qfofzmty190d62hwk1cal1c7qc5he54ow',
  ThreeIdKeychain: 'ceramic://k3y52l7qbv1frxiodfo6f25wocb8zz60ywqw4sqcprs26qx1qx467l4ybxplybvgg'
};
var definitions = {
  alsoKnownAs: 'kjzl6cwe1jw146zfmqa10a5x1vry6au3t362p44uttz4l0k4hi88o41zplhmxnf',
  basicProfile: 'kjzl6cwe1jw145cjbeko9kil8g9bxszjhyde21ob8epxuxkaon1izyqsu8wgcic',
  cryptoAccounts: 'kjzl6cwe1jw149z4rvwzi56mjjukafta30kojzktd9dsrgqdgz4wlnceu59f95f',
  threeIdKeychain: 'kjzl6cwe1jw14a50gupo0d433e9ojgmj9rd9ejxkc8vq6lw0fznsoohwzmejqs8'
};


//# sourceMappingURL=idx-constants.esm.js.map


/***/ }),

/***/ 48733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eU": () => (/* binding */ Base58)
/* harmony export */ });
/* unused harmony exports BaseX, Base32 */
/* harmony import */ var _ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99376);
/* harmony import */ var _ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27930);
/**
 * var basex = require("base-x");
 *
 * This implementation is heavily based on base-x. The main reason to
 * deviate was to prevent the dependency of Buffer.
 *
 * Contributors:
 *
 * base-x encoding
 * Forked from https://github.com/cryptocoinjs/bs58
 * Originally written by Mike Hearn for BitcoinJ
 * Copyright (c) 2011 Google Inc
 * Ported to JavaScript by Stefan Thomas
 * Merged Buffer refactorings from base58-native by Stephen Pair
 * Copyright (c) 2013 BitPay Inc
 *
 * The MIT License (MIT)
 *
 * Copyright base-x contributors (c) 2016
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 */


class BaseX {
    constructor(alphabet) {
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "alphabet", alphabet);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "base", alphabet.length);
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "_alphabetMap", {});
        (0,_ethersproject_properties__WEBPACK_IMPORTED_MODULE_0__/* .defineReadOnly */ .zG)(this, "_leader", alphabet.charAt(0));
        // pre-compute lookup table
        for (let i = 0; i < alphabet.length; i++) {
            this._alphabetMap[alphabet.charAt(i)] = i;
        }
    }
    encode(value) {
        let source = (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__/* .arrayify */ .lE)(value);
        if (source.length === 0) {
            return "";
        }
        let digits = [0];
        for (let i = 0; i < source.length; ++i) {
            let carry = source[i];
            for (let j = 0; j < digits.length; ++j) {
                carry += digits[j] << 8;
                digits[j] = carry % this.base;
                carry = (carry / this.base) | 0;
            }
            while (carry > 0) {
                digits.push(carry % this.base);
                carry = (carry / this.base) | 0;
            }
        }
        let string = "";
        // deal with leading zeros
        for (let k = 0; source[k] === 0 && k < source.length - 1; ++k) {
            string += this._leader;
        }
        // convert digits to a string
        for (let q = digits.length - 1; q >= 0; --q) {
            string += this.alphabet[digits[q]];
        }
        return string;
    }
    decode(value) {
        if (typeof (value) !== "string") {
            throw new TypeError("Expected String");
        }
        let bytes = [];
        if (value.length === 0) {
            return new Uint8Array(bytes);
        }
        bytes.push(0);
        for (let i = 0; i < value.length; i++) {
            let byte = this._alphabetMap[value[i]];
            if (byte === undefined) {
                throw new Error("Non-base" + this.base + " character");
            }
            let carry = byte;
            for (let j = 0; j < bytes.length; ++j) {
                carry += bytes[j] * this.base;
                bytes[j] = carry & 0xff;
                carry >>= 8;
            }
            while (carry > 0) {
                bytes.push(carry & 0xff);
                carry >>= 8;
            }
        }
        // deal with leading zeros
        for (let k = 0; value[k] === this._leader && k < value.length - 1; ++k) {
            bytes.push(0);
        }
        return (0,_ethersproject_bytes__WEBPACK_IMPORTED_MODULE_1__/* .arrayify */ .lE)(new Uint8Array(bytes.reverse()));
    }
}
const Base32 = new BaseX("abcdefghijklmnopqrstuvwxyz234567");
const Base58 = new BaseX("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz");

//console.log(Base58.decode("Qmd2V777o5XvJbYMeMb8k2nU5f8d3ciUQ5YpYuWhzv8iDj"))
//console.log(Base58.encode(Base58.decode("Qmd2V777o5XvJbYMeMb8k2nU5f8d3ciUQ5YpYuWhzv8iDj")))
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ HashZero)
/* harmony export */ });
const HashZero = "0x0000000000000000000000000000000000000000000000000000000000000000";
//# sourceMappingURL=hashes.js.map

/***/ }),

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75276);


function id(text) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .w)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(text));
}
//# sourceMappingURL=id.js.map

/***/ }),

/***/ 57430:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HDNode": () => (/* binding */ HDNode),
  "defaultPath": () => (/* binding */ defaultPath),
  "entropyToMnemonic": () => (/* binding */ entropyToMnemonic),
  "getAccountPath": () => (/* binding */ getAccountPath),
  "isValidMnemonic": () => (/* binding */ isValidMnemonic),
  "mnemonicToEntropy": () => (/* binding */ mnemonicToEntropy),
  "mnemonicToSeed": () => (/* binding */ mnemonicToSeed)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+basex@5.4.0/node_modules/@ethersproject/basex/lib.esm/index.js
var lib_esm = __webpack_require__(48733);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.6.1/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var bytes_lib_esm = __webpack_require__(99376);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.6.0/node_modules/@ethersproject/bignumber/lib.esm/bignumber.js
var bignumber = __webpack_require__(6619);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+strings@5.6.0/node_modules/@ethersproject/strings/lib.esm/utf8.js + 1 modules
var utf8 = __webpack_require__(75276);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/sha2.js + 2 modules
var sha2 = __webpack_require__(71252);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+pbkdf2@5.4.0/node_modules/@ethersproject/pbkdf2/lib.esm/pbkdf2.js



function pbkdf2(password, salt, iterations, keylen, hashAlgorithm) {
    password = (0,bytes_lib_esm/* arrayify */.lE)(password);
    salt = (0,bytes_lib_esm/* arrayify */.lE)(salt);
    let hLen;
    let l = 1;
    const DK = new Uint8Array(keylen);
    const block1 = new Uint8Array(salt.length + 4);
    block1.set(salt);
    //salt.copy(block1, 0, 0, salt.length)
    let r;
    let T;
    for (let i = 1; i <= l; i++) {
        //block1.writeUInt32BE(i, salt.length)
        block1[salt.length] = (i >> 24) & 0xff;
        block1[salt.length + 1] = (i >> 16) & 0xff;
        block1[salt.length + 2] = (i >> 8) & 0xff;
        block1[salt.length + 3] = i & 0xff;
        //let U = createHmac(password).update(block1).digest();
        let U = (0,bytes_lib_esm/* arrayify */.lE)((0,sha2/* computeHmac */.Gy)(hashAlgorithm, password, block1));
        if (!hLen) {
            hLen = U.length;
            T = new Uint8Array(hLen);
            l = Math.ceil(keylen / hLen);
            r = keylen - (l - 1) * hLen;
        }
        //U.copy(T, 0, 0, hLen)
        T.set(U);
        for (let j = 1; j < iterations; j++) {
            //U = createHmac(password).update(U).digest();
            U = (0,bytes_lib_esm/* arrayify */.lE)((0,sha2/* computeHmac */.Gy)(hashAlgorithm, password, U));
            for (let k = 0; k < hLen; k++)
                T[k] ^= U[k];
        }
        const destPos = (i - 1) * hLen;
        const len = (i === l ? r : hLen);
        //T.copy(DK, destPos, 0, len)
        DK.set((0,bytes_lib_esm/* arrayify */.lE)(T).slice(0, len), destPos);
    }
    return (0,bytes_lib_esm/* hexlify */.Dv)(DK);
}
//# sourceMappingURL=pbkdf2.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var properties_lib_esm = __webpack_require__(27930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+signing-key@5.4.0/node_modules/@ethersproject/signing-key/lib.esm/index.js + 2 modules
var signing_key_lib_esm = __webpack_require__(37514);
// EXTERNAL MODULE: ../../node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js
var lib_hash = __webpack_require__(45370);
var hash_default = /*#__PURE__*/__webpack_require__.n(lib_hash);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.5.0/node_modules/@ethersproject/sha2/lib.esm/types.js
var SupportedAlgorithm;
(function (SupportedAlgorithm) {
    SupportedAlgorithm["sha256"] = "sha256";
    SupportedAlgorithm["sha512"] = "sha512";
})(SupportedAlgorithm || (SupportedAlgorithm = {}));
;
//# sourceMappingURL=types.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.5.0/node_modules/@ethersproject/sha2/lib.esm/_version.js
const version = "sha2/5.5.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.5.0/node_modules/@ethersproject/sha2/lib.esm/sha2.js


//const _ripemd160 = _hash.ripemd160;




const logger = new logger_lib_esm/* Logger */.Yd(version);
function ripemd160(data) {
    return "0x" + (hash_default().ripemd160().update((0,bytes_lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function sha256(data) {
    return "0x" + (hash_default().sha256().update((0,bytes_lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function sha512(data) {
    return "0x" + (hash.sha512().update(arrayify(data)).digest("hex"));
}
function computeHmac(algorithm, key, data) {
    if (!SupportedAlgorithm[algorithm]) {
        logger.throwError("unsupported algorithm " + algorithm, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: "hmac",
            algorithm: algorithm
        });
    }
    return "0x" + hash_default().hmac((hash_default())[algorithm], (0,bytes_lib_esm/* arrayify */.lE)(key)).update((0,bytes_lib_esm/* arrayify */.lE)(data)).digest("hex");
}
//# sourceMappingURL=sha2.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+transactions@5.4.0/node_modules/@ethersproject/transactions/lib.esm/index.js + 1 modules
var transactions_lib_esm = __webpack_require__(21190);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+wordlists@5.4.0/node_modules/@ethersproject/wordlists/lib.esm/wordlists.js + 10 modules
var wordlists = __webpack_require__(65635);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+hdnode@5.4.0/node_modules/@ethersproject/hdnode/lib.esm/_version.js
const _version_version = "hdnode/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+hdnode@5.4.0/node_modules/@ethersproject/hdnode/lib.esm/index.js













const lib_esm_logger = new logger_lib_esm/* Logger */.Yd(_version_version);
const N = bignumber/* BigNumber.from */.O$.from("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
// "Bitcoin seed"
const MasterSecret = (0,utf8/* toUtf8Bytes */.Y0)("Bitcoin seed");
const HardenedBit = 0x80000000;
// Returns a byte with the MSB bits set
function getUpperMask(bits) {
    return ((1 << bits) - 1) << (8 - bits);
}
// Returns a byte with the LSB bits set
function getLowerMask(bits) {
    return (1 << bits) - 1;
}
function bytes32(value) {
    return (0,bytes_lib_esm/* hexZeroPad */.$m)((0,bytes_lib_esm/* hexlify */.Dv)(value), 32);
}
function base58check(data) {
    return lib_esm/* Base58.encode */.eU.encode((0,bytes_lib_esm/* concat */.zo)([data, (0,bytes_lib_esm/* hexDataSlice */.p3)(sha256(sha256(data)), 0, 4)]));
}
function getWordlist(wordlist) {
    if (wordlist == null) {
        return wordlists/* wordlists.en */.E.en;
    }
    if (typeof (wordlist) === "string") {
        const words = wordlists/* wordlists */.E[wordlist];
        if (words == null) {
            lib_esm_logger.throwArgumentError("unknown locale", "wordlist", wordlist);
        }
        return words;
    }
    return wordlist;
}
const _constructorGuard = {};
const defaultPath = "m/44'/60'/0'/0/0";
;
class HDNode {
    /**
     *  This constructor should not be called directly.
     *
     *  Please use:
     *   - fromMnemonic
     *   - fromSeed
     */
    constructor(constructorGuard, privateKey, publicKey, parentFingerprint, chainCode, index, depth, mnemonicOrPath) {
        lib_esm_logger.checkNew(new.target, HDNode);
        /* istanbul ignore if */
        if (constructorGuard !== _constructorGuard) {
            throw new Error("HDNode constructor cannot be called directly");
        }
        if (privateKey) {
            const signingKey = new signing_key_lib_esm/* SigningKey */.Et(privateKey);
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "privateKey", signingKey.privateKey);
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "publicKey", signingKey.compressedPublicKey);
        }
        else {
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "privateKey", null);
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "publicKey", (0,bytes_lib_esm/* hexlify */.Dv)(publicKey));
        }
        (0,properties_lib_esm/* defineReadOnly */.zG)(this, "parentFingerprint", parentFingerprint);
        (0,properties_lib_esm/* defineReadOnly */.zG)(this, "fingerprint", (0,bytes_lib_esm/* hexDataSlice */.p3)(ripemd160(sha256(this.publicKey)), 0, 4));
        (0,properties_lib_esm/* defineReadOnly */.zG)(this, "address", (0,transactions_lib_esm/* computeAddress */.db)(this.publicKey));
        (0,properties_lib_esm/* defineReadOnly */.zG)(this, "chainCode", chainCode);
        (0,properties_lib_esm/* defineReadOnly */.zG)(this, "index", index);
        (0,properties_lib_esm/* defineReadOnly */.zG)(this, "depth", depth);
        if (mnemonicOrPath == null) {
            // From a source that does not preserve the path (e.g. extended keys)
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "mnemonic", null);
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "path", null);
        }
        else if (typeof (mnemonicOrPath) === "string") {
            // From a source that does not preserve the mnemonic (e.g. neutered)
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "mnemonic", null);
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "path", mnemonicOrPath);
        }
        else {
            // From a fully qualified source
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "mnemonic", mnemonicOrPath);
            (0,properties_lib_esm/* defineReadOnly */.zG)(this, "path", mnemonicOrPath.path);
        }
    }
    get extendedKey() {
        // We only support the mainnet values for now, but if anyone needs
        // testnet values, let me know. I believe current senitment is that
        // we should always use mainnet, and use BIP-44 to derive the network
        //   - Mainnet: public=0x0488B21E, private=0x0488ADE4
        //   - Testnet: public=0x043587CF, private=0x04358394
        if (this.depth >= 256) {
            throw new Error("Depth too large!");
        }
        return base58check((0,bytes_lib_esm/* concat */.zo)([
            ((this.privateKey != null) ? "0x0488ADE4" : "0x0488B21E"),
            (0,bytes_lib_esm/* hexlify */.Dv)(this.depth),
            this.parentFingerprint,
            (0,bytes_lib_esm/* hexZeroPad */.$m)((0,bytes_lib_esm/* hexlify */.Dv)(this.index), 4),
            this.chainCode,
            ((this.privateKey != null) ? (0,bytes_lib_esm/* concat */.zo)(["0x00", this.privateKey]) : this.publicKey),
        ]));
    }
    neuter() {
        return new HDNode(_constructorGuard, null, this.publicKey, this.parentFingerprint, this.chainCode, this.index, this.depth, this.path);
    }
    _derive(index) {
        if (index > 0xffffffff) {
            throw new Error("invalid index - " + String(index));
        }
        // Base path
        let path = this.path;
        if (path) {
            path += "/" + (index & ~HardenedBit);
        }
        const data = new Uint8Array(37);
        if (index & HardenedBit) {
            if (!this.privateKey) {
                throw new Error("cannot derive child of neutered node");
            }
            // Data = 0x00 || ser_256(k_par)
            data.set((0,bytes_lib_esm/* arrayify */.lE)(this.privateKey), 1);
            // Hardened path
            if (path) {
                path += "'";
            }
        }
        else {
            // Data = ser_p(point(k_par))
            data.set((0,bytes_lib_esm/* arrayify */.lE)(this.publicKey));
        }
        // Data += ser_32(i)
        for (let i = 24; i >= 0; i -= 8) {
            data[33 + (i >> 3)] = ((index >> (24 - i)) & 0xff);
        }
        const I = (0,bytes_lib_esm/* arrayify */.lE)(computeHmac(SupportedAlgorithm.sha512, this.chainCode, data));
        const IL = I.slice(0, 32);
        const IR = I.slice(32);
        // The private key
        let ki = null;
        // The public key
        let Ki = null;
        if (this.privateKey) {
            ki = bytes32(bignumber/* BigNumber.from */.O$.from(IL).add(this.privateKey).mod(N));
        }
        else {
            const ek = new signing_key_lib_esm/* SigningKey */.Et((0,bytes_lib_esm/* hexlify */.Dv)(IL));
            Ki = ek._addPoint(this.publicKey);
        }
        let mnemonicOrPath = path;
        const srcMnemonic = this.mnemonic;
        if (srcMnemonic) {
            mnemonicOrPath = Object.freeze({
                phrase: srcMnemonic.phrase,
                path: path,
                locale: (srcMnemonic.locale || "en")
            });
        }
        return new HDNode(_constructorGuard, ki, Ki, this.fingerprint, bytes32(IR), index, this.depth + 1, mnemonicOrPath);
    }
    derivePath(path) {
        const components = path.split("/");
        if (components.length === 0 || (components[0] === "m" && this.depth !== 0)) {
            throw new Error("invalid path - " + path);
        }
        if (components[0] === "m") {
            components.shift();
        }
        let result = this;
        for (let i = 0; i < components.length; i++) {
            const component = components[i];
            if (component.match(/^[0-9]+'$/)) {
                const index = parseInt(component.substring(0, component.length - 1));
                if (index >= HardenedBit) {
                    throw new Error("invalid path index - " + component);
                }
                result = result._derive(HardenedBit + index);
            }
            else if (component.match(/^[0-9]+$/)) {
                const index = parseInt(component);
                if (index >= HardenedBit) {
                    throw new Error("invalid path index - " + component);
                }
                result = result._derive(index);
            }
            else {
                throw new Error("invalid path component - " + component);
            }
        }
        return result;
    }
    static _fromSeed(seed, mnemonic) {
        const seedArray = (0,bytes_lib_esm/* arrayify */.lE)(seed);
        if (seedArray.length < 16 || seedArray.length > 64) {
            throw new Error("invalid seed");
        }
        const I = (0,bytes_lib_esm/* arrayify */.lE)(computeHmac(SupportedAlgorithm.sha512, MasterSecret, seedArray));
        return new HDNode(_constructorGuard, bytes32(I.slice(0, 32)), null, "0x00000000", bytes32(I.slice(32)), 0, 0, mnemonic);
    }
    static fromMnemonic(mnemonic, password, wordlist) {
        // If a locale name was passed in, find the associated wordlist
        wordlist = getWordlist(wordlist);
        // Normalize the case and spacing in the mnemonic (throws if the mnemonic is invalid)
        mnemonic = entropyToMnemonic(mnemonicToEntropy(mnemonic, wordlist), wordlist);
        return HDNode._fromSeed(mnemonicToSeed(mnemonic, password), {
            phrase: mnemonic,
            path: "m",
            locale: wordlist.locale
        });
    }
    static fromSeed(seed) {
        return HDNode._fromSeed(seed, null);
    }
    static fromExtendedKey(extendedKey) {
        const bytes = lib_esm/* Base58.decode */.eU.decode(extendedKey);
        if (bytes.length !== 82 || base58check(bytes.slice(0, 78)) !== extendedKey) {
            lib_esm_logger.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
        }
        const depth = bytes[4];
        const parentFingerprint = (0,bytes_lib_esm/* hexlify */.Dv)(bytes.slice(5, 9));
        const index = parseInt((0,bytes_lib_esm/* hexlify */.Dv)(bytes.slice(9, 13)).substring(2), 16);
        const chainCode = (0,bytes_lib_esm/* hexlify */.Dv)(bytes.slice(13, 45));
        const key = bytes.slice(45, 78);
        switch ((0,bytes_lib_esm/* hexlify */.Dv)(bytes.slice(0, 4))) {
            // Public Key
            case "0x0488b21e":
            case "0x043587cf":
                return new HDNode(_constructorGuard, null, (0,bytes_lib_esm/* hexlify */.Dv)(key), parentFingerprint, chainCode, index, depth, null);
            // Private Key
            case "0x0488ade4":
            case "0x04358394 ":
                if (key[0] !== 0) {
                    break;
                }
                return new HDNode(_constructorGuard, (0,bytes_lib_esm/* hexlify */.Dv)(key.slice(1)), null, parentFingerprint, chainCode, index, depth, null);
        }
        return lib_esm_logger.throwArgumentError("invalid extended key", "extendedKey", "[REDACTED]");
    }
}
function mnemonicToSeed(mnemonic, password) {
    if (!password) {
        password = "";
    }
    const salt = (0,utf8/* toUtf8Bytes */.Y0)("mnemonic" + password, utf8/* UnicodeNormalizationForm.NFKD */.Uj.NFKD);
    return pbkdf2((0,utf8/* toUtf8Bytes */.Y0)(mnemonic, utf8/* UnicodeNormalizationForm.NFKD */.Uj.NFKD), salt, 2048, 64, "sha512");
}
function mnemonicToEntropy(mnemonic, wordlist) {
    wordlist = getWordlist(wordlist);
    lib_esm_logger.checkNormalize();
    const words = wordlist.split(mnemonic);
    if ((words.length % 3) !== 0) {
        throw new Error("invalid mnemonic");
    }
    const entropy = (0,bytes_lib_esm/* arrayify */.lE)(new Uint8Array(Math.ceil(11 * words.length / 8)));
    let offset = 0;
    for (let i = 0; i < words.length; i++) {
        let index = wordlist.getWordIndex(words[i].normalize("NFKD"));
        if (index === -1) {
            throw new Error("invalid mnemonic");
        }
        for (let bit = 0; bit < 11; bit++) {
            if (index & (1 << (10 - bit))) {
                entropy[offset >> 3] |= (1 << (7 - (offset % 8)));
            }
            offset++;
        }
    }
    const entropyBits = 32 * words.length / 3;
    const checksumBits = words.length / 3;
    const checksumMask = getUpperMask(checksumBits);
    const checksum = (0,bytes_lib_esm/* arrayify */.lE)(sha256(entropy.slice(0, entropyBits / 8)))[0] & checksumMask;
    if (checksum !== (entropy[entropy.length - 1] & checksumMask)) {
        throw new Error("invalid checksum");
    }
    return (0,bytes_lib_esm/* hexlify */.Dv)(entropy.slice(0, entropyBits / 8));
}
function entropyToMnemonic(entropy, wordlist) {
    wordlist = getWordlist(wordlist);
    entropy = (0,bytes_lib_esm/* arrayify */.lE)(entropy);
    if ((entropy.length % 4) !== 0 || entropy.length < 16 || entropy.length > 32) {
        throw new Error("invalid entropy");
    }
    const indices = [0];
    let remainingBits = 11;
    for (let i = 0; i < entropy.length; i++) {
        // Consume the whole byte (with still more to go)
        if (remainingBits > 8) {
            indices[indices.length - 1] <<= 8;
            indices[indices.length - 1] |= entropy[i];
            remainingBits -= 8;
            // This byte will complete an 11-bit index
        }
        else {
            indices[indices.length - 1] <<= remainingBits;
            indices[indices.length - 1] |= entropy[i] >> (8 - remainingBits);
            // Start the next word
            indices.push(entropy[i] & getLowerMask(8 - remainingBits));
            remainingBits += 3;
        }
    }
    // Compute the checksum bits
    const checksumBits = entropy.length / 4;
    const checksum = (0,bytes_lib_esm/* arrayify */.lE)(sha256(entropy))[0] & getUpperMask(checksumBits);
    // Shift the checksum into the word indices
    indices[indices.length - 1] <<= checksumBits;
    indices[indices.length - 1] |= (checksum >> (8 - checksumBits));
    return wordlist.join(indices.map((index) => wordlist.getWord(index)));
}
function isValidMnemonic(mnemonic, wordlist) {
    try {
        mnemonicToEntropy(mnemonic, wordlist);
        return true;
    }
    catch (error) { }
    return false;
}
function getAccountPath(index) {
    if (typeof (index) !== "number" || index < 0 || index >= HardenedBit || index % 1) {
        lib_esm_logger.throwArgumentError("invalid account index", "index", index);
    }
    return `m/44'/60'/${index}'/0/0`;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 27930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dk": () => (/* binding */ Description),
  "uj": () => (/* binding */ checkProperties),
  "p$": () => (/* binding */ deepCopy),
  "zG": () => (/* binding */ defineReadOnly),
  "tu": () => (/* binding */ getStatic),
  "mE": () => (/* binding */ resolveProperties),
  "DC": () => (/* binding */ shallowCopy)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/_version.js
const version = "properties/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const logger = new lib_esm/* Logger */.Yd(version);
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false,
    });
}
// Crawl up the constructor chain to find a static method
function getStatic(ctor, key) {
    for (let i = 0; i < 32; i++) {
        if (ctor[key]) {
            return ctor[key];
        }
        if (!ctor.prototype || typeof (ctor.prototype) !== "object") {
            break;
        }
        ctor = Object.getPrototypeOf(ctor.prototype).constructor;
    }
    return null;
}
function resolveProperties(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = Object.keys(object).map((key) => {
            const value = object[key];
            return Promise.resolve(value).then((v) => ({ key: key, value: v }));
        });
        const results = yield Promise.all(promises);
        return results.reduce((accum, result) => {
            accum[(result.key)] = result.value;
            return accum;
        }, {});
    });
}
function checkProperties(object, properties) {
    if (!object || typeof (object) !== "object") {
        logger.throwArgumentError("invalid object", "object", object);
    }
    Object.keys(object).forEach((key) => {
        if (!properties[key]) {
            logger.throwArgumentError("invalid object key - " + key, "transaction:" + key, object);
        }
    });
}
function shallowCopy(object) {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
    }
    return result;
}
const opaque = { bigint: true, boolean: true, "function": true, number: true, string: true };
function _isFrozen(object) {
    // Opaque objects are not mutable, so safe to copy by assignment
    if (object === undefined || object === null || opaque[typeof (object)]) {
        return true;
    }
    if (Array.isArray(object) || typeof (object) === "object") {
        if (!Object.isFrozen(object)) {
            return false;
        }
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            if (!_isFrozen(object[keys[i]])) {
                return false;
            }
        }
        return true;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
// Returns a new copy of object, such that no properties may be replaced.
// New properties may be added only to objects.
function _deepCopy(object) {
    if (_isFrozen(object)) {
        return object;
    }
    // Arrays are mutable, so we need to create a copy
    if (Array.isArray(object)) {
        return Object.freeze(object.map((item) => deepCopy(item)));
    }
    if (typeof (object) === "object") {
        const result = {};
        for (const key in object) {
            const value = object[key];
            if (value === undefined) {
                continue;
            }
            defineReadOnly(result, key, deepCopy(value));
        }
        return result;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
function deepCopy(object) {
    return _deepCopy(object);
}
class Description {
    constructor(info) {
        for (const key in info) {
            this[key] = deepCopy(info[key]);
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 71252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Gy": () => (/* binding */ computeHmac),
  "JQ": () => (/* binding */ sha256)
});

// UNUSED EXPORTS: ripemd160, sha512

// EXTERNAL MODULE: ../../node_modules/.pnpm/hash.js@1.1.7/node_modules/hash.js/lib/hash.js
var lib_hash = __webpack_require__(45370);
var hash_default = /*#__PURE__*/__webpack_require__.n(lib_hash);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bytes@5.6.1/node_modules/@ethersproject/bytes/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(99376);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/types.js
var SupportedAlgorithm;
(function (SupportedAlgorithm) {
    SupportedAlgorithm["sha256"] = "sha256";
    SupportedAlgorithm["sha512"] = "sha512";
})(SupportedAlgorithm || (SupportedAlgorithm = {}));
;
//# sourceMappingURL=types.js.map
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/_version.js
const version = "sha2/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+sha2@5.4.0/node_modules/@ethersproject/sha2/lib.esm/sha2.js


//const _ripemd160 = _hash.ripemd160;




const logger = new logger_lib_esm/* Logger */.Yd(version);
function ripemd160(data) {
    return "0x" + (hash.ripemd160().update(arrayify(data)).digest("hex"));
}
function sha256(data) {
    return "0x" + (hash_default().sha256().update((0,lib_esm/* arrayify */.lE)(data)).digest("hex"));
}
function sha512(data) {
    return "0x" + (hash.sha512().update(arrayify(data)).digest("hex"));
}
function computeHmac(algorithm, key, data) {
    if (!SupportedAlgorithm[algorithm]) {
        logger.throwError("unsupported algorithm " + algorithm, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
            operation: "hmac",
            algorithm: algorithm
        });
    }
    return "0x" + hash_default().hmac((hash_default())[algorithm], (0,lib_esm/* arrayify */.lE)(key)).update((0,lib_esm/* arrayify */.lE)(data)).digest("hex");
}
//# sourceMappingURL=sha2.js.map

/***/ }),

/***/ 29188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51911);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2633);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58757);
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80231);
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92916);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35667);


const _excluded = ["children"];





const TabList = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function TabList(props, ref) {
  const {
    children: childrenProp
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(props, _excluded);

  const context = (0,_TabContext__WEBPACK_IMPORTED_MODULE_3__/* .useTabContext */ ._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const children = react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childrenProp, child => {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, {
      // SOMEDAY: `Tabs` will set those themselves
      'aria-controls': (0,_TabContext__WEBPACK_IMPORTED_MODULE_3__/* .getPanelId */ .uU)(context, child.props.value),
      id: (0,_TabContext__WEBPACK_IMPORTED_MODULE_3__/* .getTabId */ .pQ)(context, child.props.value)
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({}, other, {
    ref: ref,
    value: context.value,
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabList);

/***/ }),

/***/ 38419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TabPanel_TabPanel)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(51911);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.17.9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(2633);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../../node_modules/.pnpm/clsx@1.1.1/node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(25789);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(35878);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useThemeProps.js
var useThemeProps = __webpack_require__(96719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(54455);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(15853);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+utils@5.8.0_react@18.1.0/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(52062);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/tabPanelClasses.js

function getTabPanelUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Z)('MuiTabPanel', slot);
}
const tabPanelClasses = (0,generateUtilityClasses/* default */.Z)('MuiTabPanel', ['root']);
/* harmony default export */ const TabPanel_tabPanelClasses = ((/* unused pure expression or super */ null && (tabPanelClasses)));
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js


const _excluded = ["children", "className", "value"];









const useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.Z)(slots, getTabPanelUtilityClass, classes);
};

const TabPanelRoot = (0,styled/* default */.ZP)('div', {
  name: 'MuiTabPanel',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  padding: theme.spacing(3)
}));
const TabPanel = /*#__PURE__*/react.forwardRef(function TabPanel(inProps, ref) {
  const props = (0,useThemeProps/* default */.Z)({
    props: inProps,
    name: 'MuiTabPanel'
  });

  const {
    children,
    className,
    value
  } = props,
        other = (0,objectWithoutPropertiesLoose/* default */.Z)(props, _excluded);

  const ownerState = (0,esm_extends/* default */.Z)({}, props);

  const classes = useUtilityClasses(ownerState);
  const context = (0,TabContext/* useTabContext */._i)();

  if (context === null) {
    throw new TypeError('No TabContext provided');
  }

  const id = (0,TabContext/* getPanelId */.uU)(context, value);
  const tabId = (0,TabContext/* getTabId */.pQ)(context, value);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TabPanelRoot, (0,esm_extends/* default */.Z)({
    "aria-labelledby": tabId,
    className: (0,clsx_m["default"])(classes.root, className),
    hidden: value !== context.value,
    id: id,
    ref: ref,
    role: "tabpanel",
    ownerState: ownerState
  }, other, {
    children: value === context.value && children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TabPanel_TabPanel = (TabPanel);

/***/ }),

/***/ 83816:
/***/ ((module) => {

"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
function base (ALPHABET) {
  if (ALPHABET.length >= 255) { throw new TypeError('Alphabet too long') }
  var BASE_MAP = new Uint8Array(256)
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i)
    var xc = x.charCodeAt(0)
    if (BASE_MAP[xc] !== 255) { throw new TypeError(x + ' is ambiguous') }
    BASE_MAP[xc] = i
  }
  var BASE = ALPHABET.length
  var LEADER = ALPHABET.charAt(0)
  var FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
  var iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
  function encode (source) {
    if (source instanceof Uint8Array) {
    } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength)
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source)
    }
    if (!(source instanceof Uint8Array)) { throw new TypeError('Expected Uint8Array') }
    if (source.length === 0) { return '' }
        // Skip & count leading zeroes.
    var zeroes = 0
    var length = 0
    var pbegin = 0
    var pend = source.length
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++
      zeroes++
    }
        // Allocate enough space in big-endian base58 representation.
    var size = ((pend - pbegin) * iFACTOR + 1) >>> 0
    var b58 = new Uint8Array(size)
        // Process the bytes.
    while (pbegin !== pend) {
      var carry = source[pbegin]
            // Apply "b58 = b58 * 256 + ch".
      var i = 0
      for (var it1 = size - 1; (carry !== 0 || i < length) && (it1 !== -1); it1--, i++) {
        carry += (256 * b58[it1]) >>> 0
        b58[it1] = (carry % BASE) >>> 0
        carry = (carry / BASE) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      pbegin++
    }
        // Skip leading zeroes in base58 result.
    var it2 = size - length
    while (it2 !== size && b58[it2] === 0) {
      it2++
    }
        // Translate the result into a string.
    var str = LEADER.repeat(zeroes)
    for (; it2 < size; ++it2) { str += ALPHABET.charAt(b58[it2]) }
    return str
  }
  function decodeUnsafe (source) {
    if (typeof source !== 'string') { throw new TypeError('Expected String') }
    if (source.length === 0) { return new Uint8Array() }
    var psz = 0
        // Skip leading spaces.
    if (source[psz] === ' ') { return }
        // Skip and count leading '1's.
    var zeroes = 0
    var length = 0
    while (source[psz] === LEADER) {
      zeroes++
      psz++
    }
        // Allocate enough space in big-endian base256 representation.
    var size = (((source.length - psz) * FACTOR) + 1) >>> 0 // log(58) / log(256), rounded up.
    var b256 = new Uint8Array(size)
        // Process the characters.
    while (source[psz]) {
            // Decode character
      var carry = BASE_MAP[source.charCodeAt(psz)]
            // Invalid character
      if (carry === 255) { return }
      var i = 0
      for (var it3 = size - 1; (carry !== 0 || i < length) && (it3 !== -1); it3--, i++) {
        carry += (BASE * b256[it3]) >>> 0
        b256[it3] = (carry % 256) >>> 0
        carry = (carry / 256) >>> 0
      }
      if (carry !== 0) { throw new Error('Non-zero carry') }
      length = i
      psz++
    }
        // Skip trailing spaces.
    if (source[psz] === ' ') { return }
        // Skip leading zeroes in b256.
    var it4 = size - length
    while (it4 !== size && b256[it4] === 0) {
      it4++
    }
    var vch = new Uint8Array(zeroes + (size - it4))
    var j = zeroes
    while (it4 !== size) {
      vch[j++] = b256[it4++]
    }
    return vch
  }
  function decode (string) {
    var buffer = decodeUnsafe(string)
    if (buffer) { return buffer }
    throw new Error('Non-base' + BASE + ' character')
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  }
}
module.exports = base


/***/ }),

/***/ 87689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package binary provides functions for encoding and decoding numbers in byte arrays.
 */
var int_1 = __webpack_require__(79159);
// TODO(dchest): add asserts for correct value ranges and array offsets.
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * signed 16-bit integer and returns it.
 */
function readInt16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 0] << 8) | array[offset + 1]) << 16) >> 16;
}
exports.readInt16BE = readInt16BE;
/**
 * Reads 2 bytes from array starting at offset as big-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 0] << 8) | array[offset + 1]) >>> 0;
}
exports.readUint16BE = readUint16BE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * signed 16-bit integer and returns it.
 */
function readInt16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (((array[offset + 1] << 8) | array[offset]) << 16) >> 16;
}
exports.readInt16LE = readInt16LE;
/**
 * Reads 2 bytes from array starting at offset as little-endian
 * unsigned 16-bit integer and returns it.
 */
function readUint16LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 1] << 8) | array[offset]) >>> 0;
}
exports.readUint16LE = readUint16LE;
/**
 * Writes 2-byte big-endian representation of 16-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 8;
    out[offset + 1] = value >>> 0;
    return out;
}
exports.writeUint16BE = writeUint16BE;
exports.writeInt16BE = writeUint16BE;
/**
 * Writes 2-byte little-endian representation of 16-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 2-byte one.
 *
 * Returns the output byte array.
 */
function writeUint16LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(2); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    return out;
}
exports.writeUint16LE = writeUint16LE;
exports.writeInt16LE = writeUint16LE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * signed 32-bit integer and returns it.
 */
function readInt32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3];
}
exports.readInt32BE = readInt32BE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset] << 24) |
        (array[offset + 1] << 16) |
        (array[offset + 2] << 8) |
        array[offset + 3]) >>> 0;
}
exports.readUint32BE = readUint32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * signed 32-bit integer and returns it.
 */
function readInt32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return (array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset];
}
exports.readInt32LE = readInt32LE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * unsigned 32-bit integer and returns it.
 */
function readUint32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    return ((array[offset + 3] << 24) |
        (array[offset + 2] << 16) |
        (array[offset + 1] << 8) |
        array[offset]) >>> 0;
}
exports.readUint32LE = readUint32LE;
/**
 * Writes 4-byte big-endian representation of 32-bit unsigned
 * value to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 24;
    out[offset + 1] = value >>> 16;
    out[offset + 2] = value >>> 8;
    out[offset + 3] = value >>> 0;
    return out;
}
exports.writeUint32BE = writeUint32BE;
exports.writeInt32BE = writeUint32BE;
/**
 * Writes 4-byte little-endian representation of 32-bit unsigned
 * value to array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeUint32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    out[offset + 0] = value >>> 0;
    out[offset + 1] = value >>> 8;
    out[offset + 2] = value >>> 16;
    out[offset + 3] = value >>> 24;
    return out;
}
exports.writeUint32LE = writeUint32LE;
exports.writeInt32LE = writeUint32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readInt32BE(array, offset);
    var lo = readInt32BE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
exports.readInt64BE = readInt64BE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var hi = readUint32BE(array, offset);
    var lo = readUint32BE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64BE = readUint64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * signed 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports exact
 * numbers in range -9007199254740991 to 9007199254740991.
 * If the number stored in the byte array is outside this range,
 * the result is not exact.
 */
function readInt64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readInt32LE(array, offset);
    var hi = readInt32LE(array, offset + 4);
    return hi * 0x100000000 + lo - ((lo >> 31) * 0x100000000);
}
exports.readInt64LE = readInt64LE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * unsigned 64-bit integer and returns it.
 *
 * IMPORTANT: due to JavaScript limitation, supports values up to 2^53-1.
 */
function readUint64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var lo = readUint32LE(array, offset);
    var hi = readUint32LE(array, offset + 4);
    return hi * 0x100000000 + lo;
}
exports.readUint64LE = readUint64LE;
/**
 * Writes 8-byte big-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32BE(value / 0x100000000 >>> 0, out, offset);
    writeUint32BE(value >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64BE = writeUint64BE;
exports.writeInt64BE = writeUint64BE;
/**
 * Writes 8-byte little-endian representation of 64-bit unsigned
 * value to byte array starting at offset.
 *
 * Due to JavaScript limitation, supports values up to 2^53-1.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeUint64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    writeUint32LE(value >>> 0, out, offset);
    writeUint32LE(value / 0x100000000 >>> 0, out, offset + 4);
    return out;
}
exports.writeUint64LE = writeUint64LE;
exports.writeInt64LE = writeUint64LE;
/**
 * Reads bytes from array starting at offset as big-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintBE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintBE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintBE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintBE = readUintBE;
/**
 * Reads bytes from array starting at offset as little-endian
 * unsigned bitLen-bit integer and returns it.
 *
 * Supports bit lengths divisible by 8, up to 48.
 */
function readUintLE(bitLength, array, offset) {
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("readUintLE supports only bitLengths divisible by 8");
    }
    if (bitLength / 8 > array.length - offset) {
        throw new Error("readUintLE: array is too short for the given bitLength");
    }
    var result = 0;
    var mul = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        result += array[i] * mul;
        mul *= 256;
    }
    return result;
}
exports.readUintLE = readUintLE;
/**
 * Writes a big-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintBE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintBE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintBE value must be an integer");
    }
    var div = 1;
    for (var i = bitLength / 8 + offset - 1; i >= offset; i--) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintBE = writeUintBE;
/**
 * Writes a little-endian representation of bitLen-bit unsigned
 * value to array starting at offset.
 *
 * Supports bit lengths divisible by 8, up to 48.
 *
 * If byte array is not given, creates a new one.
 *
 * Returns the output byte array.
 */
function writeUintLE(bitLength, value, out, offset) {
    if (out === void 0) { out = new Uint8Array(bitLength / 8); }
    if (offset === void 0) { offset = 0; }
    // TODO(dchest): implement support for bitLengths non-divisible by 8
    if (bitLength % 8 !== 0) {
        throw new Error("writeUintLE supports only bitLengths divisible by 8");
    }
    if (!int_1.isSafeInteger(value)) {
        throw new Error("writeUintLE value must be an integer");
    }
    var div = 1;
    for (var i = offset; i < offset + bitLength / 8; i++) {
        out[i] = (value / div) & 0xff;
        div *= 256;
    }
    return out;
}
exports.writeUintLE = writeUintLE;
/**
 * Reads 4 bytes from array starting at offset as big-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset);
}
exports.readFloat32BE = readFloat32BE;
/**
 * Reads 4 bytes from array starting at offset as little-endian
 * 32-bit floating-point number and returns it.
 */
function readFloat32LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat32(offset, true);
}
exports.readFloat32LE = readFloat32LE;
/**
 * Reads 8 bytes from array starting at offset as big-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64BE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset);
}
exports.readFloat64BE = readFloat64BE;
/**
 * Reads 8 bytes from array starting at offset as little-endian
 * 64-bit floating-point number ("double") and returns it.
 */
function readFloat64LE(array, offset) {
    if (offset === void 0) { offset = 0; }
    var view = new DataView(array.buffer, array.byteOffset, array.byteLength);
    return view.getFloat64(offset, true);
}
exports.readFloat64LE = readFloat64LE;
/**
 * Writes 4-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value);
    return out;
}
exports.writeFloat32BE = writeFloat32BE;
/**
 * Writes 4-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 4-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat32LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(4); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat32(offset, value, true);
    return out;
}
exports.writeFloat32LE = writeFloat32LE;
/**
 * Writes 8-byte big-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64BE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value);
    return out;
}
exports.writeFloat64BE = writeFloat64BE;
/**
 * Writes 8-byte little-endian floating-point representation of value
 * to byte array starting at offset.
 *
 * If byte array is not given, creates a new 8-byte one.
 *
 * Returns the output byte array.
 */
function writeFloat64LE(value, out, offset) {
    if (out === void 0) { out = new Uint8Array(8); }
    if (offset === void 0) { offset = 0; }
    var view = new DataView(out.buffer, out.byteOffset, out.byteLength);
    view.setFloat64(offset, value, true);
    return out;
}
exports.writeFloat64LE = writeFloat64LE;
//# sourceMappingURL=binary.js.map

/***/ }),

/***/ 77279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var chacha_1 = __webpack_require__(2787);
var poly1305_1 = __webpack_require__(50329);
var wipe_1 = __webpack_require__(19044);
var binary_1 = __webpack_require__(87689);
var constant_time_1 = __webpack_require__(23653);
exports.KEY_LENGTH = 32;
exports.NONCE_LENGTH = 12;
exports.TAG_LENGTH = 16;
var ZEROS = new Uint8Array(16);
/**
 * ChaCha20-Poly1305 Authenticated Encryption with Associated Data.
 *
 * Defined in RFC7539.
 */
var ChaCha20Poly1305 = /** @class */ (function () {
    /**
     * Creates a new instance with the given 32-byte key.
     */
    function ChaCha20Poly1305(key) {
        this.nonceLength = exports.NONCE_LENGTH;
        this.tagLength = exports.TAG_LENGTH;
        if (key.length !== exports.KEY_LENGTH) {
            throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        // Copy key.
        this._key = new Uint8Array(key);
    }
    /**
     * Encrypts and authenticates plaintext, authenticates associated data,
     * and returns sealed ciphertext, which includes authentication tag.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If dst is given (it must be the size of plaintext + the size of tag
     * length) the result will be put into it. Dst and plaintext must not
     * overlap.
     */
    ChaCha20Poly1305.prototype.seal = function (nonce, plaintext, associatedData, dst) {
        if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        // We pass full counter, which has 12-byte nonce and 4-byte block counter,
        // and it will get incremented after generating the block, which is
        // exactly what we need: we only use the first 32 bytes of 64-byte
        // ChaCha block and discard the next 32 bytes.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Allocate space for sealed ciphertext.
        var resultLength = plaintext.length + this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) {
                throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
        }
        else {
            result = new Uint8Array(resultLength);
        }
        // Encrypt plaintext.
        chacha_1.streamXOR(this._key, counter, plaintext, result, 4);
        // Authenticate.
        // XXX: can "simplify" here: pass full result (which is already padded
        // due to zeroes prepared for tag), and ciphertext length instead of
        // subarray of result.
        this._authenticate(result.subarray(result.length - this.tagLength, result.length), authKey, result.subarray(0, result.length - this.tagLength), associatedData);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    /**
     * Authenticates sealed ciphertext (which includes authentication tag) and
     * associated data, decrypts ciphertext and returns decrypted plaintext.
     *
     * RFC7539 specifies 12 bytes for nonce. It may be this 12-byte nonce
     * ("IV"), or full 16-byte counter (called "32-bit fixed-common part")
     * and nonce.
     *
     * If authentication fails, it returns null.
     *
     * If dst is given (it must be of ciphertext length minus tag length),
     * the result will be put into it. Dst and plaintext must not overlap.
     */
    ChaCha20Poly1305.prototype.open = function (nonce, sealed, associatedData, dst) {
        if (nonce.length > 16) {
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
        }
        // Sealed ciphertext should at least contain tag.
        if (sealed.length < this.tagLength) {
            // TODO(dchest): should we throw here instead?
            return null;
        }
        // Allocate space for counter, and set nonce as last bytes of it.
        var counter = new Uint8Array(16);
        counter.set(nonce, counter.length - nonce.length);
        // Generate authentication key by taking first 32-bytes of stream.
        var authKey = new Uint8Array(32);
        chacha_1.stream(this._key, counter, authKey, 4);
        // Authenticate.
        // XXX: can simplify and avoid allocation: since authenticate()
        // already allocates tag (from Poly1305.digest(), it can return)
        // it instead of copying to calculatedTag. But then in seal()
        // we'll need to copy it.
        var calculatedTag = new Uint8Array(this.tagLength);
        this._authenticate(calculatedTag, authKey, sealed.subarray(0, sealed.length - this.tagLength), associatedData);
        // Constant-time compare tags and return null if they differ.
        if (!constant_time_1.equal(calculatedTag, sealed.subarray(sealed.length - this.tagLength, sealed.length))) {
            return null;
        }
        // Allocate space for decrypted plaintext.
        var resultLength = sealed.length - this.tagLength;
        var result;
        if (dst) {
            if (dst.length !== resultLength) {
                throw new Error("ChaCha20Poly1305: incorrect destination length");
            }
            result = dst;
        }
        else {
            result = new Uint8Array(resultLength);
        }
        // Decrypt.
        chacha_1.streamXOR(this._key, counter, sealed.subarray(0, sealed.length - this.tagLength), result, 4);
        // Cleanup.
        wipe_1.wipe(counter);
        return result;
    };
    ChaCha20Poly1305.prototype.clean = function () {
        wipe_1.wipe(this._key);
        return this;
    };
    ChaCha20Poly1305.prototype._authenticate = function (tagOut, authKey, ciphertext, associatedData) {
        // Initialize Poly1305 with authKey.
        var h = new poly1305_1.Poly1305(authKey);
        // Authenticate padded associated data.
        if (associatedData) {
            h.update(associatedData);
            if (associatedData.length % 16 > 0) {
                h.update(ZEROS.subarray(associatedData.length % 16));
            }
        }
        // Authenticate padded ciphertext.
        h.update(ciphertext);
        if (ciphertext.length % 16 > 0) {
            h.update(ZEROS.subarray(ciphertext.length % 16));
        }
        // Authenticate length of associated data.
        // XXX: can avoid allocation here?
        var length = new Uint8Array(8);
        if (associatedData) {
            binary_1.writeUint64LE(associatedData.length, length);
        }
        h.update(length);
        // Authenticate length of ciphertext.
        binary_1.writeUint64LE(ciphertext.length, length);
        h.update(length);
        // Get tag and copy it into tagOut.
        var tag = h.digest();
        for (var i = 0; i < tag.length; i++) {
            tagOut[i] = tag[i];
        }
        // Cleanup.
        h.clean();
        wipe_1.wipe(tag);
        wipe_1.wipe(length);
    };
    return ChaCha20Poly1305;
}());
exports.ChaCha20Poly1305 = ChaCha20Poly1305;
//# sourceMappingURL=chacha20poly1305.js.map

/***/ }),

/***/ 2787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package chacha implements ChaCha stream cipher.
 */
var binary_1 = __webpack_require__(87689);
var wipe_1 = __webpack_require__(19044);
// Number of ChaCha rounds (ChaCha20).
var ROUNDS = 20;
// Applies the ChaCha core function to 16-byte input,
// 32-byte key key, and puts the result into 64-byte array out.
function core(out, input, key) {
    var j0 = 0x61707865; // "expa"  -- ChaCha's "sigma" constant
    var j1 = 0x3320646E; // "nd 3"     for 32-byte keys
    var j2 = 0x79622D32; // "2-by"
    var j3 = 0x6B206574; // "te k"
    var j4 = (key[3] << 24) | (key[2] << 16) | (key[1] << 8) | key[0];
    var j5 = (key[7] << 24) | (key[6] << 16) | (key[5] << 8) | key[4];
    var j6 = (key[11] << 24) | (key[10] << 16) | (key[9] << 8) | key[8];
    var j7 = (key[15] << 24) | (key[14] << 16) | (key[13] << 8) | key[12];
    var j8 = (key[19] << 24) | (key[18] << 16) | (key[17] << 8) | key[16];
    var j9 = (key[23] << 24) | (key[22] << 16) | (key[21] << 8) | key[20];
    var j10 = (key[27] << 24) | (key[26] << 16) | (key[25] << 8) | key[24];
    var j11 = (key[31] << 24) | (key[30] << 16) | (key[29] << 8) | key[28];
    var j12 = (input[3] << 24) | (input[2] << 16) | (input[1] << 8) | input[0];
    var j13 = (input[7] << 24) | (input[6] << 16) | (input[5] << 8) | input[4];
    var j14 = (input[11] << 24) | (input[10] << 16) | (input[9] << 8) | input[8];
    var j15 = (input[15] << 24) | (input[14] << 16) | (input[13] << 8) | input[12];
    var x0 = j0;
    var x1 = j1;
    var x2 = j2;
    var x3 = j3;
    var x4 = j4;
    var x5 = j5;
    var x6 = j6;
    var x7 = j7;
    var x8 = j8;
    var x9 = j9;
    var x10 = j10;
    var x11 = j11;
    var x12 = j12;
    var x13 = j13;
    var x14 = j14;
    var x15 = j15;
    for (var i = 0; i < ROUNDS; i += 2) {
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x2 = x2 + x6 | 0;
        x14 ^= x2;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x10 = x10 + x14 | 0;
        x6 ^= x10;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x3 = x3 + x7 | 0;
        x15 ^= x3;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x11 = x11 + x15 | 0;
        x7 ^= x11;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x1 = x1 + x5 | 0;
        x13 ^= x1;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x9 = x9 + x13 | 0;
        x5 ^= x9;
        x5 = x5 >>> (32 - 7) | x5 << 7;
        x0 = x0 + x4 | 0;
        x12 ^= x0;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x8 = x8 + x12 | 0;
        x4 ^= x8;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 16) | x15 << 16;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 12) | x5 << 12;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 16) | x12 << 16;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 12) | x6 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 16) | x13 << 16;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 12) | x7 << 12;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 16) | x14 << 16;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 12) | x4 << 12;
        x2 = x2 + x7 | 0;
        x13 ^= x2;
        x13 = x13 >>> (32 - 8) | x13 << 8;
        x8 = x8 + x13 | 0;
        x7 ^= x8;
        x7 = x7 >>> (32 - 7) | x7 << 7;
        x3 = x3 + x4 | 0;
        x14 ^= x3;
        x14 = x14 >>> (32 - 8) | x14 << 8;
        x9 = x9 + x14 | 0;
        x4 ^= x9;
        x4 = x4 >>> (32 - 7) | x4 << 7;
        x1 = x1 + x6 | 0;
        x12 ^= x1;
        x12 = x12 >>> (32 - 8) | x12 << 8;
        x11 = x11 + x12 | 0;
        x6 ^= x11;
        x6 = x6 >>> (32 - 7) | x6 << 7;
        x0 = x0 + x5 | 0;
        x15 ^= x0;
        x15 = x15 >>> (32 - 8) | x15 << 8;
        x10 = x10 + x15 | 0;
        x5 ^= x10;
        x5 = x5 >>> (32 - 7) | x5 << 7;
    }
    binary_1.writeUint32LE(x0 + j0 | 0, out, 0);
    binary_1.writeUint32LE(x1 + j1 | 0, out, 4);
    binary_1.writeUint32LE(x2 + j2 | 0, out, 8);
    binary_1.writeUint32LE(x3 + j3 | 0, out, 12);
    binary_1.writeUint32LE(x4 + j4 | 0, out, 16);
    binary_1.writeUint32LE(x5 + j5 | 0, out, 20);
    binary_1.writeUint32LE(x6 + j6 | 0, out, 24);
    binary_1.writeUint32LE(x7 + j7 | 0, out, 28);
    binary_1.writeUint32LE(x8 + j8 | 0, out, 32);
    binary_1.writeUint32LE(x9 + j9 | 0, out, 36);
    binary_1.writeUint32LE(x10 + j10 | 0, out, 40);
    binary_1.writeUint32LE(x11 + j11 | 0, out, 44);
    binary_1.writeUint32LE(x12 + j12 | 0, out, 48);
    binary_1.writeUint32LE(x13 + j13 | 0, out, 52);
    binary_1.writeUint32LE(x14 + j14 | 0, out, 56);
    binary_1.writeUint32LE(x15 + j15 | 0, out, 60);
}
/**
 * Encrypt src with ChaCha20 stream generated for the given 32-byte key and
 * 8-byte (as in original implementation) or 12-byte (as in RFC7539) nonce and
 * write the result into dst and return it.
 *
 * dst and src may be the same, but otherwise must not overlap.
 *
 * If nonce is 12 bytes, users should not encrypt more than 256 GiB with the
 * same key and nonce, otherwise the stream will repeat. The function will
 * throw error if counter overflows to prevent this.
 *
 * If nonce is 8 bytes, the output is practically unlimited (2^70 bytes, which
 * is more than a million petabytes). However, it is not recommended to
 * generate 8-byte nonces randomly, as the chance of collision is high.
 *
 * Never use the same key and nonce to encrypt more than one message.
 *
 * If nonceInplaceCounterLength is not 0, the nonce is assumed to be a 16-byte
 * array with stream counter in first nonceInplaceCounterLength bytes and nonce
 * in the last remaining bytes. The counter will be incremented inplace for
 * each ChaCha block. This is useful if you need to encrypt one stream of data
 * in chunks.
 */
function streamXOR(key, nonce, src, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    // We only support 256-bit keys.
    if (key.length !== 32) {
        throw new Error("ChaCha: key size must be 32 bytes");
    }
    if (dst.length < src.length) {
        throw new Error("ChaCha: destination is shorter than source");
    }
    var nc;
    var counterLength;
    if (nonceInplaceCounterLength === 0) {
        if (nonce.length !== 8 && nonce.length !== 12) {
            throw new Error("ChaCha nonce must be 8 or 12 bytes");
        }
        nc = new Uint8Array(16);
        // First counterLength bytes of nc are counter, starting with zero.
        counterLength = nc.length - nonce.length;
        // Last bytes of nc after counterLength are nonce, set them.
        nc.set(nonce, counterLength);
    }
    else {
        if (nonce.length !== 16) {
            throw new Error("ChaCha nonce with counter must be 16 bytes");
        }
        // This will update passed nonce with counter inplace.
        nc = nonce;
        counterLength = nonceInplaceCounterLength;
    }
    // Allocate temporary space for ChaCha block.
    var block = new Uint8Array(64);
    for (var i = 0; i < src.length; i += 64) {
        // Generate a block.
        core(block, nc, key);
        // XOR block bytes with src into dst.
        for (var j = i; j < i + 64 && j < src.length; j++) {
            dst[j] = src[j] ^ block[j - i];
        }
        // Increment counter.
        incrementCounter(nc, 0, counterLength);
    }
    // Cleanup temporary space.
    wipe_1.wipe(block);
    if (nonceInplaceCounterLength === 0) {
        // Cleanup counter.
        wipe_1.wipe(nc);
    }
    return dst;
}
exports.streamXOR = streamXOR;
/**
 * Generate ChaCha20 stream for the given 32-byte key and 8-byte or 12-byte
 * nonce and write it into dst and return it.
 *
 * Never use the same key and nonce to generate more than one stream.
 *
 * If nonceInplaceCounterLength is not 0, it behaves the same with respect to
 * the nonce as described in the streamXOR documentation.
 *
 * stream is like streamXOR with all-zero src.
 */
function stream(key, nonce, dst, nonceInplaceCounterLength) {
    if (nonceInplaceCounterLength === void 0) { nonceInplaceCounterLength = 0; }
    wipe_1.wipe(dst);
    return streamXOR(key, nonce, dst, dst, nonceInplaceCounterLength);
}
exports.stream = stream;
function incrementCounter(counter, pos, len) {
    var carry = 1;
    while (len--) {
        carry = carry + (counter[pos] & 0xff) | 0;
        counter[pos] = carry & 0xff;
        carry >>>= 8;
        pos++;
    }
    if (carry > 0) {
        throw new Error("ChaCha: counter overflow");
    }
}
//# sourceMappingURL=chacha.js.map

/***/ }),

/***/ 23653:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package constant-time provides functions for performing algorithmically constant-time operations.
 */
/**
 * NOTE! Due to the inability to guarantee real constant time evaluation of
 * anything in JavaScript VM, this is module is the best effort.
 */
/**
 * Returns resultIfOne if subject is 1, or resultIfZero if subject is 0.
 *
 * Supports only 32-bit integers, so resultIfOne or resultIfZero are not
 * integers, they'll be converted to them with bitwise operations.
 */
function select(subject, resultIfOne, resultIfZero) {
    return (~(subject - 1) & resultIfOne) | ((subject - 1) & resultIfZero);
}
exports.select = select;
/**
 * Returns 1 if a <= b, or 0 if not.
 * Arguments must be positive 32-bit integers less than or equal to 2^31 - 1.
 */
function lessOrEqual(a, b) {
    return (((a | 0) - (b | 0) - 1) >>> 31) & 1;
}
exports.lessOrEqual = lessOrEqual;
/**
 * Returns 1 if a and b are of equal length and their contents
 * are equal, or 0 otherwise.
 *
 * Note that unlike in equal(), zero-length inputs are considered
 * the same, so this function will return 1.
 */
function compare(a, b) {
    if (a.length !== b.length) {
        return 0;
    }
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        result |= a[i] ^ b[i];
    }
    return (1 & ((result - 1) >>> 8));
}
exports.compare = compare;
/**
 * Returns true if a and b are of equal non-zero length,
 * and their contents are equal, or false otherwise.
 *
 * Note that unlike in compare() zero-length inputs are considered
 * _not_ equal, so this function will return false.
 */
function equal(a, b) {
    if (a.length === 0 || b.length === 0) {
        return false;
    }
    return compare(a, b) !== 0;
}
exports.equal = equal;
//# sourceMappingURL=constant-time.js.map

/***/ }),

/***/ 96068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package ed25519 implements Ed25519 public-key signature algorithm.
 */
var random_1 = __webpack_require__(1651);
var sha512_1 = __webpack_require__(17212);
var wipe_1 = __webpack_require__(19044);
exports.SIGNATURE_LENGTH = 64;
exports.PUBLIC_KEY_LENGTH = 32;
exports.SECRET_KEY_LENGTH = 64;
exports.SEED_LENGTH = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function gf(init) {
    var r = new Float64Array(16);
    if (init) {
        for (var i = 0; i < init.length; i++) {
            r[i] = init[i];
        }
    }
    return r;
}
// Base point.
var _9 = new Uint8Array(32);
_9[0] = 9;
var gf0 = gf();
var gf1 = gf([1]);
var D = gf([
    0x78a3, 0x1359, 0x4dca, 0x75eb, 0xd8ab, 0x4141, 0x0a4d, 0x0070,
    0xe898, 0x7779, 0x4079, 0x8cc7, 0xfe73, 0x2b6f, 0x6cee, 0x5203
]);
var D2 = gf([
    0xf159, 0x26b2, 0x9b94, 0xebd6, 0xb156, 0x8283, 0x149a, 0x00e0,
    0xd130, 0xeef3, 0x80f2, 0x198e, 0xfce7, 0x56df, 0xd9dc, 0x2406
]);
var X = gf([
    0xd51a, 0x8f25, 0x2d60, 0xc956, 0xa7b2, 0x9525, 0xc760, 0x692c,
    0xdc5c, 0xfdd6, 0xe231, 0xc0a4, 0x53fe, 0xcd6e, 0x36d3, 0x2169
]);
var Y = gf([
    0x6658, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666,
    0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666, 0x6666
]);
var I = gf([
    0xa0b0, 0x4a0e, 0x1b27, 0xc4ee, 0xe478, 0xad2f, 0x1806, 0x2f43,
    0xd7a7, 0x3dfb, 0x0099, 0x2b4d, 0xdf0b, 0x4fc1, 0x2480, 0x2b83
]);
function set25519(r, a) {
    for (var i = 0; i < 16; i++) {
        r[i] = a[i] | 0;
    }
}
function car25519(o) {
    var c = 1;
    for (var i = 0; i < 16; i++) {
        var v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
    var c = ~(b - 1);
    for (var i = 0; i < 16; i++) {
        var t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function pack25519(o, n) {
    var m = gf();
    var t = gf();
    for (var i = 0; i < 16; i++) {
        t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (var j = 0; j < 2; j++) {
        m[0] = t[0] - 0xffed;
        for (var i = 1; i < 15; i++) {
            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
        var b = (m[15] >> 16) & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for (var i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function verify32(x, y) {
    var d = 0;
    for (var i = 0; i < 32; i++) {
        d |= x[i] ^ y[i];
    }
    return (1 & ((d - 1) >>> 8)) - 1;
}
function neq25519(a, b) {
    var c = new Uint8Array(32);
    var d = new Uint8Array(32);
    pack25519(c, a);
    pack25519(d, b);
    return verify32(c, d);
}
function par25519(a) {
    var d = new Uint8Array(32);
    pack25519(d, a);
    return d[0] & 1;
}
function unpack25519(o, n) {
    for (var i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 0x7fff;
}
function add(o, a, b) {
    for (var i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
    }
}
function sub(o, a, b) {
    for (var i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
    }
}
function mul(o, a, b) {
    var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function square(o, a) {
    mul(o, a, a);
}
function inv25519(o, i) {
    var c = gf();
    var a;
    for (a = 0; a < 16; a++) {
        c[a] = i[a];
    }
    for (a = 253; a >= 0; a--) {
        square(c, c);
        if (a !== 2 && a !== 4) {
            mul(c, c, i);
        }
    }
    for (a = 0; a < 16; a++) {
        o[a] = c[a];
    }
}
function pow2523(o, i) {
    var c = gf();
    var a;
    for (a = 0; a < 16; a++) {
        c[a] = i[a];
    }
    for (a = 250; a >= 0; a--) {
        square(c, c);
        if (a !== 1) {
            mul(c, c, i);
        }
    }
    for (a = 0; a < 16; a++) {
        o[a] = c[a];
    }
}
function edadd(p, q) {
    var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf(), g = gf(), h = gf(), t = gf();
    sub(a, p[1], p[0]);
    sub(t, q[1], q[0]);
    mul(a, a, t);
    add(b, p[0], p[1]);
    add(t, q[0], q[1]);
    mul(b, b, t);
    mul(c, p[3], q[3]);
    mul(c, c, D2);
    mul(d, p[2], q[2]);
    add(d, d, d);
    sub(e, b, a);
    sub(f, d, c);
    add(g, d, c);
    add(h, b, a);
    mul(p[0], e, f);
    mul(p[1], h, g);
    mul(p[2], g, f);
    mul(p[3], e, h);
}
function cswap(p, q, b) {
    for (var i = 0; i < 4; i++) {
        sel25519(p[i], q[i], b);
    }
}
function pack(r, p) {
    var tx = gf(), ty = gf(), zi = gf();
    inv25519(zi, p[2]);
    mul(tx, p[0], zi);
    mul(ty, p[1], zi);
    pack25519(r, ty);
    r[31] ^= par25519(tx) << 7;
}
function scalarmult(p, q, s) {
    set25519(p[0], gf0);
    set25519(p[1], gf1);
    set25519(p[2], gf1);
    set25519(p[3], gf0);
    for (var i = 255; i >= 0; --i) {
        var b = (s[(i / 8) | 0] >> (i & 7)) & 1;
        cswap(p, q, b);
        edadd(q, p);
        edadd(p, p);
        cswap(p, q, b);
    }
}
function scalarbase(p, s) {
    var q = [gf(), gf(), gf(), gf()];
    set25519(q[0], X);
    set25519(q[1], Y);
    set25519(q[2], gf1);
    mul(q[3], X, Y);
    scalarmult(p, q, s);
}
// Generates key pair from secret 32-byte seed.
function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SEED_LENGTH) {
        throw new Error("ed25519: seed must be " + exports.SEED_LENGTH + " bytes");
    }
    var d = sha512_1.hash(seed);
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    var publicKey = new Uint8Array(32);
    var p = [gf(), gf(), gf(), gf()];
    scalarbase(p, d);
    pack(publicKey, p);
    var secretKey = new Uint8Array(64);
    secretKey.set(seed);
    secretKey.set(publicKey, 32);
    return {
        publicKey: publicKey,
        secretKey: secretKey
    };
}
exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
function generateKeyPair(prng) {
    var seed = random_1.randomBytes(32, prng);
    var result = generateKeyPairFromSeed(seed);
    wipe_1.wipe(seed);
    return result;
}
exports.generateKeyPair = generateKeyPair;
function extractPublicKeyFromSecretKey(secretKey) {
    if (secretKey.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error("ed25519: secret key must be " + exports.SECRET_KEY_LENGTH + " bytes");
    }
    return new Uint8Array(secretKey.subarray(32));
}
exports.extractPublicKeyFromSecretKey = extractPublicKeyFromSecretKey;
var L = new Float64Array([
    0xed, 0xd3, 0xf5, 0x5c, 0x1a, 0x63, 0x12, 0x58, 0xd6, 0x9c, 0xf7, 0xa2,
    0xde, 0xf9, 0xde, 0x14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x10
]);
function modL(r, x) {
    var carry;
    var i;
    var j;
    var k;
    for (i = 63; i >= 32; --i) {
        carry = 0;
        for (j = i - 32, k = i - 12; j < k; ++j) {
            x[j] += carry - 16 * x[i] * L[j - (i - 32)];
            carry = Math.floor((x[j] + 128) / 256);
            x[j] -= carry * 256;
        }
        x[j] += carry;
        x[i] = 0;
    }
    carry = 0;
    for (j = 0; j < 32; j++) {
        x[j] += carry - (x[31] >> 4) * L[j];
        carry = x[j] >> 8;
        x[j] &= 255;
    }
    for (j = 0; j < 32; j++) {
        x[j] -= carry * L[j];
    }
    for (i = 0; i < 32; i++) {
        x[i + 1] += x[i] >> 8;
        r[i] = x[i] & 255;
    }
}
function reduce(r) {
    var x = new Float64Array(64);
    for (var i = 0; i < 64; i++) {
        x[i] = r[i];
    }
    for (var i = 0; i < 64; i++) {
        r[i] = 0;
    }
    modL(r, x);
}
// Returns 64-byte signature of the message under the 64-byte secret key.
function sign(secretKey, message) {
    var x = new Float64Array(64);
    var p = [gf(), gf(), gf(), gf()];
    var d = sha512_1.hash(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    var signature = new Uint8Array(64);
    signature.set(d.subarray(32), 32);
    var hs = new sha512_1.SHA512();
    hs.update(signature.subarray(32));
    hs.update(message);
    var r = hs.digest();
    hs.clean();
    reduce(r);
    scalarbase(p, r);
    pack(signature, p);
    hs.reset();
    hs.update(signature.subarray(0, 32));
    hs.update(secretKey.subarray(32));
    hs.update(message);
    var h = hs.digest();
    reduce(h);
    for (var i = 0; i < 32; i++) {
        x[i] = r[i];
    }
    for (var i = 0; i < 32; i++) {
        for (var j = 0; j < 32; j++) {
            x[i + j] += h[i] * d[j];
        }
    }
    modL(signature.subarray(32), x);
    return signature;
}
exports.sign = sign;
function unpackneg(r, p) {
    var t = gf(), chk = gf(), num = gf(), den = gf(), den2 = gf(), den4 = gf(), den6 = gf();
    set25519(r[2], gf1);
    unpack25519(r[1], p);
    square(num, r[1]);
    mul(den, num, D);
    sub(num, num, r[2]);
    add(den, r[2], den);
    square(den2, den);
    square(den4, den2);
    mul(den6, den4, den2);
    mul(t, den6, num);
    mul(t, t, den);
    pow2523(t, t);
    mul(t, t, num);
    mul(t, t, den);
    mul(t, t, den);
    mul(r[0], t, den);
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
        mul(r[0], r[0], I);
    }
    square(chk, r[0]);
    mul(chk, chk, den);
    if (neq25519(chk, num)) {
        return -1;
    }
    if (par25519(r[0]) === (p[31] >> 7)) {
        sub(r[0], gf0, r[0]);
    }
    mul(r[3], r[0], r[1]);
    return 0;
}
function verify(publicKey, message, signature) {
    var t = new Uint8Array(32);
    var p = [gf(), gf(), gf(), gf()];
    var q = [gf(), gf(), gf(), gf()];
    if (signature.length !== exports.SIGNATURE_LENGTH) {
        throw new Error("ed25519: signature must be " + exports.SIGNATURE_LENGTH + " bytes");
    }
    if (unpackneg(q, publicKey)) {
        return false;
    }
    var hs = new sha512_1.SHA512();
    hs.update(signature.subarray(0, 32));
    hs.update(publicKey);
    hs.update(message);
    var h = hs.digest();
    reduce(h);
    scalarmult(p, q, h);
    scalarbase(q, signature.subarray(32));
    edadd(p, q);
    pack(t, p);
    if (verify32(signature, t)) {
        return false;
    }
    return true;
}
exports.verify = verify;
/**
 * Convert Ed25519 public key to X25519 public key.
 *
 * Throws if given an invalid public key.
 */
function convertPublicKeyToX25519(publicKey) {
    var q = [gf(), gf(), gf(), gf()];
    if (unpackneg(q, publicKey)) {
        throw new Error("Ed25519: invalid public key");
    }
    // Formula: montgomeryX = (edwardsY + 1)*inverse(1 - edwardsY) mod p
    var a = gf();
    var b = gf();
    var y = q[1];
    add(a, gf1, y);
    sub(b, gf1, y);
    inv25519(b, b);
    mul(a, a, b);
    var z = new Uint8Array(32);
    pack25519(z, a);
    return z;
}
exports.convertPublicKeyToX25519 = convertPublicKeyToX25519;
/**
 *  Convert Ed25519 secret (private) key to X25519 secret key.
 */
function convertSecretKeyToX25519(secretKey) {
    var d = sha512_1.hash(secretKey.subarray(0, 32));
    d[0] &= 248;
    d[31] &= 127;
    d[31] |= 64;
    var o = new Uint8Array(d.subarray(0, 32));
    wipe_1.wipe(d);
    return o;
}
exports.convertSecretKeyToX25519 = convertSecretKeyToX25519;
//# sourceMappingURL=ed25519.js.map

/***/ }),

/***/ 79159:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package int provides helper functions for integerss.
 */
// Shim using 16-bit pieces.
function imulShim(a, b) {
    var ah = (a >>> 16) & 0xffff, al = a & 0xffff;
    var bh = (b >>> 16) & 0xffff, bl = b & 0xffff;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
}
/** 32-bit integer multiplication.  */
// Use system Math.imul if available, otherwise use our shim.
exports.mul = Math.imul || imulShim;
/** 32-bit integer addition.  */
function add(a, b) {
    return (a + b) | 0;
}
exports.add = add;
/**  32-bit integer subtraction.  */
function sub(a, b) {
    return (a - b) | 0;
}
exports.sub = sub;
/** 32-bit integer left rotation */
function rotl(x, n) {
    return x << n | x >>> (32 - n);
}
exports.rotl = rotl;
/** 32-bit integer left rotation */
function rotr(x, n) {
    return x << (32 - n) | x >>> n;
}
exports.rotr = rotr;
function isIntegerShim(n) {
    return typeof n === "number" && isFinite(n) && Math.floor(n) === n;
}
/**
 * Returns true if the argument is an integer number.
 *
 * In ES2015, Number.isInteger.
 */
exports.isInteger = Number.isInteger || isIntegerShim;
/**
 *  Math.pow(2, 53) - 1
 *
 *  In ES2015 Number.MAX_SAFE_INTEGER.
 */
exports.MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Returns true if the argument is a safe integer number
 * (-MIN_SAFE_INTEGER < number <= MAX_SAFE_INTEGER)
 *
 * In ES2015, Number.isSafeInteger.
 */
exports.isSafeInteger = function (n) {
    return exports.isInteger(n) && (n >= -exports.MAX_SAFE_INTEGER && n <= exports.MAX_SAFE_INTEGER);
};
//# sourceMappingURL=int.js.map

/***/ }),

/***/ 50329:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package poly1305 implements Poly1305 one-time message authentication algorithm.
 */
var constant_time_1 = __webpack_require__(23653);
var wipe_1 = __webpack_require__(19044);
exports.DIGEST_LENGTH = 16;
// Port of Andrew Moon's Poly1305-donna-16. Public domain.
// https://github.com/floodyberry/poly1305-donna
/**
 * Poly1305 computes 16-byte authenticator of message using
 * a one-time 32-byte key.
 *
 * Important: key should be used for only one message,
 * it should never repeat.
 */
var Poly1305 = /** @class */ (function () {
    function Poly1305(key) {
        this.digestLength = exports.DIGEST_LENGTH;
        this._buffer = new Uint8Array(16);
        this._r = new Uint16Array(10);
        this._h = new Uint16Array(10);
        this._pad = new Uint16Array(8);
        this._leftover = 0;
        this._fin = 0;
        this._finished = false;
        var t0 = key[0] | key[1] << 8;
        this._r[0] = (t0) & 0x1fff;
        var t1 = key[2] | key[3] << 8;
        this._r[1] = ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
        var t2 = key[4] | key[5] << 8;
        this._r[2] = ((t1 >>> 10) | (t2 << 6)) & 0x1f03;
        var t3 = key[6] | key[7] << 8;
        this._r[3] = ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
        var t4 = key[8] | key[9] << 8;
        this._r[4] = ((t3 >>> 4) | (t4 << 12)) & 0x00ff;
        this._r[5] = ((t4 >>> 1)) & 0x1ffe;
        var t5 = key[10] | key[11] << 8;
        this._r[6] = ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
        var t6 = key[12] | key[13] << 8;
        this._r[7] = ((t5 >>> 11) | (t6 << 5)) & 0x1f81;
        var t7 = key[14] | key[15] << 8;
        this._r[8] = ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
        this._r[9] = ((t7 >>> 5)) & 0x007f;
        this._pad[0] = key[16] | key[17] << 8;
        this._pad[1] = key[18] | key[19] << 8;
        this._pad[2] = key[20] | key[21] << 8;
        this._pad[3] = key[22] | key[23] << 8;
        this._pad[4] = key[24] | key[25] << 8;
        this._pad[5] = key[26] | key[27] << 8;
        this._pad[6] = key[28] | key[29] << 8;
        this._pad[7] = key[30] | key[31] << 8;
    }
    Poly1305.prototype._blocks = function (m, mpos, bytes) {
        var hibit = this._fin ? 0 : 1 << 11;
        var h0 = this._h[0], h1 = this._h[1], h2 = this._h[2], h3 = this._h[3], h4 = this._h[4], h5 = this._h[5], h6 = this._h[6], h7 = this._h[7], h8 = this._h[8], h9 = this._h[9];
        var r0 = this._r[0], r1 = this._r[1], r2 = this._r[2], r3 = this._r[3], r4 = this._r[4], r5 = this._r[5], r6 = this._r[6], r7 = this._r[7], r8 = this._r[8], r9 = this._r[9];
        while (bytes >= 16) {
            var t0 = m[mpos + 0] | m[mpos + 1] << 8;
            h0 += (t0) & 0x1fff;
            var t1 = m[mpos + 2] | m[mpos + 3] << 8;
            h1 += ((t0 >>> 13) | (t1 << 3)) & 0x1fff;
            var t2 = m[mpos + 4] | m[mpos + 5] << 8;
            h2 += ((t1 >>> 10) | (t2 << 6)) & 0x1fff;
            var t3 = m[mpos + 6] | m[mpos + 7] << 8;
            h3 += ((t2 >>> 7) | (t3 << 9)) & 0x1fff;
            var t4 = m[mpos + 8] | m[mpos + 9] << 8;
            h4 += ((t3 >>> 4) | (t4 << 12)) & 0x1fff;
            h5 += ((t4 >>> 1)) & 0x1fff;
            var t5 = m[mpos + 10] | m[mpos + 11] << 8;
            h6 += ((t4 >>> 14) | (t5 << 2)) & 0x1fff;
            var t6 = m[mpos + 12] | m[mpos + 13] << 8;
            h7 += ((t5 >>> 11) | (t6 << 5)) & 0x1fff;
            var t7 = m[mpos + 14] | m[mpos + 15] << 8;
            h8 += ((t6 >>> 8) | (t7 << 8)) & 0x1fff;
            h9 += ((t7 >>> 5)) | hibit;
            var c = 0;
            var d0 = c;
            d0 += h0 * r0;
            d0 += h1 * (5 * r9);
            d0 += h2 * (5 * r8);
            d0 += h3 * (5 * r7);
            d0 += h4 * (5 * r6);
            c = (d0 >>> 13);
            d0 &= 0x1fff;
            d0 += h5 * (5 * r5);
            d0 += h6 * (5 * r4);
            d0 += h7 * (5 * r3);
            d0 += h8 * (5 * r2);
            d0 += h9 * (5 * r1);
            c += (d0 >>> 13);
            d0 &= 0x1fff;
            var d1 = c;
            d1 += h0 * r1;
            d1 += h1 * r0;
            d1 += h2 * (5 * r9);
            d1 += h3 * (5 * r8);
            d1 += h4 * (5 * r7);
            c = (d1 >>> 13);
            d1 &= 0x1fff;
            d1 += h5 * (5 * r6);
            d1 += h6 * (5 * r5);
            d1 += h7 * (5 * r4);
            d1 += h8 * (5 * r3);
            d1 += h9 * (5 * r2);
            c += (d1 >>> 13);
            d1 &= 0x1fff;
            var d2 = c;
            d2 += h0 * r2;
            d2 += h1 * r1;
            d2 += h2 * r0;
            d2 += h3 * (5 * r9);
            d2 += h4 * (5 * r8);
            c = (d2 >>> 13);
            d2 &= 0x1fff;
            d2 += h5 * (5 * r7);
            d2 += h6 * (5 * r6);
            d2 += h7 * (5 * r5);
            d2 += h8 * (5 * r4);
            d2 += h9 * (5 * r3);
            c += (d2 >>> 13);
            d2 &= 0x1fff;
            var d3 = c;
            d3 += h0 * r3;
            d3 += h1 * r2;
            d3 += h2 * r1;
            d3 += h3 * r0;
            d3 += h4 * (5 * r9);
            c = (d3 >>> 13);
            d3 &= 0x1fff;
            d3 += h5 * (5 * r8);
            d3 += h6 * (5 * r7);
            d3 += h7 * (5 * r6);
            d3 += h8 * (5 * r5);
            d3 += h9 * (5 * r4);
            c += (d3 >>> 13);
            d3 &= 0x1fff;
            var d4 = c;
            d4 += h0 * r4;
            d4 += h1 * r3;
            d4 += h2 * r2;
            d4 += h3 * r1;
            d4 += h4 * r0;
            c = (d4 >>> 13);
            d4 &= 0x1fff;
            d4 += h5 * (5 * r9);
            d4 += h6 * (5 * r8);
            d4 += h7 * (5 * r7);
            d4 += h8 * (5 * r6);
            d4 += h9 * (5 * r5);
            c += (d4 >>> 13);
            d4 &= 0x1fff;
            var d5 = c;
            d5 += h0 * r5;
            d5 += h1 * r4;
            d5 += h2 * r3;
            d5 += h3 * r2;
            d5 += h4 * r1;
            c = (d5 >>> 13);
            d5 &= 0x1fff;
            d5 += h5 * r0;
            d5 += h6 * (5 * r9);
            d5 += h7 * (5 * r8);
            d5 += h8 * (5 * r7);
            d5 += h9 * (5 * r6);
            c += (d5 >>> 13);
            d5 &= 0x1fff;
            var d6 = c;
            d6 += h0 * r6;
            d6 += h1 * r5;
            d6 += h2 * r4;
            d6 += h3 * r3;
            d6 += h4 * r2;
            c = (d6 >>> 13);
            d6 &= 0x1fff;
            d6 += h5 * r1;
            d6 += h6 * r0;
            d6 += h7 * (5 * r9);
            d6 += h8 * (5 * r8);
            d6 += h9 * (5 * r7);
            c += (d6 >>> 13);
            d6 &= 0x1fff;
            var d7 = c;
            d7 += h0 * r7;
            d7 += h1 * r6;
            d7 += h2 * r5;
            d7 += h3 * r4;
            d7 += h4 * r3;
            c = (d7 >>> 13);
            d7 &= 0x1fff;
            d7 += h5 * r2;
            d7 += h6 * r1;
            d7 += h7 * r0;
            d7 += h8 * (5 * r9);
            d7 += h9 * (5 * r8);
            c += (d7 >>> 13);
            d7 &= 0x1fff;
            var d8 = c;
            d8 += h0 * r8;
            d8 += h1 * r7;
            d8 += h2 * r6;
            d8 += h3 * r5;
            d8 += h4 * r4;
            c = (d8 >>> 13);
            d8 &= 0x1fff;
            d8 += h5 * r3;
            d8 += h6 * r2;
            d8 += h7 * r1;
            d8 += h8 * r0;
            d8 += h9 * (5 * r9);
            c += (d8 >>> 13);
            d8 &= 0x1fff;
            var d9 = c;
            d9 += h0 * r9;
            d9 += h1 * r8;
            d9 += h2 * r7;
            d9 += h3 * r6;
            d9 += h4 * r5;
            c = (d9 >>> 13);
            d9 &= 0x1fff;
            d9 += h5 * r4;
            d9 += h6 * r3;
            d9 += h7 * r2;
            d9 += h8 * r1;
            d9 += h9 * r0;
            c += (d9 >>> 13);
            d9 &= 0x1fff;
            c = (((c << 2) + c)) | 0;
            c = (c + d0) | 0;
            d0 = c & 0x1fff;
            c = (c >>> 13);
            d1 += c;
            h0 = d0;
            h1 = d1;
            h2 = d2;
            h3 = d3;
            h4 = d4;
            h5 = d5;
            h6 = d6;
            h7 = d7;
            h8 = d8;
            h9 = d9;
            mpos += 16;
            bytes -= 16;
        }
        this._h[0] = h0;
        this._h[1] = h1;
        this._h[2] = h2;
        this._h[3] = h3;
        this._h[4] = h4;
        this._h[5] = h5;
        this._h[6] = h6;
        this._h[7] = h7;
        this._h[8] = h8;
        this._h[9] = h9;
    };
    Poly1305.prototype.finish = function (mac, macpos) {
        if (macpos === void 0) { macpos = 0; }
        var g = new Uint16Array(10);
        var c;
        var mask;
        var f;
        var i;
        if (this._leftover) {
            i = this._leftover;
            this._buffer[i++] = 1;
            for (; i < 16; i++) {
                this._buffer[i] = 0;
            }
            this._fin = 1;
            this._blocks(this._buffer, 0, 16);
        }
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        for (i = 2; i < 10; i++) {
            this._h[i] += c;
            c = this._h[i] >>> 13;
            this._h[i] &= 0x1fff;
        }
        this._h[0] += (c * 5);
        c = this._h[0] >>> 13;
        this._h[0] &= 0x1fff;
        this._h[1] += c;
        c = this._h[1] >>> 13;
        this._h[1] &= 0x1fff;
        this._h[2] += c;
        g[0] = this._h[0] + 5;
        c = g[0] >>> 13;
        g[0] &= 0x1fff;
        for (i = 1; i < 10; i++) {
            g[i] = this._h[i] + c;
            c = g[i] >>> 13;
            g[i] &= 0x1fff;
        }
        g[9] -= (1 << 13);
        mask = (c ^ 1) - 1;
        for (i = 0; i < 10; i++) {
            g[i] &= mask;
        }
        mask = ~mask;
        for (i = 0; i < 10; i++) {
            this._h[i] = (this._h[i] & mask) | g[i];
        }
        this._h[0] = ((this._h[0]) | (this._h[1] << 13)) & 0xffff;
        this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 0xffff;
        this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 0xffff;
        this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 0xffff;
        this._h[4] = ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) & 0xffff;
        this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 0xffff;
        this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 0xffff;
        this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 0xffff;
        f = this._h[0] + this._pad[0];
        this._h[0] = f & 0xffff;
        for (i = 1; i < 8; i++) {
            f = (((this._h[i] + this._pad[i]) | 0) + (f >>> 16)) | 0;
            this._h[i] = f & 0xffff;
        }
        mac[macpos + 0] = this._h[0] >>> 0;
        mac[macpos + 1] = this._h[0] >>> 8;
        mac[macpos + 2] = this._h[1] >>> 0;
        mac[macpos + 3] = this._h[1] >>> 8;
        mac[macpos + 4] = this._h[2] >>> 0;
        mac[macpos + 5] = this._h[2] >>> 8;
        mac[macpos + 6] = this._h[3] >>> 0;
        mac[macpos + 7] = this._h[3] >>> 8;
        mac[macpos + 8] = this._h[4] >>> 0;
        mac[macpos + 9] = this._h[4] >>> 8;
        mac[macpos + 10] = this._h[5] >>> 0;
        mac[macpos + 11] = this._h[5] >>> 8;
        mac[macpos + 12] = this._h[6] >>> 0;
        mac[macpos + 13] = this._h[6] >>> 8;
        mac[macpos + 14] = this._h[7] >>> 0;
        mac[macpos + 15] = this._h[7] >>> 8;
        this._finished = true;
        return this;
    };
    Poly1305.prototype.update = function (m) {
        var mpos = 0;
        var bytes = m.length;
        var want;
        if (this._leftover) {
            want = (16 - this._leftover);
            if (want > bytes) {
                want = bytes;
            }
            for (var i = 0; i < want; i++) {
                this._buffer[this._leftover + i] = m[mpos + i];
            }
            bytes -= want;
            mpos += want;
            this._leftover += want;
            if (this._leftover < 16) {
                return this;
            }
            this._blocks(this._buffer, 0, 16);
            this._leftover = 0;
        }
        if (bytes >= 16) {
            want = bytes - (bytes % 16);
            this._blocks(m, mpos, want);
            mpos += want;
            bytes -= want;
        }
        if (bytes) {
            for (var i = 0; i < bytes; i++) {
                this._buffer[this._leftover + i] = m[mpos + i];
            }
            this._leftover += bytes;
        }
        return this;
    };
    Poly1305.prototype.digest = function () {
        // TODO(dchest): it behaves differently than other hashes/HMAC,
        // because it throws when finished — others just return saved result.
        if (this._finished) {
            throw new Error("Poly1305 was finished");
        }
        var mac = new Uint8Array(16);
        this.finish(mac);
        return mac;
    };
    Poly1305.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._r);
        wipe_1.wipe(this._h);
        wipe_1.wipe(this._pad);
        this._leftover = 0;
        this._fin = 0;
        this._finished = true; // mark as finished even if not
        return this;
    };
    return Poly1305;
}());
exports.Poly1305 = Poly1305;
/**
 * Returns 16-byte authenticator of data using a one-time 32-byte key.
 *
 * Important: key should be used for only one message, it should never repeat.
 */
function oneTimeAuth(key, data) {
    var h = new Poly1305(key);
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.oneTimeAuth = oneTimeAuth;
/**
 * Returns true if two authenticators are 16-byte long and equal.
 * Uses contant-time comparison to avoid leaking timing information.
 */
function equal(a, b) {
    if (a.length !== exports.DIGEST_LENGTH || b.length !== exports.DIGEST_LENGTH) {
        return false;
    }
    return constant_time_1.equal(a, b);
}
exports.equal = equal;
//# sourceMappingURL=poly1305.js.map

/***/ }),

/***/ 1651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var system_1 = __webpack_require__(61309);
var binary_1 = __webpack_require__(87689);
var wipe_1 = __webpack_require__(19044);
exports.defaultRandomSource = new system_1.SystemRandomSource();
function randomBytes(length, prng) {
    if (prng === void 0) { prng = exports.defaultRandomSource; }
    return prng.randomBytes(length);
}
exports.randomBytes = randomBytes;
/**
 * Returns a uniformly random unsigned 32-bit integer.
 */
function randomUint32(prng) {
    if (prng === void 0) { prng = exports.defaultRandomSource; }
    // Generate 4-byte random buffer.
    var buf = randomBytes(4, prng);
    // Convert bytes from buffer into a 32-bit integer.
    // It's not important which byte order to use, since
    // the result is random.
    var result = binary_1.readUint32LE(buf);
    // Clean the buffer.
    wipe_1.wipe(buf);
    return result;
}
exports.randomUint32 = randomUint32;
/** 62 alphanumeric characters for default charset of randomString() */
var ALPHANUMERIC = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
/**
 * Returns a uniform random string of the given length
 * with characters from the given charset.
 *
 * Charset must not have more than 256 characters.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */
function randomString(length, charset, prng) {
    if (charset === void 0) { charset = ALPHANUMERIC; }
    if (prng === void 0) { prng = exports.defaultRandomSource; }
    if (charset.length < 2) {
        throw new Error("randomString charset is too short");
    }
    if (charset.length > 256) {
        throw new Error("randomString charset is too long");
    }
    var out = '';
    var charsLen = charset.length;
    var maxByte = 256 - (256 % charsLen);
    while (length > 0) {
        var buf = randomBytes(Math.ceil(length * 256 / maxByte), prng);
        for (var i = 0; i < buf.length && length > 0; i++) {
            var randomByte = buf[i];
            if (randomByte < maxByte) {
                out += charset.charAt(randomByte % charsLen);
                length--;
            }
        }
        wipe_1.wipe(buf);
    }
    return out;
}
exports.randomString = randomString;
/**
 * Returns uniform random string containing at least the given
 * number of bits of entropy.
 *
 * For example, randomStringForEntropy(128) will return a 22-character
 * alphanumeric string, while randomStringForEntropy(128, "0123456789")
 * will return a 39-character numeric string, both will contain at
 * least 128 bits of entropy.
 *
 * Default charset generates case-sensitive alphanumeric
 * strings (0-9, A-Z, a-z).
 */
function randomStringForEntropy(bits, charset, prng) {
    if (charset === void 0) { charset = ALPHANUMERIC; }
    if (prng === void 0) { prng = exports.defaultRandomSource; }
    var length = Math.ceil(bits / (Math.log(charset.length) / Math.LN2));
    return randomString(length, charset, prng);
}
exports.randomStringForEntropy = randomStringForEntropy;
//# sourceMappingURL=random.js.map

/***/ }),

/***/ 77010:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var QUOTA = 65536;
var BrowserRandomSource = /** @class */ (function () {
    function BrowserRandomSource() {
        this.isAvailable = false;
        this.isInstantiated = false;
        var browserCrypto = typeof self !== 'undefined'
            ? (self.crypto || self.msCrypto) // IE11 has msCrypto
            : null;
        if (browserCrypto && browserCrypto.getRandomValues) {
            this._crypto = browserCrypto;
            this.isAvailable = true;
            this.isInstantiated = true;
        }
    }
    BrowserRandomSource.prototype.randomBytes = function (length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Browser random byte generator is not available.");
        }
        var out = new Uint8Array(length);
        for (var i = 0; i < out.length; i += QUOTA) {
            this._crypto.getRandomValues(out.subarray(i, i + Math.min(out.length - i, QUOTA)));
        }
        return out;
    };
    return BrowserRandomSource;
}());
exports.BrowserRandomSource = BrowserRandomSource;
//# sourceMappingURL=browser.js.map

/***/ }),

/***/ 6657:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var wipe_1 = __webpack_require__(19044);
var NodeRandomSource = /** @class */ (function () {
    function NodeRandomSource() {
        this.isAvailable = false;
        this.isInstantiated = false;
        if (true) {
            var nodeCrypto = __webpack_require__(14781);
            if (nodeCrypto && nodeCrypto.randomBytes) {
                this._crypto = nodeCrypto;
                this.isAvailable = true;
                this.isInstantiated = true;
            }
        }
    }
    NodeRandomSource.prototype.randomBytes = function (length) {
        if (!this.isAvailable || !this._crypto) {
            throw new Error("Node.js random byte generator is not available.");
        }
        // Get random bytes (result is Buffer).
        var buffer = this._crypto.randomBytes(length);
        // Make sure we got the length that we requested.
        if (buffer.length !== length) {
            throw new Error("NodeRandomSource: got fewer bytes than requested");
        }
        // Allocate output array.
        var out = new Uint8Array(length);
        // Copy bytes from buffer to output.
        for (var i = 0; i < out.length; i++) {
            out[i] = buffer[i];
        }
        // Cleanup.
        wipe_1.wipe(buffer);
        return out;
    };
    return NodeRandomSource;
}());
exports.NodeRandomSource = NodeRandomSource;
//# sourceMappingURL=node.js.map

/***/ }),

/***/ 61309:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var browser_1 = __webpack_require__(77010);
var node_1 = __webpack_require__(6657);
var SystemRandomSource = /** @class */ (function () {
    function SystemRandomSource() {
        this.isAvailable = false;
        this.name = "";
        // Try browser.
        this._source = new browser_1.BrowserRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Browser";
            return;
        }
        // If no browser source, try Node.
        this._source = new node_1.NodeRandomSource();
        if (this._source.isAvailable) {
            this.isAvailable = true;
            this.name = "Node";
            return;
        }
        // No sources, we're out of options.
    }
    SystemRandomSource.prototype.randomBytes = function (length) {
        if (!this.isAvailable) {
            throw new Error("System random byte generator is not available.");
        }
        return this._source.randomBytes(length);
    };
    return SystemRandomSource;
}());
exports.SystemRandomSource = SystemRandomSource;
//# sourceMappingURL=system.js.map

/***/ }),

/***/ 58161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var binary_1 = __webpack_require__(87689);
var wipe_1 = __webpack_require__(19044);
exports.DIGEST_LENGTH = 32;
exports.BLOCK_SIZE = 64;
/**
 * SHA2-256 cryptographic hash algorithm.
 */
var SHA256 = /** @class */ (function () {
    function SHA256() {
        /** Length of hash output */
        this.digestLength = exports.DIGEST_LENGTH;
        /** Block size */
        this.blockSize = exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._state = new Int32Array(8); // hash state
        this._temp = new Int32Array(64); // temporary state
        this._buffer = new Uint8Array(128); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA256.prototype._initState = function () {
        this._state[0] = 0x6a09e667;
        this._state[1] = 0xbb67ae85;
        this._state[2] = 0x3c6ef372;
        this._state[3] = 0xa54ff53a;
        this._state[4] = 0x510e527f;
        this._state[5] = 0x9b05688c;
        this._state[6] = 0x1f83d9ab;
        this._state[7] = 0x5be0cd19;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */
    SHA256.prototype.reset = function () {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */
    SHA256.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._temp);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */
    SHA256.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) { dataLength = data.length; }
        if (this._finished) {
            throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while (this._bufferLength < this.blockSize && dataLength > 0) {
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                hashBlocks(this._temp, this._state, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._temp, this._state, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */
    SHA256.prototype.finish = function (out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = (bytesHashed / 0x20000000) | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = (bytesHashed % 64 < 56) ? 64 : 128;
            this._buffer[left] = 0x80;
            for (var i = left + 1; i < padLength - 8; i++) {
                this._buffer[i] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._temp, this._state, this._buffer, 0, padLength);
            this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 4; i++) {
            binary_1.writeUint32BE(this._state[i], out, i * 4);
        }
        return this;
    };
    /**
     * Returns the final hash digest.
     */
    SHA256.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Returns hash state to be used with restoreState().
     * Only chain value is saved, not buffers or other
     * state variables.
     */
    SHA256.prototype.saveState = function () {
        if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
        }
        return {
            state: new Int32Array(this._state),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization.
     * Restores state saved by saveState() and sets bytesHashed
     * to the given value.
     */
    SHA256.prototype.restoreState = function (savedState) {
        this._state.set(savedState.state);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */
    SHA256.prototype.cleanSavedState = function (savedState) {
        wipe_1.wipe(savedState.state);
        if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA256;
}());
exports.SHA256 = SHA256;
// Constants
var K = new Int32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
    0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
    0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
    0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
    0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
    0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
    0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
    0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
function hashBlocks(w, v, p, pos, len) {
    while (len >= 64) {
        var a = v[0];
        var b = v[1];
        var c = v[2];
        var d = v[3];
        var e = v[4];
        var f = v[5];
        var g = v[6];
        var h = v[7];
        for (var i = 0; i < 16; i++) {
            var j = pos + i * 4;
            w[i] = binary_1.readUint32BE(p, j);
        }
        for (var i = 16; i < 64; i++) {
            var u = w[i - 2];
            var t1 = (u >>> 17 | u << (32 - 17)) ^ (u >>> 19 | u << (32 - 19)) ^ (u >>> 10);
            u = w[i - 15];
            var t2 = (u >>> 7 | u << (32 - 7)) ^ (u >>> 18 | u << (32 - 18)) ^ (u >>> 3);
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
        }
        for (var i = 0; i < 64; i++) {
            var t1 = (((((e >>> 6 | e << (32 - 6)) ^ (e >>> 11 | e << (32 - 11)) ^
                (e >>> 25 | e << (32 - 25))) + ((e & f) ^ (~e & g))) | 0) +
                ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;
            var t2 = (((a >>> 2 | a << (32 - 2)) ^ (a >>> 13 | a << (32 - 13)) ^
                (a >>> 22 | a << (32 - 22))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        v[0] += a;
        v[1] += b;
        v[2] += c;
        v[3] += d;
        v[4] += e;
        v[5] += f;
        v[6] += g;
        v[7] += h;
        pos += 64;
        len -= 64;
    }
    return pos;
}
function hash(data) {
    var h = new SHA256();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hash = hash;
//# sourceMappingURL=sha256.js.map

/***/ }),

/***/ 17212:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var binary_1 = __webpack_require__(87689);
var wipe_1 = __webpack_require__(19044);
exports.DIGEST_LENGTH = 64;
exports.BLOCK_SIZE = 128;
/**
 * SHA-2-512 cryptographic hash algorithm.
 */
var SHA512 = /** @class */ (function () {
    function SHA512() {
        /** Length of hash output */
        this.digestLength = exports.DIGEST_LENGTH;
        /** Block size */
        this.blockSize = exports.BLOCK_SIZE;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this._stateHi = new Int32Array(8); // hash state, high bytes
        this._stateLo = new Int32Array(8); // hash state, low bytes
        this._tempHi = new Int32Array(16); // temporary state, high bytes
        this._tempLo = new Int32Array(16); // temporary state, low bytes
        this._buffer = new Uint8Array(256); // buffer for data to hash
        this._bufferLength = 0; // number of bytes in buffer
        this._bytesHashed = 0; // number of total bytes hashed
        this._finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    SHA512.prototype._initState = function () {
        this._stateHi[0] = 0x6a09e667;
        this._stateHi[1] = 0xbb67ae85;
        this._stateHi[2] = 0x3c6ef372;
        this._stateHi[3] = 0xa54ff53a;
        this._stateHi[4] = 0x510e527f;
        this._stateHi[5] = 0x9b05688c;
        this._stateHi[6] = 0x1f83d9ab;
        this._stateHi[7] = 0x5be0cd19;
        this._stateLo[0] = 0xf3bcc908;
        this._stateLo[1] = 0x84caa73b;
        this._stateLo[2] = 0xfe94f82b;
        this._stateLo[3] = 0x5f1d36f1;
        this._stateLo[4] = 0xade682d1;
        this._stateLo[5] = 0x2b3e6c1f;
        this._stateLo[6] = 0xfb41bd6b;
        this._stateLo[7] = 0x137e2179;
    };
    /**
     * Resets hash state making it possible
     * to re-use this instance to hash other data.
     */
    SHA512.prototype.reset = function () {
        this._initState();
        this._bufferLength = 0;
        this._bytesHashed = 0;
        this._finished = false;
        return this;
    };
    /**
     * Cleans internal buffers and resets hash state.
     */
    SHA512.prototype.clean = function () {
        wipe_1.wipe(this._buffer);
        wipe_1.wipe(this._tempHi);
        wipe_1.wipe(this._tempLo);
        this.reset();
    };
    /**
     * Updates hash state with the given data.
     *
     * Throws error when trying to update already finalized hash:
     * instance must be reset to update it again.
     */
    SHA512.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) { dataLength = data.length; }
        if (this._finished) {
            throw new Error("SHA512: can't update because hash was finished.");
        }
        var dataPos = 0;
        this._bytesHashed += dataLength;
        if (this._bufferLength > 0) {
            while (this._bufferLength < exports.BLOCK_SIZE && dataLength > 0) {
                this._buffer[this._bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this._bufferLength === this.blockSize) {
                hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize);
                this._bufferLength = 0;
            }
        }
        if (dataLength >= this.blockSize) {
            dataPos = hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, data, dataPos, dataLength);
            dataLength %= this.blockSize;
        }
        while (dataLength > 0) {
            this._buffer[this._bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    /**
     * Finalizes hash state and puts hash into out.
     * If hash was already finalized, puts the same value.
     */
    SHA512.prototype.finish = function (out) {
        if (!this._finished) {
            var bytesHashed = this._bytesHashed;
            var left = this._bufferLength;
            var bitLenHi = (bytesHashed / 0x20000000) | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = (bytesHashed % 128 < 112) ? 128 : 256;
            this._buffer[left] = 0x80;
            for (var i = left + 1; i < padLength - 8; i++) {
                this._buffer[i] = 0;
            }
            binary_1.writeUint32BE(bitLenHi, this._buffer, padLength - 8);
            binary_1.writeUint32BE(bitLenLo, this._buffer, padLength - 4);
            hashBlocks(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, padLength);
            this._finished = true;
        }
        for (var i = 0; i < this.digestLength / 8; i++) {
            binary_1.writeUint32BE(this._stateHi[i], out, i * 8);
            binary_1.writeUint32BE(this._stateLo[i], out, i * 8 + 4);
        }
        return this;
    };
    /**
     * Returns the final hash digest.
     */
    SHA512.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Returns hash state to be
     * used with restoreState(). Only chain value is saved, not buffers or
     * other state variables.
     */
    SHA512.prototype.saveState = function () {
        if (this._finished) {
            throw new Error("SHA256: cannot save finished state");
        }
        return {
            stateHi: new Int32Array(this._stateHi),
            stateLo: new Int32Array(this._stateLo),
            buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : undefined,
            bufferLength: this._bufferLength,
            bytesHashed: this._bytesHashed
        };
    };
    /**
     * Function useful for HMAC/PBKDF2 optimization. Restores state saved by
     * saveState() and sets bytesHashed to the given value.
     */
    SHA512.prototype.restoreState = function (savedState) {
        this._stateHi.set(savedState.stateHi);
        this._stateLo.set(savedState.stateLo);
        this._bufferLength = savedState.bufferLength;
        if (savedState.buffer) {
            this._buffer.set(savedState.buffer);
        }
        this._bytesHashed = savedState.bytesHashed;
        this._finished = false;
        return this;
    };
    /**
     * Cleans state returned by saveState().
     */
    SHA512.prototype.cleanSavedState = function (savedState) {
        wipe_1.wipe(savedState.stateHi);
        wipe_1.wipe(savedState.stateLo);
        if (savedState.buffer) {
            wipe_1.wipe(savedState.buffer);
        }
        savedState.bufferLength = 0;
        savedState.bytesHashed = 0;
    };
    return SHA512;
}());
exports.SHA512 = SHA512;
// Constants
var K = new Int32Array([
    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
]);
function hashBlocks(wh, wl, hh, hl, m, pos, len) {
    var ah0 = hh[0], ah1 = hh[1], ah2 = hh[2], ah3 = hh[3], ah4 = hh[4], ah5 = hh[5], ah6 = hh[6], ah7 = hh[7], al0 = hl[0], al1 = hl[1], al2 = hl[2], al3 = hl[3], al4 = hl[4], al5 = hl[5], al6 = hl[6], al7 = hl[7];
    var h, l;
    var th, tl;
    var a, b, c, d;
    while (len >= 128) {
        for (var i = 0; i < 16; i++) {
            var j = 8 * i + pos;
            wh[i] = binary_1.readUint32BE(m, j);
            wl[i] = binary_1.readUint32BE(m, j + 4);
        }
        for (var i = 0; i < 80; i++) {
            var bh0 = ah0;
            var bh1 = ah1;
            var bh2 = ah2;
            var bh3 = ah3;
            var bh4 = ah4;
            var bh5 = ah5;
            var bh6 = ah6;
            var bh7 = ah7;
            var bl0 = al0;
            var bl1 = al1;
            var bl2 = al2;
            var bl3 = al3;
            var bl4 = al4;
            var bl5 = al5;
            var bl6 = al6;
            var bl7 = al7;
            // add
            h = ah7;
            l = al7;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma1
            h = ((ah4 >>> 14) | (al4 << (32 - 14))) ^ ((ah4 >>> 18) |
                (al4 << (32 - 18))) ^ ((al4 >>> (41 - 32)) | (ah4 << (32 - (41 - 32))));
            l = ((al4 >>> 14) | (ah4 << (32 - 14))) ^ ((al4 >>> 18) |
                (ah4 << (32 - 18))) ^ ((ah4 >>> (41 - 32)) | (al4 << (32 - (41 - 32))));
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Ch
            h = (ah4 & ah5) ^ (~ah4 & ah6);
            l = (al4 & al5) ^ (~al4 & al6);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // K
            h = K[i * 2];
            l = K[i * 2 + 1];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // w
            h = wh[i % 16];
            l = wl[i % 16];
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            th = c & 0xffff | d << 16;
            tl = a & 0xffff | b << 16;
            // add
            h = th;
            l = tl;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            // Sigma0
            h = ((ah0 >>> 28) | (al0 << (32 - 28))) ^ ((al0 >>> (34 - 32)) |
                (ah0 << (32 - (34 - 32)))) ^ ((al0 >>> (39 - 32)) | (ah0 << (32 - (39 - 32))));
            l = ((al0 >>> 28) | (ah0 << (32 - 28))) ^ ((ah0 >>> (34 - 32)) |
                (al0 << (32 - (34 - 32)))) ^ ((ah0 >>> (39 - 32)) | (al0 << (32 - (39 - 32))));
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            // Maj
            h = (ah0 & ah1) ^ (ah0 & ah2) ^ (ah1 & ah2);
            l = (al0 & al1) ^ (al0 & al2) ^ (al1 & al2);
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh7 = (c & 0xffff) | (d << 16);
            bl7 = (a & 0xffff) | (b << 16);
            // add
            h = bh3;
            l = bl3;
            a = l & 0xffff;
            b = l >>> 16;
            c = h & 0xffff;
            d = h >>> 16;
            h = th;
            l = tl;
            a += l & 0xffff;
            b += l >>> 16;
            c += h & 0xffff;
            d += h >>> 16;
            b += a >>> 16;
            c += b >>> 16;
            d += c >>> 16;
            bh3 = (c & 0xffff) | (d << 16);
            bl3 = (a & 0xffff) | (b << 16);
            ah1 = bh0;
            ah2 = bh1;
            ah3 = bh2;
            ah4 = bh3;
            ah5 = bh4;
            ah6 = bh5;
            ah7 = bh6;
            ah0 = bh7;
            al1 = bl0;
            al2 = bl1;
            al3 = bl2;
            al4 = bl3;
            al5 = bl4;
            al6 = bl5;
            al7 = bl6;
            al0 = bl7;
            if (i % 16 === 15) {
                for (var j = 0; j < 16; j++) {
                    // add
                    h = wh[j];
                    l = wl[j];
                    a = l & 0xffff;
                    b = l >>> 16;
                    c = h & 0xffff;
                    d = h >>> 16;
                    h = wh[(j + 9) % 16];
                    l = wl[(j + 9) % 16];
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma0
                    th = wh[(j + 1) % 16];
                    tl = wl[(j + 1) % 16];
                    h = ((th >>> 1) | (tl << (32 - 1))) ^ ((th >>> 8) |
                        (tl << (32 - 8))) ^ (th >>> 7);
                    l = ((tl >>> 1) | (th << (32 - 1))) ^ ((tl >>> 8) |
                        (th << (32 - 8))) ^ ((tl >>> 7) | (th << (32 - 7)));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    // sigma1
                    th = wh[(j + 14) % 16];
                    tl = wl[(j + 14) % 16];
                    h = ((th >>> 19) | (tl << (32 - 19))) ^ ((tl >>> (61 - 32)) |
                        (th << (32 - (61 - 32)))) ^ (th >>> 6);
                    l = ((tl >>> 19) | (th << (32 - 19))) ^ ((th >>> (61 - 32)) |
                        (tl << (32 - (61 - 32)))) ^ ((tl >>> 6) | (th << (32 - 6)));
                    a += l & 0xffff;
                    b += l >>> 16;
                    c += h & 0xffff;
                    d += h >>> 16;
                    b += a >>> 16;
                    c += b >>> 16;
                    d += c >>> 16;
                    wh[j] = (c & 0xffff) | (d << 16);
                    wl[j] = (a & 0xffff) | (b << 16);
                }
            }
        }
        // add
        h = ah0;
        l = al0;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[0];
        l = hl[0];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[0] = ah0 = (c & 0xffff) | (d << 16);
        hl[0] = al0 = (a & 0xffff) | (b << 16);
        h = ah1;
        l = al1;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[1];
        l = hl[1];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[1] = ah1 = (c & 0xffff) | (d << 16);
        hl[1] = al1 = (a & 0xffff) | (b << 16);
        h = ah2;
        l = al2;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[2];
        l = hl[2];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[2] = ah2 = (c & 0xffff) | (d << 16);
        hl[2] = al2 = (a & 0xffff) | (b << 16);
        h = ah3;
        l = al3;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[3];
        l = hl[3];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[3] = ah3 = (c & 0xffff) | (d << 16);
        hl[3] = al3 = (a & 0xffff) | (b << 16);
        h = ah4;
        l = al4;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[4];
        l = hl[4];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[4] = ah4 = (c & 0xffff) | (d << 16);
        hl[4] = al4 = (a & 0xffff) | (b << 16);
        h = ah5;
        l = al5;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[5];
        l = hl[5];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[5] = ah5 = (c & 0xffff) | (d << 16);
        hl[5] = al5 = (a & 0xffff) | (b << 16);
        h = ah6;
        l = al6;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[6];
        l = hl[6];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[6] = ah6 = (c & 0xffff) | (d << 16);
        hl[6] = al6 = (a & 0xffff) | (b << 16);
        h = ah7;
        l = al7;
        a = l & 0xffff;
        b = l >>> 16;
        c = h & 0xffff;
        d = h >>> 16;
        h = hh[7];
        l = hl[7];
        a += l & 0xffff;
        b += l >>> 16;
        c += h & 0xffff;
        d += h >>> 16;
        b += a >>> 16;
        c += b >>> 16;
        d += c >>> 16;
        hh[7] = ah7 = (c & 0xffff) | (d << 16);
        hl[7] = al7 = (a & 0xffff) | (b << 16);
        pos += 128;
        len -= 128;
    }
    return pos;
}
function hash(data) {
    var h = new SHA512();
    h.update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hash = hash;
//# sourceMappingURL=sha512.js.map

/***/ }),

/***/ 19044:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sets all values in the given array to zero and returns it.
 *
 * The fact that it sets bytes to zero can be relied on.
 *
 * There is no guarantee that this function makes data disappear from memory,
 * as runtime implementation can, for example, have copying garbage collector
 * that will make copies of sensitive data before we wipe it. Or that an
 * operating system will write our data to swap or sleep image. Another thing
 * is that an optimizing compiler can remove calls to this function or make it
 * no-op. There's nothing we can do with it, so we just do our best and hope
 * that everything will be okay and good will triumph over evil.
 */
function wipe(array) {
    // Right now it's similar to array.fill(0). If it turns
    // out that runtimes optimize this call away, maybe
    // we can try something else.
    for (var i = 0; i < array.length; i++) {
        array[i] = 0;
    }
    return array;
}
exports.wipe = wipe;
//# sourceMappingURL=wipe.js.map

/***/ }),

/***/ 87620:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2016 Dmitry Chestnykh
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package x25519 implements X25519 key agreement.
 */
var random_1 = __webpack_require__(1651);
var wipe_1 = __webpack_require__(19044);
exports.PUBLIC_KEY_LENGTH = 32;
exports.SECRET_KEY_LENGTH = 32;
exports.SHARED_KEY_LENGTH = 32;
// Returns new zero-filled 16-element GF (Float64Array).
// If passed an array of numbers, prefills the returned
// array with them.
//
// We use Float64Array, because we need 48-bit numbers
// for this implementation.
function gf(init) {
    var r = new Float64Array(16);
    if (init) {
        for (var i = 0; i < init.length; i++) {
            r[i] = init[i];
        }
    }
    return r;
}
// Base point.
var _9 = new Uint8Array(32);
_9[0] = 9;
var _121665 = gf([0xdb41, 1]);
function car25519(o) {
    var c = 1;
    for (var i = 0; i < 16; i++) {
        var v = o[i] + c + 65535;
        c = Math.floor(v / 65536);
        o[i] = v - c * 65536;
    }
    o[0] += c - 1 + 37 * (c - 1);
}
function sel25519(p, q, b) {
    var c = ~(b - 1);
    for (var i = 0; i < 16; i++) {
        var t = c & (p[i] ^ q[i]);
        p[i] ^= t;
        q[i] ^= t;
    }
}
function pack25519(o, n) {
    var m = gf();
    var t = gf();
    for (var i = 0; i < 16; i++) {
        t[i] = n[i];
    }
    car25519(t);
    car25519(t);
    car25519(t);
    for (var j = 0; j < 2; j++) {
        m[0] = t[0] - 0xffed;
        for (var i = 1; i < 15; i++) {
            m[i] = t[i] - 0xffff - ((m[i - 1] >> 16) & 1);
            m[i - 1] &= 0xffff;
        }
        m[15] = t[15] - 0x7fff - ((m[14] >> 16) & 1);
        var b = (m[15] >> 16) & 1;
        m[14] &= 0xffff;
        sel25519(t, m, 1 - b);
    }
    for (var i = 0; i < 16; i++) {
        o[2 * i] = t[i] & 0xff;
        o[2 * i + 1] = t[i] >> 8;
    }
}
function unpack25519(o, n) {
    for (var i = 0; i < 16; i++) {
        o[i] = n[2 * i] + (n[2 * i + 1] << 8);
    }
    o[15] &= 0x7fff;
}
function add(o, a, b) {
    for (var i = 0; i < 16; i++) {
        o[i] = a[i] + b[i];
    }
}
function sub(o, a, b) {
    for (var i = 0; i < 16; i++) {
        o[i] = a[i] - b[i];
    }
}
function mul(o, a, b) {
    var v, c, t0 = 0, t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0, t7 = 0, t8 = 0, t9 = 0, t10 = 0, t11 = 0, t12 = 0, t13 = 0, t14 = 0, t15 = 0, t16 = 0, t17 = 0, t18 = 0, t19 = 0, t20 = 0, t21 = 0, t22 = 0, t23 = 0, t24 = 0, t25 = 0, t26 = 0, t27 = 0, t28 = 0, t29 = 0, t30 = 0, b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11], b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    v = a[0];
    t0 += v * b0;
    t1 += v * b1;
    t2 += v * b2;
    t3 += v * b3;
    t4 += v * b4;
    t5 += v * b5;
    t6 += v * b6;
    t7 += v * b7;
    t8 += v * b8;
    t9 += v * b9;
    t10 += v * b10;
    t11 += v * b11;
    t12 += v * b12;
    t13 += v * b13;
    t14 += v * b14;
    t15 += v * b15;
    v = a[1];
    t1 += v * b0;
    t2 += v * b1;
    t3 += v * b2;
    t4 += v * b3;
    t5 += v * b4;
    t6 += v * b5;
    t7 += v * b6;
    t8 += v * b7;
    t9 += v * b8;
    t10 += v * b9;
    t11 += v * b10;
    t12 += v * b11;
    t13 += v * b12;
    t14 += v * b13;
    t15 += v * b14;
    t16 += v * b15;
    v = a[2];
    t2 += v * b0;
    t3 += v * b1;
    t4 += v * b2;
    t5 += v * b3;
    t6 += v * b4;
    t7 += v * b5;
    t8 += v * b6;
    t9 += v * b7;
    t10 += v * b8;
    t11 += v * b9;
    t12 += v * b10;
    t13 += v * b11;
    t14 += v * b12;
    t15 += v * b13;
    t16 += v * b14;
    t17 += v * b15;
    v = a[3];
    t3 += v * b0;
    t4 += v * b1;
    t5 += v * b2;
    t6 += v * b3;
    t7 += v * b4;
    t8 += v * b5;
    t9 += v * b6;
    t10 += v * b7;
    t11 += v * b8;
    t12 += v * b9;
    t13 += v * b10;
    t14 += v * b11;
    t15 += v * b12;
    t16 += v * b13;
    t17 += v * b14;
    t18 += v * b15;
    v = a[4];
    t4 += v * b0;
    t5 += v * b1;
    t6 += v * b2;
    t7 += v * b3;
    t8 += v * b4;
    t9 += v * b5;
    t10 += v * b6;
    t11 += v * b7;
    t12 += v * b8;
    t13 += v * b9;
    t14 += v * b10;
    t15 += v * b11;
    t16 += v * b12;
    t17 += v * b13;
    t18 += v * b14;
    t19 += v * b15;
    v = a[5];
    t5 += v * b0;
    t6 += v * b1;
    t7 += v * b2;
    t8 += v * b3;
    t9 += v * b4;
    t10 += v * b5;
    t11 += v * b6;
    t12 += v * b7;
    t13 += v * b8;
    t14 += v * b9;
    t15 += v * b10;
    t16 += v * b11;
    t17 += v * b12;
    t18 += v * b13;
    t19 += v * b14;
    t20 += v * b15;
    v = a[6];
    t6 += v * b0;
    t7 += v * b1;
    t8 += v * b2;
    t9 += v * b3;
    t10 += v * b4;
    t11 += v * b5;
    t12 += v * b6;
    t13 += v * b7;
    t14 += v * b8;
    t15 += v * b9;
    t16 += v * b10;
    t17 += v * b11;
    t18 += v * b12;
    t19 += v * b13;
    t20 += v * b14;
    t21 += v * b15;
    v = a[7];
    t7 += v * b0;
    t8 += v * b1;
    t9 += v * b2;
    t10 += v * b3;
    t11 += v * b4;
    t12 += v * b5;
    t13 += v * b6;
    t14 += v * b7;
    t15 += v * b8;
    t16 += v * b9;
    t17 += v * b10;
    t18 += v * b11;
    t19 += v * b12;
    t20 += v * b13;
    t21 += v * b14;
    t22 += v * b15;
    v = a[8];
    t8 += v * b0;
    t9 += v * b1;
    t10 += v * b2;
    t11 += v * b3;
    t12 += v * b4;
    t13 += v * b5;
    t14 += v * b6;
    t15 += v * b7;
    t16 += v * b8;
    t17 += v * b9;
    t18 += v * b10;
    t19 += v * b11;
    t20 += v * b12;
    t21 += v * b13;
    t22 += v * b14;
    t23 += v * b15;
    v = a[9];
    t9 += v * b0;
    t10 += v * b1;
    t11 += v * b2;
    t12 += v * b3;
    t13 += v * b4;
    t14 += v * b5;
    t15 += v * b6;
    t16 += v * b7;
    t17 += v * b8;
    t18 += v * b9;
    t19 += v * b10;
    t20 += v * b11;
    t21 += v * b12;
    t22 += v * b13;
    t23 += v * b14;
    t24 += v * b15;
    v = a[10];
    t10 += v * b0;
    t11 += v * b1;
    t12 += v * b2;
    t13 += v * b3;
    t14 += v * b4;
    t15 += v * b5;
    t16 += v * b6;
    t17 += v * b7;
    t18 += v * b8;
    t19 += v * b9;
    t20 += v * b10;
    t21 += v * b11;
    t22 += v * b12;
    t23 += v * b13;
    t24 += v * b14;
    t25 += v * b15;
    v = a[11];
    t11 += v * b0;
    t12 += v * b1;
    t13 += v * b2;
    t14 += v * b3;
    t15 += v * b4;
    t16 += v * b5;
    t17 += v * b6;
    t18 += v * b7;
    t19 += v * b8;
    t20 += v * b9;
    t21 += v * b10;
    t22 += v * b11;
    t23 += v * b12;
    t24 += v * b13;
    t25 += v * b14;
    t26 += v * b15;
    v = a[12];
    t12 += v * b0;
    t13 += v * b1;
    t14 += v * b2;
    t15 += v * b3;
    t16 += v * b4;
    t17 += v * b5;
    t18 += v * b6;
    t19 += v * b7;
    t20 += v * b8;
    t21 += v * b9;
    t22 += v * b10;
    t23 += v * b11;
    t24 += v * b12;
    t25 += v * b13;
    t26 += v * b14;
    t27 += v * b15;
    v = a[13];
    t13 += v * b0;
    t14 += v * b1;
    t15 += v * b2;
    t16 += v * b3;
    t17 += v * b4;
    t18 += v * b5;
    t19 += v * b6;
    t20 += v * b7;
    t21 += v * b8;
    t22 += v * b9;
    t23 += v * b10;
    t24 += v * b11;
    t25 += v * b12;
    t26 += v * b13;
    t27 += v * b14;
    t28 += v * b15;
    v = a[14];
    t14 += v * b0;
    t15 += v * b1;
    t16 += v * b2;
    t17 += v * b3;
    t18 += v * b4;
    t19 += v * b5;
    t20 += v * b6;
    t21 += v * b7;
    t22 += v * b8;
    t23 += v * b9;
    t24 += v * b10;
    t25 += v * b11;
    t26 += v * b12;
    t27 += v * b13;
    t28 += v * b14;
    t29 += v * b15;
    v = a[15];
    t15 += v * b0;
    t16 += v * b1;
    t17 += v * b2;
    t18 += v * b3;
    t19 += v * b4;
    t20 += v * b5;
    t21 += v * b6;
    t22 += v * b7;
    t23 += v * b8;
    t24 += v * b9;
    t25 += v * b10;
    t26 += v * b11;
    t27 += v * b12;
    t28 += v * b13;
    t29 += v * b14;
    t30 += v * b15;
    t0 += 38 * t16;
    t1 += 38 * t17;
    t2 += 38 * t18;
    t3 += 38 * t19;
    t4 += 38 * t20;
    t5 += 38 * t21;
    t6 += 38 * t22;
    t7 += 38 * t23;
    t8 += 38 * t24;
    t9 += 38 * t25;
    t10 += 38 * t26;
    t11 += 38 * t27;
    t12 += 38 * t28;
    t13 += 38 * t29;
    t14 += 38 * t30;
    // t15 left as is
    // first car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    // second car
    c = 1;
    v = t0 + c + 65535;
    c = Math.floor(v / 65536);
    t0 = v - c * 65536;
    v = t1 + c + 65535;
    c = Math.floor(v / 65536);
    t1 = v - c * 65536;
    v = t2 + c + 65535;
    c = Math.floor(v / 65536);
    t2 = v - c * 65536;
    v = t3 + c + 65535;
    c = Math.floor(v / 65536);
    t3 = v - c * 65536;
    v = t4 + c + 65535;
    c = Math.floor(v / 65536);
    t4 = v - c * 65536;
    v = t5 + c + 65535;
    c = Math.floor(v / 65536);
    t5 = v - c * 65536;
    v = t6 + c + 65535;
    c = Math.floor(v / 65536);
    t6 = v - c * 65536;
    v = t7 + c + 65535;
    c = Math.floor(v / 65536);
    t7 = v - c * 65536;
    v = t8 + c + 65535;
    c = Math.floor(v / 65536);
    t8 = v - c * 65536;
    v = t9 + c + 65535;
    c = Math.floor(v / 65536);
    t9 = v - c * 65536;
    v = t10 + c + 65535;
    c = Math.floor(v / 65536);
    t10 = v - c * 65536;
    v = t11 + c + 65535;
    c = Math.floor(v / 65536);
    t11 = v - c * 65536;
    v = t12 + c + 65535;
    c = Math.floor(v / 65536);
    t12 = v - c * 65536;
    v = t13 + c + 65535;
    c = Math.floor(v / 65536);
    t13 = v - c * 65536;
    v = t14 + c + 65535;
    c = Math.floor(v / 65536);
    t14 = v - c * 65536;
    v = t15 + c + 65535;
    c = Math.floor(v / 65536);
    t15 = v - c * 65536;
    t0 += c - 1 + 37 * (c - 1);
    o[0] = t0;
    o[1] = t1;
    o[2] = t2;
    o[3] = t3;
    o[4] = t4;
    o[5] = t5;
    o[6] = t6;
    o[7] = t7;
    o[8] = t8;
    o[9] = t9;
    o[10] = t10;
    o[11] = t11;
    o[12] = t12;
    o[13] = t13;
    o[14] = t14;
    o[15] = t15;
}
function square(o, a) {
    mul(o, a, a);
}
function inv25519(o, inp) {
    var c = gf();
    for (var i = 0; i < 16; i++) {
        c[i] = inp[i];
    }
    for (var i = 253; i >= 0; i--) {
        square(c, c);
        if (i !== 2 && i !== 4) {
            mul(c, c, inp);
        }
    }
    for (var i = 0; i < 16; i++) {
        o[i] = c[i];
    }
}
function scalarMult(n, p) {
    var z = new Uint8Array(32);
    var x = new Float64Array(80);
    var a = gf(), b = gf(), c = gf(), d = gf(), e = gf(), f = gf();
    for (var i = 0; i < 31; i++) {
        z[i] = n[i];
    }
    z[31] = (n[31] & 127) | 64;
    z[0] &= 248;
    unpack25519(x, p);
    for (var i = 0; i < 16; i++) {
        b[i] = x[i];
    }
    a[0] = d[0] = 1;
    for (var i = 254; i >= 0; --i) {
        var r = (z[i >>> 3] >>> (i & 7)) & 1;
        sel25519(a, b, r);
        sel25519(c, d, r);
        add(e, a, c);
        sub(a, a, c);
        add(c, b, d);
        sub(b, b, d);
        square(d, e);
        square(f, a);
        mul(a, c, a);
        mul(c, b, e);
        add(e, a, c);
        sub(a, a, c);
        square(b, a);
        sub(c, d, f);
        mul(a, c, _121665);
        add(a, a, d);
        mul(c, c, a);
        mul(a, d, f);
        mul(d, b, x);
        square(b, e);
        sel25519(a, b, r);
        sel25519(c, d, r);
    }
    for (var i = 0; i < 16; i++) {
        x[i + 16] = a[i];
        x[i + 32] = c[i];
        x[i + 48] = b[i];
        x[i + 64] = d[i];
    }
    var x32 = x.subarray(32);
    var x16 = x.subarray(16);
    inv25519(x32, x32);
    mul(x16, x16, x32);
    var q = new Uint8Array(32);
    pack25519(q, x16);
    return q;
}
exports.scalarMult = scalarMult;
function scalarMultBase(n) {
    return scalarMult(n, _9);
}
exports.scalarMultBase = scalarMultBase;
function generateKeyPairFromSeed(seed) {
    if (seed.length !== exports.SECRET_KEY_LENGTH) {
        throw new Error("x25519: seed must be " + exports.SECRET_KEY_LENGTH + " bytes");
    }
    var secretKey = new Uint8Array(seed);
    var publicKey = scalarMultBase(secretKey);
    return {
        publicKey: publicKey,
        secretKey: secretKey
    };
}
exports.generateKeyPairFromSeed = generateKeyPairFromSeed;
function generateKeyPair(prng) {
    var seed = random_1.randomBytes(32, prng);
    var result = generateKeyPairFromSeed(seed);
    wipe_1.wipe(seed);
    return result;
}
exports.generateKeyPair = generateKeyPair;
/**
 * Returns a shared key between our secret key and a peer's public key.
 *
 * Throws an error if the given keys are of wrong length.
 *
 * If rejectZero is true throws if the calculated shared key is all-zero.
 * From RFC 7748:
 *
 * > Protocol designers using Diffie-Hellman over the curves defined in
 * > this document must not assume "contributory behavior".  Specially,
 * > contributory behavior means that both parties' private keys
 * > contribute to the resulting shared key.  Since curve25519 and
 * > curve448 have cofactors of 8 and 4 (respectively), an input point of
 * > small order will eliminate any contribution from the other party's
 * > private key.  This situation can be detected by checking for the all-
 * > zero output, which implementations MAY do, as specified in Section 6.
 * > However, a large number of existing implementations do not do this.
 *
 * IMPORTANT: the returned key is a raw result of scalar multiplication.
 * To use it as a key material, hash it with a cryptographic hash function.
 */
function sharedKey(mySecretKey, theirPublicKey, rejectZero) {
    if (rejectZero === void 0) { rejectZero = false; }
    if (mySecretKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect secret key length");
    }
    if (theirPublicKey.length !== exports.PUBLIC_KEY_LENGTH) {
        throw new Error("X25519: incorrect public key length");
    }
    var result = scalarMult(mySecretKey, theirPublicKey);
    if (rejectZero) {
        var zeros = 0;
        for (var i = 0; i < result.length; i++) {
            zeros |= result[i];
        }
        if (zeros === 0) {
            throw new Error("X25519: invalid shared key");
        }
    }
    return result;
}
exports.sharedKey = sharedKey;
//# sourceMappingURL=x25519.js.map

/***/ }),

/***/ 20826:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2019 Kyle Den Hartog
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Package xchacha20 implements XChaCha20 stream cipher.
 */
var binary_1 = __webpack_require__(87689);
var wipe_1 = __webpack_require__(19044);
var chacha_1 = __webpack_require__(2787);
// Number of ChaCha rounds (ChaCha20).
var ROUNDS = 20;
/**
 * Encrypt src with XChaCha20 stream generated for the given 32-byte key and
 * 8-byte (as in original implementation) or 12-byte (as in RFC7539) nonce and
 * write the result into dst and return it.
 *
 * dst and src may be the same, but otherwise must not overlap.
 *
 * Nonce length is set in such a way that given it's generated via a CSPRNG
 * then there's little concern of collision for roughly 2^96 messages while
 * reusing a secret key and not encountering nonce reuse vulnerabilities.
 */
function streamXOR(key, nonce, src, dst) {
    if (nonce.length !== 24) {
        throw new Error("XChaCha20 nonce must be 24 bytes");
    }
    // Use HChaCha one-way function to transform first 16 bytes of
    // 24-byte extended nonce and key into a new key for Salsa
    // stream -- "subkey".
    var subkey = hchacha(key, nonce.subarray(0, 16), new Uint8Array(32));
    // Use last 8 bytes of 24-byte extended nonce as an actual nonce prefixed by 4 zero bytes,
    // and a subkey derived in the previous step as key to encrypt.
    var modifiedNonce = new Uint8Array(12);
    modifiedNonce.set(nonce.subarray(16), 4);
    // If nonceInplaceCounterLength > 0, we'll still pass the correct
    // nonce || counter, as we don't limit the end of nonce subarray.
    var result = chacha_1.streamXOR(subkey, modifiedNonce, src, dst);
    // Clean subkey.
    wipe_1.wipe(subkey);
    return result;
}
exports.streamXOR = streamXOR;
/**
 * Generate XChaCha20 stream for the given 32-byte key and 12-byte
 * nonce (last 8 bytes of 24 byte nonce prefixed with 4 zero bytes)
 * and write it into dst and return it.
 *
 * Nonces MUST be generated using an CSPRNG to generate a sufficiently
 * random nonce such that a collision is highly unlikely to occur.
 *
 * stream is like streamXOR with all-zero src.
 */
function stream(key, nonce, dst) {
    wipe_1.wipe(dst);
    return streamXOR(key, nonce, dst, dst);
}
exports.stream = stream;
/**
 * HChaCha is a one-way function used in XChaCha to extend nonce.
 *
 * It takes 32-byte key and 16-byte src and writes 32-byte result
 * into dst and returns it.
 */
function hchacha(key, src, dst) {
    var j0 = 0x61707865; // "expa"  -- ChaCha's "sigma" constant
    var j1 = 0x3320646e; // "nd 3"     for 32-byte keys
    var j2 = 0x79622d32; // "2-by"
    var j3 = 0x6b206574; // "te k"
    var j4 = (key[3] << 24) | (key[2] << 16) | (key[1] << 8) | key[0];
    var j5 = (key[7] << 24) | (key[6] << 16) | (key[5] << 8) | key[4];
    var j6 = (key[11] << 24) | (key[10] << 16) | (key[9] << 8) | key[8];
    var j7 = (key[15] << 24) | (key[14] << 16) | (key[13] << 8) | key[12];
    var j8 = (key[19] << 24) | (key[18] << 16) | (key[17] << 8) | key[16];
    var j9 = (key[23] << 24) | (key[22] << 16) | (key[21] << 8) | key[20];
    var j10 = (key[27] << 24) | (key[26] << 16) | (key[25] << 8) | key[24];
    var j11 = (key[31] << 24) | (key[30] << 16) | (key[29] << 8) | key[28];
    var j12 = (src[3] << 24) | (src[2] << 16) | (src[1] << 8) | src[0];
    var j13 = (src[7] << 24) | (src[6] << 16) | (src[5] << 8) | src[4];
    var j14 = (src[11] << 24) | (src[10] << 16) | (src[9] << 8) | src[8];
    var j15 = (src[15] << 24) | (src[14] << 16) | (src[13] << 8) | src[12];
    var x0 = j0;
    var x1 = j1;
    var x2 = j2;
    var x3 = j3;
    var x4 = j4;
    var x5 = j5;
    var x6 = j6;
    var x7 = j7;
    var x8 = j8;
    var x9 = j9;
    var x10 = j10;
    var x11 = j11;
    var x12 = j12;
    var x13 = j13;
    var x14 = j14;
    var x15 = j15;
    for (var i = 0; i < ROUNDS; i += 2) {
        x0 = (x0 + x4) | 0;
        x12 ^= x0;
        x12 = (x12 >>> (32 - 16)) | (x12 << 16);
        x8 = (x8 + x12) | 0;
        x4 ^= x8;
        x4 = (x4 >>> (32 - 12)) | (x4 << 12);
        x1 = (x1 + x5) | 0;
        x13 ^= x1;
        x13 = (x13 >>> (32 - 16)) | (x13 << 16);
        x9 = (x9 + x13) | 0;
        x5 ^= x9;
        x5 = (x5 >>> (32 - 12)) | (x5 << 12);
        x2 = (x2 + x6) | 0;
        x14 ^= x2;
        x14 = (x14 >>> (32 - 16)) | (x14 << 16);
        x10 = (x10 + x14) | 0;
        x6 ^= x10;
        x6 = (x6 >>> (32 - 12)) | (x6 << 12);
        x3 = (x3 + x7) | 0;
        x15 ^= x3;
        x15 = (x15 >>> (32 - 16)) | (x15 << 16);
        x11 = (x11 + x15) | 0;
        x7 ^= x11;
        x7 = (x7 >>> (32 - 12)) | (x7 << 12);
        x2 = (x2 + x6) | 0;
        x14 ^= x2;
        x14 = (x14 >>> (32 - 8)) | (x14 << 8);
        x10 = (x10 + x14) | 0;
        x6 ^= x10;
        x6 = (x6 >>> (32 - 7)) | (x6 << 7);
        x3 = (x3 + x7) | 0;
        x15 ^= x3;
        x15 = (x15 >>> (32 - 8)) | (x15 << 8);
        x11 = (x11 + x15) | 0;
        x7 ^= x11;
        x7 = (x7 >>> (32 - 7)) | (x7 << 7);
        x1 = (x1 + x5) | 0;
        x13 ^= x1;
        x13 = (x13 >>> (32 - 8)) | (x13 << 8);
        x9 = (x9 + x13) | 0;
        x5 ^= x9;
        x5 = (x5 >>> (32 - 7)) | (x5 << 7);
        x0 = (x0 + x4) | 0;
        x12 ^= x0;
        x12 = (x12 >>> (32 - 8)) | (x12 << 8);
        x8 = (x8 + x12) | 0;
        x4 ^= x8;
        x4 = (x4 >>> (32 - 7)) | (x4 << 7);
        x0 = (x0 + x5) | 0;
        x15 ^= x0;
        x15 = (x15 >>> (32 - 16)) | (x15 << 16);
        x10 = (x10 + x15) | 0;
        x5 ^= x10;
        x5 = (x5 >>> (32 - 12)) | (x5 << 12);
        x1 = (x1 + x6) | 0;
        x12 ^= x1;
        x12 = (x12 >>> (32 - 16)) | (x12 << 16);
        x11 = (x11 + x12) | 0;
        x6 ^= x11;
        x6 = (x6 >>> (32 - 12)) | (x6 << 12);
        x2 = (x2 + x7) | 0;
        x13 ^= x2;
        x13 = (x13 >>> (32 - 16)) | (x13 << 16);
        x8 = (x8 + x13) | 0;
        x7 ^= x8;
        x7 = (x7 >>> (32 - 12)) | (x7 << 12);
        x3 = (x3 + x4) | 0;
        x14 ^= x3;
        x14 = (x14 >>> (32 - 16)) | (x14 << 16);
        x9 = (x9 + x14) | 0;
        x4 ^= x9;
        x4 = (x4 >>> (32 - 12)) | (x4 << 12);
        x2 = (x2 + x7) | 0;
        x13 ^= x2;
        x13 = (x13 >>> (32 - 8)) | (x13 << 8);
        x8 = (x8 + x13) | 0;
        x7 ^= x8;
        x7 = (x7 >>> (32 - 7)) | (x7 << 7);
        x3 = (x3 + x4) | 0;
        x14 ^= x3;
        x14 = (x14 >>> (32 - 8)) | (x14 << 8);
        x9 = (x9 + x14) | 0;
        x4 ^= x9;
        x4 = (x4 >>> (32 - 7)) | (x4 << 7);
        x1 = (x1 + x6) | 0;
        x12 ^= x1;
        x12 = (x12 >>> (32 - 8)) | (x12 << 8);
        x11 = (x11 + x12) | 0;
        x6 ^= x11;
        x6 = (x6 >>> (32 - 7)) | (x6 << 7);
        x0 = (x0 + x5) | 0;
        x15 ^= x0;
        x15 = (x15 >>> (32 - 8)) | (x15 << 8);
        x10 = (x10 + x15) | 0;
        x5 ^= x10;
        x5 = (x5 >>> (32 - 7)) | (x5 << 7);
    }
    binary_1.writeUint32LE(x0, dst, 0);
    binary_1.writeUint32LE(x1, dst, 4);
    binary_1.writeUint32LE(x2, dst, 8);
    binary_1.writeUint32LE(x3, dst, 12);
    binary_1.writeUint32LE(x12, dst, 16);
    binary_1.writeUint32LE(x13, dst, 20);
    binary_1.writeUint32LE(x14, dst, 24);
    binary_1.writeUint32LE(x15, dst, 28);
    return dst;
}
exports.hchacha = hchacha;
//# sourceMappingURL=xchacha20.js.map

/***/ }),

/***/ 29014:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (C) 2019 Kyle Den Hartog
// MIT License. See LICENSE file for details.
Object.defineProperty(exports, "__esModule", ({ value: true }));
var xchacha20_1 = __webpack_require__(20826);
var chacha20poly1305_1 = __webpack_require__(77279);
var wipe_1 = __webpack_require__(19044);
exports.KEY_LENGTH = 32;
exports.NONCE_LENGTH = 24;
exports.TAG_LENGTH = 16;
/**
 * XChaCha20-Poly1305 Authenticated Encryption with Associated Data.
 *
 * Defined in draft-irtf-cfrg-xchacha-01.
 * See https://tools.ietf.org/html/draft-irtf-cfrg-xchacha-01
 */
var XChaCha20Poly1305 = /** @class */ (function () {
    /**
     * Creates a new instance with the given 32-byte key.
     */
    function XChaCha20Poly1305(key) {
        this.nonceLength = exports.NONCE_LENGTH;
        this.tagLength = exports.TAG_LENGTH;
        if (key.length !== exports.KEY_LENGTH) {
            throw new Error("ChaCha20Poly1305 needs 32-byte key");
        }
        // Copy key.
        this._key = new Uint8Array(key);
    }
    /**
     * Encrypts and authenticates plaintext, authenticates associated data,
     * and returns sealed ciphertext, which includes authentication tag.
     *
     * draft-irtf-cfrg-xchacha-01 defines a 24 byte nonce (192 bits) which
     * uses the first 16 bytes of the nonce and the secret key with
     * HChaCha to generate an initial subkey. The last 8 bytes of the nonce
     * are then prefixed with 4 zero bytes and then provided with the subkey
     * to the ChaCha20Poly1305 implementation.
     *
     * If dst is given (it must be the size of plaintext + the size of tag
     * length) the result will be put into it. Dst and plaintext must not
     * overlap.
     */
    XChaCha20Poly1305.prototype.seal = function (nonce, plaintext, associatedData, dst) {
        if (nonce.length !== 24) {
            throw new Error("XChaCha20Poly1305: incorrect nonce length");
        }
        // Use HSalsa one-way function to transform first 16 bytes of
        // 24-byte extended nonce and key into a new key for Salsa
        // stream -- "subkey".
        var subKey = xchacha20_1.hchacha(this._key, nonce.subarray(0, 16), new Uint8Array(32));
        // Use last 8 bytes of 24-byte extended nonce as an actual nonce prefixed by 4 zero bytes,
        // and a subkey derived in the previous step as key to encrypt.
        var modifiedNonce = new Uint8Array(12);
        modifiedNonce.set(nonce.subarray(16), 4);
        var chaChaPoly = new chacha20poly1305_1.ChaCha20Poly1305(subKey);
        var result = chaChaPoly.seal(modifiedNonce, plaintext, associatedData, dst);
        wipe_1.wipe(subKey);
        wipe_1.wipe(modifiedNonce);
        chaChaPoly.clean();
        return result;
    };
    /**
     * Authenticates sealed ciphertext (which includes authentication tag) and
     * associated data, decrypts ciphertext and returns decrypted plaintext.
     *
     * draft-irtf-cfrg-xchacha-01 defines a 24 byte nonce (192 bits) which
     * then uses the first 16 bytes of the nonce and the secret key with
     * Hchacha to generate an initial subkey. The last 8 bytes of the nonce
     * are then prefixed with 4 zero bytes and then provided with the subkey
     * to the chacha20poly1305 implementation.
     *
     * If authentication fails, it returns null.
     *
     * If dst is given (it must be the size of plaintext + the size of tag
     * length) the result will be put into it. Dst and plaintext must not
     * overlap.
     */
    XChaCha20Poly1305.prototype.open = function (nonce, sealed, associatedData, dst) {
        if (nonce.length !== 24) {
            throw new Error("XChaCha20Poly1305: incorrect nonce length");
        }
        // Sealed ciphertext should at least contain tag.
        if (sealed.length < this.tagLength) {
            // TODO(dchest): should we throw here instead?
            return null;
        }
        /**
        * Generate subKey by using HChaCha20 function as defined
        * in section 2 step 1 of draft-irtf-cfrg-xchacha-01
        */
        var subKey = xchacha20_1.hchacha(this._key, nonce.subarray(0, 16), new Uint8Array(32));
        /**
        * Generate Nonce as defined - remaining 8 bytes of the nonce prefixed with
        * 4 zero bytes
        */
        var modifiedNonce = new Uint8Array(12);
        modifiedNonce.set(nonce.subarray(16), 4);
        /**
         * Authenticate and decrypt by calling into chacha20poly1305.
         */
        var chaChaPoly = new chacha20poly1305_1.ChaCha20Poly1305(subKey);
        var result = chaChaPoly.open(modifiedNonce, sealed, associatedData, dst);
        wipe_1.wipe(subKey);
        wipe_1.wipe(modifiedNonce);
        chaChaPoly.clean();
        return result;
    };
    XChaCha20Poly1305.prototype.clean = function () {
        wipe_1.wipe(this._key);
        return this;
    };
    return XChaCha20Poly1305;
}());
exports.XChaCha20Poly1305 = XChaCha20Poly1305;
//# sourceMappingURL=xchacha20poly1305.js.map

/***/ }),

/***/ 73019:
/***/ ((module) => {

"use strict";
/*globals self, window */


/*eslint-disable @mysticatea/prettier */
const { AbortController, AbortSignal } =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports["default"] = AbortController


/***/ }),

/***/ 23685:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bech32m = exports.bech32 = void 0;
const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
const ALPHABET_MAP = {};
for (let z = 0; z < ALPHABET.length; z++) {
    const x = ALPHABET.charAt(z);
    ALPHABET_MAP[x] = z;
}
function polymodStep(pre) {
    const b = pre >> 25;
    return (((pre & 0x1ffffff) << 5) ^
        (-((b >> 0) & 1) & 0x3b6a57b2) ^
        (-((b >> 1) & 1) & 0x26508e6d) ^
        (-((b >> 2) & 1) & 0x1ea119fa) ^
        (-((b >> 3) & 1) & 0x3d4233dd) ^
        (-((b >> 4) & 1) & 0x2a1462b3));
}
function prefixChk(prefix) {
    let chk = 1;
    for (let i = 0; i < prefix.length; ++i) {
        const c = prefix.charCodeAt(i);
        if (c < 33 || c > 126)
            return 'Invalid prefix (' + prefix + ')';
        chk = polymodStep(chk) ^ (c >> 5);
    }
    chk = polymodStep(chk);
    for (let i = 0; i < prefix.length; ++i) {
        const v = prefix.charCodeAt(i);
        chk = polymodStep(chk) ^ (v & 0x1f);
    }
    return chk;
}
function convert(data, inBits, outBits, pad) {
    let value = 0;
    let bits = 0;
    const maxV = (1 << outBits) - 1;
    const result = [];
    for (let i = 0; i < data.length; ++i) {
        value = (value << inBits) | data[i];
        bits += inBits;
        while (bits >= outBits) {
            bits -= outBits;
            result.push((value >> bits) & maxV);
        }
    }
    if (pad) {
        if (bits > 0) {
            result.push((value << (outBits - bits)) & maxV);
        }
    }
    else {
        if (bits >= inBits)
            return 'Excess padding';
        if ((value << (outBits - bits)) & maxV)
            return 'Non-zero padding';
    }
    return result;
}
function toWords(bytes) {
    return convert(bytes, 8, 5, true);
}
function fromWordsUnsafe(words) {
    const res = convert(words, 5, 8, false);
    if (Array.isArray(res))
        return res;
}
function fromWords(words) {
    const res = convert(words, 5, 8, false);
    if (Array.isArray(res))
        return res;
    throw new Error(res);
}
function getLibraryFromEncoding(encoding) {
    let ENCODING_CONST;
    if (encoding === 'bech32') {
        ENCODING_CONST = 1;
    }
    else {
        ENCODING_CONST = 0x2bc830a3;
    }
    function encode(prefix, words, LIMIT) {
        LIMIT = LIMIT || 90;
        if (prefix.length + 7 + words.length > LIMIT)
            throw new TypeError('Exceeds length limit');
        prefix = prefix.toLowerCase();
        // determine chk mod
        let chk = prefixChk(prefix);
        if (typeof chk === 'string')
            throw new Error(chk);
        let result = prefix + '1';
        for (let i = 0; i < words.length; ++i) {
            const x = words[i];
            if (x >> 5 !== 0)
                throw new Error('Non 5-bit word');
            chk = polymodStep(chk) ^ x;
            result += ALPHABET.charAt(x);
        }
        for (let i = 0; i < 6; ++i) {
            chk = polymodStep(chk);
        }
        chk ^= ENCODING_CONST;
        for (let i = 0; i < 6; ++i) {
            const v = (chk >> ((5 - i) * 5)) & 0x1f;
            result += ALPHABET.charAt(v);
        }
        return result;
    }
    function __decode(str, LIMIT) {
        LIMIT = LIMIT || 90;
        if (str.length < 8)
            return str + ' too short';
        if (str.length > LIMIT)
            return 'Exceeds length limit';
        // don't allow mixed case
        const lowered = str.toLowerCase();
        const uppered = str.toUpperCase();
        if (str !== lowered && str !== uppered)
            return 'Mixed-case string ' + str;
        str = lowered;
        const split = str.lastIndexOf('1');
        if (split === -1)
            return 'No separator character for ' + str;
        if (split === 0)
            return 'Missing prefix for ' + str;
        const prefix = str.slice(0, split);
        const wordChars = str.slice(split + 1);
        if (wordChars.length < 6)
            return 'Data too short';
        let chk = prefixChk(prefix);
        if (typeof chk === 'string')
            return chk;
        const words = [];
        for (let i = 0; i < wordChars.length; ++i) {
            const c = wordChars.charAt(i);
            const v = ALPHABET_MAP[c];
            if (v === undefined)
                return 'Unknown character ' + c;
            chk = polymodStep(chk) ^ v;
            // not in the checksum?
            if (i + 6 >= wordChars.length)
                continue;
            words.push(v);
        }
        if (chk !== ENCODING_CONST)
            return 'Invalid checksum for ' + str;
        return { prefix, words };
    }
    function decodeUnsafe(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === 'object')
            return res;
    }
    function decode(str, LIMIT) {
        const res = __decode(str, LIMIT);
        if (typeof res === 'object')
            return res;
        throw new Error(res);
    }
    return {
        decodeUnsafe,
        decode,
        encode,
        toWords,
        fromWordsUnsafe,
        fromWords,
    };
}
exports.bech32 = getLibraryFromEncoding('bech32');
exports.bech32m = getLibraryFromEncoding('bech32m');


/***/ }),

/***/ 24219:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Blake2B in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

const util = __webpack_require__(88791)

// 64-bit unsigned addition
// Sets v[a,a+1] += v[b,b+1]
// v should be a Uint32Array
function ADD64AA (v, a, b) {
  const o0 = v[a] + v[b]
  let o1 = v[a + 1] + v[b + 1]
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// 64-bit unsigned addition
// Sets v[a,a+1] += b
// b0 is the low 32 bits of b, b1 represents the high 32 bits
function ADD64AC (v, a, b0, b1) {
  let o0 = v[a] + b0
  if (b0 < 0) {
    o0 += 0x100000000
  }
  let o1 = v[a + 1] + b1
  if (o0 >= 0x100000000) {
    o1++
  }
  v[a] = o0
  v[a + 1] = o1
}

// Little-endian byte access
function B2B_GET32 (arr, i) {
  return arr[i] ^ (arr[i + 1] << 8) ^ (arr[i + 2] << 16) ^ (arr[i + 3] << 24)
}

// G Mixing function
// The ROTRs are inlined for speed
function B2B_G (a, b, c, d, ix, iy) {
  const x0 = m[ix]
  const x1 = m[ix + 1]
  const y0 = m[iy]
  const y1 = m[iy + 1]

  ADD64AA(v, a, b) // v[a,a+1] += v[b,b+1] ... in JS we must store a uint64 as two uint32s
  ADD64AC(v, a, x0, x1) // v[a, a+1] += x ... x0 is the low 32 bits of x, x1 is the high 32 bits

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated to the right by 32 bits
  let xor0 = v[d] ^ v[a]
  let xor1 = v[d + 1] ^ v[a + 1]
  v[d] = xor1
  v[d + 1] = xor0

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 24 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor0 >>> 24) ^ (xor1 << 8)
  v[b + 1] = (xor1 >>> 24) ^ (xor0 << 8)

  ADD64AA(v, a, b)
  ADD64AC(v, a, y0, y1)

  // v[d,d+1] = (v[d,d+1] xor v[a,a+1]) rotated right by 16 bits
  xor0 = v[d] ^ v[a]
  xor1 = v[d + 1] ^ v[a + 1]
  v[d] = (xor0 >>> 16) ^ (xor1 << 16)
  v[d + 1] = (xor1 >>> 16) ^ (xor0 << 16)

  ADD64AA(v, c, d)

  // v[b,b+1] = (v[b,b+1] xor v[c,c+1]) rotated right by 63 bits
  xor0 = v[b] ^ v[c]
  xor1 = v[b + 1] ^ v[c + 1]
  v[b] = (xor1 >>> 31) ^ (xor0 << 1)
  v[b + 1] = (xor0 >>> 31) ^ (xor1 << 1)
}

// Initialization Vector
const BLAKE2B_IV32 = new Uint32Array([
  0xf3bcc908,
  0x6a09e667,
  0x84caa73b,
  0xbb67ae85,
  0xfe94f82b,
  0x3c6ef372,
  0x5f1d36f1,
  0xa54ff53a,
  0xade682d1,
  0x510e527f,
  0x2b3e6c1f,
  0x9b05688c,
  0xfb41bd6b,
  0x1f83d9ab,
  0x137e2179,
  0x5be0cd19
])

const SIGMA8 = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3
]

// These are offsets into a uint64 buffer.
// Multiply them all by 2 to make them offsets into a uint32 buffer,
// because this is Javascript and we don't have uint64s
const SIGMA82 = new Uint8Array(
  SIGMA8.map(function (x) {
    return x * 2
  })
)

// Compression function. 'last' flag indicates last block.
// Note we're representing 16 uint64s as 32 uint32s
const v = new Uint32Array(32)
const m = new Uint32Array(32)
function blake2bCompress (ctx, last) {
  let i = 0

  // init work variables
  for (i = 0; i < 16; i++) {
    v[i] = ctx.h[i]
    v[i + 16] = BLAKE2B_IV32[i]
  }

  // low 64 bits of offset
  v[24] = v[24] ^ ctx.t
  v[25] = v[25] ^ (ctx.t / 0x100000000)
  // high 64 bits not supported, offset may not be higher than 2**53-1

  // last block flag set ?
  if (last) {
    v[28] = ~v[28]
    v[29] = ~v[29]
  }

  // get little-endian words
  for (i = 0; i < 32; i++) {
    m[i] = B2B_GET32(ctx.b, 4 * i)
  }

  // twelve rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 64)
  for (i = 0; i < 12; i++) {
    // util.debugPrint('   (i=' + (i < 10 ? ' ' : '') + i + ') v[16]', v, 64)
    B2B_G(0, 8, 16, 24, SIGMA82[i * 16 + 0], SIGMA82[i * 16 + 1])
    B2B_G(2, 10, 18, 26, SIGMA82[i * 16 + 2], SIGMA82[i * 16 + 3])
    B2B_G(4, 12, 20, 28, SIGMA82[i * 16 + 4], SIGMA82[i * 16 + 5])
    B2B_G(6, 14, 22, 30, SIGMA82[i * 16 + 6], SIGMA82[i * 16 + 7])
    B2B_G(0, 10, 20, 30, SIGMA82[i * 16 + 8], SIGMA82[i * 16 + 9])
    B2B_G(2, 12, 22, 24, SIGMA82[i * 16 + 10], SIGMA82[i * 16 + 11])
    B2B_G(4, 14, 16, 26, SIGMA82[i * 16 + 12], SIGMA82[i * 16 + 13])
    B2B_G(6, 8, 18, 28, SIGMA82[i * 16 + 14], SIGMA82[i * 16 + 15])
  }
  // util.debugPrint('   (i=12) v[16]', v, 64)

  for (i = 0; i < 16; i++) {
    ctx.h[i] = ctx.h[i] ^ v[i] ^ v[i + 16]
  }
  // util.debugPrint('h[8]', ctx.h, 64)
}

// Creates a BLAKE2b hashing context
// Requires an output length between 1 and 64 bytes
// Takes an optional Uint8Array key
function blake2bInit (outlen, key) {
  if (outlen === 0 || outlen > 64) {
    throw new Error('Illegal output length, expected 0 < length <= 64')
  }
  if (key && key.length > 64) {
    throw new Error('Illegal key, expected Uint8Array with 0 < length <= 64')
  }

  // state, 'param block'
  const ctx = {
    b: new Uint8Array(128),
    h: new Uint32Array(16),
    t: 0, // input count
    c: 0, // pointer within buffer
    outlen: outlen // output length in bytes
  }

  // initialize hash state
  for (let i = 0; i < 16; i++) {
    ctx.h[i] = BLAKE2B_IV32[i]
  }
  const keylen = key ? key.length : 0
  ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen

  // key the hash, if applicable
  if (key) {
    blake2bUpdate(ctx, key)
    // at the end
    ctx.c = 128
  }

  return ctx
}

// Updates a BLAKE2b streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2bUpdate (ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 128) {
      // buffer full ?
      ctx.t += ctx.c // add counters
      blake2bCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2b streaming hash
// Returns a Uint8Array containing the message digest
function blake2bFinal (ctx) {
  ctx.t += ctx.c // mark last block offset

  while (ctx.c < 128) {
    // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2bCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  const out = new Uint8Array(ctx.outlen)
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = ctx.h[i >> 2] >> (8 * (i & 3))
  }
  return out
}

// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2b (input, key, outlen) {
  // preprocess inputs
  outlen = outlen || 64
  input = util.normalizeInput(input)

  // do the math
  const ctx = blake2bInit(outlen, key)
  blake2bUpdate(ctx, input)
  return blake2bFinal(ctx)
}

// Computes the BLAKE2B hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function blake2bHex (input, key, outlen) {
  const output = blake2b(input, key, outlen)
  return util.toHex(output)
}

module.exports = {
  blake2b: blake2b,
  blake2bHex: blake2bHex,
  blake2bInit: blake2bInit,
  blake2bUpdate: blake2bUpdate,
  blake2bFinal: blake2bFinal
}


/***/ }),

/***/ 15707:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// BLAKE2s hash function in pure Javascript
// Adapted from the reference implementation in RFC7693
// Ported to Javascript by DC - https://github.com/dcposch

const util = __webpack_require__(88791)

// Little-endian byte access.
// Expects a Uint8Array and an index
// Returns the little-endian uint32 at v[i..i+3]
function B2S_GET32 (v, i) {
  return v[i] ^ (v[i + 1] << 8) ^ (v[i + 2] << 16) ^ (v[i + 3] << 24)
}

// Mixing function G.
function B2S_G (a, b, c, d, x, y) {
  v[a] = v[a] + v[b] + x
  v[d] = ROTR32(v[d] ^ v[a], 16)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 12)
  v[a] = v[a] + v[b] + y
  v[d] = ROTR32(v[d] ^ v[a], 8)
  v[c] = v[c] + v[d]
  v[b] = ROTR32(v[b] ^ v[c], 7)
}

// 32-bit right rotation
// x should be a uint32
// y must be between 1 and 31, inclusive
function ROTR32 (x, y) {
  return (x >>> y) ^ (x << (32 - y))
}

// Initialization Vector.
const BLAKE2S_IV = new Uint32Array([
  0x6a09e667,
  0xbb67ae85,
  0x3c6ef372,
  0xa54ff53a,
  0x510e527f,
  0x9b05688c,
  0x1f83d9ab,
  0x5be0cd19
])

const SIGMA = new Uint8Array([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  14,
  10,
  4,
  8,
  9,
  15,
  13,
  6,
  1,
  12,
  0,
  2,
  11,
  7,
  5,
  3,
  11,
  8,
  12,
  0,
  5,
  2,
  15,
  13,
  10,
  14,
  3,
  6,
  7,
  1,
  9,
  4,
  7,
  9,
  3,
  1,
  13,
  12,
  11,
  14,
  2,
  6,
  5,
  10,
  4,
  0,
  15,
  8,
  9,
  0,
  5,
  7,
  2,
  4,
  10,
  15,
  14,
  1,
  11,
  12,
  6,
  8,
  3,
  13,
  2,
  12,
  6,
  10,
  0,
  11,
  8,
  3,
  4,
  13,
  7,
  5,
  15,
  14,
  1,
  9,
  12,
  5,
  1,
  15,
  14,
  13,
  4,
  10,
  0,
  7,
  6,
  3,
  9,
  2,
  8,
  11,
  13,
  11,
  7,
  14,
  12,
  1,
  3,
  9,
  5,
  0,
  15,
  4,
  8,
  6,
  2,
  10,
  6,
  15,
  14,
  9,
  11,
  3,
  0,
  8,
  12,
  2,
  13,
  7,
  1,
  4,
  10,
  5,
  10,
  2,
  8,
  4,
  7,
  6,
  1,
  5,
  15,
  11,
  9,
  14,
  3,
  12,
  13,
  0
])

// Compression function. "last" flag indicates last block
const v = new Uint32Array(16)
const m = new Uint32Array(16)
function blake2sCompress (ctx, last) {
  let i = 0
  for (i = 0; i < 8; i++) {
    // init work variables
    v[i] = ctx.h[i]
    v[i + 8] = BLAKE2S_IV[i]
  }

  v[12] ^= ctx.t // low 32 bits of offset
  v[13] ^= ctx.t / 0x100000000 // high 32 bits
  if (last) {
    // last block flag set ?
    v[14] = ~v[14]
  }

  for (i = 0; i < 16; i++) {
    // get little-endian words
    m[i] = B2S_GET32(ctx.b, 4 * i)
  }

  // ten rounds of mixing
  // uncomment the DebugPrint calls to log the computation
  // and match the RFC sample documentation
  // util.debugPrint('          m[16]', m, 32)
  for (i = 0; i < 10; i++) {
    // util.debugPrint('   (i=' + i + ')  v[16]', v, 32)
    B2S_G(0, 4, 8, 12, m[SIGMA[i * 16 + 0]], m[SIGMA[i * 16 + 1]])
    B2S_G(1, 5, 9, 13, m[SIGMA[i * 16 + 2]], m[SIGMA[i * 16 + 3]])
    B2S_G(2, 6, 10, 14, m[SIGMA[i * 16 + 4]], m[SIGMA[i * 16 + 5]])
    B2S_G(3, 7, 11, 15, m[SIGMA[i * 16 + 6]], m[SIGMA[i * 16 + 7]])
    B2S_G(0, 5, 10, 15, m[SIGMA[i * 16 + 8]], m[SIGMA[i * 16 + 9]])
    B2S_G(1, 6, 11, 12, m[SIGMA[i * 16 + 10]], m[SIGMA[i * 16 + 11]])
    B2S_G(2, 7, 8, 13, m[SIGMA[i * 16 + 12]], m[SIGMA[i * 16 + 13]])
    B2S_G(3, 4, 9, 14, m[SIGMA[i * 16 + 14]], m[SIGMA[i * 16 + 15]])
  }
  // util.debugPrint('   (i=10) v[16]', v, 32)

  for (i = 0; i < 8; i++) {
    ctx.h[i] ^= v[i] ^ v[i + 8]
  }
  // util.debugPrint('h[8]', ctx.h, 32)
}

// Creates a BLAKE2s hashing context
// Requires an output length between 1 and 32 bytes
// Takes an optional Uint8Array key
function blake2sInit (outlen, key) {
  if (!(outlen > 0 && outlen <= 32)) {
    throw new Error('Incorrect output length, should be in [1, 32]')
  }
  const keylen = key ? key.length : 0
  if (key && !(keylen > 0 && keylen <= 32)) {
    throw new Error('Incorrect key length, should be in [1, 32]')
  }

  const ctx = {
    h: new Uint32Array(BLAKE2S_IV), // hash state
    b: new Uint8Array(64), // input block
    c: 0, // pointer within block
    t: 0, // input count
    outlen: outlen // output length in bytes
  }
  ctx.h[0] ^= 0x01010000 ^ (keylen << 8) ^ outlen

  if (keylen > 0) {
    blake2sUpdate(ctx, key)
    ctx.c = 64 // at the end
  }

  return ctx
}

// Updates a BLAKE2s streaming hash
// Requires hash context and Uint8Array (byte array)
function blake2sUpdate (ctx, input) {
  for (let i = 0; i < input.length; i++) {
    if (ctx.c === 64) {
      // buffer full ?
      ctx.t += ctx.c // add counters
      blake2sCompress(ctx, false) // compress (not last)
      ctx.c = 0 // counter to zero
    }
    ctx.b[ctx.c++] = input[i]
  }
}

// Completes a BLAKE2s streaming hash
// Returns a Uint8Array containing the message digest
function blake2sFinal (ctx) {
  ctx.t += ctx.c // mark last block offset
  while (ctx.c < 64) {
    // fill up with zeros
    ctx.b[ctx.c++] = 0
  }
  blake2sCompress(ctx, true) // final block flag = 1

  // little endian convert and store
  const out = new Uint8Array(ctx.outlen)
  for (let i = 0; i < ctx.outlen; i++) {
    out[i] = (ctx.h[i >> 2] >> (8 * (i & 3))) & 0xff
  }
  return out
}

// Computes the BLAKE2S hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2s (input, key, outlen) {
  // preprocess inputs
  outlen = outlen || 32
  input = util.normalizeInput(input)

  // do the math
  const ctx = blake2sInit(outlen, key)
  blake2sUpdate(ctx, input)
  return blake2sFinal(ctx)
}

// Computes the BLAKE2S hash of a string or byte array
//
// Returns an n-byte hash in hex, all lowercase
//
// Parameters:
// - input - the input bytes, as a string, Buffer, or Uint8Array
// - key - optional key Uint8Array, up to 32 bytes
// - outlen - optional output length in bytes, default 64
function blake2sHex (input, key, outlen) {
  const output = blake2s(input, key, outlen)
  return util.toHex(output)
}

module.exports = {
  blake2s: blake2s,
  blake2sHex: blake2sHex,
  blake2sInit: blake2sInit,
  blake2sUpdate: blake2sUpdate,
  blake2sFinal: blake2sFinal
}


/***/ }),

/***/ 62797:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const b2b = __webpack_require__(24219)
const b2s = __webpack_require__(15707)

module.exports = {
  blake2b: b2b.blake2b,
  blake2bHex: b2b.blake2bHex,
  blake2bInit: b2b.blake2bInit,
  blake2bUpdate: b2b.blake2bUpdate,
  blake2bFinal: b2b.blake2bFinal,
  blake2s: b2s.blake2s,
  blake2sHex: b2s.blake2sHex,
  blake2sInit: b2s.blake2sInit,
  blake2sUpdate: b2s.blake2sUpdate,
  blake2sFinal: b2s.blake2sFinal
}


/***/ }),

/***/ 88791:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
const ERROR_MSG_INPUT = 'Input must be an string, Buffer or Uint8Array'

// For convenience, let people hash a string, not just a Uint8Array
function normalizeInput (input) {
  let ret
  if (input instanceof Uint8Array) {
    ret = input
  } else if (input instanceof Buffer) {
    ret = new Uint8Array(input)
  } else if (typeof input === 'string') {
    ret = new Uint8Array(Buffer.from(input, 'utf8'))
  } else {
    throw new Error(ERROR_MSG_INPUT)
  }
  return ret
}

// Converts a Uint8Array to a hexadecimal string
// For example, toHex([255, 0, 255]) returns "ff00ff"
function toHex (bytes) {
  return Array.prototype.map
    .call(bytes, function (n) {
      return (n < 16 ? '0' : '') + n.toString(16)
    })
    .join('')
}

// Converts any value in [0...2^32-1] to an 8-character hex string
function uint32ToHex (val) {
  return (0x100000000 + val).toString(16).substring(1)
}

// For debugging: prints out hash state in the same format as the RFC
// sample computation exactly, so that you can diff
function debugPrint (label, arr, size) {
  let msg = '\n' + label + ' = '
  for (let i = 0; i < arr.length; i += 2) {
    if (size === 32) {
      msg += uint32ToHex(arr[i]).toUpperCase()
      msg += ' '
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
    } else if (size === 64) {
      msg += uint32ToHex(arr[i + 1]).toUpperCase()
      msg += uint32ToHex(arr[i]).toUpperCase()
    } else throw new Error('Invalid size ' + size)
    if (i % 6 === 4) {
      msg += '\n' + new Array(label.length + 4).join(' ')
    } else if (i < arr.length - 2) {
      msg += ' '
    }
  }
  console.log(msg)
}

// For performance testing: generates N bytes of input, hashes M times
// Measures and prints MB/second hash performance each time
function testSpeed (hashFn, N, M) {
  let startMs = new Date().getTime()

  const input = new Uint8Array(N)
  for (let i = 0; i < N; i++) {
    input[i] = i % 256
  }
  const genMs = new Date().getTime()
  console.log('Generated random input in ' + (genMs - startMs) + 'ms')
  startMs = genMs

  for (let i = 0; i < M; i++) {
    const hashHex = hashFn(input)
    const hashMs = new Date().getTime()
    const ms = hashMs - startMs
    startMs = hashMs
    console.log('Hashed in ' + ms + 'ms: ' + hashHex.substring(0, 20) + '...')
    console.log(
      Math.round((N / (1 << 20) / (ms / 1000)) * 100) / 100 + ' MB PER SECOND'
    )
  }
}

module.exports = {
  normalizeInput: normalizeInput,
  toHex: toHex,
  debugPrint: debugPrint,
  testSpeed: testSpeed
}


/***/ }),

/***/ 11012:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t(__webpack_require__(58757));else { var l, r; }}(this,(function(e){return function(e){var t={};function r(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(r.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(l,a,function(t){return e[t]}.bind(null,a));return l},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=1)}([function(t,r){t.exports=e},function(e,t,r){e.exports=r(2)},function(e,t,r){"use strict";function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)r=i[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.r(t);var n=r(0),c=r.n(n),h=function(e){for(var t=0,r=0;r<e.length;r++){t=(t<<5)-t+e.charCodeAt(r),t&=t}return Math.abs(t)},o=function(e,t){return Math.floor(e/Math.pow(10,t)%10)},s=function(e,t){return!(o(e,t)%2)},m=function(e,t,r){var l=e%t;return r&&o(e,r)%2===0?-l:l},f=function(e,t,r){return t[e%r]};var u=function(e){var t=function(e,t){var r=h(e),l=t&&t.length;return Array.from({length:4},(function(e,a){return{color:f(r+a,t,l),translateX:m(r*(a+1),40-(a+17),1),translateY:m(r*(a+1),40-(a+17),2),rotate:m(r*(a+1),360),isSquare:s(r,2)}}))}(e.name,e.colors);return n.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},n.createElement("title",null,e.name),n.createElement("mask",{id:"mask__bauhaus",maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},n.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),n.createElement("g",{mask:"url(#mask__bauhaus)"},n.createElement("rect",{width:80,height:80,fill:t[0].color}),n.createElement("rect",{x:10,y:30,width:80,height:t[1].isSquare?80:10,fill:t[1].color,transform:"translate("+t[1].translateX+" "+t[1].translateY+") rotate("+t[1].rotate+" 40 40)"}),n.createElement("circle",{cx:40,cy:40,fill:t[2].color,r:16,transform:"translate("+t[2].translateX+" "+t[2].translateY+")"}),n.createElement("line",{x1:0,y1:40,x2:80,y2:40,strokeWidth:2,stroke:t[3].color,transform:"translate("+t[3].translateX+" "+t[3].translateY+") rotate("+t[3].rotate+" 40 40)"})))};var d=function(e){var t=function(e,t){var r=h(t),l=e&&e.length,a=Array.from({length:5},(function(t,a){return f(r+a,e,l)})),i=[];return i[0]=a[0],i[1]=a[1],i[2]=a[1],i[3]=a[2],i[4]=a[2],i[5]=a[3],i[6]=a[3],i[7]=a[0],i[8]=a[4],i}(e.colors,e.name);return c.a.createElement("svg",{viewBox:"0 0 90 90",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},c.a.createElement("title",null,e.name),c.a.createElement("mask",{id:"mask__ring",maskUnits:"userSpaceOnUse",x:0,y:0,width:90,height:90},c.a.createElement("rect",{width:90,height:90,rx:e.square?void 0:180,fill:"#FFFFFF"})),c.a.createElement("g",{mask:"url(#mask__ring)"},c.a.createElement("path",{d:"M0 0h90v45H0z",fill:t[0]}),c.a.createElement("path",{d:"M0 45h90v45H0z",fill:t[1]}),c.a.createElement("path",{d:"M83 45a38 38 0 00-76 0h76z",fill:t[2]}),c.a.createElement("path",{d:"M83 45a38 38 0 01-76 0h76z",fill:t[3]}),c.a.createElement("path",{d:"M77 45a32 32 0 10-64 0h64z",fill:t[4]}),c.a.createElement("path",{d:"M77 45a32 32 0 11-64 0h64z",fill:t[5]}),c.a.createElement("path",{d:"M71 45a26 26 0 00-52 0h52z",fill:t[6]}),c.a.createElement("path",{d:"M71 45a26 26 0 01-52 0h52z",fill:t[7]}),c.a.createElement("circle",{cx:45,cy:45,r:23,fill:t[8]})))};var g=function(e){var t=function(e,t){var r=h(e),l=t&&t.length;return Array.from({length:64},(function(e,a){return f(r%a,t,l)}))}(e.name,e.colors);return n.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},n.createElement("title",null,e.name),n.createElement("mask",{id:"mask__pixel","mask-type":"alpha",maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},n.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),n.createElement("g",{mask:"url(#mask__pixel)"},n.createElement("rect",{width:10,height:10,fill:t[0]}),n.createElement("rect",{x:20,width:10,height:10,fill:t[1]}),n.createElement("rect",{x:40,width:10,height:10,fill:t[2]}),n.createElement("rect",{x:60,width:10,height:10,fill:t[3]}),n.createElement("rect",{x:10,width:10,height:10,fill:t[4]}),n.createElement("rect",{x:30,width:10,height:10,fill:t[5]}),n.createElement("rect",{x:50,width:10,height:10,fill:t[6]}),n.createElement("rect",{x:70,width:10,height:10,fill:t[7]}),n.createElement("rect",{y:10,width:10,height:10,fill:t[8]}),n.createElement("rect",{y:20,width:10,height:10,fill:t[9]}),n.createElement("rect",{y:30,width:10,height:10,fill:t[10]}),n.createElement("rect",{y:40,width:10,height:10,fill:t[11]}),n.createElement("rect",{y:50,width:10,height:10,fill:t[12]}),n.createElement("rect",{y:60,width:10,height:10,fill:t[13]}),n.createElement("rect",{y:70,width:10,height:10,fill:t[14]}),n.createElement("rect",{x:20,y:10,width:10,height:10,fill:t[15]}),n.createElement("rect",{x:20,y:20,width:10,height:10,fill:t[16]}),n.createElement("rect",{x:20,y:30,width:10,height:10,fill:t[17]}),n.createElement("rect",{x:20,y:40,width:10,height:10,fill:t[18]}),n.createElement("rect",{x:20,y:50,width:10,height:10,fill:t[19]}),n.createElement("rect",{x:20,y:60,width:10,height:10,fill:t[20]}),n.createElement("rect",{x:20,y:70,width:10,height:10,fill:t[21]}),n.createElement("rect",{x:40,y:10,width:10,height:10,fill:t[22]}),n.createElement("rect",{x:40,y:20,width:10,height:10,fill:t[23]}),n.createElement("rect",{x:40,y:30,width:10,height:10,fill:t[24]}),n.createElement("rect",{x:40,y:40,width:10,height:10,fill:t[25]}),n.createElement("rect",{x:40,y:50,width:10,height:10,fill:t[26]}),n.createElement("rect",{x:40,y:60,width:10,height:10,fill:t[27]}),n.createElement("rect",{x:40,y:70,width:10,height:10,fill:t[28]}),n.createElement("rect",{x:60,y:10,width:10,height:10,fill:t[29]}),n.createElement("rect",{x:60,y:20,width:10,height:10,fill:t[30]}),n.createElement("rect",{x:60,y:30,width:10,height:10,fill:t[31]}),n.createElement("rect",{x:60,y:40,width:10,height:10,fill:t[32]}),n.createElement("rect",{x:60,y:50,width:10,height:10,fill:t[33]}),n.createElement("rect",{x:60,y:60,width:10,height:10,fill:t[34]}),n.createElement("rect",{x:60,y:70,width:10,height:10,fill:t[35]}),n.createElement("rect",{x:10,y:10,width:10,height:10,fill:t[36]}),n.createElement("rect",{x:10,y:20,width:10,height:10,fill:t[37]}),n.createElement("rect",{x:10,y:30,width:10,height:10,fill:t[38]}),n.createElement("rect",{x:10,y:40,width:10,height:10,fill:t[39]}),n.createElement("rect",{x:10,y:50,width:10,height:10,fill:t[40]}),n.createElement("rect",{x:10,y:60,width:10,height:10,fill:t[41]}),n.createElement("rect",{x:10,y:70,width:10,height:10,fill:t[42]}),n.createElement("rect",{x:30,y:10,width:10,height:10,fill:t[43]}),n.createElement("rect",{x:30,y:20,width:10,height:10,fill:t[44]}),n.createElement("rect",{x:30,y:30,width:10,height:10,fill:t[45]}),n.createElement("rect",{x:30,y:40,width:10,height:10,fill:t[46]}),n.createElement("rect",{x:30,y:50,width:10,height:10,fill:t[47]}),n.createElement("rect",{x:30,y:60,width:10,height:10,fill:t[48]}),n.createElement("rect",{x:30,y:70,width:10,height:10,fill:t[49]}),n.createElement("rect",{x:50,y:10,width:10,height:10,fill:t[50]}),n.createElement("rect",{x:50,y:20,width:10,height:10,fill:t[51]}),n.createElement("rect",{x:50,y:30,width:10,height:10,fill:t[52]}),n.createElement("rect",{x:50,y:40,width:10,height:10,fill:t[53]}),n.createElement("rect",{x:50,y:50,width:10,height:10,fill:t[54]}),n.createElement("rect",{x:50,y:60,width:10,height:10,fill:t[55]}),n.createElement("rect",{x:50,y:70,width:10,height:10,fill:t[56]}),n.createElement("rect",{x:70,y:10,width:10,height:10,fill:t[57]}),n.createElement("rect",{x:70,y:20,width:10,height:10,fill:t[58]}),n.createElement("rect",{x:70,y:30,width:10,height:10,fill:t[59]}),n.createElement("rect",{x:70,y:40,width:10,height:10,fill:t[60]}),n.createElement("rect",{x:70,y:50,width:10,height:10,fill:t[61]}),n.createElement("rect",{x:70,y:60,width:10,height:10,fill:t[62]}),n.createElement("rect",{x:70,y:70,width:10,height:10,fill:t[63]})))};var w=function(e){var t=function(e,t){var r,l=h(e),a=t&&t.length,i=f(l,t,a),n=m(l,10,1),c=n<5?n+4:n,o=m(l,10,2),u=o<5?o+4:o;return{wrapperColor:i,faceColor:(r=i,"#"===r.slice(0,1)&&(r=r.slice(1)),(299*parseInt(r.substr(0,2),16)+587*parseInt(r.substr(2,2),16)+114*parseInt(r.substr(4,2),16))/1e3>=128?"#000000":"#FFFFFF"),backgroundColor:f(l+13,t,a),wrapperTranslateX:c,wrapperTranslateY:u,wrapperRotate:m(l,360),wrapperScale:1+m(l,3)/10,isMouthOpen:s(l,2),isCircle:s(l,1),eyeSpread:m(l,5),mouthSpread:m(l,3),faceRotate:m(l,10,3),faceTranslateX:c>6?c/2:m(l,8,1),faceTranslateY:u>6?u/2:m(l,7,2)}}(e.name,e.colors);return n.createElement("svg",{viewBox:"0 0 36 36",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},n.createElement("title",null,e.name),n.createElement("mask",{id:"mask__beam",maskUnits:"userSpaceOnUse",x:0,y:0,width:36,height:36},n.createElement("rect",{width:36,height:36,rx:e.square?void 0:72,fill:"#FFFFFF"})),n.createElement("g",{mask:"url(#mask__beam)"},n.createElement("rect",{width:36,height:36,fill:t.backgroundColor}),n.createElement("rect",{x:"0",y:"0",width:36,height:36,transform:"translate("+t.wrapperTranslateX+" "+t.wrapperTranslateY+") rotate("+t.wrapperRotate+" 18 18) scale("+t.wrapperScale+")",fill:t.wrapperColor,rx:t.isCircle?36:6}),n.createElement("g",{transform:"translate("+t.faceTranslateX+" "+t.faceTranslateY+") rotate("+t.faceRotate+" 18 18)"},t.isMouthOpen?n.createElement("path",{d:"M15 "+(19+t.mouthSpread)+"c2 1 4 1 6 0",stroke:t.faceColor,fill:"none",strokeLinecap:"round"}):n.createElement("path",{d:"M13,"+(19+t.mouthSpread)+" a1,0.75 0 0,0 10,0",fill:t.faceColor}),n.createElement("rect",{x:14-t.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:t.faceColor}),n.createElement("rect",{x:20+t.eyeSpread,y:14,width:1.5,height:2,rx:1,stroke:"none",fill:t.faceColor}))))};var E=function(e){var t=function(e,t){var r=h(e),l=t&&t.length;return Array.from({length:4},(function(e,a){return f(r+a,t,l)}))}(e.name,e.colors),r=e.name.replace(/\s/g,"");return n.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},n.createElement("title",null,e.name),n.createElement("mask",{id:"mask__sunset",maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},n.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),n.createElement("g",{mask:"url(#mask__sunset)"},n.createElement("path",{fill:"url(#gradient_paint0_linear_"+r+")",d:"M0 0h80v40H0z"}),n.createElement("path",{fill:"url(#gradient_paint1_linear_"+r+")",d:"M0 40h80v40H0z"})),n.createElement("defs",null,n.createElement("linearGradient",{id:"gradient_paint0_linear_"+r,x1:40,y1:0,x2:40,y2:40,gradientUnits:"userSpaceOnUse"},n.createElement("stop",{stopColor:t[0]}),n.createElement("stop",{offset:1,stopColor:t[1]})),n.createElement("linearGradient",{id:"gradient_paint1_linear_"+r,x1:40,y1:40,x2:40,y2:80,gradientUnits:"userSpaceOnUse"},n.createElement("stop",{stopColor:t[2]}),n.createElement("stop",{offset:1,stopColor:t[3]}))))};var p=function(e){var t=function(e,t){var r=h(e),l=t&&t.length;return Array.from({length:3},(function(e,a){return{color:f(r+a,t,l),translateX:m(r*(a+1),8,1),translateY:m(r*(a+1),8,2),scale:1.2+m(r*(a+1),4)/10,rotate:m(r*(a+1),360,1)}}))}(e.name,e.colors);return n.createElement("svg",{viewBox:"0 0 80 80",fill:"none",role:"img",xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size},n.createElement("title",null,e.name),n.createElement("mask",{id:"mask__marble",maskUnits:"userSpaceOnUse",x:0,y:0,width:80,height:80},n.createElement("rect",{width:80,height:80,rx:e.square?void 0:160,fill:"#FFFFFF"})),n.createElement("g",{mask:"url(#mask__marble)"},n.createElement("rect",{width:80,height:80,fill:t[0].color}),n.createElement("path",{filter:"url(#prefix__filter0_f)",d:"M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z",fill:t[1].color,transform:"translate("+t[1].translateX+" "+t[1].translateY+") rotate("+t[1].rotate+" 40 40) scale("+t[2].scale+")"}),n.createElement("path",{filter:"url(#prefix__filter0_f)",style:{mixBlendMode:"overlay"},d:"M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z",fill:t[2].color,transform:"translate("+t[2].translateX+" "+t[2].translateY+") rotate("+t[2].rotate+" 40 40) scale("+t[2].scale+")"})),n.createElement("defs",null,n.createElement("filter",{id:"prefix__filter0_f",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},n.createElement("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),n.createElement("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),n.createElement("feGaussianBlur",{stdDeviation:7,result:"effect1_foregroundBlur"}))))},y=["pixel","bauhaus","ring","beam","sunset","marble"],x={geometric:"beam",abstract:"bauhaus"},v=function(e){var t=e.variant,r=void 0===t?"marble":t,n=e.colors,h=void 0===n?["#92A1C6","#146A7C","#F0AB3D","#C271B4","#C20D90"]:n,o=e.name,s=void 0===o?"Clara Barton":o,m=e.square,f=void 0!==m&&m,v=e.size,b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({colors:h,name:s,size:void 0===v?40:v,square:f},i(e,["variant","colors","name","square","size"]));return{pixel:c.a.createElement(g,b),bauhaus:c.a.createElement(u,b),ring:c.a.createElement(d,b),beam:c.a.createElement(w,b),sunset:c.a.createElement(E,b),marble:c.a.createElement(p,b)}[Object.keys(x).includes(r)?x[r]:y.includes(r)?r:"marble"]};t.default=v}])}));

/***/ }),

/***/ 97801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const chain_1 = __webpack_require__(25035);
const spec_1 = __webpack_require__(10662);
const utils_1 = __webpack_require__(83509);
class AccountID {
    constructor(params) {
        if (typeof params === "string") {
            params = AccountID.parse(params);
        }
        this.chainId = new chain_1.ChainID(params.chainId);
        this.address = params.address;
    }
    static parse(id) {
        if (!utils_1.isValidId(id, this.spec)) {
            throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
        }
        return new AccountID(utils_1.getParams(id, this.spec)).toJson();
    }
    static format(params) {
        return utils_1.joinParams(params, this.spec);
    }
    toString() {
        return AccountID.format(this.toJson());
    }
    toJson() {
        return {
            chainId: this.chainId.toJson(),
            address: this.address,
        };
    }
}
exports.AccountID = AccountID;
AccountID.spec = spec_1.CAIP["10"];
//# sourceMappingURL=account.js.map

/***/ }),

/***/ 25035:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const spec_1 = __webpack_require__(10662);
const utils_1 = __webpack_require__(83509);
class ChainID {
    constructor(params) {
        if (typeof params === "string") {
            params = ChainID.parse(params);
        }
        this.namespace = params.namespace;
        this.reference = params.reference;
    }
    static parse(id) {
        if (!utils_1.isValidId(id, this.spec)) {
            throw new Error(`Invalid ${this.spec.name} provided: ${id}`);
        }
        return new ChainID(utils_1.getParams(id, this.spec)).toJson();
    }
    static format(params) {
        return utils_1.joinParams(params, this.spec);
    }
    toString() {
        return ChainID.format(this.toJson());
    }
    toJson() {
        return {
            namespace: this.namespace,
            reference: this.reference,
        };
    }
}
exports.ChainID = ChainID;
ChainID.spec = spec_1.CAIP["2"];
//# sourceMappingURL=chain.js.map

/***/ }),

/***/ 5937:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__export(__webpack_require__(97801));
__export(__webpack_require__(25035));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 10662:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const CAIP2 = {
    name: "chainId",
    regex: "[-:a-zA-Z0-9]{5,64}",
    parameters: {
        delimiter: ":",
        values: {
            0: {
                name: "namespace",
                regex: "[-a-z0-9]{3,16}",
            },
            1: {
                name: "reference",
                regex: "[-a-zA-Z0-9]{1,47}",
            },
        },
    },
};
const CAIP10 = {
    name: "accountId",
    regex: "[-@:a-zA-Z0-9]{7,128}",
    parameters: {
        delimiter: "@",
        values: {
            0: {
                name: "address",
                regex: "[a-zA-Z0-9]{1,63}",
            },
            1: CAIP2,
        },
    },
};
exports.CAIP = {
    "2": CAIP2,
    "10": CAIP10,
};
//# sourceMappingURL=spec.js.map

/***/ }),

/***/ 83509:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function splitParams(id, spec) {
    return id.split(spec.parameters.delimiter);
}
exports.splitParams = splitParams;
function getParams(id, spec) {
    const arr = splitParams(id, spec);
    const params = {};
    arr.forEach((value, index) => {
        params[spec.parameters.values[index].name] = value;
    });
    return params;
}
exports.getParams = getParams;
function joinParams(params, spec) {
    return Object.values(spec.parameters.values)
        .map(parameter => {
        const param = params[parameter.name];
        return typeof param === "string"
            ? param
            : joinParams(param, parameter);
    })
        .join(spec.parameters.delimiter);
}
exports.joinParams = joinParams;
function isValidId(id, spec) {
    if (!new RegExp(spec.regex).test(id))
        return false;
    const params = splitParams(id, spec);
    if (params.length !== Object.keys(spec.parameters.values).length)
        return false;
    const matches = params
        .map((param, index) => new RegExp(spec.parameters.values[index].regex).test(param))
        .filter(x => !!x);
    if (matches.length !== params.length)
        return false;
    return true;
}
exports.isValidId = isValidId;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 56899:
/***/ ((module) => {

"use strict";
/* jshint esversion: 6 */
/* jslint node: true */


module.exports = function serialize (object) {
  if (object === null || typeof object !== 'object' || object.toJSON != null) {
    return JSON.stringify(object);
  }

  if (Array.isArray(object)) {
    return '[' + object.reduce((t, cv, ci) => {
      const comma = ci === 0 ? '' : ',';
      const value = cv === undefined || typeof cv === 'symbol' ? null : cv;
      return t + comma + serialize(value);
    }, '') + ']';
  }

  return '{' + Object.keys(object).sort().reduce((t, cv, ci) => {
    if (object[cv] === undefined ||
        typeof object[cv] === 'symbol') {
      return t;
    }
    const comma = t.length === 0 ? '' : ',';
    return t + comma + serialize(cv) + ':' + serialize(object[cv]);
  }, '') + '}';
};


/***/ }),

/***/ 57281:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

(__webpack_require__(84670).check)("es5");

/***/ }),

/***/ 84670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(77273);
module.exports = __webpack_require__(3948);


/***/ }),

/***/ 37005:
/***/ ((module) => {

var CapabilityDetector = function () {
    this.tests = {};
    this.cache = {};
};
CapabilityDetector.prototype = {
    constructor: CapabilityDetector,
    define: function (name, test) {
        if (typeof (name) != "string" || !(test instanceof Function))
            throw new Error("Invalid capability definition.");
        if (this.tests[name])
            throw new Error('Duplicated capability definition by "' + name + '".');
        this.tests[name] = test;
    },
    check: function (name) {
        if (!this.test(name))
            throw new Error('The current environment does not support "' + name + '", therefore we cannot continue.');
    },
    test: function (name) {
        if (this.cache[name] !== undefined)
            return this.cache[name];
        if (!this.tests[name])
            throw new Error('Unknown capability with name "' + name + '".');
        var test = this.tests[name];
        this.cache[name] = !!test();
        return this.cache[name];
    }
};

module.exports = CapabilityDetector;

/***/ }),

/***/ 77273:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var capability = __webpack_require__(3948),
    define = capability.define,
    test = capability.test;

define("strict mode", function () {
    return (this === undefined);
});

define("arguments.callee.caller", function () {
    try {
        return (function () {
                return arguments.callee.caller;
            })() === arguments.callee;
    } catch (strictModeIsEnforced) {
        return false;
    }
});

define("es5", function () {
    return test("Array.prototype.forEach") &&
        test("Array.prototype.map") &&
        test("Function.prototype.bind") &&
        test("Object.create") &&
        test("Object.defineProperties") &&
        test("Object.defineProperty") &&
        test("Object.prototype.hasOwnProperty");
});

define("Array.prototype.forEach", function () {
    return Array.prototype.forEach;
});

define("Array.prototype.map", function () {
    return Array.prototype.map;
});

define("Function.prototype.bind", function () {
    return Function.prototype.bind;
});

define("Object.create", function () {
    return Object.create;
});

define("Object.defineProperties", function () {
    return Object.defineProperties;
});

define("Object.defineProperty", function () {
    return Object.defineProperty;
});

define("Object.prototype.hasOwnProperty", function () {
    return Object.prototype.hasOwnProperty;
});

define("Error.captureStackTrace", function () {
    return Error.captureStackTrace;
});

define("Error.prototype.stack", function () {
    try {
        throw new Error();
    }
    catch (e) {
        return e.stack || e.stacktrace;
    }
});

/***/ }),

/***/ 3948:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var CapabilityDetector = __webpack_require__(37005);

var detector = new CapabilityDetector();

var capability = function (name) {
    return detector.test(name);
};
capability.define = function (name, test) {
    detector.define(name, test);
};
capability.check = function (name) {
    detector.check(name);
};
capability.test = capability;

module.exports = capability;

/***/ }),

/***/ 4490:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const mh = __webpack_require__(45671)

const CIDUtil = {
  /**
   * Test if the given input is a valid CID object.
   * Returns an error message if it is not.
   * Returns undefined if it is a valid CID.
   *
   * @param {any} other
   * @returns {string|undefined}
   */
  checkCIDComponents: function (other) {
    if (other == null) {
      return 'null values are not valid CIDs'
    }

    if (!(other.version === 0 || other.version === 1)) {
      return 'Invalid version, must be a number equal to 1 or 0'
    }

    if (typeof other.codec !== 'string') {
      return 'codec must be string'
    }

    if (other.version === 0) {
      if (other.codec !== 'dag-pb') {
        return "codec must be 'dag-pb' for CIDv0"
      }
      if (other.multibaseName !== 'base58btc') {
        return "multibaseName must be 'base58btc' for CIDv0"
      }
    }

    if (!(other.multihash instanceof Uint8Array)) {
      return 'multihash must be a Uint8Array'
    }

    try {
      mh.validate(other.multihash)
    } catch (err) {
      let errorMsg = err.message
      if (!errorMsg) { // Just in case mh.validate() throws an error with empty error message
        errorMsg = 'Multihash validation failed'
      }
      return errorMsg
    }
  }
}

module.exports = CIDUtil


/***/ }),

/***/ 55271:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const mh = __webpack_require__(45671)
const multibase = __webpack_require__(45845)
const multicodec = __webpack_require__(83214)
const CIDUtil = __webpack_require__(4490)
const { concat: uint8ArrayConcat } = __webpack_require__(84871)
const { toString: uint8ArrayToString } = __webpack_require__(90453)
const { equals: uint8ArrayEquals } = __webpack_require__(37488)

const codecs = multicodec.nameToCode
const codecInts = /** @type {CodecName[]} */(Object.keys(codecs)).reduce((p, name) => {
  p[codecs[name]] = name
  return p
}, /** @type {Record<CodecCode, CodecName>} */({}))

const symbol = Symbol.for('@ipld/js-cid/CID')

/**
 * @typedef {Object} SerializedCID
 * @property {string} codec
 * @property {number} version
 * @property {Uint8Array} hash
 */
/**
 * @typedef {0|1} CIDVersion
 * @typedef {import('multibase').BaseNameOrCode} BaseNameOrCode
 * @typedef {import('multicodec').CodecName} CodecName
 * @typedef {import('multicodec').CodecCode} CodecCode
 */

/**
 * Class representing a CID `<mbase><version><mcodec><mhash>`
 * , as defined in [ipld/cid](https://github.com/multiformats/cid).
 *
 * @class CID
 */
class CID {
  /**
   * Create a new CID.
   *
   * The algorithm for argument input is roughly:
   * ```
   * if (cid)
   *   -> create a copy
   * else if (str)
   *   if (1st char is on multibase table) -> CID String
   *   else -> bs58 encoded multihash
   * else if (Uint8Array)
   *   if (1st byte is 0 or 1) -> CID
   *   else -> multihash
   * else if (Number)
   *   -> construct CID by parts
   * ```
   *
   * @param {CIDVersion | string | Uint8Array | CID} version
   * @param {string|number} [codec]
   * @param {Uint8Array} [multihash]
   * @param {string} [multibaseName]
   *
   * @example
   * new CID(<version>, <codec>, <multihash>, <multibaseName>)
   * new CID(<cidStr>)
   * new CID(<cid.bytes>)
   * new CID(<multihash>)
   * new CID(<bs58 encoded multihash>)
   * new CID(<cid>)
   */
  constructor (version, codec, multihash, multibaseName) {
    // We have below three blank field accessors only because
    // otherwise TS will not pick them up if done after assignemnts

    /**
     * The version of the CID.
     *
     * @type {CIDVersion}
     */
    // eslint-disable-next-line no-unused-expressions
    this.version

    /**
     * The codec of the CID.
     *
     * @deprecated
     * @type {CodecName}
     */
    // eslint-disable-next-line no-unused-expressions
    this.codec

    /**
     * The multihash of the CID.
     *
     * @type {Uint8Array}
     */
    // eslint-disable-next-line no-unused-expressions
    this.multihash

    Object.defineProperty(this, symbol, { value: true })
    if (CID.isCID(version)) {
      // version is an exising CID instance
      const cid = /** @type {CID} */(version)
      this.version = cid.version
      this.codec = cid.codec
      this.multihash = cid.multihash
      // Default guard for when a CID < 0.7 is passed with no multibaseName
      // @ts-ignore
      this.multibaseName = cid.multibaseName || (cid.version === 0 ? 'base58btc' : 'base32')
      return
    }

    if (typeof version === 'string') {
      // e.g. 'base32' or false
      const baseName = multibase.isEncoded(version)
      if (baseName) {
        // version is a CID String encoded with multibase, so v1
        const cid = multibase.decode(version)
        this.version = /** @type {CIDVersion} */(parseInt(cid[0].toString(), 16))
        this.codec = multicodec.getCodec(cid.slice(1))
        this.multihash = multicodec.rmPrefix(cid.slice(1))
        this.multibaseName = baseName
      } else {
        // version is a base58btc string multihash, so v0
        this.version = 0
        this.codec = 'dag-pb'
        this.multihash = mh.fromB58String(version)
        this.multibaseName = 'base58btc'
      }
      CID.validateCID(this)
      Object.defineProperty(this, 'string', { value: version })
      return
    }

    if (version instanceof Uint8Array) {
      const v = parseInt(version[0].toString(), 16)
      if (v === 1) {
        // version is a CID Uint8Array
        const cid = version
        this.version = v
        this.codec = multicodec.getCodec(cid.slice(1))
        this.multihash = multicodec.rmPrefix(cid.slice(1))
        this.multibaseName = 'base32'
      } else {
        // version is a raw multihash Uint8Array, so v0
        this.version = 0
        this.codec = 'dag-pb'
        this.multihash = version
        this.multibaseName = 'base58btc'
      }
      CID.validateCID(this)
      return
    }

    // otherwise, assemble the CID from the parameters

    this.version = version

    if (typeof codec === 'number') {
      // @ts-ignore
      codec = codecInts[codec]
    }

    this.codec = /** @type {CodecName} */ (codec)

    this.multihash = /** @type {Uint8Array} */ (multihash)

    /**
     * Multibase name as string.
     *
     * @deprecated
     * @type {string}
     */
    this.multibaseName = multibaseName || (version === 0 ? 'base58btc' : 'base32')

    CID.validateCID(this)
  }

  /**
   * The CID as a `Uint8Array`
   *
   * @returns {Uint8Array}
   *
   */
  get bytes () {
    // @ts-ignore
    let bytes = this._bytes

    if (!bytes) {
      if (this.version === 0) {
        bytes = this.multihash
      } else if (this.version === 1) {
        const codec = multicodec.getCodeVarint(this.codec)
        bytes = uint8ArrayConcat([
          [1], codec, this.multihash
        ], 1 + codec.byteLength + this.multihash.byteLength)
      } else {
        throw new Error('unsupported version')
      }

      // Cache this Uint8Array so it doesn't have to be recreated
      Object.defineProperty(this, '_bytes', { value: bytes })
    }

    return bytes
  }

  /**
   * The prefix of the CID.
   *
   * @returns {Uint8Array}
   */
  get prefix () {
    const codec = multicodec.getCodeVarint(this.codec)
    const multihash = mh.prefix(this.multihash)
    const prefix = uint8ArrayConcat([
      [this.version], codec, multihash
    ], 1 + codec.byteLength + multihash.byteLength)

    return prefix
  }

  /**
   * The codec of the CID in its number form.
   *
   * @returns {CodecCode}
   */
  get code () {
    return codecs[this.codec]
  }

  /**
   * Convert to a CID of version `0`.
   *
   * @returns {CID}
   */
  toV0 () {
    if (this.codec !== 'dag-pb') {
      throw new Error('Cannot convert a non dag-pb CID to CIDv0')
    }

    const { name, length } = mh.decode(this.multihash)

    if (name !== 'sha2-256') {
      throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0')
    }

    if (length !== 32) {
      throw new Error('Cannot convert non 32 byte multihash CID to CIDv0')
    }

    return new CID(0, this.codec, this.multihash)
  }

  /**
   * Convert to a CID of version `1`.
   *
   * @returns {CID}
   */
  toV1 () {
    return new CID(1, this.codec, this.multihash, this.multibaseName)
  }

  /**
   * Encode the CID into a string.
   *
   * @param {BaseNameOrCode} [base=this.multibaseName] - Base encoding to use.
   * @returns {string}
   */
  toBaseEncodedString (base = this.multibaseName) {
    // @ts-ignore non enumerable cache property
    if (this.string && this.string.length !== 0 && base === this.multibaseName) {
      // @ts-ignore non enumerable cache property
      return this.string
    }
    let str
    if (this.version === 0) {
      if (base !== 'base58btc') {
        throw new Error('not supported with CIDv0, to support different bases, please migrate the instance do CIDv1, you can do that through cid.toV1()')
      }
      str = mh.toB58String(this.multihash)
    } else if (this.version === 1) {
      str = uint8ArrayToString(multibase.encode(base, this.bytes))
    } else {
      throw new Error('unsupported version')
    }
    if (base === this.multibaseName) {
      // cache the string value
      Object.defineProperty(this, 'string', { value: str })
    }
    return str
  }

  /**
   * CID(QmdfTbBqBPQ7VNxZEYEj14VmRuZBkqFbiwReogJgS1zR1n)
   *
   * @returns {string}
   */
  [Symbol.for('nodejs.util.inspect.custom')] () {
    return 'CID(' + this.toString() + ')'
  }

  /**
   * Encode the CID into a string.
   *
   * @param {BaseNameOrCode} [base=this.multibaseName] - Base encoding to use.
   * @returns {string}
   */
  toString (base) {
    return this.toBaseEncodedString(base)
  }

  /**
   * Serialize to a plain object.
   *
   * @returns {SerializedCID}
   */
  toJSON () {
    return {
      codec: this.codec,
      version: this.version,
      hash: this.multihash
    }
  }

  /**
   * Compare equality with another CID.
   *
   * @param {CID} other
   * @returns {boolean}
   */
  equals (other) {
    return this.codec === other.codec &&
      this.version === other.version &&
      uint8ArrayEquals(this.multihash, other.multihash)
  }

  /**
   * Test if the given input is a valid CID object.
   * Throws if it is not.
   *
   * @param {any} other - The other CID.
   * @returns {void}
   */
  static validateCID (other) {
    const errorMsg = CIDUtil.checkCIDComponents(other)
    if (errorMsg) {
      throw new Error(errorMsg)
    }
  }

  /**
   * Check if object is a CID instance
   *
   * @param {any} value
   * @returns {value is CID}
   */
  static isCID (value) {
    return value instanceof CID || Boolean(value && value[symbol])
  }
}

CID.codecs = codecs

module.exports = CID


/***/ }),

/***/ 92317:
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ 82951:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decodeCleartext = exports.prepareCleartext = exports.decodeIdentityCID = exports.encodeIdentityCID = exports.encodePayload = void 0;
const ipld_dag_cbor_1 = __importDefault(__webpack_require__(85402));
const cids_1 = __importDefault(__webpack_require__(55271));
const multihashes_1 = __importDefault(__webpack_require__(45671));
const u8a = __importStar(__webpack_require__(31605));
const varint_1 = __importDefault(__webpack_require__(80233));
const DAG_CBOR_CODE = 113;
const ID_MULTIHASH = 0;
const ENC_BLOCK_SIZE = 24;
function encodePayload(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        const block = new Uint8Array(ipld_dag_cbor_1.default.util.serialize(payload));
        return {
            cid: yield ipld_dag_cbor_1.default.util.cid(block),
            linkedBlock: block,
        };
    });
}
exports.encodePayload = encodePayload;
function pad(b, blockSize = ENC_BLOCK_SIZE) {
    const padLen = (blockSize - (b.length % blockSize)) % blockSize;
    return u8a.concat([b, new Uint8Array(padLen)]);
}
function unpadCIDBytes(b) {
    let offset = 0;
    let mhLen;
    for (let i = 0; i < 4; i++) {
        mhLen = varint_1.default.decode(b, offset);
        offset += varint_1.default.decode.bytes;
    }
    return new cids_1.default(b.slice(0, offset + mhLen));
}
function encodeIdentityCID(obj) {
    const block = ipld_dag_cbor_1.default.util.serialize(obj);
    const idMultiHash = multihashes_1.default.encode(block, ID_MULTIHASH);
    return new cids_1.default(1, DAG_CBOR_CODE, idMultiHash);
}
exports.encodeIdentityCID = encodeIdentityCID;
function decodeIdentityCID(cid) {
    cids_1.default.validateCID(cid);
    if (cid.code !== DAG_CBOR_CODE)
        throw new Error('CID codec must be dag-cbor');
    const { code, digest } = multihashes_1.default.decode(cid.multihash);
    if (code !== ID_MULTIHASH)
        throw new Error('CID must use identity multihash');
    return ipld_dag_cbor_1.default.util.deserialize(digest);
}
exports.decodeIdentityCID = decodeIdentityCID;
function prepareCleartext(cleartext, blockSize) {
    return pad(encodeIdentityCID(cleartext).bytes, blockSize);
}
exports.prepareCleartext = prepareCleartext;
function decodeCleartext(b) {
    return decodeIdentityCID(unpadCIDBytes(b));
}
exports.decodeCleartext = decodeCleartext;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56066:
/***/ ((module) => {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = depd

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  function deprecate (message) {
    // no-op in browser
  }

  deprecate._file = undefined
  deprecate._ignored = true
  deprecate._namespace = namespace
  deprecate._traced = false
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  return fn
}

/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }
}


/***/ }),

/***/ 30911:
/***/ ((module) => {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = depd

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  function deprecate (message) {
    // no-op in browser
  }

  deprecate._file = undefined
  deprecate._ignored = true
  deprecate._namespace = namespace
  deprecate._traced = false
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  return fn
}

/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }
}


/***/ }),

/***/ 82615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Resolver": () => (/* binding */ Resolver),
/* harmony export */   "inMemoryCache": () => (/* binding */ inMemoryCache),
/* harmony export */   "noCache": () => (/* binding */ noCache),
/* harmony export */   "parse": () => (/* binding */ parse),
/* harmony export */   "wrapLegacyResolver": () => (/* binding */ wrapLegacyResolver)
/* harmony export */ });
// Copyright 2018 Consensys AG
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

function inMemoryCache() {
  const cache = new Map();
  return function (parsed, resolve) {
    try {
      let _exit;

      function _temp2(_result) {
        if (_exit) return _result;
        const cached = cache.get(parsed.didUrl);
        return cached !== undefined ? cached : Promise.resolve(resolve()).then(function (result) {
          var _result$didResolution;

          if (((_result$didResolution = result.didResolutionMetadata) == null ? void 0 : _result$didResolution.error) !== 'notFound') {
            cache.set(parsed.didUrl, result);
          }

          return result;
        });
      }

      const _temp = function () {
        if (parsed.params && parsed.params['no-cache'] === 'true') {
          _exit = 1;
          return Promise.resolve(resolve());
        }
      }();

      return Promise.resolve(_temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
function noCache(parsed, resolve) {
  return resolve();
}
const PCT_ENCODED = '(?:%[0-9a-fA-F]{2})';
const ID_CHAR = `(?:[a-zA-Z0-9._-]|${PCT_ENCODED})`;
const METHOD = '([a-z0-9]+)';
const METHOD_ID = `((?:${ID_CHAR}*:)*(${ID_CHAR}+))`;
const PARAM_CHAR = '[a-zA-Z0-9_.:%-]';
const PARAM = `;${PARAM_CHAR}+=${PARAM_CHAR}*`;
const PARAMS = `((${PARAM})*)`;
const PATH = `(/[^#?]*)?`;
const QUERY = `([?][^#]*)?`;
const FRAGMENT = `(#.*)?`;
const DID_MATCHER = new RegExp(`^did:${METHOD}:${METHOD_ID}${PARAMS}${PATH}${QUERY}${FRAGMENT}$`);
function parse(didUrl) {
  if (didUrl === '' || !didUrl) return null;
  const sections = didUrl.match(DID_MATCHER);

  if (sections) {
    const parts = {
      did: `did:${sections[1]}:${sections[2]}`,
      method: sections[1],
      id: sections[2],
      didUrl
    };

    if (sections[4]) {
      const params = sections[4].slice(1).split(';');
      parts.params = {};

      for (const p of params) {
        const kv = p.split('=');
        parts.params[kv[0]] = kv[1];
      }
    }

    if (sections[6]) parts.path = sections[6];
    if (sections[7]) parts.query = sections[7].slice(1);
    if (sections[8]) parts.fragment = sections[8].slice(1);
    return parts;
  }

  return null;
}
const EMPTY_RESULT = {
  didResolutionMetadata: {},
  didDocument: null,
  didDocumentMetadata: {}
};
function wrapLegacyResolver(resolve) {
  return function (did, parsed, resolver) {
    try {
      return Promise.resolve(_catch(function () {
        return Promise.resolve(resolve(did, parsed, resolver)).then(function (doc) {
          return { ...EMPTY_RESULT,
            didResolutionMetadata: {
              contentType: 'application/did+ld+json'
            },
            didDocument: doc
          }; // eslint-disable-next-line @typescript-eslint/no-explicit-any
        });
      }, function (e) {
        return { ...EMPTY_RESULT,
          didResolutionMetadata: {
            error: 'notFound',
            message: e.toString() // This is not in spec, but may be helpful

          }
        };
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
class Resolver {
  constructor(registry = {}, options = {}) {
    this.registry = void 0;
    this.cache = void 0;
    this.registry = registry;
    this.cache = options.cache === true ? inMemoryCache() : options.cache || noCache;

    if (options.legacyResolvers) {
      Object.keys(options.legacyResolvers).map(methodName => {
        if (!this.registry[methodName]) {
          this.registry[methodName] = wrapLegacyResolver( // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          options.legacyResolvers[methodName]);
        }
      });
    }
  }

  resolve(didUrl, options = {}) {
    try {
      const _this = this;

      const parsed = parse(didUrl);

      if (parsed === null) {
        return Promise.resolve({ ...EMPTY_RESULT,
          didResolutionMetadata: {
            error: 'invalidDid'
          }
        });
      }

      const resolver = _this.registry[parsed.method];

      if (!resolver) {
        return Promise.resolve({ ...EMPTY_RESULT,
          didResolutionMetadata: {
            error: 'unsupportedDidMethod'
          }
        });
      }

      return Promise.resolve(_this.cache(parsed, () => resolver(parsed.did, parsed, _this, options)));
    } catch (e) {
      return Promise.reject(e);
    }
  }

}


//# sourceMappingURL=resolver.module.js.map


/***/ }),

/***/ 43046:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DID = void 0;
const did_resolver_1 = __webpack_require__(82615);
const did_jwt_1 = __webpack_require__(60108);
const dag_jose_utils_1 = __webpack_require__(82951);
const rpc_utils_1 = __webpack_require__(34034);
const utils_1 = __webpack_require__(84157);
function isResolver(resolver) {
    return 'registry' in resolver && 'cache' in resolver;
}
class DID {
    constructor({ provider, resolver = {}, resolverOptions } = {}) {
        if (provider != null) {
            this._client = new rpc_utils_1.RPCClient(provider);
        }
        this.setResolver(resolver, resolverOptions);
    }
    get authenticated() {
        return this._id != null;
    }
    get id() {
        if (this._id == null) {
            throw new Error('DID is not authenticated');
        }
        return this._id;
    }
    setProvider(provider) {
        if (this._client == null) {
            this._client = new rpc_utils_1.RPCClient(provider);
        }
        else if (this._client.connection !== provider) {
            throw new Error('A different provider is already set, create a new DID instance to use another provider');
        }
    }
    setResolver(resolver, resolverOptions) {
        this._resolver = isResolver(resolver) ? resolver : new did_resolver_1.Resolver(resolver, resolverOptions);
    }
    authenticate({ provider, paths = [], aud } = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider != null) {
                this.setProvider(provider);
            }
            if (this._client == null) {
                throw new Error('No provider available');
            }
            const nonce = utils_1.randomString();
            const jws = yield this._client.request('did_authenticate', {
                nonce,
                aud,
                paths,
            });
            const { kid } = yield this.verifyJWS(jws);
            const payload = utils_1.base64urlToJSON(jws.payload);
            if (!kid.includes(payload.did))
                throw new Error('Invalid authencation response, kid mismatch');
            if (payload.nonce !== nonce)
                throw new Error('Invalid authencation response, wrong nonce');
            if (payload.aud !== aud)
                throw new Error('Invalid authencation response, wrong aud');
            if (payload.exp < Date.now() / 1000)
                throw new Error('Invalid authencation response, expired');
            this._id = payload.did;
            return this._id;
        });
    }
    createJWS(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._client == null)
                throw new Error('No provider available');
            if (this._id == null)
                throw new Error('DID is not authenticated');
            const { jws } = yield this._client.request('did_createJWS', Object.assign(Object.assign({ did: this._id }, options), { payload }));
            return jws;
        });
    }
    createDagJWS(payload, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cid, linkedBlock } = yield dag_jose_utils_1.encodePayload(payload);
            const payloadCid = utils_1.encodeBase64Url(cid.bytes);
            Object.assign(options, { linkedBlock: utils_1.encodeBase64(linkedBlock) });
            const jws = yield this.createJWS(payloadCid, options);
            jws.link = cid;
            return { jws, linkedBlock };
        });
    }
    verifyJWS(jws, options = {}) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof jws !== 'string')
                jws = utils_1.fromDagJWS(jws);
            const kid = utils_1.base64urlToJSON(jws.split('.')[0]).kid;
            if (!kid)
                throw new Error('No "kid" found in jws');
            const didResolutionResult = yield this.resolve(kid);
            const timecheckEnabled = !options.disableTimecheck;
            if (timecheckEnabled) {
                const nextUpdate = (_a = didResolutionResult.didDocumentMetadata) === null || _a === void 0 ? void 0 : _a.nextUpdate;
                if (nextUpdate) {
                    const isEarlier = options.atTime && options.atTime < new Date(nextUpdate).valueOf();
                    const isLater = !isEarlier;
                    if (isLater) {
                        throw new Error(`invalid_jws: signature authored with a revoked DID version: ${kid}`);
                    }
                }
                const updated = (_b = didResolutionResult.didDocumentMetadata) === null || _b === void 0 ? void 0 : _b.updated;
                if (updated && options.atTime && options.atTime < new Date(updated).valueOf()) {
                    throw new Error(`invalid_jws: signature authored before creation of DID version: ${kid}`);
                }
            }
            const signerDid = (_c = didResolutionResult.didDocument) === null || _c === void 0 ? void 0 : _c.id;
            if (options.issuer && options.issuer !== signerDid) {
                const issuerUrl = utils_1.didWithTime(options.issuer, options.atTime);
                const issuerResolution = yield this.resolve(issuerUrl);
                const controllerProperty = (_d = issuerResolution.didDocument) === null || _d === void 0 ? void 0 : _d.controller;
                const controllers = utils_1.extractControllers(controllerProperty);
                const signerIsController = signerDid ? controllers.includes(signerDid) : false;
                if (!signerIsController) {
                    throw new Error(`invalid_jws: not a valid verificationMethod for issuer: ${kid}`);
                }
            }
            const publicKeys = ((_e = didResolutionResult.didDocument) === null || _e === void 0 ? void 0 : _e.verificationMethod) || [];
            did_jwt_1.verifyJWS(jws, publicKeys);
            let payload;
            try {
                payload = utils_1.base64urlToJSON(jws.split('.')[1]);
            }
            catch (e) {
            }
            return { kid, payload, didResolutionResult };
        });
    }
    createJWE(cleartext, recipients, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const encrypters = yield did_jwt_1.resolveX25519Encrypters(recipients, this._resolver);
            return did_jwt_1.createJWE(cleartext, encrypters, options.protectedHeader, options.aad);
        });
    }
    createDagJWE(cleartext, recipients, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createJWE(dag_jose_utils_1.prepareCleartext(cleartext), recipients, options);
        });
    }
    decryptJWE(jwe, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._client == null)
                throw new Error('No provider available');
            if (this._id == null)
                throw new Error('DID is not authenticated');
            const { cleartext } = yield this._client.request('did_decryptJWE', Object.assign(Object.assign({ did: this._id }, options), { jwe }));
            return utils_1.decodeBase64(cleartext);
        });
    }
    decryptDagJWE(jwe) {
        return __awaiter(this, void 0, void 0, function* () {
            const bytes = yield this.decryptJWE(jwe);
            return dag_jose_utils_1.decodeCleartext(bytes);
        });
    }
    resolve(didUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._resolver.resolve(didUrl);
            if (result.didResolutionMetadata.error) {
                const { error, message } = result.didResolutionMetadata;
                const maybeMessage = message ? `, ${message}` : '';
                throw new Error(`Failed to resolve ${didUrl}: ${error}${maybeMessage}`);
            }
            return result;
        });
    }
}
exports.DID = DID;
//# sourceMappingURL=did.js.map

/***/ }),

/***/ 76373:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(26889), exports);
__exportStar(__webpack_require__(43046), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 26889:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 84157:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extractControllers = exports.didWithTime = exports.fromDagJWS = exports.randomString = exports.base64urlToJSON = exports.decodeBase64 = exports.encodeBase64Url = exports.encodeBase64 = void 0;
const u8a = __importStar(__webpack_require__(31605));
const random_1 = __webpack_require__(1651);
const B64 = 'base64pad';
const B64_URL = 'base64url';
function encodeBase64(bytes) {
    return u8a.toString(bytes, B64);
}
exports.encodeBase64 = encodeBase64;
function encodeBase64Url(bytes) {
    return u8a.toString(bytes, B64_URL);
}
exports.encodeBase64Url = encodeBase64Url;
function decodeBase64(s) {
    return u8a.fromString(s, B64);
}
exports.decodeBase64 = decodeBase64;
function base64urlToJSON(s) {
    return JSON.parse(u8a.toString(u8a.fromString(s, B64_URL)));
}
exports.base64urlToJSON = base64urlToJSON;
function randomString() {
    return u8a.toString(random_1.randomBytes(16), 'base64');
}
exports.randomString = randomString;
function fromDagJWS(jws) {
    if (jws.signatures.length > 1)
        throw new Error('Cant convert to compact jws');
    return `${jws.signatures[0].protected}.${jws.payload}.${jws.signatures[0].signature}`;
}
exports.fromDagJWS = fromDagJWS;
function didWithTime(did, atTime) {
    if (atTime) {
        const versionTime = new Date(atTime).toISOString().split('.')[0] + 'Z';
        return `${did}?versionTime=${versionTime}`;
    }
    else {
        return did;
    }
}
exports.didWithTime = didWithTime;
function extractControllers(controllerProperty) {
    if (controllerProperty) {
        if (Array.isArray(controllerProperty)) {
            return controllerProperty;
        }
        else {
            return [controllerProperty];
        }
    }
    else {
        return [];
    }
}
exports.extractControllers = extractControllers;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 70963:
/***/ ((module) => {

"use strict";


/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */
function assign(obj, props) {
    for (const key in props) {
        Object.defineProperty(obj, key, {
            value: props[key],
            enumerable: true,
            configurable: true,
        });
    }

    return obj;
}

/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */
function createError(err, code, props) {
    if (!err || typeof err === 'string') {
        throw new TypeError('Please pass an Error to err-code');
    }

    if (!props) {
        props = {};
    }

    if (typeof code === 'object') {
        props = code;
        code = '';
    }

    if (code) {
        props.code = code;
    }

    try {
        return assign(err, props);
    } catch (_) {
        props.message = err.message;
        props.stack = err.stack;

        const ErrClass = function () {};

        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));

        // @ts-ignore
        const output = assign(new ErrClass(), props);

        return output;
    }
}

module.exports = createError;


/***/ }),

/***/ 13520:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(50015);

/***/ }),

/***/ 50015:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(57281);

var capability = __webpack_require__(84670);

var polyfill;
if (capability("Error.captureStackTrace"))
    polyfill = __webpack_require__(95782);
else if (capability("Error.prototype.stack"))
    polyfill = __webpack_require__(2695);
else
    polyfill = __webpack_require__(73448);

module.exports = polyfill();

/***/ }),

/***/ 29385:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Class = (__webpack_require__(43329).Class),
    abstractMethod = (__webpack_require__(43329).abstractMethod);

var Frame = Class(Object, {
    prototype: {
        init: Class.prototype.merge,
        frameString: undefined,
        toString: function () {
            return this.frameString;
        },
        functionValue: undefined,
        getThis: abstractMethod,
        getTypeName: abstractMethod,
        getFunction: function () {
            return this.functionValue;
        },
        getFunctionName: abstractMethod,
        getMethodName: abstractMethod,
        getFileName: abstractMethod,
        getLineNumber: abstractMethod,
        getColumnNumber: abstractMethod,
        getEvalOrigin: abstractMethod,
        isTopLevel: abstractMethod,
        isEval: abstractMethod,
        isNative: abstractMethod,
        isConstructor: abstractMethod
    }
});

module.exports = Frame;

/***/ }),

/***/ 49770:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Class = (__webpack_require__(43329).Class),
    Frame = __webpack_require__(29385),
    cache = (__webpack_require__(50309).cache);

var FrameStringParser = Class(Object, {
    prototype: {
        stackParser: null,
        frameParser: null,
        locationParsers: null,
        constructor: function (options) {
            Class.prototype.merge.call(this, options);
        },
        getFrames: function (frameStrings, functionValues) {
            var frames = [];
            for (var index = 0, length = frameStrings.length; index < length; ++index)
                frames[index] = this.getFrame(frameStrings[index], functionValues[index]);
            return frames;
        },
        getFrame: function (frameString, functionValue) {
            var config = {
                frameString: frameString,
                functionValue: functionValue
            };
            return new Frame(config);
        }
    }
});

module.exports = {
    getClass: cache(function () {
        return FrameStringParser;
    }),
    getInstance: cache(function () {
        var FrameStringParser = this.getClass();
        var instance = new FrameStringParser();
        return instance;
    })
};

/***/ }),

/***/ 13040:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Class = (__webpack_require__(43329).Class),
    abstractMethod = (__webpack_require__(43329).abstractMethod),
    eachCombination = (__webpack_require__(50309).eachCombination),
    cache = (__webpack_require__(50309).cache),
    capability = __webpack_require__(84670);

var AbstractFrameStringSource = Class(Object, {
    prototype: {
        captureFrameStrings: function (frameShifts) {
            var error = this.createError();
            frameShifts.unshift(this.captureFrameStrings);
            frameShifts.unshift(this.createError);
            var capturedFrameStrings = this.getFrameStrings(error);

            var frameStrings = capturedFrameStrings.slice(frameShifts.length),
                functionValues = [];

            if (capability("arguments.callee.caller")) {
                var capturedFunctionValues = [
                    this.createError,
                    this.captureFrameStrings
                ];
                try {
                    var aCaller = arguments.callee;
                    while (aCaller = aCaller.caller)
                        capturedFunctionValues.push(aCaller);
                }
                catch (useStrictError) {
                }
                functionValues = capturedFunctionValues.slice(frameShifts.length);
            }
            return {
                frameStrings: frameStrings,
                functionValues: functionValues
            };
        },
        getFrameStrings: function (error) {
            var message = error.message || "";
            var name = error.name || "";
            var stackString = this.getStackString(error);
            if (stackString === undefined)
                return;
            var stackStringChunks = stackString.split("\n");
            var fromPosition = 0;
            var toPosition = stackStringChunks.length;
            if (this.hasHeader)
                fromPosition += name.split("\n").length + message.split("\n").length - 1;
            if (this.hasFooter)
                toPosition -= 1;
            return stackStringChunks.slice(fromPosition, toPosition);
        },
        createError: abstractMethod,
        getStackString: abstractMethod,
        hasHeader: undefined,
        hasFooter: undefined
    }
});

var FrameStringSourceCalibrator = Class(Object, {
    prototype: {
        calibrateClass: function (FrameStringSource) {
            return this.calibrateMethods(FrameStringSource) && this.calibrateEnvelope(FrameStringSource);
        },
        calibrateMethods: function (FrameStringSource) {
            try {
                eachCombination([[
                    function (message) {
                        return new Error(message);
                    },
                    function (message) {
                        try {
                            throw new Error(message);
                        }
                        catch (error) {
                            return error;
                        }
                    }
                ], [
                    function (error) {
                        return error.stack;
                    },
                    function (error) {
                        return error.stacktrace;
                    }
                ]], function (createError, getStackString) {
                    if (getStackString(createError()))
                        throw {
                            getStackString: getStackString,
                            createError: createError
                        };
                });
            } catch (workingImplementation) {
                Class.merge.call(FrameStringSource, {
                    prototype: workingImplementation
                });
                return true;
            }
            return false;
        },
        calibrateEnvelope: function (FrameStringSource) {
            var getStackString = FrameStringSource.prototype.getStackString;
            var createError = FrameStringSource.prototype.createError;
            var calibratorStackString = getStackString(createError("marker"));
            var calibratorFrameStrings = calibratorStackString.split("\n");
            Class.merge.call(FrameStringSource, {
                prototype: {
                    hasHeader: /marker/.test(calibratorFrameStrings[0]),
                    hasFooter: calibratorFrameStrings[calibratorFrameStrings.length - 1] === ""
                }
            });
            return true;
        }
    }
});


module.exports = {
    getClass: cache(function () {
        var FrameStringSource;
        if (FrameStringSource)
            return FrameStringSource;
        FrameStringSource = Class(AbstractFrameStringSource, {});
        var calibrator = new FrameStringSourceCalibrator();
        if (!calibrator.calibrateClass(FrameStringSource))
            throw new Error("Cannot read Error.prototype.stack in this environment.");
        return FrameStringSource;
    }),
    getInstance: cache(function () {
        var FrameStringSource = this.getClass();
        var instance = new FrameStringSource();
        return instance;
    })
};

/***/ }),

/***/ 2695:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var FrameStringSource = __webpack_require__(13040),
    FrameStringParser = __webpack_require__(49770),
    cache = (__webpack_require__(50309).cache),
    prepareStackTrace = __webpack_require__(40560);

module.exports = function () {

    Error.captureStackTrace = function captureStackTrace(throwable, terminator) {
        var warnings;
        var frameShifts = [
            captureStackTrace
        ];
        if (terminator) {
            // additional frames can come here if arguments.callee.caller is supported
            // otherwise it is hard to identify the terminator
            frameShifts.push(terminator);
        }
        var captured = FrameStringSource.getInstance().captureFrameStrings(frameShifts);
        Object.defineProperties(throwable, {
            stack: {
                configurable: true,
                get: cache(function () {
                    var frames = FrameStringParser.getInstance().getFrames(captured.frameStrings, captured.functionValues);
                    return (Error.prepareStackTrace || prepareStackTrace)(throwable, frames, warnings);
                })
            },
            cachedStack: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: true
            }
        });
    };

    Error.getStackTrace = function (throwable) {
        if (throwable.cachedStack)
            return throwable.stack;
        var frameStrings = FrameStringSource.getInstance().getFrameStrings(throwable),
            frames = [],
            warnings;
        if (frameStrings)
            frames = FrameStringParser.getInstance().getFrames(frameStrings, []);
        else
            warnings = [
                "The stack is not readable by unthrown errors in this environment."
            ];
        var stack = (Error.prepareStackTrace || prepareStackTrace)(throwable, frames, warnings);
        if (frameStrings)
            try {
                Object.defineProperties(throwable, {
                    stack: {
                        configurable: true,
                        writable: true,
                        enumerable: false,
                        value: stack
                    },
                    cachedStack: {
                        configurable: true,
                        writable: true,
                        enumerable: false,
                        value: true
                    }
                });
            } catch (nonConfigurableError) {
            }
        return stack;
    };

    return {
        prepareStackTrace: prepareStackTrace
    };
};

/***/ }),

/***/ 40560:
/***/ ((module) => {

var prepareStackTrace = function (throwable, frames, warnings) {
    var string = "";
    string += throwable.name || "Error";
    string += ": " + (throwable.message || "");
    if (warnings instanceof Array)
        for (var warningIndex in warnings) {
            var warning = warnings[warningIndex];
            string += "\n   # " + warning;
        }
    for (var frameIndex in frames) {
        var frame = frames[frameIndex];
        string += "\n   at " + frame.toString();
    }
    return string;
};

module.exports = prepareStackTrace;

/***/ }),

/***/ 73448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cache = (__webpack_require__(50309).cache),
    prepareStackTrace = __webpack_require__(40560);

module.exports = function () {

    Error.captureStackTrace = function (throwable, terminator) {
        Object.defineProperties(throwable, {
            stack: {
                configurable: true,
                get: cache(function () {
                    return (Error.prepareStackTrace || prepareStackTrace)(throwable, []);
                })
            },
            cachedStack: {
                configurable: true,
                writable: true,
                enumerable: false,
                value: true
            }
        });
    };

    Error.getStackTrace = function (throwable) {
        if (throwable.cachedStack)
            return throwable.stack;
        var stack = (Error.prepareStackTrace || prepareStackTrace)(throwable, []);
        try {
            Object.defineProperties(throwable, {
                stack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: stack
                },
                cachedStack: {
                    configurable: true,
                    writable: true,
                    enumerable: false,
                    value: true
                }
            });
        } catch (nonConfigurableError) {
        }
        return stack;
    };

    return {
        prepareStackTrace: prepareStackTrace
    };
};

/***/ }),

/***/ 95782:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var prepareStackTrace = __webpack_require__(40560);

module.exports = function () {
    Error.getStackTrace = function (throwable) {
        return throwable.stack;
    };

    return {
        prepareStackTrace: prepareStackTrace
    };
};

/***/ }),

/***/ 87239:
/***/ ((module) => {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ 75687:
/***/ ((module) => {

"use strict";


module.exports = function (data, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

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
    return (function stringify (node) {
        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        if (node === undefined) return;
        if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
        if (typeof node !== 'object') return JSON.stringify(node);

        var i, out;
        if (Array.isArray(node)) {
            out = '[';
            for (i = 0; i < node.length; i++) {
                if (i) out += ',';
                out += stringify(node[i]) || 'null';
            }
            return out + ']';
        }

        if (node === null) return 'null';

        if (seen.indexOf(node) !== -1) {
            if (cycles) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
        }

        var seenIndex = seen.push(node) - 1;
        var keys = Object.keys(node).sort(cmp && cmp(node));
        out = '';
        for (i = 0; i < keys.length; i++) {
            var key = keys[i];
            var value = stringify(node[key]);

            if (!value) continue;
            if (out) out += ',';
            out += JSON.stringify(key) + ':' + value;
        }
        seen.splice(seenIndex, 1);
        return '{' + out + '}';
    })(data);
};


/***/ }),

/***/ 22475:
/***/ ((module) => {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),

/***/ 47089:
/***/ ((module) => {

module.exports = flatten
flatten.flatten = flatten
flatten.unflatten = unflatten

function isBuffer (obj) {
  return obj &&
    obj.constructor &&
    (typeof obj.constructor.isBuffer === 'function') &&
    obj.constructor.isBuffer(obj)
}

function keyIdentity (key) {
  return key
}

function flatten (target, opts) {
  opts = opts || {}

  const delimiter = opts.delimiter || '.'
  const maxDepth = opts.maxDepth
  const transformKey = opts.transformKey || keyIdentity
  const output = {}

  function step (object, prev, currentDepth) {
    currentDepth = currentDepth || 1
    Object.keys(object).forEach(function (key) {
      const value = object[key]
      const isarray = opts.safe && Array.isArray(value)
      const type = Object.prototype.toString.call(value)
      const isbuffer = isBuffer(value)
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      )

      const newKey = prev
        ? prev + delimiter + transformKey(key)
        : transformKey(key)

      if (!isarray && !isbuffer && isobject && Object.keys(value).length &&
        (!opts.maxDepth || currentDepth < maxDepth)) {
        return step(value, newKey, currentDepth + 1)
      }

      output[newKey] = value
    })
  }

  step(target)

  return output
}

function unflatten (target, opts) {
  opts = opts || {}

  const delimiter = opts.delimiter || '.'
  const overwrite = opts.overwrite || false
  const transformKey = opts.transformKey || keyIdentity
  const result = {}

  const isbuffer = isBuffer(target)
  if (isbuffer || Object.prototype.toString.call(target) !== '[object Object]') {
    return target
  }

  // safely ensure that the key is
  // an integer.
  function getkey (key) {
    const parsedKey = Number(key)

    return (
      isNaN(parsedKey) ||
      key.indexOf('.') !== -1 ||
      opts.object
    ) ? key
      : parsedKey
  }

  function addKeys (keyPrefix, recipient, target) {
    return Object.keys(target).reduce(function (result, key) {
      result[keyPrefix + delimiter + key] = target[key]

      return result
    }, recipient)
  }

  function isEmpty (val) {
    const type = Object.prototype.toString.call(val)
    const isArray = type === '[object Array]'
    const isObject = type === '[object Object]'

    if (!val) {
      return true
    } else if (isArray) {
      return !val.length
    } else if (isObject) {
      return !Object.keys(val).length
    }
  }

  target = Object.keys(target).reduce(function (result, key) {
    const type = Object.prototype.toString.call(target[key])
    const isObject = (type === '[object Object]' || type === '[object Array]')
    if (!isObject || isEmpty(target[key])) {
      result[key] = target[key]
      return result
    } else {
      return addKeys(
        key,
        result,
        flatten(target[key], opts)
      )
    }
  }, {})

  Object.keys(target).forEach(function (key) {
    const split = key.split(delimiter).map(transformKey)
    let key1 = getkey(split.shift())
    let key2 = getkey(split[0])
    let recipient = result

    while (key2 !== undefined) {
      if (key1 === '__proto__') {
        return
      }

      const type = Object.prototype.toString.call(recipient[key1])
      const isobject = (
        type === '[object Object]' ||
        type === '[object Array]'
      )

      // do not write over falsey, non-undefined values if overwrite is false
      if (!overwrite && !isobject && typeof recipient[key1] !== 'undefined') {
        return
      }

      if ((overwrite && !isobject) || (!overwrite && recipient[key1] == null)) {
        recipient[key1] = (
          typeof key2 === 'number' &&
          !opts.object ? [] : {}
        )
      }

      recipient = recipient[key1]
      if (split.length > 0) {
        key1 = getkey(split.shift())
        key2 = getkey(split[0])
      }
    }

    // unflatten again for 'messy objects'
    recipient[key1] = unflatten(target[key], opts)
  })

  return result
}


/***/ }),

/***/ 5998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var deprecate = __webpack_require__(56066)('http-errors')
var setPrototypeOf = __webpack_require__(28685)
var statuses = __webpack_require__(37227)
var inherits = __webpack_require__(67483)
var toIdentifier = __webpack_require__(54844)

/**
 * Module exports.
 * @public
 */

module.exports = createError
module.exports.HttpError = createHttpErrorConstructor()
module.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError)

// Populate exports for all constructors
populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)

/**
 * Get the code class of a status code.
 * @private
 */

function codeClass (status) {
  return Number(String(status).charAt(0) + '00')
}

/**
 * Create a new HTTP Error.
 *
 * @returns {Error}
 * @public
 */

function createError () {
  // so much arity going on ~_~
  var err
  var msg
  var status = 500
  var props = {}
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (arg instanceof Error) {
      err = arg
      status = err.status || err.statusCode || status
      continue
    }
    switch (typeof arg) {
      case 'string':
        msg = arg
        break
      case 'number':
        status = arg
        if (i !== 0) {
          deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)')
        }
        break
      case 'object':
        props = arg
        break
    }
  }

  if (typeof status === 'number' && (status < 400 || status >= 600)) {
    deprecate('non-error status code; use only 4xx or 5xx status codes')
  }

  if (typeof status !== 'number' ||
    (!statuses[status] && (status < 400 || status >= 600))) {
    status = 500
  }

  // constructor
  var HttpError = createError[status] || createError[codeClass(status)]

  if (!err) {
    // create error
    err = HttpError
      ? new HttpError(msg)
      : new Error(msg || statuses[status])
    Error.captureStackTrace(err, createError)
  }

  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
    // add properties to generic error
    err.expose = status < 500
    err.status = err.statusCode = status
  }

  for (var key in props) {
    if (key !== 'status' && key !== 'statusCode') {
      err[key] = props[key]
    }
  }

  return err
}

/**
 * Create HTTP error abstract base class.
 * @private
 */

function createHttpErrorConstructor () {
  function HttpError () {
    throw new TypeError('cannot construct abstract class')
  }

  inherits(HttpError, Error)

  return HttpError
}

/**
 * Create a constructor for a client error.
 * @private
 */

function createClientErrorConstructor (HttpError, name, code) {
  var className = toClassName(name)

  function ClientError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ClientError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ClientError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ClientError, HttpError)
  nameFunc(ClientError, className)

  ClientError.prototype.status = code
  ClientError.prototype.statusCode = code
  ClientError.prototype.expose = true

  return ClientError
}

/**
 * Create function to test is a value is a HttpError.
 * @private
 */

function createIsHttpErrorFunction (HttpError) {
  return function isHttpError (val) {
    if (!val || typeof val !== 'object') {
      return false
    }

    if (val instanceof HttpError) {
      return true
    }

    return val instanceof Error &&
      typeof val.expose === 'boolean' &&
      typeof val.statusCode === 'number' && val.status === val.statusCode
  }
}

/**
 * Create a constructor for a server error.
 * @private
 */

function createServerErrorConstructor (HttpError, name, code) {
  var className = toClassName(name)

  function ServerError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ServerError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ServerError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ServerError, HttpError)
  nameFunc(ServerError, className)

  ServerError.prototype.status = code
  ServerError.prototype.statusCode = code
  ServerError.prototype.expose = false

  return ServerError
}

/**
 * Set the name of a function, if possible.
 * @private
 */

function nameFunc (func, name) {
  var desc = Object.getOwnPropertyDescriptor(func, 'name')

  if (desc && desc.configurable) {
    desc.value = name
    Object.defineProperty(func, 'name', desc)
  }
}

/**
 * Populate the exports object with constructors for every error class.
 * @private
 */

function populateConstructorExports (exports, codes, HttpError) {
  codes.forEach(function forEachCode (code) {
    var CodeError
    var name = toIdentifier(statuses[code])

    switch (codeClass(code)) {
      case 400:
        CodeError = createClientErrorConstructor(HttpError, name, code)
        break
      case 500:
        CodeError = createServerErrorConstructor(HttpError, name, code)
        break
    }

    if (CodeError) {
      // export the constructor
      exports[code] = CodeError
      exports[name] = CodeError
    }
  })

  // backwards-compatibility
  exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
    '"I\'mateapot"; use "ImATeapot" instead')
}

/**
 * Get a class name from a name identifier.
 * @private
 */

function toClassName (name) {
  return name.substr(-5) !== 'Error'
    ? name + 'Error'
    : name
}


/***/ }),

/***/ 85402:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.util = __webpack_require__(75361)
exports.resolver = __webpack_require__(19670)
exports.codec = exports.util.codec
exports.defaultHashAlg = exports.util.defaultHashAlg


/***/ }),

/***/ 19670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const CID = __webpack_require__(55271)
const util = __webpack_require__(75361)

/**
 * Resolves a path within a CBOR block.
 *
 * Returns the value or a link and the partial mising path. This way the
 * IPLD Resolver can fetch the link and continue to resolve.
 *
 * @param {Uint8Array} binaryBlob - Binary representation of a CBOR block
 * @param {string} [path='/'] - Path that should be resolved
 */
exports.resolve = (binaryBlob, path) => {
  let node = util.deserialize(binaryBlob)

  const parts = path.split('/').filter(Boolean)
  while (parts.length) {
    const key = parts.shift()
    if (node[key] === undefined) {
      throw new Error(`Object has no property '${key}'`)
    }

    node = node[key]
    if (CID.isCID(node)) {
      return {
        value: node,
        remainderPath: parts.join('/')
      }
    }
  }

  return {
    value: node,
    remainderPath: ''
  }
}

const traverse = function * (node, path) {
  // Traverse only objects and arrays
  if (node instanceof Uint8Array || CID.isCID(node) || typeof node === 'string' ||
      node === null) {
    return
  }
  for (const item of Object.keys(node)) {
    const nextpath = path === undefined ? item : path + '/' + item
    yield nextpath
    yield * traverse(node[item], nextpath)
  }
}

/**
 * Return all available paths of a block.
 *
 * @generator
 * @param {Uint8Array} binaryBlob - Binary representation of a CBOR block
 * @yields {string} - A single path
 */
exports.tree = function * (binaryBlob) {
  const node = util.deserialize(binaryBlob)

  yield * traverse(node)
}


/***/ }),

/***/ 75361:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const cbor = __webpack_require__(63492)
const multicodec = __webpack_require__(83214)
const multihashing = __webpack_require__(77998)
const CID = __webpack_require__(55271)
const isCircular = __webpack_require__(59918)
const uint8ArrayConcat = __webpack_require__(36713)
const uint8ArrayFromString = __webpack_require__(39528)

// https://github.com/ipfs/go-ipfs/issues/3570#issuecomment-273931692
const CID_CBOR_TAG = 42

function tagCID (cid) {
  if (typeof cid === 'string') {
    cid = new CID(cid).bytes
  } else if (CID.isCID(cid)) {
    cid = cid.bytes
  }

  return new cbor.Tagged(CID_CBOR_TAG, uint8ArrayConcat([
    uint8ArrayFromString('00', 'base16'), // thanks jdag
    cid
  ], 1 + cid.length))
}

function replaceCIDbyTAG (dagNode) {
  let circular
  try {
    circular = isCircular(dagNode)
  } catch (e) {
    circular = false
  }
  if (circular) {
    throw new Error('The object passed has circular references')
  }

  function transform (obj) {
    if (!obj || obj instanceof Uint8Array || typeof obj === 'string') {
      return obj
    }

    if (Array.isArray(obj)) {
      return obj.map(transform)
    }

    if (CID.isCID(obj)) {
      return tagCID(obj)
    }

    const keys = Object.keys(obj)

    if (keys.length > 0) {
      // Recursive transform
      const out = {}
      keys.forEach((key) => {
        if (typeof obj[key] === 'object') {
          out[key] = transform(obj[key])
        } else {
          out[key] = obj[key]
        }
      })
      return out
    } else {
      return obj
    }
  }

  return transform(dagNode)
}

const codec = multicodec.DAG_CBOR
const defaultHashAlg = multicodec.SHA2_256

const defaultTags = {
  [CID_CBOR_TAG]: (val) => {
    // remove that 0
    val = val.slice(1)
    return new CID(val)
  }
}
const defaultSize = 64 * 1024 // current decoder heap size, 64 Kb
let currentSize = defaultSize
const defaultMaxSize = 64 * 1024 * 1024 // max heap size when auto-growing, 64 Mb
let maxSize = defaultMaxSize
let decoder = null

/**
 * Configure the underlying CBOR decoder.
 *
 * @param {Object} [options] - The options the decoder takes. The decoder will reset to the defaul values if no options are given.
 * @param {number} [options.size=65536] - The current heap size used in CBOR parsing, this may grow automatically as larger blocks are encountered up to `maxSize`
 * @param {number} [options.maxSize=67108864] - The maximum size the CBOR parsing heap is allowed to grow to before `dagCBOR.util.deserialize()` returns an error
 * @param {Object} [options.tags] - An object whose keys are CBOR tag numbers and values are transform functions that accept a `value` and return a decoded representation of that `value`
 */
function configureDecoder (options) {
  let tags = defaultTags

  if (options) {
    if (typeof options.size === 'number') {
      currentSize = options.size
    }
    if (typeof options.maxSize === 'number') {
      maxSize = options.maxSize
    }
    if (options.tags) {
      tags = Object.assign({}, defaultTags, options && options.tags)
    }
  } else {
    // no options, reset to defaults
    currentSize = defaultSize
    maxSize = defaultMaxSize
  }

  const decoderOptions = {
    tags,
    size: currentSize
  }

  decoder = new cbor.Decoder(decoderOptions)
  // borc edits opts.size in-place so we can capture _actual_ size
  currentSize = decoderOptions.size
}

configureDecoder() // Setup default cbor.Decoder

/**
 * Serialize internal representation into a binary CBOR block.
 *
 * @param {Object} node - Internal representation of a CBOR block
 * @returns {Uint8Array} - The encoded binary representation
 */
function serialize (node) {
  const nodeTagged = replaceCIDbyTAG(node)
  const serialized = cbor.encode(nodeTagged)

  return serialized
}

/**
 * Deserialize CBOR block into the internal representation.
 *
 * @param {Uint8Array} data - Binary representation of a CBOR block
 * @returns {Object} - An object that conforms to the IPLD Data Model
 */
function deserialize (data) {
  if (data.length > currentSize && data.length <= maxSize) {
    configureDecoder({ size: data.length })
  }

  if (data.length > currentSize) {
    throw new Error('Data is too large to deserialize with current decoder')
  }

  // borc will decode back-to-back objects into an implicit top-level array, we
  // strictly want to only see a single explicit top-level object
  const all = decoder.decodeAll(data)
  if (all.length !== 1) {
    throw new Error('Extraneous CBOR data found beyond initial top-level object')
  }

  return all[0]
}

/**
 * Calculate the CID of the binary blob.
 *
 * @param {Object} binaryBlob - Encoded IPLD Node
 * @param {Object} [userOptions] - Options to create the CID
 * @param {number} [userOptions.cidVersion=1] - CID version number
 * @param {string} [userOptions.hashAlg] - Defaults to the defaultHashAlg of the format
 * @returns {Promise.<CID>}
 */
async function cid (binaryBlob, userOptions) {
  const defaultOptions = { cidVersion: 1, hashAlg: defaultHashAlg }
  const options = Object.assign(defaultOptions, userOptions)

  const multihash = await multihashing(binaryBlob, options.hashAlg)
  const codecName = multicodec.getNameFromCode(codec)
  const cid = new CID(options.cidVersion, codecName, multihash)

  return cid
}

module.exports = {
  codec,
  defaultHashAlg,
  configureDecoder,
  serialize,
  deserialize,
  cid
}


/***/ }),

/***/ 59918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Node = __webpack_require__(94374)

module.exports = isCircular

/**
 * checks whether the object is circular
 * @param  {object}  obj - object to check circularity for
 * @return {Boolean} true if obj is circular, false if it is not
 */
function isCircular (obj) {
  if (!(obj instanceof Object)) {
    throw new TypeError('"obj" must be an object (or inherit from it)')
  }
  return _isCircular(obj)
}

/**
 * @private
 * checks whether the object is circular
 * @param  {object}  obj - object to check circularity for
 * @param  {Node}    parentList - linked-list that contains all the object's parents
 * @return {Boolean} true if obj is circular, false if it is not
 */
function _isCircular (obj, parentList) {
  parentList = new Node(obj, parentList)

  // breadth-first search for circular object
  for (var key in obj) {
    var val = obj[key]
    if (val instanceof Object) {
      if (parentList.contains(val) || _isCircular(val, parentList)) {
        return true
      }
    }
  }

  return false
}


/***/ }),

/***/ 94374:
/***/ ((module) => {

module.exports = Node

/**
 * a linked-list node
 * @class
 * @param {any} value - node's value
 * @param {Node} next - next node
 */
function Node (value, next) {
  this.value = value
  this.next = next
}

/**
 * checks if this node or any of its children has the value
 * @param {any} value - value to check if linked-list contains
 * @return {boolean} true if the list contains the value; false if not
 */
Node.prototype.contains = function (value) {
  var cursor = this

  while (cursor) {
    if (cursor.value === value) return true
    cursor = cursor.next
  }

  return false
}


/***/ }),

/***/ 41238:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
    URLWithLegacySupport,
    format,
    URLSearchParams,
    defaultBase
} = __webpack_require__(76747);
const relative = __webpack_require__(12458);

module.exports = {
    URL: URLWithLegacySupport,
    URLSearchParams,
    format,
    relative,
    defaultBase
};


/***/ }),

/***/ 12458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { URLWithLegacySupport, format } = __webpack_require__(76747);

module.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {
    let protocol = location.protocol ?
        location.protocol.replace(':', '') :
        'http';

    // Check protocol map
    protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':';
    let urlParsed;

    try {
        urlParsed = new URLWithLegacySupport(url);
    } catch (err) {
        urlParsed = {};
    }

    const base = Object.assign({}, location, {
        protocol: protocol || urlParsed.protocol,
        host: location.host || urlParsed.host
    });

    return new URLWithLegacySupport(url, format(base)).toString();
};


/***/ }),

/***/ 76747:
/***/ ((module) => {

"use strict";


const defaultBase = self.location ?
    self.location.protocol + '//' + self.location.host :
    '';
const URL = self.URL;

class URLWithLegacySupport {
    constructor(url = '', base = defaultBase) {
        this.super = new URL(url, base);
        this.path = this.pathname + this.search;
        this.auth =
            this.username && this.password ?
                this.username + ':' + this.password :
                null;

        this.query =
            this.search && this.search.startsWith('?') ?
                this.search.slice(1) :
                null;
    }

    get hash() {
        return this.super.hash;
    }
    get host() {
        return this.super.host;
    }
    get hostname() {
        return this.super.hostname;
    }
    get href() {
        return this.super.href;
    }
    get origin() {
        return this.super.origin;
    }
    get password() {
        return this.super.password;
    }
    get pathname() {
        return this.super.pathname;
    }
    get port() {
        return this.super.port;
    }
    get protocol() {
        return this.super.protocol;
    }
    get search() {
        return this.super.search;
    }
    get searchParams() {
        return this.super.searchParams;
    }
    get username() {
        return this.super.username;
    }

    set hash(hash) {
        this.super.hash = hash;
    }
    set host(host) {
        this.super.host = host;
    }
    set hostname(hostname) {
        this.super.hostname = hostname;
    }
    set href(href) {
        this.super.href = href;
    }
    set origin(origin) {
        this.super.origin = origin;
    }
    set password(password) {
        this.super.password = password;
    }
    set pathname(pathname) {
        this.super.pathname = pathname;
    }
    set port(port) {
        this.super.port = port;
    }
    set protocol(protocol) {
        this.super.protocol = protocol;
    }
    set search(search) {
        this.super.search = search;
    }
    set searchParams(searchParams) {
        this.super.searchParams = searchParams;
    }
    set username(username) {
        this.super.username = username;
    }

    createObjectURL(o) {
        return this.super.createObjectURL(o);
    }
    revokeObjectURL(o) {
        this.super.revokeObjectURL(o);
    }
    toJSON() {
        return this.super.toJSON();
    }
    toString() {
        return this.super.toString();
    }
    format() {
        return this.toString();
    }
}

function format(obj) {
    if (typeof obj === 'string') {
        const url = new URL(obj);

        return url.toString();
    }

    if (!(obj instanceof URL)) {
        const userPass =
            obj.username && obj.password ?
                `${obj.username}:${obj.password}@` :
                '';
        const auth = obj.auth ? obj.auth + '@' : '';
        const port = obj.port ? ':' + obj.port : '';
        const protocol = obj.protocol ? obj.protocol + '//' : '';
        const host = obj.host || '';
        const hostname = obj.hostname || '';
        const search = obj.search || (obj.query ? '?' + obj.query : '');
        const hash = obj.hash || '';
        const pathname = obj.pathname || '';
        const path = obj.path || pathname + search;

        return `${protocol}${userPass || auth}${host ||
            hostname + port}${path}${hash}`;
    }
}

module.exports = {
    URLWithLegacySupport,
    URLSearchParams: self.URLSearchParams,
    defaultBase,
    format
};


/***/ }),

/***/ 23356:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_SHA256_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = __webpack_require__.g;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && "object" === 'object' && module.exports;
  var AMD =  true && __webpack_require__.amdO;
  var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
  ];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  var createOutputMethod = function (outputType, is224) {
    return function (message) {
      return new Sha256(is224, true).update(message)[outputType]();
    };
  };

  var createMethod = function (is224) {
    var method = createOutputMethod('hex', is224);
    if (NODE_JS) {
      method = nodeWrap(method, is224);
    }
    method.create = function () {
      return new Sha256(is224);
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type, is224);
    }
    return method;
  };

  var nodeWrap = function (method, is224) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var algorithm = is224 ? 'sha224' : 'sha256';
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw new Error(ERROR);
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
        message.constructor === Buffer) {
        return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  var createHmacOutputMethod = function (outputType, is224) {
    return function (key, message) {
      return new HmacSha256(key, is224, true).update(message)[outputType]();
    };
  };

  var createHmacMethod = function (is224) {
    var method = createHmacOutputMethod('hex', is224);
    method.create = function (key) {
      return new HmacSha256(key, is224);
    };
    method.update = function (key, message) {
      return method.create(key).update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createHmacOutputMethod(type, is224);
    }
    return method;
  };

  function Sha256(is224, sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    if (is224) {
      this.h0 = 0xc1059ed8;
      this.h1 = 0x367cd507;
      this.h2 = 0x3070dd17;
      this.h3 = 0xf70e5939;
      this.h4 = 0xffc00b31;
      this.h5 = 0x68581511;
      this.h6 = 0x64f98fa7;
      this.h7 = 0xbefa4fa4;
    } else { // 256
      this.h0 = 0x6a09e667;
      this.h1 = 0xbb67ae85;
      this.h2 = 0x3c6ef372;
      this.h3 = 0xa54ff53a;
      this.h4 = 0x510e527f;
      this.h5 = 0x9b05688c;
      this.h6 = 0x1f83d9ab;
      this.h7 = 0x5be0cd19;
    }

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
    this.is224 = is224;
  }

  Sha256.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString, type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
      notString = true;
    }
    var code, index = 0, i, length = message.length, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
          blocks[4] = blocks[5] = blocks[6] = blocks[7] =
          blocks[8] = blocks[9] = blocks[10] = blocks[11] =
          blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha256.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha256.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6,
      h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;

    for (j = 16; j < 64; ++j) {
      // rightrotate
      t1 = blocks[j - 15];
      s0 = ((t1 >>> 7) | (t1 << 25)) ^ ((t1 >>> 18) | (t1 << 14)) ^ (t1 >>> 3);
      t1 = blocks[j - 2];
      s1 = ((t1 >>> 17) | (t1 << 15)) ^ ((t1 >>> 19) | (t1 << 13)) ^ (t1 >>> 10);
      blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
    }

    bc = b & c;
    for (j = 0; j < 64; j += 4) {
      if (this.first) {
        if (this.is224) {
          ab = 300032;
          t1 = blocks[0] - 1413257819;
          h = t1 - 150054599 << 0;
          d = t1 + 24177077 << 0;
        } else {
          ab = 704751109;
          t1 = blocks[0] - 210244248;
          h = t1 - 1521486534 << 0;
          d = t1 + 143694565 << 0;
        }
        this.first = false;
      } else {
        s0 = ((a >>> 2) | (a << 30)) ^ ((a >>> 13) | (a << 19)) ^ ((a >>> 22) | (a << 10));
        s1 = ((e >>> 6) | (e << 26)) ^ ((e >>> 11) | (e << 21)) ^ ((e >>> 25) | (e << 7));
        ab = a & b;
        maj = ab ^ (a & c) ^ bc;
        ch = (e & f) ^ (~e & g);
        t1 = h + s1 + ch + K[j] + blocks[j];
        t2 = s0 + maj;
        h = d + t1 << 0;
        d = t1 + t2 << 0;
      }
      s0 = ((d >>> 2) | (d << 30)) ^ ((d >>> 13) | (d << 19)) ^ ((d >>> 22) | (d << 10));
      s1 = ((h >>> 6) | (h << 26)) ^ ((h >>> 11) | (h << 21)) ^ ((h >>> 25) | (h << 7));
      da = d & a;
      maj = da ^ (d & b) ^ ab;
      ch = (h & e) ^ (~h & f);
      t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
      t2 = s0 + maj;
      g = c + t1 << 0;
      c = t1 + t2 << 0;
      s0 = ((c >>> 2) | (c << 30)) ^ ((c >>> 13) | (c << 19)) ^ ((c >>> 22) | (c << 10));
      s1 = ((g >>> 6) | (g << 26)) ^ ((g >>> 11) | (g << 21)) ^ ((g >>> 25) | (g << 7));
      cd = c & d;
      maj = cd ^ (c & a) ^ da;
      ch = (g & h) ^ (~g & e);
      t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
      t2 = s0 + maj;
      f = b + t1 << 0;
      b = t1 + t2 << 0;
      s0 = ((b >>> 2) | (b << 30)) ^ ((b >>> 13) | (b << 19)) ^ ((b >>> 22) | (b << 10));
      s1 = ((f >>> 6) | (f << 26)) ^ ((f >>> 11) | (f << 21)) ^ ((f >>> 25) | (f << 7));
      bc = b & c;
      maj = bc ^ (b & d) ^ cd;
      ch = (f & g) ^ (~f & h);
      t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
      t2 = s0 + maj;
      e = a + t1 << 0;
      a = t1 + t2 << 0;
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
    this.h5 = this.h5 + f << 0;
    this.h6 = this.h6 + g << 0;
    this.h7 = this.h7 + h << 0;
  };

  Sha256.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var hex = HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
      HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
      HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
      HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
      HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
      HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
      HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
      HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
      HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
      HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
      HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
      HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
      HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
      HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
      HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
      HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
      HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
      HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
      HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
      HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F] +
      HEX_CHARS[(h5 >> 28) & 0x0F] + HEX_CHARS[(h5 >> 24) & 0x0F] +
      HEX_CHARS[(h5 >> 20) & 0x0F] + HEX_CHARS[(h5 >> 16) & 0x0F] +
      HEX_CHARS[(h5 >> 12) & 0x0F] + HEX_CHARS[(h5 >> 8) & 0x0F] +
      HEX_CHARS[(h5 >> 4) & 0x0F] + HEX_CHARS[h5 & 0x0F] +
      HEX_CHARS[(h6 >> 28) & 0x0F] + HEX_CHARS[(h6 >> 24) & 0x0F] +
      HEX_CHARS[(h6 >> 20) & 0x0F] + HEX_CHARS[(h6 >> 16) & 0x0F] +
      HEX_CHARS[(h6 >> 12) & 0x0F] + HEX_CHARS[(h6 >> 8) & 0x0F] +
      HEX_CHARS[(h6 >> 4) & 0x0F] + HEX_CHARS[h6 & 0x0F];
    if (!this.is224) {
      hex += HEX_CHARS[(h7 >> 28) & 0x0F] + HEX_CHARS[(h7 >> 24) & 0x0F] +
        HEX_CHARS[(h7 >> 20) & 0x0F] + HEX_CHARS[(h7 >> 16) & 0x0F] +
        HEX_CHARS[(h7 >> 12) & 0x0F] + HEX_CHARS[(h7 >> 8) & 0x0F] +
        HEX_CHARS[(h7 >> 4) & 0x0F] + HEX_CHARS[h7 & 0x0F];
    }
    return hex;
  };

  Sha256.prototype.toString = Sha256.prototype.hex;

  Sha256.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5,
      h6 = this.h6, h7 = this.h7;

    var arr = [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF,
      (h5 >> 24) & 0xFF, (h5 >> 16) & 0xFF, (h5 >> 8) & 0xFF, h5 & 0xFF,
      (h6 >> 24) & 0xFF, (h6 >> 16) & 0xFF, (h6 >> 8) & 0xFF, h6 & 0xFF
    ];
    if (!this.is224) {
      arr.push((h7 >> 24) & 0xFF, (h7 >> 16) & 0xFF, (h7 >> 8) & 0xFF, h7 & 0xFF);
    }
    return arr;
  };

  Sha256.prototype.array = Sha256.prototype.digest;

  Sha256.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    dataView.setUint32(20, this.h5);
    dataView.setUint32(24, this.h6);
    if (!this.is224) {
      dataView.setUint32(28, this.h7);
    }
    return buffer;
  };

  function HmacSha256(key, is224, sharedMemory) {
    var i, type = typeof key;
    if (type === 'string') {
      var bytes = [], length = key.length, index = 0, code;
      for (i = 0; i < length; ++i) {
        code = key.charCodeAt(i);
        if (code < 0x80) {
          bytes[index++] = code;
        } else if (code < 0x800) {
          bytes[index++] = (0xc0 | (code >> 6));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else if (code < 0xd800 || code >= 0xe000) {
          bytes[index++] = (0xe0 | (code >> 12));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        } else {
          code = 0x10000 + (((code & 0x3ff) << 10) | (key.charCodeAt(++i) & 0x3ff));
          bytes[index++] = (0xf0 | (code >> 18));
          bytes[index++] = (0x80 | ((code >> 12) & 0x3f));
          bytes[index++] = (0x80 | ((code >> 6) & 0x3f));
          bytes[index++] = (0x80 | (code & 0x3f));
        }
      }
      key = bytes;
    } else {
      if (type === 'object') {
        if (key === null) {
          throw new Error(ERROR);
        } else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) {
          key = new Uint8Array(key);
        } else if (!Array.isArray(key)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) {
            throw new Error(ERROR);
          }
        }
      } else {
        throw new Error(ERROR);
      }
    }

    if (key.length > 64) {
      key = (new Sha256(is224, true)).update(key).array();
    }

    var oKeyPad = [], iKeyPad = [];
    for (i = 0; i < 64; ++i) {
      var b = key[i] || 0;
      oKeyPad[i] = 0x5c ^ b;
      iKeyPad[i] = 0x36 ^ b;
    }

    Sha256.call(this, is224, sharedMemory);

    this.update(iKeyPad);
    this.oKeyPad = oKeyPad;
    this.inner = true;
    this.sharedMemory = sharedMemory;
  }
  HmacSha256.prototype = new Sha256();

  HmacSha256.prototype.finalize = function () {
    Sha256.prototype.finalize.call(this);
    if (this.inner) {
      this.inner = false;
      var innerHash = this.array();
      Sha256.call(this, this.is224, this.sharedMemory);
      this.update(this.oKeyPad);
      this.update(innerHash);
      Sha256.prototype.finalize.call(this);
    }
  };

  var exports = createMethod();
  exports.sha256 = exports;
  exports.sha224 = createMethod(true);
  exports.sha256.hmac = createHmacMethod();
  exports.sha224.hmac = createHmacMethod(true);

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha256 = exports.sha256;
    root.sha224 = exports.sha224;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();


/***/ }),

/***/ 90787:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keyToDidDoc = void 0;
const u8a = __importStar(__webpack_require__(31605));
const ed25519_1 = __webpack_require__(96068);
function encodeKey(key) {
    const bytes = new Uint8Array(key.length + 2);
    bytes[0] = 0xec;
    bytes[1] = 0x01;
    bytes.set(key, 2);
    return `z${u8a.toString(bytes, 'base58btc')}`;
}
function keyToDidDoc(pubKeyBytes, fingerprint) {
    const did = `did:key:${fingerprint}`;
    const keyId = `${did}#${fingerprint}`;
    const x25519PubBytes = ed25519_1.convertPublicKeyToX25519(pubKeyBytes);
    const x25519KeyId = `${did}#${encodeKey(x25519PubBytes)}`;
    return {
        id: did,
        verificationMethod: [
            {
                id: keyId,
                type: 'Ed25519VerificationKey2018',
                controller: did,
                publicKeyBase58: u8a.toString(pubKeyBytes, 'base58btc'),
            },
        ],
        authentication: [keyId],
        assertionMethod: [keyId],
        capabilityDelegation: [keyId],
        capabilityInvocation: [keyId],
        keyAgreement: [
            {
                id: x25519KeyId,
                type: 'X25519KeyAgreementKey2019',
                controller: did,
                publicKeyBase58: u8a.toString(x25519PubBytes, 'base58btc'),
            },
        ],
    };
}
exports.keyToDidDoc = keyToDidDoc;
//# sourceMappingURL=ed25519.js.map

/***/ }),

/***/ 8372:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getResolver = void 0;
const varint_1 = __importDefault(__webpack_require__(80233));
const multibase_1 = __importDefault(__webpack_require__(45845));
const secp256k1 = __importStar(__webpack_require__(15645));
const ed25519 = __importStar(__webpack_require__(90787));
const DID_LD_JSON = 'application/did+ld+json';
const DID_JSON = 'application/did+json';
const prefixToDriverMap = {
    0xe7: secp256k1,
    0xed: ed25519,
};
function getResolver() {
    return {
        key: async (did, parsed, r, options) => {
            const contentType = options.accept || DID_JSON;
            const response = {
                didResolutionMetadata: { contentType },
                didDocument: null,
                didDocumentMetadata: {},
            };
            try {
                const multicodecPubKey = multibase_1.default.decode(parsed.id);
                const keyType = varint_1.default.decode(multicodecPubKey);
                const pubKeyBytes = multicodecPubKey.slice(varint_1.default.decode.bytes);
                const doc = await prefixToDriverMap[keyType].keyToDidDoc(pubKeyBytes, parsed.id);
                if (contentType === DID_LD_JSON) {
                    doc['@context'] = 'https://w3id.org/did/v1';
                    response.didDocument = doc;
                }
                else if (contentType === DID_JSON) {
                    response.didDocument = doc;
                }
                else {
                    delete response.didResolutionMetadata.contentType;
                    response.didResolutionMetadata.error = 'representationNotSupported';
                }
            }
            catch (e) {
                response.didResolutionMetadata.error = 'invalidDid';
                response.didResolutionMetadata.message = e.toString();
            }
            return response;
        },
    };
}
exports.getResolver = getResolver;
exports["default"] = { getResolver };
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 15645:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.keyToDidDoc = void 0;
const u8a = __importStar(__webpack_require__(31605));
function keyToDidDoc(pubKeyBytes, fingerprint) {
    const did = `did:key:${fingerprint}`;
    const keyId = `${did}#${fingerprint}`;
    return {
        id: did,
        verificationMethod: [
            {
                id: keyId,
                type: 'Secp256k1VerificationKey2018',
                controller: did,
                publicKeyBase58: u8a.toString(pubKeyBytes, 'base58btc'),
            },
        ],
        authentication: [keyId],
        assertionMethod: [keyId],
        capabilityDelegation: [keyId],
        capabilityInvocation: [keyId],
    };
}
exports.keyToDidDoc = keyToDidDoc;
//# sourceMappingURL=secp256k1.js.map

/***/ }),

/***/ 354:
/***/ (function(__unused_webpack_module, exports) {

!function(g,c){ true?c(exports):0}(this,function(g){const c=Symbol("newer"),e=Symbol("older");class n{constructor(a,b){typeof a!=="number"&&(b=a,a=0),this.size=0,this.limit=a,this.oldest=this.newest=void 0,this._keymap=new Map(),b&&(this.assign(b),a<1&&(this.limit=this.size))}_markEntryAsUsed(a){if(a===this.newest)return;a[c]&&(a===this.oldest&&(this.oldest=a[c]),a[c][e]=a[e]),a[e]&&(a[e][c]=a[c]),a[c]=void 0,a[e]=this.newest,this.newest&&(this.newest[c]=a),this.newest=a}assign(a){let b,d=this.limit||Number.MAX_VALUE;this._keymap.clear();let m=a[Symbol.iterator]();for(let h=m.next();!h.done;h=m.next()){let f=new l(h.value[0],h.value[1]);this._keymap.set(f.key,f),b?(b[c]=f,f[e]=b):this.oldest=f,b=f;if(d--==0)throw new Error("overflow")}this.newest=b,this.size=this._keymap.size}get(a){var b=this._keymap.get(a);return b?(this._markEntryAsUsed(b),b.value):void 0}set(a,b){var d=this._keymap.get(a);return d?(d.value=b,this._markEntryAsUsed(d),this):(this._keymap.set(a,d=new l(a,b)),this.newest?(this.newest[c]=d,d[e]=this.newest):this.oldest=d,this.newest=d,++this.size,this.size>this.limit&&this.shift(),this)}shift(){var a=this.oldest;if(a)return this.oldest[c]?(this.oldest=this.oldest[c],this.oldest[e]=void 0):(this.oldest=void 0,this.newest=void 0),a[c]=a[e]=void 0,this._keymap.delete(a.key),--this.size,[a.key,a.value]}find(a){let b=this._keymap.get(a);return b?b.value:void 0}has(a){return this._keymap.has(a)}delete(a){var b=this._keymap.get(a);return b?(this._keymap.delete(b.key),b[c]&&b[e]?(b[e][c]=b[c],b[c][e]=b[e]):b[c]?(b[c][e]=void 0,this.oldest=b[c]):b[e]?(b[e][c]=void 0,this.newest=b[e]):this.oldest=this.newest=void 0,this.size--,b.value):void 0}clear(){this.oldest=this.newest=void 0,this.size=0,this._keymap.clear()}keys(){return new j(this.oldest)}values(){return new k(this.oldest)}entries(){return this}[Symbol.iterator](){return new i(this.oldest)}forEach(a,b){typeof b!=="object"&&(b=this);let d=this.oldest;for(;d;)a.call(b,d.value,d.key,this),d=d[c]}toJSON(){for(var a=new Array(this.size),b=0,d=this.oldest;d;)a[b++]={key:d.key,value:d.value},d=d[c];return a}toString(){for(var a="",b=this.oldest;b;)a+=String(b.key)+":"+b.value,b=b[c],b&&(a+=" < ");return a}}g.LRUMap=n;function l(a,b){this.key=a,this.value=b,this[c]=void 0,this[e]=void 0}function i(a){this.entry=a}i.prototype[Symbol.iterator]=function(){return this},i.prototype.next=function(){let a=this.entry;return a?(this.entry=a[c],{done:!1,value:[a.key,a.value]}):{done:!0,value:void 0}};function j(a){this.entry=a}j.prototype[Symbol.iterator]=function(){return this},j.prototype.next=function(){let a=this.entry;return a?(this.entry=a[c],{done:!1,value:a.key}):{done:!0,value:void 0}};function k(a){this.entry=a}k.prototype[Symbol.iterator]=function(){return this},k.prototype.next=function(){let a=this.entry;return a?(this.entry=a[c],{done:!1,value:a.value}):{done:!0,value:void 0}}});
//# sourceMappingURL=lru.js.map


/***/ }),

/***/ 67635:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


// @ts-ignore - no types available
const blake = __webpack_require__(62797)

const minB = 0xb201
const minS = 0xb241

const blake2b = {
  init: blake.blake2bInit,
  update: blake.blake2bUpdate,
  digest: blake.blake2bFinal
}

const blake2s = {
  init: blake.blake2sInit,
  update: blake.blake2sUpdate,
  digest: blake.blake2sFinal
}

// Note that although this function doesn't do any asynchronous work, we mark
// the function as async because it must return a Promise to match the API
// for other functions that do perform asynchronous work (see sha.browser.js)
// eslint-disable-next-line

/**
 * @param {number} size
 * @param {any} hf
 * @returns {import('./types').Digest}
 */
const makeB2Hash = (size, hf) => async (data) => {
  const ctx = hf.init(size, null)
  hf.update(ctx, data)
  return hf.digest(ctx)
}

/**
 * @param {Record<number, import('./types').Digest>} table
 */
module.exports = (table) => {
  for (let i = 0; i < 64; i++) {
    table[minB + i] = makeB2Hash(i + 1, blake2b)
  }
  for (let i = 0; i < 32; i++) {
    table[minS + i] = makeB2Hash(i + 1, blake2s)
  }
}


/***/ }),

/***/ 2731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const sha3 = __webpack_require__(94474)
// @ts-ignore - no types available
const mur = __webpack_require__(94850)
const { factory: sha } = __webpack_require__(75475)
const { fromNumberTo32BitBuf } = __webpack_require__(27718)
const { fromString: uint8ArrayFromString } = __webpack_require__(31216)

// Note that although this function doesn't do any asynchronous work, we mark
// the function as async because it must return a Promise to match the API
// for other functions that do perform asynchronous work (see sha.browser.js)
// eslint-disable-next-line
/**
 * @param {string} algorithm
 * @returns {import('./types').Digest}
 */
const hash = (algorithm) => async (data) => {
  switch (algorithm) {
    case 'sha3-224':
      return new Uint8Array(sha3.sha3_224.arrayBuffer(data))
    case 'sha3-256':
      return new Uint8Array(sha3.sha3_256.arrayBuffer(data))
    case 'sha3-384':
      return new Uint8Array(sha3.sha3_384.arrayBuffer(data))
    case 'sha3-512':
      return new Uint8Array(sha3.sha3_512.arrayBuffer(data))
    case 'shake-128':
      return new Uint8Array(sha3.shake128.create(128).update(data).arrayBuffer())
    case 'shake-256':
      return new Uint8Array(sha3.shake256.create(256).update(data).arrayBuffer())
    case 'keccak-224':
      return new Uint8Array(sha3.keccak224.arrayBuffer(data))
    case 'keccak-256':
      return new Uint8Array(sha3.keccak256.arrayBuffer(data))
    case 'keccak-384':
      return new Uint8Array(sha3.keccak384.arrayBuffer(data))
    case 'keccak-512':
      return new Uint8Array(sha3.keccak512.arrayBuffer(data))
    case 'murmur3-128':
      return uint8ArrayFromString(mur.x64.hash128(data), 'base16')
    case 'murmur3-32':
      return fromNumberTo32BitBuf(mur.x86.hash32(data))

    default:
      throw new TypeError(`${algorithm} is not a supported algorithm`)
  }
}

/** @type {import('./types').Digest} */
const identity = data => data

module.exports = {
  identity,
  sha1: sha('sha1'),
  sha2256: sha('sha2-256'),
  sha2512: sha('sha2-512'),
  dblSha2256: sha('dbl-sha2-256'),
  sha3224: hash('sha3-224'),
  sha3256: hash('sha3-256'),
  sha3384: hash('sha3-384'),
  sha3512: hash('sha3-512'),
  shake128: hash('shake-128'),
  shake256: hash('shake-256'),
  keccak224: hash('keccak-224'),
  keccak256: hash('keccak-256'),
  keccak384: hash('keccak-384'),
  keccak512: hash('keccak-512'),
  murmur3128: hash('murmur3-128'),
  murmur332: hash('murmur3-32'),
  addBlake: __webpack_require__(67635)
}


/***/ }),

/***/ 77998:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const errcode = __webpack_require__(70963)
const multihash = __webpack_require__(45671)
const crypto = __webpack_require__(2731)
const { equals } = __webpack_require__(37488)

/**
 * @typedef {import("./types").Digest} Digest
 * @typedef {import("multihashes").HashName} HashName
 */

/**
 * Hash the given `bytes` using the algorithm specified by `alg`.
 *
 * @param {Uint8Array} bytes - The value to hash.
 * @param {HashName} alg - The algorithm to use eg 'sha1'
 * @param {number} [length] - Optionally trim the result to this length.
 * @returns {Promise<Uint8Array>}
 */
async function Multihashing (bytes, alg, length) {
  const digest = await Multihashing.digest(bytes, alg, length)
  return multihash.encode(digest, alg, length)
}

/**
 * Expose multihash itself, to avoid silly double requires.
 */
Multihashing.multihash = multihash

/**
 * @param {Uint8Array} bytes - The value to hash.
 * @param {HashName} alg - The algorithm to use eg 'sha1'
 * @param {number} [length] - Optionally trim the result to this length.
 * @returns {Promise<Uint8Array>}
 */
Multihashing.digest = async (bytes, alg, length) => {
  const hash = Multihashing.createHash(alg)
  const digest = await hash(bytes)
  return length ? digest.slice(0, length) : digest
}

/**
 * Creates a function that hashes with the given algorithm
 *
 * @param {HashName} alg - The algorithm to use eg 'sha1'
 * @returns {Digest} - The hash function corresponding to `alg`
 */
Multihashing.createHash = function (alg) {
  if (!alg) {
    const e = errcode(new Error('hash algorithm must be specified'), 'ERR_HASH_ALGORITHM_NOT_SPECIFIED')
    throw e
  }

  const code = multihash.coerceCode(alg)
  if (!Multihashing.functions[code]) {
    throw errcode(new Error(`multihash function '${alg}' not yet supported`), 'ERR_HASH_ALGORITHM_NOT_SUPPORTED')
  }

  return Multihashing.functions[code]
}

/**
 * Mapping of multihash codes to their hashing functions.
 *
 * @type {Record<number, Digest>}
 */
// @ts-ignore - most of those functions aren't typed
Multihashing.functions = {
  // identity
  0x00: crypto.identity,
  // sha1
  0x11: crypto.sha1,
  // sha2-256
  0x12: crypto.sha2256,
  // sha2-512
  0x13: crypto.sha2512,
  // sha3-512
  0x14: crypto.sha3512,
  // sha3-384
  0x15: crypto.sha3384,
  // sha3-256
  0x16: crypto.sha3256,
  // sha3-224
  0x17: crypto.sha3224,
  // shake-128
  0x18: crypto.shake128,
  // shake-256
  0x19: crypto.shake256,
  // keccak-224
  0x1A: crypto.keccak224,
  // keccak-256
  0x1B: crypto.keccak256,
  // keccak-384
  0x1C: crypto.keccak384,
  // keccak-512
  0x1D: crypto.keccak512,
  // murmur3-128
  0x22: crypto.murmur3128,
  // murmur3-32
  0x23: crypto.murmur332,
  // dbl-sha2-256
  0x56: crypto.dblSha2256
}

// add blake functions
crypto.addBlake(Multihashing.functions)

/**
 * @param {Uint8Array} bytes
 * @param {Uint8Array} hash
 * @returns {Promise<boolean>}
 */
Multihashing.validate = async (bytes, hash) => {
  const newHash = await Multihashing(bytes, multihash.decode(hash).name)

  return equals(hash, newHash)
}

module.exports = Multihashing


/***/ }),

/***/ 75475:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable require-await */


const multihash = __webpack_require__(45671)
/**
 * @typedef {import('multihashes').HashName} HashName
 * @typedef {import('./types').Digest} Digest
 */

/**
 * @type {Crypto}
 */
const crypto =
  self.crypto ||
  /** @type {typeof window.crypto} */
  // @ts-ignore - unknown property
  (self.msCrypto)

/**
 *
 * @param {Uint8Array} data
 * @param {HashName} alg
 * @returns {Promise<Uint8Array>}
 */
const digest = async (data, alg) => {
  if (typeof self === 'undefined' || !crypto) {
    throw new Error(
      'Please use a browser with webcrypto support and ensure the code has been delivered securely via HTTPS/TLS and run within a Secure Context'
    )
  }
  switch (alg) {
    case 'sha1':
      return new Uint8Array(await crypto.subtle.digest({ name: 'SHA-1' }, data))
    case 'sha2-256':
      return new Uint8Array(await crypto.subtle.digest({ name: 'SHA-256' }, data))
    case 'sha2-512':
      return new Uint8Array(await crypto.subtle.digest({ name: 'SHA-512' }, data))
    case 'dbl-sha2-256': {
      const d = await crypto.subtle.digest({ name: 'SHA-256' }, data)
      return new Uint8Array(await crypto.subtle.digest({ name: 'SHA-256' }, d))
    }
    default:
      throw new Error(`${alg} is not a supported algorithm`)
  }
}

module.exports = {
  /**
   * @param {HashName} alg
   * @returns {Digest}
   */
  factory: (alg) => async (data) => {
    return digest(data, alg)
  },
  digest,
  /**
   * @param {Uint8Array} buf
   * @param {HashName} alg
   * @param {number} [length]
   */
  multihashing: async (buf, alg, length) => {
    const h = await digest(buf, alg)
    return multihash.encode(h, alg, length)
  }
}


/***/ }),

/***/ 27718:
/***/ ((module) => {

"use strict";


/**
 * @param {number} number
 * @returns {Uint8Array}
 */
const fromNumberTo32BitBuf = (number) => {
  const bytes = new Uint8Array(4)

  for (let i = 0; i < 4; i++) {
    bytes[i] = number & 0xff
    number = number >> 8
  }

  return bytes
}

module.exports = {
  fromNumberTo32BitBuf
}


/***/ }),

/***/ 94850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(12557);


/***/ }),

/***/ 12557:
/***/ (function(module, exports) {

/* jshint -W086: true */
// +----------------------------------------------------------------------+
// | murmurHash3js.js v3.0.1 // https://github.com/pid/murmurHash3js
// | A javascript implementation of MurmurHash3's x86 hashing algorithms. |
// |----------------------------------------------------------------------|
// | Copyright (c) 2012-2015 Karan Lyons                                       |
// | https://github.com/karanlyons/murmurHash3.js/blob/c1778f75792abef7bdd74bc85d2d4e1a3d25cfe9/murmurHash3.js |
// | Freely distributable under the MIT license.                          |
// +----------------------------------------------------------------------+

;(function (root, undefined) {
    'use strict';

    // Create a local object that'll be exported or referenced globally.
    var library = {
        'version': '3.0.0',
        'x86': {},
        'x64': {},
        'inputValidation': true
    };

    // PRIVATE FUNCTIONS
    // -----------------

    function _validBytes(bytes) {
        // check the input is an array or a typed array
        if (!Array.isArray(bytes) && !ArrayBuffer.isView(bytes)) {
            return false;
        }

        // check all bytes are actually bytes
        for (var i = 0; i < bytes.length; i++) {
            if (!Number.isInteger(bytes[i]) || bytes[i] < 0 || bytes[i] > 255) {
                return false;
            }
        }
        return true;
    }

    function _x86Multiply(m, n) {
        //
        // Given two 32bit ints, returns the two multiplied together as a
        // 32bit int.
        //

        return ((m & 0xffff) * n) + ((((m >>> 16) * n) & 0xffff) << 16);
    }

    function _x86Rotl(m, n) {
        //
        // Given a 32bit int and an int representing a number of bit positions,
        // returns the 32bit int rotated left by that number of positions.
        //

        return (m << n) | (m >>> (32 - n));
    }

    function _x86Fmix(h) {
        //
        // Given a block, returns murmurHash3's final x86 mix of that block.
        //

        h ^= h >>> 16;
        h = _x86Multiply(h, 0x85ebca6b);
        h ^= h >>> 13;
        h = _x86Multiply(h, 0xc2b2ae35);
        h ^= h >>> 16;

        return h;
    }

    function _x64Add(m, n) {
        //
        // Given two 64bit ints (as an array of two 32bit ints) returns the two
        // added together as a 64bit int (as an array of two 32bit ints).
        //

        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
        var o = [0, 0, 0, 0];

        o[3] += m[3] + n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 0xffff;

        o[2] += m[2] + n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;

        o[1] += m[1] + n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;

        o[0] += m[0] + n[0];
        o[0] &= 0xffff;

        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    }

    function _x64Multiply(m, n) {
        //
        // Given two 64bit ints (as an array of two 32bit ints) returns the two
        // multiplied together as a 64bit int (as an array of two 32bit ints).
        //

        m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
        n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
        var o = [0, 0, 0, 0];

        o[3] += m[3] * n[3];
        o[2] += o[3] >>> 16;
        o[3] &= 0xffff;

        o[2] += m[2] * n[3];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;

        o[2] += m[3] * n[2];
        o[1] += o[2] >>> 16;
        o[2] &= 0xffff;

        o[1] += m[1] * n[3];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;

        o[1] += m[2] * n[2];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;

        o[1] += m[3] * n[1];
        o[0] += o[1] >>> 16;
        o[1] &= 0xffff;

        o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0]);
        o[0] &= 0xffff;

        return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]];
    }

    function _x64Rotl(m, n) {
        //
        // Given a 64bit int (as an array of two 32bit ints) and an int
        // representing a number of bit positions, returns the 64bit int (as an
        // array of two 32bit ints) rotated left by that number of positions.
        //

        n %= 64;

        if (n === 32) {
            return [m[1], m[0]];
        } else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))];
        } else {
            n -= 32;
            return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))];
        }
    }

    function _x64LeftShift(m, n) {
        //
        // Given a 64bit int (as an array of two 32bit ints) and an int
        // representing a number of bit positions, returns the 64bit int (as an
        // array of two 32bit ints) shifted left by that number of positions.
        //

        n %= 64;

        if (n === 0) {
            return m;
        } else if (n < 32) {
            return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n];
        } else {
            return [m[1] << (n - 32), 0];
        }
    }

    function _x64Xor(m, n) {
        //
        // Given two 64bit ints (as an array of two 32bit ints) returns the two
        // xored together as a 64bit int (as an array of two 32bit ints).
        //

        return [m[0] ^ n[0], m[1] ^ n[1]];
    }

    function _x64Fmix(h) {
        //
        // Given a block, returns murmurHash3's final x64 mix of that block.
        // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
        // only place where we need to right shift 64bit ints.)
        //

        h = _x64Xor(h, [0, h[0] >>> 1]);
        h = _x64Multiply(h, [0xff51afd7, 0xed558ccd]);
        h = _x64Xor(h, [0, h[0] >>> 1]);
        h = _x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
        h = _x64Xor(h, [0, h[0] >>> 1]);

        return h;
    }

    // PUBLIC FUNCTIONS
    // ----------------

    library.x86.hash32 = function (bytes, seed) {
        //
        // Given a string and an optional seed as an int, returns a 32 bit hash
        // using the x86 flavor of MurmurHash3, as an unsigned int.
        //
        if (library.inputValidation && !_validBytes(bytes)) {
            return undefined;
        }
        seed = seed || 0;

        var remainder = bytes.length % 4;
        var blocks = bytes.length - remainder;

        var h1 = seed;

        var k1 = 0;

        var c1 = 0xcc9e2d51;
        var c2 = 0x1b873593;

        for (var i = 0; i < blocks; i = i + 4) {
            k1 = (bytes[i]) | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24);

            k1 = _x86Multiply(k1, c1);
            k1 = _x86Rotl(k1, 15);
            k1 = _x86Multiply(k1, c2);

            h1 ^= k1;
            h1 = _x86Rotl(h1, 13);
            h1 = _x86Multiply(h1, 5) + 0xe6546b64;
        }

        k1 = 0;

        switch (remainder) {
            case 3:
                k1 ^= bytes[i + 2] << 16;

            case 2:
                k1 ^= bytes[i + 1] << 8;

            case 1:
                k1 ^= bytes[i];
                k1 = _x86Multiply(k1, c1);
                k1 = _x86Rotl(k1, 15);
                k1 = _x86Multiply(k1, c2);
                h1 ^= k1;
        }

        h1 ^= bytes.length;
        h1 = _x86Fmix(h1);

        return h1 >>> 0;
    };

    library.x86.hash128 = function (bytes, seed) {
        //
        // Given a string and an optional seed as an int, returns a 128 bit
        // hash using the x86 flavor of MurmurHash3, as an unsigned hex.
        //
        if (library.inputValidation && !_validBytes(bytes)) {
            return undefined;
        }

        seed = seed || 0;
        var remainder = bytes.length % 16;
        var blocks = bytes.length - remainder;

        var h1 = seed;
        var h2 = seed;
        var h3 = seed;
        var h4 = seed;

        var k1 = 0;
        var k2 = 0;
        var k3 = 0;
        var k4 = 0;

        var c1 = 0x239b961b;
        var c2 = 0xab0e9789;
        var c3 = 0x38b34ae5;
        var c4 = 0xa1e38b93;

        for (var i = 0; i < blocks; i = i + 16) {
            k1 = (bytes[i]) | (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24);
            k2 = (bytes[i + 4]) | (bytes[i + 5] << 8) | (bytes[i + 6] << 16) | (bytes[i + 7] << 24);
            k3 = (bytes[i + 8]) | (bytes[i + 9] << 8) | (bytes[i + 10] << 16) | (bytes[i + 11] << 24);
            k4 = (bytes[i + 12]) | (bytes[i + 13] << 8) | (bytes[i + 14] << 16) | (bytes[i + 15] << 24);

            k1 = _x86Multiply(k1, c1);
            k1 = _x86Rotl(k1, 15);
            k1 = _x86Multiply(k1, c2);
            h1 ^= k1;

            h1 = _x86Rotl(h1, 19);
            h1 += h2;
            h1 = _x86Multiply(h1, 5) + 0x561ccd1b;

            k2 = _x86Multiply(k2, c2);
            k2 = _x86Rotl(k2, 16);
            k2 = _x86Multiply(k2, c3);
            h2 ^= k2;

            h2 = _x86Rotl(h2, 17);
            h2 += h3;
            h2 = _x86Multiply(h2, 5) + 0x0bcaa747;

            k3 = _x86Multiply(k3, c3);
            k3 = _x86Rotl(k3, 17);
            k3 = _x86Multiply(k3, c4);
            h3 ^= k3;

            h3 = _x86Rotl(h3, 15);
            h3 += h4;
            h3 = _x86Multiply(h3, 5) + 0x96cd1c35;

            k4 = _x86Multiply(k4, c4);
            k4 = _x86Rotl(k4, 18);
            k4 = _x86Multiply(k4, c1);
            h4 ^= k4;

            h4 = _x86Rotl(h4, 13);
            h4 += h1;
            h4 = _x86Multiply(h4, 5) + 0x32ac3b17;
        }

        k1 = 0;
        k2 = 0;
        k3 = 0;
        k4 = 0;

        switch (remainder) {
            case 15:
                k4 ^= bytes[i + 14] << 16;

            case 14:
                k4 ^= bytes[i + 13] << 8;

            case 13:
                k4 ^= bytes[i + 12];
                k4 = _x86Multiply(k4, c4);
                k4 = _x86Rotl(k4, 18);
                k4 = _x86Multiply(k4, c1);
                h4 ^= k4;

            case 12:
                k3 ^= bytes[i + 11] << 24;

            case 11:
                k3 ^= bytes[i + 10] << 16;

            case 10:
                k3 ^= bytes[i + 9] << 8;

            case 9:
                k3 ^= bytes[i + 8];
                k3 = _x86Multiply(k3, c3);
                k3 = _x86Rotl(k3, 17);
                k3 = _x86Multiply(k3, c4);
                h3 ^= k3;

            case 8:
                k2 ^= bytes[i + 7] << 24;

            case 7:
                k2 ^= bytes[i + 6] << 16;

            case 6:
                k2 ^= bytes[i + 5] << 8;

            case 5:
                k2 ^= bytes[i + 4];
                k2 = _x86Multiply(k2, c2);
                k2 = _x86Rotl(k2, 16);
                k2 = _x86Multiply(k2, c3);
                h2 ^= k2;

            case 4:
                k1 ^= bytes[i + 3] << 24;

            case 3:
                k1 ^= bytes[i + 2] << 16;

            case 2:
                k1 ^= bytes[i + 1] << 8;

            case 1:
                k1 ^= bytes[i];
                k1 = _x86Multiply(k1, c1);
                k1 = _x86Rotl(k1, 15);
                k1 = _x86Multiply(k1, c2);
                h1 ^= k1;
        }

        h1 ^= bytes.length;
        h2 ^= bytes.length;
        h3 ^= bytes.length;
        h4 ^= bytes.length;

        h1 += h2;
        h1 += h3;
        h1 += h4;
        h2 += h1;
        h3 += h1;
        h4 += h1;

        h1 = _x86Fmix(h1);
        h2 = _x86Fmix(h2);
        h3 = _x86Fmix(h3);
        h4 = _x86Fmix(h4);

        h1 += h2;
        h1 += h3;
        h1 += h4;
        h2 += h1;
        h3 += h1;
        h4 += h1;

        return ("00000000" + (h1 >>> 0).toString(16)).slice(-8) + ("00000000" + (h2 >>> 0).toString(16)).slice(-8) + ("00000000" + (h3 >>> 0).toString(16)).slice(-8) + ("00000000" + (h4 >>> 0).toString(16)).slice(-8);
    };

    library.x64.hash128 = function (bytes, seed) {
        //
        // Given a string and an optional seed as an int, returns a 128 bit
        // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
        //
        if (library.inputValidation && !_validBytes(bytes)) {
            return undefined;
        }
        seed = seed || 0;

        var remainder = bytes.length % 16;
        var blocks = bytes.length - remainder;

        var h1 = [0, seed];
        var h2 = [0, seed];

        var k1 = [0, 0];
        var k2 = [0, 0];

        var c1 = [0x87c37b91, 0x114253d5];
        var c2 = [0x4cf5ad43, 0x2745937f];

        for (var i = 0; i < blocks; i = i + 16) {
            k1 = [(bytes[i + 4]) | (bytes[i + 5] << 8) | (bytes[i + 6] << 16) | (bytes[i + 7] << 24), (bytes[i]) |
                (bytes[i + 1] << 8) | (bytes[i + 2] << 16) | (bytes[i + 3] << 24)];
            k2 = [(bytes[i + 12]) | (bytes[i + 13] << 8) | (bytes[i + 14] << 16) | (bytes[i + 15] << 24), (bytes[i + 8]) |
                (bytes[i + 9] << 8) | (bytes[i + 10] << 16) | (bytes[i + 11] << 24)];

            k1 = _x64Multiply(k1, c1);
            k1 = _x64Rotl(k1, 31);
            k1 = _x64Multiply(k1, c2);
            h1 = _x64Xor(h1, k1);

            h1 = _x64Rotl(h1, 27);
            h1 = _x64Add(h1, h2);
            h1 = _x64Add(_x64Multiply(h1, [0, 5]), [0, 0x52dce729]);

            k2 = _x64Multiply(k2, c2);
            k2 = _x64Rotl(k2, 33);
            k2 = _x64Multiply(k2, c1);
            h2 = _x64Xor(h2, k2);

            h2 = _x64Rotl(h2, 31);
            h2 = _x64Add(h2, h1);
            h2 = _x64Add(_x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
        }

        k1 = [0, 0];
        k2 = [0, 0];

        switch (remainder) {
            case 15:
                k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 14]], 48));

            case 14:
                k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 13]], 40));

            case 13:
                k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 12]], 32));

            case 12:
                k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 11]], 24));

            case 11:
                k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 10]], 16));

            case 10:
                k2 = _x64Xor(k2, _x64LeftShift([0, bytes[i + 9]], 8));

            case 9:
                k2 = _x64Xor(k2, [0, bytes[i + 8]]);
                k2 = _x64Multiply(k2, c2);
                k2 = _x64Rotl(k2, 33);
                k2 = _x64Multiply(k2, c1);
                h2 = _x64Xor(h2, k2);

            case 8:
                k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 7]], 56));

            case 7:
                k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 6]], 48));

            case 6:
                k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 5]], 40));

            case 5:
                k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 4]], 32));

            case 4:
                k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 3]], 24));

            case 3:
                k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 2]], 16));

            case 2:
                k1 = _x64Xor(k1, _x64LeftShift([0, bytes[i + 1]], 8));

            case 1:
                k1 = _x64Xor(k1, [0, bytes[i]]);
                k1 = _x64Multiply(k1, c1);
                k1 = _x64Rotl(k1, 31);
                k1 = _x64Multiply(k1, c2);
                h1 = _x64Xor(h1, k1);
        }

        h1 = _x64Xor(h1, [0, bytes.length]);
        h2 = _x64Xor(h2, [0, bytes.length]);

        h1 = _x64Add(h1, h2);
        h2 = _x64Add(h2, h1);

        h1 = _x64Fmix(h1);
        h2 = _x64Fmix(h2);

        h1 = _x64Add(h1, h2);
        h2 = _x64Add(h2, h1);

        return ("00000000" + (h1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (h2[1] >>> 0).toString(16)).slice(-8);
    };

    // INITIALIZATION
    // --------------

    // Export murmurHash3 for CommonJS, either as an AMD module or just as part
    // of the global object.
    if (true) {

        if ( true && module.exports) {
            exports = module.exports = library;
        }

        exports.murmurHash3 = library;

    } else {}
})(this);


/***/ }),

/***/ 23382:
/***/ ((module) => {

// This file replaces `format.js` in bundlers like webpack or Rollup,
// according to `browser` config in `package.json`.

module.exports = function (random, alphabet, size) {
  // We can’t use bytes bigger than the alphabet. To make bytes values closer
  // to the alphabet, we apply bitmask on them. We look for the closest
  // `2 ** x - 1` number, which will be bigger than alphabet size. If we have
  // 30 symbols in the alphabet, we will take 31 (00011111).
  // We do not use faster Math.clz32, because it is not available in browsers.
  var mask = (2 << Math.log(alphabet.length - 1) / Math.LN2) - 1
  // Bitmask is not a perfect solution (in our example it will pass 31 bytes,
  // which is bigger than the alphabet). As a result, we will need more bytes,
  // than ID size, because we will refuse bytes bigger than the alphabet.

  // Every hardware random generator call is costly,
  // because we need to wait for entropy collection. This is why often it will
  // be faster to ask for few extra bytes in advance, to avoid additional calls.

  // Here we calculate how many random bytes should we call in advance.
  // It depends on ID length, mask / alphabet size and magic number 1.6
  // (which was selected according benchmarks).

  // -~f => Math.ceil(f) if n is float number
  // -~i => i + 1 if n is integer number
  var step = -~(1.6 * mask * size / alphabet.length)
  var id = ''

  while (true) {
    var bytes = random(step)
    // Compact alternative for `for (var i = 0; i < step; i++)`
    var i = step
    while (i--) {
      // If random byte is bigger than alphabet even after bitmask,
      // we refuse it by `|| ''`.
      id += alphabet[bytes[i] & mask] || ''
      // More compact than `id.length + 1 === size`
      if (id.length === +size) return id
    }
  }
}


/***/ }),

/***/ 43329:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(57281);

module.exports = __webpack_require__(96522);

/***/ }),

/***/ 26788:
/***/ ((module) => {

var Class = function () {
    var options = Object.create({
        Source: Object,
        config: {},
        buildArgs: []
    });

    function checkOption(option) {
        var key = "config";
        if (option instanceof Function)
            key = "Source";
        else if (option instanceof Array)
            key = "buildArgs";
        else if (option instanceof Object)
            key = "config";
        else
            throw new Error("Invalid configuration option.");
        if (options.hasOwnProperty(key))
            throw new Error("Duplicated configuration option: " + key + ".");
        options[key] = option;
    }

    for (var index = 0, length = arguments.length; index < length; ++index)
        checkOption(arguments[index]);

    var Source = options.Source,
        config = options.config,
        buildArgs = options.buildArgs;

    return (Source.extend || Class.extend).call(Source, config, buildArgs);
};

Class.factory = function () {
    var Source = this;
    return function () {
        var instance = this;
        if (instance.build instanceof Function)
            instance.build.apply(instance, arguments);
        if (instance.init instanceof Function)
            instance.init.apply(instance, arguments);
    };
};

Class.extend = function (config, buildArgs) {
    var Source = this;
    if (!config)
        config = {};
    var Subject;
    if ((config.prototype instanceof Object) && config.prototype.constructor !== Object)
        Subject = config.prototype.constructor;
    else if (config.factory instanceof Function)
        Subject = config.factory.call(Source);
    Subject = (Source.clone || Class.clone).call(Source, Subject, buildArgs);
    (Subject.merge || Class.merge).call(Subject, config);
    return Subject;
};

Class.prototype.extend = function (config, buildArgs) {
    var subject = this;
    var instance = (subject.clone || Class.prototype.clone).apply(subject, buildArgs);
    (instance.merge || Class.prototype.merge).call(instance, config);
    return instance;
};

Class.clone = function (Subject, buildArgs) {
    var Source = this;
    if (!(Subject instanceof Function))
        Subject = (Source.factory || Class.factory).call(Source);
    Subject.prototype = (Source.prototype.clone || Class.prototype.clone).apply(Source.prototype, buildArgs || []);
    Subject.prototype.constructor = Subject;
    for (var staticProperty in Source)
        if (staticProperty !== "prototype")
            Subject[staticProperty] = Source[staticProperty];
    return Subject;
};

Class.prototype.clone = function () {
    var subject = this;
    var instance = Object.create(subject);
    if (instance.build instanceof Function)
        instance.build.apply(instance, arguments);
    return instance;
};

Class.merge = function (config) {
    var Subject = this;
    for (var staticProperty in config)
        if (staticProperty !== "prototype")
            Subject[staticProperty] = config[staticProperty];
    if (config.prototype instanceof Object)
        (Subject.prototype.merge || Class.prototype.merge).call(Subject.prototype, config.prototype);
    return Subject;
};

Class.prototype.merge = function (config) {
    var subject = this;
    for (var property in config)
        if (property !== "constructor")
            subject[property] = config[property];
    return subject;
};

Class.absorb = function (config) {
    var Subject = this;
    for (var staticProperty in config)
        if (staticProperty !== "prototype" && (Subject[staticProperty] === undefined || Subject[staticProperty] === Function.prototype[staticProperty]))
            Subject[staticProperty] = config[staticProperty];
    if (config.prototype instanceof Object)
        (Subject.prototype.absorb || Class.prototype.absorb).call(Subject.prototype, config.prototype);
    return Subject;
};

Class.prototype.absorb = function (config) {
    var subject = this;
    for (var property in config)
        if (property !== "constructor" && (subject[property] === undefined || subject[property] === Object.prototype[property]))
            subject[property] = config[property];
    return subject;
};

Class.getAncestor = function () {
    var Source = this;
    if (Source !== Source.prototype.constructor)
        return Source.prototype.constructor;
};

Class.newInstance = function () {
    var Subject = this;
    var instance = Object.create(this.prototype);
    Subject.apply(instance, arguments);
    return instance;
};

module.exports = Class;

/***/ }),

/***/ 22851:
/***/ ((module) => {

module.exports = function () {
    throw new Error("Not implemented.");
};

/***/ }),

/***/ 96522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
    Class: __webpack_require__(26788),
    abstractMethod: __webpack_require__(22851)
};

/***/ }),

/***/ 98442:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = caller;
exports.call = call;

var _shortid = __webpack_require__(62260);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function caller(funcName, opts) {
  opts = opts || {};

  var addListener = opts.addListener || window.addEventListener;
  var removeListener = opts.removeListener || window.removeEventListener;
  var postMessage = opts.postMessage || window.postMessage;
  var targetOrigin = opts.targetOrigin || '*';
  var getMessageData = opts.getMessageData || function (event) {
    return event.data;
  };

  return function () {
    var msg = {
      sender: 'postmsg-rpc/client',
      id: (0, _shortid2.default)(),
      func: funcName,
      args: Array.from(arguments)
    };

    var cancel = void 0;

    var response = new Promise(function (resolve, reject) {
      var handler = function handler() {
        var data = getMessageData.apply(null, arguments);
        if (!data) return;
        if (data.sender !== 'postmsg-rpc/server' || data.id !== msg.id) return;
        removeListener('message', handler);

        if (data.err) {
          var err = new Error('Unexpected error calling ' + funcName);
          Object.assign(err, data.err);
          return reject(err);
        }

        resolve(data.res);
      };

      cancel = function cancel() {
        removeListener('message', handler);
        var err = new Error('Canceled call to ' + funcName);
        err.isCanceled = true;
        reject(err);
      };

      addListener('message', handler);
      postMessage(msg, targetOrigin);
    });

    response.cancel = function () {
      return cancel();
    };

    return response;
  };
}

function call(funcName) {
  return caller(funcName).apply(null, [].slice.call(arguments, 1));
}
//# sourceMappingURL=client.js.map

/***/ }),

/***/ 12487:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _client = __webpack_require__(98442);

Object.defineProperty(exports, "caller", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_client).default;
  }
}));
Object.defineProperty(exports, "call", ({
  enumerable: true,
  get: function get() {
    return _client.call;
  }
}));

var _server = __webpack_require__(44586);

Object.defineProperty(exports, "expose", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_server).default;
  }
}));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 44586:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = expose;
function expose(funcName, func, opts) {
  opts = opts || {};

  var addListener = opts.addListener || window.addEventListener;
  var removeListener = opts.removeListener || window.removeEventListener;
  var postMessage = opts.postMessage || window.postMessage;
  var targetOrigin = opts.targetOrigin || '*';
  var getMessageData = opts.getMessageData || function (event) {
    return event.data;
  };
  var isCallback = opts.isCallback || false;

  var handler = function handler() {
    var data = getMessageData.apply(null, arguments);
    if (!data) return;
    if (data.sender !== 'postmsg-rpc/client' || data.func !== funcName) return;

    var msg = { sender: 'postmsg-rpc/server', id: data.id };

    var onSuccess = function onSuccess(res) {
      msg.res = res;
      postMessage(msg, targetOrigin);
    };

    var onError = function onError(err) {
      msg.err = Object.assign({ message: err.message }, err.output && err.output.payload);

      if (false) {}

      postMessage(msg, targetOrigin);
    };

    if (isCallback) {
      func.apply(null, data.args.concat(function (err, res) {
        if (err) return onError(err);
        onSuccess(res);
      }));
    } else {
      var res = func.apply(null, data.args);
      Promise.resolve(res).then(onSuccess).catch(onError);
    }
  };

  addListener('message', handler);

  return { close: function close() {
      return removeListener('message', handler);
    } };
}
//# sourceMappingURL=server.js.map

/***/ }),

/***/ 28685:
/***/ ((module) => {

"use strict";

/* eslint no-proto: 0 */
module.exports = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties)

function setProtoOf (obj, proto) {
  obj.__proto__ = proto
  return obj
}

function mixinProperties (obj, proto) {
  for (var prop in proto) {
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      obj[prop] = proto[prop]
    }
  }
  return obj
}


/***/ }),

/***/ 62260:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(35814);


/***/ }),

/***/ 82820:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var randomFromSeed = __webpack_require__(80506);

var ORIGINAL = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
var alphabet;
var previousSeed;

var shuffled;

function reset() {
    shuffled = false;
}

function setCharacters(_alphabet_) {
    if (!_alphabet_) {
        if (alphabet !== ORIGINAL) {
            alphabet = ORIGINAL;
            reset();
        }
        return;
    }

    if (_alphabet_ === alphabet) {
        return;
    }

    if (_alphabet_.length !== ORIGINAL.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. You submitted ' + _alphabet_.length + ' characters: ' + _alphabet_);
    }

    var unique = _alphabet_.split('').filter(function(item, ind, arr){
       return ind !== arr.lastIndexOf(item);
    });

    if (unique.length) {
        throw new Error('Custom alphabet for shortid must be ' + ORIGINAL.length + ' unique characters. These characters were not unique: ' + unique.join(', '));
    }

    alphabet = _alphabet_;
    reset();
}

function characters(_alphabet_) {
    setCharacters(_alphabet_);
    return alphabet;
}

function setSeed(seed) {
    randomFromSeed.seed(seed);
    if (previousSeed !== seed) {
        reset();
        previousSeed = seed;
    }
}

function shuffle() {
    if (!alphabet) {
        setCharacters(ORIGINAL);
    }

    var sourceArray = alphabet.split('');
    var targetArray = [];
    var r = randomFromSeed.nextValue();
    var characterIndex;

    while (sourceArray.length > 0) {
        r = randomFromSeed.nextValue();
        characterIndex = Math.floor(r * sourceArray.length);
        targetArray.push(sourceArray.splice(characterIndex, 1)[0]);
    }
    return targetArray.join('');
}

function getShuffled() {
    if (shuffled) {
        return shuffled;
    }
    shuffled = shuffle();
    return shuffled;
}

/**
 * lookup shuffled letter
 * @param index
 * @returns {string}
 */
function lookup(index) {
    var alphabetShuffled = getShuffled();
    return alphabetShuffled[index];
}

function get () {
  return alphabet || ORIGINAL;
}

module.exports = {
    get: get,
    characters: characters,
    seed: setSeed,
    lookup: lookup,
    shuffled: getShuffled
};


/***/ }),

/***/ 96521:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var generate = __webpack_require__(59444);
var alphabet = __webpack_require__(82820);

// Ignore all milliseconds before a certain time to reduce the size of the date entropy without sacrificing uniqueness.
// This number should be updated every year or so to keep the generated id short.
// To regenerate `new Date() - 0` and bump the version. Always bump the version!
var REDUCE_TIME = 1567752802062;

// don't change unless we change the algos or REDUCE_TIME
// must be an integer and less than 16
var version = 7;

// Counter is used when shortid is called multiple times in one second.
var counter;

// Remember the last time shortid was called in case counter is needed.
var previousSeconds;

/**
 * Generate unique id
 * Returns string id
 */
function build(clusterWorkerId) {
    var str = '';

    var seconds = Math.floor((Date.now() - REDUCE_TIME) * 0.001);

    if (seconds === previousSeconds) {
        counter++;
    } else {
        counter = 0;
        previousSeconds = seconds;
    }

    str = str + generate(version);
    str = str + generate(clusterWorkerId);
    if (counter > 0) {
        str = str + generate(counter);
    }
    str = str + generate(seconds);
    return str;
}

module.exports = build;


/***/ }),

/***/ 59444:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(82820);
var random = __webpack_require__(39557);
var format = __webpack_require__(23382);

function generate(number) {
    var loopCounter = 0;
    var done;

    var str = '';

    while (!done) {
        str = str + format(random, alphabet.get(), 1);
        done = number < (Math.pow(16, loopCounter + 1 ) );
        loopCounter++;
    }
    return str;
}

module.exports = generate;


/***/ }),

/***/ 35814:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabet = __webpack_require__(82820);
var build = __webpack_require__(96521);
var isValid = __webpack_require__(89833);

// if you are using cluster or multiple servers use this to make each instance
// has a unique value for worker
// Note: I don't know if this is automatically set when using third
// party cluster solutions such as pm2.
var clusterWorkerId = __webpack_require__(92464) || 0;

/**
 * Set the seed.
 * Highly recommended if you don't want people to try to figure out your id schema.
 * exposed as shortid.seed(int)
 * @param seed Integer value to seed the random alphabet.  ALWAYS USE THE SAME SEED or you might get overlaps.
 */
function seed(seedValue) {
    alphabet.seed(seedValue);
    return module.exports;
}

/**
 * Set the cluster worker or machine id
 * exposed as shortid.worker(int)
 * @param workerId worker must be positive integer.  Number less than 16 is recommended.
 * returns shortid module so it can be chained.
 */
function worker(workerId) {
    clusterWorkerId = workerId;
    return module.exports;
}

/**
 *
 * sets new characters to use in the alphabet
 * returns the shuffled alphabet
 */
function characters(newCharacters) {
    if (newCharacters !== undefined) {
        alphabet.characters(newCharacters);
    }

    return alphabet.shuffled();
}

/**
 * Generate unique id
 * Returns string id
 */
function generate() {
  return build(clusterWorkerId);
}

// Export all other functions as properties of the generate function
module.exports = generate;
module.exports.generate = generate;
module.exports.seed = seed;
module.exports.worker = worker;
module.exports.characters = characters;
module.exports.isValid = isValid;


/***/ }),

/***/ 89833:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var alphabet = __webpack_require__(82820);

function isShortId(id) {
    if (!id || typeof id !== 'string' || id.length < 6 ) {
        return false;
    }

    var nonAlphabetic = new RegExp('[^' +
      alphabet.get().replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&') +
    ']');
    return !nonAlphabetic.test(id);
}

module.exports = isShortId;


/***/ }),

/***/ 39557:
/***/ ((module) => {

"use strict";


var crypto = typeof window === 'object' && (window.crypto || window.msCrypto); // IE 11 uses window.msCrypto

var randomByte;

if (!crypto || !crypto.getRandomValues) {
    randomByte = function(size) {
        var bytes = [];
        for (var i = 0; i < size; i++) {
            bytes.push(Math.floor(Math.random() * 256));
        }
        return bytes;
    };
} else {
    randomByte = function(size) {
        return crypto.getRandomValues(new Uint8Array(size));
    };
}

module.exports = randomByte;


/***/ }),

/***/ 80506:
/***/ ((module) => {

"use strict";


// Found this seed-based random generator somewhere
// Based on The Central Randomizer 1.3 (C) 1997 by Paul Houle (houle@msc.cornell.edu)

var seed = 1;

/**
 * return a random number based on a seed
 * @param seed
 * @returns {number}
 */
function getNextValue() {
    seed = (seed * 9301 + 49297) % 233280;
    return seed/(233280.0);
}

function setSeed(_seed_) {
    seed = _seed_;
}

module.exports = {
    nextValue: getNextValue,
    seed: setSeed
};


/***/ }),

/***/ 92464:
/***/ ((module) => {

"use strict";


module.exports = 0;


/***/ }),

/***/ 36897:
/***/ ((module) => {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),

/***/ 37227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var codes = __webpack_require__(14656)

/**
 * Module exports.
 * @public
 */

module.exports = status

// status code to message map
status.STATUS_CODES = codes

// array of status codes
status.codes = populateStatusesMap(status, codes)

// status codes for redirects
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
}

// status codes for empty bodies
status.empty = {
  204: true,
  205: true,
  304: true
}

// status codes for when you should retry the request
status.retry = {
  502: true,
  503: true,
  504: true
}

/**
 * Populate the statuses map for given codes.
 * @private
 */

function populateStatusesMap (statuses, codes) {
  var arr = []

  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code]
    var status = Number(code)

    // Populate properties
    statuses[status] = message
    statuses[message] = status
    statuses[message.toLowerCase()] = status

    // Add to array
    arr.push(status)
  })

  return arr
}

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */

function status (code) {
  if (typeof code === 'number') {
    if (!status[code]) throw new Error('invalid status code: ' + code)
    return code
  }

  if (typeof code !== 'string') {
    throw new TypeError('code must be a number or string')
  }

  // '403'
  var n = parseInt(code, 10)
  if (!isNaN(n)) {
    if (!status[n]) throw new Error('invalid status code: ' + n)
    return n
  }

  n = status[code.toLowerCase()]
  if (!n) throw new Error('invalid status message: "' + code + '"')
  return n
}


/***/ }),

/***/ 30309:
/***/ ((module) => {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),

/***/ 21181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SNSAdaptor)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(35667);
// EXTERNAL MODULE: ../plugin-infra/src/entry-content-script.ts
var entry_content_script = __webpack_require__(20778);
// EXTERNAL MODULE: ../plugins/CyberConnect/src/base.tsx
var base = __webpack_require__(51024);
// EXTERNAL MODULE: ../icons/utils/index.tsx
var utils = __webpack_require__(50498);
;// CONCATENATED MODULE: ../icons/plugins/CyberConnect.tsx


const CyberConnectIcon = (0,utils/* createPaletteAwareIcon */.t)('CyberConnect', /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M20.8194 14.1385L29.6618 23.2918C29.768 23.4001 29.8525 23.529 29.9105 23.6712C29.9685 23.8133 29.9989 23.9659 30 24.1202C30.001 24.2745 29.9727 24.4275 29.9165 24.5705C29.8604 24.7135 29.7777 24.8436 29.673 24.9535L29.0242 25.6228C28.8418 25.8206 28.601 25.9497 28.3397 25.9897C28.1672 26.0136 27.9917 25.9958 27.8269 25.9377C27.6621 25.8797 27.5126 25.7829 27.3899 25.6551L16.5922 14.4778C16.4045 14.2838 16.2556 14.0534 16.1539 13.7997C16.0523 13.5461 16 13.2742 16 12.9996C16 12.725 16.0523 12.4531 16.1539 12.1994C16.2556 11.9458 16.4045 11.7153 16.5922 11.5213L27.3899 0.344062C27.4951 0.234991 27.62 0.148459 27.7576 0.0894208C27.8951 0.0303825 28.0425 0 28.1914 0C28.3403 0 28.4877 0.0303825 28.6253 0.0894208C28.7628 0.148459 28.8878 0.234991 28.993 0.344062L29.6618 1.04798C29.7672 1.15687 29.8508 1.2862 29.9078 1.42856C29.9648 1.57093 29.9942 1.72354 29.9942 1.87767C29.9942 2.03179 29.9648 2.1844 29.9078 2.32677C29.8508 2.46914 29.7672 2.59848 29.6618 2.70738L20.8194 11.8629C20.5294 12.1655 20.3667 12.5745 20.3667 13.0007C20.3667 13.427 20.5294 13.8359 20.8194 14.1385ZM9.18017 11.8726L0.341223 2.71698C0.233969 2.60853 0.148579 2.47911 0.0900066 2.33622C0.0314345 2.19333 0.000846678 2.03982 1.73677e-05 1.88459C-0.000811943 1.72936 0.0281358 1.5755 0.0851776 1.43194C0.142219 1.28839 0.226225 1.158 0.332313 1.04833L0.978629 0.376712C1.16268 0.180155 1.40373 0.0512975 1.66506 0.00975571C1.83749 -0.0133774 2.01275 0.00476068 2.17734 0.0627778C2.34194 0.120795 2.49149 0.217133 2.61448 0.344398L13.408 11.5218C13.5957 11.7158 13.7445 11.9463 13.8461 12.1999C13.9477 12.4536 14 12.7255 14 13.0001C14 13.2747 13.9477 13.5466 13.8461 13.8002C13.7445 14.0539 13.5957 14.2843 13.408 14.4783L2.61448 25.6557C2.50913 25.7649 2.38405 25.8515 2.24639 25.9105C2.10872 25.9696 1.96117 26 1.81215 26C1.66314 26 1.51558 25.9696 1.37792 25.9105C1.24025 25.8515 1.11517 25.7649 1.00983 25.6557L0.341223 24.9634C0.235829 24.8543 0.152224 24.7247 0.0951825 24.5822C0.038141 24.4396 0.00878436 24.2868 0.00878436 24.1325C0.00878436 23.9782 0.038141 23.8254 0.0951825 23.6828C0.152224 23.5402 0.235829 23.4107 0.341223 23.3016L9.18017 14.1483C9.47006 13.8457 9.63272 13.4367 9.63272 13.0104C9.63272 12.5842 9.47006 12.1752 9.18017 11.8726Z",
        fill: "black"
    })
}), /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.8194 14.1385L29.6618 23.2918C29.768 23.4001 29.8525 23.529 29.9105 23.6712C29.9685 23.8133 29.9989 23.9659 30 24.1202C30.001 24.2745 29.9727 24.4275 29.9165 24.5705C29.8604 24.7135 29.7777 24.8436 29.673 24.9535L29.0242 25.6228C28.8418 25.8206 28.601 25.9497 28.3397 25.9897C28.1672 26.0136 27.9917 25.9958 27.8269 25.9377C27.6621 25.8797 27.5126 25.7829 27.3899 25.6551L16.5922 14.4778C16.4045 14.2838 16.2556 14.0534 16.1539 13.7997C16.0523 13.5461 16 13.2742 16 12.9996C16 12.725 16.0523 12.4531 16.1539 12.1994C16.2556 11.9458 16.4045 11.7153 16.5922 11.5213L27.3899 0.344062C27.4951 0.234991 27.62 0.148459 27.7576 0.0894208C27.8951 0.0303825 28.0425 0 28.1914 0C28.3403 0 28.4877 0.0303825 28.6253 0.0894208C28.7628 0.148459 28.8878 0.234991 28.993 0.344062L29.6618 1.04798C29.7672 1.15687 29.8508 1.2862 29.9078 1.42856C29.9648 1.57093 29.9942 1.72354 29.9942 1.87767C29.9942 2.03179 29.9648 2.1844 29.9078 2.32677C29.8508 2.46914 29.7672 2.59848 29.6618 2.70738L20.8194 11.8629C20.5294 12.1655 20.3667 12.5745 20.3667 13.0007C20.3667 13.427 20.5294 13.8359 20.8194 14.1385ZM9.18017 11.8726L0.341223 2.71698C0.233969 2.60853 0.148579 2.47911 0.0900066 2.33622C0.0314345 2.19333 0.000846678 2.03982 1.73677e-05 1.88459C-0.000811943 1.72936 0.0281358 1.5755 0.0851776 1.43194C0.142219 1.28839 0.226225 1.158 0.332313 1.04833L0.978629 0.376712C1.16268 0.180155 1.40373 0.0512975 1.66506 0.00975571C1.83749 -0.0133774 2.01275 0.00476068 2.17734 0.0627778C2.34194 0.120795 2.49149 0.217133 2.61448 0.344398L13.408 11.5218C13.5957 11.7158 13.7445 11.9463 13.8461 12.1999C13.9477 12.4536 14 12.7255 14 13.0001C14 13.2747 13.9477 13.5466 13.8461 13.8002C13.7445 14.0539 13.5957 14.2843 13.408 14.4783L2.61448 25.6557C2.50913 25.7649 2.38405 25.8515 2.24639 25.9105C2.10872 25.9696 1.96117 26 1.81215 26C1.66314 26 1.51558 25.9696 1.37792 25.9105C1.24025 25.8515 1.11517 25.7649 1.00983 25.6557L0.341223 24.9634C0.235829 24.8543 0.152224 24.7247 0.0951825 24.5822C0.038141 24.4396 0.00878436 24.2868 0.00878436 24.1325C0.00878436 23.9782 0.038141 23.8254 0.0951825 23.6828C0.152224 23.5402 0.235829 23.4107 0.341223 23.3016L9.18017 14.1483C9.47006 13.8457 9.63272 13.4367 9.63272 13.0104C9.63272 12.5842 9.47006 12.1752 9.18017 11.8726Z",
    fill: "black"
}), undefined, '-8 -10 44 44');

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.1.0/node_modules/react/index.js
var react = __webpack_require__(58757);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 2 modules
var typed_message_base = __webpack_require__(80681);
// EXTERNAL MODULE: ../theme/src/entry.ts
var entry = __webpack_require__(31939);
// EXTERNAL MODULE: ../plugins/CyberConnect/src/messages.ts
var messages = __webpack_require__(41209);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Typography/Typography.js + 1 modules
var Typography = __webpack_require__(21784);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Skeleton/Skeleton.js + 2 modules
var Skeleton = __webpack_require__(51129);
// EXTERNAL MODULE: ../web3-shared/evm/utils/formatter.ts
var formatter = __webpack_require__(5326);
// EXTERNAL MODULE: ../../node_modules/.pnpm/boring-avatars@1.6.3/node_modules/boring-avatars/build/index.js
var build = __webpack_require__(11012);
var build_default = /*#__PURE__*/__webpack_require__.n(build);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 1 modules
var base_src = __webpack_require__(67938);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts + 1 modules
var entry_web3 = __webpack_require__(50719);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@cyberlab+cyberconnect@4.2.2/node_modules/@cyberlab/cyberconnect/lib/index.js
var lib = __webpack_require__(70820);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(76618);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/CircularProgress/CircularProgress.js + 1 modules
var CircularProgress = __webpack_require__(69314);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsync.js
var useAsync = __webpack_require__(70981);
;// CONCATENATED MODULE: ../plugins/CyberConnect/src/SNSAdaptor/ConnectButton.tsx









const useStyles = (0,entry/* makeStyles */.ZL)()(()=>({
        button: {
            width: '350px',
            display: 'flex',
            alignItems: 'center',
            background: entry/* MaskColorVar.cyberconnectPrimary */.ZN.cyberconnectPrimary,
            fontSize: '20px',
            color: entry/* MaskColorVar.twitterBottom */.ZN.twitterBottom,
            marginTop: '30px',
            borderRadius: '4px',
            padding: '20px 20px 20px 30px',
            transition: 'all .3s ease',
            '>svg': {
                marginRight: '20px',
                transition: 'all .3s ease'
            },
            cursor: 'pointer',
            '&:hover': {
                opacity: 0.8,
                '>svg': {
                    '&:nth-of-type(1)': {
                        transformOrigin: 'calc(100% + 1px) center',
                        transform: 'rotate(-45deg) translate(2px,0)'
                    },
                    '&:nth-of-type(2)': {
                        transformOrigin: '-1px center',
                        transform: 'rotate(135deg) translate(-8px,0)'
                    }
                }
            }
        },
        isFollowing: {
            '&:hover': {
                opacity: 1
            },
            '>svg': {
                '&:nth-of-type(1)': {
                    transformOrigin: 'calc(100% + 1px) center',
                    transform: 'rotate(-45deg) translate(2px,0)'
                },
                '&:nth-of-type(2)': {
                    transformOrigin: '-1px center',
                    transform: 'rotate(135deg) translate(-8px,0)'
                }
            }
        },
        reverse: {
            transform: 'rotate(180deg)',
            marginLeft: '-18px'
        }
    })
);
const Logo = function() {
    const { classes  } = useStyles();
    const mode = (0,useTheme/* default */.Z)().palette.mode;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                width: "9",
                height: "16",
                viewBox: "0 0 9 16",
                fill: mode === 'light' ? '#fff' : '#000',
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M0.21737 1.67136L5.84807 7.30347C6.03273 7.48961 6.13636 7.74119 6.13636 8.0034C6.13636 8.26561 6.03273 8.51719 5.84807 8.70333L0.21737 14.334C0.150231 14.4011 0.0969715 14.4808 0.0606343 14.5685C0.024297 14.6562 0.0055959 14.7502 0.0055959 14.8451C0.0055959 14.9401 0.024297 15.0341 0.0606343 15.1218C0.0969715 15.2095 0.150231 15.2891 0.21737 15.3562L0.643293 15.7822C0.710401 15.8493 0.790081 15.9026 0.877779 15.9389C0.965476 15.9752 1.05947 15.9939 1.1544 15.9939C1.24933 15.9939 1.34332 15.9752 1.43102 15.9389C1.51872 15.9026 1.5984 15.8493 1.66551 15.7822L8.54132 8.90636C8.66087 8.78702 8.75572 8.64527 8.82043 8.48923C8.88514 8.3332 8.91845 8.16594 8.91845 7.99701C8.91845 7.82809 8.88514 7.66083 8.82043 7.50479C8.75572 7.34876 8.66087 7.20701 8.54132 7.08767L1.66551 0.211857C1.58716 0.13357 1.49189 0.0743072 1.38704 0.0386179C1.28218 0.00292854 1.17054 -0.00822914 1.0607 0.00600124C0.894222 0.0315557 0.740666 0.110823 0.623418 0.231735L0.211694 0.644885C0.144112 0.712348 0.0905984 0.792554 0.0542609 0.880862C0.0179234 0.969169 -0.000517259 1.06382 1.1038e-05 1.15931C0.000539335 1.2548 0.0200247 1.34923 0.0573371 1.43713C0.0946495 1.52503 0.149046 1.60464 0.21737 1.67136Z"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("svg", {
                className: classes.reverse,
                width: "9",
                height: "16",
                viewBox: "0 0 9 16",
                fill: mode === 'light' ? '#fff' : '#000',
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "M0.21737 1.67136L5.84807 7.30347C6.03273 7.48961 6.13636 7.74119 6.13636 8.0034C6.13636 8.26561 6.03273 8.51719 5.84807 8.70333L0.21737 14.334C0.150231 14.4011 0.0969715 14.4808 0.0606343 14.5685C0.024297 14.6562 0.0055959 14.7502 0.0055959 14.8451C0.0055959 14.9401 0.024297 15.0341 0.0606343 15.1218C0.0969715 15.2095 0.150231 15.2891 0.21737 15.3562L0.643293 15.7822C0.710401 15.8493 0.790081 15.9026 0.877779 15.9389C0.965476 15.9752 1.05947 15.9939 1.1544 15.9939C1.24933 15.9939 1.34332 15.9752 1.43102 15.9389C1.51872 15.9026 1.5984 15.8493 1.66551 15.7822L8.54132 8.90636C8.66087 8.78702 8.75572 8.64527 8.82043 8.48923C8.88514 8.3332 8.91845 8.16594 8.91845 7.99701C8.91845 7.82809 8.88514 7.66083 8.82043 7.50479C8.75572 7.34876 8.66087 7.20701 8.54132 7.08767L1.66551 0.211857C1.58716 0.13357 1.49189 0.0743072 1.38704 0.0386179C1.28218 0.00292854 1.17054 -0.00822914 1.0607 0.00600124C0.894222 0.0315557 0.740666 0.110823 0.623418 0.231735L0.211694 0.644885C0.144112 0.712348 0.0905984 0.792554 0.0542609 0.880862C0.0179234 0.969169 -0.000517259 1.06382 1.1038e-05 1.15931C0.000539335 1.2548 0.0200247 1.34923 0.0573371 1.43713C0.0946495 1.52503 0.149046 1.60464 0.21737 1.67136Z"
                })
            })
        ]
    });
};
function ConnectButton({ address , refreshFollowList  }) {
    const { classes , cx  } = useStyles();
    const web3 = (0,entry_web3/* useWeb3 */.$6)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const myAddress = (0,entry_web3/* useAccount */.mA)(base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM);
    const [cc, setCC] = (0,react.useState)(null);
    const [isFollowing, setFollowing] = (0,react.useState)(false);
    const [isLoading, setLoading] = (0,react.useState)(false);
    const blockChainNetwork = (0,entry_web3/* useCurrentWeb3NetworkPluginID */.$f)();
    (0,useAsync/* default */.Z)(async ()=>{
        if ((0,base_src/* isSameAddress */.Wr)(myAddress, address)) return;
        const res = await messages/* PluginCyberConnectRPC.fetchFollowStatus */.Y.fetchFollowStatus(myAddress, address);
        setFollowing(res.data.followStatus.isFollowing);
    }, [
        address,
        myAddress
    ]);
    (0,react.useEffect)(()=>{
        if (!web3?.eth.currentProvider) return;
        const ccInstance = new (lib_default())({
            provider: web3.eth.currentProvider,
            namespace: 'Mask',
            env:  true ? lib.Env.PRODUCTION : 0
        });
        setCC(ccInstance);
    }, [
        web3,
        myAddress
    ]);
    const handleClick = (0,react.useCallback)(()=>{
        if (!cc) return;
        setLoading(true);
        if (!isFollowing) {
            cc.connect(address).then(()=>{
                setFollowing(true);
                refreshFollowList();
            }).finally(()=>setLoading(false)
            );
        } else {
            cc.disconnect(address).then(()=>{
                setFollowing(false);
                refreshFollowList();
            }).finally(()=>setLoading(false)
            );
        }
    }, [
        cc,
        myAddress,
        isFollowing
    ]);
    if (blockChainNetwork !== base_src/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
            variant: "body2",
            sx: {
                marginTop: 2,
                color: entry/* MaskColorVar.cyberconnectPrimary */.ZN.cyberconnectPrimary
            },
            children: "Please switch to EVM-based wallet to follow"
        });
    } else if (!(0,base_src/* isSameAddress */.Wr)(myAddress, address)) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: cx(classes.button, {
                [classes.isFollowing]: isFollowing
            }),
            onClick: handleClick,
            children: !isLoading ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Logo, {}),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                        variant: "button",
                        children: !isFollowing ? 'Follow Now' : 'Following'
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(CircularProgress/* default */.Z, {
                size: 30,
                sx: {
                    marginLeft: '154px'
                }
            })
        });
    }
    return null;
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Box/Box.js
var Box = __webpack_require__(96436);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+material@5.8.0_4xriuibr7qayay6mzcpq5f43me/node_modules/@mui/material/Tab/Tab.js
var Tab = __webpack_require__(65845);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabContext/TabContext.js
var TabContext = __webpack_require__(92916);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabList/TabList.js
var TabList = __webpack_require__(29188);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@mui+lab@5.0.0-alpha.82_ygk7qgdlnpugkmqdrmzyce476m/node_modules/@mui/lab/TabPanel/TabPanel.js + 1 modules
var TabPanel = __webpack_require__(38419);
;// CONCATENATED MODULE: ../plugins/CyberConnect/src/SNSAdaptor/FollowTab.tsx











const FollowTab_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        tabContext: {
            marginTop: '20px'
        },
        tabPanel: {
            height: '400px',
            overflow: 'auto',
            '::-webkit-scrollbar': {
                display: 'none'
            }
        },
        followRow: {
            display: 'flex',
            alignItems: 'center',
            height: '60px',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        },
        avatarWrapper: {
            svg: {
                borderRadius: '100%'
            }
        },
        user: {
            marginLeft: '20px'
        },
        userName: {
            fontSize: '16px'
        },
        namespace: {
            opacity: 0.6,
            fontSize: '12px'
        }
    })
);
function FollowTab({ followingList , followerList  }) {
    const { classes  } = FollowTab_useStyles();
    const [tab, setTab] = (0,react.useState)('1');
    const handleChange = (event, newValue)=>{
        setTab(newValue);
    };
    const FollowRow = ({ identity  })=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: classes.followRow,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: classes.avatarWrapper,
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)((build_default()), {
                        square: false,
                        name: identity.ens || identity.address,
                        size: 40
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: classes.user,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                            className: classes.userName,
                            component: "div",
                            children: identity.ens || (0,formatter/* formatEthereumAddress */.j8)(identity.address, 16)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Typography/* default */.Z, {
                            className: classes.namespace,
                            component: "div",
                            children: [
                                "From ",
                                identity.namespace
                            ]
                        })
                    ]
                })
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabContext/* default */.ZP, {
        value: tab,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Box/* default */.Z, {
                sx: {
                    width: '100%',
                    marginTop: '40px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(TabList/* default */.Z, {
                    sx: {
                        width: '100%',
                        color: 'black',
                        fontSize: '18px',
                        ' .MuiTabs-indicator': {
                            backgroundColor: 'black',
                            height: '3px'
                        },
                        ' .Mui-selected': {
                            color: 'black !important',
                            opacity: 1
                        },
                        ' .MuiTab-textColorPrimary': {
                            color: 'black !important',
                            fontSize: '18px',
                            textAlign: 'center'
                        }
                    },
                    onChange: handleChange,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            sx: {
                                width: '50%',
                                height: '60px'
                            },
                            label: "Followings",
                            value: "1"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Tab/* default */.Z, {
                            sx: {
                                width: '50%',
                                height: '60px'
                            },
                            label: "Followers",
                            value: "2"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                className: classes.tabPanel,
                value: "1",
                sx: {
                    color: 'black',
                    width: '100%'
                },
                children: followingList.map((f)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FollowRow, {
                        identity: f
                    }, f.address);
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(TabPanel/* default */.Z, {
                className: classes.tabPanel,
                value: "2",
                sx: {
                    color: 'black',
                    width: '100%'
                },
                children: followerList.map((f)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsx)(FollowRow, {
                        identity: f
                    }, f.address);
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ../../node_modules/.pnpm/react-use@17.4.0/node_modules/react-use/esm/useAsyncRetry.js
var useAsyncRetry = __webpack_require__(58500);
;// CONCATENATED MODULE: ../plugins/CyberConnect/src/SNSAdaptor/Profile.tsx









const Profile_useStyles = (0,entry/* makeStyles */.ZL)()((theme)=>({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(1),
            overflow: 'hidden'
        },
        avatar: {
            width: '300px',
            height: '300px',
            borderRadius: '10px',
            overflow: 'hidden',
            svg: {
                borderRadius: '4px'
            },
            transition: 'all .3s ease',
            '&:hover': {
                borderRadius: '40px',
                transform: 'rotate(-5deg)',
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.5)'
            }
        },
        userName: {
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: '32px',
            lineHeight: '35px',
            width: '350px',
            textAlign: 'center',
            wordBreak: 'break-word',
            marginTop: '20px',
            color: 'black'
        },
        address: {
            marginTop: '20px',
            opacity: 0.6,
            color: 'black'
        },
        socialMedia: {
            width: '100%',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            marginTop: '20px'
        },
        icon: {
            display: 'block',
            width: '30px',
            height: '30px',
            marginLeft: '15px',
            cursor: 'pointer'
        },
        author: {
            fill: entry/* MaskColorVar.secondaryBackground */.ZN.secondaryBackground,
            cursor: 'pointer'
        }
    })
);
const Profile = ({ url  })=>{
    const { classes  } = Profile_useStyles();
    const [, , , , queryAddress] = url.split('/');
    const { value: identity , loading , retry ,  } = (0,useAsyncRetry/* default */.Z)(async ()=>{
        const res = await messages/* PluginCyberConnectRPC.fetchIdentity */.Y.fetchIdentity(queryAddress);
        return res.data.identity;
    }, [
        queryAddress
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: classes.root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: classes.avatar,
                children: identity?.avatar ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                    src: identity.avatar,
                    alt: "",
                    width: 300,
                    height: 300
                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)((build_default()), {
                    name: queryAddress,
                    square: true,
                    size: 300
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.userName,
                component: "div",
                children: identity?.ens || (0,formatter/* formatEthereumAddress */.j8)(queryAddress, 4)
            }),
            !identity ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                width: 400,
                height: 40
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(Typography/* default */.Z, {
                className: classes.address,
                component: "div",
                children: identity.address
            }),
            !loading ? identity ? /*#__PURE__*/ (0,jsx_runtime.jsx)(ConnectButton, {
                address: identity?.address,
                refreshFollowList: retry
            }) : null : /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                width: 400,
                height: 68
            }),
            !identity ? /*#__PURE__*/ (0,jsx_runtime.jsx)(Skeleton/* default */.Z, {
                width: 400,
                height: 100
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(FollowTab, {
                followingList: identity.followings.list,
                followerList: identity.followers.list
            })
        ]
    });
};
/* harmony default export */ const SNSAdaptor_Profile = (Profile);

;// CONCATENATED MODULE: ../plugins/CyberConnect/src/SNSAdaptor/index.tsx








const isCyberConnectUrl = (x)=>x.includes('app.cyberconnect.me')
;
function Renderer({ url  }) {
    (0,entry_content_script/* usePluginWrapper */.fI)(true);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(SNSAdaptor_Profile, {
        url: url
    });
}
const sns = {
    ...base/* base */.u,
    init (signal) {},
    DecryptedInspector: function Component(props) {
        const link = (0,react.useMemo)(()=>{
            const x = (0,typed_message_base/* extractTextFromTypedMessage */.Vc)(props.message);
            if (x.none) return null;
            return (0,src/* parseURL */.Lk)(x.val).find(isCyberConnectUrl);
        }, [
            props.message
        ]);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    PostInspector: function Component() {
        const link = entry_content_script/* usePostInfoDetails.mentionedLinks */.H9.mentionedLinks().find(isCyberConnectUrl);
        if (!link) return null;
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(Renderer, {
            url: link
        });
    },
    ApplicationEntries: [
        {
            ApplicationEntryID: base/* base.ID */.u.ID,
            category: 'dapp',
            marketListSortingPriority: 17,
            description: {
                i18nKey: '__plugin_description',
                fallback: 'Decentralized social graph protocol for user-centric Web3.'
            },
            name: {
                i18nKey: '__plugin_name',
                fallback: 'CyberConnect'
            },
            icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CyberConnectIcon, {}),
            tutorialLink: 'https://cyberconnect.me/'
        }, 
    ],
    wrapperProps: {
        icon: /*#__PURE__*/ (0,jsx_runtime.jsx)(CyberConnectIcon, {
            style: {
                width: 24,
                height: 24,
                filter: 'drop-shadow(0px 6px 12px rgba(27, 144, 238, 0.2))'
            }
        }),
        backgroundGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, rgba(28, 104, 243, 0.2) 0%, rgba(45, 41, 253, 0.2) 100%), #FFFFFF;'
    }
};
/* harmony default export */ const SNSAdaptor = (sns);


/***/ }),

/***/ 41209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ PluginCyberConnectRPC)
/* harmony export */ });
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70226);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74183);


if (false) {}
const PluginCyberConnectMessages = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .CYBERCONNECT_PLUGIN_ID */ .k);
const PluginCyberConnectRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .CYBERCONNECT_PLUGIN_ID */ .k, ()=>__webpack_require__.e(/* import() */ 2777).then(__webpack_require__.bind(__webpack_require__, 72777))
, PluginCyberConnectMessages.rpc);


/***/ }),

/***/ 54844:
/***/ ((module) => {

"use strict";
/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = toIdentifier

/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */

function toIdentifier (str) {
  return str
    .split(' ')
    .map(function (token) {
      return token.slice(0, 1).toUpperCase() + token.slice(1)
    })
    .join('')
    .replace(/[^ _0-9a-z]/gi, '')
}


/***/ }),

/***/ 30851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Memoize": () => (/* binding */ Memoize),
/* harmony export */   "MemoizeExpiring": () => (/* binding */ MemoizeExpiring),
/* harmony export */   "clear": () => (/* binding */ clear)
/* harmony export */ });
function Memoize(args) {
    let hashFunction;
    let duration;
    let tags;
    if (typeof args === 'object') {
        hashFunction = args.hashFunction;
        duration = args.expiring;
        tags = args.tags;
    }
    else {
        hashFunction = args;
    }
    return (target, propertyKey, descriptor) => {
        if (descriptor.value != null) {
            descriptor.value = getNewFunction(descriptor.value, hashFunction, duration, tags);
        }
        else if (descriptor.get != null) {
            descriptor.get = getNewFunction(descriptor.get, hashFunction, duration, tags);
        }
        else {
            throw 'Only put a Memoize() decorator on a method or get accessor.';
        }
    };
}
function MemoizeExpiring(expiring, hashFunction) {
    return Memoize({
        expiring,
        hashFunction
    });
}
const clearCacheTagsMap = new Map();
function clear(tags) {
    const cleared = new Set();
    for (const tag of tags) {
        const maps = clearCacheTagsMap.get(tag);
        if (maps) {
            for (const mp of maps) {
                if (!cleared.has(mp)) {
                    mp.clear();
                    cleared.add(mp);
                }
            }
        }
    }
    return cleared.size;
}
function getNewFunction(originalMethod, hashFunction, duration = 0, tags) {
    const propMapName = Symbol(`__memoized_map__`);
    return function (...args) {
        let returnedValue;
        if (!this.hasOwnProperty(propMapName)) {
            Object.defineProperty(this, propMapName, {
                configurable: false,
                enumerable: false,
                writable: false,
                value: new Map()
            });
        }
        let myMap = this[propMapName];
        if (Array.isArray(tags)) {
            for (const tag of tags) {
                if (clearCacheTagsMap.has(tag)) {
                    clearCacheTagsMap.get(tag).push(myMap);
                }
                else {
                    clearCacheTagsMap.set(tag, [myMap]);
                }
            }
        }
        if (hashFunction || args.length > 0 || duration > 0) {
            let hashKey;
            if (hashFunction === true) {
                hashKey = args.map(a => a.toString()).join('!');
            }
            else if (hashFunction) {
                hashKey = hashFunction.apply(this, args);
            }
            else {
                hashKey = args[0];
            }
            const timestampKey = `${hashKey}__timestamp`;
            let isExpired = false;
            if (duration > 0) {
                if (!myMap.has(timestampKey)) {
                    isExpired = true;
                }
                else {
                    let timestamp = myMap.get(timestampKey);
                    isExpired = (Date.now() - timestamp) > duration;
                }
            }
            if (myMap.has(hashKey) && !isExpired) {
                returnedValue = myMap.get(hashKey);
            }
            else {
                returnedValue = originalMethod.apply(this, args);
                myMap.set(hashKey, returnedValue);
                if (duration > 0) {
                    myMap.set(timestampKey, Date.now());
                }
            }
        }
        else {
            const hashKey = this;
            if (myMap.has(hashKey)) {
                returnedValue = myMap.get(hashKey);
            }
            else {
                returnedValue = originalMethod.apply(this, args);
                myMap.set(hashKey, returnedValue);
            }
        }
        return returnedValue;
    };
}
//# sourceMappingURL=memoize-decorator.js.map

/***/ }),

/***/ 50309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(99311);

/***/ }),

/***/ 37511:
/***/ ((module) => {

var cache = function (fn) {
    var called = false,
        store;

    if (!(fn instanceof Function)) {
        called = true;
        store = fn;
        fn = null;
    }

    return function () {
        if (!called) {
            called = true;
            store = fn.apply(this, arguments);
            fn = null;
        }
        return store;
    };
};

module.exports = cache;

/***/ }),

/***/ 33066:
/***/ ((module) => {

module.exports = function eachCombination(alternativesByDimension, callback, combination) {
    if (!combination)
        combination = [];
    if (combination.length < alternativesByDimension.length) {
        var alternatives = alternativesByDimension[combination.length];
        for (var index in alternatives) {
            combination[combination.length] = alternatives[index];
            eachCombination(alternativesByDimension, callback, combination);
            --combination.length;
        }
    }
    else
        callback.apply(null, combination);
};

/***/ }),

/***/ 99311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
    cache: __webpack_require__(37511),
    eachCombination: __webpack_require__(33066)
};

/***/ }),

/***/ 59821:
/***/ ((module) => {

"use strict";


/**
 * Can be used with Array.sort to sort and array with Uint8Array entries
 *
 * @param {Uint8Array} a
 * @param {Uint8Array} b
 */
function compare (a, b) {
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] < b[i]) {
      return -1
    }

    if (a[i] > b[i]) {
      return 1
    }
  }

  if (a.byteLength > b.byteLength) {
    return 1
  }

  if (a.byteLength < b.byteLength) {
    return -1
  }

  return 0
}

module.exports = compare


/***/ }),

/***/ 36713:
/***/ ((module) => {

"use strict";


/**
 * Returns a new Uint8Array created by concatenating the passed ArrayLikes
 *
 * @param {Array<ArrayLike<number>>} arrays
 * @param {number} [length]
 */
function concat (arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0)
  }

  const output = new Uint8Array(length)
  let offset = 0

  for (const arr of arrays) {
    output.set(arr, offset)
    offset += arr.length
  }

  return output
}

module.exports = concat


/***/ }),

/***/ 53002:
/***/ ((module) => {

"use strict";


/**
 * Returns true if the two passed Uint8Arrays have the same content
 *
 * @param {Uint8Array} a
 * @param {Uint8Array} b
 */
function equals (a, b) {
  if (a === b) {
    return true
  }

  if (a.byteLength !== b.byteLength) {
    return false
  }

  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false
    }
  }

  return true
}

module.exports = equals


/***/ }),

/***/ 39528:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const bases = __webpack_require__(30252)

/**
 * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings
 */

/**
 * Create a `Uint8Array` from the passed string
 *
 * Supports `utf8`, `utf-8`, `hex`, and any encoding supported by the multiformats module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {string} string
 * @param {SupportedEncodings} [encoding=utf8] - utf8, base16, base64, base64urlpad, etc
 * @returns {Uint8Array}
 */
function fromString (string, encoding = 'utf8') {
  const base = bases[encoding]

  if (!base) {
    throw new Error(`Unsupported encoding "${encoding}"`)
  }

  // add multibase prefix
  return base.decoder.decode(`${base.prefix}${string}`)
}

module.exports = fromString


/***/ }),

/***/ 31605:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const compare = __webpack_require__(59821)
const concat = __webpack_require__(36713)
const equals = __webpack_require__(53002)
const fromString = __webpack_require__(39528)
const toString = __webpack_require__(48270)
const xor = __webpack_require__(73030)

module.exports = {
  compare,
  concat,
  equals,
  fromString,
  toString,
  xor
}


/***/ }),

/***/ 48270:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const bases = __webpack_require__(30252)

/**
 * @typedef {import('./util/bases').SupportedEncodings} SupportedEncodings
 */

/**
 * Turns a `Uint8Array` into a string.
 *
 * Supports `utf8`, `utf-8` and any encoding supported by the multibase module.
 *
 * Also `ascii` which is similar to node's 'binary' encoding.
 *
 * @param {Uint8Array} array - The array to turn into a string
 * @param {SupportedEncodings} [encoding=utf8] - The encoding to use
 * @returns {string}
 */
function toString (array, encoding = 'utf8') {
  const base = bases[encoding]

  if (!base) {
    throw new Error(`Unsupported encoding "${encoding}"`)
  }

  // strip multibase prefix
  return base.encoder.encode(array).substring(1)
}

module.exports = toString


/***/ }),

/***/ 30252:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
  

const { bases } = __webpack_require__(19261)

/**
 * @typedef {import('multiformats/bases/interface').MultibaseCodec<any>} MultibaseCodec
 */

/**
 * @param {string} name
 * @param {string} prefix
 * @param {(buf: Uint8Array) => string} encode
 * @param {(str: string) => Uint8Array} decode
 * @returns {MultibaseCodec}
 */
function createCodec (name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: {
      decode
    }
  }
}

const string = createCodec('utf8', 'u', (buf) => {
  const decoder = new TextDecoder('utf8')
  return 'u' + decoder.decode(buf)
}, (str) => {
  const encoder = new TextEncoder()
  return encoder.encode(str.substring(1))
})

const ascii = createCodec('ascii', 'a', (buf) => {
  let string = 'a'

  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i])
  }
  return string
}, (str) => {
  str = str.substring(1)
  const buf = new Uint8Array(str.length)

  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i)
  }

  return buf
})

/**
 * @typedef {'utf8' | 'utf-8' | 'hex' | 'latin1' | 'ascii' | 'binary' | keyof bases } SupportedEncodings
 */

/**
 * @type {Record<SupportedEncodings, MultibaseCodec>}
 */
const BASES = {
  'utf8': string,
  'utf-8': string,
  'hex': bases.base16,
  'latin1': ascii,
  'ascii': ascii,
  'binary': ascii,

  ...bases
}

module.exports = BASES


/***/ }),

/***/ 73030:
/***/ ((module) => {

"use strict";


/**
 * Returns the xor distance between two arrays
 *
 * @param {Uint8Array} a
 * @param {Uint8Array} b
 */
function xor (a, b) {
  if (a.length !== b.length) {
    throw new Error('Inputs should have the same length')
  }

  const result = new Uint8Array(a.length)

  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] ^ b[i]
  }

  return result
}

module.exports = xor


/***/ }),

/***/ 21877:
/***/ ((module) => {

module.exports = read

var MSB = 0x80
  , REST = 0x7F

function read(buf, offset) {
  var res    = 0
    , offset = offset || 0
    , shift  = 0
    , counter = offset
    , b
    , l = buf.length

  do {
    if (counter >= l || shift > 49) {
      read.bytes = 0
      throw new RangeError('Could not decode varint')
    }
    b = buf[counter++]
    res += shift < 28
      ? (b & REST) << shift
      : (b & REST) * Math.pow(2, shift)
    shift += 7
  } while (b >= MSB)

  read.bytes = counter - offset

  return res
}


/***/ }),

/***/ 3042:
/***/ ((module) => {

module.exports = encode

var MSB = 0x80
  , REST = 0x7F
  , MSBALL = ~REST
  , INT = Math.pow(2, 31)

function encode(num, out, offset) {
  if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
    encode.bytes = 0
    throw new RangeError('Could not encode varint')
  }
  out = out || []
  offset = offset || 0
  var oldOffset = offset

  while(num >= INT) {
    out[offset++] = (num & 0xFF) | MSB
    num /= 128
  }
  while(num & MSBALL) {
    out[offset++] = (num & 0xFF) | MSB
    num >>>= 7
  }
  out[offset] = num | 0
  
  encode.bytes = offset - oldOffset + 1
  
  return out
}


/***/ }),

/***/ 80233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
    encode: __webpack_require__(3042)
  , decode: __webpack_require__(21877)
  , encodingLength: __webpack_require__(32057)
}


/***/ }),

/***/ 32057:
/***/ ((module) => {


var N1 = Math.pow(2,  7)
var N2 = Math.pow(2, 14)
var N3 = Math.pow(2, 21)
var N4 = Math.pow(2, 28)
var N5 = Math.pow(2, 35)
var N6 = Math.pow(2, 42)
var N7 = Math.pow(2, 49)
var N8 = Math.pow(2, 56)
var N9 = Math.pow(2, 63)

module.exports = function (value) {
  return (
    value < N1 ? 1
  : value < N2 ? 2
  : value < N3 ? 3
  : value < N4 ? 4
  : value < N5 ? 5
  : value < N6 ? 6
  : value < N7 ? 7
  : value < N8 ? 8
  : value < N9 ? 9
  :              10
  )
}


/***/ }),

/***/ 14781:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 51728:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x0": () => (/* binding */ nanoid)
/* harmony export */ });
/* unused harmony exports customAlphabet, customRandom, random */

if (false) {}
let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, size, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * size) / alphabet.length)
  return () => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    let byte = bytes[size] & 63
    if (byte < 36) {
      id += byte.toString(36)
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase()
    } else if (byte < 63) {
      id += '_'
    } else {
      id += '-'
    }
  }
  return id
}



/***/ }),

/***/ 84871:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concat": () => (/* binding */ concat)
/* harmony export */ });
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = new Uint8Array(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

/***/ }),

/***/ 37488:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
function equals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ 31216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96462);

function fromString(string, encoding = 'utf8') {
  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}

/***/ }),

/***/ 79088:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "compare": () => (/* reexport */ compare),
  "concat": () => (/* reexport */ concat.concat),
  "equals": () => (/* reexport */ equals.equals),
  "fromString": () => (/* reexport */ from_string.fromString),
  "toString": () => (/* reexport */ to_string.toString),
  "xor": () => (/* reexport */ xor)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/compare.js
function compare(a, b) {
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] < b[i]) {
      return -1;
    }
    if (a[i] > b[i]) {
      return 1;
    }
  }
  if (a.byteLength > b.byteLength) {
    return 1;
  }
  if (a.byteLength < b.byteLength) {
    return -1;
  }
  return 0;
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/concat.js
var concat = __webpack_require__(84871);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/equals.js
var equals = __webpack_require__(37488);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/from-string.js
var from_string = __webpack_require__(31216);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/to-string.js
var to_string = __webpack_require__(90453);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/xor.js
function xor(a, b) {
  if (a.length !== b.length) {
    throw new Error('Inputs should have the same length');
  }
  const result = new Uint8Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] ^ b[i];
  }
  return result;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/uint8arrays@3.0.0/node_modules/uint8arrays/esm/src/index.js








/***/ }),

/***/ 90453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96462);

function toString(array, encoding = 'utf8') {
  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  return base.encoder.encode(array).substring(1);
}

/***/ }),

/***/ 96462:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19261);

function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);

/***/ }),

/***/ 14656:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","306":"(Unused)","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Unordered Collection","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}');

/***/ })

}]);