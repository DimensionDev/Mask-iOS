"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[7318],{

/***/ 91168:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.C_ACCESS_TOKEN_KEY = exports.DFLAG = void 0;
exports.DFLAG = false;
exports.C_ACCESS_TOKEN_KEY = 'CYBERCONNECT_ACCESS_TOKEN';
//# sourceMappingURL=constant.js.map

/***/ }),

/***/ 22229:
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrayBuffer2Hex = exports.signWithSigningKey = exports.getPublicKey = exports.getSigningKey = exports.hasSigningKey = exports.generateSigningKey = exports.rotateSigningKey = exports.clearSigningKeyByAddress = exports.clearSigningKey = exports.clear = exports.set = exports.get = void 0;
var idb_1 = __webpack_require__(12581);
var dbPromise = null;
var SIGNKEY_KEY = 'signingKey_';
if (typeof window !== 'undefined' && typeof window.indexedDB !== 'undefined') {
    dbPromise = (0, idb_1.openDB)('CyberConnect', 1, {
        upgrade: function (db) {
            db.createObjectStore('store');
        },
    });
}
function get(key) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dbPromise) return [3 /*break*/, 2];
                    return [4 /*yield*/, dbPromise];
                case 1: return [2 /*return*/, (_a.sent()).get('store', key)];
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports.get = get;
function set(key, val) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dbPromise) return [3 /*break*/, 2];
                    return [4 /*yield*/, dbPromise];
                case 1: return [2 /*return*/, (_a.sent()).put('store', val, key)];
                case 2: return [2 /*return*/];
            }
        });
    });
}
exports.set = set;
function clear() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbPromise];
                case 1: return [2 /*return*/, (_a.sent()).clear('store')];
            }
        });
    });
}
exports.clear = clear;
function clearSigningKey() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, clear()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.clearSigningKey = clearSigningKey;
function clearSigningKeyByAddress(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, dbPromise];
                case 1: return [2 /*return*/, (_a.sent()).delete('store', SIGNKEY_KEY + address)];
            }
        });
    });
}
exports.clearSigningKeyByAddress = clearSigningKeyByAddress;
function rotateSigningKey(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, clear()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, generateSigningKey(address)];
            }
        });
    });
}
exports.rotateSigningKey = rotateSigningKey;
function generateSigningKey(address) {
    return __awaiter(this, void 0, void 0, function () {
        var algorithm, extractable, keyUsages, signingKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    algorithm = {
                        name: 'ECDSA',
                        namedCurve: 'P-256',
                    };
                    extractable = false;
                    keyUsages = ['sign', 'verify'];
                    return [4 /*yield*/, window.crypto.subtle.generateKey(algorithm, extractable, keyUsages)];
                case 1:
                    signingKey = _a.sent();
                    set(SIGNKEY_KEY + address, signingKey).then();
                    return [2 /*return*/, signingKey];
            }
        });
    });
}
exports.generateSigningKey = generateSigningKey;
function hasSigningKey(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get(SIGNKEY_KEY + address)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.hasSigningKey = hasSigningKey;
function getSigningKey(address) {
    return __awaiter(this, void 0, void 0, function () {
        var signingKey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, get(SIGNKEY_KEY + address)];
                case 1:
                    signingKey = _a.sent();
                    if (!signingKey) {
                        signingKey = generateSigningKey(address);
                    }
                    return [2 /*return*/, signingKey];
            }
        });
    });
}
exports.getSigningKey = getSigningKey;
function getPublicKey(address) {
    return __awaiter(this, void 0, void 0, function () {
        var signingKey, exported;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getSigningKey(address)];
                case 1:
                    signingKey = _a.sent();
                    return [4 /*yield*/, window.crypto.subtle.exportKey('spki', signingKey.publicKey)];
                case 2:
                    exported = _a.sent();
                    return [2 /*return*/, window.btoa(arrayBuffer2String(exported))];
            }
        });
    });
}
exports.getPublicKey = getPublicKey;
function signWithSigningKey(input, address) {
    return __awaiter(this, void 0, void 0, function () {
        var signingKey, algorithm, enc, encodedMessage, signature;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getSigningKey(address)];
                case 1:
                    signingKey = _a.sent();
                    algorithm = {
                        name: 'ECDSA',
                        hash: {
                            name: 'SHA-256',
                        },
                    };
                    enc = new TextEncoder();
                    encodedMessage = enc.encode(input);
                    return [4 /*yield*/, window.crypto.subtle.sign(algorithm, signingKey.privateKey, encodedMessage)];
                case 2:
                    signature = _a.sent();
                    return [2 /*return*/, arrayBuffer2Hex(signature)];
            }
        });
    });
}
exports.signWithSigningKey = signWithSigningKey;
function arrayBuffer2Hex(buffer) {
    return ('0x' +
        Array.prototype.map
            .call(new Uint8Array(buffer), function (x) { return ('00' + x.toString(16)).slice(-2); })
            .join(''));
}
exports.arrayBuffer2Hex = arrayBuffer2Hex;
function arrayBuffer2String(buffer) {
    return String.fromCharCode.apply(null, new Uint8Array(buffer));
}
//# sourceMappingURL=crypto.js.map

