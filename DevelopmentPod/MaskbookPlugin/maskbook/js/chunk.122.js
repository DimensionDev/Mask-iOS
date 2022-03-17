"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[122],{

/***/ 40122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "decryptFromImageUrl": () => (/* reexport */ decryptFromImageUrl),
  "decryptFromText": () => (/* reexport */ decryptFromText)
});

// EXTERNAL MODULE: ./src/crypto/crypto-alpha-40.ts
var crypto_alpha_40 = __webpack_require__(73356);
// EXTERNAL MODULE: ./src/crypto/crypto-alpha-39.ts
var crypto_alpha_39 = __webpack_require__(12475);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/utils/type-transform/Payload.ts
var Payload = __webpack_require__(9712);
// EXTERNAL MODULE: ./shared-ui/locales_legacy/index.ts + 3 modules
var locales_legacy = __webpack_require__(6900);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(1196);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ./background/database/post/index.ts
var post = __webpack_require__(32849);
// EXTERNAL MODULE: ./src/social-network/worker.ts
var social_network_worker = __webpack_require__(44840);
// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/cryptoProviderTable.ts
var cryptoProviderTable = __webpack_require__(18465);
// EXTERNAL MODULE: ./src/social-network/utils/text-payload-worker.ts
var text_payload_worker = __webpack_require__(88925);
// EXTERNAL MODULE: ./background/database/persona/helper.ts
var helper = __webpack_require__(56935);
;// CONCATENATED MODULE: ./src/extension/background-script/CryptoServices/verifyOthersProve.ts




