"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[4520],{

/***/ 40202:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Program = void 0;
const web3_js_1 = __webpack_require__(29948);
const accounts_1 = __webpack_require__(57020);
const buffer_1 = __webpack_require__(15313);
class Program {
    static findProgramAddress(seeds) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield web3_js_1.PublicKey.findProgramAddress(seeds, this.PUBKEY))[0];
        });
    }
    static getProgramAccounts(connection, configOrCommitment) {
        return __awaiter(this, void 0, void 0, function* () {
            const extra = {};
            let commitment;
            if (configOrCommitment) {
                if (typeof configOrCommitment === 'string') {
                    commitment = configOrCommitment;
                }
                else {
                    commitment = configOrCommitment.commitment;
                    if (configOrCommitment.dataSlice) {
                        extra.dataSlice = configOrCommitment.dataSlice;
                    }
                    if (configOrCommitment.filters) {
                        extra.filters = configOrCommitment.filters;
                    }
                }
            }
            const args = connection._buildArgs([this.PUBKEY.toBase58()], commitment, 'base64', extra);
            const unsafeRes = yield connection._rpcRequest('getProgramAccounts', args);
            return unsafeRes.result
                .map(({ account: { data, executable, lamports, owner }, pubkey }) => ({
                account: {
                    data: buffer_1.Buffer.from(data[0], 'base64'),
                    executable,
                    lamports,
                    owner: new web3_js_1.PublicKey(owner),
                },
                pubkey: new web3_js_1.PublicKey(pubkey),
            }))
                .map(({ pubkey, account }) => new accounts_1.Account(pubkey, account));
        });
    }
}
exports.Program = Program;
//# sourceMappingURL=Program.js.map

/***/ }),

/***/ 68031:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Transaction = void 0;
const web3_js_1 = __webpack_require__(29948);
class Transaction extends web3_js_1.Transaction {
    constructor(options) {
        super(options);
    }
    static fromCombined(transactions, options = {}) {
        const combinedTransaction = new Transaction(options);
        transactions.forEach((transaction) => transaction.instructions.forEach((instruction) => {
            combinedTransaction.add(instruction);
        }));
        return combinedTransaction;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=Transaction.js.map

/***/ }),

/***/ 61660:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Account = void 0;
const web3_js_1 = __webpack_require__(29948);
const buffer_1 = __webpack_require__(15313);
const errors_1 = __webpack_require__(47790);
class Account {
    constructor(pubkey, info) {
        this.pubkey = new web3_js_1.PublicKey(pubkey);
        this.info = info;
    }
    static from(account) {
        return new this(account.pubkey, account.info);
    }
    static load(connection, pubkey) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield Account.getInfo(connection, pubkey);
            return new this(pubkey, info);
        });
    }
    static isCompatible(_data) {
        throw new Error(`method 'isCompatible' is not implemented`);
    }
    static getInfo(connection, pubkey) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield connection.getAccountInfo(new web3_js_1.PublicKey(pubkey));
            if (!info) {
                throw (0, errors_1.ERROR_ACCOUNT_NOT_FOUND)(pubkey);
            }
            return Object.assign(Object.assign({}, info), { data: buffer_1.Buffer.from(info === null || info === void 0 ? void 0 : info.data) });
        });
    }
    static getInfos(connection, pubkeys, commitment = 'recent') {
        return __awaiter(this, void 0, void 0, function* () {
            const BATCH_SIZE = 99;
            const promises = [];
            for (let i = 0; i < pubkeys.length; i += BATCH_SIZE) {
                promises.push(Account.getMultipleAccounts(connection, pubkeys.slice(i, Math.min(pubkeys.length, i + BATCH_SIZE)), commitment));
            }
            const results = new Map();
            (yield Promise.all(promises)).forEach((result) => { var _a; return [...((_a = result === null || result === void 0 ? void 0 : result.entries()) !== null && _a !== void 0 ? _a : [])].forEach(([k, v]) => results.set(k, v)); });
            return results;
        });
    }
    static getMultipleAccounts(connection, pubkeys, commitment) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = connection._buildArgs([pubkeys.map((k) => k.toString())], commitment, 'base64');
            const unsafeRes = yield connection._rpcRequest('getMultipleAccounts', args);
            if (unsafeRes.error) {
                throw new Error('failed to get info about accounts ' + unsafeRes.error.message);
            }
            if (!unsafeRes.result.value)
                return;
            const infos = unsafeRes.result.value
                .filter(Boolean)
                .map((info) => (Object.assign(Object.assign({}, info), { data: buffer_1.Buffer.from(info.data[0], 'base64') })));
            return infos.reduce((acc, info, index) => {
                acc.set(pubkeys[index], info);
                return acc;
            }, new Map());
        });
    }
    assertOwner(pubkey) {
        var _a;
        return (_a = this.info) === null || _a === void 0 ? void 0 : _a.owner.equals(new web3_js_1.PublicKey(pubkey));
    }
    toJSON() {
        var _a, _b, _c, _d, _e;
        return {
            pubkey: this.pubkey.toString(),
            info: {
                executable: !!((_a = this.info) === null || _a === void 0 ? void 0 : _a.executable),
                owner: ((_b = this.info) === null || _b === void 0 ? void 0 : _b.owner) ? new web3_js_1.PublicKey((_c = this.info) === null || _c === void 0 ? void 0 : _c.owner) : null,
                lamports: (_d = this.info) === null || _d === void 0 ? void 0 : _d.lamports,
                data: (_e = this.info) === null || _e === void 0 ? void 0 : _e.data.toJSON(),
            },
            data: this.data,
        };
    }
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map

