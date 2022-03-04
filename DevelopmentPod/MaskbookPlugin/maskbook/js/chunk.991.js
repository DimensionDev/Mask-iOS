"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[991,6478,5578,1922],{

/***/ 96151:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsSHA3 = __webpack_require__(75631);
var BASIC_ADDRESS_REGEX = /^(0x)?[0-9a-f]{40}$/i;
var SAME_CASE_ADDRESS_REGEX = /^(0x)?([0-9a-f]{40}|[0-9A-F]{40})$/;
exports.addressUtils = {
    isChecksumAddress: function (address) {
        // Check each case
        var unprefixedAddress = address.replace('0x', '');
        var addressHash = jsSHA3.keccak256(unprefixedAddress.toLowerCase());
        for (var i = 0; i < 40; i++) {
            // The nth letter should be uppercase if the nth digit of casemap is 1
            if ((parseInt(addressHash[i], 16) > 7 && unprefixedAddress[i].toUpperCase() !== unprefixedAddress[i]) ||
                (parseInt(addressHash[i], 16) <= 7 && unprefixedAddress[i].toLowerCase() !== unprefixedAddress[i])) {
                return false;
            }
        }
        return true;
    },
    isAddress: function (address) {
        if (!BASIC_ADDRESS_REGEX.test(address)) {
            // Check if it has the basic requirements of an address
            return false;
        }
        else if (SAME_CASE_ADDRESS_REGEX.test(address)) {
            // If it's all small caps or all all caps, return true
            return true;
        }
        else {
            // Otherwise check each case
            var isValidChecksummedAddress = exports.addressUtils.isChecksumAddress(address);
            return isValidChecksummedAddress;
        }
    },
};
//# sourceMappingURL=address_utils.js.map

/***/ }),

/***/ 51614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var _ = __webpack_require__(39378);
exports.classUtils = {
    // This is useful for classes that have nested methods. Nested methods don't get bound out of the box.
    bindAll: function (self, exclude, thisArg) {
        if (exclude === void 0) { exclude = ['contructor']; }
        for (var _i = 0, _a = Object.getOwnPropertyNames(self); _i < _a.length; _i++) {
            var key = _a[_i];
            var val = self[key];
            if (!_.includes(exclude, key)) {
                if (_.isFunction(val)) {
                    self[key] = val.bind(thisArg || self);
                }
                else if (_.isObject(val)) {
                    exports.classUtils.bindAll(val, exclude, self);
                }
            }
        }
        return self;
    },
};
//# sourceMappingURL=class_utils.js.map

/***/ }),

/***/ 46610:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var bignumber_js_1 = __webpack_require__(73350);
exports.BigNumber = bignumber_js_1.BigNumber;
// By default BigNumber's `toString` method converts to exponential notation if the value has
// more then 20 digits. We want to avoid this behavior, so we set EXPONENTIAL_AT to a high number
bignumber_js_1.BigNumber.config({
    EXPONENTIAL_AT: 1000,
});
//# sourceMappingURL=configured_bignumber.js.map

/***/ }),

/***/ 17839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var promisify_1 = __webpack_require__(47726);
exports.promisify = promisify_1.promisify;
var address_utils_1 = __webpack_require__(96151);
exports.addressUtils = address_utils_1.addressUtils;
var class_utils_1 = __webpack_require__(51614);
exports.classUtils = class_utils_1.classUtils;
var interval_utils_1 = __webpack_require__(53305);
exports.intervalUtils = interval_utils_1.intervalUtils;
var configured_bignumber_1 = __webpack_require__(46610);
exports.BigNumber = configured_bignumber_1.BigNumber;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 53305:
/***/ (function(__unused_webpack_module, exports) {


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
exports.intervalUtils = {
    setAsyncExcludingInterval: function (fn, intervalMs, onError) {
        var _this = this;
        var locked = false;
        var intervalId = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!locked) return [3 /*break*/, 1];
                        return [2 /*return*/];
                    case 1:
                        locked = true;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, fn()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        onError(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        locked = false;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); }, intervalMs);
        return intervalId;
    },
    clearAsyncExcludingInterval: function (intervalId) {
        clearInterval(intervalId);
    },
    setInterval: function (fn, intervalMs, onError) {
        var intervalId = setInterval(function () {
            try {
                fn();
            }
            catch (err) {
                onError(err);
            }
        }, intervalMs);
        return intervalId;
    },
    clearInterval: function (intervalId) {
        clearInterval(intervalId);
    },
};
//# sourceMappingURL=interval_utils.js.map

