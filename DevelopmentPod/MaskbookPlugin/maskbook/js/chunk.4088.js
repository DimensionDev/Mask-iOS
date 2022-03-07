"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4088,6478],{

/***/ 10778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CW": () => (/* binding */ storeAvatarDB),
/* harmony export */   "Hm": () => (/* binding */ createAvatarDBAccess),
/* harmony export */   "PU": () => (/* binding */ isAvatarOutdatedDB),
/* harmony export */   "dg": () => (/* binding */ queryAvatarDB),
/* harmony export */   "ft": () => (/* binding */ deleteAvatarsDB),
/* harmony export */   "yo": () => (/* binding */ queryAvatarOutdatedDB)
/* harmony export */ });
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20326);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49100);



const pendingUpdate = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .IdentifierMap */ .qD(new Map());
let pendingUpdateTimer;
// #endregion
const createAvatarDBAccess = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)('maskbook-avatar-cache', 1, {
        upgrade (db, oldVersion, newVersion, transaction) {
            // Out line keys
            db.createObjectStore('avatars');
            db.createObjectStore('metadata', {
                keyPath: 'identifier'
            });
        }
    });
});
/**
 * Store avatar into database
 */ async function storeAvatarDB(t, id, avatar) {
    const meta = {
        identifier: id.toText(),
        lastUpdateTime: new Date(),
        lastAccessTime: new Date()
    };
    await t.objectStore('avatars').put(avatar, id.toText());
    await t.objectStore('metadata').put(meta);
}
/**
 * Read avatar out
 */ async function queryAvatarDB(t, id) {
    const result = await t.objectStore('avatars').get(id.toText());
    if (result) scheduleAvatarMetaUpdate(id, {
        lastAccessTime: new Date()
    });
    return result || null;
}
function scheduleAvatarMetaUpdate(id1, meta1) {
    pendingUpdate.set(id1, meta1);
    if (pendingUpdateTimer) return;
    const _1_minute = 60 * 1000;
    pendingUpdateTimer = setTimeout(async ()=>{
        try {
            const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await createAvatarDBAccess(), 'readwrite')('metadata');
            for (const [id, meta] of pendingUpdate){
                const old = await t.objectStore('metadata').get(id.toText());
                await t.objectStore('metadata').put({
                    ...old,
                    ...meta
                });
            }
        } finally{
            pendingUpdateTimer = null;
            pendingUpdate.clear();
        }
    }, _1_minute);
}
/**
 * Find avatar lastUpdateTime or lastAccessTime out-of-date
 * @param attribute - Which attribute want to query
 * @param deadline - Select all identifiers before a date
 * defaults to 14 days for lastAccessTime
 * defaults to 7 days for lastUpdateTime
 * @internal
 */ async function queryAvatarOutdatedDB(t, attribute, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 14 : 7))) {
    const outdated = [];
    for await (const { value  } of t.objectStore('metadata')){
        if (deadline > value[attribute]) {
            const id = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(value.identifier);
            if (id.err) continue;
            outdated.push(id.val);
        }
    }
    return outdated;
}
/**
 * Query if the avatar is outdated
 * @param attribute - Which attribute want to query
 * @param deadline - Select all identifiers before a date
 * defaults to 30 days for lastAccessTime
 * defaults to 7 days for lastUpdateTime
 * @internal
 */ async function isAvatarOutdatedDB(t, identifier, attribute, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 30 : 7))) {
    const meta = await t.objectStore('metadata').get(identifier.toText());
    if (!meta) return true;
    if (deadline > meta[attribute]) return true;
    return false;
}
/**
 * Batch delete avatars
 * @internal
 */ async function deleteAvatarsDB(t, ids) {
    for (const id of ids){
        t.objectStore('avatars').delete(id.toText());
        t.objectStore('metadata').delete(id.toText());
    }
}


/***/ }),

/***/ 93010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ indexedDB_KVStorageBackend),
/* harmony export */   "c": () => (/* binding */ inMemory_KVStorageBackend)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70609);


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

/***/ 41715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AY": () => (/* binding */ detachProfileDB),
/* harmony export */   "As": () => (/* binding */ consistentPersonaDBWriteAccess),
/* harmony export */   "B4": () => (/* binding */ deleteProfileDB),
/* harmony export */   "E8": () => (/* binding */ updatePersonaDB),
/* harmony export */   "E9": () => (/* binding */ createPersonaDB),
/* harmony export */   "Eq": () => (/* binding */ queryPersonasWithPrivateKey),
/* harmony export */   "Hm": () => (/* binding */ queryPersonaDB),
/* harmony export */   "IW": () => (/* binding */ queryProfileDB),
/* harmony export */   "Jx": () => (/* binding */ updateRelationDB),
/* harmony export */   "LY": () => (/* binding */ deletePersonaDB),
/* harmony export */   "N8": () => (/* binding */ createRelationDB),
/* harmony export */   "PF": () => (/* binding */ queryRelationsPagedDB),
/* harmony export */   "Ul": () => (/* binding */ safeDeletePersonaDB),
/* harmony export */   "Yy": () => (/* binding */ queryProfilesPagedDB),
/* harmony export */   "_P": () => (/* binding */ queryPersonasDB),
/* harmony export */   "ah": () => (/* binding */ createProfileDB),
/* harmony export */   "bF": () => (/* binding */ queryRelations),
/* harmony export */   "cl": () => (/* binding */ createRelationsTransaction),
/* harmony export */   "fl": () => (/* binding */ queryPersonaByProfileDB),
/* harmony export */   "i2": () => (/* binding */ queryProfilesDB),
/* harmony export */   "lX": () => (/* binding */ createOrUpdatePersonaDB),
/* harmony export */   "o7": () => (/* binding */ createOrUpdateProfileDB),
/* harmony export */   "tc": () => (/* binding */ attachProfileDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81653);


const { queryProfilesDB , queryProfileDB , queryPersonaDB , queryPersonasDB , detachProfileDB , deletePersonaDB , safeDeletePersonaDB , queryPersonaByProfileDB , createPersonaDB , attachProfileDB , consistentPersonaDBWriteAccess , updatePersonaDB , createOrUpdatePersonaDB , queryProfilesPagedDB , createOrUpdateProfileDB , createProfileDB , createRelationDB , createRelationsTransaction , deleteProfileDB , queryRelationsPagedDB , updateRelationDB , queryPersonasWithPrivateKey , queryRelations ,  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 113).then(__webpack_require__.bind(__webpack_require__, 70113)).then((x)=>x[key](...args)
                );
            }
            return Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(597)]).then(__webpack_require__.bind(__webpack_require__, 20597)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 27725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ convertPersonaHexPublicKey)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);

function convertPersonaHexPublicKey(persona) {
    const key256 = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .decompressSecp256k1Key */ .qX)(persona.compressedPoint.replace(/\|/g, '/'));
    if (!key256.x || !key256.y) return;
    const arr = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .compressSecp256k1Point */ .SH)(key256.x, key256.y);
    return `0x${(0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .toHex */ .NC)(arr)}`;
}


/***/ }),

/***/ 20597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "attachProfileDB": () => (/* binding */ attachProfileDB),
  "consistentPersonaDBWriteAccess": () => (/* binding */ consistentPersonaDBWriteAccess),
  "createOrUpdatePersonaDB": () => (/* binding */ createOrUpdatePersonaDB),
  "createOrUpdateProfileDB": () => (/* binding */ createOrUpdateProfileDB),
  "createPersonaDB": () => (/* binding */ createPersonaDB),
  "createProfileDB": () => (/* binding */ createProfileDB),
  "createReadonlyPersonaTransaction": () => (/* binding */ createReadonlyPersonaTransaction),
  "createRelationDB": () => (/* binding */ createRelationDB),
  "createRelationsTransaction": () => (/* binding */ createRelationsTransaction),
  "deletePersonaDB": () => (/* binding */ deletePersonaDB),
  "deleteProfileDB": () => (/* binding */ deleteProfileDB),
  "detachProfileDB": () => (/* binding */ detachProfileDB),
  "queryPersonaByProfileDB": () => (/* binding */ queryPersonaByProfileDB),
  "queryPersonaDB": () => (/* binding */ queryPersonaDB),
  "queryPersonasDB": () => (/* binding */ queryPersonasDB),
  "queryPersonasWithPrivateKey": () => (/* binding */ queryPersonasWithPrivateKey),
  "queryProfileDB": () => (/* binding */ queryProfileDB),
  "queryProfilesDB": () => (/* binding */ queryProfilesDB),
  "queryProfilesPagedDB": () => (/* binding */ queryProfilesPagedDB),
  "queryRelations": () => (/* binding */ queryRelations),
  "queryRelationsPagedDB": () => (/* binding */ queryRelationsPagedDB),
  "safeDeletePersonaDB": () => (/* binding */ safeDeletePersonaDB),
  "updatePersonaDB": () => (/* binding */ updatePersonaDB),
  "updateProfileDB": () => (/* binding */ updateProfileDB),
  "updateRelationDB": () => (/* binding */ updateRelationDB)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.5.3/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(46149);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.0/node_modules/idb/with-async-ittr.js
var with_async_ittr = __webpack_require__(20326);
// EXTERNAL MODULE: ./utils-pure/index.ts + 6 modules
var utils_pure = __webpack_require__(6628);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(49100);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
;// CONCATENATED MODULE: ./background/database/persona/consistency.ts