/***/ }),

/***/ 10679:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserialize = exports.TokenAccount = void 0;
const errors_1 = __webpack_require__(47790);
const Account_1 = __webpack_require__(61660);
const spl_token_1 = __webpack_require__(23434);
const web3_js_1 = __webpack_require__(29948);
class TokenAccount extends Account_1.Account {
    constructor(pubkey, info) {
        super(pubkey, info);
        if (!this.assertOwner(spl_token_1.TOKEN_PROGRAM_ID)) {
            throw (0, errors_1.ERROR_INVALID_OWNER)();
        }
        if (!TokenAccount.isCompatible(this.info.data)) {
            throw (0, errors_1.ERROR_INVALID_ACCOUNT_DATA)();
        }
        this.data = (0, exports.deserialize)(this.info.data);
    }
    static isCompatible(data) {
        return data.length === spl_token_1.AccountLayout.span;
    }
    static getTokenAccountsByOwner(connection, owner) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield connection.getTokenAccountsByOwner(new web3_js_1.PublicKey(owner), {
                programId: spl_token_1.TOKEN_PROGRAM_ID,
            })).value.map(({ pubkey, account }) => new TokenAccount(pubkey, account));
        });
    }
}
exports.TokenAccount = TokenAccount;
const deserialize = (data) => {
    const accountInfo = spl_token_1.AccountLayout.decode(data);
    accountInfo.mint = new web3_js_1.PublicKey(accountInfo.mint);
    accountInfo.owner = new web3_js_1.PublicKey(accountInfo.owner);
    accountInfo.amount = spl_token_1.u64.fromBuffer(accountInfo.amount);
    if (accountInfo.delegateOption === 0) {
        accountInfo.delegate = null;
        accountInfo.delegatedAmount = new spl_token_1.u64(0);
    }
    else {
        accountInfo.delegate = new web3_js_1.PublicKey(accountInfo.delegate);
        accountInfo.delegatedAmount = spl_token_1.u64.fromBuffer(accountInfo.delegatedAmount);
    }
    accountInfo.isInitialized = accountInfo.state !== 0;
    accountInfo.isFrozen = accountInfo.state === 2;
    if (accountInfo.isNativeOption === 1) {
        accountInfo.rentExemptReserve = spl_token_1.u64.fromBuffer(accountInfo.isNative);
        accountInfo.isNative = true;
    }
    else {
        accountInfo.rentExemptReserve = null;
        accountInfo.isNative = false;
    }
    if (accountInfo.closeAuthorityOption === 0) {
        accountInfo.closeAuthority = null;
    }
    else {
        accountInfo.closeAuthority = new web3_js_1.PublicKey(accountInfo.closeAuthority);
    }
    return accountInfo;
};
exports.deserialize = deserialize;
//# sourceMappingURL=TokenAccount.js.map

