(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5071],{

/***/ 68345:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

__webpack_unused_export__ = ({ value: true });
exports.g = void 0;
var http = __webpack_require__(98651);
var https = __webpack_require__(2904);
var url = __webpack_require__(51121);
var grpc_web_1 = __webpack_require__(56185);
function NodeHttpTransport() {
    return function (opts) {
        return new NodeHttp(opts);
    };
}
exports.g = NodeHttpTransport;
var NodeHttp = (function () {
    function NodeHttp(transportOptions) {
        this.options = transportOptions;
    }
    NodeHttp.prototype.sendMessage = function (msgBytes) {
        if (!this.options.methodDefinition.requestStream && !this.options.methodDefinition.responseStream) {
            this.request.setHeader("Content-Length", msgBytes.byteLength);
        }
        this.request.write(toBuffer(msgBytes));
        this.request.end();
    };
    NodeHttp.prototype.finishSend = function () {
    };
    NodeHttp.prototype.responseCallback = function (response) {
        var _this = this;
        this.options.debug && console.log("NodeHttp.response", response.statusCode);
        var headers = filterHeadersForUndefined(response.headers);
        this.options.onHeaders(new grpc_web_1.grpc.Metadata(headers), response.statusCode);
        response.on("data", function (chunk) {
            _this.options.debug && console.log("NodeHttp.data", chunk);
            _this.options.onChunk(toArrayBuffer(chunk));
        });
        response.on("end", function () {
            _this.options.debug && console.log("NodeHttp.end");
            _this.options.onEnd();
        });
    };
    ;
    NodeHttp.prototype.start = function (metadata) {
        var _this = this;
        var headers = {};
        metadata.forEach(function (key, values) {
            headers[key] = values.join(", ");
        });
        var parsedUrl = url.parse(this.options.url);
        var httpOptions = {
            host: parsedUrl.hostname,
            port: parsedUrl.port ? parseInt(parsedUrl.port) : undefined,
            path: parsedUrl.path,
            headers: headers,
            method: "POST"
        };
        if (parsedUrl.protocol === "https:") {
            this.request = https.request(httpOptions, this.responseCallback.bind(this));
        }
        else {
            this.request = http.request(httpOptions, this.responseCallback.bind(this));
        }
        this.request.on("error", function (err) {
            _this.options.debug && console.log("NodeHttp.error", err);
            _this.options.onEnd(err);
        });
    };
    NodeHttp.prototype.cancel = function () {
        this.options.debug && console.log("NodeHttp.abort");
        this.request.abort();
    };
    return NodeHttp;
}());
function filterHeadersForUndefined(headers) {
    var filteredHeaders = {};
    for (var key in headers) {
        var value = headers[key];
        if (headers.hasOwnProperty(key)) {
            if (value !== undefined) {
                filteredHeaders[key] = value;
            }
        }
    }
    return filteredHeaders;
}
function toArrayBuffer(buf) {
    var view = new Uint8Array(buf.length);
    for (var i = 0; i < buf.length; i++) {
        view[i] = buf[i];
    }
    return view;
}
function toBuffer(ab) {
    var buf = Buffer.alloc(ab.byteLength);
    for (var i = 0; i < buf.length; i++) {
        buf[i] = ab[i];
    }
    return buf;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 78659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cv": () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports getLength, toBuffer */
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];
function r(n){if(Array.isArray(n)){for(var f=[],t=0;t<n.length;t++)f.push(r(n[t]));var i=Buffer.concat(f);return Buffer.concat([e(i.length,192),i])}var o=u(n);return 1===o.length&&o[0]<128?o:Buffer.concat([e(o.length,128),o])}function e(r,e){if(r<56)return Buffer.from([r+e]);var n=t(r),f=t(e+55+n.length/2);return Buffer.from(f+n,"hex")}function n(r){if(!r||0===r.length)return Buffer.from([]);var e=u(r),n=e[0];if(n<=127)return e.length;if(n<=183)return n-127;if(n<=191)return n-182;if(n<=247)return n-191;var f=n-246;return f+function(r,e){if("00"===r.slice(0,2))throw new Error("invalid RLP: extra zeros");return parseInt(r,16)}(e.slice(1,f).toString("hex"))}function f(r){return"0x"===r.slice(0,2)}function t(r){if(r<0)throw new Error("Invalid integer as argument, must be unsigned!");var e=r.toString(16);return e.length%2?"0"+e:e}function u(r){if(!Buffer.isBuffer(r)){if("string"==typeof r)return f(r)?Buffer.from((n="string"!=typeof(u=r)?u:f(u)?u.slice(2):u).length%2?"0"+n:n,"hex"):Buffer.from(r);if("number"==typeof r)return r?(e=t(r),Buffer.from(e,"hex")):Buffer.from([]);if(null==r)return Buffer.from([]);if(r instanceof Uint8Array)return Buffer.from(r);throw new Error("invalid type")}var e,n,u;return r}
//# sourceMappingURL=rlp.module.js.map


/***/ }),

