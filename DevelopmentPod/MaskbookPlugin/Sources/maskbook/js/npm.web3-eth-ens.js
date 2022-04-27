(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[6160],{

/***/ 33972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
 * @file ENS.js
 *
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

var config = __webpack_require__(60701);
var formatters = (__webpack_require__(41032).formatters);
var utils = __webpack_require__(11627);
var Registry = __webpack_require__(7335);
var ResolverMethodHandler = __webpack_require__(59184);
var contenthash = __webpack_require__(18508);
/**
 * Constructs a new instance of ENS
 *
 * @param {Eth} eth
 *
 * @constructor
 */
function ENS(eth) {
    this.eth = eth;
    var registryAddress = null;
    this._detectedAddress = null;
    this._lastSyncCheck = null;
    Object.defineProperty(this, 'registry', {
        get: function () {
            return new Registry(this);
        },
        enumerable: true
    });
    Object.defineProperty(this, 'resolverMethodHandler', {
        get: function () {
            return new ResolverMethodHandler(this.registry);
        },
        enumerable: true
    });
    Object.defineProperty(this, 'registryAddress', {
        get: function () {
            return registryAddress;
        },
        set: function (value) {
            if (value === null) {
                registryAddress = value;
                return;
            }
            registryAddress = formatters.inputAddressFormatter(value);
        },
        enumerable: true
    });
}
/**
 * Returns true if the given interfaceId is supported and otherwise false.
 *
 * @method supportsInterface
 *
 * @param {string} name
 * @param {string} interfaceId
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<boolean>}
 */
ENS.prototype.supportsInterface = function (name, interfaceId, callback) {
    return this.getResolver(name).then(function (resolver) {
        if (!utils.isHexStrict(interfaceId)) {
            interfaceId = utils.sha3(interfaceId).slice(0, 10);
        }
        return resolver.methods.supportsInterface(interfaceId).call(callback);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        throw error;
    });
};
/**
 * Returns the Resolver by the given address
 *
 * @deprecated Please use the "getResolver" method instead of "resolver"
 *
 * @method resolver
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<Contract>}
 */
ENS.prototype.resolver = function (name, callback) {
    return this.registry.resolver(name, callback);
};
/**
 * Returns the Resolver by the given address
 *
 * @method getResolver
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<Contract>}
 */
ENS.prototype.getResolver = function (name, callback) {
    return this.registry.getResolver(name, callback);
};
/**
 * Does set the resolver of the given name
 *
 * @method setResolver
 *
 * @param {string} name
 * @param {string} address
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setResolver = function (name, address, txConfig, callback) {
    return this.registry.setResolver(name, address, txConfig, callback);
};
/**
 * Sets the owner, resolver, and TTL for an ENS record in a single operation.
 *
 * @method setRecord
 *
 * @param {string} name
 * @param {string} owner
 * @param {string} resolver
 * @param {string | number} ttl
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setRecord = function (name, owner, resolver, ttl, txConfig, callback) {
    return this.registry.setRecord(name, owner, resolver, ttl, txConfig, callback);
};
/**
 * Sets the owner, resolver and TTL for a subdomain, creating it if necessary.
 *
 * @method setSubnodeRecord
 *
 * @param {string} name
 * @param {string} label
 * @param {string} owner
 * @param {string} resolver
 * @param {string | number} ttl
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setSubnodeRecord = function (name, label, owner, resolver, ttl, txConfig, callback) {
    return this.registry.setSubnodeRecord(name, label, owner, resolver, ttl, txConfig, callback);
};
/**
 * Sets or clears an approval by the given operator.
 *
 * @method setApprovalForAll
 *
 * @param {string} operator
 * @param {boolean} approved
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setApprovalForAll = function (operator, approved, txConfig, callback) {
    return this.registry.setApprovalForAll(operator, approved, txConfig, callback);
};
/**
 * Returns true if the operator is approved
 *
 * @method isApprovedForAll
 *
 * @param {string} owner
 * @param {string} operator
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<boolean>}
 */
ENS.prototype.isApprovedForAll = function (owner, operator, callback) {
    return this.registry.isApprovedForAll(owner, operator, callback);
};
/**
 * Returns true if the record exists
 *
 * @method recordExists
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<boolean>}
 */
ENS.prototype.recordExists = function (name, callback) {
    return this.registry.recordExists(name, callback);
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method setSubnodeOwner
 *
 * @param {string} name
 * @param {string} label
 * @param {string} address
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setSubnodeOwner = function (name, label, address, txConfig, callback) {
    return this.registry.setSubnodeOwner(name, label, address, txConfig, callback);
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method getTTL
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.getTTL = function (name, callback) {
    return this.registry.getTTL(name, callback);
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method setTTL
 *
 * @param {string} name
 * @param {number} ttl
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setTTL = function (name, ttl, txConfig, callback) {
    return this.registry.setTTL(name, ttl, txConfig, callback);
};
/**
 * Returns the owner by the given name and current configured or detected Registry
 *
 * @method getOwner
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.getOwner = function (name, callback) {
    return this.registry.getOwner(name, callback);
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method setOwner
 *
 * @param {string} name
 * @param {string} address
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setOwner = function (name, address, txConfig, callback) {
    return this.registry.setOwner(name, address, txConfig, callback);
};
/**
 * Returns the address record associated with a name.
 *
 * @method getAddress
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.getAddress = function (name, callback) {
    return this.resolverMethodHandler.method(name, 'addr', []).call(callback);
};
/**
 * Sets a new address
 *
 * @method setAddress
 *
 * @param {string} name
 * @param {string} address
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setAddress = function (name, address, txConfig, callback) {
    return this.resolverMethodHandler.method(name, 'setAddr', [address]).send(txConfig, callback);
};
/**
 * Returns the public key
 *
 * @method getPubkey
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.getPubkey = function (name, callback) {
    return this.resolverMethodHandler.method(name, 'pubkey', [], null, callback).call(callback);
};
/**
 * Set the new public key
 *
 * @method setPubkey
 *
 * @param {string} name
 * @param {string} x
 * @param {string} y
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setPubkey = function (name, x, y, txConfig, callback) {
    return this.resolverMethodHandler.method(name, 'setPubkey', [x, y]).send(txConfig, callback);
};
/**
 * Returns the content
 *
 * @method getContent
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.getContent = function (name, callback) {
    return this.resolverMethodHandler.method(name, 'content', []).call(callback);
};
/**
 * Set the content
 *
 * @method setContent
 *
 * @param {string} name
 * @param {string} hash
 * @param {function} callback
 * @param {TransactionConfig} txConfig
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setContent = function (name, hash, txConfig, callback) {
    return this.resolverMethodHandler.method(name, 'setContent', [hash]).send(txConfig, callback);
};
/**
 * Returns the contenthash
 *
 * @method getContenthash
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<ContentHash>}
 */
ENS.prototype.getContenthash = function (name, callback) {
    return this.resolverMethodHandler.method(name, 'contenthash', [], contenthash.decode).call(callback);
};
/**
 * Set the contenthash
 *
 * @method setContent
 *
 * @param {string} name
 * @param {string} hash
 * @param {function} callback
 * @param {TransactionConfig} txConfig
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setContenthash = function (name, hash, txConfig, callback) {
    var encoded;
    try {
        encoded = contenthash.encode(hash);
    }
    catch (err) {
        var error = new Error('Could not encode ' + hash + '. See docs for supported hash protocols.');
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        throw error;
    }
    return this.resolverMethodHandler.method(name, 'setContenthash', [encoded]).send(txConfig, callback);
};
/**
 * Get the multihash
 *
 * @method getMultihash
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.getMultihash = function (name, callback) {
    return this.resolverMethodHandler.method(name, 'multihash', []).call(callback);
};
/**
 * Set the multihash
 *
 * @method setMultihash
 *
 * @param {string} name
 * @param {string} hash
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
ENS.prototype.setMultihash = function (name, hash, txConfig, callback) {
    return this.resolverMethodHandler.method(name, 'multihash', [hash]).send(txConfig, callback);
};
/**
 * Checks if the current used network is synced and looks for ENS support there.
 * Throws an error if not.
 *
 * @returns {Promise<string>}
 */
ENS.prototype.checkNetwork = async function () {
    var now = new Date() / 1000;
    if (!this._lastSyncCheck || (now - this._lastSyncCheck) > 3600) {
        var block = await this.eth.getBlock('latest');
        var headAge = now - block.timestamp;
        if (headAge > 3600) {
            throw new Error("Network not synced; last block was " + headAge + " seconds ago");
        }
        this._lastSyncCheck = now;
    }
    if (this.registryAddress) {
        return this.registryAddress;
    }
    if (!this._detectedAddress) {
        var networkType = await this.eth.net.getNetworkType();
        var addr = config.addresses[networkType];
        if (typeof addr === 'undefined') {
            throw new Error("ENS is not supported on network " + networkType);
        }
        this._detectedAddress = addr;
        return this._detectedAddress;
    }
    return this._detectedAddress;
};
module.exports = ENS;


/***/ }),

/***/ 60701:
/***/ ((module) => {

"use strict";
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
 * @file config.js
 *
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2017
 */

/**
 * Source: https://docs.ens.domains/ens-deployments
 *
 * @type {{addresses: {main: string, rinkeby: string, goerli: string, ropsten: string}}}
 */
var config = {
    addresses: {
        main: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        ropsten: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        rinkeby: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
        goerli: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
    },
    // These ids obtained at ensdomains docs:
    // https://docs.ens.domains/contract-developer-guide/writing-a-resolver
    interfaceIds: {
        addr: "0x3b3b57de",
        setAddr: "0x3b3b57de",
        pubkey: "0xc8690233",
        setPubkey: "0xc8690233",
        contenthash: "0xbc1c58d1",
        setContenthash: "0xbc1c58d1",
        content: "0xd8389dc5",
        setContent: "0xd8389dc5"
    }
};
module.exports = config;


/***/ }),

/***/ 7335:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
 * @file Registry.js
 *
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

var Contract = __webpack_require__(78741);
var namehash = __webpack_require__(29079);
var PromiEvent = __webpack_require__(8398);
var formatters = (__webpack_require__(41032).formatters);
var utils = __webpack_require__(11627);
var REGISTRY_ABI = __webpack_require__(2405);
var RESOLVER_ABI = __webpack_require__(68242);
/**
 * A wrapper around the ENS registry contract.
 *
 * @method Registry
 * @param {Ens} ens
 * @constructor
 */
function Registry(ens) {
    var self = this;
    this.ens = ens;
    this.contract = ens.checkNetwork().then(function (address) {
        var contract = new Contract(REGISTRY_ABI, address);
        contract.setProvider(self.ens.eth.currentProvider);
        return contract;
    });
}
/**
 * Returns the address of the owner of an ENS name.
 *
 * @deprecated Please use the "getOwner" method instead of "owner"
 *
 * @method owner
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<string>}
 */
Registry.prototype.owner = function (name, callback) {
    console.warn('Deprecated: Please use the "getOwner" method instead of "owner".');
    return this.getOwner(name, callback);
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method getOwner
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<string>}
 */
Registry.prototype.getOwner = function (name, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.owner(namehash.hash(name)).call();
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method setOwner
 *
 * @param {string} name
 * @param {string} address
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
Registry.prototype.setOwner = function (name, address, txConfig, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.setOwner(namehash.hash(name), formatters.inputAddressFormatter(address)).send(txConfig);
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Returns the TTL of the given node by his name
 *
 * @method getTTL
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returnss {Promise<string>}
 */
Registry.prototype.getTTL = function (name, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.ttl(namehash.hash(name)).call();
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method setTTL
 *
 * @param {string} name
 * @param {number} ttl
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
Registry.prototype.setTTL = function (name, ttl, txConfig, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.setTTL(namehash.hash(name), ttl).send(txConfig);
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method setSubnodeOwner
 *
 * @param {string} name
 * @param {string} label
 * @param {string} address
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
Registry.prototype.setSubnodeOwner = function (name, label, address, txConfig, callback) {
    var promiEvent = new PromiEvent(true);
    if (!utils.isHexStrict(label)) {
        label = utils.sha3(label);
    }
    this.contract.then(function (contract) {
        return contract.methods.setSubnodeOwner(namehash.hash(name), label, formatters.inputAddressFormatter(address)).send(txConfig);
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Sets the owner, resolver, and TTL for an ENS record in a single operation.
 *
 * @method setRecord
 *
 * @param {string} name
 * @param {string} owner
 * @param {string} resolver
 * @param {string | number} ttl
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
Registry.prototype.setRecord = function (name, owner, resolver, ttl, txConfig, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.setRecord(namehash.hash(name), formatters.inputAddressFormatter(owner), formatters.inputAddressFormatter(resolver), ttl).send(txConfig);
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Sets the owner, resolver and TTL for a subdomain, creating it if necessary.
 *
 * @method setSubnodeRecord
 *
 * @param {string} name
 * @param {string} label
 * @param {string} owner
 * @param {string} resolver
 * @param {string | number} ttl
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
Registry.prototype.setSubnodeRecord = function (name, label, owner, resolver, ttl, txConfig, callback) {
    var promiEvent = new PromiEvent(true);
    if (!utils.isHexStrict(label)) {
        label = utils.sha3(label);
    }
    this.contract.then(function (contract) {
        return contract.methods.setSubnodeRecord(namehash.hash(name), label, formatters.inputAddressFormatter(owner), formatters.inputAddressFormatter(resolver), ttl).send(txConfig);
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Sets or clears an approval by the given operator.
 *
 * @method setApprovalForAll
 *
 * @param {string} operator
 * @param {boolean} approved
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
Registry.prototype.setApprovalForAll = function (operator, approved, txConfig, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.setApprovalForAll(formatters.inputAddressFormatter(operator), approved).send(txConfig);
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Returns true if the operator is approved
 *
 * @method isApprovedForAll
 *
 * @param {string} owner
 * @param {string} operator
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<boolean>}
 */
Registry.prototype.isApprovedForAll = function (owner, operator, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.isApprovedForAll(formatters.inputAddressFormatter(owner), formatters.inputAddressFormatter(operator)).call();
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Returns true if the record exists
 *
 * @method recordExists
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<boolean>}
 */
Registry.prototype.recordExists = function (name, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.recordExists(namehash.hash(name)).call();
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Returns the resolver contract associated with a name.
 *
 * @deprecated Please use the "getResolver" method instead of "resolver"
 *
 * @method resolver
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<Contract>}
 */
Registry.prototype.resolver = function (name, callback) {
    console.warn('Deprecated: Please use the "getResolver" method instead of "resolver".');
    return this.getResolver(name, callback);
};
/**
 * Returns the resolver contract associated with a name.
 *
 * @method getResolver
 *
 * @param {string} name
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {Promise<Contract>}
 */
Registry.prototype.getResolver = function (name, callback) {
    var self = this;
    return this.contract.then(function (contract) {
        return contract.methods.resolver(namehash.hash(name)).call();
    }).then(function (address) {
        var contract = new Contract(RESOLVER_ABI, address);
        contract.setProvider(self.ens.eth.currentProvider);
        if (typeof callback === 'function') {
            // It's required to pass the contract to the first argument to be backward compatible and to have the required consistency
            callback(contract, contract);
            return;
        }
        return contract;
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        throw error;
    });
};
/**
 * Returns the address of the owner of an ENS name.
 *
 * @method setResolver
 *
 * @param {string} name
 * @param {string} address
 * @param {TransactionConfig} txConfig
 * @param {function} callback
 *
 * @callback callback callback(error, result)
 * @returns {PromiEvent<TransactionReceipt | TransactionRevertInstructionError>}
 */
Registry.prototype.setResolver = function (name, address, txConfig, callback) {
    var promiEvent = new PromiEvent(true);
    this.contract.then(function (contract) {
        return contract.methods.setResolver(namehash.hash(name), formatters.inputAddressFormatter(address)).send(txConfig);
    }).then(function (receipt) {
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the first argument to be backward compatible and to have the required consistency
            callback(receipt, receipt);
            return;
        }
        promiEvent.resolve(receipt);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
module.exports = Registry;


/***/ }),

/***/ 82448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
 *
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

var ENS = __webpack_require__(33972);
module.exports = ENS;


/***/ }),

/***/ 59184:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
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
 * @file ResolverMethodHandler.js
 *
 * @author Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

var PromiEvent = __webpack_require__(8398);
var namehash = __webpack_require__(29079);
var errors = (__webpack_require__(41032).errors);
var interfaceIds = (__webpack_require__(60701).interfaceIds);
/**
 * @param {Registry} registry
 * @constructor
 */
function ResolverMethodHandler(registry) {
    this.registry = registry;
}
/**
 * Executes an resolver method and returns an eventifiedPromise
 *
 * @param {string} ensName
 * @param {string} methodName
 * @param {array} methodArguments
 * @param {function} callback
 * @returns {Object}
 */
ResolverMethodHandler.prototype.method = function (ensName, methodName, methodArguments, outputFormatter, callback) {
    return {
        call: this.call.bind({
            ensName: ensName,
            methodName: methodName,
            methodArguments: methodArguments,
            callback: callback,
            parent: this,
            outputFormatter: outputFormatter
        }),
        send: this.send.bind({
            ensName: ensName,
            methodName: methodName,
            methodArguments: methodArguments,
            callback: callback,
            parent: this
        })
    };
};
/**
 * Executes call
 *
 * @returns {eventifiedPromise}
 */
ResolverMethodHandler.prototype.call = function (callback) {
    var self = this;
    var promiEvent = new PromiEvent();
    var preparedArguments = this.parent.prepareArguments(this.ensName, this.methodArguments);
    var outputFormatter = this.outputFormatter || null;
    this.parent.registry.getResolver(this.ensName).then(async function (resolver) {
        await self.parent.checkInterfaceSupport(resolver, self.methodName);
        self.parent.handleCall(promiEvent, resolver.methods[self.methodName], preparedArguments, outputFormatter, callback);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Executes send
 *
 * @param {Object} sendOptions
 * @param {function} callback
 * @returns {eventifiedPromise}
 */
ResolverMethodHandler.prototype.send = function (sendOptions, callback) {
    var self = this;
    var promiEvent = new PromiEvent();
    var preparedArguments = this.parent.prepareArguments(this.ensName, this.methodArguments);
    this.parent.registry.getResolver(this.ensName).then(async function (resolver) {
        await self.parent.checkInterfaceSupport(resolver, self.methodName);
        self.parent.handleSend(promiEvent, resolver.methods[self.methodName], preparedArguments, sendOptions, callback);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent.eventEmitter;
};
/**
 * Handles a call method
 *
 * @param {eventifiedPromise} promiEvent
 * @param {function} method
 * @param {array} preparedArguments
 * @param {function} callback
 * @returns {eventifiedPromise}
 */
ResolverMethodHandler.prototype.handleCall = function (promiEvent, method, preparedArguments, outputFormatter, callback) {
    method.apply(this, preparedArguments).call()
        .then(function (result) {
        if (outputFormatter) {
            result = outputFormatter(result);
        }
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the second argument to be backwards compatible and to have the required consistency
            callback(result, result);
            return;
        }
        promiEvent.resolve(result);
    }).catch(function (error) {
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent;
};
/**
 * Handles a send method
 *
 * @param {eventifiedPromise} promiEvent
 * @param {function} method
 * @param {array} preparedArguments
 * @param {Object} sendOptions
 * @param {function} callback
 * @returns {eventifiedPromise}
 */
ResolverMethodHandler.prototype.handleSend = function (promiEvent, method, preparedArguments, sendOptions, callback) {
    method.apply(this, preparedArguments).send(sendOptions)
        .on('sending', function () {
        promiEvent.eventEmitter.emit('sending');
    })
        .on('sent', function () {
        promiEvent.eventEmitter.emit('sent');
    })
        .on('transactionHash', function (hash) {
        promiEvent.eventEmitter.emit('transactionHash', hash);
    })
        .on('confirmation', function (confirmationNumber, receipt) {
        promiEvent.eventEmitter.emit('confirmation', confirmationNumber, receipt);
    })
        .on('receipt', function (receipt) {
        promiEvent.eventEmitter.emit('receipt', receipt);
        promiEvent.resolve(receipt);
        if (typeof callback === 'function') {
            // It's required to pass the receipt to the second argument to be backwards compatible and to have the required consistency
            callback(receipt, receipt);
        }
    })
        .on('error', function (error) {
        promiEvent.eventEmitter.emit('error', error);
        if (typeof callback === 'function') {
            callback(error, null);
            return;
        }
        promiEvent.reject(error);
    });
    return promiEvent;
};
/**
 * Adds the ENS node to the arguments
 *
 * @param {string} name
 * @param {array} methodArguments
 *
 * @returns {array}
 */
ResolverMethodHandler.prototype.prepareArguments = function (name, methodArguments) {
    var node = namehash.hash(name);
    if (methodArguments.length > 0) {
        methodArguments.unshift(node);
        return methodArguments;
    }
    return [node];
};
/**
 *
 *
 * @param {Contract} resolver
 * @param {string} methodName
 *
 * @returns {Promise}
 */
ResolverMethodHandler.prototype.checkInterfaceSupport = async function (resolver, methodName) {
    // Skip validation for undocumented interface ids (ex: multihash)
    if (!interfaceIds[methodName])
        return;
    var supported = false;
    try {
        supported = await resolver
            .methods
            .supportsInterface(interfaceIds[methodName])
            .call();
    }
    catch (err) {
        console.warn('Could not verify interface of resolver contract at "' + resolver.options.address + '". ');
    }
    if (!supported) {
        throw errors.ResolverMethodMissingError(resolver.options.address, methodName);
    }
};
module.exports = ResolverMethodHandler;


/***/ }),

/***/ 18508:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
Adapted from ensdomains/ui
https://github.com/ensdomains/ui/blob/3e62e440b53466eeec9dd1c63d73924eefbd88c1/src/utils/contents.js#L1-L85

BSD 2-Clause License

Copyright (c) 2019, Ethereum Name Service
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
var contentHash = __webpack_require__(89808);
function decode(encoded) {
    var decoded = null;
    var protocolType = null;
    var error = null;
    if (encoded && encoded.error) {
        return {
            protocolType: null,
            decoded: encoded.error
        };
    }
    if (encoded) {
        try {
            decoded = contentHash.decode(encoded);
            var codec = contentHash.getCodec(encoded);
            if (codec === 'ipfs-ns') {
                protocolType = 'ipfs';
            }
            else if (codec === 'swarm-ns') {
                protocolType = 'bzz';
            }
            else if (codec === 'onion') {
                protocolType = 'onion';
            }
            else if (codec === 'onion3') {
                protocolType = 'onion3';
            }
            else {
                decoded = encoded;
            }
        }
        catch (e) {
            error = e.message;
        }
    }
    return {
        protocolType: protocolType,
        decoded: decoded,
        error: error
    };
}
function encode(text) {
    var content, contentType;
    var encoded = false;
    if (!!text) {
        var matched = text.match(/^(ipfs|bzz|onion|onion3):\/\/(.*)/) || text.match(/\/(ipfs)\/(.*)/);
        if (matched) {
            contentType = matched[1];
            content = matched[2];
        }
        try {
            if (contentType === 'ipfs') {
                if (content.length >= 4) {
                    encoded = '0x' + contentHash.fromIpfs(content);
                }
            }
            else if (contentType === 'bzz') {
                if (content.length >= 4) {
                    encoded = '0x' + contentHash.fromSwarm(content);
                }
            }
            else if (contentType === 'onion') {
                if (content.length === 16) {
                    encoded = '0x' + contentHash.encode('onion', content);
                }
            }
            else if (contentType === 'onion3') {
                if (content.length === 56) {
                    encoded = '0x' + contentHash.encode('onion3', content);
                }
            }
            else {
                throw new Error('Could not encode content hash: unsupported content type');
            }
        }
        catch (err) {
            throw err;
        }
    }
    return encoded;
}
module.exports = {
    decode: decode,
    encode: encode
};


/***/ }),

/***/ 2405:
/***/ ((module) => {

"use strict";

var REGISTRY = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "resolver",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "label",
                "type": "bytes32"
            },
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "setSubnodeOwner",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "ttl",
                "type": "uint64"
            }
        ],
        "name": "setTTL",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "ttl",
        "outputs": [
            {
                "name": "",
                "type": "uint64"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "resolver",
                "type": "address"
            }
        ],
        "name": "setResolver",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "setOwner",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "label",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "NewOwner",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "resolver",
                "type": "address"
            }
        ],
        "name": "NewResolver",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "ttl",
                "type": "uint64"
            }
        ],
        "name": "NewTTL",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "resolver",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "ttl",
                "type": "uint64"
            }
        ],
        "name": "setRecord",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "recordExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "node",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "label",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "resolver",
                "type": "address"
            },
            {
                "internalType": "uint64",
                "name": "ttl",
                "type": "uint64"
            }
        ],
        "name": "setSubnodeRecord",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
module.exports = REGISTRY;


/***/ }),

/***/ 68242:
/***/ ((module) => {

"use strict";

var RESOLVER = [
    {
        "constant": true,
        "inputs": [
            {
                "name": "interfaceID",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "contentTypes",
                "type": "uint256"
            }
        ],
        "name": "ABI",
        "outputs": [
            {
                "name": "contentType",
                "type": "uint256"
            },
            {
                "name": "data",
                "type": "bytes"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "hash",
                "type": "bytes"
            }
        ],
        "name": "setMultihash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "multihash",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "x",
                "type": "bytes32"
            },
            {
                "name": "y",
                "type": "bytes32"
            }
        ],
        "name": "setPubkey",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "content",
        "outputs": [
            {
                "name": "ret",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "addr",
        "outputs": [
            {
                "name": "ret",
                "type": "address"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "contentType",
                "type": "uint256"
            },
            {
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "setABI",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "name",
        "outputs": [
            {
                "name": "ret",
                "type": "string"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "name",
                "type": "string"
            }
        ],
        "name": "setName",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "setContent",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "pubkey",
        "outputs": [
            {
                "name": "x",
                "type": "bytes32"
            },
            {
                "name": "y",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "addr",
                "type": "address"
            }
        ],
        "name": "setAddr",
        "outputs": [],
        "payable": false,
        "type": "function"
    },
    {
        "inputs": [
            {
                "name": "ensAddr",
                "type": "address"
            }
        ],
        "payable": false,
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "a",
                "type": "address"
            }
        ],
        "name": "AddrChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "hash",
                "type": "bytes32"
            }
        ],
        "name": "ContentChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            }
        ],
        "name": "NameChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "name": "contentType",
                "type": "uint256"
            }
        ],
        "name": "ABIChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "x",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "y",
                "type": "bytes32"
            }
        ],
        "name": "PubkeyChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "node",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "name": "hash",
                "type": "bytes"
            }
        ],
        "name": "ContenthashChanged",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            }
        ],
        "name": "contenthash",
        "outputs": [
            {
                "name": "",
                "type": "bytes"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "node",
                "type": "bytes32"
            },
            {
                "name": "hash",
                "type": "bytes"
            }
        ],
        "name": "setContenthash",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
module.exports = RESOLVER;


/***/ })

}]);