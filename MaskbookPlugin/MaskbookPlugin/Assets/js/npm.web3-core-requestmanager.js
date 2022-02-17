"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[8056],{

/***/ 63376:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file batch.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var Jsonrpc = __webpack_require__(68403);
var errors = __webpack_require__(80071).errors;
var Batch = function (requestManager) {
    this.requestManager = requestManager;
    this.requests = [];
};
/**
 * Should be called to add create new request to batch request
 *
 * @method add
 * @param {Object} jsonrpc requet object
 */
Batch.prototype.add = function (request) {
    this.requests.push(request);
};
/**
 * Should be called to execute batch request
 *
 * @method execute
 */
Batch.prototype.execute = function () {
    var requests = this.requests;
    this.requestManager.sendBatch(requests, function (err, results) {
        results = results || [];
        requests.map(function (request, index) {
            return results[index] || {};
        }).forEach(function (result, index) {
            if (requests[index].callback) {
                if (result && result.error) {
                    return requests[index].callback(errors.ErrorResponse(result));
                }
                if (!Jsonrpc.isValidResponse(result)) {
                    return requests[index].callback(errors.InvalidResponse(result));
                }
                try {
                    requests[index].callback(null, requests[index].format ? requests[index].format(result.result) : result.result);
                }
                catch (err) {
                    requests[index].callback(err);
                }
            }
        });
    });
};
module.exports = Batch;


/***/ }),

/***/ 78910:
/***/ ((module) => {

/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file givenProvider.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var givenProvider = null;
// ADD GIVEN PROVIDER
/* jshint ignore:start */
var global;
try {
    global = Function('return this')();
}
catch (e) {
    global = window;
}
// EIP-1193: window.ethereum
if (typeof global.ethereum !== 'undefined') {
    givenProvider = global.ethereum;
    // Legacy web3.currentProvider
}
else if (typeof global.web3 !== 'undefined' && global.web3.currentProvider) {
    if (global.web3.currentProvider.sendAsync) {
        global.web3.currentProvider.send = global.web3.currentProvider.sendAsync;
        delete global.web3.currentProvider.sendAsync;
    }
    // if connection is 'ipcProviderWrapper', add subscription support
    if (!global.web3.currentProvider.on &&
        global.web3.currentProvider.connection &&
        global.web3.currentProvider.connection.constructor.name === 'ipcProviderWrapper') {
        global.web3.currentProvider.on = function (type, callback) {
            if (typeof callback !== 'function')
                throw new Error('The second parameter callback must be a function.');
            switch (type) {
                case 'data':
                    this.connection.on('data', function (data) {
                        var result = '';
                        data = data.toString();
                        try {
                            result = JSON.parse(data);
                        }
                        catch (e) {
                            return callback(new Error('Couldn\'t parse response data' + data));
                        }
                        // notification
                        if (!result.id && result.method.indexOf('_subscription') !== -1) {
                            callback(null, result);
                        }
                    });
                    break;
                default:
                    this.connection.on(type, callback);
                    break;
            }
        };
    }
    givenProvider = global.web3.currentProvider;
}
/* jshint ignore:end */
module.exports = givenProvider;


/***/ }),

/***/ 81773:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

const { callbackify } = __webpack_require__(65754);
var _ = __webpack_require__(71589);
var errors = __webpack_require__(80071).errors;
var Jsonrpc = __webpack_require__(68403);
var BatchManager = __webpack_require__(63376);
var givenProvider = __webpack_require__(78910);
/**
 * It's responsible for passing messages to providers
 * It's also responsible for polling the ethereum node for incoming messages
 * Default poll timeout is 1 second
 * Singleton
 *
 * @param {string|Object}provider
 * @param {Net.Socket} net
 *
 * @constructor
 */
var RequestManager = function RequestManager(provider, net) {
    this.provider = null;
    this.providers = RequestManager.providers;
    this.setProvider(provider, net);
    this.subscriptions = new Map();
};
RequestManager.givenProvider = givenProvider;
RequestManager.providers = {
    WebsocketProvider: __webpack_require__(36421),
    HttpProvider: __webpack_require__(40120),
    IpcProvider: __webpack_require__(15585)
};
/**
 * Should be used to set provider of request manager
 *
 * @method setProvider
 *
 * @param {Object} provider
 * @param {net.Socket} net
 *
 * @returns void
 */
