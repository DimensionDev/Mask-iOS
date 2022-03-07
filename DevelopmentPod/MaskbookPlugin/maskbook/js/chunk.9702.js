(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9702],{

/***/ 37313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
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

"use strict";

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

/***/ 75706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/browser.js
var browser = __webpack_require__(32246);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/sea.js
var sea = __webpack_require__(23646);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/radix.js
var radix = __webpack_require__(43945);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/radisk.js
var radisk = __webpack_require__(97062);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/store.js
var store = __webpack_require__(47322);
// EXTERNAL MODULE: ../../node_modules/.pnpm/gun@0.2020.1234/node_modules/gun/lib/rindexed.js
var rindexed = __webpack_require__(76721);
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
                gun === null || gun === void 0 ? void 0 : gun.off();
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
    const _ = new (browser_default())({
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

/***/ 35237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewPoll": () => (/* binding */ createNewPoll),
/* harmony export */   "getAllExistingPolls": () => (/* binding */ getAllExistingPolls),
/* harmony export */   "getPollByKey": () => (/* binding */ getPollByKey),
/* harmony export */   "vote": () => (/* binding */ vote)
/* harmony export */ });
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29730);
/* harmony import */ var _masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75706);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74440);
/* harmony import */ var async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(72406);
/* harmony import */ var async_call_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40460);
/* harmony import */ var async_call_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(async_call_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35237);






setTimeout(()=>{
    (0,async_call_rpc__WEBPACK_IMPORTED_MODULE_2__.AsyncCall)(_Services__WEBPACK_IMPORTED_MODULE_3__, {
        channel: new async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_4__/* .WorkerChannel */ .i()
    });
}, 0);
const defaultPoll = {
    key: '',
    sender: '',
    question: '',
    start_time: Date.now(),
    end_time: Date.now(),
    options: [
        '',
        ''
    ],
    results: [
        0,
        0
    ]
};
async function createNewPoll(poll) {
    const { id , options , start_time , end_time  } = poll;
    const results = Array.from({
        length: options.length
    }).fill(0);
    const resultsObj = {
        ...results
    };
    const optionsObj = {
        ...options
    };
    const poll_item = {
        ...poll,
        results: resultsObj,
        options: optionsObj,
        start_time: start_time.getTime(),
        end_time: end_time.getTime()
    };
    const key = `${id}_${Date.now()}_${GunTextRandom(4)}`;
    (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__/* .setGunData */ .er)([
        _constants__WEBPACK_IMPORTED_MODULE_1__/* .PollGunRootNode */ .Bb,
        key
    ], poll_item);
    return poll;
}
/** Implementation of deprecated Gun.text.random */ function GunTextRandom(l) {
    let s = '';
    l = l || 24 // you are not going to make a 0 length random number, so no need to check type
    ;
    /* cspell:disable-next-line */ const c = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXZabcdefghijklmnopqrstuvwxyz';
    while(l > 0){
        s += c.charAt(Math.floor(Math.random() * c.length));
        l -= 1;
    }
    return s;
}
async function vote(props) {
    const { poll , index  } = props;
    const data = await (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__/* .getGunData */ .q7)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PollGunRootNode */ .Bb, poll.key, 'results');
    if (typeof data === 'object') delete data._;
    else throw new TypeError('Invalid vote node.');
    const results = Object.values(data);
    if (!results.every((x)=>typeof x === 'number'
    )) throw new TypeError('Invalid vote node.');
    const count = results[index] + 1;
    const newResults = {
        ...results,
        [index]: count
    };
    (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__/* .setGunData */ .er)([
        _constants__WEBPACK_IMPORTED_MODULE_1__/* .PollGunRootNode */ .Bb,
        poll.key,
        'results'
    ], newResults);
    return {
        ...poll,
        results: Object.values(newResults)
    };
}
async function getPollByKey(props) {
    const keys = props.key.split('_');
    const node = await (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__/* .getGunData */ .q7)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PollGunRootNode */ .Bb, props.key);
    if (typeof node !== 'object' || !isPollGunDB(node)) throw new TypeError('Invalid vote node.');
    const data = node;
    const poll = {
        ...defaultPoll,
        id: (0,lodash_unified__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(keys),
        key: props.key,
        sender: data.sender,
        question: data.question,
        start_time: data.start_time,
        end_time: data.end_time
    };
    if (data.options) {
        const options = await (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__/* .getGunData */ .q7)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PollGunRootNode */ .Bb, props.key, 'options');
        if (typeof options === 'object') {
            delete options._;
            data.options = Object.values(options);
        }
    }
    if (data.results) {
        const results = await (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__/* .getGunData */ .q7)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PollGunRootNode */ .Bb, props.key, 'results');
        if (typeof results === 'object') {
            delete results._;
            data.results = Object.values(results);
        }
    }
    return poll;
}
function isPollGunDB(x) {
    const { end_time  } = x;
    if (typeof end_time !== 'number') return false;
    return true;
}
async function getAllExistingPolls() {
    const polls = [];
    const allNodes = await (0,_masknet_gun_utils__WEBPACK_IMPORTED_MODULE_0__/* .getGunData */ .q7)(_constants__WEBPACK_IMPORTED_MODULE_1__/* .PollGunRootNode */ .Bb);
    if (typeof allNodes !== 'object') return [];
    await Promise.allSettled(Object.keys(allNodes).map(async (key)=>{
        polls.push(await getPollByKey({
            key
        }));
    }));
    return polls;
}


/***/ })

}]);