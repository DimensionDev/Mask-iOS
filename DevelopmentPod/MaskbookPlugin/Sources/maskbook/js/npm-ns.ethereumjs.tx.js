"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7512],{

/***/ 6303:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseTransaction = void 0;
var common_1 = __importStar(__webpack_require__(85197));
var ethereumjs_util_1 = __webpack_require__(5459);
var types_1 = __webpack_require__(21965);
/**
 * This base class will likely be subject to further
 * refactoring along the introduction of additional tx types
 * on the Ethereum network.
 *
 * It is therefore not recommended to use directly.
 */
var BaseTransaction = /** @class */ (function () {
    function BaseTransaction(txData) {
        this.cache = {
            hash: undefined,
            dataFee: undefined,
        };
        /**
         * List of tx type defining EIPs,
         * e.g. 1559 (fee market) and 2930 (access lists)
         * for FeeMarketEIP1559Transaction objects
         */
        this.activeCapabilities = [];
        /**
         * The default chain the tx falls back to if no Common
         * is provided and if the chain can't be derived from
         * a passed in chainId (only EIP-2718 typed txs) or
         * EIP-155 signature (legacy txs).
         *
         * @hidden
         */
        this.DEFAULT_CHAIN = common_1.Chain.Mainnet;
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */
        this.DEFAULT_HARDFORK = common_1.Hardfork.Istanbul;
        var nonce = txData.nonce, gasLimit = txData.gasLimit, to = txData.to, value = txData.value, data = txData.data, v = txData.v, r = txData.r, s = txData.s, type = txData.type;
        this._type = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(type)).toNumber();
        var toB = (0, ethereumjs_util_1.toBuffer)(to === '' ? '0x' : to);
        var vB = (0, ethereumjs_util_1.toBuffer)(v === '' ? '0x' : v);
        var rB = (0, ethereumjs_util_1.toBuffer)(r === '' ? '0x' : r);
        var sB = (0, ethereumjs_util_1.toBuffer)(s === '' ? '0x' : s);
        this.nonce = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(nonce === '' ? '0x' : nonce));
        this.gasLimit = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(gasLimit === '' ? '0x' : gasLimit));
        this.to = toB.length > 0 ? new ethereumjs_util_1.Address(toB) : undefined;
        this.value = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(value === '' ? '0x' : value));
        this.data = (0, ethereumjs_util_1.toBuffer)(data === '' ? '0x' : data);
        this.v = vB.length > 0 ? new ethereumjs_util_1.BN(vB) : undefined;
        this.r = rB.length > 0 ? new ethereumjs_util_1.BN(rB) : undefined;
        this.s = sB.length > 0 ? new ethereumjs_util_1.BN(sB) : undefined;
        this._validateCannotExceedMaxInteger({ value: this.value, r: this.r, s: this.s });
        // geth limits gasLimit to 2^64-1
        this._validateCannotExceedMaxInteger({ gasLimit: this.gasLimit }, 64);
        // EIP-2681 limits nonce to 2^64-1 (cannot equal 2^64-1)
        this._validateCannotExceedMaxInteger({ nonce: this.nonce }, 64, true);
    }
    Object.defineProperty(BaseTransaction.prototype, "transactionType", {
        /**
         * Alias for {@link BaseTransaction.type}
         *
         * @deprecated Use `type` instead
         */
        get: function () {
            return this.type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseTransaction.prototype, "type", {
        /**
         * Returns the transaction type.
         *
         * Note: legacy txs will return tx type `0`.
         */
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Checks if a tx type defining capability is active
     * on a tx, for example the EIP-1559 fee market mechanism
     * or the EIP-2930 access list feature.
     *
     * Note that this is different from the tx type itself,
     * so EIP-2930 access lists can very well be active
     * on an EIP-1559 tx for example.
     *
     * This method can be useful for feature checks if the
     * tx type is unknown (e.g. when instantiated with
     * the tx factory).
     *
     * See `Capabilites` in the `types` module for a reference
     * on all supported capabilities.
     */
    BaseTransaction.prototype.supports = function (capability) {
        return this.activeCapabilities.includes(capability);
    };
    BaseTransaction.prototype.validate = function (stringError) {
        if (stringError === void 0) { stringError = false; }
        var errors = [];
        if (this.getBaseFee().gt(this.gasLimit)) {
            errors.push("gasLimit is too low. given ".concat(this.gasLimit, ", need at least ").concat(this.getBaseFee()));
        }
        if (this.isSigned() && !this.verifySignature()) {
            errors.push('Invalid Signature');
        }
        return stringError ? errors : errors.length === 0;
    };
    /**
     * The minimum amount of gas the tx must have (DataFee + TxFee + Creation Fee)
     */
    BaseTransaction.prototype.getBaseFee = function () {
        var fee = this.getDataFee().addn(this.common.param('gasPrices', 'tx'));
        if (this.common.gteHardfork('homestead') && this.toCreationAddress()) {
            fee.iaddn(this.common.param('gasPrices', 'txCreation'));
        }
        return fee;
    };
    /**
     * The amount of gas paid for the data in this tx
     */
    BaseTransaction.prototype.getDataFee = function () {
        var txDataZero = this.common.param('gasPrices', 'txDataZero');
        var txDataNonZero = this.common.param('gasPrices', 'txDataNonZero');
        var cost = 0;
        for (var i = 0; i < this.data.length; i++) {
            this.data[i] === 0 ? (cost += txDataZero) : (cost += txDataNonZero);
        }
        cost = new ethereumjs_util_1.BN(cost);
        if ((this.to === undefined || this.to === null) && this.common.isActivatedEIP(3860)) {
            var dataLength = Math.ceil(this.data.length / 32);
            var initCodeCost = new ethereumjs_util_1.BN(this.common.param('gasPrices', 'initCodeWordCost')).imuln(dataLength);
            cost.iadd(initCodeCost);
        }
        return cost;
    };
    /**
     * If the tx's `to` is to the creation address
     */
    BaseTransaction.prototype.toCreationAddress = function () {
        return this.to === undefined || this.to.buf.length === 0;
    };
    BaseTransaction.prototype.isSigned = function () {
        var _a = this, v = _a.v, r = _a.r, s = _a.s;
        if (this.type === 0) {
            if (!v || !r || !s) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (v === undefined || !r || !s) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    /**
     * Determines if the signature is valid
     */
    BaseTransaction.prototype.verifySignature = function () {
        try {
            // Main signature verification is done in `getSenderPublicKey()`
            var publicKey = this.getSenderPublicKey();
            return (0, ethereumjs_util_1.unpadBuffer)(publicKey).length !== 0;
        }
        catch (e) {
            return false;
        }
    };
    /**
     * Returns the sender's address
     */
    BaseTransaction.prototype.getSenderAddress = function () {
        return new ethereumjs_util_1.Address((0, ethereumjs_util_1.publicToAddress)(this.getSenderPublicKey()));
    };
    /**
     * Signs a transaction.
     *
     * Note that the signed tx is returned as a new object,
     * use as follows:
     * ```javascript
     * const signedTx = tx.sign(privateKey)
     * ```
     */
    BaseTransaction.prototype.sign = function (privateKey) {
        if (privateKey.length !== 32) {
            var msg = this._errorMsg('Private key must be 32 bytes in length.');
            throw new Error(msg);
        }
        // Hack for the constellation that we have got a legacy tx after spuriousDragon with a non-EIP155 conforming signature
        // and want to recreate a signature (where EIP155 should be applied)
        // Leaving this hack lets the legacy.spec.ts -> sign(), verifySignature() test fail
        // 2021-06-23
        var hackApplied = false;
        if (this.type === 0 &&
            this.common.gteHardfork('spuriousDragon') &&
            !this.supports(types_1.Capability.EIP155ReplayProtection)) {
            this.activeCapabilities.push(types_1.Capability.EIP155ReplayProtection);
            hackApplied = true;
        }
        var msgHash = this.getMessageToSign(true);
        var _a = (0, ethereumjs_util_1.ecsign)(msgHash, privateKey), v = _a.v, r = _a.r, s = _a.s;
        var tx = this._processSignature(v, r, s);
        // Hack part 2
        if (hackApplied) {
            var index = this.activeCapabilities.indexOf(types_1.Capability.EIP155ReplayProtection);
            if (index > -1) {
                this.activeCapabilities.splice(index, 1);
            }
        }
        return tx;
    };
    /**
     * Does chain ID checks on common and returns a common
     * to be used on instantiation
     * @hidden
     *
     * @param common - {@link Common} instance from tx options
     * @param chainId - Chain ID from tx options (typed txs) or signature (legacy tx)
     */
    BaseTransaction.prototype._getCommon = function (common, chainId) {
        var _a;
        // Chain ID provided
        if (chainId) {
            var chainIdBN = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(chainId));
            if (common) {
                if (!common.chainIdBN().eq(chainIdBN)) {
                    var msg = this._errorMsg('The chain ID does not match the chain ID of Common');
                    throw new Error(msg);
                }
                // Common provided, chain ID does match
                // -> Return provided Common
                return common.copy();
            }
            else {
                if (common_1.default.isSupportedChainId(chainIdBN)) {
                    // No Common, chain ID supported by Common
                    // -> Instantiate Common with chain ID
                    return new common_1.default({ chain: chainIdBN, hardfork: this.DEFAULT_HARDFORK });
                }
                else {
                    // No Common, chain ID not supported by Common
                    // -> Instantiate custom Common derived from DEFAULT_CHAIN
                    return common_1.default.forCustomChain(this.DEFAULT_CHAIN, {
                        name: 'custom-chain',
                        networkId: chainIdBN,
                        chainId: chainIdBN,
                    }, this.DEFAULT_HARDFORK);
                }
            }
        }
        else {
            // No chain ID provided
            // -> return Common provided or create new default Common
            return ((_a = common === null || common === void 0 ? void 0 : common.copy()) !== null && _a !== void 0 ? _a : new common_1.default({ chain: this.DEFAULT_CHAIN, hardfork: this.DEFAULT_HARDFORK }));
        }
    };
    /**
     * Validates that an object with BN values cannot exceed the specified bit limit.
     * @param values Object containing string keys and BN values
     * @param bits Number of bits to check (64 or 256)
     * @param cannotEqual Pass true if the number also cannot equal one less the maximum value
     */
    BaseTransaction.prototype._validateCannotExceedMaxInteger = function (values, bits, cannotEqual) {
        var e_1, _a;
        if (bits === void 0) { bits = 256; }
        if (cannotEqual === void 0) { cannotEqual = false; }
        try {
            for (var _b = __values(Object.entries(values)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                switch (bits) {
                    case 64:
                        if (cannotEqual) {
                            if (value === null || value === void 0 ? void 0 : value.gte(ethereumjs_util_1.MAX_UINT64)) {
                                var msg = this._errorMsg("".concat(key, " cannot equal or exceed MAX_UINT64 (2^64-1), given ").concat(value));
                                throw new Error(msg);
                            }
                        }
                        else {
                            if (value === null || value === void 0 ? void 0 : value.gt(ethereumjs_util_1.MAX_UINT64)) {
                                var msg = this._errorMsg("".concat(key, " cannot exceed MAX_UINT64 (2^64-1), given ").concat(value));
                                throw new Error(msg);
                            }
                        }
                        break;
                    case 256:
                        if (cannotEqual) {
                            if (value === null || value === void 0 ? void 0 : value.gte(ethereumjs_util_1.MAX_INTEGER)) {
                                var msg = this._errorMsg("".concat(key, " cannot equal or exceed MAX_INTEGER (2^256-1), given ").concat(value));
                                throw new Error(msg);
                            }
                        }
                        else {
                            if (value === null || value === void 0 ? void 0 : value.gt(ethereumjs_util_1.MAX_INTEGER)) {
                                var msg = this._errorMsg("".concat(key, " cannot exceed MAX_INTEGER (2^256-1), given ").concat(value));
                                throw new Error(msg);
                            }
                        }
                        break;
                    default: {
                        var msg = this._errorMsg('unimplemented bits value');
                        throw new Error(msg);
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Returns the shared error postfix part for _error() method
     * tx type implementations.
     */
    BaseTransaction.prototype._getSharedErrorPostfix = function () {
        var hash = '';
        try {
            hash = this.isSigned() ? (0, ethereumjs_util_1.bufferToHex)(this.hash()) : 'not available (unsigned)';
        }
        catch (e) {
            hash = 'error';
        }
        var isSigned = '';
        try {
            isSigned = this.isSigned().toString();
        }
        catch (e) {
            hash = 'error';
        }
        var hf = '';
        try {
            hf = this.common.hardfork();
        }
        catch (e) {
            hf = 'error';
        }
        var postfix = "tx type=".concat(this.type, " hash=").concat(hash, " nonce=").concat(this.nonce, " value=").concat(this.value, " ");
        postfix += "signed=".concat(isSigned, " hf=").concat(hf);
        return postfix;
    };
    return BaseTransaction;
}());
exports.BaseTransaction = BaseTransaction;
//# sourceMappingURL=baseTransaction.js.map

/***/ }),

/***/ 94619:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ethereumjs_util_1 = __webpack_require__(5459);
var baseTransaction_1 = __webpack_require__(6303);
var types_1 = __webpack_require__(21965);
var util_1 = __webpack_require__(74436);
var TRANSACTION_TYPE = 2;
var TRANSACTION_TYPE_BUFFER = Buffer.from(TRANSACTION_TYPE.toString(16).padStart(2, '0'), 'hex');
/**
 * Typed transaction with a new gas fee market mechanism
 *
 * - TransactionType: 2
 * - EIP: [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559)
 */
var FeeMarketEIP1559Transaction = /** @class */ (function (_super) {
    __extends(FeeMarketEIP1559Transaction, _super);
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    function FeeMarketEIP1559Transaction(txData, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = this;
        var _a, _b;
        _this = _super.call(this, __assign(__assign({}, txData), { type: TRANSACTION_TYPE })) || this;
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */
        _this.DEFAULT_HARDFORK = 'london';
        var chainId = txData.chainId, accessList = txData.accessList, maxFeePerGas = txData.maxFeePerGas, maxPriorityFeePerGas = txData.maxPriorityFeePerGas;
        _this.common = _this._getCommon(opts.common, chainId);
        _this.chainId = _this.common.chainIdBN();
        if (!_this.common.isActivatedEIP(1559)) {
            throw new Error('EIP-1559 not enabled on Common');
        }
        _this.activeCapabilities = _this.activeCapabilities.concat([1559, 2718, 2930]);
        // Populate the access list fields
        var accessListData = util_1.AccessLists.getAccessListData(accessList !== null && accessList !== void 0 ? accessList : []);
        _this.accessList = accessListData.accessList;
        _this.AccessListJSON = accessListData.AccessListJSON;
        // Verify the access list format.
        util_1.AccessLists.verifyAccessList(_this.accessList);
        _this.maxFeePerGas = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(maxFeePerGas === '' ? '0x' : maxFeePerGas));
        _this.maxPriorityFeePerGas = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(maxPriorityFeePerGas === '' ? '0x' : maxPriorityFeePerGas));
        _this._validateCannotExceedMaxInteger({
            maxFeePerGas: _this.maxFeePerGas,
            maxPriorityFeePerGas: _this.maxPriorityFeePerGas,
        });
        if (_this.gasLimit.mul(_this.maxFeePerGas).gt(ethereumjs_util_1.MAX_INTEGER)) {
            var msg = _this._errorMsg('gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)');
            throw new Error(msg);
        }
        if (_this.maxFeePerGas.lt(_this.maxPriorityFeePerGas)) {
            var msg = _this._errorMsg('maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)');
            throw new Error(msg);
        }
        if (_this.v && !_this.v.eqn(0) && !_this.v.eqn(1)) {
            var msg = _this._errorMsg('The y-parity of the transaction should either be 0 or 1');
            throw new Error(msg);
        }
        if (_this.common.gteHardfork('homestead') && ((_a = _this.s) === null || _a === void 0 ? void 0 : _a.gt(types_1.N_DIV_2))) {
            var msg = _this._errorMsg('Invalid Signature: s-values greater than secp256k1n/2 are considered invalid');
            throw new Error(msg);
        }
        if (_this.common.isActivatedEIP(3860)) {
            (0, util_1.checkMaxInitCodeSize)(_this.common, _this.data.length);
        }
        var freeze = (_b = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _b !== void 0 ? _b : true;
        if (freeze) {
            Object.freeze(_this);
        }
        return _this;
    }
    Object.defineProperty(FeeMarketEIP1559Transaction.prototype, "senderR", {
        /**
         * EIP-2930 alias for `r`
         *
         * @deprecated use `r` instead
         */
        get: function () {
            return this.r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeeMarketEIP1559Transaction.prototype, "senderS", {
        /**
         * EIP-2930 alias for `s`
         *
         * @deprecated use `s` instead
         */
        get: function () {
            return this.s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeeMarketEIP1559Transaction.prototype, "yParity", {
        /**
         * EIP-2930 alias for `v`
         *
         * @deprecated use `v` instead
         */
        get: function () {
            return this.v;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, v, r, s }
     *
     * Notes:
     * - `chainId` will be set automatically if not provided
     * - All parameters are optional and have some basic default values
     */
    FeeMarketEIP1559Transaction.fromTxData = function (txData, opts) {
        if (opts === void 0) { opts = {}; }
        return new FeeMarketEIP1559Transaction(txData, opts);
    };
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS])`
     */
    FeeMarketEIP1559Transaction.fromSerializedTx = function (serialized, opts) {
        if (opts === void 0) { opts = {}; }
        if (!serialized.slice(0, 1).equals(TRANSACTION_TYPE_BUFFER)) {
            throw new Error("Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ".concat(TRANSACTION_TYPE, ", received: ").concat(serialized
                .slice(0, 1)
                .toString('hex')));
        }
        var values = ethereumjs_util_1.rlp.decode(serialized.slice(1));
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized tx input: must be array');
        }
        return FeeMarketEIP1559Transaction.fromValuesArray(values, opts);
    };
    /**
     * Instantiate a transaction from the serialized tx.
     * (alias of {@link FeeMarketEIP1559Transaction.fromSerializedTx})
     *
     * Note: This means that the Buffer should start with 0x01.
     *
     * @deprecated this constructor alias is deprecated and will be removed
     * in favor of the {@link FeeMarketEIP1559Transaction.fromSerializedTx} constructor
     */
    FeeMarketEIP1559Transaction.fromRlpSerializedTx = function (serialized, opts) {
        if (opts === void 0) { opts = {}; }
        return FeeMarketEIP1559Transaction.fromSerializedTx(serialized, opts);
    };
    /**
     * Create a transaction from a values array.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS]`
     */
    FeeMarketEIP1559Transaction.fromValuesArray = function (values, opts) {
        if (opts === void 0) { opts = {}; }
        if (values.length !== 9 && values.length !== 12) {
            throw new Error('Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).');
        }
        var _a = __read(values, 12), chainId = _a[0], nonce = _a[1], maxPriorityFeePerGas = _a[2], maxFeePerGas = _a[3], gasLimit = _a[4], to = _a[5], value = _a[6], data = _a[7], accessList = _a[8], v = _a[9], r = _a[10], s = _a[11];
        (0, ethereumjs_util_1.validateNoLeadingZeroes)({ nonce: nonce, maxPriorityFeePerGas: maxPriorityFeePerGas, maxFeePerGas: maxFeePerGas, gasLimit: gasLimit, value: value, v: v, r: r, s: s });
        return new FeeMarketEIP1559Transaction({
            chainId: new ethereumjs_util_1.BN(chainId),
            nonce: nonce,
            maxPriorityFeePerGas: maxPriorityFeePerGas,
            maxFeePerGas: maxFeePerGas,
            gasLimit: gasLimit,
            to: to,
            value: value,
            data: data,
            accessList: accessList !== null && accessList !== void 0 ? accessList : [],
            v: v !== undefined ? new ethereumjs_util_1.BN(v) : undefined,
            r: r,
            s: s,
        }, opts);
    };
    /**
     * The amount of gas paid for the data in this tx
     */
    FeeMarketEIP1559Transaction.prototype.getDataFee = function () {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
            return this.cache.dataFee.value;
        }
        var cost = _super.prototype.getDataFee.call(this);
        cost.iaddn(util_1.AccessLists.getDataFeeEIP2930(this.accessList, this.common));
        if (Object.isFrozen(this)) {
            this.cache.dataFee = {
                value: cost,
                hardfork: this.common.hardfork(),
            };
        }
        return cost;
    };
    /**
     * The up front amount that an account must have for this transaction to be valid
     * @param baseFee The base fee of the block (will be set to 0 if not provided)
     */
    FeeMarketEIP1559Transaction.prototype.getUpfrontCost = function (baseFee) {
        if (baseFee === void 0) { baseFee = new ethereumjs_util_1.BN(0); }
        var inclusionFeePerGas = ethereumjs_util_1.BN.min(this.maxPriorityFeePerGas, this.maxFeePerGas.sub(baseFee));
        var gasPrice = inclusionFeePerGas.add(baseFee);
        return this.gasLimit.mul(gasPrice).add(this.value);
    };
    /**
     * Returns a Buffer Array of the raw Buffers of the EIP-1559 transaction, in order.
     *
     * Format: `[chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS]`
     *
     * Use {@link FeeMarketEIP1559Transaction.serialize} to add a transaction to a block
     * with {@link Block.fromValuesArray}.
     *
     * For an unsigned tx this method uses the empty Buffer values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link FeeMarketEIP1559Transaction.getMessageToSign}.
     */
    FeeMarketEIP1559Transaction.prototype.raw = function () {
        return [
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.chainId),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.nonce),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.maxPriorityFeePerGas),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.maxFeePerGas),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.value),
            this.data,
            this.accessList,
            this.v !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.v) : Buffer.from([]),
            this.r !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.r) : Buffer.from([]),
            this.s !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.s) : Buffer.from([]),
        ];
    };
    /**
     * Returns the serialized encoding of the EIP-1559 transaction.
     *
     * Format: `0x02 || rlp([chainId, nonce, maxPriorityFeePerGas, maxFeePerGas, gasLimit, to, value, data,
     * accessList, signatureYParity, signatureR, signatureS])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */
    FeeMarketEIP1559Transaction.prototype.serialize = function () {
        var base = this.raw();
        return Buffer.concat([TRANSACTION_TYPE_BUFFER, ethereumjs_util_1.rlp.encode(base)]);
    };
    /**
     * Returns the serialized unsigned tx (hashed or raw), which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
     * ```
     *
     * @param hashMessage - Return hashed message if set to true (default: true)
     */
    FeeMarketEIP1559Transaction.prototype.getMessageToSign = function (hashMessage) {
        if (hashMessage === void 0) { hashMessage = true; }
        var base = this.raw().slice(0, 9);
        var message = Buffer.concat([TRANSACTION_TYPE_BUFFER, ethereumjs_util_1.rlp.encode(base)]);
        if (hashMessage) {
            return (0, ethereumjs_util_1.keccak256)(message);
        }
        else {
            return message;
        }
    };
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link FeeMarketEIP1559Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */
    FeeMarketEIP1559Transaction.prototype.hash = function () {
        if (!this.isSigned()) {
            var msg = this._errorMsg('Cannot call hash method if transaction is not signed');
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) {
                this.cache.hash = (0, ethereumjs_util_1.keccak256)(this.serialize());
            }
            return this.cache.hash;
        }
        return (0, ethereumjs_util_1.keccak256)(this.serialize());
    };
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */
    FeeMarketEIP1559Transaction.prototype.getMessageToVerifySignature = function () {
        return this.getMessageToSign();
    };
    /**
     * Returns the public key of the sender
     */
    FeeMarketEIP1559Transaction.prototype.getSenderPublicKey = function () {
        var _a;
        if (!this.isSigned()) {
            var msg = this._errorMsg('Cannot call this method if transaction is not signed');
            throw new Error(msg);
        }
        var msgHash = this.getMessageToVerifySignature();
        // EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.
        // Reasoning: https://ethereum.stackexchange.com/a/55728
        if (this.common.gteHardfork('homestead') && ((_a = this.s) === null || _a === void 0 ? void 0 : _a.gt(types_1.N_DIV_2))) {
            var msg = this._errorMsg('Invalid Signature: s-values greater than secp256k1n/2 are considered invalid');
            throw new Error(msg);
        }
        var _b = this, v = _b.v, r = _b.r, s = _b.s;
        try {
            return (0, ethereumjs_util_1.ecrecover)(msgHash, v.addn(27), // Recover the 27 which was stripped from ecsign
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(r), (0, ethereumjs_util_1.bnToUnpaddedBuffer)(s));
        }
        catch (e) {
            var msg = this._errorMsg('Invalid Signature');
            throw new Error(msg);
        }
    };
    FeeMarketEIP1559Transaction.prototype._processSignature = function (v, r, s) {
        var opts = {
            common: this.common,
        };
        return FeeMarketEIP1559Transaction.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            maxPriorityFeePerGas: this.maxPriorityFeePerGas,
            maxFeePerGas: this.maxFeePerGas,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: new ethereumjs_util_1.BN(v - 27),
            r: new ethereumjs_util_1.BN(r),
            s: new ethereumjs_util_1.BN(s),
        }, opts);
    };
    /**
     * Returns an object with the JSON representation of the transaction
     */
    FeeMarketEIP1559Transaction.prototype.toJSON = function () {
        var accessListJSON = util_1.AccessLists.getAccessListJSON(this.accessList);
        return {
            chainId: (0, ethereumjs_util_1.bnToHex)(this.chainId),
            nonce: (0, ethereumjs_util_1.bnToHex)(this.nonce),
            maxPriorityFeePerGas: (0, ethereumjs_util_1.bnToHex)(this.maxPriorityFeePerGas),
            maxFeePerGas: (0, ethereumjs_util_1.bnToHex)(this.maxFeePerGas),
            gasLimit: (0, ethereumjs_util_1.bnToHex)(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, ethereumjs_util_1.bnToHex)(this.value),
            data: '0x' + this.data.toString('hex'),
            accessList: accessListJSON,
            v: this.v !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.v) : undefined,
            r: this.r !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.r) : undefined,
            s: this.s !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.s) : undefined,
        };
    };
    /**
     * Return a compact error string representation of the object
     */
    FeeMarketEIP1559Transaction.prototype.errorStr = function () {
        var errorStr = this._getSharedErrorPostfix();
        errorStr += " maxFeePerGas=".concat(this.maxFeePerGas, " maxPriorityFeePerGas=").concat(this.maxPriorityFeePerGas);
        return errorStr;
    };
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */
    FeeMarketEIP1559Transaction.prototype._errorMsg = function (msg) {
        return "".concat(msg, " (").concat(this.errorStr(), ")");
    };
    return FeeMarketEIP1559Transaction;
}(baseTransaction_1.BaseTransaction));
exports["default"] = FeeMarketEIP1559Transaction;
//# sourceMappingURL=eip1559Transaction.js.map