/** @internal */ async function assertPersonaDBConsistency(behavior, ...[checkRange, t]) {
    const diag = [];
    for await (const w of checkFullPersonaDBConsistency(checkRange, t)){
        diag.push(w);
    }
    if (diag.length) {
        const warn = 'PersonaDB is in the inconsistency state';
        console.warn(warn);
        console.info(await t.objectStore('personas').getAll());
        console.info(await t.objectStore('profiles').getAll());
        console.error(...diag);
        if (behavior === 'throw') {
            t.abort();
            throw new Error(warn);
        } else if (t.mode === 'readwrite') {
            console.warn('Try to fix the inconsistent db');
            for (const each of diag)await fixDBInconsistency(each, t).catch(()=>{});
        }
    }
    return diag;
}
async function fixDBInconsistency(diagnosis, t) {
    const personas = t.objectStore('personas');
    const profiles = t.objectStore('profiles');
    switch(diagnosis.type){
        case 'invalid identifier in persona':
            return personas.delete(diagnosis.invalidPersonaKey);
        case 'invalid identifier in profile':
            return profiles.delete(diagnosis.invalidProfileKey);
        case 'a persona linked to a profile meanwhile the profile is not linked to the persona':
        case 'invalid identifier in persona.linkedProfiles':
            {
                const rec = await personas.get(diagnosis.persona.toText());
                const profileWantToUnlink = diagnosis.type === 'a persona linked to a profile meanwhile the profile is not linked to the persona' ? diagnosis.designatedProfile.toText() : diagnosis.invalidProfile;
                rec.linkedProfiles.delete(profileWantToUnlink);
                return personas.put(rec);
            }
        case 'a profile linked to a persona meanwhile it is not appeared in the persona.linkedProfiles':
        case 'invalid identifier in profile.linkedPersona':
            {
                const rec = await profiles.get(diagnosis.profile.toText());
                delete rec.linkedPersona;
                return profiles.put(rec);
            }
        default:
            return (0,esm/* unreachable */.t1)(diagnosis);
    }
}
async function* checkFullPersonaDBConsistency(checkRange, t) {
    for await (const persona of t.objectStore('personas')){
        const personaID = src/* Identifier.fromString */.xb.fromString(persona.key, src/* ECKeyIdentifier */.ob);
        if (personaID.err) {
            yield {
                type: 'invalid identifier in persona',
                invalidPersonaKey: persona.key,
                _record: persona.value
            };
            continue;
        }
        if (checkRange === 'full check' || checkRange.has(personaID.val)) {
            yield* checkPersonaLink(personaID.val, t);
        }
    }
    for await (const profile of t.objectStore('profiles')){
        const profileID = src/* Identifier.fromString */.xb.fromString(profile.key, src/* ProfileIdentifier */.WO);
        if (profileID.err) {
            yield {
                type: 'invalid identifier in profile',
                invalidProfileKey: profile.key,
                _record: profile.value
            };
        } else if (checkRange === 'full check' || checkRange.has(profileID.val)) {
            yield* checkProfileLink(profileID.val, t);
        }
    }
}
async function* checkPersonaLink(personaID, t) {
    const rec = await t.objectStore('personas').get(personaID.toText());
    const linkedProfiles = rec === null || rec === void 0 ? void 0 : rec.linkedProfiles;
    if (!linkedProfiles) return;
    for (const each of linkedProfiles){
        const profileID = src/* Identifier.fromString */.xb.fromString(each[0], src/* ProfileIdentifier */.WO);
        if (profileID.err) {
            yield {
                type: 'invalid identifier in persona.linkedProfiles',
                invalidProfile: each[0],
                persona: personaID
            };
            continue;
        }
        const profile = await t.objectStore('profiles').get(profileID.val.toText());
        if (!(profile === null || profile === void 0 ? void 0 : profile.linkedPersona)) {
            yield {
                type: 'a persona linked to a profile meanwhile the profile is not linked to the persona',
                persona: personaID,
                designatedProfile: profileID.val,
                profileActuallyLinkedPersona: profile === null || profile === void 0 ? void 0 : profile.linkedPersona
            };
        }
    }
}
async function* checkProfileLink(profile, t) {
    const rec = await t.objectStore('profiles').get(profile.toText());
    const invalidLinkedPersona = rec === null || rec === void 0 ? void 0 : rec.linkedPersona;
    if (!invalidLinkedPersona) return;
    if (invalidLinkedPersona.type !== 'ec_key') {
        yield {
            type: 'invalid identifier in profile.linkedPersona',
            invalidLinkedPersona,
            profile
        };
        return;
    }
    const designatedPersona = (0,utils_pure/* restorePrototype */.mS)(invalidLinkedPersona, src/* ECKeyIdentifier.prototype */.ob.prototype);
    const persona = await t.objectStore('personas').get(designatedPersona.toText());
    if (!persona) {
        yield {
            type: 'a profile linked to a persona meanwhile it is not appeared in the persona.linkedProfiles',
            profile,
            designatedPersona
        };
    }
}
var Type;
(function(Type) {
    Type["Invalid_Persona"] = 'invalid identifier in persona';
    Type["Invalid_Persona_LinkedProfiles"] = 'invalid identifier in persona.linkedProfiles';
    Type["Invalid_Profile"] = 'invalid identifier in profile';
    Type["Invalid_Profile_LinkedPersona"] = 'invalid identifier in profile.linkedPersona';
    Type["One_Way_Link_In_Persona"] = 'a persona linked to a profile meanwhile the profile is not linked to the persona';
    Type["One_Way_Link_In_Profile"] = 'a profile linked to a persona meanwhile it is not appeared in the persona.linkedProfiles';
})(Type || (Type = {}));

// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
// EXTERNAL MODULE: ./background/database/persona/util.ts
var util = __webpack_require__(27725);
;// CONCATENATED MODULE: ./background/database/persona/web.ts









