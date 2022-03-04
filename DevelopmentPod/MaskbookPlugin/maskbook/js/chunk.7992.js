"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7992,6478],{

/***/ 39125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": () => (/* binding */ id)
/* harmony export */ });
/* harmony import */ var _ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69614);
/* harmony import */ var _ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42716);


function id(text) {
    return (0,_ethersproject_keccak256__WEBPACK_IMPORTED_MODULE_0__/* .keccak256 */ .w)((0,_ethersproject_strings__WEBPACK_IMPORTED_MODULE_1__/* .toUtf8Bytes */ .Y0)(text));
}
//# sourceMappingURL=id.js.map

/***/ }),

/***/ 81653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nz": () => (/* binding */ nativeAPI),
/* harmony export */   "_": () => (/* binding */ hasNativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _iOS_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2045);



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 8211).then(__webpack_require__.bind(__webpack_require__, 8211)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new _iOS_channel__WEBPACK_IMPORTED_MODULE_1__/* .iOSWebkitChannel */ .c()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 37867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17692);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27194);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(4477), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(9654)]).then(__webpack_require__.bind(__webpack_require__, 21585))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 49076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "fF": () => (/* binding */ ITO_MetadataReader),
  "th": () => (/* binding */ gcd),
  "cr": () => (/* binding */ isCompactPayload),
  "_x": () => (/* binding */ payloadIntoMask),
  "_D": () => (/* binding */ payloadOutMask),
  "xT": () => (/* binding */ sortTokens),
  "F6": () => (/* binding */ tokenIntoMask)
});

// UNUSED EXPORTS: payloadOutMaskCompact, renderWithITO_Metadata, timestampInMask, timestampOutMask, tokenOutMask

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../typed-message/base/index.ts + 27 modules
var base = __webpack_require__(69492);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var constants = __webpack_require__(75042);
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v1.json
const schema_v1_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"},"name":{"type":"string","title":"name"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"total_remaining":{"type":"string","title":"total_remaining"},"chain_id":{"type":"number","title":"chain_id"},"start_time":{"type":"number","title":"start_time"},"end_time":{"type":"number","title":"end_time"},"unlock_time":{"type":"number","title":"unlock_time"},"qualification_address":{"type":"string","title":"qualification_address"},"regions":{"type":"string","title":"regions"},"creation_time":{"type":"number","title":"creation_time"},"token":{"$ref":"#/definitions/token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"$ref":"#/definitions/token"}]}}},"required":["contract_address","pid","password","message","limit","total","total_remaining","chain_id","start_time","end_time","creation_time","token","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/schema-v2.json
const schema_v2_namespaceObject = JSON.parse('{"type":"object","additionalProperties":true,"definitions":{"token":{"type":"object","additionalProperties":true,"properties":{"chain_id":{"type":"number","title":"chain_id"},"type":{"enum":[0,1],"type":"number","title":"type"},"address":{"description":"token address","type":"string","title":"address"},"name":{"description":"token name","type":"string","title":"name"},"symbol":{"description":"token symbol","type":"string","title":"symbol"},"decimals":{"description":"token decimal","type":"number","title":"decimals"}},"required":["chain_id","type","address","decimals"],"title":"token"},"trader":{"type":"object","additionalProperties":true,"properties":{"address":{"type":"string","title":"address"}},"required":["address"],"title":"trader"}},"properties":{"contract_address":{"type":"string","title":"contract_address"},"pid":{"type":"string","title":"pid"},"password":{"type":"string","title":"password"},"message":{"type":"string","title":"message"},"limit":{"type":"string","title":"limit"},"total":{"type":"string","title":"total"},"chain_id":{"type":"number","title":"chain_id"},"token":{"type":"string","title":"token"},"seller":{"$ref":"#/definitions/trader"},"exchange_amounts":{"type":"array","title":"exchange_amounts","description":"A list of exchange ratios","additionalItems":true,"items":{"anyOf":[{"type":"string","title":"exchange_amount"}]}},"exchange_tokens":{"type":"array","title":"exchange_tokens","description":"A list of exchange tokens","additionalItems":true,"items":{"anyOf":[{"properties":{"address":{"type":"string","title":"address"}}}]}}},"required":["contract_address","pid","password","message","limit","total","chain_id","seller","exchange_amounts","exchange_tokens"]}');
;// CONCATENATED MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts






const reader_v1 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_1 */.uJ, schema_v1_namespaceObject);
const reader_v2 = (0,base/* createTypedMessageMetadataReader */.Bi)(constants/* ITO_MetaKey_2 */.ag, schema_v2_namespaceObject);
const renderWithITO_Metadata = (0,base/* createRenderWithMetadata */.mC)(ITO_MetadataReader);
function ITO_MetadataReader(meta) {
    const v2 = reader_v2(meta);
    if (v2.ok) return v2;
    return reader_v1(meta);
}
/**
 * The greatest common divisor
 */ function gcd(a, b) {
    let a_ = a.abs();
    let b_ = b.abs();
    if (b_.isGreaterThan(a_)) {
        const temp = b_;
        b_ = a_;
        a_ = temp;
    }
    // eslint-disable-next-line no-constant-condition
    while(true){
        if (b_.isZero()) return a_;
        a_ = a_.mod(b_);
        if (a_.isZero()) return b_;
        b_ = b_.mod(a_);
    }
}
function sortTokens(tokenA, tokenB) {
    const addressA = tokenA.address.toLowerCase();
    const addressB = tokenB.address.toLowerCase();
    if ((0,address/* isNativeTokenAddress */.qw)(addressA)) return -1;
    if ((0,address/* isNativeTokenAddress */.qw)(addressB)) return 1;
    return addressA < addressB ? -1 : 1;
}
function timestampInMask(timestamp) {
    return timestamp * 1000;
}
function timestampOutMask(timestamp) {
    return Math.floor(timestamp / 1000);
}
function tokenIntoMask(token) {
    return {
        ...(0,omit/* default */.Z)(token, 'chain_id'),
        chainId: token.chain_id
    };
}
function tokenOutMask(token) {
    return {
        ...(0,omit/* default */.Z)(token, 'chainId'),
        chain_id: token.chainId
    };
}
function payloadIntoMask(payload) {
    return {
        ...payload,
        start_time: timestampInMask(payload.start_time),
        end_time: timestampInMask(payload.end_time),
        creation_time: timestampInMask(payload.creation_time),
        token: tokenIntoMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenIntoMask).sort(sortTokens)
    };
}
function payloadOutMask(payload) {
    return {
        ...payload,
        start_time: timestampOutMask(payload.start_time),
        end_time: timestampOutMask(payload.end_time),
        creation_time: timestampOutMask(payload.creation_time),
        token: tokenOutMask(payload.token),
        exchange_tokens: payload.exchange_tokens.map(tokenOutMask)
    };
}
function payloadOutMaskCompact(payload) {
    return {
        ...payload,
        // HOTFIX of image payload for ITO
        // remove unnecessary chunks of data to reduce the size of payload
        token: tokenOutMask(payload.token),
        contract_address: '',
        message: '',
        start_time: 0,
        end_time: 0,
        creation_time: 0,
        limit: '0',
        total_remaining: '0',
        exchange_amounts: [],
        exchange_tokens: []
    };
}
function isCompactPayload(payload) {
    return !payload.exchange_tokens.length;
}


/***/ }),

/***/ 51576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ checkAvailability)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58528);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45925);




