"use strict";
(globalThis["webpackChunk_masknet_extension"] = globalThis["webpackChunk_masknet_extension"] || []).push([[5578],{

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

/***/ })

}]);