/***/ }),

/***/ 88272:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ethereumjs_util_1 = __webpack_require__(5459);
var baseTransaction_1 = __webpack_require__(6303);
var types_1 = __webpack_require__(21965);
var util_1 = __webpack_require__(74436);
var TRANSACTION_TYPE = 1;
var TRANSACTION_TYPE_BUFFER = Buffer.from(TRANSACTION_TYPE.toString(16).padStart(2, '0'), 'hex');
/**
 * Typed transaction with optional access lists
 *
 * - TransactionType: 1
 * - EIP: [EIP-2930](https://eips.ethereum.org/EIPS/eip-2930)
 */
var AccessListEIP2930Transaction = /** @class */ (function (_super) {
    __extends(AccessListEIP2930Transaction, _super);
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    function AccessListEIP2930Transaction(txData, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = this;
        var _a, _b;
        _this = _super.call(this, __assign(__assign({}, txData), { type: TRANSACTION_TYPE })) || this;
        /**
         * The default HF if the tx type is active on that HF
         * or the first greater HF where the tx is active.
         *
         * @hidden
         */
        _this.DEFAULT_HARDFORK = 'berlin';
        var chainId = txData.chainId, accessList = txData.accessList, gasPrice = txData.gasPrice;
        _this.common = _this._getCommon(opts.common, chainId);
        _this.chainId = _this.common.chainIdBN();
        // EIP-2718 check is done in Common
        if (!_this.common.isActivatedEIP(2930)) {
            throw new Error('EIP-2930 not enabled on Common');
        }
        _this.activeCapabilities = _this.activeCapabilities.concat([2718, 2930]);
        // Populate the access list fields
        var accessListData = util_1.AccessLists.getAccessListData(accessList !== null && accessList !== void 0 ? accessList : []);
        _this.accessList = accessListData.accessList;
        _this.AccessListJSON = accessListData.AccessListJSON;
        // Verify the access list format.
        util_1.AccessLists.verifyAccessList(_this.accessList);
        _this.gasPrice = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(gasPrice === '' ? '0x' : gasPrice));
        _this._validateCannotExceedMaxInteger({
            gasPrice: _this.gasPrice,
        });
        if (_this.gasPrice.mul(_this.gasLimit).gt(ethereumjs_util_1.MAX_INTEGER)) {
            var msg = _this._errorMsg('gasLimit * gasPrice cannot exceed MAX_INTEGER');
            throw new Error(msg);
        }
        if (_this.v && !_this.v.eqn(0) && !_this.v.eqn(1)) {
            var msg = _this._errorMsg('The y-parity of the transaction should either be 0 or 1');
            throw new Error(msg);
        }
        if (_this.common.gteHardfork('homestead') && ((_a = _this.s) === null || _a === void 0 ? void 0 : _a.gt(types_1.N_DIV_2))) {
            var msg = _this._errorMsg('Invalid Signature: s-values greater than secp256k1n/2 are considered invalid');
            throw new Error(msg);
        }
        if (_this.common.isActivatedEIP(3860)) {
            (0, util_1.checkMaxInitCodeSize)(_this.common, _this.data.length);
        }
        var freeze = (_b = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _b !== void 0 ? _b : true;
        if (freeze) {
            Object.freeze(_this);
        }
        return _this;
    }
    Object.defineProperty(AccessListEIP2930Transaction.prototype, "senderR", {
        /**
         * EIP-2930 alias for `r`
         *
         * @deprecated use `r` instead
         */
        get: function () {
            return this.r;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessListEIP2930Transaction.prototype, "senderS", {
        /**
         * EIP-2930 alias for `s`
         *
         * @deprecated use `s` instead
         */
        get: function () {
            return this.s;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccessListEIP2930Transaction.prototype, "yParity", {
        /**
         * EIP-2930 alias for `v`
         *
         * @deprecated use `v` instead
         */
        get: function () {
            return this.v;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * v, r, s }
     *
     * Notes:
     * - `chainId` will be set automatically if not provided
     * - All parameters are optional and have some basic default values
     */
    AccessListEIP2930Transaction.fromTxData = function (txData, opts) {
        if (opts === void 0) { opts = {}; }
        return new AccessListEIP2930Transaction(txData, opts);
    };
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)])`
     */
    AccessListEIP2930Transaction.fromSerializedTx = function (serialized, opts) {
        if (opts === void 0) { opts = {}; }
        if (!serialized.slice(0, 1).equals(TRANSACTION_TYPE_BUFFER)) {
            throw new Error("Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ".concat(TRANSACTION_TYPE, ", received: ").concat(serialized
                .slice(0, 1)
                .toString('hex')));
        }
        var values = ethereumjs_util_1.rlp.decode(serialized.slice(1));
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized tx input: must be array');
        }
        return AccessListEIP2930Transaction.fromValuesArray(values, opts);
    };
    /**
     * Instantiate a transaction from the serialized tx.
     * (alias of {@link AccessListEIP2930Transaction.fromSerializedTx})
     *
     * Note: This means that the Buffer should start with 0x01.
     *
     * @deprecated this constructor alias is deprecated and will be removed
     * in favor of the {@link AccessListEIP2930Transaction.fromSerializedTx} constructor
     */
    AccessListEIP2930Transaction.fromRlpSerializedTx = function (serialized, opts) {
        if (opts === void 0) { opts = {}; }
        return AccessListEIP2930Transaction.fromSerializedTx(serialized, opts);
    };
    /**
     * Create a transaction from a values array.
     *
     * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)]`
     */
    AccessListEIP2930Transaction.fromValuesArray = function (values, opts) {
        if (opts === void 0) { opts = {}; }
        if (values.length !== 8 && values.length !== 11) {
            throw new Error('Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).');
        }
        var _a = __read(values, 11), chainId = _a[0], nonce = _a[1], gasPrice = _a[2], gasLimit = _a[3], to = _a[4], value = _a[5], data = _a[6], accessList = _a[7], v = _a[8], r = _a[9], s = _a[10];
        (0, ethereumjs_util_1.validateNoLeadingZeroes)({ nonce: nonce, gasPrice: gasPrice, gasLimit: gasLimit, value: value, v: v, r: r, s: s });
        var emptyAccessList = [];
        return new AccessListEIP2930Transaction({
            chainId: new ethereumjs_util_1.BN(chainId),
            nonce: nonce,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            to: to,
            value: value,
            data: data,
            accessList: accessList !== null && accessList !== void 0 ? accessList : emptyAccessList,
            v: v !== undefined ? new ethereumjs_util_1.BN(v) : undefined,
            r: r,
            s: s,
        }, opts);
    };
    /**
     * The amount of gas paid for the data in this tx
     */
    AccessListEIP2930Transaction.prototype.getDataFee = function () {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
            return this.cache.dataFee.value;
        }
        var cost = _super.prototype.getDataFee.call(this);
        cost.iaddn(util_1.AccessLists.getDataFeeEIP2930(this.accessList, this.common));
        if (Object.isFrozen(this)) {
            this.cache.dataFee = {
                value: cost,
                hardfork: this.common.hardfork(),
            };
        }
        return cost;
    };
    /**
     * The up front amount that an account must have for this transaction to be valid
     */
    AccessListEIP2930Transaction.prototype.getUpfrontCost = function () {
        return this.gasLimit.mul(this.gasPrice).add(this.value);
    };
    /**
     * Returns a Buffer Array of the raw Buffers of the EIP-2930 transaction, in order.
     *
     * Format: `[chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)]`
     *
     * Use {@link AccessListEIP2930Transaction.serialize} to add a transaction to a block
     * with {@link Block.fromValuesArray}.
     *
     * For an unsigned tx this method uses the empty Buffer values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link AccessListEIP2930Transaction.getMessageToSign}.
     */
    AccessListEIP2930Transaction.prototype.raw = function () {
        return [
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.chainId),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.nonce),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasPrice),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.value),
            this.data,
            this.accessList,
            this.v !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.v) : Buffer.from([]),
            this.r !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.r) : Buffer.from([]),
            this.s !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.s) : Buffer.from([]),
        ];
    };
    /**
     * Returns the serialized encoding of the EIP-2930 transaction.
     *
     * Format: `0x01 || rlp([chainId, nonce, gasPrice, gasLimit, to, value, data, accessList,
     * signatureYParity (v), signatureR (r), signatureS (s)])`
     *
     * Note that in contrast to the legacy tx serialization format this is not
     * valid RLP any more due to the raw tx type preceding and concatenated to
     * the RLP encoding of the values.
     */
    AccessListEIP2930Transaction.prototype.serialize = function () {
        var base = this.raw();
        return Buffer.concat([TRANSACTION_TYPE_BUFFER, ethereumjs_util_1.rlp.encode(base)]);
    };
    /**
     * Returns the serialized unsigned tx (hashed or raw), which can be used
     * to sign the transaction (e.g. for sending to a hardware wallet).
     *
     * Note: in contrast to the legacy tx the raw message format is already
     * serialized and doesn't need to be RLP encoded any more.
     *
     * ```javascript
     * const serializedMessage = tx.getMessageToSign(false) // use this for the HW wallet input
     * ```
     *
     * @param hashMessage - Return hashed message if set to true (default: true)
     */
    AccessListEIP2930Transaction.prototype.getMessageToSign = function (hashMessage) {
        if (hashMessage === void 0) { hashMessage = true; }
        var base = this.raw().slice(0, 8);
        var message = Buffer.concat([TRANSACTION_TYPE_BUFFER, ethereumjs_util_1.rlp.encode(base)]);
        if (hashMessage) {
            return (0, ethereumjs_util_1.keccak256)(message);
        }
        else {
            return message;
        }
    };
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link AccessListEIP2930Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */
    AccessListEIP2930Transaction.prototype.hash = function () {
        if (!this.isSigned()) {
            var msg = this._errorMsg('Cannot call hash method if transaction is not signed');
            throw new Error(msg);
        }
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) {
                this.cache.hash = (0, ethereumjs_util_1.keccak256)(this.serialize());
            }
            return this.cache.hash;
        }
        return (0, ethereumjs_util_1.keccak256)(this.serialize());
    };
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */
    AccessListEIP2930Transaction.prototype.getMessageToVerifySignature = function () {
        return this.getMessageToSign();
    };
    /**
     * Returns the public key of the sender
     */
    AccessListEIP2930Transaction.prototype.getSenderPublicKey = function () {
        var _a;
        if (!this.isSigned()) {
            var msg = this._errorMsg('Cannot call this method if transaction is not signed');
            throw new Error(msg);
        }
        var msgHash = this.getMessageToVerifySignature();
        // EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.
        // Reasoning: https://ethereum.stackexchange.com/a/55728
        if (this.common.gteHardfork('homestead') && ((_a = this.s) === null || _a === void 0 ? void 0 : _a.gt(types_1.N_DIV_2))) {
            var msg = this._errorMsg('Invalid Signature: s-values greater than secp256k1n/2 are considered invalid');
            throw new Error(msg);
        }
        var _b = this, yParity = _b.yParity, r = _b.r, s = _b.s;
        try {
            return (0, ethereumjs_util_1.ecrecover)(msgHash, yParity.addn(27), // Recover the 27 which was stripped from ecsign
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(r), (0, ethereumjs_util_1.bnToUnpaddedBuffer)(s));
        }
        catch (e) {
            var msg = this._errorMsg('Invalid Signature');
            throw new Error(msg);
        }
    };
    AccessListEIP2930Transaction.prototype._processSignature = function (v, r, s) {
        var opts = {
            common: this.common,
        };
        return AccessListEIP2930Transaction.fromTxData({
            chainId: this.chainId,
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            accessList: this.accessList,
            v: new ethereumjs_util_1.BN(v - 27),
            r: new ethereumjs_util_1.BN(r),
            s: new ethereumjs_util_1.BN(s),
        }, opts);
    };
    /**
     * Returns an object with the JSON representation of the transaction
     */
    AccessListEIP2930Transaction.prototype.toJSON = function () {
        var accessListJSON = util_1.AccessLists.getAccessListJSON(this.accessList);
        return {
            chainId: (0, ethereumjs_util_1.bnToHex)(this.chainId),
            nonce: (0, ethereumjs_util_1.bnToHex)(this.nonce),
            gasPrice: (0, ethereumjs_util_1.bnToHex)(this.gasPrice),
            gasLimit: (0, ethereumjs_util_1.bnToHex)(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, ethereumjs_util_1.bnToHex)(this.value),
            data: '0x' + this.data.toString('hex'),
            accessList: accessListJSON,
            v: this.v !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.v) : undefined,
            r: this.r !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.r) : undefined,
            s: this.s !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.s) : undefined,
        };
    };
    /**
     * Return a compact error string representation of the object
     */
    AccessListEIP2930Transaction.prototype.errorStr = function () {
        var _a, _b;
        var errorStr = this._getSharedErrorPostfix();
        // Keep ? for this.accessList since this otherwise causes Hardhat E2E tests to fail
        errorStr += " gasPrice=".concat(this.gasPrice, " accessListCount=").concat((_b = (_a = this.accessList) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0);
        return errorStr;
    };
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */
    AccessListEIP2930Transaction.prototype._errorMsg = function (msg) {
        return "".concat(msg, " (").concat(this.errorStr(), ")");
    };
    return AccessListEIP2930Transaction;
}(baseTransaction_1.BaseTransaction));
exports["default"] = AccessListEIP2930Transaction;
//# sourceMappingURL=eip2930Transaction.js.map