RequestManager.prototype.setProvider = function (provider, net) {
    var _this = this;
    // autodetect provider
    if (provider && typeof provider === 'string' && this.providers) {
        // HTTP
        if (/^http(s)?:\/\//i.test(provider)) {
            provider = new this.providers.HttpProvider(provider);
            // WS
        }
        else if (/^ws(s)?:\/\//i.test(provider)) {
            provider = new this.providers.WebsocketProvider(provider);
            // IPC
        }
        else if (provider && typeof net === 'object' && typeof net.connect === 'function') {
            provider = new this.providers.IpcProvider(provider, net);
        }
        else if (provider) {
            throw new Error('Can\'t autodetect provider for "' + provider + '"');
        }
    }
    // reset the old one before changing, if still connected
    if (this.provider && this.provider.connected)
        this.clearSubscriptions();
    this.provider = provider || null;
    // listen to incoming notifications
    if (this.provider && this.provider.on) {
        if (typeof provider.request === 'function') { // EIP-1193 provider
            this.provider.on('message', function (payload) {
                if (payload && payload.type === 'eth_subscription' && payload.data) {
                    const data = payload.data;
                    if (data.subscription && _this.subscriptions.has(data.subscription)) {
                        _this.subscriptions.get(data.subscription).callback(null, data.result);
                    }
                }
            });
        }
        else { // legacy provider subscription event
            this.provider.on('data', function data(result, deprecatedResult) {
                result = result || deprecatedResult; // this is for possible old providers, which may had the error first handler
                // if result is a subscription, call callback for that subscription
                if (result.method && result.params && result.params.subscription && _this.subscriptions.has(result.params.subscription)) {
                    _this.subscriptions.get(result.params.subscription).callback(null, result.params.result);
                }
            });
        }
        // resubscribe if the provider has reconnected
        this.provider.on('connect', function connect() {
            _this.subscriptions.forEach(function (subscription) {
                subscription.subscription.resubscribe();
            });
        });
        // notify all subscriptions about the error condition
        this.provider.on('error', function error(error) {
            _this.subscriptions.forEach(function (subscription) {
                subscription.callback(error);
            });
        });
        // notify all subscriptions about bad close conditions
        const disconnect = function disconnect(event) {
            if (!_this._isCleanCloseEvent(event) || _this._isIpcCloseError(event)) {
                _this.subscriptions.forEach(function (subscription) {
                    subscription.callback(errors.ConnectionCloseError(event));
                    _this.subscriptions.delete(subscription.subscription.id);
                });
                if (_this.provider && _this.provider.emit) {
                    _this.provider.emit('error', errors.ConnectionCloseError(event));
                }
            }
            if (_this.provider && _this.provider.emit) {
                _this.provider.emit('end', event);
            }
        };
        // TODO: Remove close once the standard allows it
        this.provider.on('close', disconnect);
        this.provider.on('disconnect', disconnect);
        // TODO add end, timeout??
    }
};
/**
 * Asynchronously send request to provider.
 * Prefers to use the `request` method available on the provider as specified in [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193).
 * If `request` is not available, falls back to `sendAsync` and `send` respectively.
 * @method send
 * @param {Object} data
 * @param {Function} callback
 */
RequestManager.prototype.send = function (data, callback) {
    callback = callback || function () { };
    if (!this.provider) {
        return callback(errors.InvalidProvider());
    }
    const { method, params } = data;
    const jsonrpcPayload = Jsonrpc.toPayload(method, params);
    const jsonrpcResultCallback = this._jsonrpcResultCallback(callback, jsonrpcPayload);
    if (this.provider.request) {
        const callbackRequest = callbackify(this.provider.request.bind(this.provider));
        const requestArgs = { method, params };
        callbackRequest(requestArgs, callback);
    }
    else if (this.provider.sendAsync) {
        this.provider.sendAsync(jsonrpcPayload, jsonrpcResultCallback);
    }
    else if (this.provider.send) {
        this.provider.send(jsonrpcPayload, jsonrpcResultCallback);
    }
    else {
        throw new Error('Provider does not have a request or send method to use.');
    }
};
/**
 * Asynchronously send batch request.
 * Only works if provider supports batch methods through `sendAsync` or `send`.
 * @method sendBatch
 * @param {Array} data - array of payload objects
 * @param {Function} callback
 */
