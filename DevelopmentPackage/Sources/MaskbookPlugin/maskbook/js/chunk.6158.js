"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6158],{

/***/ 37313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
const event_iterator_1 = __webpack_require__(1091);
exports.zN = event_iterator_1.EventIterator;
function subscribe(event, options, evOptions) {
    return new event_iterator_1.EventIterator(({ push }) => {
        this.addEventListener(event, push, options);
        return () => this.removeEventListener(event, push, options);
    }, evOptions);
}
__webpack_unused_export__ = subscribe;
__webpack_unused_export__ = event_iterator_1.EventIterator;


/***/ }),

/***/ 1091:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class EventQueue {
    constructor() {
        this.pullQueue = [];
        this.pushQueue = [];
        this.eventHandlers = {};
        this.isPaused = false;
        this.isStopped = false;
    }
    push(value) {
        if (this.isStopped)
            return;
        const resolution = { value, done: false };
        if (this.pullQueue.length) {
            const placeholder = this.pullQueue.shift();
            if (placeholder)
                placeholder.resolve(resolution);
        }
        else {
            this.pushQueue.push(Promise.resolve(resolution));
            if (this.highWaterMark !== undefined &&
                this.pushQueue.length >= this.highWaterMark &&
                !this.isPaused) {
                this.isPaused = true;
                if (this.eventHandlers.highWater) {
                    this.eventHandlers.highWater();
                }
                else if (console) {
                    console.warn(`EventIterator queue reached ${this.pushQueue.length} items`);
                }
            }
        }
    }
    stop() {
        if (this.isStopped)
            return;
        this.isStopped = true;
        this.remove();
        for (const placeholder of this.pullQueue) {
            placeholder.resolve({ value: undefined, done: true });
        }
        this.pullQueue.length = 0;
    }
    fail(error) {
        if (this.isStopped)
            return;
        this.isStopped = true;
        this.remove();
        if (this.pullQueue.length) {
            for (const placeholder of this.pullQueue) {
                placeholder.reject(error);
            }
            this.pullQueue.length = 0;
        }
        else {
            const rejection = Promise.reject(error);
            /* Attach error handler to avoid leaking an unhandled promise rejection. */
            rejection.catch(() => { });
            this.pushQueue.push(rejection);
        }
    }
    remove() {
        Promise.resolve().then(() => {
            if (this.removeCallback)
                this.removeCallback();
        });
    }
    [Symbol.asyncIterator]() {
        return {
            next: (value) => {
                const result = this.pushQueue.shift();
                if (result) {
                    if (this.lowWaterMark !== undefined &&
                        this.pushQueue.length <= this.lowWaterMark &&
                        this.isPaused) {
                        this.isPaused = false;
                        if (this.eventHandlers.lowWater) {
                            this.eventHandlers.lowWater();
                        }
                    }
                    return result;
                }
                else if (this.isStopped) {
                    return Promise.resolve({ value: undefined, done: true });
                }
                else {
                    return new Promise((resolve, reject) => {
                        this.pullQueue.push({ resolve, reject });
                    });
                }
            },
            return: () => {
                this.isStopped = true;
                this.pushQueue.length = 0;
                this.remove();
                return Promise.resolve({ value: undefined, done: true });
            },
        };
    }
}
class EventIterator {
    constructor(listen, { highWaterMark = 100, lowWaterMark = 1 } = {}) {
        const queue = new EventQueue();
        queue.highWaterMark = highWaterMark;
        queue.lowWaterMark = lowWaterMark;
        queue.removeCallback =
            listen({
                push: value => queue.push(value),
                stop: () => queue.stop(),
                fail: error => queue.fail(error),
                on: (event, fn) => {
                    queue.eventHandlers[event] = fn;
                },
            }) || (() => { });
        this[Symbol.asyncIterator] = () => queue[Symbol.asyncIterator]();
        Object.freeze(this);
    }
}
exports.EventIterator = EventIterator;
exports["default"] = EventIterator;


/***/ }),

/***/ 14598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "q7": () => (/* reexport */ getGunData),
  "Xg": () => (/* reexport */ pushToGunDataArray),
  "er": () => (/* reexport */ setGunData),
  "Q_": () => (/* reexport */ subscribeGunMapData)
});

// UNUSED EXPORTS: deleteGunData

