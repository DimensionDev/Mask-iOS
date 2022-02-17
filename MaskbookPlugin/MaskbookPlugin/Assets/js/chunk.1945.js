(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8537,4769],{

/***/ 74326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decryptComment": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.decryptComment),
/* harmony export */   "decryptMessage1To1": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.decryptMessage1To1),
/* harmony export */   "decryptMessage1ToNByMyself": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.decryptMessage1ToNByMyself),
/* harmony export */   "decryptMessage1ToNByOther": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.decryptMessage1ToNByOther),
/* harmony export */   "decryptWithAES": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.decryptWithAES),
/* harmony export */   "encrypt1To1": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.encrypt1To1),
/* harmony export */   "encrypt1ToN": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.encrypt1ToN),
/* harmony export */   "encryptComment": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.encryptComment),
/* harmony export */   "encryptWithAES": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.encryptWithAES),
/* harmony export */   "extractAESKeyInMessage": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.extractAESKeyInMessage),
/* harmony export */   "generateOthersAESKeyEncrypted": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__.generateOthersAESKeyEncrypted),
/* harmony export */   "publicSharedAESKey": () => (/* binding */ publicSharedAESKey),
/* harmony export */   "typedMessageStringify": () => (/* binding */ typedMessageStringify),
/* harmony export */   "typedMessageParse": () => (/* binding */ typedMessageParse),
/* harmony export */   "encryptBackup": () => (/* binding */ encryptBackup),
/* harmony export */   "decryptBackup": () => (/* binding */ decryptBackup)
/* harmony export */ });
/* harmony import */ var _protocols_typed_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65570);
/* harmony import */ var _modules_workers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36512);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37186);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61136);
/* harmony import */ var _utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28504);
/* harmony import */ var _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15120);
/* harmony import */ var _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(49387);







// @ts-ignore
const publicSharedAESKey = {
    alg: 'A256GCM',
    ext: true,
    k: '3Bf8BJ3ZPSMUM2jg2ThODeLuRRD_-_iwQEaeLdcQXpg',
    key_ops: [
        'encrypt',
        'decrypt'
    ],
    kty: 'oct'
};
/**
 * With plugin: {"payload": "data"}🧩My message
 * Without plugin: My message
 */ function typedMessageStringify(x) {
    if (!(0,_protocols_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(x)) throw new Error('Not supported typed message.');
    if (!x.meta || x.meta.size === 0) return x.content;
    const obj = {
    };
    for (const [a, b] of x.meta)obj[a] = b;
    return JSON.stringify(obj) + '🧩' + x.content;
}
function typedMessageParse(x) {
    const [maybeMetadata, ...end] = x.split('🧩');
    try {
        const json = JSON.parse(maybeMetadata);
        if (typeof json !== 'object' || json === null || Object.keys(json).length === 0) throw new Error('Not a metadata');
        return (0,_protocols_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(end.join('🧩'), new Map(Object.entries(json)));
    } catch  {
    }
    return (0,_protocols_typed_message__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(x);
}
//#region Backup
async function getBackupKey(password, account) {
    const pbkdf2 = await _modules_workers__WEBPACK_IMPORTED_MODULE_1__/* .CryptoWorker.import_pbkdf2 */ .i.import_pbkdf2((0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .encodeText */ .YT)(password + account));
    return (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_3__/* .derive_AES_GCM_256_Key_From_PBKDF2 */ .SW)(pbkdf2, (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .encodeText */ .YT)(account + password));
}
async function encryptBackup(password, account, message) {
    const aesKey = await getBackupKey(password, account);
    const { content  } = await (0,_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_5__.encryptWithAES)({
        content: message,
        aesKey,
        iv: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .encodeText */ .YT)(account + password)
    });
    return (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .encodeArrayBuffer */ .ll)(content);
}
async function decryptBackup(password, account, message) {
    const aesKey = await getBackupKey(password, account);
    const buffer = await (0,_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_5__.decryptWithAES)({
        encrypted: message,
        aesKey,
        iv: (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .encodeText */ .YT)(account + password)
    });
    return (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_4__/* .decodeText */ .rj)(buffer);
} //#endregion


/***/ }),

/***/ 49387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateOthersAESKeyEncrypted": () => (/* binding */ generateOthersAESKeyEncrypted),
/* harmony export */   "encrypt1ToN": () => (/* binding */ encrypt1ToN),
/* harmony export */   "encrypt1To1": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encrypt1To1),
/* harmony export */   "decryptMessage1To1": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptMessage1To1),
/* harmony export */   "decryptMessage1ToNByOther": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptMessage1ToNByOther),
/* harmony export */   "decryptMessage1ToNByMyself": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptMessage1ToNByMyself),
/* harmony export */   "extractAESKeyInMessage": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.extractAESKeyInMessage),
/* harmony export */   "encryptWithAES": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encryptWithAES),
/* harmony export */   "decryptWithAES": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptWithAES),
/* harmony export */   "encryptComment": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encryptComment),
/* harmony export */   "decryptComment": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.decryptComment),
/* harmony export */   "typedMessageStringify": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.typedMessageStringify),
/* harmony export */   "typedMessageParse": () => (/* reexport safe */ _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.typedMessageParse)
/* harmony export */ });
/* harmony import */ var _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15120);
/**
 * @deprecated This version of payload is not in use.
 * Please goto Crypto alpha v38
 */ 
async function generateOthersAESKeyEncrypted(version, AESKey, privateKeyECDH, othersPublicKeyECDH) {
    const othersPublicKeyECDH_ = othersPublicKeyECDH.map((x, index)=>({
            key: x,
            name: index.toString()
        })
    );
    const othersAESKeyEncrypted = await (0,_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.generateOthersAESKeyEncrypted)(-40, AESKey, privateKeyECDH, othersPublicKeyECDH_);
    const othersAESKeyEncrypted_ = othersAESKeyEncrypted.map((key)=>({
            aesKey: key.key,
            receiverKey: othersPublicKeyECDH[Number.parseInt(key.name, 10)]
        })
    );
    return othersAESKeyEncrypted_;
}
/**
 * Encrypt 1 to N
 *
 * This function is generally based on encrypt1ToN in crypto-alpha-40
 */ async function encrypt1ToN(info) {
    const othersPublicKeyECDH = info.othersPublicKeyECDH.map((x, index)=>({
            key: x,
            name: index.toString()
        })
    );
    const { encryptedContent , iv , othersAESKeyEncrypted , ownersAESKeyEncrypted , postAESKey  } = await (0,_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__.encrypt1ToN)({
        ...info,
        othersPublicKeyECDH,
        version: -40
    });
    const othersAESKeyEncrypted_ = othersAESKeyEncrypted.map((key)=>({
            aesKey: key.key,
            receiverKey: othersPublicKeyECDH[Number.parseInt(key.name, 10)].key
        })
    );
    return {
        encryptedContent,
        iv,
        version: info.version,
        ownersAESKeyEncrypted,
        othersAESKeyEncrypted: othersAESKeyEncrypted_,
        postAESKey
    };
}







/***/ }),

/***/ 15120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encrypt1To1": () => (/* binding */ encrypt1To1),
/* harmony export */   "generateOthersAESKeyEncrypted": () => (/* binding */ generateOthersAESKeyEncrypted),
/* harmony export */   "encrypt1ToN": () => (/* binding */ encrypt1ToN),
/* harmony export */   "decryptMessage1To1": () => (/* binding */ decryptMessage1To1),
/* harmony export */   "decryptMessage1ToNByOther": () => (/* binding */ decryptMessage1ToNByOther),
/* harmony export */   "extractAESKeyInMessage": () => (/* binding */ extractAESKeyInMessage),
/* harmony export */   "decryptMessage1ToNByMyself": () => (/* binding */ decryptMessage1ToNByMyself),
/* harmony export */   "decryptWithAES": () => (/* binding */ decryptWithAES),
/* harmony export */   "encryptWithAES": () => (/* binding */ encryptWithAES),
/* harmony export */   "encryptComment": () => (/* binding */ encryptComment),
/* harmony export */   "decryptComment": () => (/* binding */ decryptComment),
/* harmony export */   "typedMessageStringify": () => (/* binding */ typedMessageStringify),
/* harmony export */   "typedMessageParse": () => (/* binding */ typedMessageParse)
/* harmony export */ });
/* harmony import */ var _utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28504);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59935);
/* harmony import */ var _protocols_typed_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65570);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93002);
/* harmony import */ var _modules_workers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36512);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61136);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96578);
/**
 * @deprecated This version of payload is not in use.
 * Please goto Crypto alpha v38
 */ 






