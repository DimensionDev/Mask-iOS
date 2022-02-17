"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8733,4769],{

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

/***/ 10688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "attachProfile": () => (/* binding */ attachProfile),
  "backupPersonaPrivateKey": () => (/* binding */ backupPersonaPrivateKey),
  "createNewRelation": () => (/* binding */ createNewRelation),
  "createPersonaByMnemonic": () => (/* reexport */ database/* createPersonaByMnemonic */.A8),
  "createPersonaByMnemonicV2": () => (/* reexport */ database/* createPersonaByMnemonicV2 */.c9),
  "deletePersona": () => (/* reexport */ database/* deletePersona */.FB),
  "detachProfile": () => (/* reexport */ Persona_db/* detachProfileDB */.AY),
  "exportPersonaPrivateKey": () => (/* binding */ exportPersonaPrivateKey),
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9257.js
=======
  "getCurrentPersonaAvatar": () => (/* binding */ getCurrentPersonaAvatar),
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8733.js
  "queryAvatarDataURL": () => (/* reexport */ database/* queryAvatarDataURL */.Lw),
  "queryMyPersonas": () => (/* binding */ queryMyPersonas),
  "queryMyProfiles": () => (/* binding */ queryMyProfiles),
  "queryOwnedPersonaInformation": () => (/* binding */ queryOwnedPersonaInformation),
  "queryPersona": () => (/* reexport */ database/* queryPersona */.pR),
  "queryPersonaByMnemonic": () => (/* binding */ queryPersonaByMnemonic),
  "queryPersonaByPrivateKey": () => (/* reexport */ database/* queryPersonaByPrivateKey */.Ye),
  "queryPersonas": () => (/* binding */ queryPersonas),
  "queryPrivateKey": () => (/* reexport */ database/* queryPrivateKey */.wb),
  "queryProfile": () => (/* reexport */ database/* queryProfile */.JL),
  "queryProfilePaged": () => (/* reexport */ database/* queryProfilePaged */.V6),
  "queryProfiles": () => (/* binding */ queryProfiles),
  "queryProfilesWithIdentifiers": () => (/* binding */ queryProfilesWithIdentifiers),
  "queryRelationPaged": () => (/* binding */ queryRelationPaged),
  "removeProfile": () => (/* binding */ removeProfile),
  "renamePersona": () => (/* reexport */ database/* renamePersona */.rR),
  "resolveIdentity": () => (/* binding */ resolveIdentity),
  "restoreFromBackup": () => (/* binding */ restoreFromBackup),
  "restoreFromBase64": () => (/* binding */ restoreFromBase64),
  "restoreFromMnemonicWords": () => (/* binding */ restoreFromMnemonicWords),
  "restoreFromObject": () => (/* binding */ restoreFromObject),
  "setupPersona": () => (/* reexport */ database/* setupPersona */.gn),
  "signWithPersona": () => (/* reexport */ signWithPersona),
  "storeAvatar": () => (/* reexport */ database/* storeAvatar */.Zk),
  "updateCurrentPersonaAvatar": () => (/* binding */ updateCurrentPersonaAvatar),
  "updateProfileInfo": () => (/* binding */ updateProfileInfo),
  "updateRelation": () => (/* binding */ updateRelation),
  "validateMnemonic": () => (/* reexport */ mnemonic_code/* validateMnemonic */._I)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var src = __webpack_require__(68440);
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9257.js
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.0/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(63366);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210630045432-e05621c/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(24982);
=======
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.1/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(61844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8733.js
// EXTERNAL MODULE: ./src/database/index.ts
var database = __webpack_require__(92850);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ./src/database/Persona/Persona.db.ts + 1 modules
var Persona_db = __webpack_require__(88628);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts + 2 modules
var latest = __webpack_require__(70020);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(37647);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeService.ts + 1 modules
var WelcomeService = __webpack_require__(94769);
// EXTERNAL MODULE: ./src/utils/type-transform/String-ArrayBuffer.ts
var String_ArrayBuffer = __webpack_require__(28504);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFileShortRepresentation.ts
var BackupFileShortRepresentation = __webpack_require__(83280);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210726055325-dfbe7fd_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(34527);
// EXTERNAL MODULE: ./src/extension/background-script/SettingsService.ts
var SettingsService = __webpack_require__(21106);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(53505);
// EXTERNAL MODULE: ./src/utils/index.ts
var utils = __webpack_require__(37186);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ethereumjs-util@7.1.0/node_modules/ethereumjs-util/dist.browser/index.js
var dist_browser = __webpack_require__(98257);
// EXTERNAL MODULE: ../../node_modules/.pnpm/pvtsutils@1.1.7/node_modules/pvtsutils/build/index.js
var build = __webpack_require__(34987);
// EXTERNAL MODULE: ../../node_modules/.pnpm/arweave@1.10.16/node_modules/arweave/web/lib/utils.js
var lib_utils = __webpack_require__(35801);
// EXTERNAL MODULE: ./src/extension/popups/index.tsx + 2 modules
var popups = __webpack_require__(37146);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(28532);
;// CONCATENATED MODULE: ./src/extension/background-script/IdentityServices/sign.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];







async function signWithPersona({ message , method  }) {
    if (method !== 'eth') throw new Error('Unknown sign method');
    const requestID = Math.random().toString(16).slice(3);
    const newWindow = await browser.windows.create({
        height: 600,
        width: 400,
        type: 'popup',
        url: (0,popups/* constructSignRequestURL */.qy)({
            message,
            requestID
        })
    });
    const waitForApprove = new Promise((resolve, reject)=>{
        const listener = (tabID)=>{
            var ref;
            if (((ref = newWindow.tabs) === null || ref === void 0 ? void 0 : ref[0].id) === tabID) reject(new Error('Sign rejected'));
        };
        browser.tabs.onRemoved.addListener(listener);
        // reject this request after 3 mins
        (0,shared_base_src/* delay */.gw)(1000 * 60 * 3).then(()=>reject(new Error('Timeout'))
        );
        const removeListener = utils/* MaskMessage.events.signRequestApproved.on */.yV.events.signRequestApproved.on((approval)=>{
            if (approval.requestID !== requestID) return;
            resolve(approval.selectedPersona);
        });
        setTimeout(()=>{
            waitForApprove.finally(()=>{
                browser.tabs.onRemoved.removeListener(listener);
                removeListener();
                browser.windows.remove(newWindow.id).catch(()=>{
                });
                reject(new Error('Sign rejected'));
            });
        });
    });
    const signer = await waitForApprove;
    const persona = (await (0,Persona_db/* queryPersonasWithPrivateKey */.Eq)()).find((x)=>x.identifier.equals(signer)
    );
    if (!persona) throw new Error('Persona not found');
    // will have problem with UTF-8?
    const length = message.length;
    const messageHash = (0,dist_browser.keccakFromString)(`\x19Ethereum Signed Message:\n${length}${message}`, 256);
    const privateKey = Buffer.from(build.Convert.FromBase64Url(persona.privateKey.d));
    const signature = (0,dist_browser.ecsign)(messageHash, privateKey);
    return {
        persona: persona.identifier,
        signature: {
            raw: signature,
            signature: (0,dist_browser.toRpcSig)(signature.v, signature.r, signature.s),
            EIP2098: (0,dist_browser.toCompactSig)(signature.v, signature.r, signature.s)
        },
        address: (0,dist_browser.bufferToHex)((0,dist_browser.publicToAddress)((0,dist_browser.privateToPublic)(privateKey))),
        messageHex: (0,dist_browser.bufferToHex)(Buffer.from((0,lib_utils.stringToBuffer)(message)))
    };
}

;// CONCATENATED MODULE: ./src/extension/background-script/IdentityService.ts














<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9257.js
=======

>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8733.js
(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);


//#region Profile

function queryProfiles(network) {
    return (0,database/* queryProfilesWithQuery */.X8)(network);
}
function queryProfilesWithIdentifiers(identifiers) {
    return (0,database/* queryProfilesWithQuery */.X8)((record)=>identifiers.some((x)=>record.identifier.equals(x)
        )
    );
}
async function queryMyProfiles(network) {
    const myPersonas = (await queryMyPersonas(network)).filter((x)=>!x.uninitialized
    );
    return Promise.all(myPersonas.flatMap((x)=>Array.from(x.linkedProfiles.keys())
    ).filter((y)=>!network || network === y.network
    ).map(database/* queryProfile */.JL));
}
async function updateProfileInfo(identifier, data) {
    if (data.nickname) {
        const rec = {
            identifier,
            nickname: data.nickname,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        await (0,Persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,Persona_db/* createOrUpdateProfileDB */.o7)(rec, t)
        );
    }
    if (data.avatarURL) await (0,database/* storeAvatar */.Zk)(identifier, data.avatarURL, data.forceUpdateAvatar);
}
function removeProfile(id) {
    return (0,Persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,Persona_db/* deleteProfileDB */.B4)(id, t)
    );
}
//#endregion
//#region Persona

