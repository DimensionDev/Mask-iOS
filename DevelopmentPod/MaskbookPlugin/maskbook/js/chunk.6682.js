"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6682],{

/***/ 14136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "P": () => (/* reexport */ attachment_namespaceObject)
});

// NAMESPACE OBJECT: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js
var attachment_namespaceObject = {};
__webpack_require__.r(attachment_namespaceObject);
__webpack_require__.d(attachment_namespaceObject, {
  "checksum": () => (checksum),
  "decode": () => (decode),
  "encode": () => (encode),
  "getPayload": () => (getPayload),
  "loadKey": () => (loadKey)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@1.12.2/node_modules/@msgpack/msgpack/dist.es5/msgpack.min.js
var msgpack_min = __webpack_require__(21795);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/utils.js
async function checksum(block) {
    const hashed = await crypto.subtle.digest({ name: "SHA-256" }, block);
    return new Uint8Array(hashed);
}
async function loadKey(passphrase, salt) {
    const key = await crypto.subtle.importKey("raw", passphrase, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
    return crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1000,
        hash: "SHA-256",
    }, key, { name: "AES-GCM", length: 128 }, true, ["encrypt", "decrypt"]);
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/types.js
const MAGIC_HEADER = new TextEncoder().encode("MASKBOOK-ATTACHMENT");
//# sourceMappingURL=types.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/encoder.js



async function encode(passphrase, input) {
    let algorithm, salt, block, keyHash;
    if (passphrase === undefined) {
        block = input.block;
    }
    else {
        keyHash = await checksum(passphrase);
        salt = crypto.getRandomValues(new Uint8Array(8));
        const key = await loadKey(passphrase, salt);
        const iv = crypto.getRandomValues(new Uint8Array(12));
        algorithm = { name: "AES-GCM", iv, tagLength: 128 };
        const encrypted = await crypto.subtle.encrypt(algorithm, key, input.block);
        block = new Uint8Array(encrypted);
    }
    const payload = {
        version: 0,
        mime: input.mime,
        metadata: input.metadata,
        algorithm,
        salt,
        keyHash,
        block,
        blockHash: await checksum(block),
    };
    return Uint8Array.from([...MAGIC_HEADER, ...(0,msgpack_min.encode)(payload)]);
}
//# sourceMappingURL=encoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/utils.js
function bufferEqual(buf1, buf2) {
    if (buf1 === buf2) {
        return true;
    }
    else if (buf1.byteLength !== buf2.byteLength) {
        return false;
    }
    let i = buf1.byteLength;
    while (i--) {
        if (buf1[i] !== buf2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=utils.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/payload.js




async function getPayload(passphrase, encoded) {
    if (!bufferEqual(MAGIC_HEADER, encoded.slice(0, MAGIC_HEADER.length))) {
        throw new Error("unexpected magic header.");
    }
    const buffer = encoded.slice(MAGIC_HEADER.length);
    const payload = (0,msgpack_min.decode)(buffer);
    if (payload.version !== 0) {
        throw new Error("unexpected file version.");
    }
    else if (payload.mime.length === 0) {
        throw new Error("unexpected `.mime`.");
    }
    else if (!bufferEqual(payload.blockHash, await checksum(payload.block))) {
        throw new Error("unexpected `blockHash`.");
    }
    else if (passphrase && payload.keyHash) {
        if (!bufferEqual(payload.keyHash, await checksum(passphrase))) {
            throw new Error("unexpected `keyHash`.");
        }
    }
    return payload;
}
//# sourceMappingURL=payload.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/decoder.js


async function decode(passphrase, encoded) {
    const payload = await getPayload(passphrase, encoded);
    let block = payload.block;
    if (passphrase && payload.algorithm && payload.salt) {
        const data = await crypto.subtle.decrypt(payload.algorithm, await loadKey(passphrase, payload.salt), payload.block);
        block = new Uint8Array(data);
    }
    return {
        mime: payload.mime,
        metadata: payload.metadata,
        block,
    };
}
//# sourceMappingURL=decoder.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/attachment/index.js




//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 68180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kF": () => (/* binding */ setupDatabase),
/* harmony export */   "ww": () => (/* binding */ getAllFiles),
/* harmony export */   "N0": () => (/* binding */ getRecentFiles),
/* harmony export */   "hr": () => (/* binding */ getFileInfo),
/* harmony export */   "oq": () => (/* binding */ setFileInfo)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89314);

let Database;
function setupDatabase(_) {
    Database = _;
}
let migrationDone = false;
async function migrationV1_V2() {
    if (migrationDone) return;
    for await (const x of Database.iterate_mutate('arweave')){
        await Database.add((0,_helpers__WEBPACK_IMPORTED_MODULE_0__/* .FileInfoV1ToV2 */ .F)(x.value));
        await x.delete();
    }
    migrationDone = true;
}
async function getAllFiles() {
    await migrationV1_V2();
    const files = [];
    for await (const { value  } of Database.iterate('file')){
        files.push(value);
    }
    return files.sort((a, b)=>b.createdAt.getTime() - a.createdAt.getTime()
    );
}
async function getRecentFiles() {
    const files = await getAllFiles();
    return files.slice(0, 4);
}
async function getFileInfo(checksum) {
    await migrationV1_V2();
    return Database.get('file', checksum);
}
async function setFileInfo(info) {
    await migrationV1_V2();
    return Database.add(info);
}


/***/ }),

/***/ 76682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getAllFiles": () => (/* reexport */ database/* getAllFiles */.ww),
  "getFileInfo": () => (/* reexport */ database/* getFileInfo */.hr),
  "getRecentFiles": () => (/* reexport */ database/* getRecentFiles */.N0),
  "makeAttachment": () => (/* reexport */ makeAttachment),
  "setFileInfo": () => (/* reexport */ database/* setFileInfo */.oq),
  "setupDatabase": () => (/* reexport */ database/* setupDatabase */.kF),
  "upload": () => (/* reexport */ upload),
  "uploadLandingPage": () => (/* reexport */ uploadLandingPage)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+common-protocols@1.6.0-20210723072221-8f46a92/node_modules/@dimensiondev/common-protocols/esm/index.js + 7 modules
var esm = __webpack_require__(14136);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_8495c1478c7f1d196df61d0bdcd91148/node_modules/@dimensiondev/kit/esm/index.js
var kit_esm = __webpack_require__(84176);
// EXTERNAL MODULE: ../../node_modules/.pnpm/arweave@1.10.13/node_modules/arweave/web/index.js
var web = __webpack_require__(48383);
var web_default = /*#__PURE__*/__webpack_require__.n(web);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(29330);
// EXTERNAL MODULE: ../plugins/FileService/src/constants.ts
var constants = __webpack_require__(69652);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/remote-signing.ts


async function sign(transaction) {
    const response = await fetch(constants/* signing */.Gm, {
        method: 'POST',
        // Allow workaround based on version
        // headers: { 'mask-version': process.env.VERSION },
        // Temporary workaround for https://github.com/msgpack/msgpack-javascript/issues/145
        body: Uint8Array.from(await makeRequest(transaction))
    });
    transaction.setSignature(await response.json());
}
async function makeRequest(transaction) {
    const encoder = new TextEncoder();
    await transaction.prepareChunks(transaction.data);
    const get = (base, name)=>base.get(name, {
            decode: true,
            string: false
        })
    ;
    return (0,encode/* encode */.c)([
        encoder.encode(transaction.format.toString()),
        get(transaction, 'owner'),
        get(transaction, 'target'),
        encoder.encode(transaction.quantity),
        encoder.encode(transaction.reward),
        get(transaction, 'last_tx'),
        transaction.tags.map((tag)=>[
                get(tag, 'name'),
                get(tag, 'value')
            ]
        ),
        encoder.encode(transaction.data_size),
        get(transaction, 'data_root'), 
    ]);
}

;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/arweave-token.json
const arweave_token_namespaceObject = JSON.parse('{"kty":"RSA","n":"qajRPsPmNXRt3L5QYk5h62E_LzsuqjsMtjVAjaC2IsMFekiIM1n1oscwJofvEhqCL6Yd9N55xySdzg5_VjBVaxxfCSsPsXVnsHGZDjJR0hOEMe6M-eA-dfxYqqUInNcJiuQBgO-ik2VCo92e6b2H6MozNWIlSmPZefjPWAUB3-Wm0LMPSX-GJiz5m0yS0-1cvtChGzQC38O174G0DfHyFjEmvO0DS4HnOH3htkz_9u96qtily0odFiru6vNuD8aGyfWqaJX52MLiw3zPUihlNnT6z4iw0eh0aKjjnZJV0IkV9042Eu2503KaTi-jfAnwZknB1rGdZziyFJzfD2kSLiPJT9J_YCQGcXqlhZHaq_Iw3PzPziw-rSRr--701HpFjwq41XVhCYdVkzo5OsTbOzgzriCPJuiGZkhrzIOcm2p5U4SLwphc0zBpkkWDj72CKMG2UK_z4GjiGO51VVCxxaKAA-w4z1Ba_LKV5QMnxXE3FiuB6gQW9xNl-K0zaPJbLgIciLV1v2UKWHjjwWacShVRfdrKoKIHbMs9prlO7NyLDhfeBh67i-TfGLtcxgd6Y0v9KqB6j3qFtIvkT4dJL8NCEfOCczS0Mp6K8O0Wy-4r9OU8Q7xjnG2CZ9gh5rF3pKhU3iLYlP8FS4voeNi6ANVJSmOI4qYN8REZqC9Qkec"}');
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/arweave.ts







const stage = {};
const instance = web_default().init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
});
async function makeAttachment(options) {
    const passphrase = options.key ? (0,kit_esm/* encodeText */.YT)(options.key) : undefined;
    const encoded = await esm/* Attachment.encode */.P.encode(passphrase, {
        block: options.block,
        mime: (0,isEmpty/* default */.Z)(options.type) ? 'application/octet-stream' : options.type,
        metadata: null
    });
    const transaction = await makePayload(encoded, 'application/octet-stream');
    stage[transaction.id] = transaction;
    return transaction.id;
}
// import { ServicesWithProgress } from 'src/extension/service.ts'
// ServicesWithProgress.pluginArweaveUpload
async function* upload(id) {
    for await (const uploader of instance.transactions.upload(stage[id])){
        yield uploader.pctComplete;
    }
}
async function uploadLandingPage(metadata) {
    let linkPrefix = 'https://arweave.net';
    if (metadata.useCDN) {
        linkPrefix = constants/* mesonPrefix */.oC;
    }
    const encodedMetadata = JSON.stringify({
        name: metadata.name,
        size: metadata.size,
        link: `${linkPrefix}/${metadata.txId}`,
        signed: await makeFileKeySigned(metadata.key),
        createdAt: new Date().toISOString()
    });
    const response = await fetch(constants/* landing */._$);
    const text = await response.text();
    const replaced = text.replace('__METADATA__', encodedMetadata);
    const data = (0,kit_esm/* encodeText */.YT)(replaced);
    const transaction = await makePayload(data, 'text/html');
    await instance.transactions.post(transaction);
    return transaction.id;
}
async function makePayload(data, type) {
    const transaction = await instance.createTransaction({
        data
    }, {
        ...arweave_token_namespaceObject,
        e: ''
    });
    transaction.addTag('Content-Type', type);
    await sign(transaction);
    return transaction;
}
async function makeFileKeySigned(fileKey) {
    if ((0,isNil/* default */.Z)(fileKey)) {
        return null;
    }
    const encodedKey = (0,kit_esm/* encodeText */.YT)(fileKey);
    const key = await crypto.subtle.generateKey({
        name: 'HMAC',
        hash: {
            name: 'SHA-256'
        }
    }, true, [
        'sign',
        'verify'
    ]);
    const exportedKey = await crypto.subtle.exportKey('raw', key);
    const signed = await crypto.subtle.sign({
        name: 'HMAC'
    }, key, encodedKey);
    return [
        signed,
        exportedKey
    ].map(kit_esm/* encodeArrayBuffer */.ll);
}

// EXTERNAL MODULE: ../plugins/FileService/src/Worker/database.ts
var database = __webpack_require__(68180);
;// CONCATENATED MODULE: ../plugins/FileService/src/Worker/service.ts




/***/ })

}]);