"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[256],{

/***/ 74326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 70682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sf": () => (/* binding */ pluginDataHasValidKeyPath),
/* harmony export */   "HN": () => (/* binding */ createPluginDBAccess),
/* harmony export */   "tB": () => (/* binding */ toStore)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79930);
/* harmony import */ var _helpers_openDB__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77046);
/// <reference path="../global.d.ts" />


//#endregion
const db1 = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_1__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__.openDB)('maskbook-plugin-data', 2, {
        async upgrade (db, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db.deleteObjectStore('PluginStore');
                const os = db.createObjectStore('PluginStore', {
                    keyPath: [
                        'plugin_id',
                        'value.type',
                        'value.id'
                    ]
                });
                // a compound index by "rec.plugin_id" + "rec.value.type"
                os.createIndex('type', [
                    'plugin_id',
                    'value.type'
                ]);
                for (const each of data){
                    if (!each.plugin_id) continue;
                    if (!pluginDataHasValidKeyPath(each.value)) continue;
                    Reflect.deleteProperty(each, 'type');
                    Reflect.deleteProperty(each, 'record_id');
                    await os.add(each);
                }
            }
        }
    });
});
// cause key path error in "add" will cause transaction fail, we need to check them first
function pluginDataHasValidKeyPath(value) {
    try {
        if (typeof value !== 'object' || value === null) return false;
        const id = Reflect.get(value, 'id');
        const type = Reflect.get(value, 'type');
        if (typeof id !== 'string' && typeof id !== 'number') return false;
        if (typeof type !== 'string' && typeof type !== 'number') return false;
        return true;
    } catch  {
        return false;
    }
}
const createPluginDBAccess = db1;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}


/***/ }),

/***/ 77046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__);

function createDBAccess(opener) {
    let db = undefined;
    function clean() {
        db = undefined;
    }
    return async ()=>{
        if (true) await __webpack_require__.e(/* import() */ 1545).then(__webpack_require__.bind(__webpack_require__, 31545)).then(({ default: ready  })=>ready()
        );
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                db.transaction([], 'readonly', {
                });
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean);
        db.addEventListener('error', clean);
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    let pendingOpen = undefined;
    async function open() {
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_0__.Environment.ManifestBackground);
        if ((db === null || db === void 0 ? void 0 : db.version) === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            }
            currentVersion += 1;
            db === null || db === void 0 ? void 0 : db.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined
        );
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return ()=>{
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined
        );
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


/***/ }),

/***/ 92850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 75803:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 51404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeImage": () => (/* binding */ encodeImage),
/* harmony export */   "decodeImage": () => (/* binding */ decodeImage),
/* harmony export */   "decodeImageUrl": () => (/* binding */ decodeImageUrl)
/* harmony export */ });
/* harmony import */ var _dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50710);
/* harmony import */ var _dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensiondev_stego_js_cjs_grayscale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34523);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(84140);
/* harmony import */ var _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96578);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59935);
/* harmony import */ var _utils_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38266);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11494);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(34527);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__);








