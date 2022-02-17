(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3693],{

/***/ 42842:
/***/ (function(__unused_webpack_module, exports) {

/// <reference types="./full.d.ts" />
(function (global, factory) {
     true ? factory(exports) :
    0;
}(this, (function (exports) { 'use strict';

    class CustomError extends Error {
        constructor( name, message,  code,  stack) {
            super(message);this.name = name;this.code = code;this.stack = stack;
        }
    }
    const Err_Cannot_find_a_running_iterator_with_given_ID = {}; 
    const Err_Only_string_can_be_the_RPC_method_name = {}; 
    const Err_Cannot_call_method_starts_with_rpc_dot_directly = {}; 
    const Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options = {}; 
    const Messages = [
        Err_Cannot_find_a_running_iterator_with_given_ID,
        Err_Only_string_can_be_the_RPC_method_name,
        Err_Cannot_call_method_starts_with_rpc_dot_directly,
        Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options,
    ];
    // https://github.com/Jack-Works/async-call-rpc/wiki/Error-messages
    function makeHostedMessage(id, error) {
        const n = Messages.indexOf(id);
        error.message += `Error ${n}: https://github.com/Jack-Works/async-call-rpc/wiki/Errors#` + n;
        return error
    }
    // ! side effect
    /** These Error is defined in ECMAScript spec */
    const errors = {
        // @ts-ignore
        __proto__: null,
        Error,
        EvalError,
        RangeError,
        ReferenceError,
        SyntaxError,
        TypeError,
        URIError,
    };
    const DOMExceptionHeader = 'DOMException:';
    /**
     * AsyncCall support somehow transfer ECMAScript Error
     */
    const RecoverError = (type, message, code, stack) => {
        try {
            const E = globalDOMException();
            if (type.startsWith(DOMExceptionHeader) && E) {
                const name = type.slice(DOMExceptionHeader.length);
                return new E(message, name)
            } else if (type in errors) {
                const e = new errors[type](message);
                e.stack = stack;
                // @ts-ignore
                e.code = code;
                return e
            } else {
                return new CustomError(type, message, code, stack)
            }
        } catch (e2) {
            return new Error(`E${code} ${type}: ${message}\n${stack}`)
        }
    };
    const removeStackHeader = (stack) => String(stack).replace(/^.+\n.+\n/, '');
    // ! side effect
    const globalDOMException = (() => {
        try {
            // @ts-ignore
            return DOMException
        } catch (e3) {}
    });

    const isString = (x) => typeof x === 'string';
    const isBoolean = (x) => typeof x === 'boolean';
    const isFunction = (x) => typeof x === 'function';
    const isObject = (params) => typeof params === 'object' && params !== null;
    const ERROR = 'Error';
    const undefined$1 = void 0;
    const Object_setPrototypeOf = Object.setPrototypeOf;
    const Promise_reject = (x) => Promise.reject(x);
    const Promise_resolve = (x) => Promise.resolve(x);
    const isArray = Array.isArray;
    const replayFunction = () => '() => replay()';

    const jsonrpc = '2.0';













    const Request = (id, method, params, remoteStack) => {
        const x = { jsonrpc, id, method, params, remoteStack };
        deleteUndefined(x, 'id');
        deleteFalsy(x, 'remoteStack');
        return x
    };

    /**
     * JSONRPC SuccessResponse object.
     */






    const SuccessResponse = (id, result) => {
        const x = { jsonrpc, id, result };
        deleteUndefined(x, 'id');
        return x
    };

    /**
     * JSONRPC ErrorResponse object.
     * @public
     */







    const ErrorResponse = (id, code, message, data) => {
        if (id === undefined$1) id = null;
        code = Math.floor(code);
        if (Number.isNaN(code)) code = -1;
        const x = { jsonrpc, id, error: { code, message, data } };
        deleteUndefined(x.error, 'data');
        return x
    };
    // Pre defined error in section 5.1
    // ! side effect
    const ErrorResponseParseError = (e, mapper) => {
        const obj = ErrorResponseMapped({} , e, mapper);
        const o = obj.error; 
        o.code = -32700;
        o.message = 'Parse error';
        return obj
    };

    // Not using.
    // InvalidParams -32602 'Invalid params'
    // InternalError -32603 'Internal error'
    const ErrorResponseInvalidRequest = (id) => ErrorResponse(id, -32600, 'Invalid Request');
    const ErrorResponseMethodNotFound = (id) => ErrorResponse(id, -32601, 'Method not found');





    const ErrorResponseMapped = (request, e, mapper) => {
        const { id } = request;
        const { code, message, data } = mapper(e, request);
        return ErrorResponse(id, code, message, data)
    };

    const defaultErrorMapper = (stack = '', code = -1) => (e) => {
        let message = toString('', () => (e ).message);
        let type = toString(ERROR, (ctor = (e ).constructor) => isFunction(ctor) && ctor.name);
        const E = globalDOMException();
        if (E && e instanceof E) type = DOMExceptionHeader + e.name;
        if (isString(e) || typeof e === 'number' || isBoolean(e) || typeof e === 'bigint') {
            type = ERROR;
            message = String(e);
        }
        const data = stack ? { stack, type } : { type };
        return { code, message, data }
    };

    /**
     * A JSONRPC response object
     */


    const isJSONRPCObject = (data) => {
        if (!isObject(data)) return false
        if (!hasKey(data, 'jsonrpc')) return false
        if (data.jsonrpc !== jsonrpc) return false
        if (hasKey(data, 'params')) {
            const params = (data ).params;
            if (!isArray(params) && !isObject(params)) return false
        }
        return true
    };

    const hasKey = (
        obj,
        key,



    ) => key in obj;

    const toString = (_default, val) => {
        try {
            const v = val();
            if (v === undefined$1) return _default
            return String(v)
        } catch (e2) {
            return _default
        }
    };
    const deleteUndefined = (x, key) => {
        if (x[key] === undefined$1) delete x[key];
    };
    const deleteFalsy = (x, key) => {
        if (!x[key]) delete x[key];
    };

    //#region Serialization



    /**
     * Serialization implementation that do nothing
     * @remarks {@link Serialization}
     * @public
     */
    const NoSerialization = {
        serialization(from) {
            return from
        },
        deserialization(serialized) {
            return serialized
        },
    };

    /**
     * Create a serialization by JSON.parse/stringify
     *
     * @param replacerAndReceiver - Replacer and receiver of JSON.parse/stringify
     * @param space - Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
     * @param undefinedKeepingBehavior - How to keep "undefined" in result of SuccessResponse?
     *
     * If it is not handled properly, JSON.stringify will emit an invalid JSON RPC object.
     *
     * Options:
     * - `"null"`(**default**): convert it to null.
     * - `"keep"`: try to keep it by additional property "undef".
     * - `false`: Don't keep it, let it break.
     * @remarks {@link Serialization}
     * @public
     */
    const JSONSerialization = (
        replacerAndReceiver = [
            undefined$1,
            undefined$1,
        ],
        space,
        undefinedKeepingBehavior = 'null',
    ) => ({
        serialization(from) {
            if (undefinedKeepingBehavior && isObject(from) && hasKey(from, 'result') && from.result === undefined$1) {
                const alt = { ...from };
                alt.result = null;
                if (undefinedKeepingBehavior === 'keep') (alt ).undef = true;
                from = alt;
            }
            return JSON.stringify(from, replacerAndReceiver[0], space)
        },
        deserialization(serialized) {
            const result = JSON.parse(serialized , replacerAndReceiver[1]);
            if (
                isObject(result) &&
                hasKey(result, 'result') &&
                result.result === null &&
                hasKey(result, 'undef') &&
                result.undef === true
            ) {
                result.result = undefined$1;
                delete result.undef;
            }
            return result
        },
    });
    //#endregion

    const i$1 = 'AsyncCall/';
    // ! side effect
    const AsyncCallIgnoreResponse = Symbol.for(i$1 + 'ignored');
    const AsyncCallNotify = Symbol.for(i$1 + 'notify');
    const AsyncCallBatch = Symbol.for(i$1 + 'batch');

    /**
     * Make the returning type to `Promise<void>`
     * @internal
     * @remarks
     * Due to the limitation of TypeScript, generic signatures cannot be preserved
     * if the function is the top level parameter of this utility type,
     * or the function is not returning `Promise<void>`.
     */











    /**
     * Wrap the AsyncCall instance to send notification.
     * @param instanceOrFnOnInstance - The AsyncCall instance or function on the AsyncCall instance
     * @example
     * const notifyOnly = notify(AsyncCall(...))
     * @public
     */

    function notify(instanceOrFnOnInstance) {
        if (isFunction(instanceOrFnOnInstance)) return (instanceOrFnOnInstance )[AsyncCallNotify]
        return new Proxy(instanceOrFnOnInstance, { get: notifyTrap }) 
    }
    const notifyTrap = (target, p) => {
        return target[p][AsyncCallNotify]
    };

    /**
     * Wrap the AsyncCall instance to use batch call.
     * @param asyncCallInstance - The AsyncCall instance
     * @example
     * const [batched, send, drop] = batch(AsyncCall(...))
     * batched.call1() // pending
     * batched.call2() // pending
     * send() // send all pending requests
     * drop() // drop all pending requests
     * @returns It will return a tuple.
     *
     * The first item is the batched version of AsyncCall instance passed in.
     *
     * The second item is a function to send all pending requests.
     *
     * The third item is a function to drop and reject all pending requests.
     * @public
     */
    function batch(asyncCallInstance) {
        let queue = []; 
        return [
            new Proxy({ __proto__: null } , {
                get(cache, p) {
                    if (isString(p) && cache[p]) return cache[p]
                    // @ts-ignore
                    const f = (...args) => asyncCallInstance[AsyncCallBatch](queue, p, ...args);
                    // @ts-ignore
                    f[AsyncCallNotify] = (...args) =>
                        // @ts-ignore
                        asyncCallInstance[AsyncCallBatch][AsyncCallNotify](queue, p, ...args);
                    // @ts-ignore
                    f[AsyncCallNotify][AsyncCallNotify] = f[AsyncCallNotify];
                    isString(p) && Object.defineProperty(cache, p, { value: f, configurable: true });
                    return f
                },
            }),
            (r = queue.r) => r && r[0](),
            (error = new Error('Aborted'), r = queue.r) => {
                r && r[1](error);
                queue = [];
            },
        ]
    }

    const generateRandomID = () => Math.random().toString(36).slice(2);

    const undefinedToTrue = (x) => (x === void 0 ? true : x);









    const normalizeLogOptions = (log) => {
        if (log === 'all') return [true, true, true, true, true, true]
        if (!isBoolean(log)) {
            const { beCalled, localError, remoteError, type, requestReplay, sendLocalStack } = log;
            return [
                undefinedToTrue(beCalled),
                undefinedToTrue(localError),
                undefinedToTrue(remoteError),
                type !== 'basic',
                requestReplay,
                sendLocalStack,
            ]
        }
        if (log) return [true, true, true, true] 
        return []
    };

    const normalizeStrictOptions = (strict) => {
        if (!isBoolean(strict)) {
            const { methodNotFound, unknownMessage } = strict;
            return [methodNotFound, unknownMessage] 
        }
        return [strict, strict] 
    };

    /**
     * Create a RPC server & client.
     *
     * @remarks
     * See {@link AsyncCallOptions}
     *
     * thisSideImplementation can be a Promise so you can write:
     *
     * ```ts
     * export const service = AsyncCall(typeof window === 'object' ? {} : import('./backend/service.js'), {})
     * ```
     *
     * @param thisSideImplementation - The implementation when this AsyncCall acts as a JSON RPC server. Can be a Promise.
     * @param options - {@link AsyncCallOptions}
     * @typeParam OtherSideImplementedFunctions - The type of the API that server expose. For any function on this interface, it will be converted to the async version.
     * @returns Same as the `OtherSideImplementedFunctions` type parameter, but every function in that interface becomes async and non-function value is removed. Method called "then" are also removed.
     * @public
     */
    function AsyncCall(
        thisSideImplementation,
        options,
    ) {
        let isThisSideImplementationPending = true;
        let resolvedThisSideImplementationValue = undefined$1;
        let rejectedThisSideImplementation = undefined$1;
        // This promise should never fail
        const awaitThisSideImplementation = async () => {
            try {
                resolvedThisSideImplementationValue = await thisSideImplementation;
            } catch (e) {
                rejectedThisSideImplementation = e;
                console_error('AsyncCall failed to start', e);
            } finally {
                isThisSideImplementationPending = false;
            }
        };

        const {
            serializer = NoSerialization,
            key: logKey = 'rpc',
            strict = true,
            log = true,
            parameterStructures = 'by-position',
            preferLocalImplementation = false,
            idGenerator = generateRandomID,
            mapError,
            logger,
            channel,
            thenable,
        } = options;

        if (thisSideImplementation instanceof Promise) awaitThisSideImplementation();
        else {
            resolvedThisSideImplementationValue = thisSideImplementation;
            isThisSideImplementationPending = false;
        }

        const [banMethodNotFound, banUnknownMessage] = normalizeStrictOptions(strict);
        const [
            log_beCalled,
            log_localError,
            log_remoteError,
            log_pretty,
            log_requestReplay,
            log_sendLocalStack,
        ] = normalizeLogOptions(log);
        const {
            log: console_log,
            error: console_error = console_log,
            debug: console_debug = console_log,
            groupCollapsed: console_groupCollapsed = console_log,
            groupEnd: console_groupEnd = console_log,
            warn: console_warn = console_log,
        } = (logger || console); 

        const requestContext = new Map();
        const onRequest = async (data) => {
            if (isThisSideImplementationPending) await awaitThisSideImplementation();
            else {
                // not pending
                if (rejectedThisSideImplementation) return makeErrorObject(rejectedThisSideImplementation, '', data)
            }
            let frameworkStack = '';
            try {
                const { params, method, id: req_id, remoteStack } = data;
                // ? We're mapping any method starts with 'rpc.' to a Symbol.for
                const key = (method.startsWith('rpc.') ? Symbol.for(method) : method); 
                const executor =
                    resolvedThisSideImplementationValue && (resolvedThisSideImplementationValue )[key];
                if (!isFunction(executor)) {
                    if (!banMethodNotFound) {
                        if (log_localError) console_debug('Missing method', key, data);
                        return
                    } else return ErrorResponseMethodNotFound(req_id)
                }
                const args = isArray(params) ? params : [params];
                frameworkStack = removeStackHeader(new Error().stack);
                const promise = new Promise((resolve) => resolve(executor.apply(resolvedThisSideImplementationValue, args)));
                if (log_beCalled) {
                    if (log_pretty) {
                        const logArgs = [
                            `${logKey}.%c${method}%c(${args.map(() => '%o').join(', ')}%c)\n%o %c@${req_id}`,
                            'color: #d2c057',
                            '',
                            ...args,
                            '',
                            promise,
                            'color: gray; font-style: italic;',
                        ];
                        if (log_requestReplay) {
                            // This function will be logged to the console so it must be 1 line
                            // prettier-ignore
                            const replay = () => { debugger; return executor.apply(resolvedThisSideImplementationValue, args) };
                            replay.toString = replayFunction;
                            logArgs.push(replay);
                        }
                        if (remoteStack) {
                            console_groupCollapsed(...logArgs);
                            console_log(remoteStack);
                            console_groupEnd();
                        } else console_log(...logArgs);
                    } else console_log(`${logKey}.${method}(${[...args].toString()}) @${req_id}`);
                }
                const result = await promise;
                if (result === AsyncCallIgnoreResponse) return
                return SuccessResponse(req_id, await promise)
            } catch (e) {
                return makeErrorObject(e, frameworkStack, data)
            }
        };
        const onResponse = async (data) => {
            let errorMessage = '',
                remoteErrorStack = '',
                errorCode = 0,
                errorType = ERROR;
            if (hasKey(data, 'error')) {
                const e = data.error;
                errorMessage = e.message;
                errorCode = e.code;
                const detail = e.data;

                if (isObject(detail) && hasKey(detail, 'stack') && isString(detail.stack)) remoteErrorStack = detail.stack;
                else remoteErrorStack = '<remote stack not available>';

                if (isObject(detail) && hasKey(detail, 'type') && isString(detail.type)) errorType = detail.type;
                else errorType = ERROR;

                if (log_remoteError)
                    log_pretty
                        ? console_error(
                              `${errorType}: ${errorMessage}(${errorCode}) %c@${data.id}\n%c${remoteErrorStack}`,
                              'color: gray',
                              '',
                          )
                        : console_error(`${errorType}: ${errorMessage}(${errorCode}) @${data.id}\n${remoteErrorStack}`);
            }
            if (data.id === null || data.id === undefined$1) return
            const { f: [resolve, reject] = [null, null], stack: localErrorStack = '' } = requestContext.get(data.id) || {};
            if (!resolve || !reject) return // drop this response
            requestContext.delete(data.id);
            if (hasKey(data, 'error')) {
                reject(
                    RecoverError(
                        errorType,
                        errorMessage,
                        errorCode,
                        // ? We use \u0430 which looks like "a" to prevent browser think "at AsyncCall" is a real stack
                        remoteErrorStack + '\n    \u0430t AsyncCall (rpc) \n' + localErrorStack,
                    ),
                );
            } else {
                resolve(data.result);
            }
            return
        };
        const rawMessageReceiver = async (_) => {
            let data;
            let result = undefined$1;
            try {
                data = await deserialization(_);
                if (isJSONRPCObject(data)) {
                    return (result = await handleSingleMessage(data))
                } else if (isArray(data) && data.every(isJSONRPCObject) && data.length !== 0) {
                    return Promise.all(data.map(handleSingleMessage))
                } else {
                    if (banUnknownMessage) {
                        let id = (data ).id;
                        if (id === undefined$1) id = null;
                        return ErrorResponseInvalidRequest(id)
                    } else {
                        // ? Ignore this message. The message channel maybe also used to transfer other message too.
                        return undefined$1
                    }
                }
            } catch (e) {
                if (log_localError) console_error(e, data, result);
                return ErrorResponseParseError(e, mapError || defaultErrorMapper(e && e.stack))
            }
        };
        const rawMessageSender = async (res) => {
            if (!res) return
            if (isArray(res)) {
                const reply = res.filter((x) => x && hasKey(x, 'id'));
                if (reply.length === 0) return
                return serialization(reply)
            } else {
                return serialization(res)
            }
        };
        const serialization = (x) => serializer.serialization(x);
        const deserialization = (x) => serializer.deserialization(x);
        const isEventBasedChannel = (x) => hasKey(x, 'send') && isFunction(x.send);
        const isCallbackBasedChannel = (x) =>
            hasKey(x, 'setup') && isFunction(x.setup);

        if (isCallbackBasedChannel(channel)) {
            channel.setup(
                (data) => rawMessageReceiver(data).then(rawMessageSender),
                (data) => {
                    const _ = deserialization(data);
                    if (isJSONRPCObject(_)) return true
                    return Promise_resolve(_).then(isJSONRPCObject)
                },
            );
        }
        if (isEventBasedChannel(channel)) {
            const m = channel; 
            m.on &&
                m.on((_) =>
                    rawMessageReceiver(_)
                        .then(rawMessageSender)
                        .then((x) => x && m.send(x)),
                );
        }
        function makeErrorObject(e, frameworkStack, data) {
            if (isObject(e) && hasKey(e, 'stack'))
                e.stack = frameworkStack
                    .split('\n')
                    .reduce((stack, fstack) => stack.replace(fstack + '\n', ''), '' + e.stack);
            if (log_localError) console_error(e);
            return ErrorResponseMapped(data, e, mapError || defaultErrorMapper(log_sendLocalStack ? e.stack : undefined$1))
        }

        async function sendPayload(payload, removeQueueR = false) {
            if (removeQueueR) payload = [...(payload )];
            const data = await serialization(payload);
            return channel.send(data)
        }
        function rejectsQueue(queue, error) {
            for (const x of queue) {
                if (hasKey(x, 'id')) {
                    const ctx = requestContext.get(x.id);
                    ctx && ctx.f[1](error);
                }
            }
        }
        const handleSingleMessage = async (
            data,
        ) => {
            if (hasKey(data, 'method')) {
                const r = onRequest(data);
                if (hasKey(data, 'id')) return r
                try {
                    await r;
                } catch (e2) {}
                return undefined$1 // Does not care about return result for notifications
            }
            return onResponse(data) 
        };
        return new Proxy({ __proto__: null } , {
            get(cache, method) {
                if (method === 'then') {
                    if (thenable === undefined$1) {
                        console_warn(
                            makeHostedMessage(
                                Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options,
                                new TypeError('RPC used as Promise: '),
                            ),
                        );
                    }
                    if (thenable !== true) return undefined$1
                }
                if (isString(method) && cache[method]) return cache[method]
                const factory = (notify) => (...params) => {
                    let stack = removeStackHeader(new Error().stack);
                    let queue = undefined$1;
                    if (method === AsyncCallBatch) {
                        queue = params.shift(); 
                        method = params.shift(); 
                    }
                    if (typeof method === 'symbol') {
                        const RPCInternalMethod = Symbol.keyFor(method) || (method ).description;
                        if (RPCInternalMethod) {
                            if (RPCInternalMethod.startsWith('rpc.')) method = RPCInternalMethod;
                            else return Promise_reject(new TypeError('Not start with rpc.'))
                        }
                    } else if (method.startsWith('rpc.'))
                        return Promise_reject(
                            makeHostedMessage(Err_Cannot_call_method_starts_with_rpc_dot_directly, new TypeError()),
                        )
                    return new Promise((resolve, reject) => {
                        if (preferLocalImplementation && !isThisSideImplementationPending && isString(method)) {
                            const localImpl =
                                resolvedThisSideImplementationValue && (resolvedThisSideImplementationValue )[method];
                            if (isFunction(localImpl)) return resolve(localImpl(...params))
                        }
                        const id = idGenerator();
                        const [param0] = params;
                        const sendingStack = log_sendLocalStack ? stack : '';
                        const param =
                            parameterStructures === 'by-name' && params.length === 1 && isObject(param0) ? param0 : params;
                        const request = Request(notify ? undefined$1 : id, method , param, sendingStack);
                        if (queue) {
                            queue.push(request);
                            if (!queue.r) queue.r = [() => sendPayload(queue, true), (e) => rejectsQueue(queue, e)];
                        } else sendPayload(request).catch(reject);
                        if (notify) return resolve()
                        requestContext.set(id, {
                            f: [resolve, reject],
                            stack,
                        });
                    })
                };
                const f = factory(false);
                // @ts-ignore
                f[AsyncCallNotify] = factory(true);
                // @ts-ignore
                f[AsyncCallNotify][AsyncCallNotify] = f[AsyncCallNotify];
                isString(method) && Object.defineProperty(cache, method, { value: f, configurable: true });
                return f
            },
        }) 
    }
    // Assume a console object in global if there is no custom logger provided

    function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }/**
     * See the document at https://github.com/Jack-Works/async-call/
     */

    const i = 'rpc.async-iterator.';
    // ! side effect
    const AsyncIteratorStart = Symbol.for(i + 'start');
    const AsyncIteratorNext = Symbol.for(i + 'next');
    const AsyncIteratorReturn = Symbol.for(i + 'return');
    const AsyncIteratorThrow = Symbol.for(i + 'throw');
















































    /**
     * The async generator version of the AsyncCall
     * @param thisSideImplementation - The implementation when this AsyncCall acts as a JSON RPC server.
     * @param options - {@link AsyncCallOptions}
     * @typeParam OtherSideImplementedFunctions - The type of the API that server expose. For any function on this interface, AsyncCall will convert it to the Promised type.
     * @remarks
     * Warning: Due to technical limitation, AsyncGeneratorCall will leak memory. Use it at your own risk.
     *
     * To use AsyncGeneratorCall, the server and the client MUST support the following JSON RPC internal methods which is pre ECMAScript async generator semantics:
     *
     * - `rpc.async-iterator.start`
     *
     * - `rpc.async-iterator.next`
     *
     * - `rpc.async-iterator.return`
     *
     * - `rpc.async-iterator.throw`
     *
     * @example
     * ```ts
     * const server = {
     *      async *generator() {
     *          let last = 0
     *          while (true) yield last++
     *      },
     * }
     * type Server = typeof server
     * const serverRPC = AsyncGeneratorCall<Server>({}, { channel })
     * async function main() {
     *      for await (const x of serverRPC.generator()) {
     *          console.log('Server yielded number', x)
     *      }
     * }
     * ```
     * @public
     */
    function AsyncGeneratorCall(
        thisSideImplementation,
        options,
    ) {
        const iterators = new Map();
        const [methodNotFound] = normalizeStrictOptions(_nullishCoalesce(options.strict, () => ( true)));
        const { idGenerator = generateRandomID } = options;
        const findIterator = (
            id,
            next,
        ) => {
            const it = iterators.get(id);
            if (!it) {
                if (methodNotFound)
                    throw makeHostedMessage(Err_Cannot_find_a_running_iterator_with_given_ID, new Error(`Iterator ${id}, `))
                else return AsyncCallIgnoreResponse
            }
            const result = next(it);
            isFinished(result, () => iterators.delete(id));
            return result
        };
        const server = {
            async [AsyncIteratorStart](method, args) {
                const iteratorGenerator = ((await thisSideImplementation) )[method];
                if (!isFunction(iteratorGenerator)) {
                    if (methodNotFound) throw new TypeError(method + ' is not a function')
                    else return AsyncCallIgnoreResponse
                }
                const iterator = iteratorGenerator(...args);
                const id = idGenerator();
                iterators.set(id, iterator);
                return Promise_resolve(id)
            },
            [AsyncIteratorNext](id, val) {
                return findIterator(id, (it) => it.next(val ))
            },
            [AsyncIteratorReturn](id, val) {
                return findIterator(id, (it) => isFunction(it.return) && it.return(val))
            },
            [AsyncIteratorThrow](id, val) {
                return findIterator(id, (it) => isFunction(it.throw) && it.throw(val))
            },
        }; 
        const remote = AsyncCall(server, options);
        const proxyTrap = (cache, key) => {
            if (!isString(key))
                throw makeHostedMessage(Err_Only_string_can_be_the_RPC_method_name, new TypeError(''))
            if (cache[key]) return cache[key]
            const f = (...args) => {
                const id = remote[AsyncIteratorStart](key, args);
                return new _AsyncGenerator(remote, id)
            };
            Object.defineProperty(cache, key, { value: f, configurable: true });
            return f
        };
        return new Proxy({ __proto__: null }, { get: proxyTrap }) 
    }
    class _AsyncGenerator  {
        /** done? */
         __init() {this.d = false;}
        /** check */
         __init2() {this.c = async (val) => {
            await isFinished(val, () => (this.d = true));
            return val
        };}
        /**
         * @param r Remote Implementation
         * @param i id
         */
        constructor( r,  i) {this.r = r;this.i = i;_AsyncGenerator.prototype.__init.call(this);_AsyncGenerator.prototype.__init2.call(this);}
        async return(val) {
            if (this.d) return makeIteratorResult(true, val)
            return this.c(this.r[AsyncIteratorReturn](await this.i, val))
        }
        async next(val) {
            if (this.d) return makeIteratorResult(true)
            return this.c(this.r[AsyncIteratorNext](await this.i, val))
        }
        async throw(val) {
            if (!this.d) return this.c(this.r[AsyncIteratorThrow](await this.i, val))
            throw val
        }
        // Inherited from AsyncGeneratorPrototype
        
    }
    // ! side effect
    const EmptyAsyncGenerator = async function* () {};
    const AsyncGeneratorConstructor = EmptyAsyncGenerator.constructor;
    const AsyncGeneratorConstructorPrototype = AsyncGeneratorConstructor.prototype;
    Object_setPrototypeOf(_AsyncGenerator, AsyncGeneratorConstructorPrototype);
    const AsyncGeneratorPrototype = Object.getPrototypeOf(EmptyAsyncGenerator());
    Object_setPrototypeOf(_AsyncGenerator.prototype, AsyncGeneratorPrototype);

    const isFinished = async (result, cb) => {
        try {
            const x = await result;
            x && x.done && cb();
        } catch (e) {}
    };

    const makeIteratorResult = (done, value = undefined) => ({
        done,
        value,
    });

    exports.AsyncCall = AsyncCall;
    exports.AsyncGeneratorCall = AsyncGeneratorCall;
    exports.JSONSerialization = JSONSerialization;
    exports.NoSerialization = NoSerialization;
    exports.batch = batch;
    exports.notify = notify;

    Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 86050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ WorkerChannel)
/* harmony export */ });
class WorkerChannel {
    /**
     * @param worker Pass the Worker in the main thread.
     */
    constructor(worker = self) {
        Object.defineProperty(this, "worker", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: worker
        });
    }
    on(listener) {
        const f = (ev) => listener(ev.data);
        this.worker.addEventListener('message', f);
        return () => this.worker.removeEventListener('message', f);
    }
    send(data) {
        this.worker.postMessage(data);
    }
}


/***/ }),

