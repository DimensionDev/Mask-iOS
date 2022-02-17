"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[9019],{

/***/ 9439:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ens_1 = __importDefault(__webpack_require__(85121));
var resolver_1 = __importDefault(__webpack_require__(81282));
var types_1 = __webpack_require__(51376);
var resolutionError_1 = __webpack_require__(68942);
var EthereumContract_1 = __importDefault(__webpack_require__(59750));
var ethereum_ens_network_map_1 = __importDefault(__webpack_require__(7338));
var publicTypes_1 = __webpack_require__(52530);
var utils_1 = __webpack_require__(15433);
var FetchProvider_1 = __importDefault(__webpack_require__(78311));
var namehash_1 = __webpack_require__(2817);
var NamingService_1 = __webpack_require__(99445);
var configurationError_1 = __importStar(__webpack_require__(90319));
var utils_2 = __webpack_require__(15433);
var requireOrFail_1 = __webpack_require__(20764);
/**
 * @internal
 */
var Ens = /** @class */ (function (_super) {
    __extends(Ens, _super);
    function Ens(source) {
        var _this = _super.call(this) || this;
        _this.name = publicTypes_1.NamingServiceName.ENS;
        if (!source) {
            source = {
                url: Ens.UrlMap[1],
                network: 'mainnet',
            };
        }
        _this.checkNetworkConfig(source);
        _this.network = utils_2.EthereumNetworks[source.network];
        _this.url = source['url'] || Ens.UrlMap[_this.network];
        _this.provider =
            source['provider'] || new FetchProvider_1.default(_this.name, _this.url);
        var registryAddress = source['registryAddress'] || ethereum_ens_network_map_1.default[_this.network];
        _this.readerContract = new EthereumContract_1.default(ens_1.default, registryAddress, _this.provider);
        return _this;
    }
    Ens.autoNetwork = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, networkId, networkName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (types_1.hasProvider(config)) {
                            provider = config.provider;
                        }
                        else {
                            if (!config.url) {
                                throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnspecifiedUrl, {
                                    method: publicTypes_1.NamingServiceName.ENS,
                                });
                            }
                            provider = FetchProvider_1.default.factory(publicTypes_1.NamingServiceName.ENS, config.url);
                        }
                        return [4 /*yield*/, provider.request({
                                method: 'net_version',
                            })];
                    case 1:
                        networkId = (_a.sent());
                        networkName = utils_1.EthereumNetworksInverted[networkId];
                        if (!networkName || !types_1.EnsSupportedNetwork.guard(networkName)) {
                            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnsupportedNetwork, {
                                method: publicTypes_1.NamingServiceName.ENS,
                            });
                        }
                        return [2 /*return*/, new this({ network: networkName, provider: provider })];
                }
            });
        });
    };
    Ens.prototype.serviceName = function () {
        return this.name;
    };
    Ens.prototype.namehash = function (domain) {
        if (!this.checkSupportedDomain(domain)) {
            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                domain: domain,
            });
        }
        return namehash_1.eip137Namehash(domain);
    };
    Ens.prototype.childhash = function (parentHash, label) {
        return namehash_1.eip137Childhash(parentHash, label);
    };
    Ens.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.checkSupportedDomain(domain)];
            });
        });
    };
    Ens.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var namehash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        namehash = this.namehash(domain);
                        return [4 /*yield*/, this.callMethod(this.readerContract, 'owner', [namehash])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Ens.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var nodeHash, resolverAddr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nodeHash = this.namehash(domain);
                        return [4 /*yield*/, this.callMethod(this.readerContract, 'resolver', [nodeHash])];
                    case 1:
                        resolverAddr = _a.sent();
                        if (utils_1.isNullAddress(resolverAddr)) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver);
                        }
                        return [2 /*return*/, resolverAddr];
                }
            });
        });
    };
    Ens.prototype.record = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            var returnee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [key])];
                    case 1:
                        returnee = (_a.sent())[key];
                        if (!returnee) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                domain: domain,
                                recordName: key,
                            });
                        }
                        return [2 /*return*/, returnee];
                }
            });
        });
    };
    Ens.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var values;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(keys.map(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var ticker, ensRecordName;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!key.startsWith('crypto.')) return [3 /*break*/, 2];
                                        ticker = key.split('.')[1];
                                        return [4 /*yield*/, this.addr(domain, ticker)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2:
                                        if (!(key === 'ipfs.html.value' || key === 'dweb.ipfs.hash')) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.getContentHash(domain)];
                                    case 3: return [2 /*return*/, _a.sent()];
                                    case 4:
                                        ensRecordName = this.fromUDRecordNameToENS(key);
                                        return [4 /*yield*/, this.getTextRecord(domain, ensRecordName)];
                                    case 5: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); }))];
                    case 1:
                        values = _a.sent();
                        return [2 /*return*/, utils_1.constructRecords(keys, values)];
                }
            });
        });
    };
    Ens.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            var reverseAddress, nodeHash, resolverAddress, resolverContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (currencyTicker != 'ETH') {
                            throw new Error("Ens doesn't support any currency other than ETH");
                        }
                        if (address.startsWith('0x')) {
                            address = address.substr(2);
                        }
                        reverseAddress = address + '.addr.reverse';
                        nodeHash = this.namehash(reverseAddress);
                        return [4 /*yield*/, this.resolver(reverseAddress).catch(function (err) {
                                if (err.code === resolutionError_1.ResolutionErrorCode.UnspecifiedResolver) {
                                    return null;
                                }
                                throw err;
                            })];
                    case 1:
                        resolverAddress = _a.sent();
                        if (utils_1.isNullAddress(resolverAddress)) {
                            return [2 /*return*/, null];
                        }
                        resolverContract = new EthereumContract_1.default(resolver_1.default(resolverAddress, types_1.EthCoinIndex), resolverAddress, this.provider);
                        return [4 /*yield*/, this.resolverCallToName(resolverContract, nodeHash)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Ens.prototype.getTokenUri = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    method: publicTypes_1.NamingServiceName.ENS,
                    methodName: 'getTokenUri',
                });
            });
        });
    };
    Ens.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isRegistered(domain)];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    Ens.prototype.registryAddress = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.readerContract.address];
            });
        });
    };
    Ens.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.owner(domain)];
                    case 1:
                        address = _a.sent();
                        return [2 /*return*/, !utils_1.isNullAddress(address)];
                }
            });
        });
    };
    Ens.prototype.getDomainFromTokenId = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    method: publicTypes_1.NamingServiceName.ENS,
                    methodName: 'getDomainFromTokenId',
                });
            });
        });
    };
    /**
     * This was done to make automated tests more configurable
     */
    Ens.prototype.resolverCallToName = function (resolverContract, nodeHash) {
        return this.callMethod(resolverContract, 'name', [nodeHash]);
    };
    Ens.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    domain: domain,
                    methodName: 'twitter',
                });
            });
        });
    };
    Ens.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    domain: domain,
                    methodName: 'allRecords',
                });
            });
        });
    };
    Ens.prototype.getCoinType = function (currencyTicker) {
        var bip44constants = requireOrFail_1.requireOrFail('bip44-constants', 'bip44-constants', '^8.0.5');
        var formatsByCoinType = requireOrFail_1.requireOrFail('@ensdomains/address-encoder', '@ensdomains/address-encoder', '>= 0.1.x <= 0.2.x').formatsByCoinType;
        var coin = bip44constants.findIndex(function (item) {
            return item[1] === currencyTicker.toUpperCase() ||
                item[2] === currencyTicker.toUpperCase();
        });
        if (coin < 0 || !formatsByCoinType[coin]) {
            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedCurrency, {
                currencyTicker: currencyTicker,
            });
        }
        return coin.toString();
    };
    Ens.prototype.fromUDRecordNameToENS = function (record) {
        var mapper = {
            'ipfs.redirect_domain.value': 'url',
            'browser.redirect_url': 'url',
            'whois.email.value': 'email',
            'gundb.username.value': 'gundb_username',
            'gundb.public_key.value': 'gundb_public_key',
        };
        return mapper[record] || record;
    };
    Ens.prototype.addr = function (domain, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver, owner, cointType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolver(domain).catch(function (err) {
                            if (err.code !== resolutionError_1.ResolutionErrorCode.UnspecifiedResolver) {
                                throw err;
                            }
                        })];
                    case 1:
                        resolver = _a.sent();
                        if (!!resolver) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.owner(domain)];
                    case 2:
                        owner = _a.sent();
                        if (utils_1.isNullAddress(owner)) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                            domain: domain,
                        });
                    case 3:
                        cointType = this.getCoinType(currencyTicker.toUpperCase());
                        return [4 /*yield*/, this.fetchAddress(resolver, domain, cointType)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Ens.prototype.fetchAddress = function (resolver, domain, coinType) {
        return __awaiter(this, void 0, void 0, function () {
            var formatsByCoinType, resolverContract, nodeHash, addr, _a, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        formatsByCoinType = requireOrFail_1.requireOrFail('@ensdomains/address-encoder', '@ensdomains/address-encoder', '>= 0.1.x <= 0.2.x').formatsByCoinType;
                        resolverContract = new EthereumContract_1.default(resolver_1.default(resolver, coinType), resolver, this.provider);
                        nodeHash = this.namehash(domain);
                        if (!(coinType !== types_1.EthCoinIndex)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.callMethod(resolverContract, 'addr', [nodeHash, coinType])];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.callMethod(resolverContract, 'addr', [nodeHash])];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4:
                        addr = _a;
                        if (utils_1.isNullAddress(addr)) {
                            return [2 /*return*/, undefined];
                        }
                        data = Buffer.from(addr.replace('0x', ''), 'hex');
                        return [2 /*return*/, formatsByCoinType[coinType].encoder(data)];
                }
            });
        });
    };
    Ens.prototype.getTextRecord = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            var nodeHash, resolver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nodeHash = this.namehash(domain);
                        return [4 /*yield*/, this.getResolverContract(domain)];
                    case 1:
                        resolver = _a.sent();
                        return [4 /*yield*/, this.callMethod(resolver, 'text', [nodeHash, key])];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Ens.prototype.getContentHash = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var contentHash, nodeHash, resolverContract, contentHashEncoded, codec;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contentHash = requireOrFail_1.requireOrFail('content-hash', 'content-hash', '^2.5.2');
                        nodeHash = this.namehash(domain);
                        return [4 /*yield*/, this.getResolverContract(domain)];
                    case 1:
                        resolverContract = _a.sent();
                        return [4 /*yield*/, this.callMethod(resolverContract, 'contenthash', [nodeHash])];
                    case 2:
                        contentHashEncoded = _a.sent();
                        codec = contentHash.getCodec(contentHashEncoded);
                        if (codec !== 'ipfs-ns') {
                            return [2 /*return*/, undefined];
                        }
                        return [2 /*return*/, contentHash.decode(contentHashEncoded)];
                }
            });
        });
    };
    Ens.prototype.getResolverContract = function (domain, coinType) {
        return __awaiter(this, void 0, void 0, function () {
            var resolverAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolver(domain)];
                    case 1:
                        resolverAddress = _a.sent();
                        return [2 /*return*/, new EthereumContract_1.default(resolver_1.default(resolverAddress, coinType), resolverAddress, this.provider)];
                }
            });
        });
    };
    Ens.prototype.callMethod = function (contract, method, params) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, contract.call(method, params)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    Ens.prototype.checkSupportedDomain = function (domain) {
        return (domain === 'eth' ||
            (/^[^-]*[^-]*\.(eth|luxe|xyz|kred|addr\.reverse)$/.test(domain) &&
                domain.split('.').every(function (v) { return !!v.length; })));
    };
    Ens.prototype.checkNetworkConfig = function (source) {
        if (!source.network) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnsupportedNetwork, {
                method: this.name,
            });
        }
        if (!types_1.EnsSupportedNetwork.guard(source.network)) {
            this.checkCustomNetworkConfig(source);
        }
    };
    Ens.prototype.checkCustomNetworkConfig = function (source) {
        if (!this.isValidRegistryAddress(source.registryAddress)) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.InvalidConfigurationField, {
                method: this.name,
                field: 'registryAddress',
            });
        }
        if (!source['url'] && !source['provider']) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: this.name,
                config: 'url or provider',
            });
        }
    };
    Ens.prototype.isValidRegistryAddress = function (address) {
        if (!address) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: this.name,
                config: 'registryAddress',
            });
        }
        var ethLikePattern = new RegExp('^0x[a-fA-F0-9]{40}$');
        return ethLikePattern.test(address);
    };
    Ens.UrlMap = {
        1: 'https://mainnet.infura.io/v3/d423cf2499584d7fbe171e33b42cfbee',
        3: 'https://ropsten.infura.io/v3/d423cf2499584d7fbe171e33b42cfbee',
        4: 'https://rinkeby.infura.io/v3/d423cf2499584d7fbe171e33b42cfbee',
    };
    return Ens;
}(NamingService_1.NamingService));
exports.default = Ens;


/***/ }),

/***/ 78311:
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var resolutionError_1 = __importStar(__webpack_require__(68942));
var Networking_1 = __importDefault(__webpack_require__(14790));
var FetchProvider = /** @class */ (function () {
    function FetchProvider(name, url) {
        this.url = url;
        this.name = name;
    }
    // This is used for test mocking
    FetchProvider.factory = function (name, url) {
        return new this(name, url);
    };
    FetchProvider.prototype.request = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetchJson(args)];
                    case 1:
                        json = _a.sent();
                        if (json.error) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                providerMessage: json.error.message,
                            });
                        }
                        return [2 /*return*/, json.result];
                }
            });
        });
    };
    FetchProvider.prototype.fetchJson = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Networking_1.default.fetch(this.url, {
                            method: 'POST',
                            body: JSON.stringify({
                                jsonrpc: '2.0',
                                id: '1',
                                method: args.method,
                                params: args.params || [],
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                    case 1:
                        response = _a.sent();
                        if (response.status !== 200) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                providerMessage: "Request to " + this.url + " failed with responce status " + response.status,
                            });
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    return FetchProvider;
}());
exports.default = FetchProvider;


/***/ }),

/***/ 99445:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * @internal
 */
var NamingService = /** @class */ (function () {
    function NamingService() {
    }
    return NamingService;
}());
exports.NamingService = NamingService;


/***/ }),

/***/ 35960:
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var bn_js_1 = __importDefault(__webpack_require__(28891));
var Ens_1 = __importDefault(__webpack_require__(9439));
var Zns_1 = __importDefault(__webpack_require__(59848));
var Uns_1 = __importDefault(__webpack_require__(38183));
var UdApi_1 = __importDefault(__webpack_require__(70961));
var publicTypes_1 = __webpack_require__(52530);
var resolutionError_1 = __importStar(__webpack_require__(68942));
var DnsUtils_1 = __importDefault(__webpack_require__(41955));
var utils_1 = __webpack_require__(15433);
var Eip1993Factories_1 = __webpack_require__(677);
var configurationError_1 = __importDefault(__webpack_require__(90319));
var configurationError_2 = __webpack_require__(90319);
var Networking_1 = __importDefault(__webpack_require__(14790));
/**
 * Blockchain domain Resolution library - Resolution.
 * @example
 * ```
 * import Resolution from '@unstoppabledomains/resolution';
 *
 * let resolution = new Resolution({ blockchain: {
 *        uns: {
 *           url: "https://mainnet.infura.io/v3/12351245223",
 *           network: "mainnet"
 *        }
 *      }
 *   });
 *
 * let domain = "brad.zil";
 * resolution.addr(domain, "eth").then(addr => console.log(addr));;
 * ```
 */