(0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_7__.Environment.ManifestBackground);
const dimensionPreset = [
    {
        width: 1024,
        height: 1240,
        mask: 'v1'
    },
    {
        width: 1200,
        height: 681,
        mask: 'v2'
    },
    {
        width: 1200,
        height: 680,
        mask: 'transparent'
    },
    {
        width: 1000,
        height: 558,
        mask: 'transparent'
    },
    {
        width: 1000,
        height: 560,
        mask: 'v4'
    }, 
];
const defaultOptions = {
    size: 8,
    narrow: 0,
    copies: 3,
    tolerance: 128
};
const isSameDimension = (dimension, otherDimension)=>dimension.width === otherDimension.width && dimension.height === otherDimension.height
;
const images = {
    v1: new URL(/* asset import */ __webpack_require__(93894), __webpack_require__.b).toString(),
    v2: new URL(/* asset import */ __webpack_require__(86348), __webpack_require__.b).toString(),
    v4: new URL(/* asset import */ __webpack_require__(486), __webpack_require__.b).toString(),
    transparent: new URL(/* asset import */ __webpack_require__(16760), __webpack_require__.b).toString()
};
const getMaskBuf = (0,_utils_memoize__WEBPACK_IMPORTED_MODULE_4__/* .memoizePromise */ .J)(async (type)=>(0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .blobToArrayBuffer */ .vZ)(await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .downloadUrl */ .GR)(images[type]))
, void 0);
async function encodeImage(buf, options) {
    const { template  } = options;
    const _buf = typeof buf === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .decodeArrayBuffer */ .xe)(buf) : buf;
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .encodeArrayBuffer */ .ll)(await (0,_dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__.encode)(_buf, await getMaskBuf(template === 'v2' || template === 'v4' ? template : 'transparent'), {
        ...defaultOptions,
        fakeMaskPixels: false,
        cropEdgePixels: template !== 'v2' && template !== 'v3' && template !== 'v4',
        exhaustPixels: true,
        grayscaleAlgorithm: template === 'v3' ? _dimensiondev_stego_js_cjs_grayscale__WEBPACK_IMPORTED_MODULE_1__.GrayscaleAlgorithm.LUMINANCE : _dimensiondev_stego_js_cjs_grayscale__WEBPACK_IMPORTED_MODULE_1__.GrayscaleAlgorithm.NONE,
        transformAlgorithm: _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__.TransformAlgorithm.FFT1D,
        ...options
    }));
}
async function decodeImage(buf, options) {
    const _buf = typeof buf === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .decodeArrayBuffer */ .xe)(buf) : buf;
    const _dimension = (0,_utils_image__WEBPACK_IMPORTED_MODULE_5__/* .getDimension */ .F)(_buf);
    const preset = dimensionPreset.find((d)=>isSameDimension(d, _dimension)
    );
    if (!preset) return '';
    return (0,_dimensiondev_stego_js_cjs_dom__WEBPACK_IMPORTED_MODULE_0__.decode)(_buf, await getMaskBuf(preset.mask), {
        ...defaultOptions,
        transformAlgorithm: _dimensiondev_stego_js_cjs_transform__WEBPACK_IMPORTED_MODULE_2__.TransformAlgorithm.FFT1D,
        ...options
    });
}
async function decodeImageUrl(url, options) {
    return decodeImage(await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_6__/* .blobToArrayBuffer */ .vZ)(await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .downloadUrl */ .GR)(url)), options);
}


/***/ }),

/***/ 50256:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "decryptFromImageUrl": () => (/* reexport */ decryptFromImageUrl),
  "decryptFromText": () => (/* reexport */ decryptFromText)
});

// EXTERNAL MODULE: ./src/crypto/crypto-alpha-40.ts
var crypto_alpha_40 = __webpack_require__(15120);
// EXTERNAL MODULE: ./src/crypto/crypto-alpha-39.ts
var crypto_alpha_39 = __webpack_require__(49387);
// EXTERNAL MODULE: ./src/network/gun/index.ts
var gun = __webpack_require__(78290);
// EXTERNAL MODULE: ./src/utils/type-transform/String-ArrayBuffer.ts
var String_ArrayBuffer = __webpack_require__(28504);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(5743);
// EXTERNAL MODULE: ./src/utils/i18n-next.ts + 1 modules
var i18n_next = __webpack_require__(93002);
// EXTERNAL MODULE: ./src/database/index.ts
var database = __webpack_require__(92850);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ./src/database/post.ts
var post = __webpack_require__(75724);
// EXTERNAL MODULE: ./src/social-network/worker.ts
var social_network_worker = __webpack_require__(56839);
// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/cryptoProviderTable.ts
var cryptoProviderTable = __webpack_require__(75803);
// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/verifyOthersProve.ts
var verifyOthersProve = __webpack_require__(19384);
// EXTERNAL MODULE: ./src/crypto/crypto-alpha-38.ts
var crypto_alpha_38 = __webpack_require__(74326);
// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(92697);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(17422);
// EXTERNAL MODULE: ./src/utils/utils.ts
var utils = __webpack_require__(96578);
// EXTERNAL MODULE: ./src/extension/background-script/SteganographyService.ts
var SteganographyService = __webpack_require__(51404);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var esm = __webpack_require__(64614);
// EXTERNAL MODULE: ./src/social-network/utils/text-payload-worker.ts
var text_payload_worker = __webpack_require__(12724);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/decryptFrom.ts






















const successDecryptionCache = new Map();
const makeSuccessResultF = (cacheKey, iv, decryptedPayloadForImage, cryptoProvider)=>(rawEncryptedContent, through)=>{
        const success = {
            through,
            iv,
            decryptedPayloadForImage,
            content: cryptoProvider.typedMessageParse(rawEncryptedContent),
            type: 'success',
            internal: false
        };
        successDecryptionCache.set(cacheKey, success);
        return success;
    }
