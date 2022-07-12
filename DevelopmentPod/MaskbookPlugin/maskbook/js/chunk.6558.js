"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6558,5989],{

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostDBAccess": () => (/* binding */ PostDBAccess),
/* harmony export */   "createPostDB": () => (/* binding */ createPostDB),
/* harmony export */   "queryPostDB": () => (/* binding */ queryPostDB),
/* harmony export */   "queryPostPagedDB": () => (/* binding */ queryPostPagedDB),
/* harmony export */   "queryPostsDB": () => (/* binding */ queryPostsDB),
/* harmony export */   "updatePostDB": () => (/* binding */ updatePostDB),
/* harmony export */   "withPostDBTransaction": () => (/* binding */ withPostDBTransaction)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63338);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38270);
/* harmony import */ var _utils_openDB__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55989);




const db = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createDBAccessWithAsyncUpgrade */ .Ns)(4, 7, (currentTryOpen, knowledge)=>(0,idb_with_async_ittr__WEBPACK_IMPORTED_MODULE_1__/* .openDB */ .X3)('maskbook-post-v2', currentTryOpen, {
        async upgrade (db1, oldVersion, _newVersion, transaction) {
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
                    const id = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIdentifier.from */ ._P.from(each.identifier);
                    if (id.some) {
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
                    const oldType = v2record.recipients?.map((x)=>_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.of */ .WO.of(x.network, x.userId).unwrapOr(null)
                    ).filter(Boolean);
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
                        postBy: undefined,
                        foundAt: new Date(0),
                        recipientGroups: []
                    };
                    await cursor.update(next);
                }
            }
            /**
                 * In the version 3 we use `recipients?: Record<string, RecipientDetail>`
                 * After upgrade to version 4, we use `recipients: Map<ProfileIdentifier, RecipientDetail>`
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
                    cursor.value.encryptBy = new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob(by.curve, by.compressedPoint || by.encodedCompressedKey).toText();
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
        const records = await (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(db2, 'readonly')('post').objectStore('post').getAll();
        for (const r of records){
            const x = r.postCryptoKey;
            if (!x) continue;
            try {
                const key = await (0,_utils_pure__WEBPACK_IMPORTED_MODULE_3__/* .CryptoKeyToJsonWebKey */ .i)(x);
                map.set(r.identifier, key);
            } catch  {
                continue;
            }
        }
        return knowledge;
    }
    return undefined;
});
/** @internal */ const PostDBAccess = db;
/** @internal */ async function withPostDBTransaction(task) {
    const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await PostDBAccess(), 'readwrite')('post');
    await task(t);
}
/** @internal */ async function createPostDB(record, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await db(), 'readwrite')('post');
    const toSave = postToDB(record);
    await t.objectStore('post').add(toSave);
}
/** @internal */ async function updatePostDB(updateRecord, mode, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await db(), 'readwrite')('post');
    const emptyRecord = {
        identifier: updateRecord.identifier,
        recipients: new Map(),
        postBy: undefined,
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
                for (const [id, date] of updateRecord.recipients){
                    nextRecipients.set(id.toText(), {
                        reason: [
                            {
                                at: date,
                                type: 'direct'
                            }
                        ]
                    });
                }
            } else {
                nextRecord.recipients = 'everyone';
            }
        }
    }
    const nextRecordInDBType = postToDB(nextRecord);
    await t.objectStore('post').put(nextRecordInDBType);
}
/** @internal */ async function queryPostDB(record, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const result = await t.objectStore('post').get(record.toText());
    if (result) return postOutDB(result);
    return null;
}
/** @internal */ async function queryPostsDB(query, t) {
    t ||= (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const selected = [];
    for await (const { value  } of t.objectStore('post')){
        const idResult = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier.from */ .bb.from(value.identifier);
        if (idResult.none) {
            console.warn('Invalid identifier', value.identifier);
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
 * @internal
 */ async function queryPostPagedDB(linked, options, count) {
    const t = (0,_utils_openDB__WEBPACK_IMPORTED_MODULE_2__/* .createTransaction */ ._X)(await db(), 'readonly')('post');
    const data = [];
    let firstRecord = true;
    for await (const cursor of t.objectStore('post').iterate()){
        if (cursor.value.encryptBy !== linked.toText()) continue;
        if (!cursor.value.postBy) continue;
        if (!options.userIds.includes(cursor.value.postBy.userId)) continue;
        const postIdentifier = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier.from */ .bb.from(cursor.value.identifier).unwrap();
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
function postOutDB(db3) {
    const { identifier , foundAt , postBy , postCryptoKey , encryptBy , interestedMeta , summary , url  } = db3;
    let recipients;
    if (db3.recipients === true) {
        recipients = 'everyone';
    } else {
        recipients = new Map();
        for (const [id, { reason  }] of db3.recipients){
            const identifier = _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.from */ .WO.from(id);
            if (identifier.none) continue;
            const detail = reason[0];
            if (!detail) continue;
            recipients.set(identifier.val, detail.at);
        }
    }
    return {
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier.from */ .bb.from(identifier).unwrap(),
        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.of */ .WO.of(postBy?.network, postBy?.userId).unwrapOr(undefined),
        recipients,
        foundAt,
        postCryptoKey,
        encryptBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier.from */ .ob.from(encryptBy).unwrapOr(undefined),
        interestedMeta,
        summary,
        url
    };
}
function postToDB(out) {
    let recipients;
    if (out.recipients === 'everyone') {
        recipients = true;
    } else {
        const map = new Map();
        for (const [id, detail] of out.recipients){
            map.set(id.toText(), {
                reason: [
                    {
                        at: detail,
                        type: 'direct'
                    }
                ]
            });
        }
        recipients = map;
    }
    return {
        ...out,
        identifier: out.identifier.toText(),
        encryptBy: out.encryptBy?.toText(),
        recipients
    };
}


/***/ }),

/***/ 55989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z_": () => (/* binding */ createDBAccess),
  "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
  "_X": () => (/* binding */ createTransaction)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@dimensiondev+holoflows-kit@0.9.0-20220520093249-0870919_5owzivba7saavwcb3imbrcsadu/node_modules/@dimensiondev/holoflows-kit/umd/index.cjs
var umd = __webpack_require__(88967);
// EXTERNAL MODULE: ./shared/index.ts
var shared = __webpack_require__(94670);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/safari-14-idb-fix@3.0.0/node_modules/safari-14-idb-fix/dist/index.js
/**
 * Work around Safari 14 IndexedDB open bug.
 *
 * Safari has a horrible bug where IDB requests can hang while the browser is starting up. https://bugs.webkit.org/show_bug.cgi?id=226547
 * The only solution is to keep nudging it until it's awake.
 */
function idbReady() {
    var isSafari = !navigator.userAgentData &&
        /Safari\//.test(navigator.userAgent) &&
        !/Chrom(e|ium)\//.test(navigator.userAgent);
    // No point putting other browsers or older versions of Safari through this mess.
    if (!isSafari || !indexedDB.databases)
        return Promise.resolve();
    var intervalId;
    return new Promise(function (resolve) {
        var tryIdb = function () { return indexedDB.databases().finally(resolve); };
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
    }).finally(function () { return clearInterval(intervalId); });
}

/* harmony default export */ const dist = (idbReady);

;// CONCATENATED MODULE: ./background/database/utils/openDB.ts



function createDBAccess(opener) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        shared/* MaskMessages.events.mobile_app_suspended.on */.ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>db = undefined
            , {
                once: true
            });
        }
        db = undefined;
    }
    return async ()=>{
        if (true) {
            await dist();
        }
        (0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
        if (db) {
            try {
                // try if the db still open
                const t = db.transaction([
                    db.objectStoreNames[0]
                ], 'readonly', {});
                t.commit();
                return db;
            } catch  {
                clean();
            }
        }
        db = await opener();
        db.addEventListener('close', clean, {
            once: true
        });
        db.addEventListener('error', clean, {
            once: true
        });
        return db;
    };
}
function createDBAccessWithAsyncUpgrade(firstVersionThatRequiresAsyncUpgrade, latestVersion, opener, asyncUpgradePrepare) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        shared/* MaskMessages.events.mobile_app_suspended.on */.ql.events.mobile_app_suspended.on(clean);
        setInterval(clean, /** 1 min */ 1000 * 60);
    }
    function clean() {
        if (db) {
            db.close();
            db.addEventListener('close', ()=>pendingOpen = db = undefined
            , {
                once: true
            });
        }
        pendingOpen = db = undefined;
    }
    let pendingOpen;
    async function open() {
        if (true) {
            await dist();
        }
        (0,umd.assertEnvironment)(umd.Environment.ManifestBackground);
        if (db?.version === latestVersion) return db;
        let currentVersion = firstVersionThatRequiresAsyncUpgrade;
        let lastVersionData = undefined;
        while(currentVersion < latestVersion){
            try {
                db = await opener(currentVersion, lastVersionData);
                // if the open success, the stored version is small or eq than currentTryOpenVersion
                // let's call the prepare function to do all the async jobs
                lastVersionData = await asyncUpgradePrepare(db);
            } catch (error) {
                if (currentVersion >= latestVersion) throw error;
            // if the stored database version is bigger than the currentTryOpenVersion
            // It will fail and we just move to next version
            }
            currentVersion += 1;
            db?.close();
            db = undefined;
        }
        db = await opener(currentVersion, lastVersionData);
        db.addEventListener('close', (e)=>db = undefined
        , {
            once: true
        });
        if (!db) throw new Error('Invalid state');
        return db;
    }
    return ()=>{
        // Share a Promise to prevent async upgrade for multiple times
        if (pendingOpen) return pendingOpen;
        const promise = pendingOpen = open();
        promise.catch(()=>pendingOpen = undefined
        );
        return promise;
    };
}
function createTransaction(db, mode) {
    // It must be a high order function to infer the type of UsedStoreName correctly.
    return (...storeNames)=>{
        return db.transaction(storeNames, mode);
    };
}


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