/***/ 83638:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LE": () => (/* binding */ AsyncCall),
/* harmony export */   "rc": () => (/* binding */ AsyncGeneratorCall)
/* harmony export */ });
/* unused harmony exports JSONSerialization, NoSerialization, batch, notify */
/// <reference types="./full.d.ts" />
class CustomError extends Error {
    constructor( name, message,  code,  stack) {
        super(message);this.name = name;this.code = code;this.stack = stack;
    }
}
const Err_Cannot_find_a_running_iterator_with_given_ID = {}; 
const Err_Only_string_can_be_the_RPC_method_name = {}; 
const Err_Cannot_call_method_starts_with_rpc_dot_directly = {}; 
const Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options = {}; 
const Messages = [
    Err_Cannot_find_a_running_iterator_with_given_ID,
    Err_Only_string_can_be_the_RPC_method_name,
    Err_Cannot_call_method_starts_with_rpc_dot_directly,
    Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options,
];
// https://github.com/Jack-Works/async-call-rpc/wiki/Error-messages
function makeHostedMessage(id, error) {
    const n = Messages.indexOf(id);
    error.message += `Error ${n}: https://github.com/Jack-Works/async-call-rpc/wiki/Errors#` + n;
    return error
}
// ! side effect
/** These Error is defined in ECMAScript spec */
const errors = {
    // @ts-ignore
    __proto__: null,
    Error,
    EvalError,
    RangeError,
    ReferenceError,
    SyntaxError,
    TypeError,
    URIError,
};
const DOMExceptionHeader = 'DOMException:';
/**
 * AsyncCall support somehow transfer ECMAScript Error
 */