/***/ 48392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Address": () => (/* binding */ R),
/* harmony export */   "Array": () => (/* binding */ D),
/* harmony export */   "Bool": () => (/* binding */ O),
/* harmony export */   "Character": () => (/* binding */ P),
/* harmony export */   "Dictionary": () => (/* binding */ V),
/* harmony export */   "Event": () => (/* binding */ G),
/* harmony export */   "Fix64": () => (/* binding */ W),
/* harmony export */   "Identity": () => (/* binding */ c),
/* harmony export */   "Int": () => (/* binding */ d),
/* harmony export */   "Int128": () => (/* binding */ I),
/* harmony export */   "Int16": () => (/* binding */ g),
/* harmony export */   "Int256": () => (/* binding */ b),
/* harmony export */   "Int32": () => (/* binding */ y),
/* harmony export */   "Int64": () => (/* binding */ x),
/* harmony export */   "Int8": () => (/* binding */ l),
/* harmony export */   "Optional": () => (/* binding */ B),
/* harmony export */   "Path": () => (/* binding */ z),
/* harmony export */   "Reference": () => (/* binding */ C),
/* harmony export */   "Resource": () => (/* binding */ T),
/* harmony export */   "String": () => (/* binding */ k),
/* harmony export */   "Struct": () => (/* binding */ q),
/* harmony export */   "UFix64": () => (/* binding */ j),
/* harmony export */   "UInt": () => (/* binding */ a),
/* harmony export */   "UInt128": () => (/* binding */ h),
/* harmony export */   "UInt16": () => (/* binding */ s),
/* harmony export */   "UInt256": () => (/* binding */ E),
/* harmony export */   "UInt32": () => (/* binding */ v),
/* harmony export */   "UInt64": () => (/* binding */ m),
/* harmony export */   "UInt8": () => (/* binding */ p),
/* harmony export */   "Void": () => (/* binding */ N),
/* harmony export */   "Word16": () => (/* binding */ S),
/* harmony export */   "Word32": () => (/* binding */ F),
/* harmony export */   "Word64": () => (/* binding */ A),
/* harmony export */   "Word8": () => (/* binding */ U),
/* harmony export */   "_Array": () => (/* binding */ D)
/* harmony export */ });
var e=function(e,t,n){return{label:e,asArgument:t,asInjection:n}},t=function(e){return Array.isArray(e)},n=function(e){return"object"==typeof e},r=function(e){return null==e},i=function(e){return"number"==typeof e},o=function(e){return Number.isInteger(e)},u=function(e){return"string"==typeof e},f=function(e){throw new Error("Type Error: "+e)},c=e("Identity",function(e){return e},function(e){return e}),a=e("UInt",function(e){if(i(e)&&o(e))return{type:"UInt",value:e.toString()};f("Expected Positive Integer for type Unsigned Int")},function(e){return e}),d=e("Int",function(e){if(i(e)&&o(e))return{type:"Int",value:e.toString()};f("Expected Integer for type Int")},function(e){return e}),p=e("UInt8",function(e){if(i(e)&&o(e))return{type:"UInt8",value:e.toString()};f("Expected integer for UInt8")},function(e){return e}),l=e("Int8",function(e){if(i(e)&&o(e))return{type:"Int8",value:e.toString()};f("Expected positive integer for Int8")},function(e){return e}),s=e("UInt16",function(e){if(i(e)&&o(e))return{type:"UInt16",value:e.toString()};f("Expected integer for UInt16")},function(e){return e}),g=e("Int16",function(e){if(i(e)&&o(e))return{type:"Int16",value:e.toString()};f("Expected positive integer for Int16")},function(e){return e}),v=e("UInt32",function(e){if(i(e)&&o(e))return{type:"UInt32",value:e.toString()};f("Expected integer for UInt32")},function(e){return e}),y=e("Int32",function(e){if(i(e)&&o(e))return{type:"Int32",value:e.toString()};f("Expected positive integer for Int32")},function(e){return e}),m=e("UInt64",function(e){if(i(e)&&o(e))return{type:"UInt64",value:e.toString()};f("Expected integer for UInt64")},function(e){return e}),x=e("Int64",function(e){if(i(e)&&o(e))return{type:"Int64",value:e.toString()};f("Expected positive integer for Int64")},function(e){return e}),h=e("UInt128",function(e){if(i(e)&&o(e))return{type:"UInt128",value:e.toString()};f("Expected integer for UInt128")},function(e){return e}),I=e("Int128",function(e){if(i(e)&&o(e))return{type:"Int128",value:e.toString()};f("Expected positive integer for Int128")},function(e){return e}),E=e("UInt256",function(e){if(i(e)&&o(e))return{type:"UInt256",value:e.toString()};f("Expected integer for UInt256")},function(e){return e}),b=e("Int256",function(e){if(i(e)&&o(e))return{type:"Int256",value:e.toString()};f("Expected integer for Int256")},function(e){return e}),U=e("Word8",function(e){if(i(e)&&o(e))return{type:"Word8",value:e.toString()};f("Expected positive number for Word8")},function(e){return e}),S=e("Word16",function(e){if(i(e)&&o(e))return{type:"Word16",value:e.toString()};f("Expected positive number for Word16")},function(e){return e}),F=e("Word32",function(e){if(i(e)&&o(e))return{type:"Word32",value:e.toString()};f("Expected positive number for Word32")},function(e){return e}),A=e("Word64",function(e){if(i(e)&&o(e))return{type:"Word64",value:e.toString()};f("Expected positive number for Word64")},function(e){return e}),w=function(){console.error("\n          %c@onflow/types Deprecation Notice\n          ========================\n\n          Passing in Numbers as values for Fix64 and UFix64 types is deprecated and will cease to work in future releases of @onflow/types.\n          Find out more here: https://github.com/onflow/flow-js-sdk/blob/master/packages/types/WARNINGS.md#0001-[U]Fix64-as-Number\n\n          =======================\n        ".replace(/\n\s+/g,"\n").trim(),"font-weight:bold;font-family:monospace;")},j=e("UFix64",function(e){if(u(e)){var t=e.split(".");return 2!==t.length&&f("Expected one decimal but found "+t.length+" in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),(0==t[1].length||t[1].length>8)&&f("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found "+t[1].length+" digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),{type:"UFix64",value:e}}if(i(e))return w(),{type:"UFix64",value:e.toString()};f("Expected String for UFix64")},function(e){return e}),W=e("Fix64",function(e){if(u(e)){var t=e.split(".");return 2!==t.length&&f("Expected one decimal but found "+t.length+" in the [U]Fix64 value. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),(0==t[1].length||t[1].length>8)&&f("Expected at least one digit, and at most 8 digits following the decimal of the [U]Fix64 value but found "+t[1].length+" digits. Find out more about [U]Fix64 types here: https://docs.onflow.org/cadence/json-cadence-spec/#fixed-point-numbers"),{type:"Fix64",value:e}}if(i(e))return w(),{type:"Fix64",value:e.toString()};f("Expected String for Fix64")},function(e){return e}),k=e("String",function(e){if(u(e))return{type:"String",value:e};f("Expected String for type String")},function(e){return e}),P=e("Character",function(e){if(u(e))return{type:"Character",value:e};f("Expected Character for type Character")},function(e){return e}),O=e("Bool",function(e){if("boolean"==typeof e)return{type:"Bool",value:e};f("Expected Boolean for type Bool")},function(e){return e}),R=e("Address",function(e){if(u(e))return{type:"Address",value:e};f("Expected Address for type Address")},function(e){return e}),N=e("Void",function(e){if(!e||r(e))return{type:"Void"};f("Expected Void for type Void")},function(e){return e}),B=function(t){return e("Optional",function(e){return{type:"Optional",value:r(e)?null:t.asArgument(e)}},function(e){return e})},C=e("Reference",function(e){if(n(e))return{type:"Reference",value:e};f("Expected Object for type Reference")},function(e){return e}),D=function(n){return void 0===n&&(n=[]),e("Array",function(e){return{type:"Array",value:t(n)?n.map(function(t,n){return t.asArgument(e[n])}):e.map(function(e){return n.asArgument(e)})}},function(e){return e})},V=function(r){return void 0===r&&(r=[]),e("Dictionary",function(e){if(n(e))return{type:"Dictionary",value:t(r)?r.map(function(t,n){return{key:t.key.asArgument(e[n].key),value:t.value.asArgument(e[n].value)}}):t(e)?e.map(function(e){return{key:r.key.asArgument(e.key),value:r.value.asArgument(e.value)}}):[{key:r.key.asArgument(e.key),value:r.value.asArgument(e.value)}]};f("Expected Object for type Dictionary")},function(e){return e})},G=function(r,i){return void 0===i&&(i=[]),e("Event",function(e){if(n(e))return{type:"Event",value:{id:r,fields:t(i)?i.map(function(t,n){return{name:e.fields[n].name,value:t.value.asArgument(e.fields[n].value)}}):e.fields.map(function(e){return{name:e.name,value:i.value.asArgument(e.value)}})}};f("Expected Object for type Event")},function(e){return e})},T=function(r,i){return void 0===i&&(i=[]),e("Resource",function(e){if(n(e))return{type:"Resource",value:{id:r,fields:t(i)?i.map(function(t,n){return{name:e.fields[n].name,value:t.value.asArgument(e.fields[n].value)}}):e.fields.map(function(e){return{name:e.name,value:i.value.asArgument(e.value)}})}};f("Expected Object for type Resource")},function(e){return e})},q=function(r,i){return void 0===i&&(i=[]),e("Struct",function(e){if(n(e))return{type:"Struct",value:{id:r,fields:t(i)?i.map(function(t,n){return{name:e.fields[n].name,value:t.value.asArgument(e.fields[n].value)}}):e.fields.map(function(e){return{name:e.name,value:i.value.asArgument(e.value)}})}};f("Expected Object for type Struct")},function(e){return e})},z=e("Path",function(e){if(n(e))return u(e.domain)||f("Expected a string for the Path domain but found "+e.domain+". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path"),"storage"!==e.domain&&"private"!==e.domain&&"public"!==e.domain&&f('Expected either "storage", "private" or "public" as the Path domain but found '+e.domain+". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path"),u(e.identifier)||f("Expected a string for the Path identifier but found "+e.identifier+". Find out more about the Path type here: https://docs.onflow.org/cadence/json-cadence-spec/#path"),{type:"Path",value:{domain:e.domain,identifier:e.identifier}};f("Expected Object for type Path")},function(e){return e});
//# sourceMappingURL=types.module.js.map


/***/ }),

/***/ 56688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qg": () => (/* binding */ c),
/* harmony export */   "kT": () => (/* binding */ l),
/* harmony export */   "kD": () => (/* binding */ f),
/* harmony export */   "By": () => (/* binding */ s),
/* harmony export */   "SH": () => (/* binding */ a),
/* harmony export */   "lW": () => (/* binding */ b),
/* harmony export */   "L6": () => (/* binding */ E),
/* harmony export */   "Cs": () => (/* binding */ m),
/* harmony export */   "qP": () => (/* binding */ I)
/* harmony export */ });
/* unused harmony exports EXIT, TERMINATE, kill */
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61393);
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(queue_microtask__WEBPACK_IMPORTED_MODULE_0__);
function t(){return(t=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}function e(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function r(n,t,e){if(!n.s){if(e instanceof o){if(!e.s)return void(e.o=r.bind(null,n,t));1&t&&(t=e.s),e=e.v}if(e&&e.then)return void e.then(r.bind(null,n,t),r.bind(null,n,2));n.s=t,n.v=e;var i=n.o;i&&i(n)}}var o=function(){function n(){}return n.prototype.then=function(t,e){var o=new n,i=this.s;if(i){var u=1&i?t:e;if(u){try{r(o,1,u(this.v))}catch(n){r(o,2,n)}return o}return this}return this.o=function(n){try{var i=n.v;1&n.s?r(o,1,t?t(i):i):e?r(o,1,e(i)):r(o,2,i)}catch(n){r(o,2,n)}},o},n}();function i(n){return n instanceof o&&1&n.s}function u(n,t,e){for(var u;;){var c=n();if(i(c)&&(c=c.v),!c)return f;if(c.then){u=0;break}var f=e();if(f&&f.then){if(!i(f)){u=1;break}f=f.s}if(t){var s=t();if(s&&s.then&&!i(s)){u=2;break}}}var a=new o,l=r.bind(null,a,2);return(0===u?c.then(h):1===u?f.then(v):s.then(d)).then(void 0,l),a;function v(o){f=o;do{if(t&&(s=t())&&s.then&&!i(s))return void s.then(d).then(void 0,l);if(!(c=n())||i(c)&&!c.v)return void r(a,1,f);if(c.then)return void c.then(h).then(void 0,l);i(f=e())&&(f=f.v)}while(!f||!f.then);f.then(v).then(void 0,l)}function h(n){n?(f=e())&&f.then?f.then(v).then(void 0,l):v(f):r(a,1,f)}function d(){(c=n())?c.then?c.then(h).then(void 0,l):h(c):r(a,1,f)}}var c="INIT",f="SUBSCRIBE",s="UNSUBSCRIBE",a="UPDATED",l="SNAPSHOT",v="EXIT",h="TERMINATE",d="object"==typeof self&&self.self===self&&self||"object"==typeof __webpack_require__.g&&__webpack_require__.g.global===__webpack_require__.g&&__webpack_require__.g||"object"==typeof window&&window.window===window&&window;d.FCL_REGISTRY=null==d.FCL_REGISTRY?{}:d.FCL_REGISTRY;var R=0,b=function(n,t,e,r){return void 0===r&&(r={}),new Promise(function(o,i){var u=r.expectReply||!1,c=null!=r.timeout?r.timeout:5e3;u&&c&&setTimeout(function(){return i(new Error("Timeout: "+c+"ms passed without a response."))},c);var f={to:n,from:r.from,tag:t,data:e,timeout:c,reply:o,reject:i};try{d.FCL_REGISTRY[n].mailbox.deliver(f),u||o(!0)}catch(n){console.error("FCL.Actor -- Could Not Deliver Message",f,n)}})},S=function(n){delete d.FCL_REGISTRY[n]},m=function(r,o){if(void 0===o&&(o=null),null==o&&(o=++R),null!=d.FCL_REGISTRY[o])return o;var i,c;d.FCL_REGISTRY[o]={addr:o,mailbox:(c=[],{deliver:function(n){try{return c.push(n),i&&(i(c.shift()),i=void 0),Promise.resolve()}catch(n){return Promise.reject(n)}},receive:function(){return new Promise(function(n){var t=c.shift();if(t)return n(t);i=n})}}),subs:new Set,kvs:{}};var f,s={self:function(){return o},receive:function(){return d.FCL_REGISTRY[o].mailbox.receive()},send:function(n,t,e,r){return void 0===r&&(r={}),r.from=o,b(n,t,e,r)},sendSelf:function(n,t,e){d.FCL_REGISTRY[o]&&b(o,n,t,e)},broadcast:function(n,t,r){void 0===r&&(r={}),r.from=o;for(var i,u=function(n,t){var r;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return e(n,void 0);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,void 0):void 0}}(n))){r&&(n=r);var o=0;return function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=n[Symbol.iterator]()).next.bind(r)}(d.FCL_REGISTRY[o].subs);!(i=u()).done;)b(i.value,n,t,r)},subscribe:function(n){return null!=n&&d.FCL_REGISTRY[o].subs.add(n)},unsubscribe:function(n){return null!=n&&d.FCL_REGISTRY[o].subs.delete(n)},subscriberCount:function(){return d.FCL_REGISTRY[o].subs.size},hasSubs:function(){return!!d.FCL_REGISTRY[o].subs.size},put:function(n,t){null!=n&&(d.FCL_REGISTRY[o].kvs[n]=t)},get:function(n,t){var e=d.FCL_REGISTRY[o].kvs[n];return null==e?t:e},delete:function(n){delete d.FCL_REGISTRY[o].kvs[n]},update:function(n,t){null!=n&&(d.FCL_REGISTRY[o].kvs[n]=t(d.FCL_REGISTRY[o].kvs[n]))},keys:function(){return Object.keys(d.FCL_REGISTRY[o].kvs)},all:function(){return d.FCL_REGISTRY[o].kvs},where:function(n){return Object.keys(d.FCL_REGISTRY[o].kvs).reduce(function(e,r){var i;return n.test(r)?t({},e,((i={})[r]=d.FCL_REGISTRY[o].kvs[r],i)):e},{})},merge:function(n){void 0===n&&(n={}),Object.keys(n).forEach(function(t){return d.FCL_REGISTRY[o].kvs[t]=n[t]})}};return"object"==typeof r&&(void 0===(f=r)&&(f={}),r=function(n){try{var t=function(){var t=u(function(){return 1},void 0,function(){return Promise.resolve(n.receive()).then(function(t){var e=function(e,r){try{var o=function(e,r){try{var o=function(){function e(){return Promise.resolve(f[t.tag](n,t,t.data||{})).then(function(){})}var r=function(){if("EXIT"===t.tag){var e=function(){if("function"==typeof f.TERMINATE)return Promise.resolve(f.TERMINATE(n,t,t.data||{})).then(function(){})}();if(e&&e.then)return e.then(function(){})}}();return r&&r.then?r.then(e):e()}()}catch(n){return r(n)}return o&&o.then?o.then(void 0,r):o}(0,function(e){console.error(n.self()+" Error",t,e)})}catch(n){return}return o&&o.then?o.then(r.bind(null,!1),r.bind(null,!0)):void 0}(0,function(n,t){});if(e&&e.then)return e.then(function(){})})});return t&&t.then?t.then(function(){}):void 0},e=function(){if("function"==typeof f.INIT)return Promise.resolve(f.INIT(n)).then(function(){})}();return Promise.resolve(e&&e.then?e.then(t):t())}catch(n){return Promise.reject(n)}}),queue_microtask__WEBPACK_IMPORTED_MODULE_0___default()(function(){try{return Promise.resolve(r(s)).then(function(){S(o)})}catch(n){return Promise.reject(n)}}),o};function I(n,t,e){t(n);var r=m(function(t){try{var r;return t.send(n,"SUBSCRIBE"),Promise.resolve(u(function(){return!r&&1},void 0,function(){return Promise.resolve(t.receive()).then(function(o){if("@EXIT"===o.tag)return t.send(n,"UNSUBSCRIBE"),void(r=1);e(o.data)})}))}catch(n){return Promise.reject(n)}});return function(){return b(r,"@EXIT")}}function E(n,t){return t(n),b(n,"SNAPSHOT",null,{expectReply:!0,timeout:0})}
//# sourceMappingURL=actor.module.js.map