/***/ }),

/***/ 12334:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var http_client_1 = __webpack_require__(47237);
var key_did_resolver_1 = __importDefault(__webpack_require__(8372));
var _3id_did_resolver_1 = __importDefault(__webpack_require__(24080));
var _3id_did_provider_1 = __importDefault(__webpack_require__(18437));
var connect_1 = __webpack_require__(3392);
var blockchain_utils_linking_1 = __webpack_require__(68640);
var sha256_1 = __webpack_require__(58161);
var uint8arrays_1 = __webpack_require__(79088);
var dids_1 = __webpack_require__(76373);
var idx_1 = __webpack_require__(57311);
var network_1 = __webpack_require__(55435);
var queries_1 = __webpack_require__(8981);
var error_1 = __webpack_require__(32571);
var types_1 = __webpack_require__(96414);
var utils_1 = __webpack_require__(80830);
var stream_caip10_link_1 = __webpack_require__(89421);
var _1 = __webpack_require__(70820);
var constant_1 = __webpack_require__(91168);
var crypto_1 = __webpack_require__(22229);
var CyberConnect = /** @class */ (function () {
    function CyberConnect(config) {
        this.address = '';
        this.signature = '';
        this.chain = types_1.Blockchain.ETH;
        this.chainRef = '';
        this.provider = null;
        this.accountLink = null;
        this.authId = '';
        this.did = null;
        this.threeId = null;
        this.threeIdProvider = null;
        var provider = config.provider, namespace = config.namespace, env = config.env, chainRef = config.chainRef, chain = config.chain;
        if (!namespace) {
            throw new error_1.ConnectError(error_1.ErrorCode.EmptyNamespace);
        }
        this.namespace = namespace;
        this.endpoint = network_1.endpoints[env || _1.Env.PRODUCTION];
        this.ceramicClient = new http_client_1.CeramicClient(this.endpoint.ceramicUrl);
        this.chain = chain || types_1.Blockchain.ETH;
        this.chainRef = chainRef || '';
        this.provider = provider;
        var keyDidResolver = key_did_resolver_1.default.getResolver();
        var threeIdResolver = _3id_did_resolver_1.default.getResolver(this.ceramicClient);
        this.resolverRegistry = __assign(__assign({}, threeIdResolver), keyDidResolver);
        delete window.localStorage[constant_1.C_ACCESS_TOKEN_KEY];
    }
    CyberConnect.prototype.getAuthProvider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.provider) {
                            throw new error_1.ConnectError(error_1.ErrorCode.EmptyEthProvider);
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, (0, utils_1.getAddressByProvider)(this.provider, this.chain)];
                    case 2:
                        _a.address = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.AuthProviderError, e_1);
                    case 4:
                        switch (this.chain) {
                            case types_1.Blockchain.ETH: {
                                this.authProvider = new connect_1.EthereumAuthProvider(this.provider, this.address);
                                break;
                            }
                            case types_1.Blockchain.SOLANA: {
                                if (!this.provider.publicKey) {
                                    throw new error_1.ConnectError(error_1.ErrorCode.AuthProviderError, 'Wallet Not Connected');
                                }
                                if (!this.provider.signMessage) {
                                    throw new error_1.ConnectError(error_1.ErrorCode.AuthProviderError, 'Provider must implement signMessage');
                                }
                                this.authProvider = new blockchain_utils_linking_1.SolanaAuthProvider(this.provider, this.address, this.chainRef);
                                break;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.setupAuthProvider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rst;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.signature) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.getAuthProvider()];
                    case 1:
                        _a.sent();
                        if (!this.authProvider) {
                            throw new error_1.ConnectError(error_1.ErrorCode.EmptyAuthProvider);
                        }
                        return [4 /*yield*/, this.authProvider.authenticate('Allow this account to control your identity')];
                    case 2:
                        rst = _a.sent();
                        this.signature = rst;
                        return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.signWithJwt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var timestamp, payload, req, id, sendRes, normalJWS, jwsString;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(localStorage[constant_1.C_ACCESS_TOKEN_KEY] && !constant_1.DFLAG)) return [3 /*break*/, 1];
                        return [2 /*return*/, localStorage[constant_1.C_ACCESS_TOKEN_KEY]];
                    case 1:
                        if (!constant_1.DFLAG) return [3 /*break*/, 3];
                        timestamp = new Date().getTime();
                        payload = {
                            timestamp: timestamp,
                            target: this.address,
                        };
                        if (!this.threeId) {
                            throw new error_1.ConnectError(error_1.ErrorCode.SignJwtError, 'Empty ThreeId');
                        }
                        req = {
                            method: 'did_createJWS',
                            params: { payload: payload, did: this.threeId.id },
                        };
                        id = 0;
                        if (!this.threeIdProvider) {
                            throw new error_1.ConnectError(error_1.ErrorCode.SignJwtError, 'Empty ThreeId provider');
                        }
                        return [4 /*yield*/, this.threeIdProvider.send(Object.assign({ jsonrpc: '2.0', id: id }, req), null)];
                    case 2:
                        sendRes = _a.sent();
                        if (!sendRes || !sendRes.result) {
                            return [2 /*return*/, ''];
                        }
                        if (!this.did) {
                            throw new error_1.ConnectError(error_1.ErrorCode.SignJwtError, 'Empty DID');
                        }
                        normalJWS = sendRes.result.jws;
                        jwsString = [
                            normalJWS.signatures[0].protected,
                            normalJWS.payload,
                            normalJWS.signatures[0].signature,
                        ].join('.');
                        return [2 /*return*/, jwsString];
                    case 3: return [2 /*return*/, ''];
                }
            });
        });
    };
    CyberConnect.prototype.setupDid = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getPermission, authSecret, _a, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (this.idxInstance) {
                            return [2 /*return*/];
                        }
                        if (!this.authProvider) {
                            new error_1.ConnectError(error_1.ErrorCode.EmptyAuthProvider).printError();
                            return [2 /*return*/];
                        }
                        if (!this.ceramicClient) {
                            new error_1.ConnectError(error_1.ErrorCode.CeramicError, 'Can not find ceramic client').printError();
                            return [2 /*return*/];
                        }
                        getPermission = function (request) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                return [2 /*return*/, request.payload.paths];
                            });
                        }); };
                        authSecret = (0, sha256_1.hash)((0, uint8arrays_1.fromString)(this.signature.slice(2)));
                        _a = this;
                        return [4 /*yield*/, this.authProvider.accountId()];
                    case 1:
                        _a.authId = (_c.sent()).toString();
                        _b = this;
                        return [4 /*yield*/, _3id_did_provider_1.default.create({
                                getPermission: getPermission,
                                authSecret: authSecret,
                                authId: this.authId,
                                ceramic: this.ceramicClient,
                            })];
                    case 2:
                        _b.threeId = _c.sent();
                        this.threeIdProvider = this.threeId.getDidProvider();
                        this.did = new dids_1.DID({
                            provider: this.threeIdProvider,
                            resolver: this.resolverRegistry,
                        });
                        return [4 /*yield*/, this.did.authenticate()];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, this.ceramicClient.setDID(this.did)];
                    case 4:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.createIdx = function () {
        if (this.idxInstance) {
            return;
        }
        this.idxInstance = new idx_1.IDX({
            ceramic: this.ceramicClient,
            aliases: {
                cyberConnect: this.endpoint.cyberConnectSchema,
            },
            autopin: true,
        });
    };
    CyberConnect.prototype.createAccountLink = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.accountLink && !!this.accountLink.did) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, stream_caip10_link_1.Caip10Link.fromAccount(this.ceramicClient, this.authId)];
                    case 1:
                        _a.accountLink = _b.sent();
                        if (!(!this.accountLink.did && this.did && this.authProvider)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.accountLink.setDid(this.did.id, this.authProvider, {
                                anchor: false,
                                publish: false,
                            })];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.getOutboundLink = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.idxInstance) {
                            throw new error_1.ConnectError(error_1.ErrorCode.CeramicError, 'Could not find idx instance');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.idxInstance.get('cyberConnect')];
                    case 2:
                        result = (_a.sent());
                        return [2 /*return*/, (result === null || result === void 0 ? void 0 : result.outboundLink) || []];
                    case 3:
                        e_2 = _a.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.CeramicError, e_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // first step
    CyberConnect.prototype.authenticate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!!constant_1.DFLAG) return [3 /*break*/, 1];
                        this.authWithSigningKey();
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, this.setupAuthProvider()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setupDid()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.createAccountLink()];
                    case 4:
                        _a.sent();
                        this.createIdx();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_3 = _a.sent();
                        throw e_3;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.ceramicConnect = function (targetAddr, alias) {
        if (alias === void 0) { alias = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var outboundLink, index, curTimeStr, e_4;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getOutboundLink()];
                    case 1:
                        outboundLink = _a.sent();
                        if (!this.idxInstance) {
                            throw new error_1.ConnectError(error_1.ErrorCode.CeramicError, 'Could not find idx instance');
                        }
                        index = outboundLink.findIndex(function (link) {
                            return link.target === targetAddr && link.namespace === _this.namespace;
                        });
                        curTimeStr = String(Date.now());
                        if (index === -1) {
                            outboundLink.push({
                                target: targetAddr,
                                connectionType: 'follow',
                                namespace: this.namespace,
                                alias: alias,
                                createdAt: curTimeStr,
                            });
                        }
                        else {
                            outboundLink[index].createdAt = curTimeStr;
                        }
                        this.idxInstance.set('cyberConnect', { outboundLink: outboundLink });
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        console.error(e_4);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.ceramicDisconnect = function (targetAddr) {
        return __awaiter(this, void 0, void 0, function () {
            var outboundLink, newOutboundLink, e_5;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getOutboundLink()];
                    case 1:
                        outboundLink = _a.sent();
                        if (!this.idxInstance) {
                            throw new error_1.ConnectError(error_1.ErrorCode.CeramicError, 'Could not find idx instance');
                        }
                        newOutboundLink = outboundLink.filter(function (link) {
                            return link.target !== targetAddr || link.namespace !== _this.namespace;
                        });
                        this.idxInstance.set('cyberConnect', {
                            outboundLink: newOutboundLink,
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        e_5 = _a.sent();
                        console.error(e_5);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.ceramicSetAlias = function (targetAddr, alias) {
        return __awaiter(this, void 0, void 0, function () {
            var outboundLink, index, e_6;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.getOutboundLink()];
                    case 1:
                        outboundLink = _a.sent();
                        if (!this.idxInstance) {
                            throw new error_1.ConnectError(error_1.ErrorCode.CeramicError, 'Could not find idx instance');
                        }
                        index = outboundLink.findIndex(function (link) {
                            return link.target === targetAddr && link.namespace === _this.namespace;
                        });
                        if (index !== -1) {
                            outboundLink[index] = __assign(__assign({}, outboundLink[index]), { alias: alias });
                            this.idxInstance.set('cyberConnect', { outboundLink: outboundLink });
                        }
                        else {
                            throw new error_1.ConnectError(error_1.ErrorCode.CeramicError, "Couldn't find the target address in the given namespace");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_6 = _a.sent();
                        console.error(e_6);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.connect = function (targetAddr, alias) {
        var _a, _b, _c, _d;
        if (alias === void 0) { alias = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var _e, operation, signature, publicKey, params, resp, e_7;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 8, , 9]);
                        _e = this;
                        return [4 /*yield*/, this.getAddress()];
                    case 1:
                        _e.address = _f.sent();
                        return [4 /*yield*/, this.authWithSigningKey()];
                    case 2:
                        _f.sent();
                        operation = {
                            name: 'follow',
                            from: this.address,
                            to: targetAddr,
                            namespace: this.namespace,
                            network: this.chain,
                            alias: alias,
                            timestamp: Date.now(),
                        };
                        return [4 /*yield*/, (0, crypto_1.signWithSigningKey)(JSON.stringify(operation), this.address)];
                    case 3:
                        signature = _f.sent();
                        return [4 /*yield*/, (0, crypto_1.getPublicKey)(this.address)];
                    case 4:
                        publicKey = _f.sent();
                        params = {
                            fromAddr: this.address,
                            toAddr: targetAddr,
                            alias: alias,
                            namespace: this.namespace,
                            url: this.endpoint.cyberConnectApi,
                            signature: signature,
                            signingKey: publicKey,
                            operation: JSON.stringify(operation),
                            network: this.chain,
                        };
                        return [4 /*yield*/, (0, queries_1.follow)(params)];
                    case 5:
                        resp = _f.sent();
                        if (!(((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.connect.result) === 'INVALID_SIGNATURE')) return [3 /*break*/, 7];
                        return [4 /*yield*/, (0, crypto_1.clearSigningKey)()];
                    case 6:
                        _f.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, (_b = resp === null || resp === void 0 ? void 0 : resp.data) === null || _b === void 0 ? void 0 : _b.connect.result);
                    case 7:
                        if (((_c = resp === null || resp === void 0 ? void 0 : resp.data) === null || _c === void 0 ? void 0 : _c.connect.result) !== 'SUCCESS') {
                            throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, (_d = resp === null || resp === void 0 ? void 0 : resp.data) === null || _d === void 0 ? void 0 : _d.connect.result);
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        e_7 = _f.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, e_7.message || e_7);
                    case 9:
                        if (constant_1.DFLAG) {
                            this.ceramicConnect(targetAddr, alias);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.disconnect = function (targetAddr, alias) {
        var _a, _b, _c, _d;
        if (alias === void 0) { alias = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var _e, operation, signature, publicKey, params, resp, e_8;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 8, , 9]);
                        _e = this;
                        return [4 /*yield*/, this.getAddress()];
                    case 1:
                        _e.address = _f.sent();
                        return [4 /*yield*/, this.authWithSigningKey()];
                    case 2:
                        _f.sent();
                        operation = {
                            name: 'unfollow',
                            from: this.address,
                            to: targetAddr,
                            namespace: this.namespace,
                            network: this.chain,
                            alias: alias,
                            timestamp: Date.now(),
                        };
                        return [4 /*yield*/, (0, crypto_1.signWithSigningKey)(JSON.stringify(operation), this.address)];
                    case 3:
                        signature = _f.sent();
                        return [4 /*yield*/, (0, crypto_1.getPublicKey)(this.address)];
                    case 4:
                        publicKey = _f.sent();
                        params = {
                            fromAddr: this.address,
                            toAddr: targetAddr,
                            alias: alias,
                            namespace: this.namespace,
                            url: this.endpoint.cyberConnectApi,
                            signature: signature,
                            signingKey: publicKey,
                            operation: JSON.stringify(operation),
                            network: this.chain,
                        };
                        return [4 /*yield*/, (0, queries_1.unfollow)(params)];
                    case 5:
                        resp = _f.sent();
                        if (!(((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.disconnect.result) === 'INVALID_SIGNATURE')) return [3 /*break*/, 7];
                        return [4 /*yield*/, (0, crypto_1.clearSigningKey)()];
                    case 6:
                        _f.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, (_b = resp === null || resp === void 0 ? void 0 : resp.data) === null || _b === void 0 ? void 0 : _b.disconnect.result);
                    case 7:
                        if (((_c = resp === null || resp === void 0 ? void 0 : resp.data) === null || _c === void 0 ? void 0 : _c.disconnect.result) !== 'SUCCESS') {
                            throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, (_d = resp === null || resp === void 0 ? void 0 : resp.data) === null || _d === void 0 ? void 0 : _d.disconnect.result);
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        e_8 = _f.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, e_8.message || e_8);
                    case 9:
                        if (constant_1.DFLAG) {
                            this.ceramicDisconnect(targetAddr);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.setAlias = function (targetAddr, alias) {
        var _a, _b, _c, _d;
        if (alias === void 0) { alias = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var _e, operation, signature, publicKey, params, resp, e_9;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _f.trys.push([0, 8, , 9]);
                        _e = this;
                        return [4 /*yield*/, this.getAddress()];
                    case 1:
                        _e.address = _f.sent();
                        return [4 /*yield*/, this.authWithSigningKey()];
                    case 2:
                        _f.sent();
                        operation = {
                            name: 'follow',
                            from: this.address,
                            to: targetAddr,
                            namespace: this.namespace,
                            network: this.chain,
                            alias: alias,
                            timestamp: Date.now(),
                        };
                        return [4 /*yield*/, (0, crypto_1.signWithSigningKey)(JSON.stringify(operation), this.address)];
                    case 3:
                        signature = _f.sent();
                        return [4 /*yield*/, (0, crypto_1.getPublicKey)(this.address)];
                    case 4:
                        publicKey = _f.sent();
                        params = {
                            fromAddr: this.address,
                            toAddr: targetAddr,
                            alias: alias,
                            namespace: this.namespace,
                            url: this.endpoint.cyberConnectApi,
                            signature: signature,
                            signingKey: publicKey,
                            operation: JSON.stringify(operation),
                            network: this.chain,
                        };
                        return [4 /*yield*/, (0, queries_1.setAlias)(params)];
                    case 5:
                        resp = _f.sent();
                        if (!(((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.alias.result) === 'INVALID_SIGNATURE')) return [3 /*break*/, 7];
                        return [4 /*yield*/, (0, crypto_1.clearSigningKey)()];
                    case 6:
                        _f.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, (_b = resp === null || resp === void 0 ? void 0 : resp.data) === null || _b === void 0 ? void 0 : _b.alias.result);
                    case 7:
                        if (((_c = resp === null || resp === void 0 ? void 0 : resp.data) === null || _c === void 0 ? void 0 : _c.alias.result) !== 'SUCCESS') {
                            throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, (_d = resp === null || resp === void 0 ? void 0 : resp.data) === null || _d === void 0 ? void 0 : _d.alias.result);
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        e_9 = _f.sent();
                        throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, e_9.message || e_9);
                    case 9:
                        if (constant_1.DFLAG) {
                            this.ceramicSetAlias(targetAddr, alias);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CyberConnect.prototype.getAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.address) {
                            return [2 /*return*/, this.address];
                        }
                        _a = this;
                        return [4 /*yield*/, (0, utils_1.getAddressByProvider)(this.provider, this.chain)];
                    case 1: return [2 /*return*/, (_a.address = _b.sent())];
                }
            });
        });
    };
    CyberConnect.prototype.authWithSigningKey = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var publicKey, acknowledgement, message, _c, signingKeySignature, resp, e_10;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, (0, crypto_1.hasSigningKey)(this.address)];
                    case 1:
                        if (_d.sent()) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, (0, crypto_1.getPublicKey)(this.address)];
                    case 2:
                        publicKey = _d.sent();
                        acknowledgement = 'I authorize CyberConnect from this device using signing key:\n';
                        message = "" + acknowledgement + publicKey;
                        _c = this;
                        return [4 /*yield*/, this.getAddress()];
                    case 3:
                        _c.address = _d.sent();
                        _d.label = 4;
                    case 4:
                        _d.trys.push([4, 9, , 10]);
                        return [4 /*yield*/, (0, utils_1.getSigningKeySignature)(this.provider, this.chain, message, this.address)];
                    case 5:
                        signingKeySignature = _d.sent();
                        if (!signingKeySignature) return [3 /*break*/, 7];
                        return [4 /*yield*/, (0, queries_1.registerSigningKey)({
                                address: this.address,
                                signature: signingKeySignature,
                                message: message,
                                network: this.chain,
                                url: this.endpoint.cyberConnectApi,
                            })];
                    case 6:
                        resp = _d.sent();
                        if (((_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.registerKey.result) !== 'SUCCESS') {
                            throw new error_1.ConnectError(error_1.ErrorCode.GraphqlError, (_b = resp === null || resp === void 0 ? void 0 : resp.data) === null || _b === void 0 ? void 0 : _b.alias.result);
                        }
                        return [3 /*break*/, 8];
                    case 7: throw new Error('signingKeySignature is empty');
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_10 = _d.sent();
                        (0, crypto_1.clearSigningKeyByAddress)(this.address);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    return CyberConnect;
}());
exports["default"] = CyberConnect;
//# sourceMappingURL=cyberConnect.js.map

