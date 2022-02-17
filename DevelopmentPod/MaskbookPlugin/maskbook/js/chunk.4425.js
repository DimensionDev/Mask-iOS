"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4425],{

/***/ 64425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "consistentPersonaDBWriteAccess": () => (/* binding */ consistentPersonaDBWriteAccess),
/* harmony export */   "createRelationsTransaction": () => (/* binding */ createRelationsTransaction),
/* harmony export */   "createPersonaDB": () => (/* binding */ createPersonaDB),
/* harmony export */   "queryPersonaByProfileDB": () => (/* binding */ queryPersonaByProfileDB),
/* harmony export */   "queryPersonaDB": () => (/* binding */ queryPersonaDB),
/* harmony export */   "queryPersonasDB": () => (/* binding */ queryPersonasDB),
/* harmony export */   "queryPersonasWithPrivateKey": () => (/* binding */ queryPersonasWithPrivateKey),
/* harmony export */   "updatePersonaDB": () => (/* binding */ updatePersonaDB),
/* harmony export */   "createOrUpdatePersonaDB": () => (/* binding */ createOrUpdatePersonaDB),
/* harmony export */   "deletePersonaDB": () => (/* binding */ deletePersonaDB),
/* harmony export */   "safeDeletePersonaDB": () => (/* binding */ safeDeletePersonaDB),
/* harmony export */   "createProfileDB": () => (/* binding */ createProfileDB),
/* harmony export */   "queryProfileDB": () => (/* binding */ queryProfileDB),
/* harmony export */   "queryProfilesDB": () => (/* binding */ queryProfilesDB),
/* harmony export */   "queryProfilesPagedDB": () => (/* binding */ queryProfilesPagedDB),
/* harmony export */   "updateProfileDB": () => (/* binding */ updateProfileDB),
/* harmony export */   "createOrUpdateProfileDB": () => (/* binding */ createOrUpdateProfileDB),
/* harmony export */   "detachProfileDB": () => (/* binding */ detachProfileDB),
/* harmony export */   "attachProfileDB": () => (/* binding */ attachProfileDB),
/* harmony export */   "deleteProfileDB": () => (/* binding */ deleteProfileDB),
/* harmony export */   "createRelationDB": () => (/* binding */ createRelationDB),
/* harmony export */   "queryRelations": () => (/* binding */ queryRelations),
/* harmony export */   "queryRelationsPagedDB": () => (/* binding */ queryRelationsPagedDB),
/* harmony export */   "updateRelationDB": () => (/* binding */ updateRelationDB)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87470);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89650);



