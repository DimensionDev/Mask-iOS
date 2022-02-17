"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6076],{

/***/ 10288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* reexport safe */ _masknet_shared__WEBPACK_IMPORTED_MODULE_0__.IdentifierMap)
/* harmony export */ });
/* harmony import */ var _masknet_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80050);



/***/ }),

/***/ 88628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tc": () => (/* binding */ attachProfileDB),
  "As": () => (/* binding */ consistentPersonaDBWriteAccess),
  "lX": () => (/* binding */ createOrUpdatePersonaDB),
  "o7": () => (/* binding */ createOrUpdateProfileDB),
  "E9": () => (/* binding */ createPersonaDB),
  "ah": () => (/* binding */ createProfileDB),
  "N8": () => (/* binding */ createRelationDB),
  "LY": () => (/* binding */ deletePersonaDB),
  "B4": () => (/* binding */ deleteProfileDB),
  "AY": () => (/* binding */ detachProfileDB),
  "fl": () => (/* binding */ queryPersonaByProfileDB),
  "Hm": () => (/* binding */ queryPersonaDB),
  "_P": () => (/* binding */ queryPersonasDB),
  "Eq": () => (/* binding */ queryPersonasWithPrivateKey),
  "IW": () => (/* binding */ queryProfileDB),
  "i2": () => (/* binding */ queryProfilesDB),
  "Yy": () => (/* binding */ queryProfilesPagedDB),
  "PF": () => (/* binding */ queryRelationsPagedDB),
  "Ul": () => (/* binding */ safeDeletePersonaDB),
  "E8": () => (/* binding */ updatePersonaDB),
  "Jx": () => (/* binding */ updateRelationDB)
});

// UNUSED EXPORTS: createPersonaDBAccess, updateProfileDB

// EXTERNAL MODULE: ../../node_modules/.pnpm/fuse.js@6.4.6/node_modules/fuse.js/dist/fuse.esm.js
var fuse_esm = __webpack_require__(9614);
// EXTERNAL MODULE: ./src/database/type.ts
var type = __webpack_require__(29573);
// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@5.0.8/node_modules/idb/with-async-ittr-cjs.js
var with_async_ittr_cjs = __webpack_require__(79930);
// EXTERNAL MODULE: ./src/database/IdentifierMap.ts
var IdentifierMap = __webpack_require__(10288);
// EXTERNAL MODULE: ./src/utils/type.ts
var utils_type = __webpack_require__(22271);
// EXTERNAL MODULE: ./src/utils/messages.ts
var messages = __webpack_require__(74712);
// EXTERNAL MODULE: ./src/database/helpers/openDB.ts
var openDB = __webpack_require__(77046);
// EXTERNAL MODULE: ./src/database/Persona/helpers.ts
var helpers = __webpack_require__(92054);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20210712114527-dc8eac6/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(11494);
;// CONCATENATED MODULE: ./src/database/Persona/consistency.ts



