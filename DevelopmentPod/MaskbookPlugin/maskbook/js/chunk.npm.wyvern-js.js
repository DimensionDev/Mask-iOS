"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[2261],{

/***/ 11921:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(48514);
var AuthenticatedProxyContract = /** @class */ (function (_super) {
    __extends(AuthenticatedProxyContract, _super);
    function AuthenticatedProxyContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.proxyType = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proxyType.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.user = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.user.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.implementation = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.implementation.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.revoked = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.revoked.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.upgradeabilityOwner = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.upgradeabilityOwner.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.registry = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.registry.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.receiveApproval = {
            sendTransactionAsync: function (from_0, value_1, token_2, extraData_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.receiveApproval.estimateGasAsync.bind(self, from_0, value_1, token_2, extraData_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.receiveApproval, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (from_0, value_1, token_2, extraData_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.receiveApproval.estimateGas, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (from_0, value_1, token_2, extraData_3) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.receiveApproval.getData(from_0, value_1, token_2, extraData_3);
                return abiEncodedTransactionData;
            },
        };
        _this.initialize = {
            sendTransactionAsync: function (addrUser_0, addrRegistry_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.initialize.estimateGasAsync.bind(self, addrUser_0, addrRegistry_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.initialize, self.web3ContractInstance)(addrUser_0, addrRegistry_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrUser_0, addrRegistry_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.initialize.estimateGas, self.web3ContractInstance)(addrUser_0, addrRegistry_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrUser_0, addrRegistry_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.initialize.getData(addrUser_0, addrRegistry_1);
                return abiEncodedTransactionData;
            },
        };
        _this.setRevoke = {
            sendTransactionAsync: function (revoke_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setRevoke.estimateGasAsync.bind(self, revoke_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.setRevoke, self.web3ContractInstance)(revoke_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (revoke_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.setRevoke.estimateGas, self.web3ContractInstance)(revoke_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (revoke_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.setRevoke.getData(revoke_0);
                return abiEncodedTransactionData;
            },
        };
        _this.proxy = {
            sendTransactionAsync: function (dest_0, howToCall_1, calldata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.proxy.estimateGasAsync.bind(self, dest_0, howToCall_1, calldata_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proxy, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (dest_0, howToCall_1, calldata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proxy.estimateGas, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (dest_0, howToCall_1, calldata_2) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.proxy.getData(dest_0, howToCall_1, calldata_2);
                return abiEncodedTransactionData;
            },
        };
        _this.proxyAssert = {
            sendTransactionAsync: function (dest_0, howToCall_1, calldata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.proxyAssert.estimateGasAsync.bind(self, dest_0, howToCall_1, calldata_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proxyAssert, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (dest_0, howToCall_1, calldata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proxyAssert.estimateGas, self.web3ContractInstance)(dest_0, howToCall_1, calldata_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (dest_0, howToCall_1, calldata_2) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.proxyAssert.getData(dest_0, howToCall_1, calldata_2);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return AuthenticatedProxyContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.AuthenticatedProxyContract = AuthenticatedProxyContract;
//# sourceMappingURL=authenticated_proxy.js.map

/***/ }),

/***/ 48514:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _ = __webpack_require__(39378);
var BaseContract = /** @class */ (function () {
    function BaseContract(web3ContractInstance, defaults) {
        this.web3ContractInstance = web3ContractInstance;
        this.defaults = defaults;
    }
    BaseContract.prototype.applyDefaultsToTxDataAsync = function (txData, estimateGasAsync) {
        return __awaiter(this, void 0, void 0, function () {
            var removeUndefinedProperties, txDataWithDefaults, estimatedGas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeUndefinedProperties = _.pickBy;
                        txDataWithDefaults = __assign({}, removeUndefinedProperties(this.defaults), removeUndefinedProperties(txData));
                        if (!(_.isUndefined(txDataWithDefaults.gas) && !_.isUndefined(estimateGasAsync))) return [3 /*break*/, 2];
                        return [4 /*yield*/, estimateGasAsync(txData)];
                    case 1:
                        estimatedGas = _a.sent();
                        txDataWithDefaults.gas = estimatedGas;
                        _a.label = 2;
                    case 2: return [2 /*return*/, txDataWithDefaults];
                }
            });
        });
    };
    return BaseContract;
}());
exports.BaseContract = BaseContract;
//# sourceMappingURL=base_contract.js.map

/***/ }),

/***/ 91408:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(48514);
var WyvernAtomicizerContract = /** @class */ (function (_super) {
    __extends(WyvernAtomicizerContract, _super);
    function WyvernAtomicizerContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.atomicize = {
            sendTransactionAsync: function (addrs_0, values_1, calldataLengths_2, calldatas_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.atomicize.estimateGasAsync.bind(self, addrs_0, values_1, calldataLengths_2, calldatas_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicize, self.web3ContractInstance)(addrs_0, values_1, calldataLengths_2, calldatas_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, values_1, calldataLengths_2, calldatas_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicize.estimateGas, self.web3ContractInstance)(addrs_0, values_1, calldataLengths_2, calldatas_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, values_1, calldataLengths_2, calldatas_3) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.atomicize.getData(addrs_0, values_1, calldataLengths_2, calldatas_3);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernAtomicizerContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernAtomicizerContract = WyvernAtomicizerContract;
//# sourceMappingURL=wyvern_atomicizer.js.map

/***/ }),

/***/ 96216:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(48514);
var WyvernDAOContract = /** @class */ (function (_super) {
    __extends(WyvernDAOContract, _super);
    function WyvernDAOContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.proposals = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proposals.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegatesByDelegator = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.delegatesByDelegator.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.REQUIRED_SHARES_TO_BE_BOARD_MEMBER = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.REQUIRED_SHARES_TO_BE_BOARD_MEMBER.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.lockedDelegatingTokens = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.lockedDelegatingTokens.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.countVotes = {
            callAsync: function (proposalNumber_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.countVotes.call, self.web3ContractInstance)(proposalNumber_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.executeProposal = {
            sendTransactionAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.executeProposal.estimateGasAsync.bind(self, proposalNumber_0, transactionBytecode_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.executeProposal, self.web3ContractInstance)(proposalNumber_0, transactionBytecode_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.executeProposal.estimateGas, self.web3ContractInstance)(proposalNumber_0, transactionBytecode_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, transactionBytecode_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.executeProposal.getData(proposalNumber_0, transactionBytecode_1);
                return abiEncodedTransactionData;
            },
        };
        _this.sharesTokenAddress = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.sharesTokenAddress.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegatedAmountsByDelegate = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.delegatedAmountsByDelegate.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.numProposals = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.numProposals.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.hasVoted = {
            callAsync: function (proposalNumber_0, shareholder_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.hasVoted.call, self.web3ContractInstance)(proposalNumber_0, shareholder_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.TOKEN_DECIMALS = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.TOKEN_DECIMALS.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setDelegateAndLockTokens = {
            sendTransactionAsync: function (tokensToLock_0, delegate_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setDelegateAndLockTokens.estimateGasAsync.bind(self, tokensToLock_0, delegate_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.setDelegateAndLockTokens, self.web3ContractInstance)(tokensToLock_0, delegate_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (tokensToLock_0, delegate_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.setDelegateAndLockTokens.estimateGas, self.web3ContractInstance)(tokensToLock_0, delegate_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (tokensToLock_0, delegate_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.setDelegateAndLockTokens.getData(tokensToLock_0, delegate_1);
                return abiEncodedTransactionData;
            },
        };
        _this.clearDelegateAndUnlockTokens = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.clearDelegateAndUnlockTokens.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.clearDelegateAndUnlockTokens, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.clearDelegateAndUnlockTokens.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.clearDelegateAndUnlockTokens.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.debatingPeriodInMinutes = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.debatingPeriodInMinutes.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.changeVotingRules = {
            sendTransactionAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeVotingRules.estimateGasAsync.bind(self, minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeVotingRules, self.web3ContractInstance)(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeVotingRules.estimateGas, self.web3ContractInstance)(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeVotingRules.getData(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2);
                return abiEncodedTransactionData;
            },
        };
        _this.minimumQuorum = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.minimumQuorum.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.receiveApproval = {
            sendTransactionAsync: function (from_0, value_1, token_2, extraData_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.receiveApproval.estimateGasAsync.bind(self, from_0, value_1, token_2, extraData_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.receiveApproval, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (from_0, value_1, token_2, extraData_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.receiveApproval.estimateGas, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (from_0, value_1, token_2, extraData_3) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.receiveApproval.getData(from_0, value_1, token_2, extraData_3);
                return abiEncodedTransactionData;
            },
        };
        _this.tokenLocker = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.tokenLocker.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.MINIMUM_QUORUM = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.MINIMUM_QUORUM.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.requiredSharesToBeBoardMember = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.requiredSharesToBeBoardMember.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.vote = {
            sendTransactionAsync: function (proposalNumber_0, supportsProposal_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.vote.estimateGasAsync.bind(self, proposalNumber_0, supportsProposal_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.vote, self.web3ContractInstance)(proposalNumber_0, supportsProposal_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, supportsProposal_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.vote.estimateGas, self.web3ContractInstance)(proposalNumber_0, supportsProposal_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, supportsProposal_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.vote.getData(proposalNumber_0, supportsProposal_1);
                return abiEncodedTransactionData;
            },
        };
        _this.newProposal = {
            sendTransactionAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.newProposal.estimateGasAsync.bind(self, beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.newProposal, self.web3ContractInstance)(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.newProposal.estimateGas, self.web3ContractInstance)(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.newProposal.getData(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3);
                return abiEncodedTransactionData;
            },
        };
        _this.DEBATE_PERIOD_MINUTES = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.DEBATE_PERIOD_MINUTES.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.checkProposalCode = {
            callAsync: function (proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.checkProposalCode.call, self.web3ContractInstance)(proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.totalLockedTokens = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.totalLockedTokens.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernDAOContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernDAOContract = WyvernDAOContract;
//# sourceMappingURL=wyvern_d_a_o.js.map

/***/ }),

/***/ 27500:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(48514);
var WyvernExchangeContract = /** @class */ (function (_super) {
    __extends(WyvernExchangeContract, _super);
    function WyvernExchangeContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.tokenTransferProxy = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.tokenTransferProxy.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.staticCall = {
            callAsync: function (target_0, calldata_1, extradata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.staticCall.call, self.web3ContractInstance)(target_0, calldata_1, extradata_2, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.changeMinimumMakerProtocolFee = {
            sendTransactionAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeMinimumMakerProtocolFee.estimateGasAsync.bind(self, newMinimumMakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumMakerProtocolFee, self.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumMakerProtocolFee.estimateGas, self.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumMakerProtocolFee_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeMinimumMakerProtocolFee.getData(newMinimumMakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        _this.changeMinimumTakerProtocolFee = {
            sendTransactionAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeMinimumTakerProtocolFee.estimateGasAsync.bind(self, newMinimumTakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumTakerProtocolFee, self.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumTakerProtocolFee.estimateGas, self.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumTakerProtocolFee_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeMinimumTakerProtocolFee.getData(newMinimumTakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        _this.guardedArrayReplace = {
            callAsync: function (array_0, desired_1, mask_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.guardedArrayReplace.call, self.web3ContractInstance)(array_0, desired_1, mask_2, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.minimumTakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.minimumTakerProtocolFee.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.codename = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.codename.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.testCopyAddress = {
            callAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.testCopyAddress.call, self.web3ContractInstance)(addr_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.testCopy = {
            callAsync: function (arrToCopy_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.testCopy.call, self.web3ContractInstance)(arrToCopy_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.calculateCurrentPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.calculateCurrentPrice_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.changeProtocolFeeRecipient = {
            sendTransactionAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeProtocolFeeRecipient.estimateGasAsync.bind(self, newProtocolFeeRecipient_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeProtocolFeeRecipient, self.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeProtocolFeeRecipient.estimateGas, self.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newProtocolFeeRecipient_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeProtocolFeeRecipient.getData(newProtocolFeeRecipient_0);
                return abiEncodedTransactionData;
            },
        };
        _this.version = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.version.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.orderCalldataCanMatch = {
            callAsync: function (buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.orderCalldataCanMatch.call, self.web3ContractInstance)(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.validateOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.validateOrder_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.calculateFinalPrice = {
            callAsync: function (side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.calculateFinalPrice.call, self.web3ContractInstance)(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.protocolFeeRecipient = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.protocolFeeRecipient.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.renounceOwnership.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.renounceOwnership.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.hashOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.hashOrder_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.ordersCanMatch_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.ordersCanMatch_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approveOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.approveOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approveOrder_, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approveOrder_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.approveOrder_.getData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9);
                return abiEncodedTransactionData;
            },
        };
        _this.registry = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.registry.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.minimumMakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.minimumMakerProtocolFee.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.hashToSign_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.hashToSign_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.cancelledOrFinalized = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.cancelledOrFinalized.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.owner = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.exchangeToken = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.exchangeToken.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.cancelOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.cancelOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.cancelOrder_, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.cancelOrder_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.cancelOrder_.getData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11);
                return abiEncodedTransactionData;
            },
        };
        _this.atomicMatch_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.atomicMatch_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicMatch_, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicMatch_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.atomicMatch_.getData(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10);
                return abiEncodedTransactionData;
            },
        };
        _this.validateOrderParameters_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.validateOrderParameters_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.INVERSE_BASIS_POINT = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.INVERSE_BASIS_POINT.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.calculateMatchPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.calculateMatchPrice_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approvedOrders = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approvedOrders.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData(newOwner_0);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernExchangeContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernExchangeContract = WyvernExchangeContract;
//# sourceMappingURL=wyvern_exchange.js.map

/***/ }),

/***/ 15478:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(48514);
var WyvernProxyRegistryContract = /** @class */ (function (_super) {
    __extends(WyvernProxyRegistryContract, _super);
    function WyvernProxyRegistryContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.initialAddressSet = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.initialAddressSet.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.endGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.endGrantAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.endGrantAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.endGrantAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.endGrantAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        _this.revokeAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.revokeAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.revokeAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.revokeAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.revokeAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        _this.pending = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.pending.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.contracts = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.contracts.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.renounceOwnership.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.renounceOwnership.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.owner = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegateProxyImplementation = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.delegateProxyImplementation.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.proxies = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proxies.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.startGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.startGrantAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.startGrantAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.startGrantAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.startGrantAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        _this.registerProxy = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.registerProxy.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.registerProxy, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.registerProxy.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.registerProxy.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.DELAY_PERIOD = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.DELAY_PERIOD.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData(newOwner_0);
                return abiEncodedTransactionData;
            },
        };
        _this.grantInitialAuthentication = {
            sendTransactionAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.grantInitialAuthentication.estimateGasAsync.bind(self, authAddress_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.grantInitialAuthentication, self.web3ContractInstance)(authAddress_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.grantInitialAuthentication.estimateGas, self.web3ContractInstance)(authAddress_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (authAddress_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.grantInitialAuthentication.getData(authAddress_0);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernProxyRegistryContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernProxyRegistryContract = WyvernProxyRegistryContract;
//# sourceMappingURL=wyvern_proxy_registry.js.map

/***/ }),

/***/ 47395:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(48514);
var WyvernTokenContract = /** @class */ (function (_super) {
    __extends(WyvernTokenContract, _super);
    function WyvernTokenContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.MULTIPLIER = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.MULTIPLIER.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.maximumRedeemable = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.maximumRedeemable.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approve = {
            sendTransactionAsync: function (_spender_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.approve.estimateGasAsync.bind(self, _spender_0, _value_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approve, self.web3ContractInstance)(_spender_0, _value_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_spender_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance)(_spender_0, _value_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _value_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.approve.getData(_spender_0, _value_1);
                return abiEncodedTransactionData;
            },
        };
        _this.totalSupply = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.totalSupply.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.multiplier = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.multiplier.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferFrom = {
            sendTransactionAsync: function (_from_0, _to_1, _value_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, _from_0, _to_1, _value_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferFrom, self.web3ContractInstance)(_from_0, _to_1, _value_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_from_0, _to_1, _value_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance)(_from_0, _to_1, _value_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_from_0, _to_1, _value_2) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData(_from_0, _to_1, _value_2);
                return abiEncodedTransactionData;
            },
        };
        _this.decimals = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.decimals.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.burn = {
            sendTransactionAsync: function (_value_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.burn.estimateGasAsync.bind(self, _value_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.burn, self.web3ContractInstance)(_value_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_value_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.burn.estimateGas, self.web3ContractInstance)(_value_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_value_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.burn.getData(_value_0);
                return abiEncodedTransactionData;
            },
        };
        _this.pubKeyToEthereumAddress = {
            callAsync: function (pubKey_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.pubKeyToEthereumAddress.call, self.web3ContractInstance)(pubKey_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.MINT_AMOUNT = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.MINT_AMOUNT.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.decreaseApproval = {
            sendTransactionAsync: function (_spender_0, _subtractedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.decreaseApproval.estimateGasAsync.bind(self, _spender_0, _subtractedValue_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.decreaseApproval, self.web3ContractInstance)(_spender_0, _subtractedValue_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_spender_0, _subtractedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.decreaseApproval.estimateGas, self.web3ContractInstance)(_spender_0, _subtractedValue_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _subtractedValue_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.decreaseApproval.getData(_spender_0, _subtractedValue_1);
                return abiEncodedTransactionData;
            },
        };
        _this.balanceOf = {
            callAsync: function (_owner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.balanceOf.call, self.web3ContractInstance)(_owner_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.redeemUTXO = {
            sendTransactionAsync: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.redeemUTXO.estimateGasAsync.bind(self, txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.redeemUTXO, self.web3ContractInstance)(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.redeemUTXO.estimateGas, self.web3ContractInstance)(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.redeemUTXO.getData(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8);
                return abiEncodedTransactionData;
            },
        };
        _this.canRedeemUTXOHash = {
            callAsync: function (merkleLeafHash_0, proof_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.canRedeemUTXOHash.call, self.web3ContractInstance)(merkleLeafHash_0, proof_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.releaseTokens = {
            sendTransactionAsync: function (destination_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.releaseTokens.estimateGasAsync.bind(self, destination_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.releaseTokens, self.web3ContractInstance)(destination_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (destination_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.releaseTokens.estimateGas, self.web3ContractInstance)(destination_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (destination_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.releaseTokens.getData(destination_0);
                return abiEncodedTransactionData;
            },
        };
        _this.symbol = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.symbol.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transfer = {
            sendTransactionAsync: function (_to_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transfer.estimateGasAsync.bind(self, _to_0, _value_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transfer, self.web3ContractInstance)(_to_0, _value_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_to_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance)(_to_0, _value_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_to_0, _value_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transfer.getData(_to_0, _value_1);
                return abiEncodedTransactionData;
            },
        };
        _this.validateSignature = {
            callAsync: function (hash_0, v_1, r_2, s_3, expected_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.validateSignature.call, self.web3ContractInstance)(hash_0, v_1, r_2, s_3, expected_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.verifyProof = {
            callAsync: function (proof_0, merkleLeafHash_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.verifyProof.call, self.web3ContractInstance)(proof_0, merkleLeafHash_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.canRedeemUTXO = {
            callAsync: function (txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.canRedeemUTXO.call, self.web3ContractInstance)(txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.ecdsaVerify = {
            callAsync: function (addr_0, pubKey_1, v_2, r_3, s_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.ecdsaVerify.call, self.web3ContractInstance)(addr_0, pubKey_1, v_2, r_3, s_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.increaseApproval = {
            sendTransactionAsync: function (_spender_0, _addedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.increaseApproval.estimateGasAsync.bind(self, _spender_0, _addedValue_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.increaseApproval, self.web3ContractInstance)(_spender_0, _addedValue_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_spender_0, _addedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.increaseApproval.estimateGas, self.web3ContractInstance)(_spender_0, _addedValue_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _addedValue_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.increaseApproval.getData(_spender_0, _addedValue_1);
                return abiEncodedTransactionData;
            },
        };
        _this.allowance = {
            callAsync: function (_owner_0, _spender_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.allowance.call, self.web3ContractInstance)(_owner_0, _spender_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.pubKeyToBitcoinAddress = {
            callAsync: function (pubKey_0, isCompressed_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.pubKeyToBitcoinAddress.call, self.web3ContractInstance)(pubKey_0, isCompressed_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.rootUTXOMerkleTreeHash = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.rootUTXOMerkleTreeHash.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.totalRedeemed = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.totalRedeemed.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.SATS_TO_TOKENS = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.SATS_TO_TOKENS.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernTokenContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernTokenContract = WyvernTokenContract;
//# sourceMappingURL=wyvern_token.js.map

/***/ }),

/***/ 96577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var wyvernProtocol_1 = __webpack_require__(49257);
exports.WyvernProtocol = wyvernProtocol_1.WyvernProtocol;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 77910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var json_schemas_1 = __webpack_require__(31373);
var data = { type: 'string', pattern: '^0x[0-9a-f]*$' };
var orderSchema = {
    id: '/Order',
    properties: {
        exchange: { $ref: '/Address' },
        maker: { $ref: '/Address' },
        taker: { $ref: '/Address' },
        makerRelayerFee: { $ref: '/Number' },
        takerRelayerFee: { $ref: '/Number' },
        makerProtocolFee: { $ref: '/Number' },
        takerProtocolFee: { $ref: '/Number' },
        feeRecipient: { $ref: '/Address' },
        feeMethod: { $ref: '/Number' },
        side: { $ref: '/Number' },
        saleKind: { $ref: '/Number' },
        target: { $ref: '/Address' },
        howToCall: { $ref: '/Number' },
        calldata: data,
        replacementPattern: data,
        staticTarget: { $ref: '/Address' },
        staticExtradata: data,
        paymentToken: { $ref: '/Address' },
        basePrice: { $ref: '/Number' },
        extra: { $ref: '/Number' },
        listingTime: { $ref: '/Number' },
        expirationTime: { $ref: '/Number' },
        salt: { $ref: '/Number' },
    },
    required: [
        'exchange',
        'maker',
        'taker',
        'makerRelayerFee',
        'takerRelayerFee',
        'makerProtocolFee',
        'takerProtocolFee',
        'feeRecipient',
        'feeMethod',
        'side',
        'saleKind',
        'target',
        'howToCall',
        'calldata',
        'replacementPattern',
        'staticTarget',
        'staticExtradata',
        'paymentToken',
        'basePrice',
        'extra',
        'listingTime',
        'expirationTime',
        'salt',
    ],
    type: 'object',
};
var signedOrderSchema = {
    id: '/SignedOrder',
    allOf: [
        { $ref: '/Order' },
        {
            properties: {
                ecSignature: { $ref: '/ECSignature' },
            },
            required: ['ecSignature'],
        },
    ],
};
exports.schemas = {
    numberSchema: json_schemas_1.schemas.numberSchema,
    addressSchema: json_schemas_1.schemas.addressSchema,
    ecSignatureSchema: json_schemas_1.schemas.ecSignatureSchema,
    ecSignatureParameterSchema: json_schemas_1.schemas.ecSignatureParameterSchema,
    orderHashSchema: json_schemas_1.schemas.orderHashSchema,
    orderSchema: orderSchema,
    signedOrderSchema: signedOrderSchema,
};
//# sourceMappingURL=schemas.js.map

/***/ }),

/***/ 39904:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Network;
(function (Network) {
    Network["Main"] = "main";
    Network["Rinkeby"] = "rinkeby";
})(Network = exports.Network || (exports.Network = {}));
var SaleKind;
(function (SaleKind) {
    SaleKind[SaleKind["FixedPrice"] = 0] = "FixedPrice";
    SaleKind[SaleKind["EnglishAuction"] = 1] = "EnglishAuction";
    SaleKind[SaleKind["DutchAuction"] = 2] = "DutchAuction";
})(SaleKind = exports.SaleKind || (exports.SaleKind = {}));
var HowToCall;
(function (HowToCall) {
    HowToCall[HowToCall["Call"] = 0] = "Call";
    HowToCall[HowToCall["DelegateCall"] = 1] = "DelegateCall";
    HowToCall[HowToCall["StaticCall"] = 2] = "StaticCall";
    HowToCall[HowToCall["Create"] = 3] = "Create";
})(HowToCall = exports.HowToCall || (exports.HowToCall = {}));
var AbiType;
(function (AbiType) {
    AbiType["Function"] = "function";
    AbiType["Constructor"] = "constructor";
    AbiType["Event"] = "event";
    AbiType["Fallback"] = "fallback";
})(AbiType = exports.AbiType || (exports.AbiType = {}));
var WyvernProtocolError;
(function (WyvernProtocolError) {
    WyvernProtocolError["InvalidSignature"] = "INVALID_SIGNATURE";
    WyvernProtocolError["TransactionMiningTimeout"] = "TRANSACTION_MINING_TIMEOUT";
    WyvernProtocolError["InvalidJump"] = "INVALID_JUMP";
    WyvernProtocolError["OutOfGas"] = "OUT_OF_GAS";
})(WyvernProtocolError = exports.WyvernProtocolError || (exports.WyvernProtocolError = {}));
var SolidityTypes;
(function (SolidityTypes) {
    SolidityTypes["Address"] = "address";
    SolidityTypes["Uint256"] = "uint256";
    SolidityTypes["Uint8"] = "uint8";
    SolidityTypes["Uint"] = "uint";
    SolidityTypes["Bytes"] = "bytes";
    SolidityTypes["String"] = "string";
})(SolidityTypes = exports.SolidityTypes || (exports.SolidityTypes = {}));
var StateMutability;
(function (StateMutability) {
    StateMutability["Pure"] = "pure";
    StateMutability["View"] = "view";
    StateMutability["Payable"] = "payable";
    StateMutability["Nonpayable"] = "nonpayable";
})(StateMutability = exports.StateMutability || (exports.StateMutability = {}));
var FunctionInputKind;
(function (FunctionInputKind) {
    FunctionInputKind["Replaceable"] = "replaceable";
    FunctionInputKind["Asset"] = "asset";
    FunctionInputKind["Owner"] = "owner";
    FunctionInputKind["Index"] = "index";
    FunctionInputKind["Count"] = "count";
    FunctionInputKind["Data"] = "data";
})(FunctionInputKind = exports.FunctionInputKind || (exports.FunctionInputKind = {}));
var FunctionOutputKind;
(function (FunctionOutputKind) {
    FunctionOutputKind["Owner"] = "owner";
    FunctionOutputKind["Asset"] = "asset";
    FunctionOutputKind["Count"] = "count";
    FunctionOutputKind["Other"] = "other";
})(FunctionOutputKind = exports.FunctionOutputKind || (exports.FunctionOutputKind = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 40444:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* Sourced from 0x.js */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var assert_1 = __webpack_require__(55254);
var _ = __webpack_require__(39378);
var signature_utils_1 = __webpack_require__(47710);
exports.assert = __assign({}, assert_1.assert, { isValidSignature: function (orderHash, ecSignature, signerAddress) {
        var isValidSignature = signature_utils_1.signatureUtils.isValidSignature(orderHash, ecSignature, signerAddress);
        this.assert(isValidSignature, "Expected order with hash '" + orderHash + "' to have a valid signature");
    },
    isSenderAddressAsync: function (variableName, senderAddressHex, web3Wrapper) {
        return __awaiter(this, void 0, void 0, function () {
            var isSenderAddressAvailable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isETHAddressHex(variableName, senderAddressHex);
                        return [4 /*yield*/, web3Wrapper.isSenderAddressAvailableAsync(senderAddressHex)];
                    case 1:
                        isSenderAddressAvailable = _a.sent();
                        assert_1.assert.assert(isSenderAddressAvailable, "Specified " + variableName + " " + senderAddressHex + " isn't available through the supplied web3 provider");
                        return [2 /*return*/];
                }
            });
        });
    },
    isUserAddressAvailableAsync: function (web3Wrapper) {
        return __awaiter(this, void 0, void 0, function () {
            var availableAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web3Wrapper.getAvailableAddressesAsync()];
                    case 1:
                        availableAddresses = _a.sent();
                        this.assert(!_.isEmpty(availableAddresses), 'No addresses were available on the provided web3 provider');
                        return [2 /*return*/];
                }
            });
        });
    } });
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ 98221:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.atomicizerABI = [
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[]',
            },
            {
                'name': 'values',
                'type': 'uint256[]',
            },
            {
                'name': 'calldataLengths',
                'type': 'uint256[]',
            },
            {
                'name': 'calldatas',
                'type': 'bytes',
            },
        ],
        'name': 'atomicize',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=atomicizerABI.js.map

/***/ }),

/***/ 90187:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.authenticatedProxyABI = [
    {
        constant: false,
        inputs: [
            { name: 'dest', type: 'address' },
            { name: 'howToCall', type: 'uint8' },
            { name: 'calldata', type: 'bytes' },
        ],
        name: 'proxy',
        outputs: [{ name: 'result', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { name: 'dest', type: 'address' },
            { name: 'howToCall', type: 'uint8' },
            { name: 'calldata', type: 'bytes' },
        ],
        name: 'proxyAssert',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [{ name: 'revoke', type: 'bool' }],
        name: 'setRevoke',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'user',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'revoked',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [],
        name: 'registry',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            { name: 'from', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'token', type: 'address' },
            { name: 'extraData', type: 'bytes' },
        ],
        name: 'receiveApproval',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            { name: 'addrUser', type: 'address' },
            { name: 'addrRegistry', type: 'address' },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    { payable: true, stateMutability: 'payable', type: 'fallback' },
    {
        anonymous: false,
        inputs: [{ indexed: false, name: 'revoked', type: 'bool' }],
        name: 'Revoked',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'sender', type: 'address' },
            { indexed: false, name: 'amount', type: 'uint256' },
        ],
        name: 'ReceivedEther',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            { indexed: true, name: 'from', type: 'address' },
            { indexed: false, name: 'value', type: 'uint256' },
            { indexed: true, name: 'token', type: 'address' },
            { indexed: false, name: 'extraData', type: 'bytes' },
        ],
        name: 'ReceivedTokens',
        type: 'event',
    },
];
//# sourceMappingURL=authenticatedProxyABI.js.map

/***/ }),

/***/ 8256:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var atomicizerABI_1 = __webpack_require__(98221);
var authenticatedProxyABI_1 = __webpack_require__(90187);
var daoABI_1 = __webpack_require__(66149);
var deployed_1 = __webpack_require__(35601);
var exchangeABI_1 = __webpack_require__(58918);
var proxyRegistryABI_1 = __webpack_require__(48636);
var tokenABI_1 = __webpack_require__(81184);
exports.constants = {
    NULL_ADDRESS: '0x0000000000000000000000000000000000000000',
    INVALID_JUMP_PATTERN: 'invalid JUMP at',
    OUT_OF_GAS_PATTERN: 'out of gas',
    INVALID_TAKER_FORMAT: 'instance.taker is not of a type(s) string',
    MAX_DIGITS_IN_UNSIGNED_256_INT: 78,
    DEFAULT_BLOCK_POLLING_INTERVAL: 1000,
    DEPLOYED: deployed_1.deployed,
    ATOMICIZER_ABI: atomicizerABI_1.atomicizerABI,
    EXCHANGE_ABI: exchangeABI_1.exchangeABI,
    PROXY_REGISTRY_ABI: proxyRegistryABI_1.proxyRegistryABI,
    DAO_ABI: daoABI_1.daoABI,
    TOKEN_ABI: tokenABI_1.tokenABI,
    AUTHENTICATED_PROXY_ABI: authenticatedProxyABI_1.authenticatedProxyABI,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 66149:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.daoABI = [
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'name': 'proposals',
        'outputs': [
            {
                'name': 'recipient',
                'type': 'address',
            },
            {
                'name': 'amount',
                'type': 'uint256',
            },
            {
                'name': 'metadataHash',
                'type': 'bytes',
            },
            {
                'name': 'timeCreated',
                'type': 'uint256',
            },
            {
                'name': 'votingDeadline',
                'type': 'uint256',
            },
            {
                'name': 'finalized',
                'type': 'bool',
            },
            {
                'name': 'proposalPassed',
                'type': 'bool',
            },
            {
                'name': 'numberOfVotes',
                'type': 'uint256',
            },
            {
                'name': 'proposalHash',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'delegatesByDelegator',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'REQUIRED_SHARES_TO_BE_BOARD_MEMBER',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'lockedDelegatingTokens',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
        ],
        'name': 'countVotes',
        'outputs': [
            {
                'name': 'yea',
                'type': 'uint256',
            },
            {
                'name': 'nay',
                'type': 'uint256',
            },
            {
                'name': 'quorum',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'transactionBytecode',
                'type': 'bytes',
            },
        ],
        'name': 'executeProposal',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'sharesTokenAddress',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'delegatedAmountsByDelegate',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'numProposals',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'shareholder',
                'type': 'address',
            },
        ],
        'name': 'hasVoted',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'TOKEN_DECIMALS',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'tokensToLock',
                'type': 'uint256',
            },
            {
                'name': 'delegate',
                'type': 'address',
            },
        ],
        'name': 'setDelegateAndLockTokens',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'clearDelegateAndUnlockTokens',
        'outputs': [
            {
                'name': 'lockedTokens',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'debatingPeriodInMinutes',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'minimumSharesToPassAVote',
                'type': 'uint256',
            },
            {
                'name': 'minutesForDebate',
                'type': 'uint256',
            },
            {
                'name': 'sharesToBeBoardMember',
                'type': 'uint256',
            },
        ],
        'name': 'changeVotingRules',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'minimumQuorum',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'from',
                'type': 'address',
            },
            {
                'name': 'value',
                'type': 'uint256',
            },
            {
                'name': 'token',
                'type': 'address',
            },
            {
                'name': 'extraData',
                'type': 'bytes',
            },
        ],
        'name': 'receiveApproval',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'tokenLocker',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'MINIMUM_QUORUM',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'requiredSharesToBeBoardMember',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'supportsProposal',
                'type': 'bool',
            },
        ],
        'name': 'vote',
        'outputs': [
            {
                'name': 'voteID',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'beneficiary',
                'type': 'address',
            },
            {
                'name': 'weiAmount',
                'type': 'uint256',
            },
            {
                'name': 'jobMetadataHash',
                'type': 'bytes',
            },
            {
                'name': 'transactionBytecode',
                'type': 'bytes',
            },
        ],
        'name': 'newProposal',
        'outputs': [
            {
                'name': 'proposalID',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'DEBATE_PERIOD_MINUTES',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'beneficiary',
                'type': 'address',
            },
            {
                'name': 'weiAmount',
                'type': 'uint256',
            },
            {
                'name': 'transactionBytecode',
                'type': 'bytes',
            },
        ],
        'name': 'checkProposalCode',
        'outputs': [
            {
                'name': 'codeChecksOut',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalLockedTokens',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'name': 'sharesAddress',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'payable': true,
        'stateMutability': 'payable',
        'type': 'fallback',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'proposalID',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'recipient',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'amount',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'metadataHash',
                'type': 'bytes',
            },
        ],
        'name': 'ProposalAdded',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'proposalID',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'position',
                'type': 'bool',
            },
            {
                'indexed': false,
                'name': 'voter',
                'type': 'address',
            },
        ],
        'name': 'Voted',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'proposalID',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'yea',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'nay',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'quorum',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'active',
                'type': 'bool',
            },
        ],
        'name': 'ProposalTallied',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'newMinimumQuorum',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'newDebatingPeriodInMinutes',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'newSharesTokenAddress',
                'type': 'address',
            },
        ],
        'name': 'ChangeOfRules',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'delegator',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'delegate',
                'type': 'address',
            },
        ],
        'name': 'TokensDelegated',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'delegator',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'delegate',
                'type': 'address',
            },
        ],
        'name': 'TokensUndelegated',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'sender',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'amount',
                'type': 'uint256',
            },
        ],
        'name': 'ReceivedEther',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'from',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'token',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'extraData',
                'type': 'bytes',
            },
        ],
        'name': 'ReceivedTokens',
        'type': 'event',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=daoABI.js.map

/***/ }),

/***/ 58437:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* Sourced from 0x.js */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var _ = __webpack_require__(39378);
var types_1 = __webpack_require__(39904);
var constants_1 = __webpack_require__(8256);
var contractCallErrorTransformer = function (error) {
    if (_.includes(error.message, constants_1.constants.INVALID_JUMP_PATTERN)) {
        return new Error(types_1.WyvernProtocolError.InvalidJump);
    }
    if (_.includes(error.message, constants_1.constants.OUT_OF_GAS_PATTERN)) {
        return new Error(types_1.WyvernProtocolError.OutOfGas);
    }
    return error;
};
var schemaErrorTransformer = function (error) {
    if (_.includes(error.message, constants_1.constants.INVALID_TAKER_FORMAT)) {
        var errMsg = 'Order taker must be of type string. If you want anyone to be able to fill an order - pass ZeroEx.NULL_ADDRESS';
        return new Error(errMsg);
    }
    return error;
};
/**
 * Source: https://stackoverflow.com/a/29837695/3546986
 */
var asyncErrorHandlerFactory = function (errorTransformer) {
    var asyncErrorHandlingDecorator = function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        // Do not use arrow syntax here. Use a function expression in
        // order to use the correct value of `this` in this method
        // tslint:disable-next-line:only-arrow-functions
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var result, error_1, transformedError;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, originalMethod.apply(this, args)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result];
                        case 2:
                            error_1 = _a.sent();
                            transformedError = errorTransformer(error_1);
                            throw transformedError;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return descriptor;
    };
    return asyncErrorHandlingDecorator;
};
var syncErrorHandlerFactory = function (errorTransformer) {
    var syncErrorHandlingDecorator = function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        // Do not use arrow syntax here. Use a function expression in
        // order to use the correct value of `this` in this method
        // tslint:disable-next-line:only-arrow-functions
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                var result = originalMethod.apply(this, args);
                return result;
            }
            catch (error) {
                var transformedError = errorTransformer(error);
                throw transformedError;
            }
        };
        return descriptor;
    };
    return syncErrorHandlingDecorator;
};
// _.flow(f, g) = f ∘ g
var wyvernProtocolErrorTransformer = _.flow(schemaErrorTransformer, contractCallErrorTransformer);
exports.decorators = {
    asyncWyvernProtocolErrorHandler: asyncErrorHandlerFactory(wyvernProtocolErrorTransformer),
    syncWyvernProtocolErrorHandler: syncErrorHandlerFactory(wyvernProtocolErrorTransformer),
};
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ 35601:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deployed = {
    'rinkeby': {
        'TestToken': '0xf44cf0b9b8328adf6d899667b2427d13759087f0',
        'TestDAO': '0x64a07f5472f87d273846f11e0b1d6d69cd2001fa',
        'Migrations': '0x38dcf18e64a3ed64767919ec6960d71040e35c82',
        'MerkleProof': '0xcd8f54ed0dcfda2f44064ad279c8c559ff7ff244',
        'WyvernToken': '0xd1be358dab323802a3c469b0787476fdcb8af5d6',
        'WyvernDAO': '0x1b4c767502d01deee83af491c946b469e0620e30',
        'WyvernRegistry': '0xe59640a71231352aa97d3f1b503ad066c799fad9',
        'SaleKindInterface': '0x726f4782c533c8aa98da9291f586dc37b41b0bb8',
        'WyvernExchange': '0x5206e78b21ce315ce284fb24cf05e0585a93b1d9',
        'DirectEscrowProvider': '0x22f617c80e5f4908b943b938e7dc5ab735e64372',
        'WyvernProxyRegistry': '0xf57b2c51ded3a29e6891aba85459d600256cf317',
        'TestStatic': '0xc33a203d61c688433e53fcb6f3af7c6aa12192a4',
        'WyvernDAOProxy': '0x65cb6ea254f716ac9ffdf542994214dabf1c8aa2',
        'WyvernAtomicizer': '0x613a12b156ffa304f714cc38d6ae5d3df70d8063',
        'WyvernTokenTransferProxy': '0x82d102457854c985221249f86659c9d6cf12aa72',
    },
    'development': {
        'Migrations': '0x0545f898c5d9e028f69e969ca3250bf0bcaedbcf',
        'TestToken': '0xc2148e012abd699b76b298d5bca1618c43f985fe',
        'TestDAO': '0x0dd6e287e51c142ed4db36b55c5cb063a6ee444b',
        'MerkleProof': '0x4b7fc44964bebf7772e97573c49fdb9de635ee7e',
        'WyvernToken': '0x2c5b3e4006c1994870c9a62788ee6b499f29388b',
        'WyvernDAO': '0xdbfb0dca67931d6ea18380f3a26903824ff5929f',
        'WyvernRegistry': '0xf3d3f091fdc77054f8ef0fcc45edfe9012656da5',
        'SaleKindInterface': '0x9ba0fd02d538435dae6f6e5e741cd8b981416a51',
        'WyvernExchange': '0xaba2b00d06a286897c0e769226bf52b2eadad479',
        'DirectEscrowProvider': '0x46ffabd33987eef48d59cd315c5450b8eab116be',
        'WyvernProxyRegistry': '0x63d07b80aa7c31c2b8964da4d93a9c01e430dd93',
        'TestStatic': '0x29dd72597101f211fbfe4ea79b431987a0a005f1',
        'WyvernDAOProxy': '0xccc08fc4e4e897369182edc14acc7c0a6b7abf90',
        'WyvernAtomicizer': '0xb39dc0b3cdb7dff704be3e8620eb184a666dd330',
        'WyvernTokenTransferProxy': '0x952f05f78209932e47ecebf900b22c15830eac4e',
    },
    'main': {
        'Migrations': '0x62f98f9b03176f3da5a1c20955295084386c4c87',
        'MerkleProof': '0xcc3bf5a8e925f7b70238eda8dbe51b2a5ea8ae2c',
        'WyvernToken': '0x056017c55ae7ae32d12aef7c679df83a85ca75ff',
        'WyvernDAO': '0x17f68886d00845867c154c912b4ccc506ec92fc7',
        'TestToken': '0x293e49a9a091d166f7d29ad8da39e0c85aa66e4a',
        'TestDAO': '0x65df732afac6969ab4761778e4f9840df3187587',
        'TestStatic': '0x38a0f4acbb5efabb44539f960a60376cb6547602',
        'WyvernProxyRegistry': '0xa5409ec958c83c3f309868babaca7c86dcb077c1',
        'SaleKindInterface': '0x77a1dada690ab5172d80ae3b7ccaf88ee3c2e607',
        'WyvernExchange': '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
        'WyvernDAOProxy': '0xa839d4b5a36265795eba6894651a8af3d0ae2e68',
        'WyvernAtomicizer': '0xc99f70bfd82fb7c8f8191fdfbfb735606b15e5c5',
        'WyvernTokenTransferProxy': '0xe5c783ee536cf5e63e792988335c4255169be4e1',
    },
};
//# sourceMappingURL=deployed.js.map

/***/ }),

/***/ 58918:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exchangeABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'tokenTransferProxy',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'target',
                'type': 'address',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'extradata',
                'type': 'bytes',
            },
        ],
        'name': 'staticCall',
        'outputs': [
            {
                'name': 'result',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newMinimumMakerProtocolFee',
                'type': 'uint256',
            },
        ],
        'name': 'changeMinimumMakerProtocolFee',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newMinimumTakerProtocolFee',
                'type': 'uint256',
            },
        ],
        'name': 'changeMinimumTakerProtocolFee',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'array',
                'type': 'bytes',
            },
            {
                'name': 'desired',
                'type': 'bytes',
            },
            {
                'name': 'mask',
                'type': 'bytes',
            },
        ],
        'name': 'guardedArrayReplace',
        'outputs': [
            {
                'name': '',
                'type': 'bytes',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'minimumTakerProtocolFee',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'codename',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'testCopyAddress',
        'outputs': [
            {
                'name': '',
                'type': 'bytes',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'arrToCopy',
                'type': 'bytes',
            },
        ],
        'name': 'testCopy',
        'outputs': [
            {
                'name': '',
                'type': 'bytes',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'calculateCurrentPrice_',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newProtocolFeeRecipient',
                'type': 'address',
            },
        ],
        'name': 'changeProtocolFeeRecipient',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'version',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'buyCalldata',
                'type': 'bytes',
            },
            {
                'name': 'buyReplacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'sellCalldata',
                'type': 'bytes',
            },
            {
                'name': 'sellReplacementPattern',
                'type': 'bytes',
            },
        ],
        'name': 'orderCalldataCanMatch',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'validateOrder_',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'basePrice',
                'type': 'uint256',
            },
            {
                'name': 'extra',
                'type': 'uint256',
            },
            {
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'name': 'expirationTime',
                'type': 'uint256',
            },
        ],
        'name': 'calculateFinalPrice',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'protocolFeeRecipient',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'hashOrder_',
        'outputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[14]',
            },
            {
                'name': 'uints',
                'type': 'uint256[18]',
            },
            {
                'name': 'feeMethodsSidesKindsHowToCalls',
                'type': 'uint8[8]',
            },
            {
                'name': 'calldataBuy',
                'type': 'bytes',
            },
            {
                'name': 'calldataSell',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternBuy',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternSell',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataBuy',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataSell',
                'type': 'bytes',
            },
        ],
        'name': 'ordersCanMatch_',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'name': 'orderbookInclusionDesired',
                'type': 'bool',
            },
        ],
        'name': 'approveOrder_',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'registry',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'minimumMakerProtocolFee',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'hashToSign_',
        'outputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'name': 'cancelledOrFinalized',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'exchangeToken',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'cancelOrder_',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[14]',
            },
            {
                'name': 'uints',
                'type': 'uint256[18]',
            },
            {
                'name': 'feeMethodsSidesKindsHowToCalls',
                'type': 'uint8[8]',
            },
            {
                'name': 'calldataBuy',
                'type': 'bytes',
            },
            {
                'name': 'calldataSell',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternBuy',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternSell',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataBuy',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataSell',
                'type': 'bytes',
            },
            {
                'name': 'vs',
                'type': 'uint8[2]',
            },
            {
                'name': 'rssMetadata',
                'type': 'bytes32[5]',
            },
        ],
        'name': 'atomicMatch_',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'validateOrderParameters_',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'INVERSE_BASIS_POINT',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[14]',
            },
            {
                'name': 'uints',
                'type': 'uint256[18]',
            },
            {
                'name': 'feeMethodsSidesKindsHowToCalls',
                'type': 'uint8[8]',
            },
            {
                'name': 'calldataBuy',
                'type': 'bytes',
            },
            {
                'name': 'calldataSell',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternBuy',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternSell',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataBuy',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataSell',
                'type': 'bytes',
            },
        ],
        'name': 'calculateMatchPrice_',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'name': 'approvedOrders',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'name': 'registryAddress',
                'type': 'address',
            },
            {
                'name': 'tokenTransferProxyAddress',
                'type': 'address',
            },
            {
                'name': 'tokenAddress',
                'type': 'address',
            },
            {
                'name': 'protocolFeeAddress',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'exchange',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'maker',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'taker',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'makerRelayerFee',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'takerRelayerFee',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'makerProtocolFee',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'takerProtocolFee',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'feeRecipient',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'side',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'target',
                'type': 'address',
            },
        ],
        'name': 'OrderApprovedPartOne',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'staticTarget',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'paymentToken',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'basePrice',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'extra',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'expirationTime',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'salt',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'orderbookInclusionDesired',
                'type': 'bool',
            },
        ],
        'name': 'OrderApprovedPartTwo',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'hash',
                'type': 'bytes32',
            },
        ],
        'name': 'OrderCancelled',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'buyHash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'sellHash',
                'type': 'bytes32',
            },
            {
                'indexed': true,
                'name': 'maker',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'taker',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'price',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'metadata',
                'type': 'bytes32',
            },
        ],
        'name': 'OrdersMatched',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipRenounced',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=exchangeABI.js.map