//#region Derive AES Key from ECDH key
/**
 * Derive the key from your private ECDH key and someone else's ECDH key.
 * If the key is ECDSA, it will be transform to ECDH.
 *
 * If you provide the same privateKey, othersPublicKey and salt, the results will be the same.
 * @param privateKey Your private key
 * @param othersPublicKey Public key of someone you want to derive key to
 * @param salt Salt
 */ async function deriveAESKey(privateKey, othersPublicKey, /** If salt is not provided, we will generate one. And you should send it to your friend. */ salt = crypto.getRandomValues(new Uint8Array(64))) {
    const op = othersPublicKey;
    const pr = privateKey;
    const derivedKey = await _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.aes_to_raw */ .i.aes_to_raw(await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__/* .derive_AES_GCM_256_Key_From_ECDH_256k1_Keys */ .Kn)(pr, op));
    const _salt = typeof salt === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(salt) : salt;
    const UntitledUint8Array = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .addUint8Array */ .iu)(new Uint8Array(derivedKey), _salt);
    const password = await crypto.subtle.digest('SHA-256', (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .addUint8Array */ .iu)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .addUint8Array */ .iu)(UntitledUint8Array, _salt), (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('KEY')));
    const iv_pre = new Uint8Array(await crypto.subtle.digest('SHA-256', (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .addUint8Array */ .iu)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .addUint8Array */ .iu)(UntitledUint8Array, _salt), (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('IV'))));
    const iv = new Uint8Array(16);
    for(let i = 0; i <= 16; i += 1){
        // eslint-disable-next-line no-bitwise
        iv[i] = iv_pre[i] ^ iv_pre[16 + i];
    }
    const key = await _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.raw_to_aes */ .i.raw_to_aes(password);
    return {
        key,
        salt: _salt,
        iv
    };
}
//#endregion
//#region encrypt text
/**
 * Encrypt 1 to 1
 */ async function encrypt1To1(info) {
    const { version , privateKeyECDH , othersPublicKeyECDH  } = info;
    let { content  } = info;
    if (typeof content === 'string') content = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(content);
    const { iv , key , salt  } = await deriveAESKey(privateKeyECDH, othersPublicKeyECDH);
    const encryptedContent = await _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(key, iv, content);
    return {
        salt,
        encryptedContent,
        version: -40
    };
}
async function generateOthersAESKeyEncrypted(version, AESKey, privateKeyECDH, othersPublicKeyECDH) {
    const exportedAESKey = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(JSON.stringify(AESKey));
    return Promise.all(othersPublicKeyECDH.map(async ({ key , name  })=>{
        const encrypted = await encrypt1To1({
            // This is the deprecated -40 code path
            version: -40,
            content: exportedAESKey,
            othersPublicKeyECDH: key,
            privateKeyECDH: privateKeyECDH
        });
        return {
            name,
            key: {
                version: -40,
                salt: (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(encrypted.salt),
                encryptedKey: (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(encrypted.encryptedContent)
            }
        };
    }));
}
/**
 * Encrypt 1 to N
 */ async function encrypt1ToN(info) {
    const { version , content , othersPublicKeyECDH , privateKeyECDH , ownersLocalKey , iv  } = info;
    const AESKey = await _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.generate_aes_gcm */ .i.generate_aes_gcm();
    const encryptedContent = await _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(AESKey, iv, typeof content === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(content) : content);
    const exportedAESKey = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(JSON.stringify(AESKey));
    const ownersAESKeyEncrypted = (await encryptWithAES({
        aesKey: ownersLocalKey,
        content: exportedAESKey,
        iv
    })).content;
    const othersAESKeyEncrypted = await generateOthersAESKeyEncrypted(-40, AESKey, privateKeyECDH, othersPublicKeyECDH);
    return {
        encryptedContent,
        iv,
        version: -40,
        ownersAESKeyEncrypted,
        othersAESKeyEncrypted,
        postAESKey: AESKey
    };
}
//#endregion
//#region decrypt text
/**
 * Decrypt 1 to 1
 */ async function decryptMessage1To1(info) {
    const { anotherPublicKeyECDH , version , salt , encryptedContent , privateKeyECDH  } = info;
    const encrypted = typeof encryptedContent === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(encryptedContent) : encryptedContent;
    const { iv , key  } = await deriveAESKey(privateKeyECDH, anotherPublicKeyECDH, salt);
    return _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.decrypt_aes_gcm */ .i.decrypt_aes_gcm(key, iv, encrypted);
}
/**
 * Decrypt 1 to N message that send by other
 */ async function decryptMessage1ToNByOther(info) {
    const { encryptedContent , privateKeyECDH , authorsPublicKeyECDH , iv  } = info;
    const AESKeyEncrypted = Array.isArray(info.AESKeyEncrypted) ? info.AESKeyEncrypted : [
        info.AESKeyEncrypted
    ];
    let resolvedAESKey = null;
    await Promise.all(AESKeyEncrypted.map(async (key)=>{
        try {
            const result = await decryptMessage1To1({
                version: -40,
                salt: key.salt,
                encryptedContent: key.encryptedKey,
                anotherPublicKeyECDH: authorsPublicKeyECDH,
                privateKeyECDH: privateKeyECDH
            });
            resolvedAESKey = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(result);
        } catch  {
        }
    }));
    if (resolvedAESKey === null) throw new Error(_utils_i18n_next__WEBPACK_IMPORTED_MODULE_3__/* .i18n.t */ .a.t('service_not_share_target'));
    const aesKey = JSON.parse(resolvedAESKey);
    return [
        await decryptWithAES({
            aesKey,
            iv,
            encrypted: encryptedContent
        }),
        aesKey
    ];
}
async function extractAESKeyInMessage(version, encodedEncryptedKey, _iv, myLocalKey) {
    const iv = typeof _iv === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(_iv) : _iv;
    const encryptedKey = typeof encodedEncryptedKey === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(encodedEncryptedKey) : encodedEncryptedKey;
    const decryptedAESKeyJWK = JSON.parse((0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(await decryptWithAES({
        aesKey: myLocalKey,
        iv,
        encrypted: encryptedKey
    })));
    return decryptedAESKeyJWK;
}
/**
 * Decrypt 1 to N message that send by myself
 */ async function decryptMessage1ToNByMyself(info) {
    const { encryptedContent , myLocalKey , iv , encryptedAESKey  } = info;
    const decryptedAESKey = await extractAESKeyInMessage(-40, encryptedAESKey, iv, myLocalKey);
    const post = await decryptWithAES({
        aesKey: decryptedAESKey,
        encrypted: encryptedContent,
        iv
    });
    return [
        post,
        decryptedAESKey
    ];
}
/**
 * Decrypt the content encrypted by AES
 */ async function decryptWithAES(info) {
    const { aesKey  } = info;
    const iv = typeof info.iv === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(info.iv) : info.iv;
    const encrypted = typeof info.encrypted === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(info.encrypted) : info.encrypted;
    return _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.decrypt_aes_gcm */ .i.decrypt_aes_gcm(aesKey, iv, encrypted);
}
async function encryptWithAES(info) {
    const iv = info.iv ? info.iv : crypto.getRandomValues(new Uint8Array(16));
    const content = typeof info.content === 'string' ? (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(info.content) : info.content;
    const encrypted = await _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(info.aesKey, iv, content);
    return {
        content: encrypted,
        iv
    };
}
//#endregion
//#region Comment
function extractCommentPayload(text) {
    const [_, toEnd] = text.split('🎶2/4|');
    const [content, _2] = (toEnd || '').split(':||');
    if (content.length) return content;
    return;
}
const getCommentKey = (0,_utils_memoize__WEBPACK_IMPORTED_MODULE_1__/* .memoizePromise */ .J)(async function(postIV, postContent) {
    const pbkdf = await _modules_workers__WEBPACK_IMPORTED_MODULE_4__/* .CryptoWorker.import_pbkdf2 */ .i.import_pbkdf2((0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(postContent));
    const aes = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__/* .derive_AES_GCM_256_Key_From_PBKDF2 */ .SW)(pbkdf, (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(postIV));
    return aes;
}, (a, b)=>a + b
);
// * Payload format: 🎶2/4|encrypted_comment:||
async function encryptComment(postIV, postContent, comment) {
    if (typeof postIV !== 'string') postIV = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(postIV);
    if (typeof postContent !== 'string') postContent = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(postContent);
    const key = await getCommentKey(postIV, postContent);
    const x = await encryptWithAES({
        content: comment,
        aesKey: key,
        iv: (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(postIV)
    });
    return `🎶2/4|${(0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(x.content)}:||`;
}
async function decryptComment(postIV, postContent, encryptComment1) {
    if (typeof postIV !== 'string') postIV = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(postIV);
    if (typeof postContent !== 'string') postContent = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(postContent);
    if (typeof encryptComment1 !== 'string') encryptComment1 = (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(encryptComment1);
    const payload = extractCommentPayload(encryptComment1);
    if (!payload) return null;
    const key = await getCommentKey(postIV, postContent);
    try {
        const x = await decryptWithAES({
            aesKey: key,
            iv: (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(postIV),
            encrypted: payload
        });
        return (0,_utils_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(x);
    } catch  {
        return null;
    }
}
//#endregion
function typedMessageStringify(x) {
    throw new Error('Not supported typed message in version older than v39.');
}
function typedMessageParse(x) {
    return (0,_protocols_typed_message__WEBPACK_IMPORTED_MODULE_2__/* .makeTypedMessageText */ .P)(x);
}


/***/ }),

/***/ 92850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lw": () => (/* reexport safe */ _helpers_avatar__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   "Zk": () => (/* reexport safe */ _helpers_avatar__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "w0": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.w0),
/* harmony export */   "A8": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.A8),
/* harmony export */   "c9": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.c9),
/* harmony export */   "lr": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.lr),
/* harmony export */   "FB": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.FB),
/* harmony export */   "m3": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.m3),
/* harmony export */   "DM": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.DM),
/* harmony export */   "pR": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.pR),
/* harmony export */   "Ye": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.Ye),
/* harmony export */   "yQ": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.yQ),
/* harmony export */   "wb": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.wb),
/* harmony export */   "JL": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.JL),
/* harmony export */   "V6": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.V6),
/* harmony export */   "X8": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.X8),
/* harmony export */   "M_": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.M_),
/* harmony export */   "rR": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.rR),
/* harmony export */   "gn": () => (/* reexport safe */ _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__.gn)
/* harmony export */ });
/* harmony import */ var _helpers_avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9142);
/* harmony import */ var _Persona_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92054);
/* harmony import */ var _Plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70682);






