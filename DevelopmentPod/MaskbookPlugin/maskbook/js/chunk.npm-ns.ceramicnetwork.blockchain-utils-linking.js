"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5393],{

/***/ 84036:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=auth-provider.js.map

/***/ }),

/***/ 55851:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CosmosAuthProvider = exports.getMetaData = exports.asTransaction = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const sha256_1 = __webpack_require__(58161);
const uint8arrays = __importStar(__webpack_require__(31605));
const stringEncode = (str) => uint8arrays.toString(uint8arrays.fromString(str), 'base64pad');
function asTransaction(address, message) {
    return {
        fee: {
            amount: [{ amount: '0', denom: '' }],
            gas: '0',
        },
        memo: message,
        msg: [
            {
                type: 'cosmos-sdk/MsgSend',
                value: {
                    from_address: address,
                    to_address: address,
                    amount: [{ amount: '0', denom: '0' }],
                },
            },
        ],
    };
}
exports.asTransaction = asTransaction;
function getMetaData() {
    return {
        account_number: '1',
        chain_id: 'cosmos',
        sequence: '0',
    };
}
exports.getMetaData = getMetaData;
class CosmosAuthProvider {
    constructor(provider, address, chainRef) {
        this.provider = provider;
        this.address = address;
        this.chainRef = chainRef;
        this.isAuthProvider = true;
    }
    async authenticate(message) {
        const accountID = await this.accountId();
        const encodedMsg = stringEncode(message);
        const res = await this.provider.sign(asTransaction(accountID.address, encodedMsg), getMetaData());
        const digest = sha256_1.hash(uint8arrays.fromString(JSON.stringify(res.signatures[0])));
        return `0x${uint8arrays.toString(digest, 'base16')}`;
    }
    async createLink(did) {
        const { message, timestamp } = util_1.getConsentMessage(did);
        const accountID = await this.accountId();
        const encodedMsg = stringEncode(message);
        const res = await this.provider.sign(asTransaction(accountID.address, encodedMsg), getMetaData());
        const signature = stringEncode(JSON.stringify(res.signatures[0]));
        return {
            version: 2,
            message,
            signature,
            account: accountID.toString(),
            timestamp,
        };
    }
    async accountId() {
        return new caip_1.AccountID({
            address: this.address,
            chainId: `cosmos:${this.chainRef}`,
        });
    }
    withAddress(address) {
        return new CosmosAuthProvider(this.provider, address, this.chainRef);
    }
}
exports.CosmosAuthProvider = CosmosAuthProvider;
//# sourceMappingURL=cosmos.js.map

/***/ }),

/***/ 16567:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toSignedPayload = exports.toPayload = exports.EosioAuthProvider = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const ethereum_1 = __webpack_require__(27776);
const sha256Stable = __importStar(__webpack_require__(58161));
const uint8arrays = __importStar(__webpack_require__(31605));
const maxWordLength = 12;
class EosioAuthProvider {
    constructor(provider, address) {
        this.provider = provider;
        this.address = address;
        this.isAuthProvider = true;
    }
    async accountId() {
        const chainId = toCAIPChainId(await this.provider.getChainId());
        return new caip_1.AccountID({
            address: this.address,
            chainId: `eosio:${chainId}`,
        });
    }
    async authenticate(message) {
        const accountID = await this.accountId();
        const signedPayload = await toSignedPayload(message, accountID, this.provider);
        const signatureBytes = uint8arrays.fromString(signedPayload);
        const digest = sha256Stable.hash(signatureBytes);
        return `0x${uint8arrays.toString(digest, 'base16')}`;
    }
    async createLink(did) {
        const consentMessage = util_1.getConsentMessage(did);
        const accountID = await this.accountId();
        const signedPayload = await toSignedPayload(consentMessage.message, accountID, this.provider);
        return {
            version: 2,
            type: 'eosio',
            message: consentMessage.message,
            signature: signedPayload,
            account: accountID.toString(),
            timestamp: consentMessage.timestamp,
        };
    }
    withAddress(address) {
        return new EosioAuthProvider(this.provider, address);
    }
}
exports.EosioAuthProvider = EosioAuthProvider;
function toCAIPChainId(chainId) {
    return chainId.substr(0, 32);
}
function sanitize(str, size) {
    return str.replace(/\s/g, ' ').replace(new RegExp(`(\\S{${size}})`, 'g'), '$1 ');
}
function toPayload(message, accountID) {
    const { address, chainId } = accountID;
    const payload = `${message} [For: ${address} on chain: ${chainId}]`;
    return sanitize(payload, maxWordLength);
}
exports.toPayload = toPayload;
async function toSignedPayload(message, accountID, provider) {
    accountID = ethereum_1.normalizeAccountId(accountID);
    const { chainId: { reference: requestedChainId }, address, } = accountID;
    const accountName = await provider.getAccountName();
    const chainId = toCAIPChainId(await provider.getChainId());
    if (chainId !== requestedChainId) {
        throw new Error(`Provider returned a different chainId than requested [returned: ${chainId}, requested: ${requestedChainId}]`);
    }
    if (accountName !== address) {
        throw new Error(`Provider returned a different account than requested [returned: ${accountName}, requested: ${address}]`);
    }
    const payload = toPayload(message, accountID);
    const [key] = await provider.getKeys();
    return provider.signArbitrary(key, payload);
}
exports.toSignedPayload = toSignedPayload;
//# sourceMappingURL=eosio.js.map