/***/ }),

/***/ 48636:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.proxyRegistryABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'initialAddressSet',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'endGrantAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'revokeAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'pending',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'contracts',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'delegateProxyImplementation',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'proxies',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'startGrantAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'registerProxy',
        'outputs': [
            {
                'name': 'proxy',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'DELAY_PERIOD',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipRenounced',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'authAddress',
                'type': 'address',
            },
        ],
        'name': 'grantInitialAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=proxyRegistryABI.js.map

/***/ }),

/***/ 47710:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* Sourced from 0x.js */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ethUtil = __webpack_require__(95906);
exports.signatureUtils = {
    isValidSignature: function (data, signature, signerAddress) {
        var dataBuff = ethUtil.toBuffer(data);
        // const msgHashBuff = ethUtil.hashPersonalMessage(dataBuff);
        var msgHashBuff = dataBuff;
        try {
            var pubKey = ethUtil.ecrecover(msgHashBuff, signature.v, ethUtil.toBuffer(signature.r), ethUtil.toBuffer(signature.s));
            var retrievedAddress = ethUtil.bufferToHex(ethUtil.pubToAddress(pubKey));
            return retrievedAddress === signerAddress;
        }
        catch (err) {
            return false;
        }
    },
    parseSignatureHexAsVRS: function (signatureHex) {
        var signatureBuffer = ethUtil.toBuffer(signatureHex);
        var v = signatureBuffer[0];
        if (v < 27) {
            v += 27;
        }
        var r = signatureBuffer.slice(1, 33);
        var s = signatureBuffer.slice(33, 65);
        var ecSignature = {
            v: v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    },
    parseSignatureHexAsRSV: function (signatureHex) {
        var _a = ethUtil.fromRpcSig(signatureHex), v = _a.v, r = _a.r, s = _a.s;
        var ecSignature = {
            v: v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    },
};
//# sourceMappingURL=signature_utils.js.map

/***/ }),