// EXTERNAL MODULE: ../../node_modules/.pnpm/event-iterator@2.0.0/node_modules/event-iterator/lib/dom.js
var dom = __webpack_require__(37313);
;// CONCATENATED MODULE: ../gun-utils/src/server.ts
const gunServers = [
    'https://gun.r2d2.to/gun'
];

;// CONCATENATED MODULE: ../gun-utils/src/instance.ts

let gun;
function getGunInstance() {
    if (gun) return gun;
    return gun = createGun();
}
const OnCloseEvent = new Set();
function createGun() {
    class WebSocket extends globalThis.WebSocket {
        send(data) {
            this.keepAlive();
            super.send(data);
        }
        get onclose() {
            return null;
        }
        set onclose(f) {}
        constructor(url){
            super(url);
            const abort = this.abort = ()=>{
                gun?.off();
                gun = undefined;
                this.close();
                for (const each of OnCloseEvent)each();
                console.log('[Network/gun] WebSocket of the Gun instance is killed due to inactive.');
            };
            const keepAlive = this.keepAlive = ()=>{
                if (this.timer) clearTimeout(this.timer);
                this.timer = setTimeout(abort, 3 * 60 * 1000);
            };
            this.addEventListener('message', (e)=>{
                // if there is no meaningful data exchange, then do not keep the connection alive.
                if (typeof e.data === 'string' && e.data.length < 3) return;
                keepAlive();
            }, {});
        }
    }
    const _ = new Gun({
        peers: [
            ...gunServers
        ],
        localStorage: false,
        radisk: true,
        WebSocket
    });
    _.opt({
        retry: Number.POSITIVE_INFINITY
    });
    return _;
}

;// CONCATENATED MODULE: ../gun-utils/src/utils.ts


function getGunNodeFromPath(path1) {
    const resultNode = path1.reduce((gun, path)=>gun.get(path)
    , getGunInstance());
    return resultNode;
}
/**
 * Get data from Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).once()
 * ```
 */ function getGunData(...path) {
    return new Promise((resolve)=>{
        getGunNodeFromPath(path).once(resolve);
    });
}
/**
 * Set data on Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).put(data)
 * ```
 * @param path graph path on Gun
 * @param data data to be stored
 */ function setGunData(path, data) {
    getGunNodeFromPath(path).put(data);
}
/**
 * Delete data on Gun. Equivalent as the following code:
 *
 * ```ts
 * gun.get(path[0]).get(path[1])....get(path[n]).put(null!)
 * ```
 * @param path graph path on Gun
 */ function deleteGunData(path) {
    getGunNodeFromPath(path).put(null);
}
/**
 * Push data to the Gun data Set (Mathematical Set)
 * @param path graph path on Gun
 * @param value the object to be stored
 */ function pushToGunDataArray(path, value) {
    getGunNodeFromPath(path).set(value);
}
/**
 * Subscribe future data on Gun.
 * When subscribing a Gun data Set (Mathematical Set), you will not get the immediate result back.
 *
 * @param path graph path on Gun
 * @param isT is the data type T
 * @param abortSignal the signal to stop subscribing
 */ async function* subscribeGunMapData(path, isT, abortSignal) {
    yield* new dom/* EventIterator */.zN((queue)=>{
        // gun.off() will remove ALL listener on it
        let listenerClosed = false;
        function stop() {
            queue.stop();
            listenerClosed = true;
            OnCloseEvent["delete"](stop);
        }
        abortSignal.addEventListener('abort', stop);
        OnCloseEvent.add(stop);
        const resultNode = getGunNodeFromPath(path);
        resultNode.map().on((data)=>{
            if (listenerClosed) return;
            if (isT(data)) queue.push(data);
        });
    });
}

;// CONCATENATED MODULE: ../gun-utils/src/index.ts



/***/ }),

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

/***/ 19714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "clearCache": () => (/* binding */ clearCache),
  "getAddress": () => (/* binding */ getAddress),
  "getImage": () => (/* binding */ getImage),
  "getNFTAvatar": () => (/* binding */ getNFTAvatar),
  "saveNFTAvatar": () => (/* binding */ saveNFTAvatar)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/head.js
var head = __webpack_require__(29730);
// EXTERNAL MODULE: ./src/plugins/Avatar/constants.ts
var constants = __webpack_require__(95095);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/db.ts