/***/ }),

/***/ 75724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ createPostDB),
/* harmony export */   "rr": () => (/* binding */ updatePostDB),
/* harmony export */   "Wt": () => (/* binding */ createOrUpdatePostDB),
/* harmony export */   "q3": () => (/* binding */ queryPostDB),
/* harmony export */   "hZ": () => (/* binding */ queryPostsDB)
/* harmony export */ });
/* unused harmony exports PostDBAccess, deletePostCryptoKeyDB */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79930);
/* harmony import */ var _utils_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22271);
/* harmony import */ var _IdentifierMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10288);
/* harmony import */ var _helpers_openDB__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77046);
/* harmony import */ var _utils_type_transform_CryptoKey_JsonWebKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24784);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28532);
/// <reference path="./global.d.ts" />







const db1 = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_5__/* .createDBAccessWithAsyncUpgrade */ .Ns)(4, 5, (currentTryOpen, knowledge)=>{
    return (0,idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_1__.openDB)('maskbook-post-v2', currentTryOpen, {
        async upgrade (db, oldVersion, _newVersion, transaction) {
            /**
                 * A type assert that make sure a and b are the same type
                 * @param a The latest version PostRecord
                 */ function _assert(a, b) {
                a = b;
                b = a;
            }
            // Prevent unused code removal
            if (false) {}
            if (oldVersion < 1) {
                // inline keys
                return void db.createObjectStore('post', {
                    keyPath: 'identifier'
                });
            }
            /**
                 * In the version 1 we use PostIdentifier to store post that identified by post iv
                 * After upgrade to version 2, we use PostIVIdentifier to store it.
                 * So we transform all old data into new data.
                 */ if (oldVersion <= 1) {
                const store = transaction.objectStore('post');
                const old = await store.getAll();
                await store.clear();
                for (const each of old){
                    const id = _type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(each.identifier, _type__WEBPACK_IMPORTED_MODULE_0__/* .PostIdentifier */ ._P);
                    if (id.ok) {
                        const { postId , identifier  } = id.val;
                        each.identifier = new _type__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb(identifier.network, postId).toText();
                        await store.add(each);
                    }
                }
            }
            /**
                 * In the version 2 we use `recipients?: ProfileIdentifier[]`
                 * After upgrade to version 3, we use `recipients: Record<string, RecipientDetail>`
                 */ if (oldVersion <= 2) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v2record = cursor.value;
                    const oldType = v2record.recipients;
                    oldType && (0,_utils_type__WEBPACK_IMPORTED_MODULE_6__/* .restorePrototypeArray */ .Y)(oldType, _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.prototype */ .WO.prototype);
                    const newType = {
                    };
                    if (oldType !== undefined) for (const each of oldType){
                        newType[each.toText()] = {
                            reason: [
                                {
                                    type: 'direct',
                                    at: new Date(0)
                                }
                            ]
                        };
                    }
                    const next = {
                        ...v2record,
                        recipients: newType,
                        postBy: _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.unknown */ .WO.unknown,
                        foundAt: new Date(0),
                        recipientGroups: []
                    };
                    await cursor.update(next);
                }
            }
            /**
                 * In the version 3 we use `recipients?: Record<string, RecipientDetail>`
                 * After upgrade to version 4, we use `recipients: IdentifierMap<ProfileIdentifier, RecipientDetail>`
                 */ if (oldVersion <= 3) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v3Record = cursor.value;
                    const newType = new Map();
                    for (const [key, value] of Object.entries(v3Record.recipients)){
                        newType.set(key, value);
                    }
                    const v4Record = {
                        ...v3Record,
                        recipients: newType
                    };
                    await cursor.update(v4Record);
                }
            }
            /**
                 * In version 4 we use CryptoKey, in version 5 we use JsonWebKey
                 */ if (oldVersion <= 4) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v4Record = cursor.value;
                    const data = knowledge === null || knowledge === void 0 ? void 0 : knowledge.data;
                    if (!v4Record.postCryptoKey) continue;
                    const v5Record = {
                        ...v4Record,
                        postCryptoKey: data.get(v4Record.identifier)
                    };
                    if (!v5Record.postCryptoKey) delete v5Record.postCryptoKey;
                    await cursor.update(v5Record);
                }
            }
        }
    });
}, async (db2)=>{
    if (db2.version === 4) {
        const map = new Map();
        const knowledge = {
            version: 4,
            data: map
        };
        const records = await (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_5__/* .createTransaction */ ._X)(db2, 'readonly')('post').objectStore('post').getAll();
        for (const r of records){
            const x = r.postCryptoKey;
            if (!x) continue;
            try {
                const key = await (0,_utils_type_transform_CryptoKey_JsonWebKey__WEBPACK_IMPORTED_MODULE_3__/* .CryptoKeyToJsonWebKey */ .iV)(x);
                map.set(r.identifier, key);
            } catch  {
                continue;
            }
        }
        return knowledge;
    }
    return undefined;
});
const PostDBAccess = (/* unused pure expression or super */ null && (db1));
async function createPostDB(record, t) {
    t = t || (await db1()).transaction('post', 'readwrite');
    const toSave = postToDB(record);
    await t.objectStore('post').add(toSave);
}
async function updatePostDB(updateRecord, mode, t) {
    t = t || (await db1()).transaction('post', 'readwrite');
    const emptyRecord = {
        identifier: updateRecord.identifier,
        recipients: new _IdentifierMap__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .q(new Map()),
        postBy: _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.unknown */ .WO.unknown,
        foundAt: new Date()
    };
    const currentRecord = await queryPostDB(updateRecord.identifier, t) || emptyRecord;
    const nextRecord = {
        ...currentRecord,
        ...updateRecord
    };
    const nextRecipients = mode === 'override' ? postToDB(nextRecord).recipients : postToDB(currentRecord).recipients;
    if (mode === 'append') {
        if (updateRecord.recipients) {
            if (typeof updateRecord.recipients === 'object' && typeof nextRecipients === 'object') {
                for (const [id, patchDetail] of updateRecord.recipients){
                    const idText = id.toText();
                    if (nextRecipients.has(idText)) {
                        const { reason , ...rest } = patchDetail;
                        const nextDetail = nextRecipients.get(idText);
                        Object.assign(nextDetail, rest);
                        nextDetail.reason = [
                            ...nextDetail.reason,
                            ...patchDetail.reason
                        ];
                    } else {
                        nextRecipients.set(idText, patchDetail);
                    }
                }
            } else {
                nextRecord.recipients = 'everyone';
            }
        }
    }
    const nextRecordInDBType = postToDB(nextRecord);
    await t.objectStore('post').put(nextRecordInDBType);
}
async function createOrUpdatePostDB(record, mode, t) {
    t = t || (await db1()).transaction('post', 'readwrite');
    if (await t.objectStore('post').get(record.identifier.toText())) return updatePostDB(record, mode, t);
    else return createPostDB(record, t);
}
async function queryPostDB(record, t) {
    t = t || (await db1()).transaction('post');
    const result = await t.objectStore('post').get(record.toText());
    if (result) return postOutDB(result);
    return null;
}
async function queryPostsDB(query, t) {
    t = t || (await db1()).transaction('post');
    const selected = [];
    for await (const { value  } of t.store){
        const idResult = _type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(value.identifier, _type__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb);
        if (idResult.err) {
            console.warn(idResult.val.message);
            continue;
        }
        const id = idResult.val;
        if (typeof query === 'string') {
            if (id.network === query) selected.push(postOutDB(value));
        } else {
            const v = postOutDB(value);
            if (query(v, id)) selected.push(v);
        }
    }
    return selected;
}
async function deletePostCryptoKeyDB(record, t) {
    t = t || (await db1()).transaction('post', 'readwrite');
    await t.objectStore('post').delete(record.toText());
}
//#region db in and out
function postOutDB(db2) {
    const { identifier , foundAt , postBy , recipients , postCryptoKey , encryptBy , interestedMeta , summary , url  } = db2;
    if (typeof recipients === 'object') {
        for (const detail of recipients.values()){
            detail.reason.forEach((x)=>x.type === 'group' && (0,_utils_type__WEBPACK_IMPORTED_MODULE_6__/* .restorePrototype */ .m)(x.group, _type__WEBPACK_IMPORTED_MODULE_0__/* .GroupIdentifier.prototype */ .xI.prototype)
            );
        }
    }
    return {
        identifier: _type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(identifier, _type__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb).unwrap(),
        postBy: (0,_utils_type__WEBPACK_IMPORTED_MODULE_6__/* .restorePrototype */ .m)(postBy, _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.prototype */ .WO.prototype),
        recipients: recipients === true ? 'everyone' : new _IdentifierMap__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .q(recipients, _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        foundAt: foundAt,
        postCryptoKey: postCryptoKey,
        encryptBy: (0,_utils_type__WEBPACK_IMPORTED_MODULE_6__/* .restorePrototype */ .m)(encryptBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .ECKeyIdentifier.prototype */ .ob.prototype),
        interestedMeta,
        summary,
        url
    };
}
function postToDB(out) {
    return {
        ...out,
        identifier: out.identifier.toText(),
        recipients: out.recipients === 'everyone' ? true : out.recipients.__raw_map__
    };
}


/***/ }),