/***/ }),

/***/ 64864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jf": () => (/* binding */ u),
/* harmony export */   "CH": () => (/* binding */ n),
/* harmony export */   "dq": () => (/* binding */ l)
/* harmony export */ });
function n(n){return null==n?null:n.replace(/^0x/,"").replace(/^Fx/,"")}function l(l){return null==l?null:"0x"+n(l)}function u(n){return l(n)}
//# sourceMappingURL=util-address.module.js.map


/***/ }),

/***/ 73440:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ n)
/* harmony export */ });
function n(n,t){if(!n){var r,o=new Error("INVARIANT "+t);throw o.stack=o.stack.split("\n").filter(function(n){return!/at invariant/.test(n)}).join("\n"),(r=console).error.apply(r,["\n\n---\n\n",o,"\n\n"].concat([].slice.call(arguments,2),["\n\n---\n\n"])),o}}
//# sourceMappingURL=util-invariant.module.js.map


/***/ }),

/***/ 61805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export interleave */
function n(t,o,r){if(void 0===t&&(t=[]),void 0===o&&(o=[]),void 0===r&&(r=[]),!t.length&&!o.length)return r;if(!t.length)return r;if(!o.length)return[].concat(r,[t[0]]);var e=t[0],i=t.slice(1),a=o[0],u=o.slice(1);return void 0!==e&&r.push(e),void 0!==a&&r.push(a),n(i,u,r)}function t(n){return function(o){return"function"==typeof o?(console.warn("\n        %cFCL/SDK Deprecation Notice\n        ============================\n\n        Interopolation of functions into template literals will not be a thing in future versions of the Flow-JS-SDK or FCL.\n        You can learn more (including a guide on common transition paths) here: https://github.com/onflow/flow-js-sdk/blob/master/packages/sdk/TRANSITIONS.md#0001-deprecate-params\n\n        ============================\n      ","font-weight:bold;font-family:monospace;"),t(n)(o(n))):String(o)}}function o(o){for(var r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];return"string"==typeof o?function(){return o}:Array.isArray(o)?function(r){return n(o,e.map(t(r))).join("").trim()}:o}
//# sourceMappingURL=template.module.js.map


