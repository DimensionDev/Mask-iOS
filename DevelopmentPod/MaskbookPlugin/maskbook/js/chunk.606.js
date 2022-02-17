"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[606],{

/***/ 53322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ indexedDB_KVStorageBackend),
/* harmony export */   "c": () => (/* binding */ inMemory_KVStorageBackend)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89650);


const indexedDB_KVStorageBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createIndexedDB_KVStorageBackend */ .Ic)('mask-kv', (k, v)=>_shared__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_persistent__.sendByBroadcast */ .ql.events.__kv_backend_persistent__.sendByBroadcast([
        k,
        v
    ])
);
const inMemory_KVStorageBackend = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .createInMemoryKVStorageBackend */ .q0)((k, v)=>_shared__WEBPACK_IMPORTED_MODULE_1__/* .MaskMessages.events.__kv_backend_in_memory__.sendByBroadcast */ .ql.events.__kv_backend_in_memory__.sendByBroadcast([
        k,
        v
    ])
);


/***/ }),

/***/ 49639:
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
  "createPersonaByPrivateKey": () => (/* binding */ createPersonaByPrivateKey),
  "deletePersona": () => (/* reexport */ database/* deletePersona */.FB),
  "detachProfile": () => (/* reexport */ db/* detachProfileDB */.AY),
  "exportPersonaPrivateKey": () => (/* binding */ exportPersonaPrivateKey),
  "getCurrentPersonaAvatar": () => (/* binding */ getCurrentPersonaAvatar),
  "logoutPersona": () => (/* reexport */ database/* logoutPersona */.lW),
  "patchCreateNewRelation": () => (/* binding */ patchCreateNewRelation),
  "patchCreateOrUpdateRelation": () => (/* binding */ patchCreateOrUpdateRelation),
  "queryLastPersonaCreated": () => (/* binding */ queryLastPersonaCreated),
  "queryMyPersonas": () => (/* binding */ queryMyPersonas),
  "queryMyProfiles": () => (/* binding */ queryMyProfiles),
  "queryOwnedPersonaInformation": () => (/* binding */ queryOwnedPersonaInformation),
  "queryPagedPostHistory": () => (/* binding */ queryPagedPostHistory),
  "queryPersona": () => (/* reexport */ database/* queryPersona */.pR),
  "queryPersonaByMnemonic": () => (/* binding */ queryPersonaByMnemonic),
  "queryPersonaByPrivateKey": () => (/* binding */ queryPersonaByPrivateKey),
  "queryPersonaByProfile": () => (/* reexport */ database/* queryPersonaByProfile */.Id),
  "queryPersonaRecordsFromIndexedDB": () => (/* binding */ queryPersonaRecordsFromIndexedDB),
  "queryPersonas": () => (/* binding */ queryPersonas),
  "queryPostsDB": () => (/* reexport */ database/* queryPostsDB */.hZ),
  "queryPrivateKey": () => (/* reexport */ database/* queryPrivateKey */.wb),
  "queryProfile": () => (/* reexport */ database/* queryProfile */.JL),
  "queryProfilePaged": () => (/* reexport */ database/* queryProfilePaged */.V6),
  "queryProfileRecordFromIndexedDB": () => (/* binding */ queryProfileRecordFromIndexedDB),
  "queryProfiles": () => (/* binding */ queryProfiles),
  "queryProfilesWithIdentifiers": () => (/* binding */ queryProfilesWithIdentifiers),
  "queryRelationPaged": () => (/* binding */ queryRelationPaged),
  "queryRelationsRecordFromIndexedDB": () => (/* binding */ queryRelationsRecordFromIndexedDB),
  "removeProfile": () => (/* binding */ removeProfile),
  "renamePersona": () => (/* reexport */ database/* renamePersona */.rR),
  "resolveIdentity": () => (/* binding */ resolveIdentity),
  "restoreFromBackup": () => (/* binding */ restoreFromBackup),
  "restoreFromBase64": () => (/* binding */ restoreFromBase64),
  "restoreFromMnemonicWords": () => (/* binding */ restoreFromMnemonicWords),
  "restoreFromObject": () => (/* binding */ restoreFromObject),
  "setupPersona": () => (/* reexport */ database/* setupPersona */.gn),
  "signWithPersona": () => (/* reexport */ signWithPersona),
  "updateCurrentPersonaAvatar": () => (/* binding */ updateCurrentPersonaAvatar),
  "updateProfileInfo": () => (/* binding */ updateProfileInfo),
  "updateRelation": () => (/* binding */ updateRelation),
  "validateMnemonic": () => (/* reexport */ mnemonic_code/* validateMnemonic */._I)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var src = __webpack_require__(68440);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.1/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(61844);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.1/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(4799);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(87926);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var shared_base_src = __webpack_require__(87470);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(30933);
// EXTERNAL MODULE: ./background/database/persona/web.ts + 1 modules
var web = __webpack_require__(91264);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts
var latest = __webpack_require__(19847);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(71947);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeService.ts + 1 modules
var WelcomeService = __webpack_require__(64157);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(99799);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/extension/background-script/SettingsService.ts
var SettingsService = __webpack_require__(31270);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ./src/modules/CryptoAlgorithm/helper.ts
var helper = __webpack_require__(69694);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/orderBy.js
var orderBy = __webpack_require__(50350);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(28926);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ethereumjs-util@7.1.0/node_modules/ethereumjs-util/dist.browser/index.js
var dist_browser = __webpack_require__(98257);
// EXTERNAL MODULE: ./src/extension/background-script/HelperService/index.ts + 2 modules
var HelperService = __webpack_require__(71259);
;// CONCATENATED MODULE: ./src/extension/background-script/IdentityServices/sign.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];