/***/ 81184:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tokenABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'MULTIPLIER',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'maximumRedeemable',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address',
            },
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'approve',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalSupply',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'multiplier',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_from',
                'type': 'address',
            },
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'transferFrom',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'decimals',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'burn',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
        ],
        'name': 'pubKeyToEthereumAddress',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'MINT_AMOUNT',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address',
            },
            {
                'name': '_subtractedValue',
                'type': 'uint256',
            },
        ],
        'name': 'decreaseApproval',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address',
            },
        ],
        'name': 'balanceOf',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'txid',
                'type': 'bytes32',
            },
            {
                'name': 'outputIndex',
                'type': 'uint8',
            },
            {
                'name': 'satoshis',
                'type': 'uint256',
            },
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'name': 'isCompressed',
                'type': 'bool',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'redeemUTXO',
        'outputs': [
            {
                'name': 'tokensRedeemed',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'merkleLeafHash',
                'type': 'bytes32',
            },
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
        ],
        'name': 'canRedeemUTXOHash',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'destination',
                'type': 'address',
            },
        ],
        'name': 'releaseTokens',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'symbol',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'transfer',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
            {
                'name': 'expected',
                'type': 'address',
            },
        ],
        'name': 'validateSignature',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
            {
                'name': 'merkleLeafHash',
                'type': 'bytes32',
            },
        ],
        'name': 'verifyProof',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'txid',
                'type': 'bytes32',
            },
            {
                'name': 'originalAddress',
                'type': 'bytes20',
            },
            {
                'name': 'outputIndex',
                'type': 'uint8',
            },
            {
                'name': 'satoshis',
                'type': 'uint256',
            },
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
        ],
        'name': 'canRedeemUTXO',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'ecdsaVerify',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address',
            },
            {
                'name': '_addedValue',
                'type': 'uint256',
            },
        ],
        'name': 'increaseApproval',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address',
            },
            {
                'name': '_spender',
                'type': 'address',
            },
        ],
        'name': 'allowance',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'name': 'isCompressed',
                'type': 'bool',
            },
        ],
        'name': 'pubKeyToBitcoinAddress',
        'outputs': [
            {
                'name': '',
                'type': 'bytes20',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'rootUTXOMerkleTreeHash',
        'outputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalRedeemed',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'SATS_TO_TOKENS',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'name': 'merkleRoot',
                'type': 'bytes32',
            },
            {
                'name': 'totalUtxoAmount',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'burner',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
        ],
        'name': 'Burn',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'txid',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'outputIndex',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'satoshis',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'proof',
                'type': 'bytes32[]',
            },
            {
                'indexed': false,
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'v',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 's',
                'type': 'bytes32',
            },
            {
                'indexed': true,
                'name': 'redeemer',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
        ],
        'name': 'UTXORedeemed',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'destination',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
        ],
        'name': 'TokensReleased',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'owner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'spender',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
        ],
        'name': 'Approval',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'from',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'to',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
        ],
        'name': 'Transfer',
        'type': 'event',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=tokenABI.js.map

/***/ }),

/***/ 64454:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

