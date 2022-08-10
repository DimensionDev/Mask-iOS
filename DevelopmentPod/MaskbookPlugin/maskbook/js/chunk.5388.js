"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5388],{

/***/ 35388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "attachProfileDB": () => (/* binding */ attachProfileDB),
/* harmony export */   "consistentPersonaDBWriteAccess": () => (/* binding */ consistentPersonaDBWriteAccess),
/* harmony export */   "createOrUpdatePersonaDB": () => (/* binding */ createOrUpdatePersonaDB),
/* harmony export */   "createOrUpdateProfileDB": () => (/* binding */ createOrUpdateProfileDB),
/* harmony export */   "createOrUpdateRelationDB": () => (/* binding */ createOrUpdateRelationDB),
/* harmony export */   "createPersonaDB": () => (/* binding */ createPersonaDB),
/* harmony export */   "createPersonaDBReadonlyAccess": () => (/* binding */ createPersonaDBReadonlyAccess),
/* harmony export */   "createProfileDB": () => (/* binding */ createProfileDB),
/* harmony export */   "createRelationDB": () => (/* binding */ createRelationDB),
/* harmony export */   "createRelationsTransaction": () => (/* binding */ createRelationsTransaction),
/* harmony export */   "deletePersonaDB": () => (/* binding */ deletePersonaDB),
/* harmony export */   "deleteProfileDB": () => (/* binding */ deleteProfileDB),
/* harmony export */   "detachProfileDB": () => (/* binding */ detachProfileDB),
/* harmony export */   "queryPersonaByProfileDB": () => (/* binding */ queryPersonaByProfileDB),
/* harmony export */   "queryPersonaDB": () => (/* binding */ queryPersonaDB),
/* harmony export */   "queryPersonasDB": () => (/* binding */ queryPersonasDB),
/* harmony export */   "queryPersonasWithPrivateKey": () => (/* binding */ queryPersonasWithPrivateKey),
/* harmony export */   "queryProfileDB": () => (/* binding */ queryProfileDB),
/* harmony export */   "queryProfilesDB": () => (/* binding */ queryProfilesDB),
/* harmony export */   "queryRelations": () => (/* binding */ queryRelations),
/* harmony export */   "queryRelationsPagedDB": () => (/* binding */ queryRelationsPagedDB),
/* harmony export */   "safeDeletePersonaDB": () => (/* binding */ safeDeletePersonaDB),
/* harmony export */   "updatePersonaDB": () => (/* binding */ updatePersonaDB),
/* harmony export */   "updateProfileDB": () => (/* binding */ updateProfileDB),
/* harmony export */   "updateRelationDB": () => (/* binding */ updateRelationDB)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76536);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94670);



