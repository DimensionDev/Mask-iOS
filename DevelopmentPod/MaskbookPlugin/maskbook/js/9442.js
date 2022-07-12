"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9442],{

/***/ 79442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "attachProfileDB": () => (/* binding */ attachProfileDB),
  "consistentPersonaDBWriteAccess": () => (/* binding */ consistentPersonaDBWriteAccess),
  "createOrUpdatePersonaDB": () => (/* binding */ createOrUpdatePersonaDB),
  "createOrUpdateProfileDB": () => (/* binding */ createOrUpdateProfileDB),
  "createOrUpdateRelationDB": () => (/* binding */ createOrUpdateRelationDB),
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
  "queryRelations": () => (/* binding */ queryRelations),
  "queryRelationsPagedDB": () => (/* binding */ queryRelationsPagedDB),
  "safeDeletePersonaDB": () => (/* binding */ safeDeletePersonaDB),
  "updatePersonaDB": () => (/* binding */ updatePersonaDB),
  "updateProfileDB": () => (/* binding */ updateProfileDB),
  "updateRelationDB": () => (/* binding */ updateRelationDB)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/idb@7.0.1/node_modules/idb/with-async-ittr.js + 1 modules
var with_async_ittr = __webpack_require__(63338);
// EXTERNAL MODULE: ./utils-pure/crypto/index.ts
var utils_pure_crypto = __webpack_require__(38270);
// EXTERNAL MODULE: ./background/database/utils/openDB.ts + 1 modules
var openDB = __webpack_require__(55989);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+kit@0.0.0-20220617045824-8bc7a27/node_modules/@dimensiondev/kit/esm/index.js
var esm = __webpack_require__(46123);
// EXTERNAL MODULE: ../shared-base/src/index.ts + 2 modules
var src = __webpack_require__(44451);
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
        const personaID = src/* ECKeyIdentifier.from */.ob.from(persona.key);
        if (personaID.none) {
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
        const profileID = src/* ProfileIdentifier.from */.WO.from(profile.key);
        if (profileID.none) {
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
    const linkedProfiles = rec?.linkedProfiles;
    if (!linkedProfiles) return;
    for (const each of linkedProfiles){
        const profileID = src/* ProfileIdentifier.from */.WO.from(each[0]);
        if (profileID.none) {
            yield {
                type: 'invalid identifier in persona.linkedProfiles',
                invalidProfile: each[0],
                persona: personaID
            };
            continue;
        }
        const profile = await t.objectStore('profiles').get(profileID.val.toText());
        if (!profile?.linkedPersona) {
            yield {
                type: 'a persona linked to a profile meanwhile the profile is not linked to the persona',
                persona: personaID,
                designatedProfile: profileID.val,
                profileActuallyLinkedPersona: profile?.linkedPersona
            };
        }
    }
}
async function* checkProfileLink(profile, t) {
    const rec = await t.objectStore('profiles').get(profile.toText());
    const invalidLinkedPersona = rec?.linkedPersona;
    if (!invalidLinkedPersona) return;
    if (invalidLinkedPersona.type !== 'ec_key') {
        yield {
            type: 'invalid identifier in profile.linkedPersona',
            invalidLinkedPersona,
            profile
        };
        return;
    }
    const designatedPersona = new src/* ECKeyIdentifier */.ob(invalidLinkedPersona.curve, invalidLinkedPersona.compressedPoint || invalidLinkedPersona.encodedCompressedKey);
    const persona = await t.objectStore('personas').get(designatedPersona.toText());
    if (!persona?.linkedProfiles.has(profile.toText())) {
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
var shared = __webpack_require__(94670);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEmpty.js
var isEmpty = __webpack_require__(67127);
;// CONCATENATED MODULE: ./background/database/persona/web.ts







/**
 * Database structure:
 *
 * # ObjectStore `persona`:
 * @description Store Personas.
 * @type {PersonaRecordDB}
 * @keys inline, {@link PersonaRecordDB.identifier}
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
                        const jwk = knowledge?.data.get(rec.value.identifier);
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
            map.data.set(rec.identifier, await (0,utils_pure_crypto/* CryptoKeyToJsonWebKey */.i)(rec.localKey));
        }
        return map;
    }
    return undefined;
});
/** @internal */ async function createRelationsTransaction() {
    const database = await db();
    return (0,openDB/* createTransaction */._X)(database, 'readwrite')('relations');
}
/** @internal */ async function createPersonaDBReadonlyAccess(action) {
    const database = await db();
    const transaction = (0,openDB/* createTransaction */._X)(database, 'readonly')('personas', 'profiles', 'relations');
    await action(transaction);
}
/** @internal */ async function consistentPersonaDBWriteAccess(action, tryToAutoFix = true) {
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
            resumePersona(()=>[]
            );
            resumeRelation(()=>[]
            );
        }
    }
}
/** @internal */ async function createReadonlyPersonaTransaction() {
    return (0,openDB/* createTransaction */._X)(await db(), 'readonly');
}
// #region Plain methods
/** @internal */ async function createPersonaDB(record, t) {
    await t.objectStore('personas').add(personaRecordToDB(record));
    record.privateKey && shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
}
/** @internal */ async function queryPersonaByProfileDB(query, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas', 'profiles', 'relations');
    const x = await t.objectStore('profiles').get(query.toText());
    if (!x?.linkedPersona) return null;
    return queryPersonaDB(new src/* ECKeyIdentifier */.ob(x.linkedPersona.curve, x.linkedPersona.compressedPoint || x.linkedPersona.encodedCompressedKey), t);
}
/** @internal */ async function queryPersonaDB(query, t, isIncludeLogout) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas');
    const x = await t.objectStore('personas').get(query.toText());
    if (x && (isIncludeLogout || !x.hasLogout)) return personaRecordOutDB(x);
    return null;
}
async function queryPersonasDB(query, t, isIncludeLogout) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('personas');
    const records = [];
    for await (const each of t.objectStore('personas')){
        const out = personaRecordOutDB(each.value);
        if (query?.hasPrivateKey && !out.privateKey || query?.nameContains && out.nickname !== query.nameContains || query?.identifiers && !query.identifiers.some((x)=>x === out.identifier
        ) || query?.initialized && out.uninitialized) continue;
        if (isIncludeLogout || !out.hasLogout) records.push(out);
    }
    return records;
}
/** @internal */ async function queryPersonasWithPrivateKey(t) {
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
 * @internal
 */ async function updatePersonaDB(// Do a copy here. We need to delete keys from it.
{ ...nextRecord }, howToMerge, t) {
    const _old = await t.objectStore('personas').get(nextRecord.identifier.toText());
    if (!_old) throw new TypeError('Update an non-exist data');
    const old = personaRecordOutDB(_old);
    let nextLinkedProfiles = old.linkedProfiles;
    if (nextRecord.linkedProfiles) {
        if (howToMerge.linkedProfiles === 'merge') nextLinkedProfiles = new Map([
            ...nextLinkedProfiles,
            ...nextRecord.linkedProfiles
        ]);
        else nextLinkedProfiles = nextRecord.linkedProfiles;
    }
    if (howToMerge.explicitUndefinedField === 'ignore') {
        const keys = Object.keys(nextRecord);
        for (const key of keys){
            if (nextRecord[key] === undefined) {
                delete nextRecord[key];
            }
        }
    }
    const next = personaRecordToDB({
        ...old,
        ...nextRecord,
        linkedProfiles: nextLinkedProfiles,
        updatedAt: nextRecord.updatedAt ?? new Date()
    });
    await t.objectStore('personas').put(next);
    (next.privateKey || old.privateKey) && shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll(undefined);
}
/** @internal */ async function createOrUpdatePersonaDB(record, howToMerge, t) {
    const personaInDB = await t.objectStore('personas').get(record.identifier.toText());
    if (personaInDB) return updatePersonaDB(record, howToMerge, t);
    else return createPersonaDB({
        ...record,
        createdAt: record.createdAt ?? new Date(),
        updatedAt: record.updatedAt ?? new Date(),
        linkedProfiles: record.linkedProfiles ?? new Map()
    }, t);
}
/** @internal */ async function deletePersonaDB(id, confirm, t) {
    const r = await t.objectStore('personas').get(id.toText());
    if (!r) return;
    if (confirm !== 'delete even with private' && r.privateKey) throw new TypeError('Cannot delete a persona with a private key');
    await t.objectStore('personas').delete(id.toText());
    r.privateKey && shared/* MaskMessages.events.ownPersonaChanged.sendToAll */.ql.events.ownPersonaChanged.sendToAll();
}
/**
 * Delete a Persona
 * @returns a boolean. true: the record no longer exists; false: the record is kept.
 * @internal
 */ async function safeDeletePersonaDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const r = await queryPersonaDB(id, t);
    if (!r) return true;
    if (r.linkedProfiles.size !== 0) return false;
    if (r.privateKey) return false;
    await deletePersonaDB(id, "don't delete if have private key", t);
    return true;
}
/** @internal */ async function createProfileDB(record, t) {
    await t.objectStore('profiles').add(profileToDB(record));
}
/** @internal */ async function queryProfileDB(id, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readonly')('profiles');
    const result = await t.objectStore('profiles').get(id.toText());
    if (result) return profileOutDB(result);
    return null;
}
/** @internal */ async function queryProfilesDB(query, t) {
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
            if (query.identifiers.some((x)=>out.identifier === x
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
/** @internal */ async function updateProfileDB(updating, t) {
    const old = await t.objectStore('profiles').get(updating.identifier.toText());
    if (!old) throw new Error('Updating a non exists record');
    const oldLinkedPersona = old.linkedPersona ? new src/* ECKeyIdentifier */.ob(old.linkedPersona.curve, old.linkedPersona.compressedPoint || old.linkedPersona.encodedCompressedKey) : undefined;
    if (oldLinkedPersona && updating.linkedPersona && oldLinkedPersona !== updating.linkedPersona) {
        const oldIdentifier = src/* ProfileIdentifier.from */.WO.from(old.identifier).unwrap();
        const oldLinkedPersona = await queryPersonaByProfileDB(oldIdentifier, t);
        if (oldLinkedPersona) {
            oldLinkedPersona.linkedProfiles.delete(oldIdentifier);
            await updatePersonaDB(oldLinkedPersona, {
                linkedProfiles: 'replace',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    }
    if (updating.linkedPersona && oldLinkedPersona !== updating.linkedPersona) {
        const linkedPersona = await queryPersonaDB(updating.linkedPersona, t);
        if (linkedPersona) {
            linkedPersona.linkedProfiles.set(updating.identifier, {
                connectionConfirmState: 'confirmed'
            });
            await updatePersonaDB(linkedPersona, {
                linkedProfiles: 'replace',
                explicitUndefinedField: 'ignore'
            }, t);
        }
    }
    const nextRecord = profileToDB({
        ...profileOutDB(old),
        ...updating
    });
    await t.objectStore('profiles').put(nextRecord);
}
/** @internal */ async function createOrUpdateProfileDB(rec, t) {
    if (await queryProfileDB(rec.identifier, t)) return updateProfileDB(rec, t);
    else return createProfileDB(rec, t);
}
/** @internal */ async function detachProfileDB(identifier, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const profile = await queryProfileDB(identifier, t);
    if (!profile?.linkedPersona) return;
    const linkedPersona = profile.linkedPersona;
    const persona = await queryPersonaDB(linkedPersona, t);
    persona?.linkedProfiles.delete(identifier);
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
/** @internal */ async function attachProfileDB(identifier, attachTo, data, t) {
    t = t || (0,openDB/* createTransaction */._X)(await db(), 'readwrite')('personas', 'profiles', 'relations');
    const profile = await queryProfileDB(identifier, t) || await createProfileDB({
        identifier,
        createdAt: new Date(),
        updatedAt: new Date()
    }, t) || await queryProfileDB(identifier, t);
    const persona = await queryPersonaDB(attachTo, t);
    if (!persona || !profile) return;
    if (profile.linkedPersona !== undefined && profile.linkedPersona !== attachTo) {
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
/** @internal */ async function deleteProfileDB(id, t) {
    await t.objectStore('profiles').delete(id.toText());
}
/** @internal */ async function createRelationDB(record, t, silent = false) {
    await t.objectStore('relations').add(relationRecordToDB(record));
    if (!silent) shared/* MaskMessages.events.relationsChanged.sendToAll */.ql.events.relationsChanged.sendToAll([
        {
            of: record.profile,
            reason: 'update',
            favor: record.favor
        }
    ]);
}
/** @internal */ async function queryRelations(personaIdentifier, profileIdentifier, t) {
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
/** @internal */ async function queryRelationsPagedDB(linked, options, count) {
    const t = (0,openDB/* createTransaction */._X)(await db(), 'readonly')('relations');
    let firstRecord = true;
    const data = [];
    for await (const cursor of t.objectStore('relations').index('favor, profile, linked').iterate()){
        if (cursor.value.linked !== linked.toText()) continue;
        if (cursor.value.network !== options.network) continue;
        if (firstRecord && options.after && options.after.profile.toText() !== cursor?.value.profile) {
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
        if (options.after?.linked.toText() === cursor?.value.linked && options.after?.profile.toText() === cursor?.value.profile) continue;
        if (count <= 0) break;
        const outData = relationRecordOutDB(cursor.value);
        count -= 1;
        data.push(outData);
    }
    return data;
}
/** @internal */ async function updateRelationDB(updating, t, silent = false) {
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
/** @internal */ async function createOrUpdateRelationDB(record, t, silent = false) {
    const old = await t.objectStore('relations').get(IDBKeyRange.only([
        record.linked.toText(),
        record.profile.toText()
    ]));
    if (old) {
        await updateRelationDB(record, t, silent);
    } else {
        await createRelationDB(record, t, silent);
    }
}
// #endregion
// #region out db & to db
function profileToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        network: x.identifier.network,
        linkedPersona: x.linkedPersona ? {
            curve: x.linkedPersona.curve,
            type: 'ec_key',
            compressedPoint: x.linkedPersona.rawPublicKey
        } : undefined
    };
}
function profileOutDB({ network , ...x }) {
    if (x.linkedPersona) {
        if (x.linkedPersona.type !== 'ec_key') throw new Error('Unknown type of linkedPersona');
    }
    return {
        ...x,
        identifier: src/* ProfileIdentifier.from */.WO.from(x.identifier).unwrap(),
        linkedPersona: x.linkedPersona ? new src/* ECKeyIdentifier */.ob(x.linkedPersona.curve, x.linkedPersona.compressedPoint || x.linkedPersona.encodedCompressedKey) : undefined
    };
}
function personaRecordToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        hasPrivateKey: x.privateKey ? 'yes' : 'no',
        linkedProfiles: (0,src/* convertIdentifierMapToRawMap */.Ap)(x.linkedProfiles)
    };
}
function personaRecordOutDB(x) {
    Reflect.deleteProperty(x, 'hasPrivateKey');
    const identifier = src/* ECKeyIdentifier.from */.ob.from(x.identifier).unwrap();
    const obj = {
        ...x,
        identifier,
        publicHexKey: identifier.publicKeyAsHex,
        linkedProfiles: (0,src/* convertRawMapToIdentifierMap */.J5)(x.linkedProfiles, src/* ProfileIdentifier */.WO)
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
        profile: src/* ProfileIdentifier.from */.WO.from(x.profile).unwrap(),
        linked: src/* ECKeyIdentifier.from */.ob.from(x.linked).unwrap()
    };
} // #endregion


/***/ }),

/***/ 38270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ CryptoKeyToJsonWebKey)
/* harmony export */ });
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}


/***/ })

}]);