RequestManager.prototype.sendBatch = function (data, callback) {
    if (!this.provider) {
        return callback(errors.InvalidProvider());
    }
    var payload = Jsonrpc.toBatchPayload(data);
    this.provider[this.provider.sendAsync ? 'sendAsync' : 'send'](payload, function (err, results) {
        if (err) {
            return callback(err);
        }
        if (!_.isArray(results)) {
            return callback(errors.InvalidResponse(results));
        }
        callback(null, results);
    });
};
/**
 * Waits for notifications
 *
 * @method addSubscription
 * @param {Subscription} subscription         the subscription
 * @param {String} type         the subscription namespace (eth, personal, etc)
 * @param {Function} callback   the callback to call for incoming notifications
 */
RequestManager.prototype.addSubscription = function (subscription, callback) {
    if (this.provider.on) {
        this.subscriptions.set(subscription.id, {
            callback: callback,
            subscription: subscription
        });
    }
    else {
        throw new Error('The provider doesn\'t support subscriptions: ' + this.provider.constructor.name);
    }
};
/**
 * Waits for notifications
 *
 * @method removeSubscription
 * @param {String} id           the subscription id
 * @param {Function} callback   fired once the subscription is removed
 */
RequestManager.prototype.removeSubscription = function (id, callback) {
    if (this.subscriptions.has(id)) {
        var type = this.subscriptions.get(id).subscription.options.type;
        // remove subscription first to avoid reentry
        this.subscriptions.delete(id);
        // then, try to actually unsubscribe
        this.send({
            method: type + '_unsubscribe',
            params: [id]
        }, callback);
        return;
    }
    if (typeof callback === 'function') {
        // call the callback if the subscription was already removed
        callback(null);
    }
};
/**
 * Should be called to reset the subscriptions
 *
 * @method reset
 *
 * @returns {boolean}
 */
RequestManager.prototype.clearSubscriptions = function (keepIsSyncing) {
    try {
        var _this = this;
        // uninstall all subscriptions
        if (this.subscriptions.size > 0) {
            this.subscriptions.forEach(function (value, id) {
                if (!keepIsSyncing || value.name !== 'syncing')
                    _this.removeSubscription(id);
            });
        }
        //  reset notification callbacks etc.
        if (this.provider.reset)
            this.provider.reset();
        return true;
    }
    catch (e) {
        throw new Error(`Error while clearing subscriptions: ${e}`);
    }
};
/**
 * Evaluates WS close event
 *
 * @method _isCleanClose
 *
 * @param {CloseEvent | boolean} event WS close event or exception flag
 *
 * @returns {boolean}
 */
RequestManager.prototype._isCleanCloseEvent = function (event) {
    return typeof event === 'object' && ([1000].includes(event.code) || event.wasClean === true);
};
/**
 * Detects Ipc close error. The node.net module emits ('close', isException)
 *
 * @method _isIpcCloseError
 *
 * @param {CloseEvent | boolean} event WS close event or exception flag
 *
 * @returns {boolean}
 */
RequestManager.prototype._isIpcCloseError = function (event) {
    return typeof event === 'boolean' && event;
};
/**
 * The jsonrpc result callback for RequestManager.send
 *
 * @method _jsonrpcResultCallback
 *
 * @param {Function} callback the callback to use
 * @param {Object} payload the jsonrpc payload
 *
 * @returns {Function} return callback of form (err, result)
 *
 */
RequestManager.prototype._jsonrpcResultCallback = function (callback, payload) {
    return function (err, result) {
        if (result && result.id && payload.id !== result.id) {
            return callback(new Error(`Wrong response id ${result.id} (expected: ${payload.id}) in ${JSON.stringify(payload)}`));
        }
        if (err) {
            return callback(err);
        }
        if (result && result.error) {
            return callback(errors.ErrorResponse(result));
        }
        if (!Jsonrpc.isValidResponse(result)) {
            return callback(errors.InvalidResponse(result));
        }
        callback(null, result.result);
    };
};
module.exports = {
    Manager: RequestManager,
    BatchManager: BatchManager
};


