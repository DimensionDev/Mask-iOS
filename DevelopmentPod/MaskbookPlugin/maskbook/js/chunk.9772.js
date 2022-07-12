"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9772],{

/***/ 39772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPostDB": () => (/* binding */ createPostDB),
/* harmony export */   "queryPostDB": () => (/* binding */ queryPostDB),
/* harmony export */   "queryPostPagedDB": () => (/* binding */ queryPostPagedDB),
/* harmony export */   "queryPostsDB": () => (/* binding */ queryPostsDB),
/* harmony export */   "updatePostDB": () => (/* binding */ updatePostDB),
/* harmony export */   "withPostDBTransaction": () => (/* binding */ withPostDBTransaction)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44451);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76536);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46123);



async function createPostDB(record, t) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.create_post({
        post: postInNative(record)
    });
}
async function updatePostDB(updateRecord, mode, t) {
    await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.update_post({
        post: postInNative(updateRecord),
        options: {
            mode: mode === 'append' ? 0 : mode === 'override' ? 1 : 0
        }
    });
    return;
}
async function queryPostDB(record, t) {
    const result = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_post({
        identifier: record.toText()
    });
    return result ? postOutNative(result) : null;
}
async function queryPostPagedDB(linked, options, count) {
    const results = await _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz?.api.query_posts({
        userIds: options.userIds,
        network: options.network,
        encryptBy: linked.toText(),
        pageOption: options.pageOffset ? {
            pageSize: count,
            pageOffset: options.pageOffset
        } : undefined
    });
    if (!results?.length) return [];
    return results.map((r)=>postOutNative(r)
    );
}
function postInNative(record) {
    return {
        postBy: record.postBy ? record.postBy.toText() : undefined,
        identifier: record.identifier.toText(),
        postCryptoKey: record.postCryptoKey,
        recipients: record.recipients === 'everyone' ? Object.fromEntries(new Map()) : record.recipients ? Object.fromEntries(Array.from(record.recipients).map(([identifier, detail])=>[
                identifier.toText(),
                {
                    reason: RecipientReasonToJSON(detail)
                }, 
            ]
        )) : undefined,
        foundAt: record.foundAt?.getTime(),
        encryptBy: record.encryptBy?.toText(),
        url: record.url,
        summary: record.summary,
        interestedMeta: record.interestedMeta
    };
}
function postOutNative(record) {
    return {
        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.from */ .WO.from(record.postBy).unwrap(),
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier.from */ .bb.from(record.identifier).unwrap(),
        postCryptoKey: record.postCryptoKey,
        recipients: (0,_masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .convertRawMapToIdentifierMap */ .J5)(Object.entries(record.recipients).map(([a, b])=>{
            const firstDate = b.reason.find((x)=>x.at
            )?.at;
            if (firstDate) return [
                a,
                new Date(firstDate)
            ];
            return undefined;
        }).filter(_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .isNonNull */ .GT), _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO),
        foundAt: new Date(record.foundAt),
        encryptBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier.from */ .ob.from(record.encryptBy).unwrapOr(undefined),
        url: record.url,
        summary: record.summary,
        interestedMeta: record.interestedMeta
    };
}
// #region Not available on native.
async function queryPostsDB(query, t) {
    return [];
}
async function withPostDBTransaction(task) {
    await task(null);
}
function RecipientReasonToJSON(y) {
    return {
        type: 'direct',
        at: y.getTime()
    };
}


/***/ })

}]);