/***/ }),

/***/ 91115:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FeeMarketEIP1559Transaction = exports.TransactionFactory = exports.AccessListEIP2930Transaction = exports.Transaction = void 0;
var legacyTransaction_1 = __webpack_require__(57515);
Object.defineProperty(exports, "Transaction", ({ enumerable: true, get: function () { return __importDefault(legacyTransaction_1).default; } }));
var eip2930Transaction_1 = __webpack_require__(88272);
Object.defineProperty(exports, "AccessListEIP2930Transaction", ({ enumerable: true, get: function () { return __importDefault(eip2930Transaction_1).default; } }));
var transactionFactory_1 = __webpack_require__(40266);
Object.defineProperty(exports, "TransactionFactory", ({ enumerable: true, get: function () { return __importDefault(transactionFactory_1).default; } }));
var eip1559Transaction_1 = __webpack_require__(94619);
Object.defineProperty(exports, "FeeMarketEIP1559Transaction", ({ enumerable: true, get: function () { return __importDefault(eip1559Transaction_1).default; } }));
__exportStar(__webpack_require__(21965), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 57515:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ethereumjs_util_1 = __webpack_require__(5459);
var types_1 = __webpack_require__(21965);
var baseTransaction_1 = __webpack_require__(6303);
var util_1 = __webpack_require__(74436);
var TRANSACTION_TYPE = 0;
/**
 * An Ethereum non-typed (legacy) transaction
 */
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    /**
     * This constructor takes the values, validates them, assigns them and freezes the object.
     *
     * It is not recommended to use this constructor directly. Instead use
     * the static factory methods to assist in creating a Transaction object from
     * varying data types.
     */
    function Transaction(txData, opts) {
        if (opts === void 0) { opts = {}; }
        var _this = this;
        var _a;
        _this = _super.call(this, __assign(__assign({}, txData), { type: TRANSACTION_TYPE })) || this;
        _this.common = _this._validateTxV(_this.v, opts.common);
        _this.gasPrice = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(txData.gasPrice === '' ? '0x' : txData.gasPrice));
        if (_this.gasPrice.mul(_this.gasLimit).gt(ethereumjs_util_1.MAX_INTEGER)) {
            var msg = _this._errorMsg('gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)');
            throw new Error(msg);
        }
        _this._validateCannotExceedMaxInteger({ gasPrice: _this.gasPrice });
        if (_this.common.gteHardfork('spuriousDragon')) {
            if (!_this.isSigned()) {
                _this.activeCapabilities.push(types_1.Capability.EIP155ReplayProtection);
            }
            else {
                // EIP155 spec:
                // If block.number >= 2,675,000 and v = CHAIN_ID * 2 + 35 or v = CHAIN_ID * 2 + 36
                // then when computing the hash of a transaction for purposes of signing or recovering
                // instead of hashing only the first six elements (i.e. nonce, gasprice, startgas, to, value, data)
                // hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0.
                var v = _this.v;
                var chainIdDoubled = _this.common.chainIdBN().muln(2);
                // v and chain ID meet EIP-155 conditions
                if (v.eq(chainIdDoubled.addn(35)) || v.eq(chainIdDoubled.addn(36))) {
                    _this.activeCapabilities.push(types_1.Capability.EIP155ReplayProtection);
                }
            }
        }
        if (_this.common.isActivatedEIP(3860)) {
            (0, util_1.checkMaxInitCodeSize)(_this.common, _this.data.length);
        }
        var freeze = (_a = opts === null || opts === void 0 ? void 0 : opts.freeze) !== null && _a !== void 0 ? _a : true;
        if (freeze) {
            Object.freeze(_this);
        }
        return _this;
    }
    /**
     * Instantiate a transaction from a data dictionary.
     *
     * Format: { nonce, gasPrice, gasLimit, to, value, data, v, r, s }
     *
     * Notes:
     * - All parameters are optional and have some basic default values
     */
    Transaction.fromTxData = function (txData, opts) {
        if (opts === void 0) { opts = {}; }
        return new Transaction(txData, opts);
    };
    /**
     * Instantiate a transaction from the serialized tx.
     *
     * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
     */
    Transaction.fromSerializedTx = function (serialized, opts) {
        if (opts === void 0) { opts = {}; }
        var values = ethereumjs_util_1.rlp.decode(serialized);
        if (!Array.isArray(values)) {
            throw new Error('Invalid serialized tx input. Must be array');
        }
        return this.fromValuesArray(values, opts);
    };
    /**
     * Instantiate a transaction from the serialized tx.
     * (alias of {@link Transaction.fromSerializedTx})
     *
     * @deprecated this constructor alias is deprecated and will be removed
     * in favor of the {@link Transaction.fromSerializedTx} constructor
     */
    Transaction.fromRlpSerializedTx = function (serialized, opts) {
        if (opts === void 0) { opts = {}; }
        return Transaction.fromSerializedTx(serialized, opts);
    };
    /**
     * Create a transaction from a values array.
     *
     * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
     */
    Transaction.fromValuesArray = function (values, opts) {
        if (opts === void 0) { opts = {}; }
        // If length is not 6, it has length 9. If v/r/s are empty Buffers, it is still an unsigned transaction
        // This happens if you get the RLP data from `raw()`
        if (values.length !== 6 && values.length !== 9) {
            throw new Error('Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).');
        }
        var _a = __read(values, 9), nonce = _a[0], gasPrice = _a[1], gasLimit = _a[2], to = _a[3], value = _a[4], data = _a[5], v = _a[6], r = _a[7], s = _a[8];
        (0, ethereumjs_util_1.validateNoLeadingZeroes)({ nonce: nonce, gasPrice: gasPrice, gasLimit: gasLimit, value: value, v: v, r: r, s: s });
        return new Transaction({
            nonce: nonce,
            gasPrice: gasPrice,
            gasLimit: gasLimit,
            to: to,
            value: value,
            data: data,
            v: v,
            r: r,
            s: s,
        }, opts);
    };
    /**
     * Returns a Buffer Array of the raw Buffers of the legacy transaction, in order.
     *
     * Format: `[nonce, gasPrice, gasLimit, to, value, data, v, r, s]`
     *
     * For legacy txs this is also the correct format to add transactions
     * to a block with {@link Block.fromValuesArray} (use the `serialize()` method
     * for typed txs).
     *
     * For an unsigned tx this method returns the empty Buffer values
     * for the signature parameters `v`, `r` and `s`. For an EIP-155 compliant
     * representation have a look at {@link Transaction.getMessageToSign}.
     */
    Transaction.prototype.raw = function () {
        return [
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.nonce),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasPrice),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.value),
            this.data,
            this.v !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.v) : Buffer.from([]),
            this.r !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.r) : Buffer.from([]),
            this.s !== undefined ? (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.s) : Buffer.from([]),
        ];
    };
    /**
     * Returns the serialized encoding of the legacy transaction.
     *
     * Format: `rlp([nonce, gasPrice, gasLimit, to, value, data, v, r, s])`
     *
     * For an unsigned tx this method uses the empty Buffer values for the
     * signature parameters `v`, `r` and `s` for encoding. For an EIP-155 compliant
     * representation for external signing use {@link Transaction.getMessageToSign}.
     */
    Transaction.prototype.serialize = function () {
        return ethereumjs_util_1.rlp.encode(this.raw());
    };
    Transaction.prototype._getMessageToSign = function () {
        var values = [
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.nonce),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasPrice),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.gasLimit),
            this.to !== undefined ? this.to.buf : Buffer.from([]),
            (0, ethereumjs_util_1.bnToUnpaddedBuffer)(this.value),
            this.data,
        ];
        if (this.supports(types_1.Capability.EIP155ReplayProtection)) {
            values.push((0, ethereumjs_util_1.toBuffer)(this.common.chainIdBN()));
            values.push((0, ethereumjs_util_1.unpadBuffer)((0, ethereumjs_util_1.toBuffer)(0)));
            values.push((0, ethereumjs_util_1.unpadBuffer)((0, ethereumjs_util_1.toBuffer)(0)));
        }
        return values;
    };
    Transaction.prototype.getMessageToSign = function (hashMessage) {
        if (hashMessage === void 0) { hashMessage = true; }
        var message = this._getMessageToSign();
        if (hashMessage) {
            return (0, ethereumjs_util_1.rlphash)(message);
        }
        else {
            return message;
        }
    };
    /**
     * The amount of gas paid for the data in this tx
     */
    Transaction.prototype.getDataFee = function () {
        if (this.cache.dataFee && this.cache.dataFee.hardfork === this.common.hardfork()) {
            return this.cache.dataFee.value;
        }
        if (Object.isFrozen(this)) {
            this.cache.dataFee = {
                value: _super.prototype.getDataFee.call(this),
                hardfork: this.common.hardfork(),
            };
        }
        return _super.prototype.getDataFee.call(this);
    };
    /**
     * The up front amount that an account must have for this transaction to be valid
     */
    Transaction.prototype.getUpfrontCost = function () {
        return this.gasLimit.mul(this.gasPrice).add(this.value);
    };
    /**
     * Computes a sha3-256 hash of the serialized tx.
     *
     * This method can only be used for signed txs (it throws otherwise).
     * Use {@link Transaction.getMessageToSign} to get a tx hash for the purpose of signing.
     */
    Transaction.prototype.hash = function () {
        // In contrast to the tx type transaction implementations the `hash()` function
        // for the legacy tx does not throw if the tx is not signed.
        // This has been considered for inclusion but lead to unexpected backwards
        // compatibility problems (no concrete reference found, needs validation).
        //
        // For context see also https://github.com/ethereumjs/ethereumjs-monorepo/pull/1445,
        // September, 2021 as well as work done before.
        //
        // This should be updated along the next major version release by adding:
        //
        //if (!this.isSigned()) {
        //  const msg = this._errorMsg('Cannot call hash method if transaction is not signed')
        //  throw new Error(msg)
        //}
        if (Object.isFrozen(this)) {
            if (!this.cache.hash) {
                this.cache.hash = (0, ethereumjs_util_1.rlphash)(this.raw());
            }
            return this.cache.hash;
        }
        return (0, ethereumjs_util_1.rlphash)(this.raw());
    };
    /**
     * Computes a sha3-256 hash which can be used to verify the signature
     */
    Transaction.prototype.getMessageToVerifySignature = function () {
        if (!this.isSigned()) {
            var msg = this._errorMsg('This transaction is not signed');
            throw new Error(msg);
        }
        var message = this._getMessageToSign();
        return (0, ethereumjs_util_1.rlphash)(message);
    };
    /**
     * Returns the public key of the sender
     */
    Transaction.prototype.getSenderPublicKey = function () {
        var _a;
        var msgHash = this.getMessageToVerifySignature();
        // EIP-2: All transaction signatures whose s-value is greater than secp256k1n/2 are considered invalid.
        // Reasoning: https://ethereum.stackexchange.com/a/55728
        if (this.common.gteHardfork('homestead') && ((_a = this.s) === null || _a === void 0 ? void 0 : _a.gt(types_1.N_DIV_2))) {
            var msg = this._errorMsg('Invalid Signature: s-values greater than secp256k1n/2 are considered invalid');
            throw new Error(msg);
        }
        var _b = this, v = _b.v, r = _b.r, s = _b.s;
        try {
            return (0, ethereumjs_util_1.ecrecover)(msgHash, v, (0, ethereumjs_util_1.bnToUnpaddedBuffer)(r), (0, ethereumjs_util_1.bnToUnpaddedBuffer)(s), this.supports(types_1.Capability.EIP155ReplayProtection) ? this.common.chainIdBN() : undefined);
        }
        catch (e) {
            var msg = this._errorMsg('Invalid Signature');
            throw new Error(msg);
        }
    };
    /**
     * Process the v, r, s values from the `sign` method of the base transaction.
     */
    Transaction.prototype._processSignature = function (v, r, s) {
        var vBN = new ethereumjs_util_1.BN(v);
        if (this.supports(types_1.Capability.EIP155ReplayProtection)) {
            vBN.iadd(this.common.chainIdBN().muln(2).addn(8));
        }
        var opts = {
            common: this.common,
        };
        return Transaction.fromTxData({
            nonce: this.nonce,
            gasPrice: this.gasPrice,
            gasLimit: this.gasLimit,
            to: this.to,
            value: this.value,
            data: this.data,
            v: vBN,
            r: new ethereumjs_util_1.BN(r),
            s: new ethereumjs_util_1.BN(s),
        }, opts);
    };
    /**
     * Returns an object with the JSON representation of the transaction.
     */
    Transaction.prototype.toJSON = function () {
        return {
            nonce: (0, ethereumjs_util_1.bnToHex)(this.nonce),
            gasPrice: (0, ethereumjs_util_1.bnToHex)(this.gasPrice),
            gasLimit: (0, ethereumjs_util_1.bnToHex)(this.gasLimit),
            to: this.to !== undefined ? this.to.toString() : undefined,
            value: (0, ethereumjs_util_1.bnToHex)(this.value),
            data: '0x' + this.data.toString('hex'),
            v: this.v !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.v) : undefined,
            r: this.r !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.r) : undefined,
            s: this.s !== undefined ? (0, ethereumjs_util_1.bnToHex)(this.s) : undefined,
        };
    };
    /**
     * Validates tx's `v` value
     */
    Transaction.prototype._validateTxV = function (v, common) {
        var chainIdBN;
        // No unsigned tx and EIP-155 activated and chain ID included
        if (v !== undefined &&
            !v.eqn(0) &&
            (!common || common.gteHardfork('spuriousDragon')) &&
            !v.eqn(27) &&
            !v.eqn(28)) {
            if (common) {
                var chainIdDoubled = common.chainIdBN().muln(2);
                var isValidEIP155V = v.eq(chainIdDoubled.addn(35)) || v.eq(chainIdDoubled.addn(36));
                if (!isValidEIP155V) {
                    throw new Error("Incompatible EIP155-based V ".concat(v, " and chain id ").concat(common.chainIdBN(), ". See the Common parameter of the Transaction constructor to set the chain id."));
                }
            }
            else {
                // Derive the original chain ID
                var numSub = void 0;
                if (v.subn(35).isEven()) {
                    numSub = 35;
                }
                else {
                    numSub = 36;
                }
                // Use derived chain ID to create a proper Common
                chainIdBN = v.subn(numSub).divn(2);
            }
        }
        return this._getCommon(common, chainIdBN);
    };
    /**
     * @deprecated if you have called this internal method please use `tx.supports(Capabilities.EIP155ReplayProtection)` instead
     */
    Transaction.prototype._unsignedTxImplementsEIP155 = function () {
        return this.common.gteHardfork('spuriousDragon');
    };
    /**
     * @deprecated if you have called this internal method please use `tx.supports(Capabilities.EIP155ReplayProtection)` instead
     */
    Transaction.prototype._signedTxImplementsEIP155 = function () {
        if (!this.isSigned()) {
            var msg = this._errorMsg('This transaction is not signed');
            throw new Error(msg);
        }
        var onEIP155BlockOrLater = this.common.gteHardfork('spuriousDragon');
        // EIP155 spec:
        // If block.number >= 2,675,000 and v = CHAIN_ID * 2 + 35 or v = CHAIN_ID * 2 + 36, then when computing the hash of a transaction for purposes of signing or recovering, instead of hashing only the first six elements (i.e. nonce, gasprice, startgas, to, value, data), hash nine elements, with v replaced by CHAIN_ID, r = 0 and s = 0.
        var v = this.v;
        var chainIdDoubled = this.common.chainIdBN().muln(2);
        var vAndChainIdMeetEIP155Conditions = v.eq(chainIdDoubled.addn(35)) || v.eq(chainIdDoubled.addn(36));
        return vAndChainIdMeetEIP155Conditions && onEIP155BlockOrLater;
    };
    /**
     * Return a compact error string representation of the object
     */
    Transaction.prototype.errorStr = function () {
        var errorStr = this._getSharedErrorPostfix();
        errorStr += " gasPrice=".concat(this.gasPrice);
        return errorStr;
    };
    /**
     * Internal helper function to create an annotated error message
     *
     * @param msg Base error message
     * @hidden
     */
    Transaction.prototype._errorMsg = function (msg) {
        return "".concat(msg, " (").concat(this.errorStr(), ")");
    };
    return Transaction;
}(baseTransaction_1.BaseTransaction));
exports["default"] = Transaction;
//# sourceMappingURL=legacyTransaction.js.map