const RecoverError = (type, message, code, stack) => {
    try {
        const E = globalDOMException();
        if (type.startsWith(DOMExceptionHeader) && E) {
            const name = type.slice(DOMExceptionHeader.length);
            return new E(message, name)
        } else if (type in errors) {
            const e = new errors[type](message);
            e.stack = stack;
            // @ts-ignore
            e.code = code;
            return e
        } else {
            return new CustomError(type, message, code, stack)
        }
    } catch (e2) {
        return new Error(`E${code} ${type}: ${message}\n${stack}`)
    }
};
const removeStackHeader = (stack) => String(stack).replace(/^.+\n.+\n/, '');
// ! side effect
const globalDOMException = (() => {
    try {
        // @ts-ignore
        return DOMException
    } catch (e3) {}
});

const isString = (x) => typeof x === 'string';
const isBoolean = (x) => typeof x === 'boolean';
const isFunction = (x) => typeof x === 'function';
const isObject = (params) => typeof params === 'object' && params !== null;
const ERROR = 'Error';
const undefined$1 = void 0;
const Object_setPrototypeOf = Object.setPrototypeOf;
const Promise_reject = (x) => Promise.reject(x);
const Promise_resolve = (x) => Promise.resolve(x);
const isArray = Array.isArray;
const replayFunction = () => '() => replay()';

