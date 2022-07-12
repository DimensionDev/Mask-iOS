"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[3375],{

/***/ 97619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ Signer)
});

// UNUSED EXPORTS: VoidSigner

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(27930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abstract-signer@5.4.0/node_modules/@ethersproject/abstract-signer/lib.esm/_version.js
const version = "abstract-signer/5.4.0";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abstract-signer@5.4.0/node_modules/@ethersproject/abstract-signer/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const logger = new logger_lib_esm/* Logger */.Yd(version);
const allowedTransactionKeys = [
    "accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"
];
const forwardErrors = [
    logger_lib_esm/* Logger.errors.INSUFFICIENT_FUNDS */.Yd.errors.INSUFFICIENT_FUNDS,
    logger_lib_esm/* Logger.errors.NONCE_EXPIRED */.Yd.errors.NONCE_EXPIRED,
    logger_lib_esm/* Logger.errors.REPLACEMENT_UNDERPRICED */.Yd.errors.REPLACEMENT_UNDERPRICED,
];
;
;
class Signer {
    ///////////////////
    // Sub-classes MUST call super
    constructor() {
        logger.checkAbstract(new.target, Signer);
        (0,lib_esm/* defineReadOnly */.zG)(this, "_isSigner", true);
    }
    ///////////////////
    // Sub-classes MAY override these
    getBalance(blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getBalance");
            return yield this.provider.getBalance(this.getAddress(), blockTag);
        });
    }
    getTransactionCount(blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getTransactionCount");
            return yield this.provider.getTransactionCount(this.getAddress(), blockTag);
        });
    }
    // Populates "from" if unspecified, and estimates the gas for the transation
    estimateGas(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const tx = yield (0,lib_esm/* resolveProperties */.mE)(this.checkTransaction(transaction));
            return yield this.provider.estimateGas(tx);
        });
    }
    // Populates "from" if unspecified, and calls with the transation
    call(transaction, blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const tx = yield (0,lib_esm/* resolveProperties */.mE)(this.checkTransaction(transaction));
            return yield this.provider.call(tx, blockTag);
        });
    }
    // Populates all fields in a transaction, signs it and sends it to the network
    sendTransaction(transaction) {
        this._checkProvider("sendTransaction");
        return this.populateTransaction(transaction).then((tx) => {
            return this.signTransaction(tx).then((signedTx) => {
                return this.provider.sendTransaction(signedTx);
            });
        });
    }
    getChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            const network = yield this.provider.getNetwork();
            return network.chainId;
        });
    }
    getGasPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getGasPrice");
            return yield this.provider.getGasPrice();
        });
    }
    getFeeData() {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getFeeData");
            return yield this.provider.getFeeData();
        });
    }
    resolveName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("resolveName");
            return yield this.provider.resolveName(name);
        });
    }
    // Checks a transaction does not contain invalid keys and if
    // no "from" is provided, populates it.
    // - does NOT require a provider
    // - adds "from" is not present
    // - returns a COPY (safe to mutate the result)
    // By default called from: (overriding these prevents it)
    //   - call
    //   - estimateGas
    //   - populateTransaction (and therefor sendTransaction)
    checkTransaction(transaction) {
        for (const key in transaction) {
            if (allowedTransactionKeys.indexOf(key) === -1) {
                logger.throwArgumentError("invalid transaction key: " + key, "transaction", transaction);
            }
        }
        const tx = (0,lib_esm/* shallowCopy */.DC)(transaction);
        if (tx.from == null) {
            tx.from = this.getAddress();
        }
        else {
            // Make sure any provided address matches this signer
            tx.from = Promise.all([
                Promise.resolve(tx.from),
                this.getAddress()
            ]).then((result) => {
                if (result[0].toLowerCase() !== result[1].toLowerCase()) {
                    logger.throwArgumentError("from address mismatch", "transaction", transaction);
                }
                return result[0];
            });
        }
        return tx;
    }
    // Populates ALL keys for a transaction and checks that "from" matches
    // this Signer. Should be used by sendTransaction but NOT by signTransaction.
    // By default called from: (overriding these prevents it)
    //   - sendTransaction
    //
    // Notes:
    //  - We allow gasPrice for EIP-1559 as long as it matches maxFeePerGas
    populateTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx = yield (0,lib_esm/* resolveProperties */.mE)(this.checkTransaction(transaction));
            if (tx.to != null) {
                tx.to = Promise.resolve(tx.to).then((to) => __awaiter(this, void 0, void 0, function* () {
                    if (to == null) {
                        return null;
                    }
                    const address = yield this.resolveName(to);
                    if (address == null) {
                        logger.throwArgumentError("provided ENS name resolves to null", "tx.to", to);
                    }
                    return address;
                }));
            }
            // Do not allow mixing pre-eip-1559 and eip-1559 proerties
            const hasEip1559 = (tx.maxFeePerGas != null || tx.maxPriorityFeePerGas != null);
            if (tx.gasPrice != null && (tx.type === 2 || hasEip1559)) {
                logger.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", transaction);
            }
            else if ((tx.type === 0 || tx.type === 1) && hasEip1559) {
                logger.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", transaction);
            }
            if ((tx.type === 2 || tx.type == null) && (tx.maxFeePerGas != null && tx.maxPriorityFeePerGas != null)) {
                // Fully-formed EIP-1559 transaction (skip getFeeData)
                tx.type = 2;
            }
            else if (tx.type === 0 || tx.type === 1) {
                // Explicit Legacy or EIP-2930 transaction
                // Populate missing gasPrice
                if (tx.gasPrice == null) {
                    tx.gasPrice = this.getGasPrice();
                }
            }
            else {
                // We need to get fee data to determine things
                const feeData = yield this.getFeeData();
                if (tx.type == null) {
                    // We need to auto-detect the intended type of this transaction...
                    if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
                        // The network supports EIP-1559!
                        // Upgrade transaction from null to eip-1559
                        tx.type = 2;
                        if (tx.gasPrice != null) {
                            // Using legacy gasPrice property on an eip-1559 network,
                            // so use gasPrice as both fee properties
                            const gasPrice = tx.gasPrice;
                            delete tx.gasPrice;
                            tx.maxFeePerGas = gasPrice;
                            tx.maxPriorityFeePerGas = gasPrice;
                        }
                        else {
                            // Populate missing fee data
                            if (tx.maxFeePerGas == null) {
                                tx.maxFeePerGas = feeData.maxFeePerGas;
                            }
                            if (tx.maxPriorityFeePerGas == null) {
                                tx.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                            }
                        }
                    }
                    else if (feeData.gasPrice != null) {
                        // Network doesn't support EIP-1559...
                        // ...but they are trying to use EIP-1559 properties
                        if (hasEip1559) {
                            logger.throwError("network does not support EIP-1559", logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
                                operation: "populateTransaction"
                            });
                        }
                        // Populate missing fee data
                        if (tx.gasPrice == null) {
                            tx.gasPrice = feeData.gasPrice;
                        }
                        // Explicitly set untyped transaction to legacy
                        tx.type = 0;
                    }
                    else {
                        // getFeeData has failed us.
                        logger.throwError("failed to get consistent fee data", logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "signer.getFeeData"
                        });
                    }
                }
                else if (tx.type === 2) {
                    // Explicitly using EIP-1559
                    // Populate missing fee data
                    if (tx.maxFeePerGas == null) {
                        tx.maxFeePerGas = feeData.maxFeePerGas;
                    }
                    if (tx.maxPriorityFeePerGas == null) {
                        tx.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                    }
                }
            }
            if (tx.nonce == null) {
                tx.nonce = this.getTransactionCount("pending");
            }
            if (tx.gasLimit == null) {
                tx.gasLimit = this.estimateGas(tx).catch((error) => {
                    if (forwardErrors.indexOf(error.code) >= 0) {
                        throw error;
                    }
                    return logger.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", logger_lib_esm/* Logger.errors.UNPREDICTABLE_GAS_LIMIT */.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                        error: error,
                        tx: tx
                    });
                });
            }
            if (tx.chainId == null) {
                tx.chainId = this.getChainId();
            }
            else {
                tx.chainId = Promise.all([
                    Promise.resolve(tx.chainId),
                    this.getChainId()
                ]).then((results) => {
                    if (results[1] !== 0 && results[0] !== results[1]) {
                        logger.throwArgumentError("chainId address mismatch", "transaction", transaction);
                    }
                    return results[0];
                });
            }
            return yield (0,lib_esm/* resolveProperties */.mE)(tx);
        });
    }
    ///////////////////
    // Sub-classes SHOULD leave these alone
    _checkProvider(operation) {
        if (!this.provider) {
            logger.throwError("missing provider", logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: (operation || "_checkProvider")
            });
        }
    }
    static isSigner(value) {
        return !!(value && value._isSigner);
    }
}
class VoidSigner extends (/* unused pure expression or super */ null && (Signer)) {
    constructor(address, provider) {
        logger.checkNew(new.target, VoidSigner);
        super();
        defineReadOnly(this, "address", address);
        defineReadOnly(this, "provider", provider || null);
    }
    getAddress() {
        return Promise.resolve(this.address);
    }
    _fail(message, operation) {
        return Promise.resolve().then(() => {
            logger.throwError(message, Logger.errors.UNSUPPORTED_OPERATION, { operation: operation });
        });
    }
    signMessage(message) {
        return this._fail("VoidSigner cannot sign messages", "signMessage");
    }
    signTransaction(transaction) {
        return this._fail("VoidSigner cannot sign transactions", "signTransaction");
    }
    _signTypedData(domain, types, value) {
        return this._fail("VoidSigner cannot sign typed data", "signTypedData");
    }
    connect(provider) {
        return new VoidSigner(this.address, provider);
    }
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 86496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* binding */ Signer),
  "b": () => (/* binding */ VoidSigner)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+properties@5.4.0/node_modules/@ethersproject/properties/lib.esm/index.js + 1 modules