async function queryPersonaByMnemonic(mnemonic, password) {
    const { key  } = await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(mnemonic, password);
    const identifier = (0,type/* ECKeyIdentifierFromJsonWebKey */.CH)(key.privateKey, 'private');
    return (0,Persona_db/* queryPersonaDB */.Hm)(identifier);
}
async function queryPersonas(identifier, requirePrivateKey = false) {
    if (typeof identifier === 'undefined') return (await (0,Persona_db/* queryPersonasDB */._P)((k)=>requirePrivateKey ? !!k.privateKey : true
    )).map(database/* personaRecordToPersona */.m3);
    const x = await (0,Persona_db/* queryPersonaDB */.Hm)(identifier);
    if (!x || !x.privateKey && requirePrivateKey) return [];
    return [
        (0,database/* personaRecordToPersona */.m3)(x)
    ];
}
function queryMyPersonas(network) {
    return queryPersonas(undefined, true).then((x)=>typeof network === 'string' ? x.filter((y)=>{
            for (const z of y.linkedProfiles.keys()){
                if (z.network === network) return true;
            }
            return false;
        }) : x
    );
}
async function backupPersonaPrivateKey(identifier) {
    const x = await (0,Persona_db/* queryPersonaDB */.Hm)(identifier);
    return x === null || x === void 0 ? void 0 : x.privateKey;
}
async function queryOwnedPersonaInformation() {
    const personas = await queryPersonas(undefined, true);
    const result = [];
    for (const persona of personas.sort((a, b)=>a.updatedAt > b.updatedAt ? 1 : -1
    )){
        const map = [];
        result.push({
            nickname: persona.nickname,
            identifier: persona.identifier,
            linkedProfiles: map
        });
        for (const [profile] of persona.linkedProfiles){
            const nickname = (await (0,database/* queryProfile */.JL)(profile)).nickname;
            map.push({
                identifier: profile,
                nickname
            });
        }
    }
    return result;
}
async function restoreFromObject(object) {
    var ref;
    if (!object) return null;
    await (0,restoreBackup/* restoreBackup */.pi)(object);
    if (object === null || object === void 0 ? void 0 : (ref = object.personas) === null || ref === void 0 ? void 0 : ref.length) {
        return (0,database/* queryPersona */.pR)(type/* Identifier.fromString */.xb.fromString(object.personas[0].identifier, type/* ECKeyIdentifier */.ob).unwrap());
    }
    return null;
}
async function restoreFromMnemonicWords(mnemonicWords, nickname, password) {
    if (!src/* validateMnemonic */._I(mnemonicWords)) throw new Error('the mnemonic words are not valid');
    const identifier = await (0,WelcomeService.restoreNewIdentityWithMnemonicWord)(mnemonicWords, password, {
        nickname
    });
    return (0,database/* queryPersona */.pR)(identifier);
}
async function restoreFromBase64(base64) {
    return restoreFromObject(JSON.parse((0,String_ArrayBuffer/* decodeText */.rj)((0,String_ArrayBuffer/* decodeArrayBuffer */.xe)(base64))));
}
async function restoreFromBackup(backup) {
    return restoreFromObject((0,latest/* UpgradeBackupJSONFile */.a)((0,BackupFileShortRepresentation/* decompressBackupFile */.PN)(backup)));
}
//#endregion
//#region Profile & Persona
/**
 * Remove an identity.
 */ 