async function assertPersonaDBConsistency(behavior, ...[checkRange, t]) {
    const diag = [];
    for await (const w of checkFullPersonaDBConsistency(checkRange, t)){
        diag.push(w);
    }
    if (diag.length) {
        const warn = `PersonaDB is in the inconsistency state`;
        console.warn(warn);
        console.info(await t.objectStore('personas').getAll());
        console.info(await t.objectStore('profiles').getAll());
        console.error(...diag);
        if (behavior === 'throw') {
            t.abort();
            throw new Error(warn);
        } else if (t.mode === 'readwrite') {
            console.warn('Try to fix the inconsistent db');
            for (const each of diag)await fixDBInconsistency(each, t).catch(()=>{
            });
        }
    }
    return diag;
}
async function fixDBInconsistency(diagnosis, t) {
    const personas = t.objectStore('personas');
    const profiles = t.objectStore('profiles');
    switch(diagnosis.type){
        case Type.Invalid_Persona:
            return personas.delete(diagnosis.invalidPersonaKey);
        case Type.Invalid_Profile:
            return profiles.delete(diagnosis.invalidProfileKey);
        case Type.One_Way_Link_In_Persona:
        case Type.Invalid_Persona_LinkedProfiles:
            {
                const rec = await personas.get(diagnosis.persona.toText());
                const profileWantToUnlink = diagnosis.type === Type.One_Way_Link_In_Persona ? diagnosis.designatedProfile.toText() : diagnosis.invalidProfile;
                rec.linkedProfiles.delete(profileWantToUnlink);
                return personas.put(rec);
            }
        case Type.One_Way_Link_In_Profile:
        case Type.Invalid_Profile_LinkedPersona:
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
        const personaID = type/* Identifier.fromString */.xb.fromString(persona.key, type/* ECKeyIdentifier */.ob);
        if (personaID.err) {
            yield {
                type: Type.Invalid_Persona,
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
        const profileID = type/* Identifier.fromString */.xb.fromString(profile.key, type/* ProfileIdentifier */.WO);
        if (profileID.err) {
            yield {
                type: Type.Invalid_Profile,
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
        const profileID = type/* Identifier.fromString */.xb.fromString(each[0], type/* ProfileIdentifier */.WO);
        if (profileID.err) {
            yield {
                type: Type.Invalid_Persona_LinkedProfiles,
                invalidProfile: each[0],
                persona: personaID
            };
            continue;
        }
        const profile = await t.objectStore('profiles').get(profileID.val.toText());
        if (!(profile === null || profile === void 0 ? void 0 : profile.linkedPersona)) {
            yield {
                type: Type.One_Way_Link_In_Persona,
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
            type: Type.Invalid_Profile_LinkedPersona,
            invalidLinkedPersona,
            profile
        };
        return;
    }
    const designatedPersona = (0,utils_type/* restorePrototype */.m)(invalidLinkedPersona, type/* ECKeyIdentifier.prototype */.ob.prototype);
    const persona = await t.objectStore('personas').get(designatedPersona.toText());
    if (!persona) {
        yield {
            type: Type.One_Way_Link_In_Profile,
            profile,
            designatedPersona
        };
    }
}
var Type;
(function(Type1) {
    Type1["Invalid_Persona"] = 'invalid identifier in persona';
    Type1["Invalid_Persona_LinkedProfiles"] = 'invalid identifier in persona.linkedProfiles';
    Type1["Invalid_Profile"] = 'invalid identifier in profile';
    Type1["Invalid_Profile_LinkedPersona"] = 'invalid identifier in profile.linkedPersona';
    Type1["One_Way_Link_In_Persona"] = 'a persona linked to a profile meanwhile the profile is not linked to the persona';
    Type1["One_Way_Link_In_Profile"] = 'a profile linked to a persona meanwhile it is not appeared in the persona.linkedProfiles';
})(Type || (Type = {
}));

// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(24784);
;// CONCATENATED MODULE: ./src/database/Persona/Persona.db.ts
/// <reference path="../global.d.ts" />










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
 */ const db1 = (0,openDB/* createDBAccessWithAsyncUpgrade */.Ns)(1, 3, (currentOpenVersion, knowledge)=>{
    return (0,with_async_ittr_cjs.openDB)('maskbook-persona', currentOpenVersion, {
        upgrade (db, oldVersion, newVersion, transaction) {
            function v0_v1() {
                db.createObjectStore('personas', {
                    keyPath: 'identifier'
                });
                db.createObjectStore('profiles', {
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
                db.createObjectStore('relations', {
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
            }
            if (oldVersion < 1) return v0_v1();
            if (oldVersion < 2) v1_v2();
            if (oldVersion < 3) v2_v3();
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
            map.data.set(rec.identifier, await (0,CryptoKey_JsonWebKey/* CryptoKeyToJsonWebKey */.iV)(rec.localKey));
        }
        return map;
    }
    return undefined;
});
const createPersonaDBAccess = (/* unused pure expression or super */ null && (db1));
async function consistentPersonaDBWriteAccess(action, tryToAutoFix = true) {
    // TODO: collect all changes on this transaction then only perform consistency check on those records.
    const database = await db1();
    let t = (0,openDB/* createTransaction */._X)(database, 'readwrite')('profiles', 'personas', 'relations');
    let finished = false;
    const finish = ()=>finished = true
    ;
    t.addEventListener('abort', finish);
    t.addEventListener('complete', finish);
    t.addEventListener('error', finish);
    // Pause those events when patching write access
    const resumeProfile = messages/* MaskMessage.events.profilesChanged.pause */.y.events.profilesChanged.pause();
    const resumePersona = messages/* MaskMessage.events.personaChanged.pause */.y.events.personaChanged.pause();
    const resumeRelation = messages/* MaskMessage.events.relationsChanged.pause */.y.events.relationsChanged.pause();
    const resumeLinkedProfileChanged = messages/* MaskMessage.events.linkedProfilesChanged.pause */.y.events.linkedProfilesChanged.pause();
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
            resumePersona((data)=>[
                    data.flat()
                ]
            );
            resumeRelation((data)=>[
                    data.flat()
                ]
            );
            resumeLinkedProfileChanged((data)=>[
                    data.flat()
                ]
            );
        } finally{
            // If the consistency check throws, we drop all pending events
            resumeProfile(()=>[]
            );
            resumePersona(()=>[]
            );
            resumePersona(()=>[]
            );
            resumeLinkedProfileChanged(()=>[]
            );
        }
    }
}
//#region Plain methods
/** Create a new Persona. */ async function createPersonaDB(record, t) {
    await t.objectStore('personas').add(personaRecordToDB(record));
    messages/* MaskMessage.events.personaChanged.sendToAll */.y.events.personaChanged.sendToAll([
        {
            of: record.identifier,
            owned: !!record.privateKey,
            reason: 'new'
        }
    ]);
}
async function queryPersonaByProfileDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('personas', 'profiles', 'relations');
    const x = await t.objectStore('profiles').get(query.toText());
    if (!(x === null || x === void 0 ? void 0 : x.linkedPersona)) return null;
    return queryPersonaDB((0,utils_type/* restorePrototype */.m)(x.linkedPersona, type/* ECKeyIdentifier.prototype */.ob.prototype), t);
}
/**
 * Query a Persona.
 */ async function queryPersonaDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('personas');
    const x = await t.objectStore('personas').get(query.toText());
    if (x) return personaRecordOutDB(x);
    return null;
}
/**
 * Query many Personas.
 */ async function queryPersonasDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('personas');
    const records = [];
    for await (const each of t.objectStore('personas')){
        const out = personaRecordOutDB(each.value);
        if (query(out)) records.push(out);
    }
    return records;
}
/**
 * Query many Personas.
 */ async function queryPersonasWithPrivateKey(t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('personas', 'profiles', 'relations');
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
        if (howToMerge.linkedProfiles === 'merge') nextLinkedProfiles = new IdentifierMap/* IdentifierMap */.q(new Map([
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
    messages/* MaskMessage.events.personaChanged.sendToAll */.y.events.personaChanged.sendToAll([
        {
            of: old.identifier,
            owned: !!next.privateKey,
            reason: 'update'
        }
    ]);
}
async function createOrUpdatePersonaDB(record, howToMerge, t) {
    var _createdAt, _updatedAt;
    if (await t.objectStore('personas').get(record.identifier.toText())) return updatePersonaDB(record, howToMerge, t);
    else return createPersonaDB({
        ...record,
        createdAt: (_createdAt = record.createdAt) !== null && _createdAt !== void 0 ? _createdAt : new Date(),
        updatedAt: (_updatedAt = record.updatedAt) !== null && _updatedAt !== void 0 ? _updatedAt : new Date(),
        linkedProfiles: new IdentifierMap/* IdentifierMap */.q(new Map())
    }, t);
}
/**
 * Delete a Persona
 */ async function deletePersonaDB(id, confirm, t) {
    const r = await t.objectStore('personas').get(id.toText());
    if (!r) return;
    if (confirm !== 'delete even with private' && r.privateKey) throw new TypeError('Cannot delete a persona with a private key');
    await t.objectStore('personas').delete(id.toText());
    messages/* MaskMessage.events.personaChanged.sendToAll */.y.events.personaChanged.sendToAll([
        {
            of: id,
            owned: !!r.privateKey,
            reason: 'delete'
        }
    ]);
}
/**
 * Delete a Persona
 * @returns a boolean. true: the record no longer exists; false: the record is kept.
 */ async function safeDeletePersonaDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readwrite')('personas', 'profiles', 'relations');
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
    messages/* MaskMessage.events.profilesChanged.sendToAll */.y.events.profilesChanged.sendToAll([
        {
            of: record.identifier,
            reason: 'update'
        }
    ]);
}
/**
 * Query a profile.
 */ async function queryProfileDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('profiles');
    const result = await t.objectStore('profiles').get(id.toText());
    if (result) return profileOutDB(result);
    return null;
}
/**
 * Query many profiles.
 */ async function queryProfilesDB(network, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('profiles');
    const result = [];
    if (typeof network === 'string') {
        result.push(...(await t.objectStore('profiles').index('network').getAll(IDBKeyRange.only(network))).map(profileOutDB));
    } else {
        for await (const each of t.objectStore('profiles').iterate()){
            const out = profileOutDB(each.value);
            if (network(out)) result.push(out);
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
async function queryProfilesPagedDB(options, count) {
    var ref;
    const t = (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('profiles');
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
    setTimeout(async ()=>{
        const next = await (0,helpers/* queryProfile */.JL)(updating.identifier);
        messages/* MaskMessage.events.profilesChanged.sendToAll */.y.events.profilesChanged.sendToAll([
            {
                reason: 'update',
                of: updating.identifier
            }
        ]);
        const oldKey = old.linkedPersona ? (0,utils_type/* restorePrototype */.m)(old.linkedPersona, type/* ECKeyIdentifier.prototype */.ob.prototype) : undefined;
        const newKey = next.linkedPersona;
        if ((oldKey === null || oldKey === void 0 ? void 0 : oldKey.toText()) !== (newKey === null || newKey === void 0 ? void 0 : newKey.identifier.toText())) {
            messages/* MaskMessage.events.linkedProfilesChanged.sendToAll */.y.events.linkedProfilesChanged.sendToAll([
                {
                    of: next.identifier,
                    before: oldKey,
                    after: newKey === null || newKey === void 0 ? void 0 : newKey.identifier
                }, 
            ]);
        }
    }, 0);
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
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readwrite')('personas', 'profiles', 'relations');
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
    }
    profile.linkedPersona = undefined;
    await updateProfileDB(profile, t);
}
/**
 * attach a profile.
 */ async function attachProfileDB(identifier, attachTo, data, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db1(), 'readwrite')('personas', 'profiles', 'relations');
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
}
/**
 * Delete a profile
 */ async function deleteProfileDB(id, t) {
    await t.objectStore('profiles').delete(id.toText());
    messages/* MaskMessage.events.profilesChanged.sendToAll */.y.events.profilesChanged.sendToAll([
        {
            reason: 'delete',
            of: id
        }
    ]);
}
/**
 * Create a new Relation
 */ async function createRelationDB(record, t) {
    await t.objectStore('relations').add(relationRecordToDB(record));
    messages/* MaskMessage.events.relationsChanged.sendToAll */.y.events.relationsChanged.sendToAll([
        {
            of: record.profile,
            reason: 'update',
            favor: record.favor
        }
    ]);
}
/**
 * Query relations by paged
 */ async function queryRelationsPagedDB(linked, options, count) {
    const t = (0,openDB/* createTransaction */._X)(await db1(), 'readonly')('relations');
    let firstRecord = true;
    const data = [];
    for await (const cursor of t.objectStore('relations').index('linked, profile, favor').iterate()){
        var ref, ref1;
        if (cursor.value.linked !== linked.toText()) continue;
        if (firstRecord && options.after && options.after.linked.toText() !== (cursor === null || cursor === void 0 ? void 0 : cursor.value.linked) && options.after.profile.toText() !== (cursor === null || cursor === void 0 ? void 0 : cursor.value.profile)) {
            // @ts-ignore
            cursor.continue([
                options.after.linked,
                options.after.profile,
                options.after.favor
            ]);
            firstRecord = false;
            continue;
        }
        firstRecord = false;
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
 */ async function updateRelationDB(updating, t) {
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
    messages/* MaskMessage.events.relationsChanged.sendToAll */.y.events.relationsChanged.sendToAll([
        {
            of: updating.profile,
            favor: updating.favor,
            reason: 'update'
        }
    ]);
}
//#endregion
//#region out db & to db
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
        identifier: type/* Identifier.fromString */.xb.fromString(x.identifier, type/* ProfileIdentifier */.WO).unwrap(),
        linkedPersona: (0,utils_type/* restorePrototype */.m)(x.linkedPersona, type/* ECKeyIdentifier.prototype */.ob.prototype)
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
    const obj = {
        ...x,
        identifier: type/* Identifier.fromString */.xb.fromString(x.identifier, type/* ECKeyIdentifier */.ob).unwrap(),
        linkedProfiles: new IdentifierMap/* IdentifierMap */.q(x.linkedProfiles, type/* ProfileIdentifier */.WO)
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
        profile: type/* Identifier.fromString */.xb.fromString(x.profile, type/* ProfileIdentifier */.WO).unwrap(),
        linked: type/* Identifier.fromString */.xb.fromString(x.linked, type/* ECKeyIdentifier */.ob).unwrap()
    };
}
function findRelationRecordWithLinked(x, linked) {
    return linked.equals(Identifier.fromString(x.linked, ECKeyIdentifier).unwrap());
} //#endregion


/***/ }),

/***/ 92054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m3": () => (/* binding */ personaRecordToPersona),
/* harmony export */   "JL": () => (/* binding */ queryProfile),
/* harmony export */   "V6": () => (/* binding */ queryProfilePaged),
/* harmony export */   "pR": () => (/* binding */ queryPersona),
/* harmony export */   "X8": () => (/* binding */ queryProfilesWithQuery),
/* harmony export */   "FB": () => (/* binding */ deletePersona),
/* harmony export */   "rR": () => (/* binding */ renamePersona),
/* harmony export */   "gn": () => (/* binding */ setupPersona),
/* harmony export */   "Ye": () => (/* binding */ queryPersonaByPrivateKey),
/* harmony export */   "yQ": () => (/* binding */ queryPersonaRecord),
/* harmony export */   "M_": () => (/* binding */ queryPublicKey),
/* harmony export */   "wb": () => (/* binding */ queryPrivateKey),
/* harmony export */   "A8": () => (/* binding */ createPersonaByMnemonic),
/* harmony export */   "c9": () => (/* binding */ createPersonaByMnemonicV2),
/* harmony export */   "w0": () => (/* binding */ createPersonaByJsonWebKey),
/* harmony export */   "lr": () => (/* binding */ createProfileWithPersona),
/* harmony export */   "DM": () => (/* binding */ queryLocalKey)
/* harmony export */ });
/* unused harmony exports profileRecordToProfile, queryPersonasWithQuery, queryPersonaByProfile */
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _Persona_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88628);
/* harmony import */ var _IdentifierMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10288);
/* harmony import */ var _helpers_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9142);
/* harmony import */ var _utils_mnemonic_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(53505);
/* harmony import */ var _utils_mnemonic_code_localKeyGenerate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63329);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(37186);







async function profileRecordToProfile(record) {
    const rec = {
        ...record
    };
    const persona = rec.linkedPersona;
    delete rec.linkedPersona;
    delete rec.localKey;
    const _ = persona ? queryPersona(persona) : undefined;
    const _2 = (0,_helpers_avatar__WEBPACK_IMPORTED_MODULE_3__/* .queryAvatarDataURL */ .L)(rec.identifier).catch(()=>undefined
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
    const _ = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryProfileDB */ .IW)(identifier);
    if (_) return profileRecordToProfile(_);
    return {
        identifier,
        createdAt: new Date(),
        updatedAt: new Date()
    };
}
async function queryProfilePaged(...args) {
    const _ = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryProfilesPagedDB */ .Yy)(...args);
    return Promise.all(_.map(profileRecordToProfile));
}
/**
 * Query a persona even it is not stored in the database.
 * @param identifier - Identifier for people want to query
 */ async function queryPersona(identifier) {
    const _ = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaDB */ .Hm)(identifier);
    if (_) return personaRecordToPersona(_);
    return {
        identifier,
        createdAt: new Date(),
        updatedAt: new Date(),
        linkedProfiles: new _IdentifierMap__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .q(new Map(), _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        hasPrivateKey: false,
        fingerprint: identifier.compressedPoint
    };
}
/**
 * Select a set of Profiles
 */ async function queryProfilesWithQuery(query) {
    const _ = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryProfilesDB */ .i2)(query || ((_1)=>true
    ));
    return Promise.all(_.map(profileRecordToProfile));
}
/**
 * Select a set of Personas
 */ async function queryPersonasWithQuery(query) {
    const _ = await queryPersonasDB(query || ((_1)=>true
    ));
    return _.map(personaRecordToPersona);
}
async function deletePersona(id, confirm) {
    return (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
        const d = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaDB */ .Hm)(id, t);
        if (!d) return;
        for (const e of d.linkedProfiles){
            await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .detachProfileDB */ .AY)(e[0], t);
        }
        if (confirm === 'delete even with private') await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .deletePersonaDB */ .LY)(id, 'delete even with private', t);
        else if (confirm === 'safe delete') await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .safeDeletePersonaDB */ .Ul)(id, t);
    });
}
async function renamePersona(identifier, nickname) {
    return (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)((t)=>(0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .updatePersonaDB */ .E8)({
            identifier,
            nickname
        }, {
            linkedProfiles: 'merge',
            explicitUndefinedField: 'ignore'
        }, t)
    );
}
async function setupPersona(id) {
    return (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
        const d = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaDB */ .Hm)(id, t);
        if (!d) throw new Error('cannot find persona');
        if (d.linkedProfiles.size === 0) throw new Error('persona should link at least one profile');
        if (d.uninitialized) {
            await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .updatePersonaDB */ .E8)({
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
async function queryPersonaByPrivateKey(privateKeyString) {
    const privateKey = (0,_utils__WEBPACK_IMPORTED_MODULE_6__/* .decompressSecp256k1Key */ .qX)(privateKeyString, 'private');
    const identifier = (0,_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(privateKey, 'private');
    return queryPersona(identifier);
}
function queryPersonaRecord(i) {
    return i instanceof _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO ? (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaByProfileDB */ .fl)(i) : (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaDB */ .Hm)(i);
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
    const { key , mnemonicRecord: mnemonic  } = await (0,_utils_mnemonic_code__WEBPACK_IMPORTED_MODULE_4__/* .generate_ECDH_256k1_KeyPair_ByMnemonicWord */ .xX)(password);
    const { privateKey , publicKey  } = key;
    const localKey = await (0,_utils_mnemonic_code_localKeyGenerate__WEBPACK_IMPORTED_MODULE_5__/* .deriveLocalKeyFromECDHKey */ .i)(publicKey, mnemonic.words);
    return createPersonaByJsonWebKey({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: true
    });
}
async function createPersonaByMnemonicV2(mnemonicWord, nickname, password) {
    const { key , mnemonicRecord: mnemonic  } = await (0,_utils_mnemonic_code__WEBPACK_IMPORTED_MODULE_4__/* .generate_ECDH_256k1_KeyPair_ByMnemonicWord_V2 */ .lD)(mnemonicWord, password);
    const { privateKey , publicKey  } = key;
    const localKey = await (0,_utils_mnemonic_code_localKeyGenerate__WEBPACK_IMPORTED_MODULE_5__/* .deriveLocalKeyFromECDHKey */ .i)(publicKey, mnemonic.words);
    return createPersonaByJsonWebKey({
        privateKey,
        publicKey,
        localKey,
        mnemonic,
        nickname,
        uninitialized: true
    });
}
async function createPersonaByJsonWebKey(options) {
    const identifier = (0,_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(options.publicKey);
    const record = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: identifier,
        linkedProfiles: new _IdentifierMap__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .q(new Map(), _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        publicKey: options.publicKey,
        privateKey: options.privateKey,
        nickname: options.nickname,
        mnemonic: options.mnemonic,
        localKey: options.localKey,
        uninitialized: options.uninitialized
    };
    await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)((t)=>(0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .createPersonaDB */ .E9)(record, t)
    );
    return identifier;
}
async function createProfileWithPersona(profileID, data, keys) {
    const ec_id = (0,_type__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifierFromJsonWebKey */ .CH)(keys.publicKey);
    const rec = {
        createdAt: new Date(),
        updatedAt: new Date(),
        identifier: ec_id,
        linkedProfiles: new _IdentifierMap__WEBPACK_IMPORTED_MODULE_2__/* .IdentifierMap */ .q(new Map(), _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        nickname: keys.nickname,
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
        localKey: keys.localKey,
        mnemonic: keys.mnemonic
    };
    await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .consistentPersonaDBWriteAccess */ .As)(async (t)=>{
        await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .createOrUpdatePersonaDB */ .lX)(rec, {
            explicitUndefinedField: 'ignore',
            linkedProfiles: 'merge'
        }, t);
        await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .attachProfileDB */ .tc)(profileID, ec_id, data, t);
    });
}
async function queryLocalKey(i) {
    if (i instanceof _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO) {
        const profile = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryProfileDB */ .IW)(i);
        if (!profile) return null;
        if (profile.localKey) return profile.localKey;
        if (!profile.linkedPersona) return null;
        return queryLocalKey(profile.linkedPersona);
    } else {
        var ref;
        var ref1;
        return (ref1 = (ref = await (0,_Persona_db__WEBPACK_IMPORTED_MODULE_1__/* .queryPersonaDB */ .Hm)(i)) === null || ref === void 0 ? void 0 : ref.localKey) !== null && ref1 !== void 0 ? ref1 : null;
    }
}
function cover_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 4238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hm": () => (/* binding */ createAvatarDBAccess),
/* harmony export */   "CW": () => (/* binding */ storeAvatarDB),
/* harmony export */   "dg": () => (/* binding */ queryAvatarDB),
/* harmony export */   "yo": () => (/* binding */ queryAvatarOutdatedDB),
/* harmony export */   "PU": () => (/* binding */ isAvatarOutdatedDB),
/* harmony export */   "ft": () => (/* binding */ deleteAvatarsDB)
/* harmony export */ });
/* unused harmony export updateAvatarMetaDB */
/* harmony import */ var idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79930);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29573);
/* harmony import */ var _helpers_openDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77046);
/// <reference path="./global.d.ts" />



