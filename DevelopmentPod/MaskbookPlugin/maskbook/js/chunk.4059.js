"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4059,3291],{

/***/ 49100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ns": () => (/* binding */ createDBAccessWithAsyncUpgrade),
/* harmony export */   "Z_": () => (/* binding */ createDBAccess),
/* harmony export */   "_X": () => (/* binding */ createTransaction)
/* harmony export */ });
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44162);
/* harmony import */ var _dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dimensiondev_holoflows_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70609);


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
        if ((db === null || db === void 0 ? void 0 : db.version) === latestVersion) return db;
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
            db === null || db === void 0 ? void 0 : db.close();
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

/***/ 81653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nz": () => (/* binding */ nativeAPI),
/* harmony export */   "_": () => (/* binding */ hasNativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19245);
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
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63151);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(8117), __webpack_require__.e(2943), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(1922), __webpack_require__.e(4859), __webpack_require__.e(876), __webpack_require__.e(6012)]).then(__webpack_require__.bind(__webpack_require__, 21585))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 73166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addRedPacketNft": () => (/* reexport */ addRedPacketNft),
  "discoverRedPacket": () => (/* binding */ discoverRedPacket),
  "getNftRedPacketHistory": () => (/* binding */ services_getNftRedPacketHistory),
  "getRedPacketHistory": () => (/* binding */ services_getRedPacketHistory),
  "getRedPacketNft": () => (/* reexport */ getRedPacketNft),
  "updateRedPacketNft": () => (/* reexport */ updateRedPacketNft)
});

// EXTERNAL MODULE: ../web3-shared/evm/constants/constants.ts + 26 modules
var constants = __webpack_require__(24403);
// EXTERNAL MODULE: ../../node_modules/.pnpm/json-stable-stringify@1.0.1/node_modules/json-stable-stringify/index.js
var json_stable_stringify = __webpack_require__(92304);
var json_stable_stringify_default = /*#__PURE__*/__webpack_require__.n(json_stable_stringify);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/plugins/ITO/SNSAdaptor/helpers.ts + 2 modules
var helpers = __webpack_require__(49076);
// EXTERNAL MODULE: ./src/plugins/Wallet/settings.ts
var settings = __webpack_require__(63361);
// EXTERNAL MODULE: ../web3-shared/evm/utils/chainDetailed.ts
var chainDetailed = __webpack_require__(22229);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/pick.js + 1 modules
var pick = __webpack_require__(46428);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/apis/nftRedpacket.ts