async function attachProfile(source, target, data) {
    if (target instanceof type/* ProfileIdentifier */.WO) {
        const profile = await (0,database/* queryProfile */.JL)(target);
        if (!profile.linkedPersona) throw new Error('target not found');
        target = profile.linkedPersona.identifier;
    }
    return (0,Persona_db/* attachProfileDB */.tc)(source, target, data);
}

//#endregion
//#region Relation
async function createNewRelation(profile, linked) {
    await (0,Persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>(0,Persona_db/* createRelationDB */.N8)({
            profile,
            linked,
            favor: 0
        }, t)
    );
}
async function queryRelationPaged(options, count) {
    const currentPersona = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (currentPersona) {
        return (0,Persona_db/* queryRelationsPagedDB */.PF)(currentPersona, options, count);
    }
    return [];
}
async function updateRelation(profile, linked, favor) {
    await (0,Persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,Persona_db/* updateRelationDB */.Jx)({
            profile,
            linked,
            favor
        }, t)
    );
}
//#endregion
/**
 * In older version of Mask, identity is marked as `ProfileIdentifier(network, '$unknown')` or `ProfileIdentifier(network, '$self')`. After upgrading to the newer version of Mask, Mask will try to find the current user in that network and call this function to replace old identifier into a "resolved" identity.
 * @param identifier The resolved identity
 */ async function resolveIdentity(identifier) {
    const unknown = new type/* ProfileIdentifier */.WO(identifier.network, '$unknown');
    const self = new type/* ProfileIdentifier */.WO(identifier.network, '$self');
    const r = await (0,Persona_db/* queryProfilesDB */.i2)((x)=>x.identifier.equals(unknown) || x.identifier.equals(self)
    );
    if (!r.length) return;
    const final = {
        ...r.reduce((p, c)=>({
                ...p,
                ...c
            })
        ),
        identifier
    };
    try {
        await (0,Persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
            await (0,Persona_db/* createProfileDB */.ah)(final, t);
            await (0,Persona_db/* deleteProfileDB */.B4)(unknown, t).catch(()=>{
            });
            await (0,Persona_db/* deleteProfileDB */.B4)(self, t).catch(()=>{
            });
        });
    } catch  {
    // the profile already exists
    }
}
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9257.js
=======
//#endregion
//#region avatar
const updateCurrentPersonaAvatar = async (avatar)=>{
    const identifier = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (identifier) {
        await (0,database/* storeAvatar */.Zk)(identifier, await (0,esm/* blobToArrayBuffer */.vZ)(avatar));
        utils/* MaskMessage.events.personaAvatarChanged.sendToAll */.yV.events.personaAvatarChanged.sendToAll({
            reason: 'update',
            of: identifier === null || identifier === void 0 ? void 0 : identifier.toText()
        });
    }
};
const getCurrentPersonaAvatar = async ()=>{
    const identifier = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (!identifier) return null;
    try {
        return await (0,database/* queryAvatarDataURL */.Lw)(identifier);
    } catch  {
        return null;
    }
};
//#endregion
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8733.js
//#region Export & Import Private key
async function exportPersonaPrivateKey(identifier) {
    const profile = await (0,database/* queryPersonaRecord */.yQ)(identifier);
    if (!(profile === null || profile === void 0 ? void 0 : profile.privateKey)) return '';
    const encodePrivateKey = (0,encode/* encode */.c)(profile.privateKey);
    return (0,esm/* encodeArrayBuffer */.ll)(encodePrivateKey);
}
//#endregion