/***/ }),

/***/ 68403:
/***/ ((module) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file jsonrpc.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Aaron Kumavis <aaron@kumavis.me>
 * @date 2015
 */

// Initialize Jsonrpc as a simple object with utility functions.
var Jsonrpc = {
    messageId: 0
};
/**
 * Should be called to valid json create payload object
 *
 * @method toPayload
 * @param {Function} method of jsonrpc call, required
 * @param {Array} params, an array of method params, optional
 * @returns {Object} valid jsonrpc payload object
 */
Jsonrpc.toPayload = function (method, params) {
    if (!method) {
        throw new Error('JSONRPC method should be specified for params: "' + JSON.stringify(params) + '"!');
    }
    // advance message ID
    Jsonrpc.messageId++;
    return {
        jsonrpc: '2.0',
        id: Jsonrpc.messageId,
        method: method,
        params: params || []
    };
};
/**
 * Should be called to check if jsonrpc response is valid
 *
 * @method isValidResponse
 * @param {Object}
 * @returns {Boolean} true if response is valid, otherwise false
 */
Jsonrpc.isValidResponse = function (response) {
    return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);
    function validateSingleMessage(message) {
        return !!message &&
            !message.error &&
            message.jsonrpc === '2.0' &&
            (typeof message.id === 'number' || typeof message.id === 'string') &&
            message.result !== undefined; // only undefined is not valid json object
    }
};
/**
 * Should be called to create batch payload object
 *
 * @method toBatchPayload
 * @param {Array} messages, an array of objects with method (required) and params (optional) fields
 * @returns {Array} batch payload
 */
Jsonrpc.toBatchPayload = function (messages) {
    return messages.map(function (message) {
        return Jsonrpc.toPayload(message.method, message.params);
    });
};
module.exports = Jsonrpc;


/***/ }),

/***/ 70954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file batch.js
 * @author Marek Kotewicz <marek@ethdev.com>
 * @date 2015
 */

var Jsonrpc = __webpack_require__(16902);
var errors = __webpack_require__(70222).errors;
var Batch = function (requestManager) {
    this.requestManager = requestManager;
    this.requests = [];
};
/**
 * Should be called to add create new request to batch request
 *
 * @method add
 * @param {Object} jsonrpc requet object
 */
Batch.prototype.add = function (request) {
    this.requests.push(request);
};
/**
 * Should be called to execute batch request
 *
 * @method execute
 */
Batch.prototype.execute = function () {
    var requests = this.requests;
    this.requestManager.sendBatch(requests, function (err, results) {
        results = results || [];
        requests.map(function (request, index) {
            return results[index] || {};
        }).forEach(function (result, index) {
            if (requests[index].callback) {
                if (result && result.error) {
                    return requests[index].callback(errors.ErrorResponse(result));
                }
                if (!Jsonrpc.isValidResponse(result)) {
                    return requests[index].callback(errors.InvalidResponse(result));
                }
                try {
                    requests[index].callback(null, requests[index].format ? requests[index].format(result.result) : result.result);
                }
                catch (err) {
                    requests[index].callback(err);
                }
            }
        });
    });
};
module.exports = Batch;


/***/ }),

