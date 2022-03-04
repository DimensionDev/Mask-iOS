"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8173],{

/***/ 78173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPostDB": () => (/* binding */ createPostDB),
/* harmony export */   "updatePostDB": () => (/* binding */ updatePostDB),
/* harmony export */   "queryPostDB": () => (/* binding */ queryPostDB),
/* harmony export */   "queryPostPagedDB": () => (/* binding */ queryPostPagedDB),
/* harmony export */   "queryPostsDB": () => (/* binding */ queryPostsDB),
/* harmony export */   "PostDBAccess": () => (/* binding */ PostDBAccess)
/* harmony export */ });
/* harmony import */ var _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43576);
/* harmony import */ var _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75126);
/* harmony import */ var _dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85143);



async function createPostDB(record, t) {
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.create_post */ .Nz.api.create_post({
        post: postInNative(record)
    }));
}
async function updatePostDB(updateRecord, mode, t) {
    await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.update_post */ .Nz.api.update_post({
        post: postInNative(updateRecord),
        options: {
            mode: mode === 'append' ? 0 : mode === 'override' ? 1 : 0
        }
    }));
    return;
}
async function queryPostDB(record, t) {
    const result = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_post */ .Nz.api.query_post({
        identifier: record.toText()
    }));
    return result ? postOutNative(result) : null;
}
async function queryPostPagedDB(linked, options, count) {
    const results = await (_shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === null || _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI */ .Nz === void 0 ? void 0 : _shared_native_rpc__WEBPACK_IMPORTED_MODULE_1__/* .nativeAPI.api.query_posts */ .Nz.api.query_posts({
        userIds: options.userIds,
        network: options.network,
        encryptBy: linked.toText(),
        pageOption: options.pageOffset ? {
            pageSize: count,
            pageOffset: options.pageOffset
        } : undefined
    }));
    if (!(results === null || results === void 0 ? void 0 : results.length)) return [];
    return results.map((r)=>postOutNative(r)
    );
}
function postInNative(record) {
    var ref, ref1;
    return {
        postBy: record.postBy ? record.postBy.toText() : undefined,
        identifier: record.identifier.toText(),
        postCryptoKey: record.postCryptoKey,
        recipients: record.recipients === 'everyone' ? Object.fromEntries(new Map()) : record.recipients ? Object.fromEntries(Array.from(record.recipients).map(([identifier, detail])=>[
                identifier.toText(),
                {
                    reason: Array.from(detail.reason).map(RecipientReasonToJSON)
                }, 
            ]
        )) : undefined,
        foundAt: (ref = record.foundAt) === null || ref === void 0 ? void 0 : ref.getTime(),
        encryptBy: (ref1 = record.encryptBy) === null || ref1 === void 0 ? void 0 : ref1.toText(),
        url: record.url,
        summary: record.summary,
        interestedMeta: record.interestedMeta
    };
}
function postOutNative(record) {
    return {
        postBy: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier.fromString */ .WO.fromString(record.postBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ProfileIdentifier */ .WO).unwrap(),
        identifier: _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier.fromString */ .bb.fromString(record.identifier, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .PostIVIdentifier */ .bb).unwrap(),
        postCryptoKey: record.postCryptoKey,
        recipients: new _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .IdentifierMap */ .qD(new Map(Object.entries(record.recipients))),
        foundAt: new Date(record.foundAt),
        encryptBy: record.encryptBy ? _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier.fromString */ .ob.fromString(record.encryptBy, _masknet_shared_base__WEBPACK_IMPORTED_MODULE_0__/* .ECKeyIdentifier */ .ob).unwrap() : undefined,
        url: record.url,
        summary: record.summary,
        interestedMeta: record.interestedMeta
    };
}
// #region Not available on native.
async function queryPostsDB(query, t) {
    return [];
}
const PostDBAccess = ()=>undefined
;
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
    return (0,_dimensiondev_kit__WEBPACK_IMPORTED_MODULE_2__/* .unreachable */ .t1)(y);
}


/***/ })

}]);