/***/ }),

/***/ 32571:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorCode = exports.ConnectError = void 0;
var constant_1 = __webpack_require__(91168);
var ConnectError = /** @class */ (function () {
    function ConnectError(code, message) {
        this.code = code;
        this.message = message || errors[code];
        if (!constant_1.DFLAG && window && window.localStorage) {
            delete window.localStorage[constant_1.C_ACCESS_TOKEN_KEY];
        }
    }
    ConnectError.prototype.printError = function () {
        console.error(this.message);
    };
    return ConnectError;
}());
exports.ConnectError = ConnectError;
var ErrorCode;
(function (ErrorCode) {
    ErrorCode["EmptyNamespace"] = "EmptyNamespace";
    ErrorCode["EmptyEthProvider"] = "EmptyEthProvider";
    ErrorCode["EmptyAuthProvider"] = "EmptyAuthProvider";
    ErrorCode["NetworkError"] = "NetworkError";
    ErrorCode["GraphqlError"] = "GraphqlError";
    ErrorCode["CeramicError"] = "CeramicError";
    ErrorCode["AuthProviderError"] = "AuthProviderError";
    ErrorCode["SignJwtError"] = "SignJwtError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
var errors = {
    EmptyNamespace: 'Namespace can not be empty',
    EmptyEthProvider: 'Eth provider can not be empty',
    EmptyAuthProvider: 'Could not find authProvider',
    NetworkError: '',
    GraphqlError: '',
    CeramicError: '',
    AuthProviderError: '',
    SignJwtError: '',
};
//# sourceMappingURL=error.js.map

/***/ }),