/**
 * Database structure:
 *
 * # ObjectStore `persona`:
 * @description Store Personas.
 * @type {PersonaRecordDB}
 * @keys inline, {@link PersonaRecordDb.identifier}
 *
 * # ObjectStore `profiles`:
 * @description Store profiles.
 * @type {ProfileRecord}
 * A persona links to 0 or more profiles.
 * Each profile links to 0 or 1 persona.
 * @keys inline, {@link ProfileRecord.identifier}
 *
 * # ObjectStore `relations`:
 * @description Store relations.
 * @type {RelationRecord}
 * Save the relationship between persona and profile.
 * @keys inline {@link RelationRecord.linked  @link RelationRecord.profile}
 */ const db = (0,openDB/* createDBAccessWithAsyncUpgrade */.Ns)(1, 4, (currentOpenVersion, knowledge)=>{
    return (0,with_async_ittr/* openDB */.X3)('maskbook-persona', currentOpenVersion, {
        upgrade (db1, oldVersion, newVersion, transaction) {
            function v0_v1() {
                db1.createObjectStore('personas', {
                    keyPath: 'identifier'
                });
                db1.createObjectStore('profiles', {
                    keyPath: 'identifier'
                });
                transaction.objectStore('profiles').createIndex('network', 'network', {
                    unique: false
                });
                transaction.objectStore('personas').createIndex('hasPrivateKey', 'hasPrivateKey', {
                    unique: false
                });
            }
            async function v1_v2() {
                const persona = transaction.objectStore('personas');
                const profile = transaction.objectStore('profiles');
                await update(persona);
                await update(profile);
                async function update(q) {
                    for await (const rec of persona){
                        if (!rec.value.localKey) continue;
                        const jwk = knowledge === null || knowledge === void 0 ? void 0 : knowledge.data.get(rec.value.identifier);
                        if (!jwk) {
                            // !!! This should not happen
                            // !!! Remove it will implicitly drop user's localKey
                            delete rec.value.localKey;
                        // !!! Keep it will leave a bug, broken data in the DB
                        // continue
                        // !!! DON'T throw cause it will break the database upgrade
                        }
                        rec.value.localKey = jwk;
                        await rec.update(rec.value);
                    }
                }
            }
            async function v2_v3() {
                try {
                    db1.createObjectStore('relations', {
                        keyPath: [
                            'linked',
                            'profile'
                        ]
                    });
                    transaction.objectStore('relations').createIndex('linked, profile, favor', [
                        'linked',
                        'profile',
                        'favor'
                    ], {
                        unique: true
                    });
                } catch  {}
            }
            async function v3_v4() {
                try {
                    transaction.objectStore('relations').deleteIndex('linked, profile, favor');
                    transaction.objectStore('relations').createIndex('favor, profile, linked', [
                        'favor',
                        'profile',
                        'linked'
                    ], {
                        unique: true
                    });
                    const relation = transaction.objectStore('relations');
                    await update(relation);
                    async function update(q) {
                        for await (const rec of relation){
                            rec.value.favor = rec.value.favor === src/* RelationFavor.DEPRECATED */.Kn.DEPRECATED ? src/* RelationFavor.UNCOLLECTED */.Kn.UNCOLLECTED : src/* RelationFavor.COLLECTED */.Kn.COLLECTED;
                            await rec.update(rec.value);
                        }
                    }
                } catch  {}
            }
            if (oldVersion < 1) v0_v1();
            if (oldVersion < 2) v1_v2();
            if (oldVersion < 3) v2_v3();
            if (oldVersion < 4) v3_v4();
        }
    });
}, async (db2)=>{
    if (db2.version === 1) {
        const map = {
            version: 2,
            data: new Map()
        };
        const t = (0,openDB/* createTransaction */._X)(db2, 'readonly')('personas', 'profiles');
        const a = await t.objectStore('personas').getAll();
        const b = await t.objectStore('profiles').getAll();
        for (const rec of [
            ...a,
            ...b
        ]){
            if (!rec.localKey) continue;
            map.data.set(rec.identifier, await (0,utils_pure/* CryptoKeyToJsonWebKey */.iV)(rec.localKey));
        }
        return map;
    }
    return undefined;
});
async function createRelationsTransaction() {
    const database = await db();
    return (0,openDB/* createTransaction */._X)(database, 'readwrite')('relations');
}
// @deprecated Please create a transaction directly
async function consistentPersonaDBWriteAccess(action, tryToAutoFix = true) {
    // TODO: collect all changes on this transaction then only perform consistency check on those records.
    const database = await db();
    let t = (0,openDB/* createTransaction */._X)(database, 'readwrite')('profiles', 'personas', 'relations');
    let finished = false;
    const finish = ()=>finished = true
    ;
    t.addEventListener('abort', finish);
    t.addEventListener('complete', finish);
    t.addEventListener('error', finish);
    // Pause those events when patching write access
    const resumeProfile = shared/* MaskMessages.events.profilesChanged.pause */.ql.events.profilesChanged.pause();
    const resumePersona = shared/* MaskMessages.events.ownPersonaChanged.pause */.ql.events.ownPersonaChanged.pause();
    const resumeRelation = shared/* MaskMessages.events.relationsChanged.pause */.ql.events.relationsChanged.pause();
    try {
        await action(t);
    } finally{
        if (finished) {
            console.warn('The transaction ends too early! There MUST be a bug in the program!');
            console.trace();
            // start a new transaction to check consistency
            t = (0,openDB/* createTransaction */._X)(database, 'readwrite')('profiles', 'personas', 'relations');
        }
        try {
            await assertPersonaDBConsistency(tryToAutoFix ? 'fix' : 'throw', 'full check', t);
            resumeProfile((data)=>[
                    data.flat()
                ]
            );
            resumePersona((data)=>data.length ? [
                    undefined
                ] : []
            );
            resumeRelation((data)=>[
                    data.flat()
                ]
            );
        } finally{
            // If the consistency check throws, we drop all pending events
            resumeProfile(()=>[]
            );
            resumePersona(()=>[]
            );
            resumeRelation(()=>[]
            );
        }
    }
}
async function createReadonlyPersonaTransaction() {
    return (0,openDB/* createTransaction */._X)(await db(), 'readonly');
}
// #region Plain methods
/** Create a new Persona. */ async function createPersonaDB(record, t) {
    await t.objectStore('personas').add(personaRecordToDB(record));
    record.privateKey && shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
}
async function queryPersonaByProfileDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas', 'profiles', 'relations');
    const x = await t.objectStore('profiles').get(query.toText());
    if (!(x === null || x === void 0 ? void 0 : x.linkedPersona)) return null;
    return queryPersonaDB((0,utils_pure/* restorePrototype */.mS)(x.linkedPersona, src/* ECKeyIdentifier.prototype */.ob.prototype), t);
}
/**
 * Query a Persona.
 */ async function queryPersonaDB(query, t, isIncludeLogout) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas');
    const x = await t.objectStore('personas').get(query.toText());
    if (x && (isIncludeLogout || !x.hasLogout)) return personaRecordOutDB(x);
    return null;
}
/**
 * Query many Personas.
 */ async function queryPersonasDB(query, t, isIncludeLogout) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas');
    const records = [];
    for await (const each of t.objectStore('personas')){
        const out = personaRecordOutDB(each.value);
        if ((query === null || query === void 0 ? void 0 : query.hasPrivateKey) && !out.privateKey || (query === null || query === void 0 ? void 0 : query.nameContains) && out.nickname !== query.nameContains || (query === null || query === void 0 ? void 0 : query.identifiers) && !query.identifiers.some((x)=>x.equals(out.identifier)
        ) || (query === null || query === void 0 ? void 0 : query.initialized) && out.uninitialized) continue;
        if (isIncludeLogout || !out.hasLogout) records.push(out);
    }
    return records;
}
/**
 * Query many Personas.
 */ async function queryPersonasWithPrivateKey(t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas', 'profiles', 'relations');
    const records = [];
    records.push(...(await t.objectStore('personas').index('hasPrivateKey').getAll(IDBKeyRange.only('yes'))).map(personaRecordOutDB));
    return records;
}
/**
 * Update an existing Persona record.
 * @param nextRecord The partial record to be merged
 * @param howToMerge How to merge linkedProfiles and `field: undefined`
 * @param t transaction
 */ async function updatePersonaDB(// Do a copy here. We need to delete keys from it.
{ ...nextRecord }, howToMerge, t) {
    const _old = await t.objectStore('personas').get(nextRecord.identifier.toText());
    if (!_old) throw new TypeError('Update an non-exist data');
    const old = personaRecordOutDB(_old);
    let nextLinkedProfiles = old.linkedProfiles;
    if (nextRecord.linkedProfiles) {
        if (howToMerge.linkedProfiles === 'merge') nextLinkedProfiles = new src/* IdentifierMap */.qD(new Map([
            ...nextLinkedProfiles.__raw_map__,
            ...nextRecord.linkedProfiles.__raw_map__
        ]));
        else nextLinkedProfiles = nextRecord.linkedProfiles;
    }
    if (howToMerge.explicitUndefinedField === 'ignore') {
        for(const _key in nextRecord){
            const key = _key;
            if (nextRecord[key] === undefined) {
                delete nextRecord[key];
            }
        }
    }
    var _updatedAt;
    const next = personaRecordToDB({
        ...old,
        ...nextRecord,
        linkedProfiles: nextLinkedProfiles,
        updatedAt: (_updatedAt = nextRecord.updatedAt) !== null && _updatedAt !== void 0 ? _updatedAt : new Date()
    });
    await t.objectStore('personas').put(next);
    (next.privateKey || old.privateKey) && shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
}
async function createOrUpdatePersonaDB(record, howToMerge, t) {
    const personaInDB = await t.objectStore('personas').get(record.identifier.toText());
    if (howToMerge.protectPrivateKey && !!(personaInDB === null || personaInDB === void 0 ? void 0 : personaInDB.privateKey) && !record.privateKey) return;
    if (howToMerge.protectPrivateKey && !!(personaInDB === null || personaInDB === void 0 ? void 0 : personaInDB.privateKey)) {
        const nextRecord = personaRecordOutDB(personaInDB);
        nextRecord.hasLogout = false;
        return updatePersonaDB(nextRecord, howToMerge, t);
    }
    var _createdAt, _updatedAt;
    if (personaInDB) return updatePersonaDB(record, howToMerge, t);
    else return createPersonaDB({
        ...record,
        createdAt: (_createdAt = record.createdAt) !== null && _createdAt !== void 0 ? _createdAt : new Date(),
        updatedAt: (_updatedAt = record.updatedAt) !== null && _updatedAt !== void 0 ? _updatedAt : new Date(),
        linkedProfiles: new src/* IdentifierMap */.qD(new Map())
    }, t);
}
/**
 * Delete a Persona
 */ async function deletePersonaDB(id, confirm, t) {
    const r = await t.objectStore('personas').get(id.toText());
    if (!r) return;
    if (confirm !== 'delete even with private' && r.privateKey) throw new TypeError('Cannot delete a persona with a private key');
    await t.objectStore('personas').delete(id.toText());
    r.privateKey && shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll();
}
/**
 * Delete a Persona
 * @returns a boolean. true: the record no longer exists; false: the record is kept.
 */ async function safeDeletePersonaDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const r = await queryPersonaDB(id, t);
    if (!r) return true;
    if (r.linkedProfiles.size !== 0) return false;
    if (r.privateKey) return false;
    await deletePersonaDB(id, "don't delete if have private key", t);
    return true;
}
/**
 * Create a new profile.
 */ async function createProfileDB(record, t) {
    await t.objectStore('profiles').add(profileToDB(record));
    shared/* MaskMessages.events.profilesChanged.sendToAll */.ql.events.profilesChanged.sendToAll([
        {
            of: record.identifier,
            reason: 'update'
        }
    ]);
}
/**
 * Query a profile.
 */ async function queryProfileDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('profiles');
    const result = await t.objectStore('profiles').get(id.toText());
    if (result) return profileOutDB(result);
    return null;
}
/**
 * Query many profiles.
 */ async function queryProfilesDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('profiles');
    const result = [];
    if ((0,isEmpty/* default */.Z)(query)) {
        const results = await t.objectStore('profiles').getAll();
        results.forEach((each)=>{
            const out = profileOutDB(each);
            result.push(out);
        });
    }
    if (query.network) {
        const results = await t.objectStore('profiles').index('network').getAll(IDBKeyRange.only(query.network));
        results.forEach((each)=>{
            const out = profileOutDB(each);
            if (query.hasLinkedPersona && !out.linkedPersona) return;
            result.push(out);
        });
    } else if (query.identifiers) {
        for await (const each of t.objectStore('profiles').iterate()){
            const out = profileOutDB(each.value);
            if (query.hasLinkedPersona && !out.linkedPersona) continue;
            if (query.identifiers.some((x)=>out.identifier.equals(x)
            )) result.push(out);
        }
    } else {
        for await (const each of t.objectStore('profiles').iterate()){
            const out = profileOutDB(each.value);
            if (query.hasLinkedPersona && !out.linkedPersona) continue;
            result.push(out);
        }
    }
    return result;
}
const fuse = new fuse_esm/* default */.Z([], {
    shouldSort: true,
    threshold: 0.45,
    minMatchCharLength: 1,
    keys: [
        {
            name: 'nickname',
            weight: 0.8
        },
        {
            name: 'identifier.network',
            weight: 0.2
        }, 
    ]
});
/**
 * @deprecated
 * @param options
 * @param count
 */ async function queryProfilesPagedDB(options, count) {
    var ref;
    const t = (0,openDB/* createTransaction */._X)(await db(), 'readonly')('profiles');
    const breakPoint = (ref = options.after) === null || ref === void 0 ? void 0 : ref.toText();
    let firstRecord = true;
    const data = [];
    for await (const rec of t.objectStore('profiles').iterate()){
        if (firstRecord && breakPoint && rec.key !== breakPoint) {
            rec.continue(breakPoint);
            firstRecord = false;
            continue;
        }
        firstRecord = false;
        // after this record
        if (rec.key === breakPoint) continue;
        if (count <= 0) break;
        const outData = profileOutDB(rec.value);
        if (typeof options.query === 'string') {
            fuse.setCollection([
                outData
            ]);
            if (!fuse.search(options.query).length) continue;
        }
        count -= 1;
        data.push(outData);
    }
    return data;
}
/**
 * Update a profile.
 */ async function updateProfileDB(updating, t) {
    const old = await t.objectStore('profiles').get(updating.identifier.toText());
    if (!old) throw new Error('Updating a non exists record');
    const nextRecord = profileToDB({
        ...profileOutDB(old),
        ...updating
    });
    await t.objectStore('profiles').put(nextRecord);
    shared/* MaskMessages.events.profilesChanged.sendToAll */.ql.events.profilesChanged.sendToAll([
        {
            reason: 'update',
            of: updating.identifier
        }
    ]);
}
async function createOrUpdateProfileDB(rec, t) {
    if (await queryProfileDB(rec.identifier, t)) return updateProfileDB(rec, t);
    else return createProfileDB(rec, t);
}
/**
 * Detach a profile from it's linking persona.
 * @param identifier The profile want to detach
 * @param t A living transaction
 */ async function detachProfileDB(identifier, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const profile = await queryProfileDB(identifier, t);
    if (!(profile === null || profile === void 0 ? void 0 : profile.linkedPersona)) return;
    const linkedPersona = profile.linkedPersona;
    const persona = await queryPersonaDB(linkedPersona, t);
    persona === null || persona === void 0 ? void 0 : persona.linkedProfiles.delete(identifier);
    if (persona) {
        await updatePersonaDB(persona, {
            linkedProfiles: 'replace',
            explicitUndefinedField: 'delete field'
        }, t);
        if (persona.privateKey) shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
    }
    profile.linkedPersona = undefined;
    await updateProfileDB(profile, t);
}
/**
 * attach a profile.
 */ async function attachProfileDB(identifier, attachTo, data, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const profile = await queryProfileDB(identifier, t) || await createProfileDB({
        identifier,
        createdAt: new Date(),
        updatedAt: new Date()
    }, t) || await queryProfileDB(identifier, t);
    const persona = await queryPersonaDB(attachTo, t);
    if (!persona || !profile) return;
    if (profile.linkedPersona !== undefined && !profile.linkedPersona.equals(attachTo)) {
        await detachProfileDB(identifier, t);
    }
    profile.linkedPersona = attachTo;
    persona.linkedProfiles.set(identifier, data);
    await updatePersonaDB(persona, {
        linkedProfiles: 'merge',
        explicitUndefinedField: 'ignore'
    }, t);
    await updateProfileDB(profile, t);
    if (persona.privateKey) shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
}
/**
 * Delete a profile
 */ async function deleteProfileDB(id, t) {
    await t.objectStore('profiles').delete(id.toText());
    shared/* MaskMessages.events.profilesChanged.sendToAll */.ql.events.profilesChanged.sendToAll([
        {
            reason: 'delete',
            of: id
        }
    ]);
}
/**
 * Create a new Relation
 */ async function createRelationDB(record, t, silent = false) {
    await t.objectStore('relations').add(relationRecordToDB(record));
    if (!silent) shared/* MaskMessages.events.relationsChanged.sendToAll */.ql.events.relationsChanged.sendToAll([
        {
            of: record.profile,
            reason: 'update',
            favor: record.favor
        }
    ]);
}
async function queryRelations(personaIdentifier, profileIdentifier, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('relations');
    const records = [];
    if (personaIdentifier && profileIdentifier) {
        const relationInDB = await t.objectStore('relations').get([
            personaIdentifier.toText(),
            profileIdentifier.toText()
        ]);
        if (relationInDB) {
            const out = relationRecordOutDB(relationInDB);
            records.push(out);
        }
    } else {
        for await (const each of t.objectStore('relations')){
            const out = relationRecordOutDB(each.value);
            records.push(out);
        }
    }
    return records;
}
/**
 * Query relations by paged
 */ async function queryRelationsPagedDB(linked, options, count) {
    const t = (0,openDB/* createTransaction */._X)(await db(), 'readonly')('relations');
    let firstRecord = true;
    const data = [];
    for await (const cursor of t.objectStore('relations').index('favor, profile, linked').iterate()){
        var ref, ref1;
        if (cursor.value.linked !== linked.toText()) continue;
        if (cursor.value.network !== options.network) continue;
        if (firstRecord && options.after && options.after.profile.toText() !== (cursor === null || cursor === void 0 ? void 0 : cursor.value.profile)) {
            cursor.continue([
                options.after.favor,
                options.after.profile.toText(),
                options.after.linked.toText()
            ]);
            firstRecord = false;
            continue;
        }
        firstRecord = false;
        // after this record
        if (((ref = options.after) === null || ref === void 0 ? void 0 : ref.linked.toText()) === (cursor === null || cursor === void 0 ? void 0 : cursor.value.linked) && ((ref1 = options.after) === null || ref1 === void 0 ? void 0 : ref1.profile.toText()) === (cursor === null || cursor === void 0 ? void 0 : cursor.value.profile)) continue;
        if (count <= 0) break;
        const outData = relationRecordOutDB(cursor.value);
        count -= 1;
        data.push(outData);
    }
    return data;
}
/**
 * Update a relation
 * @param updating
 * @param t
 * @param silent
 */ async function updateRelationDB(updating, t, silent = false) {
    const old = await t.objectStore('relations').get(IDBKeyRange.only([
        updating.linked.toText(),
        updating.profile.toText()
    ]));
    if (!old) throw new Error('Updating a non exists record');
    const nextRecord = relationRecordToDB({
        ...relationRecordOutDB(old),
        ...updating
    });
    await t.objectStore('relations').put(nextRecord);
    if (!silent) {
        shared/* MaskMessages.events.relationsChanged.sendToAll */.ql.events.relationsChanged.sendToAll([
            {
                of: updating.profile,
                favor: updating.favor,
                reason: 'update'
            }, 
        ]);
    }
}
// #endregion
// #region out db & to db
function profileToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        network: x.identifier.network
    };
}
function profileOutDB({ network , ...x }) {
    if (x.linkedPersona) {
        if (x.linkedPersona.type !== 'ec_key') throw new Error('Unknown type of linkedPersona');
    }
    return {
        ...x,
        identifier: src/* Identifier.fromString */.xb.fromString(x.identifier, src/* ProfileIdentifier */.WO).unwrap(),
        linkedPersona: (0,utils_pure/* restorePrototype */.mS)(x.linkedPersona, src/* ECKeyIdentifier.prototype */.ob.prototype)
    };
}
function personaRecordToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        hasPrivateKey: x.privateKey ? 'yes' : 'no',
        linkedProfiles: x.linkedProfiles.__raw_map__
    };
}
function personaRecordOutDB(x) {
    // @ts-ignore
    delete x.hasPrivateKey;
    const identifier = src/* Identifier.fromString */.xb.fromString(x.identifier, src/* ECKeyIdentifier */.ob).unwrap();
    const obj = {
        ...x,
        identifier,
        publicHexKey: (0,util/* convertPersonaHexPublicKey */.k)(identifier),
        linkedProfiles: new src/* IdentifierMap */.qD(x.linkedProfiles, src/* ProfileIdentifier */.WO)
    };
    return obj;
}
function relationRecordToDB(x) {
    return {
        ...x,
        network: x.profile.network,
        profile: x.profile.toText(),
        linked: x.linked.toText()
    };
}
function relationRecordOutDB(x) {
    return {
        ...x,
        profile: src/* Identifier.fromString */.xb.fromString(x.profile, src/* ProfileIdentifier */.WO).unwrap(),
        linked: src/* Identifier.fromString */.xb.fromString(x.linked, src/* ECKeyIdentifier */.ob).unwrap()
    };
} // #endregion