//#endregion
const db1 = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createDBAccess */ .Z_)(()=>{
    return (0,idb_with_async_ittr_cjs__WEBPACK_IMPORTED_MODULE_0__.openDB)('maskbook-avatar-cache', 1, {
        upgrade (db, oldVersion, newVersion, transaction) {
            // Out line keys
            db.createObjectStore('avatars');
            db.createObjectStore('metadata', {
                keyPath: 'identifier'
            });
        }
    });
});
const createAvatarDBAccess = (/* runtime-dependent pure expression or super */ 9095 == __webpack_require__.j ? (db1) : null);
/**
 * Store avatar into database
 */ async function storeAvatarDB(id, avatar) {
    const meta = {
        identifier: id.toText(),
        lastUpdateTime: new Date(),
        lastAccessTime: new Date()
    };
    const t = (await db1()).transaction([
        'avatars',
        'metadata'
    ], 'readwrite');
    await t.objectStore('avatars').put(avatar, id.toText());
    await t.objectStore('metadata').put(meta);
    return;
}
/**
 * Read avatar out
 */ async function queryAvatarDB(id) {
    const t = (await db1()).transaction('avatars');
    const result = await t.objectStore('avatars').get(id.toText());
    if (result) {
        updateAvatarMetaDB(id, {
            lastAccessTime: new Date()
        }).catch((error)=>{
            console.warn('Update last use record failed', error);
        });
    }
    return result || null;
}
/**
 * Store avatar metadata
 */ async function updateAvatarMetaDB(id, newMeta) {
    const t = (await db1()).transaction('metadata', 'readwrite');
    const meta = await t.objectStore('metadata').get(id.toText());
    const newRecord = Object.assign({
    }, meta, newMeta);
    await t.objectStore('metadata').put(newRecord);
}
/**
 * Find avatar lastUpdateTime or lastAccessTime out-of-date
 * @param attribute - Which attribute want to query
 * @param deadline - Select all identifiers before a date
 * defaults to 14 days for lastAccessTime
 * defaults to 7 days for lastUpdateTime
 */ async function queryAvatarOutdatedDB(attribute, t, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 14 : 7))) {
    t = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await db1(), 'readonly')('metadata');
    const outdated = [];
    for await (const { value  } of t.objectStore('metadata')){
        if (deadline > value[attribute]) {
            const id = _type__WEBPACK_IMPORTED_MODULE_1__/* .Identifier.fromString */ .xb.fromString(value.identifier);
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
 */ async function isAvatarOutdatedDB(identifier, attribute, deadline = new Date(Date.now() - 1000 * 60 * 60 * 24 * (attribute === 'lastAccessTime' ? 30 : 7))) {
    const t = (await db1()).transaction('metadata');
    const meta = await t.objectStore('metadata').get(identifier.toText());
    if (!meta) return true;
    if (deadline > meta[attribute]) return true;
    return false;
}
/**
 * Batch delete avatars
 */ async function deleteAvatarsDB(ids, t) {
    t = (0,_helpers_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await db1(), 'readwrite')('avatars', 'metadata');
    for (const id of ids){
        t.objectStore('avatars').delete(id.toText());
        t.objectStore('metadata').delete(id.toText());
    }
    return;
}


/***/ }),