const jsonrpc = '2.0';













const Request = (id, method, params, remoteStack) => {
    const x = { jsonrpc, id, method, params, remoteStack };
    deleteUndefined(x, 'id');
    deleteFalsy(x, 'remoteStack');
    return x
};

/**
 * JSONRPC SuccessResponse object.
 */






const SuccessResponse = (id, result) => {
    const x = { jsonrpc, id, result };
    deleteUndefined(x, 'id');
    return x
};

/**
 * JSONRPC ErrorResponse object.
 * @public
 */







const ErrorResponse = (id, code, message, data) => {
    if (id === undefined$1) id = null;
    code = Math.floor(code);
    if (Number.isNaN(code)) code = -1;
    const x = { jsonrpc, id, error: { code, message, data } };
    deleteUndefined(x.error, 'data');
    return x
};
// Pre defined error in section 5.1
// ! side effect
const ErrorResponseParseError = (e, mapper) => {
    const obj = ErrorResponseMapped({} , e, mapper);
    const o = obj.error; 
    o.code = -32700;
    o.message = 'Parse error';
    return obj
};

// Not using.
// InvalidParams -32602 'Invalid params'
// InternalError -32603 'Internal error'
const ErrorResponseInvalidRequest = (id) => ErrorResponse(id, -32600, 'Invalid Request');
const ErrorResponseMethodNotFound = (id) => ErrorResponse(id, -32601, 'Method not found');