async function signWithPersona({ message , method , identifier  }) {
    if (method !== 'eth') throw new Error('Unknown sign method');
    const requestID = Math.random().toString(16).slice(3);
    await (0,HelperService.openPopupWindow)(shared_base_src/* PopupRoutes.PersonaSignRequest */.mZ.PersonaSignRequest, {
        message,
        requestID,
        identifier
    });
    const waitForApprove = new Promise((resolve, reject)=>{
        (0,shared_base_src/* delay */.gw)(1000 * 60).then(()=>reject(new Error('Timeout'))
        );
        utils/* MaskMessages.events.personaSignRequest.on */.ql.events.personaSignRequest.on((approval)=>{
            if (approval.requestID !== requestID) return;
            if (!approval.selectedPersona) reject(new Error('Persona Rejected'));
            resolve(approval.selectedPersona);
        });
    });
    const signer = await waitForApprove;
    const persona = (await (0,db/* queryPersonasWithPrivateKey */.Eq)()).find((x)=>x.identifier.equals(signer)
    );
    if (!persona) throw new Error('Persona not found');
    // will have problem with UTF-8?
    const length = message.length;
    const messageHash = (0,dist_browser.keccakFromString)(`\x19Ethereum Signed Message:\n${length}${message}`, 256);
    const privateKey = Buffer.from((0,shared_base_src/* fromBase64URL */.mz)(persona.privateKey.d));
    const signature = (0,dist_browser.ecsign)(messageHash, privateKey);
    return {
        persona: persona.identifier,
        signature: {
            raw: signature,
            signature: (0,dist_browser.toRpcSig)(signature.v, signature.r, signature.s),
            EIP2098: (0,dist_browser.toCompactSig)(signature.v, signature.r, signature.s)
        },
        address: (0,dist_browser.bufferToHex)((0,dist_browser.publicToAddress)((0,dist_browser.privateToPublic)(privateKey))),
        messageHex: (0,dist_browser.bufferToHex)(Buffer.from(new TextEncoder().encode(message)))
    };
}

;// CONCATENATED MODULE: ./src/extension/background-script/IdentityService.ts


















(0,umd.assertEnvironment)(umd.Environment.ManifestBackground);

// #region Profile

function queryProfiles(network) {
    return (0,database/* queryProfilesWithQuery */.X8)({
        network
    });
}
async function queryProfileRecordFromIndexedDB() {
    return (0,web.queryProfilesDB)({});
}
function queryProfilesWithIdentifiers(identifiers) {
    return (0,database/* queryProfilesWithQuery */.X8)({
        identifiers
    });
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
        await (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* createOrUpdateProfileDB */.o7)(rec, t)
        );
    }
    if (data.avatarURL) await (0,database/* storeAvatar */.Zk)(identifier, data.avatarURL);
}
function removeProfile(id) {
    return (0,db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,db/* deleteProfileDB */.B4)(id, t)
    );
}
// #endregion
// #region Persona

async function queryPersonaByMnemonic(mnemonic, password) {
    const verify = (0,src/* validateMnemonic */._I)(mnemonic);
    if (!verify) {
        throw new Error('Verify error');
    }
    const { key  } = await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(mnemonic, password);
    const identifier = (0,shared_base_src/* ECKeyIdentifierFromJsonWebKey */.CH)(key.privateKey);
    const persona = await (0,db/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await (0,database/* loginPersona */.A)(persona.identifier);
        return persona;
    }
    return null;
}
async function queryPersonas(identifier, requirePrivateKey = false) {
    if (typeof identifier === 'undefined') return (await (0,db/* queryPersonasDB */._P)({
        hasPrivateKey: requirePrivateKey
    })).map(database/* personaRecordToPersona */.m3);
    const x = await (0,db/* queryPersonaDB */.Hm)(identifier);
    if (!x || !x.privateKey && requirePrivateKey) return [];
    return [
        (0,database/* personaRecordToPersona */.m3)(x)
    ];
}
async function queryPersonaRecordsFromIndexedDB() {
    return (0,web.queryPersonasDB)();
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
async function queryLastPersonaCreated() {
    const all = await queryPersonas(undefined, true);
    return (0,head/* default */.Z)((0,orderBy/* default */.Z)(all, (x)=>x.createdAt
    , 'desc'));
}
async function backupPersonaPrivateKey(identifier) {
    const x = await (0,db/* queryPersonaDB */.Hm)(identifier);
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
            const linkedProfile = await (0,database/* queryProfile */.JL)(profile);
            map.push({
                identifier: profile,
                nickname: linkedProfile.nickname,
                avatar: linkedProfile.avatar
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
        return (0,database/* queryPersona */.pR)(shared_base_src/* Identifier.fromString */.xb.fromString(object.personas[0].identifier, shared_base_src/* ECKeyIdentifier */.ob).unwrap());
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
    return restoreFromObject(JSON.parse((0,esm/* decodeText */.rj)((0,esm/* decodeArrayBuffer */.xe)(base64))));
}
async function restoreFromBackup(backup) {
    return restoreFromObject((0,BackupFile/* fixBackupFilePermission */.j)((0,latest/* UpgradeBackupJSONFile */.a)((0,BackupFile/* convertBackupFileToObject */.l)(backup))));
}
// #endregion
// #region Profile & Persona
/**
 * Remove an identity.
 */ 
async function attachProfile(source, target, data) {
    if (target instanceof shared_base_src/* ProfileIdentifier */.WO) {
        const profile = await (0,database/* queryProfile */.JL)(target);
        if (!profile.linkedPersona) throw new Error('target not found');
        target = profile.linkedPersona.identifier;
    }
    return (0,db/* attachProfileDB */.tc)(source, target, data);
}

// #endregion
// #region Post

async function queryPagedPostHistory(options, count) {
    const currentPersona = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (currentPersona) {
        return (0,database/* queryPostPagedDB */.xN)(currentPersona, options, count);
    }
    return [];
}
// #endregion
// #region Relation
async function patchCreateOrUpdateRelation(profiles, personas, defaultFavor = shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED) {
    await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        for (const persona of personas){
            for (const profile of profiles){
                const relationsInDB = await (0,db/* queryRelations */.bF)(persona, profile);
                if (relationsInDB.length > 0) {
                    for (const _ of relationsInDB){
                        await updateRelation(profile, persona, defaultFavor);
                    }
                    continue;
                }
                await (0,db/* createRelationDB */.N8)({
                    profile: profile,
                    linked: persona,
                    favor: defaultFavor
                }, t, true);
            }
        }
    });
    return;
}
async function patchCreateNewRelation(relations) {
    await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        for (const relation of relations){
            const relationsInDB = await (0,db/* queryRelations */.bF)(relation.linked, relation.profile);
            if (relationsInDB.length > 0) {
                for (const relation of relationsInDB){
                    await (0,db/* updateRelationDB */.Jx)(relation, t, true);
                }
                continue;
            }
            await (0,db/* createRelationDB */.N8)({
                ...relation,
                favor: relation.favor === shared_base_src/* RelationFavor.DEPRECATED */.Kn.DEPRECATED ? shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED : relation.favor
            }, t);
        }
    });
    return;
}
async function createNewRelation(profile, linked, favor = shared_base_src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED) {
    const t = await (0,db/* createRelationsTransaction */.cl)();
    const relationInDB = await (0,db/* queryRelations */.bF)(linked, profile);
    if (relationInDB.length > 0) return;
    await (0,db/* createRelationDB */.N8)({
        profile,
        linked,
        favor
    }, t);
}
async function queryRelationsRecordFromIndexedDB() {
    return (0,web.queryRelations)();
}
async function queryRelationPaged(options, count) {
    const currentPersona = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (currentPersona) {
        return (0,db/* queryRelationsPagedDB */.PF)(currentPersona, options, count);
    }
    return [];
}
async function updateRelation(profile, linked, favor) {
    const t = await (0,db/* createRelationsTransaction */.cl)();
    await (0,db/* updateRelationDB */.Jx)({
        profile,
        linked,
        favor
    }, t);
}
// #endregion
/**
 * In older version of Mask, identity is marked as `ProfileIdentifier(network, '$unknown')` or `ProfileIdentifier(network, '$self')`. After upgrading to the newer version of Mask, Mask will try to find the current user in that network and call this function to replace old identifier into a "resolved" identity.
 * @param identifier The resolved identity
 */ async function resolveIdentity(identifier) {
    const unknown = new shared_base_src/* ProfileIdentifier */.WO(identifier.network, '$unknown');
    const self = new shared_base_src/* ProfileIdentifier */.WO(identifier.network, '$self');
    const r = await (0,db/* queryProfilesDB */.i2)({
        identifiers: [
            unknown,
            self
        ]
    });
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
        await (0,db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
            await (0,db/* createProfileDB */.ah)(final, t);
            await (0,db/* deleteProfileDB */.B4)(unknown, t).catch(()=>{});
            await (0,db/* deleteProfileDB */.B4)(self, t).catch(()=>{});
        });
    } catch  {
    // the profile already exists
    }
}
// #endregion
// #region avatar
const updateCurrentPersonaAvatar = async (avatar)=>{
    const identifier = await (0,SettingsService.getCurrentPersonaIdentifier)();
    if (identifier) {
        await (0,database/* storeAvatar */.Zk)(identifier, await (0,esm/* blobToArrayBuffer */.vZ)(avatar));
        utils/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
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
// #endregion
// #region Private / Public key
async function exportPersonaPrivateKey(identifier) {
    const profile = await (0,database/* queryPersonaRecord */.yQ)(identifier);
    if (!(profile === null || profile === void 0 ? void 0 : profile.privateKey)) return '';
    const encodePrivateKey = (0,encode/* encode */.c)(profile.privateKey);
    return (0,esm/* encodeArrayBuffer */.ll)(encodePrivateKey);
}
async function queryPersonaByPrivateKey(privateKeyString) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    const identifier = (0,shared_base_src/* ECKeyIdentifierFromJsonWebKey */.CH)(privateKey);
    const persona = await (0,db/* queryPersonaDB */.Hm)(identifier, undefined, true);
    if (persona) {
        await (0,database/* loginPersona */.A)(persona.identifier);
        return (0,database/* personaRecordToPersona */.m3)(persona);
    }
    return null;
}
async function createPersonaByPrivateKey(privateKeyString, nickname) {
    const privateKey = (0,decode/* decode */.Jx)((0,esm/* decodeArrayBuffer */.xe)(privateKeyString));
    const key = await (0,helper/* split_ec_k256_keypair_into_pub_priv */.Sl)(privateKey);
    return (0,database/* createPersonaByJsonWebKey */.w0)({
        privateKey: key.privateKey,
        publicKey: key.publicKey,
        nickname
    });
}
// #endregion



/***/ }),