/***/ 71289:
/***/ ((module) => {

/*
 This file is part of web3.js.

 web3.js is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 web3.js is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * @file givenProvider.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

var givenProvider = null;
// ADD GIVEN PROVIDER
/* jshint ignore:start */
var global;
try {
    global = Function('return this')();
}
catch (e) {
    global = window;
}
// EIP-1193: window.ethereum
if (typeof global.ethereum !== 'undefined') {
    givenProvider = global.ethereum;
    // Legacy web3.currentProvider
}
else if (typeof global.web3 !== 'undefined' && global.web3.currentProvider) {
    if (global.web3.currentProvider.sendAsync) {
        global.web3.currentProvider.send = global.web3.currentProvider.sendAsync;
        delete global.web3.currentProvider.sendAsync;
    }
    // if connection is 'ipcProviderWrapper', add subscription support
    if (!global.web3.currentProvider.on &&
        global.web3.currentProvider.connection &&
        global.web3.currentProvider.connection.constructor.name === 'ipcProviderWrapper') {
        global.web3.currentProvider.on = function (type, callback) {
            if (typeof callback !== 'function')
                throw new Error('The second parameter callback must be a function.');
            switch (type) {
                case 'data':
                    this.connection.on('data', function (data) {
                        var result = '';
                        data = data.toString();
                        try {
                            result = JSON.parse(data);
                        }
                        catch (e) {
                            return callback(new Error('Couldn\'t parse response data' + data));
                        }
                        // notification
                        if (!result.id && result.method.indexOf('_subscription') !== -1) {
                            callback(null, result);
                        }
                    });
                    break;
                default:
                    this.connection.on(type, callback);
                    break;
            }
        };
    }
    givenProvider = global.web3.currentProvider;
}
/* jshint ignore:end */
module.exports = givenProvider;


/***/ }),

/***/ 27014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
    This file is part of web3.js.
    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

const { callbackify } = __webpack_require__(65754);
var errors = __webpack_require__(70222).errors;
var Jsonrpc = __webpack_require__(16902);
var BatchManager = __webpack_require__(70954);
var givenProvider = __webpack_require__(71289);
/**
 * It's responsible for passing messages to providers
 * It's also responsible for polling the ethereum node for incoming messages
 * Default poll timeout is 1 second
 * Singleton
 *
 * @param {string|Object}provider
 * @param {Net.Socket} net
 *
 * @constructor
 */
var RequestManager = function RequestManager(provider, net) {
    this.provider = null;
    this.providers = RequestManager.providers;
    this.setProvider(provider, net);
    this.subscriptions = new Map();
};
RequestManager.givenProvider = givenProvider;
RequestManager.providers = {
    WebsocketProvider: __webpack_require__(56353),
    HttpProvider: __webpack_require__(83361),
    IpcProvider: __webpack_require__(29763)
};
/**
 * Should be used to set provider of request manager
 *
 * @method setProvider
 *
 * @param {Object} provider
 * @param {net.Socket} net
 *
 * @returns void
 */
RequestManager.prototype.setProvider = function (provider, net) {
    var _this = this;
    // autodetect provider
    if (provider && typeof provider === 'string' && this.providers) {
        // HTTP
        if (/^http(s)?:\/\//i.test(provider)) {
            provider = new this.providers.HttpProvider(provider);
            // WS
        }
        else if (/^ws(s)?:\/\//i.test(provider)) {
            provider = new this.providers.WebsocketProvider(provider);
            // IPC
        }
        else if (provider && typeof net === 'object' && typeof net.connect === 'function') {
            provider = new this.providers.IpcProvider(provider, net);
        }
        else if (provider) {
            throw new Error('Can\'t autodetect provider for "' + provider + '"');
        }
    }
    // reset the old one before changing, if still connected
    if (this.provider && this.provider.connected)
        this.clearSubscriptions();
    this.provider = provider || null;
    // listen to incoming notifications
    if (this.provider && this.provider.on) {
        if (typeof provider.request === 'function') { // EIP-1193 provider
            this.provider.on('message', function (payload) {
                if (payload && payload.type === 'eth_subscription' && payload.data) {
                    const data = payload.data;
                    if (data.subscription && _this.subscriptions.has(data.subscription)) {
                        _this.subscriptions.get(data.subscription).callback(null, data.result);
                    }
                }
            });
        }
        else { // legacy provider subscription event
            this.provider.on('data', function data(result, deprecatedResult) {
                result = result || deprecatedResult; // this is for possible old providers, which may had the error first handler
                // if result is a subscription, call callback for that subscription
                if (result.method && result.params && result.params.subscription && _this.subscriptions.has(result.params.subscription)) {
                    _this.subscriptions.get(result.params.subscription).callback(null, result.params.result);
                }
            });
        }
        // resubscribe if the provider has reconnected
        this.provider.on('connect', function connect() {
            _this.subscriptions.forEach(function (subscription) {
                subscription.subscription.resubscribe();
            });
        });
        // notify all subscriptions about the error condition
        this.provider.on('error', function error(error) {
            _this.subscriptions.forEach(function (subscription) {
                subscription.callback(error);
            });
        });
        // notify all subscriptions about bad close conditions
        const disconnect = function disconnect(event) {
            if (!_this._isCleanCloseEvent(event) || _this._isIpcCloseError(event)) {
                _this.subscriptions.forEach(function (subscription) {
                    subscription.callback(errors.ConnectionCloseError(event));
                    _this.subscriptions.delete(subscription.subscription.id);
                });
                if (_this.provider && _this.provider.emit) {
                    _this.provider.emit('error', errors.ConnectionCloseError(event));
                }
            }
            if (_this.provider && _this.provider.emit) {
                _this.provider.emit('end', event);
            }
        };
        // TODO: Remove close once the standard allows it
        this.provider.on('close', disconnect);
        this.provider.on('disconnect', disconnect);
        // TODO add end, timeout??
    }
};
/**
 * Asynchronously send request to provider.
 * Prefers to use the `request` method available on the provider as specified in [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193).
 * If `request` is not available, falls back to `sendAsync` and `send` respectively.
 * @method send
 * @param {Object} data
 * @param {Function} callback
 */