const ErrorResponseMapped = (request, e, mapper) => {
    const { id } = request;
    const { code, message, data } = mapper(e, request);
    return ErrorResponse(id, code, message, data)
};

const defaultErrorMapper = (stack = '', code = -1) => (e) => {
    let message = toString('', () => (e ).message);
    let type = toString(ERROR, (ctor = (e ).constructor) => isFunction(ctor) && ctor.name);
    const E = globalDOMException();
    if (E && e instanceof E) type = DOMExceptionHeader + e.name;
    if (isString(e) || typeof e === 'number' || isBoolean(e) || typeof e === 'bigint') {
        type = ERROR;
        message = String(e);
    }
    const data = stack ? { stack, type } : { type };
    return { code, message, data }
};

/**
 * A JSONRPC response object
 */


const isJSONRPCObject = (data) => {
    if (!isObject(data)) return false
    if (!hasKey(data, 'jsonrpc')) return false
    if (data.jsonrpc !== jsonrpc) return false
    if (hasKey(data, 'params')) {
        const params = (data ).params;
        if (!isArray(params) && !isObject(params)) return false
    }
    return true
};

const hasKey = (
    obj,
    key,



) => key in obj;

const toString = (_default, val) => {
    try {
        const v = val();
        if (v === undefined$1) return _default
        return String(v)
    } catch (e2) {
        return _default
    }
};
const deleteUndefined = (x, key) => {
    if (x[key] === undefined$1) delete x[key];
};
const deleteFalsy = (x, key) => {
    if (!x[key]) delete x[key];
};

//#region Serialization



/**
 * Serialization implementation that do nothing
 * @remarks {@link Serialization}
 * @public
 */
const NoSerialization = {
    serialization(from) {
        return from
    },
    deserialization(serialized) {
        return serialized
    },
};

/**
 * Create a serialization by JSON.parse/stringify
 *
 * @param replacerAndReceiver - Replacer and receiver of JSON.parse/stringify
 * @param space - Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
 * @param undefinedKeepingBehavior - How to keep "undefined" in result of SuccessResponse?
 *
 * If it is not handled properly, JSON.stringify will emit an invalid JSON RPC object.
 *
 * Options:
 * - `"null"`(**default**): convert it to null.
 * - `"keep"`: try to keep it by additional property "undef".
 * - `false`: Don't keep it, let it break.
 * @remarks {@link Serialization}
 * @public
 */
