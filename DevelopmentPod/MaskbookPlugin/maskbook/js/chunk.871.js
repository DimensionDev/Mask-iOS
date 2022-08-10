"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[871],{

/***/ 50871:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ee": () => (/* reexport */ createEmptyNormalizedBackup),
  "lK": () => (/* reexport */ decryptBackup),
  "Hb": () => (/* reexport */ encryptBackup),
  "ck": () => (/* reexport */ generateBackupRAW),
  "Vt": () => (/* reexport */ getBackupPreviewInfo),
  "wY": () => (/* reexport */ normalizeBackup)
});

// UNUSED EXPORTS: BackupErrors

// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
if (!/^(1711|3352)$/.test(__webpack_require__.j)) {
var encode = __webpack_require__(82151);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
if (!/^(1711|3352)$/.test(__webpack_require__.j)) {
var decode = __webpack_require__(92415);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
;// CONCATENATED MODULE: ../backup-format/src/BackupErrors.ts
var BackupErrors;
(function(BackupErrors) {
    BackupErrors["UnknownFormat"] = '[@masknet/backup-format] Unknown format.';
    BackupErrors["WrongCheckSum"] = '[@masknet/backup-format] Bad checksum.';
})(BackupErrors || (BackupErrors = {}));

;// CONCATENATED MODULE: ../backup-format/src/container/index.ts


const MAGIC_HEADER_Version0 = new TextEncoder().encode('MASK-BACKUP-V000');
const CHECKSUM_LENGTH = 32;
var SupportedVersions;
(function(SupportedVersions) {
    SupportedVersions[SupportedVersions["Version0"] = 0] = "Version0";
})(SupportedVersions || (SupportedVersions = {}));
function getMagicHeader(version) {
    if (version === 0) return MAGIC_HEADER_Version0;
    (0,esm/* unreachable */.t1)(version);
}
/** @internal */ async function createContainer(version, data) {
    const checksum = await crypto.subtle.digest({
        name: 'SHA-256'
    }, data);
    return (0,esm/* concatArrayBuffer */.v_)(getMagicHeader(version), data, checksum);
}
/** @internal */ async function parseEncryptedJSONContainer(version, _container) {
    const container = new Uint8Array(_container);
    for (const [index, value] of getMagicHeader(version).entries()){
        if (container[index] !== value) throw new TypeError(BackupErrors.UnknownFormat);
    }
    const data = container.slice(MAGIC_HEADER_Version0.length, -CHECKSUM_LENGTH);
    const sum = new Uint8Array(await crypto.subtle.digest({
        name: 'SHA-256'
    }, data));
    for (const [index1, value1] of container.slice(-CHECKSUM_LENGTH).entries()){
        if (sum[index1] !== value1) throw new TypeError(BackupErrors.WrongCheckSum);
    }
    return data;
}

;// CONCATENATED MODULE: ../backup-format/src/version-3/index.ts



async function encryptBackup(password, binaryBackup) {
    const [pbkdf2IV, AESKey] = await createAESFromPassword(password);
    const AESParam = {
        name: 'AES-GCM',
        iv: crypto.getRandomValues(new Uint8Array(16))
    };
    const encrypted = new Uint8Array(await crypto.subtle.encrypt(AESParam, AESKey, binaryBackup));
    const container = (0,encode/* encode */.c)([
        pbkdf2IV,
        AESParam.iv,
        encrypted
    ]);
    return createContainer(SupportedVersions.Version0, container);
}
async function decryptBackup(password, data) {
    const container = await parseEncryptedJSONContainer(SupportedVersions.Version0, data);
    const _ = (0,decode/* decode */.Jx)(container);
    if (!Array.isArray(_) || _.length !== 3) throw new TypeError(BackupErrors.UnknownFormat);
    if (!_.every((x)=>x instanceof Uint8Array
    )) throw new TypeError(BackupErrors.UnknownFormat);
    const [pbkdf2IV, encryptIV, encrypted] = _;
    const aes = await getAESFromPassword(password, pbkdf2IV);
    const AESParam = {
        name: 'AES-GCM',
        iv: encryptIV
    };
    const decryptedBackup = await crypto.subtle.decrypt(AESParam, aes, encrypted);
    return decryptedBackup;
}
async function createAESFromPassword(password) {
    const pbkdf = await crypto.subtle.importKey('raw', password, 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
    const iv = crypto.getRandomValues(new Uint8Array(16));
    const aes = await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: iv,
        iterations: 10000,
        hash: 'SHA-256'
    }, pbkdf, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    return [
        iv,
        aes
    ];
}
async function getAESFromPassword(password, iv) {
    const pbkdf = await crypto.subtle.importKey('raw', password, 'PBKDF2', false, [
        'deriveBits',
        'deriveKey'
    ]);
    const aes = await crypto.subtle.deriveKey({
        name: 'PBKDF2',
        salt: iv,
        iterations: 10000,
        hash: 'SHA-256'
    }, pbkdf, {
        name: 'AES-GCM',
        length: 256
    }, true, [
        'encrypt',
        'decrypt'
    ]);
    return aes;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js + 3 modules
var ts_results_esm = __webpack_require__(48160);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(54764);
;// CONCATENATED MODULE: ../backup-format/src/version-0/index.ts




function isBackupVersion0(obj) {
    if (!(0,isObjectLike/* default */.Z)(obj)) return false;
    try {
        const data = obj;
        if (!data.local || !data.key || !data.key.key || !data.key.key.privateKey || !data.key.key.publicKey) return false;
        return true;
    } catch  {
        return false;
    }
}
async function normalizeBackupVersion0(file) {
    const backup = createEmptyNormalizedBackup();
    backup.meta.version = 0;
    backup.meta.maskVersion = (0,ts_results_esm/* Some */.bD)('<=1.3.2');
    const { local  } = file;
    const { username , key  } = file.key;
    const { publicKey , privateKey  } = key;
    if (!(0,src/* isEC_Public_JsonWebKey */.d8)(publicKey)) return backup;
    const persona = {
        identifier: await (0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(publicKey),
        publicKey,
        linkedProfiles: new Map(),
        localKey: (0,src/* isAESJsonWebKey */.bG)(local) ? (0,ts_results_esm/* Some */.bD)(local) : ts_results_esm/* None */.Hq,
        privateKey: (0,src/* isEC_Private_JsonWebKey */.PQ)(privateKey) ? (0,ts_results_esm/* Some */.bD)(privateKey) : ts_results_esm/* None */.Hq,
        mnemonic: ts_results_esm/* None */.Hq,
        nickname: ts_results_esm/* None */.Hq,
        createdAt: ts_results_esm/* None */.Hq,
        updatedAt: ts_results_esm/* None */.Hq
    };
    backup.personas.set(persona.identifier, persona);
    if (username && username !== '$unknown' && username !== '$local') {
        const profile = {
            identifier: src/* ProfileIdentifier.of */.WO.of('facebook.com', username).unwrap(),
            linkedPersona: (0,ts_results_esm/* Some */.bD)(persona.identifier),
            createdAt: ts_results_esm/* None */.Hq,
            updatedAt: ts_results_esm/* None */.Hq,
            localKey: (0,src/* isAESJsonWebKey */.bG)(local) ? (0,ts_results_esm/* Some */.bD)(local) : ts_results_esm/* None */.Hq,
            nickname: ts_results_esm/* None */.Hq
        };
        backup.profiles.set(profile.identifier, profile);
        persona.linkedProfiles.set(profile.identifier, void 0);
    }
    return backup;
}

;// CONCATENATED MODULE: ../backup-format/src/version-1/index.ts




function isBackupVersion1(obj) {
    if (!(0,isObjectLike/* default */.Z)(obj)) return false;
    try {
        const data = obj;
        if (data.version !== 1) return false;
        if (!Array.isArray(data.whoami)) return false;
        if (!data.whoami) return false;
        return true;
    } catch  {
        return false;
    }
}
async function normalizeBackupVersion1(file) {
    const backup = createEmptyNormalizedBackup();
    backup.meta.version = 1;
    if (!file.grantedHostPermissions) backup.meta.maskVersion = (0,ts_results_esm/* Some */.bD)('<=1.5.2');
    else if (!file.maskbookVersion) backup.meta.maskVersion = (0,ts_results_esm/* Some */.bD)('<=1.6.0');
    if (file.grantedHostPermissions) {
        backup.settings.grantedHostPermissions = file.grantedHostPermissions;
    }
    const { whoami , people  } = file;
    for (const { network , publicKey , userId , nickname , localKey , privateKey  } of [
        ...whoami,
        ...people || []
    ]){
        const identifier = src/* ProfileIdentifier.of */.WO.of(network, userId).unwrap();
        const profile = {
            identifier,
            nickname: nickname ? (0,ts_results_esm/* Some */.bD)(nickname) : ts_results_esm/* None */.Hq,
            createdAt: ts_results_esm/* None */.Hq,
            updatedAt: ts_results_esm/* None */.Hq,
            localKey: ts_results_esm/* None */.Hq,
            linkedPersona: ts_results_esm/* None */.Hq
        };
        if ((0,src/* isEC_Public_JsonWebKey */.d8)(publicKey)) {
            const personaID = await (0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(publicKey);
            const persona = backup.personas.get(personaID) || {
                identifier: personaID,
                nickname: ts_results_esm/* None */.Hq,
                linkedProfiles: new Map(),
                publicKey,
                privateKey: ts_results_esm/* None */.Hq,
                localKey: ts_results_esm/* None */.Hq,
                mnemonic: ts_results_esm/* None */.Hq,
                createdAt: ts_results_esm/* None */.Hq,
                updatedAt: ts_results_esm/* None */.Hq
            };
            profile.linkedPersona = (0,ts_results_esm/* Some */.bD)(personaID);
            if ((0,src/* isEC_Private_JsonWebKey */.PQ)(privateKey)) {
                persona.privateKey = (0,ts_results_esm/* Some */.bD)(privateKey);
            }
            backup.personas.set(personaID, persona);
            persona.linkedProfiles.set(profile.identifier, void 0);
        }
        if ((0,src/* isAESJsonWebKey */.bG)(localKey)) {
            profile.localKey = (0,ts_results_esm/* Some */.bD)(localKey);
            if (profile.linkedPersona.some && backup.personas.has(profile.linkedPersona.val)) {
                backup.personas.get(profile.linkedPersona.val).localKey = (0,ts_results_esm/* Some */.bD)(localKey);
            }
        }
    }
    return backup;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/elliptic@6.5.4/node_modules/elliptic/lib/elliptic.js
var elliptic = __webpack_require__(75367);
var elliptic_default = /*#__PURE__*/__webpack_require__.n(elliptic);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pvtsutils@1.3.2/node_modules/pvtsutils/build/index.js
var build = __webpack_require__(99612);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
if (/^(1711|3352)$/.test(__webpack_require__.j)) {
var decode = __webpack_require__(92415);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
if (/^(1711|3352)$/.test(__webpack_require__.j)) {
var encode = __webpack_require__(82151);
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sum.js
var sum = __webpack_require__(59866);
;// CONCATENATED MODULE: ../backup-format/src/utils/hex2buffer.ts

/** @internal */ function hex2buffer(hexString, padded) {
    if (hexString.length % 2) {
        hexString = '0' + hexString;
    }
    let res = new Uint8Array(hexString.length / 2);
    for(let i = 0; i < hexString.length; i += 2){
        const c = hexString.slice(i, i + 2);
        res[(i - 1) / 2] = Number.parseInt(c, 16);
    }
    // BN padding
    if (padded) {
        let len = res.length;
        len = len > 32 ? len > 48 ? 66 : 48 : 32;
        if (res.length < len) {
            res = concat(new Uint8Array(len - res.length), res);
        }
    }
    return res;
}
/** @internal */ function concat(...buf) {
    const res = new Uint8Array((0,sum/* default */.Z)(buf.map((item)=>item.length
    )));
    let offset = 0;
    buf.forEach((item)=>{
        for(let i = 0; i < item.length; i += 1){
            res[offset + i] = item[i];
        }
        offset += item.length;
    });
    return res;
}

;// CONCATENATED MODULE: ../backup-format/src/version-2/index.ts








function isBackupVersion2(item) {
    try {
        const x = item;
        return x._meta_.version === 2;
    } catch  {}
    return false;
}
async function normalizeBackupVersion2(item) {
    const backup = createEmptyNormalizedBackup();
    backup.meta.version = 2;
    backup.meta.maskVersion = (0,ts_results_esm/* Some */.bD)(item._meta_.maskbookVersion);
    backup.meta.createdAt = (0,ts_results_esm/* Some */.bD)(new Date(item._meta_.createdAt));
    backup.settings.grantedHostPermissions = item.grantedHostPermissions;
    const { personas , posts , profiles , relations , wallets , plugin  } = item;
    for (const persona of personas){
        const { publicKey  } = persona;
        if (!(0,src/* isEC_Public_JsonWebKey */.d8)(publicKey)) continue;
        const identifier = await (0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(publicKey);
        const normalizedPersona = {
            identifier,
            linkedProfiles: new Map(),
            publicKey,
            privateKey: (0,src/* isEC_Private_JsonWebKey */.PQ)(persona.privateKey) ? (0,ts_results_esm/* Some */.bD)(persona.privateKey) : ts_results_esm/* None */.Hq,
            localKey: (0,src/* isAESJsonWebKey */.bG)(persona.localKey) ? (0,ts_results_esm/* Some */.bD)(persona.localKey) : ts_results_esm/* None */.Hq,
            createdAt: (0,ts_results_esm/* Some */.bD)(new Date(persona.createdAt)),
            updatedAt: (0,ts_results_esm/* Some */.bD)(new Date(persona.updatedAt)),
            nickname: persona.nickname ? (0,ts_results_esm/* Some */.bD)(persona.nickname) : ts_results_esm/* None */.Hq,
            mnemonic: ts_results_esm/* None */.Hq
        };
        for (const [profile] of persona.linkedProfiles){
            const id = src/* ProfileIdentifier.from */.WO.from(profile);
            if (id.none) continue;
            normalizedPersona.linkedProfiles.set(id.val, null);
        }
        if (persona.mnemonic) {
            const { words , parameter  } = persona.mnemonic;
            normalizedPersona.mnemonic = (0,ts_results_esm/* Some */.bD)({
                words,
                hasPassword: parameter.withPassword,
                path: parameter.path
            });
        }
        backup.personas.set(identifier, normalizedPersona);
    }
    for (const profile of profiles){
        const identifier = src/* ProfileIdentifier.from */.WO.from(profile.identifier);
        if (identifier.none) continue;
        const normalizedProfile = {
            identifier: identifier.val,
            createdAt: (0,ts_results_esm/* Some */.bD)(new Date(profile.createdAt)),
            updatedAt: (0,ts_results_esm/* Some */.bD)(new Date(profile.updatedAt)),
            nickname: profile.nickname ? (0,ts_results_esm/* Some */.bD)(profile.nickname) : ts_results_esm/* None */.Hq,
            linkedPersona: src/* ECKeyIdentifier.from */.ob.from(profile.linkedPersona),
            localKey: (0,src/* isAESJsonWebKey */.bG)(profile.localKey) ? (0,ts_results_esm/* Some */.bD)(profile.localKey) : ts_results_esm/* None */.Hq
        };
        backup.profiles.set(identifier.val, normalizedProfile);
    }
    for (const persona1 of backup.personas.values()){
        const toRemove = [];
        for (const profile of persona1.linkedProfiles.keys()){
            if (backup.profiles.get(profile)?.linkedPersona?.unwrapOr(undefined) === persona1.identifier) {
            // do nothing
            } else toRemove.push(profile);
        }
        for (const profile1 of toRemove)persona1.linkedProfiles.delete(profile1);
    }
    for (const post of posts){
        const identifier = src/* PostIVIdentifier.from */.bb.from(post.identifier);
        const postBy = src/* ProfileIdentifier.from */.WO.from(post.postBy);
        const encryptBy = src/* ECKeyIdentifier.from */.ob.from(post.encryptBy);
        if (identifier.none) continue;
        const interestedMeta = new Map();
        const normalizedPost = {
            identifier: identifier.val,
            foundAt: new Date(post.foundAt),
            postBy: postBy.unwrapOr(undefined),
            interestedMeta,
            encryptBy,
            summary: post.summary ? (0,ts_results_esm/* Some */.bD)(post.summary) : ts_results_esm/* None */.Hq,
            url: post.url ? (0,ts_results_esm/* Some */.bD)(post.url) : ts_results_esm/* None */.Hq,
            postCryptoKey: (0,src/* isAESJsonWebKey */.bG)(post.postCryptoKey) ? (0,ts_results_esm/* Some */.bD)(post.postCryptoKey) : ts_results_esm/* None */.Hq,
            recipients: ts_results_esm/* None */.Hq
        };
        if (post.recipients) {
            if (post.recipients === 'everyone') normalizedPost.recipients = (0,ts_results_esm/* Some */.bD)({
                type: 'public'
            });
            else {
                const map = new Map();
                for (const [recipient, { reason  }] of post.recipients){
                    const id = src/* ProfileIdentifier.from */.WO.from(recipient);
                    if (id.none) continue;
                    const reasons = [];
                    map.set(id.val, reasons);
                    for (const r of reason){
                        // we ignore the original reason because we no longer support group / auto sharing
                        reasons.push({
                            type: 'direct',
                            at: new Date(r.at)
                        });
                    }
                }
                normalizedPost.recipients = (0,ts_results_esm/* Some */.bD)({
                    type: 'e2e',
                    receivers: map
                });
            }
        }
        if (post.interestedMeta) normalizedPost.interestedMeta = MetaFromJson(post.interestedMeta);
        backup.posts.set(identifier.val, normalizedPost);
    }
    for (const relation of relations || []){
        const { profile , persona , favor  } = relation;
        const a = src/* ProfileIdentifier.from */.WO.from(profile);
        const b = src/* ECKeyIdentifier.from */.ob.from(persona);
        if (a.some && b.some) {
            backup.relations.push({
                profile: a.val,
                persona: b.val,
                favor
            });
        }
    }
    for (const wallet of wallets || []){
        if (wallet.privateKey?.d && !wallet.publicKey) {
            // @ts-ignore
            const ec = new ((elliptic_default()).ec || (elliptic_default())["default"].ec)('secp256k1');
            const key = ec.keyFromPrivate(wallet.privateKey.d);
            const hexPub = key.getPublic('hex').slice(2);
            const hexX = hexPub.slice(0, hexPub.length / 2);
            const hexY = hexPub.slice(hexPub.length / 2, hexPub.length);
            wallet.privateKey.x = build/* Convert.ToBase64Url */.ep.ToBase64Url(hex2buffer(hexX));
            wallet.privateKey.y = build/* Convert.ToBase64Url */.ep.ToBase64Url(hex2buffer(hexY));
        }
        const normalizedWallet = {
            address: wallet.address,
            name: wallet.name,
            passphrase: wallet.passphrase ? (0,ts_results_esm/* Some */.bD)(wallet.passphrase) : ts_results_esm/* None */.Hq,
            publicKey: (0,src/* isEC_Public_JsonWebKey */.d8)(wallet.publicKey) ? (0,ts_results_esm/* Some */.bD)(wallet.publicKey) : ts_results_esm/* None */.Hq,
            privateKey: (0,src/* isEC_Private_JsonWebKey */.PQ)(wallet.privateKey) ? (0,ts_results_esm/* Some */.bD)(wallet.privateKey) : ts_results_esm/* None */.Hq,
            mnemonic: wallet.mnemonic ? (0,ts_results_esm/* Some */.bD)({
                words: wallet.mnemonic.words,
                hasPassword: wallet.mnemonic.parameter.withPassword,
                path: wallet.mnemonic.parameter.path
            }) : ts_results_esm/* None */.Hq,
            createdAt: new Date(wallet.createdAt),
            updatedAt: new Date(wallet.updatedAt)
        };
        backup.wallets.push(normalizedWallet);
    }
    backup.plugins = plugin || {};
    return backup;
}
function generateBackupVersion2(item) {
    const now = new Date();
    const result = {
        _meta_: {
            maskbookVersion: item.meta.maskVersion.unwrapOr('>=2.5.0'),
            createdAt: Number(item.meta.createdAt.unwrapOr(now)),
            type: 'maskbook-backup',
            version: 2
        },
        grantedHostPermissions: item.settings.grantedHostPermissions,
        plugin: item.plugins,
        personas: [],
        posts: [],
        profiles: [],
        relations: [],
        wallets: [],
        userGroups: []
    };
    for (const [id3, data5] of item.personas){
        result.personas.push({
            identifier: id3.toText(),
            createdAt: Number(data5.createdAt.unwrapOr(now)),
            updatedAt: Number(data5.updatedAt.unwrapOr(now)),
            nickname: data5.nickname.unwrapOr(undefined),
            linkedProfiles: [
                ...data5.linkedProfiles.keys()
            ].map((id)=>[
                    id.toText(),
                    {
                        connectionConfirmState: 'confirmed'
                    }, 
                ]
            ),
            publicKey: data5.publicKey,
            privateKey: data5.privateKey.unwrapOr(undefined),
            mnemonic: data5.mnemonic.map((data)=>({
                    words: data.words,
                    parameter: {
                        path: data.path,
                        withPassword: data.hasPassword
                    }
                })
            ).unwrapOr(undefined),
            localKey: data5.localKey.unwrapOr(undefined)
        });
    }
    for (const [id1, data1] of item.profiles){
        result.profiles.push({
            identifier: id1.toText(),
            createdAt: Number(data1.createdAt.unwrapOr(now)),
            updatedAt: Number(data1.updatedAt.unwrapOr(now)),
            nickname: data1.nickname.unwrapOr(undefined),
            linkedPersona: data1.linkedPersona.unwrapOr(undefined)?.toText(),
            localKey: data1.localKey.unwrapOr(undefined)
        });
    }
    for (const [id2, data2] of item.posts){
        const item = {
            identifier: id2.toText(),
            foundAt: Number(data2.foundAt),
            postBy: data2.postBy?.toText() || 'person:localhost/$unknown',
            interestedMeta: MetaToJson(data2.interestedMeta),
            encryptBy: data2.encryptBy.unwrapOr(undefined)?.toText(),
            summary: data2.summary.unwrapOr(undefined),
            url: data2.url.unwrapOr(undefined),
            postCryptoKey: data2.postCryptoKey.unwrapOr(undefined),
            recipientGroups: [],
            recipients: []
        };
        result.posts.push(item);
        if (data2.recipients.some) {
            if (data2.recipients.val.type === 'public') item.recipients = 'everyone';
            else if (data2.recipients.val.type === 'e2e') {
                item.recipients = [];
                for (const [recipient, reasons] of data2.recipients.val.receivers){
                    if (!reasons.length) continue;
                    item.recipients.push([
                        recipient.toText(),
                        {
                            reason: [
                                {
                                    at: Number(reasons[0].at),
                                    type: 'direct'
                                }, 
                            ]
                        }, 
                    ]);
                }
            } else (0,esm/* safeUnreachable */.P)(data2.recipients.val);
        }
    }
    for (const data3 of item.relations){
        result.relations.push({
            profile: data3.profile.toText(),
            persona: data3.persona.toText(),
            favor: data3.favor
        });
    }
    for (const data4 of item.wallets){
        result.wallets.push({
            address: data4.address,
            name: data4.name,
            passphrase: data4.passphrase.unwrapOr(undefined),
            publicKey: data4.publicKey.unwrapOr(undefined),
            privateKey: data4.privateKey.unwrapOr(undefined),
            mnemonic: data4.mnemonic.map((data)=>({
                    words: data.words,
                    parameter: {
                        path: data.path,
                        withPassword: data.hasPassword
                    }
                })
            ).unwrapOr(undefined),
            createdAt: Number(data4.createdAt),
            updatedAt: Number(data4.updatedAt)
        });
    }
    return result;
}
function MetaFromJson(meta) {
    if (!meta) return new Map();
    const raw = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(meta));
    if (typeof raw !== 'object' || !raw) return new Map();
    return new Map(Object.entries(raw));
}
function MetaToJson(meta) {
    return (0,esm/* encodeArrayBuffer */.ll)((0,encode/* encode */.c)(Object.fromEntries(meta.entries())));
}

;// CONCATENATED MODULE: ../backup-format/src/normalize/index.ts






async function __normalizeBackup(data) {
    if (isBackupVersion2(data)) return normalizeBackupVersion2(data);
    if (isBackupVersion1(data)) return normalizeBackupVersion1(data);
    if (isBackupVersion0(data)) return normalizeBackupVersion0(data);
    throw new TypeError(BackupErrors.UnknownFormat);
}
async function normalizeBackup(data) {
    const normalized = await __normalizeBackup(data);
    // fix invalid URL
    normalized.settings.grantedHostPermissions = normalized.settings.grantedHostPermissions.filter((url)=>/^(http|<all_urls>)/.test(url)
    );
    return normalized;
}
/** It will return the internal format. DO NOT rely on the detail of it! */ function generateBackupRAW(data) {
    const result = generateBackupVersion2(data);
    return result;
}
function createEmptyNormalizedBackup() {
    return {
        meta: {
            version: 2,
            createdAt: ts_results_esm/* None */.Hq,
            maskVersion: ts_results_esm/* None */.Hq
        },
        personas: new Map(),
        profiles: new Map(),
        posts: new Map(),
        relations: [],
        settings: {
            grantedHostPermissions: []
        },
        wallets: [],
        plugins: {}
    };
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/sumBy.js
var sumBy = __webpack_require__(2109);
;// CONCATENATED MODULE: ../backup-format/src/utils/backupPreview.ts

function getBackupPreviewInfo(json) {
    let files = 0;
    try {
        files = Number(json.plugins?.['com.maskbook.fileservice']?.length || 0);
    } catch  {}
    return {
        personas: json.personas.size,
        accounts: (0,sumBy/* default */.Z)([
            ...json.personas.values()
        ], (persona)=>persona.linkedProfiles.size
        ),
        posts: json.posts.size,
        contacts: json.profiles.size,
        relations: json.relations.length,
        files,
        wallets: json.wallets.length,
        createdAt: Number(json.meta.createdAt)
    };
}

;// CONCATENATED MODULE: ../backup-format/src/index.ts






/***/ })

}]);