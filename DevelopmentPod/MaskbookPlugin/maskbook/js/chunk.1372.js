"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1372,9613],{

/***/ 67463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89650);


const iOSFix =  true ? __webpack_require__.e(/* import() */ 426).then(__webpack_require__.bind(__webpack_require__, 40426)).then(({ default: ready  })=>ready()
) : 0;
function createDBAccess(opener) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>db = undefined
            , {
                once: true
            });
        }
        db = undefined;
    }
    return async ()=>{
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                const t = db.transaction([
                    db.objectStoreNames[0]
                ], 'readonly', {});
                t.commit();
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean, {
            once: true
        });
        db.addEventListener('error', clean, {
            once: true
        });
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>pendingOpen = db = undefined
            , {
                once: true
            });
        }
        pendingOpen = db = undefined;
    }
    let pendingOpen;
    async function open() {
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
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
        , {
            once: true
        });
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

/***/ 9915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ hasNativeAPI),
  "Nz": () => (/* binding */ nativeAPI)
});

// UNUSED EXPORTS: sharedNativeAPI

// EXTERNAL MODULE: ../../node_modules/.pnpm/async-call-rpc@6.0.1/node_modules/async-call-rpc/out/full.mjs
var full = __webpack_require__(73302);
;// CONCATENATED MODULE: ./shared/native-rpc/iOS.channel.ts
// cspell:disable-next-line
const key = 'maskbookjsonrpc';
class iOSWebkitChannel {
    on(cb) {
        this.listener.add(cb);
        return ()=>void this.listener.delete(cb)
        ;
    }
    send(data) {
        globalThis.webkit.messageHandlers[key].postMessage(data);
    }
    constructor(){
        this.listener = new Set();
        document.addEventListener(key, (e)=>{
            const detail = e.detail;
            for (const f of this.listener){
                try {
                    f(detail);
                } catch  {}
            }
        });
    }
}

;// CONCATENATED MODULE: ./shared/native-rpc/index.ts



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,full/* AsyncCall */.LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 3321).then(__webpack_require__.bind(__webpack_require__, 3321)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new iOSWebkitChannel()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 49315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decryptComment": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptComment),
/* harmony export */   "decryptMessage1To1": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptMessage1To1),
/* harmony export */   "decryptMessage1ToNByMyself": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptMessage1ToNByMyself),
/* harmony export */   "decryptMessage1ToNByOther": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptMessage1ToNByOther),
/* harmony export */   "decryptWithAES": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.decryptWithAES),
/* harmony export */   "encrypt1To1": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encrypt1To1),
/* harmony export */   "encrypt1ToN": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encrypt1ToN),
/* harmony export */   "encryptComment": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encryptComment),
/* harmony export */   "encryptWithAES": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.encryptWithAES),
/* harmony export */   "extractAESKeyInMessage": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.extractAESKeyInMessage),
/* harmony export */   "generateOthersAESKeyEncrypted": () => (/* reexport safe */ _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__.generateOthersAESKeyEncrypted),
/* harmony export */   "publicSharedAESKey": () => (/* binding */ publicSharedAESKey),
/* harmony export */   "typedMessageStringify": () => (/* binding */ typedMessageStringify),
/* harmony export */   "typedMessageParse": () => (/* binding */ typedMessageParse)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98878);
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ 

// @ts-ignore
const publicSharedAESKey = {
    alg: 'A256GCM',
    ext: true,
    /* cspell:disable-next-line */ k: '3Bf8BJ3ZPSMUM2jg2ThODeLuRRD_-_iwQEaeLdcQXpg',
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
    if (!(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .isTypedMessageText */ .Rz)(x)) throw new Error('Not supported typed message.');
    if (!x.meta || x.meta.size === 0) return x.content;
    const obj = {};
    for (const [a, b] of x.meta)obj[a] = b;
    return JSON.stringify(obj) + '\u{1F9E9}' + x.content;
}
function typedMessageParse(x) {
    const [maybeMetadata, ...end] = x.split('\u{1F9E9}');
    try {
        const json = JSON.parse(maybeMetadata);
        if (typeof json !== 'object' || json === null || Object.keys(json).length === 0) throw new Error('Not a metadata');
        return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(end.join('\u{1F9E9}'), new Map(Object.entries(json)));
    } catch  {}
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .makeTypedMessageText */ .P)(x);
}