RequestManager.prototype.send = function (data, callback) {
    callback = callback || function () { };
    if (!this.provider) {
        return callback(errors.InvalidProvider());
    }
    const { method, params } = data;
    const jsonrpcPayload = Jsonrpc.toPayload(method, params);
    const jsonrpcResultCallback = this._jsonrpcResultCallback(callback, jsonrpcPayload);
    if (this.provider.request) {
        const callbackRequest = callbackify(this.provider.request.bind(this.provider));
        const requestArgs = { method, params };
        callbackRequest(requestArgs, callback);
    }
    else if (this.provider.sendAsync) {
        this.provider.sendAsync(jsonrpcPayload, jsonrpcResultCallback);
    }
    else if (this.provider.send) {
        this.provider.send(jsonrpcPayload, jsonrpcResultCallback);
    }
    else {
        throw new Error('Provider does not have a request or send method to use.');
    }
};
/**
 * Asynchronously send batch request.
 * Only works if provider supports batch methods through `sendAsync` or `send`.
 * @method sendBatch
 * @param {Array} data - array of payload objects
 * @param {Function} callback
 */
RequestManager.prototype.sendBatch = function (data, callback) {
    if (!this.provider) {
        return callback(errors.InvalidProvider());
    }
    var payload = Jsonrpc.toBatchPayload(data);
    this.provider[this.provider.sendAsync ? 'sendAsync' : 'send'](payload, function (err, results) {
        if (err) {
            return callback(err);
        }
        if (!Array.isArray(results)) {
            return callback(errors.InvalidResponse(results));
        }
        callback(null, results);
    });
};
/**
 * Waits for notifications
 *
 * @method addSubscription
 * @param {Subscription} subscription         the subscription
 * @param {String} type         the subscription namespace (eth, personal, etc)
 * @param {Function} callback   the callback to call for incoming notifications
 */
RequestManager.prototype.addSubscription = function (subscription, callback) {
    if (this.provider.on) {
        this.subscriptions.set(subscription.id, {
            callback: callback,
            subscription: subscription
        });
    }
    else {
        throw new Error('The provider doesn\'t support subscriptions: ' + this.provider.constructor.name);
    }
};
/**
 * Waits for notifications
 *
 * @method removeSubscription
 * @param {String} id           the subscription id
 * @param {Function} callback   fired once the subscription is removed
 */
RequestManager.prototype.removeSubscription = function (id, callback) {
    if (this.subscriptions.has(id)) {
        var type = this.subscriptions.get(id).subscription.options.type;
        // remove subscription first to avoid reentry
        this.subscriptions.delete(id);
        // then, try to actually unsubscribe
        this.send({
            method: type + '_unsubscribe',
            params: [id]
        }, callback);
        return;
    }
    if (typeof callback === 'function') {
        // call the callback if the subscription was already removed
        callback(null);
    }
};
/**
 * Should be called to reset the subscriptions
 *
 * @method reset
 *
 * @returns {boolean}
 */