var Resolution = /** @class */ (function () {
    function Resolution(_a) {
        var _b;
        var _c = (_a === void 0 ? {} : _a).sourceConfig, sourceConfig = _c === void 0 ? undefined : _c;
        var ens = isApi(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.ens)
            ? new UdApi_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.ens)
            : new Ens_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.ens);
        var uns = isApi(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.uns)
            ? new UdApi_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.uns)
            : new Uns_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.uns);
        var zns = isApi(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.zns)
            ? new UdApi_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.zns)
            : new Zns_1.default(sourceConfig === null || sourceConfig === void 0 ? void 0 : sourceConfig.zns);
        this.serviceMap = (_b = {},
            _b[publicTypes_1.NamingServiceName.UNS] = uns,
            _b[publicTypes_1.NamingServiceName.ZNS] = zns,
            _b[publicTypes_1.NamingServiceName.ENS] = ens,
            _b);
    }
    /**
     * AutoConfigure the blockchain network between different testnets for ENS and UNS
     * We make a "net_version" JSON RPC call to the blockchain either via url or with the help of given provider.
     * @param sourceConfig - configuration object for ens and uns
     * @returns configured Resolution object
     */
    Resolution.autoNetwork = function (sourceConfig) {
        return __awaiter(this, void 0, void 0, function () {
            var resolution, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        resolution = new this();
                        if (!sourceConfig.uns && !sourceConfig.ens) {
                            throw new configurationError_1.default(configurationError_2.ConfigurationErrorCode.UnsupportedNetwork);
                        }
                        if (!sourceConfig.uns) return [3 /*break*/, 2];
                        _a = resolution.serviceMap;
                        _b = publicTypes_1.NamingServiceName.UNS;
                        return [4 /*yield*/, Uns_1.default.autoNetwork(sourceConfig.uns)];
                    case 1:
                        _a[_b] = _e.sent();
                        _e.label = 2;
                    case 2:
                        if (!sourceConfig.ens) return [3 /*break*/, 4];
                        _c = resolution.serviceMap;
                        _d = publicTypes_1.NamingServiceName.ENS;
                        return [4 /*yield*/, Ens_1.default.autoNetwork(sourceConfig.ens)];
                    case 3:
                        _c[_d] = _e.sent();
                        _e.label = 4;
                    case 4: return [2 /*return*/, resolution];
                }
            });
        });
    };
    /**
     * Creates a resolution with configured infura id for ens and uns
     * @param infura - infura project id
     * @param networks - an optional object that describes what network to use when connecting ENS or UNS default is mainnet
     */
    Resolution.infura = function (infura, networks) {
        var _a, _b, _c, _d;
        return new this({
            sourceConfig: {
                ens: {
                    url: utils_1.signedInfuraLink(infura, (_a = networks === null || networks === void 0 ? void 0 : networks.ens) === null || _a === void 0 ? void 0 : _a.network),
                    network: ((_b = networks === null || networks === void 0 ? void 0 : networks.ens) === null || _b === void 0 ? void 0 : _b.network) || 'mainnet',
                },
                uns: {
                    url: utils_1.signedInfuraLink(infura, (_c = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _c === void 0 ? void 0 : _c.network),
                    network: ((_d = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _d === void 0 ? void 0 : _d.network) || 'mainnet',
                },
            },
        });
    };
    /**
     * Creates a resolution instance with configured provider
     * @param provider - any provider compatible with EIP-1193
     * @param networks - an object that describes what network to use when connecting ENS, UNS, or ZNS default is mainnet
     * @see https://eips.ethereum.org/EIPS/eip-1193
     */
    Resolution.fromResolutionProvider = function (provider, networks) {
        if (networks.ens || networks.uns) {
            return this.fromEthereumEip1193Provider(provider, networks);
        }
        if (networks.zns) {
            return this.fromZilliqaProvider(provider, networks);
        }
        throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
            providerMessage: 'Must specify network for ens, uns, or zns',
        });
    };
    /**
     * Creates a resolution instance with configured provider
     * @param provider - any provider compatible with EIP-1193
     * @param networks - an optional object that describes what network to use when connecting ENS or UNS default is mainnet
     * @see https://eips.ethereum.org/EIPS/eip-1193
     */
    Resolution.fromEthereumEip1193Provider = function (provider, networks) {
        var _a, _b;
        return new this({
            sourceConfig: {
                ens: { provider: provider, network: ((_a = networks === null || networks === void 0 ? void 0 : networks.ens) === null || _a === void 0 ? void 0 : _a.network) || 'mainnet' },
                uns: { provider: provider, network: ((_b = networks === null || networks === void 0 ? void 0 : networks.uns) === null || _b === void 0 ? void 0 : _b.network) || 'mainnet' },
            },
        });
    };
    /**
     * Creates a resolution instance with configured provider
     * @param provider - any provider compatible with EIP-1193
     * @param networks - an optional object that describes what network to use when connecting ZNS default is mainnet
     * @see https://eips.ethereum.org/EIPS/eip-1193
     */
    Resolution.fromZilliqaProvider = function (provider, networks) {
        var _a;
        return new this({
            sourceConfig: {
                zns: { provider: provider, network: ((_a = networks === null || networks === void 0 ? void 0 : networks.zns) === null || _a === void 0 ? void 0 : _a.network) || 'mainnet' },
            },
        });
    };
    /**
     * Create a resolution instance from web3 0.x version provider
     * @param provider - an 0.x version provider from web3 ( must implement sendAsync(payload, callback) )
     * @param networks - Ethereum network configuration
     * @see https://github.com/ethereum/web3.js/blob/0.20.7/lib/web3/httpprovider.js#L116
     */
    Resolution.fromWeb3Version0Provider = function (provider, networks) {
        return this.fromEthereumEip1193Provider(Eip1993Factories_1.Eip1993Factories.fromWeb3Version0Provider(provider), networks);
    };
    /**
     * Create a resolution instance from web3 1.x version provider
     * @param provider - an 1.x version provider from web3 ( must implement send(payload, callback) )
     * @param networks - an optional object that describes what network to use when connecting ENS or UNS default is mainnet
     * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-core-helpers/types/index.d.ts#L165
     * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-providers-http/src/index.js#L95
     */
    Resolution.fromWeb3Version1Provider = function (provider, networks) {
        return this.fromEthereumEip1193Provider(Eip1993Factories_1.Eip1993Factories.fromWeb3Version1Provider(provider), networks);
    };
    /**
     * Creates instance of resolution from provider that implements Ethers Provider#call interface.
     * This wrapper support only `eth_call` method for now, which is enough for all the current Resolution functionality
     * @param provider - provider object
     * @param networks - an optional object that describes what network to use when connecting ENS or UNS default is mainnet
     * @see https://github.com/ethers-io/ethers.js/blob/v4-legacy/providers/abstract-provider.d.ts#L91
     * @see https://github.com/ethers-io/ethers.js/blob/v5.0.4/packages/abstract-provider/src.ts/index.ts#L224
     * @see https://docs.ethers.io/ethers.js/v5-beta/api-providers.html#jsonrpcprovider-inherits-from-provider
     * @see https://github.com/ethers-io/ethers.js/blob/master/packages/providers/src.ts/json-rpc-provider.ts
     */
    Resolution.fromEthersProvider = function (provider, networks) {
        return this.fromEthereumEip1193Provider(Eip1993Factories_1.Eip1993Factories.fromEthersProvider(provider), networks);
    };
    /**
     * Resolves given domain name to a specific currency address if exists
     * @async
     * @param domain - domain name to be resolved
     * @param ticker - currency ticker like BTC, ETH, ZIL
     * @throws [[ResolutionError]] if address is not found
     * @returns A promise that resolves in an address
     */
    Resolution.prototype.addr = function (domain, ticker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.record(domain, "crypto." + ticker.toUpperCase() + ".address")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Read multi-chain currency address if exists
     * @async
     * @param domain - domain name to be resolved
     * @param ticker - currency ticker (USDT, FTM, etc.)
     * @param chain - chain version, usually means blockchain ( ERC20, BEP2, OMNI, etc. )
     * @throws [[ResolutionError]] if address is not found
     * @returns A promise that resolves in an adress
     */
    Resolution.prototype.multiChainAddr = function (domain, ticker, chain) {
        return __awaiter(this, void 0, void 0, function () {
            var method, recordKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        method = this.getNamingMethodOrThrow(domain);
                        if (method.serviceName() === publicTypes_1.NamingServiceName.ENS) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                                methodName: publicTypes_1.NamingServiceName.ENS,
                                domain: domain,
                            });
                        }
                        recordKey = "crypto." + ticker.toUpperCase() + ".version." + chain.toUpperCase() + ".address";
                        return [4 /*yield*/, method.record(domain, recordKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Resolves given domain name to a verified twitter handle
     * @async
     * @param domain - domain name to be resolved
     * @throws [[ResolutionError]] if twitter is not found
     * @returns A promise that resolves in a verified twitter handle
     */
    Resolution.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                domain = this.prepareDomain(domain);
                method = this.getNamingMethodOrThrow(domain);
                return [2 /*return*/, method.twitter(domain)];
            });
        });
    };
    /**
     * Resolve a chat id from the domain record
     * @param domain - domain name to be resolved
     * @throws [[ResolutionError]]
     * @returns A promise that resolves in chatId
     */
    Resolution.prototype.chatId = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.record(domain, 'gundb.username.value')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Resolve a gundb public key from the domain record
     * @param domain - domain name to be resolved
     * @throws [[ResolutionError]]
     * @returns a promise that resolves in gundb public key
     */
    Resolution.prototype.chatPk = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.record(domain, 'gundb.public_key.value')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Resolves the IPFS hash configured for domain records on ZNS
     * @param domain - domain name
     * @throws [[ResolutionError]]
     */
    Resolution.prototype.ipfsHash = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        return [4 /*yield*/, this.getPreferableNewRecord(domain, 'dweb.ipfs.hash', 'ipfs.html.value')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Resolves the httpUrl attached to domain
     * @param domain - domain name
     */
    Resolution.prototype.httpUrl = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        return [4 /*yield*/, this.getPreferableNewRecord(domain, 'browser.redirect_url', 'ipfs.redirect_domain.value')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Resolves the ipfs email field from whois configurations
     * @param domain - domain name
     * @throws [[ResolutionError]]
     * @returns A Promise that resolves in an email address configured for this domain whois
     */
    Resolution.prototype.email = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.record(domain, 'whois.email.value')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @returns the resolver address for a specific domain
     * @param domain - domain to look for
     */
    Resolution.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        return [4 /*yield*/, this.getNamingMethodOrThrow(domain).resolver(domain)];
                    case 1:
                        resolver = _a.sent();
                        if (!resolver) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, resolver];
                }
            });
        });
    };
    /**
     * @param domain - domain name
     * @returns An owner address of the domain
     */
    Resolution.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        method = this.getNamingMethodOrThrow(domain);
                        return [4 /*yield*/, method.owner(domain)];
                    case 1: return [2 /*return*/, (_a.sent()) || null];
                }
            });
        });
    };
    /**
     * @param domain - domain name
     * @param recordKey - a name of a record to be resolved
     * @returns A record value promise for a given record name
     */
    Resolution.prototype.record = function (domain, recordKey) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        method = this.getNamingMethodOrThrow(domain);
                        return [4 /*yield*/, method.record(domain, recordKey)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param domain domain name
     * @param keys Array of record keys to be resolved
     * @returns A Promise with key-value mapping of domain records
     */
    Resolution.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        method = this.getNamingMethodOrThrow(domain);
                        return [4 /*yield*/, method.records(domain, keys)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param domain domain name
     * @returns A Promise of whether or not the domain belongs to a wallet
     */
    Resolution.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        method = this.getNamingMethodOrThrow(domain);
                        return [4 /*yield*/, method.isRegistered(domain)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param domain domain name
     * @returns A Promise of whether or not the domain is available
     */
    Resolution.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        method = this.getNamingMethodOrThrow(domain);
                        return [4 /*yield*/, method.isAvailable(domain)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * This method is only for ens at the moment. Reverse the ens address to a ens registered domain name
     * @async
     * @param address - address you wish to reverse
     * @param currencyTicker - currency ticker like BTC, ETH, ZIL
     * @returns Domain name attached to this address
     */
    Resolution.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.serviceMap[publicTypes_1.NamingServiceName.ENS].reverse(address, currencyTicker)];
            });
        });
    };
    /**
     * @returns Produces a namehash from supported naming service in hex format with 0x prefix.
     * Corresponds to ERC721 token id in case of Ethereum based naming service like ENS or UNS.
     * @param domain domain name to be converted
     * @param options formatting options
     * @throws [[ResolutionError]] with UnsupportedDomain error code if domain extension is unknown
     */
    Resolution.prototype.namehash = function (domain, options) {
        if (options === void 0) { options = publicTypes_1.NamehashOptionsDefault; }
        domain = this.prepareDomain(domain);
        return this.formatNamehash(this.getNamingMethodOrThrow(domain).namehash(domain), options);
    };
    /**
     * @returns a namehash of a subdomain with name label
     * @param parent namehash of a parent domain
     * @param label subdomain name
     * @param namingService "ENS", "UNS" or "ZNS"
     * @param options formatting options
     */
    Resolution.prototype.childhash = function (parent, label, namingService, options) {
        if (options === void 0) { options = publicTypes_1.NamehashOptionsDefault; }
        var service = this.serviceMap[namingService];
        if (!service) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedService, {
                namingService: namingService,
            });
        }
        return this.formatNamehash(service.childhash(parent, label), options);
    };
    Resolution.prototype.formatNamehash = function (hash, options) {
        hash = hash.replace('0x', '');
        if (options.format === 'dec') {
            return new bn_js_1.default(hash, 'hex').toString(10);
        }
        else {
            return options.prefix ? '0x' + hash : hash;
        }
    };
    /**
     * Checks weather the domain name matches the hash
     * @param domain - domain name to check againt
     * @param hash - hash obtained from the blockchain
     */
    Resolution.prototype.isValidHash = function (domain, hash) {
        domain = this.prepareDomain(domain);
        return this.namehash(domain) === hash;
    };
    /**
     * Checks if the domain name is valid according to naming service rules
     * for valid domain names.
     * Example: ENS doesn't allow domains that start from '-' symbol.
     * @param domain - domain name to be checked
     */
    Resolution.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var namingMethod, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        namingMethod = this.getNamingMethod(domain);
                        if (!namingMethod) return [3 /*break*/, 2];
                        return [4 /*yield*/, namingMethod.isSupportedDomain(domain)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = false;
                        _b.label = 3;
                    case 3: return [2 /*return*/, _a];
                }
            });
        });
    };
    /**
     * Returns the name of the service for a domain ENS | UNS | ZNS
     * @param domain - domain name to look for
     */
    Resolution.prototype.serviceName = function (domain) {
        domain = this.prepareDomain(domain);
        return this.getNamingMethodOrThrow(domain).serviceName();
    };
    /**
     * Returns all record keys of the domain.
     * This method is strongly unrecommended for production use due to lack of support for many ethereum service providers and low performance
     * Method is not supported by ENS
     * @param domain - domain name
     */
    Resolution.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domain = this.prepareDomain(domain);
                        return [4 /*yield*/, this.getNamingMethodOrThrow(domain).allRecords(domain)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Resolution.prototype.dns = function (domain, types) {
        return __awaiter(this, void 0, void 0, function () {
            var dnsUtils, method, dnsRecordKeys, blockchainData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dnsUtils = new DnsUtils_1.default();
                        domain = this.prepareDomain(domain);
                        method = this.getNamingMethodOrThrow(domain);
                        dnsRecordKeys = this.getDnsRecordKeys(types);
                        return [4 /*yield*/, method.records(domain, dnsRecordKeys)];
                    case 1:
                        blockchainData = _a.sent();
                        return [2 /*return*/, dnsUtils.toList(blockchainData)];
                }
            });
        });
    };
    /**
     * Retrieves the tokenURI from the registry smart contract.
     * @returns the ERC721Metadata#tokenURI contract method result
     * @param domain - domain name
     */
    Resolution.prototype.tokenURI = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var namehash;
            return __generator(this, function (_a) {
                namehash = this.namehash(domain);
                return [2 /*return*/, this.getNamingMethodOrThrow(domain).getTokenUri(namehash)];
            });
        });
    };
    /**
     * Retrieves the data from the endpoint provided by tokenURI from the registry smart contract.
     * @returns the JSON response of the token URI endpoint
     * @param domain - domain name
     */
    Resolution.prototype.tokenURIMetadata = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUri;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tokenURI(domain)];
                    case 1:
                        tokenUri = _a.sent();
                        return [2 /*return*/, this.getMetadataFromTokenURI(tokenUri)];
                }
            });
        });
    };
    /**
     * Retrieves address of registry contract used for domain
     * @param domain - domain name
     * @returns Registry contract address
     */
    Resolution.prototype.registryAddress = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                method = this.getNamingMethodOrThrow(domain);
                return [2 /*return*/, method.registryAddress(domain)];
            });
        });
    };
    /**
     * Retrieves the domain name from tokenId by parsing registry smart contract event logs.
     * @throws {ResolutionError} if returned domain name doesn't match the original namhash.
     * @returns the domain name retrieved from token metadata
     * @param hash - domain hash
     * @param service - nameservice which is used for lookup
     */
    Resolution.prototype.unhash = function (hash, service) {
        return __awaiter(this, void 0, void 0, function () {
            var name;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.serviceMap[service].getDomainFromTokenId(hash)];
                    case 1:
                        name = _a.sent();
                        if (this.namehash(name) !== hash) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                                methodName: 'unhash',
                                domain: name,
                                providerMessage: 'Service provider returned an invalid domain name',
                            });
                        }
                        return [2 /*return*/, name];
                }
            });
        });
    };
    Resolution.prototype.getMetadataFromTokenURI = function (tokenUri) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, Networking_1.default.fetch(tokenUri, {})];
                    case 1:
                        resp = _d.sent();
                        if (!resp.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, resp.json()];
                    case 2: return [2 /*return*/, _d.sent()];
                    case 3:
                        _a = resolutionError_1.default.bind;
                        _b = [void 0, resolutionError_1.ResolutionErrorCode.ServiceProviderError];
                        _c = {};
                        return [4 /*yield*/, resp.text()];
                    case 4: throw new (_a.apply(resolutionError_1.default, _b.concat([(_c.providerMessage = _d.sent(),
                            _c.method = 'UDAPI',
                            _c.methodName = 'tokenURIMetadata',
                            _c)])))();
                }
            });
        });
    };
    Resolution.prototype.getDnsRecordKeys = function (types) {
        var records = ['dns.ttl'];
        types.forEach(function (type) {
            records.push("dns." + type);
            records.push("dns." + type + ".ttl");
        });
        return records;
    };
    Resolution.prototype.getPreferableNewRecord = function (domain, newRecord, oldRecord) {
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [newRecord, oldRecord])];
                    case 1:
                        records = _a.sent();
                        if (!records[newRecord] && !records[oldRecord]) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: newRecord,
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, records[newRecord] || records[oldRecord]];
                }
            });
        });
    };
    Resolution.prototype.getNamingMethod = function (domain) {
        return this.serviceMap[utils_1.findNamingServiceName(domain)];
    };
    Resolution.prototype.getNamingMethodOrThrow = function (domain) {
        var method = this.getNamingMethod(domain);
        if (!method) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                domain: domain,
            });
        }
        return method;
    };
    Resolution.prototype.prepareDomain = function (domain) {
        return domain ? domain.trim().toLowerCase() : '';
    };
    return Resolution;
}());
exports.Resolution = Resolution;
exports.default = Resolution;
function isApi(obj) {
    return obj && obj.api;
}


/***/ }),

/***/ 70961:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var znsUtils_1 = __webpack_require__(72367);
var resolutionError_1 = __webpack_require__(68942);
var package_json_1 = __importDefault(__webpack_require__(13636));
var TwitterSignatureValidator_1 = __webpack_require__(94733);
var publicTypes_1 = __webpack_require__(52530);
var Networking_1 = __importDefault(__webpack_require__(14790));
var utils_1 = __webpack_require__(15433);
var namehash_1 = __webpack_require__(2817);
var NamingService_1 = __webpack_require__(99445);
/**
 * @internal
 */
var Udapi = /** @class */ (function (_super) {
    __extends(Udapi, _super);
    function Udapi(api) {
        var _this = _super.call(this) || this;
        _this.name = 'UDAPI';
        _this.url = (api === null || api === void 0 ? void 0 : api.url) || 'https://unstoppabledomains.com/api/v1';
        var DefaultUserAgent = Networking_1.default.isNode()
            ? 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)'
            : navigator.userAgent;
        var version = package_json_1.default.version;
        var CustomUserAgent = DefaultUserAgent + " Resolution/" + version;
        _this.headers = { 'X-user-agent': CustomUserAgent };
        _this.network = (api === null || api === void 0 ? void 0 : api.network) || 1;
        return _this;
    }
    Udapi.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'isSupportedDomain',
                });
            });
        });
    };
    Udapi.prototype.namehash = function (domain) {
        var serviceName = utils_1.findNamingServiceName(domain);
        if (serviceName === publicTypes_1.NamingServiceName.ZNS) {
            return namehash_1.znsNamehash(domain);
        }
        return namehash_1.eip137Namehash(domain);
    };
    Udapi.prototype.childhash = function (parentHash, label) {
        throw new Error('Unsupported method whe using UD Resolution API');
    };
    Udapi.prototype.record = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [key])];
                    case 1: return [2 /*return*/, (_a.sent())[key]];
                }
            });
        });
    };
    Udapi.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allRecords(domain)];
                    case 1:
                        records = _a.sent();
                        return [2 /*return*/, utils_1.constructRecords(keys, records)];
                }
            });
        });
    };
    Udapi.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var owner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        owner = (_a.sent()).meta.owner;
                        if (!owner) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        if (domain.endsWith('.zil')) {
                            return [2 /*return*/, owner.startsWith('zil1') ? owner : znsUtils_1.toBech32Address(owner)];
                        }
                        return [2 /*return*/, owner];
                }
            });
        });
    };
    Udapi.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var serviceName, domainMetaData, owner, records, validationSignature, twitterHandle;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        serviceName = utils_1.findNamingServiceName(domain);
                        if (serviceName !== publicTypes_1.NamingServiceName.UNS) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                                domain: domain,
                                methodName: 'twitter',
                            });
                        }
                        return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        domainMetaData = _a.sent();
                        if (!domainMetaData.meta.owner) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        owner = domainMetaData.meta.owner;
                        records = domainMetaData.records || {};
                        validationSignature = records['validation.social.twitter.username'];
                        twitterHandle = records['social.twitter.username'];
                        if (!validationSignature) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: 'validation.social.twitter.username',
                                domain: domain,
                            });
                        }
                        if (!twitterHandle) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: 'social.twitter.username',
                                domain: domain,
                            });
                        }
                        if (!TwitterSignatureValidator_1.isValidTwitterSignature({
                            tokenId: domainMetaData.meta.namehash,
                            owner: owner,
                            twitterHandle: twitterHandle,
                            validationSignature: validationSignature,
                        })) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.InvalidTwitterVerification, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, twitterHandle];
                }
            });
        });
    };
    Udapi.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1: return [2 /*return*/, (_a.sent()).records || {}];
                }
            });
        });
    };
    Udapi.prototype.getDomainFromTokenId = function (tokenId) {
        throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
            methodName: 'isSupportedDomain',
        });
    };
    Udapi.prototype.resolve = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Networking_1.default.fetch(this.url + "/" + domain, {
                            method: 'GET',
                            headers: this.headers,
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    Udapi.prototype.serviceName = function () {
        return this.name;
    };
    Udapi.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, record.meta.resolver];
                }
            });
        });
    };
    Udapi.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverse',
                });
            });
        });
    };
    Udapi.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolve(domain)];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, !utils_1.isNullAddress(record.meta.owner)];
                }
            });
        });
    };
    Udapi.prototype.getTokenUri = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'getTokenUri',
                });
            });
        });
    };
    Udapi.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isRegistered(domain)];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    Udapi.prototype.registryAddress = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    domain: domain,
                    methodName: 'registryAddress',
                });
            });
        });
    };
    Udapi.ZnsRegistryMap = {
        1: 'zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz',
    };
    return Udapi;
}(NamingService_1.NamingService));
exports.default = Udapi;


/***/ }),

/***/ 38183:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(51376);
var proxyReader_1 = __importDefault(__webpack_require__(43417));
var registry_1 = __importDefault(__webpack_require__(53122));
var resolver_1 = __importDefault(__webpack_require__(8143));
var resolutionError_1 = __importStar(__webpack_require__(68942));
var EthereumContract_1 = __importDefault(__webpack_require__(59750));
var utils_1 = __webpack_require__(15433);
var publicTypes_1 = __webpack_require__(52530);
var TwitterSignatureValidator_1 = __webpack_require__(94733);
var uns_config_json_1 = __importDefault(__webpack_require__(27370));
var FetchProvider_1 = __importDefault(__webpack_require__(78311));
var namehash_1 = __webpack_require__(2817);
var NamingService_1 = __webpack_require__(99445);
var configurationError_1 = __importStar(__webpack_require__(90319));
var supported_keys_json_1 = __importDefault(__webpack_require__(45));
var abi_1 = __webpack_require__(39861);
/**
 * @internal
 */