/* Sourced from 0x.js */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(17839);
var BN = __webpack_require__(28891);
var ethABI = __webpack_require__(60843);
var ethUtil = __webpack_require__(95906);
var _ = __webpack_require__(39378);
var types_1 = __webpack_require__(39904);
exports.utils = {
    /**
     * Converts BigNumber instance to BN
     * The only reason we convert to BN is to remain compatible with `ethABI. soliditySHA3` that
     * expects values of Solidity type `uint` to be passed as type `BN`.
     * We do not use BN anywhere else in the codebase.
     */
    bigNumberToBN: function (value) {
        return new BN(value.toString(), 10);
    },
    consoleLog: function (message) {
        // tslint:disable-next-line: no-console
        console.log(message);
    },
    isParityNode: function (nodeVersion) {
        return _.includes(nodeVersion, 'Parity');
    },
    isTestRpc: function (nodeVersion) {
        return _.includes(nodeVersion, 'TestRPC');
    },
    spawnSwitchErr: function (name, value) {
        return new Error("Unexpected switch value: " + value + " encountered for " + name);
    },
    getAssetHashHex: function (assetHash, schema) {
        var concat = schema + ':' + assetHash;
        var hashBuf = ethABI.soliditySHA3(['string'], [concat]);
        return ethUtil.bufferToHex(hashBuf);
    },
    getOrderHashHex: function (order) {
        var orderParts = [
            { value: order.exchange, type: types_1.SolidityTypes.Address },
            { value: order.maker, type: types_1.SolidityTypes.Address },
            { value: order.taker, type: types_1.SolidityTypes.Address },
            { value: exports.utils.bigNumberToBN(order.makerRelayerFee), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.takerRelayerFee), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.makerProtocolFee), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.takerProtocolFee), type: types_1.SolidityTypes.Uint256 },
            { value: order.feeRecipient, type: types_1.SolidityTypes.Address },
            { value: order.feeMethod, type: types_1.SolidityTypes.Uint8 },
            { value: order.side, type: types_1.SolidityTypes.Uint8 },
            { value: order.saleKind, type: types_1.SolidityTypes.Uint8 },
            { value: order.target, type: types_1.SolidityTypes.Address },
            { value: order.howToCall, type: types_1.SolidityTypes.Uint8 },
            { value: new Buffer(order.calldata.slice(2), 'hex'), type: types_1.SolidityTypes.Bytes },
            { value: new Buffer(order.replacementPattern.slice(2), 'hex'), type: types_1.SolidityTypes.Bytes },
            { value: order.staticTarget, type: types_1.SolidityTypes.Address },
            { value: new Buffer(order.staticExtradata.slice(2), 'hex'), type: types_1.SolidityTypes.Bytes },
            { value: order.paymentToken, type: types_1.SolidityTypes.Address },
            { value: exports.utils.bigNumberToBN(order.basePrice), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.extra), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.listingTime), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.expirationTime), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.salt), type: types_1.SolidityTypes.Uint256 },
        ];
        var types = _.map(orderParts, function (o) { return o.type; });
        var values = _.map(orderParts, function (o) { return o.value; });
        var hash = ethABI.soliditySHA3(types, values);
        return ethUtil.bufferToHex(hash);
    },
    getCurrentUnixTimestampSec: function () {
        return new utils_1.BigNumber(Date.now() / 1000).round();
    },
    getCurrentUnixTimestampMs: function () {
        return new utils_1.BigNumber(Date.now());
    },
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 49257:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var json_schemas_1 = __webpack_require__(31373);
var utils_1 = __webpack_require__(17839);
var web3_wrapper_1 = __webpack_require__(34408);
var ethABI = __webpack_require__(60843);
var ethUtil = __webpack_require__(95906);
var _ = __webpack_require__(39378);
var authenticated_proxy_1 = __webpack_require__(11921);
var wyvern_atomicizer_1 = __webpack_require__(91408);
var wyvern_d_a_o_1 = __webpack_require__(96216);
var wyvern_exchange_1 = __webpack_require__(27500);
var wyvern_proxy_registry_1 = __webpack_require__(15478);
var wyvern_token_1 = __webpack_require__(47395);
var schemas_1 = __webpack_require__(77910);
var types_1 = __webpack_require__(39904);
var assert_1 = __webpack_require__(40444);
var constants_1 = __webpack_require__(8256);
var decorators_1 = __webpack_require__(58437);
var signature_utils_1 = __webpack_require__(47710);
var utils_2 = __webpack_require__(64454);
var WyvernProtocol = /** @class */ (function () {
    function WyvernProtocol(provider, config) {
        assert_1.assert.isWeb3Provider('provider', provider);
        // assert.doesConformToSchema('config', config, wyvernProtocolConfigSchema)
        this._web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider, { gasPrice: config.gasPrice });
        var exchangeContractAddress = config.wyvernExchangeContractAddress || WyvernProtocol.getExchangeContractAddress(config.network);
        this.wyvernExchange = new wyvern_exchange_1.WyvernExchangeContract(this._web3Wrapper.getContractInstance(constants_1.constants.EXCHANGE_ABI, exchangeContractAddress), {});
        var proxyRegistryContractAddress = config.wyvernProxyRegistryContractAddress || WyvernProtocol.getProxyRegistryContractAddress(config.network);
        this.wyvernProxyRegistry = new wyvern_proxy_registry_1.WyvernProxyRegistryContract(this._web3Wrapper.getContractInstance(constants_1.constants.PROXY_REGISTRY_ABI, proxyRegistryContractAddress), {});
        var daoContractAddress = config.wyvernDAOContractAddress || WyvernProtocol.getDAOContractAddress(config.network);
        this.wyvernDAO = new wyvern_d_a_o_1.WyvernDAOContract(this._web3Wrapper.getContractInstance(constants_1.constants.DAO_ABI, daoContractAddress), {});
        var tokenContractAddress = config.wyvernTokenContractAddress || WyvernProtocol.getTokenContractAddress(config.network);
        this.wyvernToken = new wyvern_token_1.WyvernTokenContract(this._web3Wrapper.getContractInstance(constants_1.constants.TOKEN_ABI, tokenContractAddress), {});
        var atomicizerContractAddress = config.wyvernAtomicizerContractAddress || WyvernProtocol.getAtomicizerContractAddress(config.network);
        this.wyvernAtomicizer = new wyvern_atomicizer_1.WyvernAtomicizerContract(this._web3Wrapper.getContractInstance(constants_1.constants.ATOMICIZER_ABI, atomicizerContractAddress), {});
    }
    WyvernProtocol.getExchangeContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernExchange;
    };
    WyvernProtocol.getProxyRegistryContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernProxyRegistry;
    };
    WyvernProtocol.getTokenContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernToken;
    };
    WyvernProtocol.getDAOContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernDAO;
    };
    WyvernProtocol.getAtomicizerContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernAtomicizer;
    };
    WyvernProtocol.getTokenTransferProxyAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernTokenTransferProxy;
    };
    /**
     * Verifies that the elliptic curve signature `signature` was generated
     * by signing `data` with the private key corresponding to the `signerAddress` address.
     * @param   data          The hex encoded data signed by the supplied signature.
     * @param   signature     An object containing the elliptic curve signature parameters.
     * @param   signerAddress The hex encoded address that signed the data, producing the supplied signature.
     * @return  Whether the signature is valid for the supplied signerAddress and data.
     */
    WyvernProtocol.isValidSignature = function (data, signature, signerAddress) {
        assert_1.assert.isHexString('data', data);
        assert_1.assert.doesConformToSchema('signature', signature, schemas_1.schemas.ecSignatureSchema);
        assert_1.assert.isETHAddressHex('signerAddress', signerAddress);
        var isValidSignature = signature_utils_1.signatureUtils.isValidSignature(data, signature, signerAddress);
        return isValidSignature;
    };
    /**
     * Generates a pseudo-random 256-bit salt.
     * The salt can be included in an 0x order, ensuring that the order generates a unique orderHash
     * and will not collide with other outstanding orders that are identical in all other parameters.
     * @return  A pseudo-random 256-bit number that can be used as a salt.
     */
    WyvernProtocol.generatePseudoRandomSalt = function () {
        // BigNumber.random returns a pseudo-random number between 0 & 1 with a passed in number of decimal places.
        // Source: https://mikemcl.github.io/bignumber.js/#random
        var randomNumber = utils_1.BigNumber.random(constants_1.constants.MAX_DIGITS_IN_UNSIGNED_256_INT);
        var factor = new utils_1.BigNumber(10).pow(constants_1.constants.MAX_DIGITS_IN_UNSIGNED_256_INT - 1);
        var salt = randomNumber.times(factor).round();
        return salt;
    };
    /**
     * Checks if the supplied hex encoded order hash is valid.
     * Note: Valid means it has the expected format, not that an order with the orderHash exists.
     * Use this method when processing orderHashes submitted as user input.
     * @param   orderHash    Hex encoded orderHash.
     * @return  Whether the supplied orderHash has the expected format.
     */
    WyvernProtocol.isValidOrderHash = function (orderHash) {
        // Since this method can be called to check if any arbitrary string conforms to an orderHash's
        // format, we only assert that we were indeed passed a string.
        assert_1.assert.isString('orderHash', orderHash);
        var schemaValidator = new json_schemas_1.SchemaValidator();
        var isValidOrderHash = schemaValidator.validate(orderHash, schemas_1.schemas.orderHashSchema).valid;
        return isValidOrderHash;
    };
    /**
     * A unit amount is defined as the amount of a token above the specified decimal places (integer part).
     * E.g: If a currency has 18 decimal places, 1e18 or one quintillion of the currency is equivalent
     * to 1 unit.
     * @param   amount      The amount in baseUnits that you would like converted to units.
     * @param   decimals    The number of decimal places the unit amount has.
     * @return  The amount in units.
     */
    WyvernProtocol.toUnitAmount = function (amount, decimals) {
        assert_1.assert.isValidBaseUnitAmount('amount', amount);
        assert_1.assert.isNumber('decimals', decimals);
        var aUnit = new utils_1.BigNumber(10).pow(decimals);
        var unit = amount.div(aUnit);
        return unit;
    };
    /**
     * A baseUnit is defined as the smallest denomination of a token. An amount expressed in baseUnits
     * is the amount expressed in the smallest denomination.
     * E.g: 1 unit of a token with 18 decimal places is expressed in baseUnits as 1000000000000000000
     * @param   amount      The amount of units that you would like converted to baseUnits.
     * @param   decimals    The number of decimal places the unit amount has.
     * @return  The amount in baseUnits.
     */
    WyvernProtocol.toBaseUnitAmount = function (amount, decimals) {
        assert_1.assert.isBigNumber('amount', amount);
        assert_1.assert.isNumber('decimals', decimals);
        var unit = new utils_1.BigNumber(10).pow(decimals);
        var baseUnitAmount = amount.times(unit);
        var hasDecimals = baseUnitAmount.decimalPlaces() !== 0;
        if (hasDecimals) {
            throw new Error("Invalid unit amount: " + amount.toString() + " - Too many decimal places");
        }
        return baseUnitAmount;
    };
    /**
     * Computes the orderHash for a supplied order.
     * @param   order   An object that conforms to the Order or SignedOrder interface definitions.
     * @return  The resulting orderHash from hashing the supplied order.
     */
    WyvernProtocol.getOrderHashHex = function (order) {
        assert_1.assert.doesConformToSchema('order', order, schemas_1.schemas.orderSchema);
        var orderHashHex = utils_2.utils.getOrderHashHex(order);
        return orderHashHex;
    };
    /**
     * Computes the assetHash for a supplied asset.
     */
    WyvernProtocol.getAssetHashHex = function (assetHash, schema) {
        var assetHashHex = utils_2.utils.getAssetHashHex(assetHash, schema);
        return assetHashHex;
    };
    /**
     * Sets a new web3 provider for wyvernProtocol.js. Updating the provider will stop all
     * subscriptions so you will need to re-subscribe to all events relevant to your app after this call.
     * @param   provider    The Web3Provider you would like the wyvernProtocol.js library to use from now on.
     * @param   networkId   The id of the network your provider is connected to
     */
    WyvernProtocol.prototype.setProvider = function (provider, networkId) {
        this._web3Wrapper.setProvider(provider);
        this.wyvernExchange._invalidateContractInstances();
        this.wyvernExchange._setNetworkId(networkId);
        this.wyvernProxyRegistry._invalidateContractInstance();
        this.wyvernProxyRegistry._setNetworkId(networkId);
    };
    /**
     * Get user Ethereum addresses available through the supplied web3 provider available for sending transactions.
     * @return  An array of available user Ethereum addresses.
     */
    WyvernProtocol.prototype.getAvailableAddressesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var availableAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._web3Wrapper.getAvailableAddressesAsync()];
                    case 1:
                        availableAddresses = _a.sent();
                        return [2 /*return*/, availableAddresses];
                }
            });
        });
    };
    /**
     * Gets the authenticated proxy contract for a specific account address
     * @param accountAddress address to retrieve the proxy contract from
     */
    WyvernProtocol.prototype.getAuthenticatedProxy = function (accountAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var proxyAddress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.wyvernProxyRegistry.proxies.callAsync(accountAddress)];
                    case 1:
                        proxyAddress = _a.sent();
                        return [2 /*return*/, new authenticated_proxy_1.AuthenticatedProxyContract(this._web3Wrapper.getContractInstance(constants_1.constants.AUTHENTICATED_PROXY_ABI, proxyAddress), {})];
                }
            });
        });
    };
    /**
     * Signs an orderHash and returns its elliptic curve signature.
     * This method currently supports TestRPC, Geth and Parity above and below V1.6.6
     * @param   orderHash       Hex encoded orderHash to sign.
     * @param   signerAddress   The hex encoded Ethereum address you wish to sign it with. This address
     *          must be available via the Web3.Provider supplied to wyvernProtocol.js.
     * @return  An object containing the Elliptic curve signature parameters generated by signing the orderHash.
     */
    WyvernProtocol.prototype.signOrderHashAsync = function (orderHash, signerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var msgHashHex, nodeVersion, isParityNode, isTestRpc, orderHashBuff, msgHashBuff, signature, validVParamValues, ecSignatureVRS, isValidVRSSignature, ecSignatureRSV, isValidRSVSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isHexString('orderHash', orderHash);
                        return [4 /*yield*/, this._web3Wrapper.getNodeVersionAsync()];
                    case 1:
                        nodeVersion = _a.sent();
                        isParityNode = utils_2.utils.isParityNode(nodeVersion);
                        isTestRpc = utils_2.utils.isTestRpc(nodeVersion);
                        if (isParityNode || isTestRpc) {
                            // Parity and TestRpc nodes add the personalMessage prefix itself
                            msgHashHex = orderHash;
                        }
                        else {
                            orderHashBuff = ethUtil.toBuffer(orderHash);
                            msgHashBuff = ethUtil.hashPersonalMessage(orderHashBuff);
                            msgHashHex = ethUtil.bufferToHex(msgHashBuff);
                        }
                        return [4 /*yield*/, this._web3Wrapper.signTransactionAsync(signerAddress, msgHashHex)];
                    case 2:
                        signature = _a.sent();
                        validVParamValues = [27, 28];
                        ecSignatureVRS = signature_utils_1.signatureUtils.parseSignatureHexAsVRS(signature);
                        if (_.includes(validVParamValues, ecSignatureVRS.v)) {
                            isValidVRSSignature = WyvernProtocol.isValidSignature(orderHash, ecSignatureVRS, signerAddress);
                            if (isValidVRSSignature) {
                                return [2 /*return*/, ecSignatureVRS];
                            }
                        }
                        ecSignatureRSV = signature_utils_1.signatureUtils.parseSignatureHexAsRSV(signature);
                        if (_.includes(validVParamValues, ecSignatureRSV.v)) {
                            isValidRSVSignature = WyvernProtocol.isValidSignature(orderHash, ecSignatureRSV, signerAddress);
                            if (isValidRSVSignature) {
                                return [2 /*return*/, ecSignatureRSV];
                            }
                        }
                        throw new Error(types_1.WyvernProtocolError.InvalidSignature);
                }
            });
        });
    };
    /**
     * Waits for a transaction to be mined and returns the transaction receipt.
     * @param   txHash            Transaction hash
     * @param   pollingIntervalMs How often (in ms) should we check if the transaction is mined.
     * @param   timeoutMs         How long (in ms) to poll for transaction mined until aborting.
     * @return  Transaction receipt with decoded log args.
     */
    WyvernProtocol.prototype.awaitTransactionMinedAsync = function (txHash, pollingIntervalMs, timeoutMs) {
        if (pollingIntervalMs === void 0) { pollingIntervalMs = 1000; }
        return __awaiter(this, void 0, void 0, function () {
            var timeoutExceeded, txReceiptPromise;
            var _this = this;
            return __generator(this, function (_a) {
                timeoutExceeded = false;
                if (timeoutMs) {
                    setTimeout(function () { return (timeoutExceeded = true); }, timeoutMs);
                }
                txReceiptPromise = new Promise(function (resolve, reject) {
                    var intervalId = utils_1.intervalUtils.setAsyncExcludingInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var transactionReceipt, logsWithDecodedArgs, transactionReceiptWithDecodedLogArgs;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (timeoutExceeded) {
                                        utils_1.intervalUtils.clearAsyncExcludingInterval(intervalId);
                                        return [2 /*return*/, reject(types_1.WyvernProtocolError.TransactionMiningTimeout)];
                                    }
                                    return [4 /*yield*/, this._web3Wrapper.getTransactionReceiptAsync(txHash)];
                                case 1:
                                    transactionReceipt = _a.sent();
                                    if (!_.isNull(transactionReceipt)) {
                                        utils_1.intervalUtils.clearAsyncExcludingInterval(intervalId);
                                        logsWithDecodedArgs = _.map(transactionReceipt.logs, this._abiDecoder.tryToDecodeLogOrNoop.bind(this._abiDecoder));
                                        transactionReceiptWithDecodedLogArgs = __assign({}, transactionReceipt, { logs: logsWithDecodedArgs });
                                        resolve(transactionReceiptWithDecodedLogArgs);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }, pollingIntervalMs, function () { return ({}); });
                });
                return [2 /*return*/, txReceiptPromise];
            });
        });
    };
    WyvernProtocol.NULL_ADDRESS = constants_1.constants.NULL_ADDRESS;
    WyvernProtocol.MAX_UINT_256 = new utils_1.BigNumber(2).pow(256).sub(1);
    /**
     * Encodes the replacementPattern for a supplied ABI and replace kind
     * @param   abi AnnotatedFunctionABI
     * @param   replaceKind Parameter kind to replace
     * @return  The resulting encoded replacementPattern
     */
    WyvernProtocol.encodeReplacementPattern = function (abi, replaceKind, encodeToBytes) {
        if (replaceKind === void 0) { replaceKind = types_1.FunctionInputKind.Replaceable; }
        if (encodeToBytes === void 0) { encodeToBytes = true; }
        var output = [];
        var data = [];
        var dynamicOffset = abi.inputs.reduce(function (len, _a) {
            var type = _a.type;
            var match = type.match(/\[(.+)\]$/);
            return len + (match ? parseInt(match[1], 10) * 32 : 32);
        }, 0);
        abi.inputs
            .map(function (_a) {
            var kind = _a.kind, type = _a.type, value = _a.value;
            return ({
                bitmask: kind === replaceKind ? 255 : 0,
                type: ethABI.elementaryName(type),
                value: value !== undefined ? value : WyvernProtocol.generateDefaultValue(type),
            });
        })
            .reduce(function (offset, _a) {
            var bitmask = _a.bitmask, type = _a.type, value = _a.value;
            // The 0xff bytes in the mask select the replacement bytes. All other bytes are 0x00.
            var cur = new Buffer(ethABI.encodeSingle(type, value).length).fill(bitmask);
            if (ethABI.isDynamic(type)) {
                if (bitmask) {
                    throw new Error('Replacement is not supported for dynamic parameters.');
                }
                output.push(new Buffer(ethABI.encodeSingle('uint256', dynamicOffset).length));
                data.push(cur);
                return offset + cur.length;
            }
            output.push(cur);
            return offset;
        }, dynamicOffset);
        // 4 initial bytes of 0x00 for the method hash.
        var methodIdMask = new Buffer(4);
        var mask = Buffer.concat([methodIdMask, Buffer.concat(output.concat(data))]);
        return encodeToBytes ? "0x" + mask.toString('hex') : mask.map(function (b) { return b ? 1 : 0; }).join('');
    };
    /**
     * Encodes the atomicized replacementPattern for a supplied ABI and replace kind
     * @param   abis array of AnnotatedFunctionABI
     * @param   replaceKind Parameter kind to replace
     * @return  The resulting encoded replacementPattern
     */
    WyvernProtocol.encodeAtomicizedReplacementPattern = function (abis, replaceKind) {
        if (replaceKind === void 0) { replaceKind = types_1.FunctionInputKind.Replaceable; }
        var allowReplaceByte = '1';
        var doNotAllowReplaceByte = '0';
        /* Four bytes for method ID. */
        var maskArr = [doNotAllowReplaceByte, doNotAllowReplaceByte,
            doNotAllowReplaceByte, doNotAllowReplaceByte];
        var encodedUint256 = ethABI.encodeSingle(ethABI.elementaryName('uint256'), WyvernProtocol.generateDefaultValue('uint256'));
        var dataLocationSize = encodedUint256.length;
        var dynamicArgumentLengthSize = encodedUint256.length;
        // See https://solidity.readthedocs.io/en/develop/abi-spec.html#examples
        // Prepare dymanic types to be passed in (they need locations of their data parts). 4 for addresses, values, calldata lengths, calldatas
        maskArr.push(doNotAllowReplaceByte.repeat(dataLocationSize * 4));
        // Length of addresses array
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // Addresses should not be replaced
        var encoded = ethABI.encodeSingle(ethABI.elementaryName('address'), WyvernProtocol.generateDefaultValue('address'));
        maskArr.push(doNotAllowReplaceByte.repeat(encoded.length * abis.length));
        // Length of values array
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // Add the values...
        encoded = ethABI.encodeSingle(ethABI.elementaryName('uint'), WyvernProtocol.generateDefaultValue('uint'));
        maskArr.push(doNotAllowReplaceByte.repeat(encoded.length * abis.length));
        // Length of calldata lengths array
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // ... and calldata lengths
        maskArr.push(doNotAllowReplaceByte.repeat(encoded.length * abis.length));
        // Length of replacementPatterns
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // Raw replacementPatterns
        var replacementBytes = [];
        abis.map(function (abi) {
            var replacement = WyvernProtocol.encodeReplacementPattern(abi, replaceKind, false);
            replacementBytes.push(replacement);
        });
        var concatenatedReplacementPatterns = replacementBytes.join('');
        maskArr.push(concatenatedReplacementPatterns);
        if (concatenatedReplacementPatterns.length % 32 !== 0) {
            // Pad replacementPatterns to nearest multiple of 32
            maskArr.push(doNotAllowReplaceByte.repeat(32 - concatenatedReplacementPatterns.length % 32));
        }
        var mask = maskArr.reduce(function (x, y) { return x + y; }, '');
        var ret = [];
        /* Encode into bytes. */
        for (var _i = 0, mask_1 = mask; _i < mask_1.length; _i++) {
            var char = mask_1[_i];
            var byte = char === allowReplaceByte ? 255 : 0;
            var buf = Buffer.alloc(1);
            buf.writeUInt8(byte, 0);
            ret.push(buf);
        }
        return '0x' + Buffer.concat(ret).toString('hex');
    };
    /**
     * Computes the default value for a type
     * @param type The ABI type to calculate a default value for
     * @return The default value for that type
     */
    WyvernProtocol.generateDefaultValue = function (type) {
        switch (type) {
            case 'address':
            case 'bytes20':
                /* Null address is sometimes checked in transfer calls. */
                // But we need to use 0x000 because bitwise XOR won't work if there's a 0 in the actual address, since it will be replaced as 1 OR 0 = 1
                return '0x0000000000000000000000000000000000000000';
            case 'bytes32':
                return '0x0000000000000000000000000000000000000000000000000000000000000000';
            case 'bool':
                return false;
            case 'int':
            case 'uint':
            case 'uint8':
            case 'uint16':
            case 'uint32':
            case 'uint64':
            case 'uint256':
                return 0;
            default:
                throw new Error('Default value not yet implemented for type: ' + type);
        }
    };
    __decorate([
        decorators_1.decorators.syncWyvernProtocolErrorHandler
    ], WyvernProtocol, "getOrderHashHex", null);
    return WyvernProtocol;
}());
exports.WyvernProtocol = WyvernProtocol;
//# sourceMappingURL=wyvernProtocol.js.map

/***/ }),