/***/ }),

/***/ 47726:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/**
 * Transforms callback-based function -- func(arg1, arg2 .. argN, callback) -- into an ES6-compatible Promise.
 * Promisify provides a default callback of the form (error, result) and rejects when `error` is not null. You can also
 * supply thisArg object as the second argument which will be passed to `apply`.
 */
// HACK: This can't be properly typed without variadic kinds https://github.com/Microsoft/TypeScript/issues/5453
function promisify(originalFn, thisArg) {
    var _this = this;
    var promisifiedFunction = function () {
        var callArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callArgs[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var callback = function (err, data) {
                            _.isNull(err) ? resolve(data) : reject(err);
                        };
                        originalFn.apply(thisArg, callArgs.concat([callback]));
                    })];
            });
        });
    };
    return promisifiedFunction;
}
exports.promisify = promisify;
//# sourceMappingURL=promisify.js.map

/***/ }),

/***/ 71401:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(22407);
var _ = __webpack_require__(39378);
var Web3 = __webpack_require__(69906);
var SolidityCoder = __webpack_require__(45191);
var configured_bignumber_1 = __webpack_require__(85851);
var AbiDecoder = /** @class */ (function () {
    function AbiDecoder(abiArrays) {
        this._savedABIs = [];
        this._methodIds = {};
        _.map(abiArrays, this._addABI.bind(this));
    }
    AbiDecoder._padZeros = function (address) {
        var formatted = address;
        if (_.startsWith(formatted, '0x')) {
            formatted = formatted.slice(2);
        }
        formatted = _.padStart(formatted, 40, '0');
        return "0x" + formatted;
    };
    // This method can only decode logs from the 0x & ERC20 smart contracts
    AbiDecoder.prototype.tryToDecodeLogOrNoop = function (log) {
        var methodId = log.topics[0];
        var event = this._methodIds[methodId];
        if (_.isUndefined(event)) {
            return log;
        }
        var logData = log.data;
        var decodedParams = {};
        var dataIndex = 0;
        var topicsIndex = 1;
        var nonIndexedInputs = _.filter(event.inputs, function (input) { return !input.indexed; });
        var dataTypes = _.map(nonIndexedInputs, function (input) { return input.type; });
        var decodedData = SolidityCoder.decodeParams(dataTypes, logData.slice('0x'.length));
        _.map(event.inputs, function (param) {
            // Indexed parameters are stored in topics. Non-indexed ones in decodedData
            var value = param.indexed ? log.topics[topicsIndex++] : decodedData[dataIndex++];
            if (param.type === types_1.SolidityTypes.Address) {
                value = AbiDecoder._padZeros(new configured_bignumber_1.BigNumber(value).toString(16));
            }
            else if (param.type === types_1.SolidityTypes.Uint256 ||
                param.type === types_1.SolidityTypes.Uint8 ||
                param.type === types_1.SolidityTypes.Uint) {
                value = new configured_bignumber_1.BigNumber(value);
            }
            decodedParams[param.name] = value;
        });
        return __assign({}, log, { event: event.name, args: decodedParams });
    };
    AbiDecoder.prototype._addABI = function (abiArray) {
        var _this = this;
        _.map(abiArray, function (abi) {
            if (abi.type === types_1.AbiType.Event) {
                var signature = abi.name + "(" + _.map(abi.inputs, function (input) { return input.type; }).join(',') + ")";
                var signatureHash = new Web3().sha3(signature);
                _this._methodIds[signatureHash] = abi;
            }
        });
        this._savedABIs = this._savedABIs.concat(abiArray);
    };
    return AbiDecoder;
}());
exports.AbiDecoder = AbiDecoder;
//# sourceMappingURL=abi_decoder.js.map

/***/ }),