/***/ }),

/***/ 57020:
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
__exportStar(__webpack_require__(61660), exports);
__exportStar(__webpack_require__(10679), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 22132:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
exports.config = {
    arweaveWallet: 'HvwC9QSAzvGXhhVrgPmauVwFWcYZhne3hVot9EbHuFTm',
    programs: {
        auction: 'auctxRXPeJoc4817jDhf4HbjnhEcr1cCXenosMhK5R8',
        metadata: 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s',
        metaplex: 'p1exdMJcjVao65QdewkaZRUnU6VPSXhus9n2GzWfh98',
        vault: 'vau1zxA2LbssAUEF7Gpw91zMM1LvXrvpzJtmZ58rPsn',
        packs: 'BNRmGgciUJuyznkYHnmitA9an1BcDDiU9JmjEQwvBYVR',
        memo: 'MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr',
        token: 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
    },
    maxCreatorLimit: 5,
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 47790:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ERROR_ACCOUNT_NOT_FOUND = exports.ERROR_DEPRECATED_ACCOUNT_DATA = exports.ERROR_INVALID_ACCOUNT_DATA = exports.ERROR_INVALID_OWNER = exports.MetaplexError = exports.ErrorCode = void 0;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["ERROR_INVALID_OWNER"] = 0] = "ERROR_INVALID_OWNER";
    ErrorCode[ErrorCode["ERROR_INVALID_ACCOUNT_DATA"] = 1] = "ERROR_INVALID_ACCOUNT_DATA";
    ErrorCode[ErrorCode["ERROR_DEPRECATED_ACCOUNT_DATA"] = 2] = "ERROR_DEPRECATED_ACCOUNT_DATA";
    ErrorCode[ErrorCode["ERROR_ACCOUNT_NOT_FOUND"] = 3] = "ERROR_ACCOUNT_NOT_FOUND";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
class MetaplexError extends Error {
    constructor(errorCode, message) {
        super(message);
        this.errorCode = errorCode;
    }
}
exports.MetaplexError = MetaplexError;
const ERROR_INVALID_OWNER = () => {
    return new MetaplexError(ErrorCode.ERROR_INVALID_OWNER, 'Invalid owner');
};
exports.ERROR_INVALID_OWNER = ERROR_INVALID_OWNER;
const ERROR_INVALID_ACCOUNT_DATA = () => {
    return new MetaplexError(ErrorCode.ERROR_INVALID_ACCOUNT_DATA, 'Invalid data');
};
exports.ERROR_INVALID_ACCOUNT_DATA = ERROR_INVALID_ACCOUNT_DATA;
const ERROR_DEPRECATED_ACCOUNT_DATA = () => {
    return new MetaplexError(ErrorCode.ERROR_DEPRECATED_ACCOUNT_DATA, 'Account data is deprecated');
};
exports.ERROR_DEPRECATED_ACCOUNT_DATA = ERROR_DEPRECATED_ACCOUNT_DATA;
const ERROR_ACCOUNT_NOT_FOUND = (pubkey) => {
    return new MetaplexError(ErrorCode.ERROR_ACCOUNT_NOT_FOUND, `Unable to find account: ${pubkey}`);
};
exports.ERROR_ACCOUNT_NOT_FOUND = ERROR_ACCOUNT_NOT_FOUND;
//# sourceMappingURL=errors.js.map

/***/ }),