/***/ }),

/***/ 21106:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "setTheme": () => (/* binding */ setTheme),
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage),
/* harmony export */   "setLanguage": () => (/* binding */ setLanguage),
/* harmony export */   "getChainId": () => (/* binding */ getChainId),
/* harmony export */   "setChainId": () => (/* binding */ setChainId),
/* harmony export */   "getBalance": () => (/* binding */ getBalance),
/* harmony export */   "setBalance": () => (/* binding */ setBalance),
/* harmony export */   "getBlockNumber": () => (/* binding */ getBlockNumber),
/* harmony export */   "setBlockNumber": () => (/* binding */ setBlockNumber),
/* harmony export */   "getEtherPrice": () => (/* binding */ getEtherPrice),
/* harmony export */   "setEtherPrice": () => (/* binding */ setEtherPrice),
/* harmony export */   "getGasNow": () => (/* binding */ getGasNow),
/* harmony export */   "setGasNow": () => (/* binding */ setGasNow),
/* harmony export */   "getTrendingDataSource": () => (/* binding */ getTrendingDataSource),
/* harmony export */   "setTrendingDataSource": () => (/* binding */ setTrendingDataSource),
/* harmony export */   "getEthereumNetworkTradeProvider": () => (/* binding */ getEthereumNetworkTradeProvider),
/* harmony export */   "setEthNetworkTradeProvider": () => (/* binding */ setEthNetworkTradeProvider),
/* harmony export */   "getPolygonNetworkTradeProvider": () => (/* binding */ getPolygonNetworkTradeProvider),
/* harmony export */   "setPolygonNetworkTradeProvider": () => (/* binding */ setPolygonNetworkTradeProvider),
/* harmony export */   "getBinanceNetworkTradeProvider": () => (/* binding */ getBinanceNetworkTradeProvider),
/* harmony export */   "setBinanceNetworkTradeProvider": () => (/* binding */ setBinanceNetworkTradeProvider),
/* harmony export */   "getArbitrumNetworkTradeProvider": () => (/* binding */ getArbitrumNetworkTradeProvider),
/* harmony export */   "setArbitrumNetworkTradeProvider": () => (/* binding */ setArbitrumNetworkTradeProvider),
/* harmony export */   "getxDaiNetworkTradeProvider": () => (/* binding */ getxDaiNetworkTradeProvider),
/* harmony export */   "setxDaiNetworkTradeProvider": () => (/* binding */ setxDaiNetworkTradeProvider),
/* harmony export */   "getCurrentSelectedWalletProvider": () => (/* binding */ getCurrentSelectedWalletProvider),
/* harmony export */   "setCurrentSelectedWalletProvider": () => (/* binding */ setCurrentSelectedWalletProvider),
/* harmony export */   "getCurrentSelectedWalletNetwork": () => (/* binding */ getCurrentSelectedWalletNetwork),
/* harmony export */   "setCurrentSelectedWalletNetwork": () => (/* binding */ setCurrentSelectedWalletNetwork),
/* harmony export */   "getSelectedWalletAddress": () => (/* binding */ getSelectedWalletAddress),
/* harmony export */   "setSelectedWalletAddress": () => (/* binding */ setSelectedWalletAddress),
/* harmony export */   "getCurrentPortfolioDataProvider": () => (/* binding */ getCurrentPortfolioDataProvider),
/* harmony export */   "setCurrentPortfolioDataProvider": () => (/* binding */ setCurrentPortfolioDataProvider),
/* harmony export */   "getCurrentCollectibleDataProvider": () => (/* binding */ getCurrentCollectibleDataProvider),
/* harmony export */   "setCurrentCollectibleDataProvider": () => (/* binding */ setCurrentCollectibleDataProvider),
/* harmony export */   "getWalletAllowTestChain": () => (/* binding */ getWalletAllowTestChain),
/* harmony export */   "getCurrentPersonaIdentifier": () => (/* binding */ getCurrentPersonaIdentifier),
/* harmony export */   "setCurrentPersonaIdentifier": () => (/* binding */ setCurrentPersonaIdentifier),
/* harmony export */   "isPluginEnabled": () => (/* binding */ isPluginEnabled),
/* harmony export */   "setPluginStatus": () => (/* binding */ setPluginStatus),
/* harmony export */   "openSNSAndActivatePlugin": () => (/* binding */ openSNSAndActivatePlugin),
/* harmony export */   "shouldActivatePluginOnSNSStart": () => (/* binding */ shouldActivatePluginOnSNSStart)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39378);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71299);
/* harmony import */ var _plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67047);
/* harmony import */ var _IdentityService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10688);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(93975);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37186);