/***/ 9142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ queryAvatarDataURL),
/* harmony export */   "Z": () => (/* binding */ storeAvatar)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29573);
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4238);
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59935);
/* harmony import */ var _utils_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74712);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96578);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11494);






/**
 * Get a (cached) blob url for an identifier.
 * ? Because of cross-origin restrictions, we cannot use blob url here. sad :(
 */ const queryAvatarDataURL = (0,_utils_memoize__WEBPACK_IMPORTED_MODULE_2__/* .memoizePromise */ .J)(async function(identifier) {
    const buffer = await (0,_avatar__WEBPACK_IMPORTED_MODULE_1__/* .queryAvatarDB */ .dg)(identifier);
    if (!buffer) throw new Error('Avatar not found');
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .blobToDataURL */ .n5)(new Blob([
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
 */ async function storeAvatar(identifier, avatar, force) {
    if (identifier instanceof _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO && identifier.isUnknown) return;
    try {
        if (typeof avatar === 'string') {
            if (avatar.startsWith('http') === false) return;
            if (force || await (0,_avatar__WEBPACK_IMPORTED_MODULE_1__/* .isAvatarOutdatedDB */ .PU)(identifier, 'lastUpdateTime')) {
                await (0,_avatar__WEBPACK_IMPORTED_MODULE_1__/* .storeAvatarDB */ .CW)(identifier, await (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_5__/* .blobToArrayBuffer */ .vZ)(await (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__/* .downloadUrl */ .GR)(avatar)));
            }
        // else do nothing
        } else {
            await (0,_avatar__WEBPACK_IMPORTED_MODULE_1__/* .storeAvatarDB */ .CW)(identifier, avatar);
        }
    } catch (error) {
        console.error('Store avatar failed', error);
    } finally{
        queryAvatarDataURL.cache.delete(identifier.toText());
        if (identifier instanceof _type__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO) {
            _utils_messages__WEBPACK_IMPORTED_MODULE_3__/* .MaskMessage.events.profilesChanged.sendToAll */ .y.events.profilesChanged.sendToAll([
                {
                    of: identifier,
                    reason: 'update'
                }
            ]);
        }
    }
}


/***/ }),

/***/ 61136:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SW": () => (/* binding */ derive_AES_GCM_256_Key_From_PBKDF2),
/* harmony export */   "Kn": () => (/* binding */ derive_AES_GCM_256_Key_From_ECDH_256k1_Keys),
/* harmony export */   "Sl": () => (/* binding */ split_ec_k256_keypair_into_pub_priv)
/* harmony export */ });
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36512);

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