const EXPIRED_TIME = 5 * 60 * 1000;
const cache = new Map();
async function fetchData() {
    const response = await fetch(constants/* NFT_AVATAR_JSON_SERVER */.kW, {
        method: 'GET',
        mode: 'cors',
        credentials: 'omit'
    });
    if (!response.ok) return [];
    const json = await response.json();
    return json;
}
async function _fetch() {
    let c = cache.get('avatar');
    if (!c) {
        const f = fetchData();
        cache.set('avatar', [
            Date.now(),
            f
        ]);
    } else {
        const [t, f] = c;
        if (!f || Date.now() - t >= EXPIRED_TIME) {
            const _f = fetchData();
            cache.set('avatar', [
                Date.now(),
                _f
            ]);
        }
    }
    c = cache.get('avatar');
    if (!c) return [];
    const [_, f] = c;
    return f.then((data)=>data
    ).catch((err)=>{
        console.log(err);
        cache.delete('avatar');
        return [];
    });
}
async function getNFTAvatarFromJSON(userId) {
    const db = (await _fetch()).filter((x)=>x.userId === userId
    );
    return (0,head/* default */.Z)(db);
}

// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(65506);
// EXTERNAL MODULE: ../web3-shared/evm/utils/address.ts
var utils_address = __webpack_require__(2239);
// EXTERNAL MODULE: ../plugin-infra/src/entry-web3.ts
var entry_web3 = __webpack_require__(67071);
// EXTERNAL MODULE: ../../node_modules/.pnpm/date-fns@2.28.0/node_modules/date-fns/esm/addSeconds/index.js
var addSeconds = __webpack_require__(71767);
// EXTERNAL MODULE: ../web3-providers/src/index.ts
var src = __webpack_require__(92820);
// EXTERNAL MODULE: ../gun-utils/src/index.ts + 3 modules
var gun_utils_src = __webpack_require__(14598);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/bind.ts






const READ_GUN_TIMEOUT = 15 * 1000;
const NFTAvatarDB = (network)=>src/* KeyValue.createJSON_Storage */.cl.createJSON_Storage(constants/* NFT_AVATAR_DB_NAME */.$s + '_' + network)
;
const NFTAvatarDBStorage = (network)=>src/* KeyValue.createJSON_Storage */.cl.createJSON_Storage(constants/* NFT_AVATAR_DB_NAME_STORAGE */.EA + '_' + network)
;
const bind_cache = new Map();
function timeout(promise, duration) {
    return Promise.race([
        promise,
        new Promise((resolve)=>setTimeout(()=>resolve(undefined)
            , duration)
        )
    ]);
}
async function getDataFromGUN(userId) {
    const data = await (0,gun_utils_src/* getGunData */.q7)(constants/* NFT_AVATAR_DB_NAME */.$s, userId);
    if (typeof data !== 'string') return undefined;
    return data;
}
async function getUserAddressFromGUN(userId) {
    return timeout(getDataFromGUN(userId), READ_GUN_TIMEOUT);
}
function getKey(networkPluginId = entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, chainId = types/* ChainId.Mainnet */.a_.Mainnet) {
    return `${networkPluginId}-${chainId}`;
}
function getCacheKey(userId, network, networkPluginId = entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM, chainId = types/* ChainId.Mainnet */.a_.Mainnet) {
    return `${userId}-${network}-${networkPluginId}-${chainId}`;
}
async function _getUserAddress(userId, network, networkPluginId, chainId) {
    try {
        const result = await NFTAvatarDB(network).get(userId);
        if (!result || !result?.address) {
            const result = await NFTAvatarDBStorage(network).get(userId);
            const address = result?.[getKey(networkPluginId, chainId)];
            if (address) return address;
            return getUserAddressFromGUN(userId);
        }
        return result.address;
    } catch  {
        return getUserAddressFromGUN(userId);
    }
}
async function getUserAddress(userId, network, networkPluginId, chainId) {
    let c = bind_cache.get(getCacheKey(userId, network, networkPluginId, chainId));
    if (!c || Date.now() > c[1]) {
        try {
            bind_cache.set(getCacheKey(userId, network, networkPluginId, chainId), [
                _getUserAddress(userId, network, networkPluginId, chainId),
                (0,addSeconds/* default */.Z)(new Date(), 60).getTime(), 
            ]);
        } catch (err) {
            console.log(err);
        }
    }
    c = bind_cache.get(getCacheKey(userId, network, networkPluginId, chainId));
    return c?.[0];
}
async function setUserAddress(userId, address, network, networkPluginId, chainId) {
    try {
        await NFTAvatarDBStorage(network).set(userId, {
            [getKey(networkPluginId, chainId)]: address
        });
        await NFTAvatarDB(network).set(userId, {
            networkPluginId: networkPluginId ?? entry_web3/* NetworkPluginID.PLUGIN_EVM */.FF.PLUGIN_EVM,
            chainId: chainId ?? types/* ChainId.Mainnet */.a_.Mainnet,
            address
        });
    } catch  {
    // do nothing
    } finally{
        const _address = await getUserAddress(userId, network, networkPluginId, chainId);
        if (!(0,utils_address/* isSameAddress */.Wr)(_address, address)) throw new Error('Network issues, please make sure you are connected to the appropriate internet.');
    }
}

// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 11 modules
var EthereumService = __webpack_require__(59471);
;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/rss3.ts



const rss3_cache = new Map();
async function getNFTAvatarFromRSS(userId, address, snsKey) {
    const key = `${address}, ${userId}, ${snsKey}`;
    let v = rss3_cache.get(key);
    if (!v || Date.now() > v[1]) {
        rss3_cache.set(key, [
            _getNFTAvatarFromRSS(userId, address, snsKey),
            (0,addSeconds/* default */.Z)(Date.now(), 60).getTime()
        ]);
    }
    v = rss3_cache.get(key);
    const result = await v?.[0];
    return result?.nft;
}
function deleteTargetCache(userId, address, snsKey) {
    const key = `${address}, ${userId}, ${snsKey}`;
    rss3_cache.delete(key);
}
async function _getNFTAvatarFromRSS(userId, address, snsKey) {
    const rss = src/* RSS3.createRSS3 */.S5.createRSS3(address, async (message)=>{
        return (0,EthereumService.personalSign)(message, address);
    });
    const nfts = await src/* RSS3.getFileData */.S5.getFileData(rss, address, snsKey);
    if (nfts) {
        return nfts[userId];
    }
    return src/* RSS3.getFileData */.S5.getFileData(rss, address, '_nft');
}
async function saveNFTAvatarToRSS(address, nft, signature, snsKey) {
    const rss = src/* RSS3.createRSS3 */.S5.createRSS3(address, async (message)=>{
        return (0,EthereumService.personalSign)(message, address);
    });
    let _nfts = await src/* RSS3.getFileData */.S5.getFileData(rss, address, snsKey);
    if (!_nfts) {
        _nfts = {
            [nft.userId]: {
                signature,
                nft
            }
        };
    } else {
        _nfts[nft.userId] = {
            signature,
            nft
        };
    }
    await src/* RSS3.setFileData */.S5.setFileData(rss, address, snsKey, _nfts);
    // clear cache
    if (rss3_cache.has(address)) rss3_cache.delete(address);
    return nft;
}

;// CONCATENATED MODULE: ./src/plugins/Avatar/Services/index.ts



async function getNFTAvatar(userId, network, snsKey, networkPluginId, chainId) {
    const address = await getUserAddress(userId, network, networkPluginId, chainId);
    if (address) {
        return getNFTAvatarFromRSS(userId, address, snsKey);
    }
    return getNFTAvatarFromJSON(userId);
}
async function clearCache(userId, network, snsKey, networkPluginId, chainId) {
    const address = await getUserAddress(userId, network, networkPluginId, chainId);
    if (address) {
        deleteTargetCache(userId, address, snsKey);
    }
}
async function saveNFTAvatar(address, nft, network, snsKey, networkPluginId, chainId) {
    try {
        const avatar = await saveNFTAvatarToRSS(address, nft, '', snsKey);
        await setUserAddress(nft.userId, address, network, networkPluginId, chainId);
        return avatar;
    } catch (error) {
        throw error;
    }
}
async function getAddress(userId, network, networkPluginId, chainId) {
    if (!userId) return '';
    const address = await getUserAddress(userId, network, networkPluginId, chainId);
    return address ?? '';
}
async function getImage(image) {
    const response = await globalThis.fetch(image);
    return await blobToBase64(await response.blob());
}
function blobToBase64(blob) {
    return new Promise((resolve, _)=>{
        const reader = new FileReader();
        reader.onloadend = ()=>resolve(reader.result)
        ;
        reader.readAsDataURL(blob);
    });
}


/***/ })

}]);