function create(settings) {
    async function get() {
        await settings.readyPromise;
        return settings.value;
    }
    async function set(val) {
        await settings.readyPromise;
        settings.value = val;
    }
    return [
        get,
        set
    ];
}
const [getTheme, setTheme] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .appearanceSettings */ .OF);
const [getLanguage, setLanguage] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .languageSettings */ .pQ);
const [getChainId, setChainId] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentChainIdSettings */ .wU);
const [getBalance, setBalance] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentBalanceSettings */ .NH);
const [getBlockNumber, setBlockNumber] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentBlockNumberSettings */ .gi);
const [getEtherPrice, setEtherPrice] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentEtherPriceSettings */ .cK);
const [getGasNow, setGasNow] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentGasNowSettings */ .ak);
const [getTrendingDataSource, setTrendingDataSource] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_3__/* .currentDataProviderSettings */ .gG);
const [getEthereumNetworkTradeProvider, setEthNetworkTradeProvider] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_3__/* .ethereumNetworkTradeProviderSettings */ .SN);
const [getPolygonNetworkTradeProvider, setPolygonNetworkTradeProvider] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_3__/* .polygonNetworkTradeProviderSettings */ .hn);
const [getBinanceNetworkTradeProvider, setBinanceNetworkTradeProvider] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_3__/* .binanceNetworkTradeProviderSettings */ .gk);
const [getArbitrumNetworkTradeProvider, setArbitrumNetworkTradeProvider] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_3__/* .arbitrumNetworkTradeProviderSettings */ .We);
const [getxDaiNetworkTradeProvider, setxDaiNetworkTradeProvider] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_3__/* .xdaiNetworkTradeProviderSettings */ .EH);
const [getCurrentSelectedWalletProvider, setCurrentSelectedWalletProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentProviderSettings */ .t1);
const [getCurrentSelectedWalletNetwork, setCurrentSelectedWalletNetwork] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentNetworkSettings */ .fX);
const [getSelectedWalletAddress, setSelectedWalletAddress] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentAccountSettings */ .aK);
const [getCurrentPortfolioDataProvider, setCurrentPortfolioDataProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentPortfolioDataProviderSettings */ .a4);
const [getCurrentCollectibleDataProvider, setCurrentCollectibleDataProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_5__/* .currentCollectibleDataProviderSettings */ .Ki);
async function getWalletAllowTestChain() {
    return _utils__WEBPACK_IMPORTED_MODULE_6__/* .Flags.wallet_allow_testnet */ .vU.wallet_allow_testnet;
}
async function getCurrentPersonaIdentifier() {
    await _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier.readyPromise */ .cn.readyPromise;
    const personas = (await (0,_IdentityService__WEBPACK_IMPORTED_MODULE_4__.queryMyPersonas)()).sort((a, b)=>a.createdAt > b.createdAt ? 1 : 0
    ).map((x)=>x.identifier
    );
    const newVal = _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.Identifier.fromString(_settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier.value */ .cn.value, _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.ECKeyIdentifier).unwrapOr((0,lodash_es__WEBPACK_IMPORTED_MODULE_1__.head)(personas));
    if (!newVal) return undefined;
    if (personas.find((x)=>x.equals(newVal)
    )) return newVal;
    if (personas[0]) _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier.value */ .cn.value = personas[0].toText();
    return personas[0];
}
async function setCurrentPersonaIdentifier(x) {
    await _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier.readyPromise */ .cn.readyPromise;
    _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPersonaIdentifier.value */ .cn.value = x.toText();
}
async function isPluginEnabled(id) {
    return _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPluginEnabledStatus */ .uZ['plugin:' + id].value;
}
async function setPluginStatus(id, enabled) {
    _settings_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentPluginEnabledStatus */ .uZ['plugin:' + id].value = enabled;
}
const key = 'openSNSAndActivatePlugin';
/**
 * This function will open a new web page, then open the composition dialog and activate the composition entry of the given plugin.
 * @param url URL to open
 * @param pluginID Plugin to activate
 */ async function openSNSAndActivatePlugin(url, pluginID) {
    await browser.tabs.create({
        active: true,
        url
    });
    sessionStorage.setItem(key, pluginID);
}
async function shouldActivatePluginOnSNSStart() {
    const val = sessionStorage.getItem(key);
    sessionStorage.removeItem(key);
    return val;
}