/***/ 36512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ methods)
});

// EXTERNAL MODULE: ./src/utils/type-transform/CryptoKey-JsonWebKey.ts
var CryptoKey_JsonWebKey = __webpack_require__(24784);
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
        // In the test environment, there is no CryptoKey object.
        if (true) {
            if (!(pbkdf instanceof CryptoKey)) throw new TypeError('Expect PBKDF2UnknownKey to be a CryptoKey at runtime');
        }
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
var mnemonic_code = __webpack_require__(53505);
;// CONCATENATED MODULE: ./src/modules/CryptoAlgorithm/EllipticBackend/methods.ts



if (true) {
    __webpack_require__.e(/* import() */ 5732).then(__webpack_require__.bind(__webpack_require__, 50394));
}
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

/***/ 53505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xX": () => (/* binding */ generate_ECDH_256k1_KeyPair_ByMnemonicWord),
/* harmony export */   "lD": () => (/* binding */ generate_ECDH_256k1_KeyPair_ByMnemonicWord_V2),
/* harmony export */   "Hb": () => (/* binding */ recover_ECDH_256k1_KeyPair_ByMnemonicWord),
/* harmony export */   "_I": () => (/* binding */ validateMnemonic)
/* harmony export */ });
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68440);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99674);
/* harmony import */ var wallet_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wallet_ts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _type_transform_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58222);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34987);
/* harmony import */ var pvtsutils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pvtsutils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28504);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(61136);






