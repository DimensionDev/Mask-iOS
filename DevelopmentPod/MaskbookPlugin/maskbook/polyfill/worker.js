try{if("function"==typeof function(ops){let lastAccessLHS,value=ops[0],i=1;for(;i<ops.length;){const op=ops[i],fn=ops[i+1];if(i+=2,("optionalAccess"===op||"optionalCall"===op)&&null==value)return;"access"===op||"optionalAccess"===op?(lastAccessLHS=value,value=fn(value)):"call"!==op&&"optionalCall"!==op||(value=fn(((...args)=>value.call(lastAccessLHS,...args))),lastAccessLHS=void 0)}return value}([globalThis,"access",_=>_.EventTarget,"optionalAccess",_2=>_2.call]))try{new EventTarget}catch(e){shim()}function shim(){globalThis.EventTarget=new Proxy(EventTarget,{construct:()=>(new AbortController).signal})}}catch(err){console.warn("Failed to polyfill EventTarget.constructor:",err)}try{function shim(){if("undefined"==typeof FileReader)throw new Error("FileReader is undefined");Blob.prototype.arrayBuffer=function(){return new Promise(((resolve,reject)=>{const reader=new FileReader;reader.addEventListener("load",(()=>resolve(reader.result))),reader.addEventListener("error",(()=>reject(reader.error))),reader.readAsArrayBuffer(this)}))}}"function"==typeof Blob&&(Blob.prototype.arrayBuffer||shim())}catch(err){console.warn("Failed to polyfill Blob.prototype.arrayBuffer:",err)}
;null;