/***/ 31270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPluginID": () => (/* binding */ getPluginID),
/* harmony export */   "setPluginID": () => (/* binding */ setPluginID),
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "setTheme": () => (/* binding */ setTheme),
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage),
/* harmony export */   "setLanguage": () => (/* binding */ setLanguage),
/* harmony export */   "getChainId": () => (/* binding */ getChainId),
/* harmony export */   "setChainId": () => (/* binding */ setChainId),
/* harmony export */   "getTokenPrices": () => (/* binding */ getTokenPrices),
/* harmony export */   "setTokenPrices": () => (/* binding */ setTokenPrices),
/* harmony export */   "getGasOptions": () => (/* binding */ getGasOptions),
/* harmony export */   "setGasOptions": () => (/* binding */ setGasOptions),
/* harmony export */   "getGasPrice": () => (/* binding */ getGasPrice),
/* harmony export */   "setGasPrice": () => (/* binding */ setGasPrice),
/* harmony export */   "getTrendingDataSource": () => (/* binding */ getTrendingDataSource),
/* harmony export */   "setTrendingDataSource": () => (/* binding */ setTrendingDataSource),
/* harmony export */   "getCurrentSelectedWalletProvider": () => (/* binding */ getCurrentSelectedWalletProvider),
/* harmony export */   "setCurrentSelectedWalletProvider": () => (/* binding */ setCurrentSelectedWalletProvider),
/* harmony export */   "getCurrentSelectedWalletNetwork": () => (/* binding */ getCurrentSelectedWalletNetwork),
/* harmony export */   "setCurrentSelectedWalletNetwork": () => (/* binding */ setCurrentSelectedWalletNetwork),
/* harmony export */   "getSelectedWalletAddress": () => (/* binding */ getSelectedWalletAddress),
/* harmony export */   "setSelectedWalletAddress": () => (/* binding */ setSelectedWalletAddress),
/* harmony export */   "getSelectedMaskWalletAddress": () => (/* binding */ getSelectedMaskWalletAddress),
/* harmony export */   "setSelectedMaskWalletAddress": () => (/* binding */ setSelectedMaskWalletAddress),
/* harmony export */   "getCurrentMaskWalletChainId": () => (/* binding */ getCurrentMaskWalletChainId),
/* harmony export */   "setCurrentMaskWalletChainId": () => (/* binding */ setCurrentMaskWalletChainId),
/* harmony export */   "getCurrentMaskWalletNetworkType": () => (/* binding */ getCurrentMaskWalletNetworkType),
/* harmony export */   "setCurrentMaskWalletNetworkType": () => (/* binding */ setCurrentMaskWalletNetworkType),
/* harmony export */   "getCurrentPortfolioDataProvider": () => (/* binding */ getCurrentPortfolioDataProvider),
/* harmony export */   "setCurrentPortfolioDataProvider": () => (/* binding */ setCurrentPortfolioDataProvider),
/* harmony export */   "getCurrentCollectibleDataProvider": () => (/* binding */ getCurrentCollectibleDataProvider),
/* harmony export */   "setCurrentCollectibleDataProvider": () => (/* binding */ setCurrentCollectibleDataProvider),
/* harmony export */   "getCurrentMaskWalletLockedSettings": () => (/* binding */ getCurrentMaskWalletLockedSettings),
/* harmony export */   "setCurrentMaskWalletLockedSettings": () => (/* binding */ setCurrentMaskWalletLockedSettings),
/* harmony export */   "getWalletAllowTestChain": () => (/* binding */ getWalletAllowTestChain),
/* harmony export */   "getCurrentPersonaIdentifier": () => (/* binding */ getCurrentPersonaIdentifier),
/* harmony export */   "setCurrentPersonaIdentifier": () => (/* binding */ setCurrentPersonaIdentifier),
/* harmony export */   "getPluginMinimalModeEnabled": () => (/* binding */ getPluginMinimalModeEnabled),
/* harmony export */   "setPluginMinimalModeEnabled": () => (/* binding */ setPluginMinimalModeEnabled),
/* harmony export */   "openTab": () => (/* binding */ openTab),
/* harmony export */   "__kv_storage_write__": () => (/* binding */ __kv_storage_write__),
/* harmony export */   "__kv_storage_read__": () => (/* binding */ __kv_storage_read__)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29730);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87050);
/* harmony import */ var _plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45627);
/* harmony import */ var _IdentityService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49639);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18274);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89650);
/* harmony import */ var _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(53322);








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
const [getPluginID, setPluginID] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .pluginIDSettings */ .tR);
const [getTheme, setTheme] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .appearanceSettings */ .OF);
const [getLanguage, setLanguage] = create(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .languageSettings */ .pQ);
const [getChainId, setChainId] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentChainIdSettings */ .wU);
const [getTokenPrices, setTokenPrices] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentTokenPricesSettings */ .JC);
const [getGasOptions, setGasOptions] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentGasOptionsSettings */ .GZ);
const [getGasPrice, setGasPrice] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentGasOptionsSettings */ .GZ);
const [getTrendingDataSource, setTrendingDataSource] = create(_plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_2__/* .currentDataProviderSettings */ .gG);
const [getCurrentSelectedWalletProvider, setCurrentSelectedWalletProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentProviderSettings */ .t1);
const [getCurrentSelectedWalletNetwork, setCurrentSelectedWalletNetwork] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentNetworkSettings */ .fX);
const [getSelectedWalletAddress, setSelectedWalletAddress] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentAccountSettings */ .aK);
const [getSelectedMaskWalletAddress, setSelectedMaskWalletAddress] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletAccountSettings */ .T_);
const [getCurrentMaskWalletChainId, setCurrentMaskWalletChainId] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletChainIdSettings */ .DT);
const [getCurrentMaskWalletNetworkType, setCurrentMaskWalletNetworkType] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletNetworkSettings */ .br);
const [getCurrentPortfolioDataProvider, setCurrentPortfolioDataProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentFungibleAssetDataProviderSettings */ .rI);
const [getCurrentCollectibleDataProvider, setCurrentCollectibleDataProvider] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentNonFungibleAssetDataProviderSettings */ .uR);
const [getCurrentMaskWalletLockedSettings, setCurrentMaskWalletLockedSettings] = create(_plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__/* .currentMaskWalletLockStatusSettings */ .Jg);
async function getWalletAllowTestChain() {
    return _shared__WEBPACK_IMPORTED_MODULE_5__/* .Flags.wallet_allow_testnet */ .vU.wallet_allow_testnet;
}
async function getCurrentPersonaIdentifier() {
    await _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.readyPromise */ .cn.readyPromise;
    const personas = (await (0,_IdentityService__WEBPACK_IMPORTED_MODULE_3__.queryMyPersonas)()).sort((a, b)=>a.createdAt > b.createdAt ? 1 : 0
    ).map((x)=>x.identifier
    );
    const newVal = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.value */ .cn.value, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrapOr((0,lodash_unified__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(personas));
    if (!newVal) return undefined;
    if (personas.find((x)=>x.equals(newVal)
    )) return newVal;
    if (personas[0]) _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.value */ .cn.value = personas[0].toText();
    return personas[0];
}
async function setCurrentPersonaIdentifier(x) {
    await _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.readyPromise */ .cn.readyPromise;
    _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPersonaIdentifier.value */ .cn.value = x.toText();
}
async function getPluginMinimalModeEnabled(id) {
    return !_settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPluginMinimalModeNOTEnabled */ .VO['plugin:' + id].value;
}
async function setPluginMinimalModeEnabled(id, enabled) {
    _settings_settings__WEBPACK_IMPORTED_MODULE_1__/* .currentPluginMinimalModeNOTEnabled */ .VO['plugin:' + id].value = !enabled;
    _shared__WEBPACK_IMPORTED_MODULE_5__/* .MaskMessages.events.pluginMinimalModeChanged.sendToAll */ .ql.events.pluginMinimalModeChanged.sendToAll([
        id,
        enabled
    ]);
}
async function openTab(url) {
    await browser.tabs.create({
        active: true,
        url
    });
}
async function __kv_storage_write__(kind, key, value) {
    if (kind === 'memory') {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .inMemory_KVStorageBackend.setValue */ .c.setValue(key, value);
    } else {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .indexedDB_KVStorageBackend.setValue */ .E.setValue(key, value);
    }
}
async function __kv_storage_read__(kind, key) {
    if (kind === 'memory') {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .inMemory_KVStorageBackend.getValue */ .c.getValue(key);
    } else {
        return _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__/* .indexedDB_KVStorageBackend.getValue */ .E.getValue(key);
    }
}


/***/ }),

