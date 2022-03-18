"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[597],{

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
  "createPersonaDBReadonlyAccess": () => (/* binding */ createPersonaDBReadonlyAccess),
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
async function createPersonaDBReadonlyAccess(action) {
    const database = await db();
    const transaction = (0,openDB/* createTransaction */._X)(database, 'readonly')('personas', 'profiles', 'relations');
    await action(transaction);
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

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ CryptoKeyToJsonWebKey),
  "rP": () => (/* reexport */ EMPTY_LIST),
  "G1": () => (/* reexport */ OnDemandWorker),
  "mS": () => (/* reexport */ restorePrototype),
  "Yo": () => (/* reexport */ restorePrototypeArray),
  "Wu": () => (/* reexport */ startEffects)
});

// UNUSED EXPORTS: EMPTY_OBJECT, assert

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

;// CONCATENATED MODULE: ./utils-pure/misc.ts
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

;// CONCATENATED MODULE: ./utils-pure/hmr.ts
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

;// CONCATENATED MODULE: ./utils-pure/crypto/index.ts
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}

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







/***/ })

}]);