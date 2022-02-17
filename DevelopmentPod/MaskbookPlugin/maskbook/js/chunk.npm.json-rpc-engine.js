"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7141],{

/***/ 8685:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JsonRpcEngine = void 0;
const safe_event_emitter_1 = __importDefault(__webpack_require__(35247));
const eth_rpc_errors_1 = __webpack_require__(65679);
/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */
class JsonRpcEngine extends safe_event_emitter_1.default {
    constructor() {
        super();
        this._middleware = [];
    }
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */
    push(middleware) {
        this._middleware.push(middleware);
    }
    handle(req, cb) {
        if (cb && typeof cb !== 'function') {
            throw new Error('"callback" must be a function if provided.');
        }
        if (Array.isArray(req)) {
            if (cb) {
                return this._handleBatch(req, cb);
            }
            return this._handleBatch(req);
        }
        if (cb) {
            return this._handle(req, cb);
        }
        return this._promiseHandle(req);
    }
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */
    asMiddleware() {
        return async (req, res, next, end) => {
            try {
                const [middlewareError, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
                if (isComplete) {
                    await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    return end(middlewareError);
                }
                return next(async (handlerCallback) => {
                    try {
                        await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    }
                    catch (error) {
                        return handlerCallback(error);
                    }
                    return handlerCallback();
                });
            }
            catch (error) {
                return end(error);
            }
        };
    }
    async _handleBatch(reqs, cb) {
        // The order here is important
        try {
            // 2. Wait for all requests to finish, or throw on some kind of fatal
            // error
            const responses = await Promise.all(
            // 1. Begin executing each request in the order received
            reqs.map(this._promiseHandle.bind(this)));
            // 3. Return batch response
            if (cb) {
                return cb(null, responses);
            }
            return responses;
        }
        catch (error) {
            if (cb) {
                return cb(error);
            }
            throw error;
        }
    }
    /**
     * A promise-wrapped _handle.
     */
    _promiseHandle(req) {
        return new Promise((resolve) => {
            this._handle(req, (_err, res) => {
                // There will always be a response, and it will always have any error
                // that is caught and propagated.
                resolve(res);
            });
        });
    }
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */
    async _handle(callerReq, cb) {
        if (!callerReq ||
            Array.isArray(callerReq) ||
            typeof callerReq !== 'object') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, { request: callerReq });
            return cb(error, { id: undefined, jsonrpc: '2.0', error });
        }
        if (typeof callerReq.method !== 'string') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, { request: callerReq });
            return cb(error, { id: callerReq.id, jsonrpc: '2.0', error });
        }
        const req = Object.assign({}, callerReq);
        const res = {
            id: req.id,
            jsonrpc: req.jsonrpc,
        };
        let error = null;
        try {
            await this._processRequest(req, res);
        }
        catch (_error) {
            // A request handler error, a re-thrown middleware error, or something
            // unexpected.
            error = _error;
        }
        if (error) {
            // Ensure no result is present on an errored response
            delete res.result;
            if (!res.error) {
                res.error = eth_rpc_errors_1.serializeError(error);
            }
        }
        return cb(error, res);
    }
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */
    async _processRequest(req, res) {
        const [error, isComplete, returnHandlers,] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
        // Throw if "end" was not called, or if the response has neither a result
        // nor an error.
        JsonRpcEngine._checkForCompletion(req, res, isComplete);
        // The return handlers should run even if an error was encountered during
        // middleware processing.
        await JsonRpcEngine._runReturnHandlers(returnHandlers);
        // Now we re-throw the middleware processing error, if any, to catch it
        // further up the call chain.
        if (error) {
            throw error;
        }
    }
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */
    static async _runAllMiddleware(req, res, middlewareStack) {
        const returnHandlers = [];
        let error = null;
        let isComplete = false;
        // Go down stack of middleware, call and collect optional returnHandlers
        for (const middleware of middlewareStack) {
            [error, isComplete] = await JsonRpcEngine._runMiddleware(req, res, middleware, returnHandlers);
            if (isComplete) {
                break;
            }
        }
        return [error, isComplete, returnHandlers.reverse()];
    }
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */
    static _runMiddleware(req, res, middleware, returnHandlers) {
        return new Promise((resolve) => {
            const end = (err) => {
                const error = err || res.error;
                if (error) {
                    res.error = eth_rpc_errors_1.serializeError(error);
                }
                // True indicates that the request should end
                resolve([error, true]);
            };
            const next = (returnHandler) => {
                if (res.error) {
                    end(res.error);
                }
                else {
                    if (returnHandler) {
                        if (typeof returnHandler !== 'function') {
                            end(new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. ` +
                                `Received "${typeof returnHandler}" for request:\n${jsonify(req)}`, { request: req }));
                        }
                        returnHandlers.push(returnHandler);
                    }
                    // False indicates that the request should not end
                    resolve([null, false]);
                }
            };
            try {
                middleware(req, res, next, end);
            }
            catch (error) {
                end(error);
            }
        });
    }
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */
    static async _runReturnHandlers(handlers) {
        for (const handler of handlers) {
            await new Promise((resolve, reject) => {
                handler((err) => (err ? reject(err) : resolve()));
            });
        }
    }
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */
    static _checkForCompletion(req, res, isComplete) {
        if (!('result' in res) && !('error' in res)) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${jsonify(req)}`, { request: req });
        }
        if (!isComplete) {
            throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${jsonify(req)}`, { request: req });
        }
    }
}
exports.JsonRpcEngine = JsonRpcEngine;
function jsonify(request) {
    return JSON.stringify(request, null, 2);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSnNvblJwY0VuZ2luZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9Kc29uUnBjRW5naW5lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNGQUE0RDtBQUM1RCxtREFBOEU7QUF1RjlFOzs7R0FHRztBQUNILE1BQWEsYUFBYyxTQUFRLDRCQUFnQjtJQUdqRDtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLENBQU8sVUFBbUM7UUFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBaUQsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUEyQ0QsTUFBTSxDQUFDLEdBQVksRUFBRSxFQUFRO1FBQzNCLElBQUksRUFBRSxJQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7U0FDL0Q7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxFQUFFLEVBQUU7Z0JBQ04sT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUNuQztZQUNELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksRUFBRSxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQThCLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBOEIsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILFlBQVk7UUFDVixPQUFPLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNuQyxJQUFJ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

/***/ }),

/***/ 21612:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createAsyncMiddleware = void 0;
/**
 * JsonRpcEngine only accepts callback-based middleware directly.
 * createAsyncMiddleware exists to enable consumers to pass in async middleware
 * functions.
 *
 * Async middleware have no "end" function. Instead, they "end" if they return
 * without calling "next". Rather than passing in explicit return handlers,
 * async middleware can simply await "next", and perform operations on the
 * response object when execution resumes.
 *
 * To accomplish this, createAsyncMiddleware passes the async middleware a
 * wrapped "next" function. That function calls the internal JsonRpcEngine
 * "next" function with a return handler that resolves a promise when called.
 *
 * The return handler will always be called. Its resolution of the promise
 * enables the control flow described above.
 */
function createAsyncMiddleware(asyncMiddleware) {
    return async (req, res, next, end) => {
        // nextPromise is the key to the implementation
        // it is resolved by the return handler passed to the
        // "next" function
        let resolveNextPromise;
        const nextPromise = new Promise((resolve) => {
            resolveNextPromise = resolve;
        });
        let returnHandlerCallback = null;
        let nextWasCalled = false;
        // This will be called by the consumer's async middleware.
        const asyncNext = async () => {
            nextWasCalled = true;
            // We pass a return handler to next(). When it is called by the engine,
            // the consumer's async middleware will resume executing.
            // eslint-disable-next-line node/callback-return
            next((runReturnHandlersCallback) => {
                // This callback comes from JsonRpcEngine._runReturnHandlers
                returnHandlerCallback = runReturnHandlersCallback;
                resolveNextPromise();
            });
            await nextPromise;
        };
        try {
            await asyncMiddleware(req, res, asyncNext);
            if (nextWasCalled) {
                await nextPromise; // we must wait until the return handler is called
                returnHandlerCallback(null);
            }
            else {
                end(null);
            }
        }
        catch (error) {
            if (returnHandlerCallback) {
                returnHandlerCallback(error);
            }
            else {
                end(error);
            }
        }
    };
}
exports.createAsyncMiddleware = createAsyncMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlQXN5bmNNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZUFzeW5jTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkc7QUFDSCxTQUFnQixxQkFBcUIsQ0FDbkMsZUFBNkM7SUFFN0MsT0FBTyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7UUFDbkMsK0NBQStDO1FBQy9DLHFEQUFxRDtRQUNyRCxrQkFBa0I7UUFDbEIsSUFBSSxrQkFBOEIsQ0FBQztRQUNuQyxNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUkscUJBQXFCLEdBQVksSUFBSSxDQUFDO1FBQzFDLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQztRQUUxQiwwREFBMEQ7UUFDMUQsTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLEVBQUU7WUFDM0IsYUFBYSxHQUFHLElBQUksQ0FBQztZQUVyQix1RUFBdUU7WUFDdkUseURBQXlEO1lBQ3pELGdEQUFnRDtZQUNoRCxJQUFJLENBQUMsQ0FBQyx5QkFBeUIsRUFBRSxFQUFFO2dCQUNqQyw0REFBNEQ7Z0JBQzVELHFCQUFxQixHQUFHLHlCQUF5QixDQUFDO2dCQUNsRCxrQkFBa0IsRUFBRSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxXQUFXLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBRUYsSUFBSTtZQUNGLE1BQU0sZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFM0MsSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLE1BQU0sV0FBVyxDQUFDLENBQUMsa0RBQWtEO2dCQUNwRSxxQkFBK0MsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4RDtpQkFBTTtnQkFDTCxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDWDtTQUNGO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxJQUFJLHFCQUFxQixFQUFFO2dCQUN4QixxQkFBK0MsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6RDtpQkFBTTtnQkFDTCxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDWjtTQUNGO0lBQ0gsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQS9DRCxzREErQ0MifQ==

/***/ }),

/***/ 3507:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createScaffoldMiddleware = void 0;
function createScaffoldMiddleware(handlers) {
    return (req, res, next, end) => {
        const handler = handlers[req.method];
        // if no handler, return
        if (handler === undefined) {
            return next();
        }
        // if handler is fn, call as middleware
        if (typeof handler === 'function') {
            return handler(req, res, next, end);
        }
        // if handler is some other value, use as result
        res.result = handler;
        return end();
    };
}
exports.createScaffoldMiddleware = createScaffoldMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2NhZmZvbGRNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NyZWF0ZVNjYWZmb2xkTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxTQUFnQix3QkFBd0IsQ0FBQyxRQUV4QztJQUNDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBRTtRQUM3QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JDLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDekIsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO1FBQ0QsdUNBQXVDO1FBQ3ZDLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2pDLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO1FBQ0QsZ0RBQWdEO1FBQy9DLEdBQStCLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUNsRCxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQWpCRCw0REFpQkMifQ==

/***/ }),

/***/ 64873:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getUniqueId = void 0;
// uint32 (two's complement) max
// more conservative than Number.MAX_SAFE_INTEGER
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
}
exports.getUniqueId = getUniqueId;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VW5pcXVlSWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZ2V0VW5pcXVlSWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsZ0NBQWdDO0FBQ2hDLGlEQUFpRDtBQUNqRCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUM7QUFDdkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFFaEQsU0FBZ0IsV0FBVztJQUN6QixTQUFTLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLE9BQU8sU0FBUyxDQUFDO0FBQ25CLENBQUM7QUFIRCxrQ0FHQyJ9

/***/ }),

/***/ 25080:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createIdRemapMiddleware = void 0;
const getUniqueId_1 = __webpack_require__(64873);
function createIdRemapMiddleware() {
    return (req, res, next, _end) => {
        const originalId = req.id;
        const newId = getUniqueId_1.getUniqueId();
        req.id = newId;
        res.id = newId;
        next((done) => {
            req.id = originalId;
            res.id = originalId;
            done();
        });
    };
}
exports.createIdRemapMiddleware = createIdRemapMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRSZW1hcE1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaWRSZW1hcE1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0NBQTRDO0FBRzVDLFNBQWdCLHVCQUF1QjtJQUNyQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDOUIsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUMxQixNQUFNLEtBQUssR0FBRyx5QkFBVyxFQUFFLENBQUM7UUFDNUIsR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFDZixHQUFHLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztRQUNmLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ1osR0FBRyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDcEIsR0FBRyxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUM7WUFDcEIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUFaRCwwREFZQyJ9

/***/ }),

/***/ 91743:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(25080), exports);
__exportStar(__webpack_require__(21612), exports);
__exportStar(__webpack_require__(3507), exports);
__exportStar(__webpack_require__(64873), exports);
__exportStar(__webpack_require__(8685), exports);
__exportStar(__webpack_require__(43111), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQW9DO0FBQ3BDLDBEQUF3QztBQUN4Qyw2REFBMkM7QUFDM0MsZ0RBQThCO0FBQzlCLGtEQUFnQztBQUNoQyxvREFBa0MifQ==

/***/ }),

/***/ 43111:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeMiddleware = void 0;
const JsonRpcEngine_1 = __webpack_require__(8685);
function mergeMiddleware(middlewareStack) {
    const engine = new JsonRpcEngine_1.JsonRpcEngine();
    middlewareStack.forEach((middleware) => engine.push(middleware));
    return engine.asMiddleware();
}
exports.mergeMiddleware = mergeMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL21lcmdlTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBbUU7QUFFbkUsU0FBZ0IsZUFBZSxDQUFDLGVBQXNEO0lBQ3BGLE1BQU0sTUFBTSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0lBQ25DLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqRSxPQUFPLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBSkQsMENBSUMifQ==

/***/ })

}]);