/***/ }),

/***/ 32849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$v": () => (/* binding */ createPostDB),
/* harmony export */   "Nz": () => (/* binding */ PostDBAccess),
/* harmony export */   "hZ": () => (/* binding */ queryPostsDB),
/* harmony export */   "q3": () => (/* binding */ queryPostDB),
/* harmony export */   "rr": () => (/* binding */ updatePostDB),
/* harmony export */   "xN": () => (/* binding */ queryPostPagedDB)
/* harmony export */ });
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81653);


const { createPostDB , updatePostDB , queryPostDB , queryPostsDB , queryPostPagedDB , PostDBAccess  } = new Proxy({}, {
    get (_, key) {
        return async function(...args) {
            if (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_0__/* .hasNativeAPI */ ._) {
                return __webpack_require__.e(/* import() */ 1303).then(__webpack_require__.bind(__webpack_require__, 41303)).then((x)=>x[key](...args)
                );
            }
            return __webpack_require__.e(/* import() */ 8786).then(__webpack_require__.bind(__webpack_require__, 58786)).then((x)=>x[key](...args)
            );
        };
    }
});


/***/ }),

/***/ 81653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nz": () => (/* binding */ nativeAPI),
/* harmony export */   "_": () => (/* binding */ hasNativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _iOS_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2045);



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
        const api = sharedNativeAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 8211).then(__webpack_require__.bind(__webpack_require__, 8211)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new _iOS_channel__WEBPACK_IMPORTED_MODULE_1__/* .iOSWebkitChannel */ .c()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 1196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Nz": () => (/* reexport */ post/* PostDBAccess */.Nz),
  "w0": () => (/* reexport */ createPersonaByJsonWebKey),
  "A8": () => (/* reexport */ createPersonaByMnemonic),
  "c9": () => (/* reexport */ createPersonaByMnemonicV2),
  "$v": () => (/* reexport */ post/* createPostDB */.$v),
  "lr": () => (/* reexport */ createProfileWithPersona),
  "FB": () => (/* reexport */ deletePersona),
  "A": () => (/* reexport */ loginPersona),
  "lW": () => (/* reexport */ logoutPersona),
  "m3": () => (/* reexport */ personaRecordToPersona),
  "Lw": () => (/* reexport */ queryAvatarDataURL),
  "DM": () => (/* reexport */ queryLocalKey),
  "pR": () => (/* reexport */ queryPersona),
  "Id": () => (/* reexport */ queryPersonaByProfile),
  "yQ": () => (/* reexport */ queryPersonaRecord),
  "xN": () => (/* reexport */ post/* queryPostPagedDB */.xN),
  "hZ": () => (/* reexport */ post/* queryPostsDB */.hZ),
  "wb": () => (/* reexport */ queryPrivateKey),
  "JL": () => (/* reexport */ queryProfile),
  "V6": () => (/* reexport */ queryProfilePaged),
  "X8": () => (/* reexport */ queryProfilesWithQuery),
  "M_": () => (/* reexport */ queryPublicKey),
  "rR": () => (/* reexport */ renamePersona),
  "gn": () => (/* reexport */ setupPersona),
  "Zk": () => (/* reexport */ storeAvatar),
  "rr": () => (/* reexport */ post/* updatePostDB */.rr)
});