/***/ 64157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "checkPermissionAndOpenWalletRecovery": () => (/* binding */ checkPermissionAndOpenWalletRecovery),
  "checkPermissionsAndRestore": () => (/* binding */ checkPermissionsAndRestore),
  "confirmBackup": () => (/* reexport */ restoreBackup/* confirmBackup */.DV),
  "createBackupFile": () => (/* binding */ createBackupFile),
  "createBackupUrl": () => (/* binding */ createBackupUrl),
  "createPersonaByMnemonic": () => (/* reexport */ database/* createPersonaByMnemonic */.A8),
  "downloadBackup": () => (/* binding */ downloadBackup),
  "downloadBackupV2": () => (/* binding */ downloadBackupV2),
  "generateBackupJSON": () => (/* reexport */ generateBackupJSON),
  "generateBackupPreviewInfo": () => (/* reexport */ generateBackupPreviewInfo),
  "getUnconfirmedBackup": () => (/* reexport */ restoreBackup/* getUnconfirmedBackup */.Kz),
  "openOptionsPage": () => (/* binding */ openOptionsPage),
  "parseBackupStr": () => (/* binding */ parseBackupStr),
  "restoreBackup": () => (/* reexport */ restoreBackup/* restoreBackup */.pi),
  "restoreNewIdentityWithMnemonicWord": () => (/* binding */ restoreNewIdentityWithMnemonicWord),
  "setUnconfirmedBackup": () => (/* reexport */ restoreBackup/* setUnconfirmedBackup */.cg)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20211215044858-27d964f_903ac568566cb9483e6a82070d95c042/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(14381);