/***/ 6237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "appendShareTarget": () => (/* reexport */ appendShareTarget),
  "debugShowAllPossibleHashForPost": () => (/* binding */ debugShowAllPossibleHashForPost),
  "decryptBackup": () => (/* reexport */ crypto_alpha_38.decryptBackup),
  "decryptComment": () => (/* reexport */ crypto_alpha_40.decryptComment),
  "encryptBackup": () => (/* reexport */ crypto_alpha_38.encryptBackup),
  "encryptComment": () => (/* reexport */ crypto_alpha_40.encryptComment),
  "encryptTo": () => (/* reexport */ encryptTo),
  "getEncryptBackupInfo": () => (/* reexport */ getEncryptBackupInfo),
  "getMyProveBio": () => (/* reexport */ getMyProveBio),
  "getSharedListOfPost": () => (/* reexport */ getSharedListOfPost),
  "publishPostAESKey": () => (/* reexport */ publishPostAESKey),
  "verifyOthersProve": () => (/* reexport */ verifyOthersProve/* verifyOthersProve */.f)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/crypto/crypto-alpha-40.ts
var crypto_alpha_40 = __webpack_require__(15120);
// EXTERNAL MODULE: ./src/crypto/crypto-alpha-38.ts
var crypto_alpha_38 = __webpack_require__(74326);
// EXTERNAL MODULE: ./src/network/gun/index.ts
var gun = __webpack_require__(78290);
// EXTERNAL MODULE: ./src/utils/type-transform/String-ArrayBuffer.ts
var String_ArrayBuffer = __webpack_require__(28504);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(5743);
// EXTERNAL MODULE: ./src/database/index.ts
var database = __webpack_require__(92850);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ./src/database/IdentifierMap.ts
var IdentifierMap = __webpack_require__(10288);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/prepareRecipientDetail.ts



async function prepareRecipientDetail(to) {
    const recipients = new IdentifierMap/* IdentifierMap */.q(new Map(), type/* ProfileIdentifier */.WO);
    const keys = new IdentifierMap/* IdentifierMap */.q(new Map(), type/* ProfileIdentifier */.WO);
    await Promise.all(to.map(async function self(who, _, __, detail = {
        at: new Date(),
        type: 'direct'
    }) {
        const pub = await (0,database/* queryPublicKey */.M_)(who);
        if (pub) keys.set(who, pub);
        append(who, detail);
    }));
    function append(who, reason) {
        if (!recipients.has(who)) recipients.set(who, {
            reason: []
        });
        recipients.get(who).reason.push(reason);
    }
    return [
        recipients,
        keys
    ];
}

// EXTERNAL MODULE: ./src/social-network/worker.ts
var social_network_worker = __webpack_require__(56839);
// EXTERNAL MODULE: ./src/database/post.ts
var post = __webpack_require__(75724);
// EXTERNAL MODULE: ./src/database/Persona/Persona.db.ts + 1 modules
var Persona_db = __webpack_require__(88628);
// EXTERNAL MODULE: ./src/utils/type-transform/SECP256k1-Compression.ts
var SECP256k1_Compression = __webpack_require__(58222);
// EXTERNAL MODULE: ./src/utils/i18n-next.ts + 1 modules
var i18n_next = __webpack_require__(93002);
// EXTERNAL MODULE: ./src/protocols/typed-message/index.ts + 3 modules
var typed_message = __webpack_require__(65570);
// EXTERNAL MODULE: ./src/social-network/utils/text-payload-worker.ts
var text_payload_worker = __webpack_require__(12724);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/encryptTo.ts















/**
 * This map stores <iv, [networkHint, othersAESKeyEncrypted]>.
 */ const OthersAESKeyEncryptedMap = new Map();
/**
 * Encrypt to a user
 * @param content       Original text
 * @param to            Encrypt target
 * @param whoAmI        Encrypt source
 * @returns Will return a tuple of [encrypted: string, token: string] where
 * - `encrypted` is the encrypted string
 * - `token` is used to call `publishPostAESKey` before post the content
 */ async function encryptTo(content, to, whoAmI, publicShared) {
    var ref;
    if (publicShared) to = [];
    const [recipients, toKey] = await prepareRecipientDetail(to);
    const usingPersona = await (0,database/* queryProfile */.JL)(whoAmI);
    const minePrivateKey = await (0,database/* queryPrivateKey */.wb)(whoAmI);
    if (!minePrivateKey) throw new TypeError('Not inited yet');
    const stringifiedContent = crypto_alpha_38.typedMessageStringify(content);
    const localKey = publicShared ? crypto_alpha_38.publicSharedAESKey : await (0,database/* queryLocalKey */.DM)(whoAmI);
    const { encryptedContent: encryptedText , othersAESKeyEncrypted , ownersAESKeyEncrypted , iv , postAESKey ,  } = await crypto_alpha_38.encrypt1ToN({
        version: -38,
        content: stringifiedContent,
        othersPublicKeyECDH: Array.from(toKey.values()),
        ownersLocalKey: localKey,
        privateKeyECDH: minePrivateKey,
        iv: crypto.getRandomValues(new Uint8Array(16))
    });
    const payload = {
        AESKeyEncrypted: (0,String_ArrayBuffer/* encodeArrayBuffer */.ll)(ownersAESKeyEncrypted),
        encryptedText: (0,String_ArrayBuffer/* encodeArrayBuffer */.ll)(encryptedText),
        iv: (0,String_ArrayBuffer/* encodeArrayBuffer */.ll)(iv),
        signature: '',
        sharedPublic: publicShared,
        version: -38,
        authorUserID: whoAmI
    };
    try {
        var ref1;
        const publicKey = (ref1 = await (0,Persona_db/* queryPersonaByProfileDB */.fl)(whoAmI)) === null || ref1 === void 0 ? void 0 : ref1.publicKey;
        if (publicKey) payload.authorPublicKey = (0,SECP256k1_Compression/* compressSecp256k1Key */.N)(publicKey, 'public');
    } catch  {
    // ignore
    }
    payload.signature = '_';
    const newPostRecord = {
        identifier: new type/* PostIVIdentifier */.bb(whoAmI.network, payload.iv),
        postBy: whoAmI,
        postCryptoKey: postAESKey,
        recipients: publicShared ? 'everyone' : recipients,
        foundAt: new Date(),
        encryptBy: (ref = usingPersona.linkedPersona) === null || ref === void 0 ? void 0 : ref.identifier
    };
    if (utils/* Flags.v2_enabled */.vU.v2_enabled) {
        if ((0,typed_message/* isTypedMessageText */.Rz)(content)) {
            newPostRecord.summary = getSummary(content);
            newPostRecord.interestedMeta = content.meta;
        }
    }
    await (0,post/* createPostDB */.$v)(newPostRecord);
    const postAESKeyToken = (0,String_ArrayBuffer/* encodeArrayBuffer */.ll)(iv);
    const worker = await (0,social_network_worker/* getNetworkWorker */.C8)(whoAmI);
    OthersAESKeyEncryptedMap.set(postAESKeyToken, [
        worker.gunNetworkHint,
        othersAESKeyEncrypted
    ]);
    return [
        (0,Payload/* constructAlpha38 */.R)(payload, await (0,text_payload_worker/* encodeTextPayloadWorker */.QO)(whoAmI)),
        postAESKeyToken
    ];
}
/**
 * MUST call before send post, or othersAESKeyEncrypted will not be published to the internet!
 * TODO: If we can use PostIVIdentifier to avoid this hacking way to publish PostAESKey?
 * @param iv Token that returns in the encryptTo
 */ async function publishPostAESKey(iv) {
    const info = OthersAESKeyEncryptedMap.get(iv);
    if (!info) throw new Error(i18n_next/* i18n.t */.a.t('service_publish_post_aes_key_failed'));
    if (!info[1].length) return;
    // Use the latest payload version here since we do not accept new post for older version.
    return gun/* GunAPI.publishPostAESKeyOnGun2 */.Oo.publishPostAESKeyOnGun2(-38, iv, ...info);
}
function getSummary(content) {
    let result = '';
    // UTF-8 aware summary
    if (Intl.Segmenter) {
        // it seems like using "en" can also split the word correctly.
        const seg = new Intl.Segmenter('en');
        for (const word of seg.segment(content.content)){
            if (result.length >= 20) break;
            result += word.segment;
        }
    } else {
        result = result.slice(0, 20);
    }
    return result;
}

// EXTERNAL MODULE: ./src/crypto/crypto-alpha-39.ts
var crypto_alpha_39 = __webpack_require__(49387);
// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/cryptoProviderTable.ts
var cryptoProviderTable = __webpack_require__(75803);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/appendShareTarget.ts