/***/ 24878:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsSHA3 = __webpack_require__(75631);
var BASIC_ADDRESS_REGEX = /^(0x)?[0-9a-f]{40}$/i;
var SAME_CASE_ADDRESS_REGEX = /^(0x)?([0-9a-f]{40}|[0-9A-F]{40})$/;
exports.addressUtils = {
    isChecksumAddress: function (address) {
        // Check each case
        var unprefixedAddress = address.replace('0x', '');
        var addressHash = jsSHA3.keccak256(unprefixedAddress.toLowerCase());
        for (var i = 0; i < 40; i++) {
            // The nth letter should be uppercase if the nth digit of casemap is 1
            if ((parseInt(addressHash[i], 16) > 7 && unprefixedAddress[i].toUpperCase() !== unprefixedAddress[i]) ||
                (parseInt(addressHash[i], 16) <= 7 && unprefixedAddress[i].toLowerCase() !== unprefixedAddress[i])) {
                return false;
            }
        }
        return true;
    },
    isAddress: function (address) {
        if (!BASIC_ADDRESS_REGEX.test(address)) {
            // Check if it has the basic requirements of an address
            return false;
        }
        else if (SAME_CASE_ADDRESS_REGEX.test(address)) {
            // If it's all small caps or all all caps, return true
            return true;
        }
        else {
            // Otherwise check each case
            var isValidChecksummedAddress = exports.addressUtils.isChecksumAddress(address);
            return isValidChecksummedAddress;
        }
    },
};
//# sourceMappingURL=address_utils.js.map

/***/ }),

/***/ 68497:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var _ = __webpack_require__(39378);
exports.classUtils = {
    // This is useful for classes that have nested methods. Nested methods don't get bound out of the box.
    bindAll: function (self, exclude, thisArg) {
        if (exclude === void 0) { exclude = ['contructor']; }
        for (var _i = 0, _a = Object.getOwnPropertyNames(self); _i < _a.length; _i++) {
            var key = _a[_i];
            var val = self[key];
            if (!_.includes(exclude, key)) {
                if (_.isFunction(val)) {
                    self[key] = val.bind(thisArg || self);
                }
                else if (_.isObject(val)) {
                    exports.classUtils.bindAll(val, exclude, self);
                }
            }
        }
        return self;
    },
};
//# sourceMappingURL=class_utils.js.map

/***/ }),

/***/ 85851:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var bignumber_js_1 = __webpack_require__(73350);
exports.BigNumber = bignumber_js_1.BigNumber;
// By default BigNumber's `toString` method converts to exponential notation if the value has
// more then 20 digits. We want to avoid this behavior, so we set EXPONENTIAL_AT to a high number
bignumber_js_1.BigNumber.config({
    EXPONENTIAL_AT: 1000,
});
//# sourceMappingURL=configured_bignumber.js.map

/***/ }),

/***/ 16997:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var promisify_1 = __webpack_require__(2250);
exports.promisify = promisify_1.promisify;
var address_utils_1 = __webpack_require__(24878);
exports.addressUtils = address_utils_1.addressUtils;
var class_utils_1 = __webpack_require__(68497);
exports.classUtils = class_utils_1.classUtils;
var interval_utils_1 = __webpack_require__(25901);
exports.intervalUtils = interval_utils_1.intervalUtils;
var configured_bignumber_1 = __webpack_require__(85851);
exports.BigNumber = configured_bignumber_1.BigNumber;
var abi_decoder_1 = __webpack_require__(71401);
exports.AbiDecoder = abi_decoder_1.AbiDecoder;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 25901:
/***/ (function(__unused_webpack_module, exports) {


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
exports.intervalUtils = {
    setAsyncExcludingInterval: function (fn, intervalMs, onError) {
        var _this = this;
        var locked = false;
        var intervalId = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!locked) return [3 /*break*/, 1];
                        return [2 /*return*/];
                    case 1:
                        locked = true;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, fn()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        onError(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        locked = false;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); }, intervalMs);
        return intervalId;
    },
    clearAsyncExcludingInterval: function (intervalId) {
        clearInterval(intervalId);
    },
    setInterval: function (fn, intervalMs, onError) {
        var intervalId = setInterval(function () {
            try {
                fn();
            }
            catch (err) {
                onError(err);
            }
        }, intervalMs);
        return intervalId;
    },
    clearInterval: function (intervalId) {
        clearInterval(intervalId);
    },
};
//# sourceMappingURL=interval_utils.js.map

/***/ }),

