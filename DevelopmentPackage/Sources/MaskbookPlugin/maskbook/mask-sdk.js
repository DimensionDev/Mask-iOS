(function () {
    'use strict';

    /// <reference types="./base.min.d.ts" />
    class r extends Error{constructor(r,e,t,n){super(e),this.name=r,this.code=t,this.stack=n;}}const e={},t={},n=[{},{},e,t];function o(r,e){const t=n.indexOf(r);return e.message+=`Error ${t}: https://github.com/Jack-Works/async-call-rpc/wiki/Errors#`+t,e}const s={__proto__:null,Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError},i=r=>(r+"").replace(/^.+\n.+\n/,""),a=()=>{try{return DOMException}catch(r){}},c=r=>"string"==typeof r,l=r=>"boolean"==typeof r,u=r=>"function"==typeof r,f=r=>"object"==typeof r&&null!==r,d=r=>Promise.reject(r),p=Array.isArray,y=()=>"() => replay()",m=(r,e,t,n)=>{void 0===r&&(r=null),Number.isNaN(e=Math.floor(e))&&(e=-1);const o={jsonrpc:"2.0",id:r,error:{code:e,message:t,data:n}};return w(o.error,"data"),o},h=(r,e,t)=>{const{id:n}=r,{code:o,message:s,data:i}=t(e,r);return m(n,o,s,i)},g=(r="",e=-1)=>t=>{let n=b("",(()=>t.message)),o=b("Error",((r=t.constructor)=>u(r)&&r.name));const s=a();return s&&t instanceof s&&(o="DOMException:"+t.name),(c(t)||"number"==typeof t||l(t)||"bigint"==typeof t)&&(o="Error",n=t+""),{code:e,message:n,data:r?{stack:r,type:o}:{type:o}}},E=r=>{if(!f(r))return !1;if(!k(r,"jsonrpc"))return !1;if("2.0"!==r.jsonrpc)return !1;if(k(r,"params")){const e=r.params;if(!p(e)&&!f(e))return !1}return !0},k=(r,e)=>e in r,b=(r,e)=>{try{const t=e();return void 0===t?r:t+""}catch(e){return r}},w=(r,e)=>{void 0===r[e]&&delete r[e];},v={serialization:r=>r,deserialization:r=>r},$=(r=[void 0,void 0],e,t="null")=>({serialization(n){if(t&&f(n)&&k(n,"result")&&void 0===n.result){const r={...n};r.result=null,"keep"===t&&(r.undef=!0),n=r;}return JSON.stringify(n,r[0],e)},deserialization(e){const t=JSON.parse(e,r[1]);return f(t)&&k(t,"result")&&null===t.result&&k(t,"undef")&&!0===t.undef&&(t.result=void 0,delete t.undef),t}}),S="AsyncCall/",P=Symbol.for(S+"ignored"),_=Symbol.for(S+"notify"),x=Symbol.for(S+"batch");const O=()=>Math.random().toString(36).slice(2),z=r=>void 0===r||r;function N(n,b){let $,S,j=!0;const M=async()=>{try{$=await n;}catch(r){S=r,Y("AsyncCall failed to start",r);}finally{j=!1;}},{serializer:R=v,key:N="rpc",strict:A=!0,log:C=!0,parameterStructures:T="by-position",preferLocalImplementation:W=!1,idGenerator:I=O,mapError:D,logger:J,channel:q,thenable:F}=b;n instanceof Promise?M():($=n,j=!1);const[L,U]=(r=>{if(!l(r)){const{methodNotFound:e,unknownMessage:t}=r;return [e,t]}return [r,r]})(A),[G,B,H,K,Q,V]=(r=>{if("all"===r)return [!0,!0,!0,!0,!0,!0];if(!l(r)){const{beCalled:e,localError:t,remoteError:n,type:o,requestReplay:s,sendLocalStack:i}=r;return [z(e),z(t),z(n),"basic"!==o,s,i]}return r?[!0,!0,!0,!0]:[]})(C),{log:X,error:Y=X,debug:Z=X,groupCollapsed:rr=X,groupEnd:er=X,warn:tr=X}=J||console,nr=new Map,or=async r=>{let e;try{if(e=await ar(r),E(e))return await fr(e);if(p(e)&&e.every(E)&&0!==e.length)return Promise.all(e.map(fr));if(U){let r=e.id;return void 0===r&&(r=null),(r=>m(r,-32600,"Invalid Request"))(r)}return}catch(r){return B&&Y(r,e,void 0),((r,e)=>{const t=h({},r,e),n=t.error;return n.code=-32700,n.message="Parse error",t})(r,D||g(r&&r.stack))}},sr=async r=>{if(r){if(p(r)){const e=r.filter((r=>r&&k(r,"id")));if(0===e.length)return;return ir(e)}return ir(r)}},ir=r=>R.serialization(r),ar=r=>R.deserialization(r);var cr;if(k(cr=q,"setup")&&u(cr.setup)&&q.setup((r=>or(r).then(sr)),(r=>{const e=ar(r);return !!E(e)||(r=>Promise.resolve(r))(e).then(E)})),(r=>k(r,"send")&&u(r.send))(q)){const r=q;r.on&&r.on((e=>or(e).then(sr).then((e=>e&&r.send(e)))));}function lr(r,e,t){return f(r)&&k(r,"stack")&&(r.stack=e.split("\n").reduce(((r,e)=>r.replace(e+"\n","")),""+r.stack)),B&&Y(r),h(t,r,D||g(V?r.stack:void 0))}async function ur(r,e=!1){e&&(r=[...r]);const t=await ir(r);return q.send(t)}const fr=async e=>{if(!k(e,"method"))return (async e=>{let t="",n="",o=0,i="Error";if(k(e,"error")){const r=e.error;t=r.message,o=r.code;const s=r.data;n=f(s)&&k(s,"stack")&&c(s.stack)?s.stack:"<remote stack not available>",i=f(s)&&k(s,"type")&&c(s.type)?s.type:"Error",H&&(K?Y(`${i}: ${t}(${o}) %c@${e.id}\n%c${n}`,"color: gray",""):Y(`${i}: ${t}(${o}) @${e.id}\n${n}`));}if(null==e.id)return;const{f:[l,u]=[null,null],stack:d=""}=nr.get(e.id)||{};l&&u&&(nr.delete(e.id),k(e,"error")?u(((e,t,n,o)=>{try{const i=a();if(e.startsWith("DOMException:")&&i)return new i(t,e.slice(13));if(e in s){const r=new s[e](t);return r.stack=o,r.code=n,r}return new r(e,t,n,o)}catch(r){return Error(`E${n} ${e}: ${t}\n${o}`)}})(i,t,o,n+"\n    аt AsyncCall (rpc) \n"+d)):l(e.result));})(e);{const r=(async r=>{if(j)await M();else if(S)return lr(S,"",r);let e="";try{const{params:t,method:n,id:o,remoteStack:s}=r,a=n.startsWith("rpc.")?Symbol.for(n):n,c=$&&$[a];if(!u(c))return L?m(o,-32601,"Method not found"):void(B&&Z("Missing method",a,r));const l=p(t)?t:[t];e=i(Error().stack);const f=new Promise((r=>r(c.apply($,l))));if(G)if(K){const r=[`${N}.%c${n}%c(${l.map((()=>"%o")).join(", ")}%c)\n%o %c@${o}`,"color: #d2c057","",...l,"",f,"color: gray; font-style: italic;"];if(Q){const e=()=>{debugger;return c.apply($,l)};e.toString=y,r.push(e);}s?(rr(...r),X(s),er()):X(...r);}else X(`${N}.${n}(${""+[...l]}) @${o}`);if(await f===P)return;return ((r,e)=>{const t={jsonrpc:"2.0",id:r,result:e};return w(t,"id"),t})(o,await f)}catch(t){return lr(t,e,r)}})(e);if(k(e,"id"))return r;try{await r;}catch(r){}}};return new Proxy({__proto__:null},{get(r,n){if("then"===n&&(void 0===F&&tr(o(t,new TypeError("RPC used as Promise: "))),!0!==F))return;if(c(n)&&r[n])return r[n];const s=r=>(...t)=>{let s,a=i(Error().stack);if(n===x&&(s=t.shift(),n=t.shift()),"symbol"==typeof n){const r=Symbol.keyFor(n)||n.description;if(r){if(!r.startsWith("rpc."))return d(new TypeError("Not start with rpc."));n=r;}}else if(n.startsWith("rpc."))return d(o(e,new TypeError));return new Promise(((e,o)=>{if(W&&!j&&c(n)){const r=$&&$[n];if(u(r))return e(r(...t))}const i=I(),[l]=t,d=V?a:"",p="by-name"===T&&1===t.length&&f(l)?l:t,y=((r,e,t,n)=>{const o={jsonrpc:"2.0",id:r,method:e,params:t,remoteStack:n};return w(o,"id"),((r,e)=>{r[e]||delete r[e];})(o,"remoteStack"),o})(r?void 0:i,n,p,d);if(s?(s.push(y),s.r||(s.r=[()=>ur(s,!0),r=>((r,e)=>{for(const t of r)if(k(t,"id")){const r=nr.get(t.id);r&&r.f[1](e);}})(s,r)])):ur(y).catch(o),r)return e();nr.set(i,{f:[e,o],stack:a});}))},a=s(!1);return a[_]=s(!0),a[_][_]=a[_],c(n)&&Object.defineProperty(r,n,{value:a,configurable:!0}),a}})}

    const serializer = $(
        [
            (key, value) => {
                if (value instanceof ArrayBuffer) return ArrayBufferEncode(value)
                if (value instanceof Uint8Array) return U8ArrayEncode(value)
                if (value instanceof Map) return MapEncode(value)
                return value
            },
            (key, value) => {
                if (typeof value === 'object' && value !== null && '$type' in value) {
                    return ArrayBufferDecode(value) || U8ArrayDecode(value) || MapDecode(value)
                }
                return value
            },
        ],
        undefined,
        'keep',
    );
    const [ArrayBufferEncode, ArrayBufferDecode] = createClassSerializer(
        ArrayBuffer,
        (e) => [...new Uint8Array(e)],
        (e) => new Uint8Array(e).buffer,
    );
    const [U8ArrayEncode, U8ArrayDecode] = createClassSerializer(
        Uint8Array,
        (e) => [...e],
        (e) => new Uint8Array(e),
    );
    const [MapEncode, MapDecode] = createClassSerializer(
        Map,
        (e) => [...e.entries()],
        (e) => new Map(e),
    );
    function createClassSerializer(
        clz,
        encode,
        decode,
    ) {
        return [
            (v) => {
                return { $type: clz.name, value: encode(v) }
            },
            (v) => {
                if (v.$type === clz.name) return decode(v.value)
                return undefined
            },
        ] 
    }

    const EVENT_UserScript = '@masknet/sdk-raw/us';
    const EVENT_ContentScript = '@masknet/sdk-raw/cs';
    function createMaskSDKChannel(side) {
        const thisSide = side === 'content' ? EVENT_ContentScript : EVENT_UserScript;
        const otherSide = side === 'content' ? EVENT_UserScript : EVENT_ContentScript;
        return {
            on(callback) {
                const f = (e) => {
                    if (e instanceof CustomEvent) callback(e.detail);
                };
                document.addEventListener(thisSide, f);
                return () => document.removeEventListener(thisSide, f)
            },
            send(data) {
                document.dispatchEvent(new CustomEvent(otherSide, { detail: data }));
            },
        }
    }

    const self = {
        request_init: null,
    };
    const readyPromise = new Promise((resolve) => {
        self.request_init = async (init) => resolve(init);
    });
    const contentScript = N(self, {
        channel: createMaskSDKChannel('user'),
        serializer,
    });

    const persona = {
        __experimental__sign__(message, style) {
            if (style !== 'web3') throw new TypeError('Unsupported persona sign style. Supported style: web3')

            return contentScript.persona_sign_web3(message)
        },
    };

    let connected = false;
    let metadata = undefined;
    class SocialNetwork extends EventTarget  {
        constructor(init) {
            super();
            connected = init.SNSContext.connected;
            metadata = init.SNSContext.meta;
        }
        async appendComposition(message, metadata) {
            if (metadata) metadata = new Map(metadata);
            contentScript.sns_appendComposition(message, metadata);
        }
        get connected() {
            return !!connected
        }
        get metadata() {
            return metadata
        }
    }

    function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }
    _optionalChain([document, 'access', _ => _.currentScript, 'optionalAccess', _2 => _2.remove, 'call', _3 => _3()]);
    readyPromise.then((init) => {
        const MaskSDK = {
            sdkVersion: 0,
            credentials: {} ,
            ethereum: {} ,
            socialNetwork: new SocialNetwork(init),
            persona,
        };

        try {
            // @ts-expect-error
            if (process.env.NODE_ENV === 'development') {
                // @ts-expect-error
                MaskSDK.reload = () => document.dispatchEvent(new Event('mask-sdk-reload'));
            }
        } catch (e) {}

        Reflect.set(globalThis, 'Mask', MaskSDK);
    });

})();