// EXTERNAL MODULE: ../shared-base/src/index.ts
var src = __webpack_require__(87470);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(28926);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(87926);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(30933);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/localKeyGenerate.ts
var localKeyGenerate = __webpack_require__(17281);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(25071);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts
var latest = __webpack_require__(19847);
// EXTERNAL MODULE: ./background/database/post/index.ts
var post = __webpack_require__(97989);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PersonaRecord.ts
var PersonaRecord = __webpack_require__(82614);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/ProfileRecord.ts
var ProfileRecord = __webpack_require__(68760);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PostRecord.ts
var PostRecord = __webpack_require__(78828);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 35 modules
var services = __webpack_require__(7022);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/WalletRecord.ts
var WalletRecord = __webpack_require__(37200);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts
var plugin_infra_src = __webpack_require__(94531);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/RelationRecord.ts
var RelationRecord = __webpack_require__(25443);
;// CONCATENATED MODULE: ./src/extension/background-script/WelcomeServices/generateBackupJSON.ts












async function generateBackupJSON(opts = {}) {
    const personas = [];
    const posts = [];
    const wallets = [];
    const profiles = [];
    const relations = [];
    const plugins = {};
    if (!opts.filter) {
        if (!opts.noPersonas) await backupPersonas();
        if (!opts.noProfiles) await backProfiles();
    } else if (opts.filter.type === 'persona') {
        if (opts.noPersonas) throw new TypeError('Invalid opts');
        await backupPersonas(opts.filter.wanted);
        const wantedProfiles = personas.flatMap((q)=>q.linkedProfiles.map((y)=>src/* Identifier.fromString */.xb.fromString(y[0], src/* ProfileIdentifier */.WO)
            ).filter((k)=>k.ok
            ).map((x)=>x.val
            )
        );
        if (!opts.noProfiles) await backProfiles(wantedProfiles);
    }
    if (!opts.noPosts) await backupAllPosts();
    if (!opts.noRelations) await backupAllRelations();
    if (!opts.noWallets) {
        await backupAllWallets();
        await backupAllLegacyWallets();
    }
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
        relations,
        userGroups: []
    };
    if (Object.keys(plugins).length) file.plugin = plugins;
    return file;
    async function backupAllPosts() {
        posts.push(...(await (0,post/* queryPostsDB */.hZ)(()=>true
        )).map(PostRecord/* PostRecordToJSONFormat */.k));
    }
    async function backProfiles(of) {
        const data = (await (0,db/* queryProfilesDB */.i2)({
            identifiers: of,
            hasLinkedPersona: true
        })).map(ProfileRecord/* ProfileRecordToJSONFormat */.P);
        profiles.push(...data);
    }
    async function backupPersonas(of) {
        const data = (await (0,db/* queryPersonasDB */._P)({
            initialized: true,
            hasPrivateKey: opts.hasPrivateKeyOnly,
            identifiers: of
        }, undefined, true)).map(PersonaRecord/* PersonaRecordToJSONFormat */.O);
        personas.push(...data);
    }
    async function backupAllRelations() {
        const data = (await (0,db/* queryRelations */.bF)()).map(RelationRecord/* RelationRecordToJSONFormat */.K);
        relations.push(...data);
    }
    async function backupAllWallets() {
        const allSettled = await Promise.allSettled((await (0,services.getWallets)(types/* ProviderType.MaskWallet */.lP.MaskWallet)).map(async (wallet)=>{
            return {
                ...wallet,
                mnemonic: wallet.derivationPath ? await (0,services.exportMnemonic)(wallet.address) : undefined,
                privateKey: wallet.derivationPath ? undefined : await (0,services.exportPrivateKey)(wallet.address)
            };
        }));
        const wallets_ = allSettled.map((x)=>x.status === 'fulfilled' ? (0,WalletRecord/* WalletRecordToJSONFormat */.dp)(x.value) : null
        );
        if (wallets_.some((x)=>!x
        )) throw new Error('Failed to backup wallets.');
        wallets.push(...wallets_);
    }
    async function backupAllLegacyWallets() {
        const wallets_ = (await (0,services.getLegacyWallets)(types/* ProviderType.MaskWallet */.lP.MaskWallet)).map(WalletRecord/* LegacyWalletRecordToJSONFormat */.ww);
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
                const result = await (0,src/* timeout */.Vs)(backupCreator(), 3000);
                if (result.none) return;
                // We limit the plugin contributed backups must be simple objects.
                // We may allow plugin to store binary if we're moving to binary backup format like MessagePack.
                plugins[plugin.ID] = result.map(JSON.stringify).map(JSON.parse).val;
            }
            if (false) {}
            return backupPlugin().catch((error)=>console.error(`[@masknet/plugin-infra] Plugin ${plugin.ID} failed to backup`, error)
            );
        }));
    }
}
async function generateBackupPreviewInfo(opts = {}) {
    const json = await generateBackupJSON(opts);
    return (0,latest/* getBackupPreviewInfo */.V)(json);
}