async function appendShareTarget(version, postAESKey, iv, people, whoAmI, reason) {
    const cryptoProvider = cryptoProviderTable/* cryptoProviderTable */.U[version];
    if (typeof postAESKey === 'string') {
        const AESKey = await cryptoProvider.extractAESKeyInMessage(version, postAESKey, iv, await (0,database/* queryLocalKey */.DM)(whoAmI));
        return appendShareTarget(version, AESKey, iv, people, whoAmI, reason);
    }
    const myPrivateKey = await (0,database/* queryPrivateKey */.wb)(whoAmI);
    if (version === -39 || version === -38) {
        var ref;
        const [, toKey] = await prepareRecipientDetail(people);
        const othersAESKeyEncrypted = await crypto_alpha_39.generateOthersAESKeyEncrypted(version, postAESKey, myPrivateKey, Array.from(toKey.values()));
        const gunHint = (ref = (0,social_network_worker/* getNetworkWorkerUninitialized */.Bu)(whoAmI)) === null || ref === void 0 ? void 0 : ref.gunNetworkHint;
        gunHint && gun/* GunAPI.publishPostAESKeyOnGun2 */.Oo.publishPostAESKeyOnGun2(version, iv, gunHint, othersAESKeyEncrypted);
        (0,post/* updatePostDB */.rr)({
            identifier: new type/* PostIVIdentifier */.bb(whoAmI.network, iv),
            recipients: new IdentifierMap/* IdentifierMap */.q(new Map(people.map((identifier)=>[
                    identifier.toText(),
                    {
                        reason: [
                            reason
                        ],
                        published: toKey.has(identifier)
                    }, 
                ]
            )), type/* ProfileIdentifier */.WO)
        }, 'append');
    } else if (version === -40) {
        throw new TypeError('Version -40 cannot create new data anymore due to leaking risks.');
    }
}

;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/getSharedListOfPost.ts




//#endregion
//#region Append Recipients in future
/**
 * Get already shared target of the post
 * @param postSalt
 */ async function getSharedListOfPost(version, postSalt, postBy) {
    var ref;
    const ids = new Set();
    const nameInDB = (ref = await (0,post/* queryPostDB */.q3)(new type/* PostIVIdentifier */.bb(postBy.network, postSalt))) === null || ref === void 0 ? void 0 : ref.recipients;
    if (nameInDB === 'everyone') return [];
    if (!nameInDB) return [];
    nameInDB.forEach((_, x)=>ids.add(x.toText())
    );
    if (version === -40) {
        // eslint-disable-next-line import/no-deprecated
        const post = await gun/* GunAPI.getVersion1PostByHash */.Oo.getVersion1PostByHash(postSalt);
        if (!post) return [];
        delete post._;
        const nameInGun = Object.keys(post);
        // ? version 40 is for old facebook only
        nameInGun.forEach((x)=>ids.add(new type/* ProfileIdentifier */.WO('facebook.com', x).toText())
        );
    }
    return Promise.all(Array.from(ids).map((x)=>type/* Identifier.fromString */.xb.fromString(x, type/* ProfileIdentifier */.WO)
    ).filter((x)=>x.ok
    ).map((x)=>x.val
    ).map(database/* queryProfile */.JL));
}

// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/verifyOthersProve.ts
var verifyOthersProve = __webpack_require__(19384);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/getMyProveBio.ts




async function getMyProveBio(whoAmI, networkIdentifier) {
    const myIdentity = await (0,database/* queryPublicKey */.M_)(whoAmI);
    if (!myIdentity) return null;
    const compressed = (0,SECP256k1_Compression/* compressSecp256k1Key */.N)(myIdentity, 'public');
    return whoAmI instanceof type/* ProfileIdentifier */.WO ? (await (0,text_payload_worker/* encodePublicKeyWorker */.CS)(whoAmI))(compressed) : networkIdentifier ? (await (0,text_payload_worker/* encodePublicKeyWorker */.CS)(networkIdentifier))(compressed) : compressed;
}

// EXTERNAL MODULE: ./src/extension/background-script/WelcomeService.ts + 1 modules
var WelcomeService = __webpack_require__(94769);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/backup.ts


const getEncryptBackupInfo = async (password, account)=>{
    const backupFileInfoJson = await (0,WelcomeService.createBackupFile)({
        download: false,
        onlyBackupWhoAmI: false
    });
    return (0,crypto_alpha_38.encryptBackup)(password, account, JSON.stringify(backupFileInfoJson));
};

;// CONCATENATED MODULE: ./src/extension/background-script/CryptoService.ts

(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);








// This module requires lazy loading otherwise it will load gun
async function debugShowAllPossibleHashForPost(...args) {
    return (await Promise.all(/* import() */[__webpack_require__.e(4462), __webpack_require__.e(4477), __webpack_require__.e(5482)]).then(__webpack_require__.bind(__webpack_require__, 62041))).debugShowAllPossibleHashForPost(...args);
}


/***/ }),

/***/ 75803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ cryptoProviderTable)
/* harmony export */ });
/* harmony import */ var _crypto_crypto_alpha_38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74326);
/* harmony import */ var _crypto_crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49387);
/* harmony import */ var _crypto_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15120);



const cryptoProviderTable = {
    [-40]: _crypto_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_2__,
    [-39]: _crypto_crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__,
    [-38]: _crypto_crypto_alpha_38__WEBPACK_IMPORTED_MODULE_0__
};


/***/ }),

/***/ 19384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ verifyOthersProve)
/* harmony export */ });
/* harmony import */ var _utils_type_transform_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58222);
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29573);
/* harmony import */ var _social_network_utils_text_payload_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12724);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92850);




async function verifyOthersProve(bio, others) {
    var ref, ref1;
    const compressedX = typeof bio === 'string' ? (await (0,_social_network_utils_text_payload_worker__WEBPACK_IMPORTED_MODULE_2__/* .decodePublicKeyWorker */ .IC)(others.network))(bio) : [
        bio.raw
    ];
    if (!compressedX) return false;
    const publicKey = compressedX.map((x)=>{
        try {
            return (0,_utils_type_transform_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_0__/* .decompressSecp256k1Key */ .q)(x, 'public');
        } catch  {
            return null;
        }
    }).filter((x)=>x
    )[0];
    if (!publicKey) return false;
    // TODO: use json schema / other ways to verify the JWK
    // or
    // throw new Error(i18n.t('service_key_parse_failed'))
    // if privateKey, we should possibly not recreate it
    const hasPrivate = ((ref = await (0,_database__WEBPACK_IMPORTED_MODULE_3__/* .queryPersonaRecord */ .yQ)((0,_database_type__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(publicKey))) === null || ref === void 0 ? void 0 : ref.privateKey) || ((ref1 = await (0,_database__WEBPACK_IMPORTED_MODULE_3__/* .queryPersonaRecord */ .yQ)(others)) === null || ref1 === void 0 ? void 0 : ref1.privateKey);
    if (!hasPrivate) await (0,_database__WEBPACK_IMPORTED_MODULE_3__/* .createProfileWithPersona */ .lr)(others, {
        connectionConfirmState: 'pending'
    }, {
        publicKey
    });
    // TODO: unhandled case: if the profile is connected but a different key.
    return true;
}


/***/ }),

/***/ 94769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "checkPermissionsAndRestore": () => (/* binding */ checkPermissionsAndRestore),
  "confirmBackup": () => (/* reexport */ restoreBackup/* confirmBackup */.DV),
  "createBackupFile": () => (/* binding */ createBackupFile),
  "createBackupUrl": () => (/* binding */ createBackupUrl),
  "createPersonaByMnemonic": () => (/* reexport */ database/* createPersonaByMnemonic */.A8),
  "downloadBackup": () => (/* binding */ downloadBackup),
  "generateBackupJSON": () => (/* reexport */ generateBackupJSON),
  "generateBackupPreviewInfo": () => (/* reexport */ generateBackupPreviewInfo),
  "getUnconfirmedBackup": () => (/* reexport */ restoreBackup/* getUnconfirmedBackup */.Kz),
  "openOptionsPage": () => (/* binding */ openOptionsPage),
  "parseBackupStr": () => (/* binding */ parseBackupStr),
  "queryPermission": () => (/* binding */ queryPermission),
  "restoreBackup": () => (/* reexport */ restoreBackup/* restoreBackup */.pi),
  "restoreNewIdentityWithMnemonicWord": () => (/* binding */ restoreNewIdentityWithMnemonicWord),
  "setUnconfirmedBackup": () => (/* reexport */ restoreBackup/* setUnconfirmedBackup */.cg)
});

// EXTERNAL MODULE: ./src/utils/type-transform/String-ArrayBuffer.ts
var String_ArrayBuffer = __webpack_require__(28504);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(96578);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(53505);
// EXTERNAL MODULE: ./src/database/index.ts
var database = __webpack_require__(92850);
// EXTERNAL MODULE: ./src/database/Persona/Persona.db.ts + 1 modules
var Persona_db = __webpack_require__(88628);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/localKeyGenerate.ts
var localKeyGenerate = __webpack_require__(63329);
// EXTERNAL MODULE: ../web3-shared/src/index.ts
var src = __webpack_require__(6615);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts + 2 modules
var latest = __webpack_require__(70020);
// EXTERNAL MODULE: ./src/database/post.ts
var post = __webpack_require__(75724);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PersonaRecord.ts
var PersonaRecord = __webpack_require__(51898);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/ProfileRecord.ts
var ProfileRecord = __webpack_require__(50248);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PostRecord.ts
var PostRecord = __webpack_require__(42526);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 22 modules
var services = __webpack_require__(19657);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/WalletRecord.ts
var WalletRecord = __webpack_require__(44681);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(66751);
// EXTERNAL MODULE: ../shared/src/index.ts
var shared_src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/extension/background-script/WelcomeServices/generateBackupJSON.ts