/***/ }),

/***/ 54615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ t)
/* harmony export */ });
var r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=r.length;function t(){for(var t="",a=32;a--;)t+=r[Math.random()*n|0];return t}
//# sourceMappingURL=util-uid.module.js.map


/***/ }),

/***/ 61393:
/***/ ((module) => {

let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))


/***/ }),

/***/ 50280:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
__webpack_unused_export__ = ({value:true});__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=__webpack_unused_export__=void 0;var _buffer=__webpack_require__(15313);var _sponge=_interopRequireDefault(__webpack_require__(33652));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var createHash=function createHash(_ref){var allowedSizes=_ref.allowedSizes,defaultSize=_ref.defaultSize,padding=_ref.padding;return function Hash(){var _this=this;var size=arguments.length>0&&arguments[0]!==undefined?arguments[0]:defaultSize;if(!this||this.constructor!==Hash){return new Hash(size)}if(allowedSizes&&!allowedSizes.includes(size)){throw new Error("Unsupported hash length")}var sponge=new _sponge["default"]({capacity:size});this.update=function(input){var encoding=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"utf8";if(_buffer.Buffer.isBuffer(input)){sponge.absorb(input);return _this}if(typeof input==="string"){return _this.update(_buffer.Buffer.from(input,encoding))}throw new TypeError("Not a string or buffer")};this.digest=function(){var formatOrOptions=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"binary";var options=typeof formatOrOptions==="string"?{format:formatOrOptions}:formatOrOptions;var buffer=sponge.squeeze({buffer:options.buffer,padding:options.padding||padding});if(options.format&&options.format!=="binary"){return buffer.toString(options.format)}return buffer};this.reset=function(){sponge.reset();return _this};return this}};var Keccak=createHash({allowedSizes:[224,256,384,512],defaultSize:512,padding:1});__webpack_unused_export__=Keccak;var SHA3=createHash({allowedSizes:[224,256,384,512],defaultSize:512,padding:6});__webpack_unused_export__=SHA3;var SHAKE=createHash({allowedSizes:[128,256],defaultSize:256,padding:31});__webpack_unused_export__=SHAKE;var SHA3Hash=Keccak;__webpack_unused_export__=SHA3Hash;SHA3.SHA3Hash=SHA3Hash;var _default=SHA3;__webpack_unused_export__=_default;

