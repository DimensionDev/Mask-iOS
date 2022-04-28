(function (ts) {
    'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var ts__namespace = /*#__PURE__*/_interopNamespace(ts);

    /**
     * Check if the current location matches. Used in manifest.json parser
     * @param location Current location
     * @param matches
     * @param exclude_matches
     * @param include_globs
     * @param exclude_globs
     */
    function matchingURL(location, matches, exclude_matches, include_globs, exclude_globs, about_blank) {
        let result = false;
        // ? We eval matches first then eval mismatches
        for (const item of matches)
            if (matches_matcher(item, location, about_blank))
                result = true;
        for (const item of exclude_matches)
            if (matches_matcher(item, location))
                result = false;
        if (include_globs.length)
            console.warn('include_globs not supported yet.');
        if (exclude_globs.length)
            console.warn('exclude_globs not supported yet.');
        return result;
    }
    /**
     * Supported protocols
     */
    const supportedProtocols = [
        'http:',
        'https:',
        // "ws:",
        // "wss:",
        // "ftp:",
        // "data:",
        // "file:"
    ];
    function matches_matcher(_, location, about_blank) {
        if (location.toString() === 'about:blank' && about_blank)
            return true;
        if (_ === '<all_urls>') {
            if (supportedProtocols.includes(location.protocol))
                return true;
            return false;
        }
        const [rule, wildcardProtocol] = normalizeURL(_);
        if (rule.port !== '')
            return false;
        if (!protocol_matcher(rule.protocol, location.protocol, wildcardProtocol))
            return false;
        if (!host_matcher(rule.hostname, location.hostname))
            return false;
        if (!path_matcher(rule.pathname, location.pathname, location.search))
            return false;
        return true;
    }
    /**
     * NormalizeURL
     * @param _ - URL defined in manifest
     */
    function normalizeURL(_) {
        if (_.startsWith('*://'))
            return [new URL(_.replace(/^\*:/, 'https:')), true];
        return [new URL(_), false];
    }
    function protocol_matcher(matcherProtocol, currentProtocol, wildcardProtocol) {
        // ? only `http:` and `https:` is supported currently
        if (!supportedProtocols.includes(currentProtocol))
            return false;
        // ? if wanted protocol is "*:", match everything
        if (wildcardProtocol)
            return true;
        if (matcherProtocol === currentProtocol)
            return true;
        return false;
    }
    function host_matcher(matcherHost, currentHost) {
        // ? %2A is *
        if (matcherHost === '%2A')
            return true;
        if (matcherHost.startsWith('%2A.')) {
            const part = matcherHost.replace(/^%2A/, '');
            if (part === currentHost)
                return false;
            return currentHost.endsWith(part);
        }
        return matcherHost === currentHost;
    }
    function path_matcher(matcherPath, currentPath, currentSearch) {
        if (!matcherPath.startsWith('/'))
            return false;
        if (matcherPath === '/*')
            return true;
        // ? '/a/b/c' matches '/a/b/c#123' but not '/a/b/c?123'
        if (matcherPath === currentPath && currentSearch === '')
            return true;
        // ? '/a/b/*' matches everything startsWith '/a/b/'
        if (matcherPath.endsWith('*') && currentPath.startsWith(matcherPath.slice(undefined, -1)))
            return true;
        if (matcherPath.indexOf('*') === -1)
            return matcherPath === currentPath;
        console.warn('Not supported path matcher in manifest.json', matcherPath);
        return true;
    }

    /// <reference types="./base.d.ts" />
    class r extends Error{constructor(r,e,t,n){super(e),this.name=r,this.code=t,this.stack=n;}}const e={Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError},t=(r="")=>r.replace(/^.+\n.+\n/,""),n=(()=>{try{return DOMException}catch(r){}})(),o=r=>"string"==typeof r,s=r=>"boolean"==typeof r,i$1=r=>"function"==typeof r,a=r=>"object"==typeof r&&null!==r,c=r=>Promise.reject(r),l=r=>Promise.resolve(r),u=Array.isArray,d=(r,e,t,n)=>{void 0===r&&(r=null),Number.isNaN(e=Math.floor(e))&&(e=-1);const o={jsonrpc:"2.0",id:r,error:{code:e,message:t,data:n}};return h(o.error,"data"),o},f=(r,e,t)=>{const{id:n}=r,{code:o,message:s,data:i}=t(e,r);return d(n,o,s,i)},p=(r="",e=-1)=>t=>{let c="";a(t)&&m(t,"message")&&o(t.message)&&(c=t.message);let l=g("Error",((r=t.constructor)=>i$1(r)&&r.name));return n&&t instanceof n&&(l="DOMException:"+t.name),(o(t)||"number"==typeof t||s(t)||"bigint"==typeof t)&&(l="Error",c=t+""),{code:e,message:c,data:r?{stack:r,type:l}:{type:l}}},y=r=>{if(!a(r))return !1;if(!m(r,"jsonrpc"))return !1;if("2.0"!==r.jsonrpc)return !1;if(m(r,"params")){const e=r.params;if(!u(e)&&!a(e))return !1}return !0},m=(r,e)=>e in r,g=(r,e)=>{let t=r;try{t=e();}catch(r){}return o(t)?t:r},h=(r,e)=>{void 0===r[e]&&delete r[e];},E={serialization:r=>r,deserialization:r=>r},b="AsyncCall/",v=Symbol.for(b+"ignored"),$=Symbol.for(b+"notify"),w=Symbol.for(b+"batch");const x=()=>Math.random().toString(36).slice(2);function M(g={},k){let b=void 0;g instanceof Promise?l(g).then((r=>b=r)):b=g;const{serializer:S=E,key:P="jsonrpc",strict:j=!0,log:M=!0,parameterStructures:N="by-position",preferLocalImplementation:O=!1,idGenerator:R=x,mapError:_,logger:z,channel:A}=k,[C,D]=(r=>{if(!s(r)){const{methodNotFound:e,unknownMessage:t}=r;return [e,t]}return [r,r]})(j),[I,W,T,q,F,J]=(r=>{if("all"===r)return [!0,!0,!0,!0,!0,!0];if(!s(r)){const{beCalled:e,localError:t,remoteError:n,type:o,requestReplay:s,sendLocalStack:i}=r;return [e,t,n,"basic"!==o,s,i]}return r?[!0,!0,!0,!0]:[]})(M),{log:L,error:U=L,debug:G=L,groupCollapsed:B=L,groupEnd:H=L}=z||console,K=new Map,Q=async r=>{let e;try{if(e=await Y(r),y(e))return await er(e);if(u(e)&&e.every(y)&&0!==e.length){const r=await Promise.all(e.map(er));if(e.every((r=>void 0===r)))return;return r.filter((r=>r))}if(D){let r=e.id;return void 0===r&&(r=null),(r=>d(r,-32600,"Invalid Request"))(r)}return}catch(r){return W&&U(r,e,void 0),((r,e)=>{const t=f({},r,e),n=t.error;return n.code=-32700,n.message="Parse error",t})(r,_||p(r&&r.stack))}},V=async r=>{if(r){if(u(r)){const e=r.filter((r=>m(r,"id")));if(0===e.length)return;return X(e)}if(m(r,"id"))return X(r)}},X=r=>S.serialization(r),Y=r=>S.deserialization(r);var Z;if(m(Z=A,"setup")&&i$1(Z.setup)&&A.setup((r=>Q(r).then(V)),(r=>{const e=Y(r);return !!y(e)||l(e).then(y)})),(r=>m(r,"send")&&i$1(r.send))(A)){const r=A;r.on&&r.on((e=>Q(e).then(V).then((e=>e&&r.send(e)))));}async function rr(r,e=!1){e&&(r=[...r]);const t=await X(r);return A.send(t)}const er=s=>m(s,"method")?(async r=>{b||await g;let e="";try{const{params:n,method:o,id:s,remoteStack:a}=r,c=o.startsWith("rpc.")?Symbol.for(o):o,l=b[c];if(!i$1(l))return C?d(s,-32601,"Method not found"):void(W&&G("Missing method",c,r));const f=u(n)?n:[n];e=t(Error().stack);const p=new Promise((r=>r(l.apply(b,f))));if(I)if(q){const r=[`${P}.%c${o}%c(${f.map((()=>"%o")).join(", ")}%c)\n%o %c@${s}`,"color: #d2c057","",...f,"",p,"color: gray; font-style: italic;"];F&&r.push((()=>{debugger;return l.apply(b,f)})),a?(B(...r),L(a),H()):L(...r);}else L(`${P}.${o}(${""+[...f]}) @${s}`);if(await p===v)return;return ((r,e)=>{const t={jsonrpc:"2.0",id:r,result:e};return h(t,"id"),t})(s,await p)}catch(t){return a(t)&&m(t,"stack")&&(t.stack=e.split("\n").reduce(((r,e)=>r.replace(e+"\n","")),""+t.stack||"")),W&&U(t),f(r,t,_||p(J?t.stack:void 0))}})(s):(async t=>{let s="",i="",c=0,l="Error";if(m(t,"error")){const r=t.error;s=r.message,c=r.code;const e=r.data;i=a(e)&&m(e,"stack")&&o(e.stack)?e.stack:"<remote stack not available>",l=a(e)&&m(e,"type")&&o(e.type)?e.type:"Error",T&&(q?U(`${l}: ${s}(${c}) %c@${t.id}\n%c${i}`,"color: gray",""):U(`${l}: ${s}(${c}) @${t.id}\n${i}`));}if(null==t.id)return;const{f:[u,d],stack:f}=K.get(t.id)||{stack:"",f:[null,null]};u&&(K.delete(t.id),m(t,"error")?d(((t,o,s,i)=>{try{if(t.startsWith("DOMException:")&&n){const[,r]=t.split("DOMException:");return new n(o,r)}if(t in e){const r=new e[t](o);return r.stack=i,r.code=s,r}return new r(t,o,s,i)}catch(r){return Error(`E${s} ${t}: ${o}\n${i}`)}})(l,s,c,i+"\n    аt AsyncCall (rpc) \n"+f)):u(t.result));})(s);return new Proxy({__proto__:null},{get(r,e){if(o(e)&&r[e])return r[e];const n=r=>(...n)=>{let s=t(Error().stack),l=void 0;if(e===w&&(l=n.shift(),e=n.shift()),"symbol"==typeof e){const r=Symbol.keyFor(e)||e.description;if(r){if(!r.startsWith("rpc."))return c("Not start with rpc.");e=r;}}else if(e.startsWith("rpc."))return c(new TypeError("No direct call to internal methods"));if(O&&b&&o(e)){const r=b[e];if(r&&i$1(r))return new Promise((e=>e(r(...n))))}return new Promise(((t,o)=>{const i=R(),[c]=n,u=J?s:"",d="by-name"===N&&1===n.length&&a(c)?c:n,f=((r,e,t,n)=>{const o={jsonrpc:"2.0",id:r,method:e,params:t,remoteStack:n};return h(o,"id"),((r,e)=>{r[e]||delete r[e];})(o,"remoteStack"),o})(r?void 0:i,e,d,u);if(l?(l.push(f),l.r||(l.r=[()=>rr(l,!0),r=>((r,e)=>{for(const t of r)if(m(t,"id")){const r=K.get(t.id);r&&r.f[1](e);}})(l,r)])):rr(f).catch(o),r)return t();K.set(i,{f:[t,o],stack:s});}))},s=n(!1);return s[$]=n(!0),s[$][$]=s[$],o(e)&&Object.defineProperty(r,e,{value:s,configurable:!0}),s}})}

    /**
     * Used for keep reference to browser.runtime.onMessage
     */
    const TwoWayMessagePromiseResolver = new Map();
    /**
     * To store listener for Host dispatched events.
     */
    const EventPools = {
        'browser.webNavigation.onCommitted': new Map(),
        'browser.webNavigation.onDOMContentLoaded': new Map(),
        'browser.webNavigation.onCompleted': new Map(),
        'browser.runtime.onMessage': new Map(),
        'browser.runtime.onInstall': new Map(),
        'browser.runtime.onConnect': new Map(),
        'browser.runtime.onConnect:Port:onMessage': new Map(),
        'browser.runtime.onConnect:Port:onDisconnect': new Map(),
    };
    /**
     * Dispatch a normal event (that not have a "response").
     * Like browser.webNavigation.onCommitted
     */
    async function dispatchNormalEvent(event, toExtensionID, ...args) {
        if (!EventPools[event])
            return;
        for (const [extensionID, fns] of EventPools[event].entries()) {
            if (Array.isArray(toExtensionID) && toExtensionID.indexOf(extensionID) === -1)
                continue;
            if (!Array.isArray(toExtensionID) && toExtensionID !== extensionID && toExtensionID !== '*')
                continue;
            for (const f of fns) {
                try {
                    f(...args);
                }
                catch (e) {
                    console.error(e);
                }
            }
        }
    }
    async function dispatchPortEvent(event, toPortID, message) {
        const pool = event === 'message'
            ? EventPools['browser.runtime.onConnect:Port:onMessage']
            : EventPools['browser.runtime.onConnect:Port:onDisconnect'];
        if (!pool)
            return;
        const portID = 'port://' + toPortID;
        const fns = pool.get(portID);
        if (!fns)
            return;
        for (const f of fns) {
            try {
                f(message);
            }
            catch (e) {
                console.error(e);
            }
        }
    }
    function createPortListener(portID, event) {
        return createEventListener('port://' + portID, event === 'disconnected'
            ? 'browser.runtime.onConnect:Port:onDisconnect'
            : 'browser.runtime.onConnect:Port:onMessage');
    }
    function clearPortListener(portID) {
        EventPools['browser.runtime.onConnect:Port:onDisconnect'].delete('port://' + portID);
        EventPools['browser.runtime.onConnect:Port:onMessage'].delete('port://' + portID);
    }
    /**
     * Create a `EventObject<ListenerType>` object.
     *
     * Can be set on browser.webNavigation.onCommitted etc...
     */
    function createEventListener(extensionID, event) {
        if (!EventPools[event].has(extensionID)) {
            EventPools[event].set(extensionID, new Set());
        }
        const pool = EventPools[event].get(extensionID);
        const handler = {
            addListener(callback) {
                if (typeof callback !== 'function')
                    throw new TypeError('Listener must be function');
                pool.add(callback);
            },
            removeListener(callback) {
                pool.delete(callback);
            },
            hasListener(listener) {
                return pool.has(listener);
            },
        };
        return handler;
    }

    function deepClone(obj) {
        // todo: change another impl plz.
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * Create browser.runtime.sendMessage() function
     * @param extensionID
     */
    function createRuntimeSendMessage(extensionID) {
        return function () {
            let toExtensionID, message;
            if (arguments.length === 1) {
                toExtensionID = extensionID;
                message = arguments[0];
            }
            else if (arguments.length === 2) {
                toExtensionID = arguments[0];
                message = arguments[1];
            }
            else {
                toExtensionID = '';
            }
            return sendMessageWithResponse(extensionID, toExtensionID, null, message);
        };
    }
    function sendMessageWithResponse(extensionID, toExtensionID, tabId, message) {
        return new Promise((resolve, reject) => {
            const messageID = Math.random().toString();
            FrameworkRPC.sendMessage(extensionID, toExtensionID, tabId, messageID, {
                type: 'message',
                data: message,
                response: false,
            }).catch((e) => {
                reject(e);
                TwoWayMessagePromiseResolver.delete(messageID);
            });
            TwoWayMessagePromiseResolver.set(messageID, [resolve, reject]);
        });
    }
    /**
     * Message handler of normal message
     */
    function onNormalMessage(message, sender, toExtensionID, extensionID, messageID) {
        const fns = EventPools['browser.runtime.onMessage'].get(toExtensionID);
        if (!fns)
            return;
        let responseSend = false;
        for (const fn of fns) {
            try {
                // ? dispatch message
                const result = fn(deepClone(message), deepClone(sender), sendResponse);
                if (result === undefined) {
                    // ? do nothing
                }
                else if (typeof result === 'boolean') {
                    // ! do what ? this is the deprecated path
                }
                else if (typeof result === 'object' && typeof result.then === 'function') {
                    // ? response the answer
                    result.then((data) => {
                        if (data === undefined)
                            return;
                        sendResponse(data);
                    });
                }
            }
            catch (e) {
                console.error(e);
            }
        }
        function sendResponse(data) {
            if (responseSend)
                return false;
            responseSend = true;
            FrameworkRPC.sendMessage(toExtensionID, extensionID, sender.tab.id, messageID, {
                data,
                response: true,
                type: 'message',
            });
            return true;
        }
    }

    function debugModeURLRewrite(extensionID, url) {
        if (!isDebug)
            return url;
        const u = new URL(url, getPrefix(extensionID));
        if (u.protocol === 'holoflows-extension:') {
            u.protocol = location.protocol;
            u.host = location.host;
            u.pathname = '/extension/' + extensionID + '/' + u.pathname;
            console.debug('Rewrited url', url, 'to', u.toJSON());
            return u.toJSON();
        }
        else if (u.origin === location.origin) {
            if (u.pathname.startsWith('/extension/'))
                return url;
            u.pathname = '/extension/' + extensionID + u.pathname;
            console.debug('Rewrited url', url, 'to', u.toJSON());
            return u.toJSON();
        }
        return url;
    }

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    var buffer = {};

    var base64Js = {};

    base64Js.byteLength = byteLength;
    base64Js.toByteArray = toByteArray;
    base64Js.fromByteArray = fromByteArray;

    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i];
      revLookup[code.charCodeAt(i)] = i;
    }

    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;

    function getLens (b64) {
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42
      var validLen = b64.indexOf('=');
      if (validLen === -1) validLen = len;

      var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4);

      return [validLen, placeHoldersLen]
    }

    // base64 is 4/3 + up to two characters of the original data
    function byteLength (b64) {
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function _byteLength (b64, validLen, placeHoldersLen) {
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }

    function toByteArray (b64) {
      var tmp;
      var lens = getLens(b64);
      var validLen = lens[0];
      var placeHoldersLen = lens[1];

      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

      var curByte = 0;

      // if there are placeholders, only get up to the last complete 4 chars
      var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen;

      var i;
      for (i = 0; i < len; i += 4) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 18) |
          (revLookup[b64.charCodeAt(i + 1)] << 12) |
          (revLookup[b64.charCodeAt(i + 2)] << 6) |
          revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = (tmp >> 16) & 0xFF;
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }

      if (placeHoldersLen === 2) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 2) |
          (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[curByte++] = tmp & 0xFF;
      }

      if (placeHoldersLen === 1) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 10) |
          (revLookup[b64.charCodeAt(i + 1)] << 4) |
          (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F]
    }

    function encodeChunk (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp =
          ((uint8[i] << 16) & 0xFF0000) +
          ((uint8[i + 1] << 8) & 0xFF00) +
          (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
      }
      return output.join('')
    }

    function fromByteArray (uint8) {
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(
          lookup[tmp >> 2] +
          lookup[(tmp << 4) & 0x3F] +
          '=='
        );
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(
          lookup[tmp >> 10] +
          lookup[(tmp >> 4) & 0x3F] +
          lookup[(tmp << 2) & 0x3F] +
          '='
        );
      }

      return parts.join('')
    }

    var ieee754 = {};

    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

    ieee754.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = (nBytes * 8) - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    };

    ieee754.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = (nBytes * 8) - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = ((value * c) - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    };

    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */

    (function (exports) {

    const base64 = base64Js;
    const ieee754$1 = ieee754;
    const customInspectSymbol =
      (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
        ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
        : null;

    exports.Buffer = Buffer;
    exports.SlowBuffer = SlowBuffer;
    exports.INSPECT_MAX_BYTES = 50;

    const K_MAX_LENGTH = 0x7fffffff;
    exports.kMaxLength = K_MAX_LENGTH;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Print warning and recommend using `buffer` v4.x which has an Object
     *               implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * We report that the browser does not support typed arrays if the are not subclassable
     * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
     * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
     * for __proto__ and has a buggy typed array implementation.
     */
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
        typeof console.error === 'function') {
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by ' +
        '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      );
    }

    function typedArraySupport () {
      // Can typed array instances can be augmented?
      try {
        const arr = new Uint8Array(1);
        const proto = { foo: function () { return 42 } };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42
      } catch (e) {
        return false
      }
    }

    Object.defineProperty(Buffer.prototype, 'parent', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.buffer
      }
    });

    Object.defineProperty(Buffer.prototype, 'offset', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.byteOffset
      }
    });

    function createBuffer (length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"')
      }
      // Return an augmented `Uint8Array` instance
      const buf = new Uint8Array(length);
      Object.setPrototypeOf(buf, Buffer.prototype);
      return buf
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer (arg, encodingOrOffset, length) {
      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          )
        }
        return allocUnsafe(arg)
      }
      return from(arg, encodingOrOffset, length)
    }

    Buffer.poolSize = 8192; // not used by this implementation

    function from (value, encodingOrOffset, length) {
      if (typeof value === 'string') {
        return fromString(value, encodingOrOffset)
      }

      if (ArrayBuffer.isView(value)) {
        return fromArrayView(value)
      }

      if (value == null) {
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
          'or Array-like Object. Received type ' + (typeof value)
        )
      }

      if (isInstance(value, ArrayBuffer) ||
          (value && isInstance(value.buffer, ArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
      }

      if (typeof SharedArrayBuffer !== 'undefined' &&
          (isInstance(value, SharedArrayBuffer) ||
          (value && isInstance(value.buffer, SharedArrayBuffer)))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
      }

      if (typeof value === 'number') {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        )
      }

      const valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length)
      }

      const b = fromObject(value);
      if (b) return b

      if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
          typeof value[Symbol.toPrimitive] === 'function') {
        return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
      }

      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' + (typeof value)
      )
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length)
    };

    // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
    // https://github.com/feross/buffer/pull/148
    Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
    Object.setPrototypeOf(Buffer, Uint8Array);

    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number')
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"')
      }
    }

    function alloc (size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpreted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(size).fill(fill, encoding)
          : createBuffer(size).fill(fill)
      }
      return createBuffer(size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(size, fill, encoding)
    };

    function allocUnsafe (size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0)
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(size)
    };

    function fromString (string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }

      const length = byteLength(string, encoding) | 0;
      let buf = createBuffer(length);

      const actual = buf.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual);
      }

      return buf
    }

    function fromArrayLike (array) {
      const length = array.length < 0 ? 0 : checked(array.length) | 0;
      const buf = createBuffer(length);
      for (let i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255;
      }
      return buf
    }

    function fromArrayView (arrayView) {
      if (isInstance(arrayView, Uint8Array)) {
        const copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
      }
      return fromArrayLike(arrayView)
    }

    function fromArrayBuffer (array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds')
      }

      let buf;
      if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array);
      } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }

      // Return an augmented `Uint8Array` instance
      Object.setPrototypeOf(buf, Buffer.prototype);

      return buf
    }

    function fromObject (obj) {
      if (Buffer.isBuffer(obj)) {
        const len = checked(obj.length) | 0;
        const buf = createBuffer(len);

        if (buf.length === 0) {
          return buf
        }

        obj.copy(buf, 0, 0, len);
        return buf
      }

      if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
          return createBuffer(0)
        }
        return fromArrayLike(obj)
      }

      if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data)
      }
    }

    function checked (length) {
      // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
      }
      return length | 0
    }

    function SlowBuffer (length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0;
      }
      return Buffer.alloc(+length)
    }

    Buffer.isBuffer = function isBuffer (b) {
      return b != null && b._isBuffer === true &&
        b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    };

    Buffer.compare = function compare (a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        )
      }

      if (a === b) return 0

      let x = a.length;
      let y = b.length;

      for (let i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer.concat = function concat (list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      let i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      const buffer = Buffer.allocUnsafe(length);
      let pos = 0;
      for (i = 0; i < list.length; ++i) {
        let buf = list[i];
        if (isInstance(buf, Uint8Array)) {
          if (pos + buf.length > buffer.length) {
            if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
            buf.copy(buffer, pos);
          } else {
            Uint8Array.prototype.set.call(
              buffer,
              buf,
              pos
            );
          }
        } else if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        } else {
          buf.copy(buffer, pos);
        }
        pos += buf.length;
      }
      return buffer
    };

    function byteLength (string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
          'Received type ' + typeof string
        )
      }

      const len = string.length;
      const mustMatch = (arguments.length > 2 && arguments[2] === true);
      if (!mustMatch && len === 0) return 0

      // Use a for loop to avoid recursion
      let loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            }
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString (encoding, start, end) {
      let loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) encoding = 'utf8';

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
    // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
    // reliably in a browserify context because there could be multiple different
    // copies of the 'buffer' package in use. This method works even for Buffer
    // instances that were created from another copy of the `buffer` package.
    // See: https://github.com/feross/buffer/issues/154
    Buffer.prototype._isBuffer = true;

    function swap (b, n, m) {
      const i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16 () {
      const len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (let i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this
    };

    Buffer.prototype.swap32 = function swap32 () {
      const len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (let i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this
    };

    Buffer.prototype.swap64 = function swap64 () {
      const len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (let i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this
    };

    Buffer.prototype.toString = function toString () {
      const length = this.length;
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    };

    Buffer.prototype.toLocaleString = Buffer.prototype.toString;

    Buffer.prototype.equals = function equals (b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    };

    Buffer.prototype.inspect = function inspect () {
      let str = '';
      const max = exports.INSPECT_MAX_BYTES;
      str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
      if (this.length > max) str += ' ... ';
      return '<Buffer ' + str + '>'
    };
    if (customInspectSymbol) {
      Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
    }

    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength);
      }
      if (!Buffer.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. ' +
          'Received type ' + (typeof target)
        )
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) return 0

      let x = thisEnd - thisStart;
      let y = end - start;
      const len = Math.min(x, y);

      const thisCopy = this.slice(thisStart, thisEnd);
      const targetCopy = target.slice(start, end);

      for (let i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) return -1
      if (y < x) return 1
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset; // Coerce to Number.
      if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1;
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      let indexSize = 1;
      let arrLength = arr.length;
      let valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      let i;
      if (dir) {
        let foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for (i = byteOffset; i >= 0; i--) {
          let found = true;
          for (let j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) return i
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    };

    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0;
      const remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      const strLen = string.length;

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      let i;
      for (i = 0; i < length; ++i) {
        const parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === undefined) encoding = 'utf8';
        } else {
          encoding = length;
          length = undefined;
        }
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      const remaining = this.length - offset;
      if (length === undefined || length > remaining) length = remaining;

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) encoding = 'utf8';

      let loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
          case 'latin1':
          case 'binary':
            return asciiWrite(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
      } else {
        return base64.fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end);
      const res = [];

      let i = start;
      while (i < end) {
        const firstByte = buf[i];
        let codePoint = null;
        let bytesPerSequence = (firstByte > 0xEF)
          ? 4
          : (firstByte > 0xDF)
              ? 3
              : (firstByte > 0xBF)
                  ? 2
                  : 1;

        if (i + bytesPerSequence <= end) {
          let secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    const MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray (codePoints) {
      const len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      let res = '';
      let i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res
    }

    function asciiSlice (buf, start, end) {
      let ret = '';
      end = Math.min(buf.length, end);

      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice (buf, start, end) {
      let ret = '';
      end = Math.min(buf.length, end);

      for (let i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice (buf, start, end) {
      const len = buf.length;

      if (!start || start < 0) start = 0;
      if (!end || end < 0 || end > len) end = len;

      let out = '';
      for (let i = start; i < end; ++i) {
        out += hexSliceLookupTable[buf[i]];
      }
      return out
    }

    function utf16leSlice (buf, start, end) {
      const bytes = buf.slice(start, end);
      let res = '';
      // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
      for (let i = 0; i < bytes.length - 1; i += 2) {
        res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256));
      }
      return res
    }

    Buffer.prototype.slice = function slice (start, end) {
      const len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) start = 0;
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) end = 0;
      } else if (end > len) {
        end = len;
      }

      if (end < start) end = start;

      const newBuf = this.subarray(start, end);
      // Return an augmented `Uint8Array` instance
      Object.setPrototypeOf(newBuf, Buffer.prototype);

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }

    Buffer.prototype.readUintLE =
    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer.prototype.readUintBE =
    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      let val = this[offset + --byteLength];
      let mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer.prototype.readUint8 =
    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      return this[offset]
    };

    Buffer.prototype.readUint16LE =
    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer.prototype.readUint16BE =
    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer.prototype.readUint32LE =
    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer.prototype.readUint32BE =
    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
      offset = offset >>> 0;
      validateNumber(offset, 'offset');
      const first = this[offset];
      const last = this[offset + 7];
      if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
      }

      const lo = first +
        this[++offset] * 2 ** 8 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 24;

      const hi = this[++offset] +
        this[++offset] * 2 ** 8 +
        this[++offset] * 2 ** 16 +
        last * 2 ** 24;

      return BigInt(lo) + (BigInt(hi) << BigInt(32))
    });

    Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
      offset = offset >>> 0;
      validateNumber(offset, 'offset');
      const first = this[offset];
      const last = this[offset + 7];
      if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
      }

      const hi = first * 2 ** 24 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        this[++offset];

      const lo = this[++offset] * 2 ** 24 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        last;

      return (BigInt(hi) << BigInt(32)) + BigInt(lo)
    });

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      let val = this[offset];
      let mul = 1;
      let i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) checkOffset(offset, byteLength, this.length);

      let i = byteLength;
      let mul = 1;
      let val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) val -= Math.pow(2, 8 * byteLength);

      return val
    };

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 1, this.length);
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 2, this.length);
      const val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
      offset = offset >>> 0;
      validateNumber(offset, 'offset');
      const first = this[offset];
      const last = this[offset + 7];
      if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
      }

      const val = this[offset + 4] +
        this[offset + 5] * 2 ** 8 +
        this[offset + 6] * 2 ** 16 +
        (last << 24); // Overflow

      return (BigInt(val) << BigInt(32)) +
        BigInt(first +
        this[++offset] * 2 ** 8 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 24)
    });

    Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
      offset = offset >>> 0;
      validateNumber(offset, 'offset');
      const first = this[offset];
      const last = this[offset + 7];
      if (first === undefined || last === undefined) {
        boundsError(offset, this.length - 8);
      }

      const val = (first << 24) + // Overflow
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        this[++offset];

      return (BigInt(val) << BigInt(32)) +
        BigInt(this[++offset] * 2 ** 24 +
        this[++offset] * 2 ** 16 +
        this[++offset] * 2 ** 8 +
        last)
    });

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754$1.read(this, offset, true, 23, 4)
    };

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 4, this.length);
      return ieee754$1.read(this, offset, false, 23, 4)
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754$1.read(this, offset, true, 52, 8)
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert) checkOffset(offset, 8, this.length);
      return ieee754$1.read(this, offset, false, 52, 8)
    };

    function checkInt (buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }

    Buffer.prototype.writeUintLE =
    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      let mul = 1;
      let i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUintBE =
    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength = byteLength >>> 0;
      if (!noAssert) {
        const maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      let i = byteLength - 1;
      let mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUint8 =
    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer.prototype.writeUint16LE =
    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      return offset + 2
    };

    Buffer.prototype.writeUint16BE =
    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
      return offset + 2
    };

    Buffer.prototype.writeUint32LE =
    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      this[offset + 3] = (value >>> 24);
      this[offset + 2] = (value >>> 16);
      this[offset + 1] = (value >>> 8);
      this[offset] = (value & 0xff);
      return offset + 4
    };

    Buffer.prototype.writeUint32BE =
    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
      return offset + 4
    };

    function wrtBigUInt64LE (buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);

      let lo = Number(value & BigInt(0xffffffff));
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      lo = lo >> 8;
      buf[offset++] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      hi = hi >> 8;
      buf[offset++] = hi;
      return offset
    }

    function wrtBigUInt64BE (buf, value, offset, min, max) {
      checkIntBI(value, min, max, buf, offset, 7);

      let lo = Number(value & BigInt(0xffffffff));
      buf[offset + 7] = lo;
      lo = lo >> 8;
      buf[offset + 6] = lo;
      lo = lo >> 8;
      buf[offset + 5] = lo;
      lo = lo >> 8;
      buf[offset + 4] = lo;
      let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
      buf[offset + 3] = hi;
      hi = hi >> 8;
      buf[offset + 2] = hi;
      hi = hi >> 8;
      buf[offset + 1] = hi;
      hi = hi >> 8;
      buf[offset] = hi;
      return offset + 8
    }

    Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
    });

    Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
    });

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, (8 * byteLength) - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      let i = 0;
      let mul = 1;
      let sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        const limit = Math.pow(2, (8 * byteLength) - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      let i = byteLength - 1;
      let mul = 1;
      let sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
      if (value < 0) value = 0xff + value + 1;
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      return offset + 2
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
      this[offset] = (value >>> 8);
      this[offset + 1] = (value & 0xff);
      return offset + 2
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      this[offset] = (value & 0xff);
      this[offset + 1] = (value >>> 8);
      this[offset + 2] = (value >>> 16);
      this[offset + 3] = (value >>> 24);
      return offset + 4
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
      if (value < 0) value = 0xffffffff + value + 1;
      this[offset] = (value >>> 24);
      this[offset + 1] = (value >>> 16);
      this[offset + 2] = (value >>> 8);
      this[offset + 3] = (value & 0xff);
      return offset + 4
    };

    Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
      return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
    });

    Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
      return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
    });

    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    };

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
      if (!start) start = 0;
      if (!end && end !== 0) end = this.length;
      if (targetStart >= target.length) targetStart = target.length;
      if (!targetStart) targetStart = 0;
      if (end > 0 && end < start) end = start;

      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')

      // Are we oob?
      if (end > this.length) end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      const len = end - start;

      if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end);
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
        if (val.length === 1) {
          const code = val.charCodeAt(0);
          if ((encoding === 'utf8' && code < 128) ||
              encoding === 'latin1') {
            // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
          }
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      } else if (typeof val === 'boolean') {
        val = Number(val);
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) val = 0;

      let i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        const bytes = Buffer.isBuffer(val)
          ? val
          : Buffer.from(val, encoding);
        const len = bytes.length;
        if (len === 0) {
          throw new TypeError('The value "' + val +
            '" is invalid for argument "value"')
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // CUSTOM ERRORS
    // =============

    // Simplified versions from Node, changed for Buffer-only usage
    const errors = {};
    function E (sym, getMessage, Base) {
      errors[sym] = class NodeError extends Base {
        constructor () {
          super();

          Object.defineProperty(this, 'message', {
            value: getMessage.apply(this, arguments),
            writable: true,
            configurable: true
          });

          // Add the error code to the name to include it in the stack trace.
          this.name = `${this.name} [${sym}]`;
          // Access the stack to generate the error message including the error code
          // from the name.
          this.stack; // eslint-disable-line no-unused-expressions
          // Reset the name to the actual name.
          delete this.name;
        }

        get code () {
          return sym
        }

        set code (value) {
          Object.defineProperty(this, 'code', {
            configurable: true,
            enumerable: true,
            value,
            writable: true
          });
        }

        toString () {
          return `${this.name} [${sym}]: ${this.message}`
        }
      };
    }

    E('ERR_BUFFER_OUT_OF_BOUNDS',
      function (name) {
        if (name) {
          return `${name} is outside of buffer bounds`
        }

        return 'Attempt to access memory outside buffer bounds'
      }, RangeError);
    E('ERR_INVALID_ARG_TYPE',
      function (name, actual) {
        return `The "${name}" argument must be of type number. Received type ${typeof actual}`
      }, TypeError);
    E('ERR_OUT_OF_RANGE',
      function (str, range, input) {
        let msg = `The value of "${str}" is out of range.`;
        let received = input;
        if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
          received = addNumericalSeparator(String(input));
        } else if (typeof input === 'bigint') {
          received = String(input);
          if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
            received = addNumericalSeparator(received);
          }
          received += 'n';
        }
        msg += ` It must be ${range}. Received ${received}`;
        return msg
      }, RangeError);

    function addNumericalSeparator (val) {
      let res = '';
      let i = val.length;
      const start = val[0] === '-' ? 1 : 0;
      for (; i >= start + 4; i -= 3) {
        res = `_${val.slice(i - 3, i)}${res}`;
      }
      return `${val.slice(0, i)}${res}`
    }

    // CHECK FUNCTIONS
    // ===============

    function checkBounds (buf, offset, byteLength) {
      validateNumber(offset, 'offset');
      if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
        boundsError(offset, buf.length - (byteLength + 1));
      }
    }

    function checkIntBI (value, min, max, buf, offset, byteLength) {
      if (value > max || value < min) {
        const n = typeof min === 'bigint' ? 'n' : '';
        let range;
        if (byteLength > 3) {
          if (min === 0 || min === BigInt(0)) {
            range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
          } else {
            range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                    `${(byteLength + 1) * 8 - 1}${n}`;
          }
        } else {
          range = `>= ${min}${n} and <= ${max}${n}`;
        }
        throw new errors.ERR_OUT_OF_RANGE('value', range, value)
      }
      checkBounds(buf, offset, byteLength);
    }

    function validateNumber (value, name) {
      if (typeof value !== 'number') {
        throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
      }
    }

    function boundsError (value, length, type) {
      if (Math.floor(value) !== value) {
        validateNumber(value, type);
        throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
      }

      if (length < 0) {
        throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
      }

      throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                        `>= ${type ? 1 : 0} and <= ${length}`,
                                        value)
    }

    // HELPER FUNCTIONS
    // ================

    const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

    function base64clean (str) {
      // Node takes equal signs as end of the Base64 encoding
      str = str.split('=')[0];
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = str.trim().replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function utf8ToBytes (string, units) {
      units = units || Infinity;
      let codePoint;
      const length = string.length;
      let leadSurrogate = null;
      const bytes = [];

      for (let i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes (str) {
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes (str, units) {
      let c, hi, lo;
      const byteArray = [];
      for (let i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }

    function base64ToBytes (str) {
      return base64.toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
      let i;
      for (i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i];
      }
      return i
    }

    // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
    // the `instanceof` check but they should be treated as of that type.
    // See: https://github.com/feross/buffer/issues/166
    function isInstance (obj, type) {
      return obj instanceof type ||
        (obj != null && obj.constructor != null && obj.constructor.name != null &&
          obj.constructor.name === type.name)
    }
    function numberIsNaN (obj) {
      // For IE11 support
      return obj !== obj // eslint-disable-line no-self-compare
    }

    // Create lookup table for `toString('hex')`
    // See: https://github.com/feross/buffer/issues/219
    const hexSliceLookupTable = (function () {
      const alphabet = '0123456789abcdef';
      const table = new Array(256);
      for (let i = 0; i < 16; ++i) {
        const i16 = i * 16;
        for (let j = 0; j < 16; ++j) {
          table[i16 + j] = alphabet[i] + alphabet[j];
        }
      }
      return table
    })();

    // Return not function with Error if BigInt not supported
    function defineBigIntMethod (fn) {
      return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
    }

    function BufferBigIntNotDefined () {
      throw new Error('BigInt not supported')
    }
    }(buffer));

    function decodeStringOrBufferSource(val) {
        if (val.type === 'text')
            return val.content;
        if (val.type === 'blob')
            return new Blob([Uint8ArrayFromBase64(val.content)], { type: val.mimeType });
        if (val.type === 'array buffer') {
            return Uint8ArrayFromBase64(val.content).buffer;
        }
        return null;
    }
    async function encodeStringOrBufferSource(val) {
        if (typeof val === 'string')
            return { type: 'text', content: val };
        if (val instanceof Blob) {
            const buffer = new Uint8Array(await new Response(val).arrayBuffer());
            return { type: 'blob', mimeType: val.type, content: Uint8ArrayToBase64(buffer) };
        }
        if (val instanceof ArrayBuffer) {
            return { type: 'array buffer', content: Uint8ArrayToBase64(new Uint8Array(val)) };
        }
        if ('buffer' in val && val.buffer instanceof ArrayBuffer) {
            return encodeStringOrBufferSource(val.buffer);
        }
        console.error(val);
        throw new TypeError('Invalid type');
    }
    function Uint8ArrayFromBase64(sBase64, nBlockSize) {
        return new Uint8Array(buffer.Buffer.from(sBase64, 'base64'));
    }
    function Uint8ArrayToBase64(aBytes) {
        return buffer.Buffer.from(aBytes).toString('base64');
    }

    const normalized = Symbol('Normalized resources');
    function normalizePath(path, extensionID) {
        const prefix = getPrefix(extensionID);
        if (path.startsWith(prefix))
            return debugModeURLRewrite(extensionID, path);
        else
            return debugModeURLRewrite(extensionID, new URL(path, prefix).toJSON());
    }
    function getPrefix(extensionID) {
        return 'holoflows-extension://' + extensionID + '/';
    }
    function getResource(extensionID, resources, path) {
        // Normalization the resources
        // @ts-ignore
        if (!resources[normalized]) {
            for (const key in resources) {
                if (key.startsWith(getPrefix(extensionID)))
                    continue;
                const obj = resources[key];
                delete resources[key];
                resources[new URL(key, getPrefix(extensionID)).toJSON()] = obj;
            }
            // @ts-ignore
            resources[normalized] = true;
        }
        return resources[normalizePath(path, extensionID)];
    }
    async function getResourceAsync(extensionID, resources, path) {
        const preloaded = getResource(extensionID, resources, path);
        const url = normalizePath(path, extensionID);
        if (preloaded)
            return preloaded;
        const response = await FrameworkRPC.fetch(extensionID, { method: 'GET', url, body: null, headers: {} });
        const result = decodeStringOrBufferSource(response.data);
        if (result === null)
            return undefined;
        if (typeof result === 'string')
            return result;
        console.error('Not supported type for getResourceAsync');
        return undefined;
    }

    const isDebug = location.hostname === 'localhost';
    function parseDebugModeURL(extensionID, manifest) {
        const param = new URLSearchParams(location.search);
        const type = param.get('type');
        let src = param.get('url');
        const base = getPrefix(extensionID);
        if (src === '_options_')
            src = new URL(manifest.options_ui.page, base).toJSON();
        if (src === '_popup_')
            src = new URL(manifest.browser_action.default_popup, base).toJSON();
        if (type === 'b')
            return { env: Environment.backgroundScript, src: '' };
        if (!src)
            throw new TypeError('Need a url');
        if (type === 'p')
            return { env: Environment.protocolPage, src };
        else if (type === 'm')
            return { env: Environment.debugModeManagedPage, src };
        else
            throw new TypeError('To debug, ?type= must be one of (b)ackground, (p)rotocol-page, (m)anaged-page (used to debug content script), found ' +
                type);
    }

    /**
     * This ID is used by this polyfill itself.
     */
    const reservedID = '150ea6ee-2b0a-4587-9879-0ca5dfc1d046';
    async function useInternalStorage(extensionID, modify) {
        if (isDebug) {
            const obj = JSON.parse(localStorage.getItem(reservedID + ':' + extensionID) || '{}');
            if (!modify)
                return Promise.resolve(obj);
            modify(obj);
            localStorage.setItem(reservedID + ':' + extensionID, JSON.stringify(obj));
            return Promise.resolve(obj);
        }
        const obj = (await FrameworkRPC['browser.storage.local.get'](reservedID, extensionID))[extensionID] || {};
        if (!modify)
            return obj;
        modify(obj);
        FrameworkRPC['browser.storage.local.set'](reservedID, { [extensionID]: obj });
        return obj;
    }

    /**
     * Internal RPC calls of webextension-shim. Does not related to the native part.
     *
     * This channel is used as internal RPCs.
     * Use Host.onMessage and Host.sendMessage as channel.
     */
    const internalRPCChannel = new (class WebExtensionInternalChannel {
        constructor() {
            this.listener = new Set();
        }
        on(cb) {
            this.listener.add(cb);
            return () => this.listener.delete(cb);
        }
        onReceiveMessage(data) {
            for (const f of this.listener) {
                try {
                    f(data);
                }
                catch { }
            }
        }
        send(data) {
            if (isDebug) {
                console.log('send', data);
            }
            if (!(typeof data === 'object'))
                return;
            if (data.method) {
                if (!Array.isArray(data.params))
                    return;
                if (typeof data.params[0] !== 'number')
                    throw new Error(`Every method of InternalRPCMethods must start with parameter 0 as targetTabID: number`);
                FrameworkRPC.sendMessage(reservedID, reservedID, data.params[0], Math.random() + '', {
                    type: 'internal-rpc',
                    message: data,
                });
                return;
            }
            else {
                FrameworkRPC.sendMessage(reservedID, reservedID, null, Math.random() + '', {
                    type: 'internal-rpc',
                    message: data,
                });
            }
        }
    })();
    const internalRPCLocalImplementation = {
        async executeContentScript(targetTabID, extensionID, manifest, options) {
            console.debug('[WebExtension] requested to inject code', options);
            const ext = registeredWebExtension.get(extensionID) ||
                (await registerWebExtension(extensionID, manifest, {})).get(extensionID);
            if (options.code)
                ext.environment.evaluateInlineScript(options.code);
            else if (options.file)
                loadContentScript(extensionID, {
                    js: [options.file],
                    // TODO: check the permission to inject the script
                    matches: ['<all_urls>'],
                });
        },
    };
    const internalRPC = M(internalRPCLocalImplementation, {
        log: false,
        channel: internalRPCChannel,
        strict: false,
    });

    class SamePageDebugChannel extends EventTarget {
        constructor(actor) {
            super();
            this.actor = actor;
            SamePageDebugChannel[actor].addEventListener('targetEventChannel', (e) => {
                const detail = e.data;
                this.dispatchEvent(new MessageEvent('message', { data: detail }));
            });
        }
        on(cb) {
            const f = (e) => cb(e.data);
            this.addEventListener('message', f);
            return () => this.removeEventListener('message', f);
        }
        send(data) {
            SamePageDebugChannel[this.actor === 'client' ? 'server' : 'client'].dispatchEvent(new MessageEvent('targetEventChannel', { data }));
        }
    }
    SamePageDebugChannel.server = document.createElement('a');
    SamePageDebugChannel.client = document.createElement('a');

    function _generateRandomID() {
        return Math.random().toString(16).slice(3);
    }
    /**
     *
     * @param portID If portID is undefined, means it is a new created port and need to broadcast.
     * @param sender also for sender.
     * @param extensionId
     * @param connectionInfo
     */
    function createPort(creatorExtensionID, portID, sender, extensionId, connectionInfo) {
        if (typeof extensionId === 'string')
            console.warn('Cross-extension connect is not implemented yet.');
        const info = (typeof extensionId === 'string' ? connectionInfo : extensionId) || connectionInfo || { name: '' };
        const { includeTlsChannelId, name } = info;
        if (includeTlsChannelId)
            console.warn('includeTlsChannelId is not implemented yet.');
        const newCreated = portID === undefined;
        if (portID === undefined)
            portID = _generateRandomID();
        if (newCreated) {
            FrameworkRPC.sendMessage(creatorExtensionID, creatorExtensionID, null, '', {
                type: 'onPortCreate',
                name: name,
                portID: portID,
            });
        }
        let disconnected = false;
        const onDisconnect = createPortListener(portID, 'disconnected');
        onDisconnect.addListener(() => {
            disconnected = true;
            clearPortListener(portID);
        });
        return {
            error: undefined,
            name: '' + name,
            sender: sender === undefined ? sender : deepClone(sender),
            postMessage(message) {
                FrameworkRPC.sendMessage(creatorExtensionID, creatorExtensionID, null, '', {
                    type: 'onPortMessage',
                    portID: portID,
                    message,
                });
            },
            disconnect() {
                disconnected = true;
                clearPortListener(portID);
                FrameworkRPC.sendMessage(creatorExtensionID, creatorExtensionID, null, '', {
                    type: 'onPortDisconnect',
                    portID: portID,
                });
            },
            onMessage: createPortListener(portID, 'message'),
            onDisconnect,
        };
    }

    /**
     * how webextension-shim communicate with native code.
     */
    const key = 'holoflowsjsonrpc';
    class iOSWebkitChannel {
        constructor() {
            this.listener = new Set();
            document.addEventListener(key, (e) => {
                const detail = e.detail;
                for (const f of this.listener) {
                    try {
                        f(detail);
                    }
                    catch { }
                }
            });
        }
        on(cb) {
            this.listener.add(cb);
            return () => this.listener.delete(cb);
        }
        send(data) {
            if (isDebug) {
                console.log('send', data);
            }
            if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers[key])
                window.webkit.messageHandlers[key].postMessage(data);
        }
    }
    /** Don't call this directly! Call FrameworkRPC.* instead */
    const ThisSideImplementation = {
        // todo: check dispatch target's manifest
        'browser.webNavigation.onCommitted': dispatchNormalEvent.bind(null, 'browser.webNavigation.onCommitted', '*'),
        'browser.webNavigation.onDOMContentLoaded': dispatchNormalEvent.bind(null, 'browser.webNavigation.onDOMContentLoaded', '*'),
        'browser.webNavigation.onCompleted': dispatchNormalEvent.bind(null, 'browser.webNavigation.onCompleted', '*'),
        async onMessage(extensionID, toExtensionID, messageID, message, sender) {
            switch (message.type) {
                case 'internal-rpc':
                    return internalRPCChannel.onReceiveMessage(message.message);
                case 'message': {
                    // ? this is a response to the message
                    if (TwoWayMessagePromiseResolver.has(messageID) && message.response) {
                        const [resolve, reject] = TwoWayMessagePromiseResolver.get(messageID);
                        resolve(message.data);
                        TwoWayMessagePromiseResolver.delete(messageID);
                    }
                    else if (message.response === false) {
                        onNormalMessage(message.data, sender, toExtensionID, extensionID, messageID);
                    }
                    else ;
                    break;
                }
                case 'onWebNavigationChanged': {
                    if (!sender.tab || sender.tab.id === undefined)
                        break;
                    const param = {
                        tabId: sender.tab.id,
                        url: message.location,
                    };
                    switch (message.status) {
                        case 'onCommitted':
                            ThisSideImplementation['browser.webNavigation.onCommitted'](param);
                            break;
                        case 'onCompleted':
                            ThisSideImplementation['browser.webNavigation.onCompleted'](param);
                            break;
                        case 'onDOMContentLoaded':
                            ThisSideImplementation['browser.webNavigation.onDOMContentLoaded'](param);
                            break;
                    }
                    break;
                }
                case 'onPortCreate':
                    return dispatchNormalEvent('browser.runtime.onConnect', extensionID, createPort(extensionID, message.portID, sender, undefined, { name: message.name }));
                case 'onPortMessage':
                    return dispatchPortEvent('message', message.portID, message.message);
                case 'onPortDisconnect':
                    return dispatchPortEvent('disconnected', message.portID, undefined);
            }
        },
    };
    const FrameworkRPC = M(ThisSideImplementation, {
        log: false,
        channel: isDebug ? new SamePageDebugChannel('client') : new iOSWebkitChannel(),
        strict: false,
    });
    if (location.protocol !== 'holoflows-extension') {
        FrameworkRPC.sendMessage(reservedID, reservedID, null, Math.random() + '', {
            type: 'onWebNavigationChanged',
            status: 'onCommitted',
            location: location.href,
        });
        if (typeof window === 'object') {
            window.addEventListener('DOMContentLoaded', () => {
                FrameworkRPC.sendMessage(reservedID, reservedID, null, Math.random() + '', {
                    type: 'onWebNavigationChanged',
                    status: 'onDOMContentLoaded',
                    location: location.href,
                });
            });
            window.addEventListener('load', () => {
                FrameworkRPC.sendMessage(reservedID, reservedID, null, Math.random() + '', {
                    type: 'onWebNavigationChanged',
                    status: 'onCompleted',
                    location: location.href,
                });
            });
            // TODO: implements onHistoryStateUpdated event.
        }
    }

    const { createObjectURL, revokeObjectURL } = URL;
    function getIDFromBlobURL(x) {
        if (x.startsWith('blob:'))
            return new URL(new URL(x).pathname).pathname.replace(/^\//, '');
        return undefined;
    }
    /**
     * Modify the behavior of URL.*
     * Let the blob:// url can be recognized by Host.
     *
     * @param url The original URL object
     * @param extensionID
     */
    function enhanceURL(url, extensionID) {
        url.createObjectURL = createObjectURLEnhanced(extensionID);
        url.revokeObjectURL = revokeObjectURLEnhanced(extensionID);
        return url;
    }
    function revokeObjectURLEnhanced(extensionID) {
        return (url) => {
            revokeObjectURL(url);
            const id = getIDFromBlobURL(url);
            FrameworkRPC['URL.revokeObjectURL'](extensionID, id);
        };
    }
    function createObjectURLEnhanced(extensionID) {
        return (obj) => {
            const url = createObjectURL(obj);
            const resourceID = getIDFromBlobURL(url);
            if (obj instanceof Blob) {
                encodeStringOrBufferSource(obj).then((blob) => FrameworkRPC['URL.createObjectURL'](extensionID, resourceID, blob));
            }
            return url;
        };
    }

    /**
     * Create a new `browser` object.
     * @param extensionID - Extension ID
     * @param manifest - Manifest of the extension
     */
    function BrowserFactory(extensionID, manifest, proto) {
        if (!extensionID)
            throw new TypeError();
        const implementation = {};
        implementation.downloads = Implements({
            download: binding(extensionID, 'browser.downloads.download')({
                param(options) {
                    let { url, filename } = options;
                    if (getIDFromBlobURL(url)) {
                        url = `holoflows-blob://${extensionID}/${getIDFromBlobURL(url)}`;
                    }
                    PartialImplemented(options, 'filename', 'url');
                    const arg1 = { url, filename: filename || '' };
                    return [arg1];
                },
                returns() {
                    return 0;
                },
            }),
        });
        implementation.runtime = Implements({
            getURL: (path) => getPrefix(extensionID) + path,
            getManifest: () => JSON.parse(JSON.stringify(manifest)),
            onMessage: createEventListener(extensionID, 'browser.runtime.onMessage'),
            onInstalled: createEventListener(extensionID, 'browser.runtime.onInstall'),
            connect: (...args) => createPort(extensionID, undefined, undefined, ...args),
            onConnect: createEventListener(extensionID, 'browser.runtime.onConnect'),
            sendMessage: createRuntimeSendMessage(extensionID),
            get id() {
                return extensionID;
            },
            set id(val) { },
        });
        implementation.tabs = Implements({
            async executeScript(tabID, details) {
                PartialImplemented(details, 'code', 'file', 'runAt');
                await internalRPC.executeContentScript(tabID, extensionID, manifest, details);
                return [];
            },
            create: binding(extensionID, 'browser.tabs.create')(),
            async remove(tabID) {
                let t;
                if (!Array.isArray(tabID))
                    t = [tabID];
                else
                    t = tabID;
                await Promise.all(t.map((x) => FrameworkRPC['browser.tabs.remove'](extensionID, x)));
            },
            query: binding(extensionID, 'browser.tabs.query')(),
            update: binding(extensionID, 'browser.tabs.update')(),
            async sendMessage(tabId, message, options) {
                PartialImplemented(options);
                return sendMessageWithResponse(extensionID, extensionID, tabId, message);
            },
        });
        implementation.storage = Implements({
            local: Implements({
                clear: binding(extensionID, 'browser.storage.local.clear')(),
                remove: binding(extensionID, 'browser.storage.local.remove')(),
                set: binding(extensionID, 'browser.storage.local.set')(),
                get: binding(extensionID, 'browser.storage.local.get')({
                    /** Host not accepting { a: 1 } as keys */
                    param(keys) {
                        if (Array.isArray(keys))
                            return [keys];
                        else if (typeof keys === 'string')
                            return [keys];
                        else if (typeof keys === 'object') {
                            if (keys === null)
                                return [null];
                            return [Object.keys(keys)];
                        }
                        return [null];
                    },
                    returns(rtn, [key]) {
                        if (Array.isArray(key))
                            return rtn;
                        else if (typeof key === 'object' && key !== null) {
                            return { ...key, ...rtn };
                        }
                        return rtn;
                    },
                }),
            }),
        });
        implementation.webNavigation = Implements({
            onCommitted: createEventListener(extensionID, 'browser.webNavigation.onCommitted'),
            onCompleted: createEventListener(extensionID, 'browser.webNavigation.onCompleted'),
            onDOMContentLoaded: createEventListener(extensionID, 'browser.webNavigation.onDOMContentLoaded'),
        });
        implementation.extension = Implements({
            getBackgroundPage() {
                const defaultName = '_generated_background_page.html';
                const manifestName = manifest.background.page;
                if (location.pathname === '/' + defaultName || location.pathname === '/' + manifestName)
                    return window;
                return new Proxy({
                    location: new URL(getPrefix(extensionID) + (manifestName || defaultName)),
                }, {
                    get(_, key) {
                        if (_[key])
                            return _[key];
                        throw new TypeError('Not supported');
                    },
                });
            },
        });
        implementation.permissions = Implements({
            request: async (req) => {
                const userAction = true;
                {
                    useInternalStorage(extensionID, (obj) => {
                        const orig = obj.dynamicRequestedPermissions || { origins: [], permissions: [] };
                        const o = new Set(orig.origins);
                        const p = new Set(orig.permissions);
                        (req.origins || []).forEach((x) => o.add(x));
                        (req.permissions || []).forEach((x) => p.add(x));
                        orig.origins = Array.from(o);
                        orig.permissions = Array.from(p);
                        obj.dynamicRequestedPermissions = orig;
                    });
                }
                return userAction;
            },
            contains: async (query) => {
                const originsQuery = query.origins || [];
                const permissionsQuery = query.permissions || [];
                const requested = await useInternalStorage(extensionID);
                const hasOrigins = new Set();
                const hasPermissions = new Set();
                if (requested.dynamicRequestedPermissions && requested.dynamicRequestedPermissions.origins) {
                    requested.dynamicRequestedPermissions.origins.forEach((x) => hasOrigins.add(x));
                }
                if (requested.dynamicRequestedPermissions && requested.dynamicRequestedPermissions.permissions) {
                    requested.dynamicRequestedPermissions.permissions.forEach((x) => hasPermissions.add(x));
                }
                (manifest.permissions || []).forEach((x) => hasPermissions.add(x));
                (manifest.permissions || []).forEach((x) => hasOrigins.add(x));
                if (originsQuery.some((x) => !hasOrigins.has(x)))
                    return false;
                if (permissionsQuery.some((x) => !hasPermissions.has(x)))
                    return false;
                return true;
            },
            remove: async () => {
                console.warn('🤣 why you want to revoke your permissions? Not implemented yet.');
                return false;
            },
            getAll: async () => {
                const all = await useInternalStorage(extensionID);
                return JSON.parse(JSON.stringify(all.dynamicRequestedPermissions || {}));
            },
        });
        // WebExtension polyfill (moz) will check if the proto is equal to Object.prototype
        Object.setPrototypeOf(implementation, proto);
        return implementation;
    }
    function Implements(x) {
        return x;
    }
    function PartialImplemented(obj = {}, ...keys) {
        const obj2 = { ...obj };
        keys.forEach((x) => delete obj2[x]);
        if (Object.keys(obj2).filter((k) => obj[k] !== undefined || obj[k] !== null).length)
            console.warn(`Not implemented options`, obj2, `at`, new Error().stack);
    }
    /**
     * Generate binding between Host and WebExtensionAPI
     *
     * ALL generics should be inferred. DO NOT write it manually.
     *
     * If you are writing options, make sure you add your function to `BrowserReference` to get type tips.
     *
     * @param extensionID - The extension ID
     * @param key - The API name in the type of `Host` AND `BrowserReference`
     */
    function binding(extensionID, key) {
        /**
         * And here we split it into 2 function, if we join them together it will break the infer (but idk why)
         */
        return (
        /**
         * Options. You can write the bridge between Host side and WebExtension side.
         */
        options = {}) => {
            const noop = (x) => x;
            const noopArgs = (...args) => args;
            const hostDefinition = FrameworkRPC[key];
            return (async (...args) => {
                // ? Transform WebExtension API arguments to host arguments
                const hostArgs = (options.param || noopArgs)(...args);
                // ? execute
                const result = await hostDefinition(extensionID, ...hostArgs);
                const f = options.returns || noop;
                // ? Transform host result to WebExtension API result
                const browserResult = f(result, args, hostArgs);
                return browserResult;
            });
        };
    }

    const origFetch$1 = window.fetch;
    function createFetch(extensionID) {
        return new Proxy(origFetch$1, {
            async apply(origFetch, thisArg, [requestInfo, requestInit]) {
                const request = new Request(requestInfo, requestInit);
                const url = new URL(request.url);
                const headers = Object.fromEntries(request.headers.entries());
                // Debug mode
                if (isDebug && (url.origin === location.origin || url.protocol === 'holoflows-extension:')) {
                    return origFetch(debugModeURLRewrite(extensionID, request.url), requestInit);
                }
                else if (request.url.startsWith(getPrefix(extensionID))) {
                    return origFetch(requestInfo, requestInit);
                }
                else {
                    if (isDebug)
                        return origFetch(requestInfo, requestInit);
                    const { method, body } = request;
                    const result = await FrameworkRPC.fetch(extensionID, {
                        method,
                        url: url.toJSON(),
                        body: await reader(body),
                        headers,
                    });
                    const data = decodeStringOrBufferSource(result.data);
                    if (data === null)
                        throw new Error('');
                    const returnValue = new Response(data, result);
                    return returnValue;
                }
            },
        });
    }
    async function reader(body) {
        if (!body)
            return null;
        const iter = body.getReader();
        const u = [];
        for await (const i of read(iter))
            u.push(i);
        return encodeStringOrBufferSource(new Uint8Array(flat_iter(u)));
    }
    function* flat_iter(args) {
        for (const each of args)
            yield* each;
    }
    async function* read(iter) {
        let result = await iter.read();
        while (!result.done) {
            yield result.value;
            result = await iter.read();
        }
    }

    let lastUserActive = 0;
    let now = Date.now.bind(Date);
    document.addEventListener('click', () => {
        lastUserActive = now();
    }, { capture: true, passive: true });
    function hasValidUserInteractive() {
        return now() - lastUserActive < 3000;
    }

    function openEnhanced(extensionID) {
        return (url = 'about:blank', target, features, replace) => {
            if (!hasValidUserInteractive())
                return null;
            if ((target && target !== '_blank') || features || replace)
                console.warn('Unsupported open', url, target, features, replace);
            FrameworkRPC['browser.tabs.create'](extensionID, {
                active: true,
                url,
            });
            return null;
        };
    }
    function closeEnhanced(extensionID) {
        return () => {
            if (!hasValidUserInteractive())
                return;
            FrameworkRPC['browser.tabs.query'](extensionID, { active: true }).then(i => FrameworkRPC['browser.tabs.remove'](extensionID, i[0].id));
        };
    }

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

    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }

    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /**
     * Transform any `this` to `(x =>
        typeof x === 'undefined'
            ? globalThis
            : x && Object.getPrototypeOf(x) === null && Object.isFrozen(x)
            ? globalThis
            : x)(this)`
     * The frozen check is to bypass systemjs's nullContext
     * @param context
     */
    function thisTransformation(context) {
        function visit(node) {
            if (ts__namespace.isSourceFile(node)) {
                if (isInStrictMode(node.statements))
                    return node;
            }
            else if (ts__namespace.isFunctionDeclaration(node) || ts__namespace.isFunctionExpression(node)) {
                if (node.body) {
                    if (isInStrictMode(node.body.statements))
                        return node;
                }
            }
            else if (node.kind === ts__namespace.SyntaxKind.ThisKeyword) {
                return ts__namespace.createCall(ts__namespace.createParen(ts__namespace.createArrowFunction(void 0, void 0, [ts__namespace.createParameter(void 0, void 0, void 0, ts__namespace.createIdentifier('x'), void 0, void 0, void 0)], void 0, ts__namespace.createToken(ts__namespace.SyntaxKind.EqualsGreaterThanToken), ts__namespace.createConditional(ts__namespace.createBinary(ts__namespace.createTypeOf(ts__namespace.createIdentifier('x')), ts__namespace.createToken(ts__namespace.SyntaxKind.EqualsEqualsEqualsToken), ts__namespace.createStringLiteral('undefined')), ts__namespace.createIdentifier('globalThis'), ts__namespace.createConditional(ts__namespace.createBinary(ts__namespace.createBinary(ts__namespace.createIdentifier('x'), ts__namespace.createToken(ts__namespace.SyntaxKind.AmpersandAmpersandToken), ts__namespace.createBinary(ts__namespace.createCall(ts__namespace.createPropertyAccess(ts__namespace.createIdentifier('Object'), ts__namespace.createIdentifier('getPrototypeOf')), void 0, [ts__namespace.createIdentifier('x')]), ts__namespace.createToken(ts__namespace.SyntaxKind.EqualsEqualsEqualsToken), ts__namespace.createNull())), ts__namespace.createToken(ts__namespace.SyntaxKind.AmpersandAmpersandToken), ts__namespace.createCall(ts__namespace.createPropertyAccess(ts__namespace.createIdentifier('Object'), ts__namespace.createIdentifier('isFrozen')), void 0, [ts__namespace.createIdentifier('x')])), ts__namespace.createIdentifier('globalThis'), ts__namespace.createIdentifier('x'))))), void 0, [ts__namespace.createThis()]);
            }
            return ts__namespace.visitEachChild(node, (child) => visit(child), context);
        }
        return ((node) => {
            return visit(node);
        });
    }
    function isInStrictMode(node) {
        const first = node[0];
        if (!first)
            return false;
        if (ts__namespace.isExpressionStatement(first)) {
            if (ts__namespace.isStringLiteralLike(first.expression)) {
                if (first.expression.text === 'use strict')
                    return true;
            }
        }
        return false;
    }

    function systemjsNameNoLeakTransformer(context) {
        let touched = false;
        let systemJSCall;
        function visit(node) {
            if (touched)
                return node;
            if (ts__namespace.isSourceFile(node)) {
                systemJSCall = node.statements.map(getSystemJSRegisterCallArguments).filter((x) => x)[0];
                if (!systemJSCall)
                    throw new TypeError('Invalid transform');
                return ts__namespace.updateSourceFileNode(node, [createFunction(node.statements.map(visit))]);
            }
            else if (node === systemJSCall && ts__namespace.isCallExpression(node)) {
                touched = true;
                return ts__namespace.updateCall(node, ts__namespace.createIdentifier('arguments[0].register'), void 0, node.arguments);
            }
            return ts__namespace.visitEachChild(node, (child) => visit(child), context);
        }
        return ((node) => {
            const r = visit(node);
            if (!touched)
                throw new TypeError('Invalid transform');
            return r;
        });
    }
    /**
     * Return `(function () { [statements] })`
     */
    function createFunction(statements) {
        return ts__namespace.createExpressionStatement(ts__namespace.createParen(ts__namespace.createFunctionExpression(void 0, void 0, void 0, void 0, void 0, void 0, ts__namespace.createBlock(statements))));
    }
    function getSystemJSRegisterCallArguments(x) {
        if (!ts__namespace.isExpressionStatement(x))
            return;
        const expr = x.expression;
        if (!ts__namespace.isCallExpression(expr))
            return;
        const callee = expr.expression;
        if (!ts__namespace.isPropertyAccessExpression(callee))
            return;
        const { expression: left, name: right } = callee;
        if (!ts__namespace.isIdentifier(left) || !ts__namespace.isIdentifier(right))
            return;
        if (left.text !== 'System' || right.text !== 'register')
            return;
        return expr;
    }

    const cache = new Map();
    function checkDynamicImport(source) {
        if (cache.has(source))
            return cache.get(source);
        let hasDyn = false;
        function i(k) {
            function visit(n) {
                if (hasDyn)
                    return n;
                if (isDynamicImport(n))
                    hasDyn = true;
                return ts__namespace.visitEachChild(n, visit, k);
            }
            return (x) => visit(x);
        }
        ts__namespace.transpileModule(source, {
            transformers: {
                before: [i],
            },
            reportDiagnostics: true,
            compilerOptions: {
                target: ts__namespace.ScriptTarget.ESNext,
                module: ts__namespace.ModuleKind.ESNext,
            },
        });
        cache.set(source, hasDyn);
        return hasDyn;
    }
    function isDynamicImport(node) {
        if (!ts__namespace.isCallExpression(node))
            return false;
        if (node.expression.kind === ts__namespace.SyntaxKind.ImportKeyword) {
            return true;
        }
        return false;
    }

    /**
     * Transform any code to "return" it's last expression value
     * @param context
     */
    function lastExprValue(context) {
        function visit(node) {
            if (ts__namespace.isSourceFile(node)) {
                const [last, ...rest] = [...node.statements].reverse();
                if (ts__namespace.isExpressionStatement(last)) {
                    return ts__namespace.updateSourceFileNode(node, [ts__namespace.createReturn(last.expression), ...rest].reverse());
                }
                return node;
            }
            return ts__namespace.visitEachChild(node, visit, context);
        }
        return visit;
    }

    const scriptTransformCache = new Map();
    const moduleTransformCache = new Map();
    const PrebuiltVersion = 2;
    /**
     * For scripts, we treat it as a module with no static import/export.
     */
    function transformAST(src, kind, path) {
        const cache = kind === 'module' ? moduleTransformCache : scriptTransformCache;
        if (cache.has(src))
            return cache.get(src);
        const hasDynamicImport = checkDynamicImport(src);
        const scriptBefore = undefined;
        const scriptAfter = [
            thisTransformation,
            ...(hasDynamicImport ? [systemjsNameNoLeakTransformer, lastExprValue] : []),
        ].filter((x) => x);
        const moduleBefore = undefined;
        const moduleAfter = [systemjsNameNoLeakTransformer, lastExprValue].filter((x) => x);
        function getSourcePath() {
            const _ = path.split('/');
            const filename = _.pop();
            const sourceRoot = _.join('/');
            return { fileName: filename, sourceRoot };
        }
        const { fileName, sourceRoot } = getSourcePath();
        const out = ts.transpileModule(src, {
            transformers: {
                before: kind === 'script' ? scriptBefore : moduleBefore,
                after: kind === 'script' ? scriptAfter : moduleAfter,
            },
            reportDiagnostics: true,
            compilerOptions: {
                // ? we're assuming the developer has ran the transformer so we are not going to run any downgrade for them
                target: ts.ScriptTarget.ESNext,
                // ? Also use System in script type therefore the dynamic import will work
                // ? If no need for module, keep it ESNext (and throw by browser)
                module: hasDynamicImport || kind === 'module' ? ts.ModuleKind.System : ts.ModuleKind.ESNext,
                // ? A comment in React dev will make a false positive on realms checker
                removeComments: true,
                sourceMap: false,
                // inlineSourceMap: true,
                // inlineSources: true,
                // sourceRoot,
            },
            fileName,
        });
        const error = [];
        for (const err of out.diagnostics || []) {
            let errText = typeof err.messageText === 'string' ? err.messageText : err.messageText.messageText;
            if (err.file && err.start !== undefined && err.length !== undefined) {
                const source = err.file.getFullText();
                const startLineNum = (source.slice(0, err.start).match(/\n/g) || []).length;
                const endLineNum = (source.slice(0, err.start + err.length).match(/\n/g) || []).length;
                const lines = source.split('\n');
                const lineIndicatorLength = endLineNum.toString().length + 5;
                const getLineWithNo = (n) => lines[n] ? `Line ${n + 1} |`.padStart(lineIndicatorLength) + '  ' + lines[n] : null;
                const aroundLines = [
                    getLineWithNo(startLineNum - 3),
                    getLineWithNo(startLineNum - 2),
                    getLineWithNo(startLineNum - 1),
                    getLineWithNo(startLineNum),
                    ''.padStart(lineIndicatorLength + 4) + '~'.repeat(lines[startLineNum].length),
                    startLineNum !== endLineNum ? '......' + getLineWithNo(endLineNum) : null,
                    getLineWithNo(endLineNum + 1),
                    getLineWithNo(endLineNum + 2),
                    getLineWithNo(endLineNum + 3),
                ].filter((x) => x);
                errText += `\n${aroundLines.join('\n')}\n`;
            }
            error.push(new SyntaxError(errText));
        }
        if (error[0])
            throw error[0];
        cache.set(src, out.outputText);
        return out.outputText;
    }

    /*
    * SJS 6.12.1
    * Minimal SystemJS Build
    */

    (function () {

      function errMsg(errCode, msg) {
        return (msg || "") + " (SystemJS https://git.io/JvFET#" + errCode + ")";
      }

      var hasSymbol = typeof Symbol !== 'undefined';
      var hasSelf = typeof self !== 'undefined';
      var hasDocument = typeof document !== 'undefined';

      var envGlobal = hasSelf ? self : commonjsGlobal;

      var baseUrl;

      if (hasDocument) {
        var baseEl = document.querySelector('base[href]');
        if (baseEl)
          baseUrl = baseEl.href;
      }

      if (!baseUrl && typeof location !== 'undefined') {
        baseUrl = location.href.split('#')[0].split('?')[0];
        var lastSepIndex = baseUrl.lastIndexOf('/');
        if (lastSepIndex !== -1)
          baseUrl = baseUrl.slice(0, lastSepIndex + 1);
      }

      var backslashRegEx = /\\/g;
      function resolveIfNotPlainOrUrl (relUrl, parentUrl) {
        if (relUrl.indexOf('\\') !== -1)
          relUrl = relUrl.replace(backslashRegEx, '/');
        // protocol-relative
        if (relUrl[0] === '/' && relUrl[1] === '/') {
          return parentUrl.slice(0, parentUrl.indexOf(':') + 1) + relUrl;
        }
        // relative-url
        else if (relUrl[0] === '.' && (relUrl[1] === '/' || relUrl[1] === '.' && (relUrl[2] === '/' || relUrl.length === 2 && (relUrl += '/')) ||
            relUrl.length === 1  && (relUrl += '/')) ||
            relUrl[0] === '/') {
          var parentProtocol = parentUrl.slice(0, parentUrl.indexOf(':') + 1);
          // Disabled, but these cases will give inconsistent results for deep backtracking
          //if (parentUrl[parentProtocol.length] !== '/')
          //  throw Error('Cannot resolve');
          // read pathname from parent URL
          // pathname taken to be part after leading "/"
          var pathname;
          if (parentUrl[parentProtocol.length + 1] === '/') {
            // resolving to a :// so we need to read out the auth and host
            if (parentProtocol !== 'file:') {
              pathname = parentUrl.slice(parentProtocol.length + 2);
              pathname = pathname.slice(pathname.indexOf('/') + 1);
            }
            else {
              pathname = parentUrl.slice(8);
            }
          }
          else {
            // resolving to :/ so pathname is the /... part
            pathname = parentUrl.slice(parentProtocol.length + (parentUrl[parentProtocol.length] === '/'));
          }

          if (relUrl[0] === '/')
            return parentUrl.slice(0, parentUrl.length - pathname.length - 1) + relUrl;

          // join together and split for removal of .. and . segments
          // looping the string instead of anything fancy for perf reasons
          // '../../../../../z' resolved to 'x/y' is just 'z'
          var segmented = pathname.slice(0, pathname.lastIndexOf('/') + 1) + relUrl;

          var output = [];
          var segmentIndex = -1;
          for (var i = 0; i < segmented.length; i++) {
            // busy reading a segment - only terminate on '/'
            if (segmentIndex !== -1) {
              if (segmented[i] === '/') {
                output.push(segmented.slice(segmentIndex, i + 1));
                segmentIndex = -1;
              }
            }

            // new segment - check if it is relative
            else if (segmented[i] === '.') {
              // ../ segment
              if (segmented[i + 1] === '.' && (segmented[i + 2] === '/' || i + 2 === segmented.length)) {
                output.pop();
                i += 2;
              }
              // ./ segment
              else if (segmented[i + 1] === '/' || i + 1 === segmented.length) {
                i += 1;
              }
              else {
                // the start of a new segment as below
                segmentIndex = i;
              }
            }
            // it is the start of a new segment
            else {
              segmentIndex = i;
            }
          }
          // finish reading out the last segment
          if (segmentIndex !== -1)
            output.push(segmented.slice(segmentIndex));
          return parentUrl.slice(0, parentUrl.length - pathname.length) + output.join('');
        }
      }

      /*
       * Import maps implementation
       *
       * To make lookups fast we pre-resolve the entire import map
       * and then match based on backtracked hash lookups
       *
       */

      function resolveUrl (relUrl, parentUrl) {
        return resolveIfNotPlainOrUrl(relUrl, parentUrl) || (relUrl.indexOf(':') !== -1 ? relUrl : resolveIfNotPlainOrUrl('./' + relUrl, parentUrl));
      }

      function resolveAndComposePackages (packages, outPackages, baseUrl, parentMap, parentUrl) {
        for (var p in packages) {
          var resolvedLhs = resolveIfNotPlainOrUrl(p, baseUrl) || p;
          var rhs = packages[p];
          // package fallbacks not currently supported
          if (typeof rhs !== 'string')
            continue;
          var mapped = resolveImportMap(parentMap, resolveIfNotPlainOrUrl(rhs, baseUrl) || rhs, parentUrl);
          if (!mapped) {
            targetWarning('W1', p, rhs);
          }
          else
            outPackages[resolvedLhs] = mapped;
        }
      }

      function resolveAndComposeImportMap (json, baseUrl, outMap) {
        if (json.imports)
          resolveAndComposePackages(json.imports, outMap.imports, baseUrl, outMap, null);

        var u;
        for (u in json.scopes || {}) {
          var resolvedScope = resolveUrl(u, baseUrl);
          resolveAndComposePackages(json.scopes[u], outMap.scopes[resolvedScope] || (outMap.scopes[resolvedScope] = {}), baseUrl, outMap, resolvedScope);
        }

        for (u in json.depcache || {})
          outMap.depcache[resolveUrl(u, baseUrl)] = json.depcache[u];
        
        for (u in json.integrity || {})
          outMap.integrity[resolveUrl(u, baseUrl)] = json.integrity[u];
      }

      function getMatch (path, matchObj) {
        if (matchObj[path])
          return path;
        var sepIndex = path.length;
        do {
          var segment = path.slice(0, sepIndex + 1);
          if (segment in matchObj)
            return segment;
        } while ((sepIndex = path.lastIndexOf('/', sepIndex - 1)) !== -1)
      }

      function applyPackages (id, packages) {
        var pkgName = getMatch(id, packages);
        if (pkgName) {
          var pkg = packages[pkgName];
          if (pkg === null) return;
          if (id.length > pkgName.length && pkg[pkg.length - 1] !== '/') {
            targetWarning('W2', pkgName, pkg);
          }
          else
            return pkg + id.slice(pkgName.length);
        }
      }

      function targetWarning (code, match, target, msg) {
        console.warn(errMsg(code, [target, match].join(', ') ));
      }

      function resolveImportMap (importMap, resolvedOrPlain, parentUrl) {
        var scopes = importMap.scopes;
        var scopeUrl = parentUrl && getMatch(parentUrl, scopes);
        while (scopeUrl) {
          var packageResolution = applyPackages(resolvedOrPlain, scopes[scopeUrl]);
          if (packageResolution)
            return packageResolution;
          scopeUrl = getMatch(scopeUrl.slice(0, scopeUrl.lastIndexOf('/')), scopes);
        }
        return applyPackages(resolvedOrPlain, importMap.imports) || resolvedOrPlain.indexOf(':') !== -1 && resolvedOrPlain;
      }

      /*
       * SystemJS Core
       * 
       * Provides
       * - System.import
       * - System.register support for
       *     live bindings, function hoisting through circular references,
       *     reexports, dynamic import, import.meta.url, top-level await
       * - System.getRegister to get the registration
       * - Symbol.toStringTag support in Module objects
       * - Hookable System.createContext to customize import.meta
       * - System.onload(err, id, deps) handler for tracing / hot-reloading
       * 
       * Core comes with no System.prototype.resolve or
       * System.prototype.instantiate implementations
       */

      var toStringTag = hasSymbol && Symbol.toStringTag;
      var REGISTRY = hasSymbol ? Symbol() : '@';

      function SystemJS () {
        this[REGISTRY] = {};
      }

      var systemJSPrototype = SystemJS.prototype;

      systemJSPrototype.import = function (id, parentUrl) {
        var loader = this;
        return Promise.resolve(loader.prepareImport())
        .then(function() {
          return loader.resolve(id, parentUrl);
        })
        .then(function (id) {
          var load = getOrCreateLoad(loader, id);
          return load.C || topLevelLoad(loader, load);
        });
      };

      // Hookable createContext function -> allowing eg custom import meta
      systemJSPrototype.createContext = function (parentId) {
        var loader = this;
        return {
          url: parentId,
          resolve: function (id, parentUrl) {
            return Promise.resolve(loader.resolve(id, parentUrl || parentId));
          }
        };
      };

      var lastRegister;
      systemJSPrototype.register = function (deps, declare) {
        lastRegister = [deps, declare];
      };

      /*
       * getRegister provides the last anonymous System.register call
       */
      systemJSPrototype.getRegister = function () {
        var _lastRegister = lastRegister;
        lastRegister = undefined;
        return _lastRegister;
      };

      function getOrCreateLoad (loader, id, firstParentUrl) {
        var load = loader[REGISTRY][id];
        if (load)
          return load;

        var importerSetters = [];
        var ns = Object.create(null);
        if (toStringTag)
          Object.defineProperty(ns, toStringTag, { value: 'Module' });
        
        var instantiatePromise = Promise.resolve()
        .then(function () {
          return loader.instantiate(id, firstParentUrl);
        })
        .then(function (registration) {
          if (!registration)
            throw Error(errMsg(2, id ));
          function _export (name, value) {
            // note if we have hoisted exports (including reexports)
            load.h = true;
            var changed = false;
            if (typeof name === 'string') {
              if (!(name in ns) || ns[name] !== value) {
                ns[name] = value;
                changed = true;
              }
            }
            else {
              for (var p in name) {
                var value = name[p];
                if (!(p in ns) || ns[p] !== value) {
                  ns[p] = value;
                  changed = true;
                }
              }

              if (name && name.__esModule) {
                ns.__esModule = name.__esModule;
              }
            }
            if (changed)
              for (var i = 0; i < importerSetters.length; i++) {
                var setter = importerSetters[i];
                if (setter) setter(ns);
              }
            return value;
          }
          var declared = registration[1](_export, registration[1].length === 2 ? {
            import: function (importId) {
              return loader.import(importId, id);
            },
            meta: loader.createContext(id)
          } : undefined);
          load.e = declared.execute || function () {};
          return [registration[0], declared.setters || []];
        }, function (err) {
          load.e = null;
          load.er = err;
          throw err;
        });

        var linkPromise = instantiatePromise
        .then(function (instantiation) {
          return Promise.all(instantiation[0].map(function (dep, i) {
            var setter = instantiation[1][i];
            return Promise.resolve(loader.resolve(dep, id))
            .then(function (depId) {
              var depLoad = getOrCreateLoad(loader, depId, id);
              // depLoad.I may be undefined for already-evaluated
              return Promise.resolve(depLoad.I)
              .then(function () {
                if (setter) {
                  depLoad.i.push(setter);
                  // only run early setters when there are hoisted exports of that module
                  // the timing works here as pending hoisted export calls will trigger through importerSetters
                  if (depLoad.h || !depLoad.I)
                    setter(depLoad.n);
                }
                return depLoad;
              });
            });
          }))
          .then(function (depLoads) {
            load.d = depLoads;
          });
        });

        // Capital letter = a promise function
        return load = loader[REGISTRY][id] = {
          id: id,
          // importerSetters, the setters functions registered to this dependency
          // we retain this to add more later
          i: importerSetters,
          // module namespace object
          n: ns,

          // instantiate
          I: instantiatePromise,
          // link
          L: linkPromise,
          // whether it has hoisted exports
          h: false,

          // On instantiate completion we have populated:
          // dependency load records
          d: undefined,
          // execution function
          e: undefined,

          // On execution we have populated:
          // the execution error if any
          er: undefined,
          // in the case of TLA, the execution promise
          E: undefined,

          // On execution, L, I, E cleared

          // Promise for top-level completion
          C: undefined,

          // parent instantiator / executor
          p: undefined
        };
      }

      function instantiateAll (loader, load, parent, loaded) {
        if (!loaded[load.id]) {
          loaded[load.id] = true;
          // load.L may be undefined for already-instantiated
          return Promise.resolve(load.L)
          .then(function () {
            if (!load.p || load.p.e === null)
              load.p = parent;
            return Promise.all(load.d.map(function (dep) {
              return instantiateAll(loader, dep, parent, loaded);
            }));
          })
          .catch(function (err) {
            if (load.er)
              throw err;
            load.e = null;
            throw err;
          });
        }
      }

      function topLevelLoad (loader, load) {
        return load.C = instantiateAll(loader, load, load, {})
        .then(function () {
          return postOrderExec(loader, load, {});
        })
        .then(function () {
          return load.n;
        });
      }

      // the closest we can get to call(undefined)
      var nullContext = Object.freeze(Object.create(null));

      // returns a promise if and only if a top-level await subgraph
      // throws on sync errors
      function postOrderExec (loader, load, seen) {
        if (seen[load.id])
          return;
        seen[load.id] = true;

        if (!load.e) {
          if (load.er)
            throw load.er;
          if (load.E)
            return load.E;
          return;
        }

        // deps execute first, unless circular
        var depLoadPromises;
        load.d.forEach(function (depLoad) {
          try {
            var depLoadPromise = postOrderExec(loader, depLoad, seen);
            if (depLoadPromise) 
              (depLoadPromises = depLoadPromises || []).push(depLoadPromise);
          }
          catch (err) {
            load.e = null;
            load.er = err;
            throw err;
          }
        });
        if (depLoadPromises)
          return Promise.all(depLoadPromises).then(doExec);

        return doExec();

        function doExec () {
          try {
            var execPromise = load.e.call(nullContext);
            if (execPromise) {
              execPromise = execPromise.then(function () {
                load.C = load.n;
                load.E = null; // indicates completion
                if (!true) ;
              }, function (err) {
                load.er = err;
                load.E = null;
                if (!true) ;
                throw err;
              });
              return load.E = execPromise;
            }
            // (should be a promise, but a minify optimization to leave out Promise.resolve)
            load.C = load.n;
            load.L = load.I = undefined;
          }
          catch (err) {
            load.er = err;
            throw err;
          }
          finally {
            load.e = null;
          }
        }
      }

      envGlobal.System = new SystemJS();

      /*
       * SystemJS browser attachments for script and import map processing
       */

      var importMapPromise = Promise.resolve();
      var importMap = { imports: {}, scopes: {}, depcache: {}, integrity: {} };

      // Scripts are processed immediately, on the first System.import, and on DOMReady.
      // Import map scripts are processed only once (by being marked) and in order for each phase.
      // This is to avoid using DOM mutation observers in core, although that would be an alternative.
      var processFirst = hasDocument;
      systemJSPrototype.prepareImport = function (doProcessScripts) {
        if (processFirst || doProcessScripts) {
          processScripts();
          processFirst = false;
        }
        return importMapPromise;
      };
      if (hasDocument) {
        processScripts();
        window.addEventListener('DOMContentLoaded', processScripts);
      }

      function processScripts () {
        [].forEach.call(document.querySelectorAll('script'), function (script) {
          if (script.sp) // sp marker = systemjs processed
            return;
          // TODO: deprecate systemjs-module in next major now that we have auto import
          if (script.type === 'systemjs-module') {
            script.sp = true;
            if (!script.src)
              return;
            System.import(script.src.slice(0, 7) === 'import:' ? script.src.slice(7) : resolveUrl(script.src, baseUrl)).catch(function (e) {
              // if there is a script load error, dispatch an "error" event
              // on the script tag.
              if (e.message.indexOf('https://git.io/JvFET#3') > -1) {
                var event = document.createEvent('Event');
                event.initEvent('error', false, false);
                script.dispatchEvent(event);
              }
              return Promise.reject(e);
            });
          }
          else if (script.type === 'systemjs-importmap') {
            script.sp = true;
            // The passThrough property is for letting the module types fetch implementation know that this is not a SystemJS module.
            var fetchPromise = script.src ? (System.fetch || fetch)(script.src, { integrity: script.integrity, passThrough: true }).then(function (res) {
              if (!res.ok)
                throw Error(res.status );
              return res.text();
            }).catch(function (err) {
              err.message = errMsg('W4', script.src ) + '\n' + err.message;
              console.warn(err);
              if (typeof script.onerror === 'function') {
                  script.onerror();
              }
              return '{}';
            }) : script.innerHTML;
            importMapPromise = importMapPromise.then(function () {
              return fetchPromise;
            }).then(function (text) {
              extendImportMap(importMap, text, script.src || baseUrl);
            });
          }
        });
      }

      function extendImportMap (importMap, newMapText, newMapUrl) {
        var newMap = {};
        try {
          newMap = JSON.parse(newMapText);
        } catch (err) {
          console.warn(Error((errMsg('W5')  )));
        }
        resolveAndComposeImportMap(newMap, newMapUrl, importMap);
      }

      /*
       * Script instantiation loading
       */

      if (hasDocument) {
        window.addEventListener('error', function (evt) {
          lastWindowErrorUrl = evt.filename;
          lastWindowError = evt.error;
        });
        var baseOrigin = location.origin;
      }

      systemJSPrototype.createScript = function (url) {
        var script = document.createElement('script');
        script.async = true;
        // Only add cross origin for actual cross origin
        // this is because Safari triggers for all
        // - https://bugs.webkit.org/show_bug.cgi?id=171566
        if (url.indexOf(baseOrigin + '/'))
          script.crossOrigin = 'anonymous';
        var integrity = importMap.integrity[url];
        if (integrity)
          script.integrity = integrity;
        script.src = url;
        return script;
      };

      // Auto imports -> script tags can be inlined directly for load phase
      var lastAutoImportDeps, lastAutoImportTimeout;
      var autoImportCandidates = {};
      var systemRegister = systemJSPrototype.register;
      systemJSPrototype.register = function (deps, declare) {
        if (hasDocument && document.readyState === 'loading' && typeof deps !== 'string') {
          var scripts = document.querySelectorAll('script[src]');
          var lastScript = scripts[scripts.length - 1];
          if (lastScript) {
            lastAutoImportDeps = deps;
            // if this is already a System load, then the instantiate has already begun
            // so this re-import has no consequence
            var loader = this;
            lastAutoImportTimeout = setTimeout(function () {
              autoImportCandidates[lastScript.src] = [deps, declare];
              loader.import(lastScript.src);
            });
          }
        }
        else {
          lastAutoImportDeps = undefined;
        }
        return systemRegister.call(this, deps, declare);
      };

      var lastWindowErrorUrl, lastWindowError;
      systemJSPrototype.instantiate = function (url, firstParentUrl) {
        var autoImportRegistration = autoImportCandidates[url];
        if (autoImportRegistration) {
          delete autoImportCandidates[url];
          return autoImportRegistration;
        }
        var loader = this;
        return Promise.resolve(systemJSPrototype.createScript(url)).then(function (script) {
          return new Promise(function (resolve, reject) {
            script.addEventListener('error', function () {
              reject(Error(errMsg(3, [url, firstParentUrl].join(', ') )));
            });
            script.addEventListener('load', function () {
              document.head.removeChild(script);
              // Note that if an error occurs that isn't caught by this if statement,
              // that getRegister will return null and a "did not instantiate" error will be thrown.
              if (lastWindowErrorUrl === url) {
                reject(lastWindowError);
              }
              else {
                var register = loader.getRegister(url);
                // Clear any auto import registration for dynamic import scripts during load
                if (register && register[0] === lastAutoImportDeps)
                  clearTimeout(lastAutoImportTimeout);
                resolve(register);
              }
            });
            document.head.appendChild(script);
          });
        });
      };

      /*
       * Fetch loader, sets up shouldFetch and fetch hooks
       */
      systemJSPrototype.shouldFetch = function () {
        return false;
      };
      if (typeof fetch !== 'undefined')
        systemJSPrototype.fetch = fetch;

      var instantiate = systemJSPrototype.instantiate;
      var jsContentTypeRegEx = /^(text|application)\/(x-)?javascript(;|$)/;
      systemJSPrototype.instantiate = function (url, parent) {
        var loader = this;
        if (!this.shouldFetch(url))
          return instantiate.apply(this, arguments);
        return this.fetch(url, {
          credentials: 'same-origin',
          integrity: importMap.integrity[url]
        })
        .then(function (res) {
          if (!res.ok)
            throw Error(errMsg(7, [res.status, res.statusText, url, parent].join(', ') ));
          var contentType = res.headers.get('content-type');
          if (!contentType || !jsContentTypeRegEx.test(contentType))
            throw Error(errMsg(4, contentType ));
          return res.text().then(function (source) {
            if (source.indexOf('//# sourceURL=') < 0)
              source += '\n//# sourceURL=' + url;
            (0, eval)(source);
            return loader.getRegister(url);
          });
        });
      };

      systemJSPrototype.resolve = function (id, parentUrl) {
        parentUrl = parentUrl || !true  || baseUrl;
        return resolveImportMap((importMap), resolveIfNotPlainOrUrl(id, parentUrl) || id, parentUrl) || throwUnresolved(id, parentUrl);
      };

      function throwUnresolved (id, parentUrl) {
        throw Error(errMsg(8, [id, parentUrl].join(', ') ));
      }

      var systemInstantiate = systemJSPrototype.instantiate;
      systemJSPrototype.instantiate = function (url, firstParentUrl) {
        var preloads = (importMap).depcache[url];
        if (preloads) {
          for (var i = 0; i < preloads.length; i++)
            getOrCreateLoad(this, this.resolve(preloads[i], url), url);
        }
        return systemInstantiate.call(this, url, firstParentUrl);
      };

      /*
       * Supports loading System.register in workers
       */

      if (hasSelf && typeof importScripts === 'function')
        systemJSPrototype.instantiate = function (url) {
          var loader = this;
          return Promise.resolve().then(function () {
            importScripts(url);
            return loader.getRegister(url);
          });
        };

    })();

    function static_eval_generated() {
        var _a;
        // @ts-ignore
        const value = (function () {
            if (arguments[0]) {
                return function () {
                    throw '';
                }.call(undefined);
            }
            // @ts-ignore
        })(getProxy());
        function getProxy() {
            const { get, set } = Reflect;
            const currentExtensionGlobal = Symbol.for('GLOBAL_SCOPE');
            const global = get(globalThis, currentExtensionGlobal);
            return new Proxy({ __proto__: null }, {
                get(shadow, prop) {
                    if (typeof prop === 'symbol') {
                        return undefined;
                    }
                    return get(global, prop);
                },
                set: (shadow, prop, value) => set(global, prop, value),
                has: () => true,
                getPrototypeOf: () => null,
            });
        }
        // Async eval completion
        // @ts-ignore
        (_a = globalThis[Symbol.for('CALLBACK_HERE')]) === null || _a === void 0 ? void 0 : _a.call(globalThis, value);
        // sync eval completion
        return value;
    }
    function generateEvalString(code, globalScopeSymbol, callbackSymbol) {
        debugger;
        let x = static_eval_generated.toString();
        x = replace(x, 'if (arguments[0])', 'with (arguments[0])');
        x = replace(x, 'GLOBAL_SCOPE', globalScopeSymbol.description);
        x = replace(x, 'CALLBACK_HERE', callbackSymbol.description);
        x = replace(x, `throw ''`, code + '\n') + ';' + static_eval_generated.name.toString() + '()';
        return x;
    }
    function replace(x, y, z) {
        const pos = x.indexOf(y);
        return x.slice(0, pos) + z + x.slice(pos + y.length);
    }

    var _globalScopeSymbol, _globalThis, _inlineModule, _runtimeTransformer, _evaluate, _id, _getEvalFileName;
    const SystemJSConstructor = System.constructor;
    Reflect.deleteProperty(globalThis, 'System');
    const { set, construct, apply, deleteProperty } = Reflect;
    const { warn: warn$1, trace } = console;
    const { eval: indirectEval } = globalThis;
    const canUseEval = (() => {
        try {
            indirectEval('Math.random()');
            return true;
        }
        catch {
            return false;
        }
    })();
    let __debug_reproducible_id = 0;
    function randSymbol(key) {
        if (isDebug)
            return Symbol.for(key + ++__debug_reproducible_id);
        return Symbol.for(Math.random().toString(16));
    }
    class SystemJSRealm extends SystemJSConstructor {
        // The import() function is implemented by SystemJS
        //#endregion
        constructor() {
            super();
            //#region Realm
            this[Symbol.toStringTag] = 'Realm';
            _globalScopeSymbol.set(this, randSymbol('realm'));
            _globalThis.set(this, {
                __proto__: null,
                /**
                 * Due to tech limitation, the eval will always be
                 * PerformEval(code,
                 *      callerRealm = this SystemJSRealm,
                 *      strictCaller = false,
                 *      direct = false)
                 */
                eval: (code) => {
                    // 18.2.1.1, step 2
                    if (typeof code !== 'string')
                        return code;
                    trace(`[WebExtension] Try to eval`, code);
                    if (!checkDynamicImport(code))
                        // Might be a Promise if the host enable CSP.
                        return __classPrivateFieldGet(this, _evaluate).call(this, code, [__classPrivateFieldGet(this, _runtimeTransformer).call(this, 'script', 'prebuilt', false)]);
                    // Sadly, must return a Promise here.
                    return this.evaluateInlineScript(code);
                },
                Function: new Proxy(Function, {
                    construct: (target, argArray, newTarget) => {
                        trace('[WebExtension] try to call new Function the following code:', ...argArray);
                        if (argArray.length === 1 && argArray[0] === 'return this')
                            return () => this.globalThis;
                        // TODO: impl this
                        throw new Error('Cannot run code dynamically');
                        // return construct(target, argArray, newTarget)
                    },
                    apply: (target, thisArg, code) => {
                        // Hack for babel regeneratorRuntime
                        if (code.length === 1 && code[0] === 'return this')
                            return () => this.globalThis;
                        if (code.length === 2 && code[0] === 'r' && code[1] === 'regeneratorRuntime = r')
                            // @ts-ignore
                            return (r) => (this.globalThis.regeneratorRuntime = r);
                        warn$1('[WebExtension]: try to construct Function by the following code:', ...code);
                        throw new Error('Cannot run code dynamically');
                        // return apply(target, thisArg, code)
                    },
                }),
            });
            /**
             * This is a map for inline module.
             * Key: script:random_number
             * Value: module text
             */
            _inlineModule.set(this, new Map());
            this.lastModuleRegister = null;
            //#endregion
            //#region Realm
            _runtimeTransformer.set(this, (kind, fileName, prebuilt) => (src) => prebuilt ? src : transformAST(src, kind, fileName));
            _evaluate.set(this, (sourceText, transformer) => {
                const evalCallbackID = randSymbol('callback');
                let rejection = (e) => { };
                const evaluation = new Promise((resolve, reject) => set(globalThis, evalCallbackID, (x) => {
                    resolve(x);
                    rejection = reject;
                }));
                evaluation.finally(() => deleteProperty(globalThis, evalCallbackID));
                transformer === null || transformer === void 0 ? void 0 : transformer.forEach((f) => (sourceText = f(sourceText)));
                const evalString = generateEvalString(sourceText, __classPrivateFieldGet(this, _globalScopeSymbol), evalCallbackID);
                if (canUseEval) {
                    return indirectEval(evalString);
                }
                setTimeout(rejection, 2000);
                return FrameworkRPC.eval('', evalString).then(() => evaluation, (e) => (rejection(e), evaluation));
            });
            _id.set(this, 0);
            _getEvalFileName.set(this, () => `debugger://${this.globalThis.browser.runtime.id}/VM${__classPrivateFieldSet(this, _id, +__classPrivateFieldGet(this, _id) + 1)}`
            /**
             * This function is used to execute script that with dynamic import
             * @param executor The SystemJS format executor returned by the eval call
             * @param scriptURL The script itself URL
             */
            );
            set(globalThis, __classPrivateFieldGet(this, _globalScopeSymbol), this.globalThis);
        }
        get globalThis() {
            return __classPrivateFieldGet(this, _globalThis);
        }
        //#region System
        /** Create import.meta */
        createContext(url) {
            if (url.startsWith('script:'))
                return this.globalThis.JSON.parse(JSON.stringify({ url: null }));
            return this.globalThis.JSON.parse(JSON.stringify({ url }));
        }
        createScript() {
            throw new Error('Invalid call');
        }
        async prepareImport() { }
        resolve(url, parentUrl) {
            if (__classPrivateFieldGet(this, _inlineModule).has(url))
                return url;
            if (__classPrivateFieldGet(this, _inlineModule).has(parentUrl))
                parentUrl = this.globalThis.location.href;
            return new URL(url, parentUrl).toJSON();
        }
        async instantiate(url) {
            const evalSourceText = async (sourceText, src, prebuilt) => {
                const result = await __classPrivateFieldGet(this, _evaluate).call(this, sourceText, [__classPrivateFieldGet(this, _runtimeTransformer).call(this, 'module', src, prebuilt)]);
                const executor = result;
                executor(this);
            };
            if (__classPrivateFieldGet(this, _inlineModule).has(url)) {
                const sourceText = __classPrivateFieldGet(this, _inlineModule).get(url);
                await evalSourceText(sourceText, url, false);
                return this.getRegister();
            }
            const prebuilt = await this.fetchPrebuilt('module', url);
            if (prebuilt) {
                const { content } = prebuilt;
                await evalSourceText(content, url, true);
            }
            else {
                const code = await this.fetchSourceText(url);
                if (!code)
                    throw new TypeError(`Failed to fetch dynamically imported module: ` + url);
                await evalSourceText(code, url, false);
                // ? The executor should call the register exactly once.
            }
            return this.getRegister();
        }
        getRegister() {
            return this.lastModuleRegister;
        }
        register(deps, declare, _) {
            if (!Array.isArray(deps))
                throw new TypeError();
            if (typeof declare !== 'function')
                throw new TypeError();
            this.lastModuleRegister = [deps, declare];
        }
        /**
         * This function is used to execute script that with dynamic import
         * @param executor The SystemJS format executor returned by the eval call
         * @param scriptURL The script itself URL
         */
        invokeScriptKindSystemJSModule(executor, scriptURL) {
            executor(this); // script mode with dynamic import
            const exportFn = () => {
                throw new SyntaxError(`Unexpected token 'export'`);
            };
            const context = {
                import: (id, self) => this.import(id, self !== null && self !== void 0 ? self : scriptURL),
                get meta() {
                    throw new SyntaxError(`Cannot use 'import.meta' outside a module`);
                },
            };
            return this.lastModuleRegister[1](exportFn, context).execute();
        }
        async evaluateScript(path, parentUrl) {
            const scriptURL = await this.resolve(path, parentUrl);
            const prebuilt = await this.fetchPrebuilt('script', scriptURL);
            if (prebuilt) {
                const { asSystemJS, content } = prebuilt;
                const executeResult = (await __classPrivateFieldGet(this, _evaluate).call(this, content));
                if (!asSystemJS)
                    return executeResult; // script mode
                return this.invokeScriptKindSystemJSModule(executeResult, scriptURL);
            }
            const sourceText = await this.fetchSourceText(scriptURL);
            if (!sourceText)
                throw new Error('Failed to fetch script ' + scriptURL);
            return this.evaluateInlineScript(sourceText, scriptURL);
        }
        async evaluateModule(path, parentUrl) {
            return this.import(path, parentUrl);
        }
        /**
         * Evaluate a inline ECMAScript module
         * @param sourceText Source text
         *
         * @deprecated This method is not compatible with CSP and might be rejected by the host.
         */
        async evaluateInlineModule(sourceText) {
            var _a;
            const key = `script:` + randSymbol('script-id').description;
            __classPrivateFieldGet(this, _inlineModule).set(key, sourceText);
            try {
                return await this.import(key);
            }
            finally {
                __classPrivateFieldGet(this, _inlineModule).delete(key);
                (_a = this.delete) === null || _a === void 0 ? void 0 : _a.call(this, key);
            }
        }
        /**
         * This function will run code in ECMAScript Script parsing mode
         * which doesn't support static import/export or import.meta.
         *
         * But support dynamic import
         * @param sourceText Source code
         * @param scriptURL Script URL (optional)
         *
         * @deprecated This method is not compatible with CSP and might be rejected by the host.
         */
        async evaluateInlineScript(sourceText, scriptURL = __classPrivateFieldGet(this, _getEvalFileName).call(this)) {
            const hasCache = scriptTransformCache.has(sourceText);
            const cache = scriptTransformCache.get(sourceText);
            const transformer = [__classPrivateFieldGet(this, _runtimeTransformer).call(this, 'script', scriptURL, false)];
            if (!checkDynamicImport(sourceText)) {
                if (hasCache)
                    return __classPrivateFieldGet(this, _evaluate).call(this, cache);
                return __classPrivateFieldGet(this, _evaluate).call(this, sourceText, transformer);
            }
            const executor = (hasCache ? await __classPrivateFieldGet(this, _evaluate).call(this, cache) : await __classPrivateFieldGet(this, _evaluate).call(this, sourceText, transformer));
            return this.invokeScriptKindSystemJSModule(executor, scriptURL);
        }
    }
    _globalScopeSymbol = new WeakMap(), _globalThis = new WeakMap(), _inlineModule = new WeakMap(), _runtimeTransformer = new WeakMap(), _evaluate = new WeakMap(), _id = new WeakMap(), _getEvalFileName = new WeakMap();

    function enhancedWorker(extensionID, originalWorker = window.Worker) {
        if (!isDebug)
            return originalWorker;
        return new Proxy(originalWorker, {
            construct(target, args, newTarget) {
                args[0] = debugModeURLRewrite(extensionID, args[0]);
                return Reflect.construct(target, args, newTarget);
            },
        });
    }

    const cachedPropertyDescriptor = new WeakMap();
    /**
     * This function can clone a new object with custom descriptors but keep internal slot forwarding.
     * @param cachedPropertyDescriptor A WeakMap. Used to store previously cloned prototype.
     * @param original Original object
     * @param realm Target realm
     * @param traps Traps
     */
    function cloneObjectWithInternalSlot(original, realm, traps) {
        var _a, _b, _c;
        const ownDescriptor = (_a = traps.designatedOwnDescriptors) !== null && _a !== void 0 ? _a : Object.getOwnPropertyDescriptors(original);
        const prototypeChain = getPrototypeChain(original);
        if (!cachedPropertyDescriptor.has(realm))
            cachedPropertyDescriptor.set(realm, new Map());
        const cacheMap = cachedPropertyDescriptor.get(realm);
        const newProto = prototypeChain.reduceRight((previous, current) => {
            var _a, _b;
            if (cacheMap.has(current))
                return cacheMap.get(current);
            const desc = Object.getOwnPropertyDescriptors(current);
            const nextDesc = PatchThisOfDescriptors((_b = (_a = traps.descriptorsModifier) === null || _a === void 0 ? void 0 : _a.call(traps, current, desc)) !== null && _b !== void 0 ? _b : desc, original);
            const obj = Object.create(previous, nextDesc);
            cacheMap.set(current, obj);
            return obj;
        }, {});
        const next = traps.nextObject || Object.create(null);
        const nextDesc = PatchThisOfDescriptors((_c = (_b = traps.descriptorsModifier) === null || _b === void 0 ? void 0 : _b.call(traps, next, ownDescriptor)) !== null && _c !== void 0 ? _c : ownDescriptor, original);
        Object.defineProperties(next, nextDesc);
        Object.setPrototypeOf(next, newProto);
        return next;
    }
    const toStringWeakMap = new WeakMap();
    Object.defineProperties(toStringWeakMap, {
        get: { value: toStringWeakMap.get },
        set: { value: toStringWeakMap.set },
        has: { value: toStringWeakMap.has },
    });
    Function.prototype.toString = new Proxy(Function.prototype.toString, {
        apply(target, thisArg, args) {
            if (toStringWeakMap.has(thisArg))
                return toStringWeakMap.get(thisArg);
            return Reflect.apply(target, thisArg, args);
        }
    });
    /**
     * Recursively get the prototype chain of an Object
     * @param o Object
     */
    function getPrototypeChain(o, _ = []) {
        if (o === undefined || o === null)
            return _;
        const y = Object.getPrototypeOf(o);
        if (y === null || y === undefined || y === Object.prototype || y === Function.prototype)
            return _;
        return getPrototypeChain(y, [..._, y]);
    }
    /**
     * Many native methods requires `this` points to a native object
     * Like `alert()`. If you call alert as `const w = { alert }; w.alert()`,
     * there will be an Illegal invocation.
     *
     * To prevent `this` binding lost, we need to rebind it.
     *
     * @param descriptor PropertyDescriptor
     * @param native The native object
     */
    function PatchThisOfDescriptorToNative(descriptor, native) {
        const { get, set, value } = descriptor;
        if (get)
            descriptor.get = () => get.apply(native);
        if (set)
            descriptor.set = (val) => set.apply(native, val);
        if (value && typeof value === 'function') {
            const nextDescriptor = Object.getOwnPropertyDescriptors(value);
            const f = {
                [value.name]: function () {
                    if (new.target)
                        return Reflect.construct(value, arguments, new.target);
                    return Reflect.apply(value, native, arguments);
                },
            }[value.name];
            descriptor.value = f;
            toStringWeakMap.set(f, value.toString());
            delete nextDescriptor.arguments;
            delete nextDescriptor.caller;
            delete nextDescriptor.callee;
            Object.defineProperties(f, nextDescriptor);
            Object.setPrototypeOf(f, value.__proto__);
        }
    }
    function PatchThisOfDescriptors(desc, native) {
        const _ = Object.entries(desc).map(([x, y]) => [x, { ...y }]);
        Object.getOwnPropertySymbols(desc).forEach((x) => _.push([x, { ...desc[x] }]));
        _.forEach((x) => PatchThisOfDescriptorToNative(x[1], native));
        return Object.fromEntries(_);
    }

    /**
     * This file is a reverse of webextension-polyfill.
     *
     * AKA, given a browser object, it implements Chrome-style Web Extension API.
     */
    function createChromeFromBrowser(_) {
        const chrome = {};
        for (const key in _) {
            // @ts-ignore
            (chrome[key] = {});
        }
        const bind = promiseToCallbackBased.bind(null, chrome);
        convertAll(chrome.downloads, _.downloads);
        convertAll(chrome.permissions, _.permissions);
        // @ts-ignore
        chrome.storage.local = {};
        convertAll(chrome.storage.local, _.storage.local);
        convertAll(chrome.tabs, _.tabs);
        chrome.runtime = _.runtime;
        chrome.webNavigation = _.webNavigation;
        chrome.extension = _.extension;
        return chrome;
        function convertAll(to, from) {
            for (const [k, v] of Object.entries(from))
                to[k] = bind(v);
        }
    }
    function promiseToCallbackBased(chrome, f) {
        return (...args) => {
            const [callback, ...rest] = [...args].reverse();
            let cb = typeof callback === 'function' ? callback : () => { };
            const success = onSuccess.bind(null, chrome, cb);
            const error = onError.bind(null, chrome, cb);
            if (typeof callback === 'function')
                f(...rest.reverse()).then(success, error);
            else
                f(...args).then(success, error);
        };
    }
    function onSuccess(chrome, callback, data) {
        delete chrome.runtime.lastError;
        return callback(data);
    }
    function onError(chrome, callback, e) {
        let checked = false;
        Object.defineProperty(chrome.runtime, 'lastError', {
            configurable: true,
            enumerable: true,
            get() {
                checked = true;
                return { message: String(e) };
            },
            set(val) { },
        });
        try {
            callback();
        }
        finally {
            if (!checked)
                throw String(e);
            delete chrome.runtime.lastError;
        }
    }

    /**
     * This file partly implements XRayVision in Firefox's WebExtension standard
     * by create a two-way JS sandbox but shared DOM environment.
     *
     * class WebExtensionContentScriptEnvironment will return a new JS environment
     * that has a "browser" variable inside of it and a clone of the current DOM environment
     * to prevent the main thread hack on prototype to access the content of ContentScripts.
     *
     * ## Checklist:
     * - [o] ContentScript cannot access main thread
     * - [ ] Main thread cannot access ContentScript
     * - [o] ContentScript can access main thread's DOM
     * - [ ] ContentScript modification on DOM prototype is not discoverable by main thread
     * - [ ] Main thread modification on DOM prototype is not discoverable by ContentScript
     */
    /**
     * Apply all WebAPIs to the clean sandbox created by Realm
     */
    const PrepareWebAPIs = (() => {
        // ? replace Function with polluted version by Realms
        // ! this leaks the sandbox!
        // We're no longer using realms now.
        // Object.defineProperty(
        //     Object.getPrototypeOf(() => {}),
        //     'constructor',
        //     {
        //         value: globalThis.Function,
        //     },
        // )
        const realWindow = window;
        const webAPIs = Object.getOwnPropertyDescriptors(window);
        return (sandboxRoot, locationProxy) => {
            // ?
            // const sandboxDocument = cloneObjectWithInternalSlot(document, sandboxRoot, {
            //     descriptorsModifier(obj, desc) {
            //         if ('defaultView' in desc) desc.defaultView.get = () => sandboxRoot
            //         return desc
            //     },
            // })
            const clonedWebAPIs = {
                ...webAPIs,
                // document: { configurable: false, enumerable: true, get: () => sandboxDocument },
            };
            for (const key in clonedWebAPIs)
                if (clonedWebAPIs[key].value === globalThis)
                    clonedWebAPIs[key].value = sandboxRoot;
            if (locationProxy)
                clonedWebAPIs.location.get = () => locationProxy;
            for (const key in clonedWebAPIs)
                if (key in sandboxRoot)
                    delete clonedWebAPIs[key];
            cloneObjectWithInternalSlot(realWindow, sandboxRoot, {
                nextObject: sandboxRoot,
                designatedOwnDescriptors: clonedWebAPIs,
            });
            // restore the identity continuity
            sandboxRoot.Object = Object;
            sandboxRoot.Function = Function;
        };
    })();
    const { log: log$1, warn } = console;
    const { get } = Reflect;
    /**
     * Execution environment of managed Realm (including content script in production and all env in runtime).
     */
    class WebExtensionManagedRealm extends SystemJSRealm {
        /**
         * Create a new running extension for an content script.
         * @param extensionID The extension ID
         * @param manifest The manifest of the extension
         */
        constructor(extensionID, manifest, locationProxy) {
            super();
            this.extensionID = extensionID;
            this.manifest = manifest;
            log$1('[WebExtension] Managed Realm created.');
            PrepareWebAPIs(this.globalThis, locationProxy);
            const browser = BrowserFactory(this.extensionID, this.manifest, this.globalThis.Object.prototype);
            const chrome = createChromeFromBrowser(browser);
            Object.defineProperty(this.globalThis, 'browser', {
                // ? Mozilla's polyfill may overwrite this. Figure this out.
                get: () => browser,
                set: () => false,
            });
            Object.defineProperty(this.globalThis, 'chrome', { enumerable: true, writable: true, value: chrome });
            this.globalThis.URL = enhanceURL(this.globalThis.URL, extensionID);
            this.globalThis.fetch = createFetch(extensionID);
            this.globalThis.open = openEnhanced(extensionID);
            this.globalThis.close = closeEnhanced(extensionID);
            this.globalThis.Worker = enhancedWorker(extensionID);
            // Preserve webkit on it's first access.
            let webkit;
            Object.defineProperty(this.globalThis, 'webkit', {
                enumerable: false,
                configurable: true,
                get: () => {
                    if (webkit)
                        return webkit;
                    return (webkit = get(globalThis, 'webkit', globalThis));
                },
            });
        }
        async fetchPrebuilt(kind, url) {
            const content = await this.fetchSourceText(url + `.prebuilt-${PrebuiltVersion}-${kind}`);
            if (!content)
                return null;
            if (kind === 'module')
                return { content: content, asSystemJS: true };
            const flag = content.slice(0, 4);
            return { content, asSystemJS: flag === '//d\n' };
        }
        async fetchSourceText(url) {
            const res = await getResourceAsync(this.extensionID, {}, url);
            if (res)
                return res;
            return null;
        }
    }

    const originalScriptSrcDesc = Object.getOwnPropertyDescriptor(HTMLScriptElement.prototype, 'src');
    function hookedHTMLScriptElementSrc(extensionID, manifest, currentPage) {
        const src = originalScriptSrcDesc;
        Object.defineProperty(HTMLScriptElement.prototype, 'src', {
            get() {
                return src.get.call(this);
            },
            set(path) {
                console.debug('script src=', path);
                const kind = this.type === 'module' ? 'module' : 'script';
                RunInProtocolScope(extensionID, manifest, { type: 'file', path }, currentPage, kind);
                this.dataset.src = path;
                return true;
            },
        });
    }

    function createLocationProxy(extensionID, manifest, currentPage) {
        const locationProxy = new Proxy({}, {
            get(target, key) {
                target = location;
                const obj = target[key];
                if (key === 'reload')
                    return () => target.reload();
                if (key === 'assign' || key === 'replace')
                    return (url) => {
                        const { src: base } = parseDebugModeURL(extensionID, manifest);
                        locationProxy.href = new URL(url, base);
                    };
                const mockedURL = new URL(currentPage);
                if (key in mockedURL)
                    return mockedURL[key];
                console.warn('Accessing', key, 'on location');
                return obj;
            },
            set(target, key, value) {
                target = location;
                if (key === 'origin')
                    return false;
                const mockedURL = new URL(currentPage);
                if (key in mockedURL) {
                    if (!Reflect.set(mockedURL, key, value))
                        return false;
                    const search = new URLSearchParams(target.search);
                    search.set('url', mockedURL.toJSON());
                    target.search = search.toString();
                    return true;
                }
                console.warn('Setting', key, 'on location to', value);
                return Reflect.set(target, key, value);
            },
            getOwnPropertyDescriptor: safeGetOwnPropertyDescriptor,
        });
        return locationProxy;
    }
    const safeGetOwnPropertyDescriptor = (obj, key) => {
        const orig = Reflect.getOwnPropertyDescriptor(obj, key);
        if (!orig)
            return undefined;
        return { ...orig, configurable: true };
    };

    const registeredWebExtension = new Map();
    var Environment;
    (function (Environment) {
        Environment["contentScript"] = "Content script";
        Environment["backgroundScript"] = "Background script";
        Environment["protocolPage"] = "Protocol page";
        Environment["debugModeManagedPage"] = "managed page";
    })(Environment || (Environment = {}));
    async function registerWebExtension(extensionID, manifest, preloadedResources = {}) {
        if (extensionID === reservedID)
            throw new TypeError('You cannot use reserved id ' + reservedID + ' as the extension id');
        let environment = getContext(manifest);
        let debugModeURL = '';
        if (isDebug) {
            const opt = parseDebugModeURL(extensionID, manifest);
            environment = opt.env;
            debugModeURL = opt.src;
            const g = () => registeredWebExtension.get(extensionID);
            Object.defineProperties(globalThis, {
                ['e' + extensionID]: { get: () => g() },
                ['r' + extensionID]: { get: () => g().environment },
                ['g' + extensionID]: { get: () => g().environment.globalThis },
            });
            console.log(`Extension ${extensionID} registered. Access it's WebExtensionRecord by e${extensionID}; it's Realm by r${extensionID}; it's globalThis object by g${extensionID}`);
        }
        console.debug(`[WebExtension] Loading extension ${manifest.name}(${extensionID}) with manifest`, manifest, `and preloaded resource`, preloadedResources, `in ${environment} mode`);
        try {
            switch (environment) {
                case Environment.debugModeManagedPage:
                    if (!isDebug)
                        throw new TypeError('Invalid state');
                    createManagedECMAScriptRealm(manifest, extensionID, preloadedResources, debugModeURL);
                    loadContentScriptByManifest(manifest, extensionID, debugModeURL);
                    break;
                case Environment.protocolPage:
                    prepareExtensionProtocolEnvironment(extensionID, manifest);
                    if (isDebug)
                        loadProtocolPageByManifest(extensionID, manifest, preloadedResources, debugModeURL);
                    break;
                case Environment.backgroundScript:
                    prepareExtensionProtocolEnvironment(extensionID, manifest);
                    await untilDocumentReady();
                    await loadBackgroundScriptByManifest(manifest, extensionID, preloadedResources);
                    break;
                case Environment.contentScript:
                    if (registeredWebExtension.has(extensionID))
                        return registeredWebExtension;
                    createManagedECMAScriptRealm(manifest, extensionID, preloadedResources, debugModeURL);
                    await untilDocumentReady();
                    await loadContentScriptByManifest(manifest, extensionID);
                    break;
                default:
                    console.warn(`[WebExtension] unknown running environment ${environment}`);
            }
        }
        catch (e) {
            if (isDebug)
                throw e;
            console.error(e);
        }
        if (environment === Environment.backgroundScript) {
            setTimeout(() => {
                useInternalStorage(extensionID, (o) => {
                    if (o.previousVersion) {
                        dispatchNormalEvent('browser.runtime.onInstall', extensionID, {
                            previousVersion: o.previousVersion,
                            reason: 'update',
                        });
                    }
                    else {
                        dispatchNormalEvent('browser.runtime.onInstall', extensionID, {
                            reason: 'install',
                        });
                    }
                    o.previousVersion = manifest.version;
                });
            }, 2000);
        }
        return registeredWebExtension;
    }
    function getContext(manifest) {
        let environment;
        if (location.protocol === 'holoflows-extension:') {
            if (location.pathname === '/_generated_background_page.html') {
                environment = Environment.backgroundScript;
            }
            else if (manifest.background &&
                manifest.background.page &&
                location.pathname === '/' + manifest.background.page) {
                environment = Environment.backgroundScript;
            }
            else
                environment = Environment.protocolPage;
        }
        else {
            environment = Environment.contentScript;
        }
        return environment;
    }
    function untilDocumentReady() {
        if (document.readyState === 'complete')
            return Promise.resolve();
        return new Promise((resolve) => {
            document.addEventListener('readystatechange', () => document.readyState === 'complete' && resolve());
        });
    }
    async function loadProtocolPageByManifest(extensionID, manifest, preloadedResources, loadingPageURL) {
        loadingPageURL = new URL(loadingPageURL, getPrefix(extensionID)).toJSON();
        hookedHTMLScriptElementSrc(extensionID, manifest, loadingPageURL);
        await loadProtocolPageToCurrentPage(extensionID, manifest, preloadedResources, loadingPageURL);
    }
    async function loadBackgroundScriptByManifest(manifest, extensionID, preloadedResources) {
        if (!manifest.background)
            return;
        const { page, scripts } = manifest.background;
        if (!isDebug && location.protocol !== 'holoflows-extension:') {
            throw new TypeError(`Background script only allowed in localhost(for debugging) and holoflows-extension://`);
        }
        let currentPage = getPrefix(extensionID) + '_generated_background_page.html';
        if (page) {
            if (scripts && scripts.length)
                throw new TypeError(`In the manifest, you can't have both "page" and "scripts" for background field!`);
            const pageURL = new URL(page, location.origin);
            if (pageURL.origin !== location.origin)
                throw new TypeError(`You can not specify a foreign origin for the background page`);
            currentPage = getPrefix(extensionID) + page;
        }
        hookedHTMLScriptElementSrc(extensionID, manifest, currentPage);
        if (page) {
            if (currentPage !== location.href) {
                await loadProtocolPageToCurrentPage(extensionID, manifest, preloadedResources, page);
                const div = document.createElement('div');
                if (isDebug) {
                    div.innerHTML = `
<style>body{background: black; color: white;font-family: system-ui;}</style>
This page is in the debug mode of WebExtension-polyfill<br />
It's running in the background page mode`;
                    document.body.appendChild(div);
                }
            }
        }
        else {
            for (const path of scripts || []) {
                // ? Run it in global scope.
                await RunInProtocolScope(extensionID, manifest, { path, type: 'file' }, currentPage, 'script');
            }
        }
    }
    async function loadProtocolPageToCurrentPage(extensionID, manifest, preloadedResources, page) {
        const html = await getResourceAsync(extensionID, preloadedResources, page);
        if (!html)
            throw new TypeError('Cannot find background page.');
        const parser = new DOMParser();
        const dom = parser.parseFromString(html, 'text/html');
        const scripts = await Promise.all(Array.from(dom.querySelectorAll('script')).map(async (script) => {
            const path = new URL(script.src).pathname;
            script.remove();
            return [path, script.type === 'module' ? 'module' : 'script'];
        }));
        for (const c of document.head.children)
            c.remove();
        for (const c of dom.head.children)
            document.head.appendChild(c);
        for (const c of document.body.children)
            c.remove();
        for (const c of dom.body.children)
            document.body.appendChild(c);
        for (const [path, kind] of scripts) {
            await RunInProtocolScope(extensionID, manifest, { path, type: 'file' }, new URL(page, getPrefix(extensionID)).toJSON(), kind);
        }
    }
    function prepareExtensionProtocolEnvironment(extensionID, manifest) {
        const browser = BrowserFactory(extensionID, manifest, Object.prototype);
        Object.assign(window, {
            browser,
            chrome: createChromeFromBrowser(browser),
            fetch: createFetch(extensionID),
            URL: enhanceURL(URL, extensionID),
            open: openEnhanced(extensionID),
            close: closeEnhanced(extensionID),
            Worker: enhancedWorker(extensionID),
        });
    }
    /**
     * Run code in holoflows-extension://extensionID/path
     * @param extensionID Extension ID
     * @param manifest Manifest
     * @param code Source code
     * @param currentPage Current page URL
     */
    async function RunInProtocolScope(extensionID, manifest, code, currentPage, kind) {
        const esModule = kind === 'module';
        if (location.protocol === 'holoflows-extension:') {
            const script = document.createElement('script');
            script.type = esModule ? 'module' : 'text/javascript';
            if (code.type === 'file')
                originalScriptSrcDesc.set.call(script, code.path);
            else
                script.innerHTML = code.source;
            script.defer = true;
            document.body.appendChild(script);
            return;
        }
        if (!isDebug)
            throw new TypeError('Run in the wrong scope');
        const { src } = parseDebugModeURL(extensionID, manifest);
        // ? Transform ESM into SystemJS to run in debug mode.
        const _ = createManagedECMAScriptRealm(manifest, extensionID, {}, currentPage || src).environment;
        if (code.type === 'file') {
            if (esModule)
                await _.evaluateModule(code.path, currentPage);
            else
                await _.evaluateScript(code.path, currentPage);
        }
        else {
            if (esModule)
                await _.evaluateInlineModule(code.source);
            else
                await _.evaluateInlineScript(code.source);
        }
    }
    function createManagedECMAScriptRealm(manifest, extensionID, preloadedResources, debugModePretendedURL) {
        if (!registeredWebExtension.has(extensionID)) {
            const environment = new WebExtensionManagedRealm(extensionID, manifest, debugModePretendedURL ? createLocationProxy(extensionID, manifest, debugModePretendedURL) : undefined);
            const ext = {
                manifest,
                environment,
                preloadedResources,
            };
            registeredWebExtension.set(extensionID, ext);
        }
        return registeredWebExtension.get(extensionID);
    }
    async function loadContentScriptByManifest(manifest, extensionID, debugModePretendedURL) {
        if (!isDebug && debugModePretendedURL)
            throw new TypeError('Invalid state');
        if (isDebug) {
            document.body.innerHTML = `
<style>body{background: black; color: white;font-family: system-ui;}</style>
<div>This page is running in the debug mode of WebExtension polyfill</div>
<div>It now pretending to be ${debugModePretendedURL}</div>
<div>So your content script will inject into this page.</div>
<hr />
Copy and apply the webpage to debug your content script:

<textarea id="a"></textarea>
<br />
<button onclick="
var p = new DOMParser();
var dom = p.parseFromString(document.getElementById('a').value, 'text/html');
dom.querySelectorAll('script').forEach(x => x.remove());
var x = new XMLSerializer();
var html = x.serializeToString(dom);
document.write(html);">Remove script tags and go</button>
`;
        }
        for (const [index, content] of (manifest.content_scripts || []).entries()) {
            warnNotImplementedManifestElement(content, index);
            if (matchingURL(new URL(debugModePretendedURL || location.href), content.matches, content.exclude_matches || [], content.include_globs || [], content.exclude_globs || [], content.match_about_blank)) {
                console.debug(`[WebExtension] Loading content script for`, content);
                await loadContentScript(extensionID, content);
            }
            else {
                console.debug(`[WebExtension] URL mismatched. Skip content script for, `, content);
            }
        }
    }
    async function loadContentScript(extensionID, content) {
        const { environment } = registeredWebExtension.get(extensionID);
        for (const path of content.js || []) {
            await environment.evaluateScript(path, getPrefix(extensionID));
        }
    }
    function warnNotImplementedManifestElement(content, index) {
        if (content.all_frames)
            console.warn(`all_frames not supported yet. Defined at manifest.content_scripts[${index}].all_frames`);
        if (content.css)
            console.warn(`css not supported yet. Defined at manifest.content_scripts[${index}].css`);
        if (content.run_at && content.run_at !== 'document_start')
            console.warn(`run_at not supported yet. Defined at manifest.content_scripts[${index}].run_at`);
    }

    var _a;
    const log = (rt) => async (...args) => {
        console.log('Mocked Host', ...args);
        return rt;
    };
    const myTabID = parseInt((_a = new URLSearchParams(location.search).get('id')) !== null && _a !== void 0 ? _a : ~~(Math.random() * 100));
    class CrossPageDebugChannel extends EventTarget {
        constructor() {
            super();
            this.tabsQuery = new BroadcastChannel('query-tabs');
            this.broadcast = new BroadcastChannel('webext-polyfill-debug');
            this.broadcast.addEventListener('message', (e) => {
                if (e.origin !== location.origin)
                    console.warn(e.origin, location.origin);
                const detail = e.data;
                this.dispatchEvent(new MessageEvent('message', { data: detail }));
            });
            this.tabsQuery.addEventListener('message', (e) => {
                if (e.origin !== location.origin)
                    console.warn(e.origin, location.origin);
                if (e.data === 'req')
                    this.tabsQuery.postMessage({ id: myTabID });
            });
        }
        queryTabs() {
            return new Promise((resolve) => {
                const id = new Set();
                this.tabsQuery.addEventListener('message', (e) => {
                    var _a;
                    if ((_a = e.data) === null || _a === void 0 ? void 0 : _a.id)
                        id.add(e.data.id);
                });
                this.tabsQuery.postMessage('req');
                setTimeout(() => resolve([...id]), 300);
            });
        }
        on(cb) {
            const f = (e) => cb(e.data);
            this.addEventListener('message', f);
            return () => this.removeEventListener('message', f);
        }
        send(data) {
            this.broadcast.postMessage(data);
        }
    }
    const origFetch = fetch;
    if (isDebug) {
        const crossPage = new CrossPageDebugChannel();
        const mockHost = M({
            onMessage: ThisSideImplementation.onMessage,
            onCommitted: ThisSideImplementation['browser.webNavigation.onCommitted'],
        }, {
            log: false,
            channel: crossPage,
            strict: false,
        });
        setTimeout(() => {
            const obj = parseDebugModeURL('', { id: myTabID });
            // webNavigation won't sent holoflows-extension pages.
            if (obj.src.startsWith('holoflows-'))
                return;
            mockHost.onCommitted({ tabId: myTabID, url: obj.src });
        }, 2000);
        const host = {
            'URL.createObjectURL': log(void 0),
            'URL.revokeObjectURL': log(void 0),
            'browser.downloads.download': log(void 0),
            async sendMessage(e, t, tt, m, mm) {
                mockHost.onMessage(e, t, m, mm, { id: myTabID });
            },
            'browser.storage.local.clear': log(void 0),
            async 'browser.storage.local.get'(extensionID, k) {
                return (await useInternalStorage(extensionID)).debugModeStorage || {};
            },
            'browser.storage.local.remove': log(void 0),
            async 'browser.storage.local.set'(extensionID, d) {
                useInternalStorage(extensionID, (o) => (o.debugModeStorage = Object.assign({}, o.debugModeStorage, d)));
            },
            async 'browser.tabs.create'(extensionID, options) {
                if (!options.url)
                    throw new TypeError('need a url');
                const a = document.createElement('a');
                a.href = debugModeURLRewrite(extensionID, options.url);
                const param = new URLSearchParams();
                param.set('url', options.url);
                param.set('type', options.url.startsWith('holoflows-extension://') ? 'p' : 'm');
                const id = ~~(Math.random() * 100);
                param.set('id', id.toString());
                a.href = '/?' + param;
                a.innerText = 'browser.tabs.create: Please click to open it: ' + options.url;
                a.target = '_blank';
                a.style.color = 'white';
                document.body.appendChild(a);
                return { id };
            },
            'browser.tabs.query': () => crossPage.queryTabs().then((x) => x.map((id) => ({ id }))),
            'browser.tabs.remove': log(void 0),
            'browser.tabs.update': log({}),
            async fetch(extensionID, r) {
                const req = await origFetch(debugModeURLRewrite(extensionID, r.url));
                if (req.ok)
                    return {
                        data: { content: await req.text(), mimeType: '', type: 'text' },
                        status: 200,
                        statusText: 'ok',
                    };
                return { data: { content: '', mimeType: '', type: 'text' }, status: 404, statusText: 'Not found' };
            },
            async eval(eid, string) {
                const x = eval;
                try {
                    x(string);
                }
                catch (e) {
                    console.log(string);
                    console.error(e);
                    throw e;
                }
            },
        };
        M(host, {
            log: false,
            channel: new SamePageDebugChannel('server'),
            strict: false,
        });
    }

    console.log('Loading dependencies from external', ts__namespace);
    // ## Inject here
    if (isDebug) {
        // leaves your id here, and put your extension to /extension/{id}/
        const testIDs = ['test'];
        testIDs.forEach((id) => fetch('/extension/' + id + '/manifest.json')
            .then((x) => x.text())
            .then((x) => registerWebExtension(id, JSON.parse(x))));
    }
    else {
        /** ? Can't delete a global variable */
        Object.assign(globalThis, {
            ts: undefined,
            TypeScript: undefined,
        });
    }
    /**
     * registerWebExtension(
     *      extensionID: string,
     *      manifest: Manifest,
     *      preloadedResources?: Record<string, string>
     * )
     */

})(ts);
//# sourceMappingURL=out.js.map