var Uns = /** @class */ (function (_super) {
    __extends(Uns, _super);
    function Uns(source) {
        var _this = _super.call(this) || this;
        _this.name = publicTypes_1.NamingServiceName.UNS;
        if (!source) {
            source = {
                url: Uns.UrlMap[1],
                network: 'mainnet',
            };
        }
        _this.checkNetworkConfig(source);
        _this.network = utils_1.EthereumNetworks[source.network];
        _this.url = source['url'] || Uns.UrlMap[_this.network];
        _this.provider =
            source['provider'] || new FetchProvider_1.default(_this.name, _this.url);
        _this.readerContract = new EthereumContract_1.default(proxyReader_1.default, source['proxyReaderAddress'] || Uns.ProxyReaderMap[_this.network], _this.provider);
        return _this;
    }
    Uns.autoNetwork = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var provider, networkId, networkName;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (types_1.hasProvider(config)) {
                            provider = config.provider;
                        }
                        else {
                            if (!config.url) {
                                throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnspecifiedUrl, {
                                    method: publicTypes_1.NamingServiceName.UNS,
                                });
                            }
                            provider = FetchProvider_1.default.factory(publicTypes_1.NamingServiceName.UNS, config.url);
                        }
                        return [4 /*yield*/, provider.request({
                                method: 'net_version',
                            })];
                    case 1:
                        networkId = (_a.sent());
                        networkName = utils_1.EthereumNetworksInverted[networkId];
                        if (!networkName || !types_1.UnsSupportedNetwork.guard(networkName)) {
                            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnsupportedNetwork, {
                                method: publicTypes_1.NamingServiceName.UNS,
                            });
                        }
                        return [2 /*return*/, new this({ network: networkName, provider: provider })];
                }
            });
        });
    };
    Uns.prototype.namehash = function (domain) {
        if (!this.checkDomain(domain)) {
            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                domain: domain,
            });
        }
        return namehash_1.eip137Namehash(domain);
    };
    Uns.prototype.childhash = function (parentHash, label) {
        return namehash_1.eip137Childhash(parentHash, label);
    };
    Uns.prototype.serviceName = function () {
        return this.name;
    };
    Uns.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tld, exists;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.checkDomain(domain)) {
                            return [2 /*return*/, false];
                        }
                        tld = domain.split('.').pop();
                        if (!tld) {
                            return [2 /*return*/, false];
                        }
                        return [4 /*yield*/, this.readerContract.call('exists', [
                                this.namehash(tld),
                            ])];
                    case 1:
                        exists = (_a.sent())[0];
                        return [2 /*return*/, exists];
                }
            });
        });
    };
    Uns.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVerifiedData(domain)];
                    case 1: return [2 /*return*/, (_a.sent()).owner];
                }
            });
        });
    };
    Uns.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVerifiedData(domain)];
                    case 1: return [2 /*return*/, (_a.sent()).resolver];
                }
            });
        });
    };
    Uns.prototype.record = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            var returnee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [key])];
                    case 1:
                        returnee = (_a.sent())[key];
                        if (!returnee) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                recordName: key,
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, returnee];
                }
            });
        });
    };
    Uns.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getVerifiedData(domain, keys)];
                    case 1: return [2 /*return*/, (_a.sent()).records];
                }
            });
        });
    };
    Uns.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, resolver, resolverContract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.resolver(domain)];
                    case 1:
                        resolver = _a.sent();
                        resolverContract = new EthereumContract_1.default(resolver_1.default, resolver, this.provider);
                        if (!this.isLegacyResolver(resolver)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getStandardRecords(tokenId)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, this.getAllRecords(resolverContract, tokenId)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Uns.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, keys, data, records, validationSignature, twitterHandle, owner;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        keys = [
                            'validation.social.twitter.username',
                            'social.twitter.username',
                        ];
                        return [4 /*yield*/, this.getVerifiedData(domain, keys)];
                    case 1:
                        data = _a.sent();
                        records = data.records;
                        validationSignature = records['validation.social.twitter.username'];
                        twitterHandle = records['social.twitter.username'];
                        if (utils_1.isNullAddress(validationSignature)) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                domain: domain,
                                recordName: 'validation.social.twitter.username',
                            });
                        }
                        if (!twitterHandle) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                domain: domain,
                                recordName: 'social.twitter.username',
                            });
                        }
                        owner = data.owner;
                        if (!TwitterSignatureValidator_1.isValidTwitterSignature({
                            tokenId: tokenId,
                            owner: owner,
                            twitterHandle: twitterHandle,
                            validationSignature: validationSignature,
                        })) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.InvalidTwitterVerification, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, twitterHandle];
                }
            });
        });
    };
    Uns.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverse',
                });
            });
        });
    };
    Uns.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.get(tokenId, [])];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, !utils_1.isNullAddress(data.owner)];
                }
            });
        });
    };
    Uns.prototype.getTokenUri = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenUri, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.readerContract.call('tokenURI', [tokenId])];
                    case 1:
                        tokenUri = (_a.sent())[0];
                        return [2 /*return*/, tokenUri];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1 instanceof resolutionError_1.default &&
                            error_1.code === resolutionError_1.ResolutionErrorCode.ServiceProviderError &&
                            error_1.message === '< execution reverted >') {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                method: publicTypes_1.NamingServiceName.UNS,
                                methodName: 'getTokenUri',
                            });
                        }
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Uns.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isRegistered(domain)];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    Uns.prototype.registryAddress = function (domainOrNamehash) {
        return __awaiter(this, void 0, void 0, function () {
            var namehash, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.checkDomain(domainOrNamehash, domainOrNamehash.startsWith('0x'))) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                                domain: domainOrNamehash,
                            });
                        }
                        namehash = domainOrNamehash.startsWith('0x')
                            ? domainOrNamehash
                            : this.namehash(domainOrNamehash);
                        return [4 /*yield*/, this.readerContract.call('registryOf', [namehash])];
                    case 1:
                        address = (_a.sent())[0];
                        if (address === types_1.NullAddress) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domainOrNamehash,
                            });
                        }
                        return [2 /*return*/, address];
                }
            });
        });
    };
    Uns.prototype.getDomainFromTokenId = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var registryAddress, registryContract, startingBlock, newURIEvents, rawData, decoded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.registryAddress(tokenId)];
                    case 1:
                        registryAddress = _a.sent();
                        registryContract = new EthereumContract_1.default(registry_1.default, registryAddress, this.provider);
                        startingBlock = this.getStartingBlockFromRegistry(registryAddress);
                        return [4 /*yield*/, registryContract.fetchLogs('NewURI', tokenId, startingBlock)];
                    case 2:
                        newURIEvents = _a.sent();
                        if (!newURIEvents || newURIEvents.length === 0) {
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: "with tokenId " + tokenId,
                            });
                        }
                        rawData = newURIEvents[newURIEvents.length - 1].data;
                        decoded = abi_1.Interface.getAbiCoder().decode(['string'], rawData);
                        return [2 /*return*/, decoded[decoded.length - 1]];
                }
            });
        });
    };
    Uns.prototype.getStartingBlockFromRegistry = function (registryAddress) {
        var contractDetails = Object.values(uns_config_json_1.default === null || uns_config_json_1.default === void 0 ? void 0 : uns_config_json_1.default.networks).reduce(function (acc, network) {
            var contracts = network.contracts;
            return __spreadArrays(acc, Object.values(contracts).map(function (c) { return ({
                address: c.address,
                deploymentBlock: c.deploymentBlock,
            }); }));
        }, []);
        var contractDetail = contractDetails.find(function (detail) { return detail.address === registryAddress; });
        if (!contractDetail || (contractDetail === null || contractDetail === void 0 ? void 0 : contractDetail.deploymentBlock) === '0x0') {
            return 'earliest';
        }
        return contractDetail.deploymentBlock;
    };
    Uns.prototype.getVerifiedData = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tokenId = this.namehash(domain);
                        return [4 /*yield*/, this.get(tokenId, keys)];
                    case 1:
                        data = _a.sent();
                        if (utils_1.isNullAddress(data.resolver)) {
                            if (utils_1.isNullAddress(data.owner)) {
                                throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                    domain: domain,
                                });
                            }
                            throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Uns.prototype.getStandardRecords = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var keys;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        keys = Object.keys(supported_keys_json_1.default.keys);
                        return [4 /*yield*/, this.getMany(tokenId, keys)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Uns.prototype.getAllRecords = function (resolverContract, tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var startingBlock, logs, keyTopics;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getStartingBlock(resolverContract, tokenId)];
                    case 1:
                        startingBlock = _a.sent();
                        return [4 /*yield*/, this.getNewKeyEvents(resolverContract, tokenId, startingBlock || 'earliest')];
                    case 2:
                        logs = _a.sent();
                        keyTopics = logs.map(function (event) { return event.topics[2]; });
                        if (!(keyTopics.length === 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.getStandardRecords(tokenId)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: return [4 /*yield*/, this.getManyByHash(tokenId, keyTopics)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Uns.prototype.getMany = function (tokenId, keys) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(tokenId, keys)];
                    case 1: return [2 /*return*/, (_a.sent()).records];
                }
            });
        });
    };
    Uns.prototype.getManyByHash = function (tokenId, hashes) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, keys, values;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.readerContract.call('getManyByHash', [
                            hashes,
                            tokenId,
                        ])];
                    case 1:
                        _a = (_b.sent()), keys = _a[0], values = _a[1];
                        return [2 /*return*/, utils_1.constructRecords(keys, values)];
                }
            });
        });
    };
    Uns.prototype.get = function (tokenId, keys) {
        if (keys === void 0) { keys = []; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, resolver, owner, values;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.readerContract.call('getData', [keys, tokenId])];
                    case 1:
                        _a = _b.sent(), resolver = _a[0], owner = _a[1], values = _a[2];
                        return [2 /*return*/, { owner: owner, resolver: resolver, records: utils_1.constructRecords(keys, values) }];
                }
            });
        });
    };
    Uns.prototype.isLegacyResolver = function (resolverAddress) {
        return this.isWellKnownLegacyResolver(resolverAddress);
    };
    Uns.prototype.isWellKnownLegacyResolver = function (resolverAddress) {
        var _a, _b, _c;
        var legacyAddresses = (_c = (_b = (_a = uns_config_json_1.default === null || uns_config_json_1.default === void 0 ? void 0 : uns_config_json_1.default.networks[this.network]) === null || _a === void 0 ? void 0 : _a.contracts) === null || _b === void 0 ? void 0 : _b.Resolver) === null || _c === void 0 ? void 0 : _c.legacyAddresses;
        if (!legacyAddresses || legacyAddresses.length === 0) {
            return false;
        }
        return (legacyAddresses.findIndex(function (address) {
            return address.toLowerCase() === resolverAddress.toLowerCase();
        }) > -1);
    };
    Uns.prototype.isUpToDateResolver = function (resolverAddress) {
        var _a, _b, _c;
        var address = (_c = (_b = (_a = uns_config_json_1.default === null || uns_config_json_1.default === void 0 ? void 0 : uns_config_json_1.default.networks[this.network]) === null || _a === void 0 ? void 0 : _a.contracts) === null || _b === void 0 ? void 0 : _b.Resolver) === null || _c === void 0 ? void 0 : _c.address;
        if (!address) {
            return false;
        }
        return address.toLowerCase() === resolverAddress.toLowerCase();
    };
    Uns.prototype.getStartingBlock = function (contract, tokenId) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            var defaultStartingBlock, logs, lastResetEvent;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        defaultStartingBlock = (_c = (_b = (_a = uns_config_json_1.default === null || uns_config_json_1.default === void 0 ? void 0 : uns_config_json_1.default.networks[this.network]) === null || _a === void 0 ? void 0 : _a.contracts) === null || _b === void 0 ? void 0 : _b.Resolver) === null || _c === void 0 ? void 0 : _c.deploymentBlock;
                        return [4 /*yield*/, contract.fetchLogs('ResetRecords', tokenId)];
                    case 1:
                        logs = _d.sent();
                        lastResetEvent = logs[logs.length - 1];
                        return [2 /*return*/, (lastResetEvent === null || lastResetEvent === void 0 ? void 0 : lastResetEvent.blockNumber) || defaultStartingBlock];
                }
            });
        });
    };
    Uns.prototype.checkDomain = function (domain, passIfTokenID) {
        if (passIfTokenID === void 0) { passIfTokenID = false; }
        if (passIfTokenID) {
            return true;
        }
        var tokens = domain.split('.');
        return (!!tokens.length &&
            tokens[tokens.length - 1] !== 'zil' &&
            !(domain === 'eth' ||
                /^[^-]*[^-]*\.(eth|luxe|xyz|kred|addr\.reverse)$/.test(domain)) &&
            tokens.every(function (v) { return !!v.length; }));
    };
    Uns.prototype.getNewKeyEvents = function (resolverContract, tokenId, startingBlock) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, resolverContract.fetchLogs('NewKey', tokenId, startingBlock)];
            });
        });
    };
    Uns.prototype.checkNetworkConfig = function (source) {
        if (!source.network) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnsupportedNetwork, {
                method: this.name,
            });
        }
        if (!types_1.UnsSupportedNetwork.guard(source.network)) {
            this.checkCustomNetworkConfig(source);
        }
    };
    Uns.prototype.checkCustomNetworkConfig = function (source) {
        if (!this.isValidProxyReader(source.proxyReaderAddress)) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.InvalidConfigurationField, {
                method: this.name,
                field: 'proxyReaderAddress',
            });
        }
        if (!source['url'] && !source['provider']) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: this.name,
                config: 'url or provider',
            });
        }
    };
    Uns.prototype.isValidProxyReader = function (address) {
        if (!address) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: this.name,
                config: 'proxyReaderAddress',
            });
        }
        var ethLikePattern = new RegExp('^0x[a-fA-F0-9]{40}$');
        return ethLikePattern.test(address);
    };
    Uns.ProxyReaderMap = getProxyReaderMap();
    Uns.UrlMap = {
        1: 'https://mainnet.infura.io/v3/c4bb906ed6904c42b19c95825fe55f39',
        4: 'https://rinkeby.infura.io/v3/c4bb906ed6904c42b19c95825fe55f39',
    };
    return Uns;
}(NamingService_1.NamingService));
exports.default = Uns;
function getProxyReaderMap() {
    var map = {};
    for (var _i = 0, _a = Object.keys(uns_config_json_1.default.networks); _i < _a.length; _i++) {
        var id = _a[_i];
        map[id] =
            uns_config_json_1.default.networks[id].contracts.ProxyReader.address.toLowerCase();
    }
    return map;
}


/***/ }),

/***/ 59848:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var znsUtils_1 = __webpack_require__(72367);
var utils_1 = __webpack_require__(15433);
var types_1 = __webpack_require__(51376);
var resolutionError_1 = __webpack_require__(68942);
var publicTypes_1 = __webpack_require__(52530);
var FetchProvider_1 = __importDefault(__webpack_require__(78311));
var namehash_1 = __webpack_require__(2817);
var NamingService_1 = __webpack_require__(99445);
var configurationError_1 = __importStar(__webpack_require__(90319));
/**
 * @internal
 */
var Zns = /** @class */ (function (_super) {
    __extends(Zns, _super);
    function Zns(source) {
        var _this = _super.call(this) || this;
        _this.name = publicTypes_1.NamingServiceName.ZNS;
        if (!source) {
            source = {
                url: Zns.UrlMap[1],
                network: 'mainnet',
            };
        }
        _this.checkNetworkConfig(source);
        _this.network = Zns.NetworkNameMap[source.network];
        _this.url = source['url'] || Zns.UrlMap[_this.network];
        _this.provider =
            source['provider'] || new FetchProvider_1.default(_this.name, _this.url);
        _this.registryAddr =
            source['registryAddress'] || Zns.RegistryMap[_this.network];
        _this.checkRegistryAddress(_this.registryAddr);
        if (_this.registryAddr.startsWith('0x')) {
            _this.registryAddr = znsUtils_1.toBech32Address(_this.registryAddr);
        }
        return _this;
    }
    Zns.prototype.serviceName = function () {
        return this.name;
    };
    Zns.prototype.owner = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var recordAddresses, ownerAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordsAddresses(domain)];
                    case 1:
                        recordAddresses = _a.sent();
                        if (!recordAddresses) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        ownerAddress = recordAddresses[0];
                        if (!ownerAddress) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, ownerAddress];
                }
            });
        });
    };
    Zns.prototype.resolver = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var recordsAddresses, resolverAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordsAddresses(domain)];
                    case 1:
                        recordsAddresses = _a.sent();
                        if (!recordsAddresses || !recordsAddresses[0]) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnregisteredDomain, {
                                domain: domain,
                            });
                        }
                        resolverAddress = recordsAddresses[1];
                        if (utils_1.isNullAddress(resolverAddress)) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnspecifiedResolver, {
                                domain: domain,
                            });
                        }
                        return [2 /*return*/, resolverAddress];
                }
            });
        });
    };
    Zns.prototype.namehash = function (domain) {
        if (!this.checkDomain(domain)) {
            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                domain: domain,
            });
        }
        return namehash_1.znsNamehash(domain);
    };
    Zns.prototype.childhash = function (parentHash, label) {
        return namehash_1.znsChildhash(parentHash, label);
    };
    Zns.prototype.isSupportedDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.checkDomain(domain)];
            });
        });
    };
    Zns.prototype.record = function (domain, key) {
        return __awaiter(this, void 0, void 0, function () {
            var returnee;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.records(domain, [key])];
                    case 1:
                        returnee = (_a.sent())[key];
                        if (!returnee) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.RecordNotFound, {
                                domain: domain,
                                recordName: key,
                            });
                        }
                        return [2 /*return*/, returnee];
                }
            });
        });
    };
    Zns.prototype.records = function (domain, keys) {
        return __awaiter(this, void 0, void 0, function () {
            var records;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.allRecords(domain)];
                    case 1:
                        records = _a.sent();
                        return [2 /*return*/, utils_1.constructRecords(keys, records)];
                }
            });
        });
    };
    Zns.prototype.allRecords = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var resolverAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolver(domain)];
                    case 1:
                        resolverAddress = _a.sent();
                        return [4 /*yield*/, this.getResolverRecords(resolverAddress)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Zns.prototype.twitter = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    domain: domain,
                    methodName: 'twitter',
                });
            });
        });
    };
    Zns.prototype.reverse = function (address, currencyTicker) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'reverse',
                });
            });
        });
    };
    Zns.prototype.isRegistered = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var recordAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRecordsAddresses(domain)];
                    case 1:
                        recordAddresses = _a.sent();
                        return [2 /*return*/, Boolean(recordAddresses && recordAddresses[0])];
                }
            });
        });
    };
    Zns.prototype.getTokenUri = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'getTokenUri',
                });
            });
        });
    };
    Zns.prototype.getDomainFromTokenId = function (tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedMethod, {
                    methodName: 'getDomainFromTokenId',
                });
            });
        });
    };
    Zns.prototype.isAvailable = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isRegistered(domain)];
                    case 1: return [2 /*return*/, !(_a.sent())];
                }
            });
        });
    };
    Zns.prototype.registryAddress = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.registryAddr];
            });
        });
    };
    Zns.prototype.getRecordsAddresses = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var registryRecord, _a, ownerAddress, resolverAddress;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isSupportedDomain(domain)) {
                            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.UnsupportedDomain, {
                                domain: domain,
                            });
                        }
                        return [4 /*yield*/, this.getContractMapValue(this.registryAddr, 'records', this.namehash(domain))];
                    case 1:
                        registryRecord = _b.sent();
                        if (!registryRecord) {
                            return [2 /*return*/, undefined];
                        }
                        _a = registryRecord.arguments, ownerAddress = _a[0], resolverAddress = _a[1];
                        return [2 /*return*/, [
                                ownerAddress.startsWith('0x')
                                    ? znsUtils_1.toBech32Address(ownerAddress)
                                    : ownerAddress,
                                resolverAddress,
                            ]];
                }
            });
        });
    };
    Zns.prototype.getResolverRecords = function (resolverAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var resolver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (utils_1.isNullAddress(resolverAddress)) {
                            return [2 /*return*/, {}];
                        }
                        resolver = znsUtils_1.toChecksumAddress(resolverAddress);
                        return [4 /*yield*/, this.getContractField(resolver, 'records')];
                    case 1: return [2 /*return*/, ((_a.sent()) ||
                            {})];
                }
            });
        });
    };
    Zns.prototype.fetchSubState = function (contractAddress, field, keys) {
        if (keys === void 0) { keys = []; }
        return __awaiter(this, void 0, void 0, function () {
            var params, method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [contractAddress.replace('0x', ''), field, keys];
                        method = 'GetSmartContractSubState';
                        return [4 /*yield*/, this.provider.request({ method: method, params: params })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Zns.prototype.getContractField = function (contractAddress, field, keys) {
        if (keys === void 0) { keys = []; }
        return __awaiter(this, void 0, void 0, function () {
            var contractAddr, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contractAddr = contractAddress.startsWith('zil1')
                            ? znsUtils_1.fromBech32Address(contractAddress)
                            : contractAddress;
                        return [4 /*yield*/, this.fetchSubState(contractAddr, field, keys)];
                    case 1:
                        result = (_a.sent()) || {};
                        return [2 /*return*/, result[field]];
                }
            });
        });
    };
    Zns.prototype.getContractMapValue = function (contractAddress, field, key) {
        return __awaiter(this, void 0, void 0, function () {
            var record;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getContractField(contractAddress, field, [key])];
                    case 1:
                        record = _a.sent();
                        return [2 /*return*/, (record && record[key]) || null];
                }
            });
        });
    };
    Zns.prototype.checkDomain = function (domain) {
        var tokens = domain.split('.');
        return (!!tokens.length &&
            tokens[tokens.length - 1] === 'zil' &&
            tokens.every(function (v) { return !!v.length; }));
    };
    Zns.prototype.checkNetworkConfig = function (source) {
        if (!source.network) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.UnsupportedNetwork, {
                method: publicTypes_1.NamingServiceName.ZNS,
            });
        }
        if (!types_1.ZnsSupportedNetwork.guard(source.network)) {
            this.checkCustomNetworkConfig(source);
        }
    };
    Zns.prototype.checkRegistryAddress = function (address) {
        // Represents both versions of Zilliqa addresses eth-like and bech32 zil-like
        var addressValidator = new RegExp('^0x[a-fA-F0-9]{40}$|^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$');
        if (!addressValidator.test(address)) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.InvalidConfigurationField, {
                method: this.name,
                field: 'registryAddress',
            });
        }
    };
    Zns.prototype.checkCustomNetworkConfig = function (source) {
        if (!source.registryAddress) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: publicTypes_1.NamingServiceName.ZNS,
                config: 'registryAddress',
            });
        }
        if (!source['url'] && !source['provider']) {
            throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.CustomNetworkConfigMissing, {
                method: publicTypes_1.NamingServiceName.ZNS,
                config: 'url or provider',
            });
        }
    };
    Zns.UrlMap = {
        1: 'https://api.zilliqa.com',
        333: 'https://dev-api.zilliqa.com',
        111: 'http://localhost:4201',
    };
    Zns.NetworkNameMap = {
        mainnet: 1,
        testnet: 333,
        localnet: 111,
    };
    Zns.RegistryMap = {
        1: 'zil1jcgu2wlx6xejqk9jw3aaankw6lsjzeunx2j0jz',
        333: 'zil1hyj6m5w4atcn7s806s69r0uh5g4t84e8gp6nps',
    };
    return Zns;
}(NamingService_1.NamingService));
exports.default = Zns;


/***/ }),

/***/ 59750:
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
var abi_1 = __webpack_require__(39861);
var EthereumContract = /** @class */ (function () {
    function EthereumContract(abi, address, provider) {
        this.abi = abi;
        this.address = address;
        this.provider = provider;
        this.coder = new abi_1.Interface(this.abi);
    }
    EthereumContract.prototype.call = function (method, args) {
        return __awaiter(this, void 0, void 0, function () {
            var inputParam, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputParam = this.coder.encodeFunctionData(method, args);
                        return [4 /*yield*/, this.callEth(inputParam)];
                    case 1:
                        response = (_a.sent());
                        if (!response || response === '0x') {
                            return [2 /*return*/, []];
                        }
                        return [2 /*return*/, this.coder.decodeFunctionResult(method, response)];
                }
            });
        });
    };
    EthereumContract.prototype.fetchLogs = function (eventName, tokenId, fromBlock) {
        if (fromBlock === void 0) { fromBlock = 'earliest'; }
        return __awaiter(this, void 0, void 0, function () {
            var topic, params, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        topic = this.coder.getEventTopic(eventName);
                        params = [
                            {
                                fromBlock: fromBlock,
                                toBlock: 'latest',
                                address: this.address,
                                topics: [topic, tokenId],
                            },
                        ];
                        request = {
                            method: 'eth_getLogs',
                            params: params,
                        };
                        return [4 /*yield*/, this.provider.request(request)];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    EthereumContract.prototype.callEth = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var params, request;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = [
                            {
                                data: data,
                                to: this.address,
                            },
                            'latest',
                        ];
                        request = {
                            method: 'eth_call',
                            params: params,
                        };
                        return [4 /*yield*/, this.provider.request(request)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return EthereumContract;
}());
exports.default = EthereumContract;


/***/ }),

/***/ 85121:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = [
    {
        constant: true,
        inputs: [{ name: 'node', type: 'bytes32' }],
        name: 'resolver',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ name: 'node', type: 'bytes32' }],
        name: 'owner',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { name: 'node', type: 'bytes32' },
            { name: 'label', type: 'bytes32' },
            { name: 'owner', type: 'address' },
        ],
        name: 'setSubnodeOwner',
        outputs: [],
        payable: false,
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { name: 'node', type: 'bytes32' },
            { name: 'ttl', type: 'uint64' },
        ],
        name: 'setTTL',
        outputs: [],
        payable: false,
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ name: 'node', type: 'bytes32' }],
        name: 'ttl',
        outputs: [{ name: '', type: 'uint64' }],
        payable: false,
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { name: 'node', type: 'bytes32' },
            { name: 'resolver', type: 'address' },
        ],
        name: 'setResolver',
        outputs: [],
        payable: false,
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { name: 'node', type: 'bytes32' },
            { name: 'owner', type: 'address' },
        ],
        name: 'setOwner',
        outputs: [],
        payable: false,
        type: 'function',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'node', type: 'bytes32' },
            { indexed: false, name: 'owner', type: 'address' },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'node', type: 'bytes32' },
            { indexed: true, name: 'label', type: 'bytes32' },
            { indexed: false, name: 'owner', type: 'address' },
        ],
        name: 'NewOwner',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'node', type: 'bytes32' },
            { indexed: false, name: 'resolver', type: 'address' },
        ],
        name: 'NewResolver',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'node', type: 'bytes32' },
            { indexed: false, name: 'ttl', type: 'uint64' },
        ],
        name: 'NewTTL',
        type: 'event',
    },
];


/***/ }),

/***/ 65927:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = [
    {
        constant: true,
        inputs: [{ internalType: 'bytes4', name: 'interfaceID', type: 'bytes4' }],
        name: 'supportsInterface',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'string', name: 'key', type: 'string' },
            { internalType: 'string', name: 'value', type: 'string' },
        ],
        name: 'setText',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'bytes4', name: 'interfaceID', type: 'bytes4' },
        ],
        name: 'interfaceImplementer',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'uint256', name: 'contentTypes', type: 'uint256' },
        ],
        name: 'ABI',
        outputs: [
            { internalType: 'uint256', name: '', type: 'uint256' },
            { internalType: 'bytes', name: '', type: 'bytes' },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'bytes32', name: 'x', type: 'bytes32' },
            { internalType: 'bytes32', name: 'y', type: 'bytes32' },
        ],
        name: 'setPubkey',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'bytes', name: 'hash', type: 'bytes' },
        ],
        name: 'setContenthash',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    // This funciton is defined, however there is other version with 2 arguments
    // that we prefer to use all the time to be consistent
    // {
    // constant: true,
    // inputs: [{ internalType: 'bytes32', name: 'node', type: 'bytes32' }],
    // name: 'addr',
    // outputs: [{ internalType: 'address', name: '', type: 'address' }],
    // payable: false,
    // stateMutability: 'view',
    // type: 'function',
    // },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'address', name: 'target', type: 'address' },
            { internalType: 'bool', name: 'isAuthorised', type: 'bool' },
        ],
        name: 'setAuthorisation',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'string', name: 'key', type: 'string' },
        ],
        name: 'text',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'uint256', name: 'contentType', type: 'uint256' },
            { internalType: 'bytes', name: 'data', type: 'bytes' },
        ],
        name: 'setABI',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ internalType: 'bytes32', name: 'node', type: 'bytes32' }],
        name: 'name',
        outputs: [{ internalType: 'string', name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'string', name: 'name', type: 'string' },
        ],
        name: 'setName',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'uint256', name: 'coinType', type: 'uint256' },
            { internalType: 'bytes', name: 'a', type: 'bytes' },
        ],
        name: 'setAddr',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ internalType: 'bytes32', name: 'node', type: 'bytes32' }],
        name: 'contenthash',
        outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [{ internalType: 'bytes32', name: 'node', type: 'bytes32' }],
        name: 'pubkey',
        outputs: [
            { internalType: 'bytes32', name: 'x', type: 'bytes32' },
            { internalType: 'bytes32', name: 'y', type: 'bytes32' },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'address', name: 'a', type: 'address' },
        ],
        name: 'setAddr',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'bytes4', name: 'interfaceID', type: 'bytes4' },
            { internalType: 'address', name: 'implementer', type: 'address' },
        ],
        name: 'setInterface',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            { internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { internalType: 'uint256', name: 'coinType', type: 'uint256' },
        ],
        name: 'addr',
        outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            { internalType: 'bytes32', name: '', type: 'bytes32' },
            { internalType: 'address', name: '', type: 'address' },
            { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'authorisations',
        outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [{ internalType: 'contract ENS', name: '_ens', type: 'address' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'target',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'isAuthorised',
                type: 'bool',
            },
        ],
        name: 'AuthorisationChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            {
                indexed: false,
                internalType: 'string',
                name: 'indexedKey',
                type: 'string',
            },
            { indexed: false, internalType: 'string', name: 'key', type: 'string' },
        ],
        name: 'TextChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { indexed: false, internalType: 'bytes32', name: 'x', type: 'bytes32' },
            { indexed: false, internalType: 'bytes32', name: 'y', type: 'bytes32' },
        ],
        name: 'PubkeyChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { indexed: false, internalType: 'string', name: 'name', type: 'string' },
        ],
        name: 'NameChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            {
                indexed: true,
                internalType: 'bytes4',
                name: 'interfaceID',
                type: 'bytes4',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'implementer',
                type: 'address',
            },
        ],
        name: 'InterfaceChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { indexed: false, internalType: 'bytes', name: 'hash', type: 'bytes' },
        ],
        name: 'ContenthashChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            { indexed: false, internalType: 'address', name: 'a', type: 'address' },
        ],
        name: 'AddrChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'coinType',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'newAddress',
                type: 'bytes',
            },
        ],
        name: 'AddressChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'node', type: 'bytes32' },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'contentType',
                type: 'uint256',
            },
        ],
        name: 'ABIChanged',
        type: 'event',
    },
];