// UNUSED EXPORTS: createPluginDBAccess, createPluginDatabase, pluginDataHasValidKeyPath, profileRecordToProfile, queryPersonasWithQuery, queryPostDB, toStore

// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ./background/database/avatar-cache/db.ts
var db = __webpack_require__(10778);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
// EXTERNAL MODULE: ./shared/native-rpc/index.ts
var native_rpc = __webpack_require__(81653);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts
var openDB = __webpack_require__(49100);
;// CONCATENATED MODULE: ./background/database/avatar-cache/avatar.ts






/**
 * Get a (cached) blob url for an identifier. No cache for native api.
 * ? Because of cross-origin restrictions, we cannot use blob url here. sad :(
 */ const queryAvatarDataURL = native_rpc/* hasNativeAPI */._ ? async function(identifier) {
    return native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.query_avatar */.Nz.api.query_avatar({
        identifier: identifier.toText()
    });
} : (0,esm/* memoizePromise */.J3)(async function(identifier) {
    const t = (0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readonly')('avatars');
    const buffer = await (0,db/* queryAvatarDB */.dg)(t, identifier);
    if (!buffer) throw new Error('Avatar not found');
    return (0,esm/* blobToDataURL */.n5)(new Blob([
        buffer
    ], {
        type: 'image/png'
    }));
}, (id)=>id.toText()
);
/**
 * Store an avatar with a url for an identifier.
 * @param identifier - This avatar belongs to.
 * @param avatar - Avatar to store. If it is a string, will try to fetch it.
 * @param force - Ignore the outdated setting. Force update.
 */ async function storeAvatar(identifier, avatar) {
    if (identifier instanceof src/* ProfileIdentifier */.WO && identifier.isUnknown) return;
    try {
        if (native_rpc/* hasNativeAPI */._) {
            // ArrayBuffer is unreachable on Native side.
            if (typeof avatar !== 'string') return;
            await (native_rpc/* nativeAPI */.Nz === null || native_rpc/* nativeAPI */.Nz === void 0 ? void 0 : native_rpc/* nativeAPI.api.store_avatar */.Nz.api.store_avatar({
                identifier: identifier.toText(),
                avatar: avatar
            }));
            return;
        }
        if (typeof avatar === 'string') {
            if (avatar.startsWith('https') === false) return;
            const isOutdated = await (0,db/* isAvatarOutdatedDB */.PU)((0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readonly')('metadata'), identifier, 'lastUpdateTime');
            if (isOutdated) {
                // ! must fetch before create the transaction
                const buffer = await (await fetch(avatar)).arrayBuffer();
                {
                    const t = (0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readwrite')('avatars', 'metadata');
                    await (0,db/* storeAvatarDB */.CW)(t, identifier, buffer);
                }
            }
        // else do nothing
        } else {
            const t = (0,openDB/* createTransaction */._X)(await (0,db/* createAvatarDBAccess */.Hm)(), 'readwrite')('avatars', 'metadata');
            await (0,db/* storeAvatarDB */.CW)(t, identifier, avatar);
        }
    } catch (error) {
        console.error('[AvatarDB] Store avatar failed', error);
    } finally{
        var ref;
        (ref = queryAvatarDataURL.cache) === null || ref === void 0 ? void 0 : ref.delete(identifier.toText());
        if (identifier instanceof src/* ProfileIdentifier */.WO) {
            shared/* MaskMessages.events.profilesChanged.sendToAll */.ql.events.profilesChanged.sendToAll([
                {
                    of: identifier,
                    reason: 'update'
                }
            ]);
        }
    }
}

// EXTERNAL MODULE: ./background/database/post/index.ts
var post = __webpack_require__(32849);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var persona_db = __webpack_require__(41715);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(69914);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/localKeyGenerate.ts
var localKeyGenerate = __webpack_require__(74907);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bip39@3.0.4/node_modules/bip39/src/index.js
var bip39_src = __webpack_require__(68440);
;// CONCATENATED MODULE: ./src/database/Persona/helpers.ts






async function profileRecordToProfile(record) {
    const rec = {
        ...record
    };
    const persona = rec.linkedPersona;
    delete rec.linkedPersona;
    delete rec.localKey;
    const _ = persona ? queryPersona(persona) : undefined;
    const _2 = queryAvatarDataURL(rec.identifier).catch(()=>undefined
    );
    return {
        ...rec,
        linkedPersona: await _,
        avatar: await _2
    };
}
function personaRecordToPersona(record) {
    const rec = {
        ...record
    };
    delete rec.localKey;
    // @ts-ignore
    delete rec.publicKey;
    const hasPrivateKey = !!rec.privateKey;
    delete rec.privateKey;
    return {
        ...rec,
        hasPrivateKey,
        fingerprint: rec.identifier.compressedPoint
    };
}
/**
 * Query a Profile even it is not stored in the database.
 * @param identifier - Identifier for people want to query
 */ async function queryProfile(identifier) {
    const _ = await (0,persona_db/* queryProfileDB */.IW)(identifier);
    if (_) return profileRecordToProfile(_);
    return {
        identifier,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
async function queryProfilePaged(...args) {
    const _ = await (0,persona_db/* queryProfilesPagedDB */.Yy)(...args);
    return Promise.all(_.map(profileRecordToProfile));
}
/**
 * Query a persona even it is not stored in the database.
 * @param identifier - Identifier for people want to query
 */ async function queryPersona(identifier) {
    const _ = await (0,persona_db/* queryPersonaDB */.Hm)(identifier);
    if (_) return personaRecordToPersona(_);
    return {
        identifier,
        createdAt: new Date(),
        updatedAt: new Date(),
        linkedProfiles: new src/* IdentifierMap */.qD(new Map(), src/* ProfileIdentifier */.WO),
        hasPrivateKey: false,
        hasLogout: false,
        fingerprint: identifier.compressedPoint
    };
}
/**
 * Select a set of Profiles
 */ async function queryProfilesWithQuery(query) {
    const _ = await (0,persona_db/* queryProfilesDB */.i2)(query);
    return Promise.all(_.map(profileRecordToProfile));
}
/**
 * Select a set of Personas
 */ async function queryPersonasWithQuery(query) {
    const _ = await (0,persona_db/* queryPersonasDB */._P)(query);
    return _.map(personaRecordToPersona);
}
async function deletePersona(id, confirm) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,persona_db/* queryPersonaDB */.Hm)(id, t);
        if (!d) return;
        for (const e of d.linkedProfiles){
            await (0,persona_db/* detachProfileDB */.AY)(e[0], t);
        }
        if (confirm === 'delete even with private') await (0,persona_db/* deletePersonaDB */.LY)(id, 'delete even with private', t);
        else if (confirm === 'safe delete') await (0,persona_db/* safeDeletePersonaDB */.Ul)(id, t);
    });
}
async function loginPersona(identifier) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: false
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function logoutPersona(identifier) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* updatePersonaDB */.E8)({
            identifier,
            hasLogout: true
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function renamePersona(identifier, nickname) {
    const personas = await queryPersonasWithQuery({
        nameContains: nickname
    });
    if (personas.length > 0) {
        throw new Error('Nickname already exists');
    }
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* updatePersonaDB */.E8)({
            identifier,
            nickname
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function setupPersona(id) {
    return (0,persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        const d = await (0,persona_db/* queryPersonaDB */.Hm)(id, t);
        if (!d) throw new Error('cannot find persona');
        if (d.linkedProfiles.size === 0) throw new Error('persona should link at least one profile');
        if (d.uninitialized) {
            await (0,persona_db/* updatePersonaDB */.E8)({
                identifier: id,
                uninitialized: false
            }, {
                linkedProfiles: 'merge',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    });
}
async function queryPersonaByProfile(i) {
    return (await queryProfile(i)).linkedPersona;
}
function queryPersonaRecord(i) {
    return i instanceof src/* ProfileIdentifier */.WO ? (0,persona_db/* queryPersonaByProfileDB */.fl)(i) : (0,persona_db/* queryPersonaDB */.Hm)(i);
}
async function queryPublicKey(i) {
    return queryPersonaRecord(i).then((x)=>{
        return x === null || x === void 0 ? void 0 : x.publicKey;
    });
}
async function queryPrivateKey(i) {
    return queryPersonaRecord(i).then((x)=>{
        return x === null || x === void 0 ? void 0 : x.privateKey;
    });
}
async function createPersonaByMnemonic(nickname, password) {
    const { key , mnemonicRecord: mnemonic  } = await (0,mnemonic_code/* generate_ECDH_256k1_KeyPair_ByMnemonicWord */.xX)(password);
    const { privateKey , publicKey  } = key;
    const localKey = await (0,localKeyGenerate/* deriveLocalKeyFromECDHKey */.i)(publicKey, mnemonic.words);
    return createPersonaByJsonWebKey({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: false
    });
}
async function createPersonaByMnemonicV2(mnemonicWord, nickname, password) {
    const personas = await queryPersonasWithQuery({
        nameContains: nickname
    });
    if (personas.length > 0) throw new Error('Nickname already exists');
    const verify = (0,bip39_src/* validateMnemonic */._I)(mnemonicWord);
    if (!verify) throw new Error('Verify error');
    const { key , mnemonicRecord: mnemonic  } = await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(mnemonicWord, password);
    const { privateKey , publicKey  } = key;
    const localKey = await (0,localKeyGenerate/* deriveLocalKeyFromECDHKey */.i)(publicKey, mnemonic.words);
    return createPersonaByJsonWebKey({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: false
    });
}
async function createPersonaByJsonWebKey(options) {
    const identifier = (0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(options.publicKey);
    const record = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: identifier,
        linkedProfiles: new src/* IdentifierMap */.qD(new Map(), src/* ProfileIdentifier */.WO),
        publicKey: options.publicKey,
        privateKey: options.privateKey,
        nickname: options.nickname,
        mnemonic: options.mnemonic,
        localKey: options.localKey,
        hasLogout: false,
        uninitialized: options.uninitialized
    };
    await (0,persona_db/* consistentPersonaDBWriteAccess */.As)((t)=>(0,persona_db/* createPersonaDB */.E9)(record, t)
    );
    return identifier;
}
async function createProfileWithPersona(profileID, data, keys) {
    const ec_id = (0,src/* ECKeyIdentifierFromJsonWebKey */.CH)(keys.publicKey);
    const rec = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: ec_id,
        linkedProfiles: new src/* IdentifierMap */.qD(new Map(), src/* ProfileIdentifier */.WO),
        nickname: keys.nickname,
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        localKey: keys.localKey,
        mnemonic: keys.mnemonic,
        hasLogout: false
    };
    await (0,persona_db/* consistentPersonaDBWriteAccess */.As)(async (t)=>{
        await (0,persona_db/* createOrUpdatePersonaDB */.lX)(rec, {
            explicitUndefinedField: 'ignore',
            linkedProfiles: 'merge'
        }, t);
        await (0,persona_db/* attachProfileDB */.tc)(profileID, ec_id, data, t);
    });
}
async function queryLocalKey(i) {
    if (i instanceof src/* ProfileIdentifier */.WO) {
        const profile = await (0,persona_db/* queryProfileDB */.IW)(i);
        if (!profile) return null;
        if (profile.localKey) return profile.localKey;
        if (!profile.linkedPersona) return null;
        return queryLocalKey(profile.linkedPersona);
    } else {
        var ref;
        var ref1;
        return (ref1 = (ref = await (0,persona_db/* queryPersonaDB */.Hm)(i)) === null || ref === void 0 ? void 0 : ref.localKey) !== null && ref1 !== void 0 ? ref1 : null;
    }
}
function cover_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    throw new Error('Function not implemented.');
}

// EXTERNAL MODULE: ./src/database/Plugin/index.ts + 2 modules
var Plugin = __webpack_require__(94256);
;// CONCATENATED MODULE: ./src/database/index.ts







/***/ }),

/***/ 64426:
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
  "exportPersonaMnemonicWords": () => (/* binding */ exportPersonaMnemonicWords),
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/encode.mjs + 1 modules
var encode = __webpack_require__(82151);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@msgpack+msgpack@2.7.2/node_modules/@msgpack/msgpack/dist.es5+esm/decode.mjs + 3 modules
var decode = __webpack_require__(92415);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(1196);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var shared_base_src = __webpack_require__(79226);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(41715);
// EXTERNAL MODULE: ./background/database/persona/web.ts + 1 modules
var web = __webpack_require__(20597);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts
var latest = __webpack_require__(96636);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(4717);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeService.ts + 1 modules
var WelcomeService = __webpack_require__(19470);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFile.ts
var BackupFile = __webpack_require__(51098);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/extension/background-script/SettingsService.ts
var SettingsService = __webpack_require__(27689);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ./src/modules/CryptoAlgorithm/helper.ts
var helper = __webpack_require__(1335);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/orderBy.js
var orderBy = __webpack_require__(50350);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(69914);
// EXTERNAL MODULE: ../../node_modules/.pnpm/ethereumjs-util@7.1.0/node_modules/ethereumjs-util/dist.browser/index.js
var dist_browser = __webpack_require__(98257);
// EXTERNAL MODULE: ./background/services/helper/index.ts + 6 modules
var services_helper = __webpack_require__(90841);
;// CONCATENATED MODULE: ./src/extension/background-script/IdentityServices/sign.ts
/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];






async function signWithPersona({ message , method , identifier  }) {
    if (method !== 'eth') throw new Error('Unknown sign method');
    const requestID = Math.random().toString(16).slice(3);
    await (0,services_helper.openPopupWindow)(shared_base_src/* PopupRoutes.PersonaSignRequest */.mZ.PersonaSignRequest, {
        message,
        requestID,
        identifier
    });
    const waitForApprove = new Promise((resolve, reject)=>{
        (0,esm/* delay */.gw)(1000 * 60).then(()=>reject(new Error('Timeout'))
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
            const relationsInDB = await (0,db/* queryRelations */.bF)(relation.linked, relation.profile, t);
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
    const relationInDB = await (0,db/* queryRelations */.bF)(linked, profile, t);
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
        await (0,database/* storeAvatar */.Zk)(identifier, await avatar.arrayBuffer());
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
async function exportPersonaMnemonicWords(identifier) {
    var ref;
    const record = await (0,database/* queryPersonaRecord */.yQ)(identifier);
    return record === null || record === void 0 ? void 0 : (ref = record.mnemonic) === null || ref === void 0 ? void 0 : ref.words;
}
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

/***/ 27689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__kv_storage_read__": () => (/* binding */ __kv_storage_read__),
/* harmony export */   "__kv_storage_write__": () => (/* binding */ __kv_storage_write__),
/* harmony export */   "getChainId": () => (/* binding */ getChainId),
/* harmony export */   "getCurrentCollectibleDataProvider": () => (/* binding */ getCurrentCollectibleDataProvider),
/* harmony export */   "getCurrentMaskWalletChainId": () => (/* binding */ getCurrentMaskWalletChainId),
/* harmony export */   "getCurrentMaskWalletLockedSettings": () => (/* binding */ getCurrentMaskWalletLockedSettings),
/* harmony export */   "getCurrentMaskWalletNetworkType": () => (/* binding */ getCurrentMaskWalletNetworkType),
/* harmony export */   "getCurrentPersona": () => (/* binding */ getCurrentPersona),
/* harmony export */   "getCurrentPersonaIdentifier": () => (/* binding */ getCurrentPersonaIdentifier),
/* harmony export */   "getCurrentPortfolioDataProvider": () => (/* binding */ getCurrentPortfolioDataProvider),
/* harmony export */   "getCurrentSelectedWalletNetwork": () => (/* binding */ getCurrentSelectedWalletNetwork),
/* harmony export */   "getCurrentSelectedWalletProvider": () => (/* binding */ getCurrentSelectedWalletProvider),
/* harmony export */   "getGasOptions": () => (/* binding */ getGasOptions),
/* harmony export */   "getGasPrice": () => (/* binding */ getGasPrice),
/* harmony export */   "getLanguage": () => (/* binding */ getLanguage),
/* harmony export */   "getPluginID": () => (/* binding */ getPluginID),
/* harmony export */   "getPluginMinimalModeEnabled": () => (/* binding */ getPluginMinimalModeEnabled),
/* harmony export */   "getSelectedMaskWalletAddress": () => (/* binding */ getSelectedMaskWalletAddress),
/* harmony export */   "getSelectedWalletAddress": () => (/* binding */ getSelectedWalletAddress),
/* harmony export */   "getTheme": () => (/* binding */ getTheme),
/* harmony export */   "getTokenPrices": () => (/* binding */ getTokenPrices),
/* harmony export */   "getTrendingDataSource": () => (/* binding */ getTrendingDataSource),
/* harmony export */   "getWalletAllowTestChain": () => (/* binding */ getWalletAllowTestChain),
/* harmony export */   "openTab": () => (/* binding */ openTab),
/* harmony export */   "setChainId": () => (/* binding */ setChainId),
/* harmony export */   "setCurrentCollectibleDataProvider": () => (/* binding */ setCurrentCollectibleDataProvider),
/* harmony export */   "setCurrentMaskWalletChainId": () => (/* binding */ setCurrentMaskWalletChainId),
/* harmony export */   "setCurrentMaskWalletLockedSettings": () => (/* binding */ setCurrentMaskWalletLockedSettings),
/* harmony export */   "setCurrentMaskWalletNetworkType": () => (/* binding */ setCurrentMaskWalletNetworkType),
/* harmony export */   "setCurrentPersonaIdentifier": () => (/* binding */ setCurrentPersonaIdentifier),
/* harmony export */   "setCurrentPortfolioDataProvider": () => (/* binding */ setCurrentPortfolioDataProvider),
/* harmony export */   "setCurrentSelectedWalletNetwork": () => (/* binding */ setCurrentSelectedWalletNetwork),
/* harmony export */   "setCurrentSelectedWalletProvider": () => (/* binding */ setCurrentSelectedWalletProvider),
/* harmony export */   "setGasOptions": () => (/* binding */ setGasOptions),
/* harmony export */   "setGasPrice": () => (/* binding */ setGasPrice),
/* harmony export */   "setLanguage": () => (/* binding */ setLanguage),
/* harmony export */   "setPluginID": () => (/* binding */ setPluginID),
/* harmony export */   "setPluginMinimalModeEnabled": () => (/* binding */ setPluginMinimalModeEnabled),
/* harmony export */   "setSelectedMaskWalletAddress": () => (/* binding */ setSelectedMaskWalletAddress),
/* harmony export */   "setSelectedWalletAddress": () => (/* binding */ setSelectedWalletAddress),
/* harmony export */   "setTheme": () => (/* binding */ setTheme),
/* harmony export */   "setTokenPrices": () => (/* binding */ setTokenPrices),
/* harmony export */   "setTrendingDataSource": () => (/* binding */ setTrendingDataSource)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(29730);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21202);
/* harmony import */ var _plugins_Trader_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75228);
/* harmony import */ var _IdentityService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64426);
/* harmony import */ var _plugins_Wallet_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(63361);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(70609);
/* harmony import */ var _background_database_kv_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93010);








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
async function getCurrentPersona() {
    const currentPersonaIdentifier1 = await getCurrentPersonaIdentifier();
    if (!currentPersonaIdentifier1) return undefined;
    return (0,_IdentityService__WEBPACK_IMPORTED_MODULE_3__.queryPersona)(currentPersonaIdentifier1);
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

/***/ 19470:
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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220223101101-4e6f3b9/node_modules/@dimensiondev/kit/esm/index.js + 2 modules
var esm = __webpack_require__(66559);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 4 modules
var src = __webpack_require__(79226);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(69914);
// EXTERNAL MODULE: ./src/database/index.ts + 2 modules
var database = __webpack_require__(1196);
// EXTERNAL MODULE: ./background/database/persona/db.ts
var db = __webpack_require__(41715);
// EXTERNAL MODULE: ./src/utils/mnemonic-code/localKeyGenerate.ts
var localKeyGenerate = __webpack_require__(74907);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/latest.ts
var latest = __webpack_require__(96636);
// EXTERNAL MODULE: ./background/database/post/index.ts
var post = __webpack_require__(32849);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PersonaRecord.ts
var PersonaRecord = __webpack_require__(86619);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/ProfileRecord.ts
var ProfileRecord = __webpack_require__(13740);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/PostRecord.ts
var PostRecord = __webpack_require__(50497);
// EXTERNAL MODULE: ./src/plugins/Wallet/services/index.ts + 34 modules
var services = __webpack_require__(62596);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/WalletRecord.ts
var WalletRecord = __webpack_require__(17075);
// EXTERNAL MODULE: ../plugin-infra/src/index.ts + 1 modules
var plugin_infra_src = __webpack_require__(27194);
// EXTERNAL MODULE: ./src/utils/type-transform/BackupFormat/JSON/DBRecord-JSON/RelationRecord.ts
var RelationRecord = __webpack_require__(52612);
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
                const result = await (0,esm/* timeout */.Vs)(backupCreator(), 3000);
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

// EXTERNAL MODULE: ./background/services/helper/index.ts + 6 modules
var helper = __webpack_require__(90841);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(70609);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20210902104757-7c3d0d0_webextension-polyfill@0.8.0/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(44162);
// EXTERNAL MODULE: ./src/utils/index.ts + 5 modules
var utils = __webpack_require__(13573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-browser/v4.js + 2 modules
var v4 = __webpack_require__(32513);
// EXTERNAL MODULE: ./src/extension/background-script/WelcomeServices/restoreBackup.ts
var restoreBackup = __webpack_require__(4717);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/format/index.js + 14 modules
var format = __webpack_require__(57753);
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
    await (0,esm/* delay */.gw)(1000);
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
            const granted = await (0,helper.requestExtensionPermission)({
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
            const granted = await (0,helper.requestExtensionPermission)({
                origins: permissions
            });
            if (!granted) return;
        }
        await (0,helper.openPopupWindow)(src/* PopupRoutes.WalletRecovered */.mZ.WalletRecovered, {
            backupId: id
        });
    }
}
function makeBackupName(extension) {
    const now = (0,format/* default */.Z)(Date.now(), 'yyyy-MM-dd');
    return `mask-network-keystore-backup-${now}.${extension}`;
}


/***/ }),

/***/ 4717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DV": () => (/* binding */ confirmBackup),
/* harmony export */   "Kz": () => (/* binding */ getUnconfirmedBackup),
/* harmony export */   "cg": () => (/* binding */ setUnconfirmedBackup),
/* harmony export */   "pi": () => (/* binding */ restoreBackup)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13573);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6900);
/* harmony import */ var _background_database_persona_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41715);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(66580);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PersonaRecord__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86619);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_ProfileRecord__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13740);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_PostRecord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(50497);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1196);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17075);
/* harmony import */ var _plugins_Wallet_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(62596);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(27194);
/* harmony import */ var ts_results__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(79594);
/* harmony import */ var _plugins_Wallet_services_wallet_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(31847);
/* harmony import */ var _IdentityService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64426);
/* harmony import */ var _utils_type_transform_BackupFormat_JSON_DBRecord_JSON_RelationRecord__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(52612);
/* harmony import */ var _masknet_plugin_wallet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(89987);
/* harmony import */ var _background_database_utils_openDB__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(49100);


















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
        try {
            const record = (0,_utils_type_transform_BackupFormat_JSON_DBRecord_JSON_WalletRecord__WEBPACK_IMPORTED_MODULE_8__/* .WalletRecordFromJSONFormat */ .JW)(x2);
            const name = record.name;
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
            continue;
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

/***/ 1335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kn": () => (/* binding */ derive_AES_GCM_256_Key_From_ECDH_256k1_Keys),
/* harmony export */   "SW": () => (/* binding */ derive_AES_GCM_256_Key_From_PBKDF2),
/* harmony export */   "Sl": () => (/* binding */ split_ec_k256_keypair_into_pub_priv)
/* harmony export */ });
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4625);