async function generateBackupJSON(opts = {
}) {
    const personas = [];
    const posts = [];
    const wallets = [];
    const profiles = [];
    const plugins = {
    };
    if (!opts.filter) {
        if (!opts.noPersonas) await backupPersonas();
        if (!opts.noProfiles) await backProfiles();
    } else if (opts.filter.type === 'persona') {
        if (opts.noPersonas) throw new TypeError('Invalid opts');
        await backupPersonas(opts.filter.wanted);
        const wantedProfiles = personas.flatMap((q)=>q.linkedProfiles.map((y)=>type/* Identifier.fromString */.xb.fromString(y[0], type/* ProfileIdentifier */.WO)
            ).filter((k)=>k.ok
            ).map((x)=>x.val
            )
        );
        if (!opts.noProfiles) await backProfiles(wantedProfiles);
    }
    if (!opts.noPosts) await backupAllPosts();
    if (!opts.noWallets) await backupAllWallets();
    if (!opts.noPlugins) await backupAllPlugins();
    const file = {
        _meta_: {
            createdAt: Date.now(),
            maskbookVersion: browser.runtime.getManifest().version,
            version: 2,
            type: 'maskbook-backup'
        },
        grantedHostPermissions: (await browser.permissions.getAll()).origins || [],
        personas,
        posts,
        wallets,
        profiles,
        userGroups: []
    };
    if (Object.keys(plugins).length) file.plugin = plugins;
    return file;
    async function backupAllPosts() {
        posts.push(...(await (0,post/* queryPostsDB */.hZ)(()=>true
        )).map(PostRecord/* PostRecordToJSONFormat */.k));
    }
    async function backProfiles(of) {
        const data = (await (0,Persona_db/* queryProfilesDB */.i2)((p)=>{
            if (of === undefined) return true;
            if (!of.some((x)=>x.equals(p.identifier)
            )) return false;
            if (!p.linkedPersona) return false;
            return true;
        })).map(ProfileRecord/* ProfileRecordToJSONFormat */.P);
        profiles.push(...data);
    }
    async function backupPersonas(of) {
        const data = (await (0,Persona_db/* queryPersonasDB */._P)((p)=>{
            if (p.uninitialized) return false;
            if (opts.hasPrivateKeyOnly && !p.privateKey) return false;
            if (of === undefined) return true;
            if (!of.some((x)=>x.equals(p.identifier)
            )) return false;
            return true;
        })).map(PersonaRecord/* PersonaRecordToJSONFormat */.O);
        personas.push(...data);
    }
    async function backupAllWallets() {
        const wallets_ = (await (0,services.getWallets)(src/* ProviderType.Maskbook */.lP_.Maskbook)).map(WalletRecord/* WalletRecordToJSONFormat */.d);
        wallets.push(...wallets_);
    }
    async function backupAllPlugins() {
        await Promise.all([
            ...plugin_infra_src/* activatedPluginsWorker */.Je
        ]// generate backup
        .map(async (plugin)=>{
            var ref;
            const backupCreator = (ref = plugin.backup) === null || ref === void 0 ? void 0 : ref.onBackup;
            if (!backupCreator) return;
            async function backupPlugin() {
                const result = await (0,shared_src.timeout)(backupCreator(), 3000);
                if (result.none) return;
                // We limit the plugin contributed backups must be simple objects.
                // We may allow plugin to store binary if we're moving to binary backup format like messagepack.
                plugins[plugin.ID] = result.map(JSON.stringify).map(JSON.parse).val;
            }
            if (false) {}
            return backupPlugin().catch((error)=>console.error(`[@masknet/plugin-infra] Plugin ${plugin.ID} failed to backup`, error)
            );
        }));
    }
}
async function generateBackupPreviewInfo(opts = {
}) {
    const json = await generateBackupJSON(opts);
    return (0,latest/* getBackupPreviewInfo */.V)(json);
}

// EXTERNAL MODULE: ./src/extension/background-script/HelperService/index.ts
var HelperService = __webpack_require__(81951);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/utils/index.ts
var src_utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 4 modules
var v4 = __webpack_require__(90335);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(37647);
;// CONCATENATED MODULE: ./src/extension/background-script/WelcomeService.ts















(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
/**
 * Recover new identity by a password and mnemonic words
 *
 * @param password password used to generate mnemonic word, can be empty string
 * @param word mnemonic words
 * @param info additional information
 */ async function restoreNewIdentityWithMnemonicWord(word, password, info) {
    const { key , mnemonicRecord  } = await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(word, password);
    const { privateKey , publicKey  } = key;
    const localKeyJwk = await (0,localKeyGenerate/* deriveLocalKeyFromECDHKey */.i)(publicKey, mnemonicRecord.words);
    const ecKeyID = await (0,database/* createPersonaByJsonWebKey */.w0)({
        publicKey,
        privateKey,
        localKey: info.localKey || localKeyJwk,
        mnemonic: mnemonicRecord,
        nickname: info.nickname
    });
    if (info.whoAmI) {
        await (0,Persona_db/* attachProfileDB */.tc)(info.whoAmI, ecKeyID, info.details || {
            connectionConfirmState: 'pending'
        });
    }
    return ecKeyID;
}
async function downloadBackup(obj, type) {
    const { buffer , mimeType , fileName  } = await createBackupInfo(obj, type);
    (0,HelperService.saveAsFileFromBuffer)(buffer, mimeType, fileName);
    return obj;
}
async function createBackupFile(options) {
    const obj = await generateBackupJSON(options);
    if (!options.download) return obj;
    // Don't make the download pop so fast
    await (0,utils/* delay */.gw)(1000);
    return downloadBackup(obj);
}
async function createBackupUrl(options) {
    const obj = await generateBackupJSON(options);
    const { buffer , mimeType , fileName  } = await createBackupInfo(obj);
    const blob = new Blob([
        buffer
    ], {
        type: mimeType
    });
    const url = URL.createObjectURL(blob);
    return {
        url,
        fileName
    };
}
async function createBackupInfo(obj, type) {
    const string = typeof obj === 'string' ? obj : JSON.stringify(obj);
    const buffer = (0,String_ArrayBuffer/* encodeText */.YT)(string);
    const date = new Date();
    const today = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
    const fileName = `maskbook-keystore-backup-${today}.${type !== null && type !== void 0 ? type : 'json'}`;
    const mimeType = type === 'txt' ? 'text/plain' : 'application/json';
    return {
        buffer,
        mimeType,
        fileName
    };
}
async function openOptionsPage(route, search) {
    return browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(route ? `/index.html#${route}${search ? `?${search}` : ''}` : '/index.html')
    });
}

function parseBackupStr(str) {
    const json = (0,latest/* UpgradeBackupJSONFile */.a)((0,src_utils/* decompressBackupFile */.PN)(str));
    if (json) {
        const info = (0,latest/* getBackupPreviewInfo */.V)(json);
        const id = (0,v4/* default */.Z)();
        (0,restoreBackup/* setUnconfirmedBackup */.cg)(id, json);
        return {
            info,
            id
        };
    } else {
        return null;
    }
}
async function checkPermissionsAndRestore(id) {
    const json = await (0,restoreBackup/* getUnconfirmedBackup */.Kz)(id);
    if (json) {
        const permissions = await (0,src_utils/* extraPermissions */.uM)(json.grantedHostPermissions);
        if (permissions.length) {
            const granted = await (0,src_utils/* requestPermissions */.b5)(permissions);
            if (!granted) return;
        }
        await (0,restoreBackup/* restoreBackup */.pi)(json);
    }
}
// permissions
function queryPermission(permission) {
    return browser.permissions.contains(permission);
}


/***/ }),

/***/ 37647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pi": () => (/* binding */ restoreBackup),
/* harmony export */   "cg": () => (/* binding */ setUnconfirmedBackup),
/* harmony export */   "Kz": () => (/* binding */ getUnconfirmedBackup),
/* harmony export */   "DV": () => (/* binding */ confirmBackup)
/* harmony export */ });
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_latest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70020);
/* harmony import */ var _database_Persona_Persona_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88628);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51898);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50248);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PostRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42526);
/* harmony import */ var _database_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75724);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93002);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(71299);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44681);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19657);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(66751);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64614);