/***/ }),

/***/ 40266:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
var ethereumjs_util_1 = __webpack_require__(5459);
var _1 = __webpack_require__(91115);
var TransactionFactory = /** @class */ (function () {
    // It is not possible to instantiate a TransactionFactory object.
    function TransactionFactory() {
    }
    /**
     * Create a transaction from a `txData` object
     *
     * @param txData - The transaction data. The `type` field will determine which transaction type is returned (if undefined, creates a legacy transaction)
     * @param txOptions - Options to pass on to the constructor of the transaction
     */
    TransactionFactory.fromTxData = function (txData, txOptions) {
        if (txOptions === void 0) { txOptions = {}; }
        if (!('type' in txData) || txData.type === undefined) {
            // Assume legacy transaction
            return _1.Transaction.fromTxData(txData, txOptions);
        }
        else {
            var txType = new ethereumjs_util_1.BN((0, ethereumjs_util_1.toBuffer)(txData.type)).toNumber();
            if (txType === 0) {
                return _1.Transaction.fromTxData(txData, txOptions);
            }
            else if (txType === 1) {
                return _1.AccessListEIP2930Transaction.fromTxData(txData, txOptions);
            }
            else if (txType === 2) {
                return _1.FeeMarketEIP1559Transaction.fromTxData(txData, txOptions);
            }
            else {
                throw new Error("Tx instantiation with type ".concat(txType, " not supported"));
            }
        }
    };
    /**
     * This method tries to decode serialized data.
     *
     * @param data - The data Buffer
     * @param txOptions - The transaction options
     */
    TransactionFactory.fromSerializedData = function (data, txOptions) {
        if (txOptions === void 0) { txOptions = {}; }
        if (data[0] <= 0x7f) {
            // Determine the type.
            var EIP = void 0;
            switch (data[0]) {
                case 1:
                    EIP = 2930;
                    break;
                case 2:
                    EIP = 1559;
                    break;
                default:
                    throw new Error("TypedTransaction with ID ".concat(data[0], " unknown"));
            }
            if (EIP === 1559) {
                return _1.FeeMarketEIP1559Transaction.fromSerializedTx(data, txOptions);
            }
            else {
                // EIP === 2930
                return _1.AccessListEIP2930Transaction.fromSerializedTx(data, txOptions);
            }
        }
        else {
            return _1.Transaction.fromSerializedTx(data, txOptions);
        }
    };
    /**
     * When decoding a BlockBody, in the transactions field, a field is either:
     * A Buffer (a TypedTransaction - encoded as TransactionType || rlp(TransactionPayload))
     * A Buffer[] (Legacy Transaction)
     * This method returns the right transaction.
     *
     * @param data - A Buffer or Buffer[]
     * @param txOptions - The transaction options
     */
    TransactionFactory.fromBlockBodyData = function (data, txOptions) {
        if (txOptions === void 0) { txOptions = {}; }
        if (Buffer.isBuffer(data)) {
            return this.fromSerializedData(data, txOptions);
        }
        else if (Array.isArray(data)) {
            // It is a legacy transaction
            return _1.Transaction.fromValuesArray(data, txOptions);
        }
        else {
            throw new Error('Cannot decode transaction: unknown type input');
        }
    };
    /**
     * This helper method allows one to retrieve the class which matches the transactionID
     * If transactionID is undefined, returns the legacy transaction class.
     * @deprecated - This method is deprecated and will be removed on the next major release
     * @param transactionID
     * @param _common - This option is not used
     */
    TransactionFactory.getTransactionClass = function (transactionID, _common) {
        if (transactionID === void 0) { transactionID = 0; }
        var legacyTxn = transactionID == 0 || (transactionID >= 0x80 && transactionID <= 0xff);
        if (legacyTxn) {
            return _1.Transaction;
        }
        switch (transactionID) {
            case 1:
                return _1.AccessListEIP2930Transaction;
            case 2:
                return _1.FeeMarketEIP1559Transaction;
            default:
                throw new Error("TypedTransaction with ID ".concat(transactionID, " unknown"));
        }
    };
    return TransactionFactory;
}());
exports["default"] = TransactionFactory;
//# sourceMappingURL=transactionFactory.js.map