/***/ }),

/***/ 98878:
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
/* harmony import */ var _crypto_alpha_40__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
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

/***/ 12690:
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
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14381);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49613);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6057);
/* harmony import */ var _modules_workers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35124);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87470);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69694);
/* eslint @dimensiondev/unicode-specific-set: ["error", { "only": "code" }] */ /**
 * @deprecated This version of payload is not in use.
 * Please goto Crypto alpha v38
 */ 





// #region Derive AES Key from ECDH key
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
    const derivedKey = await _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.aes_to_raw */ .i.aes_to_raw(await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__/* .derive_AES_GCM_256_Key_From_ECDH_256k1_Keys */ .Kn)(pr, op));
    const _salt = typeof salt === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(salt) : salt;
    const UntitledUint8Array = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(new Uint8Array(derivedKey), _salt);
    const password = await crypto.subtle.digest('SHA-256', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(UntitledUint8Array, _salt), (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('KEY')));
    const iv_pre = new Uint8Array(await crypto.subtle.digest('SHA-256', (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .concatArrayBuffer */ .v_)(UntitledUint8Array, _salt), (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)('IV'))));
    const iv = new Uint8Array(16);
    for(let i = 0; i <= 16; i += 1){
        // eslint-disable-next-line no-bitwise
        iv[i] = iv_pre[i] ^ iv_pre[16 + i];
    }
    const key = await _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.raw_to_aes */ .i.raw_to_aes(password);
    return {
        key,
        salt: _salt,
        iv
    };
}
// #endregion
// #region encrypt text
/**
 * Encrypt 1 to 1
 */ async function encrypt1To1(info) {
    const { version , privateKeyECDH , othersPublicKeyECDH  } = info;
    let { content  } = info;
    if (typeof content === 'string') content = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(content);
    const { iv , key , salt  } = await deriveAESKey(privateKeyECDH, othersPublicKeyECDH);
    const encryptedContent = await _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(key, iv, content);
    return {
        salt,
        encryptedContent,
        version: -40
    };
}
async function generateOthersAESKeyEncrypted(version, AESKey, privateKeyECDH, othersPublicKeyECDH) {
    const exportedAESKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(JSON.stringify(AESKey));
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
                salt: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(encrypted.salt),
                encryptedKey: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(encrypted.encryptedContent)
            }
        };
    }));
}
/**
 * Encrypt 1 to N
 */ async function encrypt1ToN(info) {
    const { version , content , othersPublicKeyECDH , privateKeyECDH , ownersLocalKey , iv  } = info;
    const AESKey = await _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.generate_aes_gcm */ .i.generate_aes_gcm();
    const encryptedContent = await _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(AESKey, iv, typeof content === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(content) : content);
    const exportedAESKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(JSON.stringify(AESKey));
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
// #endregion
// #region decrypt text
/**
 * Decrypt 1 to 1
 */ async function decryptMessage1To1(info) {
    const { anotherPublicKeyECDH , version , salt , encryptedContent , privateKeyECDH  } = info;
    const encrypted = typeof encryptedContent === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(encryptedContent) : encryptedContent;
    const { iv , key  } = await deriveAESKey(privateKeyECDH, anotherPublicKeyECDH, salt);
    return _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.decrypt_aes_gcm */ .i.decrypt_aes_gcm(key, iv, encrypted);
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
            resolvedAESKey = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(result);
        } catch  {}
    }));
    if (resolvedAESKey === null) throw new Error(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('service_not_share_target'));
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
    const iv = typeof _iv === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(_iv) : _iv;
    const encryptedKey = typeof encodedEncryptedKey === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(encodedEncryptedKey) : encodedEncryptedKey;
    const decryptedAESKeyJWK = JSON.parse((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(await decryptWithAES({
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
    const iv = typeof info.iv === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(info.iv) : info.iv;
    const encrypted = typeof info.encrypted === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(info.encrypted) : info.encrypted;
    return _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.decrypt_aes_gcm */ .i.decrypt_aes_gcm(aesKey, iv, encrypted);
}
async function encryptWithAES(info) {
    const iv = info.iv ? info.iv : crypto.getRandomValues(new Uint8Array(16));
    const content = typeof info.content === 'string' ? (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(info.content) : info.content;
    const encrypted = await _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.encrypt_aes_gcm */ .i.encrypt_aes_gcm(info.aesKey, iv, content);
    return {
        content: encrypted,
        iv
    };
}
// #endregion
// #region Comment
function extractCommentPayload(text) {
    const [_, toEnd] = text.split('\u{1F3B6}2/4|');
    const [content, _2] = (toEnd || '').split(':||');
    if (content.length) return content;
    return;
}
const getCommentKey = (0,_utils_pure__WEBPACK_IMPORTED_MODULE_1__/* .memoizePromise */ .J3)(async function(postIV, postContent) {
    const pbkdf = await _modules_workers__WEBPACK_IMPORTED_MODULE_3__/* .CryptoWorker.import_pbkdf2 */ .i.import_pbkdf2((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(postContent));
    const aes = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__/* .derive_AES_GCM_256_Key_From_PBKDF2 */ .SW)(pbkdf, (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(postIV));
    return aes;
}, (a, b)=>a + b
);
// * Payload format: 🎶2/4|encrypted_comment:||
async function encryptComment(postIV, postContent, comment) {
    if (typeof postIV !== 'string') postIV = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(postIV);
    if (typeof postContent !== 'string') postContent = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(postContent);
    const key = await getCommentKey(postIV, postContent);
    const x = await encryptWithAES({
        content: comment,
        aesKey: key,
        iv: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(postIV)
    });
    return `\u{1F3B6}2/4|${(0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(x.content)}:||`;
}
async function decryptComment(postIV, postContent, encryptComment1) {
    if (typeof postIV !== 'string') postIV = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)(postIV);
    if (typeof postContent !== 'string') postContent = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(postContent);
    if (typeof encryptComment1 !== 'string') encryptComment1 = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(encryptComment1);
    const payload = extractCommentPayload(encryptComment1);
    if (!payload) return null;
    const key = await getCommentKey(postIV, postContent);
    try {
        const x = await decryptWithAES({
            aesKey: key,
            iv: (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(postIV),
            encrypted: payload
        });
        return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeText */ .rj)(x);
    } catch  {
        return null;
    }
}
// #endregion
function typedMessageStringify(x) {
    throw new Error('Not supported typed message in version older than v39.');
}
function typedMessageParse(x) {
    return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_4__/* .makeTypedMessageText */ .P)(x);
}


/***/ }),

/***/ 90600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X2": () => (/* reexport */ createPluginDatabase)
});