/***/ }),

/***/ 27776:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authenticate = exports.createLink = exports.normalizeAccountId = exports.isERC1271 = exports.isEthAddress = exports.EthereumAuthProvider = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const uint8arrays = __importStar(__webpack_require__(31605));
const sha256 = __importStar(__webpack_require__(58161));
const ocap_util_1 = __webpack_require__(98624);
const ADDRESS_TYPES = {
    ethereumEOA: 'ethereum-eoa',
    erc1271: 'erc1271',
};
const CHAIN_NAMESPACE = 'eip155';
class EthereumAuthProvider {
    constructor(provider, address, opts = {}) {
        this.provider = provider;
        this.address = address;
        this.opts = opts;
        this.isAuthProvider = true;
    }
    async accountId() {
        const chainIdHex = await safeSend(this.provider, 'eth_chainId', []);
        const chainId = parseInt(chainIdHex, 16);
        return new caip_1.AccountID({
            address: this.address,
            chainId: `${CHAIN_NAMESPACE}:${chainId}`,
        });
    }
    async authenticate(message) {
        const accountId = await this.accountId();
        return authenticate(message, accountId, this.provider);
    }
    async createLink(did) {
        const accountId = await this.accountId();
        return createLink(did, accountId, this.provider, this.opts);
    }
    async requestCapability(params) {
        console.warn('WARN: requestCapability os an experimental API, that is subject to change any time.');
        const account = await this.accountId();
        const requestMessage = ocap_util_1.buildOcapRequestMessage({
            ...params,
            address: this.address,
            chainId: account.chainId.toString(),
            type: ocap_util_1.OcapTypes.EIP4361,
        });
        const signature = await safeSend(this.provider, 'personal_sign', [
            requestMessage,
            account.address,
        ]);
        return {
            message: requestMessage,
            signature: signature,
        };
    }
    withAddress(address) {
        return new EthereumAuthProvider(this.provider, address);
    }
}
exports.EthereumAuthProvider = EthereumAuthProvider;
function isEthAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}
exports.isEthAddress = isEthAddress;
async function getCode(address, provider) {
    return safeSend(provider, 'eth_getCode', [address, 'latest']);
}
function safeSend(provider, method, params) {
    if (params == null) {
        params = [];
    }
    if (provider.request) {
        return provider.request({ method, params }).then((response) => response, (error) => {
            throw error;
        });
    }
    else if (provider.sendAsync || provider.send) {
        const sendFunc = (provider.sendAsync ? provider.sendAsync : provider.send).bind(provider);
        const request = util_1.encodeRpcMessage(method, params);
        return new Promise((resolve, reject) => {
            sendFunc(request, (error, response) => {
                if (error)
                    reject(error);
                if (response.error) {
                    const error = new Error(response.error.message);
                    error.code = response.error.code;
                    error.data = response.error.data;
                    reject(error);
                }
                resolve(response.result);
            });
        });
    }
    else {
        throw new Error(`Unsupported provider; provider must implement one of the following methods: send, sendAsync, request`);
    }
}
async function isERC1271(account, provider) {
    const bytecode = await getCode(account.address, provider).catch(() => null);
    return Boolean(bytecode && bytecode !== '0x' && bytecode !== '0x0' && bytecode !== '0x00');
}
exports.isERC1271 = isERC1271;
function normalizeAccountId(account) {
    account.address = account.address.toLowerCase();
    return account;
}
exports.normalizeAccountId = normalizeAccountId;
function utf8toHex(message) {
    const bytes = uint8arrays.fromString(message);
    const hex = uint8arrays.toString(bytes, 'base16');
    return '0x' + hex;
}
async function createEthLink(did, account, provider, opts = {}) {
    const { message, timestamp } = util_1.getConsentMessage(did, !opts.skipTimestamp);
    const hexMessage = utf8toHex(message);
    const signature = await safeSend(provider, 'personal_sign', [hexMessage, account.address]);
    const proof = {
        version: 2,
        type: ADDRESS_TYPES.ethereumEOA,
        message,
        signature,
        account: account.toString(),
    };
    if (!opts.skipTimestamp)
        proof.timestamp = timestamp;
    return proof;
}
async function validateChainId(account, provider) {
    const chainIdHex = await safeSend(provider, 'eth_chainId', []);
    const chainId = parseInt(chainIdHex, 16);
    if (chainId !== parseInt(account.chainId.reference)) {
        throw new Error(`ChainId in provider (${chainId}) is different from AccountID (${account.chainId.reference})`);
    }
}
async function createErc1271Link(did, account, provider, opts) {
    const ethLinkAccount = (opts === null || opts === void 0 ? void 0 : opts.eoaSignAccount) || account;
    const res = await createEthLink(did, ethLinkAccount, provider, opts);
    await validateChainId(account, provider);
    return Object.assign(res, {
        type: ADDRESS_TYPES.erc1271,
        account: account.toString(),
    });
}
async function createLink(did, account, provider, opts) {
    account = normalizeAccountId(account);
    if (await isERC1271(account, provider)) {
        return createErc1271Link(did, account, provider, opts);
    }
    else {
        return createEthLink(did, account, provider, opts);
    }
}
exports.createLink = createLink;
async function authenticate(message, account, provider) {
    if (account)
        account = normalizeAccountId(account);
    if (provider.isAuthereum)
        return provider.signMessageWithSigningKey(message);
    const hexMessage = utf8toHex(message);
    const signature = await safeSend(provider, 'personal_sign', [hexMessage, account.address]);
    const signatureBytes = uint8arrays.fromString(signature.slice(2));
    const digest = sha256.hash(signatureBytes);
    return `0x${uint8arrays.toString(digest, 'base16')}`;
}
exports.authenticate = authenticate;
//# sourceMappingURL=ethereum.js.map

