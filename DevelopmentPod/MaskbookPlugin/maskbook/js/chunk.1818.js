"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[1818],{

/***/ 98648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$B": () => (/* binding */ MinInt256),
/* harmony export */   "Bz": () => (/* binding */ MaxUint256),
/* harmony export */   "Ce": () => (/* binding */ WeiPerEther),
/* harmony export */   "PS": () => (/* binding */ MaxInt256),
/* harmony export */   "Py": () => (/* binding */ Two),
/* harmony export */   "_Y": () => (/* binding */ Zero),
/* harmony export */   "fh": () => (/* binding */ One),
/* harmony export */   "tL": () => (/* binding */ NegativeOne)
/* harmony export */ });
/* harmony import */ var _ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6619);

const NegativeOne = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(-1));
const Zero = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(0));
const One = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(1));
const Two = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from(2));
const WeiPerEther = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("1000000000000000000"));
const MaxUint256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
const MinInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("-0x8000000000000000000000000000000000000000000000000000000000000000"));
const MaxInt256 = ( /*#__PURE__*/_ethersproject_bignumber__WEBPACK_IMPORTED_MODULE_0__/* .BigNumber.from */ .O$.from("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));

//# sourceMappingURL=bignumbers.js.map

/***/ }),

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75276);


function id(text) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .w)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(text));
}
//# sourceMappingURL=id.js.map

/***/ }),

/***/ 27930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "dk": () => (/* binding */ Description),
  "uj": () => (/* binding */ checkProperties),
  "p$": () => (/* binding */ deepCopy),
  "zG": () => (/* binding */ defineReadOnly),
  "tu": () => (/* binding */ getStatic),
  "mE": () => (/* binding */ resolveProperties),
  "DC": () => (/* binding */ shallowCopy)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/_version.js