;
function makeProgress(progress, internal = false) {
    if (typeof progress === 'string') return {
        type: 'progress',
        progress,
        internal
    };
    return {
        type: 'progress',
        progress: 'intermediate_success',
        data: progress,
        internal
    };
}
function makeError(error, internal = false) {
    if (typeof error === 'string') return {
        type: 'error',
        error,
        internal
    };
    return makeError(error.message, internal);
}
/**
 * Decrypt message from a user
 * @param post post
 * @param author Post by
 * @param authorNetworkHint When the author is unknown, the decryption (to public) won't die
 * @param whoAmI My username
 * @param publicShared Is this post public shared
 *
 * @description
 * The decrypt process:
 *
 * ## Prepare
 * a. if unknown payload, throw
 * b. if unknown payload version, throw
 *
 * ## Decrypt for version -38, -39 and -40
 * a. read the cache `cachedPostResult`
 * b. find author's public key (See: `findAuthorPublicKey` function)
 *      0. if it is in the payload, use the key in the payload.
 *      1. if there is cache, return the cache
 *      2. if try N times but not finding the key, throw
 * c. if there is cache, return the cache
 * d. try to decrypt by `author` with `decryptAsAuthor`
 * e. try to decrypt by `whoAmI` with `decryptAsAuthor`
 * f. if `author` === `whoAmI`, throw
 * g. find key for `whoAmI` on Gun
 * h. try to decrypt by the key on Gun
 * i. return a Promise
 *      0. if version === -40, throws
 *      1. listen to future new keys on Gun
 *      2. try to decrypt with that key
 */ async function* decryptFromPayloadWithProgress_raw(post, author, authorNetworkHint, whoAmI, discoverURL) {
    const cacheKey = json_stable_stringify_default()(post);
    if (successDecryptionCache.has(cacheKey)) return successDecryptionCache.get(cacheKey);
    yield makeProgress('init');
    const authorNetworkWorker = esm/* Result.wrap */.x4.wrap(()=>(0,social_network_worker/* getNetworkWorkerUninitialized */.Bu)(author.isUnknown ? authorNetworkHint : author.network)
    ).andThen((x)=>x ? (0,esm.Ok)(x) : (0,esm/* Err */.UG)(new Error('Worker not found'))
    );
    if (authorNetworkWorker.err) return makeError(authorNetworkWorker.val);
    const data = post;
    const { version  } = data;
    var _sharedPublic;
    const sharePublic = data.version === -38 ? (_sharedPublic = data.sharedPublic) !== null && _sharedPublic !== void 0 ? _sharedPublic : false : false;
    if (version === -40 || version === -39 || version === -38) {
        const { encryptedText , iv , version: version1  } = data;
        const cryptoProvider = cryptoProviderTable/* cryptoProviderTable */.U[version1];
        const makeSuccessResult = makeSuccessResultF(cacheKey, iv, data, cryptoProvider);
        const ownersAESKeyEncrypted = data.version === -38 ? data.AESKeyEncrypted : data.ownersAESKeyEncrypted;
        yield {
            type: 'progress',
            progress: 'payload_decrypted',
            decryptedPayloadForImage: data,
            internal: true
        };
        yield {
            type: 'progress',
            progress: 'iv_decrypted',
            iv: iv,
            internal: true
        };
        // ? Early emit the cache.
        const [cachedPostResult, setPostCache] = await decryptFromCache(data, author, discoverURL);
        if (cachedPostResult) {
            yield makeProgress(makeSuccessResult(cachedPostResult, [
                'post_key_cached'
            ]));
        }
        // ? If the author's key is in the payload, store it.
        if (data.version === -38 && data.authorPublicKey && !author.isUnknown) {
            await (0,verifyOthersProve/* verifyOthersProve */.f)({
                raw: data.authorPublicKey
            }, author).catch(console.error);
        }
        // ? Find author's public key.
        let authorPersona;
        for await (const _ of (0,asyncIteratorHelpers/* asyncIteratorWithResult */.ts)(findAuthorPublicKey(author, !!cachedPostResult))){
            if (author.isUnknown) break;
            if (!_.done) {
                yield _.value;
                continue;
            }
            const result = _.value;
            if (result === 'out of chance') return makeError(i18n_next/* i18n.t */.a.t('service_others_key_not_found', {
                name: author.userId
            }));
            else if (result === 'use cache') return makeSuccessResult(cachedPostResult, [
                'author_key_not_found',
                'post_key_cached'
            ]);
            else authorPersona = result;
        }
        // ? Get my public & private key.
        const queryWhoAmI = ()=>(0,database/* queryPersonaRecord */.yQ)(whoAmI)
        ;
        const mine = await queryWhoAmI().then((x)=>x || (0,utils/* delay */.gw)(1000).then(queryWhoAmI)
        );
        if (!(mine === null || mine === void 0 ? void 0 : mine.privateKey)) return makeError(constants/* DecryptFailedReason.MyCryptoKeyNotFound */.g.MyCryptoKeyNotFound);
        const { publicKey: minePublic , privateKey: minePrivate  } = mine;
        const networkWorker = (0,social_network_worker/* getNetworkWorkerUninitialized */.Bu)(whoAmI);
        try {
            if (version1 === -40) throw '';
            const gunNetworkHint = networkWorker.gunNetworkHint;
            const { keyHash , postHash  } = await (await Promise.all(/* import() */[__webpack_require__.e(4462), __webpack_require__.e(4477), __webpack_require__.e(3665)]).then(__webpack_require__.bind(__webpack_require__, 41277))).calculatePostKeyPartition(version1, iv, minePublic, gunNetworkHint);
            yield {
                type: 'debug',
                debug: 'debug_finding_hash',
                hash: [
                    postHash,
                    keyHash
                ]
            };
        } catch  {
        }
        if (cachedPostResult) return makeSuccessResult(cachedPostResult, [
            'post_key_cached'
        ]);
        let lastError;
        /**
         * ? try to decrypt as I am the author
         * ? then try to decrypt as whoAmI
         * ? then try to go through a normal decrypt process
         */ try {
            const a = decryptAsAuthor(author);
            const b = decryptAsAuthor(whoAmI);
            // ! Don't remove the await
            return await a.catch(()=>b
            );
        } catch (error) {
            lastError = error;
        }
        if (author.equals(whoAmI)) {
            // if the decryption process goes here,
            // that means it is failed to decrypt by local identities.
            // If remove this if block, Mask will search the key
            // for the post even that post by myself.
            if (lastError instanceof DOMException) return handleDOMException(lastError);
            console.error(lastError);
            return makeError(i18n_next/* i18n.t */.a.t('service_self_key_decryption_failed'));
        }
        yield makeProgress('finding_post_key');
        const aesKeyEncrypted = [];
        if (version1 === -40) {
            // Deprecated payload
            // eslint-disable-next-line import/no-deprecated
            const result = await gun/* GunAPI.queryVersion1PostAESKey */.Oo.queryVersion1PostAESKey(iv, whoAmI.userId);
            if (result === undefined) return makeError(i18n_next/* i18n.t */.a.t('service_not_share_target'));
            aesKeyEncrypted.push(result);
        } else if (version1 === -39 || version1 === -38) {
            const keys = await gun/* GunAPI.queryPostKeysOnGun2 */.Oo.queryPostKeysOnGun2(version1, iv, minePublic, authorNetworkWorker.val.gunNetworkHint);
            aesKeyEncrypted.push(...keys);
        }
        // If we can decrypt with current info, just do it.
        try {
            // ! Do not remove the await here.
            return await decryptWith(aesKeyEncrypted);
        } catch (error) {
            if (error instanceof Error && error.message === i18n_next/* i18n.t */.a.t('service_not_share_target')) {
                console.debug(error);
                // TODO: Replace this error with:
                // You do not have the necessary private key to decrypt this message.
                // What to do next: You can ask your friend to visit your profile page, so that their Mask extension will detect and add you to recipients.
                // ? after the auto-share with friends is done.
                yield makeError(error);
            } else {
                return handleDOMException(error);
            }
        }
        // Failed, we have to wait for the future info from gun.
        if (version1 === -40) return makeError(i18n_next/* i18n.t */.a.t('service_not_share_target'));
        const subscription = gun/* GunAPISubscribe.subscribePostKeysOnGun2 */.OG.subscribePostKeysOnGun2(version1, iv, minePublic, authorNetworkWorker.val.gunNetworkHint);
        gun/* GunWorker */.te === null || gun/* GunWorker */.te === void 0 ? void 0 : gun/* GunWorker.onTerminated */.te.onTerminated(()=>{
            var ref;
            return (ref = subscription.return) === null || ref === void 0 ? void 0 : ref.call(subscription);
        });
        for await (const aes of subscription){
            console.log('New key received, trying', aes);
            try {
                return await decryptWith(aes);
            } catch (error) {
                console.debug(error);
            }
        }
        return makeError(i18n_next/* i18n.t */.a.t('service_not_share_target'));
        async function decryptWith(key) {
            const [contentArrayBuffer, postAESKey] = await cryptoProvider.decryptMessage1ToNByOther({
                version: version1,
                AESKeyEncrypted: key,
                authorsPublicKeyECDH: authorPersona.publicKey,
                encryptedContent: encryptedText,
                privateKeyECDH: minePrivate,
                iv
            });
            // Store the key to speed up next time decrypt
            setPostCache(postAESKey);
            const content = (0,String_ArrayBuffer/* decodeText */.rj)(contentArrayBuffer);
            return makeSuccessResult(content, [
                'normal_decrypted'
            ]);
        }
        async function decryptAsAuthor(authorIdentifier) {
            const localKey = sharePublic ? crypto_alpha_38.publicSharedAESKey : await (0,database/* queryLocalKey */.DM)(authorIdentifier);
            if (!localKey) throw new Error(`Local key for identity ${authorIdentifier.toText()} not found`);
            const [contentArrayBuffer, postAESKey] = await cryptoProvider.decryptMessage1ToNByMyself({
                version: version1,
                encryptedAESKey: ownersAESKeyEncrypted,
                encryptedContent: encryptedText,
                myLocalKey: localKey,
                iv
            });
            // Store the key to speed up next time decrypt
            setPostCache(postAESKey);
            const content = (0,String_ArrayBuffer/* decodeText */.rj)(contentArrayBuffer);
            return makeSuccessResult(content, [
                'normal_decrypted'
            ]);
        }
    }
    return makeError(i18n_next/* i18n.t */.a.t('service_unknown_payload'));
}
async function* decryptFromImageUrlWithProgress_raw(url, author, authorNetworkHint, whoAmI, discoverURL) {
    if (successDecryptionCache.has(url)) return successDecryptionCache.get(url);
    yield makeProgress('decode_post', true);
    const post = await (0,SteganographyService.decodeImageUrl)(url, {
        pass: author.toText()
    });
    if (!post.startsWith('🎼') && !/https:\/\/.+\..+\/(\?PostData_v\d=)?%20(.+)%40/.test(post)) return makeError(i18n_next/* i18n.t */.a.t('service_decode_image_payload_failed'), true);
    const worker = await esm/* Result.wrapAsync */.x4.wrapAsync(()=>(0,social_network_worker/* getNetworkWorker */.C8)(author)
    );
    if (worker.err) return makeError(worker.val);
    const payload = (0,Payload/* deconstructPayload */.Q)(post, await (0,text_payload_worker/* decodeTextPayloadWorker */.s1)(author));
    if (payload.err) return makeError(payload.val);
    return yield* decryptFromText(payload.val, author, authorNetworkHint, whoAmI, discoverURL);
}
const decryptFromText = (0,asyncIteratorHelpers/* memorizeAsyncGenerator */.l4)(decryptFromPayloadWithProgress_raw, (encrypted, author, _, whoAmI)=>JSON.stringify([
        encrypted.iv,
        encrypted.encryptedText,
        author.toText(),
        whoAmI.toText()
    ])
, 1000 * 30);
const decryptFromImageUrl = (0,asyncIteratorHelpers/* memorizeAsyncGenerator */.l4)(decryptFromImageUrlWithProgress_raw, (url, author, _, whoAmI)=>JSON.stringify([
        url,
        author.toText(),
        whoAmI.toText()
    ])
, 1000 * 30);
function handleDOMException(e) {
    if (e instanceof DOMException) {
        return makeError(i18n_next/* i18n.t */.a.t('service_decryption_failed'));
    } else throw e;
}
async function* findAuthorPublicKey(by, hasCache, maxIteration = 10) {
    let author = await (0,database/* queryPersonaRecord */.yQ)(by);
    let iterations = 0;
    while(!(author === null || author === void 0 ? void 0 : author.publicKey)){
        iterations += 1;
        if (iterations < maxIteration) yield makeProgress('finding_person_public_key');
        else return 'out of chance';
        author = await (0,database/* queryPersonaRecord */.yQ)(by).catch(()=>null
        );
        if (!(author === null || author === void 0 ? void 0 : author.publicKey)) {
            if (hasCache) return 'use cache';
            const abort = new AbortController();
            const databasePromise = new Promise((resolve, reject)=>{
                abort.signal.addEventListener('abort', ()=>{
                    undo();
                    reject();
                });
                const undo = messages/* MaskMessage.events.profilesChanged.on */.y.events.profilesChanged.on((data)=>{
                    for (const x of data){
                        if (x.reason === 'delete') continue;
                        if (x.of.equals(by)) {
                            undo();
                            resolve();
                            break;
                        }
                    }
                });
            });
            await Promise.race([
                databasePromise
            ]).then(()=>abort.abort()
            ).catch(()=>null
            );
        }
    }
    if (author === null || author === void 0 ? void 0 : author.publicKey) return author;
    return 'out of chance';
}
async function decryptFromCache(postPayload, by, discoverURL) {
    const { encryptedText , iv , version  } = postPayload;
    const cryptoProvider = version === -40 ? crypto_alpha_40 : crypto_alpha_39;
    const postIdentifier = new type/* PostIVIdentifier */.bb(by.network, iv);
    const cachedKey = await (0,post/* queryPostDB */.q3)(postIdentifier);
    if (cachedKey && !cachedKey.url && discoverURL) {
        await (0,post/* updatePostDB */.rr)({
            identifier: postIdentifier,
            url: discoverURL
        }, 'append');
    }
    const setCache = (postAESKey)=>{
        const postUpdate = {
            identifier: postIdentifier,
            postCryptoKey: postAESKey,
            postBy: by
        };
        if (discoverURL) postUpdate.url = discoverURL;
        (0,post/* updatePostDB */.rr)(postUpdate, 'append');
    };
    if (cachedKey === null || cachedKey === void 0 ? void 0 : cachedKey.postCryptoKey) {
        try {
            const result = (0,String_ArrayBuffer/* decodeText */.rj)(await cryptoProvider.decryptWithAES({
                aesKey: cachedKey.postCryptoKey,
                encrypted: encryptedText,
                iv: iv
            }));
            return [
                result,
                setCache
            ];
        } catch  {
        }
    }
    return [
        undefined,
        setCache
    ];
}