/***/ }),

/***/ 87020:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.asTransaction = exports.FilecoinAuthProvider = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const uint8arrays = __importStar(__webpack_require__(31605));
class FilecoinAuthProvider {
    constructor(provider, address) {
        this.provider = provider;
        this.address = address;
        this.isAuthProvider = true;
    }
    async accountId() {
        const prefix = this.address[0];
        const chainId = `fil:${prefix}`;
        return new caip_1.AccountID({ address: this.address, chainId });
    }
    async authenticate(message) {
        const payload = asTransaction(this.address, JSON.stringify(message));
        const signatureResponse = await this.provider.sign(this.address, payload);
        return signatureResponse.Signature.Data;
    }
    async createLink(did) {
        const { message, timestamp } = util_1.getConsentMessage(did, true);
        const payload = asTransaction(this.address, message);
        const signatureResponse = await this.provider.sign(this.address, payload);
        const accountId = await this.accountId();
        return {
            version: 2,
            type: 'eoa-tx',
            message: message,
            signature: signatureResponse.Signature.Data,
            account: accountId.toString(),
            timestamp: timestamp,
        };
    }
    withAddress(address) {
        return new FilecoinAuthProvider(this.provider, address);
    }
}
exports.FilecoinAuthProvider = FilecoinAuthProvider;
function asTransaction(address, message) {
    const messageParams = uint8arrays.toString(uint8arrays.fromString(message), 'base64');
    return {
        From: address,
        To: address,
        Value: '0',
        Method: 0,
        GasPrice: '1',
        GasLimit: 1000,
        Nonce: 0,
        Params: messageParams,
        GasFeeCap: '1',
        GasPremium: '1',
    };
}
exports.asTransaction = asTransaction;
//# sourceMappingURL=filecoin.js.map

/***/ }),