/***/ }),

/***/ 33652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _buffer=__webpack_require__(15313);var _permute=_interopRequireDefault(__webpack_require__(64575));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var xorWords=function xorWords(I,O){for(var i=0;i<I.length;i+=8){var o=i/4;O[o]^=I[i+7]<<24|I[i+6]<<16|I[i+5]<<8|I[i+4];O[o+1]^=I[i+3]<<24|I[i+2]<<16|I[i+1]<<8|I[i]}return O};var readWords=function readWords(I,O){for(var o=0;o<O.length;o+=8){var i=o/4;O[o]=I[i+1];O[o+1]=I[i+1]>>>8;O[o+2]=I[i+1]>>>16;O[o+3]=I[i+1]>>>24;O[o+4]=I[i];O[o+5]=I[i]>>>8;O[o+6]=I[i]>>>16;O[o+7]=I[i]>>>24}return O};var Sponge=function Sponge(_ref){var _this=this;var capacity=_ref.capacity,padding=_ref.padding;var keccak=(0,_permute["default"])();var stateSize=200;var blockSize=capacity/8;var queueSize=stateSize-capacity/4;var queueOffset=0;var state=new Uint32Array(stateSize/4);var queue=_buffer.Buffer.allocUnsafe(queueSize);this.absorb=function(buffer){for(var i=0;i<buffer.length;i++){queue[queueOffset]=buffer[i];queueOffset+=1;if(queueOffset>=queueSize){xorWords(queue,state);keccak(state);queueOffset=0}}return _this};this.squeeze=function(){var options=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var output={buffer:options.buffer||_buffer.Buffer.allocUnsafe(blockSize),padding:options.padding||padding,queue:_buffer.Buffer.allocUnsafe(queue.length),state:new Uint32Array(state.length)};queue.copy(output.queue);for(var i=0;i<state.length;i++){output.state[i]=state[i]}output.queue.fill(0,queueOffset);output.queue[queueOffset]|=output.padding;output.queue[queueSize-1]|=128;xorWords(output.queue,output.state);for(var offset=0;offset<output.buffer.length;offset+=queueSize){keccak(output.state);readWords(output.state,output.buffer.slice(offset,offset+queueSize))}return output.buffer};this.reset=function(){queue.fill(0);state.fill(0);queueOffset=0;return _this};return this};var _default=Sponge;exports["default"]=_default;

/***/ }),