RequestManager.prototype.clearSubscriptions = function (keepIsSyncing) {
    try {
        var _this = this;
        // uninstall all subscriptions
        if (this.subscriptions.size > 0) {
            this.subscriptions.forEach(function (value, id) {
                if (!keepIsSyncing || value.name !== 'syncing')
                    _this.removeSubscription(id);
            });
        }
        //  reset notification callbacks etc.
        if (this.provider.reset)
            this.provider.reset();
        return true;
    }
    catch (e) {
        throw new Error(`Error while clearing subscriptions: ${e}`);
    }
};
/**
 * Evaluates WS close event
 *
 * @method _isCleanClose
 *
 * @param {CloseEvent | boolean} event WS close event or exception flag
 *
 * @returns {boolean}
 */
RequestManager.prototype._isCleanCloseEvent = function (event) {
    return typeof event === 'object' && ([1000].includes(event.code) || event.wasClean === true);
};
/**
 * Detects Ipc close error. The node.net module emits ('close', isException)
 *
 * @method _isIpcCloseError
 *
 * @param {CloseEvent | boolean} event WS close event or exception flag
 *
 * @returns {boolean}
 */
RequestManager.prototype._isIpcCloseError = function (event) {
    return typeof event === 'boolean' && event;
};
/**
 * The jsonrpc result callback for RequestManager.send
 *
 * @method _jsonrpcResultCallback
 *
 * @param {Function} callback the callback to use
 * @param {Object} payload the jsonrpc payload
 *
 * @returns {Function} return callback of form (err, result)
 *
 */
RequestManager.prototype._jsonrpcResultCallback = function (callback, payload) {
    return function (err, result) {
        if (result && result.id && payload.id !== result.id) {
            return callback(new Error(`Wrong response id ${result.id} (expected: ${payload.id}) in ${JSON.stringify(payload)}`));
        }
        if (err) {
            return callback(err);
        }
        if (result && result.error) {
            return callback(errors.ErrorResponse(result));
        }
        if (!Jsonrpc.isValidResponse(result)) {
            return callback(errors.InvalidResponse(result));
        }
        callback(null, result.result);
    };
};
module.exports = {
    Manager: RequestManager,
    BatchManager: BatchManager
};


/***/ }),

/***/ 16902:
/***/ ((module) => {

/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/** @file jsonrpc.js
 * @authors:
 *   Fabian Vogelsteller <fabian@ethereum.org>
 *   Marek Kotewicz <marek@ethdev.com>
 *   Aaron Kumavis <aaron@kumavis.me>
 * @date 2015
 */

// Initialize Jsonrpc as a simple object with utility functions.
var Jsonrpc = {
    messageId: 0
};
/**
 * Should be called to valid json create payload object
 *
 * @method toPayload
 * @param {Function} method of jsonrpc call, required
 * @param {Array} params, an array of method params, optional
 * @returns {Object} valid jsonrpc payload object
 */
Jsonrpc.toPayload = function (method, params) {
    if (!method) {
        throw new Error('JSONRPC method should be specified for params: "' + JSON.stringify(params) + '"!');
    }
    // advance message ID
    Jsonrpc.messageId++;
    return {
        jsonrpc: '2.0',
        id: Jsonrpc.messageId,
        method: method,
        params: params || []
    };
};
/**
 * Should be called to check if jsonrpc response is valid
 *
 * @method isValidResponse
 * @param {Object}
 * @returns {Boolean} true if response is valid, otherwise false
 */
Jsonrpc.isValidResponse = function (response) {
    return Array.isArray(response) ? response.every(validateSingleMessage) : validateSingleMessage(response);
    function validateSingleMessage(message) {
        return !!message &&
            !message.error &&
            message.jsonrpc === '2.0' &&
            (typeof message.id === 'number' || typeof message.id === 'string') &&
            message.result !== undefined; // only undefined is not valid json object
    }
};
/**
 * Should be called to create batch payload object
 *
 * @method toBatchPayload
 * @param {Array} messages, an array of objects with method (required) and params (optional) fields
 * @returns {Array} batch payload
 */
Jsonrpc.toBatchPayload = function (messages) {
    return messages.map(function (message) {
        return Jsonrpc.toPayload(message.method, message.params);
    });
};
module.exports = Jsonrpc;


/***/ })

}]);