/***/ }),

/***/ 97003:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = [
    {
        inputs: [{ name: 'ensAddr', type: 'address' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'node',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'a',
                type: 'address',
            },
        ],
        name: 'AddrChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'node',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'name',
                type: 'string',
            },
        ],
        name: 'NameChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'node',
                type: 'bytes32',
            },
            {
                indexed: true,
                name: 'contentType',
                type: 'uint256',
            },
        ],
        name: 'ABIChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'node',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'x',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'y',
                type: 'bytes32',
            },
        ],
        name: 'PubkeyChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'node',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'indexedKey',
                type: 'string',
            },
            {
                indexed: false,
                name: 'key',
                type: 'string',
            },
        ],
        name: 'TextChanged',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'node',
                type: 'bytes32',
            },
            {
                indexed: false,
                name: 'hash',
                type: 'bytes',
            },
        ],
        name: 'ContenthashChanged',
        type: 'event',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'addr',
                type: 'address',
            },
        ],
        name: 'setAddr',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'hash',
                type: 'bytes',
            },
        ],
        name: 'setContenthash',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'name',
                type: 'string',
            },
        ],
        name: 'setName',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'contentType',
                type: 'uint256',
            },
            {
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'setABI',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'x',
                type: 'bytes32',
            },
            {
                name: 'y',
                type: 'bytes32',
            },
        ],
        name: 'setPubkey',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'key',
                type: 'string',
            },
            {
                name: 'value',
                type: 'string',
            },
        ],
        name: 'setText',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'key',
                type: 'string',
            },
        ],
        name: 'text',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
        ],
        name: 'pubkey',
        outputs: [
            {
                name: 'x',
                type: 'bytes32',
            },
            {
                name: 'y',
                type: 'bytes32',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
            {
                name: 'contentTypes',
                type: 'uint256',
            },
        ],
        name: 'ABI',
        outputs: [
            {
                name: '',
                type: 'uint256',
            },
            {
                name: '',
                type: 'bytes',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
        ],
        name: 'name',
        outputs: [
            {
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
        ],
        name: 'addr',
        outputs: [
            {
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'node',
                type: 'bytes32',
            },
        ],
        name: 'contenthash',
        outputs: [
            {
                name: '',
                type: 'bytes',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                name: 'interfaceID',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
    },
];


/***/ }),

/***/ 81282:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var resolutionError_1 = __webpack_require__(68942);
var newResolver_1 = __importDefault(__webpack_require__(65927));
var oldResolver_1 = __importDefault(__webpack_require__(97003));
var types_1 = __webpack_require__(51376);
var publicTypes_1 = __webpack_require__(52530);
exports.OldResolverAddresses = [
    '0x5ffc014343cd971b7eb70732021e26c35b744cc4',
    '0x1da022710df5002339274aadee8d58218e9d6ab5',
    '0xda1756bb923af5d1a05e277cb1e54f1d0a127890',
];
exports.default = (function (addr, coinType) {
    if (coinType === undefined || coinType === types_1.EthCoinIndex) {
        // Old interface is only compatible to output the ETH address
        // New interface is compatible to that API
        // So we prefer old interface when currency is ETH
        return oldResolver_1.default;
    }
    else {
        if (exports.OldResolverAddresses.includes(addr.toLowerCase())) {
            throw new resolutionError_1.ResolutionError(resolutionError_1.ResolutionErrorCode.IncorrectResolverInterface, { method: publicTypes_1.NamingServiceName.ENS });
        }
        return newResolver_1.default;
    }
});


/***/ }),

/***/ 43417:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = [
    {
        inputs: [
            {
                internalType: 'contract IRegistry',
                name: 'unsRegistry',
                type: 'address',
            },
            {
                internalType: 'contract ICryptoRegistry',
                name: 'unsRegistry',
                type: 'address',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        inputs: [],
        name: 'NAME',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'VERSION',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'childIdOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'exists',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'get',
        outputs: [
            {
                internalType: 'string',
                name: 'value',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getApproved',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'keyHash',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getByHash',
        outputs: [
            {
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'value',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getData',
        outputs: [
            {
                internalType: 'address',
                name: 'resolver',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'keyHashes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getDataByHash',
        outputs: [
            {
                internalType: 'address',
                name: 'resolver',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'keyHashes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]',
            },
        ],
        name: 'getDataByHashForMany',
        outputs: [
            {
                internalType: 'address[]',
                name: 'resolvers',
                type: 'address[]',
            },
            {
                internalType: 'address[]',
                name: 'owners',
                type: 'address[]',
            },
            {
                internalType: 'string[][]',
                name: 'keys',
                type: 'string[][]',
            },
            {
                internalType: 'string[][]',
                name: 'values',
                type: 'string[][]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]',
            },
        ],
        name: 'getDataForMany',
        outputs: [
            {
                internalType: 'address[]',
                name: 'resolvers',
                type: 'address[]',
            },
            {
                internalType: 'address[]',
                name: 'owners',
                type: 'address[]',
            },
            {
                internalType: 'string[][]',
                name: 'values',
                type: 'string[][]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getMany',
        outputs: [
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'keyHashes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getManyByHash',
        outputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'isApprovedOrOwner',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'tokenIds',
                type: 'uint256[]',
            },
        ],
        name: 'ownerOfForMany',
        outputs: [
            {
                internalType: 'address[]',
                name: 'owners',
                type: 'address[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'registryOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'resolverOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];


/***/ }),

/***/ 53122:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = [
    {
        constant: true,
        inputs: [
            {
                internalType: 'bytes4',
                name: 'interfaceId',
                type: 'bytes4',
            },
        ],
        name: 'supportsInterface',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'controlledTransferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'controlledSafeMintChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getApproved',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'resolveTo',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'controlledResolveTo',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'burn',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'isApprovedOrOwner',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'updateId',
                type: 'uint256',
            },
        ],
        name: 'sync',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'controlledSafeTransferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'burnChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ownerOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'renounceController',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'safeMintChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'childOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'safeTransferFromChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'transferFromChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'setApprovalForAll',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'addController',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'resolverOf',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'isController',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'controlledMintChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'safeTransferFrom',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'safeTransferFromChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'tokenURI',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'safeMintChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'string',
                name: 'prefix',
                type: 'string',
            },
        ],
        name: 'controlledSetTokenURIPrefix',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'label',
                type: 'string',
            },
        ],
        name: 'mintChild',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'controlledBurn',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
        ],
        name: 'isApprovedForAll',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'root',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'pure',
        type: 'function',
    },
    {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'uri',
                type: 'string',
            },
        ],
        name: 'NewURI',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: 'prefix',
                type: 'string',
            },
        ],
        name: 'NewURIPrefix',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
        ],
        name: 'Resolve',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'resolver',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'updateId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Sync',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'approved',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'operator',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: 'approved',
                type: 'bool',
            },
        ],
        name: 'ApprovalForAll',
        type: 'event',
    },
];


/***/ }),

/***/ 8143:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'string',
                name: 'keyIndex',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
        ],
        name: 'NewKey',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'ResetRecords',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
            {
                indexed: true,
                internalType: 'string',
                name: 'keyIndex',
                type: 'string',
            },
            {
                indexed: true,
                internalType: 'string',
                name: 'valueIndex',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: 'value',
                type: 'string',
            },
        ],
        name: 'Set',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'get',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'keyHash',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getByHash',
        outputs: [
            {
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'value',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getMany',
        outputs: [
            {
                internalType: 'string[]',
                name: '',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256[]',
                name: 'keyHashes',
                type: 'uint256[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'getManyByHash',
        outputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'reconfigure',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'reset',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: 'key',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'value',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'set',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string[]',
                name: 'keys',
                type: 'string[]',
            },
            {
                internalType: 'string[]',
                name: 'values',
                type: 'string[]',
            },
            {
                internalType: 'uint256',
                name: 'tokenId',
                type: 'uint256',
            },
        ],
        name: 'setMany',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];


/***/ }),

/***/ 90319:
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ConfigurationErrorCode;
(function (ConfigurationErrorCode) {
    ConfigurationErrorCode["IncorrectProvider"] = "IncorrectProvider";
    ConfigurationErrorCode["UnsupportedNetwork"] = "UnsupportedNetwork";
    ConfigurationErrorCode["UnspecifiedUrl"] = "UnspecifiedUrl";
    ConfigurationErrorCode["DependencyMissing"] = "DependencyMissing";
    ConfigurationErrorCode["CustomNetworkConfigMissing"] = "CustomNetworkConfigMissing";
    ConfigurationErrorCode["InvalidConfigurationField"] = "InvalidProxyReader";
})(ConfigurationErrorCode = exports.ConfigurationErrorCode || (exports.ConfigurationErrorCode = {}));
/**
 * @internal
 * Internal Mapping object from ConfigurationErrorCode to a ConfigurationErrorHandler
 */
var HandlersByCode = (_a = {},
    _a[ConfigurationErrorCode.IncorrectProvider] = function () {
        return "Provider doesn't implement sendAsync or send method";
    },
    _a[ConfigurationErrorCode.UnsupportedNetwork] = function (params) {
        return "Unsupported network in Resolution " + (params.method || '') + " configuration";
    },
    _a[ConfigurationErrorCode.UnspecifiedUrl] = function (params) { return "Unspecified url in Resolution " + params.method + " configuration"; },
    _a[ConfigurationErrorCode.DependencyMissing] = function (params) {
        return "Missing dependency for this functionality. Please install " + params.dependency + " @ " + params.version + " via npm or yarn";
    },
    _a[ConfigurationErrorCode.CustomNetworkConfigMissing] = function (params) {
        return "Missing configuration in Resolution " + params.method + ". Please specify " + params.config + " when using a custom network";
    },
    _a[ConfigurationErrorCode.InvalidConfigurationField] = function (params) { return "Invalid '" + params.field + "' in Resolution " + params.method; },
    _a);
/**
 * Configuration Error class is designed to control every error being thrown by wrong configurations for objects
 * @param code - Error Code
 * - IncorrectProvider - When provider doesn't have implemented send or sendAsync methods
 * - UnsupportedNetwork - When network is not specified or not supported
 * - UnspecifiedUrl - When url is not specified for custom naming service configurations
 * - CustomNetworkConfigMissing - When configuration is missing for custom network configurations
 * @param method - optional param to specify which namingService errored out
 */
var ConfigurationError = /** @class */ (function (_super) {
    __extends(ConfigurationError, _super);
    function ConfigurationError(code, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var configurationErrorHandler = HandlersByCode[code];
        _this = _super.call(this, configurationErrorHandler(options)) || this;
        _this.code = code;
        _this.method = options.method;
        _this.name = 'ConfigurationError';
        Object.setPrototypeOf(_this, ConfigurationError.prototype);
        return _this;
    }
    return ConfigurationError;
}(Error));
exports.ConfigurationError = ConfigurationError;
exports.default = ConfigurationError;


/***/ }),

/***/ 63050:
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DnsRecordsErrorCode;
(function (DnsRecordsErrorCode) {
    DnsRecordsErrorCode["InconsistentTtl"] = "InconsistentTtl";
    DnsRecordsErrorCode["DnsRecordCorrupted"] = "DnsRecordCorrupted";
})(DnsRecordsErrorCode = exports.DnsRecordsErrorCode || (exports.DnsRecordsErrorCode = {}));
/**
 * @internal
 * Internal Mapping object from DnsRecordsErrorCode to a DnsRecordsErrorHandler
 */
var HandlersByCode = (_a = {},
    _a[DnsRecordsErrorCode.InconsistentTtl] = function (params) {
        return "ttl for record " + params.recordType + " is different for other records of the same type";
    },
    _a[DnsRecordsErrorCode.DnsRecordCorrupted] = function (params) {
        return "dns record " + params.recordType + " is invalid json-string";
    },
    _a);
/**
 * Configuration Error class is designed to control every error being thrown by wrong configurations for objects
 * @param code - Error Code
 * - IncorrectProvider - When provider doesn't have implemented send or sendAsync methods
 * - UnsupportedNetwork - When network is not specified or not supported
 * - UnspecifiedUrl - When url is not specified for custom naming service configurations
 * @param method - optional param to specify which namingService errored out
 */
var DnsRecordsError = /** @class */ (function (_super) {
    __extends(DnsRecordsError, _super);
    function DnsRecordsError(code, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var DnsRecordsErrorHandler = HandlersByCode[code];
        _this = _super.call(this, DnsRecordsErrorHandler(options)) || this;
        _this.code = code;
        _this.name = 'DnsRecordsError';
        Object.setPrototypeOf(_this, DnsRecordsError.prototype);
        return _this;
    }
    return DnsRecordsError;
}(Error));
exports.DnsRecordsError = DnsRecordsError;
exports.default = DnsRecordsError;


/***/ }),

/***/ 68942:
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ResolutionErrorCode;
(function (ResolutionErrorCode) {
    ResolutionErrorCode["UnregisteredDomain"] = "UnregisteredDomain";
    ResolutionErrorCode["UnspecifiedResolver"] = "UnspecifiedResolver";
    ResolutionErrorCode["UnsupportedDomain"] = "UnsupportedDomain";
    ResolutionErrorCode["UnsupportedService"] = "UnsupportedService";
    ResolutionErrorCode["UnsupportedMethod"] = "UnsupportedMethod";
    ResolutionErrorCode["UnspecifiedCurrency"] = "UnspecifiedCurrency";
    ResolutionErrorCode["UnsupportedCurrency"] = "UnsupportedCurrency";
    ResolutionErrorCode["IncorrectResolverInterface"] = "IncorrectResolverInterface";
    ResolutionErrorCode["RecordNotFound"] = "RecordNotFound";
    ResolutionErrorCode["ServiceProviderError"] = "ServiceProviderError";
    ResolutionErrorCode["InvalidTwitterVerification"] = "InvalidTwitterVerification";
})(ResolutionErrorCode = exports.ResolutionErrorCode || (exports.ResolutionErrorCode = {}));
/**
 * @internal
 * Internal Mapping object from ResolutionErrorCode to a ResolutionErrorHandler
 */
var HandlersByCode = (_a = {},
    _a[ResolutionErrorCode.UnregisteredDomain] = function (params) {
        return "Domain " + params.domain + " is not registered";
    },
    _a[ResolutionErrorCode.UnspecifiedResolver] = function (params) {
        return "Domain " + params.domain + " is not configured";
    },
    _a[ResolutionErrorCode.UnsupportedDomain] = function (params) {
        return "Domain " + params.domain + " is not supported";
    },
    _a[ResolutionErrorCode.UnsupportedMethod] = function (params) { return "Method " + params.methodName + " is not supported for " + params.domain; },
    _a[ResolutionErrorCode.InvalidTwitterVerification] = function (params) { return "Domain " + params.domain + " has invalid Twitter signature verification"; },
    _a[ResolutionErrorCode.UnsupportedCurrency] = function (params) { return params.currencyTicker + " is not supported"; },
    _a[ResolutionErrorCode.IncorrectResolverInterface] = function (params) { return "Domain resolver is configured incorrectly for " + params.method; },
    _a[ResolutionErrorCode.RecordNotFound] = function (params) { return "No " + params.recordName + " record found for " + params.domain; },
    _a[ResolutionErrorCode.ServiceProviderError] = function (params) { return "< " + params.providerMessage + " >"; },
    _a[ResolutionErrorCode.UnsupportedService] = function (params) {
        return "Naming service " + params.namingService + " is not supported";
    },
    _a);
/**
 * Resolution Error class is designed to control every error being thrown by Resolution
 * @param code - Error Code
 * - UnsupportedDomain - domain is not supported by current Resolution instance
 * - UnregisteredDomain - domain is not owned by any address
 * - UnspecifiedResolver - domain has no resolver specified
 * - UnspecifiedCurrency - domain resolver doesn't have any address of specified currency
 * - UnsupportedCurrency - currency is not supported
 * - IncorrectResolverInterface - ResolverInterface is incorrected
 * - RecordNotFound - No record was found
 * @param domain - Domain name that was being used
 * @param method
 */
var ResolutionError = /** @class */ (function (_super) {
    __extends(ResolutionError, _super);
    function ResolutionError(code, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var resolutionErrorHandler = HandlersByCode[code];
        var domain = options.domain, method = options.method, currencyTicker = options.currencyTicker;
        var message = resolutionErrorHandler(options);
        _this = _super.call(this, message) || this;
        _this.code = code;
        _this.domain = domain;
        _this.method = method;
        _this.currencyTicker = currencyTicker;
        _this.name = 'ResolutionError';
        Object.setPrototypeOf(_this, ResolutionError.prototype);
        return _this;
    }
    return ResolutionError;
}(Error));
exports.ResolutionError = ResolutionError;
exports.default = ResolutionError;


/***/ }),

/***/ 33989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
var Resolution_1 = __webpack_require__(35960);
exports.Resolution = Resolution_1.Resolution;
exports.default = Resolution_1.Resolution;
__export(__webpack_require__(52530));
var DnsUtils_1 = __webpack_require__(41955);
exports.DnsUtils = DnsUtils_1.default;
var resolutionError_1 = __webpack_require__(68942);
exports.ResolutionError = resolutionError_1.ResolutionError;
exports.ResolutionErrorCode = resolutionError_1.ResolutionErrorCode;
var configurationError_1 = __webpack_require__(90319);
exports.ConfigurationError = configurationError_1.ConfigurationError;
exports.ConfigurationErrorCode = configurationError_1.ConfigurationErrorCode;
var dnsRecordsError_1 = __webpack_require__(63050);
exports.DnsRecordsError = dnsRecordsError_1.DnsRecordsError;
exports.DnsRecordsErrorCode = dnsRecordsError_1.DnsRecordsErrorCode;
var Eip1993Factories_1 = __webpack_require__(677);
exports.Eip1993Factories = Eip1993Factories_1.Eip1993Factories;
var Eip1993Factories_2 = __webpack_require__(677);
exports.Eip1193Factories = Eip1993Factories_2.Eip1993Factories;
var Eip1993Factories_3 = __webpack_require__(677);
exports.ProviderFactories = Eip1993Factories_3.Eip1993Factories;


/***/ }),

/***/ 51376:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NullAddress = '0x0000000000000000000000000000000000000000';
var NullAddresses;
(function (NullAddresses) {
    NullAddresses[NullAddresses["0x"] = 0] = "0x";
    NullAddresses[NullAddresses["0x0000000000000000000000000000000000000000"] = 1] = "0x0000000000000000000000000000000000000000";
    NullAddresses[NullAddresses["0x0000000000000000000000000000000000000000000000000000000000000000"] = 2] = "0x0000000000000000000000000000000000000000000000000000000000000000";
})(NullAddresses = exports.NullAddresses || (exports.NullAddresses = {}));
exports.EthCoinIndex = '60';
// TypeScript will infer a string union type from the literal values passed to
// this function. Without `extends string`, it would instead generalize them
// to the common string type.
// @see https://stackoverflow.com/questions/36836011/checking-validity-of-string-literal-union-type-at-runtime
var StringUnion = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    Object.freeze(values);
    var valueSet = new Set(values);
    var guard = function (value) {
        return valueSet.has(value);
    };
    var check = function (value) {
        if (!guard(value)) {
            var actual = JSON.stringify(value);
            var expected = values.map(function (s) { return JSON.stringify(s); }).join(' | ');
            throw new TypeError("Value '" + actual + "' is not assignable to type '" + expected + "'.");
        }
        return value;
    };
    var unionNamespace = { guard: guard, check: check, values: values };
    return Object.freeze(unionNamespace);
};
exports.UnsSupportedNetwork = StringUnion('mainnet', 'rinkeby');
exports.EnsSupportedNetwork = StringUnion('mainnet', 'rinkeby', 'goerli', 'ropsten');
exports.ZnsSupportedNetwork = StringUnion('mainnet', 'testnet');
function hasProvider(obj) {
    return obj && !!obj.provider;
}
exports.hasProvider = hasProvider;


/***/ }),