async function createPersonaDBReadonlyAccess(action) {
    await action();
}
async function consistentPersonaDBWriteAccess(action) {
    await action();
}
async function createRelationsTransaction() {
    return;
}
async function createPersonaDB(record) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.create_persona({
        persona: personaRecordToDB(record)
    });
}
async function queryPersonaByProfileDB(query, t) {
    const x = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_persona_by_profile({
        options: {
            profileIdentifier: query.toText()
        }
    });
    if (!x) return null;
    return personaRecordOutDB(x);
}
async function queryPersonaDB(query, t, isIncludeLogout) {
    const x = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_persona({
        identifier: query.toText(),
        includeLogout: isIncludeLogout
    });
    if (!x) return null;
    return personaRecordOutDB(x);
}
async function queryPersonasDB(query, t, isIncludeLogout) {
    const results = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_personas({
        ...query,
        includeLogout: isIncludeLogout
    });
    if (!results) return [];
    return results.map((x)=>personaRecordOutDB(x)
    );
}
async function queryPersonasWithPrivateKey() {
    const results = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_personas({
        hasPrivateKey: true
    });
    if (!results) return [];
    return results.map((x)=>personaRecordOutDB(x)
    );
}
/**
 * Update an existing Persona record.
 * @param nextRecord The partial record to be merged
 * @param howToMerge How to merge linkedProfiles and `field: undefined`
 * @param t transaction
 */ async function updatePersonaDB({ ...nextRecord }, howToMerge, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.update_persona({
        persona: partialPersonaRecordToDB(nextRecord),
        options: {
            linkedProfileMergePolicy: howToMerge.linkedProfiles === 'replace' ? 0 : 1,
            deleteUndefinedFields: howToMerge.explicitUndefinedField !== 'ignore'
        }
    });
}
async function createOrUpdatePersonaDB(record, howToMerge, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.update_persona({
        persona: partialPersonaRecordToDB(record),
        options: {
            linkedProfileMergePolicy: howToMerge.linkedProfiles === 'replace' ? 0 : 1,
            deleteUndefinedFields: howToMerge.explicitUndefinedField !== 'ignore',
            createWhenNotExist: true
        }
    });
}
/**
 * Delete a Persona
 */ async function deletePersonaDB(id, confirm, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.delete_persona({
        identifier: id.toText(),
        options: {
            safeDelete: confirm === 'delete even with private'
        }
    });
}
/**
 * Delete a Persona
 * @returns a boolean. true: the record no longer exists; false: the record is kept.
 */ async function safeDeletePersonaDB(id, t) {
    return deletePersonaDB(id, "don't delete if have private key");
}
/**
 * Create a new profile.
 */ async function createProfileDB(record, t) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.create_profile({
        profile: profileRecordToDB(record)
    });
}
/**
 * Query a profile.
 */ async function queryProfileDB(id, t) {
    const x = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_profile({
        options: {
            identifier: id.toText()
        }
    });
    if (x) return profileRecordOutDB(x);
    return null;
}
/**
 * Query many profiles.
 */ async function queryProfilesDB(query, t) {
    const profiles = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_profiles({
        identifiers: query.identifiers?.map((x)=>x.toText()
        ),
        network: query.network,
        hasLinkedPersona: query.hasLinkedPersona
    });
    if (!profiles) return [];
    return profiles.map((x)=>profileRecordOutDB(x)
    );
}
/**
 * Update a profile.
 */ async function updateProfileDB(updating, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.update_profile({
        profile: partialProfileRecordToDB(updating)
    });
}
async function createOrUpdateProfileDB(rec, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.update_profile({
        profile: partialProfileRecordToDB(rec),
        options: {
            createWhenNotExist: true
        }
    });
}
/**
 * Detach a profile from it's linking persona.
 * @param identifier The profile want to detach
 * @param t A living transaction
 */ async function detachProfileDB(identifier, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.detach_profile({
        identifier: identifier.toText()
    });
}
/**
 * attach a profile.
 */ async function attachProfileDB(identifier, attachTo, data) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.attach_profile({
        profileIdentifier: identifier.toText(),
        personaIdentifier: attachTo.toText(),
        state: data
    });
    const persona = await queryPersonaDB(attachTo);
    if (persona?.privateKey) _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.ownPersonaChanged.sendToAll */ .ql.events.ownPersonaChanged.sendToAll(undefined);
}
/**
 * Delete a profile
 */ async function deleteProfileDB(id, t) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.delete_profile({
        identifier: id.toText()
    });
}
/**
 * Create a new Relation
 */ async function createRelationDB(record, t, silent = false) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.create_relation({
        relation: relationRecordToDB(record)
    });
    if (!silent) _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.relationsChanged.sendToAll */ .ql.events.relationsChanged.sendToAll([
        {
            of: record.profile,
            reason: 'update',
            favor: record.favor
        }
    ]);
}
async function queryRelations(personaIdentifier, profileIdentifier, t) {
    const results = [];
    if (personaIdentifier && profileIdentifier) {
        const relations = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_relation({
            personaIdentifier: personaIdentifier.toText(),
            profileIdentifier: profileIdentifier.toText()
        });
        if (relations) {
            results.push(...relations);
        }
    } else {
        const relations = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_relation({});
        if (relations) {
            results.push(...relations);
        }
    }
    if (!results?.length) return [];
    return results.map((x)=>relationRecordOutDB(x)
    );
}
async function queryRelationsPagedDB(linked, options, count) {
    const results = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_relations({
        options: {
            network: options.network,
            pageOption: options.pageOffset ? {
                pageSize: count,
                pageOffset: options.pageOffset
            } : undefined
        }
    });
    if (!results?.length) return [];
    return results.map((x)=>relationRecordOutDB(x)
    );
}
/**
 * Update a relation
 * @param updating
 * @param t
 * @param silent
 */ async function updateRelationDB(updating, t, silent = false) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.update_relation({
        relation: relationRecordToDB(updating)
    });
    if (!silent) {
        _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.relationsChanged.sendToAll */ .ql.events.relationsChanged.sendToAll([
            {
                of: updating.profile,
                favor: updating.favor,
                reason: 'update'
            }, 
        ]);
    }
}
// TODO: should have a batch API for this.
async function createOrUpdateRelationDB(record, t, silent = false) {
    const old = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_relations({
        options: {
            personaIdentifier: record.linked.toText()
        }
    });
    if (old?.length) {
        await updateRelationDB(record, t, silent);
    } else {
        await createRelationDB(record, t, silent);
    }
}
// #region out db & to db
function personaRecordToDB(x) {
    return {
        ...x,
        publicKey: x.publicKey,
        privateKey: x.privateKey,
        localKey: x.localKey,
        identifier: x.identifier.toText(),
        linkedProfiles: Object.fromEntries((0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .convertIdentifierMapToRawMap */ .Ap)(x.linkedProfiles)),
        createdAt: x.createdAt.getTime(),
        updatedAt: x.createdAt.getTime()
    };
}
function partialPersonaRecordToDB(x) {
    return {
        ...x,
        publicKey: x.publicKey,
        privateKey: x.privateKey,
        localKey: x.localKey,
        identifier: x.identifier.toText(),
        linkedProfiles: x.linkedProfiles ? Object.fromEntries(x.linkedProfiles) : {},
        createdAt: x.createdAt?.getTime(),
        updatedAt: x.createdAt?.getTime()
    };
}
function personaRecordOutDB(x) {
    const identifier = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier.from */ .ob.from(x.identifier).unwrap();
    return {
        ...x,
        publicKey: x.publicKey,
        publicHexKey: identifier.publicKeyAsHex,
        privateKey: x.privateKey,
        localKey: x.localKey,
        identifier,
        linkedProfiles: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .convertRawMapToIdentifierMap */ .J5)(Object.entries(x.linkedProfiles), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        createdAt: new Date(x.createdAt),
        updatedAt: new Date(x.updatedAt)
    };
}
function profileRecordToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        localKey: x.localKey,
        linkedPersona: x.linkedPersona?.toText(),
        createdAt: x.createdAt.getTime(),
        updatedAt: x.updatedAt.getTime()
    };
}
function profileRecordOutDB(x) {
    return {
        nickname: x.nickname,
        localKey: x.localKey,
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.from */ .WO.from(x.identifier).unwrap(),
        linkedPersona: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier.from */ .ob.from(x.linkedPersona).unwrapOr(undefined),
        createdAt: new Date(x.createdAt),
        updatedAt: new Date(x.updatedAt)
    };
}
function partialProfileRecordToDB(x) {
    return {
        ...x,
        identifier: x.identifier.toText(),
        localKey: x.localKey,
        linkedPersona: x.linkedPersona?.toText(),
        createdAt: x.createdAt?.getTime(),
        updatedAt: x.updatedAt?.getTime()
    };
}
function relationRecordToDB(x) {
    return {
        ...x,
        profile: x.profile.toText(),
        linked: x.linked.toText()
    };
}
function relationRecordOutDB(x) {
    return {
        ...x,
        profile: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.from */ .WO.from(x.profile).unwrap(),
        linked: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier.from */ .ob.from(x.linked).unwrap()
    };
} // #endregion


/***/ })

}]);