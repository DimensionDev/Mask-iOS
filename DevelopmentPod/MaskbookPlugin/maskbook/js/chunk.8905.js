"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8905],{

/***/ 98905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDBAccess": () => (/* binding */ PostDBAccess),
/* harmony export */   "createPostDB": () => (/* binding */ createPostDB),
/* harmony export */   "queryPostDB": () => (/* binding */ queryPostDB),
/* harmony export */   "queryPostPagedDB": () => (/* binding */ queryPostPagedDB),
/* harmony export */   "queryPostsDB": () => (/* binding */ queryPostsDB),
/* harmony export */   "updatePostDB": () => (/* binding */ updatePostDB)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78144);
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63338);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86880);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96182);




const db = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createDBAccessWithAsyncUpgrade */ .Ns)(4, 7, (currentTryOpen, knowledge)=>(0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_1__/* .openDB */ .X3)('maskbook-post-v2', currentTryOpen, {
        async upgrade (db1, oldVersion, _newVersion, transaction) {
            /**
                 * A type assert that make sure a and b are the same type
                 * @param a The latest version PostRecord
                 */ function _assert(a, b) {
                a = b;
                b = a;
            }
            // Prevent unused code removal
            // eslint-disable-next-line no-constant-condition
            if (false) {}
            if (oldVersion < 1) {
                // inline keys
                return void db1.createObjectStore('post', {
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
                    const id = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(each.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIdentifier */ ._P);
                    if (id.ok) {
                        const { postId , identifier  } = id.val;
                        each.identifier = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb(identifier.network, postId).toText();
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
                    oldType && (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .restorePrototypeArray */ .Yo)(oldType, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.prototype */ .WO.prototype);
                    const newType = {};
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
                        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.unknown */ .WO.unknown,
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
                    const data = knowledge?.data;
                    if (!v4Record.postCryptoKey) continue;
                    const v5Record = {
                        ...v4Record,
                        postCryptoKey: data.get(v4Record.identifier)
                    };
                    if (!v5Record.postCryptoKey) delete v5Record.postCryptoKey;
                    await cursor.update(v5Record);
                }
            }
            // version 6 ships a wrong db migration.
            // therefore need to upgrade again to fix it.
            if (oldVersion <= 6) {
                const store = transaction.objectStore('post');
                for await (const cursor of store){
                    const v5Record = cursor.value;
                    const by = v5Record.encryptBy;
                    // This is the correct data type
                    if (typeof by === 'string') continue;
                    if (!by) continue;
                    cursor.value.encryptBy = (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .restorePrototype */ .mS)(by, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier.prototype */ .ob.prototype).toText();
                    cursor.update(cursor.value);
                }
                store.createIndex('persona, date', [
                    'encryptBy',
                    'foundAt'
                ], {
                    unique: false
                });
            }
        }
    })
, async (db2)=>{
    if (db2.version === 4) {
        const map = new Map();
        const knowledge = {
            version: 4,
            data: map
        };
        const records = await (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(db2, 'readonly')('post').objectStore('post').getAll();
        for (const r of records){
            const x = r.postCryptoKey;
            if (!x) continue;
            try {
                const key = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .CryptoKeyToJsonWebKey */ .iV)(x);
                map.set(r.identifier, key);
            } catch  {
                continue;
            }
        }
        return knowledge;
    }
    return undefined;
});
const PostDBAccess = db;
async function createPostDB(record, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await db(), 'readwrite')('post');
    const toSave = postToDB(record);
    await t.objectStore('post').add(toSave);
}
async function updatePostDB(updateRecord, mode, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await db(), 'readwrite')('post');
    const emptyRecord = {
        identifier: updateRecord.identifier,
        recipients: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map()),
        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.unknown */ .WO.unknown,
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
async function queryPostDB(record, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const result = await t.objectStore('post').get(record.toText());
    if (result) return postOutDB(result);
    return null;
}
async function queryPostsDB(query, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const selected = [];
    for await (const { value  } of t.objectStore('post')){
        const idResult = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(value.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb);
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
/**
 * Query posts by paged
 */ async function queryPostPagedDB(linked, options, count) {
    const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_3__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const data = [];
    let firstRecord = true;
    for await (const cursor of t.objectStore('post').iterate()){
        if (cursor.value.encryptBy !== linked.toText()) continue;
        if (!options.userIds.includes(cursor.value.postBy.userId)) continue;
        const postIdentifier = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(cursor.value.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb).unwrap();
        if (postIdentifier.network !== options.network) continue;
        if (firstRecord && options.after) {
            cursor.continue(options.after.toText());
            firstRecord = false;
            continue;
        }
        if (postIdentifier === options.after) continue;
        if (count <= 0) break;
        const outData = postOutDB(cursor.value);
        count -= 1;
        data.push(outData);
    }
    return data;
}
// #region db in and out
function postOutDB(db3) {
    const { identifier , foundAt , postBy , recipients , postCryptoKey , encryptBy , interestedMeta , summary , url  } = db3;
    if (typeof recipients === 'object') {
        for (const detail of recipients.values()){
            detail.reason.forEach((x)=>x.type === 'group' && (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .restorePrototype */ .mS)(x.group, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .GroupIdentifier.prototype */ .xI.prototype)
            );
        }
    }
    return {
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb).unwrap(),
        postBy: (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .restorePrototype */ .mS)(postBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.prototype */ .WO.prototype),
        recipients: recipients === true ? 'everyone' : new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(recipients, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        foundAt: foundAt,
        postCryptoKey: postCryptoKey,
        encryptBy: encryptBy ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .Identifier.fromString */ .xb.fromString(encryptBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrapOr(undefined) : undefined,
        interestedMeta,
        summary,
        url
    };
}
function postToDB(out) {
    return {
        ...out,
        identifier: out.identifier.toText(),
        recipients: out.recipients === 'everyone' ? true : out.recipients.__raw_map__,
        encryptBy: out.encryptBy?.toText()
    };
} // #endregion


/***/ })

}]);