/***/ 70820:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.solana = exports.getAddressByProvider = exports.ConnectError = exports.Blockchain = exports.Env = void 0;
var cyberConnect_1 = __importDefault(__webpack_require__(12334));
var types_1 = __webpack_require__(96414);
Object.defineProperty(exports, "Env", ({ enumerable: true, get: function () { return types_1.Env; } }));
Object.defineProperty(exports, "Blockchain", ({ enumerable: true, get: function () { return types_1.Blockchain; } }));
var error_1 = __webpack_require__(32571);
Object.defineProperty(exports, "ConnectError", ({ enumerable: true, get: function () { return error_1.ConnectError; } }));
var utils_1 = __webpack_require__(80830);
Object.defineProperty(exports, "getAddressByProvider", ({ enumerable: true, get: function () { return utils_1.getAddressByProvider; } }));
var blockchain_utils_linking_1 = __webpack_require__(68640);
Object.defineProperty(exports, "solana", ({ enumerable: true, get: function () { return blockchain_utils_linking_1.solana; } }));
exports["default"] = cyberConnect_1.default;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 55435:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.endpoints = void 0;
exports.endpoints = {
    STAGING: {
        ceramicUrl: 'https://ceramic.stg.cybertino.io',
        cyberConnectSchema: 'kjzl6cwe1jw149mvqedik2h3j26y4bmcvucjbbhezwcr7dgdyyg9v0x8xfvlp1j',
        cyberConnectApi: 'https://api.stg.cybertino.io/connect/',
    },
    PRODUCTION: {
        ceramicUrl: 'https://ceramic.cybertino.io',
        cyberConnectSchema: 'kjzl6cwe1jw14b3g6d22ze4jaatoikiq62qrmnbzo8hkg68ic7w0smq9ymzsxta',
        cyberConnectApi: 'https://api.cybertino.io/connect/',
    },
};
//# sourceMappingURL=network.js.map