/***/ 2250:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/**
 * Transforms callback-based function -- func(arg1, arg2 .. argN, callback) -- into an ES6-compatible Promise.
 * Promisify provides a default callback of the form (error, result) and rejects when `error` is not null. You can also
 * supply thisArg object as the second argument which will be passed to `apply`.
 */
// HACK: This can't be properly typed without variadic kinds https://github.com/Microsoft/TypeScript/issues/5453
function promisify(originalFn, thisArg) {
    var _this = this;
    var promisifiedFunction = function () {
        var callArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callArgs[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var callback = function (err, data) {
                            _.isNull(err) ? resolve(data) : reject(err);
                        };
                        originalFn.apply(thisArg, callArgs.concat([callback]));
                    })];
            });
        });
    };
    return promisifiedFunction;
}
exports.promisify = promisify;
//# sourceMappingURL=promisify.js.map

/***/ }),

/***/ 92506:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var types_1 = __webpack_require__(22407);
var _ = __webpack_require__(39378);
var Web3 = __webpack_require__(69906);
var SolidityCoder = __webpack_require__(45191);
var configured_bignumber_1 = __webpack_require__(3421);
var AbiDecoder = /** @class */ (function () {
    function AbiDecoder(abiArrays) {
        this._savedABIs = [];
        this._methodIds = {};
        _.forEach(abiArrays, this._addABI.bind(this));
    }
    AbiDecoder._padZeros = function (address) {
        var formatted = address;
        if (_.startsWith(formatted, '0x')) {
            formatted = formatted.slice(2);
        }
        formatted = _.padStart(formatted, 40, '0');
        return "0x" + formatted;
    };
    // This method can only decode logs from the 0x & ERC20 smart contracts
    AbiDecoder.prototype.tryToDecodeLogOrNoop = function (log) {
        var methodId = log.topics[0];
        var event = this._methodIds[methodId];
        if (_.isUndefined(event)) {
            return log;
        }
        var logData = log.data;
        var decodedParams = {};
        var dataIndex = 0;
        var topicsIndex = 1;
        var nonIndexedInputs = _.filter(event.inputs, function (input) { return !input.indexed; });
        var dataTypes = _.map(nonIndexedInputs, function (input) { return input.type; });
        var decodedData = SolidityCoder.decodeParams(dataTypes, logData.slice('0x'.length));
        var failedToDecode = false;
        _.forEach(event.inputs, function (param) {
            // Indexed parameters are stored in topics. Non-indexed ones in decodedData
            var value = param.indexed ? log.topics[topicsIndex++] : decodedData[dataIndex++];
            if (_.isUndefined(value)) {
                failedToDecode = true;
                return;
            }
            if (param.type === types_1.SolidityTypes.Address) {
                value = AbiDecoder._padZeros(new configured_bignumber_1.BigNumber(value).toString(16));
            }
            else if (param.type === types_1.SolidityTypes.Uint256 ||
                param.type === types_1.SolidityTypes.Uint8 ||
                param.type === types_1.SolidityTypes.Uint) {
                value = new configured_bignumber_1.BigNumber(value);
            }
            decodedParams[param.name] = value;
        });
        if (failedToDecode) {
            return log;
        }
        else {
            return __assign({}, log, { event: event.name, args: decodedParams });
        }
    };
    AbiDecoder.prototype._addABI = function (abiArray) {
        var _this = this;
        _.map(abiArray, function (abi) {
            if (abi.type === types_1.AbiType.Event) {
                var signature = abi.name + "(" + _.map(abi.inputs, function (input) { return input.type; }).join(',') + ")";
                var signatureHash = new Web3().sha3(signature);
                _this._methodIds[signatureHash] = abi;
            }
        });
        this._savedABIs = this._savedABIs.concat(abiArray);
    };
    return AbiDecoder;
}());
exports.AbiDecoder = AbiDecoder;
//# sourceMappingURL=abi_decoder.js.map

/***/ }),