// EXTERNAL MODULE: ./src/extension/background-script/HelperService/extensionPermission.ts
var extensionPermission = __webpack_require__(39003);
// EXTERNAL MODULE: ./shared/index.ts + 1 modules
var shared = __webpack_require__(89650);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(76108);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(71947);
// EXTERNAL MODULE: ./src/extension/background-script/HelperService/index.ts + 2 modules
var HelperService = __webpack_require__(71259);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js
var format = __webpack_require__(20478);
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
        await (0,db/* attachProfileDB */.tc)(info.whoAmI, ecKeyID, info.details || {
            connectionConfirmState: 'pending'
        });
    }
    return ecKeyID;
}
async function downloadBackup(obj, type) {
    const { buffer , mimeType , fileName  } = await createBackupInfo(obj, type);
    (0,shared/* saveFileFromBuffer */.dH)(buffer, mimeType, fileName);
    return obj;
}
async function downloadBackupV2(buffer) {
    (0,shared/* saveFileFromBuffer */.dH)(buffer, 'application/octet-stream', makeBackupName('bin'));
}
async function createBackupFile(options) {
    const obj = await generateBackupJSON(options);
    if (!options.download) return obj;
    // Don't make the download pop so fast
    await (0,src/* delay */.gw)(1000);
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
    const buffer = (0,esm/* encodeText */.YT)(string);
    const mimeType = type === 'txt' ? 'text/plain' : 'application/json';
    return {
        buffer,
        mimeType,
        fileName: makeBackupName(type !== null && type !== void 0 ? type : 'json')
    };
}
async function openOptionsPage(route, search) {
    return browser.tabs.create({
        active: true,
        url: browser.runtime.getURL(`/dashboard.html#${route}${search ? `?${search}` : ''}`)
    });
}

function parseBackupStr(str) {
    const json = (0,utils/* fixBackupFilePermission */.jK)((0,latest/* UpgradeBackupJSONFile */.a)((0,utils/* convertBackupFileToObject */.lR)(str)));
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
        const permissions = await (0,utils/* extraPermissions */.uM)(json.grantedHostPermissions);
        if (permissions.length) {
            const granted = await (0,extensionPermission/* requestExtensionPermission */.r)({
                origins: permissions
            });
            if (!granted) return;
        }
        await (0,restoreBackup/* restoreBackup */.pi)(json);
    }
}
async function checkPermissionAndOpenWalletRecovery(id) {
    const json = await (0,restoreBackup/* getUnconfirmedBackup */.Kz)(id);
    if (json) {
        const permissions = await (0,utils/* extraPermissions */.uM)(json.grantedHostPermissions);
        if (permissions.length) {
            const granted = await (0,extensionPermission/* requestExtensionPermission */.r)({
                origins: permissions
            });
            if (!granted) return;
        }
        await (0,HelperService.openPopupWindow)(src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered, {
            backupId: id
        });
    }
}
function makeBackupName(extension) {
    const now = (0,format/* default */.Z)(Date.now(), 'yyyy-MM-dd');
    return `mask-network-keystore-backup-${now}.${extension}`;
}


/***/ }),

/***/ 71947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pi": () => (/* binding */ restoreBackup),
/* harmony export */   "cg": () => (/* binding */ setUnconfirmedBackup),
/* harmony export */   "Kz": () => (/* binding */ getUnconfirmedBackup),
/* harmony export */   "DV": () => (/* binding */ confirmBackup)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76108);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6057);
/* harmony import */ var _background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30933);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(52646);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82614);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(68760);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PostRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78828);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87926);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(37200);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7022);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(94531);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79594);
/* harmony import */ var _plugins_Wallet_services_wallet_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57384);
/* harmony import */ var _IdentityService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(49639);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_RelationRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(25443);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(39973);
/* harmony import */ var _background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67463);


















/**
 * Restore the backup
 */ async function restoreBackup(json, whoAmI) {
    var ref;
    const data = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .UpgradeBackupJSONFile */ .a_)(json, whoAmI);
    if (!data) throw new TypeError(_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('service_invalid_backup_file'));
    {
        await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
            for (const x of data.personas){
                await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .createOrUpdatePersonaDB */ .lX)((0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_4__/* .PersonaRecordFromJSONFormat */ .r)(x), {
                    explicitUndefinedField: 'ignore',
                    linkedProfiles: 'merge',
                    protectPrivateKey: true
                }, t);
            }
            for (const x1 of data.profiles){
                const { linkedPersona , ...record } = (0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_5__/* .ProfileRecordFromJSONFormat */ .B)(x1);
                await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .createOrUpdateProfileDB */ .o7)(record, t);
                if (linkedPersona) {
                    await (0,_background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__/* .attachProfileDB */ .tc)(record.identifier, linkedPersona, {
                        connectionConfirmState: 'confirmed'
                    }, t);
                }
            }
        });
    }
    for (const [_, x2] of data.wallets.entries()){
        const record = (0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__/* .WalletRecordFromJSONFormat */ .JW)(x2);
        const name = record.name;
        try {
            if (record.storedKeyInfo && record.derivationPath) await (0,_plugins_Wallet_services_wallet_database__WEBPACK_IMPORTED_MODULE_12__/* .addWallet */ .ry)(record.address, name, record.derivationPath, record.storedKeyInfo);
            else if (record.privateKey) await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__.recoverWalletFromPrivateKey)(name, record.privateKey);
            else if (record.mnemonic) {
                // fix a backup bug of pre-v2.2.2 versions
                const accounts = await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__.getDerivableAccounts)(record.mnemonic, 1, 5);
                const index = accounts.findIndex((0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_17__/* .currySameAddress */ .DC)(record.address));
                await (0,_plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__.recoverWalletFromMnemonic)(name, record.mnemonic, index > -1 ? `${_masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_15__/* .HD_PATH_WITHOUT_INDEX_ETHEREUM */ .UB}/${index}` : record.derivationPath);
            }
        } catch (error) {
            console.error(error);
        }
    }
    {
        const t = (0,_background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_16__/* .createTransaction */ ._X)(await (0,_database__WEBPACK_IMPORTED_MODULE_7__/* .PostDBAccess */ .Nz)(), 'readwrite')('post');
        for (const x of data.posts){
            const { val , err  } = ts_results__WEBPACK_IMPORTED_MODULE_11__/* .Result.wrap */ .x4.wrap(()=>(0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PostRecord__WEBPACK_IMPORTED_MODULE_6__/* .PostRecordFromJSONFormat */ .n)(x)
            );
            if (err) continue;
            if (await t.objectStore('post').get(val.identifier.toText())) {
                await (0,_database__WEBPACK_IMPORTED_MODULE_7__/* .updatePostDB */ .rr)(val, 'append', t);
            } else await (0,_database__WEBPACK_IMPORTED_MODULE_7__/* .createPostDB */ .$v)(val, t);
        }
    }
    if ((ref = data.relations) === null || ref === void 0 ? void 0 : ref.length) {
        const relations = data.relations.map(_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_RelationRecord__WEBPACK_IMPORTED_MODULE_14__/* .RelationRecordFromJSONFormat */ .c);
        await (0,_IdentityService__WEBPACK_IMPORTED_MODULE_13__.patchCreateNewRelation)(relations);
    } else {
        // For 1.x backups
        const personas = data.personas.map(_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_4__/* .PersonaRecordFromJSONFormat */ .r).filter((x)=>x.privateKey
        ).map((x)=>x.identifier
        );
        const profiles = data.profiles.map(_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_5__/* .ProfileRecordFromJSONFormat */ .B).map((x)=>x.identifier
        );
        await (0,_IdentityService__WEBPACK_IMPORTED_MODULE_13__.patchCreateOrUpdateRelation)(profiles, personas, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .RelationFavor.UNCOLLECTED */ .Kn.UNCOLLECTED);
    }
    const plugins = [
        ..._masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__/* .activatedPluginsWorker */ .Je
    ];
    const works = new Set();
    for (const [pluginID, item] of Object.entries(data.plugin || {})){
        var ref1;
        const plugin = plugins.find((x)=>x.ID === pluginID
        );
        // should we warn user here?
        if (!plugin) {
            if ([
                ..._masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__/* .registeredPluginIDs */ .fg
            ].includes(pluginID)) console.warn(`[@masknet/plugin-infra] Found a backup of a not enabled plugin ${plugin}`, item);
            else console.warn(`[@masknet/plugin-infra] Found an unknown plugin backup of ${plugin}`, item);
            continue;
        }
        const f = (ref1 = plugin.backup) === null || ref1 === void 0 ? void 0 : ref1.onRestore;
        if (!f) {
            console.warn(`[@masknet/plugin-infra] Found a backup of plugin ${plugin} but it did not register a onRestore callback.`, item);
            continue;
        }
        const x3 = ts_results__WEBPACK_IMPORTED_MODULE_11__/* .Result.wrapAsync */ .x4.wrapAsync(async ()=>{
            const x = await f(item);
            if (x.err) console.error(`[@masknet/plugin-infra] Plugin ${plugin} failed to restore its backup.`, item);
            return x.unwrap();
        });
        works.add(x3);
    }
    await Promise.all(works);
}
const unconfirmedBackup = new Map();
/**
 * Restore backup step 1: store the unconfirmed backup in cached
 * @param id the uuid for each restoration
 * @param json the backup to be cached
 */ async function setUnconfirmedBackup(id, json) {
    unconfirmedBackup.set(id, json);
}
/**
 * Get the unconfirmed backup with uuid
 * @param id the uuid for each restoration
 */ async function getUnconfirmedBackup(id) {
    return unconfirmedBackup.get(id);
}
/**
 * Restore backup step 2: restore the unconfirmed backup with uuid
 * @param id the uuid for each restoration
 */ async function confirmBackup(id, whoAmI) {
    if (unconfirmedBackup.has(id)) {
        await restoreBackup(unconfirmedBackup.get(id), whoAmI);
        unconfirmedBackup.delete(id);
    } else {
        throw new Error('cannot find backup');
    }
}