const JSONSerialization = (
    replacerAndReceiver = [
        undefined$1,
        undefined$1,
    ],
    space,
    undefinedKeepingBehavior = 'null',
) => ({
    serialization(from) {
        if (undefinedKeepingBehavior && isObject(from) && hasKey(from, 'result') && from.result === undefined$1) {
            const alt = { ...from };
            alt.result = null;
            if (undefinedKeepingBehavior === 'keep') (alt ).undef = true;
            from = alt;
        }
        return JSON.stringify(from, replacerAndReceiver[0], space)
    },
    deserialization(serialized) {
        const result = JSON.parse(serialized , replacerAndReceiver[1]);
        if (
            isObject(result) &&
            hasKey(result, 'result') &&
            result.result === null &&
            hasKey(result, 'undef') &&
            result.undef === true
        ) {
            result.result = undefined$1;
            delete result.undef;
        }
        return result
    },
});
//#endregion

const i$1 = 'AsyncCall/';
// ! side effect
const AsyncCallIgnoreResponse = Symbol.for(i$1 + 'ignored');
const AsyncCallNotify = Symbol.for(i$1 + 'notify');
const AsyncCallBatch = Symbol.for(i$1 + 'batch');

/**
 * Make the returning type to `Promise<void>`
 * @internal
 * @remarks
 * Due to the limitation of TypeScript, generic signatures cannot be preserved
 * if the function is the top level parameter of this utility type,
 * or the function is not returning `Promise<void>`.
 */











/**
 * Wrap the AsyncCall instance to send notification.
 * @param instanceOrFnOnInstance - The AsyncCall instance or function on the AsyncCall instance
 * @example
 * const notifyOnly = notify(AsyncCall(...))
 * @public
 */

function notify(instanceOrFnOnInstance) {
    if (isFunction(instanceOrFnOnInstance)) return (instanceOrFnOnInstance )[AsyncCallNotify]
    return new Proxy(instanceOrFnOnInstance, { get: notifyTrap }) 
}
const notifyTrap = (target, p) => {
    return target[p][AsyncCallNotify]
};

/**
 * Wrap the AsyncCall instance to use batch call.
 * @param asyncCallInstance - The AsyncCall instance
 * @example
 * const [batched, send, drop] = batch(AsyncCall(...))
 * batched.call1() // pending
 * batched.call2() // pending
 * send() // send all pending requests
 * drop() // drop all pending requests
 * @returns It will return a tuple.
 *
 * The first item is the batched version of AsyncCall instance passed in.
 *
 * The second item is a function to send all pending requests.
 *
 * The third item is a function to drop and reject all pending requests.
 * @public
 */
function batch(asyncCallInstance) {
    let queue = []; 
    return [
        new Proxy({ __proto__: null } , {
            get(cache, p) {
                if (isString(p) && cache[p]) return cache[p]
                // @ts-ignore
                const f = (...args) => asyncCallInstance[AsyncCallBatch](queue, p, ...args);
                // @ts-ignore
                f[AsyncCallNotify] = (...args) =>
                    // @ts-ignore
                    asyncCallInstance[AsyncCallBatch][AsyncCallNotify](queue, p, ...args);
                // @ts-ignore
                f[AsyncCallNotify][AsyncCallNotify] = f[AsyncCallNotify];
                isString(p) && Object.defineProperty(cache, p, { value: f, configurable: true });
                return f
            },
        }),
        (r = queue.r) => r && r[0](),
        (error = new Error('Aborted'), r = queue.r) => {
            r && r[1](error);
            queue = [];
        },
    ]
}

const generateRandomID = () => Math.random().toString(36).slice(2);

const undefinedToTrue = (x) => (x === void 0 ? true : x);









const normalizeLogOptions = (log) => {
    if (log === 'all') return [true, true, true, true, true, true]
    if (!isBoolean(log)) {
        const { beCalled, localError, remoteError, type, requestReplay, sendLocalStack } = log;
        return [
            undefinedToTrue(beCalled),
            undefinedToTrue(localError),
            undefinedToTrue(remoteError),
            type !== 'basic',
            requestReplay,
            sendLocalStack,
        ]
    }
    if (log) return [true, true, true, true] 
    return []
};

const normalizeStrictOptions = (strict) => {
    if (!isBoolean(strict)) {
        const { methodNotFound, unknownMessage } = strict;
        return [methodNotFound, unknownMessage] 
    }
    return [strict, strict] 
};

/**
 * Create a RPC server & client.
 *
 * @remarks
 * See {@link AsyncCallOptions}
 *
 * thisSideImplementation can be a Promise so you can write:
 *
 * ```ts
 * export const service = AsyncCall(typeof window === 'object' ? {} : import('./backend/service.js'), {})
 * ```
 *
 * @param thisSideImplementation - The implementation when this AsyncCall acts as a JSON RPC server. Can be a Promise.
 * @param options - {@link AsyncCallOptions}
 * @typeParam OtherSideImplementedFunctions - The type of the API that server expose. For any function on this interface, it will be converted to the async version.
 * @returns Same as the `OtherSideImplementedFunctions` type parameter, but every function in that interface becomes async and non-function value is removed. Method called "then" are also removed.
 * @public
 */