/***/ 52530:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var NamingServiceName;
(function (NamingServiceName) {
    NamingServiceName["UNS"] = "UNS";
    NamingServiceName["ENS"] = "ENS";
    NamingServiceName["ZNS"] = "ZNS";
})(NamingServiceName = exports.NamingServiceName || (exports.NamingServiceName = {}));
exports.UnclaimedDomainResponse = {
    addresses: {},
    meta: {
        namehash: '',
        resolver: '',
        owner: null,
        type: '',
        ttl: 0,
    },
    records: {},
};
exports.UDApiDefaultUrl = 'https://unstoppabledomains.com/api/v1';
exports.NamehashOptionsDefault = { format: 'hex', prefix: true };
var DnsRecordType;
(function (DnsRecordType) {
    DnsRecordType["A"] = "A";
    DnsRecordType["AAAA"] = "AAAA";
    DnsRecordType["AFSDB"] = "AFSDB";
    DnsRecordType["APL"] = "APL";
    DnsRecordType["CAA"] = "CAA";
    DnsRecordType["CDNSKEY"] = "CDNSKEY";
    DnsRecordType["CDS"] = "CDS";
    DnsRecordType["CERT"] = "CERT";
    DnsRecordType["CNAME"] = "CNAME";
    DnsRecordType["CSYNC"] = "CSYNC";
    DnsRecordType["DHCID"] = "DHCID";
    DnsRecordType["DLV"] = "DLV";
    DnsRecordType["DNAME"] = "DNAME";
    DnsRecordType["DNSKEY"] = "DNSKEY";
    DnsRecordType["DS"] = "DS";
    DnsRecordType["EUI48"] = "EUI48";
    DnsRecordType["EUI64"] = "EUI64";
    DnsRecordType["HINFO"] = "HINFO";
    DnsRecordType["HIP"] = "HIP";
    DnsRecordType["HTTPS"] = "HTTPS";
    DnsRecordType["IPSECKEY"] = "IPSECKEY";
    DnsRecordType["KEY"] = "KEY";
    DnsRecordType["KX"] = "KX";
    DnsRecordType["LOC"] = "LOC";
    DnsRecordType["MX"] = "MX";
    DnsRecordType["NAPTR"] = "NAPTR";
    DnsRecordType["NS"] = "NS";
    DnsRecordType["NSEC"] = "NSEC";
    DnsRecordType["NSEC3"] = "NSEC3";
    DnsRecordType["NSEC3PARAM"] = "NSEC3PARAM";
    DnsRecordType["OPENPGPKEY"] = "OPENPGPKEY";
    DnsRecordType["PTR"] = "PTR";
    DnsRecordType["RP"] = "RP";
    DnsRecordType["RRSIG"] = "RRSIG";
    DnsRecordType["SIG"] = "SIG";
    DnsRecordType["SMIMEA"] = "SMIMEA";
    DnsRecordType["SOA"] = "SOA";
    DnsRecordType["SRV"] = "SRV";
    DnsRecordType["SSHFP"] = "SSHFP";
    DnsRecordType["SVCB"] = "SVCB";
    DnsRecordType["TA"] = "TA";
    DnsRecordType["TKEY"] = "TKEY";
    DnsRecordType["TLSA"] = "TLSA";
    DnsRecordType["TSIG"] = "TSIG";
    DnsRecordType["TXT"] = "TXT";
    DnsRecordType["URI"] = "URI";
    DnsRecordType["ZONEMD"] = "ZONEMD";
})(DnsRecordType = exports.DnsRecordType || (exports.DnsRecordType = {}));


/***/ }),

/***/ 41955:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var dnsRecordsError_1 = __importStar(__webpack_require__(63050));
var publicTypes_1 = __webpack_require__(52530);
var DnsUtils = /** @class */ (function () {
    function DnsUtils() {
    }
    DnsUtils.prototype.toList = function (record) {
        var _a;
        var _this = this;
        var dnsTypes = this.getAllDnsTypes(record);
        return (_a = []).concat.apply(_a, dnsTypes.map(function (type) { return _this.constructDnsRecords(record, type); }));
    };
    DnsUtils.prototype.toCrypto = function (records) {
        var cryptoRecords = {};
        for (var _i = 0, records_1 = records; _i < records_1.length; _i++) {
            var record = records_1[_i];
            var type = record.type, TTL = record.TTL, data = record.data;
            var ttlInRecord = this.getJsonNumber(cryptoRecords["dns." + type + ".ttl"]);
            var dnsInRecord = this.getJsonArray(cryptoRecords, "dns." + type);
            if (dnsInRecord) {
                dnsInRecord.push(data);
                cryptoRecords["dns." + type] = JSON.stringify(dnsInRecord);
            }
            else {
                cryptoRecords["dns." + type] = JSON.stringify([data]);
                cryptoRecords["dns." + type + ".ttl"] = TTL.toString(10);
            }
            if (!!ttlInRecord && ttlInRecord !== TTL) {
                throw new dnsRecordsError_1.default(dnsRecordsError_1.DnsRecordsErrorCode.InconsistentTtl, {
                    recordType: type,
                });
            }
        }
        return cryptoRecords;
    };
    DnsUtils.prototype.protectFromCorruptRecord = function (rawRecord, type) {
        try {
            return rawRecord ? JSON.parse(rawRecord) : undefined;
        }
        catch (err) {
            if (err instanceof SyntaxError) {
                throw new dnsRecordsError_1.default(dnsRecordsError_1.DnsRecordsErrorCode.DnsRecordCorrupted, {
                    recordType: type,
                });
            }
            throw err;
        }
    };
    DnsUtils.prototype.getJsonArray = function (cryptoRecrods, key) {
        var rawRecord = cryptoRecrods[key];
        var type = key.split('.')[1];
        return this.protectFromCorruptRecord(rawRecord, type);
    };
    DnsUtils.prototype.getJsonNumber = function (rawRecord) {
        return rawRecord ? parseInt(rawRecord, 10) : undefined;
    };
    DnsUtils.prototype.getAllDnsTypes = function (records) {
        var keys = new Set();
        Object.keys(records).forEach(function (key) {
            var chunks = key.split('.');
            var type = chunks[1] && chunks[1] !== 'ttl';
            if (type) {
                keys.add(publicTypes_1.DnsRecordType[chunks[1]]);
            }
        });
        return Array.from(keys);
    };
    DnsUtils.prototype.constructDnsRecords = function (cryptoData, type) {
        var TTL = this.parseTtl(cryptoData, type);
        var jsonValueString = cryptoData["dns." + type];
        if (!jsonValueString) {
            return [];
        }
        var typeData = this.protectFromCorruptRecord(jsonValueString, type);
        if (!this.isStringArray(typeData)) {
            return [];
        }
        return typeData.map(function (data) { return ({ TTL: TTL, data: data, type: type }); });
    };
    DnsUtils.prototype.parseTtl = function (data, type) {
        var defaultTtl = data['dns.ttl'];
        var recordTtl = data["dns." + type + ".ttl"];
        if (recordTtl) {
            var parsedInt = this.parseIfNumber(recordTtl);
            if (parsedInt) {
                return parsedInt;
            }
        }
        if (defaultTtl) {
            var parsedInt = this.parseIfNumber(defaultTtl);
            if (parsedInt) {
                return parsedInt;
            }
        }
        return DnsUtils.DefaultTtl;
    };
    DnsUtils.prototype.parseIfNumber = function (str) {
        var parsedInt = parseInt(str, 10);
        if (!isNaN(parsedInt)) {
            return parsedInt;
        }
    };
    DnsUtils.prototype.isStringArray = function (value) {
        if (value instanceof Array) {
            return value.every(function (item) { return typeof item === 'string'; });
        }
        return false;
    };
    DnsUtils.DefaultTtl = 300; // 5 minutes
    return DnsUtils;
}());
exports.default = DnsUtils;


/***/ }),

/***/ 677:
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var configurationError_1 = __webpack_require__(90319);
var resolutionError_1 = __importStar(__webpack_require__(68942));
exports.Eip1993Factories = {
    fromWeb3Version0Provider: fromWeb3Version0Provider,
    fromWeb3Version1Provider: fromWeb3Version1Provider,
    fromEthersProvider: fromEthersProvider,
    fromZilliqaProvider: fromZilliqaProvider,
};
/**
 * Create a Provider instance from web3 0.x version provider
 * @param provider - an 0.x version provider from web3 ( must implement sendAsync(payload, callback) )
 * @see https://github.com/ethereum/web3.js/blob/0.20.7/lib/web3/httpprovider.js#L116
 */
function fromWeb3Version0Provider(provider) {
    if (provider.sendAsync === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) {
            return new Promise(function (resolve, reject) {
                provider.sendAsync({
                    jsonrpc: '2.0',
                    method: request.method,
                    params: wrapArray(request.params),
                    id: 1,
                }, function (error, result) {
                    if (error) {
                        reject(error);
                    }
                    if (result.error) {
                        reject(new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: result.error,
                        }));
                    }
                    resolve(result.result);
                });
            });
        },
    };
}
/**
 * Create a Provider instance from web3 1.x version provider
 * @param provider - an 1.x version provider from web3 ( must implement send(payload, callback) )
 * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-core-helpers/types/index.d.ts#L165
 * @see https://github.com/ethereum/web3.js/blob/1.x/packages/web3-providers-http/src/index.js#L95
 */
function fromWeb3Version1Provider(provider) {
    if (provider.send === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) {
            return new Promise(function (resolve, reject) {
                provider.send({
                    jsonrpc: '2.0',
                    method: request.method,
                    params: wrapArray(request.params),
                    id: 1,
                }, function (error, result) {
                    if (error) {
                        reject(error);
                    }
                    if (result.error) {
                        reject(new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: result.error,
                        }));
                    }
                    resolve(result.result);
                });
            });
        },
    };
}
/**
 * Creates a Provider instance from a provider that implements Ethers Provider#call interface.
 * This wrapper support only `eth_call` method for now, which is enough for all the current Resolution functionality
 * @param provider - provider object
 * @see https://github.com/ethers-io/ethers.js/blob/v4-legacy/providers/abstract-provider.d.ts#L91
 * @see https://github.com/ethers-io/ethers.js/blob/v5.0.4/packages/abstract-provider/src.ts/index.ts#L224
 * @see https://docs.ethers.io/ethers.js/v5-beta/api-providers.html#jsonrpcprovider-inherits-from-provider
 * @see https://github.com/ethers-io/ethers.js/blob/master/packages/providers/src.ts/json-rpc-provider.ts
 */
function fromEthersProvider(provider) {
    var _this = this;
    if (provider.call === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) { return __awaiter(_this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, , 8]);
                        _a = request.method;
                        switch (_a) {
                            case 'eth_call': return [3 /*break*/, 1];
                            case 'eth_getLogs': return [3 /*break*/, 3];
                        }
                        return [3 /*break*/, 5];
                    case 1: return [4 /*yield*/, provider.call(request.params[0])];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, provider.getLogs(request.params[0])];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                        providerMessage: "Unsupported provider method " + request.method,
                    });
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_1 = _b.sent();
                        throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: error_1.message,
                        });
                    case 8: return [2 /*return*/];
                }
            });
        }); },
    };
}
/**
 * Creates a Provider instance from @zilliqa-js/core Provider
 * @param provider - provider object
 */
function fromZilliqaProvider(provider) {
    var _this = this;
    if (provider.middleware === undefined || provider.send === undefined) {
        throw new configurationError_1.ConfigurationError(configurationError_1.ConfigurationErrorCode.IncorrectProvider);
    }
    return {
        request: function (request) { return __awaiter(_this, void 0, void 0, function () {
            var resp, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, provider.send.apply(provider, __spreadArrays([request.method], (request.params || [])))];
                    case 1:
                        resp = _a.sent();
                        if (resp.error) {
                            throw new Error(resp.error.message);
                        }
                        return [2 /*return*/, resp.result];
                    case 2:
                        error_2 = _a.sent();
                        throw new resolutionError_1.default(resolutionError_1.ResolutionErrorCode.ServiceProviderError, {
                            providerMessage: error_2.message,
                        });
                    case 3: return [2 /*return*/];
                }
            });
        }); },
    };
}
function wrapArray(params) {
    if (params === void 0) { params = []; }
    return params instanceof Array ? params : [params];
}


/***/ }),

/***/ 14790:
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
var node_fetch_1 = __importDefault(__webpack_require__(93691));
var Networking = /** @class */ (function () {
    function Networking() {
    }
    Networking.isNode = function () {
        if (typeof process === 'object') {
            // eslint-disable-next-line no-undef
            if (typeof process.versions === 'object') {
                // eslint-disable-next-line no-undef
                if (typeof process.versions.node !== 'undefined') {
                    return true;
                }
            }
        }
        return false;
    };
    Networking.getEnv = function () {
        return this.isNode() ? 'NODE' : 'BROWSER';
    };
    Networking.fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.isNode() ? node_fetch_1.default(url, options) : window.fetch(url, options)];
            });
        });
    };
    return Networking;
}());
exports.default = Networking;


/***/ }),

/***/ 94733:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var _1 = __webpack_require__(15433);
var js_sha3_1 = __webpack_require__(94474);
var recoverSignature_1 = __webpack_require__(75985);
var bn_js_1 = __importDefault(__webpack_require__(28891));
var TwitterVerificationAddress = '0x12cfb13522F13a78b650a8bCbFCf50b7CB899d82';
exports.isValidTwitterSignature = function (_a) {
    var tokenId = _a.tokenId, owner = _a.owner, twitterHandle = _a.twitterHandle, validationSignature = _a.validationSignature;
    var tokenIdInDecimals = fromHexStringToDecimals(tokenId);
    var message = [
        tokenIdInDecimals,
        owner,
        'social.twitter.username',
        twitterHandle,
    ]
        .map(function (value) {
        return '0x' + js_sha3_1.keccak256(value.startsWith('0x') ? _1.hexToBytes(value) : value);
    })
        .reduce(function (message, hashedValue) { return message + hashedValue; }, '');
    var signerAddress = recoverSignature_1.recover(message, validationSignature);
    return signerAddress === TwitterVerificationAddress;
};
var fromHexStringToDecimals = function (value) {
    if (value.startsWith('0x')) {
        var valueWithoutPrefix = value.slice(2, value.length);
        var bn = new bn_js_1.default(valueWithoutPrefix, 16);
        return bn.toString(10);
    }
    return value;
};


/***/ }),

/***/ 15433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var publicTypes_1 = __webpack_require__(52530);
var types_1 = __webpack_require__(51376);
function signedInfuraLink(infura, network) {
    if (network === void 0) { network = 'mainnet'; }
    return "https://" + network + ".infura.io/v3/" + infura;
}
exports.signedInfuraLink = signedInfuraLink;
function hexToBytes(hexString) {
    var hex = hexString.replace(/^0x/i, '');
    var bytes = [];
    for (var c = 0; c < hex.length; c += 2) {
        bytes.push(parseInt(hex.substr(c, 2), 16));
    }
    return bytes;
}
exports.hexToBytes = hexToBytes;
function isNullAddress(key) {
    if (!key) {
        return true;
    }
    return Object.values(types_1.NullAddresses).includes(key);
}
exports.isNullAddress = isNullAddress;
function constructRecords(keys, values) {
    var records = {};
    keys.forEach(function (key, index) {
        records[key] =
            (values instanceof Array ? values[index] : values === null || values === void 0 ? void 0 : values[key]) || '';
    });
    return records;
}
exports.constructRecords = constructRecords;
exports.domainExtensionToNamingServiceName = {
    crypto: publicTypes_1.NamingServiceName.UNS,
    zil: publicTypes_1.NamingServiceName.ZNS,
    eth: publicTypes_1.NamingServiceName.ENS,
    luxe: publicTypes_1.NamingServiceName.ENS,
    xyz: publicTypes_1.NamingServiceName.ENS,
    kred: publicTypes_1.NamingServiceName.ENS,
    reverse: publicTypes_1.NamingServiceName.ENS,
};
exports.findNamingServiceName = function (domain) {
    var extension = domain.split('.').pop();
    if (!extension) {
        return '';
    }
    else if (extension in exports.domainExtensionToNamingServiceName) {
        return exports.domainExtensionToNamingServiceName[extension];
    }
    else {
        return exports.domainExtensionToNamingServiceName.crypto;
    }
};
exports.EthereumNetworks = {
    mainnet: 1,
    ropsten: 3,
    rinkeby: 4,
    goerli: 5,
};
exports.EthereumNetworksInverted = {
    1: 'mainnet',
    3: 'ropsten',
    4: 'rinkeby',
    5: 'goerli',
};


/***/ }),

/***/ 2817:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var js_sha3_1 = __webpack_require__(94474);
var js_sha256_1 = __webpack_require__(23356);
var buffer_1 = __webpack_require__(15313);
function eip137Namehash(domain) {
    var arr = hashArray(domain, js_sha3_1.keccak_256);
    return arrayToHex(arr);
}
exports.eip137Namehash = eip137Namehash;
function eip137Childhash(parentHash, label) {
    return childhash(parentHash, label, js_sha3_1.keccak_256);
}
exports.eip137Childhash = eip137Childhash;
function znsNamehash(domain) {
    var arr = hashArray(domain, js_sha256_1.sha256);
    return arrayToHex(arr);
}
exports.znsNamehash = znsNamehash;
function znsChildhash(parentHash, label) {
    return childhash(parentHash, label, js_sha256_1.sha256);
}
exports.znsChildhash = znsChildhash;
function childhash(parentHash, label, hashingAlgo) {
    var parent = parentHash.replace(/^0x/, '');
    var childHash = hashingAlgo.hex(label);
    return "0x" + hashingAlgo.hex(buffer_1.Buffer.from("" + parent + childHash, 'hex'));
}
function hashArray(domain, hashingAlgo) {
    if (!domain) {
        return Array.from(new Uint8Array(32));
    }
    var _a = domain.split('.'), label = _a[0], remainder = _a.slice(1);
    var labelHash = hashingAlgo.array(label);
    var remainderHash = hashArray(remainder.join('.'), hashingAlgo);
    return hashingAlgo.array(new Uint8Array(__spreadArrays(remainderHash, labelHash)));
}
function arrayToHex(arr) {
    return "0x" + Array.prototype.map
        .call(arr, function (x) { return ('00' + x.toString(16)).slice(-2); })
        .join('');
}


/***/ }),

/***/ 75985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-undef */
var js_sha3_1 = __webpack_require__(94474);
var _1 = __webpack_require__(15433);
var elliptic_1 = __webpack_require__(75367);
var secp256k1 = new elliptic_1.ec('secp256k1');
var bytesLength = function (a) { return (a.length - 2) / 2; };
var bytesSlice = function (i, j, bs) {
    return '0x' + bs.slice(i * 2 + 2, j * 2 + 2);
};
var bytesToNumber = function (hex) { return parseInt(hex.slice(2), 16); };
var decodeSignature = function (hex) { return [
    bytesSlice(64, bytesLength(hex), hex),
    bytesSlice(0, 32, hex),
    bytesSlice(32, 64, hex),
]; };
var toChecksum = function (address) {
    var addressHash = js_sha3_1.keccak256(address.slice(2));
    var checksumAddress = '0x';
    for (var i = 0; i < 40; i++) {
        checksumAddress +=
            parseInt(addressHash[i + 2], 16) > 7
                ? address[i + 2].toUpperCase()
                : address[i + 2];
    }
    return checksumAddress;
};
exports.hashMessage = function (message) {
    var messageBytes = _1.hexToBytes(Buffer.from(message, 'utf8').toString('hex'));
    var messageBuffer = Buffer.from(messageBytes);
    var preamble = '\x19Ethereum Signed Message:\n' + messageBytes.length;
    var preambleBuffer = Buffer.from(preamble);
    var ethMessage = Buffer.concat([preambleBuffer, messageBuffer]);
    return '0x' + js_sha3_1.keccak256(ethMessage.toString());
};
exports.recover = function (message, signature) {
    var hash = exports.hashMessage(message);
    var vals = decodeSignature(signature);
    var vrs = {
        v: bytesToNumber(vals[0]),
        r: vals[1].slice(2),
        s: vals[2].slice(2),
    };
    var ecPublicKey = secp256k1.recoverPubKey(Buffer.from(hash.slice(2), 'hex'), vrs, vrs.v < 2 ? vrs.v : 1 - (vrs.v % 2));
    var publicKey = '0x' + ecPublicKey.encode('hex', false).slice(2);
    var publicHash = '0x' + js_sha3_1.keccak256(_1.hexToBytes(publicKey));
    return toChecksum('0x' + publicHash.slice(-40));
};


/***/ }),

/***/ 20764:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var configurationError_1 = __importStar(__webpack_require__(90319));
/**
 * Function tries to require module and throw error if module is not found.
 * @param module - Module name or path
 * @param dependencyName NPM name of the requested module
 * @param allowedVersions Allowed versions of requested module
 * @throws ConfigurationError
 */
function requireOrFail(module, dependencyName, allowedVersions) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        return __webpack_require__(78853)(module);
    }
    catch (e) {
        throw new configurationError_1.default(configurationError_1.ConfigurationErrorCode.DependencyMissing, {
            dependency: dependencyName,
            version: allowedVersions,
        });
    }
}
exports.requireOrFail = requireOrFail;


/***/ }),

/***/ 72367:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

/* eslint-disable no-undef */
/**
 * All functionality below came from here https://github.com/Zilliqa/Zilliqa-JavaScript-Library/tree/dev/packages/zilliqa-js-crypto/src
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var bn_js_1 = __importDefault(__webpack_require__(28891));
var js_sha256_1 = __webpack_require__(23356);
var index_1 = __webpack_require__(15433);
var CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
var GENERATOR = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
// HRP is the human-readable part of zilliqa bech32 addresses
var HRP = 'zil';
var tHRP = 'tzil';
function isByteString(str, len) {
    return !!str.replace('0x', '').match("^[0-9a-fA-F]{" + len + "}$");
}
function isAddress(address) {
    return isByteString(address, 40);
}
/**
 * convertBits
 *
 * groups buffers of a certain width to buffers of the desired width.
 *
 * For example, converts byte buffers to buffers of maximum 5 bit numbers,
 * padding those numbers as necessary. Necessary for encoding Ethereum-style
 * addresses as bech32 ones.
 * @param {Buffer} data
 * @param {number} fromWidth
 * @param {number} toWidth
 * @param {boolean} pad
 * @returns {Buffer|null}
 */
function convertBits(data, fromWidth, toWidth, pad) {
    if (pad === void 0) { pad = true; }
    var acc = 0;
    var bits = 0;
    var ret = [];
    var maxv = (1 << toWidth) - 1;
    // tslint:disable-next-line
    for (var p = 0; p < data.length; ++p) {
        var value = data[p];
        if (value < 0 || value >> fromWidth !== 0) {
            return null;
        }
        acc = (acc << fromWidth) | value;
        bits += fromWidth;
        while (bits >= toWidth) {
            bits -= toWidth;
            ret.push((acc >> bits) & maxv);
        }
    }
    if (pad) {
        if (bits > 0) {
            ret.push((acc << (toWidth - bits)) & maxv);
        }
    }
    else if (bits >= fromWidth || (acc << (toWidth - bits)) & maxv) {
        return null;
    }
    return Buffer.from(ret);
}
function hrpExpand(hrp) {
    var ret = [];
    var p;
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) >> 5);
    }
    ret.push(0);
    for (p = 0; p < hrp.length; ++p) {
        ret.push(hrp.charCodeAt(p) & 31);
    }
    return Buffer.from(ret);
}
function polymod(values) {
    var chk = 1;
    // tslint:disable-next-line
    for (var p = 0; p < values.length; ++p) {
        var top_1 = chk >> 25;
        chk = ((chk & 0x1ffffff) << 5) ^ values[p];
        for (var i = 0; i < 5; ++i) {
            if ((top_1 >> i) & 1) {
                chk ^= GENERATOR[i];
            }
        }
    }
    return chk;
}
function createChecksum(hrp, data) {
    var values = Buffer.concat([
        Buffer.from(hrpExpand(hrp)),
        data,
        Buffer.from([0, 0, 0, 0, 0, 0]),
    ]);
    // var values = hrpExpand(hrp).concat(data).concat([0, 0, 0, 0, 0, 0]);
    var mod = polymod(values) ^ 1;
    var ret = [];
    for (var p = 0; p < 6; ++p) {
        ret.push((mod >> (5 * (5 - p))) & 31);
    }
    return Buffer.from(ret);
}
function verifyChecksum(hrp, data) {
    return polymod(Buffer.concat([hrpExpand(hrp), data])) === 1;
}
function encode(hrp, data) {
    var combined = Buffer.concat([data, createChecksum(hrp, data)]);
    var ret = hrp + '1';
    // tslint:disable-next-line
    for (var p = 0; p < combined.length; ++p) {
        ret += CHARSET.charAt(combined[p]);
    }
    return ret;
}
function decode(bechString) {
    var p;
    var hasLower = false;
    var hasUpper = false;
    for (p = 0; p < bechString.length; ++p) {
        if (bechString.charCodeAt(p) < 33 || bechString.charCodeAt(p) > 126) {
            return null;
        }
        if (bechString.charCodeAt(p) >= 97 && bechString.charCodeAt(p) <= 122) {
            hasLower = true;
        }
        if (bechString.charCodeAt(p) >= 65 && bechString.charCodeAt(p) <= 90) {
            hasUpper = true;
        }
    }
    if (hasLower && hasUpper) {
        return null;
    }
    bechString = bechString.toLowerCase();
    var pos = bechString.lastIndexOf('1');
    if (pos < 1 || pos + 7 > bechString.length || bechString.length > 90) {
        return null;
    }
    var hrp = bechString.substring(0, pos);
    var data = [];
    for (p = pos + 1; p < bechString.length; ++p) {
        var d = CHARSET.indexOf(bechString.charAt(p));
        if (d === -1) {
            return null;
        }
        data.push(d);
    }
    if (!verifyChecksum(hrp, Buffer.from(data))) {
        return null;
    }
    return { hrp: hrp, data: Buffer.from(data.slice(0, data.length - 6)) };
}
/**
 * toChecksumAddress
 *
 * takes hex-encoded string and returns the corresponding address
 * @param {string} address
 * @returns {string}
 */