/***/ 10862:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var jsSHA3 = __webpack_require__(75631);
var BASIC_ADDRESS_REGEX = /^(0x)?[0-9a-f]{40}$/i;
var SAME_CASE_ADDRESS_REGEX = /^(0x)?([0-9a-f]{40}|[0-9A-F]{40})$/;
exports.addressUtils = {
    isChecksumAddress: function (address) {
        // Check each case
        var unprefixedAddress = address.replace('0x', '');
        var addressHash = jsSHA3.keccak256(unprefixedAddress.toLowerCase());
        for (var i = 0; i < 40; i++) {
            // The nth letter should be uppercase if the nth digit of casemap is 1
            if ((parseInt(addressHash[i], 16) > 7 && unprefixedAddress[i].toUpperCase() !== unprefixedAddress[i]) ||
                (parseInt(addressHash[i], 16) <= 7 && unprefixedAddress[i].toLowerCase() !== unprefixedAddress[i])) {
                return false;
            }
        }
        return true;
    },
    isAddress: function (address) {
        if (!BASIC_ADDRESS_REGEX.test(address)) {
            // Check if it has the basic requirements of an address
            return false;
        }
        else if (SAME_CASE_ADDRESS_REGEX.test(address)) {
            // If it's all small caps or all all caps, return true
            return true;
        }
        else {
            // Otherwise check each case
            var isValidChecksummedAddress = exports.addressUtils.isChecksumAddress(address);
            return isValidChecksummedAddress;
        }
    },
};
//# sourceMappingURL=address_utils.js.map

/***/ }),

/***/ 3514:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var _ = __webpack_require__(39378);
exports.classUtils = {
    // This is useful for classes that have nested methods. Nested methods don't get bound out of the box.
    bindAll: function (self, exclude, thisArg) {
        if (exclude === void 0) { exclude = ['contructor']; }
        for (var _i = 0, _a = Object.getOwnPropertyNames(self); _i < _a.length; _i++) {
            var key = _a[_i];
            var val = self[key];
            if (!_.includes(exclude, key)) {
                if (_.isFunction(val)) {
                    self[key] = val.bind(thisArg || self);
                }
                else if (_.isObject(val)) {
                    exports.classUtils.bindAll(val, exclude, self);
                }
            }
        }
        return self;
    },
};
//# sourceMappingURL=class_utils.js.map

/***/ }),

/***/ 3421:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var bignumber_js_1 = __webpack_require__(73350);
exports.BigNumber = bignumber_js_1.BigNumber;
// By default BigNumber's `toString` method converts to exponential notation if the value has
// more then 20 digits. We want to avoid this behavior, so we set EXPONENTIAL_AT to a high number
bignumber_js_1.BigNumber.config({
    EXPONENTIAL_AT: 1000,
});
//# sourceMappingURL=configured_bignumber.js.map

/***/ }),

/***/ 31557:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var promisify_1 = __webpack_require__(86200);
exports.promisify = promisify_1.promisify;
var address_utils_1 = __webpack_require__(10862);
exports.addressUtils = address_utils_1.addressUtils;
var class_utils_1 = __webpack_require__(3514);
exports.classUtils = class_utils_1.classUtils;
var interval_utils_1 = __webpack_require__(53552);
exports.intervalUtils = interval_utils_1.intervalUtils;
var configured_bignumber_1 = __webpack_require__(3421);
exports.BigNumber = configured_bignumber_1.BigNumber;
var abi_decoder_1 = __webpack_require__(92506);
exports.AbiDecoder = abi_decoder_1.AbiDecoder;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 53552:
/***/ (function(__unused_webpack_module, exports) {


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
exports.intervalUtils = {
    setAsyncExcludingInterval: function (fn, intervalMs, onError) {
        var _this = this;
        var locked = false;
        var intervalId = setInterval(function () { return __awaiter(_this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!locked) return [3 /*break*/, 1];
                        return [2 /*return*/];
                    case 1:
                        locked = true;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, fn()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        onError(err_1);
                        return [3 /*break*/, 5];
                    case 5:
                        locked = false;
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); }, intervalMs);
        return intervalId;
    },
    clearAsyncExcludingInterval: function (intervalId) {
        clearInterval(intervalId);
    },
    setInterval: function (fn, intervalMs, onError) {
        var intervalId = setInterval(function () {
            try {
                fn();
            }
            catch (err) {
                onError(err);
            }
        }, intervalMs);
        return intervalId;
    },
    clearInterval: function (intervalId) {
        clearInterval(intervalId);
    },
};
//# sourceMappingURL=interval_utils.js.map

/***/ }),