/***/ }),

/***/ 94769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 67047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings),
/* harmony export */   "de": () => (/* binding */ currentTradeProviderSettings),
/* harmony export */   "SN": () => (/* binding */ ethereumNetworkTradeProviderSettings),
/* harmony export */   "hn": () => (/* binding */ polygonNetworkTradeProviderSettings),
/* harmony export */   "gk": () => (/* binding */ binanceNetworkTradeProviderSettings),
/* harmony export */   "We": () => (/* binding */ arbitrumNetworkTradeProviderSettings),
/* harmony export */   "EH": () => (/* binding */ xdaiNetworkTradeProviderSettings),
/* harmony export */   "Aj": () => (/* binding */ getCurrentTradeProviderGeneralSettings),
/* harmony export */   "rn": () => (/* binding */ getCurrentDataProviderGeneralSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "EG": () => (/* binding */ approvedTokensFromUniSwap)
/* harmony export */ });
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9257.js
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24982);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37131);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(95001);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86705);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34513);
=======
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11494);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45154);
/* harmony import */ var _utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93002);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71765);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95142);
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8733.js





/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd, {
    primary: ()=>''
});
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+singleHopOnly`, false, {
    primary: ()=>''
});
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_secondary')
});
/**
 * The default trader provider
 */ const currentTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_primary')
    ,
    secondary: ()=>_utils_i18n_next__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_trade_provider_secondary')
});
const ethereumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+ethereum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2, {
    primary: ()=>''
});
const polygonNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+polygon+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP, {
    primary: ()=>''
});
const binanceNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+binance+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP, {
    primary: ()=>''
});
const arbitrumNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+arbitrum+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3, {
    primary: ()=>''
});
<<<<<<< HEAD:MaskbookPlugin/MaskbookPlugin/Assets/js/chunk.9257.js
=======
const xdaiNetworkTradeProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+xdai+tradeProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP, {
    primary: ()=>''
});
>>>>>>> fix/webviewAlwaysOnTop:DevelopmentPod/MaskbookPlugin/maskbook/js/chunk.8733.js
const uniswapV2Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v2`, '');
const uniswapV3Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+uniswap+v3`, '');
const zrxSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+zrx`, '');
const sushiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sushiswap`, '');
const sashimiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+sashimiswap`, '');
const qucikswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+quickswap`, '');
const pancakeswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+pancakeswap`, '');
const balancerSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+balancer`, '');
const dodoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+tradeProvider+dodo`, '');
/**
 * The general settings of specific tarde provider
 */ function getCurrentTradeProviderGeneralSettings(tradeProvider) {
    switch(tradeProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V2 */ .z4.UNISWAP_V2:
            return uniswapV2Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.UNISWAP_V3 */ .z4.UNISWAP_V3:
            return uniswapV3Settings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.ZRX */ .z4.ZRX:
            return zrxSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SUSHISWAP */ .z4.SUSHISWAP:
            return sushiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.SASHIMISWAP */ .z4.SASHIMISWAP:
            return sashimiswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.QUICKSWAP */ .z4.QUICKSWAP:
            return qucikswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return pancakeswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return balancerSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.DODO */ .z4.DODO:
            return dodoSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(tradeProvider);
    }
}
//#endregion
//#region data provider general settings
const coinGeckoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoSettings`, '');
const coinMarketCapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapSettings`, '');
const coinUniswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapSettings`, '');
/**
 * The general settings of specific data provider
 */ function getCurrentDataProviderGeneralSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
//#region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+currentCoinUniswapPreferredCoinId`, '{}');
function getCurrentPreferredCoinIdSettings(dataProvider) {
    switch(dataProvider){
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO:
            return coinGeckoPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_MARKET_CAP */ .FW.COIN_MARKET_CAP:
            return coinMarketCapPreferredCoinId;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.UNISWAP_INFO */ .FW.UNISWAP_INFO:
            return coinUniswapPreferredCoinId;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(dataProvider);
    }
}
//#endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniSwap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_IDENTIFIER */ .J3}+approvedTokens`, '[]');


/***/ }),

/***/ 51898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

}]);