async function verifyOthersProve(bio, others) {
    var ref, ref1;
    const compressedX = typeof bio === 'string' ? (await (0,text_payload_worker/* decodePublicKeyWorker */.IC)(others.network))(bio) : [
        bio.raw
    ];
    if (!compressedX) return false;
    const publicKey = compressedX.map((x)=>{
        try {
            return (0,src/* decompressSecp256k1Key */.qX)(x);
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
    const hasPrivate = ((ref = await (0,database/* queryPersonaRecord */.yQ)((0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(publicKey))) === null || ref === void 0 ? void 0 : ref.privateKey) || ((ref1 = await (0,database/* queryPersonaRecord */.yQ)(others)) === null || ref1 === void 0 ? void 0 : ref1.privateKey);
    if (!hasPrivate) await (0,helper/* createProfileWithPersona */.lr)(others, {
        connectionConfirmState: 'pending'
    }, {
        publicKey
    });
    // TODO: unhandled case: if the profile is connected but a different key.
    return true;
}

// EXTERNAL MODULE: ./src/crypto/crypto-alpha-38.ts
var crypto_alpha_38 = __webpack_require__(41022);
// EXTERNAL MODULE: ./src/utils/constants.ts
var constants = __webpack_require__(29941);
// EXTERNAL MODULE: ./src/utils/type-transform/asyncIteratorHelpers.ts
var asyncIteratorHelpers = __webpack_require__(3266);
// EXTERNAL MODULE: ../encryption/src/index.ts + 24 modules
var encryption_src = __webpack_require__(10491);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(2214);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ts-results@3.3.0/node_modules/ts-results/esm/index.js
var ts_results_esm = __webpack_require__(79594);
// EXTERNAL MODULE: ./src/extension/background-script/CryptoServices/utils.ts
var utils = __webpack_require__(97535);
// EXTERNAL MODULE: ./background/network/gun/encryption/queryPostKey.ts
var queryPostKey = __webpack_require__(99807);
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
    const authorNetworkWorker = ts_results_esm/* Result.wrap */.x4.wrap(()=>(0,social_network_worker/* getNetworkWorkerUninitialized */.Bu)(author.isUnknown ? authorNetworkHint : author.network)
    ).andThen((x)=>x ? (0,ts_results_esm.Ok)(x) : (0,ts_results_esm/* Err */.UG)(new Error('Worker not found'))
    );
    if (authorNetworkWorker.err) return makeError(authorNetworkWorker.val);
    const data = post;
    const { version  } = data;
    var _sharedPublic;
    const sharePublic = data.version === -38 ? (_sharedPublic = data.sharedPublic) !== null && _sharedPublic !== void 0 ? _sharedPublic : false : false;
    if (version === -40 || version === -39 || version === -38) {
        const { encryptedText , iv , version  } = data;
        const cryptoProvider = cryptoProviderTable/* cryptoProviderTable */.U[version];
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
            await verifyOthersProve({
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
            if (result === 'out of chance') return makeError(locales_legacy/* i18n.t */.a.t('service_others_key_not_found', {
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
        const mine = await queryWhoAmI().then((x)=>x || (0,esm/* delay */.gw)(1000).then(queryWhoAmI)
        );
        if (!(mine === null || mine === void 0 ? void 0 : mine.privateKey)) return makeError(constants/* DecryptFailedReason.MyCryptoKeyNotFound */.g.MyCryptoKeyNotFound);
        const { privateKey: minePrivate  } = mine;
        const minePublic = crypto.subtle.importKey('jwk', mine.publicKey, {
            name: 'ECDH',
            namedCurve: 'K-256'
        }, true, [
            'deriveKey',
            'deriveBits', 
        ]);
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
            return makeError(locales_legacy/* i18n.t */.a.t('service_self_key_decryption_failed'));
        }
        yield makeProgress('finding_post_key');
        const aesKeyEncrypted = [];
        if (version === -40) {
            const result = await (0,queryPostKey/* GUN_queryPostKey_version40 */.Kl)(new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), whoAmI.userId);
            if (result === null) return makeError(locales_legacy/* i18n.t */.a.t('service_not_share_target'));
            aesKeyEncrypted.push(result);
        } else if (version === -39 || version === -38) {
            const collector = (0,queryPostKey/* GUN_queryPostKey_version39Or38 */.ab)(version, new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), await minePublic, authorNetworkWorker.val.gunNetworkHint, (0,esm/* abortSignalTimeout */.VJ)(2000));
            try {
                for await (const key of collector)aesKeyEncrypted.push(key);
            } catch  {}
        }
        // If we can decrypt with current info, just do it.
        try {
            // ! Do not remove the await here.
            return await decryptWith(aesKeyEncrypted);
        } catch (error1) {
            if (error1 instanceof Error && error1.message === locales_legacy/* i18n.t */.a.t('service_not_share_target')) {
                console.debug(error1);
                // TODO: Replace this error with:
                // You do not have the necessary private key to decrypt this message.
                // What to do next: You can ask your friend to visit your profile page, so that their Mask extension will detect and add you to recipients.
                // ? after the auto-share with friends is done.
                yield makeError(error1);
            } else {
                return handleDOMException(error1);
            }
        }
        // Failed, we have to wait for the future info from gun.
        if (version === -40) return makeError(locales_legacy/* i18n.t */.a.t('service_not_share_target'));
        const subscription = (0,queryPostKey/* GUN_queryPostKey_version39Or38 */.ab)(version, new Uint8Array((0,esm/* decodeArrayBuffer */.xe)(iv)), await minePublic, authorNetworkWorker.val.gunNetworkHint, new AbortController().signal);
        for await (const aes of subscription){
            console.log('New key received, trying', aes);
            try {
                return await decryptWith(aes);
            } catch (error) {
                console.debug(error);
            }
        }
        return makeError(locales_legacy/* i18n.t */.a.t('service_not_share_target'));
        function convertKey(key) {
            if (!Array.isArray(key)) return convertKey([
                key
            ]);
            const result = [];
            for (const k of key){
                result.push({
                    salt: (0,esm/* encodeArrayBuffer */.ll)(k.postKeyIV),
                    encryptedKey: (0,esm/* encodeArrayBuffer */.ll)(k.encryptedPostKey)
                });
            }
            return [];
        }
        async function decryptWith(key) {
            const [contentArrayBuffer, postAESKey] = await cryptoProvider.decryptMessage1ToNByOther({
                version,
                AESKeyEncrypted: convertKey(key),
                authorsPublicKeyECDH: authorPersona.publicKey,
                encryptedContent: encryptedText,
                privateKeyECDH: minePrivate,
                iv
            });
            // Store the key to speed up next time decrypt
            setPostCache(postAESKey);
            const content = (0,esm/* decodeText */.rj)(contentArrayBuffer);
            return makeSuccessResult(content, [
                'normal_decrypted'
            ]);
        }
        async function decryptAsAuthor(authorIdentifier) {
            const localKey = sharePublic ? crypto_alpha_38.publicSharedAESKey : await (0,database/* queryLocalKey */.DM)(authorIdentifier);
            if (!localKey) throw new Error(`Local key for identity ${authorIdentifier.toText()} not found`);
            const [contentArrayBuffer, postAESKey] = await cryptoProvider.decryptMessage1ToNByMyself({
                version,
                encryptedAESKey: ownersAESKeyEncrypted,
                encryptedContent: encryptedText,
                myLocalKey: localKey,
                iv
            });
            // Store the key to speed up next time decrypt
            setPostCache(postAESKey);
            const content = (0,esm/* decodeText */.rj)(contentArrayBuffer);
            return makeSuccessResult(content, [
                'normal_decrypted'
            ]);
        }
    }
    return makeError(locales_legacy/* i18n.t */.a.t('service_unknown_payload'));
}
async function* decryptFromImageUrlWithProgress_raw(url, author, authorNetworkHint, whoAmI, discoverURL) {
    if (successDecryptionCache.has(url)) return successDecryptionCache.get(url);
    yield makeProgress('decode_post', true);
    const post = await (0,encryption_src/* steganographyDecodeImage */.oX)(url, {
        pass: author.toText(),
        downloadImage: utils/* steganographyDownloadImage */.V
    });
    if (!post.startsWith('\u{1F3BC}') && !/https:\/\/.+\..+\/(\?PostData_v\d=)?%20(.+)%40/.test(post)) return makeError(locales_legacy/* i18n.t */.a.t('service_decode_image_payload_failed'), true);
    const worker = await ts_results_esm/* Result.wrapAsync */.x4.wrapAsync(()=>(0,social_network_worker/* getNetworkWorker */.C8)(author)
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
        return makeError(locales_legacy/* i18n.t */.a.t('service_decryption_failed'));
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
                const undo = messages/* MaskMessages.events.profilesChanged.on */.q.events.profilesChanged.on((data)=>{
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
    const postIdentifier = new src/* PostIVIdentifier */.bb(by.network, iv);
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
            const result = (0,esm/* decodeText */.rj)(await cryptoProvider.decryptWithAES({
                aesKey: cachedKey.postCryptoKey,
                encrypted: encryptedText,
                iv: iv
            }));
            return [
                result,
                setCache
            ];
        } catch  {}
    }
    return [
        undefined,
        setCache
    ];
}

;// CONCATENATED MODULE: ./src/extension/service-generator.ts



/***/ })

}]);