exports.toChecksumAddress = function (address) {
    if (!isAddress(address)) {
        throw new Error(address + " is not a valid base 16 address");
    }
    address = address.toLowerCase().replace('0x', '');
    var hash = js_sha256_1.sha256(index_1.hexToBytes(address));
    var v = new bn_js_1.default(hash, 'hex', 'be');
    var ret = '0x';
    for (var i = 0; i < address.length; i++) {
        if ('0123456789'.indexOf(address[i]) !== -1) {
            ret += address[i];
        }
        else {
            ret += v.and(new bn_js_1.default(2).pow(new bn_js_1.default(255 - 6 * i))).gte(new bn_js_1.default(1))
                ? address[i].toUpperCase()
                : address[i].toLowerCase();
        }
    }
    return ret;
};
/**
 * toBech32Address
 *
 * Encodes a canonical 20-byte Ethereum-style address as a bech32 zilliqa
 * address.
 *
 * The expected format is zil1<address><checksum> where address and checksum
 * are the result of bech32 encoding a Buffer containing the address bytes.
 * @param {string} address 20 byte canonical address
 * @param {boolean} testnet
 * @returns {string} 38 char bech32 encoded zilliqa address
 */
function toBech32Address(address, testnet) {
    if (testnet === void 0) { testnet = false; }
    if (!isAddress(address)) {
        throw new Error('Invalid address format.');
    }
    var addrBz = convertBits(Buffer.from(address.replace('0x', ''), 'hex'), 8, 5);
    if (addrBz === null) {
        throw new Error('Could not convert byte Buffer to 5-bit Buffer');
    }
    return encode(testnet ? tHRP : HRP, addrBz);
}
exports.toBech32Address = toBech32Address;
/**
 * fromBech32Address
 * @param {string} address - a valid Zilliqa bech32 address
 * @param {boolean} testnet
 * @returns {string} a canonical 20-byte Ethereum-style address
 */
function fromBech32Address(address, testnet) {
    if (testnet === void 0) { testnet = false; }
    var res = decode(address);
    if (res === null) {
        throw new Error('Invalid bech32 address');
    }
    var hrp = res.hrp, data = res.data;
    var shouldBe = testnet ? tHRP : HRP;
    if (hrp !== shouldBe) {
        throw new Error("Expected hrp to be " + shouldBe + " but got " + hrp);
    }
    var buf = convertBits(data, 5, 8, false);
    if (buf === null) {
        throw new Error('Could not convert buffer to bytes');
    }
    return exports.toChecksumAddress(buf.toString('hex'));
}
exports.fromBech32Address = fromBech32Address;


/***/ }),