/***/ }),

/***/ 21965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.N_DIV_2 = exports.isAccessList = exports.isAccessListBuffer = exports.Capability = void 0;
var ethereumjs_util_1 = __webpack_require__(5459);
/**
 * Can be used in conjunction with {@link Transaction.supports}
 * to query on tx capabilities
 */
var Capability;
(function (Capability) {
    /**
     * Tx supports EIP-155 replay protection
     * See: [155](https://eips.ethereum.org/EIPS/eip-155) Replay Attack Protection EIP
     */
    Capability[Capability["EIP155ReplayProtection"] = 155] = "EIP155ReplayProtection";
    /**
     * Tx supports EIP-1559 gas fee market mechansim
     * See: [1559](https://eips.ethereum.org/EIPS/eip-1559) Fee Market EIP
     */
    Capability[Capability["EIP1559FeeMarket"] = 1559] = "EIP1559FeeMarket";
    /**
     * Tx is a typed transaction as defined in EIP-2718
     * See: [2718](https://eips.ethereum.org/EIPS/eip-2718) Transaction Type EIP
     */
    Capability[Capability["EIP2718TypedTransaction"] = 2718] = "EIP2718TypedTransaction";
    /**
     * Tx supports access list generation as defined in EIP-2930
     * See: [2930](https://eips.ethereum.org/EIPS/eip-2930) Access Lists EIP
     */
    Capability[Capability["EIP2930AccessLists"] = 2930] = "EIP2930AccessLists";
})(Capability = exports.Capability || (exports.Capability = {}));
function isAccessListBuffer(input) {
    if (input.length === 0) {
        return true;
    }
    var firstItem = input[0];
    if (Array.isArray(firstItem)) {
        return true;
    }
    return false;
}
exports.isAccessListBuffer = isAccessListBuffer;
function isAccessList(input) {
    return !isAccessListBuffer(input); // This is exactly the same method, except the output is negated.
}
exports.isAccessList = isAccessList;
/**
 * A const defining secp256k1n/2
 */