/***/ 85862:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var _ = __webpack_require__(39378);
var BaseContract = /** @class */ (function () {
    function BaseContract(web3ContractInstance, defaults) {
        this.web3ContractInstance = web3ContractInstance;
        this.defaults = defaults;
    }
    BaseContract.prototype.applyDefaultsToTxDataAsync = function (txData, estimateGasAsync) {
        return __awaiter(this, void 0, void 0, function () {
            var removeUndefinedProperties, txDataWithDefaults, estimatedGas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        removeUndefinedProperties = _.pickBy;
                        txDataWithDefaults = __assign({}, removeUndefinedProperties(this.defaults), removeUndefinedProperties(txData));
                        if (!(_.isUndefined(txDataWithDefaults.gas) && !_.isUndefined(estimateGasAsync))) return [3 /*break*/, 2];
                        return [4 /*yield*/, estimateGasAsync(txData)];
                    case 1:
                        estimatedGas = _a.sent();
                        txDataWithDefaults.gas = estimatedGas;
                        _a.label = 2;
                    case 2: return [2 /*return*/, txDataWithDefaults];
                }
            });
        });
    };
    return BaseContract;
}());
exports.BaseContract = BaseContract;
//# sourceMappingURL=base_contract.js.map

/***/ }),

/***/ 41788:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(85862);
var WyvernAtomicizerContract = /** @class */ (function (_super) {
    __extends(WyvernAtomicizerContract, _super);
    function WyvernAtomicizerContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.atomicize = {
            sendTransactionAsync: function (addrs_0, values_1, calldataLengths_2, calldatas_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.atomicize.estimateGasAsync.bind(self, addrs_0, values_1, calldataLengths_2, calldatas_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicize, self.web3ContractInstance)(addrs_0, values_1, calldataLengths_2, calldatas_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, values_1, calldataLengths_2, calldatas_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicize.estimateGas, self.web3ContractInstance)(addrs_0, values_1, calldataLengths_2, calldatas_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, values_1, calldataLengths_2, calldatas_3) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.atomicize.getData(addrs_0, values_1, calldataLengths_2, calldatas_3);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernAtomicizerContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernAtomicizerContract = WyvernAtomicizerContract;
//# sourceMappingURL=wyvern_atomicizer.js.map

/***/ }),

/***/ 18070:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(85862);
var WyvernDAOContract = /** @class */ (function (_super) {
    __extends(WyvernDAOContract, _super);
    function WyvernDAOContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.proposals = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proposals.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegatesByDelegator = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.delegatesByDelegator.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.REQUIRED_SHARES_TO_BE_BOARD_MEMBER = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.REQUIRED_SHARES_TO_BE_BOARD_MEMBER.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.lockedDelegatingTokens = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.lockedDelegatingTokens.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.countVotes = {
            callAsync: function (proposalNumber_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.countVotes.call, self.web3ContractInstance)(proposalNumber_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.executeProposal = {
            sendTransactionAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.executeProposal.estimateGasAsync.bind(self, proposalNumber_0, transactionBytecode_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.executeProposal, self.web3ContractInstance)(proposalNumber_0, transactionBytecode_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, transactionBytecode_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.executeProposal.estimateGas, self.web3ContractInstance)(proposalNumber_0, transactionBytecode_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, transactionBytecode_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.executeProposal.getData(proposalNumber_0, transactionBytecode_1);
                return abiEncodedTransactionData;
            },
        };
        _this.sharesTokenAddress = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.sharesTokenAddress.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegatedAmountsByDelegate = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.delegatedAmountsByDelegate.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.numProposals = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.numProposals.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.hasVoted = {
            callAsync: function (proposalNumber_0, shareholder_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.hasVoted.call, self.web3ContractInstance)(proposalNumber_0, shareholder_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.TOKEN_DECIMALS = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.TOKEN_DECIMALS.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.setDelegateAndLockTokens = {
            sendTransactionAsync: function (tokensToLock_0, delegate_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.setDelegateAndLockTokens.estimateGasAsync.bind(self, tokensToLock_0, delegate_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.setDelegateAndLockTokens, self.web3ContractInstance)(tokensToLock_0, delegate_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (tokensToLock_0, delegate_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.setDelegateAndLockTokens.estimateGas, self.web3ContractInstance)(tokensToLock_0, delegate_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (tokensToLock_0, delegate_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.setDelegateAndLockTokens.getData(tokensToLock_0, delegate_1);
                return abiEncodedTransactionData;
            },
        };
        _this.clearDelegateAndUnlockTokens = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.clearDelegateAndUnlockTokens.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.clearDelegateAndUnlockTokens, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.clearDelegateAndUnlockTokens.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.clearDelegateAndUnlockTokens.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.debatingPeriodInMinutes = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.debatingPeriodInMinutes.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.changeVotingRules = {
            sendTransactionAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeVotingRules.estimateGasAsync.bind(self, minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeVotingRules, self.web3ContractInstance)(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeVotingRules.estimateGas, self.web3ContractInstance)(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeVotingRules.getData(minimumSharesToPassAVote_0, minutesForDebate_1, sharesToBeBoardMember_2);
                return abiEncodedTransactionData;
            },
        };
        _this.minimumQuorum = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.minimumQuorum.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.receiveApproval = {
            sendTransactionAsync: function (from_0, value_1, token_2, extraData_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.receiveApproval.estimateGasAsync.bind(self, from_0, value_1, token_2, extraData_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.receiveApproval, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (from_0, value_1, token_2, extraData_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.receiveApproval.estimateGas, self.web3ContractInstance)(from_0, value_1, token_2, extraData_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (from_0, value_1, token_2, extraData_3) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.receiveApproval.getData(from_0, value_1, token_2, extraData_3);
                return abiEncodedTransactionData;
            },
        };
        _this.tokenLocker = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.tokenLocker.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.MINIMUM_QUORUM = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.MINIMUM_QUORUM.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.requiredSharesToBeBoardMember = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.requiredSharesToBeBoardMember.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.vote = {
            sendTransactionAsync: function (proposalNumber_0, supportsProposal_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.vote.estimateGasAsync.bind(self, proposalNumber_0, supportsProposal_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.vote, self.web3ContractInstance)(proposalNumber_0, supportsProposal_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (proposalNumber_0, supportsProposal_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.vote.estimateGas, self.web3ContractInstance)(proposalNumber_0, supportsProposal_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (proposalNumber_0, supportsProposal_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.vote.getData(proposalNumber_0, supportsProposal_1);
                return abiEncodedTransactionData;
            },
        };
        _this.newProposal = {
            sendTransactionAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.newProposal.estimateGasAsync.bind(self, beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.newProposal, self.web3ContractInstance)(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.newProposal.estimateGas, self.web3ContractInstance)(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.newProposal.getData(beneficiary_0, weiAmount_1, jobMetadataHash_2, transactionBytecode_3);
                return abiEncodedTransactionData;
            },
        };
        _this.DEBATE_PERIOD_MINUTES = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.DEBATE_PERIOD_MINUTES.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.checkProposalCode = {
            callAsync: function (proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.checkProposalCode.call, self.web3ContractInstance)(proposalNumber_0, beneficiary_1, weiAmount_2, transactionBytecode_3, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.totalLockedTokens = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.totalLockedTokens.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernDAOContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernDAOContract = WyvernDAOContract;
//# sourceMappingURL=wyvern_d_a_o.js.map

/***/ }),

/***/ 24724:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(85862);
var WyvernExchangeContract = /** @class */ (function (_super) {
    __extends(WyvernExchangeContract, _super);
    function WyvernExchangeContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.tokenTransferProxy = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.tokenTransferProxy.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.staticCall = {
            callAsync: function (target_0, calldata_1, extradata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.staticCall.call, self.web3ContractInstance)(target_0, calldata_1, extradata_2, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.changeMinimumMakerProtocolFee = {
            sendTransactionAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeMinimumMakerProtocolFee.estimateGasAsync.bind(self, newMinimumMakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumMakerProtocolFee, self.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumMakerProtocolFee.estimateGas, self.web3ContractInstance)(newMinimumMakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumMakerProtocolFee_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeMinimumMakerProtocolFee.getData(newMinimumMakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        _this.changeMinimumTakerProtocolFee = {
            sendTransactionAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeMinimumTakerProtocolFee.estimateGasAsync.bind(self, newMinimumTakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumTakerProtocolFee, self.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeMinimumTakerProtocolFee.estimateGas, self.web3ContractInstance)(newMinimumTakerProtocolFee_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumTakerProtocolFee_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeMinimumTakerProtocolFee.getData(newMinimumTakerProtocolFee_0);
                return abiEncodedTransactionData;
            },
        };
        _this.guardedArrayReplace = {
            callAsync: function (array_0, desired_1, mask_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.guardedArrayReplace.call, self.web3ContractInstance)(array_0, desired_1, mask_2, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.minimumTakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.minimumTakerProtocolFee.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.codename = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.codename.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.testCopyAddress = {
            callAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.testCopyAddress.call, self.web3ContractInstance)(addr_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.testCopy = {
            callAsync: function (arrToCopy_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.testCopy.call, self.web3ContractInstance)(arrToCopy_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.calculateCurrentPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.calculateCurrentPrice_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.changeProtocolFeeRecipient = {
            sendTransactionAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeProtocolFeeRecipient.estimateGasAsync.bind(self, newProtocolFeeRecipient_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeProtocolFeeRecipient, self.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.changeProtocolFeeRecipient.estimateGas, self.web3ContractInstance)(newProtocolFeeRecipient_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newProtocolFeeRecipient_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.changeProtocolFeeRecipient.getData(newProtocolFeeRecipient_0);
                return abiEncodedTransactionData;
            },
        };
        _this.version = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.version.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.orderCalldataCanMatch = {
            callAsync: function (buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.orderCalldataCanMatch.call, self.web3ContractInstance)(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.validateOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.validateOrder_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.calculateFinalPrice = {
            callAsync: function (side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.calculateFinalPrice.call, self.web3ContractInstance)(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.protocolFeeRecipient = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.protocolFeeRecipient.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.renounceOwnership.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.renounceOwnership.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.hashOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.hashOrder_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.ordersCanMatch_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.ordersCanMatch_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approveOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.approveOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approveOrder_, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approveOrder_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.approveOrder_.getData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9);
                return abiEncodedTransactionData;
            },
        };
        _this.registry = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.registry.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.minimumMakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.minimumMakerProtocolFee.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.hashToSign_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.hashToSign_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.cancelledOrFinalized = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.cancelledOrFinalized.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.owner = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.exchangeToken = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.exchangeToken.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.cancelOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.cancelOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.cancelOrder_, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.cancelOrder_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.cancelOrder_.getData(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11);
                return abiEncodedTransactionData;
            },
        };
        _this.atomicMatch_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.atomicMatch_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicMatch_, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.atomicMatch_.estimateGas, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.atomicMatch_.getData(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10);
                return abiEncodedTransactionData;
            },
        };
        _this.validateOrderParameters_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.validateOrderParameters_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.INVERSE_BASIS_POINT = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.INVERSE_BASIS_POINT.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.calculateMatchPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.calculateMatchPrice_.call, self.web3ContractInstance)(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approvedOrders = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approvedOrders.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData(newOwner_0);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernExchangeContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernExchangeContract = WyvernExchangeContract;
//# sourceMappingURL=wyvern_exchange.js.map

/***/ }),

/***/ 30586:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(85862);
var WyvernProxyRegistryContract = /** @class */ (function (_super) {
    __extends(WyvernProxyRegistryContract, _super);
    function WyvernProxyRegistryContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.initialAddressSet = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.initialAddressSet.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.endGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.endGrantAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.endGrantAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.endGrantAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.endGrantAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        _this.revokeAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.revokeAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.revokeAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.revokeAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.revokeAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        _this.pending = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.pending.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.contracts = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.contracts.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.renounceOwnership.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.renounceOwnership.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.renounceOwnership.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.owner = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.delegateProxyImplementation = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.delegateProxyImplementation.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.proxies = {
            callAsync: function (index_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.proxies.call, self.web3ContractInstance)(index_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.startGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.startGrantAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.startGrantAuthentication, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.startGrantAuthentication.estimateGas, self.web3ContractInstance)(addr_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.startGrantAuthentication.getData(addr_0);
                return abiEncodedTransactionData;
            },
        };
        _this.registerProxy = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.registerProxy.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.registerProxy, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.registerProxy.estimateGas, self.web3ContractInstance)(txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.registerProxy.getData();
                return abiEncodedTransactionData;
            },
        };
        _this.DELAY_PERIOD = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.DELAY_PERIOD.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData(newOwner_0);
                return abiEncodedTransactionData;
            },
        };
        _this.grantInitialAuthentication = {
            sendTransactionAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.grantInitialAuthentication.estimateGasAsync.bind(self, authAddress_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.grantInitialAuthentication, self.web3ContractInstance)(authAddress_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.grantInitialAuthentication.estimateGas, self.web3ContractInstance)(authAddress_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (authAddress_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.grantInitialAuthentication.getData(authAddress_0);
                return abiEncodedTransactionData;
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernProxyRegistryContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernProxyRegistryContract = WyvernProxyRegistryContract;
//# sourceMappingURL=wyvern_proxy_registry.js.map

/***/ }),

/***/ 30814:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var utils_1 = __webpack_require__(17839);
var base_contract_1 = __webpack_require__(85862);
var WyvernTokenContract = /** @class */ (function (_super) {
    __extends(WyvernTokenContract, _super);
    function WyvernTokenContract(web3ContractInstance, defaults) {
        var _this = _super.call(this, web3ContractInstance, defaults) || this;
        _this.MULTIPLIER = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.MULTIPLIER.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.maximumRedeemable = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.maximumRedeemable.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.approve = {
            sendTransactionAsync: function (_spender_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.approve.estimateGasAsync.bind(self, _spender_0, _value_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approve, self.web3ContractInstance)(_spender_0, _value_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_spender_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance)(_spender_0, _value_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _value_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.approve.getData(_spender_0, _value_1);
                return abiEncodedTransactionData;
            },
        };
        _this.totalSupply = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.totalSupply.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.multiplier = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.multiplier.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transferFrom = {
            sendTransactionAsync: function (_from_0, _to_1, _value_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, _from_0, _to_1, _value_2))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferFrom, self.web3ContractInstance)(_from_0, _to_1, _value_2, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_from_0, _to_1, _value_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance)(_from_0, _to_1, _value_2, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_from_0, _to_1, _value_2) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData(_from_0, _to_1, _value_2);
                return abiEncodedTransactionData;
            },
        };
        _this.decimals = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.decimals.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.burn = {
            sendTransactionAsync: function (_value_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.burn.estimateGasAsync.bind(self, _value_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.burn, self.web3ContractInstance)(_value_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_value_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.burn.estimateGas, self.web3ContractInstance)(_value_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_value_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.burn.getData(_value_0);
                return abiEncodedTransactionData;
            },
        };
        _this.pubKeyToEthereumAddress = {
            callAsync: function (pubKey_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.pubKeyToEthereumAddress.call, self.web3ContractInstance)(pubKey_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.MINT_AMOUNT = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.MINT_AMOUNT.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.decreaseApproval = {
            sendTransactionAsync: function (_spender_0, _subtractedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.decreaseApproval.estimateGasAsync.bind(self, _spender_0, _subtractedValue_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.decreaseApproval, self.web3ContractInstance)(_spender_0, _subtractedValue_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_spender_0, _subtractedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.decreaseApproval.estimateGas, self.web3ContractInstance)(_spender_0, _subtractedValue_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _subtractedValue_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.decreaseApproval.getData(_spender_0, _subtractedValue_1);
                return abiEncodedTransactionData;
            },
        };
        _this.balanceOf = {
            callAsync: function (_owner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.balanceOf.call, self.web3ContractInstance)(_owner_0, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.redeemUTXO = {
            sendTransactionAsync: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.redeemUTXO.estimateGasAsync.bind(self, txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.redeemUTXO, self.web3ContractInstance)(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.redeemUTXO.estimateGas, self.web3ContractInstance)(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.redeemUTXO.getData(txid_0, outputIndex_1, satoshis_2, proof_3, pubKey_4, isCompressed_5, v_6, r_7, s_8);
                return abiEncodedTransactionData;
            },
        };
        _this.canRedeemUTXOHash = {
            callAsync: function (merkleLeafHash_0, proof_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.canRedeemUTXOHash.call, self.web3ContractInstance)(merkleLeafHash_0, proof_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.releaseTokens = {
            sendTransactionAsync: function (destination_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.releaseTokens.estimateGasAsync.bind(self, destination_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.releaseTokens, self.web3ContractInstance)(destination_0, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (destination_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.releaseTokens.estimateGas, self.web3ContractInstance)(destination_0, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (destination_0) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.releaseTokens.getData(destination_0);
                return abiEncodedTransactionData;
            },
        };
        _this.symbol = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.symbol.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.transfer = {
            sendTransactionAsync: function (_to_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transfer.estimateGasAsync.bind(self, _to_0, _value_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transfer, self.web3ContractInstance)(_to_0, _value_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_to_0, _value_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance)(_to_0, _value_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_to_0, _value_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.transfer.getData(_to_0, _value_1);
                return abiEncodedTransactionData;
            },
        };
        _this.validateSignature = {
            callAsync: function (hash_0, v_1, r_2, s_3, expected_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.validateSignature.call, self.web3ContractInstance)(hash_0, v_1, r_2, s_3, expected_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.verifyProof = {
            callAsync: function (proof_0, merkleLeafHash_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.verifyProof.call, self.web3ContractInstance)(proof_0, merkleLeafHash_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.canRedeemUTXO = {
            callAsync: function (txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.canRedeemUTXO.call, self.web3ContractInstance)(txid_0, originalAddress_1, outputIndex_2, satoshis_3, proof_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.ecdsaVerify = {
            callAsync: function (addr_0, pubKey_1, v_2, r_3, s_4, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.ecdsaVerify.call, self.web3ContractInstance)(addr_0, pubKey_1, v_2, r_3, s_4, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.increaseApproval = {
            sendTransactionAsync: function (_spender_0, _addedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, txHash;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.increaseApproval.estimateGasAsync.bind(self, _spender_0, _addedValue_1))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.increaseApproval, self.web3ContractInstance)(_spender_0, _addedValue_1, txDataWithDefaults)];
                            case 2:
                                txHash = _a.sent();
                                return [2 /*return*/, txHash];
                        }
                    });
                });
            },
            estimateGasAsync: function (_spender_0, _addedValue_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults, gas;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData)];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.increaseApproval.estimateGas, self.web3ContractInstance)(_spender_0, _addedValue_1, txDataWithDefaults)];
                            case 2:
                                gas = _a.sent();
                                return [2 /*return*/, gas];
                        }
                    });
                });
            },
            getABIEncodedTransactionData: function (_spender_0, _addedValue_1) {
                var self = this;
                var abiEncodedTransactionData = self.web3ContractInstance.increaseApproval.getData(_spender_0, _addedValue_1);
                return abiEncodedTransactionData;
            },
        };
        _this.allowance = {
            callAsync: function (_owner_0, _spender_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.allowance.call, self.web3ContractInstance)(_owner_0, _spender_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.pubKeyToBitcoinAddress = {
            callAsync: function (pubKey_0, isCompressed_1, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.pubKeyToBitcoinAddress.call, self.web3ContractInstance)(pubKey_0, isCompressed_1, txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.rootUTXOMerkleTreeHash = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.rootUTXOMerkleTreeHash.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.totalRedeemed = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.totalRedeemed.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        _this.SATS_TO_TOKENS = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, utils_1.promisify(self.web3ContractInstance.SATS_TO_TOKENS.call, self.web3ContractInstance)(txData)];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, result];
                        }
                    });
                });
            },
        };
        utils_1.classUtils.bindAll(_this, ['web3ContractInstance', 'defaults']);
        return _this;
    }
    return WyvernTokenContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernTokenContract = WyvernTokenContract;
//# sourceMappingURL=wyvern_token.js.map

/***/ }),

/***/ 20544:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var wyvernProtocol_1 = __webpack_require__(74526);
exports.WyvernProtocol = wyvernProtocol_1.WyvernProtocol;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48731:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var json_schemas_1 = __webpack_require__(31373);
var data = { type: 'string', pattern: '^0x[0-9a-f]*$' };
var orderSchema = {
    id: '/Order',
    properties: {
        exchange: { $ref: '/Address' },
        maker: { $ref: '/Address' },
        taker: { $ref: '/Address' },
        makerRelayerFee: { $ref: '/Number' },
        takerRelayerFee: { $ref: '/Number' },
        makerProtocolFee: { $ref: '/Number' },
        takerProtocolFee: { $ref: '/Number' },
        feeRecipient: { $ref: '/Address' },
        feeMethod: { $ref: '/Number' },
        side: { $ref: '/Number' },
        saleKind: { $ref: '/Number' },
        target: { $ref: '/Address' },
        howToCall: { $ref: '/Number' },
        calldata: data,
        replacementPattern: data,
        staticTarget: { $ref: '/Address' },
        staticExtradata: data,
        paymentToken: { $ref: '/Address' },
        basePrice: { $ref: '/Number' },
        extra: { $ref: '/Number' },
        listingTime: { $ref: '/Number' },
        expirationTime: { $ref: '/Number' },
        salt: { $ref: '/Number' },
    },
    required: [
        'exchange',
        'maker',
        'taker',
        'makerRelayerFee',
        'takerRelayerFee',
        'makerProtocolFee',
        'takerProtocolFee',
        'feeRecipient',
        'feeMethod',
        'side',
        'saleKind',
        'target',
        'howToCall',
        'calldata',
        'replacementPattern',
        'staticTarget',
        'staticExtradata',
        'paymentToken',
        'basePrice',
        'extra',
        'listingTime',
        'expirationTime',
        'salt',
    ],
    type: 'object',
};
var signedOrderSchema = {
    id: '/SignedOrder',
    allOf: [
        { $ref: '/Order' },
        {
            properties: {
                ecSignature: { $ref: '/ECSignature' },
            },
            required: ['ecSignature'],
        },
    ],
};
exports.schemas = {
    numberSchema: json_schemas_1.schemas.numberSchema,
    addressSchema: json_schemas_1.schemas.addressSchema,
    ecSignatureSchema: json_schemas_1.schemas.ecSignatureSchema,
    ecSignatureParameterSchema: json_schemas_1.schemas.ecSignatureParameterSchema,
    orderHashSchema: json_schemas_1.schemas.orderHashSchema,
    orderSchema: orderSchema,
    signedOrderSchema: signedOrderSchema,
};
//# sourceMappingURL=schemas.js.map

/***/ }),

/***/ 26126:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Network;
(function (Network) {
    Network["Main"] = "main";
    Network["Rinkeby"] = "rinkeby";
})(Network = exports.Network || (exports.Network = {}));
var SaleKind;
(function (SaleKind) {
    SaleKind[SaleKind["FixedPrice"] = 0] = "FixedPrice";
    SaleKind[SaleKind["EnglishAuction"] = 1] = "EnglishAuction";
    SaleKind[SaleKind["DutchAuction"] = 2] = "DutchAuction";
})(SaleKind = exports.SaleKind || (exports.SaleKind = {}));
var HowToCall;
(function (HowToCall) {
    HowToCall[HowToCall["Call"] = 0] = "Call";
    HowToCall[HowToCall["DelegateCall"] = 1] = "DelegateCall";
    HowToCall[HowToCall["StaticCall"] = 2] = "StaticCall";
    HowToCall[HowToCall["Create"] = 3] = "Create";
})(HowToCall = exports.HowToCall || (exports.HowToCall = {}));
var AbiType;
(function (AbiType) {
    AbiType["Function"] = "function";
    AbiType["Constructor"] = "constructor";
    AbiType["Event"] = "event";
    AbiType["Fallback"] = "fallback";
})(AbiType = exports.AbiType || (exports.AbiType = {}));
var WyvernProtocolError;
(function (WyvernProtocolError) {
    WyvernProtocolError["InvalidSignature"] = "INVALID_SIGNATURE";
    WyvernProtocolError["TransactionMiningTimeout"] = "TRANSACTION_MINING_TIMEOUT";
    WyvernProtocolError["InvalidJump"] = "INVALID_JUMP";
    WyvernProtocolError["OutOfGas"] = "OUT_OF_GAS";
})(WyvernProtocolError = exports.WyvernProtocolError || (exports.WyvernProtocolError = {}));
var SolidityTypes;
(function (SolidityTypes) {
    SolidityTypes["Address"] = "address";
    SolidityTypes["Uint256"] = "uint256";
    SolidityTypes["Uint8"] = "uint8";
    SolidityTypes["Uint"] = "uint";
    SolidityTypes["Bytes"] = "bytes";
    SolidityTypes["String"] = "string";
})(SolidityTypes = exports.SolidityTypes || (exports.SolidityTypes = {}));
var StateMutability;
(function (StateMutability) {
    StateMutability["Pure"] = "pure";
    StateMutability["View"] = "view";
    StateMutability["Payable"] = "payable";
    StateMutability["Nonpayable"] = "nonpayable";
})(StateMutability = exports.StateMutability || (exports.StateMutability = {}));
var FunctionInputKind;
(function (FunctionInputKind) {
    FunctionInputKind["Replaceable"] = "replaceable";
    FunctionInputKind["Asset"] = "asset";
    FunctionInputKind["Owner"] = "owner";
    FunctionInputKind["Index"] = "index";
    FunctionInputKind["Count"] = "count";
    FunctionInputKind["Data"] = "data";
})(FunctionInputKind = exports.FunctionInputKind || (exports.FunctionInputKind = {}));
var FunctionOutputKind;
(function (FunctionOutputKind) {
    FunctionOutputKind["Owner"] = "owner";
    FunctionOutputKind["Asset"] = "asset";
    FunctionOutputKind["Count"] = "count";
    FunctionOutputKind["Other"] = "other";
})(FunctionOutputKind = exports.FunctionOutputKind || (exports.FunctionOutputKind = {}));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 29:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* Sourced from 0x.js */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var assert_1 = __webpack_require__(55254);
var _ = __webpack_require__(39378);
var signature_utils_1 = __webpack_require__(65381);
exports.assert = __assign({}, assert_1.assert, { isValidSignature: function (orderHash, ecSignature, signerAddress) {
        var isValidSignature = signature_utils_1.signatureUtils.isValidSignature(orderHash, ecSignature, signerAddress);
        this.assert(isValidSignature, "Expected order with hash '" + orderHash + "' to have a valid signature");
    },
    isSenderAddressAsync: function (variableName, senderAddressHex, web3Wrapper) {
        return __awaiter(this, void 0, void 0, function () {
            var isSenderAddressAvailable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isETHAddressHex(variableName, senderAddressHex);
                        return [4 /*yield*/, web3Wrapper.isSenderAddressAvailableAsync(senderAddressHex)];
                    case 1:
                        isSenderAddressAvailable = _a.sent();
                        assert_1.assert.assert(isSenderAddressAvailable, "Specified " + variableName + " " + senderAddressHex + " isn't available through the supplied web3 provider");
                        return [2 /*return*/];
                }
            });
        });
    },
    isUserAddressAvailableAsync: function (web3Wrapper) {
        return __awaiter(this, void 0, void 0, function () {
            var availableAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, web3Wrapper.getAvailableAddressesAsync()];
                    case 1:
                        availableAddresses = _a.sent();
                        this.assert(!_.isEmpty(availableAddresses), 'No addresses were available on the provided web3 provider');
                        return [2 /*return*/];
                }
            });
        });
    } });
//# sourceMappingURL=assert.js.map

/***/ }),

/***/ 38569:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.atomicizerABI = [
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[]',
            },
            {
                'name': 'values',
                'type': 'uint256[]',
            },
            {
                'name': 'calldataLengths',
                'type': 'uint256[]',
            },
            {
                'name': 'calldatas',
                'type': 'bytes',
            },
        ],
        'name': 'atomicize',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=atomicizerABI.js.map

/***/ }),

/***/ 67595:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var atomicizerABI_1 = __webpack_require__(38569);
var daoABI_1 = __webpack_require__(72283);
var deployed_1 = __webpack_require__(40620);
var exchangeABI_1 = __webpack_require__(74012);
var proxyRegistryABI_1 = __webpack_require__(44214);
var tokenABI_1 = __webpack_require__(10649);
exports.constants = {
    NULL_ADDRESS: '0x0000000000000000000000000000000000000000',
    INVALID_JUMP_PATTERN: 'invalid JUMP at',
    OUT_OF_GAS_PATTERN: 'out of gas',
    INVALID_TAKER_FORMAT: 'instance.taker is not of a type(s) string',
    MAX_DIGITS_IN_UNSIGNED_256_INT: 78,
    DEFAULT_BLOCK_POLLING_INTERVAL: 1000,
    DEPLOYED: deployed_1.deployed,
    ATOMICIZER_ABI: atomicizerABI_1.atomicizerABI,
    EXCHANGE_ABI: exchangeABI_1.exchangeABI,
    PROXY_REGISTRY_ABI: proxyRegistryABI_1.proxyRegistryABI,
    DAO_ABI: daoABI_1.daoABI,
    TOKEN_ABI: tokenABI_1.tokenABI,
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 72283:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.daoABI = [
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'name': 'proposals',
        'outputs': [
            {
                'name': 'recipient',
                'type': 'address',
            },
            {
                'name': 'amount',
                'type': 'uint256',
            },
            {
                'name': 'metadataHash',
                'type': 'bytes',
            },
            {
                'name': 'timeCreated',
                'type': 'uint256',
            },
            {
                'name': 'votingDeadline',
                'type': 'uint256',
            },
            {
                'name': 'finalized',
                'type': 'bool',
            },
            {
                'name': 'proposalPassed',
                'type': 'bool',
            },
            {
                'name': 'numberOfVotes',
                'type': 'uint256',
            },
            {
                'name': 'proposalHash',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'delegatesByDelegator',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'REQUIRED_SHARES_TO_BE_BOARD_MEMBER',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'lockedDelegatingTokens',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
        ],
        'name': 'countVotes',
        'outputs': [
            {
                'name': 'yea',
                'type': 'uint256',
            },
            {
                'name': 'nay',
                'type': 'uint256',
            },
            {
                'name': 'quorum',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'transactionBytecode',
                'type': 'bytes',
            },
        ],
        'name': 'executeProposal',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'sharesTokenAddress',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'delegatedAmountsByDelegate',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'numProposals',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'shareholder',
                'type': 'address',
            },
        ],
        'name': 'hasVoted',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'TOKEN_DECIMALS',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'tokensToLock',
                'type': 'uint256',
            },
            {
                'name': 'delegate',
                'type': 'address',
            },
        ],
        'name': 'setDelegateAndLockTokens',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'clearDelegateAndUnlockTokens',
        'outputs': [
            {
                'name': 'lockedTokens',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'debatingPeriodInMinutes',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'minimumSharesToPassAVote',
                'type': 'uint256',
            },
            {
                'name': 'minutesForDebate',
                'type': 'uint256',
            },
            {
                'name': 'sharesToBeBoardMember',
                'type': 'uint256',
            },
        ],
        'name': 'changeVotingRules',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'minimumQuorum',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'from',
                'type': 'address',
            },
            {
                'name': 'value',
                'type': 'uint256',
            },
            {
                'name': 'token',
                'type': 'address',
            },
            {
                'name': 'extraData',
                'type': 'bytes',
            },
        ],
        'name': 'receiveApproval',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'tokenLocker',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'MINIMUM_QUORUM',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'requiredSharesToBeBoardMember',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'supportsProposal',
                'type': 'bool',
            },
        ],
        'name': 'vote',
        'outputs': [
            {
                'name': 'voteID',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'beneficiary',
                'type': 'address',
            },
            {
                'name': 'weiAmount',
                'type': 'uint256',
            },
            {
                'name': 'jobMetadataHash',
                'type': 'bytes',
            },
            {
                'name': 'transactionBytecode',
                'type': 'bytes',
            },
        ],
        'name': 'newProposal',
        'outputs': [
            {
                'name': 'proposalID',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'DEBATE_PERIOD_MINUTES',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proposalNumber',
                'type': 'uint256',
            },
            {
                'name': 'beneficiary',
                'type': 'address',
            },
            {
                'name': 'weiAmount',
                'type': 'uint256',
            },
            {
                'name': 'transactionBytecode',
                'type': 'bytes',
            },
        ],
        'name': 'checkProposalCode',
        'outputs': [
            {
                'name': 'codeChecksOut',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalLockedTokens',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'name': 'sharesAddress',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'payable': true,
        'stateMutability': 'payable',
        'type': 'fallback',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'proposalID',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'recipient',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'amount',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'metadataHash',
                'type': 'bytes',
            },
        ],
        'name': 'ProposalAdded',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'proposalID',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'position',
                'type': 'bool',
            },
            {
                'indexed': false,
                'name': 'voter',
                'type': 'address',
            },
        ],
        'name': 'Voted',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'proposalID',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'yea',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'nay',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'quorum',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'active',
                'type': 'bool',
            },
        ],
        'name': 'ProposalTallied',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'newMinimumQuorum',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'newDebatingPeriodInMinutes',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'newSharesTokenAddress',
                'type': 'address',
            },
        ],
        'name': 'ChangeOfRules',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'delegator',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'delegate',
                'type': 'address',
            },
        ],
        'name': 'TokensDelegated',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'delegator',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'delegate',
                'type': 'address',
            },
        ],
        'name': 'TokensUndelegated',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'sender',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'amount',
                'type': 'uint256',
            },
        ],
        'name': 'ReceivedEther',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'from',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'token',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'extraData',
                'type': 'bytes',
            },
        ],
        'name': 'ReceivedTokens',
        'type': 'event',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=daoABI.js.map