/***/ 86200:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/**
 * Transforms callback-based function -- func(arg1, arg2 .. argN, callback) -- into an ES6-compatible Promise.
 * Promisify provides a default callback of the form (error, result) and rejects when `error` is not null. You can also
 * supply thisArg object as the second argument which will be passed to `apply`.
 */
// HACK: This can't be properly typed without variadic kinds https://github.com/Microsoft/TypeScript/issues/5453
function promisify(originalFn, thisArg) {
    var _this = this;
    var promisifiedFunction = function () {
        var callArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            callArgs[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var callback = function (err, data) {
                            _.isNull(err) ? resolve(data) : reject(err);
                        };
                        originalFn.apply(thisArg, callArgs.concat([callback]));
                    })];
            });
        });
    };
    return promisifiedFunction;
}
exports.promisify = promisify;
//# sourceMappingURL=promisify.js.map

/***/ }),

/***/ 81653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nz": () => (/* binding */ nativeAPI),
/* harmony export */   "_": () => (/* binding */ hasNativeAPI)
/* harmony export */ });
/* unused harmony export sharedNativeAPI */
/* harmony import */ var async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73302);
/* harmony import */ var _iOS_channel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2045);



// This module won't be used in Web. Let it not effecting HMR.
if (false) {}
const hasNativeAPI = "app" === 'app';
let nativeAPI = undefined;
let sharedNativeAPI = (/* unused pure expression or super */ null && (undefined));
if (true) {
    const options = {
        key: 'native',
        parameterStructures: 'by-name'
    };
    if (true) {
        const api = sharedNativeAPI = (0,async_call_rpc_full__WEBPACK_IMPORTED_MODULE_0__/* .AsyncCall */ .LE)(/**
             * Typescript will not add the file to the project dependency tree
             * but webpack will do constant folding
             */ // @ts-ignore
        // eslint-disable-next-line no-useless-concat
        __webpack_require__.e(/* import() */ 8211).then(__webpack_require__.bind(__webpack_require__, 8211)).then((x)=>x.MaskNetworkAPI
        ), {
            ...options,
            channel: new _iOS_channel__WEBPACK_IMPORTED_MODULE_1__/* .iOSWebkitChannel */ .c()
        });
        nativeAPI = {
            type: 'iOS',
            api
        };
    } else {}
}


/***/ }),

/***/ 37867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ PluginNFTAvatarRPC)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17692);
/* harmony import */ var _masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27194);


if (false) {}
const NFTAvatarMessage = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginMessage */ .I4)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu);
const PluginNFTAvatarRPC = (0,_masknet_plugin_infra__WEBPACK_IMPORTED_MODULE_1__/* .createPluginRPC */ .V8)(_constants__WEBPACK_IMPORTED_MODULE_0__/* .PLUGIN_ID */ .Uu, ()=>Promise.all(/* import() */[__webpack_require__.e(2698), __webpack_require__.e(8000), __webpack_require__.e(1440), __webpack_require__.e(2162), __webpack_require__.e(8393), __webpack_require__.e(4227), __webpack_require__.e(4544), __webpack_require__.e(5737), __webpack_require__.e(3883), __webpack_require__.e(2299), __webpack_require__.e(6045), __webpack_require__.e(1077), __webpack_require__.e(2943), __webpack_require__.e(8117), __webpack_require__.e(5756), __webpack_require__.e(8492), __webpack_require__.e(7765), __webpack_require__.e(1305), __webpack_require__.e(5891), __webpack_require__.e(8936), __webpack_require__.e(6265), __webpack_require__.e(1246), __webpack_require__.e(7141), __webpack_require__.e(708), __webpack_require__.e(9447), __webpack_require__.e(4477), __webpack_require__.e(1922), __webpack_require__.e(4074), __webpack_require__.e(9654)]).then(__webpack_require__.bind(__webpack_require__, 21585))
, NFTAvatarMessage.rpc);


/***/ }),

/***/ 58162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "createBuyOrder": () => (/* reexport */ createBuyOrder),
  "createSellOrder": () => (/* reexport */ createSellOrder),
  "fulfillOrder": () => (/* reexport */ fulfillOrder),
  "getAssetFromSDK": () => (/* reexport */ getAssetFromSDK)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/opensea-js@1.2.7/node_modules/opensea-js/lib/index.js
