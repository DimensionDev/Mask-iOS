"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2938,3615],{

/***/ 96182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85646);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62481);


const iOSFix =  true ? __webpack_require__.e(/* import() */ 426).then(__webpack_require__.bind(__webpack_require__, 40426)).then(({ default: ready  })=>ready()
) : 0;
function createDBAccess(opener) {
    let db = undefined;
    if (true) {
        // iOS bug: indexedDB dies randomly
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
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
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
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
        _shared__WEBPACK_IMPORTED_MODULE_0__/* .MaskMessages.events.mobile_app_suspended.on */ .ql.events.mobile_app_suspended.on(clean);
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
        await iOSFix;
        (0,_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.assertEnvironment)(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__.Environment.ManifestBackground);
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

/***/ 44603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95095);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79936);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(6739), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(7764), __webpack_require__.e(4859), __webpack_require__.e(8563), __webpack_require__.e(6158)]).then(__webpack_require__.bind(__webpack_require__, 19714))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 42814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ checkAvailability)
/* harmony export */ });
/* harmony import */ var _masknet_web3_contracts_abis_ITO_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34517);
/* harmony import */ var _masknet_web3_contracts_abis_ITO2_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47744);
/* harmony import */ var _ethersproject_abi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58528);
/* harmony import */ var _extension_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5027);




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

/***/ 34178:
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

// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 27 modules
var constants = __webpack_require__(26223);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var lodash_es_omit = __webpack_require__(96596);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(94232);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(44371);
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
    if (!data?.buyInfos) throw new Error('Failed to load trade info.');
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
    if (!data?.pool) throw new Error('Failed to load payload.');
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
    if (!data?.sellInfos) return [];
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
    if (!data?.buyInfos) return [];
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
var address = __webpack_require__(2239);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
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
var ITO_constants = __webpack_require__(22668);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 11 modules
var EthereumService = __webpack_require__(59471);
// EXTERNAL MODULE: ./src/plugins/ITO/Worker/apis/checkAvailability.ts
var checkAvailability = __webpack_require__(42814);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isAfter/index.js
var isAfter = __webpack_require__(91518);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/isEqual/index.js
var isEqual = __webpack_require__(43055);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/apis/chain.ts











const interFace = new lib_esm_interface/* Interface */.vU(ITO2);
async function chain_getAllPoolsAsSeller(chainId, startBlock, endBlock, sellerAddress) {
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
    const payloadList = (await response.json()).result?.reduce((acc, cur)=>{
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
var Plugin = __webpack_require__(80614);
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
var utils_chainDetailed = __webpack_require__(80526);
;// CONCATENATED MODULE: ./src/plugins/ITO/Worker/services.ts




async function services_getTradeInfo(pid, trader) {
    const tradeInfo = await getTradeInfo(pid, trader);
    return tradeInfo;
}
async function services_getPool(pid) {
    const poolFromChain = await getPool(pid);
    const poolFromDB = await getPoolFromDB(pid);
    if (poolFromDB?.payload.password) poolFromChain.password = poolFromDB.payload.password;
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
    const record = {
        id: payload.pid,
        from: record_?.from || from,
        payload: {
            ...record_?.payload,
            ...payload,
            // reverse password if given payload hasn't got a password
            password: payload.password || (record_?.payload.password ?? '')
        }
    };
    await addPoolIntoDB(record);
}
async function services_getClaimAllPools(chainId, endBlock, swapperAddress) {
    return getClaimAllPools(chainId, endBlock, swapperAddress);
}


/***/ }),

/***/ 34517:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"}],"name":"ClaimSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"remaining_balance","type":"uint256"},{"indexed":false,"internalType":"uint128[]","name":"exchanged_values","type":"uint128[]"}],"name":"DestructSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"total","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"uint256","name":"creation_time","type":"uint256"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"FillSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"swapper","type":"address"},{"indexed":false,"internalType":"address","name":"from_address","type":"address"},{"indexed":false,"internalType":"address","name":"to_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"from_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"to_value","type":"uint256"}],"name":"SwapSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"token_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdraw_balance","type":"uint256"}],"name":"WithdrawSuccess","type":"event"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"check_availability","outputs":[{"internalType":"address[]","name":"exchange_addrs","type":"address[]"},{"internalType":"uint256","name":"remaining","type":"uint256"},{"internalType":"bool","name":"started","type":"bool"},{"internalType":"bool","name":"expired","type":"bool"},{"internalType":"bool","name":"unlocked","type":"bool"},{"internalType":"uint256","name":"unlock_time","type":"uint256"},{"internalType":"uint256","name":"swapped","type":"uint256"},{"internalType":"uint128[]","name":"exchanged_tokens","type":"uint128[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"ito_ids","type":"bytes32[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contract_creator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"}],"name":"destruct","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hash","type":"bytes32"},{"internalType":"uint256","name":"_start","type":"uint256"},{"internalType":"uint256","name":"_end","type":"uint256"},{"internalType":"string","name":"message","type":"string"},{"internalType":"address[]","name":"_exchange_addrs","type":"address[]"},{"internalType":"uint128[]","name":"_ratios","type":"uint128[]"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"},{"internalType":"address","name":"_token_addr","type":"address"},{"internalType":"uint256","name":"_total_tokens","type":"uint256"},{"internalType":"uint256","name":"_limit","type":"uint256"},{"internalType":"address","name":"_qualification","type":"address"}],"name":"fill_pool","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"_unlock_time","type":"uint256"}],"name":"setUnlockTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"bytes32","name":"verification","type":"bytes32"},{"internalType":"bytes32","name":"validation","type":"bytes32"},{"internalType":"uint256","name":"exchange_addr_i","type":"uint256"},{"internalType":"uint128","name":"input_total","type":"uint128"}],"name":"swap","outputs":[{"internalType":"uint256","name":"swapped","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"id","type":"bytes32"},{"internalType":"uint256","name":"addr_i","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

}]);