/***/ 45:
/***/ ((module) => {

module.exports = JSON.parse('{"version":"1.1.1","keys":{"crypto.BTC.address":{"deprecatedKeyName":"BTC","deprecated":false,"validationRegex":"^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$"},"crypto.ETH.address":{"deprecatedKeyName":"ETH","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.ZIL.address":{"deprecatedKeyName":"ZIL","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$|^zil1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{38}$"},"crypto.LTC.address":{"deprecatedKeyName":"LTC","deprecated":false,"validationRegex":"^[LM3][a-km-zA-HJ-NP-Z1-9]{26,33}$|^ltc1[a-zA-HJ-NP-Z0-9]{25,39}$"},"crypto.ETC.address":{"deprecatedKeyName":"ETC","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.EQL.address":{"deprecatedKeyName":"EQL","deprecated":false,"validationRegex":"^bnb[0-9a-z]{39}$"},"crypto.LINK.address":{"deprecatedKeyName":"LINK","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.USDC.address":{"deprecatedKeyName":"USDC","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.BAT.address":{"deprecatedKeyName":"BAT","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.REP.address":{"deprecatedKeyName":"REP","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.ZRX.address":{"deprecatedKeyName":"ZRX","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.DAI.address":{"deprecatedKeyName":"DAI","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.BCH.address":{"deprecatedKeyName":"BCH","deprecated":false,"validationRegex":"^[13][a-km-zA-HJ-NP-Z1-9]{33}$|^((bitcoincash|bchreg|bchtest):)?(q|p)[a-z0-9]{41}$|^((BITCOINCASH:)?(Q|P)[A-Z0-9]{41})$"},"crypto.XMR.address":{"deprecatedKeyName":"XMR","deprecated":false,"validationRegex":"^[48]{1}[0-9AB][1-9A-HJ-NP-Za-km-z]{93}$"},"crypto.DASH.address":{"deprecatedKeyName":"DASH","deprecated":false,"validationRegex":"^X[1-9A-HJ-NP-Za-km-z]{33}$"},"crypto.NEO.address":{"deprecatedKeyName":"NEO","deprecated":false,"validationRegex":"^A[0-9a-zA-Z]{33}$"},"crypto.SWTH.address":{"deprecatedKeyName":"SWTH","deprecated":false,"validationRegex":"^A[0-9a-zA-Z]{33}$"},"crypto.DOGE.address":{"deprecatedKeyName":"DOGE","deprecated":false,"validationRegex":"^D[5-9A-HJ-NP-U]{1}[1-9A-HJ-NP-Za-km-z]{32}$"},"crypto.XRP.address":{"deprecatedKeyName":"XRP","deprecated":false,"validationRegex":"^r[1-9a-km-zA-HJ-NP-Z]{24,34}$"},"crypto.ZEC.address":{"deprecatedKeyName":"ZEC","deprecated":false,"validationRegex":"^z([a-zA-Z0-9]){94}$|^zs([a-zA-Z0-9]){75}$|^t([a-zA-Z0-9]){34}$"},"crypto.ADA.address":{"deprecatedKeyName":"ADA","deprecated":false,"validationRegex":"^[1-9a-km-zA-HJ-NP-Z]{104}$|^A[1-9A-HJ-NP-Za-km-z]{58}$|^addr[0-9a-zA-Z]{99}$"},"crypto.EOS.address":{"deprecatedKeyName":"EOS","deprecated":false,"validationRegex":"^[a-z][a-z1-5.]{10}[a-z1-5]$"},"crypto.XLM.address":{"deprecatedKeyName":"XLM","deprecated":false,"validationRegex":"^G[A-Z2-7]{55}$"},"crypto.BNB.address":{"deprecatedKeyName":"BNB","deprecated":false,"validationRegex":"^bnb[0-9a-z]{39}$"},"crypto.BTG.address":{"deprecatedKeyName":"BTG","deprecated":false,"validationRegex":"^[GA][a-km-zA-HJ-NP-Z1-9]{33}$"},"crypto.NANO.address":{"deprecatedKeyName":"NANO","deprecated":false,"validationRegex":"^nano_[1-9a-z]{60}$"},"crypto.WAVES.address":{"deprecatedKeyName":"WAVES","deprecated":false,"validationRegex":"^3[a-km-zA-HJ-NP-Z1-9]{34}$"},"crypto.KMD.address":{"deprecatedKeyName":"KMD","deprecated":false,"validationRegex":"^R[a-km-zA-Z1-9]{33}$"},"crypto.AE.address":{"deprecatedKeyName":"AE","deprecated":false,"validationRegex":"^ak_[a-km-zA-Z1-9]{48,52}$"},"crypto.RSK.address":{"deprecatedKeyName":"RSK","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.WAN.address":{"deprecatedKeyName":"WAN","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.STRAT.address":{"deprecatedKeyName":"STRAT","deprecated":false,"validationRegex":"^S[a-km-zA-HJ-NP-Z1-9]{33}$"},"crypto.UBQ.address":{"deprecatedKeyName":"UBQ","deprecated":false,"validationRegex":"^0x[a-km-zA-HJ-NP-Z0-9]{40}$"},"crypto.XTZ.address":{"deprecatedKeyName":"XTZ","deprecated":false,"validationRegex":"^(tz|KT)[a-km-zA-HJ-NP-Z1-9]{34}$"},"crypto.IOTA.address":{"deprecatedKeyName":"IOTA","deprecated":false,"validationRegex":"^[A-Z0-9]{90}$"},"crypto.VET.address":{"deprecatedKeyName":"VET","deprecated":false,"validationRegex":"^0x[a-km-zA-HJ-NP-Z0-9]{40}$"},"crypto.QTUM.address":{"deprecatedKeyName":"QTUM","deprecated":false,"validationRegex":"^Q[a-km-zA-HJ-NP-Z1-9]{33}$"},"crypto.ICX.address":{"deprecatedKeyName":"ICX","deprecated":false,"validationRegex":"^[a-km-zA-HJ-NP-Z0-9]{42}$"},"crypto.DGB.address":{"deprecatedKeyName":"DGB","deprecated":false,"validationRegex":"(^[a-km-zA-HJ-NP-Z1-9]{34}$)|(^[a-zA-Z1-9]{42}$)|(^dgb1[a-zA-Z0-9]{39}$)"},"crypto.XZC.address":{"deprecatedKeyName":"XZC","deprecated":false,"validationRegex":"^[a-km-zA-HJ-NP-Z1-9]{34}$"},"crypto.BURST.address":{"deprecatedKeyName":"BURST","deprecated":false,"validationRegex":"^BURST-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{5}"},"crypto.DCR.address":{"deprecatedKeyName":"DCR","deprecated":false,"validationRegex":null},"crypto.XEM.address":{"deprecatedKeyName":"XEM","deprecated":false,"validationRegex":"^N[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{39}$"},"crypto.LSK.address":{"deprecatedKeyName":"LSK","deprecated":false,"validationRegex":"^\\\\d{1,21}[L]$"},"crypto.ATOM.address":{"deprecatedKeyName":"ATOM","deprecated":false,"validationRegex":"^(cosmos)1([qpzry9x8gf2tvdw0s3jn54khce6mua7l]+)$"},"crypto.ONG.address":{"deprecatedKeyName":"ONG","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ONT.address":{"deprecatedKeyName":"ONT","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.SMART.address":{"deprecatedKeyName":"SMART","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.TPAY.address":{"deprecatedKeyName":"TPAY","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.GRS.address":{"deprecatedKeyName":"GRS","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.BSV.address":{"deprecatedKeyName":"BSV","deprecated":false,"validationRegex":"^bitcoincash:[a-zA-Z0-9]{42}$"},"crypto.GAS.address":{"deprecatedKeyName":"GAS","deprecated":false,"validationRegex":null},"crypto.TRX.address":{"deprecatedKeyName":"TRX","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.VTHO.address":{"deprecatedKeyName":"VTHO","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{42}$"},"crypto.BCD.address":{"deprecatedKeyName":"BCD","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.BTT.address":{"deprecatedKeyName":"BTT","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.KIN.address":{"deprecatedKeyName":"KIN","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{56}$"},"crypto.RVN.address":{"deprecatedKeyName":"RVN","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ARK.address":{"deprecatedKeyName":"ARK","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.XVG.address":{"deprecatedKeyName":"XVG","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ALGO.address":{"deprecatedKeyName":"ALGO","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{58}$"},"crypto.NEBL.address":{"deprecatedKeyName":"NEBL","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.XPM.address":{"deprecatedKeyName":"XPM","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.ONE.address":{"deprecatedKeyName":"ONE","deprecated":false,"validationRegex":"^one[a-zA-Z0-9]{39}$"},"crypto.BNTY.address":{"deprecatedKeyName":"BNTY","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.CRO.address":{"deprecatedKeyName":"CRO","deprecated":false,"validationRegex":"^0x[a-fA-F0-9]{40}$"},"crypto.TWT.address":{"deprecatedKeyName":"TWT","deprecated":false,"validationRegex":"^bnb[0-9a-z]{39}$"},"crypto.SIERRA.address":{"deprecatedKeyName":"SIERRA","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{34}$"},"crypto.VSYS.address":{"deprecatedKeyName":"VSYS","deprecated":false,"validationRegex":"^[a-zA-Z0-9]{35}$"},"crypto.HIVE.address":{"deprecatedKeyName":"HIVE","validationRegex":"^(?!s*$).+","deprecated":false},"crypto.HT.address":{"deprecatedKeyName":"HT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ENJ.address":{"deprecatedKeyName":"ENJ","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.YFI.address":{"deprecatedKeyName":"YFI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MTA.address":{"deprecatedKeyName":"MTA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.COMP.address":{"deprecatedKeyName":"COMP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAL.address":{"deprecatedKeyName":"BAL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AMPL.address":{"deprecatedKeyName":"AMPL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LEND.address":{"deprecatedKeyName":"LEND","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TLOS.address":{"deprecatedKeyName":"TLOS","validationRegex":"^[a-z][a-z1-5.]{10}[a-z1-5]$","deprecated":false},"crypto.XDC.address":{"deprecatedKeyName":"XDC","validationRegex":"^xdc[a-fA-F0-9]{40}$","deprecated":false},"crypto.XST.address":{"deprecatedKeyName":"XST","validationRegex":"(?:RwxQ3jUs2BjKhseNX1em4msn2GyV5XAec[PQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|RwxQ3jUs2BjKhseNX1em4msn2GyV5XAe[defghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|RwxQ3jUs2BjKhseNX1em4msn2GyV5XA[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{2}|RwxQ3jUs2BjKhseNX1em4msn2GyV5X[BCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{3}|RwxQ3jUs2BjKhseNX1em4msn2GyV5[YZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{4}|RwxQ3jUs2BjKhseNX1em4msn2GyV[6789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{5}|RwxQ3jUs2BjKhseNX1em4msn2Gy[WXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{6}|RwxQ3jUs2BjKhseNX1em4msn2G[z][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{7}|RwxQ3jUs2BjKhseNX1em4msn2[HJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{8}|RwxQ3jUs2BjKhseNX1em4msn[3456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{9}|RwxQ3jUs2BjKhseNX1em4ms[opqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{10}|RwxQ3jUs2BjKhseNX1em4m[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{11}|RwxQ3jUs2BjKhseNX1em4[nopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{12}|RwxQ3jUs2BjKhseNX1em[56789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{13}|RwxQ3jUs2BjKhseNX1e[nopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{14}|RwxQ3jUs2BjKhseNX1[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{15}|RwxQ3jUs2BjKhseNX[23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{16}|RwxQ3jUs2BjKhseN[YZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{17}|RwxQ3jUs2BjKhse[PQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{18}|RwxQ3jUs2BjKhs[fghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{19}|RwxQ3jUs2BjKh[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{20}|RwxQ3jUs2BjK[ijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}|RwxQ3jUs2Bj[LMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{22}|RwxQ3jUs2B[kmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{23}|RwxQ3jUs2[CDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{24}|RwxQ3jUs[3456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}|RwxQ3jU[tuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{26}|RwxQ3j[VWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{27}|RwxQ3[kmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{28}|RwxQ[456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|Rwx[RSTUVWXYZabcdefghijkmnopqrstuvwxyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{30}|Rw[yz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{31}|R[xyz][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{32}|S[123456789ABCDEFGHJKL][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{32}|SM[123456789ABCDEFGH][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{31}|SMJ11[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|SMJ11[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{29}|SMJ12[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnop][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{28}|SMJ12q[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{27}|SMJ12qn[12345678][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{26}|SMJ12qn9[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{25}|SMJ12qn9j[123456789ABCDEFGHJKLM][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{24}|SMJ12qn9jN[123456789AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{23}|SMJ12qn9jNC[123456789AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{22}|SMJ12qn9jNCC[123456789ABCDEFGHJKLMNPQRSTUVW][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{21}|SMJ12qn9jNCCX[123456789ABCDEFGH][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{20}|SMJ12qn9jNCCXJ[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{19}|SMJ12qn9jNCCXJn[123456789ABCDEFGHJKLMNPQRS][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{18}|SMJ12qn9jNCCXJnT[123456789ABCDEFGHJKLMNPQRSTUVWX][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{17}|SMJ12qn9jNCCXJnTY[123456789ABCDEFGHJKLMNPQ][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{16}|SMJ12qn9jNCCXJnTYR[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxy][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{15}|SMJ12qn9jNCCXJnTYRz[1234][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{14}|SMJ12qn9jNCCXJnTYRz5[123456789ABCDEFGHJKLMNPQRSTUVWX][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{13}|SMJ12qn9jNCCXJnTYRz5Y[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrst][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{12}|SMJ12qn9jNCCXJnTYRz5Yu[12345678][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{11}|SMJ12qn9jNCCXJnTYRz5Yu9[123456789ABCDEFGHJKLMNPQRSTUVWXY][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{10}|SMJ12qn9jNCCXJnTYRz5Yu9Z[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcd][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{9}|SMJ12qn9jNCCXJnTYRz5Yu9Ze[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{8}|SMJ12qn9jNCCXJnTYRz5Yu9Zen[123456789ABCD][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{7}|SMJ12qn9jNCCXJnTYRz5Yu9ZenE[123456789ABCDEFGHJKLMNPQ][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{6}|SMJ12qn9jNCCXJnTYRz5Yu9ZenER[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkm][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{5}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERn[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghij][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{4}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnk[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghij][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{3}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkk[123456789ABCDEFGHJKLMNPQRST][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{2}|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkkU[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstu][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]|SMJ12qn9jNCCXJnTYRz5Yu9ZenERnkkUv[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghi])","deprecated":false},"crypto.STRAX.address":{"deprecatedKeyName":"STRAX","validationRegex":"^X[a-km-zA-HJ-NP-Z1-9]{33}$","deprecated":false},"crypto.USDT.version.ERC20.address":{"deprecatedKeyName":"USDT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.USDT.version.TRON.address":{"deprecatedKeyName":"USDT_TRON","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.USDT.version.EOS.address":{"deprecatedKeyName":"USDT_EOS","validationRegex":"^[a-z][a-z1-5.]{10}[a-z1-5]$","deprecated":false},"crypto.USDT.version.OMNI.address":{"deprecatedKeyName":"USDT_OMNI","validationRegex":"^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$","deprecated":false},"crypto.FTM.version.ERC20.address":{"deprecatedKeyName":"FTM_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FTM.version.BEP2.address":{"deprecatedKeyName":"FTM_BEP2","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.FTM.version.OPERA.address":{"deprecatedKeyName":"FTM_OPERA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FUSE.version.ERC20.address":{"deprecatedKeyName":"FUSE_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FUSE.version.FUSE.address":{"deprecatedKeyName":"FUSE_FUSE","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"social.payid.name":{"deprecatedKeyName":"payid","validationRegex":"^[0-9a-zA-Z]+\\\\$[0-9a-zA-Z]+\\\\.[0-9a-zA-Z]+$","deprecated":false},"whois.email.value":{"deprecatedKeyName":"email","validationRegex":"^[^@]+@[^\\\\.]+\\\\..+$","deprecated":false},"whois.for_sale.value":{"deprecatedKeyName":"for_sale","validationRegex":"(true)|(false)","deprecated":false},"ipfs.html.value":{"deprecatedKeyName":"html","validationRegex":".{0,100}","deprecated":false},"ipfs.redirect_domain.value":{"deprecatedKeyName":"redirect_domain","validationRegex":".{0,253}","deprecated":false},"dweb.ipfs.hash":{"deprecatedKeyName":"dweb_hash","validationRegex":".{0,100}","deprecated":false},"browser.redirect_url":{"deprecatedKeyName":"browser_redirect","validationRegex":".{0,253}","deprecated":false},"browser.preferred_protocols":{"deprecatedKeyName":"browser_preferred_protocols","validationRegex":null,"deprecated":false},"gundb.username.value":{"deprecatedKeyName":"gundb_username","validationRegex":null,"deprecated":false},"gundb.public_key.value":{"deprecatedKeyName":"gundb_public_key","validationRegex":null,"deprecated":false},"social.image.value":{"deprecatedKeyName":"image","validationRegex":null,"deprecated":false},"social.twitter.username":{"deprecatedKeyName":"twitter_username","validationRegex":null,"deprecated":false},"validation.social.twitter.username":{"deprecatedKeyName":"validation_twitter_username","validationRegex":null,"deprecated":false},"forwarding.url":{"deprecatedKeyName":"forwarding_url","validationRegex":"^(https?)://[^\\\\s/$.?#].[^\\\\s]*$","deprecated":false},"dns.ttl":{"deprecatedKeyName":"dns_ttl","validationRegex":null,"deprecated":false},"dns.A":{"deprecatedKeyName":"dns_A","validationRegex":null,"deprecated":false},"dns.A.ttl":{"deprecatedKeyName":"dns_A_ttl","validationRegex":null,"deprecated":false},"dns.AAAA":{"deprecatedKeyName":"dns_AAAA","validationRegex":null,"deprecated":false},"dns.AAAA.ttl":{"deprecatedKeyName":"dns_AAAA_ttl","validationRegex":null,"deprecated":false},"dns.AFSDB":{"deprecatedKeyName":"dns_AFSDB","validationRegex":null,"deprecated":false},"dns.AFSDB.ttl":{"deprecatedKeyName":"dns_AFSDB_ttl","validationRegex":null,"deprecated":false},"dns.APL":{"deprecatedKeyName":"dns_APL","validationRegex":null,"deprecated":false},"dns.APL.ttl":{"deprecatedKeyName":"dns_APL_ttl","validationRegex":null,"deprecated":false},"dns.CAA":{"deprecatedKeyName":"dns_CAA","validationRegex":null,"deprecated":false},"dns.CAA.ttl":{"deprecatedKeyName":"dns_CAA_ttl","validationRegex":null,"deprecated":false},"dns.CDNSKEY":{"deprecatedKeyName":"dns_CDNSKEY","validationRegex":null,"deprecated":false},"dns.CDNSKEY.ttl":{"deprecatedKeyName":"dns_CDNSKEY_ttl","validationRegex":null,"deprecated":false},"dns.CDS":{"deprecatedKeyName":"dns_CDS","validationRegex":null,"deprecated":false},"dns.CDS.ttl":{"deprecatedKeyName":"dns_CDS_ttl","validationRegex":null,"deprecated":false},"dns.CERT":{"deprecatedKeyName":"dns_CERT","validationRegex":null,"deprecated":false},"dns.CERT.ttl":{"deprecatedKeyName":"dns_CERT_ttl","validationRegex":null,"deprecated":false},"dns.CNAME":{"deprecatedKeyName":"dns_CNAME","validationRegex":null,"deprecated":false},"dns.CNAME.ttl":{"deprecatedKeyName":"dns_CNAME_ttl","validationRegex":null,"deprecated":false},"dns.CSYNC":{"deprecatedKeyName":"dns_CSYNC","validationRegex":null,"deprecated":false},"dns.CSYNC.ttl":{"deprecatedKeyName":"dns_CSYNC_ttl","validationRegex":null,"deprecated":false},"dns.DHCID":{"deprecatedKeyName":"dns_DHCID","validationRegex":null,"deprecated":false},"dns.DHCID.ttl":{"deprecatedKeyName":"dns_DHCID_ttl","validationRegex":null,"deprecated":false},"dns.DLV":{"deprecatedKeyName":"dns_DLV","validationRegex":null,"deprecated":false},"dns.DLV.ttl":{"deprecatedKeyName":"dns_DLV_ttl","validationRegex":null,"deprecated":false},"dns.DNAME":{"deprecatedKeyName":"dns_DNAME","validationRegex":null,"deprecated":false},"dns.DNAME.ttl":{"deprecatedKeyName":"dns_DNAME_ttl","validationRegex":null,"deprecated":false},"dns.DNSKEY":{"deprecatedKeyName":"dns_DNSKEY","validationRegex":null,"deprecated":false},"dns.DNSKEY.ttl":{"deprecatedKeyName":"dns_DNSKEY_ttl","validationRegex":null,"deprecated":false},"dns.DS":{"deprecatedKeyName":"dns_DS","validationRegex":null,"deprecated":false},"dns.DS.ttl":{"deprecatedKeyName":"dns_DS_ttl","validationRegex":null,"deprecated":false},"dns.EUI48":{"deprecatedKeyName":"dns_EUI48","validationRegex":null,"deprecated":false},"dns.EUI48.ttl":{"deprecatedKeyName":"dns_EUI48_ttl","validationRegex":null,"deprecated":false},"dns.EUI64":{"deprecatedKeyName":"dns_EUI64","validationRegex":null,"deprecated":false},"dns.EUI64.ttl":{"deprecatedKeyName":"dns_EUI64_ttl","validationRegex":null,"deprecated":false},"dns.HINFO":{"deprecatedKeyName":"dns_HINFO","validationRegex":null,"deprecated":false},"dns.HINFO.ttl":{"deprecatedKeyName":"dns_HINFO_ttl","validationRegex":null,"deprecated":false},"dns.HIP":{"deprecatedKeyName":"dns_HIP","validationRegex":null,"deprecated":false},"dns.HIP.ttl":{"deprecatedKeyName":"dns_HIP_ttl","validationRegex":null,"deprecated":false},"dns.HTTPS":{"deprecatedKeyName":"dns_HTTPS","validationRegex":null,"deprecated":false},"dns.HTTPS.ttl":{"deprecatedKeyName":"dns_HTTPS_ttl","validationRegex":null,"deprecated":false},"dns.IPSECKEY":{"deprecatedKeyName":"dns_IPSECKEY","validationRegex":null,"deprecated":false},"dns.IPSECKEY.ttl":{"deprecatedKeyName":"dns_IPSECKEY_ttl","validationRegex":null,"deprecated":false},"dns.KEY":{"deprecatedKeyName":"dns_KEY","validationRegex":null,"deprecated":false},"dns.KEY.ttl":{"deprecatedKeyName":"dns_KEY_ttl","validationRegex":null,"deprecated":false},"dns.KX":{"deprecatedKeyName":"dns_KX","validationRegex":null,"deprecated":false},"dns.KX.ttl":{"deprecatedKeyName":"dns_KX_ttl","validationRegex":null,"deprecated":false},"dns.LOC":{"deprecatedKeyName":"dns_LOC","validationRegex":null,"deprecated":false},"dns.LOC.ttl":{"deprecatedKeyName":"dns_LOC_ttl","validationRegex":null,"deprecated":false},"dns.MX":{"deprecatedKeyName":"dns_MX","validationRegex":null,"deprecated":false},"dns.MX.ttl":{"deprecatedKeyName":"dns_MX_ttl","validationRegex":null,"deprecated":false},"dns.NAPTR":{"deprecatedKeyName":"dns_NAPTR","validationRegex":null,"deprecated":false},"dns.NAPTR.ttl":{"deprecatedKeyName":"dns_NAPTR_ttl","validationRegex":null,"deprecated":false},"dns.NS":{"deprecatedKeyName":"dns_NS","validationRegex":null,"deprecated":false},"dns.NS.ttl":{"deprecatedKeyName":"dns_NS_ttl","validationRegex":null,"deprecated":false},"dns.NSEC":{"deprecatedKeyName":"dns_NSEC","validationRegex":null,"deprecated":false},"dns.NSEC.ttl":{"deprecatedKeyName":"dns_NSEC_ttl","validationRegex":null,"deprecated":false},"dns.NSEC3":{"deprecatedKeyName":"dns_NSEC3","validationRegex":null,"deprecated":false},"dns.NSEC3.ttl":{"deprecatedKeyName":"dns_NSEC3_ttl","validationRegex":null,"deprecated":false},"dns.NSEC3PARAM":{"deprecatedKeyName":"dns_NSEC3PARAM","validationRegex":null,"deprecated":false},"dns.NSEC3PARAM.ttl":{"deprecatedKeyName":"dns_NSEC3PARAM_ttl","validationRegex":null,"deprecated":false},"dns.OPENPGPKEY":{"deprecatedKeyName":"dns_OPENPGPKEY","validationRegex":null,"deprecated":false},"dns.OPENPGPKEY.ttl":{"deprecatedKeyName":"dns_OPENPGPKEY_ttl","validationRegex":null,"deprecated":false},"dns.PTR":{"deprecatedKeyName":"dns_PTR","validationRegex":null,"deprecated":false},"dns.PTR.ttl":{"deprecatedKeyName":"dns_PTR_ttl","validationRegex":null,"deprecated":false},"dns.RP":{"deprecatedKeyName":"dns_RP","validationRegex":null,"deprecated":false},"dns.RP.ttl":{"deprecatedKeyName":"dns_RP_ttl","validationRegex":null,"deprecated":false},"dns.RRSIG":{"deprecatedKeyName":"dns_RRSIG","validationRegex":null,"deprecated":false},"dns.RRSIG.ttl":{"deprecatedKeyName":"dns_RRSIG_ttl","validationRegex":null,"deprecated":false},"dns.SIG":{"deprecatedKeyName":"dns_SIG","validationRegex":null,"deprecated":false},"dns.SIG.ttl":{"deprecatedKeyName":"dns_SIG_ttl","validationRegex":null,"deprecated":false},"dns.SMIMEA":{"deprecatedKeyName":"dns_SMIMEA","validationRegex":null,"deprecated":false},"dns.SMIMEA.ttl":{"deprecatedKeyName":"dns_SMIMEA_ttl","validationRegex":null,"deprecated":false},"dns.SOA":{"deprecatedKeyName":"dns_SOA","validationRegex":null,"deprecated":false},"dns.SOA.ttl":{"deprecatedKeyName":"dns_SOA_ttl","validationRegex":null,"deprecated":false},"dns.SRV":{"deprecatedKeyName":"dns_SRV","validationRegex":null,"deprecated":false},"dns.SRV.ttl":{"deprecatedKeyName":"dns_SRV_ttl","validationRegex":null,"deprecated":false},"dns.SSHFP":{"deprecatedKeyName":"dns_SSHFP","validationRegex":null,"deprecated":false},"dns.SSHFP.ttl":{"deprecatedKeyName":"dns_SSHFP_ttl","validationRegex":null,"deprecated":false},"dns.SVCB":{"deprecatedKeyName":"dns_SVCB","validationRegex":null,"deprecated":false},"dns.SVCB.ttl":{"deprecatedKeyName":"dns_SVCB_ttl","validationRegex":null,"deprecated":false},"dns.TA":{"deprecatedKeyName":"dns_TA","validationRegex":null,"deprecated":false},"dns.TA.ttl":{"deprecatedKeyName":"dns_TA_ttl","validationRegex":null,"deprecated":false},"dns.TKEY":{"deprecatedKeyName":"dns_TKEY","validationRegex":null,"deprecated":false},"dns.TKEY.ttl":{"deprecatedKeyName":"dns_TKEY_ttl","validationRegex":null,"deprecated":false},"dns.TLSA":{"deprecatedKeyName":"dns_TLSA","validationRegex":null,"deprecated":false},"dns.TLSA.ttl":{"deprecatedKeyName":"dns_TLSA_ttl","validationRegex":null,"deprecated":false},"dns.TSIG":{"deprecatedKeyName":"dns_TSIG","validationRegex":null,"deprecated":false},"dns.TSIG.ttl":{"deprecatedKeyName":"dns_TSIG_ttl","validationRegex":null,"deprecated":false},"dns.TXT":{"deprecatedKeyName":"dns_TXT","validationRegex":null,"deprecated":false},"dns.TXT.ttl":{"deprecatedKeyName":"dns_TXT_ttl","validationRegex":null,"deprecated":false},"dns.URI":{"deprecatedKeyName":"dns_URI","validationRegex":null,"deprecated":false},"dns.URI.ttl":{"deprecatedKeyName":"dns_URI_ttl","validationRegex":null,"deprecated":false},"dns.ZONEMD":{"deprecatedKeyName":"dns_ZONEMD","validationRegex":null,"deprecated":false},"dns.ZONEMD.ttl":{"deprecatedKeyName":"dns_ZONEMD_ttl","validationRegex":null,"deprecated":false},"crypto.DOT.address":{"deprecatedKeyName":"DOT","validationRegex":null,"deprecated":false},"crypto.UNI.version.ERC20.address":{"deprecatedKeyName":"UNI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UNI.version.BEP20.address":{"deprecatedKeyName":"UNI_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UNI.version.HECO.address":{"deprecatedKeyName":"UNI_HECO","validationRegex":null,"deprecated":false},"crypto.UNI.version.MATIC.address":{"deprecatedKeyName":"UNI_MATIC","validationRegex":null,"deprecated":false},"crypto.UNI.version.HRC20.address":{"deprecatedKeyName":"UNI_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UNI.version.XDAI.address":{"deprecatedKeyName":"UNI_XDAI","validationRegex":null,"deprecated":false},"crypto.SOL.address":{"deprecatedKeyName":"SOL","validationRegex":null,"deprecated":false},"crypto.BUSD.version.ERC20.address":{"deprecatedKeyName":"BUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BUSD.version.BEP20.address":{"deprecatedKeyName":"BUSD_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BUSD.version.HRC20.address":{"deprecatedKeyName":"BUSD_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ICP.address":{"deprecatedKeyName":"ICP","validationRegex":null,"deprecated":false},"crypto.THETA.address":{"deprecatedKeyName":"THETA","validationRegex":null,"deprecated":false},"crypto.WBTC.version.ERC20.address":{"deprecatedKeyName":"WBTC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WBTC.version.MATIC.address":{"deprecatedKeyName":"WBTC_MATIC","validationRegex":null,"deprecated":false},"crypto.WBTC.version.FANTOM.address":{"deprecatedKeyName":"WBTC_FANTOM","validationRegex":null,"deprecated":false},"crypto.WBTC.version.HRC20.address":{"deprecatedKeyName":"WBTC_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WBTC.version.XDAI.address":{"deprecatedKeyName":"WBTC_XDAI","validationRegex":null,"deprecated":false},"crypto.FIL.address":{"deprecatedKeyName":"FIL","validationRegex":null,"deprecated":false},"crypto.CDAI.address":{"deprecatedKeyName":"CDAI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KSM.address":{"deprecatedKeyName":"KSM","validationRegex":null,"deprecated":false},"crypto.OKB.address":{"deprecatedKeyName":"OKB","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AAVE.version.ERC20.address":{"deprecatedKeyName":"AAVE_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AAVE.version.HECO.address":{"deprecatedKeyName":"AAVE_HECO","validationRegex":null,"deprecated":false},"crypto.AAVE.version.MATIC.address":{"deprecatedKeyName":"AAVE_MATIC","validationRegex":null,"deprecated":false},"crypto.AAVE.version.FANTOM.address":{"deprecatedKeyName":"AAVE_FANTOM","validationRegex":null,"deprecated":false},"crypto.AAVE.version.HRC20.address":{"deprecatedKeyName":"AAVE_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SHIB.version.ERC20.address":{"deprecatedKeyName":"SHIB_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SHIB.version.MATIC.address":{"deprecatedKeyName":"SHIB_MATIC","validationRegex":null,"deprecated":false},"crypto.SHIB.version.FANTOM.address":{"deprecatedKeyName":"SHIB_FANTOM","validationRegex":null,"deprecated":false},"crypto.CEL.version.ERC20.address":{"deprecatedKeyName":"CEL_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CEL.version.MATIC.address":{"deprecatedKeyName":"CEL_MATIC","validationRegex":null,"deprecated":false},"crypto.CEL.version.FANTOM.address":{"deprecatedKeyName":"CEL_FANTOM","validationRegex":null,"deprecated":false},"crypto.CEL.version.HRC20.address":{"deprecatedKeyName":"CEL_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CUSDC.address":{"deprecatedKeyName":"CUSDC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CETH.address":{"deprecatedKeyName":"CETH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AMP.address":{"deprecatedKeyName":"AMP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CAKE.version.BEP20.address":{"deprecatedKeyName":"CAKE_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CAKE.version.HRC20.address":{"deprecatedKeyName":"CAKE_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MIOTA.address":{"deprecatedKeyName":"MIOTA","validationRegex":null,"deprecated":false},"crypto.FTT.address":{"deprecatedKeyName":"FTT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MKR.address":{"deprecatedKeyName":"MKR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TFUEL.address":{"deprecatedKeyName":"TFUEL","validationRegex":null,"deprecated":false},"crypto.KLAY.address":{"deprecatedKeyName":"KLAY","validationRegex":null,"deprecated":false},"crypto.LUNA.address":{"deprecatedKeyName":"LUNA","validationRegex":null,"deprecated":false},"crypto.AVAX.address":{"deprecatedKeyName":"AVAX","validationRegex":null,"deprecated":false},"crypto.LEO.address":{"deprecatedKeyName":"LEO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAFEMOON.version.BEP20.address":{"deprecatedKeyName":"SAFEMOON_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAFEMOON.version.HRC20.address":{"deprecatedKeyName":"SAFEMOON_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UST.address":{"deprecatedKeyName":"UST","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RUNE.address":{"deprecatedKeyName":"RUNE","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.HBAR.address":{"deprecatedKeyName":"HBAR","validationRegex":null,"deprecated":false},"crypto.TEL.version.ERC20.address":{"deprecatedKeyName":"TEL_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TEL.version.MATIC.address":{"deprecatedKeyName":"TEL_MATIC","validationRegex":null,"deprecated":false},"crypto.CHZ.address":{"deprecatedKeyName":"CHZ","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSHI.version.ERC20.address":{"deprecatedKeyName":"SUSHI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSHI.version.BEP20.address":{"deprecatedKeyName":"SUSHI_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSHI.version.MATIC.address":{"deprecatedKeyName":"SUSHI_MATIC","validationRegex":null,"deprecated":false},"crypto.SUSHI.version.FANTOM.address":{"deprecatedKeyName":"SUSHI_FANTOM","validationRegex":null,"deprecated":false},"crypto.SUSHI.version.HRC20.address":{"deprecatedKeyName":"SUSHI_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.EGLD.address":{"deprecatedKeyName":"EGLD","validationRegex":null,"deprecated":false},"crypto.TUSD.version.ERC20.address":{"deprecatedKeyName":"TUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TUSD.version.BEP20.address":{"deprecatedKeyName":"TUSD_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TUSD.version.AVAX.address":{"deprecatedKeyName":"TUSD_AVAX","validationRegex":null,"deprecated":false},"crypto.TUSD.version.HRC20.address":{"deprecatedKeyName":"TUSD_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TUSD.version.BEP2.address":{"deprecatedKeyName":"TUSD_BEP2","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.TUSD.version.TRON.address":{"deprecatedKeyName":"TUSD_TRON","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.HBTC.version.ERC20.address":{"deprecatedKeyName":"HBTC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HBTC.version.HECO.address":{"deprecatedKeyName":"HBTC_HECO","validationRegex":null,"deprecated":false},"crypto.SNX.version.ERC20.address":{"deprecatedKeyName":"SNX_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SNX.version.HECO.address":{"deprecatedKeyName":"SNX_HECO","validationRegex":null,"deprecated":false},"crypto.SNX.version.MATIC.address":{"deprecatedKeyName":"SNX_MATIC","validationRegex":null,"deprecated":false},"crypto.SNX.version.FANTOM.address":{"deprecatedKeyName":"SNX_FANTOM","validationRegex":null,"deprecated":false},"crypto.SNX.version.HRC20.address":{"deprecatedKeyName":"SNX_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HOT.version.ERC20.address":{"deprecatedKeyName":"HOT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HOT.version.HRC20.address":{"deprecatedKeyName":"HOT_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NEAR.address":{"deprecatedKeyName":"NEAR","validationRegex":null,"deprecated":false},"crypto.HNT.address":{"deprecatedKeyName":"HNT","validationRegex":null,"deprecated":false},"crypto.STETH.address":{"deprecatedKeyName":"STETH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NEXO.version.ERC20.address":{"deprecatedKeyName":"NEXO_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NEXO.version.FANTOM.address":{"deprecatedKeyName":"NEXO_FANTOM","validationRegex":null,"deprecated":false},"crypto.PAX.address":{"deprecatedKeyName":"PAX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.STX.address":{"deprecatedKeyName":"STX","validationRegex":null,"deprecated":false},"crypto.MANA.version.ERC20.address":{"deprecatedKeyName":"MANA_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MANA.version.MATIC.address":{"deprecatedKeyName":"MANA_MATIC","validationRegex":null,"deprecated":false},"crypto.MDX.version.HECO.address":{"deprecatedKeyName":"MDX_HECO","validationRegex":null,"deprecated":false},"crypto.MDX.version.BEP20.address":{"deprecatedKeyName":"MDX_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ZEN.address":{"deprecatedKeyName":"ZEN","validationRegex":null,"deprecated":false},"crypto.ARRR.address":{"deprecatedKeyName":"ARRR","validationRegex":null,"deprecated":false},"crypto.BNT.address":{"deprecatedKeyName":"BNT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LUSD.version.ERC20.address":{"deprecatedKeyName":"LUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LUSD.version.MATIC.address":{"deprecatedKeyName":"LUSD_MATIC","validationRegex":null,"deprecated":false},"crypto.GRT.version.ERC20.address":{"deprecatedKeyName":"GRT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GRT.version.MATIC.address":{"deprecatedKeyName":"GRT_MATIC","validationRegex":null,"deprecated":false},"crypto.GRT.version.HRC20.address":{"deprecatedKeyName":"GRT_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SC.address":{"deprecatedKeyName":"SC","validationRegex":null,"deprecated":false},"crypto.HUSD.version.ERC20.address":{"deprecatedKeyName":"HUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HUSD.version.HECO.address":{"deprecatedKeyName":"HUSD_HECO","validationRegex":null,"deprecated":false},"crypto.CRV.version.ERC20.address":{"deprecatedKeyName":"CRV_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CRV.version.MATIC.address":{"deprecatedKeyName":"CRV_MATIC","validationRegex":null,"deprecated":false},"crypto.CRV.version.FANTOM.address":{"deprecatedKeyName":"CRV_FANTOM","validationRegex":null,"deprecated":false},"crypto.UMA.address":{"deprecatedKeyName":"UMA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WRX.version.BEP2.address":{"deprecatedKeyName":"WRX_BEP2","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.WRX.version.MATIC.address":{"deprecatedKeyName":"WRX_MATIC","validationRegex":null,"deprecated":false},"crypto.AR.address":{"deprecatedKeyName":"AR","validationRegex":null,"deprecated":false},"crypto.OMG.address":{"deprecatedKeyName":"OMG","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GT.address":{"deprecatedKeyName":"GT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.QNT.address":{"deprecatedKeyName":"QNT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CHSB.address":{"deprecatedKeyName":"CHSB","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IOST.address":{"deprecatedKeyName":"IOST","validationRegex":null,"deprecated":false},"crypto.NXM.address":{"deprecatedKeyName":"NXM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KCS.address":{"deprecatedKeyName":"KCS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LPT.version.ERC20.address":{"deprecatedKeyName":"LPT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LPT.version.HRC20.address":{"deprecatedKeyName":"LPT_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XSUSHI.address":{"deprecatedKeyName":"XSUSHI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CUSDT.address":{"deprecatedKeyName":"CUSDT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FLOW.address":{"deprecatedKeyName":"FLOW","validationRegex":null,"deprecated":false},"crypto.ANKR.address":{"deprecatedKeyName":"ANKR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HBC.address":{"deprecatedKeyName":"HBC","validationRegex":null,"deprecated":false},"crypto.VGX.address":{"deprecatedKeyName":"VGX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FEI.address":{"deprecatedKeyName":"FEI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAKE.version.BEP20.address":{"deprecatedKeyName":"BAKE_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAKE.version.HRC20.address":{"deprecatedKeyName":"BAKE_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.1INCH.version.ERC20.address":{"deprecatedKeyName":"1INCH_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.1INCH.version.BEP20.address":{"deprecatedKeyName":"1INCH_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.1INCH.version.MATIC.address":{"deprecatedKeyName":"1INCH_MATIC","validationRegex":null,"deprecated":false},"crypto.1INCH.version.HRC20.address":{"deprecatedKeyName":"1INCH_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CKB.address":{"deprecatedKeyName":"CKB","validationRegex":null,"deprecated":false},"crypto.WOO.version.ERC20.address":{"deprecatedKeyName":"WOO_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WOO.version.HECO.address":{"deprecatedKeyName":"WOO_HECO","validationRegex":null,"deprecated":false},"crypto.TITAN.address":{"deprecatedKeyName":"TITAN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OMI.address":{"deprecatedKeyName":"OMI","validationRegex":null,"deprecated":false},"crypto.MINA.address":{"deprecatedKeyName":"MINA","validationRegex":null,"deprecated":false},"crypto.SETH.address":{"deprecatedKeyName":"SETH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RSR.address":{"deprecatedKeyName":"RSR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OXY.version.SOLANA.address":{"deprecatedKeyName":"OXY_SOLANA","validationRegex":null,"deprecated":false},"crypto.OXY.version.ERC20.address":{"deprecatedKeyName":"OXY_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REN.version.ERC20.address":{"deprecatedKeyName":"REN_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REN.version.HRC20.address":{"deprecatedKeyName":"REN_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XCH.address":{"deprecatedKeyName":"XCH","validationRegex":null,"deprecated":false},"crypto.RENBTC.version.ERC20.address":{"deprecatedKeyName":"RENBTC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RENBTC.version.BEP20.address":{"deprecatedKeyName":"RENBTC_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RENBTC.version.HRC20.address":{"deprecatedKeyName":"RENBTC_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.USDN.address":{"deprecatedKeyName":"USDN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BCHA.address":{"deprecatedKeyName":"BCHA","validationRegex":null,"deprecated":false},"crypto.LRC.address":{"deprecatedKeyName":"LRC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PUNDIX.address":{"deprecatedKeyName":"PUNDIX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ERG.address":{"deprecatedKeyName":"ERG","validationRegex":null,"deprecated":false},"crypto.WIN.address":{"deprecatedKeyName":"WIN","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.NPXS.address":{"deprecatedKeyName":"NPXS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TRIBE.address":{"deprecatedKeyName":"TRIBE","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MAID.address":{"deprecatedKeyName":"MAID","validationRegex":"^(bc1|[13])[a-zA-HJ-NP-Z0-9]{25,39}$","deprecated":false},"crypto.ASD.address":{"deprecatedKeyName":"ASD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CUNI.address":{"deprecatedKeyName":"CUNI","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CELO.address":{"deprecatedKeyName":"CELO","validationRegex":null,"deprecated":false},"crypto.DENT.address":{"deprecatedKeyName":"DENT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SNT.address":{"deprecatedKeyName":"SNT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FEG.version.ERC20.address":{"deprecatedKeyName":"FEG_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FEG.version.HRC20.address":{"deprecatedKeyName":"FEG_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SKL.address":{"deprecatedKeyName":"SKL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ALUSD.address":{"deprecatedKeyName":"ALUSD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MIR.version.ERC20.address":{"deprecatedKeyName":"MIR_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MIR.version.BEP20.address":{"deprecatedKeyName":"MIR_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GLM.address":{"deprecatedKeyName":"GLM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PAXG.version.ERC20.address":{"deprecatedKeyName":"PAXG_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PAXG.version.HRC20.address":{"deprecatedKeyName":"PAXG_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CFX.address":{"deprecatedKeyName":"CFX","validationRegex":null,"deprecated":false},"crypto.UOS.address":{"deprecatedKeyName":"UOS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SVCS.address":{"deprecatedKeyName":"SVCS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REEF.version.ERC20.address":{"deprecatedKeyName":"REEF_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REEF.version.BEP20.address":{"deprecatedKeyName":"REEF_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.REEF.version.HRC20.address":{"deprecatedKeyName":"REEF_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GNO.address":{"deprecatedKeyName":"GNO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.USDP.address":{"deprecatedKeyName":"USDP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KAVA.address":{"deprecatedKeyName":"KAVA","validationRegex":null,"deprecated":false},"crypto.ALCX.address":{"deprecatedKeyName":"ALCX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.EWT.address":{"deprecatedKeyName":"EWT","validationRegex":null,"deprecated":false},"crypto.TON.address":{"deprecatedKeyName":"TON","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RLC.address":{"deprecatedKeyName":"RLC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AXS.address":{"deprecatedKeyName":"AXS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AUDIO.address":{"deprecatedKeyName":"AUDIO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XVS.address":{"deprecatedKeyName":"XVS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAND.version.ERC20.address":{"deprecatedKeyName":"BAND_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.BAND.version.FANTOM.address":{"deprecatedKeyName":"BAND_FANTOM","validationRegex":null,"deprecated":false},"crypto.NMR.address":{"deprecatedKeyName":"NMR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.INJ.version.ERC20.address":{"deprecatedKeyName":"INJ_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.INJ.version.BEP20.address":{"deprecatedKeyName":"INJ_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.WAXP.address":{"deprecatedKeyName":"WAXP","validationRegex":null,"deprecated":false},"crypto.UQC.address":{"deprecatedKeyName":"UQC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IOTX.address":{"deprecatedKeyName":"IOTX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FUN.address":{"deprecatedKeyName":"FUN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OCEAN.address":{"deprecatedKeyName":"OCEAN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAND.version.ERC20.address":{"deprecatedKeyName":"SAND_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SAND.version.HRC20.address":{"deprecatedKeyName":"SAND_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CTSI.version.ERC20.address":{"deprecatedKeyName":"CTSI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CTSI.version.BEP20.address":{"deprecatedKeyName":"CTSI_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CTSI.version.MATIC.address":{"deprecatedKeyName":"CTSI_MATIC","validationRegex":null,"deprecated":false},"crypto.RAY.address":{"deprecatedKeyName":"RAY","validationRegex":null,"deprecated":false},"crypto.ANC.version.TERRA.address":{"deprecatedKeyName":"ANC_TERRA","validationRegex":null,"deprecated":false},"crypto.ANC.version.ERC20.address":{"deprecatedKeyName":"ANC_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IQ.version.ERC20.address":{"deprecatedKeyName":"IQ_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IQ.version.BEP20.address":{"deprecatedKeyName":"IQ_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.IQ.version.MATIC.address":{"deprecatedKeyName":"IQ_MATIC","validationRegex":null,"deprecated":false},"crypto.SUSD.version.ERC20.address":{"deprecatedKeyName":"SUSD_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SUSD.version.FANTOM.address":{"deprecatedKeyName":"SUSD_FANTOM","validationRegex":null,"deprecated":false},"crypto.KLV.address":{"deprecatedKeyName":"KLV","validationRegex":"^[T][a-zA-HJ-NP-Z0-9]{33}$","deprecated":false},"crypto.BTCST.address":{"deprecatedKeyName":"BTCST","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TLM.address":{"deprecatedKeyName":"TLM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AKT.address":{"deprecatedKeyName":"AKT","validationRegex":null,"deprecated":false},"crypto.STMX.address":{"deprecatedKeyName":"STMX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PROM.address":{"deprecatedKeyName":"PROM","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XPRT.address":{"deprecatedKeyName":"XPRT","validationRegex":null,"deprecated":false},"crypto.SRM.version.ERC20.address":{"deprecatedKeyName":"SRM_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SRM.version.SOLANA.address":{"deprecatedKeyName":"SRM_SOLANA","validationRegex":null,"deprecated":false},"crypto.RPL.address":{"deprecatedKeyName":"RPL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AGIX.address":{"deprecatedKeyName":"AGIX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CELR.address":{"deprecatedKeyName":"CELR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.FET.address":{"deprecatedKeyName":"FET","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OXT.address":{"deprecatedKeyName":"OXT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ARDR.address":{"deprecatedKeyName":"ARDR","validationRegex":null,"deprecated":false},"crypto.MATH.address":{"deprecatedKeyName":"MATH","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.10SET.address":{"deprecatedKeyName":"10SET","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.POLY.address":{"deprecatedKeyName":"POLY","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GUSD.address":{"deprecatedKeyName":"GUSD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NKN.address":{"deprecatedKeyName":"NKN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CVC.address":{"deprecatedKeyName":"CVC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.GTC.address":{"deprecatedKeyName":"GTC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.STEEM.address":{"deprecatedKeyName":"STEEM","validationRegex":null,"deprecated":false},"crypto.ORN.address":{"deprecatedKeyName":"ORN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KEEP.version.ERC20.address":{"deprecatedKeyName":"KEEP_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KEEP.version.HRC20.address":{"deprecatedKeyName":"KEEP_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HXRO.address":{"deprecatedKeyName":"HXRO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ORBS.address":{"deprecatedKeyName":"ORBS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ALPHA.version.ERC20.address":{"deprecatedKeyName":"ALPHA_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ALPHA.version.BEP20.address":{"deprecatedKeyName":"ALPHA_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.DODO.version.ERC20.address":{"deprecatedKeyName":"DODO_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.DODO.version.BEP20.address":{"deprecatedKeyName":"DODO_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.OGN.address":{"deprecatedKeyName":"OGN","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KNCL.version.ERC20.address":{"deprecatedKeyName":"KNCL_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KNCL.version.FANTOM.address":{"deprecatedKeyName":"KNCL_FANTOM","validationRegex":null,"deprecated":false},"crypto.KNCL.version.HRC20.address":{"deprecatedKeyName":"KNCL_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MED.address":{"deprecatedKeyName":"MED","validationRegex":null,"deprecated":false},"crypto.XAUT.address":{"deprecatedKeyName":"XAUT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.VLX.address":{"deprecatedKeyName":"VLX","validationRegex":null,"deprecated":false},"crypto.PHA.address":{"deprecatedKeyName":"PHA","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.KOBE.address":{"deprecatedKeyName":"KOBE","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.PERP.address":{"deprecatedKeyName":"PERP","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.XHV.address":{"deprecatedKeyName":"XHV","validationRegex":null,"deprecated":false},"crypto.META.address":{"deprecatedKeyName":"META","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SEUR.address":{"deprecatedKeyName":"SEUR","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.MONA.address":{"deprecatedKeyName":"MONA","validationRegex":null,"deprecated":false},"crypto.ANT.address":{"deprecatedKeyName":"ANT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.HYDRA.address":{"deprecatedKeyName":"HYDRA","validationRegex":null,"deprecated":false},"crypto.ZKS.address":{"deprecatedKeyName":"ZKS","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SXP.version.ERC20.address":{"deprecatedKeyName":"SXP_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SXP.version.BEP20.address":{"deprecatedKeyName":"SXP_BEP20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.SXP.version.HRC20.address":{"deprecatedKeyName":"SXP_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.CSPR.address":{"deprecatedKeyName":"CSPR","validationRegex":null,"deprecated":false},"crypto.MTL.address":{"deprecatedKeyName":"MTL","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NU.address":{"deprecatedKeyName":"NU","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ZMT.address":{"deprecatedKeyName":"ZMT","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.LOC.address":{"deprecatedKeyName":"LOC","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.TKO.address":{"deprecatedKeyName":"TKO","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.ETN.address":{"deprecatedKeyName":"ETN","validationRegex":null,"deprecated":false},"crypto.UBT.version.ERC20.address":{"deprecatedKeyName":"UBT_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.UBT.version.MATIC.address":{"deprecatedKeyName":"UBT_MATIC","validationRegex":null,"deprecated":false},"crypto.EXRD.address":{"deprecatedKeyName":"EXRD","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.NMX.address":{"deprecatedKeyName":"NMX","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.RIF.address":{"deprecatedKeyName":"RIF","validationRegex":null,"deprecated":false},"crypto.STORJ.version.ERC20.address":{"deprecatedKeyName":"STORJ_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.STORJ.version.HRC20.address":{"deprecatedKeyName":"STORJ_HRC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.AVA.address":{"deprecatedKeyName":"AVA","validationRegex":"^(bnb|tbnb)[a-zA-HJ-NP-Z0-9]{39}$","deprecated":false},"crypto.DPI.version.ERC20.address":{"deprecatedKeyName":"DPI_ERC20","validationRegex":"^0x[a-fA-F0-9]{40}$","deprecated":false},"crypto.DPI.version.MATIC.address":{"deprecatedKeyName":"DPI_MATIC","validationRegex":null,"deprecated":false}}}');

/***/ }),