;// CONCATENATED MODULE: ./src/extension/service-generator.ts



/***/ }),

/***/ 78290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 17422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ts": () => (/* binding */ asyncIteratorWithResult),
/* harmony export */   "l4": () => (/* binding */ memorizeAsyncGenerator),
/* harmony export */   "SR": () => (/* binding */ asyncIteratorToArray)
/* harmony export */ });
/* unused harmony export asyncIteratorToAsyncFunction */
async function* asyncIteratorWithResult(iter, callback) {
    let yielded;
    do {
        const p = iter.next();
        callback === null || callback === void 0 ? void 0 : callback(p);
        yielded = await p;
        yield yielded;
    }while (yielded.done === false)
    return;
}
function asyncIteratorToAsyncFunction(f) {
    return async function(...args) {
        for await (const _ of asyncIteratorWithResult(f(...args))){
            if (_.done) return _.value;
        }
        throw new TypeError('Invalid iterator state');
    };
}
function memorizeAsyncGenerator(f, getKey, expireAfter) {
    const iterCache = new Map();
    const progressCache = new WeakMap();
    return async function* memorizedAsyncGenerator(...args) {
        const key = getKey(...args);
        var ref;
        const iter = (ref = iterCache.get(key)) !== null && ref !== void 0 ? ref : f(...args);
        iterCache.set(key, iter);
        const process = progressCache.get(iter);
        if (!process) {
            setTimeout(()=>iterCache.delete(key)
            , expireAfter);
            const arr = [];
            progressCache.set(iter, arr);
            try {
                for await (const _ of asyncIteratorWithResult(iter, (x)=>arr.push(x)
                )){
                    if (_.done) return _.value;
                    yield _.value;
                }
            } catch  {
                iterCache.delete(key);
            }
        } else {
            let index = 0;
            while(index < process.length){
                const p = await process[index];
                if (p.done) return p.value;
                yield p.value;
                index += 1;
            }
        }
        // cache not working
        for await (const _ of asyncIteratorWithResult(f(...args))){
            if (_.done) return _.value;
            yield _.value;
        }
        throw new Error('Unreachable');
    };
}
async function asyncIteratorToArray(it) {
    const arr = [];
    for await (const x of it)arr.push(x);
    return arr;
}


/***/ }),

/***/ 16760:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59099de55fb0e5132fb9.png";

/***/ }),

/***/ 93894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6f6f6a9e71495dcb147.png";

/***/ }),

/***/ 86348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05b047fd9a2685c83493.png";

/***/ }),

/***/ 486:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ce52a3440dbeb9d55ef.png";

/***/ })

}]);