function AsyncCall(
    thisSideImplementation,
    options,
) {
    let isThisSideImplementationPending = true;
    let resolvedThisSideImplementationValue = undefined$1;
    let rejectedThisSideImplementation = undefined$1;
    // This promise should never fail
    const awaitThisSideImplementation = async () => {
        try {
            resolvedThisSideImplementationValue = await thisSideImplementation;
        } catch (e) {
            rejectedThisSideImplementation = e;
            console_error('AsyncCall failed to start', e);
        } finally {
            isThisSideImplementationPending = false;
        }
    };

    const {
        serializer = NoSerialization,
        key: logKey = 'rpc',
        strict = true,
        log = true,
        parameterStructures = 'by-position',
        preferLocalImplementation = false,
        idGenerator = generateRandomID,
        mapError,
        logger,
        channel,
        thenable,
    } = options;

    if (thisSideImplementation instanceof Promise) awaitThisSideImplementation();
    else {
        resolvedThisSideImplementationValue = thisSideImplementation;
        isThisSideImplementationPending = false;
    }

    const [banMethodNotFound, banUnknownMessage] = normalizeStrictOptions(strict);
    const [
        log_beCalled,
        log_localError,
        log_remoteError,
        log_pretty,
        log_requestReplay,
        log_sendLocalStack,
    ] = normalizeLogOptions(log);
    const {
        log: console_log,
        error: console_error = console_log,
        debug: console_debug = console_log,
        groupCollapsed: console_groupCollapsed = console_log,
        groupEnd: console_groupEnd = console_log,
        warn: console_warn = console_log,
    } = (logger || console); 

    const requestContext = new Map();
    const onRequest = async (data) => {
        if (isThisSideImplementationPending) await awaitThisSideImplementation();
        else {
            // not pending
            if (rejectedThisSideImplementation) return makeErrorObject(rejectedThisSideImplementation, '', data)
        }
        let frameworkStack = '';
        try {
            const { params, method, id: req_id, remoteStack } = data;
            // ? We're mapping any method starts with 'rpc.' to a Symbol.for
            const key = (method.startsWith('rpc.') ? Symbol.for(method) : method); 
            const executor =
                resolvedThisSideImplementationValue && (resolvedThisSideImplementationValue )[key];
            if (!isFunction(executor)) {
                if (!banMethodNotFound) {
                    if (log_localError) console_debug('Missing method', key, data);
                    return
                } else return ErrorResponseMethodNotFound(req_id)
            }
            const args = isArray(params) ? params : [params];
            frameworkStack = removeStackHeader(new Error().stack);
            const promise = new Promise((resolve) => resolve(executor.apply(resolvedThisSideImplementationValue, args)));
            if (log_beCalled) {
                if (log_pretty) {
                    const logArgs = [
                        `${logKey}.%c${method}%c(${args.map(() => '%o').join(', ')}%c)\n%o %c@${req_id}`,
                        'color: #d2c057',
                        '',
                        ...args,
                        '',
                        promise,
                        'color: gray; font-style: italic;',
                    ];
                    if (log_requestReplay) {
                        // This function will be logged to the console so it must be 1 line
                        // prettier-ignore
                        const replay = () => { debugger; return executor.apply(resolvedThisSideImplementationValue, args) };
                        replay.toString = replayFunction;
                        logArgs.push(replay);
                    }
                    if (remoteStack) {
                        console_groupCollapsed(...logArgs);
                        console_log(remoteStack);
                        console_groupEnd();
                    } else console_log(...logArgs);
                } else console_log(`${logKey}.${method}(${[...args].toString()}) @${req_id}`);
            }
            const result = await promise;
            if (result === AsyncCallIgnoreResponse) return
            return SuccessResponse(req_id, await promise)
        } catch (e) {
            return makeErrorObject(e, frameworkStack, data)
        }
    };
    const onResponse = async (data) => {
        let errorMessage = '',
            remoteErrorStack = '',
            errorCode = 0,
            errorType = ERROR;
        if (hasKey(data, 'error')) {
            const e = data.error;
            errorMessage = e.message;
            errorCode = e.code;
            const detail = e.data;

            if (isObject(detail) && hasKey(detail, 'stack') && isString(detail.stack)) remoteErrorStack = detail.stack;
            else remoteErrorStack = '<remote stack not available>';

            if (isObject(detail) && hasKey(detail, 'type') && isString(detail.type)) errorType = detail.type;
            else errorType = ERROR;

            if (log_remoteError)
                log_pretty
                    ? console_error(
                          `${errorType}: ${errorMessage}(${errorCode}) %c@${data.id}\n%c${remoteErrorStack}`,
                          'color: gray',
                          '',
                      )
                    : console_error(`${errorType}: ${errorMessage}(${errorCode}) @${data.id}\n${remoteErrorStack}`);
        }
        if (data.id === null || data.id === undefined$1) return
        const { f: [resolve, reject] = [null, null], stack: localErrorStack = '' } = requestContext.get(data.id) || {};
        if (!resolve || !reject) return // drop this response
        requestContext.delete(data.id);
        if (hasKey(data, 'error')) {
            reject(
                RecoverError(
                    errorType,
                    errorMessage,
                    errorCode,
                    // ? We use \u0430 which looks like "a" to prevent browser think "at AsyncCall" is a real stack
                    remoteErrorStack + '\n    \u0430t AsyncCall (rpc) \n' + localErrorStack,
                ),
            );
        } else {
            resolve(data.result);
        }
        return
    };
    const rawMessageReceiver = async (_) => {
        let data;
        let result = undefined$1;
        try {
            data = await deserialization(_);
            if (isJSONRPCObject(data)) {
                return (result = await handleSingleMessage(data))
            } else if (isArray(data) && data.every(isJSONRPCObject) && data.length !== 0) {
                return Promise.all(data.map(handleSingleMessage))
            } else {
                if (banUnknownMessage) {
                    let id = (data ).id;
                    if (id === undefined$1) id = null;
                    return ErrorResponseInvalidRequest(id)
                } else {
                    // ? Ignore this message. The message channel maybe also used to transfer other message too.
                    return undefined$1
                }
            }
        } catch (e) {
            if (log_localError) console_error(e, data, result);
            return ErrorResponseParseError(e, mapError || defaultErrorMapper(e && e.stack))
        }
    };
    const rawMessageSender = async (res) => {
        if (!res) return
        if (isArray(res)) {
            const reply = res.filter((x) => x && hasKey(x, 'id'));
            if (reply.length === 0) return
            return serialization(reply)
        } else {
            return serialization(res)
        }
    };
    const serialization = (x) => serializer.serialization(x);
    const deserialization = (x) => serializer.deserialization(x);
    const isEventBasedChannel = (x) => hasKey(x, 'send') && isFunction(x.send);
    const isCallbackBasedChannel = (x) =>
        hasKey(x, 'setup') && isFunction(x.setup);

    if (isCallbackBasedChannel(channel)) {
        channel.setup(
            (data) => rawMessageReceiver(data).then(rawMessageSender),
            (data) => {
                const _ = deserialization(data);
                if (isJSONRPCObject(_)) return true
                return Promise_resolve(_).then(isJSONRPCObject)
            },
        );
    }
    if (isEventBasedChannel(channel)) {
        const m = channel; 
        m.on &&
            m.on((_) =>
                rawMessageReceiver(_)
                    .then(rawMessageSender)
                    .then((x) => x && m.send(x)),
            );
    }
    function makeErrorObject(e, frameworkStack, data) {
        if (isObject(e) && hasKey(e, 'stack'))
            e.stack = frameworkStack
                .split('\n')
                .reduce((stack, fstack) => stack.replace(fstack + '\n', ''), '' + e.stack);
        if (log_localError) console_error(e);
        return ErrorResponseMapped(data, e, mapError || defaultErrorMapper(log_sendLocalStack ? e.stack : undefined$1))
    }

    async function sendPayload(payload, removeQueueR = false) {
        if (removeQueueR) payload = [...(payload )];
        const data = await serialization(payload);
        return channel.send(data)
    }
    function rejectsQueue(queue, error) {
        for (const x of queue) {
            if (hasKey(x, 'id')) {
                const ctx = requestContext.get(x.id);
                ctx && ctx.f[1](error);
            }
        }
    }
    const handleSingleMessage = async (
        data,
    ) => {
        if (hasKey(data, 'method')) {
            const r = onRequest(data);
            if (hasKey(data, 'id')) return r
            try {
                await r;
            } catch (e2) {}
            return undefined$1 // Does not care about return result for notifications
        }
        return onResponse(data) 
    };
    return new Proxy({ __proto__: null } , {
        get(cache, method) {
            if (method === 'then') {
                if (thenable === undefined$1) {
                    console_warn(
                        makeHostedMessage(
                            Err_Then_is_accessed_on_local_implementation_Please_explicitly_mark_if_it_is_thenable_in_the_options,
                            new TypeError('RPC used as Promise: '),
                        ),
                    );
                }
                if (thenable !== true) return undefined$1
            }
            if (isString(method) && cache[method]) return cache[method]
            const factory = (notify) => (...params) => {
                let stack = removeStackHeader(new Error().stack);
                let queue = undefined$1;
                if (method === AsyncCallBatch) {
                    queue = params.shift(); 
                    method = params.shift(); 
                }
                if (typeof method === 'symbol') {
                    const RPCInternalMethod = Symbol.keyFor(method) || (method ).description;
                    if (RPCInternalMethod) {
                        if (RPCInternalMethod.startsWith('rpc.')) method = RPCInternalMethod;
                        else return Promise_reject(new TypeError('Not start with rpc.'))
                    }
                } else if (method.startsWith('rpc.'))
                    return Promise_reject(
                        makeHostedMessage(Err_Cannot_call_method_starts_with_rpc_dot_directly, new TypeError()),
                    )
                return new Promise((resolve, reject) => {
                    if (preferLocalImplementation && !isThisSideImplementationPending && isString(method)) {
                        const localImpl =
                            resolvedThisSideImplementationValue && (resolvedThisSideImplementationValue )[method];
                        if (isFunction(localImpl)) return resolve(localImpl(...params))
                    }
                    const id = idGenerator();
                    const [param0] = params;
                    const sendingStack = log_sendLocalStack ? stack : '';
                    const param =
                        parameterStructures === 'by-name' && params.length === 1 && isObject(param0) ? param0 : params;
                    const request = Request(notify ? undefined$1 : id, method , param, sendingStack);
                    if (queue) {
                        queue.push(request);
                        if (!queue.r) queue.r = [() => sendPayload(queue, true), (e) => rejectsQueue(queue, e)];
                    } else sendPayload(request).catch(reject);
                    if (notify) return resolve()
                    requestContext.set(id, {
                        f: [resolve, reject],
                        stack,
                    });
                })
            };
            const f = factory(false);
            // @ts-ignore
            f[AsyncCallNotify] = factory(true);
            // @ts-ignore
            f[AsyncCallNotify][AsyncCallNotify] = f[AsyncCallNotify];
            isString(method) && Object.defineProperty(cache, method, { value: f, configurable: true });
            return f
        },
    }) 
}
// Assume a console object in global if there is no custom logger provided