/***/ 27370:
/***/ ((module) => {

module.exports = JSON.parse('{"version":"0.1.0","networks":{"1":{"contracts":{"UNSRegistry":{"address":"0x049aba7510f45BA5b64ea9E658E342F904DB358D","implementation":"0x6d4FaFcD5B4A8b360c80eAca8D91e3Bc814ecc39","legacyAddresses":[],"deploymentBlock":"0xc2fede"},"CNSRegistry":{"address":"0xD1E5b0FF1287aA9f9A268759062E4Ab08b9Dacbe","legacyAddresses":[],"deploymentBlock":"0x8a958b"},"MintingManager":{"address":"0x2a7084870bB724175a3C96Da8FaA55128fa3E19D","implementation":"0x2f133a06fe4fc845E41261aCFF6831a727ea9062","legacyAddresses":[],"deploymentBlock":"0xc2fee0"},"ProxyAdmin":{"address":"0xAA16DA78110D9A9742c760a1a064F28654Ab93de","legacyAddresses":[],"deploymentBlock":"0xc2fedc"},"SignatureController":{"address":"0x82EF94294C95aD0930055f31e53A34509227c5f7","legacyAddresses":[],"deploymentBlock":"0x8a95a6"},"MintingController":{"address":"0xb0EE56339C3253361730F50c08d3d7817ecD60Ca","legacyAddresses":[],"deploymentBlock":"0x8a95aa"},"WhitelistedMinter":{"address":"0xd3fF3377b0ceade1303dAF9Db04068ef8a650757","legacyAddresses":[],"deploymentBlock":"0xa76ad3"},"URIPrefixController":{"address":"0x09B091492759737C03da9dB7eDF1CD6BCC3A9d91","legacyAddresses":[],"deploymentBlock":"0x8a95ae"},"DomainZoneController":{"address":"0xeA70777e28E00E81f58b8921fC47F78B8a72eFE7","legacyAddresses":[],"deploymentBlock":"0x98ca20"},"Resolver":{"address":"0xb66DcE2DA6afAAa98F2013446dBCB0f4B0ab2842","legacyAddresses":["0xa1cac442be6673c49f8e74ffc7c4fd746f3cbd0d","0x878bc2f3f717766ab69c0a5f9a6144931e61aed3"],"deploymentBlock":"0x960844"},"ProxyReader":{"address":"0xfEe4D4F0aDFF8D84c12170306507554bC7045878","legacyAddresses":["0xa6E7cEf2EDDEA66352Fd68E5915b60BDbb7309f5","0x7ea9Ee21077F84339eDa9C80048ec6db678642B1"],"deploymentBlock":"0xc300b4"},"TwitterValidationOperator":{"address":"0x2F659766E3D08561CA3408FbAba7C0749ab2c402","legacyAddresses":["0xbb486C6E9cF1faA86a6E3eAAFE2e5665C0507855"],"deploymentBlock":"0xc300b5"},"FreeMinter":{"address":"0x1fC985cAc641ED5846b631f96F35d9b48Bc3b834","legacyAddresses":[],"deploymentBlock":"0xacc390"}}},"4":{"contracts":{"UNSRegistry":{"address":"0x7fb83000B8eD59D3eAD22f0D584Df3a85fBC0086","implementation":"0x0c97caecb791620c61e26c5a9754150a1cae2159","legacyAddresses":[],"deploymentBlock":"0x85e628"},"CNSRegistry":{"address":"0xAad76bea7CFEc82927239415BB18D2e93518ecBB","legacyAddresses":[],"deploymentBlock":"0x7232bc"},"MintingManager":{"address":"0xdAAf99A920D31F4f5720e4667b12b24e54A03070","implementation":"0xb8efb23b97408147ca63ae0494b2242c5029ffc4","legacyAddresses":[],"deploymentBlock":"0x85e629"},"ProxyReader":{"address":"0x299974AeD8911bcbd2C61262605b89F591a53E83","legacyAddresses":["0x9F19473F6a98a715176291c930558E1954fd3D1e","0x3A2e74CF832cbA3d77E72708d55370119E4323a6"],"deploymentBlock":"0x8671b4"},"ProxyAdmin":{"address":"0xaf9815005A208d1460b6fC60B4f90B9f2185E88c","legacyAddresses":[],"deploymentBlock":"0x85e627"},"SignatureController":{"address":"0x66a5e3e2C27B4ce4F46BBd975270BE154748D164","legacyAddresses":[],"deploymentBlock":"0x7232be"},"MintingController":{"address":"0x51765307AeB3Df2E647014a2C501d5324212467c","legacyAddresses":[],"deploymentBlock":"0x7232bf","deprecated":true},"WhitelistedMinter":{"address":"0xbcB32f13f90978a9e059E8Cb40FaA9e6619d98e7","legacyAddresses":[],"deploymentBlock":"0x7232c6","deprecated":true},"URIPrefixController":{"address":"0xe1d2e4B9f0518CA5c803073C3dFa886470627237","legacyAddresses":[],"deploymentBlock":"0x7232c0","deprecated":true},"DomainZoneController":{"address":"0x6f8F96A566663C1d4fEe70edD37E9b62Fe39dE5D","legacyAddresses":[],"deploymentBlock":"0x7232c2","deprecated":true},"Resolver":{"address":"0x95AE1515367aa64C462c71e87157771165B1287A","legacyAddresses":[],"deploymentBlock":"0x7232cf"},"TwitterValidationOperator":{"address":"0x9ea4A63184ebE9CBA55CD1af473D98075Aa02b4C","legacyAddresses":["0x1CB337b3b208dc29a6AcE8d11Bb591b66c5Dd83d"],"deploymentBlock":"0x86935e"},"FreeMinter":{"address":"0x84214215904cDEbA9044ECf95F3eBF009185AAf4","legacyAddresses":[],"deploymentBlock":"0x740d93","deprecated":true}}},"1337":{"contracts":{"CNSRegistry":{"address":"0xA310F8e781F8aE80690649be920991AEc9a6595D","legacyAddresses":[],"deploymentBlock":"0x01"},"SignatureController":{"address":"0xBd8b374200A7D99F15f4e90621dA1BEAEcb705a0","legacyAddresses":[],"deploymentBlock":"0x02"},"MintingController":{"address":"0x4513073d9B3af7e62be59B57205a2368F76dE9C7","legacyAddresses":[],"deploymentBlock":"0x03"},"URIPrefixController":{"address":"0xeE1f42382091e260f5B9c152E17639d729Ab829F","legacyAddresses":[],"deploymentBlock":"0x04"},"Resolver":{"address":"0x76CBBE3B425A7D258B30457785d54de8c8322bfa","legacyAddresses":[],"deploymentBlock":"0x08"},"WhitelistedMinter":{"address":"0x4d4E78764a6aF57bf628120A38c10560deD2E134","legacyAddresses":[],"deploymentBlock":"0x09"},"DomainZoneController":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"TwitterValidationOperator":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"FreeMinter":{"address":"0x0000000000000000000000000000000000000000","legacyAddresses":[],"deploymentBlock":"0x0"},"ProxyAdmin":{"address":"0x7bB6Cd9be29fab783c0b494A06FED8b2E2596B7a","legacyAddresses":[],"deploymentBlock":"0x0"},"UNSRegistry":{"address":"0x4a3C194eB88966178bfDD81744ddDafED611B830","legacyAddresses":[],"deploymentBlock":"0x0f","implementation":"0xC58206842E4030a3B2CaBC78780Ae7635173C533"},"MintingManager":{"address":"0x4Be0126fB2885a6D2909166D5801E606470C9aB0","legacyAddresses":[],"deploymentBlock":"0x11","implementation":"0x4872CC1be60A9DB9c880A0A437Da7a6AF134F08f"},"ProxyReader":{"address":"0xAc52F68f31577E44aE0C7E95A42dC9eb574B9383","legacyAddresses":[],"deploymentBlock":"0x15"}}}}}');

/***/ }),

/***/ 13636:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"@unstoppabledomains/resolution","version":"5.0.1","description":"Domain Resolution for blockchain domains","main":"./build/index.js","directories":{"doc":"docs"},"types":"./build/index.d.ts","bin":{"resolution":"./build/cli/cli.js"},"scripts":{"release":"RELEASE=patch yarn release:run","release:minor":"RELEASE=minor yarn release:run","release:major":"RELEASE=major yarn release:run","release:run":"yarn build && yarn size && yarn publish --$RELEASE && yarn release:tag && yarn docs:deploy","release:tag":"git push origin v$npm_package_version","fix":"yarn prettier:fix && yarn lint:fix --ext ts src","lint":"eslint --ext ts src","lint:fix":"eslint --fix --ext ts src","test":"jest","test:single":"jest","test:live":"LIVE=1 yarn test","test:live:win":"set LIVE=1&& yarn test","start":"npm run build:live","dev":"yarn build && ./build/cli/cli.js -d brad.crypto","build":"rm -rf build && tsc -p . && chmod +x ./build/cli/cli.js","build:symlink":"yarn build && ln -sf $PWD/build/cli/cli.js  /usr/local/bin/resolution","build:live":"nodemon --watch \'src/**/*.ts\' --exec yarn build","docs":"yarn docs:clone && yarn docs:generate && yarn docs:readme","docs:clone":"([ -d ./docs ] || git clone --branch gh-pages git@github.com:unstoppabledomains/resolution.git docs) && git -C ./docs pull","docs:generate":"yarn run typedoc --out \\"./docs/v$npm_package_version\\"","docs:readme":"./docs-readme.sh","docs:deploy":"yarn docs && ./deploy-docs.sh","size":"yarn run sizecheck -p ./package.json -l 500 -v","config:pull":"yarn network-config:pull && yarn supported-keys:pull","network-config:pull":"curl https://raw.githubusercontent.com/unstoppabledomains/uns/main/uns-config.json -o src/config/uns-config.json","supported-keys:pull":"curl https://raw.githubusercontent.com/unstoppabledomains/dot-crypto/master/src/supported-keys/supported-keys.json -o src/config/supported-keys.json","prettier:fix":"prettier --write -l \\"src/**/*.{ts,tsx,js,jsx,json,md}\\"","prepare":"([ -d ./.git ] && husky install) || echo \\"Skip husky install since package does not have .git folder\\""},"files":["build"],"author":"JohnnyJumper <https://github.com/JohnnyJumper>, Bogdan Gusiev <https://github.com/bogdan>, Braden Pezeshki <https://github.com/perfect-cents, Vladyslav Batyrenko <https://github.com/mvlabat>, Matthew Gould <https://github.com/theporpoise>","repository":{"type":"git","url":"https://github.com/unstoppabledomains/resolution.git"},"keywords":["cns",".crypto","zns","ens","ethereum","zilliqa","blockchain","resolution","name","domain","unstoppable"],"license":"MIT","bugs":{"url":"https://github.com/unstoppabledomains/resolution.git"},"homepage":"https://github.com/unstoppabledomains/resolution.git#readme","devDependencies":{"@ensdomains/address-encoder":"0.2.6","@ethersproject/providers":"^5.0.2","@types/bn.js":"^4.11.6","@types/elliptic":"^6.4.13","@types/jest":"24.0.23","@types/lodash":"^4.14.158","@types/node":"11.15.3","@types/node-fetch":"2.5.4","@typescript-eslint/eslint-plugin":"^3.9.0","@typescript-eslint/parser":"^3.9.0","@unstoppabledomains/sizecheck":"^4.0.0","@zilliqa-js/core":"2.3.0-alpha.0","audit-ci":"^3.1.1","bip44-constants":"^8.0.5","content-hash":"^2.5.2","dotenv":"^8.2.0","eslint":"^7.7.0","eslint-config-prettier":"^8.3.0","eslint-plugin-jest":"^24.1.0","husky":"^6.0.0","jest":"^27.0.4","lint-staged":"^11.0.0","lodash":"^4.17.19","nock":"10.0.6","nodemon":"^2.0.7","prettier":"2.3.0","pretty-quick":"^3.1.0","ts-jest":"^27.0.3","ts-loader":"6.2.1","ts-node":"^8.6.2","typedoc":"0.17.8","typescript":"3.8.3","web3-0.20.7":"npm:web3@0.20.7","web3-providers-http":"^1.3.6","web3-providers-ws":"^1.3.6"},"publicConfig":{"access":"public"},"dependencies":{"@ethersproject/abi":"^5.0.1","bn.js":"^4.4.0","commander":"^4.1.1","elliptic":"^6.5.4","ethereum-ens-network-map":"^1.0.2","js-sha256":"^0.9.0","js-sha3":"^0.8.0","node-fetch":"^2.6.0"},"lint-staged":{"src/**/*.ts":"eslint --fix","src/**/*.{ts,tsx,js,jsx,json,md}":"prettier --write -l"}}');

/***/ })

}]);