// Private key at m/44'/coinType'/account'/change/addressIndex
// coinType = ether
const path = "m/44'/60'/0'/0/0";
async function generate_ECDH_256k1_KeyPair_ByMnemonicWord(password) {
    const mnemonicWord = bip39__WEBPACK_IMPORTED_MODULE_0__/* .generateMnemonic */ .OF();
    const seed = await bip39__WEBPACK_IMPORTED_MODULE_0__/* .mnemonicToSeed */ .OI(mnemonicWord, password);
    const masterKey = wallet_ts__WEBPACK_IMPORTED_MODULE_1__.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__/* .split_ec_k256_keypair_into_pub_priv */ .Sl)(HDKeyToJwk(derivedKey));
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
async function generate_ECDH_256k1_KeyPair_ByMnemonicWord_V2(mnemonicWord, password) {
    const verify = bip39__WEBPACK_IMPORTED_MODULE_0__/* .validateMnemonic */ ._I(mnemonicWord);
    if (!verify) {
        throw new Error('Verify error');
    }
    const seed = await bip39__WEBPACK_IMPORTED_MODULE_0__/* .mnemonicToSeed */ .OI(mnemonicWord, password);
    const masterKey = wallet_ts__WEBPACK_IMPORTED_MODULE_1__.HDKey.parseMasterSeed(seed);
    const derivedKey = masterKey.derive(path);
    const key = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__/* .split_ec_k256_keypair_into_pub_priv */ .Sl)(HDKeyToJwk(derivedKey));
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
    const key = await (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_5__/* .split_ec_k256_keypair_into_pub_priv */ .Sl)(HDKeyToJwk(derivedKey));
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
    const jwk = (0,_type_transform_SECP256k1_Compression__WEBPACK_IMPORTED_MODULE_2__/* .decompressSecp256k1Key */ .q)((0,_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_4__/* .encodeArrayBuffer */ .ll)(hdk.publicKey), 'public');
    jwk.d = hdk.privateKey ? pvtsutils__WEBPACK_IMPORTED_MODULE_3__.Convert.ToBase64Url(hdk.privateKey) : undefined;
    return jwk;
}