/***/ }),

/***/ 16053:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22407);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94531);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(3294), __webpack_require__.e(5132), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(4477), __webpack_require__.e(2189), __webpack_require__.e(8253), __webpack_require__.e(1398), __webpack_require__.e(1860)]).then(__webpack_require__.bind(__webpack_require__, 57621))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 45627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings),
/* harmony export */   "Aj": () => (/* binding */ getCurrentTradeProviderGeneralSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "EG": () => (/* binding */ approvedTokensFromUniSwap)
/* harmony export */ });
/* unused harmony export getCurrentDataProviderGeneralSettings */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14381);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6174);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6057);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22487);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85123);





/**
 * The slippage tolerance of trader
 */ const currentSlippageSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+slippageTolerance`, _constants__WEBPACK_IMPORTED_MODULE_3__/* .SLIPPAGE_DEFAULT */ .Nd, {
    primary: ()=>''
});
/**
 * Single Hop
 */ const currentSingleHopOnlySettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+singleHopOnly`, false, {
    primary: ()=>''
});
/**
 * The default data provider
 */ const currentDataProviderSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createGlobalSettings */ .TI)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+dataProvider`, _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .DataProvider.COIN_GECKO */ .FW.COIN_GECKO, {
    primary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_primary')
    ,
    secondary: ()=>_shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__/* .i18n.t */ .a.t('plugin_trader_settings_data_source_secondary')
});
const uniswapV2Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+uniswap+v2`, '');
const uniswapV3Settings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+uniswap+v3`, '');
const zrxSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+zrx`, '');
const sushiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+sushiswap`, '');
const sashimiswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+sashimiswap`, '');
const quickswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+quickswap`, '');
const pancakeswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+pancakeswap`, '');
const balancerSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+balancer`, '');
const dodoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+dodo`, '');
const bancorSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+bancor`, '');
const traderjoeSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+traderjoe`, '');
const pangolinSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+pangolin`, '');
const openoceanSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+openocean`, '');
const trisolarisSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+trisolaris`, '');
const wannaswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+tradeProvider+wannaswap`, '');
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
            return quickswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANCAKESWAP */ .z4.PANCAKESWAP:
            return pancakeswapSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.BALANCER */ .z4.BALANCER:
            return balancerSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.DODO */ .z4.DODO:
            return dodoSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.BANCOR */ .z4.BANCOR:
            return bancorSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.TRADERJOE */ .z4.TRADERJOE:
            return traderjoeSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.OPENOCEAN */ .z4.OPENOCEAN:
            return openoceanSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.PANGOLIN */ .z4.PANGOLIN:
            return pangolinSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.TRISOLARIS */ .z4.TRISOLARIS:
            return trisolarisSettings;
        case _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__/* .TradeProvider.WANNASWAP */ .z4.WANNASWAP:
            return wannaswapSettings;
        default:
            (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(tradeProvider);
    }
}
// #endregion
// #region data provider general settings
const coinGeckoSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinGeckoSettings`, '');
const coinMarketCapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinMarketCapSettings`, '');
const coinUniswapSettings = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinUniswapSettings`, '');
/**
 * The general settings of specific data provider
 */ function getCurrentDataProviderGeneralSettings(dataProvider) {
    switch(dataProvider){
        case DataProvider.COIN_GECKO:
            return coinGeckoSettings;
        case DataProvider.COIN_MARKET_CAP:
            return coinMarketCapSettings;
        case DataProvider.UNISWAP_INFO:
            return coinUniswapSettings;
        default:
            unreachable(dataProvider);
    }
}
// #endregion
// #region the user preferred coin id
const coinGeckoPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinGeckoPreferredCoinId`, '{}');
const coinMarketCapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinMarketCapPreferredCoinId`, '{}');
const coinUniswapPreferredCoinId = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+currentCoinUniswapPreferredCoinId`, '{}');
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
// #endregion
/**
 * The approved tokens from uniswap
 */ const approvedTokensFromUniSwap = (0,_settings_createSettings__WEBPACK_IMPORTED_MODULE_1__/* .createInternalSettings */ .PS)(`${_constants__WEBPACK_IMPORTED_MODULE_3__/* .PLUGIN_ID */ .Uu}+approvedTokens`, '[]');