/***/ 68640:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolanaAuthProvider = exports.TezosAuthProvider = exports.NearAuthProvider = exports.CosmosAuthProvider = exports.PolkadotAuthProvider = exports.EosioAuthProvider = exports.FilecoinAuthProvider = exports.AvalancheAuthProvider = exports.EthereumAuthProvider = exports.solana = exports.tezos = exports.cosmos = exports.eosio = exports.polkadot = exports.filecoin = exports.ethereum = void 0;
__exportStar(__webpack_require__(84036), exports);
exports.ethereum = __importStar(__webpack_require__(27776));
__exportStar(__webpack_require__(87386), exports);
exports.filecoin = __importStar(__webpack_require__(87020));
exports.polkadot = __importStar(__webpack_require__(30846));
exports.eosio = __importStar(__webpack_require__(16567));
exports.cosmos = __importStar(__webpack_require__(55851));
exports.tezos = __importStar(__webpack_require__(44763));
exports.solana = __importStar(__webpack_require__(99699));
var ethereum_1 = __webpack_require__(27776);
Object.defineProperty(exports, "EthereumAuthProvider", ({ enumerable: true, get: function () { return ethereum_1.EthereumAuthProvider; } }));
var ethereum_2 = __webpack_require__(27776);
Object.defineProperty(exports, "AvalancheAuthProvider", ({ enumerable: true, get: function () { return ethereum_2.EthereumAuthProvider; } }));
var filecoin_1 = __webpack_require__(87020);
Object.defineProperty(exports, "FilecoinAuthProvider", ({ enumerable: true, get: function () { return filecoin_1.FilecoinAuthProvider; } }));
var eosio_1 = __webpack_require__(16567);
Object.defineProperty(exports, "EosioAuthProvider", ({ enumerable: true, get: function () { return eosio_1.EosioAuthProvider; } }));
var polkadot_1 = __webpack_require__(30846);
Object.defineProperty(exports, "PolkadotAuthProvider", ({ enumerable: true, get: function () { return polkadot_1.PolkadotAuthProvider; } }));
var cosmos_1 = __webpack_require__(55851);
Object.defineProperty(exports, "CosmosAuthProvider", ({ enumerable: true, get: function () { return cosmos_1.CosmosAuthProvider; } }));
var near_1 = __webpack_require__(38547);
Object.defineProperty(exports, "NearAuthProvider", ({ enumerable: true, get: function () { return near_1.NearAuthProvider; } }));
var tezos_1 = __webpack_require__(44763);
Object.defineProperty(exports, "TezosAuthProvider", ({ enumerable: true, get: function () { return tezos_1.TezosAuthProvider; } }));
var solana_1 = __webpack_require__(99699);
Object.defineProperty(exports, "SolanaAuthProvider", ({ enumerable: true, get: function () { return solana_1.SolanaAuthProvider; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 38547:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NearAuthProvider = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const uint8arrays = __importStar(__webpack_require__(31605));
const nearApiJs = __importStar(__webpack_require__(9933));
const sha256 = __importStar(__webpack_require__(58161));
const getSignature = async (signer, accountId, message, networkId) => {
    const signed = await signer.signMessage(message, accountId, networkId);
    return uint8arrays.toString(signed.signature, 'base64');
};
class NearAuthProvider {
    constructor(near, accountName, chainRef) {
        this.near = near;
        this.accountName = accountName;
        this.chainRef = chainRef;
        this.isAuthProvider = true;
    }
    async authenticate(message) {
        const key = await this.near.connection.signer.keyStore.getKey(this.chainRef, this.accountName);
        const signer = await nearApiJs.InMemorySigner.fromKeyPair(this.chainRef, this.accountName, key);
        const digest = sha256.hash(uint8arrays.fromString(message));
        const { signature } = await signer.signMessage(digest, this.accountName, this.chainRef);
        return uint8arrays.toString(signature, 'base16');
    }
    async createLink(did) {
        const key = await this.near.connection.signer.keyStore.getKey(this.chainRef, this.accountName);
        const signer = await nearApiJs.InMemorySigner.fromKeyPair(this.chainRef, this.accountName, key);
        const { message, timestamp } = util_1.getConsentMessage(did, true);
        const signature = await getSignature(signer, this.accountName, message, this.chainRef);
        const account = await this.accountId();
        return {
            version: 2,
            type: 'near',
            message,
            signature,
            account: account.toString(),
            timestamp,
        };
    }
    async accountId() {
        const key = await this.near.connection.signer.keyStore.getKey(this.chainRef, this.accountName);
        const signer = await nearApiJs.InMemorySigner.fromKeyPair(this.chainRef, this.accountName, key);
        const publicKey = await signer.getPublicKey(this.accountName, this.chainRef);
        const address = uint8arrays.toString(publicKey.data, 'base58btc');
        return new caip_1.AccountID({
            address: address,
            chainId: `near:${this.chainRef}`,
        });
    }
    withAddress(address) {
        return new NearAuthProvider(this.near, address, this.chainRef);
    }
}
exports.NearAuthProvider = NearAuthProvider;
//# sourceMappingURL=near.js.map

/***/ }),

/***/ 98624:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.w3cDate = exports.buildOcapRequestMessage = exports.OcapTypes = void 0;
var OcapTypes;
(function (OcapTypes) {
    OcapTypes["EIP4361"] = "EIP-4361";
})(OcapTypes = exports.OcapTypes || (exports.OcapTypes = {}));
function buildOcapRequestMessage(opts) {
    if (opts.type !== OcapTypes.EIP4361) {
        throw new Error('Unsupported type');
    }
    let res = '';
    res += `${opts.domain} wants you to sign in with your Ethereum account: \n`;
    res += opts.address + '\n';
    if (opts.statement) {
        res += '\n';
        res += opts.statement;
        res += '\n\n';
    }
    res += `URI: ${opts.did} \n`;
    res += 'Version: 1 \n';
    res += `Chain ID: ${opts.chainId} \n`;
    if (opts.nonce.length < 8) {
        throw new Error(`Nonce must be at least 8 characters`);
    }
    res += `Nonce: ${opts.nonce} \n`;
    res += `Issued At: ${w3cDate(opts.issuedAt)} \n`;
    if (opts.expiresAt) {
        res += `Expiration Time: ${w3cDate(opts.expiresAt)} \n`;
    }
    if (opts.notBefore) {
        res += `Not Before: ${w3cDate(opts.notBefore)} \n`;
    }
    if (opts.requestId) {
        res += `Request ID: ${opts.requestId} \n`;
    }
    res += 'Resources: \n';
    for (const streamId of opts.streams) {
        res += `- ${streamId.toUrl()} \n`;
    }
    return res;
}
exports.buildOcapRequestMessage = buildOcapRequestMessage;
function w3cDate(date) {
    let result = new Date();
    if (typeof date === 'number' || typeof date === 'string') {
        result = new Date(date);
    }
    const str = result.toISOString();
    return str.substr(0, str.length - 5) + 'Z';
}
exports.w3cDate = w3cDate;
//# sourceMappingURL=ocap-util.js.map

/***/ }),