// UNUSED EXPORTS: createPluginDBAccess, pluginDataHasValidKeyPath, toStore

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.0/node_modules/idb/with-async-ittr.js
var with_async_ittr = __webpack_require__(20326);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(67463);
;// CONCATENATED MODULE: ./src/database/Plugin/base.ts


// #endregion
const db = (0,openDB/* createDBAccess */.Z_)(()=>{
    return (0,with_async_ittr/* openDB */.X3)('maskbook-plugin-data', 2, {
        async upgrade (db1, oldVersion, newVersion, transaction) {
            if (oldVersion < 1) db1.createObjectStore('PluginStore');
            if (oldVersion < 2) {
                const data = await transaction.objectStore('PluginStore').getAll();
                db1.deleteObjectStore('PluginStore');
                const os = db1.createObjectStore('PluginStore', {
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
const createPluginDBAccess = db;
function toStore(plugin_id, value) {
    return {
        plugin_id,
        value
    };
}

;// CONCATENATED MODULE: ./src/database/Plugin/wrap-plugin-database.ts

/**
 * Avoid calling it directly.
 *
 * You should get the instance from WorkerContext when the plugin is initialized.
 *
 * ```ts
 * let storage: Plugin.Worker.Storage<T | T2> | null = null
 * const worker: Plugin.Worker.Definition = {
 *     ...base,
 *     init(signal, context) {
 *         storage = context.getDatabaseStorage()
 *         // get it here, instance of calling this function directly.
 *     },
 * }
 * ```
 */ function createPluginDatabase(plugin_id, signal) {
    let livingTransaction = undefined;
    let ended = false;
    signal === null || signal === void 0 ? void 0 : signal.addEventListener('abort', ()=>{
        // give some extra time after the plugin shutdown to store data.
        setTimeout(()=>ended = true
        , 1500);
    });
    function key(data) {
        return IDBKeyRange.only([
            plugin_id,
            data.type,
            data.id
        ]);
    }
    function ensureAlive() {
        if (ended) throw new Error(`[@masknet/plugin-infra] Storage instance for ${plugin_id} has been expired.`);
    }
    return {
        async get (type, id) {
            const t = await c('r');
            const data = await t.store.get(key({
                type,
                id
            }));
            if (!data) return undefined;
            return data.value;
        },
        async has (type, id) {
            const t = await c('r');
            const count = await t.store.count(key({
                type,
                id
            }));
            return count > 0;
        },
        async add (data) {
            const t = await c('rw');
            if (!pluginDataHasValidKeyPath(data)) throw new TypeError("Data doesn't have a valid key path");
            if (await t.store.get(key(data))) await t.store.put(toStore(plugin_id, data));
            else await t.store.add(toStore(plugin_id, data));
            t.commit();
        },
        async remove (type, id) {
            const t = await c('rw');
            await t.store.delete(key({
                type,
                id
            }));
            t.commit();
        },
        async *iterate (type) {
            const db = await c('r');
            const cursor = await db.objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const roCursor = {
                    value: each.value.value
                };
                yield roCursor;
            }
        },
        async *iterate_mutate (type) {
            const cursor = await (await c('rw')).objectStore('PluginStore').index('type').openCursor(IDBKeyRange.only([
                plugin_id,
                type
            ]));
            if (!cursor) return;
            for await (const each of cursor){
                const rwCursor = {
                    value: each.value.value,
                    delete: ()=>each.delete()
                    ,
                    update: async (data)=>{
                        await each.update(toStore(plugin_id, data));
                    }
                };
                yield rwCursor;
            }
        }
    };
    async function c(usage) {
        var ref;
        ensureAlive();
        if (usage === 'rw' && ((ref = livingTransaction) === null || ref === void 0 ? void 0 : ref.mode) === 'readonly') invalidateTransaction();
        try {
            await (livingTransaction === null || livingTransaction === void 0 ? void 0 : livingTransaction.store.openCursor());
        } catch  {
            invalidateTransaction();
        }
        if (livingTransaction === undefined) {
            const db = await createPluginDBAccess();
            const tx = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
            livingTransaction = tx;
            // Oops, workaround for https://bugs.webkit.org/show_bug.cgi?id=216769 or https://github.com/jakearchibald/idb/issues/201
            try {
                await tx.store.openCursor();
            } catch  {
                livingTransaction = db.transaction('PluginStore', usage === 'r' ? 'readonly' : 'readwrite');
                return livingTransaction;
            }
            return tx;
        }
        return livingTransaction;
    }
    function invalidateTransaction() {
        livingTransaction = undefined;
    }
}

;// CONCATENATED MODULE: ./src/database/Plugin/index.ts




/***/ }),

/***/ 414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ cryptoProviderTable)
/* harmony export */ });
/* harmony import */ var _crypto_crypto_alpha_38__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49315);
/* harmony import */ var _crypto_crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98878);
/* harmony import */ var _crypto_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12690);