var lib = __webpack_require__(37050);
// EXTERNAL MODULE: ../web3-shared/evm/utils/provider.ts
var provider = __webpack_require__(59531);
// EXTERNAL MODULE: ../web3-shared/evm/types/index.ts
var types = __webpack_require__(95130);
// EXTERNAL MODULE: ./src/extension/background-script/EthereumService.ts + 11 modules
var EthereumService = __webpack_require__(9338);
// EXTERNAL MODULE: ./src/plugins/Collectible/pipes/index.ts
var pipes = __webpack_require__(7597);
// EXTERNAL MODULE: ./src/plugins/Collectible/constants.ts
var constants = __webpack_require__(44283);
;// CONCATENATED MODULE: ./src/plugins/Collectible/apis/openseaFromSDK.ts





function createOpenSeaPortChain(chainId) {
    return new lib/* OpenSeaPort */.I2((0,provider/* createExternalProvider */.z)(EthereumService.request), {
        networkName: (0,pipes/* resolveOpenSeaNetwork */.q0)(chainId),
        apiKey: constants/* OpenSeaAPI_Key */.SP
    }, console.log);
}
function createOpenSeaPort(chainId) {
    return createOpenSeaPortChain(chainId === types/* ChainId.Rinkeby */.a_.Rinkeby ? types/* ChainId.Rinkeby */.a_.Rinkeby : types/* ChainId.Mainnet */.a_.Mainnet);
}
async function getAssetFromSDK(tokenAddress, tokenId) {
    return createOpenSeaPort().api.getAsset({
        tokenAddress,
        tokenId
    });
}
async function createBuyOrder(payload) {
    return createOpenSeaPort().createBuyOrder({
        referrerAddress: constants/* ReferrerAddress */.E8,
        ...payload
    });
}
async function createSellOrder(payload) {
    return createOpenSeaPort().createSellOrder(payload);
}
async function fulfillOrder(payload) {
    return createOpenSeaPort().fulfillOrder({
        referrerAddress: constants/* ReferrerAddress */.E8,
        ...payload
    });
}

;// CONCATENATED MODULE: ./src/plugins/Collectible/apis/index.ts


;// CONCATENATED MODULE: ./src/plugins/Collectible/services.ts



/***/ }),

/***/ 6628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "iV": () => (/* reexport */ CryptoKeyToJsonWebKey),
  "rP": () => (/* reexport */ EMPTY_LIST),
  "G1": () => (/* reexport */ OnDemandWorker),
  "mS": () => (/* reexport */ restorePrototype),
  "Yo": () => (/* reexport */ restorePrototypeArray),
  "Wu": () => (/* reexport */ startEffects)
});

// UNUSED EXPORTS: EMPTY_OBJECT, assert

;// CONCATENATED MODULE: ./utils-pure/type/prototype.ts
/**
 * @description Restore prototype on an object. This does not work with classes that uses ES private field.
 * @example
 * restorePrototype({ value: 1 }, SomeClass.prototype)
 * @param obj The prototype-less object.
 * @param prototype The prototype object
 * @returns The original object with prototype restored.
 */ function restorePrototype(obj, prototype) {
    if (!obj) return obj;
    Object.setPrototypeOf(obj, prototype);
    return obj;
}
function restorePrototypeArray(arr, prototype) {
    if (!arr) return arr;
    arr.forEach((x)=>Object.setPrototypeOf(x, prototype)
    );
    return arr;
}

;// CONCATENATED MODULE: ./utils-pure/type/index.ts

function assert(x, ...args) {
    console.assert(x, ...args);
    if (!x) throw new Error('Assert failed!');
}

;// CONCATENATED MODULE: ./utils-pure/misc.ts
const EMPTY_LIST = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});

;// CONCATENATED MODULE: ./utils-pure/hmr.ts
function startEffects(hot) {
    const ac = new AbortController();
    hot === null || hot === void 0 ? void 0 : hot.dispose(()=>ac.abort()
    );
    return {
        signal: ac.signal,
        run (callback) {
            try {
                ac.signal.addEventListener('abort', callback());
            } catch (error) {
                console.error(error);
            }
        }
    };
}

;// CONCATENATED MODULE: ./utils-pure/crypto/index.ts
function CryptoKeyToJsonWebKey(key) {
    return crypto.subtle.exportKey('jwk', key);
}