async function consistentPersonaDBWriteAccess(action) {
    await action();
}
async function createRelationsTransaction() {
    return Promise.resolve();
}
async function createPersonaDB(record) {
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.create_persona */ .Nz.api.create_persona({
        persona: personaRecordToDB(record)
    }));
}
async function queryPersonaByProfileDB(query, t) {
    const x = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_persona_by_profile */ .Nz.api.query_persona_by_profile({
        options: {
            profileIdentifier: query.toText()
        }
    }));
    if (!x) return null;
    return personaRecordOutDB(x);
}
async function queryPersonaDB(query, t, isIncludeLogout) {
    const x = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_persona */ .Nz.api.query_persona({
        identifier: query.toText(),
        includeLogout: isIncludeLogout
    }));
    if (!x) return null;
    return personaRecordOutDB(x);
}
async function queryPersonasDB(query, t, isIncludeLogout) {
    const results = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_personas */ .Nz.api.query_personas({
        ...query,
        includeLogout: isIncludeLogout
    }));
    if (!results) return [];
    return results.map((x)=>personaRecordOutDB(x)
    );
}
async function queryPersonasWithPrivateKey() {
    const results = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_personas */ .Nz.api.query_personas({
        hasPrivateKey: true
    }));
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
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.update_persona */ .Nz.api.update_persona({
        persona: partialPersonaRecordToDB(nextRecord),
        options: {
            linkedProfileMergePolicy: howToMerge.linkedProfiles === 'replace' ? 0 : 1,
            deleteUndefinedFields: howToMerge.explicitUndefinedField !== 'ignore'
        }
    });
}
async function createOrUpdatePersonaDB(record, howToMerge, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.update_persona */ .Nz.api.update_persona({
        persona: partialPersonaRecordToDB(record),
        options: {
            linkedProfileMergePolicy: howToMerge.linkedProfiles === 'replace' ? 0 : 1,
            deleteUndefinedFields: howToMerge.explicitUndefinedField !== 'ignore',
            protectPrivateKey: howToMerge.protectPrivateKey,
            createWhenNotExist: true
        }
    });
}
/**
 * Delete a Persona
 */ async function deletePersonaDB(id, confirm, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.delete_persona */ .Nz.api.delete_persona({
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
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.create_profile */ .Nz.api.create_profile({
        profile: profileRecordToDB(record)
    }));
    _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.profilesChanged.sendToAll */ .ql.events.profilesChanged.sendToAll([
        {
            of: record.identifier,
            reason: 'update'
        }
    ]);
}
/**
 * Query a profile.
 */ async function queryProfileDB(id, t) {
    const x = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_profile */ .Nz.api.query_profile({
        options: {
            identifier: id.toText()
        }
    }));
    if (x) return profileRecordOutDB(x);
    return null;
}
/**
 * Query many profiles.
 */ async function queryProfilesDB(query, t) {
    var ref;
    const profiles = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_profiles */ .Nz.api.query_profiles({
        identifiers: (ref = query.identifiers) === null || ref === void 0 ? void 0 : ref.map((x)=>x.toText()
        ),
        network: query.network,
        hasLinkedPersona: query.hasLinkedPersona
    }));
    if (!profiles) return [];
    return profiles.map((x)=>profileRecordOutDB(x)
    );
}
/**
 * @deprecated
 * query profiles with paged
 * @param options
 * @param count
 */ async function queryProfilesPagedDB(options, count) {
    return [];
}
/**
 * Update a profile.
 */ async function updateProfileDB(updating, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.update_profile */ .Nz.api.update_profile({
        profile: partialProfileRecordToDB(updating)
    });
}
async function createOrUpdateProfileDB(rec, t) {
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.update_profile */ .Nz.api.update_profile({
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
    return _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.detach_profile */ .Nz.api.detach_profile({
        identifier: identifier.toText()
    });
}
/**
 * attach a profile.
 */ async function attachProfileDB(identifier, attachTo, data) {
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.attach_profile */ .Nz.api.attach_profile({
        profileIdentifier: identifier.toText(),
        personaIdentifier: attachTo.toText(),
        state: data
    }));
    const persona = await queryPersonaDB(attachTo);
    if (persona === null || persona === void 0 ? void 0 : persona.privateKey) _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.ownPersonaChanged.sendToAll */ .ql.events.ownPersonaChanged.sendToAll(undefined);
}
/**
 * Delete a profile
 */ async function deleteProfileDB(id, t) {
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.delete_profile */ .Nz.api.delete_profile({
        identifier: id.toText()
    }));
    _shared__WEBPACK_IMPORTED_MODULE_2__/* .MaskMessages.events.profilesChanged.sendToAll */ .ql.events.profilesChanged.sendToAll([
        {
            reason: 'delete',
            of: id
        }
    ]);
}
/**
 * Create a new Relation
 */ async function createRelationDB(record, t, silent = false) {
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.create_relation */ .Nz.api.create_relation({
        relation: relationRecordToDB(record)
    }));
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
        const relations = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_relation */ .Nz.api.query_relation({
            personaIdentifier: personaIdentifier.toText(),
            profileIdentifier: profileIdentifier.toText()
        }));
        if (relations) {
            results.push(...relations);
        }
    } else {
        const relations = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_relation */ .Nz.api.query_relation({}));
        if (relations) {
            results.push(...relations);
        }
    }
    if (!(results === null || results === void 0 ? void 0 : results.length)) return [];
    return results.map((x)=>relationRecordOutDB(x)
    );
}
async function queryRelationsPagedDB(linked, options, count) {
    const results = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_relations */ .Nz.api.query_relations({
        options: {
            network: options.network,
            pageOption: options.pageOffset ? {
                pageSize: count,
                pageOffset: options.pageOffset
            } : undefined
        }
    }));
    if (!(results === null || results === void 0 ? void 0 : results.length)) return [];
    return results.map((x)=>relationRecordOutDB(x)
    );
}
/**
 * Update a relation
 * @param updating
 * @param t
 * @param silent
 */ async function updateRelationDB(updating, t, silent = false) {
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.update_relation */ .Nz.api.update_relation({
        relation: relationRecordToDB(updating)
    }));
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
// #region out db & to db
function personaRecordToDB(x) {
    return {
        ...x,
        publicKey: x.publicKey,
        privateKey: x.privateKey,
        localKey: x.localKey,
        identifier: x.identifier.toText(),
        linkedProfiles: Object.fromEntries(x.linkedProfiles.__raw_map__),
        createdAt: x.createdAt.getTime(),
        updatedAt: x.createdAt.getTime()
    };
}
function partialPersonaRecordToDB(x) {
    var ref, ref1, ref2;
    return {
        ...x,
        publicKey: x.publicKey,
        privateKey: x.privateKey,
        localKey: x.localKey,
        identifier: x.identifier.toText(),
        linkedProfiles: ((ref = x.linkedProfiles) === null || ref === void 0 ? void 0 : ref.__raw_map__) ? Object.fromEntries(x.linkedProfiles.__raw_map__) : {},
        createdAt: (ref1 = x.createdAt) === null || ref1 === void 0 ? void 0 : ref1.getTime(),
        updatedAt: (ref2 = x.createdAt) === null || ref2 === void 0 ? void 0 : ref2.getTime()
    };
}
function personaRecordOutDB(x) {
    return {
        ...x,
        publicKey: x.publicKey,
        privateKey: x.privateKey,
        localKey: x.localKey,
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(x.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap(),
        linkedProfiles: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map(Object.entries(x.linkedProfiles)), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        createdAt: new Date(x.createdAt),
        updatedAt: new Date(x.updatedAt)
    };
}
function profileRecordToDB(x) {
    var ref;
    return {
        ...x,
        identifier: x.identifier.toText(),
        localKey: x.localKey,
        linkedPersona: (ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.toText(),
        createdAt: x.createdAt.getTime(),
        updatedAt: x.updatedAt.getTime()
    };
}
function profileRecordOutDB(x) {
    return {
        nickname: x.nickname,
        localKey: x.localKey,
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(x.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        linkedPersona: x.linkedPersona ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(x.linkedPersona, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap() : undefined,
        createdAt: new Date(x.createdAt),
        updatedAt: new Date(x.updatedAt)
    };
}
function partialProfileRecordToDB(x) {
    var ref, ref3, ref4;
    return {
        ...x,
        identifier: x.identifier.toText(),
        localKey: x.localKey,
        linkedPersona: (ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.toText(),
        createdAt: (ref3 = x.createdAt) === null || ref3 === void 0 ? void 0 : ref3.getTime(),
        updatedAt: (ref4 = x.updatedAt) === null || ref4 === void 0 ? void 0 : ref4.getTime()
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
        profile: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(x.profile, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        linked: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(x.linked, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap()
    };
} // #endregion


/***/ })

}]);