const cryptoProviderTable = {
    [-40]: _crypto_crypto_alpha_40__WEBPACK_IMPORTED_MODULE_2__,
    [-39]: _crypto_crypto_alpha_39__WEBPACK_IMPORTED_MODULE_1__,
    [-38]: _crypto_crypto_alpha_38__WEBPACK_IMPORTED_MODULE_0__
};


/***/ }),

/***/ 32564:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ steganographyDownloadImage)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14381);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92610);


const steganographyDownloadImage = (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .memoizePromise */ .J3)(async (url)=>(0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .blobToArrayBuffer */ .vZ)(await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .downloadUrl */ .GR)(url))
, void 0);


/***/ }),

/***/ 17235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ verifyOthersProve)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _social_network_utils_text_payload_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29492);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87926);



async function verifyOthersProve(bio, others) {
    var ref, ref1;
    const compressedX = typeof bio === 'string' ? (await (0,_social_network_utils_text_payload_worker__WEBPACK_IMPORTED_MODULE_1__/* .decodePublicKeyWorker */ .IC)(others.network))(bio) : [
        bio.raw
    ];
    if (!compressedX) return false;
    const publicKey = compressedX.map((x)=>{
        try {
            return (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .decompressSecp256k1Key */ .qX)(x);
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
    const hasPrivate = ((ref = await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonaRecord */ .yQ)((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(publicKey))) === null || ref === void 0 ? void 0 : ref.privateKey) || ((ref1 = await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .queryPersonaRecord */ .yQ)(others)) === null || ref1 === void 0 ? void 0 : ref1.privateKey);
    if (!hasPrivate) await (0,_database__WEBPACK_IMPORTED_MODULE_2__/* .createProfileWithPersona */ .lr)(others, {
        connectionConfirmState: 'pending'
    }, {
        publicKey
    });
    // TODO: unhandled case: if the profile is connected but a different key.
    return true;
}


/***/ }),