const redPacketBasicKeys = [
    'contract_address',
    'contract_version',
    'rpid',
    'txid',
    'password',
    'shares',
    'total',
    'creation_time',
    'duration', 
];
const TOKEN_FIELDS = `
    address
    name
    symbol
    chain_id
`;
const USER_FIELDS = `
    address
    name
`;
const RED_PACKET_FIELDS = `
    rpid
    txid
    contract_address
    contract_version
    password
    shares
    message
    name
    total
    creation_time
    duration
    chain_id
    token: token_contract  {
        ${TOKEN_FIELDS}
    }
    token_contract {
        ${TOKEN_FIELDS}
    }
    token_ids
    creator {
        ${USER_FIELDS}
    }
    claimers {
        ${USER_FIELDS}
    }
`;
async function fetchFromNFTRedPacketSubgraph(query) {
    const subgraphURL = (0,constants/* getNftRedPacketConstants */.pS)(settings/* currentChainIdSettings.value */.wU.value).SUBGRAPH_URL;
    if (!subgraphURL) return null;
    const response = await fetch(subgraphURL, {
        method: 'POST',
        mode: 'cors',
        body: json_stable_stringify_default()({
            query
        })
    });
    const { data  } = await response.json();
    return data;
}
async function getNftRedPacketTxid(rpid) {
    var ref;
    const data = await fetchFromNFTRedPacketSubgraph(`
    {
        nftredPackets (where: { rpid: "${rpid.toLowerCase()}" }) {
            ${RED_PACKET_FIELDS}
        }
    }
    `);
    return (ref = first(data === null || data === void 0 ? void 0 : data.redPackets)) === null || ref === void 0 ? void 0 : ref.txid;
}
const PAGE_SIZE = 5;
async function getNftRedPacketHistory(address, page) {
    const data = await fetchFromNFTRedPacketSubgraph(`
    {
        nftredPackets (
          where: { creator: "${address.toLowerCase()}" },
          orderBy: creation_time,
          orderDirection: desc,
          first: ${PAGE_SIZE},
          skip: ${(page - 1) * PAGE_SIZE}
        ) {
            ${RED_PACKET_FIELDS}
        }
    }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.nftredPackets)) return [];
    return data.nftredPackets.map((x)=>{
        const nftRedPacketSubgraphInMask = {
            ...x,
            token: (0,helpers/* tokenIntoMask */.F6)(x.token),
            duration: x.duration * 1000,
            creation_time: x.creation_time * 1000
        };
        const redPacketBasic = (0,pick/* default */.Z)(nftRedPacketSubgraphInMask, redPacketBasicKeys);
        const network = (0,chainDetailed/* getChainName */.qz)(nftRedPacketSubgraphInMask.chain_id);
        const sender = {
            address: nftRedPacketSubgraphInMask.creator.address,
            name: nftRedPacketSubgraphInMask.creator.name,
            message: nftRedPacketSubgraphInMask.message
        };
        const payload = {
            sender,
            network,
            token_type: types/* EthereumTokenType.ERC721 */.Dr.ERC721,
            token: (0,pick/* default */.Z)(nftRedPacketSubgraphInMask.token, [
                'symbol',
                'address',
                'name',
                'decimals'
            ]),
            ...redPacketBasic
        };
        return {
            payload,
            ...nftRedPacketSubgraphInMask
        };
    });
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/apis/erc20Redpacket.ts





const erc20Redpacket_TOKEN_FIELDS = `
    type
    address
    name
    symbol
    decimals
    chain_id
`;
const erc20Redpacket_USER_FIELDS = `
    address
    name
`;
const erc20Redpacket_RED_PACKET_FIELDS = `
    rpid
    txid
    contract_address
    block_number
    contract_version
    password
    shares
    message
    name
    is_random
    total
    total_remaining
    creation_time
    duration
    chain_id
    token {
        ${erc20Redpacket_TOKEN_FIELDS}
    }
    creator {
        ${erc20Redpacket_USER_FIELDS}
    }
    claimers {
        ${erc20Redpacket_USER_FIELDS}
    }
`;
async function fetchFromRedPacketSubgraph(query) {
    const { SUBGRAPH_URL  } = (0,constants/* getRedPacketConstants */.GV)(settings/* currentChainIdSettings.value */.wU.value);
    if (!SUBGRAPH_URL) return null;
    try {
        const response = await fetch(SUBGRAPH_URL, {
            method: 'POST',
            mode: 'cors',
            body: json_stable_stringify_default()({
                query
            })
        });
        const { data  } = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}
async function getRedPacketTxid(rpid) {
    var ref;
    const data = await fetchFromRedPacketSubgraph(`
    {
        redPackets (where: { rpid: "${rpid.toLowerCase()}" }) {
            txid
        }
    }
    `);
    return (ref = (0,head/* default */.Z)(data === null || data === void 0 ? void 0 : data.redPackets)) === null || ref === void 0 ? void 0 : ref.txid;
}
async function getRedPacketHistory(address, chainId) {
    const { NATIVE_TOKEN_ADDRESS  } = getTokenConstants(currentChainIdSettings.value);
    const data = await fetchFromRedPacketSubgraph(`
    {
        redPackets (where: { creator: "${address.toLowerCase()}" }) {
            ${erc20Redpacket_RED_PACKET_FIELDS}
        }
    }
    `);
    if (!(data === null || data === void 0 ? void 0 : data.redPackets)) return [];
    return data.redPackets.map((x)=>{
        const token = tokenIntoMask({
            ...x.token
        });
        if (isSameAddress(x.token.address, NATIVE_TOKEN_ADDRESS)) {
            var ref, ref1;
            token.name = (ref = getChainDetailed(x.token.chain_id)) === null || ref === void 0 ? void 0 : ref.nativeCurrency.name;
            token.symbol = (ref1 = getChainDetailed(chainId)) === null || ref1 === void 0 ? void 0 : ref1.nativeCurrency.symbol;
        }
        const redpacketPayload = {
            contract_address: x.contract_address,
            rpid: x.rpid,
            txid: x.txid,
            password: '',
            shares: x.shares,
            is_random: x.is_random,
            total: x.total,
            creation_time: x.creation_time * 1000,
            duration: x.duration * 1000,
            sender: {
                address: x.creator.address,
                name: x.creator.name,
                message: x.message
            },
            contract_version: x.contract_version,
            network: resolveChainName(x.chain_id),
            token: token,
            claimers: x.claimers,
            total_remaining: x.total_remaining,
            block_number: x.block_number
        };
        return redpacketPayload;
    }).sort((a, b)=>b.creation_time - a.creation_time
    );
}


;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/apis/subgraph.ts



// EXTERNAL MODULE: ../../node_modules/.pnpm/urlcat@2.0.4/node_modules/urlcat/dist/index.js
var dist = __webpack_require__(19802);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var address = __webpack_require__(66580);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+abi@5.4.0/node_modules/@ethersproject/abi/lib.esm/interface.js
var lib_esm_interface = __webpack_require__(58528);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 11 modules
var EthereumService = __webpack_require__(9338);
// EXTERNAL MODULE: ../web3-contracts/abis/HappyRedPacketV4.json
var HappyRedPacketV4 = __webpack_require__(5261);
// EXTERNAL MODULE: ./src/extension/service.ts
var service = __webpack_require__(45925);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/apis/checkAvailability.ts



const interFace = new lib_esm_interface/* Interface */.vU(HappyRedPacketV4);
// red-packet contract readonly method, read it no matter on whatever chains you are.
async function checkAvailability(pid, from, to, chainId) {
    const callData = interFace.encodeFunctionData('check_availability', [
        pid
    ]);
    const data = await service/* default.Ethereum.call */.ZP.Ethereum.call({
        to,
        from,
        data: callData
    }, {
        chainId
    });
    return decodeResult(data);
}
function decodeResult(data) {
    const results = interFace.decodeFunctionResult('check_availability', data);
    return {
        token_address: results[0],
        balance: parseHexToInt(results[1]),
        total: +parseHexToInt(results[2]),
        claimed: +parseHexToInt(results[3]),
        expired: Boolean(results[4]),
        claimed_amount: parseHexToInt(results[5])
    };
}
function parse(input) {
    return JSON.parse(JSON.stringify(input));
}
function parseHexToInt(input) {
    return Number.parseInt(parse(input).hex, 16).toString();
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/apis/chain.ts







const chain_interFace = new lib_esm_interface/* Interface */.vU(HappyRedPacketV4);
async function chain_getRedPacketHistory(chainId, startBlock, endBlock, senderAddress) {
    const { EXPLORER_API , API_KEYS =[]  } = (0,constants/* getExplorerConstants */.i1)(chainId);
    const { HAPPY_RED_PACKET_ADDRESS_V4  } = (0,constants/* getRedPacketConstants */.GV)(chainId);
    if (!EXPLORER_API || !HAPPY_RED_PACKET_ADDRESS_V4 || !startBlock) return [];
    // #region
    // 1. Filter out `create_red_packet` transactions,
    // 2. Retrieve payload major data from its decoded input param.
    const response = await fetch(dist_default()(EXPLORER_API, {
        apikey: (0,head/* default */.Z)(API_KEYS),
        action: 'txlist',
        module: 'account',
        sort: 'desc',
        startBlock,
        endBlock,
        address: HAPPY_RED_PACKET_ADDRESS_V4
    }));
    if (!response.ok) return [];
    const { result: result1  } = await response.json();
    if (!result1.length) return [];
    const payloadList = result1.reduce((acc, cur)=>{
        if (!(0,address/* isSameAddress */.Wr)(cur.from, senderAddress)) return acc;
        try {
            const decodedInputParam = chain_interFace.decodeFunctionData('create_red_packet', cur.input);
            const redpacketPayload = {
                contract_address: cur.to,
                txid: cur.hash,
                shares: decodedInputParam._number.toNumber(),
                is_random: decodedInputParam._ifrandom,
                total: decodedInputParam._total_tokens.toString(),
                duration: decodedInputParam._duration.toNumber() * 1000,
                block_number: Number(cur.blockNumber),
                contract_version: 4,
                network: (0,chainDetailed/* getChainName */.qz)(chainId),
                token_address: decodedInputParam._token_addr,
                sender: {
                    address: senderAddress,
                    name: decodedInputParam._name,
                    message: decodedInputParam._message
                },
                // #region Retrieve at step 3
                rpid: '',
                creation_time: 0,
                // #endregion
                // #region Retrieve at step 4
                total_remaining: '',
                claimers: [],
                // #endregion
                // #region Retrieve from database
                password: ''
            };
            return acc.concat(redpacketPayload);
        } catch  {
            return acc;
        }
    }, []);
    const eventLogResponse = await Promise.allSettled(payloadList.map(async (payload)=>{
        const result = await (0,EthereumService.getTransactionReceipt)(payload.txid);
        if (!result) return null;
        const log1 = result.logs.find((log)=>(0,address/* isSameAddress */.Wr)(log.address, HAPPY_RED_PACKET_ADDRESS_V4)
        );
        if (!log1) return null;
        const eventParams = chain_interFace.decodeEventLog('CreationSuccess', log1.data, log1.topics);
        payload.rpid = eventParams.id;
        payload.creation_time = eventParams.creation_time.toNumber() * 1000;
        // 4. retrieve `claimers` and `total_remaining`
        const data = await checkAvailability(payload.rpid, payload.sender.address, payload.contract_address, chainId);
        payload.claimers = Array.from({
            length: data.claimed
        }).map(()=>({
                address: '',
                name: ''
            })
        );
        payload.total_remaining = data.balance;
        return payload;
    }));
    // #endregion
    return eventLogResponse.map((v)=>v.status === 'fulfilled' && v.value ? v.value : null
    ).filter((v)=>Boolean(v)
    );
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/omit.js + 3 modules
var omit = __webpack_require__(96596);
// EXTERNAL MODULE: ./src/plugins/RedPacket/constants.ts
var RedPacket_constants = __webpack_require__(29286);
// EXTERNAL MODULE: ./src/database/Plugin/index.ts + 2 modules
var Plugin = __webpack_require__(94256);
;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/database.ts



const RedPacketDatabase = (0,Plugin/* createPluginDatabase */.X2)(RedPacket_constants/* RedPacketPluginID */.jY);
async function getAllRedpackets(ids) {
    const records = [];
    for await (const record of RedPacketDatabase.iterate('red-packet')){
        if (ids.includes(record.value.id)) records.push(RedPacketRecordOutDB(record.value));
    }
    return records;
}
async function getRedPacket(id) {
    const record = await RedPacketDatabase.get('red-packet', id);
    return record ? RedPacketRecordOutDB(record) : undefined;
}
async function addRedPacket(record) {
    return RedPacketDatabase.add(RedPacketRecordIntoDB(record));
}
function RedPacketRecordIntoDB(x) {
    const record = x;
    record.type = 'red-packet';
    return record;
}
function RedPacketRecordOutDB(x) {
    const record = x;
    return (0,omit/* default */.Z)(record, [
        'type'
    ]);
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/databaseForNft.ts


async function getRedPacketNft(id) {
    const record = await RedPacketDatabase.get('red-packet-nft', id);
    return record ? RedPacketNftRecordOutDB(record) : undefined;
}
async function addRedPacketNft(record) {
    return RedPacketDatabase.add(RedPacketNftRecordIntoDB(record));
}
async function updateRedPacketNft(newRecord) {
    if (!newRecord.id) {
        return;
    }
    const record = await RedPacketDatabase.get('red-packet-nft', newRecord.id);
    if (record) {
        await RedPacketDatabase.remove('red-packet-nft', newRecord.id);
    }
    await RedPacketDatabase.add(newRecord);
}
function RedPacketNftRecordOutDB(x) {
    const record = x;
    return (0,omit/* default */.Z)(record, [
        'type'
    ]);
}
function RedPacketNftRecordIntoDB(x) {
    const record = x;
    record.type = 'red-packet-nft';
    return record;
}

;// CONCATENATED MODULE: ./src/plugins/RedPacket/Worker/services.ts






async function discoverRedPacket(record) {
    if (record.contract_version === 1) {
        const txid = await getRedPacketTxid(record.id);
        if (!txid) return;
        record.id = txid;
    }
    addRedPacket(record);
}
async function services_getRedPacketHistory(address, chainId, endBlock) {
    const { HAPPY_RED_PACKET_ADDRESS_V4_BLOCK_HEIGHT  } = (0,constants/* getRedPacketConstants */.GV)(chainId);
    const redpacketsFromChain = await chain_getRedPacketHistory(chainId, HAPPY_RED_PACKET_ADDRESS_V4_BLOCK_HEIGHT, endBlock, address);
    // #region Inject password from database
    const redpacketsFromDatabase = await getAllRedpackets(redpacketsFromChain.map((x)=>x.txid
    ));
    return redpacketsFromChain.map((x)=>{
        const record = redpacketsFromDatabase.find((y)=>y.id === x.txid
        );
        if (!record) return x;
        return {
            ...x,
            password: record.password
        };
    });
// #endregion
}
async function services_getNftRedPacketHistory(address, chainId, page) {
    const histories = await getNftRedPacketHistory(address, page);
    const historiesWithPassword = [];
    for (const history of histories){
        const record = await getRedPacketNft(history.txid);
        if (history.chain_id === chainId && record) {
            history.password = record.password;
            history.payload.password = record.password;
        } else {
            history.password = '';
            history.payload.password = '';
        }
        historiesWithPassword.push(history);
    }
    return historiesWithPassword;
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




/***/ })

}]);