/***/ }),

/***/ 63329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ deriveLocalKeyFromECDHKey)
/* harmony export */ });
/* harmony import */ var _type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28504);
/* harmony import */ var _modules_workers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36512);
/* harmony import */ var _modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61136);



/**
 * Local key (AES key) is used to encrypt message to myself.
 * This key should never be published.
 */ async function deriveLocalKeyFromECDHKey(pub, mnemonicWord) {
    // ? Derive method: publicKey as "password" and password for the mnemonicWord as hash
    const pbkdf2 = await _modules_workers__WEBPACK_IMPORTED_MODULE_1__/* .CryptoWorker.import_pbkdf2 */ .i.import_pbkdf2((0,_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(pub.x + pub.y));
    return (0,_modules_CryptoAlgorithm_helper__WEBPACK_IMPORTED_MODULE_2__/* .derive_AES_GCM_256_Key_From_PBKDF2 */ .SW)(pbkdf2, (0,_type_transform_String_ArrayBuffer__WEBPACK_IMPORTED_MODULE_0__/* .encodeText */ .YT)(mnemonicWord));
}


/***/ }),

/***/ 22271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ restorePrototype),
/* harmony export */   "Y": () => (/* binding */ restorePrototypeArray)
/* harmony export */ });
function restorePrototype(obj, prototype) {
    if (!obj) return obj;
    Object.setPrototypeOf(obj, prototype);
    return obj;
}
function restorePrototypeArray(obj, prototype) {
    if (!obj) return obj;
    obj.forEach((x)=>Object.setPrototypeOf(x, prototype)
    );
    return obj;
}


/***/ })

}]);