/***/ 23678:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _copy=_interopRequireDefault(__webpack_require__(42330));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var chi=function chi(_ref){var A=_ref.A,C=_ref.C;for(var y=0;y<25;y+=5){for(var x=0;x<5;x++){(0,_copy["default"])(A,y+x)(C,x)}for(var _x=0;_x<5;_x++){var xy=(y+_x)*2;var x1=(_x+1)%5*2;var x2=(_x+2)%5*2;A[xy]^=~C[x1]&C[x2];A[xy+1]^=~C[x1+1]&C[x2+1]}}};var _default=chi;exports["default"]=_default;

/***/ }),

/***/ 42330:
/***/ ((module) => {

"use strict";
var copy=function copy(I,i){return function(O,o){var oi=o*2;var ii=i*2;O[oi]=I[ii];O[oi+1]=I[ii+1]}};module.exports=copy;

/***/ }),

/***/ 64575:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _chi=_interopRequireDefault(__webpack_require__(23678));var _iota=_interopRequireDefault(__webpack_require__(7985));var _rhoPi=_interopRequireDefault(__webpack_require__(28845));var _theta=_interopRequireDefault(__webpack_require__(50765));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var permute=function permute(){var C=new Uint32Array(10);var D=new Uint32Array(10);var W=new Uint32Array(2);return function(A){for(var roundIndex=0;roundIndex<24;roundIndex++){(0,_theta["default"])({A:A,C:C,D:D,W:W});(0,_rhoPi["default"])({A:A,C:C,W:W});(0,_chi["default"])({A:A,C:C});(0,_iota["default"])({A:A,roundIndex:roundIndex})}C.fill(0);D.fill(0);W.fill(0)}};var _default=permute;exports["default"]=_default;

/***/ }),

/***/ 7985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _roundConstants=_interopRequireDefault(__webpack_require__(75986));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var iota=function iota(_ref){var A=_ref.A,roundIndex=_ref.roundIndex;var i=roundIndex*2;A[0]^=_roundConstants["default"][i];A[1]^=_roundConstants["default"][i+1]};var _default=iota;exports["default"]=_default;

/***/ }),

/***/ 75986:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var ROUND_CONSTANTS=new Uint32Array([0,1,0,32898,2147483648,32906,2147483648,2147516416,0,32907,0,2147483649,2147483648,2147516545,2147483648,32777,0,138,0,136,0,2147516425,0,2147483658,0,2147516555,2147483648,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,0,32778,2147483648,2147483658,2147483648,2147516545,2147483648,32896,0,2147483649,2147483648,2147516424]);var _default=ROUND_CONSTANTS;exports["default"]=_default;

/***/ }),

/***/ 28845:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _piShuffles=_interopRequireDefault(__webpack_require__(93321));var _rhoOffsets=_interopRequireDefault(__webpack_require__(44805));var _copy=_interopRequireDefault(__webpack_require__(42330));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var rhoPi=function rhoPi(_ref){var A=_ref.A,C=_ref.C,W=_ref.W;(0,_copy["default"])(A,1)(W,0);var H=0;var L=0;var Wi=0;var ri=32;for(var i=0;i<24;i++){var j=_piShuffles["default"][i];var r=_rhoOffsets["default"][i];(0,_copy["default"])(A,j)(C,0);H=W[0];L=W[1];ri=32-r;Wi=r<32?0:1;W[Wi]=H<<r|L>>>ri;W[(Wi+1)%2]=L<<r|H>>>ri;(0,_copy["default"])(W,0)(A,j);(0,_copy["default"])(C,0)(W,0)}};var _default=rhoPi;exports["default"]=_default;

/***/ }),

/***/ 93321:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var PI_SHUFFLES=[10,7,11,17,18,3,5,16,8,21,24,4,15,23,19,13,12,2,20,14,22,9,6,1];var _default=PI_SHUFFLES;exports["default"]=_default;

/***/ }),

/***/ 44805:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var RHO_OFFSETS=[1,3,6,10,15,21,28,36,45,55,2,14,27,41,56,8,25,43,62,18,39,61,20,44];var _default=RHO_OFFSETS;exports["default"]=_default;

/***/ }),

/***/ 50765:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
Object.defineProperty(exports, "__esModule", ({value:true}));exports["default"]=void 0;var _copy=_interopRequireDefault(__webpack_require__(42330));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var theta=function theta(_ref){var A=_ref.A,C=_ref.C,D=_ref.D,W=_ref.W;var H=0;var L=0;for(var x=0;x<5;x++){var x20=x*2;var x21=(x+5)*2;var x22=(x+10)*2;var x23=(x+15)*2;var x24=(x+20)*2;C[x20]=A[x20]^A[x21]^A[x22]^A[x23]^A[x24];C[x20+1]=A[x20+1]^A[x21+1]^A[x22+1]^A[x23+1]^A[x24+1]}for(var _x=0;_x<5;_x++){(0,_copy["default"])(C,(_x+1)%5)(W,0);H=W[0];L=W[1];W[0]=H<<1|L>>>31;W[1]=L<<1|H>>>31;D[_x*2]=C[(_x+4)%5*2]^W[0];D[_x*2+1]=C[(_x+4)%5*2+1]^W[1];for(var y=0;y<25;y+=5){A[(y+_x)*2]^=D[_x*2];A[(y+_x)*2+1]^=D[_x*2+1]}}};var _default=theta;exports["default"]=_default;

/***/ }),

/***/ 21438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K": () => (/* reexport */ getFungibleAssets)
});

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ../web3-shared/flow/index.ts + 8 modules
var flow = __webpack_require__(1154);
// EXTERNAL MODULE: ../web3-providers/src/index.ts + 21 modules
var web3_providers_src = __webpack_require__(42189);
// EXTERNAL MODULE: ../plugins/Flow/src/helpers/index.ts + 2 modules
var helpers = __webpack_require__(35724);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
;// CONCATENATED MODULE: ../plugins/Flow/src/apis/getFungibleAssets.ts