/***/ }),

/***/ 92670:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* Sourced from 0x.js */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var _ = __webpack_require__(39378);
var types_1 = __webpack_require__(26126);
var constants_1 = __webpack_require__(67595);
var contractCallErrorTransformer = function (error) {
    if (_.includes(error.message, constants_1.constants.INVALID_JUMP_PATTERN)) {
        return new Error(types_1.WyvernProtocolError.InvalidJump);
    }
    if (_.includes(error.message, constants_1.constants.OUT_OF_GAS_PATTERN)) {
        return new Error(types_1.WyvernProtocolError.OutOfGas);
    }
    return error;
};
var schemaErrorTransformer = function (error) {
    if (_.includes(error.message, constants_1.constants.INVALID_TAKER_FORMAT)) {
        var errMsg = 'Order taker must be of type string. If you want anyone to be able to fill an order - pass ZeroEx.NULL_ADDRESS';
        return new Error(errMsg);
    }
    return error;
};
/**
 * Source: https://stackoverflow.com/a/29837695/3546986
 */
var asyncErrorHandlerFactory = function (errorTransformer) {
    var asyncErrorHandlingDecorator = function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        // Do not use arrow syntax here. Use a function expression in
        // order to use the correct value of `this` in this method
        // tslint:disable-next-line:only-arrow-functions
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                var result, error_1, transformedError;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, originalMethod.apply(this, args)];
                        case 1:
                            result = _a.sent();
                            return [2 /*return*/, result];
                        case 2:
                            error_1 = _a.sent();
                            transformedError = errorTransformer(error_1);
                            throw transformedError;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return descriptor;
    };
    return asyncErrorHandlingDecorator;
};
var syncErrorHandlerFactory = function (errorTransformer) {
    var syncErrorHandlingDecorator = function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        // Do not use arrow syntax here. Use a function expression in
        // order to use the correct value of `this` in this method
        // tslint:disable-next-line:only-arrow-functions
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            try {
                var result = originalMethod.apply(this, args);
                return result;
            }
            catch (error) {
                var transformedError = errorTransformer(error);
                throw transformedError;
            }
        };
        return descriptor;
    };
    return syncErrorHandlingDecorator;
};
// _.flow(f, g) = f ∘ g
var wyvernProtocolErrorTransformer = _.flow(schemaErrorTransformer, contractCallErrorTransformer);
exports.decorators = {
    asyncWyvernProtocolErrorHandler: asyncErrorHandlerFactory(wyvernProtocolErrorTransformer),
    syncWyvernProtocolErrorHandler: syncErrorHandlerFactory(wyvernProtocolErrorTransformer),
};
//# sourceMappingURL=decorators.js.map

/***/ }),

/***/ 40620:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deployed = {
    'rinkeby': {
        'TestToken': '0xf44cf0b9b8328adf6d899667b2427d13759087f0',
        'TestDAO': '0x64a07f5472f87d273846f11e0b1d6d69cd2001fa',
        'Migrations': '0x38dcf18e64a3ed64767919ec6960d71040e35c82',
        'MerkleProof': '0xcd8f54ed0dcfda2f44064ad279c8c559ff7ff244',
        'WyvernToken': '0xd1be358dab323802a3c469b0787476fdcb8af5d6',
        'WyvernDAO': '0x1b4c767502d01deee83af491c946b469e0620e30',
        'WyvernRegistry': '0xe59640a71231352aa97d3f1b503ad066c799fad9',
        'SaleKindInterface': '0x726f4782c533c8aa98da9291f586dc37b41b0bb8',
        'WyvernExchange': '0x5206e78b21ce315ce284fb24cf05e0585a93b1d9',
        'DirectEscrowProvider': '0x22f617c80e5f4908b943b938e7dc5ab735e64372',
        'WyvernProxyRegistry': '0xf57b2c51ded3a29e6891aba85459d600256cf317',
        'TestStatic': '0xc33a203d61c688433e53fcb6f3af7c6aa12192a4',
        'WyvernDAOProxy': '0x65cb6ea254f716ac9ffdf542994214dabf1c8aa2',
        'WyvernAtomicizer': '0x613a12b156ffa304f714cc38d6ae5d3df70d8063',
        'WyvernTokenTransferProxy': '0x82d102457854c985221249f86659c9d6cf12aa72',
    },
    'development': {
        'Migrations': '0x0545f898c5d9e028f69e969ca3250bf0bcaedbcf',
        'TestToken': '0xc2148e012abd699b76b298d5bca1618c43f985fe',
        'TestDAO': '0x0dd6e287e51c142ed4db36b55c5cb063a6ee444b',
        'MerkleProof': '0x4b7fc44964bebf7772e97573c49fdb9de635ee7e',
        'WyvernToken': '0x2c5b3e4006c1994870c9a62788ee6b499f29388b',
        'WyvernDAO': '0xdbfb0dca67931d6ea18380f3a26903824ff5929f',
        'WyvernRegistry': '0xf3d3f091fdc77054f8ef0fcc45edfe9012656da5',
        'SaleKindInterface': '0x9ba0fd02d538435dae6f6e5e741cd8b981416a51',
        'WyvernExchange': '0xaba2b00d06a286897c0e769226bf52b2eadad479',
        'DirectEscrowProvider': '0x46ffabd33987eef48d59cd315c5450b8eab116be',
        'WyvernProxyRegistry': '0x63d07b80aa7c31c2b8964da4d93a9c01e430dd93',
        'TestStatic': '0x29dd72597101f211fbfe4ea79b431987a0a005f1',
        'WyvernDAOProxy': '0xccc08fc4e4e897369182edc14acc7c0a6b7abf90',
        'WyvernAtomicizer': '0xb39dc0b3cdb7dff704be3e8620eb184a666dd330',
        'WyvernTokenTransferProxy': '0x952f05f78209932e47ecebf900b22c15830eac4e',
    },
    'main': {
        'Migrations': '0x62f98f9b03176f3da5a1c20955295084386c4c87',
        'MerkleProof': '0xcc3bf5a8e925f7b70238eda8dbe51b2a5ea8ae2c',
        'WyvernToken': '0x056017c55ae7ae32d12aef7c679df83a85ca75ff',
        'WyvernDAO': '0x17f68886d00845867c154c912b4ccc506ec92fc7',
        'TestToken': '0x293e49a9a091d166f7d29ad8da39e0c85aa66e4a',
        'TestDAO': '0x65df732afac6969ab4761778e4f9840df3187587',
        'TestStatic': '0x38a0f4acbb5efabb44539f960a60376cb6547602',
        'WyvernProxyRegistry': '0xa5409ec958c83c3f309868babaca7c86dcb077c1',
        'SaleKindInterface': '0x77a1dada690ab5172d80ae3b7ccaf88ee3c2e607',
        'WyvernExchange': '0x7be8076f4ea4a4ad08075c2508e481d6c946d12b',
        'WyvernDAOProxy': '0xa839d4b5a36265795eba6894651a8af3d0ae2e68',
        'WyvernAtomicizer': '0xc99f70bfd82fb7c8f8191fdfbfb735606b15e5c5',
        'WyvernTokenTransferProxy': '0xe5c783ee536cf5e63e792988335c4255169be4e1',
    },
};
//# sourceMappingURL=deployed.js.map