/***/ 45960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "te": () => (/* binding */ GunWorker),
/* harmony export */   "Oo": () => (/* binding */ GunAPI),
/* harmony export */   "OG": () => (/* binding */ GunAPISubscribe)
/* harmony export */ });
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62840);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49613);




let GunWorker;
if (true) {
    GunWorker = new _utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .OnDemandWorker */ .G1(__webpack_require__.tu(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(5049), __webpack_require__.b)), {
        name: 'Gun'
    });
// we're in webpack bundle
}
const options = {
    channel: new async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_3__/* .WorkerChannel */ .i(GunWorker),
    serializer: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .serializer */ .GM
};
const GunAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)({}, options);
const GunAPISubscribe = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncGeneratorCall */ .rc)({}, options);


/***/ }),

/***/ 29492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IC": () => (/* binding */ decodePublicKeyWorker),
/* harmony export */   "QO": () => (/* binding */ encodeTextPayloadWorker),
/* harmony export */   "s1": () => (/* binding */ decodeTextPayloadWorker)
/* harmony export */ });
/* unused harmony export encodePublicKeyWorker */
/* harmony import */ var _worker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32338);

async function encodePublicKeyWorker(query) {
    var ref;
    const f = (ref = (await getNetworkWorker(query)).utils.publicKeyEncoding) === null || ref === void 0 ? void 0 : ref.encoder;
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

/***/ 94165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ assertNonNull)
/* harmony export */ });
/**
 * Ensure a value not null or undefined.
 */ function assertNonNull(val, message = 'Unexpected nil value detected') {
    if (val === null || val === undefined) throw new Error(message);
    return val;
}


/***/ }),

/***/ 23720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}


/***/ }),

/***/ 69370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ startEffects)
/* harmony export */ });
function startEffects(hot) {
    const ac = new AbortController();
    hot === null || hot === void 0 ? void 0 : hot.dispose(()=>ac.abort()
    );
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback());
            } catch (error) {
                console.error(error);
            }
        }
    };
}


/***/ }),

/***/ 49613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ utils_pure_crypto/* CryptoKeyToJsonWebKey */.i),
  "rP": () => (/* reexport */ EMPTY_LIST),
  "G1": () => (/* reexport */ OnDemandWorker),
  "Cq": () => (/* reexport */ assertion/* assertNonNull */.C),
  "J3": () => (/* reexport */ memoizePromise),
  "mS": () => (/* reexport */ type/* restorePrototype */.mS),
  "Yo": () => (/* reexport */ type/* restorePrototypeArray */.Yo),
  "Wu": () => (/* reexport */ hmr/* startEffects */.W)
});

// UNUSED EXPORTS: EMPTY_OBJECT, assert, nonNullable