function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }/**
 * See the document at https://github.com/Jack-Works/async-call/
 */

const i = 'rpc.async-iterator.';
// ! side effect
const AsyncIteratorStart = Symbol.for(i + 'start');
const AsyncIteratorNext = Symbol.for(i + 'next');
const AsyncIteratorReturn = Symbol.for(i + 'return');
const AsyncIteratorThrow = Symbol.for(i + 'throw');
















































/**
 * The async generator version of the AsyncCall
 * @param thisSideImplementation - The implementation when this AsyncCall acts as a JSON RPC server.
 * @param options - {@link AsyncCallOptions}
 * @typeParam OtherSideImplementedFunctions - The type of the API that server expose. For any function on this interface, AsyncCall will convert it to the Promised type.
 * @remarks
 * Warning: Due to technical limitation, AsyncGeneratorCall will leak memory. Use it at your own risk.
 *
 * To use AsyncGeneratorCall, the server and the client MUST support the following JSON RPC internal methods which is pre ECMAScript async generator semantics:
 *
 * - `rpc.async-iterator.start`
 *
 * - `rpc.async-iterator.next`
 *
 * - `rpc.async-iterator.return`
 *
 * - `rpc.async-iterator.throw`
 *
 * @example
 * ```ts
 * const server = {
 *      async *generator() {
 *          let last = 0
 *          while (true) yield last++
 *      },
 * }
 * type Server = typeof server
 * const serverRPC = AsyncGeneratorCall<Server>({}, { channel })
 * async function main() {
 *      for await (const x of serverRPC.generator()) {
 *          console.log('Server yielded number', x)
 *      }
 * }
 * ```
 * @public
 */
function AsyncGeneratorCall(
    thisSideImplementation,
    options,
) {
    const iterators = new Map();
    const [methodNotFound] = normalizeStrictOptions(_nullishCoalesce(options.strict, () => ( true)));
    const { idGenerator = generateRandomID } = options;
    const findIterator = (
        id,
        next,
    ) => {
        const it = iterators.get(id);
        if (!it) {
            if (methodNotFound)
                throw makeHostedMessage(Err_Cannot_find_a_running_iterator_with_given_ID, new Error(`Iterator ${id}, `))
            else return AsyncCallIgnoreResponse
        }
        const result = next(it);
        isFinished(result, () => iterators.delete(id));
        return result
    };
    const server = {
        async [AsyncIteratorStart](method, args) {
            const iteratorGenerator = ((await thisSideImplementation) )[method];
            if (!isFunction(iteratorGenerator)) {
                if (methodNotFound) throw new TypeError(method + ' is not a function')
                else return AsyncCallIgnoreResponse
            }
            const iterator = iteratorGenerator(...args);
            const id = idGenerator();
            iterators.set(id, iterator);
            return Promise_resolve(id)
        },
        [AsyncIteratorNext](id, val) {
            return findIterator(id, (it) => it.next(val ))
        },
        [AsyncIteratorReturn](id, val) {
            return findIterator(id, (it) => isFunction(it.return) && it.return(val))
        },
        [AsyncIteratorThrow](id, val) {
            return findIterator(id, (it) => isFunction(it.throw) && it.throw(val))
        },
    }; 
    const remote = AsyncCall(server, options);
    const proxyTrap = (cache, key) => {
        if (!isString(key))
            throw makeHostedMessage(Err_Only_string_can_be_the_RPC_method_name, new TypeError(''))
        if (cache[key]) return cache[key]
        const f = (...args) => {
            const id = remote[AsyncIteratorStart](key, args);
            return new _AsyncGenerator(remote, id)
        };
        Object.defineProperty(cache, key, { value: f, configurable: true });
        return f
    };
    return new Proxy({ __proto__: null }, { get: proxyTrap }) 
}
class _AsyncGenerator  {
    /** done? */
     __init() {this.d = false;}
    /** check */
     __init2() {this.c = async (val) => {
        await isFinished(val, () => (this.d = true));
        return val
    };}
    /**
     * @param r Remote Implementation
     * @param i id
     */
    constructor( r,  i) {this.r = r;this.i = i;_AsyncGenerator.prototype.__init.call(this);_AsyncGenerator.prototype.__init2.call(this);}
    async return(val) {
        if (this.d) return makeIteratorResult(true, val)
        return this.c(this.r[AsyncIteratorReturn](await this.i, val))
    }
    async next(val) {
        if (this.d) return makeIteratorResult(true)
        return this.c(this.r[AsyncIteratorNext](await this.i, val))
    }
    async throw(val) {
        if (!this.d) return this.c(this.r[AsyncIteratorThrow](await this.i, val))
        throw val
    }
    // Inherited from AsyncGeneratorPrototype
    
}
// ! side effect
const EmptyAsyncGenerator = async function* () {};
const AsyncGeneratorConstructor = EmptyAsyncGenerator.constructor;
const AsyncGeneratorConstructorPrototype = AsyncGeneratorConstructor.prototype;
Object_setPrototypeOf(_AsyncGenerator, AsyncGeneratorConstructorPrototype);
const AsyncGeneratorPrototype = Object.getPrototypeOf(EmptyAsyncGenerator());
Object_setPrototypeOf(_AsyncGenerator.prototype, AsyncGeneratorPrototype);

const isFinished = async (result, cb) => {
    try {
        const x = await result;
        x && x.done && cb();
    } catch (e) {}
};

const makeIteratorResult = (done, value = undefined) => ({
    done,
    value,
});


//# sourceMappingURL=full.mjs.map


/***/ })

}]);