const interFaceV1 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__);
const interFaceV2 = new _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__/* .Interface */ .vU(_masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__);
// ITO Contract readonly method, read it no matter on whatever chains you are.
async function checkAvailability(pid, from, to, chainId, isV1 = false) {
    const callData = (isV1 ? interFaceV1 : interFaceV2).encodeFunctionData('check_availability', [
        pid
    ]);
    const data = await _extension_service__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Ethereum.call */ .ZP.Ethereum.call({
        to,
        from,
        data: callData
    }, {
        chainId
    });
    return decodeResult(data, isV1);
}
function decodeResult(data, isV1) {
    const results = (isV1 ? interFaceV1 : interFaceV2).decodeFunctionResult('check_availability', data);
    return {
        exchange_addrs: results[0],
        remaining: +parseHexToInt(results[1]),
        started: results[2],
        expired: results[3],
        destructed: results[4],
        unlock_time: parseHexToInt(results[5]),
        swapped: parseHexToInt(results[6]),
        exchanged_tokens: parse(results[7]).map(parseHexToInt),
        ...isV1 ? {} : {
            claimed: results[8],
            start_time: parseHexToInt(results[9]),
            end_time: parseHexToInt(results[10]),
            qualification_addr: results[11]
        }
    };
}
function parse(input) {
    return JSON.parse(JSON.stringify(input));
}
function parseHexToInt(input) {
    return Number.parseInt(parse(input).hex, 16).toString();
}


/***/ }),

/***/ 45684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "discoverPool": () => (/* binding */ discoverPool),
  "getAllPoolsAsBuyer": () => (/* binding */ services_getAllPoolsAsBuyer),
  "getAllPoolsAsSeller": () => (/* binding */ services_getAllPoolsAsSeller),
  "getClaimAllPools": () => (/* binding */ services_getClaimAllPools),
  "getPool": () => (/* binding */ services_getPool),
  "getTradeInfo": () => (/* binding */ services_getTradeInfo)
});

// EXTERNAL MODULE: ../web3-shared/evm/constants/index.ts + 26 modules
var constants = __webpack_require__(92211);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var lodash_es_omit = __webpack_require__(96596);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(63361);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(49076);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/apis/subgraph.ts