/**
 * Restore the backup
 */ async function restoreBackup(json, whoAmI) {
    _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .currentImportingBackup.value */ .pL.value = true;
    try {
        const data = (0,_utils_type_transform_BackupFormat_JSON_latest__WEBPACK_IMPORTED_MODULE_0__/* .UpgradeBackupJSONFile */ .a)(json, whoAmI);
        if (!data) throw new TypeError(_utils_i18n_next__WEBPACK_IMPORTED_MODULE_6__/* .i18n.t */ .a.t('service_invalid_backup_file'));
        {
            await (0,_database_Persona_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
                for (const x of data.personas){
                    await (0,_database_Persona_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .createOrUpdatePersonaDB */ .lX)((0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_2__/* .PersonaRecordFromJSONFormat */ .r)(x), {
                        explicitUndefinedField: 'ignore',
                        linkedProfiles: 'merge'
                    }, t);
                }
                for (const x1 of data.profiles){
                    const { linkedPersona , ...record } = (0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_3__/* .ProfileRecordFromJSONFormat */ .B)(x1);
                    await (0,_database_Persona_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .createOrUpdateProfileDB */ .o7)(record, t);
                    if (linkedPersona) {
                        await (0,_database_Persona_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .attachProfileDB */ .tc)(record.identifier, linkedPersona, {
                            connectionConfirmState: 'confirmed'
                        }, t);
                    }
                }
            });
        }
        for (const [i, x] of data.wallets.entries()){
            const record = (0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__/* .WalletRecordFromJSONFormat */ .J)(x);
            if (record.mnemonic || record._private_key_) await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__.importNewWallet)(record, i !== 0);
        }
        for (const x1 of data.posts){
            await (0,_database_post__WEBPACK_IMPORTED_MODULE_5__/* .createOrUpdatePostDB */ .Wt)((0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PostRecord__WEBPACK_IMPORTED_MODULE_4__/* .PostRecordFromJSONFormat */ .n)(x1), 'append');
        }
        const plugins = [
            ..._masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__/* .activatedPluginsWorker */ .Je
        ];
        const works = new Set();
        for (const [pluginID, item] of Object.entries(data.plugin || {
        })){
            var ref;
            const plugin = plugins.find((x2)=>x2.ID === pluginID
            );
            // should we warn user here?
            if (!plugin) {
                if ([
                    ..._masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__/* .registeredPluginIDs */ .fg
                ].includes(pluginID)) console.warn(`[@masknet/plugin-infra] Found a backup of a not enabled plugin ${plugin}`, item);
                else console.warn(`[@masknet/plugin-infra] Found an unknown plugin backup of ${plugin}`, item);
                continue;
            }
            const f = (ref = plugin.backup) === null || ref === void 0 ? void 0 : ref.onRestore;
            if (!f) {
                console.warn(`[@masknet/plugin-infra] Found a backup of plugin ${plugin} but it did not register a onRestore callback.`, item);
                continue;
            }
            const x2 = ts_results__WEBPACK_IMPORTED_MODULE_11__/* .Result.wrapAsync */ .x4.wrapAsync(async ()=>{
                const x3 = await f(item);
                if (x3.err) console.error(`[@masknet/plugin-infra] Plugin ${plugin} failed to restore its backup.`, item);
                return x3.unwrap();
            });
            works.add(x2);
        }
        await Promise.all(works);
    } finally{
        _settings_settings__WEBPACK_IMPORTED_MODULE_7__/* .currentImportingBackup.value */ .pL.value = false;
    }
}
const uncomfirmedBackup = new Map();
/**
 * Restore backup step 1: store the unconfirmed backup in cached
 * @param id the uuid for each restoration
 * @param json the backup to be cached
 */ async function setUnconfirmedBackup(id, json) {
    uncomfirmedBackup.set(id, json);
}
/**
 * Get the unconfirmed backup with uuid
 * @param id the uuid for each restoration
 */ async function getUnconfirmedBackup(id) {
    return uncomfirmedBackup.get(id);
}
/**
 * Restore backup step 2: restore the unconfirmed backup with uuid
 * @param id the uuid for each restoration
 */ async function confirmBackup(id, whoAmI) {
    if (uncomfirmedBackup.has(id)) {
        await restoreBackup(uncomfirmedBackup.get(id), whoAmI);
        uncomfirmedBackup.delete(id);
    } else {
        throw new Error('cannot find backup');
    }
}


/***/ }),

/***/ 78290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "te": () => (/* binding */ GunWorker),
/* harmony export */   "Oo": () => (/* binding */ GunAPI),
/* harmony export */   "OG": () => (/* binding */ GunAPISubscribe)
/* harmony export */ });
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62942);
/* harmony import */ var async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79723);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28532);
/* harmony import */ var _web_workers_OnDemandWorker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66451);




let GunWorker;
if (true) {
    GunWorker = new _web_workers_OnDemandWorker__WEBPACK_IMPORTED_MODULE_2__/* .OnDemandWorker */ .G(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(5049), __webpack_require__.b), {
        name: 'Gun'
    });
// we're in webpack bundle
}
const options = {
    channel: new async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_3__/* .WorkerChannel */ .i(GunWorker),
    serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM
};
const GunAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)({
}, options);
const GunAPISubscribe = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc)({
}, options);


/***/ }),

/***/ 65570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mC": () => (/* reexport */ metadata/* createRenderWithMetadata */.mC),
  "Bi": () => (/* reexport */ metadata/* createTypedMessageMetadataReader */.Bi),
  "r1": () => (/* reexport */ metadata/* editTypedMessageMeta */.r1),
  "Vc": () => (/* reexport */ src.extractTextFromTypedMessage),
  "vi": () => (/* reexport */ getRendererOfTypedMessage),
  "MH": () => (/* reexport */ getTypedMessageContent),
  "Jp": () => (/* reexport */ metadata/* isDataMatchJSONSchema */.Jp),
  "bj": () => (/* reexport */ src.isTypedMessageAnchor),
  "YN": () => (/* reexport */ src.isTypedMessageEmpty),
  "Rz": () => (/* reexport */ src.isTypedMessageText),
  "Jv": () => (/* reexport */ src.makeTypedMessageAnchor),
  "WM": () => (/* reexport */ src.makeTypedMessageEmpty),
  "as": () => (/* reexport */ src.makeTypedMessageImage),
  "Ng": () => (/* reexport */ src.makeTypedMessagePromise),
  "P": () => (/* reexport */ src.makeTypedMessageText),
  "Zw": () => (/* reexport */ src.makeTypedMessageTuple),
  "n_": () => (/* reexport */ src.makeTypedMessageTupleFromList),
  "fG": () => (/* reexport */ metadata/* metadataSchemaStoreReadonly */.fG),
  "vq": () => (/* reexport */ registerTypedMessageRenderer)
});

// UNUSED EXPORTS: editMetadata, isSerializableTypedMessage, isTypedMessageEqual, isTypedMessageImage, isTypedMessageImageV1, isTypedMessagePromise, isTypedMessageTextV1, isTypedMessageTuple, isTypedMessageTupleSerializable, isTypedMessageUnknown, isWellKnownCoreTypedMessages, isWellKnownTypedMessages, makeTypedMessageSerializableTupleFromList, makeTypedMessageTupleSerializable, makeTypedMessageUnknown, readTypedMessageMetadataUntyped, registerMetadataSchema, renderWithMetadataUntyped

// EXTERNAL MODULE: ../shared/src/index.ts
var src = __webpack_require__(80050);
;// CONCATENATED MODULE: ./src/protocols/typed-message/helpers.ts


// EXTERNAL MODULE: ./src/protocols/typed-message/metadata.ts
var metadata = __webpack_require__(49970);
;// CONCATENATED MODULE: ./src/protocols/typed-message/types.ts


function getTypedMessageContent(message) {
    if ((0,src.isTypedMessageText)(message)) return message.content;
    if ((0,src.isTypedMessageAnchor)(message)) return message.href;
    return '';
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/render-registry.tsx
const registry = new Map();
// TODO: before metadata, after metadata, ...
function registerTypedMessageRenderer(matching, config) {
    const set = registry.get(matching) || new Set();
    // No overwrite in production
    if (false) {}
    set.add(config);
    registry.set(matching, set);
}
// TODO: add settings for "selected" renderer
function getRendererOfTypedMessage(message) {
    const list = [
        ...registry.get(message.type) || [],
        ...registry.get('*') || []
    ].sort((x, y)=>x.priority - y.priority
    );
    return list;
}

;// CONCATENATED MODULE: ./src/protocols/typed-message/index.ts






/***/ }),

/***/ 49970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fG": () => (/* binding */ metadataSchemaStoreReadonly),
/* harmony export */   "Bi": () => (/* binding */ createTypedMessageMetadataReader),
/* harmony export */   "Jp": () => (/* binding */ isDataMatchJSONSchema),
/* harmony export */   "mC": () => (/* binding */ createRenderWithMetadata),
/* harmony export */   "r1": () => (/* binding */ editTypedMessageMeta)
/* harmony export */ });
/* unused harmony exports registerMetadataSchema, readTypedMessageMetadataUntyped, editMetadata, renderWithMetadataUntyped */
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64614);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20391);
/* harmony import */ var z_schema__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(z_schema__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98723);



(0,immer__WEBPACK_IMPORTED_MODULE_2__/* .enableMapSet */ .MD)();
const metadataSchemaStore = new Map();
const metadataSchemaStoreReadonly = (/* runtime-dependent pure expression or super */ !/^(1680|964)$/.test(__webpack_require__.j) ? (metadataSchemaStore) : null);
/**
 * Register your metadata with a JSON Schema so Mask can validate the schema for you.
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
    if (!meta) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (!meta.has(key)) return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
    if (metadataSchemaStore.has(key) && !jsonSchema) jsonSchema = metadataSchemaStore.get(key);
    const data = meta.get(key);
    if (!jsonSchema) console.warn('You should add a JSON Schema to verify the metadata in the TypedMessage');
    else {
        const match = isDataMatchJSONSchema(data, jsonSchema);
        if (match.err) {
            console.warn('The problematic metadata is dropped', data, 'errors:', match.val);
            return ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err.EMPTY */ .UG.EMPTY;
        }
    }
    return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok)(data);
}
function isDataMatchJSONSchema(data, jsonSchema) {
    const validator = new (z_schema__WEBPACK_IMPORTED_MODULE_1___default())({
    });
    if (!validator.validate(data, jsonSchema)) return (0,ts_results__WEBPACK_IMPORTED_MODULE_0__/* .Err */ .UG)(validator.getLastErrors());
    return ts_results__WEBPACK_IMPORTED_MODULE_0__.Ok.EMPTY;
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
    return (0,immer__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)(metadata || new Map(), (e)=>void edit(e)
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


/***/ }),