/***/ }),

/***/ 8981:
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setAlias = exports.unfollow = exports.follow = exports.auth = exports.registerSigningKey = exports.handleQuery = exports.request = exports.querySchemas = exports.authSchema = exports.setAliasQuerySchema = exports.disconnectQuerySchema = exports.connectQuerySchema = exports.registerSigningKeySchema = void 0;
var types_1 = __webpack_require__(96414);
var registerSigningKeySchema = function (input) {
    return {
        operationName: 'registerKey',
        query: "mutation registerKey($input: RegisterKeyInput!) {\n      registerKey(input: $input) {\n        result\n      }\n    }",
        variables: { input: input },
    };
};
exports.registerSigningKeySchema = registerSigningKeySchema;
var connectQuerySchema = function (input) {
    return {
        operationName: 'connect',
        query: "mutation connect($input: UpdateConnectionInput!) {connect(input: $input) {result}}",
        variables: {
            input: input,
        },
    };
};
exports.connectQuerySchema = connectQuerySchema;
var disconnectQuerySchema = function (input) {
    return {
        operationName: 'disconnect',
        query: "mutation disconnect($input: UpdateConnectionInput!) {disconnect(input: $input) {result}}",
        variables: {
            input: input,
        },
    };
};
exports.disconnectQuerySchema = disconnectQuerySchema;
var setAliasQuerySchema = function (input) {
    return {
        operationName: 'alias',
        query: "mutation alias($input: UpdateConnectionInput!) {alias(input: $input) {result}}",
        variables: {
            input: input,
        },
    };
};
exports.setAliasQuerySchema = setAliasQuerySchema;
var authSchema = function (_a) {
    var address = _a.address, signature = _a.signature, _b = _a.network, network = _b === void 0 ? types_1.Blockchain.ETH : _b;
    return {
        operationName: 'auth',
        query: "mutation auth($address: String!, $signature: String!, $network: String) {\n      auth(address: $address, signature: $signature, network: $network) {\n        result\n        authToken\n      }\n    }",
        variables: { address: address, signature: signature, network: network },
    };
};
exports.authSchema = authSchema;
exports.querySchemas = {
    connect: exports.connectQuerySchema,
    disconnect: exports.disconnectQuerySchema,
    auth: exports.authSchema,
    setAlias: exports.setAliasQuerySchema,
    registerSigningKey: exports.registerSigningKeySchema,
};
var request = function (url, data) {
    if (url === void 0) { url = ''; }
    if (data === void 0) { data = {}; }
    return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        referrerPolicy: 'no-referrer',
                        body: JSON.stringify(data),
                    })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.json()];
            }
        });
    });
};
exports.request = request;
var handleQuery = function (data, url) {
    return (0, exports.request)(url, data);
};
exports.handleQuery = handleQuery;
var registerSigningKey = function (_a) {
    var address = _a.address, message = _a.message, signature = _a.signature, _b = _a.network, network = _b === void 0 ? types_1.Blockchain.ETH : _b, url = _a.url;
    var result = exports.querySchemas['registerSigningKey']({
        address: address,
        message: message,
        signature: signature,
        network: network,
    });
    return (0, exports.handleQuery)(result, url);
};
exports.registerSigningKey = registerSigningKey;
var auth = function (_a) {
    var address = _a.address, signature = _a.signature, _b = _a.network, network = _b === void 0 ? types_1.Blockchain.ETH : _b, url = _a.url;
    var result = exports.querySchemas['auth']({
        address: address,
        signature: signature,
        network: network,
    });
    return (0, exports.handleQuery)(result, url);
};
exports.auth = auth;
var follow = function (_a) {
    var fromAddr = _a.fromAddr, toAddr = _a.toAddr, alias = _a.alias, namespace = _a.namespace, url = _a.url, signature = _a.signature, operation = _a.operation, signingKey = _a.signingKey, _b = _a.network, network = _b === void 0 ? types_1.Blockchain.ETH : _b;
    var schema = exports.querySchemas['connect']({
        fromAddr: fromAddr,
        toAddr: toAddr,
        alias: alias,
        namespace: namespace,
        signature: signature,
        operation: operation,
        signingKey: signingKey,
        network: network,
    });
    return (0, exports.handleQuery)(schema, url);
};
exports.follow = follow;
var unfollow = function (_a) {
    var fromAddr = _a.fromAddr, toAddr = _a.toAddr, alias = _a.alias, namespace = _a.namespace, url = _a.url, signature = _a.signature, operation = _a.operation, signingKey = _a.signingKey, _b = _a.network, network = _b === void 0 ? types_1.Blockchain.ETH : _b;
    var schema = exports.querySchemas['disconnect']({
        fromAddr: fromAddr,
        toAddr: toAddr,
        alias: alias,
        namespace: namespace,
        signature: signature,
        operation: operation,
        signingKey: signingKey,
        network: network,
    });
    return (0, exports.handleQuery)(schema, url);
};
exports.unfollow = unfollow;
var setAlias = function (_a) {
    var fromAddr = _a.fromAddr, toAddr = _a.toAddr, alias = _a.alias, namespace = _a.namespace, url = _a.url, signature = _a.signature, operation = _a.operation, signingKey = _a.signingKey, _b = _a.network, network = _b === void 0 ? types_1.Blockchain.ETH : _b;
    var schema = exports.querySchemas['setAlias']({
        fromAddr: fromAddr,
        toAddr: toAddr,
        alias: alias,
        namespace: namespace,
        signature: signature,
        operation: operation,
        signingKey: signingKey,
        network: network,
    });
    return (0, exports.handleQuery)(schema, url);
};
exports.setAlias = setAlias;
//# sourceMappingURL=queries.js.map