// EXTERNAL MODULE: ./utils-pure/type/index.ts + 1 modules
var type = __webpack_require__(76871);
// EXTERNAL MODULE: ./utils-pure/assertion/index.ts
if (1711 != __webpack_require__.j) {
var assertion = __webpack_require__(94165);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js
var memoize = __webpack_require__(77184);
;// CONCATENATED MODULE: ./utils-pure/memoize.ts

/**
 * The promise version of lodash-es/memoize
 * @param f An async function
 * @param resolver If the function has 1 param, it can be undefined
 * as `x => x`. If it has more than 1 param, you must specify a function
 * to map the param the memoize key.
 */ function memoizePromise(f, resolver) {
    if (resolver === undefined) resolver = (x)=>x
    ;
    const memorizedFunction = (0,memoize/* default */.Z)(async function(...args) {
        try {
            // ? DO NOT remove "await" here
            return await f(...args);
        } catch (error) {
            memorizedFunction.cache.delete(resolver(...args));
            throw error;
        }
    }, resolver);
    return memorizedFunction;
}

;// CONCATENATED MODULE: ./utils-pure/misc.ts
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

// EXTERNAL MODULE: ./utils-pure/hmr.ts
var hmr = __webpack_require__(69370);
// EXTERNAL MODULE: ./utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(23720);
;// CONCATENATED MODULE: ./utils-pure/OnDemandWorker/index.ts
// Implementation detail
/**
 * A Worker-like class that create/destory Worker on demand.
 *
 * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
 * This "Alive" MUST be the first message.
 */ class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, 60 * 1000));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.__init);
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        var ref;
        (ref = this.worker) === null || ref === void 0 ? void 0 : ref.terminate();
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>{
            var ref;
            return (ref = this.worker) === null || ref === void 0 ? void 0 : ref.postMessage(...args);
        });
    }
    set onmessage(_) {
        OnDemandWorker_throws();
    }
    set onerror(_) {
        OnDemandWorker_throws();
    }
    set onmessageerror(_) {
        OnDemandWorker_throws();
    }
    /**
     * A Worker-like class that create/destory Worker on demand.
     *
     * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
     * This "Alive" MUST be the first message.
     */ constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.lastUsed = Date.now();
        this.__init = init;
        this.inactiveTimeToTerminate = 15 * 60 * 1000;
        var ref1;
        this.log((ref1 = (ref = init[1]) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : 'anonymous Worker', 'created with', ...init);
    }
}
function OnDemandWorker_throws() {
    throw new TypeError('Please use addEventListener');
}
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}

;// CONCATENATED MODULE: ./utils-pure/index.ts









/***/ }),

/***/ 76871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "mS": () => (/* reexport */ restorePrototype),
  "Yo": () => (/* reexport */ restorePrototypeArray)
});

// UNUSED EXPORTS: assert, nonNullable

;// CONCATENATED MODULE: ./utils-pure/type/prototype.ts
/**
 * @description Restore prototype on an object. This does not work with classes that uses ES private field.
 * @example
 * restorePrototype({ value: 1 }, SomeClass.prototype)
 * @param obj The prototype-less object.
 * @param prototype The prototype object
 * @returns The original object with prototype restored.
 */ function restorePrototype(obj, prototype) {
    if (!obj) return obj;
    Object.setPrototypeOf(obj, prototype);
    return obj;
}
function restorePrototypeArray(arr, prototype) {
    if (!arr) return arr;
    arr.forEach((x)=>Object.setPrototypeOf(x, prototype)
    );
    return arr;
}

;// CONCATENATED MODULE: ./utils-pure/type/index.ts

function assert(x, ...args) {
    console.assert(x, ...args);
    if (!x) throw new Error('Assert failed!');
}
function nonNullable(x) {
    return x !== undefined && x !== null;
}


/***/ }),

/***/ 46517:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85621);


const advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get(target, prop) {
        if (!advanceMethodProps.includes(prop))
            return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function (...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    },
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor)
        return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.a.set(proxiedCursor, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u)(cursor));
    while (cursor) {
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return ((prop === Symbol.asyncIterator &&
        (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore, IDBCursor])) ||
        (prop === 'iterate' && (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.i)(target, [IDBIndex, IDBObjectStore])));
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get(target, prop, receiver) {
        if (isIteratorProp(target, prop))
            return iterate;
        return oldTraps.get(target, prop, receiver);
    },
    has(target, prop) {
        return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    },
}));


/***/ })

}]);