/***/ 78654:
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
__exportStar(__webpack_require__(57020), exports);
__exportStar(__webpack_require__(22132), exports);
__exportStar(__webpack_require__(47790), exports);
__exportStar(__webpack_require__(40202), exports);
__exportStar(__webpack_require__(68031), exports);
__exportStar(__webpack_require__(65265), exports);
__exportStar(__webpack_require__(1972), exports);
//# sourceMappingURL=mpl-core.js.map

/***/ }),

/***/ 65265:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 49568:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serialize = exports.deserializeUnchecked = exports.deserialize = exports.struct = exports.Data = exports.extendBorsh = void 0;
const web3_js_1 = __webpack_require__(29948);
const borsh_1 = __webpack_require__(12050);
Object.defineProperty(exports, "deserializeUnchecked", ({ enumerable: true, get: function () { return borsh_1.deserializeUnchecked; } }));
Object.defineProperty(exports, "serialize", ({ enumerable: true, get: function () { return borsh_1.serialize; } }));
Object.defineProperty(exports, "deserialize", ({ enumerable: true, get: function () { return borsh_1.deserialize; } }));
const bs58_1 = __importDefault(__webpack_require__(91945));
const extendBorsh = () => {
    borsh_1.BinaryReader.prototype.readPubkey = function () {
        const array = this.readFixedArray(32);
        return new web3_js_1.PublicKey(array);
    };
    borsh_1.BinaryWriter.prototype.writePubkey = function (value) {
        this.writeFixedArray(value.toBuffer());
    };
    borsh_1.BinaryReader.prototype.readPubkeyAsString = function () {
        const array = this.readFixedArray(32);
        return bs58_1.default.encode(array);
    };
    borsh_1.BinaryWriter.prototype.writePubkeyAsString = function (value) {
        this.writeFixedArray(bs58_1.default.decode(value));
    };
};
exports.extendBorsh = extendBorsh;
(0, exports.extendBorsh)();
class Data {
    constructor(args = {}) {
        Object.assign(this, args);
    }
    static struct(fields) {
        return (0, exports.struct)(this, fields);
    }
    static serialize(args = {}) {
        return Buffer.from((0, borsh_1.serialize)(this.SCHEMA, new this(args)));
    }
    static deserialize(data) {
        return (0, borsh_1.deserializeUnchecked)(this.SCHEMA, this, data);
    }
}
exports.Data = Data;
const struct = (type, fields) => {
    return new Map([[type, { kind: 'struct', fields }]]);
};
exports.struct = struct;
//# sourceMappingURL=borsh.js.map

/***/ }),

/***/ 1972:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Borsh = void 0;
exports.Borsh = __importStar(__webpack_require__(49568));
__exportStar(__webpack_require__(1283), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1283:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getBNFromData = exports.TupleNumericType = void 0;
const bn_js_1 = __importDefault(__webpack_require__(28891));
var TupleNumericType;
(function (TupleNumericType) {
    TupleNumericType[TupleNumericType["U8"] = 1] = "U8";
    TupleNumericType[TupleNumericType["U16"] = 2] = "U16";
    TupleNumericType[TupleNumericType["U32"] = 4] = "U32";
    TupleNumericType[TupleNumericType["U64"] = 8] = "U64";
})(TupleNumericType = exports.TupleNumericType || (exports.TupleNumericType = {}));
const getBNFromData = (data, offset, dataType) => {
    switch (dataType) {
        case TupleNumericType.U8:
            return new bn_js_1.default(data[offset], 'le');
        case TupleNumericType.U16:
            return new bn_js_1.default(data.slice(offset, offset + 2), 'le');
        case TupleNumericType.U32:
            return new bn_js_1.default(data.slice(offset, offset + 4), 'le');
        case TupleNumericType.U64:
            return new bn_js_1.default(data.slice(offset, offset + 8), 'le');
    }
};
exports.getBNFromData = getBNFromData;
//# sourceMappingURL=tupleNumeric.js.map

/***/ })

}]);