const version = "properties/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const logger = new lib_esm/* Logger */.Yd(version);
function defineReadOnly(object, name, value) {
    Object.defineProperty(object, name, {
        enumerable: true,
        value: value,
        writable: false,
    });
}
// Crawl up the constructor chain to find a static method
function getStatic(ctor, key) {
    for (let i = 0; i < 32; i++) {
        if (ctor[key]) {
            return ctor[key];
        }
        if (!ctor.prototype || typeof (ctor.prototype) !== "object") {
            break;
        }
        ctor = Object.getPrototypeOf(ctor.prototype).constructor;
    }
    return null;
}
function resolveProperties(object) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = Object.keys(object).map((key) => {
            const value = object[key];
            return Promise.resolve(value).then((v) => ({ key: key, value: v }));
        });
        const results = yield Promise.all(promises);
        return results.reduce((accum, result) => {
            accum[(result.key)] = result.value;
            return accum;
        }, {});
    });
}
function checkProperties(object, properties) {
    if (!object || typeof (object) !== "object") {
        logger.throwArgumentError("invalid object", "object", object);
    }
    Object.keys(object).forEach((key) => {
        if (!properties[key]) {
            logger.throwArgumentError("invalid object key - " + key, "transaction:" + key, object);
        }
    });
}
function shallowCopy(object) {
    const result = {};
    for (const key in object) {
        result[key] = object[key];
    }
    return result;
}
const opaque = { bigint: true, boolean: true, "function": true, number: true, string: true };
function _isFrozen(object) {
    // Opaque objects are not mutable, so safe to copy by assignment
    if (object === undefined || object === null || opaque[typeof (object)]) {
        return true;
    }
    if (Array.isArray(object) || typeof (object) === "object") {
        if (!Object.isFrozen(object)) {
            return false;
        }
        const keys = Object.keys(object);
        for (let i = 0; i < keys.length; i++) {
            if (!_isFrozen(object[keys[i]])) {
                return false;
            }
        }
        return true;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
// Returns a new copy of object, such that no properties may be replaced.
// New properties may be added only to objects.
function _deepCopy(object) {
    if (_isFrozen(object)) {
        return object;
    }
    // Arrays are mutable, so we need to create a copy
    if (Array.isArray(object)) {
        return Object.freeze(object.map((item) => deepCopy(item)));
    }
    if (typeof (object) === "object") {
        const result = {};
        for (const key in object) {
            const value = object[key];
            if (value === undefined) {
                continue;
            }
            defineReadOnly(result, key, deepCopy(value));
        }
        return result;
    }
    return logger.throwArgumentError(`Cannot deepCopy ${typeof (object)}`, "object", object);
}
function deepCopy(object) {
    return _deepCopy(object);
}
class Description {
    constructor(info) {
        for (const key in info) {
            this[key] = deepCopy(info[key]);
        }
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bM": () => (/* binding */ formatUnits),
  "vz": () => (/* binding */ parseUnits)
});

// UNUSED EXPORTS: commify, formatEther, parseEther

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+bignumber@5.6.0/node_modules/@ethersproject/bignumber/lib.esm/fixednumber.js
var fixednumber = __webpack_require__(24790);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/_version.js
const version = "units/5.6.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/index.js




const logger = new lib_esm/* Logger */.Yd(version);
const names = [
    "wei",
    "kwei",
    "mwei",
    "gwei",
    "szabo",
    "finney",
    "ether",
];
// Some environments have issues with RegEx that contain back-tracking, so we cannot
// use them.
function commify(value) {
    const comps = String(value).split(".");
    if (comps.length > 2 || !comps[0].match(/^-?[0-9]*$/) || (comps[1] && !comps[1].match(/^[0-9]*$/)) || value === "." || value === "-.") {
        logger.throwArgumentError("invalid value", "value", value);
    }
    // Make sure we have at least one whole digit (0 if none)
    let whole = comps[0];
    let negative = "";
    if (whole.substring(0, 1) === "-") {
        negative = "-";
        whole = whole.substring(1);
    }
    // Make sure we have at least 1 whole digit with no leading zeros
    while (whole.substring(0, 1) === "0") {
        whole = whole.substring(1);
    }
    if (whole === "") {
        whole = "0";
    }
    let suffix = "";
    if (comps.length === 2) {
        suffix = "." + (comps[1] || "0");
    }
    while (suffix.length > 2 && suffix[suffix.length - 1] === "0") {
        suffix = suffix.substring(0, suffix.length - 1);
    }
    const formatted = [];
    while (whole.length) {
        if (whole.length <= 3) {
            formatted.unshift(whole);
            break;
        }
        else {
            const index = whole.length - 3;
            formatted.unshift(whole.substring(index));
            whole = whole.substring(0, index);
        }
    }
    return negative + formatted.join(",") + suffix;
}
function formatUnits(value, unitName) {
    if (typeof (unitName) === "string") {
        const index = names.indexOf(unitName);
        if (index !== -1) {
            unitName = 3 * index;
        }
    }
    return (0,fixednumber/* formatFixed */.S5)(value, (unitName != null) ? unitName : 18);
}
function parseUnits(value, unitName) {
    if (typeof (value) !== "string") {
        logger.throwArgumentError("value must be a string", "value", value);
    }
    if (typeof (unitName) === "string") {
        const index = names.indexOf(unitName);
        if (index !== -1) {
            unitName = 3 * index;
        }
    }
    return (0,fixednumber/* parseFixed */.Ox)(value, (unitName != null) ? unitName : 18);
}
function formatEther(wei) {
    return formatUnits(wei, 18);
}
function parseEther(ether) {
    return parseUnits(ether, 18);
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 82969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "getAccountEntitlements": () => (/* reexport */ getAccountEntitlements),
  "getAccountFarms": () => (/* reexport */ getAccountFarms),
  "getAccountRewards": () => (/* reexport */ getAccountRewards),
  "getDailyAndTotalRewardsFarm": () => (/* reexport */ getDailyAndTotalRewardsFarm),
  "getFarmExistEvents": () => (/* reexport */ getFarmExistEvents),
  "getFarmOraclesDiscovery": () => (/* reexport */ getFarmOraclesDiscovery),
  "getFullDiscovery": () => (/* reexport */ getFullDiscovery),
  "getMyRewardsHarvested": () => (/* reexport */ getMyRewardsHarvested),
  "getReferralFarmsV1Address": () => (/* reexport */ getReferralFarmsV1Address),
  "getReferredTokensDefn": () => (/* reexport */ getReferredTokensDefn),
  "getRewardsForReferredToken": () => (/* reexport */ getRewardsForReferredToken),
  "getTimeSignature": () => (/* reexport */ getTimeSignature),
  "postProofOfRecommendationOrigin": () => (/* reexport */ postProofOfRecommendationOrigin),
  "postProofOfRecommendationWithReferrer": () => (/* reexport */ postProofOfRecommendationWithReferrer)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/orderBy.js
var orderBy = __webpack_require__(50350);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/interface.js
var lib_esm_interface = __webpack_require__(58528);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ./src/plugins/Referral/helpers/index.tsx + 2 modules
var helpers = __webpack_require__(60184);
// EXTERNAL MODULE: ./src/plugins/Referral/constants.ts
var constants = __webpack_require__(97300);
;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/discovery.ts

async function getFullDiscovery() {
    const response = await fetch('https://discovery.attrace.com/mainnet/full.json');
    const discovery = await response.json();
    const pop = response.headers.get('x-amz-cf-pop') || '';
    return {
        discovery,
        pop
    };
}
async function getFarmOraclesDiscovery() {
    try {
        const response = await fetch('https://discovery.attrace.com/mainnet/farmOracles.json');
        const discovery = await response.json();
        const pop = response.headers.get('x-amz-cf-pop') || '';
        return {
            discovery: discovery.farmOracles,
            pop
        };
    } catch (error) {
        throw new Error(error);
    }
}
async function getReferralFarmsV1Address() {
    try {
        const res = await getFarmOraclesDiscovery();
        return res.discovery.referralFarmsV1.find((e)=>e.chainId === constants/* supportedChainId */.w
        )?.address ?? '';
    } catch (error) {
        if (error instanceof Error) throw error;
        else if (typeof error === 'string') throw new Error(error);
        else throw new Error('Failed to fetch Referral farms address.');
    }
}

;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/oracle.ts


var RpcRoute;
(function(RpcRoute) {
    RpcRoute["rpc"] = "rpc";
    RpcRoute["recommendations"] = 'recommendations/rpc';
})(RpcRoute || (RpcRoute = {}));
var RpcMethod;
(function(RpcMethod) {
    RpcMethod["oracle_chainId"] = "oracle_chainId";
    RpcMethod["oracle_getDerivedBlockByHash"] = "oracle_getDerivedBlockByHash";
    RpcMethod["oracle_getBundleReceipt"] = "oracle_getBundleReceipt";
    RpcMethod["oracle_getDerivedBlockByNumber"] = "oracle_getDerivedBlockByNumber";
    RpcMethod["oracle_getOperationalAddress"] = "oracle_getOperationalAddress";
    RpcMethod["oracle_call"] = "oracle_call";
    RpcMethod["oracle_getLogs"] = "oracle_getLogs";
})(RpcMethod || (RpcMethod = {}));
var RecommendationsRpcMethod;
(function(RecommendationsRpcMethod) {
    RecommendationsRpcMethod["oracle_getOperationalAddress"] = "oracle_getOperationalAddress";
    RecommendationsRpcMethod["oracle_getTimePromise"] = "oracle_getTimePromise";
    RecommendationsRpcMethod["oracle_sendProofOfRecommendationOrigin"] = "oracle_sendProofOfRecommendationOrigin";
    RecommendationsRpcMethod["oracle_sendProofOfRecommendation"] = "oracle_sendProofOfRecommendation";
    RecommendationsRpcMethod["oracle_getProofOfRecommendationOrigin"] = "oracle_getProofOfRecommendationOrigin";
})(RecommendationsRpcMethod || (RecommendationsRpcMethod = {}));
async function getOracle() {
    const { discovery: { oracles  } ,  } = await getFarmOraclesDiscovery();
    return oracles.find((oracle)=>oracle.chainId === constants/* supportedOracleChainId */.A7
    )?.url ?? '';
}
async function jsonReq(url, opts) {
    if (!opts?.headers) opts.headers = {};
    Object.assign(opts.headers, {
        'content-type': 'application/json'
    });
    const res = await fetch(url, opts);
    if (res.status !== 200) {
        throw new Error(res.statusText);
    }
    const json = await res.json();
    if (json.error) {
        throw new Error(`Code: ${json.error.code}. ${json.error?.message || ''}`);
    }
    return json;
}
/**
 *
 * @param url url
 * @param method get/post/put
 * @param params params
 * @returns result of request
 */ async function rpcCall(url, method, params) {
    const res = await jsonReq(url, {
        method: 'POST',
        body: JSON.stringify({
            jsonrpc: '2.0',
            id: crypto.randomUUID(),
            method,
            params: params || []
        })
    });
    return res;
}

;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/entitlements.ts






const Entitlement = 'Entitlement';
const eventsEntitlement = new lib_esm_interface/* Interface */.vU([
    `event ${Entitlement}(bytes32 indexed farmHash, address indexed entitlee, uint128 confirmation, uint128 rewardValue, bytes32[] proof)`, 
]);
const eventIdsEntitlement = {};
Object.entries(eventsEntitlement.events).forEach(([k, v])=>eventIdsEntitlement[v.name] = (0,lib.keccak256)(k)
);
function parseEntitlementEvents(items) {
    const itemsSorted = (0,orderBy/* default */.Z)(items, [
        'chainId',
        'blockNumber',
        'logIndex'
    ], [
        'asc',
        'asc',
        'asc'
    ]);
    const parsed = itemsSorted.map((row)=>{
        return eventsEntitlement.parseLog({
            data: row.data,
            topics: row.topics
        }).args;
    });
    return parsed;
}
async function getAccountEntitlements(account) {
    const host = await getOracle();
    const topics = [
        eventIdsEntitlement.Entitlement,
        '',
        (0,helpers/* expandEvmAddressToBytes32 */.aE)(account)
    ];
    const res = await rpcCall(`${host}/v1/${RpcRoute.rpc}`, RpcMethod.oracle_getLogs, [
        {
            topics,
            chainId: [
                constants/* supportedOracleChainId */.A7
            ]
        }, 
    ]);
    return parseEntitlementEvents(res?.result);
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/abi-coder.js + 10 modules
var abi_coder = __webpack_require__(78223);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(4068);
// EXTERNAL MODULE: ../web3-contracts/abis/ReferralFarmsV1.json
var ReferralFarmsV1 = __webpack_require__(42853);
;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/indexers.ts
/* eslint-disable @typescript-eslint/no-loop-func */ /* eslint-disable no-return-await */ 
// Nearest Node
const toRad = (num)=>{
    return num * Math.PI / 100;
};
function haversine(start, end) {
    const R = 6371;
    const dLat = toRad(end.lat - start.lat);
    const dLon = toRad(end.lon - start.lon);
    const lat1 = toRad(start.lat);
    const lat2 = toRad(end.lat);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function selectNearestNode(nodes, airports, pop) {
    const iata = pop.slice(0, 3);
    const popc = airports.find((ap)=>ap.iata === iata
    );
    if (popc) {
        let nearest;
        for (const [i] of nodes.entries()){
            const n = nodes[i];
            if (!n.location || !n.location.lat || !n.location.lon) {
                continue;
            }
            const d = haversine(popc, n.location);
            if (!nearest || d < nearest.d) {
                nearest = {
                    d,
                    n
                };
            }
        }
        if (nearest) {
            return nearest.n;
        }
    }
    // No nearest found, it's up to the caller to implement another node selection strategy.
    return null;
}
function getNearestAndRemainingNodes(nodes, airports, pop, nearestNodeAmount) {
    let remainingNodes = nodes;
    // get N nearest nodes
    const nearestNodes = [];
    for(let i = 0; i < nearestNodeAmount; i += 1){
        const nearestNode = selectNearestNode(remainingNodes, airports, pop);
        if (nearestNode) {
            nearestNodes.push(nearestNode);
            // filter out a node that is in nearest nodes already
            remainingNodes = remainingNodes.filter((node)=>node.url !== nearestNode.url
            );
        }
    }
    return {
        nearestNodes,
        remainingNodes
    };
}
async function findQuorum(nodes, airports, pop, urlPath, minQuorum) {
    let responses = [];
    let nodeCount = minQuorum;
    // query another nodes among the remaining nodes until quorum is reached
    while(responses.length < minQuorum){
        if (!nodes.length) {
            break;
        }
        const { remainingNodes , nearestNodes  } = getNearestAndRemainingNodes(nodes, airports, pop, nodeCount);
        const settledResponses = await Promise.allSettled(nearestNodes.map(async (node)=>await (await fetch(`${node.url}${urlPath}`)).json()
        ));
        // filter out failed  responses
        responses = [
            ...responses,
            ...settledResponses.filter((response)=>response.status === 'fulfilled'
            )
        ];
        nodeCount = minQuorum - responses.length;
        nodes = remainingNodes;
    }
    return responses;
}
async function queryIndexersWithNearestQuorum(searchParams) {
    const urlPath = makeIndexerUrlPath(searchParams);
    const { discovery , pop  } = await getFullDiscovery();
    const minQuorum = 1;
    const responses = await findQuorum(discovery.indexers, discovery.airports, pop, urlPath, minQuorum);
    if (!responses.length) {
        throw new Error('Node request error');
    }
    return responses[0].value;
}
function makeIndexerUrlPath(params) {
    const parts = [];
    if (params.addresses) params.addresses.forEach((d)=>parts.push(`address=${d}`)
    );
    if (params.topics) params.topics.forEach((d)=>parts.push(`topic=${d}`)
    );
    if (params.topic1) params.topic1.forEach((d)=>parts.push(`topic1=${d}`)
    );
    if (params.topic2) params.topic2.forEach((d)=>parts.push(`topic2=${d}`)
    );
    if (params.topic3) params.topic3.forEach((d)=>parts.push(`topic3=${d}`)
    );
    if (params.topic4) params.topic4.forEach((d)=>parts.push(`topic4=${d}`)
    );
    if (params.chainId) params.chainId.forEach((d)=>parts.push(`chainId=${d}`)
    );
    if (params.transactionHash) params.transactionHash.forEach((d)=>parts.push(`transactionHash=${d}`)
    );
    if (params.strategy) parts.push(`strategy=${params.strategy}`);
    return `/v1/logsearch?${parts.join('&')}`;
}

// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(19769);
// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 12 modules
var constants_constants = __webpack_require__(47104);
;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/tokenLists.ts



const fetchERC20TokensFromTokenListsMap = async (chainId)=>{
    const { FUNGIBLE_TOKEN_LISTS =[]  } = (0,constants_constants/* getTokenListConstants */.Hi)(chainId);
    const ERC20Tokens = await src/* TokenList.fetchFungibleTokensFromTokenLists */.no.fetchFungibleTokensFromTokenLists(chainId, [
        ...FUNGIBLE_TOKEN_LISTS,
        constants/* TOKEN_LIST_URL */.i4, 
    ]);
    return new Map(ERC20Tokens.map((token)=>[
            token.address.toLowerCase(),
            token
        ]
    ));
};

;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/farms.ts









const REFERRAL_FARMS_V1_IFACE = new lib_esm_interface/* Interface */.vU(ReferralFarmsV1);
// Index the events name => id
const eventIds = {};
Object.entries(REFERRAL_FARMS_V1_IFACE.events).forEach(([k, v])=>eventIds[v.name] = (0,lib.keccak256)(k)
);
function parseEvents(items) {
    const itemsSorted = (0,orderBy/* default */.Z)(items, [
        'chainId',
        'blockNumber',
        'logIndex'
    ], [
        'asc',
        'asc',
        'asc'
    ]);
    const parsed = itemsSorted.map((row)=>{
        return REFERRAL_FARMS_V1_IFACE.parseLog({
            data: row.data,
            topics: JSON.parse(row.topics)
        });
    });
    return parsed;
}
function parseFarmExistsEvents(unparsed) {
    const parsed = parseEvents(unparsed);
    const farms = parsed.map((e)=>{
        const { farmHash , referredTokenDefn , rewardTokenDefn , sponsor  } = e.args;
        return {
            farmHash,
            referredTokenDefn,
            rewardTokenDefn,
            sponsor
        };
    });
    // select unique farms(uniq farmHash)
    const uniqueFarms = farms.filter((val, index)=>index === farms.findIndex((elem)=>elem.farmHash === val.farmHash
        )
    );
    return uniqueFarms;
}
function parseRewardsHarvestedEvents(unparsed) {
    const parsed = parseEvents(unparsed);
    const rewards = parsed.map((e)=>{
        const { farmHash , caller , rewardTokenDefn , leafHash , value  } = e.args;
        return {
            farmHash,
            caller,
            rewardTokenDefn,
            leafHash,
            value: Number.parseFloat((0,lib_esm/* formatUnits */.bM)(value))
        };
    });
    return rewards;
}
function parseFarmDepositAndFarmMetastateEvents(farmMetaDataEvents, farmsMap) {
    const farmsData = farmsMap;
    farmMetaDataEvents.forEach((e)=>{
        const { farmHash  } = e.args;
        const farmState = farmsData.get(farmHash);
        if (!farmState) return;
        const rewardTokenDec = farmState.rewardToken?.decimals ?? 18;
        if (e.topic === eventIds.FarmDepositIncreased) {
            const prevTotalFarmRewards = farmState.totalFarmRewards || 0;
            const totalFarmRewards = prevTotalFarmRewards + Number.parseFloat((0,lib_esm/* formatUnits */.bM)(e.args.delta, rewardTokenDec));
            farmsData.set(farmHash, {
                ...farmState,
                totalFarmRewards
            });
        }
        if (e.topic === eventIds.FarmMetastate) {
            const { key , value  } = e.args;
            const confirmationRewardKey = (0,lib.padRight)((0,lib.asciiToHex)('confirmationReward'), 64);
            if (key === confirmationRewardKey) {
                const confirmationReward = abi_coder/* defaultAbiCoder.decode */.$.decode([
                    'uint128',
                    'uint128'
                ], value)[0];
                farmsData.set(farmHash, {
                    ...farmState,
                    dailyFarmReward: Number.parseFloat((0,lib_esm/* formatUnits */.bM)(confirmationReward, rewardTokenDec))
                });
            }
        }
    });
    return farmsData;
}
async function getFarmExistEvents(chainId) {
    const farmsAddr = await getReferralFarmsV1Address();
    const farmExistsEvents = await queryIndexersWithNearestQuorum({
        addresses: [
            farmsAddr
        ],
        topic1: [
            eventIds.FarmExists
        ],
        chainId: [
            chainId
        ]
    });
    const farms = parseFarmExistsEvents(farmExistsEvents.items);
    return farms;
}
async function getAccountFarms(account, chainId, filter) {
    // Allow filtering your own tokens
    let topic3, topic4;
    if (filter?.rewardTokens) {
        topic3 = filter.rewardTokens.map((t)=>(0,helpers/* expandBytes24ToBytes32 */._2)(t)
        );
    }
    if (filter?.referredTokens) {
        topic4 = filter.referredTokens.map((t)=>(0,helpers/* expandBytes24ToBytes32 */._2)(t)
        );
    }
    const farmsAddr = await getReferralFarmsV1Address();
    // Query account farms
    const farmExistsEvents = await queryIndexersWithNearestQuorum({
        addresses: [
            farmsAddr
        ],
        topic1: [
            eventIds.FarmExists
        ],
        topic2: [
            (0,helpers/* expandEvmAddressToBytes32 */.aE)(account)
        ],
        topic3,
        topic4,
        chainId: [
            chainId
        ]
    });
    if (!farmExistsEvents?.items.length) return [];
    const farms = parseFarmExistsEvents(farmExistsEvents.items);
    const farmsDepositEvents = await queryIndexersWithNearestQuorum({
        addresses: [
            farmsAddr
        ],
        topic1: [
            eventIds.FarmDepositIncreased
        ],
        topic2: farms.map((farm)=>farm.farmHash
        ),
        chainId: [
            chainId
        ]
    });
    const farmsDeposits = parseEvents(farmsDepositEvents?.items);
    const tokensMap = await fetchERC20TokensFromTokenListsMap(chainId);
    const farmsMap = new Map(farms.map((farm)=>[
            farm.farmHash,
            {
                ...farm,
                totalFarmRewards: 0,
                dailyFarmReward: 0,
                referredToken: tokensMap?.get((0,helpers/* parseChainAddress */.FZ)(farm.referredTokenDefn).address),
                rewardToken: tokensMap?.get((0,helpers/* parseChainAddress */.FZ)(farm.rewardTokenDefn).address)
            }, 
        ]
    ));
    farmsDeposits.forEach((deposit)=>{
        const { farmHash , delta  } = deposit.args;
        const farmState = farmsMap.get(farmHash);
        if (!farmState) return;
        const rewardTokenDec = farmState.rewardToken?.decimals ?? 18;
        const totalFarmRewards = (farmState.totalFarmRewards || 0) + Number.parseFloat((0,lib_esm/* formatUnits */.bM)(delta, rewardTokenDec));
        farmsMap.set(farmHash, {
            ...farmState,
            totalFarmRewards
        });
    });
    return [
        ...farmsMap.values()
    ];
}
async function getDailyAndTotalRewardsFarm(chainId, farmHash, tokenDecimals) {
    const farmsAddr = await getReferralFarmsV1Address();
    const res = await queryIndexersWithNearestQuorum({
        addresses: [
            farmsAddr
        ],
        topic1: [
            eventIds.FarmMetastate,
            eventIds.FarmDepositIncreased
        ],
        topic2: [
            farmHash
        ],
        chainId: [
            chainId
        ]
    });
    const parsed = parseEvents(res.items);
    let farm = {
        farmHash,
        dailyFarmReward: 0,
        totalFarmRewards: 0
    };
    parsed.forEach((e)=>{
        if (e.topic === eventIds.FarmDepositIncreased) {
            const prevTotalFarmRewards = farm.totalFarmRewards || 0;
            const totalFarmRewards = prevTotalFarmRewards + Number.parseFloat((0,lib_esm/* formatUnits */.bM)(e.args.delta, tokenDecimals));
            farm = {
                ...farm,
                totalFarmRewards
            };
        }
        if (e.topic === eventIds.FarmMetastate) {
            const { key , value  } = e.args;
            const confirmationRewardKey = (0,lib.padRight)((0,lib.asciiToHex)('confirmationReward'), 64);
            if (key === confirmationRewardKey) {
                const confirmationReward = abi_coder/* defaultAbiCoder.decode */.$.decode([
                    'uint128',
                    'uint128'
                ], value)[0];
                farm = {
                    ...farm,
                    dailyFarmReward: Number.parseFloat((0,lib_esm/* formatUnits */.bM)(confirmationReward, tokenDecimals))
                };
            }
        }
    });
    return farm;
}
async function getMyRewardsHarvested(account, chainId, filter) {
    const farmsAddr = await getReferralFarmsV1Address();
    // Allow filtering by reward tokens
    let topic3;
    if (filter?.rewardTokens) {
        topic3 = filter.rewardTokens.map((t)=>(0,helpers/* expandBytes24ToBytes32 */._2)(t)
        );
    }
    // Query indexers
    const res = await queryIndexersWithNearestQuorum({
        addresses: [
            farmsAddr
        ],
        topic1: [
            eventIds.RewardsHarvested
        ],
        topic2: [
            (0,helpers/* expandEvmAddressToBytes32 */.aE)(account)
        ],
        topic3,
        chainId: [
            chainId
        ]
    });
    return parseRewardsHarvestedEvents(res.items);
}
async function getFarmsForReferredToken(chainId, referredToken) {
    const farmsAddr = await getReferralFarmsV1Address();
    // query farms basic data
    const farmExistsEvents = await queryIndexersWithNearestQuorum({
        addresses: [
            farmsAddr
        ],
        topic1: [
            eventIds.FarmExists
        ],
        topic4: [
            (0,helpers/* expandBytes24ToBytes32 */._2)((0,helpers/* toChainAddressEthers */.Gw)(chainId, referredToken))
        ],
        chainId: [
            chainId
        ]
    });
    const farms = parseFarmExistsEvents(farmExistsEvents.items);
    const tokensMap = await fetchERC20TokensFromTokenListsMap(chainId);
    const farmsMap = new Map(farms.map((farm)=>[
            farm.farmHash,
            {
                ...farm,
                totalFarmRewards: 0,
                dailyFarmReward: 0,
                referredToken: tokensMap?.get((0,helpers/* parseChainAddress */.FZ)(farm.referredTokenDefn).address),
                rewardToken: tokensMap?.get((0,helpers/* parseChainAddress */.FZ)(farm.rewardTokenDefn).address)
            }, 
        ]
    ));
    // query farms meta data
    const farmsDataEvents = await queryIndexersWithNearestQuorum({
        addresses: [
            farmsAddr
        ],
        topic1: [
            eventIds.FarmMetastate,
            eventIds.FarmDepositIncreased
        ],
        topic2: farms.map(({ farmHash  })=>farmHash
        ),
        chainId: [
            chainId
        ]
    });
    const farmsDataParsed = parseEvents(farmsDataEvents.items);
    const farmsData = parseFarmDepositAndFarmMetastateEvents(farmsDataParsed, farmsMap);
    return farmsData;
}
async function getRewardsForReferredToken(chainId, referredToken) {
    const farmsData = await getFarmsForReferredToken(chainId, referredToken);
    const rewards = new Map();
    for (const [, value] of farmsData.entries()){
        const prevState = rewards.get(value.rewardTokenDefn);
        rewards.set(value.rewardTokenDefn, {
            rewardToken: value.rewardToken,
            totalReward: (prevState?.totalReward || 0) + value.totalFarmRewards,
            dailyReward: (prevState?.dailyReward || 0) + value.dailyFarmReward
        });
    }
    return [
        ...rewards.values()
    ];
}
async function getReferredTokensDefn(chainId) {
    const farmExistEvents = await getFarmExistEvents(chainId);
    const referredTokensDefn = farmExistEvents.map((farm)=>farm.referredTokenDefn
    );
    return [
        ...new Set(referredTokensDefn)
    ];
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+address@5.4.0/node_modules/@ethersproject/address/lib.esm/index.js + 1 modules
var address_lib_esm = __webpack_require__(99747);
;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/proofOfRecommendation.ts


async function getTimeSignature(props) {
    const { account , tokenAddress , referrer , dapp , router  } = props;
    const host = props.host || await getOracle();
    const { result  } = await rpcCall(`${host}/v1/${RpcRoute.recommendations}`, RecommendationsRpcMethod.oracle_getTimePromise, [
        account,
        tokenAddress,
        referrer,
        dapp,
        router
    ]);
    return {
        time: Number(result.time),
        timePromise: result.sig
    };
}
// create proof by origin(PROMOTER), referrer = ZERO_ADDR
async function postProofOfRecommendationOrigin(account, tokenAddress, router, time, timePromise, sig) {
    const host = await getOracle();
    // Post signed proof of recommendation which has a time promise from the store.
    const res = await rpcCall(`${host}/v1/${RpcRoute.recommendations}`, RecommendationsRpcMethod.oracle_sendProofOfRecommendationOrigin, [
        {
            signer: (0,address_lib_esm.getAddress)(account),
            token: (0,address_lib_esm.getAddress)(tokenAddress),
            router: (0,address_lib_esm.getAddress)(router),
            time,
            sig,
            timePromises: [
                timePromise
            ]
        }, 
    ]);
    return res;
}
// create proof by PARTICIPANT, referrer = PROMOTER_ADDRESS
async function postProofOfRecommendationWithReferrer(account, tokenAddress, referrer, dapp, router, time, timePromise, sig) {
    const host = await getOracle();
    const res = await rpcCall(`${host}/v1/${RpcRoute.recommendations}`, RecommendationsRpcMethod.oracle_sendProofOfRecommendation, [
        {
            signer: (0,address_lib_esm.getAddress)(account),
            token: (0,address_lib_esm.getAddress)(tokenAddress),
            referrer: (0,address_lib_esm.getAddress)(referrer),
            dapp,
            router: (0,address_lib_esm.getAddress)(router),
            time,
            sig,
            timePromises: [
                timePromise
            ],
            linkReferrer: document.referrer
        }, 
    ]);
    return res;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/groupBy.js
var groupBy = __webpack_require__(87937);
;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/rewards.ts









function makeLeafHash(chainId, reward, rewardTokenDefn, referralFarmsAddr, confirmationsAddr) {
    return (0,lib.keccak256)(abi_coder/* defaultAbiCoder.encode */.$.encode([
        'bytes24',
        'bytes24',
        'address',
        'bytes24',
        '(bytes32 farmHash, uint128 rewardValue, uint128 confirmation)', 
    ], [
        (0,helpers/* toChainAddressEthers */.Gw)(chainId, confirmationsAddr),
        (0,helpers/* toChainAddressEthers */.Gw)(chainId, referralFarmsAddr),
        reward.entitlee,
        rewardTokenDefn,
        {
            farmHash: reward.farmHash,
            rewardValue: reward.rewardValue,
            confirmation: reward.confirmation
        }, 
    ]));
}
async function getAccountRewards(account, chainId) {
    const entitlements = await getAccountEntitlements(account);
    const rewardsHarvested = await getMyRewardsHarvested(account, chainId);
    const farms = await getFarmExistEvents(chainId);
    const farmsMap = new Map(farms.map((farm)=>[
            farm.farmHash,
            farm
        ]
    ));
    const rewardsHarvestedMap = new Map(rewardsHarvested.map((rewardHarvested)=>[
            rewardHarvested.leafHash,
            rewardHarvested.value
        ]
    ));
    // Query tokens
    const tokensMap = await fetchERC20TokensFromTokenListsMap(chainId);
    // Query addresses
    const { discovery: { referralFarmsV1 , confirmationsV1  } ,  } = await getFarmOraclesDiscovery();
    const referralFarmsAddr = referralFarmsV1.find((e)=>e.chainId === constants/* supportedChainId */.w
    )?.address ?? '';
    const confirmationsAddr = confirmationsV1.find((e)=>e.chainId === constants/* supportedChainId */.w
    )?.address ?? '';
    const rewards = entitlements?.map((entitlement)=>{
        const farm = farmsMap.get(entitlement.farmHash);
        return {
            ...entitlement,
            ...farm,
            referredToken: tokensMap.get((0,helpers/* parseChainAddress */.FZ)(farm?.referredTokenDefn ?? '').address),
            rewardToken: tokensMap.get((0,helpers/* parseChainAddress */.FZ)(farm?.rewardTokenDefn ?? '').address),
            claimed: farm ? Boolean(rewardsHarvestedMap.get(makeLeafHash(chainId, entitlement, farm.rewardTokenDefn, referralFarmsAddr, confirmationsAddr))) : false
        };
    });
    return (0,groupBy/* default */.Z)(rewards, (reward)=>reward.rewardTokenDefn
    );
}

;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/apis/index.ts






;// CONCATENATED MODULE: ./src/plugins/Referral/Worker/services.ts



/***/ }),

/***/ 60184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_2": () => (/* binding */ expandBytes24ToBytes32),
  "aE": () => (/* binding */ expandEvmAddressToBytes32),
  "qL": () => (/* binding */ getRequiredChainId),
  "FZ": () => (/* binding */ parseChainAddress),
  "HT": () => (/* binding */ referralMetadataReader),
  "dt": () => (/* binding */ roundValue),
  "Gw": () => (/* binding */ toChainAddressEthers),
  "xe": () => (/* binding */ valueToNumber)
});

// UNUSED EXPORTS: toChainId, toEvmAddress, toNativeRewardTokenDefn

// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ../../node_modules/.pnpm/web3-utils@1.7.3/node_modules/web3-utils/lib/index.js
var lib = __webpack_require__(11627);
// EXTERNAL MODULE: ../typed-message/dom/index.ts + 14 modules
var dom = __webpack_require__(30003);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+units@5.6.0/node_modules/@ethersproject/units/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(4068);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2596);
// EXTERNAL MODULE: ./src/plugins/Referral/constants.ts
var constants = __webpack_require__(97300);
;// CONCATENATED MODULE: ./src/plugins/Referral/schema.json
const schema_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"properties":{"referral_token":{"type":"string","title":"referral_token"},"sender":{"type":"string","title":"sender"}},"required":["referral_token","sender"]}');
;// CONCATENATED MODULE: ./src/plugins/Referral/helpers/buffer.ts

// Never used class to force ts compiler to hide the underlying alias type.
class TypeStub {
    constructor(){}
}
function toEvenLength(str) {
    if (str.length % 2 !== 0) {
        return '0' + str;
    }
    return str;
}
function isHexString(value) {
    return !!value.match(/^0x[\dA-Fa-f]*$/);
}
function hexToArrayBuffer(input) {
    if (input.length % 2 !== 0) {
        throw new RangeError('Expected string to be an even number of characters');
    }
    const view = new Uint8Array(input.length / 2);
    for(let i = 0; i < input.length; i += 2){
        view[i / 2] = Number.parseInt(input.slice(i, i + 2), 16);
    }
    return view;
}
function writeUInt32BE(buf1, value, offset) {
    if (value < 0 || value >= Number.MAX_SAFE_INTEGER) {
        throw new RangeError(`value must be >= 0 and <= ${Number.MAX_SAFE_INTEGER - 1}. Received ${value}`);
    }
    // eslint-disable-next-line no-bitwise
    buf1.set([
        value >>> 24,
        value >>> 16,
        value >>> 8,
        value & 0xff
    ], offset);
    return buf1;
}
function buf(b) {
    if (b === null || b instanceof Uint8Array) return b;
    if (typeof b === 'number') {
        return hexToArrayBuffer(new (bignumber_default())(b).toString(16).slice(2));
    }
    if (typeof b === 'bigint') return hexToArrayBuffer(toEvenLength(b.toString(16)));
    if (typeof b === 'string') {
        if (!b.startsWith('0x')) throw new Error('unsupported');
        const hex = b.slice(2);
        if (hex.length % 2 !== 0 || !isHexString(b)) {
            throw new Error('invalid hex string');
        }
        return hexToArrayBuffer(hex);
    }
    // This should return the most compact buffer version without leading zeros, so safe for RLP encodings.
    if (b instanceof (bignumber_default()) || b?._isBigNumber === true) return hexToArrayBuffer(b.toHexString().slice(2));
    throw new Error('unsupported: ');
}
function toBigInt(b) {
    if (typeof b === 'bigint') return b;
    if (typeof b === 'number') return BigInt(b);
    if (b instanceof Uint8Array) return toBigInt(buf(b));
    if (typeof b === 'string' && b.startsWith('0x')) return BigInt(b);
    if (b instanceof (bignumber_default()) || b?._isBigNumber === true) return BigInt(b.toString());
    throw new Error('unsupported');
}

;// CONCATENATED MODULE: ./src/plugins/Referral/helpers/index.tsx









function toChainAddress(chainId, address) {
    if ((0,utils_address/* isValidAddress */.At)(`0x${(0,lib.bytesToHex)([
        ...address
    ])}`)) throw new Error('invalid address');
    const b = new Uint8Array(24);
    // Only numeric network id's are supported in the chain address, with max of uint32.
    // TODO throw on this if wrong
    writeUInt32BE(b, Number(toBigInt(chainId)), 0);
    b.set(address, 4);
    return b;
}
function toChainAddressEthers(chainId, address) {
    return (0,lib.bytesToHex)([
        ...toChainAddress(new (bignumber_default())(chainId), hexToArrayBuffer(address.slice(2)))
    ]);
}
function parseChainAddress(chainAddress) {
    const chainId = toChainId(chainAddress);
    const address = toEvmAddress(chainAddress);
    const isNative = chainId === Number.parseInt(address.slice(Math.max(0, 2 + 16 * 2)), 16);
    return {
        chainId,
        address,
        isNative
    };
}
function toNativeRewardTokenDefn(chainId) {
    const nativeTokenAddr = '0x' + padStart(Number(chainId).toString(16), 40, '0');
    return toChainAddressEthers(chainId, nativeTokenAddr);
}
function expandEvmAddressToBytes32(addr) {
    return `0x000000000000000000000000${addr.slice(2)}`.toLowerCase();
}
function expandBytes24ToBytes32(b24) {
    return `0x${b24.slice(2)}0000000000000000`.toLowerCase();
}
function toEvmAddress(addr) {
    return `0x${addr.slice(Math.max(0, 2 + 4 * 2))}`;
}
function toChainId(addr) {
    return Number.parseInt(addr.slice(2, 2 + 4 * 2), 16);
}
function roundValue(value, tokenDecimals) {
    const valueStr = tokenDecimals === 0 ? Math.ceil(Number(value)).toString() : Number(value).toFixed(5);
    return Number.parseFloat(valueStr);
}
function getRequiredChainId(currentChainId) {
    return constants/* supportedChainId */.w === currentChainId ? currentChainId : constants/* supportedChainId */.w;
}
const referralMetadataReader = (0,dom/* createTypedMessageMetadataReader */.Bi)(constants/* META_KEY */.U6, schema_namespaceObject);
function valueToNumber(value) {
    return Number.parseInt((0,lib_esm/* formatUnits */.bM)(value, 0), 10);
}


/***/ }),