function derive_AES_GCM_256_Key_From_PBKDF2(pbkdf, iv, hash = 'SHA-256', iterations = 100000) {
    return _workers__WEBPACK_IMPORTED_MODULE_0__/* .CryptoWorker.derive_aes_from_pbkdf2 */ .i.derive_aes_from_pbkdf2(pbkdf, iv, hash, 'AES-GCM', 256, iterations);
}
function derive_AES_GCM_256_Key_From_ECDH_256k1_Keys(priv, pub) {
    return _workers__WEBPACK_IMPORTED_MODULE_0__/* .CryptoWorker.derive_aes_from_ecdh_k256 */ .i.derive_aes_from_ecdh_k256(priv, pub, 'AES-GCM', 256);
}
async function split_ec_k256_keypair_into_pub_priv(key) {
    const { d , ...pub } = key;
    if (!d) throw new TypeError('split_ec_k256_keypair_into_pub_priv requires a private key (jwk.d)');
    // TODO: maybe should do some extra check on properties
    // @ts-expect-error Do a force transform
    return {
        privateKey: {
            ...key
        },
        publicKey: pub
    };
}


/***/ }),

/***/ 4625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ methods)
});

// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(47974);
;// CONCATENATED MODULE: ./src/modules/CryptoAlgorithm/WebCrypto.ts