/***/ }),

/***/ 82614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PersonaRecordToJSONFormat),
/* harmony export */   "r": () => (/* binding */ PersonaRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);

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
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(persona.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap(),
        publicKey: persona.publicKey,
        privateKey: persona.privateKey,
        nickname: persona.nickname,
        mnemonic: persona.mnemonic,
        localKey: persona.localKey,
        hasLogout: false,
        linkedProfiles: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map(persona.linkedProfiles), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO)
    };
}


/***/ }),

/***/ 78828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PostRecordToJSONFormat),
/* harmony export */   "n": () => (/* binding */ PostRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14381);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61844);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4799);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87470);



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
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(post.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .PostIVIdentifier */ .bb).unwrap(),
        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(post.postBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ProfileIdentifier */ .WO).unwrap(),
        recipients: post.recipients === 'everyone' ? 'everyone' : new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map(post.recipients.map(([x, y])=>[
                x,
                {
                    reason: y.reason.map(RecipientReasonFromJSON)
                }, 
            ]
        ))),
        encryptBy: post.encryptBy ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(post.encryptBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .ECKeyIdentifier */ .ob).unwrap() : undefined,
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
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(y);
}
function RecipientReasonFromJSON(y) {
    if (y.type === 'direct' || y.type === 'auto-share') return {
        at: new Date(y.at),
        type: y.type
    };
    else if (y.type === 'group') return {
        type: 'group',
        at: new Date(y.at),
        group: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(y.group, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .GroupIdentifier */ .xI).unwrap()
    };
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .unreachable */ .t1)(y);
}
function MetaToJson(meta) {
    if (!meta) return undefined;
    const obj = Object.fromEntries(meta);
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeArrayBuffer */ .ll)((0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_2__/* .encode */ .c)(obj));
}
function MetaFromJson(meta) {
    if (!meta) return undefined;
    const raw = (0,_msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__/* .decode */ .Jx)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .decodeArrayBuffer */ .xe)(meta));
    if (typeof raw !== 'object' || !raw) return undefined;
    return new Map(Object.entries(raw));
}


/***/ }),

/***/ 68760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ ProfileRecordToJSONFormat),
/* harmony export */   "B": () => (/* binding */ ProfileRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);

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
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(profile.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        nickname: profile.nickname,
        localKey: profile.localKey,
        linkedPersona: profile.linkedPersona ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(profile.linkedPersona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap() : undefined
    };
}


/***/ }),

/***/ 25443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RelationRecordToJSONFormat),
/* harmony export */   "c": () => (/* binding */ RelationRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);

function RelationRecordToJSONFormat(relation) {
    return {
        favor: relation.favor,
        persona: relation.linked.toText(),
        profile: relation.profile.toText()
    };
}
function RelationRecordFromJSONFormat(relation) {
    return {
        favor: relation.favor,
        profile: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(relation.profile, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        linked: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(relation.persona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap()
    };
}


/***/ }),

/***/ 37200:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dp": () => (/* binding */ WalletRecordToJSONFormat),
/* harmony export */   "ww": () => (/* binding */ LegacyWalletRecordToJSONFormat),
/* harmony export */   "JW": () => (/* binding */ WalletRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53580);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52646);
/* harmony import */ var _SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87701);



function WalletRecordToJSONFormat(wallet) {
    return {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallet, 'id', 'erc20_token_whitelist', 'erc20_token_blacklist', 'erc721_token_whitelist', 'erc721_token_blacklist', 'erc1155_token_whitelist', 'erc1155_token_blacklist', 'derivationPath', 'storedKeyInfo'),
        mnemonic: wallet.mnemonic && wallet.derivationPath ? {
            words: wallet.mnemonic,
            parameter: {
                path: wallet.derivationPath,
                withPassword: false
            }
        } : undefined,
        privateKey: wallet.privateKey ? (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet.privateKey, 'private') : undefined,
        createdAt: wallet.createdAt.getTime(),
        updatedAt: wallet.updatedAt.getTime()
    };
}
function LegacyWalletRecordToJSONFormat(wallet) {
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
        if (wallet_._public_key_ && (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr)((0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToAddr */ .eh)(wallet_._public_key_, 'public'), wallet.address)) backup.publicKey = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet_._public_key_, 'public');
        if (wallet_._private_key_ && (0,_masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__/* .isSameAddress */ .Wr)((0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToAddr */ .eh)(wallet_._private_key_, 'private'), wallet.address)) backup.privateKey = (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .keyToJWK */ .Km)(wallet_._private_key_, 'private');
    } catch (error) {
        console.error(error);
    }
    return backup;
}
function WalletRecordFromJSONFormat(wallet) {
    var ref, ref1;
    return {
        ...(0,lodash_unified__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(wallet, 'mnemonic', 'privateKey'),
        id: wallet.address,
        type: 'wallet',
        erc20_token_whitelist: new Set(),
        erc20_token_blacklist: new Set(),
        erc721_token_whitelist: new Set(),
        erc721_token_blacklist: new Set(),
        erc1155_token_whitelist: new Set(),
        erc1155_token_blacklist: new Set(),
        createdAt: new Date(wallet.createdAt),
        updatedAt: new Date(wallet.updatedAt),
        mnemonic: (ref = wallet.mnemonic) === null || ref === void 0 ? void 0 : ref.words,
        derivationPath: (ref1 = wallet.mnemonic) === null || ref1 === void 0 ? void 0 : ref1.parameter.path,
        privateKey: wallet.privateKey ? (0,_SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__/* .JWKToKey */ .Br)(wallet.privateKey, 'private') : undefined
    };
}


/***/ })

}]);