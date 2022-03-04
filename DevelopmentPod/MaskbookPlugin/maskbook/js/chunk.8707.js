"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8707],{

/***/ 78707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "appendShareTarget": () => (/* reexport */ appendShareTarget),
  "decryptComment": () => (/* reexport */ crypto_alpha_40.decryptComment),
  "encryptComment": () => (/* reexport */ crypto_alpha_40.encryptComment),
  "encryptTo": () => (/* reexport */ encryptTo),
  "getPartialSharedListOfPost": () => (/* reexport */ getPartialSharedListOfPost),
  "publishPostAESKey": () => (/* reexport */ publishPostAESKey),
  "steganographyEncodeImage": () => (/* binding */ steganographyEncodeImage),
  "verifyOthersProve": () => (/* reexport */ verifyOthersProve/* verifyOthersProve */.f)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ../encryption/src/index.ts + 22 modules
var src = __webpack_require__(96663);
// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/utils.ts
var utils = __webpack_require__(97535);
// EXTERNAL MODULE: ./src/crypto/crypto-alpha-40.ts
var crypto_alpha_40 = __webpack_require__(73356);
// EXTERNAL MODULE: ./src/crypto/crypto-alpha-38.ts
var crypto_alpha_38 = __webpack_require__(41022);
// EXTERNAL MODULE: ./background/network/gun/encryption/queryPostKey.ts
var queryPostKey = __webpack_require__(99807);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(9712);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(1196);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/prepareRecipientDetail.ts


async function prepareRecipientDetail(to) {
    const recipients = new shared_base_src/* IdentifierMap */.qD(new Map(), shared_base_src/* ProfileIdentifier */.WO);
    const keys = new shared_base_src/* IdentifierMap */.qD(new Map(), shared_base_src/* ProfileIdentifier */.WO);
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
var social_network_worker = __webpack_require__(44840);
// EXTERNAL MODULE: ./background/database/post/index.ts
var post = __webpack_require__(32849);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(41715);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(6900);
// EXTERNAL MODULE: ./src/social-network/utils/text-payload-worker.ts
var text_payload_worker = __webpack_require__(88925);
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
    if (!minePrivateKey) throw new TypeError('Not initialized yet');
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
        AESKeyEncrypted: (0,esm/* encodeArrayBuffer */.ll)(ownersAESKeyEncrypted),
        encryptedText: (0,esm/* encodeArrayBuffer */.ll)(encryptedText),
        iv: (0,esm/* encodeArrayBuffer */.ll)(iv),
        signature: '',
        sharedPublic: publicShared,
        version: -38,
        authorUserID: whoAmI
    };
    try {
        var ref1;
        const publicKey = (ref1 = await (0,db/* queryPersonaByProfileDB */.fl)(whoAmI)) === null || ref1 === void 0 ? void 0 : ref1.publicKey;
        if (publicKey) payload.authorPublicKey = (0,shared_base_src/* compressSecp256k1Key */.N5)(publicKey);
    } catch  {
    // ignore
    }
    payload.signature = '_';
    const newPostRecord = {
        identifier: new shared_base_src/* PostIVIdentifier */.bb(whoAmI.network, payload.iv),
        postBy: whoAmI,
        postCryptoKey: postAESKey,
        recipients: publicShared ? 'everyone' : recipients,
        foundAt: new Date(),
        encryptBy: (ref = usingPersona.linkedPersona) === null || ref === void 0 ? void 0 : ref.identifier
    };
    if ((0,base/* isTypedMessageText */.Rz)(content)) {
        newPostRecord.summary = getSummary(content);
        newPostRecord.interestedMeta = content.meta;
    }
    await (0,post/* createPostDB */.$v)(newPostRecord);
    const postAESKeyToken = (0,esm/* encodeArrayBuffer */.ll)(iv);
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
    if (!info) throw new Error(locales_legacy/* i18n.t */.a.t('service_publish_post_aes_key_failed'));
    if (!info[1].length) return;
    // Use the latest payload version here since we do not accept new post for older version.
    await (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(-38, new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), info[0], info[1]);
}
const SUMMARY_MAX_LENGTH = 40;
function getSummary(content) {
    let result = '';
    const sliceLength = content.content.length > SUMMARY_MAX_LENGTH ? SUMMARY_MAX_LENGTH + 1 : SUMMARY_MAX_LENGTH;
    // UTF-8 aware summary
    if (Intl.Segmenter) {
        // it seems like using "en" can also split the word correctly.
        const seg = new Intl.Segmenter('en');
        for (const word of seg.segment(content.content)){
            if (result.length >= sliceLength) break;
            result += word.segment;
        }
    } else {
        result = content.content.slice(0, sliceLength);
    }
    return result;
}

// EXTERNAL MODULE: ./src/crypto/crypto-alpha-39.ts
var crypto_alpha_39 = __webpack_require__(12475);
// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/cryptoProviderTable.ts
var cryptoProviderTable = __webpack_require__(18465);
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
        gunHint && (0,queryPostKey/* publishPostAESKey_version39Or38 */.U4)(version, new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), gunHint, othersAESKeyEncrypted);
        (0,post/* updatePostDB */.rr)({
            identifier: new shared_base_src/* PostIVIdentifier */.bb(whoAmI.network, iv),
            recipients: new shared_base_src/* IdentifierMap */.qD(new Map(people.map((identifier)=>[
                    identifier.toText(),
                    {
                        reason: [
                            reason
                        ],
                        published: toKey.has(identifier)
                    }, 
                ]
            )), shared_base_src/* ProfileIdentifier */.WO)
        }, 'append');
    } else if (version === -40) {
        throw new TypeError('Version -40 cannot create new data anymore due to leaking risks.');
    }
}

;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/getPartialSharedListOfPost.ts



// #endregion
// #region Append Recipients in future
/**
 * Get already shared target of the post
 * @param postSalt
 */ async function getPartialSharedListOfPost(version, postSalt, postBy) {
    var ref;
    const ids = new Set();
    const nameInDB = (ref = await (0,post/* queryPostDB */.q3)(new shared_base_src/* PostIVIdentifier */.bb(postBy.network, postSalt))) === null || ref === void 0 ? void 0 : ref.recipients;
    if (nameInDB === 'everyone') return [];
    if (!nameInDB) return [];
    nameInDB.forEach((_, x)=>ids.add(x.toText())
    );
    return Promise.all(Array.from(ids).map((x)=>shared_base_src/* Identifier.fromString */.xb.fromString(x, shared_base_src/* ProfileIdentifier */.WO)
    ).filter((x)=>x.ok
    ).map((x)=>x.val
    ).map(database/* queryProfile */.JL));
}

// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/verifyOthersProve.ts
var verifyOthersProve = __webpack_require__(21300);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoService.ts



(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);





function steganographyEncodeImage(buf, options) {
    return (0,src/* steganographyEncodeImage */.Mk)(buf, {
        ...options,
        downloadImage: utils/* steganographyDownloadImage */.V
    });
}


/***/ })

}]);