;// CONCATENATED MODULE: ./utils-pure/OnDemandWorker/index.ts
// Implementation detail
/**
 * A Worker-like class that create/destory Worker on demand.
 *
 * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
 * This "Alive" MUST be the first message.
 */ class OnDemandWorker extends EventTarget {
    watchUsage() {
        const i = setInterval(()=>{
            if (!this.worker) {
                clearInterval(i);
                return;
            }
            if (Date.now() - this.lastUsed > this.inactiveTimeToTerminate) {
                this.log('inactive for', this.inactiveTimeToTerminate / 1000, 'sec');
                this.terminate();
                clearInterval(i);
            }
        }, Math.min(this.inactiveTimeToTerminate, 60 * 1000));
    }
    log(...args) {
    // console.log(`OnDemandWorker ${this.init[1]?.name}`, ...args)
    }
    use(onReady) {
        this.keepAlive();
        if (this.worker) return onReady();
        this.worker = new Worker(...this.__init);
        // TODO: what if the worker does not start successfully?
        this.worker.addEventListener('message', ()=>{
            this.worker.addEventListener('message', (e)=>this.dispatchEvent(cloneEvent(e))
            );
            onReady();
        }, {
            once: true
        });
        this.worker.addEventListener('error', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.worker.addEventListener('messageerror', (e)=>this.dispatchEvent(cloneEvent(e))
        );
        this.watchUsage();
    }
    terminate() {
        var ref;
        (ref = this.worker) === null || ref === void 0 ? void 0 : ref.terminate();
        this.worker = undefined;
        this.log('terminated');
        this.dispatchEvent(new Event('terminated'));
    }
    keepAlive() {
        this.log('keep alive');
        this.lastUsed = Date.now();
    }
    onTerminated(callback) {
        this.addEventListener('terminated', callback, {
            once: true
        });
        return ()=>this.removeEventListener('terminated', callback)
        ;
    }
    postMessage(...args) {
        this.use(()=>{
            var ref;
            return (ref = this.worker) === null || ref === void 0 ? void 0 : ref.postMessage(...args);
        });
    }
    set onmessage(_) {
        OnDemandWorker_throws();
    }
    set onerror(_) {
        OnDemandWorker_throws();
    }
    set onmessageerror(_) {
        OnDemandWorker_throws();
    }
    /**
     * A Worker-like class that create/destory Worker on demand.
     *
     * The worker passed in MUST post a message "Alive" to notify the OnDemandWorker it is ready to receive message.
     * This "Alive" MUST be the first message.
     */ constructor(...init){
        var ref;
        super();
        this.worker = undefined;
        this.lastUsed = Date.now();
        this.__init = init;
        this.inactiveTimeToTerminate = 15 * 60 * 1000;
        var ref1;
        this.log((ref1 = (ref = init[1]) === null || ref === void 0 ? void 0 : ref.name) !== null && ref1 !== void 0 ? ref1 : 'anonymous Worker', 'created with', ...init);
    }
}
function OnDemandWorker_throws() {
    throw new TypeError('Please use addEventListener');
}
function cloneEvent(e) {
    // @ts-ignore
    return new e.constructor(e.type, e);
}

;// CONCATENATED MODULE: ./utils-pure/index.ts







/***/ }),

/***/ 20326:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lj": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteDB),
/* harmony export */   "X3": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.openDB),
/* harmony export */   "re": () => (/* reexport safe */ _build_index_js__WEBPACK_IMPORTED_MODULE_0__.wrap)
/* harmony export */ });
/* harmony import */ var _build_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31637);
/* harmony import */ var _build_async_iterators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46517);




/***/ }),

/***/ 50092:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapAVAXForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactAVAXForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForAVAX","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForAVAXSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactAVAX","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactAVAXForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"WAVAX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ }),

/***/ 75517:
/***/ ((module) => {

module.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactInputParams","name":"params","type":"tuple"}],"name":"exactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactInputSingleParams","name":"params","type":"tuple"}],"name":"exactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactOutputParams","name":"params","type":"tuple"}],"name":"exactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactOutputSingleParams","name":"params","type":"tuple"}],"name":"exactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowed","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowedIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"sweepToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"sweepTokenWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"unwrapWETH9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"unwrapWETH9WithFee","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]');

/***/ })

}]);