/***/ }),

/***/ 96414:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Env = exports.Blockchain = void 0;
var Blockchain;
(function (Blockchain) {
    Blockchain["ETH"] = "ETH";
    Blockchain["SOLANA"] = "SOLANA";
})(Blockchain = exports.Blockchain || (exports.Blockchain = {}));
var Env;
(function (Env) {
    Env["STAGING"] = "STAGING";
    Env["PRODUCTION"] = "PRODUCTION";
})(Env = exports.Env || (exports.Env = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 80830:
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSigningKeySignature = exports.getAddressByProvider = exports.safeSend = exports.encodeRpcMessage = void 0;
var types_1 = __webpack_require__(96414);
var bs58_1 = __importDefault(__webpack_require__(91945));
var bytes_1 = __webpack_require__(5241);
var strings_1 = __webpack_require__(9006);
var encodeRpcMessage = function (method, params) {
    return {
        jsonrpc: '2.0',
        id: 1,
        method: method,
        params: params,
    };
};
exports.encodeRpcMessage = encodeRpcMessage;
var safeSend = function (provider, method, params) {
    if (params == null) {
        params = [];
    }
    if (provider.request) {
        return provider.request({ method: method, params: params }).then(function (response) { return response; }, function (error) {
            throw error;
        });
    }
    else if (provider.sendAsync || provider.send) {
        var sendFunc_1 = (provider.sendAsync ? provider.sendAsync : provider.send).bind(provider);
        var request_1 = (0, exports.encodeRpcMessage)(method, params);
        return new Promise(function (resolve, reject) {
            sendFunc_1(request_1, function (error, response) {
                if (error)
                    reject(error);
                if (response.error) {
                    var error_1 = new Error(response.error.message);
                    error_1.code = response.error.code;
                    error_1.data = response.error.data;
                    reject(error_1);
                }
                resolve(response.result);
            });
        });
    }
    else {
        throw new Error("Unsupported provider; provider must implement one of the following methods: send, sendAsync, request");
    }
};
exports.safeSend = safeSend;
var getAddressByProvider = function (provider, chain) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, signer, address, addresses;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = chain;
                switch (_a) {
                    case types_1.Blockchain.ETH: return [3 /*break*/, 1];
                    case types_1.Blockchain.SOLANA: return [3 /*break*/, 5];
                }
                return [3 /*break*/, 6];
            case 1:
                if (!(typeof provider.getSigner === 'function')) return [3 /*break*/, 3];
                signer = provider.getSigner();
                return [4 /*yield*/, signer.getAddress()];
            case 2:
                address = _b.sent();
                return [2 /*return*/, address];
            case 3: return [4 /*yield*/, (0, exports.safeSend)(provider, 'eth_accounts')];
            case 4:
                addresses = _b.sent();
                if (addresses && addresses[0]) {
                    return [2 /*return*/, addresses[0]];
                }
                else {
                    return [2 /*return*/, ''];
                }
                _b.label = 5;
            case 5:
                {
                    return [2 /*return*/, provider.publicKey.toString()];
                }
                _b.label = 6;
            case 6:
                {
                    return [2 /*return*/, ''];
                }
                _b.label = 7;
            case 7: return [2 /*return*/];
        }
    });
}); };
exports.getAddressByProvider = getAddressByProvider;
var getSigningKeySignature = function (provider, chain, message, address) { return __awaiter(void 0, void 0, void 0, function () {
    var signer, signingKeySignature_1, signingKeySignature, signingKeySignature, _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!(chain === types_1.Blockchain.ETH)) return [3 /*break*/, 4];
                if (provider.isAuthereum) {
                    return [2 /*return*/, provider.signMessageWithSigningKey(message)];
                }
                if (!(typeof provider.getSigner === 'function')) return [3 /*break*/, 2];
                signer = provider.getSigner();
                return [4 /*yield*/, signer.signMessage(message)];
            case 1:
                signingKeySignature_1 = _c.sent();
                return [2 /*return*/, signingKeySignature_1];
            case 2: return [4 /*yield*/, (0, exports.safeSend)(provider, 'personal_sign', [
                    (0, bytes_1.hexlify)((0, strings_1.toUtf8Bytes)(message)),
                    address,
                ])];
            case 3:
                signingKeySignature = _c.sent();
                return [2 /*return*/, signingKeySignature];
            case 4:
                if (!(chain === types_1.Blockchain.SOLANA)) return [3 /*break*/, 6];
                _b = (_a = bs58_1.default).encode;
                return [4 /*yield*/, provider.signMessage(new TextEncoder().encode(message))];
            case 5:
                signingKeySignature = _b.apply(_a, [_c.sent()]);
                return [2 /*return*/, signingKeySignature];
            case 6: return [2 /*return*/, ''];
        }
    });
}); };
exports.getSigningKeySignature = getSigningKeySignature;
//# sourceMappingURL=utils.js.map

/***/ })

}]);