/***/ 42853:
/***/ ((module) => {

module.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"delta","type":"uint128"}],"name":"FarmDepositDecreaseClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"value","type":"uint128"},{"indexed":false,"internalType":"uint128","name":"confirmation","type":"uint128"}],"name":"FarmDepositDecreaseRequested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"delta","type":"uint128"}],"name":"FarmDepositIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sponsor","type":"address"},{"indexed":true,"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"indexed":true,"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"indexed":false,"internalType":"bytes32","name":"farmHash","type":"bytes32"}],"name":"FarmExists","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"value","type":"bytes"}],"name":"FarmMetastate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"indexed":true,"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"indexed":false,"internalType":"uint128","name":"value","type":"uint128"},{"indexed":false,"internalType":"bytes32","name":"leafHash","type":"bytes32"}],"name":"RewardsHarvested","type":"event"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"internalType":"uint128","name":"confirmation","type":"uint128"},{"internalType":"uint128","name":"value","type":"uint128"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claimReferralFarmDecrease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"confirmationsAddr_","type":"address"}],"name":"configure","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"components":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes","name":"value","type":"bytes"}],"internalType":"struct KeyVal[]","name":"metastate","type":"tuple[]"}],"name":"configureMetastate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"devRescueErc20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"devRescueNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"}],"name":"getAccountTokenConfirmationOffset","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"internalType":"int256","name":"idx","type":"int256"}],"name":"getFarmConfirmationReward","outputs":[{"components":[{"internalType":"uint128","name":"reward","type":"uint128"},{"internalType":"uint128","name":"activationConfirmation","type":"uint128"}],"internalType":"struct FarmConfirmationReward","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"farmHash","type":"bytes32"}],"name":"getFarmDepositRemaining","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"components":[{"internalType":"bytes32","name":"farmHash","type":"bytes32"},{"internalType":"uint128","name":"value","type":"uint128"},{"internalType":"uint128","name":"confirmation","type":"uint128"}],"internalType":"struct TokenEntitlement[]","name":"entitlements","type":"tuple[]"}],"internalType":"struct HarvestTokenRequest[]","name":"reqs","type":"tuple[]"},{"internalType":"bytes32[][][]","name":"proofs","type":"bytes32[][][]"}],"name":"harvestRewardsNoGapcheck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"internalType":"uint128","name":"rewardDeposit","type":"uint128"},{"components":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes","name":"value","type":"bytes"}],"internalType":"struct KeyVal[]","name":"metastate","type":"tuple[]"}],"name":"increaseReferralFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes24","name":"rewardTokenDefn","type":"bytes24"},{"internalType":"bytes24","name":"referredTokenDefn","type":"bytes24"},{"internalType":"uint128","name":"value","type":"uint128"}],"name":"requestDecreaseReferralFarm","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);