/**
 * AES-GCM & pbkdf2 related algorithms are WebCrypto supported
 * so it is safe to run it on the main thread (browser will make it async)
 */ const WebCryptoMethods = {
    async encrypt_aes_gcm (jwk, iv, message) {
        const key = await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(jwk, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes'));
        return crypto.subtle.encrypt({
            name: 'AES-GCM',
            iv
        }, key, message);
    },
    async decrypt_aes_gcm (jwk, iv, message) {
        const key = await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(jwk, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes'));
        return crypto.subtle.decrypt({
            name: 'AES-GCM',
            iv
        }, key, message);
    },
    async generate_aes_gcm (length = 256) {
        const key = await crypto.subtle.generateKey({
            name: 'AES-GCM',
            length
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        return (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(key);
    },
    async derive_aes_from_pbkdf2 (pbkdf, salt, hash, aes_algr, aes_length, iterations) {
        if (!(pbkdf instanceof CryptoKey)) throw new TypeError('Expect PBKDF2UnknownKey to be a CryptoKey at runtime');
        const aes = await crypto.subtle.deriveKey({
            name: 'PBKDF2',
            salt,
            iterations,
            hash
        }, pbkdf, {
            name: aes_algr,
            length: aes_length
        }, true, [
            'encrypt',
            'decrypt'
        ]);
        return (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(aes);
    },
    digest_sha (alg, data) {
        return crypto.subtle.digest(alg, data);
    },
    async import_pbkdf2 (seed) {
        const key = await crypto.subtle.importKey('raw', seed, 'PBKDF2', false, [
            'deriveBits',
            'deriveKey'
        ]);
        // In the WebCrypto spec, it is not exportable. We choose CryptoKey as our PBKDF2UnknownKey
        return key;
    },
    async aes_to_raw (aes, name = 'AES-GCM', length = 256) {
        const cryptoKey = await crypto.subtle.importKey('jwk', aes, {
            name,
            length
        }, true, [
            ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes')[0], 
        ]);
        return crypto.subtle.exportKey('raw', cryptoKey);
    },
    async raw_to_aes (raw, name = 'AES-GCM', length = 256) {
        const cryptoKey = await crypto.subtle.importKey('raw', raw, {
            name,
            length
        }, true, [
            ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('aes')[0], 
        ]);
        return await crypto.subtle.exportKey('jwk', cryptoKey);
    }
};

// EXTERNAL MODULE: ./src/utils/mnemonic-code/index.ts
var mnemonic_code = __webpack_require__(69914);
;// CONCATENATED MODULE: ./src/modules/CryptoAlgorithm/EllipticBackend/methods.ts



const ECDH = (0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdh')[0];
const ECDSA = (0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdsa')[0];
function initEllipticBackend(_) {
    return {
        async generate_ec_k256_pair () {
            const { privateKey , publicKey  } = await crypto.subtle.generateKey({
                name: 'ECDH',
                namedCurve: 'K-256'
            }, true, [
                ...ECDH
            ]);
            return {
                privateKey: await (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(privateKey),
                publicKey: await (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(publicKey)
            };
        },
        async derive_aes_from_ecdh_k256 (priv, pub, aes = 'AES-GCM', length = 256) {
            const key = await crypto.subtle.deriveKey({
                name: 'ECDH',
                public: await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(pub, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdh'))
            }, await (0,CryptoKey_JsonWebKey/* JsonWebKeyToCryptoKey */.ce)(priv, ...(0,CryptoKey_JsonWebKey/* getKeyParameter */.Rw)('ecdh')), {
                name: aes,
                length
            }, true, [
                'encrypt',
                'decrypt'
            ]);
            return (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(key);
        },
        async generate_ecdh_k256_from_mnemonic (password) {
            return _helper(await (0,mnemonic_code/* generate_ECDH_256k1_KeyPair_ByMnemonicWord */.xX)(password));
        },
        async recover_ecdh_k256_from_mnemonic (words, password) {
            return _helper(await (0,mnemonic_code/* recover_ECDH_256k1_KeyPair_ByMnemonicWord */.Hb)(words, password));
        }
    };
}
async function _helper(x) {
    const { key: { privateKey , publicKey  } , mnemonicRecord: { parameter: { path , withPassword  } , words ,  } , password ,  } = x;
    return {
        mnemonic_words: words,
        parameter_path: path,
        parameter_with_password: withPassword,
        password,
        privateKey,
        publicKey
    };
}
/* harmony default export */ const methods = ({
    ...WebCryptoMethods,
    ...initEllipticBackend(WebCryptoMethods)
});

;// CONCATENATED MODULE: ./src/modules/workers.ts



/***/ }),

/***/ 37867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17692);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27194);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(4477), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(9654)]).then(__webpack_require__.bind(__webpack_require__, 21585))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 75228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aj": () => (/* binding */ getCurrentTradeProviderGeneralSettings),
/* harmony export */   "DG": () => (/* binding */ currentSingleHopOnlySettings),
/* harmony export */   "EG": () => (/* binding */ approvedTokensFromUniSwap),
/* harmony export */   "It": () => (/* binding */ currentSlippageSettings),
/* harmony export */   "Lc": () => (/* binding */ getCurrentPreferredCoinIdSettings),
/* harmony export */   "gG": () => (/* binding */ currentDataProviderSettings)
/* harmony export */ });
/* unused harmony export getCurrentDataProviderGeneralSettings */
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _settings_createSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91296);
/* harmony import */ var _shared_ui_locales_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6900);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43545);
/* harmony import */ var _masknet_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48476);





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