/***/ 12724:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CS": () => (/* binding */ encodePublicKeyWorker),
/* harmony export */   "IC": () => (/* binding */ decodePublicKeyWorker),
/* harmony export */   "QO": () => (/* binding */ encodeTextPayloadWorker),
/* harmony export */   "s1": () => (/* binding */ decodeTextPayloadWorker)
/* harmony export */ });
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56839);

async function encodePublicKeyWorker(query) {
    var ref;
    const f = (ref = (await (0,_worker__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkWorker */ .C8)(query)).utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.encoder;
    return (x)=>{
        return (f === null || f === void 0 ? void 0 : f(x)) || x;
    };
}
async function decodePublicKeyWorker(query) {
    var ref;
    const f = (ref = (await (0,_worker__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkWorker */ .C8)(query)).utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return (x)=>f(x).concat(x)
    ;
    return (x)=>[
            x
        ]
    ;
}
async function encodeTextPayloadWorker(query) {
    var ref;
    const f = (ref = (await (0,_worker__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkWorker */ .C8)(query)).utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.encoder;
    return (x)=>{
        return (f === null || f === void 0 ? void 0 : f(x)) || x;
    };
}
async function decodeTextPayloadWorker(query) {
    var ref;
    const f = (ref = (await (0,_worker__WEBPACK_IMPORTED_MODULE_0__/* .getNetworkWorker */ .C8)(query)).utils.textPayloadPostProcessor) === null || ref === void 0 ? void 0 : ref.decoder;
    if (f) return (x)=>f(x).concat(x)
    ;
    return (x)=>[
            x
        ]
    ;
}


/***/ }),

/***/ 51898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PersonaRecordToJSONFormat),
/* harmony export */   "r": () => (/* binding */ PersonaRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _database_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10288);


function PersonaRecordToJSONFormat(persona) {
    return {
        createdAt: persona.createdAt.getTime(),
        updatedAt: persona.updatedAt.getTime(),
        identifier: persona.identifier.toText(),
        publicKey: persona.publicKey,
        privateKey: persona.privateKey,
        nickname: persona.nickname,
        mnemonic: persona.mnemonic,
        localKey: persona.localKey,
        linkedProfiles: Array.from(persona.linkedProfiles).map(([x, y])=>[
                x.toText(),
                y
            ]
        )
    };
}
function PersonaRecordFromJSONFormat(persona) {
    if (persona.privateKey && !persona.privateKey.d) throw new Error('Private have no secret');
    return {
        createdAt: new Date(persona.createdAt),
        updatedAt: new Date(persona.updatedAt),
        identifier: _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(persona.identifier, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap(),
        publicKey: persona.publicKey,
        privateKey: persona.privateKey,
        nickname: persona.nickname,
        mnemonic: persona.mnemonic,
        localKey: persona.localKey,
        linkedProfiles: new _database_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .q(new Map(persona.linkedProfiles), _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO)
    };
}


/***/ }),

/***/ 42526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PostRecordToJSONFormat),
/* harmony export */   "n": () => (/* binding */ PostRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _database_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10288);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11494);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61844);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4799);




function PostRecordToJSONFormat(post) {
    var ref;
    return {
        postCryptoKey: post.postCryptoKey,
        foundAt: post.foundAt.getTime(),
        identifier: post.identifier.toText(),
        postBy: post.postBy.toText(),
        recipientGroups: [],
        recipients: post.recipients === 'everyone' ? 'everyone' : Array.from(post.recipients).map(([identifier, detail])=>[
                identifier.toText(),
                {
                    reason: Array.from(detail.reason).map(RecipientReasonToJSON)
                }, 
            ]
        ),
        encryptBy: (ref = post.encryptBy) === null || ref === void 0 ? void 0 : ref.toText(),
        interestedMeta: MetaToJson(post.interestedMeta),
        summary: post.summary,
        url: post.url
    };
}
function PostRecordFromJSONFormat(post) {
    return {
        postCryptoKey: post.postCryptoKey,
        foundAt: new Date(post.foundAt),
        identifier: _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(post.identifier, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb).unwrap(),
        postBy: _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(post.postBy, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        recipients: post.recipients === 'everyone' ? 'everyone' : new _database_IdentifierMap__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .q(new Map(post.recipients.map(([x, y])=>[
                x,
                {
                    reason: y.reason.map(RecipientReasonFromJSON)
                }, 
            ]
        ))),
        encryptBy: post.encryptBy ? _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(post.encryptBy, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap() : undefined,
        interestedMeta: MetaFromJson(post.interestedMeta),
        summary: post.summary,
        url: post.url
    };
}
function RecipientReasonToJSON(y) {
    if (y.type === 'direct' || y.type === 'auto-share') return {
        at: y.at.getTime(),
        type: y.type
    };
    else if (y.type === 'group') return {
        at: y.at.getTime(),
        group: y.group.toText(),
        type: y.type
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(y);
}
function RecipientReasonFromJSON(y) {
    if (y.type === 'direct' || y.type === 'auto-share') return {
        at: new Date(y.at),
        type: y.type
    };
    else if (y.type === 'group') return {
        type: 'group',
        at: new Date(y.at),
        group: _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(y.group, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .GroupIdentifier */ .xI).unwrap()
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(y);
}
function MetaToJson(meta) {
    if (!meta) return undefined;
    const obj = Object.fromEntries(meta);
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .encodeArrayBuffer */ .ll)((0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__/* .encode */ .c)(obj));
}
function MetaFromJson(meta) {
    if (!meta) return undefined;
    const raw = (0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_4__/* .decode */ .Jx)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .decodeArrayBuffer */ .xe)(meta));
    if (typeof raw !== 'object' || !raw) return undefined;
    return new Map(Object.entries(raw));
}


/***/ }),

/***/ 50248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ProfileRecordToJSONFormat),
/* harmony export */   "B": () => (/* binding */ ProfileRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _database_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);

function ProfileRecordToJSONFormat(profile) {
    var ref;
    return {
        createdAt: profile.createdAt.getTime(),
        updatedAt: profile.updatedAt.getTime(),
        identifier: profile.identifier.toText(),
        nickname: profile.nickname,
        localKey: profile.localKey,
        linkedPersona: (ref = profile.linkedPersona) === null || ref === void 0 ? void 0 : ref.toText()
    };
}
function ProfileRecordFromJSONFormat(profile) {
    return {
        createdAt: new Date(profile.createdAt),
        updatedAt: new Date(profile.updatedAt),
        identifier: _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(profile.identifier, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        nickname: profile.nickname,
        localKey: profile.localKey,
        linkedPersona: profile.linkedPersona ? _database_type__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(profile.linkedPersona, _database_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap() : undefined
    };
}


/***/ }),

/***/ 44681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ WalletRecordToJSONFormat),
/* harmony export */   "J": () => (/* binding */ WalletRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10329);
/* harmony import */ var _masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6615);


function WalletRecordToJSONFormat(wallet) {
    var _name;
    const backup = {
        name: (_name = wallet.name) !== null && _name !== void 0 ? _name : '',
        address: wallet.address,
        createdAt: wallet.createdAt.getTime(),
        updatedAt: wallet.updatedAt.getTime()
    };
    // generate keys for managed wallet
    try {
        var ref;
        const wallet_ = wallet;
        backup.passphrase = wallet_.passphrase;
        if ((ref = wallet_.mnemonic) === null || ref === void 0 ? void 0 : ref.length) backup.mnemonic = {
            words: wallet_.mnemonic.join(' '),
            parameter: {
                path: "m/44'/60'/0'/0/0",
                withPassword: false
            }
        };
        if (wallet_._public_key_ && (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .isSameAddress */ .Wr$)((0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToAddr */ .eh)(wallet_._public_key_, 'public'), wallet.address)) backup.publicKey = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet_._public_key_, 'public');
        if (wallet_._private_key_ && (0,_masknet_web3_shared__WEBPACK_IMPORTED_MODULE_1__/* .isSameAddress */ .Wr$)((0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToAddr */ .eh)(wallet_._private_key_, 'private'), wallet.address)) backup.privateKey = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet_._private_key_, 'private');
    } catch (error) {
        console.error(error);
    }
    return backup;
}
function WalletRecordFromJSONFormat(wallet) {
    var ref;
    const record = {
        name: wallet.name,
        address: wallet.address,
        createdAt: new Date(wallet.createdAt),
        updatedAt: new Date(wallet.updatedAt)
    };
    if ((ref = wallet.mnemonic) === null || ref === void 0 ? void 0 : ref.words) {
        const record_ = record;
        var _passphrase;
        record_.passphrase = (_passphrase = wallet.passphrase) !== null && _passphrase !== void 0 ? _passphrase : '';
        record_.mnemonic = wallet.mnemonic.words.split(' ');
    }
    if (wallet.privateKey) {
        const record_ = record;
        record_._private_key_ = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .JWKToKey */ .Br)(wallet.privateKey, 'private');
    }
    if (wallet.publicKey) {
        const record_ = record;
        record_._public_key_ = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .JWKToKey */ .Br)(wallet.publicKey, 'public');
    }
    return record;
}


/***/ }),

/***/ 43702:
/***/ ((module) => {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ 83020:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var __webpack_provided_process_dot_nextTick = __webpack_require__(28255);
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron =  false || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(43702);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(69546);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { __webpack_provided_process_dot_nextTick(cb, null, ret) },
            function(rej) { __webpack_provided_process_dot_nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


/***/ })

}]);