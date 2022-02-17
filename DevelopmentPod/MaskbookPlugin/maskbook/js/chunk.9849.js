(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9849,451],{

/***/ 9134:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 9134;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 48751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debugShowAllPossibleHashForPost": () => (/* binding */ debugShowAllPossibleHashForPost)
/* harmony export */ });
/* harmony import */ var _network_gun_version_2_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21959);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87926);
/* harmony import */ var _social_network_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32338);



async function debugShowAllPossibleHashForPost(post, payloadVersion) {
    var ref1;
    const friends = await (0,_database__WEBPACK_IMPORTED_MODULE_1__/* .queryProfilesWithQuery */ .X8)({
        network: post.network
    });
    const gunHint = (ref1 = (0,_social_network_worker__WEBPACK_IMPORTED_MODULE_2__/* .getNetworkWorkerUninitialized */ .Bu)(post.network)) === null || ref1 === void 0 ? void 0 : ref1.gunNetworkHint;
    return Promise.all(friends.filter((x)=>x.linkedPersona
    ).map(async (x)=>{
        var ref;
        return [
            x.identifier.toText(),
            await (0,_network_gun_version_2_hash__WEBPACK_IMPORTED_MODULE_0__.hashPostSalt)(post.postIV, gunHint !== null && gunHint !== void 0 ? gunHint : '') + '-' + await (payloadVersion <= -39 ? _network_gun_version_2_hash__WEBPACK_IMPORTED_MODULE_0__.hashCryptoKeyUnstable : _network_gun_version_2_hash__WEBPACK_IMPORTED_MODULE_0__.hashCryptoKey)(await (0,_database__WEBPACK_IMPORTED_MODULE_1__/* .queryPublicKey */ .M_)(x.identifier)),
            (ref = x.linkedPersona) === null || ref === void 0 ? void 0 : ref.fingerprint, 
        ];
    }));
}


/***/ }),

/***/ 21959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculatePostKeyPartition": () => (/* binding */ calculatePostKeyPartition),
/* harmony export */   "hashPostSalt": () => (/* binding */ hashPostSalt),
/* harmony export */   "hashCryptoKeyUnstable": () => (/* binding */ hashCryptoKeyUnstable),
/* harmony export */   "hashCryptoKey": () => (/* binding */ hashCryptoKey)
/* harmony export */ });
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32246);
/* harmony import */ var gun__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gun__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23646);
/* harmony import */ var gun_sea__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gun_sea__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_pure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49613);



/**
 * @param version current payload version
 * @param postIV Post iv
 * @param partitionByCryptoKey Public key of the current user (receiver)
 * @param networkHint The network specific string
 */ async function calculatePostKeyPartition(version, postIV, partitionByCryptoKey, networkHint) {
    const postHash = await hashPostSalt(postIV, networkHint);
    // In version > -39, we will use stable hash to prevent unstable result for key hashing
    const keyHash = await (version <= -39 ? hashCryptoKeyUnstable : hashCryptoKey)(partitionByCryptoKey);
    return {
        postHash,
        keyHash
    };
}
const hashPostSalt = (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .memoizePromise */ .J3)(async function(postSalt, networkHint) {
    const hashPair = '9283464d-ee4e-4e8d-a7f3-cf392a88133f';
    const N = 2;
    const hash = await gun__WEBPACK_IMPORTED_MODULE_0___default().SEA.work(postSalt, hashPair);
    return networkHint + hash.substring(0, N);
}, (x, y)=>x + y
);
/**
 * @param key - The key need to be hashed
 */ const hashCryptoKeyUnstable = (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .memoizePromise */ .J3)(async function(key) {
    const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
    const N = 2;
    const jwk = JSON.stringify(key);
    const hash = await gun__WEBPACK_IMPORTED_MODULE_0___default().SEA.work(jwk, hashPair);
    return hash.substring(0, N);
}, undefined);
/**
 * @param key - The key need to be hashed
 */ const hashCryptoKey = (0,_utils_pure__WEBPACK_IMPORTED_MODULE_2__/* .memoizePromise */ .J3)(async function(key) {
    const hashPair = '10198a2f-205f-45a6-9987-3488c80113d0';
    const N = 2;
    const jwk = key;
    if (!jwk.x || !jwk.y) throw new Error('Invalid key');
    const hash = await gun__WEBPACK_IMPORTED_MODULE_0___default().SEA.work(jwk.x + jwk.y, hashPair);
    return hash.substring(0, N);
}, undefined);


/***/ })

}]);