/***/ 30846:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PolkadotAuthProvider = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const uint8arrays = __importStar(__webpack_require__(31605));
const stringHex = (str) => `0x${uint8arrays.toString(uint8arrays.fromString(str), 'base16')}`;
const CHAIN_ID = 'polkadot:b0a8d493285c2df73290dfb7e61f870f';
class PolkadotAuthProvider {
    constructor(provider, address) {
        this.provider = provider;
        this.address = address;
        this.isAuthProvider = true;
    }
    async authenticate(message) {
        throw new Error(`Not Implemented: PolkadotAuthProvider#authenticate, ${message}`);
    }
    async createLink(did) {
        const { message, timestamp } = util_1.getConsentMessage(did);
        const linkMessageHex = stringHex(message);
        const account = await this.accountId();
        const res = await this.provider.signRaw({
            address: this.address,
            data: linkMessageHex,
            type: 'bytes',
        });
        return {
            version: 2,
            type: 'eoa',
            message: message,
            signature: res.signature,
            account: account.toString(),
            timestamp: timestamp,
        };
    }
    async accountId() {
        return new caip_1.AccountID({ address: this.address, chainId: CHAIN_ID });
    }
    withAddress(address) {
        return new PolkadotAuthProvider(this.provider, address);
    }
}
exports.PolkadotAuthProvider = PolkadotAuthProvider;
//# sourceMappingURL=polkadot.js.map

/***/ }),

