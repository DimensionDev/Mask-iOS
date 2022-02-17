"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2546],{

/***/ 32546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50346);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40912);


const worker = {
    ..._base__WEBPACK_IMPORTED_MODULE_0__/* .base */ .u,
    init (signal) {
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (worker);


/***/ }),

/***/ 40912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ PluginPollRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49157);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66751);
/* harmony import */ var _web_workers_OnDemandWorker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66451);
/* harmony import */ var async_call_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99667);
/* harmony import */ var async_call_rpc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(async_call_rpc__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79723);





const PollMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .identifier */ .QU);
const PluginPollRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_0__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_3__/* .identifier */ .QU, ()=>{
    const PollWorker = new _web_workers_OnDemandWorker__WEBPACK_IMPORTED_MODULE_1__/* .OnDemandWorker */ .G(new URL(/* worker import */ __webpack_require__.p + __webpack_require__.u(4554), __webpack_require__.b), {
        name: 'Plugin/Poll'
    });
    return (0,async_call_rpc__WEBPACK_IMPORTED_MODULE_2__.AsyncCall)({
    }, {
        channel: new async_call_rpc_utils_web_worker__WEBPACK_IMPORTED_MODULE_4__/* .WorkerChannel */ .i(PollWorker),
        thenable: false
    });
}, PollMessage.rpc, true);


/***/ }),

/***/ 66451:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ OnDemandWorker)
/* harmony export */ });
const WorkerCheckTerminateInterval = 60 * 1000;
const InactiveTimeToTerminateDefault = 15 * 10000;
class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, WorkerCheckTerminateInterval));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.init);
        // After the Worker is alive, it will send a message "Alive" in setup.worker.ts
        // then to start forwarding message
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        this.worker && Worker.prototype.terminate.call(this.worker);
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>this.worker && Worker.prototype.postMessage.apply(this.worker, args)
        );
    }
    set onmessage(_) {
        throws();
    }
    set onerror(_) {
        throws();
    }
    set onmessageerror(_) {
        throws();
    }
    // @ts-ignore
    addEventListener(type, listener, options) {
        super.addEventListener(type, listener, options);
    }
    // @ts-ignore
    removeEventListener(type, listener, options) {
        super.removeEventListener(type, listener, options);
    }
    constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.inactiveTimeToTerminate = InactiveTimeToTerminateDefault;
        this.lastUsed = Date.now();
        this.init = init;
        this.log((ref = init[1]) === null || ref === void 0 ? void 0 : ref.name, 'created with', ...init);
    }
}
Object.setPrototypeOf(OnDemandWorker.prototype, Worker.prototype);
const throws = ()=>{
    throw new TypeError('Please use addEventListener');
};
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}


/***/ })

}]);