async function getTokenBalance(chainId, account, decimals, { fungibleTokenAddress , tokenAddress , exportKey , storageKey  }) {
    const sdk = (0,flow/* createClient */.eI)(chainId);
    try {
        const balance = await sdk.query({
            cadence: `
            import FungibleToken from ${fungibleTokenAddress}
            import ${exportKey} from ${tokenAddress}

            pub fun main(address: Address): UFix64 {
                let account = getAccount(address)
                let vaultRef = account
                    .getCapability(/public/${storageKey})
                    .borrow<&${exportKey}.Vault{FungibleToken.Balance}>()
                    ?? panic("Could not borrow Balance capability")

                return vaultRef.balance
            }
        `,
            args: (arg, t)=>[
                    arg(account, t.Address)
                ]
        });
        return (0,base_src/* rightShift */.pu)(balance, decimals).integerValue().toFixed();
    } catch  {
        return '0';
    }
}
async function getAssetFUSD(chainId, account) {
    const { FUSD_ADDRESS ='' , FUNGIBLE_TOKEN_ADDRESS =''  } = (0,flow/* getTokenConstants */.aV)(chainId);
    const price = await web3_providers_src/* CoinGecko.getTokenPrice */.oD.getTokenPrice('usd-coin', src/* CurrencyType.USD */.V2.USD);
    const balance = await getTokenBalance(chainId, account, 8, {
        fungibleTokenAddress: FUNGIBLE_TOKEN_ADDRESS,
        tokenAddress: FUSD_ADDRESS,
        exportKey: 'FUSD',
        storageKey: 'fusdBalance'
    });
    return (0,helpers/* createFungibleAsset */.kI)((0,helpers/* createFungibleToken */.mn)(chainId, FUSD_ADDRESS, 'Flow USD', 'FUSD', 8), balance, new URL(/* asset import */ __webpack_require__(11390), __webpack_require__.b).toString(), price);
}
async function getAssetFLOW(chainId, account) {
    const { FLOW_ADDRESS ='' , FUNGIBLE_TOKEN_ADDRESS =''  } = (0,flow/* getTokenConstants */.aV)(chainId);
    const price = await web3_providers_src/* CoinGecko.getTokenPrice */.oD.getTokenPrice('flow', src/* CurrencyType.USD */.V2.USD);
    const balance = await getTokenBalance(chainId, account, 8, {
        fungibleTokenAddress: FUNGIBLE_TOKEN_ADDRESS,
        tokenAddress: FLOW_ADDRESS,
        exportKey: 'FlowToken',
        storageKey: 'flowTokenBalance'
    });
    return (0,helpers/* createFungibleAsset */.kI)((0,helpers/* createFungibleToken */.mn)(chainId, FLOW_ADDRESS, 'Flow', 'FLOW', 8), balance, new URL(/* asset import */ __webpack_require__(36284), __webpack_require__.b).toString(), price);
}
async function getAssetTether(chainId, account) {
    const { TETHER_ADDRESS ='' , FUNGIBLE_TOKEN_ADDRESS =''  } = (0,flow/* getTokenConstants */.aV)(chainId);
    const price = await web3_providers_src/* CoinGecko.getTokenPrice */.oD.getTokenPrice('tether', src/* CurrencyType.USD */.V2.USD);
    const balance = await getTokenBalance(chainId, account, 8, {
        fungibleTokenAddress: FUNGIBLE_TOKEN_ADDRESS,
        tokenAddress: TETHER_ADDRESS,
        exportKey: 'TeleportedTetherToken',
        storageKey: 'teleportedTetherTokenBalance'
    });
    return (0,helpers/* createFungibleAsset */.kI)((0,helpers/* createFungibleToken */.mn)(chainId, TETHER_ADDRESS, 'Tether USD', 'tUSD', 8), balance, new URL(/* asset import */ __webpack_require__(75183), __webpack_require__.b).toString(), price);
}
async function getFungibleAssets(address, provider, network, pagination) {
    const allSettled = await Promise.allSettled([
        getAssetFLOW(network.chainId, address),
        getAssetFUSD(network.chainId, address),
        getAssetTether(network.chainId, address), 
    ]);
    return allSettled.map((x)=>x.status === 'fulfilled' ? x.value : null
    ).filter(Boolean);
}

;// CONCATENATED MODULE: ../plugins/Flow/src/apis/index.ts



/***/ }),

/***/ 35724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kI": () => (/* reexport */ createFungibleAsset),
  "mn": () => (/* reexport */ createFungibleToken),
  "Tg": () => (/* reexport */ formatAddress)
});

;// CONCATENATED MODULE: ../plugins/Flow/src/helpers/formatter.ts
function formatAddress(address, size = 0) {
    if (!/0x\w{16}/.test(address)) return address;
    if (size === 0 || size >= 8) return address;
    return `${address.substr(0, 2 + size)}...${address.substr(-size)}`;
}

// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var src = __webpack_require__(94531);
// EXTERNAL MODULE: ../web3-shared/base/src/index.ts + 4 modules
var base_src = __webpack_require__(91339);
;// CONCATENATED MODULE: ../plugins/Flow/src/helpers/token.ts


function createFungibleToken(chainId, address, name, symbol, decimals) {
    return {
        id: address,
        chainId,
        type: src/* TokenType.Fungible */.iv.Fungible,
        address,
        name,
        symbol,
        decimals
    };
}
function createFungibleAsset(token, balance, logoURI, price) {
    var ref;
    return {
        id: token.address,
        chainId: token.chainId,
        balance: (0,base_src/* leftShift */.w5)(balance, 8).toFixed(),
        token,
        logoURI,
        value: {
            [src/* CurrencyType.USD */.V2.USD]: (0,base_src/* multipliedBy */.$q)((ref = price === null || price === void 0 ? void 0 : price.usd) !== null && ref !== void 0 ? ref : 0, (0,base_src/* leftShift */.w5)(balance, 8)).toFixed()
        },
        price
    };
}

;// CONCATENATED MODULE: ../plugins/Flow/src/helpers/index.ts




/***/ }),