/***/ 99699:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolanaAuthProvider = exports.SOLANA_MAINNET_CHAIN_REF = exports.SOLANA_DEVNET_CHAIN_REF = exports.SOLANA_TESTNET_CHAIN_REF = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const uint8arrays = __importStar(__webpack_require__(31605));
const sha256 = __importStar(__webpack_require__(58161));
exports.SOLANA_TESTNET_CHAIN_REF = '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z';
exports.SOLANA_DEVNET_CHAIN_REF = 'EtWTRABZaYq6iMfeYKouRu166VU2xqa1';
exports.SOLANA_MAINNET_CHAIN_REF = '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp';
class SolanaAuthProvider {
    constructor(provider, address, chainRef) {
        this.provider = provider;
        this.address = address;
        this.chainRef = chainRef;
        this.isAuthProvider = true;
    }
    async accountId() {
        return new caip_1.AccountID({
            address: this.address,
            chainId: `solana:${this.chainRef}`,
        });
    }
    async authenticate(message) {
        if (!this.provider.signMessage) {
            throw new Error(`Unsupported provider; provider must implement signMessage`);
        }
        const signatureBytes = await this.provider.signMessage(uint8arrays.fromString(message));
        const digest = sha256.hash(signatureBytes);
        return `0x${uint8arrays.toString(digest, 'base16')}`;
    }
    async createLink(did) {
        if (!this.provider.signMessage) {
            throw new Error(`Unsupported provider; provider must implement signMessage`);
        }
        const { message, timestamp } = util_1.getConsentMessage(did, true);
        const accountID = await this.accountId();
        const signatureBytes = await this.provider.signMessage(uint8arrays.fromString(message));
        const signature = uint8arrays.toString(signatureBytes, 'base64');
        return {
            version: 2,
            type: 'solana',
            message,
            signature,
            account: accountID.toString(),
            timestamp,
        };
    }
    withAddress(address) {
        return new SolanaAuthProvider(this.provider, address, this.chainRef);
    }
}
exports.SolanaAuthProvider = SolanaAuthProvider;
//# sourceMappingURL=solana.js.map

/***/ }),

/***/ 44763:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TezosAuthProvider = exports.TEZOS_CHAIN_REF = exports.TEZOS_NAMESPACE = void 0;
const caip_1 = __webpack_require__(5937);
const util_1 = __webpack_require__(87386);
const sha256_1 = __webpack_require__(58161);
const uint8arrays = __importStar(__webpack_require__(31605));
exports.TEZOS_NAMESPACE = 'tezos';
exports.TEZOS_CHAIN_REF = 'NetXdQprcVkpaWU';
function encodeMessage(text) {
    const michelinePrefix = '05';
    const stringPrefix = '01';
    const len = ('0000000' + text.length.toString(16)).slice(-8);
    text = uint8arrays.toString(uint8arrays.fromString(text, 'utf-8'), 'hex');
    return michelinePrefix + stringPrefix + len + text;
}
async function sign(provider, message) {
    message = encodeMessage(message);
    const { prefixSig: signature } = await provider.signer.sign(message);
    return signature;
}
async function getActiveAddress(provider) {
    return provider.signer.publicKeyHash();
}
class TezosAuthProvider {
    constructor(provider) {
        this.provider = provider;
        this.isAuthProvider = true;
        if (provider.signer === undefined) {
            throw new Error('a `Signer` is required to use the `TezosAuthProvider`');
        }
    }
    async authenticate(message) {
        const signature = await sign(this.provider, message);
        const digest = sha256_1.hash(uint8arrays.fromString(signature));
        return `0x${uint8arrays.toString(digest, 'base16')}`;
    }
    async createLink(did) {
        const { message, timestamp } = util_1.getConsentMessage(did);
        const signature = await sign(this.provider, message);
        const address = await getActiveAddress(this.provider);
        const caipAccount = new caip_1.AccountID({
            address,
            chainId: `${exports.TEZOS_NAMESPACE}:${exports.TEZOS_CHAIN_REF}`,
        });
        const proof = {
            version: 2,
            message,
            signature,
            account: caipAccount.toString(),
            timestamp,
        };
        return proof;
    }
    async accountId() {
        const address = await getActiveAddress(this.provider);
        return new caip_1.AccountID({
            address,
            chainId: `${exports.TEZOS_NAMESPACE}:${exports.TEZOS_CHAIN_REF}`,
        });
    }
    withAddress(_address) {
        throw new Error('TezosAuthProvider does not support withAddress');
    }
}
exports.TezosAuthProvider = TezosAuthProvider;
//# sourceMappingURL=tezos.js.map

/***/ }),

/***/ 87386:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.encodeRpcMessage = exports.getConsentMessage = void 0;
function getConsentMessage(did, addTimestamp = true) {
    const res = {
        message: 'Link this account to your identity' + '\n\n' + did,
    };
    if (addTimestamp) {
        res.timestamp = Math.floor(Date.now() / 1000);
        res.message += ' \n' + 'Timestamp: ' + res.timestamp;
    }
    return res;
}
exports.getConsentMessage = getConsentMessage;
function encodeRpcMessage(method, params) {
    return {
        jsonrpc: '2.0',
        id: 1,
        method,
        params,
    };
}
exports.encodeRpcMessage = encodeRpcMessage;
//# sourceMappingURL=util.js.map

/***/ })

}]);