const TRADER_FIELDS = `
    address
    name
`;
const TOKEN_FIELDS = `
    chain_id
    type
    address
    name
    symbol
    decimals
`;
const POOL_FIELDS = `
    contract_address
    qualification_address
    pid
    block_number
    password
    message
    limit
    total
    total_remaining
    chain_id
    start_time
    end_time
    creation_time
    token {
        ${TOKEN_FIELDS}
    }
    seller {
        address
    }
    exchange_amounts
    exchange_tokens {
        ${TOKEN_FIELDS}
    }
`;
async function fetchFromMarketSubgraph(query, chainId) {
    const subgraphURL = (0,constants/* getITOConstants */.af)(chainId ? chainId : settings/* currentChainIdSettings.value */.wU.value).SUBGRAPH_URL;
    if (!subgraphURL) return null;
    try {
        const response = await fetch(subgraphURL, {
            method: 'POST',
            mode: 'cors',
            body: json_stable_stringify_default()({
                query
            })
        });
        if (!response.ok) return null;
        const { data  } = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}
async function getTradeInfo(pid, trader) {
    const data = await fetchFromMarketSubgraph(`
    {
        buyInfos (where: { pool: "${pid.toLowerCase()}", buyer: "${trader.toLowerCase()}" }) {
            buyer {
                ${TRADER_FIELDS}
            }
            token {
                ${TOKEN_FIELDS}
            }
            amount
            amount_sold
            amount_bought
        }
        sellInfos (where: { pool: "${pid.toLowerCase()}", seller: "${trader.toLowerCase()}" }) {
            seller {
                address
            }
            amount
        }
        destructInfos (where: { pool: "${pid.toLowerCase()}", seller: "${trader.toLowerCase()}" }) {
            seller {
                address
            }
            amount
        }
    }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.buyInfos)) throw new Error('Failed to load trade info.');
    return {
        buyInfo: (0,head/* default */.Z)(data.buyInfos),
        sellInfo: (0,head/* default */.Z)(data.sellInfos),
        destructInfo: (0,head/* default */.Z)(data.destructInfos)
    };
}
async function getPool(pid) {
    const data = await fetchFromMarketSubgraph(`
    {
        pool (id: "${pid.toLowerCase()}") {
            ${POOL_FIELDS}
        }
    }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.pool)) throw new Error('Failed to load payload.');
    return (0,helpers/* payloadIntoMask */._x)(data.pool);
}
async function getAllPoolsAsSeller(address, page, chainId) {
    const data = await fetchFromMarketSubgraph(`
    {
        sellInfos ( orderBy: timestamp, orderDirection: desc, first: 50, skip: ${page * 50}, where: { seller: "${address.toLowerCase()}" }) {
            pool {
                ${POOL_FIELDS}
                exchange_in_volumes
                exchange_out_volumes
            }
        }
    }
    `, chainId);
    if (!(data === null || data === void 0 ? void 0 : data.sellInfos)) return [];
    return data.sellInfos.map((x)=>{
        const pool = payloadIntoMask(omit(x.pool, [
            'exchange_in_volumes',
            'exchange_out_volumes'
        ]));
        return {
            pool,
            exchange_in_volumes: x.pool.exchange_in_volumes,
            exchange_out_volumes: x.pool.exchange_out_volumes
        };
    });
}
async function getAllPoolsAsBuyer(address, chainId) {
    const data = await fetchFromMarketSubgraph(`
    {
        buyInfos (where: { buyer: "${address.toLowerCase()}" }) {
            pool {
                ${POOL_FIELDS}
                exchange_in_volumes
                exchange_out_volumes
            }
        }
    }
    `, chainId);
    if (!(data === null || data === void 0 ? void 0 : data.buyInfos)) return [];
    return data.buyInfos.map((x)=>{
        const pool = (0,helpers/* payloadIntoMask */._x)((0,lodash_es_omit/* default */.Z)(x.pool, [
            'exchange_in_volumes',
            'exchange_out_volumes'
        ]));
        return {
            pool,
            exchange_in_volumes: x.pool.exchange_in_volumes,
            exchange_out_volumes: x.pool.exchange_out_volumes
        };
    });
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/interface.js
var lib_esm_interface = __webpack_require__(58528);
// EXTERNAL MODULE: ../web3-contracts/abis/ITO2.json
var ITO2 = __webpack_require__(47744);
// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../../node_modules/.pnpm/bignumber.js@9.0.2/node_modules/bignumber.js/bignumber.js
var bignumber = __webpack_require__(42263);
var bignumber_default = /*#__PURE__*/__webpack_require__.n(bignumber);
// EXTERNAL MODULE: ./src/plugins/ITO/constants.ts
var ITO_constants = __webpack_require__(75042);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 11 modules
var EthereumService = __webpack_require__(9338);
// EXTERNAL MODULE: ./src/plugins/ITO/Worker/apis/checkAvailability.ts
var checkAvailability = __webpack_require__(51576);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(91518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isEqual/index.js
var isEqual = __webpack_require__(43055);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/apis/chain.ts











const interFace = new lib_esm_interface/* Interface */.vU(ITO2);
async function chain_getAllPoolsAsSeller(chainId, startBlock, endBlock, sellerAddress) {
    var ref;
    const { EXPLORER_API , API_KEYS =[]  } = (0,constants/* getExplorerConstants */.i1)(chainId);
    const { ITO2_CONTRACT_ADDRESS  } = (0,constants/* getITOConstants */.af)(chainId);
    if (!EXPLORER_API || !ITO2_CONTRACT_ADDRESS || !startBlock) return [];
    // #region
    // 1. Filter out `Fill_Pool` transactions,
    // 2. Retrieve payload major data from its decoded input param.
    const response = await fetch(dist_default()(EXPLORER_API, {
        apikey: (0,head/* default */.Z)(API_KEYS),
        action: 'txlist',
        module: 'account',
        sort: 'desc',
        startBlock,
        endBlock,
        address: ITO2_CONTRACT_ADDRESS
    }));
    if (!response.ok) return [];
    const payloadList = (ref = (await response.json()).result) === null || ref === void 0 ? void 0 : ref.reduce((acc, cur)=>{
        if (!(0,address/* isSameAddress */.Wr)(cur.from, sellerAddress)) return acc;
        try {
            const decodedInputParam = interFace.decodeFunctionData('fill_pool', cur.input);
            const [sellerName = '', message = '', regions = '-'] = decodedInputParam._message.split(ITO_constants/* MSG_DELIMITER */.Z3);
            const payload = {
                end_time: (decodedInputParam._end.toNumber() + ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm / 1000) * 1000,
                exchange_token_addresses: decodedInputParam._exchange_addrs,
                limit: decodedInputParam._limit.toString(),
                message,
                qualification_address: decodedInputParam._qualification,
                exchange_amounts: decodedInputParam._ratios.map((v)=>v.toString()
                ),
                start_time: (decodedInputParam._start.toNumber() + ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm / 1000) * 1000,
                token_address: decodedInputParam._token_addr,
                total: decodedInputParam._total_tokens.toString(),
                unlock_time: (decodedInputParam._unlock_time.toNumber() + ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm / 1000) * 1000,
                seller: {
                    address: cur.from,
                    name: sellerName
                },
                contract_address: cur.to,
                chain_id: chainId,
                regions,
                block_number: Number(cur.blockNumber),
                // #region Retrieve at step 3
                pid: '',
                creation_time: 0,
                // #endregion
                // #region Retrieve at step 4
                total_remaining: '',
                // #endregion
                // #region Retrieve from database
                password: ''
            };
            return acc.concat({
                payload,
                hash: cur.hash
            });
        } catch  {
            return acc;
        }
    }, []);
    const eventLogResponse = await Promise.allSettled(payloadList.map(async (entity)=>{
        const result = await (0,EthereumService.getTransactionReceipt)(entity.hash);
        if (!result) return null;
        const log1 = result.logs.find((log)=>(0,address/* isSameAddress */.Wr)(log.address, ITO2_CONTRACT_ADDRESS)
        );
        if (!log1) return null;
        const eventParams = interFace.decodeEventLog('FillSuccess', log1.data, log1.topics);
        entity.payload.pid = eventParams.id;
        entity.payload.creation_time = eventParams.creation_time.toNumber();
        // 4. retrieve `total_remaining`, `exchange_in_volumes` and `exchange_out_volumes`
        const data = await (0,checkAvailability/* checkAvailability */.g)(entity.payload.pid, entity.payload.seller.address, entity.payload.contract_address, chainId);
        entity.payload.total_remaining = new (bignumber_default())(data.remaining).toString();
        return {
            pool: entity.payload,
            exchange_in_volumes: data.exchanged_tokens,
            // Calculate out later after fetching token detailed.
            exchange_out_volumes: []
        };
    }));
    // #endregion
    return eventLogResponse.map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter((v)=>Boolean(v)
    );
}
async function getClaimAllPools(chainId, endBlock, swapperAddress) {
    const { EXPLORER_API , API_KEYS =[]  } = (0,constants/* getExplorerConstants */.i1)(chainId);
    const { ITO2_CONTRACT_ADDRESS , ITO2_CONTRACT_CREATION_BLOCK_HEIGHT: startBlock  } = (0,constants/* getITOConstants */.af)(chainId);
    if (!EXPLORER_API || !ITO2_CONTRACT_ADDRESS || !startBlock) return [];
    // #region
    // 1. Filter out `swap` transactions,
    // 2. Retrieve payload major data from its decoded input param.
    const response = await fetch(dist_default()(EXPLORER_API, {
        apikey: (0,head/* default */.Z)(API_KEYS),
        action: 'txlist',
        module: 'account',
        sort: 'desc',
        startBlock,
        endBlock,
        address: ITO2_CONTRACT_ADDRESS
    }));
    if (!response.ok) return [];
    const result1 = (await response.json()).result;
    if (!Array.isArray(result1)) return [];
    const swapRawData = result1.reduce((acc, cur)=>{
        if (!(0,address/* isSameAddress */.Wr)(cur.from, swapperAddress)) return acc;
        try {
            const decodedInputParam = interFace.decodeFunctionData('swap', cur.input);
            return acc.concat({
                txHash: cur.hash,
                pid: decodedInputParam.id
            });
        } catch  {
            return acc;
        }
    }, []);
    // 3. filter out pools that have unlock_time.
    const swapRawFilteredData = (await Promise.allSettled(swapRawData.map(async (value)=>{
        const availability = await (0,checkAvailability/* checkAvailability */.g)(value.pid, swapperAddress, ITO2_CONTRACT_ADDRESS, chainId);
        const unlockTime = new Date(Number(availability.unlock_time) * 1000);
        if ((0,isEqual/* default */.Z)(unlockTime, new Date(ITO_constants/* ITO_CONTRACT_BASE_TIMESTAMP */.Dm)) || availability.claimed) return null;
        return {
            ...value,
            unlockTime,
            isClaimable: (0,isAfter/* default */.Z)(Date.now(), unlockTime)
        };
    }))).map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter((v)=>Boolean(v)
    );
    // 4. Retrieve `SwapSuccess` Event to get tokenDetailed
    const swappedTokenUnmergedList = (await Promise.allSettled(swapRawFilteredData.map(async (value)=>{
        const result = await (0,EthereumService.getTransactionReceipt)(value.txHash, {
            chainId
        });
        if (!result) return null;
        const log2 = result.logs.find((log)=>(0,address/* isSameAddress */.Wr)(log.address, ITO2_CONTRACT_ADDRESS)
        );
        if (!log2) return null;
        const eventParams = interFace.decodeEventLog('SwapSuccess', log2.data, log2.topics);
        return {
            pids: [
                value.pid
            ],
            amount: new (bignumber_default())(Number(eventParams.to_value)),
            isClaimable: value.isClaimable,
            unlockTime: value.unlockTime,
            token: {
                address: eventParams.to_address,
                type: types/* EthereumTokenType.ERC20 */.Dr.ERC20
            }
        };
    }))).map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter((v)=>Boolean(v)
    );
    // 5. merge same swap token pools into one
    const swappedTokenList = swappedTokenUnmergedList.reduce((acc, cur)=>{
        if (acc.some(checkClaimable(cur)) && cur.isClaimable) {
            // merge same claimable tokens to one
            const existToken = acc.find(checkClaimable(cur));
            const existTokenIndex = acc.findIndex(checkClaimable(cur));
            acc[existTokenIndex] = mergeTokens(existToken, cur);
        } else if (acc.some(checkUnlockTimeEqual(cur))) {
            // merge same unlock time tokens to one
            const existToken = acc.find(checkUnlockTimeEqual(cur));
            const existTokenIndex = acc.findIndex(checkUnlockTimeEqual(cur));
            acc[existTokenIndex] = mergeTokens(existToken, cur);
        } else {
            acc.push(cur);
        }
        return acc;
    }, []);
    return swappedTokenList;
}
function mergeTokens(a, b) {
    a.pids = a.pids.concat(b.pids);
    a.amount = a.amount.plus(b.amount);
    return a;
}
function checkUnlockTimeEqual(cur) {
    return (t)=>(0,address/* isSameAddress */.Wr)(t.token.address, cur.token.address) && (0,isEqual/* default */.Z)(t.unlockTime, cur.unlockTime)
    ;
}
function checkClaimable(cur) {
    return (t)=>(0,address/* isSameAddress */.Wr)(t.token.address, cur.token.address) && t.isClaimable
    ;
}

// EXTERNAL MODULE: ./src/database/Plugin/index.ts + 2 modules
var Plugin = __webpack_require__(94256);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/database.ts



const PoolDatabase = (0,Plugin/* createPluginDatabase */.X2)(ITO_constants/* ITO_PluginID */.yV);
async function database_getAllPoolsAsSeller(ids) {
    const records = [];
    for await (const { value: record  } of PoolDatabase.iterate('ito-pool')){
        if (ids.includes(record.payload.pid)) records.push(PoolRecordOutDB(record));
    }
    return records;
}
async function getPoolFromDB(id) {
    const record = await PoolDatabase.get('ito-pool', id);
    return record ? PoolRecordOutDB(record) : undefined;
}
async function addPoolIntoDB(record) {
    if (await PoolDatabase.has('ito-pool', record.id)) return;
    return PoolDatabase.add(PoolRecordIntoDB(record));
}
function removePoolFromDB(id) {
    return PoolDatabase.remove('ito-pool', id);
}
function PoolRecordIntoDB(x) {
    const record = x;
    record.type = 'ito-pool';
    return record;
}
function PoolRecordOutDB(x) {
    const record = x;
    return (0,lodash_es_omit/* default */.Z)(record, [
        'type'
    ]);
}

// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var utils_chainDetailed = __webpack_require__(22229);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/services.ts




async function services_getTradeInfo(pid, trader) {
    const tradeInfo = await getTradeInfo(pid, trader);
    return tradeInfo;
}
async function services_getPool(pid) {
    const poolFromChain = await getPool(pid);
    const poolFromDB = await getPoolFromDB(pid);
    if (poolFromDB === null || poolFromDB === void 0 ? void 0 : poolFromDB.payload.password) poolFromChain.password = poolFromDB.payload.password;
    return poolFromChain;
}
async function services_getAllPoolsAsSeller(address, endBlock, chainId) {
    const { ITO2_CONTRACT_CREATION_BLOCK_HEIGHT  } = (0,constants/* getITOConstants */.af)(chainId);
    // #region Get data from chain.
    const poolsFromChain = await chain_getAllPoolsAsSeller(chainId, ITO2_CONTRACT_CREATION_BLOCK_HEIGHT, endBlock, address);
    // #endregion
    // #region Inject password from database
    const poolsFromDB = await database_getAllPoolsAsSeller(poolsFromChain.map((x)=>x.pool.pid
    ));
    return poolsFromChain.map((x)=>{
        const pool = poolsFromDB.find((y)=>y.payload.pid === x.pool.pid
        );
        if (!pool) return x;
        return {
            ...x,
            pool: {
                ...x.pool,
                password: pool.payload.password
            }
        };
    }).filter((x)=>x.pool.chain_id === chainId
    );
// #endregion
}
async function services_getAllPoolsAsBuyer(address, chainId) {
    const chainDetailed = (0,utils_chainDetailed/* getChainDetailed */.$G)(chainId);
    if (!chainDetailed) return [];
    const pools = await getAllPoolsAsBuyer(address, chainId);
    return pools.filter((x)=>x.pool.chain_id === chainId
    );
}
async function discoverPool(from, payload) {
    if (!payload.pid) return;
    if (!payload.password) return;
    const record_ = await getPoolFromDB(payload.pid);
    var _password;
    const record = {
        id: payload.pid,
        from: (record_ === null || record_ === void 0 ? void 0 : record_.from) || from,
        payload: {
            ...record_ === null || record_ === void 0 ? void 0 : record_.payload,
            ...payload,
            // reverse password if given payload hasn't got a password
            password: payload.password || ((_password = record_ === null || record_ === void 0 ? void 0 : record_.payload.password) !== null && _password !== void 0 ? _password : '')
        }
    };
    await addPoolIntoDB(record);
}
async function services_getClaimAllPools(chainId, endBlock, swapperAddress) {
    return getClaimAllPools(chainId, endBlock, swapperAddress);
}


/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteDB),
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.openDB),
/* harmony export */   "re": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.wrap)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ }),

/***/ 34517:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"bytes32","name":"validation","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);