var lib_esm = __webpack_require__(27930);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@ethersproject+logger@5.6.0/node_modules/@ethersproject/logger/lib.esm/index.js + 1 modules
var logger_lib_esm = __webpack_require__(58450);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abstract-signer@5.4.1/node_modules/@ethersproject/abstract-signer/lib.esm/_version.js
const version = "abstract-signer/5.4.1";
//# sourceMappingURL=_version.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ethersproject+abstract-signer@5.4.1/node_modules/@ethersproject/abstract-signer/lib.esm/index.js

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const logger = new logger_lib_esm/* Logger */.Yd(version);
const allowedTransactionKeys = [
    "accessList", "chainId", "data", "from", "gasLimit", "gasPrice", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "to", "type", "value"
];
const forwardErrors = [
    logger_lib_esm/* Logger.errors.INSUFFICIENT_FUNDS */.Yd.errors.INSUFFICIENT_FUNDS,
    logger_lib_esm/* Logger.errors.NONCE_EXPIRED */.Yd.errors.NONCE_EXPIRED,
    logger_lib_esm/* Logger.errors.REPLACEMENT_UNDERPRICED */.Yd.errors.REPLACEMENT_UNDERPRICED,
];
;
;
class Signer {
    ///////////////////
    // Sub-classes MUST call super
    constructor() {
        logger.checkAbstract(new.target, Signer);
        (0,lib_esm/* defineReadOnly */.zG)(this, "_isSigner", true);
    }
    ///////////////////
    // Sub-classes MAY override these
    getBalance(blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getBalance");
            return yield this.provider.getBalance(this.getAddress(), blockTag);
        });
    }
    getTransactionCount(blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getTransactionCount");
            return yield this.provider.getTransactionCount(this.getAddress(), blockTag);
        });
    }
    // Populates "from" if unspecified, and estimates the gas for the transation
    estimateGas(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("estimateGas");
            const tx = yield (0,lib_esm/* resolveProperties */.mE)(this.checkTransaction(transaction));
            return yield this.provider.estimateGas(tx);
        });
    }
    // Populates "from" if unspecified, and calls with the transation
    call(transaction, blockTag) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("call");
            const tx = yield (0,lib_esm/* resolveProperties */.mE)(this.checkTransaction(transaction));
            return yield this.provider.call(tx, blockTag);
        });
    }
    // Populates all fields in a transaction, signs it and sends it to the network
    sendTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("sendTransaction");
            const tx = yield this.populateTransaction(transaction);
            const signedTx = yield this.signTransaction(tx);
            return yield this.provider.sendTransaction(signedTx);
        });
    }
    getChainId() {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getChainId");
            const network = yield this.provider.getNetwork();
            return network.chainId;
        });
    }
    getGasPrice() {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getGasPrice");
            return yield this.provider.getGasPrice();
        });
    }
    getFeeData() {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("getFeeData");
            return yield this.provider.getFeeData();
        });
    }
    resolveName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            this._checkProvider("resolveName");
            return yield this.provider.resolveName(name);
        });
    }
    // Checks a transaction does not contain invalid keys and if
    // no "from" is provided, populates it.
    // - does NOT require a provider
    // - adds "from" is not present
    // - returns a COPY (safe to mutate the result)
    // By default called from: (overriding these prevents it)
    //   - call
    //   - estimateGas
    //   - populateTransaction (and therefor sendTransaction)
    checkTransaction(transaction) {
        for (const key in transaction) {
            if (allowedTransactionKeys.indexOf(key) === -1) {
                logger.throwArgumentError("invalid transaction key: " + key, "transaction", transaction);
            }
        }
        const tx = (0,lib_esm/* shallowCopy */.DC)(transaction);
        if (tx.from == null) {
            tx.from = this.getAddress();
        }
        else {
            // Make sure any provided address matches this signer
            tx.from = Promise.all([
                Promise.resolve(tx.from),
                this.getAddress()
            ]).then((result) => {
                if (result[0].toLowerCase() !== result[1].toLowerCase()) {
                    logger.throwArgumentError("from address mismatch", "transaction", transaction);
                }
                return result[0];
            });
        }
        return tx;
    }
    // Populates ALL keys for a transaction and checks that "from" matches
    // this Signer. Should be used by sendTransaction but NOT by signTransaction.
    // By default called from: (overriding these prevents it)
    //   - sendTransaction
    //
    // Notes:
    //  - We allow gasPrice for EIP-1559 as long as it matches maxFeePerGas
    populateTransaction(transaction) {
        return __awaiter(this, void 0, void 0, function* () {
            const tx = yield (0,lib_esm/* resolveProperties */.mE)(this.checkTransaction(transaction));
            if (tx.to != null) {
                tx.to = Promise.resolve(tx.to).then((to) => __awaiter(this, void 0, void 0, function* () {
                    if (to == null) {
                        return null;
                    }
                    const address = yield this.resolveName(to);
                    if (address == null) {
                        logger.throwArgumentError("provided ENS name resolves to null", "tx.to", to);
                    }
                    return address;
                }));
                // Prevent this error from causing an UnhandledPromiseException
                tx.to.catch((error) => { });
            }
            // Do not allow mixing pre-eip-1559 and eip-1559 proerties
            const hasEip1559 = (tx.maxFeePerGas != null || tx.maxPriorityFeePerGas != null);
            if (tx.gasPrice != null && (tx.type === 2 || hasEip1559)) {
                logger.throwArgumentError("eip-1559 transaction do not support gasPrice", "transaction", transaction);
            }
            else if ((tx.type === 0 || tx.type === 1) && hasEip1559) {
                logger.throwArgumentError("pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "transaction", transaction);
            }
            if ((tx.type === 2 || tx.type == null) && (tx.maxFeePerGas != null && tx.maxPriorityFeePerGas != null)) {
                // Fully-formed EIP-1559 transaction (skip getFeeData)
                tx.type = 2;
            }
            else if (tx.type === 0 || tx.type === 1) {
                // Explicit Legacy or EIP-2930 transaction
                // Populate missing gasPrice
                if (tx.gasPrice == null) {
                    tx.gasPrice = this.getGasPrice();
                }
            }
            else {
                // We need to get fee data to determine things
                const feeData = yield this.getFeeData();
                if (tx.type == null) {
                    // We need to auto-detect the intended type of this transaction...
                    if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
                        // The network supports EIP-1559!
                        // Upgrade transaction from null to eip-1559
                        tx.type = 2;
                        if (tx.gasPrice != null) {
                            // Using legacy gasPrice property on an eip-1559 network,
                            // so use gasPrice as both fee properties
                            const gasPrice = tx.gasPrice;
                            delete tx.gasPrice;
                            tx.maxFeePerGas = gasPrice;
                            tx.maxPriorityFeePerGas = gasPrice;
                        }
                        else {
                            // Populate missing fee data
                            if (tx.maxFeePerGas == null) {
                                tx.maxFeePerGas = feeData.maxFeePerGas;
                            }
                            if (tx.maxPriorityFeePerGas == null) {
                                tx.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                            }
                        }
                    }
                    else if (feeData.gasPrice != null) {
                        // Network doesn't support EIP-1559...
                        // ...but they are trying to use EIP-1559 properties
                        if (hasEip1559) {
                            logger.throwError("network does not support EIP-1559", logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
                                operation: "populateTransaction"
                            });
                        }
                        // Populate missing fee data
                        if (tx.gasPrice == null) {
                            tx.gasPrice = feeData.gasPrice;
                        }
                        // Explicitly set untyped transaction to legacy
                        tx.type = 0;
                    }
                    else {
                        // getFeeData has failed us.
                        logger.throwError("failed to get consistent fee data", logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
                            operation: "signer.getFeeData"
                        });
                    }
                }
                else if (tx.type === 2) {
                    // Explicitly using EIP-1559
                    // Populate missing fee data
                    if (tx.maxFeePerGas == null) {
                        tx.maxFeePerGas = feeData.maxFeePerGas;
                    }
                    if (tx.maxPriorityFeePerGas == null) {
                        tx.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
                    }
                }
            }
            if (tx.nonce == null) {
                tx.nonce = this.getTransactionCount("pending");
            }
            if (tx.gasLimit == null) {
                tx.gasLimit = this.estimateGas(tx).catch((error) => {
                    if (forwardErrors.indexOf(error.code) >= 0) {
                        throw error;
                    }
                    return logger.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", logger_lib_esm/* Logger.errors.UNPREDICTABLE_GAS_LIMIT */.Yd.errors.UNPREDICTABLE_GAS_LIMIT, {
                        error: error,
                        tx: tx
                    });
                });
            }
            if (tx.chainId == null) {
                tx.chainId = this.getChainId();
            }
            else {
                tx.chainId = Promise.all([
                    Promise.resolve(tx.chainId),
                    this.getChainId()
                ]).then((results) => {
                    if (results[1] !== 0 && results[0] !== results[1]) {
                        logger.throwArgumentError("chainId address mismatch", "transaction", transaction);
                    }
                    return results[0];
                });
            }
            return yield (0,lib_esm/* resolveProperties */.mE)(tx);
        });
    }
    ///////////////////
    // Sub-classes SHOULD leave these alone
    _checkProvider(operation) {
        if (!this.provider) {
            logger.throwError("missing provider", logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, {
                operation: (operation || "_checkProvider")
            });
        }
    }
    static isSigner(value) {
        return !!(value && value._isSigner);
    }
}
class VoidSigner extends Signer {
    constructor(address, provider) {
        logger.checkNew(new.target, VoidSigner);
        super();
        (0,lib_esm/* defineReadOnly */.zG)(this, "address", address);
        (0,lib_esm/* defineReadOnly */.zG)(this, "provider", provider || null);
    }
    getAddress() {
        return Promise.resolve(this.address);
    }
    _fail(message, operation) {
        return Promise.resolve().then(() => {
            logger.throwError(message, logger_lib_esm/* Logger.errors.UNSUPPORTED_OPERATION */.Yd.errors.UNSUPPORTED_OPERATION, { operation: operation });
        });
    }
    signMessage(message) {
        return this._fail("VoidSigner cannot sign messages", "signMessage");
    }
    signTransaction(transaction) {
        return this._fail("VoidSigner cannot sign transactions", "signTransaction");
    }
    _signTypedData(domain, types, value) {
        return this._fail("VoidSigner cannot sign typed data", "signTypedData");
    }
    connect(provider) {
        return new VoidSigner(this.address, provider);
    }
}
//# sourceMappingURL=index.js.map

/***/ })

}]);