/***/ }),

/***/ 74012:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exchangeABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'tokenTransferProxy',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'target',
                'type': 'address',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'extradata',
                'type': 'bytes',
            },
        ],
        'name': 'staticCall',
        'outputs': [
            {
                'name': 'result',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newMinimumMakerProtocolFee',
                'type': 'uint256',
            },
        ],
        'name': 'changeMinimumMakerProtocolFee',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newMinimumTakerProtocolFee',
                'type': 'uint256',
            },
        ],
        'name': 'changeMinimumTakerProtocolFee',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'array',
                'type': 'bytes',
            },
            {
                'name': 'desired',
                'type': 'bytes',
            },
            {
                'name': 'mask',
                'type': 'bytes',
            },
        ],
        'name': 'guardedArrayReplace',
        'outputs': [
            {
                'name': '',
                'type': 'bytes',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'minimumTakerProtocolFee',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'codename',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'testCopyAddress',
        'outputs': [
            {
                'name': '',
                'type': 'bytes',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'arrToCopy',
                'type': 'bytes',
            },
        ],
        'name': 'testCopy',
        'outputs': [
            {
                'name': '',
                'type': 'bytes',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'calculateCurrentPrice_',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newProtocolFeeRecipient',
                'type': 'address',
            },
        ],
        'name': 'changeProtocolFeeRecipient',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'version',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'buyCalldata',
                'type': 'bytes',
            },
            {
                'name': 'buyReplacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'sellCalldata',
                'type': 'bytes',
            },
            {
                'name': 'sellReplacementPattern',
                'type': 'bytes',
            },
        ],
        'name': 'orderCalldataCanMatch',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'validateOrder_',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'basePrice',
                'type': 'uint256',
            },
            {
                'name': 'extra',
                'type': 'uint256',
            },
            {
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'name': 'expirationTime',
                'type': 'uint256',
            },
        ],
        'name': 'calculateFinalPrice',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'protocolFeeRecipient',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'hashOrder_',
        'outputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[14]',
            },
            {
                'name': 'uints',
                'type': 'uint256[18]',
            },
            {
                'name': 'feeMethodsSidesKindsHowToCalls',
                'type': 'uint8[8]',
            },
            {
                'name': 'calldataBuy',
                'type': 'bytes',
            },
            {
                'name': 'calldataSell',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternBuy',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternSell',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataBuy',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataSell',
                'type': 'bytes',
            },
        ],
        'name': 'ordersCanMatch_',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'name': 'orderbookInclusionDesired',
                'type': 'bool',
            },
        ],
        'name': 'approveOrder_',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'registry',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'minimumMakerProtocolFee',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'hashToSign_',
        'outputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'name': 'cancelledOrFinalized',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'exchangeToken',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'cancelOrder_',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[14]',
            },
            {
                'name': 'uints',
                'type': 'uint256[18]',
            },
            {
                'name': 'feeMethodsSidesKindsHowToCalls',
                'type': 'uint8[8]',
            },
            {
                'name': 'calldataBuy',
                'type': 'bytes',
            },
            {
                'name': 'calldataSell',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternBuy',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternSell',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataBuy',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataSell',
                'type': 'bytes',
            },
            {
                'name': 'vs',
                'type': 'uint8[2]',
            },
            {
                'name': 'rssMetadata',
                'type': 'bytes32[5]',
            },
        ],
        'name': 'atomicMatch_',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[7]',
            },
            {
                'name': 'uints',
                'type': 'uint256[9]',
            },
            {
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'name': 'side',
                'type': 'uint8',
            },
            {
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradata',
                'type': 'bytes',
            },
        ],
        'name': 'validateOrderParameters_',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'INVERSE_BASIS_POINT',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addrs',
                'type': 'address[14]',
            },
            {
                'name': 'uints',
                'type': 'uint256[18]',
            },
            {
                'name': 'feeMethodsSidesKindsHowToCalls',
                'type': 'uint8[8]',
            },
            {
                'name': 'calldataBuy',
                'type': 'bytes',
            },
            {
                'name': 'calldataSell',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternBuy',
                'type': 'bytes',
            },
            {
                'name': 'replacementPatternSell',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataBuy',
                'type': 'bytes',
            },
            {
                'name': 'staticExtradataSell',
                'type': 'bytes',
            },
        ],
        'name': 'calculateMatchPrice_',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'name': 'approvedOrders',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'name': 'registryAddress',
                'type': 'address',
            },
            {
                'name': 'tokenTransferProxyAddress',
                'type': 'address',
            },
            {
                'name': 'tokenAddress',
                'type': 'address',
            },
            {
                'name': 'protocolFeeAddress',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'exchange',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'maker',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'taker',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'makerRelayerFee',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'takerRelayerFee',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'makerProtocolFee',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'takerProtocolFee',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'feeRecipient',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'feeMethod',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'side',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'saleKind',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'target',
                'type': 'address',
            },
        ],
        'name': 'OrderApprovedPartOne',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'howToCall',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'calldata',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'replacementPattern',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'staticTarget',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'staticExtradata',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'paymentToken',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'basePrice',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'extra',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'listingTime',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'expirationTime',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'salt',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'orderbookInclusionDesired',
                'type': 'bool',
            },
        ],
        'name': 'OrderApprovedPartTwo',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'hash',
                'type': 'bytes32',
            },
        ],
        'name': 'OrderCancelled',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'buyHash',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'sellHash',
                'type': 'bytes32',
            },
            {
                'indexed': true,
                'name': 'maker',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'taker',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'price',
                'type': 'uint256',
            },
            {
                'indexed': true,
                'name': 'metadata',
                'type': 'bytes32',
            },
        ],
        'name': 'OrdersMatched',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipRenounced',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=exchangeABI.js.map

/***/ }),

/***/ 44214:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.proxyRegistryABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'initialAddressSet',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'endGrantAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'revokeAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'pending',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'contracts',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'renounceOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'owner',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'delegateProxyImplementation',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'name': 'proxies',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
        ],
        'name': 'startGrantAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'registerProxy',
        'outputs': [
            {
                'name': 'proxy',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'DELAY_PERIOD',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'transferOwnership',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipRenounced',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'previousOwner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'newOwner',
                'type': 'address',
            },
        ],
        'name': 'OwnershipTransferred',
        'type': 'event',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'authAddress',
                'type': 'address',
            },
        ],
        'name': 'grantInitialAuthentication',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=proxyRegistryABI.js.map

/***/ }),

/***/ 65381:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* Sourced from 0x.js */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var ethUtil = __webpack_require__(95906);
exports.signatureUtils = {
    isValidSignature: function (data, signature, signerAddress) {
        var dataBuff = ethUtil.toBuffer(data);
        // const msgHashBuff = ethUtil.hashPersonalMessage(dataBuff);
        var msgHashBuff = dataBuff;
        try {
            var pubKey = ethUtil.ecrecover(msgHashBuff, signature.v, ethUtil.toBuffer(signature.r), ethUtil.toBuffer(signature.s));
            var retrievedAddress = ethUtil.bufferToHex(ethUtil.pubToAddress(pubKey));
            return retrievedAddress === signerAddress;
        }
        catch (err) {
            return false;
        }
    },
    parseSignatureHexAsVRS: function (signatureHex) {
        var signatureBuffer = ethUtil.toBuffer(signatureHex);
        var v = signatureBuffer[0];
        if (v < 27) {
            v += 27;
        }
        var r = signatureBuffer.slice(1, 33);
        var s = signatureBuffer.slice(33, 65);
        var ecSignature = {
            v: v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    },
    parseSignatureHexAsRSV: function (signatureHex) {
        var _a = ethUtil.fromRpcSig(signatureHex), v = _a.v, r = _a.r, s = _a.s;
        var ecSignature = {
            v: v,
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
        };
        return ecSignature;
    },
};
//# sourceMappingURL=signature_utils.js.map

/***/ }),

/***/ 10649:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tokenABI = [
    {
        'constant': true,
        'inputs': [],
        'name': 'MULTIPLIER',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'maximumRedeemable',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address',
            },
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'approve',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalSupply',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'multiplier',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_from',
                'type': 'address',
            },
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'transferFrom',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'decimals',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'burn',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
        ],
        'name': 'pubKeyToEthereumAddress',
        'outputs': [
            {
                'name': '',
                'type': 'address',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'MINT_AMOUNT',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address',
            },
            {
                'name': '_subtractedValue',
                'type': 'uint256',
            },
        ],
        'name': 'decreaseApproval',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address',
            },
        ],
        'name': 'balanceOf',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'txid',
                'type': 'bytes32',
            },
            {
                'name': 'outputIndex',
                'type': 'uint8',
            },
            {
                'name': 'satoshis',
                'type': 'uint256',
            },
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'name': 'isCompressed',
                'type': 'bool',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'redeemUTXO',
        'outputs': [
            {
                'name': 'tokensRedeemed',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'merkleLeafHash',
                'type': 'bytes32',
            },
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
        ],
        'name': 'canRedeemUTXOHash',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': 'destination',
                'type': 'address',
            },
        ],
        'name': 'releaseTokens',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'symbol',
        'outputs': [
            {
                'name': '',
                'type': 'string',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_to',
                'type': 'address',
            },
            {
                'name': '_value',
                'type': 'uint256',
            },
        ],
        'name': 'transfer',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'hash',
                'type': 'bytes32',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
            {
                'name': 'expected',
                'type': 'address',
            },
        ],
        'name': 'validateSignature',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
            {
                'name': 'merkleLeafHash',
                'type': 'bytes32',
            },
        ],
        'name': 'verifyProof',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'txid',
                'type': 'bytes32',
            },
            {
                'name': 'originalAddress',
                'type': 'bytes20',
            },
            {
                'name': 'outputIndex',
                'type': 'uint8',
            },
            {
                'name': 'satoshis',
                'type': 'uint256',
            },
            {
                'name': 'proof',
                'type': 'bytes32[]',
            },
        ],
        'name': 'canRedeemUTXO',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'addr',
                'type': 'address',
            },
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'name': 'v',
                'type': 'uint8',
            },
            {
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'name': 's',
                'type': 'bytes32',
            },
        ],
        'name': 'ecdsaVerify',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': false,
        'inputs': [
            {
                'name': '_spender',
                'type': 'address',
            },
            {
                'name': '_addedValue',
                'type': 'uint256',
            },
        ],
        'name': 'increaseApproval',
        'outputs': [
            {
                'name': '',
                'type': 'bool',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': '_owner',
                'type': 'address',
            },
            {
                'name': '_spender',
                'type': 'address',
            },
        ],
        'name': 'allowance',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [
            {
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'name': 'isCompressed',
                'type': 'bool',
            },
        ],
        'name': 'pubKeyToBitcoinAddress',
        'outputs': [
            {
                'name': '',
                'type': 'bytes20',
            },
        ],
        'payable': false,
        'stateMutability': 'pure',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'rootUTXOMerkleTreeHash',
        'outputs': [
            {
                'name': '',
                'type': 'bytes32',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'totalRedeemed',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'SATS_TO_TOKENS',
        'outputs': [
            {
                'name': '',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function',
    },
    {
        'inputs': [
            {
                'name': 'merkleRoot',
                'type': 'bytes32',
            },
            {
                'name': 'totalUtxoAmount',
                'type': 'uint256',
            },
        ],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'burner',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
        ],
        'name': 'Burn',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'txid',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 'outputIndex',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'satoshis',
                'type': 'uint256',
            },
            {
                'indexed': false,
                'name': 'proof',
                'type': 'bytes32[]',
            },
            {
                'indexed': false,
                'name': 'pubKey',
                'type': 'bytes',
            },
            {
                'indexed': false,
                'name': 'v',
                'type': 'uint8',
            },
            {
                'indexed': false,
                'name': 'r',
                'type': 'bytes32',
            },
            {
                'indexed': false,
                'name': 's',
                'type': 'bytes32',
            },
            {
                'indexed': true,
                'name': 'redeemer',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
        ],
        'name': 'UTXORedeemed',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': false,
                'name': 'destination',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'numberOfTokens',
                'type': 'uint256',
            },
        ],
        'name': 'TokensReleased',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'owner',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'spender',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
        ],
        'name': 'Approval',
        'type': 'event',
    },
    {
        'anonymous': false,
        'inputs': [
            {
                'indexed': true,
                'name': 'from',
                'type': 'address',
            },
            {
                'indexed': true,
                'name': 'to',
                'type': 'address',
            },
            {
                'indexed': false,
                'name': 'value',
                'type': 'uint256',
            },
        ],
        'name': 'Transfer',
        'type': 'event',
    },
];
// tslint:disable:max-file-line-count
//# sourceMappingURL=tokenABI.js.map

/***/ }),

/***/ 82378:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