/***/ 1154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a_": () => (/* reexport */ types/* ChainId */.a_),
  "td": () => (/* reexport */ types/* NetworkType */.td),
  "lP": () => (/* reexport */ types/* ProviderType */.lP),
  "eI": () => (/* reexport */ createClient),
  "aV": () => (/* reexport */ getTokenConstants),
  "V3": () => (/* reexport */ resolveAddressLinkOnExplorer),
  "vy": () => (/* reexport */ resolveBlockLinkOnExplorer),
  "z4": () => (/* reexport */ resolveTransactionLinkOnExplorer),
  "kD": () => (/* reexport */ useFCL_useFCL)
});

// UNUSED EXPORTS: AssetProviderType, getAuthConstants, resolveChainName, resolveLinkOnExplorer, resolveProviderName, useAuthConstants, useScript, useTokenConstants

// EXTERNAL MODULE: ../../node_modules/.pnpm/@blocto+fcl@0.0.78-alpha.8/node_modules/@blocto/fcl/dist/fcl.module.js
var fcl_module = __webpack_require__(94268);
;// CONCATENATED MODULE: ../web3-constants/flow/auth.json
const auth_namespaceObject = JSON.parse('{"ACCESS_NODE_API":{"Mainnet":"https://flow-access-mainnet.portto.io","Testnet":"https://access-testnet.onflow.org"},"DISCOVERY_WALLET":{"Mainnet":"https://flow-wallet.blocto.app/authn","Testnet":"https://flow-wallet-testnet.blocto.app/authn"},"CHALLENGE_HANDSHAKE":{"Mainnet":"https://flow-wallet.blocto.app/api/flow/authn","Testnet":"https://flow-wallet-testnet.blocto.app/api/flow/authn"},"MASK_APP_TITLE":{"Mainnet":"Mask Network","Testnet":"Mask Network (Dev)"},"MASK_APP_ICON":{"Mainnet":"https://dimensiondev.github.io/Mask-VI/assets/Logo/MB--Logo--Geo--ForceCircle--Blue.svg","Testnet":"https://dimensiondev.github.io/Mask-VI/assets/Logo/MB--Logo--Geo--ForceCircle--Blue.svg"}}');
;// CONCATENATED MODULE: ../web3-constants/flow/token.json
const token_namespaceObject = JSON.parse('{"FLOW_ADDRESS":{"Mainnet":"0x1654653399040a61","Testnet":""},"FUSD_ADDRESS":{"Mainnet":"0x3c5959b568896393","Testnet":"0xe223d8a629e49c68"},"TETHER_ADDRESS":{"Mainnet":"0xcfdd90d4a00f7b5b","Testnet":""},"FUNGIBLE_TOKEN_ADDRESS":{"Mainnet":"0xf233dcee88fe0abe","Testnet":"0x9a0766d93b6608b7"}}');
// EXTERNAL MODULE: ../web3-kit/src/index.ts + 3 modules
var src = __webpack_require__(36816);
// EXTERNAL MODULE: ../web3-shared/flow/types.ts
var types = __webpack_require__(19287);
;// CONCATENATED MODULE: ../web3-shared/flow/constants/index.ts




const getAuthConstants = (0,src/* transform */.vs)(types/* ChainId */.a_, auth_namespaceObject);
const useAuthConstants = (0,src/* hookTransform */.SL)(getAuthConstants);
const getTokenConstants = (0,src/* transform */.vs)(types/* ChainId */.a_, token_namespaceObject);
const useTokenConstants = (0,src/* hookTransform */.SL)(getTokenConstants);

;// CONCATENATED MODULE: ../web3-shared/flow/sdk/index.ts


function createClient(chainId) {
    const authConstants = getAuthConstants(chainId);
    fcl_module.config({
        'accessNode.api': authConstants.ACCESS_NODE_API,
        'app.detail.title': authConstants.MASK_APP_TITLE,
        'app.detail.icon': authConstants.MASK_APP_ICON,
        'challenge.handshake': authConstants.CHALLENGE_HANDSHAKE,
        'discovery.wallet.method': 'HTTP/POST'
    });
    return fcl_module;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ../web3-shared/flow/pipes/index.ts



const resolveChainName = (0,src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: 'mainnet',
    [types/* ChainId.Testnet */.a_.Testnet]: 'testnet'
}, ()=>'Unknown chain id'
);
const resolveProviderName = (0,src/* createLookupTableResolver */.FG)({
    [types/* ProviderType.Blocto */.lP.Blocto]: 'Blocto',
    [types/* ProviderType.Dapper */.lP.Dapper]: 'Dapper',
    [types/* ProviderType.Ledger */.lP.Ledger]: 'Ledger'
}, ()=>'Unknown provider type'
);
const resolveLinkOnExplorer = (0,src/* createLookupTableResolver */.FG)({
    [types/* ChainId.Mainnet */.a_.Mainnet]: 'https://flowscan.org/',
    [types/* ChainId.Testnet */.a_.Testnet]: 'https://testnet.flowscan.org/'
}, ()=>'Unknown chain id'
);
function resolveTransactionLinkOnExplorer(chainId, tx) {
    return dist_default()(resolveLinkOnExplorer(chainId), '/transaction/:tx', {
        tx
    });
}
function resolveAddressLinkOnExplorer(chainId, address) {
    return dist_default()(resolveLinkOnExplorer(chainId), '/account/:address', {
        address
    });
}
function resolveBlockLinkOnExplorer(chainId, blockNumber) {
    return '';
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.0.0-rc.0/node_modules/react/index.js
var react = __webpack_require__(76342);
;// CONCATENATED MODULE: ../web3-shared/flow/hooks/useFCL.ts


function useFCL_useFCL(chainId) {
    return (0,react.useMemo)(()=>{
        return createClient(chainId);
    }, [
        chainId
    ]);
}

;// CONCATENATED MODULE: ../web3-shared/flow/hooks/useScript.ts


function useScript(chainId, script) {
    const fcl = useFCL(chainId);
    return useAsyncRetry(async ()=>{
        return fcl.send([
            fcl.script(script)
        ]);
    }, [
        fcl,
        script
    ]);
}

;// CONCATENATED MODULE: ../web3-shared/flow/hooks/index.ts



;// CONCATENATED MODULE: ../web3-shared/flow/index.ts







/***/ }),

/***/ 11390:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e151ef2b82727c3881e1.png";

/***/ }),

/***/ 75183:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/625b21693ea176a83262.png";

/***/ })

}]);