/***/ 69914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hb": () => (/* binding */ recover_ECDH_256k1_KeyPair_ByMnemonicWord),
/* harmony export */   "_I": () => (/* binding */ validateMnemonic),
/* harmony export */   "xX": () => (/* binding */ generate_ECDH_256k1_KeyPair_ByMnemonicWord)
/* harmony export */ });
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68440);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66559);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79226);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1335);





// Private key at m/44'/coinType'/account'/change/addressIndex
// coinType = ether
const path = "m/44'/60'/0'/0/0";
async function generate_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    const mnemonicWord = bip39__WEBPACK_IMPORTED_MODULE_0__/* .generateMnemonic */ .OF();
    const seed = await bip39__WEBPACK_IMPORTED_MODULE_0__/* .mnemonicToSeed */ .OI(mnemonicWord, password);
    const masterKey = wallet_ts__WEBPACK_IMPORTED_MODULE_1__.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__/* .split_ec_k256_keypair_into_pub_priv */ .Sl)(HDKeyToJwk(derivedKey));
    return {
        key,
        password,
        mnemonicRecord: {
            parameter: {
                path: path,
                withPassword: password.length > 0
            },
            words: mnemonicWord
        }
    };
}
async function recover_ECDH_256k1_KeyPair_ByMnemonicWord(mnemonicWord, password) {
    const verify = bip39__WEBPACK_IMPORTED_MODULE_0__/* .validateMnemonic */ ._I(mnemonicWord);
    if (!verify) {
        console.warn('Verify error');
    }
    const seed = await bip39__WEBPACK_IMPORTED_MODULE_0__/* .mnemonicToSeed */ .OI(mnemonicWord, password);
    const masterKey = wallet_ts__WEBPACK_IMPORTED_MODULE_1__.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_4__/* .split_ec_k256_keypair_into_pub_priv */ .Sl)(HDKeyToJwk(derivedKey));
    return {
        key,
        password,
        mnemonicRecord: {
            parameter: {
                path: path,
                withPassword: password.length > 0
            },
            words: mnemonicWord
        }
    };
}
const validateMnemonic = bip39__WEBPACK_IMPORTED_MODULE_0__/* .validateMnemonic */ ._I;
function HDKeyToJwk(hdk) {
    const jwk = (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .decompressSecp256k1Key */ .qX)((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .encodeArrayBuffer */ .ll)(hdk.publicKey));
    jwk.d = hdk.privateKey ? (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_3__/* .toBase64URL */ .wi)(hdk.privateKey) : undefined;
    return jwk;
}


/***/ }),

/***/ 74907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ deriveLocalKeyFromECDHKey)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _modules_workers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4625);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1335);



/**
 * Local key (AES key) is used to encrypt message to myself.
 * This key should never be published.
 */ async function deriveLocalKeyFromECDHKey(pub, mnemonicWord) {
    // ? Derive method: publicKey as "password" and password for the mnemonicWord as hash
    const pbkdf2 = await _modules_workers__WEBPACK_IMPORTED_MODULE_1__/* .CryptoWorker.import_pbkdf2 */ .i.import_pbkdf2((0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(pub.x + pub.y));
    return (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_2__/* .derive_AES_GCM_256_Key_From_PBKDF2 */ .SW)(pbkdf2, (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(mnemonicWord));
}


/***/ }),

/***/ 86619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ PersonaRecordToJSONFormat),
/* harmony export */   "r": () => (/* binding */ PersonaRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);

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

/***/ 50497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ PostRecordToJSONFormat),
/* harmony export */   "n": () => (/* binding */ PostRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66559);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82151);
/* harmony import */ var _msgpack_msgpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92415);
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79226);



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

/***/ 13740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ ProfileRecordFromJSONFormat),
/* harmony export */   "P": () => (/* binding */ ProfileRecordToJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);

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

/***/ 52612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ RelationRecordToJSONFormat),
/* harmony export */   "c": () => (/* binding */ RelationRecordFromJSONFormat)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79226);

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

/***/ 17075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JW": () => (/* binding */ WalletRecordFromJSONFormat),
/* harmony export */   "dp": () => (/* binding */ WalletRecordToJSONFormat),
/* harmony export */   "ww": () => (/* binding */ LegacyWalletRecordToJSONFormat)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96596);
/* harmony import */ var _masknet_web3_shared_evm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66580);
/* harmony import */ var _SECP256k1_ETH__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37790);



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


/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteDB),
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.openDB),
/* harmony export */   "re": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.wrap)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ })

}]);