/* Sourced from 0x.js */
Object.defineProperty(exports, "__esModule", ({ value: true }));
var utils_1 = __webpack_require__(17839);
var BN = __webpack_require__(28891);
var ethABI = __webpack_require__(60843);
var ethUtil = __webpack_require__(95906);
var _ = __webpack_require__(39378);
var types_1 = __webpack_require__(26126);
exports.utils = {
    /**
     * Converts BigNumber instance to BN
     * The only reason we convert to BN is to remain compatible with `ethABI. soliditySHA3` that
     * expects values of Solidity type `uint` to be passed as type `BN`.
     * We do not use BN anywhere else in the codebase.
     */
    bigNumberToBN: function (value) {
        return new BN(value.toString(), 10);
    },
    consoleLog: function (message) {
        // tslint:disable-next-line: no-console
        console.log(message);
    },
    isParityNode: function (nodeVersion) {
        return _.includes(nodeVersion, 'Parity');
    },
    isTestRpc: function (nodeVersion) {
        return _.includes(nodeVersion, 'TestRPC');
    },
    spawnSwitchErr: function (name, value) {
        return new Error("Unexpected switch value: " + value + " encountered for " + name);
    },
    getAssetHashHex: function (assetHash, schema) {
        var concat = schema + ':' + assetHash;
        var hashBuf = ethABI.soliditySHA3(['string'], [concat]);
        return ethUtil.bufferToHex(hashBuf);
    },
    getOrderHashHex: function (order) {
        var orderParts = [
            { value: order.exchange, type: types_1.SolidityTypes.Address },
            { value: order.maker, type: types_1.SolidityTypes.Address },
            { value: order.taker, type: types_1.SolidityTypes.Address },
            { value: exports.utils.bigNumberToBN(order.makerRelayerFee), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.takerRelayerFee), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.makerProtocolFee), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.takerProtocolFee), type: types_1.SolidityTypes.Uint256 },
            { value: order.feeRecipient, type: types_1.SolidityTypes.Address },
            { value: order.feeMethod, type: types_1.SolidityTypes.Uint8 },
            { value: order.side, type: types_1.SolidityTypes.Uint8 },
            { value: order.saleKind, type: types_1.SolidityTypes.Uint8 },
            { value: order.target, type: types_1.SolidityTypes.Address },
            { value: order.howToCall, type: types_1.SolidityTypes.Uint8 },
            { value: new Buffer(order.calldata.slice(2), 'hex'), type: types_1.SolidityTypes.Bytes },
            { value: new Buffer(order.replacementPattern.slice(2), 'hex'), type: types_1.SolidityTypes.Bytes },
            { value: order.staticTarget, type: types_1.SolidityTypes.Address },
            { value: new Buffer(order.staticExtradata.slice(2), 'hex'), type: types_1.SolidityTypes.Bytes },
            { value: order.paymentToken, type: types_1.SolidityTypes.Address },
            { value: exports.utils.bigNumberToBN(order.basePrice), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.extra), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.listingTime), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.expirationTime), type: types_1.SolidityTypes.Uint256 },
            { value: exports.utils.bigNumberToBN(order.salt), type: types_1.SolidityTypes.Uint256 },
        ];
        var types = _.map(orderParts, function (o) { return o.type; });
        var values = _.map(orderParts, function (o) { return o.value; });
        var hash = ethABI.soliditySHA3(types, values);
        return ethUtil.bufferToHex(hash);
    },
    getCurrentUnixTimestampSec: function () {
        return new utils_1.BigNumber(Date.now() / 1000).round();
    },
    getCurrentUnixTimestampMs: function () {
        return new utils_1.BigNumber(Date.now());
    },
};
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 74526:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/* provided dependency */ var Buffer = __webpack_require__(15313)["Buffer"];

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var json_schemas_1 = __webpack_require__(31373);
var utils_1 = __webpack_require__(17839);
var web3_wrapper_1 = __webpack_require__(34408);
var ethABI = __webpack_require__(60843);
var ethUtil = __webpack_require__(95906);
var _ = __webpack_require__(39378);
var types_1 = __webpack_require__(26126);
var schemas_1 = __webpack_require__(48731);
var assert_1 = __webpack_require__(29);
var constants_1 = __webpack_require__(67595);
var decorators_1 = __webpack_require__(92670);
var signature_utils_1 = __webpack_require__(65381);
var utils_2 = __webpack_require__(82378);
var wyvern_atomicizer_1 = __webpack_require__(41788);
var wyvern_d_a_o_1 = __webpack_require__(18070);
var wyvern_exchange_1 = __webpack_require__(24724);
var wyvern_proxy_registry_1 = __webpack_require__(30586);
var wyvern_token_1 = __webpack_require__(30814);
var WyvernProtocol = /** @class */ (function () {
    function WyvernProtocol(provider, config) {
        assert_1.assert.isWeb3Provider('provider', provider);
        // assert.doesConformToSchema('config', config, wyvernProtocolConfigSchema)
        this._web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider, { gasPrice: config.gasPrice });
        var exchangeContractAddress = config.wyvernExchangeContractAddress || WyvernProtocol.getExchangeContractAddress(config.network);
        this.wyvernExchange = new wyvern_exchange_1.WyvernExchangeContract(this._web3Wrapper.getContractInstance(constants_1.constants.EXCHANGE_ABI, exchangeContractAddress), {});
        var proxyRegistryContractAddress = config.wyvernProxyRegistryContractAddress || WyvernProtocol.getProxyRegistryContractAddress(config.network);
        this.wyvernProxyRegistry = new wyvern_proxy_registry_1.WyvernProxyRegistryContract(this._web3Wrapper.getContractInstance(constants_1.constants.PROXY_REGISTRY_ABI, proxyRegistryContractAddress), {});
        var daoContractAddress = config.wyvernDAOContractAddress || WyvernProtocol.getDAOContractAddress(config.network);
        this.wyvernDAO = new wyvern_d_a_o_1.WyvernDAOContract(this._web3Wrapper.getContractInstance(constants_1.constants.DAO_ABI, daoContractAddress), {});
        var tokenContractAddress = config.wyvernTokenContractAddress || WyvernProtocol.getTokenContractAddress(config.network);
        this.wyvernToken = new wyvern_token_1.WyvernTokenContract(this._web3Wrapper.getContractInstance(constants_1.constants.TOKEN_ABI, tokenContractAddress), {});
        var atomicizerContractAddress = config.wyvernAtomicizerContractAddress || WyvernProtocol.getAtomicizerContractAddress(config.network);
        this.wyvernAtomicizer = new wyvern_atomicizer_1.WyvernAtomicizerContract(this._web3Wrapper.getContractInstance(constants_1.constants.ATOMICIZER_ABI, atomicizerContractAddress), {});
    }
    WyvernProtocol.getExchangeContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernExchange;
    };
    WyvernProtocol.getProxyRegistryContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernProxyRegistry;
    };
    WyvernProtocol.getTokenContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernToken;
    };
    WyvernProtocol.getDAOContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernDAO;
    };
    WyvernProtocol.getAtomicizerContractAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernAtomicizer;
    };
    WyvernProtocol.getTokenTransferProxyAddress = function (network) {
        return constants_1.constants.DEPLOYED[network].WyvernTokenTransferProxy;
    };
    /**
     * Verifies that the elliptic curve signature `signature` was generated
     * by signing `data` with the private key corresponding to the `signerAddress` address.
     * @param   data          The hex encoded data signed by the supplied signature.
     * @param   signature     An object containing the elliptic curve signature parameters.
     * @param   signerAddress The hex encoded address that signed the data, producing the supplied signature.
     * @return  Whether the signature is valid for the supplied signerAddress and data.
     */
    WyvernProtocol.isValidSignature = function (data, signature, signerAddress) {
        assert_1.assert.isHexString('data', data);
        assert_1.assert.doesConformToSchema('signature', signature, schemas_1.schemas.ecSignatureSchema);
        assert_1.assert.isETHAddressHex('signerAddress', signerAddress);
        var isValidSignature = signature_utils_1.signatureUtils.isValidSignature(data, signature, signerAddress);
        return isValidSignature;
    };
    /**
     * Generates a pseudo-random 256-bit salt.
     * The salt can be included in an 0x order, ensuring that the order generates a unique orderHash
     * and will not collide with other outstanding orders that are identical in all other parameters.
     * @return  A pseudo-random 256-bit number that can be used as a salt.
     */
    WyvernProtocol.generatePseudoRandomSalt = function () {
        // BigNumber.random returns a pseudo-random number between 0 & 1 with a passed in number of decimal places.
        // Source: https://mikemcl.github.io/bignumber.js/#random
        var randomNumber = utils_1.BigNumber.random(constants_1.constants.MAX_DIGITS_IN_UNSIGNED_256_INT);
        var factor = new utils_1.BigNumber(10).pow(constants_1.constants.MAX_DIGITS_IN_UNSIGNED_256_INT - 1);
        var salt = randomNumber.times(factor).round();
        return salt;
    };
    /**
     * Checks if the supplied hex encoded order hash is valid.
     * Note: Valid means it has the expected format, not that an order with the orderHash exists.
     * Use this method when processing orderHashes submitted as user input.
     * @param   orderHash    Hex encoded orderHash.
     * @return  Whether the supplied orderHash has the expected format.
     */
    WyvernProtocol.isValidOrderHash = function (orderHash) {
        // Since this method can be called to check if any arbitrary string conforms to an orderHash's
        // format, we only assert that we were indeed passed a string.
        assert_1.assert.isString('orderHash', orderHash);
        var schemaValidator = new json_schemas_1.SchemaValidator();
        var isValidOrderHash = schemaValidator.validate(orderHash, schemas_1.schemas.orderHashSchema).valid;
        return isValidOrderHash;
    };
    /**
     * A unit amount is defined as the amount of a token above the specified decimal places (integer part).
     * E.g: If a currency has 18 decimal places, 1e18 or one quintillion of the currency is equivalent
     * to 1 unit.
     * @param   amount      The amount in baseUnits that you would like converted to units.
     * @param   decimals    The number of decimal places the unit amount has.
     * @return  The amount in units.
     */
    WyvernProtocol.toUnitAmount = function (amount, decimals) {
        assert_1.assert.isValidBaseUnitAmount('amount', amount);
        assert_1.assert.isNumber('decimals', decimals);
        var aUnit = new utils_1.BigNumber(10).pow(decimals);
        var unit = amount.div(aUnit);
        return unit;
    };
    /**
     * A baseUnit is defined as the smallest denomination of a token. An amount expressed in baseUnits
     * is the amount expressed in the smallest denomination.
     * E.g: 1 unit of a token with 18 decimal places is expressed in baseUnits as 1000000000000000000
     * @param   amount      The amount of units that you would like converted to baseUnits.
     * @param   decimals    The number of decimal places the unit amount has.
     * @return  The amount in baseUnits.
     */
    WyvernProtocol.toBaseUnitAmount = function (amount, decimals) {
        assert_1.assert.isBigNumber('amount', amount);
        assert_1.assert.isNumber('decimals', decimals);
        var unit = new utils_1.BigNumber(10).pow(decimals);
        var baseUnitAmount = amount.times(unit);
        var hasDecimals = baseUnitAmount.decimalPlaces() !== 0;
        if (hasDecimals) {
            throw new Error("Invalid unit amount: " + amount.toString() + " - Too many decimal places");
        }
        return baseUnitAmount;
    };
    /**
     * Computes the orderHash for a supplied order.
     * @param   order   An object that conforms to the Order or SignedOrder interface definitions.
     * @return  The resulting orderHash from hashing the supplied order.
     */
    WyvernProtocol.getOrderHashHex = function (order) {
        assert_1.assert.doesConformToSchema('order', order, schemas_1.schemas.orderSchema);
        var orderHashHex = utils_2.utils.getOrderHashHex(order);
        return orderHashHex;
    };
    /**
     * Computes the assetHash for a supplied asset.
     */
    WyvernProtocol.getAssetHashHex = function (assetHash, schema) {
        var assetHashHex = utils_2.utils.getAssetHashHex(assetHash, schema);
        return assetHashHex;
    };
    /**
     * Sets a new web3 provider for wyvernProtocol.js. Updating the provider will stop all
     * subscriptions so you will need to re-subscribe to all events relevant to your app after this call.
     * @param   provider    The Web3Provider you would like the wyvernProtocol.js library to use from now on.
     * @param   networkId   The id of the network your provider is connected to
     */
    WyvernProtocol.prototype.setProvider = function (provider, networkId) {
        this._web3Wrapper.setProvider(provider);
        this.wyvernExchange._invalidateContractInstances();
        this.wyvernExchange._setNetworkId(networkId);
        this.wyvernProxyRegistry._invalidateContractInstance();
        this.wyvernProxyRegistry._setNetworkId(networkId);
    };
    /**
     * Get user Ethereum addresses available through the supplied web3 provider available for sending transactions.
     * @return  An array of available user Ethereum addresses.
     */
    WyvernProtocol.prototype.getAvailableAddressesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var availableAddresses;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._web3Wrapper.getAvailableAddressesAsync()];
                    case 1:
                        availableAddresses = _a.sent();
                        return [2 /*return*/, availableAddresses];
                }
            });
        });
    };
    /**
     * Signs an orderHash and returns its elliptic curve signature.
     * This method currently supports TestRPC, Geth and Parity above and below V1.6.6
     * @param   orderHash       Hex encoded orderHash to sign.
     * @param   signerAddress   The hex encoded Ethereum address you wish to sign it with. This address
     *          must be available via the Web3.Provider supplied to wyvernProtocol.js.
     * @return  An object containing the Elliptic curve signature parameters generated by signing the orderHash.
     */
    WyvernProtocol.prototype.signOrderHashAsync = function (orderHash, signerAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var msgHashHex, nodeVersion, isParityNode, isTestRpc, orderHashBuff, msgHashBuff, signature, validVParamValues, ecSignatureVRS, isValidVRSSignature, ecSignatureRSV, isValidRSVSignature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        assert_1.assert.isHexString('orderHash', orderHash);
                        return [4 /*yield*/, this._web3Wrapper.getNodeVersionAsync()];
                    case 1:
                        nodeVersion = _a.sent();
                        isParityNode = utils_2.utils.isParityNode(nodeVersion);
                        isTestRpc = utils_2.utils.isTestRpc(nodeVersion);
                        if (isParityNode || isTestRpc) {
                            // Parity and TestRpc nodes add the personalMessage prefix itself
                            msgHashHex = orderHash;
                        }
                        else {
                            orderHashBuff = ethUtil.toBuffer(orderHash);
                            msgHashBuff = ethUtil.hashPersonalMessage(orderHashBuff);
                            msgHashHex = ethUtil.bufferToHex(msgHashBuff);
                        }
                        return [4 /*yield*/, this._web3Wrapper.signTransactionAsync(signerAddress, msgHashHex)];
                    case 2:
                        signature = _a.sent();
                        validVParamValues = [27, 28];
                        ecSignatureVRS = signature_utils_1.signatureUtils.parseSignatureHexAsVRS(signature);
                        if (_.includes(validVParamValues, ecSignatureVRS.v)) {
                            isValidVRSSignature = WyvernProtocol.isValidSignature(orderHash, ecSignatureVRS, signerAddress);
                            if (isValidVRSSignature) {
                                return [2 /*return*/, ecSignatureVRS];
                            }
                        }
                        ecSignatureRSV = signature_utils_1.signatureUtils.parseSignatureHexAsRSV(signature);
                        if (_.includes(validVParamValues, ecSignatureRSV.v)) {
                            isValidRSVSignature = WyvernProtocol.isValidSignature(orderHash, ecSignatureRSV, signerAddress);
                            if (isValidRSVSignature) {
                                return [2 /*return*/, ecSignatureRSV];
                            }
                        }
                        throw new Error(types_1.WyvernProtocolError.InvalidSignature);
                }
            });
        });
    };
    /**
     * Waits for a transaction to be mined and returns the transaction receipt.
     * @param   txHash            Transaction hash
     * @param   pollingIntervalMs How often (in ms) should we check if the transaction is mined.
     * @param   timeoutMs         How long (in ms) to poll for transaction mined until aborting.
     * @return  Transaction receipt with decoded log args.
     */
    WyvernProtocol.prototype.awaitTransactionMinedAsync = function (txHash, pollingIntervalMs, timeoutMs) {
        if (pollingIntervalMs === void 0) { pollingIntervalMs = 1000; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var timeoutExceeded, txReceiptPromise;
            return __generator(this, function (_a) {
                timeoutExceeded = false;
                if (timeoutMs) {
                    setTimeout(function () { return (timeoutExceeded = true); }, timeoutMs);
                }
                txReceiptPromise = new Promise(function (resolve, reject) {
                    var intervalId = utils_1.intervalUtils.setAsyncExcludingInterval(function () { return __awaiter(_this, void 0, void 0, function () {
                        var transactionReceipt, logsWithDecodedArgs, transactionReceiptWithDecodedLogArgs;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (timeoutExceeded) {
                                        utils_1.intervalUtils.clearAsyncExcludingInterval(intervalId);
                                        return [2 /*return*/, reject(types_1.WyvernProtocolError.TransactionMiningTimeout)];
                                    }
                                    return [4 /*yield*/, this._web3Wrapper.getTransactionReceiptAsync(txHash)];
                                case 1:
                                    transactionReceipt = _a.sent();
                                    if (!_.isNull(transactionReceipt)) {
                                        utils_1.intervalUtils.clearAsyncExcludingInterval(intervalId);
                                        logsWithDecodedArgs = _.map(transactionReceipt.logs, this._abiDecoder.tryToDecodeLogOrNoop.bind(this._abiDecoder));
                                        transactionReceiptWithDecodedLogArgs = __assign({}, transactionReceipt, { logs: logsWithDecodedArgs });
                                        resolve(transactionReceiptWithDecodedLogArgs);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }, pollingIntervalMs, function () { return ({}); });
                });
                return [2 /*return*/, txReceiptPromise];
            });
        });
    };
    WyvernProtocol.NULL_ADDRESS = constants_1.constants.NULL_ADDRESS;
    WyvernProtocol.MAX_UINT_256 = new utils_1.BigNumber(2).pow(256).sub(1);
    /**
     * Encodes the replacementPattern for a supplied ABI and replace kind
     * @param   abi AnnotatedFunctionABI
     * @param   replaceKind Parameter kind to replace
     * @return  The resulting encoded replacementPattern
     */
    WyvernProtocol.encodeReplacementPattern = function (abi, replaceKind, encodeToBytes) {
        if (replaceKind === void 0) { replaceKind = types_1.FunctionInputKind.Replaceable; }
        if (encodeToBytes === void 0) { encodeToBytes = true; }
        var output = [];
        var data = [];
        var dynamicOffset = abi.inputs.reduce(function (len, _a) {
            var type = _a.type;
            var match = type.match(/\[(.+)\]$/);
            return len + (match ? parseInt(match[1], 10) * 32 : 32);
        }, 0);
        abi.inputs
            .map(function (_a) {
            var kind = _a.kind, type = _a.type, value = _a.value;
            return ({
                bitmask: kind === replaceKind ? 255 : 0,
                type: ethABI.elementaryName(type),
                value: value !== undefined ? value : WyvernProtocol.generateDefaultValue(type),
            });
        })
            .reduce(function (offset, _a) {
            var bitmask = _a.bitmask, type = _a.type, value = _a.value;
            // The 0xff bytes in the mask select the replacement bytes. All other bytes are 0x00.
            var cur = new Buffer(ethABI.encodeSingle(type, value).length).fill(bitmask);
            if (ethABI.isDynamic(type)) {
                if (bitmask) {
                    throw new Error('Replacement is not supported for dynamic parameters.');
                }
                output.push(new Buffer(ethABI.encodeSingle('uint256', dynamicOffset).length));
                data.push(cur);
                return offset + cur.length;
            }
            output.push(cur);
            return offset;
        }, dynamicOffset);
        // 4 initial bytes of 0x00 for the method hash.
        var methodIdMask = new Buffer(4);
        var mask = Buffer.concat([methodIdMask, Buffer.concat(output.concat(data))]);
        return encodeToBytes ? "0x" + mask.toString('hex') : mask.map(function (b) { return b ? 1 : 0; }).join('');
    };
    /**
     * Encodes the atomicized replacementPattern for a supplied ABI and replace kind
     * @param   abis array of AnnotatedFunctionABI
     * @param   replaceKind Parameter kind to replace
     * @return  The resulting encoded replacementPattern
     */
    WyvernProtocol.encodeAtomicizedReplacementPattern = function (abis, replaceKind) {
        if (replaceKind === void 0) { replaceKind = types_1.FunctionInputKind.Replaceable; }
        var allowReplaceByte = '1';
        var doNotAllowReplaceByte = '0';
        /* Four bytes for method ID. */
        var maskArr = [doNotAllowReplaceByte, doNotAllowReplaceByte,
            doNotAllowReplaceByte, doNotAllowReplaceByte];
        var encodedUint256 = ethABI.encodeSingle(ethABI.elementaryName('uint256'), WyvernProtocol.generateDefaultValue('uint256'));
        var dataLocationSize = encodedUint256.length;
        var dynamicArgumentLengthSize = encodedUint256.length;
        // See https://solidity.readthedocs.io/en/develop/abi-spec.html#examples
        // Prepare dymanic types to be passed in (they need locations of their data parts). 4 for addresses, values, calldata lengths, calldatas
        maskArr.push(doNotAllowReplaceByte.repeat(dataLocationSize * 4));
        // Length of addresses array
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // Addresses should not be replaced
        var encoded = ethABI.encodeSingle(ethABI.elementaryName('address'), WyvernProtocol.generateDefaultValue('address'));
        maskArr.push(doNotAllowReplaceByte.repeat(encoded.length * abis.length));
        // Length of values array
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // Add the values...
        encoded = ethABI.encodeSingle(ethABI.elementaryName('uint'), WyvernProtocol.generateDefaultValue('uint'));
        maskArr.push(doNotAllowReplaceByte.repeat(encoded.length * abis.length));
        // Length of calldata lengths array
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // ... and calldata lengths
        maskArr.push(doNotAllowReplaceByte.repeat(encoded.length * abis.length));
        // Length of replacementPatterns
        maskArr.push(doNotAllowReplaceByte.repeat(dynamicArgumentLengthSize));
        // Raw replacementPatterns
        var replacementBytes = [];
        abis.map(function (abi) {
            var replacement = WyvernProtocol.encodeReplacementPattern(abi, replaceKind, false);
            replacementBytes.push(replacement);
        });
        var concatenatedReplacementPatterns = replacementBytes.join('');
        maskArr.push(concatenatedReplacementPatterns);
        if (concatenatedReplacementPatterns.length % 32 !== 0) {
            // Pad replacementPatterns to nearest multiple of 32
            maskArr.push(doNotAllowReplaceByte.repeat(32 - concatenatedReplacementPatterns.length % 32));
        }
        var mask = maskArr.reduce(function (x, y) { return x + y; }, '');
        var ret = [];
        /* Encode into bytes. */
        for (var _i = 0, mask_1 = mask; _i < mask_1.length; _i++) {
            var char = mask_1[_i];
            var byte = char === allowReplaceByte ? 255 : 0;
            var buf = Buffer.alloc(1);
            buf.writeUInt8(byte, 0);
            ret.push(buf);
        }
        return '0x' + Buffer.concat(ret).toString('hex');
    };
    /**
     * Computes the default value for a type
     * @param type The ABI type to calculate a default value for
     * @return The default value for that type
     */
    WyvernProtocol.generateDefaultValue = function (type) {
        switch (type) {
            case 'address':
            case 'bytes20':
                /* Null address is sometimes checked in transfer calls. */
                // But we need to use 0x000 because bitwise XOR won't work if there's a 0 in the actual address, since it will be replaced as 1 OR 0 = 1
                return '0x0000000000000000000000000000000000000000';
            case 'bytes32':
                return '0x0000000000000000000000000000000000000000000000000000000000000000';
            case 'bool':
                return false;
            case 'int':
            case 'uint':
            case 'uint8':
            case 'uint16':
            case 'uint32':
            case 'uint64':
            case 'uint256':
                return 0;
            default:
                throw new Error('Default value not yet implemented for type: ' + type);
        }
    };
    __decorate([
        decorators_1.decorators.syncWyvernProtocolErrorHandler
    ], WyvernProtocol, "getOrderHashHex", null);
    return WyvernProtocol;
}());
exports.WyvernProtocol = WyvernProtocol;
//# sourceMappingURL=wyvernProtocol.js.map

/***/ })

}]);