exports.N_DIV_2 = new ethereumjs_util_1.BN('7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0', 16);
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 74436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessLists = exports.checkMaxInitCodeSize = void 0;
var ethereumjs_util_1 = __webpack_require__(5459);
var types_1 = __webpack_require__(21965);
function checkMaxInitCodeSize(common, length) {
    if (length > common.param('vm', 'maxInitCodeSize')) {
        throw new Error("the initcode size of this transaction is too large: it is ".concat(length, " while the max is ").concat(common.param('vm', 'maxInitCodeSize')));
    }
}
exports.checkMaxInitCodeSize = checkMaxInitCodeSize;
var AccessLists = /** @class */ (function () {
    function AccessLists() {
    }
    AccessLists.getAccessListData = function (accessList) {
        var AccessListJSON;
        var bufferAccessList;
        if (accessList && (0, types_1.isAccessList)(accessList)) {
            AccessListJSON = accessList;
            var newAccessList = [];
            for (var i = 0; i < accessList.length; i++) {
                var item = accessList[i];
                var addressBuffer = (0, ethereumjs_util_1.toBuffer)(item.address);
                var storageItems = [];
                for (var index = 0; index < item.storageKeys.length; index++) {
                    storageItems.push((0, ethereumjs_util_1.toBuffer)(item.storageKeys[index]));
                }
                newAccessList.push([addressBuffer, storageItems]);
            }
            bufferAccessList = newAccessList;
        }
        else {
            bufferAccessList = accessList !== null && accessList !== void 0 ? accessList : [];
            // build the JSON
            var json = [];
            for (var i = 0; i < bufferAccessList.length; i++) {
                var data = bufferAccessList[i];
                var address = (0, ethereumjs_util_1.bufferToHex)(data[0]);
                var storageKeys = [];
                for (var item = 0; item < data[1].length; item++) {
                    storageKeys.push((0, ethereumjs_util_1.bufferToHex)(data[1][item]));
                }
                var jsonItem = {
                    address: address,
                    storageKeys: storageKeys,
                };
                json.push(jsonItem);
            }
            AccessListJSON = json;
        }
        return {
            AccessListJSON: AccessListJSON,
            accessList: bufferAccessList,
        };
    };
    AccessLists.verifyAccessList = function (accessList) {
        for (var key = 0; key < accessList.length; key++) {
            var accessListItem = accessList[key];
            var address = accessListItem[0];
            var storageSlots = accessListItem[1];
            if (accessListItem[2] !== undefined) {
                throw new Error('Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.');
            }
            if (address.length != 20) {
                throw new Error('Invalid EIP-2930 transaction: address length should be 20 bytes');
            }
            for (var storageSlot = 0; storageSlot < storageSlots.length; storageSlot++) {
                if (storageSlots[storageSlot].length != 32) {
                    throw new Error('Invalid EIP-2930 transaction: storage slot length should be 32 bytes');
                }
            }
        }
    };
    AccessLists.getAccessListJSON = function (accessList) {
        var accessListJSON = [];
        for (var index = 0; index < accessList.length; index++) {
            var item = accessList[index];
            var JSONItem = {
                address: '0x' + (0, ethereumjs_util_1.setLengthLeft)(item[0], 20).toString('hex'),
                storageKeys: [],
            };
            var storageSlots = item[1];
            for (var slot = 0; slot < storageSlots.length; slot++) {
                var storageSlot = storageSlots[slot];
                JSONItem.storageKeys.push('0x' + (0, ethereumjs_util_1.setLengthLeft)(storageSlot, 32).toString('hex'));
            }
            accessListJSON.push(JSONItem);
        }
        return accessListJSON;
    };
    AccessLists.getDataFeeEIP2930 = function (accessList, common) {
        var accessListStorageKeyCost = common.param('gasPrices', 'accessListStorageKeyCost');
        var accessListAddressCost = common.param('gasPrices', 'accessListAddressCost');
        var slots = 0;
        for (var index = 0; index < accessList.length; index++) {
            var item = accessList[index];
            var storageSlots = item[1];
            slots += storageSlots.length;
        }
        var addresses = accessList.length;
        return addresses * accessListAddressCost + slots * accessListStorageKeyCost;
    };
    return AccessLists;
}());
exports.AccessLists = AccessLists;
//# sourceMappingURL=util.js.map

/***/ })

}]);